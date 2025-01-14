---
title: Grundlegende Mathematik in JavaScript – Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: c16a0ee78e5142b3bfcdaf57d595add3ce825f13
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt des Kurses besprechen wir Mathematik in JavaScript – wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um erfolgreich Zahlen zu manipulieren und unseren Anforderungen gerecht zu werden.

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
          <li>Grundlegende Zahlenoperationen in JavaScript – addieren, subtrahieren, multiplizieren und dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind und können dazu führen, dass Berechnungen falsch laufen.</li>
          <li>Strings mit <code>Number()</code> in Zahlen umwandeln.</li>
          <li>Operatoren-Priorität.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik seit dem Lernen des Einmaleins und der schriftlichen Division in der Schule gehasst, und einige von uns sind irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Teil des Lebens ist, ohne den wir nicht weit kommen. Dies gilt insbesondere, wenn wir JavaScript (oder jede andere Programmiersprache) lernen – so viel von dem, was wir tun, hängt davon ab, numerische Daten zu verarbeiten, neue Werte zu berechnen usw., dass es nicht überraschend ist, dass JavaScript einen vollständigen Satz von Mathematikfunktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist sogar das dezimale Zahlensystem, das wir alle so gut kennen, komplizierter als Sie vielleicht denken. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteil. Sie können positiv oder negativ sein, z. B. 10, 400 oder -5.
- **Gleitkommazahlen** (floats) haben Dezimalpunkte und Dezimalstellen, z. B. 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (was bedeutet, dass es 0–9 in jeder Ziffer verwendet), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache von Computern; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen vielleicht schon einmal beim Setzen von [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) begegnet.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie sofort auf!** Zunächst halten wir uns in diesem Kurs nur an Dezimalzahlen; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für Ganzzahlen als auch für Dezimalzahlen – Sie ahnen es schon, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig von der Art der Zahlen, mit denen Sie in JavaScript umgehen, diese auf genau die gleiche Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses kümmern wir uns nur um `Number`-Werte.

### Für mich sind alles nur Zahlen

