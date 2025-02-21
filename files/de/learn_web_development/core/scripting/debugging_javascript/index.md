---
title: Debugging JavaScript und Umgang mit Fehlern
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: f245e329fb34412a71f5ef3c8a6fc3328229b5ff
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, sorry dafür! Wir arbeiten hart daran, den Abschnitt MDN Lernen Webentwicklung zu verbessern, und werden die als unvollständig gekennzeichneten Stellen ("TODO") bald fertigstellen.

In dieser Lektion werden wir uns erneut dem Thema Debugging von JavaScript widmen (was wir zuerst in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) betrachtet haben). Hier werden wir uns eingehender mit Techniken zur Fehlerverfolgung auseinandersetzen, aber auch betrachten, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Grundlagen, wie sie in früheren Lektionen behandelt wurden.</td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verwendung von Entwicklerwerkzeugen des Browsers, um das JavaScript zu inspizieren, das auf Ihrer Seite läuft, und um zu sehen, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code>, und <code>throw</code>.</li>
          <li>Fortgeschrittenes JavaScript-Debugging mit Haltepunkten, Beobachtern usw.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher in diesem Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir allgemein die Arten von Fehlern betrachtet, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können: Syntaxfehler und Logikfehler. Wir haben auch geholfen, einige häufige Arten von JavaScript-Fehlermeldungen zu verstehen und gezeigt, wie Sie mit einfachen Debugging-Methoden mithilfe von [`console.log()`](/de/docs/Web/API/console/log_static) Anweisungen umgehen können.

In diesem Artikel gehen wir etwas tiefer auf die Werkzeuge ein, die Ihnen zur Verfügung stehen, um Fehler aufzuspüren, und schauen uns auch Wege an, um Fehler von vornherein zu vermeiden.

## Überprüfung Ihres Codes

