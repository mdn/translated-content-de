---
title: Funktionen — wiederverwendbare Codeblöcke
slug: Learn/JavaScript/Building_blocks/Functions
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

Ein weiteres wesentliches Konzept in der Programmierung sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und dann diesen Code aufzurufen, wann immer Sie ihn benötigen, mit einem einzigen kurzen Befehl – anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte von Funktionen untersuchen, wie die grundlegende Syntax, wie man sie aufruft und definiert, den Geltungsbereich (Scope) und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter JavaScript-Funktionen verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie überall Funktionen. Tatsächlich haben wir im gesamten Kurs bisher Funktionen verwendet, haben aber nicht viel darüber gesprochen. Jetzt ist es an der Zeit, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

So ziemlich jedes Mal, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — aufweist, und Sie **keine** allgemeine eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do...while) oder eine [if...else-Anweisung](/de/docs/Learn/JavaScript/Building_blocks/conditionals#if...else_statements) verwenden, machen Sie Gebrauch von einer Funktion.

## Eingebaute Browserfunktionen

Wir haben im Kurs oft Funktionen verwendet, die im Browser eingebaut sind.

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

Haben wir eine _Funktion_ benutzt!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich bei Bedarf mit ihrer Funktionalität wieder vertraut zu machen.

Die JavaScript-Sprache verfügt über viele integrierte Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein ausgefallenes Wort für Ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrundbrowser-Codes auf, der größtenteils in Systemsprachen auf niedrigem Niveau wie C++ geschrieben ist, nicht in Websprachen wie JavaScript.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (siehe [diesen frühen Abschnitt in unserem Kurs](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen). Wir werden uns in einem späteren Modul eingehender mit der Verwendung von Browser-APIs befassen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt. Sie müssen noch nicht die inneren Abläufe von strukturierten JavaScript-Objekten lernen — Sie können warten, bis unser späteres Modul Ihnen alles über die inneren Abläufe von Objekten und wie Sie Ihre eigenen erstellen können, beibringt. Im Moment wollten wir nur potenzielle Verwirrungen zwischen Methode und Funktion klären — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie die verfügbaren verwandten Ressourcen im Internet betrachten.

Der von uns bisher verwendete eingebaute Code erscheint in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie die eingebauten Objekte und ihre entsprechenden Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt dahinter gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html)-Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifen-Artikel](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) haben wir eine benutzerdefinierte `draw()`-Funktion integriert, die so aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir das tun wollen, können wir einfach die Funktion mit diesem Befehl aufrufen:

```js
draw();
```

