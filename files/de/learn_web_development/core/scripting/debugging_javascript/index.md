---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: c2f988ec9ef7b7f50ee013ebe77a8aec3777a3aa
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema JavaScript-Debugging zurück (das wir bereits in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) behandelt haben). Hier werden wir tiefer in Techniken zur Fehlerbehebung eintauchen und uns auch ansehen, wie Sie defensiv codieren und Fehler in Ihrem Code handhaben können, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Nutzung von Entwickler-Tools des Browsers, um das auf Ihrer Seite laufende JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Nutzung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklertools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf JavaScript-Fehlertypen

Früher in diesem Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir uns allgemein die Arten von Fehlern angesehen, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können – Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige JavaScript-Fehlermeldungen zu verstehen und gezeigt, wie Sie einfache Debugging-Methoden mit [`console.log()`](/de/docs/Web/API/console/log_static) verwenden können.

In diesem Artikel werden wir etwas tiefer in die Werkzeuge eintauchen, die Ihnen zur Verfügung stehen, um Fehler aufzuspüren, und auch darauf schauen, wie Sie Fehler von vornherein vermeiden können.

## Ihr Code Linten

Sie sollten sicherstellen, dass Ihr Code zuerst gültig ist, bevor Sie versuchen, bestimmte Fehler aufzuspüren. Nutzen Sie den [Markup Validation Service](https://validator.w3.org/) des W3C, den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dadurch werden wahrscheinlich eine Reihe von Fehlern herausgeschüttelt, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr bequem, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen Ihnen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, sodass Ihnen Fehler während des Schreibens des Codes gemeldet werden. Suchen Sie nach ESLint in der Plugin- oder Erweiterungsliste Ihres Code-Editors und installieren Sie es.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (siehe auch [Troubleshooting JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Bereich definiert sind und Sie keine Konflikte zwischen an verschiedenen Stellen deklarierten Elementen haben (siehe [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug auf den Bereich, auf den es angewendet wird, und ob sein Wert das ist, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine kurze Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, bei dem ein `this`-Bereich in einer separaten Variablen gespeichert wird, und diese Variable dann in verschachtelten Funktionen verwendet wird, sodass Sie sicher sein können, dass Sie die Funktionalität auf den richtigen `this`-Bereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variable iterieren (allgemeiner formuliert: "den Bereich falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen unter Verwendung einer mit `var` definierten Variable, erstellen jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Beim Klicken soll jeder eine Warnmeldung mit seiner Nummer anzeigen (den Wert von `i` zum Zeitpunkt seiner Erstellung). Stattdessen melden alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen durchführt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion verknüpft ist, ist dann einmalig für jede Iteration. Sehen Sie sich [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version an.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet normalerweise, dass Sie verstehen, wie man _promises_ nutzt: das korrekte Verwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder das Ausführen des Codes zur Verarbeitung des Ergebnisses eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler der Promise. Siehe [Wie man promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) bietet einige nette Diskussionen über diese und weitere häufige Fehler.

## Die JavaScript-Konsole des Browsers

Die Entwickler-Tools des Browsers haben viele nützliche Funktionen, um JavaScript zu debuggen. Zumindest wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Wortwahl hängt vom Browser ab, aber sie wird etwas wie "Uncaught TypeError: heroes is not iterable" lauten, und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` (das, wie zu erwarten ist, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll) zu verwenden. Dies soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf geholt werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das funktioniert nicht.

## Die Console-API

Sie wissen vielleicht schon, was mit diesem Code nicht stimmt, aber lassen Sie uns ihn etwas weiter erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Wir werden mit der [Console-API](/de/docs/Web/API/console) beginnen, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, die eine benutzerdefinierte Nachricht in die Konsole schreibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie vor der Fehlermeldung eine neue Meldung, die in der Konsole protokolliert wird:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt eine `Promise` zurück, die erst erfüllt wird, wenn die tatsächliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir darauf warten, dass die `Promise` erfüllt wird.

### `console.error()` und Call-Stacks

Als kurzen Exkurs versuchen wir, eine andere Konsolenmethode zu verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie werden nun sehen, dass die Meldung als Fehler gemeldet wird, mit der gleichen Farbe und dem gleichen Symbol wie der nicht abgefangene Fehler darunter. Außerdem gibt es jetzt einen Erweitern/Zusammenklappen-Pfeil neben der Meldung. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile im JavaScript-File zeigt, von der der Fehler stammt. Tatsächlich hat die nicht abgefangene Fehlermeldung _auch_ dies, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler aus der `showHeroes()`-Funktion stammt, Zeile 25, wie wir bereits festgestellt haben. Wenn Sie sich Ihren Code ansehen, sehen Sie, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call-Stack** bezeichnet und können sehr nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers zu finden, der viele verschiedene Orte in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht besonders nützlich, er kann jedoch nützlich sein, um einen Call-Stack zu erzeugen, falls noch keiner vorhanden ist.

### Beheben des Fehlers

Jedenfalls, lassen Sie uns zurückkehren, um unseren Fehler zu beheben. Wir können auf die Antwort der erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an den `fetch()`-Aufruf anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen weitergeben, die ihn annehmen, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und prüfen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider haben wir **immer noch denselben Fehler**!

> [!NOTE]
> Um es zusammenzufassen: Jedes Mal, wenn etwas nicht funktioniert und ein Wert zu einem bestimmten Zeitpunkt im Code nicht das zu sein scheint, was er sein sollte, können Sie `console.log()`, `console.error()` oder eine andere ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Lassen Sie uns dieses Problem genauer mit einer anspruchsvolleren Funktion der Entwickler-Tools des Browsers untersuchen: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Registerkarte "Sources"](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht die Debugger-Registerkarte so aus:

![Firefox debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Feld zeigt den Code im ausgewählten Skript.
- Das rechte Feld zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und derzeit aktive _Scopes_.

Die Hauptfunktion solcher Werkzeuge ist die Möglichkeit, Breakpoints in den Code einzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns die Nutzung von Breakpoints erkunden:

1. Der Fehler wird in derselben Zeile wie vorher ausgelöst — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie auf die Zeilennummer im mittleren Feld, um einen Breakpoint darauf zu setzen (Sie werden ein blaues Pfeilsymbol darüber erscheinen sehen).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes an dieser Zeile pausieren. Zu diesem Zeitpunkt aktualisiert sich die rechte Seite, um Folgendes zu zeigen:

![Firefox debugger with a breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — das ist im Grunde dasselbe wie die Call-Stack, den wir früher im Abschnitt `console.error()` angesehen haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion auszulösen. An oberster Stelle haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und als zweites `onload`, das den Event-Handler speichert, der den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Gültigkeitsbereich für die Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Bereich). Jeder Bereich kann erweitert werden, um die Werte der Variablen innerhalb des Bereichs zu diesem Zeitpunkt anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Bereich — Sie können daran sehen, dass die Variable `heroes` `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem die `fetch()`-Promise erfüllt wurde. Also ist diese Promise nicht im JSON-Format: es ist ein `Response`-Objekt. Es ist ein zusätzlicher Schritt erforderlich, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Zu Beginn sehen Sie sich die Dokumentation zum [`Response`](/de/docs/Web/API/Response)-Objekt an. Falls Sie stecken bleiben, finden Sie den reparierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Die Debugger-Registerkarte hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Breakpoints und Watch Expressions. Für viele weitere Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind permissiv — Fehler und nicht erkannte Funktionen können oft aufgrund der Beschaffenheit der Sprachen behandelt werden. Zum Beispiel wird CSS nicht erkannte Eigenschaften ignorieren, und der Rest des Codes wird oft einfach funktionieren. JavaScript ist jedoch nicht so permissiv wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wird sie oft Fehler werfen.

Lassen Sie uns eine häufige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sollen verfolgt werden, indem Sie eine Kopie der untenstehenden Vorlagendatei als `handling-errors.html` auf Ihrer lokalen Maschine erstellen, die Codeschnipsel zwischen den öffnenden und schließenden `<script>`- und `</script>`-Tags hinzufügen und die Datei dann in einem Browser öffnen und die Ausgabe in der JavaScript-Konsole der Devtools ansehen.

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

### Conditionals

Eine gängige Verwendung von [JavaScript-Conditionals](/de/docs/Learn_web_development/Core/Scripting/Conditionals) besteht darin, Fehler zu behandeln. Conditionals ermöglichen es Ihnen, je nach Wert einer Variablen unterschiedlichen Code auszuführen. Oft möchten Sie dies defensiv verwenden, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler zu erfassen, wenn der Wert ein falsches Ergebnis zurückgeben würde, was später Probleme verursachen könnte.

Schauen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die als Argument die Körpergröße des Benutzers in Zoll annimmt und seine Körpergröße in Metern bis auf zwei Dezimalstellen zurückgibt. Das könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem `<script>`-Element des Beispiels eine `const` namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, übergeben Sie ihr `height` als Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einen Browser und sehen Sie sich die JavaScript-Konsole der Devtools an. Sie sollten einen Wert von `1.78` darin geloggt sehen.

5. Also funktioniert das isoliert gut. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Versuchen Sie diese Szenarien:
   - Wenn Sie den Wert von `height` in `"70"` ändern (das heißt, `70` als String ausgedrückt), sollte das Beispiel ... immer noch gut funktionieren. Das liegt daran, dass die Berechnung in der ersten Zeile den Wert in einen Zahlentyp zwingt. Das ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexerem Code können falsche Daten alle Arten von Fehlern verursachen, einige davon subtil und schwer zu erkennen!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl konvertiert werden kann, wie `"70 Zoll"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte alle Arten von Problemen verursachen, zum Beispiel, wenn Sie die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website einfügen möchten.
   - Wenn Sie den Wert von `height` vollständig entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), wird die Konsole einen Fehler wie "Uncaught ReferenceError: height is not defined" anzeigen, der Ihre Anwendung zum Stillstand bringen könnte.

   Offensichtlich sind keiner dieser Ergebnisse ideal. Wie verteidigen wir uns gegen schlechte Daten?

6. Lassen Sie uns ein Conditional in unsere Funktion einfügen, um zu überprüfen, ob die Daten gültig sind, bevor wir die Berechnung versuchen. Ersetzen Sie Ihre aktuelle Funktion durch die folgende:

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

7. Wenn Sie nun die ersten beiden Szenarien erneut ausprobieren, sehen Sie unsere etwas nützlichere Nachricht zurückgegeben, um Ihnen eine Vorstellung davon zu geben, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles einfügen, was Ihnen gefällt, einschließlich des Versuchs, Code zu schreiben, um den Wert von `num` zu korrigieren, aber das ist nicht ratsam — diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Wertes irgendwo anders im System vornehmen.

   > [!NOTE]
   > Im `if()`-Statement testen wir zunächst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden, aber wir testen auch, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um uns gegen den spezifischen Fall zu verteidigen, dass `num` auf `NaN` gesetzt ist, weil `typeof NaN` immer noch `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, erhalten Sie immer noch den "Uncaught ReferenceError: height is not defined" Fehler. Sie können das Fehlen eines Wertes nicht von innerhalb einer Funktion, die versucht, den Wert zu verwenden, beheben.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, wenn unsere Funktion einen benutzerdefinierten Fehler zurückgibt, wenn sie nicht die richtigen Daten erhält. Wir werden zuerst sehen, wie das funktioniert, und dann alle Fehler gemeinsam behandeln.

### Werfen benutzerdefinierter Fehler

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler werfen, indem Sie die [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung zusammen mit dem {{jsxref("Error.Error", "Error()")}}-Konstruktor verwenden. Lassen Sie uns das in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die Zeile `console.log()` innerhalb des `else`-Blocks der Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, stellen Sie jedoch sicher, dass `num` auf einen schlechten (d.h. keine Zahl) Wert gesetzt ist. Diesmal sollten Sie Ihren benutzerdefinierten Fehler sehen, der geworfen wird, zusammen mit einem nützlichen Call-Stack, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (beachten Sie jedoch, dass die Nachricht immer noch besagt, dass der Fehler "un-caught", oder "un-handled" ist). OK, Fehler sind ärgerlich, aber das ist weitaus nützlicher, als die Funktion erfolgreich auszuführen und einen Nicht-Zahlen-Wert zurückzugeben, der später Probleme verursachen könnte.

Wie handhaben wir also alle diese Fehler?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell zum Handhaben von Fehlern entwickelt. Sie hat folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Im `try`-Block versuchen Sie, einen Code auszuführen. Wenn dieser Code ohne Fehler ausgeführt wird, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wird jedoch ein Fehler geworfen, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt gewährt, das den Fehler darstellt und Ihnen ermöglicht, Code zu dessen Behandlung auszuführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Linie, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen nun unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und behandeln alle Fehler, die sie zurückgibt, innerhalb eines entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren Sie, und Sie sollten nun zwei Dinge sehen:
   - Die Fehlermeldung und den Call-Stack wie zuvor, aber diesmal ohne einen Etikett von "uncaught" oder "unhandled".
   - Die geloggte Nachricht "Insert code to handle the error".

3. Aktualisieren Sie jetzt `num` erneut auf einen guten (Zahlen-) Wert, und Sie sehen das Ergebnis der Berechnung geloggt, ohne eine Fehlermeldung.

Das ist von Bedeutung — alle geworfenen Fehler sind nun nicht mehr unhandled, sodass sie die Anwendung nicht mehr zum Absturz bringen. Sie können jeden gewünschten Code ausführen, um den Fehler zu behandeln. Oben loggen wir nur eine Nachricht, aber zum Beispiel, könnten Sie jede Funktion aufrufen, die früher ausgeführt wurde, um den Benutzer zu bitten, seine Größe einzugeben, diesmal mit der Aufforderung, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach Art des zurückgegebenen Fehlers unterschiedlichen Fehlerbehandlungscode auszuführen.

### Funktionsdetektion

Funktionsdetektion ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht von allen Browsern unterstützt werden. Testen Sie die Funktion, und führen Sie dann bedingt Code aus, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die dies nicht tun, ein akzeptables Erlebnis zu bieten. Als kurzes Beispiel: Die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt) hat einen Haupteinstiegspunkt für ihre Nutzung — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur verwenden, wie sie zuvor zu sehen war:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Weitere Beispiele zur Funktionsdetektion finden Sie in [Alternativen zum UA-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit JavaScript (und HTML und CSS!) stoßen werden, weshalb das Wissen, wie man online Antworten findet, von unschätzbarem Wert ist.

Zu den besten Quellen für Unterstützungsinformationen gehören MDN (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um die Mozilla Developer Network (MDN) zu nutzen, führen die meisten Menschen eine Suchanfrage mit der Technologie durch, zu der sie Informationen suchen, plus dem Begriff "mdn", zum Beispiel: "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen, zusammen mit ein paar nützlichen externen Ressourcenlinks. Zum Beispiel sehen Sie <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Website, auf der Sie Fragen stellen und sich von anderen Entwicklern Lösungen teilen lassen können, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Es ist ratsam zu prüfen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus in HTML-Dialog deaktivieren" gesucht und sehr schnell eine Lösung gefunden: [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Darüber hinaus versuchen Sie, Ihre bevorzugte Suchmaschine zu nutzen, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach bestimmten Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler hatten wahrscheinlich dieselben Probleme wie Sie.

## Zusammenfassung

Das war's zum Thema JavaScript-Debugging und Fehlerbehandlung. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang und einige Ideen geben, wie Sie mit den JavaScript-bezogenen Problemen umgehen können, auf die Sie stoßen werden.

Das war der dynamische Scripting-Abschnitt mit JavaScript; herzlichen Glückwunsch zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
