---
title: Erster Einblick in JavaScript
slug: Learn_web_development/Core/Scripting/A_first_splash
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Nun, nachdem Sie etwas über die Theorie von JavaScript und dessen Anwendungsmöglichkeiten gelernt haben, werden wir Ihnen eine Vorstellung davon geben, wie der Prozess zur Erstellung eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial führen. Hier werden Sie ein einfaches "Errate die Zahl"-Spiel Schritt für Schritt aufbauen.

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
          <li>Wie ein Programmierer denken.</li>
          <li>Erfahrung darin, wie das Schreiben von JavaScript ist.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir wollen hier wirklich klare Erwartungen setzen: Es wird nicht erwartet, dass Sie JavaScript bis zum Ende dieses Artikels gelernt haben oder auch nur allen Code verstehen, den wir Sie bitten zu schreiben. Stattdessen wollen wir Ihnen eine Vorstellung davon geben, wie die Funktionen von JavaScript zusammenarbeiten und wie sich das Schreiben von JavaScript anfühlt. In nachfolgenden Artikeln werden Sie alle hier gezeigten Funktionen noch einmal viel detaillierter behandeln, machen Sie sich also keine Sorgen, wenn Sie nicht sofort alles verstehen!

> [!NOTE]
> Viele der Codefunktionen, die Sie in JavaScript sehen werden, sind in anderen Programmiersprachen dieselben — Funktionen, Schleifen usw. Die Code-Syntax sieht anders aus, aber die Konzepte sind größtenteils dieselben.

## Wie ein Programmierer denken

Eines der schwierigsten Dinge beim Programmieren ist nicht die Syntax, die man lernen muss, sondern wie man sie anwendet, um echte Probleme zu lösen. Sie müssen anfangen, wie ein Programmierer zu denken — das beinhaltet im Allgemeinen, sich Beschreibungen anzusehen, was Ihr Programm tun muss, herauszufinden, welche Codefunktionen benötigt werden, um diese Dinge zu erreichen, und wie man sie zusammen funktionieren lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung — plus ein bisschen Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können nicht versprechen, dass Sie in fünf Minuten ein "Programmierergehirn" entwickeln, aber wir werden Ihnen viele Gelegenheiten geben, im Laufe des Kurses das Denken wie ein Programmierer zu üben.

In diesem Sinne lassen Sie uns das Beispiel ansehen, das wir in diesem Artikel aufbauen werden, und den allgemeinen Prozess der Zerlegung in greifbare Aufgaben überprüfen.

## Beispiel — Errate die Zahl Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen können, das Sie unten sehen können:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Versuchen Sie, es zu spielen — machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen wir uns vor, Ihr Chef hat Ihnen die folgende Vorgabe für die Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches "errate die Zahl"-Spiel erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und dann den Spieler herausfordern, die Zahl in 10 Versuchen zu erraten. Nach jedem Versuch sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt, und falls er falsch liegt, ob die Vermutung zu niedrig oder zu hoch war. Es sollte dem Spieler auch mitteilen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig geraten hat oder sobald ihm die Versuche ausgehen. Wenn das Spiel endet, sollte der Spieler die Möglichkeit haben, erneut zu spielen.

Beim Anblick dieser Vorgabe können wir als erstes anfangen, diese in einfache umsetzbare Aufgaben zu zerlegen, so weit wie möglich mit einer Programmierer-Mentalität:

1. Eine Zufallszahl zwischen 1 und 100 erzeugen.
2. Die Rundenanzahl des Spielers festhalten. Beginnen Sie bei 1.
3. Dem Spieler eine Möglichkeit bieten, die Zahl zu erraten.
4. Sobald ein Tipp abgegeben wurde, den Tipp zuerst irgendwo speichern, damit der Benutzer seine vorherigen Tipps sehen kann.
5. Als nächstes überprüfen, ob es die richtige Zahl ist.
6. Wenn es richtig ist:

   1. Glückwünsche anzeigen.
   2. Den Spieler daran hindern, weitere Tipps abzugeben (das würde das Spiel durcheinanderbringen).
   3. Eine Steuerung anzeigen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

