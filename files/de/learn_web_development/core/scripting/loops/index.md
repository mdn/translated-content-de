---
title: Schleifen in Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um schnell sich wiederholende Aufgaben zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Aufgaben zu erledigen haben. Hier werden wir die in JavaScript verfügbaren Schleifenstrukturen betrachten, die solche Anforderungen abdecken.

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
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es Ihnen ermöglicht, sehr ähnliche Dinge viele Male zu machen, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Schleifen abbrechen und fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen bestehen darin, dieselbe Aufgabe immer wieder auszuführen. Oftmals wird der Code bei jeder Schleifenrunde leicht unterschiedlich sein, oder der gleiche Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Beispiel für Schleifencode

Angenommen, wir möchten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die _Aktualisieren_-Taste, um das Beispiel erneut auszuführen und verschiedene zufällige Sets zu sehen):

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

Sie müssen nicht den gesamten Code jetzt verstehen, aber schauen wir uns den Teil des Codes an, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, früher im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Die Menge des benötigten Codes wäre gleich, ob wir nun 100 Kreise, 1000, oder 10.000 zeichnen würden.
Nur eine Zahl müsste sich ändern.

Wenn wir hier keine Schleife benutzen würden, müssten wir den folgenden Code für jeden Kreis, den wir zeichnen wollen, wiederholen:

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

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben. Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel bedeutet `for (const cat of cats)`:

1. Nehmen Sie die Sammlung `cats` und holen Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variable `cat` zu und führen Sie dann den Code zwischen den geschwungenen Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir erwähnen hier zwei davon.

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

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert von jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die von uns bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur Elemente enthält, die übereinstimmen:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Das sieht sehr nach `map()` aus, außer dass die von uns übergebene Funktion einen [Boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array enthält, das nur Katzen mit Namen enthält, die mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, über die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions)-Lektion mehr erfahren werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen durchlaufen: Sie möchten wirklich einfach denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}} Schleife verwenden.
Sie hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:
   1. Einen **Initializer** — das ist normalerweise eine Variable, die auf eine Zahl gesetzt ist und die inkrementiert wird, um die Anzahl der Durchläufe der Schleife zu zählen. Sie wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören sollte, zu schleifen. Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erreicht wurde.
   3. Einen **Schlussausdruck** — dieser wird jedes Mal ausgewertet (oder ausgeführt), nachdem die Schleife eine vollständige Iteration durchlaufen hat. Er dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie dem Punkt näher zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife eine Iteration vollzieht.

### Quadrate berechnen

Schauen wir uns ein echtes Beispiel an, damit wir klarer sehen können, was diese Ausdrücke bewirken.

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

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Der Kern des Codes ist die `for` Schleife, die die Berechnung durchführt.

Brechen wir die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile auf:

1. `let i = 1`: Die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal, wenn wir die Schleife durchlaufen, neu zuweisen.
2. `i < 10`: Setzen Sie die Schleife fort, solange `i` kleiner als `10` ist.
3. `i++`: Erhöhen Sie `i` jedes Mal, wenn die Schleife durchlaufen wird.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das heißt: `i * i`. Wir erstellen einen String, der die von uns vorgenommene Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass der nächste String, den wir hinzufügen, in einer neuen Zeile beginnt. Also:

1. Während des ersten Durchlaufs ist `i = 1`, daher fügen wir `1 x 1 = 1` hinzu.
2. Während des zweiten Durchlaufs ist `i = 2`, daher fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen, und gehen direkt zum nächsten Codeabschnitt unter der Schleife über, der die Nachricht `Finished!` in einer neuen Zeile ausgibt.

### Durchlaufen von Sammlungen mit einer for Schleife

Sie können eine `for` Schleife verwenden, um eine Sammlung zu durchlaufen, anstatt einer `for...of` Schleife.

Sehen wir uns erneut unser `for...of` Beispiel von oben an:

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

