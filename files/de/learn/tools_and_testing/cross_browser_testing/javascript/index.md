---
title: Umgang mit häufigen JavaScript-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nun werden wir uns mit häufigen browserübergreifenden JavaScript-Problemen und deren Behebung befassen. Dazu gehören Informationen zur Verwendung von Entwicklerwerkzeugen im Browser, um Probleme zu identifizieren und zu beheben, die Verwendung von Polyfills und Bibliotheken zur Umgehung von Problemen, die Implementierung moderner JavaScript-Features in älteren Browsern und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; ein grundlegendes Verständnis der <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige JavaScript-Probleme bei der Browserkompatibilität zu diagnostizieren und mit geeigneten Werkzeugen und Techniken zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit JavaScript

Historisch gesehen hatte JavaScript große Probleme mit der Browserkompatibilität – in den 1990er Jahren, als die Hauptbrowser Internet Explorer und Netscape hießen, waren die Skriptsprachen in verschiedenen Geschmacksrichtungen implementiert (Netscape hatte JavaScript, IE hatte JScript und bot auch VBScript als Option an), und obwohl JavaScript und JScript zumindest bis zu einem gewissen Grad kompatibel waren (beide basierten auf der {{glossary("ECMAScript")}}-Spezifikation), wurden Dinge oft in widersprüchlicher, inkompatibler Weise implementiert, was Entwicklern große Kopfschmerzen bereitete.

Solche Inkompatibilitätsprobleme hielten bis in die frühen 2000er Jahre an, da alte Browser noch in Gebrauch waren und weiterhin unterstützt werden mussten. Zum Beispiel musste Code zur Erstellung von {{domxref("XMLHttpRequest")}}-Objekten speziell für Internet Explorer 6 behandelt werden:

