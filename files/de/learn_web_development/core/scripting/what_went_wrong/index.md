---
title: Was ist schiefgelaufen? Fehlersuche in JavaScript
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 1717097c927b0399fd143a6ab22631245e9da1cd
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie im vorherigen Artikel das "Errate die Zahl"-Spiel gebaut haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Sorge – dieser Artikel soll Ihnen helfen, nicht an solchen Problemen zu verzweifeln, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis für <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, grundlegende Erfahrung im Schreiben von JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen der Arten von Fehlern, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlerbehebung.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der Browser-Entwicklertools.</li>
          <li>Grundlegende Vertrautheit mit JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Arten von Fehlern

Im Allgemeinen gibt es zwei Hauptarten von Fehlern, auf die Sie stoßen werden, wenn etwas im Code falsch gemacht wird:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die tatsächlich dazu führen, dass das Programm überhaupt nicht ausgeführt wird oder zwischendurch stoppt – normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind normalerweise nicht allzu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht so ist, wie Sie es beabsichtigt haben. Dies bedeutet, dass das Programm erfolgreich läuft, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Quelle des Fehlers führt.

Okay, es ist nicht ganz _so_ einfach — es gibt noch weitere Unterscheidungen, wenn Sie tiefer bohren. Aber die obigen Klassifikationen reichen auf diesem frühen Stand Ihrer Laufbahn aus. Wir werden uns im Folgenden beide Arten ansehen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, kehren wir zu unserem Zahlenratespiel zurück – diesmal werden wir jedoch eine Version erkunden, die einige absichtliche Fehler enthält. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (siehe es [hier live](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Um anzufangen, öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und in Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen – Sie werden bemerken, dass es nicht funktioniert, wenn Sie die Schaltfläche „Eingabe erraten“ drücken!

> [!NOTE]
> Möglicherweise haben Sie Ihre eigene fehlerhafte Version des Spiels, die Sie reparieren möchten! Wir möchten jedoch, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die hier gelehrten Techniken erlernen können. Anschließend können Sie versuchen, Ihr Beispiel zu reparieren.

An diesem Punkt konsultieren wir die Entwicklerkonsole, um zu sehen, ob sie Syntaxfehler meldet, und versuchen dann, sie zu beheben. Unten erfahren Sie, wie.

## Syntaxfehler beheben

Früher im Kurs haben wir Sie einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) eingeben lassen (wenn Sie sich nicht mehr erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie). Noch nützlicher ist, dass die Konsole Ihnen Fehlermeldungen gibt, wann immer ein Syntaxfehler im JavaScript vorhanden ist, das an die JavaScript-Engine des Browsers übergeben wird. Lassen Sie uns auf die Fehlersuche gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung sehen, die ungefähr folgendermaßen aussieht: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Mehr erfahren] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung ist:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schief gelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler herkommt: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Schauen wir uns Zeile 87 in unserem Code-Editor an, werden wir diese Zeile finden:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt „guessSubmit.addeventListener is not a function“, was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung, dass wir etwas falsch geschrieben haben. Wenn Sie sich nicht sicher sind, wie die korrekte Schreibweise eines Stücks Syntax lautet, ist es oft gut, die Funktion auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, ist die Suche nach „mdn _name-of-feature_“ mit Ihrer bevorzugten Suchmaschine. Hier ist eine Abkürzung, um Ihnen in diesem Fall etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Wenn wir uns also diese Seite ansehen, scheint der Fehler zu sein, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript zwischen Groß- und Kleinschreibung unterscheidet, sodass jede kleine Abweichung in Schreibweise oder Groß-/Kleinschreibung einen Fehler verursacht. Ändern von `addeventListener` zu `addEventListener` sollte dies beheben. Machen Sie dies jetzt.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function).

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie jetzt versuchen, einen Tipp einzugeben und die Schaltfläche „Eingabe erraten“ drücken, sehen Sie einen weiteren Fehler! ![Screenshot derselben "Number guessing game" Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der "X TypeError: lowOrHi is null" lautet.](variable-is-null.png)
3. Diesmal wird folgender Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig von dem von Ihnen verwendeten Browser sehen Sie hier möglicherweise eine andere Nachricht. Die oben gezeigte Nachricht ist das, was Firefox Ihnen zeigt, aber Chrome zeigt Ihnen beispielsweise Folgendes:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es handelt sich um den gleichen Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort auf, als die Seite geladen wurde, weil dieser Fehler innerhalb einer Funktion (innerhalb des Blocks `checkGuess() { }`) auftrat. Wie Sie in unserem späteren [Artikel zu Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) ausführlicher erfahren werden, läuft Code innerhalb von Funktionen in einem separaten Gültigkeitsbereich als Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler erst geworfen, als die Funktion `checkGuess()` in Zeile 87 ausgeführt wurde.

4. Die im Fehler angegebene Zeilennummer ist 79. Schauen Sie sich Zeile 79 an und Sie sehen den folgenden Code:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der Variablen `lowOrHi` auf eine Textzeichenkette zu setzen, aber es funktioniert nicht, da `lowOrHi` nicht das enthält, was es sollte. Sehen wir uns an, warum das so ist – versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz finden Sie in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable auf ein Element im HTML-Dokument zu verweisen. Sehen wir uns an, was die Variable enthält, nachdem diese Zeile ausgeführt wurde. Fügen Sie in Zeile 54 den folgenden Code hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in der Konsole ausgeben, nachdem wir versucht haben, ihn in Zeile 51 zu setzen. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/console/log_static).

