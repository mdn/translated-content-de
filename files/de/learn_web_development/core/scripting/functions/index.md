---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 7aa29e8512ed422385bee713c8b1348d14868c68
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept in der Programmierung sind **Funktionen**, die es Ihnen ermöglichen, ein Code-Snippet, das eine einzelne Aufgabe erfüllt, in einem definierten Block zu speichern und diesen Code dann mit einem einzigen kurzen Befehl immer dann aufzurufen, wenn Sie ihn benötigen – anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie die grundlegende Syntax, wie man sie aufruft und definiert, Scope und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen – die Erstellung von wiederverwendbaren Codeblöcken zu ermöglichen, die bei Bedarf aufgerufen werden können.</li>
          <li>Funktionen werden überall in JavaScript verwendet, wobei einige im Browser eingebaut und einige benutzerdefiniert sind.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Das Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Funktionsparameter definieren und Argumente in Funktionsaufrufe einfügen.</li>
          <li>Globaler Scope und Funktions-/Blocks-Scope.</li>
          <li>Ein Verständnis dafür, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir im bisherigen Verlauf des Kurses Funktionen genutzt, ohne dass wir besonders viel darüber gesprochen haben. Jetzt ist es jedoch an der Zeit, dass wir anfangen, explizit über Funktionen zu sprechen und ihre Syntax zu erkunden.

Jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält und Sie **nicht** eine übliche eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), eine [while- oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs umfangreich eingebaute Browserfunktionen verwendet.

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

benutzten wir eine _Funktion_!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit ihrer Funktionalität vertraut zu machen.

Die JavaScript-Sprache hat viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne den ganzen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein ausgefallenes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browser-Codes auf, der größtenteils in systemnahen Sprachen wie C++, nicht in Websprachen wie JavaScript, geschrieben ist.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden uns in einem späteren Modul im Detail mit der Verwendung von Browser-APIs befassen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie werden später im Modul mehr über Objekte erfahren. Im Moment wollten wir nur eventuelle Verwirrung zwischen Methode und Funktion ausräumen — es ist wahrscheinlich, dass Sie auf beide Begriffe stoßen, wenn Sie sich mit verwandten Ressourcen im Web befassen.

Der eingebauter Code, den wir bisher verwendet haben, kommt in beiden Formen: **Funktionen** und **Methoden.** Die vollständige Liste der eingebauten Funktionen sowie die eingebauten Objekte und ihre zugehörigen Methoden finden Sie in unserem [JavaScript-Referenzdokument](/de/docs/Web/JavaScript/Reference/Global_Objects).

Sie haben in diesem Kurs auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern unmittelbar danach gesehen haben, verwendeten Sie eine benutzerdefinierte Funktion. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifenartikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingefügt, die so aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise in ein {{htmlelement("canvas")}}-Element. Jedes Mal, wenn wir das tun möchten, können wir die Funktion mit diesem Aufruf starten:

```js
draw();
```

anstatt den ganzen Code jedes Mal erneut schreiben zu müssen, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die im Browser eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion nur eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt. Wir wollten eine zufällige ganze Zahl zwischen 0 und einer bestimmten Zahl.

## Funktionen aufrufen

Sie haben es wahrscheinlich schon verstanden, aber sicherheitshalber: Um eine Funktion zu nutzen, nachdem sie definiert wurde, müssen Sie sie **aufrufen** oder **ausführen**. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code verwenden, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Art der Erstellung einer Funktion wird auch als _Funktionserklärung_ bekannt. Sie wird immer gehoben (hoisted), sodass Sie die Funktion über der Funktionsdefinition aufrufen können und sie trotzdem einwandfrei funktioniert.

## Funktionsparameter

Einige Funktionen erfordern **Parameter**, die beim Aufrufen angegeben werden müssen – dies sind Werte, die in die Klammern der Funktion aufgenommen werden müssen, damit sie ihre Aufgabe richtig erfüllen kann.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Beispielsweise erfordert die im Browser eingebaute [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die im Browser eingebaute [`replace()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion der String-Klasse benötigt jedoch zwei Parameter — den Teilstring, der im Hauptstring gefunden werden soll, und den Teilstring, durch den dieser String ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, trennen Sie diese mit Kommas.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie das nicht tun, übernimmt die Funktion im Allgemeinen ein Standardverhalten. Ein Beispiel hierfür ist das Array [`join()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join) Funktion, deren Parameter optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter angegeben wird, um ein Verbindungstrennzeichen zu spezifizieren, wird standardmäßig ein Komma verwendet.

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden häufig auf anonyme Funktionen stoßen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion wird auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht gehoben.

### Beispiel einer anonymen Funktion

Angenommen, Sie möchten Code ausführen, wenn ein Benutzer in ein Textfeld tippt. Dazu können Sie die [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Funktion des Textfelds aufrufen. Diese Funktion erwartet, dass Sie ihr mindestens zwei Parameter übergeben:

- Den Namen des Ereignisses, auf das gehört werden soll, was in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event) ist
- Eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter, der Informationen über dieses Ereignis enthält, einschließlich der besonderen Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstatt eine separate `logKey()`-Funktion zu definieren, können Sie `addEventListener()` eine anonyme Funktion übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, können Sie eine alternative Form verwenden, die als **Pfeilfunktion** bezeichnet wird. Statt `function(event)` schreiben Sie `(event) =>`:

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

Die `map()`-Methode übergibt jeden Eintrag im Array an die gegebene Funktion, nimmt dann den von der Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Die Pfeilfunktion ist sehr prägnant; das Umschreiben unseres `map()`-Codes zur Verwendung einer regulären anonymen Rückruffunktion würde so aussehen:

```js
const doubled = originals.map(function (item) {
  return item * 2;
});
```

Sie können dieselbe prägnante Pfeilfunktionssyntax verwenden, um das `addEventListener()`-Beispiel neu zu schreiben:

```js-nolint
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`)
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Rückruffunktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Geltungsbereichs dieses Einführungstutorials und machen in den hier besprochenen Fällen wahrscheinlich keinen Unterschied. Um mehr zu erfahren, siehe die [Pfeilfunktions-Referenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel einer Pfeilfunktion

Hier ist eine vollständige Arbeitsversion des oben besprochenen `keydown`-Beispiels:

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

## Funktionsscope und Konflikte

Sprechen wir ein wenig über den {{Glossary("scope", "Scope")}} — ein wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, befinden sich die Variablen und andere Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Scope**. Das bedeutet, dass sie in ihrem eigenen separaten Bereich eingeschlossen sind, der von Code außerhalb der Funktion nicht erreichbar ist.

Die höchste Ebene außerhalb aller Ihrer Funktionen wird als **globaler Scope** bezeichnet. Werte, die im globalen Scope definiert sind, sind von überall im Code aus zugänglich.

JavaScript funktioniert so hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal wollen Sie nicht, dass Variablen überall im Code zugänglich sind. Externe Skripte, die von anderswo eingebunden wurden, könnten beginnen, Ihren Code zu stören und Probleme verursachen, wenn sie dieselben Variablennamen verwenden und Konflikte verursachen. Dies könnte entweder böswillig oder einfach nur zufällig geschehen.

Zum Beispiel nehmen wir an, Sie haben eine HTML-Datei, die auf zwei externe JavaScript-Dateien verweist, von denen jede eine Variable und eine Funktion mit demselben Namen definiert hat:

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

Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)). Laden Sie es in einem separaten Browser-Tab, bevor Sie die folgende Erklärung lesen.

