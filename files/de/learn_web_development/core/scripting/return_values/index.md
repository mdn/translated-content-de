---
title: Funktions-Rückgabewerte
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: b8c317e606fff19152e9431be45986c50846b0ac
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes wichtiges Konzept über Funktionen, das wir besprechen müssen – Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, andere jedoch schon. Es ist wichtig zu verstehen, was ihre Werte sind, wie man sie in Ihrem Code verwendet und wie man Funktionen nützliche Werte zurückgeben lässt. Wir werden all dies im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie im vorherigen Kurs behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Was Rückgabewerte sind.</li>
          <li>Wie man die Rückgabewerte vorhandener Funktionen nutzt.</li>
          <li>Rückgabewerte zu Ihren eigenen Funktionen hinzufügen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, was ihr Name sagt — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind Rückgabewerten bereits mehrmals begegnet, auch wenn Sie möglicherweise nicht explizit darüber nachgedacht haben.

Kehren wir zu einem vertrauten Beispiel zurück (aus einem [vorherigen Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) wird auf der Zeichenkette `myText` aufgerufen und erhält zwei Parameter übergeben:

- Der zu findende Substring (`"cold"`).
- Die Zeichenkette, durch die er ersetzt werden soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (das Ausführen beendet), gibt sie einen Wert zurück, der eine neue Zeichenkette mit dem vorgenommenen Ersatz darstellt. Im obigen Code wird das Ergebnis dieses Rückgabewerts in der Variablen `newString` gespeichert.

Wenn Sie sich auf der MDN-Referenzseite zur [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Funktion den Abschnitt über den [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value) ansehen, werden Sie feststellen, dass es sehr nützlich ist zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden. Daher versuchen wir, diese Informationen wo möglich einzuschließen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel wird in der Funktion [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50), die wir im vorherigen Artikel erstellt haben, kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Sie lässt einfach irgendwo einen Kasten auf dem Bildschirm erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert dort verwendet, wo die Funktion einen Zwischenschritt in einer Art Berechnung darstellt. Sie möchten zu einem endgültigen Ergebnis gelangen, das einige Werte beinhaltet, die durch eine Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, sodass es in einer Variablen gespeichert werden kann und Sie diese Variable im nächsten Berechnungsschritt verwenden können.

## Wie man einen Wert zurückgibt

Um einen Wert von einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel in Aktion gesehen. Unsere `draw()` Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

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

Innerhalb jeder Schleifeniteration werden drei Aufrufe der Funktion `random()` vorgenommen, um einen Zufallswert für den aktuellen Kreis _x-Koordinate_, _y-Koordinate_ und _Radius_ zu generieren. Die `random()` Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine zufällige ganze Zahl zwischen `0` und dieser Zahl zurück. Es sieht so aus:

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

Wenn Sie Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()` Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich so ausgeführt werden, als wäre sie dies:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe auf der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte werden anstelle der Funktionsaufrufe eingesetzt, bevor die Zeile selbst dann ausgeführt wird.

## Implementieren von Funktions-Rückgabewerten

Lassen Sie uns versuchen, einige Funktionen zu schreiben, die Rückgabewerte enthalten.

1. Erstellen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) Datei von GitHub. Dies ist eine einfache HTML-Seite mit einem Text-{{htmlelement("input")}} Feld und einem Absatz. Es gibt auch ein {{htmlelement("script")}} Element, in dem wir eine Referenz auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter verschiedene damit zusammenhängende Zahlen anzuzeigen.

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

   Die `squared()` und `cubed()` Funktionen sind relativ intuitiv — sie geben das Quadrat bzw. den Kubus der übergebenen Zahl als Parameter zurück. Die `factorial()` Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der gegebenen Zahl zurück.

3. Fügen Sie eine Möglichkeit hinzu, Informationen über die in das Texteingabefeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignishandler unterhalb der vorhandenen Funktionen einfügen:

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

Hier sind einige Erläuterungen zur `addEventListener()` Funktion in Schritt 3 oben:

- Durch Hinzufügen eines `change` Ereignislisteners wird diese Funktion immer dann ausgeführt, wenn das `change` Ereignis auf dem Texteingabefeld ausgelöst wird — also, wenn ein neuer Wert in die Texteingabe eingegeben und abgeschickt wird (geben Sie einen Wert ein, und entfernen Sie den Fokus von der Eingabe mit <kbd>Tab</kbd> oder <kbd>Return</kbd>). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert in der `input` im Konstanten `num` gespeichert.
- Die `if`-Anweisung druckt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung prüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN) Funktion testet, ob der `num` Wert keine Zahl ist — wenn ja, wird `true` zurückgegeben, wenn nicht, `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num` Wert eine Zahl und die Funktion druckt einen Satz im Absatz-Element aus, der die Quadrat-, Kubik- und Fakultätswerte der Zahl angibt. Der Satz ruft die Funktionen `squared()`, `cubed()` und `factorial()` auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)).

### Fügen Sie einige eigene Funktionen hinzu!

An diesem Punkt möchten wir, dass Sie ein paar eigene Funktionen schreiben und sie zur Bibliothek hinzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit gegebenem Radius?

Einige zusätzliche Tipps zu Funktionen:

- Sehen Sie sich ein weiteres Beispiel für das Schreiben von _Fehlerbehandlung_ in Funktionen an. Es ist im Allgemeinen eine gute Idee zu überprüfen, ob alle notwendigen Parameter validiert sind und dass alle optionalen Parameter einen Standardwert zugewiesen bekommen. Auf diese Weise wird Ihr Programm weniger wahrscheinlich Fehler werfen.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Wenn Sie weiter in Ihrer Programmierkarriere voranschreiten, werden Sie dieselben Arten von Dingen immer wieder tun. Es ist eine gute Idee, Ihre eigene Bibliothek mit Hilfsfunktionen zu erstellen, um solche Dinge zu erledigen. Sie können sie in neuen Code kopieren oder sogar einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Zusammenfassung

Damit haben wir es — Funktionen sind spaßig, sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu sagen gibt, sind sie relativ verständlich.

Im nächsten Artikel werden wir Ihnen einige Tests zur Verfügung stellen, die Sie verwenden können, um zu überprüfen, wie gut Sie alle Informationen, die wir Ihnen in den letzten Artikeln zu Funktionen gegeben haben, verstanden und in Erinnerung behalten haben.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen behandelt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein übliches JavaScript-Muster ist es, eine Funktion in eine andere Funktion _als Argument_ zu übergeben. Sie wird dann innerhalb der ersten Funktion aufgerufen. Dies liegt etwas außerhalb des Umfangs dieses Kurses, sollte aber bald untersucht werden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}
