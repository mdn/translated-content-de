---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt des Kurses sprechen wir über Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich so zu manipulieren, dass sie unseren Zwecken dienen.

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
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können Berechnungen falsch machen.</li>
          <li>Konvertierung von Strings zu Zahlen mit <code>Number()</code>.</li>
          <li>Operatoren-Priorität.</li>
          <li>Inkrementierung und Dekrementierung.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Na gut, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule das Einmaleins und die lange Division lernen mussten, und einige von uns stehen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundsätzlicher Bestandteil des Lebens ist, ohne den wir nicht weit kommen. Dies gilt besonders, wenn wir lernen, JavaScript (oder irgendeine andere Sprache) zu programmieren — vieles von dem, was wir tun, beruht darauf, numerische Daten zu verarbeiten, neue Werte zu berechnen und so weiter. Sie werden nicht überrascht sein zu erfahren, dass JavaScript eine umfangreiche Reihe von mathematischen Funktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist selbst das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter als Sie vielleicht denken. Wir verwenden verschiedene Begriffe, um unterschiedliche Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** sind Zahlen ohne Bruchteil. Sie können positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, z.B. 12.5 und 56.7786543.

Wir haben sogar unterschiedliche Arten von Zahlensystemen! Dezimal ist Basis 10 (das bedeutet, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Vielleicht sind Sie diesen Zahlen schon einmal begegnet, wenn Sie [Farben in CSS einstellen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values).

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, halten Sie einfach an!** Zunächst einmal bleiben wir in diesem Kurs nur bei Dezimalzahlen; Sie werden selten das Bedürfnis haben, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für ganze Zahlen als auch für Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig von der Art der Zahlen, die Sie in JavaScript behandeln, sie auf genau die gleiche Weise handhaben.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses werden wir uns nur um `Number`-Werte kümmern.

### Für mich ist alles Zahlensache

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklertools JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst deklarieren wir ein paar Variablen und initialisieren sie mit einer ganzen Zahl und einer Gleitkommazahl und geben dann die Variablennamen zurück ein, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen zu deklarieren und zu initialisieren, bevor Sie fortfahren.
3. Jetzt überprüfen wir, ob beide ursprünglichen Variablen denselben Datentyp haben. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen so ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` erhalten — das macht es uns viel einfacher, als wenn unterschiedliche Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, von dem eine Instanz alle Standardzahlen darstellt, die Sie in Ihrem JavaScript verwenden, hat eine Reihe nützlicher Methoden, die Ihnen zur Verfügung stehen, um Zahlen zu manipulieren. Wir behandeln diese in diesem Artikel nicht im Detail, da wir ihn als Einführung und nur die grundlegenden notwendigen Grundlagen behalten wollten; jedoch ist es wert, auf die Objekt-Referenzseiten zu gehen und mehr darüber zu erfahren, was verfügbar ist, nachdem Sie dieses Modul ein paar Mal gelesen haben.

Zum Beispiel, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in Zahlentypen

Manchmal kann es vorkommen, dass Sie eine Zahl haben, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies tritt am häufigsten auf, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden, und der [Eingabetyp ist Text](/de/docs/Web/HTML/Element/input/text). Es gibt einen Weg, dieses Problem zu lösen — indem Sie den String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben, um eine nummerische Version desselben Wertes zurückzugeben.

Zum Beispiel versuchen Sie, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Am Ende erhalten Sie das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
      <td>Multipliziert zwei Zahlen.</td>
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
      <td>Rest (manchmal modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem die linke Zahl in eine Anzahl von ganzen Anteilen aufgeteilt wurde, die der rechten Zahl entspricht.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zwei Mal hineingeht, mit 2 Rest).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>zahl auf die <code>Exponent</code>-Potenz, das bedeutet, die <code>Basis</code>zahl wird mit sich selbst multipliziert, <code>Exponent</code> Mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was das gleiche ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Zahlen, die an arithmetischen Operationen beteiligt sind, werden manchmal als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Sie sehen möglicherweise manchmal Exponenten, die mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die sehr ähnlich funktioniert. Zum Beispiel in `Math.pow(7, 3)`, `7` ist die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` entspricht `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der beteiligten Syntax testen. Versuchen Sie die untenstehenden Beispiele in Ihrer [Entwicklertools JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache eigene Beispiele einzugeben, wie:

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und versuchen, diese in den Berechnungen zu verwenden – die Variablen verhalten sich genau wie die Werte, die sie für die Zwecke der Berechnung enthalten. Zum Beispiel:

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

Einige Teile dieser letzten Berechnungen könnten Ihnen nicht ganz das erwartete Ergebnis liefern; der folgende Abschnitt wird möglicherweise die Antwort darauf geben, warum.

### Operator-Priorität

Betrachten wir das letzte Beispiel von oben, angenommen `num2` hat den Wert 50 und `num1` hat den Wert 10 (wie ursprünglich oben angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies als _"50 plus 10 ergibt 60"_ lesen, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Doch der Browser führt zuerst _"10 geteilt durch 8 ergibt 1.25"_ aus, dann _"50 plus 1.25 plus 2 ergibt 53.25"_.

Dies liegt an der **Operator-Priorität** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet) berechnet wird. Die Operator-Priorität in JavaScript ist die gleiche wie in Mathematikstunden in der Schule — Multiplikation und Division werden immer zuerst durchgeführt, dann Addieren und Subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operator-Priorität überschreiben möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandeln möchten. Um ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie selbst.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie unter [Operator-Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eins zu einem numerischen Variablenwert addieren oder von ihm subtrahieren. Dies kann bequem mit den Inkrement-(`++`) und Dekrement-Operatoren (`--`) gemacht werden. Wir haben `++` in unserem "Rate die Zahl"-Spiel in unserem [ersten Eintauchen in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash) Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Zuerst ist zu beachten, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu und arbeiten nicht direkt auf dem Wert selbst. Das folgende wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Also können Sie nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut abrufen:

```js
num1;
```

Dasselbe gilt für `--` : versuchen Sie Folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu machen — die Variable inkrementieren/dekrementieren _und dann_ den Wert zurückgeben — indem Sie den Operator am Anfang der Variable statt am Ende platzieren. Versuchen Sie die obigen Beispiele erneut, aber diesmal verwenden Sie `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben bereits den einfachsten davon, `=`, oft verwendet — es weist der Variablen links den Wert zu, der rechts angegeben ist:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu machen. Die gebräuchlichsten sind unten aufgeführt:

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
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken Seite und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert auf der rechten Seite vom Variablenwert auf der linken Seite und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert auf der linken Seite mit dem Wert auf der rechten Seite und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert auf der linken Seite durch den Wert auf der rechten Seite und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. Versuchen Sie in jedem Fall, zu erraten, welchen Wert die zweite Zeile ergibt, bevor Sie sie eingeben.

Beachten Sie, dass Sie auf der rechten Seite jeder Gleichung problemlos auch andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Ändern der Größe einer Canvas-Box

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich darüber Sorgen zu machen, wie dies funktioniert — konzentrieren Sie sich für jetzt nur auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide anfänglich den Wert 50 erhalten.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im obigen editierbaren Code-Feld gibt es zwei Zeilen, die mit einem Kommentar markiert sind, die Sie aktualisieren sollen, um die Box auf bestimmte Größen zu bringen, wobei in jedem Fall bestimmte Operatoren und/oder Werte verwendet werden. Probieren wir Folgendes:

- Ändern Sie die Zeile, die x berechnet, sodass die Box weiterhin 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, sodass die Box 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die x berechnet, sodass die Box 250px breit ist, aber die 250 mit zwei Zahlen und dem Rest (Modulo)-Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, sodass die Box 150px hoch ist, aber die 150 mit drei Zahlen sowie den Subtraktions- und Division-Operatoren berechnet wird.
- Ändern Sie die Zeile, die x berechnet, sodass die Box 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, sodass die Box 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code völlig durcheinanderbringen. Sie können jederzeit die Reset-Taste drücken, um alles wieder in Ordnung zu bringen. Nachdem Sie alle oben genannten Fragen richtig beantwortet haben, spielen Sie ruhig weiter mit dem Code oder erstellen Sie eigene Herausforderungen.

## Vergleichsoperatoren

Manchmal möchten wir Tests machen, die wahr oder falsch ergeben, und dann je nach Ergebnis dieses Tests entsprechend handeln — hierfür verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                            | Beispiel      |
| -------- | -------------------- | ---------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Testet, ob die linken und rechten Werte identisch sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Testet, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Testet, ob der linke Wert kleiner als der rechte ist             | `10 < 6`      |
| `>`      | Größer als           | Testet, ob der linke Wert größer als der rechte ist              | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Testet, ob der linke Wert kleiner oder gleich dem rechten ist    | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Testet, ob der linke Wert größer oder gleich dem rechten ist     | `5 >= 4`      |

> [!NOTE]
> Sie sehen möglicherweise, dass einige Leute `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die erstgenannten Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die letzteren, strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen tendenziell zu weniger Fehlern, daher empfehlen wir Ihnen, diese zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie sehen, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie jedes Mal verwendet werden, wenn wir eine Art Auswahl treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Die korrekte Textbeschriftung auf einem Button anzuzeigen, je nachdem, ob eine Funktion aktiviert oder deaktiviert ist
- Eine Spiel-Ende-Nachricht anzuzeigen, wenn ein Spiel beendet ist, oder eine Sieg-Nachricht anzuzeigen, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Begrüßung anzuzeigen, abhängig davon, welche Feiertagssaison es ist
- Eine Karte ein- oder auszuzoomen, je nachdem, welcher Zoomlevel ausgewählt ist

Wir werden uns ansehen, wie man solche Logik codiert, wenn wir uns in einem zukünftigen Artikel mit Bedingten Anweisung beschäftigen. Für jetzt lassen Sie uns ein kurzes Beispiel ansehen:

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

Sie können den Gleichheitsoperator direkt innerhalb der `updateBtn()` Funktion sehen. In diesem Fall prüfen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir prüfen, ob der Textinhalt eines Buttons eine bestimmte Zeichenfolge enthält — aber es ist immer noch das gleiche Prinzip am Werk. Wenn der Button derzeit "Start machine" sagt, wenn er gedrückt wird, ändern wir seinen Text in "Stop machine" und aktualisieren die Beschriftung entsprechend. Wenn der Button derzeit "Stop machine" sagt, wenn er gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine Kontrolle, die zwischen zwei Zuständen wechselt, wird im Allgemeinen als **Toggle** bezeichnet. Es schaltet zwischen einem Zustand und einem anderen um — Licht an, Licht aus usw.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie derzeit über Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder verwenden, während Sie JavaScript lernen, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Menschen gehören, die Mathematik nicht mögen, können Sie sich freuen, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Texte untersuchen und wie JavaScript uns ermöglicht, sie zu manipulieren.

## Siehe auch

- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