7. Wenn es falsch ist und dem Spieler noch Züge verbleiben:

   1. Dem Spieler mitteilen, dass er falsch liegt und ob sein Tipp zu hoch oder zu niedrig war.
   2. Ihm erlauben, einen weiteren Tipp abzugeben.
   3. Die Rundenanzahl um 1 erhöhen.

8. Wenn es falsch ist und dem Spieler keine Züge mehr verbleiben:

   1. Dem Spieler mitteilen, dass das Spiel vorbei ist.
   2. Den Spieler daran hindern, weitere Tipps abzugeben (das würde das Spiel durcheinanderbringen).
   3. Eine Steuerung anzeigen, die es dem Spieler ermöglicht, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, sicherstellen, dass die Spiellogik und die Benutzeroberfläche komplett zurückgesetzt werden, dann zurück zu Schritt 1 gehen.

Lassen Sie uns nun fortfahren und ansehen, wie wir diese Schritte in Code umwandeln können, das Beispiel aufbauen und JavaScript-Funktionen erkunden, während wir fortschreiten.

### Erste Einrichtung

Um dieses Tutorial zu beginnen, sollten Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie sie sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Zur Zeit sehen Sie eine einfache Überschrift, einen Anweisungsparagraphen und ein Formular zum Eingeben eines Tipps, aber das Formular wird derzeit nichts tun.

Der Ort, an dem wir all unseren Code hinzufügen werden, befindet sich innerhalb des {{htmlelement("script")}} Elements am Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Variablen zum Speichern unserer Daten hinzufügen

Lassen Sie uns anfangen. Fügen Sie zunächst die folgenden Zeilen innerhalb Ihres {{htmlelement("script")}} Elements hinzu:

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

Dieses Abschnitt des Codes legt die Variablen und Konstanten fest, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird.

Variablen sind im Grunde genommen Namen für Werte (wie Zahlen oder Textzeichenfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let` gefolgt von einem Namen für Ihre Variable.

Konstanten werden auch verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nicht mehr ändern, sobald er festgelegt ist. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text in einigen dieser Elemente könnte sich ändern, aber jede Konstante verweist immer auf dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const` gefolgt von einem Namen für die Konstante.

Sie können einer Variablen oder Konstante einen Wert zuweisen mit einem Gleichheitszeichen (`=`) gefolgt von dem Wert, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird einer Zufallszahl zwischen 1 und 100 zugewiesen, die mit einem mathematischen Algorithmus berechnet wird.
- Die ersten drei Konstanten werden jeweils erstellt, um eine Referenz auf die Ergebnis-Paragraphen in unserem HTML zu speichern, und werden verwendet, um später im Code Werte in die Paragraphen einzufügen (beachten Sie, dass sie sich innerhalb eines `<div>` Elements befinden, das selbst bei einem Neustart verwendet wird, um alle drei später zurückzusetzen):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten zwei Konstanten speichern Referenzen auf das Formulareingabetextfeld und den Absende-Button und werden verwendet, um das Einreichen des Tipps später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten zwei Variablen speichern eine Tippanzahl von 1 (wird verwendet, um zu verfolgen, wie viele Tipps der Spieler abgegeben hat) und eine Referenz auf einen Zurücksetzebutton, der noch nicht existiert (aber später existieren wird).

> [!NOTE]
> Sie werden später im Kurs noch viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Speichern der benötigten Informationen — Variablen](/de/docs/Learn_web_development/Core/Scripting/Variables).

### Funktionen

