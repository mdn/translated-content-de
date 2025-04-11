---
title: Funktionsrückgabewerte
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes wichtiges Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen bedeutenden Wert zurück, aber andere tun es. Es ist wichtig zu verstehen, was ihre Werte sind, wie man sie in Ihrem Code verwendet und wie man Funktionen nützliche Werte zurückgeben lässt. Wir werden all dies im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie im vorherigen Unterricht behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man die Rückgabewerte bestehender Funktionen verwendet.</li>
          <li>Rückgabewerte zu Ihren eigenen Funktionen hinzufügen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind Rückgabewerten bereits mehrmals begegnet, obwohl Sie möglicherweise nicht ausdrücklich darüber nachgedacht haben.

Kehren wir zu einem vertrauten Beispiel zurück (aus einem [früheren Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) wird auf dem String `myText` aufgerufen und es werden zwei Parameter übergeben:

- Der zu findende Teilstring (`"cold"`).
- Der String, durch den er ersetzt werden soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (fertig ausgeführt), gibt sie einen Wert zurück, der ein neuer String mit dem vorgenommenen Ersatz ist. Im obigen Code wird das Ergebnis dieses Rückgabewertes in der Variablen `newString` gespeichert.

Wenn Sie sich die MDN-Referenzseite der Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ansehen, sehen Sie einen Abschnitt namens [return value](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen überall zu inkludieren.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel gibt in der Funktion [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50), die wir im vorherigen Artikel erstellt haben, kein spezifischer Wert zurück, wenn die Funktion aufgerufen wird. Sie lässt einfach irgendwo auf dem Bildschirm ein Feld erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert dort verwendet, wo die Funktion einen Zwischenschritt in einer Art Berechnung darstellt. Sie möchten zu einem Endergebnis gelangen, das einige Werte beinhaltet, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, damit es in einer Variablen gespeichert werden kann; und Sie können diese Variable in der nächsten Berechnungsstufe verwenden.

## Verwendung von Rückgabewerten in eigenen Funktionen

Um einen Wert von einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) verwenden. Wir haben dies kürzlich in unserem Beispiel [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html) gesehen. Unsere Funktion `draw()` zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Innerhalb jeder Schleifeniteration werden drei Aufrufe der Funktion `random()` gemacht, um einen zufälligen Wert für die aktuelle Kreis-_x-Koordinate_, _y-Koordinate_ und _Radius_ zu generieren. Die Funktion `random()` nimmt einen Parameter — eine ganze Zahl — und gibt eine ganze zufällige Zahl zwischen `0` und dieser Zahl zurück. Sie sieht so aus:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Dies könnte wie folgt geschrieben werden:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

Aber die erste Version ist schneller zu schreiben und kompakter.

Wir geben das Ergebnis der Berechnung `Math.floor(Math.random() * number)` jedes Mal zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an der Stelle, an der die Funktion aufgerufen wurde, und der Code wird fortgeführt.

Wenn Sie also Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich so ausgeführt werden, als ob sie so wäre:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe auf der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte ersetzen die Funktionsaufrufe, bevor die Zeile selbst ausgeführt wird.

## Aktives Lernen: Eine Rückgabewertfunktion

Lassen Sie uns versuchen, einige Funktionen mit Rückgabewerten zu schreiben.

1. Erstellen Sie eine lokale Kopie der Datei [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) von GitHub. Dies ist eine einfache HTML-Seite, die ein Text-{{htmlelement("input")}}-Feld und einen Absatz enthält. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir eine Referenz auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter verschiedene damit verbundene Zahlen anzuzeigen.

2. Fügen Sie einige nützliche Funktionen zu diesem `<script>`-Element unter den beiden vorhandenen Zeilen hinzu:

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     if (num < 0) return undefined;
     if (num === 0) return 1;
     let x = num - 1;
     while (x > 1) {
       num *= x;
       x--;
     }
     return num;
   }
   ```

   Die Funktionen `squared()` und `cubed()` sind ziemlich offensichtlich — sie geben das Quadrat oder den Würfel der Zahl zurück, die als Parameter übergeben wurde. Die Funktion `factorial()` gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der übergebenen Zahl zurück.

3. Integrieren Sie eine Möglichkeit, Informationen über die in das Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignis-Handler unter den vorhandenen Funktionen hinzufügen:

   ```js
   input.addEventListener("change", () => {
     const num = parseFloat(input.value);
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent = `${num} squared is ${squared(num)}. `;
       para.textContent += `${num} cubed is ${cubed(num)}. `;
       para.textContent += `${num} factorial is ${factorial(num)}. `;
     }
   });
   ```

4. Speichern Sie Ihren Code, laden Sie ihn in einem Browser und probieren Sie ihn aus.

Hier sind einige Erklärungen zur Funktion `addEventListener` im obigen Schritt 3:

- Durch das Hinzufügen eines Listeners zum `change`-Ereignis wird diese Funktion jedes Mal ausgeführt, wenn das `change`-Ereignis beim Texteingabefeld ausgelöst wird — das heißt, wenn ein neuer Wert in die Texteingabe eingegeben und abgeschickt wird (z.B. einen Wert eingeben und dann die Eingabe mit <kbd>Tab</kbd> oder <kbd>Return</kbd> abwählen). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert im `input` in der Konstante `num` gespeichert.
- Die if-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung überprüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die Funktion [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN) testet, ob der `num`-Wert keine Zahl ist — falls ja, gibt sie `true` zurück, falls nein, `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl, und die Funktion gibt innerhalb des Absatz-Elements einen Satz aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die Funktionen `squared()`, `cubed()` und `factorial()` auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) (siehe auch [live laufend](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), oder fragen Sie uns nach Hilfe.

## Jetzt sind Sie dran!

An diesem Punkt möchten wir, dass Sie versuchen, ein paar eigene Funktionen zu schreiben und sie zur Bibliothek hinzuzufügen. Was halten Sie von der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem bestimmten Radius?

Einige zusätzliche Tipps zu Funktionen:

- Schauen Sie sich ein weiteres Beispiel für das Schreiben von _Fehlerbehandlung_ in Funktionen an. Es ist im Allgemeinen eine gute Idee, sicherzustellen, dass alle erforderlichen Parameter validiert und allen optionalen Parametern standardmäßige Werte zugewiesen werden. Auf diese Weise ist Ihr Programm weniger anfällig für Fehler.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Wenn Sie weiter in Ihrer Programmierkarriere voranschreiten, werden Sie anfangen, dieselben Arten von Dingen immer wieder zu tun. Es ist eine gute Idee, eine eigene Bibliothek von Hilfsfunktionen zu erstellen, um diese Arten von Dingen durchzuführen. Sie können sie in neuen Code kopieren oder sie sogar einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions).

## Fazit

Das war's also — Funktionen sind unterhaltsam, sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Wenn es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel erneut zu lesen, oder [kontaktieren Sie uns](/de/docs/MDN/Community/Communication_channels), um Hilfe zu bitten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein ausführlicher Leitfaden, der fortgeschrittenere informationsbezogene Funktionen behandelt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein häufiges JavaScript-Muster besteht darin, eine Funktion in eine andere Funktion _als Argument_ zu übergeben. Sie wird dann innerhalb der ersten Funktion aufgerufen. Dies liegt etwas außerhalb des Rahmens dieses Kurses, es lohnt sich jedoch, es bald zu studieren.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
