---
title: Rückgabewerte von Funktionen
slug: Learn/JavaScript/Building_blocks/Return_values
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Es gibt ein letztes wichtiges Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Manche Funktionen geben keinen signifikanten Wert zurück, andere jedoch schon. Es ist wichtig zu verstehen, was ihre Werte sind, wie Sie sie in Ihrem Code verwenden können und wie Sie Funktionen dazu bringen, nützliche Werte zurückzugeben. All das werden wir im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Grundlegendes Verständnis von HTML und CSS,
          <a href="/de/docs/Learn/JavaScript/First_steps">JavaScript erste Schritte</a>,
          <a href="/de/docs/Learn/JavaScript/Building_blocks/Functions">Funktionen — wiederverwendbare Codeblöcke</a>.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von Rückgabewerten von Funktionen und deren Nutzung.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, was sie klingen — die Werte, die eine Funktion beim Abschluss zurückgibt. Sie sind bereits mehrfach auf Rückgabewerte gestoßen, auch wenn Sie möglicherweise nicht explizit darüber nachgedacht haben.

Kehren wir zu einem bekannten Beispiel zurück (aus einem [früheren Artikel](/de/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion wird auf dem `myText`-String aufgerufen und erhält zwei Parameter:

- Den zu findenden Teilstring ('cold')
- Den String, der an seiner Stelle eingesetzt werden soll ('warm')

Wenn die Funktion abgeschlossen ist (d.h. beendet ist), gibt sie einen Wert zurück, der ein neuer String mit dem vorgenommenen Austausch ist. Im obigen Code wird das Ergebnis dieses Rückgabewerts in der Variable `newString` gespeichert.

Wenn Sie sich die Referenzseite der [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion auf MDN ansehen, werden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value) finden. Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen wo immer möglich einzuschließen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel, in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel erstellt haben, wird kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Sie lässt lediglich irgendwo auf dem Bildschirm eine Box erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert verwendet, wenn die Funktion ein Zwischenschritt bei einer Art Berechnung ist. Sie möchten ein Endergebnis erreichen, welches einige Werte beinhaltet, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, damit es in einer Variablen gespeichert werden kann, und Sie können diese Variable im nächsten Berechnungsschritt verwenden.

### Rückgabewerte in eigenen Funktionen verwenden

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das [return](/de/docs/Web/JavaScript/Reference/Statements/return)-Schlüsselwort verwenden. Wir haben dies kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML-{{htmlelement("canvas")}}:

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

In jeder Schleifeniteration werden drei Aufrufe der `random()`-Funktion gemacht, um einen zufälligen Wert für den aktuellen Kreis seiner _x-Koordinate_, _y-Koordinate_ und _Radius_ bzw. zu erzeugen. Die `random()`-Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine ganze Zufallszahl zwischen `0` und dieser Zahl zurück. Sie sieht wie folgt aus:

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

Wir geben das Ergebnis der Berechnung `Math.floor(Math.random() * number)` jedes Mal zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an der Stelle, an der die Funktion aufgerufen wurde, und der Code läuft weiter.

Wenn Sie also Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich wie folgt ausgeführt:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe auf der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte werden für die Funktionsaufrufe ersetzt, bevor die Zeile selbst ausgeführt wird.

## Aktives Lernen: unsere eigene Funktion mit Rückgabewert

Probieren wir es aus, unsere eigenen Funktionen mit Rückgabewerten zu erstellen.

1. Machen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)-Datei von GitHub. Dies ist eine einfache HTML-Seite, die ein Text-{{htmlelement("input")}}-Feld und einen Absatz enthält. Es gibt auch ein {{htmlelement("script")}}-Element, in welchem wir eine Referenz zu beiden HTML-Elementen in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter unterschiedliche damit verbundene Zahlen anzuzeigen.

2. Fügen Sie einige nützliche Funktionen in dieses `<script>`-Element unterhalb der beiden vorhandenen Zeilen hinzu:

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

   Die `squared()`- und `cubed()`-Funktionen sind relativ offensichtlich — sie geben das Quadrat bzw. den Würfel der übergebenen Zahl zurück. Die `factorial()`-Funktion gibt die [Fakultät](https://de.wikipedia.org/wiki/Fakultät) der gegebenen Zahl zurück.

3. Schließen Sie eine Möglichkeit ein, Informationen über die in das Textfeld eingegebene Zahl auszugeben, indem Sie den folgenden Ereignis-Handler unter den vorhandenen Funktionen hinzufügen:

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

Hier sind einige Erklärungen für die `addEventListener`-Funktion im obigen Schritt 3:

- Indem ein Listener für das `change`-Ereignis hinzugefügt wird, läuft diese Funktion immer dann, wenn das `change`-Ereignis auf dem Texteingabe-Feld ausgelöst wird — das heißt, wenn ein neuer Wert in das Texteingabefeld eingegeben und abgeschickt wird (z.B. indem ein Wert eingegeben, dann der Fokus aus dem Eingabefeld durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> entfernt wird). Wenn diese anonyme Funktion läuft, wird der Wert im `input` in der Konstante `num` gespeichert.
- Die if-Anweisung druckt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung prüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist — wenn ja, gibt sie `true` zurück, andernfalls `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl, und die Funktion gibt einen Satz innerhalb des Absatz-Elements aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()`-Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, überprüfen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([sehen Sie es live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html) ebenfalls), oder fragen Sie uns um Hilfe.

## Jetzt sind Sie dran!

An diesem Punkt möchten wir, dass Sie selbst einige Funktionen schreiben und sie zur Bibliothek hinzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche Tipps zu Funktionen:

- Sehen Sie sich ein weiteres Beispiel an, um _Fehlerbehandlung_ in Funktionen einzuschreiben. Es ist in der Regel eine gute Idee, sicherzustellen, dass alle notwendigen Parameter validiert werden, und dass alle optionalen Parameter einen Standardwert haben. Auf diese Weise ist Ihr Programm weniger anfällig für Fehler.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Wenn Sie in Ihrer Programmierkarriere weiter voranschreiten, werden Sie immer wieder dieselben Arten von Aufgaben erledigen. Es ist eine gute Idee, Ihre eigene Bibliothek von Hilfsfunktionen zu erstellen, um solche Aufgaben zu erledigen. Sie können sie in neuen Code kopieren oder einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions).

## Fazit

Da haben wir es also — Funktionen sind unterhaltsam, sehr nützlich, und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Falls Sie etwas nicht verstanden haben, lesen Sie den Artikel gerne noch einmal durch, oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu erhalten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein ausführlicher Leitfaden, der weiterführende Informationen zu Funktionen behandelt.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein häufiges JavaScript-Muster besteht darin, eine Funktion als Argument in eine andere Funktion zu übergeben. Diese wird dann innerhalb der ersten Funktion aufgerufen. Dies liegt ein wenig außerhalb des Umfangs dieses Kurses, ist jedoch lohnenswert zu studieren, bevor zu lange gewartet wird.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
