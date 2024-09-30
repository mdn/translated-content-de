---
title: Funktionsrückgabewerte
slug: Learn/JavaScript/Building_blocks/Return_values
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Es gibt noch ein letztes wichtiges Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, andere jedoch schon. Es ist wichtig zu verstehen, was ihre Werte sind, wie man sie in Ihrem Code verwendet und wie man Funktionen nützliche Werte zurückgeben lässt. Wir werden das alles im Folgenden behandeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Grundkenntnisse in HTML und CSS,
          <a href="/de/docs/Learn/JavaScript/First_steps"
            >JavaScript Erste Schritte</a
          >,
          <a href="/de/docs/Learn/JavaScript/Building_blocks/Functions"
            >Funktionen — Wiederverwendbare Code-Blöcke</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um Funktionsrückgabewerte zu verstehen und zu lernen, wie man sie nutzt.
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie haben Rückgabewerte bereits mehrmals getroffen, obwohl Sie möglicherweise nicht explizit darüber nachgedacht haben.

Lassen Sie uns zu einem bekannten Beispiel zurückkehren (aus einem [früheren Artikel](/de/docs/Learn/JavaScript/Building_blocks/Functions#built-in_browser_functions) in dieser Serie):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion wird auf der `myText`-Zeichenkette aufgerufen und erhält zwei Parameter:

- Die zu findende Teilzeichenkette ('cold')
- Die Zeichenkette, mit der sie ersetzt wird ('warm')

Wenn die Funktion abgeschlossen ist (beendet), gibt sie einen Wert zurück, nämlich eine neue Zeichenkette, bei der die Ersetzung vorgenommen wurde. Im obigen Code wird das Ergebnis dieses Rückgabewerts in der Variablen `newString` gespeichert.

Wenn Sie sich die öffentliche Seite der [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktionsreferenz auf MDN ansehen, finden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen wann immer möglich bereitzustellen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen führen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel wird in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel erstellt haben, kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Sie lässt einfach irgendwo auf dem Bildschirm eine Box erscheinen — das ist alles!

Im Allgemeinen wird ein Rückgabewert verwendet, wenn die Funktion ein Zwischenschritt in einer Berechnung irgendeiner Art ist. Sie möchten ein Endergebnis erreichen, das einige Werte umfasst, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, sodass es in einer Variablen gespeichert werden kann; und Sie können diese Variable im nächsten Schritt der Berechnung verwenden.

### Verwendung von Rückgabewerten in Ihren eigenen Funktionen

Um einen Wert aus einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das [return](/de/docs/Web/JavaScript/Reference/Statements/return)-Schlüsselwort verwenden. Wir haben dies kürzlich in unserem Beispiel [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html) gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf einem HTML-{{htmlelement("canvas")}}:

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

In jeder Schleifeniteration werden drei Aufrufe der `random()`-Funktion vorgenommen, um einen zufälligen Wert für die aktuelle Kreis-_x-Koordinate_, _y-Koordinate_ und _Radius_ zu erzeugen. Die `random()`-Funktion nimmt einen Parameter — eine ganze Zahl — und gibt eine zufällige ganze Zahl zwischen `0` und dieser Zahl zurück. Sie sieht so aus:

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

In jedem Aufruf der Funktion `Math.floor(Math.random() * number)` wird das Ergebnis der Berechnung zurückgegeben. Dieser Rückgabewert erscheint an den Punkt, an dem die Funktion aufgerufen wurde, und der Code läuft weiter.

Also wenn Sie folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, wird die Zeile tatsächlich ausgeführt, als ob sie dies wäre:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe auf der Zeile werden zuerst ausgeführt und ihre Rückgabewerte werden durch die Funktionsaufrufe ersetzt, bevor die Zeile selbst dann ausgeführt wird.

## Aktives Lernen: unsere eigene Rückgabewertfunktion

Lassen Sie uns versuchen, unsere eigenen Funktionen mit Rückgabewerten zu schreiben.

1. Erstellen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html) Datei von GitHub. Dies ist eine einfache HTML-Seite mit einem Text-{{htmlelement("input")}}-Feld und einem Absatz. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir eine Referenz zu beiden HTML-Elementen in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und verschiedene damit zusammenhängende Zahlen darunter anzuzeigen.

2. Fügen Sie einige nützliche Funktionen zu diesem `<script>`-Element unter den beiden bestehenden Zeilen hinzu:

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

   Die `squared()`- und `cubed()`-Funktionen sind relativ selbsterklärend — sie geben das Quadrat bzw. den Würfel der als Parameter übergebenen Zahl zurück. Die `factorial()`-Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der gegebenen Zahl zurück.

3. Fügen Sie eine Methode hinzu, um Informationen über die eingegebene Zahl in das Texteingabefeld auszugeben, indem Sie den folgenden Ereignishandler unter den vorhandenen Funktionen hinzufügen:

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

Hier einige Erklärungen zur `addEventListener`-Funktion im obigen Schritt 3:

- Durch Hinzufügen eines Listeners zum `change`-Ereignis wird diese Funktion ausgeführt, wann immer das `change`-Ereignis an der Texteingabe ausgelöst wird — also wenn ein neuer Wert in die Texteingabe eingegeben und gesendet wird (z.B. einen Wert eingeben, dann den Fokus aus der Eingabe durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> entfernen). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert in der `input` in der Konstanten `num` gespeichert.
- Die if-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung prüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist — wenn ja, gibt sie `true` zurück, und wenn nicht, `false`.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl und die Funktion gibt einen Satz innerhalb des Absatzelements aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()`-Funktionen auf, um die erforderlichen Werte zu berechnen.

> [!NOTE]
> Sollten Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) ([sehen Sie es auch live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), oder fragen Sie uns um Hilfe.

## Jetzt sind Sie dran!

An diesem Punkt möchten wir, dass Sie versuchen, ein paar eigene Funktionen zu schreiben und sie der Bibliothek hinzuzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit gegebenem Radius?

Einige zusätzliche Tipps zu Funktionen:

- Sehen Sie sich ein weiteres Beispiel an, um Fehlerbehandlung in Funktionen zu schreiben. Es ist allgemein eine gute Idee sicherzustellen, dass alle notwendigen Parameter validiert werden und dass alle optionalen Parameter irgendeine Art von Standardwert erhalten. Auf diese Weise ist Ihr Programm weniger wahrscheinlich, Fehler zu werfen.
- Denken Sie über die Idee nach, eine _Funktionsbibliothek_ zu erstellen. Wenn Sie tiefer in Ihre Programmierkarriere eintauchen, werden Sie anfangen, dieselben Dinge immer und immer wieder zu tun. Es ist eine gute Idee, Ihre eigene Bibliothek von Dienstprogrammfunktionen zu erstellen, um diese Arten von Aufgaben zu erledigen. Sie können sie in neuen Code kopieren oder sogar einfach auf HTML-Seiten anwenden, wo auch immer Sie sie benötigen.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions).

## Schlussfolgerung

Da haben wir es — Funktionen sind spannend, sehr nützlich und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie relativ verständlich.

Falls es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel noch einmal zu lesen oder [kontaktieren Sie uns](/de/docs/Learn#contact_us) um Hilfe zu bitten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der fortgeschrittenere Informationen zu Funktionen enthält.
- [Callbacks in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein häufiger JavaScript-Muster ist, eine Funktion in eine andere Funktion _als Argument_ zu übergeben. Diese wird dann innerhalb der ersten Funktion aufgerufen. Dies liegt ein wenig außerhalb des Umfangs dieses Kurses, aber es lohnt sich, es bald zu studieren.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
