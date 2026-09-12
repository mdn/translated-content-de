---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Das manuelle Ausführen von Tests in mehreren Browsern und auf mehreren Geräten, mehrmals am Tag, kann mühsam und zeitaufwendig werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungswerkzeugen vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie Task Runner verwendet werden und wie Sie die Grundlagen kommerzieller Anwendungen zur Browsertestautomatisierung wie Sauce Labs, BrowserStack und TestingBot nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des browserübergreifenden Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür vermitteln, was automatisiertes Testen umfasst, wie es Ihnen das Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die vieles vereinfachen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht vieles einfacher

In diesem Modul haben wir zahlreiche verschiedene Möglichkeiten erläutert, wie Sie Ihre Websites und Apps testen können, und den Umfang beschrieben, den Ihre Anstrengungen für browserübergreifendes Testen haben sollten: welche Browser getestet werden sollen, Überlegungen zur Barrierefreiheit und mehr. Das klingt nach viel Arbeit, oder?

Wir stimmen zu — all die Dinge, die wir in den vorherigen Artikeln betrachtet haben, manuell zu testen, kann wirklich mühsam sein. Glücklicherweise gibt es Werkzeuge, die uns helfen, einen Teil dieser Mühe zu automatisieren. Es gibt zwei Hauptmöglichkeiten, die Tests zu automatisieren, über die wir in diesem Modul gesprochen haben:

