---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 6149deb5f4beccdc09549fbf8d1810d9a4dc3462
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept im Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code bei Bedarf durch einen kurzen Befehl aufzurufen, anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie die grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — das Erstellen von wiederverwendbaren Codeblöcken, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind in den Browser eingebaut, andere sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Arrow-Funktionen (Pfeilfunktionen).</li>
          <li>Definition von Funktionsparametern, Übergabe von Argumenten bei Funktionsaufrufen.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Block-Gültigkeitsbereich.</li>
          <li>Ein Verständnis davon, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir während des gesamten Kurses bisher Funktionen verwendet; wir haben nur nicht sehr viel darüber gesprochen. Jetzt ist jedoch die Zeit gekommen, dass wir direkt über Funktionen sprechen und ihre Syntax wirklich erkunden.

Praktisch immer, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält und Sie **nicht** eine allgemeine eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while), oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) nutzen, verwenden Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs häufig Funktionen verwendet, die im Browser eingebaut sind.

Jedes Mal, wenn wir beispielsweise einen Textstring manipuliert haben:

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

Wir haben eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit ihrer Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebautes Browserfunktion **aufrufen** (ein schickes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browsercodes auf, der weitgehend in low-level Systemsprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Beachten Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe dazu den [frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden uns in einem späteren Modul detaillierter mit der Verwendung von Browser-APIs beschäftigen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später in diesem Modul mehr über Objekte lernen. Für jetzt wollten wir nur jegliche Verwirrung über Methode versus Funktion klären — es ist wahrscheinlich, dass Sie auf beide Begriffe stoßen, wenn Sie die verfügbaren verwandten Ressourcen im Web ansehen.

Der eingebauter Code, den wir bisher verwendet haben, kommt in beiden Formen vor: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie die eingebauten Objekte und ihre entsprechenden Methoden in unserem [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert und nicht im Browser eingebaut sind. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel über Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebaut, die folgendermaßen aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise in einem {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun wollen, können wir einfach die Funktion so aufrufen:

```js
draw();
```

anstatt jedes Mal, wenn wir es wiederholen wollen, den gesamten Code erneut schreiben zu müssen. Funktionen können jeden beliebigen Code enthalten — Sie können sogar andere Funktionen von innerhalb der Funktionen aufrufen. Die obige Funktion ruft zum Beispiel die `random()`-Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, weil die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie sind sich wahrscheinlich inzwischen klar darüber, aber nur für den Fall: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie **ausführen** — oder **aufrufen**. Dies wird erreicht, indem der Name der Funktion irgendwo im Code angegeben wird, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionsdefinition wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird immer gehoben, sodass Sie die Funktion oberhalb der Funktionsdefinition aufrufen können und es wird dennoch funktionieren.

## Funktionsparameter

Einige Funktionen erfordern **Parameter**, die angegeben werden müssen, wenn Sie sie aufrufen — dies sind Werte, die innerhalb der Funktionsklammern enthalten sein müssen, damit die Funktion ihre Aufgabe ordnungsgemäß ausführen kann.

> [!NOTE]
> Parameter werden manchmal als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Ein Beispiel: Die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers erfordert keine Parameter. Bei einem Aufruf gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Zeichenkettenfunktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers benötigt jedoch zwei Parameter — den Teilstring, der in der Hauptzeichenkette zu finden ist, und den Teilstring, der durch diesen ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden sie durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, übernimmt die Funktion in der Regel eine Art Standardverhalten. Zum Beispiel ist der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben wird, um ein Verbindungs-/Trennzeichen anzugeben, wird standardmäßig ein Komma verwendet.

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktionsdefinition wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel für eine anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn ein Benutzer etwas in ein Textfeld eingibt. Dazu können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion des Textfeldes aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- den Namen des zu überwachenden Ereignisses, das in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter, der Informationen über dieses Ereignis enthält, einschließlich der konkreten Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Wenn Ihre Funktion schließlich nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jeden Artikel im Array der Reihe nach und übergibt ihn an die gegebene Funktion. Dann nimmt sie den von dieser Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` die Pfeilfunktion, die dem entspricht:

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

In diesem Fall wird der Wert von `console.log()`, was `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen Ihnen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr darüber zu erfahren, sehen Sie sich den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite über Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses Einführungstutorials und werden in den hier besprochenen Fällen wahrscheinlich keinen Unterschied machen. Um mehr zu erfahren, siehe die [Pfeilfunktionen-Referenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel einer Pfeilfunktion

Hier ist ein vollständiges Arbeitsbeispiel des "keydown"-Beispiels, das wir zuvor diskutiert haben:

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

Lassen Sie uns ein wenig über den {{Glossary("scope", "Gültigkeitsbereich")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und andere Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Gültigkeitsbereich**, was bedeutet, dass sie in ihren eigenen getrennten Bereichen eingeschlossen sind und von Code außerhalb der Funktionen nicht erreichbar sind.

Der oberste Bereich außerhalb all Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Im globalen Bereich definierte Werte sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so konzipiert — hauptsächlich jedoch aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind. Externe Skripte, die Sie von anderswo aufrufen, könnten anfangen, Ihren Code zu stören und Probleme zu verursachen, weil sie zufällig die gleichen Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führt. Dies könnte böswillig oder einfach aus Versehen geschehen.

Beispielsweise nehmen wir an, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien referenziert, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

```html
<!-- Excerpt from the HTML -->
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

Sie können dieses Beispiel [live auf GitHub ausprobieren](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Laden Sie es in einem separaten Browser-Tab, bevor Sie die untenstehende Erklärung lesen.

- Wenn das Beispiel in einem Browser gerendert wird, sehen Sie zuerst ein Alert-Fenster, das `Hello Chris: welcome to our company.` anzeigt, was bedeutet, dass die `greeting()`-Funktion, die im ersten Scriptfile definiert ist, vom `greeting()`-Aufruf innerhalb des internen Skripts aufgerufen wurde.

- Das zweite Skript wird jedoch überhaupt nicht geladen und ausgeführt, und ein Fehler wird in der Konsole ausgegeben: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist und Sie dieselbe Konstante nicht zweimal im selben Bereich deklarieren können. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion von `second.js` nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Das Alert-Fenster würde nun `Our company is called Chris.` anzeigen. Funktionen _können_ neu deklariert werden, und die letzte Deklaration in der Quellreihenfolge wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Das Abschließen von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als bewährte Praxis angesehen.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen darin — genauso wie bei den Funktionsumfängen. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in unbekannten Habitaten wirklich unwohl fühlen — ein Löwe oder Tiger würde sich im eiskalten, wässrigen Lebensraum der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Gehegen in einem Zoo](mdn-mozilla-zoo.png)

Der Zookeeper ist wie der globale Gültigkeitsbereich — er hat die Schlüssel für den Zugang zu jedem Gehege, um Nahrung aufzustocken, kranke Tiere zu pflegen usw.

### Spielen mit dem Gültigkeitsbereich

Schauen wir uns ein echtes Beispiel an, um den Gültigkeitsbereich zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Es enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — zwei davon sind innerhalb der Funktionen definiert, und eine im globalen Gültigkeitsbereich. Es enthält auch eine dritte Funktion namens `output()`, die einen einzigen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den DevTools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Der Wert der Variablen `x` sollte in der Browseransicht erscheinen.

4. Versuchen Sie jetzt Folgendes in Ihrer Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in der Konsole auslösen, der in etwa so lautet "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsumfangs: `y` und `z` sind in den `a()` und `b()` Funktionen eingeschlossen, so dass `output()` sie nicht aufrufen kann, wenn es aus dem globalen Bereich aufgerufen wird.

5. Wie sieht es jedoch aus, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie wie folgt aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser erneut, versuchen Sie dann, die `a()` und `b()`-Funktionen aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y` und `z`-Werte in der Browseransicht sehen. Das funktioniert einwandfrei, weil die `output()` Funktion innerhalb der anderen Funktionen aufgerufen wird, im selben Umfang, in dem die Variablen definiert sind, die sie drucken. `output()` selbst ist von überall verfügbar, da es im globalen Bereich definiert ist.

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

7. Speichern Sie erneut und laden Sie die Seite neu, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()`- als auch der `b()`-Aufruf sollten den Wert von x in der Browseransicht drucken. Dies funktioniert einwandfrei, da die `output()`-Aufrufe nicht im gleichen Umfang wie `x` definiert sind, `x` jedoch eine globale Variable ist und daher innerhalb des gesamten Codes überall verfügbar ist.

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

9. Speichern Sie erneut und laden Sie die Seite neu, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal erzeugen die `a()` und `b()`-Aufrufe den ärgerlichen [ReferenceError: _Variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in der Konsole — dies liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie drucken wollen, nicht im gleichen Funktionsbereich sind — die Variablen sind für diese Funktionsaufrufe im Wesentlichen unsichtbar.

> [!NOTE]
> Die gleichen Regeln für die Gültigkeit gelten nicht für Schleifen (z.B. `for() { }`) und bedingte Blöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, aber sie sind nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" ist nicht definiert](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Gültigkeitsbereich sie sich befindet.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Ihnen die Schritte zum Aufbau Ihrer eigenen benutzerdefinierten Funktion zeigen.

## Siehe auch

- [Detaillierte Anleitung zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige hier nicht enthaltene fortgeschrittene Funktionen.
- [Funktionen-Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen verwenden, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
