---
title: Funktionen — wiederverwendbare Codeblöcke
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essenzielles Konzept beim Programmieren sind **Funktionen**, mit denen Sie ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block speichern können. Anschließend können Sie diesen Code mit einem einzigen kurzen Befehl aufrufen, anstatt denselben Code mehrfach schreiben zu müssen. In diesem Artikel erkunden wir grundlegende Konzepte hinter Funktionen, wie die grundlegende Syntax, das Aufrufen und Definieren von Funktionen, den Gültigkeitsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — die Erstellung von wiederverwendbaren Codeblöcken, die überall wo notwendig aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, wobei einige im Browser integriert sind und andere benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Arrow Functions.</li>
          <li>Definieren von Funktionsparametern und Übergeben von Argumenten beim Funktionsaufruf.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Block-Gültigkeitsbereich.</li>
          <li>Ein Verständnis dessen, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript werden Sie Funktionen überall finden. Tatsächlich haben wir im bisherigen Kursverlauf schon Funktionen verwendet, ohne viel darüber zu sprechen. Jetzt ist es an der Zeit, explizit über Funktionen zu sprechen und deren Syntax genauer zu betrachten.

Jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern `()` enthält — und Sie nutzen **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) — verwenden Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs oft eingebaute Browser-Funktionen verwendet.

Zum Beispiel jedes Mal, wenn wir eine Textzeichenkette bearbeitet haben:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Oder jedes Mal, wenn wir ein Array bearbeitet haben:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Oder jedes Mal, wenn wir eine Zufallszahl generiert haben:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Sie dürfen diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf ihre Funktionalität wieder in Erinnerung zu rufen.

Die JavaScript-Sprache verfügt über viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne diesen gesamten Code selbst schreiben zu müssen. Tatsächlich kann ein Teil des Codes, den Sie beim **Aufruf** (ein gehobener Begriff für das Ausführen) einer eingebauten Browserfunktion aufrufen, in JavaScript überhaupt nicht geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrundcodes des Browsers auf, der größtenteils in systemnahen Sprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standard-Sprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul genauer betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden als **Methoden** bezeichnet; Sie werden später in diesem Modul mehr über Objekte erfahren. An dieser Stelle wollten wir nur mögliche Verwirrung zwischen Methode und Funktion klären — Sie werden voraussichtlich beide Begriffe verwenden, während Sie die verfügbaren Ressourcen im Web durchsehen.

Der eingebaute Code, den wir bisher verwendet haben, existiert in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie die eingebauten Objekte und deren entsprechende Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert wurden, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit nachfolgenden Klammern gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel über Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebaut, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir dies tun möchten, können wir die Funktion so aufrufen:

```js
draw();
```

anstatt diesen gesamten Code jedes Mal erneut schreiben zu müssen, wenn wir ihn wiederholen möchten. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion beispielsweise ruft die `random()`-Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, da die eingebaute Funktion des Browsers [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten jedoch eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie kennen dies inzwischen wahrscheinlich, aber nur um sicherzugehen: Um eine Funktion nach deren Definition tatsächlich zu verwenden, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem der Funktionsname an einer Stelle im Code eingefügt und mit Klammern ergänzt wird.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird immer „gehoisted“, sodass Sie die Funktion oberhalb ihrer Definition aufrufen können und sie dennoch funktioniert.

## Funktionsparameter

Einige Funktionen erfordern **Parameter**, die beim Aufruf angegeben werden müssen — dies sind Werte, die in die Funktionsklammern eingeschlossen werden müssen, damit die Funktion ihre Aufgabe ordnungsgemäß ausführen kann.

> [!NOTE]
> Parameter werden manchmal als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Ein Beispiel: Die eingebaute Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) des Browsers benötigt keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute String-Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers benötigt jedoch zwei Parameter — die Teilzeichenkette, die im Hauptstring gefunden werden soll, und die Teilzeichenkette, mit der dieser String ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommata getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, übernimmt die Funktion in der Regel eine Art von Standardverhalten. Ein Beispiel: Der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) ist optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wird kein Parameter als Verbindungs-/Trennzeichen angegeben, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie ein `=` nach dem Namen des Parameters hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Arrow Functions

