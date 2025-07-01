---
title: Ein erster Einstieg in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Jetzt, da Sie etwas über die Theorie von JavaScript gelernt haben und was Sie damit machen können, möchten wir Ihnen eine Vorstellung davon geben, wie der Prozess der Erstellung eines einfachen JavaScript-Programms aussieht. Dazu führen wir Sie durch ein praktisches Tutorial. Dabei bauen Sie Schritt für Schritt ein einfaches "Errate die Zahl"-Spiel auf.

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
          <li>Erfahrung, wie es ist, JavaScript zu schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier klare Erwartungen setzen: Sie müssen nicht erwarten, JavaScript bis zum Ende dieses Artikels zu lernen oder sogar den gesamten Code zu verstehen, den wir Sie schreiben lassen. Stattdessen wollen wir Ihnen einen Eindruck davon vermitteln, wie die Funktionen von JavaScript zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In den folgenden Artikeln werden Sie auf alle hier gezeigten Funktionen in viel detaillierterer Weise zurückkommen, also keine Sorge, wenn Sie nicht sofort alles verstehen!

> [!NOTE]
> Viele der Codefunktionen, die Sie in JavaScript sehen werden, sind die gleichen wie in anderen Programmiersprachen – Funktionen, Schleifen, usw. Die Syntax sieht unterschiedlich aus, aber die Konzepte sind weitgehend die gleichen.

## Einführung in unser Beispiel "Zahlenratespiel"

In diesem Artikel zeigen wir Ihnen, wie Sie das Spiel aufbauen können, das Sie unten sehen:

```html hidden live-sample___guess-the-number
<h1>Number guessing game</h1>

<p>
  We have selected a random number between 1 and 100. See if you can guess it in
  10 turns or fewer. We'll tell you if your guess was too high or too low.
</p>

<div class="form">
  <label for="guessField">Enter a guess: </label>
  <input
    type="number"
    min="1"
    max="100"
    required
    id="guessField"
    class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
</div>

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>
```

```css hidden live-sample___guess-the-number
html {
  font-family: sans-serif;
}

body {
  width: 50%;
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
}

.form input[type="number"] {
  width: 200px;
}

.lastResult {
  color: white;
  padding: 3px;
}
```

```js hidden live-sample___guess-the-number
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
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

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

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

{{EmbedLiveSample("guess-the-number", "100%", 300)}}

Probieren Sie es aus — lernen Sie das Spiel kennen, bevor Sie weitermachen.

## Denken wie ein Programmierer

Eine der schwierigsten Dinge beim Programmieren ist nicht die Syntax, die man lernen muss, sondern wie man sie anwendet, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken – dies beinhaltet normalerweise das Betrachten von Beschreibungen dessen, was Ihr Programm tun muss, das Ermitteln, welche Codefunktionen benötigt werden, um diese Dinge zu erreichen, und wie man sie zusammenarbeiten lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung – plus ein bisschen Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierergehirn" entwickeln werden, aber wir geben Ihnen hier und im restlichen Kurs viele Gelegenheiten, das Denken wie ein Programmierer zu üben.

## Das anfängliche Designbriefing

Stellen wir uns vor, Ihr Chef hat Ihnen das folgende Briefing für die Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "Errate die Zahl"-Spiel erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Zügen zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt und, wenn er falsch liegt, ob die Vermutung zu niedrig oder zu hoch war. Es sollte dem Spieler auch mitteilen, welche Zahlen er bereits geraten hat. Das Spiel endet, sobald der Spieler richtig geraten hat oder ihm die Züge ausgehen. Wenn das Spiel endet, sollte der Spieler die Möglichkeit haben, erneut zu spielen.

Beim Betrachten dieses Briefings können wir als erstes anfangen, es in einfache umsetzbare Aufgaben zu zerlegen, so programmerisch wie möglich:

1. Generieren Sie eine Zufallszahl zwischen 1 und 100.
2. Notieren Sie die Zugnummer, bei der der Spieler ist. Beginnen Sie mit 1.
3. Bieten Sie dem Spieler eine Möglichkeit, die Zahl zu erraten.
4. Sobald eine Vermutung eingereicht wurde, notieren Sie sie zuerst irgendwo, damit der Nutzer seine vorherigen Vermutungen sehen kann.
5. Prüfen Sie als Nächstes, ob es die richtige Zahl ist.
6. Wenn sie korrekt ist:
   1. Zeigen Sie eine Glückwunschnachricht an.
   2. Verhindern Sie, dass der Spieler weitere Vermutungen eingibt (das würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die es dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn sie falsch ist und der Spieler noch Züge hat:
   1. Teilen Sie dem Spieler mit, dass er falsch liegt und ob seine Vermutung zu hoch oder zu niedrig war.
   2. Lassen Sie ihn eine weitere Vermutung eingeben.
   3. Erhöhen Sie die Zugnummer um 1.

8. Wenn sie falsch ist und der Spieler keine Züge mehr hat:
   1. Teilen Sie dem Spieler mit, dass das Spiel vorbei ist.
   2. Verhindern Sie, dass der Spieler weitere Vermutungen eingibt (das würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die es dem Spieler ermöglicht, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, stellen Sie sicher, dass die Spiellogik und das UI vollständig zurückgesetzt sind, und kehren Sie dann zu Schritt 1 zurück.

Lassen Sie uns nun vorwärts gehen und schauen, wie wir diese Schritte in Code umwandeln können, wobei wir das Beispiel aufbauen und JavaScript-Funktionen erkunden, während wir weitermachen.

## Erste Einrichtung

Um dieses Tutorial zu beginnen, möchten wir, dass Sie mit Ihrem Code-Editor eine lokale Kopie des folgenden Codes in einer neuen HTML-Datei erstellen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>
      We have selected a random number between 1 and 100. See if you can guess
      it in 10 turns or fewer. We'll tell you if your guess was too high or too
      low.
    </p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="Submit guess" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // Your JavaScript goes here
    </script>
  </body>
</html>
```