7. Speichern und aktualisieren Sie, und Sie sollten jetzt das Ergebnis von `console.log()` in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Eine Protokollausgabe ist in der Konsole sichtbar, die einfach "null" lautet.](console-log-output.png) Natürlich hat `lowOrHi` zu diesem Zeitpunkt den Wert `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi is null` überein. Es gibt also definitiv ein Problem mit Zeile 51. Der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) bedeutet "nichts" oder "kein Wert". Also geht unser Code, `lowOrHi` auf ein Element zu setzen, schief.

8. Überlegen wir, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode, um einen Verweis auf ein Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Weiter oben in unserer Datei können wir den betreffenden Absatz finden:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen hier also einen Klassen-Selektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in der `querySelector()`-Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Ändern Sie `lowOrHi` in `.lowOrHi` in Zeile 51.
10. Versuchen Sie erneut zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte nun das gewünschte `<p>`-Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder zur späteren Referenz behalten – Ihre Wahl.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type).

### Syntaxfehler Runde drei

1. Wenn Sie jetzt das Spiel erneut ausprobieren, sollten Sie mehr Erfolg haben – das Spiel sollte absolut einwandfrei ablaufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder indem Ihnen die Versuche ausgehen.
2. An diesem Punkt schlägt das Spiel erneut fehl und der gleiche Fehler wird ausgegeben, den wir am Anfang erhalten haben – „TypeError: resetButton.addeventListener is not a function“! Diesmal wird jedoch angezeigt, dass er von Zeile 95 stammt.
3. In Zeile 95 ist leicht zu erkennen, dass wir hier denselben Fehler gemacht haben. Wir müssen hier erneut einfach `addeventListener` in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel fehlerfrei laufen, aber nachdem Sie es ein paar Mal gespielt haben, werden Sie zweifellos bemerken, dass das Spiel immer 1 als "zufällige" Zahl auswählt, die Sie erraten müssen. Definitiv nicht ganz so, wie wir möchten, dass das Spiel abläuft!

Es gibt definitiv ein Problem in der Spiel-Logik – das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der Variable `randomNumber` und den Zeilen, in denen die Zufallszahl zuerst festgelegt wird. Die Instanz, die die Zufallszahl speichert, die wir zu Beginn des Spiels erraten möchten, sollte sich um Zeile 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die vor jedem nachfolgenden Spiel die Zufallszahl generiert, befindet sich um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu prüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns erneut an unseren Freund `console.log()` – fügen Sie die folgende Zeile direkt unterhalb jeder der beiden obigen Zeilen hinzu:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, dann spielen Sie ein paar Spiele – Sie werden sehen, dass `randomNumber` zu den Zeitpunkten, an denen es in die Konsole protokolliert wird, immer gleich 1 ist.

### Die Logik durchgehen

Um dies zu beheben, überlegen wir, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z. B. 0.5675493843.

```js
Math.random();
```

Als nächstes übergeben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 nach unten ergibt immer 0, sodass das Hinzufügen von 1 immer 1 ergibt. Wir müssen die Zufallszahl mit 100 multiplizieren, bevor wir abrunden. Das folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Deshalb möchten wir 1 hinzufügen, um uns eine zufällige Zahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen wie oben zu aktualisieren, dann speichern und aktualisieren – das Spiel sollte jetzt so laufen, wie wir es beabsichtigen!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von der Eingabe

Dies könnte ein weiteres Symptom für eine Verwechslung der Zuweisungs- und der strikten Gleichheitsoperatoren sein. Wenn wir zum Beispiel diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, was dazu führt, dass das Programm meldet, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Das ist ziemlich einfach — es bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list).

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein fehlerhaftes JavaScript-Objekt, aber in diesem Fall ist es uns gelungen, ihn zu bekommen, indem wir das Folgende geändert haben

```js
function checkGuess() {
```

zu

```js
function checkGuess( {
```

Dadurch glaubt der Browser, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Das ist einfach – es bedeutet im Allgemeinen, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder einem bedingten Struktur entfernt haben. Wir erhielten diesen Fehler, indem wir eine der schließenden geschweiften Klammern nahe dem Ende der Funktion `checkGuess()` gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie die öffnende oder schließende Anführungszeichen eines Zeichenkettenwerts weggelassen haben. Bei dem ersten oben genannten Fehler würde der _string_ durch die unerwartete(n) Zeichen ersetzt, die der Browser anstelle eines Anführungszeichens zu Beginn einer Zeichenkette gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenkette nicht mit einem Anführungszeichen abgeschlossen wurde.

Für all diese Fehler denken Sie daran, wie wir die Beispiele behandelt haben, die wir im Leitfaden betrachtet haben. Wenn ein Fehler auftritt, schauen Sie auf die angegebene Zeilennummer, gehen Sie zu dieser Zeile und sehen Sie, ob Sie erkennen können, was falsch ist. Denken Sie daran, dass der Fehler nicht unbedingt in dieser Zeile sein muss und dass der Fehler möglicherweise nicht durch dasselbe Problem verursacht wird, das wir oben erwähnt haben!

> [!NOTE]
> Weitere Einzelheiten zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Hier haben wir also die Grundlagen zur Erkennung von Fehlern in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was an Ihrem Code falsch ist, aber zumindest wird dies Ihnen ein paar Stunden Schlaf ersparen und es Ihnen ermöglichen, ein bisschen schneller voranzukommen, wenn die Dinge nicht so laufen, wie Sie es sich wünschen, vor allem in den frühen Stadiums Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlerarten, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten – siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie in Ihrem Code auf Fehler stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe bekommen! Fragen Sie um Hilfe bei den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihrer Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