Lassen Sie uns schnell mit ein paar Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir brauchen. Geben Sie die unten aufgeführten Befehle in Ihre [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zunächst einmal deklarieren wir ein paar Variablen und initialisieren sie mit einer Ganzzahl und einer Gleitkommazahl und geben dann die Variablennamen wieder ein, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben – versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie fortfahren.
3. Nun überprüfen wir, ob beide unsere ursprünglichen Variablen vom selben Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die unten stehenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückgegeben bekommen — das macht es uns viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz von ihm repräsentiert alle Standardzahlen, die Sie in Ihrem JavaScript verwenden werden, bietet eine Reihe nützlicher Methoden, mit denen Sie Zahlen manipulieren können. Wir behandeln diese nicht im Detail in diesem Artikel, da wir ihn als Einleitung halten wollten und vorerst nur die wirklich grundlegenden Essentials behandeln. Sobald Sie dieses Modul ein paar Mal gelesen haben, ist es jedoch wert, auf die Objektreferenzseiten zu gehen und mehr über das vorhandene Angebot zu erfahren.

Zum Beispiel um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### In Zahlen-Datentypen umwandeln

Manchmal können Sie mit einer Zahl enden, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies geschieht am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden und der [Eingabetyp Text](/de/docs/Web/HTML/Element/input/text) ist. Es gibt eine Möglichkeit, dieses Problem zu lösen — indem man den String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergibt, um eine Zahlenversion desselben Wertes zurückzugeben.

Zum Beispiel, versuchen Sie diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, da `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
      <td>Multipliziert zwei Zahlen.</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>Division</td>
      <td>Dividiert die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in
          eine Anzahl von Ganzzahlen aufgeteilt haben, die der rechten Zahl
          entspricht.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal passt und 2
          übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die Potenz des <code>Exponenten</code>,
        das heißt, die <code>Basis</code>-Zahl wird mit sich selbst
        <code>Exponent</code>-mal multipliziert.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sie werden manchmal sehen, dass Zahlen, die an arithmetischen Operationen beteiligt sind, als {{Glossary("Operand", "Operanden")}} bezeichnet werden.

> [!NOTE]
> Sie können mitunter Exponenten sehen, die mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden. Diese funktioniert sehr ähnlich. Zum Beispiel ist bei `Math.pow(7, 3)` die `7` die Basis und `3` der Exponent, so dass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wahrscheinlich müssen wir Ihnen nicht beibringen, wie man grundlegende Mathematik betreibt, aber wir möchten Ihr Verständnis der Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihre [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige eigene einfache Beispiele einzugeben, wie zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und zu versuchen, diese in den Berechnungen zu verwenden — die Variablen verhalten sich genauso wie die Werte, die sie für die Zwecke der Berechnung enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Versuchen Sie abschließend in diesem Abschnitt, einige komplexere Ausdrücke einzugeben, wie zum Beispiel:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Einige Teile dieses letzten Satzes von Berechnungen geben möglicherweise nicht das erwartete Ergebnis zurück; der folgende Abschnitt könnte die Antwort darauf geben, warum.

### Operatoren-Priorität

Betrachten wir das letzte Beispiel von oben, wenn wir annehmen, dass `num2` den Wert 50 und `num1` den Wert 10 enthält (wie oben ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie das folgendermaßen lesen: _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Dies liegt an der **Operatoren-Priorität** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung berechnet wird (in der Programmierung als _Ausdruck_ bezeichnet). Die Operatoren-Priorität in JavaScript ist dieselbe, wie sie in Mathematik-Kursen in der Schule gelehrt wird — Multiplikation und Division werden immer zuerst durchgeführt, dann Addition und Subtraktion (der Ausdruck wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatoren-Priorität außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die explizit zuerst behandelt werden sollen. Damit das Ergebnis 6 ergibt, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Probieren Sie es aus und sehen Sie selbst.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Prioritäten finden Sie in [Operatoren-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt einen numerischen Variablenwert um eins erhöhen oder verringern. Dies kann bequem mit den Inkrement-(`++`) und Dekrement-(`--`) Operatoren erledigt werden. Wir haben `++` in unserem "Erraten Sie die Zahl"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jeder Runde noch hat.

```js
guessCount++;
```

Versuchen Sie, mit diesen in Ihrer Konsole zu spielen. Zu Beginn beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, anstatt auf dem Wert selbst zu operieren. Das folgende Beispiel gibt einen Fehler zurück:

```js example-bad
3++;
```

Also können Sie nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — dies liegt daran, dass der Browser den aktuellen Wert zurückgibt _und dann_ die Variable inkrementiert. Sie können sehen, dass es inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Das gleiche gilt für `--` : Versuchen Sie folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu tun — die Variable inkrementieren/dekrementieren _und dann_ den Wert zurückgeben — indem Sie den Operator an den Anfang der Variable setzen, anstatt ans Ende. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den einfachsten bereits viele Male verwendet, `=`, er weist der Variablen auf der linken Seite den auf der rechten Seite angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt noch einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code sauberer und effizienter zu machen. Die gebräuchlichsten sind unten aufgelistet:

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
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert auf der rechten Seite vom Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert auf der linken Seite mit dem Wert auf der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert auf der linken Seite durch den Wert auf der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie funktionieren. Versuchen Sie in jedem Fall vorherzusagen, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie ganz problemlos andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Eine Canvas-Box dimensionieren

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, darüber besorgt zu sein, wie das funktioniert – konzentrieren Sie sich jetzt einfach auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) sind durch die Variablen `x` und `y` definiert, die beide anfänglich mit einem Wert von 50 gegeben sind.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im bearbeitbaren Code-Feld oben gibt es zwei Zeilen, die wir gerne aktualisieren würden, um die Box auf bestimmte Größen zu vergrößern/verkleinern, indem bestimmte Operatoren und/oder Werte verwendet werden. Lassen Sie uns Folgendes versuchen:

- Ändern Sie die Zeile, die x berechnet, so dass die Box immer noch 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, so dass die Box 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die x berechnet, so dass die Box 250px breit ist, aber die 250 mit zwei Zahlen und dem Rest (Modulo) Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, so dass die Box 150px hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Division-Operatoren berechnet wird.
- Ändern Sie die Zeile, die x berechnet, so dass die Box 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, so dass die Box 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code völlig durcheinanderbringen. Sie können immer die Reset-Taste drücken, um alles wieder zum Laufen zu bringen. Nachdem Sie alle oben genannten Fragen richtig beantwortet haben, können Sie gerne noch mehr mit dem Code spielen oder Ihre eigenen Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir wahr/falsch-Tests durchführen und dann je nach Ergebnis des Tests entsprechend handeln – dafür verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                                       | Beispiel      |
| -------- | -------------------- | --------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Testet, ob die linken und rechten Werte identisch zueinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Testet, ob die linken und rechten Werte **nicht** identisch zueinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Testet, ob der linke Wert kleiner als der rechte ist.                       | `10 < 6`      |
| `>`      | Größer als           | Testet, ob der linke Wert größer als der rechte ist.                        | `10 > 20`     |
| `<=`     | Kleinergleich        | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.              | `3 <= 2`      |
| `>=`     | Größergleich         | Testet, ob der linke Wert größer oder gleich dem rechten ist.               | `5 >= 4`      |

> [!NOTE]
> Sie sehen vielleicht einige Leute, die `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind in JavaScript gültige Operatoren, aber sie unterscheiden sich von `===`/`!==`. Die erstgenannten Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir Ihnen, sie zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie sehen, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Auswahl treffen möchten. Zum Beispiel können Booleans verwendet werden, um:

- Den richtigen Text auf einem Knopf anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine "Game Over"-Nachricht anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesnachricht, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Grußformel anzuzeigen, je nachdem, welche Feiertagszeit es ist
- Eine Karte ein- oder auszuzoomen, abhängig von der ausgewählten Zoomstufe

Wir werden uns ansehen, wie wir solche Logik programmieren können, wenn wir in einem zukünftigen Artikel bedingte Aussagen besprechen. Im Moment werfen wir einen kurzen Blick auf ein Beispiel:

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

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Sie können den Gleichheits-Operator sehen, der direkt innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt eines Knopfes einen bestimmten String enthält — aber es ist immer noch dasselbe Prinzip im Einsatz. Wenn der Knopf gerade "Start machine" sagt, wenn er gedrückt wird, ändern wir sein Label zu "Stop machine" und aktualisieren das Label entsprechend. Wenn der Knopf gerade "Stop machine" sagt, wenn er gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Toggle** bezeichnet. Es wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus, usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie über Zahlen in JavaScript wissen müssen, zumindest für jetzt. Sie werden Zahlen immer wieder verwenden, während Ihrer gesamten JavaScript-Lerneinheiten, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Menschen gehören, die Mathematik nicht mögen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir uns mit Text befassen und wie JavaScript es uns ermöglicht, ihn zu manipulieren.

## Siehe auch

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
