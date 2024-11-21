---
title: Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen
slug: Learn/JavaScript/Building_blocks/conditionals
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend handeln, je nach verschiedenen Eingaben. Zum Beispiel, in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App: Wenn sie am Morgen betrachtet wird, zeige eine Sonnenaufgangsgrafik; zeige Sterne und einen Mond, wenn es Nacht ist. In diesem Artikel werden wir erkunden, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, CSS und
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

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("sollte ich einen Keks oder zwei essen?") bis hin zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meines Vaters arbeiten, oder soll ich in die USA ziehen und Astrophysik studieren?")

Bedingte Anweisungen erlauben es uns, solches Entscheiden in JavaScript zu repräsentieren, von der Auswahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis hin zum daraus resultierenden Ergebnis dieser Entscheidungen (vielleicht wäre das Ergebnis von "einen Keks gegessen" "fühlte sich immer noch hungrig", und das Ergebnis von "zwei Kekse gegessen" könnte "fühlte sich satt, aber Mama hat mich dafür geschimpft, dass ich alle Kekse gegessen habe" sein).

![Eine Zeichentrickfigur, die einem Menschen ähnelt und ein Keks-Glas mit der Aufschrift 'Cookies' hält. Über dem Kopf der Figur ist ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen oder zwei Kekse will.](cookie-choice-small.png)

## if...else-Anweisungen

Lassen Sie uns den mit Abstand häufigsten Typ einer bedingten Anweisung betrachten, den Sie in JavaScript verwenden werden — die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

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

1. Das Schlüsselwort `if` gefolgt von einem Paar runder Klammern.
2. Eine zu testende Bedingung, die innerhalb dieser Klammern platziert wird (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators), die wir im letzten Modul besprochen haben und gibt `true` oder `false` zurück.
3. Ein Paar geschweifte Klammern, innerhalb derer wir etwas Code haben — dies kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Ein weiteres Paar geschweifte Klammern, innerhalb derer wir mehr Code haben — dies kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — mit anderen Worten, wenn die Bedingung `false` ist.

Dieser Code ist ziemlich menschenlesbar — er sagt: "**if** die **Bedingung** gibt `true` zurück, führen Sie Code A aus, **else** führen Sie Code B aus".

Sie sollten beachten, dass Sie das `else` und den zweiten Block mit geschweiften Klammern nicht einfügen müssen — das Folgende ist ebenfalls vollkommen legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Hierbei müssen Sie jedoch vorsichtig sein — in diesem Fall wird der zweite Block von Code nicht durch die bedingte Anweisung gesteuert, so dass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Dies ist nicht unbedingt eine schlechte Sache, könnte aber nicht das sein, was Sie wollen — oft möchten Sie einen Block von Code _oder_ den anderen ausführen, nicht beide.

Als abschließender Punkt, auch wenn nicht empfohlen, können Sie manchmal `if...else`-Anweisungen ohne geschweifte Klammern sehen:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen und mehrere Zeilen und Einrückungen zu verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein echtes Beispiel. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einer Hausarbeit gebeten. Der Elternteil könnte sagen: "Hey Liebling! Wenn du mir hilfst, indem du einkaufst, gebe ich dir etwas zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir das so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code, wie gezeigt, führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es läge an uns, einen Mechanismus bereitzustellen, damit der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind den Einkauf erledigt hat.

