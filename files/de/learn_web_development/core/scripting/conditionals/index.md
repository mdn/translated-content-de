---
title: Entscheidungen in Ihrem Code treffen — Konditionalen
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code in der Lage sein, Entscheidungen zu treffen und entsprechend auf verschiedene Eingaben zu reagieren. Zum Beispiel in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App: Wenn man sie am Morgen betrachtet, zeigt sie eine Sonnenaufgangsgrafik an; zeigt Sterne und einen Mond an, wenn es Nacht ist. In diesem Artikel werden wir erkunden, wie sogenannte Konditionalanweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was ein Konditionale ist — eine Code-Struktur, um verschiedene Codepfade abhängig von einem Testergebnis auszuführen.</li>
          <li>Implementierung von Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code>.</li>
          <li>Vergleichsoperatoren zur Erstellung von Tests verwenden.</li>
          <li>Implementieren von UND-, ODER- und NICHT-Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternäre Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen Entscheidungen ("soll ich einen Keks oder zwei essen?") bis hin zu großen Entscheidungen ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten oder nach Amerika ziehen und Astrophysik studieren?").

Konditionalanweisungen ermöglichen es uns, solche Entscheidungsfindungen in JavaScript darzustellen: von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis hin zum daraus resultierenden Ergebnis dieser Wahl (vielleicht könnte das Ergebnis "ein Keks gegessen" sein "immer noch hungrig", und das Ergebnis "zwei Kekse gegessen" könnte "voll, aber Mama hat mich geschimpft, weil ich alle Kekse gegessen habe" sein).

![Eine Cartoon-Figur, die einem Menschen ähnelt und ein Keksglas hält, das mit 'Cookies' beschriftet ist. Über dem Kopf der Figur ist ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen implizieren sie, dass die Figur versucht zu entscheiden, ob sie einen oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else-Anweisungen

Schauen wir uns die bei weitem häufigste Art von Konditionalanweisung an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else-Syntax

Die grundlegende `if...else`-Syntax sieht folgendermaßen aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Hier haben wir:

1. Das Schlüsselwort `if` gefolgt von einigen Klammern.
2. Eine zu testende Bedingung, die in den Klammern platziert ist (typischerweise "ist dieser Wert größer als dieser andere Wert?" oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir zuvor im Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Satz von geschweiften Klammern, innerhalb dessen wir etwas Code haben — dies kann beliebiger Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiterer Satz von geschweiften Klammern, innerhalb dessen wir weiteren Code haben — dies kann beliebiger Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — er sagt: "**if** die **Bedingung** gibt `true` zurück, führen Sie Code A aus, **else** führen Sie Code B aus."

Es ist zu beachten, dass Sie den `else`-Teil und den zweiten Block mit geschweiften Klammern nicht einschließen müssen — folgendes ist ebenfalls absolut legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Allerdings müssen Sie hier vorsichtig sein — in diesem Fall wird der zweite Code-Block nicht durch die Konditionalanweisung gesteuert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, aber es ist möglicherweise nicht das, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen, nicht beide, ausführen.

Als abschließender Punkt: Auch wenn es nicht empfohlen wird, können Sie manchmal sehen, dass `if...else`-Anweisungen ohne die geschweiften Klammern geschrieben werden:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, lassen Sie uns ein echtes Beispiel betrachten. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einer Aufgabe gebeten. Der Elternteil könnte sagen: "Hey Liebling! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir ein zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code ergibt, wie gezeigt, immer, dass die Variable `shoppingDone` den Wert `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es wäre unsere Aufgabe, einen Mechanismus bereitzustellen, um dem Elternteil zu ermöglichen, die Variable `shoppingDone` auf `true` zu setzen, wenn das Kind den Einkauf erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (siehe es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)).

### else if

Das letzte Beispiel bot uns zwei Auswahlmöglichkeiten oder Ergebnisse — aber was ist, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Auswahlmöglichkeiten/Ergebnisse zu Ihrem `if...else` zu verketten — mit `else if`. Jede zusätzliche Auswahl erfordert einen zusätzlichen Block, der zwischen `if () { }` und `else { }` eingefügt wird — werfen Sie einen Blick auf das folgende umfangreichere Beispiel, das Teil einer einfachen Wettervorhersageanwendung sein könnte:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100, "", "") }}

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das es uns ermöglicht, verschiedene Wetterauswahlen zu treffen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz sowohl zum {{htmlelement("select")}}- als auch zum {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Event-Listener hinzu, so dass beim Ändern seines Werts die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuellen genutzten Wert im `<select>`-Element. Anschließend verwenden wir eine Konditionalanweisung, um je nach Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, mit Ausnahme der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl, im `else { }`-Block, ist im Grunde eine "letzte Chance"-Option — der Code innerhalb wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient er dazu, den Text im Absatz zu leeren, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer sich entscheidet, die anfängliche "--Machen Sie eine Auswahl--" Platzhalteroption erneut auszuwählen.

> [!NOTE]
> Sie können [dieses Beispiel auch auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) ([sehen Sie es live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)).

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren Konditionalanweisungen zu testen. Wir haben Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) behandelt. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch oder nicht identisch mit einem anderen ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen ist.

