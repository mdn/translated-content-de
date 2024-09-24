---
title: Funktionen — wiederverwendbare Codeblöcke
slug: Learn/JavaScript/Building_blocks/Functions
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

Ein weiteres wichtiges Konzept beim Programmieren sind **Funktionen**, die es Ihnen ermöglichen, ein Codefragment, das eine einzelne Aufgabe ausführt, in einem definierten Block zu speichern und diesen Code dann bei Bedarf mit einem einzigen kurzen Befehl aufzurufen – anstatt denselben Code mehrfach eingeben zu müssen. In diesem Artikel werden wir die grundlegenden Konzepte hinter Funktionen untersuchen, wie z. B. Grundsyntax, wie man sie aufruft und definiert, Gültigkeitsbereich und Parameter.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >Einführung in JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die grundlegenden Konzepte hinter JavaScript-Funktionen zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Wo finde ich Funktionen?

In JavaScript finden Sie Funktionen überall. Tatsächlich haben wir Funktionen bereits während des gesamten Kurses verwendet; wir haben bisher nur nicht viel darüber gesprochen. Jetzt ist es an der Zeit, explizit über Funktionen zu sprechen und ihre Syntax wirklich zu erkunden.

Immer wenn Sie eine JavaScript-Struktur verwenden, die ein Paar Klammern — `()` — enthält, und dabei **keine** übliche eingebaute Sprachstruktur wie eine [for-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#the_standard_for_loop), [while- oder do...while-Schleife](/de/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do...while) oder [if...else-Anweisung](/de/docs/Learn/JavaScript/Building_blocks/conditionals#if...else_statements) benutzen, verwenden Sie eine Funktion.

## Eingebaute Browserfunktionen

In diesem Kurs haben wir oft auf Funktionen zurückgegriffen, die im Browser eingebaut sind.

Jedes Mal, wenn wir einen Textstring manipulierten, z. B.:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// die replace() String-Funktion nimmt einen Quellstring,
// und einen Zielstring und ersetzt den Quellstring,
// mit dem Zielstring und gibt den neu gebildeten String zurück
```

Oder jedes Mal, wenn wir ein Array manipulierten:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// die join()-Funktion nimmt ein Array, fügt
// alle Array-Elemente zu einem einzigen
// String zusammen und gibt diesen neuen String zurück
```

Oder jedes Mal, wenn wir eine Zufallszahl generierten:

```js
const myNumber = Math.random();
// die random()-Funktion generiert eine Zufallszahl zwischen
// 0 und bis, aber nicht einschließlich 1, und gibt diese Zahl zurück
```

Wir benutzten eine _Funktion_!

> [!NOTE]
> Sie können diese Zeilen gerne in die JavaScript-Konsole Ihres Browsers eingeben, um sich bei Bedarf mit deren Funktionalität vertraut zu machen.

Die JavaScript-Sprache verfügt über viele eingebaute Funktionen, die Ihnen nützliche Aufgaben ermöglichen, ohne dass Sie den gesamten Code selbst schreiben müssen. Tatsächlich könnte ein Teil des Codes, den Sie aufrufen, wenn Sie eine eingebaute Browserfunktion **aufrufen** (ein anderes Wort für ausführen), nicht in JavaScript geschrieben werden — viele dieser Funktionen rufen Teile des Hintergrund-Browser-Codes auf, der größtenteils in Systemsprachen niedriger Ebene wie C++ geschrieben ist und nicht in Websprachen wie JavaScript.

Beachten Sie, dass einige eingebaute Browserfunktionen nicht Teil der Kern-JavaScript-Sprache sind — einige sind als Teil der Browser-APIs definiert, die auf der Standard-Sprache aufbauen, um noch mehr Funktionalität zu bieten (siehe [diesen frühen Abschnitt unseres Kurses](/de/docs/Learn/JavaScript/First_steps/What_is_JavaScript#so_what_can_it_really_do) für mehr Beschreibungen). Wir werden in einem späteren Modul genauer auf die Nutzung von Browser-APIs eingehen.

## Funktionen versus Methoden

**Funktionen**, die Teil von Objekten sind, werden **Methoden** genannt. Sie müssen noch nicht über die internen Funktionsweisen von strukturierten JavaScript-Objekten lernen — das können Sie später in unserem Modul tun, das Ihnen alles über die inneren Funktionsweisen von Objekten beibringt und wie Sie Ihre eigenen erstellen können. Im Moment wollten wir nur mögliche Verwirrungen über Methode versus Funktion klären — Sie werden wahrscheinlich auf beide Begriffe stoßen, wenn Sie sich die verfügbaren verwandten Ressourcen im Web ansehen.

Der eingebaute Code, den wir bisher verwendet haben, liegt in beiden Formen vor: **Funktionen** und **Methoden.** Sie können die vollständige Liste der eingebauten Funktionen sowie der eingebauten Objekte und deren entsprechende Methoden [hier](/de/docs/Web/JavaScript/Reference/Global_Objects) einsehen.

Sie haben auch viele **benutzerdefinierte Funktionen** im Kurs gesehen — Funktionen, die in Ihrem Code definiert sind, nicht im Browser. Jedes Mal, wenn Sie einen benutzerdefinierten Namen mit Klammern unmittelbar danach sahen, verwendeten Sie eine benutzerdefinierte Funktion. In unserem [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) Beispiel (siehe auch den vollständigen [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/loops/random-canvas-circles.html)) aus unserem [Artikel über Schleifen](/de/docs/Learn/JavaScript/Building_blocks/Looping_code) haben wir eine benutzerdefinierte `draw()`-Funktion eingefügt, die folgendermaßen aussah:

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

Diese Funktion zeichnet 100 zufällige Kreise innerhalb eines {{htmlelement("canvas")}}-Elements. Jedes Mal, wenn wir das machen wollen, können wir die Funktion einfach so aufrufen:

```js
draw();
```

anstatt diesen ganzen Code jedes Mal wiederholen zu müssen. Funktionen können beliebigen Code enthalten – Sie können sogar andere Funktionen innerhalb von Funktionen aufrufen. Die obige Funktion ruft zum Beispiel dreimal die `random()`-Funktion auf, die durch den folgenden Code definiert ist:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Wir brauchten diese Funktion, weil die eingebaute [Math.random()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers nur eine zufällige Dezimalzahl zwischen 0 und 1 generiert. Wir wollten eine zufällige ganze Zahl zwischen 0 und einer angegebenen Zahl.

## Aufrufen von Funktionen

Sie haben dies wahrscheinlich bis jetzt verstanden, aber nur für den Fall: Um tatsächlich eine Funktion zu verwenden, nachdem sie definiert wurde, müssen Sie sie ausführen — oder aufrufen. Dies geschieht, indem der Name der Funktion irgendwo im Code gefolgt von runden Klammern angegeben wird.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// ruft die Funktion einmal auf
```

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsdeklaration_ bekannt. Sie wird immer angehoben, sodass Sie die Funktion über der Funktionsdefinition aufrufen können und es wird gut funktionieren.

## Funktionsparameter

Einige Funktionen erfordern, dass **Parameter** angegeben werden, wenn Sie sie aufrufen – dies sind Werte, die in den Klammern der Funktion enthalten sein müssen, damit sie ihre Aufgabe ordnungsgemäß erfüllen kann.

> [!NOTE]
> Parameter werden manchmal als Argumente, Eigenschaften oder sogar Attribute bezeichnet.

Zum Beispiel erfordert die eingebaute [Math.random()](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random)-Funktion des Browsers keine Parameter. Wenn sie aufgerufen wird, gibt sie immer eine zufällige Zahl zwischen 0 und 1 zurück:

```js
const myNumber = Math.random();
```

Die eingebaute [replace()](/de/docs/Web/JavaScript/Reference/Global_Objects/String/replace)-Funktion für Strings des Browsers benötigt jedoch zwei Parameter — die zu findende Teilzeichenkette im Hauptstring und die Teilzeichenkette, durch die dieser String ersetzt werden soll:

```js
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
```

> [!NOTE]
> Wenn Sie mehrere Parameter angeben müssen, werden diese durch Kommas getrennt.

### Optionale Parameter

Manchmal sind Parameter optional — Sie müssen sie nicht zwingend angeben. Wenn Sie dies nicht tun, übernimmt die Funktion im Allgemeinen eine Art Standardverhalten. Zum Beispiel ist der Parameter der [join()]-Funktion des Arrays optional:

```js
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// gibt 'I love chocolate frogs' zurück

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// gibt 'I,love,chocolate,frogs' zurück
```

Wenn kein Parameter enthalten ist, um ein Verbindungs-/Trennzeichen anzugeben, wird standardmäßig ein Komma verwendet.

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

Bisher haben wir eine Funktion auf diese Weise erstellt:

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

Dies wird als **anonyme Funktion** bezeichnet, da sie keinen Namen hat. Sie werden häufig auf anonyme Funktionen stoßen, wenn eine Funktion erwartet, eine andere Funktion als Parameter zu erhalten. In diesem Fall wird der Funktionsparameter oft als anonyme Funktion übergeben.

> [!NOTE]
> Diese Form der Erstellung einer Funktion ist auch als _Funktionsausdruck_ bekannt. Im Gegensatz zu Funktionsdeklarationen werden Funktionsausdrücke nicht angehoben.

### Beispiel für eine anonyme Funktion

Wenn Sie beispielsweise möchten, dass ein Code ausgeführt wird, wenn der Benutzer in ein Textfeld eingibt, können Sie die {{domxref("EventTarget/addEventListener", "addEventListener()")}}-Funktion des Textfelds aufrufen. Diese Funktion erwartet, dass Sie (mindestens) zwei Parameter übergeben:

- den Namen des zu überwachenden Ereignisses, in diesem Fall {{domxref("Element/keydown_event", "keydown")}}
- eine Funktion, die ausgeführt wird, wenn das Ereignis eintritt.

Wenn der Benutzer eine Taste drückt, ruft der Browser die von Ihnen bereitgestellte Funktion auf und übergibt ihr einen Parameter mit Informationen über dieses Ereignis, einschließlich der jeweiligen Taste, die der Benutzer gedrückt hat:

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

Wenn Sie eine anonyme Funktion auf diese Weise übergeben, gibt es eine alternative Form, die Sie verwenden können, die als **Pfeilfunktion** bezeichnet wird. Anstelle von `function(event)` schreiben Sie `(event) =>`:

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

Wenn Ihre Funktion schließlich nur eine Zeile enthält, die eine `return`-Anweisung ist, können Sie auch die geschweiften Klammern und das Schlüsselwort `return` weglassen und den Ausdruck implizit zurückgeben. Im folgenden Beispiel verwenden wir die {{jsxref("Array.prototype.map()","map()")}}-Methode von `Array`, um jeden Wert im ursprünglichen Array zu verdoppeln:

```js-nolint
const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]
```

Die Methode `map()` nimmt jedes Element im Array der Reihe nach und übergibt es der angegebenen Funktion. Sie nimmt dann den von dieser Funktion zurückgegebenen Wert und fügt ihn in ein neues Array ein.

Im obigen Beispiel entspricht `item => item * 2` der Pfeilfunktionäquivalent zu:

```js
function doubleItem(item) {
  return item * 2;
}
```

Sie können dieselbe prägnante Syntax verwenden, um das `addEventListener`-Beispiel umzuschreiben.

```js
textBox.addEventListener("keydown", (event) =>
  console.log(`You pressed "${event.key}".`),
);
```

In diesem Fall wird der Wert von `console.log()`, der `undefined` ist, implizit aus der Rückruffunktion zurückgegeben.

Wir empfehlen, Pfeilfunktionen zu verwenden, da sie Ihren Code kürzer und übersichtlicher machen können. Um mehr zu lernen, siehe den [Abschnitt über Pfeilfunktionen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#arrow_functions) und unsere [Referenzseite zu Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

> [!NOTE]
> Es gibt einige subtile Unterschiede zwischen Pfeilfunktionen und normalen Funktionen. Sie liegen außerhalb des Bereichs dieses Einführungshandbuchs und sind in den hier besprochenen Fällen wahrscheinlich nicht von Bedeutung. Um mehr zu lernen, siehe die [Pfeilfunktionsreferenzdokumentation](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Live-Beispiel für eine Pfeilfunktion

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

Das Ergebnis - versuchen Sie, in das Textfeld einzugeben und sehen Sie die Ausgabe:

{{EmbedLiveSample("Arrow function live sample", 100, 100)}}

## Funktionsbereich und Konflikte

Lassen Sie uns ein wenig über den {{glossary("Gültigkeitsbereich")}} sprechen – ein sehr wichtiges Konzept beim Umgang mit Funktionen. Wenn Sie eine Funktion erstellen, sind die Variablen und andere Dinge, die innerhalb der Funktion definiert sind, in ihrem eigenen separaten **Gültigkeitsbereich**, was bedeutet, dass sie in ihren eigenen separaten Fächern verschlossen sind und von Code außerhalb der Funktionen nicht erreichbar sind.

Der oberste Bereich außerhalb all Ihrer Funktionen wird als **globaler Gültigkeitsbereich** bezeichnet. Im globalen Gültigkeitsbereich definierte Werte sind von überall im Code aus zugänglich.

JavaScript ist aus verschiedenen Gründen so aufgebaut – hauptsächlich wegen Sicherheit und Organisation. Manchmal möchten Sie nicht, dass Variablen von überall im Code zugänglich sind – externe Skripte, die Sie von anderswo einbinden, könnten anfangen, mit Ihrem Code herumzuspielen und Probleme verursachen, weil sie zufällig dieselben Variablennamen wie andere Teile des Codes verwenden und Konflikte verursachen. Dies könnte absichtlich oder nur aus Versehen geschehen.

Zum Beispiel, sagen wir, Sie haben eine HTML-Datei, die zwei externe JavaScript-Dateien aufruft, und beide haben eine Variable und eine Funktion definiert, die denselben Namen verwenden:

```html
<!-- Ausschnitt aus meinem HTML -->
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
  alert(`Hallo ${name}: willkommen in unserem Unternehmen.`);
}
```

```js
// second.js
const name = "Zaptec";
function greeting() {
  alert(`Unser Unternehmen heißt ${name}.`);
}
```

Beide Funktionen, die Sie aufrufen möchten, heißen `greeting()`, aber Sie können immer nur die `greeting()`-Funktion der Datei `first.js` aufrufen (die zweite wird ignoriert). Darüber hinaus ergibt sich ein Fehler beim Versuch (in der Datei `second.js`), der Variablen `name` einen neuen Wert zuzuweisen – weil sie bereits mit `const` deklariert wurde und daher nicht neu zugewiesen werden kann.

> [!NOTE]
> Sie können dieses Beispiel [live auf GitHub ausführen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/javascript/building-blocks/functions)).

Indem Sie Teile Ihres Codes in Funktionen einschließen, vermeiden Sie solche Probleme, und dies gilt als bewährte Praxis.

Es ist ein bisschen wie ein Zoo. Die Löwen, Zebras, Tiger und Pinguine werden in ihren eigenen Gehegen gehalten und haben nur Zugang zu den Dingen innerhalb ihrer Gehege – ähnlich wie bei den Funktionsbereichen. Wenn sie Zugang zu anderen Gehegen hätten, würden Probleme entstehen. Im besten Fall würden sich verschiedene Tiere in ungewohnten Lebensräumen sehr unwohl fühlen – ein Löwe oder Tiger würde sich im eisigen, nassen Bereich der Pinguine schrecklich fühlen. Im schlimmsten Fall könnten die Löwen und Tiger versuchen, die Pinguine zu fressen!

![Vier verschiedene Tiere in ihren jeweiligen Gehegen in einem Zoo](mdn-mozilla-zoo.png)

Der Zoodirektor ist wie der globale Gültigkeitsbereich – er hat die Schlüssel, um auf jedes Gehege zuzugreifen, um die Fütterung sicherzustellen, kranke Tiere zu pflegen usw.

### Aktiv lernen: Spielen mit dem Gültigkeitsbereich

Schauen Sie sich ein echtes Beispiel an, um den Gültigkeitsbereich zu demonstrieren.

1. Machen Sie zuerst eine lokale Kopie unseres [function-scope.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-scope.html) Beispiels. Dieses enthält zwei Funktionen namens `a()` und `b()`, und drei Variablen — `x`, `y` und `z` — von denen zwei innerhalb der Funktionen und eine im globalen Bereich definiert sind. Es enthält auch eine dritte Funktion namens `output()`, die einen einzelnen Parameter nimmt und ihn in einem Paragraphen auf der Seite ausgibt.
2. Öffnen Sie das Beispiel in einem Browser und in Ihrem Texteditor.
3. Öffnen Sie die JavaScript-Konsole in Ihren Browser-Entwicklertools. Geben Sie in der JavaScript-Konsole den folgenden Befehl ein:

   ```js
   output(x);
   ```

   Sie sollten den Wert der Variable `x` im Anzeigefeld sehen.

4. Versuchen Sie nun, Folgendes in Ihrer Konsole einzugeben:

   ```js
   output(y);
   output(z);
   ```

   Beide sollten einen Fehler in die Konsole werfen, etwa "[ReferenceError: y is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)". Warum ist das so? Wegen des Funktionsumfangs sind `y` und `z` in den Funktionen `a()` und `b()` eingeschlossen, daher kann `output()` nicht auf sie zugreifen, wenn es aus dem globalen Bereich aufgerufen wird.

5. Was aber, wenn sie von innerhalb einer anderen Funktion aufgerufen werden? Versuchen Sie, `a()` und `b()` so zu bearbeiten:

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

   Speichern Sie den Code, laden Sie ihn im Browser neu und versuchen Sie, die `a()` und `b()` Funktionen in der JavaScript-Konsole aufzurufen:

   ```js
   a();
   b();
   ```

   Sie sollten die `y`- und `z`-Werte im Anzeigefeld sehen. Das funktioniert gut, da die `output()`-Funktion innerhalb der anderen Funktionen aufgerufen wird – im gleichen Gültigkeitsbereich, in dem die Variablen definiert sind. `output()` selbst ist überall verfügbar, da es im globalen Bereich definiert ist.

6. Nun versuchen Sie, Ihren Code so zu aktualisieren:

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

7. Speichern und laden Sie erneut und versuchen Sie dies erneut in Ihrer JavaScript-Konsole:

   ```js
   a();
   b();
   ```

   Sowohl der Aufruf von `a()` als auch `b()` sollte den Wert von x im Anzeigefeld ausgeben. Dies funktioniert gut, weil, obwohl die `output()`-Aufrufe nicht im gleichen Gültigkeitsbereich wie `x` sind, `x` eine globale Variable ist und daher überall verfügbar ist.

8. Schließlich versuchen Sie, Ihren Code so zu aktualisieren:

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

   Dieses Mal werfen die `a()`- und `b()`-Aufrufe den lästigen [ReferenceError: _variable name_ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler in die Konsole — das liegt daran, dass die `output()`-Aufrufe und die Variablen, die sie ausgeben sollen, nicht in den gleichen Funktionsbereichen liegen — die Variablen sind für diese Funktionsaufrufe im Wesentlichen unsichtbar.

> [!NOTE]
> Dieselben Gültigkeitsbereichsregeln gelten nicht für Schleifen- (z. B. `for() { }`) und Bedingungsblöcke (z. B. `if () { }`) — sie sehen sehr ähnlich aus, sind aber nicht dasselbe! Achten Sie darauf, diese nicht zu verwechseln.

> [!NOTE]
> Der [ReferenceError: "x" is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined) Fehler ist einer der häufigsten, auf den Sie stoßen werden. Wenn Sie diesen Fehler erhalten und sicher sind, dass Sie die betreffende Variablen definiert haben, prüfen Sie, in welchem Gültigkeitsbereich sie sich befindet.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an das Wichtigste erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die in den nächsten beiden Artikeln behandelt werden, also möchten Sie sie vielleicht zuerst lesen, bevor Sie sie versuchen.

## Fazit

Dieser Artikel hat die grundlegenden Konzepte hinter Funktionen erkundet und bereitet den Weg für den nächsten, in dem wir praxisnah durch die Schritte zum Aufbau Ihrer eigenen benutzerdefinierten Funktion führen.

## Siehe auch

- [Detaillierter Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions) — behandelt einige erweiterte Funktionen, die hier nicht enthalten sind.
- [Funktionsreferenz](/de/docs/Web/JavaScript/Reference/Functions)
- [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters), [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — Verweis auf fortgeschrittene Konzepte

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
