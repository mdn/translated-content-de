---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: ff3c7508037412c59e0a3be0c9abe29d1c3c4daa
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

Zu diesem Zeitpunkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich zu manipulieren, damit sie das tun, was wir wollen.

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
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können dazu führen, dass Berechnungen schiefgehen.</li>
          <li>Konvertieren von Strings in Zahlen mit <code>Number()</code>.</li>
          <li>Operatorenrangfolge.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik schon immer gehasst, seit wir in der Schule das Einmaleins und die lange Division lernen mussten, und einige von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Teil des Lebens ist, ohne den wir nicht sehr weit kommen. Dies ist besonders wahr, wenn wir lernen, JavaScript (oder eine andere Sprache) zu programmieren — vieles von dem, was wir tun, basiert auf der Verarbeitung numerischer Daten, der Berechnung neuer Werte und so weiter. Es überrascht also nicht, dass JavaScript ein umfassendes Set an Mathematikfunktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Zahlentypen

In der Programmierung ist selbst das dezimale Zahlensystem, das wir alle so gut kennen, komplizierter, als man denken mag. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen (Integers)** sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z. B. 10, 400 oder -5.
- **Fließkommazahlen** (Floats) haben Dezimalstellen und Dezimalplätze, zum Beispiel 12,5 und 56,7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (bedeutet, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0er und 1er.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen möglicherweise begegnet, wenn Sie [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) festgelegt haben.

**Bevor Sie anfangen, sich Gedanken über das Schmelzen Ihres Gehirns zu machen, halten Sie sich genau dort auf!** Zuerst einmal werden wir im gesamten Kurs bei Dezimalzahlen bleiben; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl Ganzzahlen als auch Dezimalzahlen — richtig geraten, {{jsxref("Number")}}. Das bedeutet, dass Sie in JavaScript, egal mit welchem Zahlentyp Sie es zu tun haben, diese auf genau die gleiche Weise handhaben.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr große Ganzzahlen verwendet wird. Für die Zwecke dieses Kurses kümmern wir uns jedoch nur um `Number`-Werte.

### Für mich sind das alles nur Zahlen

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst deklarieren wir ein paar Variablen und initialisieren sie mit einem Integer und einem Float, dann geben Sie die Variablennamen wieder ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie weitermachen.
3. Überprüfen wir nun, ob beide unserer ursprünglichen Variablen denselben Datentyp haben. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies erledigt. Geben Sie die folgenden beiden Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückerhalten — das macht es uns viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt, von dem eine Instanz alle Standardzahlen repräsentiert, die Sie in Ihrem JavaScript verwenden, bietet Ihnen eine Reihe nützlicher Methoden, um Zahlen zu manipulieren. Wir gehen hier nicht ins Detail darauf ein, da wir den Artikel als Einführung gestaltet haben und nur die wirklich grundlegenden Grundlagen abdecken wollen; sobald Sie dieses Modul ein paar Mal durchgelesen haben, lohnt es sich jedoch, die Objekt-Referenzseiten zu besuchen und mehr darüber zu lernen, was verfügbar ist.

Zum Beispiel können Sie mit der [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode Ihre Zahl auf eine bestimmte Anzahl von Dezimalstellen runden. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### In Zahlendatentypen konvertieren

Manchmal landen Sie möglicherweise mit einer Zahl, die als Typ String gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden und der [Input-Typ Text ist](/de/docs/Web/HTML/Element/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — den String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor geben, um eine Zahlen-Version desselben Wertes zurückzugeben.

Zum Beispiel, versuchen Sie, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten dann das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
      <td>Dividiert die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in
          eine Anzahl von Ganzzahlanteilen geteilt haben, die der rechten Zahl entspricht.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal vorkommt, und 2
          übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die <code>Exponent</code>-Potenz,
        das heißt, die <code>Basis</code>-Zahl, multipliziert mit sich selbst,
        <code>Exponent</code> mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dem
        <code>5 * 5</code> entspricht).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Zahlen, die bei Arithmetik verwendet werden, werden manchmal als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Sie sehen möglicherweise manchmal Exponenten, die mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel, in `Math.pow(7, 3)`, ist `7` die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` entspricht `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik betreibt, aber wir möchten Ihr Verständnis der Syntax testen. Versuchen Sie, die unten stehenden Beispiele in Ihre [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst einige einfache Beispiele selbst einzugeben, wie zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Berechnungen zu verwenden — die Variablen verhalten sich genau wie die von ihnen gehaltenen Werte für die Berechnungszwecke. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Versuchen Sie schließlich in diesem Abschnitt, einige komplexere Ausdrücke einzugeben, wie zum Beispiel:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Einige Teile dieser letzten Berechnung könnten nicht das Ergebnis liefern, das Sie erwartet haben; der Abschnitt weiter unten könnte gut die Antwort darauf geben, warum.

### Operatorenrangfolge

Schauen wir uns das letzte Beispiel von oben an, in dem angenommen wird, dass `num2` den Wert 50 und `num1` den Wert 10 (wie ursprünglich angegeben) hält:

```js
num2 + num1 / 8 + 2;
```

Als menschliches Wesen könnten Sie dies als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_ lesen.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Dies liegt an der **Operatorenrangfolge** — einige Operatoren werden angewendet, bevor andere bei der Berechnung des Ergebnisses einer Berechnung (bezeichnet als _Ausdruck_ in der Programmierung). Die Operatorenrangfolge in JavaScript ist dieselbe, die in Mathematikstunden in der Schule gelehrt wird — multiplizieren und dividieren wird immer zuerst ausgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorenrangfolge überschreiben möchten, können Sie Klammern um die Teile setzen, die Sie explizit zuerst behandelt haben möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir Folgendes tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Rangfolge finden Sie unter [Operatorenrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrementoperatoren

Manchmal möchten Sie wiederholt eins zu einem numerischen Variablenwert hinzufügen oder eins davon abziehen. Dies kann bequem mit den Inkrement (`++`) und Dekrement (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem "Guess the number"-Spiel in unserem [ersten Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash) Artikel verwendet, als wir 1 zu unserer `guessCount`-Variable hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Versuchen wir, mit diesen in Ihrer Konsole zu spielen. Zu Beginn ist zu beachten, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, nicht der Wert selbst. Das Folgende wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird Ihnen ein Wert von 4 zurückgemeldet — dies liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut abrufen:

```js
num1;
```

Das Gleiche gilt für `--` : versuche das folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu machen — inkrementieren/dekrementieren Sie die Variable _dann_ den Wert zurückgeben — indem Sie den Operator am Anfang der Variable statt am Ende setzen. Versuchen Sie die obigen Beispiele noch einmal, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den einfachsten, `=`, bereits viele Male verwendet — er weist der Variablen auf der linken Seite den auf der rechten Seite angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu gestalten. Die gebräuchlichsten sind unten aufgeführt:

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
        Fügt den Wert auf der rechten Seite dem Variabelwert auf der linken Seite hinzu, und gibt den neuen Variabelwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert auf der rechten Seite vom Variabelwert auf der linken Seite, und gibt den neuen Variabelwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variabelwert auf der linken Seite mit dem Wert auf der rechten Seite, und gibt den neuen Variabelwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variabelwert auf der linken Seite durch den Wert auf der rechten Seite, und gibt den neuen Variabelwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie funktionieren. Überlegen Sie bei jedem Beispiel, ob Sie erraten können, welchen Wert es hat, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auf der rechten Seite eines jeden Ausdrucks andere Variablen problemlos verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Eine Canvas-Box dimensionieren

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Machen Sie sich keine Sorgen darüber, wie dies funktioniert — konzentrieren Sie sich jetzt einfach nur auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden von den Variablen `x` und `y` definiert, die beide zu Beginn den Wert 50 erhalten.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im bearbeitbaren Code-Feld oben sind zwei Zeilen mit einem Kommentar markiert, die Sie aktualisieren sollen, um die Box auf bestimmte Größen wachsen/schrumpfen zu lassen, wobei jeweils bestimmte Operatoren und/oder Werte verwendet werden. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die `x` berechnet, so dass die Box immer noch 50px breit ist, aber die 50 durch die Zahlen 43 und 7 und einen arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 75px hoch ist, aber die 75 durch die Zahlen 25 und 3 und einen arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 250px breit ist, aber die 250 durch zwei Zahlen und den Rest (Modulo)-Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 150px hoch ist, aber die 150 durch drei Zahlen und die Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 200px breit ist, aber die 200 durch die Zahl 4 und einen Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 200px hoch ist, aber die 200 durch die Zahlen 50 und 3, den Multiplikationsoperator und den Additions-Zuweisungsoperator berechnet wird. Vergessen Sie nicht zuerst `y` einen Standardwert zuzuweisen (in einer separaten Zeile), damit die Addition wie erwartet funktioniert.

Machen Sie sich keine Sorgen, wenn Sie den Code komplett durcheinanderbringen. Sie können jederzeit die Schaltfläche "Zurücksetzen" drücken, um die Dinge wieder in Ordnung zu bringen. Nachdem Sie alle oben aufgeführten Fragen korrekt beantwortet haben, können Sie gerne noch weiter mit dem Code experimentieren oder eigene Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir wahr/falsch Tests durchführen und dann je nach Ergebnis des Tests entsprechend handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                            | Beispiel      |
| -------- | -------------------- | ---------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Testet, ob die linken und rechten Werte identisch sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Testet, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Testet, ob der linke Wert kleiner als der rechte ist.            | `10 < 6`      |
| `>`      | Größer als           | Testet, ob der linke Wert größer als der rechte ist.             | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.   | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Testet, ob der linke Wert größer oder gleich dem rechten ist.    | `5 >= 4`      |

> [!NOTE]
> Sie könnten sehen, dass einige Leute `==` und `!=` in ihren Tests zur Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die ersteren Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die letzteren, strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikte Version führt zu weniger Fehlern, daher empfehlen wir Ihnen, sie zu verwenden.

Wenn Sie einige dieser Werte in eine Konsole eingeben, sehen Sie, dass sie alle `true`/`false` Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie uns ermöglichen, in unserem Code Entscheidungen zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Wahl treffen möchten. Zum Beispiel können Booleans verwendet werden, um:

- Das richtige Textetikett auf einem Button anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine "Game Over"-Meldung anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesmeldung, wenn das Spiel gewonnen wurde
- Den richtigen saisonalen Gruß je nach Feiertag anzuzeigen
- Eine Karte ein- oder auszuzoomen, je nachdem, welcher Zoomstufe gerade ausgewählt ist

Wir werden uns ansehen, wie man solche Logik kodiert, wenn wir uns in einem zukünftigen Artikel Bedingungsanweisungen ansehen. Betrachten wir vorerst ein kurzes Beispiel:

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

Sie können sehen, dass der Gleichheitsoperator direkt innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt eines Buttons einen bestimmten String enthält — aber es ist immer noch dasselbe Prinzip am Werk. Wenn der Button aktuell "Start machine" anzeigt, wenn er gedrückt wird, ändern wir sein Label auf "Stop machine" und aktualisieren das Label dementsprechend. Wenn der Button aktuell "Stop machine" anzeigt, wenn er gedrückt wird, wechseln wir die Anzeige zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Sie schaltet zwischen einem Zustand und einem anderen um — Licht an, Licht aus, etc.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie bezüglich Zahlen in JavaScript derzeit wissen müssen. Sie werden immer wieder auf Zahlen stoßen, während Sie JavaScript lernen, daher ist es eine gute Idee, dies jetzt abzuhaken. Wenn Sie zu den Menschen gehören, die Mathematik nicht mögen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir uns mit Text befassen und wie JavaScript uns erlaubt, diesen zu manipulieren.

## Siehe auch

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
