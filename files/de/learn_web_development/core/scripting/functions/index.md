---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept beim Programmieren sind **Funktionen**. Funktionen erlauben es Ihnen, einen Codeabschnitt, der eine einzelne Aufgabe erfüllt, in einem definierten Block zu speichern und dann diesen Code bei Bedarf mit einem einzigen kurzen Befehl aufzurufen – anstatt denselben Code immer wieder schreiben zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erforschen, wie die grundlegende Syntax, wie man sie aufruft und definiert, Scope (Gültigkeitsbereich) und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in früheren Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — die Erstellung von wiederverwendbaren Codeblöcken, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind in den Browser integriert und einige benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Das Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definition von Funktionsparametern, das Übergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Scope und Funktions-/Block-Scope.</li>
          <li>Ein Verständnis dessen, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir bereits im gesamten Kurs Funktionen genutzt; wir haben nur noch nicht viel darüber gesprochen. Jetzt ist die Zeit gekommen, dass wir beginnen, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

Wann immer Sie eine JavaScript-Struktur mit einem Paar von Klammern – `()` – verwenden und Sie **nicht** eine übliche eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder ein [if...else Statement](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, machen Sie Gebrauch von einer Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs oft Funktionen verwendet, die in den Browser integriert sind.

Jedes Mal, wenn wir beispielsweise einen Textstring manipulierten:

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

Oder wenn wir eine Zufallszahl generierten:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit deren Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne dass Sie all diesen Code selbst schreiben müssen. Tatsächlich konnte nicht einmal ein Teil des Codes, den Sie beim **Aufrufen** (ein vornehmes Wort für Ausführen) einer eingebauten Browser-Funktion aufrufen, in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Background-Browsercodes auf, der hauptsächlich in Low-Level-Systemsprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browser-Funktionen nicht Teil der JavaScript-Kernsprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden später in einem Modul detaillierter auf die Verwendung von Browser-APIs eingehen.

## Funktionen versus Methoden

Teil von Objekten sind **Methoden**; Sie werden später im Modul mehr über Objekte erfahren. Im Moment wollten wir nur mögliche Verwirrung zwischen Methode und Funktion klären – Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web ansehen.

Der Code, den wir bisher verwendet haben, gibt es in beiden Formen: **Funktionen** und **Methoden.** Die vollständige Liste der eingebauten Funktionen sowie die eingebauten Objekte und ihre entsprechenden Methoden können Sie [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben auch viele **benutzerdefinierte Funktionen** im Kurs gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern unmittelbar danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (sehen Sie auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops), haben wir eine benutzerdefinierte `draw()` Funktion eingebaut, die so aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}} Element. Wann immer wir das tun möchten, können wir einfach die Funktion mit diesem Aufruf:

```js
draw();
```

anstatt all diesen Code jedes Mal ausschreiben zu müssen, wenn wir es wiederholen wollen. Funktionen können jeden gewünschten Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft beispielsweise die `random()` Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, weil die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten jedoch eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Das Aufrufen von Funktionen

Sie sind sich dessen wahrscheinlich bereits bewusst, aber nur für den Fall: Um tatsächlich eine Funktion se nach ihrer Definition zu verwenden, müssen Sie diese ausführen – oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code, gefolgt von Klammern, einfügen.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Art der Erstellung einer Funktion wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird immer hochgehoben, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und es wird trotzdem funktionieren.

## Funktionsparameter

Für das Aufrufen erfordern einige Funktionen die Angabe von **Parametern** — dies sind Werte, die in den Funktionsklammern enthalten sein müssen, damit sie ihre Aufgabe richtig erfüllen können.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Zum Beispiel benötigt die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute String-Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers benötigt jedoch zwei Parameter – den zu findenden Unterstring im Hauptstring und den zu ersetzenden Unterstring:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden sie durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie es nicht tun, übernimmt die Funktion im Allgemeinen ein Standardverhalten. Zum Beispiel ist der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter eingeschlossen wird, um ein Verbindungs-/Trennzeichen zu spezifizieren, wird standardmäßig ein Komma verwendet.

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

Dies wird als **anonyme Funktion** bezeichnet, da sie keinen Namen hat. Sie sehen oft anonyme Funktionen, wenn eine Funktion erwartet, dass eine andere Funktion als Parameter übergeben wird. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Art der Erstellung einer Funktion wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht hochgehoben.

### Beispiel einer anonymen Funktion

Zum Beispiel, sagen wir, Sie möchten einen Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dafür können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- den Namen des Ereignisses, das abgehört werden soll, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event)
- eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und gibt ihr einen Parameter mit Informationen zu diesem Ereignis, einschließlich der besonderen Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstatt eine separate `logKey()` Funktion zu definieren, können Sie `addEventListener()` eine anonyme Funktion übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die sogenannte **Pfeilfunktion**. Anstelle von `function(event)`, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur einen Parameter benötigt, können Sie die Klammern um den Parameter weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung darstellt, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}} Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode übergibt jedes Element im Array nacheinander an die gegebene Funktion. Diese nimmt den von dieser Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist also `item => item * 2` das Pfeilfunktionsäquivalent von:

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

