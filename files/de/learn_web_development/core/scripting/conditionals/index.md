---
title: Entscheidungen im Code treffen — Bedingte Anweisungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend handeln, abhängig von unterschiedlichen Eingaben. Zum Beispiel, in einem Spiel, wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn sie morgens betrachtet wird, zeigt sie eine Sonnenaufgangsgrafik; zeigt Sterne und einen Mond, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was eine bedingte Anweisung ist — eine Code-Struktur, um verschiedene Code-Pfade abhängig von einem Testergebnis auszuführen.</li>
          <li>Implementierung von Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code>.</li>
          <li>Verwendung von Vergleichsoperatoren zum Erstellen von Tests.</li>
          <li>Implementierung von UND-, ODER- und NICHT-Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternäre Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von klein ("soll ich einen Keks oder zwei essen?") bis groß ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten, oder soll ich nach Amerika ziehen und Astrophysik studieren?").

Bedingte Anweisungen erlauben es uns, solche Entscheidungen in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "einen Keks oder zwei"), bis hin zum Ergebnis dieser Entscheidungen (vielleicht ist das Ergebnis von "hat einen Keks gegessen" "fühlte sich immer noch hungrig", und das Ergebnis von "hat zwei Kekse gegessen" ist "fühlte sich satt, aber Mama schimpfte mich, dass ich alle Kekse gegessen habe".)

