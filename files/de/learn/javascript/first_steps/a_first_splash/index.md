---
title: Ein erster Sprung in JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Nachdem Sie etwas über die Theorie von JavaScript gelernt haben und was man damit machen kann, möchten wir Ihnen eine Vorstellung davon geben, wie der Prozess der Erstellung eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial führen. Sie werden hier Schritt für Schritt ein einfaches "Errate die Zahl"-Spiel erstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS sowie ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erste Erfahrungen im Schreiben von JavaScript zu sammeln und
        zumindest ein grundlegendes Verständnis davon zu gewinnen, was das
        Schreiben eines JavaScript-Programms umfasst.
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Sie sollen am Ende dieses Artikels nicht erwarten, JavaScript zu lernen oder sogar den gesamten Code, den wir Sie bitten zu schreiben, zu verstehen. Stattdessen möchten wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie es sich anfühlt, JavaScript zu schreiben. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen viel detaillierter wieder besuchen, also machen Sie sich keine Sorgen, wenn Sie nicht sofort alles verstehen!

> [!NOTE]
> Viele der Code-Funktionen, die Sie in JavaScript sehen werden, sind dieselben wie in anderen Programmiersprachen — Funktionen, Schleifen usw. Der Code-Syntax sieht anders aus, aber die Konzepte sind weitgehend dieselben.

## Denken wie ein Programmierer

Eine der schwierigsten Dinge beim Programmieren zu lernen, ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie diese anwenden, um reale Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — das bedeutet im Allgemeinen, dass Sie beschreiben, was Ihr Programm tun muss, herausfinden, welche Code-Funktionen benötigt werden, um diese Dinge zu erreichen, und wie Sie sie miteinander arbeiten lassen können.

Dazu ist eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Praxis erforderlich — plus ein bisschen Kreativität. Je mehr Sie coden, desto besser werden Sie darin werden. Wir können Ihnen nicht versprechen, dass Sie in fünf Minuten ein "Programmierergehirn" entwickeln, aber wir werden Ihnen viele Gelegenheiten geben, während des Kurses das Denken wie ein Programmierer zu üben.

Mit diesem Gedanken im Hinterkopf schauen wir uns das Beispiel an, das wir in diesem Artikel aufbauen werden, und überprüfen den allgemeinen Prozess, es in greifbare Aufgaben zu zerlegen.

## Beispiel — Errate die Zahl Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen, das Sie unten sehen können:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Versuchen Sie, es zu spielen — machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen Sie sich vor, Ihr Chef hat Ihnen den folgenden Auftrag gegeben, dieses Spiel zu erstellen:

> Ich möchte, dass Sie ein einfaches Spiel vom Typ "Errate die Zahl" erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und den Spieler dann herausfordern, die Zahl in 10 Runden zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch ist, und wenn er falsch ist, ob die Schätzung zu niedrig oder zu hoch war. Außerdem sollte dem Spieler mitgeteilt werden, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig errät oder die Runden aufgebraucht sind. Wenn das Spiel endet, sollte der Spieler eine Möglichkeit erhalten, erneut zu spielen.

Wenn wir uns diesen Auftrag ansehen, können wir als erstes anfangen, ihn in einfache umsetzbare Aufgaben zu zerlegen, so programmiererhaft wie möglich:

1. Eine Zufallszahl zwischen 1 und 100 generieren.
2. Die Rundenanzahl festhalten, in der sich der Spieler befindet. Mit 1 beginnen.
3. Dem Spieler eine Möglichkeit bieten, zu raten, was die Zahl ist.
4. Nachdem ein Tipp eingereicht wurde, diesen zuerst irgendwo aufzeichnen, damit der Benutzer seine vorherigen Vermutungen sehen kann.
5. Anschließend überprüfen, ob es die richtige Zahl ist.
6. Wenn es richtig ist:

   1. Eine Glückwunschnachricht anzeigen.
   2. Verhindern, dass der Spieler weitere Vermutungen eingeben kann (das würde das Spiel verwirren).
   3. Eine Steuerung anzeigen, die dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn es falsch ist und der Spieler noch Runden übrig hat:

   1. Dem Spieler mitteilen, dass er falsch liegt und ob seine Vermutung zu hoch oder zu niedrig war.
   2. Ihm erlauben, eine weitere Vermutung einzugeben.
   3. Die Rundenanzahl um 1 erhöhen.

