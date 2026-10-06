---
title: Funktionen – wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres grundlegendes Konzept beim Programmieren sind **Funktionen**. Mit ihnen können Sie Code, der eine bestimmte Aufgabe erfüllt, in einem definierten Block zusammenfassen und diesen Code bei Bedarf mit einem einzigen kurzen Befehl aufrufen – statt denselben Code mehrfach schreiben zu müssen. In diesem Artikel befassen wir uns mit grundlegenden Konzepten wie der Syntax von Funktionen, ihrer Definition und ihrem Aufruf sowie Scope und Parametern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen: wiederverwendbare Codeblöcke zu erstellen, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden in JavaScript überall verwendet.</li>
          <li>Manche Funktionen sind im Browser integriert, andere werden selbst definiert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Arrow-Funktionen.</li>
          <li>Funktionsparameter definieren und Argumente bei Funktionsaufrufen übergeben.</li>
          <li>Globaler Scope und Funktions-/Block-Scope.</li>
          <li>Verstehen, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript begegnen Ihnen Funktionen überall. Tatsächlich haben wir im bisherigen Kurs bereits durchgehend Funktionen verwendet; wir haben nur noch nicht ausführlich darüber gesprochen. Jetzt ist es an der Zeit, Funktionen ausdrücklich zu betrachten und ihre Syntax zu untersuchen.

Fast immer, wenn Sie eine JavaScript-Struktur mit einem Klammerpaar – `()` – verwenden und es sich **nicht** um eine gängige Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), eine [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) handelt, verwenden Sie eine Funktion.

## Im Browser integrierte Funktionen

In diesem Kurs haben wir bereits ausgiebig im Browser integrierte Funktionen verwendet.

