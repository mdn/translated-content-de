---
title: Entscheidungen im Code treffen – bedingte Anweisungen
short-title: Conditionals
slug: Learn_web_development/Core/Scripting/Conditionals
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}

In jeder Programmiersprache muss Code abhängig von unterschiedlichen Eingaben Entscheidungen treffen und entsprechende Aktionen ausführen. Wenn in einem Spiel beispielsweise die Anzahl der Leben einer Spielfigur 0 beträgt, ist das Spiel vorbei. Eine Wetter-App könnte morgens eine Sonnenaufgangsgrafik und nachts Sterne und einen Mond anzeigen. In diesem Artikel erfahren Sie, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen aus den vorherigen Lektionen.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, was eine bedingte Anweisung ist: eine Codestruktur, die abhängig vom Ergebnis einer Prüfung unterschiedliche Codepfade ausführt.</li>
          <li>Bedingungen mit <code>if</code>/<code>else</code>/<code>else if</code> umsetzen.</li>
          <li>Vergleichsoperatoren verwenden, um Prüfungen zu formulieren.</li>
          <li>UND-, ODER- und NICHT-Logik in Prüfungen umsetzen.</li>
          <li><code>switch</code>-Anweisungen verwenden.</li>
          <li>Den ternären Operator verwenden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Unter einer Bedingung!

Menschen (und andere Tiere) treffen ständig Entscheidungen, die ihr Leben beeinflussen – von kleinen („Soll ich einen Keks essen oder zwei?“) bis zu großen („Soll ich in meinem Heimatland bleiben und auf dem Hof meiner Familie arbeiten oder nach Amerika ziehen und Astrophysik studieren?“).

Mit bedingten Anweisungen können wir solche Entscheidungen in JavaScript abbilden: von den verfügbaren Möglichkeiten (beispielsweise „ein Keks oder zwei“) bis zu den Folgen der jeweiligen Wahl. Auf „einen Keks gegessen“ könnte etwa „immer noch hungrig“ folgen, auf „zwei Kekse gegessen“ dagegen „satt, aber von Mama ausgeschimpft, weil ich alle Kekse gegessen habe“.

![Eine Zeichentrickfigur hält ein mit „Cookies“ beschriftetes Keksglas. Über ihrem Kopf steht ein Fragezeichen. In einer Sprechblase links ist ein Keks zu sehen, in einer Sprechblase rechts sind zwei Kekse zu sehen. Die Figur scheint zu überlegen, ob sie einen oder zwei Kekse essen soll.](cookie-choice-small.png)

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
2. Einer Bedingung in den runden Klammern, die geprüft wird (typischerweise „Ist dieser Wert größer als ein anderer?“ oder „Existiert dieser Wert?“). Die Bedingung verwendet die [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators), die wir weiter oben im Modul besprochen haben, und ergibt `true` oder `false`.
3. Geschweiften Klammern, die Code umschließen. Das kann beliebiger Code sein; er wird nur ausgeführt, wenn die Bedingung `true` ergibt.
4. Dem Schlüsselwort `else`.
5. Weiteren geschweiften Klammern mit zusätzlichem Code. Auch das kann beliebiger Code sein; er wird nur ausgeführt, wenn die Bedingung nicht `true` ist – also `false` ergibt.

Dieser Code lässt sich recht leicht lesen: „**Wenn** die **Bedingung** `true` ergibt, führe Code A aus, **andernfalls** Code B.“

Beachten Sie, dass Sie `else` und den zweiten Block mit geschweiften Klammern nicht angeben müssen. Auch der folgende Code ist vollkommen gültig:

```js
if (condition) {
  /* code to run if condition is true */
}

/* run some other code */
```

Hier ist jedoch Vorsicht geboten: In diesem Fall wird der zweite Codeblock nicht durch die bedingte Anweisung gesteuert. Er wird **immer** ausgeführt, unabhängig davon, ob die Bedingung `true` oder `false` ergibt. Das ist nicht unbedingt schlecht, entspricht aber möglicherweise nicht Ihrer Absicht: Häufig möchten Sie entweder den einen _oder_ den anderen Codeblock ausführen, nicht beide.

Abschließend sei erwähnt, dass Sie `if...else`-Anweisungen manchmal auch ohne geschweifte Klammern sehen werden, obwohl dies nicht empfehlenswert ist:

```js example-bad
if (condition) doSomething();
else doSomethingElse();
```

Diese Syntax ist gültig. Der Code ist jedoch wesentlich leichter zu verstehen, wenn Sie die Codeblöcke mit geschweiften Klammern abgrenzen und mehrere Zeilen sowie Einrückungen verwenden.

