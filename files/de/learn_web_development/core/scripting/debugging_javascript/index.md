---
title: JavaScript Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 08647988c5008504777a4da17a4c028300731524
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debugging von JavaScript zurück (das wir erstmalig in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier gehen wir tiefer auf Techniken zur Fehlerverfolgung ein und erklären, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a> sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Entwickler-Tools im Browser, um das JavaScript auf Ihrer Seite zu überprüfen und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklungstools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir uns allgemein die Arten von Fehlern angesehen, die in JavaScript-Programmen auftreten können und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und gezeigt, wie Sie mit [`console.log()`](/de/docs/Web/API/console/log_static) grundlegendes Debugging durchführen können.

In diesem Artikel werfen wir einen genaueren Blick auf die Werkzeuge, die zur Fehlerverfolgung zur Verfügung stehen, und betrachten auch Möglichkeiten, um Fehler von vornherein zu verhindern.

## Linting Ihres Codes

Sie sollten Ihren Code zuerst validieren, bevor Sie versuchen, spezifische Fehler zu finden. Nutzen Sie den [Markup Validation Service](https://validator.w3.org/), den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) der W3C und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich einige Fehler aufdecken, die Sie dann beheben können, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder in eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, um Fehler direkt beim Schreiben des Codes zu melden. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt mehrere häufige JavaScript-Probleme, auf die Sie achten sollten, wie z.B.:

- Grundlegende Syntax- und Logikprobleme (siehe [Fehlersuche in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) erneut).
- Sicherstellen, dass Variablen usw. im richtigen Bereich definiert sind und Sie nicht in Konflikte zwischen in verschiedenen Bereichen deklarierten Elementen geraten (siehe [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug auf welchen Bereich es sich bezieht und ob sein Wert das ist, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine grundlegende Einführung lesen; Sie sollten auch Beispiele studieren, wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143), das ein typisches Muster zeigt, bei dem ein `this`-Bereich in einer separaten Variablen gespeichert und dann in verschachtelten Funktionen verwendet wird, um sicherzustellen, dass Sie Funktionalität auf den richtigen `this`-Bereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner, "den Bereich falsch zu verstehen").

> [!CALLOUT]
> Zum Beispiel: In [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)) durchlaufen wir 10 Iterationen mit einer mit `var` deklarierten Variablen, erstellen jedes Mal einen Paragraphen und fügen einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Beim Klicken soll jeder der Paragraphen eine Warnmeldung mit seiner Nummer anzeigen (dem Wert von `i` zur Erstellungszeit). Stattdessen berichten alle Paragraphen `i` als 11 — weil die `for`-Schleife alle Iterationen durchläuft, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der der Funktion zugeordnet ist, ist dann für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (sehen Sie auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) an) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die Werte zu verwenden, die sie zurückgeben. Dies bedeutet üblicherweise, dass Sie wissen müssen, wie _Promises_ verwendet werden: Verwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) richtig oder Ausführen des Codes zur Bearbeitung des Ergebnisses eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler des Promises. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung zu diesem Thema.

> [!NOTE]
> [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/developers/javascript/10-most-common-javascript-mistakes) bietet einige gute Diskussionsbeiträge zu diesen häufigen Fehlern und mehr.

## Die JavaScript-Konsole im Browser

Entwickler-Tools im Browser haben viele nützliche Funktionen zum Debuggen von JavaScript. Zum einen wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Wortwahl ist browserabhängig, aber sie wird ungefähr so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, lautet der relevante Abschnitt dieses:

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

Allerdings schlägt dies fehl.

## Die Console API

Sie wissen vielleicht bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns einen Blick werfen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console)-API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet mehrere Funktionen; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, das eine benutzerdefinierte Nachricht in der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie dies:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal, vor der Fehlermeldung, sehen Sie eine neue Nachricht, die in die Konsole protokolliert wurde:

```plain
Response value: [object Promise]
```

Die Ausgabe von `console.log()` zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die eigentliche Antwort aus dem Netzwerk eingegangen ist. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Aufrufstapel

