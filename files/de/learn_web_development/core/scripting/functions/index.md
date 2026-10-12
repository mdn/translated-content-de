---
title: Funktionen – wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres grundlegendes Konzept beim Programmieren sind **Funktionen**. Mit ihnen können Sie Code für eine bestimmte Aufgabe in einem definierten Block zusammenfassen und diesen Code bei Bedarf mit einem kurzen Aufruf ausführen – statt ihn jedes Mal erneut zu schreiben. In diesem Artikel behandeln wir grundlegende Konzepte wie die Syntax von Funktionen, ihre Definition und ihren Aufruf sowie Gültigkeitsbereiche und Parameter.

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
          <li>Einige Funktionen sind im Browser integriert, andere werden von Entwicklerinnen und Entwicklern definiert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Arrow-Funktionen.</li>
          <li>Funktionsparameter definieren und beim Funktionsaufruf Argumente übergeben.</li>
          <li>Globaler Gültigkeitsbereich und Funktions- beziehungsweise Blockgültigkeitsbereich.</li>
          <li>Verstehen, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript begegnen Ihnen Funktionen überall. Tatsächlich haben wir im bisherigen Kurs ständig Funktionen verwendet, ohne viel über sie zu sprechen. Jetzt ist es an der Zeit, Funktionen ausdrücklich zu betrachten und ihre Syntax kennenzulernen.

Fast immer, wenn Sie in JavaScript eine Struktur mit einem Klammerpaar – `()` – verwenden und es sich **nicht** um eine Sprachkonstruktion wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), eine [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) handelt, verwenden Sie eine Funktion.

## Integrierte Browserfunktionen

In diesem Kurs haben wir bereits häufig integrierte Browserfunktionen verwendet.

Zum Beispiel jedes Mal, wenn wir einen Textstring bearbeitet haben:

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

Dabei haben wir jeweils eine _Funktion_ verwendet!

> [!NOTE]
> Sie können diese Zeilen in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf noch einmal mit ihrer Funktionsweise vertraut zu machen.

JavaScript bietet viele integrierte Funktionen, mit denen Sie nützliche Aufgaben erledigen können, ohne den gesamten Code selbst zu schreiben. Ein Teil des Codes, den Sie beim **Aufrufen** einer integrierten Browserfunktion ausführen, ließe sich nicht einmal in JavaScript schreiben. Viele dieser Funktionen greifen auf internen Browsercode zu, der größtenteils in systemnahen Sprachen wie C++ statt in Websprachen wie JavaScript geschrieben ist.

Beachten Sie, dass nicht alle integrierten Browserfunktionen zum Kern der Sprache JavaScript gehören. Einige sind Teil von Browser-APIs, die die Standardsprache um zusätzliche Funktionen erweitern (weitere Erläuterungen finden Sie in [diesem früheren Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do)). Die Verwendung von Browser-APIs sehen wir uns in einem späteren Modul genauer an.

## Funktionen und Methoden

**Funktionen**, die zu Objekten gehören, heißen **Methoden**. Objekte lernen Sie später in diesem Modul kennen. Zunächst möchten wir nur einen möglichen Unterschied zwischen den Begriffen klären, denn in anderen Webressourcen werden Ihnen beide begegnen.

Der bisher verwendete integrierte Code umfasst sowohl **Funktionen** als auch **Methoden**. Eine vollständige Liste der integrierten Funktionen sowie der integrierten Objekte und ihrer Methoden finden Sie in [unserer JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects).

