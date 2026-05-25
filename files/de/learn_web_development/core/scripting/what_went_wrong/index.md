---
title: Was lief schief? JavaScript-Fehlerbehebung
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 2cd73547fb33680e060f65c5fb25d962a44f3cdc
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Wenn Sie im vorherigen Artikel das "Rate die Zahl"-Spiel erstellt haben, haben Sie vielleicht festgestellt, dass es nicht funktionierte. Keine Sorge — dieser Artikel soll Ihnen helfen, solche Probleme zu lösen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, grundlegende Erfahrung im Schreiben von JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen Sie die Arten von Fehlern, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlerbehebung.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der Browserentwicklertools.</li>
          <li>Grundlegende Vertrautheit mit JavaScript-Fehlermeldungen und deren Bedeutungen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlerarten

Im Allgemeinen gibt es drei Hauptarten von Fehlern, denen Sie begegnen, wenn Sie etwas im Code falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die bewirken, dass das Programm überhaupt nicht ausgeführt wird oder mitten in der Ausführung gestoppt wird — normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind in der Regel nicht allzu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm erfolgreich ausgeführt wird, jedoch falsche Ergebnisse liefert. Diese sind oft schwerer zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.
- **Laufzeitfehler**: Diese treten auf, wenn die Syntax des Codes korrekt ist, sodass er gestartet wird, aber etwas schiefgeht, während er ausgeführt wird. Wenn Sie beispielsweise versuchen, etwas aufzurufen, das eigentlich keine Funktion ist, wird ein Laufzeitfehler verursacht. Die Syntax ist in Ordnung, aber der Vorgang selbst kann nicht durchgeführt werden.

Okay, so einfach ist es nicht ganz — es gibt andere Unterscheidungen, wenn Sie tiefer einsteigen. Aber die obigen Klassifikationen reichen zu diesem frühen Zeitpunkt in Ihrer Karriere aus. Wir werden uns diese Arten im nächsten Abschnitt genauer ansehen.

## Ein fehlerhaftes Beispiel