### Ein konkretes Beispiel

Betrachten wir ein konkretes Beispiel, um die Syntax besser zu verstehen. Stellen Sie sich vor, ein Elternteil bittet sein Kind, bei einer Aufgabe im Haushalt zu helfen. Es könnte sagen: „Wenn du für mich einkaufen gehst, bekommst du etwas zusätzliches Taschengeld. Dann kannst du dir das Spielzeug leisten, das du dir gewünscht hast.“ In JavaScript könnten wir das so darstellen:

```js
let shoppingDone = false;
let childAllowance;

if (shoppingDone === true) {
  childAllowance = 10;
} else {
  childAllowance = 5;
}
```

In der gezeigten Form hat die Variable `shoppingDone` immer den Wert `false` – zur Enttäuschung des armen Kindes. Wir müssen eine Möglichkeit schaffen, wie der Elternteil `shoppingDone` auf `true` setzen kann, wenn das Kind einkaufen war.

Zum Beispiel:

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
  let childAllowance;
  if (shoppingDone === true) {
    childAllowance = 10;
  } else {
    childAllowance = 5;
  }

  para.textContent = `Child has earned $${childAllowance} this week.`;
}

updateAllowance();
```

{{embedlivesample("allowance-updater", "100%", "100")}}

Um den vollständigen Quellcode des vorherigen Beispiels anzusehen, klicken Sie auf die Schaltfläche „Play“. Dadurch wird das Beispiel im MDN Playground geöffnet.

### else if

Im letzten Beispiel gab es zwei Möglichkeiten beziehungsweise Ergebnisse. Was aber, wenn wir mehr als zwei benötigen?

Mit `else if` können Sie einer `if...else`-Anweisung weitere Möglichkeiten und Ergebnisse hinzufügen. Für jede zusätzliche Möglichkeit benötigen Sie einen weiteren Block zwischen `if () { }` und `else { }`. Sehen Sie sich das folgende, etwas umfangreichere Beispiel an, das Teil einer einfachen Wettervorhersage-App sein könnte:

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

1. Hier haben wir ein HTML-Element {{htmlelement("select")}}, mit dem wir verschiedene Wetterlagen auswählen können, und einen einfachen Absatz.
2. Im JavaScript speichern wir Referenzen auf die Elemente {{htmlelement("select")}} und {{htmlelement("p")}}. Außerdem fügen wir dem Element `<select>` einen Event-Listener hinzu, damit bei einer Änderung seines Werts die Funktion `setWeather()` ausgeführt wird.
3. Wenn die Funktion ausgeführt wird, setzen wir zunächst die Variable `choice` auf den aktuell im Element `<select>` ausgewählten Wert. Anschließend verwenden wir eine bedingte Anweisung, um abhängig vom Wert von `choice` unterschiedliche Texte im Absatz anzuzeigen. Beachten Sie, dass alle Bedingungen außer der ersten in `else if () { }`-Blöcken geprüft werden. Die erste wird in einem `if () { }`-Block geprüft.
4. Die letzte Möglichkeit im `else { }`-Block ist gewissermaßen eine Auffangoption: Der darin enthaltene Code wird ausgeführt, wenn keine der Bedingungen `true` ergibt. Hier entfernt er den Text aus dem Absatz, wenn nichts ausgewählt ist – beispielsweise, wenn jemand erneut die anfangs angezeigte Platzhalteroption „--Make a choice--“ auswählt.

### Ein Hinweis zu Vergleichsoperatoren

Mit Vergleichsoperatoren prüfen wir die Bedingungen in unseren bedingten Anweisungen. Wir haben sie bereits im Artikel [Grundlegende Mathematik in JavaScript – Zahlen und Operatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators) kennengelernt. Zur Verfügung stehen:

- `===` und `!==` – prüfen, ob ein Wert mit einem anderen identisch beziehungsweise nicht identisch ist.
- `<` und `>` – prüfen, ob ein Wert kleiner beziehungsweise größer als ein anderer ist.
- `<=` und `>=` – prüfen, ob ein Wert kleiner oder gleich beziehungsweise größer oder gleich einem anderen ist.

Die Prüfung boolescher Werte (`true`/`false`) verdient besondere Erwähnung, weil Ihnen dabei ein häufig verwendetes Muster begegnen wird. Jeder Wert, der nicht `false`, `undefined`, `null`, `0`, `NaN` oder eine leere Zeichenfolge (`''`) ist, wird bei der Prüfung als Bedingung als `true` ausgewertet. Daher können Sie allein mit einem Variablennamen prüfen, ob dessen Wert als `true` ausgewertet wird oder ob er überhaupt vorhanden ist (also nicht `undefined` ist). Zum Beispiel:

```js
let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}
```

Für unser vorheriges Beispiel mit dem Kind, das eine Aufgabe für ein Elternteil erledigt, könnten Sie entsprechend Folgendes schreiben:

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

Sie können problemlos eine `if...else`-Anweisung in eine andere einfügen, sie also verschachteln. Beispielsweise könnten wir unsere Wettervorhersage-App so erweitern, dass sie abhängig von der Temperatur weitere Möglichkeiten berücksichtigt:

```js
if (choice === "sunny") {
  if (temperature < 86) {
    para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
  } else if (temperature >= 86) {
    para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
  }
}
```

Auch wenn der gesamte Code zusammenwirkt, funktioniert jede `if...else`-Anweisung vollkommen unabhängig von der anderen.

### Logische Operatoren: UND, ODER und NICHT

Wenn Sie mehrere Bedingungen prüfen möchten, ohne `if...else`-Anweisungen zu verschachteln, helfen Ihnen [logische Operatoren](/de/docs/Web/JavaScript/Reference/Operators). Die ersten beiden bewirken in Bedingungen Folgendes:

- `&&` – UND; verknüpft zwei oder mehr Ausdrücke. Damit der gesamte Ausdruck `true` ergibt, muss jeder einzelne Ausdruck `true` ergeben.
- `||` – ODER; verknüpft zwei oder mehr Ausdrücke. Damit der gesamte Ausdruck `true` ergibt, muss mindestens einer davon `true` ergeben.

Als Beispiel für UND lässt sich der vorherige Codeausschnitt so umschreiben:

```js
if (choice === "sunny" && temperature < 86) {
  para.textContent = `It is ${temperature} degrees outside — nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`;
} else if (choice === "sunny" && temperature >= 86) {
  para.textContent = `It is ${temperature} degrees outside — REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`;
}
```

Der erste Codeblock wird also nur ausgeführt, wenn sowohl `choice === 'sunny'` _als auch_ `temperature < 86` jeweils `true` ergeben.

Sehen wir uns ein kurzes Beispiel für ODER an:

```js
if (iceCreamVanOutside || houseStatus === "on fire") {
  console.log("You should leave the house quickly.");
} else {
  console.log("Probably should just stay in then.");
}
```

Mit dem letzten Typ eines logischen Operators, NICHT, dargestellt durch `!`, können Sie einen Ausdruck negieren. Kombinieren wir ihn im obigen Beispiel mit ODER:

```js
if (!(iceCreamVanOutside || houseStatus === "on fire")) {
  console.log("Probably should just stay in then.");
} else {
  console.log("You should leave the house quickly.");
}
```

Wenn der ODER-Ausdruck in diesem Codeausschnitt `true` ergibt, negiert der NICHT-Operator das Ergebnis, sodass der gesamte Ausdruck `false` ergibt.

Sie können beliebig viele logische Ausdrücke in jeder gewünschten Struktur miteinander kombinieren. Das folgende Beispiel führt den enthaltenen Code nur aus, wenn beide ODER-Ausdrücke `true` ergeben und damit auch der gesamte UND-Ausdruck `true` ergibt:

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === "Steve")) {
  // run the code
}
```

