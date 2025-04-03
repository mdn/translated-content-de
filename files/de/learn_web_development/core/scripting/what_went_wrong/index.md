---
title: Was ist schiefgelaufen? JavaScript-Fehlerbehebung
short-title: Troubleshooting
slug: Learn_web_development/Core/Scripting/What_went_wrong
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}

Als Sie im vorherigen Artikel das Spiel "Errate die Zahl" aufgebaut haben, haben Sie möglicherweise festgestellt, dass es nicht funktionierte. Keine Sorge — dieser Artikel soll Sie davor bewahren, sich wegen solcher Probleme die Haare zu raufen, indem er Ihnen einige Tipps zur Verfügung stellt, wie Sie Fehler in JavaScript-Programmen finden und beheben können.

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
          <li>Verstehen der Arten von Fehlern, die in JavaScript auftreten können.</li>
          <li>Verwendung von <code>console.log()</code> zum Debuggen von Fehlern.</li>
          <li>Grundlegende Erfahrung mit der Verwendung der JavaScript-Konsole der Entwicklerwerkzeuge im Browser.</li>
          <li>Grundlegende Vertrautheit mit JavaScript-Fehlermeldungen und deren Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Arten von Fehlern

Im Allgemeinen gibt es zwei Hauptfehlerarten, auf die Sie stoßen werden, wenn Sie etwas im Code falsch machen:

- **Syntaxfehler**: Dies sind Rechtschreibfehler in Ihrem Code, die dazu führen, dass das Programm entweder gar nicht läuft oder mittendrin stoppt — normalerweise erhalten Sie auch einige Fehlermeldungen. Diese sind in der Regel nicht allzu schwer zu beheben, sofern Sie die richtigen Werkzeuge kennen und wissen, was die Fehlermeldungen bedeuten!
- **Logikfehler**: Dies sind Fehler, bei denen die Syntax eigentlich korrekt ist, der Code jedoch nicht das tut, was Sie beabsichtigt haben. Das bedeutet, das Programm läuft erfolgreich, liefert jedoch falsche Ergebnisse. Diese sind oft schwerer zu beheben als Syntaxfehler, da in der Regel keine Fehlermeldung vorhanden ist, die Sie zur Fehlerquelle führt.

Okay, es ist nicht ganz _so_ einfach — es gibt einige weitere Unterscheidungen, wenn Sie tiefer eintauchen. Aber die obigen Klassifikationen reichen in diesem frühen Stadium Ihrer Karriere aus. Wir werden uns beide dieser Fehlerarten im Folgenden ansehen.

## Ein fehlerhaftes Beispiel

Um loszulegen, kehren wir zu unserem Zahleneingabesystem zurück — außer dass wir diesmal eine Version mit einigen absichtlich eingefügten Fehlern erkunden werden. Gehen Sie zu GitHub und machen Sie sich eine lokale Kopie von [number-game-errors.html](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) (sehen Sie es [hier live laufen](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html)).

1. Öffnen Sie die lokale Kopie in Ihrem bevorzugten Texteditor und Browser.
2. Versuchen Sie, das Spiel zu spielen — Sie werden feststellen, dass es nicht funktioniert, wenn Sie die Schaltfläche "Vermutung absenden" drücken!

> [!NOTE]
> Möglicherweise haben Sie Ihre eigene Version des Spielbeispiels, die nicht funktioniert und die Sie reparieren möchten! Wir möchten dennoch, dass Sie den Artikel mit unserer Version durcharbeiten, damit Sie die hier vermittelten Techniken lernen können. Dann können Sie zurückgehen und versuchen, Ihr Beispiel zu reparieren.

In diesem Moment, lassen Sie uns die Entwicklerkonsole konsultieren, um zu sehen, ob sie Syntaxfehler meldet, und versuchen diese dann zu beheben. Sie lernen unten, wie es geht.

## Syntaxfehler beheben

Früher im Kurs haben wir Sie dazu gebracht, einige einfache JavaScript-Befehle in die [JavaScript-Konsole der Entwicklerwerkzeuge](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) einzugeben (wenn Sie sich nicht erinnern können, wie Sie diese in Ihrem Browser öffnen, folgen Sie dem vorherigen Link, um herauszufinden, wie). Was noch nützlicher ist, ist, dass die Konsole Ihnen Fehlermeldungen gibt, sobald ein Syntaxfehler im JavaScript vorliegt, das der JavaScript-Engine des Browsers zugeführt wird. Jetzt machen wir uns auf die Jagd.

