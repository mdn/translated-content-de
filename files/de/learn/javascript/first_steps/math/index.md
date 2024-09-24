---
title: Grundlegende Mathematik in JavaScript — Zahlen und Operatoren
slug: Learn/JavaScript/First_steps/Math
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

An diesem Punkt des Kurses diskutieren wir Mathematik in JavaScript – wie wir {{Glossary("Operator","operators")}} und andere Funktionen verwenden können, um Zahlen erfolgreich zu manipulieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Vertrautheit mit den Grundlagen der Mathematik in JavaScript erlangen.</td>
    </tr>
  </tbody>
</table>

## Jeder liebt Mathematik

Okay, vielleicht nicht. Manche von uns mögen Mathematik, manche haben Mathematik gehasst, seit sie in der Schule Multiplikationstabellen und lange Division lernen mussten, und manche von uns liegen irgendwo dazwischen. Aber keiner von uns kann leugnen, dass Mathematik ein grundlegender Bestandteil des Lebens ist, ohne den wir nicht sehr weit kommen können. Dies gilt besonders, wenn wir JavaScript (oder eine andere Sprache) programmieren lernen – so viel von dem, was wir tun, beruht auf der Verarbeitung numerischer Daten, der Berechnung neuer Werte und so weiter, dass Sie nicht überrascht sein werden zu erfahren, dass JavaScript eine voll ausgestattete Reihe von Mathematikfunktionen bietet.

Dieser Artikel behandelt nur die grundlegenden Teile, die Sie jetzt wissen müssen.

### Zahlentypen

Im Programmieren ist selbst das einfache Dezimalsystem, das wir alle so gut kennen, komplizierter, als Sie vielleicht denken. Wir verwenden unterschiedliche Begriffe, um verschiedene Arten von Dezimalzahlen zu beschreiben, zum Beispiel:

- **Ganzzahlen** sind Zahlen ohne Bruchteil. Sie können entweder positiv oder negativ sein, z. B. 10, 400 oder -5.
- **Gleitkommazahlen** (Floats) enthalten Dezimalpunkte und Dezimalstellen, zum Beispiel 12.5 und 56.7786543.

Wir haben sogar verschiedene Zahlensysteme! Dezimal ist Basis 10 (d. h. es verwendet 0–9 in jeder Ziffer), aber wir haben auch Dinge wie:

- **Binär** — Die niedrigste Sprachebene von Computern; 0s und 1s.
- **Oktal** — Basis 8, verwendet 0–7 in jeder Ziffer.
- **Hexadezimal** — Basis 16, verwendet 0–9 und dann a–f in jeder Ziffer. Sie sind diesen Zahlen möglicherweise schon begegnet, wenn Sie [Farben in CSS setzen](/de/docs/Learn/CSS/Building_blocks/Values_and_units#hexadecimal_rgb_values).

**Bevor Sie sich Sorgen machen, dass Ihr Gehirn schmilzt, hören Sie gleich auf!** Zunächst bleiben wir einfach bei Dezimalzahlen während dieses Kurses; Sie werden selten auf die Notwendigkeit stoßen, über andere Typen nachzudenken, wenn überhaupt.

Die zweite gute Nachricht ist, dass JavaScript im Gegensatz zu einigen anderen Programmiersprachen nur einen Datentyp für Zahlen hat, sowohl für Ganzzahlen als auch für Dezimalzahlen – Sie haben es erraten, {{jsxref("Number")}}. Das bedeutet, dass Sie mit Zahlen jeglicher Art in JavaScript auf exakt die gleiche Weise arbeiten.

> [!NOTE]
> Tatsächlich hat JavaScript einen zweiten Zahlentyp, {{Glossary("BigInt")}}, der für sehr, sehr große Ganzzahlen verwendet wird. Aber für die Zwecke dieses Kurses konzentrieren wir uns nur auf `Number`-Werte.

### Es ist alles Zahlen für mich

Lassen Sie uns schnell mit einigen Zahlen spielen, um uns mit der grundlegenden Syntax vertraut zu machen, die wir benötigen. Geben Sie die unten aufgeführten Befehle in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) ein.

