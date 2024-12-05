---
title: Entscheidungen in Ihrem Code treffen — Bedingungen
slug: Learn/JavaScript/Building_blocks/conditionals
l10n:
  sourceCommit: 94982f79dc1b95025700c48170a5b48d5f3a2a64
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend unterschiedliche Eingaben ausführen. Beispielsweise in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App: Wenn sie morgens betrachtet wird, zeigen Sie eine Sonnenaufgangs-Grafik an; zeigen Sie Sterne und einen Mond, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript-Erste Schritte</a
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

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("Soll ich einen Keks oder zwei essen?") bis zu großen ("Soll ich in meinem Heimatland bleiben und auf der Farm meines Vaters arbeiten, oder sollte ich nach Amerika ziehen und Astrophysik studieren?").

Mit bedingten Anweisungen können wir solche Entscheidungsfindungen in JavaScript darstellen, von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis zum resultierenden Ergebnis dieser Entscheidungen (vielleicht könnte das Ergebnis von "einen Keks gegessen" sein "fühlte sich noch hungrig", und das Ergebnis von "zwei Kekse gegessen" könnte sein "fühlte sich satt, aber Mama schimpfte mit mir, weil ich alle Kekse gegessen habe".)

![Eine Cartoonfigur, die an eine Person erinnert und ein Keksglas mit der Aufschrift 'Cookies' hält. Über dem Kopf der Figur ist ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen Keks oder zwei Kekse will.](cookie-choice-small.png)

## if...else-Anweisungen

Sehen wir uns die bei weitem häufigste Art von bedingter Anweisung an, die Sie in JavaScript verwenden werden - die bescheidene [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

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

1. Das Schlüsselwort `if`, gefolgt von einigen Klammern.
2. Eine zu testende Bedingung, die in den Klammern platziert wird (typischerweise "ist dieser Wert größer als dieser andere Wert?", oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators), die wir im letzten Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Eine Reihe von geschweiften Klammern, in denen sich einige Codes befinden - dies kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Schlüsselwort `else`.
5. Eine weitere Reihe von geschweiften Klammern, in denen sich einige weitere Codes befinden - dies kann beliebiger Code sein, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist - mit anderen Worten, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar - er sagt "**wenn** die **Bedingung** `true` zurückgibt, führe Code A aus, **sonst** führe Code B aus".

Es ist wichtig zu beachten, dass Sie das `else` und den zweiten Block aus geschweiften Klammern nicht einfügen müssen - das Folgende ist auch ein völlig legaler Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Sie müssen jedoch vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung gesteuert, sodass er **immer** ausgeführt wird, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Das ist nicht unbedingt etwas Schlechtes, aber es könnte nicht das sein, was Sie wollen — oft wollen Sie einen Block von Code _oder_ den anderen ausführen, nicht beide.

Als letzter Punkt, obwohl es nicht empfohlen wird, sehen Sie möglicherweise `if...else`-Anweisungen, die ohne die geschweiften Klammern geschrieben sind:

```js example-bad
if (condition) /* code to run if condition is true */
else /* run some other code instead */
```

Diese Syntax ist völlig gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke zu begrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein echtes Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein echtes Beispiel. Stellen Sie sich ein Kind vor, das von seiner Mutter oder seinem Vater um Hilfe bei einer Hausarbeit gebeten wird. Der Elternteil könnte sagen: "Hey, Schatz! Wenn du mir hilfst, indem du den Einkauf erledigst, gebe ich dir etwas zusätzliches Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir das so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Der gezeigte Code führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was Enttäuschung für unser armes Kind bedeutet. Es würde an uns liegen, einen Mechanismus bereitzustellen, mit dem der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind den Einkauf erledigt hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) sehen (auch live [laufend hier](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Das letzte Beispiel bot uns zwei Wahlmöglichkeiten, oder Ergebnisse — aber was, wenn wir mehr als zwei benötigen?

Es gibt eine Möglichkeit, um zusätzliche Wahlmöglichkeiten/Ergebnisse zu Ihrem `if...else` hinzuzufügen — mit `else if`. Jede zusätzliche Wahl erfordert einen zusätzlichen Block, den Sie zwischen `if () { }` und `else { }` setzen können — sehen Sie sich das folgende komplexere Beispiel an, das Teil einer einfachen Wettervorhersage-Anwendung sein könnte:

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

1. Hier haben wir ein HTML-{{htmlelement("select")}}-Element, das uns ermöglicht, unterschiedliche Wetterauswahlen zu treffen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz zu beiden {{htmlelement("select")}}- und {{htmlelement("p")}}-Elementen und fügen einen Ereignis-Listener zum `<select>`-Element hinzu, sodass die `setWeather()`-Funktion ausgeführt wird, wenn ihr Wert geändert wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuellen, im `<select>`-Element ausgewählten Wert. Dann verwenden wir eine bedingte Anweisung, um je nachdem, welcher Wert `choice` hat, unterschiedlich Text im Absatz anzuzeigen. Beachten Sie, dass alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Wahl im `else { }`-Block ist im Grunde eine "letzte Möglichkeit" - die darin befindliche Codezeile wird ausgeführt, wenn keine der Bedingungen `true` ergibt. Dieses dient dazu, den Text aus dem Absatz zu leeren, wenn nichts ausgewählt wird, zum Beispiel, wenn ein Benutzer sich entscheidet, die Platzhalteroption "--Treffen Sie eine Auswahl--" erneut auszuwählen, die am Anfang angezeigt wird.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (sehen Sie es auch [live laufend hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) auf dieser Seite.)

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen innerhalb unserer bedingten Anweisungen zu testen. Wir haben uns Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators) angesehen. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch ist mit oder nicht identisch ist mit einem anderen.
- `<` und `>` — testen, ob ein Wert kleiner oder größer ist als ein anderer.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich oder größer oder gleich einem anderen Wert ist.

