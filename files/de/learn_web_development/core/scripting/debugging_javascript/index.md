---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 5310a5bff0e1f3e2dfafa44bc2aadbb39e1c4673
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debugging von JavaScript zurück (was wir zuerst in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)) behandelt haben. Hier werden wir tiefer in Techniken zur Fehlerverfolgung eintauchen und betrachten, wie man defensiv programmiert und Fehler in Ihrem Code behandelt, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen</a>, Vertrautheit mit den JavaScript-Grundlagen, die in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Entwicklerwerkzeugen im Browser, um das auf Ihrer Seite ausgeführte JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Erweitertes JavaScript-Debugging mit Browser-Devtools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Zusammenfassung der Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir allgemein betrachtet, welche Arten von Fehlern in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können – Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige gängige Arten von JavaScript-Fehlermeldungen zu verstehen und gezeigt, wie man einfaches Debugging mit [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen durchführt.

In diesem Artikel gehen wir etwas tiefer auf die Werkzeuge ein, die Ihnen zur Verfügung stehen, um Fehler zu finden, und betrachten auch Möglichkeiten, um Fehler von vornherein zu verhindern.

## Ihr Code Linten

Sie sollten sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler zu verfolgen. Nutzen Sie den W3C [Markup Validation Service](https://validator.w3.org/), den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Parser wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Wir empfehlen die Installation eines Linter-Plugins in Ihrem Code-Editor, damit Ihnen Fehler bereits beim Schreiben Ihres Codes gemeldet werden. Suchen Sie in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint und installieren Sie es.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (sehen Sie sich [Fehlerbehebung für JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Sicherstellen, dass Variablen usw. im richtigen Bereich definiert sind und dass keine Konflikte zwischen in verschiedenen Bereichen deklarierten Elementen bestehen (siehe [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welchen Bereich es zutrifft, und daher, ob dessen Wert das ist, was Sie beabsichtigt hatten. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, einen `this`-Bereich in eine separate Variable zu speichern und dann diese Variable in verschachtelten Funktionen zu verwenden, damit Sie sicherstellen können, dass Sie Funktionalität auf den korrekten `this`-Bereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variable iterieren (allgemeiner "den Bereich falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), iterieren wir durch 10 Durchläufe mit einer Variablen, die mit `var` definiert ist, und kreieren jedes Mal einen Paragraphen und fügen diesem einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Wenn geklickt, möchten wir, dass jeder eine Warnmeldung anzeigt, die seine Nummer enthält (den Wert von `i` zum Zeitpunkt der Erstellung). Stattdessen geben sie alle `i` als 11 aus — weil die `for`-Schleife alle ihre Iterationen ausführt, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` statt mit `var` zu deklarieren—der Wert von `i`, der mit der Funktion verknüpft ist, ist dann einzigartig für jede Iteration. Sehen Sie sich [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (sehen Sie sich den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) auch an) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu nutzen. Dies bedeutet in der Regel das Verständnis, wie _Promisen_ verwendet werden: korrekte Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder der Code zur Handhabung des Ergebnisses eines asynchronen Aufrufs im `then()`-Handler des Promise. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Buggy JavaScript Code: Die 10 häufigsten Fehler von JavaScript-Entwicklern](https://www.toptal.com/developers/javascript/10-most-common-javascript-mistakes) bietet einige schöne Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Entwicklerwerkzeuge im Browser haben viele nützliche Funktionen zur Unterstützung beim Debuggen von JavaScript. Zunächst wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (siehe den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken) auch).

Wenn Sie sich die Konsole ansehen, werden Sie eine Fehlermeldung sehen. Die genaue Formulierung ist browserabhängig, aber sie wird etwas wie "Uncaught TypeError: heroes is not iterable" sein, und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen `jsonObj` zu verwenden (was, wie Sie erwarten könnten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein sollte). Dies soll aus einer externen `.json`-Datei geholt werden, mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber dies schlägt fehl.

## Die Console API

Sie wissen vielleicht bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns das genauer untersuchen, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen an; Sie haben bereits [`console.log()`](/de/docs/Web/console/log_static) kennengelernt, das eine benutzerdefinierte Nachricht an die Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, so wie dies:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal sehen Sie vor der Fehlermeldung eine neue Nachricht, die an die Konsole geloggt wird:

```plain
Response value: [object Promise]
```

Die Ausgabe von `console.log()` zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die Funktion `fetch()` ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort nutzen können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Aufrufstapel

Als kurzen Exkurs, probieren wir, eine andere Konsolenmethode zu verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

mit

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie werden nun sehen, dass die Nachricht als Fehler gemeldet wird, mit der gleichen Farbe und dem gleichen Symbol wie der nicht abgefangene Fehler darunter. Außerdem wird nun ein Erweiterungs-/Kollabierungspfeil neben der Nachricht erscheinen. Wenn Sie darauf klicken, werden Sie eine einzelne Zeile sehen, die Ihnen die Zeile in der JavaScript-Datei zeigt, von der der Fehler stammt. Tatsächlich hat die Zeile mit dem nicht abgefangenen Fehler _das_ auch, allerdings mit zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler von der Funktion `showHeroes()` kommt, Zeile 25, wie wir bereits festgestellt haben. Wenn Sie sich Ihren Code ansehen, werden Sie sehen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Aufrufstapel** bezeichnet und können sehr nützlich sein, wenn Sie versuchen, den Ursprung eines Fehlers zu verfolgen, der viele verschiedene Standorte in Ihrem Code umfasst.

Der `console.error()`-Aufruf ist in diesem Fall nicht so nützlich, kann aber nützlich sein, um einen Aufrufstapel zu generieren, falls noch keiner verfügbar ist.

### Das Fehler beheben

Wie auch immer, lassen Sie uns zurückkehren, um zu versuchen, unseren Fehler zu beheben. Wir können auf die Antwort des erfüllten `Promise` zugreifen, indem wir die Methode {{jsxref("Promise.prototype.then()", "then()")}} an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen einfügen, die ihn akzeptieren, so wie dies:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie die Seite, und sehen Sie nach, ob Ihr Code funktioniert. Kleiner Spoiler — die obige Änderung hat das Problem nicht gelöst. Leider haben wir **immer noch den gleichen Fehler**!

> [!NOTE]
> Zusammenfassend, immer wenn etwas nicht funktioniert und ein Wert nicht das zu sein scheint, was er an einem Punkt in Ihrem Code sein soll, können Sie `console.log()`, `console.error()` oder eine andere ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Den JavaScript-Debugger verwenden

Lassen Sie uns dieses Problem weiter untersuchen, indem wir eine fortgeschrittenere Funktion der Entwicklerwerkzeuge im Browser verwenden: den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, der Debugger in Safari (siehe [Safari-Webentwicklungswerkzeuge](https://developer.apple.com/safari/tools/)), etc.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Hauptfunktionen solcher Werkzeuge ist die Möglichkeit, Haltepunkte zum Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt. Zu diesem Zeitpunkt können Sie die Umgebung im aktuellen Zustand untersuchen und sehen, was los ist.

Lassen Sie uns die Verwendung von Haltepunkten erkunden:

1. Der Fehler wird in der gleichen Zeile wie zuvor geworfen — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie auf die Zeilennummer im mittleren Panel, um einen Haltepunkt hinzuzufügen (es wird ein blauer Pfeil darüber erscheinen).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes bei dieser Zeile pausieren. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um folgendes zu zeigen:

![Firefox-Debugger mit einem Haltepunkt](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des von Ihnen festgelegten Haltepunkts.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde das gleiche wie der Aufrufstapel, den wir zuvor im `console.error()`-Abschnitt angeschaut haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. An erster Stelle steht `showHeroes()`, die Funktion, in der wir uns derzeit befinden, und an zweiter Stelle steht `onload`, die den Event Handler enthält, der den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Bereich für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Bereich). Jeder Bereich kann erweitert werden, um die Werte von Variablen innerhalb des Bereichs zu zeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Bereich — Sie können daraus sehen, dass die Variable heroes `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [Response](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Also ist dieses Promise nicht im JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu lösen. Um Ihnen den Einstieg zu erleichtern, können Sie die Dokumentation für das [Response](/de/docs/Web/API/Response)-Objekt durchsuchen. Wenn Sie feststecken, können Sie den gelösten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Haltepunkte und Überwachungsausdrücke. Für mehr Informationen, sehen Sie die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## JavaScript-Fehler in Ihrem Code behandeln

HTML und CSS sind nachsichtig — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen behandelt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert häufig einfach weiter. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine Fehler oder nicht erkannte Syntax findet, wird sie häufig Fehler werfen.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sind so gestaltet, dass sie durch Kopieren der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Rechner verfolgt werden. Fügen Sie die Codeausschnitte zwischen den öffnenden und schließenden `<script>`- und `</script>`-Tags ein, dann öffnen Sie die Datei in einem Browser und schauen Sie sich die Ausgabe in der Devtools-JavaScript-Konsole an.

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

Ein häufiger Einsatz von [JavaScript conditionals](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist die Behandlung von Fehlern. Conditionals ermöglichen es, je nach dem Wert einer Variable unterschiedliche Codes auszuführen. Oft möchten Sie dies defensiv verwenden, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder der falsche Typ ist, oder um einen Fehler zu erfassen, wenn der Wert ein falsches Ergebnis zurückgeben würde, was später im Verlauf Probleme verursachen könnte.

Lassen Sie uns ein Beispiel betrachten. Angenommen, wir haben eine Funktion, die als Argument die Körpergröße eines Benutzers in Zoll nimmt und seine Körpergröße in Metern auf zwei Dezimalstellen genau zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispieldatei-Element `<script>` eine `const` namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, indem Sie ihr die `height`-Konstante als Argument übergeben, und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und schauen Sie in die Devtools-JavaScript-Konsole. Sie sollten sehen, dass ein Wert von `1.78` darin protokolliert ist.

5. Das funktioniert also ganz gut isoliert. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:
   - Wenn Sie den `height`-Wert in `"70"` ändern (d.h. `70` als String ausgedrückt), sollte das Beispiel ... immer noch funktionieren. Dies liegt daran, dass die Berechnung auf der ersten Zeile des Strings den Wert in einen Datentyp Nummer zwingt. Dies ist in einem einfachen Fall wie diesem in Ordnung, könnte aber in komplexerem Code dazu führen, dass fehlerhafte Daten alle möglichen Fehler verursachen, einige davon subtil und schwer zu erkennen!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl gezwungen werden kann, wie zum Beispiel `"70 inches"` oder `["Bob", 70]` oder {{jsxref("NaN")}}, sollte das Beispiel das Resultat als `NaN` zurückgeben. Dies kann alle möglichen Probleme verursachen — z.B. wenn Sie die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website einfügen möchten.
   - Wenn Sie den `height`-Wert ganz entfernen (erklammern Sie ihn, indem Sie `//` am Anfang der Zeile hinzufügen), wird die Konsole einen Fehler der Art "Uncaught ReferenceError: height is not defined" zeigen, die Art von Fehler, die Ihre Anwendung zum Stillstand bringen könnte.

   Keine dieser Ergebnisse ist offensichtlich gut. Wie verteidigen wir uns gegen schlechte Daten?

6. Lassen Sie uns ein Conditional in unsere Funktion hinzufügen, um zu testen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Ersetzen Sie Ihre aktuelle Funktion durch folgende:

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

7. Wenn Sie jetzt die ersten beiden Szenarien erneut ausprobieren, werden Ihnen unsere etwas nützlichere Nachricht angezeigt, die Ihnen eine Idee davon gibt, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles Mögliche einfügen, z. B. versuchen, Code auszuführen, um den Wert von `num` zu korrigieren, aber dies wird nicht empfohlen. Diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Wertes irgendwo anders im System behandeln.

   > [!NOTE]
   > In der `if()`-Anweisung prüfen wir zunächst, ob der Datentyp von `num` `"number"` ist, mithilfe des [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operators, aber wir prüfen auch, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um den spezifischen Fall zu verteidigen, dass `num` auf `NaN` gesetzt wird, weil `typeof NaN` immer noch `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut versuchen, wird Ihnen die Fehlermeldung "Uncaught ReferenceError: height is not defined" weiterhin geworfen. Sie können nicht beheben, dass ein Wert nicht verfügbar ist, aus einer Funktion, die versucht, den Wert zu verwenden.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, unsere Funktion so einzurichten, dass sie einen benutzerdefinierten Fehler zurückgibt, wenn sie nicht die richtigen Daten erhält. Wir werden uns zunächst ansehen, wie das gemacht wird, und dann alle Fehler zusammen behandeln.

### Benutzerdefinierte Fehler werfen

Sie können an beliebigen Stellen in Ihrem Code einen benutzerdefinierten Fehler mit der `throw`-Anweisung und dem {{jsxref("Error.Error", "Error()")}}-Konstruktor auslösen. Lassen Sie uns dies in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile im `else`-Block Ihrer Funktion durch folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. nicht-nummerischen) Wert gesetzt ist. Dieses Mal sollten Sie sehen, dass Ihr benutzerdefinierter Fehler geworfen wird, zusammen mit einem nützlichen Aufrufstack, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (obwohl die Meldung immer noch anzeigt, dass der Fehler "uncaught" oder "unhandled" ist). Okay, Fehler sind ärgerlich, aber das ist viel nützlicher, als die Funktion erfolgreich auszuführen und einen Nicht-Zahlenwert zurückzugeben, der später Probleme verursachen könnte.

Wie gehen wir also dann mit all diesen Fehlern um?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell darauf ausgelegt, mit Fehlern umzugehen. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

In dem `try`-Block versuchen Sie, einen Code auszuführen. Wenn dieser Code keinen Fehler auslöst, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Allerdings, wenn ein Fehler ausgelöst wird, wird der `catch`-Block ausgeführt, der Zugriff auf das Fehlerobjekt bietet, das den Fehler repräsentiert, und Ihnen erlaubt, einen Code auszuführen, um ihn zu behandeln.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus, und behandeln alle Fehler, die sie zurückgibt, innerhalb eines entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren Sie, und Sie sollten jetzt zwei Dinge sehen:
   - Die Fehlermeldung und den Aufrufstack wie zuvor, aber dieses Mal ohne den Hinweis "uncaught" oder "unhandled".
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Aktualisieren Sie nun `num` auf einen guten (zahlenmäßigen) Wert und Sie werden das Ergebnis der Berechnung protokolliert sehen, ohne Fehlermeldung.

Das ist bedeutend — alle ausgelösten Fehler werden nicht mehr ohne Behandlung gelassen, sodass sie die Anwendung nicht zum Stillstand bringen. Sie können beliebigen Code ausführen, um den Fehler zu behandeln. Oben haben wir nur eine Nachricht protokolliert, aber zum Beispiel könnten Sie die Funktion wieder aufrufen, die den Benutzer aufforderte, seine Körpergröße einzugeben, diesmal bitten Sie ihn, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach Art des zurückgegebenen Fehlers einen unterschiedlichen Behandlungscode auszuführen.

### Feature-Erkennung

Feature-Erkennung ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie auf das Feature und führen Sie dann bedingt Code aus, um sowohl in Browsern, die das Feature unterstützen als auch in solchen, die es nicht unterstützen, ein akzeptables Erlebnis zu bieten. Als kurzes Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt) einen Haupteinstiegspunkt für ihre Verwendung — eine `geolocation`-Eigenschaft auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt. Daher können Sie testen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie vorher gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden einige weitere Beispiele zur Funktionsweise von Feature-Erkennung in [Alternativen zum Nutzeragenten-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit JavaScript (und HTML und CSS!) stoßen werden, was Wissen darüber, wie Sie Antworten online finden können, unschätzbar macht.

Zu den besten Quellen für Supportinformationen gehören MDN (das ist der Ort, an dem Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu verwenden, führen die meisten Leute eine Suchmaschinen-Suche der Technologie durch, über die sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel, "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Supportinformationen, zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen einfach das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forumsseite, auf der Sie Fragen stellen können und andere Entwickler ihre Lösungen teilen können, frühere Beiträge nachsehen und anderen Entwicklern helfen können. Es wird empfohlen, zunächst nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir nach "deaktivieren von Autofokus auf HTML-Dialog" auf SO gesucht und sehr schnell mit [Deaktivieren des Autofokus bei showModal mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) eine Antwort gefunden.

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach bestimmten Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

So, das ist JavaScript-Debugging und Fehlerbehandlung. Einfach, nicht wahr? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang geben und einige Ideen, wie Sie mit JavaScript-bezogenen Problemen umgehen können, die Sie antreffen werden.

Das war's für das Modul Dynamisches Scripting mit JavaScript; herzlichen Glückwunsch zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
