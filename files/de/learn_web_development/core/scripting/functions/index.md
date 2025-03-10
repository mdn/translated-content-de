---
title: Funktionen — wiederverwendbare Codeblöcke
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe erledigt, in einem definierten Block zu speichern und diesen Code dann mit einem einzigen kurzen Befehl aufzurufen, wann immer Sie ihn benötigen, anstatt denselben Code mehrfach eingeben zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie etwa die einfache Syntax, wie man sie aufruft und definiert, den Umfang und die Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um die Erstellung wiederverwendbarer Codeblöcke zu ermöglichen, die überall dort aufgerufen werden können, wo sie benötigt werden.</li>
          <li>Funktionen werden überall in JavaScript verwendet, und einige sind in den Browser integriert, während andere benutzerdefiniert sind.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definition von Funktionsparametern, Übergabe von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Umfang und Funktions-/Blockumfang.</li>
          <li>Ein Verständnis davon, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie überall Funktionen. Tatsächlich haben wir im gesamten Kurs bislang Funktionen verwendet, jedoch nicht explizit darüber gesprochen. Jetzt ist es jedoch an der Zeit, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — beinhaltet und **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs viele in den Browser integrierte Funktionen verwendet.

Immer dann, wenn wir eine Textzeichenfolge manipuliert haben, beispielsweise:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Oder immer dann, wenn wir ein Array manipuliert haben:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Oder jedes Mal, wenn wir eine zufällige Zahl generieren:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich bei Bedarf mit deren Funktionsweise vertraut zu machen.

Die JavaScript-Sprache besitzt viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all den Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein schickes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browserscodes auf, der weitgehend in systemnahen Sprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Nutzung von Browser-APIs später ausführlicher in einem Modul betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul über Objekte lernen. Jetzt wollten wir nur eventuelle Verwirrung über den Unterschied zwischen Methode und Funktion klären — Sie werden wahrscheinlich beide Begriffe sehen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web ansehen.

Der bisher verwendete eingebauter Code liegt in beiden Formen vor: **Funktionen** und **Methoden.** Die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und deren entsprechende Methoden finden Sie [hier](/de/docs/Web/JavaScript/Reference/Global_Objects).

Sie haben im Kurs auch schon viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code, nicht im Browser, definiert sind. Immer wenn Sie einen benutzerdefinierten Namen gefolgt von Klammern sahen, verwendeten Sie eine benutzerdefinierte Funktion. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel zu Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebunden, die so aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir dies tun wollen, können wir einfach die Funktion mit folgendem Befehl aufrufen:

```js
draw();
```

statt jedes Mal den gesamten Code erneut schreiben zu müssen, wenn wir ihn wiederholen möchten. Funktionen können jeden Code enthalten, den Sie möchten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft z. B. dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, da die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Aufrufen von Funktionen

Sie sind sich wahrscheinlich schon darüber im Klaren, aber nur für den Fall: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Art der Funktionsdefinition wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird immer gehoben, sodass Sie die Funktion oberhalb der Funktionsdefinition aufrufen können und sie funktioniert einwandfrei.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** festgelegt werden, wenn Sie sie aufrufen — dies sind Werte, die in den Klammern der Funktion enthalten sein müssen und die sie benötigt, um ihre Aufgabe ordnungsgemäß auszuführen.

> [!NOTE]
> Parameter werden manchmal als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Als Beispiel benötigt die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) keine Parameter. Sie gibt beim Aufruf immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Zeichenfolgenfunktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) vom Browser benötigt jedoch zwei Parameter — die Zeichenfolge, die im Hauptstring gefunden werden soll, und die Zeichenfolge, die damit ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden sie durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie das nicht tun, nimmt die Funktion in der Regel ein Standardverhalten an. Ein Beispiel dafür: Der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) ist optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter zur Spezifizierung eines Verknüpfungs-/Trennzeichens enthalten ist, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie nach dem Namen des Parameters ein `=` und dann den Standardwert hinzufügen:

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

