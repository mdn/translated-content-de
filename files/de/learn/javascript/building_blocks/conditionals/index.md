---
title: Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen
slug: Learn/JavaScript/Building_blocks/conditionals
l10n:
  sourceCommit: 82463cbfc6c49ab698d4f051bacada4f8535e083
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und je nach unterschiedlichen Eingaben entsprechende Aktionen ausführen. Zum Beispiel: In einem Spiel ist es Game Over, wenn die Anzahl der Leben des Spielers 0 ist. In einer Wetter-App, wenn sie am Morgen betrachtet wird, zeigt sie eine Sonnenaufgangsgrafik; bei Nacht zeigt sie Sterne und den Mond. In diesem Artikel werden wir erkunden, wie die sogenannten bedingten Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >Erste Schritte in JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Bedingte Strukturen in JavaScript verstehen.</td>
    </tr>
  </tbody>
</table>

## Sie können es zu einer Bedingung haben!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("sollte ich einen Keks oder zwei essen?") bis zu großen Entscheidungen ("soll ich in meinem Heimatland bleiben und auf der Farm meines Vaters arbeiten, oder sollte ich nach Amerika ziehen und Astrophysik studieren?").

Bedingte Anweisungen erlauben es uns, solche Entscheidungsprozesse in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis hin zum Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" "immer noch hungrig" sein, und das Ergebnis von "zwei Kekse gegessen" könnte "fühlte mich satt, aber Mama schimpfte mich, weil ich alle Kekse gegessen habe" sein).

![Ein Cartoon-Charakter, der einer Person ähnelt und ein Keks-Glas mit der Aufschrift 'Cookies' hält. Es gibt ein Fragezeichen über dem Kopf der Figur. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass der Charakter versucht zu entscheiden, ob er einen oder zwei Kekse möchte.](cookie-choice-small.png)

## if...else Anweisungen

Schauen wir uns die bei weitem gebräuchlichste Art von bedingten Anweisungen an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

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

1. Das Schlüsselwort `if`, gefolgt von einigen Klammern.
2. Eine zu testende Bedingung, die innerhalb der Klammern platziert ist (typischerweise "ist dieser Wert größer als dieser andere Wert?" oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators), die wir im letzten Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Satz geschweifter Klammern, innerhalb derer wir einen Code haben — dies kann jeglicher Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiterer Satz geschweifter Klammern, innerhalb derer wir weiteren Code haben — auch dies kann jeglicher Code sein, den wir möchten, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — in anderen Worten, die Bedingung ist `false`.

Dieser Code ist recht menschenlesbar — er sagt "**if** die **Bedingung** gibt `true` zurück, führe Code A aus, **else** führe Code B aus."

Sie sollten beachten, dass Sie nicht den `else` und den zweiten Block in geschweiften Klammern einfügen müssen — folgendes ist ebenfalls vollkommen legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Jedoch müssen Sie hier vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung gesteuert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, aber es könnte nicht das sein, was Sie wollen — oft möchten Sie einen Block von Code _oder_ den anderen ausführen, nicht beide.

Als abschließenden Punkt sei gesagt, dass Sie manchmal `if...else`-Anweisungen ohne geschweifte Klammern geschrieben sehen könnten:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Linien sowie Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein reales Beispiel. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einer Hausarbeit gebeten. Der Elternteil könnte sagen: "Hey Schatz! Wenn du mir hilfst, indem du einkaufen gehst, gebe ich dir etwas zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir dies folgendermaßen darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code führt wie gezeigt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was für unser armes Kind Enttäuschung bedeutet. Es liegt an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind einkaufen gegangen ist.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (sehen Sie es auch [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Im letzten Beispiel hatten wir zwei Auswahlmöglichkeiten oder Ergebnisse — aber was, wenn wir mehr als zwei möchten?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen oder Ergebnisse mit Ihrem `if...else` zu verketten — mit `else if`. Jede zusätzliche Wahl benötigt einen zusätzlichen Block, den man zwischen `if () { }` und `else { }` einfügt — schauen Sie sich das folgende, umfangreichere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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

