---
title: Grundlagen der Mathematik in JavaScript – Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen verwenden können, um Zahlen erfolgreich zu manipulieren, um unsere Ziele zu erreichen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Zahlenoperationen in JavaScript, wie Addieren, Subtrahieren, Multiplizieren und Dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können Berechnungen durcheinanderbringen.</li>
          <li>Umwandeln von Strings in Zahlen mit <code>Number()</code>.</li>
          <li>Operatorpriorität.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Nun, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule Multiplikationstabellen und lange Divisionen lernen mussten, und einige von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Teil des Lebens ist, ohne den wir nicht weit kommen können. Dies gilt insbesondere dann, wenn wir lernen, JavaScript zu programmieren (oder jede andere Sprache) — ein Großteil dessen, was wir tun, beruht darauf, numerische Daten zu verarbeiten, neue Werte zu berechnen und so weiter. Es wird Sie nicht überraschen, dass JavaScript eine voll ausgestattete Sammlung von Mathematikfunktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist sogar das bescheidene Dezimalsystem, das wir alle so gut kennen, komplizierter, als man meinen könnte. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** sind Zahlen ohne Bruchteil. Sie können positiv oder negativ sein, z. B. 10, 400 oder -5.
- **Gleitpunktzahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (was bedeutet, dass es 0–9 in jeder Ziffer verwendet), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie haben diese Zahlen möglicherweise zuvor beim Setzen von [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) gesehen.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, stoppen Sie genau hier!** Für den Anfang werden wir in diesem Kurs nur bei Dezimalzahlen bleiben; Sie werden selten über andere Typen nachdenken müssen, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp hat, um grundlegende Zahlen darzustellen — sowohl Ganzzahlen als auch Dezimalstellen. Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie, egal mit welcher Art von Zahlen Sie in JavaScript umgehen, sie auf dieselbe Weise behandeln.

> [!NOTE]
> JavaScript hat einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große ganze Zahlen verwendet wird. Aber in diesem Kurs konzentrieren wir uns nur auf `Number`-Werte.

### Für mich sind das alles Zahlen

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns wieder mit der Basis-Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Developer-Tools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst erklären wir ein paar Variablen und initialisieren sie mit einer Ganzzahl bzw. einem Float, dann geben Sie die Variablennamen erneut ein, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen zu deklarieren und zu initialisieren, die Zahlen enthalten, bevor Sie weitermachen.
3. Überprüfen wir nun, ob beide ursprünglichen Variablen denselben Datentyp haben. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die beiden folgenden Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Es sollte in beiden Fällen `"number"` zurückgegeben werden — das macht es uns viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir mit ihnen anders umgehen müssten. Puh!

### Nützliche Nummer-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt, von dem eine Instanz alle Standardzahlen darstellt, die Sie in Ihrem JavaScript verwenden, bietet mehrere Methoden zur Manipulation von Zahlen. Wir gehen hier nicht im Detail darauf ein, da wir vorerst nur die wesentlichen Punkte abdecken möchten; nachdem Sie dieses Modul ein paar Mal durchgelesen haben, lohnt es sich jedoch, die Objektreferenzseiten zu besuchen, um zu sehen, was verfügbar ist.

Zum Beispiel können Sie mit der Methode [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) Ihre Zahl auf eine feste Anzahl von Dezimalstellen runden. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in numerische Datentypen

Manchmal kann es vorkommen, dass eine Zahl als String-Typ gespeichert wird, was in Berechnungen schwer zu verwenden ist. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — indem Sie den String-Wert an den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Konstruktor übergeben, um eine Zahlendes Version des gleichen Wertes zurückzugeben.

Geben Sie zum Beispiel diese Zeilen in Ihre Konsole ein:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743 statt 77, da `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie folgendes eingeben:

```js
typeof myNumber;
```

Um die Berechnung zu korrigieren, können Sie Folgendes tun:

```js
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

Das Ergebnis ist dann 77, wie ursprünglich erwartet.

## Arithmetische Operatoren

Arithmetische Operatoren werden in JavaScript verwendet, um mathematische Berechnungen durchzuführen:

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
      <td>Addiert zwei Zahlen miteinander.</td>
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
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem die linke Zahl in mehrere ganzzahlige Anteile gleich der rechten Zahl aufgeteilt wurde.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal passt, wobei 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhebt eine <code>Basis-Zahl</code> zur <code>Exponentialkraft</code>, das heißt, die <code>Basis-Zahl</code> multipliziert mit sich selbst, <code>Exponent</code> mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was gleich <code>5 * 5</code> ist).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sie werden manchmal sehen, dass Zahlen, die an arithmetischen Operationen beteiligt sind, als {{Glossary("Operand", "Operanden")}} bezeichnet werden.

