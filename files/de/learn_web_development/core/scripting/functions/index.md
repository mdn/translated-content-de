---
title: Funktionen – wiederverwendbare Codeblöcke
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: d2c90c89d435ada9d3f10a2096c20b1ac7c91afe
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept in der Programmierung sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe erfüllt, in einem definierten Block zu speichern und diesen Code dann bei Bedarf mit einem einzigen kurzen Befehl aufzurufen – anstatt denselben Code mehrmals eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereiche und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen – um die Erstellung von wiederverwendbaren Codeblöcken zu ermöglichen, die nach Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet; einige sind im Browser eingebaut und einige sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergabe von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Block-Gültigkeitsbereich.</li>
          <li>Ein Verständnis davon, was Rückruffunktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich verwenden wir Funktionen bereits während des gesamten Kurses; wir haben sie nur bisher nicht sehr viel thematisiert. Jetzt ist es jedoch an der Zeit, dass wir explizit über Funktionen sprechen und ihre Syntax wirklich erkunden.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — aufweist und Sie **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), eine [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs bereits viele im Browser eingebaute Funktionen verwendet.

Jedes Mal, wenn wir einen Textstring manipuliert haben, zum Beispiel:

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

haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich mit ihrer Funktionalität vertraut zu machen, falls nötig.

Die JavaScript-Sprache bietet viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne den gesamten Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browser-Funktion **aufrufen** (ein schickes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browsercodes auf, der hauptsächlich in Systemsprachen wie C++ und nicht in Websprachen wie JavaScript geschrieben ist.

Denken Sie daran, dass einige eingebaute Browser-Funktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für mehr Beschreibungen). Wir werden in einem späteren Modul genauer auf die Verwendung von Browser-APIs eingehen.

## Funktionen versus Methoden

**Funktionen,** die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später in diesem Modul mehr über Objekte lernen. Im Moment wollten wir nur jegliche Verwirrung über Methode versus Funktion aufklären – Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher verwendet haben, kommt in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben außerdem im Kurs bisher viele **benutzerdefinierte Funktionen** gesehen – Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Immer wenn Sie einen benutzerdefinierten Namen mit Klammern direkt dahinter gesehen haben, haben Sie eine benutzerdefinierte Funktion benutzt. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops), haben wir eine benutzerdefinierte `draw()` Funktion eingefügt, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}} Elements. Jedes Mal, wenn wir das tun wollen, können wir einfach die Funktion mit diesem Befehl aufrufen:

```js
draw();
```

anstatt jedes Mal all diesen Code erneut schreiben zu müssen, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen von innerhalb anderer Funktionen aufrufen. Die obige Funktion ruft zum Beispiel die `random()` Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie sind wahrscheinlich jetzt mit diesem Konzept vertraut, aber nur für den Fall, um tatsächlich eine Funktion zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen – oder aufrufen. Dies wird durch die Einbeziehung des Namens der Funktion irgendwo im Code, gefolgt von Klammern, getan.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer "gehoben", sodass Sie die Funktion über der Funktionsdefinition aufrufen können und es einwandfrei funktioniert.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** angegeben werden, wenn Sie sie aufrufen – dies sind Werte, die in den Funktionsklammern enthalten sein müssen, die sie benötigen, um ihre Aufgabe ordnungsgemäß auszuführen.

> [!NOTE]
> Parameter werden manchmal als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Ein Beispiel: Die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) erfordert keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Stringfunktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers erfordert jedoch zwei Parameter – den Teilstring, der im Hauptstring gefunden werden soll, und den Teilstring, der diesen String ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional – Sie müssen sie nicht zwingend angeben. Wenn Sie dies nicht tun, wird die Funktion im Allgemeinen eine Art Standardverhalten übernehmen. Ein Beispiel: Der Parameter der Arrayfunktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) ist optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter enthalten ist, um ein Verbindungs-/Begrenzungszeichen anzugeben, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie hinter dem Namen des Parameters ein `=` setzen, gefolgt vom Standardwert:

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

Dies wird eine **anonyme Funktion** genannt, weil sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht "gehoben".

### Beispiel für eine anonyme Funktion

