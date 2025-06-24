---
title: Code-Schleifen
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um sich wiederholende Aufgaben schnell zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Aufgaben zu erledigen haben. Hier werden wir die Schleifenstrukturen betrachten, die in JavaScript verfügbar sind, um solche Bedürfnisse zu erfüllen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Verständnis des Zwecks von Schleifen — einer Codestruktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne dass Sie denselben Code für jede Iteration wiederholen müssen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Schleifen verlassen und fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, immer wieder dasselbe zu tun. Oftmals wird der Code bei jeder Schleifenrunde leicht anders sein, oder derselbe Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Beispiel für Schleifencode

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie den _Aktualisieren_-Button, um das Beispiel immer wieder auszuführen und unterschiedliche zufällige Sets zu sehen):

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

Sie müssen nicht den gesamten Code verstehen, aber schauen wir uns den Teil des Codes an, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten das grundlegende Konzept verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, früher im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück. Der benötigte Codeumfang wäre der gleiche, ob wir nun 100 Kreise, 1000 oder 10.000 zeichnen.
Nur eine Zahl muss geändert werden.

Ohne eine Schleife müssten wir den folgenden Code für jeden zu zeichnenden Kreis wiederholen:

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

Das würde sehr langweilig und schwer zu pflegen.

## Durchlaufen einer Sammlung

Meistens, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, unter anderem {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel bedeutet `for (const cat of cats)`:

1. Ausgehend von der Sammlung `cats` das erste Element in der Sammlung abrufen.
2. Es der Variablen `cat` zuweisen und dann den Code zwischen den geschweiften Klammern `{}` ausführen.
3. Zum nächsten Element gelangen und (2) wiederholen, bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript verfügt auch über spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei von ihnen erwähnen.

Sie können `map()` verwenden, um mit jedem Element in einer Sammlung etwas zu tun und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier geben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}} weiter, und `map()` ruft die Funktion einmal für jedes Element des Arrays auf und gibt das Element vor. Es fügt dann den Rückgabewert jedes Funktionsaufrufs in einem neuen Array hinzu und gibt das neue Array schließlich zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle Katzen als Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu prüfen und eine neue Sammlung zu erstellen, die nur die Elemente enthält, die den Test bestehen:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Das sieht sehr ähnlich zu `map()` aus, außer dass die Funktion, die wir übergeben, einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: wenn sie `true` zurückgibt, wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Functions](/de/docs/Learn_web_development/Core/Scripting/Functions)-Lektion kennenlernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die standardmäßige for-Schleife

Im oben diskutierten "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie iterieren wollen: Sie möchten den gleichen Code einfach 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden.
Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:

   1. Einen **initializer** — das ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und die erhöht wird, um die Anzahl der durchlaufenen Schleifen zu zählen.
      Er wird manchmal auch als **Zählervariable** bezeichnet.
   2. Eine **condition** — dies definiert, wann die Schleife aufhören soll.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Endbedingung erfüllt ist.
   3. Ein **final-expression** — dies wird immer ausgewertet (oder ausgeführt), jedes Mal, wenn die Schleife eine vollständige Iteration durchlaufen hat.
      Es dient normalerweise dazu, die Zählervariable zu erhöhen (oder in einigen Fällen zu verringern), um den Punkt näher zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Quadrate berechnen

Schauen wir uns ein praktisches Beispiel an, damit wir besser visualisieren können, was diese tun.

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

Dies ergibt die folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet die Quadratzahlen für die Zahlen von 1 bis 9 und gibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Brechen wir die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile auf:

1. `let i = 1`: die Zählervariable `i` startet bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal, wenn wir die Schleife durchlaufen, neu zuweisen.
2. `i < 10`: die Schleife wird fortgesetzt, solange `i` kleiner als `10` ist.
3. `i++`: bei jeder Schleifenrunde wird `i` um eins erhöht.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, also: `i * i`. Wir erstellen einen String, der die Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass der nächste hinzugefügte String in einer neuen Zeile beginnt. Also:

1. Während der ersten Ausführung ist `i = 1`, also werden wir `1 x 1 = 1` hinzufügen.
2. Während der zweiten Ausführung ist `i = 2`, also werden wir `2 x 2 = 4` hinzufügen.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen und gehen direkt zum nächsten Codeabschnitt unter der Schleife, um die Nachricht `Finished!` in eine neue Zeile zu drucken.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um statt einer `for...of`-Schleife durch eine Sammlung zu iterieren.

Schauen wir uns noch einmal unser obiges Beispiel mit `for...of` an:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Wir könnten diesen Code so umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

In dieser Schleife beginnen wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array nacheinander zuzugreifen.

