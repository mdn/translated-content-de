---
title: Einführung in automatisiertes Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 753e6ce9c25153d8bd414c2db1d27760559d0f98
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Manuelles Ausführen von Tests in mehreren Browsern und auf verschiedenen Geräten, mehrmals pro Tag, kann mühsam und zeitaufwendig sein. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel schauen wir uns an, was verfügbar ist, wie Sie Task-Runner verwenden können und wie Sie die Grundlagen kommerzieller Browser-Test-Automatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die Dinge einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht das Leben einfacher

In diesem Modul haben wir zahlreiche Möglichkeiten detailliert, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testing-Bemühungen in Bezug auf zu testende Browser, Zugänglichkeitsbetrachtungen und mehr haben sollten. Hört sich nach viel Arbeit an, oder?

Wir stimmen zu — all die Dinge, die wir in vorherigen Artikeln manuell betrachtet haben, zu testen kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns helfen, einen Teil dieses Schmerzes zu automatisieren. Es gibt zwei Hauptmöglichkeiten, wie wir die in diesem Modul besprochenen Tests automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um Tests während Ihres Build-Prozesses auszuführen und Code aufzuräumen. Dies ist eine hervorragende Möglichkeit, Aufgaben wie das Linting und Minifying von Code durchzuführen, CSS-Präfixe hinzuzufügen oder neue JavaScript-Funktionen zu transpilieren, um maximale Cross-Browser-Reichweite zu gewährleisten, und so weiter.
2. Nutzen Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zu liefern, wobei Sie auf Fehler in Browsern hingewiesen werden, sobald sie auftreten. Kommerzielle Cross-Browser-Testing-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben Ihnen jedoch, ihr Setup remote über eine einfache Benutzeroberfläche zu nutzen, sodass Sie sich den Aufwand sparen, Ihr eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel werden wir uns ansehen, wie man einen Task-Runner einrichtet und die grundlegenden Funktionen kommerzieller Systeme wie der oben genannten nutzt.

> [!NOTE]
> Die oben genannten zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um auf einen Dienst wie Sauce Labs oder LambdaTest über eine API zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Darauf werden wir im Folgenden ebenfalls eingehen.

## Verwendung eines Task-Runners zur Automatisierung von Test-Tools

Wie oben erwähnt, können Sie gängige Aufgaben wie das Linting und Minifying von Code erheblich beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen. Dies könnte beispielsweise jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir uns ansehen, wie man Task-Running mit Node und Gulp automatisiert, eine anfängerfreundliche Option.

### Einrichten von Node und npm

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, sodass Sie dieses zusammen mit dem dazugehörigen Paketmanager [`npm`](https://www.npmjs.com/) installieren müssen:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie zuvor Node.js/`npm` installiert haben, sollten Sie diese auf ihre neuesten Versionen aktualisieren. Dies kann durch die Verwendung des Node-Version-Managers zur Installation der neuesten LTS-Versionen erfolgen (siehe wieder die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Lassen Sie uns zum Beispiel zunächst ein Testverzeichnis erstellen, um ohne Angst vor Schäden zu experimentieren.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrer Dateimanager-Benutzeroberfläche oder in der Befehlszeile, indem Sie zu dem Speicherort navigieren, den Sie möchten, und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis wechseln und es initialisieren, mit folgendem:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen viele Fragen, um die für die Einrichtung des Projekts erforderlichen Informationen zu finden; Sie können für jetzt einfach die Standardeinstellungen auswählen.
4. Sobald alle Fragen gestellt wurden, wird es Sie fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm generiert eine `package.json`-Datei in Ihrem Verzeichnis.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können es später anpassen, aber für den Moment wird es ungefähr so aussehen:

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

### Einrichten von Gulp-Automatisierung

Schauen wir uns das Einrichten von Gulp an und wie man es zur Automatisierung von Test-Tools verwendet.

1. Erstellen Sie zunächst ein Test-npm-Projekt, indem Sie die am Ende des vorherigen Abschnitts beschriebenen Schritte ausführen.
   Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie in etwa so aussieht:

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

2. Als nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen — machen Sie Kopien unserer Beispiel-Dateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js), und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können gerne Ihre eigenen Testinhalte versuchen, aber bedenken Sie, dass solche Tools nicht auf internem JS/CSS arbeiten — Sie benötigen externe Dateien.
3. Installieren Sie zuerst Gulp global (das bedeutet, es wird in allen Projekten verfügbar sein), indem Sie den folgenden Befehl ausführen:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie nun den folgenden Befehl in Ihrem npm-Projektverzeichnis-Root aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektordner namens `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführt. In diese Datei geben Sie Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts tut außer eine Nachricht im Terminal auszugeben — dies ist nützlich, um uns wissen zu lassen, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im gleichen grundlegenden Format exportiert — `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter an — einen Rückruf, um ihn beim Abschluss der Aufgabe auszuführen.

