---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

Zu diesem Zeitpunkt des Kurses besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich zu manipulieren und unsere Wünsche auszuführen.

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
          <li>Operatorvorrang.</li>
          <li>Inkrementierung und Dekrementierung.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule die Einmaleins-Tafeln und lange Divisionen lernen mussten, und einige von uns befinden sich irgendwo dazwischen. Aber niemand kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht weit kommen. Dies gilt insbesondere, wenn wir JavaScript (oder jede andere Sprache) programmieren lernen — so viel von dem, was wir tun, erfordert die Verarbeitung numerischer Daten, das Berechnen neuer Werte usw., dass es Sie nicht überraschen wird, dass JavaScript eine voll ausgestattete Palette von Mathe-Funktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Typen von Zahlen

Im Programmieren ist selbst das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter als man denkt. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteil. Sie können positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (bedeutet, es verwendet 0–9 in jeder Stelle), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0s und 1s.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Stelle.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Stelle. Sie haben diese Zahlen möglicherweise schon einmal gesehen, als Sie [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) festgelegt haben.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie sofort auf!** Zum Start halten wir uns einfach an Dezimalzahlen in diesem Kurs; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass im Gegensatz zu einigen anderen Programmiersprachen JavaScript nur einen Datentyp für Zahlen hat, sowohl für Ganzzahlen als auch Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie, egal mit welcher Art von Zahlen Sie in JavaScript umgehen, Sie sie auf genau die gleiche Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses werden wir uns nur über `Number`-Werte Sorgen machen.

### Für mich sind das alles nur Zahlen

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklerwerkzeuge JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuallererst erklären wir ein paar Variablen und initialisieren sie mit einer Ganzzahl bzw. einem Float, und geben dann die Variablennamen erneut ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, einige weitere Variablen zu deklarieren und zu initialisieren, die Zahlen enthalten, bevor Sie weitermachen.
3. Lassen Sie uns nun überprüfen, ob beide ursprünglichen Variablen denselben Datentyp haben. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies macht. Geben Sie die folgenden beiden Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückerhalten — das macht es für uns viel einfacher, als wenn verschiedene Zahlen verschiedene Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz dessen, stellt alle Standardzahlen dar, die Sie in Ihrem JavaScript verwenden werden, und hat eine Reihe nützlicher Methoden, die Ihnen zur Verfügung stehen, um Zahlen zu manipulieren. Wir decken diese in diesem Artikel nicht im Detail ab, da wir es als Einführung halten und nur die wirklich grundlegenden Grundlagen vorerst abdecken möchten; nachdem Sie dieses Modul ein paar Mal gelesen haben, lohnt es sich jedoch, auf die Objekt-Referenzseiten zu gehen und mehr darüber zu lernen, was verfügbar ist.

Zum Beispiel, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung zu Zahlendatentypen

Manchmal könnte man eine Zahl haben, die als String-Typ gespeichert ist, was die Berechnung mit ihr erschwert. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Eingabefeld eingegeben werden und der [Eingabetyp text](/de/docs/Web/HTML/Element/input/text) ist. Es gibt eine Möglichkeit, dieses Problem zu lösen — indem der String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben wird, um eine Zahlenversion desselben Wertes zurückzugeben.