> [!NOTE]
> Sie können manchmal Exponenten ausgedrückt sehen, die die ältere Methode {{jsxref("Math.pow()")}} verwenden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel ist in `Math.pow(7, 3)` die `7` die Basis und `3` der Exponent, daher ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wir müssen Ihnen wahrscheinlich keine grundlegende Mathematik beibringen, aber wir möchten Ihr Verständnis testen, wie sie in JavaScript dargestellt wird. Versuchen Sie, die untenstehenden Beispiele in Ihre [Entwicklerwerkzeuge-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige einfache Beispiele selbst einzugeben, wie:

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Berechnungen zu verwenden — die Variablen verhalten sich genau wie die Werte, die sie für die Berechnung enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zum Schluss für diesen Abschnitt versuchen Sie, einige kompliziertere Ausdrücke einzugeben, wie zum Beispiel:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieser letzten Berechnungen könnten nicht das Ergebnis liefern, das Sie erwartet haben; der untenstehende Abschnitt erklärt warum.

### Operatorpriorität

Schauen wir uns das letzte Beispiel von oben an, vorausgesetzt, dass `num2` den Wert 50 und `num1` den Wert 10 enthält (wie ursprünglich oben angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies lesen als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1.25"_, dann _"50 plus 1.25 plus 2 ergibt 53.25"_.

Dies liegt an der **Operatorpriorität** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet) berechnet wird. Die Operatorpriorität in JavaScript ist die gleiche wie in der grundlegenden Mathematik — in diesem Fall zuerst multiplizieren und dividieren, dann addieren und subtrahieren, wobei die Berechnung von links nach rechts ausgewertet wird.

Wenn Sie die Operatorpriorität außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die zuerst behandelt werden sollen. Um ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie, die vorherige Zeile in die Konsole einzugeben, um dies zu testen.

Wenn ein Ausdruck den Exponentoperator (`**`) enthält, wird er nach den Ausdrücken in Klammern, aber vor den anderen [arithmetischen Operatoren](#arithmetische_operatoren) ausgewertet. Beispiel:

```js
2 + 3 ** 2;
```

Beim Eingeben in die Konsole macht der Browser _"3 hoch 2 ergibt 9"_, dann _"2 plus 9 ergibt 11"_.

Versuchen Sie, die folgenden Ausdrücke in die Konsole einzugeben, um zu demonstrieren, wie Ausdrücke in Klammern vor der Exponentiation ausgewertet werden:

```js
4 + 2 ** 3;
(4 + 2) ** 3;
```

Im ersten Fall macht der Browser _"2 hoch 3 ergibt 8"_, dann _"8 plus 4"_. Im zweiten Fall macht er _"4 plus 2 ergibt 6"_, dann _"6 hoch 3"_.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie in [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrementoperatoren

Manchmal möchten Sie einen numerischen Variablenwert wiederholt um eins erhöhen oder verringern. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem "Zahlenraten"-Spiel in unserem [ersten Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variable hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jeder Runde noch hat.

```js
guessCount++;
```

Versuchen wir, mit diesen in Ihrer Konsole zu spielen. Zunächst sollte beachten, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu und arbeiten nicht auf den Wert selbst. Das folgende Beispiel wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Also, Sie können nur eine bestehende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Merkwürdigkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, indem Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Das Gleiche gilt für `--`: probieren Sie das Folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser das in umgekehrter Reihenfolge tun lassen — zuerst die Variable inkrementieren/dekrementieren _und dann_ den Wert zurückgeben — indem Sie den Operator am Anfang der Variablen statt am Ende setzen. Versuchen Sie die obigen Beispiele nochmals, verwenden Sie aber dieses Mal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den einfachsten von ihnen, `=`, bereits viele Male verwendet — er weist der Variablen auf der linken Seite den auf der rechten Seite angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu halten. Die gängigsten sind unten aufgelistet:

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
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Zieht den Wert auf der rechten Seite vom Variablenwert auf der linken Seite ab und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert auf der linken Seite mit dem Wert auf der rechten Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert auf der linken Seite durch den Wert auf der rechten Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie funktionieren. Sehen Sie, ob Sie das Ergebnis erraten können, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auf der rechten Seite der einzelnen Ausdrücke auch problemlos andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere Zuweisungsoperatoren verfügbar](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber das sind die grundlegenden, die Sie jetzt lernen sollten.

## Eine Canvas-Box dimensionieren

In dieser Übung werden Sie einige Zahlen und Operatoren manipulieren, um die Größe einer Box zu verändern. Die Box wird mit einer Browser-API namens [Canvas-API](/de/docs/Web/API/Canvas_API) gezeichnet. Es ist nicht notwendig, sich jetzt darüber Gedanken zu machen, wie das funktioniert — konzentrieren Sie sich einfach auf die Mathematik. Die Breite und Höhe der Box (in Pixel) sind durch die Variablen `x` und `y` definiert, die beide zunächst den Wert 50 haben.

```html hidden live-sample___canvas-exercise
<canvas id="my-canvas" width="400" height="200"></canvas>
<p></p>
```

```js live-sample___canvas-exercise
const canvas = document.getElementById("my-canvas");
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

Öffnen Sie das obige Beispiel im MDN Playground, indem Sie die **"Play"**-Taste drücken, und folgen Sie dann der Liste der Anweisungen unten, um die Box auf bestimmte Größen zu bringen, wobei bestimmte Operatoren und/oder Werte in jedem Fall verwendet werden:

- Ändern Sie die Zeile, die `x` berechnet, sodass die Box immer noch `50px` breit ist, aber diese Zahl mittels der Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box `75px` hoch ist, aber die 75 mittels der Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass die Box `100px` breit ist, aber die 100 durch drei Zahlen und die Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box `200px` hoch ist, aber die 200 durch die Zahlen 2 und `x` und den Multiplikationsoperator berechnet wird.

Keine Sorge, wenn Sie den Code durcheinander bringen. Sie können jederzeit die Reset-Schaltfläche drücken und von vorne beginnen.

## Vergleichsoperatoren

Manchmal möchten wir true/false-Prüfungen durchführen und dann entsprechend dem Ergebnis handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                           | Beispiel      |
| -------- | -------------------- | --------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Prüft, ob die linke und rechte Werte identisch sind             | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Prüft, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Prüft, ob der linke Wert kleiner als der rechte ist.            | `10 < 6`      |
| `>`      | Größer als           | Prüft, ob der linke Wert größer als der rechte ist.             | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Prüft, ob der linke Wert kleiner oder gleich dem rechten ist.   | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Prüft, ob der linke Wert größer oder gleich dem rechten ist.    | `5 >= 4`      |

> [!NOTE]
> Sie werden möglicherweise sehen, dass einige Leute `==` und `!=` in ihren Tests auf Gleichheit und Ungleichheit verwenden. Diese sind gültige Operatoren in JavaScript, unterscheiden sich jedoch von `===`/`!==`. Die ersteren Versionen testen, ob die Werte gleich sind, aber nicht ihre Datentypen. Die letztgenannten, strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir deren Verwendung.

Wenn Sie versuchen, einige dieser Werte in eine Konsole einzugeben, werden sie alle `true`/`false` Werte zurückgeben — jene Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Wahl treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Das richtige Textlabel auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion aktiviert oder deaktiviert ist.
- Eine Spielüber-Nachricht anzuzeigen, wenn ein Spiel vorbei ist, oder eine Sieg-Nachricht, wenn das Spiel gewonnen wurde.
- Die passende Saisonbegrüßung anzuzeigen, abhängig davon, welche Feiertagssaison ist.
- Eine Karte abhängig von der ausgewählten Zoomstufe hinein oder heraus zu zoomen.

Wir werden schauen, wie man solche Logik codiert, wenn wir uns in einem zukünftigen Artikel bedingte Anweisungen anschauen. Schauen wir uns vorerst ein schnelles Beispiel an:

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

Sie können den Gleichheitsoperator innerhalb der Funktion `updateBtn()` sehen. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenkette enthält — aber es funktioniert trotzdem nach demselben Prinzip. Wenn der Textinhalt der Schaltfläche beim Drücken "Start machine" lautet, ändern wir ihr Label in "Stop machine" und aktualisieren das Label entsprechend. Wenn der Textinhalt der Schaltfläche beim Drücken "Stop machine" lautet, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Es wechselt zwischen zwei Zuständen — Licht an und Licht aus, Gehen und Laufen usw.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie derzeit über Zahlen in JavaScript wissen müssen. Sie werden Zahlen die ganze Zeit über in Ihrem JavaScript-Lernprozess sehen, also ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Personen gehören, die Mathematik nicht mögen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Ihnen einige Tests geben, um zu überprüfen, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Variables", "Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting")}}