1. Gehen Sie zu dem Tab, in dem Sie `number-game-errors.html` geöffnet haben, und öffnen Sie Ihre JavaScript-Konsole. Sie sollten eine Fehlermeldung wie die folgende sehen: !["Number guessing game" Demo-Seite in Firefox. Ein Fehler ist in der JavaScript-Konsole sichtbar: "X TypeError: guessSubmit.addeventListener is not a function [Learn More] (number-game-errors.html:87:19)".](not-a-function.png)
2. Die erste Zeile der Fehlermeldung lautet:

   ```plain
   Uncaught TypeError: guessSubmit.addeventListener is not a function
   number-game-errors.html:87:19
   ```

   - Der erste Teil, `Uncaught TypeError: guessSubmit.addeventListener is not a function`, sagt uns etwas darüber, was schiefgelaufen ist.
   - Der zweite Teil, `number-game-errors.html:87:19`, gibt an, wo im Code der Fehler aufgetreten ist: Zeile 87, Zeichen 19 der Datei "number-game-errors.html".

3. Wenn wir uns Zeile 87 in unserem Code-Editor ansehen, finden wir diese Zeile:

   ```js
   guessSubmit.addeventListener("click", checkGuess);
   ```

4. Die Fehlermeldung sagt "guessSubmit.addeventListener is not a function", was bedeutet, dass die Funktion, die wir aufrufen, vom JavaScript-Interpreter nicht erkannt wird. Oft bedeutet diese Fehlermeldung, dass wir etwas falsch buchstabiert haben. Wenn Sie sich nicht sicher sind, wie ein Syntaxelement korrekt geschrieben wird, lohnt es sich oft, das Feature auf MDN nachzuschlagen. Der beste Weg, dies derzeit zu tun, besteht darin, mit Ihrer bevorzugten Suchmaschine nach "mdn _name-of-feature_" zu suchen. Hier ist eine Abkürzung, um Ihnen etwas Zeit zu sparen: [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener).
5. Beim Blick auf diese Seite scheint der Fehler darin zu bestehen, dass wir den Funktionsnamen falsch geschrieben haben! Denken Sie daran, dass JavaScript case-sensitiv ist, sodass jeder kleine Unterschied in der Schreibweise oder der Groß-/Kleinschreibung einen Fehler verursacht. Das Ändern von `addeventListener` in `addEventListener` sollte dies beheben. Machen Sie das jetzt.

> [!NOTE]
> Siehe unsere [TypeError: "x" is not a function](/de/docs/Web/JavaScript/Reference/Errors/Not_a_function) Referenzseite für weitere Details zu diesem Fehler.

### Syntaxfehler Runde zwei

1. Speichern Sie Ihre Seite und aktualisieren Sie, und Sie sollten sehen, dass der Fehler verschwunden ist.
2. Wenn Sie nun versuchen, eine Vermutung einzugeben und die Schaltfläche "Vermutung absenden" drücken, wird ein weiterer Fehler angezeigt! ![Screenshot derselben "Number guessing game" Demo. Diesmal ist ein anderer Fehler in der Konsole sichtbar, der "X TypeError: lowOrHi is null" lautet.](variable-is-null.png)
3. Der diesmal gemeldete Fehler lautet:

   ```plain
   Uncaught TypeError: can't access property "textContent", lowOrHi is null
   ```

   Abhängig vom verwendeten Browser sehen Sie möglicherweise eine andere Nachricht hier. Die oben stehende Meldung wird Ihnen Firefox zeigen, aber Chrome zum Beispiel wird Ihnen diese zeigen:

   ```plain
   Uncaught TypeError: Cannot set properties of null (setting 'textContent')
   ```

   Es ist der gleiche Fehler, aber verschiedene Browser beschreiben ihn auf unterschiedliche Weise.

   > [!NOTE]
   > Dieser Fehler trat nicht sofort auf, als die Seite geladen wurde, weil dieser Fehler innerhalb einer Funktion auftrat (innerhalb des `checkGuess() { }` Blocks). Wie Sie später in unserem [Artikel zu Funktionen](/de/docs/Learn_web_development/Core/Scripting/Functions) detaillierter erfahren werden, läuft der Code innerhalb von Funktionen in einem anderen Umfang als der Code außerhalb von Funktionen. In diesem Fall wurde der Code nicht ausgeführt und der Fehler nicht geworfen, bis die `checkGuess()`-Funktion durch Zeile 87 ausgeführt wurde.

