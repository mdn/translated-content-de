---
title: Wiederholungen im Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um schnell wiederholende Aufgaben zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu praktisch jeder anderen Situation, in der Sie viele ähnliche Arbeitsschritte ausführen müssen. Hier werden wir uns die Schleifenstrukturen ansehen, die in JavaScript verfügbar sind und solche Bedürfnisse abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen – eine Konstruktionsstruktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne den gleichen Code für jede Wiederholung zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Aus Schleifen ausbrechen und fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, immer wieder dasselbe zu tun. Oft ist der Code bei jeder Schleifenrunde leicht unterschiedlich oder derselbe Code wird ausgeführt, jedoch mit unterschiedlichen Variablen.

### Beispiel für Schleifencode

Angenommen, wir möchten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die _Aktualisieren_-Taste, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sätze zu sehen):

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

Sie müssen den gesamten Code jetzt nicht verstehen, aber betrachten wir den Teil des Codes, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die Grundidee bekommen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, früher im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Der benötigte Codeumfang wäre derselbe, unabhängig davon, ob wir 100 Kreise, 1000 oder 10.000 Kreise zeichnen wollten. Nur eine Zahl muss sich ändern.

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

Das wäre sehr langweilig und schwierig zu pflegen.

## Durchlaufen einer Sammlung