In dieser Schleife beginnen wir `i` bei `0` und hören auf, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, also war dies die Standardmethode, um durch ein Array zu iterieren.
Allerdings bietet es mehr Gelegenheiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, und vergessen, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` anhalten und vergessen, dass der letzte Array-Index bei `length - 1` ist.

Aus solchen Gründen ist es am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for` Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel, im Code unten möchten wir eine Nachricht mit der Auflistung unserer Katzen protokollieren:

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

Wir würden es bevorzugen, den letzten Punkt anders zu behandeln, wie folgt:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu tun, müssen wir wissen, wann wir in der letzten Schleifeniteration sind, und dazu können wir eine `for` Schleife nutzen und den Wert von `i` prüfen:

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

## Schleifen mit break verlassen

Wenn Sie eine Schleife vor dem Abschluss aller Iterationen verlassen möchten, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break) Anweisung verwenden.
Wir haben diese bereits im vorherigen Artikel kennengelernt, als wir uns [switch Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung dem Eingabeausdruck entspricht, verlässt die `break`-Anweisung die switch-Anweisung sofort und fährt mit dem Code danach fort.

Das ist genauso bei Schleifen — eine `break`-Anweisung verlässt die Schleife sofort und lässt den Browser zu jedem Code gehen, der darauf folgt.

Angenommen, wir möchten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten?
Zuerst ein einfaches HTML — eine Text-{{htmlelement("input")}}, das uns erlaubt, einen Namen einzugeben, nach dem wir suchen möchten, ein {{htmlelement("button")}} Element, um die Suche zu starten, und ein {{htmlelement("p")}} Element, um die Ergebnisse anzuzeigen:

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

1. Zuerst haben wir einige Variablendefinitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als nächstes fügen wir einen Ereignis-Listener dem Button (`btn`) hinzu, sodass beim Drücken Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den in das Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann das Eingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche. Beachten Sie, dass wir die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) Methode auf dem String ausführen, sodass die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Nun zum interessanten Teil, der `for...of` Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, wieder kleingeschrieben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist. Wenn ja, fügen wir einen String in den Absatz ein, um zu berichten, wie die Nummer des Kontakts lautet, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ebenfalls sehen (auch [sehen Sie ihn live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife ganz zu verlassen, überspringt sie zur nächsten Iteration der Schleife. Lassen Sie uns ein weiteres Beispiel betrachten, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von Zahlen (ganzen Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — ein einfaches numerisches Eingabefeld und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist auch größtenteils dasselbe, obwohl die Schleife selbst ein wenig anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for` Schleife bekommt einen Zähler, der bei 1 beginnt (da wir uns in diesem Fall nicht für 0 interessieren), eine Abbruchbedingung, die besagt, dass die Schleife anhält, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der bei jeder Schleifenrunde 1 zum Zähler hinzufügt.
2. In der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich ist, wenn sie auf die nächstgelegene ganze Zahl abgerundet wurde (das ist, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl macht, die an sie übergeben wird).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, und wir sind nicht daran interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if` Block komplett, sodass die `continue` Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i` Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ebenfalls sehen (auch [sehen Sie ihn live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie jetzt nicht alle verstehen müssen, lohnt es sich, die Struktur einiger anderer zu betrachten, damit Sie dieselben Funktionen auf eine etwas andere Weise erkennen können.

Erstens, werfen wir einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife. Die Syntax dieser Schleife sieht so aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert in sehr ähnlicher Weise wie die `for` Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird und der Schlussausdruck innerhalb der Schleife nach dem zu ausführenden Code enthalten ist, anstatt dass diese beiden Elemente in die Klammern eingefügt werden.
Die Bedingung wird in den Klammern enthalten, die vom `while` Schlüsselwort anstelle von `for` vorangestellt werden.

Die drei Elemente sind immer noch vorhanden, und sie sind immer noch in derselben Reihenfolge definiert wie in der for-Schleife.
Dies liegt daran, dass Sie einen Initialisierer definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist.
Der Schlussausdruck wird dann nach dem Code innerhalb der Schleife ausgeführt (eine Iteration wurde abgeschlossen), was nur geschieht, wenn die Bedingung noch wahr ist.

Werfen wir erneut einen Blick auf unser Beispiel mit der Katzenliste, aber umgeschrieben, um eine while Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — sehen Sie sich an, wie es [live auf GitHub läuft](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (auch sehen Sie sich den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html) an).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleife ist sehr ähnlich, bietet jedoch eine Variation der while Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall steht der Initialisierer erneut zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den Schlussausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while` Schleife und einer `while` Schleife besteht darin, dass _der Code innerhalb einer `do...while` Schleife mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Wir führen diesen Code immer aus und überprüfen dann, ob wir ihn erneut ausführen müssen. In `while` und `for` Schleifen kommt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns erneut unser Katzenlistening Beispiel verwenden, aber umgeschrieben, um eine `do...while` Schleife zu verwenden:

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
> Auch dies funktioniert wie erwartet — sehen Sie sich an, wie es [live auf GitHub läuft](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (auch sehen Sie sich den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html) an).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, damit die Bedingung schließlich falsch wird.
> Andernfalls wird die Schleife ewig laufen, und entweder wird der Browser gezwungen, sie zu stoppen, oder er stürzt ab. Dies wird als **Endlosschleife** bezeichnet.

## Implementierung eines Startcountdowns

In dieser Übung möchten wir, dass Sie einen einfachen Startcountdown im Ausgabefeld von 10 herunter bis zum **Blastoff** ausgeben.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu schleifen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
3. Für jede Iteration erstellen Sie einen neuen Absatz und fügen ihn dem Ausgabefeld `<div>` hinzu, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codelinien innerhalb eines Kommentars bereitgestellt, die irgendwo in der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — fügt den Absatz dem Ausgabefeld `<div>` hinzu.
   3. `para.textContent =` — setzt den Text im Absatz gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen eingeben.
4. Für die unterschiedlichen Iterationsnummern, die unten aufgeführt sind, schreiben Sie Code, um den erforderlichen Text in den Absatz einzufügen (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =` Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Bei jeder anderen Zahl drucken Sie nur die Zahl in den Absatz.
5. Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter und nicht hoch, also **verwenden** Sie nicht `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel `(while(i>=0)`), könnte sich der Browser in einer Endlosschleife festfahren, da Sie die Endbedingung noch nicht eingetragen haben. Seien Sie bei diesem Punkt also vorsichtig. Sie können damit beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu lösen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe ansehen.

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

## Erstellen einer Gästeliste

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste eintragen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden, und eine für Gäste, die abgewiesen werden.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people` Array iteriert.
3. Während jeder Schleifeniteration prüfen Sie, ob das aktuelle Array-Element "Phil" oder "Lola" entspricht, indem Sie eine bedingte Anweisung verwenden:
   1. Wenn es der Fall ist, verketten Sie das Array-Element am Ende von `refused.textContent`, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn es nicht der Fall ist, verketten Sie das Array-Element am Ende von `admitted.textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `admitted.textContent` anhängt.

Zusätzliche Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, haben Sie zwei Listen mit Namen, die durch Kommas getrennt sind, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall entfernen und am Ende einen Punkt hinzufügen? Schauen Sie sich den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) als Hilfe an.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe ansehen.

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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Chancen, dass etwas schiefgeht.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar.
Alle können verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt hauptsächlich von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten zu merken oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest am Anfang, da es wahrscheinlich am einfachsten zu merken ist — der Initialisierer, die Bedingung und der Schlussausdruck müssen alle ordentlich in die Klammern passen, sodass es leicht ist, zu sehen, wo sie sind und zu überprüfen, dass sie nicht fehlen.

Werfen wir einen erneuten Blick auf sie alle.

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
> Es gibt auch andere Schleifentypen/-funktionen, die nützlich in fortgeschrittenen/spezialisierten Situationen sind und die den Rahmen dieses Artikels sprengen. Wenn Sie Ihre Schleifenkenntnisse erweitern möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Möglichkeiten beim Schleifen von Code in JavaScript offengelegt. Sie sollten nun verstehen, warum Schleifen ein gutes Mittel sind, um mit wiederholendem Code umzugehen, und darauf brennen, sie in Ihren eigenen Beispielen zu verwenden!

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie dieses Wissen verstanden und behalten haben.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for Anweisung Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
