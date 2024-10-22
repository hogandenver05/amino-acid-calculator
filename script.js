let box = 1;
var base1, base2, base3 = '';

// Insert text on-screen
function a() {
    document.getElementById(`box${box}`).innerHTML = "A";
    if (box < 3) {
        box++;
    } else {
        box = 0;
    }
}
function t() {
    document.getElementById(`box${box}`).innerHTML = "T";
    if (box < 3) {
        box++;
    } else {
        box = 0;
    }
}
function c() {
    document.getElementById(`box${box}`).innerHTML = "C";
    if (box < 3) {
        box++;
    } else {
        box = 0;
    }
}
function g() {
    document.getElementById(`box${box}`).innerHTML = "G";
    if (box < 3) {
        box++;
    } else {
        box = 0;
    }
}

// Clear text from screen
function clr() {
    for (let index = 1; index < 4; index++) {
        document.getElementById(`box${index}`).innerHTML = '#';
    }
    box = 1;
}

// Retrive text from screen
// and calculate Amino Acid
function sub() {
    var base1 = document.getElementById("box1").innerText;
    var base2 = document.getElementById("box2").innerText;
    var base3 = document.getElementById("box3").innerText;

    if (base1 === 'T') {
        base1 = 'U'
    }
    if (base2 === 'T') {
        base2 = 'U'
    }
    if (base2 === 'T') {
        base2 = 'U'
    }

    if (base1 === 'U')
    {
        if (base2 === 'U')
        {
            if ((base3 === 'U')|| (base3 === 'C'))
            {
                document.getElementById("Acid").innerHTML = "Phenylalainie";
            }
            else
            {
                document.getElementById("Acid").innerHTML = "Leucine";
            }
        }
        else if (base2 === 'C')
        {
            document.getElementById("Acid").innerHTML = "Serine";
        }
        else if (base2 === 'A')
        {
            if ((base3 === 'U')|| (base3 === 'C'))
            {
                document.getElementById("Acid").innerHTML = "Tyrosine";
            }
            else
            {
                document.getElementById("Acid").innerHTML = "(STOP)";
            }
        }
        else if (base2 === 'G')
        {
            if (base3 === 'A')
            {
                document.getElementById("Acid").innerHTML = "(STOP)";
            }
            else if (base3 === 'G')
            {
                document.getElementById("Acid").innerHTML = "Tryptophan";
            }
            else
            {
                document.getElementById("Acid").innerHTML = "Cysteine";
            }
        }
    }
    else if (base1 === 'C')
    {
        if (base2 === 'U')
        {
            document.getElementById("Acid").innerHTML = "Leucine";
        }
        else if (base2 === 'C')
        {
            document.getElementById("Acid").innerHTML = "Proline";
        }
        else if (base2 === 'A')
        {
            if ((base3 === 'U')|| (base3 === 'C'))
            {
                document.getElementById("Acid").innerHTML = "Histidine";
            }
            else
            {
                document.getElementById("Acid").innerHTML = "Glutamine";
            }
        }
        else
        {
            document.getElementById("Acid").innerHTML = "Argimime";
        }
    }
    else if (base1 === 'A')
    {
        if (base2 === 'U')
        {
            document.getElementById("Acid").innerHTML = "Isoteucine";
        }
        else if (base2 === 'C')
        {
            document.getElementById("Acid").innerHTML = "Threonine";
        }
        else if (base2 === 'A')
        {
            if (base3 === 'G')
            {
                document.getElementById("Acid").innerHTML = "Lysine";
            }
            else
            {
                document.getElementById("Acid").innerHTML = "Asparagine";
            }

        }
        else if (base2 === 'G')
        {
            if ((base3 === 'U')|| (base3 === 'C'))
            {
                document.getElementById("Acid").innerHTML = "Serine";
            }
            else
            {
                document.getElementById("Acid").innerHTML = "Arginine";
            }
        }
    }
    else if (base1 === 'G')
    {
        if (base2 === 'U')
        {
            document.getElementById("Acid").innerHTML = "Valine";
        }
        else if (base2 === 'C')
        {
            document.getElementById("Acid").innerHTML = "Alanine";
        }
        else if (base2 === 'A')
        {
            document.getElementById("Acid").innerHTML = "Aspartic Acid";
        }
        else
        {
            document.getElementById("Acid").innerHTML = "Glycine";
        }
    }
    box = 1;
}