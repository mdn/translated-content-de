---
title: Schleifen im Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, sei es bei mehreren grundlegenden Berechnungen oder in anderen Situationen, in denen Sie viele ähnliche Aufgaben zu erledigen haben. Hier schauen wir uns die in JavaScript verfügbaren Schleifenstrukturen an, die solche Anforderungen abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne den gleichen Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Schleifen durch Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Schleifen abbrechen und fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen sind dafür da, dieselbe Aufgabe immer wieder zu erledigen. Oftmals wird der Code bei jedem Schleifendurchlauf leicht unterschiedlich sein, oder der gleiche Code wird ausgeführt, jedoch mit verschiedenen Variablen.

### Beispiel für Schleifencode

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die _Aktualisieren_-Taste, um das Beispiel erneut auszuführen und verschiedene zufällige Sets zu sehen):

```html hidden
<button>Update</button> <canvas></canvas>
```

```css hidden
html {
  width: 100%;
  height: inherit;
  background: #dddddd;
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

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

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

Sie müssen nicht den gesamten Code jetzt verstehen, aber betrachten wir den Teil des Codes, der tatsächlich die 100 Kreise zeichnet:

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
Die benötigte Code-Menge wäre die gleiche, egal ob wir 100, 1000 oder 10.000 Kreise zeichnen.
Nur eine Zahl muss sich ändern.

Wenn wir hier keine Schleife verwenden würden, müssten wir den folgenden Code für jeden Kreis, den wir zeichnen wollten, wiederholen:

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

Dies wäre sehr langweilig und schwer zu pflegen.

## Schleifen durch eine Sammlung

Meistens, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Schleifen durch eine Sammlung ist die {{jsxref("statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Gegeben die Sammlung `cats`, hole das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript verfügt auch über spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei davon erwähnen.

Sie können `map()` verwenden, um etwas mit jedem Element in einer Sammlung zu tun und eine neue Sammlung mit den geänderten Elementen zu erstellen:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Anschließend fügt sie den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur die passenden Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht `map()` sehr ähnlich, außer dass die Funktion, die wir übergeben, einen [booleschen Wert](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element im neuen Array enthalten.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, so dass das Ergebnis ein Array enthält, das nur Katzen auflistet, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) Lektion kennenlernen werden.
Mithilfe von Funktionsausdrücken könnten wir das Beispiel oben viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-For-Schleife

Im oben genannten Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, durch die Sie schleifen müssten: Sie möchten einfach denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}} Schleife verwenden.
Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:
   1. Ein **Initializer** — dieser ist normalerweise eine Variable, die auf eine Zahl gesetzt ist und inkrementiert wird, um die Anzahl der durchlaufenen Schleifen zu zählen.
      Er wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll zu schleifen.
      Dies ist im Allgemeinen ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um zu sehen, ob die Ausstiegsbedingung erfüllt wurde.
   3. Ein **Final-Ausdruck** — dieser wird immer bewertet (oder ausgeführt), jedes Mal, wenn die Schleife einen vollständigen Durchlauf gemacht hat.
      Er dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

> [!NOTE]
> [Nebenbei: Schleifen](https://scrimba.com/learn-javascript-c0v/~02a?via=mdn) von Scrimba<sup>[_MDN Bildungspartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Aufschlüsselung der `for`-Schleifen-Syntax.

### Quadrate berechnen

Schauen wir uns ein echtes Beispiel an, damit wir besser visualisieren können, was diese Vorgänge tatsächlich bewirken.

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

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und gibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile aufschlüsseln:

1. `let i = 1`: die Zählervariable, `i`, beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: Schleife weiterhin durchlaufen, solange `i` kleiner als `10` ist.
3. `i++`: füge bei jedem Schleifendurchlauf eins zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das heißt: `i * i`. Wir erstellen eine Zeichenkette, die die Berechnung beschreibt, die wir durchgeführt haben, und das Ergebnis darstellt, und fügen diese Zeichenkette dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass die nächste Zeichenkette, die wir hinzufügen, in einer neuen Zeile beginnen wird. Also:

1. Beim ersten Durchlauf ist `i = 1`, daher fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, daher fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, beenden wir die Schleife und gehen direkt zum nächsten Codeabschnitt unterhalb der Schleife über und drucken die `Finished!`-Nachricht auf einer neuen Zeile aus.

### Durch Sammlungen mit einer For-Schleife schleifen

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstatt einer `for...of`-Schleife.

Werfen Sie einen Blick auf unser obiges `for...of`-Beispiel:

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

In dieser Schleife starten wir `i` bei `0` und hören auf, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Dies funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren.
Allerdings bietet es mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten lassen und vergessen, dass der erste Array-Index null, nicht 1, ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus solchen Gründen ist es in der Regel am besten, `for...of` zu verwenden, wenn es möglich ist.

Manchmal müssen Sie jedoch immer noch eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel, im folgenden Code möchten wir eine Nachricht protokollieren, in der wir unsere Katzen auflisten:

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

Wir würden es vorziehen, den letzten Eintrag besonders zu behandeln, so wie dies:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies jedoch zu erreichen, müssen wir wissen, wann wir in der letzten Schleifeniteration sind. Dafür können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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
Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir die [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) betrachtet haben — wenn ein Fall in einer switch-Anweisung die Eingabeausdruck entspricht, beendet die `break`-Anweisung sofort die switch-Anweisung und fährt mit dem Code danach fort.

Bei Schleifen ist es dasselbe – eine `break`-Anweisung beendet die Schleife unmittelbar und veranlasst den Browser, zu jedem nachfolgenden Code zu wechseln.

Angenommen, wir möchten ein Array aus Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden möchten?
Zuerst ein einfaches HTML — eine Text-{{htmlelement("input")}}, um einen zu suchenden Namen einzugeben, ein {{htmlelement("button")}}-Element, um eine Suche zu starten, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Jetzt zu dem JavaScript:

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

1. Zuerst haben wir einige Variable-Definitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, die durch einen Doppelpunkt getrennt sind.
2. Als nächstes fügen wir dem Button (`btn`) einen Event-Listener hinzu, sodass beim Drücken ein Code ausgeführt wird, der die Suche durchführt und die Ergebnisse zurückgibt.
3. Wir speichern den in die Texteingabe eingetragenen Wert in einer Variablen namens `searchName`, bevor wir die Texteingabe leeren und sie erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf den String anwenden, damit die Suchen nicht zwischen Groß- und Kleinschreibung unterscheiden.
4. Nun zum interessanten Teil, der `for...of`-Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine bedingte Anweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) kleingeschrieben) gleich dem eingegebenen `searchName` ist.
      Wenn dem so ist, geben wir eine Zeichenkette in den Absatz ein, um die Telefonnummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ansehen (ebenfalls [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Schleifeniterationen mit continue überspringen

Die [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, jedoch springt sie nicht vollständig aus der Schleife, sondern überspringt zur nächsten Iteration der Schleife.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe annimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganze Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — eine einfache Zahleneingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, obwohl die Schleife selbst etwas anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da wir in diesem Fall nicht an 0 interessiert sind), eine Abbruchbedingung, die besagt, dass die Schleife endet, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der dem Zähler bei jedem Durchlauf 1 hinzufügt.
2. Innerhalb der Schleife berechnen wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und überprüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir prüfen, ob sie gleich sich selbst ist, wenn sie auf die nächste Ganzzahl abgerundet wird (das ist es, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl macht, die ihm übergeben wird).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, daher sind wir nicht daran interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen hängen wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts an.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ansehen (ebenso [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige allgemeine Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie jetzt nicht alle verstehen müssen, lohnt es sich, die Struktur einiger anderer zu betrachten, damit Sie dieselben Funktionen auf eine etwas andere Weise erkennen können.

Zuerst schauen wir uns die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife an. Diese Schleife sieht etwa so aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert in sehr ähnlicher Weise wie die `for`-Schleife, außer dass die Initialisierung vor der Schleife vorgenommen wird und der finale Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente in den Klammern einzubeziehen.
Die Bedingung ist innerhalb der Klammern enthalten, die dem `while`-Schlüsselwort vorausgehen, anstatt `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind in der gleichen Reihenfolge wie in der `for`-Schleife definiert.
Dies liegt daran, dass Sie einen Initialisierer definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist oder nicht.
Der finale Ausdruck wird dann ausgeführt, nachdem der Code innerhalb der Schleife ausgeführt wurde (eine Iteration abgeschlossen wurde), was nur geschieht, wenn die Bedingung immer noch wahr ist.

