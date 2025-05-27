---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich nach unseren Wünschen zu manipulieren.

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
          <li>Grundlegende Zahlenoperationen in JavaScript — addieren, subtrahieren, multiplizieren und dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können Berechnungen fehlerhaft machen.</li>
          <li>Umwandlung von Strings in Zahlen mit <code>Number()</code>.</li>
          <li>Operatorpräzedenz.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Math-Objektmethoden wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule das Einmaleins und schriftliches Dividieren lernen mussten, und einige von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein fundamentaler Bestandteil des Lebens ist, ohne den wir nicht weit kommen. Dies gilt insbesondere, wenn wir JavaScript (oder jede andere Programmiersprache) erlernen — so viel von dem, was wir tun, erfordert die Verarbeitung numerischer Daten, das Berechnen neuer Werte und so weiter, dass es Sie nicht überraschen wird, zu erfahren, dass JavaScript ein vollständig ausgestattetes Set von Mathematikfunktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist selbst das bescheidene Dezimalsystem, das wir alle so gut kennen, komplizierter, als man denkt. Wir verwenden unterschiedliche Begriffe, um verschiedene Typen von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** (integers) sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Fließkommazahlen** (floats) haben Dezimalstellen und Nachkommastellen, zum Beispiel 12,5 und 56,7786543.

Wir haben sogar verschiedene Zahlensysteme! Dezimal ist Basis 10 (was bedeutet, dass es 0–9 in jeder Ziffer verwendet), aber wir haben auch Dinge wie:

- **Binär** — die niedrigste Computersprache; 0en und 1en.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen vielleicht schon mal beim Setzen von [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) begegnet.

**Bevor Sie anfangen, sich Sorgen um einen Hirnschmelz zu machen, halten Sie ein!** Zunächst bleiben wir in diesem Kurs bei Dezimalzahlen; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für ganze Zahlen als auch für Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig von der Art der Zahlen, mit denen Sie in JavaScript arbeiten, sie genau auf dieselbe Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große ganze Zahlen verwendet wird. Aber im Rahmen dieses Kurses kümmern wir uns nur um `Number`-Werte.

### Für mich sind das alles Zahlen

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zunächst deklarieren wir ein paar Variablen und initialisieren sie jeweils mit einer Integer und einer Float, dann geben Sie die Variablennamen erneut ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie weitermachen.
3. Jetzt überprüfen wir, ob beide ursprünglichen Variablen denselben Datentyp haben. Es gibt in JavaScript einen Operator namens {{jsxref("Operators/typeof", "typeof")}}, der das tut. Geben Sie die untenstehenden zwei Zeilen wie angezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückbekommen — das macht es für uns viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz davon repräsentiert alle standardmäßigen Zahlen, die Sie in Ihrem JavaScript verwenden, bietet eine Reihe von nützlichen Methoden, um Zahlen zu manipulieren. Wir behandeln diese in diesem Artikel nicht im Detail, weil wir behalten wollten, dass es eine Einführung ist und wir erst mal nur die wirklich grundlegenden Grundlagen abdecken; jedoch, wenn Sie dieses Modul ein paar Mal durchgelesen haben, lohnt es sich, zu den Objekt-Referenzseiten zu gehen und mehr darüber zu lernen, was verfügbar ist.

Um beispielsweise Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Umwandlung in Zahlendatentypen

Manchmal enden Sie mit einer Zahl, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Das kommt am häufigsten vor, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Eingabefeld eingegeben werden und der [Eingabetyp Text](/de/docs/Web/HTML/Reference/Elements/input/text) ist. Es gibt eine Möglichkeit, dieses Problem zu lösen — den Zeichenfolgenwert an den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben, um eine Zahlenversion des gleichen Werts zu erhalten.

