---
title: Was ist schiefgelaufen? Fehlersuche in JavaScript
slug: Learn/JavaScript/First_steps/What_went_wrong
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

Als Sie im vorherigen Artikel das Spiel "Rate die Zahl" erstellt haben, haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Sorge — dieser Artikel soll Sie davor bewahren, wegen solcher Probleme die Haare zu raufen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

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
        Die Fähigkeit und das Vertrauen zu erlangen, Probleme im eigenen
        Code zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Arten von Fehlern

Allgemein gesprochen gibt es zwei Haupttypen von Fehlern, die auftreten können, wenn Sie etwas im Code falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm entweder gar nicht läuft oder unterwegs aufhört zu arbeiten — in der Regel erhalten Sie auch einige Fehlermeldungen. Diese sind normalerweise einfach zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das ist, was Sie beabsichtigt haben, was bedeutet, dass das Programm erfolgreich läuft, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es in der Regel keine Fehlermeldung gibt, die Sie auf die Fehlerquelle hinweist.

Okay, es ist nicht ganz _so_ einfach — es gibt einige andere Unterscheidungsmerkmale, wenn Sie tiefer eintauchen. Aber die obige Klassifizierung genügt in diesem frühen Stadium Ihrer Karriere. Wir werden uns beide Arten genauer ansehen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, kehren wir zu unserem Zahlenspiel zurück — diesmal werden wir jedoch eine Version erkunden, in der einige absichtliche Fehler eingeführt wurden. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (Sie können es [hier live sehen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden bemerken, dass es nicht funktioniert, wenn Sie die Schaltfläche "Geben Sie den Tipp ab" drücken!

> [!NOTE]
> Möglicherweise haben Sie Ihre eigene Version des Spielbeispiels, die nicht funktioniert und die Sie beheben möchten. Wir möchten trotzdem, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die Techniken lernen können, die wir hier lehren. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu beheben.

An diesem Punkt konsultieren wir die Entwicklerkonsole, um zu schauen, ob sie Syntaxfehler meldet, und versuchen dann, diese zu beheben. Sie lernen unten, wie das geht.

## Behebung von Syntaxfehlern

Früher in diesem Kurs haben wir Sie gebeten, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklertools](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) einzugeben. (Wenn Sie sich nicht erinnern können, wie man dies in Ihrem Browser öffnet, folgen Sie dem vorherigen Link, um zu erfahren, wie.) Was noch nützlicher ist, ist, dass die Konsole Ihnen Fehlermeldungen gibt, wann immer ein Syntaxfehler im JavaScript existiert, das dem JavaScript-Interpreter des Browsers übergeben wird. Jetzt lasst uns auf die Jagd gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung in etwa folgender Form sehen: !["Zahlenratespiel"-Demoseite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:86:3)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:86:15
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:86:15`, gibt uns den Ort im Code an, von dem der Fehler stammt: Zeile 86, Zeichen 15 der Datei "number-game-errors.html".

3. Wenn wir Zeile 86 in unserem Code-Editor ansehen, finden wir diese Zeile:

   > [!WARNING]
   > Die Fehlermeldung befindet sich möglicherweise nicht in Zeile 86.
   >
   > Wenn Sie einen Code-Editor mit einer Erweiterung verwenden, die einen Live-Server auf Ihrer lokalen Maschine startet, wird zusätzlicher Code injiziert. Dadurch listen die Entwicklertools den Fehler an einer Zeile auf, die nicht die 86 ist.

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung besagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, nicht vom JavaScript-Interpreter erkannt wird. Oft bedeutet diese Fehlermeldung, dass wir etwas falsch geschrieben haben. Wenn Sie sich nicht sicher sind, wie die korrekte Schreibweise eines bestimmten Syntaxelements ist, ist es oft gut, die Funktion auf MDN nachzuschlagen. Der effizienteste Weg ist aktuell, nach "mdn _name-of-feature_" mit Ihrer bevorzugten Suchmaschine zu suchen. Hier ist eine Abkürzung, um Ihnen an dieser Stelle Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Beim Blick auf diese Seite scheint der Fehler zu sein, dass wir den Namen der Funktion falsch geschrieben haben! Denken Sie daran, dass JavaScript unterscheidet Groß- und Kleinschreibung, sodass selbst ein kleiner Unterschied in der Schreibweise oder Groß-/Kleinschreibung einen Fehler verursachen kann. Das Ändern von `addeventListener` zu `addEventListener` sollte dies beheben. Tun Sie dies jetzt.

> [!NOTE]
> Siehe unsere [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) Referenzseite für weitere Details zu diesem Fehler.

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie jetzt versuchen, einen Tipp einzugeben und die Schaltfläche "Tipp abgeben" zu drücken, wird ein weiterer Fehler angezeigt! ![Screenshot der gleichen Demo "Zahlenratespiel". Dieses Mal ist ein anderer Fehler in der Konsole sichtbar, der lautet "X TypeError: lowOrHi is null".](variable-is-null.png)
3. Dieses Mal wird der folgende Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser könnten Sie hier eine andere Nachricht sehen. Die oben gezeigte Nachricht ist das, was Firefox Ihnen zeigt, aber Chrome zeigt Ihnen zum Beispiel Folgendes:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber verschiedene Browser beschreiben ihn unterschiedlich.

   > [!NOTE]
   > Dieser Fehler trat nicht auf, sobald die Seite geladen wurde, weil dieser Fehler innerhalb einer Funktion (innerhalb des `checkGuess() { }` Blocks) auftrat. Wie Sie in unserem späteren [Artikel über Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Functions) ausführlicher erfahren werden, läuft Code innerhalb von Funktionen in einem separaten Gültigkeitsbereich als Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler wurde erst geworfen, als die `checkGuess()`-Funktion durch Zeile 86 ausgeführt wurde.

4. Die in dem Fehler angegebene Zeilennummer ist 80. Sehen Sie sich Zeile 80 an, und Sie werden den folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der `lowOrHi`-Variablen auf eine Textzeichenfolge zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es supposed to sein sollte. Lassen Sie uns sehen, warum das so ist — versuchen Sie, andere Vorkommen von `lowOrHi` im Code zu suchen. Das früheste Vorkommen, das Sie finden werden, ist in Zeile 49:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable auf ein Element im HTML-Dokument zu referenzieren. Lassen Sie uns sehen, was die Variable nach dieser Zeile enthält. Fügen Sie die folgende Zeile in Zeile 50 hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in die Konsole ausgeben, nachdem wir versucht haben, sie in Zeile 49 zu setzen. Siehe [`console.log()`](/de/docs/Web/API/Console/log_static) für weitere Informationen.

7. Speichern Sie und aktualisieren Sie, und Sie sollten nun das Ergebnis der `console.log()` Anweisung in Ihrer Konsole sehen. ![Screenshot der gleichen Demo. Eine Protokollaussage ist in der Konsole sichtbar, die einfach "null" anzeigt.](console-log-output.png) Tatsächlich hat `lowOrHi` zu diesem Zeitpunkt den Wert `null`, und dies passt zur Firefox-Fehlermeldung `lowOrHi is null`. Es gibt also definitiv ein Problem mit Zeile 49. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, geht also schief.

8. Lassen Sie uns überlegen, was das Problem sein könnte. Zeile 49 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um eine Referenz zu einem Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Wenn wir weiter oben in unserer Datei nachsehen, können wir den betreffenden Absatz finden:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen also hier einen Klassen-Selektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in die `querySelector()` Methode in Zeile 49 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in `.lowOrHi` in Zeile 49 zu ändern.
10. Versuchen Sie es erneut mit Speichern und Aktualisieren, und Ihre `console.log()` Anweisung sollte das gewünschte `<p>` Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder für später als Referenz behalten — Ihre Wahl.

> [!NOTE]
> Siehe unsere [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) Referenzseite für weitere Details zu diesem Fehler.

### Syntaxfehler Runde drei

1. Wenn Sie jetzt noch einmal versuchen, das Spiel zu spielen, sollten Sie mehr Erfolg haben — das Spiel sollte absolut einwandfrei durchgespielt werden, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl raten oder indem Sie keine Versuche mehr haben.
2. An diesem Punkt schlägt das Spiel wieder fehl und der gleiche Fehler wird wie zu Beginn ausgegeben — "TypeError: resetButton.addeventListener is not a function"! Diesmal wird er jedoch als aus Zeile 94 kommend aufgeführt.
3. Wenn Sie sich Zeile 94 ansehen, ist es einfach zu sehen, dass wir hier denselben Fehler gemacht haben. Wir müssen erneut nur `addeventListener` in `addEventListener` ändern. Tun Sie dies jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei durchlaufen, aber nachdem Sie es ein paar Mal gespielt haben, werden Sie zweifellos bemerken, dass das Spiel immer 1 als "zufällige" Zahl wählt, die Sie erraten müssen. Definitiv nicht so, wie wir das Spiel ablaufen lassen wollen!

Es gibt definitiv ein Problem in der Spiellogik irgendwo — das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der `randomNumber`-Variable und den Zeilen, in denen die Zufallszahl zuerst gesetzt wird. Der Fall, der die Zufallszahl speichert, die wir am Anfang des Spiels erraten wollen, sollte sich etwa in Zeile 45 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die Zufallszahl vor jedem nachfolgenden Spiel generiert, befindet sich etwa in Zeile 113:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns erneut unserem Freund `console.log()` zu — fügen Sie folgende Zeile direkt unterhalb jeder der obigen beiden Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern Sie und aktualisieren Sie, dann spielen Sie ein paar Spiele — Sie sehen, dass `randomNumber` zu beiden Zeitpunkten, an denen sie in die Konsole protokolliert wird, gleich 1 ist.

### Durchgehen der Logik

Um dies zu beheben, lassen Sie uns darüber nachdenken, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt, z.B. 0.5675493843.

```js
Math.random();
```

Als nächstes geben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Dann addieren wir 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 nach unten gibt immer 0 zurück, sodass das Hinzufügen von 1 immer 1 ergibt. Wir müssen die Zufallszahl zuerst mal mit 100 multiplizieren, bevor wir sie abrunden. Das Folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher möchten wir 1 hinzufügen, um eine zufällige Zahl zwischen 1 und 100 zu erhalten:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, speichern und erfrischen Sie — das Spiel sollte nun so ablaufen, wie wir es beabsichtigen!

## Weitere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, Sie hätten gewonnen, unabhängig von der eingegebenen Zahl

Dies könnte ein weiteres Symptom für das Verwechseln der Zuweisungs- und Gleichheitsoperatoren sein. Zum Beispiel, wenn wir diese Zeile innerhalb `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben und das Programm würde melden, dass das Spiel gewonnen ist. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Das ist ziemlich einfach — es bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Siehe unsere [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) Referenzseite für weitere Details zu diesem Fehler.

### SyntaxError: missing : nach property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall haben wir es dadurch geschafft, ihn zu bekommen, dass wir

```js
function checkGuess() {
```

zu

```js
function checkGuess( {
```

dies veranlasste den Browser zu denken, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion einzufügen. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Das ist einfach — es bedeutet im Allgemeinen, dass eine Ihrer geschweiften Klammern in einer Funktion oder Struktur fehlt. Wir erhielten diesen Fehler, indem wir eine der schließenden geschweiften Klammern nahe dem Ende der `checkGuess()` Funktion löschten.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal enthält einen unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie das öffnende oder schließende Anführungszeichen eines Zeichenfolgenwerts weggelassen haben. In dem ersten oben genannten Fehler würde _string_ durch die unerwarteten Zeichen ersetzt werden, die der Browser fand, anstatt eines Anführungszeichens am Anfang eines Strings. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen endet.

Für all diese Fehler denken Sie daran, wie wir die Beispiele, die wir im Durchgang betrachtet haben, angegangen sind. Wenn ein Fehler auftritt, schauen Sie auf die angegebene Zeilenummer, gehen Sie zu dieser Zeile und sehen Sie, ob Sie erkennen können, was falsch ist. Bedenken Sie, dass der Fehler nicht unbedingt auf dieser Zeile sein wird und dass der Fehler möglicherweise nicht durch genau dasselbe Problem verursacht wird, das wir oben angegeben haben!

> [!NOTE]
> Siehe unsere [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal enthält einen unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) Referenzseiten für weitere Details zu diesen Fehlern.

## Zusammenfassung

Das sind also die Grundlagen, um Fehler in einfachen JavaScript-Programmen zu erkennen. Es wird nicht immer so einfach sein herauszufinden, was in Ihrem Code schiefgelaufen ist, aber zumindest wird dies Ihnen ein paar Stunden Schlaf sparen und Ihnen ermöglichen, etwas schneller voranzukommen, wenn die Dinge nicht richtig laufen, insbesondere in den frühen Phasen Ihres Lernwegs.

## Siehe auch

- Es gibt viele andere Arten von Fehlern, die hier nicht aufgeführt sind; wir stellen eine Referenz zusammen, die erklärt, was sie im Detail bedeuten — siehe das [JavaScript Fehler-Referenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie auf Fehler in Ihrem Code stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe bekommen! Bitten Sie in den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels) um Hilfe. Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