Um loszulegen, kehren wir zu unserem Zahlenratespiel zurück — außer dass wir diesmal eine Version mit einigen absichtlichen Fehlern erkunden. Gehen Sie zu GitHub und erstellen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (siehe es [live hier laufen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie zunächst die lokale Kopie in Ihrem bevorzugten Texteditor und Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden feststellen, dass es nicht funktioniert, wenn Sie auf die Schaltfläche "Vermutung einreichen" klicken!

> [!NOTE]
> Möglicherweise haben Sie eine eigene Version des Spielebeispiels, die nicht funktioniert, und wollen sie beheben! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die hier vermittelten Techniken lernen. Danach können Sie zurückkehren und versuchen, Ihr Beispiel zu beheben.

An diesem Punkt werfen wir einen Blick in die Entwicklerkonsole, um zu sehen, ob sie Fehler meldet, und versuchen dann, diese zu beheben. Sie werden unten lernen, wie.

## Fehlerbehebung, die in der Konsole gemeldet werden

Früher im Kurs hatten wir Ihnen gezeigt, wie Sie einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben können (wenn Sie sich nicht daran erinnern können, wie Sie dies in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie es geht). Noch nützlicher ist, dass die Konsole Ihnen Fehlermeldungen gibt, wann immer ein Fehler im JavaScript auftritt, das in die JavaScript-Engine des Browsers eingespeist wird. Jetzt gehen wir auf Fehlersuche.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung sehen, die ungefähr so aussieht: !["Number guessing game"-Demoseite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schiefgegangen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung besagt, dass "guessSubmit.addeventListener is not a function", was bedeutet, dass der JavaScript-Interpreter die Funktion, die wir aufrufen, nicht erkennt. Oft bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich nicht sicher sind, wie ein Syntaxelement richtig geschrieben wird, schauen Sie auf MDN nach. Derzeit ist der beste Weg, dies zu tun, bei Ihrer bevorzugten Suchmaschine nach "mdn _Feature-Name_" zu suchen. Hier ist eine Abkürzung, um Ihnen etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Wenn wir uns diese Seite ansehen, scheint der Fehler zu sein, dass wir den Funktionsnamen falsch geschrieben haben! Dies ist ein Syntaxfehler. Denken Sie daran, dass JavaScript zwischen Groß- und Kleinschreibung unterscheidet. Jede geringfügige Abweichung in der Schreibweise oder Groß- und Kleinschreibung führt zu einem Fehler. Indem Sie `addeventListener` in `addEventListener` ändern, sollte dies behoben werden. Tun Sie dies jetzt.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function).

### Behebung eines Laufzeitfehlers

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Jetzt, wenn Sie versuchen, eine Vermutung einzugeben und die Schaltfläche "Vermutung einreichen" zu drücken, sehen Sie einen weiteren Fehler! ![Screenshot der gleichen "Number guessing game"-Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der lautet "X TypeError: lowOrHi is null".](variable-is-null.png)
3. Der diesmal gemeldete Fehler ist:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Je nach dem von Ihnen verwendeten Browser sehen Sie hier möglicherweise eine andere Meldung. Die obige Meldung ist das, was Firefox Ihnen zeigt, aber Chrome wird Ihnen beispielsweise Folgendes zeigen:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber unterschiedliche Browser beschreiben ihn unterschiedlich.

   > [!NOTE]
   > Dieser Fehler trat beim Laden der Seite nicht auf, weil er sich innerhalb einer Funktion befand (der Block `checkGuess() { }`). Wie Sie in unserem späteren [Artikel über Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) genauer lernen werden, wird Code innerhalb von Funktionen in einem separaten Gültigkeitsbereich als Code außerhalb von Funktionen ausgeführt. In diesem Fall wurde der Code nicht ausgeführt, und der Fehler wurde nicht ausgelöst, bis die Funktion `checkGuess()` durch Zeile 87 ausgeführt wurde.

4. Die im Fehler angegebene Zeilennummer ist 79. Schauen Sie sich Zeile 79 an, und Sie werden den folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die Eigenschaft `textContent` der Variable `lowOrHi` auf eine Textzeichenfolge zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es sollte. Lassen Sie uns sehen, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz, die Sie finden werden, ist in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, dass die Variable eine Referenz zu einem Element im HTML-Dokument enthält. Lassen Sie uns sehen, was die Variable nach dieser Zeile enthält. Fügen Sie den folgenden Code in Zeile 54 hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code druckt den Wert von `lowOrHi` in die Konsole, nachdem wir versucht haben, ihn in Zeile 51 zu setzen. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/console/log_static).

7. Speichern und aktualisieren Sie, und Sie sollten nun das Ergebnis des `console.log()` in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Ein Log-Statement ist in der Konsole sichtbar, das einfach "null" liest.](console-log-output.png) Tatsächlich ist der Wert von `lowOrHi` zu diesem Zeitpunkt `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi is null` überein. Es gibt definitiv ein Problem mit Zeile 51. Der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) bedeutet "nichts" oder "kein Wert". Unser Code, der `lowOrHi` auf eine Elementreferenz setzt, läuft schief.

8. Lassen Sie uns überlegen, woran das Problem liegen könnte. Zeile 51 verwendet die Methode [`document.querySelector()`](/de/docs/Web/API/Document/querySelector), um eine Elementreferenz mit einem CSS-Selektor auszuwählen. Wenn wir weiter oben in unserer Datei suchen, finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen hier also einen Klassenselektor, der mit einem Punkt (`.`) beginnt. Aber der Selektor, der in der Methode `querySelector()` in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in `.lowOrHi` in Zeile 51 zu ändern.
10. Versuchen Sie erneut, zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte nun das `<p>`-Element zurückgeben, das wir möchten. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder behalten, um später darauf zu verweisen — Ihre Wahl.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type).

### Behebung eines weiteren Syntaxfehlers

1. Jetzt, wenn Sie das Spiel noch einmal spielen, sollten Sie mehr Erfolg haben — das Spiel sollte absolut ohne Probleme durchlaufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder die Vermutungen ausgehen.
2. An diesem Punkt schlägt das Spiel erneut fehl, und es wird der gleiche Fehler ausgegeben, den wir zu Beginn erhalten haben — "TypeError: resetButton.addeventListener is not a function"! Diesmal wird er jedoch als aus Zeile 95 kommend aufgeführt.
3. Wenn Sie sich Zeile 95 ansehen, ist es leicht zu erkennen, dass wir hier denselben Fehler gemacht haben. Wir müssen `addeventListener` erneut in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei durchlaufen. Nach ein paar Spielen werden Sie jedoch zweifellos feststellen, dass das Spiel immer die Zahl 1 als "zufällige" Zahl auswählt, die Sie erraten müssen. Definitiv nicht so, wie wir wollen, dass das Spiel abläuft!