8. Wenn es falsch ist und der Spieler keine Runden mehr übrig hat:

   1. Dem Spieler mitteilen, dass das Spiel vorbei ist.
   2. Verhindern, dass der Spieler weitere Vermutungen eingeben kann (das würde das Spiel verwirren).
   3. Eine Steuerung anzeigen, die dem Spieler ermöglicht, das Spiel neu zu starten.

9. Sobald das Spiel neu gestartet wird, sicherstellen, dass die Spiellogik und die Benutzeroberfläche vollständig zurückgesetzt werden, dann zurück zu Schritt 1 gehen.

Lassen Sie uns jetzt weitermachen und untersuchen, wie wir diese Schritte in Code verwandeln können, indem wir das Beispiel aufbauen und JavaScript-Funktionen erkunden, während wir fortfahren.

### Initiale Einrichtung

Um dieses Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie es sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Im Moment sehen Sie eine einfache Überschrift, einen Anweisungsabschnitt und ein Formular für die Eingabe eines Tipps, aber das Formular wird derzeit nichts tun.

Der Ort, an dem wir unseren gesamten Code hinzufügen werden, ist innerhalb des {{htmlelement("script")}} Elements am Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zum Speichern unserer Daten

Lassen Sie uns beginnen. Fügen Sie zuerst die folgenden Zeilen in Ihr {{htmlelement("script")}} Element ein:

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

