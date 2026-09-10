---
title: Einführung in automatisierte Tests
short-title: Automatisierte Tests
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: a23122d0e86fb376234614beb5b350b217068054
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Tests manuell in mehreren Browsern und auf mehreren Geräten mehrmals täglich auszuführen, kann mühsam und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungswerkzeugen vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task Runner verwendet und wie man die Grundlagen kommerzieller Apps zur Browser-Testautomatisierung wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung von den allgemeinen <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien browserübergreifender Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür vermitteln, was automatisierte Tests beinhalten, wie sie Ihnen das Leben erleichtern können und wie Sie einige der kommerziellen Produkte nutzen, die vieles vereinfachen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht vieles einfacher

In diesem Modul haben wir viele verschiedene Möglichkeiten beschrieben, wie Sie Ihre Websites und Apps testen können, und erläutert, welchen Umfang Ihre browserübergreifenden Testbemühungen haben sollten – hinsichtlich der zu testenden Browser, Überlegungen zur Barrierefreiheit und mehr. Das klingt nach viel Arbeit, oder?

Da stimmen wir zu – all die Dinge, die wir in den vorherigen Artikeln betrachtet haben, manuell zu testen, kann wirklich mühsam sein. Glücklicherweise gibt es Werkzeuge, die uns helfen, einen Teil dieser Mühe zu automatisieren. Es gibt zwei Hauptmöglichkeiten, die Tests zu automatisieren, über die wir in diesem Modul gesprochen haben:

1. Verwenden Sie einen Task Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um während Ihres Build-Prozesses Tests auszuführen und Code zu bereinigen. Dies ist eine hervorragende Möglichkeit, Aufgaben wie das Linten und Minimieren von Code, das Hinzufügen von CSS-Präfixen oder das Transpilieren neuer JavaScript-Features für eine möglichst große browserübergreifende Reichweite auszuführen und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests in installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern hinweisen, sobald sie auftreten. Kommerzielle Apps für browserübergreifende Tests wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch über eine Benutzeroberfläche den Remote-Zugriff auf ihre Einrichtung. Dadurch ersparen Sie sich den Aufwand, ein eigenes Testsystem einzurichten.

Im nächsten Artikel betrachten wir, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten. In diesem Artikel sehen wir uns an, wie man einen Task Runner einrichtet und die grundlegenden Funktionen kommerzieller Systeme wie der oben genannten verwendet.

> [!NOTE]
> Die beiden oben genannten Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task Runner so einzurichten, dass er über eine API auf einen Dienst wie Sauce Labs zugreift, browserübergreifende Tests ausführt und Ergebnisse zurückgibt. Dies werden wir ebenfalls weiter unten betrachten.

## Testwerkzeuge mit einem Task Runner automatisieren

Wie oben erwähnt, können Sie häufige Aufgaben wie das Linten und Minimieren von Code erheblich beschleunigen, indem Sie einen Task Runner verwenden, der alles, was ausgeführt werden muss, zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess automatisch ausführt. Dies könnte beispielsweise jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt betrachten wir, wie man die Ausführung von Aufgaben mit Node und Gulp automatisiert – eine einsteigerfreundliche Option.

### Node und npm einrichten

