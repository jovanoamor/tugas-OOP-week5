class Form{
    constructor(nama,umur,uangSangu)
    {
        this.name = nama;
        this.age = umur,
        this.lunchMoney = uangSangu;
    }

    insertToTable(form){
        let table = document.getElementById('table');
        let tr = document.createElement('tr');
        
        for(const property in form)
        {
            let td = document.createElement('td');

            td.textContent = form[property];

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
 

function submit(){
    //get value
    let name =document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let lunchMoney = document.getElementById("lunchMoney").value;

    //validation
    if(name.length < 10)
    {
        alert("nama setidaknya harus mempunyai 10 karakter");    
        return;
    }

    if(age < 25)
    {
        alert("Anda terlalu muda untuk ini");
        return;
    }

    if(lunchMoney < 100000 || lunchMoney > 1000000)
    {
        alert("uang sangu mempunyai nilai antara Rp.100,000 to Rp.1,000,000")
        return;
    }

    let newForm = new Form(name,age,lunchMoney);

    newForm.insertToTable(newForm);
}

