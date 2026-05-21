---
title: Schleifen von Code
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um repetitive Aufgaben schnell zu erledigen, von mehreren grundlegenden Berechnungen bis hin zu nahezu jeder anderen Situation, in der viele ähnliche Aufgaben zu erledigen sind. Hier werden wir uns die Schleifenstrukturen ansehen, die in JavaScript für solche Anforderungen verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den grundlegenden JavaScript-Konzepten, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen der Zweck von Schleifen — eine Code-Struktur, die es Ihnen ermöglicht, sehr ähnliche Dinge viele Male auszuführen, ohne den gleichen Code für jede Wiederholung zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Verlassen von Schleifen und Fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe wieder und wieder zu tun. Oft wird der Code jedes Mal etwas anders sein, oder derselbe Code läuft, aber mit unterschiedlichen Variablen.

### Beispiel für Schleifencode

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie den _Aktualisieren_-Button, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sets zu sehen):

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

### Mit und ohne eine Schleife

Sie müssen den gesamten Code jetzt noch nicht verstehen, aber lassen Sie uns den Teil des Codes ansehen, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die Grundidee begreifen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das vorher im Code definiert ist, gibt eine Ganzzahl zwischen `0` und `x-1` zurück.
Die Menge des benötigten Codes wäre dieselbe, egal ob wir 100 Kreise, 1000 oder 10.000 zeichnen würden. Nur eine Zahl müsste geändert werden.

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

Das würde sehr langweilig und schwer zu warten werden.

## Durchlaufen einer Sammlung

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten etwas mit jedem Element tun.

