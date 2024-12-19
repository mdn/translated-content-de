---
title: Code-Schleifen
slug: Learn_web_development/Core/Scripting/Loops
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}

Programmiersprachen sind sehr nützlich, um wiederholende Aufgaben schnell zu erledigen, von mehreren einfachen Berechnungen bis zu nahezu jeder anderen Situation, in der Sie viele ähnliche Arbeiten erledigen müssen. Hier werden wir die Schleifenstrukturen betrachten, die in JavaScript verfügbar sind und solche Bedürfnisse abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Verständnis des Zwecks von Schleifen — einer Code-Struktur, die es Ihnen ermöglicht, etwas sehr Ähnliches viele Male zu tun, ohne denselben Code für jede Iteration zu wiederholen.</li>
          <li>Allgemeine Schleifentypen wie <code>for</code> und <code>while</code>.</li>
          <li>Schleifen durch Sammlungen mit Konstrukten wie <code>for...of</code> und <code>map()</code>.</li>
          <li>Das Durchbrechen von Schleifen und das Fortsetzen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen sind darauf ausgerichtet, dasselbe immer wieder zu tun. Oft wird der Code jedes Mal etwas anders sein, wenn die Schleife durchlaufen wird, oder der gleiche Code wird ausgeführt, aber mit unterschiedlichen Variablen.

### Beispiel für eine Schleife

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die _Aktualisieren_-Taste, um das Beispiel immer und immer wieder auszuführen und unterschiedliche zufällige Sätze zu sehen):

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

Sie müssen nicht sofort den gesamten Code verstehen, aber schauen wir uns den Teil des Codes an, der tatsächlich die 100 Kreise zeichnet:

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

Sie sollten die Grundidee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet. `random(x)`, das früher im Code definiert wurde, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.
Die Menge an benötigtem Code wäre dieselbe, ob wir 100 Kreise, 1000 oder 10.000 zeichnen würden.
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

Dies würde sehr langweilig und schwer zu warten sein.

## Durch eine Sammlung iterieren

Die meiste Zeit, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten etwas mit jedem Element tun.

