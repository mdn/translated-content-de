---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Manuelles Durchführen von Tests auf mehreren Browsern und Geräten, mehrmals am Tag, kann mühsam und zeitaufwendig werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task Runner verwendet, und wie man die Grundlagen kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann, und wie Sie einige der kommerziellen Produkte nutzen können, die Dinge einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung erleichtert die Arbeit

In diesem Modul haben wir zahlreiche verschiedene Möglichkeiten beschrieben, wie Sie Ihre Websites und Apps testen können, und erläutert, in welchem Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf zu testende Browser, Barrierefreiheitsaspekte usw. angelegt sein sollten. Klingt nach viel Arbeit, oder?

Wir stimmen zu — das manuelle Testen all der Dinge, die wir in früheren Artikeln betrachtet haben, kann wirklich schmerzhaft sein. Glücklicherweise gibt es Tools, um einen Teil dieses Schmerzes zu automatisieren. Es gibt zwei Hauptmöglichkeiten, wie wir die Tests, über die wir in diesem Modul gesprochen haben, automatisieren können:

1. Verwenden Sie einen Task Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifizieren von Code, Hinzufügen von CSS-Prefixen oder Transpilieren neuer JavaScript-Features für maximale Cross-Browser-Reichweite und so weiter durchzuführen.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern aufmerksam machen, wenn sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen es Ihnen jedoch, ihren Aufbau aus der Ferne über eine Oberfläche zuzugreifen, was Ihnen den Aufwand erspart, Ihr eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel betrachten wir, wie man einen Task Runner einrichtet und die grundlegenden Funktionen kommerzieller Systeme wie der oben genannten nutzt.

> [!NOTE]
> Die oben genannten zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task Runner einzurichten, um über eine API auf einen Service wie Sauce Labs oder LambdaTest zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Wir werden dies unten ebenfalls betrachten.

## Verwendung eines Task Runners zur Automatisierung von Testwerkzeugen

Wie oben gesagt, können Sie gängige Aufgaben wie Linting und Minifying von Code erheblich beschleunigen, indem Sie einen Task Runner verwenden, um alles, was ausgeführt werden muss, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir betrachten, wie Sie die Aufgabenlaufzeit mit Node und Gulp, einer einsteigerfreundlichen Option, automatisieren.

### Einrichten von Node und npm

