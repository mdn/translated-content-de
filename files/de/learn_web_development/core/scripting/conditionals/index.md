---
title: Entscheidungen in Ihrem Code treffen — Bedingungssätze
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend handeln, abhängig von verschiedenen Eingaben. Zum Beispiel muss in einem Spiel, wenn die Anzahl der Leben eines Spielers 0 ist, das Spiel beendet werden. In einer Wetter-App soll, wenn sie morgens betrachtet wird, eine Sonnenaufgangs-Grafik angezeigt werden; bei Nacht sollen Sterne und ein Mond angezeigt werden. In diesem Artikel werden wir erkunden, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was eine Bedingung ist — eine Code-Struktur, um verschiedene Codepfade je nach Testergebnis auszuführen.</li>
          <li>Implementierung von Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code>.</li>
          <li>Verwendung von Vergleichsoperatoren zum Erstellen von Tests.</li>
          <li>Implementierung von UND, ODER und NICHT Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternär-Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, vom kleinen ("soll ich einen Keks essen oder zwei?") bis zum großen ("soll ich in meinem Heimatland bleiben und auf dem Bauernhof meiner Familie arbeiten oder nach Amerika auswandern und Astrophysik studieren?")

Bedingte Anweisungen erlauben es uns, solch eine Entscheidungsfindung in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel: "ein Keks oder zwei"), bis zum Ergebnis dieser Entscheidungen (vielleicht ist das Ergebnis von "einen Keks gegessen" "fühlte sich immer noch hungrig", und das Ergebnis von "zwei Kekse gegessen" "fühlte sich satt, aber Mama schimpfte mich, weil ich alle Kekse gegessen habe").

![Eine Cartoonfigur, die einer Person ähnelt, hält ein Keksglas mit der Aufschrift 'Cookies'. Über dem Kopf der Figur ist ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen Keks oder zwei Kekse will.](cookie-choice-small.png)

## if...else Anweisungen

Schauen wir uns die mit Abstand häufigste Art der bedingten Anweisung an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else Syntax

Die grundlegende `if...else`-Syntax sieht folgendermaßen aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Hier haben wir:

1. Das Schlüsselwort `if` gefolgt von ein paar Klammern.
2. Eine Bedingung, die getestet wird, innerhalb der Klammern (typischerweise "ist dieser Wert größer als dieser andere Wert?" oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir zuvor im Modul besprochen haben und gibt `true` oder `false` zurück.
3. Ein Set von geschweiften Klammern, in denen wir einen Code haben — das kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiteres Set von geschweiften Klammern, in denen wir etwas mehr Code haben — das kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder in anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **sonst** führe Code B aus."

Sie sollten beachten, dass Sie das `else` und den zweiten Block von geschweiften Klammern nicht einschließen müssen — das Folgende ist ebenfalls vollkommen legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Allerdings müssen Sie hier vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung kontrolliert, sondern **immer** ausgeführt, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Das ist nicht unbedingt eine schlechte Sache, aber es könnte nicht das sein, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Als abschließender Punkt, obwohl nicht empfohlen, können Sie manchmal sehen, dass `if...else`-Anweisungen ohne die geschweiften Klammern geschrieben werden:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist völlig gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, lassen Sie uns ein echtes Beispiel betrachten. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater gebeten, bei einer Aufgabe zu helfen. Der Elternteil könnte sagen "Hey Liebling! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir etwas extra Taschengeld, damit du dir das Spielzeug leisten kannst, das du haben wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code, wie gezeigt, führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was für unser armes Kind Enttäuschung bedeutet. Es wäre an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind eingekauft hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (auch live zu sehen [hier](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel hat uns zwei Entscheidungen oder Ergebnisse bereitgestellt — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen/Ergebnisse an Ihr `if...else` anzuhängen — durch die Verwendung von `else if`. Jede zusätzliche Entscheidung erfordert einen zusätzlichen Block, der zwischen `if () { }` und `else { }` eingefügt wird — sehen Sie sich das folgende, etwas kompliziertere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das es uns ermöglicht, verschiedene Wetteroptionen auszuwählen, und einen einfachen Absatz.
2. Im JavaScript speichern wir einen Verweis auf sowohl das {{htmlelement("select")}}- als auch das {{htmlelement("p")}}-Element und fügen dem `select`-Element einen Ereignislistener hinzu, sodass, wenn sein Wert geändert wird, die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Dann verwenden wir eine bedingte Anweisung, um unterschiedlichen Text im Absatz anzuzeigen, abhängig davon, welchen Wert `choice` hat. Beachten Sie, dass alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl, im `else { }`-Block, ist im Grunde eine "letzte Option" — der darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text im Absatz zu leeren, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer entscheidet, die Platzhalteroption "--Make a choice--" erneut auszuwählen, die zu Beginn angezeigt wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (siehe es auch live [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html).)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren bedingten Anweisungen zu testen. Wir haben die Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) betrachtet. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testet, ob ein Wert identisch mit, oder nicht identisch mit einem anderen ist.
- `<` und `>` — testet, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testet, ob ein Wert kleiner oder gleich, oder größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung zum Testen von booleschen (`true`/`false`) Werten und einem häufigen Muster machen, das Ihnen immer wieder begegnen wird. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist oder sogar existiert (das heißt, er ist nicht undefined). Also zum Beispiel:

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

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere zu setzen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um eine weitere Auswahl anzuzeigen, abhängig davon, wie die Temperatur ist:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Obwohl der gesamte Code zusammenarbeitet, funktioniert jede `if...else`-Anweisung vollständig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; erlaubt es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass alle von ihnen einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; erlaubt es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass einer oder mehrere von ihnen individuell `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu geben, kann das vorherige Beispiel-Snippet zu diesem umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

So wird zum Beispiel der erste Codeblock nur dann ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Schauen wir uns ein schnelles ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ von logischem Operator, NICHT, ausgedrückt durch den `!` Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns ihn mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Snippet, wenn die ODER-Aussage `true` zurückgibt, wird der NICHT-Operator sie negieren, sodass der Gesamtausdruck `false` zurückgibt.

Sie können so viele logische Aussagen zusammenfügen, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide OR-Aussagen true ergeben, was bedeutet, dass die gesamte AND-Anweisung true ergibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in bedingten Anweisungen ist der Versuch, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten zu geben, die es sein könnte, um true zurückzugeben, getrennt durch `||` (ODER)-Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer zu wahr ausgewertet, da 7 (oder jeder andere nicht-null Wert) immer als `true` ausgewertet wird. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist, oder 7 ist wahr — was es immer ist". Das ist logisch nicht das, was wir wollen! Um dies zu beheben, müssen Sie auf jeder Seite des OR-Operators einen vollständigen Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen den Job, bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne ihre Nachteile. Sie sind hauptsächlich gut für Fälle geeignet, in denen Sie ein paar Optionen haben und jede davon eine angemessene Menge Code erfordert, der ausgeführt werden soll, und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie einfach eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Anweisung abhängig von einer Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Optionen haben.

In solchen Fällen sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihre Freunde — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und sehen dann mehrere Optionen durch, bis sie eine finden, die mit diesem Wert übereinstimmt, und führen den entsprechenden Code aus, der damit verbunden ist. Hier ist etwas mehr Pseudocode, um Ihnen eine Vorstellung zu geben:

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
3. Das Schlüsselwort `case`, gefolgt von einer Wahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt wird, wenn die Wahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Wahl dem Ausdruck/Wert entspricht, stoppt der Browser die Ausführung des Codeblocks hier und bewegt sich zu jedem Code, der unterhalb der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5) wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau dem gleichen Code-Muster wie einer der Fälle (Punkte 3–5), außer dass `default` keine Wahl nach sich hat und Sie die `break`-Anweisung nicht benötigen, da darüber hinaus in dem Block sowieso nichts mehr ausgeführt wird. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Wahlen übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn sicher weglassen, wenn es keine Chance gibt, dass der Ausdruck einen unbekannten Wert ergeben könnte. Wenn jedoch eine Chance dafür besteht, müssen Sie ihn einschließen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Schauen wir uns ein echtes Beispiel an — wir schreiben unsere Wettervorhersage-Anwendung um, um eine switch-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es auch live [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html).)

## Ternärer Operator

Es gibt ein letztes bisschen Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie mit einigen Beispielen spielen lassen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn er `true` ist, und einen anderen, wenn er `false` ist — dies kann in einigen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Optionen haben, die zwischen einem `true`/`false` Zustand gewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr die Standardbegrüßung des Tages.

### Ternärer Operator Beispiel

Der ternäre Operator ist nicht nur zum Setzen von Variablenwerten gedacht; Sie können auch Funktionen ausführen oder Codezeilen — was immer Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem das Styling der Website mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}} Element, um ein Thema auszuwählen (schwarz oder weiß), sowie ein einfaches {{htmlelement("Heading_Elements", "h1")}} zur Anzeige eines Website-Titels. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt und die Textfarbe auf die zweite bereitgestellte Farbe.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener, der dazu dient, eine Funktion auszuführen, die einen ternären Operator enthält. Er beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die Funktion `update()` mit den Parametern Schwarz und Weiß aus, was bedeutet, dass wir mit einer Hintergrundfarbe in Schwarz und einer Textfarbe in Weiß enden. Wenn er `false` zurückgibt, führen wir die Funktion `update()` mit den Parametern Weiß und Schwarz aus, was bedeutet, dass die Seitenfarben invertiert werden.

> [!NOTE]
> Dieses Beispiel finden Sie auch auf [GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es auch live [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html).)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}} Element, um dem Benutzer zu ermöglichen, zwischen verschiedenen Monaten zu wählen.
- Ein `onchange` Ereignishandler, um zu erkennen, wann sich der im `<select>`-Menü ausgewählte Wert ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}} Element anzeigt.

Wir benötigen Sie, um eine bedingte Anweisung innerhalb der Funktion `createCalendar()` zu schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Den ausgewählten Monat ansehen (der in der Variablen `choice` gespeichert ist. Dies wird der `<select>` Wert nach der Wertänderung sein, also beispielsweise "Januar".)
2. Die Variable `days` gleich der Anzahl der Tage im ausgewählten Monat zuweisen. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für die Zwecke dieses Beispiels ignorieren.

Hinweise:

- Es wird empfohlen, das logische ODER zu verwenden, um mehrere Monate zu einer einzigen Bedingung zusammenzufassen; viele von ihnen haben die gleiche Anzahl von Tagen.
- Denken Sie darüber nach, welche Anzahl von Tagen am häufigsten vorkommt, und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie auf "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Mehr Farbauswahl

In diesem Beispiel werden Sie das ternäre Operator-Beispiel, das wir zuvor gesehen haben, in eine switch-Anweisung umwandeln, um uns zu ermöglichen, mehr Optionen für die einfache Website anzuwenden. Schauen Sie sich das {{htmlelement("select")}} an — dieses Mal werden Sie sehen, dass es nicht zwei Themenoptionen hat, sondern fünf. Sie müssen eine switch-Anweisung direkt unterhalb des Kommentars `// ADD SWITCH STATEMENT` hinzufügen:

- Sie sollte die `choice`-Variable als Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Wahl einem der möglichen `<option>` Werte entsprechen, der ausgewählt werden kann, also `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte in Kleinbuchstaben sind, während die Optionsetiketten, wie sie in der Live-Ausgabe angezeigt werden, großgeschrieben sind. Sie sollten die Kleinbuchstabenwerte in Ihrem Code verwenden.
- Für jeden Fall sollte die Funktion `update()` ausgeführt werden und zwei Farbwerte übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Strings sind, also müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie auf "Lösung anzeigen", um eine Lösung zu sehen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Test your skills: Conditionals](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie jetzt wirklich über bedingte Strukturen in JavaScript wissen müssen! Als Nächstes werden wir uns das Schleifen durch Code ansehen.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz: if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz: Bedingungsoperator (ternär)](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
