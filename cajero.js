class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    if(dinero <= disponible)
    {

        var dinero_a = dinero;
        disponible -= dinero_a;
        saldo.innerHTML = "<strong>SALDO DISPONIBLE : $ " + disponible + "</strong>";
        for(var bi in caja)
        {

            if(dinero_a > 0 && dinero_a % 5 == 0)
            {

                div = Math.floor(dinero_a / caja[bi].valor);
                if(div > caja[bi].cantidad)
                {
                    papeles = caja[bi].cantidad;

                }
                else
                {
                    papeles = div;

                }
                entregado.push( new Billete(caja[bi].valor, papeles) );
                dinero_a = dinero_a - (caja[bi].valor * papeles);
                caja[bi].cantidad -= papeles;

            }

        }

        if(dinero_a > 0 || dinero <= 0)
        {
            disponible += dinero;
            saldo.innerHTML = "<strong>SALDO DISPONIBLE : $ " + disponible + "</strong>";
            resultado.innerHTML += "<strong>Soy un cajero malo y no puedo darte esa cantidad 💔 <strong/><hr />";
        }
        else
        {

            resultado.innerHTML += "<strong>🧾 TRANSACCIÓN Nº " + (transaccion += 1) + "</strong><br />";
            var total = 0;
            for(var e of entregado)
            {

                if(e.cantidad > 0)
                {
                    resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
                    m = e.valor * e.cantidad;
                    total += m;
                }
                entregado = [];

            }
            
            resultado.innerHTML += "<strong>TOTAL : $ " + total + "<strong/><hr />";

        }

    }
    else
    {
        resultado.innerHTML += "<strong>No tengo suficiente dinero 💔 <strong/><hr />";
    }

}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 20) );
caja.push( new Billete(50, 30) );
caja.push( new Billete(20, 40) );
caja.push( new Billete(10, 50) );
caja.push( new Billete(5, 60) );
var dinero = 0;
var div = 0;
var papeles = 0;
var transaccion = 0;

var disponible = 0;
for(var d of caja)
{
    s = d.valor * d.cantidad;
    disponible += s;
}
var saldo = document.getElementById("saldo");
saldo.innerHTML = "<strong>SALDO DISPONIBLE : $ " + disponible + "</strong>";

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);