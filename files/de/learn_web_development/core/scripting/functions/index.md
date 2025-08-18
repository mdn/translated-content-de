---
title: Funktionen — wiederverwendbare Codeblöcke
short-title: Functions
slug: Learn_web_development/Core/Scripting/Functions
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}

Ein weiteres wesentliches Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Stück Code, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann bei Bedarf mit einem einzigen kurzen Befehl aufzurufen — anstatt denselben Code mehrfach eintippen zu müssen. In diesem Artikel werden wir grundlegende Konzepte hinter Funktionen erkunden, wie z.B. grundlegende Syntax, wie man sie aufruft und definiert, Gültigkeitsbereiche (Scope) und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Grundverständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Der Zweck von Funktionen — die Erstellung wiederverwendbarer Codeblöcke, die überall aufgerufen werden können, wo sie benötigt werden.</li>
          <li>Funktionen werden überall in JavaScript verwendet, einige sind im Browser eingebaut und andere benutzerdefiniert.</li>
          <li>Der Unterschied zwischen Funktionen und Methoden.</li>
          <li>Aufrufen von Funktionen.</li>
          <li>Anonyme Funktionen und Pfeilfunktionen.</li>
          <li>Definieren von Funktionsparametern, Weitergabe von Argumenten an Funktionsaufrufe.</li>
          <li>Globaler Gültigkeitsbereich und Funktions-/Block-Gültigkeitsbereich.</li>
          <li>Verständnis, was Callback-Funktionen sind.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie überall Funktionen. Tatsächlich haben wir während des gesamten Kurses bisher Funktionen verwendet; wir haben nur nicht viel darüber gesprochen. Jetzt ist jedoch die Zeit gekommen, dass wir anfangen, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

Fast immer, wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält, und Sie **nicht** eine gängige eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop), [while oder do...while-Schleife](/de/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while), oder [if...else-Anweisung](/de/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_statements) verwenden, nutzen Sie eine Funktion.

## Eingebaute Browserfunktionen

Wir haben in diesem Kurs oft auf im Browser eingebaute Funktionen zurückgegriffen.

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

haben wir eine _Funktion_ verwendet!

> [!NOTE]
> Fühlen Sie sich frei, diese Zeilen in die JavaScript-Konsole Ihres Browsers einzugeben, um sich mit deren Funktionalität vertraut zu machen, falls nötig.

Die JavaScript-Sprache bietet viele eingebaute Funktionen, die es Ihnen ermöglichen, nützliche Dinge zu tun, ohne all diesen Code selbst schreiben zu müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion _aufrufen_ (ein schickes Wort für start, oder ausführen), nicht in JavaScript geschrieben sein — viele dieser Funktionen rufen Teile des zugrundeliegenden Browser-Codes auf, der größtenteils in systemnahen Sprachen wie C++ und nicht in Websprachen wie JavaScript geschrieben ist.

Bedenken Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil von Browser-APIs definiert, die auf der Standardsprache aufbauen, um noch mehr Funktionalität bereitzustellen (schauen Sie sich diesen [frühen Abschnitt unseres Kurses](/de/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#so_what_can_it_really_do) für weitere Beschreibungen an). Wir werden im Detail auf die Nutzung von Browser-APIs in einem späteren Modul eingehen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt; Sie lernen in diesem Modul später über Objekte. Für jetzt wollten wir einfach etwaige Verwirrung zwischen Methode und Funktion klären — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web ansehen.

Der bisher von uns verwendete eingebaute Code erscheint in beiden Formen: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und ihrer entsprechenden Methoden in unserem [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben im Kurs bisher auch viele **benutzerdefinierte Funktionen** gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern direkt dahinter gesehen haben, haben Sie eine benutzerdefinierte Funktion verwendet. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Schleifen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Loops) haben wir eine benutzerdefinierte `draw()`-Funktion eingeschlossen, die so aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}} Elements. Jedes Mal, wenn wir das machen wollen, können wir einfach die Funktion mit diesem Aufruf starten:

```js
draw();
```

anstatt den ganzen Code jedes Mal neu schreiben zu müssen, wenn wir das wiederholen wollen. Funktionen können beliebigen Code enthalten — Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft beispielsweise die `random()` Funktion dreimal auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute `Math.random()` Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Funktionen aufrufen

Sie sind darüber wahrscheinlich schon im Klaren, aber nur um sicherzugehen: Um eine Funktion tatsächlich zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem Sie den Namen der Funktion irgendwo im Code einfügen, gefolgt von Klammern.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> [!NOTE]
> Diese Form der Funktionserstellung ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer nach oben verschoben (hoisted), sodass Sie die Funktion oberhalb der Funktionsdefinition aufrufen können und sie trotzdem funktioniert.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** angegeben werden, wenn Sie sie aufrufen — dies sind Werte, die in die Klammern der Funktion aufgenommen werden müssen, damit diese ihre Aufgabe richtig ausführen kann.

