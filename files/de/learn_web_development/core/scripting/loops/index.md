---
title: Schleifen in Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis hin zu fast jeder anderen Situation, in der viele ähnliche Aufgaben erledigt werden müssen. Hier werfen wir einen Blick auf die Schleifenstrukturen, die in JavaScript verfügbar sind, um solche Bedürfnisse zu erfüllen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen – eine Code-Struktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male ohne Wiederholung desselben Codes für jede Iteration zu tun.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Unterbrechen und Fortsetzen von Schleifen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe immer und immer wieder zu tun. Oft wird der Code bei jeder Runde der Schleife leicht unterschiedlich sein, oder derselbe Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Beispiel für Schleifencode

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und verschiedene Zufallssätze zu sehen):

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

Sie müssen den gesamten Code nicht jetzt verstehen, aber betrachten wir den Teil des Codes, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die Grundidee erfassen – wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das früher im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück. Der erforderliche Codeumfang wäre derselbe, egal ob wir 100, 1000 oder 10.000 Kreise zeichnen würden. Nur eine Zahl muss geändert werden.

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

Dies würde sehr langweilig und schwer zu pflegen werden.

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

1. Angesichts der Sammlung `cats`, erhalte das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei davon erwähnen.

Sie können `map()` verwenden, um mit jedem Element in einer Sammlung etwas zu tun und eine neue Sammlung mit den geänderten Elementen zu erstellen:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Anschließend fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall wandelt die bereitgestellte Funktion das Element in Großbuchstaben um, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

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

Dies sieht `map()` sehr ähnlich, außer dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element in das neue Array aufgenommen. Unsere Funktion prüft, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array enthält, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) Lektion lernen werden. Mit Funktionsausdrücken könnten wir das obige Beispiel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen zum Durchlaufen: Sie möchten wirklich nur denselben Code 100 Mal ausführen. In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden. Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. In den Klammern haben wir drei Elemente, getrennt durch Semikolons:
   1. Ein **Initializer** – dies ist normalerweise eine Variable, die auf eine Zahl gesetzt ist, die inkrementiert wird, um die Anzahl der Durchläufe der Schleife zu zählen. Es wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** – diese definiert, wann die Schleife aufhören sollte, zu schleifen. Dies ist im Allgemeinen ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um festzustellen, ob die Abschlussbedingung erfüllt ist.
   3. Ein **final-expression** – dies wird immer bei jeder vollständigen Iteration der Schleife ausgewertet (oder ausgeführt). Es dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Block von Code enthalten – dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Quadrate berechnen

Sehen wir uns ein echtes Beispiel an, damit wir klarer sehen können, was diese tun.

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

Zerlegen wir die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile:

1. `let i = 1`: die Zählervariable, `i`, beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, weil wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: gehe weiter durch die Schleife, solange `i` kleiner als `10` ist.
3. `i++`: füge jedes Mal, wenn die Schleife durchläuft, eins zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das ist: `i * i`. Wir erstellen eine Zeichenkette, die die Berechnung, die wir durchgeführt haben, und das Ergebnis ausdrückt, und fügen diese Zeichenkette dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, sodass die nächste hinzugefügte Zeichenkette auf einer neuen Zeile beginnt. Also:

1. Während des ersten Durchlaufs, `i = 1`, werden wir `1 x 1 = 1` hinzufügen.
2. Während des zweiten Durchlaufs, `i = 2`, werden wir `2 x 2 = 4` hinzufügen.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife laufen zu lassen und gehen direkt zum nächsten Codeblock unter der Schleife und drucken die Nachricht `Fertig!` auf einer neuen Zeile aus.

### Sammlung mit einer for-Schleife durchlaufen

Sie können eine `for`-Schleife verwenden, um eine Sammlung zu iterieren, anstelle einer `for...of`-Schleife.

Sehen wir uns unser obiges `for...of`-Beispiel noch einmal an:

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

In dieser Schleife beginnen wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht. Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array nacheinander zuzugreifen.

Das funktioniert einwandfrei, und in früheren Versionen von JavaScript existierte `for...of` nicht, daher war dies der Standardweg, um ein Array zu iterieren. Es bietet jedoch mehr Möglichkeiten, Fehler in den Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen, indem Sie vergessen, dass der erste Array-Index null, nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus Gründen wie diesen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie es können.