Halten Sie es in Ihrem Texteditor geöffnet und öffnen Sie es außerdem in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, Anweisungen und ein Formular zur Eingabe einer Vermutung, aber das Formular wird im Moment nichts tun.

Sie fügen all Ihren JavaScript-Code innerhalb des {{htmlelement("script")}}-Elements am unteren Rand des HTMLs hinzu:

```html
<script>
  // Your JavaScript goes here
</script>
```

## Hinzufügen von Variablen zum Speichern unserer Daten

Lassen Sie uns beginnen. Fügen Sie zuerst die folgenden Zeilen innerhalb Ihres {{htmlelement("script")}}-Elements hinzu:

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

Dieser Abschnitt des Codes richtet die Variablen (und Konstanten) ein, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird.

Variablen sind im Grunde Namen für Werte (wie Zahlen oder Textketten). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden auch verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nicht ändern, sobald er festgelegt ist. In diesem Fall verwenden wir Konstanten, um Verweise auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente könnte sich ändern, aber jede Konstante verweist immer auf das gleiche HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante einen Wert zuweisen, indem Sie ein Gleichheitszeichen (`=`) gefolgt von dem Wert, den Sie ihm geben möchten, verwenden.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird eine Zufallszahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten speichern jeweils einen Verweis auf die Ergebnisabsätze in unserem HTML und werden später im Code verwendet, um Werte in die Absätze einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>`-Elements befinden, das selbst verwendet wird, um alle drei später zurückzusetzen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Verweise auf den Texteingabe- und Sende-Button des Formulars und werden verwendet, um später die Eingabe der Vermutung zu verarbeiten.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern die Anzahl der Vermutungen (anfangs 1), die der Spieler hatte, und einen Verweis auf einen Zurücksetzen-Button, den es noch nicht gibt (aber später geben wird).

## Funktionen

Fügen Sie als Nächstes das Folgende unter Ihrem vorherigen JavaScript hinzu:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch Sie vermeiden, denselben Code immer und immer wiederholen zu müssen. Es gibt mehrere Möglichkeiten, Funktionen zu definieren, aber wir konzentrieren uns jetzt auf eine einfache Art. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` gefolgt von einem Namen verwendet haben, mit danach angefügten Klammern. Anschließend setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern geht all der Code, den wir immer dann ausführen möchten, wenn wir die Funktion aufrufen.

Wenn wir den Code ausführen wollen, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Probieren wir das jetzt. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollten Sie `I am a placeholder` in der Konsole sehen; wir haben eine Funktion in unserem Code definiert, die eine Platzhalternachricht ausgibt, wann immer wir sie aufrufen.

## Textketten

Textketten werden zur Darstellung von Text verwendet. Wir haben bereits eine String-Variable gesehen: im folgenden Code ist `"I am a placeholder"` eine Zeichenkette:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Sie können Strings entweder mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen die gleiche Form für den Anfang und das Ende einer einzigen String-Deklaration verwenden: Sie können nicht aus `"I am a placeholder'` schreiben.

