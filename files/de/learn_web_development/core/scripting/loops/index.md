---
title: Wiederholendes Code-Ausführen
short-title: Loops
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: ad310baff9ae8f5e4efd19c158125fe765287c16
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um schnell wiederkehrende Aufgaben zu erledigen, von mehreren einfachen Berechnungen bis hin zu nahezu jeder anderen Situation, in der Sie viele ähnliche Aufgaben zu erledigen haben. Hier betrachten wir die Schleifenstrukturen in JavaScript, die solche Anforderungen bearbeiten.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorhergehenden Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen des Zwecks von Schleifen — einer Code-Struktur, die es ermöglicht, etwas sehr Ähnliches viele Male auszuführen, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Durchlaufen von Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Ausbrechen aus Schleifen und Fortfahren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen drehen sich darum, dasselbe immer wieder zu tun. Häufig wird der Code bei jeder Schleifenrunde geringfügig anders sein, oder derselbe Code wird ausgeführt, jedoch mit verschiedenen Variablen.

### Beispiel für wiederholendes Code-Ausführen

Angenommen, wir möchten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie den _Aktualisieren_-Button, um das Beispiel immer wieder auszuführen und verschiedene zufällige Mengen zu sehen):

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

Sie müssen den gesamten Code nicht jetzt schon verstehen, aber betrachten wir den Teil des Codes, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, zuvor im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Die Menge des benötigten Codes wäre dieselbe, egal ob wir 100, 1000 oder 10.000 Kreise zeichnen.
Nur eine Zahl muss geändert werden.

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

Dies würde sehr langweilig und schwierig zu pflegen sein.

## Durchlaufen einer Sammlung

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas machen.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Aber es gibt auch andere Sammlungen in JavaScript, einschließlich {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("Statements/for...of","for...of")}} Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel besagt `for (const cat of cats)`:

1. Angenommen, es gibt die Sammlung `cats`, holen Sie das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir erwähnen hier zwei davon.

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

Hier übergeben wir eine Funktion in {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt das Element. Anschließend fügt es den Rückgabewert von jedem Funktionsaufruf zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall wandelt die von uns bereitgestellte Funktion das Element in Großbuchstaben um, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

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

Dies sieht `map()` sehr ähnlich, außer dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: Wenn sie `true` zurückgibt, wird das Element im neuen Array enthalten.
Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` oft mit _Funktionsausdrücken_ verwendet werden, die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions)-Lektion kennenlernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard for Schleife

In dem "Kreise zeichnen"-Beispiel oben, haben Sie keine Sammlung von Elementen, durch die Sie durchlaufen: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("Statements/for","for")}} Schleife verwenden.
Diese hat folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben Sie:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern befinden sich drei Elemente, die durch Semikolons getrennt sind:
   1. Ein **Initialisierer** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt wird, die inkrementiert wird, um die Anzahl der ausgeführten Schleifen zu zählen.
      Es wird auch manchmal als **Counter-Variable** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife aufhören soll zu laufen.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, ob die Austrittsbedingung erfüllt ist.
   3. Ein **Endausdruck** — dies wird immer ausgewertet (oder ausgeführt), jedes Mal, wenn die Schleife eine vollständige Iteration durchlaufen hat.
      Es dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird bei jeder Iteration der Schleife ausgeführt.

> [!NOTE]
> [Nebenbemerkung: Schleifen](https://scrimba.com/learn-javascript-c0v/~02a?via=mdn) von Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine nützliche interaktive Aufschlüsselung der `for` Schleifensyntax.

### Berechnung von Quadraten

Schauen wir uns ein reales Beispiel an, damit wir besser visualisieren können, was diese Elemente tun.

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

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile unterteilen:

1. `let i = 1`: Die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn mit `i++` (was eine Zuweisung ist) bei jeder Schleifenrunde inkrementieren.
2. `i < 10`: Schleifen Sie weiter, solange `i` kleiner als `10` ist.
3. `i++`: Addieren Sie bei jeder Schleifenrunde eins zu `i`.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das heißt: `i * i`. Wir erstellen einen String, der die Berechnung und das Ergebnis darstellt, und fügen diesen String dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit der nächste String, den wir hinzufügen, mit einer neuen Zeile beginnt. Also:

1. Während des ersten Durchlaufs ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Während des zweiten Durchlaufs ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, stoppen wir die Schleife und gehen direkt zum nächsten Code unterhalb der Schleife über und drucken die Nachricht `Finished!` auf einer neuen Zeile aus.

### Durchlaufen von Sammlungen mit einer for Schleife

Sie können eine `for` Schleife verwenden, um durch eine Sammlung zu iterieren, anstelle einer `for...of` Schleife.

Betrachten wir erneut unser `for...of` Beispiel oben:

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

In dieser Schleife beginnen wir mit `i` bei `0` und stoppen, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir in der Schleife `i`, um jedes Element im Array der Reihe nach zuzugreifen.

Das funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` noch nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren.
Es bietet jedoch mehr Chancen, Fehler in Ihren Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` starten, und vergessen, dass der erste Array-Index null und nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index bei `length - 1` ist.

Aus solchen Gründen ist es normalerweise besser, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for` Schleife verwenden, um durch ein Array zu iterieren.
Zum Beispiel möchten wir im folgenden Code eine Nachricht protokollieren, die unsere Katzen auflistet:

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

Wir würden es bevorzugen, die letzte Katze anders zu behandeln, wie folgt:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu tun, müssen wir wissen, wann wir uns in der letzten Schleifeniteration befinden, und um das zu tun, können wir eine `for` Schleife verwenden und den Wert von `i` prüfen:

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

## Beenden von Schleifen mit break

Wenn Sie eine Schleife beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Wir haben dies bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung erfüllt ist, der mit dem Eingabeausdruck übereinstimmt, beendet die `break`-Anweisung sofort die switch-Anweisung und führt mit dem Code danach fort.

Es ist dasselbe mit Schleifen — eine `break`-Anweisung beendet die Schleife sofort und lässt den Browser zum nachfolgenden Code übergehen.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollten?
Zuerst etwas einfaches HTML — ein textuelles {{htmlelement("input")}}, das es uns ermöglicht, einen Namen zur Suche einzugeben, ein {{htmlelement("button")}} Element zur Absendung einer Suche, und ein {{htmlelement("p")}} Element, um die Ergebnisse anzuzeigen:

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

1. Zunächst haben wir einige Variablendefinitionen — wir haben ein Array von Kontaktinformationen, wobei jedes Element eine Zeichenkette enthält, die einen Namen und eine Telefonnummer durch einen Doppelpunkt getrennt enthält.
2. Als nächstes hängen wir einen Event-Listener an den Button (`btn`), sodass beim Drücken etwas Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den im Texteingabefeld eingegebenen Wert in einer Variablen namens `searchName`, bevor wir dann das Texteingabefeld leeren und es erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf die Zeichenkette anwenden, sodass die Suchanfragen nicht casesensitive sind.
4. Nun zum interessanten Teil, die `for...of` Schleife:
   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine Bedingungsanweisung, um zu prüfen, ob `splitContact[0]` (der Kontaktname, wieder mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) klein geschrieben) gleich dem eingegebenen `searchName` ist.
      Wenn dem so ist, tragen wir einen String in den Absatz ein, um zu berichten, welche Nummer der Kontakt hat, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf "Kontakt nicht gefunden.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) ebenfalls ansehen (siehe es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen überspringen mit continue

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife ganz zu durchbrechen, wird zur nächsten Iteration der Schleife gesprungen.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe nimmt und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (Ganzzahlen) sind.

