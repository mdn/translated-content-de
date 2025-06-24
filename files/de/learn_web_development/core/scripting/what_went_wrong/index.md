---
title: Was ist schiefgelaufen? JavaScript-Fehlerbehebung
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie im vorherigen Artikel das Spiel "Rate die Zahl" aufgebaut haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Sorge — dieser Artikel soll Sie davon abhalten, sich wegen solcher Probleme die Haare zu raufen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, grundlegende Erfahrung im Schreiben von JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen der Fehlertypen, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlerbehebung.</li>
          <li>Grundlegende Erfahrung mit der Nutzung der JavaScript-Konsole der Browser-Entwicklungstools.</li>
          <li>Grundlegende Vertrautheit mit JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlertypen

Allgemein gesagt, wenn Sie im Code etwas falsch machen, treten zwei Hauptarten von Fehlern auf, denen Sie begegnen werden:

- **Syntaxfehler**: Diese sind Schreibfehler in Ihrem Code, die dazu führen, dass das Programm überhaupt nicht läuft oder mittendrin aufhört zu arbeiten — in der Regel erhalten Sie auch einige Fehlermeldungen. Diese sind in der Regel nicht allzu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben, was bedeutet, dass das Programm erfolgreich ausgeführt wird, aber falsche Ergebnisse liefert. Diese sind oft schwerer zu beheben als Syntaxfehler, da es in der Regel keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach — es gibt noch einige weitere Unterschiede, wenn Sie tiefer eintauchen. Aber die obigen Klassifikationen reichen zu diesem frühen Zeitpunkt in Ihrer Karriere aus. Wir werden uns im Folgenden mit beiden Arten beschäftigen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, kehren wir zu unserem Zahlenspiel zurück — außer dass wir diesmal eine Version mit einigen absichtlich eingeführten Fehlern erkunden werden. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (sehen Sie es [hier live laufen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie zunächst die lokale Kopie in Ihrem bevorzugten Texteditor und Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden bemerken, dass, wenn Sie die Schaltfläche "Vermutung einreichen" drücken, es nicht funktioniert!

> [!NOTE]
> Möglicherweise haben Sie auch Ihre eigene Version des Spielbeispiels, die nicht funktioniert und die Sie möglicherweise reparieren möchten! Wir möchten, dass Sie trotzdem den Artikel mit unserer Version durcharbeiten, damit Sie die hier vermittelten Techniken erlernen können. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu reparieren.

An diesem Punkt sehen wir uns die Entwicklerkonsole an, um zu sehen, ob sie Syntaxfehler meldet, und versuchen dann, sie zu beheben. Sie werden im Folgenden lernen, wie.

## Beheben von Syntaxfehlern

Früher im Kurs haben wir Sie dazu gebracht, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben (wenn Sie sich nicht erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie). Noch nützlicher ist, dass die Konsole Ihnen Fehlermeldungen gibt, wann immer ein Syntaxfehler im JavaScript vorliegt, das der JavaScript-Engine des Browsers zugeführt wird. Lassen Sie uns nun auf die Jagd gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung sehen, die etwa wie folgt lautet: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener ist keine Funktion [Mehr erfahren] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener ist keine Funktion`, sagt uns etwas darüber, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener ist keine Funktion", was bedeutet, dass die aufgerufene Funktion vom JavaScript-Interpreter nicht erkannt wird. Oftmals bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich über die korrekte Schreibweise eines Syntaxstücks nicht sicher sind, ist es oft hilfreich, das Feature auf MDN nachzuschlagen. Der aktuell beste Weg, dies zu tun, ist, nach "mdn _name-of-feature_" mit Ihrer bevorzugten Suchmaschine zu suchen. Hier ist eine Abkürzung, um Ihnen in diesem Fall etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Beim Blick auf diese Seite scheint der Fehler darin zu liegen, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript zwischen Groß- und Kleinschreibung unterscheidet, jede geringfügige Abweichung in der Schreibweise oder Groß-/Kleinschreibung wird einen Fehler verursachen. Das Ändern von `addeventListener` zu `addEventListener` sollte das Problem beheben. Tun Sie dies jetzt.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer [TypeError: "x" ist keine Funktion](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) Referenzseite.

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie jetzt versuchen, eine Vermutung einzugeben und die Schaltfläche "Vermutung einreichen" drücken, sehen Sie einen weiteren Fehler! ![Screenshot der gleichen "Number guessing game" Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der lautet "X TypeError: lowOrHi ist null".](variable-is-null.png)
3. Diesmal wird der folgende Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser sehen Sie möglicherweise eine andere Nachricht hier. Die obige Nachricht wird Ihnen Firefox zeigen, aber Chrome zeigt Ihnen zum Beispiel dies:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht auf, sobald die Seite geladen wurde, da dieser Fehler innerhalb einer Funktion auftrat (innerhalb des `checkGuess() { }` Blocks). Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions) im Detail lernen werden, läuft der Code innerhalb von Funktionen in einem separaten Bereich als der Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler wurde nicht ausgelöst, bis die `checkGuess()`-Funktion von Zeile 87 ausgeführt wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 79. Werfen Sie einen Blick auf Zeile 79, und Sie werden den folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der `lowOrHi`-Variable auf eine Textzeichenfolge zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es sollte. Lassen Sie uns sehen, warum das so ist — versuchen Sie, in dem Code nach anderen Vorkommen von `lowOrHi` zu suchen. Das früheste Vorkommen finden Sie in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable mit einer Referenz zu einem Element im HTML-Dokument zu füllen. Lassen Sie uns sehen, was die Variable nach dieser Zeile enthält. Fügen Sie folgende Zeile in Zeile 54 ein:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in der Konsole ausgeben, nachdem wir versucht haben, es in Zeile 51 zu setzen. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/console/log_static).

7. Speichern und aktualisieren Sie, und Sie sollten nun das Ergebnis des `console.log()` in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Eine Log-Anweisung ist in der Konsole sichtbar und liest einfach "null".](console-log-output.png) Sicher genug, der Wert von `lowOrHi` ist an diesem Punkt `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi ist null` überein. Es gibt also definitiv ein Problem mit Zeile 51. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, ist also fehlerhaft.

8. Überlegen wir uns, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um eine Referenz zu einem Element durch Auswahl mit einem CSS-Selektor zu erhalten. Weiter oben in unserer Datei finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen hier also einen Klassenselektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in der `querySelector()` Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in Zeile 51 in `.lowOrHi` zu ändern.
10. Versuchen Sie erneut zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte jetzt das gewünschte `<p>`-Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können jetzt Ihre `console.log()`-Zeile löschen oder sie als Referenz für später behalten — Ihre Wahl.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer [TypeError: "x" ist (nicht) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) Referenzseite.

### Syntaxfehler Runde drei

1. Wenn Sie nun erneut versuchen, das Spiel zu spielen, sollten Sie mehr Erfolg haben — das Spiel sollte problemlos laufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder keine Vermutungen mehr haben.
2. An diesem Punkt scheitert das Spiel erneut, und derselbe Fehler wird erneut ausgegeben, den wir am Anfang hatten — "TypeError: resetButton.addeventListener ist keine Funktion"! Allerdings wird er diesmal als Linie 95 aufgelistet.
3. Wenn Sie sich die Zeilennummer 95 ansehen, ist es leicht zu erkennen, dass wir hier denselben Fehler gemacht haben. Wir müssen einfach `addeventListener` in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel problemlos laufen. Nach einigen Partien werden Sie jedoch zweifellos bemerken, dass das Spiel immer die Zahl 1 als die "zufällige" Zahl auswählt, die Sie erraten müssen. Definitiv nicht ganz so, wie wir das Spiel spielen lassen wollen!

Es gibt definitiv ein Problem in der Spiellogik — das Spiel gibt keinen Fehler zurück; es funktioniert einfach nicht richtig.

1. Suchen Sie nach der `randomNumber`-Variable und den Zeilen, in denen die Zufallszahl zuerst festgelegt wird. Das Vorkommen, das die Zufallszahl speichert, die wir am Anfang des Spiels erraten möchten, sollte sich um Zeilennummer 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und das, welches die Zufallszahl vor jedem weiteren Spiel generiert, befindet sich um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns erneut an unseren Freund `console.log()` — fügen Sie direkt unterhalb jeder der beiden obigen Zeilen die folgende Zeile ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, und spielen Sie einige Spiele — Sie werden sehen, dass `randomNumber` an jedem Punkt, an dem es in die Konsole geloggt wird, gleich 1 ist.

### Durchgehen der Logik

Um dies zu beheben, überlegen wir uns, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, die eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z.B. 0.5675493843.

```js
Math.random();
```

Dann übergeben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächstniedrigere ganze Zahl abrundet. Danach addieren wir 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 wird immer 0 zurückgeben, so dass das Hinzufügen von 1 dazu immer 1 ergibt. Wir müssen die Zufallszahl vor dem Abrunden mit 100 multiplizieren. Folgendes würde uns eine Zufallszahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Deshalb wollen wir 1 addieren, um uns eine Zufallszahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, speichern und aktualisieren Sie — das Spiel sollte jetzt so ablaufen, wie wir es uns vorgestellt haben!

## Weitere häufige Fehler

Es gibt weitere häufige Fehler, die Ihnen in Ihrem Code begegnen können. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von der eingegebenen Vermutung

Dies könnte ein weiteres Symptom für die Verwechslung von Zuweisungs- und Strikte-Gleichheitsoperatoren sein. Wenn wir zum Beispiel diese Zeile in `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

in

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, was dazu führen würde, dass das Programm berichtet, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: fehlendes ) nach der Argumentliste

Dieser Fehler ist ziemlich einfach — er bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer [SyntaxError: fehlendes ) nach der Argumentliste](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) Referenzseite.

