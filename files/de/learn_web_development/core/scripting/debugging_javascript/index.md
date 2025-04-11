---
title: Debuggen und Fehlerbehandlung in JavaScript
short-title: Debuggen und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debuggen von JavaScript zurück (das wir erstmals in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken zur Fehlersuche eintauchen und auch darauf eingehen, wie man defensiv programmiert und Fehler im Code behandelt, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden Konzepten von CSS</a>, sowie Vertrautheit mit den Grundlagen von JavaScript, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Entwicklerwerkzeugen des Browsers, um das auf Ihrer Seite laufende JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittene JavaScript-Fehlersuche mit den Developer Tools des Browsers.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir uns im Allgemeinen mit den Arten von Fehlern befasst, die in JavaScript-Programmen auftreten können. Wir haben festgestellt, dass sie grob in zwei Typen eingeteilt werden können — Syntaxfehler und logische Fehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen und Ihnen gezeigt, wie Sie mit einfachen [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen einfache Fehlerbehandlungen durchführen können.

In diesem Artikel gehen wir etwas tiefer in die Werkzeuge, die Ihnen zur Verfügung stehen, um Fehler zu finden, und schauen uns auch Wege an, wie Sie Fehler von vornherein verhindern können.

## Ihr Code zu prüfen (Linting)

Sie sollten zunächst sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler zu finden. Nutzen Sie den [Markup Validierungsdienst](https://validator.w3.org/), den [CSS Validierungsdienst](https://jigsaw.w3.org/css-validator/) der W3C und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Plugins für Code-Editoren

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, sodass Ihnen Fehler gemeldet werden, während Sie Ihren Code schreiben. Suchen Sie in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint und installieren Sie es.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie z.B.:

- Grundlegende Syntax- und Logikprobleme (überprüfen Sie erneut [Fehlerbehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen etc. im richtigen Scope definiert sind und Sie keine Konflikte zwischen an verschiedenen Stellen deklarierten Elementen haben (siehe [Funktionenscope und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welchen Scope es sich bezieht, und ob sein Wert tatsächlich der ist, den Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) lesen für eine kurze Einführung; Sie sollten auch Beispiele wie [dieses Beispiel](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, bei dem ein `this`-Scope auf eine separate Variable gespeichert wird, um sicherzustellen, dass Sie Funktionalität auf den richtigen `this`-Scope anwenden.
- Funktionen falsch in Schleifen verwenden, die mit einer globalen Variablen iterieren (allgemeiner gesagt: den Scope falsch verstehen).

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (vgl. [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), wir durchlaufen 10 Iterationen mit einer Variablen, die mit `var` definiert ist, erstellen dabei jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Bei einem Klick soll jeder einen Alarm mit seiner Nummer anzeigen (dem Wert von `i` zur Erstellungszeit). Stattdessen zeigen alle den Wert `i` als 11 an — weil die Schleife alle ihre Iterationen ausführt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion assoziiert ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (s. auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor Sie versuchen, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel, zu verstehen, wie _Promises_ genutzt werden: den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Operator angemessen zu verwenden oder den Code, der das Ergebnis eines asynchronen Aufrufs verarbeiten soll, im {{jsxref("Promise.then()", "then()")}} Handler des Promises auszuführen. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> **Note:** [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige gute Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole im Browser

Entwicklerwerkzeuge im Browser haben viele nützliche Features, um bei der Fehlersuche in JavaScript zu helfen. Die JavaScript-Konsole meldet Fehler im Code.

Erstellen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispielprojekts (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung ist browserabhängig, aber es wird so etwas wie "Uncaught TypeError: heroes is not iterable" und die referenzierte Zeilennummer 25 sein. Wenn wir uns den Quellcode ansehen, ist der relevante Codeteil dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code bricht zusammen, sobald wir versuchen, `jsonObj` zu verwenden (welches, wie Sie erwarten können, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Es soll aus einer externen `.json` Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Sie wissen vielleicht bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns das noch weiter erkunden, um zu zeigen, wie Sie es untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code erlaubt, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, die eine benutzerdefinierte Nachricht in die Konsole druckt.

Versuchen Sie, einen `console.log()` Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie folgt:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal sehen Sie vor der Fehlermeldung eine neue Nachricht in der Konsole:

```plain
Response value: [object Promise]
```

Die `console.log()` Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die `fetch()` Funktion ist asynchron: sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir darauf warten, dass das `Promise` erfüllt wird.

### `console.error()` und Call Stacks

Als kurzen Exkurs möchten wir eine andere Konsolenmethode verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser. Sie werden die Meldung jetzt als Fehler sehen, mit der gleichen Farbe und dem gleichen Symbol wie die nicht abgefangene Fehlermeldung darunter. Zusätzlich wird es nun einen Ein- /Ausklapp-Pfeil neben der Nachricht geben. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile in der JavaScript-Datei angibt, von der der Fehler stammt. Tatsächlich hat auch die Zeile mit dem nicht abgefangenen Fehler dies, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Dies bedeutet, dass der Fehler aus der Funktion `showHeroes()` auf Zeile 25 kommt, wie wir bereits festgestellt haben. Wenn Sie sich Ihren Code ansehen, werden Sie sehen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call Stack** bezeichnet und können sehr nützlich sein, wenn versucht wird, die Quelle eines Fehlers zu finden, der viele verschiedene Stellen im Code betrifft.

Der `console.error()` Aufruf ist in diesem Fall nicht sehr nützlich, aber er kann nützlich sein, um einen Call Stack zu generieren, wenn noch keiner verfügbar ist.

### Den Fehler beheben

Wie dem auch sei, kehren wir zu dem Versuch zurück, unseren Fehler zu beheben. Wir können auf die Antwort von dem erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}} Methode am Ende des `fetch()` Aufrufs anhängen. Wir können dann den resultierenden Antwortwert an die Funktionen übergeben, die diesen akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und prüfen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht gelöst. Leider haben wir **immer noch den gleichen Fehler**!

> [!NOTE]
> Zusammenfassend können Sie jedes Mal, wenn etwas nicht funktioniert und ein Wert zu einem bestimmten Zeitpunkt in Ihrem Code nicht so zu sein scheint, wie er sein sollte, `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Den JavaScript-Debugger verwenden

Untersuchen wir dieses Problem weiter mit einer ausgefeilteren Funktion der Entwicklerwerkzeuge im Browser: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er im Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

Im Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Feld zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Werkzeuge ist die Möglichkeit, Breakpoints zu Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt. Zu diesem Zeitpunkt können Sie die Umgebung im aktuellen Zustand untersuchen und sehen, was passiert.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird an der gleichen Zeile wie zuvor ausgelöst — `for (const hero of heroes) {` — Zeile 26 im unten stehenden Screenshot. Klicken Sie im mittleren Panel auf diese Zeile, um dort einen Breakpoint hinzuzufügen (Sie werden einen blauen Pfeil darüber sehen).
2. Aktualisieren Sie nun die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser hält die Ausführung des Codes auf dieser Zeile an. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert und zeigt Folgendes an:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde das gleiche wie der Call Stack, den wir uns vorher im `console.error()` Abschnitt angesehen haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und als zweites `onload`, die die Ereignishandlerfunktion speichert, die den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Scope für die Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block`, und `Window` (den globalen Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen innerhalb des Scopes anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Scope — Sie können sehen, dass die Variable `heroes` `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members` Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()` Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: es ist ein `Response`-Objekt. Es ist ein zusätzlicher Schritt erforderlich, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu lösen. Um Ihnen den Einstieg zu erleichtern, lesen Sie die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt. Wenn Sie nicht weiterkommen, finden Sie den aktualisierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Breakpoints und Watch Expressions. Für viel mehr Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) Seite.

## Fehler in Ihrem JavaScript-Code behandeln

HTML und CSS sind permessiv — Fehler und nicht erkannte Features können aufgrund der Natur der Sprachen oft gehandhabt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach weiter. JavaScript ist jedoch nicht so permissiv wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, gibt sie oft Fehler aus.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sollen Ihnen dabei helfen, eine Kopie der unten angegebenen Template-Datei als `handling-errors.html` auf Ihrem lokalen Rechner zu erstellen, die Code-Snippets zwischen den öffnenden und schließenden `<script>` und `</script>` Tags hinzuzufügen und dann die Datei in einem Browser zu öffnen und die Ausgabe in der Devtools JavaScript-Konsole zu betrachten.

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

### Bedingte Anweisungen

Ein häufiger Einsatz von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) besteht darin, Fehler zu behandeln. Bedingungen erlauben Ihnen, je nach Wert einer Variablen unterschiedlichen Code auszuführen. Oft möchten Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler ausgegeben wird, wenn der Wert nicht vorhanden oder vom falschen Typ ist, oder um einen Fehler zu erfassen, falls der Wert zu einem fehlerhaften Ergebnis führt, das später Probleme verursachen könnte.

Schauen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die als Argument die Körpergröße des Nutzers in Zoll annimmt und seine Körpergröße in Meter auf zwei Dezimalstellen zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in dem `<script>` Element Ihrer Beispieldatei eine `const` mit dem Namen `height` und weisen Sie ihr einen Wert von `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, geben Sie der `height` Konstanten als Argument mit, und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und sehen Sie sich die Devtools JavaScript-Konsole an. Sie sollten einen Wert von `1.78` darin verzeichnet sehen.

5. Dies funktioniert also isoliert einwandfrei. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:

   - Wenn Sie den `height` Wert in den String `"70"` ändern (also `70`, ausgedrückt als String), sollte das Beispiel ... immer noch einwandfrei funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile des Strings den Wert zu einem Zahl-Datentyp zwingt. Dies ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexeren Code kann der falsche Wert zu allerlei Fehlern führen, von denen einige subtil und schwer zu erkennen sind!
   - Wenn Sie `height` auf einen Wert ändern, der nicht in eine Zahl zwangsweise umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte allerlei Probleme verursachen, beispielsweise wenn Sie die Körpergröße des Nutzers irgendwo in der Benutzeroberfläche der Website anzeigen möchten.
   - Wenn Sie den `height` Wert ganz entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), zeigt die Konsole einen Fehler in der Art "Uncaught ReferenceError: height is not defined" an, was dazu führen könnte, dass Ihre Anwendung zum Stillstand kommt.

   Offensichtlich sind keine dieser Ergebnisse ideal. Wie verteidigt man sich gegen schlechte Daten?

6. Fügen wir eine Bedingung in unserer Funktion hinzu, um zu testen, ob die Daten korrekt sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion durch folgende zu ersetzen:

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

7. Wenn Sie die ersten beiden Szenarien jetzt erneut ausprobieren, sehen Sie unsere etwas nützlichere Meldung zurückgegeben, um Ihnen eine Idee zu geben, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles hineinschreiben, was Ihnen gefällt, einschließlich eines Versuchs, den Wert von `num` zu korrigieren. Dies ist jedoch nicht ratsam — diese Funktion hat einen einfachen Zweck, und die Korrektur des Werts sollte an einer anderen Stelle im System behandelt werden.

   > [!NOTE]
   > Im `if()` Ausdruck testen wir zunächst, ob der Datentyp von `num` `"number"` ist, mithilfe des [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operators, aber wir testen auch, ob {{jsxref("isNaN()", "!isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um uns gegen den spezifischen Fall zu verteidigen, dass `num` auf `NaN` gesetzt ist, da kurioserweise `typeof NaN` `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, erhalten Sie immer noch den gleichen "Uncaught ReferenceError: height is not defined" Fehler. Sie können von innerhalb einer Funktion, die versucht den Wert zu verwenden, nicht beheben, dass ein Wert nicht verfügbar ist.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, unsere Funktion eine benutzerdefinierte Fehlermeldung zurückgeben zu lassen, wenn sie nicht die korrekten Daten erhält. Wir schauen uns zuerst an, wie das geht, und dann behandeln wir alle Fehler zusammen.

### Benutzerdefinierte Fehler auslösen

Sie können zu jedem Zeitpunkt in Ihrem Code mit dem [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Statement, in Verbindung mit dem {{jsxref("Error.Error", "Error()")}} Konstruktor, einen benutzerdefinierten Fehler auslösen. Lassen Sie uns dies in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()` Zeile innerhalb des `else` Blocks durch folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen ungültigen (d.h. nicht-numerischen) Wert gesetzt ist. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler ausgegeben sehen, zusammen mit einem nützlichen Call Stack, um Ihnen dabei zu helfen, die Fehlerquelle zu finden (obwohl die Meldung immer noch aussagt, dass der Fehler "unhandled" oder "nicht abgefangen" ist). Ja, Fehler sind ärgerlich, aber das ist wesentlich hilfreicher als die Funktion erfolgreich auszuführen und einen Nicht-Nummer-Wert zu erhalten, der später Probleme verursachen könnte.

Wie behandeln wir also all diese Fehler?

### try...catch

Das [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Statement ist speziell dafür konzipiert, Fehler zu behandeln. Es hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try` Blocks versuchen Sie, Code auszuführen. Wenn dieser Code ohne Fehler ausgeführt wird, ist alles in Ordnung, und der `catch` Block wird ignoriert. Wenn allerdings ein Fehler auftritt, wird der `catch` Block ausgeführt, der Zugriff auf das {{jsxref("Error")}} Objekt ermöglicht, das den Fehler darstellt, und Ihnen erlaubt, Code zur Behandlung des Fehlers zu laufen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()` Zeile, die die `inchesToMeters()` Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen unsere `console.log()` Zeile jetzt in einem `try` Block aus, und behandeln alle Fehler, die er zurückgibt, in einem entsprechenden `catch` Block.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren, und Sie sollten jetzt zwei Dinge sehen:

   - Die Fehlermeldung und den Call Stack wie zuvor, aber diesmal ohne ein "uncaught" oder "unhandled" Label.
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Aktualisieren Sie `num` nun auf einen gültigen (numerischen) Wert, und Sie werden das Ergebnis der Berechnung ohne Fehlermeldung protokolliert sehen.

Das ist wichtig — alle ausgelösten Fehler werden jetzt nicht mehr ungehandelt, also bringen sie die Anwendung nicht mehr zum Absturz. Sie können jeglichen Code, den Sie möchten, ausführen, um den Fehler zu behandeln. Oben protokollieren wir nur eine Nachricht, aber zum Beispiel könnten Sie die zuvor ablaufende Funktion aufrufen, um den Nutzer zu bitten, seine Körpergröße einzugeben, diesmal mit der Bitte, den Eingabefehler zu korrigieren. Sie könnten sogar einen `if...else` Ausdruck verwenden, um unterschiedliche Fehlerbehandlungscodes auszuführen, je nachdem, welche Art von Fehler zurückgegeben wird.

### Feature-Erkennung

Die Feature-Erkennung ist nützlich, wenn Sie vorhaben, neue JavaScript-Features zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie das Feature und führen Sie dann bedingt Code aus, um sowohl in Browsern, die das Feature unterstützen, als auch in solchen, die es nicht tun, ein akzeptables Erlebnis zu bieten. Als schnelles Beispiel verfügt die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) über einen Haupteinstiegspunkt für ihre Nutzung — eine `geolocation` Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser die Geolokalisierung unterstützt oder nicht, indem Sie eine ähnliche `if()` Struktur wie zuvor verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie können einige weitere Beispiele zur Feature-Erkennung in [Alternativen zu UA sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing) finden.

## Hilfe finden

Es gibt viele weitere Probleme, auf die Sie mit JavaScript (sowie HTML und CSS!) stoßen werden, weshalb es unschätzbar ist, zu wissen, wie man online Antworten findet.

Unter den besten Quellen für Unterstützung sind MDN (wo Sie sich gerade befinden), [stackoverflow.com](https://stackoverflow.com/), und [caniuse.com](https://caniuse.com/).

- Um die Mozilla Developer Network (MDN) zu nutzen, führen die meisten Menschen eine Suchmaschinenabfrage der Technologie durch, zu der sie Informationen suchen möchten, zusammen mit dem Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützung Informationen, zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen möchten, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, auf dem Sie Fragen stellen und Mitentwickler Ihre Lösungen mitteilen können, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Lösung Ihres Problems zu suchen. Es ist oft nützlich, nach bestimmten Fehlermeldungen zu suchen, wenn Sie sie haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also Debuggen und Fehlerbehandlung in JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang geben und einige Ideen dazu, wie Sie mit den JavaScript-bezogenen Problemen umgehen, auf die Sie stoßen werden.

Das war's für das Modul Dynamisches Scripting mit JavaScript; herzlichen Glückwunsch, dass Sie es bis zum Ende geschafft haben! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
