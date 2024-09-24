---
title: Entscheidungen in Ihrem Code treffen — Bedingte Anweisungen
slug: Learn/JavaScript/Building_blocks/conditionals
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}

In jeder Programmiersprache muss der Code Entscheidungen treffen und Aktionen entsprechend verschiedenen Eingaben ausführen. Zum Beispiel: In einem Spiel, wenn die Anzahl der Leben eines Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App, wenn sie morgens betrachtet wird, wird eine Sonnenaufgangsgrafik gezeigt; Sterne und ein Mond, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >Erste Schritte mit JavaScript</a
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

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen, von kleinen ("soll ich einen Keks oder zwei essen?") bis zu großen ("soll ich in meinem Heimatland bleiben und auf der Farm meines Vaters arbeiten, oder soll ich nach Amerika ziehen und Astrophysik studieren?").

Bedingte Anweisungen ermöglichen es uns, solche Entscheidungsfindungen in JavaScript darzustellen, von der Wahl, die getroffen werden muss (zum Beispiel "ein Keks oder zwei"), bis zum daraus resultierenden Ergebnis (vielleicht könnte das Ergebnis von "einen Keks gegessen" "fühlte sich immer noch hungrig" sein, und das Ergebnis von "zwei Kekse gegessen" könnte "fühlte sich satt, aber Mama schimpfte mit mir, weil ich alle Kekse gegessen habe" sein).

![Eine Cartoonfigur, die einer Person ähnelt, hält ein Keksglas mit der Aufschrift 'Cookies'. Über dem Kopf der Figur befindet sich ein Fragezeichen. Es gibt zwei Sprechblasen. Die linke Sprechblase hat einen Keks. Die rechte Sprechblase hat zwei Kekse. Zusammen impliziert es, dass die Figur versucht zu entscheiden, ob sie einen Keks oder zwei Kekse will.](cookie-choice-small.png)

## if...else Anweisungen

