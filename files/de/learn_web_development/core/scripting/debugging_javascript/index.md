---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zurück zum Thema JavaScript-Debugging (welches wir zuerst in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken zum Aufspüren von Fehlern eintauchen und uns auch ansehen, wie man defensiv programmiert und Fehler in Ihrem Code behandelt, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den Grundlagen von JavaScript, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Entwickler-Tools im Browser, um das JavaScript zu inspizieren, das auf Ihrer Seite läuft, und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklertools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), untersuchten wir im Großen und Ganzen die Arten von Fehlern, die in JavaScript-Programmen auftreten können, und sagten, dass sie grob in zwei Typen unterteilt werden können – Syntaxfehler und logische Fehler. Wir halfen Ihnen auch, einige häufige Typen von JavaScript-Fehlermeldungen zu verstehen, und zeigten Ihnen, wie Sie mit Hilfe von [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen einfaches Debugging durchführen können.

In diesem Artikel werden wir etwas tiefer in die Werkzeuge eintauchen, die Ihnen zur Verfügung stehen, um Fehler aufzuspüren, und uns auch Möglichkeiten ansehen, um Fehler von vornherein zu verhindern.

## Linting Ihres Codes

Sie sollten sicherstellen, dass Ihr Code grundsätzlich gültig ist, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup Validation Service der W3C](https://validator.w3.org/), den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Menge Fehler aufdecken, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code wiederholt auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Ihnen Fehler gemeldet werden, während Sie Ihren Code schreiben. Versuchen Sie, nach ESLint in der Plugin- oder Erweiterungsliste Ihres Code-Editors zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie z.B.:

- Grundlegende Syntax- und Logikprobleme (siehe dazu [Fehlerbehebung JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Gültigkeitsbereich definiert sind und dass es nicht zu Konflikten zwischen an unterschiedlichen Stellen deklarierten Elementen kommt (siehe [Funktionsbereich und -konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), im Hinblick darauf, auf welchen Gültigkeitsbereich es angewendet wird und ob dessen Wert er ist, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten sich auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, das ein typisches Muster zum Speichern eines `this` Gültigkeitsbereichs in einer separaten Variablen zeigt, und diese Variable dann in geschachtelten Funktionen verwenden, damit Sie sicher sein können, dass Sie die Funktionalität auf den korrekten `this` Gültigkeitsbereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "den Gültigkeitsbereich falsch erfassen").

> [!CALLOUT]
> Ein Beispiel: In [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)) durchlaufen wir 10 Iterationen unter Verwendung einer Variable, die mit `var` definiert wurde, und erstellen dabei jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler hinzu. Bei einem Klick soll jeder der Absätze eine Meldung mit seiner Nummer (dem Wert von `i` beim Erstellen des Absatzes) anzeigen. Stattdessen melden alle `i` als 11 – weil die `for` Schleife alle ihre Iterationen abschließt, bevor die geschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren – der Wert von `i`, der mit der Funktion verknüpft ist, ist dann eindeutig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die zurückgegebenen Werte zu verwenden. Dies erfordert normalerweise, zu verstehen, wie man _Promises_ verwendet: das geeignete Verwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder das Ausführen des Codes zur Bearbeitung des Ergebnisses eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}} Handler des Promise. Siehe [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE] > [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) hat einige nette Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole im Browser

Die Entwicklertools im Browser bieten viele nützliche Funktionen, die beim Debuggen von JavaScript helfen. Beispielsweise wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Erstellen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie in die Konsole schauen, werden Sie eine Fehlermeldung sehen. Die genaue Formulierung ist abhängig vom Browser, aber sie wird in etwa lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir den Quellcode betrachten, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (was, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dies soll aus einer externen `.json` Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch) Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Sie wissen vielleicht schon, was mit diesem Code nicht stimmt, aber lassen Sie uns das näher untersuchen, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie verfügt über eine Reihe von Funktionen; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, welche eine benutzerdefinierte Nachricht an die Konsole ausgibt.

Versuchen Sie, einen `console.log()` Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie folgt:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal wird vor der Fehlermeldung eine neue Nachricht in der Konsole protokolliert:

