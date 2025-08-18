---
title: Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend handeln, je nach verschiedenen Eingaben. Zum Beispiel, in einem Spiel, wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn sie morgens betrachtet wird, zeigt ein Sonnenaufgang-Graphik; zeigt Sterne und einen Mond, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie die sogenannten bedingten Anweisungen in JavaScript funktionieren.

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
          <li>Verstehen, was eine bedingte Anweisung ist — eine Code-Struktur für das Ausführen verschiedener Codepfade abhängig von einem Testergebnis.</li>
          <li>Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code> umsetzen.</li>
          <li>Verwenden von Vergleichsoperatoren, um Tests zu erstellen.</li>
          <li>Umsetzen von UND-, ODER- und NICHT-Logik in Tests.</li>
          <li>Switch-Anweisungen.</li>
          <li>Ternäre Operatoren.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Sie können es unter einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen Keks essen oder zwei?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meiner Familie arbeiten, oder sollte ich nach Amerika ziehen und Astrophysik studieren?").

Bedingte Anweisungen erlauben es uns, solche Entscheidungen in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel, "ein Keks oder zwei"), bis hin zum resultierenden Ergebnis dieser Entscheidungen (vielleicht wäre das Ergebnis von "einen Keks essen" "immer noch hungrig", und das Ergebnis von "zwei Kekse essen" wäre "fühlte sich satt, aber Mama schimpfte mich dafür, dass ich alle Kekse aß".)

