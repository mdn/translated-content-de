---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 9d3d642daf9df9ece138fa39972edc5f7d6dcd6b
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema JavaScript-Debugging zurück (welches wir erstmals in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken zum Aufspüren von Fehlern eintauchen, aber auch betrachten, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und die <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verwendung der Entwickler-Tools des Browsers, um das JavaScript auf Ihrer Seite zu inspizieren und zu sehen, welche Fehler es generiert.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklertools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), betrachteten wir weitgehend die Arten von Fehlern, die in JavaScript-Programmen auftreten können, und sagten, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und Ihnen gezeigt, wie man mit einfachen Debugging-Maßnahmen wie [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen vorgeht.

In diesem Artikel werden wir etwas tiefer in die Werkzeuge eintauchen, die Ihnen zur Verfügung stehen, um Fehler aufzuspüren, und auch Möglichkeiten betrachten, um Fehler von vornherein zu vermeiden.

## Linting Ihres Codes

Sie sollten sicherstellen, dass Ihr Code zunächst gültig ist, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup Validation Service](https://validator.w3.org/) des W3C, den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dadurch werden wahrscheinlich einige Fehler aufgedeckt, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Plugins für Code-Editoren

Es ist nicht sehr bequem, Ihren Code immer wieder auf eine Webseite zu kopieren und einzufügen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Sie Fehler direkt beim Schreiben Ihres Codes gemeldet bekommen. Versuchen Sie, nach ESLint in der Plugins- oder Erweiterungsliste Ihres Code-Editors zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (sehen Sie sich auch [JavaScript-Fehlerbehebung](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Sicherstellen, dass Variablen, etc. im richtigen Geltungsbereich definiert sind und Sie nicht in Konflikte zwischen an verschiedenen Stellen deklarierten Objekten geraten (siehe [Funktionsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung hinsichtlich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug auf den Geltungsbereich, auf den es sich bezieht, und ob sein Wert das ist, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, den `this`-Geltungsbereich in einer separaten Variable zu speichern und dann diese Variable in verschachtelten Funktionen zu verwenden, um sicherzustellen, dass die Funktionalität auf den richtigen `this`-Geltungsbereich angewendet wird.
- Unkorrekte Nutzung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "Falscher Geltungsbereich").

> [!CALLOUT]
> Beispielsweise wird in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Source Code](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)) durch 10 Iterationen mit einer Variablen iteriert, die mit `var` definiert ist. Jedes Mal wird ein Absatz erstellt und ihm ein [onclick](/de/docs/Web/API/Element/click_event)-Event-Handler hinzugefügt. Beim Klicken soll jede eine Alert-Nachricht mit ihrer Nummer (dem Wert von `i` zur Erstellungszeit) anzeigen. Stattdessen berichten alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen ausführt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion verbunden ist, wird dann für jede Iteration einzigartig. Sehen Sie [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Source Code](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die zurückgegebenen Werte zu verwenden. Dies bedeutet normalerweise, zu verstehen, wie man _Promises_ verwendet: den Einsatz von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angemessen zu nutzen oder den Code auszuführen, um das Ergebnis eines asynchronen Aufrufs im Handler der {{jsxref("Promise.then()", "then()")}}-Methode zu behandeln. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Buggy JavaScript Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige schöne Diskussionen über diese und weitere häufige Fehler.

## Die JavaScript-Konsole im Browser

Entwicklertools im Browser haben viele nützliche Funktionen zum Debuggen von JavaScript. Zu Beginn wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (siehe auch den [Source Code](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie in die Konsole schauen, sehen Sie eine Fehlermeldung. Die genaue Wortwahl ist browserabhängig, aber sie wird etwas Ähnliches sein wie: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code schlägt also fehl, sobald wir versuchen, `jsonObj` zu verwenden (welches, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Das soll aus einer externen `.json`-Datei mit folgendem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console-API

Vielleicht wissen Sie schon, was mit diesem Code nicht stimmt, aber lassen Sie uns ihn weiter erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console)-API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Es sind eine Anzahl von Funktionen verfügbar; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, welches eine benutzerdefinierte Nachricht an die Konsole ausgibt.

Fügen Sie einen `console.log()`-Aufruf hinzu, um den Rückgabewert von `fetch()` zu protokollieren, so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal, vor der Fehlermeldung, sehen Sie eine neue Nachricht in der Konsole:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die eigentliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Call Stacks

Als kurzen Exkurs wollen wir eine andere Konsolenmethode verwenden, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie werden jetzt sehen, dass die Nachricht als Fehler gemeldet wird, mit derselben Farbe und Symbolik wie der nicht abgefangene Fehler darunter. Zusätzlich gibt es jetzt einen Erweiterungspfeil neben der Nachricht. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile in der JavaScript-Datei anzeigt, aus der der Fehler stammt. Tatsächlich hat auch die Zeile des nicht abgefangenen Fehlers diesen Pfeil, jedoch enthält sie zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler von der `showHeroes()`-Funktion auf Zeile 25 kommt, wie wir zuvor festgestellt haben. Wenn Sie sich Ihren Code ansehen, werden Sie feststellen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call Stack** bezeichnet und können wirklich nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers zu finden, der viele verschiedene Stellen in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht besonders nützlich, aber er kann nützlich sein, um einen Call Stack zu erzeugen, wenn noch keiner verfügbar ist.

### Beheben des Fehlers

Jedenfalls, lassen Sie uns zu unserem Fehler zurückkehren und versuchen, ihn zu beheben. Wir können die Antwort von dem erfüllten `Promise` abrufen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an das Ende des `fetch()`-Aufrufs anhängen. Dann können wir den daraus resultierenden Antwortwert in die Funktionen übergeben, die ihn akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren, und sehen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die obige Änderung hat das Problem **nicht behoben**!

> [!NOTE]
> Um zusammenzufassen, wann immer etwas nicht funktioniert und ein Wert an einem Punkt in Ihrem Code nicht das zu sein scheint, was er sein sollte, können Sie `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Lassen Sie uns dieses Problem weiter untersuchen mit einem höheren Maß an Komplexität durch die Verwendung eines besseren Features der Entwickler-Tools des Browsers: des [JavaScript-Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Tools sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), etc.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript an.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Call Stack_ und aktuell aktive _Scopes_.

Das Hauptfeature solcher Tools ist die Möglichkeit, Breakpoints zu Ihrem Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was passiert.

Lassen Sie uns die Verwendung von Breakpoints erkunden:

1. Der Fehler wird in der gleichen Zeile wie zuvor ausgelöst — `for (const hero of heroes) {` — Zeile 26 im unten gezeigten Screenshot. Klicken Sie auf die Zeilennummer im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie werden einen blauen Pfeil sehen, der darüber erscheint).
2. Aktualisieren Sie jetzt die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes in dieser Zeile anhalten. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um Folgendes anzuzeigen:

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie ein paar Einträge — im Grunde ist dies der gleiche Call Stack wie den, den wir uns vorhin im `console.error()`-Abschnitt angesehen haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns befinden, und als Zweites haben wir `onload`, welches die Event-Handler-Funktion enthält, die den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Scope für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block` und `Window` (den globalen Scope). Jeder Scope kann erweitert werden, um die Variablen in ihm und ihre Werte zu sehen, als die Ausführung des Codes gestoppt wurde.

Wir können in hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Scope — Sie sehen hier, dass die heroes-Variable `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert und kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der nötig ist, um den Inhalt der Antwort als JSON-Objekt zu erhalten.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation zum [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie steckenbleiben, können Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Eigenschaften, die wir hier nicht behandelt haben, zum Beispiel bedingte Breakpoints und Ausgabe-Ausdrücke. Für viel mehr Informationen, sehen Sie sich die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite an.

## Fehlerbehandlung in Ihrem JavaScript-Code

HTML und CSS sind nachsichtig — Fehler und nicht erkannte Features können oft aufgrund der Natur der Sprachkonstrukte behandelt werden. Beispielsweise ignoriert CSS nicht erkannte Eigenschaften, und der restliche Code funktioniert oft einfach. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder unbekannte Syntax trifft, wirft sie oft Fehler.

Lassen Sie uns eine übliche Strategie zur Fehlerbehandlung in Ihrem JavaScript-Code erkunden. Die folgenden Abschnitte sind dazu gedacht, Schritt für Schritt nachgemacht zu werden, indem Sie die unten angegebene Vorlage als `handling-errors.html` auf Ihrem lokalen Rechner kopieren, die Code-Snippets zwischen den öffnenden und schließenden `<script>`- und `</script>`-Tags hinzufügen und dann die Datei in einem Browser öffnen, um sich die Ausgabe im JavaScript-Console der Entwicklertools anzusehen.

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

### Konditionale Anweisungen

Eine häufige Verwendung von [JavaScript-Konditionalen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist die Behandlung von Fehlern. Konditionale Anweisungen ermöglichen es Ihnen, je nach Wert einer Variablen unterschiedlichen Code auszuführen. Oft werden Sie dies defensiv verwenden wollen, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler aufzufangen, wenn der Wert ein inkorrektes Ergebnis zurückgeben würde, was später zu Problemen führen könnte.

Schauen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die als Argument die Größe eines Benutzers in Zoll entgegennehmen und ihre Größe in Metern zurückgeben soll, auf 2 Dezimalstellen gerundet. Dies könnte folgendermaßen aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispiel-Datei im `<script>`-Element eine `const` namens `height` und weisen Sie ihr einen Wert von `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter diese Zeile.

3. Rufen Sie die Funktion auf, indem Sie ihr das `height`-Konstant als Argument übergeben, und protokollieren Sie den Rückgabewert an die Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und schauen Sie sich das JavaScript-Console der Entwicklertools an. Sie sollten einen Wert von `1.78` sehen, der darauf protokolliert wird.

5. Dies funktioniert also einwandfrei isoliert. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:
   - Wenn Sie den `height`-Wert in `"70"` ändern (d.h. `70` als String ausgedrückt), sollte das Beispiel ... immer noch einwandfrei funktionieren. Dies liegt daran, dass die Berechnung in der ersten Code-Zeile den Wert in einen Nummerndatentyp zwingt. In einem einfachen Fall wie diesem ist dies in Ordnung, aber in komplexerem Code können falsche Daten zu allerlei Bugs führen, von denen einige subtil und schwer zu erkennen sein können!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl verwandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte alle möglichen Probleme verursachen, z.B. wenn Sie die Benutzergröße irgendwo in der Benutzeroberfläche der Webseite verwenden möchten.
   - Wenn Sie den `height`-Wert ganz entfernen (kommentieren Sie ihn aus, indem Sie `//` an den Anfang der Zeile setzen), zeigt die Konsole einen Fehler an, etwa "Uncaught ReferenceError: height is not defined", was dazu führen kann, dass Ihre Anwendung zum Stillstand kommt.

   Offensichtlich sind keine dieser Ergebnisse großartig. Wie verteidigen wir uns gegen fehlerhafte Daten?

6. Lassen Sie uns eine konditionale Anweisung in unsere Funktion aufnehmen, um zu testen, ob die Daten brauchbar sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion durch folgende zu ersetzen:

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

7. Wenn Sie nun die ersten beiden Szenarien erneut versuchen, sehen Sie unsere geringfügig nützlichere Nachricht zurückgegeben, die Ihnen eine Vorstellung davon gibt, was getan werden muss, um das Problem zu beheben. Sie könnten dort alles einfügen, was Sie möchten, einschließlich des Versuchs, Code auszuführen, um den Wert von `num` zu korrigieren, aber das wird nicht empfohlen — diese Funktion hat einen einfachen Zweck, und Sie sollten das Korrigieren des Wertes an einer anderen Stelle im System handhaben.

   > [!NOTE]
   > In der `if()`-Anweisung prüfen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden, aber auch testen, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um für den speziellen Fall von `num` vorbeugend zu handeln, der auf `NaN` gesetzt ist, weil `typeof NaN` weiterhin `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut versuchen, wird immer noch der "Uncaught ReferenceError: height is not defined"-Fehler an Sie weitergegeben. Sie können nicht von innerhalb einer Funktion heraus beheben, dass ein Wert nicht verfügbar ist, wenn die Funktion diesen Wert verwenden möchte.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, unsere Funktion dazu zu bringen, einen benutzerdefinierten Fehler zurückzugeben, wenn sie nicht die richtigen Daten erhält. Zuerst schauen wir uns an, wie man das macht, und dann behandeln wir alle Fehler zusammen.

### Benutzerdefinierte Fehler werfen

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler auslösen mit der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung, in Verbindung mit dem {{jsxref("Error.Error", "Error()")}}-Konstruktor. Lassen Sie uns das in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile innerhalb des `else`-Blocks durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (d.h. keinen zahlenwertigen) Wert eingestellt ist. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler ausgelöst sehen, zusammen mit einem nützlichen Call Stack, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (obwohl beachten Sie, dass die Nachricht uns immer noch sagt, dass der Fehler "uncaught" oder "unhandled" ist). Okay, Fehler sind ärgerlich, aber dies ist viel nützlicher, als die Funktion erfolgreich auszuführen und einen nicht-nummerischen Wert zurückzugeben, der später Probleme verursachen könnte.

Wie behandeln wir dann alle diese Fehler?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell dafür ausgelegt, Fehler zu behandeln. Sie hat die folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try`-Blocks versuchen Sie, etwas Code auszuführen. Wenn dieser Code ohne einen ausgelösten Fehler läuft, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler ausgelöst wird, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt hat, das den Fehler darstellt, und es Ihnen ermöglicht, Code auszuführen, um ihn zu behandeln.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihrer Skript-Datei aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und behandeln alle Fehler, die er zurückgibt, innerhalb eines entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren Sie, und Sie sollten nun zwei Dinge sehen:
   - Die Fehlermeldung und den Call Stack wie zuvor, aber diesmal ohne das Label "uncaught" oder "unhandled".
   - Die geloggte Nachricht "Insert code to handle the error".

3. Versuchen Sie nun, `num` auf einen gültigen (nummerischen) Wert einzustellen, und Sie sehen das Ergebnis der Berechnung geloggt, ohne Fehlermeldung.

Dies ist von Bedeutung — sämtliche ausgelöste Fehler sind nun nicht mehr unbehandelt, was bedeutet, dass sie die Anwendung nicht mehr zum Absturz bringen werden. Sie können beliebigen Code ausführen, um den Fehler zu behandeln. Oben loggen wir lediglich eine Nachricht, aber zum Beispiel könnten Sie eine Methode aufrufen, die den Benutzer um die Eingabe seiner Größe gebeten hat, und ihn diesmal um Korrektur des Eingabefehlers bitten. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach Art des zurückgegebenen Fehlers unterschiedlichen Fehlerbehandlungscode auszuführen.

### Feature-Detection

Feature-Detection ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie auf das Feature und führen Sie dann bedingte Code-Ausführung, um sowohl in Browsern, die das Feature unterstützen, als auch in denen, die es nicht unterstützen, ein akzeptables Erlebnis bereitzustellen. Ein schnelles Beispiel: Die [Geolocation API](/de/docs/Web/API/Geolocation_API) (welche verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, zur Verfügung stellt) hat einen Haupteinstiegspunkt für die Nutzung — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie die `geolocation`-Unterstützung im Browser erkennen, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie früher gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie können einige weitere Feature-Detection-Beispiele in [Alternativen zu UA sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing) finden.

## Hilfe finden

Es gibt viele andere Probleme, denen Sie mit JavaScript (und HTML und CSS!) begegnen werden, und das Wissen, wie man online Antworten finden kann, ist von unschätzbarem Wert.

Zu den besten Informationsquellen gehören MDN (das ist, wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu verwenden, führen die meisten Leute eine Suchmaschinensuche nach der Technologie durch, für die sie Informationen suchen, plus den Begriff "mdn", zum Beispiel, "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Support-Informationen sowie einige nützliche externe Ressourcenlinks. Beispielsweise siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen und Lösungsansätze von anderen EntwicklerInnen erhalten können, vorhergehende Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, zu überprüfen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel, wir haben nach "deaktivieren Autofokus auf HTML dialog" auf SO gesucht, und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Außerdem versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere EntwicklerInnen werden wahrscheinlich auf die gleichen Probleme gestoßen sein wie Sie.

## Zusammenfassung

Das ist also JavaScript-Debugging und Fehlerbehandlung. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start geben, und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen können, denen Sie begegnen.

Das war's für das Modul Dynamisches Scripting mit JavaScript; Glückwunsch zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
