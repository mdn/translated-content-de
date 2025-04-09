---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept in der Programmierung sind **Funktionen**, die es Ihnen ermöglichen, einen Codeabschnitt, der eine einzelne Aufgabe erledigt, in einem definierten Block zu speichern. Dieser Code kann dann aufgerufen werden, wann immer Sie ihn benötigen, mittels eines kurzen Befehls - anstatt denselben Code mehrmals eingeben zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie zum Beispiel die grundlegende Syntax, wie sie aufgerufen und definiert werden, sowie Scope und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — die Erstellung von wiederverwendbaren Codeblöcken, die nach Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet; einige sind im Browser integriert, andere sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Das Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Scope und Funktions-/Blockscope.</li>
          <li>Ein Verständnis davon, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir während des gesamten Kurses bisher Funktionen verwendet; wir haben nur nicht viel darüber gesprochen. Jetzt ist jedoch die Zeit gekommen, dass wir explizit über Funktionen sprechen und wirklich ihre Syntax erkunden.

Jedes Mal, wenn Sie eine JavaScript-Struktur nutzen, die ein Paar Klammern — `()` — beinhaltet, und Sie verwenden **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while), oder [if...else Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements), dann verwenden Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs häufig Funktionen verwendet, die im Browser eingebaut sind.

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

verwendeten wir eine _Funktion_!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich bei Bedarf erneut mit deren Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. In der Tat könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein schicker Begriff für ausführen, oder ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrundcodes des Browsers auf, der größtenteils in niedrigeren Systemsprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden den Einsatz von Browser-APIs in einem späteren Modul genauer betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul mehr über Objekte lernen. Für den Moment wollten wir nur jegliche Verwirrung über Methode versus Funktion klären — Sie werden wahrscheinlich beiden Begriffen begegnen, wenn Sie sich die verfügbaren zugehörigen Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher genutzt haben, kommt in beiden Formen vor: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und deren entsprechende Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben auch schon viele **benutzerdefinierte Funktionen** im Kurs gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebaut, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in einem {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun wollen, können wir einfach die Funktion mit dieser Anweisung aufrufen:

```js
draw();
```

anstatt jedes Mal all diesen Code wieder menschen zu müssen, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen aus Funktionen heraus aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine Zufallsdezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Aufrufen von Funktionen

Sie haben dies wahrscheinlich inzwischen bereits verstanden, aber nur um sicherzugehen: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird immer "gehoistet", sodass Sie die Funktion oberhalb der Funktionsdefinition aufrufen können und es trotzdem funktioniert.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** angegeben werden, wenn Sie sie aufrufen — dies sind Werte, die in den Klammern der Funktion enthalten sein müssen, damit sie ihre Aufgabe ordnungsgemäß erledigen kann.

> [!NOTE]
> Parameter werden manchmal als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Zum Beispiel erfordert die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion des Browsers benötigt jedoch zwei Parameter — den zu findenden Substring im Hauptstring und den Substring, der diesen String ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden sie durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, übernimmt die Funktion in der Regel eine Art Standardverhalten. Ein Beispiel dafür ist der Parameter der Array- [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Funktion, der optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter hinzugefügt wird, um ein Verknüpfungs-/Trennzeichen zu spezifizieren, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie `=` nach dem Parameternamen hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bis jetzt haben wir eine Funktion so erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter häufig als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht "gehoistet".

### Beispiel für anonyme Funktionen

Zum Beispiel, wenn Sie möchten, dass ein Code ausgeführt wird, wenn der Benutzer in ein Textfeld eingibt. Hierfür können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion des Textfelds aufrufen. Diese Funktion erwartet, dass Sie (mindestens) zwei Parameter übergeben:

- den Namen des Events, auf das Sie hören möchten, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event)
- eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die Funktion auf, die Sie bereitgestellt haben, und übergibt ihr einen Parameter mit Informationen zu diesem Ereignis, einschließlich der spezifischen Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)`, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur einen Parameter erfordert, können Sie die Klammern um den Parameter weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return` Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach und übergibt es der angegebenen Funktion. Sie nimmt dann den Wert, der von dieser Funktion zurückgegeben wird, und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Pfeilfunktionsäquivalent von:

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

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen, dass Sie Pfeilfunktionen nutzen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt zu Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Bereichs dieses einführenden Tutorials und sind in den hier diskutierten Fällen wahrscheinlich nicht von Bedeutung. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist ein vollständiges funktionierendes Beispiel zu dem zuvor besprochenen "keydown"-Beispiel:

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

