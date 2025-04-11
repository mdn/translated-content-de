---
title: Ein erster Sprung in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Jetzt, da Sie etwas über die Theorie von JavaScript und dessen Anwendungsmöglichkeiten gelernt haben, wollen wir Ihnen eine Vorstellung davon geben, wie der Prozess der Erstellung eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial führen. Hier bauen Sie Schritt für Schritt ein einfaches "Zahlenraten"-Spiel auf.

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
          <li>Erleben, wie es ist, JavaScript zu schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels lernen oder sogar den gesamten Code verstehen, den wir Sie bitten zu schreiben. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In späteren Artikeln werden Sie alle hier gezeigten Funktionen in viel mehr Detail wiederholen, also machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen, sind die gleichen wie in anderen Programmiersprachen — Funktionen, Schleifen, etc. Die Syntax des Codes sieht anders aus, aber die Konzepte sind weitgehend die gleichen.

## Denken wie ein Programmierer

Eines der schwierigsten Dinge beim Programmieren ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie diese anwenden, um reale Probleme zu lösen. Sie müssen beginnen, wie ein Programmierer zu denken — dies umfasst im Allgemeinen das Betrachten von Beschreibungen dessen, was Ihr Programm tun muss, das Festlegen, welche Code-Funktionen erforderlich sind, um diese Dinge zu erreichen, und wie man sie zusammenarbeiten lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — sowie ein wenig Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können Ihnen nicht versprechen, dass Sie in fünf Minuten ein "Programmiererhirn" entwickeln, aber wir werden Ihnen viele Gelegenheiten geben, das Denken wie ein Programmierer innerhalb des Kurses zu üben.

In diesem Sinne lassen Sie uns das Beispiel betrachten, das wir in diesem Artikel aufbauen werden, und den allgemeinen Prozess des Zerlegens in greifbare Aufgaben überprüfen.

## Beispiel — Zahlenraten-Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen, das Sie unten sehen können:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Probieren Sie es aus, damit Sie sich mit dem Spiel vertraut machen, bevor Sie fortfahren.

Stellen Sie sich vor, Ihr Vorgesetzter hat Ihnen folgende Aufgabenbeschreibung für die Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "Zahlenraten"-Spiel erstellen. Es sollte eine zufällige Zahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Versuch sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch geraten hat, und wenn er falsch liegt, ob die Vermutung zu niedrig oder zu hoch war. Es sollte auch dem Spieler sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, wenn der Spieler richtig geraten hat oder wenn ihm die Versuche ausgegangen sind. Wenn das Spiel endet, sollte der Spieler die Möglichkeit bekommen, wieder zu spielen.

Beim Blick auf dieses Briefing können wir als erstes damit beginnen, es in möglichst viele einfache, umsetzbare Aufgaben zu zerlegen, in einer Denkweise eines Programmierers:

1. Eine zufällige Zahl zwischen 1 und 100 generieren.
2. Die Rundenanzahl verfolgen, bei der der Spieler sich befindet. Starten Sie bei 1.
3. Dem Spieler eine Möglichkeit bieten, zu erraten, welche Zahl es ist.
4. Sobald eine Vermutung eingereicht wurde, diese zuerst irgendwo notieren, damit der Benutzer seine bisherigen Vermutungen sehen kann.
5. Dann überprüfen, ob es die richtige Zahl ist.
6. Wenn es richtig ist:

   1. Gratulationsnachricht anzeigen.
   2. Den Spieler daran hindern, weitere Vermutungen einzugeben (das würde das Spiel durcheinanderbringen).
   3. Steuerung anzeigen, die dem Spieler erlaubt, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Züge übrig hat:

   1. Dem Spieler mitteilen, dass er falsch liegt und ob seine Vermutung zu hoch oder zu niedrig war.
   2. Ihm erlauben, eine weitere Vermutung einzugeben.
   3. Die Rundenanzahl um 1 erhöhen.

8. Wenn es falsch ist und der Spieler keine Züge mehr übrig hat:

   1. Dem Spieler mitteilen, dass das Spiel vorbei ist.
   2. Den Spieler daran hindern, weitere Vermutungen einzugeben (das würde das Spiel durcheinanderbringen).
   3. Steuerung anzeigen, die dem Spieler erlaubt, das Spiel neu zu starten.

9. Wenn das Spiel neu startet, stellen Sie sicher, dass die Spiellogik und die Benutzeroberfläche vollständig zurückgesetzt werden, und gehen Sie dann zurück zu Schritt 1.