Zum Beispiel jedes Mal, wenn wir eine Zeichenfolge bearbeitet haben:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string
```

Oder jedes Mal, wenn wir ein Array bearbeitet haben:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

Oder jedes Mal, wenn wir eine Zufallszahl erzeugt haben:

```js
const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
```

haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Geben Sie diese Zeilen bei Bedarf in die JavaScript-Konsole Ihres Browsers ein, um sich ihre Funktionsweise noch einmal anzusehen.

Die JavaScript-Sprache verfügt über viele integrierte Funktionen, mit denen Sie nützliche Aufgaben erledigen können, ohne den gesamten Code selbst schreiben zu müssen. Tatsächlich lässt sich ein Teil des Codes, den Sie beim **Aufrufen** einer integrierten Browserfunktion ausführen, nicht in JavaScript schreiben: Viele dieser Funktionen greifen auf Teile des zugrunde liegenden Browsercodes zurück. Dieser ist größtenteils in systemnahen Sprachen wie C++ geschrieben, nicht in Websprachen wie JavaScript.

Beachten Sie, dass einige im Browser integrierte Funktionen nicht zur JavaScript-Kernsprache gehören. Manche sind Teil von Browser-APIs, die auf der Standardsprache aufbauen und zusätzliche Funktionen bereitstellen (weitere Erläuterungen finden Sie in [diesem früheren Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do)). Die Verwendung von Browser-APIs sehen wir uns in einem späteren Modul genauer an.

## Funktionen und Methoden

**Funktionen**, die zu Objekten gehören, heißen **Methoden**. Objekte lernen Sie später in diesem Modul kennen. Zunächst möchten wir nur mögliche Verwirrung über den Unterschied zwischen Methoden und Funktionen ausräumen – bei der Suche nach weiterführenden Informationen im Web werden Ihnen beide Begriffe begegnen.

Der bisher verwendete integrierte Code umfasst sowohl **Funktionen** als auch **Methoden**. Eine vollständige Liste der integrierten Funktionen sowie der integrierten Objekte und ihrer Methoden finden Sie [in unserer JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects).

Im bisherigen Kurs haben Sie auch viele **selbst definierte Funktionen** gesehen: Funktionen, die in Ihrem Code und nicht im Browser definiert sind. Immer wenn Sie einen selbst gewählten Namen gesehen haben, auf den unmittelbar Klammern folgten, haben Sie eine selbst definierte Funktion verwendet. Im Beispiel mit [100 zufälligen Kreisen](/de/docs/Learn_web_development/Core/Scripting/Loops#looping_code_example) aus unserem Artikel über Schleifen haben wir eine selbst definierte Funktion `draw()` verwendet, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Wenn wir das erneut tun möchten, können wir die Funktion so aufrufen, statt jedes Mal den gesamten Code erneut zu schreiben:

```js
draw();
```

Funktionen können beliebigen Code enthalten, auch Aufrufe anderer Funktionen. Die oben gezeigte Funktion `draw()` ruft beispielsweise `random()` dreimal auf. `random()` ist durch den folgenden Code definiert:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die im Browser integrierte Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt. Wir wollten dagegen eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Vermutlich ist Ihnen das inzwischen klar. Der Vollständigkeit halber: Um eine definierte Funktion tatsächlich zu verwenden, müssen Sie sie ausführen – also aufrufen. Dazu schreiben Sie irgendwo im Code den Funktionsnamen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Art, eine Funktion zu erstellen, wird auch _Funktionsdeklaration_ genannt. Sie wird immer per Hoisting vorgezogen. Das bedeutet, dass Sie die Funktion bereits vor ihrer Definition aufrufen können.

## Funktionsargumente und -parameter

Manche Funktionen benötigen beim Aufruf **Argumente**: Werte, die innerhalb der Funktionsklammern stehen müssen, damit die Funktion ihre Aufgabe erfüllen kann.

Sie werden auch den Begriff **Parameter** hören, der häufig synonym mit _Argumenten_ verwendet wird. In informellen Gesprächen ist das oft unproblematisch, die Begriffe haben aber unterschiedliche Bedeutungen. Parameter sind die Variablen, die in einer Funktionsdefinition aufgeführt werden. Argumente sind die Werte, die der Funktion beim Aufruf für diese Parameter übergeben werden.

Sehen wir uns einige Beispiele an. Die Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) benötigt keine Argumente. Bei jedem Aufruf gibt sie eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die String-Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) benötigt dagegen zwei Argumente: die Teilzeichenfolge, die in der ursprünglichen Zeichenfolge gesucht werden soll, und die Teilzeichenfolge, durch die sie ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter oder Argumente angeben, trennen Sie sie durch Kommas.

### Optionale Parameter

Manche Parameter sind optional: Beim Aufruf der Funktion müssen Sie keine entsprechenden Argumente angeben. Wenn Sie sie weglassen, verwendet die Funktion in der Regel einen Standardwert. Bei der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) ist der Parameter beispielsweise optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn Sie kein Argument für ein Verbindungs- oder Trennzeichen angeben, wird standardmäßig ein Komma verwendet.

### Standardwerte für Parameter

Wenn Sie selbst eine Funktion schreiben und optionale Parameter definieren möchten, können Sie Standardwerte festlegen. Fügen Sie dazu nach dem Namen des Parameters `=` und anschließend den Standardwert ein:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Arrow-Funktionen

Bisher haben wir Funktionen folgendermaßen erstellt:

```js
function myFunction() {
  alert("hello");
}
```

Sie können aber auch eine Funktion ohne Namen erstellen:

```js
(function () {
  alert("hello");
});
```

Eine solche Funktion heißt **anonyme Funktion**, weil sie keinen Namen hat. Anonyme Funktionen begegnen Ihnen häufig, wenn eine Funktion eine andere Funktion als Argument erwartet. In diesem Fall wird oft eine anonyme Funktion als Argument übergeben.

> [!NOTE]
> Diese Art, eine Funktion zu erstellen, wird auch _Funktionsausdruck_ genannt. Anders als Funktionsdeklarationen werden Funktionsausdrücke nicht per Hoisting vorgezogen.

### Beispiel für eine anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn jemand etwas in ein Textfeld eingibt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet mindestens zwei Argumente:

- Den Namen des Ereignisses, auf das reagiert werden soll – in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event).
- Eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn eine Taste gedrückt wird, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen über das Ereignis, einschließlich der gedrückten Taste:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Statt eine separate Funktion `logKey()` zu definieren, können Sie eine anonyme Funktion an `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Arrow-Funktionen

Wenn Sie auf diese Weise eine anonyme Funktion übergeben, können Sie auch eine alternative Schreibweise verwenden: eine **Arrow-Funktion**. Statt `function(event)` schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur ein Argument erhält, können Sie die Klammern darum weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn Ihre Funktion nur aus einer einzigen Zeile mit einer `return`-Anweisung besteht, können Sie außerdem die geschweiften Klammern und das Schlüsselwort `return` weglassen. Der Ausdruck wird dann implizit zurückgegeben. Im folgenden Beispiel verwenden wir die Methode {{jsxref("Array.prototype.map()","map()")}} von `Array`, um jeden Wert des ursprünglichen Arrays zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die Methode `map()` übergibt jedes Element des Arrays an die angegebene Funktion und fügt deren Rückgabewert einem neuen Array hinzu.

Die Arrow-Funktion ist sehr kompakt. Würden wir unseren `map()`-Code mit einer gewöhnlichen anonymen Callback-Funktion schreiben, sähe er so aus:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

Mit derselben kompakten Syntax für Arrow-Funktionen können Sie auch das Beispiel mit `addEventListener()` umschreiben:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

In diesem Fall wird der Wert von `console.log()`, nämlich `undefined`, implizit aus der Callback-Funktion zurückgegeben.

