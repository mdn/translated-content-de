---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 64f819b8486e284aa7c18cbd857b6861d189e271
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept beim Codieren sind **Funktionen**, die es Ihnen ermöglichen, einen Codeabschnitt, der eine einzelne Aufgabe erfüllt, in einem definierten Block zu speichern und diesen Code dann immer dann aufzurufen, wenn Sie ihn benötigen, und zwar mit einem einzigen kurzen Befehl — anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen wie grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereiche und Parameter erkunden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — um wiederverwendbare Codeblöcke zu erstellen, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind in den Browser integriert, andere vom Benutzer definiert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Funktionen aufrufen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Funktion Parameter definieren, Argumente an Funktionsaufrufe übergeben.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Block-Gültigkeitsbereich.</li>
          <li>Ein Verständnis davon, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir im Verlauf des Kurses bereits Funktionen verwendet, wir haben nur nicht viel darüber gesprochen. Jetzt ist jedoch der richtige Zeitpunkt, um explizit über Funktionen zu sprechen und ihre Syntax zu erkunden.

Jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält und Sie **nicht** eine gängige eingebaute Sprachstruktur verwenden, wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements), verwenden Sie eine Funktion.

## Eingebaute Browser-Funktionen

In diesem Kurs haben wir umfassend eingebaute Browser-Funktionen verwendet.

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

Verwendeten wir eine _Funktion_!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich bei Bedarf mit deren Funktionsweise vertraut zu machen.

