---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt des Kurses besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen nutzen können, um Zahlen erfolgreich zu manipulieren, sodass sie unseren Anweisungen folgen.

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
          <li>Grundlegende Zahloperationen in JavaScript — addieren, subtrahieren, multiplizieren und dividieren.</li>
          <li>Zahlen sind keine Zahlen, wenn sie als Strings definiert sind, und können Berechnungen fehlerhaft machen.</li>
          <li>Strings mit <code>Number()</code> in Zahlen umwandeln.</li>
          <li>Operatorpriorität.</li>
          <li>Inkrementierung und Dekrementierung.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts, wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige haben Mathematik gehasst, seit wir in der Schule die Einmaleins-Tafeln und die langen Divisionen lernen mussten, und manche von uns befinden sich irgendwo dazwischen. Doch keiner von uns kann leugnen, dass Mathematik ein grundlegender Teil des Lebens ist, ohne den wir nicht sehr weit kommen. Dies gilt insbesondere, wenn wir JavaScript (oder eine andere Sprache) programmieren lernen — so viel von dem, was wir tun, hängt von der Verarbeitung numerischer Daten und der Berechnung neuer Werte ab, sodass es nicht überraschen sollte, dass JavaScript eine umfassende Sammlung von Mathematikfunktionen zur Verfügung stellt.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Zahlentypen

In der Programmierung ist sogar das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter als man denken könnte. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteile. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Zahlensysteme! Dezimal ist Basis 10 (das heißt, es verwendet 0–9 in jeder Ziffer), aber es gibt auch Systeme wie:

- **Binär** — Die niedrigste Sprachebene von Computern; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Möglicherweise sind Ihnen diese Zahlen schon begegnet, wenn Sie [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) einstellen.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie sofort auf damit!** Zum einen bleiben wir in diesem Kurs einfach bei Dezimalzahlen; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für Ganzzahlen als auch Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig vom Zahlentyp, den Sie in JavaScript verwenden, immer auf die gleiche Weise damit umgehen.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Für die Zwecke dieses Kurses konzentrieren wir uns jedoch nur auf `Number`-Werte.

### Für mich sind das alles nur Zahlen

Lassen Sie uns schnell mit ein paar Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zuerst deklarieren wir ein paar Variablen und initialisieren sie jeweils mit einer Ganzzahl und einer Gleitkommazahl, dann geben wir die Variablennamen wieder ein, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen zu deklarieren und zu initialisieren, die Zahlen enthalten, bevor Sie fortfahren.
3. Überprüfen wir nun, dass beide ursprünglichen Variablen vom gleichen Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der genau das tut. Geben Sie die folgenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückbekommen — das macht es für uns viel einfacher als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie unterschiedlich behandeln müssten. Puh!

### Nützliche Methoden des Number-Objekts

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, von dem eine Instanz alle Standardnummern repräsentiert, die Sie in Ihrem JavaScript verwenden, hat eine Reihe nützlicher Methoden, mit denen Sie Zahlen manipulieren können. Wir decken diese in diesem Artikel nicht im Detail ab, weil wir ihn als Einführung behalten und zunächst nur die wirklich grundlegenden wesentlichen Dinge behandeln wollten; sobald Sie dieses Modul ein paar Mal durchgelesen haben, lohnt es sich, auf die Objektreferenzseiten zu gehen und mehr darüber zu erfahren, was verfügbar ist.

Um beispielsweise Ihre Zahl auf eine festgelegte Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### In Zahlendatentypen umwandeln

Manchmal kann es vorkommen, dass Sie eine Zahl haben, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Eingabefeld eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — indem Sie den String-Wert an den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben, um eine Zahlversion desselben Wertes zurückzugeben.

Versuchen Sie zum Beispiel, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl ganzzahliger Teile, die der rechten Zahl entspricht, aufgeteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei in 8 zweimal enthalten ist und 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Hebt eine <code>Basis</code>-Zahl auf die <code>Exponent</code>-Potenz, das heißt, die <code>Basis</code>-Zahl wird <code>Exponent</code>-Mal mit sich selbst multipliziert.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was dasselbe ist wie <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal werden Zahlen, die in die Arithmetik involviert sind, als {{Glossary("Operand", "Operanden")}} bezeichnet.