Im bisherigen Kurs haben Sie außerdem viele **selbst definierte Funktionen** gesehen: Funktionen, die in Ihrem Code und nicht im Browser definiert sind. Immer wenn auf einen selbst gewählten Namen unmittelbar Klammern folgten, haben Sie eine solche Funktion verwendet. Im Beispiel mit den [100 zufälligen Kreisen](/de/docs/Learn_web_development/Core/Scripting/Loops#looping_code_example) aus unserem Artikel über Schleifen haben wir eine selbst definierte Funktion `draw()` verwendet, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Wenn wir das erneut tun möchten, können wir die Funktion so aufrufen, statt jedes Mal den gesamten Code neu zu schreiben:

```js
draw();
```

Funktionen können beliebigen Code enthalten, auch Aufrufe anderer Funktionen. Beispielsweise ruft die oben gezeigte Funktion `draw()` dreimal die Funktion `random()` auf. `random()` wird durch den folgenden Code definiert:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die im Browser integrierte Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt. Wir wollten dagegen eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Wahrscheinlich ist Ihnen das inzwischen klar. Der Vollständigkeit halber: Um eine definierte Funktion tatsächlich zu verwenden, müssen Sie sie ausführen, also **aufrufen**. Dazu schreiben Sie ihren Namen in den Code und setzen Klammern dahinter.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Art, eine Funktion zu erstellen, wird auch _Funktionsdeklaration_ genannt. Funktionsdeklarationen werden immer durch Hoisting verfügbar gemacht. Deshalb können Sie die Funktion bereits oberhalb ihrer Definition aufrufen.

## Funktionsargumente und -parameter

Manche Funktionen benötigen beim Aufruf **Argumente**: Werte, die innerhalb der Klammern stehen müssen, damit die Funktion ihre Aufgabe erfüllen kann.

Häufig hören Sie auch den Begriff **Parameter**, der besonders in informellen Gesprächen oft gleichbedeutend mit _Argumenten_ verwendet wird. Die Begriffe haben jedoch unterschiedliche Bedeutungen: Parameter sind die Variablen in der Definition einer Funktion. Argumente sind die Werte, die beim Funktionsaufruf für diese Parameter übergeben werden.

Sehen wir uns einige Beispiele an. Die Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) benötigt keine Argumente. Bei jedem Aufruf gibt sie eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die String-Funktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) benötigt dagegen zwei Argumente: die im ursprünglichen String zu suchende Zeichenfolge und die Zeichenfolge, durch die sie ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Mehrere Parameter oder Argumente trennen Sie durch Kommas.

### Optionale Parameter

Manche Parameter sind optional. Beim Aufruf der Funktion müssen Sie dann kein entsprechendes Argument angeben. In diesem Fall verwendet die Funktion üblicherweise einen Standardwert. Beispielsweise ist der Parameter der Array-Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn Sie kein Argument für das Verbindungs- beziehungsweise Trennzeichen angeben, wird standardmäßig ein Komma verwendet.

### Standardwerte für Parameter

Wenn Sie selbst eine Funktion schreiben und optionale Parameter definieren möchten, können Sie einen Standardwert festlegen: Schreiben Sie dazu nach dem Parameternamen `=` und anschließend den Standardwert.

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Arrow-Funktionen

Bisher haben wir Funktionen so erstellt:

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

Das ist eine **anonyme Funktion**, weil sie keinen Namen hat. Anonyme Funktionen sehen Sie häufig dort, wo eine Funktion eine andere Funktion als Argument erwartet. In solchen Fällen wird oft eine anonyme Funktion als Argument übergeben.

> [!NOTE]
> Diese Art, eine Funktion zu erstellen, wird auch _Funktionsausdruck_ genannt. Anders als Funktionsdeklarationen werden Funktionsausdrücke nicht durch Hoisting verfügbar gemacht.

### Beispiel für eine anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn jemand etwas in ein Textfeld eingibt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet mindestens zwei Argumente:

- Den Namen des Ereignisses, auf das reagiert werden soll – in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event).
- Eine Funktion, die beim Eintreten des Ereignisses ausgeführt werden soll.

Wenn eine Taste gedrückt wird, ruft der Browser die angegebene Funktion auf und übergibt ihr einen Parameter mit Informationen über das Ereignis, darunter die gedrückte Taste:

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

Für eine solche anonyme Funktion gibt es eine alternative Schreibweise: die **Arrow-Funktion**. Statt `function(event)` schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur ein Argument entgegennimmt, können Sie die Klammern darum weglassen:

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

Die Methode `map()` übergibt jedes Element des Arrays an die angegebene Funktion, nimmt deren Rückgabewert entgegen und fügt ihn einem neuen Array hinzu.

Die Arrow-Funktion ist sehr knapp. Mit einer gewöhnlichen anonymen Callback-Funktion sähe unser `map()`-Code so aus:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

Mit derselben kompakten Syntax können Sie auch das Beispiel mit `addEventListener()` umschreiben:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

