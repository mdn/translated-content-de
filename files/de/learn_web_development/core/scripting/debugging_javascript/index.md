---
title: JavaScript-Debugging und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

In dieser Lektion kehren wir zum Thema JavaScript-Debugging zurück (welches wir erstmals in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) behandelt haben). Hier werden wir tiefer in Techniken zur Fehlersuche eintauchen, aber auch beleuchten, wie Sie defensiv programmieren und Fehler in Ihrem Code handhaben können, um Probleme im Vorfeld zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Kenntnisse der JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung der Entwicklerwerkzeuge des Browsers zur Inspektion des auf der Seite ausgeführten JavaScripts und zur Erkennung der generierten Fehler.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debugging.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Browser-Entwicklerwerkzeugen.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir die Arten von Fehlern betrachtet, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und Ihnen gezeigt, wie Sie einfaches Debugging mit [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen durchführen können.

In diesem Artikel werden wir etwas tiefer in die Ihnen zur Verfügung stehenden Werkzeuge zur Fehlerbehebung eintauchen und auch Möglichkeiten betrachten, Fehler von vornherein zu verhindern.

## Ihr Code validieren

Sie sollten sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup-Validierungsdienst](https://validator.w3.org/) des W3C, den [CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken, so dass Sie sich auf die verbleibenden Fehler konzentrieren können.

### Plugins für Code-Editoren

Es ist nicht sehr bequem, Ihren Code immer wieder auf eine Webseite zu kopieren und einzufügen, um seine Gültigkeit zu überprüfen. Wir empfehlen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Fehler gemeldet werden, während Sie den Code schreiben. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe häufiger JavaScript-Probleme, die Ihnen bekannt sein sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (siehe auch [JavaScript-Fehlersuche](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Gültigkeitsbereich definiert sind und Sie nicht in Konflikte zwischen an verschiedenen Stellen deklarierten Elementen geraten (siehe [Funktionsgültigkeitsbereich und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), in Bezug darauf, auf welchen Gültigkeitsbereich es zutrifft und ob sein Wert so ist, wie Sie es beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten sich auch Beispiele wie [dieses](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, das ein typisches Muster zeigt, den `this`-Gültigkeitsbereich in einer separaten Variablen zu speichern und diese Variable in verschachtelten Funktionen zu verwenden, damit Sie sicher sein können, dass Sie die Funktionalität auf den richtigen `this`-Gültigkeitsbereich anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iteriert werden (allgemeiner: den Gültigkeitsbereich falsch verstehen).

> [!CALLOUT]
> Zum Beispiel in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer Variable, die mit `var` definiert ist, erzeugen jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Beim Anklicken soll jeder eine Warnmeldung mit seiner Nummer anzeigen (dem Wert von `i` zur Zeit seiner Erstellung). Stattdessen melden sie alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen durchführt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der mit der Funktion verknüpft ist, ist dann für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel, _Promisen_ zu verstehen: Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) in geeigneter Weise oder Ausführung des Codes zur Behandlung des Ergebnisses eines asynchronen Anrufs im {{jsxref("Promise.then()","then()")}}-Handler des Promises. Siehe [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige nette Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Die Entwicklerwerkzeuge des Browsers haben viele nützliche Funktionen, um bei der Fehlersuche im JavaScript zu helfen. Zunächst einmal wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Erstellen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung hängt vom Browser ab, aber sie wird in etwa so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // …
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (das, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dieses soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console API

Vielleicht wissen Sie bereits, was an diesem Code falsch ist, aber erkunden wir es weiter, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code erlaubt, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen; Sie sind bereits mit [`console.log()`](/de/docs/Web/API/console/log_static) in Berührung gekommen, das eine benutzerdefinierte Nachricht in der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, der den Rückgabewert von `fetch()` protokolliert, wie folgt:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
populateHeader(response);
showHeroes(response);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie, bevor die Fehlermeldung erscheint, eine neue Nachricht in der Konsole:

```plain
Response value: [object Promise]
```

Die Ausgabe von `console.log()` zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die Funktion `fetch()` ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

### `console.error()` und Call Stacks

Als kurzen Exkurs lassen Sie uns eine andere Konsolenmethode ausprobieren, um den Fehler zu melden — [`console.error()`](/de/docs/Web/API/console/error_static). Ersetzen Sie in Ihrem Code

```js
console.log(`Response value: ${response}`);
```

durch

```js
console.error(`Response value: ${response}`);
```

Speichern Sie Ihren Code und aktualisieren Sie den Browser, und Sie werden jetzt sehen, dass die Nachricht als Fehler gemeldet wird, mit derselben Farbe und demselben Symbol wie der nicht abgefangene Fehler darunter. Zusätzlich gibt es jetzt einen Erweiterungs-/Falte-Pfeil neben der Nachricht. Wenn Sie darauf klicken, sehen Sie eine einzelne Zeile, die Ihnen die Zeile in der JavaScript-Datei anzeigt, von der der Fehler ausgeht. Tatsächlich hat die Zeile des nicht abgefangenen Fehlers _ebenfalls_ dies, jedoch mit zwei Zeilen:

```plain
showHeroes http://localhost:7800/js-debug-test/index.js:25
<anonymous> http://localhost:7800/js-debug-test/index.js:10
```

Das bedeutet, dass der Fehler von der Funktion `showHeroes()`, Zeile 25, stammt, wie wir zuvor festgestellt haben. Wenn Sie Ihren Code ansehen, werden Sie feststellen, dass der anonyme Aufruf in Zeile 10 die Zeile ist, die `showHeroes()` aufruft. Diese Zeilen werden als **Call Stack** bezeichnet und können sehr nützlich sein, um die Quelle eines Fehlers zu finden, der viele verschiedene Orte in Ihrem Code betrifft.

Der `console.error()`-Aufruf ist in diesem Fall nicht allzu nützlich, aber er kann nützlich sein, um einen Call Stack zu generieren, wenn noch keiner verfügbar ist.

### Beheben des Fehlers

Kommen wir zurück zu dem Versuch, unseren Fehler zu beheben. Wir können auf die Antwort des erfüllten `Promise` zugreifen, indem wir die {{jsxref("Promise.prototype.then()", "then()")}}-Methode an das Ende des `fetch()`-Aufrufs anhängen. Wir können dann den resultierenden Antwortwert in die Funktionen übergeben, die ihn akzeptieren, so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Speichern und aktualisieren Sie, und sehen Sie, ob Ihr Code funktioniert. Spoiler-Alarm — die oben vorgenommene Änderung hat das Problem nicht behoben. Leider haben wir **immer noch denselben Fehler**!

> [!NOTE]
> Kurz gesagt, immer wenn etwas nicht funktioniert und ein Wert an einem Punkt in Ihrem Code nicht das zu sein scheint, was er sein sollte, können Sie `console.log()`, `console.error()` oder eine ähnliche Funktion verwenden, um den Wert auszugeben und zu sehen, was passiert.

## Verwenden des JavaScript-Debuggers

Untersuchen wir dieses Problem weiter mit einer fortschrittlicheren Funktion der Entwicklerwerkzeuge des Browsers: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Quellen-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)) usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Call Stack_ und derzeit aktive _Scopes_.

Hauptmerkmal dieser Werkzeuge ist die Möglichkeit, Breakpoints in den Code einzubauen — dies sind Punkte, an denen die Ausführung des Codes stoppt und an denen Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen können, was passiert.

Lassen Sie uns das Setzen von Breakpoints erkunden:

1. Der Fehler wird in derselben Zeile wie zuvor — `for (const hero of heroes) {` — Zeile 26 im Screenshot unten ausgelöst. Klicken Sie auf diese Zeile im mittleren Panel, um einen Breakpoint darauf zu setzen (Sie sehen einen blauen Pfeil darüber erscheinen).
2. Aktualisieren Sie nun die Seite (<kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd>) — der Browser stoppt die Ausführung des Codes an dieser Zeile. Zu diesem Zeitpunkt aktualisiert sich die rechte Seite, um Folgendes anzuzeigen:

![Firefox-Debugger mit Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde dasselbe wie der Call Stack, den wir zuvor im Abschnitt `console.error()` betrachtet haben. _Call Stack_ zeigt eine Liste der Funktionen, die aufgerufen wurden, um die Ausführung der aktuellen Funktion auszulösen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und an zweiter Stelle `onload`, das den Ereignishandler funktionsbezogen speichert, der den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Scope der Funktion, die wir gerade betrachten. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen im Scope zu zeigen, wenn die Codeausführung angehalten wurde.

Wir können hier einige sehr nützliche Informationen herausfinden:

1. Erweitern Sie den `showHeroes`-Scope — Sie können sehen, dass die Variable heroes `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response) Objekt speichert, nicht ein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Zu Beginn sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response) Objekt an. Wenn Sie nicht weiterkommen, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, z. B. bedingte Breakpoints und Watch Expressions. Für viele weitere Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) Seite.

## Umgang mit JavaScript-Fehlern im Code

HTML und CSS sind permissiv — Fehler und nicht erkannte Features können oft aufgrund der Natur der Sprachen behandelt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach weiter. JavaScript ist jedoch nicht so permissiv wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wirft sie oft Fehler.

Lassen Sie uns eine gängige Strategie zum Umgang mit JavaScript-Fehlern in Ihrem Code erkunden. Die folgenden Abschnitte sollen durch Erstellen einer Kopie der unten stehenden Vorlagendatei als `handling-errors.html` auf Ihrem lokalen Computer befolgt werden. Fügen Sie die Code-Snippets zwischen den Öffnungs- und Schließungs-Tags `<script>` und `</script>` ein, öffnen Sie dann die Datei in einem Browser und sehen Sie sich die Ausgabe in der JavaScript-Konsole der Entwicklertools an.

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

### Bedingte Anweisungen

Ein häufiger Anwendungsfall für [JavaScript-Bedingungen](/de/docs/Learn_web_development/Core/Scripting/Conditionals) ist das Behandeln von Fehlern. Bedingungen erlauben es Ihnen, unterschiedlichen Code abhängig vom Wert einer Variablen auszuführen. Oft möchten Sie dies defensiv verwenden, um zu vermeiden, dass ein Fehler geworfen wird, wenn der Wert nicht existiert oder vom falschen Typ ist, oder um einen Fehler zu erfassen, wenn der Wert ein fehlerhaftes Ergebnis zurückgeben würde, das später zu Problemen führen könnte.

Schauen wir uns ein Beispiel an. Nehmen wir an, wir haben eine Funktion, die als Argument die Körpergröße des Benutzers in Zoll nimmt und seine Größe in Metern bis auf zwei Dezimalstellen angibt. Dies könnte so aussehen:

```js
function inchesToMeters(num) {
  const mVal = (num * 2.54) / 100;
  const m2dp = mVal.toFixed(2);
  return m2dp;
}
```

1. Deklarieren Sie in Ihrem Beispiel-Element `<script>` eine `const` mit dem Namen `height` und weisen Sie ihr den Wert `70` zu:

   ```js
   const height = 70;
   ```

2. Kopieren Sie die obige Funktion unter die vorherige Zeile.

3. Rufen Sie die Funktion auf, übergeben Sie ihr die Konstante `height` als Argument und protokollieren Sie den Rückgabewert in der Konsole:

   ```js
   console.log(inchesToMeters(height));
   ```

4. Laden Sie das Beispiel in einem Browser und sehen Sie sich die JavaScript-Konsole der Entwicklertools an. Sie sollten einen Wert von `1.78` darin protokolliert sehen.

5. Das funktioniert also in Isolation gut. Aber was passiert, wenn die bereitgestellten Daten fehlen oder nicht korrekt sind? Probieren Sie diese Szenarien aus:

   - Wenn Sie den `height`-Wert in `"70"` ändern (also `70` als Zeichenkette angegeben), sollte das Beispiel ... immer noch gut funktionieren. Dies liegt daran, dass die Berechnung an der ersten Zeile der Zeichenkette den Wert zu einem Zahlendatentyp zwingt. Das ist in einem einfachen Fall wie diesem in Ordnung, aber in komplexerem Code kann das falsche Datum zu allen möglichen Fehlern führen, von denen einige subtil und schwer zu erkennen sind!
   - Wenn Sie `height` in einen Wert ändern, der nicht in eine Zahl überführt werden kann, wie `"70 inches"`, `["Bob", 70]` oder {{jsxref("NaN")}}, sollte das Beispiel das Ergebnis als `NaN` zurückgeben. Dies könnte alle möglichen Probleme verursachen, beispielsweise wenn Sie die Körpergröße des Benutzers irgendwo in der Benutzeroberfläche der Website anzeigen möchten.
   - Wenn Sie den `height`-Wert vollständig entfernen (kommentieren Sie ihn aus, indem Sie `//` am Anfang der Zeile hinzufügen), zeigt die Konsole einen Fehler an, der in etwa so lautet wie "Uncaught ReferenceError: height is not defined", was Ihren Anwendungsablauf erheblich stören könnte.

   Offensichtlich sind keines dieser Ergebnisse ideal. Wie können wir uns gegen schlechte Daten verteidigen?

6. Fügen wir eine Bedingung in unsere Funktion ein, um zu testen, ob die Daten gut sind, bevor wir die Berechnung versuchen. Versuchen Sie, Ihre aktuelle Funktion durch die folgende zu ersetzen:

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

7. Wenn Sie die ersten beiden Szenarien erneut versuchen, sehen Sie unsere etwas nützlichere Meldung, die Ihnen eine Vorstellung davon gibt, was getan werden muss, um das Problem zu beheben. Sie könnten alles dort hineinsetzen, was Sie möchten, einschließlich dem Versuch, einen Code auszuführen, um den Wert von `num` zu korrigieren, aber das wird nicht empfohlen — diese Funktion hat einen einfachen Zweck, und Sie sollten das Korrigieren des Werts anderswo im System behandeln.

   > [!NOTE]
   > Im `if()`-Block testen wir zunächst, ob der Datentyp von `num` `"number"` ist, indem wir den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator verwenden, aber wir testen auch, ob {{jsxref("isNaN()", "!isNaN(num)")}} `false` zurückgibt. Dies müssen wir tun, um gegen den speziellen Fall zu verteidigen, dass `num` auf `NaN` gesetzt ist, da `typeof NaN` eigenartigerweise `"number"` zurückgibt!

8. Wenn Sie jedoch das dritte Szenario erneut ausprobieren, wird weiterhin der Fehler "Uncaught ReferenceError: height is not defined" geworfen. Sie können nicht aus einer Funktion heraus beheben, dass ein Wert nicht verfügbar ist, wenn diese Funktion versucht, den Wert zu verwenden.

Wie gehen wir damit um? Nun, es ist wahrscheinlich besser, wenn unsere Funktion einen benutzerdefinierten Fehler zurückgibt, wenn sie die korrekten Daten nicht erhält. Wir schauen uns zuerst an, wie man das macht, und dann behandeln wir alle Fehler gemeinsam.

### Benutzerdefinierte Fehler werfen

Sie können jederzeit in Ihrem Code einen benutzerdefinierten Fehler mit dem [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Statement in Verbindung mit dem {{jsxref("Error.Error", "Error()")}} Konstruktor werfen. Lassen Sie uns dies in Aktion sehen.

1. Ersetzen Sie in Ihrer Funktion die `console.log()`-Zeile im `else`-Block Ihrer Funktion durch die folgende Zeile:

   ```js
   throw new Error("A number was not provided. Please correct the input.");
   ```

2. Führen Sie Ihr Beispiel erneut aus, stellen Sie jedoch sicher, dass `num` auf einen schlechten (d.h. nicht numerischen) Wert gesetzt ist. Dieses Mal sollten Sie Ihren benutzerdefinierten Fehler geworfen sehen, zusammen mit einem nützlichen Call Stack, um Ihnen zu helfen, die Quelle des Fehlers zu lokalisieren (obwohl die Nachricht immer noch sagt, dass der Fehler "uncaught" oder "unhandled" ist). Gut, Fehler sind nervig, aber das ist viel nützlicher, als die Funktion erfolgreich auszuführen und einen Nicht-Nummernwert zurückzugeben, der später Probleme verursachen könnte.

Wie gehen wir dann mit all diesen Fehlern um?

### try...catch

Die [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Anweisung ist speziell dazu gedacht, Fehler zu behandeln. Sie hat folgende Struktur:

```js
try {
  // Run some code
} catch (error) {
  // Handle any errors
}
```

Innerhalb des `try`-Blocks versuchen Sie, einige Codezeilen auszuführen. Wenn dieser Code ohne Fehler ausgeführt wird, ist alles in Ordnung und der `catch`-Block wird ignoriert. Wenn jedoch ein Fehler ausgelöst wird, wird der `catch`-Block ausgeführt, der Zugriff auf das {{jsxref("Error")}}-Objekt bietet, das den Fehler darstellt, und es Ihnen erlaubt, Code zur Fehlerbehandlung auszuführen.

Lassen Sie uns `try...catch` in unserem Code verwenden.

1. Ersetzen Sie die `console.log()`-Zeile, die die `inchesToMeters()`-Funktion am Ende Ihres Skripts aufruft, durch den folgenden Block. Wir führen nun unsere `console.log()`-Zeile innerhalb eines `try`-Blocks aus und bearbeiten alle Fehler, die er zurückgibt, innerhalb eines entsprechenden `catch`-Blocks.

   ```js
   try {
     console.log(inchesToMeters(height));
   } catch (error) {
     console.error(error);
     console.log("Insert code to handle the error");
   }
   ```

2. Speichern und aktualisieren, und Sie sollten jetzt zwei Dinge sehen können:

   - Die Fehlermeldung und der Call Stack wie zuvor, aber diesmal ohne das Label "uncaught" oder "unhandled".
   - Die protokollierte Nachricht "Insert code to handle the error".

3. Versuchen Sie nun, `num` auf einen guten (numerischen) Wert zu setzen, und Sie sehen das Ergebnis der Berechnung, ohne Fehlermeldung.

Das ist bedeutsam — alle ausgelösten Fehler sind nicht mehr unhandled, so dass sie die Anwendung nicht zum Absturz bringen. Sie können jeden gewünschten Code zur Fehlerbehandlung ausführen. Oben loggen wir nur eine Nachricht, aber Sie könnten beispielsweise die zuvor ausgeführte Funktion aufrufen, um den Benutzer aufzufordern, seine Körpergröße einzugeben, diesmal um den Eingabefehler zu korrigieren. Sie könnten sogar eine `if...else`-Anweisung verwenden, um unterschiedlichen Fehlerbehandlungs-Code abhängig vom Typ des zurückgegebenen Fehlers auszuführen.

### Feature Detection

Feature Detection ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie die Funktion und führen Sie dann bedingt Code aus, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die sie nicht unterstützen, ein akzeptables Erlebnis zu bieten. Als schnelles Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt) einen Haupteinstiegspunkt für ihre Verwendung — eine `geolocation`-Eigenschaft auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt. Daher können Sie feststellen, ob der Browser die Geolokalisierung unterstützt oder nicht, indem Sie eine ähnliche `if()`-Struktur wie früher verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

Sie finden einige weitere Beispiele für Feature Detection in [Alternativen zum UA-Sniffing](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent#alternatives_to_ua_sniffing).

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit JavaScript (und HTML und CSS!) begegnen werden, daher ist das Wissen, wie man online Antworten findet, von unschätzbarem Wert.

Zu den besten Informationsquellen gehören MDN (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Menschen eine Suchmaschinenanfrage nach der Technologie, über die sie Informationen suchen möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützungshinweise zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, auf dem Sie Fragen stellen und Lösungen von anderen Entwicklern teilen, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, zu überprüfen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, mit Ihrer bevorzugten Suchmaschine eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler hatten wahrscheinlich die gleichen Probleme wie Sie.

## Zusammenfassung

Das war also JavaScript-Debugging und Fehlerbehandlung. Einfach, nicht wahr? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start geben und einige Ideen, wie Sie mit den JavaScript-bezogenen Problemen umgehen können, auf die Sie stoßen werden.

Das war's für das Modul Dynamisches Scripting mit JavaScript; herzlichen Glückwunsch zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
