---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann mit einem einzigen kurzen Befehl beliebig oft aufzurufen — anstatt denselben Code mehrmals eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie die grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereich und Parameter.

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
          <li>Der Zweck von Funktionen — das Erstellen von wiederverwendbaren Codeblöcken, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet und einige sind in den Browser eingebaut, während andere benutzerdefiniert sind.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern und Weitergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Blockgültigkeitsbereich.</li>
          <li>Ein Verständnis dafür, was Rückruffunktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir während des gesamten Kurses bisher Funktionen verwendet, ohne viel darüber zu sprechen. Jetzt ist jedoch die Zeit gekommen, in der wir beginnen, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

Fast jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern enthält — `()` — und Sie **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs oft Funktionen benutzt, die im Browser eingebaut sind.

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

Oder jedes Mal, wenn wir eine Zufallszahl erzeugen:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

Wir haben eine _Funktion_ verwendet!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich bei Bedarf mit ihrer Funktionalität wieder vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein elegantes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrundbrowser-Codes auf, der hauptsächlich in systemnahen Sprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden den Einsatz von Browser-APIs ausführlicher in einem späteren Modul betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul mehr über Objekte lernen. Wir wollten nur jegliche Verwirrung zwischen Methode und Funktion klären — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher verwendet haben, kommt in beiden Formen: **Funktionen** und **Methoden**. Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [in unserem JavaScript-Referenzwerk](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben auch bereits viele **benutzerdefinierte Funktionen** im Kurs gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt dahinter gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebaut, die so aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir das tun möchten, können wir die Funktion einfach mit folgendem Befehl aufrufen:

```js
draw();
```

statt jedes Mal all diesen Code erneut schreiben zu müssen, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen aus Funktionen heraus aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt. Wir wollten jedoch eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Aufrufen von Funktionen

Sie sind wahrscheinlich jetzt klar darüber, aber nur für den Fall: Um tatsächlich eine Funktion zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies wird erreicht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer gehoben, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und sie wird einwandfrei funktionieren.

## Funktionsparameter

Einige Funktionen erfordern, dass beim Aufruf **Parameter** angegeben werden — das sind Werte, die in die Klammern der Funktion aufgenommen werden müssen, damit sie ihre Aufgabe richtig erledigen kann.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Zum Beispiel erfordert die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute String-Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) des Browsers benötigt jedoch zwei Parameter — die Teilzeichenkette, die im Hauptstring gefunden werden soll, und die Teilzeichenkette, die durch diesen String ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie das nicht tun, wird die Funktion in der Regel ein Standardverhalten annehmen. Zum Beispiel ist der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben wird, um ein Verknüpfungs-/Trennzeichen zu bestimmen, wird standardmäßig ein Komma verwendet.

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

Bisher haben wir eine Funktion immer folgendermaßen erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, dass sie eine andere Funktion als Parameter erhält. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel für anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Um dies zu tun, können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- den Namen des zu überwachenden Ereignisses, der in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, wird der Browser die bereitgestellte Funktion aufrufen und einen Parameter übergeben, der Informationen über dieses Ereignis enthält, einschließlich der bestimmten Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}} Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach und übergibt es an die gegebene Funktion. Sie nimmt dann den Wert, der von dieser Funktion zurückgegeben wird, und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Äquivalent einer Pfeilfunktion zu:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können die gleiche prägnante Syntax verwenden, um das `addEventListener`-Beispiel umzuschreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Rückruffunktion zurückgegeben.

Wir empfehlen Ihnen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, sehen Sie sich den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses einführenden Tutorials und sind in den hier besprochenen Fällen wahrscheinlich nicht von Bedeutung. Um mehr zu erfahren, sehen Sie sich die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

### Live-Beispiel für Pfeilfunktion

Hier ist ein vollständiges funktionierendes Beispiel des oben besprochenen "keydown"-Beispiels:

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

## Funktionsgültigkeitsbereich und Konflikte