6. Sie können die Standardaufgabe von Gulp mit folgendem Befehl ausführen — versuchen Sie dies jetzt:

   ```bash
   gulp
   ```

### Hinzufügen von echten Aufgaben zu Gulp

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir uns überlegen, was wir tun möchten. Ein vernünftiges Set grundlegender Funktionen, die wir auf unserem Projekt ausführen könnten, wäre:

- html-tidy, css-lint, und js-hint, um häufige HTML/CSS/JS-Fehler zu linten und zu melden/beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Vendor-Präfixe hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um alle neuen JavaScript-Syntaxfunktionen in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Sehen Sie sich die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen an, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es erst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.js`-Datei einfügen, dann Ihr(e) Test(e) unten hinzufügen, und schließlich den Namen Ihrer Aufgabe exportieren, damit er über den Befehl von Gulp verfügbar ist.

#### html-tidy

1. Installieren Sie mithilfe der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in der `package.json`-Datei Ihres Projekts nachsehen, sehen Sie einen Eintrag dafür im `devDependencies`-Eigenschaft.

2. Fügen Sie folgende Abhängigkeit zu `gulpfile.js` hinzu:

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

Hier greifen wir mit `gulp.src()` auf unsere Entwicklungs-`index.html`-Datei zu, was es uns ermöglicht, eine Quelldatei zu erfassen, um damit etwas zu tun.

Wir verwenden dann die `pipe()`-Funktion, um diese Quelle an einen anderen Befehl weiterzugeben, um damit etwas anderes zu tun. Wir können so viele dieser Verknüpfungen zusammenketten, wie wir wollen. Wir führen zuerst `htmltidy()` auf der Quelle aus, die Fehler in unserer Datei durchgeht und sie behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Eingabeverion der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies beim Erstellen der Ausgabedatei entfernt.

#### Autoprefixer und css-lint

1. Installieren Sie mithilfe der folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie folgende Abhängigkeiten zu `gulpfile.js` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende der `gulpfile.js` hinzu:

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

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (das eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt), dann führen wir es durch autoprefixer, um jegliche Präfixe hinzuzufügen, die erforderlich sind, um neue CSS-Funktionen in älteren Browsern auszuführen. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfix versehenes CSS in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie mithilfe der folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie folgende Abhängigkeiten zu `gulpfile.js` hinzu:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Fügen Sie den folgenden Test am Ende der `gulpfile.js` hinzu:

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

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse über `jshint.reporter` im Terminal aus; dann übergeben wir die Datei an babel, das sie in die alte Stilsyntax konvertiert und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Stilfunktion umgewandelt hat.

#### Weitere Ideen

Nachdem dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Linien die Zeit, die Aufgabennamen und die Dauer der 'abgeschlossenen' Aufgaben anzeigen.](gulp-output.png)

Sie können dann die Dateien, die von Ihren automatisierten Aufgaben erstellt wurden, ausprobieren, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu beobachten und Tests auszuführen, wenn Sie eine Datei speichern. Versuchen Sie zum Beispiel, Folgendes am Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wenn Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn eine dieser Dateitypen gespeichert wird". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann gepipe'te Aufgaben darauf ausführen.

Es gibt viel mehr, was Sie mit Gulp tun können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat sprichwörtlich tausende von Plugins zum Durchsuchen.

### Andere Task-Runner

Es gibt viele andere Task-Runner, die zur Verfügung stehen. Wir versuchen damit sicherlich nicht zu sagen, dass Gulp die beste Lösung da draußen ist, aber es funktioniert für uns und es ist relativ für Anfänger zugänglich. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert sehr ähnlich wie Gulp, mit dem Unterschied, dass es sich auf Aufgaben verlässt, die in einer Konfigurationsdatei angegeben sind, anstatt JavaScript-Code zu verwenden. Siehe [Erste Schritte mit Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten ausführen, die in Ihrer `package.json`-Datei abgelegt sind, ohne dass Sie ein zusätzliches Task-Runner-System installieren müssen. Dies funktioniert nach dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Befehlszeilen-Tools sind. Wenn Sie also herausfinden, wie Sie die Tools mit der Befehlszeile ausführen können, können Sie sie dann auch mit npm-Skripten ausführen. Es erfordert etwas mehr Arbeit, aber kann sich lohnen für diejenigen, die stark mit ihren Befehlszeilenfähigkeiten sind. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Menge zusätzlicher Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Third-Party-Browser-Testdienste an und was sie für uns tun können.

Wenn Sie diese Art von Diensten nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen, wie z.B. welche Browser Sie testen möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und viel bequemer, als alle OS/Browser-Kombinationen selbst einzurichten.

Sie können dann einen Gang hochschalten, indem Sie eine API verwenden, um die Funktionalität programmgesteuert zugänglich zu machen, was bedeutet, dass solche Apps mit Task-Runnern kombiniert werden können, wie z.B. in Ihrer eigenen lokalen Selenium-Umgebung und anderen, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, die verfügbar sind, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute und einfach für Anfänger, um damit zu starten.

### BrowserStack

#### Einstieg mit BrowserStack

Um zu starten:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, das Gerät und den Browser auszuwählen, auf dem Sie testen möchten — Plattformen links, Geräte rechts. Wählen Sie ein Gerät aus, um die Auswahl der auf diesem Gerät verfügbaren Browser zu sehen.

![Testauswahl](browserstack-test-choices-sized.png)

Das Klicken auf eines dieser Browsersymbole lädt Ihre Wahl der Plattform, des Geräts und des Browsers — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und entsprechende Gesten verwenden (z. B. Pinch/Zoom, zwei Finger zum Scrollen) auf den Touchpads unterstützender Geräte wie MacBooks. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, das Ihnen die Steuerung der Sitzung ermöglicht.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können folgende Steuerelemente umfassen:

- Anzeigen von Informationen zum aktuellen Browser
- Wechseln zu anderen Browsern
- Testen von localhost-URLs
- Festlegen des Zoom-Levels und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Erfassen/Annotieren von Screenshots und Erstellen von Fehlerberichten
- Zugriff auf Browser DevTools
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleser

#### Fortgeschritten: Die BrowserStack-API

BrowserStack verfügt auch über eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert Details Ihres Account-Plans, Sitzungen, Builds usw. abzurufen.

Sehen wir uns kurz an, wie wir mit Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projekt-Root mit dem Namen `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugangsschlüssel durch Ihre tatsächlichen Werte. Diese können in Ihren [BrowserStack Account- & Profildetails](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentifizierung & Sicherheit_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Plan-Details enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere fertiggestellte Funktionen bereitgestellt, die Sie beim Arbeiten mit der BrowserStack-restful API nützlich finden könnten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (sehen Sie sich den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#browserstack) an):

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

#### Einstieg mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs Test starten.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen. Stellen Sie für den Moment sicher, dass Sie auf der Registerkarte _Manuelle Tests_ sind.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie z.B. <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Kombination aus Browser/OS, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt viele Wahlmöglichkeiten, wie Sie sehen werden!![Sauce Manuelle Sitzung auswählen](sauce-manual-session.png)
3. Wenn Sie auf Start Sitzung klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination lädt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im ausgewählten Browser aus der Ferne testen.![Sauce Test wird ausgeführt](sauce-test-running.png)
5. Von hier aus können Sie das Layout sehen, wie es im Browser aussehen würde, den Sie testen, die Maus bewegen und versuchen, Tasten zu klicken usw. Das obere Menü ermöglicht Ihnen:

   - Die Sitzung zu stoppen
   - Jemand anderem eine URL zu geben, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren.
   - Einen Screenshot zu nehmen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zur Registerkarte Manuelle Tests zurück, wo Sie einen Eintrag für jede der vorherigen manuellen Sitzungen sehen, die Sie gestartet haben. Wenn Sie auf einen dieser Einträge klicken, werden mehr Daten zur Sitzung angezeigt. Hier können Sie alle Screenshots herunterladen, die Sie aufgenommen haben, ein Video der Sitzung ansehen, Protokolle anzeigen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer, als alle diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Fortgeschritten: Die Sauce Labs-API

Sauce Labs verfügt über eine [restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmgesteuert Details Ihres Accounts und bestehender Tests abzurufen und Tests mit weiteren Details zu versehen, wie z.B. ihren Erfolg/Misserfolg-Status, der allein durch manuelles Testen nicht aufzeichnet werden kann. Beispielsweise könnten Sie einen Ihrer eigenen Selenium-Tests aus der Ferne mit Sauce Labs ausführen, um eine bestimmte Browser/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückzugeben.

Es gibt mehrere Clients verfügbar, die es Ihnen ermöglichen, Anrufe an die API in Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Schauen wir uns kurz an, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projekt-Root namens `call_sauce.js` Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und Ihren API-Schlüssel in die markierten Stellen einfügen. Diese Informationen finden Sie in Ihren [Benutzereinstellungen](https://app.saucelabs.com/user-settings). Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei so aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce-Labs-Tests im nächsten Artikel behandeln.

### TestingBot

#### Einstieg mit TestingBot

Lassen Sie uns mit einem TestingBot-Test beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, aus denen Sie wählen können. Stellen Sie für den Moment sicher, dass Sie auf der Registerkarte _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Kombination aus Browser/OS, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination lädt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im ausgewählten Browser aus der Ferne testen.
5. Von hier aus können Sie das Layout sehen, wie es im Browser aussehen würde, den Sie testen, die Maus bewegen und versuchen, Tasten zu klicken usw. Das Seitenmenü ermöglicht Ihnen:

   - Die Sitzung zu stoppen
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der vorherigen manuellen Sitzungen sehen, die Sie gestartet haben. Wenn Sie auf einen dieser Einträge klicken, werden mehr Daten zur Sitzung angezeigt. Hier können Sie alle Screenshots herunterladen, die Sie aufgenommen haben, ein Video des Tests ansehen und Protokolle der Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot-API

TestingBot verfügt über eine [restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmgesteuert Details Ihres Accounts und bestehender Tests abzurufen und Tests mit weiteren Details zu versehen, wie z.B. ihren Erfolg/Misserfolg-Status, der allein durch manuelles Testen nicht aufzeichnet werden kann.

TestingBot bietet mehrere API-Clients an, die Sie verwenden können, um mit der API zu interagieren, darunter Clients für NodeJS, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren können.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `tb-test`.
2. Installieren Sie den Node TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projekt-Root namens `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Geheimnis an den angegebenen Stellen einfügen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das eigentliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemliche Fahrt, aber ich bin sicher, dass Sie beginnen können, die Vorteile der Nutzung von Automatisierungs-Tools zu sehen, um einen Teil der schwereren Tests zu übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten und wie Sie dieses mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
