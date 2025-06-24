---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
short-title: Zahlen und Operatoren
slug: Learn_web_development/Core/Scripting/Math
l10n:
  sourceCommit: abe8cffb30e5153747bb027cb0b4e532981a093c
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}

An diesem Punkt im Kurs besprechen wir Mathematik in JavaScript — wie wir {{Glossary("Operator", "Operatoren")}} und andere Funktionen verwenden können, um Zahlen erfolgreich zu manipulieren und unsere Befehle auszuführen.

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
          <li>Strings in Zahlen umwandeln mit <code>Number()</code>.</li>
          <li>Operatorpriorität.</li>
          <li>Inkrementieren und Dekrementieren.</li>
          <li>Zuweisungs- und Vergleichsoperatoren.</li>
          <li>Grundlegende Methoden des Math-Objekts wie <code>Math.random()</code>, <code>Math.floor()</code> und <code>Math.ceil()</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule das Einmaleins und die lange Division lernen mussten, und einige von uns stehen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht sehr weit kommen können. Das gilt besonders, wenn wir lernen, JavaScript (oder irgendeine andere Sprache) zu programmieren — so viel von dem, was wir tun, basiert darauf, numerische Daten zu verarbeiten, neue Werte zu berechnen usw., dass Sie nicht überrascht sein werden zu lernen, dass JavaScript eine umfassende Reihe von Mathematikfunktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt kennen müssen.

### Arten von Zahlen

In der Programmierung ist schon das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchanteil. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Fließkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, z.B. 12.5 und 56.7786543.

Wir haben sogar unterschiedliche Zahlensysteme! Dezimal ist Basis 10 (bedeutet, dass es 0–9 in jeder Ziffer verwendet), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Ebene der Computersprache; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Diese Zahlen sind Ihnen vielleicht begegnet, als Sie [Farben in CSS](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units#hexadecimal_rgb_values) setzten.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, stoppen Sie sofort!** Wir werden für den Anfang einfach bei Dezimalzahlen bleiben; Sie werden nur selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript, im Gegensatz zu einigen anderen Programmiersprachen, nur einen Datentyp für Zahlen hat, sowohl Ganzzahlen als auch Dezimalzahlen — Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig davon, mit welcher Art von Zahlen Sie in JavaScript arbeiten, sie genau auf die gleiche Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt", "BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses werden wir uns nur um `Number`-Werte kümmern.

### Es sind alles nur Zahlen für mich

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklerwerkzeuge JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Lassen Sie uns zuerst ein paar Variablen deklarieren und sie mit einer Ganzzahl bzw. einem Float initialisieren, dann geben Sie die Variablennamen erneut ein, um zu überprüfen, dass alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben — versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie weitermachen.
3. Lassen Sie uns nun überprüfen, dass beide ursprünglichen Variablen vom gleichen Datentyp sind. In JavaScript gibt es einen Operator namens {{jsxref("Operators/typeof", "typeof")}}, der dies tut. Geben Sie die folgenden beiden Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Es sollte in beiden Fällen `"number"` zurückgegeben werden — das macht es uns viel einfacher, als wenn unterschiedliche Zahlen unterschiedliche Datentypen hätten und wir sie auf verschiedene Weise behandeln müssten. Puh!

### Nützliche Methoden des Number-Objekts

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz von dem alle Standardzahlen, die Sie in Ihrem JavaScript verwenden, darstellt, hat eine Reihe von nützlichen Methoden, die Ihnen zur Verfügung stehen, um Zahlen zu manipulieren. Wir decken diese nicht im Detail in diesem Artikel ab, weil wir es als Einführung halten wollten und nur die wirklich grundlegenden sogenannten Essentials behandeln; nachdem Sie jedoch dieses Modul ein paar Mal durchgelesen haben, lohnt es sich, auf die Objektreferenzseiten zu gehen und mehr darüber zu erfahren, was verfügbar ist.

Zum Beispiel, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.7665849587;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in Zahlen-Datentypen

Manchmal könnte es sein, dass Sie am Ende mit einer Zahl stehen, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn_web_development/Extensions/Forms)-Eingabefeld eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Reference/Elements/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen — indem Sie den String-Wert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben, um eine Zahlenversion des gleichen Wertes zurückzugeben.

