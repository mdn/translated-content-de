---
title: Entscheidungen in Ihrem Code treffen — Konditionale Anweisungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 611edf6335e4a833a6f394d0d98b117e7b0a36bf
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und Aktionen entsprechend verschiedener Eingaben ausführen. Zum Beispiel in einem Spiel, wenn die Anzahl der Leben eines Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn sie am Morgen betrachtet wird, zeigt sie eine Sonnenaufgangsgrafik; zeigt Sterne und Mond, wenn es Nacht ist. In diesem Artikel werden wir erforschen, wie sogenannte konditionale Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, die in den vorhergehenden Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was ein Konditional ist — eine Code-Struktur zur Ausführung verschiedener Code-Pfade, abhängig von einem Testergebnis.</li>
          <li>Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code> implementieren.</li>
          <li>Verwendung von Vergleichsoperatoren zur Erstellung von Tests.</li>
          <li>Implementierung von UND-, ODER- und NICHT-Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternäre Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("Soll ich einen Keks oder zwei essen?") bis zu großen ("Soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten, oder soll ich in die USA ziehen und Astrophysik studieren?")

Konditionale Anweisungen ermöglichen es uns, solches Entscheidungsverhalten in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis zu deren Ergebnis (vielleicht ist das Ergebnis von "einen Keks gegessen" "immer noch hungrig", und das Ergebnis von "zwei Kekse gegessen" ist "fühlte sich satt, aber Mama schimpfte mit mir, weil ich alle Kekse gegessen habe".)