Schauen wir uns die bei weitem häufigste Art von bedingter Anweisung an, die Sie in JavaScript verwenden werden — die bescheidene [`if...else` Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else Syntax

Die grundlegende `if...else`-Syntax sieht so aus:

```js
if (Bedingung) {
  /* Code ausführen, wenn die Bedingung wahr ist */
} else {
  /* stattdessen einen anderen Code ausführen */
}
```

Hier haben wir:

1. Das Stichwort `if`, gefolgt von einigen Klammern.
2. Eine Bedingung zum Testen, die in den Klammern platziert wird (typischerweise "ist dieser Wert größer als dieser andere Wert?" oder "existiert dieser Wert?"). Die Bedingung nutzt die [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators), die wir im letzten Modul besprochen haben, und gibt `true` oder `false` zurück.
3. Ein Satz von geschweiften Klammern, in denen wir Code haben — dies kann jeder Code sein, den wir mögen, und er wird nur ausgeführt, wenn die Bedingung `true` zurückgibt.
4. Das Stichwort `else`.
5. Ein weiterer Satz von geschweiften Klammern, in denen wir weiteren Code haben — dies kann jeder Code sein, den wir mögen, und er wird nur ausgeführt, wenn die Bedingung nicht `true` ist — oder anders ausgedrückt, die Bedingung ist `false`.

Dieser Code ist ziemlich menschenlesbar — er sagt "**if** die **Bedingung** `true` zurückgibt, führe Code A aus, **else** führe Code B aus".

Sie sollten beachten, dass Sie das `else` und den zweiten Block mit geschweiften Klammern nicht einschließen müssen — das folgende ist ebenfalls vollkommen legaler Code:

```js
if (Bedingung) {
  /* Code ausführen, wenn die Bedingung wahr ist */
}

/* einen anderen Code ausführen */
```

Allerdings müssen Sie hier vorsichtig sein — in diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung gesteuert, er wird also **immer** ausgeführt, unabhängig davon, ob die Bedingung `true` oder `false` zurückgibt. Das ist nicht unbedingt eine schlechte Sache, aber es ist möglicherweise nicht das, was Sie wollen — oft möchten Sie einen Codeblock _oder_ den anderen ausführen, nicht beide.

Als letzten Punkt: Es ist zwar nicht empfehlenswert, aber manchmal sehen Sie `if...else`-Anweisungen ohne die geschweiften Klammern geschrieben:

```js example-bad
if (Bedingung) /* Code ausführen, wenn die Bedingung wahr ist */
else /* stattdessen einen anderen Code ausführen */
```

Diese Syntax ist vollkommen gültig, aber es ist viel einfacher, den Code zu verstehen, wenn Sie die geschweiften Klammern verwenden, um die Codeblöcke abzugrenzen, und mehrere Zeilen und Einrückungen verwenden.

### Ein reales Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein reales Beispiel. Stellen Sie sich vor, ein Kind wird von seiner Mutter oder seinem Vater um Hilfe bei einer Hausarbeit gebeten. Der Elternteil könnte sagen: "Hey, Schatz! Wenn du mir hilfst, einkaufen zu gehen, gebe ich dir zusätzlich Taschengeld, damit du dir das Spielzeug leisten kannst, das du wolltest." In JavaScript könnten wir das so darstellen:

```js
let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

Dieser Code führt immer dazu, dass die Variable `shoppingDone` `false` zurückgibt, was für unser armes Kind eine Enttäuschung bedeutet. Es läge an uns, eine Mechanismus bereitzustellen, mit dem der Elternteil die Variable `shoppingDone` auf `true` setzen kann, wenn das Kind eingekauft hat.

> [!NOTE]
> Sie können eine [vollständigere Version dieses Beispiels auf GitHub sehen](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html) (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html)).

### else if

Das letzte Beispiel bot uns zwei Möglichkeiten oder Ergebnisse — aber was, wenn wir mehr als zwei wollen?

Es gibt eine Möglichkeit, weitere Auswahlmöglichkeiten/Ergebnisse an Ihr `if...else` anzuknüpfen — mit `else if`. Jede zusätzliche Auswahl erfordert einen weiteren Block, der zwischen `if () { }` und `else { }` eingefügt wird — schauen Sie sich das folgende komplexere Beispiel an, das Teil einer einfachen Wettervorhersage-App sein könnte:

```html
<label for="weather">Wählen Sie den heutigen Wettertyp: </label>
<select id="weather">
  <option value="">--Treffen Sie eine Auswahl--</option>
  <option value="sunny">Sonnig</option>
  <option value="rainy">Regnerisch</option>
  <option value="snowing">Schneit</option>
  <option value="overcast">Bewölkt</option>
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
      "Es ist heute schön sonnig draußen. Tragen Sie kurze Hosen! Gehen Sie an den Strand oder in den Park und holen Sie sich ein Eis.";
  } else if (choice === "rainy") {
    para.textContent =
      "Draußen regnet es; nehmen Sie einen Regenmantel und einen Schirm mit und bleiben Sie nicht zu lange draußen.";
  } else if (choice === "snowing") {
    para.textContent =
      "Der Schnee fällt — es ist eiskalt! Am besten bleibt man drinnen mit einer Tasse heißer Schokolade oder baut einen Schneemann.";
  } else if (choice === "overcast") {
    para.textContent =
      "Es regnet nicht, aber der Himmel ist grau und düster; es könnte jederzeit umschlagen, nehmen Sie also sicherheitshalber einen Regenmantel mit.";
  } else {
    para.textContent = "";
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100, "", "") }}

