---
title: Umgang mit häufigen JavaScript-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nun werden wir uns mit häufigen JavaScript-Problemen bei der Nutzung in verschiedenen Browsern befassen und wie man sie lösen kann. Dazu gehören Informationen über die Nutzung von Entwicklerwerkzeugen im Browser zur Fehlerbehebung, die Verwendung von Polyfills und Bibliotheken zur Umgehung von Problemen, die Aktivierung moderner JavaScript-Funktionen in älteren Browsern und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, häufige JavaScript-Probleme in verschiedenen Browsern zu diagnostizieren und die geeigneten Werkzeuge und Techniken zur Behebung dieser Probleme einzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit JavaScript

Historisch gesehen hatte JavaScript viele Probleme mit der Browser-Kompatibilität — in den 1990er Jahren hatten die Haupt-Browser-Optionen (Internet Explorer und Netscape) verschiedene Script-Versionen implementiert (Netscape hatte JavaScript, IE hatte JScript und bot auch VBScript als Option), und obwohl JavaScript und JScript bis zu einem gewissen Grad kompatibel waren (beide basierten auf der {{Glossary("ECMAScript", "ECMAScript")}}-Spezifikation), wurden Dinge oft auf widersprüchliche und inkompatible Weisen implementiert, was Entwicklern viele Kopfschmerzen bereitete.

Solche Inkompatibilitätsprobleme hielten sich weit bis in die frühen 2000er Jahre, da alte Browser weiterhin verwendet wurden und weiterhin unterstützt werden mussten. Zum Beispiel musste der Code zur Erstellung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekten eine spezielle Handhabung für Internet Explorer 6 haben:

```js
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

Dies ist einer der Hauptgründe, warum Bibliotheken wie [jQuery](https://jquery.com/) entstanden — um Unterschiede in Browser-Implementierungen zu abstrahieren, sodass ein Entwickler zum Beispiel einfach [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/) verwenden konnte, das die Unterschiede im Hintergrund handhaben würde.

Seitdem hat sich vieles deutlich verbessert; moderne Browser leisten gute Arbeit bei der Unterstützung "klassischer JavaScript-Funktionen", und die Notwendigkeit, solchen Code zu verwenden, hat abgenommen, da die Anforderung zur Unterstützung älterer Browser gesunken ist (obwohl sie nicht vollständig verschwunden ist).

Heutzutage treten die meisten JavaScript-Probleme zwischen verschiedenen Browsern auf:

- Wenn minderwertiger Browser-Sniffing-Code, Feature-Erkennungs-Code und die Verwendung von Vendor-Präfixen verhindern, dass Browser Code ausführen, den sie sonst problemlos verwenden könnten.
- Wenn Entwickler neue/entstehende JavaScript-Funktionen, moderne Web-APIs usw. in ihrem Code verwenden und feststellen, dass solche Funktionen in älteren Browsern nicht funktionieren.

Wir werden all diese Probleme und mehr im Folgenden untersuchen.

## Allgemeine JavaScript-Probleme beheben

Wie wir im [vorherigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#first_things_first_fixing_general_problems) zu HTML/CSS gesagt haben, sollten Sie sicherstellen, dass Ihr Code grundsätzlich funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren. Wenn Sie mit den Grundlagen der [Fehlerbehebung bei JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) noch nicht vertraut sind, sollten Sie diesen Artikel studieren, bevor Sie weitermachen. Es gibt eine Reihe häufiger JavaScript-Probleme, auf die Sie achten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (auch hier sollten Sie sich den Artikel zur [Fehlerbehebung bei JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) ansehen).
- Sicherstellen, dass Variablen etc. im richtigen Scope definiert sind und dass Sie nicht in Konflikte zwischen an unterschiedlichen Stellen deklarierten Elementen geraten (sehen Sie sich [Funktionsbereich und Konflikte](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts) an).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this), hinsichtlich des Scopes, auf den es sich bezieht, und ob sein Wert dann auch der beabsichtigte ist. Sie können [Was ist "this"?](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) für eine leichte Einführung lesen; Sie sollten sich auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) ansehen, das ein typisches Muster zeigt, bei dem ein `this`-Scope in einer separaten Variablen gespeichert wird, um dann diese Variable in verschachtelten Funktionen zu verwenden, damit sichergestellt ist, dass Sie die Funktionalität auf das richtige `this`-Scope anwenden.
- Falsche Verwendung von Funktionen innerhalb von Schleifen, die mit einer globalen Variable iterieren (allgemein "den Scope falsch machen").

> [!CALLOUT]
> Zum Beispiel in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) an), durchlaufen wir 10 Iterationen mit einer mit `var` definierten Variable, erzeugen jedes Mal einen Paragraphen und fügen einen [onclick](/de/docs/Web/API/Element/click_event)-Event-Handler hinzu. Beim Klicken soll jeder Paragraph eine Meldung mit seiner Nummer (dem Wert von `i` zum Zeitpunkt seiner Erstellung) anzeigen. Stattdessen melden alle den Wert 11 — weil die `for`-Schleife alle ihre Iterationen ausführt, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren — der Wert von `i`, der mit der Funktion verbunden ist, ist dann für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html) an) für eine funktionierende Version.

- Sicherzustellen, dass [asynchrone Operationen](/de/docs/Learn/JavaScript/Asynchronous) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel, zu verstehen, wie man _promises_ verwendet: [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) angemessen zu verwenden oder den Code, um das Ergebnis eines asynchronen Aufrufs zu handhaben, im `then()`-Handler des Promises auszuführen. Siehe [Anleitung zur Verwendung von Promises](/de/docs/Learn/JavaScript/Asynchronous/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige gute Diskussionen über diese häufigen Fehler und mehr.

### Linter

Wie bei [HTML und CSS](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#linters) können Sie sicherstellen, dass Ihr JavaScript-Code eine bessere Qualität hat und weniger fehleranfällig ist, indem Sie einen Linter verwenden, der Fehler aufzeigt und auch Warnungen über schlechte Praktiken, etc. geben kann. Die JavaScript/ECMAScript-Linter, die wir empfehlen, sind [JSHint](https://jshint.com/) und [ESLint](https://eslint.org/); diese können auf verschiedene Weise verwendet werden, von denen wir einige unten näher erläutern werden.

#### Online

Die [JSHint Homepage](https://jshint.com/) bietet einen Online-Linter, der es Ihnen ermöglicht, Ihren JavaScript-Code links einzugeben und rechts eine Ausgabe mit Metriken, Warnungen und Fehlern anzuzeigen.

![JSHint Screenshot. Linkes Panel ist ein farbcodierter und mit Zeilennummern versehener Code-Editor. Rechtes Panel ist in Metriken zur Anzahl, Größe und Zusammensetzung der Funktionen und Warnungen unterteilt. Die Warnungen enthalten das Problem und die Zeilennummer.](jshint-online.png)

#### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Eigentlich möchten Sie einen Linter, der sich mit minimalem Aufwand in Ihren Arbeitsablauf einfügt. Viele Code-Editoren haben Linter-Plugins. Zum Beispiel siehe den Abschnitt "Plugins für Texteditoren und IDEs" auf der [JSHint-Installationsseite](https://jshint.com/install/).

#### Andere Verwendungen

Es gibt andere Möglichkeiten, solche Linter zu verwenden; Sie können darüber auf den Installationsseiten von [JSHint](https://jshint.com/install/) und [ESLint](https://eslint.org/docs/latest/use/getting-started) lesen.

Erwähnenswert sind die Kommandozeilenverwendungen — Sie können diese Tools als Kommandozeilenprogramme (verfügbar über die CLI — Command Line Interface) über npm (Node Package Manager — Sie müssen zuerst [NodeJS](https://nodejs.org/en/) installieren) installieren. Zum Beispiel installiert der folgende Befehl JSHint:

```bash
npm install -g jshint
```

Sie können diese Tools dann auf die JavaScript-Dateien anwenden, die Sie überprüfen möchten, zum Beispiel:

![jshint filename.js wurde in der Kommandozeile eingegeben. Die Antwort ist eine Liste von Zeilennummern und eine Beschreibung der gefundenen Fehler.](js-hint-commandline.png)

Sie können diese Tools auch mit einem Task-Runner/Build-Tool wie [Gulp](https://gulpjs.com/) oder [webpack](https://webpack.github.io/) verwenden, um Ihr JavaScript während der Entwicklung automatisch zu überprüfen. (siehe [Verwendung eines Task-Runners zur Automatisierung von Testwerkzeugen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#using_a_task_runner_to_automate_testing_tools) in einem späteren Artikel.) Siehe [ESLint-Integrationen](https://eslint.org/docs/latest/use/integrations) für ESLint-Optionen; JSHint wird von Grunt direkt unterstützt und hat auch andere Integrationen verfügbar, z. B. [JSHint loader for webpack](https://github.com/webpack-contrib/jshint-loader).

> [!NOTE]
> ESLint erfordert etwas mehr Einrichtung und Konfiguration als JSHint, ist aber auch leistungsfähiger.

### Entwicklerwerkzeuge im Browser

Entwicklerwerkzeuge im Browser haben viele nützliche Funktionen, um beim Debugging von JavaScript zu helfen. Zumindest wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Erstellen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/) Beispiels (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken) an).

Wenn Sie sich die Konsole ansehen, sehen Sie eine Fehlermeldung. Die genaue Formulierung ist von Browser zu Browser unterschiedlich, aber sie wird ungefähr lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Code-Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code bricht also zusammen, sobald wir `jsonObj` verwenden (das, wie Sie erwarten können, ein [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) sein soll). Es soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf geholt werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das funktioniert nicht.

#### Die Console API

Vielleicht wissen Sie bereits, was mit diesem Code falsch ist, aber lassen Sie uns ihn etwas genauer untersuchen, um zu zeigen, wie Sie das herausfinden könnten. Zum Start gibt es eine [Console](/de/docs/Web/API/console) API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie hat eine Reihe von Funktionen, aber diejenige, die Sie am häufigsten verwenden werden, ist [`console.log()`](/de/docs/Web/API/console/log_static), die eine benutzerdefinierte Nachricht in der Konsole ausgibt.

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

Aktualisieren Sie die Seite im Browser. Dieses Mal sehen Sie vor der Fehlermeldung eine neue Nachricht, die in der Konsole protokolliert wurde:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten ist, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die eigentliche Antwort aus dem Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

Wir können dies tun, indem wir den Code, der die Antwort verwendet, in die {{jsxref("Promise.prototype.then()", "then()")}}-Methode des zurückgegebenen `Promise` einfügen, so:

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammenfassend lässt sich sagen: Immer wenn etwas nicht funktioniert und ein Wert nicht das zu sein scheint, was er zu einem bestimmten Zeitpunkt in Ihrem Code sein sollte, können Sie `console.log()` verwenden, um ihn auszugeben und zu sehen, was passiert.

#### Verwendung des JavaScript-Debuggers

Leider haben wir immer noch denselben Fehler — das Problem ist nicht verschwunden. Lassen Sie uns dies nun mithilfe eines anspruchsvolleren Features der Entwicklerwerkzeuge des Browsers untersuchen: des [JavaScript-Debuggers](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari-Webentwicklungstools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Das Hauptfeature solcher Werkzeuge ist die Möglichkeit, Breakpoints zu Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand überprüfen und sehen, was vor sich geht.

Lassen Sie uns anfangen. Der Fehler wird jetzt in Zeile 26 ausgelöst. Klicken Sie auf die Zeilennummer 26 im mittleren Panel, um ihr einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darüber erscheinen). Aktualisieren Sie nun die Seite (Cmd/Ctrl + R) — der Browser wird die Ausführung des Codes in Zeile 26 anhalten. Zu diesem Zeitpunkt wird sich die rechte Seite aktualisieren, um einige sehr nützliche Informationen anzuzeigen.

![Firefox-Debugger mit Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde eine Liste der Serie von Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()` die Funktion, in der wir uns gerade befinden, und zweitens `onload`, die den Event-Handler enthält, der den Aufruf zu `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Scope für die Funktion, die wir uns gerade ansehen. Wir haben nur drei — `showHeroes`, `block` und `Window` (den globalen Scope). Jeder Scope kann erweitert werden, um die Werte der Variablen in diesem Scope zu zeigen, als die Ausführung des Codes gestoppt wurde.

Hier können wir einige sehr nützliche Informationen finden.

1. Erweitern Sie den `showHeroes`-Scope — Sie können sehen, dass die Variable `heroes` `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die Variable `jsonObj` ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument von `showHeroes()` ist der Wert, mit dem das `fetch()` Promise erfüllt wurde. Also ist dieses Promise nicht im JSON-Format: es ist ein `Response`-Objekt. Es gibt noch einen weiteren Schritt, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Um Ihnen den Einstieg zu erleichtern, siehe die Dokumentation zum [`Response`](/de/docs/Web/API/Response)-Objekt. Wenn Sie nicht weiterkommen, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Breakpoints und Watch-Expressions. Für eine Menge mehr Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