![Eine Cartoonfigur, die einer Person ähnelt, hält ein Keksgefäß mit der Aufschrift 'Cookies'. Über dem Kopf der Figur steht ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else Anweisungen

Betrachten wir die bei weitem häufigste Art der bedingten Anweisung, die Sie in JavaScript verwenden werden — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else Syntax

Die grundlegende `if...else` Syntax sieht so aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Hier haben wir:

1. Das Schlüsselwort `if` gefolgt von einigen Klammern.
2. Eine Bedingung zum Testen, die in die Klammern gesetzt wird (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir früher im Modul besprochen haben, und ergibt `true` oder `false`.
3. Ein Satz geschweifter Klammern, in denen wir einige Codezeilen haben — dies kann beliebiger Code sein, und er läuft nur, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiterer Satz geschweifter Klammern, in denen wir einen anderen Code haben — dies kann beliebiger Code sein, und er läuft nur, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist sehr menschenlesbar — er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **ansonsten** Code B"

Sie sollten beachten, dass Sie das `else` und den zweiten Block in geschweiften Klammern nicht einfügen müssen — das Folgende ist auch völlig legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Allerdings müssen Sie hier vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung gesteuert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, aber es ist möglicherweise nicht das, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Als letzter Punkt: Auch wenn es nicht empfohlen wird, sehen Sie `if...else`-Anweisungen manchmal ohne die geschweiften Klammern geschrieben:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist absolut gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen, und mehrere Zeilen und Einrückungen nutzen.

### Ein reales Beispiel

Um diese Syntax besser zu verstehen, schauen wir uns ein reales Beispiel an. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einer Aufgabe gebeten. Der Elternteil könnte sagen: "Hey Liebling! Wenn du mir hilfst, indem du die Einkäufe erledigst, gebe ich dir ein zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir das so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Dieser gezeigte Code führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was für unser armes Kind eine Enttäuschung bedeutet. Es läge an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind die Einkäufe erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (auch sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)).

### else if

Das letzte Beispiel bot uns zwei Entscheidungen oder Ergebnisse — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen/Ergebnisse an Ihr `if...else` zu verketten — mit `else if`. Jedes zusätzliche Wahl erfordert einen zusätzlichen Block, der zwischen `if () { }` und `else { }` eingefügt wird — werfen Sie einen Blick auf das folgende umfangreichere Beispiel, das Teil einer einfachen Wettervorhersageanwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das uns erlaubt, verschiedene Wetteroptionen auszuwählen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz sowohl zum {{htmlelement("select")}}- als auch zum {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Ereignis-Listener hinzu, sodass bei Änderung seines Wertes die `setWeather()`-Funktion ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Dann verwenden wir eine bedingte Anweisung, um je nach Wert von `choice` verschiedenen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in den `else if () { }`-Blöcken getestet werden, außer die erste, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl im `else { }`-Block ist im Wesentlichen eine "letzte Möglichkeit"-Option — der Code darin wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text im Absatz zu leeren, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer sich entscheidet, erneut die "--Treffen Sie eine Wahl--" Platzhalteroption auszuwählen, die zu Beginn angezeigt wird.

> [!NOTE]
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) ([siehe es live](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) in Aktion).

### Eine Bemerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren bedingten Anweisungen zu testen. Wir haben zuerst Vergleichsoperatoren in unserem Artikel [Grundlagen der Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) betrachtet. Unsere Optionen sind:

- `===` und `!==` — testen, ob ein Wert identisch bzw. nicht identisch zu einem anderen ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich bzw. größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung der Überprüfung von boolean (`true`/`false`) Werten machen und ein häufiges Muster, das Sie immer wieder antreffen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er in einer bedingten Anweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist oder sogar existiert (das heißt, er ist nicht undefined). Zum Beispiel:

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

Es ist vollkommen in Ordnung, eine `if...else`-Anweisung in eine andere zu setzen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersageanwendung aktualisieren, um eine weitere Reihe von Entscheidungen abhängig von der Temperatur anzuzeigen:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Auch wenn der gesamte Code zusammenarbeitet, funktioniert jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, bewirken die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verknüpfen, sodass alle einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verknüpfen, sodass einer oder mehrere einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein Beispiel für UND zu geben, kann der vorherige Beispielcode so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Betrachten wir ein schnelles OR-Beispiel:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ von logischem Operator, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns ihn mit OR im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Ausschnitt, wenn die OR-Bedingung `true` zurückgibt, wird der NOT-Operator sie negieren, sodass der gesamte Ausdruck `false` ergibt.

Sie können so viele logische Anweisungen zusammen kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide OR-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler beim Verwenden des logischen OR-Operators in bedingten Anweisungen ist der Versuch, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten, die sie sein könnte, um `true` zurückzugeben, getrennt durch `||` (ODER)-Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb `if ()` immer `true` zurückgeben, da 7 (oder jeder andere Nicht-Null-Wert) immer `true` ergibt. Diese Bedingung sagt eigentlich "wenn x gleich 5 ist, oder 7 wahr ist — was sie immer ist". Dies ist logisch nicht das, was wir wollen! Um dies zum Laufen zu bringen, müssen Sie einen vollständigen Test auf jeder Seite jedes OR-Operators angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen den Zweck, bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne Nachteile. Sie sind hauptsächlich gut für Fälle, in denen Sie ein paar Wahlmöglichkeiten haben, und jede erfordert eine angemessene Menge an Code, und/oder die Bedingungen sind komplex (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie nur eine Variable auf einen bestimmten Auswahlwert setzen oder eine bestimmte Anweisung je nach Bedingung ausdrucken möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — Sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und durchlaufen dann mehrere Wahlmöglichkeiten, bis sie eine finden, die diesem Wert entspricht, und führen den entsprechenden Code aus, der dazu gehört. Hier ist ein weiteres Pseudocode-Beispiel, um Ihnen eine Idee zu geben:

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
4. Etwas Code, der ausgeführt werden soll, wenn die Wahlmöglichkeit mit dem Ausdruck übereinstimmt.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Wahlmöglichkeit mit dem Ausdruck/Wert übereinstimmt, hört der Browser hier auf, den Codeblock auszuführen, und geht zu jedem Code weiter, der unter der Switch-Anweisung erscheint.
6. So viele andere Fälle (Schritte 3–5) wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau derselben Code-Muster wie bei einem der Fälle (Schritte 3–5), außer dass `default` keine Wahlmöglichkeit danach hat, und Sie nicht die `break`-Anweisung benötigen, da es sowieso nichts weiter im Block mehr auszuführen gibt. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Wahlmöglichkeiten übereinstimmen.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einfügen — Sie können ihn sicher weglassen, wenn es keine Chance gibt, dass der Ausdruck einem unbekannten Wert entsprechen könnte. Wenn jedoch eine Chance besteht, müssen Sie ihn einfügen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Schauen wir uns ein reales Beispiel an — wir werden unsere Wettervorhersageanwendung umschreiben, um eine switch-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)).

## Ternäre Operatoren

Es gibt ein letztes Stück Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie mit einigen Beispielen spielen lassen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, falls `true`, und einen anderen, falls `false` — dies kann in einigen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Entscheidungen haben, zwischen denen über eine `true`-`false`-Bedingung gewählt wird. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihren täglichen Standardgruß.

### Beispiel für einen ternären Operator

Der ternäre Operator ist nicht nur dafür da, Variablenwerte zu setzen; Sie können auch Funktionen oder Codezeilen ausführen — was auch immer Sie möchten. Das folgende interaktive Beispiel zeigt einen einfachen Themenauswähler, bei dem das Styling der Seite mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}} Element, um ein Thema (schwarz oder weiß) auszuwählen, plus ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Seitentitel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt, und die Textfarbe wird auf die zweite bereitgestellte Farbe gesetzt.

