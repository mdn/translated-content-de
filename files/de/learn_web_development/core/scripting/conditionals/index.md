---
title: Entscheidungen im Code treffen – bedingte Anweisungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss Code abhängig von verschiedenen Eingaben Entscheidungen treffen und entsprechende Aktionen ausführen. Wenn in einem Spiel beispielsweise die Anzahl der Leben einer Spielfigur 0 beträgt, ist das Spiel vorbei. Eine Wetter-App könnte morgens eine Sonnenaufgangsgrafik anzeigen, nachts dagegen Sterne und einen Mond. In diesem Artikel untersuchen wir, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was eine bedingte Anweisung ist: eine Codestruktur, die abhängig vom Ergebnis einer Prüfung unterschiedliche Codepfade ausführt.</li>
          <li>Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code> umsetzen.</li>
          <li>Vergleichsoperatoren verwenden, um Prüfungen zu erstellen.</li>
          <li>UND-, ODER- und NICHT-Logik in Prüfungen einsetzen.</li>
          <li>Switch-Anweisungen verwenden.</li>
          <li>Den ternären Operator verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Alles unter einer Bedingung!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen – von kleinen („Soll ich einen Keks essen oder zwei?“) bis hin zu großen („Soll ich in meinem Heimatland bleiben und auf dem Bauernhof meiner Familie arbeiten oder nach Amerika ziehen und Astrophysik studieren?“).

Mit bedingten Anweisungen können wir solche Entscheidungen in JavaScript darstellen: von der Wahl, die getroffen werden muss (beispielsweise „ein Keks oder zwei“), bis zu ihren möglichen Folgen. Wer einen Keks isst, ist vielleicht „immer noch hungrig“; wer zwei isst, ist womöglich „satt, wird aber von seiner Mutter geschimpft, weil alle Kekse aufgegessen sind“.

![Eine Zeichentrickfigur hält eine Keksdose mit der Aufschrift „Cookies“. Über ihrem Kopf steht ein Fragezeichen. In einer Sprechblase links ist ein Keks zu sehen, in einer Sprechblase rechts sind es zwei. Die Figur überlegt offenbar, ob sie einen oder zwei Kekse essen soll.](cookie-choice-small.png)

## if...else-Anweisungen

Sehen wir uns die mit Abstand häufigste Art bedingter Anweisungen in JavaScript an: die [`if...else`-Anweisung](/de/docs/Web/JavaScript/Reference/Statements/if...else).

### Grundlegende if...else-Syntax

Die grundlegende `if...else`-Syntax sieht so aus:

```js
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
```

Sie besteht aus:

1. Dem Schlüsselwort `if`, gefolgt von runden Klammern.
2. Einer Bedingung innerhalb der Klammern, die geprüft wird (typischerweise „Ist dieser Wert größer als jener?“ oder „Existiert dieser Wert?“). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir weiter oben in diesem Modul besprochen haben, und ergibt `true` oder `false`.
3. Geschweiften Klammern, die Code umschließen. Das kann beliebiger Code sein; er wird nur ausgeführt, wenn die Bedingung `true` ergibt.
4. Dem Schlüsselwort `else`.
5. Weiteren geschweiften Klammern, die weiteren Code umschließen. Auch das kann beliebiger Code sein; er wird nur ausgeführt, wenn die Bedingung nicht `true` ist – mit anderen Worten, wenn sie `false` ist.

Dieser Code ist recht gut lesbar. Er besagt: „**Wenn** die **Bedingung** `true` ergibt, führe Code A aus, **andernfalls** Code B.“

Beachten Sie, dass Sie `else` und den zweiten Block in geschweiften Klammern nicht angeben müssen. Auch Folgendes ist vollkommen gültiger Code:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Hier ist allerdings Vorsicht geboten: In diesem Fall wird der zweite Codeblock nicht von der bedingten Anweisung gesteuert. Er wird **immer** ausgeführt, unabhängig davon, ob die Bedingung `true` oder `false` ergibt. Das ist nicht unbedingt schlecht, aber möglicherweise nicht das, was Sie möchten. Oft soll _entweder_ der eine _oder_ der andere Codeblock ausgeführt werden, nicht beide.

