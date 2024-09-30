---
title: Schleifen-Code
slug: Learn/JavaScript/Building_blocks/Looping_code
l10n:
  sourceCommit: b373190905d2c3f25d269213fe6d55c1cfed0fc7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu fast jeder anderen Situation, in der Sie viele ähnliche Arbeiten erledigen müssen. Hier betrachten wir die in JavaScript verfügbaren Schleifenstrukturen, die solche Anforderungen bewältigen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >erste Schritte in JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verständnis, wie man Schleifen in JavaScript verwendet.</td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe immer wieder zu tun. Oft wird der Code bei jedem Durchlauf der Schleife leicht anders sein, oder derselbe Code wird ausgeführt, jedoch mit unterschiedlichen Variablen.

### Beispiel für Schleifen-Code

Angenommen, wir möchten 100 zufällige Kreise auf einem <htmlelement("canvas")>-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sets zu sehen):

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

- `random(x)`, das früher im Code definiert ist, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis in einer zufälligen Position auf der Seite zeichnet. Der benötigte Code wäre derselbe, egal ob wir 100, 1000 oder 10.000 Kreise zeichnen würden. Nur eine Nummer muss sich ändern.

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

## Durch eine Sammlung schleifen

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) dieses Kurses kennengelernt haben. Aber es gibt auch andere Sammlungen in JavaScript, darunter {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel besagt `for (const cat of cats)`:

1. Gegeben die Sammlung `cats`, nehme das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Nehmen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch speziellere Schleifen für Sammlungen, und wir werden zwei hiervon erwähnen.

Mit `map()` können Sie etwas mit jedem Element in einer Sammlung tun und eine neue Sammlung erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur Elemente enthält, die den Kriterien entsprechen:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Das sieht sehr ähnlich aus wie `map()`, außer dass die Funktion, die wir übergeben, einen [boolean](/de/docs/Learn/JavaScript/First_steps/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element im neuen Array aufgenommen. Unsere Funktion testet, dass das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array mit nur Katzen ist, deren Namen mit "L" anfangen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, die wir im [Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions) Modul kennenlernen werden. Mit Funktionsausdrücken könnten wir das obige Beispiel wesentlich kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard for-Schleife

Im obigen "Kreise zeichnen" Beispiel haben Sie keine Sammlung von Elementen, durch die Sie schleifen können: Sie möchten wirklich nur denselben Code 100 Mal ausführen. In einem solchen Fall sollten Sie die {{jsxref("statements/for","for")}} Schleife verwenden. Diese hat folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. In den Klammern haben wir drei Elemente, getrennt durch Semikolons:

   1. Einen **Initialisierer** — das ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der Schleifendurchläufe zu zählen. Es wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll zu schleifen. Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt ist.
   3. Ein **Abschlussexpression** — diese wird immer bei jedem vollständigen Durchlauf der Schleife ausgewertet (oder ausgeführt). Meistens dient sie dazu, die Zählervariable zu inkrementieren (oder in manchen Fällen zu dekrementieren), um sie der Bedingung näher zu bringen, bei der die Schleife nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird bei jedem Durchlauf der Schleife ausgeführt.

### Berechnung von Quadraten

Schauen wir uns ein echtes Beispiel an, damit wir klarer sehen können, was diese tun.

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

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und gibt das Ergebnis aus. Der Kern des Codes ist die `for` Schleife, die die Berechnung durchführt.

Zerlegen wir die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile:

1. `let i = 1`: die Zählervariable, `i`, startet bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn bei jedem Schleifendurchlauf neu zuweisen.
2. `i < 10`: gehen Sie in der Schleife weiter, solange `i` kleiner als `10` ist.
3. `i++`: erhöhen Sie `i` bei jeder Schleifenrunde um eins.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das heißt: `i * i`. Wir erstellen einen String, der die Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste String, den wir hinzufügen, in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen und gehen direkt zum nächsten Bereich des Codes unter der Schleife über und drucken die Nachricht `Finished!` in einer neuen Zeile aus.

### Schleifen durch Sammlungen mit einer for-Schleife

Sie können eine `for` Schleife verwenden, um durch eine Sammlung zu iterieren, anstelle einer `for...of` Schleife.

Schauen wir uns noch einmal unser `for...of` Beispiel von oben an:

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

In dieser Schleife starten wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht. Dann verwenden wir innerhalb der Schleife `i`, um nacheinander auf jedes Element im Array zuzugreifen.

Das funktioniert ganz gut und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren. Allerdings bietet es mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, und vergessen, dass der erste Array-Index null, nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus diesen Gründen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for` Schleife verwenden, um durch ein Array zu iterieren. Zum Beispiel möchten wir im folgenden Code eine Nachricht mit einer Liste unserer Katzen protokollieren:

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

Wir würden es bevorzugen, wenn der letzte Katze anders behandelt würde, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber dazu müssen wir wissen, wann wir in der letzten Schleifeniteration sind, und um das zu tun, können wir eine `for` Schleife verwenden und den Wert von `i` untersuchen:

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

Wenn Sie eine Schleife verlassen möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break) Anweisung verwenden. Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung, der dem eingegebenen Ausdruck entspricht, getroffen wird, verlässt die `break` Anweisung die switch-Anweisung sofort und geht zum Code danach über.

Es ist das gleiche mit Schleifen — eine `break` Anweisung wird die Schleife sofort verlassen und der Browser wird zu jedem Code danach übergehen.

Angenommen, wir wollten durch ein Array von Kontakten und Telefonnummern suchen und nur die Nummer zurückgeben, die wir finden wollten? Zuerst etwas einfaches HTML — ein Text <htmlelement("input")>, das uns erlaubt, einen Namen zu suchen, ein <htmlelement("button")> Element, um eine Suche zu übermitteln und ein <htmlelement("p")> Element, um die Ergebnisse anzuzeigen:

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

1. Zunächst haben wir einige Variable-Definitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element eine Zeichenkette ist, die einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als nächstes fügen wir dem Button (`btn`) einen Event-Listener hinzu, sodass bei Druck auf den Button ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den Wert, der in das Texteingabefeld eingegeben wurde, in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche. Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) Methode auf die Zeichenkette anwenden, sodass die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Jetzt zum interessanten Teil, der `for...of` Schleife:

   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt beim Doppelpunkt-Zeichen auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine bedingte Anweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut klein geschrieben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist. Wenn dies der Fall ist, tragen wir eine Zeichenkette in den Absatz ein, um zu berichten, was die Nummer des Kontakts ist, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ebenfalls ansehen (siehe auch, wie er live läuft](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Überspringen von Iterationen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, wird sie zur nächsten Iteration der Schleife springen. Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, bei denen es sich um Quadrate von ganzen Zahlen handelt (ganze Zahlen).

Das HTML ist im Wesentlichen das gleiche wie im letzten Beispiel — ein einfaches numerisches Eingabefeld und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist meistens dasselbe, obwohl sich die Schleife selbst etwas unterscheidet:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for` Schleife erhält einen Zähler, der bei 1 beginnt (da wir uns in diesem Fall nicht für 0 interessieren), eine Abbruchbedingung, die besagt, dass die Schleife aufhört, wenn der Zähler größer wird als die Eingabe `num`, und eine Iterator, der jedes Mal 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl unter Verwendung von [Math.sqrt(i)](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und überprüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie mit sich selbst identisch ist, wenn sie auf die nächste ganze Zahl abgerundet wird (das macht [Math.floor()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl, die übergeben wird).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel keine ganze Zahl ist, also sind wir nicht daran interessiert. In einem solchen Fall verwenden wir die `continue` Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo zu speichern.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if` Block vollständig, sodass die `continue` Anweisung nicht ausgeführt wird; stattdessen fügen wir den aktuellen Wert `i` plus ein Leerzeichen am Ende des Absatzinhalts an.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ebenfalls ansehen (siehe auch [wie es live läuft](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie nicht alle jetzt verstehen müssen, lohnt es sich, die Struktur von ein paar anderen zu betrachten, damit Sie die gleichen Funktionen in einer etwas anderen Form erkennen können.

Betrachten wir zunächst die [while](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife. Diese Schleife hat folgende Syntax:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese funktioniert sehr ähnlich wie die `for` Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird und der Abschlussausdruck innerhalb der Schleife nach dem zu ausführenden Code eingeschlossen ist, anstatt dass diese beiden Elemente innerhalb der Klammern enthalten sind. Die Bedingung ist in den Klammern enthalten, die dem Schlüsselwort `while` vorangestellt sind und nicht `for`.

Die gleichen drei Elemente sind immer noch vorhanden und sie sind immer noch in derselben Reihenfolge definierend wie in der for-Schleife. Dies liegt daran, dass Sie eine Initialisierung definiert haben müssen, bevor Sie prüfen können, ob die Bedingung wahr ist oder nicht. Der Abschlussausdruck wird dann nach dem Code innerhalb der Schleife ausgeführt (eine Iteration wurde abgeschlossen), die nur dann stattfindet, wenn die Bedingung immer noch wahr ist.

Betrachten wir noch einmal unser Beispiel mit der Katzenliste, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — sehen Sie sich [das live laufende Beispiel auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleife ist sehr ähnlich, bietet jedoch eine Variante der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer wieder zuerst, bevor die Schleife startet. Das Schlüsselwort geht den geschweiften Klammern voraus, die den Code und den Endausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while` Schleife und einer `while` Schleife besteht darin, dass _der Code in einer `do...while` Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Daher führen wir diesen Code immer aus und prüfen dann, ob wir ihn erneut ausführen müssen. In `while` und `for` Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Schreiben wir unser Katzenlistenbeispiel erneut um, um eine `do...while` Schleife zu verwenden:

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
> Auch hier funktioniert dies wie erwartet — sehen Sie sich [das live laufende Beispiel auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Wie bei while und do...while — wie bei allen Schleifen — müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, damit die Bedingung schließlich unwahr wird.
> Wenn nicht, wird die Schleife ewig laufen, und entweder wird der Browser sie zum Stoppen zwingen oder er wird abstürzen. Dies wird als **endlose Schleife** bezeichnet.

## Aktives Lernen: Start-Countdown

In dieser Übung möchten wir, dass Sie einen einfachen Start-Countdown in die Ausgabebox drucken, von 10 bis Abheben. Genauer gesagt möchten wir, dass Sie:

- Von 10 bis 0 zählen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
- Für jede Iteration erstellen Sie einen neuen Absatz und fügen ihn dem Ausgabediv hinzu, den wir mit `const output = document.querySelector('.output');` ausgewählt haben. In Kommentaren haben wir Ihnen drei Codezeilen bereitgestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — fügt den Absatz dem Ausgabediv hinzu.
  - `para.textContent =` — macht den Text im Absatz gleich dem, was Sie auf der rechten Seite, nach dem Gleichheitszeichen, schreiben.

- Verschiedene Iterationszahlen erfordern, dass unterschiedlicher Text in den Absatz für diese Iteration gesetzt wird (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =` Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
  - Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
  - Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.

- Denken Sie daran, einen Iterator zuzusetzen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht hoch, also brauchen Sie **kein** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie anfangen, die Schleife zu schreiben (zum Beispiel (while(i>=0)), könnte der Browser hängen bleiben, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie vorsichtig damit. Sie können beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu umgehen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit dem "Zurücksetzen"-Button zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Eine Gästeliste füllen

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste aufnehmen. Aber es ist nicht ganz so einfach — wir möchten Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für zugelassene Gäste und eine für abgelehnte Gäste.

Genauer gesagt möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people` Array iteriert.
- Während jeder Schleifeniteration überprüfen Sie, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, indem Sie eine bedingte Anweisung verwenden:

  - Wenn ja, verketten Sie das Array-Element am Ende des `refused` Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.
  - Andernfalls verketten Sie das Array-Element am Ende des `admitted` Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen schon bereitgestellt:

- `refused.textContent +=` — der Anfang einer Zeile, die etwas am Ende von `refused.textContent` verketten wird.
- `admitted.textContent +=` — der Anfang einer Zeile, die etwas am Ende von `admitted.textContent` verketten wird.

Zusätzliche Bonusfrage — nachdem Sie die oben genannten Aufgaben erfolgreich ausgeführt haben, werden Sie mit zwei Namenslisten, getrennt durch Kommas, zurückbleiben, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder sein. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen? Schauen Sie sich den Artikel [Nützliche Zeichenkettenmethoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit dem "Zurücksetzen"-Button zurücksetzen. Wenn Sie wirklich steckenbleiben, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger, was schiefgehen kann.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen größtenteils austauschbar. Sie können alle zur Lösung derselben Probleme verwendet werden, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — von welcher Sie denken, dass sie am einfachsten zu merken oder am intuitivsten ist. Wir würden `for` empfehlen, zumindest am Anfang, da es wahrscheinlich am einfachsten ist, sich alles zu merken — Initialisierer, Bedingung und Abschlussausdruck müssen alle ordentlich in die Klammern eingefügt werden, sodass es einfach ist, zu sehen, wo sie sind und zu überprüfen, dass Sie sie nicht verpassen.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie weiter mit Ihrem Lernen über Schleifen gehen möchten, lesen Sie unsere fortgeschrittene [Anleitung zu Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie sich [Testen Sie Ihre Fähigkeiten: Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops) an.

## Fazit

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Optionen beim Schleifen von Code in JavaScript offenbart. Sie sollten nun klar sein, warum Schleifen ein gutes Mechanismus für den Umgang mit sich wiederholenden Code sind und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Falls Sie etwas nicht verstanden haben, zögern Sie nicht, den Artikel erneut zu lesen, oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu bitten.

## Siehe auch

- [Schleifen und Iterationen im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
