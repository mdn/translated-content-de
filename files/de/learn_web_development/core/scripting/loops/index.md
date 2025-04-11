---
title: Schleifen-Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um schnell sich wiederholende Aufgaben zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu jeder anderen Situation, in der Sie viele ähnliche Aufgaben zu erledigen haben. Hier werden wir die Schleifenstrukturen untersuchen, die in JavaScript verfügbar sind und solche Bedürfnisse abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den grundlegenden Konzepten von JavaScript, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie den Zweck von Schleifen — eine Code-Struktur, die es Ihnen erlaubt, etwas sehr Ähnliches viele Male zu wiederholen, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Aus Schleifen ausbrechen und fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe immer und immer wieder zu tun. Oft ist der Code bei jedem Durchgang der Schleife leicht unterschiedlich, oder derselbe Code wird ausgeführt, jedoch mit verschiedenen Variablen.

### Beispiel für Schleifen-Code

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sets zu sehen):

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

Sie müssen den gesamten Code jetzt nicht verstehen, aber lassen Sie uns den Teil des Codes ansehen, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die Grundidee verstehen – wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, wobei jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, definiert früher im Code, gibt eine ganze Zahl zwischen `0` und `x-1` zurück. Die benötigte Code-Menge wäre dieselbe, egal ob wir 100, 1000 oder 10.000 Kreise zeichnen. Nur eine Zahl muss sich ändern.

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

Meistens, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten etwas mit jedem Element machen.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im Kapitel [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) dieses Kurses kennengelernt haben. Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel besagt `for (const cat of cats)`:

1. Nehmen Sie die Sammlung `cats` und holen Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variable `cat` zu und führen Sie anschließend den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei von ihnen erwähnen.

Mit `map()` können Sie etwas mit jedem Element in einer Sammlung machen und eine neue Sammlung erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt dieses Element. Es fügt dann den Rückgabewert aus jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die von uns bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

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

