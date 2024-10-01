---
title: Ein erster Sprung in JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Jetzt, da Sie etwas über die Theorie von JavaScript und die Möglichkeiten, die es bietet, gelernt haben, möchten wir Ihnen einen Eindruck davon vermitteln, wie der Prozess des Erstellens eines einfachen JavaScript-Programms aussieht, indem wir Sie durch ein praktisches Tutorial begleiten. Hier bauen Sie Schritt für Schritt ein einfaches Spiel "Errate die Zahl" auf.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML und CSS, sowie ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erste Erfahrung im Schreiben von JavaScript sammeln und zumindest ein grundlegendes Verständnis dafür gewinnen, was das Schreiben eines JavaScript-Programms beinhaltet.
      </td>
    </tr>
  </tbody>
</table>

Wir möchten hier wirklich klare Erwartungen setzen: Sie werden nicht erwartet, JavaScript bis zum Ende dieses Artikels zu lernen, oder auch nur den gesamten Code, den wir Sie bitten zu schreiben, zu verstehen. Stattdessen möchten wir Ihnen einen Eindruck davon geben, wie JavaScript-Features zusammenarbeiten und wie sich das Schreiben von JavaScript anfühlt. In den folgenden Artikeln werden Sie alle hier gezeigten Funktionen viel detaillierter wiederholen, also machen Sie sich keine Sorgen, wenn Sie nicht alles sofort verstehen!

> [!NOTE]
> Viele der Code-Features, die Sie in JavaScript sehen werden, sind in anderen Programmiersprachen gleich — Funktionen, Schleifen usw. Die Syntax des Codes sieht anders aus, aber die Konzepte sind größtenteils gleich.

## Denken wie ein Programmierer

Eine der schwierigsten Sachen beim Erlernen der Programmierung ist nicht die Syntax, die Sie lernen müssen, sondern wie Sie sie anwenden, um reale Probleme zu lösen. Sie müssen beginnen, wie ein Programmierer zu denken – dies beinhaltet im Allgemeinen, Beschreibungen dessen, was Ihr Programm tun muss, zu analysieren, herauszufinden, welche Code-Features benötigt werden, um diese Dinge zu erreichen, und wie man sie zusammenarbeiten lässt.

Dies erfordert eine Mischung aus harter Arbeit, Erfahrung mit der Programmiersyntax und Übung – plus ein wenig Kreativität. Je mehr Sie programmieren, desto besser werden Sie darin. Wir können Ihnen nicht versprechen, dass Sie in fünf Minuten ein "Programmierer-Gehirn" entwickeln werden, aber wir werden Ihnen zahlreiche Gelegenheiten bieten, das Denken wie ein Programmierer im Verlauf des Kurses zu üben.

Mit diesem Gedanken schauen wir uns das Beispiel an, das wir in diesem Artikel aufbauen werden, und betrachten den allgemeinen Prozess, es in greifbare Aufgaben zu zerlegen.

## Beispiel — Errate die Zahl Spiel

In diesem Artikel zeigen wir Ihnen, wie Sie das einfache Spiel aufbauen können, das Sie unten sehen:

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game", 900, 300)}}

Probieren Sie es aus – machen Sie sich mit dem Spiel vertraut, bevor Sie weitermachen.

Stellen wir uns vor, Ihr Chef hat Ihnen das folgende Briefing für die Erstellung dieses Spiels gegeben:

> Ich möchte, dass Sie ein einfaches Spiel vom Typ "Errate die Zahl" erstellen. Es sollte eine Zufallszahl zwischen 1 und 100 wählen und den Spieler herausfordern, die Zahl in 10 Zügen zu erraten. Nach jedem Zug sollte dem Spieler mitgeteilt werden, ob er richtig oder falsch liegt, und wenn er falsch liegt, ob die Schätzung zu niedrig oder zu hoch war. Es sollte dem Spieler auch sagen, welche Zahlen er zuvor geraten hat. Das Spiel endet, sobald der Spieler richtig rät oder keine Züge mehr hat. Wenn das Spiel endet, sollte dem Spieler eine Option gegeben werden, erneut zu spielen.