Sie können Strings auch mit Backticks (`` ` ``) deklarieren. Strings, die so deklariert sind, werden _template literals_ genannt und haben einige spezielle Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in ihnen einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Strings zusammenzufügen.

## Bedingte Anweisungen

**Bedingte** Codeblöcke ermöglichen es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Sie sehen ein bisschen aus wie eine Funktion, aber sie sind anders. Lassen Sie uns bedingte Anweisungen erkunden, indem wir unserem Beispiel etwas hinzufügen.

Ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass unsere `checkGuess()`-Funktion einfach eine Platzhalternachricht ausgibt. Wir wollen, dass sie überprüft, ob die Vermutung eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

Ersetzen Sie an diesem Punkt Ihre aktuelle `checkGuess()`-Funktion durch diese Version:

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

Das ist eine Menge Code — puh! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Konstante namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Textfeld eingegeben wurde. Wir führen diesen Wert auch durch den eingebauten `Number()`-Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist.
- Als nächstes stoßen wir auf unseren ersten bedingten Codeblock. Der einfachste bedingte Block beginnt mit dem Schlüsselwort `if`, dann einigen Klammern, dann einigen geschweiften Klammern. Innerhalb der Klammern führen wir einen Test durch. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir dies nicht und gehen zum nächsten Code über. In diesem Fall testen wir, ob die Variable `guessCount` gleich `1` ist (das heißt, ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Falls dies der Fall ist, setzen wir den Textinhalt des Guesses-Absatzes gleich auf `Previous guesses:`. Falls nicht, tun wir es nicht.

- Als Nächstes verwenden wir ein Template Literal, um den aktuellen `userGuess`-Wert an das Ende des Guesses-Absatzes mit einem Leerzeichen dazwischen anzuhängen.
- Der nächste Block führt einige Überprüfungen durch:
  - Die erste `if (){ }` überprüft, ob die Benutzervermutung gleich der `randomNumber` ist, die oben in unserem JavaScript gesetzt wurde. Falls dies der Fall ist, hat der Spieler korrekt geraten und das Spiel ist gewonnen, also zeigen wir dem Spieler eine Glückwunschnachricht an, die mit einer schönen grünen Farbe versehen ist, löschen den Inhalt des Hoch/Tief-Rateschafts-Informationskästchens und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen werden.
  - Jetzt haben wir einen anderen Test ans Ende des letzten mit einer `else if (){ }`-Struktur angehängt. Dieser testet, ob dieser Zug der letzte des Benutzers ist. Falls dies der Fall ist, macht das Programm dasselbe wie im vorherigen Block, außer dass es eine Game Over-Nachricht anzeigt anstelle einer Glückwunschnachricht.
  - Der letzte Block, der am Ende dieses Codes angehängt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests `true` zurückgibt (der Spieler hat falsch geraten, aber er hat noch Züge übrig). In diesem Fall informieren wir den Spieler, dass er falsch liegt, dann führen wir einen weiteren bedingten Test durch, um zu überprüfen, ob die Vermutung höher oder niedriger als die Antwort war, und zeigen eine weitere Nachricht an, die ihm entsprechend mitteilt, höher oder niedriger.

- Die letzten drei Zeilen in der Funktion machen uns bereit für die nächste abzugebende Vermutung. Wir zählen zu der `guessCount`-Variablen eins hinzu, sodass der Spieler seinen Zug verbraucht (`++` ist eine inkrementelle Operation – Erhöhung um 1) und leeren den Wert des Formulartestfeldes, konzentrieren es wieder und machen es bereit für die Eingabe der nächsten Vermutung.

## Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise wollen wir sie aufrufen, wenn der "Submit guess"-Button gedrückt wird, und dafür müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren – ein Button, der geklickt wird, eine Seite, die geladen wird, ein Video, das gespielt wird usw. – als Antwort darauf können wir Codeblöcke ausführen. **Ereignis-Listener** beobachten bestimmte Ereignisse und rufen **Ereignishandlerfunktionen** auf, die als Antwort auf das Auslösen eines Ereignisses ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit`-Button einen Event-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) annimmt – den Typ des Ereignisses, auf das wir lauschen (in diesem Fall `click`) als String, und die Funktion, die wir ausführen wollen, wenn das Ereignis auftritt (in diesem Fall `checkGuess()`). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie jetzt, Ihren Code zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem Punkt. Das einzige Problem jetzt ist, dass, wenn Sie die korrekte Antwort raten oder die Züge ausgehen, das Spiel fehlerhaft wird, weil wir die Funktion `setGameOver()`, die ausgeführt werden soll, sobald das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns jetzt unseren fehlenden Code hinzufügen und die Beispiel-Funktionalität vervollständigen.