Dies funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, sodass dies die Standardmethode war, um durch ein Array zu iterieren.
Jedoch bietet es mehr Möglichkeiten, Bugs in Ihren Code einzuführen. Beispielsweise:

- Sie könnten `i` bei `1` starten, dabei vergessen, dass der erste Array-Index `0` ist, nicht `1`.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index `bei length - 1` ist.

Aus solchen Gründen ist es normalerweise die beste Wahl, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel, im folgenden Code möchten wir eine Nachricht protokollieren, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der endgültige Ausgabesatz ist nicht sehr gut geformt:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es vorziehen, den letzten Namen der Katze anders zu behandeln, wie dies:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu erreichen, müssen wir wissen, wann wir uns in der letzten Iteration der Schleife befinden, und um das zu ermöglichen, können wir eine `for`-Schleife verwenden und den Wert von `i` betrachten:

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

## Schleifen verlassen mit break

Wenn Sie eine Schleife vorzeitig verlassen möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir hatten dies bereits im vorherigen Artikel kennengelernt, als wir [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) betrachteten — wenn ein Fall in einer switch-Anweisung mit dem eintretenden Ausdruck übereinstimmt, verlässt die `break`-Anweisung die switch-Anweisung sofort und fährt mit dem Code danach fort.

Bei Schleifen ist es genauso — eine `break`-Anweisung wird die Schleife sofort beenden und der Browser wird mit dem Code weitermachen, der danach kommt.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollen?
Zuerst etwas einfaches HTML — ein Texteingabefeld auf {{htmlelement("input")}}, das uns erlaubt, einen Namen zur Suche einzugeben, ein {{htmlelement("button")}}-Element, um die Suche zu übermitteln, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Jetzt zum JavaScript:

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

