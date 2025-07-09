---
title: Code-Schleifen
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 8e844812a111634228a58c4f21f81b8f616f7169
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um sich wiederholende Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu fast jeder anderen Situation, in der Sie viele ähnliche Arbeiten ausführen müssen. Hier schauen wir uns die Schleifenstrukturen in JavaScript an, die solche Bedürfnisse abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen des Zwecks von Schleifen — eine Code-Struktur, die es Ihnen ermöglicht, sehr ähnliche Dinge viele Male auszuführen, ohne den gleichen Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Unterbrechen und Fortsetzen von Schleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Bei Schleifen geht es darum, dasselbe immer wieder zu tun. Oft wird der Code bei jeder Schleifenrunde etwas anders sein, oder derselbe Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Code-Schleifen Beispiel

Angenommen, wir möchten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die _Aktualisieren_-Taste, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sets zu sehen):

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

### Mit und ohne eine Schleife

Sie müssen jetzt nicht den gesamten Code verstehen, aber lassen Sie uns den Teil des Codes betrachten, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die grundlegende Idee erhalten — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das früher im Code definiert wurde, gibt eine Ganzzahl zwischen `0` und `x-1` zurück.
Die erforderliche Code-Menge wäre die gleiche, ob wir 100, 1000 oder 10.000 Kreise zeichnen.
Nur eine Zahl muss sich ändern.

Wenn wir hier keine Schleife verwenden würden, müssten wir den folgenden Code für jeden Kreis, den wir zeichnen wollen, wiederholen:

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

Die meisten Male, wenn Sie eine Schleife verwenden, werden Sie eine Sammlung von Elementen haben und möchten etwas mit jedem Element tun.

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel bedeutet `for (const cat of cats)`:

1. Angesichts der Sammlung `cats`, nehmen Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Nehmen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch speziellere Schleifen für Sammlungen, und wir werden hier zwei von ihnen erwähnen.

Sie können `map()` verwenden, um etwas mit jedem Element in einer Sammlung zu machen und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert von jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die von uns bereitgestellte Funktion das Element in Großbuchstaben, so dass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur Elemente enthält, die passen:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Das sieht sehr ähnlich aus wie `map()`, außer dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: wenn sie `true` zurückgibt, dann wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, so dass das Ergebnis ein Array enthält, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions)-Lektionen lernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie durchlaufen können: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden.
Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, die durch Semikolons getrennt sind:
   1. Ein **Initialisierer** — dies ist in der Regel eine Variable, die auf eine Zahl gesetzt ist, die inkrementiert wird, um zu zählen, wie oft die Schleife ausgeführt wurde.
      Es wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — dies definiert, wann die Schleife aufhören soll zu laufen.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt ist.
   3. Ein **abschließender Ausdruck** — dieser wird immer evaluiert (oder ausgeführt) jedes Mal, wenn die Schleife eine vollständige Iteration durchlaufen hat.
      Er dient in der Regel dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Quadrate berechnen

Lassen Sie uns ein echtes Beispiel betrachten, damit wir klarer sehen können, was diese tun.

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

1. `let i = 1`: Die Zählervariable, `i`, beginnt bei `1`. Beachten Sie, dass wir `let` für die Zählervariable verwenden müssen, weil wir sie jedes Mal, wenn wir die Schleife durchlaufen, neu zuweisen.
2. `i < 10`: Fahren Sie in der Schleife fort, solange `i` kleiner ist als `10`.
3. `i++`: Fügen Sie jedes Mal, wenn wir die Schleife durchlaufen, eins zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das heißt: `i * i`. Wir erstellen eine Zeichenkette, die die Berechnung, die wir vorgenommen haben, und das Ergebnis ausdrückt, und fügen diese Zeichenkette dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit die nächste hinzugefügte Zeichenkette in einer neuen Zeile beginnt. Also:

1. Bei der ersten Ausführung ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Bei der zweiten Ausführung ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen, und wechseln direkt zum nächsten Codeabschnitt unterhalb der Schleife, um die Nachricht `Finished!` in einer neuen Zeile auszugeben.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um eine Sammlung zu durchlaufen, anstelle einer `for...of`-Schleife.

Lassen Sie uns noch einmal unser `for...of`-Beispiel von oben anschauen:

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

In dieser Schleife starten wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um der Reihe nach auf jedes Element im Array zuzugreifen.

Das funktioniert ganz gut, und in frühen Versionen von JavaScript existierte `for...of` nicht, sodass dies die Standardmethode war, um durch ein Array zu iterieren.
Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen, wobei Sie vergessen, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus solchen Gründen ist es in der Regel am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie trotzdem eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel möchten wir im folgenden Code eine Nachricht protokollieren, die unsere Katzen auflistet:

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

Wir ziehen es vor, den letzten Hund anders zu behandeln, so wie hier:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies zu tun, müssen wir jedoch wissen, wann wir uns in der letzten Schleifeniteration befinden, und dafür können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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

## Beenden von Schleifen mit Break