Wir empfehlen die Verwendung von Arrow-Funktionen, da sie Ihren Code kürzer und besser lesbar machen können. Weitere Informationen finden Sie im [Abschnitt über Arrow-Funktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und auf unserer [Referenzseite zu Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Zwischen Arrow-Funktionen und gewöhnlichen Funktionen gibt es einige feine Unterschiede. Sie gehen über den Rahmen dieses einführenden Tutorials hinaus und dürften in den hier besprochenen Fällen keine Rolle spielen. Weitere Informationen finden Sie in der [Referenzdokumentation zu Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Interaktives Beispiel für eine Arrow-Funktion

Hier ist eine vollständige, funktionsfähige Version des oben besprochenen `keydown`-Beispiels:

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

Das Ergebnis – geben Sie etwas in das Textfeld ein und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Scope von Funktionen und Namenskonflikte

Sprechen wir etwas über {{Glossary("scope", "Scope")}} – ein wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, befinden sich die darin definierten Variablen und anderen Bestandteile in einem eigenen **Scope**. Sie sind damit gewissermaßen in einem separaten Bereich eingeschlossen und für Code außerhalb der Funktion nicht zugänglich.

Die oberste Ebene außerhalb Ihrer Funktionen heißt **globaler Scope**. Werte, die im globalen Scope definiert sind, sind von überall im Code aus zugänglich.

JavaScript funktioniert hauptsächlich aus Sicherheits- und Organisationsgründen so. Manchmal sollen Variablen nicht von überall im Code aus zugänglich sein. Externe Skripte könnten Ihren Code beeinträchtigen und Probleme verursachen, wenn sie dieselben Variablennamen verwenden. Solche Konflikte können absichtlich oder versehentlich entstehen.

Angenommen, eine HTML-Datei bindet zwei externe JavaScript-Dateien ein, und beide definieren eine Variable und eine Funktion mit demselben Namen:

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

Sie können sich dieses Beispiel [live auf GitHub ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Öffnen Sie es in einem separaten Browser-Tab, bevor Sie die folgende Erklärung lesen.

- Wenn das Beispiel im Browser angezeigt wird, sehen Sie zunächst ein Hinweisfenster mit `Hello Chris: welcome to our company.`. Das bedeutet, dass der Aufruf von `greeting()` im internen Skript die in der ersten Skriptdatei definierte Funktion `greeting()` aufgerufen hat.

- Das zweite Skript wird dagegen überhaupt nicht geladen und ausgeführt. Stattdessen erscheint in der Konsole der Fehler `Uncaught SyntaxError: Identifier 'name' has already been declared`. Das liegt daran, dass die Konstante `name` bereits in `first.js` deklariert wurde. Dieselbe Konstante kann nicht zweimal im selben Scope deklariert werden. Da das zweite Skript nicht geladen wurde, steht die Funktion `greeting()` aus `second.js` nicht für Aufrufe zur Verfügung.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Im Hinweisfenster stünde dann `Our company is called Chris.` Wird eine Funktion _erneut deklariert_, gilt die letzte Deklaration in der Reihenfolge des Quellcodes. Die vorherigen Deklarationen werden dadurch praktisch überschrieben.

Wenn Sie Teile Ihres Codes in Funktionen einschließen, vermeiden Sie solche Probleme. Dies gilt als bewährte Vorgehensweise.

Das lässt sich mit einem Mehrfamilienhaus vergleichen:

- Jede Wohnung ist den Menschen vorbehalten, die darin wohnen – ähnlich wie der Scope einer Funktion. Code innerhalb einer Funktion kann auf die darin definierten Variablen und Funktionen zugreifen, Code außerhalb der Funktion jedoch nicht. Hätten alle Zugang zu jeder Wohnung, könnte es Probleme geben: Gegenstände könnten verschoben, beschädigt oder gestohlen werden!

- Das Gebäude kann auch Gemeinschaftsbereiche haben, etwa einen Pool, ein Fitnessstudio oder einen Aufenthaltsraum, die allen offenstehen. Das entspricht dem globalen Scope: Auf alles, was dort deklariert wird, kann jede Funktion zugreifen. Gemeinschaftsräume können sinnvollerweise von allen genutzt werden.

### Scope ausprobieren

Sehen wir uns ein konkretes Beispiel an, um Scope zu veranschaulichen.

1. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width" />
       <title>Function scope example</title>
     </head>
     <body>
       <script>
         const x = 1;

         function a() {
           const y = 2;
         }

         function b() {
           const z = 3;
         }

         function output(value) {
           const para = document.createElement("p");
           document.body.appendChild(para);
           para.textContent = `Value: ${value}`;
         }
       </script>
     </body>
   </html>
   ```

   Er enthält zwei Funktionen namens `a()` und `b()` sowie drei Variablen – `x`, `y` und `z`. Zwei der Variablen sind innerhalb der Funktionen definiert, eine im globalen Scope. Außerdem enthält der Code eine dritte Funktion namens `output()`, die ein Argument entgegennimmt und es in einem Absatz auf der Seite ausgibt.

2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.

3. Öffnen Sie die JavaScript-Konsole in den Entwicklerwerkzeugen Ihres Browsers. Geben Sie dort den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Der Wert der Variablen `x` sollte im Browserfenster angezeigt werden.

4. Geben Sie nun Folgendes in die Konsole ein:

   ```js
   output(y);
   output(z);
   ```

   Beide Aufrufe sollten in der Konsole einen Fehler wie „[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)“ auslösen. Warum? Wegen des Funktions-Scopes: `y` und `z` sind in den Funktionen `a()` und `b()` eingeschlossen. Daher kann `output()` nicht auf sie zugreifen, wenn es aus dem globalen Scope aufgerufen wird.

5. Was passiert aber, wenn `output()` innerhalb einer anderen Funktion aufgerufen wird? Ändern Sie `a()` und `b()` so, dass sie wie folgt aussehen:

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

   Speichern Sie den Code, laden Sie die Seite im Browser neu und rufen Sie dann die Funktionen `a()` und `b()` über die JavaScript-Konsole auf:

   ```js
   a();
   b();
   ```

   Die Werte von `y` und `z` sollten im Browserfenster angezeigt werden. Das funktioniert, weil `output()` innerhalb der anderen Funktionen aufgerufen wird – im selben Scope, in dem die ausgegebenen Variablen definiert sind. `output()` selbst ist von überall aus verfügbar, da es im globalen Scope definiert ist.

6. Ändern Sie Ihren Code nun wie folgt:

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

7. Speichern Sie die Datei, laden Sie die Seite erneut und versuchen Sie Folgendes in der JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der Aufruf von `a()` als auch der von `b()` sollte den Wert von `x` im Browserfenster ausgeben. Das funktioniert, obwohl die `output()`-Aufrufe nicht im selben Scope liegen, in dem `x` definiert ist. `x` ist nämlich eine globale Variable und steht überall im Code zur Verfügung.

8. Ändern Sie Ihren Code abschließend wie folgt:

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

9. Speichern Sie die Datei, laden Sie die Seite erneut und versuchen Sie noch einmal Folgendes in der JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Diesmal lösen die Aufrufe von `a()` und `b()` in der Konsole den lästigen Fehler [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) aus. Der Grund: Die `output()`-Aufrufe befinden sich nicht im selben Funktions-Scope wie die Variablen, die sie ausgeben sollen. Für diese Funktionsaufrufe sind die Variablen daher nicht sichtbar.

> [!NOTE]
> Der Fehler [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) gehört zu den häufigsten Fehlern, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, prüfen Sie, in welchem Scope sie sich befindet.

#### Ein Exkurs zum Scope von Schleifen und bedingten Anweisungen

Der Scope von Werten, die innerhalb [bedingter Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) und [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) mit `let` oder `const` deklariert werden, funktioniert genauso wie der Funktions-Scope. Wenn Sie dem obigen Beispiel etwa die folgenden Blöcke hinzufügen:

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

würden Aufrufe von `output(c)`, `output(d)`, `output(e)` oder `output(f)` denselben Fehler **„ReferenceError: [variable-name] is not defined“** auslösen wie zuvor. Die Funktion `output()` kann nicht auf diese Variablen zugreifen, da sie jeweils in ihrem eigenen Scope eingeschlossen sind.

Das ältere Schlüsselwort `var` verhält sich anders. Würden `c`, `d`, `e` und `f` mit `var` deklariert:

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

würden sie durch Hoisting in den globalen Scope vorgezogen. Sie könnten daher ausgegeben werden, beispielsweise mit `output(c)`. Variablen, die innerhalb von Funktionen mit `var` deklariert werden, bleiben allerdings auf den Scope der jeweiligen Funktion beschränkt.

Diese Uneinheitlichkeit kann zu Verwirrung und Fehlern führen. Das ist ein weiterer Grund, `let` und `const` statt `var` zu verwenden.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Konzepte von Funktionen behandelt. Damit sind Sie auf den nächsten Artikel vorbereitet, in dem wir praktisch vorgehen und Sie Schritt für Schritt durch die Erstellung einer eigenen Funktion führen.

## Siehe auch

- [Ausführlicher Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) – behandelt einige fortgeschrittene Funktionen, auf die wir hier nicht eingegangen sind.
- [Referenz zu Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Mit Funktionen weniger Code schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> – eine interaktive Einführung in Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
