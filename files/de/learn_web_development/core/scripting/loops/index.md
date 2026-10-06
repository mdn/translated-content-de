---
title: Code mit Schleifen wiederholen
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um sich wiederholende Aufgaben schnell zu erledigen – von mehreren einfachen Berechnungen bis hin zu nahezu jeder anderen Situation, in der viele ähnliche Arbeitsschritte anfallen. Hier sehen wir uns die Schleifenstrukturen an, die JavaScript dafür bietet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Den Zweck von Schleifen verstehen – einer Codestruktur, mit der Sie sehr ähnliche Vorgänge viele Male ausführen können, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code> kennenlernen.</li>
          <li>Mit Konstrukten wie <code>for...of</code> und <code>map()</code> über Sammlungen iterieren.</li>
          <li>Schleifen vorzeitig verlassen und mit der nächsten Iteration fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Bei Schleifen geht es darum, dieselbe Sache immer wieder zu tun. Häufig unterscheidet sich der Code bei jedem Schleifendurchlauf ein wenig, oder derselbe Code wird mit unterschiedlichen Variablen ausgeführt.

### Beispiel für Code mit Schleife

Angenommen, wir möchten 100 zufällig platzierte Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen. Klicken Sie auf die Schaltfläche _Aktualisieren_, um das Beispiel erneut auszuführen und andere zufällige Anordnungen zu sehen:

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

Hier ist der JavaScript-Code, der dieses Beispiel umsetzt:

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

Sie müssen vorerst nicht den gesamten Code verstehen. Sehen wir uns aber den Teil an, der die 100 Kreise tatsächlich zeichnet:

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

Das Grundprinzip sollte deutlich werden: Wir verwenden eine Schleife, um diesen Code 100-mal auszuführen. Bei jedem Durchlauf wird ein Kreis an einer zufälligen Position auf der Seite gezeichnet. `random(x)`, das weiter oben im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Der benötigte Codeumfang wäre derselbe, unabhängig davon, ob wir 100, 1000 oder 10.000 Kreise zeichnen.
Nur eine Zahl müsste geändert werden.

Ohne Schleife müssten wir den folgenden Code für jeden Kreis wiederholen, den wir zeichnen möchten:

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

Das wäre sehr mühsam und schwer zu warten.

## Über eine Sammlung iterieren

