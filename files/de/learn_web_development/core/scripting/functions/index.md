---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept beim Programmieren sind **Funktionen**, mit denen Sie einen Codeabschnitt, der eine einzelne Aufgabe ausführt, in einem definierten Block speichern und diesen Code dann bei Bedarf mit einem kurzen Befehl aufrufen können — anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen untersuchen, wie z.B. grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um die Erstellung von wiederverwendbaren Codeblöcken zu ermöglichen, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind im Browser integriert und andere sind benutzerdefiniert.</li>
          <li>Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergabe von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Blockbereich.</li>
          <li>Ein Verständnis dafür, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir im Laufe des Kurses schon Funktionen verwendet, ohne sie groß zu thematisieren. Jetzt ist es jedoch an der Zeit, dass wir explizit über Funktionen sprechen und ihre Syntax wirklich untersuchen.

Wann immer Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält, und Sie verwenden **keine** gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while), oder [if...else-Aussage](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements), nutzen Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs viele in den Browser integrierte Funktionen verwendet.

Jedes Mal, wenn wir eine Textzeichenfolge manipulierten, zum Beispiel:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Oder jedes Mal, wenn wir ein Array manipulierten:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Oder jedes Mal, wenn wir eine Zufallszahl generierten:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Verwendeten wir eine _Funktion_!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit ihrer Funktionalität erneut vertraut zu machen.

Die JavaScript-Sprache verfügt über viele eingebaute Funktionen, mit denen Sie nützliche Dinge tun können, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie beim **Aufrufen** (ein elegantes Wort für ausführen) einer eingebauten Browserfunktion aufrufen, nicht in JavaScript geschrieben sein — viele dieser Funktionen rufen Teile des Hintergrundbrowsercodes auf, der größtenteils in Systemsprachen wie C++ geschrieben ist, nicht in Web-Sprachen wie JavaScript.

Beachten Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden uns in einem späteren Modul ausführlicher mit der Verwendung von Browser-APIs befassen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul mehr über Objekte lernen. Für den Moment wollten wir nur mögliche Verwirrung zwischen Methode und Funktion klären — Ihnen werden wahrscheinlich beide Begriffe begegnen, wenn Sie die verfügbaren verwandten Ressourcen im Web ansehen.

Der in den von uns verwendete Code kommt in beiden Formen vor: **Funktionen** und **Methoden**. Sie können die vollständige Liste der eingebauten Funktionen sowie die eingebauten Objekte und ihre entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Verlauf des Kurses auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit unmittelbar darauf folgenden Klammern sahen, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops), haben wir eine benutzerdefinierte `draw()`-Funktion enthalten, die so aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun wollen, können wir die Funktion einfach damit aufrufen:

```js
draw();
```

Anstatt jedes Mal all diesen Code erneut einzuschreiben, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen von innerhalb von Funktionen aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die in den Browser eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) Funktion nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Wahrscheinlich haben Sie es inzwischen verstanden, aber nur zur Sicherheit: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion wird auch _Funktionsdeklaration_ genannt. Sie wird immer gehoben, sodass Sie die Funktion über der Funktionsdefinition aufrufen können, und sie wird ordnungsgemäß funktionieren.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** angegeben werden, wenn Sie sie aufrufen — dies sind Werte, die in die Klammern der Funktion aufgenommen werden müssen, die sie benötigt, um ihre Aufgabe ordnungsgemäß auszuführen.

> [!NOTE]
> Parameter werden manchmal Argumente, Eigenschaften oder sogar Attribute genannt.

Zum Beispiel benötigt die in den Browser eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) Funktion keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Zeichenfolgenfunktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers benötigt jedoch zwei Parameter — den zu findenden Teilstring in der Hauptzeichenfolge und den Teilstring, mit dem diese Zeichenfolge ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden sie durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie das nicht tun, wird die Funktion im Allgemeinen eine Art Standardverhalten annehmen. Als Beispiel ist der Parameter des Array [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) Funktion optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben wird, um ein Trennzeichen anzugeben, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie `=` nach dem Namen des Parameters hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bisher haben wir eine Funktion einfach so erstellt:

```js
function myFunction() {
  alert("hello");
}
```

Aber Sie können auch eine Funktion erstellen, die keinen Namen hat:

```js
(function () {
  alert("hello");
});
```

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden häufig anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion wird auch _Funktionsausdruck_ genannt. Im Gegensatz zu Funktionsdeklarationen, werden Funktionsausdrücke nicht gehoben.

### Beispiel einer anonymen Funktion

Angenommen, Sie möchten, dass ein Code ausgeführt wird, wenn ein Benutzer in ein Textfeld tippt. Dazu können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Funktion des Textfelds aufrufen. Diese Funktion erwartet mindestens zwei Parameter:

- den Namen des Ereignisses, das abgehört werden soll, in diesem Fall ist es [`keydown`](/de/docs/Web/API/Element/keydown_event)
- eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen über das Ereignis, einschließlich der spezifischen Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Statt eine separate `logKey()` Funktion zu definieren, können Sie eine anonyme Funktion an `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstatt `function(event)` zu schreiben, schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}} Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach, übergibt es an die gegebene Funktion und fügt den von der Funktion zurückgegebenen Wert zu einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` die Pfeilfunktion, die gleichwertig ist zu:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können dieselbe prägnante Syntax verwenden, um das Beispiel mit `addEventListener` neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Callback-Funktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, sehen Sie sich den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses Einführungstutorials und sind in den hier besprochenen Fällen wahrscheinlich nicht von Bedeutung. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Beispiel einer Pfeilfunktion

Hier ist ein vollständiges, funktionierendes Beispiel des "keydown"-Beispiels, das wir oben besprochen haben:

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

Das Ergebnis – versuchen Sie, in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Lassen Sie uns ein wenig über den {{Glossary("scope", "Gültigkeitsbereich")}} sprechen — ein sehr wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die darin definierten Variablen und andere Dinge in ihrem eigenen separaten **Gültigkeitsbereich**, was bedeutet, dass sie in ihren eigenen separaten Bereichen eingeschlossen sind und von Code außerhalb der Funktionen nicht erreicht werden können.

Der oberste Bereich außerhalb aller Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Werte, die im globalen Gültigkeitsbereich definiert sind, sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so eingerichtet — hauptsächlich jedoch aufgrund von Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo aufrufen, könnten anfangen, Ihren Code zu beeinflussen und Probleme zu verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, wodurch Konflikte entstehen. Dies könnte absichtlich geschehen oder einfach aus Versehen.

Angenommen, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion mit demselben Namen definiert:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird, und in der Konsole wird ein Fehler ausgegeben: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist, und Sie können dieselbe Konstante nicht zweimal im selben Bereich deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden. Daher wird ein Alarmfenster angezeigt, das `Hello Chris: welcome to our company.` ausgibt.

Versuchen Sie, die zweite Zeile `const name = "Zaptec";` aus `second.js` zu entfernen und die Seite neu zu laden. Jetzt führen beide Skripte aus, und das Alarmfenster sagt `Our company is called Chris.`. Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Halten von Teilen Ihres Codes in Funktionen verhindert solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu Dingen innerhalb ihrer Gehege — genauso wie die Funktionsbereiche. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Habitaten wirklich unwohl fühlen — ein Löwe oder Tiger würde sich im wasserdurchtränkten, eisigen Bereich der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die jeweils in ihrem bestimmten Lebensraum in einem Zoo eingesperrt sind](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Gültigkeitsbereich — er hat die Schlüssel, um auf jedes Gehege zuzugreifen, Futter aufzufüllen, kranke Tiere zu pflegen usw.

### Aktives Lernen: Spielen mit dem Gültigkeitsbereich

Schauen wir uns ein echtes Beispiel an, um den Gültigkeitsbereich zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres Beispiels [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html). Dieses enthält zwei Funktionen, `a()` und `b()`, sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Bereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter annimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklerwerkzeugen. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browserfenster angezeigt sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in der Konsole auslösen, der in etwa lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsbereichs sind `y` und `z` innerhalb der Funktionen `a()` und `b()` gesperrt, sodass `output()` nicht darauf zugreifen kann, wenn es aus dem globalen Bereich aufgerufen wird.

5. Aber was ist, wenn es aus einer anderen Funktion heraus aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie wie folgt aussehen:

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

Speichern Sie den Code, laden Sie ihn im Browser neu und versuchen Sie dann, die `a()` und `b()` Funktionen in der JavaScript-Konsole aufzurufen:

```js
a();
b();
```

Sie sollten die `y`- und `z`-Werte im Browserfenster angezeigt sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird — im selben Bereich, in dem die Variablen, die sie ausgibt, jeweils definiert sind. `output()` selbst ist überall verfügbar, da es im globalen Bereich definiert ist.

6. Versuchen Sie nun, Ihren Code wie folgt zu aktualisieren:

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

7. Speichern Sie erneut und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()`- als auch der `b()`-Aufruf sollten den Wert von x im Browserfenster anzeigen. Diese funktionieren einwandfrei, obwohl die `output()` Aufrufe nicht im selben Bereich definiert sind wie `x`, da `x` eine globale Variable ist und so überall im Code zugänglich ist.

8. Schließlich versuchen Sie, Ihren Code wie folgt zu aktualisieren:

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

9. Speichern und laden Sie erneut und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Diesmal werfen die `a()`- und `b()`-Aufrufe diesen lästigen [ReferenceError: _Variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie zu drucken versuchen, nicht in denselben Funktionsbereichen sind — die Variablen sind für diese Funktionsaufrufe im Grunde unsichtbar.

> [!NOTE]
> Die gleichen Bereichsregeln gelten nicht für Schleifen- (z.B. `for() { }`) und Bedingungsblöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sich sicher sind, dass Sie die betreffende Variable deklariert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher sollten Sie diese zuerst lesen, bevor Sie sie versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und damit den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Ihnen die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion zeigen.

## Siehe auch

- [Funktionen detaillierter Leitfaden](/de/docs/Web/JavaScript/Guide/Functions) — deckt einige erweiterte Funktionen ab, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen nutzen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
