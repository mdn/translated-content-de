---
title: Ein erster Sprung in JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Nachdem Sie nun etwas über die Theorie von JavaScript und dessen Möglichkeiten erfahren haben, werden wir Ihnen eine Vorstellung davon geben, wie der Prozess der Erstellung eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial führen. Hier bauen Sie Schritt für Schritt ein einfaches Spiel "Errate die Zahl" auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML und CSS, ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erste Erfahrungen im Schreiben von JavaScript sammeln und zumindest ein grundlegendes Verständnis dafür gewinnen, was das Schreiben eines JavaScript-Programms beinhaltet.
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier sehr klare Erwartungen setzen: Sie werden nicht erwartet, JavaScript bis zum Ende dieses Artikels zu lernen oder auch nur den gesamten Code zu verstehen, den wir Sie bitten zu schreiben. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie sich das Schreiben von JavaScript anfühlt. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen viel detaillierter durchgehen, also machen Sie sich keine Sorgen, wenn Sie nicht sofort alles verstehen!

> [!NOTE]
> Viele der Code-Features, die Sie in JavaScript sehen werden, sind dieselben wie in anderen Programmiersprachen — Funktionen, Schleifen usw. Die Syntax des Codes sieht zwar anders aus, aber die Konzepte sind weitgehend dieselben.

## Denken wie ein Programmierer

Eines der schwierigsten Dinge beim Programmieren ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie sie anwenden, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — dies bedeutet im Allgemeinen, sich Beschreibungen dessen anzusehen, was Ihr Programm tun muss, herauszufinden, welche Code-Features benötigt werden, um diese Dinge zu erreichen, und wie sie zusammenarbeiten können.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Syntax des Programmierens und Übung — plus etwas Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln, aber wir werden Ihnen im gesamten Kurs zahlreiche Gelegenheiten geben, wie ein Programmierer zu denken.

Mit diesem Hintergrundwissen wollen wir uns das Beispiel ansehen, das wir in diesem Artikel aufbauen werden, und den allgemeinen Prozess des Zerlegens in greifbare Aufgaben überprüfen.

## Beispiel — Errate die Zahl Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen können, das Sie unten sehen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Probieren Sie es aus, bevor Sie weitermachen.

Stellen Sie sich vor, Ihr Chef hat Ihnen folgenden Auftrag zur Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches Zahlraten-Spiel erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt, und wenn er falsch liegt, ob die Schätzung zu niedrig oder zu hoch war. Es sollte auch dem Spieler sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig rät oder ihm die Versuche ausgehen. Wenn das Spiel endet, sollte dem Spieler eine Option angeboten werden, erneut zu spielen.

Wenn wir uns diesen Auftrag ansehen, können wir als erstes beginnen, ihn in einfache ausführbare Aufgaben zu unterteilen, so gut wir können aus der Perspektive eines Programmierers:

1. Eine Zufallszahl zwischen 1 und 100 erzeugen.
2. Die Zugnummer des Spielers aufzeichnen. Beginnen Sie bei 1.
3. Dem Spieler eine Möglichkeit bieten, die Zahl zu erraten.
4. Sobald eine Schätzung eingereicht wurde, sie zunächst irgendwo aufzeichnen, sodass der Benutzer seine vorherigen Schätzungen sehen kann.
5. Als nächstes überprüfen, ob es die richtige Zahl ist.
6. Wenn es richtig ist:

   1. Gratulationsnachricht anzeigen.
   2. Den Spieler daran hindern, weitere Schätzungen einzugeben (das würde das Spiel durcheinanderbringen).
   3. Steuerung anzeigen, mit der der Spieler das Spiel neu starten kann.

7. Wenn es falsch ist und der Spieler noch Versuche hat:

   1. Dem Spieler mitteilen, dass er falsch liegt und ob seine Schätzung zu hoch oder zu niedrig war.
   2. Ihm erlauben, eine weitere Schätzung einzugeben.
   3. Die Zugnummer um 1 erhöhen.

8. Wenn es falsch ist und dem Spieler keine Versuche mehr bleiben:

   1. Dem Spieler mitteilen, dass das Spiel vorbei ist.
   2. Den Spieler daran hindern, weitere Schätzungen einzugeben (das würde das Spiel durcheinanderbringen).
   3. Steuerung anzeigen, mit der der Spieler das Spiel neu starten kann.

9. Sobald das Spiel neu startet, sicherstellen, dass die Logik und das UI des Spiels vollständig zurückgesetzt sind, dann zu Schritt 1 zurückkehren.

