---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann bei Bedarf mit einem einzigen kurzen Befehl aufzurufen — anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte zu Funktionen wie die grundlegende Syntax, wie man sie aufruft und definiert, den Scope und Parameter untersuchen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um die Erstellung wiederverwendbarer Codeblöcke zu ermöglichen, die überall benötigt aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, und einige sind in den Browser integriert, während andere benutzerdefiniert sind.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergeben von Argumenten bei Funktionsaufrufen.</li>
          <li>Globaler Scope und Funktionen-/Block-Scope.</li>
          <li>Ein Verständnis dessen, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript werden Sie Funktionen überall finden. Tatsächlich haben wir bisher im Kurs Funktionen verwendet, ohne viel darüber zu sprechen. Jetzt ist jedoch die Zeit gekommen, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

Praktisch jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die Klammern — `()` — enthält und **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, verwenden Sie eine Funktion.

## Eingebaute Browser-Funktionen

In diesem Kurs haben wir oft Funktionen verwendet, die in den Browser integriert sind.

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
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit deren Funktionalität wieder vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein schickes Wort für ausführen oder laufen lassen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browsercodes auf, der größtenteils in systemnahen Sprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen und noch mehr Funktionalität bieten (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden das Verwenden von Browser-APIs in einem späteren Modul genauer betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, nennt man **Methoden**; Sie werden später in diesem Modul über Objekte lernen. Zunächst wollten wir nur jegliche Verwirrung bezüglich Methode versus Funktion klären — es ist wahrscheinlich, dass Sie beiden Begriffen begegnen, wenn Sie sich die verfügbaren zugehörigen Ressourcen im Web ansehen.

Der bisher genutzte eingebaute Code erscheint in beiden Formen: **Funktionen** und **Methoden**. Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code und nicht im Browser definiert sind. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt danach sahen, verwendeten Sie eine benutzerdefinierte Funktion. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel über Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingeschlossen, die folgendermaßen aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun wollen, können wir einfach die Funktion mit Folgendem aufrufen:

```js
draw();
```

anstatt jedes Mal diesen ganzen Code erneut schreiben zu müssen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft zum Beispiel die `random()`-Funktion drei Mal auf, die durch folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie verstehen dies wahrscheinlich inzwischen, aber falls doch nicht: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht durch Einfügen des Namens der Funktion irgendwo im Code gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktions Erstellung ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer gehoben, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und es wird einwandfrei funktionieren.

## Funktionsparameter

Einige Funktionen erfordern **Parameter**, die angegeben werden müssen, wenn Sie sie aufrufen — das sind Werte, die in die Funktionsklammern eingeschlossen sein müssen, damit sie ihre Aufgabe richtig erfüllen kann.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Ein Beispiel: Die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers erfordert keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion des Browsers erfordert jedoch zwei Parameter — die Teilzeichenfolge, die im Hauptstring gefunden werden soll, und die Teilzeichenfolge, die diesen String ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht unbedingt angeben. Wenn Sie dies nicht tun, übernimmt die Funktion in der Regel eine gewisse Standardverhalten. Ein Beispiel: Der Parameter der [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Funktion des Arrays ist optional:

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

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte festlegen, indem Sie `=` nach dem Namen des Parameters hinzufügen, gefolgt vom Standardwert:

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

Dies nennt man eine **anonyme Funktion**, da sie keinen Namen hat. Anonyme Funktionen sehen Sie häufig, wenn eine Funktion erwartet, dass sie eine andere Funktion als Parameter erhält. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktions Erstellung ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel für anonyme Funktionen

Nehmen wir zum Beispiel an, Sie möchten einige Codes ausführen, wenn der Benutzer in ein Textfeld tippt. Um dies zu tun, können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion des Textfeldes aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- Den Namen des zu lauschenden Ereignisses, der in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- Eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen über dieses Ereignis, einschließlich der konkreten Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Statt eine separate `logKey()`-Funktion zu definieren, können Sie eine anonyme Funktion an `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstatt `function(event)`, schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und die Anweisung implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach und übergibt es an die gegebene Funktion. Dann nimmt sie den von dieser Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

So ist im obigen Beispiel `item => item * 2` das Äquivalent zur Pfeilfunktion von:

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

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen Ihnen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, lesen Sie den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Diese liegen außerhalb des Rahmens dieses Einführungstutorials und sind in den hier besprochenen Fällen wahrscheinlich nur von geringer Bedeutung. Um mehr zu erfahren, sehen Sie sich die [Pfeilfunktion-Referenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

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

Das Ergebnis - versuchen Sie in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktions-Scope und Konflikte

Lassen Sie uns ein wenig über den {{Glossary("scope", "Scope")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die innerhalb der Funktion definierten Variablen und anderen Dinge in ihrem eigenen separaten **Scope**, was bedeutet, dass sie in ihren eigenen separaten Abteilen eingeschlossen sind, die von Code außerhalb der Funktionen nicht erreichbar sind.

Die oberste Ebene außerhalb aller Ihrer Funktionen wird als **globaler Scope** bezeichnet. Werte, die im globalen Scope definiert sind, sind überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so konzipiert — hauptsächlich wegen Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo einbinden, könnten anfangen, Ihren Code zu stören und Probleme zu verursachen, da sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führt. Dies könnte böswillig geschehen oder einfach aus Versehen.

Nehmen wir z.B. an, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien einbindet, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht lädt und läuft, und eine Fehlermeldung wird in der Konsole angezeigt: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies ist, weil die `name`-Konstante bereits in `first.js` deklariert ist, und Sie können dieselbe Konstante nicht zweimal im gleichen Scope deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden. Daher sehen Sie ein Alert-Fenster, das `Hello Chris: welcome to our company.` anzeigt.

Versuchen Sie, die zweite `const name = "Zaptec";`-Zeile aus `second.js` zu entfernen und die Seite neu zu laden. Jetzt werden beide Skripte ausgeführt, und das Alert-Fenster zeigt `Our company is called Chris.` an. Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Code-Teile in Funktionen eingeschlossen zu halten, vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen in ihren Gehegen — genauso wie die Funktions-Scope. Wenn sie in die anderen Gehege gelangen könnten, würden Probleme entstehen. Im besten Fall würde sich das andere Tier wirklich unwohl in den unbekannten Lebensräumen fühlen — ein Löwe oder Tiger würde sich furchtbar im wässrigen, eisigen Bereich der Pinguine fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihrem jeweiligen Habitat in einem Zoo eingezäunt](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Scope — er hat die Schlüssel, um zu jedem Gehege zu kommen, Futter aufzufüllen, kranke Tiere zu versorgen, etc.

### Aktives Lernen: Spielen mit dem Scope

Sehen wir uns ein echtes Beispiel an, um das Scoping zu demonstrieren.

1. Machen Sie sich zunächst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind und eine im globalen Umfeld. Außerdem enthält es eine dritte Funktion namens `output()`, die einen einzigen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport angezeigt bekommen.

4. Versuchen Sie nun, das Folgende in Ihre Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der ungefähr lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktions-Scope sind `y` und `z` innerhalb der `a()`- und `b()`-Funktionen eingeschlossen, sodass `output()` nicht auf sie zugreifen kann, wenn es vom globalen Scope aufgerufen wird.

5. Aber was ist, wenn es innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie so aussehen:

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

   Speichern Sie den Code und laden Sie ihn im Browser neu, dann versuchen Sie, die Funktionen `a()` und `b()` von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Browser-Viewport gedruckt sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird — im gleichen Scope, in dem die Variablen definiert sind, die in jedem Fall gedruckt werden. `output()` selbst ist von überall aus verfügbar, da es im globalen Scope definiert ist.

6. Versuchen Sie jetzt, Ihren Code so zu aktualisieren:

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

7. Speichern und laden Sie erneut, und versuchen Sie dies nochmal in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()` als auch der `b()` Aufruf sollten den Wert von x im Browser-Viewport ausgeben. Diese funktionieren einwandfrei, selbst wenn die `output()`-Aufrufe nicht im gleichen Bereich definiert sind, in dem `x` definiert ist, `x` ist eine globale Variable und somit überall verfügbar.

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

9. Speichern und laden Sie erneut, und versuchen Sie dies nochmal in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die `a()`- und `b()`-Aufrufe diesen lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie zu drucken versuchen, nicht in denselben Funktions-Scope sind — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Dieselben Scoping-Regeln gelten nicht für Schleifen (z. B. `for() { }`) und Konditionsblöcke (z. B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, dem Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Scope sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher möchten Sie diese vielleicht zuerst lesen, bevor Sie es versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und den Weg für den nächsten geebnet, in dem wir praktisch werden und Sie durch die Schritte führen, um Ihre eigene benutzerdefinierte Funktion aufzubauen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — deckt einige fortgeschrittene Funktionen ab, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Using functions to write less code](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