Variablen sind im Grunde genommen Namen für Werte (wie Zahlen oder Textstränge). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden ebenfalls verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nach der Festlegung nicht ändern. In diesem Fall verwenden wir Konstanten, um Verweise auf Teile unserer Benutzeroberfläche zu speichern. Der Text innerhalb einiger dieser Elemente könnte sich ändern, aber jede Konstante verweist immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante einen Wert zuweisen, indem Sie ein Gleichheitszeichen (`=`) gefolgt vom gewünschten Wert verwenden.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird eine zufällig generierte Zahl zwischen 1 und 100 zugewiesen und mit einem mathematischen Algorithmus berechnet.
- Die ersten drei Konstanten speichern jeweils einen Verweis auf die Ergebnissabsätze in unserem HTML und werden später im Code verwendet, um Werte in die Absätze einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>` Elements befinden, das selbst verwendet wird, um alle drei später zum Zurücksetzen auszuwählen, wenn wir das Spiel neu starten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Verweise auf das Texteingabeformular und die Schaltfläche zum Absenden und werden verwendet, um das Absenden des Tipps später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern die Anzahl der Tipps, die der Spieler hat (verwendet, um zu verfolgen, wie viele Tipps der Spieler gemacht hat) und einen Verweis auf eine Schaltfläche zum Zurücksetzen, die noch nicht existiert (aber später vorhanden sein wird).

> [!NOTE]
> Sie werden später im Kurs viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Speichern der Informationen, die Sie benötigen — Variablen](/de/docs/Learn/JavaScript/First_steps/Variables).

### Funktionen

Fügen Sie als Nächstes den folgenden Code unter Ihrem bisherigen JavaScript hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch man das ständige Wiederholen von Code spart. Das ist wirklich nützlich. Es gibt eine Reihe von Möglichkeiten, Funktionen zu definieren, aber wir konzentrieren uns jetzt auf einen einfachen Typ. Hier haben wir eine Funktion durch das Schlüsselwort `function` gefolgt von einem Namen und Klammern dahinter definiert. Danach setzen wir zwei geschweifte Klammern (`{ }`). In die geschweiften Klammern kommt der gesamte Code, den wir ausführen möchten, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion gefolgt von den Klammern an.

Lassen Sie uns das jetzt ausprobieren. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nachdem Sie <kbd>Return</kbd>/<kbd>Enter</kbd> gedrückt haben, sollten Sie ein Alert-Fenster sehen, das `I am a placeholder` anzeigt; wir haben eine Funktion in unserem Code definiert, die ein Alert erstellt, wann immer wir sie aufrufen.

> [!NOTE]
> Sie werden später im Artikel [Funktionen — Wiederverwendbare Codeblöcke](/de/docs/Learn/JavaScript/Building_blocks/Functions) viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren erlauben es uns, Tests durchzuführen, Mathematik zu betreiben, Strings zusammenzufügen und ähnliches.

Wenn Sie es noch nicht getan haben, speichern Sie Ihren Code, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools). Dann können wir die im Folgenden gezeigten Beispiele ausprobieren — geben Sie jedes aus den "Beispiel"-Spalten exakt so wie gezeigt ein, drücken Sie nach jeder Zeile auf <kbd>Return</kbd>/<kbd>Enter</kbd> und sehen Sie, welche Ergebnisse sie zurückgeben.

Zuerst schauen wir uns arithmetische Operatoren an, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige verfügbare Kurzoperatoren, sogenannte [zusammengesetzte Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Zum Beispiel, wenn Sie eine neue Zahl zu einer bestehenden addieren und das Ergebnis zurückgeben möchten, könnten Sie dies tun:

```js
let number1 = 1;
number1 += 2;
```

Dies ist äquivalent zu

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir wahr/falsche Tests durchführen (zum Beispiel innerhalb von Bedingungsanweisungen — siehe [unten](#bedingungsanweisungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Name</th>
      <th scope="col">Beispiel</th>
    </tr>
    <tr>
      <td><code>===</code></td>
      <td>Strikte Gleichheit (ist es exakt dasselbe?)</td>
      <td>
        <pre class="brush: js">
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; Zahl gegen String
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
2 !== '2' // true; Zahl gegen String
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>&#x3C;</code></td>
      <td>weniger als</td>
      <td>
        <pre class="brush: js">
6 &#x3C; 10 // true
20 &#x3C; 10 // false</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>></code></td>
      <td>mehr als</td>
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

Strings werden zur Darstellung von Text verwendet. Wir haben bereits eine String-Variable gesehen: im folgenden Code ist `"I am a placeholder"` ein String:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Strings mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Anfang und das Ende einer einzelnen String-Deklaration verwenden: Sie können nicht `"I am a placeholder'` schreiben.

