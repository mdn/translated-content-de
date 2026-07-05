---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: dada3843ececc4e57d797e09bb4ebb25b8112d8f
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen verwenden können, um Zahlen erfolgreich zu manipulieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Zahlenoperationen in JavaScript, wie Addition, Subtraktion, Multiplikation und Division.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können Berechnungen fehlerhaft machen.</li>
          <li>Umwandlung von Strings zu Zahlen mit <code>Number()</code>.</li>
          <li>Operatorpräzedenz.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Nun ja, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule Multiplikationstabellen und lange Division lernen mussten, und einige von uns bewegen sich irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Teil des Lebens ist, ohne den wir nicht sehr weit kommen. Dies gilt insbesondere, wenn wir lernen, JavaScript (oder eine andere Programmiersprache) zu programmieren — so vieles von dem, was wir tun, basiert auf der Verarbeitung numerischer Daten, der Berechnung neuer Werte und so weiter, dass Sie nicht überrascht sein werden zu erfahren, dass JavaScript eine umfassende Menge an Mathematik-Funktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist sogar das bescheidene Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** sind Zahlen ohne Nachkommastellen. Sie können entweder positiv oder negativ sein, z. B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (das bedeutet, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen vielleicht begegnet, als Sie [Farben in CSS setzen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values).

**Bevor Sie befürchten, dass Ihr Gehirn schmilzt, halten Sie genau dort an!** Zu Beginn werden wir uns in diesem Kurs nur auf Dezimalzahlen beschränken; Sie werden selten bis nie über andere Typen nachdenken müssen.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp hat, um grundlegende Zahlen darzustellen — sowohl ganze Zahlen als auch Dezimalzahlen. Sie ahnen es, {{jsxref("Number")}}. Das bedeutet, dass egal welcher Zahlentyp in JavaScript vorliegt, Sie sie auf die gleiche Weise behandeln.

> [!NOTE]
> JavaScript hat einen zweiten Zahltyp, {{Glossary("BigInt", "BigInt")}}, verwendet für sehr, sehr große Ganzzahlen. Aber in diesem Kurs kümmern wir uns nur um `Number`-Werte.

### Es sind alles Zahlen für mich

Lassen Sie uns schnell mit ein paar Zahlen spielen, um uns vertraut mit der grundlegenden Syntax zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Lassen Sie uns zunächst ein paar Variablen deklarieren und mit einer ganzen Zahl und einem Float initialisieren, und dann die Variablennamen eingeben, um zu prüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie fortfahren.
3. Lassen Sie uns nun überprüfen, ob unsere ursprünglichen Variablen denselben Datentyp haben. In JavaScript gibt es einen Operator namens {{jsxref("Operators/typeof", "typeof")}}, der dies tut. Geben Sie die beiden Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückbekommen — das macht es uns viel einfacher als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie unterschiedlich behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, von dem alle Standardzahlen, die Sie in Ihrem JavaScript verwenden, eine Instanz sind, bietet mehrere Methoden zur Manipulation von Zahlen. Wir decken diese hier nicht im Detail ab, weil wir uns zunächst auf das Wesentliche beschränken wollten; allerdings ist es, nachdem Sie dieses Modul ein oder zwei Mal durchgelesen haben, sinnvoll, zu den Objekt-Referenzseiten zu gehen, um zu sehen, was verfügbar ist.

Zum Beispiel können Sie mit der [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode Ihre Zahl auf eine feste Anzahl von Dezimalstellen runden. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Umwandlung in Zahlendatentypen

Manchmal haben Sie möglicherweise eine Zahl, die als String-Typ gespeichert ist, was in Berechnungen schwer zu verwenden ist. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Eingabefeld eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt einen Weg, dieses Problem zu lösen — indem der Stringwert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben wird, um eine Zahlenversion desselben Werts zurückzugeben.

Versuchen Sie zum Beispiel, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

```js
typeof myNumber;
```

Um die Berechnung zu korrigieren, können Sie dies tun:

```js
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

Das Ergebnis ist dann 77, wie ursprünglich erwartet.

## Arithmetische Operatoren

Arithmetische Operatoren werden verwendet, um mathematische Berechnungen in JavaScript durchzuführen:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Bezeichnung</th>
      <th scope="col">Zweck</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+</code></td>
      <td>Addition</td>
      <td>Addiert zwei Zahlen.</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>Subtraktion</td>
      <td>Subtrahiert die rechte Zahl von der linken.</td>
      <td><code>20 - 15</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Multiplikation</td>
      <td>Multipliziert zwei Zahlen miteinander.</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>Division</td>
      <td>Teilt die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in
          mehrere ganzzahlige Anteile gleich der rechten Zahl geteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (ergibt 2, da drei zweimal in 8 passt und 2 übrig
          bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die
        <code>Exponent</code>-Potenz, das heißt, die
        <code>Basis</code>-Zahl multipliziert mit sich selbst,
        <code>Exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (ergibt <code>25</code>, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sie werden möglicherweise gelegentlich sehen, dass Zahlen, die in arithmetischen Operationen verwendet werden, als {{Glossary("Operand", "Operanden")}} bezeichnet werden.

> [!NOTE]
> Manchmal sehen Sie, dass Exponenten mit der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die sehr ähnlich funktioniert. Zum Beispiel ist in `Math.pow(7, 3)` `7` die Basis und `3` der Exponent, also ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wahrscheinlich müssen wir Ihnen keine Grundlagen der Mathematik beibringen, aber wir möchten Ihre Verständnisfähigkeit hinsichtlich der Repräsentation in JavaScript testen. Versuchen Sie, die folgenden Beispiele in Ihrer [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Zuerst versuchen Sie, einige einfache Beispiele Ihrer eigenen einzugeben, zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Rechenoperationen zu verwenden — die Variablen werden sich genauso verhalten wie die Zahlenwerte für die Berechnung. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zuletzt für diesen Abschnitt versuchen Sie, einige kompliziertere Ausdrücke einzugeben, wie:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieses letzten Satzes von Berechnungen geben Ihnen möglicherweise nicht das erwartete Ergebnis; der folgende Abschnitt behandelt, warum.

### Operatorpräzedenz

Lassen Sie uns das letzte Beispiel von oben betrachten, in der Annahme, dass `num2` den Wert 50 und `num1` den Wert 10 enthält (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies lesen als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1.25"_, dann _"50 plus 1.25 plus 2 ergibt 53.25"_.

Dies liegt an der **Operatorpräzedenz** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet) berechnet wird. Die Operatorpräzedenz in JavaScript ist dieselbe wie in der Grundmathematik — in diesem Fall wird zuerst multipliziert und dividiert, dann addiert und subtrahiert, wobei die Berechnung von links nach rechts ausgewertet wird.

Wenn Sie die Operatorpräzedenz überschreiben möchten, können Sie Klammern um die Teile setzen, die zuerst bearbeitet werden sollen. Um ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie, die vorherige Zeile in die Konsole einzugeben, um sie zu testen.

Wenn ein Ausdruck den Exponentoperator (`**`) enthält, wird er nach Ausdrücken in Klammern, aber vor den anderen [arithmetischen Operatoren](#arithmetische_operatoren) ausgewertet. Zum Beispiel:

```js
2 + 3 ** 2;
```

Beim Eingeben in die Konsole macht der Browser _"3 hoch 2 ergibt 9"_, dann _"2 plus 9 ergibt 11"_.

Versuchen Sie, die folgenden Ausdrücke in die Konsole einzugeben, um zu demonstrieren, wie Ausdrücke in Klammern vor der Exponentiation ausgewertet werden:

```js
4 + 2 ** 3;
(4 + 2) ** 3;
```

Im ersten Fall tut der Browser _"2 hoch 3 ergibt 8"_, dann _"8 plus 4"_. Im zweiten Fall tut er _"4 plus 2 ergibt 6"_, dann _"6 hoch 3"_.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie den Wert einer numerischen Variablen wiederholt um eins erhöhen oder verringern. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren erfolgen. Wir haben `++` in unserem "Rate die Zahl"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir eins zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Vermutungen der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Beachten Sie zunächst, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, anstatt den Wert selbst zu bearbeiten. Das Folgende gibt einen Fehler zurück:

```js example-bad
3++;
```

So können Sie ein bestehendes Variable nur inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Merkwürdigkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt, _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--`: versuchen Sie folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es anders herum zu machen — die Variable zu inkrementieren/dekrementieren, _dann_ den Wert zurückzugeben — indem Sie den Operator statt am Ende der Variable an den Anfang setzen. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den einfachsten, `=`, schon viele Male verwendet — er weist der Variablen auf der linken Seite den auf der rechten angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu halten. Die gängigsten sind unten aufgeführt:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Bezeichnung</th>
      <th scope="col">Zweck</th>
      <th scope="col">Beispiel</th>
      <th scope="col">Abkürzung für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+=</code></td>
      <td>Additionszuweisung</td>
      <td>
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken
        Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert auf der rechten Seite vom Variablenwert auf der
        linken Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert auf der linken Seite mit dem Wert auf
        der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert auf der linken Seite durch den Wert auf der
        rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihrer Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. In jedem Fall sehen Sie, ob Sie das Ergebnis erraten können, bevor Sie die zweite Zeile eintippen.

Beachten Sie, dass Sie auf der rechten Seite jedes Ausdrucks problemlos andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Eine Canvas-Box dimensionieren

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich Sorgen zu machen, wie dies funktioniert — konzentrieren Sie sich vorerst nur auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide zunächst einen Wert von 50 haben.

```html hidden live-sample___canvas-exercise
<canvas id="canvas" width="400" height="200"></canvas>
<p></p>
```

```js live-sample___canvas-exercise
const canvas = document.getElementById("canvas");
const para = document.querySelector("p");
const ctx = canvas.getContext("2d");

// Edit the following two lines ONLY
let x = 50;
let y = 50;

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "green";
ctx.fillRect(10, 10, x, y);
para.textContent = `The rectangle is ${x}px wide and ${y}px high.`;
```

{{EmbedLiveSample("canvas-exercise", '100%', 300)}}

Öffnen Sie das obige Beispiel im MDN Playground, indem Sie auf die Schaltfläche **"Play"** klicken, und folgen Sie dann der Liste der Anweisungen unten, um die Box auf bestimmte Größen zu vergrößern/verkleinern, indem Sie bestimmte Operatoren und/oder Werte in jedem Fall verwenden:

- Ändern Sie die Zeile, die `x` berechnet, so dass die Box immer noch `50px` breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box `75px` hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box `100px` breit ist, aber die 100 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box `200px` hoch ist, aber die 200 mit den Zahlen 2 und `x` und dem Multiplikationsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code durcheinander bringen. Sie können jederzeit die Zurücksetzen-Schaltfläche drücken und erneut beginnen.

## Vergleichsoperatoren

Manchmal möchten wir wahr/falsch-Tests durchführen und dann je nach Ergebnis entsprechend handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                            | Beispiel      |
| -------- | -------------------- | ---------------------------------------------------------------- | ------------- |
| `===`    | Strenge Gleichheit   | Testet, ob die linken und rechten Werte identisch sind           | `5 === 2 + 4` |
| `!==`    | Strenge Ungleichheit | Testet, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Testet, ob der linke Wert kleiner ist als der rechte.            | `10 < 6`      |
| `>`      | Größer als           | Testet, ob der linke Wert größer ist als der rechte.             | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.   | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Testet, ob der linke Wert größer oder gleich dem rechten ist.    | `5 >= 4`      |

> [!NOTE]
> Sie werden möglicherweise sehen, dass einige Personen `==` und `!=` in ihren Gleichheits- und Ungleichheitstests verwenden. Diese sind in JavaScript gültige Operatoren, unterscheiden sich jedoch von `===`/`!==`. Die erstgenannten Versionen prüfen, ob die Werte gleich sind, aber nicht ihre Datentypen. Die letzteren, strikten Versionen prüfen sowohl die Gleichheit der Werte als auch ihrer Datentypen. Die strikten Versionen führen tendenziell zu weniger Fehlern, daher empfehlen wir, diese zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie feststellen, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, in unserem Code Entscheidungen zu treffen, und sie jedes Mal verwendet werden, wenn wir eine Wahl treffen müssen. Zum Beispiel können Booleans verwendet werden, um:

- Den richtigen Text auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion eingeschaltet oder ausgeschaltet ist.
- Eine Spiel-Über-Botschaft anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesbotschaft, wenn das Spiel gewonnen wurde.
- Die richtige saisonale Begrüßung anzuzeigen, abhängig davon, welche Feiertagsanlass ist.
- Eine Karte ein- oder auszuzoomen, abhängig davon, welcher Zoomlevel ausgewählt ist.

Wir werden uns ansehen, wie man solch eine Logik programmiert, wenn wir uns bedingte Anweisungen in einem zukünftigen Artikel ansehen. Für den Moment lassen Sie uns ein kurzes Beispiel anschauen:

```html live-sample___conditional
<button>Start machine</button>
<p>The machine is stopped.</p>
```

```js live-sample___conditional
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
```

{{EmbedLiveSample("conditional", '100%', 100)}}

Sie können den Gleichheitsoperator sehen, der innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält — aber dies folgt immer noch demselben Prinzip. Wenn der Textinhalt der Schaltfläche "Start machine" ist, wenn sie gedrückt wird, ändern wir ihr Label auf "Stop machine" und aktualisieren das Label entsprechend. Wenn der Textinhalt der Schaltfläche "Stop machine" ist, wenn sie gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Es wird zwischen zwei Zuständen umgeschaltet — Licht ein und Licht aus, gehen und laufen, etc.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie vorerst über Zahlen in JavaScript wissen müssen. Sie werden Zahlen die ganze Zeit während Ihres JavaScript-Lernens sehen, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie eine dieser Personen sind, die Mathematik nicht genießen, können Sie Trost darin finden, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel geben wir Ihnen einige Tests, um zu überprüfen, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Numbers and strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Expressions and operators](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting")}}