Dies nennt man eine **anonyme Funktion**, weil sie keinen Namen hat. Sie sehen oft anonyme Funktionen, wenn eine Funktion erwartet, dass ihr eine andere Funktion als Parameter übergeben wird. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Art der Funktionserstellung wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel für anonyme Funktionen

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- der Name des Ereignisses, auf das gelauscht werden soll, welcher in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, wird die von Ihnen bereitgestellte Funktion durch den Browser aufgerufen, und es wird ihr ein Parameter übergeben, der Informationen über dieses Ereignis enthält, einschließlich der besonderen Taste, die der Benutzer gedrückt hat:

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

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion so übergeben, gibt es eine alternative Form, die Sie verwenden können, genannt **Pfeilfunktion**. Anstelle von `function(event)` schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur einen Parameter nimmt, können Sie die Klammern um den Parameter weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im Originalarray zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die Methode `map()` nimmt jedes Element im Array der Reihe nach, übergibt es an die gegebene Funktion und fügt dann den von dieser Funktion zurückgegebenen Wert zu einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Äquivalent der Pfeilfunktion von:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können dieselbe kompakte Syntax verwenden, um das `addEventListener`-Beispiel neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, welcher `undefined` ist, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, sehen Sie den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) an und unsere [Referenzseite über Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Rahmens dieses einführenden Tutorials und werden in den hier besprochenen Fällen wahrscheinlich keinen Unterschied machen. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist ein vollständiges funktionierendes Beispiel des "keydown"-Beispiels, das wir oben besprochen haben:

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

Das Ergebnis - versuchen Sie in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsumfang und Konflikte

Lassen Sie uns ein wenig über {{Glossary("scope", "Umfang")}} sprechen — ein sehr wichtiges Konzept beim Arbeiten mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und anderen Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Umfang**, was bedeutet, dass sie in ihren eigenen separaten Fächern eingeschlossen sind und von Code außerhalb der Funktionen nicht erreichbar sind.

Der Spitzenbereich außerhalb all Ihrer Funktionen wird als **globaler Umfang** bezeichnet. Werte, die im globalen Umfang definiert sind, sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut — hauptsächlich aber aus Gründen der Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo einbinden, könnten anfangen, mit Ihrem Code zu interagieren und Probleme verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führen kann. Dies könnte absichtlich oder einfach aus Versehen geschehen.

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird und ein Fehler in der Konsole ausgegeben wird: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Das liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist und Sie dieselbe Konstante nicht zweimal im selben Umfang deklarieren können. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden. Daher wird ein Alarmfeld angezeigt, das `Hello Chris: welcome to our company.` anzeigt.

Versuchen Sie, die zweite Zeile `const name = "Zaptec";` aus `second.js` zu entfernen und die Seite neu zu laden. Jetzt werden beide Skripte ausgeführt und das Alarmfeld zeigt `Our company is called Chris.` an. Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden praktisch überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen sehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Teile Ihres Codes in Funktionen einzuschließen, vermeidet solche Probleme und wird als bewährte Praxis angesehen.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine sind in ihren eigenen Gehegen untergebracht und haben nur Zugriff auf die Dinge in ihren Gehegen — in derselben Weise wie die Funktionsumfänge. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in ungewohnten Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich im wässrigen, eisigen Lebensraum der Pinguine furchtbar fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihrem jeweiligen Lebensraum in einem Zoo eingeschlossen sind](mdn-mozilla-zoo.png)

Der Zookeeper ist vergleichbar mit dem globalen Umfang — er hat die Schlüssel, um Zugang zu jedem Gehege zu erhalten, Futter aufzufüllen, sich um kranke Tiere zu kümmern usw.

### Aktives Lernen: Spielen mit dem Umfang

Sehen wir uns ein echtes Beispiel an, um den Umfang zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind und eine im globalen Umfang. Es enthält auch eine dritte Funktion namens `output()`, die einen einzigen Parameter akzeptiert und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwickler-Tools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` in der Browseranzeige sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide dieser Befehle sollten einen Fehler in die Konsole werfen, der in etwa so lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsumfangs sind `y` und `z` in den Funktionen `a()` und `b()` eingeschlossen, sodass `output()` sie nicht aufrufen kann, wenn es aus dem globalen Umfang aufgerufen wird.

5. Wie sieht es jedoch aus, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie folgendermaßen aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie, die Funktionen `a()` und `b()` von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte von `y` und `z` in der Browseranzeige sehen. Das funktioniert einwandfrei, da die Funktion `output()` innerhalb der anderen Funktionen aufgerufen wird — im selben Umfang, in dem die Variablen, die sie ausdruckt, jeweils definiert sind. `output()` selbst ist überall verfügbar, da es im globalen Umfang definiert ist.

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

7. Speichern und laden Sie wieder neu, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()`- als auch der `b()`-Aufruf sollten den Wert von x in der Browseranzeige ausgeben. Das funktioniert, weil die Variablen `x` und `output()` im globalen Umfang definiert sind und sie überall im Code verfügbar sind.

8. Versuchen Sie schließlich, Ihren Code wie folgt zu aktualisieren:

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

9. Speichern und laden Sie erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werden die `a()`- und `b()`-Aufrufe diesen ärgerlichen Fehler [ReferenceError: _variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) in die Konsole werfen — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie versuchen auszugeben, sich nicht im selben Funktionsumfang befinden — die Variablen sind für diese Funktionsaufrufe praktisch unsichtbar.

> [!NOTE]
> Die gleichen Umfangsregeln gelten nicht für Schleifen (z. B. `for() { }`) und bedingte Blöcke (z. B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der Fehler [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) ist einer der häufigsten, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Umfang sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher sollten Sie diese zuerst lesen, bevor Sie sie versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Sie durch die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Referenz zu Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen nutzen, um weniger Code zu schreiben](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN learning partner_</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