Sie sollten sicherstellen, dass Ihr Code gültig ist, bevor Sie versuchen, spezifische Fehler zu finden. Nutzen Sie den [Markup-Validierungsdienst](https://validator.w3.org/) der W3C, den [CSS-Validierungsdienst](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Reihe von Fehlern aufdecken und es Ihnen ermöglichen, sich auf die verbleibenden Fehler zu konzentrieren.

### Plugins für Code-Editoren

Es ist nicht sehr praktisch, Ihren Code immer wieder auf eine Webseite zu kopieren und einzufügen, um seine Gültigkeit zu überprüfen. Wir empfehlen daher die Installation eines Linter-Plugins in Ihrem Code-Editor, damit Sie beim Schreiben Ihres Codes sofort über Fehler informiert werden. Versuchen Sie, im Plugin- oder Erweiterungsverzeichnis Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt einige häufige JavaScript-Probleme, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (überprüfen Sie erneut [JavaScript-Fehlerbehebung](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Scope definiert sind und Sie keine Konflikte zwischen Elementen haben, die an verschiedenen Stellen deklariert wurden (siehe [Funktionsscope und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this), insbesondere in welchem Scope es gilt und ob sein Wert tatsächlich dem entspricht, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) als leichte Einführung lesen; Sie sollten sich auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, die ein typisches Muster zeigen, bei dem ein `this`-Scope in einer separaten Variablen gespeichert und diese Variable dann in verschachtelten Funktionen verwendet wird, um sicherzustellen, dass die Funktionalität auf den richtigen `this`-Scope angewendet wird.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner "den Scope falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer mit `var` definierten Variablen, jedes Mal erstellen wir einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event) Ereignishandler hinzu. Beim Klicken soll jede einen Alarm mit ihrer Nummer anzeigen (dem Wert von `i` zum Zeitpunkt ihrer Erstellung). Stattdessen melden alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen ausführt, bevor verschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — dann ist der Wert von `i`, der mit der Funktion verknüpft ist, für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor Sie versuchen, die Werte zu verwenden, die sie zurückgeben. Dies bedeutet in der Regel, die Verwendung von _Promisen_ zu verstehen: die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angemessen oder den Code ausführen, um das Ergebnis eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler des Promises zu behandeln. Sehen Sie sich [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema an.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) bietet einige schöne Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole des Browsers

Entwicklerwerkzeuge des Browsers haben viele nützliche Funktionen zum Debuggen von JavaScript. Als Erstes meldet die JavaScript-Konsole Fehler in Ihrem Code.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Der genaue Wortlaut hängt vom Browser ab, aber es wird so etwas wie "Uncaught TypeError: heroes is not iterable" sein, und die erwähnte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Also stürzt der Code ab, sobald wir versuchen `jsonObj` zu verwenden (was wie Sie erwarten würden, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dies soll aus einer externen `.json`-Datei anhand des folgenden [`fetch()`](/de/docs/Web/API/Window/fetch) Aufrufs abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber dieser schlägt fehl.

## Die Console API

Sie wissen vielleicht bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns es genauer untersuchen, um zu zeigen, wie Sie dies weiter untersuchen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console) API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Anzahl von Funktionen; Sie haben bereits [`console.log()`](/de/docs/Web/API/console/log_static) getroffen, das eine benutzerdefinierte Nachricht an die Konsole ausgibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
const superHeroes = response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

Aktualisieren Sie die Seite im Browser. Diesmal sehen Sie, bevor die Fehlermeldung erscheint, eine neue Nachricht, die an die Konsole protokolliert wird:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten, sondern ein {{jsxref("Promise")}} ist. Die `fetch()` Funktion ist asynchron: Sie gibt ein `Promise` zurück, das nur dann erfüllt wird, wenn die tatsächliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir also auf die Erfüllung des `Promise` warten.

Wir können dies tun, indem wir den Code, der die Antwort verwendet, innerhalb der {{jsxref("Promise.prototype.then()", "then()")}} Methode des zurückgegebenen `Promise` platzieren, wie folgt:

```js
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammengefasst: Jedes Mal, wenn etwas nicht funktioniert und ein Wert zu einem bestimmten Zeitpunkt in Ihrem Code nicht das ist, was er sein sollte, können Sie `console.log()` verwenden, um es auszugeben und zu sehen, was passiert.

## Verwendung des JavaScript-Debuggers

Leider haben wir immer noch denselben Fehler — das Problem ist nicht verschwunden. Untersuchen wir dies jetzt mit einer anspruchsvolleren Funktion der Entwicklerwerkzeuge des Browsers: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web-Entwicklungstools](https://developer.apple.com/safari/tools/)), etc.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Werkzeuge ist die Möglichkeit, Breakpoints im Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes angehalten wird, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was los ist.

Lassen Sie uns an die Arbeit gehen. Der Fehler wird jetzt bei Zeile 26 ausgelöst. Klicken Sie auf Zeilennummer 26 im mittleren Bereich, um ihr einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darüber erscheinen). Aktualisieren Sie nun die Seite (Cmd/Ctrl + R) — der Browser hält die Ausführung des Codes bei Zeile 26 an. An diesem Punkt wird die rechte Seite aktualisiert, um einige sehr nützliche Informationen anzuzeigen.

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des von Ihnen gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie mehrere Einträge — dies ist im Wesentlichen eine Liste der Abfolge von Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und zweitens `onload`, das den Ereignishandler enthält, der den Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Scope der Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block`, und `Window` (der globale Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen innerhalb des Scopes zu zeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hier sehr nützliche Informationen herausfinden.

1. Erweitern Sie den `showHeroes`-Scope — Sie können daraus sehen, dass die `heroes`-Variable `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument von `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, den wir brauchen, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie dieses Problem selbst beheben versuchen. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation für das [`Response`](/de/docs/Web/API/Response) Objekt an. Wenn Sie nicht weiterkommen, finden Sie den behobenen Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, beispielsweise bedingte Breakpoints und Überwachungsausdrücke. Für viel mehr Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) Seite.

## Umgang mit JavaScript-Fehlern in Ihrem Code

HTML und CSS sind nachsichtig — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprache behandelt werden. Zum Beispiel ignoriert CSS nicht anerkannte Eigenschaften, und der Rest des Codes funktioniert oft einfach. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, löst sie häufig Fehler aus.

Es gibt einige Strategien zum Umgang mit JavaScript-Fehlern in Ihrem Code; lassen Sie uns die gebräuchlichsten davon erkunden.

### Konditionale

TODO

### try...catch

TODO

### Fehler auslösen

TODO

### Funktionsdetektion

Die Funktionsdetektion ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie die Funktion und führen Sie dann bedingt Code aus, um sowohl in Browsern, die die Funktion unterstützen, als auch in denen, die dies nicht tun, ein akzeptables Erlebnis zu bieten. Als kurzes Beispiel: Die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Web-Browser läuft) hat einen Haupteinstiegspunkt für ihre Verwendung — eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator) Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser die Geolokalisierung unterstützt oder nicht, indem Sie etwas verwenden wie das folgende:

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

Es gibt viele andere Probleme, mit denen Sie bei JavaScript (und HTML und CSS!) konfrontiert werden, weshalb Kenntnisse darüber, wie Sie Online-Antworten finden, von unschätzbarem Wert sind.

Zu den besten Unterstützungsquellen gehören MDN (wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu nutzen, suchen die meisten Leute in einer Suchmaschine nach der Technologie, über die sie Informationen suchen, plus dem Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützung und ein paar nützliche Links zu externen Ressourcen. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen und Entwicklerlösungen austauschen können. Schauen Sie sich frühere Beiträge an und helfen Sie anderen Entwicklern. Es wird empfohlen, zuerst nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, nach einer Antwort auf Ihr Problem mit Ihrer bevorzugten Suchmaschine zu suchen. Es ist oft hilfreich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie sie haben — andere Entwickler hatten wahrscheinlich bereits die gleichen Probleme wie Sie.

## Zusammenfassung

Das ist also das Debugging und die Fehlerbehandlung in JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang geben und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen, auf die Sie stoßen werden.

Das war's für das Modul Dynamisches Skripten mit JavaScript; Glückwunsch zum Erreichen des Endes! Im nächsten Modul helfen wir Ihnen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