Hierbei wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, lesen Sie den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Rahmens dieses Einführungstutorials und werden in den hier diskutierten Fällen wahrscheinlich keinen Unterschied machen. Um mehr zu lernen, sehen Sie die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel einer Pfeilfunktion

Hier ist ein vollständiges, funktionierendes Beispiel des "keydown"-Beispiels, das wir oben diskutiert haben:

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

Das Ergebnis - versuchen Sie, in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsscope und Konflikte

Sprechen wir ein wenig über den {{Glossary("scope", "Scope")}} – ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die darin definierten Variablen und andere Dinge in ihrem eigenen, separaten **Scope**, was bedeutet, dass sie in ihren eigenen, separaten Kompartimenten eingeschlossen sind, die von Code außerhalb der Funktionen nicht erreichbar sind.

Das oberste Niveau außerhalb aller Ihrer Funktionen wird der **globale Scope** genannt. Im globalen Scope definierte Werte sind von überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut – hauptsächlich jedoch aus Gründen der Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind – externe Skripte, die Sie von anderswo aufrufen, könnten anfangen, mit Ihrem Code zu interferieren und Probleme verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was Konflikte verursacht. Dies könnte absichtlich oder nur versehentlich geschehen.

Zum Beispiel, sagen wir, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird, und ein Fehler wird in der Konsole ausgegeben: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Das liegt daran, dass die `name` Konstante bereits in `first.js` deklariert ist und Sie dieselbe Konstante nicht zweimal im selben Scope deklarieren können. Da das zweite Skript nicht geladen wurde, ist die `greeting()` Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden. Daher wird ein Alarmfeld angezeigt, das `Hello Chris: welcome to our company.` anzeigt.

Entfernen Sie die zweite `const name = "Zaptec";`-Zeile von `second.js` und laden Sie die Seite neu. Jetzt werden beide Skripte ausgeführt, und das Alarmfeld zeigt `Our company is called Chris.` an. Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Halten von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen innerhalb ihrer Gehege – ähnlich wie die Funktionsscopes. Wären sie in der Lage, in andere Gehege zu gelangen, würden Probleme auftreten. Im besten Fall würden sich die verschiedenen Tiere in unbekannten Lebensräumen wirklich unwohl fühlen — ein Löwe oder Tiger würde sich im wässrigen, eisigen Reich der Pinguine furchtbar fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihrem jeweiligen Lebensraum in einem Zoo eingezäunt](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Scope — er hat die Schlüssel, um jedes Gehege zu betreten, Futter aufzufüllen, kranke Tiere zu versorgen, usw.

### Aktives Lernen: Spielen mit dem Scope

Schauen wir uns ein echtes Beispiel an, um den Scope zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Es enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Scope definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browserfenster angezeigt bekommen.

4. Versuchen Sie nun, Folgendes in Ihre Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa so lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsscope sind `y` und `z` in den `a()`- und `b()`-Funktionen eingeschlossen, sodass `output()` nicht darauf zugreifen kann, wenn es vom globalen Scope aus aufgerufen wird.

5. Was aber, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie wie folgt aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie dann, die `a()`- und `b()`-Funktionen von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte von `y` und `z` im Browserfenster angezeigt bekommen. Dies funktioniert einwandfrei, da `output()` innerhalb der anderen Funktionen aufgerufen wird – im selben Scope, in dem die Variablen, die es in jedem Fall ausgibt, definiert sind. `output()` selbst ist von überall verfügbar, da es im globalen Scope definiert ist.

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

7. Speichern und laden Sie die Seite erneut und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Beide `a()`- und `b()`-Aufrufe sollten den Wert von `x` im Browserfenster ausgeben. Diese funktionieren einwandfrei, da `output()`-Aufrufe nicht im selben Scope wie `x` definiert sind, `x` jedoch eine globale Variable ist, also überall im Code verfügbar ist.

8. Versuchen Sie schließlich, Ihren Code so zu aktualisieren:

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

9. Speichern und laden Sie die Seite erneut und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die `a()`- und `b()`-Aufrufe jenen lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie auszugeben versuchen, nicht im gleichen Funktionsscope sind — die Variablen sind für diese Funktionsaufrufe praktisch unsichtbar.

> [!NOTE]
> Dieselben Scope-Regeln gelten nicht für Schleifen (z. B. `for() { }`) und Bedingungsblöcke (z. B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, auf den Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die fragliche Variable definiert haben, überprüfen Sie, in welchem Scope sie sich befindet.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen – siehe [Testen Sie Ihr Können: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten zwei Artikeln behandelt werden, deshalb möchten Sie diese vielleicht zuerst lesen, bevor Sie es versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und bereitet den Weg für den nächsten, in dem wir praktisch werden und Sie durch die Schritte zum Aufbau Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN-lernt Partner_</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
