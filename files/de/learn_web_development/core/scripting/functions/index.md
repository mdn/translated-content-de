---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept im Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe übernimmt, in einem definierten Block zu speichern und dann diesen Code mit einem einzigen kurzen Befehl immer dann aufzurufen, wenn Sie ihn benötigen – anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie z. B. die Grundsyntax, wie man sie aufruft und definiert, den Geltungsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, Vertrautheit mit JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen – die Erstellung von wiederverwendbaren Codeblöcken, die nach Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind in den Browser eingebaut und einige sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergeben von Argumenten bei Funktionsaufrufen.</li>
          <li>Globaler Bereich und Funktions-/Blockbereich.</li>
          <li>Ein Verständnis dafür, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir im gesamten Kurs bisher Funktionen verwendet; wir haben nur nicht viel darüber gesprochen. Jetzt ist es jedoch an der Zeit, dass wir explizit über Funktionen sprechen und ihre Syntax wirklich erkunden.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern – `()` – aufweist und **nicht** eine der üblichen eingebauten Sprachstrukturen wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs sehr häufig Funktionen verwendet, die in den Browser eingebaut sind.

Immer wenn wir eine Textzeichenkette manipuliert haben, zum Beispiel:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Oder immer wenn wir ein Array manipuliert haben:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Oder immer wenn wir eine Zufallszahl generiert haben:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich deren Funktionalität nochmals in Erinnerung zu rufen, falls nötig.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne den gesamten Code selbst schreiben zu müssen. In der Tat könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browser-Funktion **aufrufen** (ein schickes Wort für ausführen oder starten), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browser-Codes auf, der größtenteils in Systemsprachen auf niedriger Ebene wie C++ geschrieben ist und nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browser-Funktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe den [frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul genauer betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, nennt man **Methoden**; Sie werden im weiteren Verlauf des Moduls lernen, was Objekte sind. Für den Moment wollten wir mögliche Verwirrungen bezüglich der Begriffe Methode gegen Funktion klären — Sie werden wahrscheinlich beiden Begriffen begegnen, wenn Sie sich mit den verfügbaren damit verbundenen Ressourcen im Web befassen.

Der eingebaute Code, den wir bisher verwendet haben, existiert in beiden Formen: **Funktionen** und **Methoden**. Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und deren entsprechende Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben in diesem Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind, nicht innerhalb des Browsers. Immer wenn Sie einen benutzerdefinierten Namen mit Klammern unmittelbar danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel über Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingefügt, die folgendermaßen aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir dies tun möchten, können wir die Funktion einfach mit folgendem Aufruf aufrufen:

```js
draw();
```

anstatt den gesamten Code jedes Mal aufs Neue schreiben zu müssen, wenn wir ihn wiederholen wollen. Funktionen können den Code enthalten, den Sie möchten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion beispielsweise ruft dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, weil die eingebaute Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt. Wir wollten jedoch eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Aufrufen von Funktionen

Wahrscheinlich ist es Ihnen jetzt klar, aber nur für den Fall: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen – oder aufrufen. Dies wird durchgeführt, indem der Name der Funktion irgendwo im Code gefolgt von Klammern angegeben wird.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Art der Erstellung einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer so hoisted, dass Sie die Funktion bereits vor der Funktionsdefinition aufrufen können und es trotzdem funktioniert.

## Funktionsparameter

Einige Funktionen erfordern, dass beim Aufrufen **Parameter** angegeben werden – dies sind Werte, die in die Funktionsklammern aufgenommen werden müssen, damit die Funktion ihre Aufgabe ordnungsgemäß erfüllen kann.

> [!NOTE]
> Parameter werden manchmal auch als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Ein Beispiel: Die eingebaute Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) des Browsers benötigt keine Parameter. Bei jedem Aufruf gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Zeichenkettenfunktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers benötigt jedoch zwei Parameter — die Teilzeichenkette, die in der Hauptzeichenkette gefunden werden soll, und die Teilzeichenkette, die diese Zeichenkette ersetzt:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional – Sie müssen sie nicht unbedingt angeben. Wenn Sie dies nicht tun, übernimmt die Funktion im Allgemeinen eine Art Standardverhalten. Ein Beispiel: Der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) ist optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter zur Angabe eines Verbindungs-/Trennzeichens enthalten ist, wird standardmäßig ein Komma verwendet.

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

Bisher haben wir eine Funktion so erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Anonyme Funktionen sehen Sie häufig, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Art der Erstellung einer Funktion ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehostet.

### Beispiel für eine anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld schreibt. Um dies zu tun, können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet (mindestens) zwei Parameter:

- den Namen des Ereignisses, auf das Sie lauschen möchten, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event),
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die bereitgestellte Funktion auf und übergibt ihr einen Parameter, der Informationen über dieses Ereignis enthält, einschließlich der bestimmten Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Statt eine separate `logKey()`-Funktion zu definieren, können Sie eine anonyme Funktion in `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Wenn Ihre Funktion schließlich nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Stichwort weglassen und implizit den Ausdruck zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach, übergibt es in die gegebene Funktion und fügt den von dieser Funktion zurückgegebenen Wert in ein neues Array ein.

Im obigen Beispiel entspricht `item => item * 2` der Pfeilfunktion:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können dieselbe knappe Syntax verwenden, um das `addEventListener`-Beispiel umzuschreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Callback-Funktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses einführenden Tutorials und sind in den hier diskutierten Fällen wahrscheinlich nicht von Bedeutung. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist ein vollständiges funktionierendes Beispiel des "keydown"-Beispiels, das wir oben diskutiert haben:

Das HTML:

```html
<input id="textBox" type="text" />
<div id="output"></div>
```

Der JavaScript:

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

Das Ergebnis – versuchen Sie, in das Textfeld zu tippen und schauen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Lassen Sie uns ein wenig über {{Glossary("scope", "scope")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und anderen Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Scope**, was bedeutet, dass sie in ihren eigenen separaten Kompartimenten eingeschlossen sind und von Code außerhalb der Funktionen nicht erreichbar sind.

Der oberste Bereich außerhalb aller Ihrer Funktionen wird als **globaler Bereich** bezeichnet. Werte, die im globalen Bereich definiert sind, sind überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so konzipiert – aber hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo einbinden, könnten beginnen, mit Ihrem Code zu interagieren und Probleme verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden und Konflikte verursachen. Dies könnte absichtlich oder nur versehentlich geschehen.

Zum Beispiel, sagen wir, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien einbindet, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie werden feststellen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird und ein Fehler in der Konsole angezeigt wird: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist und Sie dieselbe Konstante nicht zweimal im selben Bereich deklarieren können. Da das zweite Skript nicht geladen wurde, steht die Funktion `greeting()` aus `second.js` nicht zur Verfügung. Daher wird ein Alert-Fenster mit der Anzeige `Hello Chris: welcome to our company.` angezeigt.

Versuchen Sie, die zweite Zeile `const name = "Zaptec";` aus `second.js` zu entfernen und die Seite neu zu laden. Jetzt werden beide Skripte ausgeführt und im Alert-Fenster steht `Our company is called Chris.`. Funktionen dürfen erneut deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Aufbewahren von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und gilt als Best Practice.

Es ist ein wenig wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine sind in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen innerhalb ihrer Gehege – genauso wie die Funktionbereiche. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in ungewohnten Lebensräumen wirklich unwohl fühlen – ein Löwe oder Tiger würde sich in der eisigen, wässrigen Umgebung der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihren jeweiligen Lebensräumen in einem Zoo eingezäunt sind](mdn-mozilla-zoo.png)

Der Zookeeper ist wie der globale Bereich – er hat die Schlüssel, um jeden Standort zu betreten, Futter nachzufüllen, sich um kranke Tiere zu kümmern usw.

### Aktives Lernen: Mit Bereichen spielen

Schauen wir uns ein echtes Beispiel an, um den Geltungsbereich zu demonstrieren.

1. Machen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen – `x`, `y` und `z` – von denen zwei innerhalb der Funktionen und eine im globalen Bereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzigen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport sehen.

4. Versuchen Sie nun, Folgendes in Ihre Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, die etwa "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)" lautet. Warum ist das so? Wegen des Funktionsbereichs sind `y` und `z` in den Funktionen `a()` und `b()` eingeschlossen, sodass `output()` nicht darauf zugreifen kann, wenn es aus dem globalen Bereich aufgerufen wird.

5. Aber wie ist es, wenn es aus einer anderen Funktion heraus aufgerufen wird? Versuchen Sie `a()` und `b()` so zu bearbeiten:

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

   Speichern Sie den Code und laden Sie ihn im Browser neu, und versuchen Sie dann, die `a()` und `b()` Funktionen aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Browser-Viewport sehen. Dies funktioniert einwandfrei, da die Funktion `output()` innerhalb der anderen Funktionen aufgerufen wird — im selben Bereich, in dem die zu druckenden Variablen in jedem Fall definiert sind. `output()` selbst ist überall verfügbar, da es im globalen Bereich definiert ist.

6. Jetzt versuchen Sie, Ihren Code wie folgt zu aktualisieren:

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

7. Speichern und laden Sie die Seite erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Beide `a()`- und `b()`-Aufrufe sollten den Wert von x im Browser-Viewport drucken. Diese funktionieren einwandfrei, weil auch wenn die `output()`-Aufrufe nicht im selben Bereich wie `x` definiert sind, ist `x` eine globale Variable, also ist sie überall im Code verfügbar.

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

9. Speichern und laden Sie die Seite erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die `a()`- und `b()`-Anrufe den lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die zu druckenden Variablen nicht im gleichen Funktionsbereich sind — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Die gleichen Bereichsregeln gelten nicht für Schleifen (z.B. `for() { }`) und bedingte Blöcke (z.B. `if () { }`) – sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, möglicherweise möchten Sie diese zuerst lesen, bevor Sie sie versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erforscht und den Weg für den nächsten geebnet, in dem wir praktisch werden und Sie durch die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Ausführlicher Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