Das sieht `map()` sehr ähnlich, außer dass die Funktion, die wir übergeben, einen [booleschen Wert](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element im neuen Array enthalten. Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer Lektion [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen werden. Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie iterieren können: Sie möchten wirklich nur denselben Code 100 Mal ausführen. In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden. Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, getrennt durch Semikolons:

   1. Ein **Initialisierer** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt ist, die erhöht wird, um die Anzahl der Schleifen zu zählen.
      Es wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — dies definiert, wann die Schleife aufhören sollte zu iterieren.
      Dies ist im Allgemeinen ein Ausdruck, der einen Vergleichsoperator enthält, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt ist.
   3. Ein **abschließender Ausdruck** — wird immer ausgewertet (oder ausgeführt), sobald die Schleife eine vollständige Iteration durchlaufen hat.
      Dies dient normalerweise dazu, die Zählervariable zu erhöhen (oder in einigen Fällen zu verringern), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife durchlaufen wird.

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

Dies gibt uns folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und gibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile aufschlüsseln:

1. `let i = 1`: die Zählervariable, `i`, startet bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, weil wir sie jedes Mal, wenn wir die Schleife durchlaufen, neu zuweisen.
2. `i < 10`: die Schleife läuft weiter, solange `i` kleiner als `10` ist.
3. `i++`: füge bei jedem Durchlauf der Schleife eins zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das ist: `i * i`. Wir erstellen einen String, der die von uns durchgeführte Berechnung und das Ergebnis angibt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste von uns hinzugefügte String in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, daher fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, daher fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, stoppen wir die Schleife und gehen direkt zum nächsten Abschnitt des Codes unterhalb der Schleife über und drucken die Nachricht `Fertig!` in einer neuen Zeile aus.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um eine Sammlung zu durchlaufen, anstelle einer `for...of`-Schleife.

Sehen wir uns noch einmal unser `for...of`-Beispiel an:

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

In dieser Schleife starten wir `i` bei `0` und hören auf, wenn `i` die Länge des Arrays erreicht. Innerhalb der Schleife verwenden wir `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren. Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, und vergessen, dass der erste Array-Index `0` und nicht `1` ist.
- Sie könnten bei `i <= cats.length` stoppen, und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus Gründen wie diesen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie jedoch dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren. Zum Beispiel, im folgenden Code möchten wir eine Nachricht protokollieren, die unsere Katzen auflistet:

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

Wir würden es vorziehen, wenn es die letzte Katze anders behandelt, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber dazu müssen wir wissen, wann wir bei der letzten Iteration der Schleife sind, und um das zu tun, können wir eine `for`-Schleife verwenden und den Wert von `i` untersuchen:

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

## Schleifen abbrechen mit break

Wenn Sie eine Schleife beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden. Wir haben diese bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben – wenn ein Fall in einer switch-Anweisung erfüllt ist, der dem Eingabeausdruck entspricht, beendet die `break`-Anweisung sofort die switch-Anweisung und wechselt zum Code dahinter.

Es ist dasselbe mit Schleifen – eine `break`-Anweisung beendet sofort die Schleife und bringt den Browser dazu, mit dem Code fortzufahren, der darauf folgt.

Angenommen, wir wollten in einem Array von Kontakten und Telefonnummern nach einer bestimmten Nummer suchen und diese zurückgeben? Zuerst etwas einfaches HTML — ein Text-{{htmlelement("input")}}, damit wir einen zu suchenden Namen eingeben können, ein {{htmlelement("button")}}-Element, um die Suche abzusenden, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zuerst haben wir einige Variablendefinitionen – wir haben ein Array von Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als nächstes hängen wir einen Ereignis-Listener an den Button (`btn`) an, damit ein Code ausgeführt wird, wenn er gedrückt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den im Text-Input eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann den Text-Input leeren und ihn erneut fokussieren, bereit für die nächste Suche. Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf den String anwenden, sodass die Suche nicht nach Groß- und Kleinschreibung unterscheidet.
4. Nun zum interessanten Teil, der `for...of`-Schleife:

   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt-Zeichen auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine bedingte Anweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, wieder in Kleinbuchstaben mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist. Wenn ja, geben wir einen String in das Absatz-Element ein, um anzuzeigen, wie die Nummer des Kontakts lautet, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ansehen (auch [läuft es live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen überspringen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu beenden, wird zur nächsten Iteration der Schleife gesprungen. Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganze Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — ein einfacher numerischer Input und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, auch wenn die Schleife selbst etwas anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen bei 1 startenden Zähler (da wir nicht an 0 interessiert sind), eine Ausstiegsbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die eingegebene `num` wird, und ein Iterator, der jedes Mal 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), dann überprüfen wir, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich ist wie sie, wenn sie auf die nächste ganze Zahl abgerundet ist (das ist, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der Zahl macht, die ihr übergeben wird).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, und wir sind nicht daran interessiert. In einem solchen Fall verwenden wir weiter die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo zu speichern.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den gesamten `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketteten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ansehen (auch [läuft es live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Typ allgemeiner Schleifen, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie nicht alle jetzt verstehen müssen, lohnt es sich, sich die Struktur einiger anderer anzusehen, damit Sie die gleichen Merkmale auf etwas andere Weise erkennen können.

Werfen wir zunächst einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife. Diese Schleife hat die folgende Syntax:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese funktioniert auf sehr ähnliche Weise wie die `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird und der abschließende Ausdruck innerhalb der Schleife nach dem zu ausführenden Code enthalten ist, anstatt dass diese beiden Elemente in den Klammern enthalten sind. Die Bedingung wird in den Klammern enthalten, die vom `while`-Schlüsselwort gefolgt werden, anstatt von `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge definiert wie bei der for-Schleife. Dies liegt daran, dass Sie einen Initialisierer definiert haben müssen, bevor Sie prüfen können, ob die Bedingung wahr ist oder nicht. Der abschließende Ausdruck wird dann ausgeführt, nachdem der Code innerhalb der Schleife ausgeführt wurde (eine Iteration wurde abgeschlossen), was nur passiert, wenn die Bedingung noch zutrifft.

Sehen wir uns unser Katzenlistenbeispiel noch einmal an, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch einwandfrei – schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (auch den [vollständigen Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall folgt das Schlüsselwort direkt den geschweiften Klammern, die den auszuführenden Code enthalten, sowie dem abschließenden Ausdruck.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife ist, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt, wodurch dieser Code immer ausgeführt wird, und dann geprüft wird, ob er erneut ausgeführt werden muss. Bei `while`- und `for`-Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

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
> Auch dies funktioniert, wie erwartet – schauen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (auch den [vollständigen Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer erhöht oder, je nach Fall, verringert wird, sodass die Bedingung schließlich falsch wird.
> Andernfalls wird die Schleife ewig weiterlaufen, und entweder wird der Browser sie stoppen oder er wird abstürzen. Dies wird als **endlose Schleife** bezeichnet.

## Aktives Lernen: Countdown zum Start

In dieser Übung möchten wir, dass Sie einen einfachen Countdown zum Start im Ausgabefeld ausdrucken, von 10 bis zum Start. Konkret möchten wir, dass Sie:

- Von 10 bis 0 iterieren. Wir haben Ihnen einen Initialisierer gegeben — `let i = 10;`.
- Für jede Iteration erstellen Sie einen neuen Absatz und fügen ihn dem `output`-`<div>` hinzu, den wir mit `const output = document.querySelector('.output');` ausgewählt haben. In Kommentaren haben wir Ihnen drei Codezeilen angeboten, die irgendwo innerhalb der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — fügt den Absatz dem `output`-`<div>` hinzu.
  - `para.textContent =` — macht den Text im Absatz gleich dem, was Sie auf der rechten Seite des Gleichheitszeichens setzen.

- Unterschiedliche Iterationsnummern erfordern, dass unterschiedlicher Text in den Absatz für diese Iteration eingefügt wird (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
  - Wenn die Zahl 0 ist, drucken Sie "Start!" in den Absatz.
  - Für jede andere Zahl drucken Sie nur die Zahl in den Absatz.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch bei jeder Iteration herunter und nicht auf, daher möchten Sie **nicht** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel `while(i >= 0)`), könnte der Browser hängen bleiben, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie also vorsichtig damit. Sie können damit beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu vermeiden, und den Kommentar entfernen, wenn Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der "Zurücksetzen"-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung anzuzeigen.

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

In dieser Übung möchten wir, dass Sie eine Liste von in einem Array gespeicherten Namen nehmen und eine Gästeliste erstellen. Aber es ist nicht ganz so einfach — wir möchten Phil und Lola nicht hineinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die hereinzulassen sind, und eine für Gäste, die abgelehnt werden.

Konkret möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Während jeder Schleifeniteration überprüfen, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, indem Sie eine bedingte Anweisung verwenden:

  - Wenn es so ist, konkatenieren Sie das Array-Element an das Ende des `refused`-Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn es nicht so ist, konkatenieren Sie das Array-Element an das Ende des `admitted`-Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits angeboten:

- `refused.textContent +=` — der Beginn einer Zeile, die etwas am Ende von `refused.textContent` konkateniert.
- `admitted.textContent +=` — der Beginn einer Zeile, die etwas am Ende von `admitted.textContent` konkateniert.

Zusätzliche Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, werden Sie mit zwei Namenslisten zurückgelassen, die durch Kommas getrennt sind, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen? Schauen Sie sich den Artikel [Nützliche Zeichenfolgenmethoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) zur Hilfe an.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der "Zurücksetzen"-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung anzuzeigen.

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

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist einfacher zu lesen und es gibt weniger Fehlerquellen.

Für andere Verwendungszwecke sind `for`-, `while`- und `do...while`-Schleifen weitgehend austauschbar.
Sie können alle zur Lösung derselben Probleme verwendet werden, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Präferenz ab — welche Sie am einfachsten zu merken finden oder am intuitivsten. Wir empfehlen `for`, zumindest zu Beginn, da es wahrscheinlich das einfachste ist, um alles zu behalten — der Initialisierer, die Bedingung und der abschließende Ausdruck müssen ordentlich in die Klammern passen, sodass es einfach ist zu sehen, wo sie sind und zu überprüfen, ob Sie sie nicht vergessen haben.

Werfen wir einen Blick auf sie alle noch einmal.

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
> Es gibt noch andere Schleifentypen/-funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und die über den Rahmen dieses Artikels hinausgehen. Wenn Sie tiefer in das Thema Schleifen einsteigen möchten, lesen Sie unseren erweiterten [Leitfaden zu Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Schleifen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter und die verschiedenen Optionen, die beim Schleifen-Code in JavaScript verfügbar sind, aufgezeigt. Sie sollten nun klar verstehen, warum Schleifen ein gutes Mechanismus sind, um sich wiederholenden Code zu verwalten, und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Als nächstes sehen wir uns Funktionen an.

## Siehe auch

- [Schleifen und Iterationen im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
