---
title: Einführung in automatisierte Tests
short-title: Automatisierte Tests
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Tests mehrmals täglich manuell in verschiedenen Browsern und auf verschiedenen Geräten auszuführen, kann mühsam und zeitaufwendig sein. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungswerkzeugen vertraut machen. In diesem Artikel sehen wir uns an, welche Werkzeuge verfügbar sind, wie Sie Task-Runner verwenden und wie Sie die grundlegenden Funktionen kommerzieller Anwendungen zur Automatisierung von Browsertests wie Sauce Labs, BrowserStack und TestingBot nutzen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        ein grundlegendes Verständnis der <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien browserübergreifender Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziel:</th>
      <td>
        Verstehen, was automatisierte Tests umfassen, wie sie Ihnen die Arbeit erleichtern können und wie Sie einige der kommerziellen Produkte einsetzen, die diese Arbeit vereinfachen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung erleichtert die Arbeit

In diesem Modul haben wir viele verschiedene Möglichkeiten beschrieben, Ihre Websites und Apps zu testen. Außerdem haben wir erläutert, welchen Umfang Ihre browserübergreifenden Tests hinsichtlich der zu testenden Browser, der Barrierefreiheit und weiterer Aspekte haben sollten. Das klingt nach viel Arbeit, nicht wahr?

