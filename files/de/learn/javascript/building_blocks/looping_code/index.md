---
title: Schleifen in Code
slug: Learn/JavaScript/Building_blocks/Looping_code
l10n:
  sourceCommit: b373190905d2c3f25d269213fe6d55c1cfed0fc7
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

Programmiersprachen sind sehr nützlich, um sich wiederholende Aufgaben schnell zu erledigen, sei es bei mehreren grundlegenden Berechnungen oder in fast jeder anderen Situation, in der Sie viele ähnliche Arbeiten zu erledigen haben. Hier schauen wir uns die Schleifenstrukturen an, die in JavaScript verfügbar sind und solche Bedürfnisse abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >den ersten Schritten in JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man Schleifen in JavaScript nutzt.</td>
    </tr>
  </tbody>
</table>

## Warum sind Schleifen nützlich?

Schleifen zielen darauf ab, dasselbe immer wieder zu tun. Oft ist der Code bei jeder Schleifenrunde leicht unterschiedlich, oder derselbe Code wird ausgeführt, jedoch mit unterschiedlichen Variablen.

### Beispiel für Schleifen in Code

Angenommen, wir wollten 100 zufällige Kreise auf einem {{htmlelement("canvas")}}-Element zeichnen (drücken Sie die Schaltfläche _Aktualisieren_, um das Beispiel immer wieder auszuführen und verschiedene zufällige Sets zu sehen):

```html hidden
<button>Aktualisieren</button> <canvas></canvas>
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

- `random(x)`, wie zuvor im Code definiert, gibt eine ganze Zahl zwischen `0` und `x-1` zurück.

Sie sollten die grundlegende Idee verstehen — wir verwenden eine Schleife, um 100 Iterationen dieses Codes auszuführen, von denen jede einen Kreis an einer zufälligen Position auf der Seite zeichnet.
Die benötigte Code-Menge wäre dieselbe, egal ob wir 100 Kreise, 1000 oder 10.000 zeichnen.
Nur eine Zahl muss geändert werden.

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

Dies würde sehr langweilig und schwierig zu warten.

## Durch eine Sammlung schleifen

Die meisten Male, wenn Sie eine Schleife verwenden, haben Sie eine Sammlung von Elementen und möchten mit jedem Element etwas tun.

Eine Art von Sammlung ist das {{jsxref("Array")}}, das wir im [Arrays](/de/docs/Learn/JavaScript/First_steps/Arrays)-Kapitel dieses Kurses kennengelernt haben.
Es gibt jedoch auch andere Sammlungen in JavaScript, darunter {{jsxref("Set")}} und {{jsxref("Map")}}.

### Die for...of-Schleife

Das grundlegende Werkzeug zum Durchlaufen einer Sammlung ist die {{jsxref("statements/for...of","for...of")}}-Schleife:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}
```

In diesem Beispiel sagt `for (const cat of cats)`:

1. Gegeben die Sammlung `cats`, hol das erste Element in der Sammlung.
2. Weisen Sie es der Variablen `cat` zu und führen Sie dann den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element und wiederholen Sie (2), bis Sie das Ende der Sammlung erreicht haben.

### map() und filter()

JavaScript hat auch spezialisiertere Schleifen für Sammlungen, und wir werden hier zwei davon erwähnen.

Sie können `map()` verwenden, um mit jedem Element einer Sammlung etwas zu tun und eine neue Sammlung zu erstellen, die die geänderten Elemente enthält:

```js
function toUpper(string) {
  return string.toUpperCase();
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]
```

Hier übergeben wir eine Funktion an {{jsxref("Array.prototype.map()","cats.map()")}}, und `map()` ruft die Funktion einmal für jedes Element im Array auf und übergibt dabei das Element. Dann fügt es den Rückgabewert jedes Funktionsaufrufs zu einem neuen Array hinzu und gibt schließlich das neue Array zurück. In diesem Fall wandelt die von uns bereitgestellte Funktion das Element in Großbuchstaben um, sodass das resultierende Array alle unsere Katzen in Großbuchstaben enthält:

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