Abschließend sei erwähnt, dass Sie gelegentlich `if...else`-Anweisungen ohne geschweifte Klammern sehen werden, auch wenn diese Schreibweise nicht empfohlen wird:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Diese Syntax ist vollkommen gültig. Der Code ist jedoch wesentlich leichter zu verstehen, wenn Sie die Codeblöcke mit geschweiften Klammern abgrenzen und mehrere Zeilen mit Einrückungen verwenden.

### Ein konkretes Beispiel

Um diese Syntax besser zu verstehen, betrachten wir ein konkretes Beispiel. Stellen Sie sich vor, ein Elternteil bittet sein Kind, bei einer Aufgabe im Haushalt zu helfen. Es könnte sagen: „Wenn du für mich einkaufen gehst, gebe ich dir zusätzliches Taschengeld, damit du dir das Spielzeug kaufen kannst, das du haben wolltest.“ In JavaScript könnten wir das so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

In der gezeigten Form bleibt die Variable `shoppingDone` in diesem Code immer `false` – eine Enttäuschung für das arme Kind. Wir müssen eine Möglichkeit schaffen, damit der Elternteil `shoppingDone` auf `true` setzen kann, wenn das Kind einkaufen war.

Zum Beispiel so:

```html hidden live-sample___allowance-updater
<label for="shopping-check">Has the shopping been done? </label>
<input type="checkbox" id="shopping-check" />

<p></p>
```

```js hidden live-sample___allowance-updater
const checkBox = document.querySelector("input");
const para = document.querySelector("p");
let shoppingDone = false;

checkBox.addEventListener("change", () => {
  if (shoppingDone === false) {
    shoppingDone = true;
  } else {
    shoppingDone = false;
  }
  updateAllowance();
});

function updateAllowance() {
  let childsAllowance;
  if (shoppingDone === true) {
    childsAllowance = 10;
  } else {
    childsAllowance = 5;
  }

  para.textContent = `Child has earned \$${childsAllowance} this week.`;
}

updateAllowance();
```

{{embedlivesample("allowance-updater", "100%", "100")}}

Um den vollständigen Quellcode des vorherigen Beispiels zu sehen, klicken Sie auf die Play-Schaltfläche. Dadurch wird das Beispiel im MDN Playground geöffnet.

### else if

Das letzte Beispiel bot zwei Möglichkeiten oder Ergebnisse. Was aber, wenn wir mehr als zwei benötigen?

Mit `else if` können Sie Ihrer `if...else`-Anweisung weitere Möglichkeiten und Ergebnisse hinzufügen. Für jede zusätzliche Möglichkeit ist ein weiterer Block zwischen `if () { }` und `else { }` nötig. Sehen Sie sich das folgende ausführlichere Beispiel an, das Teil einer einfachen Wettervorhersage-App sein könnte:

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

1. Hier gibt es ein HTML-Element {{htmlelement("select")}}, mit dem wir verschiedene Wetterlagen auswählen können, und einen einfachen Absatz.
2. Im JavaScript speichern wir Referenzen auf die Elemente {{htmlelement("select")}} und {{htmlelement("p")}}. Außerdem fügen wir dem `<select>`-Element einen Event-Listener hinzu, damit die Funktion `setWeather()` ausgeführt wird, wenn sich sein Wert ändert.
3. Wenn die Funktion ausgeführt wird, setzen wir zunächst die Variable `choice` auf den aktuell im `<select>`-Element ausgewählten Wert. Anschließend zeigen wir mithilfe einer bedingten Anweisung je nach Wert von `choice` unterschiedlichen Text im Absatz an. Beachten Sie, dass alle Bedingungen außer der ersten in `else if () { }`-Blöcken geprüft werden. Die erste wird in einem `if () { }`-Block geprüft.
4. Die letzte Möglichkeit im `else { }`-Block ist gewissermaßen die Auffanglösung: Der darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ergibt. Hier entfernt er den Text aus dem Absatz, wenn nichts ausgewählt ist – beispielsweise wenn jemand erneut die anfänglich angezeigte Platzhalteroption „--Make a choice--“ auswählt.