Meistens haben Sie, wenn Sie eine Schleife verwenden, eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben. Aber es gibt auch andere Sammlungen in JavaScript, darunter {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Angesichts der Sammlung `cats`, hole das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie Schritt (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript verfügt auch über speziellere Schleifen für Sammlungen, und wir erwähnen hier zwei davon.

Sie können `map()` verwenden, um mit jedem Element einer Sammlung etwas zu machen und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt dabei das Element. Anschließend fügt `map()` den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall verwandelt die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur passende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht `map()` sehr ähnlich, außer dass die Funktion, die wir übergeben, einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt. Wenn sie `true` zurückgibt, wird das Element dem neuen Array hinzugefügt.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur die Namen von Katzen enthält, die mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer Lektion zu [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen Beispiel der "Kreiszeichnung" haben Sie keine Sammlung von Elementen, die Sie durchlaufen möchten: Sie möchten wirklich denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}} Schleife verwenden. Sie hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:
   1. Einen **Initializer** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der Durchläufe der Schleife zu zählen.
      Es wird manchmal auch als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll, sich zu wiederholen.
      Dies ist in der Regel ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt wurde.
   3. Eine **Final-Expression** — diese wird jedes Mal ausgewertet (oder ausgeführt), wenn die Schleife eine komplette Iteration durchlaufen hat.
      Sie dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um den Punkt zu erreichen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten - dieser Code wird jedes Mal ausgeführt, wenn die Schleife eine Iteration durchläuft.

### Berechnung von Quadraten

Schauen wir uns ein echtes Beispiel an, um klarer zu visualisieren, was diese tun.

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

Das ergibt die folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis heraus. Der Kern des Codes ist die `for` Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: Die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal, wenn wir die Schleife durchlaufen, neu zuweisen.
2. `i < 10`: Die Schleife wird durchlaufen, solange `i` kleiner als `10` ist.
3. `i++`: Fügen Sie jedes Mal, wenn die Schleife durchlaufen wird, eins zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, also: `i * i`. Wir erzeugen einen String, der die von uns durchgeführte Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Außerdem fügen wir `\n` hinzu, sodass der nächste hinzuzufügende String in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, daher fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, daher fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen und gehen direkt zum nächsten Code unter der Schleife über, der die Nachricht `Finished!` in einer neuen Zeile ausgibt.

### Schleifen durch Sammlungen mit einer for-Schleife

Man kann eine `for` Schleife verwenden, um durch eine Sammlung zu iterieren, statt einer `for...of` Schleife.

Betrachten Sie erneut unser `for...of` Beispiel oben:

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

In dieser Schleife beginnen wir mit `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht. Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach anzusprechen.

Das funktioniert ganz gut, und in frühen Versionen von JavaScript gab es `for...of` nicht, sodass dies der Standardweg war, ein Array zu durchlaufen. Es bietet jedoch mehr Gelegenheiten, Fehler in Ihren Code zu bringen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen lassen und vergessen, dass der erste Array-Index `0` und nicht `1` ist.
- Sie könnten bei `i <= cats.length` stoppen, und vergessen, dass der letzte Array-Index `length - 1` ist.

Aus diesen Gründen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie trotzdem eine `for` Schleife verwenden, um durch ein Array zu iterieren. Zum Beispiel, im folgenden Code möchten wir eine Nachricht ausgeben, die unsere Katzen aufzählt:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der abschließende Ausgabesatz ist nicht sehr gut formuliert:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es bevorzugen, wenn er das letzte Element anders behandelt, so wie dies:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies zu tun, müssen wir wissen, wann wir in der letzten Schleifeniteration sind. Dafür können wir eine `for` Schleife verwenden und den Wert von `i` untersuchen:

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

## Beenden von Schleifen mit break

Wenn Sie eine Schleife vor dem Abschluss aller Iterationen verlassen möchten, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break) Anweisung verwenden. Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir uns mit [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) beschäftigten. Wenn ein Fall in einer switch-Anweisung zutrifft, die dem Eingabewert entspricht, beendet die `break`-Anweisung sofort die switch-Anweisung und geht zu dem nachfolgenden Code über.

Das gleiche gilt für Schleifen — eine `break`-Anweisung wird die Schleife sofort verlassen und den Browser den darauf folgenden Code ausführen lassen.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten? Zuerst etwas einfaches HTML — ein Text-{{htmlelement("input")}}-Element, das es uns erlaubt, einen Namen zur Suche einzugeben, ein {{htmlelement("button")}}-Element, um die Suche zu übermitteln, und ein {{htmlelement("p")}}-Element zur Anzeige der Ergebnisse:

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

1. Zuerst haben wir einige Variablendefinitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element eine Zeichenkette ist, die einen Namen und eine Telefonnummer enthält, die durch ein Doppelpunkt getrennt sind.
2. Als nächstes hängen wir einen Event-Listener an die Schaltfläche (`btn`), damit beim Drücken ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den in das Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf den String anwenden, sodass die Suche nicht auf Groß- und Kleinschreibung achtet.
4. Nun zum interessanten Teil, der `for...of` Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt beim Doppelpunktzeichen auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine bedingte Anweisung, um zu prüfen, ob `splitContact[0]` (der Name des Kontakts, erneut in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) dem eingegebenen `searchName` entspricht.
      Wenn dies der Fall ist, fügen wir einen String in den Absatz ein, um die Telefonnummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt festgelegt haben, und falls nicht, setzen wir den Text des Absatzes auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) anzeigen (auch [live ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Überspringen von Iterationen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung arbeitet ähnlich wie `break`, aber anstatt ganz aus der Schleife auszubrechen, wird sie zur nächsten Iteration der Schleife überspringen. Betrachten Sie ein weiteres Beispiel, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganzen Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, nur dass die Schleife selbst etwas anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for` Schleife erhält einen Zähler, der bei 1 beginnt (da uns in diesem Fall 0 nicht interessiert), eine Abbruchbedingung, die sagt, dass die Schleife aufhören wird, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der jedes Mal 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mittels [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), dann prüfen wir, ob die Quadratwurzel ein Integer ist, indem wir testen, ob sie gleich ist wie die abgerundete Quadratwurzel (dies passiert durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die Anzahl rundet).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel kein Integer ist, also interessiert sie uns nicht. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel ein Integer ist, überspringen wir den gesamten `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen konkatenieren wir den aktuellen `i` Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) anzeigen (auch [live ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Typ einer allgemeinen Schleife, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und auch wenn Sie nicht alle jetzt verstehen müssen, lohnt es sich, die Struktur von ein oder zwei anderen zu betrachten, damit Sie dieselben Funktionen auf eine etwas andere Weise erkennen können.

Schauen wir uns zuerst die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife an. Diese Schleife hat die folgende Syntax:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert in sehr ähnlicher Weise wie die `for` Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird, und der Endausdruck innerhalb der Schleife nach dem auszuführenden Code eingefügt wird, anstatt dass diese beiden Elemente innerhalb der Klammern enthalten sind. Die Bedingung ist innerhalb der Klammern enthalten, die vor dem Schlüsselwort `while` stehen, anstatt `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie werden immer noch in derselben Reihenfolge wie in der for-Schleife definiert. Das liegt daran, dass Sie eine Initialisierung definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist oder nicht. Der Endausdruck wird dann nach dem Ausführen des Codes innerhalb der Schleife (eine Iteration ist abgeschlossen) ausgeführt, was nur passiert, wenn die Bedingung noch wahr ist.

Werfen wir noch einmal einen Blick auf unser Beispiel für die Katzenliste, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert weiterhin wie erwartet — schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (sehen Sie sich auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html) an).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleife ist sehr ähnlich, bietet jedoch eine Variation der while Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initializer wieder zuerst, bevor die Schleife startet. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den Endausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code in einer `do...while`-Schleife mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung hinter dem Code innerhalb der Schleife vorkommt. Wir führen diesen Code also immer aus und prüfen dann, ob wir ihn erneut ausführen müssen. In `while` und `for` Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Beispiel zur Katzenliste erneut umschreiben, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert wie erwartet — schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (sehen Sie sich auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html) an).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initializer inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung schließlich falsch wird.
> Andernfalls wird die Schleife für immer weiterlaufen, entweder der Browser wird gezwungen, sie zu stoppen, oder es wird zum Absturz kommen. Dies wird als **Endlosschleife** bezeichnet.

