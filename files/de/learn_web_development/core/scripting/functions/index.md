---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 9460d587cd7ec549f83621777d123d754dd6e68c
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres grundlegendes Konzept in der Programmierung sind **Funktionen**, die es Ihnen ermöglichen, einen Codeabschnitt, der eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und dann diesen Code nach Bedarf mit einem einzigen kurzen Befehl aufzurufen — anstatt denselben Code mehrmals eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte von Funktionen untersuchen, wie zum Beispiel die grundlegende Syntax, wie man sie aufruft und definiert, Geltungsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorhergehenden Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um die Erstellung wiederverwendbarer Codeblöcke zu ermöglichen, die überall benötigt werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet.</li>
          <li>Einige Funktionen sind im Browser eingebaut, andere sind benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Funktionsparameter definieren und Argumente für Funktionsaufrufe übergeben.</li>
          <li>Globaler Geltungsbereich und Funktions-/Block-Geltungsbereich.</li>
          <li>Ein Verständnis dessen, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir Funktionen im gesamten Kurs bisher verwendet, wir haben jedoch nicht viel darüber gesprochen. Jetzt ist es an der Zeit, dass wir anfangen, explizit über Funktionen zu sprechen und ihre Syntax zu erkunden.

Im Grunde genommen, wann immer Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält, und Sie **nicht** eine häufige Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs eingehend eingebaute Browser-Funktionen verwendet.

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

Wir haben eine _Funktion_ genutzt!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich bei Bedarf mit ihrer Funktionalität vertraut zu machen.

Die JavaScript-Sprache bietet viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein schicker Ausdruck für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Codes des Browsers auf, der größtenteils in systemnahen Sprachen wie C++ und nicht in Web-Sprachen wie JavaScript geschrieben ist.