Manchmal müssen Sie trotzdem eine `for`-Schleife verwenden, um ein Array zu iterieren. Zum Beispiel wollen wir im folgenden Code eine Nachricht protokollieren, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der endgültige Ausgabesatz ist nicht sehr gut strukturiert:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir würden es vorziehen, den letzten Punkt anders zu behandeln, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um das zu tun, müssen wir wissen, wann wir bei der letzten Iteration der Schleife sind, und um das zu tun, können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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

Wenn Sie eine Schleife beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden. Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung erfüllt ist, der mit dem Ausgabeausdruck übereinstimmt, verlässt die `break` Anweisung die switch-Anweisung sofort und fährt mit dem Code danach fort.

Bei Schleifen ist es dasselbe – eine `break`-Anweisung verlässt die Schleife sofort und lässt den Browser zu jedem folgenden Code übergehen.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die gesuchte Nummer zurückgeben? Zuerst etwas einfaches HTML – ein Text-{{htmlelement("input")}}, das es uns ermöglicht, einen Namen zum Suchen einzugeben, ein {{htmlelement("button")}}-Element, um eine Suche auszuführen, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zunächst haben wir einige Variablendefinitionen – wir haben ein Array von Kontaktinformationen, wobei jedes Element eine Zeichenkette ist, die einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als Nächstes fügen wir dem Button (`btn`) einen Ereignis-Listener hinzu, sodass bei jedem Drücken des Buttons ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den in das Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche. Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf die Zeichenkette anwenden, damit die Suche nicht case-sensitive ist.
4. Nun zum interessanten Teil, der `for...of`-Schleife:
   1. Innerhalb der Schleife trennen wir den aktuellen Kontakt am Doppelpunkt und speichern die resultierenden beiden Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist. Wenn ja, geben wir in den Absatz eine Zeichenkette ein, um mitzuteilen, wie die Telefonnummer des Kontakts lautet, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Contact not found." (Kontakt nicht gefunden).

