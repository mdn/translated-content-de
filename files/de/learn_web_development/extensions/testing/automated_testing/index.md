---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Das manuelle Ausführen von Tests auf mehreren Browsern und Geräten, mehrmals am Tag, kann ermüdend und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel schauen wir uns an, was verfügbar ist, wie man Task-Runner verwendet und wie man die Grundlagen kommerzieller Browser-Testautomatisierungsanwendungen wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung von den <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Grundprinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die den Prozess erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht das Leben einfacher

In diesem Modul haben wir viele verschiedene Möglichkeiten beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Bemühungen im Cross-Browser-Testing in Bezug auf die zu testenden Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Hört sich nach viel Arbeit an, nicht wahr?

Wir stimmen zu — das manuelle Testen all der Dinge, über die wir in früheren Artikeln gesprochen haben, kann wirklich mühsam sein. Zum Glück gibt es Tools, die uns helfen, einen Teil dieses Schmerzes zu automatisieren. Es gibt zwei Hauptwege, wie wir die Tests, über die wir in diesem Modul gesprochen haben, automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie Code-Linting und -Minimierung, das Hinzufügen von CSS-Präfixen oder das Transpilieren von neuen JavaScript-Funktionen für maximale Cross-Browser-Reichweite auszuführen.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern hinweisen, sobald sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Fernzugriff auf deren Setup über eine Schnittstelle und ersparen Ihnen den Aufwand, Ihr eigenes Testsystem einzurichten.

Im nächsten Artikel werden wir uns ansehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel schauen wir uns an, wie man einen Task-Runner einrichtet und die grundlegende Funktionalität von kommerziellen Systemen, wie beispielsweise den oben erwähnten, verwendet.

> [!NOTE]
> Die oben genannten zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Dienst wie Sauce Labs zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Wir werden uns dies ebenfalls unten ansehen.

## Verwendung eines Task-Runners zur Automatisierung von Test-Tools

Wie oben erwähnt, können Sie gängige Aufgaben wie Linting und Code-Minimierung drastisch beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was Sie ausführen müssen, automatisch an einem bestimmten Punkt in Ihrem Build-Prozess auszuführen. Dies könnte beispielsweise jedes Mal passieren, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt zeigen wir Ihnen, wie Sie mit Node und Gulp eine Einsteigerfreundliche Methode zur Automatisierung von Aufgaben einrichten.

### Einrichtung von Node und npm

