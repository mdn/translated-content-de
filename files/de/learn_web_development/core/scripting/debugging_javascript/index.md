---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 9bece5712d9ee8925c86794a1feef312e7ce53f6
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debugging von JavaScript zurück (welches wir zuerst in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken zur Fehlersuche eintauchen, aber auch betrachten, wie man defensiv programmiert und Fehler im Code behandelt, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">grundlegenden CSS-Kenntnissen</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verwendung der Entwicklerwerkzeuge des Browsers, um das JavaScript auf Ihrer Seite zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> für das Debugging.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklungstools.</li>
          <li>Fehlerbehandlung mit <code>Bedingungen</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir grob die Arten von Fehlern betrachtet, die in JavaScript-Programmen auftreten können, und festgestellt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige gängige Arten von JavaScript-Fehlermeldungen zu verstehen, und gezeigt, wie Sie mit einfachen [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen einfaches Debugging durchführen können.

In diesem Artikel werden wir etwas tiefer in die Ihnen zur Verfügung stehenden Werkzeuge zur Fehlersuche eintauchen und uns auch Möglichkeiten ansehen, Fehler von vornherein zu verhindern.

## Linting Ihres Codes

Sie sollten sicherstellen, dass Ihr Code zuallererst gültig ist, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup Validation Service](https://validator.w3.org/) des W3C, den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Menge Fehler aufdecken, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Plugins für Code-Editoren

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, sodass Ihnen Fehler gemeldet werden, während Sie Ihren Code schreiben. Versuchen Sie, im Plugin- oder Erweiterungsverzeichnis Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (sehen Sie sich noch einmal [Fehlerbehebung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Sicherstellen, dass Variablen usw. im richtigen Bereich definiert sind, und dass Sie nicht in Konflikte zwischen in verschiedenen Bereichen deklarierten Elementen geraten (siehe [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welche Umgebung es sich bezieht und ob sein Wert dem entspricht, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine grundlegende Einführung lesen; Sie sollten sich auch Beispiele wie [dieses](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, das ein typisches Muster zeigt, bei dem ein `this`-Bereich in einer separaten Variablen gespeichert wird, und diese Variable dann in verschachtelten Funktionen verwendet wird, sodass Sie sicher sind, dass Sie die Funktionalität auf den richtigen `this`-Bereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "falsche Bereichsverwendung").

> [!CALLOUT]
> Zum Beispiel in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer mit `var` definierten Variablen und erstellen jedes Mal einen Absatz, dem wir einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzufügen. Wenn darauf geklickt wird, soll jeder eine Alarmmeldung mit seiner Nummer anzeigen (dem Wert von `i` zum Zeitpunkt der Erstellung). Stattdessen zeigen alle `i` als 11 an — weil die `for`-Schleife alle ihre Iterationen durchführt, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren — der Wert von `i`, der mit der Funktion verknüpft ist, ist dann für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor Sie versuchen, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet normalerweise, dass Sie verstehen müssen, wie Sie _Promises_ nutzen können: Die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) auf angemessene Weise oder die Ausführung des Codes zur Bearbeitung des Ergebnisses eines asynchronen Abrufs im `then()`-Handler der Promise. Siehe [Wie man mit Promises arbeitet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige schöne Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Browser-Entwicklungstools haben viele nützliche Funktionen, um beim Debuggen von JavaScript zu helfen. Zumindest wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung ist vom Browser abhängig, aber sie wird in etwa so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Codeabschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` (das, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll) zu verwenden. Dies soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber dies schlägt fehl.

## Die Console API

Vielleicht wissen Sie bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns es noch etwas weiter untersuchen, um zu zeigen, wie Sie dies erkunden könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die JavaScript-Code erlaubt, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, das eine benutzerdefinierte Nachricht an die Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie folgt:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal werden Sie vor der Fehlermeldung eine neue Nachricht in der Konsole sehen:

```plain
Response value: [object Promise]
```

Die Ausgabe von `console.log()` zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die Funktion `fetch()` ist asynchron: sie gibt ein `Promise` zurück, das nur erfüllt wird, wenn die eigentliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Aufrufstapel

Als kurzen Exkurs versuchen wir, eine andere Konsolenmethode zur Fehlermeldung zu verwenden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser. Jetzt wird die Nachricht als Fehler gemeldet, mit derselben Farbe und demselben Symbol wie der nicht abgefangene Fehler darunter. Außerdem wird jetzt ein Erweitern/Einklappen-Pfeil neben der Nachricht angezeigt. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die die Zeile in der JavaScript-Datei anzeigt, von der der Fehler stammt. Tatsächlich hat auch die Zeile des nicht abgefangenen Fehlers _dieses_, jedoch mit zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler aus der Funktion `showHeroes()` in Zeile 25 kommt, wie wir vorher festgestellt haben. Wenn Sie sich Ihren Code ansehen, sehen Sie, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Aufrufstapel** bezeichnet und können sehr nützlich sein, um die Quelle eines Fehlers aufzuspüren, der viele verschiedene Stellen in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht besonders nützlich, aber er kann nützlich sein, um einen Aufrufstapel zu generieren, wenn noch keiner verfügbar ist.

### Den Fehler beheben

Kommen wir zurück zu dem Versuch, unseren Fehler zu beheben. Wir können auf die Antwort aus dem erfüllten `Promise` zugreifen, indem wir die Methode {{jsxref("Promise.prototype.then()", "then()")}} ans Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen übergeben, die ihn akzeptieren, wie folgt:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie und prüfen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider **haben wir immer noch denselben Fehler**!

> [!NOTE]
> Zusammengefasst, jedes Mal, wenn etwas nicht funktioniert und ein Wert zu einem bestimmten Zeitpunkt in Ihrem Code nicht das zu sein scheint, was er sein soll, können Sie `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Lassen Sie uns dieses Problem weiter mit einem ausgefeilteren Merkmal der Browser-Entwicklungstools untersuchen: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Quellcode-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web-Entwicklungstools](https://developer.apple.com/safari/tools/)) usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_ (Bereiche).

Das Hauptmerkmal solcher Werkzeuge ist die Fähigkeit, Breakpoints zu Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird wie zuvor in der Zeile `for (const hero of heroes) {` ausgelöst — Zeile 26 im Screenshot unten. Klicken Sie auf die Zeilennummer im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darauf).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes an dieser Zeile anhalten. An diesem Punkt wird die rechte Seite aktualisiert und das Folgende anzeigen:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde identisch mit dem Aufrufstapel, den wir zuvor im `console.error()`-Abschnitt betrachtet haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns derzeit befinden, und zweitens `onload`, die den Ereignishandler mit dem Aufruf von `showHeroes()` speichert.
- Unter _Scopes_ sehen Sie den aktuell aktiven Bereich für die Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (das globale Umfeld). Jeder Bereich kann erweitert werden, um die Werte der Variablen im Bereich zu zeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Bereich — Sie sehen daraus, dass die `heroes`-Variable `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht erfolgreich war.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument an `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Das bedeutet, dass dieses Promise nicht im JSON-Format ist: Es ist ein `Response` Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation zum [`Response`](/de/docs/Web/API/Response)-Objekt an. Falls Sie feststecken, finden Sie den behobenen Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab verfügt über viele andere nützliche Funktionen, die wir hier nicht besprochen haben, beispielsweise bedingte Breakpoints und Überwachungsausdrücke. Für wesentlich mehr Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind tolerant — Fehler und nicht erkannte Eigenschaften können oft aufgrund der Natur der Sprachen behandelt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach weiter. JavaScript ist jedoch nicht so permissiv wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkanntem Syntax trifft, wirft sie häufig Fehler.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sind so gestaltet, dass Sie eine Kopie der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Rechner erstellen, die Codeschnipsel zwischen den öffnenden und schließenden `<script>` und `</script>`-Tags hinzufügen, und dann die Datei in einem Browser öffnen und die Ausgabe in der JavaScript-Konsole des Entwicklertools betrachten.

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

Ein häufiger Gebrauch von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist der Umgang mit Fehlern. Bedingungen erlauben Ihnen, je nach Wert einer Variablen unterschiedlichen Code auszuführen. Oft möchten Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler auftritt, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler zu erfassen, wenn der Wert ein falsches Ergebnis liefern würde, das später zu Problemen führen könnte.

Schauen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die als Argument die Körpergröße des Benutzers in Zoll nimmt und sie als Körpergröße in Metern auf zwei Dezimalstellen zurückgibt. Das könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie im `<script>`-Element Ihrer Beispieldatei eine `const` namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, übergeben Sie ihr die `height`-Konstante als Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und betrachten Sie die JavaScript-Konsole des Entwicklertools. Sie sollten einen Wert von `1.78` sehen, der darin protokolliert wird.

5. Das funktioniert isoliert einwandfrei. Aber was passiert, wenn die angegebenen Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:
   - Wenn Sie den `height`-Wert in `"70"` ändern (also `70` als String ausgedrückt), sollte das Beispiel ... immer noch einwandfrei funktionieren. Dies liegt daran, dass die Berechnung in der ersten Codezeile den Wert in einen Zahlendatentyp zwingt. Das ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexerem Code kann das falsche Datum zu allen Arten von Fehlern führen, einige davon subtil und schwer zu erkennen!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl konvertiert werden kann, wie `"70 Inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, dann gibt das Beispiel `NaN` zurück. Dies könnte alle Arten von Problemen verursachen, zum Beispiel wenn Sie die Körpergröße des Benutzers an einer Stelle im Benutzerschnittstelle der Website anzeigen möchten.
   - Wenn Sie den `height`-Wert ganz entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), zeigt die Konsole eine Fehlermeldung an, die in etwa so lautet: "Uncaught ReferenceError: height is not defined", was den Betrieb Ihrer Anwendung zum Erliegen bringen könnte.

   Offensichtlich sind keine dieser Ergebnisse optimal. Wie schützen wir uns gegen schlechte Daten?

6. Lassen Sie uns eine Bedingung innerhalb unserer Funktion hinzufügen, um zu testen, ob die Daten korrekt sind, bevor wir versuchen, die Berechnung durchzuführen. Ersetzen Sie Ihre aktuelle Funktion durch die folgende:

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

7. Wenn Sie jetzt die ersten beiden Szenarien erneut ausprobieren, sehen Sie unsere etwas nützlichere Nachricht zurückgegeben, die Ihnen eine Idee gibt, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles hineinbringen, was Ihnen gefällt, einschließlich des Versuchs, Code auszuführen, um den Wert von `num` zu korrigieren, aber das ist nicht geraten — diese Funktion hat einen einfachen Zweck, und Sie sollten das Korrigieren des Wertes irgendwo anders im System handhaben.

   > [!NOTE]
   > In der `if()`-Anweisung testen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator verwenden, testen aber auch, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen das tun, um uns gegen den spezifischen Fall zu schützen, dass `num` auf `NaN` eingestellt ist, denn `typeof NaN` gibt immer noch `"number"` zurück!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, wird Ihnen immer noch der Fehler "Uncaught ReferenceError: height is not defined" ausgegeben. Sie können nicht beheben, dass ein Wert von einer Funktion, die versucht, den Wert zu verwenden, nicht verfügbar ist.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, wenn unsere Funktion einen benutzerdefinierten Fehler zurückgibt, wenn sie die korrekten Daten nicht erhält. Zuerst schauen wir uns an, wie wir das tun, dann werden wir alle Fehler zusammen behandeln.

### Benutzerdefinierte Fehler werfen

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler werfen, indem Sie die [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung zusammen mit dem {{jsxref("Error.Error", "Error()")}}-Konstruktor verwenden. Lassen Sie uns das in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile im `else`-Block Ihrer Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, stellen Sie jedoch sicher, dass `num` auf einen schlechten (also unzähligen) Wert eingestellt ist. Diesmal sollten Sie Ihren benutzerdefinierten Fehler ausgelöst sehen, zusammen mit einem nützlichen Aufrufstapel, der Ihnen hilft, die Quelle des Fehlers zu finden (beachten Sie jedoch, dass die Meldung Ihnen immer noch anzeigt, dass der Fehler "uncaught" oder "unhandled" ist). OK, Fehler sind nervig, aber das ist viel nützlicher als die Funktion erfolgreich auszuführen und ein unzähligen Wert zurückzugeben, der später zu Problemen führen könnte.

Also, wie handhaben wir all diese Fehler dann?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung ist speziell dafür entworfen, Fehler zu handhaben. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try`-Blocks versuchen Sie, einige Codezeilen auszuführen. Wenn dieser Code ohne einen Fehler ausgeführt wird, ist alles in Ordnung und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler geworfen wird, wird der `catch`-Block ausgeführt, welcher Zugriff auf das {{jsxref("Error")}}-Objekt bietet, das den Fehler darstellt, und Ihnen ermöglicht, Code zur Behandlung des Fehlers auszuführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

Wir führen jetzt unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und handhaben dort alle von ihm zurückgegebenen Fehler in einem dazugehörigen `catch`-Block.

2. Speichern und aktualisieren Sie die Seite, und Sie sollten nun zwei Dinge sehen:
   - Die Fehlermeldung und der Aufrufstapel wie zuvor, diesmal jedoch ohne das Label "uncaught" oder "unhandled".
   - Die protokollierte Nachricht "Einfüge-Code zum Behandeln des Fehlers".

3. Versuchen Sie nun, `num` auf einen gültigen (numerischen) Wert zu setzen, und Sie sehen das Ergebnis der Berechnung protokolliert, ohne Fehlermeldung.

Das ist signifikant — alle geworfenen Fehler sind nicht länger unhandled, sodass sie die Anwendung nicht zum Absturz bringen. Sie können beliebigen Code ausführen, um den Fehler zu behandeln. Oben protokollieren wir nur eine Nachricht, aber Sie könnten beispielsweise die Funktion aufrufen, die zuvor ausgeführt wurde, um den Benutzer nach seiner Körpergröße zu fragen, und diesmal bitten, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach zurückgegebenem Fehlertyp unterschiedlichen Fehlerbehandlungscode auszuführen.

### Erkennung von Funktionen

Die Funktionserkennung ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie die Funktion und führen Sie dann bedingten Code aus, um ein akzeptables Erlebnis sowohl in Browsern zu bieten, die die Funktion unterstützen, als auch in solchen, die dies nicht tun. Als ein schnelles Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser ausgeführt wird) einen Haupteinstiegspunkt — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Aus diesem Grund können Sie nach einer Unterstützung für die Geolokalisierung im Browser suchen, indem Sie eine ähnliche `if()`-Struktur verwenden wie die, die wir vorhin gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Weitere Beispiele zur Funktionserkennung finden Sie unter [Alternativen zur Benutzeragentenschnüffelung](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie bei JavaScript (sowie HTML und CSS!) stoßen werden, was das Wissen darüber, wie man Antworten online findet, unschätzbar macht.

Unter den besten Quellen für Support-Informationen befinden sich MDN (da sind Sie gerade!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um die Mozilla Developer Network (MDN) zu nutzen, machen die meisten Leute eine Suchmaschinenabfrage zu der Technologie, über die sie Informationen suchen, plus dem Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Support-Informationen sowie einige nützliche externe Ressourcen-Links. Schauen Sie beispielsweise unter <https://caniuse.com/#search=video> (Sie müssen nur das Feature, das Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen können und in dem Mitentwickler ihre Lösungen teilen können, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, zu schauen, ob bereits eine Antwort auf Ihre Frage existiert, bevor Sie eine neue Frage stellen. Beispielsweise haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie es, in Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler hatten wahrscheinlich dieselben Probleme wie Sie.

## Zusammenfassung

Das war also JavaScript-Debugging und Fehlermanagement. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start ermöglichen und einige Ideen geben, wie Sie die JavaScript-bezogenen Probleme, über die Sie stolpern, angehen können.

Das war's für das Modul Dynamisches Skripting mit JavaScript; herzlichen Glückwunsch, dass Sie es bis zum Ende geschafft haben! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
