---
title: Funktionen — wiederverwendbare Codeblöcke
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres grundlegendes Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, einen Codeabschnitt, der eine einzelne Aufgabe erledigt, in einem definierten Block zu speichern und diesen Code dann bei Bedarf mit einem einzigen kurzen Befehl aufzurufen – anstatt denselben Code mehrmals eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen untersuchen, wie z.B. die grundlegende Syntax, wie man sie aufruft und definiert, ihren Geltungsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden CSS-Konzepten</a>, Vertrautheit mit JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — die Erstellung wiederverwendbarer Codeblöcke, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind im Browser eingebaut und andere sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Geltungsbereich und Funktions-/Blockgeltungsbereich.</li>
          <li>Ein Verständnis dafür, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie überall Funktionen. Tatsächlich haben wir Funktionen während des gesamten Kurses verwendet; Wir haben nur nicht sehr viel darüber gesprochen. Jetzt ist es jedoch an der Zeit, dass wir explizit über Funktionen sprechen und wirklich deren Syntax erforschen.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält und **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs oft Funktionen verwendet, die im Browser eingebaut sind.

Jedes Mal, wenn wir eine Textzeichenkette manipuliert haben, zum Beispiel:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Oder jedes Mal, wenn wir ein Array manipuliert haben:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Oder jedes Mal, wenn wir eine Zufallszahl erzeugt haben:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Wir haben eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit ihrer Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne den gesamten Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browser-Funktion **aufrufen** (ein schickes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browser-Codes auf, der weitgehend in systemnahen Sprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Beachten Sie, dass einige eingebaute Browser-Funktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für mehr Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul genauer betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul etwas über Objekte lernen. Für den Moment wollten wir nur eventuelle Verwirrung über den Unterschied zwischen Methode und Funktion ausräumen — Sie werden beide Begriffe wahrscheinlich antreffen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web anschauen.

Der eingebaute Code, den wir bisher verwendet haben, gibt es in beiden Formen: **Funktionen** und **Methoden**. Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs bislang auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code und nicht im Browser definiert sind. Wann immer Sie einen benutzerdefinierten Namen mit Klammern unmittelbar danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch der vollständige [Quelltext](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()` Funktion eingefügt, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein `{{htmlelement("canvas")}}`-Element. Jedes Mal, wenn wir das tun möchten, können wir einfach die Funktion mit folgendem Befehl aufrufen:

```js
draw();
```

anstatt jedes Mal den gesamten Code erneut schreiben zu müssen, wenn wir das wiederholen möchten. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert wird:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute Browser-Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Wahrscheinlich ist Ihnen dies inzwischen klar, aber nur zur Sicherheit: Um eine Funktion nach ihrer Definition tatsächlich zu verwenden, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion an einer Stelle im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionsdefinition ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer „gehoisted“, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und sie dennoch funktioniert.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** angegeben werden, wenn Sie sie aufrufen — dies sind Werte, die in den Funktionsklammern enthalten sein müssen, damit die Funktion ihre Aufgabe ordnungsgemäß ausführen kann.

> [!NOTE]
> Parameter werden manchmal Argumente, Eigenschaften oder sogar Attribute genannt.

Zum Beispiel erfordert die eingebaute Browser-Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) keine Parameter. Beim Aufruf gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Browser-Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) der Zeichenkette benötigt jedoch zwei Parameter — den Teilstring, der im Hauptstring gefunden werden soll, und den Teilstring, der diesen String ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht unbedingt angeben. Wenn Sie dies nicht tun, übernimmt die Funktion im Allgemeinen eine Art Standardverhalten. Zum Beispiel ist der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben wird, um ein Verbindungs-/Trennzeichen zu bestimmen, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie nach dem Namen des Parameters ein `=` hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bisher haben wir eine Funktion wie folgt erstellt:

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

Dies wird eine **anonyme Funktion** genannt, da sie keinen Namen hat. Anonyme Funktionen sehen Sie häufig, wenn erwartet wird, dass ein Parameter eine Funktion ist. In diesem Fall wird die Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktionsdefinition wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht "gehoisted".

### Anonymes Funktionsbeispiel

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfeldes aufrufen. Diese Funktion erwartet mindestens zwei Parameter:

- den Namen des Ereignisses, auf das gelauscht werden soll, was in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter, der Informationen über dieses Ereignis enthält, einschließlich der bestimmten Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstatt eine separate `logKey()`-Funktion zu definieren, können Sie eine anonyme Funktion in `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, die sogenannte **Pfeilfunktion**. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und drücken das Ergebnis implizit zurück. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode des `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach, übergibt es an die gegebene Funktion und addiert den von dieser Funktion zurückgegebenen Wert zu einem neuen Array.

Im obigen Beispiel ist `item => item * 2` das Pfeilfunktionsäquivalent von:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können die gleiche prägnante Syntax verwenden, um das `addEventListener`-Beispiel neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, sehen Sie sich den [Abschnitt zu Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Rahmens dieses Einführungstutorials und sind in den hier besprochenen Fällen wahrscheinlich nicht von Bedeutung. Um mehr zu erfahren, sehen Sie sich die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

### Live-Beispiel einer Pfeilfunktion

Hier ist ein vollständiges Arbeitsbeispiel des "keydown"-Beispiels, das wir oben besprochen haben:

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

Das Ergebnis - versuchen Sie, in das Textfeld zu tippen, und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Sprechen wir ein wenig über {{Glossary("scope", "Geltungsbereich")}} — ein sehr wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, befinden sich die darin definierten Variablen und anderen Dinge in ihrem eigenen separaten **Bereich**, was bedeutet, dass sie in ihren eigenen separaten Fächern gesperrt sind und von Code außerhalb der Funktionen nicht erreicht werden können.

Die oberste Ebene außerhalb aller Ihrer Funktionen wird als **Globaler Geltungsbereich** bezeichnet. Werte, die im globalen Geltungsbereich definiert sind, sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut — aber hauptsächlich wegen Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo aufrufen, könnten anfangen, mit Ihrem Code zu interagieren und Probleme zu verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führt. Dies könnte absichtlich oder einfach nur versehentlich geschehen.

Angenommen, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Beide Funktionen, die Sie aufrufen möchten, heißen `greeting()`, aber Sie können immer nur auf die Funktion `greeting()` der Datei `first.js` zugreifen (die zweite wird ignoriert). Darüber hinaus führt eine Zuweisung eines neuen Wertes zur `name`-Variablen zu einem Fehler (in der Datei `second.js`), weil diese bereits mit `const` deklariert wurde und daher nicht neu zugewiesen werden kann.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quelltext](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Halten von Teilen Ihres Codes in Funktionen vermieden solche Probleme und wird als bewährte Praxis angesehen.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen in ihren Gehegen — genau wie die Funktionsbereiche. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in den ihnen unbekannten Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich im wassrigen, eisigen Reich der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihrem jeweiligen Lebensraum in einem Zoo eingeschlossen sind](mdn-mozilla-zoo.png)

Der Zookeeper ist wie der globale Geltungsbereich — er hat die Schlüssel, um auf jedes Gehege zuzugreifen, Futter aufzufüllen, sich um kranke Tiere zu kümmern, usw.

### Aktives Lernen: Mit dem Geltungsbereich spielen

Schauen wir uns ein tatsächliches Beispiel an, um den Geltungsbereich zu demonstrieren.

1. Erstellen Sie zunächst eine lokale Kopie unseres Beispiels [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html). Diese enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Geltungsbereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter nimmt und diesen in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Entwicklertools des Browsers. Geben Sie in der JavaScript-Konsole folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport sehen.

4. Geben Sie jetzt folgendes in Ihre Konsole ein

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in der Konsole anzeigen, ähnlich dem "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsbereichs sind `y` und `z` in den Funktionen `a()` und `b()` eingeschlossen, sodass `output()` nicht auf sie zugreifen kann, wenn es aus dem globalen Bereich aufgerufen wird.

5. Was ist jedoch, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu. Versuchen Sie dann, die Funktionen `a()` und `b()` aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte von `y` und `z` im Browser-Viewport sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird — im gleichen Bereich, in dem die Variablen definiert sind, die sie in jedem Fall ausgibt. `output()` selbst ist von überall verfügbar, da es im globalen Bereich definiert ist.

6. Versuchen Sie nun, Ihren Code so zu ändern:

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

7. Speichern und laden Sie erneut, und versuchen Sie es dann erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der Aufruf von `a()` als auch `b()` sollte den Wert von `x` im Browser-Viewport ausgeben. Diese funktionieren einwandfrei, weil auch wenn die `output()`-Aufrufe nicht im gleichen Bereich wie `x` definiert sind, `x` eine globale Variable ist, die überall im Code verfügbar ist.

8. Schließlich versuchen Sie, Ihren Code so zu aktualisieren:

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

9. Speichern und laden Sie erneut, und versuchen Sie es dann erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal zeigt der Aufruf von `a()` und `b()` diesen lästigen [ReferenceError: _Variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) in der Konsole an — dies liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie versuchen auszugeben, sich nicht in den gleichen Funktionsbereichen befinden — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Die gleichen Geltungsbereichsregeln gelten nicht für Schleifen (z.B. `for() { }`) und Konditionalblöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, sind jedoch nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher möchten Sie vielleicht zuerst diese lesen, bevor Sie sie ausprobieren.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und bereitet den Weg für den nächsten, in dem wir praktisch werden und Sie durch die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionen Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen (um weniger Code zu schreiben)](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN Curriculum Partner_</sup>
  - : Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
