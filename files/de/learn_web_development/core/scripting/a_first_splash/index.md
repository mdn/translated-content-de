---
title: Ein erster Einblick in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: abe8cffb30e5153747bb027cb0b4e532981a093c
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Nachdem Sie nun etwas über die Theorie von JavaScript gelernt haben und was Sie damit tun können, werden wir Ihnen eine Vorstellung davon geben, wie der Prozess zur Erstellung eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial führen. Hier werden Sie Schritt für Schritt ein einfaches "Errate die Zahl"-Spiel aufbauen.

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
          <li>Erfahrung, wie das Schreiben von JavaScript ist.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels gelernt haben oder sogar den gesamten Code, den wir Sie bitten zu schreiben, verstehen. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie sich das Schreiben von JavaScript anfühlt. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen viel detaillierter wiederholen, also machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen werden, sind die gleichen wie in anderen Programmiersprachen - Funktionen, Schleifen usw. Die Codesyntax sieht anders aus, aber die Konzepte sind größtenteils dieselben.

## Einführung in unser "Zahlerraten"-Beispiel

In diesem Artikel zeigen wir Ihnen, wie Sie das untenstehende Spiel aufbauen können:

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

Versuchen Sie, es zu spielen - machen Sie sich mit dem Spiel vertraut, bevor Sie fortfahren.

## Denken wie ein Programmierer

Eines der schwierigsten Dinge beim Programmieren zu lernen ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie diese anwenden, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken – das beinhaltet im Allgemeinen, Beschreibungen dessen zu betrachten, was Ihr Programm tun muss, herauszufinden, welche Codefunktionen benötigt werden, um diese Dinge zu erreichen, und wie sie zusammenarbeiten können.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung – plus etwas Kreativität. Je mehr Sie codieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln werden, aber wir werden Ihnen hier und im gesamten Rest des Kurses viele Gelegenheiten geben, zu üben, wie ein Programmierer zu denken.

## Das ursprüngliche Designbriefing

Stellen Sie sich vor, Ihr Chef hat Ihnen das folgende Briefing für die Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "Errate die Zahl"-Spiel erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen, und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Versuch sollte dem Spieler gesagt werden, ob er richtig oder falsch liegt, und wenn er falsch liegt, ob die Schätzung zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig geraten hat oder sobald ihm die Versuche ausgehen. Wenn das Spiel endet, sollte dem Spieler eine Option gegeben werden, erneut zu spielen.

Beim Lesen dieses Briefings können wir als erstes beginnen, es in einfache umsetzbare Aufgaben zu zerlegen, so sehr im Denken eines Programmierers wie möglich:

1. Eine Zufallszahl zwischen 1 und 100 generieren.
2. Die Rundenanzahl, an der sich der Spieler befindet, aufzeichnen. Beginnen Sie mit 1.
3. Dem Spieler eine Möglichkeit geben, zu raten, was die Zahl ist.
4. Sobald ein Tipp abgegeben wurde, zeichnen Sie ihn zuerst irgendwo auf, damit der Benutzer seine vorherigen Tipps sehen kann.
5. Überprüfen Sie anschließend, ob es die richtige Zahl ist.
6. Wenn es korrekt ist:

   1. Eine Glückwunschmeldung anzeigen.
   2. Den Spieler daran hindern, weitere Tipps einzugeben (dies würde das Spiel durcheinander bringen).
   3. Eine Steuerung anzeigen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Runden hat:

   1. Dem Spieler sagen, dass er falsch liegt und ob seine Schätzung zu hoch oder zu niedrig war.
   2. Ihm erlauben, einen weiteren Tipp abzugeben.
   3. Die Rundenanzahl um 1 erhöhen.

8. Wenn es falsch ist und der Spieler keine Runden mehr hat:

   1. Dem Spieler sagen, dass das Spiel vorbei ist.
   2. Den Spieler daran hindern, weitere Tipps einzugeben (dies würde das Spiel durcheinander bringen).
   3. Eine Steuerung anzeigen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, stellen Sie sicher, dass die Spiellogik und die Benutzeroberfläche vollständig zurückgesetzt sind, und kehren Sie dann zu Schritt 1 zurück.

