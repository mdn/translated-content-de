---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema JavaScript-Debugging zurück (das wir uns erstmals in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) angesehen haben). Hier werden wir tiefer in Techniken zur Fehlerverfolgung eintauchen, aber auch betrachten, wie man defensiv programmieren und Fehler im eigenen Code behandeln kann, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung der Entwicklertools des Browsers, um das auf Ihrer Seite laufende JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> für das Debugging.</li>
          <li>Erweitertes JavaScript-Debugging mit den Entwicklertools des Browsers.</li>
          <li>Fehlerbehandlung mit <code>bedingten Anweisungen</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir allgemein die Arten von Fehlern betrachtet, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen aufgeteilt werden können – Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und gezeigt, wie Sie mit einfachen [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen debuggen können.

In diesem Artikel werden wir etwas tiefer in die verfügbaren Werkzeuge zur Fehlerverfolgung eintauchen und auch Möglichkeiten zur Vermeidung von Fehlern betrachten.

## Ihr Code linten

Sie sollten sicherstellen, dass Ihr Code zunächst gültig ist, bevor Sie versuchen, spezifische Fehler zu finden. Nutzen Sie den [Markup-Validierungsdienst der W3C](https://validator.w3.org/), den [CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern beseitigen und es Ihnen ermöglichen, sich auf die verbleibenden Fehler zu konzentrieren.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Sie Fehler gemeldet bekommen, während Sie Ihren Code schreiben. Versuchen Sie, in der Plugins- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, derer Sie sich bewusst sein sollten, wie:

- Grundlegende Syntax- und Logikprobleme (schauen Sie sich nochmals [Fehlerbehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Stellen Sie sicher, dass Variablen usw. im richtigen Bereich definiert sind und Sie keinen Konflikten zwischen an verschiedenen Stellen deklarierten Elementen begegnen (siehe [Funktionsbereiche und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welchen Bereich es zutrifft und ob sein Wert dem entspricht, was Sie beabsichtigt hatten. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, um einen `this`-Bereich in einer separaten Variablen zu speichern und dann diese Variable in geschachtelten Funktionen zu verwenden, damit Sie sicher sein können, dass Sie die Funktionalität auf den richtigen `this`-Bereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemein gesagt: "den Bereich falsch verstehen").

> [!CALLOUT]
> Beispielsweise in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)) durchlaufen wir 10 Iterationen unter Verwendung einer mit `var` definierten Variablen, erstellen jedes Mal einen Paragraphen und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignis-Handler hinzu. Bei einem Klick soll jeder eine Warnmeldung anzeigen, die seine Nummer enthält (den Wert von `i` zum Zeitpunkt der Erstellung). Stattdessen melden sie alle `i` als 11 — weil die `for`-Schleife all ihre Iterationen durchführt, bevor geschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` statt `var` zu deklarieren — der `i`-Wert, der der Funktion zugeordnet ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet üblicherweise, zu verstehen, wie man _Promisen_ benutzt: [await](/de/docs/Web/JavaScript/Reference/Operators/await) angemessen verwenden oder den Code, der das Ergebnis eines asynchronen Aufrufs verarbeitet, im {{jsxref("Promise.then()", "then()")}}-Handler der Promise ausführen. Siehe [Anleitung zum Verwenden von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Buggy JavaScript Code: Die 10 häufigsten Fehler von JavaScript-Entwicklern](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) hat einige schöne Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Entwicklertools von Browsern haben viele nützliche Funktionen, um JavaScript zu debuggen. Zunächst wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, werden Sie eine Fehlermeldung sehen. Die genaue Wortlaut hängt vom Browser ab, aber es wird etwas wie: "Uncaught TypeError: heroes is not iterable" und die referenzierte Zeilennummer ist 25 sein. Wenn wir uns den Quellcode ansehen, ist der relevante Codeabschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code scheitert also sofort, wenn wir versuchen, `jsonObj` zu verwenden (was, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Es soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`-Aufruf](/de/docs/Web/API/Window/fetch) abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Sie wissen vielleicht bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns ihn etwas weiter erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die JavaScript-Code erlaubt, mit der JavaScript-Konsole des Browsers zu interagieren. Es gibt eine Vielzahl von Funktionen; Sie haben bereits [`console.log()`](/de/docs/Web/API/console/log_static) kennengelernt, das eine benutzerdefinierte Nachricht in der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie folgt:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal, bevor die Fehlermeldung erscheint, wird eine neue Nachricht in der Konsole protokolliert:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt eine `Promise` zurück, die erst erfüllt wird, wenn die eigentliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis die `Promise` erfüllt ist.

### `console.error()` und Call Stacks

Als kurzen Exkurs lassen Sie uns eine andere Konsolenmethode ausprobieren, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

mit

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie werden nun die Nachricht als Fehler gemeldet sehen, mit der gleichen Farbe und dem gleichen Symbol wie der nicht abgefangene Fehler darunter. Darüber hinaus gibt es nun einen ein- und ausklappbaren Pfeil neben der Nachricht. Wenn Sie diesen drücken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile im JavaScript-Dokument anzeigt, von dem der Fehler stammt. Tatsächlich hat auch die nicht abgefangene Fehlerzeile dies, jedoch hat sie zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Dies bedeutet, dass der Fehler von der Funktion `showHeroes()` in Zeile 25 kommt, wie wir bereits bemerkt haben. Wenn Sie sich Ihren Code ansehen, sehen Sie, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call Stack** bezeichnet und können wirklich nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers aus vielen verschiedenen Stellen in Ihrem Code zu ermitteln.

Der `console.error()`-Aufruf ist in diesem Fall nicht allzu nützlich, kann jedoch nützlich sein, um einen Call Stack zu erzeugen, wenn noch kein solcher verfügbar ist.

### Den Fehler beheben

Lassen Sie uns nun wieder zu der Lösung unseres Problems zurückkehren. Wir können auf die Antwort von der erfüllten `Promise` zugreifen, indem wir die Methode {{jsxref("Promise.prototype.then()", "then()")}} an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Rückgabewert an die Funktionen weitergeben, die ihn akzeptieren, wie folgt:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren, und überprüfen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider **haben wir immer noch denselben Fehler**!

> [!NOTE]
> Zusammengefasst: Jedes Mal, wenn etwas nicht funktioniert und ein Wert an einer Stelle in Ihrem Code nicht so scheint, wie er sollte, können Sie `console.log()`, `console.error()` oder eine andere ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Den JavaScript-Debugger verwenden

Lassen Sie uns dieses Problem weiter untersuchen, indem wir ein fortschrittlicheres Feature der Entwicklertools des Browsers verwenden: den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> In anderen Browsern sind ähnliche Tools verfügbar; im Chrome der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources), Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/) usw.

