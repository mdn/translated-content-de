---
title: Was ist schiefgelaufen? Fehlerbehebung in JavaScript
slug: Learn/JavaScript/First_steps/What_went_wrong
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

Als Sie im vorherigen Artikel das Spiel "Errate die Zahl" erstellt haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Sorge – dieser Artikel soll Sie davor bewahren, wegen solcher Probleme die Haare zu raufen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein
        Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit und das Selbstvertrauen zu erlangen, um Probleme im eigenen
        Code zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Arten von Fehlern

Allgemein gesprochen, wenn Sie im Code etwas falsch machen, gibt es zwei Hauptfehlerarten, auf die Sie stoßen werden:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die tatsächlich dazu führen, dass das Programm überhaupt nicht läuft oder mitten in der Ausführung stoppt – normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind in der Regel leicht zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code aber nicht das tut, was Sie beabsichtigt haben. Das bedeutet, dass das Programm erfolgreich läuft, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach – es gibt einige weitere Unterscheidungen, wenn Sie tiefer in das Thema einsteigen. Aber die obigen Klassifikationen reichen zu Beginn Ihrer Karriere aus. Wir werden uns beide Arten im Folgenden ansehen.

## Ein fehlerhaftes Beispiel

Um anzufangen, kehren wir zu unserem Zahlratenspiel zurück – außer dass wir diesmal eine Version untersuchen, in die einige absichtliche Fehler eingeführt wurden. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (siehe es [hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen – Sie werden feststellen, dass es nicht funktioniert, wenn Sie auf die Schaltfläche "Rateversuch absenden" klicken!

> [!NOTE]
> Sie könnten durchaus Ihre eigene Version des Spielbeispiels haben, die nicht funktioniert, die Sie vielleicht reparieren möchten! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durchgehen, damit Sie die Techniken lernen, die wir hier lehren. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu reparieren.

Konsultieren wir an diesem Punkt die Entwicklerkonsole, um festzustellen, ob sie Syntaxfehler meldet, und versuchen, diese zu beheben. Sie werden unten lernen, wie das geht.

## Behebung von Syntaxfehlern

Früher im Kurs haben wir Sie einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben lassen (wenn Sie sich nicht erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie es geht). Was noch nützlicher ist: Die Konsole gibt Ihnen Fehlermeldungen, wann immer ein Syntaxfehler in das JavaScript eingegeben wird, das an die JavaScript-Engine des Browsers übergeben wird. Nun, lassen Sie uns auf die Jagd gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung in etwa folgendermaßen sehen: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:86:3)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:86:15
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, teilt uns etwas darüber mit, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:86:15`, teilt uns mit, woher der Fehler im Code stammt: Zeile 86, Zeichen 15 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 86 in unserem Code-Editor ansehen, finden wir diese Zeile:

   > [!WARNING]
   > Die Fehlermeldung muss nicht unbedingt in Zeile 86 sein.
   >
   > Wenn Sie einen beliebigen Code-Editor mit einer Erweiterung verwenden, die einen Live-Server auf Ihrer lokalen Maschine startet, wird dadurch zusätzlicher Code eingefügt. Deshalb werden die Entwicklerwerkzeuge den Fehler in einer Zeile melden, die nicht 86 ist.

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich nicht sicher über die korrekte Schreibweise eines Syntaxstücks sind, ist es oft gut, das Feature auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, ist, mit Ihrer bevorzugten Suchmaschine nach "mdn _Name-des-Features_" zu suchen. Hier ist eine Abkürzung, um Ihnen in diesem Fall Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Beim Blick auf diese Seite scheint das Problem zu sein, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript case-sensitiv ist, sodass jede kleine Abweichung in der Schreibweise oder Groß-/Kleinschreibung einen Fehler verursachen wird. Das Ändern von `addeventListener` in `addEventListener` sollte dieses Problem beheben. Tun Sie dies jetzt.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function).

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie nun versuchen, einen Tipp einzugeben und auf die Schaltfläche "Rateversuch absenden" klicken, wird ein weiterer Fehler angezeigt! ![Screenshot derselben "Number guessing game" Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der "X TypeError: lowOrHi is null" lautet.](variable-is-null.png)
3. Diesmal lautet die gemeldete Fehlermeldung:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser könnte hier eine andere Meldung angezeigt werden. Die oben stehende Meldung wird von Firefox angezeigt, aber Chrome zeigt beispielsweise Folgendes an:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort beim Laden der Seite auf, weil der Fehler innerhalb einer Funktion auftrat (innerhalb des `checkGuess() { }` Blocks). Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn/JavaScript/Building_blocks/Functions) ausführlicher erfahren werden, läuft der Code in Funktionen in einem separaten Bereich als Code außerhalb der Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler wurde nicht ausgelöst, bis die `checkGuess()` Funktion durch die Zeile 86 ausgeführt wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 80. Werfen Sie einen Blick auf Zeile 80, und Sie sehen den folgenden Code:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent` Eigenschaft der `lowOrHi` Variable auf einen Textstring zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es sollte. Lassen Sie uns sehen, warum das so ist – versuchen Sie, andere Instanzen von `lowOrHi` im Code zu finden. Die früheste Instanz, die Sie finden werden, ist in Zeile 49:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, der Variable eine Referenz auf ein Element im HTML-Dokument zuzuweisen. Lassen Sie uns sehen, was die Variable nach dieser Zeile enthält. Fügen Sie den folgenden Code in Zeile 50 ein:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in die Konsole ausgeben, nachdem wir versucht haben, ihn in Zeile 49 festzulegen. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/Console/log_static).

