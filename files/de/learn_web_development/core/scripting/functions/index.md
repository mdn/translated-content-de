---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 6dea2c805a3dcabffb876db2016cb58a3726938d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres essentielles Konzept im Coding sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, der eine einzelne Aufgabe erfüllt, in einem definierten Block zu speichern. Dann können Sie diesen Code immer dann aufrufen, wenn Sie ihn benötigen, mit einem einzigen kurzen Befehl — anstatt denselben Code mehrmals eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen untersuchen, wie grundlegende Syntax, wie man sie aufruft und definiert, Scope und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um die Erstellung von wiederverwendbaren Codeblöcken zu ermöglichen, die überall aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind in den Browser integriert und einige sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufruf von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Übergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Scope und Funktions-/Block-Scope.</li>
          <li>Ein Verständnis von Callback-Funktionen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. In der Tat haben wir schon die ganze Zeit über Funktionen verwendet; wir haben nur nicht viel darüber gesprochen. Jetzt ist jedoch die Zeit gekommen, dass wir anfangen, explizit über Funktionen zu sprechen und ihre Syntax zu erforschen.

Fast immer, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — beinhaltet und **nicht** eine häufige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while), oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs ausgiebig eingebaute Browser-Funktionen verwendet.

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

Wir haben eine _Funktion_ verwendet!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich mit deren Funktionalität neu vertraut zu machen, falls nötig.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browser-Funktion **aufrufen** (ein schickes Wort für Ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Codes des Browsers auf, der weitgehend in Systemsprachen wie C++ geschrieben ist, nicht in Websprache wie JavaScript.

Bedenken Sie, dass einige eingebaute Browser-Funktionen nicht Teil der JavaScript-Kernsprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität zu bieten (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul detaillierter betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden als **Methoden** bezeichnet; Sie werden in einem späteren Modul über Objekte lernen. Für den Moment wollten wir nur potenzielle Verwirrung über die Begriffe Methode und Funktion klären — Sie werden wahrscheinlich beiden Begriffen begegnen, wenn Sie sich verwandte Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher verwendet haben, existiert in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [in unserer JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben auch viele **benutzerdefinierte Funktionen** im Kurs gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser selbst. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingebaut, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}} Element. Jedes Mal, wenn wir das machen wollen, können wir die Funktion mit folgendem Aufruf aufrufen:

```js
draw();
```

anstatt jedes Mal den gesamten Code erneut eingeben zu müssen, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen von innerhalb der Funktionen aufrufen. Die obige Funktion ruft zum Beispiel die `random()`-Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, weil die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine Zufallszahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einem angegebenen Wert.

## Aufrufen von Funktionen

Sie sollten wahrscheinlich nun damit vertraut sein, aber nur für den Fall: Um tatsächlich eine Funktion zu nutzen, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies wird erreicht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionsdefinition nennt man auch _Funktionsdeklaration_. Sie wird immer gehoben, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und es funktioniert einwandfrei.

## Funktionsparameter

Einige Funktionen erfordern die Angabe von **Parametern**, wenn Sie sie aufrufen — dies sind Werte, die in den Funktionsklammern enthalten sein müssen, damit die Funktion ihre Aufgabe ordnungsgemäß ausführen kann.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Zum Beispiel erfordert die eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute string [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion des Browsers benötigt hingegen zwei Parameter — den zu findenden Teilstring im Hauptstring und den Teilstring, der diesen ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, trennen Sie diese mit Kommata.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, übernimmt die Funktion im Allgemeinen ein Standardverhalten. Zum Beispiel ist der Parameter der array [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join)-Funktion optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben wird, um ein Verbindungs-/Trennzeichen zu spezifizieren, wird standardmäßig ein Komma verwendet.

### Default-Parameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen wollen, können Sie Standardwerte angeben, indem Sie `=` nach dem Namen des Parameters hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bisher haben wir Funktionen einfach so erstellt:

```js
function myFunction() {
  alert("hello");
}
```

Sie können aber auch eine Funktion erstellen, die keinen Namen hat:

```js
(function () {
  alert("hello");
});
```

Dies nennt man eine **anonyme Funktion**, weil sie keinen Namen hat. Anonyme Funktionen sehen Sie oft, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktionserstellung nennt man auch _Funktionsausdruck_. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel für anonyme Funktionen

Angenommen, Sie möchten einen Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfeldes aufrufen. Diese Funktion erwartet mindestens zwei Parameter:

- Der Name des Ereignisses, auf das gehört werden soll, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event)
- Eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die angegebene Funktion auf und übergibt ihr einen Parameter mit Informationen über das Ereignis, einschließlich der gedrückten Taste:

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

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die sogenannte **Pfeilfunktion**. Anstatt `function(event)`, schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die ein `return`-Statement ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode übergibt jedes Element im Array an die gegebene Funktion, dann nimmt sie den von der Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Die Pfeilfunktion ist sehr prägnant; Wenn wir unseren `map()`-Code umschreiben, um eine reguläre anonyme Callback-Funktion zu verwenden, würde das folgendermaßen aussehen:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

Sie können die gleiche prägnante Pfeilfunktions-Syntax verwenden, um das `addEventListener()`-Beispiel umzuschreiben:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Callback-Funktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, sehen Sie sich den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) an und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses einführenden Tutorials und dürften in den hier besprochenen Fällen keinen Unterschied ausmachen. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist eine vollständige funktionierende Version des `keydown`-Beispiels, das wir oben besprochen haben:

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

## Funktions-Scope und Konflikte

Lassen Sie uns über {{Glossary("scope", "Scope")}} sprechen — ein wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und andere Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Scope**. Das bedeutet, dass sie in ihrer eigenen separaten Abteilung eingeschlossen sind und von Code außerhalb der Funktion nicht erreicht werden können.

