---
title: Debugging von JavaScript und Fehlerbehandlung
short-title: Debugging und Fehlerbehandlung
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, tut uns leid! Wir arbeiten hart daran, den Abschnitt "MDN Learn Web Development" zu verbessern, und werden bald die als unvollständig ("TODO") markierten Stellen fertigstellen.

In dieser Lektion kehren wir zum Thema Debugging von JavaScript zurück (das wir zuerst in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir tiefer in Techniken zur Fehlersuche eintauchen und uns außerdem ansehen, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um von vornherein Probleme zu vermeiden.

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
          <li>Verwendung von Browser-Entwickler-Tools, um das auf Ihrer Seite laufende JavaScript zu inspizieren und zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
          <li>Erweitertes JavaScript-Debugging mit Breakpoints, Watchern etc.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir die Arten von Fehlern betrachtet, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen, und gezeigt, wie Sie einfaches Debugging mithilfe von [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen durchführen können.

In diesem Artikel werden wir ein wenig tiefer in die Tools eintauchen, die Ihnen zur Verfügung stehen, um Fehler aufzuspüren, und uns auch Möglichkeiten ansehen, um Fehler von vornherein zu verhindern.

## Ihr Code muss gültig sein

Sie sollten sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup-Validierungsdienst](https://validator.w3.org/) der W3C, den [CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken und es Ihnen ermöglichen, sich auf die verbleibenden Fehler zu konzentrieren.

### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite zu kopieren und einzufügen, um dessen Gültigkeit zu überprüfen. Wir empfehlen Ihnen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Ihnen Fehler angezeigt werden, während Sie Ihren Code schreiben. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe häufiger JavaScript-Probleme, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (siehe erneut [Problemlösung bei JavaScript](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Stellen Sie sicher, dass Variablen usw. im richtigen Scope definiert sind und dass Sie keine Konflikte zwischen Elementen haben, die an verschiedenen Stellen deklariert sind (siehe [Funktions-Scope und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwechslung von [this](/de/docs/Web/JavaScript/Reference/Operators/this), im Hinblick darauf, auf welchen Scope es sich bezieht, und ob sein Wert daher das ist, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten sich auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, das ein typisches Muster zeigt, in dem ein `this`-Scope in einer separaten Variablen gespeichert wird, um sicherzustellen, dass Sie die Funktionalität auf den richtigen `this`-Scope anwenden.
- Das fehlerhafte Verwenden von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "das falsche Scope bekommen").

> [!CALLOUT]
> Beispielsweise in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen unter Verwendung einer mit `var` definierten Variablen, erstellen jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Beim Klicken möchten wir, dass jeder eine Alert-Nachricht mit seiner Nummer anzeigt (dem Wert von `i` zum Zeitpunkt seiner Erstellung). Stattdessen melden alle `i` als 11 – weil die `for`-Schleife alle ihre Iterationen durchführt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren – der Wert von `i`, der mit der Funktion verknüpft ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet normalerweise, dass Sie verstehen müssen, wie man _Promises_ verwendet: das Verwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) in geeigneter Weise oder das Ausführen des Codes zur Behandlung des Ergebnisses eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler des Promises. Siehe [Wie man Promises verwendet](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) bietet einige nette Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Die Entwickler-Tools des Browsers haben viele nützliche Funktionen, die beim Debuggen von JavaScript helfen können. Zunächst einmal wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung hängt vom Browser ab, aber sie wird etwa folgendermaßen lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Codeabschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Also stürzt der Code ab, sobald wir versuchen, `jsonObj` zu verwenden (das, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dies soll von einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das schlägt fehl.

## Die Console-API

Vielleicht wissen Sie bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns das etwas genauer untersuchen, um zu zeigen, wie Sie dies untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console)-API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie hat eine Reihe von Funktionen zur Verfügung; Sie sind bereits auf [`console.log()`](/de/docs/Web/API/console/log_static) gestoßen, das eine benutzerdefinierte Nachricht in der Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, etwa so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
const superHeroes = response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal, vor der Fehlermeldung, sehen Sie eine neue Nachricht in der Konsole protokolliert:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das nur erfüllt wird, sobald die eigentliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