```js
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 und älter
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

Dies ist einer der Hauptgründe, warum Bibliotheken wie [jQuery](https://jquery.com/) ins Leben gerufen wurden – um die Unterschiede in den Browserimplementierungen zu abstrahieren, damit ein Entwickler einfach zum Beispiel [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/) verwenden kann, das dann die Unterschiede im Hintergrund behandelt.

Seitdem hat sich die Situation erheblich verbessert; moderne Browser unterstützen „klassische JavaScript-Features“ gut, und die Notwendigkeit, solchen Code zu verwenden, hat nachgelassen, da die Unterstützung älterer Browser weniger erforderlich ist (wobei zu bedenken ist, dass sie nicht gänzlich verschwunden sind).

Heutzutage treten die meisten browserübergreifenden JavaScript-Probleme auf:

- Wenn minderwertiger Code zur Browser-Erkennung, zur Feature-Detektion und zur Verwendung von Anbieter-Präfixen Browser daran hindert, Code auszuführen, den sie im Grunde genommen problemlos verwenden könnten.
- Wenn Entwickler neue/aufkommende JavaScript-Features, moderne Web-APIs usw. in ihrem Code verwenden und feststellen, dass solche Features in älteren Browsern nicht funktionieren.

Wir werden all diese Probleme und mehr weiter unten erkunden.

## Allgemeine JavaScript-Probleme beheben

Wie wir im [vorherigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#first_things_first_fixing_general_problems) zu HTML/CSS erwähnt haben, sollten Sie sicherstellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die browserübergreifenden Probleme konzentrieren. Wenn Sie mit den Grundlagen des [Fehlersuchens in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) noch nicht vertraut sind, sollten Sie diesen Artikel studieren, bevor Sie fortfahren. Es gibt eine Reihe von häufigen JavaScript-Problemen, die Sie beachten sollten, wie zum Beispiel:

- Grundlegende Syntax- und Logikprobleme (wiederum, lesen Sie [Fehlersuche in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Scope definiert sind und dass Sie keine Konflikte zwischen an verschiedenen Stellen deklarierten Elementen haben (siehe [Funktions-Scope und Konflikte](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this), hinsichtlich des Scopes, auf den es angewendet wird, und daher ob sein Wert dem entspricht, was Sie beabsichtigt haben. Sie können [Was ist "this"?](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, bei dem ein `this`-Scope in einer separaten Variablen gespeichert wird, um sicherzustellen, dass Sie Funktionen im richtigen `this`-Scope anwenden.
- Falsch verwendete Funktionen innerhalb von Schleifen, die mit einer globalen Variable iterieren (allgemeiner: "falschen Scope verwenden").

> [!CALLOUT]
> Zum Beispiel in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer Variablen, die mit `var` definiert ist, und erstellen jedes Mal einen Absatz und fügen einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Beim Klicken soll jeder einen Alert-Nachricht mit seiner Nummer (dem bei der Erstellung aktuellen Wert von `i`) anzeigen. Stattdessen melden alle `i` als 11 – weil die `for`-Schleife all ihre Iterationen macht, bevor die verschachtelten Funktionen aufgerufen werden.
>
> Die einfachste Lösung ist, die Iterationsvariable mit `let` anstelle von `var` zu deklarieren – der Wert von `i`, der mit der Funktion verknüpft ist, ist dann für jede Iteration einzigartig. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine Version, die funktioniert.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn/JavaScript/Asynchronous) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel zu verstehen, wie man _Promises_ verwendet: Die Verwendung von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) auf angemessene Weise oder das Ausführen des Codes zur Behandlung des Ergebnisses eines asynchronen Aufrufs im {{jsxref("Promise.then()", "then()")}}-Handler des Promise. Siehe [How to use promises](/de/docs/Learn/JavaScript/Asynchronous/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Buggy JavaScript Code: The 10 Most Common Mistakes JavaScript Developers Make](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige nette Diskussionen über diese häufigen Fehler und mehr.

### Linters

Wie bei [HTML und CSS](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#linters) können Sie eine bessere Qualität und weniger Fehleranfälligkeit Ihrer JavaScript-Codes mit einem Linter sicherstellen, der auf Fehler hinweist und auch Warnungen über schlechte Praktiken usw. ausgeben kann. Die JavaScript/ECMAScript-Linters, die wir empfehlen würden, sind [JSHint](https://jshint.com/) und [ESLint](https://eslint.org/); diese können auf verschiedene Arten verwendet werden, von denen wir einige unten im Detail beschreiben werden.

#### Online

Die [JSHint-Homepage](https://jshint.com/) bietet einen Online-Linter, mit dem Sie Ihren JavaScript-Code links eingeben und eine Ausgabe rechts erhalten können, einschließlich Metriken, Warnungen und Fehler.

![JSHint Screenshot. Das linke Panel ist ein farbcodierter und nummerierter Code-Editor. Das rechte Panel ist in Metriken über die Anzahl, Größe und Zusammensetzung der Funktionen und Warnungen aufgeteilt. Die Warnungen enthalten das Problem und die Zeilennummer.](jshint-online.png)

#### Code-Editor-Plugins

Es ist nicht sehr bequem, Ihren Code mehrmals hinüberkopieren und in eine Webseite einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihren Standard-Workflow integriert. Viele Code-Editoren haben Linter-Plugins. Sehen Sie sich zum Beispiel den Abschnitt "Plugins für Texteditoren und IDEs" auf der [JSHint-Installationsseite](https://jshint.com/install/) an.

#### Andere Verwendungen

Es gibt andere Möglichkeiten, solche Linters zu verwenden; Sie können mehr darüber auf den [JSHint](https://jshint.com/install/) und [ESLint](https://eslint.org/docs/latest/use/getting-started) Installationsseiten lesen.

Erwähnenswert sind die Verwendungen an der Befehlszeile – Sie können diese Tools als Befehlszeilenprogramme (verfügbar über das CLI – Kommandozeilenschnittstelle) mit npm (Node Package Manager – Sie müssen zuerst [NodeJS](https://nodejs.org/en/) installieren) installieren. Zum Beispiel installiert der folgende Befehl JSHint:

```bash
npm install -g jshint
```

Sie können diese Tools dann auf die JavaScript-Dateien verweisen, die Sie analysieren möchten, zum Beispiel:

![jshint filename.js wurde in die Befehlszeile eingegeben. Die Antwort ist eine Liste von Zeilennummern und eine Beschreibung des gefundenen Fehlers.](js-hint-commandline.png)

Sie können diese Tools auch mit einem Aufgabenläufer/Build-Tool wie [Gulp](https://gulpjs.com/) oder [Webpack](https://webpack.github.io/) verwenden, um Ihre JavaScript während der Entwicklung automatisch einzulesen. (Lesen Sie [Using a task runner to automate testing tools](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#using_a_task_runner_to_automate_testing_tools) in einem späteren Artikel.) Siehe [ESLint-Integrationen](https://eslint.org/docs/latest/use/integrations) für ESLint-Optionen; JSHint wird von Grunt direkt unterstützt und hat auch andere Integrationen verfügbar, z.B. [JSHint loader for Webpack](https://github.com/webpack-contrib/jshint-loader).

> [!NOTE]
> ESLint erfordert etwas mehr Einrichtung und Konfiguration als JSHint, ist aber auch leistungsfähiger.

### Entwicklertools für den Browser

Browser-Entwicklertools haben viele nützliche Funktionen, um JavaScript zu debuggen. Zum Start meldet die JavaScript-Konsole Fehler in Ihrem Code.

Machen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie sich die Konsole ansehen, werden Sie eine Fehlermeldung sehen. Der genaue Wortlaut hängt vom Browser ab, aber es wird so etwas wie: "Uncaught TypeError: heroes is not iterable" sein, und die referenzierte Zeilennummer ist 25. Wenn wir uns den Quellcode ansehen, ist der relevante Codeabschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code scheitert, sobald wir `jsonObj` verwenden möchten (was, wie Sie vermuten könnten, ein [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) sein soll). Dieses soll aus einer externen `.json`-Datei über den folgenden {{domxref("Window/fetch", "fetch()")}}-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber das funktioniert nicht.

#### Die Console API

Vielleicht wissen Sie schon, was mit diesem Code nicht stimmt, aber lassen Sie uns das genauer erkunden, um zu zeigen, wie Sie dies untersuchen könnten. Als Erstes gibt es eine [Console](/de/docs/Web/API/console) API, die JavaScript-Code die Interaktion mit der JavaScript-Konsole des Browsers erlaubt. Sie hat eine Reihe von verfügbaren Funktionen, aber diejenige, die Sie am häufigsten verwenden werden, ist [`console.log()`](/de/docs/Web/API/console/log_static), die eine benutzerdefinierte Nachricht in die Konsole ausgibt.

Versuchen Sie, ein `console.log()`-Aufruf hinzuzufügen, um den Rückgabewert von `fetch()` zu protokollieren, etwa so:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
console.log(`Response value: ${response}`);
const superHeroes = response;
populateHeader(superHeroes);
showHeroes(superHeroes);
```