In Firefox sieht der Debugger-Tab wie folgt aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Das Hauptmerkmal solcher Tools ist die Fähigkeit, Breakpoints im Code hinzuzufügen — das sind Punkte, an denen die Ausführung des Codes stoppt, und zu diesem Zeitpunkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was los ist.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird an derselben Zeile wie zuvor geworfen — `for (const hero of heroes) {` — Zeile 26 im untenstehenden Screenshot. Klicken Sie auf diese Zeile im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie werden einen blauen Pfeil über sich sehen).
2. Aktualisieren Sie nun die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes auf dieser Zeile pausieren. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um Folgendes anzuzeigen:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details zu dem Breakpoint, den Sie gesetzt haben.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde dasselbe wie der Call Stack, den wir zuvor im `console.error()`-Abschnitt angeschaut haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und zweitens `onload`, die die Ereignishandlerfunktion speichert, die den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Gültigkeitsbereich für die Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block`, und `Window` (der globale Gültigkeitsbereich). Jeder Bereich kann erweitert werden, um die Werte von Variablen innerhalb des Bereichs anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Bereich — Sie können daraus sehen, dass die Variable heroes `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument von `showHeroes()` ist der Wert, mit dem die `fetch()`-Promise erfüllt wurde. Diese Promise ist also nicht im JSON-Format: es ist ein `Response`-Objekt. Es ist ein zusätzlicher Schritt erforderlich, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir würden gerne, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, lesen Sie die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt. Wenn Sie stecken bleiben, können Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht behandelt haben, zum Beispiel bedingte Breakpoints und Watch-Expressions. Für mehr Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Fehler in Ihrem JavaScript-Code behandeln

HTML und CSS sind permissiv — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen behandelt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert in der Regel einfach. JavaScript ist jedoch nicht so permissiv wie HTML und CSS — wenn die JavaScript-Engine Fehler oder nicht erkannte Syntax entdeckt, wirft sie oft Fehler.

