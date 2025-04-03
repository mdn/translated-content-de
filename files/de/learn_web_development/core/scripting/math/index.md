---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

Zu diesem Zeitpunkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen verwenden können, um Zahlen erfolgreich zu manipulieren und unsere Wünsche zu erfüllen.

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
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und dies kann Berechnungen verfälschen.</li>
          <li>Konvertieren von Strings in Zahlen mit <code>Number()</code>.</li>
          <li>Operatorenrangfolge.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Basis-Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns hassen Mathematik seit wir die Multiplikationstabellen und die lange Division in der Schule lernen mussten, und einige von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht weit kommen würden. Dies gilt besonders, wenn wir lernen, JavaScript (oder jede andere Sprache) zu programmieren — so viel von dem, was wir tun, beruht auf der Verarbeitung numerischer Daten, der Berechnung neuer Werte und so weiter, dass es Sie nicht überraschen wird zu erfahren, dass JavaScript eine umfassende Menge von Mathe-Funktionen zur Verfügung hat.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist selbst das bescheidene Dezimalsystem, das wir alle so gut kennen, komplizierter als man denken würde. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganze Zahlen** sind Zahlen ohne einen Bruchteil. Sie können positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Zahlensysteme! Dezimal ist Basis 10 (d.h. es verwendet 0–9 in jeder Ziffer), aber es gibt auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0en und 1en.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Diese Zahlen sind Ihnen vielleicht schon begegnet, als Sie [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) eingestellt haben.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie sofort auf!** Zum einen werden wir in diesem Kurs nur bei Dezimalzahlen bleiben; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl ganze Zahlen als auch Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie in JavaScript egal mit welchem Typ von Zahlen umgehen, sie genau gleich behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahltyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große ganze Zahlen verwendet wird. Aber für die Zwecke dieses Kurses werden wir uns nur um `Number`-Werte kümmern.

### Alles ist eine Zahl für mich

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in die [JavaScript-Konsole Ihrer Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Lassen Sie uns zuerst ein paar Variablen deklarieren und mit einer ganzen Zahl und einem Float initialisieren, und dann die Variablennamen zur Kontrolle eingeben, um sicher zu sein, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie weitermachen.
3. Überprüfen wir nun, ob beide unsere ursprünglichen Variablen vom gleichen Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden Zeilen wie angezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückbekommen — das macht es uns viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie unterschiedlich behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz, die alle standardmäßigen Zahlen repräsentiert, die Sie in Ihrem JavaScript verwenden, bietet eine Reihe von nützlichen Methoden, um Zahlen zu manipulieren. Wir behandeln diese in diesem Artikel nicht im Detail, da wir ihn als Einführung einfach halten wollten und uns zunächst nur auf die grundlegenden Grundlagen konzentrieren; aber nachdem Sie dieses Modul ein paar Mal durchgearbeitet haben, lohnt es sich, zu den Objektreferenzseiten zu gehen und mehr darüber zu lernen, was verfügbar ist.

Zum Beispiel, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in Zahl-Datentypen

Manchmal könnte es passieren, dass Sie eine Zahl als String-Typ gespeichert haben, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms) eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Element/input/text). Es gibt einen Weg, dieses Problem zu lösen — indem man den String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergibt, um eine Zahl-Version desselben Wertes zurückzugeben.

Versuchen Sie zum Beispiel, diese Zeilen in Ihre Konsole einzugeben:

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
      <td>Teilt die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Rest (manchmal Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl von Ganzzahl-Teilen, die der rechten Zahl entsprechen, geteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei zweimal in 8 geht und 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die <code>exponent</code>-Potenz, das heißt, die <code>Basis</code>-Zahl mit sich selbst multipliziert,
        <code>exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal werden Zahlen, die bei arithmetischen Operationen verwendet werden, als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Sie sehen möglicherweise manchmal Exponenten, die mit der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel in `Math.pow(7, 3)`, `7` ist die Basis und `3` ist der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` ist gleichwertig zu `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man einfache Mathematik macht, aber wir möchten Ihr Verständnis der beteiligten Syntax testen. Versuchen Sie, die folgenden Beispiele in Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache eigene Beispiele einzugeben, wie zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Summen zu verwenden — die Variablen verhalten sich genau wie die Werte, die sie für die Zwecke der Summe halten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zuletzt für diesen Abschnitt, versuchen Sie, einige komplexere Ausdrücke einzugeben, wie zum Beispiel:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Einige Teile dieses letzten Satzes von Berechnungen könnten Ihnen nicht ganz das Ergebnis geben, das Sie erwartet haben; der untenstehende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorenrangfolge

Sehen wir uns das letzte Beispiel von oben an, vorausgesetzt, dass `num2` den Wert 50 und `num1` den Wert 10 hält (wie ursprünglich oben angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie das als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 dividiert durch 10 ergibt 6"_ lesen.

Der Browser macht jedoch _"10 dividiert durch 8 ergibt 1.25"_, dann _"50 plus 1.25 plus 2 ergibt 53.25"_.

Dies liegt an der **Operatorenrangfolge** — einige Operatoren werden angewendet, bevor andere bei der Berechnung des Ergebnisses einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet). Die Operatorenrangfolge in JavaScript ist die gleiche, wie sie in Mathematikklassen in der Schule gelehrt wird — multiplizieren und teilen werden immer zuerst durchgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgeführt).