> [!NOTE]
> Sie sehen möglicherweise manchmal Exponenten, die mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die in sehr ähnlicher Weise funktioniert. Zum Beispiel ist in `Math.pow(7, 3)` `7` die Basis und `3` der Exponent, daher ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` entspricht `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man einfache Mathematik durchführt, aber wir möchten Ihr Verständnis für die involvierte Syntax testen. Versuchen Sie, die folgenden Beispiele in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache Beispiele von Ihnen selbst einzugeben, wie zum Beispiel

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Rechnungen zu verwenden — die Variablen verhalten sich genau wie die Werte, die sie für Zwecke der Rechnung halten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Schließlich, für diesen Abschnitt, versuchen Sie, einige komplexere Ausdrücke einzugeben, wie:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieses letzten Satzes von Berechnungen könnten Ihnen möglicherweise nicht exakt das erwartete Ergebnis liefern; der folgende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorpriorität

Werfen wir einen Blick auf das letzte Beispiel von oben, wobei angenommen wird, dass `num2` den Wert 50 und `num1` den Wert 10 hat (wie oben ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies als _"50 plus 10 gleich 60"_, dann _"8 plus 2 gleich 10"_ und schließlich _"60 geteilt durch 10 gleich 6"_ lesen.

Aber der Browser berechnet _"10 geteilt durch 8 gleich 1,25"_, dann _"50 plus 1,25 plus 2 gleich 53,25"_.

Dies liegt an der **Operatorpriorität** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet) berechnet wird. Die Operatorpriorität in JavaScript ist dieselbe, wie sie im Mathematikunterricht in der Schule gelehrt wird — multiplizieren und dividieren werden immer zuerst durchgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorpriorität überschreiben möchten, können Sie Klammern um die Teile setzen, die Sie ausdrücklich zuerst behandeln möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir Folgendes tun:

```js
(num2 + num1) / (8 + 2);
```

Probieren Sie es aus und sehen Sie selbst.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie in [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Increment und decrement operators

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert hinzufügen oder subtrahieren. Dies kann bequem mit den Inkrement-(`++`) und Dekrement-(`--`)Operatoren durchgeführt werden. Wir haben `++` in unserem Spiel "Errate die Zahl" in unserem [ersten Sprung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Für den Anfang beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen, aktualisierten Wert zu, anstatt auf dem Wert selbst zu operieren. Das Folgende führt zu einem Fehler:

```js example-bad
3++;
```

Sie können also nur eine bestehende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie, dass ein Wert von 4 zurückgegeben wird — das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut abrufen:

```js
num1;
```

Das Gleiche gilt für `--` : versuchen Sie Folgendes

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu tun — die Variable _dann_ zurückzugeben, indem Sie den Operator vor dem Variablennamen anstelle des Endes setzen. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben bereits den grundlegendsten, `=`, viele Male verwendet — es weist die Variable auf der linken Seite dem Wert auf der rechten Seite zu:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bereitstellen, um Ihren Code ordentlicher und effizienter zu machen. Die gebräuchlichsten sind unten aufgelistet:

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
        Addiert den Wert auf der rechten Seite zum Variablenwert auf der linken Seite und gibt den neuen Variablenwert zurück.
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Zieht den Wert auf der rechten Seite vom Variablenwert auf der linken Seite ab und gibt den neuen Variablenwert zurück.
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

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. Versuchen Sie in jedem Fall, den Wert vorherzusagen, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie auf der rechten Seite jedes Ausdrucks auch andere Variablen verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Größe einer Canvas-Box anpassen

In dieser Übung werden Sie einige Zahlen und Operatoren manipulieren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas-API](/de/docs/Web/API/Canvas_API) gezeichnet. Es gibt keinen Grund, sich jetzt darüber Gedanken zu machen, wie dies funktioniert — konzentrieren Sie sich vorerst nur auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) werden durch die Variablen `x` und `y` definiert, die anfangs beide einen Wert von 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im bearbeitbaren Codefeld oben gibt es zwei Zeilen mit einem Kommentar, die Sie aktualisieren sollen, um die Box auf bestimmte Größen wachsen/schrumpfen zu lassen, indem Sie bestimmte Operatoren und/oder Werte in jedem Fall verwenden. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die `x` berechnet, sodass die Box weiterhin 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass die Box 250px breit ist, aber die 250 mit zwei Zahlen und dem Rest- (Modulo-) Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box 150px hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass die Box 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass die Box 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.
  Vergessen Sie nicht, `y` zuerst einen Standardwert zuzuweisen (in einer separaten Zeile), damit die Addition wie erwartet funktioniert.

