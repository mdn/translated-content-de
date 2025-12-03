---
title: Schleifen im Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: b299d560963f8caca65c18c6532da941a7f1671a
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um sich wiederholende Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Arbeiten ausführen müssen. Hier werden wir uns die Schleifenstrukturen ansehen, die in JavaScript verfügbar sind, um solche Bedürfnisse zu erfüllen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne den gleichen Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Abbrechen von Schleifen und Fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe immer wieder zu tun. Oft wird der Code bei jedem Durchlauf der Schleife etwas anders sein, oder der gleiche Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Schleifen-Code-Beispiel

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die _Aktualisieren_-Schaltfläche, um das Beispiel immer wieder auszuführen, um verschiedene zufällige Sets zu sehen):

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

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das früher im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Die benötigte Code-Menge wäre die gleiche, ob wir 100 Kreise, 1000 oder 10.000 zeichnen würden.
Nur eine Zahl muss sich ändern.

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

Das würde sehr langweilig und schwer zu warten werden.

## Durchlaufen einer Sammlung

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Gegeben die Sammlung `cats`, das erste Element der Sammlung erhalten.
2. Es der Variablen `cat` zuweisen und dann den Code zwischen den geschweiften Klammern `{}` ausführen.
3. Das nächste Element holen und (2) wiederholen, bis das Ende der Sammlung erreicht ist.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei davon erwähnen.

Sie können `map()` verwenden, um mit jedem Element in einer Sammlung etwas zu tun und eine neue Sammlung zu erzeugen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier geben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}} weiter, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt das neue Array zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

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

Das sieht ähnlich wie `map()` aus, außer dass die von uns übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, dann wird das Element im neuen Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur die Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft zusammen mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Lektionen über Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) kennenlernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-For-Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, die Sie durchlaufen könnten: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
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
   1. Einen **Initializer** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der Ausführungen der Schleife zu zählen.
      Manchmal wird sie auch als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll zu schleifen.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt ist.
   3. Einen **final-expression** — dieser wird immer ausgewertet (oder ausgeführt), jedes Mal, wenn die Schleife eine vollständige Iteration abgeschlossen hat.
      Es dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Code-Block enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Quadratberechnungen

Werfen wir einen Blick auf ein reales Beispiel, damit wir besser verstehen können, was diese tun.

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

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis auf. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal zurücksetzen, wenn wir die Schleife durchlaufen.
2. `i < 10`: Fahren Sie mit der Schleife fort, solange `i` kleiner als `10` ist.
3. `i++`: Erhöhen Sie `i` jedes Mal, wenn die Schleife durchlaufen wird.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das heißt: `i * i`. Wir erstellen einen String, der die von uns gemachte Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste String, den wir hinzufügen, in einer neuen Zeile beginnt. Also:

1. Während des ersten Durchlaufs ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Während des zweiten Durchlaufs ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter...
4. Wenn `i` gleich `10` wird, stoppen wir die Schleife und bewegen uns direkt zum nächsten Codeabschnitt unter der Schleife, der die Nachricht `Finished!` in eine neue Zeile ausgibt.

### Durchlaufen von Sammlungen mit einer For-Schleife

Sie können eine `for`-Schleife verwenden, um eine Sammlung zu durchlaufen, anstelle einer `for...of`-Schleife.

Schauen wir uns unser oben genanntes `for...of`-Beispiel noch einmal an:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Wir könnten diesen Code wie folgt umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

In dieser Schleife beginnen wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert ganz gut, und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren.
Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, vergessen, dass der erste Array-Index null ist und nicht 1.
- Sie könnten bei `i <= cats.length` stoppen, vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus solchen Gründen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel möchten wir im folgenden Code eine Nachricht protokollieren, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der fertige Ausgabesatz ist nicht sehr gut geformt:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es vorziehen, den letzten Namen anders zu behandeln, wie folgt:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu tun, müssen wir wissen, wann wir bei der letzten Iteration der Schleife sind, und um das zu tun, können wir eine `for`-Schleife verwenden und den Wert von `i` überprüfen:

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