Das sieht aus wie `map()`, aber die Funktion, die wir übergeben, gibt einen [boolean](/de/docs/Learn/JavaScript/First_steps/Variables#booleans) zurück: falls sie `true` zurückgibt, wird das Element im neuen Array enthalten.
Unsere Funktion testet, ob das Element mit dem Buchstaben „L“ beginnt, sodass das Ergebnis ein Array ist, das nur Katzen enthält, deren Namen mit „L“ beginnen:

```js-nolint
[ "Leopard", "Lion" ]
```

Beachten Sie, dass `map()` und `filter()` häufig mit _Funktionsausdrücken_ verwendet werden, über die wir im [Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions)-Modul lernen werden.
Mit Hilfe von Funktionsausdrücken könnten wir das obige Beispiel viel kompakter schreiben:

```js
const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered);
// [ "Leopard", "Lion" ]
```

## Die Standard-for-Schleife

Im obigen "Kreise zeichnen"-Beispiel haben Sie keine Sammlung von Elementen, durch die Sie schleifen: Sie möchten einfach denselben Code 100 Mal ausführen.
In einem solchen Fall sollten Sie die {{jsxref("statements/for","for")}}-Schleife verwenden.
Diese hat die folgende Syntax:

```js-nolint
for (initializer; condition; final-expression) {
  // code to run
}
```

Hier haben wir:

1. Das Schlüsselwort `for`, gefolgt von einigen Klammern.
2. Innerhalb der Klammern haben wir drei Elemente, die durch Semikolons getrennt sind:

   1. Einen **Initializer** — das ist normalerweise eine auf eine Zahl gesetzte Variable, die hochgezählt wird, um zu zählen, wie oft die Schleife durchlaufen wurde.
      Sie wird auch manchmal als **Zählervariable** bezeichnet.
   2. Eine **Bedingung** — diese legt fest, wann die Schleife aufhören soll zu schleifen.
      Dies ist im Allgemeinen ein Ausdruck mit einem Vergleichsoperator, ein Test, um zu sehen, ob die Ausstiegsbedingung erfüllt ist.
   3. Einen **Abschlussausdruck** — dieser wird jedes Mal ausgewertet (oder ausgeführt), wenn die Schleife einen vollständigen Durchlauf abgeschlossen hat.
      Sie dient normalerweise dazu, die Zählervariable zu inkrementieren (oder in einigen Fällen zu dekrementieren), um sie dem Punkt näher zu bringen, an dem die Bedingung nicht mehr `true` ist.

3. Einige geschweifte Klammern, die einen Codeblock enthalten — dieser Code wird jedes Mal ausgeführt, wenn die Schleife iteriert.

### Quadrate berechnen

Lassen Sie uns ein echtes Beispiel betrachten, damit wir besser visualisieren können, was diese tun.

```html hidden
<button id="calculate">Berechnen</button>
<button id="clear">Löschen</button>
<pre id="results"></pre>
```

```js
const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFertig!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
```

Dies gibt uns die folgende Ausgabe:

{{ EmbedLiveSample('Calculating squares', '100%', 250) }}

Dieser Code berechnet Quadrate für die Zahlen von 1 bis 9 und schreibt das Ergebnis aus. Der Kern des Codes ist die `for`-Schleife, die die Berechnung durchführt.

Lassen Sie uns die Zeile `for (let i = 1; i < 10; i++)` in ihre drei Teile zerlegen:

1. `let i = 1`: die Zählervariable `i` beginnt bei `1`. Beachten Sie, dass wir `let` für den Zähler verwenden müssen, da wir ihn jedes Mal neu zuweisen, wenn wir die Schleife durchlaufen.
2. `i < 10`: Gehe weiter durch die Schleife, solange `i` kleiner als `10` ist.
3. `i++`: Fügen Sie jedes Mal, wenn die Schleife durchlaufen wird, 1 zu `i` hinzu.

Innerhalb der Schleife berechnen wir das Quadrat des aktuellen Wertes von `i`, das ist: `i * i`. Wir erstellen eine Zeichenkette, die die von uns vorgenommene Berechnung und das Ergebnis ausdrückt, und fügen diese Zeichenkette dem Ausgabetext hinzu. Wir fügen auch `\n` hinzu, damit die nächste von uns hinzugefügte Zeichenkette in einer neuen Zeile beginnt. Also:

1. Bei der ersten Ausführung ist `i = 1`, also fügen wir `1 x 1 = 1` hinzu.
2. Während der zweiten Ausführung ist `i = 2`, also fügen wir `2 x 2 = 4` hinzu.
3. Und so weiter…
4. Wenn `i` gleich `10` wird, hören wir auf, die Schleife auszuführen, und gehen direkt zum nächsten Code unterhalb der Schleife über, wobei wir die Nachricht „Fertig!“ in einer neuen Zeile ausgeben.

### Durch Kollektionen mit einer for-Schleife iterieren

Sie können eine `for`-Schleife verwenden, um durch eine Sammlung zu iterieren, anstatt eine `for...of`-Schleife zu verwenden.

Schauen wir uns unser vorheriges Beispiel mit `for...of` noch einmal an:

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
Dann verwenden wir innerhalb der Schleife `i`, um auf jedes Element im Array nacheinander zuzugreifen.

Das funktioniert einwandfrei und in frühen Versionen von JavaScript existierte `for...of` nicht, daher war dies die Standardmethode, um durch ein Array zu iterieren.
Es bietet jedoch mehr Chancen, Fehler in Ihrem Code einzuführen. Zum Beispiel:

- Sie könnten `i` bei `1` beginnen lassen und vergessen, dass der erste Array-Index `0` und nicht `1` ist.
- Sie könnten bei `i <= cats.length` stoppen und vergessen, dass der letzte Array-Index `length - 1` ist.

Aus diesen Gründen ist es normalerweise am besten, `for...of` zu verwenden, wenn Sie können.

Manchmal müssen Sie dennoch eine `for`-Schleife verwenden, um durch ein Array zu iterieren. Zum Beispiel möchten wir im folgenden Code eine Nachricht ausgeben, die unsere Katzen auflistet:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "Meine Katzen heißen ";

for (const cat of cats) {
  myFavoriteCats += `${cat}, `;
}

console.log(myFavoriteCats); // "Meine Katzen heißen Pete, Biggles, Jasmine, "
```

Der endgültige Ausgabesatz ist nicht sehr gut formuliert:

```plain
Meine Katzen heißen Pete, Biggles, Jasmine,
```

Wir würden es bevorzugen, wenn der letzte Katzenname anders behandelt würde, etwa so:

```plain
Meine Katzen heißen Pete, Biggles, und Jasmine.
```

Aber um dies zu erreichen, müssen wir wissen, wann wir bei der letzten Schleifeniteration sind, und dafür können wir eine `for`-Schleife verwenden und den Wert von `i` prüfen:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "Meine Katzen heißen ";

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // Wir sind am Ende des Arrays
    myFavoriteCats += `und ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "Meine Katzen heißen Pete, Biggles, und Jasmine."
```

## Schleifen vorzeitig mit break beenden

Wenn Sie eine Schleife beenden möchten, bevor alle Iterationen abgeschlossen sind, können Sie den [break](/de/docs/Web/JavaScript/Reference/Statements/break)-Befehl verwenden.
Wir haben diesen bereits im vorherigen Artikel kennengelernt, als wir uns [switch-Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements) angeschaut haben — wenn ein Fall in einer switch-Anweisung gefunden wird, der den Eingabeausdruck matched, beendet der `break`-Befehl sofort die switch-Anweisung und fährt mit dem nachfolgenden Code fort.

Bei Schleifen ist es dasselbe — ein `break`-Befehl beendet sofort die Schleife und lässt den Browser zum beliebigen nachfolgenden Code übergehen.

Angenommen, wir wollten ein Array von Kontakten und Telefonnummern durchsuchen und nur die gewünschte Nummer zurückgeben?
Zuerst etwas einfaches HTML — eine Text-{{htmlelement("input")}}-Eingabe, die es uns erlaubt, einen Namen zu suchen, ein {{htmlelement("button")}}-Element, um eine Suche abzusenden, und ein {{htmlelement("p")}}-Element, um die Ergebnisse anzuzeigen:

```html
<label for="search">Suche nach Kontaktname: </label>
<input id="search" type="text" />
<button>Suchen</button>

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
      para.textContent = `${splitContact[0]}'s Nummer ist ${splitContact[1]}.`;
      break;
    }
  }
  if (para.textContent === "") {
    para.textContent = "Kontakt nicht gefunden.";
  }
});
```

{{ EmbedLiveSample('Exiting_loops_with_break', '100%', 100) }}

1. Zuerst erstellen wir einige Variablendefinitionen — wir haben ein Array mit Kontaktinformationen, wobei jedes Element eine Zeichenkette mit einem Namen und einer Telefonnummer ist, getrennt durch einen Doppelpunkt.
2. Als Nächstes hängen wir einen Ereignis-Listener an die Schaltfläche (`btn`), sodass, wenn sie gedrückt wird, ein Code ausgeführt wird, um die Suche durchzuführen und die Ergebnisse zurückzugeben.
3. Wir speichern den eingegebenen Wert in der Texteingabe in einer Variablen namens `searchName`, bevor wir die Texteingabe leeren und erneut fokussieren, bereit für die nächste Suche.
   Beachten Sie, dass wir auch die Methode [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) auf die Zeichenkette ausführen, damit die Suchen nicht zwischen Groß- und Kleinschreibung unterscheiden.
4. Jetzt zum interessanten Teil, der `for...of`-Schleife:

   1. Innerhalb der Schleife teilen wir zuerst den aktuellen Kontakt am Doppelpunkt auf und speichern die resultierenden zwei Werte in einem Array namens `splitContact`.
   2. Wir verwenden dann eine Bedingungsanweisung, um zu prüfen, ob `splitContact[0]` (der Name des Kontakts, erneut in Kleinbuchstaben umgewandelt mit [`toLowerCase()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)) gleich dem eingegebenen `searchName` ist.
      Wenn es so ist, geben wir eine Zeichenkette in den Absatz ein, um die Nummer des Kontakts zu melden, und verwenden `break`, um die Schleife zu beenden.

