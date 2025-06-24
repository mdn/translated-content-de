---
title: Ein erster Einblick in JavaScript
short-title: JavaScript Einführungen
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Jetzt, da Sie etwas über die Theorie von JavaScript und dessen Anwendungsmöglichkeiten gelernt haben, möchten wir Ihnen einen Eindruck davon vermitteln, wie der Prozess zur Erstellung eines einfachen JavaScript-Programms ist, indem wir Sie durch ein praktisches Tutorial führen. Hier entwickeln Sie Schritt für Schritt ein einfaches Zahlenratespiel.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Denken wie ein Programmierer.</li>
          <li>Erfahrungen sammeln, wie es ist, JavaScript zu schreiben.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Sie müssen nicht bis zum Ende dieses Artikels JavaScript gelernt haben oder sogar den gesamten Code verstehen, den wir Sie auffordern zu schreiben. Stattdessen möchten wir Ihnen einen Eindruck davon vermitteln, wie die Funktionen von JavaScript zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen noch viel detaillierter wiedersehen, also machen Sie sich keine Sorgen, wenn Sie nicht sofort alles verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen, sind dieselben wie in anderen Programmiersprachen — Funktionen, Schleifen usw. Die Syntax des Codes sieht unterschiedlich aus, aber die Konzepte sind weitgehend dieselben.

## Denken wie ein Programmierer

Eines der schwersten Dinge beim Programmieren zu lernen, ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie diese anwenden, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — dies umfasst normalerweise das Analysieren von Beschreibungen, was Ihr Programm tun muss, das Ermitteln, welche Code-Funktionen erforderlich sind, um dies zu erreichen, und wie man sie miteinander arbeiten lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — plus einer Portion Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht garantieren, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln werden, aber wir werden Ihnen im Laufe des Kurses viele Gelegenheiten geben, wie ein Programmierer zu denken.

Mit diesem Wissen wollen wir uns das Beispiel ansehen, das wir in diesem Artikel entwickeln werden, und den allgemeinen Prozess der Zerlegung in greifbare Aufgaben überprüfen.

## Beispiel — Guess the number Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie ein einfaches Spiel aufbauen können, das Sie unten sehen können:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Versuchen Sie es zu spielen — machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen Sie sich vor, Ihr Chef hat Ihnen die folgende Vorgabe für die Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches Spiel vom Typ "Zahlenraten" erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und den Spieler dann herausfordern, die Zahl in 10 Zügen zu erraten. Nach jedem Zug sollte der Spieler erfahren, ob er richtig oder falsch liegt, und ob falsch, ob die Vermutung zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig rät oder keine Züge mehr hat. Wenn das Spiel endet, sollte dem Spieler die Möglichkeit gegeben werden, erneut zu spielen.

Wenn wir uns diese Vorgabe ansehen, können wir als Erstes beginnen, sie in einfache umsetzbare Aufgaben zu unterteilen, so weit wie möglich aus der Sichtweise eines Programmierers:

1. Generieren Sie eine Zufallszahl zwischen 1 und 100.
2. Erfassen Sie die Zuggnummer, auf der sich der Spieler befindet. Beginnen Sie mit 1.
3. Bieten Sie dem Spieler eine Möglichkeit, die Zahl zu erraten.
4. Sobald eine Vermutung eingereicht wurde, speichern Sie sie zunächst irgendwo, damit der Benutzer seine vorherigen Vermutungen sehen kann.
5. Überprüfen Sie als Nächstes, ob es sich um die korrekte Zahl handelt.
6. Falls korrekt:

   1. Zeigen Sie eine Glückwunschnachricht an.
   2. Verhindern Sie, dass der Spieler weitere Vermutungen eingeben kann (das würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die dem Spieler das Neustarten des Spiels ermöglicht.

7. Wenn es falsch ist und der Spieler noch Züge hat:

   1. Sagen Sie dem Spieler, dass er falsch liegt und ob seine Vermutung zu hoch oder zu niedrig war.
   2. Erlauben Sie ihm, eine weitere Vermutung zu äußern.
   3. Erhöhen Sie die Zuggnummer um 1.

8. Wenn es falsch ist und der Spieler keine Züge mehr hat:

   1. Sagen Sie dem Spieler, dass das Spiel vorbei ist.
   2. Verhindern Sie, dass der Spieler weitere Vermutungen eingeben kann (das würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die dem Spieler das Neustarten des Spiels ermöglicht.

9. Nachdem das Spiel neu gestartet wurde, stellen Sie sicher, dass die Spiellogik und die Benutzeroberfläche vollständig zurückgesetzt werden, und gehen Sie dann zurück zu Schritt 1.

Lassen Sie uns jetzt weitermachen und uns ansehen, wie wir diese Schritte in Code umsetzen können, das Beispiel weiter aufbauen und JavaScript-Funktionen dabei erkunden.

### Erste Einrichtung

Um mit diesem Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es sich hier live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie es sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Derzeit sehen Sie eine einfache Überschrift, einen Anleitungsabsatz und ein Formular zur Eingabe eines Tipps, aber das Formular wird derzeit nichts tun.

Der Platz, an dem wir unseren gesamten Code hinzufügen, befindet sich innerhalb des {{htmlelement("script")}}-Elements am unteren Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zur Speicherung unserer Daten

Lassen Sie uns anfangen. Fügen Sie zunächst die folgenden Zeilen in Ihr {{htmlelement("script")}}-Element ein:

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

Dieser Abschnitt des Codes richtet die Variablen und Konstanten ein, die wir zum Speichern der Daten benötigen, die unser Programm verwenden wird.

Variablen sind im Grunde Namen für Werte (wie Zahlen oder Textzeichenfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let` gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls verwendet, um Werten Namen zu geben, aber im Gegensatz zu Variablen können Sie den Wert nach der Festlegung nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Verweise auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente kann sich ändern, aber jede Konstante verweist immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const` gefolgt von einem Namen für die Konstante.

Sie können Ihrer Variablen oder Konstanten einen Wert zuweisen, indem Sie ein Gleichheitszeichen (`=`) gefolgt von dem Wert, den Sie ihm geben möchten, verwenden.

In unserem Beispiel:

- Der ersten Variablen — `randomNumber` — wird eine Zufallszahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten werden jeweils zur Speicherung eines Verweises auf die Ergebnis-Absätze in unserem HTML verwendet und werden später im Code verwendet, um Werte in die Absätze einzufügen (beachten Sie, dass sie sich in einem `<div>`-Element befinden, das selbst verwendet wird, um alle drei später beim Zurücksetzen auszuwählen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Verweise auf das Textformular-Eingabefeld und die Absenden-Schaltfläche und werden später verwendet, um das Einreichen des Tipps zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Tippzähler von 1 (wird verwendet, um nachzuverfolgen, wie viele Tipps der Spieler abgegeben hat) und einen Verweis auf eine Zurücksetzen-Schaltfläche, die noch nicht existiert (aber später kommen wird).

> [!NOTE]
> Sie werden im späteren Verlauf des Kurses viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Informationen speichern, die Sie benötigen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables).

### Funktionen

Fügen Sie anschließend unter Ihrem vorherigen JavaScript den folgenden Code hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, sodass Sie den Code nicht immer wiederholen müssen. Das ist wirklich nützlich. Es gibt eine Anzahl von Wegen, um Funktionen zu definieren, aber im Moment konzentrieren wir uns auf einen einfachen Typ. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` gefolgt von einem Namen verwenden, dabei Klammern hinter dem Namen setzen. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern steht der gesamte Code, den wir ausführen möchten, wenn wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Versuchen wir dies jetzt. Speichern Sie Ihren Code und laden Sie die Seite in Ihrem Browser neu. Gehen Sie dann in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Wenn Sie <kbd>Return</kbd>/<kbd>Enter</kbd> drücken, sollte eine Warnung erscheinen, die `I am a placeholder` sagt; wir haben eine Funktion in unserem Code definiert, die eine Warnung erstellt, wann immer wir sie aufrufen.

> [!NOTE]
> Sie werden im weiteren Verlauf, im Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions), viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren ermöglichen es uns, Tests durchzuführen, Mathematik zu betreiben, Zeichenfolgen zu verknüpfen und andere solche Dinge.

Wenn Sie es noch nicht getan haben, speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser, und öffnen Sie die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools). Dann können wir die unten gezeigten Beispiele eingeben — geben Sie jedes von der "Beispiel"-Spalte wie gezeigt ein, drücken Sie nach jedem die <kbd>Return</kbd>/<kbd>Enter</kbd>-Taste, und sehen Sie sich an, welche Ergebnisse sie zurückgeben.

Lassen Sie uns zuerst die arithmetischen Operatoren betrachten, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige Abkürzungsoperatoren, die sogenannten [kombinierten Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Zum Beispiel, wenn Sie einer bestehenden Zahl eine neue Zahl hinzufügen und das Ergebnis zurückgeben möchten, könnten Sie dies tun:

```js
let number1 = 1;
number1 += 2;
```

Dies ist gleichwertig zu

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir True/False-Tests ausführen (zum Beispiel innerhalb von Bedingten — siehe [unten](#bedingte_ausdrücke)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Beispiel</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>String-Gleichheit (ist es genau gleich?)</td>
      <td>
        <pre class="brush: js">
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; Zahl gegenüber Zeichenkette
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>!==</code></td>
      <td>Ungleichheit (ist es nicht gleich?)</td>
      <td>
        <pre class="brush: js">
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; Zahl gegenüber Zeichenkette
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

Zeichenfolgen werden zur Darstellung von Text verwendet. Wir haben bereits eine Zeichenfolgenvariable gesehen: im folgenden Code ist `"I am a placeholder"` eine Zeichenfolge:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Start und das Ende einer einzigen Zeichenfolgen-Deklaration verwenden: Sie können nicht so etwas wie `"I am a placeholder'` schreiben.

Sie können Zeichenfolgen auch mit Backticks (`` ` ``) deklarieren. Auf diese Weise deklarierte Zeichenfolgen werden _Template-Literale_ genannt und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke darin einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Zeichenfolgen zusammenzuführen.

### Bedingte Ausdrücke

Zurück zu unserer `checkGuess()` Funktion, ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass sie nur eine Platzhalternachricht ausgibt. Wir wollen, dass sie überprüft, ob ein Tipp eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

Ersetzen Sie an diesem Punkt Ihre aktuelle `checkGuess()` Funktion durch diese Version:

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

Dies ist eine Menge Code — phew! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der in das Textfeld eingegeben wurde. Wir lassen diesen Wert auch durch den eingebauten `Number()` Konstruktor laufen, um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes sehen wir unseren ersten bedingten Codeblock. Ein bedingter Codeblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Es sieht ein bisschen nach einer Funktion aus, ist es aber nicht. Die einfachste Form eines bedingten Blocks beginnt mit dem Schlüsselwort `if`, gefolgt von Klammern, dann einigen geschweiften Klammern. Innerhalb der Klammern platzieren wir einen Test. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir das nicht und fahren fort zum nächsten Stück Code. In diesem Fall testet der Test, ob die Variable `guessCount` gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Falls es so ist, machen wir den Textinhalt des Tipp-Absatzes gleich `Previous guesses:`. Wenn nicht, tun wir es nicht.

- Als nächstes verwenden wir ein Template-Literal, um den aktuellen `userGuess` Wert am Ende des `guesses` Absatzes hinzuzufügen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:

  - Die erste `if (){ }` Überprüfung prüft, ob die Vermutung des Benutzers gleich der oben in unserem JavaScript gesetzten `randomNumber` ist. Wenn das der Fall ist, hat der Spieler richtig geraten und das Spiel ist gewonnen, also zeigen wir dem Spieler eine Glückwunschnachricht mit einer schönen grünen Farbe, leeren den InhaltBox für die Hohe/Niedrige Schätzungsinformationen und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen.
  - Jetzt haben wir einen weiteren Test am Ende des vorherigen Blocks mit einer `else if (){ }` Struktur verknüpft. Dieser überprüft, ob dieser Zug der letzte Zug des Benutzers ist. Wenn dem so ist, führt das Programm das Gleiche wie im vorherigen Block aus, jedoch mit einer Spiel-ohne Nachricht anstelle einer Glückwunschnachricht.
  - Der letzte an diese Blockkette angehängte Block (das `else { }`) enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests true zurückgibt (d.h. der Spieler hat nicht richtig geraten, hat aber noch mehr Versuche übrig). In diesem Fall sagen wir ihm, dass er falsch liegt, und führen dann einen weiteren bedingten Test durch, um zu überprüfen, ob die Vermutung höher oder niedriger als die Antwort war, und zeigen dann basierend darauf eine weitere Nachricht an.

- Die letzten drei Zeilen in der Funktion bereiten uns auf den nächsten abzugebenden Tipp vor. Wir addieren 1 zur `guessCount` Variablen, damit der Spieler seinen Zug verbraucht ( `++` ist ein Inkrements-Operator — erhöht um 1) und leeren den Wert aus dem Formular-Textfeld und setzen es auf Fokus, damit ein neuer Vorschlag eingegeben werden kann.

### Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()` Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn die "Guess absenden"-Taste gedrückt wird, und dafür müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Knopfdruck, eine Seite, die geladen wird, ein Video, das abgespielt wird usw. — auf die wir Codeblöcke ausführen können. **Ereignis-Listener** beobachten bestimmte Ereignisse und rufen **Ereignis-Handler** auf, das sind Codeblöcke, die als Antwort auf ein auslösendes Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()` Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir einen Ereignis-Listener zu der `guessSubmit`-Taste hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) entgegen nimmt — den Typ des von uns überwachten Ereignisses (in diesem Fall `click`) als Zeichenkette und den Code, den wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall ist das die `checkGuess()`-Funktion). Beachten Sie, dass wir nicht die Klammern spezifizieren müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie, Ihren Code jetzt zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem Punkt. Das einzige Problem jetzt ist, dass, wenn Sie die richtige Antwort erraten oder keine Versuche mehr haben, das Spiel brechen wird, da wir die `setGameOver()` Funktion, die ausgeführt werden soll, wenn das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns jetzt unseren fehlenden Code hinzufügen und die Beispiel-Funktionalität vervollständigen.

### Abschluss der Spielfunktionalität

Lassen Sie uns die `setGameOver()` Funktion am unteren Ende unseres Codes hinzufügen und dann durchgehen. Fügen Sie diese jetzt unterhalb des Rests Ihres JavaScript hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Formular-Textfeld und die Taste, indem sie deren deaktivierte Eigenschaften auf `true` setzen. Das ist notwendig, da falls wir das nicht tun, der Benutzer mehr Tipps abgeben könnte, nachdem das Spiel vorbei ist, was alles durcheinander bringen würde.
- Die nächsten drei Zeilen generieren ein neues {{htmlelement("button")}}-Element, setzen dessen Textbezeichnung auf "Neues Spiel starten" und fügen es am Ende unseres bestehenden HTML hinzu.
- Die letzte Zeile setzt einen Ereignis-Listener auf unsere neue Schaltfläche, sodass, wenn sie gedrückt wird, eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir auch diese Funktion definieren! Fügen Sie den folgenden Code wiederum am Ende Ihres JavaScript ein:

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

Dieser recht lange Codeblock setzt alles vollständig zurück, wie es zu Beginn des Spiels war, damit der Spieler noch einmal spielen kann. Er:

- Setzt das `guessCount` wieder auf 1.
- Leert allen Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb `<div class="resultParas"></div>` aus und durchlaufen dann jeden, um deren `textContent` auf `''` (eine leere Zeichenfolge) zu setzen.
- Entfernt die Rücksetzschaltfläche aus unserem Code.
- Ermöglicht die Formular-Elemente und leert und fokussiert das Textfeld, bereit für einen neuen Tipp.
- Entfernt die Hintergrundfarbe aus dem `lastResult`-Absatz.
- Generiert eine neue Zufallszahl, damit Sie nicht einfach dieselbe Zahl erneut erraten!

**Zu diesem Zeitpunkt sollten Sie ein voll funktionsfähiges (einfaches) Spiel haben — Herzlichen Glückwunsch!**

Jetzt müssen wir in diesem Artikel nur noch über einige andere wichtige Code-Funktionen sprechen, die Sie bereits gesehen haben, obwohl Sie das vielleicht nicht realisiert haben.

### Schleifen

Ein Teil des obigen Codes, den wir uns genauer ansehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Zuerst rufen Sie wieder Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) auf und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array. Wir werden später im Modul [ein vollständiges Arrays-Tutorial](/de/docs/Learn_web_development/Core/Scripting/Arrays) durcharbeiten, aber fürs Erste: ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of` Schleife gibt Ihnen eine Möglichkeit, jedes Element im Array zu bekommen und etwas JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie sich das erste Element in `fruits`.
2. Setzen Sie die Variable `fruit` auf dieses Element und führen Sie den Code zwischen den `{}` aus.
3. Holen Sie sich das nächste Element in `fruits` und wiederholen Sie 2, bis Sie das Ende von `fruits` erreicht haben.

In diesem Fall schreibt der Code innerhalb der geschweiften Klammern `fruit` in die Konsole.

Schauen wir uns nun die Schleife in unserem Zahlenratespiel an — das folgende befindet sich innerhalb der `resetGame()` Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb von `<div class="resultParas">` mithilfe der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) Methode enthält, und schleift dann durch jeden, um den Textinhalt zu entfernen.

Beachten Sie, dass, obwohl `resetPara` eine Konstante ist, wir ihre internen Eigenschaften wie `textContent` ändern können.

### Eine kurze Diskussion über Objekte

Lassen Sie uns noch eine letzte Verbesserung hinzufügen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile gleich unter der `let resetButton;` Zeile nahe dem Anfang Ihres JavaScript hinzu, und speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode, um den Textcursor automatisch in das {{htmlelement("input")}}-Textfeld zu setzen, sobald die Seite geladen wird, was bedeutet, dass der Benutzer mit der Eingabe seines ersten Tipps sofort ohne vorher den Formularfeld anklicken zu müssen, beginnen kann. Das ist nur eine kleine Ergänzung, verbessert jedoch die Benutzerfreundlichkeit — gibt dem Benutzer einen guten visuellen Hinweis darauf, was er tun muss, um das Spiel zu spielen.

Lassen Sie uns ein bisschen mehr im Detail betrachten, was hier passiert. In JavaScript sind die meisten der Objekte, die Sie in Ihrem Code manipulieren, Objekte. Ein Objekt ist eine Sammlung verwandter Funktionen, die in einer einzigen Gruppierung gespeichert sind. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten, und wir werden dies nicht vor weit später im Kurs behandeln. Für den Moment besprechen wir nur kurz die eingebauten Objekte, die Ihr Browser enthält, die es Ihnen ermöglichen, viele nützliche Dinge zu tun.

In diesem besonderen Fall haben wir zuerst eine `guessField`-Konstante erstellt, die einen Verweis auf das Texteinfügeformularfeld in unserem HTML speichert — die folgende Zeile kann unter unseren Deklarationen nahe dem Anfang des Codes gefunden werden:

```js
const guessField = document.querySelector(".guessField");
```

Um diesen Verweis zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector) Methode des [`document`](/de/docs/Web/API/Document) Objekts verwendet. `querySelector()` nimmt ein Informationsstück entgegen — ein [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), der das Element auswählt, welches Sie referenzieren möchten.

Da `guessField` jetzt einen Verweis auf ein {{htmlelement("input")}}-Element enthält, hat es jetzt Zugriff auf eine Anzahl von Eigenschaften (im Wesentlichen Variablen, die in Objekten gespeichert sind, einige davon können nicht in ihren Werten geändert werden) und Methoden (im Wesentlichen in Objekten gespeicherte Funktionen). Eine Methode, die für Eingabeelemente verfügbar ist, ist `focus()`, sodass wir jetzt diese Zeile verwenden können, um das Texteinfügeformularfeld zu fokussieren:

```js
guessField.focus();
```

Variablen, die keine Verweise auf Formularelemente enthalten, haben keine `focus()` Methode. Beispielsweise enthält die `guesses` Konstante einen Verweis auf ein {{htmlelement("p")}}-Element, und die `guessCount` Variable enthält eine Zahl.

### Spielen mit Browser-Objekten

Lassen Sie uns ein wenig mit einigen Browser-Objekten spielen.

1. Öffnen Sie zuerst Ihr Programm in einem Browser.
2. Öffnen Sie als Nächstes Ihre [Entwicklertools des Browsers](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), und stellen Sie sicher, dass die Registerkarte der JavaScript-Konsole geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein, und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}}-Element enthält. Sie werden auch bemerken, dass die Konsole die Namen der im Ausführungsumfeld existierenden Objekte, einschließlich Ihrer Variablen, automatisch vervollständigt!
4. Geben Sie nun die folgende Zeile ein:

   ```js
   guessField.value = 2;
   ```

   Die `value` Eigenschaft stellt den aktuellen im Textfeld eingegebenen Wert dar. Sie sehen, dass wir durch Eingabe dieses Befehls den Text im Textfeld geändert haben!

5. Geben Sie nun `guesses` in die Konsole ein und drücken Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}}-Element enthält.
6. Geben Sie nun die folgende Zeile ein:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, da Absätze nicht die `value` Eigenschaft haben.

7. Um den Text innerhalb eines Absatzes zu ändern, benötigen Sie stattdessen die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft. Versuchen Sie dies:

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. Jetzt etwas Spaßiges. Probieren Sie die folgenden Zeilen nacheinander aus:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite hat eine `style` Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle Inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dadurch können wir dynamisch neue CSS-Stile auf Elemente mithilfe von JavaScript setzen.

## Zusammenfassung

Das war's also mit dem Aufbau des Beispiels. Sie sind am Ende angelangt — gut gemacht! Probieren Sie Ihren endgültigen Code aus, oder [spielen Sie hier mit unserer fertigen Version](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn es Ihnen nicht gelingt, Ihre Version des Beispiels zum Laufen zu bringen, vergleichen Sie sie mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion könnte ebenfalls hilfreich sein — darin diskutieren wir, was beim Schreiben von JavaScript-Code schiefgehen kann, und beziehen uns dabei auf das Spiel "Guess the number".

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