Als nächstes fügen Sie das Folgende unterhalb Ihres vorherigen JavaScript hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, wodurch Sie sich das ständige Wiederholen von Code sparen. Das ist wirklich nützlich. Es gibt eine Reihe von Möglichkeiten, Funktionen zu definieren, aber für den Moment konzentrieren wir uns auf einen einfachen Typ. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function` verwendet, gefolgt von einem Namen, mit Klammern danach. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern kommt all der Code, den wir jedes Mal ausführen wollen, wann immer wir die Funktion aufrufen.

Wenn wir den Code ausführen wollen, tippen wir den Namen der Funktion gefolgt von den Klammern ein.

Lassen Sie uns das jetzt versuchen. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/Was_sind_Browser-Entwicklertools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollte ein Alert erscheinen, der `Ich bin ein Platzhalter` sagt; wir haben eine Funktion in unserem Code definiert, die jedes Mal einen Alert erstellt, wenn wir sie aufrufen.

> [!NOTE]
> Sie werden in dem Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn_web_development/Core/Scripting/Functions) noch viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren erlauben es uns, Tests durchzuführen, mathematische Berechnungen zu machen, Zeichenfolgen zusammenzufügen und Ähnliches.

Falls Sie es noch nicht getan haben, speichern Sie Ihren Code, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/Was_sind_Browser-Entwicklertools). Dann können wir die unten gezeigten Beispiele eintippen — tippen Sie jede aus den Spalten "Beispiel" genau wie gezeigt ein, drücken Sie nach jeder <kbd>Return</kbd>/<kbd>Enter</kbd> und sehen Sie, welche Ergebnisse sie zurückgeben.

Zuerst lassen Sie uns die arithmetischen Operatoren ansehen, zum Beispiel:

| Operator | Name             | Beispiel  |
| -------- | ---------------- | --------- |
| `+`      | Addition         | `6 + 9`   |
| `-`      | Subtraktion      | `20 - 15` |
| `*`      | Multiplikation   | `3 * 7`   |
| `/`      | Division         | `10 / 5`  |

Es gibt auch einige Abkürzungsoperatoren, die sogenannten [Compound Assignment Operators](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Wenn Sie zum Beispiel eine neue Zahl zu einer bestehenden hinzufügen und das Ergebnis zurückgeben möchten, könnten Sie das so tun:

```js
let number1 = 1;
number1 += 2;
```

Das ist äquivalent zu

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir Wahrheits-/Falschheits-Test durchführen (zum Beispiel innerhalb von Bedingungen — siehe [unten](#bedingungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

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
2 === '2' // false; Zahl gegenüber Zeichenfolge
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
2 !== '2' // true; Zahl gegenüber Zeichenfolge
</pre
        >
      </td>
    </tr>
    <tr>
      <td><code>&#x3C;</code></td>
      <td>Weniger als</td>
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

Zeichenfolgen werden verwendet, um Text darzustellen. Wir haben bereits eine Zeichenfolge gesehen: in folgendem Code ist `"Ich bin ein Platzhalter"` eine Zeichenfolge:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Anfang und das Ende einer einzigen Zeichenfolgenerklärung verwenden: Sie können nicht `"Ich bin ein Platzhalter'` schreiben.

