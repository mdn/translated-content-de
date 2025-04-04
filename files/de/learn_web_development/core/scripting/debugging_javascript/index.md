---
title: JavaScript-Debugging und Fehlermanagement
short-title: Debugging und Fehlermanagement
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: da9123f0820286a9a87c8ca33447e7c5e5a20320
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debugging in JavaScript zurück (das wir zuerst in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier vertiefen wir die Techniken zur Fehlersuche, betrachten aber auch, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Browser-Entwicklertools zum Untersuchen des auf Ihrer Seite laufenden JavaScript und zum Erkennen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Erweitertes JavaScript-Debugging mit Browser-Devtools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code>, und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher in diesem Modul, in [Was ist schief gelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), betrachteten wir allgemein die Arten von Fehlern, die in JavaScript-Programmen auftreten können, und sagten, dass sie grob in zwei Typen unterteilt werden können – Syntaxfehler und Logikfehler. Wir halfen Ihnen auch, einige häufige JavaScript-Fehlermeldungen zu verstehen, und zeigten Ihnen, wie Sie mithilfe von [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen einfache Debugging-Schritte durchführen können.

In diesem Artikel gehen wir etwas tiefer auf die Ihnen zur Verfügung stehenden Werkzeuge zur Fehlersuche ein und betrachten auch Möglichkeiten, Fehler von vornherein zu vermeiden.

## Linting Ihres Codes

Sie sollten sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler zu finden. Nutzen Sie den [Markup Validation Service der W3C](https://validator.w3.org/), den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dadurch werden wahrscheinlich eine Menge Fehler gefunden, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder in eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Ihnen Fehler gemeldet werden, während Sie Ihren Code schreiben. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie:

- Grundlegende Syntax- und Logikprobleme (siehe auch [Fehlerbehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Scope definiert sind und Sie keine Konflikte zwischen an verschiedenen Stellen deklarierten Elementen haben (siehe dazu [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this) in Bezug darauf, auf welchen Scope es angewendet wird und ob der Wert tatsächlich der beabsichtigte ist. Lesen Sie [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine einfache Einführung; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt: Speichern eines `this`-Scopes in einer separaten Variablen und Verwenden dieser Variable in verschachtelten Funktionen, damit Sie sicherstellen können, dass Sie die Funktionalität auf den richtigen `this`-Scope anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner: "Den Scope falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen unter Verwendung einer mit `var` definierten Variablen, erstellen jedes Mal einen Paragraphen und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Event-Handler hinzu. Wenn darauf geklickt wird, sollte jede einen Warnhinweis mit ihrer Nummer (dem Wert von `i` zur Zeit ihrer Erstellung) anzeigen. Tatsächlich geben sie alle `i` als 11 aus – weil die `for`-Schleife alle Iterationen durchläuft, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren – der Wert von `i`, der mit der Funktion verknüpft ist, ist dann für jede Iteration eindeutig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Das bedeutet normalerweise zu verstehen, wie _Promises_ benutzt werden: entweder durch den korrekten Einsatz von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder indem der Code, der das Ergebnis eines asynchronen Aufrufs verarbeitet, im {{jsxref("Promise.then()", "then()")}}-Handler des Promises ausgeführt wird. Siehe [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises), um in dieses Thema einzuführen.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) bietet einige gute Diskussionen über diese und andere häufige Fehler.

## Die JavaScript-Konsole im Browser

Browser-Entwicklertools haben viele nützliche Funktionen, um beim Debuggen von JavaScript zu helfen. Zu Beginn wird der JavaScript-Konsole Fehler in Ihrem Code melden.

Erstellen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung ist browserabhängig, aber sie wird etwa so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Codeteil folgender:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (das, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dies soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Vielleicht wissen Sie bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns ihn noch weiter erkunden, um zu zeigen, wie Sie diesem Problem auf den Grund gehen könnten. Beginnen wir mit der [Console](/de/docs/Web/API/console) API, die JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Es gibt eine Reihe von Funktionen; Sie haben bereits [`console.log()`](/de/docs/Web/API/console/log_static) kennengelernt, das eine benutzerdefinierte Nachricht auf der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, ungefähr so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie vor der Fehlermeldung eine neue Nachricht in die Konsole protokolliert:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort aus dem Netzwerk eingetroffen ist. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Aufrufstapel

Als kurzen Exkurs versuchen wir, eine andere Konsolenmethode zu verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser. Sie werden jetzt sehen, dass die Nachricht als Fehler gemeldet wird, mit derselben Farbe und demselben Symbol wie der weiter unten auftretende nicht abgefangene Fehler. Zusätzlich gibt es jetzt einen Erweiterungspfeil neben der Nachricht. Wenn Sie darauf klicken, wird Ihnen eine einzelne Zeile angezeigt, die Ihnen sagt, aus welcher Zeile in der JavaScript-Datei der Fehler stammt. Tatsächlich hat auch die Zeile des nicht abgefangenen Fehlers _dies_:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler von der Funktion `showHeroes()` in Zeile 25 kommt, wie wir zuvor festgestellt haben. Wenn Sie sich Ihren Code ansehen, werden Sie feststellen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Aufrufstapel** bezeichnet und können sehr nützlich sein, wenn man versucht, die Quelle eines Fehlers, der viele verschiedene Stellen in Ihrem Code betrifft, aufzuspüren.

Der `console.error()`-Aufruf ist in diesem Fall nicht sehr nützlich, aber er kann nützlich sein, um einen Aufrufstapel zu erzeugen, wenn keiner bereits verfügbar ist.

### Behebung des Fehlers

Kehren wir nun dazu zurück, unseren Fehler zu beheben. Wir können auf die Antwort zugreifen, wenn das `Promise` erfüllt wurde, indem wir die Methode {{jsxref("Promise.prototype.then()", "then()")}} an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen übergeben, die ihn akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und prüfen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider haben wir **immer noch denselben Fehler**!

> [!NOTE]
> Zusammenfassend lässt sich sagen: Immer wenn etwas nicht funktioniert und ein Wert an einem Punkt in Ihrem Code nicht zu sein scheint, was er sein soll, können Sie `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was vor sich geht.

## Verwendung des JavaScript-Debuggers

Lassen Sie uns dieses Problem weiter untersuchen, indem wir ein ausgefeilteres Feature der Browser-Entwicklertools verwenden: den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)) usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Das Hauptmerkmal solcher Werkzeuge ist die Fähigkeit, Breakpoints im Code zu setzen — dies sind Punkte, an denen die Ausführung des Codes gestoppt wird, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns das Verwenden von Breakpoints erkunden:

1. Der Fehler wird in derselben Zeile wie zuvor geworfen — `for (const hero of heroes) {` — Zeile 26 im unten stehenden Screenshot. Klicken Sie in der Mitte auf diese Zeile, um einen Breakpoint darauf zu setzen (Sie sehen einen blauen Pfeil darüber erscheinen).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes auf dieser Zeile anhalten. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um das Folgende anzuzeigen:

![Firefox-Debugger mit Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details zum gesetzten Breakpoint.
- Unter _Call Stack_ sehen Sie einige Einträge – dies ist im Grunde dasselbe wie der Aufrufstapel, den wir zuvor im Abschnitt `console.error()` betrachtet haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und zweitens haben wir `onload`, das den Event-Handler-Funktion speichert, die den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Scope für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block` und `Window` (den globalen Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen im Scope anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Scope — Sie können darin sehen, dass die heroes-Variable `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, nicht ein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise liegt also nicht im JSON-Format vor: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu lösen. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie feststecken, können Sie den behobenen Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Breakpoints und Überwachungsausdrücke. Für viel mehr Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Behandlung von JavaScript-Fehlern in Ihrem Code

HTML und CSS sind nachsichtig — Fehler und nicht erkannte Merkmale können oft aufgrund der Natur der Sprachen behandelt werden. Beispielsweise ignoriert CSS nicht erkannte Eigenschaften, und der restliche Code funktioniert oft einfach. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, werden oft Fehler geworfen.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sind so gestaltet, dass sie gefolgt werden können, indem Sie eine Kopie der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrer lokalen Maschine erstellen, die Code-Snippets zwischen den öffnenden und schließenden `<script>` und `</script>` Tags hinzufügen und dann die Datei im Browser öffnen und die Ausgabe in der Devtools JavaScript-Konsole betrachten.

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

### Konditionale

Ein häufiger Einsatz von [JavaScript-Konditionalen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) besteht darin, Fehler zu behandeln. Konditionale ermöglichen es Ihnen, unterschiedlichen Code abhängig vom Wert einer Variablen auszuführen. Oft werden Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler zu erfassen, wenn der Wert dazu führen würde, dass ein falsches Ergebnis zurückgegeben wird, das später zu Problemen führen könnte.

Schauen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die als Argument die Größe des Benutzers in Zoll erhält und seine Größe in Metern auf zwei Dezimalstellen zurückgibt. Dies könnte etwa so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispiel-`<script>`-Element eine `const` namens `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, übergeben Sie ihr die `height`-Konstante als Argument und geben Sie den Rückgabewert in der Konsole aus:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und sehen Sie sich die Devtools-JavaScript-Konsole an. Sie sollten sehen, dass ein Wert von `1.78` ausgegeben wird.

5. Das funktioniert also alleine gut. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Versuchen Sie, diese Szenarien umzusetzen:

   - Wenn Sie den `height`-Wert in `"70"` ändern (das heißt, `70` als String ausgedrückt), sollte das Beispiel ... immer noch gut funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile die Zeichenkette in einen Zahlentyp zwingt. Dies ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexerem Code können falsche Daten zu allerlei Fehler führen, einige davon subtil und schwer zu entdecken!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte allerlei Probleme verursachen, beispielsweise wenn Sie die Größe des Benutzers irgendwo in der Benutzeroberfläche der Website anzeigen möchten.
   - Wenn Sie den `height`-Wert komplett entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), wird in der Konsole eine Fehlermeldung wie "Uncaught ReferenceError: height is not defined" angezeigt, die die Ausführung Ihrer Anwendung zum Erliegen bringen könnte.

   Offensichtlich sind keine dieser Ergebnisse großartig. Wie verteidigen wir uns gegen schlechte Daten?

6. Lassen Sie uns ein Konditional in unsere Funktion einfügen, um zu überprüfen, ob die Daten in Ordnung sind, bevor wir die Berechnung durchführen. Versuchen Sie, Ihre aktuelle Funktion durch folgende zu ersetzen:

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

7. Wenn Sie jetzt die ersten beiden Szenarien erneut ausprobieren, sehen Sie unsere etwas nützlichere Fehlermeldung, die Ihnen eine Vorstellung davon gibt, was zu tun ist, um das Problem zu beheben. Sie könnten dort alles einfügen, was Ihnen gefällt, einschließlich des Versuchs, Code auszuführen, um den Wert von `num` zu korrigieren, aber das ist nicht ratsam — diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Wertes an einer anderen Stelle im System handhaben.

   > [!NOTE]
   > In der `if()`-Anweisung prüfen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden, aber wir prüfen auch, ob {{jsxref("isNaN()", "!isNaN(num)")}} `false` zurückgibt. Das müssen wir tun, um gegen den spezifischen Fall zu schützen, dass `num` auf `NaN` gesetzt ist, da merkwürdigerweise `typeof NaN` `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut versuchen, erhalten Sie immer noch den "Uncaught ReferenceError: height is not defined"-Fehler gemeldet. Sie können nicht von innerhalb einer Funktion, die versucht, den Wert zu verwenden, beheben, dass ein Wert nicht verfügbar ist.

Wie handhaben wir das? Nun, es ist wahrscheinlich besser, unsere Funktion eine benutzerdefinierte Fehlernachricht zurückgeben zu lassen, wenn sie keine korrekten Daten erhält. Wir sehen uns zuerst an, wie das geht, und behandeln dann alle Fehler zusammen.

### Benutzerdefinierte Fehler werfen

Sie können an jedem Punkt in Ihrem Code einen benutzerdefinierten Fehler werfen, indem Sie die [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung zusammen mit dem {{jsxref("Error.Error", "Error()")}}-Konstruktor verwenden. Lassen Sie uns das in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile innerhalb des `else`-Blocks Ihrer Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. nicht numerischen) Wert gesetzt ist. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler geworfen sehen, zusammen mit einem nützlichen Aufrufstapel, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (obwohl die Meldung immer noch besagt, dass der Fehler "nicht abgefangen" oder "unbehandelt" ist). Gut, Fehler sind lästig, aber das ist weit nützlicher, als die Funktion erfolgreich auszuführen und einen Nicht-Nummernwert zurückzugeben, der später zu Problemen führen könnte.

Wie handeln wir also alle diese Fehler?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell zum Umgang mit Fehlern konzipiert. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Im `try`-Block versuchen Sie, etwas Code auszuführen. Wenn dieser Code ohne einen geworfenen Fehler ausgeführt wird, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wird jedoch ein Fehler geworfen, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt ermöglicht, das den Fehler darstellt, und Ihnen erlaubt, Code zum Umgang mit dem Fehler auszuführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile im `try`-Block aus und behandeln alle von ihr zurückgegebenen Fehler im entsprechenden `catch`-Block.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. speichern und aktualisieren Sie, und Sie sollten nun zwei Dinge sehen:

   - Die Fehlermeldung und den Aufrufstapel wie zuvor, aber dieses Mal ohne ein Label wie "nicht abgefangen" oder "unbehandelt".
   - Die protokollierte Nachricht "Code zum Umgang mit dem Fehler einfügen".

3. Aktualisieren Sie jetzt `num` in einen guten (numerischen) Wert, und Sie werden das Ergebnis der Berechnung protokolliert sehen, ohne Fehlermeldung.

Das ist bedeutend – alle geworfenen Fehler werden nicht länger unbearbeitet gelassen, sodass sie die Anwendung nicht mehr zum Absturz bringen. Sie können jeden beliebigen Code zur Fehlerbehandlung ausführen. Oben protokollieren wir nur eine Nachricht, aber zum Beispiel könnten Sie die zuvor ausgeführte Funktion aufrufen, um den Benutzer zu bitten, seine Größe einzugeben, diesmal mit der Aufforderung, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um unterschiedliche Fehlerbehandlungscode auszuführen, je nachdem, welche Art von Fehler zurückgegeben wird.

### Feature-Erkennung

Die Feature-Erkennung ist nützlich, wenn Sie neue JavaScript-Funktionen verwenden möchten, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie die Funktion und führen Sie dann bedingten Code aus, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die sie nicht unterstützen, eine akzeptable Erfahrung zu gewährleisten. Ein schnelles Beispiel: Die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bietet, auf dem der Webbrowser ausgeführt wird) hat einen Haupteinstiegspunkt für ihre Nutzung – eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie zuvor gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden weitere Beispiele für die Feature-Erkennung in [Alternativen zum UA-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, denen Sie mit JavaScript (und HTML und CSS!) begegnen werden, sodass Kenntnisse, wie man Antworten online findet, unschätzbar sind.

Unter den besten Quellen für Supportinformationen befinden sich MDN (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Leute eine Suchmaschinenabfrage der Technologie aus, über die sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Supportinformationen, zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das gesuchte Feature in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forumsite, auf der Sie Fragen stellen können und Mitentwickler ihre Lösungen teilen, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor eine neue Frage gestellt wird. Zum Beispiel haben wir nach "Autofokus auf HTML-Dialog deaktivieren" auf SO gesucht und sehr schnell den Beitrag [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich dieselben Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also JavaScript-Debugging und Fehlerbehandlung. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang bieten und einige Ideen, wie Sie die JavaScript-bezogenen Probleme, denen Sie begegnen werden, angehen können.

Das war es für das Modul "Dynamisches Skripting mit JavaScript"; Glückwunsch, dass Sie das Ende erreicht haben! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
