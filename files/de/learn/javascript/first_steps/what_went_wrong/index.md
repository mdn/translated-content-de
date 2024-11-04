---
title: Was ist schiefgelaufen? JavaScript-Fehlerbehebung
slug: Learn/JavaScript/First_steps/What_went_wrong
l10n:
  sourceCommit: d51f1d664a6d5828853d5cd52bddd35f5add6729
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

Als Sie im vorherigen Artikel das Spiel "Errate die Zahl" erstellt haben, ist Ihnen möglicherweise aufgefallen, dass es nicht funktionierte. Keine Sorge – dieser Artikel soll Sie vor dem Haareraufen über solche Probleme bewahren, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS sowie ein
        Verständnis dafür, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit und das Vertrauen zu erlangen, Probleme in Ihrem eigenen
        Code zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Arten von Fehlern

Allgemein gesagt, wenn Sie in Ihrem Code etwas falsch machen, gibt es zwei Hauptarten von Fehlern, auf die Sie stoßen werden:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm entweder gar nicht läuft oder zur Hälfte aufhört zu funktionieren – in der Regel erhalten Sie auch einige Fehlermeldungen. Diese lassen sich normalerweise leicht beheben, sofern Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, aber der Code nicht das tut, was Sie beabsichtigt haben. Das bedeutet, dass das Programm erfolgreich läuft, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach – es gibt einige andere Unterscheidungen, wenn Sie tiefer bohren. Aber die obigen Klassifikationen reichen für diesen frühen Abschnitt Ihrer Karriere. Wir werden beide Arten weiter unten betrachten.

## Ein fehlerhaftes Beispiel

Um anzufangen, kehren wir zu unserem Zahlenspiel zurück – außer dass wir diesmal eine Version erkunden, die einige absichtlich eingeführte Fehler enthält. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (sehen Sie es [hier live ausführen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen – Ihnen wird auffallen, dass es nicht funktioniert, wenn Sie den "Submit guess"-Button drücken!

> [!NOTE]
> Möglicherweise haben Sie Ihre eigene Version des Spielexemplars, die nicht funktioniert und die Sie reparieren möchten! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durchgehen, damit Sie die hier vermittelten Techniken lernen können. Dann können Sie versuchen, Ihr Beispiel zu reparieren.

An diesem Punkt sollten wir die Entwicklerkonsole konsultieren, um zu sehen, ob sie Syntaxfehler meldet, und versuchen, diese zu beheben. Sie lernen unten, wie das geht.

## Behebung von Syntaxfehlern

Früher im Kurs haben wir Sie einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben lassen (falls Sie sich nicht mehr erinnern, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem obigen Link, um zu erfahren, wie es geht). Noch hilfreicher ist, dass die Konsole Ihnen Fehlermeldungen liefert, wenn ein Syntaxfehler im JavaScript vorliegt, das der JavaScript-Engine des Browsers übergeben wird. Jetzt lassen Sie uns auf die Jagd gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung etwa dieser Art sehen: !["Ratespiel" Demoseite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener ist keine Funktion [Mehr erfahren] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir folgende Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung, dass wir etwas falsch geschrieben haben. Wenn Sie sich nicht sicher sind, wie man eine Syntax korrekt schreibt, ist es oft gut, das Feature auf MDN nachzuschlagen. Der derzeit beste Weg ist die Suche nach "mdn _name-of-feature_" mit Ihrer bevorzugten Suchmaschine. Hier ist eine Abkürzung, die Ihnen in diesem Fall Zeit spart: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Wenn wir uns diese Seite ansehen, scheint der Fehler darin zu bestehen, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript zwischen Groß- und Kleinschreibung unterscheidet. Jede kleine Abweichung in Rechtschreibung oder Schreibweise wird einen Fehler verursachen. Das Ändern von `addeventListener` zu `addEventListener` sollte dies beheben. Tun Sie das jetzt.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function).

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie, und der Fehler sollte verschwunden sein.
2. Wenn Sie jetzt versuchen, eine Vermutung einzugeben und die "Submit guess"-Taste zu drücken, sehen Sie einen weiteren Fehler! ![Screenshot derselben "Ratespiel"-Demo. Dieses Mal ist in der Konsole ein anderer Fehler sichtbar, der "X TypeError: lowOrHi ist null" liest.](variable-is-null.png)
3. Dieses Mal wird der folgende Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser könnte diese Meldung anders aussehen. Die oben genannte Meldung wird Ihnen in Firefox angezeigt, während Chrome beispielsweise diese anzeigen könnte:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler wurde nicht sofort beim Laden der Seite ausgelöst, weil dieser Fehler innerhalb einer Funktion auftrat (innerhalb des Blocks `checkGuess() { }`). Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn/JavaScript/Building_blocks/Functions) noch detaillierter lernen werden, läuft der Code innerhalb von Funktionen in einem separaten Scope als der Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler nicht ausgelöst, bis die Funktion `checkGuess()` durch Zeile 87 aufgerufen wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 79. Sehen Sie sich Zeile 79 an und Sie werden folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der Variablen `lowOrHi` zu einer Textzeichenkette festzulegen, aber es funktioniert nicht, weil `lowOrHi` nicht den erwarteten Wert enthält. Lassen Sie uns sehen, warum das so ist – versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz finden Sie in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, dass die Variable ein Element im HTML-Dokument referenziert. Lassen Sie uns sehen, was die Variable enthält, nachdem diese Zeile ausgeführt wurde. Fügen Sie die folgende Zeile in Zeile 54 ein:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code druckt den Wert von `lowOrHi` in die Konsole, nachdem wir versucht haben, diesen in Zeile 51 festzulegen. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/Console/log_static).

