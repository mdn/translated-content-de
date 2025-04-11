---
title: Schleifen im Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um sich wiederholende Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu fast jeder anderen Situation, bei der viele ähnliche Aufgaben erledigt werden müssen. Hier schauen wir uns die Schleifenstrukturen an, die in JavaScript zur Verfügung stehen, um solche Bedürfnisse zu bewältigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne den gleichen Code für jede Wiederholung zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Aus Schleifen ausbrechen und fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, das Gleiche wieder und wieder zu tun. Oftmals wird der Code bei jeder Schleifenrunde etwas anders sein, oder der gleiche Code wird mit unterschiedlichen Variablen ausgeführt.

### Beispiel einer Schleife im Code

Angenommen, wir möchten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und unterschiedliche Zufallssätze zu sehen):

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

Sie sollten das Grundprinzip verstehen - wir verwenden eine Schleife, um 100 Iterationen dieses Codes durchzuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das zuvor im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück. Die Menge des benötigten Codes wäre die gleiche, ob wir 100, 1000 oder 10.000 Kreise zeichnen. Nur eine Zahl muss geändert werden.

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

Das wäre sehr langweilig und schwer zu pflegen.

## Durchlaufen einer Sammlung

Meistens, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben. Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Gegeben die Sammlung `cats`, hol das erste Element der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei davon erwähnen.

Sie können `map()` verwenden, um etwas mit jedem Element in einer Sammlung zu tun und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall wandelt die von uns bereitgestellte Funktion das Element in Großbuchstaben um, so dass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

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