### Ein Hinweis zu Vergleichsoperatoren

Mit Vergleichsoperatoren prüfen wir die Bedingungen in unseren bedingten Anweisungen. Wir haben sie bereits im Artikel [Grundlegende Mathematik in JavaScript – Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) kennengelernt. Zur Auswahl stehen:

- `===` und `!==` – prüfen, ob ein Wert mit einem anderen identisch beziehungsweise nicht identisch ist.
- `<` und `>` – prüfen, ob ein Wert kleiner oder größer als ein anderer ist.
- `<=` und `>=` – prüfen, ob ein Wert kleiner oder gleich beziehungsweise größer oder gleich einem anderen ist.

Auf die Prüfung boolescher Werte (`true`/`false`) und ein häufig vorkommendes Muster möchten wir besonders hinweisen. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder eine leere Zeichenfolge (`''`) ist, ergibt bei einer Prüfung als Bedingung `true`. Deshalb können Sie einen Variablennamen allein verwenden, um zu prüfen, ob sein Wert `true` ist oder ob die Variable überhaupt einen definierten Wert hat (also nicht `undefined` ist). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Zurück zu unserem Beispiel mit dem Kind, das einem Elternteil bei einer Aufgabe hilft: Sie könnten es auch so schreiben:

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

### if...else verschachteln

Sie können problemlos eine `if...else`-Anweisung in eine andere setzen, sie also verschachteln. Beispielsweise könnten wir unsere Wettervorhersage-App so erweitern, dass sie abhängig von der Temperatur weitere Möglichkeiten berücksichtigt:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Auch wenn der gesamte Code zusammenwirkt, arbeitet jede `if...else`-Anweisung völlig unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen prüfen möchten, ohne `if...else`-Anweisungen zu verschachteln, helfen Ihnen [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators). Die ersten beiden bewirken in Bedingungen Folgendes:

- `&&` – UND; verknüpft zwei oder mehr Ausdrücke. Damit der gesamte Ausdruck `true` ergibt, muss jeder einzelne Ausdruck `true` ergeben.
- `||` – ODER; verknüpft zwei oder mehr Ausdrücke. Damit der gesamte Ausdruck `true` ergibt, muss mindestens einer der Ausdrücke `true` ergeben.

Als Beispiel für UND können wir den vorherigen Codeausschnitt so umschreiben:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Der erste Codeblock wird beispielsweise nur ausgeführt, wenn sowohl `choice === 'sunny'` _als auch_ `temperature < 86` `true` ergeben.

Sehen wir uns ein kurzes Beispiel für ODER an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Der dritte logische Operator, NICHT, wird mit `!` geschrieben und kann einen Ausdruck negieren. Kombinieren wir ihn mit ODER im obigen Beispiel:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

Wenn die ODER-Verknüpfung in diesem Codeausschnitt `true` ergibt, kehrt der NICHT-Operator das Ergebnis um, sodass der gesamte Ausdruck `false` ergibt.

Sie können beliebig viele logische Ausdrücke in jeder gewünschten Struktur miteinander kombinieren. Das folgende Beispiel führt den enthaltenen Code nur aus, wenn beide ODER-Verknüpfungen `true` ergeben und damit auch die gesamte UND-Verknüpfung `true` ergibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler beim Einsatz des logischen ODER-Operators in bedingten Anweisungen besteht darin, die zu prüfende Variable nur einmal zu nennen und anschließend mögliche Werte, getrennt durch `||`, aufzulisten. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

Hier ergibt die Bedingung in `if ()` immer `true`, da 7 (wie jeder andere Wert ungleich null) als Bedingung stets `true` ergibt. Tatsächlich besagt die Bedingung: „Wenn x gleich 5 ist oder 7 wahr ist“ – und Letzteres ist immer der Fall. Logisch gesehen ist das nicht das, was wir wollen! Damit es funktioniert, müssen Sie auf beiden Seiten jedes ODER-Operators eine vollständige Prüfung angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