1. Zunächst haben wir einige Variablen-Definitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, getrennt durch ein Doppelpunkt.
2. Als nächstes binden wir einen Event-Listener an den Button (`btn`), sodass, wenn er gedrückt wird, etwas Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den im Texteingabefeld angegebenen Wert in einer Variablen namens `searchName`, leeren dann das Texteingabefeld und fokussieren es erneut, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf dem String ausführen, um die Suche nicht zwischen Groß- und Kleinschreibung zu unterscheiden.
4. Nun zum interessanten Teil, die `for...of`-Schleife:

   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt an dem Doppelpunktzeichen auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Konditionale Anweisung, um zu prüfen, ob `splitContact[0]` (der Name des Kontakts, erneut mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) in Kleinbuchstaben) gleich dem eingegebenen `searchName` ist.
      Wenn ja, geben wir eine Zeichenfolge in den Absatz ein, die berichtet, welche Nummer der Kontakt hat, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatzinhalt auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ansehen (auch [siehe ihn live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu beenden, überspringt sie zur nächsten Iteration der Schleife.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganzen Zahlen) sind.

Das HTML ist im Grunde das gleiche wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, obwohl die Schleife selbst ein bisschen anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl sein (`num`). Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da wir in diesem Fall nicht an 0 interessiert sind), eine Abbruchbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der jedes Mal 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife ermitteln wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich sich selbst ist, wenn sie auf die nächste ganze Zahl abgerundet wurde (das ist es, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) der übergebenen Zahl macht).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel keine ganze Zahl ist, und wir sind nicht interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo zu speichern.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen fügen wir den aktuellen `i`-Wert plus ein Leerzeichen ans Ende des Absatzinhalts hinzu.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ansehen (auch [siehe ihn live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht die einzige Art allgemeiner Schleife, die in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie jetzt nicht alle verstehen müssen, lohnt es sich, sich zumindest die Struktur von ein paar anderen anzusehen, damit Sie die gleichen Funktionen in einer etwas anderen Form erkennen können.

Werfen wir zuerst einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife. Die Syntax dieser Schleife sieht etwa so aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese funktioniert sehr ähnlich zur `for`-Schleife, mit der Ausnahme, dass die Initialisierungsvariable vor der Schleife festgelegt wird und der endgültiger Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente innerhalb der Klammern einzuschließen.
Die Bedingung ist innerhalb der Klammern angegeben, die durch das Schlüsselwort `while` vor den Klammern stehen, anstelle von `for`.

Die gleichen drei Elemente sind weiterhin vorhanden, und sie werden in der gleichen Reihenfolge definiert wie in der for-Schleife.
Dies liegt daran, dass Sie eine Initialisierung definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist.
Der endgültiger Ausdruck wird dann nach dem Code innerhalb der Schleife ausgeführt (eine Iteration wurde abgeschlossen), was nur dann geschieht, wenn die Bedingung noch wahr ist.

Schauen wir uns noch einmal unser Beispiel Katzeliste an, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch genauso wie erwartet — sehen Sie es [live auf GitHub laufend](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt die Initialisierung erneut zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den Endausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Wir führen diesen Code also immer aus und prüfen dann, ob wir ihn erneut ausführen müssen. Bei `while`- und `for`-Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Schreiben wir unser Beispiellisting für Katzen erneut um, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert genauso wie erwartet — sehen Sie es [live auf GitHub laufend](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei allen Arten von Schleifen müssen Sie sicherstellen, dass die Initialisierung erhöht wird oder je nach Bedarf verringert wird, sodass die Bedingung schließlich false wird.
> Ansonsten läuft die Schleife unendlich weiter und entweder der Browser wird sie stoppen oder es wird abstürzen. Dies wird als **Endlosschleife** bezeichnet.

## Aktives Lernen: Countdown

In dieser Übung möchten wir, dass Sie einen einfachen Countdown im Ausgabefeld ausdrucken, von 10 bis zum Start.
Insbesondere möchten wir, dass Sie:

- Von 10 bis 0 zählen. Wir haben Ihnen bereits eine Initialisierung bereitgestellt — `let i = 10;`.
- Bei jeder Iteration erstellen Sie einen neuen Absatz und hängen ihn an das Ausgabe-`<div>` an, das wir mit `const output = document.querySelector('.output');` ausgewählt haben.
  In den Kommentaren haben wir Ihnen drei Codezeilen bereitgestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — fügt den Absatz zum Ausgabe-`<div>` hinzu.
  - `para.textContent =` — macht den Text im Absatz gleich dem, was Sie auf der rechten Seite, nach dem Gleichheitszeichen, eingeben.

- Unterschiedliche Iterationsnummern benötigen andere Texte, die im jeweiligen Absatz für diese Iteration ausgegeben werden (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
  - Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
  - Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration abwärts und nicht aufwärts, daher sollten Sie **nicht** `i++` verwenden — wie zählen Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel while(i>=0)), kann es passieren, dass der Browser festhängt, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie vorsichtig damit. Sie können Ihren Code in einem Kommentar beginnen und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel mit dem "Zurücksetzen"-Button immer zurücksetzen.
Wenn Sie wirklich feststecken, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
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

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir möchten Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden, und eine für Gäste, die abgelehnt werden.

Insbesondere möchten wir, dass Sie:

- Eine Schleife schreiben, die das `people`-Array durchlaufen wird.
- Während jeder Schleifeniteration prüfen Sie, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, unter Verwendung einer bedingten Anweisung:
  - Wenn dem so ist, hängen Sie das Array-Element ans Ende des `refused`-Paragrafs `textContent`, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn dem nicht so ist, hängen Sie das Array-Element ans Ende des `admitted`-Paragrafs `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — die Anfänge einer Linie, die etwas ans Ende von `refused.textContent` anhängen wird.
- `admitted.textContent +=` — die Anfänge einer Linie, die etwas ans Ende von `admitted.textContent` anhängen wird.

Zusatzfrage — nach erfolgreichem Ausfüllen der obigen Aufgaben haben Sie zwei Listen von Namen, getrennt durch Kommas, aber diese werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben.
Können Sie sich überlegen, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall entfernen und einen Punkt am Ende hinzufügen?
Schauen Sie sich den Artikel [Nützliche Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie das Beispiel mit dem "Zurücksetzen"-Button immer zurücksetzen.
Wenn Sie wirklich feststecken, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

reset.addEventListener("click", () => {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", () => {
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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger zu versemmeln.

Für andere Verwendungen sind `for`, `while` und `do...while`-Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten zu merken finden oder welche Ihnen am intuitivsten erscheint.
Wir würden `for` empfehlen, zumindest am Anfang, da es wahrscheinlich am einfachsten ist, sich an alles zu erinnern — der Initialisierer, die Bedingung und der endgültige Ausdruck müssen alle ordentlich in die Klammern eingefügt werden, sodass es einfach ist zu sehen, wo sie sich befinden und zu überprüfen, ob Sie nichts vergessen haben.

Schauen wir uns alle noch einmal an.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und die über den Rahmen dieses Artikels hinausgehen. Wenn Sie mehr darüber hinaus lernen wollen, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — sehen Sie [Testen Sie Ihre Fähigkeiten: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter den verschiedenen Optionen beim Schleifen von Code in JavaScript vorgestellt.
Sie sollten jetzt klar verstehen, warum Schleifen ein gutes Mittel für den Umgang mit wiederholendem Code sind und bereit, sie in Ihren eigenen Beispielen zu verwenden!

Als nächstes werden wir uns Funktionen ansehen.

## Siehe auch

- [Schleifen und Iterationen im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