statt diesen gesamten Code jedes Mal erneut schreiben zu müssen, wenn wir ihn wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft beispielsweise die `random()`-Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir benötigten diese Funktion, da die eingebaute Browserfunktion [Math.random()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten jedoch eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie sind wahrscheinlich jetzt darauf klar, aber nur für den Fall: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem der Name der Funktion irgendwo im Code eingefügt wird, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie ist immer hoisted, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und es wird problemlos funktionieren.

## Funktionsparameter

Einige Funktionen erfordern die Angabe von **Parametern**, wenn Sie sie aufrufen — dies sind Werte, die innerhalb der Klammern der Funktion hinzugefügt werden müssen, damit sie ihre Aufgabe richtig erfüllen kann.

> [!NOTE]
> Parameter werden manchmal auch Argumente, Eigenschaften oder sogar Attribute genannt.

Zum Beispiel benötigt die eingebaute Browserfunktion [Math.random()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine Zufallszahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Browserzeichenkettenfunktion [replace()](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace) benötigt jedoch zwei Parameter — die zu findende Teilzeichenkette in der Hauptzeichenkette und die Teilzeichenkette, die diese Zeichenkette ersetzen soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, sind diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, wird die Funktion in der Regel eine Art Standardverhalten annehmen. Ein Beispiel dafür ist die `join()`-Funktion des Arrays [join()](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/join), deren Parameter optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter eingeschlossen wird, um ein Verknüpfungs-/Trennzeichen zu spezifizieren, wird standardmäßig ein Komma verwendet.

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

Dies nennt man eine **anonyme Funktion**, weil sie keinen Namen hat. Sie werden oft anonyme Funktionen sehen, wenn eine Funktion erwartet, dass sie eine andere Funktion als Parameter erhält. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht hoisted.

### Beispiel für anonyme Funktion

Angenommen, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld tippt. Dazu können Sie die Funktion [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) des Textfelds aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- den Namen des zu überwachenden Ereignisses, in diesem Fall [`keydown`](/de/docs/Web/API/Element/keydown_event)
- eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen über dieses Ereignis, einschließlich der speziellen Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion wie diese übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstatt `function(event)` zu schreiben, schreiben Sie `(event) =>`:

```js
textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn die Funktion nur einen Parameter enthält, können Sie die Klammern um den Parameter weglassen:

```js-nolint
textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});
```

Wenn Ihre Funktion schließlich nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das Schlüsselwort `return` weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im Originalarray zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jedes Element im Array der Reihe nach und übergibt es an die gegebene Funktion. Sie nimmt dann den von dieser Funktion zurückgegebenen Wert und fügt ihn einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Pfeilfunktionsäquivalent zu:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können dieselbe prägnante Syntax verwenden, um das `addEventListener`-Beispiel neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen die Verwendung von Pfeilfunktionen, da sie Ihren Code kürzer und lesbarer machen können. Um mehr zu lernen, sehen Sie sich den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) an und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Diese liegen außerhalb des Rahmens dieses einführenden Leitfadens und sind in den hier besprochenen Fällen wahrscheinlich unerheblich. Um mehr zu lernen, siehe die [Referenzdokumentation zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für Pfeilfunktionen

Hier ist ein vollständiges Arbeitsbeispiel des oben diskutierten "keydown"-Beispiels:

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

## Funktionsbereich und Konflikte

Lassen Sie uns ein wenig über den [Scope](/de/docs/Glossary/scope) sprechen — ein sehr wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die innerhalb der Funktion definierten Variablen und andere Dinge in ihrem eigenen separaten **Scope**, was bedeutet, dass sie in ihrem eigenen separaten Fach eingeschlossen sind und von Code außerhalb der Funktionen nicht zugänglich sind.

Die oberste Ebene außerhalb aller Ihrer Funktionen wird **globaler Scope** genannt. Im globalen Scope definierte Werte sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so eingerichtet — hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal möchten Sie nicht, dass Variablen von überall im Code aus zugänglich sind — externe Skripte, die Sie von anderswo aufrufen, könnten beginnen, in Ihren Code einzugreifen und Probleme verursachen, weil sie zufällig die gleichen Variablennamen wie andere Teile des Codes verwenden, was zu Konflikten führt. Dies könnte böswillig oder nur zufällig geschehen.

Angenommen, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

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

Beide Funktionen, die Sie aufrufen möchten, heißen `greeting()`, aber Sie können nur jemals auf die `greeting()`-Funktion der `first.js`-Datei zugreifen (die zweite wird ignoriert). Außerdem führt ein Fehler zu dem Versuch (in der `second.js`-Datei), einen neuen Wert der `name`-Variablen zuzuweisen – da sie bereits mit `const` deklariert wurde und nicht erneut zugewiesen werden kann.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Teile Ihres Codes in Funktionen zu sperren, vermeidet solche Probleme und wird als Best Practice angesehen.

Es ist ein wenig wie in einem Zoo. Die Löwen, Zebras, Tiger und Pinguine sind in ihren eigenen Gehegen untergebracht und haben nur Zugriff auf die Dinge in ihren Gehegen — ähnlich wie die Funktionsbereiche. Wenn sie andere Gehege betreten könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich in der eisigen, wasserreichen Domäne der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Lebensräumen in einem Zoo eingezäunt](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Scope — er hat die Schlüssel, um jedes Gehege zu betreten, Futter nachzufüllen, kranke Tiere zu versorgen, usw.

### Aktives Lernen: Spielen mit Scope

Schauen wir uns ein echtes Beispiel an, um das Scoping zu demonstrieren.

1. Erstellen Sie zunächst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html)-Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()` sowie drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Scope definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in den Entwicklertools Ihres Browsers. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Ansichtsbereich des Browsers sehen.

4. Versuchen Sie nun, die folgenden Befehle in Ihre Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, der in etwa besagt, dass "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Aufgrund des Funktionsbereichs sind `y` und `z` in den Funktionen `a()` und `b()` eingeschlossen, daher kann `output()` nicht darauf zugreifen, wenn es vom globalen Scope aus aufgerufen wird.

5. Wie sieht es jedoch aus, wenn es von einer anderen Funktion aus aufgerufen wird? Versuchen Sie `a()` und `b()` zu bearbeiten, sodass sie wie folgt aussehen:

   ![](28-2510b7a.md)

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, dann versuchen Sie, die Funktionen `a()` und `b()` aus der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Ansichtsbereich des Browsers sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb anderer Funktionen aufgerufen wird — im selben Scope wie die Variablen, die in jedem Fall definiert sind. `output()` selbst ist von überall verfügbar, da es im globalen Scope definiert ist.

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

   Sowohl der `a()`- als auch der `b()`-Aufruf sollten den Wert von `x` im Ansichtsbereich des Browsers drucken. Diese funktionieren einwandfrei, da, obwohl die `output()`-Aufrufe nicht im selben Scope wie `x` definiert sind, `x` eine globale Variable ist und daher überall im Code verfügbar ist.

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

9. Speichern und laden Sie erneut, und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Dieses Mal werfen die `a()`- und `b()`-Aufrufe diesen nervigen [ReferenceError: _Variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler in die Konsole — dies liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie versuchen auszugeben, nicht im selben Funktionsbereich sind — die Variablen sind für diese Funktionsaufrufe effektiv unsichtbar.

> [!NOTE]
> Die gleichen Scoping-Regeln gelten nicht für Schleifen- (z.B. `for() { }`) und Bedingungsblöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)-Fehler ist einer der häufigsten, dem Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie den Scope, in dem sie sich befindet.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, also möchten Sie diese vielleicht zuerst lesen, bevor Sie sie versuchen.

## Fazit

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen untersucht und den Weg für den nächsten Artikel geebnet, in dem wir praktisch werden und Ihnen die Schritte zum Erstellen Ihrer eigenen benutzerdefinierten Funktion zeigen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige fortgeschrittene Funktionen, die hier nicht enthalten sind.
- [Funktionen-Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — Referenzen zu fortgeschrittenen Konzepten

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
