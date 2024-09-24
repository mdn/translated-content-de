---
title: Funktionsrückgabewerte
slug: Learn/JavaScript/Building_blocks/Return_values
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Es gibt noch ein letztes wichtiges Konzept zu Funktionen, das wir besprechen müssen: Rückgabewerte. Manche Funktionen geben keinen signifikanten Wert zurück, während andere dies tun. Es ist wichtig zu verstehen, was ihre Werte sind, wie man sie in Ihrem Code verwendet und wie man Funktionen dazu bringt, nützliche Werte zurückzugeben. Wir werden dies alles im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Ein grundlegendes Verständnis von HTML und CSS,
          <a href="/de/docs/Learn/JavaScript/First_steps">Erste Schritte mit JavaScript</a>,
          <a href="/de/docs/Learn/JavaScript/Building_blocks/Functions">Funktionen — wiederverwendbare Codeblöcke</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um Funktionsrückgabewerte zu verstehen und wie man sie nutzt.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, was ihr Name andeutet — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind Rückgabewerten bereits mehrmals begegnet, auch wenn Sie vielleicht noch nicht bewusst darüber nachgedacht haben.

Lassen Sie uns zu einem bekannten Beispiel zurückkehren (aus einem [früheren Artikel](/de/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Sollte "The weather is warm" ausgeben
// die replace() String-Funktion nimmt einen String,
// ersetzt eine Teilzeichenfolge durch eine andere und gibt
// einen neuen String mit dem vorgenommenen Ersatz zurück
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Funktion wird auf dem `myText`-String aufgerufen und erhält zwei Parameter:

- Die zu findende Teilzeichenfolge ('cold')
- Den String, um den sie ersetzt werden soll ('warm')

Wenn die Funktion abgeschlossen ist (also beendet ist), gibt sie einen Wert zurück, der ein neuer String mit dem vorgenommenen Ersatz ist. Im obigen Code wird das Ergebnis dieses Rückgabewerts in der Variablen `newString` gespeichert.

Wenn Sie sich die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Funktionsseite im MDN-Referenzhandbuch ansehen, sehen Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen wo immer möglich einzuschließen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel gibt es in der von uns im vorherigen Artikel erstellten [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50) Funktion keinen spezifischen Wert, der bei Aufruf der Funktion zurückgegeben wird. Sie lässt einfach irgendwo auf dem Bildschirm eine Box erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert verwendet, wenn die Funktion ein Zwischenschritt in einer Berechnung ist. Sie möchten zu einem Endergebnis gelangen, das einige Werte erfordert, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, sodass es in einer Variablen gespeichert werden kann; und Sie können diese Variable im nächsten Berechnungsschritt verwenden.

### Rückgabewerte in eigenen Funktionen verwenden

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das [return](/de/docs/Web/JavaScript/Reference/Statements/return) Schlüsselwort verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel gesehen. Unsere `draw()` Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML {{htmlelement("canvas")}}:

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

In jeder Schleifeniteration werden drei Aufrufe der `random()` Funktion durchgeführt, um jeweils einen Zufallswert für das aktuelle Kreis-_x-Koordinate_, _y-Koordinate_ und _Radius_ zu erzeugen. Die `random()` Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine Ganzzahl zwischen `0` und dieser Zahl zurück. Sie sieht so aus:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Dies könnte folgendermaßen geschrieben werden:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

Aber die erste Version ist schneller zu schreiben und kompakter.

Wir geben das Ergebnis der Berechnung `Math.floor(Math.random() * number)` jedes Mal zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an der Stelle, an der die Funktion aufgerufen wurde, und der Code läuft weiter.

Wenn Sie das Folgende ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Falls die drei `random()` Aufrufe die Werte `500`, `200` und `35` liefern, würde die Zeile tatsächlich so ausgeführt werden, als ob sie so geschrieben wäre:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe in der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte werden für die Funktionsaufrufe eingesetzt, bevor die Zeile selbst dann ausgeführt wird.

## Aktives Lernen: unsere eigene Funktion mit Rückgabewert

Lassen Sie uns versuchen, unsere eigenen Funktionen zu schreiben, die Rückgabewerte verwenden.

1. Erstellen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) Datei von GitHub. Dies ist eine einfache HTML-Seite mit einem Text-{{htmlelement("input")}}-Feld und einem Absatz. Es gibt auch ein {{htmlelement("script")}}, in dem wir eine Referenz auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und verschiedene Zahlen, die damit in Zusammenhang stehen, darunter anzuzeigen.

2. Fügen Sie einige nützliche Funktionen zu diesem `<script>` Element unter den beiden bestehenden Zeilen hinzu:

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

   Die `squared()` und `cubed()` Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder den Würfel der Zahl zurück, die als Parameter übergeben wurde. Die `factorial()` Funktion gibt die [Fakultät](https://de.wikipedia.org/wiki/Fakult%C3%A4t) der angegebenen Zahl zurück.

3. Fügen Sie eine Möglichkeit hinzu, Informationen über die in das Textfeld eingegebene Zahl auszugeben, indem Sie den folgenden Event-Handler unter den vorhandenen Funktionen hinzufügen:

   ```js
   input.addEventListener("change", () => {
     const num = parseFloat(input.value);
     if (isNaN(num)) {
       para.textContent = "Sie müssen eine Zahl eingeben!";
     } else {
       para.textContent = `${num} zum Quadrat ist ${squared(num)}. `;
       para.textContent += `${num} hoch drei ist ${cubed(num)}. `;
       para.textContent += `${num} Fakultät ist ${factorial(num)}. `;
     }
   });
   ```

4. Speichern Sie Ihren Code, laden Sie ihn in einem Browser und probieren Sie ihn aus.

Hier sind einige Erklärungen zur `addEventListener` Funktion in Schritt 3 oben:

- Durch das Hinzufügen eines Listeners zum `change`-Ereignis wird diese Funktion immer dann ausgeführt, wenn das `change`-Ereignis auf der Texteingabe ausgelöst wird — also wenn ein neuer Wert in die Texteingabe eingegeben und übergeben wird (z. B. geben Sie einen Wert ein und wechseln Sie dann durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> den Fokus von der Eingabe). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert in der `input` in der Konstante `num` gespeichert.
- Die if-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung prüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN) Funktion testet, ob der `num` Wert keine Zahl ist — in diesem Fall gibt sie `true` zurück, andernfalls `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num` Wert eine Zahl und die Funktion gibt einen Satz im Absatz-Element aus, der die Quadrat-, Kubik- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()` Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([siehe es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html) auch), oder fragen Sie uns um Hilfe.

## Jetzt sind Sie dran!

An diesem Punkt möchten wir, dass Sie versuchen, ein paar eigene Funktionen zu schreiben und sie zur Bibliothek hinzuzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder der Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche Tipps im Zusammenhang mit Funktionen:

- Sehen Sie sich ein weiteres Beispiel für das Schreiben von _Fehlerbehandlung_ in Funktionen an. Es ist generell eine gute Idee, sicherzustellen, dass alle erforderlichen Parameter validiert werden und dass alle optionalen Parameter einen Standardwert haben. Auf diese Weise ist das Programm weniger wahrscheinlich, Fehler auszulösen.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Je weiter Sie in Ihrer Programmierkarriere voranschreiten, desto häufiger werden Sie die gleichen Arbeiten wiederholen. Es ist eine gute Idee, Ihre eigene Bibliothek mit Dienstprogrammfunktionen zu erstellen, um diese Aufgaben zu erledigen. Sie können sie in neuen Code kopieren oder sie einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests machen, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions).

## Fazit

Da haben wir es – Funktionen machen Spaß, sind sehr nützlich und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Falls es etwas gibt, was Sie nicht verstanden haben, zögern Sie nicht, den Artikel erneut zu lesen, oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu erhalten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen abdeckt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein häufiges JavaScript-Muster besteht darin, eine Funktion als Argument in eine andere Funktion zu übergeben. Sie wird dann in der ersten Funktion aufgerufen. Dies liegt etwas außerhalb des Umfangs dieses Kurses, ist jedoch auf lange Sicht lohnenswert, es zu studieren.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
