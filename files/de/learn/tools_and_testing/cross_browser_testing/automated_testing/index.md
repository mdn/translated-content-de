---
title: Einführung in automatisiertes Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Das mehrmalige manuelle Ausführen von Tests in verschiedenen Browsern und auf verschiedenen Geräten pro Tag kann ermüdend und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, welche Möglichkeiten es gibt, wie man Task-Runner verwendet und wie man die Grundlagen kommerzieller Browser-Tests-Automatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>-, <a href="/de/docs/Learn/CSS">CSS</a>- und <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen;
        eine Vorstellung über die grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis davon zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die die Dinge einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht die Dinge einfach

In diesem Modul haben wir viele verschiedene Möglichkeiten beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Bemühungen für das Cross-Browser-Testing haben sollten, in Bezug auf welche Browser zu testen sind, Barrierefreiheitsüberlegungen und mehr. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu – das manuelle Testen all der Dinge, die wir in den vorherigen Artikeln betrachtet haben, kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns dabei helfen, einen Teil dieser Mühsal zu automatisieren. Es gibt zwei Hauptwege, auf denen wir die Tests, über die wir in diesem Modul gesprochen haben, automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests während Ihres Build-Prozesses auszuführen und Code aufzuräumen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Linten und Minifizieren von Code durchzuführen, CSS-Präfixe hinzuzufügen oder entstehende JavaScript-Features für maximale Cross-Browser-Reichweite zu transpilen und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests in installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie über Fehler in Browsern informieren, sobald diese auftreten. Kommerzielle Apps für das Cross-Browser-Testing wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben jedoch den Remote-Zugriff auf ihre Einrichtung mittels einer Schnittstelle, wodurch Ihnen die Mühe erspart bleibt, Ihr eigenes Testsystem einzurichten.

Wir werden uns im nächsten Artikel ansehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel sehen wir uns an, wie Sie einen Task-Runner einrichten und die grundlegende Funktionalität von kommerziellen Systemen wie den oben genannten nutzen.

> [!NOTE]
> Die obigen beiden Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um auf einen Dienst wie Sauce Labs oder LambdaTest über eine API zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Wir werden dies unten ebenfalls betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Testtools

Wie wir oben gesagt haben, können Sie gängige Aufgaben wie das Linten und Minifizieren von Code erheblich beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen. Beispielsweise könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt sehen wir uns an, wie Sie mit Node und Gulp, einer einsteigerfreundlichen Option, die Aufgabenautomatisierung einrichten können.