> [!NOTE]
> Parameter werden manchmal auch als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Zum Beispiel erfordert die eingebaute `Math.random()` Funktion des Browsers keine Parameter. Beim Aufrufen gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute Zeichenkettenfunktion `replace()` des Browsers benötigt dagegen zwei Parameter — den zu findenden Teilstring in der Hauptzeichenkette und den Teilstring, durch den dieser String ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden sie durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht angeben. Wenn Sie dies nicht tun, nimmt die Funktion im Allgemeinen irgendeine Art von Standardverhalten an. Ein Beispiel ist, dass der Parameter der `join()` Array-Funktion optional ist:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
```

Wenn kein Parameter zur Angabe eines Trennzeichens/Zeichens eingeschlossen ist, wird standardmäßig ein Komma verwendet.

### Standardparameter

Wenn Sie eine Funktion schreiben und optionale Parameter unterstützen möchten, können Sie Standardwerte angeben, indem Sie nach dem Namen des Parameters `=` hinzufügen, gefolgt vom Standardwert:

```js
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}

hello("Ari"); // Hello Ari!
hello(); // Hello Chris!
```

## Anonyme Funktionen und Pfeilfunktionen

Bisher haben wir eine Funktion folgendermaßen erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, weil sie keinen Namen hat. Sie werden häufig anonyme Funktionen sehen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird die Funktionsparameter häufig als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Funktionsgenerierung ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht nach oben verschoben (hoisted).

### Beispiel für eine anonyme Funktion

Zum Beispiel, nehmen wir an, Sie möchten Code ausführen, wenn der Benutzer in ein Textfeld schreibt. Dazu können Sie die `addEventListener()`-Funktion des Textfeldes aufrufen. Diese Funktion erwartet, dass Sie ihr (mindestens) zwei Parameter übergeben:

- den Namen des zu hörenden Ereignisses, das in diesem Fall `keydown` ist
- eine Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, wird der Browser die von Ihnen bereitgestellte Funktion aufrufen und einen Parameter übergeben, der Informationen über dieses Ereignis enthält, einschließlich der speziellen Taste, die der Benutzer gedrückt hat:

```js
function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);
```

Anstelle einer separaten `logKey()`-Funktion können Sie eine anonyme Funktion in `addEventListener()` übergeben:

```js
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
```

### Pfeilfunktionen

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstatt `function(event)`, schreiben Sie `(event) =>`:

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

Schließlich, wenn Ihre Funktion nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das `return`-Schlüsselwort weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die `map()`-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die `map()`-Methode nimmt jeden Eintrag im Array der Reihe nach, übergibt ihn an die gegebene Funktion und fügt den von dieser Funktion zurückgegebenen Wert einem neuen Array hinzu.

Im obigen Beispiel ist `item => item * 2` das Pfeilfunktion-Äquivalent zu:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können die gleiche prägnante Syntax verwenden, um das `addEventListener`-Beispiel neu zu schreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit von der Callback-Funktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und lesbarer machen können. Um mehr darüber zu erfahren, sehen Sie sich den [Abschnitt zu Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) an.

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Rahmens dieses Einführungstutorials und werden wahrscheinlich in den hier besprochenen Fällen keinen Unterschied machen. Um mehr zu erfahren, siehe die [Pfeilfunktions-Referenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Pfeilfunktion Live-Beispiel

Hier ist ein vollständiges, funktionierendes Beispiel des oben besprochenen "keydown"-Beispiels:

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

## Funktionsumfang und Konflikte

Lassen Sie uns ein wenig über {{Glossary("scope", "Gültigkeitsbereich")}} sprechen — ein sehr wichtiges Konzept im Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die in der Funktion definierten Variablen und andere Dinge in ihrem eigenen separaten **Gültigkeitsbereich**, was bedeutet, dass sie in ihren eigenen separaten Abteilen eingesperrt sind und von Code außerhalb der Funktionen nicht zugänglich sind.

Die obere Ebene außerhalb all Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Im globalen Gültigkeitsbereich definierte Werte sind überall im Code zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut — aber hauptsächlich aus Sicherheits- und Organisationsgründen. Manchmal sollen Variablen nicht von überall im Code zugänglich sein. Externe Skripte, die Sie von anderswo aufrufen, könnten anfangen, Ihren Code zu manipulieren und Probleme zu verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden und Konflikte verursachen. Dies könnte böswillig geschehen oder einfach aus Versehen.

Zum Beispiel sagen wir, Sie haben eine HTML-Datei, die auf zwei externe JavaScript-Dateien verweist, und beide haben eine Variable und eine Funktion, die denselben Namen verwenden:

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

Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions) an). Laden Sie es in einem separaten Browser-Tab, bevor Sie die Erklärung unten lesen.

- Wenn das Beispiel in einem Browser gerendert wird, sehen Sie zuerst ein Alert-Fenster, das `Hello Chris: welcome to our company.` anzeigt, was bedeutet, dass die `greeting()`-Funktion, die im ersten Skriptdatei definiert ist, durch den `greeting()` Aufruf im internen Skript aufgerufen wurde.

- Das zweite Skript wird jedoch gar nicht geladen und ausgeführt, und eine Fehler wird in die Konsole geschrieben: `Uncaught SyntaxError: Identifier 'name' has already been declared`. Dies liegt daran, dass die `name` Konstante bereits in `first.js` deklariert ist, und dieselbe Konstante im gleichen Gültigkeitsbereich nicht zweimal deklariert werden kann. Da das zweite Skript nicht geladen wurde, ist die `greeting()`-Funktion von `second.js` nicht verfügbar, um aufgerufen zu werden.

- Wenn wir die Zeile `const name = "Zaptec";` aus `second.js` entfernen und die Seite neu laden, würden beide Skripte ausgeführt. Das Alert-Fenster würde nun sagen `Our company is called Chris.` Funktionen _können_ neu deklariert werden, und die letzte Deklaration in der Quelldatei wird verwendet. Die vorherigen Deklarationen werden effektiv überschrieben.

Das Halten von Teilen Ihres Codes in Funktionen gesperrt, vermeidet solche Probleme und wird als Best Practice betrachtet.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen im Inneren — genauso wie die Funktionsbereiche. Wenn sie in andere Gehege gelangen könnten, würden Probleme auftreten. Im besten Fall würden sich verschiedene Tiere in fremden Lebensräumen sehr unwohl fühlen — ein Löwe oder Tiger würde sich im kühlen, feuchten Lebensraum der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere, die in ihren jeweiligen Lebensräumen in einem Zoo eingeschlossen sind](mdn-mozilla-zoo.png)

Der Zoowärter ist wie der globale Gültigkeitsbereich — er hat die Schlüssel, um Zugang zu jedem Gehege zu bekommen, Futter aufzufüllen, kranke Tiere zu pflegen, etc.

### Spielen mit dem Gültigkeitsbereich

Schauen wir uns ein reales Beispiel an, um den Gültigkeitsbereich zu demonstrieren.

1. Erstellen Sie zunächst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Dies enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei in den Funktionen und eine im globalen Gültigkeitsbereich definiert sind. Außerdem enthält es eine dritte Funktion namens `output()`, die einen einzigen Parameter nimmt und ihn in einem Absatz auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variablen `x` im Browser-Fenster ausgedruckt sehen.

4. Versuchen Sie nun, das Folgende in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, ähnlich dem "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsbereichs (Scope): `y` und `z` sind in den `a()` und `b()` Funktionen eingeschlossen, also kann `output()` nicht auf sie zugreifen, wenn es aus dem globalen Bereich aufgerufen wird.

5. Aber was passiert, wenn es innerhalb einer anderen Funktion aufgerufen wird? Versuchen Sie, `a()` und `b()` so zu bearbeiten, dass sie wie folgt aussehen:

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

   Speichern Sie den Code und laden Sie ihn in Ihrem Browser neu, dann versuchen Sie, die Funktionen `a()` und `b()` von der JavaScript-Konsole aus aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die Werte `y` und `z` im Browser-Fenster angezeigt sehen. Dies funktioniert einwandfrei, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird, im gleichen Gültigkeitsbereich, in dem die Variablen definiert sind, die sie ausgibt. `output()` selbst ist von überall verfügbar, da es im globalen Gültigkeitsbereich definiert ist.

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

7. Speichern Sie den Code und laden Sie ihn erneut, und versuchen Sie es erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der `a()` als auch der `b()` Aufruf sollten den Wert von x im Browser-Fenster ausdrucken. Diese funktionieren einwandfrei, da die `output()`-Aufrufe nicht im gleichen Gültigkeitsbereich wie `x` definiert sind, `x` jedoch eine globale Variable ist und daher überall im Code verfügbar ist.

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

9. Speichern Sie den Code und laden Sie ihn erneut, und versuchen Sie es in Ihrer JavaScript-Konsole erneut:

   ```js
   a();
   b();
   ```

   Dieses Mal werden die `a()` und `b()` Aufrufe den lästigen [ReferenceError: _variablenname_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole werfen — dies liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie ausgeben möchten, nicht im gleichen Funktionsbereich (Scope) liegen — die Variablen sind für diese Funktionsaufrufe im Grunde unsichtbar.

> [!NOTE]
> Dieselben Gültigkeitsbereichsregeln gelten nicht für Schleifen (z.B. `for() { }`) und bedingte Blöcke (z.B. `if () { }`) — sie sehen sehr ähnlich aus, aber sie sind nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der Fehler [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) ist einer der häufigsten, denen Sie begegnen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variable definiert haben, überprüfen Sie, in welchem Gültigkeitsbereich (Scope) sie sich befindet.

## Zusammenfassung

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und bereitet den Weg für den nächsten Artikel, in dem wir praktisch werden und Sie durch die Schritte führen, Ihre eigene benutzerdefinierte Funktion zu erstellen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Funktionen-Referenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Verwendung von Funktionen, um weniger Code zu schreiben](https://scrimba.com/the-frontend-developer-career-path-c0j/~04g?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> - Eine interaktive Lektion, die eine nützliche Einführung in Funktionen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Loops","Learn_web_development/Core/Scripting/Build_your_own_function", "Learn_web_development/Core/Scripting")}}