Lassen Sie uns eine häufige Strategie zur Behandlung von Fehlern in Ihrem JavaScript-Code erkunden. Die folgenden Abschnitte sollen so befolgt werden, dass Sie eine Kopie der untenstehenden Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Rechner erstellen, die Code-Snippets zwischen den öffnenden und schließenden `<script>` und `</script>`-Tags hinzufügen, dann die Datei in einem Browser öffnen und sich die Ausgabe in der JavaScript-Konsole der Entwicklertools ansehen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Handling JS errors</title>
  </head>
  <body>
    <script>
      // Code goes below this line
    </script>
  </body>
</html>
```

### Bedingte Anweisungen

Ein häufiger Einsatz von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist es, Fehler zu behandeln. Bedingte Anweisungen ermöglichen es Ihnen, unterschiedlichen Code auszuführen, abhängig vom Wert einer Variablen. Oft möchten Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler abzufangen, wenn der Wert zu einem inkorrekten Ergebnis führen könnte, das später zu Problemen führen kann.

Betrachten wir ein Beispiel. Angenommen, wir haben eine Funktion, die als Argument die Größe des Benutzers in Zoll erhält und seine Größe in Metern mit 2 Dezimalstellen zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispiel ein `const` namens `height` und weisen Sie ihm den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, geben Sie ihr das `height`-Konstanten als Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und sehen Sie sich die JavaScript-Konsole der Entwicklertools an. Sie sollten dort den Wert `1.78` sehen.

5. Dies funktioniert also in Isolation einwandfrei. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:
   - Wenn Sie den `height`-Wert in `"70"` ändern (also `70` als String ausgedrückt), sollte das Beispiel... immer noch funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile den Wert in einen Zahlendatentyp coerziert. Dies ist in einem einfachen Fall wie diesem in Ordnung, aber in einem komplexeren Code kann das Vorhandensein falscher Daten zu vielen Arten von Fehlern führen, einige davon subtil und schwer zu entdecken!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl coerziert werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte alle möglichen Probleme verursachen, zum Beispiel, wenn Sie die Größe des Benutzers irgendwo in der Benutzeroberfläche der Website anzeigen möchten.
   - Wenn Sie den `height`-Wert komplett entfernen (indem Sie `//` am Anfang der Zeile hinzufügen, um ihn auszukommentieren), wird die Konsole einen Fehler anzeigen, der etwa "Uncaught ReferenceError: height is not defined" lautet, was Ihre Anwendung zum Erliegen bringen könnte.

   Offensichtlich sind keine dieser Ergebnisse großartig. Wie schützen wir uns vor schlechten Daten?

6. Fügen wir in unserer Funktion eine Bedingung hinzu, um zu prüfen, ob die Daten in Ordnung sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion mit der folgenden zu ersetzen:

   ```js
   function inchesToMeters(num) {
     if (typeof num !== "number" || Number.isNaN(num)) {
       console.log("A number was not provided. Please correct the input.");
       return undefined;
     }
     const mVal = (num * 2.54) / 100;
     const m2dp = mVal.toFixed(2);
     return m2dp;
   }
   ```