Schließlich haben wir einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener, der eine Funktion enthält, die einen ternären Operator enthält. Er beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` ergibt, führen wir die `update()` Funktion mit den Parametern schwarz und weiß aus, was bedeutet, dass wir eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß haben. Wenn es `false` ergibt, führen wir die `update()` Funktion mit den Parametern weiß und schwarz aus, was bedeutet, dass die Seitenfarben invertiert sind.

> [!NOTE]
> Sie können dieses Beispiel auch auf [GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel sollen Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}} Element, das es dem Benutzer erlaubt, zwischen verschiedenen Monaten zu wählen.
- Ein `onchange` Ereignishandler, um zu erkennen, wann der im `<select>` Menü ausgewählte Wert geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}} Element anzeigt.

Wir benötigen Sie, um eine bedingte Anweisung innerhalb der `createCalendar()`-Funktion zu schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Diese sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der Variablen `choice`. Dies wird der Wert des `<select>` Elements nach der Wertänderung sein, zum Beispiel "Januar").
2. Der Variablen `days` den Wert gleich der Anzahl der Tage im ausgewählten Monat zuweisen. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für dieses Beispiel ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate zu einer einzigen Bedingung zu gruppieren; viele von ihnen haben die gleiche Anzahl von Tagen.
- Überlegen Sie, welche Anzahl von Tagen die häufigste ist, und verwenden

Sie diese als Standardwert.

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

In diesem Beispiel sollen Sie das Ternäroperator-Beispiel, das wir zuvor gesehen haben, nehmen und den Ternäroperator in eine switch-Anweisung umwandeln, um uns mehr Auswahlmöglichkeiten für die einfache Website zu bieten. Sehen Sie sich das {{htmlelement("select")}} an — dieses Mal sehen Sie, dass es nicht zwei Themenoptionen hat, sondern fünf. Sie müssen eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Es sollte die `choice` Variable als Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Wahl einer der möglichen `<option>` Werte sein, die ausgewählt werden können, das heißt, `white`, `black`, `purple`, `yellow`, oder `psychedelic`. Beachten Sie, dass die Optionswerte in Kleinbuchstaben sind, während die Optionen _Labels_, wie sie in der Live-Ausgabe angezeigt werden, in Großbuchstaben sind. Sie sollten die Kleinbuchstabenwerte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt werden und zwei Farbwerte übergeben werden, die erste für die Hintergrundfarbe und die zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind, also müssen sie in Anführungszeichen gesetzt werden.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie derzeit über bedingte Strukturen in JavaScript wissen müssen! Als Nächstes werden wir untersuchen, wie man durch Code-Schleifen geht.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz zu if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz zum bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
