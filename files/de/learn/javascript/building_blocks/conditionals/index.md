---
title: Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen
slug: Learn/JavaScript/Building_blocks/conditionals
l10n:
  sourceCommit: 82463cbfc6c49ab698d4f051bacada4f8535e083
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechende Aktionen je nach den unterschiedlichen Eingaben durchführen. Zum Beispiel in einem Spiel endet es, wenn die Anzahl der Leben des Spielers 0 beträgt. In einer Wetter-App: Wenn die App am Morgen betrachtet wird, wird eine Sonnenaufgangsgrafik angezeigt; Sterne und ein Mond bei Nacht. In diesem Artikel werden wir untersuchen, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Verstehen, wie man bedingte Strukturen in JavaScript verwendet.</td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen oder zwei Kekse essen?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meines Vaters arbeiten, oder sollte ich nach Amerika ziehen und Astrophysik studieren?").

Bedingte Anweisungen erlauben es uns, solch eine Entscheidungsfindung in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "einen Keks oder zwei"), bis zum Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" "fühlte sich immer noch hungrig an", und das Ergebnis von "zwei Kekse gegessen" könnte "fühlte sich satt, aber Mama schalt mich dafür, dass ich alle Kekse gegessen habe").

![Eine Cartoonfigur, die einer Person ähnelt und ein Keksgefäß mit der Aufschrift 'Cookies' hält. Über dem Kopf der Figur ist ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen oder zwei Kekse will.](cookie-choice-small.png)

## if...else-Anweisungen

Schauen wir uns die bei weitem häufigste Art von bedingter Anweisung an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlagen der if...else-Syntax

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
2. Eine zu testende Bedingung, die innerhalb der Klammern platziert ist (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators), die wir im letzten Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Satz von geschweiften Klammern, in dem sich ein Code befindet — dies kann jeder Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiterer Satz von geschweiften Klammern, in dem sich weiterer Code befindet — dies kann jeder Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder anders ausgedrückt, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **ansonsten** führe Code B aus".

