---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt des Kurses sprechen wir über Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen verwenden können, um Zahlen erfolgreich nach unserem Willen zu manipulieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Zahlenoperationen in JavaScript — addieren, subtrahieren, multiplizieren und dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können Berechnungen falsch machen.</li>
          <li>Umwandlung von Strings in Zahlen mit <code>Number()</code>.</li>
          <li>Operator-Präzedenz.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, andere haben es gehasst, seit wir in der Schule das kleine Einmaleins und die lange Division lernen mussten, und einige von uns sitzen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht weit kommen. Dies gilt insbesondere, wenn wir lernen, JavaScript zu programmieren (oder jede andere Sprache) — so vieles, was wir tun, hängt davon ab, numerische Daten zu verarbeiten, neue Werte zu berechnen usw., dass Sie nicht überrascht sein werden zu erfahren, dass JavaScript eine voll ausgestattete Reihe von Mathematikfunktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Aspekte, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist sogar das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Integer** sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12,5 und 56,7786543.

Wir haben sogar verschiedene Zahlensysteme! Dezimal ist die Basis 10 (d.h. es verwendet 0–9 in jeder Stelle), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprachebene von Computern; 0er und 1er.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Stelle.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Stelle. Diese Zahlen sind Ihnen möglicherweise begegnet, wenn Sie [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) festlegen.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie genau hier auf!** Zunächst halten wir uns während dieses Kurses nur an Dezimalzahlen; Sie werden selten auf die Notwendigkeit stoßen, über andere Arten nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für ganze Zahlen als auch für Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie, egal welche Art von Zahlen Sie in JavaScript verarbeiten, sie genau auf die gleiche Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses konzentrieren wir uns nur auf `Number`-Werte.

### Alles ist Zahl für mich

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir brauchen. Geben Sie die unten aufgeführten Befehle in Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zunächst erklären wir ein paar Variablen und initialisieren sie mit einer Ganzzahl bzw. einem Float, dann geben Sie die Variablennamen ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen zu deklarieren und zu initialisieren, die Zahlen enthalten, bevor Sie weitermachen.
3. Überprüfen wir nun, ob beide unsere ursprünglichen Variablen denselben Datentyp haben. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückbekommen — das erleichtert uns die Sache erheblich im Vergleich dazu, wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie unterschiedlich behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, von dem eine Instanz alle Standardzahlen in Ihrem JavaScript darstellt, bietet eine Reihe von nützlichen Methoden, mit denen Sie Zahlen manipulieren können. Wir behandeln diese in diesem Artikel nicht im Detail, weil wir ihn als Einführung beibehalten und zunächst nur die wirklich grundlegenden Wesentlichen abdecken wollten; jedoch ist es nach dem Durchlesen dieses Moduls ein paar Mal sinnvoll, die Objekt-Referenzseiten aufzurufen und mehr darüber zu lernen, was verfügbar ist.

