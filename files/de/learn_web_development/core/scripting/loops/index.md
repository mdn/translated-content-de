---
title: Schleifen-Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um schnell wiederholende Aufgaben zu erledigen, von mehreren einfachen Berechnungen bis hin zu praktisch jeder anderen Situation, in der Sie viele ähnliche Aufgaben zu erledigen haben. Hier werden wir uns die Schleifenstrukturen in JavaScript ansehen, die solche Anforderungen bewältigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es Ihnen ermöglicht, viele Male etwas sehr Ähnliches zu tun, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Schleifen abbrechen und fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dieselbe Aufgabe immer wieder zu erledigen. Oft wird der Code bei jedem Durchlauf der Schleife leicht unterschiedlich sein, oder derselbe Code wird ausgeführt, jedoch mit unterschiedlichen Variablen.

### Beispiel für Schleifen-Code

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

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, früher im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück. Die benötigte Code-Menge wäre dieselbe, ob wir 100, 1000 oder 10.000 Kreise zeichnen würden. Nur eine Zahl muss sich ändern.

Wenn wir hier keine Schleife verwenden würden, müssten wir den folgenden Code für jeden Kreis, den wir zeichnen möchten, wiederholen:

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

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

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

1. Nehmen Sie die Sammlung `cats` und holen Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei von ihnen erwähnen.

Mit `map()` können Sie mit jedem Element in einer Sammlung etwas tun und eine neue Sammlung erstellen, die die veränderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Es fügt dann den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Mit {{jsxref("Array.prototype.filter()","filter()")}} können Sie jedes Element in einer Sammlung testen und eine neue Sammlung nur mit Elementen erstellen, die übereinstimmen:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Das sieht `map()` sehr ähnlich, außer dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, dann wird das Element in das neue Array aufgenommen. Unsere Funktion testet, dass das Element mit dem Buchstaben "L" beginnt, daher ist das Ergebnis ein Array, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer Lektion über [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) kennenlernen werden. Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard for-Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, die Sie durchlaufen können: Sie möchten wirklich nur denselben Code 100 Mal ausführen. In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden. Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:
   1. Einen **Initializer** — das ist normalerweise eine Variable, die auf eine Zahl gesetzt wird, die inkrementiert wird, um die Anzahl der Durchläufe der Schleife zu zählen. Es wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — definiert, wann die Schleife stoppen soll. Dies ist im Allgemeinen ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um zu sehen, ob die Ausstiegsbedingung erfüllt ist.
   3. Ein **final-expression** — wird immer ausgewertet (oder ausgeführt), nachdem die Schleife eine vollständige Iteration durchlaufen hat. Es dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird bei jeder Iteration der Schleife ausgeführt.

### Quadratberechnung

Schauen wir uns ein echtes Beispiel an, damit wir uns deutlicher vorstellen können, was diese tun.

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

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile aufschlüsseln:

1. `let i = 1`: Die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: Fahren Sie mit der Schleife fort, solange `i` kleiner als `10` ist.
3. `i++`: Addiere ein Eins zu `i` bei jedem Schleifendurchlauf.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das ist: `i * i`. Wir erstellen eine Zeichenkette, die die von uns durchgeführte Berechnung und das Ergebnis ausdrückt, und fügen diese Zeichenkette dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit die nächste von uns hinzugefügte Zeichenkette in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter...
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen, und gehen direkt zum nächsten Codeblock unterhalb der Schleife über, der die Nachricht `Finished!` in einer neuen Zeile druckt.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstelle einer `for...of`-Schleife.

Lassen Sie uns noch einmal unser `for...of`-Beispiel von oben betrachten:

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

In dieser Schleife beginnen wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht. Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert ganz gut, und in frühen Versionen von JavaScript existierte `for...of` nicht, also war dies der Standardweg, um durch ein Array zu iterieren. Es bietet jedoch mehr Chancen, dass Fehler in Ihrem Code auftreten. Zum Beispiel:

- Sie könnten `i` bei `1` starten, und vergessen, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` ist.

Aus solchen Gründen ist es in der Regel besser, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren. Zum Beispiel möchten wir im folgenden Code eine Nachricht protokollieren, in der unsere Katzen aufgelistet sind:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der endgültige Ausgabesatz ist nicht sehr gut formatiert:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir möchten, dass es das letzte Katze anders behandelt, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu tun, müssen wir wissen, wann wir uns in der letzten Schleifeniteration befinden. Dazu können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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

Wenn Sie eine Schleife beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden. Wir haben das bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung auftritt, der mit dem Eingabeausdruck übereinstimmt, wird die `break`-Anweisung sofort die switch-Anweisung verlassen und auf den Code danach übergehen.

Mit Schleifen verhält es sich genauso — eine `break`-Anweisung wird die Schleife sofort verlassen und der Browser wird zu jedem nachfolgenden Code übergehen.

Angenommen, wir möchten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden möchten? Zuerst etwas einfaches HTML — ein Text-{{htmlelement("input")}}, das uns erlaubt, einen Namen zur Suche einzugeben, ein {{htmlelement("button")}}-Element, um eine Suche zu senden, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zunächst einmal haben wir einige Variablendeklarationen — wir haben ein Array von Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, die durch einen Doppelpunkt getrennt sind.
2. Als nächstes fügen wir dem Button (`btn`) einen Event-Listener hinzu, so dass beim Drücken des Buttons ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den eingegebenen Wert aus dem Texteingabefeld in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche. Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf den String anwenden, damit die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Jetzt zum interessanten Teil, der `for...of`-Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunktzeichen und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, wieder in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist. Wenn es das ist, geben wir eine Zeichenkette in den Absatz ein, um zu berichten, was die Nummer des Kontakts ist, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub anzeigen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (siehe auch [die Live-Version](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstelle der vollständigen Beendigung der Schleife überspringt sie zur nächsten Iteration der Schleife. Lassen Sie uns ein weiteres Beispiel betrachten, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (Ganzzahlen) sind.

Das HTML ist im Grunde das gleiche wie das letzte Beispiel — eine einfache numerische Eingabe und ein Absatz zur Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils das gleiche, obwohl die Schleife selbst ein wenig anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da wir in diesem Fall nicht an 0 interessiert sind), eine Ausstiegsbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der bei jedem Schleifendurchlauf eins zum Zähler addiert.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), und prüfen dann, ob die Quadratwurzel eine Ganzzahl ist, indem wir testen, ob sie die gleiche ist wie sie selbst, wenn sie auf die nächste Ganzzahl abgerundet wird (das ist es, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl macht, die ihm übergeben wird).
3. Wenn die Quadratwurzel nicht gleich der abgerundeten Quadratwurzel ist (`!==`), bedeutet das, dass die Quadratwurzel keine Ganzzahl ist, und wir sind nicht daran interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo zu erfassen.
4. Wenn die Quadratwurzel eine Ganzzahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen fügen wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts an.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub anzeigen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (siehe auch [die Live-Version](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Typ von allgemeinen Schleifen in JavaScript. Es gibt tatsächlich viele andere und, während Sie jetzt nicht alle diese verstehen müssen, lohnt es sich, die Struktur einiger anderer anzusehen, damit Sie die gleichen Funktionen auf eine etwas andere Weise erkennen können.

Erstens, lassen Sie uns einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife werfen. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert auf sehr ähnliche Weise wie die `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird und der final-expression innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente innerhalb der Klammern beizufügen.
Die Bedingung ist in den Klammern enthalten, die vom Schlüsselwort `while` statt `for` vorausgehen.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge wie in der for-Schleife definiert. Dies liegt daran, dass Sie einen Initialisierer definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist oder nicht.
Der final-expression wird dann ausgeführt, nachdem der Code innerhalb der Schleife ausgeführt wurde (eine Iteration wurde abgeschlossen), was nur dann geschieht, wenn die Bedingung weiterhin wahr ist.