Sie können auch Zeichenfolgen mit Backticks (`` ` ``) deklarieren. Zeichenfolgen, die so deklariert werden, werden _Template Literals_ genannt und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in sie einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Zeichenfolgen zusammenzufügen.

### Bedingungen

Zurück zu unserer `checkGuess()` Funktion, ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass sie nur eine Platzhalternachricht ausspuckt. Wir wollen, dass sie überprüft, ob ein Tipp eines Spielers korrekt ist oder nicht, und entsprechend reagiert.

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

Das ist eine Menge Code — puh! Lassen Sie uns durch jeden Abschnitt gehen und erklären, was er macht.

- Die erste Zeile erklärt eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Texteingabefeld eingegeben wurde. Wir führen diesen Wert auch durch den eingebauten `Number()` Konstruktor, nur um sicherzustellen, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes stoßen wir auf unseren ersten bedingten Codeblock. Ein bedingter Codeblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Er sieht ein wenig aus wie eine Funktion, ist aber keine. Die einfachste Form des bedingten Blocks beginnt mit dem Schlüsselwort `if`, folgt dann mit Klammern und geschweiften Klammern. In die Klammern fügen wir einen Test ein. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir das nicht und fahren mit dem nächsten Code weiter. In diesem Fall testet der Test, ob die Variable `guessCount` gleich `1` ist (d.h. ob dies der erste Zug des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Wenn es so ist, setzen wir den Textinhalt des Guesses-Paragraphen auf `Vorherige Tipps:`. Wenn nicht, tun wir das nicht.

- Als nächstes verwenden wir eine Template Literal, um den aktuellen `userGuess` Wert am Ende des `guesses` Paragraphen anzufügen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:

  - Das erste `if (){ }` überprüft, ob der Tipp des Benutzers gleich der zu Beginn unseres JavaScript festgelegten `randomNumber` ist. Wenn dies der Fall ist, hat der Spieler korrekt geraten und das Spiel ist gewonnen, sodass wir dem Spieler eine Glückwunschmeldung in einer schönen grünen Farbe zeigen, den Inhalt des Feldes zur niedrig/hoch-Rateninformation löschen und eine Funktion namens `setGameOver()` ausführen, die wir später besprechen werden.
  - Nun haben wir einen weiteren Test an das letzte angehängt, indem wir eine `else if (){ }` Struktur verwenden. Dieser prüft, ob diese Runde der letzte Zug des Benutzers ist. Wenn dies der Fall ist, macht das Programm dasselbe wie im vorherigen Block, außer mit einer Spiel-über-Meldung anstelle einer Glückwunschnachricht.
  - Der letzte Block, der an das Ende dieses Codes angehängt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests `true` zurückgibt (d.h. der Spieler hat nicht richtig geraten, aber er hat noch mehr Versuche). In diesem Fall sagen wir ihnen, dass sie falsch sind, dann führen wir einen weiteren Test durch, um zu überprüfen, ob der Tipp höher oder niedriger als die Antwort war, und zeigen eine entsprechende Nachricht an, die ihnen höher oder niedriger sagt.

- Die letzten drei Zeilen in der Funktion bereiten uns auf den nächsten Tipp vor, der eingereicht werden soll. Wir fügen der Variable `guessCount` 1 hinzu, sodass der Spieler seinen Zug verbraucht (`++` ist ein Inkrementoperator — erhöhen um 1), und leeren den Wert aus dem Formulareingabefeld und fokussieren es erneut, bereit für den nächsten Tipp, der eingegeben werden soll.

### Ereignisse

An diesem Punkt haben wir eine schön implementierte `checkGuess()` Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise wollen wir sie aufrufen, wenn der "Tipp eingeben"-Button gedrückt wird, und dazu müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Button wird geklickt, eine Seite wird geladen, ein Video wird abgespielt usw. — als Reaktion auf die wir Codeblöcke ausführen können. **Ereignis-Listener** beobachten spezifische Ereignisse und rufen **Ereignis-Handler** auf, Codeblöcke, die als Reaktion auf ein Auftreten eines Ereignisses ausgeführt werden.

Fügen Sie die folgende Zeile unterhalb Ihrer `checkGuess()` Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit` Button einen Ereignis-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (sogenannte _Argumente_) annimmt — die Art von Ereignis, auf die wir achten (in diesem Fall `click`), als Zeichenfolge, und den Code, den wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall die `checkGuess()` Funktion). Beachten Sie, dass wir die Klammern nicht angeben müssen, wenn wir sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreiben.

Versuchen Sie, Ihren Code jetzt zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem bestimmten Punkt. Das einzige Problem ist jetzt, dass das Spiel zusammenbricht, wenn Sie die richtige Antwort erraten oder Ihnen die Tipps ausgehen, weil wir die `setGameOver()` Funktion, die ausgeführt werden soll, sobald das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns nun unser fehlendes Code hinzufügen und die Funktionalität des Beispiels vervollständigen.

### Vervollständigung der Spielfunktionalität

Fügen Sie die `setGameOver()` Funktion an den unteren Rand Ihres Codes hinzu und gehen wir sie dann durch. Fügen Sie dies jetzt unter den Rest Ihres JavaScripts hinzu:

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

- Die ersten zwei Zeilen deaktivieren das Formulareingabefeld und den Button, indem sie deren disabled-Eigenschaften auf `true` setzen. Dies ist notwendig, da der Benutzer, wenn wir das nicht tun, nach dem Ende des Spiels noch mehr Tipps abgeben könnte, was die Dinge durcheinander bringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}} Element, setzen sein Textlabel auf "Neues Spiel starten" und fügen es an das Ende unseres bestehenden HTML hinzu.
- Die abschließende Zeile setzt einen Ereignis-Hörer auf unseren neuen Button, sodass beim Klicken eine Funktion namens `resetGame()` ausgeführt wird.

