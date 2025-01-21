---
title: Was ist schiefgelaufen? JavaScript-Fehlerbehebung
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: f4c2549e1b871a2236f3c759c49eb660994029dd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie das "Errate die Zahl"-Spiel im vorherigen Artikel aufgebaut haben, haben Sie vielleicht festgestellt, dass es nicht funktionierte. Keine Sorge — dieser Artikel soll Ihnen davor bewahren, bei solchen Problemen verzweifelt zu werden, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, grundlegende Erfahrung im Schreiben von JavaScript.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen der Fehlerarten, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlersuche.</li>
          <li>Grundlegende Erfahrung in der Verwendung der JavaScript-Konsole der Entwicklerwerkzeuge des Browsers.</li>
          <li>Grundlegende Vertrautheit mit JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlerarten

Im Allgemeinen gibt es zwei Haupttypen von Fehlern, auf die Sie stoßen, wenn Sie im Code etwas falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die tatsächlich dazu führen, dass das Programm gar nicht läuft oder mittendrin aufhört zu funktionieren — in der Regel werden Ihnen auch Fehlermeldungen angezeigt. Diese sind normalerweise nicht allzu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax zwar korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben. Das bedeutet, dass das Programm erfolgreich ausgeführt wird, aber falsche Ergebnisse liefert. Diese sind oft schwieriger zu beheben als Syntaxfehler, da es in der Regel keine Fehlermeldung gibt, die Sie auf die Fehlerquelle hinweist.

Okay, so einfach ist es dann doch nicht — es gibt noch einige andere Unterscheidungen, wenn Sie tiefer einsteigen. Aber die obigen Klassifikationen reichen in dieser frühen Phase Ihrer Karriere aus. Wir werden uns im Folgenden mit beiden Fehlerarten befassen.

## Ein fehlerhaftes Beispiel

