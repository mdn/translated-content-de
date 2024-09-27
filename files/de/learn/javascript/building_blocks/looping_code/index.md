---
title: Schleifen im Code
slug: Learn/JavaScript/Building_blocks/Looping_code
l10n:
  sourceCommit: b373190905d2c3f25d269213fe6d55c1cfed0fc7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Arbeiten zu erledigen haben. Hier werden wir uns die Schleifenstrukturen in JavaScript ansehen, die solche Bedürfnisse abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Schleifen in JavaScript verwendet.</td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen sind dazu da, immer wieder dasselbe zu tun. Oft wird der Code jedes Mal, wenn die Schleife durchlaufen wird, etwas anders sein, oder derselbe Code wird mit unterschiedlichen Variablen ausgeführt.

### Beispiel für schleifen von Code

Angenommen, wir möchten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und unterschiedliche zufällige Sets zu sehen):

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

- `random(x)`, das früher im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, jede davon zeichnet einen Kreis an einer zufälligen Position auf der Seite. Die Menge des benötigten Codes wäre dieselbe, ob wir 100, 1000 oder 10.000 Kreise zeichnen würden. Nur eine Zahl muss sich ändern.

Wenn wir hier keine Schleife verwenden würden, müssten wir den folgenden Code für jeden gewünschten Kreis wiederholen:

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

Dies würde sehr langweilig und schwierig zu warten werden.

## Durch eine Sammlung schleifen

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays) dieses Kurses kennengelernt haben. Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Angenommen, wir haben die Sammlung `cats`, dann holen Sie das erste Element der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Nehmen Sie das nächste Element und wiederholen Sie (2), bis Sie am Ende der Sammlung angelangt sind.

### map() und filter()

JavaScript verfügt auch über spezialisiertere Schleifen für Sammlungen, von denen wir hier zwei erwähnen werden.