Das HTML ist im Grunde dasselbe wie das letzte Beispiel — eine einfache numerische Eingabe und ein Absatz zur Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist auch weitgehend dasselbe, obwohl die Schleife selbst etwas anders ist:

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

1. In diesem Fall sollte die Eingabe einer Zahl (`num`) entsprechen. Die `for`-Schleife erhält einen Zähler, der bei 1 startet (da wir uns hier nicht für 0 interessieren), eine Exit-Bedingung, die besagt, dass die Schleife stoppt, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der bei jeder Runde der Schleife 1 zum Zähler addiert.
2. Innerhalb der Schleife ermitteln wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und überprüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie der gerundeten Quadratwurzel entspricht (dies macht [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, und wir sind nicht interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration zu springen, ohne die Zahl irgendwo zu protokollieren.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block ganz, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen fügen wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts an.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) ebenfalls ansehen (siehe es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige allgemeine Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und während Sie nicht alle jetzt verstehen müssen, ist es sinnvoll, sich den Aufbau einiger anderer anzusehen, damit Sie dieselben Funktionen erkennen können, die auf leicht abweichende Weise arbeiten.

Zuerst werfen wir einen Blick auf die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) Schleife. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert sehr ähnlich wie die `for` Schleife, mit dem Unterschied, dass die Initialiervariable vor der Schleife gesetzt wird und der Endausdruck im Schleifenblock nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente innerhalb der Klammern einzuschließen.
Die Bedingung ist innerhalb der Klammern enthalten, die dem Schlüsselwort `while` und nicht `for` vorangeht.

Die gleichen drei Elemente sind immer noch vorhanden, und sie werden in der gleichen Reihenfolge definiert wie in der for-Schleife.
Dies liegt daran, dass eine Initialisierung definiert werden muss, bevor geprüft werden kann, ob die Bedingung wahr ist oder nicht.
Der Endausdruck wird dann ausgeführt, nachdem der Code in der Schleife ausgeführt wurde (eine Iteration abgeschlossen ist), was nur passiert, wenn die Bedingung noch wahr ist.

Betrachten wir erneut unser Katzenlistenbeispiel, diesmal umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch wie erwartet — sehen Sie selbst, wie es [live auf GitHub läuft](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) (siehe auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while) Schleife ist sehr ähnlich, bietet aber eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den Endausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Also wird dieser Code immer ausgeführt, dann geprüft, ob es erneut ausgeführt werden muss. In `while`- und `for`-Schleifen kommt die Prüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

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
> Auch dies funktioniert wie erwartet — sehen Sie selbst, wie es [live auf GitHub läuft](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) (siehe auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html)).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder je nach Fall dekrementiert wird, sodass die Bedingung schließlich falsch wird.
> Andernfalls wird die Schleife endlos weiterlaufen, und entweder wird der Browser sie anhalten oder er stürzt ab. Dies nennt man eine **endlose Schleife**.

