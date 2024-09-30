---
title: Funktionen — wiederverwendbare Codeblöcke
slug: Learn/JavaScript/Building_blocks/Functions
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

Ein weiteres essentielles Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, einen Codeabschnitt, der eine einzelne Aufgabe erledigt, in einem definierten Block zu speichern und diesen Code dann mit einem einzigen kurzen Befehl aufzurufen, wann immer Sie ihn benötigen – anstatt denselben Code mehrfach schreiben zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript Erste Schritte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis der grundlegenden Konzepte hinter JavaScript-Funktionen.
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir im Laufe des Kurses bereits Funktionen verwendet; wir haben nur nicht viel darüber gesprochen. Jetzt ist jedoch die Zeit gekommen, dass wir beginnen, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erforschen.

Jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält und Sie **nicht** eine gewöhnliche eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop), [while oder do...while-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn/JavaScript/Building_blocks/conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browser-Funktionen

Wir haben in diesem Kurs schon viele Funktionen verwendet, die im Browser integriert sind.

Jedes Mal, wenn wir eine Zeichenkette manipulierten, zum Beispiel:

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

Benutzten wir eine _Funktion_!

> [!NOTE]
> Sie können diese Zeilen in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit ihrer Funktionalität vertraut zu machen.

Die JavaScript-Sprache verfügt über viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte einige der Codes, die Sie aufrufen, wenn Sie eine eingebaute Browser-Funktion **aufrufen** (ein ausgefallenes Wort für ausführen), nicht in JavaScript geschrieben werden – viele dieser Funktionen rufen Teile des Hintergrundcodes des Browsers auf, die größtenteils in systemnahen Sprachen wie C++ geschrieben sind, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browser-Funktionen nicht Teil der Kern-JavaScript-Sprache sind – einige sind als Teil von Browser-APIs definiert, die auf die Standard-Sprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden die Nutzung von Browser-APIs in einem späteren Modul ausführlicher betrachten.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt. Sie müssen noch nicht die Funktionsweise von strukturierten JavaScript-Objekten lernen — Sie können warten, bis unser späteres Modul daran geht, Ihnen all die Details über die Funktionsweise von Objekten beizubringen, und wie Sie Ihre eigenen erstellen. Im Moment wollten wir nur mögliche Verwirrung zwischen Methode und Funktion klären — Sie werden wahrscheinlich mit beiden Begriffen konfrontiert werden, wenn Sie die verfügbaren damit zusammenhängenden Ressourcen im Internet ansehen.

Der eingebauter Code, den wir bisher verwendet haben, kommt in beiden Formen vor: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen, sowie die eingebauten Objekte und ihre entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) überprüfen.

Sie haben auch viele **benutzerdefinierte Funktionen** im Kurs bisher gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt danach sahen, verwendeten Sie eine benutzerdefinierte Funktion. In unserem Beispiel [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel zu Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) haben wir zum Beispiel eine benutzerdefinierte `draw()`-Funktion enthalten, die wie folgt aussieht:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir das tun wollen, können wir einfach die Funktion so aufrufen:

```js
draw();
```

