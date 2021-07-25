let Carousel = document.getElementById("Carousel");
let children = Carousel.children;
a = document.getElementById("a")
b = document.getElementById("b")
c = document.getElementById("c")
d = document.getElementById("d")
e = document.getElementById("e")
f = document.getElementById("f")
g = document.getElementById("g")
h = document.getElementById("h")
i = document.getElementById("i")
j = document.getElementById("j")
k = document.getElementById('k')
l = document.getElementById("l")
m = document.getElementById("m")
n = document.getElementById("n")
o = document.getElementById("o")
p = document.getElementById("p")
q = document.getElementById("q")
r = document.getElementById("r")
s = document.getElementById("s")
t = document.getElementById("t")
u = document.getElementById("u")
v = document.getElementById("v")
w = document.getElementById("w")
x = document.getElementById("x")
y = document.getElementById("y")
z = document.getElementById("z")
z2 = document.getElementById("z2")
z3 = document.getElementById("z3")
z4 = document.getElementById("z4")
z5 = document.getElementById("z5")
z6 = document.getElementById("z6")
z7 = document.getElementById("z7")
function turn_right() {
    if (window.getComputedStyle(children[0]).left == "-6160px") {
        return;
    }
    for (let index = 0; index < children.length; index++) {
        const element = children[index];
        children[index].style.left = parseInt(window.getComputedStyle(children[index]).left) -880 +"px" 
    }
}

function turn_left() {
    if (window.getComputedStyle(children[0]).left == "0px") {
        return;
    }
    for (let index = 0; index < children.length; index++) {
        const element = children[index];
        children[index].style.left = parseInt(window.getComputedStyle(children[index]).left) + 880 +"px" 
    }
}

function turn_all() {
    for (let index = 0; index < children.length; index++) {
        const element = children[index];
        children[index].style.display = "block";
        children[index].style.left = "0px";
    }
}

function turn_tank() {
    turn_all();
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    j.style.display = "none";
    k.style.display = "none";
    l.style.display = "none";
    n.style.display = "none";
    o.style.display = "none";
    p.style.display = "none";
    q.style.display = "none";
    r.style.display = "none";
    s.style.display = "none";
    t.style.display = "none";
    u.style.display = "none";
    v.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
    z2.style.display = "none"
    z3.style.display = "none";
    z4.style.display = "none";
    z7.style.display = "none";
} 

function turn_damage() {
    turn_all();
    b.style.display = "none";
    c.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    i.style.display = "none";
    k.style.display = "none";
    m.style.display = "none";
    q.style.display = "none";
    t.style.display = "none";
    w.style.display = "none";
    x.style.display = "none";
    z5.style.display = "none";
    z6.style.display = "none";
    z7.style.display = "none";
}

// function turn_support() {
//     c
//     f
//     g
//     k 
//     q
//     t
//     z
// }