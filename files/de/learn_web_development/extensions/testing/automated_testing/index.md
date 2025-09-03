---
title: Einführung in das automatisierte Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 60d0c0f45f3e91c84d608b05af40f48654a3ea17
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Tests manuell auf mehreren Browsern und Geräten mehrmals täglich laufen zu lassen, kann mühsam und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungswerkzeugen vertraut machen. In diesem Artikel schauen wir uns an, was verfügbar ist, wie man Task-Runner einsetzt und wie man die Grundlagen kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie man einige der kommerziellen Produkte nutzt, die dies erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht die Dinge einfacher

In diesem Modul haben wir zahlreiche verschiedene Möglichkeiten beschrieben, wie Sie Ihre Webseiten und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf zu testende Browser, Barrierefreiheit und mehr haben sollten. Klingt nach viel Arbeit, oder?

Wir stimmen zu — das manuelle Testen all der Dinge, die wir in früheren Artikeln behandelt haben, kann wirklich mühsam sein. Glücklicherweise gibt es Werkzeuge, die helfen, einen Teil dieses Schmerzes zu automatisieren. Es gibt zwei Hauptwege, um die Tests, die wir in diesem Modul besprochen haben, zu automatisieren:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um Tests während Ihres Build-Prozesses auszuführen und den Code aufzuräumen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifizierung von Code, Hinzufügen von CSS-Präfixen oder Transpilieren von neuen JavaScript-Features für maximale Cross-Browser-Reichweite und so weiter zu automatisieren.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern hinweisen, sobald sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen es Ihnen jedoch, ihre Einrichtung remote über eine Schnittstelle zu nutzen, was Ihnen die Mühe erspart, Ihr eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel werden wir uns ansehen, wie man einen Task-Runner einrichtet und die grundlegende Funktionalität von kommerziellen Systemen wie den oben genannten nutzt.

> [!NOTE]
> Die oben genannten beiden Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner so einzurichten, dass er über eine API auf einen Service wie Sauce Labs oder LambdaTest zugreift, Cross-Browser-Tests ausführt und Ergebnisse zurückgibt. Wir werden dies unten ebenfalls betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Testwerkzeugen

Wie oben erwähnt, können Sie gängige Aufgaben wie das Linting und die Minifizierung von Code durch die Verwendung eines Task-Runners, der alles automatisiert ausführt, wann immer Sie es brauchen, erheblich beschleunigen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt schauen wir uns an, wie man Task-Running mit Node und Gulp automatisieren kann, einer anfängerfreundlichen Option.

### Einrichten von Node und npm

