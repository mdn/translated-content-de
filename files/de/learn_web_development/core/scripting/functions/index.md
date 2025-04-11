---
title: Funktionen — wiederverwendbare Codebausteine
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept beim Programmieren sind **Funktionen**, die es ermöglichen, einen Codeabschnitt, der eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann aufzurufen, wann immer Sie ihn benötigen, mit einem einzigen kurzen Befehl — anstatt denselben Code mehrfach tippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie die grundlegende Syntax, das Aufrufen und Definieren von Funktionen, Bereichsumfang und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um die Erstellung wiederverwendbarer Codeblöcke zu ermöglichen, die überall aufgerufen werden können, wo sie benötigt werden.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind in den Browser integriert und andere sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definition von Funktionsparametern, Übergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Bereich und Funktions-/Blockbereich.</li>
          <li>Ein Verständnis dafür, was Rückruffunktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie überall Funktionen. Tatsächlich haben wir Funktionen während des gesamten Kurses bis jetzt verwendet; wir haben nur nicht viel darüber gesprochen. Jetzt ist es jedoch an der Zeit, dass wir explizit über Funktionen sprechen und ihre Syntax wirklich untersuchen.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — umfasst und Sie **nicht** eine häufig genutzte eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie wahrscheinlich eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs viele der im Browser eingebauten Funktionen verwendet.

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

Oder jedes Mal, wenn wir eine Zufallszahl generiert haben:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit deren Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, um Ihnen nützliche Dinge zu ermöglichen, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein ausgefallenes Wort für ausführen oder starten), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browsercodes auf, der weitgehend in niedrigstufigen Systemsprachen wie C++ und nicht in Websprachen wie JavaScript geschrieben ist.

Denken Sie daran, dass einige eingebaute Browserfunktionen nicht Teil der grundlegenden JavaScript-Sprache sind — einige sind als Teil der Browser-APIs definiert, die auf die Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul näher betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul über Objekte lernen. Zunächst wollten wir nur jede mögliche Verwirrung über Methoden versus Funktionen klären — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich die verfügbaren verwandten Ressourcen im Internet ansehen.

Der bisher verwendete eingebaute Code liegt in beiden Formen vor: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) überprüfen.

Sie haben im Verlauf des Kurses auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind und nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit direkt folgenden Klammern gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebunden, die folgendermaßen aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun möchten, können wir einfach die Funktion mit diesem Befehl aufrufen:

```js
draw();
```

anstatt jedes Mal, wenn wir sie wiederholen möchten, den gesamten Code erneut zu schreiben. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen aus Funktionen heraus aufrufen. Die obige Funktion ruft zum Beispiel dreimal die Funktion `random()` auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt. Wir wollten eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Wahrscheinlich ist Ihnen das mittlerweile klar, aber nur für den Fall: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem der Name der Funktion irgendwo im Code eingeschlossen wird, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird stets gehoben (hoisted), sodass Sie die Funktion über der Funktionsdefinition aufrufen können, und sie wird einwandfrei funktionieren.

## Funktionsparameter

Einige Funktionen erfordern **Parameter**, die angegeben werden müssen, wenn Sie sie aufrufen — das sind Werte, die in die Klammern der Funktion aufgenommen werden müssen, damit sie ihre Aufgabe ordnungsgemäß ausführen kann.

> [!NOTE]
> Parameter werden manchmal auch als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Zum Beispiel benötigt die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers keine Parameter. Bei Aufruf gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion für Zeichenketten im Browser benötigt jedoch zwei Parameter — die Teilzeichenkette, die in der Hauptzeichenkette gefunden werden soll, und die Teilzeichenkette, die diese Zeichenkette ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, nimmt die Funktion im Allgemeinen eine Art Standardeinstellung an. Zum Beispiel ist der Parameter der [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Funktion für Arrays optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben ist, um ein Trennzeichen festzulegen, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie `=` nach dem Namen des Parameters hinzufügen, gefolgt von dem Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bisher haben wir eine Funktion folgendermaßen erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, da sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel für anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion des Textfeldes aufrufen. Diese Funktion erwartet (mindestens) zwei Parameter:

- den Namen des Ereignisses, auf das gehört werden soll, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event)
- eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen zu diesem Ereignis, einschließlich der speziellen Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, genannt **Pfeilfunktion**. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach, übergibt es an die gegebene Funktion und fügt den durch diese Funktion zurückgegebenen Wert einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Pfeilfunktionsäquivalent von:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können die gleiche knapp gefasste Syntax verwenden, um das `addEventListener`-Beispiel umzuschreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Rückruffunktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses Einführungstutorials und sind in den hier besprochenen Fällen wahrscheinlich irrelevant. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel einer Pfeilfunktion

