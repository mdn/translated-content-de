---
title: Umgang mit häufigen JavaScript-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/JavaScript
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nun werden wir uns mit häufigen JavaScript-Problemen in verschiedenen Browsern befassen und wie man diese behebt. Dies umfasst Informationen zur Nutzung der Entwicklertools des Browsers zur Fehlersuche und -behebung, die Verwendung von Polyfills und Bibliotheken zur Umgehung von Problemen, das Vertrautmachen moderner JavaScript-Funktionen in älteren Browsern und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige JavaScript-Probleme bei der Unterstützung verschiedener Browser zu diagnostizieren und geeignete Tools und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Schwierigkeiten mit JavaScript

Historisch gesehen war JavaScript von Problemen mit der Browser-Kompatibilität geplagt. In den 1990er Jahren hatten die Hauptbrowser (Internet Explorer und Netscape) das Scripting in verschiedenen Sprachversionen implementiert (Netscape hatte JavaScript, IE hatte JScript und bot auch VBScript als Option an). Obwohl JavaScript und JScript bis zu einem gewissen Grad kompatibel waren (beide basierten auf der [ECMAScript](/de/docs/Glossary/ECMAScript)-Spezifikation), wurden viele Dinge auf widersprüchliche und inkompatible Weisen implementiert, was Entwicklern viele Kopfschmerzen bereitete.

Solche Inkompatibilitätsprobleme bestanden bis in die frühen 2000er, da alte Browser weiterhin genutzt wurden und unterstützt werden mussten. Beispielsweise musste der Code zur Erstellung von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekten speziell für Internet Explorer 6 behandelt werden:

```js
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  // IE 6 and older
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

Dies ist einer der Hauptgründe, warum Bibliotheken wie [jQuery](https://jquery.com/) entstanden sind – um Unterschiede in den Browserimplementierungen zu abstrahieren, so dass ein Entwickler einfach z.B. [`jQuery.ajax()`](https://api.jquery.com/jquery.ajax/) nutzen konnte, was die Unterschiede im Hintergrund handhabte.

Seither hat sich viel verbessert; moderne Browser unterstützen "klassische JavaScript-Funktionen" gut, und die Notwendigkeit, solchen Code zu verwenden, hat abgenommen, da die Anforderung, ältere Browser zu unterstützen, geringer geworden ist (obwohl sie nicht gänzlich verschwunden ist).

Heutzutage treten die meisten JavaScript-Probleme beim Einsatz in verschiedenen Browsern auf:

- Wenn minderwertiger Browser-Erkennungscode, Feature-Erkennungscode und die Nutzung von Anbieter-Präfixen Browser daran hindern, Code auszuführen, den sie ansonsten gut verwenden könnten.
- Wenn Entwickler neue/naszierende JavaScript-Funktionen, moderne Web-APIs usw. in ihrem Code nutzen und feststellen, dass solche Funktionen in älteren Browsern nicht funktionieren.

Diese und weitere Probleme werden wir im Folgenden untersuchen.

## Allgemeine JavaScript-Probleme beheben

Wie wir im [vorigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#first_things_first_fixing_general_problems) zu HTML/CSS gesagt haben, sollten Sie sicherstellen, dass Ihr Code generell funktioniert, bevor Sie sich auf Probleme bei der Unterstützung verschiedener Browser konzentrieren. Wenn Sie noch nicht mit den Grundlagen der [Fehlersuche in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong) vertraut sind, sollten Sie diesen Artikel studieren, bevor Sie weitermachen. Es gibt eine Reihe von häufigen JavaScript-Problemen, auf die Sie achten sollten, wie z.B.:

- Grundlegende Syntax- und Logikprobleme (siehe hierzu [Fehlersuche in JavaScript](/de/docs/Learn/JavaScript/First_steps/What_went_wrong)).
- Sicherstellen, dass Variablen usw. im richtigen Gültigkeitsbereich definiert sind und dass Sie nicht in Konflikte mit Objekten geraten, die an verschiedenen Stellen deklariert sind (siehe [Funktionsbereich und Konflikte](/de/docs/Learn/JavaScript/Building_blocks/Functions#function_scope_and_conflicts)).
- Verwirrung über [this](/de/docs/Web/JavaScript/Reference/Operators/this) hinsichtlich des Gültigkeitsbereichs, auf den es zutrifft, und ob dessen Wert der von Ihnen beabsichtigte ist. Sie können [Was ist "this"?](/de/docs/Learn/JavaScript/Objects/Basics#what_is_this) für eine leichte Einführung lesen; Sie sollten auch Beispiele wie [dieses hier](https://github.com/mdn/learning-area/blob/7ed039d17e820c93cafaff541aa65d874dde8323/javascript/oojs/assessment/main.js#L143) studieren, das ein typisches Muster zeigt, um einen `this`-Gültigkeitsbereich in einer separaten Variablen zu speichern, um dann diese Variable in geschachtelten Funktionen zu verwenden und sicher zu sein, dass Sie Funktionalität auf den richtigen `this`-Gültigkeitsbereich anwenden.
- Falsch verwendete Funktionen innerhalb von Schleifen, die mit einer globalen Variable iterieren (allgemeiner "den Gültigkeitsbereich falsch verstehen").

> [!CALLOUT]
> Beispielsweise in [bad-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/bad-for-loop.html) (siehe [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/bad-for-loop.html)), durchlaufen wir 10 Iterationen mit einer Variablen, die mit `var` definiert wurde, und erstellen jedes Mal einen Absatz und fügen ihm einen [onclick](/de/docs/Web/API/Element/click_event)-Ereignishandler hinzu. Wenn angeklickt, soll jede einen Alarm mit ihrer Nummer anzeigen (den Wert von `i` zum Zeitpunkt der Erstellung). Stattdessen geben alle `i` als 11 an, weil die `for`-Schleife alle ihre Iterationen abschließt, bevor geschachtelte Funktionen aufgerufen werden.
>
> Die einfachste Lösung besteht darin, die Iterationsvariable mit `let` statt `var` zu deklarieren — der Wert von `i`, der der Funktion zugeordnet ist, ist dann einzigartig für jede Iteration. Siehe [good-for-loop.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/good-for-loop.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/good-for-loop.html)) für eine funktionierende Version.

- Sicherstellen, dass [asynchrone Operationen](/de/docs/Learn/JavaScript/Asynchronous) abgeschlossen sind, bevor versucht wird, die von ihnen zurückgegebenen Werte zu verwenden. Dies bedeutet in der Regel, zu verstehen wie man _Promises_ verwendet: das geeignete Anwenden von [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) oder das Ausführen des Codes zur Verarbeitung des Ergebnisses eines asynchronen Aufrufs im Handler {{jsxref("Promise.then()", "then()")}} des Promises. Siehe [Wie man Promises benutzt](/de/docs/Learn/JavaScript/Asynchronous/Promises) für eine Einführung in dieses Thema.

> **Hinweis:** [Fehlerhafter JavaScript-Code: Die 10 häufigsten Fehler, die JavaScript-Entwickler machen](https://www.toptal.com/javascript/10-most-common-javascript-mistakes) enthält einige schöne Diskussionen über diese häufigen Fehler und mehr.

### Linters

Wie bei [HTML und CSS](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#linters) können Sie sicherstellen, dass Sie qualitativ höheren, weniger fehleranfälligen JavaScript-Code schreiben, indem Sie einen Linter verwenden, der Fehler aufzeigt und auch Warnungen über schlechte Praktiken usw. geben kann, und auf strengere oder entspanntere Berichterstattung von Fehlern/Warnungen angepasst werden kann. Die JavaScript/ECMAScript-Linter, die wir empfehlen würden, sind [JSHint](https://jshint.com/) und [ESLint](https://eslint.org/); diese können auf verschiedene Weisen verwendet werden, einige davon werden wir unten detailliert beschreiben.

#### Online

Die [JSHint-Homepage](https://jshint.com/) bietet einen Online-Linter, der es Ihnen ermöglicht, Ihren JavaScript-Code auf der linken Seite einzugeben und eine Ausgabe auf der rechten Seite bereitzustellen, einschließlich Metriken, Warnungen und Fehlern.

![Screenshot von JSHint. Das linke Panel ist ein farbcodierter und mit Zeilennummern versehener Code-Editor. Das rechte Panel ist in Metriken zur Anzahl, Größe und Zusammensetzung der Funktionen und Warnungen unterteilt. Die Warnungen beinhalten das Problem und die Zeilennummer.](jshint-online.png)

#### Code-Editor-Plugins

Es ist nicht sehr praktisch, Ihren Code mehrere Male auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihren Standard-Arbeitsablauf integriert. Viele Code-Editoren haben Linter-Plugins. Beispielsweise sehen Sie die "Plugins für Text-Editoren und IDEs"-Sektion auf der [JSHint-Install-Seite](https://jshint.com/install/).

#### Weitere Anwendungen

Es gibt andere Möglichkeiten, solche Linter zu verwenden. Sie können auf den Install-Seiten von [JSHint](https://jshint.com/install/) und [ESLint](https://eslint.org/docs/latest/use/getting-started) darüber lesen.

Erwähnenswert sind insbesondere Kommandozeilen-Anwendungen — Sie können diese Tools als Kommandozeilen-Dienstprogramme (verfügbar über die CLI — Kommandozeilenschnittstelle) mithilfe von npm (Node Package Manager — Sie müssen zuerst [NodeJS](https://nodejs.org/en/) installieren) installieren. Zum Beispiel installiert der folgende Befehl JSHint:

```bash
npm install -g jshint
```

Sie können diese Tools dann auf JavaScript-Dateien richten, die Sie überprüfen möchten, beispielsweise:

![jshint filename.js wurde in der Kommandozeile eingegeben. Die Antwort ist eine Liste von Zeilennummern und einer Beschreibung des gefundenen Fehlers.](js-hint-commandline.png)

Sie können diese Tools auch mit einem Task-Runner/Build-Tool wie [Gulp](https://gulpjs.com/) oder [Webpack](https://webpack.github.io/) verwenden, um Ihr JavaScript während der Entwicklung automatisch zu überprüfen. (siehe [Verwenden eines Task-Runners zur Automatisierung von Test-Tools](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#using_a_task_runner_to_automate_testing_tools) in einem späteren Artikel.) Siehe [ESLint-Integrationen](https://eslint.org/docs/latest/use/integrations) für ESLint-Optionen; JSHint wird von Grunt standardmäßig unterstützt und hat auch andere Integrationen, z.B. [JSHint-Loader für Webpack](https://github.com/webpack-contrib/jshint-loader).

> [!NOTE]
> ESLint erfordert etwas mehr Setup und Konfiguration als JSHint, ist aber auch mächtiger.

### Entwicklerwerkzeuge des Browsers

Browser-Entwicklerwerkzeuge haben viele nützliche Funktionen, die bei der Fehlersuche in JavaScript helfen. Zum Beispiel wird die JavaScript-Konsole Fehler in Ihrem Code melden.

Erstellen Sie eine lokale Kopie unseres [fetch-broken](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-broken/)-Beispiels (siehe auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-broken)).

Wenn Sie in die Konsole schauen, werden Sie eine Fehlermeldung sehen. Die genaue Wortwahl ist browserabhängig, aber es wird so etwas wie: "Uncaught TypeError: heroes is not iterable" sein, und die referenzierte Zeilennummer ist 25. Wenn wir den Quellcode ansehen, ist der relevante Abschnitt dieser:

```js
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (const hero of heroes) {
    // ...
  }
}
```

Der Code stürzt also ab, sobald wir versuchen, `jsonObj` zu verwenden, von dem man erwarten könnte, dass es ein [JSON-Objekt](/de/docs/Learn/JavaScript/Objects/JSON) ist. Dies soll aus einer externen `.json`-Datei mit dem folgenden [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf abgerufen werden:

```js
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