Wenn Sie die Operatorenrangfolge außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandelt haben möchten. Um ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie unter [Operatorenrangfolge](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert hinzufügen oder subtrahieren. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem "Zahlen raten"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variable hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer noch nach jedem Zug hat.

```js
guessCount++;
```

Versuchen wir, damit in Ihrer Konsole zu spielen. Zunächst beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, anstatt auf den Wert selbst zu wirken. Folgendes wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie einen Wert von 4 zurückgegeben — dies liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass es inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--` : versuchen Sie folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es anders herum zu machen — inkrementieren/dekrementieren der Variablen _dann_ den Wert zurückgeben — indem Sie den Operator an den Anfang der Variablen stellen, anstatt ans Ende. Versuchen Sie die obigen Beispiele erneut, verwenden Sie diesmal jedoch `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben bereits den grundlegendsten, `=`, unzählige Male verwendet — er weist der Variablen auf der linken Seite den rechts angegebenen Wert zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu gestalten. Die gebräuchlichsten sind unten aufgeführt:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Zweck</th>
      <th scope="col">Beispiel</th>
      <th scope="col">Kurzform für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+=</code></td>
      <td>Additionszuweisung</td>
      <td>
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert auf der rechten Seite vom Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert auf der linken Seite mit dem Wert auf der rechten Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert auf der linken Seite durch den Wert auf der rechten Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie funktionieren. In jedem Fall, sehen Sie, ob Sie erraten können, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie problemlos andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Größe eines Canvas-Fensters anpassen

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe eines Fensters zu ändern. Das Fenster wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Sie müssen sich keine Sorgen machen, wie das funktioniert — konzentrieren Sie sich vorerst auf die Mathematik. Die Breite und Höhe des Fensters (in Pixeln) werden durch die Variablen `x` und `y` definiert, denen anfänglich beide ein Wert von 50 zugeordnet wird.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im bearbeitbaren Code-Feld oben gibt es zwei Zeilen mit einem Kommentar, die aktualisiert werden sollen, um das Fenster zu bestimmten Größen zu ändern, unter Verwendung bestimmter Operatoren und/oder Werte in jedem Fall. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die x berechnet, sodass das Fenster immer noch 50px breit ist, aber die 50 anhand der Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, sodass das Fenster 75px hoch ist, aber die 75 anhand der Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die x berechnet, sodass das Fenster 250px breit ist, aber die 250 mit zwei Zahlen und dem Rest- (Modulo-) Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, sodass das Fenster 150px hoch ist, aber die 150 mit drei Zahlen und dem Subtraktions- und Divisionsoperator berechnet wird.
- Ändern Sie die Zeile, die x berechnet, sodass das Fenster 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, sodass das Fenster 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet werden.

Keine Sorge, wenn Sie den Code völlig durcheinander bringen. Sie können immer die Reset-Taste drücken, um die Dinge wieder in Ordnung zu bringen. Wenn Sie alle oben genannten Fragen korrekt beantwortet haben, zögern Sie nicht, den Code weiter zu erkunden oder Ihre eigenen Herausforderungen zu erstellen.

## Vergleichsoperatoren

Manchmal möchten wir wahre/falsche Tests durchführen und dann je nach Ergebnis dieses Tests entsprechend handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                                      | Beispiel      |
| -------- | -------------------- | -------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Prüft, ob die linken und rechten Werte identisch zueinander sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Prüft, ob die linken und rechten Werte **nicht** identisch zueinander sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Prüft, ob der linke Wert kleiner ist als der rechte.                       | `10 < 6`      |
| `>`      | Größer als           | Prüft, ob der linke Wert größer ist als der rechte.                        | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Prüft, ob der linke Wert kleiner oder gleich dem rechten ist.              | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Prüft, ob der linke Wert größer oder gleich dem rechten ist.               | `5 >= 4`      |

> [!NOTE]
> Sie könnten sehen, dass einige Leute `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind gültige Operatoren in JavaScript, unterscheiden sich jedoch von `===`/`!==`. Die ersten Versionen testen, ob die Werte dieselben sind, aber nicht, ob die Werte-Datentypen dieselben sind. Die letzteren, strikten Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen tendenziell zu weniger Fehlern, daher empfehlen wir Ihnen, sie zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie feststellen, dass sie alle `true`/`false`-Werte zurückgeben — die Booleschen Werte, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Wahl treffen möchten. Zum Beispiel können Boolesche Werte verwendet werden, um:

- Den richtigen Text auf einer Schaltfläche anzuzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Spielende- oder Sieg-Nachricht anzuzeigen, je nachdem, ob ein Spiel vorbei ist oder gewonnen wurde
- Den richtigen saisonalen Gruß anzuzeigen, abhängig davon, welche Festtagssaison es ist
- Eine Karte je nach ausgewähltem Zoomlevel herein- oder herauszuzoomen

Wir werden sehen, wie man solche Logik kodiert, wenn wir uns in einem zukünftigen Artikel bedingte Anweisungen ansehen. Für den Moment lassen Sie uns ein kurzes Beispiel betrachten:

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

Sie sehen den Gleichheitsoperator, der direkt innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke den gleichen Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält — aber es ist immer noch das gleiche Prinzip. Wenn die Schaltfläche beim Drücken "Start machine" sagt, ändern wir ihr Label auf "Stop machine" und aktualisieren das Label entsprechend. Wenn die Schaltfläche beim Drücken "Stop machine" sagt, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Sie wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Math](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegende Information behandelt, die Sie jetzt über Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder sehen, während Ihrer gesamten JavaScript-Ausbildung, also ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu denjenigen gehören, die Mathematik nicht mögen, können Sie sich trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text und die Möglichkeiten untersuchen, die JavaScript bietet, um ihn zu manipulieren.

## Siehe auch

- [Zahlen und Zeichenfolgen](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
