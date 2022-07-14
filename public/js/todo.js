$("#add").on("click", function () {
  const name = $("#name").val();
  const deadline = $("#deadline").val();
  const status = $("#status").val();
  // console.log(name, deadline, status);
  $.ajax({
    type: "POST",
    url: `/todo?name=${name}&deadline=${deadline}&status=${status}`,
  })
    .then(function (data) {
      console.log(data);
      render();
    })
    .catch(function (err) {
      console.log(err);
    });
});
render();
function render() {
  $(".todo").html("");
  $(".doing").html("");
  $(".done").html("");
  $.ajax({
    url: "/todo",
    type: "GET",
  })
    .then(function (data) {
      data.data.map(function (a, b) {
        let div = `<tr>
                <td>${a.name}</td>
                <td>${a.deadline}</td>
                <td>
                <!-- Button trigger modal -->
<button type="button" class="btn btn-primary change" data-bs-toggle="modal" data-bs-target="#staticBackdrop${a._id}" >
<i class="fa-solid fa-file-pen"></i>
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop${a._id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text" name="" id="newname${a._id}" placeholder="newname" />
      <input type="date" name="" id="newdeadline${a._id}" placeholder="newdeadline" />
      <select name="" id="newstatus${a._id}">
        <option value="todo">todo</option>
        <option value="doing">doing</option>
        <option value="done">done</option>
      </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  id="change${a._id}" data-bs-dismiss="modal" class="btn btn-primary ">change</button>
      </div>
    </div>
  </div>
</div>
                </td>
                <td><button class="delete" id=delete${a._id} ><i class="fa-solid fa-trash-can"></i></button>
                </td>
                
                </tr>`;

        if (a.status === "todo") {
          $(".todo").append(div);
        } else if (a.status === "doing") {
          $(".doing").append(div);
        } else {
          $(".done").append(div);
        }
        $(`#delete${a._id}`).on("click", function () {
          $.ajax({
            url: "/todo/" + a._id,
            type: "DELETE",
          })
            .then(function (data) {
              console.log(data);
              render();
            })
            .catch(function (err) {
              console.log(err);
            });
        });
        $(`#change${a._id}`).on("click", function () {
          const newname = $(`#newname${a._id}`).val();
          const newdeadline = $(`#newdeadline${a._id}`).val();
          const newstatus = $(`#newstatus${a._id}`).val();
          console.log(newname, newdeadline, newstatus);
          $.ajax({
            type: "PUT",
            url: "/todo/" + a._id,
            data: {
              newname: newname,
              newdeadline: newdeadline,
              newstatus: newstatus,
            },
          })
            .then(function (data) {
              console.log(data);
            })
            .catch(function (err) {
              console.log(err);
            });
          window.location.reload();
        });
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}