anstatt den gesamten Code jedes Mal wiederholen zu müssen. Funktionen können jeden beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, weil die eingebaute [Math.random()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige Ganzzahl zwischen 0 und einer angegebenen Zahl.

## Aufrufen von Funktionen

Sie verstehen diesen Punkt wahrscheinlich schon, aber nur für den Fall: Um eine Funktion nach ihrer Definition tatsächlich zu verwenden, müssen Sie sie ausführen – oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer nach oben verschoben, sodass Sie die Funktion oberhalb der Funktionsdefinition aufrufen können und es einwandfrei funktioniert.

## Funktionsparameter

Einige Funktionen erfordern, dass beim Aufrufen **Parameter** angegeben werden — dies sind Werte, die innerhalb der Funktionsklammern enthalten sein müssen und die sie benötigt, um ihre Aufgabe ordnungsgemäß zu erfüllen.

> [!NOTE]
> Parameter werden manchmal auch als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Die eingebaute [Math.random()]-Funktion des Browsers benötigt zum Beispiel keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute String [replace()]-Funktion des Browsers benötigt jedoch zwei Parameter — den Teilstring, der im Hauptstring gefunden werden soll, und den Teilstring, mit dem dieser ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, wird die Funktion im Allgemeinen ein Art von Standardverhalten annehmen. Ein Beispiel hierfür ist der Parameter der [join()]-Funktion eines Arrays, der optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wird kein Parameter angegeben, um ein Verknüpfungs-/Trennzeichen festzulegen, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie `=` nach dem Namen des Parameters und den Standardwert hinzufügen:

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden häufig anonyme Funktionen sehen, wenn eine Funktion erwartet, dass sie eine andere Funktion als Parameter erhält. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion wird auch als _Funktionsausdruck_ bezeichnet. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht nach oben verschoben.

### Beispiel für anonyme Funktion

Angenommen, Sie möchten einen Code ausführen, wenn der Benutzer in ein Textfeld eingibt. Dazu können Sie die [`addEventListener()`]-Funktion des Textfelds aufrufen. Diese Funktion erwartet (mindestens) zwei Parameter:

- den Namen des Ereignisses, auf das Sie lauschen möchten, das in diesem Fall [`keydown`] ist
- eine Funktion, die ausgelöst werden soll, wenn das Ereignis auftritt.

Wenn der Benutzer eine Taste drückt, wird der Browser die von Ihnen bereitgestellte Funktion aufrufen und ihr einen Parameter übergeben, der Informationen über dieses Ereignis enthält, einschließlich der bestimmten Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstatt eine separate `logKey()`-Funktion zu definieren, können Sie eine anonyme Funktion an `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie in einer solchen Weise eine anonyme Funktion übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im Originalarray zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach und übergibt es an die gegebene Funktion. Sie nimmt dann den Wert, den diese Funktion zurückgibt, und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Äquivalent zur Pfeilfunktion von:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können die gleiche kompakte Syntax verwenden, um das `addEventListener`-Beispiel neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu erfahren, siehe den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Umfangs dieses Einführungsguides und werden wahrscheinlich in den hier diskutierten Fällen keinen Unterschied machen. Um mehr zu erfahren, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist ein vollständiges funktionierendes Beispiel des oben diskutierten "keydown"-Beispiels:

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

Das Ergebnis - Versuchen Sie, in das Textfeld zu tippen, und sehen Sie sich die Ausgabe an:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Sprechen wir ein wenig über den [Gültigkeitsbereich](/de/docs/Glossary/scope) — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die darin definierten Variablen und andere Dinge in einem eigenen getrennten **Gültigkeitsbereich**, was bedeutet, dass sie in ihren eigenen getrennten Kompartimenten gespeichert und von Code außerhalb der Funktionen nicht erreichbar sind.

Die oberste Ebene, außerhalb aller Ihrer Funktionen, wird **globaler Gültigkeitsbereich** genannt. Im globalen Gültigkeitsbereich definierte Werte sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgestellt — hauptsächlich wegen der Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von irgendwo anders einbinden, könnten anfangen, mit Ihrem Code Probleme zu verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden und Konflikte verursachen. Dies könnte absichtlich oder einfach durch einen Unfall geschehen.

Zum Beispiel, sagen wir, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Beide Funktionen, die Sie aufrufen möchten, heißen `greeting()`, aber Sie können nur die `greeting()`-Funktion der `first.js`-Datei jemals aufrufen (die zweite wird ignoriert). Darüber hinaus wird ein Fehler erzeugt, wenn versucht wird, der `name`-Variable (in der `second.js`-Datei) einen neuen Wert zuzuweisen – weil sie bereits mit `const` deklariert wurde und daher nicht neu zugewiesen werden kann.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Das Abschließen von Teilen Ihres Codes in Funktionen vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein bisschen wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen in ihren Gehegen — genauso wie die Funktionsbereiche. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen wirklich unwohl fühlen — ein Löwe oder Tiger würde sich im wässrigen, eisigen Bereich der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihren jeweiligen Lebensräumen in einem Zoo eingeschlossen sind](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Gültigkeitsbereich — er hat die Schlüssel, um jedes Gehege zu betreten, Futter aufzufüllen, kranke Tiere zu versorgen usw.

### Aktives Lernen: Spielen mit dem Gültigkeitsbereich

Sehen wir uns ein echtes Beispiel an, um den Gültigkeitsbereich zu demonstrieren.

1. Machen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Es enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Gültigkeitsbereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen Parameter aufnimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwickler-Tools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Viewport sehen.

4. Versuchen Sie jetzt, Folgendes in Ihre Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, ähnlich wie "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsbereichs sind `y` und `z` innerhalb der `a()`- und `b()`-Funktionen eingeschlossen, sodass `output()` sie nicht aufrufen kann, wenn es aus dem globalen Bereich heraus aufgerufen wird.

5. Was ist jedoch, wenn es aus einer anderen Funktion heraus aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie so aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, und versuchen Sie dann, die `a()`- und `b()`-Funktionen aus der JavaScript-Konsole heraus zu rufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Browser-Viewport erscheinen sehen. Das funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird – innerhalb des gleichen Bereichs, in dem die Variablen, die sie ausgibt, definiert sind, in jedem Fall. `output()` selbst ist von überall aus verfügbar, da es im globalen Gültigkeitsbereich definiert ist.

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

7. Speichern Sie und laden Sie erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Diese sollten den Wert von x im Browser-Viewport drucken. Diese funktionieren einwandfrei, weil die `output()`-Aufrufe nicht im gleichen Bereich wie `x` definiert sind, `x` jedoch eine globale Variable ist, daher ist es in allen Codes überall zugänglich.

8. Versuchen Sie schließlich, Ihren Code wie folgt zu aktualisieren:

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

9. Speichern Sie und laden Sie erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werden die `a()`- und `b()`-Aufrufe diesen lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in die Konsole werfen – dies liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie auszugeben versuchen, nicht im gleichen Funktionsbereich liegen – die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Die gleichen Bereichsregeln gelten nicht für Schleifen (z.B. `for() { }`) und konditionale Blöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, aber sie sind nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, auf die Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Bereich sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, daher sollten Sie diese vielleicht zuerst lesen, bevor Sie sie versuchen.

## Fazit

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und den Weg für den nächsten geebnet, in dem wir praktisch werden und Sie durch die Schritte zum Aufbau Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Ausführlicher Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Referenz für Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — erweiterte Konzeptreferenzen

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