4. Die in der Fehlermeldung angegebene Zeilennummer ist 79. Sehen Sie sich Zeile 79 an, und Sie werden den folgenden Code sehen:

   ```js
   lowOrHi.textContent = "Last guess was too high!";
   ```

5. Diese Zeile versucht, die `textContent`-Eigenschaft der `lowOrHi`-Variable auf eine Textzeichenfolge zu setzen, aber es funktioniert nicht, weil `lowOrHi` nicht das enthält, was es soll. Lassen Sie uns sehen, warum das so ist — versuchen Sie, nach anderen Instanzen von `lowOrHi` im Code zu suchen. Die früheste Instanz finden Sie in Zeile 51:

   ```js
   const lowOrHi = document.querySelector("lowOrHi");
   ```

6. An diesem Punkt versuchen wir, die Variable auf eine Referenz eines Elements im HTML-Dokument zu setzen. Lassen Sie uns sehen, was die Variable nach dieser Zeile enthält. Fügen Sie die folgende Codezeile in Zeile 54 hinzu:

   ```js
   console.log(lowOrHi);
   ```

   Dieser Code wird den Wert von `lowOrHi` in die Konsole ausgeben, nachdem wir versucht haben, ihn in Zeile 51 zu setzen. Siehe [`console.log()`](/de/docs/Web/API/console/log_static) für weitere Informationen.

7. Speichern und aktualisieren, und Sie sollten nun das `console.log()`-Ergebnis in Ihrer Konsole sehen. ![Screenshot derselben Demo. Eine Log-Stellungnahme ist in der Konsole sichtbar, die einfach "null" lautet.](console-log-output.png) In der Tat ist der Wert von `lowOrHi` zu diesem Zeitpunkt `null`, und dies stimmt mit der Firefox-Fehlermeldung `lowOrHi is null` überein. Es gibt also definitiv ein Problem mit Zeile 51. Der Wert [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) bedeutet "nichts" oder "kein Wert". Unser Code, um `lowOrHi` auf ein Element zu setzen, läuft also schief.

8. Überlegen wir, was das Problem sein könnte. Zeile 51 verwendet eine [`document.querySelector()`](/de/docs/Web/API/Document/querySelector)-Methode, um eine Referenz auf ein Element durch Auswahl mit einem CSS-Selektor zu erhalten. Wenn wir weiter oben in unserer Datei nachsehen, finden wir den betreffenden Absatz:

   ```html
   <p class="lowOrHi"></p>
   ```

9. Wir benötigen hier also einen Klassen-Selektor, der mit einem Punkt (`.`) beginnt, aber der Selektor, der in die Methode `querySelector()` in Zeile 51 übergeben wird, hat keinen Punkt. Das könnte das Problem sein! Versuchen Sie, `lowOrHi` in Zeile 51 in `.lowOrHi` zu ändern.
10. Versuchen Sie, erneut zu speichern und zu aktualisieren, und Ihre `console.log()`-Stellungnahme sollte jetzt das gewünschte `<p>`-Element zurückgeben. Puh! Ein weiterer Fehler behoben! Sie können nun Ihre `console.log()`-Zeile löschen oder sie zur späteren Referenz behalten — ganz wie Sie möchten.

> [!NOTE]
> Siehe unsere [TypeError: "x" is (not) "y"](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_type) Referenzseite für weitere Details zu diesem Fehler.

### Syntaxfehler Runde drei

