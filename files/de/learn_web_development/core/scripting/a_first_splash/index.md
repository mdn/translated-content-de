---
title: Ein erster Sprung in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Nachdem Sie nun einige Theorien über JavaScript und dessen Einsatzmöglichkeiten gelernt haben, werden wir Sie durch ein praktisches Tutorial führen, damit Sie sehen können, wie ein einfaches JavaScript-Programm erstellt wird. Hier erstellen Sie schrittweise ein einfaches "Errate die Zahl"-Spiel.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Kenntnisse in <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
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
> Beginnend mit [Schreiben Sie Ihre erste JavaScript-Variable](https://scrimba.com/learn-javascript-c0v/~04?via=mdn) bietet Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> nützliche interaktive Lektionen, die Sie durch die Grundlagen von JavaScript führen.

Wir wollen hier wirklich klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels lernen oder sogar den gesamten Code verstehen, den wir von Ihnen schreiben lassen. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen viel detaillierter nochmals wiederholen, machen Sie sich also keine Sorgen, wenn Sie nicht sofort alles verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen, sind denselben in anderen Programmiersprachen ähnlich — Funktionen, Schleifen usw. Die Syntax des Codes sieht anders aus, aber die Konzepte sind größtenteils gleich.

## Einführung in unser "Zahlenraten"-Beispiel

In diesem Artikel zeigen wir Ihnen, wie Sie das folgende Spiel erstellen können:

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

Versuchen Sie, es zu spielen — machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

## Denken wie ein Programmierer

Eines der schwierigsten Dinge, die man beim Programmieren lernen muss, ist nicht die Syntax, die man lernen muss, sondern wie man sie anwendet, um Probleme in der realen Welt zu lösen. Sie müssen beginnen, wie ein Programmierer zu denken — das bedeutet im Allgemeinen, sich Beschreibungen darüber anzusehen, was Ihr Programm tun muss, herauszufinden, welche Code-Funktionen benötigt werden, um diese Dinge zu erreichen, und wie man sie zusammenarbeiten lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — plus ein bisschen Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können Ihnen nicht versprechen, dass Sie in fünf Minuten ein "Programmierergehirn" entwickeln werden, aber wir werden Ihnen hier und im gesamten weiteren Kurs zahlreiche Gelegenheiten geben, das Denken wie ein Programmierer zu üben.

## Die anfängliche Design-Beschreibung

Stellen wir uns vor, Ihr Chef hat Ihnen folgende Beschreibung zur Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "Errate die Zahl"-Spiel erstellen. Es sollte eine zufällige Zahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Versuch sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt und, wenn falsch, ob die Vermutung zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig geraten hat oder keine Versuche mehr übrig sind. Wenn das Spiel endet, sollte dem Spieler eine Option zum erneuten Spielen angezeigt werden.

Nachdem man diese Beschreibung betrachtet hat, kann man als erstes beginnen, sie in einfache, umsetzbare Aufgaben zu zerlegen, so weit wie möglich im Programmierdenken:

1. Eine zufällige Zahl zwischen 1 und 100 generieren.
2. Die aktuelle Rundenzahl des Spielers zählen. Beginnen Sie mit 1.
3. Dem Spieler eine Möglichkeit geben, die Zahl zu erraten.
4. Sobald ein Versuch eingereicht wurde, ihn zunächst irgendwo aufzeichnen, damit der Nutzer seine früheren Vermutungen sehen kann.
5. Dann überprüfen, ob es die richtige Zahl ist.
6. Wenn es korrekt ist:
   1. Glückwunsch-Nachricht anzeigen.
   2. Den Spieler daran hindern, weitere Vermutungen einzugeben (dies würde das Spiel durcheinanderbringen).
   3. Steuerung anzeigen, die dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Versuche übrig hat:
   1. Dem Spieler mitteilen, dass er falsch liegt, und ob seine Vermutung zu hoch oder zu niedrig war.
   2. Ihm erlauben, eine weitere Vermutung einzugeben.
   3. Die Rundenzahl um 1 erhöhen.

8. Wenn es falsch ist und der Spieler keine Versuche mehr übrig hat:
   1. Dem Spieler mitteilen, dass es vorbei ist.
   2. Den Spieler daran hindern, weitere Vermutungen einzugeben (dies würde das Spiel durcheinanderbringen).
   3. Steuerung anzeigen, die dem Spieler ermöglicht, das Spiel neu zu starten.

9. Wenn das Spiel neu startet, sicherstellen, dass die Spiellogik und das UI vollständig zurückgesetzt sind, dann zurück zu Schritt 1.

Gehen wir nun weiter, indem wir uns ansehen, wie wir diese Schritte in Code umwandeln, das Beispiel aufbauen und dabei JavaScript-Funktionen erkunden.

## Erste Einrichtung

Um mit diesem Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie des folgenden Codes in einer neuen HTML-Datei mit Ihrem Code-Editor erstellen.

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

Halten Sie es in Ihrem Texteditor geöffnet und öffnen Sie es außerdem in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, einen Anweisungsabsatz und ein Formular zum Eingeben einer Vermutung, aber das Formular wird derzeit nichts tun.

Sie fügen Ihren gesamten JavaScript-Code in das {{htmlelement("script")}}-Element am unteren Ende des HTMLs ein:

```html
<script>
  // Your JavaScript goes here
</script>
```

## Hinzufügen von Variablen zur Speicherung unserer Daten

Lassen Sie uns loslegen. Fügen Sie zunächst die folgenden Zeilen in Ihr {{htmlelement("script")}}-Element ein:

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

Konstanten werden ebenfalls verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nicht mehr ändern, sobald er festgelegt ist. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text in einigen dieser Elemente kann sich ändern, aber jede Konstante verweist immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variable oder Konstanten einen Wert zuweisen, indem Sie ein Gleichheitszeichen (`=`) und den Wert eingeben, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird eine zufällige Zahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wurde.
- Die ersten drei Konstanten dienen dazu, Referenzen auf die Ergebnissabsätze in unserem HTML zu speichern, und werden verwendet, um später im Code Werte in die Absätze einzufügen (beachten Sie, wie sie sich in einem `<div>`-Element befinden, das selbst verwendet wird, um alle drei später zum Zurücksetzen auszuwählen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten zwei Konstanten speichern Referenzen auf das Texteingabefeld des Formulars und den Absenden-Button und werden verwendet, um später das Einreichen der Vermutung zu handhaben.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Vermutungszahl von 1 (wird verwendet, um zu verfolgen, wie viele Vermutungen der Spieler gemacht hat) und eine Referenz auf einen Zurücksetzen-Button, der noch nicht existiert (aber später eingefügt wird).

## Funktionen

Als Nächstes fügen Sie folgendes unter Ihrem vorherigen JavaScript hinzu:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch es nicht nötig ist, Code immer wieder zu wiederholen. Es gibt mehrere Möglichkeiten, Funktionen zu definieren, aber vorerst konzentrieren wir uns auf eine einfache Art. Hier haben wir eine Funktion mit dem Schlüsselwort `function` definiert, gefolgt von einem Namen, mit Klammern danach. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern steht der gesamte Code, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Probieren wir das jetzt aus. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [Entwicklertools JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollten Sie `I am a placeholder` in der Konsole protokolliert sehen; wir haben eine Funktion in unserem Code definiert, die eine Platzhalternachricht ausgibt, wann immer wir sie aufrufen.

## Textzeichenfolgen

Zeichenfolgen werden zur Darstellung von Text verwendet. Wir haben bereits eine stringförmige Variable gesehen: im folgenden Code ist `"I am a placeholder"` eine Zeichenfolge:

```js
function checkGuess() {
  console.log("I am a placeholder");
}
```

Sie können Zeichenfolgen mit Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen die gleiche Form für den Start und das Ende einer einfachen Zeichenfolgendeklaration verwenden: Sie können nicht `"I am a placeholder'` schreiben.

Sie können auch Zeichenfolgen mit Backticks (`` ` ``) deklarieren. Zeichenfolgen, die so deklariert sind, heißen _template literals_ und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in sie einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Zeichenfolgen zusammenzufügen.

## Bedingte Anweisungen

**Bedingte Anweisungen** ermöglichen es Ihnen, Code selektiv auszuführen, je nachdem, ob eine bestimmte Bedingung erfüllt ist oder nicht. Sie sehen ein bisschen aus wie eine Funktion, sind aber anders. Lassen Sie uns bedingte Anweisungen erkunden, indem wir zu unserem Beispiel etwas hinzufügen.

Ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass unsere `checkGuess()`-Funktion einfach eine Platzhalternachricht ausgibt. Wir wollen, dass sie überprüft, ob die Vermutung eines Spielers richtig ist oder nicht, und entsprechend reagiert.

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

Das ist eine Menge Code — puh! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Konstante namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der in das Textfeld eingegeben wurde. Wir nutzen auch den eingebauten `Number()`-Konstruktor dafür, um sicherzustellen, dass der Wert definitiv eine Zahl ist.
- Als nächstes stoßen wir auf unseren ersten bedingten Codeblock. Der einfachste bedingte Block beginnt mit dem Schlüsselwort `if`, dann ein paar Klammern, dann ein paar geschweiften Klammern. Innerhalb der Klammern enthalten wir einen Test. Wenn der Test `true` zurückgibt, führen wir den Code in den geschweiften Klammern aus. Wenn nicht, überspringen wir es und gehen zur nächsten Codezeile über. In diesem Fall prüfen wir, ob die `guessCount`-Variable gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Falls ja, machen wir den Textinhalt des Guesses-Absatzes gleich `Previous guesses:`. Wenn nicht, machen wir nichts.

- Als nächstes verwenden wir einen Template Literal, um den aktuellen `userGuess`-Wert an das Ende des `guesses`-Absatzes zu hängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:
  - Das erste `if (){ }` überprüft, ob die Vermutung des Nutzers der `randomNumber` entspricht, die am Anfang unseres JavaScripts festgelegt wurde. Wenn es der Fall ist, hat der Spieler richtig geraten und das Spiel ist gewonnen, daher zeigen wir dem Spieler eine Glückwunsch-Nachricht mit einer schönen grünen Farbe, leeren den Inhalt des Hoch/Niedrig-Informationskastens und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen werden.
  - Jetzt haben wir einen weiteren Test an das Ende des letzten angefügt, indem wir eine `else if (){ }` Struktur verwenden. Diese überprüft, ob dies der letzte Versuch des Nutzers ist. Wenn es der Fall ist, tut das Programm dasselbe wie im vorherigen Block, außer mit einer Game-Over-Nachricht statt einer Glückwunsch-Nachricht.
  - Der letzte Block, der an das Ende dieses Codes angehängt ist (das `else { }`) enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests wahr ist (der Spieler hat nicht richtig geraten, hat aber noch Vermutungen übrig). In diesem Fall teilen wir ihnen mit, dass sie falsch liegen, führen dann einen weiteren bedingten Test durch, um zu überprüfen, ob die Vermutung höher oder niedriger als die Antwort war, und zeigen eine weitere Nachricht an, um ihnen höher oder niedriger mitzuteilen.

- Die letzten drei Zeilen in der Funktion bereiten uns auf die nächste Vermutung vor, die eingereicht wird. Wir addieren 1 zur `guessCount`-Variable, sodass der Spieler seinen Zug macht (`++` ist eine Inkrementoperation — erhöht um 1), und leeren den Wert aus dem Formulartextfeld und fokussieren es erneut, bereit für die Eingabe der nächsten Vermutung.

## Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn der "Vermutung abschicken"-Button gedrückt wird, und dazu müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren —, ein Button wird geklickt, eine Seite wird geladen, ein Video wird abgespielt, usw. — in Reaktion auf diese können wir Codeblöcke ausführen. **Ereignis-Listener** beobachten spezifische Ereignisse und rufen **Ereignis-Handler-Funktionen** auf, die in Reaktion auf ein ausgelöstes Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir einen Ereignis-Listener zum `guessSubmit`-Button hinzu. Dies ist eine Methode, die zwei Eingabewerte (Argumente genannt) nimmt — den Typ des Ereignisses, auf das wir achten (in diesem Fall `click`) als String und die Funktion, die wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall `checkGuess()`). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir es in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie jetzt, Ihren Code zu speichern und zu aktualisieren, dann sollte Ihr Beispiel funktionieren — bis zu einem Punkt. Das einzige Problem jetzt ist, dass, wenn Sie die richtige Antwort erraten oder keine Vermutungen mehr übrig haben, das Spiel kaputtgeht, weil wir die `setGameOver()`-Funktion noch nicht definiert haben, die ausgeführt werden soll, sobald das Spiel vorbei ist. Lassen Sie uns jetzt unseren fehlenden Code hinzufügen und die Beispiel-Funktionalität abschließen.

## Abschluss der Spielfunktionalität

Fügen Sie die `setGameOver()`-Funktion am Ende Ihres Codes hinzu und gehen Sie sie dann durch. Fügen Sie diese jetzt unter den Rest Ihres JavaScripts ein:

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

- Die ersten beiden Zeilen deaktivieren das Formulartexteingabe und den Button, indem sie deren `disabled`-Eigenschaften auf `true` setzen. Dies ist notwendig, da der Nutzer, wenn wir das nicht tun, mehr Vermutungen abschicken könnte, nachdem das Spiel vorbei ist, was die Sache durcheinanderbringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen seine Textbezeichnung auf "Neues Spiel starten" und fügen es am Ende unseres bestehenden HTMLs hinzu.
- Die letzte Zeile setzt einen Ereignis-Listener auf unseren neuen Button, sodass, wenn dieser geklickt wird, eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir auch `resetGame()` definieren! Fügen Sie den folgenden Code, erneut am Ende Ihres JavaScripts hinzu:

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

Dieser eher lange Codeblock setzt alles vollständig zurück, so wie es zu Beginn des Spiels war, sodass der Spieler einen weiteren Versuch starten kann.

Konkret:

- Setzt den `guessCount` zurück auf 1.
- Leert alle Texte aus den Informationsabsätzen. Wir wählen alle Absätze in `<div class="resultParas"></div>` aus, dann durchlaufen wir jeden einzelnen und setzen deren `textContent` auf `""` (eine leere Zeichenfolge).
- Entfernt den Reset-Button aus unserem Code.
- Aktiviert die Formularelemente wieder und leert und fokussiert das Textfeld, bereit für das Eingeben einer neuen Vermutung.
- Entfernt die Hintergrundfarbe vom `lastResult`-Absatz.
- Erzeugt eine neue zufällige Zahl, damit Sie nicht wieder dieselbe Zahl raten!

**An diesem Punkt sollten Sie ein grundlegendes vollständig funktionierendes Spiel haben — herzlichen Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, einige andere wichtige Code-Funktionen zu besprechen, die Sie bereits gesehen haben, obwohl Sie es vielleicht nicht bemerkt haben.

## Schleifen

Oben haben wir **Schleifen** erwähnt, ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Lassen Sie uns ein einfaches Beispiel erkunden, um Ihnen zu zeigen, was das bedeutet. Gehen Sie erneut zu Ihren [Browser-Entwicklertools JavaScript-Konsole](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), fügen Sie den folgenden Code ein und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd>:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Strings `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array, das eine Sammlung von Werten ist (in diesem Fall Strings).

Wir verwenden dann eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife, um jedes Element im Array zu erhalten und ein bisschen JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie sich den ersten Wert in `fruits` und speichern Sie ihn in einer Variable namens `fruit`.
2. Führen Sie den Code zwischen den `{}`-geschweiften Klammern aus (was in diesem Fall das Protokollieren des `fruit`-Wertes in die Konsole ist).
3. Speichern Sie den nächsten Array-Wert in `fruit` und wiederholen Sie 2, bis Sie das Ende des `fruits`-Arrays erreichen.

Schauen wir uns nun die Schleife in unserem Zahlenraten-Spiel an — Folgendes finden Sie in der `resetGame()` Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb von `<div class="resultParas">` enthält, indem die [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) Methode verwendet wird. Dann durchlaufen wir jeden einzelnen und entfernen den Textinhalt.

Beachten Sie, dass, obwohl `resetPara` eine Konstante ist, wir ihre internen Eigenschaften wie `textContent` ändern können.

## Zusammenfassung

Das war's also mit dem Erstellen des Beispiels. Sie sind am Ende angelangt — gut gemacht! Probieren Sie Ihren endgültigen Code aus oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihr Beispiel nicht zum Laufen bringen können, vergleichen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion könnte ebenfalls helfen — darin besprechen wir, was beim Schreiben von JavaScript-Code schiefgehen kann, wobei wir uns auf das "Errate die Zahl"-Spiel beziehen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