const response = fetch(requestURL);
populateHeader(response);
showHeroes(response);
```

Aber dies schlägt fehl.

#### Die Konsolen-API

Sie wissen vielleicht schon, was mit diesem Code falsch ist, aber lassen Sie uns dies näher untersuchen, um zu zeigen, wie Sie dies untersuchen könnten. Zuallererst gibt es eine [Konsolen](/de/docs/Web/API/console)-API, die es JavaScript-Code ermöglicht, mit der JavaScript-Konsole des Browsers zu interagieren. Sie bietet eine Reihe von Funktionen, aber die, die Sie am häufigsten verwenden werden, ist [`console.log()`](/de/docs/Web/API/console/log_static), die eine benutzerdefinierte Nachricht an die Konsole ausgibt.

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

Aktualisieren Sie die Seite im Browser. Dieses Mal sehen Sie vor der Fehlermeldung eine neue Nachricht, die an die Konsole übergeben wurde:

```plain
Response value: [object Promise]
```

Die `console.log()`-Ausgabe zeigt, dass der Rückgabewert von `fetch()` nicht die JSON-Daten sind, sondern ein {{jsxref("Promise")}}. Die `fetch()`-Funktion ist asynchron: Sie gibt ein `Promise` zurück, das erst erfüllt wird, wenn die tatsächliche Antwort vom Netzwerk empfangen wurde. Bevor wir die Antwort verwenden können, müssen wir abwarten, dass das `Promise` erfüllt wird.

Dies können wir tun, indem wir den Code, der die Antwort verwendet, in der {{jsxref("Promise.prototype.then()", "then()")}}-Methode des zurückgegebenen `Promise` platzieren, so:

```js
const response = fetch(requestURL);
fetch(requestURL).then((response) => {
  populateHeader(response);
  showHeroes(response);
});
```

Zusammenfassend, immer wenn etwas nicht funktioniert und ein Wert nicht zu sein scheint, was er an einem bestimmten Punkt in Ihrem Code sein soll, können Sie `console.log()` verwenden, um ihn auszugeben und zu sehen, was geschieht.

#### Den JavaScript-Debugger verwenden

Leider haben wir immer noch denselben Fehler – das Problem ist nicht verschwunden. Lassen Sie uns dies jetzt untersuchen, indem wir ein ausgeklügelteres Merkmal der Entwicklerwerkzeuge des Browsers verwenden: den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html), wie er in Firefox genannt wird.

> [!NOTE]
> Ähnliche Werkzeuge sind in anderen Browsern verfügbar; das [Sources-Tab](https://developer.chrome.com/docs/devtools/#sources) in Chrome, Debugger in Safari (siehe [Safari Web-Entwicklungstools](https://developer.apple.com/safari/tools/)), usw.

In Firefox sieht das Debugger-Tab so aus:

![Firefox-Debugger](debugger-tab.png)

- Auf der linken Seite können Sie das Skript auswählen, das Sie debuggen möchten (in diesem Fall haben wir nur eines).
- Das mittlere Panel zeigt den Code im ausgewählten Skript.
- Das rechte Panel zeigt nützliche Details zur aktuellen Umgebung - _Breakpoints_, _Aufrufstack_ und aktuell aktive _Gültigkeitsbereiche_.

Das Hauptmerkmal solcher Tools ist die Fähigkeit, Breakpoints zu Code hinzuzufügen – das sind Punkte, an denen die Ausführung des Codes stoppt, und an diesem Punkt können Sie die Umgebung in ihrem aktuellen Zustand untersuchen und sehen, was los ist.

Lassen Sie uns anfangen. Der Fehler wird jetzt bei Zeile 26 geworfen. Klicken Sie auf die Zeilennummer 26 im mittleren Panel, um einen Breakpoint hinzuzufügen (Sie werden einen blauen Pfeil darüber sehen). Jetzt aktualisieren Sie die Seite (Cmd/Ctrl + R) – der Browser stoppt die Ausführung des Codes bei Zeile 26. Zu diesem Zeitpunkt wird die rechte Seite aktualisiert, um einige sehr nützliche Informationen anzuzeigen.

![Firefox-Debugger mit einem Breakpoint](breakpoint.png)

- Unter _Breakpoints_ sehen Sie die Details des Breakpoints, den Sie gesetzt haben.
- Unter _Aufrufstack_ sehen Sie einige Einträge – dies ist im Grunde eine Liste der Reihe von Funktionen, die aufgerufen wurden, um die aktuelle Funktion aufzurufen. Oben haben wir `showHeroes()`, die Funktion, in der wir uns derzeit befinden, und an zweiter Stelle `onload`, die den Ereignishandler speichert, der den Aufruf zu `showHeroes()` beinhaltet.
- Unter _Gültigkeitsbereiche_ sehen Sie den derzeit aktiven Gültigkeitsbereich für die Funktion, die wir uns ansehen. Wir haben nur drei – `showHeroes`, `block` und `Window` (der globale Gültigkeitsbereich). Jeder Gültigkeitsbereich kann erweitert werden, um die Werte von Variablen darin zu sehen, wenn die Ausführung des Codes gestoppt wurde.

Wir können einige sehr nützliche Informationen hier finden.

1. Erweitern Sie den `showHeroes`-Gültigkeitsbereich – Sie können sehen, dass die Helden-Variable `undefined` ist, was darauf hinweist, dass der Zugriff auf die `members`-Eigenschaft von `jsonObj` (erste Zeile der Funktion) nicht funktioniert hat.
2. Sie können auch sehen, dass die `jsonObj`-Variable ein [`Response`](/de/docs/Web/API/Response)-Objekt speichert, kein JSON-Objekt.

Das Argument von `showHeroes()` ist der Wert, mit dem das `fetch()`-Promise erfüllt wurde. Dieses Promise ist also nicht im JSON-Format: Es ist ein `Response`-Objekt. Es gibt einen zusätzlichen Schritt, den Inhalt der Antwort als JSON-Objekt abzurufen.

Wir möchten, dass Sie versuchen, dieses Problem selbst zu lösen. Um Ihnen den Einstieg zu erleichtern, sehen Sie sich die Dokumentation zum [`Response`](/de/docs/Web/API/Response)-Objekt an. Wenn Sie stecken bleiben, können Sie den reparierten Quellcode unter <https://github.com/mdn/learning-area/tree/main/tools-testing/cross-browser-testing/javascript/fetch-fixed> finden.

> [!NOTE]
> Das Debugger-Tab hat viele andere nützliche Funktionen, die wir hier nicht besprochen haben, beispielsweise bedingte Breakpoints und Watch-Expressions. Für viele weitere Informationen siehe die [Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)-Seite.

### Leistungsprobleme

Wenn Ihre Apps komplexer werden und Sie mehr JavaScript verwenden, könnten Sie auf Leistungsprobleme stoßen, insbesondere beim Betrachten von Apps auf langsameren Geräten. Leistung ist ein großes Thema, und wir haben hier nicht die Zeit, es ausführlich zu behandeln. Einige schnelle Tipps sind wie folgt:

- Um zu vermeiden, mehr JavaScript zu laden, als Sie benötigen, bündeln Sie Ihre Skripte in einer einzigen Datei mit einer Lösung wie [Browserify](https://browserify.org/). Im Allgemeinen ist die Reduzierung der Anzahl der HTTP-Anfragen sehr gut für die Leistung.
- Machen Sie Ihre Dateien noch kleiner, indem Sie sie komprimieren, bevor Sie sie auf Ihren Produktionsserver laden. Komprimieren drückt den gesamten Code zu einer einzigen großen Zeile zusammen, wodurch er viel weniger Dateigröße einnimmt. Es ist hässlich, aber Sie müssen es nicht lesen, wenn es fertig ist! Dies wird am besten mit einem Komprimierungstool wie [Uglify](https://github.com/mishoo/UglifyJS) gemacht (es gibt auch eine online Version — siehe [JSCompress.com](https://jscompress.com/))
- Wenn Sie APIs verwenden, stellen Sie sicher, dass Sie API-Funktionen abschalten, wenn sie nicht verwendet werden; einige API-Aufrufe können wirklich teuer an Rechenleistung sein. Beispielsweise, wenn Sie einen Videostream zeigen, stellen Sie sicher, dass er ausgeschaltet ist, wenn Sie ihn nicht sehen können. Bei wiederholten Geolocation-Aufrufen zur Verfolgung des Standorts eines Geräts, stellen Sie sicher, dass Sie ihn abschalten, wenn er nicht mehr verwendet wird.
- Animationen können wirklich kostenintensiv für die Leistung sein. Viele JavaScript-Bibliotheken bieten Animationsfähigkeiten, die von JavaScript programmiert sind, aber es ist viel kosteneffizienter, die Animationen über native Browserfunktionen wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) (oder die naszierende [Web-Animations-API](/de/docs/Web/API/Web_Animations_API)) als JavaScript zu machen. Lesen Sie Brian Birtles' [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) für einige sehr nützliche Theorien darüber, warum Animation teuer ist, Tipps zur Verbesserung der Animationsleistung und Informationen über die Web-Animations-API.

> [!NOTE]
> Addy Osmani's [Writing Fast, Memory-Efficient JavaScript](https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/) enthält viele Details und einige ausgezeichnete Tipps zur Steigerung der JavaScript-Leistung.

## JavaScript-Probleme bei der Unterstützung verschiedener Browser

In diesem Abschnitt werden wir einige der häufigsten JavaScript-Probleme bei der browserübergreifenden Unterstützung betrachten. Wir werden dies in folgende Bereiche unterteilen:

- Verwendung moderner JavaScript-Funktionen
- Verwendung moderner Web-API-Funktionen
- Verwendung schlechten Browser-Erkennungscodes
- Leistungsprobleme

### Verwendung moderner JavaScript/API-Funktionen

Im [vorigen Artikel](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS) beschrieben wir einige der Möglichkeiten, mit denen HTML- und CSS-Fehler und nicht erkannte Funktionen aufgrund der Natur der Sprachen behandelt werden können. JavaScript ist jedoch nicht so verzeihend wie HTML und CSS – wenn die JavaScript-Engine Fehler oder nicht erkannte Syntax, wie z.B. wenn neue, nicht unterstützte Funktionen verwendet werden, findet, wird sie in der Regel Fehler auslösen.

Es gibt einige Strategien zum Umgang mit der Unterstützung neuer Funktionen; lassen Sie uns die häufigsten untersuchen.

> [!NOTE]
> Diese Strategien existieren nicht in separaten Silos — Sie können sie natürlich nach Bedarf kombinieren. Zum Beispiel könnten Sie eine Feature-Erkennung verwenden, um zu bestimmen, ob eine Funktion unterstützt wird; wenn nicht, könnten Sie dann Code ausführen, um ein Polyfill oder eine Bibliothek zu laden, um den Mangel an Unterstützung zu behandeln.

#### Feature-Erkennung

Die Idee hinter der Feature-Erkennung ist, dass Sie einen Test durchführen können, um festzustellen, ob eine JavaScript-Funktion im aktuellen Browser unterstützt wird, und dann bedingt Code ausführen, um sowohl in Browsern, die die Funktion unterstützen, als auch in solchen, die dies nicht tun, eine akzeptable Erfahrung zu bieten. Als schnelles Beispiel hat die [Geolocation-API](/de/docs/Web/API/Geolocation_API) (die verfügbare Standortdaten für das Gerät, auf dem der Webbrowser ausgeführt wird, bereitstellt) einen Haupteinstiegspunkt für ihre Verwendung – eine `geolocation`-Eigenschaft, die auf dem globalen [Navigator](/de/docs/Web/API/Navigator)-Objekt vorhanden ist. Daher können Sie testen, ob der Browser Geolokalisierung unterstützt oder nicht, indem Sie so etwas verwenden:

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    // show the location on a map, perhaps using the Google Maps API
  });
} else {
  // Give the user a choice of static maps instead perhaps
}
```