> [!NOTE]
> Sie können sich den [vollen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (auch [laufend live sehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, springt sie zur nächsten Iteration der Schleife. Sehen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe entgegennimmt und nur die Zahlen zurückgibt, die Quadratzahlen von ganzen Zahlen (ganze Zahlen) sind.

Das HTML ist im Wesentlichen dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, obwohl die Schleife selbst ein bisschen anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da wir in diesem Fall nicht an 0 interessiert sind), eine Austrittsbedingung, die besagt, dass die Schleife aufhört, wenn der Zähler größer als die Eingabe `num` wird, und ein Iterator, der beim Durchlauf der Schleife jeweils 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem getestet wird, ob sie dieselbe ist wie sie selbst, wenn sie auf die nächste ganze Zahl abgerundet ist (das ist, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl macht).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich einander sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, also sind wir nicht interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Nummer irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können sich den [vollen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (auch [laufend live sehen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Typ von allgemeinen Schleifen, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie nicht alle diese jetzt verstehen müssen, lohnt es sich, die Struktur einiger anderer anzusehen, damit Sie dieselben Merkmale in etwas anderer Weise erkennen können.

Werfen wir zuerst einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife. Die Syntax dieser Schleife sieht so aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese funktioniert auf eine sehr ähnliche Art wie für die `for`-Schleife, mit der Ausnahme, dass die Initialisierung variabel vor der Schleife gesetzt wird und der Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente innerhalb der Klammern zu sein. Die Bedingung wird in die Klammern eingefügt, die von dem `while`-Schlüsselwort anstelle von `for` vorangestellt werden.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge wie in der For-Schleife definiert. Dies liegt daran, dass Sie einen Initializer definiert haben müssen, bevor Sie überprüfen können, ob die Bedingung wahr ist. Der final-expr wird dann nach dem Code in der Schleife ausgeführt (eine Iteration wurde abgeschlossen), was nur geschieht, wenn die Bedingung noch wahr ist.

Schauen wir uns unser Katzenlistenbeispiel nochmals an, das aber mit einer while-Schleife umgeschrieben wurde:

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
> Dies funktioniert immer noch genauso wie erwartet – sehen Sie es sich [laufend live auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (auch den [vollen Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet aber eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initializer wieder zuerst, vor Beginn der Schleife. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den final Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass der Code in einer `do...while`-Schleife immer mindestens einmal ausgeführt wird. Das liegt daran, dass die Bedingung nach dem Code in der Schleife kommt. Also führen wir diesen Code immer aus und überprüfen dann, ob wir ihn erneut ausführen müssen. In `while`- und `for`-Schleifen erfolgt die Prüfung zuerst, sodass der Code möglicherweise niemals ausgeführt wird.

Lassen Sie uns unser Katzenlistenbeispiel erneut umschreiben, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert genau wie erwartet – sehen Sie es sich [laufend live auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (auch den [vollen Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, sodass die Bedingung schließlich falsch wird. Ansonsten läuft die Schleife für immer weiter, und entweder zwingt der Browser sie zum Stoppen oder sie stürzt ab. Dies wird als **endlose Schleife** bezeichnet.

## Implementieren eines Countdown-Starts

In dieser Übung möchten wir, dass Sie einen einfachen Countdown-Start zur Ausgabebox drucken, von 10 bis zum Start (Blastoff).

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu schleifen. Wir haben Ihnen einen Initializer bereitgestellt – `let i = 10;`.
3. Für jede Iteration erstellen Sie einen neuen Absatz und hängen ihn an das Ausgabe-`<div>` an, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codezeilen in einem Kommentar bereitgestellt, die Sie irgendwo in der Schleife verwenden müssen:
   1. `const para = document.createElement('p');` – erstellt einen neuen Absatz.
   2. `output.appendChild(para);` – fügt den Absatz an das Ausgabe-`<div>` an.
   3. `para.textContent =` – macht den Text im Absatz gleich dem, was Sie auf der rechten Seite, nach dem Gleichheitszeichen, setzen.
4. Für die verschiedenen Iterationszahlen, die unten aufgeführt sind, schreiben Sie den Code, um den erforderlichen Text in den Absatz einzufügen (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
   3. Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.
5. Denken Sie daran, einen Iterator einzuschließen! Beachten Sie jedoch, dass wir in diesem Beispiel nach jeder Iteration herunterzählen, nicht hochzählen, sodass Sie **nicht** `i++` verwenden – wie iterieren Sie nach unten?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu tippen (zum Beispiel `(while(i>=0)`), kann der Browser in einer unendlichen Schleife stecken bleiben, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie daher vorsichtig damit. Sie können damit beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu bewältigen und den Kommentar zu entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter dem Live-Ausgabe ansehen.

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

## Erstellen einer Gästeliste

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach - wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen: eine für Gäste, die zugelassen werden, und eine für Gäste, die abgelehnt werden.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die das `people`-Array durchläuft.
3. Während jeder Schleifeniteration prüfen Sie durch Verwendung einer Bedingungsanweisung, ob das aktuelle Array-Element "Phil" oder "Lola" entspricht:
   1. Wenn ja, verketten Sie das Array-Element am Ende des `refused`-Absatzes mit einem Komma und einem Leerzeichen.
   2. Wenn nein, verketten Sie das Array-Element am Ende des `admitted`-Absatzes mit einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `admitted.textContent` anhängt.

Zusätzliche Bonusfrage — Nach erfolgreichem Abschluss der oben genannten Aufgaben haben Sie zwei durch Kommas getrennte Namenslisten, die jedoch unordentlich sind — es wird ein Komma am Ende jeder Liste sein. Können Sie herausfinden, wie man Zeilen schreibt, die das letzte Komma in jedem Fall abschneiden und einen Punkt hinzufügen? Sehen Sie sich den Artikel [Nützliche Zeichenkettenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der Schaltfläche _Zurücksetzen_ im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie sich die Lösung unter dem Live-Ausgabe ansehen.

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

Wenn Sie durch ein Array oder ein anderes Objekt, das es unterstützt, iterieren und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten, etwas falsch zu machen.

Für andere Verwendungen sind `for`, `while` und `do...while`-Schleifen weitgehend austauschbar. Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Präferenz ab - welche Sie am einfachsten zu merken oder am intuitivsten finden. Wir würden `for` empfehlen, zumindest zu Beginn, da es wahrscheinlich am einfachsten ist, sich alles zu merken – der Initializer, die Bedingung und der final-expr müssen alle ordentlich in die Klammern gehen, sodass es einfach zu sehen ist, wo sie sind und sicherzustellen, dass Sie sie nicht vergessen haben.

Werfen wir nochmal einen Blick auf sie alle.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Rahmen dieses Artikels hinausgehen. Wenn Sie Ihre Schleifenkenntnisse vertiefen möchten, lesen Sie unseren [leichfaden Loops und Iteration](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

Dieser Artikel hat Ihnen die Grundkonzepte hinter und verschiedene Optionen beim Schleifen von Code in JavaScript offenbart. Sie sollten nun klar darüber sein, warum Schleifen ein gutes Mittel zur Behandlung von repetitivem Code sind, und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Im nächsten Artikel geben wir Ihnen einige Tests an die Hand, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Loops und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