Die meisten heutigen Werkzeuge basieren auf {{Glossary("Node.js", "Node.js")}}. Daher müssen Sie es zusammen mit seinem zugehörigen Paketmanager [`npm`](https://www.npmjs.com/) installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie dazu den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node).
2. Stellen Sie sicher, dass Sie [prüfen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies können Sie tun, indem Sie mit dem Node-Version-Manager die neuesten LTS-Versionen installieren (siehe erneut die oben verlinkten Anweisungen).

Um Node-/npm-basierte Pakete in Ihren Projekten verwenden zu können, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach.

Erstellen wir beispielsweise zunächst ein Testverzeichnis, damit wir ohne Angst vor Beschädigungen experimentieren können.

1. Erstellen Sie über die Benutzeroberfläche Ihres Dateimanagers ein neues Verzeichnis an einem geeigneten Ort oder navigieren Sie in einer Befehlszeile zum gewünschten Ort und führen Sie den folgenden Befehl aus:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie lediglich in Ihr Testverzeichnis wechseln und es mit Folgendem initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen viele Fragen, um die für die Einrichtung des Projekts erforderlichen Informationen zu ermitteln; Sie können vorerst einfach die Standardwerte auswählen.
4. Nachdem alle Fragen gestellt wurden, werden Sie gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return. npm erzeugt dann eine Datei `package.json` in Ihrem Verzeichnis.

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

Damit können Sie fortfahren.

### Gulp-Automatisierung einrichten

Sehen wir uns an, wie man Gulp einrichtet und verwendet, um einige Testwerkzeuge zu automatisieren.

1. Erstellen Sie zunächst mithilfe des am Ende des vorherigen Abschnitts beschriebenen Verfahrens ein Test-npm-Projekt.
   Aktualisieren Sie außerdem die Datei `package.json` mit der Zeile `"type": "module"`, sodass sie ungefähr so aussieht:

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

2. Als Nächstes benötigen Sie HTML-, CSS- und JavaScript-Beispielinhalte, an denen Sie Ihr System testen können – erstellen Sie Kopien unserer Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner namens `src` innerhalb Ihres Projektordners.
   Sie können auch eigene Testinhalte verwenden, aber beachten Sie, dass solche Werkzeuge nicht gut mit in der HTML-Datei eingebettetem JS/CSS funktionieren – Sie benötigen separate Dateien.
3. Installieren Sie gulp global (das heißt, es wird projektübergreifend verfügbar sein), indem Sie den folgenden Befehl verwenden:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie anschließend den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun in Ihrem Projektverzeichnis eine neue Datei namens `gulpfile.mjs`. In dieser Datei werden alle unsere Aufgaben ausgeführt. Fügen Sie Folgendes in diese Datei ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dadurch wird das zuvor installierte Modul `gulp` benötigt und anschließend eine Standardaufgabe exportiert, die lediglich eine Meldung im Terminal ausgibt. Das ist nützlich, um festzustellen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese Anweisung `export default` durch etwas Nützlicheres ersetzen.

   Jede gulp-Aufgabe wird im selben grundlegenden Format exportiert – `exports function taskName(cb) {...}`. Jede Funktion akzeptiert einen Parameter – einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von gulp mit dem folgenden Befehl ausführen – probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Einige echte Aufgaben zu Gulp hinzufügen

Jetzt können wir unserer Gulp-Datei weitere Aufgaben hinzufügen. Jede Ergänzung kann erfordern, dass Sie die Datei `gulpfile.mjs` wie folgt ändern:

- Wenn wir Sie bitten, `import`-Anweisungen hinzuzufügen, fügen Sie diese unter der vorhandenen `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue Anweisung `export function ...` hinzuzufügen, fügen Sie sie am Ende der Datei ein.
- Wenn wir Sie bitten, den Standardexport zu ändern, ändern Sie die Anweisung `export default` wie angegeben.

Ihre Datei `gulpfile.mjs` wird also wie folgt wachsen:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um Gulp einige echte Aufgaben hinzuzufügen, müssen wir überlegen, was wir tun möchten. Ein sinnvoller Satz grundlegender Funktionen für unser Projekt ist folgender:

- html-tidy, css-lint und js-hint, um häufige HTML-/CSS-/JS-Fehler zu linten und zu melden bzw. zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und Herstellerpräfixe nur dort hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntax-Features in herkömmliche Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Vollständige Anweisungen für die verschiedenen verwendeten gulp-Pakete finden Sie in den obigen Links.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten am Anfang der Datei `gulpfile.mjs` einbinden, anschließend Ihren Test bzw. Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit er über den gulp-Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die Datei `package.json` Ihres Projekts sehen, finden Sie einen Eintrag dafür in der Eigenschaft `devDependencies`.

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

Hier erfassen wir unsere Entwicklungsdatei `index.html` mit `gulp.src()`, wodurch wir eine Quelldatei abrufen können, mit der etwas geschehen soll.

Anschließend verwenden wir die Funktion `pipe()`, um diese Quelle an einen weiteren Befehl weiterzugeben, der etwas anderes mit ihr macht. Wir können beliebig viele davon verketten. Zuerst führen wir `htmltidy()` für die Quelle aus, wodurch Fehler in unserer Datei durchgegangen und behoben werden. Die zweite Funktion `pipe()` schreibt die ausgegebene HTML-Datei in das Verzeichnis `build`.

In der Eingabeversion der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dieses entfernt, bevor die Ausgabedatei erstellt wurde.

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

Hier erfassen wir unsere Datei `style.css`, führen csslint dafür aus (das eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt) und führen sie anschließend durch autoprefixer, um alle erforderlichen Präfixe hinzuzufügen, damit neue CSS-Features in älteren Browsern funktionieren. Am Ende der `pipe`-Kette geben wir unser modifiziertes CSS mit Präfixen in das Verzeichnis `build` aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet – versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten.

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

Hier erfassen wir unsere Datei `main.js`, führen `jshint` dafür aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; anschließend übergeben wir die Datei an babel, das sie in Syntax älteren Stils umwandelt und das Ergebnis im Verzeichnis `build` ausgibt. Unser ursprünglicher Code enthielt eine [Fat-Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine Funktion älteren Stils umgewandelt hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den Befehl `gulp` in Ihrem Projektverzeichnis ausführen. Sie sollten dann eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in der Zeilen die Zeit zeigen, zu der Aufgaben beginnen oder enden, den Aufgabennamen und die Dauer abgeschlossener Aufgaben.](gulp-output.png)

Anschließend können Sie die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im Verzeichnis `build` betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, prüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben dargestellt hinzugefügt haben. Versuchen Sie außerdem, die HTML-/CSS-/JavaScript-Codeabschnitte auszukommentieren und gulp dann erneut auszuführen, um herauszufinden, ob Sie das Problem eingrenzen können.

Gulp enthält eine Funktion `watch()`, mit der Sie Ihre Dateien überwachen und Tests ausführen können, sobald Sie eine Datei speichern. Versuchen Sie beispielsweise, Folgendes am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Geben Sie nun den Befehl `gulp watch` in Ihr Terminal ein. Gulp überwacht nun Ihr Verzeichnis und führt die entsprechenden Aufgaben aus, wenn Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalterzeichen – hier sagen wir: „Führe diese Aufgaben aus, wenn beliebige Dateien dieser Typen gespeichert werden.“ Sie können Platzhalter auch in Ihren Hauptaufgaben verwenden. Beispielsweise würde `gulp.src('src/*.css')` alle Ihre CSS-Dateien erfassen und dann die per Pipe weitergeleiteten Aufgaben darauf ausführen.

Mit Gulp können Sie noch viel mehr tun. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, die Sie durchsuchen können.

### Andere Task Runner

Es sind viele weitere Task Runner verfügbar. Wir möchten sicherlich nicht behaupten, dass Gulp die beste verfügbare Lösung ist, aber es funktioniert für uns und ist für Einsteiger recht zugänglich. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert sehr ähnlich wie Gulp, beruht jedoch auf Aufgaben, die in einer Konfigurationsdatei angegeben werden, anstatt geschriebenes JavaScript zu verwenden. Weitere Details finden Sie unter [Erste Schritte mit Grunt.](https://gruntjs.com/getting-started)
- Sie können Aufgaben auch direkt mithilfe von npm-Skripten ausführen, die sich in Ihrer Datei `package.json` befinden, ohne irgendeine Art zusätzlicher Task-Runner-Systeme installieren zu müssen. Dies basiert auf der Annahme, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Befehlszeilenwerkzeuge sind. Wenn Sie also herausfinden können, wie Sie die Werkzeuge über die Befehlszeile ausführen, können Sie sie anschließend mithilfe von npm-Skripten ausführen. Damit zu arbeiten ist etwas schwieriger, kann aber für Personen mit guten Befehlszeilenkenntnissen lohnend sein. [Warum npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiterführenden Informationen.

## Kommerzielle Testdienste verwenden, um Browser-Tests zu beschleunigen

Sehen wir uns nun kommerzielle Browser-Testdienste von Drittanbietern an und was sie für uns leisten können.

Wenn Sie solche Dienste verwenden, geben Sie eine URL der Seite an, die Sie testen möchten, sowie Informationen wie die Browser, in denen sie getestet werden soll. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Das ist sehr nützlich und wesentlich bequemer, als alle Betriebssystem-/Browser-Kombinationen selbst einrichten zu müssen.

Sie können dann einen Gang höher schalten und mithilfe einer API programmgesteuert auf Funktionalität zugreifen. Das bedeutet, dass solche Apps mit Task Runnern, beispielsweise Ihren eigenen lokalen Selenium-Umgebungen und anderen, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt weitere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir behaupten nicht, dass dies unbedingt die besten verfügbaren Werkzeuge sind, aber sie sind gute Werkzeuge, mit denen Einsteiger einfach loslegen können.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um zu beginnen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie im oberen Navigationsmenü auf den Link _Live_, um zu Live Manual Testing zu wechseln.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack-Live-Dashboard ermöglicht Ihnen, die Plattform, das Gerät und den Browser auszuwählen, auf denen Sie testen möchten.
Für Desktop-Tests wählen Sie das Betriebssystem und den Browser direkt aus.
Für Mobilgeräte wählen Sie das mobile Betriebssystem und das Gerät aus und können dann einen Browser für Ihre Geräte-Browser-Kombination auswählen.

![Testauswahl](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browser-Symbole klicken, wird Ihre Auswahl von Plattform, Gerät und Browser geladen – wählen Sie jetzt eine aus und probieren Sie sie aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, durch Ziehen mit der Maus nach oben und unten scrollen und auf den Touchpads unterstützter Geräte wie MacBooks geeignete Gesten verwenden, beispielsweise Zusammenziehen/Zoomen oder Scrollen mit zwei Fingern.

Die verfügbaren Features unterscheiden sich je nach geladenem Browser und können Steuerelemente umfassen für:

- Das Anzeigen von Informationen über den aktuellen Browser
- Das Wechseln zu anderen Browsern
- Das Testen von localhost-URLs
- Das Festlegen der Zoomstufe und Umschalten der Ausrichtung
- Das Speichern und Laden von Lesezeichen
- Das Erstellen und Kommentieren von Screenshots sowie das Melden von Fehlern
- Den Zugriff auf Browser-DevTools
- Das Ändern des gemeldeten Standorts
- Das Drosseln des Netzwerks
- Den Zugriff auf Screenreader

![Testmenü](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der Dokumentation zu [BrowserStack Live](https://www.browserstack.com/docs/live).

#### Erweitert: Die BrowserStack-API

BrowserStack verfügt außerdem über eine [RESTful-API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), mit der Sie programmgesteuert Details zu Ihrem Kontotarif, Sitzungen, Builds usw. abrufen können.

Sehen wir uns kurz an, wie wir mithilfe von Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `bstack-test`.
2. Erstellen Sie im Stammverzeichnis Ihres Projekts eine neue Datei namens `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für BrowserStack-Benutzernamen und Zugriffsschlüssel durch Ihre tatsächlichen Werte. Sie können diese in Ihren [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) im Abschnitt _Authentication & Security_ abrufen.
4. Installieren Sie das Modul [axios](https://www.npmjs.com/package/axios), das wir im Code zum Senden von HTTP-Anfragen verwenden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Wir haben axios gewählt, weil es einfach, beliebt und gut unterstützt ist:

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie mit dem folgenden Befehl im Terminal aus. Im Terminal sollte ein Objekt ausgegeben werden, das die Details Ihres BrowserStack-Tarifs enthält.

   ```bash
   node call_bstack
   ```

Im Folgenden haben wir außerdem einige weitere fertige Funktionen bereitgestellt, die beim Arbeiten mit der BrowserStack-RESTful-API nützlich sein könnten.

Diese Funktion gibt zusammenfassende Details aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [Details zu automatisierten BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Im nächsten Artikel behandeln wir das [Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack).

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Beginnen wir mit einem Sauce-Labs-Testkonto.

1. Erstellen Sie ein Sauce-Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce-Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen.
Folgen Sie nach der Anmeldung dem Leitfaden „Getting started“ oben links auf der Seite:

1. Klicken Sie unter „Run your first test“ auf _Desktop browser_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten, beispielsweise diese Seite. Wählen Sie anschließend mithilfe der verschiedenen Schaltflächen und Listen eine Browser-/Betriebssystem-Kombination aus, die Sie testen möchten.
   Wie Sie sehen werden, gibt es sehr viel zur Auswahl!
   ![Manuelle Sauce-Sitzung auswählen](sauce-manual-session.png)
3. Wenn Sie mit dem Testen beginnen, wird ein Ladebildschirm angezeigt und eine Umgebung mit der von Ihnen gewählten Geräte-/Browser-Kombination wird gestartet.
   Anschließend können Sie die Website, die im ausgewählten Browser ausgeführt wird, remote testen.

An diesem Punkt können Sie bereits einiges tun, beispielsweise eine Test-URL teilen, damit jemand anderes den Test remote beobachten kann, Text/Notizen in eine Remote-Zwischenablage kopieren, einen Screenshot erstellen, im Vollbildmodus testen und mehr.

Sobald Sie die Sitzung beenden, kehren Sie zum Tab _Live_ zurück, in dem Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen.
Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten für die Sitzung angezeigt.
Hier können Sie alle erstellten Screenshots herunterladen, ein Video der Sitzung ansehen, Datenprotokolle anzeigen und mehr.
Das ist bereits sehr nützlich und wesentlich bequemer, als selbst mehrere Emulatoren und virtuelle Maschinen einrichten zu müssen.

Weitere Informationen finden Sie in der [Sauce-Labs-Dokumentation](https://docs.saucelabs.com/).

#### Erweitert: Die Sauce-Labs-API

Sauce Labs verfügt über eine [RESTful-API](https://docs.saucelabs.com/dev/api/), mit der Sie programmgesteuert Details zu Ihrem Konto und vorhandenen Tests abrufen und Tests mit weiteren Details versehen können, etwa ihrem Bestanden-/Fehlgeschlagen-Status, der durch manuelle Tests allein nicht aufgezeichnet werden kann. Sie möchten beispielsweise einen Ihrer eigenen Selenium-Tests remote über Sauce Labs ausführen, um eine bestimmte Browser-/Betriebssystem-Kombination zu testen, und anschließend die Testergebnisse an Sauce Labs zurückgeben.

Es stehen mehrere Clients zur Verfügung, um API-Aufrufe in Ihrer bevorzugten Umgebung durchzuführen, sei es PHP, Java, Node.js usw.

Sehen wir uns kurz an, wie wir mithilfe von Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `sauce-test`.
2. Installieren Sie den Node-Sauce-Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie im Stammverzeichnis Ihres Projekts eine neue Datei namens `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

Im nächsten Artikel behandeln wir die tatsächliche Ausführung automatisierter Sauce-Lab-Tests.

### TestingBot

#### Erste Schritte mit TestingBot

Beginnen wir mit einem TestingBot-Testkonto.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen verfügbaren Optionen auf. Stellen Sie zunächst sicher, dass Sie sich im Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/Betriebssystem-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, wird ein Ladebildschirm angezeigt, der eine virtuelle Maschine mit der von Ihnen ausgewählten Kombination startet.
4. Nach Abschluss des Ladevorgangs können Sie die Website, die im ausgewählten Browser ausgeführt wird, remote testen.
5. Von hier aus können Sie das Layout so sehen, wie es im zu testenden Browser aussehen würde, die Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht Ihnen:
   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine Remote-Zwischenablage zu kopieren
   - Screenshots zu erstellen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Seite _Live Web Testing_ zurück, auf der Sie für jede der zuvor gestarteten manuellen Sitzungen einen Eintrag sehen. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten für die Sitzung angezeigt. Hier können Sie alle erstellten Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung anzeigen.

#### Erweitert: Die TestingBot-API

TestingBot verfügt über eine [RESTful-API](https://testingbot.com/support/api), mit der Sie programmgesteuert Details zu Ihrem Konto und vorhandenen Tests abrufen und Tests mit weiteren Details versehen können, etwa ihrem Bestanden-/Fehlgeschlagen-Status, der durch manuelle Tests allein nicht aufgezeichnet werden kann.

TestingBot verfügt über mehrere API-Clients, die Sie zur Interaktion mit der API verwenden können, darunter Clients für Node.js, Python, Ruby, Java und PHP.

Im Folgenden sehen Sie ein Beispiel dafür, wie Sie mit dem Node.js-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, beispielsweise `tb-test`.
2. Installieren Sie den Node-TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie im Stammverzeichnis Ihres Projekts eine neue Datei namens `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Key und Ihr Secret an den angegebenen Stellen eintragen. Sie finden diese im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Erweitert: Automatisierte Tests

Im nächsten Artikel behandeln wir die tatsächliche Ausführung automatisierter TestingBot-Tests.

## Zusammenfassung

Das war eine ganze Menge, aber Sie können sicher bereits die Vorteile erkennen, Automatisierungswerkzeuge zu verwenden, um beim Testen einen Teil der schweren Arbeit zu übernehmen.

Im nächsten Artikel betrachten wir die Einrichtung unseres eigenen lokalen Automatisierungssystems mit Selenium und wie man dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
