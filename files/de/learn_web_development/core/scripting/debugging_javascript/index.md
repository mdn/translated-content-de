---
title: Debugging JavaScript and handling errors
slug: Learn_web_development/Core/Scripting/Debugging_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}

> [!NOTE]
> Der Inhalt dieses Artikels ist derzeit unvollständig, entschuldigen Sie bitte! Wir arbeiten hart daran, den Abschnitt "MDN Learn Web Development" zu verbessern, und wir werden die als unvollständig ("TODO") gekennzeichneten Stellen bald fertigstellen.

In dieser Lektion werden wir zum Thema Debugging von JavaScript zurückkehren (das wir in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) erstmals betrachtet haben). Hier werden wir tiefer in Techniken zum Aufspüren von Fehlern eintauchen und uns auch ansehen, wie Sie defensiv programmieren und Fehler in Ihrem Code behandeln können, um Probleme von vornherein zu vermeiden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Grundlagen, wie in den vorherigen Lektionen behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verwendung von Browser-Entwicklungstools zur Überprüfung des in Ihrer Seite laufenden JavaScripts und zur Feststellung, welche Fehler es erzeugt.</li>
          <li>Verwendung von <code>console.log()</code> und <code>console.error()</code> zum Debuggen.</li>
          <li>Fehlerbehandlung mit <code>conditionals</code>, <code>try...catch</code> und <code>throw</code>.</li>
          <li>Erweitertes JavaScript-Debugging mit Breakpoints, Beobachtern usw.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Rückblick auf Arten von JavaScript-Fehlern

Früher im Modul, in [Was ist schiefgelaufen?](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong), haben wir uns grob mit den Arten von Fehlern befasst, die in JavaScript-Programmen auftreten können, und gesagt, dass sie grob in zwei Typen unterteilt werden können — Syntaxfehler und Logikfehler. Wir haben Ihnen auch geholfen, einige gängige Arten von JavaScript-Fehlermeldungen zu verstehen, und gezeigt, wie Sie mithilfe von [`console.log()`](/de/docs/Web/API/console/log_static)-Anweisungen einige einfache Debugging-Vorgänge durchführen können.

In diesem Artikel werden wir etwas tiefer in die Werkzeuge eintauchen, die Ihnen zum Aufspüren von Fehlern zur Verfügung stehen, und auch Möglichkeiten zur Fehlervermeidung von Anfang an betrachten.

## Ihr Code validieren