- Wenn das Beispiel in einem Browser gerendert wird, sehen Sie zuerst ein Alert-Fenster, das `Hello Chris: welcome to our company.` anzeigt. Das bedeutet, dass die in der ersten Skriptdatei definierte `greeting()`-Funktion durch den `greeting()`-Aufruf innerhalb des internen Skripts aufgerufen wurde.

- Das zweite Skript wird jedoch überhaupt nicht geladen und ausgeführt, und im Konsolenfenster wird ein Fehler angezeigt: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Das liegt daran, dass die Konstante `name` bereits in `first.js` deklariert wurde, und Sie können dieselbe Konstante nicht zweimal im selben Scope deklarieren. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion aus `second.js` nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden würden, würden beide Skripte ausgeführt. Das Alert-Fenster würde jetzt `Our company is called Chris.` anzeigen. Wenn eine Funktion _neu deklariert_ wird, wird die letzte Deklaration in der Quellreihenfolge verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Teile Ihres Codes in Funktionen zu sperren, vermeidet solche Probleme und wird als Best Practice betrachtet.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen darin, ähnlich wie bei Funktionsscopes. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in ungewohnten Umgebungen sehr unwohl fühlen — ein Löwe oder Tiger würde sich im wässrigen, eisigen Reich der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Lebensräumen in einem Zoo eingesperrt](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Scope — er hat die Schlüssel, um jedes Gehege zu betreten, Futter aufzufüllen, kranke Tiere zu versorgen, usw.

### Spielen mit Scope

Schauen wir uns ein echtes Beispiel an, um Scoping zu demonstrieren.

1. Erstellen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dies enthält zwei Funktionen, die `a()` und `b()` genannt werden, und drei Variablen — `x`, `y` und `z` — wobei zwei innerhalb der Funktionen und eine im globalen Scope definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzigen Parameter nimmt und ihn in einen Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwicklertools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser angezeigt bekommen.

4. Versuchen Sie nun, Folgendes in Ihre Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in der Konsole auslösen, der etwa so aussieht wie "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsscopes: `y` und `z` sind innerhalb der `a()`- und `b()`-Funktionen gesperrt, daher kann `output()` auf sie nicht zugreifen, wenn es aus dem globalen Scope aufgerufen wird.

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie dann, die `a()` und `b()` Funktionen aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte von `y` und `z` im Browser angezeigt bekommen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird, im selben Scope, in dem die Variablen, die sie druckt, definiert sind. `output()` selbst ist von überall zugänglich, da es im globalen Scope definiert ist.

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

7. Speichern und laden Sie erneut, und versuchen Sie dies wieder in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl die `a()`- als auch die `b()`-Aufrufe sollten den Wert von `x` im Browser anzeigen. Diese funktionieren einwandfrei, da die `output()`-Aufrufe sich nicht im selben Scope befinden, in dem `x` definiert ist, sondern `x` eine globale Variable ist — sie ist im gesamten Code, überall, verfügbar.

8. Versuchen Sie schließlich, Ihren Code auf diese Weise zu aktualisieren:

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

9. Speichern und laden Sie erneut, und versuchen Sie dies wieder in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die `a()`- und `b()`-Aufrufe diesen lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie zu drucken versuchen, sich nicht im gleichen Funktionsscope befinden — die Variablen sind für diese Funktionsaufrufe im Wesentlichen unsichtbar.

> [!NOTE]
> Dieselben Scoping-Regeln gelten nicht für Schleifen (z.B. `for() { }`) und bedingte Blöcke (z.B. `if () { }`) — sie sehen zwar sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, die Sie antreffen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variablen definiert haben, überprüfen Sie, in welchem Scope sie sich befindet.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und den Weg für den nächsten geebnet, in dem wir praktisch werden und Ihnen die Schritte zur Erstellung Ihrer eigenen benutzerdefinierten Funktion zeigen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