Versuchen Sie beispielsweise, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie enden mit dem Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies überprüfen, indem Sie Folgendes eingeben:

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
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl ganzzahliger Portionen gleich der rechten Zahl geteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da drei zweimal in 8 passt, mit 2 übrig).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponenten</td>
      <td>
        Hebt eine <code>Basis</code>-Zahl auf die <code>Exponent</code>-Potenz,
        das heißt, die <code>Basis</code>-Zahl multipliziert mit sich selbst,
        <code>Exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (gibt <code>25</code> zurück, was das gleiche ist wie
        <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Manchmal wird in der Arithmetik von Zahlen als {{Glossary("Operand", "Operanden")}} gesprochen.

> [!NOTE]
> Sie können manchmal Exponenten sehen, die mit der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel, in `Math.pow(7, 3)`, ist `7` die Basis und `3` der Exponent, also ist das Ergebnis des Ausdrucks `343`. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wir müssen Ihnen wahrscheinlich nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der benötigten Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihre [Entwicklerwerkzeuge JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zuerst, einige einfache eigene Beispiele einzugeben, wie z.B.

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und versuchen, diese in den Berechnungen zu verwenden — die Variablen verhalten sich für die Zwecke der Berechnung genau wie die Werte, die sie halten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zuletzt in diesem Abschnitt, versuchen Sie, einige komplexere Ausdrücke einzugeben, wie z.B.:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Teile dieser letzten Berechnungssätze liefern möglicherweise nicht das Ergebnis, das Sie erwartet haben; der folgende Abschnitt könnte gut die Antwort darauf geben, warum.

### Operatorpriorität

Betrachten wir das letzte Beispiel von oben, wobei angenommen wird, dass `num2` den Wert 50 und `num1` den Wert 10 hat (wie ursprünglich angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie dies lesen als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 dividiert durch 10 ergibt 6"_.

Aber der Browser führt _"10 dividiert durch 8 ergibt 1.25"_, dann _"50 plus 1.25 plus 2 ergibt 53.25"_ aus.

Dies liegt an der **Operatorpriorität** — einige Operatoren werden angewendet, bevor andere angewendet werden, wenn das Ergebnis einer Berechnung (in der Programmierung als \_“Ausdruck” bezeichnet) berechnet wird. Die Operatorpriorität in JavaScript ist die gleiche, wie sie im Mathematikunterricht in der Schule gelehrt wird — multiplizieren und dividieren werden immer zuerst durchgeführt, dann addieren und subtrahieren (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorpriorität außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die Sie explizit zuerst bearbeiten möchten. Um also ein Ergebnis von 6 zu erhalten, könnten wir Folgendes tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie, die vorherige Zeile in die Konsole einzugeben, um dies zu testen.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Priorität finden Sie unter [Operatorpriorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert hinzufügen oder subtrahieren. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren durchgeführt werden. Wir haben `++` in unserem "Errate die Zahl"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn_web_development/Core/Scripting/A_first_splash) Artikel verwendet, als wir eins zu unserer `guessCount`-Variablen hinzugefügt haben, um nach jeder Runde zu verfolgen, wie viele Vermutungen der Benutzer noch hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, mit diesen in Ihrer Konsole zu spielen. Zuerst beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu und betreiben nicht direkt auf dem Wert selbst. Das Folgende führt zu einem Fehler:

```js example-bad
3++;
```

Also können Sie nur eine bestehende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie einen Wert von 4 zurückgegeben — das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Das gleiche gilt für `--`: Versuchen Sie das Folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es andersherum zu tun — die Variable zu inkrementieren/dekrementieren und _dann_ den Wert zurückzugeben — indem Sie den Operator am Anfang der Variable statt am Ende setzen. Versuchen Sie die obigen Beispiele erneut, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten davon, `=`, schon viele Male verwendet — er weist der Variablen auf der linken Seite den Wert zu, der auf der rechten Seite angegeben ist:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code übersichtlicher und effizienter zu gestalten. Die am häufigsten verwendeten sind unten aufgelistet:

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
        Dividiert den Variablenwert auf der linken Seite durch den Wert auf der rechten Seite und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie funktionieren. In jedem Fall sehen Sie, ob Sie den Wert erraten können, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie gerne andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Größe einer Canvas-Box ändern

In dieser Übung werden Sie einige Zahlen und Operatoren manipulieren, um die Größe einer Box zu ändern. Die Box wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es ist nicht nötig, sich darüber zu sorgen, wie dies funktioniert — konzentrieren Sie sich jetzt auf die Mathematik. Die Breite und Höhe der Box (in Pixeln) sind durch die Variablen `x` und `y` definiert, denen anfangs beide der Wert 50 zugewiesen ist.

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

Öffnen Sie das obige Beispiel im MDN Playground, indem Sie auf die **"Play"**-Schaltfläche klicken, und befolgen Sie dann die Liste der Anweisungen unten, um die Box auf bestimmte Größen wachsen/klein zu machen, indem Sie in jedem Fall bestimmte Operatoren und/oder Werte verwenden:

- Ändern Sie die Zeile, die `x` berechnet, so dass die Box noch `50px` breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box `75px` hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, so dass die Box `100px` breit ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionoperatoren berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, so dass die Box `200px` hoch ist, aber die 200 mit den Zahlen 2 und `x` und dem Multiplikationsoperator berechnet wird.

Keine Sorge, wenn Sie den Code durcheinanderbringen. Sie können jederzeit die Reset-Schaltfläche drücken und von vorne anfangen.

## Vergleichsoperatoren

Manchmal möchten wir wahr/falsch Tests durchführen und dann je nach Ergebnis dieses Tests entsprechend handeln — dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                             | Beispiel      |
| -------- | -------------------- | ----------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Prüft, ob die linken und rechten Werte identisch sind             | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Prüft, ob die linken und rechten Werte **nicht** identisch sind   | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Prüft, ob der linke Wert kleiner ist als der rechte               | `10 < 6`      |
| `>`      | Größer als           | Prüft, ob der linke Wert größer ist als der rechte                | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Prüft, ob der linke Wert kleiner oder gleich dem rechten Wert ist | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Prüft, ob der linke Wert größer oder gleich dem rechten Wert ist  | `5 >= 4`      |

> [!NOTE]
> Sie können manchmal sehen, dass `==` und `!=` in Tests für Gleichheit und Ungleichheit verwendet werden. Diese sind gültige Operatoren in JavaScript, unterscheiden sich jedoch von `===`/`!==`. Die früheren Versionen prüfen, ob die Werte gleich sind, nicht jedoch, ob die Datentypen der Werte gleich sind. Die strengeren Versionen prüfen die Gleichheit sowohl der Werte als auch der Datentypen. Die strikturen Versionen neigen dazu, weniger Fehler zu verursachen, daher empfehlen wir, diese zu verwenden.

Wenn Sie einige dieser Werte in einer Konsole eingeben, sehen Sie, dass sie alle `true`/`false`-Werte zurückgeben — diese Booleans, die wir im letzten Artikel erwähnten. Diese sind sehr nützlich, da sie uns erlauben, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir irgendeine Art von Auswahl treffen möchten. Zum Beispiel können Booleans verwendet werden, um:

- Den korrekten Text auf einem Button anzuzeigen, je nachdem, ob ein Feature ein- oder ausgeschaltet ist
- Eine Spiel-Nachricht anzeigen, wenn ein Spiel zu Ende ist, oder eine Sieg-Nachricht, wenn das Spiel gewonnen wurde
- Die korrekte saisonale Begrüßung anzeigen, je nachdem, welcher Feiertag gerade ist
- Eine Karte ein- oder auszoomen, abhängig von der gewählten Zoomstufe

Wir werden uns ansehen, wie man solche Logik kodiert, wenn wir uns in einem zukünftigen Artikel bedingte Anweisungen ansehen. Schauen wir uns für den Moment ein kurzes Beispiel an:

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

Sie können den Gleichheitsoperator innerhalb der `updateBtn()`-Funktion sehen. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben — wir prüfen, ob der Textinhalt eines Buttons eine bestimmte Zeichenfolge enthält — aber es ist immer noch dasselbe Prinzip am Werk. Sollte der Button beim Drücken "Start machine" anzeigen, ändern wir das Label in "Stop machine" und aktualisieren das Label entsprechend. Wenn der Button beim Drücken "Stop machine" anzeigt, ändern wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Es wechselt zwischen einem Zustand und einem anderen — Licht an, Licht aus, usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen abgedeckt, die Sie für den Moment über Zahlen in JavaScript wissen müssen. Sie werden Zahlen wieder und wieder verwenden, während Sie JavaScript lernen, also ist es eine gute Idee, dies jetzt aus dem Weg zu schaffen. Wenn Sie zu den Leuten gehören, die Mathematik nicht gerne mögen, können Sie Trost daraus ziehen, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text erkunden und wie JavaScript uns erlaubt, ihn zu manipulieren.

## Siehe auch

- [Zahlen und Zeichenfolgen](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting/Strings", "Learn_web_development/Core/Scripting")}}