7. Wenn Sie nun die ersten beiden Szenarien noch einmal testen, sehen Sie unsere etwas nützlichere Nachricht, die Ihnen eine Vorstellung davon gibt, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles hineinschreiben, was Sie möchten, einschließlich eines Versuchs, den Wert von `num` zu korrigieren, aber dies ist nicht ratsam — diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Wertes anderswo im System behandeln.

   > [!NOTE]
   > In der `if()`-Anweisung prüfen wir zunächst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator verwenden, aber wir prüfen auch, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um uns spezifisch gegen den Fall von `num`, das auf `NaN` gesetzt ist, abzusichern, da `typeof NaN` dennoch `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, wird weiterhin der "Uncaught ReferenceError: height is not defined"-Fehler angezeigt. Sie können das Fehlen eines Wertes nicht in einer Funktion beheben, die versucht, den Wert zu verwenden.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, wenn unsere Funktion einen benutzerdefinierten Fehler zurückgibt, wenn sie die korrekten Daten nicht erhält. Wir werden uns zunächst ansehen, wie das geht, und dann alle Fehler zusammen behandeln.

### Benutzerdefinierte Fehler auslösen

Sie können jederzeit einen benutzerdefinierten Fehler auslösen, indem Sie die [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung zusammen mit dem {{jsxref("Error.Error", "Error()")}}-Konstruktor verwenden. Lassen Sie uns dies in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile innerhalb des `else`-Blocks Ihrer Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. nicht numerischen) Wert gesetzt ist. Diesmal sollte Ihr benutzerdefinierter Fehler geworfen werden, zusammen mit einem nützlichen Call Stack, der Ihnen hilft, die Quelle des Fehlers zu finden (beachten Sie jedoch, dass die Nachricht weiterhin besagt, dass der Fehler "ungefangen" oder "unhandled" ist). OK, Fehler sind also ärgerlich, aber das ist weitaus nützlicher als die Funktion erfolgreich auszuführen und einen nicht numerischen Wert zurückzugeben, der später zu Problemen führen könnte.

Wie behandeln wir also all diese Fehler dann?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell dafür ausgelegt, Fehler zu behandeln. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Im `try`-Block versuchen Sie, einen Code auszuführen. Wenn dieser Code fehlerfrei ausgeführt wird, ist alles in Ordnung und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler geworfen wird, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt gewährt, das den Fehler darstellt, und Ihnen ermöglicht, Code auszuführen, um ihn zu behandeln.

Verwenden wir `try...catch` in unserem Code.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen unsere `console.log()`-Zeile nun innerhalb eines `try`-Blocks aus und behandeln alle zurückgegebenen Fehler innerhalb eines entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren, und Sie sollten nun zwei Dinge sehen:
   - Die Fehlermeldung und der Call Stack wie zuvor, aber diesmal ohne das Label "ungefangen" oder "unhandled".
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Versuchen Sie nun, `num` auf einen guten (numerischen) Wert zu ändern, und Sie werden das Ergebnis der Berechnung protokolliert sehen, ohne Fehlermeldung.

Das ist bedeutend — geworfene Fehler werden jetzt nicht länger unbehandelt gelassen und bringen die Anwendung nicht zum Absturz. Sie können beliebigen Code ausführen, um den Fehler zu behandeln. Oben protokollieren wir nur eine Nachricht, aber Sie könnten zum Beispiel die Funktion aufrufen, die früher ausgeführt wurde, um den Benutzer zu bitten, seine Größe einzugeben und ihm diesmal zu bitten, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um unterschiedliche Fehlerbehandlungscodes auszuführen, je nachdem, welcher Fehlertyp zurückgegeben wird.

### Feature-Erkennung

Feature-Erkennung ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie das Feature und führen Sie dann bedingt Code aus, um eine akzeptable Erfahrung sowohl in Browsern zu bieten, die das Feature unterstützen, als auch in solchen, die es nicht unterstützen. Ein schnelles Beispiel ist die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, zur Verfügung stellt), die einen Haupteinstiegspunkt für ihre Nutzung hat — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur wie die, die wir zuvor gesehen haben, verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie können einige weitere Beispiele für die Feature-Erkennung in [Alternativen zum UA-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing) finden.

## Hilfe finden

Es gibt viele andere Probleme, mit denen Sie in JavaScript (und auch HTML und CSS!) konfrontiert werden, daher ist es unschätzbar, zu wissen, wie man im Internet nach Antworten suchen kann.

Zu den besten Quellen für Unterstützungsinformationen gehören MDN (das ist hier, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu verwenden, machen die meisten Leute eine Suchmaschine-Suche nach der Technologie, über die sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen, zusammen mit ein paar nützlichen externen Ressourcelinks. Beispielsweise finden Sie unter <https://caniuse.com/#search=video> (Sie müssen nur das Feature eingeben, nach dem Sie suchen möchten, in das Textfeld).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen und sich Lösungen mit anderen Entwicklern teilen können, frühere Beiträge nachschauten und anderen Entwicklern helfen. Ihnen wird geraten, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir nach "disabling autofocus on HTML dialog" auf SO gesucht und sehr schnell eine Antwort gefunden: [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon versuchen Sie, in Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich dieselben Probleme wie Sie gehabt haben.

## Zusammenfassung

Das war's also mit JavaScript-Debugging und Fehlerbehandlung. Einfach, oder? Vielleicht nicht ganz so einfach, aber dieser Artikel sollte Ihnen zumindest einen Einstieg und einige Ideen geben, wie Sie die JavaScript-bezogenen Probleme angehen können, auf die Sie stoßen werden.

Das war's für das Modul Dynamisches Skripten mit JavaScript; herzlichen Glückwunsch zum Erreichen des Endes! Im nächsten Modul werden wir Ihnen helfen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