1. Hier haben wir ein HTML {{htmlelement("select")}}-Element, das es uns ermöglicht, verschiedene Wetterbedingungen auszuwählen, und einen einfachen Absatz.
2. Im JavaScript speichern wir eine Referenz auf beide {{htmlelement("select")}}- und {{htmlelement("p")}}-Elemente und fügen dem `<select>`-Element einen Ereignislistener hinzu, sodass die `setWeather()`-Funktion ausgeführt wird, wenn ihr Wert geändert wird.
3. Wenn diese Funktion ausgeführt wird, setzen wir zuerst eine Variable namens `choice` auf den aktuellen Wert, der im `<select>`-Element ausgewählt ist. Wir verwenden dann eine bedingte Anweisung, um je nach Wert von `choice` unterschiedlichen Text innerhalb des Absatzes anzuzeigen. Beachten Sie, wie alle Bedingungen in `else if () { }`-Blöcken getestet werden, außer der ersten, die in einem `if () { }`-Block getestet wird.
4. Die allerletzte Auswahlmöglichkeit im `else { }`-Block ist im Grunde eine „letzte Zuflucht“ — die darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ist. In diesem Fall dient es dazu, den Text aus dem Absatz zu löschen, wenn nichts ausgewählt ist, z. B. wenn ein Benutzer die Platzhalteroption „--Treffen Sie eine Auswahl--“ am Anfang erneut auswählt.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-else-if.html) (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html)).

### Eine Anmerkung zu Vergleichsoperatoren

Vergleichsoperatoren werden verwendet, um die Bedingungen innerhalb unserer bedingten Anweisungen zu testen. Wir haben Vergleichsoperatoren erstmals in unserem Artikel [Grundlegende Mathematik in JavaScript — Zahlen und Operatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators) betrachtet. Unsere Auswahlmöglichkeiten sind:

- `===` und `!==` — testen, ob ein Wert identisch oder nicht identisch mit einem anderen ist.
- `<` und `>` — testen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` — testen, ob ein Wert kleiner oder gleich, oder größer oder gleich einem anderen ist.

Wir wollten eine besondere Erwähnung über das Testen von booleschen (`true`/`false`) Werten machen und ein gemeinsames Muster, dem Sie immer wieder begegnen werden. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN`, oder ein leerer String (`''`) ist, gibt tatsächlich `true` zurück, wenn er als bedingte Anweisung getestet wird. Daher können Sie einen Variablennamen allein verwenden, um zu testen, ob er `true` ist, oder sogar ob er existiert (d.h., ob er nicht undefined ist). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Hurray! Es gibt Käse für Toast.");
} else {
  console.log("Heute kein Käsetoast für Sie.");
}
```

Und zurück zu unserem vorherigen Beispiel über das Kind, das eine Hausarbeit für seine Eltern erledigt, könnten Sie es so schreiben:

```js
let shoppingDone = false;
let childsAllowance;

// Wir müssen 'shoppingDone === true' nicht explizit angeben
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}
```

### Verschachtelte if...else

Es ist völlig in Ordnung, eine `if...else`-Anweisung innerhalb einer anderen zu platzieren — sie zu verschachteln. Zum Beispiel könnten wir unsere Wettervorhersage-App aktualisieren, um je nach Temperatur eine weitere Reihe von Auswahlmöglichkeiten anzuzeigen:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `Es sind ${temperature} Grad draußen — schön und sonnig. Lass uns an den Strand oder in den Park gehen und ein Eis holen.`;
  } else if (temperature >= 86) {
    para.textContent = `Es sind ${temperature} Grad draußen — WIRKLICH HEISS! Wenn Sie nach draußen gehen möchten, stellen Sie sicher, dass Sie Sonnencreme auftragen.`;
  }
}
```

Selbst wenn der gesamte Code zusammenarbeitet, funktionieren die einzelnen `if...else`-Anweisungen völlig unabhängig voneinander.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen testen möchten, ohne verschachtelte `if...else`-Anweisungen zu schreiben, können [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators) Ihnen helfen. Bei Bedingungen führen die ersten beiden in der Liste folgende Aktionen aus:

- `&&` — UND; ermöglicht Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass alle einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.
- `||` — ODER; ermöglicht Ihnen, zwei oder mehr Ausdrücke zu verketten, sodass einer oder mehrere von ihnen einzeln `true` ergeben müssen, damit der gesamte Ausdruck `true` zurückgibt.