Als kurzen Exkurs versuchen wir, eine andere Konsolenmethode zu verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code:

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser; Sie werden nun sehen, dass die Meldung als Fehler gemeldet wird, mit derselben Farbe und demselben Symbol wie der nicht abgefangene Fehler darunter. Darüber hinaus werden Sie neben der Meldung einen Erweiterungs-/Reduzierpfeil sehen. Wenn Sie darauf drücken, sehen Sie eine einzelne Zeile, die die Zeile in der JavaScript-Datei angibt, in der der Fehler entstanden ist. Tatsächlich hat auch die Zeile des nicht abgefangenen Fehlers das, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler durch die `showHeroes()`-Funktion auf Zeile 25 verursacht wird, wie wir bereits vorher erwähnt haben. Wenn Sie sich Ihren Code ansehen, werden Sie sehen, dass der anonyme Aufruf in Zeile 10 `showHeroes()` aufruft. Diese Zeilen werden als **Aufrufstapel** bezeichnet und können nützlich sein, wenn man versucht, die Quelle eines Fehlers zu finden, der mehrere verschiedene Positionen im Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht besonders nützlich, kann jedoch nützlich sein, um einen Aufrufstapel zu generieren, wenn noch keiner verfügbar ist.

### Fehlerbehebung

Lassen Sie uns sowieso zu unserem Fehler zurückkehren und versuchen, ihn zu beheben. Wir können auf die Antwort aus dem erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen einfügen, die ihn akzeptieren, wie folgt:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie die Datei, und sehen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider haben wir **immer noch denselben Fehler**!

> [!NOTE]
> Zusammengefasst: Jedes Mal, wenn etwas nicht funktioniert und ein Wert an einem bestimmten Punkt im Code nicht das zu sein scheint, was er sein sollte, können Sie `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwenden des JavaScript-Debuggers

Lassen Sie uns dieses Problem weiter untersuchen, indem wir eine ausgefeiltere Funktion der Entwickler-Tools des Browsers verwenden: den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Tools sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)) usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur ein Skript).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Tools ist die Möglichkeit, Breakpoints im Code hinzuzufügen — das sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird an derselben Stelle wie vorher verursacht — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie im mittleren Panel auf die Zeilennummer, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil über der Zahl).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung von dem Code in dieser Zeile unterbrechen. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert und zeigt die folgenden Details an:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des Breakpoints, den Sie festgelegt haben.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde dasselbe wie der Aufrufstapel, den wir zuvor im Abschnitt `console.error()` betrachtet haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion hervorzurufen. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns derzeit befinden, und als Zweites `onload`, die die Ereignishandlerfunktion speichert, die den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Scope für die Funktion, die wir betrachten. Wir haben nur drei davon — `showHeroes`, `block` und `Window` (der globale Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen innerhalb des Scopes anzuzeigen, wenn die Ausführung angehalten ist.

Wir können einige sehr nützliche Informationen hier finden:

1. Erweitern Sie den `showHeroes`-Scope — Sie können sehen, dass die Variable heroes `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument der Funktion `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise liegt nicht in JSON-Format vor: Es handelt sich um ein `Response`-Objekt. Es ist ein zusätzlicher Schritt erforderlich, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, werfen Sie einen Blick in die Dokumentation des [`Response`](/de/docs/Web/API/Response)-Objekts. Wenn Sie nicht weiterkommen, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die hier nicht behandelt werden. Zum Beispiel konditionale Breakpoints und Beobachtungsausdrücke. Für viele weitere Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind tolerant — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen gehandhabt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der restliche Code funktioniert oft einfach. JavaScript ist jedoch nicht so tolerant wie HTML und CSS; wenn die JavaScript-Engine auf Fehler oder unerkannten Syntax stößt, wirft sie oft Fehler.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sind so gestaltet, dass sie durch das Erstellen einer Kopie der unten gezeigten Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Computer verfolgt werden, indem Sie die Codeschnipsel zwischen den öffnenden und schließenden `<script>` und `</script>`-Tags hinzufügen und dann die Datei in einem Browser öffnen und die Ausgabe in der JavaScript-Konsole der Entwickler-Tools betrachten.

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

Eine häufige Verwendung von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) besteht darin, Fehler zu behandeln. Bedingte Anweisungen ermöglichen es Ihnen, unterschiedlichen Code abhängig vom Wert einer Variable auszuführen. Oft möchten Sie dies defensiv verwenden, um zu vermeiden, dass ein Fehler ausgelöst wird, wenn der Wert nicht vorhanden ist oder nicht den richtigen Typ hat, oder um einen Fehler abzufangen, wenn der Wert ein falsches Ergebnis zurückgeben würde, was später zu Problemen führen könnte.

Schauen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die die Körpergröße eines Benutzers in Zoll als Argument nimmt und seine Größe in Metern auf 2 Dezimalstellen genau zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie im `<script>`-Element Ihres Beispiels eine `const` namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, übergeben Sie der das `height`-Konstante als ihr Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und schauen Sie sich die JavaScript-Konsole der Entwickler-Tools an. Sie sollten einen Wert von `1.78` in der Konsole sehen.

5. Das funktioniert also ohne Probleme. Aber was passiert, wenn die bereitgestellten Daten fehlen oder falsch sind? Probieren Sie die folgenden Szenarien aus:
   - Wenn Sie den `height`-Wert auf `"70"` ändern (also `70` als String ausgedrückt), sollte das Beispiel ... immer noch einwandfrei funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile den Wert zum Zahlentyp zwingt. Das ist in einem einfachen Fall wie diesem in Ordnung, aber bei komplexerem Code können falsche Daten zu allerlei Fehlern führen, einige subtil und schwierig zu erkennen!
   - Wenn Sie `height` auf einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte allerlei Probleme verursachen, zum Beispiel, wenn Sie die Größe des Benutzers irgendwo in der Benutzeroberfläche der Website einfügen wollen.
   - Wenn Sie den `height`-Wert ganz entfernen (kommentieren Sie die Zeile aus, indem Sie `//` am Anfang der Zeile hinzufügen), wird die Konsole eine Fehlermeldung in der Art von "Uncaught ReferenceError: height is not defined" anzeigen, was dazu führen könnte, dass Ihre Anwendung zum Stillstand kommt.

   Offensichtlich sind diese Ergebnisse nicht optimal. Wie schützen wir uns gegen fehlerhafte Daten?