Ein Typ von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Aber in JavaScript gibt es auch andere Sammlungen, darunter {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug zum Iterieren durch eine Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Bei der Sammlung `cats` holen Sie sich das erste Element der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie sich das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript verfügt auch über speziellere Schleifen für Sammlungen, und wir werden hier auf zwei davon eingehen.

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

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf, wobei das Element übergeben wird. Es fügt dann den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall konvertiert die bereitgestellte Funktion das Element in Großbuchstaben, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

```js-nolint
[ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Sie können {{jsxref("Array.prototype.filter()","filter()")}} verwenden, um jedes Element in einer Sammlung zu testen, und eine neue Sammlung zu erstellen, die nur passende Elemente enthält:

```js
function lCat(cat) {
  return cat.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]
```

Dies sieht sehr ähnlich aus wie `map()`, außer dass die übergebene Funktion einen [boolean](/de/docs/Learn_web_development/Core/Scripting/Variables#booleans) zurückgibt: wenn sie `true` zurückgibt, wird das Element im neuen Array enthalten. Unsere Funktion testet, ob das Element mit dem Buchstaben "L" beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit "L" beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, über die Sie in unserer [Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions)-Lektion etwas lernen werden.
Mit Funktionsausdrücken könnten wir das obige Beispiel viel kompakter umschreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard `for`-Schleife

Im obigen "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie iterieren müssen: Sie möchten wirklich nur denselben Code 100 Mal ausführen.
In einem solchen Fall können Sie die {{jsxref("statements/for","for")}}-Schleife verwenden.
Diese hat folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, die durch Semikolons getrennt sind:

   1. Eine **Initialisierung** — dies ist normalerweise eine Variable, die auf eine Zahl gesetzt ist und inkrementiert wird, um die Anzahl der durchgeführten Schleifendurchläufe zu zählen.
      Sie wird auch manchmal als **Schleifenzähler** bezeichnet.
   2. Eine **Bedingung** — diese definiert, wann die Schleife anhalten soll.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Abbruchbedingung erfüllt ist.
   3. Ein **Schlussausdruck** — dieser wird jedes Mal ausgewertet (oder ausgeführt), wenn die Schleife einen vollständigen Durchlauf abgeschlossen hat.
      Er dient in der Regel dazu, die Schleifenzählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie näher an den Punkt zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Block von Code enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife eine Iteration durchläuft.

### Quadrate berechnen

Lassen Sie uns ein praktisches Beispiel ansehen, damit wir klarer sehen können, was diese Schleife bewirkt.

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

Dies ergibt folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: die Schleifenzählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: machen Sie mit der Schleife weiter, solange `i` kleiner als `10` ist.
3. `i++`: fügen Sie jedes Mal, wenn die Schleife durchläuft, eins zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das heißt: `i * i`. Wir erstellen einen String, der die Berechnung ausdrückt, die wir gemacht haben, sowie das Ergebnis, und fügen diesen String dem Ausgabetext hinzu. Zudem fügen wir `\n` hinzu, sodass der nächste String, den wir hinzufügen, in einer neuen Zeile beginnt. Also:

1. Beim ersten Durchlauf ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Beim zweiten Durchlauf ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, beenden wir die Schleife und fahren direkt mit dem nächsten Code unterhalb der Schleife fort, wobei wir die Nachricht `Finished!` in einer neuen Zeile ausgeben.

### Durch Sammlungen mit einer `for`-Schleife iterieren

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstelle einer `for...of`-Schleife.

Lassen Sie uns noch einmal unser `for...of`-Beispiel von oben ansehen:

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

In dieser Schleife starten wir `i` bei `0` und hören auf, wenn `i` die Länge des Arrays erreicht.
Dann verwenden wir innerhalb der Schleife `i`, um jedes Element des Arrays der Reihe nach zuzugreifen.

Dies funktioniert einwandfrei, und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode zum Iterieren durch ein Array.
Es bietet jedoch mehr Möglichkeiten, Fehler in Ihren Code einzuführen. Beispielsweise:

- Sie könnten `i` bei `1` beginnen lassen, und dabei vergessen, dass der erste Array-Index null, nicht 1 ist.
- Sie könnten bei `i <= cats.length` stoppen und dabei vergessen, dass der letzte Array-Index bei `length - 1` liegt.

Aus solchen Gründen ist es normalerweise am besten, `for...of` zu verwenden, wenn dies möglich ist.

Manchmal müssen Sie dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren.
Im folgenden Codebeispiel möchten wir beispielsweise eine Nachricht protokollieren, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, Jasmine, "
```

Der letzte Ausgabesatz ist nicht sehr gut formuliert:

```plain
My cats are called Pete, Biggles, Jasmine,
```

Wir hätten es lieber so, dass das letzte Element anders behandelt wird, so:

```plain
My cats are called Pete, Biggles, and Jasmine.
```

Aber um dies zu tun, müssen wir wissen, wann wir uns in der letzten Schleifeniteration befinden, und dazu können wir eine `for`-Schleife verwenden und den Wert von `i` prüfen:

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

Wenn Sie eine Schleife vorzeitig beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie die [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Anweisung verwenden.
Darauf sind wir bereits im vorherigen Artikel eingegangen, als wir uns [switch-Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals#switch_statements) angesehen haben — wenn ein Fall in einer switch-Anweisung erfüllt wird, der mit dem Eingabewert übereinstimmt, beendet die `break`-Anweisung sofort die switch-Anweisung und fährt mit dem Code fort, der danach kommt.

Es ist dasselbe bei Schleifen — eine `break`-Anweisung beendet sofort die Schleife und lässt den Browser mit dem Code fortfahren, der darauf folgt.

Angenommen, wir möchten ein Array von Kontakten und Telefonnummern durchsuchen und nur die Nummer zurückgeben, die wir finden wollen?
Zuerst ein einfaches HTML — ein Text-{{htmlelement("input")}}, das es uns erlaubt, einen Namen zur Suche einzugeben, ein {{htmlelement("button")}}-Element, um die Suche abzusenden, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

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

1. Zuerst haben wir einige Variablen-Definitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element ein String ist, der einen Namen und eine Telefonnummer enthält, getrennt durch einen Doppelpunkt.
2. Als Nächstes hängen wir einen Event-Listener an den Button (`btn`), sodass beim Drücken des Buttons ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den Wert, der in das Texteingabe-Feld eingegeben wurde, in einer Variablen namens `searchName`, bevor wir dann das Texteingabe-Feld leeren und es wieder fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf den String anwenden, sodass die Suche nicht zwischen Groß- und Kleinschreibung unterscheidet.
4. Nun zum interessanten Teil, die `for...of`-Schleife:

   1. Innerhalb der Schleife teilen wir den aktuellen Kontakt am Doppelpunkt-Zeichen und speichern die resultierenden beiden Werte in einem Array namens `splitContact`.
   2. Dann verwenden wir eine Bedingungsanweisung, um zu testen, ob `splitContact[0]` (der Name des Kontakts, erneut mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) in Kleinbuchstaben umgewandelt) gleich dem eingegebenen `searchName` ist.
      Wenn dies der Fall ist, geben wir einen String in den Absatz ein, um anzugeben, welche Nummer der Kontakt hat, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob ein Kontakt gefunden wurde, und falls nicht, setzen wir den Absatztext auf "Contact not found.".

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) (siehe es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu beenden, wird zur nächsten Iteration übergegangen.
Schauen wir uns ein weiteres Beispiel an, das eine Zahl als Eingabe verwendet und nur die Zahlen zurückgibt, die Quadrate von Ganzzahlen (ganze Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Enter number: </label>
<input id="number" type="number" />
<button>Generate integer squares</button>

<p>Output:</p>
```

Das JavaScript ist ebenfalls größtenteils dasselbe, obwohl die Schleife selbst etwas anders ist:

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

1. In diesem Fall sollte die Eingabe eine Zahl sein (`num`). Die `for`-Schleife hat einen Zähler, der bei 1 beginnt (da wir in diesem Fall an 0 nicht interessiert sind), eine Abbruchbedingung, die besagt, dass die Schleife aufhört, wenn der Zähler größer als die Eingabe `num` wird, und einen Iterator, der nach jeder Durchlaufung eins zum Zähler hinzufügt.
2. Innerhalb der Schleife berechnen wir die Quadratwurzel jeder Zahl mit [`Math.sqrt(i)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt), dann überprüfen wir, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie gleich ist zu ihrem Wert, wenn sie auf die nächste ganze Zahl abgerundet wird (das ist es, was [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der übergebenen Zahl macht).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet dies, dass die Quadratwurzel keine ganze Zahl ist, sodass wir nicht interessiert sind. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration überzugehen, ohne die Zahl irgendwo zu speichern.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den `if`-Block vollständig, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen verketten wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) (siehe es auch [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht der einzige allgemeine Schleifentyp, der in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie diese jetzt nicht alle verstehen müssen, ist es wert, sich die Struktur einiger anderer anzusehen, damit Sie dieselben Funktionen in einer etwas anderen Weise erkennen können.

Schauen Sie sich zuerst die [`while`](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert sehr ähnlich wie die `for`-Schleife, außer, dass die Initialisierung vor der Schleife erfolgt und der Schlussausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt diese beiden Elemente in den Klammern zu enthalten. Die Bedingung wird in den Klammern angegeben, denen das Schlüsselwort `while` vorausgeht, anstelle von `for`.

Die gleichen drei Elemente sind immer noch vorhanden, und sie sind in der gleichen Reihenfolge definiert wie in der for-Schleife. Dies liegt daran, dass eine Initialisierung definiert sein muss, bevor überprüft werden kann, ob die Bedingung wahr ist oder nicht. Der Abschlussausdruck wird nach dem in der Schleife ausgeführten Code ausgeführt (eine Iteration wurde abgeschlossen), was nur dann geschieht, wenn die Bedingung noch wahr ist.

Schauen wir uns unser Katzenlisten-Beispiel nochmals an, aber umgeschrieben, um eine while-Schleife zu verwenden:

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
> Dies funktioniert immer noch genauso wie erwartet — sehen Sie es sich [auf GitHub live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (ebenfalls sehen Sie [den vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html)).

Die [`do...while`](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur an:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt die Initialisierung wieder zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code enthalten, sowie den Abschlussausdruck.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code in der Schleife kommt. Wir führen diesen Code also immer aus und überprüfen dann, ob wir ihn erneut ausführen müssen. In `while`- und `for`-Schleifen kommt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Katzenlisten-Beispiel erneut umschreiben, um eine `do...while`-Schleife zu verwenden:

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
> Auch diesmal funktioniert es wie erwartet — sehen Sie es sich [auf GitHub live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (ebenfalls [den vollständigen Quellcode](https://github.com/mdn/learning-area/javascript/building-blocks/loops/do-while.html) ansehen).

> [!WARNING]
> Bei jeder Art von Schleife müssen Sie sicherstellen, dass die Initialisierung inkrementiert oder je nach Fall dekrementiert wird, sodass die Bedingung schließlich falsch wird.
> Andernfalls läuft die Schleife endlos weiter, und entweder wird der Browser gezwungen, sie zu stoppen, oder sie stürzt ab. Dies wird als **endlose Schleife** bezeichnet.

## Aktives Lernen: Start-Countdown

In dieser Übung möchten wir, dass Sie einen einfachen Start-Countdown im Ausgabefeld ausdrucken, von 10 bis hin zu "Blastoff".
Konkret möchten wir, dass Sie:

- Von 10 bis 0 iterieren. Wir haben Ihnen eine Initialisierung bereitgestellt — `let i = 10;`.
- Für jede Iteration einen neuen Absatz erstellen und ihn an das Ausgabe-`<div>` anhängen, das wir mit `const output = document.querySelector('.output');` ausgewählt haben.
  In Kommentaren haben wir Ihnen drei Codezeilen bereitgestellt, die irgendwo in der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — hängt den Absatz an das Ausgabe-`<div>` an.
  - `para.textContent =` — macht den Text innerhalb des Absatzes gleich dem, was Sie auf der rechten Seite nach dem Gleichheitszeichen setzen.

- Verschiedene Iterationsnummern erfordern unterschiedliche Texte, die in den Absatz für diese Iteration geschrieben werden (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie "Countdown 10" in den Absatz.
  - Wenn die Zahl 0 ist, drucken Sie "Blast off!" in den Absatz.
  - Für jede andere Zahl drucken Sie einfach die Zahl in den Absatz.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration herunter, nicht hinauf, daher möchten Sie **nicht** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel (while(i>=0)), könnte der Browser hängen bleiben, weil Sie die Abbruchbedingung noch nicht eingegeben haben. Seien Sie also vorsichtig damit. Sie können Ihren Code als Kommentar beginnen zu schreiben, um dieses Problem zu lösen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen.
Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Gästeliste ausfüllen

In dieser Übung möchten wir, dass Sie eine Liste mit Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste eintragen. Aber es ist nicht ganz so einfach — wir möchten Phil und Lola nicht hereinlassen, weil sie habgierig und unhöflich sind und immer das ganze Essen essen! Wir haben zwei Listen, eine für die zuzulassenden Gäste und eine für die abgelehnten Gäste.

Konkret möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Während jeder Schleifeniteration prüfen Sie mit einer Bedingungsanweisung, ob das aktuelle Array-Element gleich "Phil" oder "Lola" ist:

  - Wenn ja, hängen Sie das Array-Element an das Ende des `refused`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn nein, hängen Sie das Array-Element an das Ende des `admitted`-Absatzes `textContent` an, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — den Beginn einer Zeile, die etwas am Ende von `refused.textContent` anhängt.
- `admitted.textContent +=` — den Beginn einer Zeile, die etwas am Ende von `admitted.textContent` anhängt.

Zusätzliche Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, haben Sie zwei Listen von Namen, die durch Kommas getrennt sind, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder Liste geben.
Können Sie herausfinden, wie Sie Zeilen schreiben, die das letzte Komma in jedem Fall abschneiden und einen Punkt an das Ende setzen?
Schauen Sie sich den Artikel [Nützliche String-Methoden](/de/docs/Learn_web_development/Core/Scripting/Useful_string_methods) für Hilfe an.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen.
Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Welche Schleife soll man verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt iterieren, das dies unterstützt, und keinen Zugriff auf die Indexposition jedes Elements benötigen, ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Möglichkeiten, Fehler zu machen.

Für andere Verwendungen sind `for`, `while` und `do...while` Schleifen im wesentlichen austauschbar.
Sie können alle verwendet werden, um die gleichen Probleme zu lösen, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten zu merken finden oder am intuitivsten finden.
Wir würden `for` empfehlen, zumindest zunächst, da es wahrscheinlich am einfachsten ist, sich an alles zu erinnern — die Initialisierung, die Bedingung und der Schlussausdruck müssen sauber in die Klammern passen, daher ist es einfach zu sehen, wo sie sind und zu überprüfen, dass Sie sie nicht vermissen.

Sehen wir uns alle noch einmal an.

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
> Es gibt auch andere Schleifentypen/Funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und über den Umfang dieses Artikels hinausgehen. Wenn Sie Ihr Schleifen-Wissen vertiefen möchten, lesen Sie unseren fortgeschrittenen [Loops and iteration guide](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — sehen Sie [Test your skills: Loops](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Loops).

## Zusammenfassung

Dieser Artikel hat Ihnen die grundlegenden Konzepte und verschiedenen Optionen offenbart, die beim Schleifen von Code in JavaScript verfügbar sind.
Sie sollten jetzt verstehen, warum Schleifen ein gutes Mittel für den Umgang mit wiederholendem Code sind und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Als Nächstes werden wir uns mit Funktionen beschäftigen.

## Siehe auch

- [Schleifen und Iterationen im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for Anweisungsreferenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Conditionals","Learn_web_development/Core/Scripting/Functions", "Learn_web_development/Core/Scripting")}}