Sie können auch Strings mit Backticks (`` ` ``) deklarieren. Strings, die auf diese Weise deklariert werden, nennt man _Template Literale_ und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in ihnen einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Strings zusammenzufügen.

### Bedingungsanweisungen

Wenn wir zu unserer `checkGuess()` Funktion zurückkehren, denke ich, dass es sicher ist zu sagen, dass wir nicht möchten, dass sie nur eine Platzhalternachricht ausgibt. Wir möchten, dass sie überprüft, ob der Tipp eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

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

Das ist eine Menge Code — puh! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der in das Textfeld eingegeben wurde. Wir führen diesen Wert auch durch den eingebauten `Number()` Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes stoßen wir auf unseren ersten bedingten Codeblock. Ein bedingter Codeblock lässt Sie selektiv Code ausführen, je nachdem, ob eine bestimmte Bedingung wahr ist oder nicht. Es sieht ein bisschen aus wie eine Funktion, ist aber keine. Die einfachste Form des bedingten Blocks beginnt mit dem Schlüsselwort `if`, dann einige Klammern, dann einige geschweifte Klammern. Innerhalb der Klammern fügen wir einen Test ein. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir es nicht und fahren mit dem nächsten Code fort. In diesem Fall überprüft der Test, ob die `guessCount` Variable gleich `1` ist (also, ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn es so ist, setzen wir den Textgehalt des Guesses-Absatzes auf `Previous guesses:`. Wenn nicht, tun wir es nicht.

- Als Nächstes verwenden wir ein Template Literal, um den aktuellen `userGuess` Wert am Ende des `guesses` Absatzes anzuhängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:

  - Der erste `if (){ }` überprüft, ob die Vermutung des Benutzers gleich der zu Beginn unseres JavaScripts festgelegten `randomNumber` ist. Wenn dies der Fall ist, hat der Spieler korrekt geraten und das Spiel ist gewonnen, sodass wir dem Spieler eine Glückwunschnachricht mit einer schönen grünen Farbe anzeigen, den Inhalt des "Niedrig/Hoch"-Informationstextfelds löschen und eine Funktion namens `setGameOver()` ausführen, die wir später besprechen werden.
  - Nun haben wir einen weiteren Test an das Ende des letzten angehängt, indem wir eine `else if (){ }` Struktur verwenden. Diese überprüft, ob dieser Versuch der letzte des Benutzers ist. Wenn dies der Fall ist, führt das Programm dasselbe aus wie im vorherigen Block, außer dass anstatt einer Glückwunschnachricht eine Game-Over-Nachricht angezeigt wird.
  - Der letzte Block, der an dieses Stück Code angehängt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests wahr zurückgibt (d. h. der Spieler hat nicht richtig geraten, aber er hat noch weitere Versuche übrig). In diesem Fall sagen wir ihm, er liegt falsch, dann führen wir einen weiteren bedingten Test durch, um zu überprüfen, ob die Vermutung höher oder niedriger als die Antwort war und zeigen eine weitere Nachricht an, je nachdem, ob höher oder niedriger.

- Die letzten drei Zeilen in der Funktion bereiten uns auf den nächsten eingereichten Tipp vor. Wir addieren 1 zur `guessCount` Variable, sodass der Spieler seinen Zug nutzt (`++` ist ein Inkrementierungsoperator — Erhöhung um 1) und leeren den Wert aus dem Formulareingabefeld und fokusieren es erneut, bereit für den nächsten Tipp.

### Events

An dieser Stelle haben wir eine schön implementierte `checkGuess()` Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn der "Tipp abgeben"-Button gedrückt wird, und dazu benötigen wir ein **Ereignis**. Ereignisse sind Dinge, die im Browser passieren — ein Button wird geklickt, eine Seite wird geladen, ein Video wird abgespielt usw. — in deren Reaktion wir Codeblöcke ausführen können. **Event-Listener** beobachten bestimmte Ereignisse und rufen **Event-Handler** auf, die Codeblöcke sind, die als Antwort auf das Auslösen eines Ereignisses ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()` Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit` Button einen Event-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) benötigt — die Art des Ereignisses, nach dem wir suchen (in diesem Fall `click`) als String und den Code, den wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall die `checkGuess()` Funktion). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie nun, Ihren Code zu speichern und zu aktualisieren, und Ihr Beispiel sollte bis zu einem gewissen Punkt funktionieren. Das einzige Problem jetzt ist, dass wenn Sie die richtige Antwort raten oder Ihnen die Vermutungen ausgehen, das Spiel kaputt geht, weil wir die `setGameOver()` Funktion, die ausgeführt werden soll, wenn das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns jetzt unseren fehlenden Code hinzufügen und die Beispiel-Funktionalität vervollständigen.

### Fertigstellen der Spiel-Funktionalität

Lassen Sie uns die `setGameOver()` Funktion am Ende Ihres Codes hinzufügen und dann durchgehen. Fügen Sie dies jetzt unter Ihrem restlichen JavaScript hinzu:

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

- Die ersten beiden Zeilen deaktivieren die Texteingabe des Formulars und die Schaltfläche, indem sie ihre deaktivierten Eigenschaften auf `true` setzen. Dies ist notwendig, weil der Benutzer andernfalls mehr Tipps einreichen könnte, nachdem das Spiel vorbei ist, was Dinge durcheinanderbringen würde.
- Die nächsten drei Zeilen generieren ein neues {{htmlelement("button")}} Element, setzen seine Textbeschriftung auf "Neues Spiel starten", und fügen es am Ende unseres bestehenden HTML hinzu.
- Die letzte Zeile stellt einen Event-Listener auf unserer neuen Schaltfläche ein, damit beim Klicken eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir diese Funktion auch definieren! Fügen Sie den folgenden Code ebenfalls am Ende Ihres JavaScripts hinzu:

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

Dieser ziemlich lange Block von Code setzt alles wieder auf die Anfangswerte zurück, sodass der Spieler eine weitere Runde spielen kann. Er:

- Setzt die `guessCount` auf 1 zurück.
- Löscht den gesamten Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb von `<div class="resultParas"></div>` aus und gehen durch jeden, indem wir seinen `textContent` auf `''` (eine leere Zeichenfolge) setzen.
- Entfernt die Schaltfläche zum Zurücksetzen aus unserem Code.
- Aktiviert die Formularelemente, leert das Textfeld und fokussiert es, damit ein neuer Tipp eingegeben werden kann.
- Entfernt die Hintergrundfarbe des `lastResult` Absatzes.
- Generiert eine neue Zufallszahl, damit man nicht wieder dieselbe Zahl rät!

**An diesem Punkt sollten Sie ein voll funktionsfähiges (einfaches) Spiel haben — herzlichen Glückwunsch!**

Was wir nun noch in diesem Artikel tun müssen, ist, ein paar andere wichtige Code-Elemente zu besprechen, die Sie bereits gesehen haben, auch wenn Ihnen dies möglicherweise nicht bewusst war.

### Schleifen

Ein Teil des oben genannten Codes, den wir genauer betrachten müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, das es Ihnen erlaubt, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Zunächst gehen Sie zu Ihrer [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben das Folgende ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Dies liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erzeugt ein Array. Wir werden [eine vollständige Arrays-Leitfaden](/de/docs/Learn/JavaScript/First_steps/Arrays) später in diesem Modul durchgehen, aber vorerst: ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of` Schleife gibt Ihnen eine Möglichkeit, jedes Element im Array zu erhalten und ein Stück JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie sich das erste Element in `fruits`.
2. Setzen Sie die `fruit` Variable auf dieses Element und führen Sie dann den Code zwischen den `{}` geschweiften Klammern aus.
3. Holen Sie sich das nächste Element in `fruits` und wiederholen Sie Schritt 2, bis Sie das Ende von `fruits` erreichen.

In diesem Fall schreibt der Code innerhalb der geschweiften Klammern den `fruit` in die Konsole.

Schauen wir uns nun die Schleife in unserem Nummern-Ratespiel an — das folgende kann in der Funktion `resetGame()` gefunden werden:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Absätze innerhalb `<div class="resultParas">` enthält, indem die [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) Methode verwendet wird, dann durchläuft es jeden und entfernt den Textinhalt des jeweiligen.

Beachten Sie, dass selbst wenn `resetPara` eine Konstante ist, wir ihre inneren Eigenschaften wie `textContent` ändern können.

### Eine kleine Diskussion über Objekte

Lassen Sie uns eine weitere finale Verbesserung vornehmen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile direkt unterhalb der Zeile `let resetButton;` hinzu, die sich oben in Ihrem JavaScript befindet, und speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode, um den Textcursor automatisch in das {{htmlelement("input")}} Texteingabefeld zu setzen, sobald die Seite geladen wird, sodass der Benutzer direkt mit der Eingabe seines ersten Tipps beginnen kann, ohne zuerst das Formularfeld anklicken zu müssen. Es ist nur eine kleine Ergänzung, verbessert jedoch die Benutzerfreundlichkeit, da es dem Benutzer einen guten visuellen Hinweis darauf gibt, was er tun muss, um das Spiel zu spielen.

Lassen Sie uns genauer analysieren, was hier vor sich geht. In JavaScript sind die meisten der Elemente, die Sie in Ihrem Code manipulieren werden, Objekte. Ein Objekt ist eine Sammlung von verwandten Funktionalitäten, die in einer einzigen Gruppierung gespeichert sind. Sie können Ihre eigenen Objekte erstellen, doch das ist ziemlich fortgeschritten und wir werden es erst viel später im Kurs behandeln. Für jetzt werden wir kurz die eingebauten Objekte besprechen, die Ihr Browser enthält, welche Ihnen viele nützliche Dinge ermöglichen.

In diesem speziellen Fall haben wir zuerst eine `guessField` Konstante erstellt, die einen Verweis auf das Texteingabefeld in unserem HTML speichert — die folgende Zeile kann sich in unseren Deklarationen oben im Code befinden:

```js
const guessField = document.querySelector(".guessField");
```

Um diesen Verweis zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector) Methode des [`document`](/de/docs/Web/API/Document) Objekts verwendet. `querySelector()` erwartet ein Eingabewert — ein [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors), der das Element auswählt, auf das Sie einen Verweis erhalten möchten.