Sie sollten sicherstellen, dass Ihr Code zunächst gültig ist, bevor Sie versuchen, spezifische Fehler aufzuspüren. Nutzen Sie den [Markup Validation Service](https://validator.w3.org/) des W3C, den [CSS Validation Service](https://jigsaw.w3.org/css-validator/) und einen JavaScript-Linter wie [ESLint](https://eslint.org/play/), um sicherzustellen, dass Ihr Code gültig ist. Dies wird wahrscheinlich eine Menge Fehler auslöschen und Ihnen ermöglichen, sich auf die verbleibenden Fehler zu konzentrieren.

### Code-Editor-Plugins

Es ist nicht sehr bequem, Ihren Code immer wieder auf eine Webseite zu kopieren und einzufügen, um seine Gültigkeit zu überprüfen. Wir empfehlen Ihnen, ein Linter-Plugin in Ihrem Code-Editor zu installieren, damit Sie während des Schreibens des Codes über Fehler informiert werden. Versuchen Sie, in der Plugin- oder Erweiterungsliste Ihres Code-Editors nach ESLint zu suchen und es zu installieren.

## Häufige JavaScript-Probleme

Es gibt eine Reihe häufig auftretender JavaScript-Probleme, die Sie im Auge behalten sollten, wie zum Beispiel:

- Grundlegende Probleme mit Syntax und Logik (sehen Sie sich nochmal [JavaScript-Fehlerbehebung](/de/docs/Learn_web_development/Core/Scripting/What_went_wrong) an).
- Stellen Sie sicher, dass Variablen usw. im richtigen Scope definiert sind und dass es zu keinen Konflikten mit Elementen kommt, die an verschiedenen Stellen deklariert sind (siehe [Funktionsscoping und Konflikte](/de/docs/Learn_web_development/Core/Scripting/Functions#function_scope_and_conflicts)).
- Verwirrung darüber, was [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bedeutet, in Bezug auf welchen Scope es zutrifft und ob sein Wert dem entspricht, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn_web_development/Core/Scripting/Object_basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zum Speichern eines `this`-Scopes in einer separaten Variablen zeigt, um dann diese Variable in verschachtelten Funktionen zu verwenden, damit Sie sicher sein können, dass Sie Funktionalität auf den richtigen `this`-Scope anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variablen iterieren (allgemeiner: "den Scope falsch verstehen").

> [!CALLOUT]
> Zum Beispiel, in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), führen wir 10 Iterationen mit einer Variablen durch, die mit `var` definiert ist, wobei jedes Mal ein Absatz erstellt und ein [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzugefügt wird. Wenn geklickt, möchten wir, dass jeder eine Warnmeldung enthält, die seine Nummer (den Wert von `i` zur Zeit seiner Erstellung) enthält. Stattdessen melden sie alle `i` als 11 — weil die `for`-Schleife all ihre Iterationen durchführt, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren — der Wert von `i`, der mit der Funktion verbunden ist, ist dann für jede Iteration einzigartig. Sehen Sie [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) an) für eine funktionierende Version an.

- Stellen Sie sicher, dass [asynchrone Operationen](/de/docs/Learn_web_development/Extensions/Async_JS) abgeschlossen sind, bevor Sie versuchen, die Werte zu verwenden, die sie zurückgeben. Das bedeutet normalerweise, dass Sie lernen, wie man _Promises_ verwendet: indem Sie [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angemessen einsetzen oder den Code, der das Ergebnis eines asynchronen Aufrufs verarbeitet, im {{jsxref("Promise.then()", "then()")}}-Handler der Promise ausführen. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn_web_development/Extensions/Async_JS/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige interessante Diskussionen über diese häufigen Fehler und mehr.

## Die JavaScript-Konsole im Browser

Browser-Entwicklungstools haben viele nützliche Funktionen, die beim Debuggen von JavaScript helfen können. Zum Beispiel wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Der genaue Text ist abhängig vom Browser, aber er wird in etwa lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Abschnitt:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (das, wie Sie vielleicht erwarten, ein [JSON-Objekt](/de/docs/Learn_web_development/Core/Scripting/JSON) sein soll). Dieses soll aus einer externen `.json`-Datei mit folgendem [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber dies schlägt fehl.

## Die Console-API

Sie wissen vielleicht bereits, was mit diesem Code nicht stimmt, aber lassen Sie uns dies weiter untersuchen, um zu zeigen, wie Sie dies angehen könnten. Wir beginnen mit der [Console](/de/docs/Web/API/console)-API, die es JavaScript-Code erlaubt, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen; Sie haben bereits [`console.log()`](/de/docs/Web/API/console/log_static) kennengelernt, die eine benutzerdefinierte Nachricht an die Konsole ausgibt.

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

Aktualisieren Sie die Seite im Browser. Dieses Mal sehen Sie vor der Fehlermeldung eine neue Nachricht in der Konsole:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt eine `Promise` zurück, die erst dann erfüllt wird, wenn die tatsächliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir darauf warten, dass die `Promise` erfüllt wird.

Wir können dies erreichen, indem wir den Code, der die Antwort verwendet, in die {{jsxref("Promise.prototype.then()", "then()")}}-Methode der zurückgegebenen `Promise` einfügen, etwa so:

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammenfassend lässt sich sagen, dass Sie jedes Mal, wenn etwas nicht funktioniert und ein Wert zu einem bestimmten Zeitpunkt in Ihrem Code nicht das zu sein scheint, was er sein sollte, `console.log()` verwenden können, um ihn auszugeben und zu sehen, was passiert.

## Verwenden des JavaScript-Debuggers

Leider haben wir immer noch denselben Fehler — das Problem ist nicht verschwunden. Lassen Sie uns dies jetzt mit einem komplexeren Feature der Browser-Entwicklungstools untersuchen: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)) usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und derzeit aktive _Scopes_.

Die Hauptfunktion solcher Tools ist die Möglichkeit, Dinge wie Breakpoints im Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung im aktuellen Zustand überprüfen und sehen, was passiert.

Lassen Sie uns zur Arbeit gehen. Der Fehler wird jetzt in Zeile 26 ausgelöst. Klicken Sie auf die Zeilennummer 26 im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie sehen, dass ein blauer Pfeil darüber erscheint). Aktualisieren Sie nun die Seite (Cmd/Ctrl + R) — der Browser wird die Ausführung des Codes in Zeile 26 pausieren. An diesem Punkt wird die rechte Seite aktualisiert und zeigt einige sehr nützliche Informationen.

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Wesentlichen eine Liste der Serie von Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und an zweiter Stelle `onload`, die Funktion, die den Aufruf zu `showHeroes()` speichert.
- Unter _Scopes_ sehen Sie den derzeit aktiven Scope der Funktion, die wir uns ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen im Scope zu zeigen, als die Ausführung des Codes beendet wurde.

Hier können wir sehr nützliche Informationen finden.

1. Erweitern Sie den `showHeroes`-Scope — Sie können daraus sehen, dass die Variable heroes `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (die erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem die `fetch()`-Promise erfüllt wurde. Diese Promise ist also nicht im JSON-Format: es ist ein `Response`-Objekt. Es ist ein weiterer Schritt erforderlich, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Zum Einstieg sehen Sie sich die Dokumentation zum [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie hängen bleiben, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Features, die wir hier nicht besprochen haben, z. B. bedingte Breakpoints und Überwachungsausdrücke. Für ausführlichere Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

## Behandlung von JavaScript-Fehlern in Ihrem Code

HTML und CSS sind nachsichtig — Fehler und nicht erkannte Funktionen können oft aufgrund der Natur der Sprachen behandelt werden. Zum Beispiel ignoriert CSS nicht erkannte Eigenschaften und der Rest des Codes funktioniert oft einfach. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wirft sie häufig Fehler.

Es gibt einige Strategien zur Behandlung von JavaScript-Fehlern in Ihrem Code; lassen Sie uns die gebräuchlichsten Strategien erkunden.

### Bedingte Strukturen

TODO

### try...catch

TODO

### Fehler werfen

TODO

### Funktionsüberprüfung

Die Überprüfung von Funktionen ist nützlich, wenn Sie planen, neue JavaScript-Funktionen zu verwenden, die möglicherweise nicht in allen Browsern unterstützt werden. Testen Sie die Funktion und führen Sie dann bedingt Code aus, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die es nicht tun, ein akzeptables Ergebnis zu bieten. Ein einfaches Beispiel ist die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser läuft), die einen Haupteinstiegspunkt für ihre Verwendung aufweist — eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie etwas Ähnliches wie das Folgende verwenden:

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

Es gibt viele andere Probleme, auf die Sie mit JavaScript (sowie HTML und CSS!) stoßen werden, was das Wissen, wie Sie online Hilfe finden können, unschätzbar macht.

Zu den besten Quellen für Unterstützungsinformationen zählen MDN (das ist, wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

- Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Leute eine Suchmaschinensuche nach der Technologie durch, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel "mdn HTML video".
- [caniuse.com](https://caniuse.com/) bietet Unterstützung und einige nützliche Links zu externen Ressourcen. Zum Beispiel sehen Sie <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).
- [stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forumswebsite, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können, nach vorherigen Beiträgen suchen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus auf HTML-Dialogfeld deaktivieren" gesucht und sehr schnell [Deaktivieren des Autofokus bei showModal mithilfe von HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich dieselben Probleme gehabt haben wie Sie.

## Zusammenfassung

Das war also das Debuggen von JavaScript und die Fehlerbehandlung. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Start und einige Ideen geben, wie Sie die JavaScript-bezogenen Probleme, auf die Sie stoßen werden, angehen können.

Das war es für das Modul Dynamisches Scripting mit JavaScript; herzlichen Glückwunsch zum Erreichen des Endes! Im nächsten Modul werden wir Ihnen helfen, JavaScript-Frameworks und -Bibliotheken zu erkunden.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/JSON","Learn_web_development/Core/Frameworks_libraries", "Learn_web_development/Core/Scripting")}}