Versuchen Sie zum Beispiel, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743 statt 77, da `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in
          eine Anzahl ganzer Teile aufgeteilt haben, die der rechten Zahl
          entspricht.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal vorkommt und 2
          übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Hebt eine <code>Basis</code>-Zahl auf die Potenz des <code>Exponenten</code>
        an, das heißt, die <code>Basis</code>-Zahl multipliziert sich selbst,
        <code>Exponent</code> mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal sehen Sie Zahlen, die in Arithmetik verwendet werden, als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Möglicherweise sehen Sie manchmal Exponenten, die mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die sehr ähnlich funktioniert. Zum Beispiel ist in `Math.pow(7, 3)` `7` die Basis und `3` der Exponent, daher ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` entspricht `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der verwendeten Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihrer [Entwicklerwerkzeuge JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, eigene einfache Beispiele einzugeben, wie zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen innerhalb von Variablen zu deklarieren und zu initialisieren, und diese in den Berechnungen zu verwenden — die Variablen verhalten sich für die Zwecke der Berechnung genau wie die Werte, die sie halten. Zum Beispiel:

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

Teile dieses letzten Satzes an Berechnungen geben möglicherweise nicht das Ergebnis, das Sie erwartet haben; der folgende Abschnitt könnte die Antwort darauf liefern warum.

### Operatorvorrang

Sehen wir uns das letzte Beispiel von oben an, angenommen, `num2` hat den Wert 50 und `num1` hat den Wert 10 (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als menschliches Wesen könnten Sie dies als _"50 plus 10 ergibt 60"_ lesen, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Der Browser macht jedoch _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1.25 plus 2 ergibt 53.25"_.

Dies liegt an der **Operatorvorrang** — einige Operatoren werden angewendet, bevor andere bei der Berechnung des Ergebnisses einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet). Die Operatorvorrang in JavaScript ist dieselbe wie in Mathematikklassen in der Schule gelehrt wird — multiplizieren und dividieren wird immer zuerst durchgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorvorrang außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandelt haben möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir das tun:

```js
(num2 + num1) / (8 + 2);
```

Probieren Sie es aus und sehen Sie.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Vorrang finden Sie unter [Operatorvorrang](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eine Zahl zu oder von einem numerischen Variablenwert hinzufügen oder abziehen. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem "Errate die Zahl"-Spiel in unserem [ersten Ausflug in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jeder Runde noch hat.

```js
guessCount++;
```

Probieren wir diese in Ihrer Konsole aus. Zu Beginn beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, ohne auf den Wert selbst zu operieren. Das Folgende gibt einen Fehler zurück:

```js example-bad
3++;
```

Sie können also nur eine bestehende Variable inkrementieren. Probieren Sie dies aus:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, wird ein Wert von 4 zurückgegeben — dies liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass es inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

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
> Sie können den Browser dazu bringen, es andersherum zu tun — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückgeben — indem Sie den Operator am Anfang der Variablen statt am Ende platzieren. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten bereits unzählige Male verwendet, `=`, er weist der linken Variablen den rechts angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige kompliziertere Typen, die nützliche Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu halten. Die häufigsten sind unten aufgelistet:

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

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. In jedem Fall, versuchen Sie zu erraten, was der Wert sein wird, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auf der rechten Seite jedes Ausdrucks ganz einfach andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Größe einer Canvas-Box ändern

In dieser Übung werden Sie einige Zahlen und Operatoren manipulieren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich darüber Gedanken zu machen, wie das funktioniert — konzentrieren Sie sich jetzt einfach auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide zunächst einen Wert von 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[Im neuen Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im obigen bearbeitbaren Code-Fenster gibt es zwei Zeilen, die mit einem Kommentar gekennzeichnet sind, den Sie aktualisieren sollen, um die Box auf bestimmte Größen wachsen/zuschrumpfen zu lassen, mit bestimmten Operatoren und/oder Werten in jedem Fall. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die x berechnet, so dass die Box immer noch 50px breit ist, aber die 50 mithilfe der Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, so dass die Box 75px hoch ist, aber die 75 mithilfe der Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die x berechnet, so dass die Box 250px breit ist, aber die 250 mithilfe von zwei Zahlen und dem Rest- (Modulo) Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, so dass die Box 150px hoch ist, aber die 150 mithilfe von drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die x berechnet, so dass die Box 200px breit ist, aber die 200 mithilfe der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, so dass die Box 200px hoch ist, aber die 200 mithilfe der Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code völlig durcheinander bringen. Sie können jederzeit die Schaltfläche "Reset" drücken, um alles wiederherzustellen. Nachdem Sie alle oben genannten Fragen korrekt beantwortet haben, können Sie gerne mit dem Code weiter experimentieren oder Ihre eigenen Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir Wahr/Falsch-Tests durchführen und entsprechend dem Ergebnis dieses Tests handeln — hierzu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                        | Zweck                                                                         | Beispiel       |
| -------- | --------------------------- | ---------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit          | Testet, ob die linken und rechten Werte identisch zueinander sind             | `5 === 2 + 4` |
| `!==`    | Strikte Nicht-Gleichheit    | Testet, ob die linken und rechten Werte **nicht** identisch zueinander sind   | `5 !== 2 + 3` |
| `<`      | Kleiner als                 | Testet, ob der linke Wert kleiner als der rechte ist.                         | `10 < 6`      |
| `>`      | Größer als                  | Testet, ob der linke Wert größer als der rechte ist.                          | `10 > 20`     |
| `<=`     | Kleiner oder gleich         | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.                | `3 <= 2`      |
| `>=`     | Größer oder gleich          | Testet, ob der linke Wert größer oder gleich dem rechten ist.                 | `5 >= 4`      |

> [!NOTE]
> Sie werden einige Leute sehen, die `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die erstgenannten Versionen prüfen, ob die Werte gleich sind, prüfen jedoch nicht, ob die Datentypen der Werte gleich sind. Die letzteren, die strikten Versionen, testen sowohl die Gleichheit der Werte als auch ihrer Datentypen. Die strikten Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir, diese zu verwenden.

Wenn Sie einige dieser Werte in einer Konsole eingeben, werden Sie feststellen, dass sie alle `true`/`false`-Werte zurückgeben — jene Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Auswahl treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Das korrekte Textlabel auf einem Button anzuzeigen, je nachdem, ob ein Feature ein- oder ausgeschaltet ist
- Eine Game-Over-Nachricht anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesnachricht, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Begrüßung je nach Feiertagssaison anzuzeigen
- Eine Karte hinein- oder herauszuzoomen, je nachdem, welcher Zoomstufe ausgewählt wurde

Wir werden uns ansehen, wie man solche Logik programmiert, wenn wir in einem zukünftigen Artikel Bedingungsanweisungen behandeln. Schauen wir uns vorerst ein kurzes Beispiel an:

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

Sie können den Gleichheitsoperator sehen, der direkt innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt eines Buttons eine bestimmte Zeichenfolge enthält — aber es ist dennoch das gleiche Prinzip am Werk. Wenn der Button momentan "Start machine" sagt, wenn er gedrückt wird, ändern wir sein Label zu "Stop machine" und aktualisieren das Label entsprechend. Wenn der Button momentan "Stop machine" sagt, wenn er gedrückt wird, ändern wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Toggle** bezeichnet. Es wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie jetzt über Zahlen in JavaScript wissen müssen. Sie werden immer wieder Zahlen verwenden, während Ihres gesamten JavaScript-Lernens, also ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie einer der Menschen sind, die Mathematik nicht mögen, können Sie sich darüber freuen, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text erkunden und wie JavaScript uns ermöglicht, ihn zu manipulieren.

## Siehe auch

- [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
