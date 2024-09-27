---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
slug: Learn/JavaScript/First_steps/Math
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

An diesem Punkt des Kurses besprechen wir Mathematik in JavaScript — wie wir [Operatoren](/de/docs/Glossary/Operator) und andere Funktionen verwenden können, um Zahlen erfolgreich zu manipulieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen der Mathematik in JavaScript zu gewinnen.</td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Einige von uns mögen Mathematik, einige von uns haben Mathematik gehasst, seit wir in der Schule die Multiplikationstabellen und die lange Division lernen mussten, und einige von uns befinden sich irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein wesentlicher Bestandteil des Lebens ist, ohne den wir nicht sehr weit kommen. Dies gilt insbesondere, wenn wir lernen, JavaScript (oder jede andere Programmiersprache) zu programmieren – so viel von dem, was wir tun, basiert auf der Verarbeitung numerischer Daten, der Berechnung neuer Werte usw., dass Sie nicht überrascht sein werden zu erfahren, dass JavaScript eine voll ausgestattete Reihe von mathematischen Funktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Arten von Zahlen

In der Programmierung ist selbst das bescheidene Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden verschiedene Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z.B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) haben Dezimalpunkte und Dezimalstellen, z.B. 12.5 und 56.7786543.

Wir haben sogar verschiedene Arten von Zahlensystemen! Dezimal ist Basis 10 (das heißt, es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprache der Computer; 0 und 1.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen möglicherweise bereits begegnet, als Sie [Farben in CSS](/de/docs/Learn/CSS/Building_blocks/Values_and_units#hexadecimal_rgb_values) eingestellt haben.

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie einfach auf!** Zunächst einmal bleiben wir in diesem Kurs nur bei Dezimalzahlen; Es ist selten, dass Sie jemals über andere Arten nachdenken müssen.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für ganze Zahlen als auch für Dezimalzahlen – Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie unabhängig davon, welche Art von Zahlen Sie in JavaScript verwenden, alle auf die gleiche Art und Weise behandeln.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, [BigInt](/de/docs/Glossary/BigInt), der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses kümmern wir uns nur um `Number`-Werte.

### Für mich sind das alles Zahlen

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwickler-Tools-JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Zunächst einmal deklarieren wir ein paar Variablen und initialisieren sie mit einer Ganzzahl und einem Float, geben dann die Variablennamen wieder ein, um zu prüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben – versuchen Sie, ein paar weitere Variablen mit Zahlen zu deklarieren und zu initialisieren, bevor Sie weitermachen.
3. Überprüfen wir nun, ob beide ursprünglichen Variablen vom gleichen Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die folgenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   In beiden Fällen sollten Sie `"number"` zurückerhalten – das macht uns das Leben viel einfacher, als wenn verschiedene Zahlen unterschiedliche Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz, die alle Standardzahlen darstellt, die Sie in Ihrem JavaScript verwenden werden, hat eine Reihe nützlicher Methoden, mit denen Sie Zahlen manipulieren können. Wir gehen hier nicht im Detail darauf ein, da wir diesen Artikel als einfache Einführung halten wollten und vorerst nur die wirklich grundlegenden Grundlagen abdecken möchten; Sobald Sie jedoch dieses Modul ein paar Mal gelesen haben, lohnt es sich, zu den Objektreferenzseiten zu gehen und mehr darüber zu erfahren, was verfügbar ist.

Um beispielsweise Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)-Methode. Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Konvertierung in Zahlendatentypen

Manchmal haben Sie vielleicht eine Zahl, die als Zeichenkette gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies tritt am häufigsten auf, wenn Daten in ein [Formular](/de/docs/Learn/Forms)-Eingabefeld eingegeben werden und der [Eingabetyp Text ist](/de/docs/Web/HTML/Element/input/text). Es gibt eine Möglichkeit, dieses Problem zu lösen – indem Sie den Zeichenkettenwert in den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor übergeben, um eine Zahlenversion desselben Werts zurückzugeben.

Versuchen Sie beispielsweise, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, da `myNumber` tatsächlich als Zeichenkette definiert ist. Sie können dies testen, indem Sie Folgendes eingeben:

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
      <td>Addiert zwei Zahlen.</td>
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
      <td>Dividiert die linke Zahl durch die rechte.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td>Restwert (manchmal auch Modulo genannt)</td>
      <td>
        <p>
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl von ganzzahligen Portionen aufgeteilt haben, die der rechten Zahl entsprechen.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (gibt 2 zurück, da die drei zweimal in 8 geht und 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>basis</code>-Zahl auf die <code>exponent</code>-Potenz, das heißt, die <code>basis</code>-Zahl multipliziert mit sich selbst, <code>exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (ergibt <code>25</code>, was dasselbe ist wie <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Zahlen, die an arithmetischen Operationen beteiligt sind, werden manchmal als [Operanden](/de/docs/Glossary/Operand) bezeichnet.

> [!NOTE]
> Sie sehen manchmal Exponenten, die mit der älteren Methode {{jsxref("Math.pow()")}} ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Zum Beispiel ist in `Math.pow(7, 3)` `7` die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wir brauchen Ihnen wahrscheinlich nicht zu zeigen, wie man grundlegende Mathematik macht, aber wir würden gerne Ihr Verständnis für die involvierte Syntax testen. Versuchen Sie, die folgenden Beispiele in Ihre [Entwickler-Tools-JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige einfache Beispiele Ihrer eigenen einzugeben, z.B.

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Berechnungen zu verwenden – die Variablen verhalten sich für die Zwecke der Berechnung genauso wie die Werte, die sie enthalten. Zum Beispiel:

   ```js
   const num1 = 10;
   const num2 = 50;
   9 * num1;
   num1 ** 3;
   num2 / num1;
   ```

3. Zuletzt in diesem Abschnitt versuchen Sie, einige komplexere Ausdrücke einzugeben, wie z.B.:

   ```js
   5 + 10 * 3;
   (num2 % 9) * num1;
   num2 + num1 / 8 + 2;
   ```

Einige Teile dieser letzten Berechnungen geben Ihnen möglicherweise nicht ganz das erwartete Ergebnis; der folgende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorpräzedenz

Schauen wir uns das letzte Beispiel von oben an, wobei angenommen wird, dass `num2` den Wert 50 und `num1` den Wert 10 hat (wie ursprünglich angegeben oben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch könnten Sie das lesen als _"50 plus 10 ergibt 60"_, dann _"8 plus 2 ergibt 10"_, und schließlich _"60 geteilt durch 10 ergibt 6"_.

Aber der Browser macht _"10 geteilt durch 8 ergibt 1,25"_, dann _"50 plus 1,25 plus 2 ergibt 53,25"_.

Dies liegt an der **Operatorpräzedenz** – einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung (in der Programmierung als _Ausdruck_ bezeichnet) berechnet wird. Die Operatorpräzedenz in JavaScript ist dieselbe wie sie in Mathematikstunden in der Schule gelehrt wird – Multiplikation und Division werden immer zuerst durchgeführt, dann Addition und Subtraktion (die Berechnung wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorpräzedenz außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die ausdrücklich zuerst behandelt werden sollen. Um also ein Ergebnis von 6 zu erhalten, könnten wir das tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie selbst.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operatorpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Zähler- und Entzähler-Operatoren

Manchmal möchten Sie wiederholt eins zu oder von einem numerischen Variablenwert addieren oder subtrahieren. Dies kann bequem mit den Inkrementierungs- (`++`) und Dekrementierungs- (`--`) Operatoren erledigt werden. Wir haben `++` in unserem "Rate die Zahl"-Spiel in unserem [ersten Einstieg in JavaScript](/de/docs/Learn/JavaScript/First_steps/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um nach jedem Zug nachzuverfolgen, wie viele Versuche der Benutzer noch hat.

```js
guessCount++;
```

Lassen Sie uns versuchen, damit in Ihrer Konsole zu spielen. Zunächst beachten Sie, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, nicht der Wert selbst wird verändert. Das folgende wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine vorhandene Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Merkwürdigkeit Nummer 2! Wenn Sie dies tun, sehen Sie einen Wert von 4 zurückgegeben – das liegt daran, dass der Browser den aktuellen Wert zurückgibt _und dann_ die Variable inkrementiert. Sie können sehen, dass es inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--`: versuchen Sie das folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es andersherum zu machen – die Variable inkrementieren/dekrementieren _und dann_ den Wert zurückgeben – indem Sie den Operator am Anfang der Variablen anstatt am Ende verwenden. Versuchen Sie die obigen Beispiele noch einmal, aber verwenden Sie diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben bereits die einfachste von ihnen, `=`, oft verwendet – sie weist die Variable auf der linken Seite dem Wert zu, der auf der rechten Seite angegeben ist:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
```

Aber es gibt einige komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu gestalten. Die häufigsten sind unten aufgeführt:

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
        Fügt den Wert auf der rechten Seite dem Variablenwert auf der linken Seite hinzu und gibt den neuen Variablenwert zurück
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
        Dividiert den Variablenwert auf der linken Seite durch den Wert auf der rechten Seite und gibt den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um ein Gefühl dafür zu bekommen, wie sie arbeiten. In jedem Fall sehen Sie, ob Sie erraten können, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie problemlos andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```

> [!NOTE]
> Es gibt viele [andere Zuweisungsoperatoren verfügbar](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber das sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Anpassung der Größe eines Canvas-Felds

In dieser Übung werden Sie einige Zahlen und Operatoren manipulieren, um die Größe eines Feldes zu ändern. Das Feld wird mit einer Browser-API namens [Canvas API](/de/docs/Web/API/Canvas_API) gezeichnet. Es besteht keine Notwendigkeit, sich darüber Gedanken zu machen, wie dies funktioniert – konzentrieren Sie sich jetzt nur auf die Mathematik. Die Breite und Höhe des Feldes (in Pixeln) werden durch die Variablen `x` und `y` definiert, die beide zunächst den Wert 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[Im neuen Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

In dem oben editierbaren Codefeld gibt es zwei Zeilen, die mit einem Kommentar markiert sind, den wir aktualisieren möchten, damit das Feld auf bestimmte Größen wächst/verkleinert wird, wobei in jedem Fall bestimmte Operatoren und/oder Werte verwendet werden. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die `x` berechnet, sodass das Feld weiterhin 50px breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass das Feld 75px hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass das Feld 250px breit ist, aber die 250 mit zwei Zahlen und dem Restwertoperator (Modulo) berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass das Feld 150px hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die `x` berechnet, sodass das Feld 200px breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die `y` berechnet, sodass das Feld 200px hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code völlig durcheinanderbringen. Sie können immer auf die Schaltfläche Zurücksetzen drücken, um die Dinge wieder in Ordnung zu bringen. Sobald Sie alle oben genannten Fragen korrekt beantwortet haben, können Sie gerne weiter mit dem Code spielen oder eigene Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir True/False-Tests durchführen und dann je nach Ergebnis dieses Tests entsprechend handeln – dafür verwenden wir **Vergleichsoperatoren**.

| Operator | Name                 | Zweck                                                            | Beispiel      |
| -------- | -------------------- | ---------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit   | Testet, ob die linken und rechten Werte identisch sind           | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit | Testet, ob die linken und rechten Werte **nicht** identisch sind | `5 !== 2 + 3` |
| `<`      | Kleiner als          | Testet, ob der linke Wert kleiner als der rechte ist.            | `10 < 6`      |
| `>`      | Größer als           | Testet, ob der linke Wert größer als der rechte ist.             | `10 > 20`     |
| `<=`     | Kleiner oder gleich  | Testet, ob der linke Wert kleiner oder gleich dem rechten ist.   | `3 <= 2`      |
| `>=`     | Größer oder gleich   | Testet, ob der linke Wert größer oder gleich dem rechten ist.    | `5 >= 4`      |

> [!NOTE]
> Sie werden möglicherweise sehen, dass einige Leute `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Dies sind gültige Operatoren in JavaScript, aber sie unterscheiden sich von `===`/`!==`. Die zuerst genannten Versionen testen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die strikt Versionen testen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikt Versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir, sie zu verwenden.

Wenn Sie versuchen, einige dieser Werte in einer Konsole einzugeben, werden Sie sehen, dass sie alle `true`/`false` Werte zurückgeben – die Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art Entscheidung treffen möchten. Zum Beispiel können Booleans verwendet werden, um:

- Das richtige Textetikett auf einer Schaltfläche anzuzeigen, je nachdem ob eine Funktion ein- oder ausgeschaltet ist
- Eine Spiel-über-Meldung anzuzeigen, wenn ein Spiel vorbei ist, oder eine Siegesmeldung, wenn das Spiel gewonnen wurde
- Die richtige saisonale Begrüßung anzuzeigen, abhängig davon, welche Feiertagssaison es ist
- Eine Karte je nach ausgewähltem Zoom-Level hinein- oder herauszuzoomen

Wir werden uns ansehen, wie man solche Logik kodiert, wenn wir in einem zukünftigen Artikel bedingte Anweisungen betrachten. Lassen Sie uns vorerst ein kurzes Beispiel ansehen:

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

Sie können sehen, dass der Gleichheitsoperator direkt innerhalb der Funktion `updateBtn()` verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke den gleichen Wert haben – wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenfolge enthält – aber es ist immer noch das gleiche Prinzip im Einsatz. Wenn die Schaltfläche beim Drücken "Maschine starten" anzeigt, ändern wir ihr Label in "Maschine stoppen" und aktualisieren die Bezeichnung entsprechend. Wenn die Schaltfläche beim Drücken "Maschine stoppen" anzeigt, wechseln wir wieder.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird im Allgemeinen als **Toggle** bezeichnet. Es schaltet zwischen einem Zustand und einem anderen um – Licht an, Licht aus usw.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests durchführen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Mathematik](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie über Zahlen in JavaScript wissen müssen, zumindest für den Moment. Sie werden Zahlen immer wieder verwenden, während Ihres gesamten JavaScript-Lernens, daher ist es eine gute Idee, das jetzt aus dem Weg zu räumen. Wenn Sie einer der Menschen sind, die Mathematik nicht mögen, können Sie Trost darin finden, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text untersuchen und wie JavaScript es uns erlaubt, ihn zu manipulieren.

> [!NOTE]
> Wenn Sie Mathematik mögen und mehr darüber lesen möchten, wie sie in JavaScript implementiert ist, finden Sie viel mehr Details im Haupt-JavaScript-Bereich von MDN. Gute Plätze zum Starten sind unsere Artikel zu [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) und [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