Als Beispiel, nehmen wir an, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Um dies zu tun, können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- den Namen des Ereignisses, das überwacht werden soll, was in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, wird der Browser die von Ihnen angegebene Funktion aufrufen und ihr einen Parameter übergeben, der Informationen über dieses Ereignis enthält, einschließlich der speziellen Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstatt eine separate `logKey()` Funktion zu definieren, können Sie eine anonyme Funktion in `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, die **Pfeilfunktionen** genannt wird. Anstelle von `function(event)`, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur einen Parameter enthält, können Sie die Klammern um den Parameter weglassen:

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

Die `map()` Methode nimmt jedes Element im Array der Reihe nach und übergibt es der gegebenen Funktion. Dann nimmt sie den von dieser Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Pfeilfunktionsäquivalent von:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können die gleiche knappe Syntax verwenden, um das `addEventListener` Beispiel neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Rückruffunktion zurückgegeben.

Wir empfehlen, dass Sie Pfeilfunktionen verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, sehen Sie sich den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite über Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie sind außerhalb des Rahmens dieses Einführungstutorials und sind in den hier behandelten Fällen unwahrscheinlich von Bedeutung. Mehr dazu finden Sie in der [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist ein vollständiges, funktionierendes Beispiel des "keydown" Beispiels, das wir oben diskutiert haben:

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

Das Ergebnis - versuchen Sie, in das Textfeld zu tippen und sehen Sie die Ausgabe:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsumfang und Konflikte

Lassen Sie uns ein wenig über den {{Glossary("scope", "Umfang")}} sprechen — ein sehr wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die innerhalb der Funktion definierten Variablen und andere Dinge in ihrem eigenen separaten **Umfang**, was bedeutet, dass sie in ihren eigenen separaten Abteilen eingeschlossen sind und von Code außerhalb der Funktionen nicht erreicht werden können.

Die oberste Ebene außerhalb all Ihrer Funktionen wird als **globaler Umfang** bezeichnet. Im globalen Umfang definierte Werte sind überall im Code zugänglich.

JavaScript ist so aufgebaut, um verschiedene Gründe — hauptsächlich aus Sicherheits- und Ordnungsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo abrufen, könnten anfangen, mit Ihrem Code zu manipulieren und Probleme zu verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was Konflikte verursacht. Dies könnte böswillig geschehen oder einfach nur aus Versehen.

Zum Beispiel, sagen wir Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion, die denselben Namen verwenden:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird und ein Fehler in der Konsole ausgegeben wird: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` in `first.js` bereits deklariert wurde, und Sie können die gleiche Konstante nicht zweimal im gleichen Umfang deklarieren. Weil das zweite Skript nicht geladen wurde, steht die `greeting()` Funktion aus `second.js` nicht zum Aufrufen zur Verfügung. Daher wird ein Meldungsfeld angezeigt, das `Hallo Chris: willkommen bei unserem Unternehmen.` anzeigt.

Versuchen Sie, die zweite `const name = "Zaptec";` Zeile aus `second.js` zu entfernen und die Seite erneut zu laden. Jetzt werden beide Skripte ausgeführt und das Meldungsfeld sagt `Unser Unternehmen heißt Chris.`. Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen] (https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Halten von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und gilt als beste Praxis.

Es ist ein wenig wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine sind in ihren eigenen Umgebungen eingeschlossen und haben nur Zugang zu den Dingen innerhalb ihrer Gehege — ebenso wie die Funktionsumfänge. Wenn sie in andere Umgebungen gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich im eisig-nassen Umfeld der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihrem jeweiligen Lebensraum in einem Zoo eingeschlossen](mdn-mozilla-zoo.png)

Der Zookeeper ist wie der globale Umfang — er hat die Schlüssel, um auf jedes Gehege zuzugreifen, Futter nachzufüllen, kranke Tiere zu pflegen usw.

### Aktives Lernen: Spielen mit dem Umfang

Lassen Sie uns ein echtes Beispiel betrachten, um den Umfang zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Dies enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind, und eine im globalen Umfang. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter nimmt und diesen in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Entwicklertools des Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browserfenster sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa so lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsumfangs sind `y` und `z` innerhalb der `a()` und `b()` Funktionen eingeschlossen, sodass `output()` nicht darauf zugreifen kann, wenn es aus dem globalen Umfang aufgerufen wird.

5. Was ist jedoch, wenn es innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie folgendermaßen aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie, die `a()` und `b()` Funktionen aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y` und `z` Werte im Browserfenster sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird — im gleichen Umfang, in dem die Variablen definiert sind, die sie in jedem Fall ausgeben soll. `output()` selbst ist überall verfügbar, da es im globalen Umfang definiert ist.

6. Versuchen Sie nun, Ihren Code so zu aktualisieren:

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

7. Speichern und laden Sie erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Beide `a()` und `b()` Aufrufe sollten den Wert von x im Browserfenster ausgeben. Diese funktionieren einwandfrei, da, obwohl die `output()` Aufrufe nicht im gleichen Umfang wie `x` definiert sind, `x` eine globale Variable ist und überall im Code verfügbar ist.

8. Aktualisieren Sie schließlich Ihren Code auf folgende Weise:

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

   Dieses Mal erzeugen die `a()` und `b()` Aufrufe den lästigen [ReferenceError: _variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in der Konsole — das liegt daran, dass die `output()` Aufrufe und die Variablen, die sie versuchen zu drucken, nicht im gleichen Funktionsumfang sind — die Variablen sind für diese Funktionsaufrufe im Wesentlichen unsichtbar.

> [!NOTE]
> Die gleichen Umfangsregeln gelten nicht für Schleifen (z. B. `for() { }`) und konditionale Blöcke (z. B. `if () { }`) — sie sehen sehr ähnlich aus, aber sie sind nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die Variable in Frage definiert haben, überprüfen Sie, in welchem Umfang sie sich befindet.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie [Testen Sie Ihr Wissen: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, sodass Sie diese möglicherweise zuerst lesen möchten, bevor Sie sie versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erforscht und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Sie durch die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detailierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen zum Schreiben von weniger Code](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN Curriculum-Partner_</sup>
  - : Eine interaktive Lektion, die eine nützliche Einführung zu Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