Um Ihnen ein AND-Beispiel zu geben, kann der vorherige Beispielausschnitt so umgeschrieben werden:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `Es sind ${temperature} Grad draußen — schön und sonnig. Lass uns an den Strand oder in den Park gehen und ein Eis holen.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `Es sind ${temperature} Grad draußen — WIRKLICH HEISS! Wenn Sie nach draußen gehen möchten, stellen Sie sicher, dass Sie Sonnencreme auftragen.`;
}
```

Zum Beispiel: Der erste Codeblock wird nur ausgeführt, wenn `choice === 'sunny'` _und_ `temperature < 86` `true` zurückgeben.

Schauen wir uns ein kurzes OR-Beispiel an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("Sie sollten das Haus schnell verlassen.");
} else {
  console.log("Sie sollten wohl besser drinnen bleiben.");
}
```

Der letzte Typ des logischen Operators, NICHT, ausgedrückt durch den `!`-Operator, kann verwendet werden, um einen Ausdruck zu verneinen. Lassen Sie uns es mit OR im obigen Beispiel kombinieren:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Sie sollten wohl besser drinnen bleiben.");
} else {
  console.log("Sie sollten das Haus schnell verlassen.");
}
```

In diesem Code-Snippet, falls die OR-Anweisung `true` zurückgibt, verneint der NICHT-Operator sie, sodass der gesamte Ausdruck `false` zurückgibt.

Sie können so viele logische Anweisungen kombinieren, wie Sie möchten, in welcher Struktur auch immer. Das folgende Beispiel führt den Code nur aus, wenn beide OR-Anweisungen `true` zurückgeben, was bedeutet, dass die gesamte AND-Anweisung `true` zurückgibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // Code ausführen
}
```

Ein häufiger Fehler bei der Verwendung des logischen OR-Operators in bedingten Anweisungen besteht darin, zu versuchen, die Variable, deren Wert Sie überprüfen, einmal anzugeben und dann eine Liste von Werten anzugeben, die einem `||` (ODER) zurückgeben könnten. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // meinen Code ausführen
}
```

