---
title: Was ist schiefgelaufen? JavaScript-Fehlerbehebung
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 7d8ee59e2e9abaa903f883d0d0361d4d5a9a4498
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie im vorherigen Artikel das Spiel "Errate die Zahl" aufgebaut haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Sorge — dieser Artikel soll Ihnen helfen, nicht zu verzweifeln, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie grundlegende Erfahrung mit dem Schreiben von JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verständnis der Arten von Fehlern, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlerbehebung.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der Browser-Entwicklertools.</li>
          <li>Grundlegendes Verständnis von JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlerarten

Grundsätzlich gibt es zwei Hauptarten von Fehlern, auf die Sie stoßen werden, wenn etwas im Code schiefgeht:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm überhaupt nicht läuft oder mitten im Betrieb aufhört zu funktionieren. Sie erhalten in der Regel auch einige Fehlermeldungen. Diese sind in der Regel nicht allzu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax korrekt ist, der Code aber nicht das ausführt, was Sie beabsichtigt haben. Das bedeutet, dass das Programm erfolgreich läuft, aber falsche Ergebnisse liefert. Diese sind oft schwerer zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die die Quelle des Fehlers anzeigt.

Okay, es ist nicht ganz _so_ einfach — es gibt einige weitere Differenzierungen, wenn Sie tiefer eintauchen. Aber die obigen Klassifikationen reichen in diesem frühen Stadium Ihrer Karriere aus. Wir werden uns im Folgenden beide Arten ansehen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, kehren wir zu unserem Zahlratespiel zurück — dieses Mal werden wir jedoch eine Version erkunden, in der absichtlich Fehler eingeführt wurden. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (sehen Sie sich das [Live-Betrieb hier](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) an).

1. Öffnen Sie zu Beginn die lokale Kopie in Ihrem bevorzugten Texteditor und Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden feststellen, dass der "Rate abgeben"-Button nicht funktioniert!

> [!NOTE]
> Möglicherweise haben Sie Ihre eigene Version des Spielexemplars, die nicht funktioniert und die Sie reparieren möchten! Wir möchten trotzdem, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die Techniken lernen, die wir hier lehren. Danach können Sie versuchen, Ihr eigenes Beispiel zu verbessern.

Zu diesem Zeitpunkt sollten wir die Entwicklerkonsole konsultieren, um zu sehen, ob sie Syntaxfehler meldet, und diese dann zu beheben. Sie lernen unten, wie das geht.

## Behebung von Syntaxfehlern

Früher im Kurs baten wir Sie, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklungstools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben (wenn Sie sich nicht erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um zu erfahren, wie). Was noch nützlicher ist: Die Konsole gibt Ihnen Fehlermeldungen, wann immer ein Syntaxfehler im JavaScript existiert, das in die JavaScript-Engine des Browsers eingespeist wird. Gehen wir nun auf die Fehlersuche.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung etwa wie folgt sehen: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung ist:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, teilt uns mit, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, gibt uns den Ort im Code an, von dem der Fehler stammt: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die aufgerufene Funktion vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung, dass wir etwas falsch geschrieben haben. Wenn Sie sich der korrekten Schreibweise eines Teils der Syntax nicht sicher sind, ist es oft gut, das Feature auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, ist die Suche nach "mdn _name-of-feature_" mit Ihrer bevorzugten Suchmaschine. Hier ist eine Abkürzung, um Ihnen in diesem Fall etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Der Blick auf diese Seite zeigt, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript zwischen Groß- und Kleinschreibung unterscheidet, sodass bereits ein geringer Unterschied in Schreibweise oder Groß-/Kleinschreibung einen Fehler verursachen kann. Das Ändern von `addeventListener` zu `addEventListener` sollte dieses Problem beheben. Tun Sie dies jetzt.