Die meisten Tools basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, sodass Sie es zusammen mit seinem Paketmanager-Gegenstück, [`npm`](https://www.npmjs.com/), installieren müssen:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie zuvor Node.js/`npm` installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann erreicht werden, indem Sie den Node-Version-Manager verwenden, um die neuesten LTS-Versionen zu installieren (beziehen Sie sich erneut auf die verlinkten Anweisungen oben).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Zum Beispiel erstellen wir zunächst ein Testverzeichnis, in dem wir ohne Angst vor Fehlern spielen können.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrem Dateimanager-UI oder, in einer Befehlszeile, indem Sie zu dem gewünschten Ort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, gehen Sie einfach in Ihr Testverzeichnis und initialisieren es mit dem folgenden Befehl:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen viele Fragen, um die notwendigen Informationen für die Einrichtung des Projekts zu sammeln; Sie können für den Moment einfach die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird Sie gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return und npm erstellt eine `package.json`-Datei in Ihrem Verzeichnis.

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

### Einrichten der Gulp-Automatisierung

Schauen wir uns an, wie man Gulp einrichtet und es verwendet, um einige Testwerkzeuge zu automatisieren.

1. Erstellen Sie zunächst ein Test-npm-Projekt mit dem im unteren Teil des vorherigen Abschnitts beschriebenen Verfahren.
   Aktualisieren Sie die `package.json`-Datei ebenfalls mit der Zeile: `"type": "module"`, sodass sie ungefähr wie folgt aussieht:

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

2. Als nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen — kopieren Sie unsere Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einen Unterordner mit dem Namen `src` innerhalb Ihres Projektordners.
   Sie können Ihren eigenen Testinhalt ausprobieren, wenn Sie möchten, bedenken Sie jedoch, dass solche Tools nicht gut mit in HTML-Dateien eingebetteten JS/CSS funktionieren — Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (das bedeutet, es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts festzulegen:

   ```bash
   npm install --save-dev gulp
   ```

5. Jetzt erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Geben Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts anderes tut, als eine Nachricht im Terminal anzuzeigen — das ist nützlich, um uns wissen zu lassen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung in etwas Nützlicheres ändern.

   Jede Gulp-Aufgabe wird im gleichen grundlegenden Format exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter auf — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen einiger echter Aufgaben zu Gulp

Nun sind wir bereit, weitere Aufgaben zu unserer Gulp-Datei hinzuzufügen. Jede Ergänzung erfordert möglicherweise, dass Sie die `gulpfile.mjs`-Datei auf folgende Weise ändern:

- Wenn wir Sie bitten, `import`-Anweisungen hinzuzufügen, fügen Sie sie unterhalb der bestehenden `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie sie am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standardexport zu ändern, ändern Sie die `export default`-Anweisung in der von uns angegebenen Weise.

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

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun wollen. Ein vernünftiges Set grundlegender Funktionen, die in unserem Projekt ausgeführt werden sollen, ist wie folgt:

- html-tidy, css-lint und js-hint, um gängige HTML/CSS/JS-Fehler zu überprüfen und zu berichtigen (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und dort, wo nötig, Hersteller-Präfixe hinzuzufügen (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel zum Transpilieren neuer JavaScript-Syntaxfeatures in traditionelle Syntax, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der `gulpfile.mjs`-Datei einfordern, dann Ihre Tests unten hinzufügen, und schließlich den Namen Ihrer Aufgabe exportieren, um über Gulp's Kommandozeile verfügbar zu sein.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Note:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür in der `devDependencies`-Eigenschaft.

2. Fügen Sie die folgende Abhängigkeit zur `gulpfile.mjs` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am Ende der `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere Entwicklungs-`index.html`-Datei mit `gulp.src()` zu, das es uns ermöglicht, eine Quelldatei zu ergreifen, um etwas damit zu tun.

Wir verwenden dann die `pipe()`-Funktion, um diese Quelle an einen anderen Befehl weiterzuleiten, um etwas anderes damit zu tun. Wir können so viele davon verketten, wie wir wollen. Zuerst führen wir `htmltidy()` auf die Quelle aus, die Fehler in unserer Datei durchgeht und behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei in das `build`-Verzeichnis.

In der Eingangsversion der Datei werden Sie vielleicht bemerken, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies entfernt, bis die Ausgabedatei erstellt ist.

#### Autoprefixer und css-lint

1. Installieren Sie sie mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zur `gulpfile.mjs` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende der `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (das gibt eine Liste aller Fehler in Ihrem CSS im Terminal aus), dann wird sie durch Autoprefixer geführt, um eventuelle Präfixe hinzuzufügen, die nötig sind, um neue CSS-Features in älteren Browsern ausführen zu können. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie sie mit den folgenden Zeilen:

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

3. Fügen Sie den folgenden Test am Ende der `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` an das Terminal aus; dann geben wir die Datei an babel weiter, das sie in eine ältere Syntax konvertiert und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [fat arrow function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von babel in eine alte Syntaxfunktion umgewandelt wurde.

#### Weitere Ideen

Wenn dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis eingeben und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Zeilen die Start- oder Endzeiten von Aufgaben, den Aufgabennamen und die Dauer von "Abgeschlossenen" Aufgaben anzeigen.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im `build`-Verzeichnis betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie isolieren können, was das Problem ist.

Gulp kommt mit einer `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests jedes Mal durchzuführen, wenn Sie eine Datei speichern. Versuchen Sie zum Beispiel, Folgendes am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den `gulp watch`-Befehl in Ihr Terminal einzugeben. Gulp wird jetzt Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen — hier sagen wir "führen Sie diese Aufgaben aus, wenn Dateien dieser Typen gespeichert werden". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würden alle Ihre CSS-Dateien ergreifen und dann gepipegte Aufgaben darauf ausführen.

Es gibt noch viel mehr, was Sie mit Gulp tun können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins zum Durchsuchen.

### Andere Task Runner

Es gibt viele andere Task Runner, die zur Verfügung stehen. Wir versuchen sicherlich nicht zu sagen, dass Gulp die beste Lösung da draußen ist, aber es funktioniert für uns und ist ziemlich zugänglich für Anfänger. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert auf sehr ähnliche Weise wie Gulp, außer dass es auf Aufgaben basiert, die in einer Konfigurationsdatei angegeben sind, anstatt in geschriebenem JavaScript. Siehe [Getting started with Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten ausführen, die in Ihrer `package.json`-Datei enthalten sind, ohne dass Sie ein zusätzliches Task Runner-System installieren müssen. Dies funktioniert nach dem Prinzip, dass Gulp-Plugins im Grunde Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie man die Tools über die Kommandozeile ausführt, können Sie sie auch mit npm-Skripten ausführen. Es ist etwas schwieriger zu handhaben, kann aber lohnend sein für diejenigen, die im Umgang mit der Kommandozeile stark sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer guten Menge weiterer Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Wenn Sie solche Dienste nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen wie welche Browser Sie testen möchten. Die App konfiguriert dann eine neue virtuelle Maschine mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Logdateien, Text usw. zurück. Dies ist sehr nützlich und viel praktischer, als alle OS-/Browser-Kombinationen selbst einzurichten.

Sie können dann einen Gang höher schalten, indem Sie auf eine API zugreifen, um die Funktionalität programmatisch zu nutzen, was bedeutet, dass solche Apps mit Task Runnern, wie Ihren eigenen lokalen Selenium-Umgebungen und anderen, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt auch andere kommerzielle Browser-Testsysteme, die verfügbar sind, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht unbedingt, dass dies die besten verfügbaren Tools sind, aber sie sind gute, die einfach für Anfänger einzurichten sind.

### BrowserStack

#### Einstieg mit BrowserStack

Um loszulegen:

1. Erstellen Sie ein [BrowserStack-Trial-Konto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live Dashboard ermöglicht es Ihnen, auszuwählen, auf welchem Gerät und Browser Sie testen möchten — Plattformen auf der linken Seite, Geräte auf der rechten Seite. Wählen Sie ein Gerät, um die Auswahl an Browsern auf diesem Gerät anzuzeigen.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Symbole lädt Ihre Wahl von Plattform, Gerät und Browser — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten verwenden (z. B. Pinch/Zoom, zwei Finger zum Scrollen) auf den Touchpads von unterstützenden Geräten wie MacBooks. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie werden auch ein Menü sehen, das es Ihnen ermöglicht, die Sitzung zu steuern.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladener Browser und können Steuerungen umfassen für:

- Anzeige von Informationen zum aktuellen Browser
- Wechseln zu anderen Browsern
- Testen von localhost-URLs
- Einstellen von Zoomleveln und Umschalten von Bildschirmorientierungen
- Speichern und Laden von Lesezeichen
- Erstellen/Kommentieren von Screenshots und Einreichen von Fehlerberichten
- Zugriff auf Browser DevTools
- Ändern des gemeldeten Standorts
- Drosseln des Netzwerks
- Zugriff auf Bildschirmleser

#### Fortgeschritten: Die BrowserStack-API

BrowserStack verfügt auch über eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontoplans, Sitzungen, Builds usw. abzurufen.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir auf die API mit Node.js zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können aus Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) im Abschnitt _Authentication & Security_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, beliebt und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal angezeigt bekommen, das Ihre BrowserStack-Plandetails enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die Sie nützlich finden könnten, wenn Sie mit der und API arbeiten.

Diese Funktion gibt zusammenfassende Details aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automated test details](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Wir werden das eigentliche [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Einstieg mit Sauce Labs

Lass uns mit einer Sauce Labs Testversion beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Stellen Sie sicher, dass Sie auf dem Tab _Manual Tests_ sind.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie z.B. <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie eine Kombination aus Browser/OS, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt viele Auswahlmöglichkeiten, wie Sie sehen werden!![select sauce manual session](sauce-manual-session.png)
3. Klicken Sie auf Start session, erscheinen dann ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination startet.
4. Sobald das Laden abgeschlossen ist, können Sie das laufende System im ausgewählten Browser testen.![Sauce test running](sauce-test-running.png)
5. Von hier aus können Sie das Layout so sehen, wie es im von Ihnen getesteten Browser aussehen würde, die Maus umherbewegen und versuchen, Tasten zu klicken, usw. Das obere Menü ermöglicht es Ihnen:

   - Die Sitzung zu stoppen
   - Jemandem einen URL zur Verfügung zu stellen, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine remote Zwischenablage zu kopieren.
   - Einen Screenshot zu machen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zum Tab Manual Tests zurück, wo Sie einen Eintrag für jede der von Ihnen gestarteten manuellen Sitzungen sehen. Ein Klick auf einen dieser Einträge zeigt mehr Daten zur Sitzung. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, Protokolldaten einsehen und mehr.

> [!NOTE]
> Das ist bereits sehr nützlich und viel praktischer, als alle diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Fortgeschritten: Die Sauce Labs-API

Sauce Labs bietet eine [restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos sowie bestehende Tests abzurufen und Tests mit weiteren Details zu versehen, wie deren Erfolgs-/Fehlerzustand, den manuell durchgeführte Tests allein nicht erfassen können. Zum Beispiel könnten Sie einen Ihrer eigenen Selenium-Tests remote unter Verwendung von Sauce Labs ausführen, um eine bestimmte Kombination aus Browser/OS zu testen, und dann die Testergebnisse zurück an Sauce Labs weitergeben.

Es stehen verschiedene Clients zur Verfügung, die es Ihnen ermöglichen, Aufrufe der API in Ihrer bevorzugten Umgebung vorzunehmen, sei es PHP, Java, Node.js, usw.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir auf die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts mit dem Namen `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel an den angegebenen Stellen ausfüllen. Diese können Sie von Ihrer [User Settings](https://app.saucelabs.com/user-settings)-Seite abrufen. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden tatsächlich das [Ausführen automatisierter Sauce Lab-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#sauce_labs) im nächsten Artikel behandeln.

### TestingBot

#### Einstieg mit TestingBot

Lassen Sie uns mit einer TestingBot-Testversion beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie auswählen können. Stellen Sie sicher, dass Sie derzeit auf der Registerkarte _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der gewählten Kombination startet.
4. Sobald das Laden abgeschlossen ist, können Sie die in dem ausgewählten Browser laufende Website aus der Ferne testen.
5. Hier können Sie das Layout so sehen, wie es im von Ihnen getesteten Browser aussehen würde, die Maus umherbewegen und versuchen, Tasten zu klicken, usw. Das Seitenmenü ermöglicht es Ihnen:

   - Die Sitzung zu stoppen
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine remote Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der von Ihnen gestarteten manuellen Sitzungen sehen. Ein Klick auf einen dieser Einträge zeigt mehr Daten zur Sitzung. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung einsehen.

#### Fortgeschritten: Die TestingBot-API

TestingBot bietet eine [restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos sowie bestehende Tests abzurufen und Tests mit weiteren Details zu versehen, wie deren Erfolgs-/Fehlerzustand, den manuell durchgeführte Tests allein nicht erfassen können.

TestingBot bietet mehrere API-Clients, die Sie zur Interaktion mit der API verwenden können, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Nachstehend finden Sie ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren können.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts mit dem Namen `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

#### Fortgeschritten: Automatisierte Tests

Wir werden tatsächlich das [Ausführen automatisierter TestingBot-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#testingbot) im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganze Menge, aber ich bin sicher, Sie können beginnen, die Vorteile der Verwendung von Automatisierungstools zu sehen, um einige der schweren Arbeiten beim Testen zu erledigen.

Im nächsten Artikel werden wir uns damit beschäftigen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