Wir wollten einen besonderen Hinweis auf das Testen von booleschen (`true`/`false`) Werten und ein häufiges Muster geben, auf das Sie immer wieder stoßen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als Konditional getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist, oder sogar, ob er existiert (d.h. er ist nicht undefined). So zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und, zurück zu unserem vorherigen Beispiel über das Kind, das eine Aufgabe für seinen Elternteil erledigt, könnten Sie es so schreiben:

```js
let shoppingDone = false;
let childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### Verschachtelung von if...else

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere einzubauen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersageanwendung aktualisieren, um abhängig von der Temperatur eine weitere Auswahl zu zeigen:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Obwohl der gesamte Code zusammen funktioniert, arbeitet jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können Ihnen [Logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; erlaubt es Ihnen, zwei oder mehr Ausdrücke zu verketten, so dass alle von ihnen individuell `true` zurückgeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; erlaubt es Ihnen, zwei oder mehr Ausdrücke zu verketten, so dass einer oder mehrere von ihnen individuell `true` zurückgeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu geben, kann der vorherige Codeausschnitt auf diese Weise umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

So zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Sehen wir uns ein kurzes ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Art des logischen Operators, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns ihn mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Code wird, wenn die ODER-Anweisung `true` zurückgibt, der NICHT-Operator sie negieren, so dass der Gesamtausdruck `false` zurückgibt.

Sie können so viele logische Anweisungen kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code in seinem Inneren nur aus, wenn beide ODER-Anweisungen wahr sind, was bedeutet, dass die gesamte UND-Anweisung wahr sein wird:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler beim Verwenden des logischen ODER-Operators in Konditionalanweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen möchten, einmal anzugeben und dann eine Liste von Werten, die sie sein könnte, um wahr zurückzugeben, getrennt durch `||` (ODER) Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung in `if ()` immer als wahr bewertet, da 7 (oder jeder andere von Null verschiedene Wert) immer als `true` bewertet wird. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist, oder 7 wahr ist — was es immer ist". Dies ist logisch nicht das, was wir wollen! Um dies zu ermöglichen, müssen Sie auf beiden Seiten jedes OR-Operators einen vollständigen Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Aufgabe, bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne ihre Nachteile. Sie sind hauptsächlich gut für Fälle, in denen Sie ein paar Auswahlmöglichkeiten haben und jede recht viel Code zum Ausführen benötigt und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie einfach eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Anweisung abhängig von einer Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und durchsuchen dann mehrere Auswahlmöglichkeiten, bis sie eine finden, die zu diesem Wert passt, und führen den entsprechenden Code aus, der damit verbunden ist. Hier ist ein Pseudocode, um Ihnen eine Vorstellung zu geben:

```js
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
```

Hier haben wir:

1. Das Schlüsselwort `switch`, gefolgt von einem Satz Klammern.
2. Ein Ausdruck oder Wert innerhalb der Klammern.
3. Das Schlüsselwort `case`, gefolgt von einer Auswahl, die der Ausdruck/der Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt werden soll, wenn die Auswahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl dem Ausdruck/Wert entspricht, stoppt der Browser die Ausführung des Codeblocks hier und geht zu jedem Code über, der unter der switch-Anweisung erscheint.
6. So viele andere Fälle (Aufzählungspunkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau demselben Code-Muster wie einer der Fälle (Aufzählungspunkte 3–5), außer dass `default` keine Auswahl hinter sich hat, und Sie brauchen die `break`-Anweisung nicht, da danach nichts mehr im Block ausgeführt wird. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einfügen — Sie können ihn sicher weglassen, wenn es keine Chance gibt, dass der Ausdruck am Ende einem unbekannten Wert entspricht. Wenn es jedoch eine Chance gibt, müssen Sie ihn einfügen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Lassen Sie uns ein echtes Beispiel betrachten — wir werden unsere Wettervorhersageanwendung umschreiben, um eine switch-Anweisung zu verwenden:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('A_switch_example', '100%', 100, "", "") }}

> [!NOTE]
> Sie können [dieses Beispiel auch auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) ([sehen Sie es live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)).

## Ternärer Operator

Es gibt ein letztes bisschen Syntax, das wir Ihnen vorstellen möchten, bevor wir Ihnen ein paar Beispiele probieren lassen. Der [ternäre oder konditionale Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn es `true` ist, und einen anderen, wenn `false` — dies kann in einigen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Auswahlmöglichkeiten haben, die zwischen einem `true`/`false` Zustand entschieden werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Lassen Sie uns also ein Beispiel betrachten:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unserem Gast eine herzliche Geburtstagsbotschaft; wenn nicht, geben wir ihr die standardmäßige tägliche Begrüßung.

### Beispiel für einen ternären Operator

Der ternäre Operator ist nicht nur für das Setzen von Variablenwerten; Sie können auch Funktionen ausführen oder Codezeilen — alles was Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Thema-Auswähler, bei dem das Styling für die Website mit einem ternären Operator angewendet wird.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
const select = document.querySelector("select");
const html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "black"
    ? update("black", "white")
    : update("white", "black"),
);
```

