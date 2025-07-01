---
title: Debugging und Fehlerbehandlung in JavaScript
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema JavaScript-Debugging zurück (das wir bereits in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) behandelt haben). Wir werden tiefer in Techniken zur Fehlersuche eintauchen, aber auch untersuchen, wie man vorausschauend programmieren und Fehler im Code abfangen kann, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie sie in vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Browser-Entwicklertools nutzen, um das auf Ihrer Seite laufende JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li><code>console.log()</code> und <code>console.error()</code> für das Debugging verwenden.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Devtools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir die Arten von Fehlern in JavaScript-Programmen betrachtet und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und Ihnen gezeigt, wie Sie mit einfachen [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen debuggen können.

In diesem Artikel gehen wir etwas tiefer auf die Werkzeuge ein, die Sie zur Verfügung haben, um Fehler zu finden, und untersuchen auch Wege, wie man Fehler von vornherein vermeiden kann.

## Ihr Code sollte validiert sein

Bevor Sie versuchen, spezifische Fehler zu finden, sollten Sie sicherstellen, dass Ihr Code gültig ist. Nutzen Sie den [Markup-Validierungsdienst der W3C](https://validator.w3.org/), den [CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) und ein JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken und Ihnen ermöglichen, sich auf die verbleibenden Fehler zu konzentrieren.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Fehler gemeldet werden, während Sie Ihren Code schreiben. Suchen Sie in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint und installieren Sie es.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, die Sie beachten sollten, wie z.B.:

- Grundlegende Syntax- und Logikprobleme (siehe nochmals [Fehlerbehebung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Scope definiert sind und dass es keine Konflikte zwischen in verschiedenen Bereichen deklarierten Elementen gibt (siehe [Funktionsscope und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welchen Scope es zutrifft und ob sein Wert der ist, den Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine kurze Einführung lesen; studieren Sie auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143), das ein typisches Muster zeigt, einen `this`-Scope in einer separaten Variable zu speichern und diese Variable in verschachtelten Funktionen zu verwenden, um sicherzustellen, dass Sie Funktionalität auf den korrekten `this`-Scope anwenden.
- Falsche Nutzung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "falschen Scope verwenden").

> [!CALLOUT]
> Ein Beispiel: In [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)) durchlaufen wir 10 Iterationen unter Verwendung einer mit `var` definierten Variablen, erstellen dabei jedes Mal einen Paragraphen und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignis-Handler hinzu. Wenn wir darauf klicken, soll jeder eine Meldung anzeigen, die seine Nummer enthält (den Wert von `i` zu dem Zeitpunkt, als er erstellt wurde). Stattdessen melden alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen durchläuft, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion verknüpft ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor Sie versuchen, die von ihnen zurückgegebenen Werte zu verwenden. Das bedeutet normalerweise, zu verstehen, wie _Promisen_ verwendet werden: Verwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angemessen oder das Ausführen des Codes, um das Ergebnis eines asynchronen Aufrufs im `then()`-Handler des Promise zu behandeln. Siehe [Anleitung zur Verwendung von Promisen](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler von JavaScript-Entwicklern](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige schöne Diskussionen über diese und weitere häufige Fehler.

## Die JavaScript-Konsole im Browser

Browser-Entwicklertools haben viele nützliche Funktionen zur Unterstützung beim Debuggen von JavaScript. Zum Start meldet die JavaScript-Konsole Fehler in Ihrem Code.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung hängt vom Browser ab, wird aber etwa lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (welches, wie Sie vielleicht erwarten, eigentlich ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein sollte). Dieses soll mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf aus einer externen `.json`-Datei abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Sie wissen vielleicht schon, was mit diesem Code nicht stimmt, aber lassen Sie uns ein bisschen mehr darüber erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console)-API, die es JavaScript ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie verfügt über eine Reihe von Funktionen; Sie haben wahrscheinlich schon [`console.log()`](/de/docs/Web/API/console/log_static) kennengelernt, das eine benutzerdefinierte Nachricht in der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf einzufügen, um den Rückgabewert von `fetch()` zu protokollieren, so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie vor der Fehlermeldung eine neue Nachricht in der Konsole:

```plain
Response value: [object Promise]
```

Die Ausgabe von `console.log()` zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst dann erfüllt wird, wenn die eigentliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir darauf warten, dass das `Promise` erfüllt wird.

### `console.error()` und Call Stacks

Als kurzer Exkurs, lassen Sie uns versuchen, eine andere Konsolenmethode zum Melden des Fehlers zu verwenden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

mit

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie sehen jetzt, dass die Nachricht als Fehler gemeldet wird, mit der gleichen Farbe und dem gleichen Symbol wie der nicht abgefangene Fehler darunter. Zusätzlich gibt es jetzt einen Ein-/Ausklapp-Pfeil neben der Nachricht. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile in der JavaScript-Datei anzeigt, von der der Fehler stammt. Tatsächlich hat die nicht abgefangene Fehlerzeile _auch_ diese Information, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Dies bedeutet, dass der Fehler aus der Funktion `showHeroes()` auftritt, Zeile 25, wie wir bereits bemerkt haben. Wenn Sie sich Ihren Code ansehen, werden Sie sehen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call Stack** bezeichnet und können wirklich nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers zu finden, der viele verschiedene Positionen in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht besonders hilfreich, kann jedoch nützlich sein, um einen Call Stack zu erzeugen, wenn noch keiner verfügbar ist.

### Den Fehler beheben

Jedenfalls, lassen Sie uns zurückgehen zu dem Versuch, unseren Fehler zu beheben. Wir können auf die Antwort des erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an den `fetch()`-Aufruf anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen übertragen, die ihn akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und prüfen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem nicht behoben. Leider haben wir **immer noch denselben Fehler**!

> [!NOTE]
> Zusammengefasst, jedes Mal, wenn etwas nicht funktioniert und ein Wert an einem Punkt in Ihrem Code nicht das zu sein scheint, was er sein sollte, können Sie `console.log()`, `console.error()`, oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwenden des JavaScript-Debuggers

Lassen Sie uns dieses Problem weiter mit einem anspruchsvolleren Feature der Entwicklerwerkzeuge im Browser untersuchen: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Tools sind in anderen Browsern verfügbar; die [Sources-Registerkarte](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht die Debugger-Registerkarte so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eins).
- Das mittlere Panel zeigt den Code im ausgewählten Skript an.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung an — _Breakpoints_, _Callstack_ und derzeit aktive _Scopes_.

Hauptfeature solcher Tools ist die Fähigkeit, Breakpoints im Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umwelt in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird auf derselben Zeile wie zuvor ausgelöst — `for (const hero of heroes) {` — Zeile 26 im folgenden Screenshot. Klicken Sie in diesem Panel auf diese Zeile, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil, der darüber erscheint).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes an dieser Zeile pausieren. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um Folgendes anzuzeigen:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde der gleiche Callstack, den wir uns früher im `console.error()`-Abschnitt angesehen haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, damit die aktuelle Funktion aufgerufen wurde. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns derzeit befinden, und als zweite `onload`, die die Ereignis-Handler-Funktion speichert, die den Aufruf zu `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Scope für die Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Scope). Jeder Scope kann erweitert werden, um die Werte von Variablen im Scope zum Zeitpunkt des Stoppens der Codeausführung anzuzeigen.

Wir können darin einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Scope — Sie können daraus sehen, dass die heroes-Variable `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft des `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument an `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise hat also nicht das JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu lösen. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie feststecken, können Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Die Debugger-Registerkarte hat viele andere nützliche Funktionen, die wir hier nicht behandelt haben, z. B. bedingte Breakpoints und sogenannte Watch Expressions. Für viele weitere Informationen sehen Sie sich die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite an.

## Behandeln von JavaScript-Fehlern in Ihrem Code

HTML und CSS sind sehr nachsichtig — Fehler und nicht erkannte Features können oft verarbeitet werden, aufgrund der Natur der Sprachen. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax trifft, wirft sie oft Fehler.

Lassen Sie uns eine gängige Strategie zur Behandlung von JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sind dazu gedacht, gefolgt von einer Kopie der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Computer, dem Hinzufügen der Code-Snippets zwischen den öffnenden und schließenden `<script>` und `</script>`-Tags, und dem Öffnen der Datei in einem Browser und dem Betrachten der Ausgabe in der JavaScript-Konsole der Entwicklerwerkzeuge.

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

Eine häufige Verwendung von [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist die Fehlerbehandlung. Conditionals ermöglichen es Ihnen, unterschiedlichen Code auszuführen, abhängig vom Wert einer Variablen. Oft möchten Sie dies defensiv nutzen, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler zu erfassen, wenn der Wert ein falsches Ergebnis zurückgeben würde, was später Probleme verursachen könnte.

Schauen wir uns ein Beispiel an. Nehmen wir an, wir haben eine Funktion, die als Argument die Körpergröße des Benutzers in Zoll annimmt und seine Körpergröße in Metern auf zwei Dezimalstellen genau zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie im `<script>`-Element Ihrer Beispieldatei eine `const` namens `height` und weisen Sie ihr einen Wert von `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf und übergeben Sie ihr die `height`-Konstante als Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und sehen Sie in der JavaScript-Konsole der Entwicklerwerkzeuge nach. Sie sollten einen Wert von `1.78` protokolliert sehen.

5. Das funktioniert also isoliert einwandfrei. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:
   - Wenn Sie den `height`-Wert in `"70"` ändern (d.h. `70` als String ausdrücken), sollte das Beispiel ... immer noch einwandfrei funktionieren. Das liegt daran, dass die Berechnung in der ersten Zeile des Strings den Wert in einen numerischen Datentyp umwandelt. Dies ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexerem Code können falsche Daten zu allerlei Fehlern führen, einige von ihnen subtil und schwer zu erkennen!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Das könnte allerlei Probleme verursachen, zum Beispiel wenn Sie die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website einfügen möchten.
   - Wenn Sie den `height`-Wert ganz entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), zeigt die Konsole einen Fehler wie "Uncaught ReferenceError: height is not defined", einen Fehler, der Ihre Anwendung zum Stillstand bringen könnte.

   Offensichtlich sind keine dieser Ergebnisse ideal. Wie verteidigen wir uns gegen schlechte Daten?

6. Lassen Sie uns eine Bedingung in unserer Funktion hinzufügen, um zu prüfen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion durch folgende zu ersetzen:

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

7. Wenn Sie nun die ersten beiden Szenarien erneut ausprobieren, sehen Sie unsere etwas nützlichere Nachricht zurückgegeben, um Ihnen eine Vorstellung davon zu geben, was getan werden muss, um das Problem zu beheben. Sie könnten alles Mögliche hineinschreiben, was Sie möchten, einschließlich des Versuchs, Code auszuführen, um den Wert von `num` zu korrigieren, aber das ist nicht ratsam — diese Funktion hat einen einfachen Zweck, und Sie sollten die Korrektur des Werts irgendwo anders im System behandeln.

   > [!NOTE]
   > Im `if()`-Statement testen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden, aber wir testen auch, ob {{jsxref("isNaN()", "!isNaN(num)")}} `false` zurückgibt. Wir müssen das tun, um uns gegen den spezifischen Fall zu verteidigen, dass `num` auf `NaN` gesetzt wird, da seltsamerweise `typeof NaN` `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, wird Ihnen immer noch der Fehler "Uncaught ReferenceError: height is not defined" angezeigt. Sie können nicht beheben, dass ein Wert nicht verfügbar ist, indem Sie es von innerhalb einer Funktion versuchen, die den Wert zu verwenden versucht.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, unsere Funktion dazu zu bringen, einen benutzerdefinierten Fehler zurückzugeben, wenn sie nicht die richtigen Daten erhält. Wir werden uns zuerst ansehen, wie das geht, dann werden wir alle Fehler zusammen behandeln.

### Benutzerdefinierte Fehler werfen

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler werfen, indem Sie das [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Statement zusammen mit dem {{jsxref("Error.Error", "Error()")}}-Konstruktor verwenden. Lassen Sie uns das in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile innerhalb des `else`-Blocks Ihrer Funktion durch folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. Nicht-Nummern-)Wert gesetzt ist. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler angezeigt bekommen, zusammen mit einem nützlichen Call Stack, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (beachten Sie jedoch, dass die Nachricht immer noch besagt, dass der Fehler "ungefangen" oder "unbehandelt" ist). Fehler sind zwar nervig, aber das ist weit nützlicher, als die Funktion erfolgreich auszuführen und einen Nichtnummernwert zurückzugeben, der später Probleme verursachen könnte.

Wie sollen wir also all diese Fehler behandeln?

### try...catch

Das [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Statement ist speziell zur Fehlerbehandlung konzipiert. Es hat folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Im `try`-Block versuchen Sie, etwas Code auszuführen. Wenn dieser Code ohne einen geworfenen Fehler ausgeführt wird, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler geworfen wird, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt bietet, das den Fehler darstellt, und es Ihnen ermöglicht, Code zur Behandlung auszuführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile in einem `try`-Block aus und behandeln alle zugehörigen Fehler in einem entsprechenden `catch`-Block.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren Sie, und Sie sollten nun zwei Dinge sehen:
   - Die Fehlermeldung und den Call Stack wie zuvor, jedoch diesmal ohne die Kennzeichnung "ungefangen" oder "unbehandelt".
   - Die geloggte Nachricht "Insert code to handle the error".

3. Jetzt ändern Sie `num` in einen guten (Nummern-)Wert, und Sie sehen das Ergebnis der Berechnung geloggt, ohne Fehlermeldung.

Dies ist bedeutsam — alle geworfenen Fehler sind nun behandelt, sodass sie die Anwendung nicht mehr zum Absturz bringen. Sie können jeden Code ausführen, den Sie möchten, um den Fehler zu behandeln. Wir protokollieren oben nur eine Nachricht, aber zum Beispiel könnten Sie in Ihrem früheren Funktion einen Aufruf ausführen, der den Benutzer auffordert, seine Körpergröße erneut einzugeben, diesmal um den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um unterschiedlichen Fehlerbehandlungscode auszuführen, je nachdem, welcher Typ Fehler zurückgegeben wird.

### Feature-Detection

Feature-Detection ist nützlich, wenn Sie planen, neue JavaScript-Features zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie das Feature und führen Sie dann bedingt Code aus, um eine akzeptable Erfahrung sowohl in Browsern, die das Feature unterstützen, als auch in denen, die es nicht tun, zu bieten. Als kurzes Beispiel bietet die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser ausgeführt wird, darlegt) einen Haupteinstiegspunkt für ihre Nutzung — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur wie die, die wir zuvor gesehen haben, verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden einige weitere Beispiele für Feature-Detection in [Alternativen zum UA-Durchschnüffeln](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele weitere Probleme, auf die Sie bei JavaScript (sowie HTML und CSS!) stoßen werden, sodass das Wissen, wie man online Antworten findet, von unschätzbarem Wert ist.

Zu den besten Quellen für Supportinformationen zählen MDN (das ist, wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu verwenden, machen die meisten Leute eine Suchmaschinensuche der Technologie, über die sie Informationen suchen, plus den Begriff "mdn", zum Beispiel, "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Supportinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Beispielsweise siehe <https://caniuse.com/#search=video> (Sie müssen lediglich das Feature, das Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forums-Seite, auf der Sie Fragen stellen können und andere Entwickler ihre Lösungen teilen, alte Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, zu recherchieren, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Beispielsweise suchten wir nach "Autofokus im HTML-Dialog deaktivieren" auf SO und kamen sehr schnell zu [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon, versuchen Sie, in Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft hilfreich, nach bestimmten Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also Debugging und Fehlerbehandlung in JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte zumindest einen Anfang geben und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen können, auf die Sie stoßen werden.

Das war es für das Modul über dynamisches Scripting mit JavaScript; herzlichen Glückwunsch, dass Sie bis zum Ende gekommen sind! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