![Eine Zeichentrickfigur, die einem Menschen ähnelt, hält ein Keks-Glas mit der Aufschrift 'Kekse'. Über dem Kopf der Figur schwebt ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen Keks oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else-Anweisungen

Werfen wir einen Blick auf die bei weitem häufigste Art von konditionalen Anweisungen, die Sie in JavaScript verwenden werden — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

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

1. Das Schlüsselwort `if` gefolgt von ein paar Klammern.
2. Eine Bedingung zum Testen, die innerhalb der Klammern platziert ist (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir früher im Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Satz geschweifter Klammern, innerhalb derer wir Code haben — dieser kann jeder beliebige Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Einen weiteren Satz geschweifter Klammern, innerhalb derer wir mehr Code haben — dieser kann jeder beliebige Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — es wird gesagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **sonst** führe Code B aus"

Sie sollten beachten, dass Sie das `else` und den zweiten Block geschweifter Klammern nicht einschließen müssen — das Folgende ist auch ein vollkommen legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Hier müssen Sie jedoch vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der konditionalen Anweisung gesteuert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, aber es könnte nicht das sein, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Als abschließender Punkt, obwohl es nicht empfohlen wird, sehen Sie manchmal `if...else`-Anweisungen ohne die geschweiften Klammern geschrieben:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Diese Syntax ist völlig gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein reales Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein reales Beispiel. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einem Haushaltsdienst gebeten. Der Elternteil könnte sagen: "Hey Liebling! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir ein Taschengeld extra, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Dieser Code führt dazu, dass die Variable `shoppingDone` immer `false` zurückgibt, was eine Enttäuschung für unser armes Kind bedeutet. Es wäre an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind den Einkauf erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (diese auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html) ansehen.)

### else if

Das letzte Beispiel hat uns zwei Auswahlen oder Ergebnisse geboten — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Auswahlen/Ergebnisse an Ihr `if...else` anzuhängen — mit `else if`. Jede zusätzliche Auswahl erfordert einen zusätzlichen Block, um zwischen `if () { }` und `else { }` eingefügt zu werden — sehen Sie sich das folgende ausführlichere Beispiel an, das Teil einer einfachen Wettervorhersageanwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das uns ermöglicht, verschiedene Wetteroptionen zu wählen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz sowohl auf das {{htmlelement("select")}}- als auch auf das {{htmlelement("p")}}-Element und fügen ein Ereignislistener zum `<select>`-Element hinzu, sodass, wenn sein Wert geändert wird, die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuellen Wert, der im `<select>`-Element ausgewählt ist. Wir verwenden dann eine konditionale Anweisung, um je nach Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Auswahl, im `else { }`-Block, ist im Grunde eine "letzte Rettung"-Option — der Code darin wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient sie dazu, den Text aus dem Absatz zu entfernen, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer entscheidet, die "--Wählen Sie eine Option--" Platzhaltereintragung erneut auszuwählen.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) ([siehe es live laufend](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) dort auch.)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen innerhalb unserer konditionalen Anweisungen zu testen. Wir haben Vergleichsoperatoren zuerst in unserem Artikel über [Basisrechenarten in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) betrachtet. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch mit einem anderen ist oder nicht.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung des Testens von booleschen (`true`/`false`) Werten machen und ein häufiges Muster, das Sie immer wieder antreffen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als konditionale Anweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist oder sogar existiert (d.h. nicht undefiniert ist). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und, um zu unserem vorherigen Beispiel über das Kind zurückzukehren, das einen Dienst für seine Eltern erledigt, könnten Sie es so schreiben:

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

### Verschachteln von if...else

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere einzufügen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersageanwendung aktualisieren, um einen weiteren Satz von Auswahlmöglichkeiten je nach Temperatur anzuzeigen:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Obwohl der Code zusammenarbeitet, funktioniert jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) hilfreich sein. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass alle einzeln `true` sein müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass einer oder mehrere von ihnen einzeln `true` sein müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu geben, kann das vorherige Code-Snippet so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Sehen wir uns ein schnelles ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ eines logischen Operators, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu verneinen. Lassen Sie uns ihn mit ODER in dem obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Snippet, wenn die ODER-Anweisung `true` zurückgibt, wird der NICHT-Operator sie verneinen, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können beliebig viele logische Anweisungen miteinander kombinieren, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide ODER-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in konditionalen Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten zu geben, die sie sein könnte, um `true` zurückzugeben, getrennt durch `||` (ODER) Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer `true` auswerten, da 7 (oder jeder andere von Null verschiedene Wert) immer `true` ergibt. Diese Bedingung besagt tatsächlich "wenn x gleich 5 ist oder 7 `true` ist — was es immer ist". Das ist logisch nicht das, was wir wollen! Um dies zum Funktionieren zu bringen, müssen Sie einen vollständigen Test auf jeder Seite des ODER-Operators angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Arbeit, bedingten Code zu ermöglichen, gut, sind aber nicht ohne ihre Nachteile. Sie sind hauptsächlich gut für Fälle, in denen Sie ein paar Auswahlmöglichkeiten haben, und jede erfordert eine angemessene Menge an Code, der ausgeführt werden muss, und/oder die Bedingungen sind komplex (zum Beispiel mehrere logische Operatoren). In Fällen, in denen Sie einfach eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Anweisung drucken möchten, je nach Bedingung, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und suchen dann durch mehrere Auswahlmöglichkeiten, bis sie eine finden, die mit dem Wert übereinstimmt, und führen den entsprechenden Code aus, der damit verbunden ist. Hier ist ein wenig Pseudocode, um Ihnen eine Vorstellung zu geben:

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
4. Ein Code, der ausgeführt wird, wenn die Auswahl mit dem Ausdruck übereinstimmt.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl mit dem Ausdruck/Wert übereinstimmt, stoppt der Browser hier die Ausführung des Codeblocks und fährt mit jedem darunterliegenden Code fort, der unter der Switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt vom genau gleichen Code-Muster wie bei einer der Fälle (Punkte 3–5), außer dass `default` keine Auswahl dahinter hat und Sie die `break`-Anweisung nicht benötigen, da es in dem Block sowieso nichts zu laufen gibt. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn sicher weglassen, wenn es keine Möglichkeit gibt, dass der Ausdruck einen unbekannten Wert annehmen könnte. Wenn es jedoch eine Möglichkeit dafür gibt, müssen Sie ihn einbeziehen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Sehen wir uns ein reales Beispiel an — wir werden unsere Wettervorhersageanwendung umschreiben, um eine Switch-Anweisung anstelle einer if...else-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (Live-Version [hier ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) ebenfalls.)

