---
title: Wiederholung von Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu fast jeder anderen Situation, in der Sie viele ähnliche Arbeiten zu erledigen haben. Hier schauen wir uns die Schleifenstrukturen an, die in JavaScript verfügbar sind, um solche Anforderungen zu erfüllen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen des Zwecks von Schleifen — einer Codestruktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne für jede Iteration denselben Code zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Ausstieg aus Schleifen und Fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Bei Schleifen geht es darum, dieselbe Sache immer und immer wieder zu tun. Oft wird der Code bei jeder Schleifenrunde leicht unterschiedlich sein, oder derselbe Code wird ausgeführt, jedoch mit unterschiedlichen Variablen.

### Looping-Code Beispiel

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}} Element zeichnen (drücken Sie den _Aktualisieren_-Button, um das Beispiel immer wieder mit verschiedenen zufälligen Sets auszuführen):

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

Sie müssen den gesamten Code jetzt nicht verstehen, aber schauen wir uns den Teil des Codes an, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die grundlegende Idee bekommen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, zuvor im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Der benötigte Codeaufwand wäre derselbe, egal ob wir 100 Kreise, 1000 oder 10.000 zeichnen.
Nur eine Zahl muss sich ändern.

Wenn wir hier keine Schleife verwenden würden, müssten wir den folgenden Code für jeden zu zeichnenden Kreis wiederholen:

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

Dies würde sehr langweilig und schwer zu warten werden.

## Durchlaufen einer Sammlung

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Es gibt jedoch auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Geben Sie die Sammlung `cats` und holen Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript bietet auch spezialisiertere Schleifen für Sammlungen, und wir werden zwei davon hier erwähnen.

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

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt dabei das Element. Danach fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die von uns bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Mit {{jsxref("Array.prototype.filter()","filter()")}} können Sie jedes Element in einer Sammlung testen und eine neue Sammlung erstellen, die nur übereinstimmende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht sehr ähnlich wie `map()` aus, mit dem Unterschied, dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Functions](/de/docs/Learn_web_development/Core/Scripting/Functions) Lektion lernen werden.
Mit Funktionsausdrücken können wir das obige Beispiel wesentlich kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die standardmäßige for Schleife

In dem obigen "Kreis zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie schleifen können: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
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
   1. Einen **Initializer** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der Schleifenläufe zu zählen.
      Es wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — dies definiert, wann die Schleife aufhören sollte zu laufen.
      Dies ist im Allgemeinen ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um festzustellen, ob die Ausstiegsbedingung erfüllt ist.
   3. Einen **Final-Ausdruck** — dieser wird immer ausgewertet (oder ausgeführt) jedes Mal, wenn die Schleife einen vollständigen Durchlauf durchlaufen hat.
      Er dient normalerweise dazu, die Zählervariable (oder in einigen Fällen sie zu dekrementieren) zu inkrementieren, um sie dem Punkt näher zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Block von Code enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Berechnung von Quadraten

Schauen wir uns ein reales Beispiel an, damit wir deutlicher sehen können, was diese tun.

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

Lassen Sie uns die `for (let i = 1; i < 10; i++)` Zeile in ihre drei Teile aufschlüsseln:

1. `let i = 1`: die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: Wir durchlaufen die Schleife, solange `i` kleiner als `10` ist.
3. `i++`: Fügen Sie `i` jedes Mal, wenn Sie die Schleife durchlaufen, eins hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das ist: `i * i`. Wir erstellen einen String, der die Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste String, den wir hinzufügen, in einer neuen Zeile beginnt. Also:

1. Während des ersten Laufs ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Während des zweiten Laufs ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen und gehen direkt zum nächsten Code unterhalb der Schleife über, um die Nachricht `Finished!` in einer neuen Zeile zu drucken.

### Durchlaufen von Sammlungen mit einer for Schleife

Sie können eine `for` Schleife verwenden, um durch eine Sammlung zu iterieren, anstatt einer `for...of` Schleife.

Schauen wir noch einmal auf unser obiges `for...of` Beispiel:

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
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert einwandfrei, und in frühen JavaScript-Versionen existierte `for...of` nicht, also war dies die Standardmethode, um durch ein Array zu iterieren.
Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuschleusen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, ohne zu bedenken, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen, ohne zu berücksichtigen, dass der letzte Array-Index bei `length - 1` ist.

