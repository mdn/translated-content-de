---
title: Rückgabewerte von Funktionen
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}

Es gibt noch ein letztes wichtiges Konzept zu Funktionen zu besprechen — Rückgabewerte. Manche Funktionen geben keinen signifikanten Wert zurück, andere jedoch schon. Es ist wichtig zu verstehen, welche Werte sie zurückgeben, wie man sie im Code verwendet und wie man Funktionen erstellt, die nützliche Werte zurückgeben. All das werden wir im Folgenden abdecken.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie im vorherigen Artikel behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man Rückgabewerte bestehender Funktionen verwendet.</li>
          <li>Rückgabewerte zu Ihren eigenen Funktionen hinzufügen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen — die Werte, die eine Funktion bei ihrer Fertigstellung zurückgibt. Sie sind Rückgabewerten wahrscheinlich schon mehrmals begegnet, auch wenn Sie vielleicht nicht explizit darüber nachgedacht haben.

Lassen Sie uns zu einem bekannten Beispiel zurückkehren (aus einem [früheren Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion wird auf dem String `myText` aufgerufen und erhält zwei Parameter:

- Den zu findenden Teilstring (`"cold"`).
- Den String, durch den er ersetzt werden soll (`"warm"`).

Wenn die Funktion endet (fertig ausgeführt wird), gibt sie einen Wert zurück, nämlich einen neuen String, in dem der Ersatz vorgenommen wurde. Im obigen Code wird das Ergebnis dieses Rückgabewerts in der Variablen `newString` gespeichert.

Wenn Sie sich die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion auf der MDN-Referenzseite ansehen, finden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen wann immer möglich aufzunehmen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen führen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel gibt in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel erstellt haben, beim Aufruf der Funktion kein spezifischer Wert zurück. Sie sorgt lediglich dafür, dass ein Kasten an einer Stelle auf dem Bildschirm erscheint — das war's!

Im Allgemeinen wird ein Rückgabewert dort verwendet, wo die Funktion ein Zwischenschritt in einer Berechnung irgendeiner Art ist. Sie möchten zu einem Endergebnis gelangen, das einige Werte umfasst, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, damit es in einer Variablen gespeichert werden kann; und Sie können diese Variable im nächsten Schritt der Berechnung verwenden.

## Wie gibt man einen Wert zurück

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

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

In jeder Schleifeniteration werden drei Aufrufe der `random()`-Funktion durchgeführt, um einen zufälligen Wert für die aktuelle _x-Koordinate_, _y-Koordinate_ und den _Radius_ des Kreises zu generieren. Die `random()`-Funktion nimmt einen Parameter — eine Ganzzahl — und gibt eine zufällige Ganzzahl zwischen `0` und dieser Zahl zurück. Sie sieht folgendermaßen aus:

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

Wenn Sie Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgegeben hätten, würde die Zeile tatsächlich so ausgeführt, als ob sie so wäre:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe in der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte werden für die Funktionsaufrufe substituiert, bevor die Zeile selbst dann ausgeführt wird.

## Implementieren von Rückgabewerten von Funktionen

Lassen Sie uns versuchen, einige Funktionen mit Rückgabewerten zu schreiben.

1. Machen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)-Datei von GitHub. Dies ist eine einfache HTML-Seite, die ein Text-{{htmlelement("input")}}-Feld und einen Absatz enthält. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir eine Referenz auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter verschiedene Zahlen zu dieser anzuzeigen.

2. Fügen Sie diesem `<script>`-Element unterhalb der beiden vorhandenen Zeilen einige nützliche Funktionen hinzu:

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

   Die `squared()`- und `cubed()`-Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder den Würfel der Zahl zurück, die als Parameter angegeben wurde. Die `factorial()`-Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der gegebenen Zahl zurück.

3. Fügen Sie eine Möglichkeit hinzu, Informationen über die im Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignishandler unterhalb der bestehenden Funktionen hinzufügen:

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

Hier sind einige Erklärungen für die `addEventListener()`-Funktion im obigen Schritt 3:

- Durch das Hinzufügen eines `change`-Ereignis-Listeners wird diese Funktion immer dann ausgeführt, wenn das `change`-Ereignis auf dem Texteingabefeld ausgelöst wird — das heißt, wenn ein neuer Wert in das Textfeld eingegeben und abgeschickt wird (geben Sie einen Wert ein, dann verlassen Sie das Eingabefeld, indem Sie <kbd>Tab</kbd> oder <kbd>Return</kbd> drücken). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert im `input` in der Konstanten `num` gespeichert.
- Die `if`-Anweisung druckt eine Fehlermeldung, wenn der eingegebene Wert keine Zahl ist. Die Bedingung überprüft, ob der Ausdruck `isNaN(num)` `true` ergibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist — wenn ja, gibt sie `true` zurück, und wenn nicht, `false`.
- Wenn die Bedingung `false` ergibt, ist der `num`-Wert eine Zahl, und die Funktion gibt einen Satz im Absatz-Element aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()`-Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit der [abgeschlossenen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([sehen Sie sie auch live](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)).

### Fügen Sie ein paar eigene Funktionen hinzu!

An diesem Punkt möchten wir, dass Sie versuchen, ein paar eigene Funktionen zu schreiben und sie der Bibliothek hinzuzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche, funktionale Tipps:

- Sehen Sie sich ein weiteres Beispiel für das Schreiben von _Fehlerbehandlung_ in Funktionen an. Es ist im Allgemeinen eine gute Idee, sicherzustellen, dass erforderliche Parameter überprüft werden und dass optionale Parameter irgendeinen Standardwert erhalten. Auf diese Weise wird Ihr Programm weniger wahrscheinlich Fehler werfen.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Wenn Sie weiter in Ihrer Programmierkarriere voranschreiten, werden Sie die gleichen Dinge immer wieder tun. Es ist eine gute Idee, Ihre eigene Bibliothek mit nützlichen Funktionen zu erstellen, um diese Art von Dingen zu erledigen. Sie können sie in neuen Code übernehmen oder sie einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Zusammenfassung

Damit hätten wir es — Funktionen sind unterhaltsam, sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie alle Informationen über Funktionen, die wir Ihnen in den letzten Artikeln gegeben haben, verstanden und behalten haben.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen abdeckt.
- [Callbacks in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein verbreitetes Muster in JavaScript besteht darin, eine Funktion als Argument in eine andere Funktion zu übergeben. Sie wird dann innerhalb der ersten Funktion aufgerufen. Dies geht etwas über den Rahmen dieses Kurses hinaus, ist es aber bald wert, studiert zu werden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}