Nun müssen wir auch diese Funktion definieren! Fügen Sie den folgenden Code hinzu, wiederum an den unteren Rand Ihres JavaScripts:

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

Dieser ziemlich lange Codeblock setzt alles auf den Anfangszustand des Spiels zurück, damit der Spieler eine weitere Runde spielen kann. Er:

- Setzt `guessCount` zurück auf 1.
- Leert alle Texte aus den Informationsparagraphen. Wir wählen alle Paragraphen innerhalb von `<div class="resultParas"></div>` aus und durchlaufen jeden einzelnen, indem wir ihre `textContent` auf `''` (eine leere Zeichenfolge) setzen.
- Entfernt den Zurücksetztbutton aus unserem Code.
- Aktiviert die Formularelemente und leert sowie fokussiert das Textfeld erneut, bereit für eine neue Raterunde.
- Entfernt die Hintergrundfarbe des `lastResult` Paragraphen.
- Erzeugt eine neue Zufallszahl, damit Sie nicht einfach zweimal dieselbe Zahl raten!

**An diesem Punkt sollten Sie ein voll funktionsfähiges (einfaches) Spiel haben — herzlichen Glückwunsch!**

Alles, was wir in diesem Artikel noch zu tun haben, ist, über einige andere wichtige Code-Features zu sprechen, die Sie bereits gesehen haben, auch wenn Sie es möglicherweise nicht bemerkt haben.

### Schleifen

