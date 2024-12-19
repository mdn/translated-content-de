---
title: Einführung in automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Mehrmals täglich Tests manuell auf verschiedenen Browsern und Geräten durchzuführen, kann mühsam und zeitraubend sein. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet, und wie man die Grundlagen kommerzieller Browser-Test-Automatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des plattformübergreifenden Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen umfasst, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die das Ganze erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung erleichtert die Arbeit

In diesem Modul haben wir viele verschiedene Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und den Umfang erläutert, den Ihr plattformübergreifendes Testen in Bezug auf zu testende Browser, Barrierefreiheitsbetrachtungen und mehr haben sollte. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — alle Punkte, die wir in früheren Artikeln betrachtet haben, manuell zu testen, kann wirklich belastend sein. Glücklicherweise gibt es Tools, die uns helfen, einen Teil dieser Belastung zu automatisieren. Es gibt zwei Hauptwege, wie wir die in diesem Modul besprochenen Tests automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, um Aufgaben wie Linting und Code-Minifizierung zu automatisieren, CSS-Präfixe hinzuzufügen oder aufkommende JavaScript-Funktionen für maximale plattformübergreifende Reichweite zu transpilen und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern durchzuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in den Browsern aufmerksam machen, sobald sie auftreten. Kommerzielle plattformübergreifende Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Remote-Zugriff auf deren Einrichtung über eine Oberfläche, wodurch Sie sich die Einrichtung Ihres eigenen Testsystems ersparen.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes auf Selenium basierendes Testsystem einrichten können. In diesem Artikel schauen wir uns an, wie man einen Task-Runner einrichtet und die grundlegende Funktionalität kommerzieller Systeme wie die oben genannten nutzt.

> [!NOTE]
> Die beiden oben genannten Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zuzugreifen, plattformübergreifende Tests durchzuführen und Ergebnisse zurückzugeben. Dies werden wir unten ebenfalls betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Test-Tools

Wie bereits erwähnt, können Sie durch die Verwendung eines Task-Runners zur automatisierten Durchführung aller benötigten Aufgaben in einem bestimmten Punkt Ihres Build-Prozesses die Ausführung häufiger Aufgaben wie Linting und Minifizierung von Code erheblich beschleunigen. Beispielsweise könnte dies jedes Mal geschehen, wenn Sie eine Datei speichern oder an einem anderen Punkt. In diesem Abschnitt sehen wir uns an, wie man die Ausführung von Aufgaben mit Node und Gulp automatisiert, einer anfängerfreundlichen Option.

### Einrichtung von Node und npm