```plain
Response value: [object Promise]
```

Die `console.log()` Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()` Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Call Stacks

Als kurzen Exkurs lassen Sie uns eine andere Konsolenmethode ausprobieren, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser und Sie werden die Nachricht nun als Fehler gemeldet sehen, mit derselben Farbe und demselben Symbol wie der nicht abgefangene Fehler darunter. Außerdem wird jetzt ein Aufklapp-/Zuklapp-Pfeil neben der Nachricht angezeigt. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile in der JavaScript-Datei anzeigt, von der der Fehler stammt. Tatsächlich hat die Zeile mit dem nicht abgefangenen Fehler _auch_ dies, jedoch hat sie zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Dies bedeutet, dass der Fehler aus der `showHeroes()` Funktion, Zeile 25, stammt, wie wir vorher festgestellt haben. Wenn Sie Ihren Code anschauen, werden Sie sehen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call Stack** bezeichnet und können sehr nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers zu finden, der viele verschiedene Orte in Ihrem Code betrifft.

Der `console.error()` Aufruf ist in diesem Fall nicht allzu nützlich, kann jedoch nützlich sein, um einen Call Stack zu generieren, falls noch keiner verfügbar ist.

### Den Fehler beheben

Kehren wir aber zu unserem Fehler zurück und versuchen wir ihn zu beheben. Wir können auf die Antwort des erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}} Methode an das Ende des `fetch()` Aufrufs anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen übergeben, die ihn akzeptieren, wie folgt:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und sehen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider haben wir **noch den gleichen Fehler**!

> [!NOTE]
> Zusammenfassend lässt sich sagen: Immer wenn etwas nicht funktioniert und ein Wert an irgendeinem Punkt in Ihrem Code nicht so erscheint, wie er sollte, können Sie `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert zu drucken und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Untersuchen wir dieses Problem weiter mit einer ausgefeilteren Funktion der Entwicklertools im Browser: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Tools sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und derzeit aktive _Scopes_.

Das Hauptmerkmal solcher Tools ist die Möglichkeit, Breakpoints im Code zu setzen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was passiert.

Lassen Sie uns die Verwendung von Breakpoints erforschen:

1. Der Fehler wird an derselben Stelle wie zuvor geworfen — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie auf diese Zeile im mittleren Panel, um dort einen Breakpoint zu setzen (Sie werden einen blauen Pfeil darüber erscheinen sehen).
2. Aktualisieren Sie nun die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes an dieser Zeile anhalten. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um Folgendes anzuzeigen:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des von Ihnen gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde das gleiche wie der Call Stack, den wir zuvor im Abschnitt `console.error()` angesehen haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die derzeitige Funktion aufzurufen. An der Spitze haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und an zweiter Stelle `onload`, das den Ereignishandler enthält, der den Aufruf an `showHeroes()` übermittelt.
- Unter _Scopes_ sehen Sie den aktuell aktiven Gültigkeitsbereich für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block`, und `Window` (der globale Gültigkeitsbereich). Jeder Gültigkeitsbereich kann erweitert werden, um die Werte der Variablen innerhalb des Bereichs anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Gültigkeitsbereich — Sie können daraus entnehmen, dass die Variable `heroes` `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktionierte.
2. Sie sehen auch, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response) Objekt speichert, kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: Es ist ein `Response` Objekt. Es fehlt noch ein Schritt, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Als Einstieg, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response) Objekt an. Wenn Sie nicht mehr weiterkommen, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, z.B. konditionale Breakpoints und Watch-Expressions. Für viele weitere Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind permissiv — Fehler und nicht erkannte Funktionen können oft gehandhabt werden aufgrund der Natur der Sprachen. Zum Beispiel wird CSS nicht erkannte Eigenschaften ignorieren, und der Rest des Codes funktioniert oft einfach weiter. JavaScript ist jedoch nicht so permissiv wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wird sie oft Fehler auslösen.

