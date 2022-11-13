var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
let w = 0;
let u = 0;
let t = [];
let authors = [];
fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      authors = data;
      console.log(authors)
      let htmlcode = ` `;
      data.forEach(function(t1) {
        htmlcode = htmlcode +`
                <tr class="data-row">
                <td class="column1">${t1.id}</td>
                <td class="column2">${t1.firstName}</td>
                <td class="column3">${t1.lastName}</td>
                <td class="column4">${t1.email}</td>
                <td class="column5">${t1.phone}</td>
                </tr>
               ` ;
    });
    $("#loop").html (htmlcode);
    $('table tbody tr').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
      
      $(document).ready(function(){
        // code to read selected table row cell data (values).
        $(".data-row").on('click',function(){
             var currentRow=$(this).closest("tr");
             w=currentRow.find("td:eq(0)").html();
             u= currentRow.find("td:eq(1)").html();
             t = authors.find(obj => obj.id == w )
             console.log(w)
             console.log(t);
             let htmlCode1 = ` `;
             
                htmlCode1 =
                 `<div><b>User selected:&nbsp;${t.firstName}&nbsp;${t.lastName}</b></div>
                 <div>
                     <b>Description: </b>
                     <textarea cols="50" rows="5" readonly>
                     ${t.description}
                     </textarea>
                 </div>
                 <div><b>Address:</b> ${t.address.streetAddress}</div>
                 <div><b>City:</b> ${t.address.city}</div>
                 <div><b>State:</b> ${t.address.state}</div>
                 <div><b>Zip:</b> ${t.address.zip}</div>
               `;
             
             $("#info-content").html (htmlCode1);
        });
    });
    document.getElementById("search-box").addEventListener("keydown", my);

function my() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search-box");
    console.log(input.value)
    filter = input.value.toUpperCase();
    table = document.getElementById("loop")
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

    })


