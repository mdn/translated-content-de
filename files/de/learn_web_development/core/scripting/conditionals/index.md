---
title: Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 8e844812a111634228a58c4f21f81b8f616f7169
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und je nach verschiedenen Eingaben entsprechende Aktionen ausführen. Zum Beispiel in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn es am Morgen betrachtet wird, wird eine Sonnenaufgangsgrafik angezeigt; Sterne und ein Mond werden angezeigt, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie sogenannte Bedingungsaussagen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und der <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was ein Bedingungsausdruck ist — eine Code-Struktur für die Ausführung verschiedener Codepfade abhängig von einem Testergebnis.</li>
          <li>Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code> implementieren.</li>
          <li>Vergleichsoperatoren verwenden, um Tests zu erstellen.</li>
          <li>Logik von UND, ODER und NICHT in Tests implementieren.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternäre Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen Keks oder zwei essen?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten oder sollte ich nach Amerika ziehen und Astrophysik studieren?")

Bedingte Aussagen ermöglichen es uns, eine solche Entscheidungsfindung in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis hin zum resultierenden Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" sein "immer noch hungrig gefühlt" und das Ergebnis von "zwei Kekse gegessen" könnte sein "voll gefühlt, aber Mama hat mich gescholten, weil ich alle Kekse gegessen habe".)