Die meisten Tools basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit dessen Paketmanager [`npm`](https://www.npmjs.com/) installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Versionmanager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie diese auf ihre neuesten Versionen aktualisieren. Dies kann durch die Verwendung des Node-Versionmanagers zur Installation der neuesten LTS-Versionen erfolgen (verweisen Sie erneut auf die verlinkten Anweisungen oben).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach umzusetzen.

Um ein Testverzeichnis ohne Angst vor Beschädigungen zu erstellen, gehen Sie wie folgt vor:

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrer Dateimanager-Benutzeroberfläche oder, in der Befehlszeile, indem Sie zu dem gewünschten Ort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie lediglich in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die Informationen zu ermitteln, die zur Einrichtung des Projekts erforderlich sind; Sie können vorerst die Standardeinstellungen wählen.
4. Sobald alle Fragen gestellt wurden, wird es fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm wird eine `package.json` Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber für den Moment wird sie so aussehen:

```json
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test for npm projects",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

Damit sind Sie bereit, weiterzumachen.

### Gulp-Automatisierung einrichten

Schauen wir uns das Einrichten von Gulp und dessen Verwendung zur Automatisierung von Test-Tools an.

1. Erstellen Sie zu Beginn ein Test-npm-Projekt anhand der im vorherigen Abschnitt am Ende beschriebenen Methode.
   Aktualisieren Sie außerdem die `package.json` Datei mit der Zeile: `"type": "module"`, sodass sie in etwa so aussieht:

   ```json
   {
     "name": "node-test",
     "version": "1.0.0",
     "description": "Test for npm projects",
     "main": "index.js",
     "scripts": {
       "test": "test"
     },
     "author": "Chris Mills",
     "license": "MIT",
     "type": "module"
   }
   ```

2. Als Nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System darauf zu testen — kopieren Sie unsere Beispiel-Dateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einen Unterordner namens `src` in Ihrem Projektordner.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, aber beachten Sie, dass solche Tools nicht gut mit in der HTML-Datei eingebettetem JS/CSS arbeiten — Sie benötigen separate Dateien.
3. Installieren Sie gulp global (d.h. es wird in allen Projekten verfügbar sein) mit folgendem Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis namens `gulpfile.mjs`. Diese Datei wird all unsere Aufgaben ausführen. Fügen Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts weiter tut, als eine Nachricht im Terminal auszugeben — das ist nützlich, um zu wissen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung in etwas Nützlicheres ändern.

   Jede gulp-Aufgabe wird im gleichen Grundformat exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter entgegen — einen Rückruf aufzurufen, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von gulp mit dem folgenden Befehl ausführen — probieren Sie das jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen von echten Aufgaben zu Gulp

Jetzt sind wir bereit, unserem Gulp-File mehr Aufgaben hinzuzufügen. Jede Ergänzung kann erfordern, dass Sie die Datei `gulpfile.mjs` wie folgt ändern:

- Wenn wir Sie bitten, `import`-Anweisungen hinzuzufügen, fügen Sie diese unterhalb der bestehenden `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie diese am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standardexport zu ändern, ändern Sie die `export default`-Anweisung auf die Weise, die wir vorgeben.

So wird Ihre `gulpfile.mjs`-Datei wachsen:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun möchten. Ein vernünftiger Satz grundlegender Funktionen, die wir in unserem Projekt ausführen können, ist wie folgt:

- html-tidy, css-lint und js-hint, um gängige HTML/CSS/JS-Fehler zu überprüfen und zu berichtigen (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Anbieterpräfixe hinzuzufügen, wo dies erforderlich ist (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um alle neuen JavaScript-Syntaxfunktionen in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anleitungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der Datei `gulpfile.mjs` einbinden, dann Ihren Test am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit er über das Gulp-Kommando verfügbar ist.

#### html-tidy

1. Verwenden Sie den folgenden Befehl zur Installation:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json` Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür unter dem `devDependencies`-Eigenschaft.

2. Fügen Sie die folgende Abhängigkeit zu `gulpfile.mjs` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.mjs` hinzu:

   ```js
   export function html() {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
   }
   ```

4. Ändern Sie den Standardexport zu:

   ```js
   export default html;
   ```

Hier greifen wir mit `gulp.src()` auf unsere Entwicklungs-`index.html`-Datei zu, wodurch wir eine Quelldatei erfassen können, um etwas damit zu machen.

Als Nächstes verwenden wir die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzugeben, um etwas anderes damit zu machen. Wir können so viele dieser Verbindungen hintereinander verknüpfen, wie wir wollen. Wir führen zuerst `htmltidy()` auf die Quelle aus, welches den Code durchgeht und Fehler in unserer Datei korrigiert. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Eingangsversion der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies entfernt, sobald die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Verwenden Sie die folgenden Befehle zur Installation:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.mjs` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.mjs` hinzu:

   ```js
   export function css() {
     return gulp
       .src("src/style.css")
       .pipe(csslint())
       .pipe(csslint.formatter("compact"))
       .pipe(
         autoprefixer({
           cascade: false,
         }),
       )
       .pipe(gulp.dest("build"));
   }
   ```

4. Fügen Sie die folgende Eigenschaft zu `package.json` hinzu:

   ```json
   {
     "browserslist": ["last 5 versions"]
   }
   ```

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier greifen wir auf unsere `style.css`-Datei zu, führen `csslint` darauf aus (welches eine Liste mit allen Fehlern in Ihrem CSS im Terminal ausgibt), und führen es dann durch `autoprefixer`, um alle erforderlichen Präfixe hinzuzufügen, um neue CSS-Funktionen in älteren Browsern auszuführen. Am Ende der Pipe-Kette geben wir unser modifiziertes präfixiertes CSS in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn `csslint` keine Fehler findet — versuchen Sie, eine geschweifte Klammer in Ihrer CSS-Datei zu entfernen und `gulp` erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie mit den folgenden Befehlen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.mjs` hinzu:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.mjs` hinzu:

   ```js
   export function js() {
     return gulp
       .src("src/main.js")
       .pipe(jshint())
       .pipe(jshint.reporter("default"))
       .pipe(
         babel({
           presets: ["@babel/env"],
         }),
       )
       .pipe(gulp.dest("build"));
   }
   ```

4. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir übergeben die Datei dann an babel, das sie in alte Syntax umwandelt und das Ergebnis im `build`-Verzeichnis ausgibt. Unser ursprünglicher Code beinhaltete eine [fette Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Funktionssyntax umgewandelt hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Linien die Startzeiten oder das Ende von Aufgaben, den Aufgabennamen und die Dauer von 'Beendeten' Aufgaben anzeigen.](gulp-output.png)

Sie können dann versuchen, die von Ihren automatisierten Aufgaben ausgegebenen Dateien, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML-/CSS-/JavaScript-Codeabschnitte auszukommentieren und `gulp` dann erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu beobachten und Tests auszuführen, wann immer Sie eine Datei speichern. Zum Beispiel versuchen Sie, das Folgende am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihrem Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn eine beliebige Datei dieses Typs gespeichert wird. Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel würde `gulp.src('src/*.css')` all Ihre CSS-Dateien erfassen und dann Aufgaben auf diese ausführen.

Es gibt viel mehr, das Sie mit Gulp tun können. Im [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) gibt es buchstäblich Tausende von Plugins, die durchstöbert werden können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir wollen keinesfalls sagen, dass Gulp die beste Lösung darstellt, aber es funktioniert für uns und ist für Anfänger ziemlich zugänglich. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es sich auf Aufgaben stützt, die in einer Konfigurationsdatei angegeben sind, anstatt auf geschriebene JavaScript. Siehe [Erste Schritte mit Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten aus Ihrer `package.json`-Datei ausführen, ohne dass Sie ein zusätzliches Task-Runner-System installieren müssen. Dies funktioniert nach der Prämisse, dass Dinge wie Gulp-Plugins im Grunde genommen Wrapper um Befehlszeilentools sind. Also, wenn Sie herausfinden, wie man die Tools mit der Befehlszeile ausführt, können Sie sie dann mit npm-Skripten ausführen. Es ist ein wenig schwieriger zu handhaben, kann aber lohnend für diejenigen sein, die stark mit ihren Befehlszeilenfähigkeiten sind. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Menge weiterer Informationen.

## Verwendung kommerzieller Testdienste zum Beschleunigen von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Wenn Sie diese Arten von Diensten verwenden, geben Sie eine URL der Seite, die Sie testen möchten, zusammen mit Informationen an, wie etwa welche Browser Sie testen möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Logdateien, Text usw. zurück. Dies ist sehr nützlich und wesentlich bequemer als alle OS-/Browser-Kombinationen selbst einrichten zu müssen.

Sie können dann einen Gang zulegen, indem Sie eine API verwenden, um die Funktionalität programmgesteuert zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern kombiniert werden können, wie z.B. Ihren eigenen lokalen Selenium-Umgebungen und anderen, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel werden wir uns auf BrowserStack, Sauce Labs und TestingBot konzentrieren. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute, die einfach für Anfänger einzurichten sind.

### BrowserStack

#### BrowserStack Erste Schritte

Um loszulegen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch nach der Verifizierung Ihrer E-Mail-Adresse geschehen.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zum Bereich für manuelle Live-Tests zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, die Plattform, das Gerät und den Browser auszuwählen, die Sie testen möchten.
Für Desktop-Tests wählen Sie direkt das Betriebssystem und den Browser aus.
Für mobile Geräte wählen Sie das mobile Betriebssystem, das Gerät und anschließend einen Browser für Ihre Gerätekombination aus.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Symbole lädt Ihre Auswahl an Plattform, Gerät und Browser — wählen Sie jetzt eine und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten ausführen (z. B. Pinch/Zoom, zwei Finger zum Scrollen) auf den Touchpads von unterstützenden Geräten wie MacBooks.

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen beinhalten für:

- Anzeige von Informationen zum aktuellen Browser
- Wechsel zu anderen Browsern
- Testen von localhost-URLs
- Einstellen des Zoomlevels und Umschalten der Orientierung
- Speichern und Laden von Lesezeichen
- Erfassen/Annotieren von Screenshots und Erstellung von Fehlerberichten
- Zugriff auf Browser-DevTools
- Ändern des angegebenen Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleseprogramme

![Testmenü](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der [BrowserStack Live](https://www.browserstack.com/docs/live) Dokumentation.

#### Fortgeschritten: Die BrowserStack API

BrowserStack verfügt auch über eine [RESTful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), mit der Sie programmgesteuert Details zu Ihrem Konto, Sitzungen, Builds usw. abrufen können.

Werfen wir einen kurzen Blick darauf, wie wir mit Node.js auf die API zugreifen würden.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektstamm namens `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

   ```js
   const axios = require("axios");

   const bsUser = "BROWSERSTACK_USERNAME";
   const bsKey = "BROWSERSTACK_ACCESS_KEY";
   const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

   function getPlanDetails() {
     axios.get(`${baseUrl}plan.json`).then((response) => {
       console.log(response.data);
     });
     /* Response:
       {
         automate_plan: <string>,
         terminal_access: <string>.
         parallel_sessions_running: <int>,
         team_parallel_sessions_max_allowed: <int>,
         parallel_sessions_max_allowed: <int>,
         queued_sessions: <int>,
         queued_sessions_max_allowed: <int>
       }
       */
   }

   getPlanDetails();
   ```

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugangsschlüssel mit Ihren tatsächlichen Werten. Diese können aus Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentication & Security_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code zur Verarbeitung von HTTP-Anfragen verwenden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Plandarstellungsdetails enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere fertige Funktionen bereitgestellt, die Sie nützlich finden könnten, wenn Sie mit der BrowserStack restful API arbeiten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

```js
function getBuilds() {
  axios.get(`${baseUrl}builds.json`).then((response) => {
    console.log(response.data);
  });

  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        hashed_id: <string>,
        duration: <int>,
        status: <string>,
        build_tag: <string>,
        public_url: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        hashed_id: <string>,
        duration: <int>,
        status: <string>,
        build_tag: <string>,
        public_url: <string>
      }
    },
    // …
  ]
  */
}
```

Diese Funktion gibt Details zu den spezifischen Sitzungen eines bestimmten Builds zurück:

```js
function getSessionsInBuild(build) {
  const buildId = build.automation_build.hashed_id;
  axios.get(`${baseUrl}builds/${buildId}/sessions.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
  [
    {
      automation_session: {
        name: <string>,
        duration: <int>,
        os: <string>,
        os_version: <string>,
        browser_version: <string>,
        browser: <string>,
        device: <string>,
        status: <string>,
        hashed_id: <string>,
        reason: <string>,
        build_name: <string>,
        project_name: <string>,
        logs: <string>,
        browser_url: <string>,
        public_url: <string>,
        appium_logs_url: <string>,
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>,
        selenium_logs_url: <string>
      }
    },
    {
      automation_session: {
        // …
      }
    },
    // …
  ]
  */
}
```

Die folgende Funktion gibt die Details für eine bestimmte Sitzung zurück:

```js
function getSessionDetails(session) {
  const sessionId = session.automation_session.hashed_id;
  axios.get(`${baseUrl}sessions/${sessionId}.json`).then((response) => {
    console.log(response.data);
  });
  /* Response:
  {
    automation_session: {
      name: <string>,
      duration: <int>,
      os: <string>,
      os_version: <string>,
      browser_version: <string>,
      browser: <string>,
      device: <string>,
      status: <string>,
      hashed_id: <string>,
      reason: <string>,
      build_name: <string>,
      project_name: <string>,
      logs: <string>,
      browser_url: <string>,
      public_url: <string>,
      appium_logs_url: <string>,
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>,
      selenium_logs_url: <string>
    }
  }
  */
}
```

#### Fortgeschritten: Automatisierte Tests

Wir werden das [Ausführen von automatisierten BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Sauce Labs Erste Schritte

Lassen Sie uns mit einem Sauce Labs Testkonto beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch nach der Verifizierung Ihrer E-Mail-Adresse geschehen.

#### Die Grundlagen: Manuelles Testen

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen.
Nachdem Sie sich angemeldet haben, folgen Sie dem 'Erste Schritte'-Leitfaden oben links auf der Seite:

1. Bei "Führen Sie Ihren ersten Test aus", klicken Sie auf _Desktop Browser_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite, die Sie testen möchten, ein (wie zum Beispiel diese Seite) und wählen Sie dann durch Verwenden der verschiedenen Schaltflächen und Listen die Browser-/OS-Kombination, die Sie testen möchten.
   Es gibt eine Menge zur Auswahl, wie Sie sehen werden!
   ![Auswahl Sauce manuelle Sitzung](sauce-manual-session.png)
3. Wenn Sie mit dem Testen beginnen, wird ein Ladebildschirm erscheinen und eine Umgebung wird eingerichtet, die die von Ihnen gewählte Gerät-/Browser-Kombination ausführt.
   Sie können dann beginnen, die Website aus der Ferne im gewählten Browser zu testen.

An dieser Stelle können Sie einiges machen, etwa eine Test-URL teilen, damit jemand anderes den Test aus der Ferne beobachten kann, Text/Notizen in eine entfernte Zwischenablage kopieren, einen Screenshot machen, im Vollbildmodus testen und mehr.

Sobald Sie die Sitzung beenden, kehren Sie zu der _Live_-Registerkarte zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen.
Ein Klick auf einen dieser Einträge zeigt zusätzliche Daten für die Sitzung an.
Hier können Sie alle Screenshots, die Sie gemacht haben, herunterladen, ein Video der Sitzung ansehen, Datenprotokolle einsehen und mehr.
Das ist bereits sehr nützlich und viel bequemer, als mehrere Emulatoren und virtuelle Maschinen selbst einrichten zu müssen.

Für weitere Informationen siehe die [Sauce Labs Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs bietet eine [RESTful API](https://docs.saucelabs.com/dev/api/), mit der Sie programmgesteuert Details zu Ihrem Konto und bereits vorhandenen Tests abrufen und Tests mit weiteren Details annotieren können, wie zum Beispiel ihrem über Manualtest nicht aufzeichnungsfähigen Erfolgs-/Fehlerstatus. Beispielsweise könnten Sie einen Ihrer eigenen Selenium-Tests auf Sauce Labs ferngesteuert ausführen lassen, um eine bestimmte Browser-/OS-Kombination zu testen, und dann die Testergebnisse zurück an Sauce Labs übermitteln.

Es stehen mehrere Clients zur Verfügung, die es Ihnen ermöglichen, Anrufe an die API in Ihrer bevorzugten Umgebung zu tätigen, sei es PHP, Java, Node.js usw.

Werfen wir einen kurzen Blick darauf, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie in [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit folgendem Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm namens `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

   ```js
   const SauceLabs = require("saucelabs").default;

   (async () => {
     const myAccount = new SauceLabs({
       username: "your-sauce-username",
       password: "your-sauce-api-key",
     });

     // Get full WebDriver URL from the client depending on region:
     console.log(myAccount.webdriverEndpoint);

     // Get job details of last run job
     const jobs = await myAccount.listJobs("your-sauce-username", {
       limit: 1,
       full: true,
     });

     console.log(jobs);
   })();
   ```

4. Füllen Sie Ihren Sauce Labs Benutzernamen und API-Schlüssel in den angegebenen Stellen aus. Diese können auf Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings) Seite abgerufen werden. Füllen Sie diese nun aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei so aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Durchführen von automatisierten Sauce Lab Tests im nächsten Artikel behandeln.

### TestingBot

#### TestingBot Erste Schritte

Lassen Sie uns mit einem TestingBot Testkonto beginnen.

1. Erstellen Sie ein [TestingBot Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch nach der Verifizierung Ihrer E-Mail-Adresse geschehen.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen, die Sie wählen können. Achten Sie jetzt darauf, dass Sie auf dem _Live Web Testing_-Tab sind.

1. Geben Sie die URL der Seite, die Sie testen möchten, ein.
2. Wählen Sie die Browser-/OS-Kombination, die Sie testen möchten, durch Auswählen der Kombination im Raster.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, wird ein Ladebildschirm erscheinen, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie mit dem Ferntesten der Website im gewählten Browser beginnen.
5. Von hier aus können Sie das Layout so sehen, wie es im getesteten Browser aussehen würde, mit der Maus navigieren und Schaltflächen ausprobieren usw. Das Seitenmenü ermöglicht Ihnen:
   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur _Live Web Testing_-Seite zurück, wo Sie für jede der zuvor gestarteten manuellen Sitzungen einen Eintrag sehen. Ein Klick auf einen dieser Einträge zeigt mehr Daten zur Sitzung an. Hier können Sie alle Screenshots, die Sie erstellt haben, herunterladen, ein Testvideo ansehen und Protokolle zur Sitzung einsehen.

#### Fortgeschritten: Die TestingBot API

TestingBot bietet eine [RESTful API](https://testingbot.com/support/api) an, mit der Sie Programm-details Ihres Kontos und bestehender Tests abrufen und Tests mit weiteren Details wie ihrem über Manualtest nicht aufzeichnungsfähigen Erfolgs-/Fehlerstatus annotieren können.

TestingBot bietet mehrere API-Clients, die Sie für Interaktionen mit der API verwenden können, einschließlich Clients für Node.js, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie Sie mit dem Node.js-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagieren können.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie in [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm namens `tb.js`. Geben Sie ihr den folgenden Inhalt:

   ```js
   const TestingBot = require("testingbot-api");

   let tb = new TestingBot({
     api_key: "your-tb-key",
     api_secret: "your-tb-secret",
   });

   tb.getTests((err, tests) => {
     console.log(tests);
   });
   ```

4. Sie müssen Ihren TestingBot-Schlüssel und das Secret an den angegebenen Stellen ausfüllen. Sie finden diese im [TestingBot Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Durchführen von automatisierten TestingBot Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganz schöne Reise, aber ich bin mir sicher, Sie fangen an, die Vorteile von Automatisierungstools zu erkennen, die einen Teil der Arbeitslast beim Testen übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten und wie dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert werden kann.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