Sie könnten auch einen solchen Test für eine CSS-Funktion schreiben, indem Sie beispielsweise testet, ob _[element.style.property](/de/docs/Web/API/HTMLElement/style)_ existiert (z.B. `paragraph.style.transform !== undefined`).
Wenn Sie Styles anwenden möchten, wenn eine CSS-Funktion unterstützt wird, können Sie direkt die [@supports](/de/docs/Web/CSS/@supports)-Regel (bekannt als Funktionsabfrage) verwenden.
Um beispielsweise zu überprüfen, ob der Browser CSS-Containerabfragen unterstützt, könnten Sie so etwas tun:

```css
@supports (container-type: inline-size) {
  /* Use container queries if supported */
}
```

Als letztes Punkt, verwechseln Sie Feature-Erkennung nicht mit **Browser-Sniffing** (Erkennen, welcher spezifische Browser auf die Seite zugreift) – dies ist eine schreckliche Praxis, die unter allen Umständen vermieden werden sollte. Siehe [keine Browser-Erkennung](#dont_browser_sniff) weiter unten für mehr Details.

> [!NOTE]
> Feature-Erkennung wird in einem späteren Artikel des Moduls in viel mehr Detail behandelt.

#### Bibliotheken

JavaScript-Bibliotheken sind im Grunde Drittanbieter-Code, den man an seine Seite anhängen kann und die Ihnen eine Fülle von sofort einsetzbarer Funktionalität bieten, die Ihnen viel Zeit in der Entwicklung sparen kann. Viele JavaScript-Bibliotheken sind wahrscheinlich entstanden, weil ihr Entwickler eine Reihe häufig genutzter Utility-Funktionen schrieb, um Zeit bei zukünftigen Projekten zu sparen, und sich dann entschied, sie in die Wildnis zu entlassen, weil auch andere Leute sie nützlich finden könnten.

JavaScript-Bibliotheken tendieren dazu, in ein paar Hauptkategorien zu fallen (einige Bibliotheken werden mehr als einen dieser Zwecke erfüllen):

- Utility-Bibliotheken: Stellen eine Reihe von Funktionen bereit, um alltägliche Aufgaben einfacher und weniger langweilig zu bewältigen. [jQuery](https://jquery.com/) zum Beispiel stellt seine eigenen umfassenden Selektoren- und DOM-Manipulations-Bibliotheken bereit, um eine Auswahl von Elementen in JavaScript ähnlich wie bei CSS-Selektoren und einfachere DOM-Aufbau zu ermöglichen. Es ist nicht mehr so wichtig, da wir jetzt moderne Funktionen wie [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)/[`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)/[`Node`](/de/docs/Web/API/Node)-Methoden haben, die über Browser hinweg verfügbar sind, aber es kann immer noch nützlich sein, wenn ältere Browser unterstützt werden müssen.
- Komfortbibliotheken: Machen schwierige Dinge einfacher. Zum Beispiel ist die [WebGL-API](/de/docs/Web/API/WebGL_API) wirklich komplex und herausfordernd zu verwenden, wenn man sie direkt schreibt, sodass die [Three.js](https://threejs.org/)-Bibliothek (und andere) auf WebGL aufbaut und eine viel einfachere API für die Erstellung gängiger 3D-Objekte, Beleuchtung, Texturen usw. bietet.
  Die [Service Worker API](/de/docs/Web/API/Service_Worker_API) ist ebenfalls sehr komplex zu verwenden, daher sind Codebibliotheken aufgetaucht, um gängige Anwendungsfälle für Service Worker viel einfacher zu implementieren (siehe das [Service Worker Cookbook](https://github.com/mdn/serviceworker-cookbook) für mehrere nützliche Codebeispiele).
- Effektbibliotheken: Diese Bibliotheken sind dafür konzipiert, Ihnen das Hinzufügen von Spezialeffekten zu Ihren Websites zu erleichtern. Dies war früher nützlicher, als "DHTML" ein beliebtes Schlagwort war und das Implementieren eines Effekts viel komplexes JavaScript beinhaltete, aber heutzutage haben Browser viele eingebaute CSS-Funktionen und APIs, um Effekte einfacher zu implementieren.
- UI-Bibliotheken: Bieten Methoden zur Implementierung komplexer UI-Funktionen, die sich sonst schwer umsetzen ließen und browserübergreifend zu einem Problem werden würden, z.B. [Foundation](https://get.foundation/), [Bootstrap](https://getbootstrap.com/) und [Material-UI](https://mui.com/) (letzteres ist eine Komponentensammlung zur Verwendung mit dem React-Framework). Diese werden oft als Basis für die gesamte Layout einer Website verwendet; es ist oft schwierig, sie nur für ein einziges UI-Feature zu integrieren.
- Normalisierungsbibliotheken: Geben Ihnen eine einfache Syntax, die es erlaubt, eine Aufgabe zu erledigen, ohne sich um browserübergreifende Unterschiede kümmern zu müssen. Die Bibliothek wird im Hintergrund angemessene APIs manipulieren, sodass die Funktionalität funktioniert, egal welcher Browser genutzt wird (theoretisch). Zum Beispiel ist [LocalForage](https://github.com/localForage/localForage) eine Bibliothek zur clientseitigen Datenspeicherung, die eine einfache Syntax für das Speichern und Abrufen von Daten bereitstellt. Im Hintergrund verwendet sie die beste API, die dem Browser zur Verfügung steht, um die Daten zu speichern, sei es [IndexedDB](/de/docs/Web/API/IndexedDB_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) oder sogar Web SQL (das jetzt abgelöst ist, aber immer noch in Chromium-basierte Browsern in sicheren Kontexten unterstützt wird). Als weiteres Beispiel, jQuery

Wenn Sie eine Bibliothek wählen, sollten Sie sicherstellen, dass sie über die von Ihnen zu unterstützenden Browser hinweg funktioniert, und Ihre Implementierung gründlich testen. Stellen Sie auch sicher, dass die Bibliothek populär und gut unterstützt ist und nicht nächste Woche veraltet sein wird. Sprechen Sie mit anderen Entwicklern, um herauszufinden, was sie empfehlen, sehen Sie, wie viel Aktivität und wie viele Beitragende die Bibliothek auf GitHub (oder wo auch immer sie gespeichert ist) hat usw.

Die Nutzung von Bibliotheken auf einem grundlegenden Niveau besteht normalerweise darin, die Dateien der Bibliothek (JavaScript, möglicherweise auch etwas CSS oder andere Abhängigkeiten) herunterzuladen und sie an Ihre Seite anzuhängen (z.B. über ein {{htmlelement("script")}}-Element), obwohl es normalerweise viele andere Nutzungsmöglichkeiten für solche Bibliotheken gibt, wie die Installation als [Bower](https://bower.io/)-Komponenten oder deren Einbindung als Abhängigkeiten über den [Webpack](https://webpack.github.io/)-Modul-Bündler. Sie müssen die individuellen Installationsseiten der Bibliotheken für weitere Informationen lesen.

> [!NOTE]
> Auf Ihrer Reise durch das Web werden Sie außerdem auf JavaScript-Frameworks stoßen, wie [Ember](https://emberjs.com/) und [Angular](https://angularjs.org/). Während Bibliotheken häufig zur Lösung einzelner Probleme und zur Integration in bestehende Webseiten verwendet werden können, sind Frameworks eher komplette Lösungen zur Entwicklung komplexer Webanwendungen.

#### Polyfills

Polyfills bestehen ebenfalls aus Drittanbieter-JavaScript-Dateien, die in Ihr Projekt eingebunden werden können, aber sie unterscheiden sich von Bibliotheken – während Bibliotheken dazu neigen, bestehende Funktionen zu erweitern und Sachen zu erleichtern, bieten Polyfills Funktionen, die überhaupt nicht vorhanden sind. Polyfills verwenden JavaScript oder andere Technologien vollständig, um Unterstützung für eine Funktion zu bieten, die ein Browser nicht nativ unterstützt. Beispielsweise könnten Sie ein Polyfill wie [es6-promise](https://github.com/stefanpenner/es6-promise) verwenden, um Promises in Browsern zum Laufen zu bringen, in denen sie nicht nativ unterstützt werden.

Lassen Sie uns durch eine Übung gehen — in diesem zu Demonstrationszwecken verwendeten Beispiel verwenden wir ein Fetch-Polyfill und ein es6-Promise-Polyfill. Auch wenn Fetch und Promises in modernen Browsern vollständig unterstützt werden, würde ein Browser, der Fetch nicht unterstützt, wahrscheinlich auch Fetch nicht unterstützen, und Fetch arbeitet stark mit Promises:

1. Um zu beginnen, erstellen Sie eine lokale Kopie unseres [fetch-polyfill.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill.html)-Beispielforms und unseres [schönen Bildes von einigen Blumen](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/flowers.jpg) in einem neuen Verzeichnis. Wir werden Code schreiben, um das Blumenbild abzurufen und auf der Seite anzuzeigen.
2. Speichern Sie als nächstes eine Kopie des [Fetch-Polyfills](https://raw.githubusercontent.com/github/fetch/master/fetch.js) im selben Verzeichnis wie das HTML.
3. Wenden Sie die Polyfill-Skripte auf die Seite mit folgendem Code an — platzieren Sie diese über dem bestehenden {{htmlelement("script")}}-Element, damit sie bereits auf der Seite verfügbar sind, wenn wir anfangen, Fetch zu verwenden (wir laden auch ein Promise-Polyfill von einem CDN, da IE11 keine Promises unterstützt, die fetch benötigt):

   ```html
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
   <script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script>
   <script src="fetch.js"></script>
   ```

4. Fügen Sie im ursprünglichen {{htmlelement("script")}}-Element folgenden Code hinzu:

   ```js
   const myImage = document.querySelector(".my-image");

   fetch("flowers.jpg").then((response) => {
     response.blob().then((myBlob) => {
       const objectURL = URL.createObjectURL(myBlob);
       myImage.src = objectURL;
     });
   });
   ```

5. Wenn Sie dies in einem Browser laden, der [Fetch](/de/docs/Web/API/Window/fetch) nicht unterstützt, sollten Sie dennoch das Blumenbild sehen – cool!
   ![Überschrift mit dem Text fetch basic example und einem Foto von lila Blumen](fetch-image.jpg)

> [!NOTE]
> Sie können unsere fertige Version unter [fetch-polyfill-finished.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html) finden (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-finished.html)).

> [!NOTE]
> Wieder gibt es viele verschiedene Möglichkeiten, die verschiedenen Polyfills, auf die Sie stoßen werden, zu nutzen – konsultieren Sie die individuelle Dokumentation jedes Polyfills.

Ein Gedanke, den Sie vielleicht haben, ist "Warum sollten wir den Polyfill-Code immer laden, selbst wenn wir ihn nicht benötigen?" Dies ist ein guter Punkt – je komplexer Ihre Seiten werden und je mehr Bibliotheken, Polyfills usw. Sie verwenden, desto mehr zusätzlichen Code können Sie laden, was die Leistung beeinträchtigen kann, insbesondere auf weniger leistungsstarken Geräten. Es macht Sinn, nur die Dateien zu laden, die Sie benötigen.

Dazu bedarf es einer zusätzlichen Einrichtung in Ihrem JavaScript. Sie benötigen eine Art von Feature-Erkennungstest, der erkennt, ob der Browser die Funktion unterstützt, die wir verwenden möchten:

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

Zuerst führen wir also einen bedingten Test durch, der prüft, ob die Funktion `browserSupportsAllFeatures()` `true` zurückgibt. Wenn dies der Fall ist, führen wir die Funktion `main()` aus, die den gesamten Code unserer App enthält. `browserSupportsAllFeatures()` sieht so aus:

```js
function browserSupportsAllFeatures() {
  return window.Promise && window.fetch;
}
```

Hier testen wir, ob das [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise)-Objekt und die [`fetch()`](/de/docs/Web/API/Window/fetch)-Funktion im Browser existieren. Wenn beides der Fall ist, gibt die Funktion `true` zurück. Wenn die Funktion `false` zurückgibt, führen wir den Code im zweiten Teil des bedingten Testes aus – dieser führt eine Funktion namens `loadScript()` aus, die die Polyfills in die Seite lädt, und führt `main()` aus, nachdem das Laden abgeschlossen ist. `loadScript()` sieht so aus:

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

Diese Funktion erstellt ein neues `<script>`-Element und setzt dessen `src`-Attribut auf den Pfad, den wir beim Aufruf als erstes Argument angegeben haben (`'polyfills.js'` in unserem Beispiel). Wenn es geladen hat, führen wir die Funktion aus, die wir als zweites Argument angegeben haben (`main()`). Wenn ein Fehler beim Laden des Skripts auftritt, rufen wir die Funktion dennoch auf, jedoch mit einem benutzerdefinierten Fehler, den wir abrufen können, um ein Problem zu debuggen, falls es auftritt.

Beachten Sie, dass `polyfills.js` im Wesentlichen die zwei Polyfills, die wir verwenden, zusammengefasst in einer Datei ist. Wir haben dies manuell gemacht, aber es gibt intelligentere Lösungen, die automatisch Bündel für Sie generieren – siehe [Browserify](https://browserify.org/) (siehe [Getting started with Browserify](https://www.sitepoint.com/getting-started-browserify/) für ein grundlegendes Tutorial). Es ist eine gute Idee, JS-Dateien in einem einzigen Dokument zu bündeln — die Reduzierung der Anzahl von HTTP-Anfragen, die Sie stellen müssen, verbessert die Leistung Ihrer Website.

Sie können diesen Code in Aktion sehen in [fetch-polyfill-only-when-needed.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/javascript/fetch-polyfill-only-when-needed.html)). Wir möchten klarstellen, dass wir diesen Code nicht erfunden haben — er wurde ursprünglich von Philip Walton geschrieben. Schauen Sie sich seinen Artikel [Loading Polyfills Only When Needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/) für den Originalcode, plus viele nützliche Erklärungen rund um das breitere Thema an.

#### JavaScript-Transpiling

Eine weitere Option, die bei Leuten, die moderne JavaScript-Funktionen jetzt verwenden möchten, immer beliebter wird, ist das Konvertieren von Code, der neuere ECMAScript-Funktionen verwendet, in eine Version, die in älteren Browsern funktioniert.

> [!NOTE]
> Dies nennt man "Transpiling" — Sie kompilieren keinen Code in eine niedrigere Ebene, um ihn auf einem Computer laufen zu lassen (wie Sie es sagen würden mit C-Code), stattdessen verändern Sie ihn zu einer Syntax, die auf einem ähnlichen Abstraktionsniveau existiert, damit er auf ähnliche Weise verwendet werden kann, aber in etwas anderen Umständen (in diesem Fall eine bestimmte Art von JavaScript in eine andere umwandeln).

Ein häufiger Transpiler ist [Babel.js](https://babeljs.io/), aber es gibt andere.

### Keine Browser-Erkennung

Historisch gesehen verwendeten Entwickler _Browser-Erkennungscode_, um zu erkennen, welchen Browser der Benutzer verwendet, und ihm geeigneten Code für diesen Browser zu liefern.

Alle Browser haben eine **User-Agent**-Zeichenkette, die angibt, was der Browser ist (Version, Name, Betriebssystem usw.). Viele Entwickler implementierten schlechten Browser-Erkennungscode und hielten ihn nicht auf dem Laufenden. Dies führte dazu, dass unterstützende Browser von der Nutzung von Websites ausgeschlossen wurden, die sie problemlos rendern könnten. Dies wurde so häufig, dass Browser anfingen zu lügen, was für ein Browser sie in ihren User-Agent-Zeichenketten waren (oder behaupteten, sie seien alle Browser), um den Erkennungscode zu umgehen. Broswer implementierten auch Einrichtungen, um Benutzern zu erlauben, zu ändern, was für eine User-Agent-Zeichenkette der Browser meldete, wenn mit JavaScript abgefragt werden. Dies machte die Browser-Erkennung noch fehleranfälliger und letztlich sinnlos.

[History of the browser user-agent string](https://webaim.org/blog/user-agent-string-history/) von Aaron Andersen bietet eine nützliche und amüsante Betrachtung der Geschichte der Browser-Erkennung. Verwenden Sie [Feature-Erkennung](#feature-erkennung) (und CSS @supports für CSS-Feature-Erkennung), um zuverlässig zu erkennen, ob eine Funktion unterstützt wird. Indem Sie dies tun, müssen Sie Ihren Code nicht ändern, wenn neue Browserversionen herauskommen.

### Umgang mit JavaScript-Präfixen

Im vorigen Artikel haben wir ziemlich ausführlich über [den Umgang mit CSS-Präfixen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) gesprochen. Nun, neue JavaScript-Implementierungen verwendeten ebenfalls Präfixe, wobei JavaScript [CamelCase](/de/docs/Glossary/camel_case) anstelle von [Kebabschreibweise](/de/docs/Glossary/kebab_case) wie CSS verwendet. Beispielsweise, wenn ein Präfix auf einem neuen jshint API-Objekt namens `Object` verwendet wurde:

- Mozilla würde `mozObject` verwenden
- Chrome/Opera/Safari würden `webkitObject` verwenden
- Microsoft würde `msObject` verwenden

Hier ist ein Beispiel, das die [Web Audio API](/de/docs/Web/API/Web_Audio_API) verwendet:

```js
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
```

Im Falle der Web Audio API waren die zentralen Einstiegspunkte zur Nutzung der API in Chrome/Opera über `webkit`-präfizierte Versionen unterstützt (sie unterstützen jetzt die nicht-präfizierten Versionen). Der einfache Weg, dieses Problem zu umgehen, besteht darin, eine neue Version der Objekte zu erzeugen, die in einigen Browsern präfixiert sind, und sie gleichzusetzen mit der nicht-präfizierten Version ODER der präfizierten Version (ODER einer anderen präfizierten Version, die berücksichtigt werden muss) — welche auch immer vom aktuell die Seite betrachtenden Browser unterstützt wird.

Dann verwenden wir dieses Objekt, um die API zu manipulieren, anstatt das Original. In diesem Fall erstellen wir einen modifizierten [AudioContext](/de/docs/Web/API/AudioContext)-Konstruktor und erstellen dann eine neue Audiokontext-Instanz, die wir für unsere Web-Audio-Programmierung verwenden.

Dieses Muster kann auf nahezu jede präfizierte JavaScript-Funktion angewendet werden. JavaScript-Bibliotheken/Polyfills verwenden ebenfalls solche Code, um Browserunterschiede, soweit möglich, vom Entwickler zu abstrahieren.

Wiederum, präfizierte Funktionen sollten nie in Produktionswebsites verwendet werden — sie sind Änderungen oder Entfernungen ohne Vorwarnung unterworfen und verursachen browserübergreifende Probleme. Wenn Sie darauf bestehen, präfizierte Funktionen zu verwenden, stellen Sie sicher, dass Sie die richtigen verwenden. Sie können nachsehen, welche Browser Präfixe für verschiedene JavaScript/API-Funktionen auf MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie unsicher sind, können Sie auch einige Tests direkt in Browsern durchführen.

Zum Beispiel, versuchen Sie, in der Entwicklertools-Konsole Ihres Browsers zu gehen und zu tippen

```js
window.AudioContext;
```

Wenn diese Funktion in Ihrem Browser unterstützt wird, wird sie vervollständigt.

## Unterstützung finden

Es gibt viele andere Probleme, denen Sie bei JavaScript begegnen werden; das Wichtigste ist wirklich zu wissen, wie Sie Antworten online finden. Konsultieren Sie den Abschnitt [Hilfe beziehen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help) des Artikels zu HTML und CSS für unsere besten Ratschläge.

## Zusammenfassung

Also, das ist JavaScript. Einfach, oder? Vielleicht nicht so einfach, aber dieser Artikel sollte Ihnen zumindest einen Einstieg und einige Ideen geben, wie Sie die JavaScript-bezogenen Probleme angehen können, denen Sie begegnen werden.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS","Learn/Tools_and_testing/Cross_browser_testing/Accessibility", "Learn/Tools_and_testing/Cross_browser_testing")}}
