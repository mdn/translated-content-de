---
title: Was ist schiefgelaufen? Fehlerbehebung in JavaScript
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie das "Guess the number"-Spiel im vorherigen Artikel erstellt haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Angst — dieser Artikel soll Sie davor bewahren, wegen solcher Probleme verzweifeln zu müssen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

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
          <li>Verständnis der Arten von Fehlern, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlersuche.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der DevTools des Browsers.</li>
          <li>Grundlegendes Verständnis von JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlertypen

Allgemein gesagt, gibt es zwei Hauptfehlerarten, auf die Sie stoßen werden, wenn Sie etwas im Code falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm überhaupt nicht läuft oder mitten im Betrieb stoppt — normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind in der Regel nicht allzu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm erfolgreich ausgeführt wird, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach — es gibt einige andere Unterscheidungen, je weiter Sie in die Tiefe gehen. Aber die obigen Klassifikationen reichen für diese frühe Phase Ihrer Karriere aus. Wir werden uns mit beiden Arten beschäftigen, wenn wir weitermachen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, lassen Sie uns zu unserem "Zahlenraten"-Spiel zurückkehren — diesmal werden wir jedoch eine Version mit absichtlich eingeführten Fehlern erkunden. Gehen Sie zu GitHub und erstellen Sie eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (siehe es [hier live ausführen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und im Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden feststellen, dass es nicht funktioniert, wenn Sie die Schaltfläche "Submit guess" drücken!

> [!NOTE]
> Möglicherweise haben Sie Ihre eigene Version des Spielbeispiels, das nicht funktioniert, und die Sie möglicherweise reparieren möchten! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durchgehen, damit Sie die hier vermittelten Techniken lernen können. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu beheben.

An dieser Stelle sollten wir die Entwicklertool-Konsole konsultieren, um zu sehen, ob sie Syntaxfehler meldet, und dann versuchen, diese zu beheben. Sie lernen unten, wie das geht.

## Syntaxfehler beheben

Früher im Kurs haben wir Sie dazu gebracht, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben (falls Sie nicht mehr wissen, wie Sie dies in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie). Noch nützlicher ist, dass die Konsole Ihnen Fehlermeldungen gibt, wann immer ein Syntaxfehler im JavaScript vorliegt, das an die JavaScript-Engine des Browsers gesendet wird. Gehen wir jetzt auf die Fehlersuche.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung ähnlich der folgenden sehen: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns, was schiefgegangen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufgerufen haben, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich der korrekten Schreibweise eines Syntaxelements nicht sicher sind, ist es oft gut, das Feature auf MDN nachzuschlagen. Der derzeit beste Weg, dies zu tun, besteht darin, mit Ihrer bevorzugten Suchmaschine nach "mdn _name-of-feature_" zu suchen. Hier ist eine Abkürzung, um Ihnen Zeit in diesem Fall zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Wenn wir uns diese Seite ansehen, scheint der Fehler zu sein, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript case-sensitiv ist, sodass jeder kleine Unterschied in der Schreibweise oder Groß-/Kleinschreibung einen Fehler verursacht. Wenn Sie `addeventListener` in `addEventListener` ändern, sollte das Problem behoben werden. Tun Sie dies jetzt.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) Referenzseite.

### Syntaxfehler, Runde 2

1. Speichern Sie Ihre Seite und aktualisieren Sie sie. Der Fehler sollte verschwunden sein.
2. Wenn Sie nun versuchen, eine Zahl einzugeben und die Schaltfläche "Submit guess" zu drücken, wird ein weiterer Fehler angezeigt! ![Screenshot der gleichen "Number guessing game" Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der lautet "X TypeError: lowOrHi is null".](variable-is-null.png)
3. Dieses Mal wird folgender Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser können Sie hier eine andere Meldung sehen. Die oben stehende Nachricht ist, was Ihnen Firefox anzeigen wird, aber Chrome wird Ihnen beispielsweise Folgendes anzeigen:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort beim Laden der Seite auf, da dieser Fehler innerhalb einer Funktion auftrat (innerhalb des `checkGuess() { }`-Blocks). Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions) ausführlicher erfahren werden, läuft der Code innerhalb von Funktionen in einem separaten Bereich als der Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler nicht ausgelöst, bis die `checkGuess()` Funktion von Zeile 87 ausgeführt wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 79. Werfen Sie einen Blick auf Zeile 79, und Sie sehen folgenden Code:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der `lowOrHi`-Variablen auf eine Textzeichenfolge zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es soll. Lassen Sie uns sehen, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz, die Sie finden werden, ist in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, dass die Variable eine Referenz zu einem Element im HTML-Dokument enthält. Lassen Sie uns sehen, was die Variable enthält, nachdem diese Zeile ausgeführt wurde. Fügen Sie die folgende Zeile in Zeile 54 hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` nach der Zuweisung in Zeile 51 an die Konsole ausgeben. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/console/log_static).

7. Speichern und aktualisieren Sie die Seite, und Sie sollten das `console.log()`-Ergebnis nun in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Eine Log-Anweisung ist in der Konsole sichtbar, der Wert lautet einfach "null".](console-log-output.png) Tatsächlich ist der Wert von `lowOrHi` an diesem Punkt `null`, was der Firefox-Fehlermeldung `lowOrHi is null` entspricht. Es liegt also definitiv ein Problem in Zeile 51 vor. Der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, funktioniert nicht richtig.

8. Überlegen wir, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode, um eine Referenz zu einem Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Wenn wir weiter oben in der Datei suchen, finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen hier also einen Klassen-Selektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in die `querySelector()`-Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in `.lowOrHi` in Zeile 51 zu ändern.
10. Versuchen Sie erneut zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte das gewünschte `<p>`-Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder sie behalten, um später darauf zu verweisen — ganz wie Sie möchten.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) Referenzseite.

### Syntaxfehler, Runde 3

1. Wenn Sie jetzt wieder versuchen, das Spiel durchzuspielen, sollten Sie mehr Erfolg haben — das Spiel sollte problemlos durchlaufen, bis Sie es beenden, entweder indem Sie die richtige Zahl raten oder indem Ihnen die Versuche ausgehen.
2. An diesem Punkt schlägt das Spiel erneut fehl, und derselbe Fehler wird erneut ausgegeben, den wir zu Anfang erhielten — "TypeError: resetButton.addeventListener is not a function"! Allerdings wird er diesmal in Zeile 95 aufgelistet.
3. Wenn wir uns die Zeilennummer 95 ansehen, ist es leicht zu erkennen, dass wir hier denselben Fehler gemacht haben. Wir müssen nur noch einmal `addeventListener` in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel reibungslos ablaufen, allerdings werden Sie nach ein paar Durchläufen unweigerlich feststellen, dass das Spiel immer die Zahl 1 als "zufällige" Zahl auswählt, die zu erraten ist. Definitiv nicht ganz so, wie wir möchten, dass das Spiel verläuft!

Es gibt definitiv ein Problem in der Spiellogik — das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der `randomNumber`-Variablen und den Zeilen, in denen die Zufallszahl zunächst festgelegt wird. Die Instanz, die die zu erratende Zufallszahl zu Beginn des Spiels speichert, sollte um die Zeile Nummer 47 zu finden sein:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und die, die die Zufallszahl vor jedem weiteren Spiel generiert, befindet sich um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem darstellen, wenden wir uns wieder unserem Freund `console.log()` zu — fügen Sie die folgende Zeile direkt unterhalb jeder der obigen beiden Zeilen hinzu:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, und spielen Sie ein paar Spiele — Sie werden sehen, dass `randomNumber` an jedem Punkt, an dem es in der Konsole protokolliert wird, gleich 1 ist.

### Die Logik überprüfen

Um dies zu beheben, überlegen wir, wie diese Zeile arbeitet. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z. B. 0,5675493843.

```js
Math.random();
```

Als nächstes geben wir das Ergebnis des Aufrufs von `Math.random()` an [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) weiter, das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir fügen dann 1 zu diesem Ergebnis hinzu:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 ergibt immer 0, sodass das Hinzufügen von 1 dazu immer 1 ergibt. Wir müssen die Zufallszahl mit 100 multiplizieren, bevor wir sie abrunden. Das folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher wollen wir 1 hinzufügen, um uns eine zufällige Zahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen auf diese Weise zu aktualisieren, speichern und aktualisieren — das Spiel sollte jetzt so ablaufen, wie wir es beabsichtigt haben!

## Weitere häufige Fehler

Es gibt weitere häufige Fehler, auf die Sie in Ihrem Code stoßen könnten. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, Sie haben gewonnen, unabhängig von der eingegebenen Zahl

Dies könnte ein weiteres Symptom für eine Verwechslung der Zuweisungs- und der strikten Gleichheitsoperatoren sein. Wenn wir beispielsweise diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

in

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben und das Programm berichten, dass das Spiel gewonnen wurde. Vorsicht!

### SyntaxError: missing ) after argument list

Dieser Fehler ist ziemlich einfach — er bedeutet in der Regel, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) Referenzseite.

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall haben wir es geschafft, ihn zu erhalten, indem wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

geändert haben. Dies hat den Browser veranlasst zu denken, dass wir versuchen, den Inhalt der Funktion als Argument an die Funktion zu übergeben. Vorsicht mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist einfach — es bedeutet in der Regel, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder einer bedingten Struktur vergessen haben. Wir haben diesen Fehler erhalten, indem wir eine der schließenden geschweiften Klammern nahe dem Ende der `checkGuess()`-Funktion gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten in der Regel, dass Sie die öffnenden oder schließenden Anführungszeichen eines Zeichenfolgenwerts ausgelassen haben. Im ersten Fehler oben würde _string_ durch das unerwartete Zeichen (oder die Zeichen) ersetzt werden, die der Browser anstelle eines Anführungszeichens am Anfang einer Zeichenfolge gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen abgeschlossen wurde.

Für all diese Fehler überlegen Sie, wie wir die Beispiele, die wir im Rundgang betrachtet haben, angegangen sind. Wenn ein Fehler auftritt, schauen Sie sich die angegebene Zeilennummer an, gehen Sie zu dieser Zeile und sehen Sie, ob Sie das Problem erkennen können. Beachten Sie, dass der Fehler nicht unbedingt in dieser Zeile sein muss und dass der Fehler möglicherweise nicht durch genau dasselbe Problem verursacht wird, das wir oben zitiert haben!

> [!NOTE]
> Weitere Details zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Damit haben wir die Grundlagen zur Fehlererkennung in einfachen JavaScript-Programmen behandelt. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code schief läuft, aber zumindest wird dies Ihnen einige Stunden Schlaf sparen und es Ihnen ermöglichen, schneller voranzukommen, wenn die Dinge nicht richtig laufen, besonders in den früheren Phasen Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Arten von Fehlern, die hier nicht aufgelistet sind; wir sammeln eine Referenz, die erklärt, was sie im Detail bedeuten — siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie auf Fehler in Ihrem Code stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe erhalten! Fragen Sie nach Hilfe in den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Ein Listing Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