Dies sieht `map()` sehr ähnlich, außer dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element dem neuen Array hinzugefügt. Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, so dass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass sowohl `map()` als auch `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Functions](/de/docs/Learn_web_development/Core/Scripting/Functions) Lektion kennenlernen werden. Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die standardmäßige for-Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, durch die man iterieren könnte: Sie möchten einfach denselben Code 100 Mal ausführen. In einem solchen Fall können Sie die {{jsxref("statements/for","for")}} Schleife verwenden. Diese hat folgenden Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:

   1. Eine **Initialisierung** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der Schleifendurchläufe zu zählen. Sie wird auch manchmal als **Zählvariable** bezeichnet.
   2. Eine **Bedingung** — dies definiert, wann die Schleife aufhören sollte. Dies ist in der Regel ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um festzustellen, ob die Ausstiegsbedingung erfüllt ist.
   3. Ein **abschließender Ausdruck** — dieser wird jedes Mal evaluiert (oder ausgeführt), wenn die Schleife eine vollständige Iteration durchlaufen hat. Er dient normalerweise dazu, die Zählvariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird bei jedem Schleifenzyklus ausgeführt.

### Berechnung von Quadraten

Schauen wir uns ein reales Beispiel an, damit wir besser visualisieren können, was diese tun.

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

1. `let i = 1`: Die Zählvariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn bei jedem Schleifendurchlauf neu zuweisen.
2. `i < 10`: Gehen Sie weiter durch die Schleife, solange `i` kleiner als `10` ist.
3. `i++`: Fügen Sie eins zu `i` hinzu, jedes Mal, wenn die Schleife durchlaufen wird.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das heißt: `i * i`. Wir erstellen einen String, der die Berechnung ausdrückt, die wir durchgeführt haben und das Ergebnis, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste hinzugefügte String in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen und wechseln direkt zum nächsten Code unterhalb der Schleife, der die Nachricht `Fertig!` in einer neuen Zeile ausdruckt.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstatt einer `for...of`-Schleife.

Schauen wir uns noch einmal unser `for...of`-Beispiel an:

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

In dieser Schleife starten wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht. Dann verwenden wir innerhalb der Schleife `i`, um auf jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert ganz gut und in frühen Versionen von JavaScript gab es `for...of` nicht, so dass dies der standardmäßige Weg war, um durch ein Array zu iterieren. Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, wobei Sie vergessen, dass der erste Array-Index Null ist, nicht 1.
- Sie könnten bei `i <= cats.length` stoppen, wobei Sie vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus Gründen wie diesen ist es in der Regel am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren. Zum Beispiel möchten wir im folgenden Code eine Nachricht mit der Liste unserer Katzen protokollieren:

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

Wir würden es bevorzugen, das letzte Element anders zu behandeln, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber dafür müssen wir wissen, wann wir bei der letzten Iteration der Schleife sind, und dazu können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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

Wenn Sie eine Schleife vorzeitig verlassen möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden. Wir haben diesen Artikel bereits im vorherigen Artikel kennengelernt, als wir uns die [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben - wenn ein Fall in einer switch-Anweisung eintritt, der mit dem Eingabeausdruck übereinstimmt, beendet die `break`-Anweisung sofort die switch-Anweisung und wechselt zum nachfolgenden Code.

Es ist dasselbe mit Schleifen — eine `break`-Anweisung beendet sofort die Schleife und lässt den Browser mit dem nachfolgenden Code fortfahren.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten? Zuerst etwas einfaches HTML - ein Text-{{htmlelement("input")}}, mit dem wir einen Namen eingeben können, um ihn zu suchen, ein {{htmlelement("button")}}-Element, um eine Suche zu starten, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zuerst einmal haben wir einige Variablendefinitionen - wir haben ein Array von Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer, getrennt durch einen Doppelpunkt, enthält.
2. Als nächstes hängen wir einen Event-Listener an den Button (`btn`), damit bei einem Druck darauf ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den im Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, leeren dann das Texteingabefeld und fokussieren es erneut, bereit für die nächste Suche. Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf den String ausführen, damit die Suche nicht groß- und kleinsensitiv ist.
4. Nun zum interessanten Teil, der `for...of` Schleife:

   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine bedingte Anweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) dem eingegebenen `searchName` entspricht. Wenn ja, fügen wir dem Absatz einen String hinzu, der angibt, wie die Nummer des Kontakts lautet, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf „Kontakt nicht gefunden.“.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (auch [siehe es live laufend](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu beenden, wird zur nächsten Iteration der Schleife gesprungen. Schauen wir uns ein anderes Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzzahligen Zahlen (ganzen Zahlen) sind.

Das HTML ist im Grunde das gleiche wie im letzten Beispiel - ein einfaches numerisches Eingabefeld und ein Absatz zur Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist ebenfalls größtenteils das gleiche, obwohl sich die Schleife selbst etwas unterscheidet:

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

1. In diesem Fall sollte die Eingabe eine Zahl sein (`num`). Der `for`-Schleife wird ein Zähler gegeben, der bei 1 beginnt (da wir uns in diesem Fall nicht für 0 interessieren), eine Austrittsbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und ein Iterator, der jedes Mal 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), dann überprüfen wir, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie die gleiche ist wie sie selbst, wenn sie auf die nächste ganze Zahl abgerundet wird (das ist, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebendenen Zahl macht).
3. Wenn Quadratwurzel und abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel keine ganze Zahl ist, also interessieren wir uns nicht dafür. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (auch [siehe es live laufend](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht die einzige Art von allgemeiner Schleife, die in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie nicht alle verstehen müssen, ist es sinnvoll, sich die Struktur einiger anderer anzusehen, damit Sie erkennen können, wie dieselben Funktionen auf etwas andere Weise arbeiten.

Zuerst werfen wir einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert auf sehr ähnliche Weise wie die `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife festgelegt und der abschließende Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt dass diese beiden Elemente innerhalb der Klammern enthalten sind. Die Bedingung ist in den Klammern enthalten, die durch das Schlüsselwort `while` anstelle von `for` eingeführt werden.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind in derselben Reihenfolge definiert wie in der for-Schleife. Dies liegt daran, dass Sie eine Initialisierung definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist. Der abschließende Ausdruck wird dann ausgeführt, nachdem der Code innerhalb der Schleife ausgeführt wurde (eine Iteration wurde abgeschlossen), was nur dann geschieht, wenn die Bedingung noch wahr ist.