Keine Sorge, wenn Sie den Code völlig durcheinander bringen. Sie können jederzeit die Zurücksetzen-Schaltfläche drücken, um alles wieder in Gang zu bringen. Nachdem Sie alle oben genannten Fragen korrekt beantwortet haben, fühlen Sie sich frei, weiter mit dem Code zu spielen oder eigene Herausforderungen zu erstellen.

## Vergleichsoperatoren

Manchmal möchten wir wahr/falsch Tests durchlaufen und dann je nach Ergebnis des Tests entsprechend handeln — dafür verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                           | Beispiel      |
| -------- | -------------------- | --------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Prüft, ob die linken und rechten Werte identisch sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Prüft, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Prüft, ob der linke Wert kleiner ist als der rechte.            | `10 < 6`      |
| `>`      | Größer als           | Prüft, ob der linke Wert größer ist als der rechte.             | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Prüft, ob der linke Wert kleiner oder gleich dem rechten ist.   | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Prüft, ob der linke Wert größer oder gleich dem rechten ist.    | `5 >= 4`      |

> [!NOTE]
> Sie werden vielleicht sehen, dass einige Leute `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind gültige Operatoren in JavaScript, unterscheiden sich jedoch von `===`/`!==`. Die erstgenannten Versionen prüfen, ob die Werte gleich sind, jedoch nicht, ob die Datentypen der Werte gleich sind. Die letzteren, strikten Versionen prüfen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikten Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir Ihnen, sie zu verwenden.

Wenn Sie einige dieser Werte in eine Konsole eingeben, werden Sie sehen, dass sie alle `true`/`false`-Werte zurückgeben — jene Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir irgendeine Art von Wahl treffen wollen. Zum Beispiel können Booleans verwendet werden, um:

- Den richtigen Text auf einer Schaltfläche anzuzeigen, abhängig davon, ob eine Funktion eingeschaltet oder ausgeschaltet ist,
- Eine Spiel-Über-Nachricht anzuzeigen, wenn ein Spiel beendet ist oder eine Siegmeldung, wenn das Spiel gewonnen wurde,
- Die korrekte saisonale Begrüßung anzuzeigen, abhängig davon, welche Feiertagssaison es ist,
- Eine Karte hinein- oder herauszuzoomen, abhängig davon, welcher Zoom-Level ausgewählt ist.

Wir werden sehen, wie man solche Logik codiert, wenn wir in einem zukünftigen Artikel bedingte Anweisungen betrachten. Für den Moment schauen wir uns ein kurzes Beispiel an:

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

Sie sehen den Gleichheitsoperator sofort innerhalb der `updateBtn()`-Funktion verwendet. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält — aber es ist dennoch dasselbe Prinzip am Werk. Wenn die Schaltfläche beim Drücken "Maschine starten" sagt, ändern wir ihr Label in "Maschine stoppen" und aktualisieren das Label entsprechend. Wenn die Schaltfläche beim Drücken "Maschine stoppen" sagt, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Sie wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus, usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Einige weitere Tests finden Sie, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie über Zahlen in JavaScript wissen müssen, zumindest für jetzt. Zahlen werden Ihnen immer wieder begegnen, während Sie JavaScript lernen, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Menschen gehören, die Mathematik nicht genießen, können Sie darauf hoffen, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir uns mit Text befassen und wie JavaScript es uns ermöglicht, ihn zu manipulieren.

## Siehe auch

- [Zahlen und Zeichenketten](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