Lassen Sie uns jetzt weitermachen und schauen, wie wir diese Schritte in Code umsetzen können, das Beispiel aufbauen und JavaScript-Funktionen erkunden, während wir weitermachen.

### Ersteinrichtung

Zu Beginn dieses Tutorials möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie sie hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie sie sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Momentan sehen Sie eine einfache Überschrift, einen Anweisungsabsatz und ein Formular zum Eingeben einer Vermutung, aber das Formular wird momentan nichts tun.

Der Ort, an dem wir unseren gesamten Code hinzufügen werden, befindet sich im {{htmlelement("script")}}-Element am Ende des HTML-Codes:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zur Speicherung unserer Daten

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

Dieser Abschnitt des Codes richtet die Variablen und Konstanten ein, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird.

Variablen sind im Grunde Namen für Werte (wie Zahlen oder Textfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden auch verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nach der Festlegung nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text in einigen dieser Elemente kann sich ändern, aber jede Konstante bezieht sich immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante mit einem Gleichheitszeichen (`=`) gefolgt von dem Wert, den Sie ihr geben möchten, einen Wert zuweisen.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird eine zufällige Zahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten werden jeweils verwendet, um eine Referenz auf die Ergebnissätze in unserem HTML zu speichern und Werte in die Sätze später im Code einzufügen (beachten Sie, wie sie sich in einem `<div>`-Element befinden, das selbst später ausgewählt wird, um alle drei beim Neustart zurückzusetzen):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Referenzen auf das Formulareingabefeld und den Übermittlungsbutton und werden verwendet, um das Einreichen der Vermutungen später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Zählung der Vermutungen von 1 (wird verwendet, um zu verfolgen, wie viele Vermutungen der Spieler hatte) und eine Referenz auf einen Reset-Button, den es noch nicht gibt (aber später geben wird).

> [!NOTE]
> Sie werden später im Kurs viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Speichern der benötigten Informationen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables).

### Funktionen

Als nächstes fügen Sie das Folgende unterhalb Ihres bisherigen JavaScript-Codes hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch es nicht notwendig ist, Code ständig zu wiederholen. Das ist wirklich nützlich. Es gibt eine Reihe von Möglichkeiten, Funktionen zu definieren, aber vorerst konzentrieren wir uns auf eine einfache Art. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` gefolgt von einem Namen mit Klammern danach verwenden. Daraufhin kommen zwei geschweifte Klammern (`{ }`), und in den geschweiften Klammern steht der gesamte Code, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Lassen Sie uns das jetzt ausprobieren. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken der <kbd>Return</kbd>/<kbd>Enter</kbd>-Taste sollten Sie eine Warnung sehen, die `Ich bin ein Platzhalter` anzeigt; wir haben eine Funktion in unserem Code definiert, die jedes Mal eine Warnung ausgibt, wenn wir sie aufrufen.

> [!NOTE]
> Sie werden viel mehr über Funktionen im späteren Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen.

### Operatoren

JavaScript-Operatoren ermöglichen es uns, Tests durchzuführen, mathematische Aufgaben auszuführen, Zeichenfolgen zusammenzufügen und dergleichen.

Wenn Sie Ihren Code noch nicht gespeichert haben, tun Sie das jetzt und aktualisieren Sie die Seite in Ihrem Browser. Öffnen Sie dann die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), und wir können die unten gezeigten Beispiele eingeben — geben Sie jedes Beispiel aus den "Beispiel"-Spalten genau so ein, wie sie dort stehen, und drücken Sie nach jedem <kbd>Return</kbd>/<kbd>Enter</kbd>, um zu sehen, welche Ergebnisse zurückgeliefert werden.

Sehen wir uns zunächst arithmetische Operatoren an, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige Abkürzungsoperatoren, die [zusammengesetzte Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) genannt werden. Wenn Sie zum Beispiel eine neue Zahl zu einer bestehenden hinzufügen und das Ergebnis zurückgeben möchten, können Sie das tun:

```js
let number1 = 1;
number1 += 2;
```

Dies entspricht

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir wahr/falsch Tests durchführen (zum Beispiel innerhalb von Konditionalen — siehe [unten](#bedingte_anweisungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Beispiel</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>Strikte Gleichheit (ist es genau gleich?)</td>
      <td>
        <pre class="brush: js">
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; Zahl versus Zeichenkette
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
2 !== '2' // true; Zahl versus Zeichenkette
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

### Textzeichenfolgen

Zeichenfolgen werden verwendet, um Text darzustellen. Wir haben bereits eine Zeichenfolgenvariable gesehen: Im folgenden Code ist `"Ich bin ein Platzhalter"` eine Zeichenfolge:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen die gleiche Form für den Anfang und das Ende einer einzigen Zeichenfolgendeklaration verwenden: Sie können nicht `"Ich bin ein Platzhalter'` schreiben.

