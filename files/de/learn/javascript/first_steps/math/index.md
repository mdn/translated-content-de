---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
slug: Learn/JavaScript/First_steps/Math
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir [Operatoren](/de/docs/Glossary/Operator) und andere Funktionen nutzen können, um Zahlen erfolgreich zu manipulieren und unsere Aufgaben damit zu erfüllen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS sowie ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen der Mathematik in JavaScript erlangen.</td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule Multiplikationstabellen und lange Division lernen mussten, und einige von uns befinden sich irgendwo dazwischen. Aber niemand von uns kann leugnen, dass Mathematik ein grundlegender Teil des Lebens ist, ohne den wir nicht weit kommen. Das ist besonders wahr, wenn wir lernen, JavaScript (oder eine andere Sprache, was das betrifft) zu programmieren — vieles von dem, was wir tun, beruht darauf, numerische Daten zu verarbeiten, neue Werte zu berechnen und so weiter. Daher wird es Sie nicht überraschen, zu erfahren, dass JavaScript eine vollständige Sammlung von Mathematik-Funktionen bereitstellt.

Dieser Artikel bespricht nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Zahlentypen

In der Programmierung ist selbst das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben. Zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteil. Sie können positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, z.B. 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (das bedeutet, es verwendet 0–9 in jeder Stelle), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprachebene von Computern; 0er und 1er.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Stelle.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Stelle. Sie sind diesen Zahlen vielleicht schon begegnet, wenn Sie [Farben in CSS](/de/docs/Learn/CSS/Building_blocks/Values_and_units#hexadecimal_rgb_values) festlegen.

**Bevor Sie anfangen, sich Gedanken darüber zu machen, dass Ihr Gehirn schmilzt, stoppen Sie gleich hier!** Zunächst werden wir uns während dieses Kurses auf Dezimalzahlen beschränken; Sie werden selten eine Notwendigkeit finden, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für Ganzzahlen als auch für Dezimalstellen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie, egal mit welchen Zahlentypen Sie in JavaScript arbeiten, sie auf genau dieselbe Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, [BigInt](/de/docs/Glossary/BigInt), der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses werden wir uns nur mit `Number`-Werten befassen.

### Es ist alles Zahlensache für mich

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklerwerkzeuge-JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst deklarieren wir ein paar Variablen und initialisieren sie jeweils mit einer Ganzzahl und einem Float. Geben Sie dann die Variablennamen zurück ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie fortfahren.
3. Jetzt lassen Sie uns überprüfen, ob beide ursprünglichen Variablen vom selben Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   In beiden Fällen sollten Sie `"number"` zurückerhalten — das macht es für uns viel einfacher, als wenn unterschiedliche Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, dessen Instanz alle Standardzahlen repräsentiert, die Sie in Ihrem JavaScript verwenden, hat eine Reihe nützlicher Methoden, die Ihnen zur Verfügung stehen, um Zahlen zu manipulieren. Wir behandeln diese in diesem Artikel nicht im Detail, weil wir ihn als einfache Einführung halten und vorerst nur die wirklich grundlegenden Dinge behandeln wollten. Sobald Sie jedoch dieses Modul ein paar Mal gelesen haben, lohnt es sich, auf die Objekt-Referenzseiten zu gehen und mehr darüber zu lernen, was alles verfügbar ist.

Um zum Beispiel Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in Zahlendatentypen

Manchmal landen Sie möglicherweise bei einer Zahl, die als Zeichenkettentyp gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn/Forms) eingegeben werden und der [Eingabetyp ist Text](/de/docs/Web/HTML/Element/input/text). Es gibt einen Weg, dieses Problem zu lösen — indem Sie den Zeichenkettenwert in den Konstruktor [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) eingeben, um eine Zahlenversion desselben Wertes zu erhalten.

Versuchen Sie zum Beispiel, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als Zeichenkette definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
          Gibt den Rest zurück, der übrig bleibt, nachdem die linke Zahl in eine
          Anzahl ganzer Teile gleich der rechten Zahl geteilt wurde.
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
      <td>Exponential</td>
      <td>
        Erhöht eine Basiszahl zur Potenz der Exponentialzahl, das heißt, die Basiszahl
        multipliziert mit sich selbst, Exponentialzahl mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal sehen Sie Zahlen, die in arithmetischen Operationen als [Operanden](/de/docs/Glossary/Operand) bezeichnet werden.

