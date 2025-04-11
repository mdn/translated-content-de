---
title: Rückgabewerte von Funktionen
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes wichtiges Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen bedeutenden Wert zurück, andere jedoch schon. Es ist wichtig zu verstehen, was diese Werte sind, wie Sie sie in Ihrem Code verwenden können und wie Sie Funktionen dazu bringen können, nützliche Werte zurückzugeben. Wir werden all dies im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den Grundlagen von JavaScript-Funktionen, die in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man die Rückgabewerte bestehender Funktionen verwendet.</li>
          <li>Hinzufügen von Rückgabewerten zu eigenen Funktionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, was sie zu sein scheinen — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie haben Rückgabewerte bereits mehrmals kennengelernt, obwohl Sie vielleicht noch nicht explizit darüber nachgedacht haben.

Lassen Sie uns zu einem bekannten Beispiel zurückkehren (aus einem [vorherigen Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion wird auf dem `myText`-String aufgerufen und erhält zwei Parameter:

- Der zu findende Substring (`"cold"`).
- Der String, der an dessen Stelle eingesetzt werden soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (d.h. die Ausführung beendet), gibt sie einen Wert zurück, welcher ein neuer String mit dem vorgenommenen Ersatz ist. Im obigen Code wird das Ergebnis dieses Rückgabewertes in der Variablen `newString` gespeichert.

Wenn Sie sich die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion auf der MDN-Referenzseite ansehen, finden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen, wo immer möglich, aufzunehmen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).) Zum Beispiel gibt die [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel entwickelt haben, keinen spezifischen Wert zurück, wenn die Funktion aufgerufen wird. Sie lässt einfach irgendwo auf dem Bildschirm ein Kästchen erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert dort verwendet, wo die Funktion einen Zwischenschritt in einer Berechnung irgendeiner Art darstellt. Sie wollen zu einem Endergebnis gelangen, das einige Werte beinhaltet, die durch eine Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, sodass es in einer Variablen gespeichert werden kann; und diese Variable können Sie im nächsten Schritt der Berechnung verwenden.

## Verwendung von Rückgabewerten in eigenen Funktionen

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Schlüsselwort verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

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

Innerhalb jeder Schleifeniteration werden drei Aufrufe der `random()`-Funktion gemacht, um einen Zufallswert für die _x-Koordinate_, _y-Koordinate_ und den _Radius_ des aktuellen Kreises zu generieren. Die `random()`-Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine ganze Zufallszahl zwischen `0` und dieser Zahl zurück. Sie sieht folgendermaßen aus:

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

Wenn Sie das Folgende ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, wird die Zeile tatsächlich so ausgeführt, als ob sie dies wäre:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe in der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte ersetzen die Funktionsaufrufe, bevor die Zeile selbst dann ausgeführt wird.

## Aktives Lernen: Eine Funktion mit Rückgabewert

Lassen Sie uns einige Funktionen schreiben, die Rückgabewerte enthalten.

1. Erstellen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)-Datei von GitHub. Dies ist eine einfache HTML-Seite mit einem {{htmlelement("input")}}-Textfeld und einem Absatz. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir eine Referenz auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und verschiedene damit zusammenhängende Zahlen darunter anzuzeigen.

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

   Die `squared()`- und `cubed()`-Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder den Würfel der als Parameter gegebenen Zahl zurück. Die `factorial()`-Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der angegebenen Zahl zurück.

3. Fügen Sie eine Möglichkeit hinzu, Informationen über die in das Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignis-Handler unter den vorhandenen Funktionen hinzufügen:

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

4. Speichern Sie Ihren Code, laden Sie ihn in einen Browser und probieren Sie ihn aus.

Hier sind einige Erklärungen zur `addEventListener`-Funktion in Schritt 3 oben:

- Durch das Hinzufügen eines Listeners für das `change`-Ereignis wird diese Funktion jedes Mal ausgeführt, wenn das `change`-Ereignis im Texteingabefeld ausgelöst wird — das passiert, wenn ein neuer Wert in das Textfeld eingegeben und übermittelt wird (z. B. einen Wert eingeben und dann das Eingabefeld durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> verlassen). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert im `input` in der Konstante `num` gespeichert.
- Die if-Bedingung druckt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung überprüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist — falls ja, gibt sie `true` zurück, andernfalls `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl, und die Funktion gibt einen Satz innerhalb des Absatz-Elements aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()`-Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html) auch) oder fragen Sie uns um Hilfe.

## Jetzt sind Sie dran!

An diesem Punkt möchten wir, dass Sie ein paar eigene Funktionen schreiben und zu der Bibliothek hinzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche Tipps zu Funktionen:

- Schauen Sie sich ein weiteres Beispiel für das Schreiben von _Fehlerbehandlung_ in Funktionen an. Es ist im Allgemeinen eine gute Idee zu überprüfen, ob alle notwendigen Parameter validiert werden und dass alle optionalen Parameter eine Art von Standardwert erhalten. Auf diese Weise ist Ihr Programm weniger fehleranfällig.
- Denken Sie an die Idee, eine _Funktionsbibliothek_ zu erstellen. Je weiter Sie in Ihrer Programmierkarriere voranschreiten, desto öfter werden Sie dieselben Arten von Dingen immer wieder tun. Es ist eine gute Idee, Ihre eigene Bibliothek von Hilfsfunktionen zu erstellen, um diese Dinge zu erledigen. Sie können sie in neuen Code kopieren oder sie sogar einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions).

## Fazit

Da haben wir es — Funktionen machen Spaß, sind sehr nützlich und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Falls es irgendetwas gibt, das Sie nicht verstanden haben, lesen Sie den Artikel gerne noch einmal durch oder [kontaktieren Sie uns](/de/docs/MDN/Community/Communication_channels), um Hilfe zu erhalten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen behandelt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein gängiges JavaScript-Muster besteht darin, eine Funktion als Argument an eine andere Funktion zu übergeben. Sie wird dann innerhalb der ersten Funktion aufgerufen. Das geht ein wenig über den Rahmen dieses Kurses hinaus, ist aber bald einen Blick wert.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