## Verlassen von Schleifen mit Break

Wenn Sie eine Schleife vorzeitig beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben dies bereits im vorherigen Artikel gesehen, als wir uns die [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer Switch-Anweisung die Eingabebedingung erfüllt, verlässt die `break`-Anweisung die Switch-Anweisung sofort und fährt mit dem folgenden Code fort.

Es funktioniert ähnlich mit Schleifen — eine `break`-Anweisung beendet die Schleife sofort und führt den Browser dazu, mit einem Code fortzufahren, der folgt.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die gesuchte Nummer zurückgeben?
Zuerst ein einfaches HTML — ein Text-{{htmlelement("input")}}, das es uns ermöglicht, einen Namen zu suchen, ein {{htmlelement("button")}}-Element, um eine Suche zu senden, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zunächst haben wir einige Variablendefinitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element eine Zeichenkette ist, die einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als nächstes hängen wir einen Event-Listener an den Button (`btn`), sodass, wenn er gedrückt wird, ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den Wert, der in das Texteingabefeld eingegeben wurde, in einer Variablen namens `searchName`, bevor wir das Texteingabefeld leeren und es wieder fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf die Zeichenkette anwenden, sodass die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Nun zum interessanten Teil, der `for...of`-Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, wieder in Kleinbuchstaben umgewandelt mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) dem eingegebenen `searchName` entspricht.
      Wenn dies der Fall ist, geben wir eine Zeichenkette in den Absatz ein, um die Telefonnummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ansehen (auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Überspringen von Iterationen mit Continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, wird sie zur nächsten Iteration der Schleife übersprungen.
Werfen wir einen Blick auf ein weiteres Beispiel, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von Ganzzahlen (ganze Zahlen) sind.

Das HTML ist im Grunde das gleiche wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da wir in diesem Fall an 0 nicht interessiert sind), eine Abbruchbedingung, die besagt, dass die Schleife gestoppt wird, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der den Zähler bei jeder Iteration um 1 erhöht.
2. Innerhalb der Schleife bestimmen wir die Quadratwurzel jeder Zahl mittels [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), und überprüfen, ob die Quadratwurzel eine ganze Zahl ist, indem getestet wird, ob sie gleich ihrer selbst ist, wenn sie auf die nächste ganze Zahl abgerundet wird (das erledigt [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) für die ihm übergebene Zahl).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel keine ganze Zahl ist, also sind wir daran nicht interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Iteration der Schleife zu springen, ohne die Zahl irgendwo zu speichern.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den gesamten `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen hängen wir den aktuellen `i`-Wert plus ein Leerzeichen an das Ende des Absatztextes an.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ansehen (auch [sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## While und Do...While

`for` ist nicht der einzige allgemeine Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie jetzt nicht alle verstehen müssen, lohnt es sich, die Struktur einiger anderer anzuschauen, damit Sie dieselben Funktionen auf eine etwas andere Weise wiedererkennen können.

Zuerst schauen wir uns die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Die Syntax dieser Schleife sieht wie folgt aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert auf sehr ähnliche Weise wie die `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird und die `final-expression` innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese zwei Elemente in den Klammern zu inkludieren.
Die Bedingung ist innerhalb der Klammern enthalten, die vom Schlüsselwort `while` anstelle von `for` vorangestellt werden.

Die gleichen drei Elemente sind immer noch vorhanden und sie werden in derselben Reihenfolge definiert wie in der for-Schleife.
Das liegt daran, dass Sie eine Initialisierung definiert haben müssen, bevor Sie prüfen können, ob die Bedingung wahr ist.
Die `final-expression` wird dann ausgeführt, nachdem der Code innerhalb der Schleife ausgeführt wurde (eine Iteration abgeschlossen wurde), was nur passiert, wenn die Bedingung noch wahr ist.

