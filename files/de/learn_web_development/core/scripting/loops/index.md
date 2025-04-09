---
title: Schleifen im Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Arbeitselemente ausführen müssen. Hier werden wir uns die Schleifenstrukturen in JavaScript ansehen, die solche Anforderungen bearbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis des Zwecks von Schleifen — einer Code-Struktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne den gleichen Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Schleifen abbrechen und fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Bei Schleifen geht es darum, immer wieder dasselbe zu tun. Oft ist der Code bei jedem Durchlauf etwas anders, oder derselbe Code wird ausgeführt, jedoch mit unterschiedlichen Variablen.

### Schleifen Beispielcode

Angenommen, wir wollten 100 zufällige Kreise auf ein {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sets zu sehen):

```html hidden
<button>Update</button> <canvas></canvas>
```

```css hidden
html {
  width: 100%;
  height: inherit;
  background: #ddd;
}

canvas {
  display: block;
}

body {
  margin: 0;
}

button {
  position: absolute;
  top: 5px;
  left: 5px;
}
```

{{ EmbedLiveSample('Looping_code_example', '100%', 400) }}

Hier ist der JavaScript-Code, der dieses Beispiel implementiert:

```js
const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;
});

function random(number) {
  return Math.floor(Math.random() * number);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI,
    );
    ctx.fill();
  }
}

btn.addEventListener("click", draw);
```

### Mit und ohne Schleife

Sie müssen nicht den gesamten Code verstehen, aber lassen Sie uns den Teil des Codes betrachten, der tatsächlich die 100 Kreise zeichnet:

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgb(255 0 0 / 50%)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI,
  );
  ctx.fill();
}
```

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das früher im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Die Menge an benötigtem Code wäre dieselbe, ob wir 100, 1000 oder 10.000 Kreise zeichnen würden.
Es müsste nur eine Zahl geändert werden.

Wenn wir hier keine Schleife verwenden würden, müssten wir den folgenden Code für jeden Kreis wiederholen, den wir zeichnen wollen:

```js
ctx.beginPath();
ctx.fillStyle = "rgb(255 0 0 / 50%)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI,
);
ctx.fill();
```

Das würde sehr langweilig und schwer zu pflegen werden.

## Durchlaufen einer Sammlung

Meistens, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas machen.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Angesichts der Sammlung `cats` erhalten Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript verfügt auch über spezialisiertere Schleifen für Sammlungen, und wir erwähnen hier zwei davon.

Sie können `map()` verwenden, um mit jedem Element in einer Sammlung etwas zu tun und eine neue Sammlung mit den geänderten Elementen zu erstellen:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die von uns bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur passende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht sehr ähnlich aus wie `map()`, außer dass die Funktion, die wir übergeben, einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, dann wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) Lektion lernen werden.
Mit Funktionsausdrücken können wir das obige Beispiel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, durch die Sie durchlaufen können: Hier möchten Sie wirklich nur denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}} Schleife verwenden.
Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, die durch Semikolons getrennt sind:

   1. Einen **Initializer** — dies ist in der Regel eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der durchlaufenen Schleifen zu zählen. Sie wird auch manchmal als **Zählvariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll, zu laufen. Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Beendigungsbedingung erfüllt wurde.
   3. Ein **Schlussausdruck** — dieser wird immer ausgewertet (oder ausgeführt), jedes Mal, wenn die Schleife eine vollständige Iteration durchlaufen hat. Es dient normalerweise dazu, die Zählvariable zu inkrementieren (oder in einigen Fällen zu verringern), um sie dem Punkt näherzubringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Berechnung von Quadraten

Schauen wir uns ein reales Beispiel an, um klarer zu sehen, was diese tun.

```html hidden
<button id="calculate">Calculate</button>
<button id="clear">Clear</button>
<pre id="results"></pre>
```

```js
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

Dies gibt uns die folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: Die Zählvariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: Gehen Sie weiter durch die Schleife, solange `i` kleiner als `10` ist.
3. `i++`: Addieren Sie jedes Mal eine Einheit zu `i`, wenn die Schleife durchlaufen wird.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, also: `i * i`. Wir erstellen eine Zeichenkette, die die durchgeführte Berechnung und das Ergebnis ausdrückt, und fügen diese Zeichenkette dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass die nächste Zeichenkette, die wir hinzufügen, in einer neuen Zeile beginnt. Also:

1. Während des ersten Durchlaufs ist `i = 1`, sodass wir `1 x 1 = 1` hinzufügen werden.
2. Während des zweiten Durchlaufs ist `i = 2`, sodass wir `2 x 2 = 4` hinzufügen werden.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife zu durchlaufen und gehen direkt zum nächsten Codeabschnitt unterhalb der Schleife über und drucken die Nachricht `Fertig!` in einer neuen Zeile aus.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for` Schleife verwenden, um durch eine Sammlung zu iterieren, anstelle einer `for...of` Schleife.

Schauen wir uns nochmals unser `for...of` Beispiel oben an:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Wir könnten diesen Code folgendermaßen umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

In dieser Schleife beginnen wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um nacheinander auf jedes Element im Array zuzugreifen.

Das funktioniert einwandfrei und in früheren Versionen von JavaScript existierte `for...of` nicht, sodass dies der Standardweg war, um durch ein Array zu iterieren.
Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, vergessen, dass der erste Array-Index `0` und nicht `1` ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus solchen Gründen ist es in der Regel am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for` Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel im folgenden Code möchten wir eine Nachricht protokollieren, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der endgültige Ausgabesatz ist nicht sehr gut formuliert:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es bevorzugen, wenn das letzte Element anders behandelt wird, wie folgt:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies zu tun, müssen wir wissen, wann wir bei der letzten Iteration der Schleife sind, und dazu können wir eine `for` Schleife verwenden und den Wert von `i` untersuchen:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

## Schleifen mit break beenden

Wenn Sie eine Schleife vorzeitig beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir uns die [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung gefunden wird, der dem Eingabeausdruck entspricht, wird die `break`-Anweisung die switch-Anweisung sofort beenden und zum Code unterhalb davon übergehen.

Es funktioniert genauso bei Schleifen — eine `break`-Anweisung wird die Schleife sofort abbrechen und den Browser dazu bringen, mit jeglichem direkt danach folgenden Code fortzufahren.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten?
Zuerst etwas einfaches HTML — eine Text-{{htmlelement("input")}} zum Eingeben eines Namens, um im Nachfolgenden danach zu suchen, ein {{htmlelement("button")}}, um eine Suche abzuschicken, und ein {{htmlelement("p")}}, um die Ergebnisse anzuzeigen:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Nun der JavaScript-Code:

```js
const contacts = [
  "Chris:2232322",
  "Sarah:3453456",
  "Bill:7654322",
  "Mary:9998769",
  "Dianne:9384975",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const searchName = input.value.toLowerCase();
  input.value = "";
  input.focus();
  para.textContent = "";
  for (const contact of contacts) {
    const splitContact = contact.split(":");
    if (splitContact[0].toLowerCase() === searchName) {
      para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Contact not found.";
  }
});
```

{{ EmbedLiveSample('Exiting_loops_with_break', '100%', 100) }}

1. Zuerst haben wir einige Variablendefinitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, die durch einen Doppelpunkt getrennt sind.
2. Als Nächstes fügen wir dem Button (`btn`) einen Event-Listener hinzu, damit beim Klick auf den Button ein Code ausgeführt wird, um die Suche auszuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den im Textfeld eingegebenen Wert in einer Variable namens `searchName`, leeren dann das Textfeld und setzen den Fokus erneut darauf, um bereit für die nächste Suche zu sein. Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) Methode auf dem String ausführen, damit die Suchen nicht durch Groß- und Kleinschreibung unterschieden werden.
4. Jetzt zum interessanten Teil, die `for...of` Schleife:

   1. Innerhalb der Schleife teilen wir zuerst den aktuellen Kontakt bei dem Zeichen `:` auf und speichern das Ergebnis in einem Array namens `splitContact`.
   2. Anschließend verwenden wir eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut transformiert in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)), gleich dem eingegebenen `searchName` ist. Wenn dies der Fall ist, tragen wir einen String in den Paragraphen ein, um die Telefonnummer des Kontakts mitzuteilen und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und falls nicht, setzen wir den Paragraphentext auf "Kontakt nicht gefunden."

