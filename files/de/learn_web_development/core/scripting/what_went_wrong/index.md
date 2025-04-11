---
title: Was ist schiefgelaufen? Fehlerbehebung in JavaScript
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie das Spiel "Errate die Zahl" im vorherigen Artikel erstellt haben, haben Sie vielleicht festgestellt, dass es nicht funktioniert hat. Keine Sorge — dieser Artikel soll Ihnen helfen, Lösungen für solche Probleme zu finden, indem er Ihnen einige Tipps gibt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

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
          <li>Verstehen der Fehlerarten, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zur Fehlersuche.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der Entwickler-Tools im Browser.</li>
          <li>Grundlagenwissen über JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Fehlerarten

Im Allgemeinen gibt es zwei Hauptfehlerarten, auf die Sie stoßen werden, wenn Sie etwas im Code falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm überhaupt nicht ausgeführt wird oder mitten in der Ausführung stoppt — in der Regel erhält man auch einige Fehlermeldungen. Diese sind normalerweise nicht zu schwer zu beheben, solange Sie mit den richtigen Werkzeugen vertraut sind und die Fehlermeldungen verstehen!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax tatsächlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben. Das bedeutet, dass das Programm erfolgreich ausgeführt wird, aber falsche Ergebnisse liefert. Diese sind oft schwerer zu beheben als Syntaxfehler, da es normalerweise keine Fehlermeldung gibt, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach — es gibt einige andere Unterscheidungen, wenn Sie tiefer in die Materie eintauchen. Aber die obigen Klassifizierungen reichen zu diesem frühen Zeitpunkt in Ihrer Karriere aus. Wir werden uns diese beiden Typen im Folgenden genauer ansehen.

## Ein fehlerhaftes Beispiel

