---
title: Funktionsrückgabewerte
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}

Es gibt ein letztes wesentliches Konzept über Funktionen, das wir besprechen müssen — Rückgabewerte. Einige Funktionen geben keinen signifikanten Wert zurück, aber andere tun es. Es ist wichtig zu verstehen, was ihre Werte sind, wie Sie sie in Ihrem Code verwenden und wie Sie Funktionen dazu bringen können, nützliche Werte zurückzugeben. Wir werden all diese Punkte unten behandeln.

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
          <li>Rückgabewerte zu Ihren eigenen Funktionen hinzufügen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen — die Werte, die eine Funktion zurückgibt, wenn sie abgeschlossen ist. Sie sind Rückgabewerten bereits mehrmals begegnet, obwohl Sie vielleicht nicht explizit darüber nachgedacht haben.

Kehren wir zu einem vertrauten Beispiel zurück (aus einem [vorherigen Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) in dieser Serie):

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
- Den String, der ihn ersetzen soll (`"warm"`).

Wenn die Funktion abgeschlossen ist (also ausgeführt wurde), gibt sie einen Wert zurück, nämlich einen neuen String, bei dem die Ersetzung stattgefunden hat. Im obigen Code wird das Ergebnis dieses Rückgabewertes in der Variablen `newString` gespeichert.