Aktualisieren Sie die Seite im Browser. Dieses Mal werden Sie unmittelbar vor der Fehlermeldung eine neue Nachricht in der Konsole sehen:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die eigentliche Antwort aus dem Netzwerk eingegangen ist. Bevor wir die Antwort verwenden können, müssen wir warten, bis das `Promise` erfüllt ist.

Wir können dies tun, indem wir den Code, der die Antwort verwendet, in die {{jsxref("Promise.prototype.then()", "then()")}}-Methode des zurückgegebenen `Promise` einfügen, so:

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammengefasst gilt: Wann immer etwas nicht funktioniert und ein Wert an einem bestimmten Punkt in Ihrem Code nicht wie beabsichtigt erscheint, können Sie `console.log()` verwenden, um ihn auszugeben und zu sehen, was passiert.

#### Verwendung des JavaScript-Debuggers

Leider haben wir immer noch den gleichen Fehler – das Problem ist nicht verschwunden. Untersuchen wir das jetzt mit einer ausgefeilteren Funktion der Entwicklerwerkzeuge des Browsers: dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Tools sind auch in anderen Browsern verfügbar; die [Sources-Registerkarte](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web Development Tools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht die Debugger-Registerkarte so aus:

![Firefox-Debugger](debugger-tab.png)

- Links können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung – _Breakpoints_, _Callstack_ und aktuell aktive _Scopes_.

Die Hauptfunktion solcher Tools ist die Fähigkeit, Breakpoints zum Code hinzuzufügen – das sind Punkte, an denen die Ausführung des Codes stoppt, und an denen Sie die Umgebung in ihrem aktuellen Zustand untersuchen können, um zu sehen, was vor sich geht.

Lassen Sie uns beginnen. Der Fehler wird jetzt bei Zeile 26 geworfen. Klicken Sie auf Zeilennummer 26 im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie werden einen blauen Pfeil darüber erscheinen sehen). Aktualisieren Sie jetzt die Seite (Cmd/Ctrl + R) – der Browser wird die Ausführung des Codes bei Zeile 26 anhalten. An diesem Punkt aktualisiert sich die rechte Seite, um einige sehr nützliche Informationen anzuzeigen.

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des von Ihnen gesetzten Breakpoints.
- Unter _Call Stack_ sehen Sie einige Einträge – das ist im Grunde eine Liste der Reihe von Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns gerade befinden, und zweitens `onload`, die die Ereignisbehandlungsfunktion speichert, die den Aufruf zu `showHeroes()` enthält.
- Unter _Scopes_ sehen Sie den derzeit aktiven Scope für die Funktion, die wir uns ansehen. Wir haben nur drei – `showHeroes`, `block` und `Window` (den globalen Scope). Jeder Scope kann erweitert werden, um die Werte von Variablen im Scope anzuzeigen, wenn die Ausführung des Codes gestoppt wurde.

Wir können hier einige sehr nützliche Informationen finden.

1. Erweitern Sie den `showHeroes`-Scope – Sie können sehen, dass die Variablen `heroes` `undefined` sind, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktionierte.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein {{domxref("Response")}}-Objekt speichert, kein JSON-Objekt.