1. Wenn Sie das Spiel jetzt erneut durchspielen, sollten Sie mehr Erfolg haben — das Spiel sollte absolut einwandfrei laufen, bis Sie das Spiel beenden, entweder indem Sie die richtige Zahl erraten oder indem Sie keine Vermutungen mehr haben.
2. An diesem Punkt schlägt das Spiel wieder fehl, und der gleiche Fehler wird angezeigt, den wir am Anfang hatten — "TypeError: resetButton.addeventListener is not a function"! Diesmal wird es jedoch in Zeile 95 aufgeführt.
3. Wenn wir uns Zeile 95 ansehen, ist es leicht zu sehen, dass wir hier denselben Fehler gemacht haben. Wir müssen hier einfach `addeventListener` in `addEventListener` ändern. Machen Sie das jetzt.

## Ein Logikfehler

An diesem Punkt sollte das Spiel einwandfrei laufen. Wenn Sie jedoch einige Male spielen, werden Sie zweifellos bemerken, dass das Spiel immer 1 als "zufällige" Zahl auswählt, die Sie erraten müssen. Das ist definitiv nicht so, wie wir das Spiel ablaufen lassen wollen!

Es gibt definitiv ein Problem in der Spiellogik irgendwo — das Spiel gibt keinen Fehler aus; es spielt einfach nicht richtig.

1. Suchen Sie die Variable `randomNumber` und die Zeilen, in denen die zufällige Zahl zuerst gesetzt wird. Die Instanz, die die zu erratende Zufallszahl am Anfang des Spiels speichert, sollte sich ungefähr in Zeile 47 befinden:

   ```js
   let randomNumber = Math.floor(Math.random()) + 1;
   ```

2. Und diejenige, die die zufällige Zahl vor jedem folgenden Spiel generiert, befindet sich um Zeile 114:

   ```js
   randomNumber = Math.floor(Math.random()) + 1;
   ```

3. Um zu prüfen, ob diese Zeilen tatsächlich das Problem sind, lassen Sie uns wieder unseren Freund `console.log()` zu Hilfe nehmen — fügen Sie die folgende Zeile direkt unterhalb jeder der beiden obenstehenden Zeilen ein:

   ```js
   console.log(randomNumber);
   ```

4. Speichern und aktualisieren, dann spielen Sie einige Spiele — Sie werden sehen, dass `randomNumber` zu jedem Zeitpunkt, an dem es in die Konsole geloggt wird, gleich 1 ist.

### Durch die Logik arbeiten

Um dies zu beheben, lassen Sie uns überlegen, wie diese Zeile funktioniert. Zuerst rufen wir [`Math.random()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random) auf, das eine zufällige Dezimalzahl zwischen 0 und 1 generiert, z. B. 0.5675493843.

```js
Math.random();
```

Als nächstes geben wir das Ergebnis des Aufrufs von `Math.random()` an [`Math.floor()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) weiter, das die übergebene Zahl auf die nächste ganze Zahl abrundet. Wir fügen dann 1 zu diesem Ergebnis hinzu:

```js
Math.floor(Math.random()) + 1;
```

Ein derartiges Abrunden einer zufälligen Dezimalzahl zwischen 0 und 1 wird immer 0 zurückgeben, sodass das Hinzufügen von 1 immer 1 ergibt. Wir müssen die Zufallszahl mit 100 multiplizieren, bevor wir sie abrunden. Das Folgende würde uns eine zufällige Zahl zwischen 0 und 99 geben:

```js
Math.floor(Math.random() * 100);
```

Deshalb möchten wir 1 hinzufügen, um uns eine zufällige Zahl zwischen 1 und 100 zu geben:

```js
Math.floor(Math.random() * 100) + 1;
```

Versuchen Sie, beide Zeilen so zu aktualisieren, dann speichern und aktualisieren — das Spiel sollte jetzt wie vorgesehen ablaufen!

## Andere häufige Fehler

Es gibt andere häufige Fehler, die in Ihrem Code auftreten können. Dieser Abschnitt hebt die meisten davon hervor.

### Das Programm sagt immer, dass Sie gewonnen haben, unabhängig von der eingegebenen Vermutung

Dies könnte ein weiteres Symptom für das Verwechseln der Zuweisungs- und der strikten Gleichheitsoperatoren sein. Wenn wir zum Beispiel diese Zeile innerhalb von `checkGuess()` ändern würden:

```js
if (userGuess === randomNumber) {
```

zu

```js
if (userGuess = randomNumber) {
```