Die meisten Tools basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, sodass Sie es zusammen mit seinem zugehörigen Paketmanager, [`npm`](https://www.npmjs.com/), installieren müssen:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node).
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann durch die Installation der neuesten LTS-Versionen mithilfe des Node-Version-Managers erfolgen (siehe nochmals die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu bewerkstelligen.

Beispielsweise erstellen wir zunächst ein Testverzeichnis, in dem wir spielen können, ohne irgendetwas kaputt zu machen.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit der Benutzeroberfläche Ihres Dateimanagers oder navigieren Sie auf der Befehlszeile zu dem gewünschten Speicherort und führen Sie den folgenden Befehl aus:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie einfach in Ihr Testverzeichnis wechseln und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die erforderlichen Informationen zur Einrichtung des Projekts zu erhalten; Sie können für den Moment einfach die Standardwerte auswählen.
4. Nachdem alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber für den Moment sieht sie ungefähr so aus:

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

Damit können Sie weitermachen.

### Einrichtung der Gulp-Automatisierung

Schauen wir uns die Einrichtung von Gulp an und wie man es nutzt, um einige Test-Tools zu automatisieren.

1. Zunächst erstellen Sie ein npm-Testprojekt gemäß der am Ende des vorherigen Abschnitts beschriebenen Vorgehensweise.
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

2. Als nächstes benötigen Sie einige Beispiel-Inhalte in HTML, CSS und JavaScript, um Ihr System zu testen — erstellen Sie Kopien unserer Beispiel-[index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css)-Dateien in einem Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, beachten Sie jedoch, dass solche Tools nicht mit internen JS/CSS arbeiten — Sie benötigen externe Dateien.
3. Installieren Sie zuerst gulp global (d. h., es wird in allen Projekten verfügbar sein) mit folgendem Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie anschließend den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Geben Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts weiter tut, als eine Nachricht im Terminal auszugeben — dies ist nützlich, um uns zu informieren, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im gleichen Grundformat exportiert — `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit folgendem Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen einiger realer Aufgaben zu Gulp

Um einige reale Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun wollen. Ein vernünftiges Set an Basisfunktionen für unser Projekt könnte sein:

- html-tidy, css-lint und js-hint, um häufige HTML/CSS/JS-Fehler zu überprüfen und zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Anbieterpräfixe hinzuzufügen, wo es benötigt wird (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntaxmerkmale in traditionelle Syntax umzuwandeln, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zunächst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.js`-Datei einfügen, dann Ihren Test/die Tests am Ende einfügen und schließlich den Namen Ihrer Aufgabe exportieren, um über den Befehl von Gulp verfügbar zu sein.

#### html-tidy

1. Installieren Sie es mit dem folgenden Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, werden Sie einen Eintrag dafür in der Eigenschaft `devDependencies` sehen.

2. Fügen Sie die folgende Abhängigkeit zur `gulpfile.js` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test an das Ende der `gulpfile.js` hinzu:

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

Hier erfassen wir unsere Entwicklungs-`index.html`-Datei mit `gulp.src()`, das es uns ermöglicht, eine Quelldatei zu erfassen, um etwas damit zu machen.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzugeben, um etwas anderes damit zu tun. Wir können so viele davon hintereinander schalten, wie wir wollen. Zuerst führen wir `htmltidy()` auf der Quelle aus, das durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei HTML in das `build`-Verzeichnis.

In der Eingangs-Version der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies bis zur Erstellung der Ausgabedatei entfernt.

#### Autoprefixer und css-lint

1. Installieren Sie es mit den folgenden Befehlen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zur `gulpfile.js` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test an das Ende der `gulpfile.js` hinzu:

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

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (was eine Liste von Fehlern in Ihrem CSS im Terminal ausgibt), und führen es dann durch autoprefixer, um Präfixe hinzuzufügen, die erforderlich sind, um aufkeimende CSS-Funktionen in älteren Browsern lauffähig zu machen. Am Ende der Pipe-Kette geben wir unser modifiziertes CSS mit Präfixen in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie es mit den folgenden Befehlen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten zur `gulpfile.js` hinzu:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Fügen Sie den folgenden Test an das Ende der `gulpfile.js` hinzu:

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

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir übergeben die Datei dann an babel, das sie in eine alte Syntax konvertiert und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Funktionssyntax umgewandelt hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Zeilen die Zeit der Start- oder Endaufgaben, den Aufgabennamen und die Dauer von 'Fertig' Aufgaben anzeigen.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben erzeugten Dateien testen, indem Sie sie im `build`-Verzeichnis anschauen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die Abschnitte des HTML/CSS/JavaScript-Codes auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests auszuführen, wann immer Sie eine Datei speichern. Versuchen Sie beispielsweise, das folgende Kommando am Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie jetzt, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp überwacht nun Ihr Verzeichnis und führt die entsprechenden Aufgaben aus, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn eine Datei diesen Typs gespeichert wird". Sie könnten Platzhalter auch in Ihren Hauptaufgaben verwenden, z. B. `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann gepipte Aufgaben darauf ausführen.

Mit Gulp können Sie noch viel mehr machen. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins zum Durchsuchen.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir wollen sicherlich nicht sagen, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist für Anfänger ziemlich zugänglich. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert auf eine sehr ähnliche Weise wie Gulp, außer dass es sich auf in einer Konfigurationsdatei spezifizierte Aufgaben stützt anstatt auf geschriebenen JavaScript. Siehe [Erste Schritte mit Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können Aufgaben direkt mit npm-Skripten, die sich in Ihrer `package.json`-Datei befinden, ausführen, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Dieses Prinzip arbeitet auf der Prämisse, dass Gulp-Plugins im Wesentlichen Wrapper um Befehlszeilentools sind. Wenn Sie also herausfinden, wie Sie die Tools über die Befehlszeile ausführen, können Sie sie dann mit npm-Skripten ausführen. Es ist etwas schwieriger zu arbeiten, kann aber lohnend für diejenigen sein, die gute Kenntnisse in der Befehlszeile haben. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Menge weiterer Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir nun auf kommerzielle Browser-Testdienste von Drittanbietern und was sie für uns tun können.

Wenn Sie diese Arten von Diensten verwenden, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen darüber, in welchen Browsern Sie sie testen möchten. Die App konfiguriert dann ein neues VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und viel bequemer als alle OS/Browtersucher-Kombinationen selbst einrichten zu müssen.

Sie können dann eine Stufe höher gehen, indem Sie über eine API programmgesteuerten Zugriff auf die Funktionalität erhalten, was bedeutet, dass solche Apps mit Task-Runner, wie Ihren eigenen lokalen Selenium-Umgebungen und anderen Tools kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute Tools, die für Anfänger einfach einzurichten sind.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um zu beginnen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.
3. Klicken Sie im oberen Navigationsmenü auf den Link _Live_, um zu Live Manual Testing zu wechseln.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, auszuwählen, welches Gerät und welchen Browser Sie testen möchten — Plattformen auf der linken Seite, Geräte auf der rechten Seite. Wählen Sie ein Gerät aus, um die Auswahl der verfügbaren Browser auf diesem Gerät anzuzeigen.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Symbole lädt Ihr gewünschtes Plattform-, Geräte- und Browserprogramm — wählen Sie eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen und geeignete Gesten verwenden (z. B. Pinch/Zoom, zwei Finger zum Scrollen) auf den Touchpads von unterstützenden Geräten wie MacBooks. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, mit dem Sie die Sitzung steuern können.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nachdem, welcher Browser geladen ist, und können Steuerungen für Folgendes umfassen:

- Anzeige von Informationen über den aktuellen Browser
- Wechseln zu anderen Browsern
- Testen von localhost-URLs
- Einstellen des Zoomlevels und Umschalten der Orientierung
- Speichern und Laden von Bookmarks
- Erfassen/Kommentieren von Screenshots und Einreichen von Fehlerberichten
- Zugriff auf Browser DevTools
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmlesegeräte

#### Fortschrittlich: Die BrowserStack API

BrowserStack hat eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es ermöglicht, programmgesteuert Details Ihres Kontos, Ihrer Sitzungen, Builds usw. abzurufen.

Schauen wir uns kurz an, wie wir über Node.js auf die API zugreifen könnten.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einstellung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
2. Erstellen Sie eine neue Datei im Stamm Ihres Projekts mit dem Namen `call_bstack.js` und geben Sie ihr folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können aus Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentication & Security_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um das Senden von HTTP-Anfragen zu behandeln, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben uns für axios entschieden, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten im Terminal ein Objekt sehen, das Ihre BrowserStack-Plandetails enthält.

   ```bash
   node call_bstack
   ```

Im Folgenden haben wir weitere fertige Funktionen bereitgestellt, die Sie möglicherweise nützlich finden, wenn Sie mit der Ruhe-API von BrowserStack arbeiten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (finden Sie mehr Details zu automatisierten Tests von BrowserStack im nächsten Artikel unter [BrowserStack automatisierte Testdetails](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Die folgende Funktion gibt Details für eine bestimmte Sitzung zurück:

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

#### Fortschrittlich: Automatisierte Tests

Wir werden das [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs-Test beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Stellen Sie vorerst sicher, dass Sie in der Registerkarte _Manual Tests_ sind.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie beispielsweise <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Browser-/Betriebssystemkombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt viel Auswahl, wie Sie sehen werden!!![select sauce manual session](sauce-manual-session.png)
3. Wenn Sie auf Start session klicken, erscheint ein Ladescreen, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination aufbaut.
4. Wenn das Laden abgeschlossen ist, können Sie die Webseite, die im ausgewählten Browser ausgeführt wird, fernsteuern und testen.![Sauce test running](sauce-test-running.png)
5. Von hier aus können Sie das Layout sehen, wie es im Browser, den Sie testen, aussehen würde, sich mit der Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das obere Menü ermöglicht es Ihnen:

   - Die Sitzung zu beenden
   - Jemand anderem eine URL zu geben, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren.
   - Einen Screenshot zu machen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Registerkarte Manual Tests zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Durch Klicken auf einen dieser Einträge werden weitere Daten für die Sitzung angezeigt. Hier können Sie Screenshots, die Sie gemacht haben, herunterladen, ein Video der Sitzung ansehen, Datenprotokolle einsehen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Fortschrittlich: Die Sauce Labs API

Sauce Labs hat eine [restful API](https://docs.saucelabs.com/dev/api/), die Sie in die Lage versetzt, Details Ihres Kontos und bestehender Tests programmgesteuert abzurufen und Tests mit weiteren Details zu versehen, wie z. B. ihrem Erfolgs-/Fehlerzustand, der durch manuelles Testen allein nicht aufgezeichnet werden kann. Beispielsweise könnten Sie einen Ihrer eigenen Selenium-Tests mit Sauce Labs remote ausführen, um eine bestimmte Browser-/Betriebssystemkombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es hat mehrere Clients zur Verfügung, die es Ihnen ermöglichen, Aufrufe der API unter Verwendung Ihrer bevorzugten Umgebung, sei es PHP, Java, Node.js usw., zu tätigen.

Schauen wir uns kurz an, wie wir über Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einstellung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei im Stamm Ihres Projekts mit dem Namen `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und den API-Schlüssel an den angegebenen Stellen eingeben. Diese können von Ihrer [User Settings](https://app.saucelabs.com/user-settings)-Seite abgerufen werden. Füllen Sie dies jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortschrittlich: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce Labs-Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einem TestingBot-Test beginnen.

1. Erstellen Sie ein [TestingBot Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie auswählen können. Stellen Sie vorerst sicher, dass Sie auf der Registerkarte _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladescreen, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination aufbaut.
4. Wenn das Laden abgeschlossen ist, können Sie die Webseite, die im gewählten Browser läuft, remote testen.
5. Von hier aus können Sie das Layout sehen, wie es im Browser, den Sie testen, aussehen würde, sich mit der Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das seitliche Menü ermöglicht es Ihnen:

   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Durch Klicken auf einen dieser Einträge werden weitere Daten für die Sitzung angezeigt. Hier können Sie alle gemachten Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung einsehen.

#### Fortschrittlich: Die TestingBot API

TestingBot verfügt über eine [restful API](https://testingbot.com/support/api), die es ermöglicht, programmgesteuert Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details zu versehen, wie z. B. ihrem Erfolgs-/Fehlerzustand, der durch manuelles Testen allein nicht aufgezeichnet werden kann.

TestingBot hat mehrere API-Clients, die Sie zur Interaktion mit der API verwenden können, darunter Clients für NodeJS, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie Sie mit dem TestingBot API JavaScript-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit dem API interagieren können.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einstellung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei im Stamm Ihres Projekts mit dem Namen `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen den TestingBot-Schlüssel und das Secret an den angegebenen Stellen einfüllen. Sie finden diese im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortschrittlich: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganze Menge, aber ich bin sicher, dass Sie die Vorteile der Nutzung von Automatisierungstools erkennen können, um bei Tests einige der schweren Aufgaben zu übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie wir dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
