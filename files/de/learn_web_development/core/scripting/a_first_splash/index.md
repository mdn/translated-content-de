---
title: Ein erster Einstieg in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Nun, da Sie etwas über die Theorie von JavaScript und seine Einsatzmöglichkeiten gelernt haben, möchten wir Ihnen einen Einblick in den Prozess der Erstellung eines einfachen JavaScript-Programms geben, indem wir Sie durch ein praktisches Tutorial führen. Hier werden Sie Schritt für Schritt ein einfaches "Zahlenraten"-Spiel aufbauen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Denken wie ein Programmierer.</li>
          <li>Erfahrungen mit dem Schreiben von JavaScript zu machen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier ganz klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels lernen oder auch nur den gesamten Code verstehen, den wir Sie bitten zu schreiben. Stattdessen möchten wir Ihnen einen Eindruck davon vermitteln, wie JavaScript-Funktionen zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In den nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen noch viel ausführlicher sehen, machen Sie sich also keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen werden, sind die gleichen wie in anderen Programmiersprachen — Funktionen, Schleifen usw. Die Syntax des Codes sieht anders aus, aber die Konzepte sind weitgehend die gleichen.

## Denken wie ein Programmierer

Eines der schwierigsten Dinge beim Programmieren ist nicht die Syntax, die man lernen muss, sondern wie man sie anwendet, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — das bedeutet im Allgemeinen, zu überlegen, welche Anforderungen an Ihr Programm gestellt werden, welche Code-Funktionen benötigt werden, um diese Dinge zu erreichen, und wie sie zusammenarbeiten.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — plus ein wenig Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Geist" entwickeln, aber wir werden Ihnen viele Gelegenheiten geben, im Kurs wie ein Programmierer zu denken.

Mit diesem Ziel im Kopf, schauen wir uns das Beispiel an, das wir in diesem Artikel aufbauen werden, und besprechen den allgemeinen Prozess, es in greifbare Aufgaben zu unterteilen.

## Beispiel — Zahlenraten-Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen können, das Sie unten sehen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Versuchen Sie es zu spielen — machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen Sie sich vor, Ihr Chef hätte Ihnen folgende Vorgabe gegeben, um dieses Spiel zu erstellen:

> Ich möchte, dass Sie ein einfaches Spiel vom Typ "Raten Sie die Zahl" erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt, und wenn er falsch liegt, ob die Schätzung zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler korrekt geraten hat oder wenn er keine Züge mehr hat. Wenn das Spiel endet, sollte dem Spieler die Möglichkeit gegeben werden, von vorne zu beginnen.

Wenn wir uns diese Vorgabe ansehen, können wir als erstes beginnen, sie in einfache, umsetzbare Aufgaben zu zerlegen, so weit wie möglich aus einer Programmierersicht:

1. Eine Zufallszahl zwischen 1 und 100 generieren.
2. Die Rundenanzahl aufzeichnen, in der sich der Spieler befindet. Beginnen Sie mit 1.
3. Dem Spieler eine Möglichkeit bieten, zu erraten, welche Zahl es ist.
4. Nachdem ein Tipp abgegeben wurde, diesen irgendwo aufzeichnen, damit der Benutzer seine bisherigen Tipps sehen kann.
5. Dann prüfen, ob es die richtige Zahl ist.
6. Wenn es korrekt ist:

   1. Eine Glückwunschnachricht anzeigen.
   2. Den Spieler daran hindern, weitere Tipps abzugeben (dies würde das Spiel durcheinander bringen).
   3. Eine Steuerung zur Verfügung stellen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Züge hat:

   1. Dem Spieler mitteilen, dass er falsch liegt und ob sein Tipp zu hoch oder zu niedrig war.
   2. Erlauben, einen weiteren Tipp abzugeben.
   3. Die Rundenanzahl um 1 erhöhen.

8. Wenn es falsch ist und der Spieler keine Züge mehr hat:

   1. Dem Spieler mitteilen, dass das Spiel vorbei ist.
   2. Den Spieler daran hindern, weitere Tipps abzugeben (dies würde das Spiel durcheinander bringen).
   3. Eine Steuerung zur Verfügung stellen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, sicherstellen, dass die Spiellogik und das UI komplett zurückgesetzt sind, dann zurück zu Schritt 1 gehen.

Schauen wir uns nun an, wie wir diese Schritte in Code umsetzen können, das Beispiel aufbauen und JavaScript-Funktionen erkunden, während wir fortfahren.

### Erste Einrichtung

Um mit diesem Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie sie sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, einen Anweisungsabsatz und ein Formular zum Eingeben eines Tipps, aber das Formular wird momentan nichts tun.