Es gibt definitiv ein Problem in der Spiellogik — das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der Variablen `randomNumber` und den Zeilen, in denen die Zufallszahl zuerst gesetzt wird. Die Instanz, die die zu ratende Zufallszahl zu Beginn des Spiels speichert, sollte sich um Zeile 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die Zufallszahl vor jedem nachfolgenden Spiel generiert, ist um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns erneut unserem Freund `console.log()` zu — fügen Sie die folgende Zeile direkt unterhalb jeder der beiden obigen Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, und spielen Sie ein paar Spiele — Sie werden sehen, dass `randomNumber` zu jedem Zeitpunkt, an dem es in der Konsole protokolliert wird, gleich 1 ist.

### Durch die Logik arbeiten

Um dies zu beheben, überlegen wir, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z.B. 0.5675493843.

```js
Math.random();
```

Als nächstes übergeben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Runden einer zufälligen Dezimalzahl zwischen 0 und 1 nach unten wird immer 0 zurückgeben, so dass das Hinzufügen von 1 immer 1 zurückgeben wird. Wir müssen die zufällige Zahl mit 100 multiplizieren, bevor wir sie abrunden. Das folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Wir wollen daher 1 hinzufügen, um eine zufällige Zahl zwischen 1 und 100 zu erhalten:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, dann speichern und aktualisieren — das Spiel sollte nun wie beabsichtigt ablaufen!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. In diesem Abschnitt werden die meisten davon hervorgehoben.

### Das Spiel ist nach dem ersten falschen Versuch vorbei

Dies könnte ein weiteres Symptom für das Vertauschen des Zuweisungs- und des strikten Gleichheitsoperators sein. Zum Beispiel, wenn wir diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
} else if (guessCount === 10) {
```

in

```js
} else if (guessCount = 10) {
```

Der Test würde immer `true` zurückgeben, was dazu führen würde, dass das Programm `setGameOver()` nach dem ersten falschen Versuch ausführt. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser ist ziemlich einfach — er bedeutet in der Regel, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list).

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall haben wir ihn verursachen können, indem wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

Dies hat den Browser dazu veranlasst zu denken, dass wir versuchen, den Inhalt der Funktion als Argument zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist einfach — es bedeutet in der Regel, dass Sie eine geschweifte Klammer in einer Funktion oder einem bedingten Strukturblock vergessen haben. Wir bekamen diesen Fehler, indem wir eine der schließenden geschweiften Klammern am Ende der Funktion `checkGuess()` löschten.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten in der Regel, dass Sie ein öffnendes oder schließendes Anführungszeichen eines Zeichenfolgenwerts vergessen haben. Beim ersten oben genannten Fehler würde _string_ durch unerwartete Zeichen anstelle eines Anführungszeichens am Anfang einer Zeichenfolge ersetzt werden. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen abgeschlossen wurde.

Für alle diese Fehler denken Sie daran, wie wir die Beispiele durchgegangen sind, die wir in der Anleitung behandelt haben. Wenn ein Fehler auftritt, schauen Sie sich die angegebene Zeilennummer an, gehen Sie zu dieser Zeile und sehen Sie, ob Sie erkennen können, was falsch ist. Bedenken Sie, dass der Fehler nicht unbedingt auf dieser Zeile liegen muss, und dass der Fehler möglicherweise nicht durch dasselbe Problem verursacht wird, das wir oben genannt haben!

> [!NOTE]
> Weitere Informationen zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Das waren also die Grundlagen zum Auffinden von Fehlern in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird es Ihnen ein paar Stunden Schlaf ersparen und Ihnen helfen, etwas schneller voranzukommen, wenn die Dinge nicht richtig laufen, besonders in den frühen Phasen Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlertypen, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie auf Fehler in Ihrem Code stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe bekommen! Bitten Sie um Hilfe in den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Teilen Sie uns mit, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