Mit `if...else`-Anweisungen lässt sich bedingter Code gut umsetzen, doch sie haben auch Nachteile. Sie eignen sich vor allem, wenn es nur wenige Möglichkeiten gibt, jede davon eine gewisse Menge Code erfordert und/oder die Bedingungen komplex sind (beispielsweise mehrere logische Operatoren enthalten). Wenn Sie hingegen abhängig von einer Bedingung lediglich einer Variablen einen bestimmten Wert zuweisen oder eine bestimmte Meldung ausgeben möchten, kann die Syntax etwas umständlich werden – besonders bei vielen Möglichkeiten.

In solchen Fällen sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) hilfreich. Sie nehmen einen einzelnen Ausdruck oder Wert entgegen und durchsuchen mehrere Möglichkeiten, bis sie eine Übereinstimmung finden. Dann führen sie den zugehörigen Code aus. Der folgende Pseudocode veranschaulicht das:

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

Er besteht aus:

1. Dem Schlüsselwort `switch`, gefolgt von runden Klammern.
2. Einem Ausdruck oder Wert innerhalb der Klammern.
3. Dem Schlüsselwort `case`, gefolgt von einem möglichen Wert des Ausdrucks und einem Doppelpunkt.
4. Code, der ausgeführt wird, wenn der mögliche Wert mit dem Ausdruck übereinstimmt.
5. Einer `break`-Anweisung, gefolgt von einem Semikolon. Wenn der vorherige Wert mit dem Ausdruck übereinstimmt, beendet der Browser hier die Ausführung des Blocks und fährt mit dem Code unterhalb der switch-Anweisung fort.
6. Beliebig vielen weiteren Fällen (Schritte 3–5).
7. Dem Schlüsselwort `default`, gefolgt von demselben Codemuster wie bei den Fällen (Schritte 3–5). Nach `default` steht jedoch kein möglicher Wert. Auch eine `break`-Anweisung ist nicht nötig, da danach innerhalb des Blocks ohnehin nichts mehr ausgeführt wird. Diese Standardoption wird ausgeführt, wenn keiner der Fälle übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht angeben. Wenn ausgeschlossen ist, dass der Ausdruck einen unbekannten Wert annimmt, können Sie ihn problemlos weglassen. Besteht diese Möglichkeit jedoch, sollten Sie ihn angeben, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Sehen wir uns ein konkretes Beispiel an: Wir schreiben unsere Wettervorhersage-App so um, dass sie stattdessen eine switch-Anweisung verwendet:

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

## Ternärer Operator

