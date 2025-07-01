---
title: Entscheidungen in Ihrem Code treffen — Bedingungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und je nach verschiedenen Eingaben entsprechend handeln. Zum Beispiel: In einem Spiel, wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn sie morgens betrachtet wird, wird ein Sonnenaufgangsbild angezeigt; Sterne und ein Mond werden angezeigt, wenn es Nacht ist. In diesem Artikel werden wir erforschen, wie sogenannte Bedingungsanweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Kenntnisse der JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was eine Bedingung ist — eine Code-Struktur, um je nach Testergebnis unterschiedliche Code-Pfade auszuführen.</li>
          <li>Implementierung von Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code>.</li>
          <li>Verwendung von Vergleichsoperatoren zur Erstellung von Tests.</li>
          <li>Implementierung von UND, ODER und NICHT Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternäre Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen Keks essen oder zwei?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten, oder soll ich nach Amerika ziehen und Astrophysik studieren?")

Bedingungsanweisungen ermöglichen es uns, solche Entscheidungen in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis hin zum Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" sein "war immer noch hungrig", und das Ergebnis von "zwei Kekse gegessen" könnte sein "fühlte sich satt, aber Mama schimpfte mich, weil ich alle Kekse gegessen habe").

![Eine Cartoonfigur, die einer Person gleicht und ein Keksgefäß mit der Aufschrift 'Cookies' hält. Über dem Kopf der Figur befindet sich ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur zu entscheiden versucht, ob sie einen Keks oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else-Anweisungen

Schauen wir uns die mit Abstand häufigste Art von Bedingungsanweisung an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else Syntax

Grundlegende `if...else` Syntax sieht so aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Hier haben wir:

1. Das Schlüsselwort `if`, gefolgt von einigen Klammern.
2. Eine zu testende Bedingung, die sich in den Klammern befindet (typischerweise "ist dieser Wert größer als jener andere Wert?", oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir bereits früher in diesem Modul besprochen haben, und ergibt `true` oder `false`.
3. Ein Satz geschweifter Klammern, in dem wir etwas Code haben — das kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` ergibt.
4. Das Schlüsselwort `else`.
5. Ein weiterer Satz geschweifter Klammern, in dem wir noch mehr Code haben — das kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschlich lesbar — er sagt "**if** die **Bedingung** ergibt `true`, führe Code A aus, **sonst** führe Code B aus"

Sie sollten beachten, dass Sie das `else` und den zweiten Satz geschweifter Klammern nicht einschließen müssen — das Folgende ist auch ein rechtmäßiger Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Sie müssen hier jedoch vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der Bedingungsanweisung kontrolliert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, aber es könnte nicht das sein, was Sie wollen — oft wollen Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Zuletzt ist es nicht empfohlen, aber Sie werden manchmal `if...else` Anweisungen ohne die geschweiften Klammern geschrieben sehen:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Zeilen und Einrückung verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein echtes Beispiel. Stellen Sie sich ein Kind vor, das von seiner Mutter oder seinem Vater um Hilfe bei einer Aufgabe gebeten wird. Der Elternteil könnte sagen "Hey Liebling! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir etwas extra Taschengeld, damit du dir das Spielzeug leisten kannst, das du haben wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Dieser Code führt dazu, dass die Variable `shoppingDone` immer `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es läge an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind den Einkauf erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (auch live ansehen [hier](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel hat uns zwei Entscheidungen oder Ergebnisse geboten — aber was ist, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen/Ergebnisse an Ihr `if...else` anzuhängen — unter Verwendung von `else if`. Jede zusätzliche Entscheidung erfordert einen weiteren Block, den man zwischen `if () { }` und `else { }` einfügen muss — sehen Sie sich das folgende, umfangreichere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das uns ermöglicht, verschiedene Wetteroptionen auszuwählen, und einen einfachen Absatz.
2. Im JavaScript speichern wir Referenzen sowohl auf das {{htmlelement("select")}}-Element als auch auf das {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Ereignislistener hinzu, sodass beim Ändern seines Wertes die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Dann verwenden wir eine Bedingungsanweisung, um je nach dem Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl im `else { }`-Block ist im Grunde eine "letzte Möglichkeit" Option — der Code darin wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text aus dem Absatz zu löschen, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer sich entscheidet, die "--Machen Sie eine Wahl--" Platzhalter-Option auszuwählen, die zu Beginn angezeigt wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (siehe es live [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) ausgeführt.)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren Bedingungsanweisungen zu testen. Wir haben erstmals in unserem [Grundlagen der Mathematik in JavaScript - Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) Artikel Vergleichsoperatoren betrachtet. Unsere Optionen sind:

- `===` und `!==` — testen, ob ein Wert mit einem anderen identisch oder nicht identisch ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich, oder größer oder gleich als ein anderer ist.

Wir wollten eine spezielle Erwähnung für das Testen von booleanischen (`true`/`false`) Werten und ein häufiges Muster machen, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder eine leere Zeichenkette (`''`) ist, liefert tatsächlich `true` zurück, wenn er als Bedingungsanweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist, oder sogar, dass er existiert (das heißt, er ist nicht undefined). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und, zurück zu unserem vorherigen Beispiel über das Kind, das eine Aufgabe für seine Eltern erledigt, könnten Sie es so schreiben:

```js
let shoppingDone = false;
let childAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

### Verschachtelte if...else

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere zu setzen — diese zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um je nach Temperatur eine weitere Auswahl anzuzeigen:

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

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke miteinander zu verknüpfen, sodass alle einzeln `true` auswerten müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke miteinander zu verknüpfen, sodass einer oder mehr von ihnen einzeln `true` auswerten müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu geben, kann das vorherige Code-Snippet umgeschrieben werden zu:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Lassen Sie uns ein kurzes ODER-Beispiel betrachten:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ von logischem Operator, NICHT, ausgedrückt durch den `!` Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie es uns mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Snippet, wenn die ODER-Anweisung `true` zurückgibt, wird der NICHT-Operator es negieren, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Aussagen zusammenfügen, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code innerhalb nur aus, wenn beide ODER-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgeben wird:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in Bedingungsanweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten anzugeben, die sie sein könnte, um `true` zurückzugeben, getrennt durch `||` (ODER) Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer auf `true` ausgewertet, da 7 (oder jeder andere nicht-null-Wert) immer `true` auswertet. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist, oder 7 ist `true` — was es immer ist". Dies ist logisch nicht das, was wir wollen! Um dies zum Funktionieren zu bringen, müssen Sie einen vollständigen Test auf jeder Seite jedes ODER-Operators angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Aufgabe, den bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne Nachteile. Sie sind hauptsächlich gut für Fälle, in denen Sie ein paar Optionen haben, und jede davon erfordert eine angemessene Menge an Code, die ausgeführt werden muss, und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). In Fällen, in denen Sie nur eine Variable auf einen bestimmten Auswahlwert setzen oder eine bestimmte Anweisung je nach einer Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihre Freunde — sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und durchsuchen dann mehrere Auswahlmöglichkeiten, bis sie eine finden, die mit diesem Wert übereinstimmt, und führen den entsprechenden zugehörigen Code aus. Hier ist etwas mehr Pseudocode, um Ihnen eine Vorstellung zu geben:

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
2. Einen Ausdruck oder Wert innerhalb der Klammern.
3. Das Schlüsselwort `case`, gefolgt von einer Wahlmöglichkeit, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt wird, wenn die Wahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl dem Ausdruck/Wert entspricht, stoppt der Browser die Ausführung des Codeblocks hier und fährt mit dem unterhalb der switch-Anweisung erscheinenden Code fort.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau dem gleichen Code-Muster wie einer der Fälle (Punkte 3–5), außer dass `default` keine danach folgende Wahl hat, und Sie brauchen die `break`-Anweisung nicht, da es sowieso nichts gibt, das nach diesem im Block ausgeführt werden soll. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einfügen — Sie können ihn sicher weglassen, wenn es keine Chance gibt, dass der Ausdruck am Ende einem unbekannten Wert entspricht. Wenn es jedoch eine Chance dafür gibt, müssen Sie ihn einfügen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Lassen Sie uns ein echtes Beispiel betrachten — wir schreiben unsere Wettervorhersage-Anwendung neu, um eine switch-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (siehe es live [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) ausgeführt.)

## Ternärer Operator

Es gibt ein letztes Stück Syntax, das wir Ihnen vorstellen wollen, bevor wir Sie bitten, mit einigen Beispielen zu spielen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn sie `true` ist, und einen anderen, wenn sie `false` ist — dies kann in einigen Situationen nützlich sein und kann viel weniger Code in Anspruch nehmen als ein `if...else`-Block, wenn Sie zwei Entscheidungen haben, die durch eine `true`/`false` Bedingung ausgewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Lassen Sie uns also ein Beispiel anschauen:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr die normale tägliche Begrüßung.

### Ternärer Operator Beispiel

Der ternäre Operator ist nicht nur zum Setzen von Variablenwerten; Sie können auch Funktionen ausführen oder Codezeilen schreiben — was auch immer Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenauswähler, bei dem das Styling der Seite mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema auszuwählen (schwarz oder weiß), plus ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Website-Titel anzuzeigen. Außerdem haben wir eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) annimmt. Die Hintergrundfarbe der Website wird auf die erste angegebene Farbe gesetzt, und die Textfarbe wird auf die zweite angegebene Farbe gesetzt.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener, der dazu dient, eine Funktion mit einem ternären Operator auszuführen. Es beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn das `true` zurückgibt, führen wir die `update()`-Funktion mit Parametern von schwarz und weiß aus, was bedeutet, dass wir am Ende eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß haben. Wenn es `false` zurückgibt, führen wir die `update()`-Funktion mit Parametern von weiß und schwarz aus, was bedeutet, dass die Farben der Seite invertiert sind.

> [!NOTE]
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (siehe es live [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) ausgeführt.)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung abzuschließen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Einen `onchange`-Ereignishandler, der erkennt, wenn der im `<select>`-Menü ausgewählte Wert geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen, dass Sie eine Bedingungsanweisung innerhalb der `createCalendar()`-Funktion schreiben, direkt unter dem `// ADD CONDITIONAL HERE` Kommentar. Sie sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der `choice`-Variablen. Dies wird der `<select>`-Elementwert nach der Wertänderung sein, also zum Beispiel "Januar").
2. Die `days`-Variable zuweisen, um der Anzahl der Tage im ausgewählten Monat zu entsprechen. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Für dieses Beispiel können Sie Schaltjahre ignorieren.

Hinweise:

- Es wird empfohlen, OR zu verwenden, um mehrere Monate zu einer einzigen Bedingung zusammenzufassen; viele von ihnen haben die gleiche Anzahl von Tagen.
- Denken Sie darüber nach, welche Anzahl von Tagen am häufigsten vorkommt, und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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
<html lang="en-US">
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

## Aktives Lernen: Mehr Farbauswahl

In diesem Beispiel werden Sie das zuvor gesehene Beispiel für den ternären Operator nehmen und den ternären Operator in eine switch-Anweisung umwandeln, um uns mehr Auswahlmöglichkeiten für die einfache Website zu ermöglichen. Schauen Sie sich das {{htmlelement("select")}} an — dieses Mal werden Sie sehen, dass es nicht zwei Themenoptionen hat, sondern fünf. Sie müssen eine switch-Anweisung direkt unter dem `// ADD SWITCH STATEMENT` Kommentar hinzufügen:

- Sie sollte die `choice`-Variable als ihre Eingabemuster akzeptieren.
- Für jeden Fall sollte die Wahl gleich einem der möglichen `<option>`-Werte sein, die ausgewählt werden können, das heißt `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die Optionen _Etiketten_, wie sie in der Live-Ausgabe angezeigt werden, großgeschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt und zwei Farbwerte übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind, also müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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
<html lang="en-US">
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie aktuell über bedingte Strukturen in JavaScript wissen müssen! Als nächstes werden wir uns das Durchlaufen von Code ansehen.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Detaillierte Bedingungsanweisungen](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingter (ternärer) Operator Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