{{ EmbedLiveSample('Ternary_operator_example', '100%', 300, "", "") }}

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema (schwarz oder weiß) auszuwählen, plus ein einfaches {{htmlelement("Heading_Elements", "h1")}} zur Anzeige eines Websitentitels. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt und die Textfarbe auf die zweite bereitgestellte Farbe.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener, der dazu dient, eine Funktion auszuführen, die einen ternären Operator enthält. Er beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn diese `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern schwarz und weiß aus, was bedeutet, dass wir am Ende eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß haben. Wenn sie `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern weiß und schwarz aus, was bedeutet, dass die Website-Farben invertiert werden.

> [!NOTE]
> Sie können [dieses Beispiel auch auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. In dem Code, den Sie haben:

- Ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Ein `onchange`-Ereignishandler, um zu erkennen, wann sich der gewählte Wert im `<select>`-Menü ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen von Ihnen eine Konditionalanweisung innerhalb der Funktion `createCalendar()`, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Schauen, welcher Monat ausgewählt ist (gespeichert in der Variable `choice`. Dies wird der Wert des `<select>`-Elements nach der Änderung des Werts sein, also beispielsweise "Januar").
2. Der Variable `days` die Anzahl der Tage im ausgewählten Monat zuweisen. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für dieses Beispiel ignorieren.

Hinweise:

- Ihnen wird geraten, logische ODER-Verknüpfungen zu verwenden, um mehrere Monate zu einer einzigen Bedingung zusammenzufassen; viele von ihnen teilen sich die gleiche Anzahl von Tagen.
- Denken Sie darüber nach, welche Anzahl von Tagen die häufigste ist, und verwenden Sie dies als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie auf "Lösung anzeigen", um eine Lösung zu sehen.

```html hidden
<h2>Live output</h2>
<iframe id="output" width="100%" height="600px"></iframe>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const outputIFrame = document.querySelector("#output");
const textarea = document.getElementById("code");
const initialCode = textarea.value;
let userCode = textarea.value;

const solutionCode = `const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  if (month === "February") {
    days = 28;
  } else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    days = 30;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.value = "January";
createCalendar("January");`;

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 500px; overflow: auto">
  <label for="month">Select month: </label>
  <select id="month">
    <option value="January">January</option>
    <option value="February">February</option>
    <option value="March">March</option>
    <option value="April">April</option>
    <option value="May">May</option>
    <option value="June">June</option>
    <option value="July">July</option>
    <option value="August">August</option>
    <option value="September">September</option>
    <option value="October">October</option>
    <option value="November">November</option>
    <option value="December">December</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>`;

  const outputStyle = `
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}`;
  return `
<!doctype html>
<html>
  <head>
    <style>${outputStyle}</style>
  </head>
  <body>
    ${outputBody}
    <script>${code}<${"/"}script>
  </body>
</html>`;
}