1. Lassen Sie uns zunächst ein paar Variablen deklarieren und sie jeweils mit einer Ganzzahl und einer Gleitkommazahl initialisieren, dann geben Sie die Variablennamen ein, um zu überprüfen, ob alles in Ordnung ist:

   ```js
   const myInt = 5;
   const myFloat = 6.667;
   myInt;
   myFloat;
   ```

2. Zahlenwerte werden ohne Anführungszeichen eingegeben – versuchen Sie, ein paar weitere Variablen zu deklarieren und zu initialisieren, die Zahlen enthalten, bevor Sie fortfahren.
3. Überprüfen wir nun, ob beide unsere ursprünglichen Variablen vom gleichen Datentyp sind. Es gibt einen Operator namens {{jsxref("Operators/typeof", "typeof")}} in JavaScript, der dies tut. Geben Sie die untenstehenden zwei Zeilen wie gezeigt ein:

   ```js
   typeof myInt;
   typeof myFloat;
   ```

   Sie sollten in beiden Fällen `"number"` zurückgegeben bekommen — das macht es uns wesentlich einfacher, als wenn verschiedene Zahlen verschiedene Datentypen hätten und wir sie auf unterschiedliche Weise behandeln müssten. Puh!

### Nützliche Number-Methoden

Das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt, eine Instanz, die alle Standardzahlen darstellt, die Sie in Ihrem JavaScript verwenden werden, hat eine Anzahl nützlicher Methoden verfügbar, mit denen Sie Zahlen manipulieren können. Wir decken diese in diesem Artikel nicht ausführlich ab, weil wir es als einfache Einführung halten und nur die wirklich grundlegenden Essentials abdecken wollten; jedoch ist es sinnvoll, nachdem Sie dieses Modul ein paar Mal gelesen haben, zu den Referenzseiten des Objekts zu gehen und mehr darüber zu lernen, was verfügbar ist.