> [!NOTE]
> Sie können sich auch den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ansehen (ebenfalls [siehe sie in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen überspringen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, wird zur nächsten Iteration der Schleife gesprungen.
Betrachten wir ein weiteres Beispiel, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganze Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, obwohl die Schleife selbst ein wenig anders ist:

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Output: ";
  const num = input.value;
  input.value = "";
  input.focus();
  for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    para.textContent += `${i} `;
  }
});
```

Hier ist die Ausgabe:

{{ EmbedLiveSample('Skipping_iterations_with_continue', '100%', 100) }}

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for` Schleife erhält einen Zähler, der bei 1 beginnt (da wir uns in diesem Fall für 0 nicht interessieren), eine Abbruchbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der jedes Mal 1 zum Zähler addiert.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir prüfen, ob sie mit sich selbst gleich ist, wenn sie auf die nächste ganze Zahl abgerundet wird (das ist, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl macht, die ihm übergeben wird).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, also interessieren wir uns nicht dafür. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den gesamten `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Paragrapheninhalts.

> [!NOTE]
> Sie können sich auch den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ansehen (ebenfalls [siehe sie in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige allgemeine Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere und, während Sie nicht alle jetzt verstehen müssen, ist es sinnvoll, sich die Struktur von ein paar weiteren anzusehen, damit Sie dieselben Funktionen in einer leicht anderen Weise erkennen können.

Zuerst werfen wir einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife. Diese Schleife sieht in der Syntax folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese funktioniert sehr ähnlich wie die `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird, und der Schlussausdruck innerhalb der Schleife nach dem Code enthalten ist, der ausgeführt wird, anstatt dass diese beiden Elemente innerhalb der Klammern enthalten sind.
Die Bedingung ist innerhalb der Klammern und wird vom Schlüsselwort `while` und nicht `for` eingeführt.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in derselben Reihenfolge wie in der `for`-Schleife definiert.
Das liegt daran, dass eine Initialisierung definiert sein muss, bevor Sie überprüfen können, ob die Bedingung wahr ist.
Der Schlussausdruck ist dann angegeben, nachdem der Code innerhalb der Schleife ausgeführt wurde (eine Iteration abgeschlossen wurde), die nur dann durchlaufen wird, wenn die Bedingung noch wahr ist.

Lassen Sie uns nochmals das Beispiel mit unserer Katzenliste betrachten, jedoch mit einer `while`-Schleife neu geschrieben:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

> [!NOTE]
> Dies funktioniert weiterhin genau wie erwartet — sehen Sie sich das [Beispiel live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch sehen Sie sich den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html) an).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt die Initialisierung wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort direkt vor den geschweiften Klammern enthält den auszuführenden Code und den Schlussausdruck.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife liegt. So führen wir diesen Code immer aus und prüfen dann, ob wir ihn erneut ausführen müssen. Bei `while`- und `for`-Schleifen erfolgt die Überprüfung zuerst, sodass der Code möglicherweise niemals ausgeführt wird.