1. Hier haben wir ein HTML-Element {{htmlelement("select")}}, das uns ermöglicht, verschiedene Wetterauswahlen zu treffen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz sowohl zum {{htmlelement("select")}}-Element als auch zum {{htmlelement("p")}}-Element und fügen dem `<select>`-Element einen Ereignis-Listener hinzu, sodass bei einer Änderung seines Wertes die `setWeather()`-Funktion ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Dann verwenden wir eine bedingte Anweisung, um verschiedenen Text im Absatz je nach Wert von `choice` anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer die erste, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl, im `else { }`-Block, ist im Grunde eine "letzte Option" — der Code darin wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient sie dazu, den Text aus dem Absatz zu löschen, wenn nichts ausgewählt ist, zum Beispiel wenn ein Benutzer sich entscheidet, die "--Wählen Sie eine Option--"-Platzhalteroption am Anfang erneut auszuwählen.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (sehen Sie es dort [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html).)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen in unseren bedingten Anweisungen zu testen. Wir haben Vergleichsoperatoren zuerst in unserem Artikel über [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators) betrachtet. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch ist mit oder nicht identisch ist mit einem anderen.
- `<` und `>` — testen, ob ein Wert kleiner oder größer ist als ein anderer.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich bzw. größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung über das Testen von boolean (`true`/`false`) Werten machen und ein häufiges Muster, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn als bedingte Anweisung getestet, daher können Sie einen Variablennamen alleine verwenden, um zu testen, ob er `true` ist oder sogar existiert (d. h. er ist nicht undefined). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und bezugnehmend auf unser vorheriges Beispiel über das Kind, das eine Arbeit für ihren Elternteil erledigt, könnten Sie es so schreiben:

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

Es ist vollkommen in Ordnung, eine `if...else`-Anweisung in einer anderen zu platzieren — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um eine weitere Auswahl zu zeigen, abhängig davon, wie die Temperatur ist:

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

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass alle einzeln `true` sein müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass einer oder mehrere einzeln `true` sein müssen, damit der gesamte Ausdruck `true` zurückgibt.

Zum Beispiel im UND-Beispiel kann das vorherige Beispiel-Snippet so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Die erste Codezeile wird nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Schauen wir uns ein kurzes ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte Typ des logischen Operators, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns ihn mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Schnipsel, wenn die ODER-Anweisung `true` zurückgibt, wird der NICHT-Operator sie negieren, sodass der Gesamtausdruck `false` zurückgibt.

Sie können so viele logische Aussagen kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide ODER-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgeben wird:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in bedingten Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten, die sie haben könnte, durch `||` (ODER) Operatoren getrennt anzugeben. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb `if ()` immer `true` auswerten, da 7 (oder ein anderer nicht-null Wert) immer `true` ist. Diese Bedingung sagt eigentlich "wenn x gleich 5 ist oder 7 wahr ist — was es immer ist". Dies ist logisch nicht das, was wir wollen! Um dies funktionieren zu lassen, müssen Sie einen vollständigen Test auf jeder Seite des ODER-Operators angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch Anweisungen

