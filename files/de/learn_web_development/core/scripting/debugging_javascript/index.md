---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debugging von JavaScript zurück (das wir erstmals in [What went wrong?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken zur Fehlersuche eintauchen, aber auch darauf eingehen, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um Probleme im Vorfeld zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung der Entwicklerwerkzeuge des Browsers, um das auf Ihrer Seite ausgeführte JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklerwerkzeugen.</li>
          <li>Fehlerbehandlung mit <code>Bedingungen</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [What went wrong?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir allgemein die Arten von Fehlern betrachtet, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige gängige Arten von JavaScript-Fehlermeldungen zu verstehen, und Ihnen gezeigt, wie Sie einfache Debugging-Vorgänge mit [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen durchführen können.

In diesem Artikel werden wir etwas tiefer in die Ihnen zur Verfügung stehenden Werkzeuge zur Fehlersuche eintauchen und auch Möglichkeiten erörtern, Fehler von vornherein zu vermeiden.

## Linting Ihres Codes

Sie sollten sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler zu finden. Nutzen Sie den [Markup Validation Service](https://validator.w3.org/) des W3C, den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder in eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Ihnen bei der Eingabe Ihres Codes Fehler gemeldet werden. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und installieren Sie es.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (nochmals, werfen Sie einen Blick auf [Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Gültigkeitsbereich definiert sind und dass es keine Konflikte zwischen Elementen gibt, die an verschiedenen Stellen deklariert wurden (siehe [Function scope and conflicts](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welchen Gültigkeitsbereich es zutrifft und ob sein Wert das ist, was Sie beabsichtigt haben. Sie können [What is "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele studieren wie [dieses](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143), das ein typisches Muster zeigt, bei dem ein `this`-Gültigkeitsbereich in einer separaten Variable gespeichert wird, die dann in verschachtelten Funktionen verwendet wird, sodass Sie sicher sein können, dass Sie die Funktionalität auf das korrekte `this` anwenden.
- Falsche Verwendung von Funktionen in Schleifen, die mit einer globalen Variable iterieren (allgemeiner "falsche Bestimmung des Gültigkeitsbereichs").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer Variable, die mit `var` definiert ist, erstellen jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Wenn sie geklickt werden, soll jede einen Alarm mit ihrer Nummer anzeigen (den Wert von `i` zu dem Zeitpunkt, als sie erstellt wurde). Stattdessen melden alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen abschließt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren — der Wert von `i`, der mit der Funktion verbunden ist, ist dann für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) an) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet normalerweise, dass Sie verstehen, wie man _Promisen_ verwendet: der korrekte Einsatz von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder das Ausführen des Codes zur Handhabung des Ergebnisses eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler der Promise. Siehe [How to use promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige schöne Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole im Browser

Browser-Entwicklerwerkzeuge haben viele nützliche Funktionen zum Debuggen von JavaScript. Zu Beginn wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie auf die Konsole schauen, sehen Sie eine Fehlermeldung. Die genaue Formulierung hängt vom Browser ab, aber sie wird in etwa so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, betrifft der relevante Codeabschnitt dies:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code bricht also ab, sobald wir versuchen, `jsonObj` zu verwenden (von dem Sie vermutlich erwarten, dass es ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON)) ist. Dieses soll aus einer externen `.json`-Datei mit folgendem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Vielleicht wissen Sie bereits, was an diesem Code falsch ist, aber lassen Sie uns dies weiter erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, die eine benutzerdefinierte Nachricht in der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie vor der Fehlermeldung eine neue Nachricht, die in der Konsole protokolliert wird:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, es ist ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt eine `Promise` zurück, die erst erfüllt wird, wenn die eigentliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir darauf warten, dass die `Promise` erfüllt wird.

### `console.error()` und Aufrufstapel

Als kurze Abschweifung, lassen Sie uns versuchen, eine andere Konsolenmethode zur Fehlerberichterstattung zu verwenden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie sehen jetzt die Nachricht als Fehler gemeldet, mit der gleichen Farbe und dem gleichen Symbol wie der nicht abgefangene Fehler darunter. Zusätzlich gibt es nun einen Ein- und Ausklapp-Pfeil neben der Nachricht. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile im JavaScript-File angibt, aus der der Fehler stammt. Tatsächlich hat die Zeile des nicht abgefangenen Fehlers _auch_ diese Angabe, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler aus der `showHeroes()`-Funktion, Zeile 25, kommt, wie wir zuvor festgestellt haben. Wenn Sie sich Ihren Code ansehen, werden Sie feststellen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Aufrufstapel** bezeichnet, und sie können wirklich nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers zu finden, der viele verschiedene Stellen in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht besonders nützlich, aber er kann nützlich sein, um einen Aufrufstapel zu generieren, wenn noch keiner verfügbar ist.

### Den Fehler beheben

Jedenfalls, kehren wir zu dem Versuch zurück, unseren Fehler zu beheben. Wir können auf die Antwort von der erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an das Ende des `fetch()`-Aufrufs anhängen. Wir können den resultierenden Antwortwert dann in Funktionen übergeben, die ihn akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren, und sehen Sie nach, ob Ihr Code funktioniert. Spoiler-Alarm — die oben genannte Änderung hat das Problem nicht behoben. Leider haben wir **immer noch den gleichen Fehler**!

> [!NOTE]
> Zusammenfassend lässt sich sagen, wann immer etwas nicht funktioniert und ein Wert an einem Punkt in Ihrem Code nicht das zu sein scheint, was er sein sollte, können Sie `console.log()`, `console.error()` oder eine andere ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## JavaScript-Debugger verwenden

Lassen Sie uns dieses Problem weiter mit einem fortschrittlicheren Feature der Entwicklerwerkzeuge des Browsers untersuchen: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht das Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Auf der linken Seite können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Das Hauptfeature solcher Werkzeuge ist die Möglichkeit, Breakpoints im Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird an der selben Zeile wie zuvor geworfen — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie auf diese Zeile im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darauf erscheinen).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser pausiert die Ausführung des Codes an dieser Zeile. Zu diesem Zeitpunkt aktualisiert sich die rechte Seite und zeigt Folgendes an:

![Firefox-Debugger mit Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des von Ihnen gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde der gleiche Aufrufstapel, den wir vorhin im Abschnitt `console.error()` betrachtet haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und als zweites haben wir `onload`, das die Ereignis-Handler-Funktion speichert, die den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Gültigkeitsbereich der Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Gültigkeitsbereich). Jeder Gültigkeitsbereich kann erweitert werden, um die Werte der Variablen innerhalb des Gültigkeitsbereichs anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Gültigkeitsbereich — Sie können sehen, dass die Variable heroes `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt und kein JSON-Objekt speichert.

Das Argument für `showHeroes()` ist der Wert, mit dem die `fetch()`-Promise erfüllt wurde. Diese Promise ist also nicht im JSON-Format: es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie feststecken, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Die Debugger-Registerkarte hat viele andere nützliche Funktionen, über die wir hier nicht gesprochen haben, zum Beispiel bedingte Breakpoints und Watch-Ausdrücke. Für weitere Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind permissiv — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen gehandhabt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach. JavaScript ist jedoch nicht so fehlertolerant wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wirft sie oft Fehler.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sind so gestaltet, dass Sie sie befolgen können, indem Sie eine Kopie der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Rechner erstellen, die Code-Snippets zwischen den öffnenden und schließenden `<script>` und `</script>`-Tags hinzufügen und dann die Datei in einem Browser öffnen und die Ausgabe in der Entwicklerwerkzeugkonsole betrachten.

```html-nolint
<!DOCTYPE html>
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

### Bedingungen

Ein häufiger Einsatz von [JavaScript-Bedingungen](/en/docs/Learn_web_development/Core/Scripting/Conditionals) ist die Fehlerbehandlung. Mit Bedingungen können Sie je nach Wert einer Variablen unterschiedlichen Code ausführen. Oft möchten Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder von falschem Typ ist, oder um einen Fehler abzufangen, wenn der Wert zu einem falschen Ergebnis führen würde, was später Probleme verursachen könnte.

Lassen Sie uns ein Beispiel ansehen. Angenommen, wir haben eine Funktion, die als Argument die Körpergröße des Benutzers in Zoll erhält und seine Körpergröße in Metern bis auf zwei Dezimalstellen zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispiel-File innerhalb des `<script>` Elements ein `const` namens `height` und weisen Sie ihm den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, indem Sie ihr das `height`-Konstant als Argument übergeben und den Rückgabewert in der Konsole protokollieren:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und schauen Sie in die JavaScript-Konsole der Entwicklerwerkzeuge. Sie sollten einen Wert von `1.78` sehen, der darin protokolliert wird.

5. Das funktioniert also in Isolation gut. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Versuchen Sie folgende Szenarien:

   - Wenn Sie den `height`-Wert in `"70"` (also `70`, ausgedrückt als String) ändern, sollte das Beispiel ... immer noch gut funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile den Wert in einen Zahlendatentyp umwandelt. Dies ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexerem Code können falsche Daten zu allen möglichen Fehlern führen, einige davon subtil und schwer zu erkennen!
   - Wenn Sie `height` auf einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte alle möglichen Probleme verursachen, z. B. wenn Sie möchten, dass die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website enthalten ist.
   - Wenn Sie den `height`-Wert ganz entfernen (auskommentieren, indem Sie `//` am Anfang der Zeile hinzufügen), wird in der Konsole ein Fehler angezeigt, etwa: "Uncaught ReferenceError: height is not defined", der Ihre Anwendung zum Stillstand bringen könnte.

   Offensichtlich sind keine dieser Ergebnisse großartig. Wie können wir gegen schlechte Daten verteidigen?

6. Lassen Sie uns eine Bedingung in unserer Funktion hinzufügen, um zu testen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Ersetzen Sie Ihre aktuelle Funktion durch die folgende:

   ```js
   function inchesToMeters(num) {
     if (typeof num === "number" && !isNaN(num)) {
       const mVal = (num * 2.54) / 100;
       const m2dp = mVal.toFixed(2);
       return m2dp;
     } else {
       console.log("A number was not provided. Please correct the input.");
     }
   }
   ```

7. Wenn Sie jetzt die ersten beiden Szenarien erneut versuchen, sehen Sie unsere etwas nützlichere Nachricht, die Ihnen eine Vorstellung davon gibt, was getan werden muss, um das Problem zu beheben. Sie können dort alles hineinpacken, was Ihnen gefällt, einschließlich des Versuchs, Code auszuführen, um den Wert von `num` zu korrigieren, aber dies wird nicht empfohlen — diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Wertes irgendwo anders im System behandeln.

   > [!NOTE]
   > In der `if()`-Anweisung testen wir zunächst mit dem [`typeof`](/en/docs/Web/JavaScript/Reference/Operators/typeof)-Operator, ob der Datentyp von `num` `"number"` ist, testen aber auch, ob {{jsxref("isNaN()", "!isNaN(num)")}} `false` zurückgibt. Wir müssen das tun, um gegen den spezifischen Fall zu verteidigen, dass `num` auf `NaN` gesetzt wird, da `typeof NaN` interessanterweise `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut versuchen, wird Ihnen immer noch der Fehler "Uncaught ReferenceError: height is not defined" angezeigt. Sie können das Fehlen eines Wertes nicht von einer Funktion aus beheben, die versucht, den Wert zu verwenden.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, unsere Funktion dazu zu bringen, einen benutzerdefinierten Fehler zu werfen, wenn sie nicht die richtigen Daten erhält. Wir werden zuerst sehen, wie das geht, und dann alle Fehler gemeinsam behandeln.

### Benutzerdefinierte Fehler werfen

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler mit der [`throw`](/en/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung und dem {{jsxref("Error.Error", "Error()")}}-Konstruktor werfen. Lassen Sie uns dies in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile innerhalb des `else`-Blocks der Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, stellen Sie jedoch sicher, dass `num` auf einen schlechten (d.h. nicht nummerischen) Wert gesetzt wird. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler sehen, zusammen mit einem nützlichen Aufrufstapel, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (beachten Sie jedoch, dass die Nachricht immer noch anzeigt, dass der Fehler "uncaught" oder "unhandled" ist). Okay, Fehler sind ärgerlich, aber dies ist viel nützlicher, als die Funktion erfolgreich auszuführen und einen Nicht-Nummer-Wert zurückzugeben, der später Probleme verursachen könnte.

Wie gehen wir also mit all diesen Fehlern um?

### try...catch

Die [`try...catch`](/en/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell zum Umgang mit Fehlern entwickelt worden. Sie hat folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try`-Blocks versuchen Sie, einige Codes auszuführen. Wenn dieser Code ohne einen geworfenen Fehler ausgeführt wird, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler geworfen wird, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt bietet, das den Fehler darstellt, und es Ihnen ermöglicht, Code auszuführen, um ihn zu behandeln.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Anweisung innerhalb eines `try`-Blocks aus und behandeln alle zurückgegebenen Fehler innerhalb eines korrespondierenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren, und Sie sollten jetzt zwei Dinge sehen:

   - Die Fehlermeldung und den Aufrufstapel wie zuvor, diesmal jedoch ohne die Bezeichnung "uncaught" oder "unhandled".
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Versuchen Sie jetzt, `num` auf einen guten (nummerischen) Wert zu aktualisieren, und Sie sehen das Ergebnis der Berechnung, ohne Fehlermeldung.

Das ist signifikant — alle geworfenen Fehler werden nicht länger ungleich behandelt, sodass sie die Anwendung nicht zum Absturz bringen. Sie können beliebigen Code zum Behandeln des Fehlers ausführen. Oben protokollieren wir nur eine Nachricht, aber Sie könnten zum Beispiel die früher ausgeführte Funktion aufrufen, um den Benutzer zu bitten, seine Körpergröße einzugeben, diesmal, indem Sie ihn bitten, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach Art des zurückgegebenen Fehlers unterschiedlichen Fehlerbehandlungscode auszuführen.

### Funktionsprüfung

Funktionsprüfung ist nützlich, wenn Sie planen, neue JavaScript-Funktionen einzusetzen, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie die Funktion und führen Sie dann bedingt Code aus, um eine akzeptable Erfahrung sowohl in Browsern zu bieten, die die Funktion unterstützen, als auch in solchen, die sie nicht unterstützen. Als kurzes Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt) einen Haupteinstiegspunkt für ihre Nutzung — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie zuvor gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden einige weitere Beispiele zur Funktionsprüfung in [Alternatives to UA sniffing](/en/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe suchen

Es gibt viele andere Probleme, auf die Sie mit JavaScript (und HTML und CSS!) stoßen werden, was das Wissen, wie man online Antworten findet, unersetzlich macht.

Zu den besten Informationsquellen gehören MDN (da sind Sie gerade!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Leute eine Suchmaschinenabfrage nach der Technologie, zu der sie Informationen suchen, plus dem Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) liefert Unterstützunginformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur die Funktion, nach der Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Foren-Website, auf der Sie Fragen stellen und Lösungen von anderen Entwicklern teilen lassen können, frühere Beiträge nachsehen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir "disabling autofocus on HTML dialog" auf SO gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie sie haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also JavaScript-Debugging und Fehlerbehandlung. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Einstieg geben und einige Ideen, wie Sie die mit JavaScript verbundenen Probleme angehen können, auf die Sie stoßen werden.

Das war's für das Module "Dynamisches Scripting mit JavaScript"; Glückwunsch, dass Sie es bis zum Ende geschafft haben! Im nächsten Moduls helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