Sie sollten beachten, dass Sie das `else` und den zweiten Block mit geschweiften Klammern nicht einschließen müssen — das Folgende ist ebenfalls vollkommen legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Hier müssen Sie jedoch vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der Bedingungsanweisung kontrolliert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Das ist nicht unbedingt schlecht, aber es könnte nicht das sein, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Zuletzt, obwohl es nicht empfohlen wird, könnten Sie manchmal `if...else`-Anweisungen ohne die geschweiften Klammern geschrieben sehen:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, lassen Sie uns ein echtes Beispiel betrachten. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater gebeten, bei einer Aufgabe zu helfen. Der Elternteil könnte sagen: "Hey Schatz! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir etwas zusätzliche Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code, wie gezeigt, führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es liegt an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind die Einkäufe erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) sehen (sehen Sie es sich auch live an [hier](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel stellt uns zwei Möglichkeiten oder Ergebnisse zur Verfügung — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen/Ergebnisse an Ihre `if...else` anzuhängen — indem Sie `else if` verwenden. Jede zusätzliche Wahl erfordert einen weiteren Block, der zwischen `if () { }` und `else { }` gesetzt wird — schauen Sie sich das folgende ausführlichere Beispiel an, das Teil einer einfachen Wettervorhersageanwendung sein könnte:

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
2. Im JavaScript speichern wir eine Referenz sowohl auf das {{htmlelement("select")}} als auch das {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Ereignislistener hinzu, sodass, wenn sein Wert geändert wird, die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuellen Wert, der im `<select>`-Element ausgewählt wurde. Dann verwenden wir eine bedingte Anweisung, um je nach Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, mit Ausnahme der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Auswahl im `else { }`-Block ist im Grunde eine "Letzte Option" — der darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient er dazu, den Text aus dem Absatz zu entfernen, wenn nichts ausgewählt ist, zum Beispiel wenn ein Benutzer entscheidet, die eingangs angezeigte Platzhalteroption "--Make a choice--" erneut zu wählen.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (sehen Sie es sich auch live an [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html).)

### Ein Hinweis zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren bedingten Anweisungen zu testen. Wir haben uns Vergleichsoperatoren zuerst in unserem Artikel über [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators) angesehen. Unsere Optionen sind:

- `===` und `!==` — testen, ob ein Wert identisch oder nicht identisch mit einem anderen ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung des Testens von boolean (`true`/`false`) Werten machen und ein häufiges Muster, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird, daher können Sie einen Variablennamen alleine verwenden, um zu überprüfen, ob er `true` ist, oder sogar, ob er existiert (das heißt, er ist nicht undefiniert). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und zurück zu unserem vorherigen Beispiel über das Kind, das eine Aufgabe für seinen Elternteil erledigt, könnten Sie es so schreiben:

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

### Verschachtelte if...else

Es ist vollkommen in Ordnung, eine `if...else`-Anweisung in eine andere einzufügen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersageanwendung aktualisieren, um eine weitere Auswahl zu zeigen, je nach Temperatur:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Auch wenn der Code zusammenarbeitet, arbeitet jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: AND, OR und NOT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Bei der Verwendung in Bedingungen bewirken die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verbinden, sodass alle einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verbinden, sodass einer oder mehrere einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein Beispiel für AND zu geben, kann der vorherige Beispielcode so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Schauen wir uns ein kurzes ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ eines logischen Operators, NOT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns ihn mit OR im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Ausschnitt, wenn die OR-Anweisung `true` zurückgibt, wird der NOT-Operator es negieren, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Ausdrücke zusammenfügen, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur dann aus, wenn beide OR-Ausdrücke wahr sind, was bedeutet, dass die gesamte AND-Anweisung wahr sein wird:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen OR-Operators in bedingten Anweisungen ist es, zu versuchen, die Variable, deren Wert Sie überprüfen, nur einmal zu benennen und dann eine Liste von Werten anzugeben, die sie haben könnte, um true zurückzugeben, getrennt durch `||` (OR)-Operatoren. Ein Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer zu true ausgewertet, da 7 (oder jeder andere von null verschiedene Wert) immer `true` ergibt. Diese Bedingung sagt eigentlich "wenn x gleich 5 ist, oder 7 ist wahr — was es immer ist". Das ist logisch nicht das, was wir wollen! Um dies richtig zu machen, müssen Sie auf jeder Seite des ODER-Operators einen vollständigen Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Arbeit, bedingten Code zu ermöglichen, gut, aber sie haben auch ihre Nachteile. Sie sind hauptsächlich gut für Fälle, in denen Sie ein paar Auswahlmöglichkeiten haben und jede eine angemessene Menge an Code ausgeführt werden muss und/oder die Bedingungen komplex sind (z.B. mehrere logische Operatoren). Für Fälle, in denen Sie nur eine Variable auf eine bestimmte Auswahl eines Wertes setzen oder eine bestimmte Anweisung ausgeben möchten, je nach Bedingung, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und durchlaufen dann mehrere Auswahlmöglichkeiten, bis sie eine finden, die mit diesem Wert übereinstimmt, und führen den entsprechenden Code aus, der damit verbunden ist. Hier ist etwas mehr Pseudocode, um Ihnen eine Vorstellung zu geben:

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

1. Das Schlüsselwort `switch`, gefolgt von einer Reihe von Klammern.
2. Ein Ausdruck oder Wert innerhalb der Klammern.
3. Das Schlüsselwort `case`, gefolgt von einer Auswahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt wird, wenn die Auswahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl dem Ausdruck/Wert entspricht, stoppt der Browser die Ausführung des Codeblocks hier und fährt mit jedem Code fort, der unter der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von exakt demselben Code-Muster wie einer der Fälle (Punkte 3–5), außer dass `default` keine Auswahl hinter sich hat, und Sie die `break`-Anweisung nicht benötigen, da nach diesem ohnehin nichts mehr im Block ausgeführt wird. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlen übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn sicher weglassen, wenn es keine Möglichkeit gibt, dass der Ausdruck einen unbekannten Wert haben könnte. Wenn es jedoch eine solche Möglichkeit gibt, müssen Sie ihn einbeziehen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Lassen Sie uns ein echtes Beispiel ansehen — wir schreiben unsere Wettervorhersageanwendung um, um eine switch-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es sich auch live an [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html).)

