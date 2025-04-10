---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich zu manipulieren.

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
          <li>Einfache Zahlenoperationen in JavaScript — addieren, subtrahieren, multiplizieren und dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können dazu führen, dass Berechnungen fehlschlagen.</li>
          <li>Umwandlung von Strings zu Zahlen mit <code>Number()</code>.</li>
          <li>Operatorenpriorität.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule Multiplikationstabellen und lange Division lernen mussten, und einige von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht sehr weit kommen können. Dies gilt besonders, wenn wir JavaScript (oder jede andere Sprache) programmieren lernen — so viel von dem, was wir tun, hängt davon ab, numerische Daten zu verarbeiten, neue Werte zu berechnen und so weiter, dass es Sie nicht überraschen wird zu erfahren, dass JavaScript eine voll ausgestattete Sammlung von Mathematikfunktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Zahlenarten

Im Programmieren ist selbst das bescheidene Dezimalsystem, das wir alle so gut kennen, komplizierter, als man denkt. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12,5 und 56,7786543.

Wir haben sogar unterschiedliche Zahlensysteme! Dezimal ist Basis 10 (d.h. es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprachebene von Computern; 0s und 1s.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie könnten diesen Zahlen begegnet sein, als Sie [Farben in CSS setzen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values).

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, stoppen Sie genau hier!** Zunächst werden wir uns in diesem Kurs nur auf Dezimalzahlen beschränken; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl Ganzzahlen als auch Dezimalzahlen — Sie ahnen es, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig vom Zahlentyp, mit dem Sie in JavaScript arbeiten, sie auf genau dieselbe Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Aber im Rahmen dieses Kurses werden wir uns nur um `Number`-Werte kümmern.

### Für mich sind das alles nur Zahlen

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Lassen Sie uns zuerst ein paar Variablen deklarieren und sie jeweils mit einer Ganzzahl und einer Gleitkommazahl initialisieren und dann die Variablennamen zurück eingeben, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlen werden ohne Anführungszeichen eingegeben — versuchen Sie es mit der Deklaration und Initialisierung von ein paar weiteren Variablen, die Zahlen enthalten, bevor Sie weitermachen.
3. Lassen Sie uns nun überprüfen, ob beide Originalvariablen vom selben Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückgegeben bekommen — dies macht es uns viel einfacher als wenn unterschiedliche Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz von dem alle Standardzahlen, die Sie in Ihrem JavaScript verwenden, repräsentiert werden, hat einige nützliche Methoden, die für das Manipulieren von Zahlen verfügbar sind. Wir gehen in diesem Artikel nicht im Detail darauf ein, da wir es als Einführung belassen wollten und nur die grundlegenden Essentials für jetzt behandeln; es lohnt sich jedoch, die Referenzseiten nach Objekten durchzusehen und mehr darüber zu erfahren, was verfügbar ist, sobald Sie dieses Modul ein paar Mal gelesen haben.

Zum Beispiel um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Umwandlung in Zahlendatentypen

Manchmal kann es vorkommen, dass Sie eine Zahl haben, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit anzustellen. Das passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — den String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor zu übergeben, um eine Zahlenversion desselben Wertes zu erhalten.

Geben Sie zum Beispiel diese Zeilen in Ihre Konsole ein:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies überprüfen, indem Sie folgendes eingeben:

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
      <td>Dividiert die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl
          in eine Anzahl von gleich großen Ganzzahlanteilen der rechten Zahl aufgeteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal geht und 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basisnummer</code> um die <code>Exponent</code>-Potenz,
        das heißt, die <code>Basisnummer</code> multipliziert mit sich selbst,
        <code>Exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal werden Zahlen, die in Berechnungen beteiligt sind, als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Sie können manchmal Potenzen sehen, die mit der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel in `Math.pow(7, 3)`, ist `7` die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` entspricht `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihre [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige einfache Beispiele Ihrer eigenen einzugeben, wie

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Berechnungen zu verwenden — die Variablen verhalten sich für die Zwecke der Berechnung genauso wie die von ihnen gehaltenen Werte. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zuletzt für diesen Abschnitt, versuchen Sie, einige komplexere Ausdrücke einzugeben, wie:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieser letzten Reihe von Berechnungen geben Ihnen möglicherweise nicht ganz das Ergebnis, das Sie erwartet haben; der untenstehende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorenpriorität

Schauen wir uns das letzte Beispiel von oben an, unter der Annahme, dass `num2` den Wert 50 und `num1` den Wert 10 hält (wie ursprünglich erklärt):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies lesen als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 dividiert durch 10 ergibt 6"_.

Aber der Browser macht _"10 dividiert durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Dies liegt an der **Operatorenpriorität** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung berechnet wird (im Programmieren als _Ausdruck_ bezeichnet). Die Operatorenpriorität in JavaScript ist dieselbe, wie in Mathematikklassen in der Schule gelehrt wird — Multiplikation und Division werden immer zuerst erledigt, dann Addition und Subtraktion (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorenpriorität außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandelt haben möchten. Um ein Ergebnis von 6 zu erhalten, könnten wir das so machen:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie unter [Operatorenpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrementoperatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert addieren oder subtrahieren. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren gemacht werden. Wir haben `++` in unserem "Zahlenraten"-Spiel in unserem [ersten Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variable hinzugefügt haben, um zu verfolgen, wie viele Vermutungen der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, damit in Ihrer Konsole zu spielen. Beachten Sie als Erstes, dass Sie diese nicht direkt auf eine Zahl anwenden können, was vielleicht seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, und nicht der Wert selbst. Das folgende wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie, dass ein Wert von 4 zurückgegeben wird — dies liegt daran, dass der Browser den aktuellen Wert zurückgibt, _dann_ die Variable inkrementiert. Sie können sehen, dass es inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

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
> Sie können den Browser dazu bringen, es in umgekehrter Reihenfolge zu tun — die Variable zu inkrementieren/dekrementieren und _dann_ den Wert zurückzugeben — indem Sie den Operator am Anfang statt am Ende der Variable setzen. Versuchen Sie die obigen Beispiele nochmals, benutzen Sie jedoch diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten, `=`, schon viele Male benutzt — er weist der Variablen auf der linken Seite den Wert auf der rechten Seite zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Es gibt jedoch einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu halten. Die gebräuchlichsten sind unten aufgeführt:

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
        Dividiert den Variablenwert auf der linken Seite durch den auf der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. Sehen Sie in jedem Fall nach, ob Sie den Wert erraten können, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auf der rechten Seite jedes Ausdrucks problemlos andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber das sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Größe einer Canvas-Box anpassen

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe eines Feldes zu ändern. Das Feld wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es ist nicht notwendig, sich jetzt darum zu kümmern, wie das funktioniert — konzentrieren Sie sich nur auf die Mathematik. Die Breite und Höhe der Box (in Pixel) werden durch die Variablen `x` und `y` definiert, die beide zunächst den Wert 50 erhalten.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im obigen editierbaren Codefeld gibt es zwei Zeilen, die mit einem Kommentar gekennzeichnet sind, auf die wir Sie bitten möchten, sie so zu aktualisieren, dass die Box auf bestimmte Größen wächst/schrumpft, wobei jeweils bestimmte Operatoren und/oder Werte verwendet werden. Versuchen wir die folgenden:

- Ändern Sie die Zeile, die `x` berechnet, so dass die Box weiterhin 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 250px breit ist, aber die 250 mit zwei Zahlen und dem Rest- (Modulo-) Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 150px hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.
  Vergessen Sie nicht zuerst, der Variable `y` einen Standardwert zuzuweisen (in einer separaten Zeile), damit die Addition wie erwartet funktioniert.

Machen Sie sich keine Sorgen, wenn Sie den Code total durcheinander bringen. Sie können jederzeit die Reset-Taste drücken, um die Dinge wieder zum Laufen zu bringen. Nachdem Sie alle obigen Fragen korrekt beantwortet haben, können Sie gerne weiter mit dem Code spielen oder Ihre eigenen Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal werden wir wahre/falsche Tests durchführen wollen und dann entsprechend dem Ergebnis dieses Tests handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                                    | Beispiel      |
| -------- | -------------------- | ------------------------------------------------------------------------ | ------------- |
| `===`    | Strikte Gleichheit   | Prüft, ob der linke und rechte Wert identisch miteinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Prüft, ob der linke und rechte Wert **nicht** identisch miteinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Prüft, ob der linke Wert kleiner als der rechte ist.                     | `10 < 6`      |
| `>`      | Größer als           | Prüft, ob der linke Wert größer als der rechte ist.                      | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Prüft, ob der linke Wert kleiner oder gleich dem rechten ist.            | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Prüft, ob der linke Wert größer oder gleich dem rechten ist.             | `5 >= 4`      |

> [!NOTE]
> Sie können einige Personen sehen, die `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind in JavaScript gültige Operatoren, unterscheiden sich jedoch von `===`/`!==`. Die erste Version testet, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die strengeren Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strengeren Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir deren Verwendung.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie sehen, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Auswahl treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Den richtigen Textlabel auf einem Button anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Nachricht "Spiel beendet" anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesnachricht, wenn das Spiel gewonnen wurde
- Die richtige saisonale Begrüßung anzeigen, je nachdem, welche Feiertagssaison es ist
- In eine Karte ein- oder auszoomen, je nach gewähltem Zoomlevel

Wir werden uns ansehen, wie man solche Logik codiert, wenn wir uns bedingte Anweisungen in einem zukünftigen Artikel ansehen. Schauen wir uns für den Moment ein kurzes Beispiel an:

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

Sie sehen den Gleichheitsoperator direkt innerhalb der `updateBtn()`-Funktion verwendet. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke den gleichen Wert haben — wir testen, ob der Textinhalt eines Buttons eine bestimmte Zeichenfolge enthält — aber es ist immer noch das gleiche Prinzip am Werk. Wenn der Button derzeit "Maschine starten" anzeigt, wenn er gedrückt wird, ändern wir sein Label in "Maschine stoppen" und aktualisieren das Label entsprechend. Wenn der Button derzeit "Maschine stoppen" anzeigt, wenn er gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Ein solcher Schalter, der zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Er wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus usw.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie über Zahlen in JavaScript wissen müssen, zumindest vorerst. Sie werden Zahlen immer wieder sehen, während Ihres gesamten JavaScript-Lernens, daher ist es eine gute Idee, das jetzt aus dem Weg zu räumen. Wenn Sie zu den Personen gehören, die Mathematik nicht genießen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Texte und wie JavaScript es uns ermöglicht, sie zu manipulieren, erkunden.

## Siehe auch

- [Nummern und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