Die JavaScript-Sprache verfügt über viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne diesen gesamten Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browser-Funktion **ausführen** (ein ausgefallenes Wort für ausführen oder auslösen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrundbrowsers auf, die größtenteils in Systemsprachen wie C++ geschrieben sind, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browser-Funktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil der Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [dieser frühe Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für mehr Beschreibungen). Wir werden uns die Verwendung von Browser-APIs ausführlicher in einem späteren Modul ansehen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul über Objekte lernen. Vorerst wollen wir nur jede mögliche Verwirrung über Methoden und Funktionen beseitigen — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich verwandte Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher verwendet haben, kommt in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und deren entsprechenden Methoden in [unserem JavaScript-Nachschlagewerk](/de/docs/Web/JavaScript/Reference/Global_Objects) überprüfen.

Sie haben im Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit anschließenden Klammern gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingeschlossen, die folgendermaßen aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun möchten, können wir die Funktion so aufrufen:

```js
draw();
```

anstatt den gesamten Code jedes Mal erneut schreiben zu müssen, wenn wir ihn wiederholen möchten. Funktionen können beliebigen Code enthalten — Sie können sogar innerhalb von Funktionen andere Funktionen aufrufen. Zum Beispiel ruft die oben gezeigte `draw()`-Funktion die `random()`-Funktion dreimal auf; `random()` wird durch den folgenden Code definiert:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, da die eingebaute `Math.random()`-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganze Zahl zwischen 0 und einer bestimmten Zahl.

## Funktionen aufrufen

Wahrscheinlich ist Ihnen das inzwischen klar, aber nur für den Fall: Um eine Funktion nach ihrer Definition tatsächlich zu nutzen, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem der Funktionsname irgendwo im Code eingefügt wird, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch bekannt als _Funktionsdeklaration_. Sie wird immer hochgestuft, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und sie funktioniert trotzdem.

## Funktion Parameter

Einige Funktionen erfordern, dass beim Aufruf **Parameter** angegeben werden — das sind Werte, die in den Funktionsklammern enthalten sein müssen, die sie benötigen, um ihre Aufgabe richtig zu erfüllen.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Beispielsweise erfordert die eingebaute `Math.random()`-Funktion des Browsers keine Parameter. Beim Aufruf gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute `replace()`-Funktion des Browsers für Zeichenfolgen benötigt jedoch zwei Parameter — den zu findenden Teilstring in der Hauptzeichenfolge und den Teilstring, der diesen String ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, nimmt die Funktion im Allgemeinen ein gewisses Standardverhalten an. Ein Beispiel hierfür ist, dass der Parameter der Array-`join()`-Funktion optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter zum Festlegen eines Verbindungs-/Trennzeichens eingeschlossen wird, wird standardmäßig ein Komma verwendet.

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

Dies wird als **anonyme Funktion** bezeichnet, da sie keinen Namen hat. Sie werden oft auf anonyme Funktionen stoßen, wenn eine Funktion erwartet, dass ihr eine andere Funktion als Parameter übergeben wird. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch bekannt als _Funktionsausdruck_. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht hochgestuft.

### Beipiel für anonyme Funktion

Zum Beispiel, sagen wir, Sie möchten einen Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die `addEventListener()`-Funktion des Textfeldes aufrufen. Diese Funktion erwartet, dass Sie ihr mindestens zwei Parameter übergeben:

- Den Namen des Ereignisses, für das Sie lauschen möchten, was in diesem Fall `keydown` ist
- Eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter, der Informationen über dieses Ereignis, einschließlich der speziellen Taste, die der Benutzer gedrückt hat, enthält:

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

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)`, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Falls die Funktion nur einen Parameter hat, können Sie die Klammern um den Parameter weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die `map()`-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode übergibt jedes Element im Array an die gegebene Funktion, nimmt dann den von der Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Die Pfeilfunktion ist sehr prägnant; das Umschreiben unseres `map()`-Codes zur Verwendung einer regulären anonymen Callback-Funktion würde so aussehen:

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

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, lesen Sie den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Rahmens dieses Einführungstutorials und werden wahrscheinlich in den hier besprochenen Fällen keinen Unterschied machen. Um mehr zu erfahren, siehe die [Pfeilfunktions-Referenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für eine Pfeilfunktion

Hier ist eine vollständige funktionierende Version des `keydown`-Beispiels, das wir oben diskutiert haben:

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

Das Ergebnis — versuchen Sie, in das Textfeld zu tippen und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Lassen Sie uns ein wenig über den {{Glossary("scope", "Funktionsbereich")}} sprechen — ein wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die innerhalb der Funktion definierten Variablen und andere Dinge in ihrem eigenen separaten **Bereich**. Das bedeutet, dass sie in ihrem eigenen separaten Fach weggesperrt sind, von außerhalb der Funktionen nicht erreichbar.

Der oberste Bereich außerhalb all Ihrer Funktionen wird **globaler Bereich** genannt. Werte, die im globalen Bereich definiert sind, sind überall im Code zugänglich.

JavaScript funktioniert so hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind. Externe Skripte, die von anderswo aufgerufen werden, könnten anfangen, Ihren Code zu manipulieren und Probleme zu verursachen, wenn sie dieselben Variablennamen verwenden, was zu Konflikten führt. Dies könnte absichtlich oder einfach aus Versehen geschehen.

Zum Beispiel sagen wir, Sie haben eine HTML-Datei, die auf zwei externe JavaScript-Dateien verweist, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Sie können dieses Beispiel [live auf GitHub ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Laden Sie es in einem separaten Browser-Tab, bevor Sie die folgende Erklärung lesen.

- Wenn das Beispiel in einem Browser gerendert wird, sehen Sie zuerst ein Alert-Fenster, das `Hello Chris: welcome to our company.` anzeigt, was bedeutet, dass die in der ersten Skriptdatei definierte `greeting()`-Funktion durch den `greeting()`-Aufruf innerhalb des internen Skripts aufgerufen wurde.

- Das zweite Skript wird jedoch überhaupt nicht geladen und ausgeführt und ein Fehler wird in die Konsole gedruckt: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die Konstante `name` bereits in `first.js` deklariert ist und Sie dieselbe Konstante nicht zweimal im selben Bereich deklarieren können. Da das zweite Skript nicht geladen wurde, ist die in `second.js` definierte `greeting()`-Funktion nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Das Alert-Fenster würde nun `Our company is called Chris.` anzeigen. Wenn eine Funktion _neu deklariert_ wird, wird die letzte Deklaration in der Quellreihenfolge verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Teile Ihres Codes in Funktionen wegzusperren, um solche Probleme zu vermeiden, wird als Best Practice angesehen.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen im Inneren, ähnlich wie Funktionsbereiche. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen unwohl fühlen — ein Löwe oder Tiger würde sich in der kalten, wässrigen Umgebung der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihrem jeweiligen Lebensraum in einem Zoo eingesperrt sind](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Bereich — er hat die Schlüssel, um jedes Gehege zu betreten, Futter aufzufüllen, kranke Tiere zu pflegen usw.

### Spielen mit dem Bereich

Sehen wir uns ein echtes Beispiel an, um das Scoping zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Es enthält zwei Funktionen mit den Namen `a()` und `b()`, sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen definiert sind und eine im globalen Bereich. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter akzeptiert und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklerwerkzeugen. Geben Sie in der JavaScript-Konsole folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport sehen.

4. Versuchen Sie nun, das Folgende in Ihre Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in der Konsole auslösen, der in etwa so lautet wie "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsbereichs: `y` und `z` sind innerhalb der Funktionen `a()` und `b()` gesperrt, sodass `output()` von außerhalb des Funktionsbereichs keinen Zugriff auf sie hat.

5. Was ist jedoch, wenn es von innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie folgendermaßen aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und rufen Sie dann die Funktionen `a()` und `b()` aus der JavaScript-Konsole auf:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte von `y` und `z` im Browser-Viewport sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird, im selben Bereich, in dem die Variablen definiert sind, die sie druckt. `output()` selbst steht überall zur Verfügung, da es im globalen Bereich definiert ist.

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

   Sowohl die `a()`- als auch die `b()`-Aufrufe sollten den Wert von `x` im Browser-Viewport drucken. Diese funktionieren einwandfrei, da die `output()`-Aufrufe nicht im selben Bereich definiert sind wie `x`, ist `x` eine globale Variable — es ist innerhalb des gesamten Codes, überall, verfügbar.

8. Aktualisieren Sie schließlich Ihren Code wie folgt:

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

   Dieses Mal werfen die Aufrufe von `a()` und `b()` den nervigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in die Konsole — dies liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie versuchen zu drucken, sich nicht im selben Funktionsbereich befinden — die Variablen sind effektiv für diese Funktionsaufrufe unsichtbar.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable deklariert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

#### Ein Exkurs zu Schleifen- und Bedingungsbereichen

Es ist erwähnenswert, dass der Bereich von innerhalb von [Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) und [Schleifen](/de/docs/Learn_web_development/Core/Scripting/Loops) deklarierten Werten mit `let` und `const` auf dieselbe Weise wie der Funktionsbereich funktioniert. Wenn Sie zum Beispiel die folgenden Blöcke dem obigen Beispiel hinzufügen würden:

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

Das Aufrufen von `output(c)`, `output(d)`, `output(e)` oder `output(f)` würde denselben **"ReferenceError: [variable-name] is not defined"**-Fehler wie zuvor hervorrufen. Die `output()`-Funktion kann diese Variablen nicht erreichen, da sie in ihrem eigenen Bereich eingeschlossen sind.

Das veraltete `var`-Schlüsselwort funktioniert anders. Wenn `c`, `d`, `e` und `f` mit `var` deklariert würden:

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

würden sie in den globalen Bereich hochgestuft werden; daher würde es funktionieren, sie in die Konsole auszugeben (zum Beispiel mit `output(c)`). In Funktionen deklarierte Variablen mit `var` haben jedoch ihren Bereich weiterhin auf diese Funktionen beschränkt.

Diese Inkonsistenz kann Verwirrung und Fehler verursachen und ist ein weiterer Grund, warum Sie `let` und `const` anstelle von `var` verwenden sollten.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und den Weg für den nächsten Artikel bereitet, in dem wir praktisch werden und Sie durch die Schritte führen, um Ihre eigene benutzerdefinierte Funktion zu erstellen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — deckt einige erweiterte Funktionen ab, die hier nicht enthalten sind.
- [Referenz zu Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Funktionen verwenden, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
