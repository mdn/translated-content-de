---
title: Ein erster Schritt in JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Nachdem Sie nun etwas über die Theorie von JavaScript und die Möglichkeiten damit gelernt haben, werden wir Ihnen eine Vorstellung davon geben, wie der Prozess der Erstellung eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial führen. Hier erstellen Sie schrittweise ein einfaches "Errate die Zahl"-Spiel.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML und CSS, ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erste Erfahrung im Schreiben von JavaScript zu sammeln und
        zumindest ein grundlegendes Verständnis darüber zu erlangen, was das Schreiben eines JavaScript-Programms beinhaltet.
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels lernen oder auch nur den gesamten Code verstehen, den wir Sie bitten zu schreiben. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie sich das Schreiben von JavaScript anfühlt. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen noch viel detaillierter wiederholen, also machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen, sind in anderen Programmiersprachen die gleichen – Funktionen, Schleifen usw. Die Syntax sieht anders aus, aber die Konzepte sind im Wesentlichen die gleichen.

## Denken wie ein Programmierer

Eine der schwierigsten Dinge beim Programmieren ist es nicht, die Syntax zu lernen, sondern zu wissen, wie sie angewendet werden kann, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken – das bedeutet im Allgemeinen, Beschreibungen dessen, was Ihr Programm machen soll, zu analysieren, herauszufinden, welche Code-Funktionen benötigt werden, um diese Dinge zu erreichen, und wie man sie zusammenarbeiten lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung – plus etwas Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können Ihnen nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln, aber wir werden Ihnen viele Gelegenheiten geben, zu üben, wie ein Programmierer zu denken, im Verlauf des Kurses.

Mit diesen Gedanken im Hinterkopf, lassen Sie uns das Beispiel betrachten, das wir in diesem Artikel aufbauen werden, und den allgemeinen Prozess der Zerlegung in greifbare Aufgaben überprüfen.

## Beispiel — Errate die Zahl Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen können, das Sie unten sehen können:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Versuchen Sie, es zu spielen – machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen wir uns vor, Ihr Chef hat Ihnen das folgende Briefing zur Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches Spiel vom Typ "Errate die Zahl" erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und den Spieler dann herausfordern, die Zahl in 10 Zügen zu erraten. Nach jedem Zug sollte dem Spieler gesagt werden, ob er richtig oder falsch liegt, und wenn er falsch liegt, ob der Tipp zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler die Zahl korrekt errät oder ihm die Züge ausgehen. Wenn das Spiel endet, sollte dem Spieler die Möglichkeit gegeben werden, erneut zu spielen.

Nachdem wir uns dieses Briefing angesehen haben, können wir dies zunächst in einfache handlungsorientierte Aufgaben unterteilen, so weit es möglich ist, im Sinne eines Programmierers:

1. Erzeugen Sie eine Zufallszahl zwischen 1 und 100.
2. Notieren Sie sich die Zugnummer, bei der sich der Spieler befindet. Beginnen Sie mit 1.
3. Stellen Sie dem Spieler eine Möglichkeit zur Verfügung, um zu erraten, welche Zahl es ist.
4. Sobald ein Tipp abgegeben wurde, notieren Sie ihn irgendwo, damit der Benutzer seine vorherigen Tipps sehen kann.
5. Überprüfen Sie dann, ob es die richtige Zahl ist.
6. Wenn es richtig ist:

   1. Zeigen Sie eine Glückwunschnachricht an.
   2. Verhindern Sie, dass der Spieler weitere Tipps eingibt (dies würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die dem Spieler erlaubt, das Spiel neu zu starten.

7. Wenn es falsch ist und dem Spieler Züge verbleiben:

   1. Sagen Sie dem Spieler, dass er falsch liegt und ob sein Tipp zu hoch oder zu niedrig war.
   2. Erlauben Sie ihm, einen weiteren Tipp abzugeben.
   3. Erhöhen Sie die Zugnummer um 1.

8. Wenn es falsch ist und dem Spieler keine Züge mehr verbleiben:

   1. Sagen Sie dem Spieler, dass das Spiel vorbei ist.
   2. Verhindern Sie, dass der Spieler weitere Tipps eingibt (dies würde das Spiel durcheinander bringen).
   3. Zeigen Sie eine Steuerung an, die dem Spieler erlaubt, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, stellen Sie sicher, dass die Spiel-Logik und die Benutzeroberfläche komplett zurückgesetzt sind, und gehen Sie dann zurück zu Schritt 1.

Gehen wir nun weiter vor, indem wir untersuchen, wie wir diese Schritte in Code umwandeln können, das Beispiel aufbauen und die JavaScript-Funktionen im Verlauf beleuchten.

### Erste Einrichtung

Um mit diesem Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie es sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, eine Anweisung und ein Formular zum Eingeben eines Tipps, aber das Formular wird derzeit nichts tun.

Der Ort, an dem wir all unseren Code hinzufügen, befindet sich innerhalb des {{htmlelement("script")}}-Elements am unteren Rand des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zur Speicherung unserer Daten

Fangen wir an. Fügen Sie zuerst die folgenden Zeilen in Ihr {{htmlelement("script")}}-Element ein:

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

Variablen sind im Grunde Namen für Werte (wie Zahlen oder Textzeichenfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let` gefolgt von einem Namen für Ihre Variable.

Konstanten werden auch verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert, sobald er gesetzt ist, nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text in einigen dieser Elemente kann sich ändern, aber jede Konstante bezieht sich immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const` gefolgt von einem Namen für die Konstante.

Sie können Ihrer Variablen oder Konstanten einen Wert mit einem Gleichheitszeichen (`=`) zuweisen, gefolgt von dem Wert, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird mit einer Zufallszahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten werden jeweils verwendet, um eine Referenz zu den Ergebnissabsätzen in unserem HTML zu speichern, und werden verwendet, um später Werte in die Absätze einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>`-Elements befinden, das selbst verwendet wird, um alle drei später zum Zurücksetzen auszuwählen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten zwei Konstanten speichern Referenzen zum Texteingabeformular und der Schaltfläche zum Absenden und werden verwendet, um das Einreichen des Tipps später zu steuern.

  ```html
  <label for="guessField">Geben Sie einen Tipp ein: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Tipp abgeben" class="guessSubmit" />
  ```

- Unsere letzten zwei Variablen speichern einen Tippzählwert von 1 (wird verwendet, um zu verfolgen, wie viele Tipps der Spieler hatte) und eine Referenz auf eine Rücksetzschaltfläche, die momentan noch nicht existiert (aber später vorhanden sein wird).

> [!NOTE]
> Sie werden später im Kurs noch viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Speichern der Informationen, die Sie benötigen — Variablen](/de/docs/Learn/JavaScript/First_steps/Variables).

### Funktionen

Fügen Sie als Nächstes den folgenden Code unter Ihrem vorhergehenden JavaScript hinzu:

```js
function checkGuess() {
  alert("Ich bin ein Platzhalter");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, was die Notwendigkeit erspart, den Code ständig zu wiederholen. Dies ist wirklich nützlich. Es gibt eine Reihe von Möglichkeiten, Funktionen zu definieren, aber wir konzentrieren uns vorerst auf eine einfache Art. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` gefolgt von einem Namen und Klammern eingeben. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern steht der gesamte Code, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern ein.

Versuchen wir das jetzt. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollten Sie einen Alarm sehen, der sagt: `Ich bin ein Platzhalter`; wir haben in unserem Code eine Funktion definiert, die jedes Mal, wenn wir sie aufrufen, einen Alarm erzeugt.

> [!NOTE]
> Sie werden später in dem Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn/JavaScript/Building_blocks/Functions) noch viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren erlauben uns, Tests durchzuführen, Mathe zu betreiben, Zeichenketten zusammenzufügen und Ähnliches.

Wenn Sie es noch nicht getan haben, speichern Sie Ihren Code, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools). Dann können wir das eingeben, was in den unten gezeigten Beispielen steht – geben Sie jedes Beispiel aus den "Beispiel"-Spalten exakt so ein, wie gezeigt, und drücken Sie nach jedem mit <kbd>Return</kbd>/<kbd>Enter</kbd> und beobachten Sie, welche Ergebnisse zurückgegeben werden.

Zuerst betrachten wir die Arithmetik-Operatoren, zum Beispiel:

| Operator | Name        | Beispiel  |
| -------- | ----------- | --------- |
| `+`      | Addition    | `6 + 9`   |
| `-`      | Subtraktion | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division    | `10 / 5`  |

Es gibt auch einige verkürzte Operatoren, die sogenannten [zusammengesetzten Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Zum Beispiel, wenn Sie einer bestehenden Zahl eine neue hinzufügen und das Ergebnis zurückgeben wollen, könnten Sie dies tun:

```js
let number1 = 1;
number1 += 2;
```

Dies ist gleichbedeutend mit

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir True/False-Tests durchführen (beispielsweise innerhalb von Bedingungen – siehe [unten](#bedingte_anweisungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Beispiel</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>Striktes Gleichheit (Ist es genau das gleiche?)</td>
      <td>
        <pre class="brush: js">
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; Zahl gegen Zeichenkette
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>!==</code></td>
      <td>Ungleichheit (Ist es nicht das gleiche?)</td>
      <td>
        <pre class="brush: js">
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; Zahl gegen Zeichenkette
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

Zeichenfolgen werden verwendet, um Text darzustellen. Wir haben bereits eine Zeichenkettenvariable gesehen: In dem folgenden Code ist `"Ich bin ein Platzhalter"` eine Zeichenkette:

```js
function checkGuess() {
  alert("Ich bin ein Platzhalter");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Anfang und das Ende einer einzelnen Zeichenketten-Deklaration verwenden: Sie können nicht `"Ich bin ein Platzhalter'` schreiben.

Sie können Zeichenfolgen auch mit Backticks (`` ` ``) deklarieren. Zeichenketten, die so deklariert sind, werden als _Template Literals_ bezeichnet und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke darin einbetten:

```js
const name = "Mahalia";

const greeting = `Hallo ${name}`;
```

Dies bietet Ihnen einen Mechanismus, um Zeichenfolgen zusammenzufügen.

### Bedingte Anweisungen

Zurückkehrend zu unserer `checkGuess()`-Funktion: Ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass sie nur eine Platzhalternachricht ausspuckt. Wir möchten, dass sie überprüft, ob der Tipp eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

Ersetzen Sie an dieser Stelle Ihre aktuelle `checkGuess()`-Funktion stattdessen durch diese Version:

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Vorherige Tipps:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Glückwunsch! Sie haben es richtig erraten!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!SPIEL VORBEI!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Falsch!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Letzter Tipp war zu niedrig!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Letzter Tipp war zu hoch!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

Das ist eine Menge an Code — puh! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- In der ersten Zeile wird eine Variable namens `userGuess` deklariert und ihr wird der aktuelle Wert zugewiesen, der im Textfeld eingegeben wird. Wir führen diesen Wert auch durch den integrierten `Number()`-Konstruktor, um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes stoßen wir auf unseren ersten bedingten Codeblock. Ein bedingter Codeblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Er sieht ein bisschen wie eine Funktion aus, ist aber keine. Die einfachste Form eines bedingten Blocks beginnt mit dem Schlüsselwort `if`, dann ein paar Klammern und dann ein paar geschweifte Klammern. Innerhalb der Klammern fügen wir einen Test ein. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, führen wir ihn nicht aus und gehen zum nächsten Code weiter. In diesem Fall testet der Test, ob die `guessCount`-Variable gleich `1` ist (d. h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn ja, machen wir den Textinhalt des Guesses-Absatzes gleich `Vorherige Tipps:`. Wenn nicht, tun wir das nicht.

- Als nächstes verwenden wir ein Template Literal, um den aktuellen `userGuess`-Wert an das Ende des Guesses-Absatzes anzuhängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:

  - Der erste `if (){ }` überprüft, ob der Tipp des Benutzers gleich der am Anfang unseres JavaScripts gesetzten `randomNumber` ist. Wenn ja, hat der Spieler korrekt geraten und das Spiel wird gewonnen, also zeigen wir dem Spieler eine Glückwunschnachricht in einer schönen grünen Farbe an, löschen den Inhalt des Box für niedrige/hohe Tipps und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen werden.
  - Jetzt haben wir eine weitere Prüfung an das Ende der letzten angeschlossen, indem wir eine `else if (){ }`-Struktur verwenden. Diese prüft, ob dieser Zug der letzte Versuch des Benutzers ist. Wenn ja, tut das Programm dasselbe wie im vorherigen Block, nur mit einer Spiel-Vorbei-Nachricht anstelle einer Glückwunschnachricht.
  - Der letzte Block, der an das Ende dieses Codes angefügt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests wahr zurückgibt (d. h. der Spieler hat nicht richtig geraten, hat aber noch Tipps übrig). In diesem Fall sagen wir ihm, dass er falsch liegt; dann führen wir einen weiteren Bedingungstest durch, um zu überprüfen, ob der Tipp höher oder niedriger als die Antwort war, und zeigen eine weitere Nachricht entsprechend an, um ihm höher oder niedriger zu sagen.

- Die letzten drei Zeilen in der Funktion bereiten uns auf den nächsten Hinweis vor, der übermittelt werden soll. Wir erhöhen die `guessCount`-Variable um 1, sodass der Spieler seinen Zug aufbraucht (`++` ist ein Inkrementierungsoperator — erhöhe um 1), und leeren den Wert aus dem Formulareingabefeld und fokussieren es erneut, bereit für den nächsten Tipp.

### Ereignisse

Zu diesem Zeitpunkt haben wir eine schön implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn die Schaltfläche "Tipp abgeben" gedrückt wird, und dazu müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Klick auf einen Button, eine geladene Seite, ein laufendes Video usw. — auf die wir reagieren und Codeblöcke ausführen können. **Ereignislistener** beobachten spezifische Ereignisse und rufen **Ereignishandler** auf, die Codeblöcke sind, die als Reaktion auf ein Ereignis ausgeführt werden.

Fügen Sie die folgende Zeile unterhalb Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir einen Ereignislistener zur `guessSubmit`-Schaltfläche hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) annimmt — die Art des Ereignisses, auf das wir lauschen (in diesem Fall `click`) als Zeichenkette und den Code, den wir ausführen möchten, wenn das Ereignis eintritt (in diesem Fall die `checkGuess()`-Funktion). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb von {{domxref("EventTarget.addEventListener", "addEventListener()")}} schreiben.

Versuchen Sie, Ihren Code zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem Punkt. Das einzige Problem ist jetzt, dass wenn Sie die richtige Antwort raten oder keine Tipps mehr haben, das Spiel kaputtgehen wird, weil wir die `setGameOver()`-Funktion, die ausgeführt werden soll, sobald das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns nun unseren fehlenden Code hinzufügen und die Funktionsweise des Beispiels vervollständigen.

### Vervollständigung der Spielfunktionalität

Fügen Sie die `setGameOver()`-Funktion an den unteren Rand Ihres Codes hinzu und gehen wir sie dann durch. Fügen Sie dies nun unter dem Rest Ihres JavaScripts hinzu:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Neues Spiel starten";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- Die ersten beiden Zeilen deaktivieren das Formulareingabefeld und die Schaltfläche, indem ihre disabled-Eigenschaften auf `true` gesetzt werden. Dies ist notwendig, weil wenn wir das nicht tun würden, könnte der Benutzer nach dem Ende des Spiels weitere Tipps eingeben, was das Spiel durcheinanderbringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen das Textetikett auf "Neues Spiel starten" und fügen es am unteren Rand unseres vorhandenen HTML hinzu.
- Die letzte Zeile setzt einen Ereignislistener auf unsere neue Schaltfläche, sodass bei einem Klick eine Funktion namens `resetGame()` ausgeführt wird.

Nun müssen wir auch diese Funktion definieren! Fügen Sie den folgenden Code erneut am unteren Rand Ihres JavaScripts hinzu:

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

Dieser ziemlich lange Codeblock setzt alles vollständig zurück, wie es zu Beginn des Spiels war, damit der Spieler eine weitere Runde spielen kann. Er:

- Setzt die `guessCount` wieder auf 1 zurück.
- Leert alle Texte in den Informationsabsätzen. Wir selektieren alle Absätze innerhalb von `<div class="resultParas"></div>`, dann durchlaufen wir jeden einzelnen, indem wir ihren `textContent` auf `''` (eine leere Zeichenkette) setzen.
- Entfernt die Rücksetzschaltfläche aus unserem Code.
- Aktiviert die Formularelemente und leert und fokussiert das Eingabefeld, bereit für einen neuen Tipp.
- Entfernt die Hintergrundfarbe aus dem `lastResult`-Absatz.
- Generiert eine neue Zufallszahl, sodass Sie nicht einfach die gleiche Zahl erneut raten!

**An diesem Punkt sollten Sie ein vollständig funktionierendes (einfaches) Spiel haben – herzlichen Glückwunsch!**

Alles, was uns jetzt noch übrig bleibt, ist, über einige andere wichtige Code-Funktionen zu sprechen, die Sie bereits gesehen haben, obwohl Sie es vielleicht nicht bemerkt haben.

### Schleifen

Ein Teil des obigen Codes, den wir uns genauer ansehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, das es Ihnen ermöglicht, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Zuallererst gehen Sie zu Ihren [Entwicklerwerkzeugen im Browser](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in der Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array. Wir werden später in diesem Modul [einen vollständigen Arrays-Leitfaden](/de/docs/Learn/JavaScript/First_steps/Arrays) durcharbeiten, aber vorerst: Ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of`-Schleife gibt Ihnen eine Möglichkeit, jedes Element im Array zu erhalten und einige JavaScript-Befehle darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie sich das erste Element in `fruits`.
2. Setzen Sie die `fruit`-Variable auf dieses Element, dann führen Sie den Code zwischen den `{}`-geschweiften Klammern aus.
3. Holen Sie sich das nächste Element in `fruits` und wiederholen Sie Schritt 2, bis Sie das Ende von `fruits` erreichen.

In diesem Fall schreibt der Code innerhalb der geschweiften Klammern `fruit` in die Konsole aus.

Schauen wir uns nun die Schleife in unserem Zahlenspiel an – die folgende befindet sich in der `resetGame()`-Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb von `<div class="resultParas">` enthält, indem die Methode {{domxref("Document.querySelectorAll", "querySelectorAll()")}} verwendet wird, und durchläuft dann jeden einzelnen, um ihren Textinhalt zu entfernen.

Beachten Sie, dass, obwohl `resetPara` eine Konstante ist, wir ihre internen Eigenschaften wie `textContent` ändern können.

### Eine kleine Diskussion über Objekte

Lassen Sie uns noch einen weiteren letzten Verbesserungsvorschlag machen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile direkt unterhalb der Zeile `let resetButton;` in Ihrem JavaScript hinzu und speichern Sie dann Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die {{domxref("HTMLElement/focus", "focus()")}}-Methode, um den Textcursor automatisch in das {{htmlelement("input")}}-Textfeld zu setzen, sobald die Seite geladen wird. Das bedeutet, dass der Benutzer direkt mit dem Eingeben seines ersten Tipps beginnen kann, ohne zuerst auf das Formulareingabefeld klicken zu müssen. Es ist nur eine kleine Ergänzung, verbessert jedoch die Benutzerfreundlichkeit, indem dem Benutzer ein guter visueller Hinweis darauf gegeben wird, was er tun muss, um das Spiel zu spielen.

Analysieren wir jetzt, was hier im Detail passiert. In JavaScript sind die meisten der Elemente, die Sie in Ihrem Code manipulieren, Objekte. Ein Objekt ist eine Sammlung verwandter Funktionen und Eigenschaften, die in einer einzigen Gruppierung gespeichert sind. Sie können Ihre eigenen Objekte erstellen, aber das ist recht fortgeschritten und wir werden es erst viel später im Kurs besprechen. Vorerst besprechen wir nur kurz die in Ihrem Browser eingebauten Objekte, die es Ihnen ermöglichen, viele nützliche Dinge zu tun.

In diesem speziellen Fall haben wir zuerst eine `guessField`-Konstante erstellt, die eine Referenz auf das Texteingabeformular in unserem HTML speichert — die folgende Zeile befindet sich unter unseren Deklarationen nahe der Spitze des Codes:

```js
const guessField = document.querySelector(".guessField");
```

Um diese Referenz zu erhalten, haben wir die {{domxref("document.querySelector", "querySelector()")}}-Methode des {{domxref("document")}}-Objekts verwendet. `querySelector()` nimmt ein Informationsstück — einen [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors), der das Element auswählt, auf das Sie eine Referenz haben möchten.

Da `guessField` nun eine Referenz auf ein {{htmlelement("input")}}-Element enthält, hat es nun Zugriff auf eine Reihe von Eigenschaften (im Grunde Variablen, die innerhalb von Objekten gespeichert sind, von denen einige ihre Werte nicht ändern können) und Methoden (im Grunde Funktionen, die innerhalb von Objekten gespeichert sind). Eine Methode, die bei Eingabeelementen verfügbar ist, ist `focus()`, sodass wir nun diese Zeile verwenden können, um das Texteingabefeld zu fokussieren:

```js
guessField.focus();
```

Variablen, die keine Referenzen auf Formularelemente enthalten, haben `focus()` nicht zur Verfügung. Zum Beispiel enthält die `guesses`-Konstante eine Referenz auf ein {{htmlelement("p")}}-Element und die `guessCount`-Variable enthält eine Zahl.

### Spielen mit Browser-Objekten

Lassen Sie uns ein bisschen mit den Browser-Objekten spielen.

1. Öffnen Sie zuerst Ihr Programm in einem Browser.
2. Öffnen Sie als Nächstes Ihre [Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass die JavaScript-Konsole geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}}-Element enthält. Sie werden auch bemerken, dass die Konsole die Namen von Objekten, die in der Ausführungsumgebung existieren, einschließlich Ihrer Variablen, autovervollständigt!
4. Geben Sie nun Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value`-Eigenschaft repräsentiert den aktuell eingegebenen Wert im Textfeld. Sie sehen, dass durch Eingabe dieses Befehls wir den Text im Textfeld geändert haben!

5. Versuchen Sie jetzt, `guesses` in die Konsole einzugeben und drücken Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Ihrer Tastatur). Die Konsole zeigt Ihnen an, dass die Variable ein {{htmlelement("p")}}-Element enthält.
6. Versuchen Sie nun folgende Zeile einzugeben:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, weil Absätze nicht die `value`-Eigenschaft haben.

7. Um den Text in einem Absatz zu ändern, benötigen Sie stattdessen die {{domxref("Node.textContent", "textContent")}}-Eigenschaft. Probieren Sie das:

   ```js
   guesses.textContent = "Wo ist mein Absatz?";
   ```

8. Nun zu einigen spaßigen Dingen. Versuchen Sie, die folgenden Zeilen nacheinander einzugeben:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite hat eine `style`-Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dies ermöglicht es uns, mit JavaScript dynamisch neue CSS-Stile auf Elemente anzuwenden.

## Für jetzt fertig…

Das ist es also für den Aufbau des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Versuchen Sie Ihren endgültigen Code aus, oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie das Beispiel nicht zum Laufen bringen können, überprüfen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
