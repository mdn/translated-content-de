---
title: Einführung in automatisierte Tests
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 2ba42e9a17d88924844a5ffb60d232ca3cf23372
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Das manuelle Ausführen von Tests in mehreren Browsern und auf verschiedenen Geräten mehrmals täglich kann mühsam und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel schauen wir uns an, was verfügbar ist, wie man Aufgabenplaner verwendet und wie man die Grundfunktionen von kommerziellen Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung der grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es das Leben erleichtern kann und wie einige der kommerziellen Produkte genutzt werden können, die dies einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht das Leben einfacher

In diesem Modul haben wir viele verschiedene Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Tests in Bezug auf zu testende Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Das klingt nach viel Arbeit, oder?

Wir stimmen zu – das manuelle Testen aller Dinge, die wir in vorherigen Artikeln behandelt haben, kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns helfen, diesen Schmerz teilweise zu automatisieren. Es gibt zwei Hauptmethoden, mit denen wir die Tests, über die wir in diesem Modul gesprochen haben, automatisieren können:

1. Verwenden Sie einen Aufgabenplaner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Linting und Minifying von Code auszuführen, CSS-Präfixe hinzuzufügen oder neue JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu transpilen, und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests in installierten Browsern auszuführen und Ergebnisse zu erhalten, die Sie auf Fehler in den Browsern hinweisen, sobald diese auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Fernzugriff auf ihre Einrichtung über eine einfache Schnittstelle, wodurch Sie sich den Aufwand sparen, ein eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel schauen wir uns an, wie man einen Aufgabenplaner einrichtet und die Grundfunktionen von kommerziellen Systemen wie den oben genannten nutzt.

> [!NOTE]
> Die obigen zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Aufgabenplaner einzurichten, um über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zu erhalten. Wir werden das unten ebenfalls betrachten.

## Verwendung eines Aufgabenplaners zur Automatisierung von Testtools

Wie oben erwähnt, können Sie mit einem Aufgabenplaner alltägliche Aufgaben wie Linting und Minifying von Code erheblich beschleunigen, indem Sie alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt im Build-Prozess ausführen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt schauen wir uns an, wie man mit Node und Gulp eine automatisierte Aufgabe einrichtet – eine anfängerfreundliche Option.

