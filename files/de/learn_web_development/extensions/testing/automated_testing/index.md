---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Das manuelle Ausführen von Tests in mehreren Browsern und auf verschiedenen Geräten, mehrmals täglich, kann mühsam und zeitintensiv werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungswerkzeugen vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task Runner verwendet und wie man die Grundlagen kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot einsetzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung von den grundsätzlichen <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu bieten, was automatisiertes Testen beinhaltet, wie es Ihr Leben einfacher machen kann und wie Sie einige der kommerziellen Produkte nutzen können, die die Dinge erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht die Dinge einfacher

In diesem Modul haben wir viele verschiedene Möglichkeiten detailliert beschrieben, wie Sie Ihre Webseiten und Apps testen können, und erläutert, welchen Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf die zu testenden Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — all die Dinge, die wir in vorherigen Artikeln behandelt haben, manuell zu testen, kann wirklich mühsam sein. Glücklicherweise gibt es Werkzeuge, die uns helfen, einen Teil dieser Mühe wegzuautomatisieren. Es gibt zwei Hauptwege, wie wir die in diesem Modul besprochenen Tests automatisieren können:

1. Verwenden Sie einen Task Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifying von Code durchzuführen, CSS-Präfixe hinzuzufügen oder neue JavaScript-Features für maximale Cross-Browser-Reichweite zu transpilen, und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern durchzuführen und Ergebnisse zurückzugeben, indem Sie auf Fehler in Browsern hinweisen, wenn sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen es Ihnen jedoch, ihre Einrichtung remote über eine Schnittstelle zu nutzen, wodurch Sie sich die Mühe der Einrichtung eines eigenen Testsystems ersparen.

Wir betrachten, wie Sie Ihr eigenes Selenium-basiertes Testsystem im nächsten Artikel einrichten können. In diesem Artikel schauen wir uns an, wie Sie einen Task Runner einrichten und die grundlegende Funktionalität kommerzieller Systeme wie der oben genannten nutzen können.

> [!NOTE]
> Die obigen beiden Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task Runner so einzurichten, dass er über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zugreift, Cross-Browser-Tests durchführt und Ergebnisse zurückgibt. Wir werden dies unten auch betrachten.

## Verwendung eines Task Runners zur Automatisierung von Testwerkzeugen

Wie oben erwähnt, können Sie mit einem Task Runner die gängigen Aufgaben wie Linting und Minifying von Code erheblich beschleunigen, indem Sie alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess ausführen lassen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir uns ansehen, wie man die Task-Ausführung mit Node und Gulp automatisiert, eine einsteigerfreundliche Option.

### Einrichten von Node und npm

Die meisten Werkzeuge basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Paketmanager-Gegenstück, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Befolgen Sie die Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie zuvor Node.js/`npm` installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies kann durch Verwendung des Node-Version-Managers zur Installation der neuesten LTS-Versionen geschehen (verweisen Sie erneut auf die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Erstellen wir zum Beispiel zunächst ein Testverzeichnis, um ohne Angst vor Zerstörung etwas ausprobieren zu können.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrer Dateimanager-Oberfläche oder auf der Befehlszeile, indem Sie zu dem gewünschten Ort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es initialisieren, mit dem folgenden Befehl:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen viele Fragen, um die zur Einrichtung des Projekts erforderlichen Informationen zu erhalten; Sie können vorerst einfach die Standardeinstellungen auswählen.
4. Sobald alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Tippen Sie `yes` und drücken Sie Enter/Return und npm generiert eine `package.json`-Datei in Ihrem Verzeichnis.

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

### Einrichten von Gulp-Automatisierung

Schauen wir uns an, wie man Gulp einrichtet und es benutzt, um einige Testwerkzeuge zu automatisieren.

1. Erstellen Sie zunächst ein Test-npm-Projekt mit dem im vorherigen Abschnitt beschriebenen Verfahren.
   Aktualisieren Sie außerdem die `package.json`-Datei mit der Zeile: `"type": "module"`, damit es in etwa so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System darauf zu testen — erstellen Sie Kopien unserer Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js), und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, aber bedenken Sie, dass solche Werkzeuge nicht gut mit JS/CSS funktionieren, das inline in der HTML-Datei ist — Sie benötigen separate Dateien.