Lassen Sie uns eine gängige Strategie erkunden, um JavaScript-Fehler in Ihrem Code zu behandeln. Die folgenden Abschnitte sind so gestaltet, dass sie durch das Erstellen einer Kopie der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrer lokalen Maschine, das Hinzufügen der Code-Schnipsel zwischen den öffnenden und schließenden `<script>` und `</script>` Tags und das anschließende Öffnen der Datei in einem Browser und Betrachten der Ausgabe in der JavaScript-Konsole der Entwicklertools erfolgen können.

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

Ein häufiger Gebrauch von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) besteht darin, Fehler zu behandeln. Bedingungen ermöglichen es Ihnen, je nach dem Wert einer Variablen unterschiedlichen Code auszuführen. Oft werden Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler abzufangen, wenn der Wert ein falsches Ergebnis zurückgeben würde, was später Probleme verursachen könnte.

Schauen wir uns ein Beispiel an. Sagen wir, wir haben eine Funktion, die als Argument die Körpergröße eines Nutzers in Zoll nimmt und seine Körpergröße in Metern, auf 2 Dezimalstellen gerundet, zurückgibt. Das könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispieldatei-`<script>`-Element eine `const` namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, indem Sie ihr die Konstante `height` als Argument übergeben, und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und betrachten Sie die JavaScript-Konsole der Entwicklertools. Sie sollten einen Wert von `1.78` darin protokolliert sehen.

5. Dies funktioniert also gut isoliert. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:

   - Wenn Sie den `height`-Wert in `"70"` ändern (also `70` als Zeichenkette ausgedrückt), sollte das Beispiel ... immer noch gut funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile der Zeichenfolge den Wert in einen Zahlentyp zwingt. Dies ist in einem einfachen Fall wie diesem in Ordnung, aber in komplizierterem Code können falsche Daten alle möglichen Fehler verursachen, von denen einige subtil und schwer zu erkennen sind!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel `NaN` als Ergebnis zurückgeben. Dies könnte alle möglichen Probleme verursachen, z.B. wenn die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website angezeigt werden soll.
   - Wenn Sie den `height`-Wert komplett entfernen (indem Sie ihn auskommentieren, indem Sie `//` an den Anfang der Zeile setzen), wird die Konsole einen Fehler in der Art von "Uncaught ReferenceError: height is not defined" anzeigen, die Art von Fehlern, die Ihre Anwendung zum Stillstand bringen könnten.

   Offensichtlich sind keine dieser Ergebnisse toll. Wie verteidigt man sich gegen schlechte Daten?

6. Lassen Sie uns eine Bedingung in unsere Funktion hinzufügen, um zu prüfen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion durch die folgende zu ersetzen:

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

