---
title: Debuggen und Fehlerbehandlung in JavaScript
short-title: Debuggen und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema Debuggen von JavaScript zurück (welches wir im Artikel [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) zuerst behandelt haben). Hier werden wir tiefer in Techniken zur Fehlersuche eintauchen, aber auch auch lernen, wie man defensiv kodiert und Fehler im Code behandelt, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, die in den vorherigen Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Browser-Entwicklerwerkzeugen, um das JavaScript auf Ihrer Seite zu inspizieren und zu sehen, welche Fehler es generiert.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Devtools.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir allgemein auf die Arten von Fehlern geschaut, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können - Syntaxfehler und logische Fehler. Wir haben Ihnen auch geholfen, einige gängige Arten von JavaScript-Fehlermeldungen zu verstehen und Ihnen gezeigt, wie man mit einfachen [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen debuggt.

In diesem Artikel werden wir ein wenig tiefer in die Werkzeuge eintauchen, die Ihnen zur Verfügung stehen, um Fehler zu verfolgen, und auch Möglichkeiten betrachten, Fehler von vornherein zu vermeiden.

## Code prüfen (Linter verwenden)

Sie sollten sicherstellen, dass Ihr Code zunächst gültig ist, bevor Sie versuchen, spezifische Fehler zu verfolgen. Verwenden Sie den [Markup Validation Service](https://validator.w3.org/) des W3C, den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken, sodass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Code-Editor-Plugins

Es ist nicht sehr bequem, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin auf Ihrem Code-Editor zu installieren, sodass Ihnen beim Schreiben des Codes Fehler gemeldet werden. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe von bekannten JavaScript-Problemen, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (sehen Sie sich erneut [Fehlerbehebung in JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Sicherstellen, dass Variablen, usw. im korrekten Bereich definiert sind und es keine Konflikte zwischen in verschiedenen Bereichen deklarierten Elementen gibt (siehe [Funktion-Umfang und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) in Bezug darauf, auf welchen Bereich es sich bezieht und ob sein Wert das ist, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses](<(https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143)>) studieren, welche ein typisches Muster zeigen, einen `this`-Bereich in einer separaten Variable zu speichern und dann diese Variable in geschachtelten Funktionen zu verwenden, sodass Sie sicher sein können, dass Sie die Funktionalität auf den korrekten `this`-Bereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "den Bereich falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer Variablen, die mit `var` definiert ist, und erstellen jedes Mal ein Absatz-Element und fügen diesem einen [onclick](/de/docs/Web/API/Element/click_event)-Event-Handler hinzu. Beim Klicken soll jede einen Alarm auslösen, der ihre Nummer enthält (den Wert von `i` zum Zeitpunkt der Erstellung). Stattdessen geben sie alle `i` als 11 an — da die `for`-Schleife alle ihre Iterationen vor der Ausführung der geschachtelten Funktionen abschließt.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion assoziiert ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) an) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel, zu verstehen, wie man _Promises_ benutzt: die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder das Ausführen des Codes, der das Ergebnis eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler der Promise behandelt. Siehe [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> [!NOTE]
> [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler von JavaScript-Entwicklern](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) bietet einige gute Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Entwicklerwerkzeuge des Browsers haben viele nützliche Funktionen zum Debuggen von JavaScript. Zunächst wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken) an).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung hängt vom Browser ab, aber sie könnte ungefähr so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Code-Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir `jsonObj` verwenden, welches, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll. Dies soll von einer externen `.json`-Datei mit folgendem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Sie wissen vielleicht schon, was mit diesem Code nicht stimmt, aber lassen Sie uns das noch mehr erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code ermöglicht, mit der Browser-JavaScript-Konsole zu interagieren. Sie bietet eine Vielzahl von Funktionen; Sie kennen bereits [`console.log()`](/de/docs/Web/API/console/log_static), das eine benutzerdefinierte Nachricht in die Konsole druckt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie hier:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie vor der Fehlermeldung eine neue Nachricht, die in die Konsole protokolliert wird:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten, sondern ein {{jsxref("Promise")}} ist. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das nur erfüllt wird, wenn die eigentliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Aufrufstapel

Als kurzen Exkurs probieren wir ein anderes Konsolenmethoden zum Melden des Fehlers aus — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser. Sie sehen nun die Nachricht als Fehler gemeldet, mit der gleichen Farbe und dem gleichen Symbol wie der unaufgefangene Fehler darunter. Außerdem gibt es jetzt einen Erweitern/Einblenden-Pfeil neben der Nachricht. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile der JavaScript-Datei zeigt, von der der Fehler stammt. Tatsächlich hat die Zeile des unaufgefangenen Fehlers _ebenfalls_ dieses Feature, aber sie hat zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler aus der `showHeroes()`-Funktion in Zeile 25 stammt, wie wir bereits früher festgestellt haben. Wenn Sie Ihren Code ansehen, sehen Sie, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Aufrufstapel** bezeichnet und können sehr nützlich sein, wenn Sie versuchen, die Quelle eines Fehlers zu verfolgen, der viele verschiedene Stellen in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht sehr nützlich, kann aber nützlich sein, um einen Aufrufstapel zu generieren, wenn keiner bereits verfügbar ist.

### Behebung des Fehlers

Kommen wir zurück zu dem Versuch, unseren Fehler zu beheben. Wir können auf die Antwort des erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwortwert an die Funktionen weitergeben, die ihn akzeptieren, wie hier:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und sehen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die oben genannte Änderung hat das Problem nicht behoben. Leider haben wir **immer noch den gleichen Fehler**!

> [!NOTE]
> Zusammenfassend lässt sich sagen, dass Sie jedes Mal, wenn etwas nicht funktioniert und ein Wert zu einem bestimmten Zeitpunkt in Ihrem Code nicht das zu sein scheint, was er sein soll, `console.log()`, `console.error()` oder eine andere ähnliche Funktion verwenden können, um den Wert auszugeben und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Lassen Sie uns dieses Problem weiter untersuchen, indem wir ein anspruchsvolleres Feature der Entwicklerwerkzeuge des Browsers nutzen: den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; die [Sources-Registerkarte in Chrome](https://developer.chrome.com/docs/devtools/#sources), der Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht die Debugger-Registerkarte so aus:

![Firefox Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Das Hauptmerkmal solcher Werkzeuge ist die Möglichkeit, Breakpoints im Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes gestoppt wird, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Sehen wir uns die Verwendung von Breakpoints an:

1. Der Fehler wird an derselben Zeile wie zuvor ausgelöst — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten. Klicken Sie im mittleren Panel auf die Zeilennummer, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darüber erscheinen).
2. Aktualisieren Sie nun die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser wird die Ausführung des Codes an dieser Zeile anhalten. Zu diesem Zeitpunkt wird sich die rechte Seite auf folgendes ändern:

![Firefox Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde das gleiche wie der Aufrufstapel, den wir uns zuvor im Abschnitt `console.error()` angesehen haben. Der _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und an zweiter Stelle haben wir `onload`, das die Event-Handler-Funktion speichert, die den Aufruf an `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Bereich für die Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Bereich). Jeder Bereich kann erweitert werden, um die Werte der darin enthaltenen Variablen zu zeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden:

1. Erweitern Sie den `showHeroes`-Bereich — Sie können daraus sehen, dass die Variable `heroes` `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response)-Objekt und kein JSON-Objekt speichert.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise liegt also nicht im JSON-Format vor: es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, schauen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie feststecken, finden Sie den beheben Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützlich Funktionen, die wir hier nicht besprochen haben, z. B. bedingte Breakpoints und Watch-Ausdrücke. Weitere Informationen finden Sie auf der [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Behandlung von JavaScript-Fehlern im Code

HTML und CSS sind tolerant — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen behandelt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach. JavaScript ist jedoch nicht so tolerant wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax trifft, löst sie oft Fehler aus.

Sehen wir uns eine gängige Strategie zum Umgang mit JavaScript-Fehlern im Code an. Die folgenden Abschnitte sind so gestaltet, dass sie durch das Erstellen einer Kopie der untenstehenden Vorlagendatei als `handling-errors.html` auf Ihrer lokalen Maschine, das Hinzufügen der Codefragmente zwischen den öffnenden und schließenden `<script>` und `</script>`-Tags und das Öffnen der Datei in einem Browser und das Ansehen der Ausgabe in der JavaScript-Konsole der Devtools verfolgt werden.

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

Ein häufiger Einsatz von [JavaScript-Conditionals](/de/docs/Learn_web_development/Core/Scripting/Conditionals) besteht in der Fehlerbehandlung. Conditionals ermöglichen das Ausführen von unterschiedlichem Code abhängig vom Wert einer Variablen. Oft möchten Sie diese defensiv verwenden, um zu vermeiden, dass ein Fehler ausgelöst wird, wenn der Wert nicht vorhanden ist oder von falschem Typ ist, oder um einen Fehler zu erfassen, wenn der Wert dazu führen würde, dass ein falsches Ergebnis zurückgegeben wird, was später Probleme verursachen könnte.

Sehen wir uns ein Beispiel an. Angenommen, wir haben eine Funktion, die als Argument die Körpergröße eines Benutzers in Zoll nimmt und seine Größe in Metern auf zwei Dezimalstellen genau zurückgibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem `<script>`-Element ein `const` namens `height` und weisen Sie ihm den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter der vorherigen Zeile ein.

3. Rufen Sie die Funktion auf, übergeben Sie ihr die Konstante `height` als Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und schauen Sie sich die JavaScript-Konsole der Devtools an. Dort sollte ein Wert von `1.78` protokolliert werden.

5. Das funktioniert also in Isolation gut. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Versuchen Sie diese Szenarien:
   - Wenn Sie den `height`-Wert auf `"70"` ändern (das heißt `70` als String ausgedrückt), sollte das Beispiel ... immer noch gut funktionieren. Dies liegt daran, dass die Berechnung in der ersten Zeile den Wert in einen Zahlendatentyp umwandelt. In einem einfachen Fall wie diesem ist dies in Ordnung, aber in komplexeren Code kann die falsche Datenart zu allerlei Bugs führen, von denen einige subtil und schwer zu erkennen sind!
   - Wenn Sie `height` auf einen Wert ändern, der nicht in eine Zahl umgewandelt werden kann, wie `"70 inches"` oder `["Bob", 70]`, oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte allerlei Probleme verursachen, zum Beispiel wenn Sie die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website einfügen möchten.
   - Wenn Sie den `height`-Wert vollständig entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), zeigt die Konsole einen Fehler in der Art von "Uncaught ReferenceError: height is not defined", der Ihr Programm zum Stillstand bringen könnte.

   Natürlich sind keine dieser Ergebnisse ideal. Wie verteidigen wir uns gegen schlechte Daten?

6. Lassen Sie uns ein Conditional innerhalb unserer Funktion hinzufügen, um zu testen, ob die Daten gut sind, bevor wir versuchen, die Berechnung durchzuführen. Versuchen Sie, Ihre aktuelle Funktion durch die folgende zu ersetzen:

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

7. Wenn Sie nun die ersten beiden Szenarien erneut versuchen, sehen Sie unsere etwas nützlichere Nachricht, die Ihnen einen Hinweis darauf gibt, was geändert werden muss, um das Problem zu beheben. Sie können dort alles Mögliche einfügen, einschließlich des Versuchs, Code laufen zu lassen, um den Wert von `num` zu korrigieren, aber das wird nicht empfohlen — diese Funktion hat einen einfachen Zweck, und Sie sollten die Wertkorrektur irgendwo anders im System behandeln.

   > [!NOTE]
   > In der `if()`-Anweisung testen wir zuerst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator verwenden, aber wir testen auch, ob {{jsxref("Number.isNaN", "Number.isNaN(num)")}} `false` zurückgibt. Wir müssen dies tun, um den spezifischen Fall zu verteidigen, in dem `num` auf `NaN` gesetzt ist, weil `typeof NaN` immer noch `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut versuchen, erhalten Sie immer noch den Fehler "Uncaught ReferenceError: height is not defined". Sie können nicht beheben, dass ein Wert nicht verfügbar ist, von innerhalb einer Funktion, die versucht, den Wert zu verwenden.

Wie handhaben wir das? Nun, es ist wahrscheinlich besser, wenn unsere Funktion einen benutzerdefinierten Fehler zurückgibt, wenn sie nicht die korrekten Daten erhält. Wir werden uns zuerst ansehen, wie das geht, und dann alle Fehler zusammen behandeln.

### Benutzerdefinierte Fehler auslösen

Sie können einen benutzerdefinierten Fehler jederzeit in Ihrem Code mithilfe der [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisung und des {{jsxref("Error.Error", "Error()")}}-Konstruktors auslösen. Lassen Sie uns sehen, wie das in der Praxis funktioniert.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile im `else`-Block der Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, aber stellen Sie sicher, dass `num` auf einen schlechten (das heißt, nicht nummerischen) Wert gesetzt ist. Diesmal sollte Ihr benutzerdefinierter Fehler ausgelöst werden, zusammen mit einem nützlichen Aufrufstapel, der Ihnen hilft, die Quelle des Fehlers zu lokalisieren (beachten Sie jedoch, dass die Nachricht immer noch angibt, dass der Fehler "Uncaught" oder "Unhandled" ist). Fehler sind zwar ärgerlich, aber das ist viel nützlicher als die Funktion erfolgreich auszuführen und einen nicht nummerischen Wert zurückzugeben, der später Probleme verursachen könnte.

Wie handhaben wir dann all diese Fehler?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell dafür ausgelegt, Fehler zu behandeln. Sie hat folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try`-Blocks versuchen Sie, einige Codes auszuführen. Falls dieser Code ohne einen ausgelösten Fehler ausgeführt wird, ist alles in Ordnung, und der `catch`-Block wird ignoriert. Falls jedoch ein Fehler ausgelöst wird, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt hat, das den Fehler darstellt und es Ihnen ermöglicht, Code zu schreiben, um ihn zu behandeln.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen jetzt unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und behandeln alle Fehler, die er zurückgibt, innerhalb des entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren, und Sie sollten jetzt zwei Dinge sehen:
   - Die Fehlermeldung und den Aufrufstapel wie zuvor, aber dieses Mal ohne den Hinweis "Uncaught" oder "Unhandled".
   - Die protokollierte Meldung "Fügen Sie Code hinzu, um den Fehler zu behandeln".

3. Versuchen Sie nun, `num` auf einen guten (nummerischen) Wert zu aktualisieren, und Sie sehen, dass das Ergebnis der Berechnung protokolliert wird, ohne eine Fehlermeldung.

Dies ist bedeutsam — alle ausgelösten Fehler sind nicht mehr unaufgegriffen, sodass sie die Anwendung nicht zum Absturz bringen. Sie können jeden beliebigen Code ausführen, um den Fehler zu behandeln. Oben protokollieren wir nur eine Nachricht, aber zum Beispiel könnten Sie die frühere Funktion erneut aufrufen, um den Benutzer zu bitten, seine Höhe einzugeben, diesmal um ihn aufzufordern, den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um je nach dem Typ des zurückgegebenen Fehlers unterschiedlichen Fehlerbehandlungscode auszuführen.

### Erkennung von Features

Die Erkennung von Features ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie das Feature und führen Sie dann bedingt Code aus, um eine akzeptable Benutzererfahrung sowohl in Browsern, die das Feature unterstützen, als auch in solchen, die es nicht unterstützen, bereitzustellen. Ein einfaches Beispiel hierfür ist die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die die verfügbaren Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt), die einen Haupteinstiegspunkt für ihre Nutzung hat — eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur verwenden, wie wir sie zuvor gesehen haben:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Weitere Beispiele zur Feature-Erkennung finden Sie unter [Alternativen zum UA-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie bei JavaScript (und HTML und CSS!) stoßen werden, was das Wissen, wie man online Antworten findet, unschätzbar macht.

Unter den besten Quellen für Supportinformationen sind MDN (hier befinden Sie sich gerade!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um Mozilla Developer Network (MDN) zu verwenden, führen die meisten Leute eine Suchmaschinensuche nach der Technologie durch, über die sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Supportinformationen, zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature eingeben, nach dem Sie suchen, in das Textfeld).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, auf dem Sie Fragen stellen und Mitentwickler ihre Lösungen teilen, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell [Deaktivieren von showModal-Autofokus mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre Lieblingssuchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also Debugging und Fehlerbehandlung in JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start geben und einige Ideen, wie Sie mit den JavaScript-bezogenen Problemen umgehen könnten, die Ihnen begegnen.

Das war es mit dem Modul "Dynamisches Scripting mit JavaScript"; Herzlichen Glückwunsch, dass Sie es bis zum Ende geschafft haben! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/House_data_UI","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
