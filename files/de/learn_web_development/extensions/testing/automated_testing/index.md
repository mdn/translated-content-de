---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Mehrmals täglich Tests in mehreren Browsern und auf verschiedenen Geräten manuell durchzuführen, kann ermüdend und zeitaufwändig sein. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir die vorhandenen Optionen, wie man Task-Runner verwendet und wie man die Grundlagen kommerzieller Browser-Testautomatisierungsanwendungen wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Grundlagen des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die dies erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung erleichtert vieles

In diesem Modul haben wir eine Vielzahl von Möglichkeiten aufgelistet, wie Sie Ihre Websites und Apps testen können, und den Umfang Ihrer Cross-Browser-Testbemühungen in Bezug auf zu testende Browser, Barrierefreiheitsüberlegungen und mehr erklärt. Klingt nach viel Arbeit, oder?

Wir stimmen zu — das alles manuell zu testen, kann wirklich anstrengend sein. Glücklicherweise gibt es Tools, die uns helfen können, einen Teil dieses Schmerzes zu automatisieren. Es gibt zwei Hauptmethoden, wie wir die Tests, über die wir in diesem Modul gesprochen haben, automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifying von Code durchzuführen, CSS-Präfixe hinzuzufügen oder neueste JavaScript-Features für maximale Cross-Browser-Reichweite zu transpilen, und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern durchzuführen und Ergebnisse zurückzugeben, die Sie über Fehler in Browsern warnen, wenn diese auftreten. Kommerzielle Cross-Browser-Testing-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch, ihre Einrichtung remote über eine Schnittstelle zu verwenden, wodurch Sie den Aufwand vermeiden, Ihr eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel zeigen wir, wie Sie einen Task-Runner einrichten und die grundlegende Funktionalität kommerzieller Systeme wie den oben genannten verwenden.

> [!NOTE]
> Die beiden oben genannten Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Das werden wir im Folgenden ebenfalls betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Testwerkzeugen

Wie wir oben gesagt haben, können Sie durch die Verwendung eines Task-Runners, um alles, was Sie brauchen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen, gängige Aufgaben wie Linting und Minifying von Code drastisch beschleunigen. Dies könnte beispielsweise jedes Mal sein, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir uns ansehen, wie man das Task-Running mit Node und Gulp automatisiert, was eine einsteigerfreundliche Option ist.

### Einrichtung von Node und npm

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Paketmanager, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Falls Sie zuvor Node.js/`npm` installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann durch die Verwendung des Node-Version-Managers zur Installation der neuesten LTS-Versionen erfolgen (verweisen Sie erneut auf die verbundenen Anweisungen oben).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu tun.

Lassen Sie uns zum Beispiel zunächst ein Testverzeichnis erstellen, um ohne Angst vor Schäden zu spielen.

1. Erstellen Sie ein neues Verzeichnis irgendwo sinnvoll mit Ihrer Dateimanager-Oberfläche oder an der Befehlszeile, indem Sie zu dem gewünschten Ort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie einfach in Ihr Testverzeichnis wechseln und es wie folgt initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die zur Einrichtung des Projekts erforderlichen Informationen zu erhalten; Sie können vorerst einfach die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird es Sie fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return und npm wird eine `package.json` Datei in Ihrem Verzeichnis erzeugen.

Diese Datei ist im Wesentlichen eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst wird sie ungefähr so aussehen:

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

### Einrichtung von Gulp-Automatisierung

Lassen Sie uns anschauen, wie man Gulp einrichtet und es verwendet, um einige Testwerkzeuge zu automatisieren.

1. Beginnen Sie, indem Sie ein Test-npm-Projekt mit dem am Ende des vorherigen Abschnitts beschriebenen Verfahren erstellen.
   Aktualisieren Sie auch die `package.json` Datei mit der Zeile: `"type": "module"`, sodass sie ungefähr so aussehen wird:

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

