---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen verwenden können, um erfolgreich Zahlen zu manipulieren, damit sie unseren Wünschen entsprechen.

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
          <li>Grundlegende Zahlenoperationen in JavaScript — Addieren, Subtrahieren, Multiplizieren und Dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Zeichenketten definiert sind, und können Berechnungen verfälschen.</li>
          <li>Konvertieren von Zeichenketten in Zahlen mit <code>Number()</code>.</li>
          <li>Operator-Priorität.</li>
          <li>Hochzählen und Herunterzählen.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht doch nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule Multiplikationstabellen und lange Division lernen mussten, und einige von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein fundamentaler Teil des Lebens ist, ohne den wir nicht sehr weit kommen. Das gilt besonders, wenn wir lernen, JavaScript zu programmieren (oder jede andere Sprache, was das betrifft) — so viel von dem, was wir tun, beruht darauf, numerische Daten zu verarbeiten, neue Werte zu berechnen usw., dass es Sie nicht überraschen wird, zu erfahren, dass JavaScript eine umfassende Reihe von Mathematikfunktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Zahlentypen

In der Programmierung ist sogar das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als man denken könnte. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** sind Zahlen ohne Nachkommastellen. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (bedeutet, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Sachen wie:

- **Binär** — Die niedrigste Sprache von Computern; 0er und 1er.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie könnten diesen Zahlen begegnet sein, wenn Sie [Farben in CSS setzen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values).

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, stoppen Sie genau dort!** Für den Anfang werden wir in diesem Kurs nur bei Dezimalzahlen bleiben; Sie werden selten auf die Notwendigkeit stoßen, über andere Arten nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für ganze Zahlen als auch für Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie, egal mit welcher Art von Zahlen Sie in JavaScript zu tun haben, sie auf genau dieselbe Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses kümmern wir uns nur um `Number`-Werte.

### Es sind alles Zahlen für mich

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst deklarieren wir ein paar Variablen und initialisieren sie mit einer ganzen Zahl und einem Float, dann geben wir die Variablennamen zurück ein, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie fortfahren.
3. Jetzt lassen Sie uns überprüfen, dass beide unsere ursprünglichen Variablen denselben Datentyp haben. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückbekommen — das macht es uns viel einfacher, als wenn verschiedene Zahlen verschiedene Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt, dessen Instanz alle Standardzahlen darstellt, die Sie in Ihrem JavaScript verwenden, hat eine Reihe von nützlichen Methoden, um Zahlen zu manipulieren. Wir behandeln diese in diesem Artikel nicht im Detail, da wir ihn als Einführung halten wollten und nur die wirklich grundlegenden essenziellen Punkte für jetzt behandeln wollten; jedoch, nachdem Sie dieses Modul ein paar Mal gelesen haben, lohnt es sich, zu den Objekt-Referenzseiten zu gehen und mehr darüber zu lernen, was verfügbar ist.

Zum Beispiel, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertieren zu Zahlen-Datentypen

Manchmal könnten Sie mit einer Zahl enden, die als Zeichenkettentyp gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Input eingegeben werden und der [Input-Typ Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — die Übertragung des Zeichenkettenwerts in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor, um eine Zahlenversion desselben Wertes zurückzugeben.

Zum Beispiel versuchen Sie, diese Zeilen in Ihrer Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als eine Zeichenkette definiert ist. Dies können Sie testen, indem Sie das Folgende eingeben:

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
      <th scope="col">Name</th>
      <th scope="col">Zweck</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+</code></td>
      <td>Addition</td>
      <td>Addiert zwei Zahlen zusammen.</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>Subtraktion</td>
      <td>Zieht die rechte Zahl von der linken ab.</td>
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
      <td>Rest (manchmal auch modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl ganzer Teile geteilt haben, die der rechten Zahl entsprechen.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal reinpasst, wobei 2 übrig bleiben).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code> Zahl auf die <code>Exponent</code> Potenz, das heißt die <code>Basis</code> Zahl multipliziert mit sich selbst, <code>Exponent</code> mal.
      </td>
      <td>
        <code>5 ** 2</code> (ergibt <code>25</code>, was dasselbe wie <code>5 * 5</code> ist).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sie werden manchmal sehen, dass Zahlen, die an Arithmetik beteiligt sind, als {{Glossary("Operand", "Operanden")}} bezeichnet werden.

> [!NOTE]
> Sie können manchmal sehen, dass Exponenten mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel ist in `Math.pow(7, 3)` `7` die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` ist gleichwertig zu `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihre [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache Beispiele selbst einzutragen, wie z.B.

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen innerhalb von Variablen zu deklarieren und zu initialisieren und versuchen, diese in den Summen zu verwenden — die Variablen verhalten sich genau wie die Werte, die sie für die Zwecke der Summe enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zum Schluss in diesem Abschnitt versuchen Sie, einige komplexere Ausdrücke einzugeben, wie:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieser letzten Berechnungen könnten Ihnen nicht das gewünschte Ergebnis liefern; der folgende Abschnitt könnte die Antwort darauf geben.

### Operator-Priorität

Sehen wir uns das letzte Beispiel von oben an, vorausgesetzt, dass `num2` den Wert 50 und `num1` den Wert 10 hält (wie ursprünglich oben angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie das als _"50 plus 10 gleich 60"_ lesen, dann _"8 plus 2 gleich 10"_, und schließlich _"60 geteilt durch 10 gleich 6"_.

Aber der Browser macht _"10 geteilt durch 8 gleich 1,25"_, dann _"50 plus 1,25 plus 2 gleich 53,25"_.

Dies liegt an der **Operator-Priorität** — einige Operatoren werden angewendet, bevor andere beim Berechnen eines Ergebnisses einer Berechnung (im Programmieren als _Ausdruck_ bezeichnet) angewendet werden. Die Operator-Priorität in JavaScript ist die gleiche, wie sie in Mathe-Klassen in der Schule gelehrt wird — multiplizieren und dividieren werden immer zuerst durchgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operator-Priorität außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandeln lassen möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie, die vorherige Zeile in die Konsole einzugeben, um dies auszuprobieren.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie unter [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert hinzuzufügen oder zu subtrahieren. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren erfolgen. Wir haben dies in unserem "Erraten Sie die Zahl"-Spiel in unserem [ersten Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Vermutungen der Benutzer noch hat nach jedem Zug.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Zuerst beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, nicht einen Betrieb auf dem Wert selbst. Das Folgende gibt einen Fehler zurück:

```js example-bad
3++;
```

Also können Sie nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Merkwürdigkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--`: Versuchen Sie das Folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu tun — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückzugeben —, indem Sie den Operator statt am Ende an den Anfang der Variablen setzen. Versuchen Sie, die obigen Beispiele erneut, diesmal jedoch mit `++num1` und `--num2` zu verwenden.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten, `=`, bereits häufig verwendet — er weist der Variablen auf der linken Seite den angegebenen Wert auf der rechten Seite zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu halten. Die häufigsten sind unten aufgelistet:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
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
        Addiert den Wert rechts zur Variablenwert links und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert rechts vom Variablenwert links und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert links mit dem Wert rechts und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert links durch den Wert rechts und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Idee zu bekommen, wie sie funktionieren. In jedem Fall sehen Sie, ob Sie erraten können, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auch ganz glücklich andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Größenbestimmung eines Canvas-Kastens

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe eines Kastens zu ändern. Der Kasten wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Keine Sorge darüber, wie das funktioniert — konzentrieren Sie sich einfach auf die Mathematik für jetzt. Die Breite und Höhe des Kastens (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide zunächst einen Wert von 50 erhalten.

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

Öffnen Sie das obige Beispiel im MDN Playground, indem Sie auf die Schaltfläche **"Play"** klicken, und befolgen Sie dann die Liste der Anweisungen unten, um den Kasten auf bestimmte Größen wachsen/schrumpfen zu lassen, mit bestimmten Operatoren und/oder Werten in jedem Fall:

- Ändern Sie die Zeile, die `x` berechnet, sodass der Kasten weiterhin `50px` breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass der Kasten `75px` hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass der Kasten `100px` breit ist, aber die 100 mit drei Zahlen und den Subtraktion- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass der Kasten `200px` hoch ist, aber die 200 mit den Zahlen 2 und `x`, und dem Multiplikationsoperator berechnet wird.

Keine Sorge, wenn Sie den Code vermasseln. Sie können jederzeit die Schaltfläche Zurücksetzen drücken und von vorne beginnen.

## Vergleichsoperatoren

Manchmal möchten wir True/False-Tests durchführen und dann entsprechend dem Ergebnis dieses Tests handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                                          | Beispiel      |
| -------- | -------------------- | ------------------------------------------------------------------------------ | ------------- |
| `===`    | Strikte Gleichheit   | Überprüft, ob die linken und rechten Werte identisch zueinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Überprüft, ob die linken und rechten Werte **nicht** identisch zueinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Überprüft, ob der linke Wert kleiner als der rechte ist.                       | `10 < 6`      |
| `>`      | Größer als           | Überprüft, ob der linke Wert größer als der rechte ist.                        | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Überprüft, ob der linke Wert kleiner oder gleich dem rechten ist.              | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Überprüft, ob der linke Wert größer oder gleich dem rechten ist.               | `5 >= 4`      |

> [!NOTE]
> Sie könnten sehen, dass einige Menschen `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die erstgenannten Versionen prüfen, ob die Werte gleich sind, jedoch nicht, ob die Datentypen der Werte gleich sind. Die letzteren, strikten Versionen prüfen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen tendenziell zu weniger Fehlern, deshalb empfehlen wir Ihnen, diese zu verwenden.

Wenn Sie einige dieser Werte in einer Konsole eingeben, werden Sie sehen, dass sie alle `true`/`false`-Werte zurückgeben — die Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Entscheidung treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Das richtige Textlabel auf einem Button anzuzeigen, je nachdem, ob ein Feature eingeschaltet oder ausgeschaltet ist
- Eine Game-Over-Nachricht anzuzeigen, wenn ein Spiel beendet ist, oder eine Sieg-Nachricht, wenn das Spiel gewonnen wurde
- Die richtige saisonale Begrüßung anzuzeigen, je nachdem, welche Feiertagssaison es ist
- Eine Karte ein- oder auszuzoomen, je nachdem, welcher Zoomlevel ausgewählt ist

Wir werden uns ansehen, wie man solche Logiken codiert, wenn wir uns in einem zukünftigen Artikel die bedingten Anweisungen ansehen. Für jetzt lassen Sie uns ein kurzes Beispiel ansehen:

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

Sie können sehen, dass der Gleichheitsoperator gerade innerhalb der `updateBtn()` Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt eines Buttons eine bestimmte Zeichenfolge enthält — aber es ist immer noch das gleiche Prinzip im Werk. Wenn der Button momentan "Start machine" sagt, wenn er gedrückt wird, ändern wir sein Label zu "Stop machine" und aktualisieren das Label entsprechend. Wenn der Button momentan "Stop machine" sagt, wenn er gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird im Allgemeinen als **Schalter** bezeichnet. Sie wechselt zwischen einem Zustand und einem anderen — z.B. Licht an, Licht aus usw.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie im Moment über Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder verwenden, durch Ihren gesamten JavaScript-Lernprozess hindurch, daher ist es eine gute Idee, dies jetzt aus dem Weg zu schaffen. Wenn Sie einer dieser Menschen sind, die Mathematik nicht genießen, können Sie darin Trost finden, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu prüfen, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Zahlen und Zeichenketten](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting")}}
