---
title: Umgang mit häufigen JavaScript-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nun werden wir uns häufig auftretende JavaScript-Probleme bezüglich der Browser-Kompatibilität ansehen und wie man sie beheben kann. Dazu gehört die Verwendung von Entwickler-Tools in Browsern, um Probleme aufzuspüren und zu beheben, Polyfills und Bibliotheken zur Umgehung von Problemen zu verwenden, moderne JavaScript-Funktionen in älteren Browsern zum Laufen zu bringen, und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testing</a> auf hoher Ebene.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige JavaScript-Probleme mit Browser-Kompatibilität zu diagnostizieren und geeignete Werkzeuge und Techniken zu nutzen, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Das Problem mit JavaScript

Historisch gesehen war JavaScript von Problemen mit der Browser-Kompatibilität geplagt — in den 1990er Jahren hatten die Hauptbrowser (Internet Explorer und Netscape) unterschiedliche Sprachversionen für Scripting implementiert (Netscape hatte JavaScript, IE hatte JScript und bot auch VBScript als Option an). Obwohl JavaScript und JScript bis zu einem gewissen Grad kompatibel waren (beide basierten auf der [ECMAScript](/de/docs/Glossary/ECMAScript)-Spezifikation), wurden Dinge oft in widersprüchlichen, inkompatiblen Weisen implementiert, was Entwicklern viele Kopfschmerzen bereitete.

Solche Inkompatibilitätsprobleme hielten sich bis in die frühen 2000er Jahre, da alte Browser weiterhin verwendet und unterstützt werden mussten. Beispielsweise musste Code zum Erstellen von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekten speziell für Internet Explorer 6 behandelt werden:

```js
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

Dies ist einer der Hauptgründe, warum Bibliotheken wie [jQuery](https://jquery.com/) entstanden — um Unterschiede in Browserimplementierungen zu abstrahieren, sodass ein Entwickler einfach zum Beispiel [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/) verwenden konnte, das die Unterschiede im Hintergrund behandeln würde.

Seitdem hat sich viel verbessert; moderne Browser leisten gute Arbeit bei der Unterstützung von "klassischen JavaScript-Funktionen" und die Notwendigkeit, solchen Code zu verwenden, hat abgenommen, da die Notwendigkeit zur Unterstützung älterer Browser geringer geworden ist (obwohl bedenken Sie, dass sie nicht vollständig verschwunden sind).

Heutzutage werden die meisten JavaScript-Probleme mit Browser-Kompatibilität gesehen:

- Wenn minderwertiger Browser-Erkennungscode, Funktions-Erkennungscode und die Verwendung von Vendor-Präfixen Browser daran hindern, Code auszuführen, den sie sonst problemlos nutzen könnten.
- Wenn Entwickler neue/aufkommende JavaScript-Funktionen, moderne Web-APIs usw. in ihrem Code verwenden und feststellen, dass solche Funktionen in älteren Browsern nicht funktionieren.

Wir werden all diese Probleme und mehr unten erkunden.

## Allgemeine JavaScript-Probleme beheben

Wie wir in dem [vorherigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#first_things_first_fixing_general_problems) zu HTML/CSS gesagt haben, sollten Sie sicherstellen, dass Ihr Code allgemein funktioniert, bevor Sie sich auf die Probleme der Browser-Kompatibilität konzentrieren. Wenn Sie mit den Grundlagen zur [Fehlerbehebung in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) nicht vertraut sind, sollten Sie diesen Artikel durcharbeiten, bevor Sie weitermachen. Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie z. B.:

- Grundlegende Syntax- und Logikprobleme (siehe erneut [Fehlerbehebung in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im korrekten Gültigkeitsbereich definiert sind und es keine Konflikte zwischen in verschiedenen Bereichen deklarierten Objekten gibt (siehe [Funktionsbereich und Konflikte](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this), bezüglich des Anwendungsbereichs, in dem es sich befindet, und somit, ob sein Wert dem entspricht, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) für eine erste Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, bei dem ein `this`-Bereich in einer separaten Variablen gespeichert wird, die dann in geschachtelten Funktionen verwendet wird, sodass Sie sicher sein können, dass Sie Funktionalität auf den richtigen `this`-Bereich anwenden.
- Funktionen falsch innerhalb von Schleifen verwenden, die mit einer globalen Variablen iterieren (allgemeiner "den Bereich falsch verstehen").

> [!CALLOUT]
> Zum Beispiel in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), wir durchlaufen 10 Iterationen mit einer Variablen, die mit `var` definiert ist, erstellen jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Wenn geklickt, möchten wir, dass jeder eine Warnmeldung mit seiner Nummer anzeigt (dem Wert von `i` zum Zeitpunkt der Erstellung). Stattdessen melden alle `i` als 11 — weil die `for`-Schleife alle ihre Iterationen ausführt, bevor geschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren — der Wert von `i`, der der Funktion zugeordnet ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe ebenfalls den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn/JavaScript/Asynchronous) abgeschlossen sind, bevor Sie versuchen, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel, dass Sie verstehen müssen, wie man _Promises_ verwendet: entweder mit [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder indem Sie den Code zum Bearbeiten der Ergebnisse eines asynchronen Aufrufs im `then()`-Handler eines Promises ausführen. Siehe [Wie man Promises verwendet](/de/docs/Learn/JavaScript/Asynchronous/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) hat einige schöne Diskussionen über diese häufigen Fehler und noch mehr.

### Linter

Wie bei [HTML und CSS](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#linters) können Sie durch die Verwendung eines Linters eine bessere Qualität und weniger fehleranfälligen JavaScript-Code sicherstellen, der Fehler identifiziert und auch Warnungen über schlechte Praktiken usw. auslösen kann und anpassbar ist, um strenger oder entspannter in ihrer Fehler-/Warnungsberichterstattung zu sein. Die JavaScript/ECMAScript-Linter, die wir empfehlen würden, sind [JSHint](https://jshint.com/) und [ESLint](https://eslint.org/); diese können auf verschiedene Weisen verwendet werden, von denen wir einige unten genauer beschreiben werden.

#### Online

Die [JSHint-Homepage](https://jshint.com/) bietet einen Online-Linter, mit dem Sie Ihren JavaScript-Code links eingeben und rechts eine Ausgabe mit Metriken, Warnungen und Fehlern erhalten können.

![JSHint-Screenshot. Das linke Panel ist ein farbcodierter Code-Editor mit Zeilennummern. Das rechte Panel ist in Metriken auf die Anzahl, Größe und Struktur der Funktionen sowie Warnungen unterteilt. Die Warnungen enthalten das Problem und die Zeilennummer.](jshint-online.png)

#### Code-Editor-Plugins

Es ist nicht sehr praktisch, den Code mehrmals auf eine Webseite kopieren und dort die Gültigkeit überprüfen zu müssen. Eigentlich möchten Sie einen Linter, der in Ihren Standard-Workflow mit minimalem Aufwand passt. Viele Code-Editoren haben Linter-Plugins. Zum Beispiel, siehe den Abschnitt "Plugins für Texteditoren und IDEs" auf der [JSHint-Installationsseite](https://jshint.com/install/).

#### Weitere Verwendungen

Es gibt weitere Möglichkeiten, solche Linter zu verwenden; Sie können darüber auf den [JSHint](https://jshint.com/install/)- und [ESLint](https://eslint.org/docs/latest/use/getting-started)-Installationsseiten lesen.

Die Kommandozeilenverwendung ist es wert, erwähnt zu werden — Sie können diese Tools als Kommandozeilen-Dienstprogramme (verfügbar über die CLI — Kommandozeilenschnittstelle) mit npm (Node Package Manager — Sie müssen zunächst [NodeJS](https://nodejs.org/en/) installieren) installieren. Zum Beispiel installiert der folgende Befehl JSHint:

```bash
npm install -g jshint
```

Sie können diese Tools dann auf die JavaScript-Dateien anwenden, die Sie prüfen möchten, zum Beispiel:

![jshint filename.js wurde an der Kommandozeile eingegeben. Die Antwort ist eine Liste von Zeilennummern und eine Beschreibung des gefundenen Fehlers.](js-hint-commandline.png)

Sie können diese Tools auch mit einem Task-Runner/Build-Tool wie [Gulp](https://gulpjs.com/) oder [Webpack](https://webpack.github.io/) verwenden, um Ihr JavaScript während der Entwicklung automatisch auf Fehler zu überprüfen. (siehe [Verwenden eines Task-Runners zur Automatisierung von Testwerkzeugen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#using_a_task_runner_to_automate_testing_tools) in einem späteren Artikel.) Siehe [ESLint-Integrationen](https://eslint.org/docs/latest/use/integrations) für ESLint-Optionen; JSHint wird von Grunt direkt unterstützt und hat auch andere verfügbare Integrationen, z.B. [JSHint Loader für Webpack](https://github.com/webpack-contrib/jshint-loader).

> [!NOTE]
> ESLint erfordert etwas mehr Einrichtung und Konfiguration als JSHint, ist aber auch leistungsfähiger.

### Entwickler-Tools im Browser

Entwickler-Tools im Browser haben viele nützliche Funktionen zur Unterstützung der JavaScript-Fehlerbehebung. Zum einen wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken) an).

Wenn Sie sich die Konsole ansehen, werden Sie eine Fehlermeldung sehen. Die genaue Wortwahl hängt vom Browser ab, aber es wird etwa so lauten: "Uncaught TypeError: heroes is not iterable", und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Codeschnipsel dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden (das, wie Sie vielleicht vermuten, ein [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) sein soll). Es soll mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf aus einer externen `.json`-Datei abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber dies schlägt fehl.

#### Die Console-API

Sie wissen vielleicht schon, was mit diesem Code nicht stimmt, aber lassen Sie uns das noch etwas mehr erkunden, um zu zeigen, wie Sie das untersuchen könnten. Zunächst gibt es ein [Console](/de/docs/Web/API/console)-API, das es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Es hat eine Reihe von Funktionen, aber die, die Sie am häufigsten verwenden werden, ist [`console.log()`](/de/docs/Web/API/console/log_static), das eine benutzerdefinierte Nachricht an die Konsole schreibt.

Versuchen Sie, einen `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, wie folgt:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
const superHeroes = response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal, vor der Fehlermeldung, sehen Sie eine neue Nachricht, die in der Konsole protokolliert wird:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die Funktion `fetch()` ist asynchron: Sie gibt ein `Promise` zurück, das nur erfüllt wird, wenn die tatsächliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