> [!NOTE]
> Siehe unsere Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) für mehr Details zu diesem Fehler.

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie nun versuchen, eine Zahl einzugeben und den "Rate abgeben"-Button zu drücken, erhalten Sie einen weiteren Fehler! ![Screenshot von derselben "Number guessing game" Demo. Dieses Mal ist ein anderer Fehler in der Konsole sichtbar, der "X TypeError: lowOrHi is null" lautet.](variable-is-null.png)
3. Dieses Mal wird der folgende Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Je nach verwendetem Browser sehen Sie hier möglicherweise eine andere Meldung. Die oben genannte Nachricht zeigt Ihnen Firefox, aber Chrome zeigt Ihnen beispielsweise dies:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort beim Laden der Seite auf, da dieser Fehler innerhalb einer Funktion (im Block `checkGuess() { }`) auftrat. Wie Sie detaillierter in unserem späteren [Artikel über Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen werden, wird der Code innerhalb von Funktionen in einem separaten Bereich ausgeführt als der Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler wurde nicht ausgelöst, bis die `checkGuess()`-Funktion durch Zeile 87 ausgeführt wurde.

4. Die im Fehler angegebene Zeilennummer ist 79. Schauen Sie sich Zeile 79 an, und Sie sehen den folgenden Code:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der Variablen `lowOrHi` auf eine Zeichenkette zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es soll. Schauen wir mal, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz finden Sie in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable so einzustellen, dass sie einen Verweis auf ein Element im HTML-Dokument enthält. Schauen wir, was die Variable nach dieser Zeile enthält. Fügen Sie den folgenden Code in Zeile 54 hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code gibt den Wert von `lowOrHi` in der Konsole aus, nachdem wir versucht haben, ihn in Zeile 51 zu setzen. Siehe [`console.log()`](/de/docs/Web/API/console/log_static) für mehr Informationen.

7. Speichern und aktualisieren Sie, und Sie sollten nun das `console.log()`-Ergebnis in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Eine Protokollanweisung ist in der Konsole sichtbar, die einfach "null" liest.](console-log-output.png) Sicher genug, `lowOrHi` hat zu diesem Zeitpunkt den Wert `null`, und dies stimmt mit der Firefox-Fehlermeldung `lowOrHi is null` überein. Es gibt also definitiv ein Problem mit Zeile 51. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element festzulegen, geht also falsch.

8. Überlegen wir mal, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um einen Verweis auf ein Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Weiter oben in unserer Datei finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen hier also einen Klassenselektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in die `querySelector()`-Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in Zeile 51 in `.lowOrHi` zu ändern.
10. Versuchen Sie es erneut zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte nun das `<p>` Element zurückgeben, das wir wollen. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder sie zur späteren Ansicht behalten — ganz Ihnen überlassen.

> [!NOTE]
> Siehe unsere Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) für mehr Details zu diesem Fehler.

### Syntaxfehler Runde drei

1. Wenn Sie jetzt versuchen, das Spiel erneut zu spielen, sollten Sie mehr Erfolg haben — das Spiel sollte absolut in Ordnung sein, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten, oder indem Sie keine Versuche mehr haben.
2. Zu diesem Zeitpunkt schlägt das Spiel erneut fehl, und derselbe Fehler wird wie zu Beginn ausgegeben — "TypeError: resetButton.addeventListener is not a function"! Dieses Mal wird er jedoch als aus Zeile 95 stammend gelistet.
3. Wenn wir uns Zeile 95 ansehen, ist es leicht zu erkennen, dass wir hier denselben Fehler gemacht haben. Wir müssen lediglich `addeventListener` in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei laufen, jedoch werden Sie nach einigen Durchläufen unweigerlich feststellen, dass das Spiel immer die Zahl 1 als "zufällige" Zahl auswählt, die Sie erraten sollen. Definitiv nicht ganz so, wie wir das Spiel ablaufen lassen wollen!

