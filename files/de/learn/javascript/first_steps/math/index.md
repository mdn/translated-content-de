---
title: Grundlegende Mathematik in JavaScript – Zahlen und Operatoren
slug: Learn/JavaScript/First_steps/Math
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript – wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich nach unseren Wünschen zu manipulieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS und ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen der Mathematik in JavaScript zu erlangen.</td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik schon immer gehasst, seit wir in der Schule Einmaleins und lange Divisionen lernen mussten, und einige von uns befinden sich irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht weit kommen. Das gilt besonders dann, wenn wir JavaScript (oder eine andere Sprache) programmieren lernen – so vieles, was wir tun, beruht auf der Verarbeitung von numerischen Daten, dem Berechnen neuer Werte und so weiter, dass es Sie nicht überraschen wird, zu erfahren, dass JavaScript einen voll ausgestatteten Satz von Mathe-Funktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

Im Programmieren ist selbst das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Integer** sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Float-Zahlen** (Floats) haben Dezimalstellen und Dezimalzahlen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (bedeutet, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprachebene der Computer; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0-9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen möglicherweise schon begegnet, als Sie [Farben in CSS](/de/docs/Learn/CSS/Building_blocks/Values_and_units#hexadecimal_rgb_values) festgelegt haben.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, halten Sie inne!** Zunächst beschränken wir uns im gesamten Kurs nur auf Dezimalzahlen; Sie werden selten auf die Notwendigkeit stoßen, an andere Typen zu denken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für Integer als auch für Dezimalzahlen – Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie, unabhängig davon, mit welcher Art von Zahlen Sie in JavaScript zu tun haben, diese auf genau die gleiche Weise handhaben.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Zahlen verwendet wird. Aber für die Zwecke dieses Kurses werden wir uns nur um `Number`-Werte kümmern.

### Für mich sind das alles Zahlen

Spielen wir schnell mit ein paar Zahlen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Developer-Tools JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst deklarieren wir ein paar Variablen und initialisieren diese mit einer Ganzzahl und einem Float. Geben Sie die Variablennamen dann erneut ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben – versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie fortfahren.
3. Jetzt überprüfen wir, ob beide unserer ursprünglichen Variablen vom gleichen Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   In beiden Fällen sollte `"number"` zurückgegeben werden – das macht es uns viel einfacher, als wenn unterschiedliche Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Methoden von Number

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt, eine Instanz, die alle Standardzahlen repräsentiert, die Sie in Ihrem JavaScript verwenden, hat eine Reihe nützlicher Methoden, um Zahlen zu manipulieren. Wir decken diese nicht im Detail in diesem Artikel ab, da wir ihn als Einführung halten und vorerst nur die wirklich grundlegenden Essentials abdecken wollten; jedoch lohnt es sich, nachdem Sie dieses Modul ein paar Mal durchgelesen haben, die Objekt-Referenzseiten zu besuchen und mehr darüber zu erfahren, was verfügbar ist.

Zum Beispiel, um Ihre Zahl auf eine festgelegte Anzahl von Dezimalstellen zu runden, verwenden Sie die Methode [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Umwandlung in Zahlendatentypen

Manchmal haben Sie möglicherweise eine Zahl, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies geschieht am häufigsten, wenn Daten in ein [Formular-Input](/de/docs/Learn/Forms) eingegeben werden und der [Input-Typ als Text](/de/docs/Web/HTML/Element/input/text) festgelegt ist. Es gibt eine Möglichkeit, dieses Problem zu lösen — indem der String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) Konstruktor übergeben wird, um eine numerische Version desselben Wertes zurückzugeben.

Zum Beispiel, versuchen Sie, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, da `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie das Folgende eingeben:

```js
typeof myNumber;
```

Um die Berechnung zu korrigieren, können Sie Folgendes tun:

```js
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```

Das Ergebnis ist dann 77, wie anfangs erwartet.

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
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl von Ganzzahlen gleich der rechten Zahl geteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal geht und 2 übrig bleiben).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die <code>Exponent</code>-Potenz, das heißt, die <code>Basis</code>-Zahl wird <code>Exponent</code>-Mal mit sich selbst multipliziert.
      </td>
      <td>
        <code>5 ** 2</code> (ergibt <code>25</code>, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sie werden manchmal Zahlen sehen, die in der Arithmetik als {{Glossary("Operand", "Operanden")}} bezeichnet werden.

> [!NOTE]
> Sie können manchmal Exponenten mit der älteren Methode {{jsxref("Math.pow()")}} ausdrücken, die auf sehr ähnliche Weise funktioniert. Zum Beispiel, in `Math.pow(7, 3)`, ist `7` die Basis und `3` der Exponent, so ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` ist gleichwertig zu `7**3`.

Wahrscheinlich brauchen wir Ihnen nicht beizubringen, wie man Grundrechenarten durchführt, aber wir möchten Ihr Verständnis der Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihrer [Developer-Tools JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Geben Sie zunächst einige einfache eigene Beispiele ein, wie

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und versuchen, diese in den Berechnungen zu verwenden – die Variablen werden sich für die Zwecke der Berechnung genauso wie die von ihnen gehaltenen Werte verhalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zum Schluss für diesen Abschnitt versuchen Sie, einige kompliziertere Ausdrücke einzugeben, wie:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Einige Teile dieses letzten Satzes von Berechnungen könnten Ihnen nicht genau das Ergebnis liefern, das Sie erwartet haben; der folgende Abschnitt könnte die Antwort darauf geben.

### Operator-Priorität

Schauen wir uns das letzte Beispiel von oben an, wobei wir davon ausgehen, dass `num2` den Wert 50 und `num1` den Wert 10 hat (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies lesen als _"50 plus 10 ist gleich 60"_, dann _"8 plus 2 ist gleich 10"_, und schließlich _"60 geteilt durch 10 ist gleich 6"_.

Aber der Browser tut _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Dies liegt an der **Operator-Priorität** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung berechnet wird (als _Ausdruck_ im Programmieren bezeichnet). Die Operator-Priorität in JavaScript ist die gleiche, die in Mathematik-Unterrichtsstunden in der Schule gelehrt wird – multiplizieren und dividieren wird immer zuerst ausgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts bewertet).

Wenn Sie die Operator-Priorität überschreiben möchten, können Sie Klammern um die Teile setzen, die Sie explizit zuerst bearbeiten möchten. Um beispielsweise ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie es sich an.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie unter [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert addieren oder subtrahieren. Dies kann bequem mithilfe der Inkrement-(`++`) und Dekrement-(`--`) Operatoren getan werden. Wir haben `++` in unserem "Guess the number"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn/JavaScript/First_steps/A_first_splash) Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Probieren wir diese in Ihrer Konsole aus. Zunächst beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, wir operieren nicht mit dem Wert selbst. Das Folgende wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben – dies liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--` : versuchen Sie das Folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu tun — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückzugeben — indem Sie den Operator am Anfang der Variable anstelle des Endes setzen. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den einfachsten schon oft verwendet: `=`, es weist der Variable auf der linken Seite den Wert auf der rechten Seite zu:

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
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Zieht den Wert auf der rechten Seite vom Variablenwert auf der linken Seite ab und gibt den neuen Variablenwert zurück
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

Versuchen Sie, einige der obigen Beispiele in Ihrer Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie funktionieren. Versuchen Sie in jedem Fall zu erraten, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie gerne andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere zuweisende Operatoren verfügbar](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktiv lernen: Eine Canvas-Box dimensionieren

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mithilfe einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich darüber Gedanken zu machen, wie dies funktioniert – konzentrieren Sie sich jetzt einfach auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide ursprünglich den Wert 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im bearbeitbaren Codefeld oben gibt es zwei Zeilen, die mit einem Kommentar gekennzeichnet sind und die Sie aktualisieren sollen, um die Box auf bestimmte Größen zu vergrößern/verkleinern, indem bestimmte Operatoren und/oder Werte in jedem Fall verwendet werden. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die `x` berechnet, sodass die Box immer noch 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass die Box 250px breit ist, aber die 250 mit zwei Zahlen und dem Restoperator (Modulo) berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box 150px hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass die Box 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.

Keine Sorge, wenn Sie den Code völlig durcheinanderbringen. Sie können jederzeit die Schaltfläche "Zurücksetzen" drücken, um alles wieder zum Laufen zu bringen. Nachdem Sie alle obigen Fragen korrekt beantwortet haben, dürfen Sie den Code weiter ausprobieren oder Ihre eigenen Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir Wahre/Falsche-Tests durchführen und dann je nach Ergebnis dieses Tests handeln – hierfür verwenden wir **Vergleichsoperatoren**.

| Operator | Name                    | Zweck                                                            | Beispiel      |
| -------- | ----------------------- | ---------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit      | Testet, ob die linken und rechten Werte identisch sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit    | Testet, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als             | Testet, ob der linke Wert kleiner als der rechte ist.            | `10 < 6`      |
| `>`      | Größer als              | Testet, ob der linke Wert größer als der rechte ist.             | `10 > 20`     |
| `<=`     | Kleiner als oder gleich | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.   | `3 <= 2`      |
| `>=`     | Größer als oder gleich  | Testet, ob der linke Wert größer oder gleich dem rechten ist.    | `5 >= 4`      |

> [!NOTE]
> Sie sehen möglicherweise einige Leute, die `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die erstgenannen Versionen Testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die letzteren, strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir, diese zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie sehen, dass sie alle `true`/`false` Werte zurückgeben – diese Boolschen, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art Entscheidung treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Den korrekten Text auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Spielende-Nachricht anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesnachricht, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Grußbotschaft anzuzeigen, je nachdem, welche Feiertagssaison es ist
- Eine Karte je nach ausgewähltem Zoomlevel rein- oder rauszuzoomen

Wir werden sehen, wie man solche Logik codiert, wenn wir uns in einem zukünftigen Artikel bedingte Anweisungen ansehen. Schauen wir uns vorerst ein kurzes Beispiel an:

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

Sie können den Gleichheitsoperator direkt innerhalb der `updateBtn()`-Funktion sehen. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke den gleichen Wert haben – wir prüfen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält – aber es ist immer noch dasselbe Prinzip am Werk. Wenn die Schaltfläche derzeit "Start machine" sagt, ändern wir ihre Beschriftung in "Stop machine" und aktualisieren die Beschriftung entsprechend. Wenn die Schaltfläche derzeit "Stop machine" sagt, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Toggle** bezeichnet. Es wechselt zwischen einem Zustand und einem anderen – Licht an, Licht aus, usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie jetzt über Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder verwenden, während Ihrer gesamten JavaScript-Ausbildung, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Menschen gehören, die Mathematik nicht gerne mögen, können Sie Trost darin finden, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text untersuchen und wie JavaScript es uns ermöglicht, ihn zu manipulieren.

> [!NOTE]
> Wenn Sie Mathematik mögen und mehr darüber lesen möchten, wie es in JavaScript implementiert ist, finden Sie viele weitere Details im Haupt-JavaScript-Bereich von MDN. Tolle Startpunkte sind unsere Artikel über [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) und [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