function update() {
  output.setAttribute("srcdoc", outputDocument(textarea.value));
}

update();

textarea.addEventListener("input", update);

reset.addEventListener("click", () => {
  textarea.value = initialCode;
  userEntry = textarea.value;
  solution.value = "Show solution";
  update();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    // remember the state of the user's code
    // so we can restore it
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "Hide solution";
  } else {
    textarea.value = userCode;
    solution.value = "Show solution";
  }
  update();
});

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}
```

{{ EmbedLiveSample('Active_learning_A_simple_calendar', '100%', 1210) }}

## Aktives Lernen: Mehr Farboptionen

In diesem Beispiel werden Sie das Beispiel mit dem ternären Operator, das wir zuvor gesehen haben, nehmen und den ternären Operator in eine switch-Anweisung konvertieren, um uns zu ermöglichen, mehr Optionen auf der einfachen Website anzuwenden. Schauen Sie sich das {{htmlelement("select")}}-Element an — dieses Mal werden Sie sehen, dass es nicht zwei Themenoptionen hat, sondern fünf. Sie müssen eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Es sollte die Variable `choice` als ihren Eingabewert akzeptieren.
- Für jeden Fall sollte die Auswahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, d.h. `white`, `black`, `purple`, `yellow`, oder `psychedelic`. Beachten Sie, dass die Optionswerte in Kleinbuchstaben sind, während die Optionsbezeichnungen, wie im Live-Ausgang angezeigt, großgeschrieben sind. Sie sollten die Kleinbuchstabenwerte in Ihrem Code verwenden.
- Für jeden Fall sollte die Funktion `update()` ausgeführt werden und zwei Farbwerte übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenketten sind, daher müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie auf "Lösung anzeigen", um eine Lösung zu sehen.

```html hidden
<h2>Live output</h2>
<iframe id="output" width="100%" height="350px"></iframe>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const outputIFrame = document.querySelector("#output");
const textarea = document.getElementById("code");
const initialCode = textarea.value;
let userCode = textarea.value;

const solutionCode = `const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  switch(choice) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','purple');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}`;

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 300px;">
  <label for="theme">Select theme: </label>
  <select id="theme">
    <option value="white">White</option>
    <option value="black">Black</option>
    <option value="purple">Purple</option>
    <option value="yellow">Yellow</option>
    <option value="psychedelic">Psychedelic</option>
  </select>

  <h1>This is my website</h1>
</div>`;

  return `
<!doctype html>
<html>
  <head>
  </head>
  <body>
    ${outputBody}
    <script>${code}<${"/"}script>
  </body>
</html>`;
}

function update() {
  output.setAttribute("srcdoc", outputDocument(textarea.value));
}

update();

textarea.addEventListener("input", update);

reset.addEventListener("click", () => {
  textarea.value = initialCode;
  userEntry = textarea.value;
  solution.value = "Show solution";
  update();
});

solution.addEventListener("click", () => {
  if (solution.value === "Show solution") {
    // remember the state of the user's code
    // so we can restore it
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "Hide solution";
  } else {
    textarea.value = userCode;
    solution.value = "Show solution";
  }
  update();
});

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead
textarea.onkeydown = (e) => {
  if (e.code === "Tab") {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.code === "Escape") {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}
```

{{ EmbedLiveSample('Active_learning_More_color_choices', '100%', 950) }}

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Konditionalen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Conditionals).

## Zusammenfassung

Das ist alles, was Sie im Moment über Konditionalstrukturen in JavaScript wissen müssen! Als nächstes werden wir uns das Durchlaufen von Code ansehen.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Konditionale Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz für if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz für konditionale (ternäre) Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