Lassen Sie uns jetzt weitermachen und sehen, wie wir diese Schritte in Code umsetzen, das Beispiel aufbauen und JavaScript-Features erkunden, während wir vorankommen.

### Erste Einrichtung

Um dieses Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) Datei erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie sie sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Derzeit sehen Sie eine einfache Überschrift, eine Anweisungensparagraph und ein Formular zum Eingeben einer Schätzung, aber das Formular wird derzeit nichts tun.

Der Ort, an dem wir unseren gesamten Code hinzufügen werden, befindet sich innerhalb des {{htmlelement("script")}} Elements am Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zur Speicherung unserer Daten

Lassen Sie uns beginnen. Fügen Sie zunächst die folgenden Zeilen innerhalb Ihres {{htmlelement("script")}} Elements hinzu:

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

Variablen sind im Grunde genommen Namen für Werte (wie Zahlen oder Textzeichenfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let` gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls zum Benennen von Werten verwendet, aber im Gegensatz zu Variablen können Sie den Wert nach dem Festlegen nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente könnte sich ändern, aber jede Konstante referenziert immer dasselbe HTML-Element, mit dem es initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const` gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante einen Wert zuweisen, indem Sie ein Gleichheitszeichen (`=`) gefolgt von dem Wert einfügen, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird mit einer Zufallszahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten werden jeweils verwendet, um eine Referenz auf die Ergebnissabsätze in unserem HTML zu speichern, und werden verwendet, um Werte später im Code in die Absätze einzufügen (beachten Sie, wie sie sich in einem `<div>` Element befinden, das selbst verwendet wird, um alle drei später zum Zurücksetzen auszuwählen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten zwei Konstanten speichern Referenzen auf das Formular-Text-Inputfeld und den Sende-Button und werden verwendet, um das Übermitteln der Schätzung später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern einen Zählwert für die Schätzungen (beginnend bei 1, zum Verfolgen, wie viele Schätzungen der Spieler hatte) und eine Referenz auf einen Rücksetz-Button, der noch nicht existiert (aber später erstellt wird).

> [!NOTE]
> Sie werden später im Kurs viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Speichern der benötigten Informationen — Variablen](/de/docs/Learn/JavaScript/First_steps/Variables).

### Funktionen

Fügen Sie als nächstes das Folgende unter Ihrem vorherigen JavaScript hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch das ständige Wiederholen von Code überflüssig wird. Dies ist wirklich praktisch. Es gibt verschiedene Möglichkeiten, Funktionen zu definieren, aber vorerst konzentrieren wir uns auf eine einfache Art. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` gefolgt von einem Namen und Klammern dahinter verwendet haben. Danach setzen wir zwei geschwungene Klammern (`{ }`). Innerhalb der geschwungenen Klammern fügen wir den gesamten Code ein, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, schreiben wir den Namen der Funktion gefolgt von den Klammern.

Probieren Sie das jetzt aus. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nachdem Sie <kbd>Return</kbd>/<kbd>Enter</kbd> gedrückt haben, sollte ein Alert erscheinen, der `I am a placeholder` sagt; wir haben eine Funktion in unserem Code definiert, die jedes Mal, wenn wir sie aufrufen, einen Alert erzeugt.

> [!NOTE]
> Sie werden später im Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn/JavaScript/Building_blocks/Functions) viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren ermöglichen es uns, Tests durchzuführen, Mathematik zu betreiben, Zeichenfolgen zusammenzufügen und dergleichen mehr.

Wenn Sie dies noch nicht getan haben, speichern Sie Ihren Code, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools). Danach können wir die in den Beispielen unten gezeigten Anweisungen versuchen — geben Sie jeden aus den "Beispiel"-Spalten genauso ein, wie es gezeigt wird, und drücken Sie nach jedem <kbd>Return</kbd>/<kbd>Enter</kbd>, um die Ergebnisse zu sehen, die sie zurückgeben.

Sehen wir uns zunächst die arithmetischen Operatoren an, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige Kurzform-Operatoren, sogenannte [zusammengesetzte Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Zum Beispiel, wenn Sie eine neue Zahl zu einer bestehenden hinzufügen und das Ergebnis zurückgeben möchten, könnten Sie dies tun:

```js
let number1 = 1;
number1 += 2;
```

Das ist gleichwertig mit

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir true/false-Tests durchführen (zum Beispiel innerhalb von Bedingungsanweisungen — siehe [unten](#bedingungsanweisungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Beispiel</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>Strikte Gleichheit (ist es genau dasselbe?)</td>
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
      <td>Ungleichheit (ist es nicht dasselbe?)</td>
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

Zeichenfolgen werden zur Darstellung von Text verwendet. Wir haben bereits eine Zeichenfolgenvariable gesehen: in folgendem Code ist `"Ich bin ein Platzhalter"` eine Zeichenfolge:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen die gleiche Form für den Anfang und das Ende einer einzelnen Zeichenfolgendeklaration verwenden: Sie können nicht `"Ich bin ein Platzhalter'` schreiben.

Sie können Zeichenfolgen auch mit Backticks (`` ` ``) deklarieren. Zeichenfolgen, die auf diese Weise deklariert werden, werden _Template-Literale_ genannt und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in sie einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies bietet Ihnen einen Mechanismus, um Zeichenfolgen zusammenzuführen.

### Bedingungsanweisungen

Kehren wir zu unserer `checkGuess()` Funktion zurück, ich denke, es ist sicher zu sagen, dass wir nicht möchten, dass sie nur eine Platzhalternachricht ausspuckt. Wir möchten, dass sie überprüft, ob die Schätzung eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

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

Das ist eine Menge Code — puh! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Textfeld eingegeben wurde. Wir lassen diesen Wert auch durch den eingebauten `Number()` Konstruktor laufen, um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Dann stoßen wir auf unseren ersten bedingten Codeblock. Ein bedingter Codeblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Er sieht ein wenig wie eine Funktion aus, ist es aber nicht. Die einfachste Form eines bedingten Blocks beginnt mit dem Schlüsselwort `if`, dann einigen Klammern, dann einigen geschwungenen Klammern. Innerhalb der Klammern fügen wir einen Test ein. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschwungenen Klammern aus. Wenn nicht, gehen wir zum nächsten Codeblock weiter. In diesem Fall testet der Test, ob die Variable `guessCount` gleich `1` ist (d.h. ob es der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn dies der Fall ist, setzen wir den Textinhalt des Absatzes „guesses“ gleich „Bisherige Schätzungen:“. Wenn nicht, tun wir das nicht.

- Als Nächstes verwenden wir ein Template-Literal, um den aktuellen `userGuess` Wert an das Ende des „guesses“-Absatzes anzuhängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:

  - Das erste `if (){ }` überprüft, ob die Schätzung des Benutzers gleich der zuvor zugewiesenen `randomNumber` ist. Wenn dies der Fall ist, hat der Spieler korrekt geraten und das Spiel ist gewonnen, sodass wir dem Spieler eine Glückwunschnachricht mit einer schönen grünen Farbe anzeigen, den Inhalt des Informationselements "Zu niedrig/Zu hoch" leeren und eine Funktion namens `setGameOver()` ausführen, die wir später besprechen werden.
  - Jetzt haben wir einen weiteren Test mithilfe der Struktur `else if (){ }` an die vorherige Bedingung angehängt. Diese prüft, ob dies der letzte Zug des Spielers ist. Wenn dies der Fall ist, führt das Programm dasselbe aus wie im vorherigen Block, nur mit einer Game-Over-Nachricht anstelle einer Glückwunschnachricht.
  - Der letzte an diesen Code angehängte Block (`else { }`) enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests wahr ist (d.h. der Spieler hat nicht richtig geraten, hat aber noch mehr Schätzungen übrig). Wir sagen ihm, dass er falsch liegt, und führen dann einen weiteren Test durch, um zu überprüfen, ob die Schätzung höher oder niedriger als die Antwort war, indem wir eine weitere Nachricht anzeigen, um ihm mitzuteilen, ob er höher oder niedriger geraten hat.

- Die letzten drei Zeilen in der Funktion bereiten uns auf die nächste Einreichung einer Schätzung vor. Wir fügen der `guessCount` Variablen 1 hinzu, sodass der Spieler seinen Zug verbraucht (`++` ist eine Inkrementoperation — Erhöhung um 1), und leeren das Formulartextfeld und fokussieren es erneut, bereit, die nächste Schätzung einzugeben.

### Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()` Funktion, aber sie wird nichts tun, da wir sie noch nicht aufgerufen haben. Ideal wäre es, sie aufzurufen, wenn der „Submit guess“-Button gedrückt wird, und dafür müssen wir einen **Event** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Klick auf einen Button, das Laden einer Seite, das Abspielen eines Videos usw. — woraufhin wir Codeblöcke ausführen können. **Ereignislistener** beobachten bestimmte Ereignisse und rufen **Ereignis-Handler** auf, die Codeblöcke sind, die in Antwort auf das Eintreten eines Ereignisses ausgeführt werden.

Fügen Sie die folgende Zeile unterhalb Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit` Button einen Ereignislistener hinzu. Dies ist eine Methode, die zwei Eingabewerte (sogenannte _Argumente_) nimmt — den Typ des Ereignisses, auf den wir achten (in diesem Fall `click`) als Zeichenkette und den Code, den wir ausführen möchten, wenn das Ereignis eintritt (in diesem Fall die `checkGuess()` Funktion). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie jetzt, Ihren Code zu speichern und zu aktualisieren, dann sollte Ihr Beispiel bis zu einem Punkt funktionieren. Das einzige Problem jetzt ist, dass das Spiel kaputtgehen wird, wenn Sie die richtige Antwort raten oder keine Schätzungen mehr haben, weil wir noch nicht die `setGameOver()` Funktion definiert haben, die ausgeführt werden soll, sobald das Spiel vorbei ist. Lassen Sie uns jetzt unseren fehlenden Code hinzufügen und die Funktionsweise des Beispiels vervollständigen.

### Das Spiel fertigstellen

Lassen Sie uns die `setGameOver()` Funktion an das Ende Ihres Codes hinzufügen und dann durchgehen. Fügen Sie dies jetzt unterhalb des restlichen JavaScripts hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Formulartextfeld und den Button, indem sie deren disabled-Eigenschaften auf `true` setzen. Dies ist notwendig, denn wenn wir das nicht tun, könnte der Benutzer nach dem Spielende weitere Schätzungen abgeben, was alles durcheinanderbringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}} Element, setzen dessen Textbeschriftung auf „Start new game“ und fügen es an das Ende unseres bestehenden HTML an.
- Die letzte Zeile setzt einen Ereignislistener auf unseren neuen Button, sodass bei einem Klick darauf eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir diese Funktion auch definieren! Fügen Sie folgenden Code wieder an das Ende Ihres JavaScript hinzu:

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

Dieser ziemlich lange Codeblock setzt alles vollständig auf den Zustand am Anfang des Spiels zurück, sodass der Spieler einen weiteren Versuch starten kann. Es:

- Setzt den `guessCount` auf 1 zurück.
- Entfernt den gesamten Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb von `<div class="resultParas"></div>` aus, dann durchlaufen wir jeden und setzen ihren `textContent` auf `''` (eine leere Zeichenfolge).
- Entfernt den Rücksetz-Button aus unserem Code.
- Aktiviert die Formularelemente und leert sowie fokussiert das Textfeld, bereit für eine neue Schätzung.
- Entfernt die Hintergrundfarbe aus dem `lastResult`-Absatz.
- Generiert eine neue Zufallszahl, sodass Sie nicht einfach dieselbe Zahl noch einmal erraten!

**An diesem Punkt sollten Sie ein vollständig funktionierendes (einfaches) Spiel haben — herzlichen Glückwunsch!**

Alles, was wir jetzt in diesem Artikel noch tun müssen, ist, über einige andere wichtige Code-Features zu sprechen, die Sie bereits gesehen haben, auch wenn Sie es vielleicht nicht realisiert haben.

### Schleifen

Ein Teil des obigen Codes, auf den wir genauer eingehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept im Programmieren, das es Ihnen ermöglicht, ein Stück Code immer wieder zu betreiben, bis eine bestimmte Bedingung erfüllt ist.

Um anzufangen, gehen Sie zu Ihren [Browser-Entwickler-Tools JavaScript-Konsole](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array. Wir werden später in diesem Modul ein vollständiges Arrays-Leitfaden durcharbeiten, aber für jetzt: ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of` Schleife gibt Ihnen einen Weg, jedes Element im Array zu erhalten und darauf JavaScript auszuführen. Die Zeile `for (const fruit of fruits)` sagt Folgendes:

1. Holen Sie das erste Element in `fruits`.
2. Setzen Sie die `fruit` Variable auf dieses Element und führen Sie dann den Code zwischen den `{}` geschweiften Klammern aus.
3. Holen Sie das nächste Element in `fruits` und wiederholen Sie Schritt 2, bis Sie das Ende von `fruits` erreicht haben.

In diesem Fall wird der Code innerhalb der geschweiften Klammern `fruit` in die Konsole geschrieben.

Schauen wir uns nun die Schleife in unserem Zahlerratenspiel an — das Folgende befindet sich in der `resetGame()` Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die alle Absätze innerhalb von `<div class="resultParas">` mittels der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) Methode enthält, und durchläuft dann jeden, um den Textinhalt zu entfernen.

Beachten Sie, dass wir zwar `resetPara` konstant setzen, jedoch seine internen Eigenschaften wie `textContent` ändern können.

### Eine kurze Diskussion über Objekte

Lassen Sie uns noch eine finale Verbesserung hinzufügen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile direkt unter die `let resetButton;` Zeile in der Nähe des Anfangs Ihres JavaScript hinzu und speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode, um den Textcursor automatisch in das {{htmlelement("input")}} Textfeld zu setzen, sobald die Seite geladen wird. Dies bedeutet, dass der Benutzer seinen ersten Tipp sofort eingeben kann, ohne das Formularelement zuerst klicken zu müssen. Es ist nur eine kleine Ergänzung, aber es verbessert die Benutzerfreundlichkeit — es gibt dem Benutzer einen guten visuellen Hinweis darauf, was er tun muss, um das Spiel zu spielen.

Analysieren wir, was hier in mehr Details passiert. In JavaScript sind die meisten der Objekte, die Sie in Ihrem Code manipulieren, Objekte. Ein Objekt ist eine Sammlung zusammengehöriger Funktionalität, die in einer einzigen Gruppierung gespeichert ist. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten und wir werden erst viel später im Kurs darauf eingehen. Fürs Erste werden wir nur kurz die integrierten Objekte diskutieren, die Ihr Browser enthält, und die Ihnen viele nützliche Dinge ermöglichen.

In diesem speziellen Fall haben wir zuerst eine `guessField` Konstante erstellt, die eine Referenz auf das Texteinfügeformularfeld in unserem HTML speichert — die folgende Zeile findet sich unter unseren Erklärungen in der Nähe des Anfangs des Codes:

```js
const guessField = document.querySelector(".guessField");
```

Um diese Referenz zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector) Methode des [`document`](/de/docs/Web/API/Document) Objekts verwendet. `querySelector()` nimmt ein Element — einen [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors), das das Element auswählt, das Sie referenzieren möchten.

