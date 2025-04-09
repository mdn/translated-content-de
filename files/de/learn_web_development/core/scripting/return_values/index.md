---
title: Rückgabewerte von Funktionen
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes grundlegendes Konzept über Funktionen, das wir besprechen müssen – Rückgabewerte. Einige Funktionen geben keinen bedeutenden Wert zurück, andere hingegen tun es. Es ist wichtig zu verstehen, welche Werte sie zurückgeben, wie man sie in Ihrem Code verwendet und wie man Funktionen dazu bringt, nützliche Werte zurückzugeben. Wir werden all dies im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie im vorherigen Kapitel behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man die Rückgabewerte vorhandener Funktionen nutzt.</li>
          <li>Wie man eigenen Funktionen Rückgabewerte hinzufügt.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen – die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind bereits mehrmals auf Rückgabewerte gestoßen, auch wenn Sie möglicherweise nicht explizit darüber nachgedacht haben.

Kehren wir zu einem bekannten Beispiel zurück (aus einem [früheren Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Reihe):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion wird für den `myText`-String aufgerufen und erhält zwei Parameter:

- Den zu findenden Substring (`"cold"`).
- Den String, durch den er ersetzt werden soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (das Ausführen beendet), gibt sie einen Wert zurück, der ein neuer String mit dem vorgenommenen Ersatz ist. Im obigen Code wird das Ergebnis dieses Rückgabewerts in der Variablen `newString` gespeichert.

Wenn Sie sich die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktionsseite auf MDN ansehen, finden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen nach Möglichkeit bereitzustellen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel wird in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel erstellt haben, kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Sie lässt nur irgendwo auf dem Bildschirm ein Feld erscheinen – das war's!

Im Allgemeinen wird ein Rückgabewert verwendet, wenn die Funktion ein Zwischenschritt bei einer Berechnung einer Art ist. Sie möchten zu einem Endergebnis gelangen, das einige von einer Funktion zu berechnende Werte erfordert. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, sodass es in einer Variablen gespeichert werden kann; und Sie können diese Variable im nächsten Berechnungsschritt verwenden.

## Verwendung von Rückgabewerten in eigenen Funktionen

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel in Aktion gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

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

Innerhalb jeder Schleifeniteration werden drei Aufrufe der `random()`-Funktion gemacht, um einen zufälligen Wert für die aktuelle _x-Koordinate_, _y-Koordinate_ und den _Radius_ des Kreises zu generieren. Die `random()`-Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine ganze Zufallszahl zwischen `0` und dieser Zahl zurück. Sie sieht folgendermaßen aus:

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

Wir geben jedes Mal das Ergebnis der Berechnung `Math.floor(Math.random() * number)` zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an der Stelle, an der die Funktion aufgerufen wurde, und der Code wird fortgesetzt.

Wenn Sie also Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich so ausgeführt, als wäre es diese:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe auf der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte werden für die Funktionsaufrufe ersetzt, bevor die Zeile selbst dann ausgeführt wird.

## Aktives Lernen: Eine Rückgabewert-Funktion

Probieren wir aus, einige Funktionen mit Rückgabewerten zu schreiben.

1. Machen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)-Datei von GitHub. Dies ist eine einfache HTML-Seite, die ein Text-{{htmlelement("input")}}-Feld und einen Absatz enthält. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir einen Verweis auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter verschiedene damit verbundene Zahlen anzuzeigen.

2. Fügen Sie dem `<script>`-Element unterhalb der beiden vorhandenen Zeilen einige nützliche Funktionen hinzu:

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

   Die `squared()`- und `cubed()`-Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder den Würfel der als Parameter gegebenen Zahl zurück. Die `factorial()`-Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der gegebenen Zahl zurück.

3. Fügen Sie eine Methode hinzu, um Informationen über die in das Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignis-Handler unterhalb der vorhandenen Funktionen einfügen:

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

Hier einige Erklärungen zur `addEventListener`-Funktion im Schritt 3 oben:

- Durch das Hinzufügen eines Listeners für das `change`-Ereignis wird diese Funktion jedes Mal ausgeführt, wenn das `change`-Ereignis auf dem Texteingabefeld ausgelöst wird – also wenn ein neuer Wert in die Texteingabe eingegeben und gesendet wird (z.B., einen Wert eingeben und dann die Eingabe durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> aufheben). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert in der `input` in der Konstante `num` gespeichert.
- Die if-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung überprüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist – wenn ja, gibt sie `true` zurück, und wenn nicht, gibt sie `false` zurück.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl und die Funktion gibt innerhalb des Absatz-Elements einen Satz aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die Funktionen `squared()`, `cubed()` und `factorial()` auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Sollten Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) (sehen Sie sich auch die [Live-Version](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html) an) oder fragen Sie uns um Hilfe.

## Jetzt sind Sie dran!

An diesem Punkt möchten wir, dass Sie eigene Funktionen schreiben und sie der Bibliothek hinzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche Tipps zu Funktionen:

- Schauen Sie sich ein weiteres Beispiel für das Schreiben von _Fehlerbehandlung_ in Funktionen an. Es ist allgemein eine gute Idee, zu überprüfen, ob notwendige Parameter validiert sind und dass für alle optionalen Parameter eine Art Standardwert bereitgestellt wird. Auf diese Weise wird es weniger wahrscheinlich, dass Ihr Programm Fehler auslöst.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Je weiter Sie in Ihrer Programmierkarriere voranschreiten, desto häufiger werden Sie dieselben Arten von Dingen immer wieder tun. Es ist eine gute Idee, Ihre eigene Bibliothek von Utility-Funktionen zu erstellen, um diese Dinge zu erledigen. Sie können sie in neuen Code kopieren oder sogar einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions).

## Fazit

Da haben wir es — Funktionen sind unterhaltsam, sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Wenn es etwas gibt, das Sie nicht verstanden haben, fühlen Sie sich frei, den Artikel noch einmal zu lesen, oder [kontaktieren Sie uns](/de/docs/MDN/Community/Communication_channels), um Hilfe zu bitten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen enthält.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein übliches JavaScript-Muster ist es, eine Funktion in eine andere Funktion _als Argument_ zu übergeben. Diese wird dann innerhalb der ersten Funktion aufgerufen. Dies liegt ein wenig außerhalb des Rahmens dieses Kurses, ist aber vor längerer Zeit wert, zu studieren.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