### Einrichtung von Node und npm

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie Node.js zusammen mit seinem zugehörigen Paketmanager, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, führt über einen Node-Version-Manager: Befolgen Sie die Anweisungen unter [Installieren von Node](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [überprüfen, ob Ihre Installation erfolgreich war](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` zuvor installiert haben, sollten Sie auf die neuesten Versionen aktualisieren. Dies kann durch Verwendung des Node-Version-Managers durchgeführt werden, um die neuesten LTS-Versionen zu installieren (verweisen Sie erneut auf die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist leicht zu bewerkstelligen.

Zum Beispiel, lassen Sie uns zuerst ein Testverzeichnis erstellen, damit wir ohne die Angst, etwas zu zerbrechen, herumspielen können.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrer Dateimanager-Oberfläche oder in einer Befehlszeile, indem Sie zu dem gewünschten Speicherort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie einfach in Ihr Testverzeichnis gehen und es initialisieren, mit dem folgenden:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die erforderlichen Informationen zur Einrichtung des Projekts zu erhalten; Sie können vorerst einfach die Standardoptionen auswählen.
4. Sobald alle Fragen gestellt wurden, wird es Sie fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie die Eingabetaste/Return, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst wird sie ungefähr so aussehen:

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

### Einrichtung der Gulp-Automatisierung

Lassen Sie uns die Einrichtung von Gulp und dessen Verwendung zur Automatisierung einiger Testtools betrachten.

1. Erstellen Sie zunächst ein Test-npm-Projekt mit dem im unteren Teil des vorherigen Abschnitts beschriebenen Verfahren.
   Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie ungefähr so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispielinhalte aus HTML, CSS und JavaScript, auf denen Sie Ihr System testen können — erstellen Sie Kopien unserer Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners.
   Sie können Ihren eigenen Testinhalt ausprobieren, aber beachten Sie, dass solche Tools nicht auf internem JS/CSS funktionieren — Sie benötigen externe Dateien.
3. Installieren Sie zuerst gulp global (d. h., es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführen wird. Fügen Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Damit wird das vorhin installierte `gulp`-Modul benötigt und dann ein Standardtask exportiert, der nichts anderes macht, als eine Nachricht im Terminal auszugeben — dies ist nützlich, um uns wissen zu lassen, dass Gulp funktioniert. Jeder gulp-Task wird im gleichen grundlegenden Format exportiert — `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter entgegen — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können Ihren Standardtask von Gulp mit folgendem Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Einige echte Aufgaben zu Gulp hinzufügen

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun möchten. Ein sinnvoller Satz von Grundfunktionen für unser Projekt könnte wie folgt sein:

- html-tidy, css-lint und js-hint zum Linten und Melden/Beheben häufiger HTML/CSS/JS-Fehler (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und benötigte Vendor-Präfixe hinzuzufügen (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntax-Features in traditionellen Syntax zu transpilen, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.js`-Datei anfordern, dann Ihren Test/die Tests am Ende einfügen und schließlich den Namen Ihrer Aufgabe exportieren, damit diese über Gulp-Befehle verfügbar ist.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in der `package.json`-Datei Ihres Projekts nachsehen, werden Sie einen Eintrag dafür im `devDependencies`-Eigenschaft sehen.

2. Fügen Sie die folgende Abhängigkeit zur `gulpfile.js` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am Ende der `gulpfile.js` hinzu:

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

Hier nehmen wir unsere Entwicklungsdatei `index.html` mit `gulp.src()`, welches uns erlaubt, eine Quelldatei zu erfassen, um damit etwas zu machen.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl zu übergeben, um damit etwas anderes zu tun. Wir können so viele wie wir wollen miteinander verbinden. Wir führen zunächst `htmltidy()` auf der Quelle aus, welches durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

Im Eingangsversion der Datei haben Sie möglicherweise bemerkt, dass wir ein leeres <p>-Element eingefügt haben; htmltidy hat dieses entfernt, bis die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie es mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende hinzu:

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

4. Fügen Sie die folgende Eigenschaft zur `package.json` hinzu:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier erfassen wir unsere Datei `style.css`, führen `csslint` darauf aus (welches eine Liste von Fehlern in Ihrem CSS im Terminal ausgibt), und führen sie dann durch `autoprefixer`, um alle erforderlichen Präfixe hinzuzufügen, um neue CSS-Features auf älteren Browsern auszuführen. Am Ende der pipe-Kette geben wir unser modifiziertes, mit Präfix versehenes CSS in das Verzeichnis `build` aus. Beachten Sie, dass dies nur funktioniert, wenn `csslint` keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und `gulp` erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie es mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten hinzu:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Fügen Sie den folgenden Test am Ende hinzu:

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

Hier erfassen wir unsere Datei `main.js`, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir übergeben dann die Datei an `babel`, welches sie in alten Syntax umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), welche `babel` in eine alte Funktion umgewandelt hat.

#### Weitere Ideen

Sobald alles eingerichtet ist, können Sie den Befehl `gulp` in Ihrem Projektverzeichnis ausführen und Sie sollten eine Ausgabe erhalten, die wie folgt aussieht:

![Ausgabe in einem Code-Editor, in dem Zeilen die Start- oder Endzeiten von Aufgaben, den Aufgabennamen und die Dauer von 'Fertiggestellten' Aufgaben anzeigen.](gulp-output.png)

Sie können dann versuchen, die von Ihren automatisierten Aufgaben ausgegebenen Dateien zu testen, indem Sie sie im Verzeichnis `build` betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler bekommen, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und `gulp` erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, mit der Sie Ihre Dateien überwachen und Tests ausführen können, wann immer Sie eine Datei speichern. Zum Beispiel, versuchen Sie, das Folgende am Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn beliebige Dateien dieses Typs gespeichert werden". Sie könnten ebenfalls Platzhalter in Ihren Hauptaufgaben verwenden, z. B. `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann gepipte Aufgaben darauf anwenden.

Es gibt viel mehr, was Sie mit Gulp machen können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich tausende von Plugins zum Durchsuchen.

### Andere Task-Runner

Es gibt viele andere Task-Runner, die verfügbar sind. Wir wollen sicherlich nicht behaupten, dass Gulp die beste Lösung ist, die es gibt, aber es funktioniert für uns und ist für Anfänger ziemlich zugänglich. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt arbeitet sehr ähnlich wie Gulp, außer dass es auf in einer Konfigurationsdatei angegebenen Aufgaben basiert, anstatt geschriebenen JavaScript zu verwenden. Siehe [Getting started with Grunt for more details](https://gruntjs.com/getting-started).
- Sie können auch Aufgaben direkt mit npm-Scripts ausführen, die sich in Ihrer `package.json`-Datei befinden, ohne dass Sie irgendein zusätzliches Task-Runner-System installieren müssen. Dies funktioniert nach dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Befehlszeilentools sind. Wenn Sie also herausfinden können, wie Sie die Tools mit der Befehlszeile ausführen, können Sie sie dann mit npm-Scripts ausführen. Es ist ein bisschen schwieriger zu handhaben, kann aber lohnend sein für diejenigen, die stark mit ihren Befehlszeilenfähigkeiten sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Verwendung kommerzieller Testservices, um Browser-Tests zu beschleunigen

Schauen wir uns jetzt kommerzielle Drittanbieter-Browser-Testservices an und was sie für uns tun können.

Wenn Sie diese Art von Services nutzen, geben Sie eine URL der Seite, die Sie testen möchten, zusammen mit Informationen wie den Browsern, in denen Sie testen möchten, an. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Das ist sehr praktisch und um einiges bequemer, als all die Kombinationen aus Betriebssystemen und Browsern selbst einrichten zu müssen.

Sie können dann einen Gang höher schalten und mithilfe einer API auf die Funktionalität programmatisch zugreifen, was bedeutet, dass solche Apps mit Task-Runnern kombiniert werden können, wie z. B. Ihren eigenen lokalen Selenium-Umgebungen und anderen, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt noch andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht unbedingt, dass dies die besten Werkzeuge sind, die verfügbar sind, aber sie sind gute Werkzeuge, die einfach für Anfänger zu verwenden sind.

### BrowserStack

#### Einstieg in BrowserStack

Um mit BrowserStack loszulegen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.
3. Klicken Sie auf den Link _Live_ im oberen Navigationsmenü, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen auszuwählen, auf welchem Gerät und Browser Sie testen möchten — Plattformen auf der linken Seite, Geräte auf der rechten Seite. Wählen Sie ein Gerät aus, um die Auswahl der auf diesem Gerät verfügbaren Browser zu sehen.

![Testauswahl](browserstack-test-choices-sized.png)

Durch Klicken auf eines dieser Browser-Symbole wird Ihre Wahl von Plattform, Gerät und Browser geladen — wählen Sie einen aus und probieren Sie ihn aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten (zum Beispiel Pinch/Zoom, zwei Finger zum Scrollen) auf unterstützten Geräten wie MacBooks verwenden. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, das es Ihnen ermöglicht, die Sitzung zu steuern.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen beinhalten für:

- Anzeige von Informationen über den aktuellen Browser
- Wechseln zu anderen Browsern
- Testen von localhost-URLs
- Einstellen des Zoom-Levels und Umschalten der Orientierung
- Speichern und Laden von Lesezeichen
- Aufzeichnen/Kommentieren von Screenshots und Erfassen von Fehlerberichten
- Zugriff auf die DevTools des Browsers
- Ändern des Meldestandorts
- Drosseln des Netzwerks
- Zugriff auf Bildschirmleser

#### Erweitert: Die BrowserStack API

BrowserStack hat auch eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmatisch Details zu Ihrem Konto, Ihren Sitzungen, Builds usw. abzurufen.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir auf die API mit Node.js zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `bstack-test`.
2. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts mit dem Namen `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für BrowserStack-Benutzernamen und Zugangsschlüssel durch Ihre tatsächlichen Werte. Diese können von Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) abgerufen werden, unter dem Abschnitt _Authentication & Security_.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Plandetails enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere gebrauchsfertige Funktionen bereitgestellt, die nützlich sein könnten, wenn Sie mit der BrowserStack-RESTful-API arbeiten.

Diese Funktion gibt die Zusammenfassung aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#browserstack)):

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

#### Erweitert: Automatisierte Tests

Wir werden das [Durchführen von automatisierten BrowserStack-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Einstieg in Sauce Labs

Lassen Sie uns mit einem Sauce Labs-Test beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen. Für den Moment, stellen Sie sicher, dass Sie auf dem Tab _Manuelle Tests_ sind.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie im nächsten Bildschirm die URL der Seite ein, die Sie testen möchten (verwenden Sie z. B. <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), wählen Sie dann eine Browser-/OS-Kombination aus, die Sie mit den verschiedenen Buttons und Listen testen möchten. Es gibt sehr viel Auswahl, wie Sie sehen werden!!![select sauce manual session](sauce-manual-session.png)
3. Wenn Sie auf die Schaltfläche Sitzung starten klicken, wird ein Ladescreen angezeigt, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination lädt.
4. Wenn das Laden abgeschlossen ist, können Sie mit dem Remote-Test der Webseite im gewählten Browser beginnen.![Sauce test running](sauce-test-running.png)
5. Von hier aus können Sie das Layout so sehen, wie es im zu testenden Browser aussehen würde, die Maus bewegen und versuchen, auf Buttons zu klicken usw. Das obere Menü erlaubt Ihnen:

   - Die Sitzung zu beenden
   - Jemand anderem eine URL zu geben, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage kopieren.
   - Einen Screenshot aufnehmen.
   - Im Vollbildmodus testen.

Sobald Sie die Sitzung beendet haben, kehren Sie zum Tab Manuelle Tests zurück, wo Sie einen Eintrag für jede der begonnenen manuellen Sitzungen sehen werden. Das Klicken auf einen dieser Einträge zeigt weitere Daten zur Sitzung an. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, Datenprotokolle anzeigen und mehr.

> [!NOTE]
> Das ist bereits sehr nützlich und um einiges bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Erweitert: Die Sauce Labs API

Sauce Labs hat eine [restful API](https://docs.saucelabs.com/dev/api/), die es ermöglicht, programmatisch auf Details Ihres Kontos und bestehender Tests zuzugreifen und Tests mit weiteren Details zu versehen, wie ihrem Bestanden-/Nicht-bestanden-Status, der bei manuellem Testen allein nicht aufzeichnungsfähig ist. Zum Beispiel möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser-/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es gibt mehrere Clients, die es Ihnen ermöglichen, Aufrufe zur API unter Verwendung Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir die API unter Verwendung von Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) aufrufen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `sauce-test`.
2. Installieren Sie den Node Sauce Labs-Wrapper mit folgendem Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei im Projektstammverzeichnis mit dem Namen `call_sauce.js`. Gib ihr folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel an den angegebenen Stellen ausfüllen. Diese können von Ihrer [User Settings](https://app.saucelabs.com/user-settings) Seite abgerufen werden. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei so aus:

   ```bash
   node call_sauce
   ```

#### Erweitert: Automatisierte Tests

Wir werden das eigentliche Ausführen automatisierter Sauce Labs-Tests im nächsten Artikel behandeln.

### TestingBot

#### Einstieg in TestingBot

Lassen Sie uns mit einem TestingBot-Test beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch nach Bestätigung Ihrer E-Mail-Adresse geschehen.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, aus denen Sie wählen können. Stellen Sie vorerst sicher, dass Sie auf dem Tab _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/OS-Kombination aus, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, wird ein Ladescreen angezeigt, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination lädt.
4. Sobald das Laden abgeschlossen ist, können Sie mit dem Remote-Test der Webseite im gewählten Browser beginnen.
5. Von hier aus können Sie das Layout so sehen, wie es im zu testenden Browser aussehen würde, die Maus bewegen und versuchen, auf Buttons zu klicken usw. Das Seitenmenü erlaubt Ihnen:

   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus testen.

Sobald Sie die Sitzung beendet haben, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der begonnenen manuellen Sitzungen sehen werden. Das Klicken auf einen dieser Einträge zeigt weitere Daten zur Sitzung an. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und Sitzungsprotokolle einsehen.

#### Erweitert: Die TestingBot API

TestingBot hat eine [restful API](https://testingbot.com/support/api), die es ermöglicht, programmatisch auf Details Ihres Kontos und bestehender Tests zuzugreifen und Tests mit weiteren Details wie dem Bestanden-/Nicht-bestanden-Status zu versehen, der bei manuellem Testen allein nicht aufzeichnungsfähig ist.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `tb-test`.
2. Installieren Sie den Node TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei im Projektstammverzeichnis namens `tb.js`. Gib ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Geheimnis an den angegebenen Stellen ausfüllen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Erweitert: Automatisierte Tests

Wir werden das eigentliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemliche Reise, aber ich bin sicher, Sie können anfangen die Vorteile der Verwendung von Automatisierungstools zu sehen, um einen Teil der Mühen beim Testen zu übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie man dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
