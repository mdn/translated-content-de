---
title: Entscheidungen in Ihrem Code treffen — Konditionale
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend handeln, abhängig von verschiedenen Eingaben. Zum Beispiel in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn es am Morgen betrachtet wird, zeigen Sie eine Sonnenaufgangsgrafik; zeigen Sie Sterne und einen Mond, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie sogenannte Bedingungssätze in JavaScript funktionieren.

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
          <li>Verstehen, was ein Konditional ist — eine Code-Struktur zur Ausführung unterschiedlicher Codepfade abhängig von einem Testergebnis.</li>
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

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen oder zwei Kekse essen?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten, oder soll ich nach Amerika ziehen und Astrophysik studieren?")

Bedingungssätze ermöglichen es uns, solche Entscheidungsfindungen in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel, "ein Keks oder zwei"), bis zum resultierenden Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" sein "fühlte sich immer noch hungrig", und das Ergebnis von "zwei Kekse gegessen" könnte sein "fühlte sich satt, aber Mama hat mich dafür geschimpft, dass ich alle Kekse gegessen habe".)

![Eine Comicfigur, die einer Person ähnelt und ein Keks-Glas hält, auf dem 'Kekse' steht. Über dem Kopf der Figur steht ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen implizieren sie, dass die Figur versucht zu entscheiden, ob sie einen oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else-Anweisungen

Lassen Sie uns einen Blick auf die bei weitem häufigste Art von Bedingungssätzen werfen, die Sie in JavaScript verwenden werden — die bescheidene [`if...else` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

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

1. Das Schlüsselwort `if`, gefolgt von einigen Klammern.
2. Eine Bedingung, die getestet werden soll, innerhalb der Klammern platziert (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir früher im Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Paar geschweifte Klammern, in denen sich etwas Code befindet — dies kann jeder beliebige Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiteres Paar geschweifte Klammern, in denen sich weiterer Code befindet — dies kann jeder beliebige Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschlich lesbar — er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **sonst** Code B"

Sie sollten beachten, dass Sie das `else` und den zweiten Block mit geschweiften Klammern nicht einschließen müssen — das Folgende ist ebenfalls vollkommen legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Hier müssen Sie jedoch vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der Bedingungsanweisung kontrolliert, daher wird er **immer** ausgeführt, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Das ist nicht unbedingt eine schlechte Sache, aber es könnte nicht das sein, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Als letzter Punkt, obwohl nicht empfohlen, werden Sie manchmal `if...else`-Anweisungen ohne die geschweiften Klammern geschrieben sehen:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein echtes Beispiel. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einer Aufgabe gebeten. Der Elternteil könnte sagen "Hey Liebling! Wenn du mir beim Einkaufen hilfst, werde ich dir zusätzliches Taschengeld geben, damit du dir das Spielzeug leisten kannst, das du haben wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code führt dazu, dass die Variable `shoppingDone` immer `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es läge an uns, einen Mechanismus bereitzustellen, mit dem der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind die Einkäufe erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel gab uns zwei Möglichkeiten oder Ergebnisse — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen/Ergebnisse an Ihr `if...else` zu hängen — mit `else if`. Jede zusätzliche Entscheidung erfordert einen weiteren Block, der zwischen `if () { }` und `else { }` eingefügt werden muss — schauen Sie sich das folgende etwas kompliziertere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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
2. Im JavaScript speichern wir eine Referenz sowohl zum {{htmlelement("select")}} als auch zum {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Event-Listener hinzu, damit die Funktion `setWeather()` ausgeführt wird, wenn der Wert geändert wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zunächst eine Variable namens `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Wir verwenden dann eine Bedingungsanweisung, um je nach Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, dass alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl, im `else { }`-Block, ist im Grunde eine "letzte Ausweg"-Option — der darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text aus dem Absatz zu löschen, wenn nichts ausgewählt ist, z. B. wenn ein Benutzer die "--Make a choice--"-Platzhalteroption, die am Anfang angezeigt wird, erneut auswählt.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html).)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren Bedingungsanweisungen zu testen. Wir haben Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Nummern und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) betrachtet. Unsere Optionen sind:

- `===` und `!==` — testen, ob ein Wert identisch mit oder nicht identisch mit einem anderen Wert ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer Wert ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen Wert ist.

Wir wollten eine spezielle Erwähnung von Tests mit booleschen (`true`/`false`) Werten und einem häufigen Muster machen, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als Konditionalanweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist oder sogar existiert (das heißt, er ist nicht undefiniert). Also zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und zurück zu unserem früheren Beispiel über das Kind, das eine Aufgabe für seine Eltern erledigt, könnten Sie es so schreiben:

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

Obwohl der gesamte Code zusammenarbeitet, arbeitet jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, so dass alle einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, so dass einer oder mehrere von ihnen einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu geben, kann das vorherige Codebeispiel in Folgendes umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` ergeben.

Schauen wir uns ein schnelles ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ von logischem Operator, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie ihn uns mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Codeblock, wenn die ODER-Anweisung `true` zurückgibt, wird der NICHT-Operator sie negieren, so dass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Aussagen kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code darin nur aus, wenn beide ODER-Aussagen `true` zurückgeben, was bedeutet, dass die gesamte UND-Aussage `true` zurückgeben wird:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in Konditionsanweisungen ist, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten zu geben, die sie sein könnte, um `true` zurückzugeben, getrennt durch `||` (ODER)-Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer `true` auswerten, da 7 (oder jeder andere von null verschiedene Wert) immer `true` ergibt. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist oder 7 wahr ist — was es immer ist". Das ist logisch nicht das, was wir wollen! Um dies funktionieren zu lassen, müssen Sie einen vollständigen Test auf beiden Seiten jedes ODER-Operators spezifizieren:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Aufgabe, bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne ihre Nachteile. Sie eignen sich hauptsächlich für Fälle, in denen Sie ein paar Auswahlmöglichkeiten haben und jeder eine angemessene Menge an Code zur Ausführung benötigt, und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie einfach eine Variable auf einen bestimmten Auswahlwert setzen oder eine bestimmte Anweisung je nach Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und durchsuchen dann mehrere Auswahlmöglichkeiten, bis sie eine finden, die diesem Wert entspricht, und führen den entsprechenden Code aus, der damit einhergeht. Hier ist ein Pseudocode, um Ihnen eine Vorstellung zu geben:

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
3. Das Schlüsselwort `case`, gefolgt von einer Auswahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt wird, wenn die Auswahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl dem Ausdruck/Wert entspricht, stoppt der Browser die Ausführung des Codeblocks hier und fährt mit einem Code fort, der unterhalb der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt genau vom gleichen Code-Muster wie einer der Fälle (Punkte 3–5), außer dass `default` keine Auswahl danach hat und Sie die `break`-Anweisung nicht benötigen, da es sowieso nichts auszuführen gibt, nachdem dies im Block abgeschlossen ist. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn sicher weglassen, wenn es keine Chance gibt, dass der Ausdruck einen unbekannten Wert erhalten könnte. Wenn es jedoch eine Chance dafür gibt, müssen Sie ihn einbeziehen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Werfen wir einen Blick auf ein echtes Beispiel — wir werden unsere Wettervorhersage-Anwendung umschreiben, um eine switch-Anweisung anstelle.

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
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html).)

## Ternärer Operator

Es gibt noch eine letzte Syntax, die wir Ihnen vorstellen möchten, bevor wir Sie mit einigen Beispielen spielen lassen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn er `true` ist, und einen anderen, wenn er `false` ist — dies kann in einigen Situationen nützlich sein und erheblich weniger Code als ein `if...else` Block benötigen, wenn Sie zwei Auswahlmöglichkeiten haben, zwischen denen gemäß einer `true`/`false`-Bedingung entschieden wird. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr die standardmäßige tägliche Begrüßung.

### Ternär-Operator-Beispiel

Der ternäre Operator ist nicht nur zum Setzen von Variablenwerten; Sie können auch Funktionen oder Codezeilen ausführen — was immer Sie wollen. Das folgende Live-Beispiel zeigt einen einfachen Themen-Auswähler, bei dem das Styling für die Seite mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element zur Auswahl eines Themas (schwarz oder weiß) und ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Websitetitel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste angegebene Farbe gesetzt und die Textfarbe auf die zweite.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Event-Listener, der eine Funktion enthält, die einen ternären Operator verwendet. Er beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` ergibt, führen wir die Funktion `update()` mit den Parametern schwarz und weiß aus, was bedeutet, dass wir am Ende eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß haben. Wenn es `false` ergibt, führen wir die Funktion `update()` mit den Parametern weiß und schwarz aus, was bedeutet, dass die Seitenfarben invertiert werden.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html).)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, um dem Benutzer zu ermöglichen, zwischen verschiedenen Monaten zu wählen.
- Einen `onchange` Event-Handler, um zu erkennen, wann der im `<select>`-Menü ausgewählte Wert geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen, dass Sie eine Bedingungsanweisung innerhalb der `createCalendar()`-Funktion schreiben, direkt unter dem `// ADD CONDITIONAL HERE`-Kommentar. Sie sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der `choice`-Variable. Dies wird der `<select>`-Elementwert nach der Wertänderung sein, also zum Beispiel "January").
2. Die `days`-Variable zuweisen, dass sie gleich der Anzahl der Tage im ausgewählten Monat ist. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für die Zwecke dieses Beispiels ignorieren.

Tipps:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate in einer einzigen Bedingung zusammenzufassen; viele haben dieselbe Anzahl von Tagen.
- Denken Sie darüber nach, welche Anzahl von Tagen am häufigsten ist, und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der "Zurücksetzen"-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken, drücken Sie "Lösung zeigen", um eine Lösung zu sehen.

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

In diesem Beispiel werden Sie das Beispiel mit dem ternären Operator, das wir zuvor gesehen haben, nehmen und den ternären Operator in eine switch-Anweisung konvertieren, um uns zu erlauben, mehr Auswahlmöglichkeiten auf die einfache Website anzuwenden. Schauen Sie sich das {{htmlelement("select")}} an — dieses Mal werden Sie sehen, dass es nicht zwei Themenoptionen gibt, sondern fünf. Sie müssen unterhalb des Kommentars `// ADD SWITCH STATEMENT` eine switch-Anweisung hinzufügen:

- Es sollte die `choice`-Variable als Eingangsausdruck akzeptieren.
- Für jeden Fall sollte die Wahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, nämlich `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die Options-Labels, wie im Live-Ausgang angezeigt, großgeschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt und zwei Farbwerte übergeben werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Strings sind, sodass sie in Anführungszeichen gesetzt werden müssen.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der "Zurücksetzen"-Schaltfläche zurücksetzen. Wenn Sie wirklich stecken, drücken Sie "Lösung zeigen", um eine Lösung zu sehen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Konditionale](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals).

## Zusammenfassung

Das ist alles, was Sie im Moment über Konditionsstrukturen in JavaScript wissen müssen! Als Nächstes werden wir uns mit dem Schleifen durch den Code befassen.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Konditionsanweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz für if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz für den konditionalen (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Loops", "Learn_web_development/Core/Scripting")}}