Ein häufiger Fehler bei der Verwendung des logischen ODER-Operators in bedingten Anweisungen besteht darin, die zu prüfende Variable nur einmal anzugeben und danach mögliche Werte, getrennt durch `||`-Operatoren (ODER), aufzulisten. Zum Beispiel:

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // run my code
}
```

In diesem Fall wird die Bedingung in `if ()` immer als wahr ausgewertet, da 7 (wie jeder andere Wert ungleich null) immer als `true` ausgewertet wird. Die Bedingung besagt eigentlich: „Wenn x gleich 5 ist oder 7 wahr ist“ – und Letzteres ist immer der Fall. Logisch entspricht das nicht unserer Absicht. Damit es funktioniert, müssen Sie auf beiden Seiten jedes ODER-Operators eine vollständige Prüfung angeben:

```js
if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}
```

## switch-Anweisungen

Mit `if...else`-Anweisungen lässt sich Code gut bedingt ausführen, doch sie haben auch Nachteile. Sie eignen sich vor allem für Fälle mit wenigen Möglichkeiten, bei denen jede Möglichkeit einen nennenswerten Codeumfang erfordert und/oder die Bedingungen komplex sind (etwa mehrere logische Operatoren enthalten). Wenn Sie dagegen lediglich abhängig von einer Bedingung einer Variablen einen bestimmten Wert zuweisen oder eine bestimmte Meldung ausgeben möchten, kann die Syntax umständlich werden – insbesondere bei vielen Möglichkeiten.

In solchen Fällen sind [`switch`-Anweisungen](/de/docs/Web/JavaScript/Reference/Statements/switch) hilfreich. Sie nehmen einen einzelnen Ausdruck oder Wert entgegen und prüfen nacheinander mehrere Möglichkeiten, bis eine davon übereinstimmt. Dann führen sie den zugehörigen Code aus. Der folgende Pseudocode vermittelt Ihnen eine Vorstellung davon:

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
2. Einem Ausdruck oder Wert innerhalb der runden Klammern.
3. Dem Schlüsselwort `case`, gefolgt von einem möglichen Ergebnis des Ausdrucks beziehungsweise Werts und einem Doppelpunkt.
4. Code, der ausgeführt wird, wenn die Möglichkeit zum Ausdruck passt.
5. Einer `break`-Anweisung mit abschließendem Semikolon. Wenn die vorherige Möglichkeit zum Ausdruck beziehungsweise Wert passt, beendet der Browser an dieser Stelle die Ausführung des Blocks und fährt mit dem Code nach der switch-Anweisung fort.
6. Beliebig vielen weiteren Fällen (Schritte 3–5).
7. Dem Schlüsselwort `default`, gefolgt von demselben Codemuster wie bei einem Fall (Schritte 3–5). Anders als bei `case` folgt auf `default` jedoch keine Auswahlmöglichkeit. Auch eine `break`-Anweisung ist nicht nötig, da danach innerhalb des Blocks ohnehin nichts mehr ausgeführt wird. Diese Standardoption wird ausgeführt, wenn keine der Möglichkeiten übereinstimmt.

> [!NOTE]
> Sie müssen den `default`-Abschnitt nicht angeben. Wenn der Ausdruck unmöglich einen unbekannten Wert ergeben kann, können Sie ihn weglassen. Besteht diese Möglichkeit jedoch, sollten Sie ihn hinzufügen, um unbekannte Fälle zu behandeln.

### Ein switch-Beispiel

Sehen wir uns ein konkretes Beispiel an: Wir schreiben unsere Wettervorhersage-App so um, dass sie stattdessen eine switch-Anweisung verwendet.

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

Bevor Sie selbst einige Beispiele ausprobieren, möchten wir Ihnen noch eine letzte Syntax vorstellen. Der [ternäre oder bedingte Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator) prüft eine Bedingung und liefert einen Wert beziehungsweise Ausdruck, wenn sie `true` ergibt, und einen anderen, wenn sie `false` ergibt. Das kann in manchen Situationen nützlich sein und deutlich weniger Code erfordern als ein `if...else`-Block, wenn anhand einer `true`/`false`-Bedingung zwischen zwei Möglichkeiten gewählt wird. Der Pseudocode sieht so aus:

```js-nolint
condition ? run this code : run this code instead
```

Betrachten wir ein Beispiel:

```js
const greeting = isBirthday
  ? "Happy birthday Mrs. Smith — we hope you have a great day!"
  : "Good morning Mrs. Smith.";