Bis jetzt haben wir eine Funktion wie folgt erstellt:

```js
function myFunction() {
  alert("hello");
}
```

Sie können jedoch auch eine Funktion erstellen, die keinen Namen hat:

```js
(function () {
  alert("hello");
});
```

Dies wird als **anonyme Funktion** bezeichnet, da sie keinen Namen hat. Sie sehen häufig anonyme Funktionen, wenn von einer Funktion erwartet wird, dass sie eine andere Funktion als Parameter empfängt. In diesem Fall wird die Funktionsparameterübergabe oft als anonyme Funktion vorgenommen.

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionen-Ausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht „gehoisted“.

### Beispiel für anonyme Funktionen

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dafür können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfeldes aufrufen. Diese Funktion erwartet mindestens zwei Parameter:

- den Namen des Ereignisses, das überwacht werden soll, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event)
- eine Funktion, die beim Eintritt des Ereignisses ausgeführt wird.

Wenn der Benutzer eine Taste drückt, ruft der Browser die angegebene Funktion auf und übergibt ihr als Parameter Informationen zu diesem Ereignis, einschließlich der spezifischen Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstatt eine separate `logKey()`-Funktion zu definieren, können Sie eine anonyme Funktion an `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Arrow Functions

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, nämlich eine **Arrow Function**. Statt `function(event)` schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur einen Parameter hat, können Sie die Klammern um den Parameter weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und die Ausdruckswerte implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode eines Arrays, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element des Arrays nacheinander und übergibt es an die gegebene Funktion. Sie nimmt dann den von dieser Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Arrow Function-Äquivalent zu:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können dieselbe kompakte Syntax verwenden, um das `addEventListener`-Beispiel umzuschreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Callback-Funktion zurückgegeben.

Wir empfehlen Ihnen, Arrow Functions zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Mehr dazu erfahren Sie im [Abschnitt über Arrow Functions im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und auf unserer [Referenzseite zu Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt subtile Unterschiede zwischen Arrow Functions und normalen Funktionen. Diese liegen außerhalb des Umfangs dieses Einführungstutorials und sind in den hier besprochenen Fällen wahrscheinlich nicht relevant. Mehr erfahren Sie in der [Referenzdokumentation zu Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Arrow Functions

Hier ist ein vollständiges Beispiel für das oben besprochene "keydown"-Beispiel:

Das HTML:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

Das JavaScript:

```js
const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
```

```css hidden
div {
  margin: 0.5rem 0;
}
```

Das Ergebnis - probieren Sie aus, in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Gültigkeitsbereich und Konflikte

Lassen Sie uns über den {{Glossary("scope", "Gültigkeitsbereich")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, werden die innerhalb der Funktion definierten Variablen und anderen Elemente in einem eigenen **Gültigkeitsbereich** eingeschlossen. Das bedeutet, dass sie in ihrem eigenen separaten "Container" gesperrt sind und von Code außerhalb der Funktionen nicht erreicht werden können.

Der oberste Gültigkeitsbereich außerhalb aller Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Werte, die im globalen Gültigkeitsbereich definiert sind, sind von überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so konzipiert — hauptsächlich wegen Sicherheit und Organisation. Manchmal wollen Sie nicht, dass Variablen von überall im Code zugänglich sind — externe Skripte, die Sie von anderswo einbinden, könnten Ihren Code beeinflussen und Probleme verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führt. Dies könnte absichtlich oder zufällig geschehen.

Beispielsweise nehmen Sie an, dass Sie eine HTML-Datei haben, die zwei externe JavaScript-Dateien einbindet, und beide enthalten eine Variable und eine Funktion, die denselben Namen verwenden:

```html
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
const name = "Chris";
function greeting() {
  alert(`Hello ${name}: welcome to our company.`);
}
```

```js
// second.js
const name = "Zaptec";
function greeting() {
  alert(`Our company is called ${name}.`);
}
```

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird, und es wird ein Fehler in der Konsole angezeigt: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert wurde, und Sie können dieselbe Konstante nicht zweimal im selben Gültigkeitsbereich deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar. Daher wird eine Alert-Box angezeigt mit der Meldung `Hello Chris: welcome to our company.`.

Entfernen Sie nun die Zeile `const name = "Zaptec";` aus `second.js` und laden Sie die Seite erneut. Jetzt werden beide Skripte ausgeführt, und die Alert-Box zeigt `Our company is called Chris.` an. Funktionen dürfen hingegen erneut deklariert werden, und die zuletzt deklarierte Funktion wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Einschränken von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen innerhalb ihrer Gehege — genau wie bei den Gültigkeitsbereichen der Funktionen. Würden sie in andere Gehege gelangen, könnten Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in unbekannten Habitaten unwohl fühlen — ein Löwe oder Tiger würde sich in der eisigen, wässrigen Umgebung der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Habitaten in einem Zoo eingeschlossen](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Gültigkeitsbereich — er hat die Schlüssel, um jedes Gehege zu betreten, Futter nachzufüllen, kranke Tiere zu pflegen usw.

### Praktische Übung: Spielen mit Gültigkeitsbereichen

Schauen wir uns ein reales Beispiel an, um den Gültigkeitsbereich zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()` und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind und eine im globalen Gültigkeitsbereich. Es enthält auch eine dritte Funktion namens `output()`, die einen einzigen Parameter entgegennimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwicklertools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` in der Browser-Ansicht sehen.

4. Probieren Sie nun Folgendes in Ihrer Konsole aus:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in der Konsole auslösen, ähnlich wie "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Gültigkeitsbereichs sind `y` und `z` innerhalb der Funktionen `a()` und `b()` eingeschlossen, sodass `output()` sie nicht aufrufen kann, wenn es vom globalen Gültigkeitsbereich aus aufgerufen wird.

5. Was passiert aber, wenn es innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu ändern:

   ```js
   function a() {
     const y = 2;
     output(y);
   }

   function b() {
     const z = 3;
     output(z);
   }
   ```

   Speichern Sie den Code und laden Sie ihn erneut im Browser. Rufen Sie dann die Funktionen `a()` und `b()` aus der JavaScript-Konsole auf:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte von `y` und `z` in der Browser-Ansicht sehen. Das funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird — im selben Bereich, in dem die Variablen definiert sind.

6. Versuchen Sie jetzt, Ihren Code wie folgt zu ändern:

   ```js
   function a() {
     const y = 2;
     output(x);
   }

   function b() {
     const z = 3;
     output(x);
   }
   ```

7. Speichern und laden Sie das Beispiel erneut. Probieren Sie dies erneut in Ihrer Konsole:

   ```js
   a();
   b();
   ```

   Sowohl die `a()`- als auch die `b()`-Aufrufe sollten den Wert von `x` in der Browser-Ansicht ausgeben. Dies funktioniert einwandfrei, weil `x` eine globale Variable ist und daher überall verfügbar ist.

8. Versuchen Sie schließlich, Ihren Code wie folgt zu ändern:

   ```js
   function a() {
     const y = 2;
     output(z);
   }

   function b() {
     const z = 3;
     output(y);
   }
   ```

9. Speichern und laden Sie das Beispiel erneut. Probieren Sie dies erneut in Ihrer Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal lösen die `a()`- und `b()`-Aufrufe denselben lästigen Fehler [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) in der Konsole aus. Das liegt daran, dass sich die `output()`-Aufrufe und die Variablen, die sie ausgeben möchten, nicht in denselben Funktions-Gültigkeitsbereichen befinden — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Die gleichen Gültigkeitsbereichsregeln gelten nicht für Schleifen (z. B. `for() { }`) und bedingte Blöcke (z. B. `if () { }`) — sie sehen zwar sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der Fehler [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Gültigkeitsbereich sie sich befindet.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige zusätzliche Tests, um sicherzustellen, dass Sie sich diese Informationen eingeprägt haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Für diese Tests sind Kenntnisse erforderlich, die in den nächsten beiden Artikeln behandelt werden. Sie möchten diese vielleicht zuerst lesen, bevor Sie sich an die Tests wagen.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Konzepte hinter Funktionen erkundet und damit den Weg für den nächsten Artikel geebnet, in dem wir Sie praktisch durch die Schritte zum Aufbau Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Funktionen-Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Using functions to write less code](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup>
  - : Ein interaktiver Kurs, der eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