In diesem Fall wird der Rückgabewert von `console.log()`, nämlich `undefined`, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen Arrow-Funktionen, weil sie Ihren Code kürzer und besser lesbar machen können. Weitere Informationen finden Sie im [Abschnitt über Arrow-Funktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und auf unserer [Referenzseite zu Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Zwischen Arrow-Funktionen und gewöhnlichen Funktionen gibt es einige subtile Unterschiede. Sie gehen über den Rahmen dieser Einführung hinaus und dürften in den hier besprochenen Fällen keine Rolle spielen. Weitere Informationen finden Sie in der [Referenzdokumentation zu Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

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

Das Ergebnis – geben Sie etwas in das Textfeld ein und beobachten Sie die Ausgabe:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Gültigkeitsbereiche von Funktionen und Namenskonflikte

Sprechen wir über {{Glossary("scope", "Gültigkeitsbereiche")}}, ein wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, befinden sich die darin definierten Variablen und anderen Elemente in einem eigenen **Gültigkeitsbereich**. Sie sind damit von Code außerhalb der Funktion getrennt und können von dort aus nicht erreicht werden.

Die oberste Ebene außerhalb aller Funktionen heißt **globaler Gültigkeitsbereich**. Dort definierte Werte sind von überall im Code aus zugänglich.

JavaScript funktioniert vor allem aus Sicherheits- und Organisationsgründen so. Manchmal sollen Variablen nicht von überall im Code aus zugänglich sein. Externe Skripte könnten Ihren Code beeinflussen und Probleme verursachen, wenn sie dieselben Variablennamen verwenden. Solche Konflikte können absichtlich oder versehentlich entstehen.

Angenommen, eine HTML-Datei bindet zwei externe JavaScript-Dateien ein. In beiden sind eine Variable und eine Funktion mit jeweils demselben Namen definiert:

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

- Wenn das Beispiel im Browser angezeigt wird, erscheint zunächst ein Hinweisfenster mit `Hello Chris: welcome to our company.`. Das bedeutet, dass der Aufruf von `greeting()` im internen Skript die Funktion `greeting()` aus der ersten Skriptdatei ausgeführt hat.

- Das zweite Skript wird dagegen überhaupt nicht geladen und ausgeführt. In der Konsole erscheint der Fehler `Uncaught SyntaxError: Identifier 'name' has already been declared`. Der Grund: Die Konstante `name` wurde bereits in `first.js` deklariert. Dieselbe Konstante kann im selben Gültigkeitsbereich nicht zweimal deklariert werden. Da das zweite Skript nicht geladen wurde, steht die Funktion `greeting()` aus `second.js` nicht für Aufrufe zur Verfügung.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, liefen beide Skripte. Im Hinweisfenster stünde nun `Our company is called Chris.`. Wird eine Funktion _erneut deklariert_, gilt die letzte Deklaration in der Reihenfolge des Quellcodes. Die vorherigen Deklarationen werden dadurch praktisch überschrieben.

Wenn Sie Teile Ihres Codes in Funktionen abgrenzen, vermeiden Sie solche Probleme. Das gilt als bewährte Vorgehensweise.

Stellen Sie sich das wie ein Mehrfamilienhaus vor:

- Jede Wohnung ist privat und nur für die Menschen zugänglich, die darin wohnen. Ähnlich verhält es sich mit dem Gültigkeitsbereich einer Funktion: Code innerhalb einer Funktion kann auf die dort definierten Variablen und Funktionen zugreifen, Code außerhalb dagegen nicht. Hätten alle Zugang zu den Wohnungen der anderen, gäbe es Probleme – Gegenstände könnten verschoben, beschädigt oder gestohlen werden!

- Das Gebäude kann außerdem Gemeinschaftsbereiche wie einen Pool, einen Fitnessraum oder einen Aufenthaltsraum haben, die allen offenstehen. Das entspricht dem globalen Gültigkeitsbereich: Auf alles, was dort deklariert ist, kann jede Funktion zugreifen. Dass alle die Gemeinschaftsräume nutzen können, ist sinnvoll.

### Mit Gültigkeitsbereichen experimentieren

Sehen wir uns ein konkretes Beispiel an, um Gültigkeitsbereiche zu veranschaulichen.

1. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem lokalen Dateisystem und fügen Sie den folgenden Code ein:

   ```html
   <!doctype html>
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

   Der Code enthält zwei Funktionen namens `a()` und `b()` sowie drei Variablen – `x`, `y` und `z`. Zwei der Variablen sind innerhalb der Funktionen definiert, eine im globalen Gültigkeitsbereich. Außerdem gibt es eine dritte Funktion namens `output()`, die ein Argument entgegennimmt und dessen Wert in einem Absatz auf der Seite ausgibt.

2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.

3. Öffnen Sie die JavaScript-Konsole in den Entwicklertools Ihres Browsers. Geben Sie dort den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Der Wert der Variablen `x` sollte im Browserfenster erscheinen.

4. Versuchen Sie nun, Folgendes in die Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide Aufrufe sollten in der Konsole einen Fehler wie „[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)“ auslösen. Warum? Wegen des Funktionsgültigkeitsbereichs: `y` und `z` sind auf die Funktionen `a()` und `b()` beschränkt. Deshalb kann `output()` nicht auf sie zugreifen, wenn die Funktion aus dem globalen Gültigkeitsbereich aufgerufen wird.

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

   Speichern Sie den Code und laden Sie die Seite im Browser neu. Rufen Sie dann `a()` und `b()` über die JavaScript-Konsole auf:

   ```js
   a();
   b();
   ```

   Die Werte von `y` und `z` sollten im Browserfenster erscheinen. Das funktioniert, weil `output()` innerhalb der anderen Funktionen aufgerufen wird, also in demselben Gültigkeitsbereich, in dem die auszugebenden Variablen definiert sind. `output()` selbst ist von überall aus verfügbar, da die Funktion im globalen Gültigkeitsbereich definiert ist.

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

7. Speichern und laden Sie die Seite erneut. Versuchen Sie dann noch einmal Folgendes in der JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl `a()` als auch `b()` sollten den Wert von `x` im Browserfenster ausgeben. Das funktioniert, obwohl die Aufrufe von `output()` nicht im selben Gültigkeitsbereich stehen wie die Definition von `x`: `x` ist eine globale Variable und daher überall im Code verfügbar.

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

9. Speichern und laden Sie die Seite erneut. Versuchen Sie dann noch einmal Folgendes in der JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Diesmal lösen die Aufrufe von `a()` und `b()` in der Konsole den lästigen Fehler [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) aus. Die Aufrufe von `output()` befinden sich nicht in denselben Funktionsgültigkeitsbereichen wie die Variablen, die sie ausgeben sollen. Für diese Aufrufe sind die Variablen daher nicht sichtbar.

> [!NOTE]
> Der Fehler [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) gehört zu den häufigsten Fehlern, denen Sie begegnen werden. Wenn er auftritt und Sie sicher sind, dass Sie die betreffende Variable definiert haben, prüfen Sie, in welchem Gültigkeitsbereich sie sich befindet.

#### Ein Exkurs zu Gültigkeitsbereichen in Schleifen und bedingten Anweisungen

Bei mit `let` und `const` deklarierten Werten funktionieren die Gültigkeitsbereiche innerhalb von [bedingten Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) und [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) ähnlich wie Funktionsgültigkeitsbereiche. Wenn Sie beispielsweise dem obigen Beispiel die folgenden Blöcke hinzufügen:

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

Dann würden Aufrufe von `output(c)`, `output(d)`, `output(e)` oder `output(f)` denselben zuvor gesehenen Fehler **„ReferenceError: [variable-name] is not defined“** auslösen. Die Funktion `output()` kann nicht auf diese Variablen zugreifen, weil sie auf ihre jeweiligen Gültigkeitsbereiche beschränkt sind.

Das ältere Schlüsselwort `var` verhält sich anders. Wenn `c`, `d`, `e` und `f` mit `var` deklariert würden:

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

Dann würden ihre Deklarationen durch Hoisting im globalen Gültigkeitsbereich verfügbar. Ihre Ausgabe, beispielsweise mit `output(c)`, würde daher funktionieren. Der Gültigkeitsbereich von Variablen, die innerhalb von Funktionen mit `var` deklariert werden, bleibt allerdings auf diese Funktionen beschränkt.

Diese Uneinheitlichkeit kann Verwirrung und Fehler verursachen. Sie ist ein weiterer Grund, `let` und `const` statt `var` zu verwenden.

## Zusammenfassung

In diesem Artikel haben wir die grundlegenden Konzepte von Funktionen kennengelernt. Damit sind Sie auf den nächsten Artikel vorbereitet, in dem wir eine eigene Funktion Schritt für Schritt erstellen.

## Siehe auch

- [Ausführlicher Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) – behandelt einige fortgeschrittene Funktionen, auf die wir hier nicht eingegangen sind.
- [Referenz zu Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Mit Funktionen weniger Code schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> – eine interaktive Lektion mit einer hilfreichen Einführung in Funktionen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