Wir können dies tun, indem wir den Code, der die Antwort verwendet, in die Methode {{jsxref("Promise.prototype.then()", "then()")}} des zurückgegebenen `Promise` setzen, wie folgt:

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammenfassend, immer wenn etwas nicht funktioniert und ein Wert an einem Punkt in Ihrem Code nicht so erscheint, wie er sollte, können Sie `console.log()` verwenden, um es auszugeben und zu sehen, was passiert.

#### Verwenden des JavaScript-Debuggers

Leider haben wir immer noch denselben Fehler — das Problem ist nicht verschwunden. Untersuchen wir dies nun mit einer ausgeklügelteren Funktion der Entwickler-Tools des Browsers: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Tools sind in anderen Browsern verfügbar; der [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), etc.

In Firefox sieht der Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung an — _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Tools ist die Möglichkeit, Breakpoints im Code hinzuzufügen — dies sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung im aktuellen Zustand überprüfen und sehen, was vor sich geht.

Lassen Sie uns an die Arbeit gehen. Der Fehler wird jetzt bei Zeile 26 ausgelöst. Klicken Sie auf die Zeilennummer 26 im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie sehen einen blauen Pfeil darüber erscheinen). Aktualisieren Sie nun die Seite (Cmd/Ctrl + R) — der Browser wird die Ausführung des Codes bei Zeile 26 anhalten. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um einige sehr nützliche Informationen anzuzeigen.

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge — dies ist im Grunde eine Liste der Reihe von Funktionen, die aufgerufen wurden, damit die aktuelle Funktion aufgerufen wird. Ganz oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und zweitens `onload`, die den Ereignishandler mit dem Aufruf von `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den aktuell aktiven Gültigkeitsbereich für die Funktion, die wir betrachten. Wir haben nur drei — `showHeroes`, `block` und `Window` (der globale Gültigkeitsbereich). Jeder Gültigkeitsbereich kann erweitert werden, um die Werte der Variablen im Gültigkeitsbereich anzuzeigen, als die Ausführung des Codes gestoppt wurde.

Wir können hieraus einige sehr nützliche Informationen gewinnen.

1. Erweitern Sie den `showHeroes`-Gültigkeitsbereich — Sie können daran sehen, dass die Variable heroes `undefined` ist, was anzeigt, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Linie der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, nicht ein JSON-Objekt.

Das Argument für `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu beheben. Als Starthilfe siehe die Dokumentation für das [`Response`](/de/docs/Web/API/Response)-Objekt. Wenn Sie nicht weiterkommen, finden Sie den korrigierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Der Debugger-Tab hat viele andere nützliche Features, die wir hier nicht behandelt haben, z.B. bedingte Breakpoints und Watch Expressions. Für weitere Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

### Leistungsprobleme

Wenn Ihre Apps komplexer werden und Sie mehr JavaScript verwenden, können Leistungsprobleme auftreten, insbesondere wenn Sie Apps auf langsameren Geräten ansehen. Leistung ist ein großes Thema, und wir haben keine Zeit, es hier im Detail zu behandeln. Einige schnelle Tipps sind wie folgt:

- Um zu vermeiden, mehr JavaScript zu laden, als Sie benötigen, bündeln Sie Ihre Skripte in eine einzige Datei mit einer Lösung wie [Browserify](https://browserify.org/). Im Allgemeinen ist die Reduzierung der Anzahl der HTTP-Anfragen sehr gut für die Leistung.
- Machen Sie Ihre Dateien noch kleiner, indem Sie sie minifizieren, bevor Sie sie auf Ihren Produktionsserver laden. Minifizierung drückt den gesamten Code auf eine große einzelne Zeile, was zu weit weniger Dateigröße führt. Es ist hässlich, aber Sie müssen es nicht lesen, wenn es fertig ist! Dies wird am besten mit einem Minifizierungs-Tool wie [Uglify](https://github.com/mishoo/UglifyJS) gemacht (es gibt auch eine Onlineversion — siehe [JSCompress.com](https://jscompress.com/)).
- Wenn Sie APIs verwenden, stellen Sie sicher, dass Sie die API-Funktionen abschalten, wenn sie nicht verwendet werden; einige API-Aufrufe können sehr rechenintensiv sein. Zum Beispiel, wenn Sie einen Video-Stream anzeigen, stellen Sie sicher, dass er ausgeschaltet ist, wenn Sie ihn nicht sehen können. Wenn Sie den Standort eines Geräts mit wiederholten Geolocation-Aufrufen verfolgen, stellen Sie sicher, dass Sie ihn ausschalten, wenn der Benutzer ihn nicht mehr verwendet.
- Animationen können sehr teuer für die Leistung sein. Viele JavaScript-Bibliotheken bieten Animationsfunktionen an, die von JavaScript programmiert werden, aber es ist viel kostengünstiger, die Animationen über native Browser-Funktionen wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) (oder die aufstrebende [Web Animations API](/de/docs/Web/API/Web_Animations_API)) als JavaScript auszuführen. Lesen Sie Brian Birtles' [Animieren ohne Sorgen mit Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) für einige wirklich nützliche Theorien darüber, warum Animation teuer ist, Tipps zur Verbesserung der Animationsleistung und Informationen zur Web Animations API.

> [!NOTE]
> Addy Osmani's [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/) enthält viele Details und einige ausgezeichnete Tipps zur Steigerung der JavaScript-Performance.

## JavaScript-Probleme mit Browser-Kompatibilität

In diesem Abschnitt werfen wir einen Blick auf einige der häufigeren JavaScript-Probleme mit Browser-Kompatibilität. Wir unterteilen dies in:

- Verwenden moderner JavaScript-Funktionen
- Verwenden moderner Web-API-Funktionen
- Verwenden von schlechtem Browser-Erkennungscode
- Leistungsprobleme

### Verwenden moderner JavaScript/API-Funktionen

Im [vorherigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS) haben wir einige der Möglichkeiten beschrieben, wie HTML- und CSS-Fehler und nicht erkannte Funktionen aufgrund der Natur der Sprachen gehandhabt werden können. JavaScript ist jedoch nicht so nachsichtig wie HTML und CSS — wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, wie z. B. bei der Verwendung neuer, nicht unterstützter Funktionen, wird sie häufig Fehler auswerfen.

Es gibt einige Strategien zur Handhabung von Unterstützung für neue Funktionen; lassen Sie uns die häufigsten erkunden.

> [!NOTE]
> Diese Strategien existieren nicht in getrennten Bereichen — Sie können sie natürlich nach Bedarf kombinieren. Zum Beispiel könnten Sie eine Funktions-Erkennung verwenden, um festzustellen, ob eine Funktion unterstützt wird; wenn nicht, könnten Sie dann Code ausführen, um ein Polyfill oder eine Bibliothek zu laden, um den Mangel an Unterstützung zu bewältigen.

#### Funktions-Erkennung

Die Idee hinter der Funktions-Erkennung besteht darin, dass Sie einen Test ausführen können, um festzustellen, ob eine JavaScript-Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen können, um sowohl in Browsern, die die Funktion unterstützen, als auch in jenen, die sie nicht unterstützen, ein akzeptables Erlebnis zu bieten. Als ein schnelles Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser ausgeführt wird, zur Verfügung stellt) einen Haupteinstiegspunkt für ihre Verwendung — eine `geolocation`-Eigenschaft, die im globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt verfügbar ist. Daher können Sie mit etwas wie dem Folgenden feststellen, ob der Browser Geolocation unterstützt oder nicht:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead perhaps
}
```

Sie könnten auch einen solchen Test für eine CSS-Funktion schreiben, indem Sie z.B. das Vorhandensein von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ testen (z.B. `paragraph.style.transform !== undefined`).
Wenn Sie Stile anwenden möchten, falls eine CSS-Funktion unterstützt wird, können Sie direkt die [@supports](/de/docs/Web/CSS/@supports)-Regel (bekannt als Funktions-Abfrage) verwenden. Zum Beispiel, um zu überprüfen, ob der Browser CSS-Container-Abfragen unterstützt, könnten Sie so etwas machen:

```css
@supports (container-type: inline-size) {
  /* Use container queries if supported */
}
```

Als letzter Punkt, verwechseln Sie Funktions-Erkennung nicht mit **Browser-Erkennung** (Erkennung, welcher spezifische Browser auf die Website zugreift) — dies ist eine schreckliche Praxis, die um jeden Preis vermieden werden sollte. Siehe [don't browser sniff](#dont_browser_sniff) für weitere Details.

> [!NOTE]
> Funktions-Erkennung wird später im Modul in einem eigenen Artikel ausführlich behandelt.

#### Bibliotheken

JavaScript-Bibliotheken sind im Wesentlichen von Dritten erstellte Codeeinheiten, die Sie Ihrer Seite hinzufügen können und die Ihnen eine Fülle von vorgefertigten Funktionen bieten, die sofort verwendet werden können, wodurch Ihnen viel Zeit gespart wird. Viele JavaScript-Bibliotheken sind wahrscheinlich deshalb entstanden, weil ihr Entwickler eine Reihe von allgemeinen Hilfsfunktionen schrieb, um sich bei zukünftigen Projekten Zeit zu sparen, und sich dann entschied, sie zu veröffentlichen, weil andere sie ebenfalls nützlich finden könnten.

JavaScript-Bibliotheken neigen dazu, in einige Hauptkategorien zu fallen (einige Bibliotheken erfüllen mehr als einen dieser Zwecke):

- Dienstprogramme-Bibliotheken: Sie bieten eine Reihe von Funktionen, um alltägliche Aufgaben einfacher und weniger langweilig zu verwalten. [jQuery](https://jquery.com/) zum Beispiel bietet eigene voll ausgestattete Selektoren und DOM-Manipulationsbibliotheken, die die Auswahl von Elementen in JavaScript im CSS-Selektor-Stil und das einfachere DOM-Building ermöglichen. Das ist jetzt, da wir moderne Funktionen wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)/[`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)/[`Node`](/de/docs/Web/API/Node)-Methoden in allen Browsern zur Verfügung haben, nicht mehr so wichtig, kann aber trotzdem nützlich sein, wenn ältere Browser unterstützt werden müssen.
- Bequemlichkeits-Bibliotheken: Sie machen schwierige Dinge einfacher zu tun. Zum Beispiel ist die [WebGL API](/de/docs/Web/API/WebGL_API) wirklich komplex und herausfordernd zu verwenden, wenn Sie sie direkt schreiben. Deshalb wurde die [Three.js](https://threejs.org/)-Bibliothek (und andere) auf WebGL aufgebaut und bietet eine viel einfachere API zum Erstellen von häufigen 3D-Objekten, Beleuchtungen, Texturen usw.
  Die [Service Worker API](/de/docs/Web/API/Service_Worker_API) ist ebenfalls sehr komplex zu verwenden, daher sind Code-Bibliotheken entstanden, um gängige Service-Worker-Anwendungsfälle viel einfacher zu implementieren (siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) für mehrere nützliche Codebeispiele).