Wenn Sie eine Schleife vor Abschluss aller Iterationen verlassen möchten, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben dies bereits im vorhergehenden Artikel gesehen, als wir uns die [switch statements](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer Switch-Anweisung getroffen wird, der den Eingabewert erfüllt, verlässt die `break`-Anweisung sofort die Switch-Anweisung und geht zum Code nach dieser über.

Es ist das Gleiche bei Schleifen — eine `break`-Anweisung verlässt sofort die Schleife und veranlasst den Browser, zu jedem Code zu wechseln, der ihr folgt.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten?
Zuerst etwas einfaches HTML — ein Text-{{htmlelement("input")}}, sodass wir einen Namen eingeben können, um zu suchen, ein {{htmlelement("button")}}-Element, um eine Suche zu übermitteln, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Nun zum JavaScript:

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

1. Zuerst haben wir einige Variablendefinitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element eine Zeichenkette ist, die einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als Nächstes hängen wir einen Ereignis-Listener an den Button (`btn`) an, sodass, wenn er gedrückt wird, ein Code ausgeführt wird, der die Suche durchführt und die Ergebnisse zurückgibt.
3. Wir speichern den Wert, der in das Textfeld eingegeben wurde, in einer Variablen namens `searchName`, bevor wir dann das Textfeld leeren und es erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf die Zeichenkette anwenden, sodass die Suchen nicht zwischen Groß- und Kleinschreibung unterscheiden.
4. Nun zum interessanten Teil, die `for...of`-Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunktzeichen auf und speichern die resultierenden zwei Werte in einem Array mit dem Namen `splitContact`.
   2. Wir verwenden dann eine Bedingung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut kleingeschrieben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist.
      Wenn dem so ist, geben wir im Absatz eine Zeichenkette ein, um anzugeben, welche Nummer der Kontakt hat, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und falls nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub anzeigen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (siehe auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Überspringen von Iterationen mit Continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, wird zur nächsten Iteration der Schleife gesprungen.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von Ganzzahlen (ganze Zahlen) sind.

Das HTML ist im Wesentlichen dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, allerdings ist die Schleife selbst etwas anders:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 startet (da wir uns hier nicht für 0 interessieren), eine Abbruchbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der bei jeder Iteration 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), dann überprüfen wir, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie derselbe wie sie selbst ist, wenn sie zur nächsten Ganzzahl abgerundet wurde (das macht [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, und wir interessieren uns nicht dafür. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration ohne Aufzeichnung der Zahl weiterzuspringen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir vollständig den `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub anzeigen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (siehe auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige verfügbare allgemeine Schleifentyp in JavaScript. Es gibt tatsächlich viele andere, und obwohl Sie diese jetzt nicht alle verstehen müssen, ist es sinnvoll, sich die Struktur einiger anderer anzusehen, damit Sie dieselben Merkmale auf eine etwas andere Weise erkennen können.

Zuerst schauen wir uns die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert sehr ähnlich wie die `for`-Schleife, mit der Ausnahme, dass die Initialisierungsvariable vor der Schleife gesetzt wird und der abschließende Ausdruck in die Schleife eingefügt wird, nachdem der auszuführende Code ausgeführt wurde, anstatt dass diese beiden Elemente in die Klammern eingefügt werden.
Die Bedingung ist in den Klammern enthalten, die dem `while`-Schlüsselwort vorausgehen, anstelle von `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge definiert wie in der for-Schleife.
Das liegt daran, dass ein Initialisierer vor einer Überprüfung, ob die Bedingung wahr ist, definiert sein muss.
Der abschließende Ausdruck wird dann nach dem Ausführen des Codes in der Schleife ausgeführt (eine Iteration wurde abgeschlossen), was nur geschehen wird, wenn die Bedingung immer noch wahr ist.

Schauen wir uns noch einmal unser Katzenlistenbeispiel an, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Das funktioniert immer noch wie erwartet — sehen Sie es sich [live auf GitHub ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet aber eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort geht direkt den geschweiften Klammern voraus, die den auszuführenden Code und den abschließenden Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Also führen wir diesen Code immer aus und überprüfen dann, ob wir ihn erneut ausführen müssen. Bei `while`- und `for`-Schleifen erfolgt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Katzenlistenbeispiel erneut umschreiben, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert wie erwartet — sehen Sie es sich [live auf GitHub ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, damit die Bedingung schließlich unwahr wird.
> Andernfalls wird die Schleife für immer weiterlaufen, und entweder wird der Browser sie zwangsläufig stoppen oder sie wird abstürzen. Dies wird eine **endlose Schleife** genannt.

## Umsetzung eines Countdown zum Start

In dieser Übung möchten wir, dass Sie einen einfachen Countdown bis zum Startfeld im Ausgabefeld drucken, von 10 bis hin zu „Blastoff“.

Um die Übung abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu zählen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
3. Erstellen Sie für jede Iteration einen neuen Absatz und fügen Sie ihn dem Output-`<div>` hinzu, den wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codezeilen innerhalb eines Kommentars zur Verfügung gestellt, die irgendwo in der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — hängt den Absatz zum Output-`<div>` hinzu.
   3. `para.textContent =` — macht den Text innerhalb des Absatzes gleich dem, was Sie nach dem Gleichheitszeichen auf der rechten Seite hinzufügen.
4. Schreiben Sie für die unten aufgeführten Iterationszahlen Code, der den erforderlichen Text innerhalb des Absatzes einfügt (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Zahl, drucken Sie einfach die Zahl in den Absatz.
5. Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht hinauf, also sollten Sie **nicht** `i++` verwenden — wie iterieren Sie nach unten?

> [!NOTE]
> Wenn Sie beginnen, die Schleife einzugeben (zum Beispiel `(while(i>=0)`), kann es sein, dass der Browser in einer Endlosschleife feststeckt, weil Sie noch nicht die Endbedingung eingegeben haben. Seien Sie also vorsichtig. Sie können Ihren Code in einem Kommentar beginnen, um dieses Problem zu beheben, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie sehr feststecken, können Sie die Lösung unter der Live-Ausgabe unten sehen.

```html hidden live-sample___loops-1
<div class="output"></div>
```

```css hidden live-sample___loops-1
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

.output {
  height: 410px;
  overflow: auto;
}
```

```js live-sample___loops-1
const output = document.querySelector(".output");
output.textContent = "";

// let i = 10;

// const para = document.createElement('p');
// para.textContent = ;
// output.appendChild(para);
```

{{ EmbedLiveSample("loops-1", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const output = document.querySelector(".output");
output.textContent = "";

let i = 10;

while (i >= 0) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = "Blast off!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}
```

</details>

## Eine Gästeliste ausfüllen

In dieser Übung möchten wir, dass Sie eine Liste von Namen aus einem Array nehmen und in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen essen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden sollen, und eine für Gäste, die abgewiesen werden sollen.

Um die Übung abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people`-Array iteriert.
3. Überprüfen Sie bei jeder Schleifeniteration, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, indem Sie eine bedingte Anweisung verwenden:
   1. Ist dies der Fall, konkatenieren Sie das Array-Element an das Ende des `refused`-Absatz-`textContent`, gefolgt von einem Komma und einem Leerzeichen.
   2. Ist dies nicht der Fall, konkatenieren Sie das Array-Element an das Ende des `admitted`-Absatz-`textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — den Anfang einer Zeile, um etwas an das Ende von `refused.textContent` zu konkatonieren.
- `admitted.textContent +=` — den Anfang einer Zeile, um etwas an das Ende von `admitted.textContent` zu konkatonieren.

Zusätzliche Bonusfrage — Nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, werden Sie mit zwei Listen von Namen, getrennt durch Kommas, verlassen, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste vorhanden sein. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und am Ende einen Punkt hinzufügen?
Schauen Sie sich den Artikel über [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie sehr feststecken, können Sie die Lösung unter der Live-Ausgabe unten sehen.

```html hidden live-sample___loops-2
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admit:</p>
  <p class="refused">Refuse:</p>
</div>
```

```css hidden live-sample___loops-2
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

.output {
  height: 100px;
  overflow: auto;
}
```

```js live-sample___loops-2
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here

// refused.textContent += ;
// admitted.textContent += ;
```

{{ EmbedLiveSample("loops-2", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte in etwa so aussehen:

```js
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");

admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent =
  refused.textContent.slice(0, refused.textContent.length - 2) + ".";
admitted.textContent =
  admitted.textContent.slice(0, admitted.textContent.length - 2) + ".";
```

</details>

## Welchen Schleifentyp sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das es unterstützt, und keinen Zugriff auf die Positionsindizes jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger, was schiefgehen kann.

Für andere Verwendungen sind `for`-, `while`- und `do...while`-Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt größtenteils von Ihrer persönlichen Präferenz ab — welche Sie sich am leichtesten merken oder am intuitivsten finden.
Wir würden empfehlen, mit `for` zu beginnen, da dies wahrscheinlich am einfachsten zu merken ist — der Initialisierer, die Bedingung und der abschließende Ausdruck müssen alle ordentlich in den Klammern stehen, sodass es einfach ist zu sehen, wo sie sind und zu überprüfen, dass Sie sie nicht vergessen haben.

Lassen Sie uns sie alle noch einmal betrachten.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Rahmen dieses Artikels hinausgehen. Wenn Sie mit Ihrem Schleifenlernen weitergehen möchten, lesen Sie unseren fortgeschrittenen [Loop- und Iterations-Leitfaden](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und die verschiedenen Optionen, die verfügbar sind, um Code-Schleifen in JavaScript zu erstellen, offengelegt.
Sie sollten jetzt klarer darüber sein, warum Schleifen ein gutes Mechanismus für den Umgang mit sich wiederholendem Code sind, und bereit, sie in Ihren eigenen Beispielen zu verwenden!

Als Nächstes schauen wir uns Funktionen an.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