## Fertigstellung der Spielfunktionalität

Lassen Sie uns die `setGameOver()`-Funktion am Ende unseres Codes hinzufügen und dann durchgehen. Fügen Sie dies jetzt unten im Rest Ihres JavaScripts hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Text-Eingabefeld und den Button, indem sie ihre `disabled`-Eigenschaften auf `true` setzen. Dies ist notwendig, da der Benutzer, wenn wir dies nicht tun würden, mehr Vermutungen abgeben könnte, nachdem das Spiel vorbei ist, was die Dinge durcheinanderbringen würde.
- Die nächsten drei Zeilen generieren ein neues {{htmlelement("button")}}-Element, setzen dessen Textlabel auf "Neues Spiel starten" und fügen es am Ende unseres vorhandenen HTMLs hinzu.
- Die letzte Zeile setzt ein Ereignis-Listener auf unseren neuen Button, so dass, wenn er geklickt wird, eine Funktion namens `resetGame()` ausgeführt wird.

Lassen Sie uns nun auch `resetGame()` definieren! Fügen Sie den folgenden Code ebenfalls am Ende Ihres JavaScripts hinzu:

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

Dieser recht lange Codeblock setzt alles vollständig auf den Anfang des Spiels zurück, so dass der Spieler einen weiteren Versuch haben kann.

Konkret:

- Setzt die `guessCount`-Variable zurück auf 1.
- Leert den gesamten Text der Informationsparagrafen. Wir wählen alle Absätze innerhalb von `<div class="resultParas"></div>` aus und durchlaufen dann jeden einzelnen, setzen deren `textContent` auf `""` (eine leere Zeichenkette).
- Entfernt den Zurücksetzen-Button aus unserem Code.
- Reaktiviert die Formularelemente und leert und fokussiert das Textfeld, bereit für einen neuen Versuch.
- Entfernt die Hintergrundfarbe des `lastResult`-Paragrafen.
- Generiert eine neue Zufallszahl, so dass Sie nicht nur dieselbe Zahl erneut raten müssen!

**An diesem Punkt sollten Sie ein vollständig funktionierendes Spiel haben — Gratulation!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, über ein paar andere wichtige Codefunktionen zu sprechen, die Sie bereits gesehen haben, obwohl Sie es vielleicht noch nicht realisiert haben.

## Schleifen

Oben haben wir **Schleifen** erwähnt, ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Lassen Sie uns ein einfaches Beispiel erkunden, um Ihnen zu zeigen, was das bedeutet. Gehen Sie erneut zu den [JavaScript-Entwicklertools Ihres Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), fügen Sie den folgenden Code in diese ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenketten `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Dies ist aufgrund der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array, das eine Sammlung von Werten (in diesem Fall Strings) enthält.

Wir verwenden dann eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um jedes Element im Array zu bekommen und etwas JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie den ersten Wert in `fruits` und speichern Sie ihn in einer Variablen namens `fruit`.
2. Führen Sie den Code zwischen den `{}`-geschweiften Klammern aus (der in diesem Fall den `fruit`-Wert in die Konsole druckt).
3. Speichern Sie den nächsten Array-Wert in `fruit` und wiederholen Sie Punkt 2, bis Sie das Ende des `fruits`-Arrays erreicht haben.

Nun wollen wir uns die Schleife in unserem Zahlenratespiel anschauen – das Folgende findet sich in der `resetGame()`-Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb von `<div class="resultParas">` mit der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)-Methode enthält, und dann durchläuft er jeden einzelnen, löscht den Textinhalt eines jeden.

Beachten Sie, dass obwohl `resetPara` eine Konstante ist, wir dessen interne Eigenschaften wie `textContent` ändern können.

## Zusammenfassung

Das war also alles, um das Beispiel zu erstellen. Sie sind bis zum Ende gekommen — gut gemacht! Probieren Sie Ihren endgültigen Code aus oder [spielen Sie hier mit unserer fertigen Version](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihr Beispiel nicht zum Laufen bekommen, vergleichen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion kann auch helfen — darin diskutieren wir, was beim Schreiben von JavaScript-Code schiefgehen kann und beziehen uns dabei auf das "Errate die Zahl"-Spiel.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