Sie können Zeichenfolgen auch mit Backticks (`` ` ``) deklarieren. Solche Zeichenfolgen werden als _Template-Literale_ bezeichnet und haben einige spezielle Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke darin einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Zeichenfolgen zusammenzufügen.

### Bedingte Anweisungen

Zurück zu unserer `checkGuess()` Funktion denke ich, dass wir sagen können, dass wir nicht wollen, dass sie nur eine Platzhalternachricht ausspuckt. Wir wollen, dass sie überprüft, ob die Vermutung eines Spielers richtig ist oder nicht, und entsprechend reagiert.

Ersetzen Sie an dieser Stelle Ihre aktuelle `checkGuess()` Funktion durch diese Version:

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

Das ist eine Menge Code — puh! Gehen wir die einzelnen Abschnitte durch und erklären, was sie tun.

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der in das Textfeld eingegeben wurde. Wir führen diesen Wert auch durch den eingebauten `Number()` Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes treffen wir auf unseren ersten bedingten Codeblock. Ein bedingter Codeblock ermöglicht es Ihnen, Code selektiv auszuführen, je nachdem, ob eine bestimmte Bedingung zutrifft oder nicht. Er sieht ein wenig aus wie eine Funktion, ist es aber nicht. Die einfachste Form eines bedingten Blocks beginnt mit dem Schlüsselwort `if`, dann einigen Klammern, dann ein paar geschweiften Klammern. Innerhalb der Klammern führen wir einen Test durch. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir es nicht und fahren mit dem nächsten Code weiter. In diesem Fall testet der Test, ob die Variable `guessCount` gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn es das ist, setzen wir den Textinhalt des `guesses`-Paragraphen auf `Vorherige Vermutungen:`. Wenn nicht, tun wir es nicht.

- Als nächstes verwenden wir ein Template-Literal, um den aktuellen `userGuess`-Wert am Ende des `guesses`-Paragraphen mit einem Leerzeichen dazwischen hinzuzufügen.
- Der nächste Block führt einige Prüfungen durch:

  - Die erste `if (){ }`-Anweisung prüft, ob die Vermutung des Benutzers gleich der zu Beginn unseres JavaScript festgelegten `randomNumber` ist. Wenn dem so ist, hat der Spieler richtig geraten und das Spiel ist gewonnen. Daher zeigen wir dem Spieler eine Gratulationsnachricht in einem schönen grünen Ton an, löschen den Inhalt des Informationskastens "Zu niedrig/Zu hoch" und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen werden.
  - Nun haben wir einen weiteren Test an das Ende der letzten angekettet, mit einer `else if (){ }`-Struktur. Diese prüft, ob das der letzte Zug des Benutzers ist. Wenn es so ist, tut das Programm das Gleiche wie im vorherigen Block, allerdings mit einer Nachricht, dass das Spiel vorbei ist, anstelle einer Gratulationsnachricht.
  - Der letzte Block, der an das Ende dieses Codes angekettet ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keines der anderen beiden Tests `true` zurückgibt (d.h. der Spieler hat nicht richtig geraten, aber er hat noch mehr Versuche). In diesem Fall sagen wir ihnen, dass sie falsch liegen. Dann führen wir einen weiteren bedingten Test durch, um zu überprüfen, ob die Vermutung höher oder niedriger als die Antwort war und zeigen eine entsprechende Nachricht, um ihnen höher oder niedriger zu sagen.

- Die letzten drei Zeilen in der Funktion machen uns bereit für den nächsten Versuch. Wir erhöhen die `guessCount`-Variable um 1, sodass der Spieler seinen Zug verbraucht (`++` ist eine Inkrement-Operation — Erhöhung um 1), und leeren den Wert aus dem Formulareingabefeld und fokussieren es erneut, bereit für die nächste Eingabe.

### Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir, dass sie aufgerufen wird, wenn der "Vermutung absenden"-Button gedrückt wird. Dafür müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Button wird geklickt, eine Seite wird geladen, ein Video wird abgespielt, usw. — und auf die wir Codeblocks reagieren lassen können. **Ereignislistener** beobachten spezifische Ereignisse und rufen **Ereignishandler** auf, welche die Blöcke von Code sind, die als Reaktion auf ein ausgelöstes Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unterhalb Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `submitGuess`-Button einen Ereignislistener hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) erfordert — die Art des Ereignisses, auf das wir warten (in diesem Fall `click`) als Zeichenfolge, und den Code, den wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall die `checkGuess()`-Funktion). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb des [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden.

Speichern und aktualisieren Sie jetzt Ihren Code und Ihr Beispiel sollte — bis zu einem bestimmten Punkt — funktionieren. Das einzige Problem jetzt ist, dass, wenn Sie die richtige Antwort erraten oder keine Vermutungen mehr haben, das Spiel nicht mehr funktioniert, da wir die `setGameOver()`-Funktion, die ausgeführt werden soll, wenn das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns unseren fehlenden Code jetzt hinzufügen und die Beispiel-Funktionalität abschließen.

### Abschließen der Spielfunktionalität

Lassen Sie uns die `setGameOver()`-Funktion am Ende unseres Codes hinzufügen und sie dann durchgehen. Fügen Sie dies nun unterhalb des restlichen JavaScripts hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Formulareingabefeld und den Button, indem sie ihre deaktivierten Eigenschaften auf `true` setzen. Das ist notwendig, denn wenn wir das nicht tun, könnte der Benutzer nach dem Ende des Spiels weitere Vermutungen abgeben, was die Dinge durcheinander bringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen dessen Textbeschriftung auf "Neues Spiel starten" und fügen es dem unteren Teil unseres bestehenden HTML-Codes hinzu.
- Die letzte Zeile setzt einen Ereignislistener auf unseren neuen Button, sodass bei einem Klick darauf eine Funktion namens `resetGame()` ausgeführt wird.

Nun müssen wir auch diese Funktion definieren! Fügen Sie den folgenden Code erneut am Ende Ihres JavaScripts hinzu:

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

Dieser recht lange Codeblock setzt alles vollständig zurück, wie es zu Beginn des Spiels war, damit der Spieler eine weitere Chance bekommt. Er:

- Setzt den `guessCount` wieder auf 1.
- Löscht den gesamten Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb `<div class="resultParas"></div>`, dann durchlaufen wir jeden und setzen ihren `textContent` auf `''` (eine leere Zeichenfolge).
- Entfernt den Neustart-Button aus unserem Code.
- Aktiviert die Formularelemente, leert das Textfeld und fokussiert es, bereit für die Eingabe einer neuen Vermutung.
- Entfernt die Hintergrundfarbe aus dem `lastResult`-Absatz.
- Generiert eine neue Zufallszahl, damit Sie nicht einfach die gleiche Zahl erraten!

**An diesem Punkt sollten Sie ein vollständig funktionierendes (einfaches) Spiel haben — Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, über einige andere wichtige Code-Funktionen zu sprechen, die Sie bereits gesehen haben, obwohl Sie es möglicherweise nicht realisiert haben.

### Schleifen

Ein Teil des obigen Codes, den wir uns genauer ansehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Um zu beginnen, gehen Sie erneut zu Ihrer [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'Äpfel', 'Bananen', 'Kirschen'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['Äpfel', 'Bananen', 'Kirschen'];` erstellt ein Array. Wir werden später in diesem Modul [ein vollständiges Arrays-Tutorial](/de/docs/Learn_web_development/Core/Scripting/Arrays) durcharbeiten, aber fürs Erste: Ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of`-Schleife gibt Ihnen eine Möglichkeit, jedes Element im Array zu erhalten und einige JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie sich das erste Element in `fruits`.
2. Setzen Sie die Variable `fruit` auf dieses Element, dann führen Sie den Code zwischen den `{}` geschweiften Klammern aus.
3. Holen Sie sich das nächste Element in `fruits` und wiederholen Sie Punkt 2, bis Sie das Ende von `fruits` erreichen.

In diesem Fall schreibt der Code innerhalb der geschweiften Klammern `fruit` in die Konsole.

Schauen wir uns nun die Schleife in unserem Zahlenratespiel an — das Folgende kann innerhalb der `resetGame()`-Funktion gefunden werden:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb `<div class="resultParas">` enthält, mit der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)-Methode, dann durchläuft er jeden und entfernt den Textinhalt von jedem.

Beachten Sie, dass selbst wenn `resetPara` eine Konstante ist, wir ihre internen Eigenschaften wie `textContent` ändern können.

### Eine kurze Diskussion über Objekte

Lassen Sie uns noch eine finale Verbesserung hinzufügen, bevor wir zu dieser Diskussion gelangen. Fügen Sie die folgende Zeile direkt unterhalb der Zeile `let resetButton;` nahe der Spitze Ihres JavaScripts hinzu und speichern Sie dann Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um den Text-Cursor automatisch in das {{htmlelement("input")}}-Textfeld zu setzen, sobald die Seite geladen wird. Das bedeutet, dass der Benutzer sofort seine erste Vermutung eingeben kann, ohne zuerst das Formularfeld anklicken zu müssen. Es ist nur eine kleine Ergänzung, verbessert jedoch die Benutzerfreundlichkeit — gibt dem Benutzer einen guten visuellen Hinweis darauf, was er tun muss, um das Spiel zu spielen.

Analysieren wir, was hier im Detail passiert. In JavaScript sind die meisten der von Ihnen im Code manipulierten Dinge Objekte. Ein Objekt ist eine Sammlung verwandter Funktionen, die in einer einzigen Gruppierung gespeichert werden. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten und wir werden nicht vor dem späteren Kurs darauf eingehen. Vorerst besprechen wir nur die eingebauten Objekte, die Ihr Browser enthält und die Ihnen erlauben, viele nützliche Dinge zu tun.

In diesem speziellen Fall haben wir zuerst eine `guessField`-Konstante erstellt, die eine Referenz auf das Texteinformfeld in unserem HTML speichert — die folgende Zeile kann weiter oben im Code gefunden werden:

```js
const guessField = document.querySelector(".guessField");
```

Um diese Referenz zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode des [`document`](/de/docs/Web/API/Document)-Objekts verwendet. `querySelector()` nimmt ein Stück Information — einen [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), der das Element auswählt, zu dem Sie eine Referenz erhalten möchten.

Da `guessField` nun eine Referenz zu einem {{htmlelement("input")}}-Element enthält, hat es jetzt Zugriff auf eine Reihe von Eigenschaften (im Grunde in Objekten gespeicherte Variablen, von denen einige nicht geändert werden können) und Methoden (im Grunde in Objekten gespeicherte Funktionen). Eine verfügbare Methode für Eingabeelemente ist `focus()`, sodass wir jetzt diese Zeile verwenden können, um den Text in den Vordergrund zu rücken:

```js
guessField.focus();
```

Variablen, die keine Referenzen zu Formularelementen enthalten, haben `focus()` nicht verfügbar. Zum Beispiel enthält die `guesses`-Konstante eine Referenz zu einem {{htmlelement("p")}}-Element, und die `guessCount`-Variable enthält eine Zahl.

### Spielen mit Browserobjekten

Lassen Sie uns ein wenig mit Browserobjekten spielen.

1. Öffnen Sie zuerst Ihr Programm in einem Browser.
2. Öffnen Sie anschließend Ihre [Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass die JavaScript-Konsole geöffnet ist.
3. Tippen Sie `guessField` in die Konsole ein, und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}}-Element enthält. Ihnen wird auch auffallen, dass die Konsole die Namen von Objekten, die in der Ausführungsumgebung vorhanden sind, automatisch vervollständigt, einschließlich Ihrer Variablen!
4. Geben Sie jetzt Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value`-Eigenschaft stellt den aktuell eingegebenen Wert im Textfeld dar. Sie werden sehen, dass Sie durch Eingabe dieses Befehls den Text im Textfeld geändert haben!

5. Tippen Sie nun in der Konsole `guesses` ein und drücken <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Ihrer Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}}-Element enthält.
6. Geben Sie nun die folgende Zeile ein:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, da Absätze die `value`-Eigenschaft nicht haben.

7. Um den Text innerhalb eines Absatzes zu ändern, benötigen Sie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft. Probieren Sie dies aus:

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. Jetzt für ein paar lustige Sachen. Versuchen Sie, die folgenden Zeilen nacheinander einzugeben:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite hat eine `style`-Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle Inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dies ermöglicht es uns, dynamisch neue CSS-Stile auf Elemente mit JavaScript anzuwenden.

## Zusammenfassung

Das war's für den Bau des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Probieren Sie Ihren endgültigen Code aus, oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihre Version des Beispiels nicht zum Laufen bekommen können, überprüfen Sie sie gegen den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion kann auch helfen — in ihr besprechen wir, was beim Schreiben von JavaScript-Code schiefgehen kann, wobei wir auf das "Zahlenraten"-Spiel im Prozess zurückblicken.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
