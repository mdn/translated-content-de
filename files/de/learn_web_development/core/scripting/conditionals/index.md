---
title: Entscheidungen in Ihrem Code treffen — Bedingungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend handeln, je nach unterschiedlichen Eingaben. Beispielsweise in einem Spiel: wenn die Anzahl der Leben des Spielers 0 beträgt, dann ist das Spiel vorbei. In einer Wetter-App: wenn sie am Morgen betrachtet wird, zeige eine Sonnenaufgangsgrafik; zeige Sterne und einen Mond, wenn es nachts ist. In diesem Artikel untersuchen wir, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was eine Bedingung ist — eine Code-Struktur zum Ausführen verschiedener Code-Pfade, abhängig von einem Testergebnis.</li>
          <li>Implementieren von Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code>.</li>
          <li>Verwendung von Vergleichsoperatoren zur Erstellung von Tests.</li>
          <li>Implementierung von UND-, ODER- und NICHT-Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternary-Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Lebewesen) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen Keks oder zwei essen?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten oder soll ich in die USA ziehen und Astrophysik studieren?")

Bedingte Anweisungen ermöglichen es uns, solche Entscheidungsfindung in JavaScript zu repräsentieren, von der Entscheidung, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis hin zum daraus resultierenden Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" sein "fühlte sich immer noch hungrig", und das Ergebnis von "zwei Kekse gegessen" könnte sein "fühlte sich satt, aber Mama schimpfte, weil ich alle Kekse gegessen habe".)