Lassen Sie uns nun voranschreiten, um zu sehen, wie wir diese Schritte in Code umsetzen können, indem wir das Beispiel aufbauen und JavaScript-Funktionen unterwegs erkunden.

## Erste Einrichtung

Um mit diesem Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie des folgenden Codes in einer neuen HTML-Datei mit Ihrem Code-Editor erstellen.

```html
<!DOCTYPE html>
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

Halten Sie es in Ihrem Texteditor geöffnet und öffnen Sie es auch in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, einen Anweisungsabschnitt und ein Formular für die Eingabe eines Tipps, aber das Formular wird momentan nicht funktionieren.

Sie werden Ihren gesamten JavaScript-Code innerhalb des {{htmlelement("script")}}-Elements am Ende des HTML hinzufügen:

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

Dieser Abschnitt des Codes legt die Variablen (und Konstanten) fest, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird.

Variablen sind im Wesentlichen Namen für Werte (wie Zahlen oder Textketten). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert, sobald er festgelegt ist, nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente kann sich ändern, aber jede Konstante bezieht sich immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante einen Wert mit einem Gleichheitszeichen (`=`) zuweisen, gefolgt von dem Wert, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird mit einer Zufallszahl zwischen 1 und 100 belegt, die mithilfe eines mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten speichern jeweils einen Verweis auf die Ergebnisabsätze in unserem HTML und werden verwendet, um später im Code Werte in die Absätze einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>`-Elements befinden, das selbst später zur Auswahl aller drei beim Zurücksetzen verwendet wird, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Verweise auf die Formulareingabe und den Absende-Button und werden verwendet, um das Absenden des Tipps später zu bearbeiten.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Tippzahl von 1 (die verwendet wird, um zu verfolgen, wie viele Tipps der Spieler abgegeben hat) und einen Verweis auf einen Zurücksetzungsbutton, der noch nicht existiert (später jedoch).

## Funktionen

Fügen Sie als Nächstes das Folgende unterhalb Ihres vorherigen JavaScripts hinzu:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, um sich das ständige Wiederholen von Code zu ersparen. Es gibt mehrere Möglichkeiten, Funktionen zu definieren, aber vorerst konzentrieren wir uns auf einen einfachen Typ. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` verwenden, gefolgt von einem Namen, mit Klammern dahinter. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern befindet sich der gesamte Code, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, schreiben wir den Namen der Funktion gefolgt von den Klammern.

Lassen Sie uns das jetzt versuchen. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nachdem Sie <kbd>Return</kbd>/<kbd>Enter</kbd> gedrückt haben, sollten Sie `I am a placeholder` in der Konsole sehen; wir haben eine Funktion in unserem Code definiert, die eine Platzhaltermeldung ausgibt, wann immer wir sie aufrufen.

## Textketten

Strings werden verwendet, um Text darzustellen. Wir haben bereits eine Stringvariable gesehen: In dem folgenden Code ist `"I am a placeholder"` ein String:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Sie können Strings mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dasselbe Format für den Anfang und das Ende einer einzelnen Stringdeklaration verwenden: Sie können nicht schreiben `"I am a placeholder'`.