In diesem Fall wird die Bedingung innerhalb `if ()` immer als `true` ausgewertet, da 7 (oder jeder andere Nicht-Null-Wert) immer als `true` ausgewertet wird. Diese Bedingung sagt tatsächlich "wenn x gleich 5 ist, oder 7 wahr ist — was es immer ist". Das ist logisch nicht das, was wir wollen! Um dies zum Laufen zu bringen, müssen Sie auf beiden Seiten jedes OR-Operators einen vollständigen Test angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // meinen Code ausführen
}
```

## switch-Anweisungen

`if...else`-Anweisungen erledigen die Arbeit der bedingten Codierung gut, aber sie sind nicht ohne Nachteile. Sie sind vor allem dann gut, wenn Sie nur einige wenige Auswahlmöglichkeiten haben und jede davon eine angemessene Menge an Code ausführen muss, und/oder die Bedingungen kompliziert sind (zum Beispiel mehrere logische Operatoren). In Fällen, in denen Sie einfach eine Variable auf einen bestimmten Wert setzen oder eine bestimmte Aussage je nach Bedingung ausgeben möchten, kann die Syntax etwas umständlich sein, insbesondere wenn Sie eine große Anzahl von Wahlmöglichkeiten haben.

In einem solchen Fall sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) Ihr Freund — sie nehmen einen einzigen Ausdruck/Wert als Eingabe und durchlaufen dann mehrere Optionen, bis sie eine finden, die diesen Wert entspricht, und führen den entsprechenden Code aus. Hier ist etwas Pseudocode, um Ihnen eine Vorstellung zu geben:

```js
switch (expression) {
  case choice1:
    // diesen Code ausführen
    break;

  case choice2:
    // stattdessen diesen Code ausführen
    break;

  // fügen Sie so viele Fälle hinzu, wie Sie möchten

  default:
    // tatsächlich, nur diesen Code ausführen
    break;
}
```

Hier haben wir:

1. Das Stichwort `switch`, gefolgt von einer Reihe von Klammern.
2. Einen Ausdruck oder Wert in den Klammern.
3. Das Stichwort `case`, gefolgt von einer Wahl, die der Ausdruck/Wert sein könnte, gefolgt von einem Doppelpunkt.
4. Einen Codeblock auszuführen, wenn die Wahl mit dem Ausdruck übereinstimmt.
5. Eine `break`-Anweisung, gefolgt von einem Semikolon. Wenn die vorherige Wahl mit dem Ausdruck/Wert übereinstimmt, stoppt der Browser die Ausführung des Codeblocks hier und geht zu dem Code über, der unter der switch-Anweisung erscheint.
6. So viele andere Fälle (Punkte 3–5), wie Sie möchten.
7. Das Stichwort `default`, gefolgt von genau dem gleichen Code-Muster wie eines der Fälle (Punkte 3–5), außer dass `default` keine Wahl danach hat, und Sie die `break`-Anweisung nicht brauchen, da danach nichts anderes im Block ausgeführt wird. Dies ist die Standardoption, die ausgeführt wird, wenn keine der Wahlmöglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht aufnehmen — Sie können ihn sicher auslassen, wenn es keine Möglichkeit gibt, dass der Ausdruck mit einem unbekannten Wert endet. Wenn jedoch eine Möglichkeit besteht, müssen Sie ihn aufnehmen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Schauen wir uns ein echtes Beispiel an — wir werden unsere Wettervorhersage-App so umschreiben, dass sie eine switch-Anweisung verwendet:

```html
<label for="weather">Wählen Sie den heutigen Wettertyp: </label>
<select id="weather">
  <option value="">--Treffen Sie eine Auswahl--</option>
  <option value="sunny">Sonnig</option>
  <option value="rainy">Regnerisch</option>
  <option value="snowing">Schneit</option>
  <option value="overcast">Bewölkt</option>
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
        "Es ist heute schön sonnig draußen. Tragen Sie kurze Hosen! Gehen Sie an den Strand oder in den Park und holen Sie sich ein Eis.";
      break;
    case "rainy":
      para.textContent =
        "Draußen regnet es; nehmen Sie einen Regenmantel und einen Schirm mit und bleiben Sie nicht zu lange draußen.";
      break;
    case "snowing":
      para.textContent =
        "Der Schnee fällt — es ist eiskalt! Am besten bleibt man drinnen mit einer Tasse heißer Schokolade oder baut einen Schneemann.";
      break;
    case "overcast":
      para.textContent =
        "Es regnet nicht, aber der Himmel ist grau und düster; es könnte jederzeit umschlagen, nehmen Sie also sicherheitshalber einen Regenmantel mit.";
      break;
    default:
      para.textContent = "";
  }
}
```

{{ EmbedLiveSample('A_switch_example', '100%', 100, "", "") }}

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-switch.html) (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html)).

## Ternärer Operator

Es gibt ein letztes Syntaxelement, das wir Ihnen vorstellen möchten, bevor wir Sie ermutigen, einige Beispiele selbst durchzuarbeiten. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) ist ein kleines Syntaxschema, das eine Bedingung testet und einen Ausdruck/Wert zurückgibt, wenn sie `true` ist, und einen anderen, wenn sie `false` ist — dies kann in einigen Situationen nützlich sein und kann viel weniger Code beanspruchen als ein `if...else`-Block, wenn Sie zwei Entscheidungen haben, zwischen denen auf der Grundlage einer `true`/`false`-Bedingung gewählt wird. Der Pseudocode sieht folgendermaßen aus:

```js-nolint
Condition ? run this code : run this code instead
```

Schauen wir uns ein einfaches Beispiel an:

```js
const greeting = isBirthday
  ? "Alles Gute zum Geburtstag, Frau Schmidt — wir hoffen, Sie haben einen großartigen Tag!"
  : "Guten Morgen, Frau Schmidt.";