```

Hier haben wir eine Variable namens `isBirthday`. Wenn sie `true` ist, wünschen wir unserem Gast alles Gute zum Geburtstag. Andernfalls erhält sie die übliche Begrüßung.

### Beispiel für den ternären Operator

Der ternäre Operator dient nicht nur dazu, Variablenwerte festzulegen. Sie können damit auch Funktionen oder Codezeilen ausführen – ganz nach Bedarf. Das folgende interaktive Beispiel zeigt eine einfache Themenauswahl, bei der die Gestaltung der Website mithilfe eines ternären Operators festgelegt wird.

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

Hier gibt es ein Element {{htmlelement('select')}} zur Auswahl eines Themas (schwarz oder weiß) und ein einfaches Element {{htmlelement("Heading_Elements", "h1")}} zur Anzeige eines Website-Titels. Außerdem gibt es eine Funktion namens `update()`, die zwei Farben als Parameter (Eingaben) entgegennimmt. Die Hintergrundfarbe der Website wird auf die zuerst übergebene Farbe gesetzt, die Textfarbe auf die zweite.

Schließlich gibt es einen [onchange](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener, der eine Funktion mit einem ternären Operator ausführt. Dieser beginnt mit einer Prüfbedingung: `select.value === 'black'`. Ergibt sie `true`, führen wir `update()` mit Schwarz und Weiß als Parametern aus. Das Ergebnis ist ein schwarzer Hintergrund mit weißem Text. Ergibt sie `false`, führen wir `update()` mit Weiß und Schwarz als Parametern aus, sodass die Farben der Website umgekehrt werden.

## Einen einfachen Kalender erstellen

In diesem Beispiel helfen Sie dabei, eine einfache Kalender-App fertigzustellen. Der vorhandene Code enthält:

- Ein Element {{htmlelement("select")}}, mit dem Benutzer zwischen verschiedenen Monaten wählen können.
- Einen `change`-Event-Handler, der erkennt, wenn der ausgewählte Wert im Menü `<select>` geändert wird.
- Eine Funktion namens `createCalendar()`, die den Kalender zeichnet und den richtigen Monat im Element {{htmlelement("Heading_Elements", "h1")}} anzeigt.

So vervollständigen Sie das Beispiel:

1. Klicken Sie im folgenden Codeblock auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Schreiben Sie innerhalb der Funktion `createCalendar()` direkt unter dem Kommentar `// ADD CONDITIONAL HERE` eine bedingte Anweisung. Diese soll:
   1. Den ausgewählten Monat prüfen, der in der Variablen `choice` gespeichert ist. Das ist nach einer Änderung der Auswahl der Wert des Elements `<select>`, beispielsweise „January“.
   2. Der Variablen `days` die Anzahl der Tage des ausgewählten Monats zuweisen. Dazu müssen Sie nachschlagen, wie viele Tage die einzelnen Monate haben. Schaltjahre können Sie für dieses Beispiel außer Acht lassen.

