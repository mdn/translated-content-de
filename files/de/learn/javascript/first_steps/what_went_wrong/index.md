---
title: Was ist schiefgelaufen? JavaScript Fehlerbehebung
slug: Learn/JavaScript/First_steps/What_went_wrong
l10n:
  sourceCommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

Beim Erstellen des Spiels "Rate die Zahl" im vorherigen Artikel haben Sie möglicherweise festgestellt, dass es nicht funktioniert. Keine Sorge — dieser Artikel soll Sie davor bewahren, sich bei solchen Problemen die Haare zu raufen, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML und CSS, ein Verständnis davon, was JavaScript ist.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit und Sicherheit erlangen, Probleme im eigenen Code zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Arten von Fehlern

Im Allgemeinen gibt es zwei Hauptarten von Fehlern, auf die Sie stoßen, wenn Sie etwas falsch im Code machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm überhaupt nicht läuft oder mitten im Verlauf stoppt — normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind normalerweise einfach zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, aber der Code nicht das ist, was Sie beabsichtigt haben, was bedeutet, dass das Programm erfolgreich läuft, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

Okay, so einfach ist es nicht ganz — es gibt einige weitere Unterscheidungsmerkmale, wenn Sie tiefer bohren. Aber die obigen Klassifikationen reichen in dieser frühen Phase Ihrer Karriere aus. Wir werden uns diese Arten im Folgenden genauer ansehen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, kehren wir zu unserem Zahlenratespiel zurück — außer dass wir diesmal eine Version mit einigen absichtlich eingeführten Fehlern erkunden. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (sehen Sie es sich [hier live an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Beginnen Sie, indem Sie die lokale Kopie in Ihrem bevorzugten Texteditor und Browser öffnen.
2. Versuchen Sie, das Spiel zu spielen — Sie werden bemerken, dass der "Submit guess"-Button nicht funktioniert!

> [!NOTE]
> Sie haben möglicherweise Ihre eigene Version des Spielbeispiels, das nicht funktioniert und das Sie möglicherweise reparieren möchten! Wir würden trotzdem gerne, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die hier vermittelten Techniken lernen. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu beheben.

An diesem Punkt lassen Sie uns die Entwicklerkonsole konsultieren, um zu prüfen, ob sie Syntaxfehler meldet, und dann versuchen, diese zu beheben. Sie werden unten lernen wie.

## Beheben von Syntaxfehlern

Früher im Kurs haben wir Sie einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) eingeben lassen (wenn Sie sich nicht erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie). Noch nützlicher ist, dass die Konsole Ihnen Fehlermeldungen gibt, wann immer ein Syntaxfehler im JavaScript vorliegt, das dem JavaScript-Interpreter des Browsers zugeführt wird. Lassen Sie uns nun auf die Jagd gehen.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung von etwa folgender Art sehen: !["Zahlenratespiel"-Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:86:3)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:86:15
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:86:15`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 86, Zeichen 15 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 86 im Code-Editor ansehen, finden wir diese Zeile:

   > [!WARNING]
   > Die Fehlermeldung ist möglicherweise nicht in Zeile 86.
   >
   > Wenn Sie einen Code-Editor mit einer Erweiterung verwenden, die einen Live-Server auf Ihrem lokalen Rechner startet, wird dies zusätzlichen Code injizieren. Dadurch werden die Entwicklerwerkzeuge den Fehler als in einer Zeile auflisten, die nicht 86 ist.

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung, dass wir etwas falsch geschrieben haben. Wenn Sie sich der korrekten Schreibweise einer Syntax nicht sicher sind, ist es oft gut, das Feature auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, ist, nach "mdn _name-of-feature_" mit Ihrer bevorzugten Suchmaschine zu suchen. Hier ist eine Abkürzung, um Ihnen in diesem Fall etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Wenn Sie sich diese Seite ansehen, scheint der Fehler zu sein, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript groß- und kleinsensitiv ist, sodass jeder kleinste Unterschied in der Schreibweise zu einem Fehler führt. Wenn Sie `addeventListener` in `addEventListener` ändern, sollte dies behoben werden. Machen Sie das jetzt.

> [!NOTE]
> Siehe unsere Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) für mehr Details zu diesem Fehler.

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie nun versuchen, einen Tipp einzugeben und den "Submit guess"-Button zu drücken, sehen Sie einen weiteren Fehler! ![Screenshot der gleichen "Zahlenratespiel"-Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der lautet "X TypeError: lowOrHi is null".](variable-is-null.png)
3. Diesmal wird der folgende Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom Browser, den Sie verwenden, sehen Sie möglicherweise eine andere Nachricht hier. Die obige Nachricht ist, was Firefox Ihnen zeigen wird, aber Chrome zum Beispiel wird Ihnen dies zeigen:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber unterschiedliche Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler ist nicht sofort beim Laden der Seite aufgetreten, da dieser Fehler innerhalb einer Funktion (innerhalb des Blocks `checkGuess() { }`) auftrat. Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn/JavaScript/Building_blocks/Functions) im Detail lernen werden, läuft Code innerhalb von Funktionen in einem separaten Gültigkeitsbereich als Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler nicht ausgelöst, bis die Funktion `checkGuess()` durch Zeile 86 ausgeführt wurde.

4. Die Zeilennummer im Fehler ist 80. Schauen Sie sich Zeile 80 an und Sie werden diesen Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der Variablen `lowOrHi` auf eine Textzeichenfolge zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es sollte. Lassen Sie uns sehen, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz, die Sie finden, ist in Zeile 49:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, dass die Variable einen Verweis auf ein Element im HTML-Dokument enthält. Lassen Sie uns sehen, was die Variable enthält, nachdem diese Zeile ausgeführt wurde. Fügen Sie den folgenden Code in Zeile 50 ein:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in der Konsole ausgeben, nachdem wir versucht haben, ihn in Zeile 49 zu setzen. Siehe {{domxref("console/log_static", "console.log()")}} für weitere Informationen.

7. Speichern und aktualisieren Sie, und Sie sollten nun das Ergebnis von `console.log()` in Ihrer Konsole sehen. ![Screenshot derselben Demo. Eine Protokollaussage ist in der Konsole sichtbar, die einfach "null" anzeigt.](console-log-output.png) Sicher genug, `lowOrHi`'s Wert ist `null` zu diesem Zeitpunkt, und das stimmt mit der Fehlermeldung von Firefox überein, `lowOrHi is null`. Also gibt es definitiv ein Problem mit Zeile 49. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert bedeutet "nichts" oder "keinen Wert". Also geht unser Code, um `lowOrHi` auf ein Element zu setzen, schief.

8. Lassen Sie uns überlegen, was das Problem sein könnte. Zeile 49 verwendet die Methode [`document.querySelector()`](/de/docs/Web/API/Document/querySelector), um einen Verweis auf ein Element durch Auswahl desselben mit einem CSS-Selektor zu erhalten. Wenn wir weiter oben in unserer Datei nachsehen, können wir den betreffenden Absatz finden:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Also brauchen wir hier einen Klassenselektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der an die `querySelector()`-Methode in Zeile 49 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in `.lowOrHi` in Zeile 49 zu ändern.
10. Versuchen Sie, erneut zu speichern und zu aktualisieren, und Ihre `console.log()`-Anweisung sollte jetzt das `<p>`-Element zurückgeben, das wir wollen. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder sie behalten, um später darauf zuzugreifen — Ihre Wahl.

> [!NOTE]
> Siehe unsere Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) für mehr Details zu diesem Fehler.

### Syntaxfehler Runde drei

1. Wenn Sie das Spiel nun erneut spielen, sollten Sie mehr Erfolg haben — das Spiel sollte absolut reibungslos laufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder indem Ihnen die Versuche ausgehen.
2. In diesem Moment scheitert das Spiel erneut, und derselbe Fehler wird ausgegeben, den wir am Anfang hatten — "TypeError: resetButton.addeventListener is not a function"! Diesmal wird es jedoch in Zeile 94 aufgelistet.
3. Wenn wir uns Zeile 94 ansehen, ist es leicht zu sehen, dass wir hier denselben Fehler gemacht haben. Wir müssen hier nur `addeventListener` in `addEventListener` ändern. Machen Sie das jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei laufen, jedoch wird Ihnen nach ein paar Durchläufen sicherlich auffallen, dass das Spiel immer die Zahl 1 als "zufällige" Zahl auswählt, die Sie erraten müssen. Definitiv nicht ganz so, wie wir das Spiel verlaufen lassen wollen!

Es gibt definitiv ein Problem in der Spiellogik irgendwo — das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der Variablen `randomNumber` und den Zeilen, wo die Zufallszahl zuerst gesetzt wird. Die Instanz, die die Zufallszahl speichert, die wir bei Spielbeginn erraten wollen, sollte in etwa bei Zeile 45 sein:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und die, die die Zufallszahl vor jedem nachfolgenden Spiel generiert, ist etwa in Zeile 113:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, lassen Sie uns erneut auf unseren Freund `console.log()` zurückgreifen — fügen Sie die folgende Zeile direkt unter jeder der beiden oben genannten Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie, dann spielen Sie einige Spiele — Sie werden sehen, dass `randomNumber` zu jedem Punkt, an dem es in die Konsole geloggt wird, gleich 1 ist.

### Durcharbeiten der Logik

Um das zu beheben, überlegen wir, wie diese Zeile funktioniert. Zunächst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, welche eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z.B. 0.5675493843.

```js
Math.random();
```

Als nächstes geben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), welche die übergebene Zahl auf die nächste ganze Zahl abrundet. Danach addieren wir 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 ergibt immer 0, sodass das Hinzufügen von 1 dazu immer 1 ergibt. Wir müssen die Zufallszahl mit 100 multiplizieren, bevor wir sie abrunden. Das folgende würde uns eine Zufallszahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Deshalb wollen wir 1 hinzufügen, um eine Zufallszahl zwischen 1 und 100 zu erhalten:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, speichern und aktualisieren Sie dann die Seite — das Spiel sollte nun so laufen, wie wir es beabsichtigt haben!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von der eingegebenen Vermutung

Dies könnte ein weiteres Symptom für die Verwechslung des Zuweisungs- und des strikten Gleichheitsoperators sein. Wenn wir zum Beispiel folgende Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, was das Programm dazu veranlasst, zu melden, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser ist ziemlich einfach — er bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Siehe unsere Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) für mehr Details zu diesem Fehler.

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch formatiertes JavaScript-Objekt, aber in diesem Fall haben wir es dadurch erhalten, indem wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

geändert haben.

Dies hat dazu geführt, dass der Browser denkt, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist einfach — es bedeutet im Allgemeinen, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder einer Bedingungsstruktur vergessen haben. Wir haben diesen Fehler dadurch erhalten, dass wir eine der abschließenden geschweiften Klammern nahe dem Ende der Funktion `checkGuess()` gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie das Öffnungs- oder Schlusszeichen einer Zeichenfolgenwerts offengelassen haben. Im ersten Fehler oben würde _string_ mit dem unerwarteten Zeichen oder Zeichenfolgen ersetzt, die der Browser anstelle eines Anführungszeichens am Anfang einer Zeichenfolge gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen beendet wurde.

Bei all diesen Fehlern, denken Sie daran, wie wir die Beispiele behandelt haben, die wir im Walkthrough betrachtet haben. Wenn ein Fehler auftritt, schauen Sie sich die Zeilennummer an, die Sie erhalten haben, gehen Sie zu dieser Zeile und sehen Sie, ob Sie erkennen können, was falsch ist. Beachten Sie, dass der Fehler nicht unbedingt auf dieser Zeile sein muss, und dass der Fehler nicht durch genau dasselbe Problem verursacht sein muss, das wir oben zitiert haben!

> [!NOTE]
> Siehe unsere Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) für mehr Details zu diesen Fehlern.

## Zusammenfassung

Das waren also die Grundlagen zur Fehlerfindung in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code fehlerhaft ist, aber zumindest spart Ihnen das ein paar Stunden Schlaf und ermöglicht Ihnen, ein bisschen schneller voranzukommen, wenn die Dinge nicht wie erwartet verlaufen, besonders in den frühen Stadien Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Arten von Fehlern, die hier nicht aufgelistet sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie in Ihrem Code auf Fehler stoßen, bei denen Sie sich nach dem Lesen dieses Artikels nicht sicher sind, wie Sie sie beheben können, können Sie um Hilfe bitten! Fragen Sie um Hilfe auf den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