Beim Betrachten dieses Briefings können wir als erstes damit beginnen, es in einfache umsetzbare Aufgaben zu zerlegen, so weit wie möglich in einem Programmier-Gedanken:

1. Erzeuge eine Zufallszahl zwischen 1 und 100.
2. Notiere die Zuganzahl, bei der sich der Spieler befindet. Beginne bei 1.
3. Stelle dem Spieler eine Möglichkeit bereit, die Zahl zu erraten.
4. Sobald eine Zahl eingereicht wurde, notiere sie zuerst irgendwo, damit der Benutzer seine vorherigen Schätzungen sehen kann.
5. Prüfe als nächstes, ob es die richtige Zahl ist.
6. Wenn es richtig ist:

   1. Zeige eine Glückwunschnachricht an.
   2. Verhindere, dass der Spieler mehr Schätzungen eingibt (dies würde das Spiel durcheinanderbringen).
   3. Zeige eine Steuerung an, die es dem Spieler erlaubt, das Spiel neu zu starten.

7. Wenn es falsch ist und dem Spieler noch Züge bleiben:

   1. Sage dem Spieler, dass er falsch liegt, und ob seine Schätzung zu hoch oder zu niedrig war.
   2. Erlaube ihm, eine weitere Schätzung einzugeben.
   3. Erhöhe die Zuganzahl um 1.

8. Wenn es falsch ist und dem Spieler keine Züge mehr bleiben:

   1. Sage dem Spieler, dass das Spiel vorbei ist.
   2. Verhindere, dass der Spieler mehr Schätzungen eingibt (dies würde das Spiel durcheinanderbringen).
   3. Zeige eine Steuerung an, die es dem Spieler erlaubt, das Spiel neu zu starten.

9. Sobald das Spiel neu startet, stelle sicher, dass die Spiellogik und UI vollständig zurückgesetzt sind, und gehe dann zurück zu Schritt 1.

Lassen Sie uns nun weitergehen und schauen, wie wir diese Schritte in Code umwandeln können, indem wir das Beispiel aufbauen und die JavaScript-Funktionen erkunden, während wir voranschreiten.

### Erste Einrichtung