Um zu beginnen, kehren wir zu unserem Zahlerratenspiel zurück — nur dass wir diesmal eine Version untersuchen, die einige absichtlich eingeführte Fehler enthält. Gehen Sie zu GitHub und erstellen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (sehen Sie sich das [live hier an](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie zu Beginn die lokale Kopie in Ihrem bevorzugten Texteditor und in Ihrem Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden feststellen, dass es nicht funktioniert, wenn Sie die Schaltfläche "Versuch abschicken" drücken!

> [!NOTE]
> Möglicherweise haben Sie auch Ihre eigene Version des Spielbeispiels, das nicht funktioniert und das Sie reparieren möchten! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die hier vermittelten Techniken lernen. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu reparieren.

An diesem Punkt werfen wir einen Blick in die Entwicklerkonsole, um zu sehen, ob sie Syntaxfehler meldet, und versuchen dann, diese zu beheben. Sie lernen weiter unten, wie das geht.

## Behebung von Syntaxfehlern

Früher im Kurs haben wir Sie dazu gebracht, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben (wenn Sie sich nicht erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorangehenden Link, um herauszufinden, wie). Was noch nützlicher ist, ist, dass Ihnen die Konsole Fehlermeldungen anzeigt, wann immer ein Syntaxfehler im JavaScript besteht, das in die JavaScript-Engine des Browsers eingegeben wird. Jetzt gehen wir auf die Suche.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung in etwa folgender Form sehen: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Mehr erfahren] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung lautet: "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich nicht sicher sind, wie die richtige Schreibweise eines Syntaxelements lautet, ist es oft gut, nach der Funktion auf MDN zu suchen. Der beste Weg, dies derzeit zu tun, besteht darin, mit Ihrer bevorzugten Suchmaschine nach "mdn _name-of-feature_" zu suchen. Hier ist eine Abkürzung, um Ihnen in diesem Fall etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Wenn wir die Seite betrachten, scheint der Fehler darin zu bestehen, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript zwischen Groß- und Kleinschreibung unterscheidet, daher führt jeder kleine Unterschied in der Schreibweise oder Groß-/Kleinschreibung zu einem Fehler. Das Ändern von `addeventListener` zu `addEventListener` sollte dies beheben. Machen Sie das jetzt.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function).

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie jetzt versuchen, einen Tipp einzugeben und die Schaltfläche "Versuch abschicken" zu drücken, sehen Sie einen weiteren Fehler! ![Screenshot des gleichen Demos "Number guessing game". Diesmal ist ein anderer Fehler in der Konsole sichtbar, der lautet: "X TypeError: lowOrHi is null".](variable-is-null.png)
3. Diesmal lautet der gemeldete Fehler:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser können Sie hier eine andere Meldung sehen. Die obige Meldung ist das, was Ihnen Firefox zeigt, aber Chrome zeigt Ihnen zum Beispiel Folgendes:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist derselbe Fehler, aber unterschiedliche Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort auf, als die Seite geladen wurde, weil dieser Fehler innerhalb einer Funktion (innerhalb des Blockes `checkGuess() { }`) auftrat. Wie Sie in unserem späteren [Funktionen-Artikel](/de/docs/Learn_web_development/Core/Scripting/Functions) ausführlicher lernen werden, wird Code innerhalb von Funktionen in einem separaten Bereich als Code außerhalb von Funktionen ausgeführt. In diesem Fall wurde der Code nicht ausgeführt und der Fehler wurde nicht ausgelöst, bis die Funktion `checkGuess()` durch Zeile 87 ausgeführt wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 79. Werfen Sie einen Blick auf Zeile 79, und Sie werden den folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die Eigenschaft `textContent` der Variablen `lowOrHi` auf eine Textzeichenkette zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es soll. Sehen wir uns an, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz, die Sie finden, ist in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable mit einem Verweis auf ein Element im HTML-Dokument zu füllen. Lassen Sie uns sehen, was die Variable nach dem Ausführen dieser Zeile enthält. Fügen Sie folgenden Code in Zeile 54 hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code druckt den Wert von `lowOrHi` in der Konsole aus, nachdem wir versucht haben, ihn in Zeile 51 zu setzen. Weitere Informationen finden Sie unter [`console.log()`](/de/docs/Web/API/Console/log_static).

7. Speichern und aktualisieren Sie die Seite, und Sie sollten nun das `console.log()`-Ergebnis in Ihrer Konsole sehen. ![Screenshot des gleichen Demos. Eine Log-Anweisung ist in der Konsole sichtbar, die einfach "null" liest.](console-log-output.png) Sicher genug, der Wert von `lowOrHi` ist an diesem Punkt `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi is null` überein. Es gibt also definitiv ein Problem mit Zeile 51. Der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, funktioniert also nicht.

8. Lassen Sie uns überlegen, was das Problem sein könnte. Zeile 51 verwendet eine Methode [`document.querySelector()`](/de/docs/Web/API/Document/querySelector), um einen Verweis auf ein Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Schauen wir weiter oben in unserer Datei nach, wir können den betreffenden Absatz finden:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir brauchen also einen Klassenselektor hier, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in der Methode `querySelector()` in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in Zeile 51 in `.lowOrHi` zu ändern.
10. Speichern und aktualisieren Sie die Seite erneut, und Ihre `console.log()`-Anweisung sollte das gewünschte `<p>`-Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()`-Zeile jetzt löschen oder sie behalten, um später darauf zu verweisen — Ihre Wahl.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type).

### Syntaxfehler Runde drei

1. Wenn Sie das Spiel jetzt noch einmal versuchen, sollten Sie mehr Erfolg haben — das Spiel sollte einwandfrei laufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder alle Versuche aufgebraucht haben.
2. An diesem Punkt schlägt das Spiel erneut fehl, und es wird derselbe Fehler ausgeworfen, den wir am Anfang bekamen — "TypeError: resetButton.addeventListener is not a function"! Allerdings wird diesmal angegeben, dass er aus Zeile 95 stammt.
3. Betrachtet man Zeile 95, ist es einfach zu sehen, dass wir hier denselben Fehler gemacht haben. Wir müssen hier einfach `addeventListener` in `addEventListener` ändern. Machen Sie das jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei ablaufen, jedoch werden Sie nach ein paar Durchläufen zweifellos feststellen, dass das Spiel immer 1 als die "zufällige" Zahl auswählt, die Sie erraten müssen. Definitiv nicht so, wie wir das Spiel ablaufen lassen wollen!

Es gibt definitiv ein Problem in der Spiel-Logik irgendwo — das Spiel gibt keinen Fehler zurück; es läuft einfach nicht richtig.

1. Suchen Sie nach der Variablen `randomNumber` und den Zeilen, in denen die Zufallszahl zuerst festgelegt wird. Die Instanz, die die zufällig zu erratende Zahl zu Beginn des Spiels speichert, sollte sich ungefähr in Zeile 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und die, die die Zufallszahl vor jedem folgenden Spiel generiert, sich in etwa in Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns erneut unserem Freund `console.log()` zu — fügen Sie die folgende Zeile direkt unter jeder der beiden obigen Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren, dann spielen Sie ein paar Spiele — Sie sehen, dass `randomNumber` an jedem Punkt, an dem es in die Konsole geloggt wird, gleich 1 ist.

### Die Logik durchgehen

Um dies zu beheben, überlegen wir, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, welches eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z.B. 0.5675493843.

```js
Math.random();
```

Als nächstes übergeben wir das Ergebnis des Aufrufs von `Math.random()` an [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir addieren dann 1 zu diesem Ergebnis:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 ergibt immer 0, daher wird durch das Addieren von 1 immer 1 zurückgegeben. Wir müssen die Zufallszahl mit 100 multiplizieren, bevor wir sie abrunden. Folgendes würde uns eine Zufallszahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher wollen wir 1 addieren, um eine Zufallszahl zwischen 1 und 100 zu erhalten:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, speicheren Sie und aktualisieren Sie — das Spiel sollte jetzt wie beabsichtigt ablaufen!

## Weitere häufige Fehler

Es gibt weitere häufige Fehler, auf die Sie in Ihrem Code stoßen werden. Dieser Abschnitt hebt die meisten von ihnen hervor.

### Das Programm sagt immer, Sie hätten gewonnen, unabhängig von dem eingegebenen Tipp

Dies könnte ein weiteres Symptom der Vermischung von Zuweisungs- und Strenggleichheit-Operatoren sein. Wenn wir zum Beispiel diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, was dazu führen würde, dass das Programm meldet, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser Fall ist ziemlich einfach — er bedeutet im Allgemeinen, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Einzelheiten zu diesem Fehler finden Sie auf unserer Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list).

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein inkorrekt geformtes JavaScript-Objekt, aber in diesem Fall haben wir es geschafft, ihn auszulösen, indem wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

geändert haben. Dies hat dazu geführt, dass der Browser glaubt, dass wir versuchen, den Inhalt der Funktion als Argument in die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist simpel — es bedeutet im Allgemeinen, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder einer bedingten Struktur ausgelassen haben. Wir bekamen diesen Fehler, indem wir eine der schließenden geschweiften Klammern nahe dem Ende der Funktion `checkGuess()` gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie das Öffnungs- oder Schließungszeichen eines Zeichenkettenwertes weggelassen haben. Im ersten Fehler oben würde _string_ durch das unerwartete Zeichen/Zeichenfolge ersetzt werden, das der Browser anstelle eines Anführungszeichens am Anfang einer Zeichenkette gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenkette nicht mit einem Anführungszeichen beendet wurde.

Für alle diese Fehler denken Sie daran, wie wir die Beispiele, die wir in der Schritt-für-Schritt-Anleitung angesehen haben, behandelt haben. Wenn ein Fehler auftritt, schauen Sie sich die angegebene Zeilennummer an, gehen Sie zu dieser Zeile und sehen Sie, ob Sie erkennen können, was falsch ist. Bedenken Sie, dass der Fehler nicht zwangsläufig in dieser Zeile sein muss und auch, dass der Fehler nicht durch genau dasselbe Problem verursacht wird, das wir oben genannt haben!

> [!NOTE]
> Weitere Einzelheiten zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Da haben wir sie also, die Grundlagen der Fehlersuche in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird dies Ihnen einige Stunden Schlaf ersparen und es Ihnen ermöglichen, ein bisschen schneller voranzukommen, wenn die Dinge nicht richtig laufen, besonders in den frühen Phasen Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlerarten, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe das [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie auf Fehler in Ihrem Code stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe bekommen! Fragen Sie nach Hilfe in den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
