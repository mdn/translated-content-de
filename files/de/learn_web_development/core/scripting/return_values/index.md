---
title: Rückgabewerte von Funktionen
slug: Learn_web_development/Core/Scripting/Return_values
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}

Ein letztes wesentliches Konzept zu Funktionen müssen wir noch besprechen: Rückgabewerte. Manche Funktionen geben keinen bedeutsamen Wert zurück, andere dagegen schon. Es ist wichtig zu verstehen, welche Werte sie zurückgeben, wie Sie diese in Ihrem Code verwenden und wie Sie Funktionen dazu bringen, nützliche Werte zurückzugeben. All das behandeln wir im Folgenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den Grundlagen von JavaScript-Funktionen, die in der vorherigen Lektion behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was Rückgabewerte sind.</li>
          <li>Rückgabewerte vorhandener Funktionen verwenden.</li>
          <li>Eigene Funktionen mit Rückgabewerten versehen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was sind Rückgabewerte?

**Rückgabewerte** sind genau das, wonach sie klingen: Werte, die eine Funktion zurückgibt, wenn sie ihre Ausführung beendet. Rückgabewerten sind Sie bereits mehrmals begegnet, auch wenn Sie sich darüber vielleicht noch keine Gedanken gemacht haben.

Kehren wir zu einem bekannten Beispiel zurück (aus einem [früheren Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions#built-in_browser_functions) dieser Reihe):

```js
const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Die Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) wird für den String `myText` aufgerufen. Dabei werden ihr zwei Parameter übergeben:

- Der zu suchende Teilstring (`"cold"`).
- Der String, durch den er ersetzt werden soll (`"warm"`).

Wenn die Funktion ihre Ausführung beendet, gibt sie einen Wert zurück: einen neuen String, in dem die Ersetzung vorgenommen wurde. Im obigen Code wird dieser Rückgabewert in der Variablen `newString` gespeichert.

Auf der MDN-Referenzseite zur Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) finden Sie einen Abschnitt zum [Rückgabewert](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace#return_value). Zu wissen und zu verstehen, welche Werte Funktionen zurückgeben, ist sehr nützlich. Deshalb versuchen wir, diese Information nach Möglichkeit überall anzugeben.

Manche Funktionen geben keinen Wert zurück. (In diesen Fällen geben unsere Referenzseiten als Rückgabewert [`void`](/de/docs/Web/JavaScript/Reference/Operators/void) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) an.) Beispielsweise gibt die Funktion `displayMessage()`, die wir im [Beispiel des vorherigen Artikels](/de/docs/Learn_web_development/Core/Scripting/Build_your_own_function#final_result) erstellt haben, beim Aufruf keinen bestimmten Wert zurück. Sie lässt lediglich irgendwo auf dem Bildschirm ein Feld erscheinen – das ist alles!

Im Allgemeinen wird ein Rückgabewert verwendet, wenn eine Funktion einen Zwischenschritt in einer Berechnung darstellt. Sie möchten ein Endergebnis erhalten, für das bestimmte Werte durch eine Funktion berechnet werden müssen. Nachdem die Funktion einen Wert berechnet hat, kann sie das Ergebnis zurückgeben, damit es in einer Variablen gespeichert wird. Diese Variable können Sie dann im nächsten Schritt der Berechnung verwenden.

## So geben Sie einen Wert zurück

Um aus einer selbst geschriebenen Funktion einen Wert zurückzugeben, verwenden Sie das Schlüsselwort [`return`](/de/docs/Web/JavaScript/Reference/Statements/return). Sie haben es bereits mehrmals in Aktion gesehen. Kehren wir noch einmal zu unserem Beispiel mit den [100 zufälligen Kreisen](/de/docs/Learn_web_development/Core/Scripting/Loops#looping_code_example) zurück: In jedem Schleifendurchlauf wird die Funktion `random()` dreimal aufgerufen, um jeweils einen Zufallswert für die _x-Koordinate_, die _y-Koordinate_ und den _Radius_ eines Kreises zu erzeugen. Die Funktion `random()` nimmt einen Parameter entgegen – eine ganze Zahl – und gibt eine zufällige ganze Zahl zwischen `0` und dieser Zahl zurück. Sie sieht so aus:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Man könnte sie auch wie folgt schreiben:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

Die erste Version lässt sich jedoch schneller schreiben und ist kompakter.

Bei jedem Aufruf der Funktion geben wir das Ergebnis der Berechnung `Math.floor(Math.random() * number)` zurück. Dieser Rückgabewert tritt an die Stelle des Funktionsaufrufs, und die Ausführung des Codes wird fortgesetzt.

Wenn Sie also Folgendes ausführen:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

Würden die drei Aufrufe von `random()` nacheinander die Werte `500`, `200` und `35` zurückgeben, würde die Zeile tatsächlich so ausgeführt, als stünde dort:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Zuerst werden die Funktionsaufrufe in der Zeile ausgeführt und durch ihre Rückgabewerte ersetzt. Danach wird die Zeile selbst ausgeführt.

## Rückgabewerte in Funktionen implementieren

Versuchen wir nun, einige Funktionen mit Rückgabewerten zu schreiben. Mit diesem Beispiel können Sie eine Zahl in ein Textfeld eingeben und sich das Quadrat, die dritte Potenz und die Fakultät dieser Zahl ausgeben lassen.

1. Erstellen Sie eine neue HTML-Datei in Ihrem lokalen Dateisystem und fügen Sie den folgenden Inhalt ein:

   ```html
   <!doctype html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Function library example</title>
       <style>
         input {
           font-size: 2em;
           margin: 10px 1px 0;
         }
       </style>
     </head>
     <body>
       <input class="numberInput" type="text" />
       <p></p>

       <script>
         const input = document.querySelector(".numberInput");
         const para = document.querySelector("p");
       </script>
     </body>
   </html>
   ```

   Dies ist eine einfache HTML-Seite mit einem {{htmlelement("input")}}-Textfeld und einem Absatz. Außerdem enthält sie ein {{htmlelement("script")}}-Element, in dem wir Referenzen auf die beiden HTML-Elemente in zwei Variablen gespeichert haben. Auf dieser Seite können Sie eine Zahl in das Textfeld eingeben und darunter verschiedene zugehörige Zahlen anzeigen lassen.

2. Fügen Sie unter den beiden vorhandenen Zeilen einige Funktionen in dieses `<script>`-Element ein:

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

   Die Funktionen `squared()` und `cubed()` sind recht selbsterklärend: Sie geben das Quadrat beziehungsweise die dritte Potenz der als Parameter übergebenen Zahl zurück. Die Funktion `factorial()` gibt die [Fakultät](https://en.wikipedia.org/wiki/Factorial) der übergebenen Zahl zurück.

3. Fügen Sie unter den vorhandenen Funktionen den folgenden Event-Handler ein, um Informationen über die in das Textfeld eingegebene Zahl auszugeben:

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

Hier einige Erläuterungen zur Funktion `addEventListener()` aus Schritt 3:

- Durch das Hinzufügen eines Event-Listeners für `change` wird diese Funktion immer dann ausgeführt, wenn das Ereignis `change` auf dem Textfeld ausgelöst wird. Das geschieht, wenn ein neuer Wert in das Text-`input` eingegeben und bestätigt wird: Geben Sie einen Wert ein und verlassen Sie dann das Eingabefeld mit <kbd>Tab</kbd> oder <kbd>Return</kbd>. Wenn diese anonyme Funktion ausgeführt wird, wird der Wert aus dem `input` in der Konstante `num` gespeichert.
- Die `if`-Anweisung gibt eine Fehlermeldung aus, wenn der eingegebene Wert keine Zahl ist. Die Bedingung prüft, ob der Ausdruck `isNaN(num)` den Wert `true` zurückgibt. Die Funktion [`isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/isNaN) prüft, ob der Wert `num` keine Zahl ist. Wenn das zutrifft, gibt sie `true` zurück, andernfalls `false`.
- Wenn die Bedingung `false` zurückgibt, ist der Wert `num` eine Zahl. Die Funktion gibt dann innerhalb des Absatzelements einen Satz aus, der das Quadrat, die dritte Potenz und die Fakultät der Zahl nennt. Dazu ruft sie die Funktionen `squared()`, `cubed()` und `factorial()` auf, um die benötigten Werte zu berechnen.

### Endergebnis

Wenn Sie fertig sind, sollte das Beispiel so dargestellt werden:

```html hidden live-sample___function-library
<input class="numberInput" type="text" />
<p></p>
```

```css hidden live-sample___function-library
input {
  font-size: 2em;
  margin: 10px 1px 0;
}
```

```js hidden live-sample___function-library
const input = document.querySelector(".numberInput");
const para = document.querySelector("p");

function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  let x = num;
  while (x > 1) {
    num *= x - 1;
    x--;
  }

  return num;
}

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

{{embedlivesample("function-library", "100%", 200)}}

Geben Sie eine Zahl in das Textfeld ein und drücken Sie Return oder Enter.

> [!NOTE]
> Falls Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, vergleichen Sie Ihren Code mit unserer fertigen Version. Klicken Sie beim dargestellten Beispiel auf die Play-Schaltfläche, um den vollständigen Quellcode im MDN Playground zu sehen.

### Fügen Sie eigene Funktionen hinzu!

Versuchen Sie nun, selbst einige Funktionen zu schreiben und der Bibliothek hinzuzufügen. Wie wäre es mit der Quadratwurzel oder Kubikwurzel der Zahl? Oder mit dem Umfang eines Kreises mit einem bestimmten Radius?

Noch ein paar Tipps zu Funktionen:

- Sehen Sie sich weitere Beispiele dafür an, wie Sie _Fehlerbehandlung_ in Funktionen einbauen können. Im Allgemeinen ist es sinnvoll zu prüfen, ob alle erforderlichen Parameter gültig sind und ob für optionale Parameter Standardwerte vorgesehen sind. So ist die Wahrscheinlichkeit geringer, dass Ihr Programm Fehler auslöst.
- Denken Sie darüber nach, eine _Funktionsbibliothek_ anzulegen. Je länger Sie programmieren, desto häufiger werden Sie ähnliche Aufgaben wiederholt erledigen. Es ist sinnvoll, eine eigene Bibliothek mit Hilfsfunktionen für solche Aufgaben zu erstellen. Sie können diese Funktionen in neuen Code kopieren oder sie auf HTML-Seiten einsetzen, wo immer Sie sie benötigen.

## Zusammenfassung

Damit hätten wir es: Funktionen machen Spaß und sind sehr nützlich. Auch wenn es über ihre Syntax und Funktionsweise viel zu sagen gibt, sind sie recht gut verständlich.

Im nächsten Artikel geben wir Ihnen einige Aufgaben, mit denen Sie überprüfen können, wie gut Sie die Informationen über Funktionen aus den letzten Artikeln verstanden und behalten haben.

## Siehe auch

- [Funktionen im Detail](/de/docs/Web/JavaScript/Reference/Functions) – ein ausführlicher Leitfaden mit weiterführenden Informationen zu Funktionen.
- [Callback-Funktionen in JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) – ein verbreitetes Muster in JavaScript besteht darin, eine Funktion _als Argument_ an eine andere Funktion zu übergeben. Sie wird dann innerhalb der ersten Funktion aufgerufen. Das geht etwas über den Rahmen dieses Kurses hinaus, lohnt sich aber, bald näher betrachtet zu werden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Build_your_own_function","Learn_web_development/Core/Scripting/Test_your_skills/Functions", "Learn_web_development/Core/Scripting")}}
