---
title: Einführung in automatisiertes Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Manuelle Tests auf mehreren Browsern und Geräten, mehrmals täglich, können mühsam und zeitaufwendig werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet und wie man die grundlegenden Funktionen kommerzieller Browser-Test-Automatisierungsanwendungen wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>;
        eine Vorstellung von den <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">grundlegenden Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen umfasst, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte, die die Dinge erleichtern, nutzen können.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht die Dinge einfacher

In diesem Modul haben wir eine Vielzahl von Möglichkeiten beschrieben, mit denen Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testbemühungen hinsichtlich der zu testenden Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu – das manuelle Testen all der Dinge, die wir in früheren Artikeln betrachtet haben, kann wirklich anstrengend sein. Zum Glück gibt es Werkzeuge, die uns helfen, einen Teil dieses Schmerzes wegzuautomatisieren. Es gibt zwei Hauptmethoden, um die Tests, über die wir in diesem Modul gesprochen haben, zu automatisieren:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Überprüfen und Minimieren von Code auszuführen, CSS-Präfixe hinzuzufügen oder aufkommende JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu transpilieren und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, um Sie auf Fehler in Browsern aufmerksam zu machen, sobald sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Remote-Zugriff auf deren Einrichtung über eine Schnittstelle, wodurch Ihnen die Einrichtung Ihres eigenen Testsystems erspart bleibt.

Im nächsten Artikel erfahren Sie, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel werden wir uns ansehen, wie man einen Task-Runner einrichtet und die grundlegenden Funktionen kommerzieller Systeme wie der oben genannten nutzt.

> [!NOTE]
> Die obigen zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um auf einen Service wie Sauce Labs oder LambdaTest über eine API zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Wir werden dies weiter unten betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Test-Tools

Wie bereits erwähnt, können Sie gängige Aufgaben wie das Überprüfen und Minimieren von Code drastisch beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was Sie ausführen müssen, zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess automatisch auszuführen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt schauen wir uns an, wie man das Task-Running mit Node und Gulp automatisiert, eine anfängerfreundliche Option.

### Einrichtung von Node und npm