7. Speichern und aktualisieren, und Sie sollten nun das `console.log()`-Ergebnis in Ihrer Konsole sehen. ![Screenshot derselben Demo. Ein Log-Statement ist sichtbar in der Konsole, das einfach "null" liest.](console-log-output.png) In der Tat ist `lowOrHi` zu diesem Zeitpunkt `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi ist null` überein. Es gibt also definitiv ein Problem mit Zeile 51. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, funktioniert also nicht.

8. Lassen Sie uns nachdenken, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode, um eine Referenz zu einem Element durch die Auswahl mit einem CSS-Selektor zu erhalten. Wenn wir weiter oben in unserer Datei suchen, finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir brauchen also hier einen Klassenselektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in die `querySelector()`-Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` zu `.lowOrHi` in Zeile 51 zu ändern.
10. Versuchen Sie, zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte jetzt das gewünschte `<p>`-Element zurückgeben. Puh! Noch ein Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder später darauf zurückgreifen – Ihre Wahl.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type).

### Syntaxfehler Runde drei

1. Wenn Sie jetzt versuchen, das Spiel noch einmal durchzuspielen, sollten Sie mehr Erfolg haben – das Spiel sollte völlig reibungslos ablaufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder indem Ihnen die Versuche ausgehen.
2. An diesem Punkt schlägt das Spiel wieder fehl und es wird derselbe Fehler ausgespuckt, den wir am Anfang hatten – "TypeError: resetButton.addeventListener is not a function"! Dieses Mal wird er jedoch als Fehler in Zeile 95 aufgeführt.
3. Wenn Sie sich Zeile 95 ansehen, ist es einfach zu erkennen, dass wir hier denselben Fehler gemacht haben. Wir müssen erneut nur `addeventListener` zu `addEventListener` ändern. Tun Sie das jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel reibungslos laufen, aber nach ein paar Runden bemerken Sie sicherlich, dass das Spiel immer 1 als "zufällige" Zahl auswählt, die Sie erraten müssen. Das ist definitiv nicht so, wie wir wollen, dass das Spiel abläuft!

Es gibt definitiv ein Problem in der Logik des Spiels – das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der Variable `randomNumber` und den Zeilen, in denen die Zufallszahl zuerst gesetzt wird. Die Instanz, die die Zufallszahl speichert, die wir am Anfang des Spiels erraten wollen, sollte sich um Zeilennummer 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die Zufallszahl vor jedem nachfolgenden Spiel generiert, ist um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns wieder an unseren Freund `console.log()` — fügen Sie die folgende Zeile direkt unter jeder der beiden obigen Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren, dann spielen Sie ein paar Spiele — Sie werden sehen, dass `randomNumber` an jedem Punkt, an dem es in der Konsole protokolliert wird, gleich 1 ist.

### Durcharbeiten der Logik

Um dies zu beheben, überlegen wir, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z. B. 0.5675493843.

```js
Math.random();
```

Als nächstes geben wir das Ergebnis, das aus dem Aufruf von `Math.random()` hervorgeht, durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 ergibt immer 0. Daher führt das Hinzufügen von 1 dazu, dass das Ergebnis immer 1 ist. Wir müssen die zufällige Zahl vor dem Abrunden mit 100 multiplizieren. Folgendes würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Deshalb wollten wir 1 hinzufügen, um eine zufällige Zahl zwischen 1 und 100 zu erhalten:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, dann speichern und aktualisieren – das Spiel sollte jetzt so funktionieren, wie wir es beabsichtigt haben!

## Andere häufige Fehler

Es gibt andere häufige Fehler, denen Sie in Ihrem Code begegnen werden. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von der eingegebenen Schätzung

Dies könnte ein weiteres Symptom des Verwechselns von Zuweisungs- und strengen Gleichheitsoperatoren sein. Wenn wir zum Beispiel diese Zeile in `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, was dazu führt, dass das Programm meldet, das Spiel sei gewonnen. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser Fehler ist ziemlich einfach – im Allgemeinen bedeutet er, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Informationen zu diesem Fehler finden Sie auf unserer Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list).

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall haben wir es geschafft, ihn zu bekommen, indem wir

