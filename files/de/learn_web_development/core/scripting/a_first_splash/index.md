---
title: Ein erster Einblick in JavaScript
short-title: JavaScript walkthrough
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Nachdem Sie etwas über die Theorie von JavaScript und dessen Einsatzmöglichkeiten gelernt haben, möchten wir Ihnen einen Einblick in den Prozess der Erstellung eines einfachen JavaScript-Programms geben, indem wir Sie durch ein praktisches Tutorial führen. Hier werden Sie schrittweise ein einfaches "Errate die Zahl"-Spiel erstellen.

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
          <li>Erfahrung im Schreiben von JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels erlernen oder auch nur den gesamten Code verstehen, den wir Sie bitten zu schreiben. Stattdessen möchten wir Ihnen einen Eindruck vermitteln, wie die Funktionen von JavaScript zusammenwirken und wie sich das Schreiben von JavaScript anfühlt. In den folgenden Artikeln werden Sie alle hier gezeigten Funktionen in viel mehr Detail durchgehen, also machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Codefunktionen, die Sie in JavaScript sehen werden, sind identisch mit denen in anderen Programmiersprachen — Funktionen, Schleifen usw. Die Code-Syntax sieht anders aus, aber die Konzepte sind weitgehend die gleichen.

## Denken wie ein Programmierer

Eine der schwierigsten Lernaufgaben in der Programmierung ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie diese anwenden, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — dies beinhaltet in der Regel das Anschauen von Beschreibungen, was Ihr Programm tun muss, das Erarbeiten, welche Codefunktionen notwendig sind, um diese Dinge zu erreichen, und wie man sie zum Laufen bringt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — plus ein bisschen Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln, aber wir werden Ihnen im Laufe des Kurses viele Gelegenheiten geben, wie ein Programmierer zu denken.

In diesem Sinne, lassen Sie uns das Beispiel ansehen, das wir in diesem Artikel aufbauen werden, und den allgemeinen Prozess des Zerteilens in greifbare Aufgaben überprüfen.

## Beispiel — Errate das Zahlenspiel

In diesem Artikel werden wir Ihnen zeigen, wie Sie das einfache Spiel aufbauen, das Sie unten sehen können:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Probieren Sie es aus — machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen Sie sich vor, Ihr Chef hat Ihnen die folgende kurze Anleitung zur Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "Errate die Zahl"-Art Spiel erstellen. Es soll eine zufällige Zahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt und wenn er falsch liegt, ob der Tipp zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig rät oder keine Versuche mehr übrig hat. Wenn das Spiel endet, sollte dem Spieler die Möglichkeit gegeben werden, erneut zu spielen.

Beim Betrachten dieser Anleitung, können wir als erstes damit beginnen, sie in einfache, umsetzbare Aufgaben zu unterteilen, so weit es möglich ist, mit der Denkweise eines Programmierers:

1. Erzeugen Sie eine zufällige Zahl zwischen 1 und 100.
2. Notieren Sie die Zugnummer, bei der sich der Spieler befindet. Beginnen Sie mit der Zahl 1.
3. Geben Sie dem Spieler eine Möglichkeit, zu raten, was die Zahl ist.
4. Sobald ein Tipp abgegeben wurde, notieren Sie ihn zuerst irgendwo, damit der Benutzer seine vorherigen Tipps sehen kann.
5. Überprüfen Sie als nächstes, ob es die richtige Zahl ist.
6. Wenn es korrekt ist:

   1. Zeigen Sie eine Glückwunschnachricht an.
   2. Verhindern Sie, dass der Spieler weitere Tipps eingeben kann (das würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die es dem Spieler erlaubt, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Versuche übrig hat:

   1. Sagen Sie dem Spieler, dass er falsch liegt und ob sein Tipp zu hoch oder zu niedrig war.
   2. Ermöglichen Sie ihm, einen weiteren Tipp abzugeben.
   3. Erhöhen Sie die Zugnummer um 1.

8. Wenn es falsch ist und der Spieler keine Versuche mehr hat:

   1. Sagen Sie dem Spieler, dass das Spiel vorbei ist.
   2. Verhindern Sie, dass der Spieler weitere Tipps eingeben kann (das würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die es dem Spieler erlaubt, das Spiel neu zu starten.

9. Wenn das Spiel neu startet, stellen Sie sicher, dass die Spiellogik und das UI vollständig zurückgesetzt sind und beginnen Sie dann mit Schritt 1.

Lassen Sie uns nun weitermachen und sehen, wie wir diese Schritte in Code umsetzen können, indem wir das Beispiel aufbauen und die JavaScript-Funktionen erkunden, während wir gehen.

### Erste Einrichtung

Um dieses Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie es sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, einen Absatz mit Anweisungen und ein Formular zur Eingabe eines Rates, aber das Formular wird derzeit nichts tun.

Der Ort, an dem wir unseren gesamten Code hinzufügen werden, befindet sich im {{htmlelement("script")}}-Element am unteren Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zur Speicherung unserer Daten

Lassen Sie uns loslegen. Fügen Sie zuerst die folgenden Zeilen in Ihr {{htmlelement("script")}}-Element ein:

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

Variablen sind im Grunde Namen für Werte (wie Zahlen oder Textstrings). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nach der Festlegung nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente könnte sich ändern, aber jede Konstante bezieht sich immer auf dasselbe HTML-Element, dem es initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variable oder Konstante einen Wert mit einem Gleichheitszeichen (`=`) zuweisen, gefolgt von dem Wert, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird mit einer zufälligen Zahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten speichern jeweils einen Verweis auf die Ergebnis-Absätze in unserem HTML und werden verwendet, um später im Code Werte in die Absätze einzufügen (beachten Sie, wie sie sich innerhalb eines `<div>`-Elements befinden, das selbst später zum Zurücksetzen ausgewählt wird, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Referenzen zum Formulareingabetext und zum Absende-Button und werden verwendet, um das Absenden des Rates später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Rate von 1 (verwendet, um zu verfolgen, wie viele Raten der Spieler hatte) und einen Verweis auf einen Zurücksetz-Button, der noch nicht existiert (aber später wird).

> [!NOTE]
> Sie werden viel mehr über Variablen und Konstanten später im Kurs lernen, beginnend mit dem Artikel [Speichern der benötigten Informationen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables).

### Funktionen

Als Nächstes fügen Sie das Folgende unterhalb Ihres vorherigen JavaScripts hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, sodass Sie nicht ständig Code wiederholen müssen. Das ist wirklich nützlich. Es gibt eine Reihe von Möglichkeiten, Funktionen zu definieren, aber vorerst konzentrieren wir uns auf einen einfachen Typ. Hier haben wir eine Funktion durch das Schlüsselwort `function` definiert, gefolgt von einem Namen mit nachfolgenden Klammern. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern geht der gesamte Code, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Lassen Sie uns das jetzt ausprobieren. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollte eine Alert-Nachricht erscheinen, die `I am a placeholder` sagt; wir haben eine Funktion in unserem Code definiert, die eine Alert-Nachricht erstellt, wann immer wir sie aufrufen.

> [!NOTE]
> Sie werden viel mehr über Funktionen später in dem Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen.

### Operatoren

JavaScript-Operatoren ermöglichen es uns, Tests durchzuführen, Mathematik zu betreiben, Zeichenfolgen zusammenzufügen und ähnliche Dinge.

Wenn Sie es noch nicht getan haben, speichern Sie Ihren Code, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools). Dann können wir die unten gezeigten Beispiele ausprobieren — geben Sie jedes Beispiel aus den "Example"-Spalten genau so ein, wie sie gezeigt werden, drücken Sie nach jedem <kbd>Return</kbd>/<kbd>Enter</kbd> und sehen Sie, welche Ergebnisse sie zurückgeben.

Zuerst schauen wir uns arithmetische Operatoren an, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige Schnelloperatoren, die als [Kombinatorische Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) bekannt sind. Zum Beispiel, wenn Sie eine neue Zahl zu einer bestehenden hinzufügen und das Ergebnis zurückgeben möchten, könnten Sie dies tun:

```js
let number1 = 1;
number1 += 2;
```

Dies ist gleichbedeutend mit

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir True/False-Tests durchführen (zum Beispiel innerhalb von Bedingungen — siehe [unten](#bedingte_anweisungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

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
2 === '2' // false; Zahl versus Zeichenkette
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>!==</code></td>
      <td>Ungleichheit (ist es nicht das Gleiche?)</td>
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

### Textstrings

Strings werden zur Darstellung von Text verwendet. Wir haben bereits eine String-Variable gesehen: Im folgenden Code ist `"I am a placeholder"` ein String:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Strings mit Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen die gleiche Form für den Anfang und das Ende einer einzigen String-Deklaration verwenden: Sie können nicht `"I am a placeholder'` schreiben.

Sie können auch Strings mit backticks (`` ` ``) deklarieren. Strings, die so deklariert werden, werden _Template Literals_ genannt und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in ihnen einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies bietet Ihnen einen Mechanismus, um Strings zu verbinden.

### Bedingte Anweisungen

Zurück zu unserer `checkGuess()`-Funktion, denke ich, dass es sicher ist zu sagen, dass wir nicht möchten, dass sie nur eine Platzhalternachricht ausgibt. Wir möchten, dass sie überprüft, ob ein Spielertipp korrekt ist oder nicht, und entsprechend reagiert.

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

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Textfeld eingegeben wurde. Wir führen diesen Wert auch durch den integrierten `Number()`-Konstruktor, um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes stoßen wir auf unseren ersten bedingten Codeblock. Ein bedingter Codeblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Es sieht ein bisschen wie eine Funktion aus, ist es aber nicht. Die einfachste Form des bedingten Blocks beginnt mit dem Schlüsselwort `if`, dann ein paar Klammern, dann ein paar geschweifte Klammern. In die Klammern schreiben wir einen Test. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir es nicht und fahren mit dem nächsten Codeabschnitt fort. In diesem Fall testet der Test, ob die Variable `guessCount` gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn es so ist, setzen wir den Textinhalt des Guess-Paragrafen auf `Previous guesses:`. Wenn nicht, tun wir das nicht.

- Als nächstes verwenden wir ein Template Literal, um den aktuellen `userGuess`-Wert an das Ende des `guesses`-Paragrafen anzufügen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Prüfungen durch:

  - Das erste `if (){ }` prüft, ob der Benutzertipp gleich der `randomNumber` ist, die oben in unserem JavaScript gesetzt wurde. Wenn ja, hat der Spieler richtig geraten und das Spiel ist gewonnen, sodass wir dem Spieler eine Glückwunschnachricht in einer schönen grünen Farbe anzeigen, den Inhalt der Box für niedrige/hohe Tipps löschen und eine Funktion namens `setGameOver()` ausführen, die wir später besprechen werden.
  - Nun haben wir einen weiteren Test an das Ende des letzten Blocks mit einer `else if (){ }`-Struktur verknüpft. Dieser prüft, ob dieser Zug der letzte Zug des Benutzers ist. Wenn ja, führt das Programm das Gleiche wie im vorherigen Block aus, außer mit einer Game-Over-Nachricht anstelle einer Glückwunschnachricht.
  - Der letzte Block, der an das Ende dieses Codes gekettet ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests `true` zurückgibt (d.h. der Spieler hat nicht richtig geraten, aber er hat noch mehr Raten übrig). In diesem Fall sagen wir ihm, dass er falsch liegt, und führen dann einen weiteren bedingten Test durch, um zu überprüfen, ob der Tipp höher oder niedriger als die Antwort war, und zeigen eine weitere Nachricht entsprechend an, die ihm höher oder niedriger sagt.

- Die letzten drei Zeilen in der Funktion machen uns bereit für die nächste Abgabe eines Rates. Wir addieren 1 zur Variablen `guessCount`, damit der Spieler seinen Zug aufbraucht (`++` ist eine Inkrementoperation — Erhöhung um 1), und leeren den Wert aus dem Formulareingabetextfeld und setzen den Fokus erneut darauf, damit der nächste Tipp eingegeben werden kann.

### Ereignisse

An dieser Stelle haben wir eine gut implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, da wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn der "Submit guess"-Button gedrückt wird, und dazu müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Button wird geklickt, eine Seite wird geladen, ein Video wird abgespielt usw. — auf die wir mit einem Codeblock reagieren können. **Ereignis-Listener** beobachten bestimmte Ereignisse und rufen **Ereignis-Handler** auf, das sind Codeblöcke, die ausgeführt werden, wenn ein Ereignis ausgelöst wird.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit`-Button einen Ereignis-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (Argumente) annimmt — den Typ des Ereignisses, auf das wir achten (in diesem Fall `click`) als Zeichenkette und den Code, den wir ausführen möchten, wenn das Ereignis eintritt (in diesem Fall die Funktion `checkGuess()`). Beachten Sie, dass wir nicht die Klammern angeben müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie, Ihren Code jetzt zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem Punkt. Das einzige Problem ist jetzt, dass wenn Sie die richtige Antwort erraten oder keine Raten mehr haben, das Spiel kaputt geht, da wir die `setGameOver()`-Funktion, die nach dem Ende des Spiels ausgeführt werden soll, noch nicht definiert haben. Lassen Sie uns unseren fehlenden Code jetzt hinzufügen und die Funktionsfähigkeit des Beispiels abschließen.

### Fertigstellung der Spielfunktionalität

Lassen Sie uns die `setGameOver()`-Funktion am Ende unseres Codes hinzufügen und dann durchgehen. Fügen Sie sie jetzt unten in Ihrem JavaScript hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Formular-Textfeld und den Button, indem sie ihre `disabled`-Eigenschaften auf `true` setzen. Das ist notwendig, denn wenn wir es nicht tun, könnte der Benutzer nach dem Ende des Spiels weitere Raten abgeben, was alles durcheinander bringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen sein Textlabel auf "Start new game" und fügen es am unteren Rand unseres bestehenden HTML ein.
- Die letzte Zeile setzt einen Ereignis-Listener auf unseren neuen Button, sodass beim Klicken eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir auch diese Funktion definieren! Fügen Sie den folgenden Code wieder am Ende Ihres JavaScripts hinzu:

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

Dieser ziemlich lange Codeblock setzt alles wieder auf den Stand zurück, wie es zu Beginn des Spiels war, sodass der Spieler eine weitere Chance hat. Es:

- Setzt die `guessCount` wieder auf 1.
- Leert den gesamten Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb `<div class="resultParas"></div>` aus, dann durchlaufen wir jeden einzelnen und setzen ihre `textContent` auf `''` (eine leere Zeichenkette).
- Entfernt den Zurücksetz-Button aus unserem Code.
- Aktiviert die Formularelemente und leert und fokussiert das Textfeld, bereit für einen neuen Tipp.
- Entfernt die Hintergrundfarbe des `lastResult`-Absatzes.
- Erzeugt eine neue Zufallszahl, sodass Sie nicht einfach die gleiche Zahl noch einmal erraten!

**An diesem Punkt sollten Sie ein voll funktionierendes (einfaches) Spiel haben — Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist, über ein paar andere wichtige Codefunktionen zu sprechen, die Sie bereits gesehen haben, obwohl Sie es vielleicht noch nicht bemerkt haben.

### Schleifen

Ein Teil des obigen Codes, den wir uns genauer ansehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Um damit zu beginnen, gehen Sie erneut zu Ihren [JavaScript-Entwicklerwerkzeugen im Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erzeugt ein Array. Wir werden später in diesem Modul [ein komplettes Arrays-Tutorial](/de/docs/Learn_web_development/Core/Scripting/Arrays) durchgehen, aber vorerst: Ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of` Schleife gibt Ihnen eine Möglichkeit, jedes Element im Array zu holen und JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie das erste Element in `fruits`.
2. Setzen Sie die Variable `fruit` auf dieses Element, und führen Sie den Code zwischen den geschweiften Klammern `{}` aus.
3. Holen Sie das nächste Element in `fruits`, und wiederholen Sie Schritt 2, bis Sie das Ende von `fruits` erreicht haben.

In diesem Fall schreibt der Code innerhalb der geschweiften Klammern `fruit` in die Konsole.

Nun schauen wir uns die Schleife in unserem Zahlenspiel an — das folgende kann in der `resetGame()`-Funktion gefunden werden:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb `<div class="resultParas">` mithilfe der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)-Methode enthält, dann durchläuft er jeden einzelnen und entfernt den Textinhalt jedes.

Beachten Sie, dass, obwohl `resetPara` eine Konstante ist, wir seine internen Eigenschaften wie `textContent` ändern können.

### Eine kleine Diskussion über Objekte

Lassen Sie uns noch eine letzte Verbesserung hinzufügen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile direkt unter der Linie `let resetButton;` in Ihrem JavaScript hinzu und speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, um automatisch den Text-Cursor in das {{htmlelement("input")}}-Textfeld zu setzen, sobald die Seite geladen wird, was bedeutet, dass der Benutzer sofort anfangen kann, seinen ersten Tipp einzugeben, ohne erst auf das Formularfeld klicken zu müssen. Es ist nur eine kleine Ergänzung, aber sie verbessert die Benutzerfreundlichkeit — sie gibt dem Benutzer einen guten visuellen Hinweis darauf, was er tun muss, um das Spiel zu spielen.

Analysieren wir, was hier im Detail vor sich geht. In JavaScript sind die meisten Artikel, die Sie in Ihrem Code manipulieren, Objekte. Ein Objekt ist eine Zusammenstellung verwandter Funktionen, die in einer einzelnen Gruppierung gespeichert sind. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten und wir werden das erst viel später im Kurs behandeln. Vorerst werden wir nur kurz über die eingebauten Objekte sprechen, die Ihr Browser enthält und die es Ihnen ermöglichen, viele nützliche Dinge zu tun.

In diesem speziellen Fall haben wir zuerst eine Konstante `guessField` erzeugt, die einen Verweis auf das Text-Eingabeformularfeld in unserem HTML speichert — die folgende Zeile kann sich unter unseren Deklarationen nahe der Spitze des Codes befinden:

```js
const guessField = document.querySelector(".guessField");
```

Um diesen Verweis zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode des [`document`](/de/docs/Web/API/Document)-Objekts verwendet. `querySelector()` benötigt eine Eingabeinformation — einen [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), der das Element auswählt, auf das Sie einen Verweis haben möchten.

Da `guessField` nun einen Verweis auf ein {{htmlelement("input")}}-Element enthält, hat es nun Zugriff auf eine Reihe von Eigenschaften (im Grunde genommen Variablen, die innerhalb von Objekten gespeichert sind, von denen einige ihre Werte nicht geändert werden können) und Methoden (im Grunde genommen Funktionen, die innerhalb von Objekten gespeichert sind). Eine Methode, die für Eingabeelemente verfügbar ist, ist `focus()`, sodass wir nun diese Zeile verwenden können, um den Textfokus zu setzen:

```js
guessField.focus();
```

Variablen, die keine Verweise auf Formularelemente enthalten, werden `focus()` nicht zur Verfügung haben. Zum Beispiel enthält die Konstante `guesses` einen Verweis auf ein {{htmlelement("p")}}-Element, und die Variable `guessCount` enthält eine Zahl.

### Spielen mit Browserobjekten

Lassen Sie uns ein bisschen mit einigen Browserobjekten spielen.

1. Öffnen Sie zuerst Ihr Programm in einem Browser.
2. Öffnen Sie als nächstes Ihre [JavaScript-Entwicklerwerkzeuge im Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass die JavaScript-Konsole geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}}-Element enthält. Sie werden auch feststellen, dass die Konsole die Namen der Objekte, die in der Ausführungsumgebung existieren, einschließlich Ihrer Variablen, automatisch vervollständigt!
4. Geben Sie nun Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value`-Eigenschaft repräsentiert den aktuellen Wert, der in das Textfeld eingegeben wurde. Sie werden sehen, dass wir durch das Eingeben dieses Befehls den Text im Textfeld geändert haben!

5. Versuchen Sie nun, `guesses` in die Konsole einzugeben und dann <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur) zu drücken. Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}}-Element enthält.
6. Versuchen Sie nun, die folgende Zeile einzugeben:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, da Absätze nicht die `value`-Eigenschaft haben.

7. Um den Text innerhalb eines Absatzes zu ändern, benötigen Sie die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft stattdessen. Versuchen Sie dies:

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. Nun zu einigen lustigen Sachen. Versuchen Sie, die folgenden Zeilen nacheinander einzugeben:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite hat eine `style`-Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle im Inline-CSS-Stile auf das Element angewendeten Styles enthalten. Dies erlaubt es uns, dynamisch neue CSS-Stile auf Elemente mithilfe von JavaScript zu setzen.

## Zusammenfassung

Das wäre es also für die Erstellung des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Probieren Sie Ihren endgültigen Code aus oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihre Version des Beispiels nicht zum Laufen bringen können, überprüfen Sie sie gegen den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion kann auch helfen — darin wird diskutiert, was beim Schreiben von JavaScript-Code schiefgehen kann, indem auf das "Erraten Sie die Zahl"-Spiel im Prozess Bezug genommen wird.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