Schauen wir uns unser Katzenlistenbeispiel noch einmal an, aber diesmal umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch den [vollständigen Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt die Initialisierung wiederum zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den finalen Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Also führen wir immer diesen Code aus und prüfen dann, ob wir ihn erneut ausführen müssen. In `while`- und `for`-Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Katzenlistenbeispiel noch einmal mit einer `do...while`-Schleife umschreiben:

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
> Auch dies funktioniert wie erwartet — schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (sehen Sie auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass die Initialisierung inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung schließlich `false` wird.
> Andernfalls wird die Schleife ewig laufen, und entweder wird der Browser sie zum Stoppen zwingen oder er wird abstürzen. Dies wird als **endlose Schleife** bezeichnet.

## Implementieren eines Startcountdowns

In dieser Übung möchten wir, dass Sie einen einfachen Startcountdown zum Ausgabefeld ausgeben, von 10 bis zum Abschuss.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu schleifen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
3. Für jede Iteration erstellen Sie einen neuen Absatz und fügen ihn dem Ausgaben-`<div>` hinzu, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codizeilen in Kommentaren bereitgestellt, die irgendwo in der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — fügt den Absatz dem Ausgaben-`<div>` hinzu.
   3. `para.textContent =` — setzt den Text innerhalb des Absatzes gleich dem, was Sie auf der rechten Seite, nach dem Gleichheitszeichen, setzen.
4. Für die verschiedenen aufgelisteten Iterationsnummern schreiben Sie Code, um den erforderlichen Text in den Absatz einzufügen (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.
5. Vergessen Sie nicht, einen Iterator einzubeziehen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht nach oben, also **möchten Sie kein** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel `(while(i>=0)`), könnte der Browser in einer Endlosschleife stecken bleiben, da Sie die Endbedingung noch nicht eingegeben haben. Seien Sie daher vorsichtig damit. Sie können beginnen, Ihren Code in einem Kommentar zu schreiben, um das Problem zu umgehen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

## Ausfüllen einer Gästeliste

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir möchten Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für die einzulassenden Gäste und eine für die zu verweigernden Gäste.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people`-Array iteriert.
3. Während jeder Schleifeniteration überprüfen Sie mit einer Bedingungsanweisung, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist:
   1. Wenn ja, verketteten Sie das Array-Element mit dem Ende des `refused` Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn nicht, verketteten Sie das Array-Element mit dem Ende des `admitted` Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Beginn einer Zeile, die etwas am Ende von `refused.textContent` verketten wird.
- `admitted.textContent +=` — der Beginn einer Zeile, die etwas am Ende von `admitted.textContent` verketten wird.

Zusätzliche Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, werden Sie mit zwei Listen von Namen, getrennt durch Kommas, zurückgelassen, aber sie werden unordentlich sein — am Ende jeder Liste wird ein Komma stehen. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen?
Werfen Sie einen Blick auf den Artikel [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) zu Hilfe.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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

## Welche Schleife sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist einfacher zu lesen und es gibt weniger Raum für Fehler.

Für andere Verwendungen sind `for`-, `while`- und `do...while`-Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um dieselben Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihren persönlichen Vorlieben ab — welche Sie am einfachsten zu merken oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest zu Beginn, da es wahrscheinlich am einfachsten ist, alles zu merken — der Initialisierer, die Bedingung und die finale Expression müssen alle ordentlich in die Klammern passen, sodass es einfach ist, zu sehen, wo sie sich befinden und zu überprüfen, ob Sie nichts übersehen haben.

Schauen wir uns all diese noch einmal an.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/besonderen Situationen nützlich sind und außerhalb des Umfangs dieses Artikels liegen. Wenn Sie Ihre Schleifenkenntnisse weiter vertiefen möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter und die verschiedenen verfügbaren Optionen beim Schleifen von Code in JavaScript offenbart.
Sie sollten nun klar erkennen, warum Schleifen ein gutes Mittel sind, um mit sich wiederholendem Code umzugehen, und sind bereit, diese in Ihren eigenen Beispielen zu verwenden!

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