Da `guessField` jetzt einen Bezug auf ein {{htmlelement("input")}} Element enthält, hat es nun Zugriff auf eine Reihe von Eigenschaften (im Wesentlichen Variablen, die in Objekten gespeichert sind, von denen einige ihre Werte nicht geändert werden können) und Methoden (im Wesentlichen Funktionen, die in Objekten gespeichert sind). Eine verfügbare Methode für Eingabeelemente ist `focus()`, sodass wir diese Zeile jetzt verwenden können, um die Texteingabe zu fokussieren:

```js
guessField.focus();
```

Variablen, die keine Verweise auf Formularelemente enthalten, werden `focus()` nicht zur Verfügung haben. Zum Beispiel enthält die `guesses` Konstante einen Verweis auf ein {{htmlelement("p")}} Element und die `guessCount` Variable enthält eine Zahl.

### Spielen mit Browserobjekten

Lassen Sie uns ein bisschen mit Browser-Objekten spielen.

1. Öffnen Sie zuerst Ihr Programm in einem Browser.
2. Öffnen Sie als nächstes Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass der JavaScript-Console-Tab geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein, und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}} Element enthält. Sie werden auch feststellen, dass die Konsole die Namen von Objekten, die innerhalb der Ausführungsumgebung existieren, einschließlich Ihrer Variablen, automatisch vervollständigt!
4. Geben Sie nun Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value` Eigenschaft repräsentiert den aktuellen Wert, der in das Textfeld eingegeben wurde. Sie sehen, dass wir durch die Eingabe dieses Befehls den Text im Textfeld geändert haben!

5. Versuchen Sie nun, `guesses` in die Konsole einzugeben und drücken Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}} Element enthält.
6. Versuchen Sie nun die folgende Zeile einzugeben:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, da Absätze nicht die `value` Eigenschaft haben.

7. Um den Text innerhalb eines Absatzes zu ändern, benötigen Sie stattdessen die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft. Probieren Sie dies:

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

   Jedes Element auf einer Seite hat eine `style` Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle all die Inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dies erlaubt es uns, dynamisch neue CSS-Stile auf Elemente mit JavaScript zu setzen.

## Vorerst abgeschlossen…

Das war's für den Bau des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Probieren Sie Ihren endgültigen Code aus oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie das Beispiel nicht zum Laufen bekommen, überprüfen Sie es mit dem [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