Die oberste Ebene außerhalb aller Ihrer Funktionen wird als **globaler Scope** bezeichnet. Werte, die im globalen Scope definiert sind, sind von überall im Code aus zugänglich.

JavaScript funktioniert hauptsächlich aus Sicherheits- und Organisationsgründen so. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind. Externe Skripte, die von anderen Orten aufgerufen werden, könnten anfangen, in Ihren Code einzugreifen und Probleme verursachen, wenn sie dieselben Variablennamen verwenden und Konflikte entstehen. Dies könnte absichtlich oder einfach aus Versehen geschehen.

Zum Beispiel, wenn Sie eine HTML-Datei haben, die auf zwei externe JavaScript-Dateien verweist, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Laden Sie es in einem separaten Browser-Tab, bevor Sie die untenstehende Erklärung lesen.

- Wenn das Beispiel in einem Browser geladen wird, sehen Sie zuerst ein Warnfenster mit der Anzeige `Hello Chris: welcome to our company.`, was bedeutet, dass die `greeting()`-Funktion, die im ersten Skriptdatei definiert ist, durch den `greeting()`-Aufruf im internen Skript aufgerufen wurde.

- Das zweite Skript jedoch wird überhaupt nicht geladen und ausgeführt, und eine Fehlermeldung wird in der Konsole gedruckt: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die `name`-Konstante bereits in `first.js` deklariert wurde, und Sie können dieselbe Konstante nicht zweimal im selben Scope deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Das Warnfenster würde nun `Our company is called Chris.` anzeigen. Wenn eine Funktion _neu deklariert_ wird, wird die letzte Deklaration in der Quellreihenfolge verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Das Einsperren von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als beste Praxis angesehen.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen im Inneren, ähnlich wie bei Funktions-Scopes. Wenn sie in andere Gehege gelangen könnten, würden Probleme entstehen. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen wirklich unwohl fühlen — ein Löwe oder Tiger würde sich in der wässrigen, eisigen Umgebung der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Lebensraum im Zoo eingesperrt](mdn-mozilla-zoo.png)

Der Zoodirektor ist wie der globale Scope — er hat die Schlüssel, um jedes Gehege zu betreten, Lebensmittel aufzufüllen, kranke Tiere zu pflegen usw.

### Spielen mit Scope

Schauen wir uns ein echtes Beispiel an, um den Scope zu demonstrieren.

1. Erstellen Sie zunächst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind und eine im globalen Scope. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browserentwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browserfenster angezeigt sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, ähnlich wie "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktions-Scopes: `y` und `z` sind in den `a()`- und `b()`-Funktionen eingeschlossen, sodass `output()` nicht auf sie zugreifen kann, wenn es aus dem globalen Scope aufgerufen wird.

5. Was aber, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie so aussehen:

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

   Speichern Sie den Code und laden Sie ihn im Browser neu, dann versuchen Sie, die `a()` und `b()` Funktionen von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y` und `z` Werte im Browserfenster angezeigt sehen. Dies funktioniert einwandfrei, weil die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird, im selben Scope, in dem die Variablen, die sie ausgibt, definiert sind. `output()` selbst ist von überall aus verfügbar, da es im globalen Scope definiert ist.

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

   Sowohl die `a()` als auch die `b()` Aufrufe sollten den x-Wert im Browserfenster ausgeben. Diese Aufrufe funktionieren einwandfrei, weil, obwohl die `output()`-Aufrufe nicht im selben Scope wie `x` definiert sind, `x` eine globale Variable ist — es ist in allen Codes überall verfügbar.

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

9. Speichern und laden Sie erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Diesmal werfen die `a()` und `b()` Aufrufe den ärgerlichen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie zu drucken versuchen, nicht im selben Funktions-Scope liegen — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die Variable in Frage definiert haben, überprüfen Sie, in welchem Scope sie sich befindet.

#### Eine Randbemerkung zu Schleifen- und bedingtem Scope

Es ist bemerkenswert, dass der Scope von Werten, die innerhalb von [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) und [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) deklariert wurden, genauso funktioniert wie der Funktionsscope beim Deklarieren von Werten mit `let` und `const`. Wenn Sie zum Beispiel die folgenden Blöcke zum obigen Beispiel hinzufügen:

```js
if (x === 1) {
  const c = 4;
  let d = 5;
}

for (let i = 0; i <= 1; i++) {
  const e = 6;
  let f = 7;
}
```

Der Aufruf von `output(c)`, `output(d)`, `output(e)`, oder `output(f)` würde den gleichen **"ReferenceError: [variable-name] is not defined"** Fehler ergeben, den wir bereits gesehen haben. Die `output()`-Funktion hat keinen Zugriff auf diese Variablen, da sie in ihrem eigenen Scope eingeschlossen sind.

Das alte `var`-Schlüsselwort funktioniert anders. Wenn `c`, `d`, `e`, und `f` mit `var` deklariert wurden:

```js
if (x === 1) {
  var c = 4;
  var d = 5;
}

for (let i = 0; i <= 1; i++) {
  var e = 6;
  var f = 7;
}
```

würden sie in den globalen Scope gehoben werden; daher würde das Ausgeben von ihnen in die Konsole (zum Beispiel mit `output(c)`) funktionieren. Mit `var` deklarierte Variablen innerhalb von Funktionen haben jedoch weiterhin ihren Scope auf diese Funktionen beschränkt.

Diese Inkonsistenz kann Verwirrung und Fehler verursachen, und ist ein weiterer Grund, warum Sie `let` und `const` anstelle von `var` verwenden sollten.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Konzepte hinter Funktionen erforscht und damit den Weg für den nächsten Artikel geebnet, in dem wir Sie durch die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen verwenden, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