Das finden wir auch – alles, was wir in den vorherigen Artikeln behandelt haben, manuell zu testen, kann sehr mühsam sein. Glücklicherweise gibt es Werkzeuge, mit denen sich ein Teil dieser Arbeit automatisieren lässt. Die Tests, die wir in diesem Modul besprochen haben, können wir hauptsächlich auf zwei Arten automatisieren:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um während des Build-Prozesses Tests auszuführen und Code zu bereinigen. Damit lassen sich beispielsweise Code linten und minimieren, CSS-Präfixe hinzufügen oder neue JavaScript-Funktionen für eine möglichst breite Browserunterstützung transpilen.
2. Verwenden Sie ein System zur Browserautomatisierung wie [Selenium](https://www.selenium.dev/), um bestimmte Tests in installierten Browsern auszuführen und Ergebnisse zurückzugeben. So werden Sie auf Fehler aufmerksam, sobald sie in Browsern auftreten. Kommerzielle Anwendungen für browserübergreifende Tests wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium. Sie ermöglichen Ihnen jedoch, über eine Benutzeroberfläche aus der Ferne auf ihre Testumgebung zuzugreifen. Dadurch müssen Sie kein eigenes Testsystem einrichten.

Wie Sie ein eigenes Selenium-basiertes Testsystem einrichten, sehen wir uns im nächsten Artikel an. In diesem Artikel behandeln wir die Einrichtung eines Task-Runners und die grundlegenden Funktionen kommerzieller Systeme wie der oben genannten.

> [!NOTE]
> Die beiden genannten Ansätze schließen sich nicht gegenseitig aus. Sie können einen Task-Runner so einrichten, dass er über eine API auf einen Dienst wie Sauce Labs zugreift, browserübergreifende Tests ausführt und Ergebnisse zurückgibt. Auch das sehen wir uns weiter unten an.

## Testwerkzeuge mit einem Task-Runner automatisieren

Wie bereits erwähnt, können Sie häufige Aufgaben wie das Linten und Minimieren von Code erheblich beschleunigen, indem Sie einen Task-Runner verwenden. Er führt alle erforderlichen Aufgaben automatisch zu einem bestimmten Zeitpunkt Ihres Build-Prozesses aus – beispielsweise jedes Mal, wenn Sie eine Datei speichern. In diesem Abschnitt sehen wir uns an, wie Sie Aufgaben mit Node und Gulp automatisieren. Gulp ist eine einsteigerfreundliche Option.

### Node und npm einrichten

Die meisten Werkzeuge basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}. Sie müssen daher Node.js und den zugehörigen Paketmanager [`npm`](https://www.npmjs.com/) installieren:

1. Am einfachsten lassen sich Node.js und `npm` mit einem Node-Versionsmanager installieren und aktualisieren. Folgen Sie dazu der Anleitung unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node).
2. [Überprüfen Sie, ob die Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie beide auf die neuesten Versionen aktualisieren. Dazu können Sie mit dem Node-Versionsmanager die neuesten LTS-Versionen installieren. Beachten Sie hierfür ebenfalls die oben verlinkte Anleitung.

Um Node-/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist unkompliziert.

Erstellen wir zunächst ein Testverzeichnis, in dem Sie experimentieren können, ohne befürchten zu müssen, etwas zu beschädigen.

1. Erstellen Sie mit Ihrem Dateimanager an einer geeigneten Stelle ein neues Verzeichnis. Alternativ können Sie in der Befehlszeile zum gewünschten Speicherort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, wechseln Sie in Ihr Testverzeichnis und initialisieren es mit folgendem Befehl:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen mehrere Fragen, um die für die Einrichtung des Projekts erforderlichen Informationen zu ermitteln. Sie können vorerst einfach die Standardwerte übernehmen.
4. Nach der letzten Frage werden Sie gefragt, ob die eingegebenen Informationen korrekt sind. Geben Sie `yes` ein und drücken Sie die Eingabetaste. npm erstellt daraufhin eine `package.json`-Datei in Ihrem Verzeichnis.

Diese Datei ist im Wesentlichen eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen. Vorerst sieht sie ungefähr so aus:

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

Sehen wir uns an, wie Sie Gulp einrichten und damit einige Testwerkzeuge automatisieren.

1. Erstellen Sie zunächst ein npm-Testprojekt wie am Ende des vorherigen Abschnitts beschrieben.
   Ergänzen Sie außerdem die Zeile `"type": "module"` in der Datei `package.json`, sodass sie ungefähr so aussieht:

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

2. Als Nächstes benötigen Sie HTML-, CSS- und JavaScript-Beispielinhalte, um Ihr System zu testen. Kopieren Sie unsere Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einen Unterordner namens `src` innerhalb Ihres Projektordners.
   Sie können auch eigene Testinhalte verwenden. Beachten Sie jedoch, dass solche Werkzeuge mit JS/CSS, das direkt in die HTML-Datei eingebettet ist, nicht gut funktionieren – Sie benötigen separate Dateien.
3. Installieren Sie gulp mit dem folgenden Befehl global, sodass es in allen Projekten verfügbar ist:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie anschließend im Stammverzeichnis Ihres npm-Projekts den folgenden Befehl aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun in Ihrem Projektverzeichnis eine Datei namens `gulpfile.mjs`. Diese Datei führt alle unsere Aufgaben aus. Fügen Sie folgenden Inhalt ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dadurch wird das zuvor installierte `gulp`-Modul eingebunden und eine Standardaufgabe exportiert. Sie gibt lediglich eine Meldung im Terminal aus. So können wir überprüfen, ob Gulp funktioniert. In den nächsten Abschnitten ersetzen wir diese `export default`-Anweisung durch etwas Nützlicheres.

   Jede gulp-Aufgabe wird grundsätzlich im selben Format exportiert: `exports function taskName(cb) {...}`. Jede Funktion erhält einen Parameter – einen Callback, der nach Abschluss der Aufgabe ausgeführt wird.

6. Mit dem folgenden Befehl können Sie die Standardaufgabe von gulp ausführen. Probieren Sie es jetzt aus:

   ```bash
   gulp
   ```

### Gulp um konkrete Aufgaben erweitern

Nun können wir unserer Gulp-Datei weitere Aufgaben hinzufügen. Dafür müssen Sie die Datei `gulpfile.mjs` gegebenenfalls wie folgt ändern:

- Wenn Sie `import`-Anweisungen hinzufügen sollen, setzen Sie diese unter die vorhandene `import`-Anweisung.
- Wenn Sie eine neue `export function ...`-Anweisung hinzufügen sollen, setzen Sie diese ans Ende der Datei.
- Wenn Sie den Standardexport ändern sollen, passen Sie die `export default`-Anweisung wie angegeben an.

Ihre Datei `gulpfile.mjs` wird also nach folgendem Muster wachsen:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um Gulp um konkrete Aufgaben zu erweitern, müssen wir zunächst überlegen, was wir erreichen möchten. Für unser Projekt bieten sich folgende grundlegende Funktionen an:

- html-tidy, css-lint und js-hint, um häufige HTML-/CSS-/JS-Fehler zu finden, zu melden oder zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu analysieren und nur dort Vendor-Präfixe hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntax in herkömmliche Syntax zu transpilen, die auch in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Vollständige Anleitungen zu den verschiedenen verwendeten gulp-Paketen finden Sie unter den obigen Links.

Um ein Plugin zu verwenden, installieren Sie es zunächst über npm. Binden Sie dann die benötigten Abhängigkeiten am Anfang der Datei `gulpfile.mjs` ein, fügen Sie Ihre Tests am Ende hinzu und exportieren Sie schließlich Ihre Aufgabe, damit sie über einen gulp-Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie das Paket mit folgendem Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket Ihrem Projekt als Entwicklungsabhängigkeit hinzu. In der Datei `package.json` Ihres Projekts sehen Sie dafür einen Eintrag unter `devDependencies`.

2. Fügen Sie `gulpfile.mjs` die folgende Abhängigkeit hinzu:

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

Hier lesen wir mit `gulp.src()` unsere `index.html`-Entwicklungsdatei ein, um sie weiterzuverarbeiten.

Anschließend verwenden wir die Funktion `pipe()`, um diese Quelldatei an einen weiteren Befehl zu übergeben. Wir können beliebig viele dieser Aufrufe aneinanderreihen. Zuerst führen wir `htmltidy()` für die Quelldatei aus, um Fehler darin zu beheben. Die zweite Funktion `pipe()` schreibt die resultierende HTML-Datei in das Verzeichnis `build`.

Vielleicht ist Ihnen aufgefallen, dass wir in die ursprüngliche Datei ein leeres {{htmlelement("p")}}-Element eingefügt haben. Beim Erstellen der Ausgabedatei hat htmltidy es entfernt.

#### Autoprefixer und css-lint

1. Installieren Sie die Pakete mit den folgenden Befehlen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie `gulpfile.mjs` die folgenden Abhängigkeiten hinzu:

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

4. Fügen Sie `package.json` die folgende Eigenschaft hinzu:

   ```json
   {
     "browserslist": ["last 5 versions"]
   }
   ```

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier lesen wir unsere Datei `style.css` ein und führen csslint dafür aus. Dadurch wird eine Liste etwaiger Fehler in Ihrem CSS im Terminal ausgegeben. Anschließend übergeben wir die Datei an autoprefixer, damit die nötigen Präfixe hinzugefügt werden und neue CSS-Funktionen auch in älteren Browsern funktionieren. Am Ende der `pipe()`-Kette schreiben wir das geänderte CSS mit seinen Präfixen in das Verzeichnis `build`. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet. Entfernen Sie testweise eine geschweifte Klammer aus Ihrer CSS-Datei und führen Sie gulp erneut aus, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie die Pakete mit den folgenden Befehlen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie `gulpfile.mjs` die folgenden Abhängigkeiten hinzu:

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

Hier lesen wir unsere Datei `main.js` ein, führen `jshint` dafür aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus. Anschließend übergeben wir die Datei an babel, das sie in ältere Syntax umwandelt und das Ergebnis in das Verzeichnis `build` schreibt. Unser ursprünglicher Code enthielt eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine herkömmliche Funktion umgewandelt hat.

#### Weitere Ideen

Wenn alles eingerichtet ist, können Sie den Befehl `gulp` in Ihrem Projektverzeichnis ausführen. Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor: Die Zeilen zeigen, wann Aufgaben beginnen oder enden, ihre Namen und die Dauer abgeschlossener Aufgaben.](gulp-output.png)