```

Hier haben wir eine Variable namens `isBirthday` — wenn diese `true` ist, geben wir unserem Gast eine Geburtstagsnachricht; wenn nicht, geben wir ihr die standardmäßige tägliche Begrüßung.

### Beispiel für den ternären Operator

Der Ternary-Operator dient nicht nur der Zuordnung von Variablenwerten; Sie können auch Funktionen ausführen oder Codezeilen — alles, was Sie möchten. Das folgende Live-Beispiel zeigt einen einfachen Themenwähler, bei dem das Styling für die Seite mit einem ternären Operator angewendet wird.

```html
<label for="theme">Thema wählen: </label>
<select id="theme">
  <option value="white">Weiß</option>
  <option value="black">Schwarz</option>
</select>

<h1>Das ist meine Website</h1>
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

Hier haben wir ein {{htmlelement('select')}}-Element, um ein Thema auszuwählen (schwarz oder weiß), plus ein einfaches {{htmlelement("Heading_Elements", "h1")}} zur Anzeige eines Website-Titels. Wir haben auch eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) übernimmt. Die Hintergrundfarbe der Website wird auf die erste bereitgestellte Farbe gesetzt, und ihre Textfarbe wird auf die zweite bereitgestellte Farbe gesetzt.

Schließlich haben wir auch einen [onchange](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener, der dazu dient, eine Funktion mit einem ternären Operator auszuführen. Sie beginnt mit einer Testbedingung — `select.value === 'black'`. Wenn dies `true` zurückgibt, führen wir die `update()`-Funktion mit den Parametern Schwarz und Weiß aus, was bedeutet, dass wir eine Hintergrundfarbe von Schwarz und eine Textfarbe von Weiß erhalten. Wenn sie `false` zurückgibt, führen wir die `update()`-Funktion mit den Parametern Weiß und Schwarz aus, was bedeutet, dass die Websitefarben invertiert werden.

> [!NOTE]
> Sie können dieses Beispiel auch [auf GitHub finden](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/simple-ternary.html) (sehen Sie es auch [live ausgeführt](https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html)).

## Aktives Lernen: Ein einfacher Kalender

In diesem Beispiel werden Sie uns helfen, eine einfache Kalenderanwendung zu vervollständigen. Im Code haben Sie:

- Ein {{htmlelement("select")}}-Element, das es dem Benutzer ermöglicht, zwischen verschiedenen Monaten zu wählen.
- Einen `onchange`-Ereignishandler, der erkennt, wann sich der ausgewählte Wert im `<select>`-Menü ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den korrekten Monat im {{htmlelement("Heading_Elements", "h1")}}-Element anzeigt.

Wir benötigen, dass Sie eine bedingte Anweisung innerhalb der `onchange`-Handlerfunktion schreiben, direkt unter dem Kommentar `// ADD CONDITIONAL HERE`. Sie sollte:

1. Den ausgewählten Monat ansehen (gespeichert in der Variable `choice`. Dies wird der `<select>`-Elementwert sein, nachdem sich der Wert ändert, also "Januar" zum Beispiel.)
2. Eine Variable namens `days` integrieren, die gleich der Anzahl der Tage im ausgewählten Monat sein soll. Dazu müssen Sie die Anzahl der Tage in jedem Monat des Jahres nachschlagen. Sie können für dieses Beispiel Schaltjahre ignorieren.

Hinweise:

- Es wird empfohlen, logisches ODER zu verwenden, um mehrere Monate gruppiert in eine einzelne Bedingung aufzunehmen; viele von ihnen teilen sich die gleiche Anzahl an Tagen.
- Denken Sie darüber nach, welche Anzahl an Tagen am häufigsten vorkommt, und verwenden Sie dies als Standardwert.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche "Zurücksetzen" zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie „Lösung anzeigen“, um eine Lösung zu sehen.

```html hidden
<h2>Liveausgabe</h2>
<iframe id="output" width="100%" height="600px"></iframe>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu verschieben (Tab fügt ein Tabulatorzeichen hinzu).
</p>

<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.textContent = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January');
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

  let days = 31;
  if (choice === "February") {
    days = 28;
  } else if (
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days = 30;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.textContent = "";
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");`;

function outputDocument(code) {
  const outputBody = `
<div class="output" style="height: 500px; overflow: auto">
  <label for="month">Monat wählen: </label>
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
    // merken Sie sich den Zustand des Benutzercodes
    // damit wir es wiederherstellen können
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "Hide solution";
  } else {
    textarea.value = userCode;
    solution.value = "Show solution";
  }
  update();
});

// verhindern Sie, dass die Tabulatortaste aus dem Textbereich tabbt und
// damit wird es ein Tabulator am Caret-Position schreiben
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

## Aktives Lernen: Weitere Farboptionen

In diesem Beispiel werden Sie den ternären Operator, den wir früher gesehen haben, in eine switch-Anweisung umwandeln, damit wir mehr Auswahlmöglichkeiten für die einfache Website anwenden können. Schauen Sie sich das {{htmlelement("select")}}-Element an — diesmal werden Sie feststellen, dass es nicht zwei Themenoptionen, sondern fünf hat. Sie müssen eine switch-Anweisung direkt unter dem Kommentar `// ADD SWITCH STATEMENT` hinzufügen:

- Es sollte die Variable `choice` als Eingabeausdruck akzeptieren.
- Für jeden Fall sollte die Wahl einer der möglichen `<option>`-Werte entsprechen, die ausgewählt werden können, also `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die Optionsbeschriftungen, wie sie in der Liveausgabe angezeigt werden, großgeschrieben sind. Sie sollten die kleingeschriebenen Werte in Ihrem Code verwenden.
- Für jeden Fall sollte die `update()`-Funktion ausgeführt werden und mit zwei Farbwerten übergeben werden: der erste für die Hintergrundfarbe und der zweite für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenketten sind, die in Anführungszeichen eingeschlossen werden müssen.

Wenn Sie einen Fehler machen, können Sie das Beispiel jederzeit mit der Schaltfläche „Zurücksetzen“ zurücksetzen. Wenn Sie wirklich nicht weiterkommen, drücken Sie „Lösung anzeigen“, um eine Lösung zu sehen.

```html hidden
<h2>Liveausgabe</h2>
<iframe id="output" width="100%" height="350px"></iframe>

<h2>Bearbeitbarer Code</h2>
<p class="a11y-label">
  Drücken Sie Esc, um den Fokus aus dem Codebereich zu verschieben (Tab fügt ein Tabulatorzeichen hinzu).
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
  <label for="theme">Thema wählen: </label>
  <select id="theme">
    <option value="white">Weiß</option>
    <option value="black">Schwarz</option>
    <option value="purple">Lila</option>
    <option value="yellow">Gelb</option>
    <option value="psychedelic">Psychedelisch</option>
  </select>

  <h1>Das ist meine Website</h1>
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
    // merken Sie sich den Zustand des Benutzercodes
    // damit wir es wiederherstellen können
    userCode = textarea.value;
    textarea.value = solutionCode;
    solution.value = "Hide solution";
  } else {
    textarea.value = userCode;
    solution.value = "Show solution";
  }
  update();
});

// verhindern Sie, dass die Tabulatortaste aus dem Textbereich tabbt und
// damit wird es ein Tabulator am Caret-Position schreiben
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Bedingte Anweisungen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Conditionals).

## Fazit

Und das ist alles, was Sie momentan über bedingte Strukturen in JavaScript wissen müssen! Wenn es etwas gibt, das Sie nicht verstanden haben, lesen Sie den Artikel gerne noch einmal durch oder [kontaktieren Sie uns](/de/docs/Learn#contact_us), um Hilfe zu erhalten.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn/JavaScript/First_steps/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz der if...else Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz des bedingten (ternären) Operators](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{NextMenu("Learn/JavaScript/Building_blocks/Looping_code", "Learn/JavaScript/Building_blocks")}}