Wir können dies erreichen, indem wir den Code, der die Antwort verwendet, in die {{jsxref("Promise.prototype.then()", "then()")}}-Methode des zurückgegebenen `Promise` einfügen, etwa so:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammenfassend: Jedes Mal, wenn etwas nicht funktioniert und ein Wert an einem bestimmten Punkt in Ihrem Code nicht so zu sein scheint, wie er sein sollte, können Sie `console.log()` verwenden, um ihn auszugeben und zu sehen, was geschieht.

## Verwendung des JavaScript-Debuggers

Leider haben wir immer noch denselben Fehler – das Problem ist nicht verschwunden. Untersuchen wir dies nun, mit einem anspruchsvolleren Feature der Entwickler-Tools des Browsers: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)) usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Auf der linken Seite können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Werkzeuge besteht darin, Breakpoints in den Code einzufügen – das sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was vor sich geht.

Lassen Sie uns an die Arbeit gehen. Der Fehler wird jetzt in Zeile 26 geworfen. Klicken Sie im mittleren Panel auf Zeile 26, um dort einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darüber erscheinen). Aktualisieren Sie nun die Seite (Cmd/Ctrl + R) — der Browser wird die Ausführung des Codes in Zeile 26 anhalten. An diesem Punkt wird die rechte Seite aktualisiert, um einige sehr nützliche Informationen anzuzeigen.

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie ein paar Einträge – dies ist im Grunde eine Liste der Abfolge von Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns derzeit befinden, und als zweites haben wir `onload`, die die Ereignishandler-Funktion speichert, die den Aufruf zu `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Scope für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block`, und `Window` (der globale Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen im Scope zu dem Zeitpunkt anzuzeigen, an dem die Ausführung des Codes angehalten wurde.

Hierin können wir einige sehr nützliche Informationen finden.

1. Erweitern Sie den `showHeroes` Scope — Sie können daraus erkennen, dass die heroes-Variable `undefined` ist, was darauf hindeutet, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, nicht ein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise liegt also nicht im JSON-Format vor: es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt an. Falls Sie stecken bleiben, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Breakpoints und Watch-Expressions. Für viele weitere Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind nachgiebig — Fehler und nicht erkannte Features können oft aufgrund der Natur der Sprachen gehandhabt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach weiter. JavaScript ist jedoch nicht so tolerant wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wird sie oft Fehler werfen.

Es gibt einige Strategien zum Umgang mit JavaScript-Fehlern in Ihrem Code; lassen Sie uns die gängigsten erkunden.

### Konditionale

TODO

### try...catch

TODO

### Fehler werfen

TODO

### Feature-Detection

Die Feature-Detection ist nützlich, wenn Sie planen, neue JavaScript-Features zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie das Feature und führen Sie dann bedingt Code aus, um eine akzeptable Erfahrung sowohl in Browsern zu bieten, die das Feature unterstützen, als auch in denen, die es nicht unterstützen. Als kurzes Beispiel hat die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, bereitstellt) einen Haupteinstiegspunkt für ihre Nutzung — eine `geolocation`-Eigenschaft, die im globalen Navigator-Objekt verfügbar ist. Daher können Sie erkennen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas wie das Folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead
}
```

## Hilfe finden

Es gibt viele andere Probleme, denen Sie mit JavaScript (und HTML und CSS!) begegnen werden, wodurch das Wissen, wie man online Antworten findet, von unschätzbarem Wert ist.

Unter den besten Quellen für Unterstützungsinformationen sind MDN (das ist, wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Leute eine Suchmaschinensuche der Technologie durch, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Support-Informationen sowie einige nützliche externe Ressourcenlinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen teilen, vorherige Beiträge nachsehen und anderen Entwicklern helfen können. Es wird geraten, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir "Autofokus in HTML-Dialog deaktivieren" bei SO gesucht und schnell [Deaktiviere showModal-Autofokussierung mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie, in Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich dieselben Probleme wie Sie gehabt haben.

## Zusammenfassung

Das ist also Debugging und Fehlerbehandlung bei JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Einstieg geben und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen können, auf die Sie stoßen werden.

Das war's für das Modul Dynamisches Scripting mit JavaScript; Gratulation zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