Um dieses Tutorial zu beginnen, möchten wir, dass Sie eine lokale Kopie der Datei [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html) erstellen ([sehen Sie es hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Öffnen Sie es sowohl in Ihrem Texteditor als auch in Ihrem Webbrowser. Derzeit sehen Sie eine einfache Überschrift, eine Anweisung und ein Formular zur Eingabe einer Schätzung, aber das Formular macht derzeit nichts.

Der Ort, an dem wir all unseren Code hinzufügen werden, befindet sich innerhalb des {{htmlelement("script")}}-Elements am Ende des HTML:

```html
<script>
  // Your JavaScript goes here
</script>
```

### Hinzufügen von Variablen zum Speichern unserer Daten

Lassen Sie uns anfangen. Fügen Sie zunächst die folgenden Zeilen innerhalb Ihres {{htmlelement("script")}}-Elements hinzu:

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

Dieser Abschnitt des Codes legt die Variablen und Konstanten fest, die wir benötigen, um die Daten zu speichern, die unser Programm verwenden wird.

Variablen sind im Wesentlichen Namen für Werte (wie Zahlen oder Textzeichenfolgen). Sie erstellen eine Variable mit dem Schlüsselwort `let`, gefolgt von einem Namen für Ihre Variable.

Konstanten werden auch verwendet, um Werte zu benennen, aber im Gegensatz zu Variablen können Sie den Wert nach der Zuweisung nicht mehr ändern. In diesem Fall verwenden wir Konstanten, um Referenzen auf Teile unserer Benutzeroberfläche zu speichern. Der Text in einigen dieser Elemente kann sich ändern, aber jede Konstante referenziert immer dasselbe HTML-Element, mit dem sie initialisiert wurde. Sie erstellen eine Konstante mit dem Schlüsselwort `const`, gefolgt von einem Namen für die Konstante.

Sie können Ihrer Variable oder Konstante einen Wert mit einem Gleichheitszeichen (`=`) zuweisen, gefolgt von dem Wert, den Sie ihr geben möchten.

In unserem Beispiel:

- Die erste Variable — `randomNumber` — wird einer Zufallszahl zwischen 1 und 100 zugewiesen, berechnet mit einem mathematischen Algorithmus.
- Die ersten drei Konstanten werden jeweils verwendet, um eine Referenz auf die Ergebnisabsätze in unserem HTML zu speichern und später Werte in die Absätze einzufügen (beachten Sie, wie sie in einem `<div>`-Element enthalten sind, das selbst verwendet wird, um alle drei später zum Zurücksetzen auszuwählen, wenn wir das Spiel neustarten):

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Die nächsten beiden Konstanten speichern Referenzen zum Formulareingabetext und Absende-Button und werden verwendet, um das Einreichen der Schätzung später zu steuern.

  ```html
  <label for="guessField">Enter a guess: </label>
  <input type="number" id="guessField" class="guessField" />
  <input type="submit" value="Submit guess" class="guessSubmit" />
  ```

- Unsere letzten beiden Variablen speichern eine Schätzanzahl von 1 (verwendet, um aufzuspüren, wie viele Schätzungen der Spieler bereits gemacht hat) und eine Referenz zu einem Zurücksetz-Knopf, der noch nicht existiert (aber später existieren wird).

> [!NOTE]
> Sie werden im Verlauf des Kurses viel mehr über Variablen und Konstanten lernen, beginnend mit dem Artikel [Speichern der benötigten Informationen — Variablen](/de/docs/Learn/JavaScript/First_steps/Variables).

### Funktionen

Fügen Sie als nächstes Folgendes unter Ihrem vorherigen JavaScript hinzu:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Funktionen sind wiederverwendbare Codeblöcke, die Sie einmal schreiben und immer wieder ausführen können, was die Notwendigkeit beseitigt, den Code ständig zu wiederholen. Dies ist wirklich nützlich. Es gibt eine Reihe von Möglichkeiten, Funktionen zu definieren, aber wir konzentrieren uns zunächst auf eine einfache Art. Hier haben wir eine Funktion definiert, indem wir das Schlüsselwort `function`, gefolgt von einem Namen, verwenden und Klammern danach setzen. Danach setzen wir zwei geschweifte Klammern (`{ }`). Innerhalb der geschweiften Klammern kommen alle Codes, die wir jedes Mal ausführen möchten, wenn wir die Funktion aufrufen.

Wenn wir den Code ausführen möchten, geben wir den Namen der Funktion ein, gefolgt von den Klammern.

Lassen Sie uns das jetzt ausprobieren. Speichern Sie Ihren Code und aktualisieren Sie die Seite in Ihrem Browser. Gehen Sie dann in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und geben Sie die folgende Zeile ein:

```js
checkGuess();
```

Nach dem Drücken von <kbd>Return</kbd>/<kbd>Enter</kbd> sollten Sie einen Alarm sehen, der `Ich bin ein Platzhalter` anzeigt; wir haben eine Funktion in unserem Code definiert, die einen Alarm erstellt, wenn wir sie aufrufen.

> [!NOTE]
> Sie werden später im Artikel [Funktionen — wiederverwendbare Codeblöcke](/de/docs/Learn/JavaScript/Building_blocks/Functions) viel mehr über Funktionen lernen.

### Operatoren

JavaScript-Operatoren ermöglichen es uns, Tests durchzuführen, Mathematik zu machen, Zeichenfolgen zusammenzuführen und dergleichen.

Falls Sie es noch nicht getan haben, speichern Sie Ihren Code, aktualisieren Sie die Seite in Ihrem Browser und öffnen Sie die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools). Dann können wir versuchen, die unten gezeigten Beispiele einzugeben – geben Sie jedes aus den "Beispiel"-Spalten genau so ein, wie gezeigt, drücken Sie <kbd>Return</kbd>/<kbd>Enter</kbd> nach jedem und sehen Sie, welche Ergebnisse sie zurückgeben.

Schauen wir uns zunächst die arithmetischen Operatoren an, zum Beispiel:

| Operator | Name           | Beispiel  |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Subtraktion    | `20 - 15` |
| `*`      | Multiplikation | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

Es gibt auch einige Abkürzungsoperatoren, sogenannte [zusammengesetzte Zuweisungsoperatoren](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators). Zum Beispiel, wenn Sie eine neue Zahl zu einer bestehenden hinzufügen und das Ergebnis zurückgeben möchten, könnten Sie dies tun:

```js
let number1 = 1;
number1 += 2;
```

Dies ist gleichwertig mit

```js
let number2 = 1;
number2 = number2 + 2;
```

Wenn wir True/False-Tests ausführen (zum Beispiel in Bedingungsanweisungen – siehe [unten](#bedingungsanweisungen)), verwenden wir [Vergleichsoperatoren](/de/docs/Web/JavaScript/Reference/Operators). Zum Beispiel:

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
2 === '2' // false; Zahl versus Zeichenfolge
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
2 !== '2' // true; Zahl versus Zeichenfolge
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

Zeichenfolgen werden zur Darstellung von Text verwendet. Wir haben bereits eine Zeichenfolgenvariable gesehen: im folgenden Code ist `"Ich bin ein Platzhalter"` eine Zeichenfolge:

```js
function checkGuess() {
  alert("I am a placeholder");
}
```

Sie können Zeichenfolgen mit doppelten Anführungszeichen (`"`) oder einfachen Anführungszeichen (`'`) deklarieren, aber Sie müssen dieselbe Form für den Anfang und das Ende einer einzelnen Zeichenfolgendeklaration verwenden: Sie können nicht `"Ich bin ein Platzhalter'` schreiben.

Sie können Zeichenfolgen auch mit Backticks (`` ` ``) deklarieren. Zeichenfolgen, die so deklariert werden, heißen _Template-Literals_ und haben einige besondere Eigenschaften. Insbesondere können Sie andere Variablen oder sogar Ausdrücke in ihnen einbetten:

```js
const name = "Mahalia";

const greeting = `Hello ${name}`;
```

Dies gibt Ihnen einen Mechanismus, um Zeichenfolgen zusammenzuführen.

### Bedingungsanweisungen

Zurück zu unserer `checkGuess()`-Funktion, ich denke, es ist sicher zu sagen, dass wir nicht wollen, dass sie einfach eine Platzhalternachricht ausgibt. Wir möchten, dass sie überprüft, ob eine Schätzung des Spielers richtig ist oder nicht, und entsprechend reagiert.

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

Das ist eine Menge Code — phew! Lassen Sie uns jeden Abschnitt durchgehen und erklären, was er tut.

- Die erste Zeile deklariert eine Variable namens `userGuess` und setzt ihren Wert auf den aktuellen Wert, der im Textfeld eingegeben ist. Wir stellen diesen Wert auch über den eingebauten `Number()`-Konstruktor sicher, dass der Wert definitiv eine Zahl ist. Da wir diese Variable nicht ändern, deklarieren wir sie mit `const`.
- Als nächstes stoßen wir auf unseren ersten Bedingungsblock. Ein Bedingungsblock ermöglicht es Ihnen, Code selektiv auszuführen, abhängig davon, ob eine bestimmte Bedingung wahr ist oder nicht. Er sieht ein wenig wie eine Funktion aus, ist aber keine. Die einfachste Form eines Bedingungsblocks beginnt mit dem Schlüsselwort `if`, dann folgen Klammern, dann folgen geschweifte Klammern. Innerhalb der Klammern fügen wir einen Test ein. Wenn der Test `true` zurückgibt, führen wir den Code innerhalb der geschweiften Klammern aus. Wenn nicht, tun wir es nicht und fahren mit dem nächsten Codeabschnitt fort. In diesem Fall prüft der Test, ob die `guessCount`-Variable gleich `1` ist (d.h. ob dies der erste Versuch des Spielers ist oder nicht):

  ```js
  guessCount === 1;
  ```

  Falls ja, machen wir den Textinhalt des Guesses-Absatzes gleich `Frühere Schätzungen:`. Falls nicht, tun wir es nicht.

- Als nächstes verwenden wir ein Template-Literal, um den aktuellen `userGuess`-Wert an das Ende des `guesses`-Absatzes anzuhängen, mit einem Leerzeichen dazwischen.
- Der nächste Block führt einige Überprüfungen durch:

  - Die erste `if (){ }`-Bedingung prüft, ob die Schätzung des Benutzers gleich der `randomNumber` ist, die oben in unserem JavaScript festgelegt ist. Wenn es so ist, hat der Spieler richtig geraten und das Spiel ist gewonnen, also zeigen wir dem Spieler eine Glückwunschnachricht mit einer schönen grünen Farbe, löschen den Inhalt des "Niedrig/Hoch"-Informationsfelds und führen eine Funktion namens `setGameOver()` aus, die wir später besprechen.
  - Jetzt haben wir einen weiteren Test an das Ende des letzten Tests angehängt, indem wir eine `else if (){ }`-Struktur verwenden. Diese prüft, ob dies die letzte Runde des Benutzers ist. Wenn dem so ist, tut das Programm dasselbe wie im vorherigen Block, außer dass es eine Game-Over-Nachricht anstelle einer Glückwunschnachricht anzeigt.
  - Der letzte Block, der an das Ende dieses Codes angehängt ist (das `else { }`), enthält Code, der nur ausgeführt wird, wenn keiner der anderen beiden Tests `true` zurückgibt (d.h. der Spieler hat nicht richtig geraten, aber er hat noch weitere Versuche, die er vornehmen kann). In diesem Fall sagen wir ihm, dass er falsch liegt, führen dann eine weitere Bedingungsprüfung durch, um zu prüfen, ob die Schätzung höher oder niedriger als die Antwort war und zeigen eine zusätzliche Nachricht unter Angabe von "höher" oder "niedriger" an.

- Die letzten drei Zeilen in der Funktion bereiten uns darauf vor, dass die nächste Schätzung abgegeben werden kann. Wir erhöhen die `guessCount`-Variable um 1, damit der Spieler seinen Zug verbraucht hat (`++` ist ein Inkrementierungsoperator — Erhöhung um 1) und leeren den Wert aus dem Formulartextfeld und setzen den Fokus darauf, bereit, für die nächste Eingabe.

### Ereignisse

An dieser Stelle haben wir eine schön implementierte `checkGuess()`-Funktion, aber sie wird nichts tun, weil wir sie noch nicht aufgerufen haben. Idealerweise möchten wir sie aufrufen, wenn der "Schätzung absenden"-Button gedrückt wird, und dazu müssen wir ein **Ereignis** verwenden. Ereignisse sind Dinge, die im Browser passieren — ein Button wird angeklickt, eine Seite geladen, ein Video abgespielt usw. — und bei denen wir Codeblöcke ausführen können. **Ereignis-Listener** beobachten bestimmte Ereignisse und rufen **Ereignis-Handler** auf, die Codeblöcke sind, die als Reaktion auf das Auslösen eines Ereignisses ausgeführt werden.

Fügen Sie die folgende Zeile unter Ihrer `checkGuess()`-Funktion hinzu:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Hier fügen wir dem `guessSubmit`-Button einen Ereignis-Listener hinzu. Dies ist eine Methode, die zwei Eingabewerte (genannt _Argumente_) nimmt — die Art des Ereignisses, auf das wir hören (in diesem Fall ein `click`) als String und den Code, den wir ausführen möchten, wenn das Ereignis auftritt (in diesem Fall die `checkGuess()`-Funktion). Beachten Sie, dass es nicht notwendig ist, die Klammern mitanzugeben, wenn man sie innerhalb von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) schreibt.

Versuchen Sie, Ihren Code zu speichern und zu aktualisieren, und Ihr Beispiel sollte funktionieren — bis zu einem gewissen Punkt. Das einzige Problem jetzt ist, dass wenn Sie die richtige Antwort erraten oder keine Schätzungen mehr haben, das Spiel kaputt gehen wird, weil wir die `setGameOver()`-Funktion, die ausgeführt werden soll, sobald das Spiel vorbei ist, noch nicht definiert haben. Lassen Sie uns nun unseren fehlenden Code hinzufügen und die Beispiel-Funktionalität abschließen.

### Fertigstellung der Spielfunktionalität

Fügen wir diese `setGameOver()`-Funktion am Ende unseres Codes hinzu und gehen dann hindurch. Fügen Sie dies jetzt, unterhalb des restlichen JavaScript-Codes, hinzu:

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

- Die ersten beiden Zeilen deaktivieren das Formulareingabetext und den Button, indem sie deren disabled-Eigenschaft auf `true` setzen. Das ist notwendig, denn wenn wir dies nicht täten, könnte der Benutzer auch noch nach dem Ende des Spiels Schätzungen einreichen, was die Dinge durcheinanderbringen würde.
- Die nächsten drei Zeilen erzeugen ein neues {{htmlelement("button")}}-Element, setzen seinen Textbezeichner auf "Spiel neu starten" und fügen es in unser bereits bestehendes HTML am Ende ein.
- Die letzte Zeile setzt einen Ereignis-Handler auf unseren neuen Button, sodass sobald er angeklickt wird, eine Funktion namens `resetGame()` ausgeführt wird.

Jetzt müssen wir auch diese Funktion definieren! Fügen Sie den folgenden Code am Ende Ihres JavaScripts hinzu:

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

Dieser ziemlich lange Block von Code setzt alles vollständig zurück auf den Zustand, den es am Anfang des Spiels hatte, sodass der Spieler einen weiteren Versuch starten kann. Er:

- Setzt die `guessCount` wieder auf 1 zurück.
- Löscht jeglichen Text aus den Informationsabsätzen. Wir wählen alle Absätze innerhalb `<div class="resultParas"></div>` aus, dann schleifen wir durch jeden davon und setzen deren `textContent` auf `''` (eine leere Zeichenfolge).
- Entfernt den Reset-Button aus unserem Code.
- Aktiviert die Formularelemente und leert und fokussiert das Textfeld, bereit für eine neue Eingabe.
- Entfernt die Hintergrundfarbe des `lastResult`-Absatzes.
- Erzeugt eine neue Zufallszahl, sodass man nicht dasselbe nochmal erraten muss!

**An diesem Punkt sollten Sie ein voll funktionsfähiges (einfaches) Spiel haben — Glückwunsch!**

Alles, was wir jetzt noch in diesem Artikel tun müssen, ist über einige andere wichtige Codefunktionen zu sprechen, die Sie vielleicht schon gesehen haben, auch wenn es Ihnen vielleicht nicht aufgefallen ist.

### Schleifen

Ein Teil des obigen Codes, den wir näher betrachten müssen, ist die [for...of](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife. Schleifen sind ein sehr wichtiges Konzept in der Programmierung, sie erlauben es Ihnen, ein Stück Code immer wieder auszuführen, bis eine bestimmte Bedingung erfüllt ist.

Um am Anfang zu beginnen, gehen Sie in Ihre [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) erneut und geben Sie Folgendes ein:

```js
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Was ist passiert? Die Zeichenfolgen `'Äpfel', 'Bananen', 'Kirschen'` wurden in Ihrer Konsole ausgegeben.

Das liegt an der Schleife. Die Zeile `const fruits = ['apples', 'bananas', 'cherries'];` erzeugt ein Array. Wir werden später in diesem Modul [einen vollständigen Arrays-Leitfaden](/de/docs/Learn/JavaScript/First_steps/Arrays) durchgehen, aber fürs Erste: Ein Array ist eine Sammlung von Elementen (in diesem Fall Zeichenfolgen).

Eine `for...of`-Schleife gibt Ihnen eine Möglichkeit, jedes Element im Array zu holen und etwas JavaScript darauf auszuführen. Die Zeile `for (const fruit of fruits)` sagt:

1. Hole das erste Element in `fruits`.
2. Setze die `fruit`-Variable auf dieses Element und führe dann den Code zwischen den `{}`-geschweiften Klammern aus.
3. Hole das nächste Element in `fruits` und wiederhole Schritt 2, bis Sie am Ende von `fruits` angekommen sind.

In diesem Fall schreibt der Code innerhalb der geschweiften Klammern `fruit` in die Konsole.

Schauen wir uns nun die Schleife in unserem Zahlerratenspiel an – der folgende Code ist innerhalb der `resetGame()`-Funktion zu finden:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Dieser Code erzeugt eine Variable, die eine Liste aller Absätze innerhalb `<div class="resultParas">` enthält, mittels der [`querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) Methode, dann schleift sie durch jeden dieser Absätze und entfernt den Textinhalt aus jedem.

Beachten Sie, dass obwohl `resetPara` eine Konstante ist, wir seine internen Eigenschaften wie das `textContent` ändern können.

### Eine kleine Diskussion über Objekte

Lassen Sie uns noch eine letzte Verbesserung hinzufügen, bevor wir zu dieser Diskussion kommen. Fügen Sie die folgende Zeile gleich unter der `let resetButton;`-Zeile oben in Ihrem JavaScript hinzu und speichern Sie Ihre Datei:

```js
guessField.focus();
```

Diese Zeile verwendet die [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode, um den Textcursor automatisch in das {{htmlelement("input")}}-Textfeld zu setzen, sobald die Seite geladen ist, was bedeutet, dass der Benutzer sofort mit der Eingabe seiner ersten Schätzung beginnen kann, ohne zuerst das Formfeld anklicken zu müssen. Es ist nur eine kleine Ergänzung, verbessert aber die Benutzerfreundlichkeit — es gibt dem Benutzer einen guten visuellen Hinweis darauf, was er tun muss, um das Spiel zu spielen.

Analysieren wir, was hier im Detail vor sich geht. In JavaScript sind die meisten Elemente, die Sie in Ihrem Code manipulieren, Objekte. Ein Objekt ist eine Sammlung verwandter Funktionalitäten, die in einer einzigen Gruppierung gespeichert sind. Sie können Ihre eigenen Objekte erstellen, aber das ist ziemlich fortgeschritten und wir werden darauf erst viel später in dem Kurs eingehen. Vorerst werden wir nur die eingebauten Objekte besprechen, die Ihr Browser enthält und die viele nützliche Dinge leisten.

In diesem speziellen Fall haben wir zunächst eine `guessField`-Konstante erstellt, die eine Referenz auf das Texteingabeformfeld in unserem HTML speichert — die folgende Zeile ist unter unseren Deklarationen oben im Code zu finden:

```js
const guessField = document.querySelector(".guessField");
```

Um diese Referenz zu erhalten, haben wir die [`querySelector()`](/de/docs/Web/API/Document/querySelector) Methode des [`document`](/de/docs/Web/API/Document) Objects verwendet. `querySelector()` nimmt ein Stück Information — ein [CSS-Selektor](/de/docs/Learn/CSS/Building_blocks/Selectors), der das Element auswählt, auf das Sie eine Referenz haben möchten.

Weil `guessField` nun eine Referenz auf ein {{htmlelement("input")}} Element enthält, hat es nun Zugriff auf eine Anzahl von Eigenschaften (im Wesentlichen Variablen, die innerhalb von Objekten gespeichert sind, von denen einige nicht verändert werden können) und Methoden (im Wesentlichen Funktionen, die innerhalb von Objekten gespeichert sind). Eine Methode, die für Eingabeelemente verfügbar ist, ist `focus()`, sodass wir diese Zeile verwenden können, um die Texteingabe zu fokussieren:

```js
guessField.focus();
```

Variablen, die keine Referenzen zu Formelementen enthalten, haben `focus()` nicht verfügbar. Zum Beispiel enthält die `guesses` Konstante eine Referenz zu einem {{htmlelement("p")}}-Element und die `guessCount` Variable enthält eine Zahl.

### Spielen mit Browser-Objekten

Lassen Sie uns ein wenig mit einigen Browser-Objekten spielen.

1. Öffnen Sie zuerst Ihr Programm in einem Browser.
2. Als nächstes öffnen Sie Ihre [Entwicklertools für den Browser](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) und stellen Sie sicher, dass die JavaScript-Konsole geöffnet ist.
3. Geben Sie `guessField` in die Konsole ein und die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("input")}}-Element enthält. Ihnen wird auch auffallen, dass die Konsole die Namen von Objekten automatisch vervollständigt, die im Ausführungsumfeld existieren, einschließlich Ihrer Variablen!
4. Geben Sie jetzt Folgendes ein:

   ```js
   guessField.value = 2;
   ```

   Die `value` Eigenschaft stellt den aktuellen Wert im Textfeld dar. Sie werden sehen, dass wir durch Eingabe dieses Befehls den Text im Textfeld geändert haben!

5. Geben Sie jetzt `guesses` in die Konsole ein und drücken Sie <kbd>Enter</kbd> (oder <kbd>Return</kbd>, je nach Tastatur). Die Konsole zeigt Ihnen, dass die Variable ein {{htmlelement("p")}}-Element enthält.
6. Versuchen Sie nun, die folgende Zeile einzugeben:

   ```js
   guesses.value;
   ```

   Der Browser gibt `undefined` zurück, weil Absätze nicht die `value` Eigenschaft haben.

7. Um den Text in einem Absatz zu ändern, benötigen Sie irgendeine [textContent](/de/docs/Web/API/Node/textContent) Eigenschaft. Versuchen Sie es damit:

   ```js
   guesses.textContent = "Where is my paragraph?";
   ```

8. Nun zu einigen spaßigen Dingen. Versuchen Sie, die folgenden Zeilen einzeln einzugeben:

   ```js
   guesses.style.backgroundColor = "yellow";
   guesses.style.fontSize = "200%";
   guesses.style.padding = "10px";
   guesses.style.boxShadow = "3px 3px 6px black";
   ```

   Jedes Element auf einer Seite hat eine `style`-Eigenschaft, die selbst ein Objekt enthält, dessen Eigenschaften alle im Element angewandten Inline-CSS-Stile enthalten. Dies ermöglicht es uns, neue CSS-Stile auf Elemente anzuwenden, die JavaScript verwenden.

## Für jetzt fertig…

Das ist es also zunächst mit dem Aufbau des Beispiels. Sie haben es bis zum Ende geschafft — gut gemacht! Testen Sie Ihren endgültigen Code oder [spielen Sie mit unserer fertigen Version hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Wenn Sie das Beispiel nicht zum Laufen bringen können, prüfen Sie es gegen den [Quellcode](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