Schauen wir uns wieder unser Katzenlistenbeispiel an, aber umgeschrieben, um eine `while`-Schleife zu verwenden:

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
> Dies funktioniert immer noch genauso wie erwartet — sehen Sie sich das [live auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (sehen Sie sich auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html) an).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleife ist sehr ähnlich, bietet jedoch eine Variante der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer erneut zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den finalen Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife mindestens einmal ausgeführt wird_. Dies liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife steht. Daher führen wir diesen Code immer aus und überprüfen dann, ob wir ihn erneut ausführen müssen. In `while`- und `for`-Schleifen kommt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns erneut unser Katzenlistenbeispiel umschreiben, um eine `do...while` Schleife zu verwenden:

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
> Auch hier funktioniert es wie erwartet — sehen Sie sich das [live auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (sehen Sie sich auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html) an).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder je nach Fall dekrementiert wird, sodass die Bedingung irgendwann falsch wird.
> Andernfalls läuft die Schleife endlos weiter, und entweder zwingt der Browser sie zum Stoppen, oder er stürzt ab. Dies nennt man eine **Endlosschleife**.

## Eine Countdown-Sequenz implementieren

In dieser Übung möchten wir, dass Sie einen einfachen Countdown zur Ausgabe-Box drucken, von 10 bis zum Start.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu zählen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
3. Erstellen Sie für jede Iteration einen neuen Absatz und fügen Sie ihn dem Ausgabe-`<div>` hinzu, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codezeilen innerhalb von Kommentaren bereitgestellt, die irgendwo in der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — hängt den Absatz an das Ausgabe-`<div>` an.
   3. `para.textContent =` — macht den Text im Absatz gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen setzen.