![Eine Cartoonfigur, die eine Keksdose hält, die mit 'Cookies' beschriftet ist. Ein Fragezeichen schwebt über dem Kopf der Figur. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert dies, dass die Figur versucht zu entscheiden, ob sie einen Keks oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else Anweisungen

Schauen wir uns die mit Abstand gebräuchlichste Art von bedingter Anweisung an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else Syntax

Die grundlegende `if...else`-Syntax sieht so aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Hier haben wir:

1. Das Schlüsselwort `if` gefolgt von Klammern.
2. Eine Bedingung, die getestet wird, platziert in den Klammern (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir früher im Modul behandelt haben, und ergibt `true` oder `false`.
3. Ein Satz geschweifter Klammern, in dem wir ein Stück Code haben — dieser kann beliebiger Code sein, den wir mögen, und er läuft nur, wenn die Bedingung `true` ergibt.
4. Das Schlüsselwort `else`.
5. Ein weiterer Satz geschweifter Klammern, in dem wir noch mehr Code haben — dieser kann beliebiger Code sein, den wir mögen, und er läuft nur, wenn die Bedingung nicht `true` ist — oder mit anderen Worten, wenn die Bedingung `false` ist.

Dieser Code ist recht menschenlesbar — er sagt "**wenn** die **Bedingung** `true` ergibt, führe Code A aus, **sonst** führe Code B aus"

Sie sollten beachten, dass es nicht notwendig ist, das `else` und den zweiten Satz geschweifter Klammern einzuschließen — das folgende ist ebenfalls perfekt legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Allerdings müssen Sie hier vorsichtig sein — in diesem Fall wird die zweite Codeblock nicht durch die bedingte Anweisung gesteuert, daher läuft er **immer**, unabhängig davon, ob die Bedingung `true` oder `false` ergibt. Das ist nicht unbedingt eine schlechte Sache, aber es könnte nicht das sein, was Sie wollen — oft möchten Sie entweder einen Codeblock ausführen _oder_ den anderen, nicht beide.

Als letzter Punkt, obwohl nicht empfohlen, könnten Sie manchmal `if...else`-Anweisungen sehen, die ohne die geschweiften Klammern geschrieben sind:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, lassen Sie uns ein echtes Beispiel betrachten. Stellen Sie sich ein Kind vor, das von seiner Mutter oder seinem Vater um Hilfe bei einer Aufgabe gebeten wird. Der Elternteil könnte sagen: "Hey Liebling! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir ein zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

Dieser Code führt dazu, dass die Variable `shoppingDone` immer `false` ergibt, was für unser armes Kind eine Enttäuschung bedeutet. Es wäre an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind einkaufen war.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (auch [live in Aktion sehen](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel bot uns zwei Auswahlmöglichkeiten oder Ergebnisse — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Auswahlmöglichkeiten/Ergebnisse an Ihr `if...else` anzuhängen — mit `else if`. Jede zusätzliche Wahl erfordert einen zusätzlichen Block zwischen `if () { }` und `else { }` — sehen Sie sich das folgende aufwendigere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das uns erlaubt, verschiedene Wetteroptionen zu treffen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz sowohl auf das {{htmlelement("select")}}- als auch das {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Ereignis-Listener hinzu, so dass bei einer Werteänderung die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zunächst eine Variable namens `choice` auf den aktuellen Wert, der im `<select>`-Element ausgewählt ist. Dann verwenden wir eine bedingte Anweisung, um je nach Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die letzte Wahl im `else { }`-Block ist im Grunde eine "letzte Ausweg"-Option — der Code darin wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text des Absatzes zu leeren, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer beschließt, die anfängliche "--Machen Sie eine Wahl--" Platzhalteroption erneut auszuwählen.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) ([sehen Sie es live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) dort ebenfalls.)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen innerhalb unserer bedingten Anweisungen zu testen. Wir haben Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) behandelt. Unsere Optionen sind:

- `===` und `!==` — testen, ob ein Wert identisch mit einem anderen ist oder nicht.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich bzw. größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung für das Testen von booleschen (`true`/`false`) Werten machen und ein häufiges Muster, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, ergibt tatsächlich `true`, wenn er als Bedingung getestet wird, daher können Sie einen Variablennamen für sich allein verwenden, um zu testen, ob er `true` ist oder sogar existiert (also nicht undefined ist). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und, zum Beispiel auf unser vorheriges Beispiel zurückzukommen, wie das Kind eine Aufgabe für seine Eltern erledigt, könnte man es so schreiben:

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

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere zu platzieren — sie zu verschachteln. Beispielsweise könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um einen weiteren Satz von Auswahlmöglichkeiten anzuzeigen, je nachdem, wie die Temperatur ist:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Selbst wenn der gesamte Code zusammenarbeitet, funktioniert jede `if...else`-Anweisung vollkommen unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es, zwei oder mehr Ausdrücke zu verketten, so dass jeder einzelne davon `true` ergeben muss, damit der gesamte Ausdruck `true` ergibt.
- `||` — ODER; ermöglicht es, zwei oder mehr Ausdrücke zu verketten, so dass einer oder mehrere davon `true` ergeben müssen, damit der gesamte Ausdruck `true` ergibt.

Um Ihnen ein UND-Beispiel zu geben, kann das vorherige Beispiel-Snippet so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` ergeben.

Lassen Sie uns ein schnelles ODER-Beispiel anschauen:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ des logischen Operators, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns es mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Snippet, wenn der ODER-Ausdruck `true` ergibt, wird der NICHT-Operator ihn negieren, so dass der Gesamtausdruck `false` ergibt.

Sie können so viele logische Ausdrücke kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code im Inneren nur aus, wenn beide ODER-Ausdrücke `true` ergeben, was bedeutet, dass der Gesamtausdruck UND `true` ergibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in bedingten Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten zu geben, die sie sein könnte, um `true` zu ergeben, getrennt durch `||` (ODER) Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer zu `true` ausgewertet, da 7 (oder jeder andere nicht-null Wert) immer `true` ergibt. Diese Bedingung sagt tatsächlich: "wenn x gleich 5 ist, oder 7 wahr ist — was es immer ist". Dies ist logisch nicht das, was wir wollen! Um dies funktional zu machen, müssen Sie auf jeder Seite jedes ODER-Operators einen kompletten Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Aufgabe, bedingten Code zu aktivieren, gut, aber sie sind nicht ohne ihre Nachteile. Sie sind vor allem für Fälle geeignet, in denen Sie ein paar Auswahlmöglichkeiten haben und jede davon eine gewisse Menge an Code erfordert, das ausgeführt werden soll, und/oder die Bedingungen sind komplex (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie nur eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Aussage abhängig von einer Bedingung ausgeben möchten, kann die Syntax etwas unhandlich sein, insbesondere wenn Sie eine große Anzahl von Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und durchsuchen dann mehrere Auswahlmöglichkeiten, bis sie eine finden, die mit diesem Wert übereinstimmt, und führen dann den entsprechenden Code aus, der damit einhergeht. Hier ist etwas Pseudocode, um Ihnen eine Idee zu geben:

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

1. Das Schlüsselwort `switch`, gefolgt von einem Satz von Klammern.
2. Ein Ausdruck oder Wert innerhalb der Klammern.
3. Das Schlüsselwort `case`, gefolgt von einer Wahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt wird, wenn die Wahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Wahl dem Ausdruck/Wert entspricht, beendet der Browser die Ausführung des Codeblocks hier und geht zu jedem Code über, der unter der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5) wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau demselben Code-Muster wie einer der Fälle (Punkte 3–5), außer dass `default` keine Wahl danach hat, und Sie die `break`-Anweisung nicht benötigen, da danach im Block sowieso nichts mehr existiert. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den Abschnitt `default` nicht einfügen — Sie können ihn sicher weglassen, wenn keine Möglichkeit besteht, dass der Ausdruck einen unbekannten Wert ergeben könnte. Wenn es jedoch eine Möglichkeit dafür gibt, müssen Sie ihn einfügen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Lassen Sie uns ein echtes Beispiel betrachten — wir werden unsere Wettervorhersage-Anwendung umschreiben, um eine switch-Anweisung zu verwenden:

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
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es [live in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) dort ebenfalls).

## Ternärer Operator

Es gibt noch eine abschließende Syntax, die wir Ihnen vorstellen möchten, bevor wir Sie dazu bringen, mit einigen Beispielen zu spielen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn sie `true` ist, und einen anderen, wenn sie `false` ist — dies kann in einigen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Auswahlmöglichkeiten haben, die zwischen `true`/`false` getroffen werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Lassen Sie uns also ein Beispiel betrachten:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine fröhliche Geburtstagsnachricht; wenn nicht, geben wir ihr die tägliche Standardbegrüßung.

### Ternäroperator-Beispiel

Der ternäre Operator ist nicht nur zum Festlegen von Variablenwerten; Sie können auch Funktionen oder Codezeilen ausführen — was Sie wollen. Das folgende Live-Beispiel zeigt einen einfachen Theme-Wähler, bei dem das Styling für die Website mithilfe eines ternären Operators angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element zur Auswahl eines Themas (schwarz oder weiß), plus ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Websitetitel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt, und die Textfarbe auf die zweite bereitgestellte Farbe.

Schließlich haben wir einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener, der dazu dient, eine Funktion mit einem ternären Operator auszuführen. Sie startet mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` ergibt, führen wir die Funktion `update()` mit Parametern von schwarz und weiß aus, was bedeutet, dass wir eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß haben. Wenn sie `false` ergibt, führen wir die Funktion `update()` mit Parametern von weiß und schwarz aus, was bedeutet, dass die Seitenfarben invertiert sind.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es live [in Aktion](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Ein einfacher Kalender implementieren

In diesem Beispiel sollen Sie uns dabei helfen, eine einfache Kalender-Anwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das es dem Nutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Einen `change`-Ereignis-Handler, um zu erkennen, wann der im `<select>`-Menü ausgewählte Wert geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Um das Beispiel zu vervollständigen:

1. Klicken Sie **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie eine bedingte Anweisung innerhalb der Funktion `createCalendar()`, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:
   1. Den ausgewählten Monat betrachten (gespeichert in der Variable `choice`. Dies wird der `<select>`-Elementwert nach der Wertänderung sein, also "Januar" zum Beispiel).
   2. Die Variable `days` einem Wert gleichsetzen, der der Anzahl der Tage im ausgewählten Monat entspricht. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für das Beispiel ignorieren.

Hinweise:

- Es wird angeraten, logisches ODER zu verwenden, um mehrere Monate zu einer einzigen Bedingung zu gruppieren; viele von ihnen haben die gleiche Anzahl von Tagen.
- Überlegen Sie sich, welche Anzahl von Tagen die häufigste ist, und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

Ihr fertiges JavaScript sollte wie folgt aussehen:

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

## Mehr Farboptionen hinzufügen

In diesem Beispiel sollen Sie das zuvor gesehene ternäre Operator-Beispiel nehmen und den ternären Operator in eine switch-Anweisung umwandeln, um uns zu ermöglichen, der Website mehr Auswahlmöglichkeiten hinzuzufügen. Schauen Sie sich das {{htmlelement("select")}} an — diesmal werden Sie sehen, dass es nicht zwei Theme-Optionen hat, sondern fünf.

Um das Beispiel zu vervollständigen:

1. Klicken Sie **"Play"** im folgenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzu:
   1. Sie sollte die Variable `choice` als ihre Eingabeausdruck akzeptieren.
   2. Für jeden Fall sollte die Wahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, also `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte klein geschrieben sind, während die Options _Labels_, wie in der Live-Ausgabe angezeigt, großgeschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
   3. Für jeden Fall sollte die Funktion `update()` ausgeführt und zwei Farbwerte übergeben werden, die erste für die Hintergrundfarbe und die zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Strings sind, also müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mithilfe der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unterhalb der Live-Ausgabe ansehen.

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

Ihr fertiges JavaScript sollte wie folgt aussehen:

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

## Zusammenfassung

Das ist alles, was Sie derzeit über bedingte Strukturen in JavaScript wissen müssen! Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else-Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingte (ternäre) Operator-Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}