Ein Teil des oben genannten Codes, den wir uns genauer ansehen müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, das es Ihnen erlaubt, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Um damit zu beginnen, gehen Sie wieder zu Ihrem [JavaScript-Entwicklertools-Konsolen](/de/docs/Learn_web_development/Howto/Tools_and_setup/Was_sind_Browser-Entwicklertools) und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'apples', 'bananas', 'cherries'` wurden in Ihrer Konsole ausgegeben.

Dies liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erstellt ein Array. Wir werden später in diesem Modul ein vollständiges Tutorial zu [Arrays](/de/docs/Learn_web_development/Core/Scripting/Arrays) durchgehen, aber für jetzt: ein Array ist eine Sammlung von Elementen (in diesem Fall Strings).

Eine `for...of` Schleife gibt Ihnen einen Weg, jedes Element im Array zu nehmen und etwas JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Holen Sie das erste Element in `fruits`.
2. Setzen Sie die `fruit` Variable auf dieses Element, dann führen Sie den Code zwischen den `{}` geschweiften Klammern aus.
3. Holen Sie das nächste Element in `fruits`, und wiederholen Sie 2, bis Sie das Ende von `fruits` erreichen.

In diesem Fall schreibt der Code in den geschweiften Klammern `fruit` in die Konsole.

Nun lassen Sie uns die Schleife in unserem Zahlenraten-Spiel ansehen — das Folgende findet sich innerhalb der `resetGame()` Funktion:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erstellt eine Variable, die eine Liste aller Paragraphen innerhalb von `<div class="resultParas">` enthält, mit der Methode [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), dann durchläuft sie jeden einzelnen und entfernt den Textinhalt jedes.

Beachten Sie, dass auch wenn `resetPara` eine Konstante ist, wir ihre internen Eigenschaften wie `textContent` ändern können.

### Eine kleine Diskussion über Objekte

Lassen Sie uns noch eine weitere endgültige Verbesserung hinzufügen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile unmittelbar unter der `let resetButton;`-Zeile nahe dem oberen Rand Ihres JavaScripts hinzu, dann speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die Methode [`focus()`](/de/docs/Web/API/HTMLElement/focus), um automatisch den Textcursor in das {{htmlelement("input")}} Textfeld zu setzen, sobald die Seite geladen wird, was bedeutet, dass der Benutzer direkt seinen ersten Tipp eintippen kann, ohne zuerst auf das Formularfeld klicken zu müssen. Es ist nur eine kleine Ergänzung, verbessert aber die Bedienbarkeit — indem sie dem Benutzer einen guten visuellen Hinweis gibt, was er tun muss, um das Spiel zu spielen.

Analysieren wir dies ein wenig genauer. In JavaScript sind die meisten der Elemente, die Sie in ihrem Code manipulieren, Objekte. Ein Objekt ist eine Sammlung zusammengehöriger Funktionen, die in einer einzigen Gruppierung gespeichert sind. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten und wir werden das erst viel später im Kurs abdecken. Für jetzt werden wir nur kurz über die eingebauten Objekte diskutieren, die Ihr Browser enthält und die Ihnen viele nützliche Sachen erlauben.

In diesem speziellen Fall haben wir zuerst eine `guessField` Konstante erstellt, die ein Referenz auf das Texteingabeformularfeld in unserem HTML speichert — die folgende Zeile findet sich in unseren Deklarationen nahe dem oberen Rand des Codes:

```js
const guessField = document.querySelector(".guessField");
```

Um diese Referenz zu erhalten, haben wir die Methode [`querySelector()`](/de/docs/Web/API/Document/querySelector) des [`document`](/de/docs/Web/API/Document) Objekts verwendet. `querySelector()` nimmt ein Stück Information — einen [CSS-Selektor](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors), der das Element auswählt, auf das Sie sich beziehen möchten.

Weil `guessField` jetzt eine Referenz auf ein {{htmlelement("input")}} Element enthält, hat es nun Zugang zu einer Reihe von Eigenschaften (im Grunde Variablen, die in Objekten gespeichert sind, von denen einige ihre Werte nicht ändern können) und Methoden (im Grunde Funktionen, die in Objekten gespeichert sind). Eine Methode, die für Eingabeelemente verfügbar ist, ist `focus()`, sodass wir jetzt diese Zeile verwenden können, um das Texteingabefeld zu fokussieren:

```js
guessField.focus();
```

Variablen, die keine Referenz auf Formularelemente enthalten, werden `focus()` nicht zur Verfügung haben. Zum Beispiel enthält die `guesses` Konstante eine Referenz auf ein {{htmlelement("p")}} Element, und die `guessCount` Variable enthält eine Zahl.

### Spielen mit Browser-Objekten

Lassen Sie uns ein wenig mit Browser-Objekten spielen.

1. Öffnen Sie zunächst Ihr Programm in einem Browser.
2. Öffnen Sie als nächstes Ihre [Entwicklertools im Browser](/de/docs/Learn_web_development/Howto/Tools_and_setup/Was_sind_Browser-Entwicklertools), und stellen Sie sicher, dass die Registerkarte JavaScript-Konsole geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}} Element enthält. Sie werden auch bemerken, dass die Konsole die Namen der Objekte, die in der Ausführungsumgebung existieren, einschließlich Ihrer Variablen, automatisch vervollständigt!
4. Geben Sie nun Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die Eigenschaft `value` repräsentiert den aktuellen Wert, der in das Textfeld eingegeben wurde. Sie werden sehen, dass wir durch Eingabe dieses Befehls den Text im Textfeld geändert haben!

5. Versuchen Sie nun, `guesses` in die Konsole zu tippen und drücken Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}} Element enthält.
6. Versuchen Sie nun, die folgende Zeile einzugeben:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, da Paragraphen die Eigenschaft `value` nicht haben.

7. Um den Text in einem Paragraphen zu ändern, benötigen Sie die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent). Versuchen Sie dies:

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

   Jedes Element auf einer Seite hat eine `style` Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle Inline-CSS-Stile enthalten, die auf dieses Element angewendet werden. Dies erlaubt uns, mit JavaScript dynamisch neue CSS-Stile auf Elemente anzuwenden.

## Zusammenfassung

Das wars für den Aufbau des Beispiels. Sie haben das Ende erreicht — gut gemacht! Probieren Sie Ihren endgültigen Code aus, oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie Ihre Version des Beispiels nicht zum Laufen bringen können, überprüfen Sie sie gegen den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

Die nächste Lektion kann auch helfen — darin diskutieren wir, was beim Schreiben von JavaScript-Code schiefgehen kann, indem wir sich auf das "Errate die Zahl"-Spiel beziehen.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