> [!NOTE]
> Sie können eine [komplettiertere Version dieses Beispiels auf GitHub anschauen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (und sie [live sehen](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)).

### else if

Das letzte Beispiel bot uns zwei Entscheidungen oder Ergebnisse — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, zusätzliche Entscheidungen/Ergebnisse an Ihr `if...else` anzuhängen — mit `else if`. Jede zusätzliche Wahl erfordert einen zusätzlichen Block, den Sie zwischen `if () { }` und `else { }` setzen können — sehen Sie sich das folgende kompliziertere Beispiel an, das Teil einer einfachen Wettervorhersageanwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, mit dem wir verschiedene Wetterauswahlen treffen können, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz sowohl auf das {{htmlelement("select")}}-Element als auch auf das {{htmlelement("p")}}-Element und fügen einen Ereignislistener zum `<select>`-Element hinzu, sodass, wenn dessen Wert geändert wird, die Funktion `setWeather()` ausgeführt wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable mit dem Namen `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Wir verwenden dann eine bedingte Anweisung, um je nach Wert von `choice` unterschiedlichen Text im Absatz anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken geprüft werden, mit Ausnahme der ersten, die in einem `if () { }`-Block geprüft wird.
4. Die allerletzte Auswahl im `else { }`-Block ist im Wesentlichen eine "letzte Rettung"-Option — der darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient sie dazu, den Text aus dem Absatz zu löschen, wenn nichts ausgewählt ist, zum Beispiel, wenn ein Benutzer sich entscheidet, die "--Wählen Sie eine Auswahl--" Platzhalteroption erneut auszuwählen, die am Anfang angezeigt wird.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)).

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen innerhalb unserer bedingten Anweisungen zu testen. Wir haben Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators) behandelt. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch bzw. nicht identisch mit einem anderen ist.
- `<` und `>` — testen, ob ein Wert kleiner bzw. größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich bzw. größer oder gleich einem anderen ist.

Wir möchten besonders darauf hinweisen, boolesche (`true`/`false`) Werte zu testen, und ein gängiges Muster, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird. Daher können Sie einen Variablennamen für sich allein verwenden, um zu testen, ob er `true` ist oder überhaupt existiert (das heißt, dass er nicht undefiniert ist). Beispielsweise:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und, zurück zu unserem vorherigen Beispiel über das Kind, das eine Hausarbeit für seine Eltern erledigt, könnten Sie es so schreiben:

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

Es ist völlig in Ordnung, eine `if...else`-Anweisung innerhalb einer anderen zu setzen — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersageanwendung aktualisieren, um eine weitere Auswahl zu zeigen, je nachdem, wie die Temperatur ist:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Obwohl der gesamte Code zusammenarbeitet, funktioniert jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne geschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Wenn sie in Bedingungen verwendet werden, tun die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, so dass alle individuell `true` ausgeben müssen, damit der ganze Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, so dass einer oder mehr davon individuell `true` ausgeben müssen, damit der ganze Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu zeigen, kann der vorherige Beispiel-Ausschnitt zu diesem umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Dabei wird zum Beispiel der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Sehen wir uns ein schnelles ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der letzte logische Operator, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lass uns das mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Ausschnitt, wenn die ODER-Anweisung `true` zurückgibt, wird der NICHT-Operator es negieren, so dass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Anweisungen wie gewünscht kombinieren, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide ODER-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in bedingten Anweisungen ist der Versuch, die Variable, deren Wert Sie überprüfen, einmal zu benennen und dann eine Liste von Werten zu geben, die `true` zurückgeben könnten, getrennt durch `||` (ODER)-Operatoren. Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb von `if ()` immer `true` auswerten, da 7 (oder jeder andere Wert ungleich Null) immer `true` auswertet. Diese Bedingung sagt tatsächlich „wenn x gleich 5 ist oder 7 wahr ist — was sie immer ist“. Das ist logisch nicht das, was wir wollen! Um dies zu erreichen, müssen Sie einen vollständigen Test auf beiden Seiten jedes ODER-Operators angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Aufgabe, bedingten Code zu ermöglichen, gut, sie haben jedoch ihre Schwächen. Sie sind hauptsächlich dann gut geeignet, wenn Sie ein paar Entscheidungen haben und jede davon eine vernünftige Menge an Code benötigt oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, bei denen Sie einfach eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Anweisung abhängig von einer Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, insbesondere wenn Sie viele Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzelnen Ausdruck/Wert als Eingabe und durchsuchen dann mehrere Optionen, bis sie eine finden, die diesem Wert entspricht. Sie führen den entsprechenden Code aus, der dazu gehört. Hier ist etwas Pseudocode, um Ihnen eine Vorstellung zu geben:

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

1. Das Schlüsselwort `switch`, gefolgt von einem Paar Klammern.
2. Einen Ausdruck oder Wert innerhalb der Klammern.
3. Das Schlüsselwort `case`, gefolgt von einer Auswahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Etwas Code, der ausgeführt wird, wenn die Auswahl mit dem Ausdruck übereinstimmt.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl mit dem Ausdruck/Wert übereinstimmt, wird die Ausführung des Codeblocks hier gestoppt und zu jedem Code weitergegangen, der nach der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt von genau dem gleichen Code-Muster wie ein Fall (Punkte 3–5), außer, dass `default` keine Auswahl danach hat, und Sie nicht die `break`-Anweisung benötigen, da es ohnehin nichts gibt, das nach diesem Block ausgeführt werden könnte. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einbeziehen — Sie können ihn sicher weglassen, wenn es keine Möglichkeit gibt, dass der Ausdruck einem unbekannten Wert entspricht. Wenn jedoch die Möglichkeit besteht, sollten Sie ihn einbeziehen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Werfen wir einen Blick auf ein echtes Beispiel — wir werden unsere Wettervorhersageanwendung neu schreiben, um eine switch-Anweisung zu verwenden:

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
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)).

## Ternärer Operator

Es gibt noch ein letztes Stück Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie dazu bringen, mit einigen Beispielen zu spielen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Syntaxstück, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn sie `true` ist, und einen anderen, wenn sie `false` ist — dies kann in einigen Situationen nützlich sein und deutlich weniger Code als ein `if...else`-Block beanspruchen, wenn Sie zwei Optionen haben, die über eine `true`/`false`-Bedingung ausgewählt werden. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Schauen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr den normalen täglichen Gruß.

### Beispiel des ternären Operators

Der ternäre Operator ist nicht nur für das Setzen von Variablenwerten gedacht; Sie können auch Funktionen oder Codezeilen ausführen — was auch immer Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem das Styling der Seite unter Verwendung eines ternären Operators angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element zur Auswahl eines Themas (schwarz oder weiß), plus ein einfaches {{htmlelement("Heading_Elements", "h1")}}, um einen Website-Titel anzuzeigen. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) annimmt. Die Hintergrundfarbe der Website wird auf die erste angegebene Farbe gesetzt und die Textfarbe auf die zweite.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener, der dazu dient, eine Funktion zu starten, die einen ternären Operator enthält. Es beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die Funktion `update()` mit Parametern von Schwarz und Weiß aus, was bedeutet, dass wir eine Hintergrundfarbe von Schwarz und eine Textfarbe von Weiß erhalten. Wenn es `false` zurückgibt, führen wir die `update()`-Funktion mit Parametern von Weiß und Schwarz aus, was bedeutet, dass die Seitenfarben invertiert werden.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es [live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu beenden. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Einen `onchange`-Ereignis-Handler, um zu erkennen, wann der im `<select>`-Menü ausgewählte Wert geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir brauchen Sie, um eine bedingte Anweisung innerhalb der `createCalendar()`-Funktion zu schreiben, direkt unter dem `// ADD CONDITIONAL HERE`-Kommentar. Sie sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der `choice`-Variable. Dies wird der `<select>`-Elementwert sein, nachdem der Wert geändert wurde, also z.B. "Januar").
2. Die Variable `days` so einstellen, dass sie gleich der Anzahl der Tage im ausgewählten Monat ist. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für dieses Beispiel ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate zusammenzufassen, die die gleiche Anzahl an Tagen haben; viele davon teilen die gleiche Anzahl von Tagen.
- Überlegen Sie, welche Anzahl von Tagen am häufigsten vorkommt, und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel mit dem "Zurücksetzen"-Button jederzeit zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie auf "Lösung anzeigen", um eine Lösung zu sehen.

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

## Aktives Lernen: Mehr Farbauswahlen

In diesem Beispiel werden Sie das Beispiel des ternären Operators, das wir zuvor gesehen haben, nehmen und den ternären Operator in eine switch-Anweisung umwandeln, um uns mehr Auswahlmöglichkeiten auf der einfachen Website zu ermöglichen. Schauen Sie sich das {{htmlelement("select")}} an — dieses mal sehen Sie, dass es nicht zwei Themenoptionen gibt, sondern fünf. Sie müssen eine switch-Anweisung gleich unterhalb des `// ADD SWITCH STATEMENT` Kommentars hinzufügen:

- Sie sollte die `choice`-Variable als ihre Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Auswahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, das heißt `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte klein geschrieben sind, während die Options*labels*, wie sie in der Live-Ausgabe angezeigt werden, groß geschrieben sind. Sie sollten die Kleinbuchstabenwerte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt werden und zwei Farbwerte übergeben bekommen, den ersten für die Hintergrundfarbe und den zweiten für die Textfarbe. Denken Sie daran, dass Farbwerte Strings sind, also müssen sie in Anführungszeichen gesetzt werden.

Wenn Sie einen Fehler machen, können Sie das Beispiel mit dem "Zurücksetzen"-Button jederzeit zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie auf "Lösung anzeigen", um eine Lösung zu sehen.

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

## Fazit

Und das ist alles, was Sie jetzt über bedingte Strukturen in JavaScript wissen müssen! Wenn Sie etwas nicht verstanden haben, lesen Sie den Artikel gerne noch einmal durch oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu erhalten.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingter (ternärer) Operator Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