7. Jetzt, wenn Sie die ersten beiden Szenarien noch einmal ausprobieren, werden Sie unsere etwas nützlichere Nachricht zurückgegeben sehen, um Ihnen eine Vorstellung davon zu geben, was getan werden muss, um das Problem zu beheben. Sie könnten dort irgendetwas einfügen, was Ihnen gefällt, einschließlich eines Versuchs, den Wert von `num` zu korrigieren, aber das wird nicht empfohlen — diese Funktion hat einen einfachen Zweck, und Sie sollten das Korrigieren des Wertes irgendwo anders im System behandeln.

   > [!NOTE]
   > Im `if()` Aussage testen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator verwenden, aber wir testen auch, ob {{jsxref("isNaN()", "!isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um uns gegen den spezifischen Fall zu verteidigen, dass `num` auf `NaN` gesetzt ist, da seltsamerweise `typeof NaN` `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, erhalten Sie dennoch den "Uncaught ReferenceError: height is not defined" Fehler. Sie können nicht beheben, dass ein Wert nicht verfügbar ist, von innerhalb einer Funktion, die versucht, den Wert zu verwenden.

Wie behandelt man das? Nun, es ist wahrscheinlich besser, unsere Funktion eine benutzerdefinierte Fehlermeldung zurückgeben zu lassen, wenn sie nicht die korrekten Daten erhält. Wir werden uns zuerst ansehen, wie man das macht, und dann werden wir alle Fehler zusammen behandeln.

### Benutzerdefinierte Fehler werfen

Sie können einen benutzerdefinierten Fehler jederzeit in Ihrem Code mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw) Anweisung auslösen, gekoppelt mit dem {{jsxref("Error.Error", "Error()")}} Konstruktor. Lassen Sie uns das in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()` Zeile im `else` Block Ihrer Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (also nicht-Zahl) Wert gesetzt ist. Diesmal sollten Sie Ihren benutzerdefinierten Fehler geworfen sehen, zusammen mit einem nützlichen Call Stack, um Ihnen zu helfen, die Quelle des Fehlers zu lokalisieren (obwohl die Nachricht immer noch anzeigt, dass der Fehler nicht "abgefangen" oder "unbehandelt" ist). Ok, Fehler sind ärgerlich, aber das ist viel nützlicher als die Funktion erfolgreich auszuführen und einen Nicht-Zahlenwert zurückzugeben, der später Probleme verursachen könnte.

Wie behandelt man also all diese Fehler?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Anweisung ist speziell darauf ausgelegt, Fehler zu behandeln. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try` Blocks versuchen Sie, Code auszuführen. Wenn dieser Code ohne das Werfen eines Fehlers ausgeführt wird, ist alles in Ordnung, und der `catch` Block wird ignoriert. Wenn jedoch ein Fehler geworfen wird, wird der `catch` Block ausgeführt, der Zugriff auf das {{jsxref("Error")}} Objekt bietet, das den Fehler repräsentiert, und es Ihnen ermöglicht, Code auszuführen, um ihn zu behandeln.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()` Zeile, die die `inchesToMeters()` Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen nun unsere `console.log()` Zeile innerhalb eines `try` Blocks aus und behandeln alle Fehler, die er zurückgibt, innerhalb eines entsprechenden `catch` Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren, und Sie sollten nun zwei Dinge sehen:

   - Die Fehlermeldung und den Call Stack wie zuvor, aber diesmal ohne das Label "ungefangen" oder "unbehandelt".
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Versuchen Sie nun, `num` auf einen guten (Zahlen-)Wert zu aktualisieren, und Sie werden das Ergebnis der Berechnung ohne Fehlermeldung protokolliert sehen.

Das ist bedeutend — alle ausgelösten Fehler sind nicht mehr unbehandelt, sodass sie die Anwendung nicht mehr zum Absturz bringen. Sie können beliebigen Code ausführen, um den Fehler zu behandeln. Oben protokollieren wir einfach eine Nachricht, aber zum Beispiel könnten Sie die Funktion erneut aufrufen, die den Benutzer gefragt hat, seine Körpergröße einzugeben, diesmal mit der Aufforderung, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else` Anweisung verwenden, um je nach Art des zurückgegebenen Fehlers unterschiedlichen Fehlerbehandlungscode auszuführen.

### Feature-Detection

Feature-Detection ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie, ob die Funktion vorhanden ist, und führen Sie dann bedingt Code aus, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die es nicht tun, ein akzeptables Erlebnis zu bieten. Als kurzes Beispiel hat die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (welche verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft) einen Haupteinstiegspunkt für ihre Nutzung — eine `geolocation` Eigenschaft, die am globalen [Navigator](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie zuvor gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden einige weitere Beispiele für Feature-Detection in [Alternatives to UA sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit JavaScript (und HTML und CSS!) stoßen werden, sodass Wissen darüber, wie Antworten online gefunden werden können, unschätzbar wertvoll ist.

Zu den besten Quellen für Unterstützungsinformationen gehören MDN (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu verwenden, machen die meisten Leute eine Suchmaschinen-Suche der Technologie, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen, zusammen mit einigen nützlichen externen Ressourcelinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Foren-Seite, auf der Sie Fragen stellen und Entwicklerkollegen ihre Lösungen teilen, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell gefunden [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon versuchen Sie, bei Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie sie haben — andere Entwickler werden wahrscheinlich auf die gleichen Probleme wie Sie gestoßen sein.

## Zusammenfassung

Das war also JavaScript-Debugging und Fehlerbehandlung. Einfach, nicht wahr? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start geben und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen können, auf die Sie stoßen werden.

Das war's für das Modul Dynamisches Scripting mit JavaScript; Glückwunsch zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