Mit `map()` können Sie für jedes Element in einer Sammlung etwas tun und eine neue Sammlung mit den geänderten Elementen erstellen:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Es fügt dann den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall wandelt die von uns bereitgestellte Funktion das Element in Großbuchstaben um, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Mit {{jsxref("Array.prototype.filter()","filter()")}} können Sie jedes Element in einer Sammlung testen und eine neue Sammlung erstellen, die nur passende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht `map()` sehr ähnlich, außer dass die von uns übergebene Funktion einen [Boolean-Wert](/de/docs/Learn/JavaScript/First_steps/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element im neuen Array aufgenommen. Unsere Funktion überprüft, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die wir im [Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions)-Modul kennenlernen. Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen Beispiel "Kreise zeichnen" haben Sie keine Sammlung von Elementen, durch die Sie schlaufen müssen: Sie möchten wirklich nur denselben Code 100 Mal ausführen. In einem solchen Fall sollten Sie die {{jsxref("statements/for","for")}}-Schleife verwenden. Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, die durch Semikolons getrennt sind:

   1. Ein **Initializer** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt wird und inkrementiert wird, um die Anzahl der durchlaufenen Schleifen zu zählen. Es wird manchmal auch als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll zu schleifen. Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, ob die Abbruchbedingung erreicht wurde.
   3. Ein **Final-Ausdruck** — dies wird immer ausgewertet (oder ausgeführt), jedes Mal, wenn die Schleife eine vollständige Iteration durchlaufen hat. Es dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie dem Punkt näher zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife eine Iteration durchläuft.

### Quadrate berechnen

Schauen wir uns ein wirkliches Beispiel an, damit wir sehen können, was diese Elemente deutlicher machen.

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

Das gibt uns folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn bei jedem Schleifendurchlauf neu zuweisen.
2. `i < 10`: die Schleife wird so lange durchlaufen, wie `i` kleiner als `10` ist.
3. `i++`: bei jedem Schleifendurchlauf wird eins zu `i` hinzugefügt.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das heißt: `i * i`. Wir erstellen einen String, der die durchgeführte Berechnung und das Ergebnis ausdrückt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass der nächste hinzuzufügende String in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter …
4. Wenn `i` gleich `10` wird, stoppen wir die Schleife und fahren direkt mit dem nächsten Code unterhalb der Schleife fort, indem wir die Nachricht `Finished!` in einer neuen Zeile ausgeben.

### Durch Sammlungen mit einer for-Schleife schleifen

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstatt einer `for...of`-Schleife.

Schauen wir uns nochmal unser `for...of`-Beispiel oben an:

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

In dieser Schleife beginnen wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht. Dann verwenden wir innerhalb der Schleife `i`, um nacheinander auf jedes Element im Array zuzugreifen.

Das funktioniert ganz gut, und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die übliche Methode, durch ein Array zu iterieren. Dennoch bietet es mehr Chancen, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen, und dabei vergessen, dass der erste Array-Index Null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und dabei vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus Gründen wie diesen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie noch eine `for`-Schleife verwenden, um durch ein Array zu iterieren. Beispielsweise möchten wir im folgenden Code eine Nachricht ausgeben, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der endgültige Ausgabe-Satz ist nicht sehr gut formuliert:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es bevorzugen, wenn er das letzte Element anders behandeln würde, wie folgt:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies zu tun, müssen wir wissen, wann wir bei der letzten Schleifeniteration sind, und dazu können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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

Wenn Sie eine Schleife vorzeitig beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden. Wir haben diese bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung auftritt, der mit dem Eingabeausdruck übereinstimmt, verlässt die `break`-Anweisung sofort die switch-Anweisung und fährt mit dem darunter liegenden Code fort.

Bei Schleifen ist es genauso — eine `break`-Anweisung beendet die Schleife sofort und veranlasst den Browser, mit jedem folgenden Code fortzufahren.

Angenommen, wir wollten in einem Array von Kontakten und Telefonnummern nach einer bestimmten Nummer suchen und nur die gewünschte Nummer zurückgeben? Zuerst ein wenig einfaches HTML — ein Text-{{htmlelement("input")}}, das es uns erlaubt, einen Namen zum Suchen einzugeben, ein {{htmlelement("button")}}-Element zum Absenden der Suche und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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
2. Anschließend fügen wir dem Button (`btn`) einen Event-Listener hinzu, sodass bei einem Klick darauf Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den eingegebenen Wert des Texteingabefelds in einer Variablen namens `searchName`, bevor wir die Texteingabe leeren und erneut fokussieren, bereit für die nächste Suche. Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf den String anwenden, sodass die Suche case-insensitive ist.
4. Nun zum interessanten Teil, der `for...of`-Schleife:

   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt beim Doppelpunktzeichen und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Bedingungsanweisung, um zu überprüfen, ob `splitContact[0]` (der Name des Kontakts, wieder in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) umgewandelt) gleich dem eingegebenen `searchName` ist. Wenn dies der Fall ist, schreiben wir einen String in den Absatz, um die Telefonnummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt festgelegt haben, und wenn nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können auch den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (auch [sehen Sie es live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu beenden, springt sie zur nächsten Iteration der Schleife. Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von Ganzzahlen (ganze Zahlen) sind.

Das HTML ist im Wesentlichen dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist ebenfalls größtenteils dasselbe, obwohl die Schleife selbst ein wenig anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen zu startenden Zähler bei 1 (da wir in diesem Fall nicht an 0 interessiert sind), eine Abbruchbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird und einen Iterator, der bei jedem Mal eins zum Zähler addiert.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [Math.sqrt(i)](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) heraus und überprüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich ist mit sich selbst, wenn sie auf die nächste ganze Zahl abgerundet wird (dies ist, was [Math.floor()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl macht).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, und wir sind nicht daran interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, umgehen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können auch den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (auch [sehen Sie es live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und während Sie nicht alle jetzt verstehen müssen, lohnt es sich, sich den Aufbau einiger anderer anzusehen, damit Sie die gleichen Merkmale in einer etwas anderen Weise erkennen können.

Zuerst schauen wir uns die [while](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese arbeitet sehr ähnlich wie die `for`-Schleife, mit der Ausnahme, dass die Initialisierungsvariable vor der Schleife festgelegt wird und der letzte Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente in den Klammern zu sein. Die Bedingung wird innerhalb der Klammern angegeben, denen das Schlüsselwort `while` vorausgeht, anstatt `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge definiert, wie sie in der for-Schleife sind. Dies liegt daran, dass Sie eine Initialisierungsvariable definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist oder nicht. Der letzte Ausdruck wird dann nach dem ausgeführten Code in der Schleife ausgeführt (wenn eine Iteration abgeschlossen ist), und dies geschieht nur, wenn die Bedingung immer noch wahr ist.

Schauen wir uns noch einmal unser Beispiel für die Katzenliste an, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch genauso wie erwartet — schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (sehen Sie auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Abwandlung der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt die Initialisierungsvariable wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den letzten Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code in einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Dies liegt daran, dass die Bedingung nach dem Code in der Schleife kommt. Wir führen also immer diesen Code aus und überprüfen dann, ob wir ihn erneut ausführen müssen. Bei `while`- und `for`-Schleifen erfolgt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Katzenlistenbeispiel noch einmal umschreiben, um eine `do...while`-Schleife zu verwenden:

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
> Auch dieses funktioniert genauso wie erwartet — schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (sehen Sie auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Mit while- und do...while-Schleifen — sowie allen Schleifen — müssen Sie sicherstellen, dass die Initialisierungsvariable inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung schließlich falsch wird. Andernfalls läuft die Schleife ewig weiter, und entweder wird der Browser sie zum Stoppen zwingen oder es wird abstürzen. Dies wird als **Endlosschleife** bezeichnet.

## Aktives Lernen: Countdown zum Start

In dieser Übung möchten wir, dass Sie einen einfachen Countdown zum Start im Ausgabefeld ausgeben, von 10 bis Blastoff. Konkret möchten wir, dass Sie:

- Von 10 bis 0 schleifen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
- Für jede Iteration einen neuen Absatz erstellen und ihn an das Ausgabefeld `<div>` anhängen, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. In den Kommentaren haben wir Ihnen drei Codezeilen bereitgestellt, die an irgendeiner Stelle in der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — hängt den Absatz an das Ausgabefeld `<div>` an.
  - `para.textContent =` — macht den Text im Absatz gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen setzen.

- Unterschiedliche Iterationsnummern erfordern unterschiedliche Texte, die für diese Iteration in den Absatz gesetzt werden (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Zahl 10 ist, geben Sie "Countdown 10" in den Absatz aus.
  - Wenn die Zahl 0 ist, geben Sie "Blast off!" in den Absatz aus.
  - Für jede andere Zahl geben Sie nur die Zahl in den Absatz aus.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht hoch, also verwenden Sie **nicht** `i++` — wie iterieren Sie nach unten?

> [!NOTE]
> Wenn Sie anfangen, die Schleife zu schreiben (zum Beispiel (while(i>=0)), könnte der Browser hängen bleiben, weil Sie noch nicht die Endbedingung eingegeben haben. Seien Sie also vorsichtig dabei. Sie können anfangen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu vermeiden, und den Kommentar nach dem Fertigstellen entfernen.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Auffüllung einer Gästeliste

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und in eine Gästeliste eintragen. Aber es ist nicht ganz so einfach — wir möchten Phil und Lola nicht reinlassen, da sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für zugelassene Gäste und eine für abgelehnte.

Konkret möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Während jeder Schleifeniteration überprüfen, ob das aktuelle Array-Element "Phil" oder "Lola" ist mithilfe einer Bedingungsanweisung:

  - Wenn ja, hängen Sie das Array-Element an das Ende des `refused`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn nicht, hängen Sie das Array-Element an das Ende des `admitted`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Anfang einer Zeile, die etwas am Ende von `refused.textContent` anhängen wird.
- `admitted.textContent +=` — der Anfang einer Zeile, die etwas am Ende von `admitted.textContent` anhängen wird.

Zusätzliche Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, haben Sie zwei Listen von Namen, getrennt durch Kommas, aber sie werden unordentlich sein — es wird ein Komma am Ende von jedem sein. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt ans Ende setzen? Schauen Sie sich den Artikel [Nützliche String-Methoden](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) für Hilfe an.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Welchen Schleifentyp sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Fehlerquellen.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar. Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten finden, sich zu merken, oder die Ihnen am intuitivsten erscheint. Wir würden `for` empfehlen, zumindest anfangs, da es wahrscheinlich am einfachsten ist, sich alles zu merken — der Initialisierer, die Bedingung und der letzte Ausdruck müssen alle ordentlich in die Klammern passen, sodass es einfach ist zu sehen, wo sie sind und zu überprüfen, dass Sie sie nicht vergessen haben.

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
> Es gibt auch andere Schleifentypen/-funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie Ihre Schleifenkenntnisse weiter vertiefen möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops).

## Fazit

Dieser Artikel hat Ihnen die grundlegenden Konzepte und die verschiedenen Möglichkeiten der Schleifen im Code von JavaScript offenbart. Sie sollten jetzt verstehen, warum Schleifen eine gute Methode sind, um sich mit sich wiederholendem Code auseinanderzusetzen, und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Wenn es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel noch einmal durchzulesen oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu bitten.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Referenz zu for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [Referenz zur for-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/for)
- [Referenzen zu while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while)
- [Referenzen zu break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