6. Lassen Sie uns eine Bedingung in unserer Funktion hinzufügen, um zu testen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Ersetzen Sie Ihre aktuelle Funktion durch folgende:

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

7. Wenn Sie jetzt die ersten zwei Szenarien erneut testen, sehen Sie unsere etwas nützlichere Nachricht, die Ihnen sagt, was zu tun ist, um das Problem zu beheben. Sie könnten dort alles hineinschreiben, was Sie möchten, einschließlich dem Versuch, Code zur Korrektur des `num`-Wertes auszuführen, aber dies wird nicht empfohlen — diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Wertes irgendwo anders im System vornehmen.

   > [!NOTE]
   > Im `if()`-Statement testen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden, und dann testen wir, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um sich gegen den spezifischen Fall von `num` als `NaN` zu verteidigen, da `typeof NaN` immer noch `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut testen, erhalten Sie immer noch die "Uncaught ReferenceError: height is not defined" Fehleranzeige. Sie können das Fehlen eines Wertes nicht innerhalb einer Funktion beheben, die versucht, den Wert zu verwenden.

Wie gehen wir damit um? Es ist besser, unsere Funktion dazu zu bringen, einen benutzerdefinierten Fehler zurückzugeben, wenn sie nicht die richtigen Daten erhält. Zuerst zeigen wir, wie das geht, und dann behandeln wir alle Fehler zusammen.

### Benutzerdefinierte Fehler auswerfen

Sie können an jedem Punkt in Ihrem Code einen benutzerdefinierten Fehler mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung in Verbindung mit dem {{jsxref("Error.Error", "Error()")}} Konstruktor auslösen. Lassen Sie uns dies in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile innerhalb des `else`-Blocks durch folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. nicht nummerischen) Wert gesetzt ist. Dieses Mal sollten Sie sehen, dass Ihr benutzerdefinierter Fehler ausgegeben wird, zusammen mit einem nützlichen Aufrufstapel, um Ihnen zu helfen, die Quelle des Fehlers zu finden (obwohl die Meldung immer noch sagt, dass der Fehler "uncaught" oder "unhandled" ist). Okay, Fehler sind zwar ärgerlich, aber das ist viel nützlicher, als die Funktion erfolgreich auszuführen und einen nicht nummerischen Wert zurückzugeben, der später Probleme verursachen könnte.

Wie gehen wir dann mit all diesen Fehlern um?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell dafür ausgelegt, Fehler zu behandeln. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Im `try`-Block versuchen Sie, etwas Code auszuführen. Wenn dieser Code ohne das Auftreten eines Fehlers ausgeführt wird, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler auftritt, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt bietet, das den Fehler darstellt, und Sie können Code zur Behebung des Fehlers ausführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die Funktion `inchesToMeters()` am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und behandeln alle damit zurückgegebenen Fehler in einem entsprechenden `catch`-Block.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren Sie die Seite, und Sie sollten nun zwei Dinge sehen:
   - Die Fehlermeldung und der Aufrufstapel sind wie zuvor, aber dieses Mal ohne das Label "uncaught" oder "unhandled".
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Versuchen Sie nun, `num` auf einen gültigen (nummerischen) Wert zu ändern, und Sie werden das Ergebnis der Berechnung protokolliert sehen, ohne Fehlermeldung.

Dies ist von Bedeutung — alle geworfenen Fehler werden jetzt behandelt, sodass sie die Anwendung nicht zum Absturz bringen. Sie können jeden beliebigen Code ausführen, um den Fehler zu behandeln. Oben protokollieren wir eine grundlegende Nachricht, aber Sie könnten zum Beispiel die Funktion aufrufen, die den Benutzer erneut nach seiner Größe fragt, aber dieses Mal bitten, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach Fehlercode unterschiedliche Fehlerbehandlungscodes auszuführen.

### Funktionsdetektion

Die Funktionsdetektion ist nützlich, wenn Sie planen, neue JavaScript-Features zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Sie können die Funktion testen und dann bedingt Code ausführen, um ein akzeptables Erlebnis in Browsern zu bieten, die die Funktion unterstützen, und in solchen, die es nicht tun. Als kurzes Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) einen Haupteinstiegspunkt für die Nutzung — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Somit können Sie testen, ob der Browser Geolocation unterstützt, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie früher gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden einige weitere Beispiele für Funktionsdetektion in [Alternativen zur UA-Erkennung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit JavaScript (und HTML und CSS!) stoßen werden, sodass Kenntnisse darüber, wie man Antworten online findet, von unschätzbarem Wert sind.

Zu den besten Quellen für Unterstützungsinformationen gehören MDN, [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um MDN zu nutzen, machen die meisten Leute eine Suchmaschinen-Suche nach der Technologie, über die sie Informationen erhalten möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützungstinformationen, zusammen mit einigen nützlichen externen Ressourcelinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen das gesuchte Feature in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Site, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen mit Ihnen teilen, vorherige Beiträge nachschlagen und anderen Entwicklern helfen können. Suchen Sie nach einer Antwort auf Ihre Frage, um zu sehen, ob bereits eine existiert, bevor Sie eine neue Frage stellen. Zum Beispiel: Wir haben auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell die Antwort [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon: Versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft hilfreich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie diese haben — andere Entwickler werden wahrscheinlich die gleichen Probleme wie Sie gehabt haben.

## Zusammenfassung

Das war also JavaScript-Debugging und Fehlerbehandlung. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang und einige Ideen geben, wie Sie mit JavaScript-bezogenen Problemen umgehen können, denen Sie begegnen werden.

Das war's für das Modul "Dynamisches Scripting mit JavaScript"; herzlichen Glückwunsch, dass Sie das Ende erreicht haben! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