Ein Sammlungstyp ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben. Es gibt jedoch auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug, um eine Sammlung zu durchlaufen, ist die {{jsxref("Statements/for...of", "for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Angenommen, die Sammlung `cats` hat jedes Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Nehmen Sie das nächste Element, und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch speziellere Schleifen für Sammlungen, und wir werden zwei von ihnen hier erwähnen.

Sie können `map()` verwenden, um etwas mit jedem Element in einer Sammlung zu tun und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion in {{jsxref("Array.prototype.map()", "cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf, indem es das Element übergibt. Es fügt dann den Rückgabewert jeder Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall wandelt die Funktion, die wir bereitstellen, das Element in Großbuchstaben um, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()", "filter()")}} verwenden, um jedes Element in einer Sammlung zu testen und eine neue Sammlung zu erstellen, die nur passende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht sehr ähnlich wie `map()` aus, außer dass die Funktion, die wir übergeben, einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element in das neue Array aufgenommen.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" anfangen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` beide oft mit _Funktionsausdrücken_ verwendet werden, über die Sie in unserer [Functions](/de/docs/Learn_web_development/Core/Scripting/Functions)-Lektionen mehr erfahren werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie durchgehen: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("Statements/for", "for")}}-Schleife verwenden.
Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. In den Klammern haben wir drei Elemente, getrennt durch Semikolons:
   1. Einen **Initializer** — das ist normalerweise eine Variable, die auf eine Zahl gesetzt wird, die inkrementiert wird, um die Anzahl der Durchläufe der Schleife zu zählen.
      Es wird manchmal auch als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — dies definiert, wann die Schleife nicht mehr wiederholt werden soll.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt ist.
   3. Ein **Endausdruck** — dieser wird jedes Mal bewertet (oder ausgeführt), wenn die Schleife eine vollständige Iteration durchlaufen hat.
      Er dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um dem Punkt näher zu kommen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird bei jeder Iteration der Schleife ausgeführt.

> [!NOTE]
> [Nebenbemerkung: Schleifen](https://scrimba.com/learn-javascript-c0v/~02a?via=mdn) von Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Aufschlüsselung der `for`-Schleife-Syntax.

### Quadrat berechnen

Lassen Sie uns ein echtes Beispiel ansehen, damit wir deutlicher visualisieren können, was diese tun.

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

Das gibt uns die folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Das Herzstück des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: die Zählervariable, `i`, beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn bei jedem Schleifendurchgang neu zuweisen.
2. `i < 10`: die Schleife wird so lang durchlaufen, wie `i` kleiner als `10` ist.
3. `i++`: addiert nach jedem Schleifendurchlauf eins zu `i`.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Werts von `i`, das heißt: `i * i`. Wir erstellen einen String, der die von uns durchgeführte Berechnung und das Ergebnis beschreibt, und fügen diesen String zum Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste hinzugefügte String auf einer neuen Zeile beginnt. Also:

1. Während des ersten Durchlaufs gilt `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Während des zweiten Durchlaufs gilt `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen und gehen direkt zum nächsten Code unter der Schleife über, der die Nachricht `Finished!` auf einer neuen Zeile ausgibt.

### Durchlaufen von Sammlungen mit einer for-Schleife

Sie können eine `for`-Schleife verwenden, um eine Sammlung zu durchlaufen, anstelle einer `for...of`-Schleife.

Lassen Sie uns noch einmal unser `for...of`-Beispiel oben ansehen:

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

In dieser Schleife starten wir `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren.
Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen lassen und vergessen, dass der erste Array-Index 0 und nicht 1 ist.
- Sie könnten bei `i <= cats.length` enden und vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus solchen Gründen ist es im Allgemeinen besser, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie trotzdem eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel, im unten stehenden Code wollen wir eine Nachricht loggen, die unsere Katzen auflistet:

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

Wir würden es bevorzugen, die letzte Katze anders zu behandeln, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Um dies zu tun, müssen wir wissen, wann wir bei der letzten Iteration der Schleife sind, und um das zu tun, können wir eine `for`-Schleife verwenden und den Wert von `i` überprüfen:

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

Wenn Sie eine Schleife beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben dies bereits im vorherigen Artikel getroffen, als wir die [switch statements](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) betrachtet haben — wenn ein Fall in einer switch-Anweisung das Eingabeausdruck passt, beendet die `break`-Anweisung diese switch-Anweisung sofort und wechselt zum Code danach.

Dasselbe gilt für Schleifen — eine `break`-Anweisung beendet die Schleife sofort und lässt den Browser zum nachfolgenden Code weitergehen.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten? Zunächst ein einfaches HTML — ein Textfeld ({{htmlelement("input")}}), das es uns ermöglicht, einen Suchnamen einzugeben, ein {{htmlelement("button")}}-Element zur Übermittlung der Suche und ein {{htmlelement("p")}}-Element zur Anzeige der Ergebnisse:

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text" />
<button>Search</button>

<p></p>
```

Nun zur JavaScript:

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

1. Zunächst haben wir einige Variablendefinitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, die durch einen Doppelpunkt getrennt sind.
2. Als nächstes fügen wir dem Button (`btn`) einen Event-Listener hinzu, sodass einige Code ausgeführt wird, wenn er gedrückt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den Wert, der in das Texteingabefeld eingegeben wird, in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut aktivieren, um es für die nächste Suche vorzubereiten.
   Beachten Sie, dass wir auch die [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)-Methode auf dem String ausführen, damit die Suchen nicht zwischen Groß- und Kleinschreibung unterscheiden.
4. Nun zum interessanten Teil, der `for...of`-Schleife:
   1. Innerhalb der Schleife trennen wir den aktuellen Kontakt beim Doppelpunkt und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine bedingte Anweisung, um zu prüfen, ob `splitContact[0]` (der Name des Kontakts, erneut mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) in Kleinbuchstaben umgewandelt) gleich dem eingegebenen `searchName` ist.
      Wenn dies der Fall ist, geben wir einen String in den Absatz ein, um die Telefonnummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife überprüfen wir, ob wir einen Kontakt festgelegt haben, und falls nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (auch [sehen Sie es live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu verlassen, wird zur nächsten Iteration der Schleife gesprungen.
Lassen Sie uns ein weiteres Beispiel ansehen, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (ganze Zahlen) sind.

Das HTML entspricht im Wesentlichen dem letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist größtenteils dasselbe, obwohl die Schleife selbst ein wenig anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife erhält einen Zähler, der bei 1 beginnt (da wir hier nicht an 0 interessiert sind), eine Abbruchbedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der bei jedem Durchlauf eins zum Zähler addiert.
2. Innerhalb der Schleife finden wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), überprüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie derselben Wert wie sie selbst ist, wenn sie auf die nächste Ganzzahl abgerundet wurde (das macht [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, sodass wir sie nicht interessieren. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Iteration der Schleife zu springen, ohne die Zahl irgendwo aufzuzeichnen.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den gesamten `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (auch [sehen Sie es live](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige Typ von allgemeinen Schleifen, die in JavaScript verfügbar sind. Es gibt tatsächlich viele andere, und obwohl Sie jetzt nicht alle verstehen müssen, lohnt es sich, die Struktur von einigen anderen anzusehen, damit Sie erkennen können, dass dieselben Merkmale auf leicht unterschiedliche Weise arbeiten.

Lassen Sie uns zuerst die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife ansehen. Die Syntax dieser Schleife sieht aus wie folgt:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Diese funktioniert sehr ähnlich wie die `for`-Schleife, außer dass die Initialisierung vor der Schleife gesetzt wird und der Endausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente in den Klammern enthalten zu sein. Die Bedingung ist in den Klammern enthalten, die von dem `while`-Schlüsselwort eingeleitet werden, anstelle von `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind immer noch in der gleichen Reihenfolge wie bei der for-Schleife definiert. Das liegt daran, dass ein Initialisierer definiert sein muss, bevor geprüft werden kann, ob die Bedingung wahr ist oder nicht. Nach dem Ausführen des Codes innerhalb der Schleife (eine Iteration wurde abgeschlossen), wird der Endausdruck ausgeführt, der nur dann stattfinden wird, wenn die Bedingung noch wahr ist.

Lassen Sie uns unser Beispiel mit der Katzenliste anschauen, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch genauso wie erwartet — schauen Sie es sich [live auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (sehen Sie sich außerdem den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation des while-Aufbaus:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer erneut zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den Endausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. So wird dieser Code immer erstmal ausgeführt, dann wird überprüft, ob er erneut ausgeführt werden muss. In `while`- und `for`-Schleifen erfolgt die Überprüfung zuerst, sodass der Code niemals ausgeführt werden könnte.

Schreiben wir unser Beispiel mit der Katzenliste noch einmal um, um eine `do...while`-Schleife zu verwenden:

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
> Auch dies funktioniert genauso wie erwartet — schauen Sie es sich [live auf GitHub an](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (sehen Sie sich außerdem den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder je nach Fall dekrementiert wird, sodass die Bedingung letztendlich `false` wird.
> Andernfalls wird die Schleife für immer weiterlaufen, und entweder wird der Browser sie zwingen, anzuhalten, oder er wird abstürzen. Dies nennt man eine **endlose Schleife**.

## Implementierung eines Countdown

In dieser Übung wollen wir, dass Sie einen einfachen Countdown zur Veröffentlichung von der 10 bis zum Wegholen im Ausgabebereich drucken.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 bis 0 zu schleifen. Wir haben Ihnen einen Initialisierer zur Verfügung gestellt — `let i = 10;`.
3. Für jede Iteration erstellen Sie einen neuen Absatz und hängen ihn an das Ausgabe-`<div>` an, das wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codizeilen innerhalb von Kommentaren bereitgestellt, die irgendwo innerhalb der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt einen neuen Absatz.
   2. `output.appendChild(para);` — hängt den Absatz an das Ausgabe-`<div>` an.
   3. `para.textContent =` — macht den Text innerhalb des Absatzes gleich dem, was Sie auf der rechten Seite, nach dem Gleichheitszeichen, setzen.
4. Schreiben Sie Code, um den erforderlichen Text in den Absatz für die verschiedenen in den Iterationszahlen aufgeführten Iterationszahlen einzufügen (Sie benötigen eine bedingte Anweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" auf den Absatz.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" auf den Absatz.
   3. Bei jeder anderen Zahl drucken Sie nur die Zahl auf den Absatz.
5. Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration ab und nicht auf, sodass Sie **nicht** `i++` verwenden möchten — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu tippen (zum Beispiel `(while(i>=0)`), kann der Browser in eine Endlosschleife geraten, da Sie die Endbedingung noch nicht eingegeben haben. Gehen Sie also vorsichtig damit um. Sie können beginnen, Ihren Code in einem Kommentar zu schreiben, um dieses Problem zu lösen und den Kommentar zu entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe ansehen.

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

Ihr vollständiges JavaScript sollte in etwa so aussehen:

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

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach - wir möchten Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden sollen, und eine für Gäste, die abgelehnt werden sollen.

Um die Übung abzuschließen:

1. Klicken Sie auf **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die das `people`-Array durchlaufen wird.
3. Während jeder Schleifeniteration prüfen Sie, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist, indem Sie eine bedingte Anweisung verwenden:
   1. Wenn dies der Fall ist, verketten Sie das Array-Element am Ende von `refused`-Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn dies nicht der Fall ist, verketten Sie das Array-Element am Ende von `admitted`-Absatzes `textContent`, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits zur Verfügung gestellt:

- `refused.textContent +=` — der Anfang einer Zeile, die etwas am Ende von `refused.textContent` verketten wird.
- `admitted.textContent +=` — der Anfang einer Zeile, die etwas am Ende von `admitted.textContent` verketten wird.

Extra-Bonusfrage — nach erfolgreicher Erfüllung der oben genannten Aufgaben bleiben Ihnen zwei Listen von Namen, die durch Kommas getrennt sind, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen? Schauen Sie sich den Artikel zu [Nützlichen Methoden zur Zeichenfolgenbearbeitung](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe ansehen.

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

Ihr vollständiges JavaScript sollte in etwa so aussehen:

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

Wenn Sie ein Array oder ein anderes Objekt durchlaufen, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten, dass etwas schiefgeht.

Für andere Verwendungen sind `for`, `while` und `do...while`-Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um dieselben Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten zu merken oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest am Anfang, da es wahrscheinlich am einfachsten ist, alles im Auge zu behalten — der Initialisierer, die Bedingung und der Endausdruck müssen alle ordentlich in die Klammern eingefügt werden, sodass es einfach ist zu sehen, wo sie sich befinden, und zu überprüfen, dass Sie sie nicht vergessen haben.

Lassen Sie uns noch einmal alle ansehen.

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
> Es gibt auch andere Schleifenarten/-funktionen, die in fortgeschrittenen/speziellen Situationen nützlich sind und über den Rahmen dieses Artikels hinausgehen. Wenn Sie Ihre Schleifenkenntnisse weiter vertiefen möchten, lesen Sie unseren fortgeschrittenen [Leitfaden zu Schleifen und Iterationen](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Optionen beim Schleifen von Code in JavaScript gezeigt.
Sie sollten nun klar sein, warum Schleifen ein gutes Mechanismus für die Behandlung von sich wiederholendem Code sind und bereit, sie in Ihren eigenen Beispielen zu verwenden!

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu prüfen, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung-Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