`if...else`-Anweisungen machen ihre Arbeit, bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne ihre Nachteile. Sie sind vor allem gut für Fälle, in denen Sie ein paar Wahlmöglichkeiten haben und jede eine angemessene Menge an Code zur Ausführung erfordert, und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie einfach nur eine Variable auf einen bestimmten Wert einstellen oder eine bestimmte Anweisung in Abhängigkeit von einer Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, insbesondere wenn Sie eine große Anzahl an Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch` Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und durchsuchen dann mehrere Auswahlmöglichkeiten, bis sie eine finden, die diesem Wert entspricht, und führen den entsprechenden Code aus. Hier ist etwas mehr Pseudocode, um Ihnen eine Idee zu geben:

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
2. Einen Ausdruck oder Wert innerhalb der Klammern.
3. Das Schlüsselwort `case`, gefolgt von einer Wahlmöglichkeit, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Ein Code, der ausgeführt wird, wenn die Wahlmöglichkeit mit dem Ausdruck übereinstimmt.
5. Eine `break` Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Wahlmöglichkeit mit dem Ausdruck/Wert übereinstimmt, stoppt der Browser die Ausführung des Codeblocks hier und geht zu einem Code darunter weiter, der den Schalterblock nicht enthält.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau demselben Code-Muster wie einer der Fälle (Punkte 3–5), außer dass `default` keine Wahl hat und Sie die `break`-Anweisung nicht benötigen, da sowieso nichts in dem Block nach dieser Anweisung ausgeführt wird. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Wahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht inkludieren — Sie können ihn weglassen, wenn es keine Möglichkeit gibt, dass der Ausdruck einen unbekannten Wert ergibt. Wenn es jedoch eine solche Möglichkeit gibt, müssen Sie ihn eingeben, um unbekannte Fälle zu behandeln.

### Ein switch Beispiel

Werfen wir einen Blick auf ein echtes Beispiel — wir werden unsere Wettervorhersage-Anwendung umschreiben, um eine switch-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es dort [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html).)

## Ternärer Operator

Es gibt ein letztes bisschen Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie mit einigen Beispielen spielen lassen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn es `true` ist, und einen anderen, wenn es `false` ist — dies kann in einigen Situationen nützlich sein und viel weniger Code benötigen als ein `if...else`-Block, wenn Sie zwei Auswahlmöglichkeiten haben, die durch eine `true`/`false` Bedingung gewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein einfaches Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr den Standardtagesgruß.

### Ternärer Operator Beispiel

Der ternäre Operator ist nicht nur für das Setzen von Variablenwerten gedacht; Sie können auch Funktionen ausführen oder Codezeilen verwenden — was Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem das Styling der Seite mit einem ternären Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema zu wählen (schwarz oder weiß), plus eine einfache {{htmlelement("Heading_Elements", "h1")}}, um einen Website-Titel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) nimmt. Der Hintergrund der Website wird auf die erste bereitgestellte Farbe gesetzt und die Textfarbe auf die zweite.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener, der eine Funktion mit einem ternären Operator ausführt. Er beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn diese `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern schwarz und weiss aus, was bedeutet, dass wir einen schwarzen Hintergrund und eine weiße Textfarbe erhalten. Wenn sie `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern weiß und schwarz aus, was bedeutet, dass die Seitenfarben umgekehrt sind.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es dort [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html).)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, um dem Benutzer die Auswahl zwischen verschiedenen Monaten zu ermöglichen.
- Einen `onchange`-Ereignishandler, um zu erkennen, wenn sich der ausgewählte Wert im `<select>`-Menü ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir brauchen Sie, um eine bedingte Anweisung in der Funktion `createCalendar()` direkt unterhalb des Kommentars `// ADD CONDITIONAL HERE` zu schreiben. Sie sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der Variablen `choice`. Dies ist der Wert des `<select>`-Elements nach der Änderung des Wertes, also zum Beispiel "Januar").
2. Die Variable `days` auf die Anzahl der Tage im ausgewählten Monat setzen. Dafür müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Schaltjahre können für die Zwecke dieses Beispiels ignoriert werden.

Hinweise:

- Ihnen wird geraten, logisches ODER zu verwenden, um mehrere Monate zu einer einzigen Bedingung zu gruppieren; viele von ihnen haben dieselbe Anzahl an Tagen.
- Denken Sie darüber nach, welche Anzahl an Tagen am häufigsten vorkommt und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie immer das Beispiel mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Mehr Farboptionen

In diesem Beispiel werden Sie das Ternärer-Operator-Beispiel, das wir zuvor gesehen haben, in eine `switch`-Anweisung umwandeln, um uns zu ermöglichenMehr Auswahlmöglichkeiten auf die einfache Website anwenden. Schauen Sie sich das {{htmlelement("select")}}-Element an — dieses Mal werden Sie sehen, dass es nicht zwei Themenoptionen, sondern fünf hat. Sie müssen eine `switch`-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Sie sollte die Variable `choice` als Eingangsausdruck akzeptieren.
- Für jeden Fall sollte die Wahl einer der möglichen `<option>`-Werte sein, die ausgewählt werden können, nämlich `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte in Kleinbuchstaben geschrieben sind, während die Optionsbezeichnungen, wie sie in der Live-Ausgabe angezeigt werden, großgeschrieben sind. Sie sollten die Kleinbuchstabenwerte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt werden und zwei Farbwerte übermittelt werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind, also müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich stecken bleiben, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

## Fazit

Und das ist alles, was Sie jetzt wirklich über bedingte Strukturen in JavaScript wissen müssen! Wenn es etwas gibt, das Sie nicht verstanden haben, können Sie den Artikel gerne noch einmal durchlesen oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu bekommen.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingter (ternärer) Operator Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
