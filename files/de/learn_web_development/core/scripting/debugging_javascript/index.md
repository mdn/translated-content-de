---
title: Debuggen und Fehlerbehandlung in JavaScript
short-title: Debuggen und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 418fefaa02f8e1ea53d53cb6fc510a4dc4100dc5
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debuggen von JavaScript zurück (das wir in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) zunächst behandelt haben). Hier gehen wir tiefer auf Techniken zur Fehlersuche ein und erklären, wie Sie defensiv programmieren und Fehler in Ihrem Code handhaben können, um von vornherein Probleme zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Browser-Entwicklertools, um das JavaScript auf Ihrer Seite zu inspizieren und die erzeugten Fehler zu sehen.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Erweitertes Debuggen von JavaScript mit Browser-Entwicklertools.</li>
          <li>Fehlerbehandlung mit <code>Bedingungen</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf JavaScript-Fehlertypen

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir uns die Arten von Fehlern angesehen, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und gezeigt, wie man einfaches Debuggen mit [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen durchführt.

In diesem Artikel schauen wir uns die verfügbaren Werkzeuge zur Fehlersuche genauer an und untersuchen, wie man Fehler von vornherein vermeiden kann.

## Ihr Code-Checken

Sie sollten Ihren Code validieren, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup-Validierungsdienst des W3C](https://validator.w3.org/), den [CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich einige Fehler aufdecken, die Sie dann beheben können, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Plugins für Code-Editoren

Es ist nicht sehr bequem, Ihren Code immer wieder in eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen die Installation eines Linter-Plugins in Ihrem Code-Editor, um Fehler beim Schreiben Ihres Codes zu melden. Suchen Sie in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint und installieren Sie es.

## Häufige JavaScript-Probleme

Es gibt mehrere häufige JavaScript-Probleme, auf die Sie achten sollten:

- Grundlegende Syntax- und Logikprobleme (sehen Sie sich erneut [Fehlersuche bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Sicherstellen, dass Variablen usw. im richtigen Gültigkeitsbereich definiert sind und dass Sie keine Konflikte zwischen an verschiedenen Orten deklarierten Elementen verursachen (siehe [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung bezüglich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug auf den Gültigkeitsbereich, auf den es angewendet wird, und ob sein Wert der von Ihnen beabsichtigte ist. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) lesen, um eine leichte Einführung zu erhalten; Sie sollten sich auch Beispiele wie [dieses](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, das ein typisches Muster zeigt, bei dem ein `this`-Gültigkeitsbereich in einer separaten Variablen gespeichert wird, die dann in verschachtelten Funktionen verwendet wird, damit Sie sicher sein können, dass Sie die Funktionalität auf den richtigen `this`-Gültigkeitsbereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner gesagt, "den Gültigkeitsbereich falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer Variablen, die mit `var` definiert ist, und erstellen jedes Mal einen Absatz und fügen einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Bei einem Klick soll jeder ein Benachrichtigungsfenster mit seiner Nummer (dem Wert von `i` zum Zeitpunkt der Erstellung) anzeigen. Stattdessen melden alle `i` als 11 — weil die `for`-Schleife all ihre Iterationen beendet, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion assoziiert ist, ist dann für jede Iteration einzigartig. Sehen Sie sich [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version an.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor Sie versuchen, die zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel zu verstehen, wie man _Promises_ verwendet: durch angemessenes Verwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder indem der Code, der das Ergebnis eines asynchronen Aufrufs verarbeitet, im {{jsxref("Promise.then()", "then()")}}-Handler des Promises ausgeführt wird. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler von JavaScript-Entwicklern](https://www.toptal.com/developers/javascript/10-most-common-javascript-mistakes) enthält einige nette Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Die Entwicklertools des Browsers haben viele nützliche Funktionen zum Debuggen von JavaScript. Zu Beginn berichtet die JavaScript-Konsole Fehler in Ihrem Code.

Machen Sie sich eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, werden Sie eine Fehlermeldung sehen. Die genaue Wortwahl ist browserabhängig, aber sie wird etwa so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (was, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dies soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Dieser schlägt jedoch fehl.

## Die Konsole-API

Sie wissen vielleicht bereits, was mit diesem Code falsch ist, aber lassen Sie uns untersuchen, wie Sie ihn analysieren könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet mehrere Funktionen; Sie haben bereits [`console.log()`](/de/docs/Web/API/console/log_static) kennengelernt, das eine benutzerdefinierte Nachricht in die Konsole druckt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal, bevor die Fehlermeldung erscheint, sehen Sie eine neue Nachricht, die in der Konsole protokolliert wurde:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die Funktion `fetch()` ist asynchron: sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Aufruf-Stapel

Als ein kurzer Exkurs versuchen wir, eine andere Konsolenmethode zu verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser; Sie sehen jetzt die Nachricht als Fehler gemeldet, mit der gleichen Farbe und dem gleichen Symbol wie der unten nicht gefangene Fehler. Außerdem sehen Sie einen Auf-/Zu-Klapp-Pfeil neben der Nachricht. Wenn Sie diesen drücken, sehen Sie eine einzelne Zeile, die die Zeile in der JavaScript-Datei angibt, in der der Fehler ursprünglich aufgetreten ist. Tatsächlich hat die Zeile des nicht gefangenen Fehlers _ebenfalls_ dies, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Dies bedeutet, dass der Fehler durch die Funktion `showHeroes()` verursacht wird, Zeile 25, wie wir bereits früher festgestellt haben. Wenn Sie sich Ihren Code ansehen, werden Sie sehen, dass der anonyme Aufruf in Zeile 10 `showHeroes()` aufruft. Diese Zeilen werden als **Aufruf-Stapel** bezeichnet und können sehr nützlich sein, um die Ursache eines Fehlers, der mehrere verschiedene Stellen in Ihrem Code betrifft, zurückzuverfolgen.

Der Aufruf von `console.error()` ist in diesem Fall nicht besonders nützlich, aber er kann nützlich sein, um einen Aufruf-Stapel zu erzeugen, wenn einer nicht bereits verfügbar ist.

### Den Fehler beheben

Kehren wir zu dem Versuch zurück, unseren Fehler zu beheben. Wir können auf die Antwort vom erfüllten `Promise` zugreifen, indem wir die Methode {{jsxref("Promise.prototype.then()", "then()")}} an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwort-Wert in die Funktionen übergeben, die ihn akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern Sie und aktualisieren Sie, und sehen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider haben wir **immer noch den gleichen Fehler**!

> [!NOTE]
> Zusammengefasst: Immer, wenn etwas nicht funktioniert und ein Wert nicht zu sein scheint, was er an einer bestimmten Stelle im Code sein sollte, können Sie `console.log()`, `console.error()` oder eine andere ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Untersuchen wir dieses Problem weiter mit einem fortschrittlicheren Werkzeug der Browser-Entwicklertools: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Quellen-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), etc.

In Firefox sieht der Debugger-Tab so aus:

![Firefox debugger](debugger-tab.png)

- Links können Sie das Script auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Script.
- Das rechte Panel zeigt nützliche Details über die aktuelle Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Werkzeuge ist die Fähigkeit, Breakpoints in den Code einzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung im aktuellen Zustand prüfen und sehen, was vor sich geht.

Lassen Sie uns das Verwenden von Breakpoints erkunden:

1. Der Fehler wird in der gleichen Zeile wie zuvor geworfen — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie auf die Zeilennummer im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil, der über der Zeile erscheint).
2. Aktualisieren Sie die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser stoppt die Ausführung des Codes in dieser Zeile. An diesem Punkt wird die rechte Seite aktualisiert, um Folgendes zu zeigen:

![Firefox debugger with a breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde das gleiche wie der Aufruf-Stapel, den wir zuvor im Abschnitt `console.error()` betrachtet haben. _Call Stack_ zeigt eine Liste von Funktionen, die aufgerufen wurden, um die aktuelle Funktion zu initiieren. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und an zweiter Stelle `onload`, die den Ereignishandler speichert, der die Funktion `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Gültigkeitsbereich für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Gültigkeitsbereich). Jeder Gültigkeitsbereich kann erweitert werden, um die Werte der Variablen innerhalb des Gültigkeitsbereichs zu zeigen, wenn die Ausführung gestoppt ist.

Hier können wir einige sehr nützliche Informationen herausfinden:

1. Erweitern Sie den `showHeroes`-Gültigkeitsbereich — Sie können daraus sehen, dass die `heroes`-Variable `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `Promise` von `fetch()` erfüllt wurde. Dieses `Promise` liegt nicht im JSON-Format vor: Es ist ein `Response`-Objekt. Ein zusätzlicher Schritt ist erforderlich, um den Inhalt der Antwort im JSON-Format abzurufen.

Wir würden gerne, dass Sie versuchen, dieses Problem selbst zu lösen. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie steckenbleiben, können Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die hier nicht behandelt werden. Zum Beispiel, bedingte Breakpoints und Watch-Ausdrücke. Für wesentlich mehr Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Fehlerbehandlung in Ihrem JavaScript-Code

HTML und CSS sind permissiv — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen gehandhabt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften und der Rest des Codes funktioniert oft einfach. JavaScript ist jedoch nicht so permissiv wie HTML und CSS; wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wird dies oft zu Fehlern führen.

Lassen Sie uns eine gängige Strategie zur Fehlerbehandlung in Ihrem JavaScript-Code erkunden. Die folgenden Abschnitte sind dafür gedacht, dass Sie eine Kopie der Vorlagendatei, die unten als `handling-errors.html` gezeigt wird, auf Ihrem lokalen Rechner erstellen und die Codeschnipsel zwischen den öffnenden und schließenden `<script>`- und `</script>`-Tags hinzufügen, und dann die Datei in einem Browser öffnen und die Ausgabe in der JavaScript-Konsole der Entwicklertools betrachten.

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

### Bedingungen

Ein häufiger Einsatz von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist die Behandlung von Fehlern. Bedingungen ermöglichen es Ihnen, verschiedenen Code abhängig vom Wert einer Variablen auszuführen. Oft möchten Sie dies defensiv verwenden, um das Auftreten eines Fehlers zu vermeiden, wenn der Wert nicht existiert oder den falschen Typ hat, oder um einen Fehler abzufangen, wenn der Wert dazu führen könnte, dass ein falsches Ergebnis zurückgegeben wird, was später Probleme verursachen könnte.

Schauen wir uns ein Beispiel an. Nehmen wir an, wir haben eine Funktion, die die Größe des Benutzers in Zoll als Argument nimmt und seine Größe in Metern auf zwei Dezimalstellen angibt. Dies könnte folgendermaßen aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie im `<script>`-Element Ihres Beispiel-Dokuments eine `const`-Variable namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, indem Sie ihr die Konstante `height` als Argument übergeben, und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und sehen Sie sich die JavaScript-Konsole der Entwicklertools an. Sie sollten einen Wert von `1.78` sehen, der dort angezeigt wird.

5. Dies funktioniert in diesem isolierten Fall einwandfrei. Aber was passiert, wenn die bereitgestellten Daten fehlen oder falsch sind? Probieren Sie diese Szenarien aus:
   - Wenn Sie den `height`-Wert in `"70"` ändern (also `70` als String ausgedrückt), sollte das Beispiel ... immer noch funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile den Wert in einen numerischen Datentyp umwandelt. Dies ist in einem so einfachen Fall wie diesem in Ordnung, aber in komplexerem Code können falsche Daten alle möglichen Fehler verursachen, einige subtil und schwer zu erkennen!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]` oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte alle möglichen Probleme verursachen, z. B. wenn Sie die Größe des Benutzers irgendwo in der Benutzeroberfläche der Website einfügen möchten.
   - Wenn Sie den `height`-Wert ganz entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), zeigt die Konsole einen Fehler nach dem Muster "Uncaught ReferenceError: height is not defined" an, der Ihr Anwendung zum Stillstand bringen könnte.

   Offensichtlich sind keine dieser Ergebnisse optimal. Wie verteidigen wir uns gegen fehlerhafte Daten?

6. Lassen Sie uns eine Bedingung in unsere Funktion einfügen, um zu prüfen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion durch die folgende zu ersetzen:

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

7. Wenn Sie jetzt die ersten beiden Szenarien wieder testen, sehen Sie unsere etwas nützlichere Nachricht, die Ihnen eine Vorstellung davon gibt, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles hineinschreiben, was Sie möchten, einschließlich des Versuchs, den Wert von `num` zu korrigieren, aber dies wird nicht empfohlen — diese Funktion hat ein einfaches Ziel, und Sie sollten die Korrektur des Wertes an anderer Stelle im System behandeln.

   > [!NOTE]
   > In der `if()`-Anweisung testen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden und dann testen, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um den spezifischen Fall zu verteidigen, in dem `num` auf `NaN` gesetzt ist, da `typeof NaN` trotzdem `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut testen, wird immer noch der Fehler "Uncaught ReferenceError: height is not defined" angezeigt. Sie können das Fehlen eines Wertes nicht aus der Funktion heraus beheben, die versucht, den Wert zu verwenden.

Wie gehen wir damit um? Es ist besser, unsere Funktion so zu gestalten, dass sie einen benutzerdefinierten Fehler zurückgibt, wenn die richtigen Daten nicht geliefert werden. Wir werden uns zuerst ansehen, wie man das macht, und dann alle Fehler gemeinsam behandeln.

### Benutzerdefinierte Fehler auslösen

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung und dem {{jsxref("Error.Error", "Error()")}}-Konstruktor auslösen. Sehen wir uns das in Aktion an.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile im `else`-Block Ihrer Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. nicht-numerischen) Wert gesetzt ist. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler sehen, der zusammen mit einem nützlichen Aufruf-Stapel geworfen wird, der Ihnen hilft, die Quelle des Fehlers ausfindig zu machen (obwohl die Nachricht immer noch besagt, dass der Fehler "uncaught" oder "unhandled" ist). Okay, Fehler sind ärgerlich, aber dies ist weitaus nützlicher als die Funktion erfolgreich zu führen und einen Nicht-Zahlenwert zurückzugeben, der später Probleme verursachen könnte.

Wie behandeln wir also all diese Fehler dann?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell dafür konzipiert, Fehler zu behandeln. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Im `try`-Block versuchen Sie, etwas Code auszuführen. Wenn dieser Code fehlerfrei läuft, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler auftritt, wird der `catch`-Block ausgeführt, der Zugriff auf das geschaffene {{jsxref("Error")}}-Objekt bietet, das den Fehler repräsentiert und es Ihnen erlaubt, Code zur Behandlung des Fehlers auszuführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und behandeln alle Fehler, die sie zurückgibt, innerhalb eines entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren Sie, und Sie sollten jetzt zwei Dinge sehen:
   - Die Fehlermeldung und der Aufruf-Stapel sind wie zuvor, aber dieses Mal ohne das Label "uncaught" oder "unhandled".
   - Die geloggte Nachricht "Fügen Sie Code hinzu, um den Fehler zu behandeln".

3. Versuchen Sie jetzt, `num` auf einen guten (numerischen) Wert zu setzen, und Sie werden das Ergebnis der Berechnung protokolliert sehen, ohne Fehlermeldung.

Dies ist signifikant — alle ausgelösten Fehler werden jetzt behandelt, sodass sie die Anwendung nicht zum Absturz bringen. Sie können beliebigen Code ausführen, um den Fehler zu beheben. Oben protokollieren wir eine einfache Nachricht, aber zum Beispiel könnten Sie die Funktion aufrufen, die den Benutzer auffordert, seine Größe erneut einzugeben, dieses Mal jedoch die Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach Fehlertyp unterschiedlichen Fehlerbehandlungscode auszuführen.

### Feature-Erkennung

Die Feature-Erkennung ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Sie können auf die Funktion testen und dann bedingt Code ausführen, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die das nicht tun, ein akzeptables Erlebnis zu bieten. Als schnelles Beispiel hat die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser ausgeführt wird) einen Haupteinstiegspunkt — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur wie zuvor verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie können einige weitere Beispiele zur Feature-Erkennung in [Alternativen zum UA-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing) finden.

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit JavaScript (und HTML und CSS!) begegnen werden, was das Wissen um das Finden von Antworten online wertvoll macht.

Unter den besten Quellen für Unterstützung gehören MDN, [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um MDN zu verwenden, führen die meisten Menschen eine Suchmaschinensuche nach der Technologie durch, über die sie Informationen suchen, plus den Begriff "mdn", z. B. "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Sehen Sie z. B. <https://caniuse.com/#search=video> (Sie müssen das Feature, das Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Site, auf der Sie Fragen stellen und Mitentwickler Ihre Lösungen teilen können, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Suchen Sie nach einer Antwort auf Ihre Frage, um zu sehen, ob bereits eine existiert, bevor Sie eine neue Frage posten. Zum Beispiel haben wir auf SO nach "deaktivieren des Fokus auf HTML-Dialog" gesucht und sehr schnell [Fokussierungsautomatismus von showModal mithilfe von HTML-Attributen deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also das Debuggen und die Fehlerbehandlung in JavaScript. Einfach, nicht wahr? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start und einige Ideen geben, wie Sie die JavaScript-bezogenen Probleme, denen Sie begegnen werden, angehen können.

Das war es für das Modul Dynamisches Scripting mit JavaScript; Herzlichen Glückwunsch, dass Sie das Ende erreicht haben! Im nächsten Modul helfen wir Ihnen, [JavaScript-Frameworks und -Bibliotheken](/de/docs/Learn_web_development/Core/Frameworks_libraries) zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