![Eine Cartoonfigur, die einem Menschen ähnelt, hält ein mit 'Cookies' beschriftetes Keksgefäß. Über dem Kopf der Figur befindet sich ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen Keks oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else-Anweisungen

Schauen wir uns eine der am häufigsten verwendeten bedingten Anweisungen in JavaScript an — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else-Syntax

Die grundlegende `if...else`-Syntax sieht so aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Hier haben wir:

1. Das Schlüsselwort `if` gefolgt von einigen Klammern.
2. Eine Bedingung, die in den Klammern getestet wird (typischerweise "ist dieser Wert größer als dieser andere Wert?" oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir zuvor im Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein paar geschweifte Klammern, in denen sich ein Code befindet — das kann jeder beliebige Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiteres Paar geschweifter Klammern, in denen sich ein weiterer Code befindet — das kann jeder beliebige Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **sonst** führe Code B aus."

Sie sollten beachten, dass Sie das `else` und den zweiten Block mit geschweiften Klammern nicht hinzufügen müssen — das Folgende ist ebenfalls völlig legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Jedoch müssen Sie hier vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht durch die bedingte Anweisung gesteuert, sodass er **immer** ausgeführt wird, egal ob die Bedingung `true` oder `false` zurückgibt. Das ist nicht unbedingt problematisch, aber es könnte nicht das sein, was Sie wollen — oft möchte man einen Codeblock _oder_ den anderen ausführen, nicht beide.

Als abschließender Punkt, auch wenn es nicht empfohlen wird, kann es vorkommen, dass `if...else`-Anweisungen ohne geschweifte Klammern geschrieben werden:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist vollkommen gültig, aber es ist viel leichter, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, schauen wir uns ein echtes Beispiel an. Stellen Sie sich vor, ein Kind wird von seinem Elternteil um Hilfe bei einer Aufgabe gebeten. Der Elternteil könnte sagen: "Hey Schatz! Wenn du mir hilfst, indem du die Einkäufe erledigst, gebe ich dir etwas zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code führt, wie gezeigt, immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es läge an uns, einen Mechanismus bereitzustellen, damit das Elternteil die `shoppingDone`-Variable auf `true` setzen kann, wenn das Kind die Einkäufe erledigt.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub ansehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (sehen Sie sie [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel bot uns zwei Wahlmöglichkeiten oder Ergebnisse — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Wahlmöglichkeiten/Ergebnisse an Ihr `if...else` anzuhängen — mit `else if`. Jede zusätzliche Wahl erfordert einen zusätzlichen Block, der zwischen `if () { }` und `else { }` eingefügt wird — sehen Sie sich das folgende ausführlichere Beispiel an, das Teil einer einfachen Wettervorhersageanwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, mit dem wir verschiedene Wetteroptionen auswählen können, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz auf das {{htmlelement("select")}}- und {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Ereignis-Listener hinzu, sodass die Funktion `setWeather()` ausgeführt wird, wenn der Wert geändert wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Dann verwenden wir eine bedingte Anweisung, um je nach Wert der `choice`-Variable unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl, im `else { }`-Block, ist im Grunde eine "letzte Ressource" — die im Code darin ausgeführt wird, wenn keine der Bedingungen `true` ist. In diesem Fall dient sie dazu, den Text im Absatz zu leeren, wenn nichts ausgewählt ist, z. B. wenn ein Benutzer entscheidet, die platzhalterische Option "--Make a choice--" neu auszuwählen, die am Anfang angezeigt wird.

> [!NOTE]
> Dieses Beispiel finden Sie auch auf [GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (siehe es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) auch dort.)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren bedingten Anweisungen zu testen. Wir haben Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) vorgestellt. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert mit einem anderen identisch oder nicht identisch ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung von Testen von Boolean (`true`/`false`) Werten machen und ein häufiges Muster, das Ihnen immer wieder begegnen wird. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird, daher können Sie allein einen Variablennamen verwenden, um zu überprüfen, ob er `true` ist oder sogar, ob er existiert (d.h. er ist nicht undefiniert). Also zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und zurück zu unserem vorherigen Beispiel über das Kind, das eine Aufgabe für sein Elternteil erledigt, könnten Sie es folgendermaßen schreiben:

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

### Verschachteln von if...else

Es ist vollkommen in Ordnung, eine `if...else`-Anweisung in eine andere zu setzen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um eine weitere Auswahl anzuzeigen, abhängig davon, wie die Temperatur ist:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Auch wenn der gesamte Code zusammenarbeitet, arbeitet jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: AND, OR und NOT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — AND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verknüpfen, sodass alle von ihnen individuell `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — OR; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verknüpfen, sodass einer oder mehrere von ihnen individuell `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein AND-Beispiel zu geben, kann der vorherige Beispiel-Schnipsel folgendermaßen umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Also zum Beispiel wird der erste Codeblock nur ausgeführt, wenn sowohl `choice === 'sunny'` _als auch_ `temperature < 86` `true` zurückgeben.

Schauen wir uns ein kurzes OR-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ des logischen Operators, NOT, dargestellt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Kombinieren wir es mit OR im obigen Beispiel:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Schnipsel, wenn die OR-Anweisung `true` zurückgibt, wird der NOT-Operator sie negieren, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Anweisungen kombinieren, wie Sie möchten, in jeder Struktur. Das folgende Beispiel führt den Code darin nur aus, wenn beide OR-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte AND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen OR-Operators in bedingten Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten anzugeben, die es sein könnte, um `true` zurückzugeben, getrennt durch `||` (OR)-Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer zu `true` ausgewertet, da 7 (oder jeder andere Nicht-Null-Wert) immer `true` ergibt. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist oder 7 wahr ist — was es immer ist". Dies ist nicht logisch, was wir wollen! Um dies zu erreichen, müssen Sie für jeden OR-Operator auf beiden Seiten einen vollständigen Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erfüllen ihre Aufgabe, bedingten Code zu ermöglichen, gut, aber sie haben auch Nachteile. Sie sind hauptsächlich gut in Fällen, in denen Sie ein paar Wahlmöglichkeiten haben und jede eine angemessene Menge an auszuführendem Code erfordert und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie einfach eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Anweisung je nach Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Wahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihre Freunde — sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und suchen dann durch mehrere Wahlmöglichkeiten, bis sie eine finden, die diesem Wert entspricht, und führen den entsprechenden Code aus, der damit einhergeht. Hier ist etwas mehr Pseudocode, um Ihnen eine Vorstellung zu geben:

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
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Wahl dem Ausdruck/Wert entspricht, stoppt der Browser hier die Ausführung des Codeblocks und fährt mit dem darunter liegenden Code fort.
6. So viele andere Fälle (Punkte 3–5) wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau demselben Code-Muster wie bei einem der Fälle (Punkte 3–5), außer dass `default` keine Wahlmöglichkeit danach hat und Sie die `break`-Anweisung nicht benötigen, da es in dem Block danach nichts auszuführen gibt. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Wahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn sicher weglassen, wenn es keine Möglichkeit gibt, dass der Ausdruck einen unbekannten Wert annehmen könnte. Wenn es jedoch eine Chance dafür gibt, müssen Sie es einschließen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Sehen wir uns ein echtes Beispiel an — wir werden unsere Wettervorhersage-Anwendung umschreiben, um eine switch-Anweisung zu verwenden:

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
> Dieses Beispiel finden Sie auch auf [GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (siehe es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) auch dort.)

## Ternary-Operator

Es gibt einen letzten Abschnitt der Syntax, den wir Ihnen vorstellen wollen, bevor wir Ihnen einige Beispiele zum Spielen geben. Der [ternary oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn er `true` ist, und einen anderen, wenn er `false` ist — dies kann in einigen Situationen nützlich sein und kann viel weniger Code einnehmen als ein `if...else`-Block, wenn Sie zwei Wahlmöglichkeiten haben, die über eine `true`/`false`-Bedingung ausgewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Sehen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unseren Gast eine Geburtstagsnachricht; falls nicht, geben wir ihr die standardmäßige tägliche Begrüßung.

### Ternary-Operator Beispiel

Der ternary-Operator ist nicht nur für das Setzen von Variablenwerten da; Sie können auch Funktionen oder Codezeilen ausführen — was immer Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Thementauscher, bei dem das Styling für die Website mithilfe eines ternary-Operators angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema auszuwählen (schwarz oder weiß), sowie ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Website-Titel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste Farbe gesetzt und die Textfarbe auf die zweite Farbe.

Abschließend haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener, der eine Funktion ausführt, die einen ternary-Operator enthält. Er beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern Schwarz und Weiß aus, was bedeutet, dass wir am Ende eine Hintergrundfarbe von Schwarz und eine Textfarbe von Weiß haben. Wenn es `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern Weiß und Schwarz aus, was bedeutet, dass die Site-Farben umgekehrt sind.

> [!NOTE]
> Dieses Beispiel finden Sie ebenfalls auf [GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (siehe es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) auch dort.)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Ein `onchange`-Ereignishandler, um festzustellen, wann sich der im `<select>`-Menü ausgewählte Wert ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen von Ihnen, dass Sie eine bedingte Anweisung innerhalb der Funktion `createCalendar()` schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der Variablen `choice`. Dies wird der `<select>`-Elementwert nach der Wertänderung sein, z. B. "Januar").
2. Die Variable `days` so zuweisen, dass sie gleich der Anzahl der Tage im ausgewählten Monat ist. Dafür müssen Sie nachsehen, wie viele Tage jeder Monat im Jahr hat. Sie können Schaltjahre für dieses Beispiel ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate zusammen in einer einzigen Bedingung zu gruppieren; viele von ihnen teilen sich die gleiche Anzahl von Tagen.
- Denken Sie darüber nach, welcher Anzahl von Tagen am häufigsten ist, und verwenden Sie dies als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Mehr Farbwahlmöglichkeiten

In diesem Beispiel werden Sie das earlier gesehene ternary-Operator-Beispiel nehmen und den ternary-Operator in eine switch-Anweisung konvertieren, um uns mehr Auswahlmöglichkeiten für die einfache Website zu geben. Schauen Sie sich das {{htmlelement("select")}} an — dieses Mal werden Sie sehen, dass es nicht zwei Themenoptionen hat, sondern fünf. Sie müssen eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Sie sollte die `choice`-Variable als Eingabewert akzeptieren.
- Für jeden Fall sollte die Wahl einer der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, das heißt, `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die Optionslabels, wie im Live-Ergebnis angezeigt, großgeschrieben sind. Verwenden Sie die kleingeschriebenen Werte in Ihrem Code.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt werden und zwei Farbwerte übergeben werden, die erste für die Hintergrundfarbe und die zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenketten sind, also müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie über bedingte Strukturen in JavaScript gerade wissen müssen! Als Nächstes werden wir uns anschauen, wie man durch Code schleift.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else-Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingungsoperator (ternary) Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