7. Speichern und aktualisieren Sie, und Sie sollten nun das `console.log()` Ergebnis in Ihrer Konsole sehen. ![Screenshot derselben Demo. Ein Log-Statement ist in der Konsole sichtbar, das einfach "null" anzeigt.](console-log-output.png) Tatsächlich ist der Wert von `lowOrHi` an diesem Punkt `null`, und das deckt sich mit der Firefox-Fehlermeldung `lowOrHi is null`. Es gibt also definitiv ein Problem mit Zeile 49. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert bedeutet "nichts" oder "kein Wert". Unser Code zum Festlegen von `lowOrHi` auf ein Element geht also schief.

8. Lassen Sie uns überlegen, worin das Problem bestehen könnte. Zeile 49 verwendet die [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um eine Referenz auf ein Element durch Auswahl mit einem CSS-Selektor zu erhalten. Weiter oben in unserer Datei finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Hier benötigen wir einen Klassen-Selektor, der mit einem Punkt (`.`) beginnt, aber der in die `querySelector()` Methode übergebene Selektor in Zeile 49 hat keinen Punkt. Dies könnte das Problem sein! Versuchen Sie, `lowOrHi` zu `.lowOrHi` in Zeile 49 zu ändern.
10. Versuchen Sie, erneut zu speichern und zu aktualisieren, und Ihre `console.log()` Anweisung sollte das gewünschte `<p>` Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()` Zeile jetzt löschen oder behalten, um sie später zu referenzieren – ganz nach Ihrer Wahl.

> [!NOTE]
> Siehe unsere Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) für weitere Details zu diesem Fehler.

### Syntaxfehler Runde drei

1. Wenn Sie jetzt das Spiel erneut spielen, sollten Sie mehr Erfolg haben – das Spiel sollte ganz gut laufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder die Anzahl der Versuche aufgebraucht haben.
2. An diesem Punkt schlägt das Spiel erneut fehl, und derselbe Fehler wird ausgegeben, den wir zu Beginn hatten – "TypeError: resetButton.addeventListener is not a function"! Diesmal wird er jedoch als aus Zeile 94 stammend aufgelistet.
3. Wenn Sie sich Zeile 94 ansehen, ist es leicht zu erkennen, dass wir denselben Fehler hier gemacht haben. Wir müssen nur wieder `addeventListener` in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei laufen, jedoch werden Sie nach ein paar gespielten Runden zweifellos bemerken, dass das Spiel immer 1 als "zufällige" Zahl auswählt, die Sie erraten müssen. Definitiv nicht so, wie wir das Spiel ablaufen lassen wollten!

Es gibt definitiv ein Problem in der Spiellogik irgendwo – das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der `randomNumber` Variable und den Zeilen, in denen die Zufallszahl zuerst festgelegt wird. Die Instanz, die die Zufallszahl speichert, die wir zu Beginn des Spiels erraten wollen, sollte sich um Zeile 45 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die Zufallszahl vor jedem nachfolgenden Spiel generiert, befindet sich um Zeile 113:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns wieder unserem Freund `console.log()` zu – fügen Sie die folgende Zeile direkt unterhalb jeder der obigen zwei Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren, dann spielen Sie ein paar Runden – Sie werden sehen, dass `randomNumber` an jedem Punkt, an dem es in die Konsole protokolliert wird, gleich 1 ist.

### Durcharbeiten der Logik

Um das zu beheben, lassen Sie uns überlegen, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt, z.B. 0.5675493843.

```js
Math.random();
```

Als nächstes übergeben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 wird immer 0 ergeben, sodass das Hinzufügen von 1 dazu immer 1 ergeben wird. Wir müssen die zufällige Zahl mit 100 multiplizieren, bevor wir sie abrunden. Das folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher möchten wir 1 hinzufügen, um uns eine zufällige Zahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, dann speichern und aktualisieren Sie – das Spiel sollte jetzt so ablaufen, wie wir es beabsichtigt haben!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, Sie hätten gewonnen, unabhängig von der eingegebenen Zahl

Dies könnte ein weiteres Symptom dafür sein, dass die Zuweisungs- und die strengen Gleichheitsoperatoren verwechselt wurden. Zum Beispiel, wenn wir diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

in

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, wodurch das Programm meldet, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser ist ziemlich einfach – es bedeutet in der Regel, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Siehe unsere Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) für weitere Details zu diesem Fehler.

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall haben wir ihn dadurch erhalten, dass wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

verändert haben. Dadurch hat der Browser angenommen, dass wir versuchen, den Inhalt der Funktion in die Funktion als Argument zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Das ist einfach – es bedeutet in der Regel, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder einer Bedingungsstruktur vergessen haben. Wir haben diesen Fehler erhalten, indem wir eine der schließenden geschweiften Klammern nahe dem unteren Ende der `checkGuess()` Funktion gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten in der Regel, dass Sie die Anfangs- oder Schlusszeichen einer Zeichenkette weggelassen haben. Im ersten Fehler oben würde _string_ durch das/die unerwartete(n) Zeichen ersetzt werden, das/die der Browser fand, anstatt eines Anführungszeichens am Anfang einer Zeichenkette. Der zweite Fehler bedeutet, dass die Zeichenkette nicht mit einem Anführungszeichen beendet wurde.

Für alle diese Fehler denken Sie daran, wie wir die Beispiele angegangen sind, die wir im Durchgang untersucht haben. Wenn ein Fehler auftritt, schauen Sie sich die Zeilennummer an, die Ihnen gegeben wird, gehen Sie zu dieser Zeile und prüfen Sie, ob Sie erkennen können, was falsch ist. Denken Sie daran, dass der Fehler nicht unbedingt in dieser Zeile liegen muss, und dass der Fehler vielleicht nicht durch das gleiche Problem verursacht wird, das wir oben zitiert haben!

> [!NOTE]
> Siehe unsere Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) für weitere Details zu diesen Fehlern.

## Zusammenfassung

Damit haben wir die Grundlagen der Fehlerbehebung in einfachen JavaScript-Programmen erarbeitet. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird Ihnen das ein paar Stunden Schlaf sparen und Sie schneller voranbringen, wenn die Dinge nicht so klappen, wie Sie es erwartet haben, besonders in den frühen Phasen Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlertypen, die hier nicht aufgelistet sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten – siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie in Ihrem Code auf Fehler stoßen, die Sie nach dem Lesen dieses Artikels nicht zu beheben wissen, können Sie Hilfe bekommen! Bitten Sie auf den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels) um Hilfe. Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