Wir wollten eine spezielle Erwähnung des Testens von boolean (`true`/`false`) Werten machen und ein häufiges Muster, auf das Sie immer wieder stoßen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist oder sogar ob er existiert (d.h., er ist nicht undefined). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Und, zurück zu unserem vorherigen Beispiel über das Kind, das eine Hausarbeit für den Elternteil erledigt, könnte es so geschrieben werden:

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

Es ist völlig in Ordnung, eine `if...else`-Anweisung in eine andere einzufügen - sie zu verschachteln. Beispielsweise könnten wir unsere Wettervorhersage-Anwendung aktualisieren, um abhängig von der Temperatur eine weitere Auswahl von Optionen anzuzeigen:

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

### Logische Operatoren: AND, OR und NOT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können Ihnen [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) helfen. Wenn sie in Bedingungen verwendet werden, machen die ersten beiden Folgendes:

- `&&` — UND; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass alle von ihnen einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht es Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass einer oder mehrere von ihnen `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein UND-Beispiel zu geben, kann der vorherige Beispielausschnitt auf diese Weise umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Zum Beispiel wird der erste Codeblock nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgibt.

Sehen wir uns ein kurzes ODER-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Die letzte Art von logischem Operator, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu negieren. Lassen Sie uns ihn mit ODER im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

In diesem Ausschnitt, wenn die ODER-Anweisung `true` zurückgibt, negiert der NOT-Operator sie, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Aussagen zusammen kombinieren, wie Sie möchten, und in welcher Struktur auch immer. Das folgende Beispiel führt den Code darin nur aus, wenn beide ODER-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte UND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in bedingten Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten zu geben, die sie sein könnte, um `true` zurückzugeben, getrennt durch `||` (ODER) Operatoren. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung innerhalb `if ()` immer zu `true` auswerten, da 7 (oder ein beliebiger anderer Nicht-Null-Wert) immer zu `true` auswertet. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist oder 7 wahr ist - was es immer ist". Das ist logisch nicht das, was wir wollen! Um dies zum Laufen zu bringen, müssen Sie einen vollständigen Test auf beiden Seiten jedes ODER-Operators angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Aufgabe, bedingten Code zu ermöglichen, gut, aber sie sind nicht ohne ihre Nachteile. Sie sind hauptsächlich für Fälle geeignet, in denen Sie ein paar Auswahlmöglichkeiten haben und jede einzelne eine angemessene Menge an Code erfordert, der ausgeführt werden soll, und/oder die Bedingungen komplex sind (zum Beispiel mehrere logische Operatoren). Für Fälle, in denen Sie nur eine Variable auf einen bestimmten Auswahlwert setzen oder eine bestimmte Aussage abhängig von einer Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, besonders wenn Sie viele Auswahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und schauen dann mehrere Auswahlmöglichkeiten durch, bis sie eine finden, die diesem Wert entspricht, und führen dann den entsprechenden Code aus, der damit einhergeht. Hier ist etwas mehr Pseudocode, um Ihnen eine Vorstellung zu geben:

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
4. Ein Code, der ausgeführt wird, wenn die Auswahl dem Ausdruck entspricht.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Auswahl dem Ausdruck/Wert entspricht, stoppt der Browser die Ausführung des Codeblocks hier und geht zu jedem Code über, der unterhalb der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3-5), wie Sie möchten.
7. Das Schlüsselwort `default`, gefolgt vom gleichen Code Muster wie einer der Fälle (Punkte 3-5), außer dass `default` keine Auswahl nach sich hat, und Sie brauchen die `break`-Anweisung nicht, da es sowieso nichts gibt, was nach diesem im Block ausgeführt werden kann. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Auswahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht einschließen — Sie können ihn sicher weglassen, wenn es keine Möglichkeit gibt, dass der Ausdruck möglicherweise einem unbekannten Wert entspricht. Wenn es jedoch eine Chance dafür gibt, müssen Sie ihn einfügen, um unbekannte Fälle zu handhaben.

### Ein switch-Beispiel

Lassen Sie uns ein echtes Beispiel ansehen — wir werden unsere Wettervorhersage-Anwendung umschreiben, um eine switch-Anweisung stattdessen zu verwenden:

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
> Sie können auch [dieses Beispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es [live laufend hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) auf dieser Seite.)

## Ternary-Operator

Es gibt ein letztes Stück Syntax, das wir Ihnen vorstellen möchten, bevor wir Sie mit einigen Beispielen spielen lassen. Der [ternary- oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Stück Syntax, das eine Bedingung testet und einen Wert/Ausdruck zurückgibt, wenn es `true` ist, und einen anderen, wenn es `false` ist – dies kann in einigen Situationen nützlich sein und kann viel weniger Code als ein `if...else`-Block einnehmen, wenn Sie zwei Auswahlmöglichkeiten haben, zwischen denen durch eine `true`/`false`-Bedingung gewählt wird. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Lassen Sie uns ein Beispiel ansehen:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn dies `true` ist, geben wir unserem Gast eine Happy-Birthday-Nachricht; ansonsten geben wir ihr die übliche tägliche Begrüßung.

### Ternary-Operator-Beispiel

Der ternary-Operator ist nicht nur zum Setzen von Variablenwerten gedacht; Sie können auch Funktionen ausführen oder Codezeilen — was immer Sie mögen. Das folgende Live-Beispiel zeigt einen einfachen Themenauswähler, bei dem das Styling für die Website mit einem ternary-Operator angewendet wird.

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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema (schwarz oder weiß) auszuwählen, plus eine einfache {{htmlelement("Heading_Elements", "h1")}}, um einen Websitetitel anzuzeigen. Wir haben außerdem eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) erhält. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt, und die Textfarbe wird auf die zweite bereitgestellte Farbe gesetzt.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener, der dazu dient, eine Funktion mit einem ternary-Operator auszuführen. Es beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern schwarz und weiß aus, was bedeutet, dass wir am Ende eine Hintergrundfarbe von schwarz und eine Textfarbe von weiß haben. Wenn es `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern weiß und schwarz aus, was bedeutet, dass die Website-Farben invertiert sind.