3. Installieren Sie gulp global (das bedeutet, es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Setzen Sie in diese Datei Folgendes:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte Modul `gulp` und exportiert dann eine Standardaufgabe, die nichts weiter tut, als eine Nachricht im Terminal anzuzeigen — dies ist nützlich, um zu wissen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung in etwas Nützlicheres ändern.

   Jede Gulp-Aufgabe wird im gleichen Basisformat exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter an — einen Rückruf, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe Ihres Gulp mit dem folgenden Befehl ausführen — probieren Sie das jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen von echten Aufgaben zu Gulp

Jetzt sind wir bereit, weitere Aufgaben in unsere Gulp-Datei hinzuzufügen. Jede Ergänzung kann erfordern, dass Sie die Datei `gulpfile.mjs` auf folgende Weise ändern:

- Wenn wir Sie bitten, einige `import`-Anweisungen hinzuzufügen, fügen Sie sie unter der vorhandenen `import`-Anweisung hinzu.
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

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun wollen. Ein vernünftiger Satz grundlegender Funktionen, die wir in unserem Projekt ausführen können, ist wie folgt:

- html-tidy, css-lint und js-hint, um gängige HTML/CSS/JS-Fehler zu linten und zu berichten/beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und Anbietervorsätze nur dort hinzuzufügen, wo nötig (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntaxfeatures in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Sehen Sie sich die oben verlinkten Anweisungen für vollständige Informationen zu den verschiedenen verwendeten Gulp-Paketen an.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der Datei `gulpfile.mjs` anfordern, dann Ihre Tests unten in der Datei hinzufügen und schließlich den Namen Ihrer Aufgabe für Gulp exportieren, damit es über den Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie den folgenden Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in der `package.json`-Datei Ihres Projekts nachsehen, werden Sie einen Eintrag dafür in der Eigenschaft `devDependencies` sehen.

2. Fügen Sie die folgende Abhängigkeit zu `gulpfile.mjs` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am Ende der Datei `gulpfile.mjs` hinzu:

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

Hier greifen wir unsere Entwicklungsdatei `index.html` mit `gulp.src()` ab, was es uns ermöglicht, eine Quelldatei zu erfassen, um etwas damit zu machen.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzuleiten, um etwas anderes damit zu machen. Wir können so viele davon verknüpfen, wie wir möchten. Wir führen zuerst `htmltidy()` auf der Quelle aus, das durchgeht und Fehler in unserer Datei behebt. Die zweite Funktion `pipe()` schreibt die Ausgabe-HTML-Datei in das Verzeichnis `build`.

In der Eingangsversion der Datei haben Sie möglicherweise bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat diese entfernt, als die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie die folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.mjs` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende der Datei `gulpfile.mjs` hinzu:

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

Hier greifen wir unsere Datei `style.css` ab, führen `csslint` darauf aus (was eine Liste von Fehlern in Ihrem CSS im Terminal ausgibt), und dann durchlaufen wir es durch `autoprefixer`, um alle erforderlichen Präfixe hinzuzufügen, damit neue CSS-Features in älteren Browsern laufen. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS in das Verzeichnis `build` aus. Beachten Sie, dass dies nur funktioniert, wenn `csslint` keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und `gulp` erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie die folgenden Zeilen:

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

3. Fügen Sie den folgenden Test am Ende der Datei `gulpfile.mjs` hinzu:

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

Hier greifen wir unsere Datei `main.js` ab, führen `jshint` darauf aus und geben die Ergebnisse über `jshint.reporter` im Terminal aus; dann übergeben wir die Datei an `babel`, das sie in alte Syntax umwandelt und das Ergebnis in das Verzeichnis `build` ausgibt. Unser ursprünglicher Code enthielt eine [fette Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von `babel` in eine alte Funktionssyntax geändert wurde.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den Befehl `gulp` in Ihrem Projektverzeichnis ausführen und eine Ausgabe wie diese erhalten:

![Output in einem Code-Editor, in dem Zeilen die Zeit, den Namen der Aufgabe und die Dauer von 'Fertiggestellten' Aufgaben zeigen.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebene Dateien ausprobieren, indem Sie sie im Verzeichnis `build` ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann `gulp` erneut auszuführen, um zu sehen, ob Sie herausfinden können, was das Problem ist.

Gulp wird mit einer Funktion `watch()` geliefert, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests durchzuführen, wann immer Sie eine Datei speichern. Versuchen Sie zum Beispiel, das Folgende am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird jetzt Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn Dateien diesen Typs gespeichert werden. Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann Aufgaben darauf ausführen, die gepipet sind.

Mit Gulp können Sie noch viel mehr machen. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Task Runner

Es gibt viele andere Task Runner. Wir behaupten sicherlich nicht, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist relativ zugänglich für Anfänger. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert auf sehr ähnliche Weise wie Gulp, mit dem Unterschied, dass es auf Aufgaben angewiesen ist, die in einer Konfigurationsdatei anstelle von geschriebenem JavaScript spezifiziert sind. Weitere Einzelheiten finden Sie unter [Loslegen mit Grunt](https://gruntjs.com/getting-started).
- Sie können auch Aufgaben direkt mit npm-Skripten aus Ihrer `package.json`-Datei ausführen, ohne dass ein zusätzliches Task-Runner-System installiert werden muss. Dies funktioniert nach dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde genommen Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie Sie die Tools über die Kommandozeile ausführen, können Sie sie über npm-Skripte ausführen. Es ist ein wenig schwieriger zu arbeiten, aber kann für diejenigen, die stark in ihren Kommandozeilenfähigkeiten sind, lohnend sein. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Menge weiterer Informationen.

## Nutzung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Testdienste von Drittanbietern an und welche Vorteile sie für uns bieten können.

Wenn Sie diese Art von Dienstleistungen nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen wie den gewünschten Browsern, in denen getestet werden soll. Die App konfiguriert dann eine neue VM mit dem von Ihnen spezifizierten Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Das ist sehr nützlich und viel bequemer, als alle Betriebssystem-/Browserkombinationen selbst einrichten zu müssen.

Danach können Sie eine Stufe höher gehen, indem Sie eine API verwenden, um die Funktionalität programmgesteuert zu nutzen, was bedeutet, dass solche Apps mit Task Runnern wie Ihren eigenen lokalen Selenium-Umgebungen und anderen kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute, die einfach für Anfänger einzurichten sind.

### BrowserStack

#### Einstieg in BrowserStack

Um loszulegen:

1. Erstellen Sie ein [BrowserStack Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live Dashboard ermöglicht es Ihnen, die Plattform, das Gerät und den Browser auszuwählen, auf dem Sie testen möchten.
Für Desktop-Tests wählen Sie das Betriebssystem und den Browser direkt aus.
Für mobile Geräte wählen Sie das mobile Betriebssystem, das Gerät und dann können Sie einen Browser für Ihre Geräte-Browser-Kombination wählen.

![Test Choices](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browsersymbole lädt Ihre Auswahl an Plattform, Gerät und Browser — wählen Sie jetzt eine aus und probieren Sie es aus.

![Test Devices](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, indem Sie mit der Maus nach oben und unten scrollen und entsprechende Gesten (zum Beispiel Pinch/Zoom, zwei Finger zum Scrollen) auf Touchpads von unterstützten Geräten wie MacBooks verwenden.

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Folgendes umfassen:

- Anzeigen von Informationen zum aktuellen Browser
- Wechseln zu anderen Browsern
- Testen von localhost-URLs
- Festlegen des Zoom-Levels und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Erfassen/Annotieren von Screenshots und Einreichen von Fehlerberichten
- Zugriff auf die Entwicklertools des Browsers
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleser

![Test Menu](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der [BrowserStack Live](https://www.browserstack.com/docs/live)-Dokumentation.

#### Fortgeschritten: Die BrowserStack-API

BrowserStack hat auch eine [RESTful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), mit der Sie programmgesteuert Details Ihres Kontos, Sitzungen, Builds usw. abrufen können.

Werfen wir einen kurzen Blick darauf, wie wir mit Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt zum Testen ein, wie unter [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
2. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts namens `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können aus Ihren [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) abgerufen werden, im Abschnitt _Authentication & Security_.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben uns für axios entschieden, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Plan-Details enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere bereitgestellte Funktionen, die Sie nützlich finden könnten, wenn Sie mit der BrowserStack-RESTful-API arbeiten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (sehen Sie sich den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) an):

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

Die folgende Funktion gibt Details zu einer bestimmten Sitzung zurück:

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

Wir werden [laufende automatisierte BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Einstieg in Sauce Labs

Lassen Sie uns mit einem Sauce Labs Testkonto beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelles Testen

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen.
Wenn Sie angemeldet sind, folgen Sie dem 'Getting started'-Leitfaden oben links auf der Seite:

1. Klicken Sie in "Run your first test" auf _Desktop browser_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (zum Beispiel diese Seite), und wählen Sie dann eine Browser-/OS-Kombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden.
   Sie haben viel zur Auswahl, wie Sie sehen werden!
   ![select sauce manual session](sauce-manual-session.png)
3. Wenn Sie mit dem Testen beginnen, erscheint ein Ladebildschirm und eine Umgebung mit der von Ihnen gewählten Geräte-/Browser-Kombination wird hochgefahren.
   Sie können dann beginnen, die im ausgewählten Browser laufende Website aus der Ferne zu testen.

An diesem Punkt können Sie ziemlich viel machen, wie z. B. eine Test-URL teilen, damit jemand anderes den Test aus der Ferne beobachten kann, Text/Notizen in eine entfernte Zwischenablage kopieren, einen Screenshot machen, im Vollbildmodus testen und mehr.

Nachdem Sie die Sitzung beendet haben, werden Sie zum _Live_-Tab zurückkehren, wo Sie einen Eintrag für jede der vorher begonnenen manuellen Sitzungen sehen.
Ein Klick auf einen dieser Einträge zeigt weitere Daten zur Sitzung.
Hier können Sie alle Screenshots, die Sie gemacht haben, herunterladen, ein Video der Sitzung ansehen, Datenprotokolle anzeigen und mehr.
Das ist bereits sehr nützlich und viel bequemer, als viele Emulatoren und virtuelle Maschinen selbst einrichten zu müssen.

Für mehr Informationen siehe die [Sauce Labs Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs hat eine [RESTful API](https://docs.saucelabs.com/dev/api/), mit der Sie programmgesteuert Details zu Ihrem Konto und bestehenden Tests abrufen und Tests mit weiteren Details wie ihrem Bestehen/Nichtbestehen-Zustand annotieren können, was durch manuelles Testen allein nicht aufgezeichnet werden kann. Beispielsweise könnten Sie einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser-/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es hat mehrere Clients zur Verfügung, die es Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung zu tätigen, sei es PHP, Java, Node.js, etc.

Sehen wir uns kurz an, wie wir die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) verwenden würden.

1. Richten Sie zunächst ein neues npm-Projekt zum Testen ein, wie unter [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts namens `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs Benutzernamen und API-Schlüssel in den angegebenen Stellen eintragen. Diese können Sie auf Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings)-Seite abrufen. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden tatsächlich das Ausführen automatisierter Sauce Labs Tests im nächsten Artikel behandeln.

### TestingBot

#### Einstieg in TestingBot

Lassen Sie uns mit einem TestingBot Testkonto starten.

1. Erstellen Sie ein [TestingBot Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, aus denen Sie wählen können. Stellen Sie sicher, dass Sie sich auf dem Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Test Choices](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Sobald das Laden abgeschlossen ist, können Sie die im ausgewählten Browser laufende Website remote testen.
5. Von hier aus können Sie das Layout sehen, wie es im Browser, den Sie testen, aussehen würde, die Maus bewegen und versuchen, Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht es Ihnen:
   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Nachdem Sie die Sitzung beendet haben, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede der vorher begonnenen manuellen Sitzungen sehen. Ein Klick auf einen dieser Einträge zeigt mehr Daten zur Sitzung. Hier können Sie alle Screenshots, die Sie gemacht haben, herunterladen, ein Video des Tests ansehen und Protokolle der Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [RESTful API](https://testingbot.com/support/api), mit der Sie programmgesteuert Details zu Ihrem Konto und bestehenden Tests abrufen und Tests mit weiteren Details wie ihrem Bestehen/Nichtbestehen-Zustand annotieren können, was durch manuelles Testen allein nicht aufgezeichnet werden kann.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagieren können.

1. Richten Sie zunächst ein neues npm-Projekt zum Testen ein, wie unter [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts namens `tb.js`. Geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und -Geheimnis in den angegebenen Stellen einfüllen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden im nächsten Artikel tatsächlich das Ausführen automatisierter TestingBot-Tests behandeln.

## Zusammenfassung

Das war eine ziemlich lange Reise, aber ich bin sicher, Sie können die Vorteile der Verwendung von Automatisierungswerkzeugen sehen, um einige der schweren Testarbeiten zu erledigen.

Im nächsten Artikel betrachten wir, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten können und wie Sie dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