Die meisten Werkzeuge heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit dem entsprechenden Paketmanager [`npm`](https://www.npmjs.com/) installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Installing Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie bereits Node.js/`npm` installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies kann durch den Node-Version-Manager erfolgen, um die neuesten LTS-Versionen zu installieren (siehe erneut die verlinkten Anweisungen oben).

Um mit Node/npm-basierten Paketen in Ihren Projekten arbeiten zu können, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist leicht zu machen.

Zum Beispiel erstellen wir zuerst ein Testverzeichnis, um ohne Sorge zu spielen, etwas kaputt zu machen.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrem Datei-Manager-UI oder auf der Kommandozeile, indem Sie zu dem Ort navigieren, den Sie wollen, und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die notwendigen Informationen zum Einrichten des Projekts zu erhalten; Sie können vorerst einfach die Standardeinstellungen auswählen.
4. Sobald alle Fragen gestellt wurden, wird Sie gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber im Moment sieht sie ungefähr so aus:

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

Werfen wir einen Blick darauf, wie Gulp eingerichtet wird und wie es zur Automatisierung von Testwerkzeugen verwendet wird.

1. Erstellen Sie zunächst ein Test-npm-Projekt nach dem im letzten Abschnitt beschriebenen Verfahren. Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie ungefähr wie folgt aussieht:

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

2. Als nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System zu testen — machen Sie Kopien unserer Beispiel-[index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) Dateien in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners.
   Sie können auch eigene Testinhalte ausprobieren, aber beachten Sie, dass solche Werkzeuge nicht gut mit JS/CSS funktionieren, die inline in die HTML-Datei eingebettet sind — Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (d.h. es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als nächstes den folgenden Befehl innerhalb Ihres npm-Projektverzeichnisses aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführen wird. Setzen Sie in diese Datei den folgenden Inhalt:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts anderes tut, als eine Nachricht im Terminal auszugeben — das ist nützlich, um zu wissen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung zu etwas Nützlicherem ändern.

   Jede Gulp-Aufgabe wird im gleichen grundlegenden Format exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie das jetzt:

   ```bash
   gulp
   ```

### Hinzufügen einiger echter Aufgaben zu Gulp

Jetzt sind wir bereit, weitere Aufgaben zu unserer Gulp-Datei hinzuzufügen. Jede Ergänzung kann erfordern, dass Sie die `gulpfile.mjs` in der folgenden Weise ändern:

- Wenn wir Sie bitten, einige `import`-Anweisungen hinzuzufügen, fügen Sie diese unterhalb der bestehenden `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie sie am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standard-Export zu ändern, ändern Sie die `export default`-Anweisung in der von uns angegebenen Weise.

Ihre `gulpfile.mjs` wird dann so wachsen:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun möchten. Eine vernünftige Menge an grundlegenden Funktionalitäten für unser Projekt ist wie folgt:

- html-tidy, css-lint und js-hint zum Linting und Berichten/Beheben häufiger HTML/CSS/JS-Fehler (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Anbieter-Präfixe hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- Babel, um neue JavaScript-Syntax-Features in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Sehen Sie sich die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen an, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.mjs` erfordern, dann Ihre Test(s) am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe über Gulp's-Befehle exportieren.

#### html-tidy

1. Mit folgendem Befehl installieren:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür im `devDependencies`-Eigenschaft.

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

4. Ändern Sie den Standardexport in:

   ```js
   export default html;
   ```

Hier greifen wir auf unsere Entwicklungs-`index.html`-Datei mit `gulp.src()` zu, was es uns ermöglicht, eine Quelldatei zu greifen, um damit etwas zu tun.

Wir verwenden dann die `pipe()`-Funktion, um diese Quelle an einen anderen Befehl weiterzugeben, um damit etwas anderes zu tun. Wir können so viele davon miteinander verketten, wie wir wollen. Wir führen zuerst `htmltidy()` auf der Quelle aus, was durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Eingangsdatei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies bis zur Erstellung der Ausgabedatei entfernt.

#### Autoprefixer und css-lint

1. Mit folgenden Zeilen installieren:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zur `gulpfile.mjs` hinzu:

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

4. Fügen Sie die folgende Eigenschaft zur `package.json` hinzu:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css);
   ```

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (was eine Liste von Fehlern in Ihrem CSS im Terminal ausgibt), dann lassen wir sie durch den Autoprefixer laufen, um alle notwendigen Präfixe hinzuzufügen, die erforderlich sind, um neue CSS-Funktionen in älteren Browsern zum Laufen zu bringen. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfix versehene CSS in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Mit folgenden Zeilen installieren:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten zur `gulpfile.mjs` hinzu:

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

4. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse an das Terminal aus, indem wir `jshint.reporter()` verwenden; dann lassen wir die Datei durch Babel laufen, das sie in eine alte Syntax umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von Babel in eine alte Funktionsweise umgewandelt wurde.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in dem Zeilen die Start- oder Endzeit von Aufgaben zeigen, den Namen der Aufgabe und die Dauer von 'Finished'-Aufgaben.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, prüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auskommentieren und dann Gulp erneut ausführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, mit der Sie Ihre Dateien beobachten und Tests automatisch ausführen können, wenn Sie eine Datei speichern. Versuchen Sie zum Beispiel, das Folgende am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie jetzt, den Befehl `gulp watch` in Ihrem Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen – hier sagen wir "führe diese Aufgaben aus, wenn Dateien dieses Typs gespeichert werden." Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien greifen und dann gepipe-Aufgaben darauf ausführen.

Es gibt viel mehr, was Sie mit Gulp tun können. Das [Gulp Plugin Directory](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir sagen sicherlich nicht, dass Gulp die beste Lösung da draußen ist, aber es funktioniert für uns und ist ziemlich zugänglich für Anfänger. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es sich auf Aufgaben verlässt, die in einer Konfigurationsdatei angegeben sind, anstatt in geschriebenem JavaScript. Weitere Details finden Sie unter [Getting started with Grunt](https://gruntjs.com/getting-started).
- Sie können auch Aufgaben direkt mithilfe von npm-Skripten aus Ihrer `package.json`-Datei ausführen, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Dies basiert auf dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Kommandozeilenwerkzeuge sind. Wenn Sie also herausfinden können, wie Sie die Werkzeuge über die Kommandozeile ausführen, können Sie sie mithilfe von npm-Skripten ausführen. Es ist etwas kniffliger, damit zu arbeiten, aber kann lohnend sein für diejenigen, die starke Kommandozeilenfähigkeiten haben. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung des Browser-Testens

Werfen wir nun einen Blick auf kommerzielle, von Drittanbietern bereitgestellte Browser-Testdienste und was sie für uns tun können.

Wenn Sie diese Arten von Diensten nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen wie, in welchen Browsern Sie sie testen möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und weitaus praktischer, als alle Kombinationen von Betriebssystemen und Browsern selbst einzurichten.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um Funktionen programmgesteuert zu nutzen, was bedeutet, dass solche Apps mit Task-Runnern oder eigenen lokalen Selenium-Umgebungen kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass diese unbedingt die besten verfügbaren Werkzeuge sind, aber sie sind gute, die einfach für Anfänger zu bedienen sind.

### BrowserStack

#### Einstieg in BrowserStack

Um zu starten:

1. Erstellen Sie ein [BrowserStack Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte nach der Bestätigung Ihrer E-Mail-Adresse automatisch geschehen.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zu Live-Manuellem Testen zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, die Plattform, das Gerät und den Browser auszuwählen, auf dem Sie testen möchten.
Für Desktop-Tests wählen Sie das Betriebssystem und den Browser direkt.
Für mobile Geräte wählen Sie das mobile Betriebssystem, Gerät und dann können Sie einen Browser für Ihre Kombination aus Gerät und Browser auswählen.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Symbole lädt Ihre Wahl von Plattform, Gerät und Browser — wählen Sie jetzt eine und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, durch Ziehen mit der Maus nach oben und unten scrollen und geeignete Gesten (zum Beispiel Pinch/Zoom, Zwei-Finger-Scrollen) auf den Touchpads von unterstützten Geräten wie MacBooks verwenden.

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Kontrollen umfassen wie:

- Anzeige von Informationen über den aktuellen Browser
- Wechsel zu anderen Browsern
- Testen von localhost-URLs
- Einstellen der Zoomstufe und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Aufnehmen/Annotieren von Screenshots und Erstellen von Fehlermeldungen
- Zugriff auf Browser-DevTools
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleser

![Testmenü](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der [BrowserStack Live](https://www.browserstack.com/docs/live) Dokumentation.

#### Fortgeschritten: Die BrowserStack API

BrowserStack verfügt auch über eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert Details zu Ihrem Konto, Sitzungen, Builds usw. abzurufen.

Werfen wir einen kurzen Blick darauf, wie wir die API mit Node.js aufrufen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können Sie von Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentication & Security_ abrufen.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, mit dem folgenden Befehl in Ihrem Terminal (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie durch den folgenden Befehl in Ihrem Terminal aus. Sie sollten ein Objekt sehen, das Ihre BrowserStack-Plan-Details enthält und im Terminal ausgegeben wird.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere fertiggestellte Funktionen bereitgestellt, die Sie nützlich finden könnten, wenn Sie mit der BrowserStack restful API arbeiten.

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

Wir werden das [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Einstieg in Sauce Labs

Lassen Sie uns mit einer Sauce Labs-Testversion beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen.
Wenn Sie angemeldet sind, folgen Sie dem 'Getting started'-Leitfaden oben links auf der Seite:

1. Klicken Sie in "Run your first test" auf _Desktop browser_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (wie zum Beispiel diese Seite), wählen Sie dann eine Browser/OS-Kombination, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden.
   Es gibt viel zur Auswahl, wie Sie sehen werden!
   ![Auswahl Sauce manual session](sauce-manual-session.png)
3. Wenn Sie mit dem Testen beginnen, erscheint ein Ladebildschirm, und eine Umgebung startet mit der von Ihnen gewählten Kombination aus Gerät und Browser.
   Sie können dann die Website im gewählten Browser remote testen.

Sie können an diesem Punkt eine Menge tun, wie eine Test-URL freigeben, damit jemand anderes den Test remote beobachten kann, Text/Notizen in eine entfernte Zwischenablage kopieren, einen Screenshot aufnehmen, im Vollbildmodus testen und mehr.

Wenn Sie die Sitzung beenden, kehren Sie zum Tab _Live_ zurück, wo Sie einen Eintrag für jede der vorherigen manuellen Sitzungen, die Sie gestartet haben, sehen.
Das Klicken auf einen dieser Einträge zeigt mehr Daten zur Sitzung.
Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, Datenprotokolle anzeigen und mehr.
Das ist bereits sehr nützlich und viel praktischer, als eigenständig mehrere Emulatoren und virtuelle Maschinen einzurichten.

Weitere Informationen finden Sie in der [Sauce Labs-Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs verfügt über eine [restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmgesteuert Details zu Ihrem Konto und bestehenden Tests abzurufen und Tests mit weiteren Informationen zu annotieren, wie deren Pass/Fail-Status, der bei manuellen Tests allein nicht aufzeichnebar ist. Beispielsweise könnten Sie einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser/OS-Kombination zu testen, und dann die Testergebnisse zurück an Sauce Labs übermitteln.

Es gibt mehrere Clients, die es Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung, sei es PHP, Java, Node.js usw., zu machen.

Werfen wir einen kurzen Blick darauf, wie wir die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) aufrufen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel in den angegebenen Stellen einfüllen. Diese können von Ihrer [User Settings](https://app.saucelabs.com/user-settings) Seite abgerufen werden. Füllen Sie diese jetzt ein.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei folgendermaßen aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce Lab-Tests im nächsten Artikel behandeln.

### TestingBot

#### Einstieg in TestingBot

Lassen Sie uns mit einer TestingBot-Testversion beginnen.

1. Erstellen Sie ein [TestingBot Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen, die Sie auswählen können, auf. Stellen Sie sicher, dass Sie sich auf dem Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die gewünschte Browser/OS-Kombination, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine startet, die die von Ihnen gewählte Kombination ausführt.
4. Sobald das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen.
5. Von hier aus können Sie das Layout so sehen, wie es im Browser, den Sie testen, aussehen würde, die Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht Ihnen:
   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der vorherigen manuellen Sitzungen, die Sie gestartet haben, sehen. Das Klicken auf einen dieser Einträge zeigt mehr Daten zur Sitzung. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Testvideo ansehen und Protokolle für die Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot API

TestingBot verfügt über eine [restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmgesteuert Details zu Ihrem Konto und bestehenden Tests abzurufen und Tests mit weiteren Informationen zu annotieren, wie deren Pass/Fail-Status, der bei manuellen Tests allein nicht aufzeichnebar ist.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Im Folgenden finden Sie ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und das Geheimnis in den angegebenen Stellen einfüllen. Sie können diese im [TestingBot Dashboard](https://testingbot.com/members/user/edit) finden.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemliche Fahrt, aber ich bin sicher, Sie können beginnen, die Vorteile zu sehen, Automatisierungswerkzeuge zu nutzen, um einige der schweren Aufgaben im Bereich Testen zu übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie man es mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