Anschließend können Sie die von Ihren automatisierten Aufgaben erzeugten Dateien im Verzeichnis `build` betrachten und `build/index.html` in Ihrem Webbrowser öffnen.

Wenn Fehler auftreten, überprüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben. Sie können auch die HTML-/CSS-/JavaScript-Codeabschnitte auskommentieren und gulp erneut ausführen, um das Problem einzugrenzen.

Gulp bietet eine Funktion `watch()`, mit der Sie Ihre Dateien überwachen und bei jedem Speichern einer Datei Tests ausführen können. Fügen Sie beispielsweise Folgendes am Ende Ihrer Datei `gulpfile.mjs` hinzu:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Geben Sie nun den Befehl `gulp watch` in Ihr Terminal ein. Gulp überwacht Ihr Verzeichnis und führt die entsprechenden Aufgaben aus, sobald Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalter. Hier bedeutet es: „Führe diese Aufgaben aus, wenn eine beliebige Datei eines dieser Typen gespeichert wird.“ Sie können Platzhalter auch in Ihren Hauptaufgaben verwenden. Beispielsweise würde `gulp.src('src/*.css')` alle Ihre CSS-Dateien einlesen, um anschließend die über `pipe()` verbundenen Aufgaben für sie auszuführen.

Mit Gulp können Sie noch viel mehr tun. Im [Verzeichnis der Gulp-Plugins](https://gulpjs.com/plugins/) finden Sie Tausende von Plugins.

### Andere Task-Runner

Es gibt viele weitere Task-Runner. Wir behaupten keineswegs, dass Gulp die beste Lösung ist. Für uns funktioniert es jedoch gut und es ist für Einsteiger recht zugänglich. Sie können auch andere Lösungen ausprobieren:

- Grunt funktioniert ähnlich wie Gulp. Allerdings verwendet es Aufgaben, die in einer Konfigurationsdatei festgelegt werden, statt direkt geschriebenen JavaScript-Code. Weitere Informationen finden Sie unter [Erste Schritte mit Grunt](https://gruntjs.com/getting-started).
- Sie können Aufgaben auch direkt mit npm-Skripten in Ihrer Datei `package.json` ausführen, ohne einen zusätzlichen Task-Runner installieren zu müssen. Dahinter steht die Überlegung, dass beispielsweise Gulp-Plugins im Grunde Wrapper für Befehlszeilenwerkzeuge sind. Wenn Sie wissen, wie Sie die Werkzeuge über die Befehlszeile ausführen, können Sie sie also auch mit npm-Skripten ausführen. Das ist etwas schwieriger, kann sich aber lohnen, wenn Sie sich gut mit der Befehlszeile auskennen. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung und viele weiterführende Informationen.

## Browsertests mit kommerziellen Testdiensten beschleunigen

Sehen wir uns nun kommerzielle Dienste von Drittanbietern für Browsertests an und was sie uns bieten.

Bei diesen Diensten geben Sie die URL der zu testenden Seite sowie Informationen wie die gewünschten Browser an. Die Anwendung richtet dann eine neue virtuelle Maschine mit dem angegebenen Betriebssystem und Browser ein und stellt die Testergebnisse als Screenshots, Videos, Logdateien, Text und Ähnliches bereit. Das ist sehr nützlich und deutlich bequemer, als alle Kombinationen aus Betriebssystem und Browser selbst einzurichten.

Sie können noch einen Schritt weitergehen und über eine API programmgesteuert auf die Funktionen zugreifen. So lassen sich solche Anwendungen mit Task-Runnern, Ihrer eigenen lokalen Selenium-Umgebung und anderen Werkzeugen kombinieren, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt weitere kommerzielle Systeme für Browsertests. In diesem Artikel konzentrieren wir uns jedoch auf BrowserStack, Sauce Labs und TestingBot. Wir behaupten nicht, dass diese unbedingt die besten verfügbaren Werkzeuge sind. Sie sind aber gute Optionen, mit denen Einsteiger unkompliziert loslegen können.

### BrowserStack

#### Erste Schritte mit BrowserStack

So legen Sie los:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Nach der Bestätigung Ihrer E-Mail-Adresse sollte dies automatisch geschehen.
3. Klicken Sie im oberen Navigationsmenü auf den Link _Live_, um zu Live Manual Testing zu gelangen.

#### Grundlagen: Manuelle Tests

Im BrowserStack-Live-Dashboard können Sie die Plattform, das Gerät und den Browser auswählen, auf denen Sie testen möchten.
Für Tests auf Desktop-Geräten wählen Sie das Betriebssystem und den Browser direkt aus.
Für Mobilgeräte wählen Sie zuerst das mobile Betriebssystem und das Gerät. Anschließend können Sie einen Browser für diese Geräte-Browser-Kombination auswählen.

![Auswahlmöglichkeiten für Tests](browserstack-test-choices-sized.png)

Wenn Sie auf eines der Browser-Symbole klicken, wird die ausgewählte Kombination aus Plattform, Gerät und Browser geladen. Wählen Sie jetzt eine Kombination aus und probieren Sie sie aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, durch Ziehen mit der Maus nach oben und unten scrollen und auf den Touchpads unterstützter Geräte wie MacBooks entsprechende Gesten verwenden, etwa zum Zoomen mit zwei Fingern oder zum Scrollen.

Die verfügbaren Funktionen hängen vom geladenen Browser ab. Dazu können Steuerelemente für Folgendes gehören:

- Informationen zum aktuellen Browser anzeigen
- Zu anderen Browsern wechseln
- Localhost-URLs testen
- Zoomstufe einstellen und Ausrichtung ändern
- Lesezeichen speichern und laden
- Screenshots aufnehmen und kommentieren sowie Fehlerberichte erstellen
- Auf die Browser-DevTools zugreifen
- Den gemeldeten Standort ändern
- Die Netzwerkgeschwindigkeit drosseln
- Auf Screenreader zugreifen

![Testmenü](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der Dokumentation zu [BrowserStack Live](https://www.browserstack.com/docs/live).

#### Fortgeschritten: Die BrowserStack-API

BrowserStack bietet außerdem eine [RESTful-API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), über die Sie programmgesteuert Details zu Ihrem Kontotarif, Ihren Sitzungen, Builds und mehr abrufen können.

Sehen wir uns kurz an, wie wir mit Node.js auf die API zugreifen können.

1. Richten Sie zunächst ein neues npm-Projekt zum Ausprobieren ein, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `bstack-test`.
2. Erstellen Sie im Stammverzeichnis Ihres Projekts eine Datei namens `call_bstack.js` mit folgendem Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese finden Sie unter [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) im Abschnitt _Authentication & Security_.
4. Installieren Sie das im Code verwendete Modul [axios](https://www.npmjs.com/package/axios) zum Senden von HTTP-Anfragen, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Wir haben axios gewählt, weil es einfach zu verwenden, verbreitet und gut unterstützt ist:

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie mit folgendem Befehl im Terminal aus. Im Terminal sollte ein Objekt mit den Details Ihres BrowserStack-Tarifs ausgegeben werden.

   ```bash
   node call_bstack
   ```

Im Folgenden finden Sie weitere vorbereitete Funktionen, die bei der Arbeit mit der RESTful-API von BrowserStack nützlich sein können.

Diese Funktion gibt zusammenfassende Informationen zu allen zuvor erstellten automatisierten Builds zurück (siehe im nächsten Artikel die [Details zu automatisierten BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Diese Funktion gibt Details zu den einzelnen Sitzungen eines bestimmten Builds zurück:

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

Wie Sie [automatisierte BrowserStack-Tests ausführen](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack), behandeln wir im nächsten Artikel.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Beginnen wir mit einem Testkonto bei Sauce Labs.

1. Erstellen Sie ein Sauce-Labs-Testkonto.
2. Melden Sie sich an. Nach der Bestätigung Ihrer E-Mail-Adresse sollte dies automatisch geschehen.

#### Grundlagen: Manuelle Tests

Das [Sauce-Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen.
Folgen Sie nach der Anmeldung der Anleitung „Getting started“ oben links auf der Seite:

1. Klicken Sie unter „Run your first test“ auf _Desktop browser_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten – beispielsweise diese Seite. Wählen Sie anschließend mithilfe der verschiedenen Schaltflächen und Listen eine Browser-Betriebssystem-Kombination für den Test aus.
   Wie Sie sehen werden, gibt es eine große Auswahl!
   ![Auswahl einer manuellen Sauce-Labs-Sitzung](sauce-manual-session.png)
3. Wenn Sie den Test starten, erscheint ein Ladebildschirm und eine Umgebung mit der gewählten Geräte-Browser-Kombination wird gestartet.
   Anschließend können Sie die Website im ausgewählten Browser aus der Ferne testen.

Sie können jetzt zahlreiche Funktionen nutzen: Teilen Sie beispielsweise eine Test-URL, damit eine andere Person den Test aus der Ferne beobachten kann, kopieren Sie Text oder Notizen in eine entfernte Zwischenablage, erstellen Sie einen Screenshot oder testen Sie im Vollbildmodus.

Wenn Sie die Sitzung beenden, gelangen Sie zurück zum Tab _Live_. Dort finden Sie für jede zuvor gestartete manuelle Sitzung einen Eintrag.
Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten zur Sitzung angezeigt.
Sie können dort Ihre Screenshots herunterladen, ein Video der Sitzung ansehen, Datenprotokolle einsehen und mehr.
Das ist bereits sehr nützlich und wesentlich bequemer, als mehrere Emulatoren und virtuelle Maschinen selbst einzurichten.

Weitere Informationen finden Sie in der [Sauce-Labs-Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce-Labs-API

Sauce Labs bietet eine [RESTful-API](https://docs.saucelabs.com/dev/api/). Über sie können Sie programmgesteuert Details zu Ihrem Konto und bestehenden Tests abrufen sowie Tests mit weiteren Informationen versehen – beispielsweise mit einem Ergebnisstatus, der sich allein durch manuelle Tests nicht erfassen lässt. Sie könnten etwa einen eigenen Selenium-Test über Sauce Labs aus der Ferne ausführen, um eine bestimmte Browser-Betriebssystem-Kombination zu testen, und die Testergebnisse anschließend an Sauce Labs zurückgeben.

Für API-Aufrufe stehen verschiedene Clients zur Verfügung, unter anderem für PHP, Java und Node.js.

Sehen wir uns kurz an, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen können.

1. Richten Sie zunächst ein neues npm-Projekt zum Ausprobieren ein, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `sauce-test`.
2. Installieren Sie den Node-Wrapper für Sauce Labs mit folgendem Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie im Stammverzeichnis Ihres Projekts eine Datei namens `call_sauce.js`. Fügen Sie folgenden Inhalt ein:

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

4. Tragen Sie an den angegebenen Stellen Ihren Sauce-Labs-Benutzernamen und Ihren API-Schlüssel ein. Beides finden Sie auf der Seite [User Settings](https://app.saucelabs.com/user-settings). Tragen Sie die Werte jetzt ein.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Die Ausführung automatisierter Sauce-Labs-Tests behandeln wir im nächsten Artikel.

### TestingBot

#### Erste Schritte mit TestingBot

Beginnen wir mit einem Testkonto bei TestingBot.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Nach der Bestätigung Ihrer E-Mail-Adresse sollte dies automatisch geschehen.

#### Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) zeigt die verschiedenen verfügbaren Optionen. Stellen Sie zunächst sicher, dass der Tab _Live Web Testing_ geöffnet ist.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die gewünschte Browser-Betriebssystem-Kombination im Raster aus.
   ![Auswahlmöglichkeiten für Tests](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm und eine virtuelle Maschine mit der gewählten Kombination wird gestartet.
4. Sobald der Ladevorgang abgeschlossen ist, können Sie die Website im ausgewählten Browser aus der Ferne testen.
5. Sie sehen nun, wie das Layout im getesteten Browser aussieht. Sie können die Maus bewegen, auf Schaltflächen klicken und mehr. Über das Seitenmenü können Sie:
   - Die Sitzung beenden
   - Die Bildschirmauflösung ändern
   - Text oder Notizen in eine entfernte Zwischenablage kopieren
   - Screenshots erstellen, bearbeiten und herunterladen
   - Im Vollbildmodus testen

Wenn Sie die Sitzung beenden, gelangen Sie zurück zur Seite _Live Web Testing_. Dort finden Sie für jede zuvor gestartete manuelle Sitzung einen Eintrag. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten zur Sitzung angezeigt. Sie können dort Ihre Screenshots herunterladen, ein Video des Tests ansehen und die Protokolle der Sitzung einsehen.

#### Fortgeschritten: Die TestingBot-API

TestingBot bietet eine [RESTful-API](https://testingbot.com/support/api). Über sie können Sie programmgesteuert Details zu Ihrem Konto und bestehenden Tests abrufen sowie Tests mit weiteren Informationen versehen – beispielsweise mit einem Ergebnisstatus, der sich allein durch manuelle Tests nicht erfassen lässt.

TestingBot bietet mehrere API-Clients für die Interaktion mit der API, unter anderem für Node.js, Python, Ruby, Java und PHP.

Das folgende Beispiel zeigt, wie Sie mit dem Node.js-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) auf die TestingBot-API zugreifen.

1. Richten Sie zunächst ein neues npm-Projekt zum Ausprobieren ein, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `tb-test`.
2. Installieren Sie den Node-Wrapper für TestingBot mit folgendem Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie im Stammverzeichnis Ihres Projekts eine Datei namens `tb.js`. Fügen Sie folgenden Inhalt ein:

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

4. Tragen Sie an den angegebenen Stellen Ihren TestingBot-Schlüssel und Ihr Secret ein. Beides finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Die Ausführung automatisierter TestingBot-Tests behandeln wir im nächsten Artikel.

## Zusammenfassung

Das war eine Menge Stoff. Sie können aber sicherlich bereits erkennen, wie Automatisierungswerkzeuge Ihnen einen Teil der aufwendigen Testarbeit abnehmen.

Im nächsten Artikel sehen wir uns an, wie Sie mit Selenium ein eigenes lokales Automatisierungssystem einrichten und es mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