1. Verwenden Sie einen Task Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um während Ihres Build-Prozesses Tests auszuführen und Code zu bereinigen. Dies ist eine hervorragende Möglichkeit, Aufgaben wie Linting und Minimierung von Code, das Hinzufügen von CSS-Präfixen oder das Transpilieren neuer JavaScript-Funktionen für maximale browserübergreifende Reichweite und Ähnliches durchzuführen.
2. Verwenden Sie ein Browserautomatisierungssystem wie [Selenium](https://www.selenium.dev/), um bestimmte Tests in installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern aufmerksam machen, sobald diese auftreten. Kommerzielle Apps für browserübergreifendes Testen wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Fernzugriff auf ihre Einrichtung über eine Benutzeroberfläche und ersparen Ihnen so den Aufwand, ein eigenes Testsystem einzurichten.

Im nächsten Artikel sehen wir uns an, wie Sie ein eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel betrachten wir, wie Sie einen Task Runner einrichten und die grundlegende Funktionalität kommerzieller Systeme wie der oben genannten verwenden.

> [!NOTE]
> Die beiden oben genannten Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task Runner so einzurichten, dass er über eine API auf einen Dienst wie Sauce Labs zugreift, browserübergreifende Tests ausführt und Ergebnisse zurückgibt. Dies werden wir ebenfalls weiter unten betrachten.

## Testwerkzeuge mit einem Task Runner automatisieren

Wie wir oben gesagt haben, können Sie häufige Aufgaben wie das Linten und Minimieren von Code drastisch beschleunigen, indem Sie einen Task Runner verwenden, der alles Nötige zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess automatisch ausführt. Dies könnte beispielsweise jedes Mal geschehen, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt sehen wir uns an, wie sich die Ausführung von Aufgaben mit Node und Gulp automatisieren lässt — eine einsteigerfreundliche Option.

### Node und npm einrichten

Die meisten Werkzeuge basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem zugehörigen Paketmanager [`npm`](https://www.npmjs.com/) installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie dazu den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node).
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies können Sie tun, indem Sie den Node-Version-Manager verwenden, um die neuesten LTS-Versionen zu installieren (lesen Sie erneut die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist leicht.

Erstellen wir beispielsweise zunächst ein Testverzeichnis, damit wir ohne Angst, etwas kaputtzumachen, experimentieren können.

1. Erstellen Sie mithilfe der Benutzeroberfläche Ihres Dateimanagers ein neues Verzeichnis an einem geeigneten Ort oder navigieren Sie in der Kommandozeile zum gewünschten Ort und führen Sie den folgenden Befehl aus:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie lediglich in Ihr Testverzeichnis wechseln und es mit dem Folgenden initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die für die Einrichtung des Projekts benötigten Informationen zu ermitteln; Sie können vorerst einfach die Standardwerte auswählen.
4. Nachdem alle Fragen gestellt wurden, werden Sie gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie die Eingabetaste; npm erstellt dann eine Datei `package.json` in Ihrem Verzeichnis.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst sieht sie etwa so aus:

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

Damit können Sie fortfahren.

### Gulp-Automatisierung einrichten

Sehen wir uns an, wie Gulp eingerichtet und zur Automatisierung einiger Testwerkzeuge verwendet wird.

1. Erstellen Sie zunächst mithilfe des am Ende des vorherigen Abschnitts beschriebenen Verfahrens ein Test-npm-Projekt.
   Aktualisieren Sie außerdem die Datei `package.json` mit der Zeile `"type": "module"`, sodass sie etwa so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, an denen Sie Ihr System testen können — kopieren Sie unsere Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einen Unterordner namens `src` innerhalb Ihres Projektordners.
   Sie können bei Bedarf eigene Testinhalte ausprobieren, bedenken Sie jedoch, dass solche Werkzeuge nicht gut mit in der HTML-Datei eingebettetem JS/CSS funktionieren — Sie benötigen separate Dateien.
3. Installieren Sie gulp global (das heißt, es wird projektübergreifend verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie anschließend den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun in Ihrem Projektverzeichnis eine neue Datei namens `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Fügen Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dadurch wird das zuvor installierte Modul `gulp` benötigt, und anschließend wird eine Standardaufgabe exportiert, die lediglich eine Nachricht im Terminal ausgibt — dies ist nützlich, um uns mitzuteilen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese Anweisung `export default` in etwas Nützlicheres ändern.

   Jede gulp-Aufgabe wird im selben grundlegenden Format exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter entgegen — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Echte Aufgaben zu Gulp hinzufügen

Jetzt können wir unserer Gulp-Datei weitere Aufgaben hinzufügen. Jede Ergänzung kann erfordern, dass Sie die Datei `gulpfile.mjs` wie folgt ändern:

- Wenn wir Sie auffordern, einige `import`-Anweisungen hinzuzufügen, fügen Sie sie unterhalb der vorhandenen `import`-Anweisung hinzu.
- Wenn wir Sie auffordern, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie sie am Ende der Datei hinzu.
- Wenn wir Sie auffordern, den Standardexport zu ändern, ändern Sie die Anweisung `export default` auf die von uns angegebene Weise.

Ihre Datei `gulpfile.mjs` wächst also wie folgt:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um Gulp einige echte Aufgaben hinzuzufügen, müssen wir überlegen, was wir tun möchten. Eine sinnvolle Gruppe grundlegender Funktionalitäten für unser Projekt ist:

- html-tidy, css-lint und js-hint zum Linten sowie Melden/Beheben häufiger HTML/CSS/JS-Fehler (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu durchsuchen und Vendor-Präfixe nur dort hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntaxfunktionen in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Vollständige Anweisungen zu den verschiedenen verwendeten gulp-Paketen finden Sie unter den obigen Links.

Um jedes Plugin zu verwenden, müssen Sie es zunächst über npm installieren, dann alle Abhängigkeiten am Anfang der Datei `gulpfile.mjs` importieren, anschließend Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit er über den Befehl von gulp verfügbar ist.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die Datei `package.json` Ihres Projekts schauen, sehen Sie dafür einen Eintrag in der Eigenschaft `devDependencies`.

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

Hier rufen wir mit `gulp.src()` unsere Entwicklungsdatei `index.html` ab, wodurch wir eine Quelldatei abrufen können, mit der etwas durchgeführt werden soll.

Als Nächstes verwenden wir die Funktion `pipe()`, um diese Quelle an einen weiteren Befehl zu übergeben, der etwas anderes damit ausführt. Wir können beliebig viele davon verketten. Zuerst führen wir `htmltidy()` auf der Quelle aus, wodurch die Datei durchlaufen und Fehler darin behoben werden. Die zweite Funktion `pipe()` schreibt die ausgegebene HTML-Datei in das Verzeichnis `build`.

In der Eingabeversion der Datei haben Sie möglicherweise bemerkt, dass wir ein leeres Element {{htmlelement("p")}} eingefügt haben; htmltidy hat dieses entfernt, bevor die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie sie mit den folgenden Zeilen:

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

Hier rufen wir unsere Datei `style.css` ab, führen csslint darauf aus (wodurch eine Liste aller Fehler in Ihrem CSS im Terminal ausgegeben wird) und leiten sie anschließend durch autoprefixer, um alle Präfixe hinzuzufügen, die erforderlich sind, damit neue CSS-Funktionen in älteren Browsern funktionieren. Am Ende der `pipe`-Kette geben wir unser geändertes CSS mit Präfixen im Verzeichnis `build` aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie sie mit den folgenden Zeilen:

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

Hier rufen wir unsere Datei `main.js` ab, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; anschließend übergeben wir die Datei an babel, das sie in Syntax im alten Stil umwandelt und das Ergebnis im Verzeichnis `build` ausgibt. Unser ursprünglicher Code enthielt eine [Fat-Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine Funktion im alten Stil geändert hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den Befehl `gulp` in Ihrem Projektverzeichnis ausführen und sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in der Zeilen die Uhrzeit, zu der Aufgaben starten oder enden, den Namen der Aufgabe und die Dauer abgeschlossener Aufgaben anzeigen.](gulp-output.png)

Anschließend können Sie die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im Verzeichnis `build` ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben dargestellt hinzugefügt haben. Versuchen Sie außerdem, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und gulp dann erneut auszuführen, um zu sehen, ob Sie das Problem eingrenzen können.

Gulp verfügt über eine Funktion `watch()`, mit der Sie Ihre Dateien überwachen und Tests ausführen können, wenn Sie eine Datei speichern. Versuchen Sie beispielsweise, Folgendes am Ende Ihrer Datei `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihrem Terminal einzugeben. Gulp überwacht nun Ihr Verzeichnis und führt die entsprechenden Aufgaben aus, wenn Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalterzeichen — hier sagen wir: „Führe diese Aufgaben aus, wenn beliebige Dateien dieser Typen gespeichert werden.“ Sie könnten Platzhalter auch in Ihren Hauptaufgaben verwenden; beispielsweise würde `gulp.src('src/*.css')` alle Ihre CSS-Dateien abrufen und dann `pipe`-Aufgaben darauf ausführen.

Mit Gulp können Sie noch viel mehr tun. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, die Sie durchsuchen können.

### Andere Task Runner

Es sind viele andere Task Runner verfügbar. Wir wollen keineswegs behaupten, dass Gulp die beste verfügbare Lösung ist, aber es funktioniert für uns und ist für Einsteiger recht zugänglich. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert Gulp sehr ähnlich, mit dem Unterschied, dass es auf in einer Konfigurationsdatei angegebenen Aufgaben basiert, statt geschriebenes JavaScript zu verwenden. Weitere Details finden Sie unter [Getting started with Grunt.](https://gruntjs.com/getting-started)
- Sie können Aufgaben auch direkt über npm scripts ausführen, die sich in Ihrer Datei `package.json` befinden, ohne irgendein zusätzliches Task-Runner-System installieren zu müssen. Dies beruht auf der Annahme, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Kommandozeilenwerkzeuge sind. Wenn Sie also herausfinden können, wie die Werkzeuge über die Kommandozeile ausgeführt werden, können Sie sie anschließend mit npm scripts ausführen. Damit zu arbeiten ist etwas schwieriger, kann sich aber für Personen mit guten Kommandozeilenkenntnissen lohnen. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiterführenden Informationen.

## Kommerzielle Testdienste verwenden, um Browsertests zu beschleunigen

Sehen wir uns nun kommerzielle Browsertestdienste von Drittanbietern an und was sie für uns leisten können.

Wenn Sie solche Dienste verwenden, geben Sie eine URL der zu testenden Seite sowie Informationen an, etwa in welchen Browsern sie getestet werden soll. Die Anwendung konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und wesentlich bequemer, als alle Betriebssystem-/Browser-Kombinationen selbst einrichten zu müssen.

Sie können anschließend einen Gang höher schalten und über eine API programmgesteuert auf Funktionen zugreifen. Das bedeutet, dass solche Anwendungen mit Task Runnern, Ihren eigenen lokalen Selenium-Umgebungen und anderen Werkzeugen kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt weitere kommerzielle Browsertestsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir behaupten nicht, dass dies unbedingt die besten verfügbaren Werkzeuge sind, aber es sind gute Werkzeuge, die sich für Einsteiger einfach einrichten und verwenden lassen.

### BrowserStack

#### Mit BrowserStack beginnen

So beginnen Sie:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch erfolgen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.
3. Klicken Sie im oberen Navigationsmenü auf den Link _Live_, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Über das BrowserStack-Live-Dashboard können Sie die Plattform, das Gerät und den Browser auswählen, auf denen Sie testen möchten.
Für Desktop-Tests wählen Sie Betriebssystem und Browser direkt aus.
Bei Mobilgeräten wählen Sie das mobile Betriebssystem und das Gerät aus und können anschließend einen Browser für Ihre Geräte-Browser-Kombination auswählen.

![Testauswahl](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browser-Symbole klicken, wird Ihre ausgewählte Plattform-, Geräte- und Browserkombination geladen — wählen Sie jetzt eine aus und probieren Sie sie aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, durch Ziehen mit der Maus nach oben und unten scrollen und auf den Touchpads unterstützter Geräte wie MacBooks passende Gesten verwenden, beispielsweise Auf-/Zuziehen zum Vergrößern/Verkleinern oder Scrollen mit zwei Fingern.

Die verfügbaren Funktionen variieren je nachdem, welcher Browser geladen ist, und können Steuerelemente für Folgendes umfassen:

- Informationen über den aktuellen Browser anzeigen
- Zu anderen Browsern wechseln
- localhost-URLs testen
- Zoomstufe festlegen und Ausrichtung umschalten
- Lesezeichen speichern und laden
- Screenshots aufnehmen/annotieren und Fehlerberichte erstellen
- Auf Browser-DevTools zugreifen
- Den gemeldeten Standort ändern
- Das Netzwerk drosseln
- Auf Screenreader zugreifen

![Testmenü](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der Dokumentation zu [BrowserStack Live](https://www.browserstack.com/docs/live).

#### Erweitert: Die BrowserStack-API

BrowserStack verfügt außerdem über eine [RESTful-API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), mit der Sie Details Ihres Kontotarifs, Ihrer Sitzungen, Builds usw. programmgesteuert abrufen können.

Sehen wir uns kurz an, wie wir über Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `bstack-test`.
2. Erstellen Sie im Stammverzeichnis Ihres Projekts eine neue Datei namens `call_bstack.js` und geben Sie ihr folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und Access Key durch Ihre tatsächlichen Werte. Sie können diese in Ihren [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) im Abschnitt _Authentication & Security_ abrufen.
4. Installieren Sie das im Code zum Senden von HTTP-Anfragen verwendete Modul [axios](https://www.npmjs.com/package/axios), indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios ausgewählt, weil es einfach, beliebt und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Im Terminal sollte ein Objekt ausgegeben werden, das Details Ihres BrowserStack-Tarifs enthält.

   ```bash
   node call_bstack
   ```

Nachfolgend stellen wir außerdem einige weitere fertige Funktionen bereit, die Sie bei der Arbeit mit der BrowserStack-RESTful-API möglicherweise nützlich finden.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [Details zu automatisierten BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

#### Erweitert: Automatisierte Tests

Im nächsten Artikel behandeln wir das [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack).

### Sauce Labs

#### Mit Sauce Labs beginnen

Beginnen wir mit einer Sauce-Labs-Testversion.

1. Erstellen Sie ein Sauce-Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch erfolgen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelles Testen

Das [Sauce-Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen.
Folgen Sie nach der Anmeldung dem Leitfaden „Getting started“ oben links auf der Seite:

1. Klicken Sie unter „Run your first test“ auf _Desktop browser_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten, beispielsweise diese Seite. Wählen Sie dann mithilfe der verschiedenen Schaltflächen und Listen eine Browser-/Betriebssystem-Kombination aus, die Sie testen möchten.
   Wie Sie sehen werden, gibt es eine große Auswahl!
   ![Manuelle Sauce-Sitzung auswählen](sauce-manual-session.png)
3. Wenn Sie mit dem Testen beginnen, erscheint ein Ladebildschirm und eine Umgebung wird mit der von Ihnen gewählten Geräte-/Browser-Kombination gestartet.
   Anschließend können Sie die im gewählten Browser laufende Website per Fernzugriff testen.

An diesem Punkt können Sie recht viel tun, etwa eine Test-URL teilen, damit jemand anderes den Test aus der Ferne beobachten kann, Text/Notizen in eine Remote-Zwischenablage kopieren, einen Screenshot erstellen, im Vollbildmodus testen und vieles mehr.

Nachdem Sie die Sitzung beendet haben, kehren Sie zum Tab _Live_ zurück, in dem Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen.
Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten für die Sitzung angezeigt.
Hier können Sie aufgenommene Screenshots herunterladen, ein Video der Sitzung ansehen, Datenprotokolle einsehen und mehr.
Dies ist bereits sehr nützlich und viel bequemer, als mehrere Emulatoren und virtuelle Maschinen selbst einrichten zu müssen.

Weitere Informationen finden Sie in der [Sauce-Labs-Dokumentation](https://docs.saucelabs.com/).

#### Erweitert: Die Sauce-Labs-API

Sauce Labs verfügt über eine [RESTful-API](https://docs.saucelabs.com/dev/api/), mit der Sie Details Ihres Kontos und vorhandener Tests programmgesteuert abrufen und Tests mit weiteren Details annotieren können, etwa ihrem Bestanden-/Fehlgeschlagen-Status, der nicht allein durch manuelles Testen erfasst werden kann. Beispielsweise möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests per Fernzugriff mit Sauce Labs ausführen, um eine bestimmte Browser-/Betriebssystem-Kombination zu testen, und die Testergebnisse dann an Sauce Labs zurückgeben.

Es stehen mehrere Clients zur Verfügung, mit denen Sie API-Aufrufe über Ihre bevorzugte Umgebung tätigen können, sei es PHP, Java, Node.js usw.

Sehen wir uns kurz an, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `sauce-test`.
2. Installieren Sie den Node-Sauce-Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie im Stammverzeichnis Ihres Projekts eine neue Datei namens `call_sauce.js`. Geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren Sauce-Labs-Benutzernamen und API-Schlüssel an den angegebenen Stellen eintragen. Diese können Sie auf Ihrer Seite [User Settings](https://app.saucelabs.com/user-settings) abrufen. Tragen Sie sie jetzt ein.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Erweitert: Automatisierte Tests

Im nächsten Artikel behandeln wir das tatsächliche Ausführen automatisierter Sauce-Lab-Tests.

### TestingBot

#### Mit TestingBot beginnen

Beginnen wir mit einer TestingBot-Testversion.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch erfolgen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, aus denen Sie wählen können. Stellen Sie zunächst sicher, dass Sie sich auf dem Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/Betriebssystem-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination startet.
4. Nachdem der Ladevorgang abgeschlossen ist, können Sie die im gewählten Browser laufende Website per Fernzugriff testen.
5. Von hier aus können Sie das Layout so sehen, wie es im getesteten Browser aussehen würde, die Maus bewegen und beispielsweise versuchen, Schaltflächen anzuklicken. Über das Seitenmenü können Sie:
   - Die Sitzung beenden
   - Die Bildschirmauflösung ändern
   - Text/Notizen in eine Remote-Zwischenablage kopieren
   - Screenshots erstellen, bearbeiten und herunterladen
   - Im Vollbildmodus testen.

Nachdem Sie die Sitzung beendet haben, kehren Sie zur Seite _Live Web Testing_ zurück, auf der Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten für die Sitzung angezeigt. Hier können Sie aufgenommene Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung einsehen.

#### Erweitert: Die TestingBot-API

TestingBot verfügt über eine [RESTful-API](https://testingbot.com/support/api/), mit der Sie Details Ihres Kontos und vorhandener Tests programmgesteuert abrufen und Tests mit weiteren Details annotieren können, etwa ihrem Bestanden-/Fehlgeschlagen-Status, der nicht allein durch manuelles Testen erfasst werden kann.

TestingBot verfügt über mehrere API-Clients, mit denen Sie mit der API interagieren können, einschließlich Clients für Node.js, Python, Ruby, Java und PHP.

Nachfolgend finden Sie ein Beispiel dafür, wie Sie über den Node.js-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren können.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `tb-test`.
2. Installieren Sie den Node-TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie im Stammverzeichnis Ihres Projekts eine neue Datei namens `tb.js`. Geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Key und Ihr Secret an den angegebenen Stellen eintragen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Erweitert: Automatisierte Tests

Im nächsten Artikel behandeln wir das tatsächliche Ausführen automatisierter TestingBot-Tests.

## Zusammenfassung

Das war eine ganze Menge, aber Sie können sicherlich beginnen, die Vorteile von Automatisierungswerkzeugen zu erkennen, die beim Testen einen Teil der aufwendigen Arbeit übernehmen.

Im nächsten Artikel sehen wir uns an, wie wir ein eigenes lokales Automatisierungssystem mit Selenium einrichten und wie dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert werden kann.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