## Ternärer Operator

Es gibt ein letztes Stück Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie dazu bringen, ein paar Beispiele zu bearbeiten. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn diese `true` ist, und einen anderen, wenn sie `false` ist — dies kann in manchen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Auswahlen haben, die durch eine `true`/`false`-Bedingung gewählt werden. Der Pseudocode sieht folgendermaßen aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein einfaches Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr den standardmäßigen täglichen Gruß.

### Ternäre Operator-Beispiel

Der ternäre Operator ist nicht nur zum Setzen von Variablenwerten gedacht; es können auch Funktionen oder Codezeilen ausgeführt werden — was auch immer Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem die Gestaltung der Website mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema zu wählen (schwarz oder weiß), plus eine einfache {{htmlelement("Heading_Elements", "h1")}}, um einen Websitetitel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) akzeptiert. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt und die Textfarbe auf die zweite bereitgestellte Farbe.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener, der dazu dient, eine Funktion mit einem ternären Operator auszuführen. Es beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern schwarz und weiß aus, was bedeutet, dass wir eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß erhalten. Wenn es `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern weiß und schwarz aus, was bedeutet, dass die Website-Farben umgekehrt sind.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es sich auch live an, [hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html).)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel sollen Sie uns dabei helfen, eine einfache Kalenderanwendung fertigzustellen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, mit dem der Benutzer zwischen verschiedenen Monaten wählen kann.
- Einen `onchange`-Ereignishandler, um zu erkennen, wann sich der ausgewählte Wert im `<select>`-Menü ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen, dass Sie eine bedingte Anweisung innerhalb der `createCalendar()`-Funktion schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Den ausgewählten Monat betrachten (in der Variablen `choice` gespeichert. Dies wird der `<select>`-Elementwert sein, nachdem sich der Wert ändert, also beispielsweise "Januar".)
2. Die Variable `days` gleich der Anzahl der Tage im ausgewählten Monat zuordnen. Dafür müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Für die Zwecke dieses Beispiels können Sie Schaltjahre ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate in einer einzigen Bedingung zusammenzufassen; viele von ihnen haben die gleiche Anzahl von Tagen.
- Denken Sie darüber nach, welche Anzahl von Tagen am häufigsten vorkommt und verwenden Sie diese als Standardwert.

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
    <script>${code}</script>
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

In diesem Beispiel sollen Sie das Ternäroperatorbeispiel, das wir zuvor gesehen haben, nehmen und den Ternäroperator in eine switch-Anweisung umwandeln, um uns die Möglichkeit zu geben, mehr Auswahlmöglichkeiten für die einfache Website anzuwenden. Schauen Sie sich das {{htmlelement("select")}} an — diesmal sehen Sie, dass es nicht zwei Themenoptionen gibt, sondern fünf. Sie müssen eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Es sollte die `choice`-Variable als Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Wahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, nämlich `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte klein geschrieben sind, während die Optionsbeschriftungen, wie sie in der Live-Ausgabe angezeigt werden, großgeschrieben sind. Sie sollten die Kleinbuchstabenwerte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt werden und zwei Farbwerte übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind, sodass sie in Anführungszeichen gesetzt werden müssen.

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
    <script>${code}</script>
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

## Abschluss

Und das ist alles, was Sie momentan über bedingte Strukturen in JavaScript wissen müssen! Wenn es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel noch einmal zu lesen oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu bitten.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else-Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingter (ternärer) Operator-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