Um loszulegen, kehren wir zu unserem Zahlenspiel zurück — außer dass wir diesmal eine Version untersuchen, die einige absichtliche Fehler enthält. Gehen Sie zu GitHub und erstellen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (siehe es [hier live ausführen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und Browser.
2. Versuchen Sie das Spiel zu spielen — Sie werden feststellen, dass es nicht funktioniert, wenn Sie die Schaltfläche "Tipp abschicken" drücken!

> [!NOTE]
> Sie könnten auch Ihre eigene Version des Spiels haben, die nicht funktioniert und die Sie reparieren möchten! Dennoch möchten wir, dass Sie den Artikel mit unserer Version durchgehen, damit Sie die hier vermittelten Techniken lernen können. Danach können Sie versuchen, Ihr eigenes Beispiel zu reparieren.

An diesem Punkt schauen wir uns die Entwicklerkonsole an, um zu sehen, ob sie Syntaxfehler meldet, und dann versuchen wir, sie zu beheben. Sie lernen unten, wie das geht.

## Beheben von Syntaxfehlern

Früher im Kurs haben wir Sie dazu gebracht, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwickler-Tools](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzutippen (wenn Sie sich nicht mehr erinnern, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem Link, um herauszufinden, wie). Was noch nützlicher ist, ist, dass die Konsole Ihnen Fehlermeldungen gibt, wenn ein Syntaxfehler im JavaScript vorliegt, das an die JavaScript-Engine des Browsers übergeben wird. Lassen Sie uns jetzt danach suchen.

1. Wechseln Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung wie die folgende sehen: !["Number guessing game"-Demoseite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung ist:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, sagt uns, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function". Das bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung tatsächlich, dass wir etwas falsch geschrieben haben. Wenn Sie sich der korrekten Schreibweise eines Syntaxelements nicht sicher sind, ist es oft gut, das Feature auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, ist, mit Ihrem bevorzugten Suchanbieter nach "mdn _name-of-feature_" zu suchen. Hier ist eine Abkürzung, um Ihnen in diesem Fall etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Beim Betrachten dieser Seite scheint der Fehler zu sein, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript case-sensitiv ist, so dass bereits ein kleiner Unterschied in der Schreibweise oder Groß-/Kleinschreibung zu einem Fehler führt. Das Ändern von `addeventListener` zu `addEventListener` sollte dies beheben. Tun Sie das jetzt.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function).

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie jetzt versuchen, einen Tipp abzugeben und die Schaltfläche Tipp abschicken zu drücken, sehen Sie einen weiteren Fehler! ![Screenshot derselben "Number guessing game"-Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der lautet: "X TypeError: lowOrHi is null".](variable-is-null.png)
3. Diesmal wird der folgende Fehler gemeldet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser sehen Sie hier möglicherweise eine andere Meldung. Die obige Meldung zeigt, was Firefox Ihnen anzeigt, wohingegen Chrome Ihnen folgendes zeigt:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es handelt sich um denselben Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort beim Laden der Seite auf, weil dieser Fehler innerhalb einer Funktion (innerhalb des `checkGuess() { }` Blocks) auftrat. Wie Sie ausführlicher in unserem späteren [Artikel zu Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) lernen werden, wird Code innerhalb von Funktionen in einem separaten Gültigkeitsbereich als Code außerhalb von Funktionen ausgeführt. In diesem Fall wurde der Code nicht ausgeführt und der Fehler nicht geworfen, bis die `checkGuess()`-Funktion durch Zeile 87 ausgeführt wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 79. Schauen Sie sich Zeile 79 an, und Sie werden den folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der Variable `lowOrHi` auf eine Textzeichenkette festzulegen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es sollte. Finden wir heraus, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz befindet sich in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable mit einem Verweis auf ein Element im HTML-Dokument zu füllen. Schauen wir uns an, was die Variable nach dieser Zeile enthält. Fügen Sie folgende Zeile in Zeile 54 ein:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in der Konsole ausgeben, nachdem wir ihn in Zeile 51 gesetzt haben. Weitere Informationen finden Sie in der Dokumentation zu [`console.log()`](/de/docs/Web/API/console/log_static).

7. Speichern und aktualisieren Sie die Seite, und Sie sollten jetzt das `console.log()` Ergebnis in Ihrer Konsole sehen. ![Screenshot derselben Demo. Eine Protokollanweisung ist in der Konsole sichtbar, die einfach "null" lautet.](console-log-output.png) Sicher genug, `lowOrHi`'s Wert ist an diesem Punkt `null`, und das stimmt mit der Firefox-Fehlermeldung `lowOrHi is null`. Also gibt es definitiv ein Problem mit Zeile 51. Der [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) Wert bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, geht also schief.

8. Überlegen wir, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector) Methode, um einen Verweis auf ein Element zu erhalten, indem es mit einem CSS-Selektor ausgewählt wird. Wenn wir weiter oben in unserer Datei nachsehen, finden wir den fraglichen Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen also einen Klassenselektor hier, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in die `querySelector()` Methode in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie `lowOrHi` in `.lowOrHi` in Zeile 51 zu ändern.
10. Versuchen Sie es zu speichern und aktualisieren, und Ihre `console.log()` Anweisung sollte nun das `<p>` Element zurückgeben, das wir wollen. Puh! Ein weiterer Fehler behoben! Sie können Ihre `console.log()` Zeile jetzt löschen oder zum späteren Nachschlagen aufbewahren — Ihre Wahl.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer Referenzseite [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type).

### Syntaxfehler Runde drei

1. Wenn Sie das Spiel jetzt noch einmal versuchen zu spielen, sollten Sie mehr Erfolg haben — das Spiel sollte vollständig funktionieren, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl raten oder indem Ihnen die Tipps ausgehen.
2. An dieser Stelle scheitert das Spiel wieder, und derselbe Fehler, den wir am Anfang hatten — "TypeError: resetButton.addeventListener is not a function"! Dieses Mal wird er jedoch als aus Zeile 95 kommend aufgelistet.
3. Wenn wir uns Zeile 95 ansehen, ist es leicht zu sehen, dass wir hier denselben Fehler gemacht haben. Wir müssen nur `addeventListener` wieder in `addEventListener` ändern. Tun Sie das jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel reibungslos durchlaufen, jedoch werden Sie nach ein paar Spielen zweifellos feststellen, dass das Spiel immer 1 als die "zufällige" Zahl wählt, die Sie erraten müssen. Definitiv nicht ganz so, wie wir wollen, dass das Spiel abläuft!

Es gibt definitiv ein Problem in der Spieldokumentation irgendwo — das Spiel gibt zwar keinen Fehler zurück; es funktioniert einfach nicht richtig.

1. Suchen Sie die `randomNumber` Variable und die Zeilen, in denen die Zufallszahl zunächst festgelegt wird. Die Instanz, die die Zufallszahl speichert, die wir am Anfang des Spiels erraten müssen, sollte sich um Zeile 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die Zufallszahl vor jedem weiteren Spiel generiert, ist um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu überprüfen, ob diese Zeilen tatsächlich das Problem sind, wenden wir uns wieder an unseren Freund `console.log()` — fügen Sie die folgende Zeile direkt unter den beiden obigen Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren Sie dann, und spielen Sie ein paar Spiele — Sie werden sehen, dass `randomNumber` zu jedem Zeitpunkt, an dem es in der Konsole protokolliert wird, gleich 1 ist.

### Durch die Logik arbeiten

Um das zu beheben, überlegen wir, wie diese Zeile funktioniert. Zunächst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 erzeugt, z. B. 0.5675493843.

```js
Math.random();
```

Als nächstes geben wir das Ergebnis des Aufrufs von `Math.random()` durch [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), das die übergebene Zahl auf die nächste ganze Zahl abrundet. Dann fügen wir diesem Ergebnis 1 hinzu:

```js
Math.floor(Math.random()) + 1;
```

Das Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 nach unten wird immer 0 zurückgeben, daher wird das Hinzufügen von 1 dazu immer 1 zurückgeben. Wir müssen die Zufallszahl mit 100 multiplizieren, bevor wir es abrunden. Das Folgende würde uns eine Zufallszahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Daher wollen wir 1 hinzufügen, um uns eine Zufallszahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, speichern Sie dann und aktualisieren Sie — das Spiel sollte jetzt so abgespielt werden, wie wir es beabsichtigen!

## Andere häufige Fehler

Es gibt andere häufige Fehler, auf die Sie in Ihrem Code stoßen können. Dieser Abschnitt hebt die meisten davon hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von dem Tipp, den Sie eingeben

Dies könnte ein weiteres Symptom des Verwechselns von Zuweisungs- und Strikte-Gleichheits-Operatoren sein. Zum Beispiel, wenn wir diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben und das Programm veranlassen, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dieser ist ziemlich einfach — er bedeutet normalerweise, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Weitere Details zu diesem Fehler finden Sie auf unserer Referenzseite [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list).

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch formatiertes JavaScript-Objekt, aber in diesem Fall ist er aufgetreten, als wir

```js
function checkGuess() {
```

in

```js
function checkGuess( {
```

Änderten. Dies hat den Browser veranlasst zu denken, dass wir versuchen, den Inhalt der Funktion als Argument an die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist einfach — es bedeutet normalerweise, dass Sie eine Ihrer geschweiften Klammern von einer Funktion oder einer Bedingungsstruktur vergessen haben. Wir hatten diesen Fehler, als wir eine der schließenden geschweiften Klammern am Ende der `checkGuess()`-Funktion gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten in der Regel, dass Sie das Anfangs- oder Endzeichen eines Zeichenfolgenwerts weggelassen haben. Im ersten obigen Fehler würde _string_ durch das unerwartete Zeichen/die unerwarteten Zeichen ersetzt, die der Browser anstelle eines Anfangs-Zitatzeichens für eine Zeichenfolge gefunden hat. Der zweite Fehler bedeutet, dass die Zeichenkette nicht mit einem Anführungszeichen beendet wurde.

Für all diese Fehler denken Sie daran, wie wir die Beispiele angegangen sind, die wir im Rundgang betrachtet haben. Wenn ein Fehler auftritt, schauen Sie sich die Zeilennummer an, die Ihnen gegeben wurde, gehen Sie zu dieser Zeile und sehen Sie, ob Sie den Fehler erkennen können. Beachten Sie, dass der Fehler nicht unbedingt in dieser Zeile sein muss und dass der Fehler möglicherweise nicht durch genau dasselbe Problem verursacht wird, das wir oben geschildert haben!

> [!NOTE]
> Weitere Details zu diesen Fehlern finden Sie auf unseren Referenzseiten [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL).

## Zusammenfassung

Da haben wir sie, die Grundlagen zur Fehlererkennung in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein, herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird Ihnen das ein paar Stunden Schlaf ersparen und es Ihnen ermöglichen, ein bisschen schneller voranzukommen, wenn etwas nicht richtig läuft, besonders in den Anfangsstadien Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Arten von Fehlern, die hier nicht aufgelistet sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — siehe die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors).
- Wenn Sie beim Lesen dieses Artikels auf Fehler in Ihrem Code stoßen, die Sie nicht beheben können, können Sie Hilfe bekommen! Bitten Sie um Hilfe auf den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre auch hilfreich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