Lassen Sie uns ein wenig über den {{Glossary("scope", "Gültigkeitsbereich")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und andere Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Gültigkeitsbereich**, was bedeutet, dass sie in ihren eigenen separaten Fächern eingeschlossen sind und von Code außerhalb der Funktionen nicht erreicht werden können.

Das oberste Level außerhalb aller Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Im globalen Gültigkeitsbereich definierte Werte sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so eingerichtet — aber hauptsächlich wegen Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo aufrufen, könnten beginnen, mit Ihrem Code einzugreifen und Probleme verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führt. Dies könnte absichtlich oder versehentlich geschehen.

Nehmen wir zum Beispiel an, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird, und in der Konsole ein Fehler angezeigt wird: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Das liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist und Sie eine Konstante nicht zweimal im selben Gültigkeitsbereich deklarieren können. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden. Daher wird ein Alarmfenster angezeigt, das `Hello Chris: welcome to our company.` anzeigt.

Versuchen Sie, die Zeile `const name = "Zaptec";` aus `second.js` zu entfernen und die Seite neu zu laden. Jetzt werden beide Skripte ausgeführt und das Alarmfenster sagt `Our company is called Chris.`. Funktionen dürfen erneut deklariert werden und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Sperren von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und gilt als beste Praxis.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen innerhalb ihrer Gehege — auf die gleiche Weise wie die Funktionsgültigkeitsbereiche. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in ungewohnten Lebensräumen äußerst unwohl fühlen — ein Löwe oder Tiger würde sich im wässrigen, eisigen Lebensraum der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Gehegen in einem Zoo](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Gültigkeitsbereich — er hat die Schlüssel, um auf jedes Gehe zuzugreifen, Futter aufzustocken, kranke Tiere zu versorgen usw.

### Aktives Lernen: Spielen mit dem Gültigkeitsbereich

Lassen Sie uns ein echtes Beispiel betrachten, um den Gültigkeitsbereich zu demonstrieren.

1. Erstellen Sie zunächst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Gültigkeitsbereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter übernimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Entwickler-Tools im Browser. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Ansichtsfenster angezeigt sehen.

4. Versuchen Sie nun, das Folgende in Ihrer Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa lautet "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsgültigkeitsbereichs sind `y` und `z` in den `a()` und `b()` Funktionen eingeschlossen, sodass `output()` nicht auf sie zugreifen kann, wenn es vom globalen Gültigkeitsbereich aus aufgerufen wird.

5. Aber was ist, wenn es von innerhalb einer anderen Funktion aus aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie so aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie dann, die `a()` und `b()` Funktionen von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y` und `z` Werte im Browseransichtsfenster angezeigt sehen. Das funktioniert einwandfrei, da die `output()` Funktion von innerhalb der anderen Funktionen aufgerufen wird — in derselben Gültigkeitsbereich wie die zu druckenden Variablen in jedem Fall definiert sind. `output()` selbst ist von überall aus verfügbar, da es im globalen Gültigkeitsbereich definiert ist.

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

7. Speichern und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()` als auch der `b()` Aufruf sollten den Wert von x im Browseransichtsfenster drucken. Diese funktionieren einwandfrei, da, obwohl die `output()` Aufrufe sich nicht im selben Gültigkeitsbereich wie `x` befinden, `x` eine globale Variable ist und somit überall im Code verfügbar ist.

8. Schließlich, versuchen Sie, Ihren Code so zu aktualisieren:

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

9. Speichern und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die `a()` und `b()` Aufrufe den lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole — dies liegt daran, dass die `output()` Aufrufe und die Variablen, die sie versuchen zu drucken, nicht in denselben Funktionsgültigkeitsbereichen sind — die Variablen sind für diese Funktionsaufrufe im Grunde unsichtbar.

> [!NOTE]
> Dieselben Gültigkeitsbereichsregeln gelten nicht für Schleifen (z.B. `for() { }`) und bedingte Blöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass die betreffende Variable definiert ist, überprüfen Sie, in welchem Gültigkeitsbereich sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher möchten Sie diese vielleicht zuerst lesen, bevor Sie es versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erforscht und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Sie durch die Schritte zum Erstellen Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionen-Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen verwenden, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
