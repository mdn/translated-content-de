---
title: Funktion Rückgabewerte
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes wesentliches Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, aber andere tun das. Es ist wichtig zu verstehen, was ihre Werte sind, wie man sie in Ihrem Code verwendet und wie man Funktionen dazu bringt, nützliche Werte zurückzugeben. Wir werden all dies im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie sie in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man die Rückgabewerte bestehender Funktionen verwendet.</li>
          <li>Hinzufügen von Rückgabewerten zu Ihren eigenen Funktionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind Rückgabewerten bereits mehrere Male begegnet, obwohl Sie möglicherweise nicht explizit darüber nachgedacht haben.

Kehren wir zu einem bekannten Beispiel zurück (aus einem [früheren Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Funktion wird auf dem `myText`-String aufgerufen und erhält zwei Parameter:

- Den zu findenden Teilstring (`"cold"`).
- Den String, durch den er ersetzt werden soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (das heißt, wenn sie ausgeführt wird), gibt sie einen Wert zurück, einen neuen String mit dem vorgenommenen Ersatz. Im obigen Code wird das Ergebnis dieses Rückgabewertes in der Variablen `newString` gespeichert.

Wenn Sie sich die MDN-Referenzseite der [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Funktion ansehen, finden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, weshalb wir versuchen, diese Informationen wo immer möglich einzubinden.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel wird in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50) Funktion, die wir im vorherigen Artikel erstellt haben, kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Sie lässt einfach an einer Stelle auf dem Bildschirm ein Kästchen erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert dort verwendet, wo die Funktion ein Zwischenschritt in einer Art Berechnung ist. Sie möchten zu einem Endergebnis gelangen, das einige Werte erfordert, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, so dass es in einer Variablen gespeichert werden kann und Sie diese Variable im nächsten Schritt der Berechnung verwenden können.

## Verwendung von Rückgabewerten in Ihren eigenen Funktionen

Um einen Wert von einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Schlüsselwort verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel gesehen. Unsere `draw()` Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

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

In jeder Schleifeniteration werden drei Aufrufe der Funktion `random()` gemacht, um einen zufälligen Wert für die aktuelle _x-Koordinate_, _y-Koordinate_ und _Radius_ des Kreises zu erzeugen. Die `random()` Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine zufällige ganze Zahl zwischen `0` und dieser Zahl zurück. Sie sieht folgendermaßen aus:

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

Wir geben das Ergebnis der Berechnung `Math.floor(Math.random() * number)` jedes Mal zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an dem Punkt, an dem die Funktion aufgerufen wurde, und der Code wird fortgesetzt.

Also, wenn Sie das Folgende ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde der folgende Code tatsächlich so ausgeführt, als wäre er dieser:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe in der Zeile werden zuerst ausgeführt und ihre Rückgabewerte werden für die Funktionsaufrufe ersetzt, bevor die Zeile selbst dann ausgeführt wird.

## Aktives Lernen: Eine Rückgabewert-Funktion

Lassen Sie uns versuchen, einige Funktionen mit Rückgabewerten zu schreiben.

1. Erstellen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) Datei von GitHub. Dies ist eine einfache HTML-Seite, die ein Text-{{htmlelement("input")}} Feld und einen Absatz enthält. Es gibt auch ein {{htmlelement("script")}} Element, in dem wir eine Referenz zu beiden HTML-Elementen in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und verschiedene damit verbundene Zahlen darunter anzuzeigen.

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

   Die `squared()` und `cubed()` Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder den Kubus der als Parameter übergebenen Zahl zurück. Die `factorial()` Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der angegebenen Zahl zurück.

3. Integrieren Sie eine Möglichkeit, Informationen über die in das Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignishandler unter den vorhandenen Funktionen hinzufügen:

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

Hier sind einige Erklärungen zur `addEventListener` Funktion im obigen Schritt 3:

- Indem Sie einen Listener für das `change` Ereignis hinzufügen, wird diese Funktion jedes Mal ausgeführt, wenn das `change` Ereignis auf die Texteingabe ausgelöst wird — also wenn ein neuer Wert in die Text-`input` eingegeben und übermittelt wird (z.B. einen Wert eingeben, dann die Eingabe durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> aufheben). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert in der `input` in der Konstante `num` gespeichert.
- Die If-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung überprüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN) Funktion testet, ob der `num` Wert keine Zahl ist — wenn ja, gibt sie `true` zurück, und wenn nicht, gibt sie `false` zurück.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl und die Funktion gibt einen Satz im Absatz-Element aus, der die Quadrat-, Kubus- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()` Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), oder fragen Sie uns nach Hilfe.

## Nun sind Sie an der Reihe!

An diesem Punkt möchten wir, dass Sie versuchen, ein paar eigene Funktionen zu schreiben und sie der Bibliothek hinzuzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche, funktionsbezogene Tipps:

- Sehen Sie sich ein weiteres Beispiel an, wie man _Fehlerbehandlung_ in Funktionen schreibt. Es ist im Allgemeinen eine gute Idee zu überprüfen, ob alle notwendigen Parameter validiert sind und ob alle optionalen Parameter eine Art Standardwert haben. Auf diese Weise wird Ihr Programm weniger wahrscheinlich Fehler werfen.
- Überlegen Sie, eine _Funktionsbibliothek_ zu erstellen. Im Laufe Ihrer Programmierkarriere werden Sie anfangen, immer wieder dieselben Dinge zu tun. Es ist eine gute Idee, Ihre eigene Bibliothek von Dienstprogrammfunktionen zu erstellen, um solche Dinge zu erledigen. Sie können sie in neuen Code kopieren oder sie einfach auf HTML-Seiten anwenden, wann immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions).

## Fazit

Da haben wir es — Funktionen machen Spaß, sind sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Wenn es irgendetwas gibt, das Sie nicht verstanden haben, fühlen Sie sich frei, den Artikel noch einmal durchzulesen oder [kontaktieren Sie uns](/de/docs/MDN/Community/Communication_channels), um Hilfe zu bitten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der weiterführende Informationen zu Funktionen behandelt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein häufiges JavaScript-Muster besteht darin, eine Funktion als Argument in eine andere Funktion zu übergeben. Sie wird dann innerhalb der ersten Funktion aufgerufen. Dies liegt etwas außerhalb des Rahmens dieses Kurses, ist aber eine Studie wert, bevor es zu lange dauert.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