Aus solchen Gründen ist es in der Regel am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for` Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel, im folgenden Code möchten wir eine Nachricht protokollieren, die unsere Katzen auflistet:

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

Wir würden es bevorzugen, den letzten Eintrag anders zu behandeln, so dass es so aussieht:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu tun, müssen wir wissen, wann wir die letzte Schleifeniteration haben, und dazu können wir eine `for` Schleife verwenden und den Wert von `i` untersuchen:

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

## Austreten aus Schleifen mit break

Wenn Sie eine Schleife vorzeitig verlassen möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break) Anweisung verwenden.
Diese haben wir bereits im vorherigen Artikel kennengelernt, als wir uns die [Switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer Switch-Anweisung zutrifft, der mit dem Eingabewert übereinstimmt, beendet die `break` Anweisung sofort die Switch-Anweisung und fährt mit dem nachfolgenden Code fort.

Bei Schleifen funktioniert es genauso — eine `break` Anweisung beendet sofort die Schleife und lässt den Browser mit dem nachfolgenden Code weitermachen.

Angenommen, wir möchten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir suchen?
Zuerst ein einfaches HTML — ein Text-{{htmlelement("input")}}, mit dem wir einen Namen zum Suchen eingeben können, ein {{htmlelement("button")}} Element, um die Suche zu senden, und ein {{htmlelement("p")}} Element, um die Ergebnisse anzuzeigen:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Jetzt weiter mit dem JavaScript:

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

1. Zuerst haben wir einige Variablendefinitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, getrennt durch ein Doppelpunkt.
2. Als Nächstes fügen wir dem Button (`btn`) einen Ereignislisten hinzu, sodass beim Drücken des Buttons ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den in das Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf den String anwenden, damit die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Jetzt zum interessanten Teil, der `for...of` Schleife:
   1. Innerhalb der Schleife trennen wir zuerst den aktuellen Kontakt am Doppelpunkt und speichern die daraus resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Dann benutzen wir eine bedingte Anweisung, um zu prüfen, ob `splitContact[0]` (der Name des Kontakts, wieder in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist.
      Wenn dem so ist, geben wir einen String in den Absatz ein, um anzugeben, was die Telefonnummer des Kontakts ist, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ebenfalls ansehen (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Überspringen von Iterationen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, wird zur nächsten Iteration der Schleife gesprungen.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganze Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript sieht auch größtenteils gleich aus, obwohl die Schleife selbst etwas anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl sein (`num`). Die `for` Schleife erhält einen Zähler, der bei 1 startet (da uns 0 in diesem Fall nicht interessiert), eine Abbruchbedingung, die besagt, dass die Schleife aufhört, wenn der Zähler größer als die Eingabe wird `num`, und einen Iterator, der bei jedem Durchlaufen des Zählers +1 hinzuaddiert.
2. Innerhalb der Schleife berechnen wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich ist, wenn sie auf die nächstgelegene ganze Zahl abgerundet wird (das ist das, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl macht, die ihr übergeben wird).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel keine ganze Zahl ist, deshalb interessieren wir uns nicht dafür. In einem solchen Fall verwenden wir die `continue` Anweisung, um ohne weitere Maßnahmen zur nächsten Schleifeniteration zu gehen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if` Block vollständig, sodass die `continue` Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i` Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ebenfalls ansehen (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht die einzige Art von allgemeiner Schleife, die es in JavaScript gibt. Tatsächlich gibt es viele andere, und obwohl Sie diese jetzt nicht alle verstehen müssen, ist es wert, einen Blick auf die Struktur eines Paares anderer zu werfen, damit Sie dieselben Funktionen auf leicht andere Weise erkennen können.

Zuerst schauen wir uns die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife an. Die Syntax dieser Schleife sieht so aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert in sehr ähnlicher Weise wie die `for` Schleife, abgesehen davon, dass die Initialisierungsvariable vor der Schleife gesetzt ist und der abschließende Ausdruck innerhalb der Schleife nach dem zu laufenden Code enthalten ist, anstatt diese beiden Elemente innerhalb der Klammern zu haben.
Die Bedingung ist in den Klammern enthalten, die mit dem Keyword `while` anstelle von `for` versehen sind.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge definiert, wie sie es in der for Schleife sind.
Das liegt daran, dass eine Initialisierung definiert sein muss, bevor überprüft werden kann, ob die Bedingung wahr ist.
Der abschließende Ausdruck wird dann nach dem Code ausgeführt, der innerhalb der Schleife ausgeführt wurde (eine Iteration wurde abgeschlossen), was nur passiert, wenn die Bedingung noch wahr ist.

Schauen wir uns noch einmal unser Beispiel zur Katzenliste an, aber diesmal umgeschrieben, um eine while Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — sehen Sie es [live auf GitHub ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (sehen Sie den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleife ist sehr ähnlich, bietet jedoch eine Variation der while Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den Code und den abschließenden Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while` Schleife und einer `while` Schleife besteht darin, _dass der Code innerhalb einer `do...while` Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Wir führen diesen Code also immer aus und prüfen dann, ob wir ihn erneut ausführen müssen. Bei `while` und `for` Schleifen kommt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Schreiben wir unser Kattenlisten-Beispiel noch einmal, um eine `do...while` Schleife zu verwenden:

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
> Wieder funktioniert dies genau wie erwartet — Sie können es [live auf GitHub ausgeführt sehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (sehen Sie den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, damit die Bedingung irgendwann falsch wird.
> Wenn nicht, wird die Schleife endlos weitergehen, und entweder der Browser wird gezwungen sein, sie zu stoppen, oder er wird abstürzen. Dies wird eine **endlose Schleife** genannt.

## Implementierung eines Start-Countdowns

In dieser Übung möchten wir, dass Sie einen einfachen Start-Countdown in das Ausgabefeld drucken, von 10 bis hinunter zu Blastoff.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu schleifen. Wir haben Ihnen einen Initialisierer gegeben — `let i = 10;`.
3. Erstellen Sie für jede Iteration einen neuen Absatz und fügen Sie ihn dem `<div>` Ausgabe hinzu, das wir mit `const output = document.querySelector('.output');` ausgewählt haben.
   Wir haben Ihnen drei Codezeilen in Kommentaren bereitgestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — fügt den Absatz dem `<div>` Ausgabe hinzu.
   3. `para.textContent =` — macht den Text im Absatz gleich dem, was Sie nach dem Gleichheitszeichen auf der rechten Seite setzen.
4. Für die unterschiedlichen Iterationsnummern, die unten aufgeführt sind, schreiben Sie Code, um den erforderlichen Text in den Absatz einzufügen (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =` Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.
5. Denken Sie daran, einen Iterator einzufügen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht hoch, also möchten Sie **nicht** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu tippen (zum Beispiel `(while(i>=0)`), könnte der Browser in einer Endlosschleife steckenbleiben, da Sie die Endbedingung noch nicht eingegeben haben. Seien Sie also vorsichtig damit. Sie können beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu lösen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_ Button im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

## Ausfüllen einer Gästeliste

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste eintragen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für die zugelassenen Gäste und eine für die abgelehnten Gäste.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people` Array iteriert.
3. Während jeder Schleifeniteration überprüfen Sie, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, indem Sie eine bedingte Anweisung verwenden:
   1. Wenn dies der Fall ist, verketten Sie das Array-Element mit einem Komma und einem Leerzeichen an das Ende des `refused` Paragraph `textContent`.
   2. Wenn dies nicht der Fall ist, verketten Sie das Array-Element mit einem Komma und einem Leerzeichen an das Ende des `admitted` Paragraph `textContent`.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `admitted.textContent` anhängt.

Zusätzliche Bonusfrage — nach erfolgreichem Abschluss der obigen Aufgaben bleiben Ihnen zwei Listen von Namen, getrennt durch Kommas, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder geben. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen?
Werfen Sie einen Blick auf den nützlichen String-Methoden-Artikel [/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods] für Hilfe.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_ Button im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

// refused.textContent += ...;
// admitted.textContent += ...;
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

refused.textContent = `${refused.textContent.slice(0, -2)}.`;
admitted.textContent = `${admitted.textContent.slice(0, -2)}.`;
```

</details>

## Welchen Schleifentyp sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist einfacher zu lesen und es geht weniger schief.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um dieselben Probleme zu lösen, und welcher Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welcher Sie am leichtesten merken oder die intuitivste finden.
Wir würden `for` empfehlen, zumindest zu Beginn, da es wahrscheinlich am leichtesten ist, alles zu merken — der Initialisierer, die Bedingung, und der abschließende Ausdruck müssen alle sauber in die Klammern eingefügt werden, es ist also einfach zu sehen, wo sie sich befinden und zu überprüfen, dass sie nicht fehlen.

Lassen Sie uns noch einmal einen Blick auf alle werfen.

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
> Es gibt auch andere Schleifearten/-features, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Rahmen dieses Artikels hinausgehen. Wenn Sie Ihre Schleifenkenntnisse weiter vertiefen möchten, lesen Sie unseren fortgeschrittenen [Schleifen und Iterationsleitfaden](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und die verschiedenen Optionen beim Schleifen von Code in JavaScript vorgestellt.
Sie sollten jetzt verstehen, warum Schleifen ein gutes Mittel sind, um mit repetitivem Code umzugehen, und können es kaum erwarten, sie in Ihren eigenen Beispielen zu verwenden!

Als nächstes schauen wir uns Funktionen an.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for statement Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