Zum Beispiel, um Ihre Zahl auf eine feste Anzahl von Dezimalstellen zu runden, verwenden Sie die Methode [`toFixed()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Geben Sie die folgenden Zeilen in die [Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) Ihres Browsers ein:

```js
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Umwandlung zu Zahlendatentypen

Manchmal kann es passieren, dass Sie eine Zahl erhalten, die als String-Typ gespeichert ist, was es schwierig macht, Berechnungen damit durchzuführen. Dies passiert am häufigsten, wenn Daten in ein [Formular](/de/docs/Learn/Forms) eingegeben werden, und der [Eingabetyp ist Text](/de/docs/Web/HTML/Element/input/text). Dafür gibt es eine Lösung — Übergabe des String-Werts an den [`Number()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)-Konstruktor, um eine Zahlenversion desselben Werts zurückzugeben.

Zum Beispiel, versuchen Sie, diese Zeilen in Ihre Konsole einzugeben:

```js
let myNumber = "74";
myNumber += 3;
```

Sie erhalten das Ergebnis 743, nicht 77, weil `myNumber` tatsächlich als String definiert ist. Sie können dies testen, indem Sie folgendes eingeben:

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
          Gibt den Rest zurück, der übrig bleibt, nachdem Sie die linke Zahl in eine Anzahl von ganzzahligen Portionen gleich der rechten Zahl aufgeteilt haben.
        </p>
      </td>
      <td>
        <p>
          <code>8 % 3</code> (ergibt 2, da drei zweimal in 8 passt, wobei 2 übrig bleibt).
        </p>
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Exponent</td>
      <td>
        Erhöht eine <code>Basis</code>-Zahl auf die <code>Exponent</code>-Potenz, das heißt, die <code>Basis</code>-Zahl multipliziert mit sich selbst, <code>Exponent</code>-mal.
      </td>
      <td>
        <code>5 ** 2</code> (ergibt <code>25</code>, was dasselbe ist wie <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Sie werden manchmal sehen, dass Zahlen, die in arithmetische Ausdrücke involviert sind, als {{Glossary("Operand","operands")}} bezeichnet werden.

> [!NOTE]
> Sie können manchmal sehen, dass Exponenten mit der älteren {{jsxref("Math.pow()")}}-Methode ausgedrückt werden, die auf sehr ähnliche Weise funktioniert. Beispielsweise ist `Math.pow(7, 3)`, `7` die Basis und `3` der Exponent, sodass das Ergebnis des Ausdrucks `343` ist. `Math.pow(7, 3)` ist äquivalent zu `7**3`.

Wahrscheinlich müssen wir Ihnen nicht beibringen, wie man grundlegende Mathematik macht, aber wir möchten Ihr Verständnis der verwendeten Syntax testen. Versuchen Sie, die untenstehenden Beispiele in Ihre [Entwicklertools-JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben, um sich mit der Syntax vertraut zu machen.

1. Versuchen Sie zunächst, einige einfache Beispiele von Ihnen selbst einzugeben, wie

   ```js
   10 + 7;
   9 * 8;
   60 % 3;
   ```

2. Sie können auch versuchen, einige Zahlen in Variablen zu deklarieren und zu initialisieren und diese in den Summen zu verwenden – die Variablen verhalten sich genau wie die Werte, die sie für die Zwecke der Summe enthalten. Zum Beispiel:

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

Teile dieser letzten Berechnungen geben Ihnen möglicherweise nicht ganz das erwartete Ergebnis; der untenstehende Abschnitt könnte die Antwort darauf geben, warum.

### Operatorenpräzedenz

Schauen wir uns das letzte Beispiel von oben an, wobei wir annehmen, dass `num2` den Wert 50 enthält und `num1` den Wert 10 (wie oben angegeben):

```js
num2 + num1 / 8 + 2;
```

Als Mensch lesen Sie das vielleicht als „50 plus 10 ergibt 60“, dann „8 plus 2 ergibt 10“ und schließlich „60 geteilt durch 10 ergibt 6“.

Aber der Browser macht „10 geteilt durch 8 ergibt 1,25“, dann „50 plus 1,25 plus 2 ergibt 53,25“.

Das liegt an der **Operatorenpräzedenz** — einige Operatoren werden vor anderen angewendet, wenn das Ergebnis einer Berechnung (als _Ausdruck_ bezeichnet, im Programmieren) berechnet wird. Die Operatorenpräzedenz in JavaScript entspricht der, die in Mathematikkursen in der Schule gelehrt wird – multiplizieren und teilen wird immer zuerst ausgeführt, dann addieren und subtrahieren (der Ausdruck wird immer von links nach rechts ausgewertet).

Wenn Sie die Operatorenpräzedenz außer Kraft setzen möchten, können Sie Klammern um die Teile setzen, die explizit zuerst behandelt werden sollen. Um also ein Ergebnis von 6 zu erhalten, könnten wir dies tun:

```js
(num2 + num1) / (8 + 2);
```

Versuchen Sie es und sehen Sie selbst.

> [!NOTE]
> Eine vollständige Liste aller JavaScript-Operatoren und ihrer Präzedenz finden Sie unter [Operatorenpräzedenz](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

## Inkrement- und Dekrement-Operatoren

Manchmal möchten Sie den Wert einer numerischen Variablen wiederholt um eins erhöhen oder verringern. Dies kann bequem mit den Inkrement- (`++`) und Dekrement- (`--`) Operatoren gemacht werden. Wir haben `++` in unserem "Zahlenraten"-Spiel in unserem [ersten Ausflug in JavaScript](/de/docs/Learn/JavaScript/First_steps/A_first_splash)-Artikel verwendet, als wir 1 zu unserer `guessCount`-Variablen hinzugefügt haben, um zu verfolgen, wie viele Versuche der Benutzer nach jedem Zug noch hat.

```js
guessCount++;
```

Lassen Sie uns damit in Ihrer Konsole spielen. Zunächst ist zu beachten, dass Sie diese nicht direkt auf eine Zahl anwenden können, was seltsam erscheinen mag, aber wir weisen einer Variablen einen neuen aktualisierten Wert zu, anstatt den Wert selbst zu bearbeiten. Das Folgende wird einen Fehler zurückgeben:

```js example-bad
3++;
```

Sie können also nur eine existierende Variable inkrementieren. Versuchen Sie dies:

```js
let num1 = 4;
num1++;
```

Okay, Seltsamkeit Nummer 2! Wenn Sie dies tun, sehen Sie einen Wert von 4 zurückgegeben – das liegt daran, dass der Browser den aktuellen Wert zurückgibt und _dann_ die Variable inkrementiert. Sie können sehen, dass sie inkrementiert wurde, wenn Sie den Variablenwert erneut zurückgeben:

```js
num1;
```

Dasselbe gilt für `--`: versuchen Sie das Folgende

```js
let num2 = 6;
num2--;
num2;
```

> [!NOTE]
> Sie können den Browser dazu bringen, es umgekehrt zu machen — die Variable inkrementieren/dekrementieren und _dann_ den Wert zurückgeben — indem Sie den Operator am Anfang der Variablen anstelle des Endes setzen. Wiederholen Sie die obigen Beispiele, verwenden Sie jedoch diesmal `++num1` und `--num2`.

## Zuweisungsoperatoren

Zuweisungsoperatoren sind Operatoren, die einer Variablen einen Wert zuweisen. Wir haben den grundlegendsten, `=`, schon oft verwendet — er weist der Variablen auf der linken Seite den auf der rechten angegebenen Wert zu:

```js
let x = 3; // x enthält den Wert 3
let y = 4; // y enthält den Wert 4
x = y; // x enthält jetzt denselben Wert wie y, 4
```

Es gibt jedoch komplexere Typen, die nützliche Abkürzungen bieten, um Ihren Code ordentlicher und effizienter zu gestalten. Die gebräuchlichsten sind unten aufgeführt:

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
        Addiert den Wert rechts zu dem Variablenwert links und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x += 4;</code></td>
      <td><code>x = x + 4;</code></td>
    </tr>
    <tr>
      <td><code>-=</code></td>
      <td>Subtraktionszuweisung</td>
      <td>
        Subtrahiert den Wert rechts von dem Variablenwert links und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x -= 3;</code></td>
      <td><code>x = x - 3;</code></td>
    </tr>
    <tr>
      <td><code>*=</code></td>
      <td>Multiplikationszuweisung</td>
      <td>
        Multipliziert den Variablenwert links mit dem Wert rechts und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x *= 3;</code></td>
      <td><code>x = x * 3;</code></td>
    </tr>
    <tr>
      <td><code>/=</code></td>
      <td>Divisionszuweisung</td>
      <td>
        Teilt den Variablenwert links durch den Wert rechts und gibt dann den neuen Variablenwert zurück
      </td>
      <td><code>x /= 5;</code></td>
      <td><code>x = x / 5;</code></td>
    </tr>
  </tbody>
</table>

Versuchen Sie, einige der obigen Beispiele in Ihre Konsole einzugeben, um eine Vorstellung davon zu bekommen, wie sie funktionieren. Überlegen Sie sich in jedem Fall, ob Sie erraten können, was der Wert ist, bevor Sie die zweite Zeile eingeben.

Beachten Sie, dass Sie problemlos andere Variablen auf der rechten Seite jedes Ausdrucks verwenden können, zum Beispiel:

```js
let x = 3; // x enthält den Wert 3
let y = 4; // y enthält den Wert 4
x *= y; // x enthält jetzt den Wert 12
```

> [!NOTE]
> Es gibt viele [andere verfügbare Zuweisungsoperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators), aber dies sind die grundlegenden, die Sie jetzt lernen sollten.

## Aktives Lernen: Ändern der Größe eines Canvas-Feldes

In dieser Übung manipulieren Sie einige Zahlen und Operatoren, um die Größe eines Feldes zu ändern. Das Feld wird mithilfe einer Browser-API namens {{domxref("Canvas API", "", "", "true")}} gezeichnet. Es besteht keine Sorge darüber, wie dies funktioniert – konzentrieren Sie sich jetzt einfach auf die Mathematik. Die Breite und Höhe des Feldes (in Pixeln) werden durch die Variablen `x` und `y` definiert, die zunächst beide den Wert 50 haben.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Im oben bearbeitbaren Codefeld gibt es zwei Zeilen, die mit einem Kommentar markiert sind und die Sie aktualisieren sollen, um das Feld wachsen/schrumpfen auf bestimmte Größen, mit bestimmten Operatoren und/oder Werten in jedem Fall. Versuchen wir Folgendes:

- Ändern Sie die Zeile, die x berechnet, damit das Feld immer noch 50 Pixel breit ist, aber die 50 mit den Zahlen 43 und 7 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, damit das Feld 75 Pixel hoch ist, aber die 75 mit den Zahlen 25 und 3 und einem arithmetischen Operator berechnet wird.
- Ändern Sie die Zeile, die x berechnet, damit das Feld 250 Pixel breit ist, aber die 250 mit zwei Zahlen und dem Rest (Modulo)-Operator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, damit das Feld 150 Pixel hoch ist, aber die 150 mit drei Zahlen und den Subtraktions- und Divisionsoperatoren berechnet wird.
- Ändern Sie die Zeile, die x berechnet, damit das Feld 200 Pixel breit ist, aber die 200 mit der Zahl 4 und einem Zuweisungsoperator berechnet wird.
- Ändern Sie die Zeile, die y berechnet, damit das Feld 200 Pixel hoch ist, aber die 200 mit den Zahlen 50 und 3, dem Multiplikationsoperator und dem Additionszuweisungsoperator berechnet wird.

Machen Sie sich keine Sorgen, wenn Sie den Code völlig durcheinander bringen. Sie können jederzeit auf die Schaltfläche „Zurücksetzen“ drücken, um wieder zu funktionieren. Nachdem Sie alle obigen Fragen richtig beantwortet haben, können Sie gerne weiter mit dem Code spielen oder eigene Herausforderungen erstellen.

## Vergleichsoperatoren

Manchmal möchten wir Wahr/Falsch-Tests durchführen und dann je nach Ergebnis dieses Tests entsprechend handeln – dazu verwenden wir **Vergleichsoperatoren**.

| Operator | Name                     | Zweck                                                                       | Beispiel      |
| -------- | ------------------------ | -------------------------------------------------------------------------- | ------------- |
| `===`    | Strikte Gleichheit       | Prüft, ob die linken und rechten Werte identisch sind                       | `5 === 2 + 4` |
| `!==`    | Strikte Ungleichheit     | Prüft, ob die linken und rechten Werte **nicht** identisch sind            | `5 !== 2 + 3` |
| `<`      | Kleiner als              | Prüft, ob der linke Wert kleiner ist als der rechte.                       | `10 < 6`      |
| `>`      | Größer als               | Prüft, ob der linke Wert größer ist als der rechte.                        | `10 > 20`     |
| `<=`     | Kleiner oder gleich      | Prüft, ob der linke Wert kleiner oder gleich dem rechten ist.              | `3 <= 2`      |
| `>=`     | Größer oder gleich       | Prüft, ob der linke Wert größer oder gleich dem rechten ist.               | `5 >= 4`      |

> [!NOTE]
> Sie sehen möglicherweise einige Leute `==` und `!=` in ihren Tests für Gleichheit und Ungleichheit verwenden. Diese sind gültige Operatoren in JavaScript, unterscheiden sich jedoch von `===`/`!==`. Die frühere Versionen prüfen, ob die Werte gleich sind, aber nicht, ob die Datentypen der Werte gleich sind. Die späteren, strikt versions, prüfen die Gleichheit sowohl der Werte als auch ihrer Datentypen. Die strikt versionen führen in der Regel zu weniger Fehlern, daher empfehlen wir Ihnen, diese zu verwenden.

Wenn Sie einige dieser Werte in eine Konsole eingeben, sehen Sie, dass sie alle `true`/`false`-Werte zurückgeben – diese Booleans, die wir im letzten Artikel erwähnt haben. Diese sind sehr nützlich, da sie es uns ermöglichen, Entscheidungen in unserem Code zu treffen, und sie werden jedes Mal verwendet, wenn wir eine Art von Entscheidung treffen möchten. Booleans können beispielsweise verwendet werden, um:

- Den richtigen Text auf einer Schaltfläche anzeigen, je nachdem, ob eine Funktion ein- oder ausgeschaltet ist
- Eine Spiel-über-Nachricht anzeigen, wenn ein Spiel vorbei ist, oder eine Siegesnachricht, wenn das Spiel gewonnen wurde
- Die richtige saisonale Begrüßung anzeigen, je nachdem, welche Feiertagszeit es ist
- Eine Karte vergrößern oder verkleinern, abhängig von der ausgewählten Zoomstufe

Wir werden uns ansehen, wie man solche Logik programmiert, wenn wir in einem zukünftigen Artikel auf bedingte Anweisungen eingehen. Schauen wir uns vorerst ein schnelles Beispiel an:

```html
<button>Maschine starten</button>
<p>Die Maschine ist gestoppt.</p>
```

```js
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Maschine starten") {
    btn.textContent = "Maschine stoppen";
    txt.textContent = "Die Maschine ist gestartet!";
  } else {
    btn.textContent = "Maschine starten";
    txt.textContent = "Die Maschine ist gestoppt.";
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[In neuem Fenster öffnen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Sie können den Gleichheitsoperator sehen, der direkt innerhalb der `updateBtn()`-Funktion verwendet wird. In diesem Fall testen wir nicht, ob zwei mathematische Ausdrücke denselben Wert haben – wir testen, ob der Textinhalt einer Schaltfläche eine bestimmte Zeichenkette enthält – aber es ist immer noch dasselbe Prinzip am Werk. Wenn die Schaltfläche momentan „Maschine starten“ sagt, wenn sie gedrückt wird, ändern wir ihr Label zu „Maschine stoppen“ und aktualisieren das Label entsprechend. Wenn die Schaltfläche momentan „Maschine stoppen“ sagt, wenn sie gedrückt wird, wechseln wir die Anzeige wieder zurück.

> [!NOTE]
> Eine solche Steuerung, die zwischen zwei Zuständen wechselt, wird allgemein als **Umschalter** bezeichnet. Es wechselt zwischen einem Zustand und einem anderen – Licht an, Licht aus usw.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen – siehe [Testen Sie Ihr Wissen: Mathematik](/de/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Informationen behandelt, die Sie derzeit zu Zahlen in JavaScript wissen müssen. Sie werden Zahlen immer wieder in Ihrem JavaScript-Lernen sehen, daher ist es eine gute Idee, dies jetzt aus dem Weg zu räumen. Wenn Sie zu den Menschen gehören, die Mathematik nicht mögen, können Sie sich damit trösten, dass dieses Kapitel ziemlich kurz war.

Im nächsten Artikel werden wir Text erkunden und wie JavaScript uns erlaubt, ihn zu manipulieren.

> [!NOTE]
> Wenn Sie Mathematik mögen und mehr darüber lesen möchten, wie sie in JavaScript implementiert ist, finden Sie viel mehr Details im Hauptabschnitt von MDN JavaScript. Gute Ausgangspunkte sind unsere Artikel zu [Zahlen und Daten](/de/docs/Web/JavaScript/Guide/Numbers_and_dates) und [Ausdrücke und Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
