---
title: Funktionen – wiederverwendbare Code-Blöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: dee770bad395da6f67336af7f76dcc823939244e
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wichtiges Konzept in der Programmierung sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann immer dann aufzurufen, wenn Sie ihn benötigen, anstatt denselben Code mehrmals eingeben zu müssen. In diesem Artikel werden wir grundlegende Konzepte von Funktionen untersuchen, wie z.B. grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereich und Parameter.

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
          <li>Der Zweck von Funktionen — das Erstellen von wiederverwendbaren Code-Blöcken, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet.</li>
          <li>Einige Funktionen sind in den Browser integriert, andere sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern und Übergeben von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Blockgültigkeitsbereich.</li>
          <li>Ein Verständnis dafür, was Rückruffunktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir Funktionen während des gesamten Kurses verwendet; wir haben bisher nur nicht viel darüber gesprochen. Jetzt ist es an der Zeit, dass wir explizit über Funktionen sprechen und ihre Syntax untersuchen.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar runde Klammern — `()` — enthält, und Sie verwenden **nicht** eine gängige Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do-while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements), verwenden Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs ausgiebig eingebaute Browser-Funktionen verwendet.

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
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit ihrer Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne den gesamten Code selbst zu schreiben. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein Fachbegriff für ausführen), nicht in JavaScript geschrieben sein — viele dieser Funktionen rufen Teile des Hintergrund-Browsercodes auf, der weitgehend in niedrigeren Systemsprachen wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Beachten Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [dieser frühe Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für mehr Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul genauer untersuchen.

## Funktionen vs. Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später in diesem Modul mehr über Objekte lernen. Für jetzt wollten wir nur mögliche Verwirrung über Methoden im Vergleich zu Funktionen beseitigen — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich verwandte Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher verwendet haben, kommt in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [in unserem JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind und nicht im Browser. Wann immer Sie einen benutzerdefinierten Namen mit Klammern direkt dahinter gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion inkludiert, die folgendermaßen aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir das tun möchten, können wir die Funktion so aufrufen, anstatt den gesamten Code jedes Mal neu schreiben zu müssen, wenn wir ihn wiederholen möchten:

```js
draw();
```

Funktionen können beliebigen Code enthalten, sogar andere Funktionsaufrufe. Beispielsweise ruft die oben gesehene `draw()`-Funktion die `random()`-Funktion dreimal auf; `random()` wird durch den folgenden Code definiert:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute Browserfunktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie sind sich dessen wahrscheinlich schon bewusst, aber nur für den Fall: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies wird durch das Einschließen des Funktionsnamens an einer Stelle im Code erreicht, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form des Erstellens einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer hochgehoben, was bedeutet, dass Sie die Funktion über ihrer Definition aufrufen können, und es wird trotzdem funktionieren.

## Funktionsargumente und Parameter

Einige Funktionen erfordern **Argumente**, wenn Sie sie aufrufen — Werte, die in den Klammern der Funktion enthalten sein müssen, damit die Funktion ihre Aufgabe ordnungsgemäß ausführen kann.

Sie werden auch den Begriff **Parameter** hören, der oft synonym mit _Argumenten_ verwendet wird. Dies ist oft in informellen Diskussionen in Ordnung, aber sie haben unterschiedliche Bedeutungen. Parameter sind die Variablen, die in einer Funktionsdefinition aufgelistet sind, während Argumente die Werte sind, die an die Funktion übergeben werden, um die Parameter darzustellen, wenn die Funktion aufgerufen wird.

Lassen Sie uns einige Beispiele ansehen. Die Funktion [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) erfordert keine Argumente. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die Zeichenkettenfunktion [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) benötigt jedoch zwei Argumente — das Teilstück, das in der Hauptzeichenkette gefunden werden soll, und das Teilstück, das diese Zeichenfolge ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter oder Argumente angeben müssen, trennen Sie diese durch Kommas.

### Optionale Parameter

Manchmal werden Parameter als optional definiert — Sie müssen die entsprechenden Argumente beim Aufrufen der Funktion nicht angeben. Wenn Sie dies nicht tun, verwendet die Funktion im Allgemeinen einen Standardwert. Ein Beispiel dafür ist der Parameter der Funktion [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) des Arrays, der optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Argument hinzugefügt wird, um ein Verbindungs-/Trennzeichen anzugeben, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter definieren möchten, können Sie Standardwerte angeben, indem Sie `=` nach dem Namen des Parameters hinzufügen, gefolgt vom Standardwert:

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

Aber Sie können auch eine Funktion erstellen, die keinen Namen hat:

```js
(function () {
  alert("hello");
});
```

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, dass sie eine andere Funktion als Argument erhält. In diesem Fall wird oft eine anonyme Funktion als Argument übergeben.

> [!NOTE]
> Diese Form des Erstellens einer Funktion ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen sind Funktionsausdrücke nicht hoisted.

### Beispiel für anonyme Funktion

Angenommen, Sie möchten, dass ein Code ausgeführt wird, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet mindestens zwei Argumente:

- Den Namen des Ereignisses, auf das Sie hören möchten, in diesem Fall ist das [`keydown`](/de/docs/Web/API/Element/keydown_event).
- Eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter, der Informationen über dieses Ereignis enthält, einschließlich der besonderen Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die sogenannte **Pfeilfunktion**. Statt `function(event)` zu schreiben, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur ein Argument benötigt, können Sie die Klammern darum weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine einzige Zeile enthält, die eine `return`-Anweisung ist, können Sie die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert des ursprünglichen Arrays zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode übergibt jedes Element des Arrays an die gegebene Funktion, nimmt dann den Rückgabewert der Funktion und fügt ihn einem neuen Array hinzu.

Die Pfeilfunktion ist sehr prägnant; unser `map()`-Code sieht folgendermaßen aus, wenn er mit einer regulären anonymen Rückruffunktion umgeschrieben wird:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

Sie können dieselbe prägnante Pfeilfunktionssyntax verwenden, um das `addEventListener()`-Beispiel umzuschreiben:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt zu Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Diese fallen außerhalb des Umfangs dieses Einführungstutorials und sind in den hier diskutierten Fällen wahrscheinlich nicht relevant. Um mehr zu erfahren, siehe die [Pfeilfunktions-Referenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktion

Hier ist eine vollständige Arbeitsversion des `keydown`-Beispiels, das wir oben besprochen haben:

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

Das Ergebnis – versuchen Sie, in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionaler Gültigkeitsbereich und Konflikte

Lassen Sie uns ein wenig über {{Glossary("scope", "Gültigkeitsbereich")}} sprechen — ein wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die darin definierten Variablen und anderen Dinge in ihrem eigenen separaten **Gültigkeitsbereich**. Das bedeutet, dass sie in ihrem eigenen separaten Fach gesperrt sind und von Code außerhalb der Funktion nicht erreicht werden können.

Der oberste Level außerhalb aller Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Werte, die im globalen Gültigkeitsbereich definiert sind, sind überall im Code zugänglich.

JavaScript funktioniert auf diese Weise hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind. Externe Skripts, die von anderswo aufgerufen werden, könnten Ihren Code durcheinander bringen und Probleme verursachen, wenn sie dieselben Variablennamen verwenden, was zu Konflikten führt. Dies könnte absichtlich oder nur versehentlich geschehen.

Nehmen wir beispielsweise an, dass Sie eine HTML-Datei haben, die auf zwei externe JavaScript-Dateien verweist, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie können dieses Beispiel [live auf GitHub sehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Laden Sie es in einem separaten Browser-Tab, bevor Sie die Erklärung unten lesen.

- Wenn das Beispiel in einem Browser gerendert wird, sehen Sie zuerst ein Alarmfeld mit der Nachricht `Hallo Chris: Willkommen in unserer Firma.`, was bedeutet, dass die `greeting()`-Funktion, die im ersten Skript definiert ist, durch den `greeting()`-Aufruf im internen Skript aufgerufen wurde.

- Das zweite Skript wird jedoch überhaupt nicht geladen und ausgeführt, und im Konsolenauszug erscheint ein Fehler: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist, und Sie können dieselbe Konstante nicht zweimal im selben Gültigkeitsbereich deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion von `second.js` nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Die Alarmbox würde jetzt sagen `Unsere Firma heißt Chris.` Wenn eine Funktion _erneuert_ wird, wird die letzte Deklaration in der Quellreihenfolge verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Das Sperren von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als bewährte Praxis angesehen.

Es ist ein bisschen wie ein Wohnhaus:

- Jede Wohnung ist privat für die dort lebenden Personen, ähnlich wie der Funktionsgültigkeitsbereich — Code innerhalb einer Funktion kann auf die darin definierten Variablen und Funktionen zugreifen, aber Code außerhalb dieser Funktion kann dies nicht. Wenn jeder Zugriff auf die Wohnung jedes anderen hätte, würden Probleme auftreten – die Besitztümer der Menschen könnten bewegt, beschädigt oder gestohlen werden!

- Das Gebäude könnte auch gemeinsame Bereiche haben, z. B. ein Schwimmbad, ein Fitnessstudio oder einen Freizeitbereich, die für alle zugänglich sind. Das ist ähnlich wie der globale Gültigkeitsbereich — alles, was dort deklariert wird, ist für jede Funktion zugänglich. Jeder kann die gemeinsamen Wohnbereiche nutzen, was sinnvoll ist.

### Spielen mit dem Gültigkeitsbereich

Lassen Sie uns ein echtes Beispiel anschauen, um das Thema Gültigkeitsbereich zu demonstrieren.

1. Machen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, sowie drei Variablen — `x`, `y`, und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Gültigkeitsbereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die ein einzelnes Argument übernimmt und dieses in einen Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Ansichtsbereich angezeigt bekommen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa lautet: "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum? Wegen des Funktionsgültigkeitsbereichs: `y` und `z` sind in den Funktionen `a()` und `b()` gesperrt, daher kann `output()` nicht darauf zugreifen, wenn es aus dem globalen Gültigkeitsbereich aufgerufen wird.

5. Was ist jedoch, wenn es von einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten:

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

   Speichern Sie den Code und laden Sie ihn im Browser neu, und versuchen Sie dann, die `a()`- und `b()`-Funktionen von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte `y` und `z` im Browser-Ansichtsbereich angezeigt bekommen. Das funktioniert gut, weil die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird, also im gleichen Gültigkeitsbereich, in dem die Variablen definiert sind, die es ausgibt. `output()` selbst ist überall verfügbar, da es im globalen Gültigkeitsbereich definiert ist.

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

7. Speichern und laden Sie erneut, und versuchen Sie dann erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Beide `a()`- und `b()`-Aufrufe sollen den Wert von `x` im Browser-Ansichtsbereich anzeigen. Diese funktionieren, weil, obwohl die `output()`-Aufrufe nicht im gleichen Gültigkeitsbereich wie `x` definiert sind, `x` eine globale Variable ist — es ist überall im Code verfügbar.

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

9. Speichern und laden Sie erneut, und probieren Sie dann erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werden die `a()`- und `b()`-Aufrufe den lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in die Konsole werfen — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie auszugeben versuchen, nicht im gleichen Funktionsgegenstand sind — die Variablen sind für diese Funktionsaufrufe somit praktisch unsichtbar.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, dem Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Gültigkeitsbereich sie sich befindet.

#### Ein Exkurs zum Schleifen- und Bedingungsgültigkeitsbereich

Es ist erwähnenswert, dass der Gültigkeitsbereich von Werten, die innerhalb von [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) und [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) deklariert werden, genauso funktioniert wie der Funktionsgültigkeitsbereich, wenn Werte mit `let` und `const` deklariert werden. Zum Beispiel, wenn Sie die folgenden Blöcke zu dem oben genannten Beispiel hinzufügen:

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

Der Aufruf von `output(c)`, `output(d)`, `output(e)` oder `output(f)` würde zu demselben **"ReferenceError: [variable-name] is not defined"**-Fehler führen, den wir zuvor gesehen haben. Die `output()`-Funktion kann nicht auf diese Variablen zugreifen, da sie in ihrem eigenen Gültigkeitsbereich gesperrt sind.

Das legacy `var`-Schlüsselwort funktioniert anders. Wenn `c`, `d`, `e` und `f` mit `var` deklariert wären:

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

Würden sie in den globalen Gültigkeitsbereich angehoben, daher würde das Ausgeben in die Konsole (z.B. mit `output(c)`) funktionieren. Variablen, die mit `var` innerhalb von Funktionen deklariert sind, haben jedoch immer noch ihren Gültigkeitsbereich auf diese Funktionen beschränkt.

Diese Inkonsistenz kann Verwirrung und Fehler verursachen und ist ein weiterer Grund, warum `let` und `const` anstelle von `var` verwendet werden sollten.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und den Weg für den nächsten Artikel bereitet, in dem wir Ihnen praktisch zeigen, wie Sie Ihre eigene benutzerdefinierte Funktion erstellen können.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Referenz zu Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