Die meisten Tools basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Gegenstück, dem Paketmanager [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann mittels des Node-Version-Managers durchgeführt werden, um die neuesten LTS-Versionen zu installieren (verweisen Sie erneut auf die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Zum Beispiel erstellen wir zuerst ein Testverzeichnis, um ohne Angst, etwas zu zerstören, spielen zu können.

1. Erstellen Sie ein neues Verzeichnis irgendwo sinnvoll mit Ihrer Dateimanager-Oberfläche oder in einer Befehlszeile, indem Sie zu dem gewünschten Speicherort navigieren und folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie einfach in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die erforderlichen Informationen zur Einrichtung des Projekts zu ermitteln; Sie können vorerst einfach die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return und npm wird eine `package.json` Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst wird sie in etwa so aussehen:

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

Damit sind Sie bereit, fortzufahren.

### Einrichtung der Gulp-Automatisierung

Schauen wir uns die Einrichtung von Gulp an und wie wir es nutzen können, um einige Test-Tools zu automatisieren.

1. Zunächst erstellen Sie ein Test-npm-Projekt, indem Sie das Verfahren am Ende des vorherigen Abschnitts verwenden.
   Aktualisieren Sie zudem die Datei `package.json` mit der Zeile: `"type": "module"`, sodass sie in etwa so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen — erstellen Sie Kopien unserer Beispiel [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) Dateien in einem Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können es auch mit eigenen Test-Inhalten versuchen, aber bedenken Sie, dass solche Tools nicht mit internem JS/CSS arbeiten — Sie benötigen externe Dateien.
3. Installieren Sie zuerst gulp global (d.h. es wird in allen Projekten verfügbar sein) mit folgendem Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Root-Verzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführen wird. Fügen Sie in diese Datei das folgende ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies benötigt das `gulp` Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts anderes tut, als eine Nachricht im Terminal auszugeben — das ist nützlich, um uns wissen zu lassen, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im gleichen Grundformat exportiert — `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit folgendem Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Einige echte Aufgaben zu Gulp hinzufügen

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun möchten. Ein vernünftiger Funktionsumfang für unser Projekt könnte sein:

- html-tidy, css-lint und js-hint, um gängige HTML/CSS/JS-Fehler zu überprüfen und zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und Anbieter-Präfixe nur dort hinzuzufügen, wo nötig (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntaxfeatures in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der Datei `gulpfile.js` einfordern, dann Ihre Test(s) am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit sie über die Gulp-Befehlszeile verfügbar ist.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die Datei `package.json` Ihres Projekts schauen, sehen Sie einen Eintrag dafür in der Eigenschaft `devDependencies`.

2. Fügen Sie die folgende Abhängigkeit zu `gulpfile.js` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test an das Ende von `gulpfile.js` hinzu:

   ```js
   export function html() {
     return gulp
       .src("src/index.html")
       .pipe(htmltidy())
       .pipe(gulp.dest("build"));
   }
   ```

4. Ändern Sie den Standardexport in:

   ```js
   export default html;
   ```

Hier greifen wir auf unsere Entwicklungsdatei `index.html` mit `gulp.src()` zu, was uns ermöglicht, eine Quelldatei zu greifen, um etwas damit zu tun.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzuleiten, um etwas anderes damit zu tun. Wir können so viele davon miteinander verketten, wie wir wollen. Wir führen zuerst `htmltidy()` auf die Quelle aus, welche die Fehler in unserer Datei behebt. Die zweite `pipe()` Funktion schreibt die Ausgabe-HTML-Datei in das Verzeichnis `build`.

In der Eingabeversion der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}} Element eingefügt haben; htmltidy hat dies entfernt, bis die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.js` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.js` hinzu:

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

4. Fügen Sie folgende Eigenschaft zu `package.json` hinzu:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css);
   ```

Hier greifen wir auf unsere Datei `style.css` zu, führen csslint darauf aus (das eine Liste der Fehler in Ihrem CSS im Terminal ausgibt) und lassen es dann durch autoprefixer laufen, um alle notwendigen Präfixe hinzuzufügen, um neue CSS-Features in älteren Browsern ausführen zu können. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS in das Verzeichnis `build` aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet – versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie es mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.js` hinzu:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.js` hinzu:

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

4. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier greifen wir auf unsere `main.js` Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus. Wir übergeben die Datei dann an babel, das sie in alte Syntax umwandelt und das Ergebnis im Verzeichnis `build` ausgibt. Unser ursprünglicher Code enthielt eine [fette Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Stilfunktion geändert hat.

#### Weitere Ideen

Wenn dies alles eingerichtet ist, können Sie den `gulp` Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Zeilen die Start- oder Endzeiten von Aufgaben, den Aufgabenname und die Dauer fertiger Aufgaben zeigen.](gulp-output.png)

Sie können die von Ihren automatisierten Aufgaben erstellten Dateien ausprobieren, indem Sie sie im Verzeichnis `build` betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, prüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()` Funktion, mit der Sie Ihre Dateien überwachen und Tests ausführen können, wann immer Sie eine Datei speichern. Fügen Sie zum Beispiel das Folgende am Ende Ihrer `gulpfile.js` hinzu:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Geben Sie nun den Befehl `gulp watch` in Ihr Terminal ein. Gulp wird nun Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn Dateien dieser Typen gespeichert werden". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, z. B. `gulp.src('src/*.css')`, um alle Ihre CSS-Dateien zu greifen und dann piped Aufgaben darauf auszuführen.

Mit Gulp können Sie viel mehr machen. Das [Gulp Plugin Verzeichnis](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, die Sie durchsuchen können.

### Weitere Task-Runner

Es gibt viele weitere Task-Runner. Wir wollen sicherlich nicht sagen, dass Gulp die beste Lösung ist, aber es funktioniert für uns und es ist für Anfänger ziemlich zugänglich. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es sich auf Aufgaben stützt, die in einer Konfigurationsdatei angegeben sind, anstatt geschriebene JavaScript zu verwenden. Siehe [Getting started with Grunt for more details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten ausführen, die sich in Ihrer Datei `package.json` befinden, ohne dass Sie ein zusätzliches Task-Runner-System installieren müssen. Dies funktioniert nach dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie Sie die Tools mit der Kommandozeile ausführen können, können Sie sie auch mit npm-Skripten ausführen. Es ist etwas schwieriger zu arbeiten, aber lohnend für diejenigen, die mit ihren Kommandozeilenfähigkeiten stark sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen zusätzlichen Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung des Browser-Testens

Nun möchten wir uns kommerzielle Drittanbieter-Browser-Testdienste und deren Funktionalitäten ansehen.

Wenn Sie solche Dienste nutzen, geben Sie eine URL der zu testenden Seite zusammen mit Informationen wie den zu testenden Browsern an. Die App konfiguriert dann eine neue VM mit dem von Ihnen spezifizierten Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und viel bequemer, als alle OS/Browser-Kombinationen selbst einrichten zu müssen.

Sie können dann einen Gang höher schalten. Verwenden Sie eine API, um programmgesteuert auf Funktionen zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern, wie Ihren eigenen lokalen Selenium-Umgebungen und anderen, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt weitere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir wollen nicht behaupten, dass dies unbedingt die besten verfügbaren Werkzeuge sind, aber sie sind gut und relativ einfach für Anfänger einzurichten.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um loszulegen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zum manuellen Live-Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard erlaubt Ihnen auszuwählen, auf welchem Gerät und Browser Sie testen möchten — Plattformen auf der linken Seite, Geräte auf der rechten. Wählen Sie ein Gerät aus, um die Browser-Auswahl auf diesem Gerät anzuzeigen.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Icons lädt Ihre Auswahl an Plattform, Gerät und Browser — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten verwenden (z. B. Kneifen/Zoomen, zwei Finger zum Scrollen) auf Touchpads unterstützender Geräte wie MacBooks. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen außerdem ein Menü, mit dem Sie die Sitzung steuern können.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nachdem, welcher Browser geladen ist, und können Steuerungen beinhalten für:

- Anzeige von Informationen über den aktuellen Browser
- Umschalten zu anderen Browsern
- Testen von localhost-URLs
- Einstellen der Zoomstufe und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Aufnahme/Annotation von Screenshots und Erstellen von Fehlerberichten
- Zugriff auf DevTools des Browsers
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleseprogramme

#### Fortgeschritten: Die BrowserStack-API

BrowserStack verfügt auch über eine [RESTful-API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontoplans, Ihrer Sitzungen, Ihrer Builds usw. abzurufen.

Lassen Sie uns kurz ansehen, wie wir mit Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektstammverzeichnis namens `call_bstack.js` und geben Sie ihr folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für Benutzername und Zugangsschlüssel von BrowserStack durch Ihre tatsächlichen Werte. Diese können Sie in Ihren [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentication & Security_ abrufen.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten sehen, dass ein Objekt mit Details Ihres BrowserStack-Plans im Terminal angezeigt wird.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die Sie nützlich finden könnten, wenn Sie mit der BrowserStack-RESTful-API arbeiten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [Details zu automatisierten BrowserStack-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#browserstack)):

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

Diese Funktion gibt Details zu den spezifischen Sitzungen für einen bestimmten Build zurück:

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

Wir werden das Ausführen automatisierter BrowserStack-Tests im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce-Labs-Test beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Achten Sie zunächst darauf, dass Sie auf der Registerkarte _Manuelle Tests_ sind.

1. Klicken Sie auf _Eine neue manuelle Sitzung starten_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html> als Beispiel), und wählen Sie dann eine Browser-/OS-Kombination aus, die Sie testen möchten, indem Sie die verschiedenen Tasten und Listen verwenden. Es gibt viele Auswahlmöglichkeiten, wie Sie sehen werden!![Auswahl von Sauce Labs manueller Sitzung](sauce-manual-session.png)
3. Wenn Sie auf Session starten klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination aufbaut.
4. Sobald das Laden abgeschlossen ist, können Sie das Testen der Website im ausgewählten Browser starten.![Sauce-Test läuft](sauce-test-running.png)
5. Von hier aus können Sie das Layout so sehen, wie es im Browser aussehen würde, den Sie testen. Sie können die Maus bewegen und versuchen, auf Buttons zu klicken usw. Das obere Menü ermöglicht Ihnen:

   - Die Sitzung zu beenden
   - Jemand anderem eine URL zu geben, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren.
   - Einen Screenshot zu machen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zur Registerkarte Manuelle Tests zurück, wo Sie einen Eintrag für jede vorherige manuelle Sitzung sehen, die Sie gestartet haben. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten zur Sitzung angezeigt. Hier können Sie alle Screenshots herunterladen, die Sie gemacht haben, ein Video der Sitzung ansehen, Protokolldaten anzeigen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Fortgeschritten: Die Sauce Labs-API

Sauce Labs bietet eine [RESTful-API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details zu ergänzen, wie z.B. ihrem Bestehen/Nichtbestehen-Status, der allein durch manuelles Testen nicht aufzeichnet werden kann. Beispielsweise könnten Sie einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser-/OS-Kombination zu testen und die Testergebnisse dann an Sauce Labs zurückzugeben.

Es gibt mehrere Clients, die es Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js, etc.

Lassen Sie uns kurz ansehen, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstammverzeichnis namens `call_sauce.js`. Geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und Ihren API-Schlüssel an den angegebenen Stellen einfügen. Diese können Sie von Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings) Seite abrufen. Füllen Sie diese nun aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei so aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce Labs-Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einem TestingBot-Test beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie auswählen können. Achten Sie darauf, dass Sie auf der Registerkarte _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/OS-Kombination aus, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie _Browser starten_ anklicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination aufbaut.
4. Sobald das Laden abgeschlossen ist, können Sie das Testen der Website im ausgewählten Browser starten.
5. Von hier aus können Sie das Layout so sehen, wie es im Browser aussehen würde, den Sie testen. Sie können die Maus bewegen und versuchen, auf Buttons zu klicken usw. Das Seitenmenü ermöglicht Ihnen:

   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede vorherige manuelle Sitzung sehen, die Sie gestartet haben. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten zur Sitzung angezeigt. Hier können Sie alle Screenshots herunterladen, die Sie gemacht haben, ein Video des Tests ansehen und Protokolle für die Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot-API

TestingBot verfügt über eine [RESTful-API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos und existierender Tests abzurufen und Tests mit weiteren Details zu ergänzen, wie z.B. ihrem Bestehen/Nichtbestehen-Status, der allein durch manuelles Testen nicht aufzeichnet werden kann.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren können.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `tb-test`.
2. Installieren Sie den Node TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstammverzeichnis namens `tb.js`. Geben Sie ihr folgenden Inhalt:

   ```js
   const TestingBot = require("testingbot-api");

   let tb = new TestingBot({
     api_key: "your-tb-key",
     api_secret: "your-tb-secret",
   });

   tb.getTests(function (err, tests) {
     console.log(tests);
   });
   ```

4. Sie müssen Ihren TestingBot Key und Ihr Secret an den angegebenen Stellen einfügen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganz schöne Reise, aber ich bin sicher, Sie können beginnen, die Vorteile der Verwendung von Automatisierungstools zu erkennen, um einen Teil der schweren Last bei Tests zu übernehmen.

Im nächsten Artikel werden wir uns damit beschäftigen, wie man ein eigenes lokales Automatisierungssystem mit Selenium einrichtet und wie man dieses mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