4. Für die verschiedenen Aufzählungsnummern unten, schreiben Sie Code, um den erforderlichen Text in den Absatz einzufügen (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =` Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.
5. Denken Sie daran, einen Iterator einzuschließen! Allerdings zählen wir in diesem Beispiel nach jeder Iteration herunter, nicht hoch, also möchten Sie **nicht** `i++` verwenden — wie iterieren Sie nach unten?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel `(while(i>=0)`), könnte der Browser in einer Endlosschleife feststecken, da Sie die Endbedingung noch nicht eingetragen haben. Seien Sie also vorsichtig damit. Sie können beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu lösen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, abrufen und in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für eingelassene Gäste und eine für abgewiesene Gäste.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people`-Array iteriert.
3. Überprüfen Sie während jeder Schleifeniteration mit einer bedingten Anweisung, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist:
   1. Wenn dem so ist, fügen Sie das Array-Element am Ende des `refused`-Absatzes zu `textContent` hinzu, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn dem nicht so ist, fügen Sie das Array-Element am Ende des `admitted`-Absatzes zu `textContent` hinzu, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Anfang einer Zeile, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — der Anfang einer Zeile, die etwas an das Ende von `admitted.textContent` anhängt.

Extrafrage — nachdem Sie die oben genannten Aufgaben erfolgreich abgeschlossen haben, haben Sie zwei Listen mit Namen, die durch Kommas getrennt sind, aber sie sind unordentlich — es wird ein Komma am Ende jedes Eintrags vorhanden sein. Können Sie herausfinden, wie Sie Zeilen schreiben, um das letzte Komma in jedem Fall abzuschneiden und einen Punkt am Ende hinzuzufügen?
Schauen Sie sich den Artikel [Nützliche Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der _Reset_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe anzeigen.

```html hidden live-sample___loops-2
<div class="output">
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

// refused.textContent += ...;
// admitted.textContent += ...;
```

{{ EmbedLiveSample("loops-2", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte ungefähr so aussehen:

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

refused.textContent = `${refused.textContent.slice(0, -2)}.`;
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;
```

</details>

## Welche Schleifenart sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger, was schiefgehen kann.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Präferenz ab — welche Sie am leichtesten zu merken oder am intuitivsten finden.
Wir empfehlen `for`, insbesondere zu Beginn, da es wahrscheinlich am einfachsten ist, sich alles zu merken — der Initialisierer, die Bedingung und der finale Ausdruck müssen alle ordentlich in die Klammern gesetzt werden, daher ist es einfach zu sehen, wo sie sind und zu überprüfen, dass Sie nichts verpassen.

Schauen wir uns noch einmal alle an.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und die den Rahmen dieses Artikels sprengen. Wenn Sie Ihre Kenntnisse über Schleifen vertiefen möchten, lesen Sie unseren erweiterten [Leitfaden zu Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Optionen, die beim Schleifen von Code in JavaScript zur Verfügung stehen, nähergebracht.
Sie sollten jetzt klar verstehen, warum Schleifen ein gutes Mittel sind, um sich wiederholenden Code zu bewältigen, und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Schleifen und Iterationen im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