Lassen Sie uns unser Beispiel zur Katzenliste nochmals mit einer `do...while`-Schleife neu schreiben:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."
```

> [!NOTE]
> Auch hier funktioniert alles wie erwartet — werfen Sie einen Blick [auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (auch sehen Sie sich den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html) an).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung schließlich falsch wird.
> Ansonsten wird die Schleife endlos laufen und entweder wird der Browser gezwungen sein, sie zu stoppen, oder sie wird abstürzen. Dies nennt man eine **endlose Schleife**.

## Aktives Lernen: Countdown zum Start

In dieser Übung möchten wir, dass Sie einen einfachen Countdown zum Start in das Ausgabefeld drucken, von 10 bis zum Abheben.
Konkret möchten wir, dass Sie:

- Von 10 bis zu 0 iterieren. Wir haben Ihnen einen Initialisierer gegeben — `let i = 10;`.
- Bei jeder Iteration einen neuen Paragraphen erstellen und ihn dem Ausgabefeld `<div>` hinzufügen, den wir mit `const output = document.querySelector('.output');` ausgewählt haben.
  In Kommentaren haben wir Ihnen drei Codezeilen gegeben, die irgendwo innerhalb der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Paragraphen.
  - `output.appendChild(para);` — hängt den Paragraphen an das Ausgabefeld `<div>` an.
  - `para.textContent =` — macht den Text innerhalb des Paragraphen gleich dem, was Sie rechts vom Gleichheitszeichen setzen.

- Verschiedene Iterationsnummern erfordern unterschiedlichen Text, der in den Paragraphen für diese Iteration gesetzt wird (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Paragraphen.
  - Wenn die Zahl 0 ist, drucken Sie "Abheben!" in den Paragraphen.
  - Bei jeder anderen Zahl drucken Sie nur die Zahl in den Paragraphen.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jedem Durchlauf herunter und nicht nach oben, also möchten Sie **nicht** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu tippen (zum Beispiel (while(i>=0)), könnte der Browser stecken bleiben, da Sie das Endbedingungs-Set noch nicht eingegeben haben. Also, seien Sie vorsichtig. Sie können beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu umgehen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen.
Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 300px;width: 95%">
const output = document.querySelector('.output');
output.textContent = "";

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

let jsSolution = `const output = document.querySelector('.output');
output.textContent = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = \`Countdown \${i}\`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Launch_countdown', '100%', 900) }}

## Aktives Lernen: Eine Gästeliste ausfüllen

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zuzulassen sind, und eine für Gäste, die abgelehnt werden.

Konkret möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Während jeder Iteration der Schleife, überprüfen Sie, ob das aktuelle Array-Element "Phil" oder "Lola" entspricht, indem Sie eine Bedingungsanweisung verwenden:

  - Wenn es der Fall ist, verketten Sie das Array-Element an das Ende des `refused`-Paragraphen `textContent`, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn es das nicht ist, verketten Sie das Array-Element an das Ende des `admitted`-Paragraphen `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Anfangspunkt einer Zeile, die etwas am Ende von `refused.textContent` verketten wird.
- `admitted.textContent +=` — der Anfangspunkt einer Zeile, die etwas am Ende von `admitted.textContent` verketten wird.

Zusatzfrage — nachdem Sie die oben genannten Aufgaben erfolgreich abgeschlossen haben, werden Sie zwei Namenslisten übrig haben, die durch Kommas getrennt sind, aber sie werden ungeordnet sein — es wird ein Komma am Ende jeder sein. Können Sie herausfinden, wie Sie Zeilen schreiben können, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen? Sehen Sie sich den Artikel über [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) zur Hilfe an.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen.
Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const jsSolution = `
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += \`\${person}, \`;
  } else {
    admitted.textContent += \`\${person}, \`;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';`;

let solutionEntry = jsSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = () => {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Filling_in_a_guest_list', '100%', 680) }}

## Welche Schleifenart sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Spielraum für Fehler.

Für andere Zwecke sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um dieselben Probleme zu lösen, und welche Sie verwenden, hängt größtenteils von Ihrer persönlichen Präferenz ab — welche Sie am einfachsten zu merken finden oder am intuitivsten halten.
Wir würden `for` empfehlen, zumindest am Anfang, da es wahrscheinlich am einfachsten ist, alles zu merken — der Initialisierer, die Bedingung und der Schlussausdruck müssen alle ordentlich in die Klammern eingefügt werden, sodass es leicht zu sehen ist, wo sie sind, und zu überprüfen, dass Sie sie nicht vermissen.

Lassen Sie uns sie alle nochmals betrachten.

Zuerst `for...of`:

```js-nolint
for (const item of array) {
  // code to run
}
```

`for`:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

`while`:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

und schließlich `do...while`:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

> [!NOTE]
> Es gibt auch andere Schleifenarten/Features, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie Ihr Wissen über Schleifen vertiefen möchten, lesen Sie unseren erweiterten [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Überprüfen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Überprüfen Sie Ihr Wissen: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und die verschiedenen Optionen beim Schleifen von Code in JavaScript offenbart.
Sie sollten nun klar darüber sein, warum Schleifen ein gutes Mittel zur Bearbeitung von wiederholtem Code sind und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Als Nächstes werden wir uns Funktionen ansehen.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Referenz zur for...of-Schleife](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [Referenz zur for-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/for)
- [Referenzen zur while- und do...while-Schleife](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [Referenzen zu break- und continue-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