## Ternärer Operator

Es gibt ein letztes Stück Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie mit einigen Beispielen spielen lassen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn sie `true` ist und einen anderen, wenn sie `false` ist — dies kann in einigen Situationen nützlich sein und viel weniger Code erfordern als ein `if...else`-Block, wenn Sie zwei Auswahlen haben, die zwischen einem `true`/`false`-Zustand gewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Lassen Sie uns ein Beispiel betrachten:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine Geburtstagsglückwunschnachricht; wenn nicht, geben wir ihr den standardmäßigen täglichen Gruß.

### Ternärer Operator-Beispiel

Der ternäre Operator ist nicht nur dafür gedacht, Variable zu setzen; Sie können auch Funktionen oder Codezeilen ausführen — was immer Sie wollen. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem das Styling für die Website mit einem ternären Operator angewandt wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element zur Auswahl eines Themas (schwarz oder weiß), plus einen einfachen {{htmlelement("Heading_Elements", "h1")}} zur Anzeige eines Websitentitels. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Inputs) annimmt. Die Hintergrundfarbe der Website wird auf die erste übergebene Farbe gesetzt und ihre Textfarbe auf die zweite.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener, der eine Funktion, die einen ternären Operator enthält, ausführt. Sie beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern Schwarz und Weiß aus, was bedeutet, dass wir am Ende eine Hintergrundfarbe von Schwarz und eine Textfarbe von Weiß haben. Wenn es `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern Weiß und Schwarz aus, was bedeutet, dass die Farben der Website invertiert sind.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (dort auch in der [Live-Version ansehen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Einen `onchange` Ereignis-Handler, um zu erkennen, wenn der Wert im `<select>` Menü geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen Sie, um eine konditionale Anweisung innerhalb der `createCalendar()`-Funktion zu schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Den ausgewählten Monat (gespeichert in der Variable `choice`) betrachten. Dies wird der `<select>`-Elementwert nach dem Wechsel des Wertes sein, also "January" zum Beispiel.
2. Die Variable `days` demnach gleich der Anzahl der Tage im ausgewählten Monat zuweisen. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für die Zwecke dieses Beispiels ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate mit der gleichen Anzahl an Tagen zu einer einzelnen Bedingung zusammenzufassen.
- Überlegen Sie, welche Anzahl an Tagen am häufigsten vorkommt, und verwenden Sie dies als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer über die "Zurücksetzen"-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

In diesem Beispiel nehmen Sie das ternäre Operator-Beispiel, das wir zuvor gesehen haben, und konvertieren den ternären Operator in eine Switch-Anweisung, um uns zu ermöglichen, mehr Auswahlmöglichkeiten zur einfachen Website hinzuzufügen. Schauen Sie sich das {{htmlelement("select")}} an — dieses Mal sehen Sie, dass es nicht zwei Themenoptionen, sondern fünf hat. Sie müssen eine Switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Sie sollte die Variable `choice` als Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Auswahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, das heißt, `white`, `black`, `purple`, `yellow`, oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die Options-_Labels_, wie sie in der Live-Ausgabe angezeigt werden, großgeschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt und zwei Farbwerte übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Strings sind, sie müssen also in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer über die "Zurücksetzen"-Schaltfläche zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Konditionale Anweisungen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie jetzt wirklich über konditionale Strukturen in JavaScript wissen müssen! Als nächstes schauen wir uns an, wie man durch Code schleift.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Konditionale Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Ternärer (Bedingter) Operator Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