Das Ergebnis - versuchen Sie, in das Textfeld einzugeben, und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsscope und Konflikte

Lassen Sie uns ein wenig über {{Glossary("scope", "Scope")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und andere Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Scope** eingeschlossen, was bedeutet, dass sie in ihren eigenen separaten "Kompartimenten" eingeschlossen und von Code außerhalb der Funktionen nicht erreichbar sind.

Der oberste Level außerhalb aller Ihrer Funktionen wird als **globaler Scope** bezeichnet. Werte, die im globalen Scope definiert sind, sind von überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut — hauptsächlich wegen Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code zugänglich sind — externe Skripte, die Sie von anderswo aufrufen, könnten anfangen, mit Ihrem Code zu interagieren und Probleme verursachen, weil zufälligerweise dieselben Variablennamen wie in anderen Teilen des Codes verwendet werden, was zu Konflikten führt. Dies könnte beabsichtigt oder zufällig geschehen.

Zum Beispiel, nehmen wir an, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion mit demselben Namen:

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

Sie werden sehen, dass das zweite Skript überhaupt nicht geladen und ausgeführt wird, und ein Fehler wird in die Konsole gedruckt: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Das liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist, und Sie können dieselbe Konstante nicht zweimal im selben Scope deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion von `second.js` nicht aufrufbar. Daher wird ein Alert-Fenster angezeigt, das sagt `Hello Chris: welcome to our company.`

Versuchen Sie, die zweite Zeile `const name = "Zaptec";` aus `second.js` zu entfernen und die Seite neu zu laden. Jetzt werden beide Skripte ausgeführt und das Alert-Fenster sagt `Our company is called Chris.` Funktionen dürfen neu deklariert werden, und die letzte Deklaration wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

> [!NOTE]
> Dieses Beispiel können Sie [live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Teile Ihres Codes in Funktionen einzuschließen, vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen in ihrem Gehege — ähnlich wie mit den Funktionsscopes. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in unbekannten Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich in der wasserspeichenden, eisigen Domäne der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihrem jeweiligen Lebensraum in einem Zoo eingezäunt sind](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Scope — sie haben die Schlüssel, um Zugang zu jedem Gehege zu erhalten, Futter aufzufüllen, kranke Tiere zu pflegen usw.

### Aktive Lernübung: Spielen mit Scope

Lassen Sie uns ein echtes Beispiel betrachten, um Scoping zu demonstrieren.

1. Machen Sie zunächst eine lokale Kopie unseres Beispiels [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html). Dieses Beispiel enthält zwei Funktionen namens `a()` und `b()`, sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind und eine im globalen Scope. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter übernimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwicklertools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport angezeigt sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsscopes sind `y` und `z` in den Funktionen `a()` bzw. `b()` eingeschlossen, sodass `output()` nicht auf sie zugreifen kann, wenn es aus dem globalen Scope aufgerufen wird.

5. Was ist jedoch, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie so aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, dann versuchen Sie, die Funktionen `a()` und `b()` über die JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Browser-Viewport angezeigt sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird — im gleichen Scope, in dem die Variablen, die sie ausgibt, definiert sind, jeweils. `output()` selbst ist von überall aus verfügbar, da es im globalen Scope definiert ist.

6. Versuchen Sie nun, Ihren Code folgendermaßen zu aktualisieren:

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

7. Speichern und laden Sie erneut und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()`- als auch der `b()`-Aufruf sollten den Wert von `x` im Browser-Viewport ausgeben. Diese funktionieren einwandfrei, denn obwohl die `output()`-Aufrufe nicht im selben Scope wie `x` definiert sind, ist `x` eine globale Variable und überall im Code verfügbar.

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

9. Speichern und laden Sie erneut und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werden die `a()`- und `b()`-Aufrufe den lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole werfen — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie versuchen auszugeben, nicht im selben Funktionsscope sind — die Variablen sind für diese Funktionsaufrufe im Wesentlichen unsichtbar.

> [!NOTE]
> Die gleichen Scoperegeln gelten nicht für Schleifen (z.B. `for() { }`) und konditionale Blöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Scope sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher möchten Sie diese vielleicht zuerst lesen, bevor Sie sie versuchen.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Sie durch die Schritte zum Aufbau Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Funktionen ausführlicher Leitfaden](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionen Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Mit Funktionen weniger Code schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>_MDN Lernpartner_</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