Da `guessField` jetzt eine Referenz auf ein {{htmlelement("input")}} Element enthält, hat es jetzt Zugriff auf eine Anzahl von Eigenschaften (im Grunde genommen Variablen, die in Objekten gespeichert sind, von denen einige ihre Werte nicht ändern können) und Methoden (im Allgemeinen gespeicherte Funktionen in Objekten). Eine Methode, die für Eingabefelder verfügbar ist, ist `focus()`, also können wir jetzt diese Zeile verwenden, um das Texteingabeformularfeld zu fokussieren:

```js
guessField.focus();
```

Variablen, die keine Referenzen zu Formularelementen enthalten, haben `focus()` nicht zur Verfügung. Zum Beispiel enthält die `guesses` Konstante eine Referenz auf ein {{htmlelement("p")}} Element, und die `guessCount` Variable enthält eine Zahl.

### Spielen mit Browser-Objekten

Lassen Sie uns ein wenig mit Browser-Objekten spielen.

1. Öffnen Sie zunächst erneut Ihr Programm in einem Browser.
2. Öffnen Sie dann Ihre [Browser-Entwickler-Tools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass die JavaScript-Konsole geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein, und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}} Element enthält. Sie werden auch feststellen, dass die Konsole die Namen der Objekte vervollständigt, die in der Ausführungsumgebung existieren, einschließlich Ihrer Variablen!
4. Geben Sie nun Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value` Eigenschaft repräsentiert den aktuellen Wert, der in das Textfeld eingegeben wird. Sie werden sehen, dass wir durch das Eingeben dieses Befehls den Text im Textfeld geändert haben!

5. Versuchen Sie nun, `guesses` in die Konsole einzugeben und <kbd>Enter</kbd> zu drücken (oder <kbd>Return</kbd>, je nach Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}} Element enthält.
6. Versuchen Sie nun, die folgende Zeile einzugeben:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, da Absätze die `value` Eigenschaft nicht haben.

7. Um den Text innerhalb eines Absatzes zu ändern, benötigen Sie die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft stattdessen. Versuchen Sie es damit:

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. Jetzt etwas Spaßiges. Versuchen Sie, die unten stehenden Zeilen eine nach der anderen einzugeben:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite verfügt über eine `style` Eigenschaft, die ihrerseits ein Objekt enthält, dessen Eigenschaften alle Inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dies ermöglicht es uns, dynamisch neue CSS-Stile auf Elemente mittels JavaScript zu setzen.

## Vorerst fertig…

Das wäre also alles zum Aufbau des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Probieren Sie Ihren finalen Code aus oder [spielen Sie mit unserer fertiggestellten Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie das Beispiel nicht zum Laufen bringen, überprüfen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