Lassen Sie uns unseren Katzenlistenbeispiel erneut betrachten, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — sehen Sie es sich [live auf GitHub ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (sehen Sie sich auch den [vollständigen Quellcode an](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den final-expression enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Dies liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Wir führen den Code also immer aus und überprüfen dann, ob wir ihn erneut ausführen müssen. Bei `while`- und `for`-Schleifen kommt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Schreiben wir unser Katzenlistenbeispiel erneut, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert wie erwartet — sehen Sie es sich [live auf GitHub ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (sehen Sie sich auch den [vollständigen Quellcode an](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung schließlich falsch wird.
> Andernfalls läuft die Schleife ewig weiter und der Browser wird entweder gezwungen sein, sie zu stoppen, oder sie stürzt ab. Dies wird als **endlose Schleife** bezeichnet.

## Implementieren eines Start-Countdowns

In dieser Übung möchten wir, dass Sie einen einfachen Start-Countdown ausgeben, von 10 bis zum Start.

Um die Übung zu vervollständigen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 herunterzuzählen. Wir haben Ihnen einen Initialisierer zur Verfügung gestellt — `let i = 10;`.
3. Für jede Iteration erstellen Sie einen neuen Absatz und hängen ihn an das Ausgabe-`<div>`, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codezeilen innerhalb von Kommentaren bereitgestellt, die irgendwo in der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — hängt den Absatz an das Ausgabe-`<div>` an.
   3. `para.textContent =` — macht den Text im Absatz gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen hinzufügen.
4. Für die verschiedenen Iterationsnummern unten, schreiben Sie Code, um den erforderlichen Text im Absatz einzufügen (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Nummer 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Nummer 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Nummer drucken Sie nur die Nummer in den Absatz.
5. Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht herauf, sodass Sie **nicht** `i++` wollen — wie zählen Sie abwärts?

> [!NOTE]
> Wenn Sie anfangen, die Schleife zu tippen (zum Beispiel `(while(i>=0)`), könnte der Browser in einer endlosen Schleife stecken bleiben, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie also vorsichtig damit. Sie können anfangen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu lösen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Ihnen ein Fehler unterläuft, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Ihr endgültiger JavaScript sollte in etwa so aussehen:

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

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie zu einer Gästeliste hinzufügen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht einlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden, und eine für Gäste, die abgelehnt werden.

Um die Übung zu vervollständigen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people`-Array iteriert.
3. Während jeder Schleifeniteration überprüfen Sie, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, indem Sie eine Bedingungsanweisung verwenden:
   1. Wenn es so ist, fügen Sie das Array-Element an das Ende des `refused`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn es nicht so ist, fügen Sie das Array-Element an das Ende des `admitted`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Anfang einer Linie, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — der Anfang einer Linie, die etwas an das Ende von `admitted.textContent` anhängt.

Zusätzliche Bonusfrage — nach erfolgreicher Erfüllung der obigen Aufgaben sind Sie mit zwei Namenslisten, die durch Kommas getrennt sind, aber sie werden unordentlich sein — es wird ein Komma am Ende von jeder sein. Können Sie herausfinden, wie man Zeilen schreibt, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen? Sehen Sie sich den Artikel über [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) als Hilfe an.

Wenn Ihnen ein Fehler unterläuft, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe anzeigen.

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

Ihr endgültiger JavaScript sollte in etwa so aussehen:

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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten für Fehler.

Für andere Verwendungszwecke sind `for`, `while` und `do...while`-Schleifen weitgehend austauschbar. Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt größtenteils von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten zu merken oder am intuitivsten finden. Wir würden `for` empfehlen, zumindest zu Beginn, da es wahrscheinlich am einfachsten ist, sich alles zu merken — der Initialisierer, die Bedingung und der final-expression müssen alle ordentlich in die Klammern passen, sodass Sie leicht sehen können, wo sie sind, und dass Sie nichts vergessen haben.

Lassen Sie uns sie alle noch einmal ansehen.

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
> Es gibt noch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Rahmen dieses Artikels hinausgehen. Wenn Sie Ihr Wissen über Schleifen weiter vertiefen möchten, lesen Sie unseren erweiterten [Leitfaden über Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Optionen offenbart, die beim Schleifen von Code in JavaScript verfügbar sind. Sie sollten jetzt klar verstehen, warum Schleifen ein gutes Mechanismus zur Bewältigung von wiederholtem Code sind und eifrig dazu bereit, sie in Ihren eigenen Beispielen zu verwenden!

Als nächstes werden wir uns mit Funktionen beschäftigen.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
