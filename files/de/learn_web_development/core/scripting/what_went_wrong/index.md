---
title: Was ist schiefgelaufen? Fehlerbehebung in JavaScript
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie im vorherigen Artikel das "Errate die Zahl"-Spiel erstellt haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert hat. Keine Sorge — dieser Artikel soll Sie davor bewahren, sich die Haare über solche Probleme zu raufen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, grundlegende Erfahrung mit dem Schreiben von JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen der Arten von Fehlern, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlerbehebung.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der Browser-Entwicklungstools.</li>
          <li>Grundlegende Vertrautheit mit JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlerarten

Im Allgemeinen gibt es beim Codieren zwei Hauptarten von Fehlern, auf die Sie stoßen werden:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm überhaupt nicht läuft oder mitten im Betrieb stoppt — normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind normalerweise in Ordnung zu beheben, solange Sie mit den richtigen Tools vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Diese Fehler treten auf, wenn die Syntax eigentlich korrekt ist, der Code jedoch nicht das ist, was Sie beabsichtigt haben. Das bedeutet, dass das Programm erfolgreich läuft, jedoch falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da normalerweise keine Fehlermeldung vorhanden ist, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach — es gibt einige andere Unterscheidungsmerkmale, wenn Sie tiefer bohren. Aber die obigen Klassifizierungen genügen in diesem frühen Stadium Ihrer Karriere. Wir werden fortfahren, auf beide Arten zu schauen.

## Ein fehlerhaftes Beispiel