### Node und npm einrichten

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Paketmanager [`npm`](https://www.npmjs.com/) installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node).
2. Stellen Sie sicher, dass Ihre Installation erfolgreich war, bevor Sie fortfahren: [Testen Sie Ihre Node.js und npm Installation](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation).
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies kann durchgeführt werden, indem Sie den Node-Version-Manager verwenden, um die neuesten LTS-Versionen zu installieren (siehe erneut die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu tun.

Lassen Sie uns zum Beispiel zuerst ein Testverzeichnis erstellen, um es sicher auszuprobieren, ohne Angst zu haben, etwas zu zerstören.

1. Erstellen Sie ein neues Verzeichnis an einem geeigneten Ort mit Ihrem Dateimanager oder, auf der Befehlszeile, indem Sie zu dem gewünschten Speicherort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die erforderlichen Informationen zur Einrichtung des Projekts zu erhalten; Sie können vorerst die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst sieht sie ungefähr so aus:

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

Damit sind Sie bereit, weiterzugehen.

### Gulp-Automatisierung einrichten

Schauen wir uns an, wie Gulp eingerichtet wird und wie Sie es verwenden können, um einige Test-Tools zu automatisieren.

1. Erstellen Sie zuerst ein Test-npm-Projekt mit dem im vorherigen Abschnitt am Ende detailliert beschriebenen Verfahren. Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"`, damit sie ungefähr so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System zu testen – machen Sie Kopien unserer Beispiel-Dateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners. Sie können auch Ihre eigenen Testinhalte ausprobieren, aber beachten Sie, dass solche Tools nicht mit internem JS/CSS arbeiten – Sie benötigen externe Dateien.
3. Installieren Sie zuerst Gulp global (das bedeutet, es wird in allen Projekten verfügbar sein) mit folgendem Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammordner Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei innerhalb Ihres Projektverzeichnisses mit dem Namen `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführen wird. Geben Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Diese Datei erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts tut, außer eine Nachricht im Terminal auszugeben – das ist nützlich, um zu wissen, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im gleichen Grundformat exportiert – `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter an – eine Rückruffunktion, die nach Abschluss der Aufgabe ausgeführt wird.

6. Sie können die Standardaufgabe von Gulp mit folgendem Befehl ausführen – probieren Sie das jetzt aus:

   ```bash
   gulp
   ```

### Einige echte Aufgaben zu Gulp hinzufügen

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun möchten. Eine vernünftige Reihe von Basisfunktionen, die auf unserem Projekt ausgeführt werden können, ist wie folgt:

- `html-tidy`, `css-lint` und `js-hint`, um häufige HTML/CSS/JS-Fehler zu überprüfen und zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- `autoprefixer`, um unsere CSS-Dateien zu scannen und dort, wo nötig, Vendor-Präfixe hinzuzufügen (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- `babel`, um neue JavaScript-Syntax-Features in traditionelle Syntax zu transpilen, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der `gulpfile.js`-Datei einbinden, dann Ihren Test am Ende der Datei hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit sie über Gulp's Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie mit folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür im `devDependencies`-Abschnitt.

2. Fügen Sie folgende Abhängigkeit in `gulpfile.js` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.js` hinzu:

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

Hier greifen wir auf unsere Entwicklungs-`index.html`-Datei mit `gulp.src()` zu, wodurch wir eine Quelldatei erfassen können, um etwas damit zu tun.

Wir verwenden als nächstes die Funktion `pipe()`, um diese Quelle an einen anderen Befehl zu übergeben, um etwas anderes damit zu tun. Wir können so viele davon verbinden, wie wir möchten. Wir führen zuerst `htmltidy()` auf der Quelle aus, das durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei in das `build`-Verzeichnis.

In der Eingabedatei haben Sie möglicherweise einen leeren `<p>`-Element bemerkt; htmltidy hat dieses bis zur Erstellung der Ausgabedatei entfernt.

#### Autoprefixer und css-lint

1. Installieren Sie mit folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie folgende Abhängigkeiten in `gulpfile.js` hinzu:

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

4. Fügen Sie folgende Eigenschaft in `package.json` hinzu:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier erfassen wir unsere `style.css`-Datei, führen `csslint` darauf aus (welches eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt), diesen dann durch `autoprefixer`, um zu sehen, ob es Präfixe gibt, die hinzugefügt werden müssen, um neue CSS-Funktionen in älteren Browsern ausführen zu können. Am Ende der Pipe-Kette wird unser modifiziertes, mit Präfixen versehenes CSS in das `build`-Verzeichnis ausgegeben. Beachten Sie, dass dies nur funktioniert, wenn `csslint` keine Fehler findet – versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und `gulp` erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie mit folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie folgende Abhängigkeiten in `gulpfile.js` hinzu:

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

4. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier erfassen wir unsere `main.js`-Datei, führen `jshint` darauf aus und geben die Ergebnisse im Terminal mit `jshint.reporter` aus. Wir übergeben die Datei dann an `babel`, das sie in die alte Syntax übersetzt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die `babel` in eine alte Funktionssyntax umgewandelt hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, die die Zeit, den Aufgabenname und die Dauer von 'abgeschlossenen' Aufgaben anzeigt.](gulp-output.png)

Sie können dann versuchen, die Dateien, die durch Ihre automatisierten Aufgaben erzeugt wurden, zu überprüfen, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Falls Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben dargestellt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte zu kommentieren und `gulp` erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, mit der Sie Ihre Dateien überwachen und Tests ausführen können, wann immer Sie eine Datei speichern. Versuchen Sie zum Beispiel folgendes am Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun den `gulp watch` Befehl in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen – hier sagen wir "führen Sie diese Aufgaben aus, wenn irgendeine Datei dieser Typen gespeichert wird". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann piped Aufgaben darauf ausführen.

Es gibt noch viel mehr, was Sie mit Gulp tun können. Das [Gulp Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Aufgabenplaner

Es gibt viele andere Aufgabenplaner, die verfügbar sind. Wir versuchen sicherlich nicht zu sagen, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist relativ zugänglich für Anfänger. Sie könnten auch andere Lösungen ausprobieren:

- Grunt arbeitet in sehr ähnlicher Weise wie Gulp, außer dass er sich auf Aufgaben verlässt, die in einer Konfigurationsdatei angegeben sind, anstatt in JavaScript geschrieben zu werden. Siehe [Erste Schritte mit Grunt für mehr Details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten ausführen, die in Ihrer `package.json`-Datei abgelegt sind, ohne irgendein zusätzliches Aufgabenplaner-System installieren zu müssen. Dies funktioniert, weil Dinge wie Gulp-Plugins im Grunde genommen Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie man die Tools über die Kommandozeile ausführt, können Sie diese auch mit npm-Skripten ausführen. Es ist etwas schwieriger zu arbeiten, kann aber belohnend sein für diejenigen, die stark in ihren Kommandozeilenfähigkeiten sind. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Vielzahl von weiteren Informationen.

## Verwendung kommerzieller Testservices zur Beschleunigung des Browser-Testing

Schauen wir uns nun kommerzielle Drittanbieter-Browsertest-Services an und was diese für uns tun können.

Wenn Sie diese Art von Diensten nutzen, geben Sie eine URL der zu testenden Seite ein sowie Informationen darüber, in welchen Browsern getestet werden soll. Die App konfiguriert dann eine neue virtuelle Maschine mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Log-Dateien, Text usw. zurück. Dies ist sehr nützlich und weitaus bequemer, als alle OS/Browser-Kombinationen selbst einzurichten.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um Funktionalitäten programmgesteuert zuzugreifen, was bedeutet, dass solche Apps mit Aufgabenplanern, wie Ihre eigene lokale Selenium-Umgebungen und andere kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt noch andere kommerzielle Browsersysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten Werkzeuge sind, aber sie sind gute, die einfach für Anfänger zu nutzen sind.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um zu starten:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live Dashboard ermöglicht es Ihnen, das Gerät und den Browser auszuwählen, auf dem Sie testen möchten — Plattformen links, Geräte rechts. Wählen Sie ein Gerät, um die Auswahl der verfügbaren Browser auf diesem Gerät zu sehen.

![Testauswahl](browserstack-test-choices-sized.png)

Das Klicken auf eines dieser Browser-Symbole lädt Ihre Auswahl an Plattform, Gerät und Browser — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten (zum Beispiel, pinch/zoom, zwei Finger um zu scrollen) auf Touchpads von unterstützenden Geräten wie MacBooks verwenden. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, das Ihnen erlaubt, die Sitzung zu steuern.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen beinhalten für:

- Anzeigen von Informationen über den aktuellen Browser
- Umschalten zu anderen Browsern
- Testen von localhost-URLs
- Einstellen des Zoomlevels und Umschalten der Orientierung
- Speichern und Laden von Lesezeichen
- Erfassen/Kommentieren von Screenshots und Einreichung von Fehlerberichten
- Zugriff auf Browser DevTools
- Änderung der gemeldeten Position
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleseprogramme

#### Fortgeschritten: Die BrowserStack-API

BrowserStack hat auch eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert die Details Ihres Kontos, Ihrer Sitzungen, Builds usw. abzurufen.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir mit Node.js auf die API zugreifen würden.

1. Zuerst richten Sie ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Node und npm einrichten](#node_und_npm_einrichten) detailliert beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `bstack-test` zum Beispiel.
2. Erstellen Sie eine neue Datei mit dem Namen `call_bstack.js` in Ihrem Projektstammverzeichnis und geben Sie ihr folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können von Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) abgerufen werden, unter dem Abschnitt _Authentication & Security_.
4. Installieren Sie das Modul [axios](https://www.npmjs.com/package/axios), das wir im Code verwenden, um HTTPS-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios ausgewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt sehen, das die Details Ihres BrowserStack-Plans enthält, das im Terminal ausgegeben wird.

   ```bash
   node call_bstack
   ```

Unten haben wir einige andere fertige Funktionen bereitgestellt, die Sie möglicherweise nützlich finden, wenn Sie mit der restful API von BrowserStack arbeiten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#browserstack)):

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

Wir werden das [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs Trial beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) hat viele Optionen zur Verfügung. Achten Sie vorerst darauf, dass Sie auf der Registerkarte _Manual Tests_ sind.

1. Klicken Sie auf _Start a new manual session_.
2. Im nächsten Bildschirm geben Sie die URL einer Seite ein, die Sie testen möchten (verwenden Sie <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html> zum Beispiel), wählen Sie dann eine Browser-/Betriebssystemkombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt viele Auswahlmöglichkeiten, wie Sie sehen werden!! [Sitzungsauswahl in Sauce](sauce-manual-session.png)
3. Wenn Sie auf _Start session_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen.![Laufender Sauce-Test](sauce-test-running.png)
5. Von hier aus können Sie das Layout sehen, wie es im Browser, den Sie testen, aussehen würde, die Maus bewegen und versuchen, Schaltflächen zu klicken, usw. Die obere Menüleiste ermöglicht Ihnen:

   - Die Sitzung zu beenden
   - Jemand anderem eine URL zu geben, damit er den Test remote beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren.
   - Einen Screenshot zu machen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Registerkarte _Manual Tests_ zurück, wo Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen. Durch Klicken auf einen dieser Einträge werden mehr Daten für die Sitzung angezeigt. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, die Protokolldaten einsehen und mehr.

> [!NOTE]
> Das ist bereits sehr nützlich und weitaus praktischer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Fortgeschritten: Die Sauce Labs-API

Sauce Labs verfügt über eine [restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmatisch Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details zu ergänzen, wie etwa deren Bestehen/Fehlgeschlagen-Status, der allein durch manuelles Testen nicht erfassbar ist. Zum Beispiel möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser-/Betriebssystemkombination zu testen, und dann die Testergebnisse an Sauce Labs weiterleiten.

Es gibt mehrere Clients, die es Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir mithilfe von Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Zuerst richten Sie ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Node und npm einrichten](#node_und_npm_einrichten) detailliert beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `sauce-test` zum Beispiel.
2. Installieren Sie den Node Sauce Labs-Wrapper mit folgendem Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei mit dem Namen `call_sauce.js` in Ihrem Projektstammverzeichnis und geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel an den angegebenen Stellen einfügen. Diese können von Ihrer [Seite mit Benutzereinstellungen](https://app.saucelabs.com/user-settings) abgerufen werden. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce Lab-Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einem TestingBot Trial beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) zeigt die verschiedenen Optionen, die Sie wählen können. Achten Sie vorerst darauf, dass Sie auf der Registerkarte _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/Betriebssystemkombination aus, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen.
5. Von hier aus können Sie das Layout sehen, wie es im Browser, den Sie testen, aussehen würde, die Maus bewegen und versuchen, Schaltflächen zu klicken, usw. Das Seitenmenü ermöglicht Ihnen:

   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu aufnehmen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen. Durch Klicken auf einen dieser Einträge werden mehr Daten für die Sitzung angezeigt. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und die Protokolle der Sitzung einsehen.

#### Fortgeschritten: Die TestingBot-API

TestingBot verfügt über eine [restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmatisch Details Ihres Kontos und bestehender Tests abzurufen, und Tests mit weiteren Details zu versehen, wie etwa deren Bestehen/Fehlgeschlagen-Status, der allein durch manuelles Testen nicht erfasst werden kann.

TestingBot hat mehrere API-Clients, die Sie benutzen können, um mit der API zu interagieren, darunter Clients für NodeJS, Python, Ruby, Java und PHP.

Unten ist ein Beispiel, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagiert.

1. Zuerst richten Sie ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Node und npm einrichten](#node_und_npm_einrichten) detailliert beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `tb-test` zum Beispiel.
2. Installieren Sie den Node TestingBot-Wrapper mit folgendem Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei mit dem Namen `tb.js` in Ihrem Projektstammverzeichnis und geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und das Geheimnis an den angegebenen Stellen einfügen. Diese können im [TestingBot-Dashboard](https://testingbot.com/members/user/edit) gefunden werden.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganze Menge, aber ich bin sicher, dass Sie beginnen können zu sehen, welchen Vorteil es hat, Automatisierungstools zu verwenden, um einige der schweren Aufgaben im Testprozess zu übernehmen.

Im nächsten Artikel werden wir darauf eingehen, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten und wie Sie dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