## Implementieren eines Launch-Countdowns

In dieser Übung möchten wir, dass Sie einen einfachen Countdown bis zur Zündung in die Ausgabebox ausgeben, von 10 bis zum Blastoff.

Um die Übung abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie Code hinzu, um von 10 auf 0 zu schleifen. Wir haben Ihnen mit einem Initialisierer geholfen — `let i = 10;`.
3. Erstellen Sie für jede Iteration ein neues Paragraph-Element und fügen Sie es dem Ausgabebereich `<div>` hinzu, den wir mit `const output = document.querySelector('.output');` ausgewählt haben. Wir haben Ihnen drei Codezeilen innerhalb von Kommentaren gegeben, die irgendwo in der Schleife verwendet werden müssen:
   1. `const para = document.createElement('p');` — erstellt ein neues Paragraph-Element.
   2. `output.appendChild(para);` — fügt das Paragraph-Element dem Ausgabebereich `<div>` hinzu.
   3. `para.textContent =` — macht den Text im Paragraph-Element gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen setzen.
4. Schreiben Sie für die verschiedenen Iterationsnummern, die unten aufgeführt sind, Code, um den erforderlichen Text in den Paragraph einzufügen (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):
   1. Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in das Paragraph-Element.
   2. Wenn die Zahl 0 ist, drucken Sie "Blast off!" in das Paragraph-Element.
   3. Bei jeder anderen Zahl drucken Sie nur die Zahl in das Paragraph-Element.
5. Vergessen Sie nicht, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch bei jeder Iteration herunter und nicht hoch, also möchten Sie **kein** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel `(while(i>=0)`), kann es passieren, dass der Browser in einer Endlosschleife feststeckt, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie also vorsichtig damit. Sie können Ihren Code in einem Kommentar beginnen, um dieses Problem zu beheben, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

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

## Das Ausfüllen einer Gästeliste

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, in eine Gästeliste einfügen. Aber es ist nicht ganz so einfach — wir wollen Phil und Lola nicht hereinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für Gäste, die zugelassen werden, und eine für Gäste, die abgelehnt werden.

Um die Übung abzuschließen:

1. Klicken Sie **"Play"** im Codeblock unten, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine Schleife, die durch das `people` Array iterieren wird.
3. Bei jedem Schleifendurchlauf überprüfen Sie mit einer Bedingungsanweisung, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist:
   1. Wenn ja, hängen Sie das Array-Element an das Ende des `refused`-Paragraphelement-`textContent` an, gefolgt von einem Komma und einem Leerzeichen.
   2. Wenn nicht, hängen Sie das Array-Element an das Ende des `admitted`-Paragraphelement-`textContent` an, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits gegeben:

- `refused.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — der Beginn einer Zeile, die etwas an das Ende von `admitted.textContent` hinzufügt.

Zusätzliche Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, werden Ihnen zwei Namenslisten übrig bleiben, die durch Kommas getrennt sind, aber sie werden unsauber sein — es wird ein Komma am Ende jeder Liste stehen. Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt am Ende hinzufügen?
Schauen Sie sich den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Reset_-Button im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unter der Live-Ausgabe anzeigen.

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
<summary>Hier klicken, um die Lösung anzuzeigen</summary>

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

## Welchen Schleifentyp sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten, Fehler zu machen.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen weitgehend austauschbar.
Sie können alle verwendet werden, um dieselben Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihren persönlichen Vorlieben ab — diejenige, die Sie am leichtesten erinnern können oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest anfangs, da es wahrscheinlich am einfachsten ist, sich alles zu merken — den Initialisierer, die Bedingung und den Endausdruck muss alles ordentlich in den Klammern enthalten sein, sodass es einfach ist, zu sehen, wo sie sind, und zu prüfen, ob Sie etwas vergessen haben.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Rahmen dieses Artikels hinausgehen. Wenn Sie mit Ihrem Schleifenlernen weitergehen möchten, lesen Sie unseren fortgeschrittenen [Schleifen und Iterations-Leitfaden](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter den verschiedenen Optionen beim Schleifen von Code in JavaScript offenbart.
Sie sollten nun klar verstehen, warum Schleifen ein gutes Mittel zur Bewältigung von sich wiederholendem Code sind und darauf brennen, sie in Ihren eigenen Beispielen zu verwenden!

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Aussagenreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Conditionals","Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting")}}