Meistens haben Sie beim Einsatz einer Schleife eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Ein Sammlungstyp ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben.
In JavaScript gibt es aber auch andere Sammlungen, darunter {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug, um über eine Sammlung zu iterieren, ist die {{jsxref("Statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel bedeutet `for (const cat of cats)`:

1. Nehmen Sie aus der Sammlung `cats` das erste Element.
2. Weisen Sie es der Variablen `cat` zu und führen Sie anschließend den Code zwischen den geschweiften Klammern `{}` aus.
3. Nehmen Sie das nächste Element und wiederholen Sie Schritt 2, bis das Ende der Sammlung erreicht ist.

### map() und filter()

JavaScript bietet auch speziellere Möglichkeiten, Sammlungen zu durchlaufen. Zwei davon sehen wir uns hier an.

Mit `map()` können Sie jedes Element einer Sammlung verarbeiten und eine neue Sammlung mit den veränderten Elementen erstellen:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}. `map()` ruft die Funktion für jedes Element des Arrays einmal auf und übergibt ihr das jeweilige Element. Anschließend fügt es den Rückgabewert jedes Funktionsaufrufs einem neuen Array hinzu und gibt dieses schließlich zurück. In diesem Fall wandelt die übergebene Funktion das Element in Großbuchstaben um. Das Ergebnis ist also ein Array, in dem alle unsere Katzennamen in Großbuchstaben stehen:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Mit {{jsxref("Array.prototype.filter()","filter()")}} können Sie jedes Element einer Sammlung prüfen und eine neue Sammlung erstellen, die nur passende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Das ähnelt `map()`, aber die übergebene Funktion gibt einen [booleschen Wert](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurück: Gibt sie `true` zurück, wird das Element in das neue Array aufgenommen.
Unsere Funktion prüft, ob das Element mit dem Buchstaben „L“ beginnt. Das Ergebnis ist daher ein Array, das nur Katzen enthält, deren Namen mit „L“ beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer Lektion zu [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) kennenlernen.
Mit Funktionsausdrücken könnten wir das obige Beispiel wesentlich kompakter schreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die normale for-Schleife

Im obigen Beispiel zum Zeichnen von Kreisen gibt es keine Sammlung von Elementen, über die Sie iterieren möchten: Sie möchten lediglich denselben Code 100-mal ausführen.
In einem solchen Fall können Sie die {{jsxref("Statements/for","for")}}-Schleife verwenden.
Sie hat folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Sie besteht aus:

1. Dem Schlüsselwort `for`, gefolgt von runden Klammern.
2. Drei Bestandteilen innerhalb der Klammern, die durch Semikolons getrennt sind:
   1. Einem **Initialisierer** – normalerweise eine Variable, die auf eine Zahl gesetzt und anschließend erhöht wird, um die Anzahl der Schleifendurchläufe zu zählen.
      Sie wird manchmal auch **Zählervariable** genannt.
   2. Einer **Bedingung** – sie legt fest, wann die Schleife beendet werden soll.
      Im Allgemeinen handelt es sich um einen Ausdruck mit einem Vergleichsoperator, der prüft, ob die Abbruchbedingung erfüllt ist.
   3. Einem **abschließenden Ausdruck** – er wird nach jedem vollständigen Schleifendurchlauf ausgewertet beziehungsweise ausgeführt.
      Üblicherweise erhöht er die Zählervariable (oder verringert sie in manchen Fällen), sodass der Punkt näher rückt, an dem die Bedingung nicht mehr `true` ist.

3. Geschweiften Klammern, die einen Codeblock enthalten – dieser Code wird bei jedem Schleifendurchlauf ausgeführt.

> [!NOTE]
> [Exkurs: Schleifen](https://scrimba.com/learn-javascript-c0v/~02a?via=mdn) von Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine hilfreiche interaktive Erläuterung der Syntax von `for`-Schleifen.

### Quadratzahlen berechnen

Sehen wir uns ein konkretes Beispiel an, um die Funktionsweise besser nachzuvollziehen.

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

Das ergibt folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet die Quadrate der Zahlen von 1 bis 9 und gibt die Ergebnisse aus. Das Kernstück ist die `for`-Schleife, die die Berechnung durchführt.

Zerlegen wir die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Bestandteile:

1. `let i = 1`: Die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir für die Zählervariable `let` verwenden müssen, weil wir ihren Wert bei jedem Schleifendurchlauf mit `i++` erhöhen und ihr damit einen neuen Wert zuweisen.
2. `i < 10`: Die Schleife wird fortgesetzt, solange `i` kleiner als `10` ist.
3. `i++`: Bei jedem Schleifendurchlauf wird `i` um eins erhöht.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, also `i * i`. Wir erstellen einen String, der die Berechnung und ihr Ergebnis wiedergibt, und hängen ihn an den Ausgabetext an. Außerdem fügen wir `\n` hinzu, damit der nächste angehängte String in einer neuen Zeile beginnt. Das bedeutet:

1. Beim ersten Durchlauf ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter …
4. Sobald `i` den Wert `10` erreicht, endet die Schleife. Danach wird der nächste Code unterhalb der Schleife ausgeführt und die Meldung `Finished!` in einer neuen Zeile ausgegeben.

### Mit einer for-Schleife über Sammlungen iterieren

Statt einer `for...of`-Schleife können Sie auch eine `for`-Schleife verwenden, um über eine Sammlung zu iterieren.

Sehen wir uns noch einmal das obige `for...of`-Beispiel an:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

Wir könnten den Code auch so schreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
```

In dieser Schleife beginnt `i` bei `0`. Die Schleife endet, wenn `i` die Länge des Arrays erreicht.
Innerhalb der Schleife verwenden wir `i`, um nacheinander auf jedes Element des Arrays zuzugreifen.

Das funktioniert problemlos. In frühen JavaScript-Versionen gab es `for...of` noch nicht, daher war dies die übliche Art, über ein Array zu iterieren.
Allerdings können dabei leichter Fehler im Code entstehen. Beispielsweise:

- Sie könnten `i` bei `1` beginnen lassen und dabei vergessen, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten erst bei `i <= cats.length` aufhören und dabei vergessen, dass der letzte Array-Index `length - 1` ist.

Aus solchen Gründen ist es normalerweise besser, `for...of` zu verwenden, wenn das möglich ist.

Manchmal benötigen Sie dennoch eine `for`-Schleife, um über ein Array zu iterieren.
Im folgenden Code möchten wir zum Beispiel eine Nachricht mit einer Liste unserer Katzen in einem {{htmlelement("p")}}-Element ausgeben:

```html hidden live-sample___for-of-loop-cats live-sample___for-loop-cats live-sample___while-loop-cats live-sample___do-while-loop-cats
<p></p>
```

```js live-sample___for-of-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

pElem.textContent = myFavoriteCats;
```

Der ausgegebene Satz ist nicht besonders gut formuliert:

{{embedlivesample("for-of-loop-cats", "100%", "60")}}

Wir möchten einen grammatikalisch korrekten Satz. Dazu müssen wir die letzte Katze anders behandeln:

```plain
My favorite big cats are Leopard, Serval, Jaguar, Tiger, Caracal, and Lion.
```

Dafür müssen wir erkennen, wann der letzte Schleifendurchlauf erreicht ist. Mit einer `for`-Schleife können wir dazu den Wert von `i` prüfen:

```js live-sample___for-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

pElem.textContent = myFavoriteCats;
```

So erhalten wir die gewünschte Ausgabe:

{{embedlivesample("for-loop-cats", "100%", "60")}}

## Schleifen mit break verlassen

Wenn Sie eine Schleife verlassen möchten, bevor alle Durchläufe abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben sie bereits im vorherigen Artikel bei den [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) kennengelernt: Wird in einer switch-Anweisung ein Fall erreicht, der zum Eingabeausdruck passt, verlässt die `break`-Anweisung die switch-Anweisung sofort und setzt die Ausführung mit dem folgenden Code fort.

Bei Schleifen ist es genauso: Eine `break`-Anweisung beendet die Schleife sofort, und der Browser führt den darauf folgenden Code aus.

Angenommen, wir möchten in einem Array aus Kontakten und Telefonnummern nach einem Kontakt suchen und nur die gesuchte Nummer zurückgeben.
Zunächst etwas einfaches HTML: ein Text-{{htmlelement("input")}} zur Eingabe des gesuchten Namens, ein {{htmlelement("button")}}-Element zum Starten der Suche und ein {{htmlelement("p")}}-Element zur Anzeige des Ergebnisses:

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

1. Zuerst definieren wir einige Variablen. Wir haben ein Array mit Kontaktinformationen, dessen Elemente jeweils Strings mit einem Namen und einer Telefonnummer sind, die durch einen Doppelpunkt getrennt werden.
2. Anschließend fügen wir der Schaltfläche (`btn`) einen Event-Listener hinzu. Wenn sie angeklickt wird, führt dieser Code aus, der die Suche durchführt und das Ergebnis zurückgibt.
3. Wir speichern den Wert aus dem Texteingabefeld in einer Variablen namens `searchName`. Danach leeren wir das Feld und setzen den Fokus wieder darauf, damit es für die nächste Suche bereit ist.
   Beachten Sie, dass wir außerdem die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf den String anwenden, damit bei der Suche die Groß- und Kleinschreibung keine Rolle spielt.
4. Nun zum interessanten Teil, der `for...of`-Schleife:
   1. Innerhalb der Schleife teilen wir zunächst den aktuellen Kontakteintrag am Doppelpunkt und speichern die beiden resultierenden Werte in einem Array namens `splitContact`.
   2. Anschließend prüfen wir mit einer bedingten Anweisung, ob `splitContact[0]` (der Name des Kontakts, ebenfalls mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) in Kleinbuchstaben umgewandelt) mit dem eingegebenen `searchName` übereinstimmt.
      Ist das der Fall, schreiben wir einen String mit der Telefonnummer des Kontakts in den Absatz und beenden die Schleife mit `break`.

5. Nach der Schleife prüfen wir, ob ein Kontakt gefunden wurde. Falls nicht, setzen wir den Text des Absatzes auf „Contact not found.“.

## Durchläufe mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`. Statt die Schleife vollständig zu verlassen, springt sie jedoch zum nächsten Schleifendurchlauf.
Sehen wir uns ein weiteres Beispiel an: Es nimmt eine Zahl entgegen und gibt nur diejenigen Zahlen zurück, die Quadrate ganzer Zahlen sind.

Das HTML entspricht im Wesentlichen dem letzten Beispiel: ein einfaches Zahlen-Eingabefeld und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Auch das JavaScript ist größtenteils gleich, die Schleife selbst unterscheidet sich jedoch etwas:

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

1. Die Eingabe sollte in diesem Fall eine Zahl (`num`) sein. Die `for`-Schleife hat eine Zählervariable, die bei 1 beginnt (da uns 0 hier nicht interessiert), eine Abbruchbedingung, nach der die Schleife endet, sobald die Zählervariable größer als der Eingabewert `num` ist, und einen Ausdruck, der die Zählervariable bei jedem Durchlauf um 1 erhöht.
2. Innerhalb der Schleife berechnen wir mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) die Quadratwurzel jeder Zahl. Anschließend prüfen wir, ob sie eine ganze Zahl ist. Dazu vergleichen wir sie mit ihrem auf die nächstkleinere ganze Zahl abgerundeten Wert (genau das macht [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl).
3. Sind die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich (`!==`), ist die Quadratwurzel keine ganze Zahl und für uns uninteressant. In diesem Fall springen wir mit `continue` zum nächsten Schleifendurchlauf, ohne die Zahl irgendwo zu erfassen.
4. Ist die Quadratwurzel eine ganze Zahl, überspringen wir den `if`-Block vollständig. Die `continue`-Anweisung wird also nicht ausgeführt. Stattdessen hängen wir den aktuellen Wert von `i` und ein Leerzeichen an den Inhalt des Absatzes an.

## while und do...while

`for` ist nicht der einzige allgemeine Schleifentyp in JavaScript. Es gibt noch viele andere. Sie müssen sie jetzt nicht alle verstehen, aber es lohnt sich, die Struktur einiger weiterer Schleifen anzusehen. So können Sie dieselben Bestandteile in einer etwas anderen Form wiedererkennen.

Sehen wir uns zuerst die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Ihre Syntax sieht so aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Sie funktioniert sehr ähnlich wie die `for`-Schleife. Allerdings wird die Initialisierungsvariable vor der Schleife festgelegt, und der abschließende Ausdruck steht innerhalb der Schleife nach dem auszuführenden Code, statt dass diese beiden Bestandteile in den runden Klammern stehen.
Die Bedingung steht in den runden Klammern. Davor steht das Schlüsselwort `while` anstelle von `for`.

Dieselben drei Bestandteile sind weiterhin vorhanden und stehen in derselben Reihenfolge wie bei der for-Schleife.
Der Grund dafür ist, dass ein Initialisierer definiert sein muss, bevor geprüft werden kann, ob die Bedingung wahr ist.
Der abschließende Ausdruck wird ausgeführt, nachdem der Code innerhalb der Schleife ausgeführt wurde (also ein Durchlauf abgeschlossen ist). Das geschieht nur, wenn die Bedingung weiterhin wahr ist.

Sehen wir uns unser Beispiel mit der Katzenliste noch einmal an, diesmal mit einer while-Schleife:

```js live-sample___while-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

pElem.textContent = myFavoriteCats;
```

Es funktioniert weiterhin wie erwartet:

{{embedlivesample("while-loop-cats", "100%", "60")}}

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, verwendet aber eine abgewandelte while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

Auch hier steht der Initialisierer zuerst, vor Beginn der Schleife. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den abschließenden Ausdruck enthalten.

Der wesentliche Unterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung erst nach dem Code innerhalb der Schleife steht. Der Code wird also zunächst ausgeführt; erst danach wird geprüft, ob er erneut ausgeführt werden soll. Bei `while`- und `for`-Schleifen findet diese Prüfung zuerst statt, sodass der Code möglicherweise nie ausgeführt wird.

Schreiben wir unser Beispiel mit der Katzenliste noch einmal um, diesmal mit einer `do...while`-Schleife:

```js live-sample___do-while-loop-cats
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
const pElem = document.querySelector("p");

let myFavoriteCats = "My favorite big cats are ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

pElem.textContent = myFavoriteCats;
```

Auch das funktioniert wie erwartet:

{{embedlivesample("do-while-loop-cats", "100%", "60")}}

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer erhöht oder – je nach Fall – verringert wird, damit die Bedingung irgendwann falsch wird.
> Andernfalls läuft die Schleife endlos weiter, bis der Browser sie zwangsweise beendet oder abstürzt. Das nennt man eine **Endlosschleife**.

## Einen Countdown für einen Start umsetzen

In dieser Übung sollen Sie im Ausgabebereich einen einfachen Countdown für einen Start anzeigen, der von 10 bis zum Start herunterzählt.

So lösen Sie die Übung:

1. Klicken Sie im Codeblock unten auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, der von 10 bis 0 herunterzählt. Den Initialisierer `let i = 10;` haben wir bereits vorgegeben.
3. Erstellen Sie bei jedem Schleifendurchlauf einen neuen Absatz und hängen Sie ihn an das Ausgabe-`<div>` an, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben drei Codezeilen in Kommentaren vorbereitet, die Sie innerhalb der Schleife verwenden sollen:
   1. `const para = document.createElement('p');` – erstellt einen neuen Absatz.
   2. `output.appendChild(para);` – hängt den Absatz an das Ausgabe-`<div>` an.
   3. `para.textContent =` – setzt den Text im Absatz auf den Wert, den Sie rechts vom Gleichheitszeichen angeben.
4. Schreiben Sie für die folgenden Werte der Zählervariable Code, der den jeweiligen Text in den Absatz einfügt. Sie benötigen dafür eine bedingte Anweisung und mehrere Zeilen mit `para.textContent =`:
   1. Wenn die Zahl 10 ist, geben Sie „Countdown 10“ im Absatz aus.
   2. Wenn die Zahl 0 ist, geben Sie „Blast off!“ im Absatz aus.
   3. Bei jeder anderen Zahl geben Sie nur die Zahl im Absatz aus.
5. Denken Sie an den Ausdruck, der die Zählervariable verändert! In diesem Beispiel zählen wir nach jedem Durchlauf herunter statt hoch. Sie möchten also **nicht** `i++` verwenden – wie zählen Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (beispielsweise `(while(i>=0)`), kann der Browser in einer Endlosschleife hängen bleiben, weil Sie den Ausdruck zum Verändern der Zählervariable noch nicht eingegeben haben. Seien Sie daher vorsichtig. Sie können den Code zunächst innerhalb eines Kommentars schreiben und den Kommentar entfernen, sobald Sie fertig sind.

Falls Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Wenn Sie nicht weiterkommen, können Sie sich die Lösung unterhalb der Live-Ausgabe ansehen.

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

Ihr fertiger JavaScript-Code sollte ungefähr so aussehen:

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

In dieser Übung sollen Sie eine Liste von Namen aus einem Array in eine Gästeliste übernehmen. Ganz so einfach ist es aber nicht: Phil und Lola möchten wir nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen: eine für Gäste, die eingelassen werden, und eine für Gäste, die abgewiesen werden.

So lösen Sie die Übung:

1. Klicken Sie im Codeblock unten auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die über das Array `people` iteriert.
3. Prüfen Sie bei jedem Schleifendurchlauf mit einer bedingten Anweisung, ob das aktuelle Array-Element „Phil“ oder „Lola“ ist:
   1. Wenn ja, hängen Sie das Array-Element, gefolgt von einem Komma und einem Leerzeichen, an `textContent` des Absatzes `refused` an.
   2. Wenn nein, hängen Sie das Array-Element, gefolgt von einem Komma und einem Leerzeichen, an `textContent` des Absatzes `admitted` an.

Folgendes haben wir bereits vorgegeben:

- `refused.textContent +=` – den Anfang einer Zeile, die etwas an `refused.textContent` anhängt.
- `admitted.textContent +=` – den Anfang einer Zeile, die etwas an `admitted.textContent` anhängt.

Zusatzaufgabe: Wenn Sie die obigen Aufgaben gelöst haben, bleiben zwei durch Kommas getrennte Namenslisten übrig. Sie sind allerdings noch nicht sauber formatiert, da beide mit einem Komma enden. Können Sie Codezeilen schreiben, die jeweils das letzte Komma entfernen und am Ende einen Punkt hinzufügen?
Hilfe finden Sie im Artikel über [nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods).

Falls Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Wenn Sie nicht weiterkommen, können Sie sich die Lösung unterhalb der Live-Ausgabe ansehen.

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

Ihr fertiger JavaScript-Code sollte ungefähr so aussehen:

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

## Welchen Schleifentyp sollten Sie verwenden?

Wenn Sie über ein Array oder ein anderes Objekt iterieren, das `for...of` unterstützt, und die Indexposition der einzelnen Elemente nicht benötigen, ist `for...of` die beste Wahl. Der Code ist leichter zu lesen, und es gibt weniger Fehlermöglichkeiten.

Für andere Anwendungsfälle sind `for`-, `while`- und `do...while`-Schleifen weitgehend austauschbar.
Mit allen drei lassen sich dieselben Probleme lösen. Welche Sie verwenden, hängt hauptsächlich von Ihren persönlichen Vorlieben ab – also davon, welche Sie sich am leichtesten merken können oder am intuitivsten finden.
Zumindest für den Anfang empfehlen wir `for`, da man sich dabei vermutlich am leichtesten alle Bestandteile merken kann: Initialisierer, Bedingung und abschließender Ausdruck stehen übersichtlich in den runden Klammern. So können Sie leicht erkennen, wo sie stehen, und prüfen, ob einer fehlt.

Sehen wir sie uns alle noch einmal an.

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

Und schließlich `do...while`:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

> [!NOTE]
> Es gibt weitere Schleifentypen und -funktionen, die in fortgeschrittenen oder speziellen Situationen nützlich sind, aber über den Rahmen dieses Artikels hinausgehen. Wenn Sie mehr über Schleifen erfahren möchten, lesen Sie unseren weiterführenden [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

In diesem Artikel haben Sie die grundlegenden Konzepte und verschiedenen Möglichkeiten kennengelernt, Code in JavaScript mit Schleifen zu wiederholen.
Sie sollten nun wissen, warum Schleifen ein gutes Mittel für sich wiederholenden Code sind, und bereit sein, sie in eigenen Beispielen einzusetzen!

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Referenz zu for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [Referenz zur for-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/for)
- Referenzen zu [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- Referenzen zu [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