### SyntaxError: fehlendes : nach Eigenschafts-ID

Dieser Fehler bezieht sich in der Regel auf ein fehlerhaft gestaltetes JavaScript-Objekt, aber in diesem Fall haben wir es erreicht, indem wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

umgewandelt haben. Dadurch hat der Browser geglaubt, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Passen Sie mit diesen Klammern auf!

### SyntaxError: fehlendes } nach Funktionskörper

Das ist einfach — es bedeutet in der Regel, dass Sie eine Ihrer geschweiften Klammern in einer Funktion oder einer bedingten Struktur vergessen haben. Wir haben diesen Fehler hervorgerufen, indem wir eine der schließenden geschweiften Klammern in der Nähe des Endes der `checkGuess()`-Funktion gelöscht haben.

### SyntaxError: erwarteter Ausdruck, aber '_string_' gefunden oder SyntaxError: Zeichenfolgenliteral enthält einen nicht escapeten Zeilenumbruch

Diese Fehler bedeuten in der Regel, dass Sie das öffnende oder schließende Anführungszeichen eines Zeichenfolgenwertes ausgelassen haben. Beim ersten obigen Fehler würde _string_ durch das/die unerwartete(n) Zeichen ersetzt, die der Browser anstelle eines Anführungszeichens am Anfang einer Zeichenfolge gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen beendet wurde.

Für all diese Fehler denken Sie daran, wie wir die Beispiele behandelt haben, die wir im Durchgang untersucht haben. Wenn ein Fehler auftritt, schauen Sie auf die Ihnen gegebene Zeilennummer, gehen Sie zu dieser Zeile und sehen Sie, ob Sie das Problem erkennen können. Beachten Sie, dass der Fehler nicht unbedingt in dieser Zeile liegt und dass der Fehler möglicherweise nicht durch genau dasselbe Problem verursacht wird, das wir oben genannt haben!

> [!NOTE]
> Weitere Informationen zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unerwartetes token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: Zeichenfolgenliteral enthält einen nicht escapeten Zeilenumbruch](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Das sind also die Grundlagen der Fehlersuche in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird dies Ihnen ein paar Stunden Schlaf ersparen und Ihnen ermöglichen, etwas schneller voranzukommen, wenn Dinge nicht richtig funktionieren, besonders in den frühen Phasen Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlertypen, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe das [JavaScript-Fehler-Nachschlagewerk](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie in Ihrem Code auf Fehler stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe bekommen! Fragen Sie nach Hilfe in den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
