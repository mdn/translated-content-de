---
title: Rückgabewerte von Funktionen
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes wichtiges Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, andere hingegen schon. Es ist wichtig zu verstehen, was ihre Werte sind, wie Sie sie in Ihrem Code verwenden und wie Sie Funktionen nützliche Werte zurückgeben lassen. Wir werden all dies im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Funktions-Grundlagen, die in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man die Rückgabewerte bestehender Funktionen verwendet.</li>
          <li>Rückgabewerte zu eigenen Funktionen hinzufügen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind Rückgabewerten schon mehrmals begegnet, auch wenn Sie möglicherweise nicht ausdrücklich darüber nachgedacht haben.

Lassen Sie uns zu einem vertrauten Beispiel zurückkehren (aus einem [früheren Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion wird auf dem `myText`-String aufgerufen und erhält zwei Parameter:

- Den zu findenden Teilstring (`"cold"`).
- Den String, durch den er ersetzt werden soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (das heißt, sie fertig ausgeführt ist), gibt sie einen Wert zurück, der ein neuer String mit der vorgenommenen Ersetzung ist. Im obigen Code wird das Ergebnis dieses Rückgabewertes in der Variablen `newString` gespeichert.

Wenn Sie sich die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktionsreferenzseite auf MDN ansehen, werden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value) finden. Es ist sehr nützlich, zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen überall dort einzuschließen, wo es möglich ist.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen geben unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) an.) Beispielsweise wird in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel erstellt haben, kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Es wird lediglich irgendwo auf dem Bildschirm eine Box erscheinen lassen — das ist alles!

Im Allgemeinen wird ein Rückgabewert dort verwendet, wo die Funktion ein Zwischenschritt in einer Berechnung irgendeiner Art ist. Sie möchten ein Endergebnis erreichen, das einige Werte erfordert, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, damit es in einer Variablen gespeichert werden kann; und Sie können diese Variable im nächsten Schritt der Berechnung verwenden.

## Wie man einen Wert zurückgibt

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML-{{htmlelement("canvas")}}:

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

Innerhalb jeder Schleifeniteration werden drei Aufrufe der `random()`-Funktion gemacht, um einen Zufallswert für die aktuelle _x-Koordinate_, _y-Koordinate_ und den _Radius_ des Kreises zu generieren. Die `random()`-Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine zufällige ganze Zahl zwischen `0` und dieser Zahl zurück. Sie sieht folgendermaßen aus:

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

Wir geben das Ergebnis der Berechnung `Math.floor(Math.random() * number)` jedes Mal zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an der Stelle, an der die Funktion aufgerufen wurde, und der Code wird fortgesetzt.

Wenn Sie also das Folgende ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich so ausgeführt werden, als wäre sie:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe auf der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte werden für die Funktionsaufrufe ersetzt, bevor die Zeile selbst dann ausgeführt wird.

## Implementierung von Funktions-Rückgabewerten

Lasst uns einige Funktionen mit Rückgabewerten schreiben.

1. Machen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)-Datei von GitHub. Dies ist eine einfache HTML-Seite mit einem Textfeld {{htmlelement("input")}} und einem Absatz. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir einen Verweis auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter verschiedene zugehörige Zahlen anzuzeigen.

2. Fügen Sie diesem `<script>`-Element einige nützliche Funktionen unterhalb der beiden bereits vorhandenen Zeilen hinzu:

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

   Die `squared()`- und `cubed()`-Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder die dritte Potenz der als Parameter übergebenen Zahl zurück. Die `factorial()`-Funktion gibt die [Fakultät](<https://de.wikipedia.org/wiki/Fakult%C3%A4t_(Mathematik)>) der gegebenen Zahl zurück.

3. Fügen Sie eine Methode hinzu, um Informationen über die in das Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignishandler unter den vorhandenen Funktionen hinzufügen:

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

4. Speichern Sie Ihren Code, laden Sie ihn in einem Browser und probieren Sie es aus.

Hier sind einige Erklärungen für die `addEventListener()`-Funktion im obigen Schritt 3:

- Durch das Hinzufügen eines `change`-Ereignislisteners wird diese Funktion jedes Mal ausgeführt, wenn das `change`-Ereignis auf dem Texteingabefeld ausgelöst wird — also wenn ein neuer Wert in das Texteingabefeld eingegeben und bestätigt wurde (geben Sie einen Wert ein und verlassen Sie das Eingabefeld, indem Sie <kbd>Tab</kbd> oder <kbd>Return</kbd> drücken). Wenn diese anonyme Funktion ausgeführt wird, wird der im `input`-Feld befindliche Wert in der Konstante `num` gespeichert.
- Die `if`-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung prüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist — wenn ja, gibt sie `true` zurück, andernfalls `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl, und die Funktion gibt einen Satz im Absatz-Element aus, der den Quadrat-, Kubik- und Fakultätswert der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()`-Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([live ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html) auch).

### Fügen Sie einige Ihrer eigenen Funktionen hinzu!

An diesem Punkt würden wir Sie ermutigen, ein paar eigene Funktionen zu schreiben und sie der Bibliothek hinzuzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel einer Zahl? Oder der Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche tipps zu Funktionen:

- Schauen Sie sich ein weiteres Beispiel an, wie Sie _Fehlerbehandlung_ in Funktionen einfügen. Es ist generell eine gute Idee, zu überprüfen, ob alle erforderlichen Parameter validiert sind und ob alle optionalen Parameter einen Standardwert haben. Auf diese Weise wird Ihr Programm weniger wahrscheinlich Fehler auslösen.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Je weiter Sie in Ihrer Programmierkarriere voranschreiten, desto öfter werden Sie die gleichen Dinge immer und immer wieder tun. Es ist eine gute Idee, eine eigene Bibliothek mit Hilfsfunktionen zu erstellen, um diese Art von Dingen zu tun. Sie können sie in neuen Codes verwenden oder einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende unseres Artikelsatzes über Funktionen erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions).

## Fazit

Da haben wir es — Funktionen sind unterhaltsam, sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Wenn es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel noch einmal durchzulesen oder [uns zu kontaktieren](/de/docs/MDN/Community/Communication_channels), um Hilfe zu bitten.

Als nächstes werden wir uns eingehender mit Ereignissen befassen.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen behandelt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein weit verbreitetes JavaScript-Muster besteht darin, einer Funktion eine andere Funktion _als Argument_ zu übergeben. Diese wird dann innerhalb der ersten Funktion aufgerufen. Das liegt etwas außerhalb des Umfangs dieses Kurses, ist aber bald studierenswert.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