## Implementierung eines Startcountdowns

In dieser Übung möchten wir Sie dazu bringen, einen einfachen Start-Countdown bis zur Ausgabe-Box zu drucken, von 10 bis Blastoff.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN-Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu schleifen. Wir haben Ihnen bereits einen Initialisierer bereitgestellt — `let i = 10;`.
3. Für jede Iteration erstellen Sie einen neuen Absatz und hängen ihn an das Ausgabeelement `<div>`, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codezeilen in Kommentaren bereitgestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — hängt den Absatz an das Ausgabeelement `<div>`.
   3. `para.textContent =` — setzt den Text im Absatz auf das, was Sie rechts vom Gleichheitszeichen angeben.

4. Für die verschiedenen Iterationsnummern, die unten aufgeführt sind, schreiben Sie Code, um den erforderlichen Text innerhalb des Absatzes einzugeben (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.
5. Denken Sie daran, einen Iterator einzusetzen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht aufwärts, sodass Sie **nicht** `i++` verwenden möchten — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu tippen (zum Beispiel `(while(i>=0)`), kann es sein, dass der Browser in einer Endlosschleife hängen bleibt, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie also vorsichtig damit. Sie können damit beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu umgehen, und entfernen Sie den Kommentar, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN-Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Ihr fertiges JavaScript sollte etwa so aussehen:

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

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen essen! Wir haben zwei Listen, eine für eingeladene Gäste und eine für abgelehnte Gäste.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN-Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people` Array iteriert.
3. Während jeder Schleifeniteration überprüfen Sie, ob das aktuelle Array-Element "Phil" oder "Lola" ist, indem Sie eine bedingte Anweisung verwenden:
   1. Wenn es das ist, konkatenieren Sie das Array-Element am Ende der `refused` Textinhalts, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn es das nicht ist, konkatenieren Sie das Array-Element am Ende der `admitted` Textinhalts, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — den Anfang einer Zeile, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — den Anfang einer Zeile, die etwas an das Ende von `admitted.textContent` anhängt.

Zusätzliche Bonusfrage — nachdem Sie die oben genannten Aufgaben erfolgreich abgeschlossen haben, bleiben Ihnen zwei Listen von Namen, getrennt durch Kommas, aber sie werden unordentlich sein — es wird ein Komma am Ende von jedem sein. Können Sie herausfinden, wie man Zeilen schreibt, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen?
Schauen Sie sich den Artikel [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Taste im MDN-Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Ihr fertiges JavaScript sollte etwa so aussehen:

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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist einfacher zu lesen und es gibt weniger, was schief gehen kann.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar. Sie können alle verwendet werden, um dieselben Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Präferenz ab — welche Sie am einfachsten zu merken oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest am Anfang, da es wahrscheinlich am leichtesten ist, um sich alles zu merken — der Initialisierer, die Bedingung und der Endausdruck müssen alle ordentlich in die Klammern gesteckt werden, sodass es einfach ist, sie zu sehen und zu prüfen, dass Sie sie nicht vergessen.

Lassen Sie uns alle noch einmal ansehen.

Erstens `for...of`:

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie Ihre Schleifenkenntnisse weiter vertiefen möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Loops](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter den und die verschiedenen Optionen zur Verfügung gestellt, wenn Code in JavaScript wiederholt wird.
Sie sollten nun klar sein, warum Schleifen ein gutes Mechanismus für den Umgang mit wiederholendem Code sind und darauf brennen, sie in Ihren eigenen Beispielen zu verwenden!

Als nächstes werden wir uns Funktionen ansehen.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