Hier ist ein vollständiges Arbeitsbeispiel des oben besprochenen "keydown"-Beispiels:

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

## Funktionsbereich und Konflikte

Lassen Sie uns ein wenig über den {{Glossary("scope", "Bereich")}} sprechen — ein sehr wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die darin definierten Variablen und anderen Dinge in ihrem eigenen separaten **Bereich** enthalten, was bedeutet, dass sie in ihren eigenen getrennten Abteilen gesperrt sind und von Code außerhalb der Funktionen nicht erreicht werden können.

Der oberste Bereich außerhalb aller Funktionen wird als **globaler Bereich** bezeichnet. Im globalen Bereich definierte Werte sind von überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut — hauptsächlich jedoch aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus erreichbar sind — externe Skripte, die Sie von anderen Orten laden, könnten anfangen, Ihren Code zu stören und Probleme zu verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden und Konflikte verursachen. Dies könnte absichtlich oder einfach nur zufällig geschehen.

Angenommen, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien lädt, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird und ein Fehler in der Konsole angezeigt wird: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist, und Sie können dieselbe Konstante nicht zweimal im selben Bereich deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden. Daher wird ein Alert-Fenster angezeigt, das `Hallo Chris: Willkommen in unserem Unternehmen.` sagt.

Versuchen Sie, die zweite Zeile `const name = "Zaptec";` aus `second.js` zu entfernen und die Seite erneut zu laden. Jetzt werden beide Skripte ausgeführt, und das Alert-Fenster sagt `Unser Unternehmen heißt Chris.`. Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub in Betrieb sehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Abschließen von Teilen Ihres Codes innerhalb von Funktionen vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie bei einem Zoo. Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen in ihren Gehegen — in derselben Weise wie die Funktionsbereiche. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen unwohl fühlen — ein Löwe oder Tiger würde sich schrecklich im wässrigen, eisigen Bereich der Pinguine fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihrem jeweiligen Lebensraum in einem Zoo eingezäunt sind](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Bereich — er hat die Schlüssel, um auf jedes Gehege zuzugreifen, Futter aufzufüllen, kranke Tiere zu pflegen usw.

### Aktives Lernen: Mit dem Bereich spielen

Lassen Sie uns ein echtes Beispiel anschauen, um den Bereich zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()` sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Bereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzigen Parameter übernimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwicklerwerkzeugen Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa lautet "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsbereichs sind `y` und `z` in den Funktionen `a()` und `b()` eingeschlossen, sodass `output()` nicht auf sie zugreifen kann, wenn sie aus dem globalen Bereich aufgerufen wird.

5. Was ist jedoch, wenn sie von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` wie folgt zu bearbeiten:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie dann, die Funktionen `a()` und `b()` von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten sehen, dass die Werte von `y` und `z` im Browser-Viewport gedruckt werden. Dies funktioniert einwandfrei, da die Funktion `output()` innerhalb der anderen Funktionen aufgerufen wird — im selben Bereich, in dem die Variablen definiert sind, die in jedem Fall gedruckt werden. `output()` selbst ist von überall verfügbar, da es im globalen Bereich definiert ist.

6. Versuchen Sie jetzt, Ihren Code wie folgt zu aktualisieren:

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

7. Speichern Sie und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()`- als auch der `b()`-Aufruf sollten den Wert von `x` im Browser-Viewport drucken. Diese funktionieren einwandfrei, da die `output()`-Aufrufe sich nicht im selben Bereich wie `x` befinden.

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

9. Speichern Sie und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die Aufrufe von `a()` und `b()` den lästigen [ReferenceError: _Variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in die Konsole — denn die `output()`-Aufrufe und die Variablen, die sie versuchen zu drucken, befinden sich nicht im selben Funktionsbereich — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Die gleichen Bereichsregeln gelten nicht für Schleifen (z.B. `for() { }`) und bedingte Blöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, auf den Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher möchten Sie diese vielleicht zuerst lesen, bevor Sie sie versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erforscht und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Sie durch die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionen-Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwenden von Funktionen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