Hinweise:

- Verwenden Sie am besten logisches ODER, um mehrere Monate in einer einzigen Bedingung zusammenzufassen; viele haben dieselbe Anzahl an Tagen.
- Überlegen Sie, welche Anzahl an Tagen am häufigsten vorkommt, und verwenden Sie diese als Standardwert.

Falls Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Wenn Sie nicht weiterkommen, können Sie sich die Lösung unterhalb der interaktiven Ausgabe ansehen.

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

## Weitere Farboptionen hinzufügen

In diesem Beispiel wandeln Sie das zuvor gezeigte Beispiel mit dem ternären Operator in eine switch-Anweisung um, damit die Website mehr Farboptionen bietet. Sehen Sie sich das Element {{htmlelement("select")}} an: Diesmal stehen nicht zwei, sondern fünf Themen zur Auswahl.

So vervollständigen Sie das Beispiel:

1. Klicken Sie im folgenden Codeblock auf **„Play“**, um das Beispiel im MDN Playground zu bearbeiten.
2. Fügen Sie direkt unter dem Kommentar `// ADD SWITCH STATEMENT` eine switch-Anweisung hinzu:
   1. Sie soll die Variable `choice` als Eingabeausdruck verwenden.
   2. Jeder Fall soll einem der auswählbaren Werte von `<option>` entsprechen: `white`, `black`, `purple`, `yellow` oder `psychedelic`. Beachten Sie, dass die Optionswerte kleingeschrieben sind, während die in der interaktiven Ausgabe angezeigten _Beschriftungen_ mit einem Großbuchstaben beginnen. Verwenden Sie in Ihrem Code die kleingeschriebenen Werte.
   3. In jedem Fall soll die Funktion `update()` mit zwei Farbwerten aufgerufen werden: dem ersten für die Hintergrundfarbe und dem zweiten für die Textfarbe. Denken Sie daran, dass Farbwerte Zeichenfolgen sind und deshalb in Anführungszeichen stehen müssen.

Falls Sie einen Fehler machen, können Sie Ihre Änderungen mit der Schaltfläche _Reset_ im MDN Playground zurücksetzen. Wenn Sie nicht weiterkommen, können Sie sich die Lösung unterhalb der interaktiven Ausgabe ansehen.

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

Das ist vorerst alles, was Sie über bedingte Anweisungen in JavaScript wissen müssen! Im nächsten Artikel finden Sie Aufgaben, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- [Vergleichsoperatoren](/de/docs/Learn_web_development/Core/Scripting/Math#comparison_operators)
- [Bedingte Anweisungen im Detail](/de/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#conditional_statements)
- [Referenz zu if...else](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [Referenz zum bedingten (ternären) Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator)

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Silly_story_generator", "Learn_web_development/Core/Scripting/Test_your_skills/Conditionals", "Learn_web_development/Core/Scripting")}}