Sie können auch Strings mit Backticks (`` ` ``) deklarieren. Strings, die so deklariert werden, werden _Template-Strings_ genannt und haben einige spezielle Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in sie einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Strings zu verbinden.

## Bedingte Anweisungen

Bedingte Anweisungen (Conditionals) ermöglichen es Ihnen, Code selektiv auszuführen, je nachdem, ob eine bestimmte Bedingung wahr ist oder nicht. Sie sehen ein bisschen aus wie eine Funktion, sind aber unterschiedlich. Lassen Sie uns Bedingungen erkunden, indem wir unser Beispiel erweitern.

Ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass unsere `checkGuess()`-Funktion nur eine Platzhalternachricht ausgibt. Wir möchten, dass sie überprüft, ob eine Schätzung des Spielers korrekt ist oder nicht, und entsprechend reagiert.

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

Das ist eine Menge Code – phew! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Konstante namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Textfeld eingegeben wurde. Wir führen diesen Wert auch durch den eingebauten `Number()`-Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist.
- Als Nächstes begegnen wir unserem ersten bedingten Codeblock. Die einfachste Form eines bedingten Blocks beginnt mit dem Schlüsselwort `if`, dann einigen Klammern und dann geschweiften Klammern. In den Klammern enthalten wir einen Test. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir das nicht und fahren mit dem nächsten Codeabschnitt fort. In diesem Fall testen wir, ob die Variable `guessCount` gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn es so ist, setzen wir den Textinhalt des Tippsabsatzes auf `Vorherige Tipps:`. Wenn nicht, tun wir das nicht.

- Als nächstes verwenden wir ein Template-String, um den aktuellen `userGuess`-Wert an das Ende des `guesses`-Absatzes anzuhängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Prüfungen durch:

  - Der erste `if (){ }`-Block prüft, ob die Benutzerschätzung gleich der zu Beginn unseres JavaScripts gesetzten `randomNumber` ist. Wenn es so ist, hat der Spieler die richtige Zahl erraten und das Spiel gewonnen, daher zeigen wir eine Glückwunschmeldung mit einer schönen grünen Farbe an, leeren den Inhalt des niederen/hohen Hinweisfeldes und führen eine Funktion namens `setGameOver()` aus, auf die wir später eingehen werden.
  - Nun haben wir einen weiteren Test an das Ende des vorherigen Blocks mit einer `else if (){ }`-Struktur angehängt. Dieser prüft, ob diese Runde der letzte Versuch des Benutzers ist. Wenn dies der Fall ist, tut das Programm dasselbe wie im vorherigen Block, außer mit einer Game Over-Nachricht anstelle einer Glückwunschmeldung.
  - Der letzte Block, der an das Ende dieses Codes angehängt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests `true` zurückgibt (der Spieler hat nicht korrekt geraten, aber er hat noch mehr Tipps). In diesem Fall sagen wir ihm, dass er falsch liegt, führen dann einen weiteren Bedingungstest durch, um zu überprüfen, ob die Schätzung höher oder niedriger als die Antwort war, und zeigen eine entsprechende Nachricht an, um ihm zu sagen, ob höher oder niedriger.

- Die letzten drei Zeilen in der Funktion bereiten uns auf den nächsten Tipp vor, der eingereicht werden soll. Wir addieren 1 zur Variablen `guessCount`, damit der Spieler seinen Versuch verbraucht (`++` ist eine Inkrementoperation – Erhöhung um 1), leeren den Wert des Formeltextfelds und fokussieren es erneut, bereit für die Eingabe des nächsten Tipps.

## Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn der "Tipp abschicken"-Button gedrückt wird, und dafür müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren – ein Button wird geklickt, eine Seite lädt, ein Video spielt usw. –, auf die wir Codeblöcke ausführen können. **Ereignis-Listener** beobachten spezifische Ereignisse und rufen **Ereignis-Handler-Funktionen** auf, die als Antwort auf ein auslösendes Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit`-Button einen Ereignis-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) benötigt – die Art des Ereignisses, auf das wir achten (in diesem Fall `click`) als String, und die Funktion, die wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall, `checkGuess()`). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie, jetzt Ihren Code zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren – bis zu einem Punkt. Das einzige Problem ist jetzt, dass, wenn Sie die richtige Antwort erraten oder keine Tipps mehr haben, das Spiel kaputt gehen wird, weil wir die `setGameOver()`-Funktion, die ausgeführt werden soll, sobald das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns unseren fehlenden Code jetzt hinzufügen und die Beispiel- Funktionalität vervollständigen.

## Abschließen der Spielfunktionalität

