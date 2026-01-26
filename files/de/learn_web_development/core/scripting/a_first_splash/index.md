---
title: Ein erster Einblick in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 4fa9407fe174a12ecdc50b680560b16021300bc1
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Nachdem Sie nun einige Theorien über JavaScript und dessen Möglichkeiten kennengelernt haben, werden wir Sie durch ein praktisches Tutorial führen, damit Sie sehen, wie man ein einfaches JavaScript-Programm erstellt. Hier werden Sie Schritt für Schritt ein einfaches "Rate die Zahl"-Spiel entwickeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Denken wie ein Programmierer.</li>
          <li>Erfahrung, wie es ist, JavaScript zu schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Beginnend mit [Schreiben Sie Ihre erste JavaScript-Variable](https://scrimba.com/learn-javascript-c0v/~04?via=mdn), bietet Scrimba<sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> nützliche interaktive Lektionen, die Sie durch die Grundlagen von JavaScript führen.

Wir möchten hier ganz klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels gelernt haben oder sogar allen Code verstehen, den wir Sie bitten, zu schreiben. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie JavaScripts Funktionen zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In den folgenden Artikeln werden Sie alle hier gezeigten Funktionen viel detaillierter wiederholen, also machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen, sind die gleichen wie in anderen Programmiersprachen — Funktionen, Schleifen usw. Die Codesyntax sieht anders aus, aber die Konzepte sind weitgehend die gleichen.

## Einführung unseres Beispiels "Zahlraten-Spiel"

In diesem Artikel zeigen wir Ihnen, wie Sie das folgende Spiel aufbauen können:

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

Probieren Sie es aus — machen Sie sich mit dem Spiel vertraut, bevor Sie fortfahren.

## Denken wie ein Programmierer

Eine der schwierigsten Fähigkeiten, die es zu erlernen gilt, ist nicht die Syntax, die Sie erlernen müssen, sondern wie Sie sie anwenden, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — das bedeutet im Allgemeinen, Beschreibungen dessen, was Ihr Programm tun muss, zu betrachten, herauszufinden, welche Code-Funktionen benötigt werden, um diese Dinge zu erreichen, und wie sie zusammenarbeiten können.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — plus ein wenig Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln, aber wir werden Ihnen hier und im restlichen Kurs viele Gelegenheiten geben, das Denken wie ein Programmierer zu üben.

## Der erste Entwurf

Stellen Sie sich vor, Ihr Chef hat Ihnen folgendes Briefing zur Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "Rate die Zahl"-Spiel erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Zügen zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt, und wenn er falsch liegt, ob die Vermutung zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig liegt oder keine Züge mehr hat. Wenn das Spiel endet, sollte der Spieler die Möglichkeit haben, wieder zu spielen.

Beim Durchlesen dieses Briefings können wir als erstes damit beginnen, es in einfache, umsetzbare Aufgaben zu unterteilen, so weit wie möglich aus einem Programmier-Denken heraus:

1. Eine Zufallszahl zwischen 1 und 100 generieren.
2. Die Zugnummer aufzeichnen, bei der sich der Spieler befindet. Beginnen Sie bei 1.
3. Dem Spieler eine Möglichkeit geben, zu erraten, welche Zahl es ist.
4. Sobald ein Tipp abgegeben wurde, zeichnen Sie ihn zuerst irgendwo auf, damit der Benutzer seine vorherigen Tipps sehen kann.
5. Überprüfen Sie anschließend, ob es die richtige Zahl ist.
6. Wenn es richtig ist:
   1. Anzeige einer Glückwunschnachricht.
   2. Den Spieler davon abhalten, weitere Tipps abzugeben (dies würde das Spiel durcheinander bringen).
   3. Kontrolle anzeigen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Züge hat:
   1. Sagen Sie dem Spieler, dass er falsch liegt, und ob sein Tipp zu hoch oder zu niedrig war.
   2. Ermöglichen Sie ihm, einen weiteren Tipp abzugeben.
   3. Die Zugnummer um 1 erhöhen.

8. Wenn es falsch ist und der Spieler keine Züge mehr hat:
   1. Sagen Sie dem Spieler, dass das Spiel vorbei ist.
   2. Den Spieler davon abhalten, weitere Tipps abzugeben (dies würde das Spiel durcheinander bringen).
   3. Kontrolle anzeigen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, stellen Sie sicher, dass die Spiel-Logik und das UI vollständig zurückgesetzt werden, und gehen Sie zurück zu Schritt 1.

Schauen wir uns nun an, wie wir diese Schritte in Code umsetzen können, das Beispiel aufbauen und JavaScript-Funktionen dabei erkunden.

## Erste Einrichtung

Um mit diesem Tutorial zu beginnen, möchten wir, dass Sie mit Ihrem Code-Editor eine lokale Kopie des folgenden Codes in einer neuen HTML-Datei erstellen.

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

Lassen Sie es in Ihrem Texteditor geöffnet und öffnen Sie es auch in Ihrem Webbrowser. Derzeit sehen Sie eine einfache Überschrift, einen Absatz mit Anweisungen und ein Formular zur Eingabe eines Tipps, aber das Formular wird derzeit nichts tun.

Sie fügen Ihren gesamten JavaScript-Code innerhalb des {{htmlelement("script")}}-Elements am unteren Rand des HTMLs hinzu:

```html
<script>
  // Your JavaScript goes here
</script>
```

## Hinzufügen von Variablen zur Speicherung unserer Daten

Lassen Sie uns beginnen. Fügen Sie zunächst die folgenden Zeilen in Ihr {{htmlelement("script")}}-Element ein:

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

Variablen sind im Wesentlichen Namen für Werte (wie Zahlen oder Textstrings). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls verwendet, um Werte zu benennen, jedoch im Gegensatz zu Variablen können Sie den Wert nach der Setzung nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente kann sich ändern, aber jede Konstante verweist immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante mit einem Gleichheitszeichen (`=`) gefolgt von dem Wert, den Sie ihr zuweisen möchten, einen Wert zuweisen.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird mit einer Zufallszahl zwischen 1 und 100 zugewiesen, berechnet mit einem mathematischen Algorithmus.
- Die ersten drei Konstanten werden jeweils erstellt, um eine Referenz auf die Ergebnisabsätze in unserem HTML zu speichern, und sie werden verwendet, um später im Code Werte in die Absätze einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>`-Elements befinden, das seinerseits verwendet wird, um alle drei später zum Zurücksetzen auszuwählen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten zwei Konstanten speichern Referenzen auf das Texteingabefeld des Formulars und die Schaltfläche „Senden“ und werden verwendet, um später die Eingabe des Tipps zu bearbeiten.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten zwei Variablen speichern eine Tippanzahl von 1 (wird verwendet, um zu verfolgen, wie viele Tipps der Spieler abgegeben hat) und eine Referenz auf eine Rücksetztaste, die noch nicht existiert (aber später).

## Funktionen

Fügen Sie als nächstes das folgende unter Ihrem vorherigen JavaScript hinzu:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch Sie das wiederholte Schreiben von Code vermeiden. Es gibt mehrere Möglichkeiten, Funktionen zu definieren, aber vorerst konzentrieren wir uns auf einen einfachen Typ. Hier haben wir eine Funktion mit dem Schlüsselwort `function` definiert, gefolgt von einem Namen, mit nachgestellten Klammern. Danach setzen wir zwei geschweifte Klammern (`{ }`). In die geschweiften Klammern kommt all der Code, den wir beim Aufrufen der Funktion ausführen möchten.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion, gefolgt von den Klammern, ein.

Versuchen wir das jetzt. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollte `I am a placeholder` in der Konsole protokolliert werden; wir haben eine Funktion in unserem Code definiert, die eine Platzhalternachricht immer dann ausgibt, wenn wir sie aufrufen.

## Textstrings

Strings werden verwendet, um Text darzustellen. Wir haben bereits eine String-Variable gesehen: In folgendem Code ist `"I am a placeholder"` ein String:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Sie können Strings mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Anfang und das Ende einer einzigen String-Deklaration verwenden: Sie können nicht `"I am a placeholder'` schreiben.

Sie können auch Strings mit Backticks (`` ` ``) deklarieren. Strings, die so deklariert sind, werden _Template-Literale_ genannt und haben einige spezielle Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in sie einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Strings zusammenzufügen.

## Konditionale

**Konditionale** Codeblöcke ermöglichen es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr oder falsch ist. Sie sehen ein bisschen aus wie eine Funktion, sind jedoch unterschiedlich. Lassen Sie uns konditionale Codeblöcke erkunden, indem wir unser Beispiel erweitern.

Ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass unsere Funktion `checkGuess()` nur eine Platzhalternachricht ausgibt. Wir möchten, dass sie überprüft, ob ein Tipp eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

Ersetzen Sie an dieser Stelle Ihre aktuelle `checkGuess()`-Funktion durch diese Version:

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

Das ist eine Menge Code — puuh! Lassen Sie uns durch jeden Abschnitt gehen und erklären, was er tut.

- Die erste Zeile deklariert eine Konstante namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Textfeld eingegeben wurde. Wir führen diesen Wert auch durch den eingebauten `Number()`-Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist.
- Als Nächstes stoßen wir auf unseren ersten konditionalen Codeblock. Der einfachste Form eines konditionalen Blocks beginnt mit dem Schlüsselwort `if`, dann ein paar Klammern und dann ein paar geschweifte Klammern. In die Klammern fügen wir einen Test ein. Wenn der Test `true` ergibt, führen wir den Code in den geschweiften Klammern aus. Wenn nicht, tun wir das nicht und fahren mit dem nächsten Code fort. In diesem Fall prüfen wir, ob die Variable `guessCount` gleich `1` ist (das heißt, ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn ja, setzen wir den Textinhalt des Guesses-Absatzes auf `Previous guesses:`. Wenn nicht, tun wir das nicht.

- Als nächstes verwenden wir ein Template-Literal, um den aktuellen `userGuess`-Wert an das Ende des Guesses-Absatzes anzuhängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:
  - Das erste `if (){ }` überprüft, ob der Tipp des Benutzers gleich der `randomNumber` ist, die oben in unserem JavaScript festgelegt wurde. Wenn ja, hat der Spieler richtig geraten und das Spiel gewonnen. Daher zeigen wir dem Spieler eine Glückwunschnachricht mit einer schönen grünen Farbe, löschen den Inhalt des Bereichs für niedrige/hohe Tipps und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen werden.
  - Jetzt haben wir mit einer `else if (){ }`-Struktur einen weiteren Test an das Ende des letzten Codeblocks angehängt. Dieser überprüft, ob dies der letzte Zug des Benutzers ist. Wenn ja, tut das Programm dasselbe wie im vorherigen Block, allerdings mit einer Game-over-Nachricht anstelle einer Glückwunschnachricht.
  - Der letzte Block, der an das Ende dieses Codes angehängt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests wahr ergibt (der Spieler hat nicht richtig geraten, hat aber noch weitere Versuche). In diesem Fall sagen wir ihm, dass er falsch liegt, und führen dann einen weiteren konditionalen Test durch, um zu überprüfen, ob die Vermutung höher oder niedriger als die Antwort war und zeigen eine weitere Nachricht entsprechend an, um ihm zu sagen, ob höher oder niedriger.

- Die letzten drei Zeilen in der Funktion bereiten uns auf die nächste Eingabe eines Tipps vor. Wir fügen der Variable `guessCount` 1 hinzu, damit der Spieler seinen Versuch verwendet (`++` ist ein Inkrementierungsoperator — Erhöhung um 1), und leeren den Wert aus dem Textfeld im Formular und fokussieren es erneut, bereit für den nächsten Eingabeversuch.

## Ereignisse

An dieser Stelle haben wir eine gut implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn die Schaltfläche "Tipp einreichen" gedrückt wird, und dazu müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Klick auf eine Schaltfläche, das Laden einer Seite, das Abspielen eines Videos usw. — auf die wir reagieren können, indem wir Codeblöcke ausführen. **Ereignis-Listener** beobachten spezifische Ereignisse und rufen **Ereignis-Handler-Funktionen** auf, die als Reaktion auf ein Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unterhalb Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir der Schaltfläche `guessSubmit` einen Ereignis-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (Argumente genannt) erfordert — den Typ des Ereignisses, das wir beobachten (in diesem Fall `click`) als String, und die Funktion, die wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall `checkGuess()`). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie, Ihren Code jetzt zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem gewissen Punkt. Das einzige Problem ist jetzt, dass, wenn Sie die richtige Antwort erraten oder keine Tipps mehr haben, das Spiel unterbrochen wird, weil wir die Funktion `setGameOver()` noch nicht definiert haben, die ausgeführt werden soll, sobald das Spiel vorbei ist. Lassen Sie uns jetzt unseren fehlenden Code hinzufügen und die Funktionalität des Beispiels vervollständigen.

## Fertigstellung der Spielfunktionalität

Fügen wir die Funktion `setGameOver()` an das Ende unseres Codes hinzu und dann gehen wir sie durch. Fügen Sie dies jetzt unterhalb des Rests Ihres JavaScripts hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Texteingabe- und das Tastenfeld, indem sie deren `disabled`-Eigenschaften auf `true` setzen. Das ist nötig, weil der Benutzer sonst nach dem Ende des Spiels weiterhin Tipps abgeben könnte, was alles durcheinander bringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen dessen Textetikett auf "Neues Spiel starten" und fügen es an das Ende unseres vorhandenen HTMLs hinzu.
- Die letzte Zeile setzt einen Ereignis-Listener auf unsere neue Schaltfläche, sodass beim Klicken darauf eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir `resetGame()` ebenfalls definieren! Fügen Sie den folgenden Code, wieder am Ende Ihres JavaScripts, hinzu:

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

Dieser recht lange Codeblock setzt alles auf den Zustand zurück, wie er am Anfang des Spiels war, so dass der Spieler eine weitere Runde spielen kann.

Genauer gesagt:

- Setzt den `guessCount` zurück auf 1.
- Leert alle Texte aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb von `<div class="resultParas"></div>` aus und durchlaufen jeden, um deren `textContent` auf `""` (einen leeren String) zu setzen.
- Entfernt die Rücksetztaste aus unserem Code.
- Aktiviert die Formularelemente erneut und leert und fokussiert das Textfeld, bereit für einen neuen Tipp.
- Entfernt die Hintergrundfarbe des `lastResult`-Paragraphen.
- Erzeugt eine neue Zufallszahl, sodass man nicht einfach wieder dieselbe Zahl errät!

**An diesem Punkt sollten Sie ein grundlegendes, vollständig funktionierendes Spiel haben — Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, über einige andere wichtige Code-Funktionen zu sprechen, die Sie bereits gesehen haben, auch wenn Sie es vielleicht nicht realisiert haben.

## Schleifen

Oben haben wir **Schleifen** erwähnt, ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Lassen Sie uns ein einfaches Beispiel erkunden, um zu zeigen, was dies bedeutet. Gehen Sie erneut zu Ihrer [JavaScript-Konsole für Browserentwickler](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), fügen Sie den folgenden Code ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Strings `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array, das eine Sammlung von Werten (in diesem Fall Strings) darstellt.

Dann verwenden wir eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um jedes Element im Array zu erhalten und etwas JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` besagt:

1. Nehmen Sie den ersten Wert in `fruits` und speichern Sie ihn in einer Variablen namens `fruit`.
2. Führen Sie den Code in den `{}`-geschweiften Klammern aus (der in diesem Fall den Wert von `fruit` in die Konsole protokolliert).
3. Speichern Sie den nächsten Array-Wert in `fruit` und wiederholen Sie Punkt 2, bis Sie das Ende des `fruits`-Arrays erreichen.

Schauen wir uns nun die Schleife in unserem Zahlraten-Spiel an — die folgende befindet sich in der `resetGame()`-Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb von `<div class="resultParas">` enthält, mithilfe der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)-Methode, und durchläuft dann jeden einzelnen, um dessen Textinhalt zu entfernen.

Beachten Sie, dass wir, obwohl `resetPara` eine Konstante ist, deren interne Eigenschaften wie `textContent` ändern können.

## Zusammenfassung

Das war es also für den Aufbau des Beispiels. Sie sind am Ende angelangt — gut gemacht! Probieren Sie Ihren endgültigen Code aus oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn es Ihnen nicht gelingt, Ihre Version des Beispiels zum Laufen zu bringen, vergleichen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion kann ebenfalls helfen — darin besprechen wir, was beim Schreiben von JavaScript-Code schief gehen kann und beziehen uns dabei auf das "Rate die Zahl"-Spiel.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