Werfen wir noch einmal einen Blick auf unser Beispiel mit der Katzenliste, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert weiterhin wie erwartet - sehen Sie sich es [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch den [vollständigen Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt die Initialisierung wieder als erstes, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den endgültigen Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Also führen wir immer diesen Code aus und überprüfen dann, ob wir ihn erneut ausführen müssen. In `while`- und `for`-Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Schreiben wir unser Katzenauflistungsbeispiel noch einmal um, um eine `do...while`-Schleife zu verwenden:

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
> Auch hier funktioniert alles wie erwartet - sehen Sie sich es [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (auch den [vollständigen Quellcode ansehen](<(https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)>).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass die Initialisierung inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung irgendwann falsch wird.
> Andernfalls wird die Schleife ewig laufen, und entweder wird der Browser sie erzwingen zu stoppen, oder er wird abstürzen. Dies wird als **endlose Schleife** bezeichnet.

## Aktives Lernen: Start-Countdown

In dieser Übung möchten wir, dass Sie einen einfachen Start-Countdown bis zur Ausgabebox drucken, von 10 bis Blastoff. Konkret möchten wir, dass Sie:

- Von 10 bis 0 schleifen. Wir haben Ihnen eine Initialisierung bereitgestellt — `let i = 10;`.
- Bei jeder Iteration einen neuen Absatz erstellen und ihn an das Ausgabe-`<div>` anhängen, das wir mit `const output = document.querySelector('.output');` ausgewählt haben.
  In Kommentaren haben wir Ihnen drei Codezeilen bereitgestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — fügt den Absatz an das Ausgabe-`<div>` an.
  - `para.textContent =` — macht den Text innerhalb des Absatzes gleich dem, was Sie auf die rechte Seite, nach dem Gleichheitszeichen, setzen.

- Unterschiedliche Iterationsnummern erfordern, dass unterschiedlicher Text in den Absatz für diese Iteration gesetzt wird (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =` Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
  - Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
  - Für jede andere Zahl drucken Sie die Zahl in den Absatz.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration abwärts, nicht aufwärts, also **wollen** Sie nicht `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie damit beginnen, die Schleife zu schreiben (zum Beispiel (while(i>=0)), kann der Browser hängen bleiben, weil Sie die Endbedingung noch nicht eingetragen haben. Seien Sie also vorsichtig damit. Sie können anfangen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu lösen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der „Zurücksetzen“-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie „Lösung anzeigen“, um eine Lösung zu sehen.

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

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, in eine Gästeliste eintragen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, denen Zutritt gewährt wird, und eine für Gäste, denen der Zutritt verweigert wird.

Konkret möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Bei jeder Iteration prüfen, ob das aktuelle Array-Element „Phil“ oder „Lola“ entspricht, indem Sie eine bedingte Anweisung verwenden:

  - Wenn dem so ist, hängen Sie das Array-Element ans Ende des `refused`-Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn nicht, hängen Sie das Array-Element ans Ende des `admitted`-Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — den Anfang einer Zeile, die etwas an das Ende des `refused`-Absatzes `textContent` anhängen wird.
- `admitted.textContent +=` — den Anfang einer Zeile, die etwas an das Ende des `admitted`-Absatzes `textContent` anhängen wird.

Zusätzliche Bonusfrage — nachdem Sie die oben genannten Aufgaben erfolgreich abgeschlossen haben, haben Sie zwei Listen von Namen, die durch Kommas getrennt sind, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben. Können Sie herausfinden, wie man Zeilen schreibt, die das letzte Komma in beiden Fällen abschneiden und einen Punkt hinzufügen? Schauen Sie sich den Artikel [Nützliche Stringmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe an.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der „Zurücksetzen“-Schaltfläche zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie „Lösung anzeigen“, um eine Lösung zu sehen.

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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und Sie keinen Zugriff auf die Indexposition jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten für Fehler.

Für andere Anwendungen sind `for`-, `while`- und `do...while`-Schleifen weitgehend austauschbar. Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welche Sie am leichtesten zu merken oder am intuitivsten finden. Wir würden `for` empfehlen, zumindest zu Beginn, da es wahrscheinlich die einfachste ist, um sich an alles zu erinnern — die Initialisierung, Bedingung und der abschließende Ausdruck müssen alle sauber in die Klammern gesetzt werden, sodass es einfach ist, zu sehen, wo sie sind und zu überprüfen, dass Ihnen nichts fehlt.

Lassen Sie uns sie alle noch einmal ansehen.

Erst `for...of`:

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
> Es gibt auch andere Schleifenarten/-funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie weiter in Ihrer Schleifen-Lernreise vorankommen möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Optionen aufgezeigt, die beim Schleifen von Code in JavaScript verfügbar sind. Sie sollten nun klar darüber sein, warum Schleifen ein gutes Mechanismus zur Bewältigung von sich wiederholendem Code sind und bereit für die Anwendung in eigenen Beispielen!

Als nächstes schauen wir uns Funktionen an.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