Geben Sie zum Beispiel diese Zeilen in Ihre Konsole ein:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
      <td>Teilt die linke Zahl durch die rechte Zahl.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal auch Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl von Ganzzahlanteilen aufgeteilt haben, die der rechten Zahl entspricht.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (ergibt 2, da drei in 8 zweimal geht und 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die <code>Exponenten</code>-Potenz, das heißt, die <code>Basis</code>-Zahl multipliziert mit sich selbst,
        <code>Exponenten</code>-Mal.
      </td>
      <td>
        <code>5 ** 2</code> (ergibt <code>25</code>, was dem gleichen wie
        <code>5 * 5</code> entspricht).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal werden Zahlen, die an arithmetischen Operationen beteiligt sind, als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Sie werden manchmal sehen, dass Exponenten unter Verwendung der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die in sehr ähnlicher Weise funktioniert. Zum Beispiel, in `Math.pow(7, 3)`, ist `7` die Basis und `3` der Exponent, so dass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` entspricht `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der beteiligten Syntax überprüfen. Versuchen Sie, die folgenden Beispiele in Ihrer [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige einfache Beispiele Ihrer eigenen einzugeben, wie zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Berechnungen zu verwenden — die Variablen verhalten sich in Bezug auf die Berechnung genauso wie die Werte, die sie enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Versuchen Sie zuletzt für diesen Abschnitt, einige komplexere Ausdrücke einzugeben, wie zum Beispiel:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieser letzten Reihe von Berechnungen geben Ihnen möglicherweise nicht ganz das Ergebnis, das Sie erwartet haben; der unten stehende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorpräzedenz

Lassen Sie uns das letzte Beispiel von oben betrachten, vorausgesetzt, dass `num2` den Wert 50 und `num1` den Wert 10 hält (wie ursprünglich oben angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie das als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_ lesen.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1.25"_, dann _"50 plus 1.25 plus 2 ergibt 53.25"_.

Dies liegt an der **Operatorpräzedenz** — einige Operatoren werden angewendet, bevor andere bei der Berechnung des Ergebnisses eines Ausdrucks (in der Programmierung als _"expression"_ bezeichnet). Die Operatorpräzedenz in JavaScript ist die gleiche wie in Mathe-Stunden in der Schule — Multiplikation und Division werden immer zuerst ausgeführt, dann Addition und Subtraktion (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorpräzedenz außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie explizit zuerst erledigen möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir das tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrementoperatoren

Manchmal möchten Sie wiederholt eins zu einer numerischen Variablen hinzufügen oder davon subtrahieren. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem Spiel "Rate die Zahl" in unserem [ersten Tauchgang in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash) verwendet, als wir 1 zu unserer `guessCount`-Variable hinzugefügt haben, um zu verfolgen, wie viele Vermutungen der Benutzer nach jedem Zug noch übrig hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Zum Starten beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was möglicherweise seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, nicht der Operation auf dem Wert selbst. Das Folgende gibt einen Fehler zurück:

```js example-bad
3++;
```

Sie können also nur eine vorhandene Variable inkrementieren. Versuchen Sie das:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt, _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--` : Versuchen Sie das folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können es den Browser andersherum tun lassen — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückgeben — indem Sie den Operator an den Anfang der Variablen statt ans Ende setzen. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten, `=`, bereits viele Male verwendet — er weist der Variablen links den auf der rechten Seite angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu gestalten. Die häufigsten sind unten aufgeführt:

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
        Addiert den Wert auf der rechten Seite zur Variablen auf der linken Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Zieht den Wert auf der rechten Seite von der Variablen auf der linken Seite ab und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert die Variable auf der linken Seite mit dem Wert auf der rechten Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt die Variable auf der linken Seite durch den Wert auf der rechten Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. Sehen Sie bei jedem Fall, ob Sie den Wert vorhersagen können, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie ohne weiteres auch andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators) , aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Eine Canvas-Box dimensionieren

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mithilfe einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich darum zu kümmern, wie das funktioniert — konzentrieren Sie sich jetzt nur auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden durch die Variablen `x` und `y` definiert, die zunächst beide den Wert 50 erhalten.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[Im neuen Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

In der bearbeitbaren Codebox oben befinden sich zwei Zeilen, die mit einem Kommentar gekennzeichnet sind und die Sie aktualisieren sollten, um die Box auf bestimmte Größen wachsen / schrumpfen zu lassen, indem Sie in jedem Fall bestimmte Operatoren und/oder Werte verwenden. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die `x` berechnet, so dass die Box immer noch 50px breit ist, aber die 50 unter Verwendung der Zahlen 43 und 7 und eines arithmetischen Operators berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 75px hoch ist, aber die 75 durch die Zahlen 25 und 3 und einen arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 250px breit ist, aber die 250 unter Verwendung von zwei Zahlen und dem Rest (Modulo)-Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 150px hoch ist, aber die 150 unter Verwendung von drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 200px breit ist, aber die 200 unter Verwendung der Zahl 4 und eines Zuweisungsoperators berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 200px hoch ist, aber die 200 durch die Zahlen 50 und 3, den Multiplikationsoperator und den Additionszuweisungsoperator berechnet wird.
  Vergessen Sie nicht, zuerst `y` einen Standardwert zuzuteilen (in einer separaten Zeile), damit die Addition wie erwartet funktioniert.

Machen Sie sich keine Sorgen, wenn Sie den Code völlig durcheinander bringen. Sie können jederzeit die Schaltfläche Reset drücken, um die Dinge wieder in Ordnung zu bringen. Nachdem Sie alle oben genannten Fragen korrekt beantwortet haben, fühlen Sie sich frei, mit dem Code noch mehr zu spielen oder Ihre eigenen Herausforderungen zu erstellen.

## Vergleichsoperatoren

Manchmal möchten wir wahre/falsche Tests durchführen und dann je nach Ergebnis des Tests danach handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                                       | Beispiel      |
| -------- | -------------------- | --------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Testet, ob die linken und rechten Werte identisch zueinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Testet, ob die linken und rechten Werte **nicht** identisch zueinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Testet, ob der linke Wert kleiner ist als der rechte                        | `10 < 6`      |
| `>`      | Größer als           | Testet, ob der linke Wert größer ist als der rechte                         | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Testet, ob der linke Wert kleiner oder gleich dem rechten ist               | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Testet, ob der linke Wert größer oder gleich dem rechten ist                | `5 >= 4`      |

> [!NOTE]
> Sie werden möglicherweise sehen, dass einige Leute `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die erstgenannten Versionen testen, ob die Werte gleich sind, jedoch nicht, ob die Datentypen der Werte gleich sind. Die letztere, strikte Version testet sowohl die Gleichheit der Werte als auch ihrer Datentypen. Die strikten Versionen führen tendenziell zu weniger Fehlern, daher empfehlen wir Ihnen, sie zu verwenden.

Wenn Sie einige dieser Werte in einer Konsole eingeben, werden Sie feststellen, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Auswahl treffen möchten. Zum Beispiel können Booleans verwendet werden, um:

- Den korrekten Text auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Spiel-beendet-Nachricht anzuzeigen, wenn ein Spiel vorbei ist, oder eine Sieg-Nachricht, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Begrüßung anzuzeigen, abhängig davon, in welcher Feiertagssaison wir uns befinden
- Eine Karte ein- oder auszuzoomen, abhängig davon, welcher Zoom-Level ausgewählt ist

Wir werden uns damit beschäftigen, wie solcher Code-Logik codiert wird, wenn wir in einem zukünftigen Artikel bedingte Anweisungen betrachten. Lassen Sie uns vorerst ein kurzes Beispiel betrachten:

```html
<button>Start machine</button>
<p>The machine is stopped.</p>
```

```js
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

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[Im neuen Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Sie können den Gleichheitsoperator direkt in der `updateBtn()` Funktion sehen. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält — aber es ist immer noch dasselbe Prinzip am Werk. Wenn die Schaltfläche momentan "Start machine" sagt, wenn sie gedrückt wird, ändern wir ihr Label in "Stop machine" und aktualisieren das Label entsprechend. Wenn die Schaltfläche momentan "Stop machine" sagt, wenn sie gedrückt wird, wechseln wir die Anzeige zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Sie wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus, etc.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie jetzt über Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder sehen, die ganze Zeit über Ihr JavaScript-Lernen hinweg, also ist es eine gute Idee, dies jetzt hinter sich zu bringen. Wenn Sie zu den Menschen gehören, die Mathematik nicht mögen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir uns mit Texten befassen und wie JavaScript uns erlaubt, sie zu manipulieren.

## Siehe auch

- [Zahlen und Zeichenfolgen](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