### Leistungsprobleme

Wenn Ihre Apps komplexer werden und Sie mehr JavaScript verwenden, können Leistungsprobleme auftreten, insbesondere wenn Sie Apps auf langsameren Geräten betrachten. Leistung ist ein großes Thema, und wir haben hier nicht die Zeit, es im Detail zu behandeln. Einige schnelle Tipps sind wie folgt:

- Um zu vermeiden, mehr JavaScript zu laden, als Sie benötigen, bündeln Sie Ihre Skripte in eine einzige Datei mit einer Lösung wie [Browserify](https://browserify.org/). Generell ist es sehr gut für die Leistung, die Anzahl der HTTP-Anfragen zu reduzieren.
- Machen Sie Ihre Dateien noch kleiner, indem Sie sie minifizieren, bevor Sie sie auf Ihren Produktionsserver laden. Minifizieren drückt den gesamten Code auf eine riesige einzelne Zeile zusammen, wodurch er viel weniger Speicherplatz beansprucht. Es ist zwar unansehnlich, aber Sie müssen es ja nach Fertigstellung nicht mehr lesen! Dies erfolgt am besten mit einem Minifizierungs-Tool wie [Uglify](https://github.com/mishoo/UglifyJS) (es gibt auch eine Online-Version — siehe [JSCompress.com](https://jscompress.com/)).
- Wenn Sie APIs verwenden, stellen Sie sicher, dass Sie die API-Funktionalitäten ausschalten, wenn sie nicht verwendet werden; einige API-Aufrufe können sehr ressourcenintensiv sein. Zum Beispiel, wenn Sie einen Videostream anzeigen, stellen Sie sicher, dass er ausgeschaltet ist, wenn Sie ihn nicht sehen können. Wenn Sie die Position eines Geräts mit wiederholten Geolokalisierungsanrufen verfolgen, stellen Sie sicher, dass Sie sie ausschalten, wenn der Benutzer sie nicht mehr nutzt.
- Animationen können wirklich kostspielig für die Leistung sein. Viele JavaScript-Bibliotheken bieten Animationsfunktionen, die in JavaScript programmiert werden, aber es ist viel effizienter, die Animationen über native Browserfunktionen wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) (oder die entstehende [Web Animations API](/de/docs/Web/API/Web_Animations_API)) statt JavaScript zu machen. Lesen Sie Brian Birtles' [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/), um einige wirklich nützliche Theorien darüber, warum Animation teuer ist, Tipps zur Verbesserung der Animationsleistung und Informationen zur Web Animations API zu erhalten.

> [!NOTE]
> Addy Osmani's [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/) enthält viele Details und einige hervorragende Tipps zur Verbesserung der JavaScript-Leistung.

## Cross-Browser JavaScript-Probleme

In diesem Abschnitt betrachten wir einige der häufigsten JavaScript-Probleme bei der Nutzung in verschiedenen Browsern. Wir unterteilen dies in:

- Verwendung moderner JavaScript-Kernfunktionen
- Verwendung moderner Web-API-Funktionen
- Verwendung von schlechtem Browser-Sniffing-Code
- Leistungsprobleme

### Verwendung moderner JavaScript/API-Funktionen

Im [vorherigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS) haben wir einige Möglichkeiten beschrieben, wie HTML- und CSS-Fehler und nicht erkannte Funktionen aufgrund der Natur der Sprachen behandelt werden können. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine Fehler oder nicht erkannte Syntax entdeckt, z. B. wenn neue, nicht unterstützte Funktionen verwendet werden, wird sie meistens Fehler werfen.

Es gibt einige Strategien, um mit der Unterstützung neuer Funktionen umzugehen; lassen Sie uns die gängigsten untersuchen.

> [!NOTE]
> Diese Strategien existieren nicht in eigenen Silos — Sie können sie natürlich nach Bedarf kombinieren. Um ein Beispiel zu nennen, könnten Sie Feature-Erkennung verwenden, um festzustellen, ob eine Funktion unterstützt wird; falls nicht, könnten Sie dann Code ausführen, um ein Polyfill oder eine Bibliothek zu laden, um fehlende Unterstützung zu handhaben.

#### Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob eine JavaScript-Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um in Browsern, die die Funktion unterstützen und in denen nicht, eine akzeptable Erfahrung zu bieten. Ein schnelles Beispiel: Die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser läuft, zur Verfügung stellt) hat einen Haupteinstiegspunkt zur Nutzung — eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie feststellen, ob der Browser Geolocation unterstützt oder nicht, indem Sie so etwas wie das folgende verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead perhaps
}
```

Sie könnten auch einen solchen Test für eine CSS-Funktion schreiben, zum Beispiel indem Sie auf die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ testen (z. B. `paragraph.style.transform !== undefined`). Wenn Sie versuchen, Styles anzuwenden, falls eine CSS-Funktion unterstützt wird, können Sie direkt den [@supports](/de/docs/Web/CSS/@supports) At-Befehl (bekannt als Feature-Abfrage) verwenden. Um z. B. zu überprüfen, ob der Browser CSS-Containerabfragen unterstützt, könnten Sie so etwas wie dies tun:

```css
@supports (container-type: inline-size) {
  /* Use container queries if supported */
}
```

Als letzter Punkt: Verwechseln Sie Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) — dies ist eine schreckliche Praxis, die um jeden Preis vermieden werden sollte. Siehe [don't browser sniff](#dont_browser_sniff) weiter unten für mehr Details.

> [!NOTE]
> Feature-Erkennung wird in einem späteren Artikel dieses Moduls ausführlicher behandelt.

#### Bibliotheken

JavaScript-Bibliotheken sind im Wesentlichen Dritte-Codesätze, die Sie an Ihre Seite anhängen können, die Ihnen eine Fülle von sofort nutzbaren Funktionen bieten, die Ihnen viel Zeit sparen. Viele JavaScript-Bibliotheken entstanden wahrscheinlich, weil ihr Entwickler eine Reihe von generischen Nutzfunktionen schrieb, um sich bei zukünftigen Projekten Zeit zu sparen, und entschloss, sie in die Welt zu entlassen, weil auch andere Menschen sie nützlich finden könnten.

JavaScript-Bibliotheken neigen dazu, in ein paar Hauptkategorien zu fallen (einige Bibliotheken erfüllen mehr als einen dieser Zwecke):

- Utility-Bibliotheken: Stellen eine Reihe von Funktionen bereit, um alltägliche Aufgaben einfacher und weniger langweilig zu verwalten. [jQuery](https://jquery.com/) zum Beispiel bietet ein vollständiges Set von Selektoren und DOM-Manipulationsbibliotheken, um CSS-Selektor-ähnliche Auswahl von Elementen in JavaScript und einfacheren DOM-Aufbau zu ermöglichen. Es ist jetzt mit modernen Funktionen wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)/[`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)/[`Node`](/de/docs/Web/API/Node) Methoden, die über Browser hinweg verfügbar sind, nicht mehr so wichtig, kann aber noch nützlich sein, wenn ältere Browser unterstützt werden müssen.
- Convenience-Bibliotheken: Machen schwierige Dinge leichter zu tun. Zum Beispiel ist die [WebGL API](/de/docs/Web/API/WebGL_API) wirklich komplex und herausfordernd zu verwenden, wenn Sie sie direkt schreiben, weshalb die [Three.js](https://threejs.org/) Bibliothek (und andere) auf WebGL aufgebaut ist und eine viel einfachere API zur Erstellung gängiger 3D-Objekte, Beleuchtungen, Texturen usw. bietet. Die [Service Worker API](/de/docs/Web/API/Service_Worker_API) ist ebenfalls sehr komplex in der Verwendung, so dass Code-Bibliotheken erschienen sind, um häufige Service Worker Anwendungsfälle viel einfacher zu implementieren (siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) für mehrere nützliche Codebeispiele).
- Effekte-Bibliotheken: Diese Bibliotheken sind darauf ausgelegt, Ihnen zu ermöglichen, Spezialeffekte problemlos zu Ihren Websites hinzuzufügen. Das war nützlicher, als „DHTML“ ein beliebtes Schlagwort war, und das Implementieren eines Effekts eine Menge komplexen JavaScript erforderte, aber heutzutage haben Browser viele eingebaut Funktionen und APIs, um Effekte einfacher umzusetzen.
- UI-Bibliotheken: Stellen Methoden zur Umsetzung komplexer UI-Funktionen bereit, die ansonsten anspruchsvoll zu implementieren und plattformübergreifend kompatible: z.B. [Foundation](https://get.foundation/), [Bootstrap](https://getbootstrap.com/) und [Material-UI](https://mui.com/) (letzteres ist eine Komponentensammlung für die Nutzung mit dem React Framework). Diese neigen dazu, als Grundlage für ein gesamtes Seitenlayout verwendet zu werden; es ist oft schwierig, sie einfach nur für ein UI-Feature zu integrieren.
- Normalisierungsbibliotheken: Geben Ihnen eine einfache Syntax, die es ermöglicht, eine Aufgabe problemlos zu erledigen, ohne sich um plattformübergreifende Unterschiede kümmern zu müssen. Die Bibliothek wird die entsprechenden APIs im Hintergrund bereitstellen, so dass die Funktionalität, theoretisch, unabhängig vom Browser funktioniert. Zum Beispiel ist [LocalForage](https://github.com/localForage/localForage) eine Bibliothek zur clientseitigen Datenspeicherung, die eine einfache Syntax bietet, um Daten zu speichern und abzurufen. Im Hintergrund verwendet es die beste API, die der Browser zur Verfügung hat, sei es [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) oder sogar Web SQL (das jetzt veraltet ist, aber noch in Chromium-basierten Browsern in sicheren Kontexten unterstützt wird). Als weiteres Beispiel jQuery.

Wenn Sie sich für die Verwendung einer Bibliothek entscheiden, stellen Sie sicher, dass sie auf den von Ihnen unterstützten Browsern funktioniert und testen Sie Ihre Implementierung gründlich. Achten Sie auch darauf, dass die Bibliothek populär und gut unterstützt ist und nicht plötzlich nächste Woche veraltet ist. Sprechen Sie mit anderen Entwicklern, um herauszufinden, was sie empfehlen, sehen Sie, wie viel Aktivität und wie viele Mitwirkende die Bibliothek auf GitHub (oder wo auch immer sie gespeichert ist) hat, usw.

Die Verwendung von Bibliotheken auf einer grundlegenden Ebene besteht meist darin, die Dateien der Bibliothek (JavaScript, möglicherweise etwas CSS oder andere Abhängigkeiten) herunterzuladen und an Ihre Seite anzuhängen (z. B. über ein {{htmlelement("script")}}-Element), obwohl es normalerweise viele andere Nutzungsmöglichkeiten für solche Bibliotheken gibt, wie sie als [Bower](https://bower.io/) Komponenten zu installieren oder sie als Abhängigkeiten über den [webpack](https://webpack.github.io/) Modul-Bundler einzubeziehen. Sie müssen die individuellen Installationsseiten der Bibliotheken für weitere Informationen lesen.

> [!NOTE]
> Sie werden in Ihren Reisen im Web auch auf JavaScript-Frameworks stoßen, wie [Ember](https://emberjs.com/) und [Angular](https://angularjs.org/). Während Bibliotheken oft für die Lösung individueller Probleme und zum Hinzufügen zu bestehenden Seiten verwendbar sind, neigen Frameworks dazu, mehr vollständige Lösungen für die Entwicklung komplexer Webanwendungen zu sein.

#### Polyfills

Polyfills bestehen ebenfalls aus JavaScript-Dateien von Drittanbietern, die Sie in Ihr Projekt einfügen können, wobei sie sich von Bibliotheken unterscheiden — während Bibliotheken dazu neigen, bestehende Funktionalität zu verbessern und Dinge zu erleichtern, bieten Polyfills Funktionalität, die überhaupt nicht existiert. Polyfills verwenden JavaScript oder andere Technologien vollständig, um Unterstützung für eine Funktion bereitzustellen, die ein Browser nicht nativ unterstützt. Beispielsweise könnten Sie ein Polyfill wie [es6-promise](https://github.com/stefanpenner/es6-promise) verwenden, um Promises in Browsern arbeiten zu lassen, in denen sie nicht nativ unterstützt werden.

Lassen Sie uns eine Übung durchgehen — in diesem Beispiel, das nur zu Demonstrationszwecken verwendet wird, verwenden wir ein Fetch-Polyfill und ein es6-promise-Polyfill. Während Fetch und Promises in modernen Browsern vollständig unterstützt werden, wenn wir einen Browser ansprechen, der Fetch nicht unterstützt, würde dieser Browser wahrscheinlich auch Fetch nicht unterstützen, und Fetch verwendet stark Promises:

1. Zunächst erstellen Sie eine lokale Kopie unseres [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html) Beispiels und [unser Nettes Bild von einigen Blumen](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/flowers.jpg) in einem neuen Verzeichnis. Wir werden Code schreiben, um das Blumenbild abzurufen und es auf der Seite anzuzeigen.
2. Speichern Sie als nächstes eine Kopie des [Fetch-Polyfill](https://raw.githubusercontent.com/github/fetch/master/fetch.js) im selben Verzeichnis wie das HTML.
3. Wenden Sie die Polyfill-Skripte auf die Seite an, indem Sie den folgenden Code hinzufügen — platzieren Sie diese über dem vorhandenen {{htmlelement("script")}}-Element, damit sie bereits auf der Seite verfügbar sind, wenn wir beginnen, Fetch zu verwenden (wir laden auch ein Promise-Polyfill von einem CDN, da IE11 keine Promises unterstützt, was Fetch erfordert):

   ```html
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
   <script src="fetch.js"></script>
   ```

4. Fügen Sie innerhalb des ursprünglichen {{htmlelement("script")}} den folgenden Code hinzu:

   ```js
   const myImage = document.querySelector(".my-image");

   fetch("flowers.jpg").then((response) => {
     response.blob().then((myBlob) => {
       const objectURL = URL.createObjectURL(myBlob);
       myImage.src = objectURL;
     });
   });
   ```

5. Wenn Sie es in einem Browser laden, der [Fetch](/de/docs/Web/API/Window/fetch) nicht unterstützt, sollten Sie trotzdem das Blumenbild sehen — cool!
   ![Überschrift Fetch-Basic-Beispiel mit einem Foto von lila Blumen](fetch-image.jpg)

> [!NOTE]
> Sie können unsere fertige Version unter [fetch-polyfill-finished.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) finden (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) an).

> [!NOTE]
> Wie bei den verschiedenen Polyfills, die Sie begegnen werden, gibt es auch hier viele verschiedene Verwendungsmöglichkeiten — konsultieren Sie die individuelle Dokumentation jedes Polyfills.

Eines, woran Sie vielleicht denken, ist: "Warum sollten wir den Polyfill-Code immer laden, auch wenn wir ihn nicht benötigen?" Das ist ein guter Punkt — wenn Ihre Seiten komplexer werden und Sie beginnen, mehr Bibliotheken, Polyfills usw. zu verwenden, können Sie beginnen, eine Menge zusätzlichen Code zu laden, was die Leistung beeinträchtigen kann, insbesondere auf weniger leistungsstarken Geräten. Daher ist es sinnvoll, Dateien nur bei Bedarf zu laden.

Dazu benötigen Sie eine zusätzliche Einrichtung in Ihrem JavaScript. Sie benötigen eine Art Feature-Erkennungstest, der feststellt, ob der Browser die Funktion, die wir verwenden möchten, unterstützt:

```js
if (browserSupportsAllFeatures()) {
  main();
} else {
  loadScript("polyfills.js", main);
}

function main(err) {
  // actual app code goes in here
}
```

Wir führen also zunächst eine bedingte Anweisung aus, die prüft, ob die Funktion `browserSupportsAllFeatures()` `true` zurückgibt. Wenn dies der Fall ist, führen wir die Funktion `main()` aus, die den gesamten Code unserer App enthalten wird. `browserSupportsAllFeatures()` sieht so aus:

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

Hier testen wir, ob das [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-Objekt und die [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion im Browser existieren. Wenn beide existieren, gibt die Funktion `true` zurück. Wenn die Funktion `false` zurückgibt, führen wir den Code im zweiten Teil der Bedingung aus — dies führt eine Funktion namens `loadScript()` aus, die die Polyfills in die Seite lädt und `main()` nach dem Laden ausführt. `loadScript()` sieht so aus:

```js
function loadScript(src, done) {
  const js = document.createElement("script");
  js.src = src;
  js.onload = () => {
    done();
  };
  js.onerror = () => {
    done(new Error(`Failed to load script ${src}`));
  };
  document.head.appendChild(js);
}
```

Diese Funktion erstellt ein neues `<script>`-Element und setzt dann dessen `src`-Attribut auf den Pfad, den wir als erstes Argument angegeben haben (`'polyfills.js'` als wir es im Code oben aufgerufen haben). Wenn es geladen ist, führen wir die Funktion aus, die wir als zweites Argument übergeben haben (`main()`). Wenn ein Fehler beim Laden des Skripts auftritt, rufen wir die Funktion trotzdem auf, aber mit einem benutzerdefinierten Fehler, den wir abrufen können, um ein Problem zu debuggen, wenn es auftritt.

Beachten Sie, dass `polyfills.js` im Wesentlichen die beiden Polyfills, die wir verwenden, in einer Datei zusammengefasst sind. Wir haben dies manuell gemacht, aber es gibt cleverere Lösungen, die Bündel automatisch für Sie generieren — siehe [Browserify](https://browserify.org/) (siehe [Getting started with Browserify](https://www.sitepoint.com/getting-started-browserify/) für ein grundlegendes Tutorial). Es ist eine gute Idee, JS-Dateien so zusammenzufügen — die Reduzierung der Anzahl der erforderlichen HTTP-Anfragen verbessert die Leistung Ihrer Seite.

Sie können diesen Code in [fetch-polyfill-only-when-needed.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) in Aktion sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)). Wir möchten klarstellen, dass wir uns nicht auf diesen Code berufen können — er wurde ursprünglich von Philip Walton erstellt. Lesen Sie seinen Artikel [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) für den ursprünglichen Code sowie viele nützliche Erklärungen zum weiteren Thema.

#### JavaScript-Transpilation

Eine weitere Option, die für Personen, die moderne JavaScript-Funktionen jetzt verwenden möchten, immer beliebter wird, besteht darin, Code, der neuere ECMAScript-Funktionen verwendet, in eine Version zu konvertieren, die in älteren Browsern funktioniert.

> [!NOTE]
> Dies wird als "Transpiling" bezeichnet — Sie kompilieren den Code nicht in eine niedrigere Ebene, die auf einem Computer ausgeführt werden kann (wie Sie es z. B. mit C-Code tun würden); stattdessen ändern Sie ihn in eine Syntax, die auf einer ähnlichen Abstraktionsebene existiert, damit er in derselben Weise, aber in leicht unterschiedlichen Umständen (in diesem Fall die Umwandlung einer JavaScript-Version in eine andere) verwendet werden kann.

Ein gängiger Transpiler ist [Babel.js](https://babeljs.io/), es gibt jedoch auch andere.

### Kein Browser-Sniffing

Historisch gesehen verwendeten Entwickler _Browser-Sniffing-Code_, um zu erkennen, welcher Browser vom Benutzer verwendet wurde, und ihnen geeigneten Code zur Verfügung zu stellen, damit er in diesem Browser funktioniert.

Alle Browser haben einen **user-agent**-String, der angibt, was der Browser ist (Version, Name, Betriebssystem usw.). Viele Entwickler implementierten schlechten Browser-Sniffing-Code und pflegten ihn nicht. Dies führte dazu, dass unterstützende Browser daran gehindert wurden, Websites zu nutzen, die sie leicht rendern könnten. Dies wurde so häufig, dass Browser begannen, bei dem, was sie in ihren User-Agent-Strings angaben, zu lügen (oder behaupteten, sie seien alle Browser), um Sniffing-Code zu umgehen. Browser implementierten auch Funktionen, die es Benutzern ermöglichten, zu ändern, was der User-Agent-String war, wenn er mit JavaScript abgefragt wurde. All dies machte das Browser-Sniffing noch fehleranfälliger und letztlich sinnlos.

[History of the browser user-agent string](https://webaim.org/blog/user-agent-string-history/) von Aaron Andersen bietet eine nützliche und unterhaltsame Darstellung der Geschichte des Browser-Sniffings. Verwenden Sie [Feature-Erkennung](#feature-erkennung) (und CSS @supports für CSS-Feature-Erkennung), um zuverlässig festzustellen, ob ein Feature unterstützt wird. Auf diese Weise müssen Sie Ihren Code nicht ändern, wenn neue Browserversionen veröffentlicht werden.

### Umgang mit JavaScript-Präfixen

Im vorherigen Artikel haben wir ausführlich darüber gesprochen, wie man mit [CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) umgeht. Nun, neue JavaScript-Implementierungen neigten dazu, auch Präfixe zu verwenden, wobei JavaScript {{Glossary("camel_case", "camelCase")}} anstelle von {{Glossary("kebab_case", "Bindestrichen")}} wie CSS verwendet. Zum Beispiel, wenn ein Präfix auf einem neuen JSHint API-Objekt namens `Object` verwendet wurde:

- Mozilla würde `mozObject` verwenden
- Chrome/Opera/Safari würden `webkitObject` verwenden
- Microsoft würde `msObject` verwenden

Hier ist ein Beispiel, das die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwendet:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

Im Fall der Web Audio API wurden die Haupteinstiegspunkte zur Nutzung der API in Chrome/Opera über `webkit`-präfixierte Versionen unterstützt (sie unterstützen jetzt die unpräfixierten Versionen). Der einfache Weg, um damit umzugehen, besteht darin, eine neue Version der Objekte zu erstellen, die in einigen Browsern ein Präfix haben, und sie gleich der nicht präfixierten Version, ODER der präfixierten Version (ODER aller anderen präfixierten Versionen, die in Betracht gezogen werden müssen) zu setzen — diejenige, die vom Browser, der die Seite aktuell betrachtet, unterstützt wird, wird verwendet.

Dann benutzen wir dieses Objekt, um die API zu manipulieren, anstelle des Originals. In diesem Fall erstellen wir einen erweiterten [AudioContext](/de/docs/Web/API/AudioContext) Konstruktor und verwenden dann eine neue Audiokontextinstanz für unser Web-Audio-Coding.

Dieses Muster kann auf so ziemlich jede präfixierte JavaScript-Funktion angewandt werden. JavaScript-Bibliotheken/Polyfills nutzen diese Art von Code ebenfalls, um Browser-Unterschiede so weit möglich vor dem Entwickler zu abstrahieren.

Erneut gilt: Präfixierte Features sollten niemals in Produktions-Websites verwendet werden — sie sind anfällig für Änderungen oder Entfernung ohne Vorwarnung und verursachen plattformübergreifende Probleme. Wenn Sie darauf bestehen, präfixierte Funktionen zu verwenden, stellen Sie sicher, dass Sie die richtigen verwenden. Sie können auf MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/) nachsehen, welche Browser Präfixe für verschiedene JavaScript/API-Funktionen benötigen. Wenn Sie sich unsicher sind, können Sie auch direkt in Browsern testen.

Zum Beispiel versuchen Sie, in die Entwicklerkonsole Ihres Browsers einzugeben

```js
window.AudioContext;
```

Wenn dieses Feature in Ihrem Browser unterstützt wird, wird es automatisch vervollständigt.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie in JavaScript stoßen werden; das Wichtigste ist jedoch, zu wissen, wie man online Antworten findet. Konsultieren Sie den Abschnitt [Hilfe finden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) des Artikels zu HTML und CSS für unsere besten Ratschläge.

## Zusammenfassung

Das wäre also JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Anfang geben und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen können, auf die Sie stoßen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}