![Ein Cartoon-Charakter, der einem Menschen ähnelt, hält ein Keksgefäß mit der Aufschrift 'Cookies'. Über dem Kopf des Charakters befindet sich ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass der Charakter versucht zu entscheiden, ob er einen oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else Anweisungen

Schauen wir uns die bei weitem häufigste Art von bedingter Anweisung in JavaScript an — die einfache [`if...else` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

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

1. Das Schlüsselwort `if`, gefolgt von einigen Klammern.
2. Eine zu testende Bedingung, die in den Klammern steht (typischerweise "ist dieser Wert größer als dieser andere Wert?" oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir früher in diesem Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Paar geschweifte Klammern, in denen wir einen Code haben — dies kann jeder beliebige Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiteres Paar geschweifte Klammern, in denen wir weiteren Code haben — dies kann jeder beliebige Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **sonst** führe Code B aus."

Sie sollten beachten, dass Sie das `else` und den zweiten Block in geschweiften Klammern nicht einschließen müssen — das Folgende ist ebenfalls ein völlig legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Sie müssen jedoch hier vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung kontrolliert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, aber es entspricht möglicherweise nicht Ihrem Wunsch — häufig möchten Sie entweder den einen oder den anderen Codeblock ausführen, nicht beide.

Als letzten Punkt, obwohl es nicht empfohlen wird, sehen Sie manchmal `if...else`-Anweisungen ohne geschweifte Klammern geschrieben:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Diese Syntax ist völlig gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen, und mehrere Zeilen sowie Einrückungen verwenden.

### Ein richtiges Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein echtes Beispiel. Stellen Sie sich ein Kind vor, das von seiner Mutter oder seinem Vater um Hilfe bei einer Aufgabe gebeten wird. Der Elternteil könnte sagen: "Hey Liebling! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir etwas zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Der gezeigte Code führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es läge an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind einkaufen gegangen ist.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)).

### else if

Das letzte Beispiel bot uns zwei Wahlmöglichkeiten oder Ergebnisse — aber was, wenn wir mehr als zwei möchten?

Es gibt eine Möglichkeit, zusätzliche Wahlmöglichkeiten/Ergebnisse zu Ihrem `if...else` hinzuzufügen — indem Sie `else if` verwenden. Jede zusätzliche Wahl erfordert einen weiteren Block, der zwischen `if () { }` und `else { }` eingefügt wird — schauen Sie sich das folgende komplexere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das uns erlaubt, verschiedene Wetterauswahlen zu treffen, und einen einfachen Absatz.
2. In dem JavaScript speichern wir einen Verweis auf sowohl das {{htmlelement("select")}}- als auch das {{htmlelement("p")}}-Element und fügen einen Ereignislistener zum `<select>`-Element hinzu, sodass, wenn sein Wert geändert wird, die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zunächst eine Variable namens `choice` auf den aktuell ausgewählten Wert im `<select>`-Element. Dann verwenden wir eine bedingte Anweisung, um je nach dem Wert von `choice` unterschiedlichen Text innerhalb des Absatzes anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcke überprüft werden, außer der ersten, die in einem `if () { }`-Block überprüft wird.
4. Die allerletzte Wahl, innerhalb des `else { }`-Blocks, ist im Grunde eine "letzte Möglichkeit"-Option — der Code darin wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text aus dem Absatz zu löschen, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer die Platzhalteroption "--Make a choice--" erneut auswählt, die am Anfang angezeigt wird.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (sehen Sie es [dort live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)).

### Eine Bemerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren bedingten Anweisungen zu überprüfen. Wir haben zunächst in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) Vergleichsoperatoren betrachtet. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch mit oder nicht identisch mit einem anderen ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung des Testens von booleschen (`true`/`false`) Werten machen und ein häufiges Muster, auf das Sie immer wieder stoßen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird, daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist oder überhaupt existiert (das heißt, dass er nicht undefined ist). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und wenn wir auf unser vorheriges Beispiel über das Kind zurückkehren, das eine Aufgabe für seinen Elternteil erledigt, könnten Sie es so schreiben:

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

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere zu setzen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um eine weitere Reihe von Auswahlen zu zeigen, je nachdem, wie die Temperatur ist:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Obwohl der gesamte Code zusammenarbeitet, arbeitet jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; erlaubt es Ihnen, zwei oder mehr Ausdrücke so miteinander zu verketten, dass alle einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; erlaubt es Ihnen, zwei oder mehr Ausdrücke so miteinander zu verketten, dass einer oder mehrere von ihnen einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` ergibt.

Um Ihnen ein UND-Beispiel zu geben, kann das vorherige Beispiel-Snippet so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Beispielsweise wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Schauen wir uns ein schnelles ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ des logischen Operators, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie es uns mit ODER in dem obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Snippet, wenn die ODER-Anweisung `true` zurückgibt, wird der NICHT-Operator es negieren, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Aussagen zusammen kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide ODER-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler beim Verwenden des logischen ODER-Operators in bedingten Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten anzugeben, die sie sein könnte, um `true` zurückzugeben, getrennt durch `||` (ODER)-Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb `if ()` immer zu `true` ausgewertet, da 7 (oder ein anderer nicht-null-Wert) immer als `true` bewertet wird. Diese Bedingung sagt eigentlich "wenn x 5 ist oder 7 wahr ist — was es immer ist". Dies ist logisch nicht das, was wir wollen! Um dies zum Laufen zu bringen, müssen Sie auf beiden Seiten jedes ODER-Operators einen vollständigen Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## Switch-Anweisungen

`if...else`-Anweisungen erledigen die Arbeit der bedingten Code-Aktivierung gut, aber sie sind nicht ohne Nachteile. Sie eignen sich hauptsächlich für Fälle, in denen Sie ein paar Auswahlmöglichkeiten haben und jede eine angemessene Menge an Code erfordert, um ausgeführt zu werden, und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie einfach eine Variable auf einen bestimmten Auswahlwert setzen oder eine bestimmte Aussage je nach Bedingung drucken möchten, kann die Syntax etwas umständlich sein, insbesondere wenn Sie eine große Anzahl von Wahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und durchsuchen mehrere Auswahlmöglichkeiten, bis sie eine finden, die diesem Wert entspricht, und führen den entsprechenden Code aus, der damit einhergeht. Hier ist ein weiteres Pseudocode-Beispiel, um Ihnen eine Vorstellung zu geben:

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
3. Das Schlüsselwort `case`, gefolgt von einer Auswahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt werden soll, wenn die Wahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl dem Ausdruck/Wert entspricht, beendet der Browser die Ausführung des Codes hier und geht zu einem beliebigen Code über, der nach der switch-Anweisung erscheint.
6. So viele andere Fälle (Absätze 3–5) wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt vom genau gleichen Codemuster wie bei einem der Fälle (Absätze 3–5), außer dass `default` keine Auswahl danach hat, und Sie die `break`-Anweisung nicht benötigen, da in dem Block darunter sowieso nichts ausgeführt wird. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn weglassen, wenn die Möglichkeit besteht, dass der Ausdruck einen unbekannten Wert haben könnte. Wenn dies jedoch möglich ist, müssen Sie ihn einschließen, um mit unbekannten Fällen umzugehen.

### Ein Switch-Beispiel

Schauen wir uns ein echtes Beispiel an — wir werden unsere Wettervorhersage-Applikation umschreiben, um eine switch-Anweisung zu verwenden:

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
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es [dort live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)).

## Ternärer Operator

Es gibt einen letzten Syntax-Aspekt, den wir Ihnen vorstellen möchten, bevor wir Sie bitten, mit einigen Beispielen zu arbeiten. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Syntax-Stück, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn diese `true` ist, und einen anderen, wenn sie `false` ist — dies kann in einigen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Entscheidungen haben, zwischen denen aufgrund einer `true`/`false`-Bedingung gewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr die standardmäßige tägliche Begrüßung.

### Ternäroperator-Beispiel

Der ternäre Operator ist nicht nur für das Setzen von Variablenwerten; Sie können auch Funktionen ausführen oder Codezeilen — was immer Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem das Styling für die Webseite mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema auszuwählen (schwarz oder weiß), plus ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Website-Titel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste angegebene Farbe gesetzt, und die Textfarbe wird auf die zweite angegebene Farbe gesetzt.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener, der dazu dient, eine Funktion mit einem ternären Operator auszuführen. Diese beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die Funktion `update()` mit den Parametern schwarz und weiß aus, was bedeutet, dass wir eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß erhalten. Wenn es `false` zurückgibt, führen wir die Funktion `update()` mit den Parametern weiß und schwarz aus, was bedeutet, dass die Website-Farben invertiert werden.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es [dort live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Implementierung eines einfachen Kalenders

In diesem Beispiel helfen Sie uns, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, um dem Benutzer zu erlauben, zwischen verschiedenen Monaten zu wählen.
- Einen `change`-Ereignishandler, um zu erkennen, wenn der Wert im `<select>`-Menü geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Um das Beispiel zu vervollständigen:

1. Klicken Sie auf **"Play"** im unten stehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine bedingte Anweisung innerhalb der Funktion `createCalendar()`, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:
   1. Den ausgewählten Monat betrachten (gespeichert in der Variable `choice`. Dies wird der Wert des `<select>`-Elements sein, nachdem sich der Wert geändert hat, also zum Beispiel "January").
   2. Weisen Sie die Variable `days` so zu, dass sie gleich der Anzahl der Tage im ausgewählten Monat ist. Dafür müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für die Zwecke dieses Beispiels ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate in einer einzigen Bedingung zu gruppieren; viele von ihnen teilen sich die gleiche Anzahl von Tagen.
- Überlegen Sie, welche Anzahl von Tagen am häufigsten ist, und verwenden Sie dies als Standardwert.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe betrachten.

```html hidden live-sample___conditionals-1
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
```

```css hidden live-sample___conditionals-1
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

* {
  box-sizing: border-box;
}

ul {
  padding-left: 0;
}

li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4a2db6;
  color: white;
}
```

```js live-sample___conditionals-1
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
```

{{ EmbedLiveSample("conditionals-1", "100%", 550) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const select = document.querySelector("select");
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
createCalendar("January");
```

</details>

## Hinzufügen weiterer Farboptionen

In diesem Beispiel werden Sie das ternäre Operator-Beispiel, das wir zuvor gesehen haben, nehmen und den ternären Operator in eine switch-Anweisung umwandeln, damit wir mehr Auswahlmöglichkeiten auf der Website anwenden können. Sehen Sie sich das {{htmlelement("select")}}-Element an — diesmal werden Sie sehen, dass es nicht zwei Themenoptionen hat, sondern fünf.

Um das Beispiel zu vervollständigen:

1. Klicken Sie auf **"Play"** im unten stehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzu:
   1. Sie sollte die `choice`-Variable als Eingabeausdruck akzeptieren.
   2. Für jeden Fall sollte die Auswahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, also `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte klein geschrieben sind, während die Options*labels*, wie sie in der Live-Ausgabe angezeigt werden, groß geschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
   3. Für jeden Fall sollte die Funktion `update()` ausgeführt werden und mit zwei Farbwerten übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen (Strings) sind und daher in Anführungszeichen stehen müssen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Reset_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter der Live-Ausgabe betrachten.

```html hidden live-sample___conditionals-2
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
  <option value="purple">Purple</option>
  <option value="yellow">Yellow</option>
  <option value="psychedelic">Psychedelic</option>
</select>

<h1>This is my website</h1>
```

```css hidden live-sample___conditionals-2
html {
  font-family: sans-serif;
  height: 95%;
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
  height: inherit;
}
```

```js live-sample___conditionals-2
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
```

{{ EmbedLiveSample("conditionals-2", "100%", 200) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges JavaScript sollte so aussehen:

```js
const select = document.querySelector("select");
const html = document.querySelector("html");

select.addEventListener("change", () => {
  const choice = select.value;

  switch (choice) {
    case "black":
      update("black", "white");
      break;
    case "white":
      update("white", "black");
      break;
    case "purple":
      update("purple", "white");
      break;
    case "yellow":
      update("yellow", "purple");
      break;
    case "psychedelic":
      update("lime", "purple");
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
```

</details>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen verinnerlicht haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bedingte Aussagen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie über bedingte Strukturen in JavaScript derzeit wissen müssen! Als nächstes werden wir uns mit dem Durchlaufen von Code beschäftigen.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz für if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz für ternäre (bedingte) Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