Um anzufangen, kehren wir zu unserem Zahlratenspiel zurück — außer dass wir diesmal eine Version mit absichtlich eingeführten Fehlern untersuchen. Gehen Sie zu GitHub und erstellen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (siehe es [hier live laufen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und in Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden feststellen, dass es nicht funktioniert, wenn Sie auf die Schaltfläche "Vermutung absenden" klicken!

> [!NOTE]
> Es könnte durchaus sein, dass Sie Ihre eigene Version des Spielbeispiels haben, die nicht funktioniert, die Sie möglicherweise reparieren möchten! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die Techniken erlernen, die wir hier vermitteln. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu reparieren.

An diesem Punkt lassen Sie uns die Entwicklerkonsole konsultieren, um zu sehen, ob sie Syntaxfehler meldet, und versuchen Sie, sie zu beheben. Sie erfahren im folgenden Abschnitt, wie das geht.

## Behebung von Syntaxfehlern

Früher im Kurs haben wir Sie dazu gebracht, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben (wenn Sie sich nicht erinnern können, wie Sie dies in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie). Noch nützlicher ist, dass die Konsole Ihnen Fehlermeldungen gibt, wenn ein Syntaxfehler in das JavaScript gespeist wird, das in die JavaScript-Engine des Browsers eingegeben wird. Lassen Sie uns nun auf Jagd gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung ähnlich der folgenden sehen: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung ist:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler herkommt: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich über die korrekte Schreibweise eines Syntax-Teils nicht sicher sind, ist es oft gut, das Feature auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, besteht darin, mit Ihrer bevorzugten Suchmaschine nach "mdn _name-of-feature_" zu suchen. Hier ist eine Abkürzung, um Ihnen etwas Zeit an dieser Stelle zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Beim Betrachten dieser Seite scheint der Fehler darin zu bestehen, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript die Groß- und Kleinschreibung beachtet. Jede Abweichung in Schreibweise oder Groß-/Kleinschreibung führt zu einem Fehler. Das Ändern von `addeventListener` zu `addEventListener` sollte dies beheben. Machen Sie dies jetzt.

> [!NOTE]
> Siehe unsere [TypeError: "x" ist keine Funktion](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) Referenzseite für weitere Details zu diesem Fehler.

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und der Fehler sollte verschwunden sein.
2. Wenn Sie nun versuchen, eine Vermutung einzugeben und die Schaltfläche "Vermutung absenden" zu drücken, wird ein weiterer Fehler angezeigt! ![Screenshot der gleichen "Number guessing game" Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der "X TypeError: lowOrHi is null" liest.](variable-is-null.png)
3. Diesmal wird der gemeldete Fehler angezeigt als:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser sehen Sie möglicherweise eine andere Meldung. Die oben genannte Meldung wird Ihnen Firefox anzeigen, aber Chrome würde Ihnen beispielsweise folgendes zeigen:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist der gleiche Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht auf, sobald die Seite geladen wurde, weil dieser Fehler innerhalb einer Funktion auftrat (innerhalb des `checkGuess() { }` Blocks). Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions) im Detail erfahren werden, läuft der Code innerhalb der Funktionen in einem separaten Scope als der Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler wurde nicht angezeigt, bis die `checkGuess()` Funktion durch Zeile 87 ausgeführt wurde.

4. Die in der Fehlernachricht angegebene Zeilennummer ist 79. Schauen Sie sich Zeile 79 an, und Sie sehen den folgenden Code:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent` Eigenschaft der `lowOrHi` Variable auf einen Text-String zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es soll. Lassen Sie uns sehen, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz finden Sie in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable einen Verweis auf ein Element im HTML-Dokument enthalten zu lassen. Lassen Sie uns sehen, was die Variable enthält, nachdem diese Zeile ausgeführt wurde. Fügen Sie in Zeile 54 den folgenden Code ein:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in der Konsole ausgeben, nachdem wir versucht haben, ihn in Zeile 51 festzulegen. Siehe [`console.log()`](/de/docs/Web/API/Console/log_static) für mehr Informationen.

7. Speichern und aktualisieren Sie, und Sie sollten nun das Ergebnis von `console.log()` in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Eine Protokollanweisung ist in der Konsole sichtbar, die nur "null" liest.](console-log-output.png) Tatsächlich ist der Wert von `lowOrHi` zu diesem Zeitpunkt `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi is null` überein. Da gibt es definitiv ein Problem mit Zeile 51. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, läuft also schief.

8. Lassen Sie uns nachdenken, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um einen Verweis auf ein Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Weiter oben in unserer Datei können wir den betreffenden Absatz finden:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir brauchen hier also einen Klassenselektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der der `querySelector()` Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` zu `.lowOrHi` in Zeile 51 zu ändern.
10. Versuchen Sie, zu speichern und neu zu laden, und Ihre `console.log()` Anweisung sollte nun das gewünschte `<p>` Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können nun Ihre `console.log()` Zeile löschen oder sie behalten, um später darauf Bezug zu nehmen — Ihre Wahl.

> [!NOTE]
> Siehe unsere [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) Referenzseite für weitere Details zu diesem Fehler.

### Syntaxfehler Runde drei

1. Wenn Sie jetzt versuchen, das Spiel erneut zu spielen, sollten Sie mehr Erfolg haben — das Spiel sollte bis zum Ende durchgespielt werden, es sei denn, Sie erraten die richtige Zahl oder die Versuche sind aufgebraucht.
2. An diesem Punkt fällt das Spiel erneut aus, und der gleiche Fehler wird ausgegeben, den wir am Anfang hatten — "TypeError: resetButton.addeventListener is not a function"! Allerdings wird dieses Mal die Zeile 95 angegeben.
3. Wenn Sie sich Zeile 95 ansehen, ist es leicht zu sehen, dass wir hier denselben Fehler gemacht haben. Wir müssen `addeventListener` erneut zu `addEventListener` ändern. Tun Sie das jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel in Ordnung durchlaufen, jedoch werden Sie nachdem Sie ein paar Mal gespielt haben, zweifellos bemerken, dass das Spiel immer 1 als die "zufällige" Zahl wählt, die Sie erraten müssen. Definitiv nicht ganz so, wie wir wollen, dass das Spiel abläuft!

Es gibt definitiv ein Problem in der Logik des Spiels — das Spiel liefert keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie die `randomNumber` Variablen und die Zeilen, in denen die Zufallszahl zuerst gesetzt wird. Die Instanz, die die zufällige Zahl speichert, die wir zu Beginn des Spiels erraten wollen, sollte um die Zeile 47 liegen:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und die, die die Zufallszahl vor jedem nachfolgenden Spiel erzeugt, ist etwa in Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns erneut an unseren Freund `console.log()` — fügen Sie folgende Zeile direkt nach jeder der oben genannten Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, dann spielen Sie ein paar Spiele — Sie werden sehen, dass `randomNumber` gleich 1 zu jedem Zeitpunkt ist, an dem es in der Konsole protokolliert wird.

### Die Logik durchgehen

Um dies zu beheben, überlegen wir, wie diese Zeile funktioniert. Zunächst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, die eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z.B. 0.5675493843.

```js
Math.random();
```

Als Nächstes geben wir das Ergebnis der Ausführung von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Ein zufälliges Dezimal zwischen 0 und 1 abzurunden, wird immer 0 zurückgeben, also wird das Hinzufügen von 1 dazu immer 1 zurückgeben. Wir müssen die zufällige Zahl mit 100 multiplizieren, bevor wir sie abrunden. Das folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher wollen wir 1 hinzufügen, um uns eine zufällige Zahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen auf diese Weise zu aktualisieren, dann speichern und aktualisieren Sie — das Spiel sollte nun wie beabsichtigt laufen!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. Dieser Abschnitt hebt die meisten davon hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von der eingegebenen Vermutung

Dies könnte ein weiteres Symptom für die Verwechslung der Zuweisungs- und der strikten Gleichheitsoperatoren sein. Zum Beispiel, wenn wir diese Zeile in `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben und das Programm berichten, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser ist ziemlich einfach — er bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Siehe unsere [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) Referenzseite für weitere Details zu diesem Fehler.

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein inkorrekt geformtes JavaScript-Objekt, aber in diesem Fall haben wir es geschafft, ihn durch Ändern von

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

zu verursachen. Dies hat den Browser denken lassen, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist einfach — es bedeutet im Allgemeinen, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder Bedingungsstruktur vergessen haben. Wir haben diesen Fehler erhalten, indem wir eine der schließenden geschweiften Klammern am Ende der `checkGuess()` Funktion gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie das öffnende oder schließende Anführungszeichen einer Zeichenfolgewert-Literal weggelassen haben. Bei dem ersten Fehler würde _string_ durch das unerwartete Zeichen ersetzt, das der Browser anstelle eines Anführungszeichens zu Beginn einer Zeichenfolge gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen beendet wurde.

Für all diese Fehler denken Sie darüber nach, wie wir die Beispiele angegangen sind, die wir im Durchlauf betrachtet haben. Wenn ein Fehler auftritt, schauen Sie sich die Ihnen gegebene Zeilennummer an, gehen Sie zu dieser Zeile und sehen Sie, ob Sie sehen können, was falsch ist. Beachten Sie, dass der Fehler nicht unbedingt in dieser Zeile vorliegen muss, und auch, dass der Fehler nicht unbedingt durch genau dasselbe Problem verursacht wurde, das oben zitiert wurde!

> [!NOTE]
> Siehe unsere [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) Referenzseiten für mehr Details zu diesen Fehlern.

## Zusammenfassung

Da haben wir sie, die Grundlagen der Fehlersuche in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird dies Ihnen ein paar Stunden Schlaf ersparen und Ihnen ermöglichen, ein bisschen schneller voranzukommen, wenn Dinge nicht richtig laufen, besonders in den frühen Stadien Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Arten von Fehlern, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie auf einen Fehler in Ihrem Code stoßen, den Sie nach dem Lesen dieses Artikels nicht wissen, wie Sie ihn beheben können, können Sie Hilfe erhalten! Fragen Sie über die [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) nach Hilfe. Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Ein Listing Ihres Codes wäre auch nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