- Effekt-Bibliotheken: Diese Bibliotheken sollen es Ihnen ermöglichen, einfach Spezialeffekte zu Ihren Websites hinzuzufügen. Das war früher nützlicher, als "DHTML" ein populäres Schlagwort war und die Implementierung eines Effekts viel komplexes JavaScript erforderte. Heutzutage haben Browser jedoch viele eingebaute CSS-Funktionen und APIs, um Effekte einfacher zu implementieren.
- UI-Bibliotheken: Sie bieten Methoden zur Implementierung komplexer UI-Funktionen, die ansonsten herausfordernd zu implementieren und zu gestalten wären, um browserübergreifend zu funktionieren, zum Beispiel [Foundation](https://get.foundation/), [Bootstrap](https://getbootstrap.com/) und [Material-UI](https://mui.com/) (letzteres ist ein Satz von Komponenten für die Verwendung mit dem React-Framework). Diese werden oft als Grundlage für ein gesamtes Website-Layout verwendet; es ist oft schwierig, sie nur für ein UI-Feature einzusetzen.
- Normalisierungs-Bibliotheken: Sie geben Ihnen eine einfache Syntax, die es Ihnen ermöglicht, eine Aufgabe einfach zu erledigen, ohne sich um browserübergreifende Unterschiede kümmern zu müssen. Die Bibliothek manipuliert passende APIs im Hintergrund, damit die Funktionalität im besten Fall in allen Browsern funktioniert (theoretisch). Zum Beispiel ist [LocalForage](https://github.com/localForage/localForage) eine Bibliothek für die clientseitige Datenspeicherung, die eine einfache Syntax zum Speichern und Abrufen von Daten bietet. Im Hintergrund verwendet sie die beste API, die der Browser zum Speichern der Daten zur Verfügung hat, sei es [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) oder sogar Web SQL (das jetzt veraltet ist, aber in Chromium-basierten Browsern in sicheren Kontexten immer noch unterstützt wird). Ein weiteres Beispiel ist jQuery.

Wenn Sie eine Bibliothek auswählen, stellen Sie sicher, dass sie über die gewünschte Menge an Browsern funktioniert, die Sie unterstützen möchten, und testen Sie Ihre Implementierung gründlich. Stellen Sie außerdem sicher, dass die Bibliothek beliebt und gut unterstützt ist und nicht innerhalb der nächsten Woche veraltet wird. Spreche mit anderen Entwicklern, um herauszufinden, was sie empfehlen, überprüfen Sie, wie viel Aktivität und wie viele Mitwirkende die Bibliothek auf GitHub (oder wo auch immer sie gehostet wird) hat, usw.

Die Verwendung einer Bibliothek auf einer einfachen Ebene besteht in der Regel darin, die Dateien der Bibliothek (JavaScript, möglicherweise auch etwas CSS oder andere Abhängigkeiten) herunterzuladen und sie Ihrer Seite hinzuzufügen (z.B. über ein {{htmlelement("script")}}-Element), obwohl es normalerweise viele andere Verwendungsoptionen für solche Bibliotheken gibt, wie sie als [Bower](https://bower.io/)-Komponenten zu installieren oder sie als Abhängigkeiten über den [Webpack](https://webpack.github.io/)-Modul-Bundler einzuschließen. Sie müssen die individuellen Installationsseiten der Bibliotheken für weitere Informationen lesen.

> [!NOTE]
> Auf Ihren Reisen durchs Web werden Sie auch auf JavaScript-Frameworks stoßen, wie [Ember](https://emberjs.com/) und [Angular](https://angularjs.org/). Während Bibliotheken oft zur Lösung einzelner Probleme und zum Einsetzen in bestehende Websites verwendet werden, tendieren Frameworks mehr dazu, vollständige Lösungen zur Entwicklung komplexer Webanwendungen anzubieten.

#### Polyfills

Polyfills bestehen auch aus JavaScript-Dateien von Drittanbietern, die Sie in Ihr Projekt einfügen können, aber sie unterscheiden sich von Bibliotheken — während Bibliotheken dazu neigen, bestehende Funktionen zu verbessern und Dinge zu erleichtern, stellen Polyfills Funktionen bereit, die überhaupt nicht existieren. Polyfills verwenden vollständig JavaScript oder andere Technologien, um Unterstützung für eine Funktion in einem Browser einzubauen, die nicht nativ unterstützt wird. Zum Beispiel könnten Sie ein Polyfill wie [es6-promise](https://github.com/stefanpenner/es6-promise) verwenden, um Promises in Browsern zu unterstützen, in denen sie nicht nativ unterstützt werden.

Lassen Sie uns eine Übung durchgehen — in diesem Beispiel, das nur zu Demonstrationszwecken verwendet wird, verwenden wir ein Fetch-Polyfill und ein es6-promise-Polyfill. Während Fetch und Promises in modernen Browsern voll unterstützt werden, wenn wir auf einen Browser abzielen, der Fetch nicht unterstützt, unterstützt dieser Browser wahrscheinlich auch Fetch nicht, und Fetch verwendet Promises intensiv:

1. Um loszulegen, machen Sie eine lokale Kopie unseres [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html)-Beispiels und [unser schönes Bild von einigen Blumen](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/flowers.jpg) in einem neuen Verzeichnis. Wir werden Code schreiben, um das Blumenbild zu holen und es auf der Seite anzuzeigen.
2. Speichern Sie als Nächstes eine Kopie des [Fetch-Polyfills](https://raw.githubusercontent.com/github/fetch/master/fetch.js) im selben Verzeichnis wie das HTML.
3. Wenden Sie die Polyfill-Skripte auf die Seite mit dem folgenden Code an — platzieren Sie diese über dem vorhandenen {{htmlelement("script")}}-Element, sodass sie bereits auf der Seite verfügbar sind, wenn wir versuchen, Fetch zu verwenden (wir laden auch ein Promise-Polyfill von einem CDN, da IE11 keine Promises unterstützt, das Fetch erfordert):

   ```html
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
   <script src="fetch.js"></script>
   ```

4. Innerhalb des ursprünglichen {{htmlelement("script")}} fügen Sie den folgenden Code hinzu:

   ```js
   const myImage = document.querySelector(".my-image");

   fetch("flowers.jpg").then((response) => {
     response.blob().then((myBlob) => {
       const objectURL = URL.createObjectURL(myBlob);
       myImage.src = objectURL;
     });
   });
   ```

5. Wenn Sie es in einem Browser laden, der [Fetch](/de/docs/Web/API/Window/fetch) nicht unterstützt, sollten Sie dennoch das Blumenbild sehen — cool!
   ![Überschrift lautet fetch basic example mit einem Foto von violetten Blumen](fetch-image.jpg)

> [!NOTE]
> Sie können unsere fertige Version unter [fetch-polyfill-finished.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html)).

> [!NOTE]
> Nochmals, es gibt viele verschiedene Möglichkeiten, die verschiedenen Polyfills, die Sie treffen werden, zu nutzen — konsultieren Sie die individuelle Dokumentation jedes Polyfills.

Eine Sache, die Sie sich vielleicht fragen, ist "warum sollten wir immer den Polyfill-Code laden, auch wenn wir ihn nicht brauchen?" Das ist ein guter Punkt — wenn Ihre Seiten komplexer werden und Sie mehr Bibliotheken, Polyfills usw. verwenden, können Sie anfangen, viel zusätzlichen Code zu laden, was die Leistung beeinträchtigen kann, insbesondere auf weniger leistungsfähigen Geräten. Es macht Sinn, nur dann Dateien zu laden, wenn sie benötigt werden.

Dies erfordert eine zusätzliche Einrichtung in Ihrem JavaScript. Sie benötigen eine Art von Funktions-Erkennungstest, der feststellt, ob der Browser die Funktion unterstützt, die wir versuchen zu verwenden:

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

Also führen wir zuerst eine Bedingungsprüfung durch, die überprüft, ob die Funktion `browserSupportsAllFeatures()` `true` zurückgibt. Wenn ja, führen wir die `main()`-Funktion aus, die den gesamten Code unserer App enthalten wird. `browserSupportsAllFeatures()` sieht so aus:

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

Hier testen wir, ob das [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-Objekt und die [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion im Browser vorhanden sind. Wenn beide dies tun, gibt die Funktion `true` zurück. Wenn die Funktion `false` zurückgibt, führen wir den Code im zweiten Teil der Bedingung aus — dies führt eine Funktion namens `loadScript()` aus, die die Polyfills in die Seite lädt, und dann `main()` ausführt, nachdem das Laden abgeschlossen ist. `loadScript()` sieht so aus:

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

Diese Funktion erstellt ein neues `<script>`-Element und setzt dann dessen `src`-Attribut auf den von uns angegebenen Pfad (´'polyfills.js'´, als wir es im obigen Code aufgerufen haben). Wenn es geladen ist, führen wir die Funktion aus, die wir als zweites Argument angegeben haben (´main()´). Falls ein Fehler beim Laden des Skripts auftritt, rufen wir die Funktion dennoch auf, aber mit einem benutzerdefinierten Fehler, den wir abrufen können, um ein mögliches Problem zu debuggen, falls es auftritt.

Beachten Sie, dass ´polyfills.js´ im Grunde die beiden Polyfills ist, die wir verwenden, zusammen in einer Datei. Wir haben dies manuell getan, aber es gibt intelligentere Lösungen, die die Pakete automatisch für Sie generieren werden — siehe [Browserify](https://browserify.org/) (siehe [Getting started with Browserify](https://www.sitepoint.com/getting-started-browserify/) für ein grundlegendes Tutorial). Es ist eine gute Idee, JS-Dateien in einem wie dieser zu bündeln — die Anzahl der benötigten HTTP-Anfragen zu reduzieren, verbessert die Leistung Ihrer Seite.

Sie können diesen Code in Aktion unter [fetch-polyfill-only-wenn-needed.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)). Wir möchten klarstellen, dass wir den Code nicht erfunden haben — er wurde ursprünglich von Philip Walton geschrieben. Lesen Sie seinen Artikel [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) für den Originalcode, sowie für nützliche Erklärungen zu dem breiteren Thema.

#### JavaScript-Transpiling

Eine andere Option, die für Leute, die moderne JavaScript-Funktionen jetzt nutzen wollen, immer beliebter wird, ist, Code, der neuere ECMAScript-Funktionen verwendet, in eine Version umzuwandeln, die in älteren Browsern funktioniert.

> [!NOTE]
> Dies wird "Transpiling" genannt — Sie sind nicht dabei, Code in eine niedrigere Ebene zu kompilen, um ihn auf einem Computer laufen zu lassen (wie Sie es zum Beispiel mit C-Code tun würden); stattdessen ändern Sie ihn in eine Syntax um, die auf einer ähnlichen Abstraktionsebene existiert, sodass er auf dieselbe Weise verwendet werden kann, nur unter leicht veränderten Umständen (in diesem Fall, einen JavaScript-Geschmack in einen anderen zu verwandeln).

Ein häufiger Transpiler ist [Babel.js](https://babeljs.io/), aber es gibt auch andere.

### Keine Browser-Erkennung

Historisch verwendeten Entwickler _Browser-Erkennungscode_, um zu erkennen, welchen Browser der Benutzer verwendet, und ihnen entsprechenden Code bereitzustellen, der auf diesem Browser funktioniert.

Alle Browser haben eine **user-agent**-Zeichenfolge, die identifiziert, welcher Browser es ist (Version, Name, Betriebssystem usw.). Viele Entwickler implementierten schlechten Browser-Erkennungscode und hielten ihn nicht auf dem neuesten Stand. Dies führte dazu, dass unterstützte Browser daran gehindert wurden, Websites zu verwenden, die sie leicht rendern könnten. Dies wurde so häufig, dass Browser anfingen, über den Browser, den sie in ihren user-agent-Zeichenfolgen waren, zu lügen (oder behaupteten, sie seien alle Browser), um Erkennungscode zu umgehen. Browser implementierten zudem Funktionen, die es Benutzern ermöglichten, zu ändern, welche user-agent-String der Browser meldete, wenn mit JavaScript abgefragt wurde. Dies machte die Browser-Erkennung noch fehleranfälliger und letztlich sinnlos.

[Aaron Andersens Geschichte der browserseitigen user-agent-Zeichenfolge](https://webaim.org/blog/user-agent-string-history/) bietet eine nützliche und amüsante Darstellung der Geschichte der Browser-Erkennung.
Verwenden Sie [Funktions-Erkennung](#funktions-erkennung) (und CSS @supports für CSS-Funktionserkennung), um zuverlässig festzustellen, ob eine Funktion unterstützt wird. Aber indem Sie das tun, brauchen Sie Ihren Code nicht zu ändern, wenn neue Browserversionen herauskommen.

### Umgang mit JavaScript-Präfixen

Im vorherigen Artikel haben wir bereits einige Diskussionen über den [Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) geführt. Nun, neue JavaScript-Implementierungen verwendeten früher ebenfalls Präfixe, wobei JavaScript [camel case](/de/docs/Glossary/camel_case) anstelle von [hyphenation](/de/docs/Glossary/kebab_case) wie im CSS verwendete. Zum Beispiel, wenn ein Präfix auf einem neuen jshint-API-Objekt namens `Object` verwendet würde:

- Mozilla würde `mozObject` verwenden
- Chrome/Opera/Safari würden `webkitObject` verwenden
- Microsoft würde `msObject` verwenden

Hier ist ein Beispiel, das die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwendet:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

Im Falle der Web Audio API waren die Schlüsselzugangspunkte zur Nutzung der API in Chrome/Opera über `webkit`-präfixierte Versionen (sie unterstützen jetzt die unpräfixierten Versionen) unterstützt. Der einfache Weg, diese Situation zu umgehen, besteht darin, eine neue Version der Objekte zu erstellen, die in einigen Browsern mit einem Präfix versehen sind, und sie gleich der nicht-präfixierten Version oder der präfixierten Version (oder anderen präfixierten Versionen, die berücksichtigt werden müssen) — welche auch immer vom Browser, der die Seite aktuell anzeigt, unterstützt wird, verwendet.

Dann verwenden wir dieses Objekt, um die API zu manipulieren, anstelle des ursprünglichen. In diesem Fall erstellen wir einen modifizierten [AudioContext](/de/docs/Web/API/AudioContext)-Konstruktor und dann eine neue Audio-Kontextinstanz, die wir für unser Web Audio-Coding verwenden.

Dieses Muster kann für nahezu jede präfixierte JavaScript-Funktion angewendet werden. JavaScript-Bibliotheken/Polyfills verwenden ebenfalls diesen Code, um so viele Browser-Unterschiede wie möglich vom Entwickler zu abstrahieren.

Auch hier sollten präfixierte Funktionen niemals auf Produktionswebsites verwendet werden — sie können ohne Vorwarnung geändert oder entfernt werden und verursachen Probleme mit der Browser-Kompatibilität. Wenn Sie darauf bestehen, präfixierte Funktionen zu verwenden, stellen Sie sicher, dass Sie die richtigen verwenden. Sie können herausfinden, welche Browser Präfixe für verschiedene JavaScript/API-Funktionen erfordern, auf MDN-Referenzseiten, und Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie dies auch durch Tests direkt in Browsern herausfinden.

Zum Beispiel, versuchen Sie, in die Entwicklerkonsole Ihres Browsers zu gehen und anfangen zu tippen

```js
window.AudioContext;
```

Wenn diese Funktion in Ihrem Browser unterstützt wird, wird sie automatisch vervollständigt.

## Hilfe finden

Es gibt viele weitere Probleme, auf die Sie mit JavaScript stoßen werden; das Wichtigste, was Sie wirklich wissen müssen, ist, wie Sie online Antworten finden. Konsultieren Sie den Abschnitt [Hilfe finden](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) des HTML- und CSS-Artikels für unsere besten Tipps.

## Zusammenfassung

Das ist also JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Startpunkt und einige Ideen geben, wie Sie mit den JavaScript-bezogenen Problemen umgehen können, auf die Sie stoßen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}