Bevor Sie selbst einige Beispiele ausprobieren, möchten wir Ihnen noch ein letztes Syntaxelement vorstellen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) prüft eine Bedingung und liefert einen Wert beziehungsweise Ausdruck zurück, wenn sie `true` ist, und einen anderen, wenn sie `false` ist. Das kann in manchen Situationen nützlich sein und deutlich weniger Code als ein `if...else`-Block erfordern, wenn zwischen zwei Möglichkeiten anhand einer `true`/`false`-Bedingung entschieden wird. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Sehen wir uns ein Beispiel an:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday`. Ist sie `true`, erhält unser Gast eine Geburtstagsnachricht; andernfalls erhält sie die übliche Begrüßung.

### Beispiel für den ternären Operator

Der ternäre Operator dient nicht nur dazu, Variablenwerte festzulegen. Sie können damit auch Funktionen oder andere Codezeilen ausführen. Das folgende interaktive Beispiel zeigt eine einfache Designauswahl, bei der die Darstellung der Website mithilfe eines ternären Operators festgelegt wird.

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

Hier gibt es ein {{htmlelement('select')}}-Element zur Auswahl eines Designs (schwarz oder weiß) sowie ein einfaches {{htmlelement("Heading_Elements", "h1")}}-Element zur Anzeige eines Website-Titels. Außerdem gibt es eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) entgegennimmt. Die Hintergrundfarbe der Website wird auf die erste angegebene Farbe gesetzt, die Textfarbe auf die zweite.

Schließlich gibt es einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener, der eine Funktion mit einem ternären Operator ausführt. Dieser beginnt mit der Bedingung `select.value === 'black'`. Ergibt sie `true`, rufen wir `update()` mit Schwarz und Weiß als Parametern auf. Dadurch erhält die Website einen schwarzen Hintergrund und weißen Text. Ergibt sie `false`, rufen wir `update()` mit Weiß und Schwarz auf, sodass die Farben umgekehrt werden.

## Einen einfachen Kalender umsetzen

In diesem Beispiel helfen Sie uns, eine einfache Kalenderanwendung fertigzustellen. Der vorhandene Code enthält:

- Ein {{htmlelement("select")}}-Element, mit dem zwischen verschiedenen Monaten gewählt werden kann.
- Einen `change`-Event-Handler, der erkennt, wenn sich der ausgewählte Wert im `<select>`-Menü ändert.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im Element {{htmlelement("Heading_Elements", "h1")}} anzeigt.

So vervollständigen Sie das Beispiel:

1. Klicken Sie im Codeblock unten auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie innerhalb der Funktion `createCalendar()` direkt unter dem Kommentar `// ADD CONDITIONAL HERE` eine bedingte Anweisung. Sie soll:
   1. Den ausgewählten Monat betrachten, der in der Variablen `choice` gespeichert ist. Das ist nach einer Änderung der Wert des `<select>`-Elements, beispielsweise „January“.
   2. Der Variablen `days` die Anzahl der Tage im ausgewählten Monat zuweisen. Dazu müssen Sie die Anzahl der Tage für jeden Monat des Jahres ermitteln. Schaltjahre können Sie für dieses Beispiel außer Acht lassen.

Hinweise:

- Verwenden Sie am besten logisches ODER, um mehrere Monate in einer einzigen Bedingung zusammenzufassen. Viele Monate haben gleich viele Tage.
- Überlegen Sie, welche Anzahl an Tagen am häufigsten vorkommt, und verwenden Sie diese als Standardwert.

Falls Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Wenn Sie nicht weiterkommen, finden Sie unter der interaktiven Ausgabe die Lösung.

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

Ihr fertiger JavaScript-Code sollte so aussehen:

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

## Weitere Farben zur Auswahl hinzufügen

In diesem Beispiel wandeln Sie das frühere Beispiel mit dem ternären Operator in eine switch-Anweisung um, damit weitere Farben für die Website zur Auswahl stehen. Sehen Sie sich das {{htmlelement("select")}}-Element an: Diesmal bietet es nicht zwei, sondern fünf Designoptionen.

So vervollständigen Sie das Beispiel:

1. Klicken Sie im Codeblock unten auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie direkt unter dem Kommentar `// ADD SWITCH STATEMENT` eine switch-Anweisung hinzu:
   1. Sie soll die Variable `choice` als Eingabeausdruck verwenden.
   2. Jeder Fall soll einem der auswählbaren `<option>`-Werte entsprechen: `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Werte kleingeschrieben sind, während die in der interaktiven Ausgabe angezeigten _Beschriftungen_ mit einem Großbuchstaben beginnen. Verwenden Sie in Ihrem Code die kleingeschriebenen Werte.
   3. Für jeden Fall soll die Funktion `update()` mit zwei Farbwerten aufgerufen werden: dem ersten für die Hintergrundfarbe und dem zweiten für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind und deshalb in Anführungszeichen stehen müssen.

Falls Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Wenn Sie nicht weiterkommen, finden Sie unter der interaktiven Ausgabe die Lösung.

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

Ihr fertiger JavaScript-Code sollte so aussehen:

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

Das ist alles, was Sie im Moment über bedingte Strukturen in JavaScript wissen müssen! Im nächsten Artikel finden Sie einige Aufgaben, mit denen Sie prüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz zu if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz zum bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}
