---
title: Wiederholungsstrukturen
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu fast jeder anderen Situation, in der Sie viele ähnliche Arbeitsvorgänge zu bewältigen haben. Hier werden wir uns die Schleifenstrukturen ansehen, die JavaScript für solche Anforderungen zur Verfügung stellt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es ermöglicht, etwas sehr Ähnliches viele Male auszuführen, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstruktionen wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Schleifen abbrechen und fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe immer und immer wieder zu tun. Oft wird der Code bei jeder Schleifenrunde etwas anders sein, oder derselbe Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Beispiel für Schleifen-Code

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder neu zu starten und verschiedene zufällige Sets zu sehen):

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

Sie sollten die Grundidee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das früher im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Die Menge an Code, die benötigt wird, wäre dieselbe, ob wir 100 Kreise, 1000 oder 10.000 zeichnen.
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

Das würde sehr langweilig und schwierig zu pflegen werden.

## Durchlaufen einer Sammlung

Meistens, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten etwas mit jedem Element tun.

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug, um eine Sammlung zu durchlaufen, ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel bedeutet `for (const cat of cats)`:

1. Angesichts der Sammlung `cats`, holen Sie das erste Element aus der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei von ihnen erwähnen.

Sie können `map()` verwenden, um etwas mit jedem Element einer Sammlung zu tun und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf, wobei es das Element übergibt. Anschließend fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array all unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur übereinstimmende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht sehr ähnlich wie `map()` aus, außer dass die Funktion, die wir übergeben, einen [Boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, also ist das Ergebnis ein Array, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass sowohl `map()` als auch `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, von denen Sie in unserer Lektion [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, die Sie durchlaufen müssen: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden.
Sie hat folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:

   1. Einen **Initializer** — das ist normalerweise eine Variable, die auf eine Zahl gesetzt wird, die inkrementiert wird, um die Anzahl der Schleifendurchläufe zu zählen.
      Manchmal wird es auch als **Zählervariable** bezeichnet.
   2. Eine **Condition** — dies definiert, wann die Schleife aufhören sollte.
      Dies ist im Allgemeinen ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um zu sehen, ob die Beendigungsbedingung erfüllt ist.
   3. Ein **Final-Expression** — dies wird immer ausgewertet (oder ausgeführt), jedes Mal, wenn die Schleife eine vollständige Iteration durchlaufen hat.
      Es dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Berechnung von Quadratzahlen

Schauen wir uns ein echtes Beispiel an, damit wir besser visualisieren können, was diese tun.

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

Dieser Code berechnet Quadratzahlen für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung ausführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: Die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn bei jedem Durchlauf der Schleife erneut zuweisen.
2. `i < 10`: Machen Sie weiter, solange `i` kleiner als `10` ist.
3. `i++`: Jedes Mal wird `i` um eins erhöht.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das heißt: `i * i`. Wir erstellen einen String, der die Berechnung, die wir durchgeführt haben, und das Ergebnis darstellt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass der nächste String, den wir hinzufügen, auf einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, also werden wir `1 x 1 = 1` hinzufügen.
2. Beim zweiten Durchlauf ist `i = 2`, also werden wir `2 x 2 = 4` hinzufügen.
3. Und so weiter...
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen, und bewegen uns direkt zum nächsten Code unter der Schleife, um die Nachricht `Finished!` in einer neuen Zeile auszugeben.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstelle einer `for...of`-Schleife.

Schauen wir uns nochmals unser `for...of`-Beispiel an:

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
Dann verwenden wir innerhalb der Schleife `i`, um auf jedes Element im Array zuzugreifen.

Das funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, also war dies die Standardmethode, um durch ein Array zu iterieren.
Es bietet jedoch mehr Chancen, Fehler in Ihrem Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen, vergessen, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` aufhören, vergessen, dass der letzte Array-Index bei `length - 1` ist.

Aus solchen Gründen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie jedoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel, im Code unten möchten wir eine Nachricht ausgeben, um unsere Katzen aufzulisten:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der abschließende Ausgabesatz ist nicht sehr gut geformt:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es bevorzugen, wenn der letzte Katze anders behandelt würde, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies zu tun, müssen wir wissen, wann wir bei der letzten Schleifeniteration sind, und dazu können wir eine `for`-Schleife verwenden und den Wert von `i` überprüfen:

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

## Verlassen von Schleifen mit break

Wenn Sie eine Schleife vorzeitig verlassen möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung das Eingabeausdruck übereinstimmt, beendet die `break`-Anweisung sofort die switch-Anweisung und fährt mit dem danach folgenden Code fort.

Bei Schleifen ist es dasselbe — eine `break`-Anweisung beendet sofort die Schleife und veranlasst den Browser, zum nachfolgenden Code zu wechseln.

Sagen wir mal, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten.
Zuerst ein wenig einfaches HTML — ein Text-{{htmlelement("input")}}, das uns erlaubt, einen Suchnamen einzugeben, ein {{htmlelement("button")}}-Element, um eine Suche abzugeben, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zuerst haben wir einige Variablendefinitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, die durch einen Doppelpunkt getrennt sind.
2. Als Nächstes fügen wir dem Button (`btn`) einen Event-Listener hinzu, damit beim Betätigen des Buttons ein Code ausgeführt wird, der die Suche durchführt und die Ergebnisse zurückgibt.
3. Wir speichern den im Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf den String anwenden, damit die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Nun zum interessanten Teil, der `for...of`-Schleife:

   1. In der Schleife teilen wir zunächst den aktuellen Kontakt an dem Doppelpunktzeichen und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Kontaktname, wiederum mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) kleingeschrieben) gleich dem eingegebenen `searchName` ist.
      Wenn ja, geben wir einen String in das Paragraphen-Element ein, um die Telefonnummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und falls nicht, setzen wir den Paragraphen-Text auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ebenfalls ansehen (auch [live in Aktion sehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Überspringen von Iterationen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, überspringt sie zur nächsten Iteration der Schleife.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe annimmt und nur die Zahlen ausgibt, die Quadrate von ganzen Zahlen (ganzen Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — ein einfaches numerisches Eingabefeld und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils das gleiche, obwohl die Schleife selbst ein bisschen anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da uns in diesem Fall 0 nicht interessiert), eine Endbedingung, die besagt, dass die Schleife aufhört, wenn der Zähler größer wird als die Eingabe `num`, und einen Iterator, der bei jedem Durchlauf 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich ihrer abgerundeten Version ist (mit [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)), die das übergebene Argument auf die nächstgelegene ganze Zahl abgerundet.
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel einander nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist und wir nicht interessiert sind. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration überzugehen, ohne die Zahl irgendwo zu speichern.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen konkatenierten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ebenfalls ansehen (auch [live in Aktion sehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Typ von allgemeinen Schleifen, die in JavaScript verfügbar sind. Es gibt tatsächlich viele andere, und während Sie nicht alle jetzt verstehen müssen, lohnt es sich, sich die Struktur einiger anderer anzusehen, damit Sie die gleichen Funktionen auf etwas andere Weise erkennen können.

Schauen wir uns zuerst die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Diese Schleife hat die folgende Syntax:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert in sehr ähnlicher Weise wie die `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife festgelegt wird und der endgültige Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente in die Klammern eingeschlossen zu sein.
Die Bedingung ist innerhalb der Klammern enthalten, die dem Schlüsselwort `while` statt `for` vorangestellt sind.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in derselben Reihenfolge definiert wie sie dies bei der for-Schleife sind.
Das liegt daran, dass ein Initialisierer definiert sein muss, bevor Sie überprüfen können, ob die Bedingung wahr ist oder nicht.
Der Endausdruck wird dann nach dem Code innerhalb der Schleife (nach einer vollständigen Iteration) ausgeführt, was nur passiert, wenn die Bedingung immer noch wahr ist.

Schauen wir uns noch einmal unser Beispiel mit der Katzenliste an, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — sehen Sie sich [laufend live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html) anzeigen).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den Endausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife ist, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Also führen wir diesen Code immer aus und prüfen dann, ob wir ihn erneut ausführen müssen. Bei `while`- und `for`-Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Katzenlisten-Beispiel nochmals umschreiben, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert wie erwartet — sehen Sie sich [laufend live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html) anzeigen).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert wird oder je nach Fall dekrementiert wird, sodass die Bedingung schließlich falsch wird.
> Andernfalls wird die Schleife ewig weiterlaufen und entweder wird der Browser sie stoppen oder er wird abstürzen. Dies wird als **endlose Schleife** bezeichnet.

## Praktische Übung: Countdown zum Start

In dieser Übung möchten wir, dass Sie einen einfachen Countdown zum Start im Ausgabefeld von 10 bis zum Start ausgeben. Insbesondere möchten wir, dass Sie:

- Von 10 bis 0 schleifen. Wir haben Ihnen einen Initialisierer zur Verfügung gestellt — `let i = 10;`.
- Für jede Iteration einen neuen Paragrafen erstellen und ihn an das Ausgabefeld `<div>` anhängen, das wir mit `const output = document.querySelector('.output');` ausgewählt haben.
  In Kommentaren haben wir Ihnen drei Codezeilen zur Verfügung gestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Paragrafen.
  - `output.appendChild(para);` — fügt den Paragrafen an das Ausgabefeld `<div>` an.
  - `para.textContent =` — macht den Text innerhalb des Paragrafen gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen setzen.

- Unterschiedliche Iterationsnummern erfordern unterschiedliche Texte, die in den Paragrafen für diese Iteration gesetzt werden (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Nummer 10 ist, drucken Sie "Countdown 10" in den Paragrafen.
  - Wenn die Nummer 0 ist, drucken Sie "Blast off!" in den Paragrafen.
  - Für jede andere Zahl drucken Sie einfach die Zahl in den Paragrafen.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht herauf, also möchten Sie **nicht** `i++` — wie iteriert man abwärts?

> [!NOTE]
> Wenn Sie anfangen, die Schleife zu schreiben (zum Beispiel (while(i>=0)), könnte der Browser aufgrund der noch nicht eingegebenen Endbedingung hängen bleiben. Seien Sie vorsichtig damit. Sie können Ihren Code in einem Kommentar beginnen zu schreiben, um mit diesem Problem umzugehen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler gemacht haben, können Sie das Beispiel jederzeit mit dem "Zurücksetzen"-Button zurücksetzen.
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

## Praktische Übung: Eine Gästeliste ausfüllen

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, in eine Gästeliste aufnehmen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden, und eine für Gäste, die abgewiesen werden.

Insbesondere möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Während jeder Schleifeniteration prüfen Sie, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, durch eine Bedingungsanweisung:

  - Wenn ja, dann fügen Sie das Array-Element an das Ende des `refused`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn nein, dann fügen Sie das Array-Element an das Ende des `admitted`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits gegeben:

- `refused.textContent +=` — den Beginn einer Zeile, die etwas am Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — den Beginn einer Zeile, die etwas am Ende von `admitted.textContent` anhängt.

Zusatzfrage — nachdem Sie die oben genannten Aufgaben erfolgreich abgeschlossen haben, werden Sie mit zwei durch Kommas getrennten Namenslisten zurückgelassen, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben.
Können Sie herausfinden, wie Zeilen geschrieben werden, die das letzte Komma in jedem Fall abschneiden und einen Punkt ans Ende setzen?
Werfen Sie einen Blick auf den Artikel über die [nützlichen String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) zur Hilfe.

Wenn Sie einen Fehler gemacht haben, können Sie das Beispiel jederzeit mit dem "Zurücksetzen"-Button zurücksetzen.
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

## Welchen Schleifentyp sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten für Fehler.

Für andere Verwendungszwecke sind `for`-, `while`- und `do...while`-Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt größtenteils von Ihrer persönlichen Präferenz ab — welche Sie am einfachsten zu merken oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest um zu beginnen, da es wahrscheinlich am einfachsten zu merken ist — der Initialisierer, die Bedingung und der finale Ausdruck müssen alle ordentlich in die Klammern passen, sodass es einfach ist, zu sehen, wo sie sind und zu überprüfen, dass Sie nichts verpassen.

Lassen Sie uns sie alle noch einmal genauer ansehen.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie tiefer in das Lernen über Schleifen eintauchen möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie sich diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter und die unterschiedlichen Optionen, die beim Schleifen von Code in JavaScript verfügbar sind, offenbart.
Sie sollten jetzt klar verstehen, warum Schleifen ein gutes Mittel gegen sich wiederholenden Code sind, und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Als Nächstes werden wir uns mit Funktionen befassen.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