Das Argument von `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, der erforderlich ist, um den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir würden es begrüßen, wenn Sie dieses Problem selbst beheben. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation zum {{domxref("Response")}}-Objekt an. Wenn Sie nicht weiterkommen, finden Sie den fixierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed>.

> [!NOTE]
> Die Debugger-Registerkarte hat viele weitere nützliche Funktionen, die wir hier nicht besprochen haben, zum Beispiel bedingte Breakpoints und überwachte Ausdrücke. Für viel mehr Informationen, siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

### Leistungsprobleme

Wenn Ihre Apps komplexer werden und Sie mehr JavaScript verwenden, können Sie auf Leistungsprobleme stoßen, insbesondere beim Betrachten der Apps auf langsameren Geräten. Leistung ist ein großes Thema, und wir haben hier nicht die Möglichkeit, es im Detail zu behandeln. Einige schnelle Tipps sind:

- Um zu vermeiden, mehr JavaScript zu laden, als Sie benötigen, bündeln Sie Ihre Skripte in eine einzige Datei mit einer Lösung wie [Browserify](https://browserify.org/). Im Allgemeinen ist die Reduzierung der Anzahl der HTTP-Anfragen sehr gut für die Leistung.
- Machen Sie Ihre Dateien noch kleiner, indem Sie sie vor dem Hochladen auf Ihren Produktionsserver komprimieren. Komprimierung drückt den gesamten Code in eine riesige einzelne Zeile, wodurch die Dateigröße erheblich reduziert wird. Es ist hässlich, aber Sie müssen es nicht mehr lesen, wenn es fertig ist! Am besten verwendet man ein Komprimierungstool wie [Uglify](https://github.com/mishoo/UglifyJS) (es gibt auch eine Online-Version – siehe [JSCompress.com](https://jscompress.com/))
- Wenn Sie APIs verwenden, stellen Sie sicher, dass Sie die API-Funktionen ausschalten, wenn sie nicht verwendet werden; einige API-Aufrufe können wirklich kostenintensiv an Rechenleistung sein. Zum Beispiel, wenn Sie einen Videostream zeigen, stellen Sie sicher, dass er ausgeschaltet ist, wenn Sie ihn nicht sehen können. Wenn Sie die Position eines Geräts mithilfe wiederholter Geolocation-Aufrufe verfolgen, stellen Sie sicher, dass Sie sie ausschalten, wenn der Benutzer aufhört, sie zu verwenden.
- Animationen können wirklich kostspielig für die Leistung sein. Viele JavaScript-Bibliotheken bieten Animation-Funktionen, die durch JavaScript programmiert sind, aber es ist viel kostengünstiger, die Animationen über native Browser-Funktionen wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) (oder die aufkommende [Web Animations API](/de/docs/Web/API/Web_Animations_API)) zu machen als über JavaScript. Lesen Sie Brian Birtles' [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) für einige wirklich nützliche Theorien darüber, warum Animationen kostspielig sind, Tipps zur Verbesserung der Animationsleistung und Informationen über die Web Animations API.

> [!NOTE]
> Addy Osmani's [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/) enthält viele Details und einige ausgezeichnete Tipps zur Verbesserung der JavaScript-Leistung.

## Cross-Browser JavaScript-Probleme

In diesem Abschnitt werden wir einige der häufigsten cross-browser JavaScript-Probleme betrachten. Wir werden dies unterteilen in:

- Verwendung moderner JavaScript-Core-Features
- Verwendung moderner Web-API-Features
- Verwendung von schlechtem Browser-Sniffing-Code
- Leistungsprobleme

### Verwendung moderner JavaScript/API-Features

Im [vorherigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS) beschrieben wir einige Möglichkeiten, wie HTML- und CSS-Fehler und nicht erkannte Features aufgrund der Natur der Sprachen behandelt werden können. JavaScript ist jedoch nicht so permissiv wie HTML und CSS – wenn die JavaScript-Engine auf Fehler oder nicht erkannte Syntax stößt, z. B. wenn neue, nicht unterstützte Features verwendet werden, wird sie in der Regel Fehler generieren.

Es gibt einige Strategien, um die Unterstützung neuer Funktionen zu handhaben; lassen Sie uns die gängigsten erkunden.

> [!NOTE]
> Diese Strategien existieren nicht in separaten Silos – Sie können sie natürlich nach Bedarf kombinieren. Zum Beispiel könnten Sie eine Feature-Erkennung verwenden, um festzustellen, ob ein Feature unterstützt wird; wenn nicht, könnten Sie dann einen Code ausführen, um ein Polyfill oder eine Bibliothek zu laden, um die fehlende Unterstützung zu kompensieren.

#### Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test ausführen können, um festzustellen, ob eine JavaScript-Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen können, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die dies nicht tun, eine akzeptable Erfahrung zu bieten. Als schnelles Beispiel hat die [Geolocation API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät bereitstellt, auf dem der Webbrowser ausgeführt wird) einen Haupteingangspunkt für ihre Verwendung – eine `geolocation`-Eigenschaft auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt. Daher können Sie festlegen, ob der Browser Geolocation unterstützt oder nicht, indem Sie so etwas verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // zeigen Sie die Position auf einer Karte, vielleicht mit der Google Maps API
  });
} else {
  // Geben Sie dem Benutzer vielleicht eine Auswahl statischer Karten
}
```

