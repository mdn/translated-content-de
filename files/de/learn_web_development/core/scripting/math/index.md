---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 045c634a3f8e2a1aa8cb02f27a224f640917d1ad
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt des Kurses diskutieren wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich zu manipulieren, damit sie unseren Anforderungen entsprechen.

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
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können zu falschen Berechnungen führen.</li>
          <li>Konvertieren von Strings in Zahlen mit <code>Number()</code>.</li>
          <li>Operatorenpräzedenz.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule das Einmaleins und die lange Division lernen mussten, und einige von uns befinden sich irgendwo dazwischen. Aber keiner kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht weit kommen. Dies gilt besonders, wenn wir lernen, JavaScript (oder irgendeine andere Programmiersprache) zu programmieren — so vieles von dem, was wir tun, erfordert die Verarbeitung von numerischen Daten, die Berechnung neuer Werte und so weiter, dass es nicht überrascht, dass JavaScript eine voll ausgestattete Sammlung von Mathematikfunktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist selbst das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** sind Zahlen ohne Bruchteile. Sie können positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalstellen, z.B. 12.5 und 56.7786543.

Es gibt sogar verschiedene Zahlensysteme! Dezimal ist Basis 10 (bedeutet, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprachebene von Computern; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Möglicherweise sind Sie diesen Zahlen bereits begegnet, wenn Sie [Farben in CSS einstellen](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values).

**Bevor Sie anfangen, sich Sorgen zu machen, dass Ihr Gehirn schmilzt, hören Sie auf!** Zunächst werden wir uns auf Dezimalzahlen im gesamten Kurs beschränken; es ist selten, dass Sie auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für Ganzzahlen als auch für Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass, egal mit welchem Zahlentyp Sie in JavaScript arbeiten, Sie sie genau gleich handhaben.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses kümmern wir uns nur um `Number`-Werte.

### Es ist alles nur Zahlen für mich

Lasst uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zunächst deklarieren wir ein paar Variablen und initialisieren sie jeweils mit einer Ganzzahl und einem Float, dann geben Sie die Variablennamen wieder ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie weitermachen.
3. Jetzt prüfen wir, ob beide ursprünglichen Variablen vom gleichen Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die beiden folgenden Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` als Rückgabewert erhalten — das macht es uns viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz davon repräsentiert alle Standardzahlen, die Sie in Ihrem JavaScript verwenden, hat eine Reihe nützlicher Methoden, mit denen Sie Zahlen manipulieren können. Wir behandeln diese in diesem Artikel nicht im Detail, da wir ihn als Einführung und nur die wirklich grundlegenden Dinge behandeln wollten; jedoch lohnt es sich, nachdem Sie dieses Modul ein- oder zweimal durchgelesen haben, auf den Objektreferenzseiten mehr darüber zu erfahren, was verfügbar ist.

Zum Beispiel verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung zu Zahlen-Datentypen

Manchmal könnten Sie bei einer Zahl landen, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen mit ihr durchzuführen. Das passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden und der [Eingabetyp ist Text](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — indem Sie den Stringwert an den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben, um eine Zahlenversion desselben Werts zurückzugeben.

Zum Beispiel versuchen Sie, diese Zeilen in Ihre Konsole einzugeben:

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
      <td>Dividiert die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal auch Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in
          eine Anzahl von ganzzahligen Portionen der rechten Zahl geteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal passt,
          wobei 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponential</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die Potenz des <code>Exponenten</code>,
        das heißt, die <code>Basis</code>-Nummer wird mit sich selbst
        multipliziert, <code>Exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Zahlen, die an arithmetischen Operationen beteiligt sind, werden manchmal als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Manchmal sehen Sie Exponenten, die mit der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel, in `Math.pow(7, 3)`, ist `7` die Basis und `3` der Exponent, so dass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` entspricht `7**3`.

Wahrscheinlich müssen wir Ihnen nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der damit verbundenen Syntax testen. Versuchen Sie, die unten stehenden Beispiele in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache Beispiele selbst einzugeben, wie z.B.

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Rechnungen zu verwenden — die Variablen verhalten sich genau wie die Werte, die sie für die Berechnungen enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zuletzt für diesen Abschnitt versuchen Sie, einige komplexere Ausdrücke einzugeben, wie:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieser letzten Rechnung liefern vielleicht nicht das von Ihnen erwartete Ergebnis; der folgende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorenpräzedenz

Schauen wir uns das letzte Beispiel von oben an, wobei wir davon ausgehen, dass `num2` den Wert 50 und `num1` den Wert 10 hat (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch lesen Sie dies vielleicht als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Das liegt an der **Operatorenpräzedenz** — einige Operatoren werden vor anderen bei der Berechnung des Ergebnisses eines Ausdrucks angewendet (in der Programmierung als _Ausdruck_ bezeichnet). Die Operatorenpräzedenz in JavaScript ist die gleiche, wie sie in Mathematikklassen in der Schule gelehrt wird — multiplizieren und dividieren werden immer zuerst ausgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorenpräzedenz außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie explizit zuerst verarbeitet haben möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie, die vorherige Zeile in die Konsole einzugeben, um dies zu testen.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert addieren oder subtrahieren. Dies kann bequem mit den Inkrement-(`++`) und Dekrement-(`--`) Operatoren erfolgen. Wir haben `++` in unserem "Rate die Zahl"-Spiel in unserem [ersten Eintauchen in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash) Artikel verwendet, als wir 1 zu unserer `guessCount`-Variable hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer noch nach jeder Runde hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, damit in Ihrer Konsole zu spielen. Zunächst beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, nicht der Wert selbst. Folgendes wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine bestehende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt, _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut abrufen:

```js
num1;
```

Das Gleiche gilt für `--`: Versuchen Sie Folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu tun — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückgeben — indem Sie den Operator an den Anfang der Variablen anstatt an das Ende setzen. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten, `=`, schon oft verwendet — er weist der Variablen auf der linken Seite den auf der rechten Seite angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code sauberer und effizienter zu halten. Die gebräuchlichsten sind unten aufgelistet:

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
        Dividiert den Variablenwert auf der linken Seite durch den Wert auf der
        rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. Sehen Sie in jedem Fall, ob Sie den Wert erraten können, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auf der rechten Seite jedes Ausdrucks ohne weiteres andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Größenauswahl eines Canvas-Felds

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe eines Kastens zu ändern. Der Kasten wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es gibt keinen Grund, sich darum zu kümmern, wie dies funktioniert — konzentrieren Sie sich jetzt nur auf die Mathematik. Die Breite und Höhe des Kastens (in Pixeln) werden durch die Variablen `x` und `y` definiert, die jeweils zuerst einen Wert von 50 haben.

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

Öffnen Sie das obige Beispiel im MDN Playground, indem Sie die **"Play"**-Schaltfläche klicken, und folgen Sie dann der Liste der Anweisungen unten, um den Kasten auf bestimmte Größen wachsen/verkleinern zu lassen, indem Sie bestimmte Operatoren und/oder Werte in jedem Fall verwenden:

- Ändern Sie die Zeile, die `x` berechnet, so dass der Kasten immer noch `50px` breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass der Kasten `75px` hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass der Kasten `100px` breit ist, aber die 100 mit drei Zahlen und den Operatoren Subtraktion und Division berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass der Kasten `200px` hoch ist, aber die 200 mit den Zahlen 2 und `x`, und dem Multiplikationsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code durcheinanderbringen. Sie können jederzeit die Reset-Schaltfläche drücken und von vorne beginnen.

## Vergleichsoperatoren

Manchmal möchten wir wahre/falsche Tests durchführen und je nach Ergebnis des Tests entsprechend handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                    | Zweck                                                                       | Beispiel      |
| -------- | ----------------------- | --------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit      | Testet, ob die linken und rechten Werte identisch zueinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit    | Testet, ob die linken und rechten Werte **nicht** identisch zueinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als             | Testet, ob der linke Wert kleiner ist als der rechte.                       | `10 < 6`      |
| `>`      | Größer als              | Testet, ob der linke Wert größer ist als der rechte.                        | `10 > 20`     |
| `<=`     | Kleiner als oder gleich | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.              | `3 <= 2`      |
| `>=`     | Größer als oder gleich  | Testet, ob der linke Wert größer oder gleich dem rechten ist.               | `5 >= 4`      |

> [!NOTE]
> Sie sehen möglicherweise einige Leute, die `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind in JavaScript gültige Operatoren, unterscheiden sich jedoch von `===`/`!==`. Die früheren Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die letzteren, strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen tendenziell zu weniger Fehlern, weshalb wir empfehlen, diese zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie feststellen, dass sie alle `true`/`false`-Werte zurückgeben — die Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie uns erlauben, Entscheidungen in unserem Code zu treffen, und sie werden immer verwendet, wenn wir eine Art von Auswahl treffen möchten. Zum Beispiel können Booleans verwendet werden, um:

- Den richtigen Text auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist.
- Eine Spielende-Nachricht anzuzeigen, wenn ein Spiel vorbei ist oder eine Siegesnachricht, wenn das Spiel gewonnen wurde.
- Die korrekte saisonale Begrüßung anzuzeigen, je nachdem, welche Feiertagssaison es ist.
- Eine Karte ein- oder auszuzoomen, je nachdem, welcher Zoomstufe ausgewählt ist.

Wir werden uns ansehen, wie man solche Logik programmiert, wenn wir in einem zukünftigen Artikel bedingte Anweisungen untersuchen. Schauen wir uns jetzt ein kurzes Beispiel an:

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

Sie können den Gleichheitsoperator sehen, der direkt innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält — aber es ist immer noch das gleiche Prinzip am Werk. Wenn die Schaltfläche derzeit "Maschine starten" sagt, wenn sie gedrückt wird, ändern wir ihr Beschriftung auf "Maschine stoppen" und aktualisieren die Beschriftung entsprechend. Wenn die Schaltfläche derzeit "Maschine stoppen" sagt, wenn sie gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen umschaltet, wird allgemein als **Umschalter** bezeichnet. Er wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus, usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie über Zahlen in JavaScript wissen müssen, vorerst. Sie werden Zahlen immer wieder sehen, durch Ihr JavaScript-Lernen hindurch, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Menschen gehören, die Mathematik nicht mögen, können Sie sich trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text untersuchen und wie JavaScript uns erlaubt, ihn zu manipulieren.

## Siehe auch

- [Zahlen und Zeichenfolgen](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