Fügen Sie die `setGameOver()`-Funktion am Ende Ihres Codes hinzu und gehen Sie dann dazu über, sie zu erläutern. Fügen Sie dies nun unterhalb des restlichen JavaScripts hinzu:

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

- Die ersten beiden Zeilen deaktivieren die Formulareingabe und den Button, indem Sie ihre `disabled`-Eigenschaften auf `true` setzen. Dies ist notwendig, denn wenn wir das nicht tun würden, könnte der Benutzer nach dem Ende des Spiels weiterhin Tipps einreichen, was alles durcheinander bringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen seine Textbezeichnung auf "Start new game" und fügen es am Ende unseres bestehenden HTML hinzu.
- Die letzte Zeile setzt einen Ereignis-Listener auf unseren neuen Button, sodass, wenn er angeklickt wird, eine Funktion namens `resetGame()` ausgeführt wird.

Nun müssen wir `resetGame()` auch definieren! Fügen Sie den folgenden Code erneut unterhalb Ihres JavaScripts hinzu:

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

Dieser ziemlich lange Codeblock setzt alles so zurück, wie es zu Beginn des Spiels war, damit der Spieler eine weitere Runde spielen kann.

Konkret:

- Setzt die `guessCount` auf 1 zurück.
- Löscht den ganzen Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb `<div class="resultParas"></div>`, dann durchlaufen wir jeden und setzen ihren `textContent` auf `""` (eine leere Zeichenkette).
- Entfernt den Zurücksetzungsbutton aus unserem Code.
- Aktiviert die Formularelemente wieder und leert sowie fokussiert das Textfeld, bereit für die neue Eingabe eines Tipps.
- Entfernt die Hintergrundfarbe vom `lastResult`-Absatz.
- Generiert eine neue Zufallszahl, sodass Sie nicht einfach dieselbe Zahl noch einmal raten!

**An diesem Punkt sollten Sie ein grundlegendes, voll funktionsfähiges Spiel haben – herzlichen Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, über einige andere wichtige Codefunktionen zu sprechen, die Sie bereits gesehen haben, obwohl Sie es vielleicht nicht bemerkt haben.

## Schleifen

Oben haben wir Schleifen erwähnt, ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, einen Codeausschnitt immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Lassen Sie uns ein einfaches Beispiel erkunden, um Ihnen zu zeigen, was das bedeutet. Gehen Sie in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) Ihres Browsers, fügen Sie den folgenden Code ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenketten `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array, das eine Sammlung von Werten (in diesem Fall Zeichenketten) ist.

Wir verwenden dann eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife, um jeden Artikel im Array zu erhalten und etwas JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie den ersten Wert in `fruits` und speichern Sie ihn in einer Variablen namens `fruit`.
2. Führen Sie den Code zwischen den `{}`-Klammern aus (die in diesem Fall den `fruit`-Wert in der Konsole ausgeben).
3. Speichern Sie den nächsten Arraywert in `fruit` und wiederholen Sie den zweiten Schritt, bis Sie das Ende des `fruits`-Arrays erreichen.

Nun lassen Sie uns die Schleife in unserem Zahlenratespiel betrachten – das Folgende kann innerhalb der `resetGame()`-Funktion gefunden werden:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb `<div class="resultParas">` mithilfe der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)-Methode enthält, dann schleifen wir durch jeden einzelnen und entfernen deren Textinhalt.

Beachten Sie, dass, obwohl `resetPara` eine Konstante ist, können wir ihre internen Eigenschaften wie `textContent` ändern.

## Zusammenfassung

Das war es also für das Erstellen des Beispiels. Sie haben es bis zum Ende geschafft – gut gemacht! Probieren Sie Ihren endgültigen Code aus oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihre Version des Beispiels nicht zum Laufen bringen, überprüfen Sie sie anhand des [Quellcodes](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion könnte ebenfalls helfen – darin besprechen wir, was schiefgehen kann, wenn JavaScript geschrieben wird, und beziehen uns dabei auf das "Guess the number"-Spiel.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