```js
function checkGuess() {
```

zu

```js
function checkGuess( {
```

geändert haben. Dadurch hat der Browser gedacht, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dieser Fehler ist einfach – er bedeutet in der Regel, dass Sie eine Ihrer geschweiften Klammern von einer Funktions- oder Strukturbedingung vergessen haben. Wir haben diesen Fehler erhalten, indem wir eine der schließenden geschweiften Klammern am Ende der Funktion `checkGuess()` gelöscht haben.

### SyntaxError: expected expression, got '_string_' or SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten in der Regel, dass Sie die öffnende oder schließende Anführungszeichen eines Zeichenfolgenwertes weggelassen haben. Beim ersten oben genannten Fehler würde _string_ durch das nicht erwartete Zeichen ersetzt, das der Browser anstelle eines Anführungszeichens zu Beginn einer Zeichenfolge gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen abgeschlossen wurde.

Bei all diesen Fehlern denken Sie darüber nach, wie wir die Beispiele angegangen sind, die wir uns im Walkthrough angesehen haben. Wenn ein Fehler auftritt, gehen Sie zur angegebenen Zeilennummer, gehen Sie zu dieser Zeile und sehen Sie, ob Sie erkennen können, was falsch ist. Beachten Sie, dass der Fehler nicht unbedingt in dieser Zeile sein muss, und auch, dass der Fehler möglicherweise nicht durch dasselbe Problem verursacht wird, das wir oben genannt haben!

> [!NOTE]
> Weitere Informationen zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Da haben wir es, die Grundlagen der Fehlererkennung in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch läuft, aber zumindest spart es Ihnen ein paar Stunden Schlaf und ermöglicht es Ihnen, ein bisschen schneller voranzukommen, wenn die Dinge nicht so laufen, wie sie sollten, insbesondere in den frühen Phasen Ihrer Lernerfahrung.

## Siehe auch

- Es gibt viele andere Arten von Fehlern, die hier nicht aufgeführt sind; wir stellen eine Referenz zusammen, die erklärt, was sie im Detail bedeuten – siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie auf Fehler in Ihrem Code stoßen, die Sie nach dem Lesen dieses Artikels nicht wissen, wie Sie sie beheben sollen, können Sie Hilfe bekommen! Fragen Sie nach Hilfe in den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