Es gibt definitiv ein Problem in der Spiellogik irgendwo — das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der Variablen `randomNumber` und nach den Zeilen, in denen die zufällige Zahl zuerst gesetzt wird. Die Instanz, die die zufällige Zahl speichert, die wir am Anfang des Spiels erraten wollen, sollte sich um Zeile 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die zufällige Zahl vor jedem nachfolgenden Spiel generiert, befindet sich um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu prüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns wieder unserem Freund `console.log()` zu — fügen Sie die folgende Zeile direkt unter jeder der beiden oben genannten Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, und spielen Sie dann ein paar Spiele — Sie werden sehen, dass `randomNumber` zu jedem Zeitpunkt, an dem es in der Konsole protokolliert wird, gleich 1 ist.

### Durch die Logik arbeiten

Um dies zu beheben, überlegen wir, wie diese Zeile arbeitet. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, was eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z.B. 0.5675493843.

```js
Math.random();
```

Als nächstes übergeben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die an ihn übergebene Zahl auf die nächstniedrigere ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 wird immer 0 zurückgeben, und das Hinzufügen von 1 zu diesem Ergebnis wird immer 1 zurückgeben. Wir müssen die Zufallszahl vor dem Abrunden mit 100 multiplizieren. Das Folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher möchten wir 1 hinzufügen, um uns eine zufällige Zahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie beide Zeilen wie folgt zu aktualisieren, und speichern und aktualisieren Sie dann — das Spiel sollte jetzt wie beabsichtigt ablaufen!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Spiel ist nach dem ersten falschen Rateversuch vorbei

Dies könnte ein weiteres Symptom für die Verwechslung der Zuweisungs- und strikten Gleichheitsoperatoren sein. Zum Beispiel, wenn wir diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
} else if (guessCount === 10) {
```

zu

```js
} else if (guessCount = 10) {
```

würde der Test immer `true` zurückgeben, was dazu führen würde, dass das Programm `setGameOver()` nach dem ersten falschen Versuch ausführt. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser ist ziemlich einfach — er bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Siehe unsere Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) für mehr Details zu diesem Fehler.

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall gelang es uns, ihn zu erzeugen, indem wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

änderten.

Dies hat den Browser dazu gebracht zu denken, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Das ist einfach — es bedeutet im Grunde, dass Ihnen eine Ihrer geschweiften Klammern in einer Funktion oder Strukturierung fehlt. Wir haben diesen Fehler erhalten, indem wir eine der schließenden geschweiften Klammern nahe dem Ende der `checkGuess()`-Funktion gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie die Anfangs- oder Schlusszeichen eines Zeichenfolgenwerts ausgelassen haben. Im ersten Fehler oben würde _string_ durch das unerwartete Zeichen (oder die unerwarteten Zeichen) ersetzt, die der Browser statt eines Anführungszeichens am Anfang einer Zeichenkette gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenkette nicht mit einem Anführungszeichen abgeschlossen wurde.

Für alle diese Fehler, denken Sie darüber nach, wie wir die Beispiele angegangen sind, die wir im Durchgang betrachtet haben. Wenn ein Fehler auftritt, schauen Sie auf die genannte Zeilennummer, gehen Sie zu dieser Zeile und sehen Sie, ob Sie feststellen können, was falsch ist. Beachten Sie, dass der Fehler nicht unbedingt in dieser Zeile sein muss und auch, dass der Fehler nicht unbedingt durch genau dasselbe Problem verursacht ist, das wir oben angesprochen haben!

> [!NOTE]
> Siehe unsere Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) für mehr Details zu diesen Fehlern.

## Zusammenfassung

Damit hätten wir die Grundlagen zur Fehlerbehebung in einfachen JavaScript-Programmen angesprochen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird Ihnen das ein paar Stunden Schlaf sparen und es Ihnen ermöglichen, ein bisschen schneller voranzukommen, wenn die Dinge nicht so laufen, wie sie sollten, besonders in den früheren Phasen Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlerarten, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie nach dem Lesen dieses Artikels auf Fehler in Ihrem Code stoßen, die Sie sich nicht erklären können, können Sie Hilfe bekommen! Stellen Sie eine Frage auf den [Kommunikationskanälen](/de/docs/MDN/Community/Comunication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