Wenn Sie sich die [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktionsreferenzseite auf MDN ansehen, finden Sie einen Abschnitt namens [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Es ist sehr nützlich, zu wissen und zu verstehen, welche Werte von Funktionen zurückgegeben werden, daher versuchen wir, diese Informationen wann immer möglich aufzunehmen.

Einige Funktionen geben keinen Wert zurück. (In diesen Fällen listen unsere Referenzseiten den Rückgabewert als [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) auf.) Zum Beispiel in der [`displayMessage()`](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html#L50)-Funktion, die wir im vorherigen Artikel erstellt haben, wird kein spezifischer Wert zurückgegeben, wenn die Funktion aufgerufen wird. Sie lässt einfach irgendwo auf dem Bildschirm ein Fenster erscheinen — das war's!

Im Allgemeinen wird ein Rückgabewert verwendet, wenn die Funktion ein Zwischenschritt bei einer Art Berechnung ist. Sie möchten zu einem Endergebnis gelangen, das einige Werte beinhaltet, die von einer Funktion berechnet werden müssen. Nachdem die Funktion den Wert berechnet hat, kann sie das Ergebnis zurückgeben, sodass es in einer Variablen gespeichert werden kann. Sie können diese Variable im nächsten Schritt der Berechnung verwenden.

## Verwendung von Rückgabewerten in Ihren eigenen Funktionen

Um einen Wert von einer benutzerdefinierten Funktion zurückzugeben, müssen Sie das [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Schlüsselwort verwenden. Wir haben das kürzlich in unserem [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel gesehen. Unsere `draw()`-Funktion zeichnet 100 zufällige Kreise irgendwo auf ein HTML-{{htmlelement("canvas")}}:

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

In jeder Schleifeniteration werden drei Aufrufe an die `random()`-Funktion durchgeführt, um einen zufälligen Wert für die aktuelle Kreis- _x-Koordinate_, _y-Koordinate_ und _Radius_ zu erzeugen. Die `random()`-Funktion nimmt einen Parameter an — eine ganze Zahl — und gibt eine zufällige ganze Zahl zwischen `0` und dieser Zahl zurück. Sie sieht so aus:

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

Wir geben das Ergebnis der Berechnung `Math.floor(Math.random() * number)` jedes Mal zurück, wenn die Funktion aufgerufen wird. Dieser Rückgabewert erscheint an dem Punkt, an dem die Funktion aufgerufen wurde, und der Code geht weiter.

Wenn Sie also Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Wenn die drei `random()`-Aufrufe die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich so ausgeführt werden, als wäre es diese:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Die Funktionsaufrufe in der Zeile werden zuerst ausgeführt, und ihre Rückgabewerte ersetzen die Funktionsaufrufe, bevor die Zeile selbst ausgeführt wird.

## Aktives Lernen: Eine Rückgabewert-Funktion

Lassen Sie uns einige Funktionen schreiben, die Rückgabewerte enthalten.

1. Erstellen Sie eine lokale Kopie der [function-library.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library.html)-Datei von GitHub. Dies ist eine einfache HTML-Seite, die ein Text-{{htmlelement("input")}}-Feld und einen Absatz enthält. Es gibt auch ein {{htmlelement("script")}}-Element, in dem wir eine Referenz auf beide HTML-Elemente in zwei Variablen gespeichert haben. Diese Seite ermöglicht es Ihnen, eine Zahl in das Textfeld einzugeben und darunter verschiedene damit zusammenhängende Zahlen anzuzeigen.

2. Fügen Sie einige nützliche Funktionen zu diesem `<script>`-Element unterhalb der beiden bestehenden Zeilen hinzu:

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

   Die `squared()`- und `cubed()`-Funktionen sind ziemlich offensichtlich — sie geben das Quadrat oder den Würfel der als Parameter übergebenen Zahl zurück. Die `factorial()`-Funktion gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der gegebenen Zahl zurück.

3. Fügen Sie eine Möglichkeit hinzu, Informationen über die in das Text-Input eingegebene Zahl auszugeben, indem Sie den folgenden Ereignishandler unterhalb der bestehenden Funktionen hinzufügen:

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

Hier sind einige Erklärungen zur `addEventListener`-Funktion im obigen Schritt 3:

- Durch das Hinzufügen eines Listeners für das `change`-Ereignis wird diese Funktion jedes Mal ausgeführt, wenn das `change`-Ereignis auf dem Text-Input ausgelöst wird — das heißt, wenn ein neuer Wert in das Text-`input` eingegeben und übermittelt wird (z.B. einen Wert eingeben, dann das Input durch Drücken von <kbd>Tab</kbd> oder <kbd>Return</kbd> ent-fokussieren). Wenn diese anonyme Funktion ausgeführt wird, wird der Wert im `input` in der Konstante `num` gespeichert.
- Die if-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung überprüft, ob der Ausdruck `isNaN(num)` `true` zurückgibt. Die [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN)-Funktion testet, ob der `num`-Wert keine Zahl ist — wenn ja, gibt sie `true` zurück, und falls nicht, gibt sie `false` zurück.
- Wenn die Bedingung `false` zurückgibt, ist der `num`-Wert eine Zahl und die Funktion gibt einen Satz im Absatz-Element aus, der die Quadrat-, Würfel- und Fakultätswerte der Zahl angibt. Der Satz ruft die `squared()`, `cubed()` und `factorial()`-Funktionen auf, um die benötigten Werte zu berechnen.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-library-finished.html) (sehen Sie es sich auch [live an](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), oder fragen Sie uns um Hilfe.

## Jetzt sind Sie an der Reihe!

An diesem Punkt möchten wir, dass Sie versuchen, ein paar Funktionen selbst zu schreiben und sie zur Bibliothek hinzuzufügen. Wie wäre es mit der Quadrat- oder Kubikwurzel der Zahl? Oder dem Umfang eines Kreises mit einem gegebenen Radius?

Einige zusätzliche Tipps zu Funktionen:

- Schauen Sie sich ein weiteres Beispiel dafür an, _Fehlerbehandlung_ in Funktionen zu integrieren. Es ist generell eine gute Idee, sicherzustellen, dass alle notwendigen Parameter validiert werden und dass alle optionalen Parameter irgendeine Art von Standardwert haben. Auf diese Weise ist Ihr Programm weniger anfällig für Fehler.
- Denken Sie darüber nach, eine _Funktionsbibliothek_ zu erstellen. Wenn Sie weiter in Ihrer Programmierkarriere voranschreiten, werden Sie beginnen, die gleichen Arten von Dingen immer wieder zu tun. Es ist eine gute Idee, Ihre eigene Bibliothek mit Hilfsfunktionen zu erstellen, um diese Art von Dingen zu erledigen. Sie können sie in neuen Code kopieren oder sie einfach auf HTML-Seiten anwenden, wo immer Sie sie benötigen.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie sich [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Building_blocks/Test_your_skills:_Functions) an.

## Fazit

Damit haben wir es — Funktionen sind unterhaltsam, sehr nützlich und obwohl es viel über ihre Syntax und Funktionalität zu besprechen gibt, sind sie ziemlich verständlich.

Wenn es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel noch einmal durchzulesen oder [kontaktieren Sie uns](/de/docs/MDN/Community/Communication_channels), um Hilfe zu bitten.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) — ein detaillierter Leitfaden, der umfassendere Informationen zu Funktionen enthält.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — ein häufiges JavaScript-Muster besteht darin, eine Funktion als Argument in eine andere Funktion zu übergeben. Diese wird dann innerhalb der ersten Funktion aufgerufen. Dies ist etwas über den Umfang dieses Kurses hinaus, aber es lohnt sich bald zu lernen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Events", "Learn_web_development/Core/Scripting")}}