5. Nach der Schleife prüfen wir, ob wir einen Kontakt gesetzt haben, und wenn nicht, setzen wir den Absatztext auf „Kontakt nicht gefunden.“.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/contact-search.html) sehen (auch [sehen Sie ihn live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Iterationen mit continue überspringen

Die [continue](/de/docs/Web/JavaScript/Reference/Statements/continue)-Anweisung funktioniert ähnlich wie `break`, aber anstatt die Schleife vollständig zu beenden, springt sie zur nächsten Iteration der Schleife.
Schauen wir uns ein anderes Beispiel an, das eine Zahl als Eingabe erfordert und nur die Zahlen zurückgibt, die Quadrate von ganzen Zahlen (Ganzer Zahlen) sind.

Das HTML ist im Grunde dasselbe wie im letzten Beispiel — eine einfache numerische Eingabe und ein Absatz für die Ausgabe.

```html
<label for="number">Zahl eingeben: </label>
<input id="number" type="number" />
<button>Ganze Zahlen-Quadrate generieren</button>

<p>Ausgabe:</p>
```

Das JavaScript ist ebenfalls meist gleich, obwohl sich die Schleife selbst ein wenig unterscheidet:

```js
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  para.textContent = "Ausgabe: ";
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

1. In diesem Fall sollte die Eingabe eine Zahl (`num`) sein. Die `for`-Schleife wird mit einem Zähler gestartet, der bei 1 beginnt (da 0 hier nicht von Interesse ist), einer Abbruchbedingung, die besagt, dass die Schleife aufhören wird, wenn der Zähler größer als die Eingabewert `num` wird, und einem Iterator, der bei jeder Iteration 1 zum Zähler hinzufügt.
2. Innerhalb der Schleife ermitteln wir die Quadratwurzel jeder Zahl mit [Math.sqrt(i)](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) und prüfen dann, ob die Quadratwurzel eine ganze Zahl ist, indem wir testen, ob sie mit sich selbst übereinstimmt, wenn sie auf die nächste ganze Zahl abgerundet wird (dies ist das, was [Math.floor()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) mit der ihr übergebenen Zahl tut).
3. Wenn die Quadratwurzel und die abgerundete Quadratwurzel nicht gleich sind (`!==`), bedeutet das, dass die Quadratwurzel keine ganze Zahl ist, und wir sind nicht daran interessiert. In einem solchen Fall verwenden wir die `continue`-Anweisung, um zur nächsten Schleifeniteration überzugehen, ohne die Zahl irgendwo zu protokollieren.
4. Wenn die Quadratwurzel eine ganze Zahl ist, überspringen wir den gesamten `if`-Block, sodass die `continue`-Anweisung nicht ausgeführt wird; stattdessen fügen wir den aktuellen `i`-Wert plus ein Leerzeichen am Ende des Absatzinhalts hinzu.

> [!NOTE]
> Sie können den [vollständigen Quellcode auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/integer-squares.html) sehen (auch [sehen Sie ihn live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while und do...while

`for` ist nicht die einzige Art von Schleife, die in JavaScript verfügbar ist. Es gibt tatsächlich viele andere, und obwohl Sie jetzt nicht alle verstehen müssen, lohnt es sich, sich die Struktur einiger anderer anzusehen, damit Sie dieselben Funktionen auf eine etwas andere Weise erkennen können.

Zuerst schauen wir uns die [while](/de/docs/Web/JavaScript/Reference/Statements/while)-Schleife an. Die Syntax dieser Schleife sieht folgendermaßen aus:

```js-nolint
initializer
while (condition) {
  // code to run

  final-expression
}
```

Dies funktioniert sehr ähnlich zur `for`-Schleife, außer dass die Initialisierungsvariable vor der Schleife gesetzt wird und der finale Ausdruck innerhalb der Schleife nach dem auszuführenden Code enthalten ist, anstatt dass diese beiden Elemente innerhalb der Klammern enthalten sind.
Die Bedingung ist in den Klammern enthalten, die dem Schlüsselwort `while` vorausgehen, anstatt `for`.

Die gleichen drei Elemente sind weiterhin vorhanden und sie werden weiterhin in derselben Reihenfolge wie in der for-Schleife definiert.
Dies liegt daran, dass Sie einen Initialisierer haben müssen, bevor Sie überprüfen können, ob die Bedingung zutreffend ist.
Der finale Ausdruck wird dann nach der Ausführung des Codes innerhalb der Schleife (eine Iteration) ausgeführt, was nur geschieht, wenn die Bedingung weiterhin wahr ist.

Schauen wir uns unser Katzenlisten-Beispiel noch einmal an, aber umgeschrieben, um eine while-Schleife zu verwenden:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "Meine Katzen heißen ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `und ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "Meine Katzen heißen Pete, Biggles, und Jasmine."
```

> [!NOTE]
> Dies funktioniert weiterhin wie erwartet — sehen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) an (sehen Sie sich auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/while.html) an).

Die [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while)-Schleife ist sehr ähnlich, bietet jedoch eine Variation der while-Struktur:

```js-nolint
initializer
do {
  // code to run

  final-expression
} while (condition)
```

In diesem Fall kommt der Initialisierer erneut zuerst, bevor die Schleife beginnt. Das Schlüsselwort steht direkt vor den geschweiften Klammern, die den auszuführenden Code und den finalen Ausdruck enthalten.

Der Hauptunterschied zwischen einer `do...while`-Schleife und einer `while`-Schleife besteht darin, dass _der Code innerhalb einer `do...while`-Schleife immer mindestens einmal ausgeführt wird_. Das liegt daran, dass die Bedingung nach dem Code innerhalb der Schleife kommt. Wir führen also immer diesen Code aus und prüfen dann, ob wir ihn erneut ausführen müssen. In `while`- und `for`-Schleifen erfolgt die Überprüfung zuerst, sodass der Code möglicherweise nie ausgeführt wird.

Lassen Sie uns unser Katzenlisten-Beispiel noch einmal umschreiben, um eine `do...while`-Schleife zu verwenden:

```js
const cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "Meine Katzen heißen ";

let i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `und ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "Meine Katzen heißen Pete, Biggles, und Jasmine."
```

> [!NOTE]
> Auch dies funktioniert wie erwartet — sehen Sie es sich [live auf GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) an (sehen Sie sich auch den [vollständigen Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/do-while.html) an).

> [!WARNING]
> Bei while und do...while — wie bei allen Schleifen — müssen Sie sicherstellen, dass der Initialisierer inkrementiert oder, je nach Fall, dekrementiert wird, damit die Bedingung schließlich falsch wird.
> Andernfalls läuft die Schleife unaufhörlich weiter, und entweder wird der Browser gezwungen, sie zu stoppen, oder sie wird abstürzen. Dies wird als **Endlosschleife** bezeichnet.

## Aktives Lernen: Countdown starten

In dieser Übung möchten wir, dass Sie einen einfachen Countdown bis zur Ausgabe-Box ausdrucken, von 10 bis zu „Blastoff“.
Konkret möchten wir, dass Sie:

- Von 10 bis 0 schleifen. Wir haben Ihnen einen Initialisierer bereitgestellt — `let i = 10;`.
- Für jede Iteration einen neuen Absatz erstellen und ihn an das Ausgabe-`<div>` anhängen, das wir mit `const output = document.querySelector('.output');` ausgewählt haben.
  In den Kommentaren haben wir Ihnen drei Codezeilen bereitgestellt, die irgendwo in der Schleife verwendet werden müssen:

  - `const para = document.createElement('p');` — erstellt einen neuen Absatz.
  - `output.appendChild(para);` — hängt den Absatz an das Ausgabe-`<div>` an.
  - `para.textContent =` — macht den Text innerhalb des Absatzes gleich dem, was Sie auf der rechten Seite der Gleichung nach dem Gleichheitszeichen einfügen.

- Verschiedene Iterationszahlen erfordern unterschiedliche Texte, die in den Absatz für diese Iteration eingefügt werden (Sie benötigen eine Bedingungsanweisung und mehrere `para.textContent =`-Zeilen):

  - Wenn die Zahl 10 ist, drucken Sie „Countdown 10“ in den Absatz.
  - Wenn die Zahl 0 ist, drucken Sie „Blast off!“ in den Absatz.
  - Für jede andere Zahl drucken Sie einfach die Zahl in den Absatz.

- Denken Sie daran, einen Iterator einzuschließen! In diesem Beispiel zählen wir jedoch nach jeder Iteration abwärts, nicht aufwärts, deshalb möchten Sie **nicht** `i++` — wie iterieren Sie abwärts?

> [!NOTE]
> Wenn Sie beginnen, die Schleife zu schreiben (zum Beispiel (while(i>=0)), könnte der Browser hängen bleiben, weil Sie die Endbedingung noch nicht eingegeben haben. Seien Sie vorsichtig damit. Sie können Ihren Code in einem Kommentar schreiben, um dieses Problem zu umgehen, und den Kommentar entfernen, nachdem Sie fertig sind.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche „Zurücksetzen“ zurücksetzen.
Wenn Sie wirklich nicht weiterkommen, drücken Sie auf „Lösung anzeigen“, um eine Lösung zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>
<div class="output" style="height: 410px;overflow: auto;"></div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tabulatorzeichen ein).
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
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
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
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Launch_countdown', '100%', 900) }}

## Aktives Lernen: Eine Gästeliste ausfüllen

In dieser Übung möchten wir, dass Sie eine Liste von Namen, die in einem Array gespeichert sind, nehmen und sie in eine Gästeliste einfügen. Aber so einfach ist das nicht — wir wollen Phil und Lola nicht reinlassen, weil sie gierig und unhöflich sind und immer das ganze Essen aufessen! Wir haben zwei Listen, eine für zugelassene Gäste und eine für abgewiesene Gäste.

Konkret möchten wir, dass Sie:

- Eine Schleife schreiben, die durch das `people`-Array iteriert.
- Während jeder Schleifeniteration überprüfen wir, ob das aktuelle Array-Element gleich „Phil“ oder „Lola“ ist, indem wir eine Bedingungsanweisung verwenden:

  - Wenn es so ist, fügen Sie das Array-Element an das Ende des `refused` Absatzes `textContent hinzu, gefolgt von einem Komma und einem Leerzeichen.
  - Wenn es nicht so ist, fügen Sie das Array-Element an das Ende des `admitted` Absatzes `textContent hinzu, gefolgt von einem Komma und einem Leerzeichen.

Wir haben Ihnen bereits bereitgestellt:

- `refused.textContent +=` — den Beginn einer Zeile, die etwas an das Ende von `refused.textContent` anhängen wird.
- `admitted.textContent +=` — den Beginn einer Zeile, die etwas an das Ende von `admitted.textContent` anhängen wird.

Extra-Bonusfrage — nachdem Sie die obigen Aufgaben erfolgreich abgeschlossen haben, bleiben Ihnen zwei Namenslisten, getrennt durch Kommas, aber sie werden unordentlich sein — es wird ein Komma am Ende jeder vorhanden sein.
Können Sie herausfinden, wie man Zeilen schreibt, die das letzte Komma in jedem Fall abschneiden und einen Punkt hinzufügen?
Schauen Sie sich den Artikel über [Nützliche Zeichenkettenmethoden (Useful string methods)](/de/docs/Learn/JavaScript/First_steps/Useful_string_methods) an, um Hilfe zu erhalten.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche „Zurücksetzen“ zurücksetzen.
Wenn Sie wirklich nicht weiterkommen, drücken Sie auf „Lösung anzeigen“, um eine Lösung zu sehen.

```html hidden
<h2>Live-Ausgabe</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Zugelassen:</p>
  <p class="refused">Abgewiesen:</p>
</div>

<h2>Editierbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus vom Codebereich zu entfernen (Tab fügt ein Tabulatorzeichen ein).
</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Zugelassen: ';
refused.textContent = 'Abgewiesen: ';

// Schleife beginnt hier

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Zurücksetzen" />
  <input id="solution" type="button" value="Lösung anzeigen" />
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
  solution.value = "Lösung anzeigen";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Lösung anzeigen") {
    textarea.value = solutionEntry;
    solution.value = "Lösung ausblenden";
  } else {
    textarea.value = userEntry;
    solution.value = "Lösung anzeigen";
  }
  updateCode();
});

const jsSolution = `
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Zugelassen: ';
refused.textContent = 'Abgewiesen: ';

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
  if (solution.value === "Lösung anzeigen") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_learning_Filling_in_a_guest_list', '100%', 680) }}

## Welche Schleifenart sollten Sie verwenden?

Wenn Sie durch ein Array oder ein anderes Objekt, das es unterstützt, iterieren und keinen Zugriff auf die Indexposition jedes Elements benötigen, dann ist `for...of` die beste Wahl. Es ist leichter zu lesen und es gibt weniger Fehlerquellen.

Für andere Verwendungen sind `for`, `while` und `do...while`-Schleifen weitgehend austauschbar.
Alle können zur Lösung derselben Probleme verwendet werden, und welche Sie verwenden, hängt weitgehend von Ihrer persönlichen Vorliebe ab — welche Sie am einfachsten zu merken oder am intuitivsten finden.
Wir würden zu Beginn `for` empfehlen, da es wahrscheinlich am einfachsten ist, sich alles zu merken — der Initialisierer, die Bedingung und der finale Ausdruck müssen alle ordentlich in den Klammern stehen, sodass es einfach ist, zu sehen, wo sie sind, und zu überprüfen, dass Sie sie nicht vermissen.

Schauen wir sie uns alle noch einmal an.

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
> Es gibt auch andere Schleifentypen/-funktionen, die in fortgeschrittenen/spezialisierten Situationen nützlich sind und den Rahmen dieses Artikels sprengen. Wenn Sie weiter mit Ihrem Schleifenlernen fortfahren möchten, lesen Sie unseren fortgeschrittenen [Schleifen- und Iterationsleitfaden](/de/docs/Web/JavaScript/Guide/Loops_and_iteration).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um sicherzustellen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Wissen: Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Loops).

## Schlussfolgerung

Dieser Artikel hat Ihnen die grundlegenden Konzepte hinter Schleifen im Code und die verschiedenen Optionen in JavaScript vorgestellt.
Sie sollten jetzt klar verstehen, warum Schleifen eine gute Möglichkeit sind, mit wiederholtem Code umzugehen, und bereit sein, sie in Ihren eigenen Beispielen zu verwenden!

Wenn es etwas gibt, das Sie nicht verstanden haben, können Sie gerne den Artikel noch einmal lesen oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu bitten.

## Siehe auch

- [Schleifen und Iteration im Detail](/de/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [for...of Referenz](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [for-Anweisung Referenz](/de/docs/Web/JavaScript/Reference/Statements/for)
- [while](/de/docs/Web/JavaScript/Reference/Statements/while) und [do...while](/de/docs/Web/JavaScript/Reference/Statements/do...while) Referenzen
- [break](/de/docs/Web/JavaScript/Reference/Statements/break) und [continue](/de/docs/Web/JavaScript/Reference/Statements/continue) Referenzen

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