Der Ort, an dem wir unseren gesamten Code hinzufügen werden, befindet sich innerhalb des {{htmlelement("script")}}-Elements am Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zum Speichern unserer Daten

Lassen Sie uns loslegen. Fügen Sie zuerst die folgenden Zeilen innerhalb Ihres {{htmlelement("script")}}-Elements hinzu:

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

In diesem Abschnitt des Codes werden die Variablen und Konstanten eingerichtet, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird.

Variablen sind im Grunde Namen für Werte (wie Zahlen oder Textzeichenfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let` gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert einmal gesetzt nicht ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente könnte sich ändern, aber jede Konstante referenziert immer dasselbe HTML-Element, das bei der Initialisierung festgelegt wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const` gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante einen Wert zuweisen, indem Sie ein Gleichheitszeichen (`=`) gefolgt von dem Wert, den Sie ihr geben möchten, verwenden.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird mit einer Zufallszahl zwischen 1 und 100 belegt, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten speichern jeweils eine Referenz auf die Ergebnis-Paragraphen in unserem HTML und werden verwendet, um später Werte in die Paragraphen einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>`-Elements befinden, das selbst später zum Zurücksetzen ausgewählt wird, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Referenzen auf das Text-Eingabefeld und den Absendeschalter des Formulars und werden verwendet, um das Einreichen des Tipps später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Tippanzahl von 1 (die verwendet wird, um zu verfolgen, wie viele Tipps der Spieler hatte) und eine Referenz auf einen Neustart-Knopf, der noch nicht existiert (aber später hinzugefügt wird).

> [!NOTE]
> Sie werden später im Kurs viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Informationen speichern, die Sie benötigen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables).

### Funktionen

Fügen Sie als Nächstes das folgende unter Ihrem vorherigen JavaScript hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, sodass Sie nicht immer wieder denselben Code schreiben müssen. Das ist wirklich nützlich. Es gibt eine Anzahl von Möglichkeiten, Funktionen zu definieren, aber für den Moment konzentrieren wir uns auf eine einfache Art. Hier haben wir eine Funktion mithilfe des Schlüsselworts `function`, gefolgt von einem Namen und in Klammern gesetzt, definiert. Danach setzen wir zwei geschweifte Klammern (`{ }`). In den geschweiften Klammern steht all der Code, den wir immer dann ausführen möchten, wenn wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Versuchen wir das jetzt. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nachdem Sie <kbd>Return</kbd>/<kbd>Enter</kbd> gedrückt haben, sollte ein Hinweis erscheinen, der `I am a placeholder` lautet; wir haben eine Funktion in unserem Code definiert, die eine Warnung ausgibt, wann immer wir sie aufrufen.

> [!NOTE]
> Sie werden später im Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions) viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren ermöglichen es uns, Tests durchzuführen, Rechnungen zu machen, Zeichenketten zu verbinden und Ähnliches.

Wenn Sie Ihren Code noch nicht gespeichert haben, tun Sie dies, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools). Dann können wir beginnen, die unten gezeigten Beispiele einzugeben — geben Sie jedes aus den "Example"-Spalten genau so ein, wie es angezeigt wird, und drücken Sie nach jedem <kbd>Return</kbd>/<kbd>Enter</kbd>, um zu sehen, welche Ergebnisse sie zurückgeben.

Lassen Sie uns zunächst die arithmetischen Operatoren ansehen, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige Kurzoperatoren, die so genannten [zusammengesetzten Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Wenn Sie beispielsweise eine neue Zahl zu einer bereits bestehenden hinzufügen und das Ergebnis zurückgeben möchten, könnten Sie dies so tun:

```js
let number1 = 1;
number1 += 2;
```

Das ist gleichbedeutend mit

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir echte/falsche Tests ausführen (zum Beispiel innerhalb von Bedingungssätzen — siehe [unten](#conditionals)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Beispiel</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>Strikte Gleichheit (ist es genau das Gleiche?)</td>
      <td>
        <pre class="brush: js">
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; Zahl versus Zeichenfolge
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>!==</code></td>
      <td>Ungleichheit (ist es nicht das gleiche?)</td>
      <td>
        <pre class="brush: js">
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; Zahl versus Zeichenfolge
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>&#x3C;</code></td>
      <td>Kleiner als</td>
      <td>
        <pre class="brush: js">
6 &#x3C; 10 // true
20 &#x3C; 10 // false</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>></code></td>
      <td>Größer als</td>
      <td>
        <pre class="brush: js">
6 > 10 // false
20 > 10 // true</pre
        >
      </td>
    </tr>
  </thead>
</table>

### Zeichenfolgen

Zeichenfolgen werden verwendet, um Text darzustellen. Wir haben bereits eine Zeichenfolgenvariable gesehen: Im folgenden Code ist `"I am a placeholder"` eine Zeichenfolge:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Anfang und das Ende einer einzelnen Zeichenfolgendeklaration verwenden: Sie können nicht `"I am a placeholder'` schreiben.

Sie können Zeichenfolgen auch mittels Backticks (`` ` ``) deklarieren. Zeichenfolgen, die so deklariert werden, werden _Template-String-Literale_ genannt und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in sie einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Zeichenfolgen zusammenzuführen.

### Conditionals

Zurück zu unserer Funktion `checkGuess()`, ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass sie einfach eine Platzhalternachricht ausgibt. Wir möchten, dass sie überprüft, ob der Rateversuch eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

Ersetzen Sie an dieser Stelle Ihre aktuelle Funktion `checkGuess()` durch diese Version:

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

Das ist eine Menge Code — phew! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er bewirkt.

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuell im Textfeld eingegebenen Wert. Wir führen diesen Wert auch durch den eingebauten `Number()`-Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als Nächstes stoßen wir auf unseren ersten Bedingungsblock. Ein Bedingungsblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Es sieht ein bisschen wie eine Funktion aus, ist es aber nicht. Die einfachste Form eines Bedingungsblocks beginnt mit dem Schlüsselwort `if`, danach kommen einige Klammern und dann geschweifte Klammern. Innerhalb der Klammern führen wir einen Test durch. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Ist das nicht der Fall, überspringen wir ihn und gehen zum nächsten Stück Code über. In diesem Fall überprüft der Test, ob die `guessCount`-Variable gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn es so ist, machen wir das Textinhalte der Schätzungsparagrafen gleich `Bisherige Schätzungen:`. Wenn nicht, tun wir das nicht.

- Als Nächstes verwenden wir ein Template-String-Literal, um den aktuellen `userGuess`-Wert an das Ende des Paragraphen `guesses` anzuhängen, mit einem Leerraum dazwischen.
- Der nächste Block führt einige Prüfungen durch:

  - Der erste `if (){ }`-Befehl überprüft, ob die Benutzersschätzung der am Anfang unseres JavaScripts gesetzten `randomNumber` entspricht. Wenn dies der Fall ist, hat der Spieler richtig geraten, und das Spiel ist gewonnen, dann zeigen wir dem Spieler eine Glückwunschnachricht mit einer hübschen grünen Farbe, leeren den Inhalt des Low/High-Informationskästchens und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen werden.
  - Nun haben wir einen weiteren Test an das Ende des letzten gehängt, indem wir eine `else if (){ }`-Struktur verwenden. Dieser überprüft, ob dies die letzte Runde des Benutzers ist. Falls ja, macht das Programm das Gleiche wie im vorherigen Block, außer dass eine Game-Over-Nachricht anstelle einer Glückwunschnachricht angezeigt wird.
  - Der letzte Block, der an das Ende dieses Codes angehängt ist (das `else { }`), enthält den Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests wahr ist (d.h. der Spieler hat nicht richtig geraten, hat aber noch weitere Schätzungen übrig). In diesem Fall teilen wir ihm mit, dass er falsch liegt, und führen dann einen weiteren geschweiften Klammerblock für den nächsten Test durch, um zu prüfen, ob der Tipp höher oder niedriger als die Antwort war, und zeigen eine weitere Nachricht an, die besagt, höher oder niedriger.

- Die letzten drei Zeilen in der Funktion bereiten uns auf die nächste Tippabgabe vor. Wir addieren 1 zur `guessCount`-Variablen, damit der Spieler seinen Versuch nutzt (`++` ist ein Inkrementierungsoperator — erhöhen um 1), und leeren den Wert des Texteingabeformulars und fokussieren es erneut, bereit für die nächste Tippabgabe.

### Ereignisse

An dieser Stelle haben wir eine schön implementierte Funktion `checkGuess()`, aber sie wird nichts tun, da wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn der "Tipp abgeben"-Knopf gedrückt wird, und dafür müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Knopfdruck, eine Seite wird geladen, ein Video wird abgespielt usw. — bei denen wir Codeblöcke ausführen können. **Ereignis-Listener** beobachten spezifische Ereignisse und rufen **Ereignis-Handler** auf, bei denen es sich um Codeblöcke handelt, die als Antwort auf ein Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer Funktion `checkGuess()` hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit`-Knopf einen Ereignis-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (sogenannte _Argumente_) annimmt — die Art des Ereignisses, das wir beobachten (in diesem Fall `click`) als Zeichenfolge und den Code, den wir ausführen möchten, wenn das Ereignis eintritt (in diesem Fall die Funktion `checkGuess()`). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie, Ihren Code jetzt zu speichern und zu aktualisieren, und Ihr Beispiel sollte — bis zu einem Punkt — funktionieren. Das einzige Problem besteht jetzt darin, dass, wenn Sie die richtige Antwort erraten oder die Versuche aufgebraucht sind, das Spiel Abstürzen wird, da wir die Funktion `setGameOver()` noch nicht definiert haben, die nach dem Abschluss des Spiels ausgeführt werden soll. Lassen Sie uns nun unseren fehlenden Code hinzufügen und die Funktionsweise des Beispiels vervollständigen.

### Der Spiel-Logik den letzten Schliff geben

Fügen Sie die Funktion `setGameOver()` an den unteren Rand Ihres Codes hinzu, und dann gehen wir sie durch. Fügen Sie diesen Code jetzt unterhalb Ihres restlichen JavaScripts hinzu:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- Die ersten beiden Zeilen deaktivieren das Texteingabefeld und den Knopf, indem sie ihre Eigenschaft deaktivieren, indem sie `true` setzen. Das ist notwendig, denn wenn wir das nicht täten, könnte der Benutzer weitere Tipps nach Spielabschluss abgeben, was zu Problemen führen würde.
- Die nächsten drei Zeilen generieren ein neues {{htmlelement("button")}}-Element, setzen dessen Textformulierung auf "Neues Spiel starten" und fügen es an das Ende unseres bestehenden HTML hinzu.
- Die letzte Zeile setzt einen Ereignis-Listener auf unseren neuen Knopf, sodass bei einem Klick eine Funktion namens `resetGame()` ausgeführt wird.

Nun müssen wir diese Funktion auch definieren! Fügen Sie den folgenden Code wiederum an das Ende Ihres JavaScripts hinzu:

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

Dieser recht lange Codeblock setzt alles vollständig auf den Stand am Spielbeginn zurück, sodass der Spieler eine weitere Chance hat. Es:

- Setzt die `guessCount` zurück auf 1.
- Entfernt allen Text aus den Informationsparagraphen. Wir wählen alle Paragraphen innerhalb `<div class="resultParas"></div>` aus, dann durchlaufen wir jeden und setzen ihren `textContent` auf `''` (eine leere Zeichenfolge).
- Entfernt den Reset-Knopf aus unserem Code.
- Aktiviert die Formularelemente und leert sowie fokussiert das Textfeld, bereit für einen neuen Tipp.
- Entfernt die Hintergrundfarbe des `lastResult`-Paragraphs.
- Generiert eine neue Zufallszahl, sodass Sie nicht einfach noch einmal dieselbe Zahl erraten!

**An diesem Punkt sollten Sie ein voll funktionsfähiges (einfaches) Spiel haben — herzlichen Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, einige weitere wichtige Code-Funktionen zu besprechen, die Sie bereits gesehen haben, auch wenn Sie es vielleicht nicht bemerkt haben.

### Schleifen

Ein Teil des obigen Codes, den wir uns detaillierter ansehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, mit dem Sie einen Codeabschnitt immer wieder ausführen können, bis eine bestimmte Bedingung erfüllt ist.

Beginnen Sie damit, Ihre [JavaScript-Konsole der Browserentwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) wieder zu öffnen und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Dies liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array. Wir werden in diesem Modul durch ein vollständiges Arrays-Tutorial gehen, aber jetzt: Ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of`-Schleife gibt Ihnen die Möglichkeit, jedes Element im Array zu erhalten und einige JavaScript-Befehle darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Nimm das erste Element in `fruits`.
2. Setze die Variable `fruit` auf dieses Element, und führe den Code zwischen den `{}`-Geschweiften Klammern aus.
3. Nimm das nächste Element in `fruits` und wiederhole Schritt 2, bis du das Ende von `fruits` erreicht hast.

In diesem Fall gibt der Code innerhalb der geschweiften Klammern `fruit` in die Konsole aus.

Jetzt schauen wir uns die Schleife in unserem Zahlenratespiel an — das Folgende ist in der Funktion `resetGame()` zu finden:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Paragraphen innerhalb `<div class="resultParas">` enthält, mithilfe der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)-Methode, anschließend durchläuft sie jedes einzelne und entfernt den Textinhalt.

Beachten Sie, dass selbst wenn `resetPara` eine Konstante ist, wir dessen innere Eigenschaften wie `textContent` ändern können.

### Eine kleine Diskussion über Objekte

Lassen Sie uns noch eine weitere grundlegende Verbesserung vornehmen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile direkt unter der Zeile `let resetButton;` nahe dem oberen Rand Ihres JavaScripts hinzu und speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um den Textcursor automatisch in das {{htmlelement("input")}} Textfeld zu setzen, sobald die Seite geladen wird. Das bedeutet, dass der Benutzer sofort anfangen kann, seinen ersten Tipp einzugeben, ohne das Eingabefeld erst anklicken zu müssen. Es ist nur eine kleine Ergänzung, aber sie verbessert die Benutzerfreundlichkeit — indem sie dem Benutzer einen guten visuellen Hinweis darauf gibt, was er tun muss, um das Spiel zu spielen.

Lassen Sie uns da ein bisschen tiefer graben. In JavaScript sind die meisten der Elemente, die Sie in Ihrem Code manipulieren, Objekte. Ein Objekt ist eine Sammlung verwandter Funktionalitäten, die in einem einzigen Paket gespeichert sind. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten und wir werden es erst viel später im Kurs abdecken. Für den Anfang besprechen wir nur die in Ihrem Browser vorhandenen eingebauten Objekte, die Ihnen viele nützliche Dinge ermöglichen.

In diesem Fall haben wir zuerst eine `guessField`-Konstante erstellt, die eine Referenz auf das Texteintragsfeld in unserem HTML speichert — die folgende Zeile befindet sich unter unseren Deklarationen nahe dem oberen Rand des Codes:

```js
const guessField = document.querySelector(".guessField");
```

Um diese Referenz zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode des [`document`](/de/docs/Web/API/Document)-Objekts verwendet. `querySelector()` nimmt ein Stück Information — einen [CSS Selector](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), der das Element auswählt, auf das Sie eine Referenz haben möchten.

Da `guessField` nun eine Referenz auf ein {{htmlelement("input")}}-Element enthält, hat es nun Zugriff auf eine Reihe von Eigenschaften (grundsätzlich in Objekten gespeicherte Variablen, von denen einige nicht veränderbar sind) und Methoden (im Wesentlichen in Objekten gespeicherte Funktionen). Eine Methode, die Eingabeelementen zur Verfügung steht, ist `focus()`, sodass wir jetzt diese Zeile verwenden können, um den Textcursor in das Textfeld zu setzen:

```js
guessField.focus();
```

Variablen, die keine Referenzen auf Formularelemente enthalten, haben `focus()` nicht zur Verfügung. Beispiel: Die Konstante `guesses` enthält eine Referenz auf ein {{htmlelement("p")}}-Element, und die Variable `guessCount` enthält eine Zahl.

### Spielen mit Browser-Objekten

Lassen Sie uns ein wenig mit Browser-Objekten spielen.

1. Öffnen Sie zunächst Ihr Programm im Browser.
2. Öffnen Sie als nächstes Ihre [Developer-Tools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass der Reiter des JavaScript-Konsolentabs geöffnet ist.
3. Tippen Sie `guessField` in die Konsole ein und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}}-Element enthält. Sie werden auch bemerken, dass die Konsole die Namen von Objekten, die in der Ausführungsumgebung existieren, einschließlich Ihrer Variablen, vervollständigt!
4. Geben Sie jetzt Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value`-Eigenschaft repräsentiert den momentan in das Textfeld eingegebenen Wert. Sie werden sehen, dass wir durch die Eingabe dieses Befehls den Text im Textfeld geändert haben!

5. Nun geben Sie `guesses` in die Konsole ein und drücken <kbd>Enter</kbd> (oder <kbd>Return</kbd>, abhängig von Ihrer Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}}-Element enthält.
6. Geben Sie nun die folgende Zeile ein:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, weil Paragraphen die `value`-Eigenschaft nicht haben.

7. Um den Text innerhalb eines Paragraphen zu ändern, benötigen Sie stattdessen die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Versuchen Sie dies:

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. Jetzt zu einem bisschen Spaß. Versuchen Sie, die folgenden Zeilen, eine nach der anderen, einzufügen:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite hat eine `style`-Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle Inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dies ermöglicht es uns, mit JavaScript dynamisch neue CSS-Stile auf Elemente anzuwenden.

## Zusammenfassung

Das war’s also für den Bau des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Probieren Sie Ihren fertigen Code aus oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihre Version des Beispiels nicht zum Laufen bringen können, überprüfen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Der nächste Artikel könnte auch helfen — darin werden wir darüber reden, was beim Schreiben von JavaScript-Code schiefgehen kann, wobei wir auf das "Rate die Zahl"-Spiel Bezug nehmen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