Um Ihre Zahl beispielsweise auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die Methode [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in Zahlendatentypen

Manchmal enden Sie möglicherweise mit einer Zahl, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies geschieht am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Input eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — indem der String-Wert an den Konstruktor [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) übergeben wird, um eine Zahlenversion desselben Werts zurückzugeben.

Beispielsweise können Sie diese Zeilen in Ihrer Konsole eingeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

```js
typeof myNumber;
```

Um die Berechnung zu korrigieren, können Sie das tun:

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
      <td>Rest (manchmal als Modulo bezeichnet)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in
          eine Anzahl von ganzzahligen Portionen geteilt haben, die der rechten
          Zahl entsprechen.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (ergibt 2, da drei in 8 zweimal passt, wobei 2
          übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponential</td>
      <td>
        Erhöht eine <code>Basis</code>zahl auf die Potenz des
        <code>Exponenten</code>, das heißt, die <code>Basis</code>zahl wird an
        sich selbst multipliziert, <code>Exponent</code> mal.
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
> Möglicherweise sehen Sie Exponenten manchmal mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt, die auf sehr ähnliche Weise funktioniert. In `Math.pow(7, 3)` ist `7` die Basis und `3` der Exponent. Somit ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der Syntax testen. Versuchen Sie, die unten stehenden Beispiele in Ihrer [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige einfache Beispiele selbst einzugeben, zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Summen zu verwenden — die Variablen verhalten sich genau wie die Werte, die sie für die Zwecke der Summe enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Versuchen Sie zuletzt in diesem Abschnitt, einige komplexere Ausdrücke einzugeben, zum Beispiel:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieses letzten Satzes von Berechnungen könnten Ihnen nicht ganz das Ergebnis liefern, das Sie erwartet hatten; der folgende Abschnitt könnte die Antwort darauf geben, warum.

### Operator-Präzedenz

Schauen wir uns das letzte Beispiel von oben an, gehen wir davon aus, dass `num2` den Wert 50 und `num1` den Wert 10 enthält (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als menschliches Wesen könnten Sie das so lesen: _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Das liegt an der **Operator-Präzedenz** — einige Operatoren werden angewendet, bevor andere bei der Berechnung des Ergebnisses einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet). Die Operator-Präzedenz in JavaScript ist die gleiche, wie sie in Mathematikklassen in der Schule gelehrt wird — multiplizieren und dividieren werden immer zuerst durchgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operator-Präzedenz überschreiben möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandelt haben möchten. Um ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie, die vorherige Zeile in die Konsole einzugeben, um dies zu testen.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operator-Präzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrementoperatoren

Manchmal möchten Sie einer numerischen Variablen wiederholt eins hinzufügen oder von einer variablen Zahl eins abziehen. Dies kann bequem mit den Inkrement- (`++`) und Dekrementoperatoren (`--`) geschehen. Wir haben `++` in unserem "Zahlen raten"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen addiert haben, um zu verfolgen, wie viele Versuche der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Versuchen wir, damit in Ihrer Konsole zu spielen. Beachten Sie zuerst, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einem Variablen einen neuen aktualisierten Wert zu, nicht dem Wert selbst. Das Folgende gibt einen Fehler zurück:

```js example-bad
3++;
```

Sie können also nur eine bestehende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie einen Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut ausgeben:

```js
num1;
```

Dasselbe gilt für `--`: Versuchen Sie Folgendes:

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser veranlassen, es umgekehrt zu machen — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückgeben — indem Sie den Operator am Anfang der Variablen anstelle des Endes platzieren. Versuchen Sie die obigen Beispiele erneut, verwenden Sie diesmal jedoch `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den einfachsten `=` bereits viele Male verwendet — es ordnet der Variablen auf der linken Seite den Wert zu, der auf der rechten Seite angegeben ist:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die praktische Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu gestalten. Die gebräuchlichsten sind unten aufgeführt:

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
        Fügt der Variablen auf der linken Seite den Wert auf der rechten Seite hinzu und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert auf der rechten Seite von der Variablen auf der linken Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert die Variablen auf der linken Seite mit dem Wert auf der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt die Variablen auf der linken Seite durch den Wert auf der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. In jedem Fall sehen Sie, ob Sie erraten können, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie durchaus auch andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [weitere Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Eine Canvas-Box dimensionieren

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es gibt keinen Grund, sich zu sorgen, wie das funktioniert — konzentrieren Sie sich jetzt nur auf die Mathematik. Die Breite und Höhe der Box (in Pixel) werden durch die Variablen `x` und `y` definiert, die beide zunächst den Wert 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

In dem oben bearbeitbaren Code-Feld gibt es zwei Zeilen, die mit einem Kommentar markiert sind und die Sie so aktualisieren sollten, dass die Box auf bestimmte Größen wächst/schrumpft, wobei bestimmte Operatoren und/oder Werte verwendet werden. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die `x` berechnet, so dass die Box immer noch 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 250px breit ist, aber die 250 mit zwei Zahlen und dem Rest- (Modulo-)Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 150px hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweiser berechnet wird. Vergessen Sie nicht, `y` zunächst einen Standardwert zuzuweisen (in einer separaten Zeile), damit die Addition wie erwartet funktioniert.

Keine Sorge, wenn Sie den Code völlig vermasseln. Sie können jederzeit auf die Schaltfläche "Zurücksetzen" drücken, um die Dinge wieder zum Laufen zu bringen. Nachdem Sie alle oben genannten Fragen richtig beantwortet haben, fühlen Sie sich frei, weiter mit dem Code zu spielen oder Ihre eigenen Herausforderungen zu erstellen.

## Vergleichsoperatoren

Manchmal wollen wir wahr/falsch-Tests durchführen und dann je nach Ergebnis dieses Tests entsprechend handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                                      | Beispiel      |
| -------- | -------------------- | -------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Prüft, ob die linken und rechten Werte identisch zueinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Prüft, ob die linken und rechten Werte **nicht** identisch zueinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Prüft, ob der linke Wert kleiner als der rechte ist                        | `10 < 6`      |
| `>`      | Größer als           | Prüft, ob der linke Wert größer als der rechte ist                         | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Prüft, ob der linke Wert kleiner oder gleich dem rechten ist               | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Prüft, ob der linke Wert größer oder gleich dem rechten ist                | `5 >= 4`      |

> [!NOTE]
> Sie könnten sehen, dass manche Leute `==` und `!=` in ihren Tests auf Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die ersteren Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die letzteren strengen Versionen testen sowohl die Gleichheit der Werte als auch ihrer Datentypen. Die strengen Versionen führen tendenziell zu weniger Fehlern, daher empfehlen wir Ihnen, sie zu verwenden.

Wenn Sie einige dieser Werte in einer Konsole eingeben, werden Sie feststellen, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Wahl treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Den richtigen Text auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Spielende-Nachricht anzeigen, wenn ein Spiel vorbei ist, oder eine Sieg-Nachricht, wenn das Spiel gewonnen wurde
- Die richtige saisonale Begrüßung anzeigen, je nachdem, welche Feiertagsperiode es ist
- Eine Karte je nach ausgewähltem Zoomlevel hinein- oder herauszuzoomen

Wir werden sehen, wie man solche Logiken codiert, wenn wir uns in einem zukünftigen Artikel mit konditionalen Anweisungen befassen. Schauen wir uns zunächst ein kurzes Beispiel an:

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

Sie können den Gleichheitsoperator direkt in der `updateBtn()`-Funktion sehen. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält — aber es ist immer noch dasselbe Prinzip am Werk. Wenn die Schaltfläche momentan "Maschine starten" anzeigt, wenn sie gedrückt wird, ändern wir ihr Etikett auf "Maschine stoppen", und aktualisieren das Etikett entsprechend. Wenn die Schaltfläche momentan "Maschine stoppen" anzeigt, wenn sie gedrückt wird, wechseln wir das Display wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Toggle** bezeichnet. Sie wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie über Zahlen in JavaScript wissen müssen, vorerst. Sie werden Zahlen immer wieder verwenden, durch Ihr ganzes JavaScript-Lernen hindurch, also ist es eine gute Idee, das hier und jetzt zu klären. Wenn Sie einer der Menschen sind, die Mathematik nicht genießen, können Sie Trost darin finden, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Texte erkunden und schauen, wie JavaScript uns erlaubt, sie zu manipulieren.

## Siehe auch

- [Zahlen und Zeichenfolgen](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