> [!NOTE]
> Sie sehen vielleicht manchmal, dass Exponenten mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel ist in `Math.pow(7, 3)`, `7` die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` ist gleichbedeutend mit `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik durchführt, aber wir möchten Ihr Verständnis der involvierten Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihrer [Entwicklerwerkzeuge-JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache Beispiele Ihrer eigenen zu erstellen, wie z.B.

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und versuchen, diese in den Summen zu verwenden — die Variablen verhalten sich genauso wie die Werte, die sie bei den Summen halten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Geben Sie zuletzt in diesem Abschnitt einige komplexere Ausdrücke ein, wie z.B.:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieses letzten Berechnungssatzes geben Ihnen möglicherweise nicht genau das Ergebnis, das Sie erwartet hatten; Der Abschnitt unten könnte die Antwort darauf geben, warum.

### Operatorpräzedenz

Werfen wir einen Blick auf das letzte Beispiel von oben, wobei angenommen wird, dass `num2` den Wert 50 und `num1` den Wert 10 hält (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies lesen als _"50 plus 10 gleich 60"_, dann _"8 plus 2 gleich 10"_, und schließlich _"60 dividiert durch 10 gleich 6"_.

Aber der Browser macht _"10 dividiert durch 8 gleich 1,25"_, dann _"50 plus 1,25 plus 2 gleich 53,25"_.

Das liegt an der **Operatorpräzedenz** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung berechnet wird (in der Programmierung als _Ausdruck_ bezeichnet). Die Operatorpräzedenz in JavaScript ist die gleiche, die im Mathematikunterricht in der Schule gelehrt wird — Multiplikation und Division werden immer zuerst durchgeführt, dann Addition und Subtraktion (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorpräzedenz außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie explizit zuerst behandeln möchten. Um ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie nach.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrementoperatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert hinzufügen oder abziehen. Dies kann bequem unter Verwendung der Inkrement- (`++`) und Dekrement- (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem "Erraten Sie die Zahl"-Spiel zurück in unserem [ersten Sprung in JavaScript](/de/docs/Learn/JavaScript/First_steps/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Vermutungen der Benutzer nach jedem Zug übrig hatte.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Zuerst, beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, anstatt auf den Wert selbst zu operieren. Folgendes wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Daher können Sie nur eine bestehende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie einen Wert von 4 zurückgegeben — dies liegt daran, dass der Browser zuerst den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass es inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Das gleiche gilt für `--` : versuchen Sie Folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu machen — die Variable zuerst inkrementieren/dekrementieren und dann den Wert zurückgeben — indem Sie den Operator am Anfang der Variablen anstelle des Endes verwenden. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben bereits den grundlegendsten verwendeten `=`, unzählige Male — er weist die Variable zur Linken den auf der rechten Seite angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu halten. Die gebräuchlichsten sind unten aufgeführt:

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
        Addiert den Wert rechts zum Variablenwert links hinzu und
        gibt den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert rechts vom Variablenwert links und 
        gibt den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert links mit dem Wert rechts und 
        gibt den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Dividiert den Variablenwert links durch den Wert rechts und 
        gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihrer Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. In jedem Fall, sehen Sie, ob Sie den Wert erraten können, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie ganz glücklich andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere Zuweisungsoperatoren verfügbar](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Eine Zeichenfläche anpassen

In dieser Übung werden Sie einige Zahlen und Operatoren manipulieren, um die Größe eines Kastens zu ändern. Der Kasten wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich darüber Gedanken zu machen, wie das funktioniert — konzentrieren Sie sich vorerst nur auf die Mathematik. Die Breite und Höhe des Kastens (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide zunächst den Wert 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

In dem bearbeitbaren Codefeld oben gibt es zwei Zeilen, die mit einem Kommentar markiert sind und die wir Sie auffordern, so zu aktualisieren, dass der Kasten wächst/schrumpft auf bestimmte Größen, wobei in jedem Fall bestimmte Operatoren und/oder Werte verwendet werden. Lassen Sie uns Folgendes versuchen:

- Ändern Sie die Zeile, die x berechnet, sodass der Kasten immer noch 50px breit ist, aber 50 wird mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet.
- Ändern Sie die Zeile, die y berechnet, sodass der Kasten 75px hoch ist, aber 75 wird mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet.
- Ändern Sie die Zeile, die x berechnet, sodass der Kasten 250px breit ist, aber 250 wird mit zwei Zahlen und dem Restoperator (Modulo) berechnet.
- Ändern Sie die Zeile, die y berechnet, sodass der Kasten 150px hoch ist, aber 150 wird mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet.
- Ändern Sie die Zeile, die x berechnet, sodass der Kasten 200px breit ist, aber 200 wird mit der Zahl 4 und einem Zuweisungsoperator berechnet.
- Ändern Sie die Zeile, die y berechnet, sodass der Kasten 200px hoch ist, aber 200 wird mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet.

Keine Sorge, wenn Sie den Code völlig durcheinander bringen. Sie können jederzeit die Reset-Taste drücken, um die Dinge wieder in Gang zu bringen. Nachdem Sie alle oben genannten Fragen richtig beantwortet haben, können Sie gerne weiter mit dem Code experimentieren oder Ihre eigenen Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir wahr/falsch-Tests ausführen und dann entsprechend dem Ergebnis dieses Tests handeln — um dies zu tun, verwenden wir **Vergleichsoperatoren**.

| Operator | Name                     | Zweck                                                                      | Beispiel       |
| -------- | ------------------------ | ---------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit       | Testet, ob die linken und rechten Werte identisch sind                       | `5 === 2 + 4` |
| `!==`    | Strikte Nicht-Gleichheit | Testet, ob die linken und rechten Werte **nicht** identisch sind             | `5 !== 2 + 3` |
| `<`      | Kleiner als              | Testet, ob der linke Wert kleiner als der rechte ist.                       | `10 < 6`      |
| `>`      | Größer als               | Testet, ob der linke Wert größer als der rechte ist.                        | `10 > 20`     |
| `<=`     | Kleiner oder gleich      | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.              | `3 <= 2`      |
| `>=`     | Größer oder gleich       | Testet, ob der linke Wert größer oder gleich dem rechten ist.                | `5 >= 4`      |

> [!NOTE]
> Sie könnten sehen, dass manche Leute `==` und `!=` in ihren Tests für Gleichheit und Nicht-Gleichheit verwenden. Diese sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die früheren Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die strikteren Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikteren Versionen führen zu weniger Fehlern, daher empfehlen wir Ihnen, diese zu verwenden.

Wenn Sie einige dieser Werte in einer Konsole eingeben, sehen Sie, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleschen, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art Auswahl treffen möchten. Zum Beispiel können Boolesche Werte verwendet werden, um:

- Den korrekten Text auf einer Schaltfläche anzuzeigen, abhängig davon, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Game-Over-Nachricht anzuzeigen, wenn ein Spiel vorbei ist, oder eine Sieg-Nachricht, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Grüße anzuzeigen, je nachdem, welche Feiertagssaison es ist
- Eine Karte härtere oder herauszoomen, je nach ausgewähltem Zoomlevel

Wir werden schauen, wie wir eine solche Logik codieren können, wenn wir uns in einem zukünftigen Artikel mit bedingten Anweisungen befassen. Schauen wir uns vorerst ein schnelles Beispiel an:

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

Sie können den Gleichheitsoperator direkt innerhalb der `updateBtn()`-Funktion sehen. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenkette enthält — aber es ist noch immer dasselbe Prinzip am Werk. Wenn die Schaltfläche gerade "Maschine starten" anzeigt, wenn sie gedrückt wird, ändern wir ihr Label zu "Maschine stoppen" und aktualisieren das Label wie gewünscht. Wenn die Schaltfläche gerade "Maschine stoppen" anzeigt, wenn sie gedrückt wird, wechseln wir die Anzeige zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird im Allgemeinen als **Toggle** bezeichnet. Es wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus, etc.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie jetzt über Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder verwenden, während Ihres gesamten JavaScript-Lernens, daher ist es eine gute Idee, das jetzt aus dem Weg zu räumen. Wenn Sie einer der Leute sind, die Mathematik nicht mögen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir uns mit Texten beschäftigen und wie JavaScript uns erlaubt, diese zu manipulieren.

> [!NOTE]
> Wenn Sie Mathematik mögen und mehr darüber lesen möchten, wie sie in JavaScript implementiert ist, finden Sie viel mehr Details im Haupt-Teil der JavaScript-Sektion von MDN. Gute Startpunkte sind unsere Artikel über [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) und [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