würde der Test immer `true` zurückgeben, was dazu führen würde, dass das Programm meldet, dass das Spiel gewonnen wurde. Seien Sie vorsichtig!

### SyntaxError: missing ) after argument list

Dies ist ziemlich einfach — es bedeutet allgemein, dass Sie die schließende Klammer am Ende eines Funktions-/Methodenaufrufs vergessen haben.

> [!NOTE]
> Siehe unsere [SyntaxError: missing ) after argument list](/de/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) Referenzseite für weitere Details zu diesem Fehler.

### SyntaxError: missing : after property id

Dieser Fehler bezieht sich normalerweise auf ein falsch geformtes JavaScript-Objekt, aber in diesem Fall gelang es uns, ihn zu bekommen, indem wir

```js
function checkGuess() {
```

durch

```js
function checkGuess( {
```

ersetzt haben.

Dies hat dazu geführt, dass der Browser dachte, dass wir versuchen, den Inhalt der Funktion als Argument an die Funktion zu übergeben. Seien Sie vorsichtig mit diesen Klammern!

### SyntaxError: missing } after function body

Dies ist einfach — es bedeutet in der Regel, dass Sie eine Ihrer geschweiften Klammern aus einer Funktion oder einer bedingten Struktur vergessen haben. Wir bekamen diesen Fehler, indem wir eine der schließenden geschweiften Klammen am Ende der Funktion `checkGuess()` gelöscht haben.

### SyntaxError: expected expression, got '_string_' oder SyntaxError: string literal contains an unescaped line break

Diese Fehler bedeuten im Allgemeinen, dass Sie das Eröffnungs- oder Schlusszeichen eines Zeichenfolgenwerts weggelassen haben. Im ersten Fehler oben würde _string_ durch das unerwartete Zeichen ersetzt werden, das der Browser anstelle eines Anführungszeichens am Anfang einer Zeichenfolge fand. Der zweite Fehler bedeutet, dass die Zeichenfolge nicht mit einem Anführungszeichen beendet wurde.

Für alle diese Fehler, denken Sie daran, wie wir die Beispiele angegangen sind, die wir im Durchgang durchgesehen haben. Wenn ein Fehler auftritt, schauen Sie sich die angegebene Zeilennummer an, gehen Sie zu dieser Zeile und sehen Sie nach, ob Sie sehen können, was falsch ist. Bedenken Sie, dass der Fehler nicht unbedingt an dieser Zeile liegt und dass der Fehler möglicherweise nicht durch genau das gleiche Problem wie oben angegeben verursacht wurde!

> [!NOTE]
> Siehe unsere [SyntaxError: Unexpected token](/de/docs/Web/JavaScript/Reference/Errors/Unexpected_token) und [SyntaxError: string literal contains an unescaped line break](/de/docs/Web/JavaScript/Reference/Errors/String_literal_EOL) Referenzseiten für weitere Details zu diesen Fehlern.

## Zusammenfassung

So, da haben wir es, die Grundlagen zur Fehlersuche in einfachen JavaScript-Programmen. Es wird nicht immer so einfach sein herauszufinden, was in Ihrem Code falsch ist, aber zumindest wird das Ihnen ein paar Stunden Schlaf ersparen und Ihnen ermöglichen, ein bisschen schneller voranzukommen, wenn die Dinge nicht richtig laufen, besonders in den frühen Stadien Ihrer Lernreise.

## Siehe auch

- Es gibt viele andere Fehlerarten, die hier nicht aufgeführt sind; wir erstellen eine Referenz, die erklärt, was sie im Detail bedeuten — sehen Sie sich die [JavaScript-Fehlerreferenz](/de/docs/Web/JavaScript/Reference/Errors) an.
- Wenn Sie auf Fehler in Ihrem Code stoßen, die Sie nach dem Lesen dieses Artikels nicht beheben können, können Sie Hilfe erhalten! Bitten Sie um Hilfe auf den [Kommunikationskanälen](/de/docs/MDN/Community/Communication_channels). Sagen Sie uns, was Ihr Fehler ist, und wir werden versuchen, Ihnen zu helfen. Eine Auflistung Ihres Codes wäre ebenfalls nützlich.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/A_first_splash", "Learn_web_development/Core/Scripting/Variables", "Learn_web_development/Core/Scripting")}}