Beachten Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind Teil von Browser-APIs, die auf der Standardsprache aufbauen, um noch mehr Funktionalität zu bieten (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Verwendung von Browser-APIs in einem späteren Modul genauer betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul über Objekte lernen. Vorerst wollten wir nur mögliche Verwirrung über Methoden im Gegensatz zu Funktionen beseitigen — es ist wahrscheinlich, dass Sie auf beide Begriffe stoßen werden, wenn Sie verwandte Ressourcen im Web betrachten.

Der eingebaute Code, den wir bisher verwendet haben, kommt in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden [in unserem JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects) überprüfen.

Sie haben auch schon viele **benutzerdefinierte Funktionen** im Kurs gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt danach gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()` Funktion eingebaut, die folgendermaßen aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir das tun wollen, können wir die Funktion so aufrufen, anstatt den gesamten Code jedes Mal erneut schreiben zu müssen:

```js
draw();
```

Funktionen können jeden beliebigen Code enthalten, sogar andere Funktionsaufrufe. Zum Beispiel ruft die oben gesehene `draw()` Funktion die `random()` Funktion dreimal auf; `random()` wird durch den folgenden Code definiert:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, weil die im Browser eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) Funktion nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer bestimmten Zahl.

## Funktionen aufrufen

Wahrscheinlich ist Ihnen dies inzwischen klar, aber nur für den Fall: Um eine Funktion nach ihrer Definition tatsächlich zu verwenden, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem Sie irgendwo im Code den Namen der Funktion angeben, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsdeklaration_ bezeichnet. Sie wird immer höhergestuft, was bedeutet, dass Sie die Funktion über ihrer Definition aufrufen können und sie trotzdem funktioniert.

## Funktionsargumente und -parameter

Einige Funktionen erfordern **Argumente**, wenn Sie sie aufrufen — Werte, die in die Klammern der Funktion aufgenommen werden müssen, damit die Funktion ihre Aufgabe ordnungsgemäß ausführen kann.

Sie werden auch den Begriff **Parameter** hören, oft austauschbar mit _Argumenten_. Dies ist in informellen Diskussionen oft in Ordnung, aber sie haben unterschiedliche Bedeutungen. Parameter sind die Variablen, die in einer Funktionsdefinition aufgelistet sind, während Argumente die Werte sind, die an die Funktion übergeben werden, um die Parameter darzustellen, wenn die Funktion aufgerufen wird.

Schauen wir uns einige Beispiele an. Die [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) Funktion benötigt keine Argumente. Beim Aufruf gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die Zeichenkette [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) Funktion benötigt jedoch zwei Argumente — die Teilzeichenfolge, die in der Hauptzeichenfolge gefunden werden soll, und die Teilzeichenfolge, durch die diese Zeichenfolge ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter oder Argumente angeben müssen, trennen Sie diese durch Kommata.

### Optionale Parameter

Manchmal sind Parameter als optional definiert — Sie müssen beim Aufrufen der Funktion keine äquivalenten Argumente angeben. Wenn Sie dies nicht tun, verwendet die Funktion in der Regel einen Standardwert. Zum Beispiel ist der Parameter der Array [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) Funktion optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Argument enthalten ist, um ein Verknüpfungs-/Trennzeichen anzugeben, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter definieren möchten, können Sie Standardwerte festlegen, indem Sie `=` nach dem Namen des Parameters hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bisher haben wir Funktionen folgendermaßen erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, da sie keinen Namen hat. Sie werden häufig anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Argument zu erhalten. In diesem Fall wird oft eine anonyme Funktion als Argument übergeben.

> [!NOTE]
> Diese Form der Funktionserstellung wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht höhergestuft.

### Beispiel einer anonymen Funktion

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Funktion des Textfelds aufrufen. Diese Funktion erwartet mindestens zwei Argumente:

- Der Name des Ereignisses, auf das gewartet werden soll, in diesem Fall ist das [`keydown`](/de/docs/Web/API/Element/keydown_event)
- Eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen zu diesem Ereignis, einschließlich der bestimmten Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die als **Pfeilfunktion** bezeichnet wird. Anstatt `function(event)`, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur ein Argument hat, können Sie die Klammern darum weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine einzelne Zeile enthält, die eine `return`-Anweisung ist, können Sie die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}} Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()` Methode übergibt jedes Element im Array an die gegebene Funktion, nimmt dann den Rückgabewert der Funktion und fügt ihn einem neuen Array hinzu.

Die Pfeilfunktion ist sehr prägnant; das Umschreiben unseres `map()` Codes zur Verwendung einer regulären anonymen Callback-Funktion würde so aussehen:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

Sie können dieselbe prägnante Pfeilfunktionssyntax verwenden, um das `addEventListener()` Beispiel neu zu schreiben:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses Einführungstutorials und werden in den hier besprochenen Fällen wahrscheinlich keinen Unterschied machen. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktion

Hier ist eine vollständige funktionierende Version des `keydown` Beispiels, das wir oben besprochen haben:

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

Das Ergebnis - versuchen Sie, in das Textfeld zu tippen, und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Sprechen wir ein wenig über den {{Glossary("scope", "Geltungsbereich")}} — ein wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die innerhalb der Funktion definierten Variablen und andere Dinge in ihrem eigenen separaten **Bereich**. Das bedeutet, dass sie in ihrem eigenen abgetrennten Bereich eingeschlossen sind und von außerhalb der Funktion nicht erreicht werden können.

Der oberste Bereich außerhalb all Ihrer Funktionen wird als **globaler Bereich** bezeichnet. Werte, die im globalen Bereich definiert sind, sind überall im Code zugänglich.

JavaScript funktioniert so, hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code zugänglich sind. Externe Skripte, die von woanders aufgerufen werden, könnten Ihren Code durcheinander bringen und Probleme verursachen, wenn sie dieselben Variablennamen verwenden, was zu Konflikten führen könnte. Dies könnte absichtlich oder einfach zufällig geschehen.

Angenommen, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien referenziert, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie können dieses Beispiel [live auf GitHub laufen sehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Laden Sie es in einem separaten Browser-Tab, bevor Sie die folgende Erklärung lesen.

- Wenn das Beispiel in einem Browser gerendert wird, sehen Sie zuerst ein Alert-Fenster, das `Hello Chris: welcome to our company.` anzeigt, was bedeutet, dass die `greeting()` Funktion, die im ersten Skript definiert ist, durch den `greeting()` Aufruf im internen Skript aufgerufen wurde.

- Das zweite Skript wird jedoch überhaupt nicht geladen und ausgeführt, und im Konsolenprotokoll wird ein Fehler ausgegeben: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die `name` Konstante bereits in `first.js` deklariert ist, und Sie können dieselbe Konstante nicht zweimal im selben Bereich deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()` Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Das Alert-Fenster würde jetzt `Our company is called Chris.` anzeigen. Wenn eine Funktion _neu deklariert_ wird, wird die letzte Deklaration in der Quellreihenfolge verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Das Einschließen von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als Best Practice betrachtet.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine sind in ihren eigenen Gehegen untergebracht und haben nur Zugang zu den Dingen im Innern, ähnlich wie Funktionsbereiche. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tierarten in unbekannten Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich furchtbar im wässrigen, eisigen Bereich der Pinguine fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihren jeweiligen Lebensräumen in einem Zoo eingeschlossen sind](mdn-mozilla-zoo.png)

Der Zookeeper ist wie der globale Bereich — er hat die Schlüssel, um auf jedes Gehege zuzugreifen, Futter aufzufüllen, sich um kranke Tiere zu kümmern usw.

### Mit dem Geltungsbereich spielen

Schauen wir uns ein reales Beispiel an, um den Geltungsbereich zu demonstrieren.

1. Machen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Es enthält zwei Funktionen, die `a()` und `b()` genannt werden, und drei Variablen — `x`, `y` und `z` — zwei davon sind innerhalb der Funktionen definiert, und eine im globalen Bereich. Es enthält auch eine dritte Funktion, die `output()` genannt wird, die ein einzelnes Argument nimmt und es in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihrem Browser-Entwicklerwerkzeug. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport angezeigt sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa lautet "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsbereichs: `y` und `z` sind innerhalb der `a()` und `b()` Funktionen eingeschlossen, sodass `output()` sie nicht aufrufen kann, wenn es vom globalen Bereich aus aufgerufen wird.

5. Wie aber, wenn es innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie wie folgt aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie dann, die `a()`- und `b()`-Funktionen aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Browser-Viewport ausgedruckt sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird, im selben Bereich wie die Variablen, die sie ausgeben, definiert sind. `output()` selbst ist überall verfügbar, da es im globalen Bereich definiert ist.

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

7. Speichern und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Beide Aufrufe von `a()` und `b()` sollten den Wert von x im Browser-Viewport ausdrucken. Dies funktioniert einwandfrei, da trotz der Tatsache, dass die `output()`-Aufrufe nicht im selben Bereich wie `x` definiert sind, `x` eine globale Variable ist — es ist in jedem Code überall zugänglich.

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

9. Speichern und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werden die Aufrufe von `a()` und `b()` diesen lästigen [ReferenceError: _Variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole werfen — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie ausdrucken sollen, nicht in denselben Funktionsbereichen sind — die Variablen sind effektiv für diese Funktionsaufrufe unsichtbar.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, auf den Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

#### Eine Randbemerkung zu Schleifen- und Bedingungsbereichen

Es ist erwähnenswert, dass der Bereich von Werten, die innerhalb von [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) und [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) deklariert sind, genauso funktioniert wie der Funktionsbereich, wenn Werte mit `let` und `const` deklariert werden. Zum Beispiel, wenn Sie die folgenden Blöcke zum obigen Beispiel hinzufügen würden:

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

Das Aufrufen von `output(c)`, `output(d)`, `output(e)` oder `output(f)` würde zu demselben **"ReferenceError: [variablen-name] is not defined"** Fehler führen, den wir vorher gesehen haben. Die `output()`-Funktion kann nicht auf diese Variablen zugreifen, weil sie in ihrem eigenen Bereich eingeschlossen sind.

Das veraltete `var`-Schlüsselwort funktioniert anders. Wenn `c`, `d`, `e` und `f` mit `var` deklariert wurden:

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

Würden sie in den globalen Bereich gehoben werden; daher würde das Ausgeben von ihnen in die Konsole (zum Beispiel mit `output(c)`) funktionieren. Variablen, die mit `var` innerhalb von Funktionen deklariert sind, haben jedoch immer noch ihren Bereich auf diese Funktionen beschränkt.

Diese Inkonsistenz kann Verwirrung und Fehler verursachen und ist ein weiterer Grund, warum `let` und `const` anstelle von `var` verwendet werden sollten.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Sie durch die Schritte führen, um Ihre eigene benutzerdefinierte Funktion zu erstellen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen verwenden, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops", "Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