2. Als nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen — kopieren Sie unsere Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einen Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, beachten Sie jedoch, dass solche Tools nicht gut mit JS/CSS funktionieren, die in die HTML-Datei eingebettet sind — Sie benötigen separate Dateien.
3. Installieren Sie gulp global (das bedeutet, es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als nächstes den folgenden Befehl innerhalb Ihres npm-Projektverzeichnis-Root aus, um gulp als Projektabhängigkeit einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Platzieren Sie in dieser Datei Folgendes:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts weiter tut, als eine Nachricht im Terminal auszugeben — das ist nützlich, um zu wissen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default` Anweisung durch eine nützlichere ersetzen.

   Jede Gulp-Aufgabe wird im selben grundlegenden Format exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter — einen Rückruf, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt:

   ```bash
   gulp
   ```

### Hinzufügen einiger realer Aufgaben zu Gulp

Jetzt sind wir bereit, weitere Aufgaben in unsere Gulp-Datei hinzuzufügen. Jedes Hinzufügen kann erfordern, dass Sie die `gulpfile.mjs` Datei auf folgende Weise ändern:

- Wenn wir Sie bitten, `import` Anweisungen hinzuzufügen, fügen Sie diese unter der vorhandenen `import` Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...` Anweisung hinzuzufügen, fügen Sie sie am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standardexport zu ändern, ändern Sie die `export default` Anweisung in der von uns angegebenen Weise.

So wächst Ihre `gulpfile.mjs` Datei:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun wollen. Ein vernünftiger Satz von Grundfunktionen zum Ausführen auf unserem Projekt umfasst:

- html-tidy, css-lint und js-hint, um häufige HTML/CSS/JS-Fehler zu linten und zu melden/zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur bei Bedarf Vendor-Präfixe hinzuzufügen (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um jede neue JavaScript-Syntaxfunktion in herkömmliche Syntax zu transpilen, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann die erforderlichen Abhängigkeiten oben in der `gulpfile.mjs` Datei angeben, dann Ihre Tests am Ende der Datei hinzufügen und zuletzt den Namen Ihrer Aufgabe exportieren, damit sie über den Gulp-Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem проект hinzu. Wenn Sie in Ihrer Projekt-`package.json` Datei nachsehen, werden Sie einen Eintrag dafür in der `devDependencies` Eigenschaft sehen.

2. Fügen Sie die folgende Abhängigkeit zur `gulpfile.mjs` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am unteren Ende von `gulpfile.mjs` hinzu:

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

Hier greifen wir mit `gulp.src()` auf unsere Entwicklungs-`index.html` Datei zu, was es uns ermöglicht, eine Quelldatei abzurufen, um etwas damit zu tun.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzugeben, der etwas anderes damit tut. Wir können so viele davon miteinander verketten, wie wir möchten. Wir führen zuerst `htmltidy()` auf der Quelle aus, was durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()` Funktion schreibt die Ausgabedatei ins `build` Verzeichnis.

In der Eingabedatei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}} Element eingefügt haben; htmltidy hat dies entfernt, bevor die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie es mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zur `gulpfile.mjs` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am unteren Ende von `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere `style.css` Datei zu, führen csslint darauf aus (was eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt), dann führen wir sie durch autoprefixer, um alle notwendigen Präfixe hinzuzufügen, um neue CSS-Funktionen in älteren Browsern auszuführen. Am Ende der Pipe-Kette geben wir unser modifiziertes, prefixed CSS ins `build` Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, einen geschweiften Klammer aus Ihrer CSS Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie es mit den folgenden Zeilen:

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

3. Fügen Sie den folgenden Test am unteren Ende von `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere `main.js` Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir übergeben dann die Datei an babel, das sie in eine alte Syntax umwandelt und das Ergebnis ins `build` Verzeichnis ausgibt. Unser originaler Code enthielt eine [fat arrow function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von babel in eine alte Funktionsweise umgewandelt wurde.

#### Weitere Ideen

Sobald alles eingerichtet ist, können Sie den `gulp` Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Zeilen die Zeit anzeigen, wann Aufgaben beginnen oder enden, den Namen der Aufgabe und die Dauer von 'Fertiggestellten' Aufgaben.](gulp-output.png)

Dann können Sie die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im `build` Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler feststellen, überprüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie isolieren können, wo das Problem liegt.

Gulp verfügt über eine `watch()` Funktion, mit der Sie Ihre Dateien beobachten und Tests immer dann ausführen können, wenn Sie eine Datei speichern. Zum Beispiel fügen Sie Folgendes am Ende Ihrer `gulpfile.mjs` hinzu:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den `gulp watch` Befehl in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wenn Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "führen Sie diese Aufgaben aus, wenn eine Datei dieses Typs gespeichert wird". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann piped Aufgaben auf ihnen ausführen.

Es gibt eine Menge mehr, was Sie mit Gulp machen können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir versuchen sicherlich nicht zu sagen, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist für Anfänger ziemlich zugänglich. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert sehr ähnlich wie Gulp, mit der Ausnahme, dass es sich auf Aufgaben stützt, die in einer Konfigurationsdatei angegeben sind, anstatt in geschriebenem JavaScript. Siehe [Erste Schritte mit Grunt für mehr Details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mithilfe von npm-Skripten in Ihrer `package.json` Datei ausführen, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Das funktioniert nach dem Prinzip, dass Gulp-Plugins im Grunde genommen Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie Sie die Tools über die Kommandozeile ausführen, können Sie sie mithilfe von npm-Skripten ausführen. Es ist ein bisschen schwieriger zu handhaben, kann aber lohnend sein für diejenigen, die stark mit ihren Kommandozeilenfähigkeiten sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Wenn Sie diese Art von Diensten verwenden, stellen Sie eine URL der Seite bereit, die Sie testen möchten, zusammen mit Informationen wie zum Beispiel, in welchen Browsern sie getestet werden soll. Die Anwendung konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und weitaus bequemer als die Einrichtung aller Kombinationen von Betriebssystemen und Browsern selbst durchzuführen.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um die Funktionalität programmatisch zu nutzen, was bedeutet, dass solche Apps mit Task-Runnern kombiniert werden können, wie Ihren eigenen lokalen Selenium-Umgebungen und anderen, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Systeme für Browser-Tests, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gut und einfach auch für Anfänger zu starten.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um loszulegen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie im oberen Navigationsmenü auf den _Live_-Link, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, das Gerät und den Browser auszuwählen, auf dem Sie testen möchten — Plattformen auf der linken Seite, Geräte auf der rechten Seite. Wählen Sie ein Gerät aus, um die auf diesem Gerät verfügbaren Browseroptionen zu sehen.

![Test Choices](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browsersymbole lädt Ihre Auswahl an Plattform, Gerät und Browser — wählen Sie jetzt eines aus und probieren Sie es aus.

![Test Devices](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten (zum Beispiel, Kneifen/Zoomen, Zwei-Finger-Scrollen) auf den Touchpads unterstützender Geräte wie MacBooks verwenden. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, das Ihnen ermöglicht, die Sitzung zu steuern.

![Test Menu](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerelemente beinhalten für:

- Anzeige von Informationen über den aktuellen Browser
- Umschalten zu anderen Browsern
- Testen von lokalen URLs
- Einstellen des Zoom-Levels und Umschalten der Orientierung
- Speichern und Laden von Lesezeichen
- Erfassen/Annotieren von Screenshots und Erstellen von Fehlerberichten
- Zugriff auf Browser DevTools
- Ändern der gemeldeten Position
- Drosseln des Netzwerks
- Zugriff auf Screenreader

#### Fortgeschritten: Die BrowserStack API

BrowserStack hat auch eine [RESTful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontoplanes, Sitzungen, Builds usw. abzurufen.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir mit Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z.B. `bstack-test`.
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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können von Ihren [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentication & Security_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Module, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt sehen, das in Ihrem Terminal ausgegeben wird und Ihre BrowserStack-Plandetails enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die Sie nützlich finden könnten, wenn Sie mit der BrowserStack RESTful API arbeiten.

Diese Funktion gibt zusammenfassende Details aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Wir werden im nächsten Artikel auf das [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) eingehen.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs Testkonto beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen. Stellen Sie vorerst sicher, dass Sie auf dem Tab _Manual Tests_ sind.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie zum Beispiel <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Browser/OS-Kombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt eine Menge Auswahl, wie Sie sehen werden!![select sauce manual session](sauce-manual-session.png)
3. Wenn Sie auf "Start session" klicken, erscheint ein Ladeschirm, der ein virtuelles Gerät mit der von Ihnen gewählten Kombination startet.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen.![Sauce test running](sauce-test-running.png)
5. Von hier aus können Sie das Layout sehen, wie es im Browser aussehen würde, den Sie testen, die Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das obere Menü ermöglicht es Ihnen:

   - Die Sitzung zu stoppen
   - Jemand anderem eine URL zu geben, damit er den Test remote beobachten kann.
   - Text/Notizen in die Zwischenablage zu kopieren.
   - Einen Screenshot zu machen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zum Tab Manuelle Tests zurück, wo Sie einen Eintrag für jede der vorherigen, von Ihnen gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten für die Sitzung angezeigt. Hier können Sie alle von Ihnen gemachten Screenshots herunterladen, ein Video der Sitzung anzeigen, Protokolldaten einsehen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und weit bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs verfügt über eine [RESTful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details wie ihrem Bestehen/Fehlschlagszustand zu versehen, die durch manuelle Tests allein nicht aufzeichnbar sind. Zum Beispiel könnten Sie einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es gibt mehrere Clients, die es Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z.B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projekt-Root mit dem Namen `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs Benutzernamen und Ihren API-Schlüssel in den angegebenen Leerstellen angeben. Diese können von Ihrer [Benutzereinstellungen-Seite](https://app.saucelabs.com/user-settings) abgerufen werden. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei folgendermaßen aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden im nächsten Artikel auf das eigentliche Ausführen automatisierter Sauce Labs Tests eingehen.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einem TestingBot Testkonto beginnen.

1. Erstellen Sie ein [TestingBot Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, aus denen Sie wählen können. Stellen Sie vorerst sicher, dass Sie auf dem Tab _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Test Choices](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladeschirm, der ein virtuelles Gerät mit der von Ihnen gewählten Kombination startet.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen.
5. Von hier aus können Sie das Layout sehen, wie es im Browser aussehen würde, den Sie testen, die Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht es Ihnen:

   - Die Sitzung zu stoppen
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in die Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung stoppen, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der vorherigen, von Ihnen gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten für die Sitzung angezeigt. Hier können Sie alle von Ihnen gemachten Screenshots herunterladen, ein Video des Tests ansehen und Protokolle der Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot API

TestingBot verfügt über eine [RESTful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details wie dem Bestehen/Fehlschlagen zu versehen, die allein mit manuellen Tests nicht erfassbar sind.

TestingBot bietet mehrere API-Clients, mit denen Sie mit der API interagieren können, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten ist ein Beispiel, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagiert.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z.B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projekt-Root mit dem Namen `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Key und Ihr Secret in den angegebenen Leerstellen angeben. Diese können im [TestingBot Dashboard](https://testingbot.com/members/user/edit) gefunden werden.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden im nächsten Artikel auf das eigentliche Ausführen automatisierter TestingBot Tests eingehen.

## Zusammenfassung

Das war eine ganz schöne Reise, aber ich bin sicher, Sie können die Vorteile der Verwendung von Automatisierungstools erkennen, um einige der schweren Aufgaben im Hinblick auf das Testen zu erledigen.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten, und wie wir dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