Sie könnten einen solchen Test auch für ein CSS-Feature schreiben, indem Sie zum Beispiel die Existenz von _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ testen (z.B. `paragraph.style.transform !== undefined`).
Wenn Sie nach Anwendung von Stilen suchen, falls ein CSS-Feature unterstützt wird, können Sie direkt die [@supports](/de/docs/Web/CSS/@supports)-Regel (auch als Feature-Abfrage bekannt) verwenden.
Zum Beispiel, um zu prüfen, ob der Browser CSS-Container-Abfragen unterstützt, könnten Sie so etwas tun:

```css
@supports (container-type: inline-size) {
  /* Verwenden Sie Container-Abfragen, wenn unterstützt */
}
```

Zuletzt: Verwechseln Sie Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennung, welcher spezifische Browser auf die Seite zugreift) – dies ist eine schreckliche Praxis, die auf jeden Fall vermieden werden sollte. Siehe [don't browser sniff](#dont_browser_sniff) weiter unten für weitere Details.

> [!NOTE]
> Feature-Erkennung wird in einem eigens dafür gewidmeten Artikel, später im Modul, ausführlich behandelt.

#### Bibliotheken

JavaScript-Bibliotheken sind im Wesentlichen Drittcode-Einheiten, die Sie Ihrer Seite hinzufügen können und die Ihnen eine Fülle von fertiggestellten Funktionen bieten, die sofort verwendet werden können, was Ihnen viel Zeit erspart. Viele JavaScript-Bibliotheken sind wahrscheinlich entstanden, weil ihr Entwickler einen Satz von allgemeinen Dienstprogrammfunktionen schrieb, um sich Zeit bei der Erstellung zukünftiger Projekte zu sparen, und sie entschieden sich, sie zu veröffentlichen, weil auch andere davon profitieren könnten.

JavaScript-Bibliotheken gibt es in ein paar Hauptvarianten (einige Bibliotheken dienen mehr als einem dieser Zwecke):

- Utility-Bibliotheken: Bieten eine Reihe von Funktionen, um alltägliche Aufgaben einfacher und weniger langweilig zu verwalten. [jQuery](https://jquery.com/) zum Beispiel bietet seine eigenen voll ausgestatteten Selektoren und DOM-Manipulationsbibliotheken, um CSS-Selektor-ähnliche Auswahl von Elementen in JavaScript und einfachere DOM-Erstellung zu ermöglichen. Es ist nicht mehr so wichtig, jetzt da wir moderne Funktionen wie {{domxref("Document.querySelector()")}}, {{domxref("Document.querySelectorAll()")}}, {{domxref("Node")}}-Methoden in allen Browsern zur Verfügung haben, aber es kann immer noch nützlich sein, wenn älterer Browser-Support nötig ist.
- Convenience-Bibliotheken: Machen schwierige Dinge einfacher. Zum Beispiel ist die [WebGL API](/de/docs/Web/API/WebGL_API) wirklich komplex und herausfordernd zu verwenden, wenn man sie direkt schreibt, daher gibt es die [Three.js](https://threejs.org/)-Bibliothek (und andere), die auf WebGL basiert und eine viel einfachere API für die Erstellung von 3D-Objekten, Beleuchtung, Texturen etc. bereitstellt.
  Die [Service Worker API](/de/docs/Web/API/Service_Worker_API) ist ebenfalls sehr komplex in der Anwendung, daher sind Code-Bibliotheken aufgetaucht, um gängige Service-Worker-Anwendungsfälle einfacher umsetzbar zu machen (siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) für mehrere nützliche Code-Beispiele).
- Effektbibliotheken: Diese Bibliotheken sind dazu gedacht, Ihnen leicht zu ermöglichen, spezielle Effekte zu Ihren Websites hinzuzufügen. Dies war nützlicher, als „DHTML“ ein beliebtes Schlagwort war und das Implementieren eines Effekts eine Menge komplexen JavaScript erforderte, aber heutzutage haben Browser eine Menge eingebauter CSS-Funktionen und APIs, um Effekte leichter umzusetzen.
- UI-Bibliotheken: Bieten Methoden zur Implementierung komplexer UI-Funktionen, die andernfalls schwer umzusetzen und browserübergreifend zum Laufen zu bringen wären, zum Beispiel [Foundation](https://get.foundation/), [Bootstrap](https://getbootstrap.com/) und [Material-UI](https://mui.com/) (letzteres ist eine Sammlung von Komponenten zur Verwendung mit dem React-Framework). Diese werden oft als Grundlage für ein vollständiges Site-Layout verwendet; es ist oft schwierig, sie nur für ein UI-Feature einzubauen.
- Normalisierungsbibliotheken: Geben Ihnen eine einfache Syntax, die es Ihnen ermöglicht, eine Aufgabe einfach zu erledigen, ohne sich um browserübergreifende Unterschiede kümmern zu müssen. Die Bibliothek wird die entsprechenden APIs im Hintergrund manipulieren, so dass die Funktionalität unabhängig vom Browser funktioniert (theoretisch). Zum Beispiel ist [LocalForage](https://github.com/localForage/localForage) eine Bibliothek für die clientseitige Datenspeicherung, die eine einfache Syntax für das Speichern und Abrufen von Daten bietet. Im Hintergrund verwendet sie die beste API, die der Browser für das Speichern der Daten zur Verfügung hat, sei es [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) oder sogar Web SQL (das inzwischen abgekündigt ist, aber weiterhin in Chromium-basierten Browsern in sicheren Kontexten unterstützt wird). Als weiteres Beispiel, jQuery…

Wenn Sie eine Bibliothek auswählen, achten Sie darauf, dass sie über die von Ihnen unterstützten Browser hinweg funktioniert, und testen Sie Ihre Implementierung gründlich. Stellen Sie auch sicher, dass die Bibliothek populär und gut unterstützt ist und nicht dazu neigt, nächste Woche obsolet zu werden. Sprechen Sie mit anderen Entwicklern, um herauszufinden, was sie empfehlen, schauen Sie sich die Aktivität und die Anzahl der Mitwirkenden an, die die Bibliothek auf GitHub (oder wo auch immer sie gespeichert ist) hat, usw.

Die Nutzung von Bibliotheken auf einer grundlegenden Ebene besteht darin, die Bibliotheksdateien (JavaScript, möglicherweise auch etwas CSS oder andere Abhängigkeiten) herunterzuladen und Ihrer Seite hinzuzufügen (z.B. über ein {{htmlelement("script")}}-Element), obwohl es normalerweise viele andere Nutzungsoptionen für solche Bibliotheken gibt, wie etwa deren Installation als [Bower](https://bower.io/)-Komponenten oder sie als Abhängigkeiten über den [Webpack](https://webpack.github.io/) Modul-Bundler einzuschließen. Sie müssen die einzelnen Installationsseiten der Bibliotheken für weitere Informationen lesen.

> [!NOTE]
> Sie werden bei Ihren Reisen durchs Web auch auf JavaScript-Frameworks stoßen, wie [Ember](https://emberjs.com/) und [Angular](https://angularjs.org/). Während Bibliotheken oft auf die Lösung einzelner Probleme und das Einfügen in bestehende Seiten ausgerichtet sind, sind Frameworks häufig vollständige Lösungen für die Entwicklung komplexer Webanwendungen.

#### Polyfills

Polyfills bestehen ebenfalls aus Drittcode-JavaScript-Dateien, die Sie in Ihr Projekt einfügen können, unterscheiden sich jedoch von Bibliotheken – während Bibliotheken dazu neigen, bestehende Funktionalitäten zu verbessern und Dinge zu vereinfachen, bieten Polyfills Funktionalitäten, die gar nicht existieren. Polyfills verwenden JavaScript oder andere Technologien vollständig, um Unterstützung für eine Funktion bieten zu können, die ein Browser nicht nativ unterstützt. Beispielsweise könnten Sie ein Polyfill wie [es6-promise](https://github.com/stefanpenner/es6-promise) nutzen, um Promises in Browsern nutzbar zu machen, die sie nicht nativ unterstützen.

Lassen Sie uns ein Übung machen – in diesem Beispiel, das nur zu Demonstrationszwecken verwendet wird, verwenden wir ein Fetch-Polyfill und ein es6-promise-Polyfill. Während Fetch und Promises in modernen Browsern vollständig unterstützt werden, wenn wir auf einen Browser abzielen, der Fetch nicht unterstützt, würde dieser Browser wahrscheinlich Fetch auch nicht unterstützen, und Fetch nutzt Promises intensiv:

1. Um loszulegen, machen Sie eine lokale Kopie unseres [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html)-Beispiels und [unser schönes Bild von Blumen](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/flowers.jpg) in einem neuen Verzeichnis. Wir werden Code schreiben, um das Blumenbild abzurufen und es auf der Seite anzuzeigen.
2. Speichern Sie als Nächstes eine Kopie des [Fetch-Polyfills](https://raw.githubusercontent.com/github/fetch/master/fetch.js) im selben Verzeichnis wie das HTML.
3. Wenden Sie die Polyfill-Skripte auf die Seite an, indem Sie den folgenden Code verwenden – platzieren Sie diese über dem vorhandenen {{htmlelement("script")}}-Element, damit sie auf der Seite bereits verfügbar sind, wenn wir beginnen, Fetch zu verwenden (wir laden auch ein Promise-Polyfill von einem CDN, da IE11 Promises nicht unterstützt, die Fetch benötigt):

   ```html
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
   <script src="fetch.js"></script>
   ```

4. Innerhalb des ursprünglichen {{htmlelement("script")}}, fügen Sie den folgenden Code hinzu:

   ```js
   const myImage = document.querySelector(".my-image");

   fetch("flowers.jpg").then((response) => {
     response.blob().then((myBlob) => {
       const objectURL = URL.createObjectURL(myBlob);
       myImage.src = objectURL;
     });
   });
   ```

5. Wenn Sie es in einem Browser laden, der kein [Fetch](/de/docs/Web/API/Window/fetch) unterstützt, sollten Sie dennoch das Blumenbild sehen – cool!
   ![Überschrift, die das grundlegende Beispiel "Fetch" zeigt, mit einem Foto von lila Blumen](fetch-image.jpg)

> [!NOTE]
> Sie finden unsere fertige Version unter [fetch-polyfill-finished.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html)).

> [!NOTE]
> Wieder einmal gibt es viele verschiedene Möglichkeiten, die verschiedenen Polyfills, auf die Sie stoßen werden, zu nutzen – konsultieren Sie die jeweilige Dokumentation jedes Polyfills.

Eine Sache, die Sie vielleicht denken, ist: "Warum sollten wir immer noch den Polyfill-Code laden, auch wenn wir ihn nicht benötigen?" Das ist ein guter Punkt – wenn Ihre Seiten komplexer werden und Sie beginnen, mehr Bibliotheken, Polyfills usw. zu verwenden, können Sie anfangen, viel zusätzlichen Code zu laden, der die Leistung beeinträchtigen kann, insbesondere auf weniger leistungsfähigen Geräten. Es ist sinnvoll, nur bei Bedarf Dateien zu laden.

Dies erfordert einige zusätzliche Einstellungen in Ihrem JavaScript. Sie benötigen eine Art von Feature-Erkennungstest, der erkennt, ob der Browser die Funktion unterstützt, die wir zu verwenden versuchen:

```js
if (browserSupportsAllFeatures()) {
  main();
} else {
  loadScript("polyfills.js", main);
}

function main(err) {
  // tatsächlicher App-Code geht hier rein
}
```

Also zuerst führen wir ein Conditional aus, das überprüft, ob die Funktion `browserSupportsAllFeatures()` `true` zurückgibt. Wenn dies der Fall ist, führen wir die `main()`-Funktion aus, die den gesamten Code unserer App enthält. `browserSupportsAllFeatures()` sieht so aus:

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

Hier prüfen wir, ob das [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-Objekt und die [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion im Browser existieren. Wenn beide existieren, gibt die Funktion `true` zurück. Wenn die Funktion `false` zurückgibt, dann führen wir den Code im zweiten Teil des Conditional aus – dies führt eine Funktion namens `loadScript()` aus, die die Polyfills in die Seite lädt, und danach die `main()`-Funktion ausführt, wenn das Laden abgeschlossen ist. `loadScript()` sieht so aus:

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

Diese Funktion erstellt ein neues `<script>`-Element und setzt dann seine `src`-Eigenschaft auf den Pfad, den wir als erstes Argument aufgeführt haben (`'polyfills.js'`, als wir es im Code oben aufgerufen haben). Wenn es geladen ist, führen wir die Funktion aus, die wir als zweites Argument spezifiziert haben (`main()`). Wenn beim Laden des Skripts ein Fehler auftritt, rufen wir die Funktion trotzdem auf, aber mit einem benutzerdefinierten Fehler, den wir abrufen können, um ein Problem zu debuggen, wenn es auftritt.

Beachten Sie, dass `polyfills.js` im Grunde die zwei von uns verwendeten Polyfills in einer Datei zusammengefasst ist. Wir haben dies manuell gemacht, aber es gibt klügere Lösungen, die automatisch Bündel für Sie generieren – siehe [Browserify](https://browserify.org/) (siehe [Getting started with Browserify](https://www.sitepoint.com/getting-started-browserify/) für ein grundlegendes Tutorial). Es ist eine gute Idee, JS-Dateien auf diese Weise in eine Datei zusammenzuführen – durch die Reduzierung der Anzahl der HTTP-Anfragen, die Sie machen müssen, verbessern Sie die Leistung Ihrer Seite.

Sie können diesen Code in Aktion in [fetch-polyfill-only-when-needed.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)). Wir möchten klarstellen, dass wir keinen Anspruch auf diesen Code erheben können – er wurde ursprünglich von Philip Walton geschrieben. Lesen Sie seinen Artikel [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) für den Originalcode sowie viele nützliche Erklärungen zum breiteren Thema.

#### JavaScript Transpiling

Eine weitere Möglichkeit, die zunehmend beliebter wird für Menschen, die moderne JavaScript-Funktionen jetzt verwenden möchten, besteht darin, den Code, der aktuelle ECMAScript-Funktionen verwendet, in eine Version zu konvertieren, die in älteren Browsern funktioniert.

> [!NOTE]
> Dies wird als „Transpiling“ bezeichnet – Sie kompilieren keinen Code in einer niedrigeren Ebene, die auf einem Computer ausgeführt werden kann (wie bei C-Code), sondern ändern ihn in eine Syntax, die auf einem ähnlichen Abstraktionsniveau existiert, damit er auf die gleiche Weise verwendet werden kann, aber in leicht unterschiedlichen Umständen (in diesem Fall die Umwandlung von einer JavaScript-Syntax in eine andere).

Ein gängiger Transpiler ist [Babel.js](https://babeljs.io/), aber es gibt auch andere.

### Keine Browser-Erkennung

Historisch gesehen verwendeten Entwickler _Browser-Sniffing-Code_, um festzustellen, welcher Browser der Benutzer verwendete, und gaben ihnen den passenden Code, um in diesem Browser zu funktionieren.

Alle Browser haben einen **User-Agent**-String, der identifiziert, was der Browser ist (Version, Name, Betriebssystem usw.). Viele Entwickler implementierten schlecht gewarteten Browser-Sniffing-Code. Dies führte dazu, dass unterstützende Browser vom Zugang zu Websites ausgeschlossen wurden, die sie problemlos rendern könnten. Dies wurde so gebräuchlich, dass Browser anfingen, darüber zu lügen, welcher Browser sie in ihren User-Agent-Strings waren (oder behaupteten, sie seien alle Browser), um den Sniffing-Code auszutricksen. Browser implementierten auch Einrichtungen, die Benutzern erlaubten, den User-Agent-String, den der Browser bei Abfrage durch JavaScript meldete, zu ändern. All dies machte Browser-Sniffing Fehelr beladen und letztendlich sinnlos.

[History of the browser user-agent string](https://webaim.org/blog/user-agent-string-history/) von Aaron Andersen bietet einen nützlichen und amüsanten Einblick in die Geschichte des Browser-Sniffing.
Verwenden Sie [Feature-Erkennung](#feature-erkennung) (und CSS @supports für CSS-Feature-Erkennung), um zuverlässig zu erkennen, ob eine Funktion unterstützt wird. Indem Sie dies tun, müssen Sie Ihren Code nicht ändern, wenn neue Browserversionen herauskommen.

### Umgang mit JavaScript-Präfixen

Im vorherigen Artikel haben wir sehr viele Diskussionen über den [Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) geführt. Auch neue JavaScript-Implementierungen verwendeten Präfixe, wobei JavaScript {{Glossary("camel_case", "Camel-Case")}} statt {{Glossary("kebab_case", "Trennstrich-Schreibweise")}} wie CSS verwendete. Wenn ein Präfix in einer neuen jshint-API-Objekt namens `Object` verwendet wurde:

- Mozilla würde `mozObject` verwenden
- Chrome/Opera/Safari würde `webkitObject` verwenden
- Microsoft würde `msObject` verwenden

Hier ist ein Beispiel mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API):

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

Im Fall der Web Audio API wurden die grundlegenden Einstiegspunkte zur Verwendung der API in Chrome/Opera über `webkit` vorgespannte Versionen unterstützt (sie unterstützen jetzt die unverwendeten Versionen). Der einfache Weg um dieses Problem zu umgehen, ist es, eine neue Version der Objekte zu erstellen, die in einigen Browsern vorgespannte sind, und diese gleichwertig zur unverwendeten Version ODER der vorgespannte Version zu machen (ODER jede andere vorgespannte Version, die Berücksichtigung erfordert) – welche auch immer der Browser, der die Site gerade ansieht, unterstützt, wird benutzt.

Dann verwenden wir dieses Objekt, um die API zu manipulieren, statt das ursprüngliche zu verwenden. In diesem Fall erstellen wir einen modifizierten [AudioContext](/de/docs/Web/API/AudioContext)-Konstruktor und erstellen dann eine neue Audio-Kontext-Instanz, die für unser Web-Audio-Coding verwendet werden kann.

Dieses Muster kann auf nahezu jedes vorgespannte JavaScript-Feature angewendet werden. JavaScript-Bibliotheken/Polyfills verwenden ebenfalls solchen Code, um die Unterschiede zwischen Browsern so weit wie möglich vom Entwickler zu abstrahieren.

Auch hier gilt: Vorgespannte Features sollten niemals in Produktionswebsites verwendet werden – sie sind Änderungen oder Entfernungen ohne Vorwarnung unterworfen und verursachen Probleme bei der Browserkompatibilität. Wenn Sie darauf bestehen, vorgespannte Features zu verwenden, stellen Sie sicher, dass Sie die richtigen verwenden. Sie können nachschlagen, welche Browser Präfixe für verschiedene JavaScript/API-Features auf MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie sich unsicher sind, können Sie auch durch direktes Testen in Browsern herausfinden.

Zum Beispiel, versuchen Sie, in die Entwicklertools Ihres Browsers zu gehen und Folgendes einzugeben:

```js
window.AudioContext;
```

Wenn dieses Feature in Ihrem Browser unterstützt wird, wird es vervollständigt.

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit JavaScript begegnen werden; das Wichtigste ist wirklich zu wissen, wie man online Antworten findet. Konsultieren Sie den HTML und CSS-Artikel [Finding help section](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) für unsere besten Ratschläge.

## Zusammenfassung

Das war also JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Einstieg geben und einige Ideen, wie Sie die JavaScript-bezogenen Probleme angehen können, denen Sie begegnen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}