> [!NOTE]
> Sie können auch [dieses Beispiel auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es [live laufend hier](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) auf dieser Seite.)

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalender-Anwendung abzuschließen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Einen `onchange`-Ereignis-Handler, der erkennt, wenn sich der im `<select>`-Menü ausgewählte Wert ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen, dass Sie eine bedingte Anweisung innerhalb der Funktion `createCalendar()` schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Den ausgewählten Monat betrachten (gespeichert in der Variablen `choice`. Dies wird der `<select>`-Elementwert sein, nachdem sich der Wert ändert, also beispielsweise "Januar").
2. Der Variable `days` den Wert der Anzahl der Tage im ausgewählten Monat zuweisen. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können Schaltjahre für die Zwecke dieses Beispiels ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate in einer einzigen Bedingung zusammenzufassen; viele von ihnen haben die gleiche Anzahl von Tagen.
- Überlegen Sie, welche Anzahl von Tagen am häufigsten vorkommt, und verwenden Sie diese als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der "Zurücksetzen"-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

In diesem Beispiel werden Sie das zuvor gesehene Beispiel mit dem ternären Operator nehmen und den ternären Operator in eine switch-Anweisung umwandeln, damit wir mehr Auswahlmöglichkeiten für die einfache Website anwenden können. Betrachten Sie das {{htmlelement("select")}} — diesmal sehen Sie, dass es nicht zwei Themenoptionen hat, sondern fünf. Sie müssen eine switch-Anweisung direkt unterhalb des Kommentars `// ADD SWITCH STATEMENT` hinzufügen:

- Sie sollte die Variable `choice` als Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Auswahl einem der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, d.h. `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die Optionsbeschriftungen, wie sie in der Live-Ausgabe angezeigt werden, groß geschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt und mit zwei Farbwerten versehen werden, der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind, sodass sie in Anführungszeichen eingeschlossen sein müssen.

Wenn Sie einen Fehler machen, können Sie das Beispiel immer mit der "Zurücksetzen"-Taste zurücksetzen. Wenn Sie wirklich feststecken, drücken Sie "Lösung anzeigen", um eine Lösung zu sehen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Bedingungen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

## Fazit

Und das ist alles, was Sie derzeit über bedingte Strukturen in JavaScript wissen müssen! Wenn es etwas gibt, das Sie nicht verstanden haben, zögern Sie nicht, den Artikel noch einmal durchzulesen oder [uns zu kontaktieren](/de/docs/Learn#contact_us), um Hilfe zu bitten.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [if...else Referenz](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Bedingter (ternary) Operator Referenz](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
