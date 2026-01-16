---
title: Einführung in das automatisierte Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Das manuelle Ausführen von Tests auf mehreren Browsern und Geräten, mehrmals pro Tag, kann mühsam und zeitaufwändig sein. Um dies effizienter zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel werfen wir einen Blick darauf, was verfügbar ist, wie man Task-Runner verwendet und wie man die Grundlagen von kommerziellen Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen umfasst, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die Dinge einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht Dinge einfacher

In diesem Modul haben wir viele verschiedene Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testing-Bemühungen haben sollten in Bezug auf die zu testenden Browser, Barrierefreiheitsüberlegungen und mehr. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — alles Manuell zu testen, was wir in den vorherigen Artikeln besprochen haben, kann wirklich anstrengend sein. Glücklicherweise gibt es Tools, die uns helfen können, einen Teil dieser Mühen zu automatisieren. Es gibt zwei Hauptwege, wie wir die Tests, über die wir in diesem Modul gesprochen haben, automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests auszuführen und Code während Ihres Build-Prozesses aufzuräumen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifizierung von Code, das Hinzufügen von CSS-Präfixen oder das Transpilieren neuer JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu erledigen.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern aufmerksam machen, sobald sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen es Ihnen jedoch, auf ihre Einrichtung aus der Ferne über eine Schnittstelle zuzugreifen, wodurch Sie sich den Aufwand sparen, Ihr eigenes Testsystem einzurichten.

Im nächsten Artikel werden wir uns damit beschäftigen, wie Sie Ihr eigenes auf Selenium basierendes Testsystem einrichten können. In diesem Artikel werden wir uns ansehen, wie Sie einen Task-Runner einrichten und die grundlegende Funktionalität von kommerziellen Systemen wie den oben genannten nutzen.

> [!NOTE]
> Die obigen beiden Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Service wie Sauce Labs zuzugreifen, Cross-Browser-Tests durchzuführen und die Ergebnisse zurückzugeben. Wir werden uns dies weiter unten ebenfalls ansehen.

## Verwendung eines Task-Runners zur Automatisierung von Testwerkzeugen

Wie bereits erwähnt, können Sie häufige Aufgaben wie Linting und Minifizierung von Code drastisch beschleunigen, indem Sie einen Task-Runner verwenden, um alles automatisch an einem bestimmten Punkt in Ihrem Build-Prozess auszuführen, was Sie ausführen müssen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt schauen wir uns an, wie Sie das Task-Running mit Node und Gulp automatisieren, eine einsteigerfreundliche Option.

### Einrichtung von Node und npm

Die meisten Tools basieren heutzutage auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Gegenstück Paketmanager, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` zuvor installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann getan werden, indem Sie den Node-Version-Manager verwenden, um die neuesten LTS-Versionen zu installieren (verweisen Sie erneut auf die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihr Projektverzeichnis als npm-Projekte einrichten. Dies ist einfach zu tun.

Zum Beispiel, lassen Sie uns zunächst ein Testverzeichnis erstellen, um ohne Angst davor, etwas zu zerstören, zu spielen.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit der Benutzeroberfläche Ihres Dateimanagers oder in einer Befehlszeile, indem Sie zu dem Ort navigieren, den Sie möchten, und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es initialisieren, mit dem folgenden:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die erforderlichen Informationen zur Einrichtung des Projekts herauszufinden; Sie können vorerst die Standardeinstellungen auswählen.
4. Sobald alle Fragen gestellt wurden, wird er Sie fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Wesentlichen eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst sieht sie ungefähr so aus:

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

Schauen wir uns an, wie wir Gulp einrichten und es verwenden können, um einige Testwerkzeuge zu automatisieren.

1. Zuerst erstellen Sie ein Test-Npm-Projekt, indem Sie das Verfahren ganz unten im vorherigen Abschnitt befolgen.
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

2. Als nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System zu testen — erstellen Sie Kopien unserer Beispiel-Dateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, beachten Sie jedoch, dass solche Tools nicht gut mit in der HTML-Datei eingebettetem JS/CSS funktionieren — Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (das bedeutet, es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis namens `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführt. In dieser Datei setzen Sie folgendes:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts weiter tut, als eine Nachricht im Terminal auszugeben — das ist nützlich, um uns zu zeigen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung in etwas Nützlicheres umwandeln.

   Jede Gulp-Aufgabe wird im gleichen grundlegenden Format exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen echter Aufgaben zu Gulp

Nun sind wir bereit, weitere Aufgaben zu unserer Gulp-Datei hinzuzufügen. Jede Hinzufügung könnte Sie dazu bringen, die `gulpfile.mjs`-Datei in folgender Weise zu ändern:

- Wenn wir Sie bitten, einige `import`-Anweisungen hinzuzufügen, fügen Sie diese unter der bestehenden `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie diese am Ende der Datei an.
- Wenn wir Sie bitten, den Standardexport zu ändern, ändern Sie die `export default`-Anweisung in der von uns spezifizierten Weise.

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

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun möchten. Eine vernünftige Grundfunktionalität, die Sie auf unserem Projekt ausführen sollten, umfasst:

- html-tidy, css-lint, und js-hint, um häufige HTML/CSS/JS-Fehler zu linden und zu melden/beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Anbieterpräfixe hinzuzufügen, wo es nötig ist (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um alle neuen JavaScript-Syntaxfunktionen in traditionellen Syntax zu transpilieren, die in älteren Browsern funktionieren (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die oben genannten Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu nutzen, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.mjs`-Datei einbringen und schließlich den Namen Ihrer Aufgabe exportieren, um über den Gulp-Befehl zugänglich zu sein.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als eine Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür in der Eigenschaft `devDependencies`.

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

Hier greifen wir unsere Entwicklungs-`index.html`-Datei mit `gulp.src()` ab, das es uns ermöglicht, eine Quelldatei zu greifen, um etwas damit zu tun.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzugeben, um etwas anderes damit zu tun. Wir können so viele davon ketten, wie wir wollen. Wir führen zuerst `htmltidy()` auf der Quelle aus, das durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei in das `build`-Verzeichnis.

In der Eingabedateiversion haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies entfernt, als die Ausgabedatei erstellt wurde.

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
   {
     "browserslist": ["last 5 versions"]
   }
   ```

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier greifen wir unsere `style.css`-Datei ab, führen csslint darauf aus (das eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt), und leiten es dann durch autoprefixer, um alle benötigten Präfixe hinzuzufügen, um neue CSS-Funktionen in älteren Browsern lauffähig zu machen. Am Ende der Pipe-Kette geben wir unser modifiziertes CSS mit Präfix in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

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

Hier greifen wir unsere `main.js`-Datei ab, führen `jshint` darauf aus und geben die Ergebnisse mithilfe von `jshint.reporter` ins Terminal aus; dann leiten wir die Datei an babel weiter, das sie in einen alten Syntaxstil umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von babel in eine alte Funktionsweise umgewandelt wurde.

#### Weitere Ideen

Sobald alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in der Zeilen die Start- oder Endzeit von Aufgaben, den Aufgabennamen und die Dauer von 'Abgeschlossenen' Aufgaben zeigen.](gulp-output.png)

Dann können Sie die von Ihren automatisierten Aufgaben erstellten Dateien testen, indem Sie sie im `build`-Verzeichnis betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, prüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, Codeabschnitte in HTML/CSS/JavaScript auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie das Problem eingrenzen können.

Gulp wird mit einer `watch()`-Funktion geliefert, die Sie verwenden können, um Ihre Dateien zu beobachten und Tests bei jedem Speichern einer Datei auszuführen. Zum Beispiel, versuchen Sie, das folgende am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihrem Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wenn Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen — hier sagen wir "führen Sie diese Aufgaben aus, wenn Dateien dieses Typs gespeichert werden. Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien greifen und dann Aufgaben darauf ausführen.

Es gibt eine Menge mehr, was Sie mit Gulp tun können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir behaupten sicherlich nicht, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist relativ zugänglich für Anfänger. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es sich auf Aufgaben verlässt, die in einer Konfigurationsdatei angegeben sind, anstatt auf selbst geschriebenes JavaScript (siehe [Getting started with Grunt for more details.](https://gruntjs.com/getting-started)).
- Sie können Aufgaben auch direkt mit npm-Skripten durchführen, die sich in Ihrer `package.json`-Datei befinden, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Dies basiert auf der Prämisse, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie man die Tools mit der Kommandozeile ausführt, können Sie sie dann mit npm-Skripten ausführen. Es ist ein bisschen schwieriger zu arbeiten, kann aber lohnend sein für diejenigen, die mit ihren Kommandozeilenfähigkeiten stark sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Nutzung von kommerziellen Testdiensten zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Wenn Sie diese Art von Diensten nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen, wie etwa welche Browser Sie getestet haben möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw. zurück. Dies ist sehr nützlich und wesentlich praktischer, als alle OS/Browser-Kombinationen selbst einrichten zu müssen.

Sie können dann einen Gang höher schalten, indem Sie eine API nutzen, um die Funktionalität programmatisch zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern kombiniert werden können, sowie mit Ihren eigenen lokalen Selenium-Umgebungen und anderen, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir behaupten nicht, dass dies unbedingt die besten verfügbaren Werkzeuge sind, aber sie sind gute, die Anfänger einfach in Betrieb nehmen können.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um loszulegen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zum Live-Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, die Plattform, das Gerät und den Browser auszuwählen, die Sie testen möchten.
Für Desktop-Tests wählen Sie das Betriebssystem und den Browser direkt aus.
Für mobile Geräte wählen Sie das mobile Betriebssystem, das Gerät und können dann einen Browser für Ihre Geräte-Browser-Kombination auswählen.

![Testauswahl](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browsersymbole klicken, wird Ihre Wahl von Plattform, Gerät und Browser geladen — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten (zum Beispiel Kneifen/Zoomen, zwei Finger zum Scrollen) auf den Touchpads von unterstützenden Geräten wie MacBooks verwenden.

Die verfügbaren Funktionen variieren, je nachdem, welcher Browser geladen ist, und können beinhalten:

- Anzeigen von Informationen zum aktuellen Browser
- Wechseln zu anderen Browsern
- Testen von localhost-URLs
- Einstellen der Zoomstufe und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Erfassen/Annotieren von Screenshots und Erstellen von Fehlerberichten
- Zugriff auf Browser-DevTools
- Ändern des gemeldeten Standorts
- Drosseln des Netzwerks
- Zugang zu Bildschirmlesern

![Testmenü](browserstack-test-menu-sized.png)

Weitere Informationen finden Sie in der [BrowserStack Live](https://www.browserstack.com/docs/live)-Dokumentation.

#### Fortgeschritten: Die BrowserStack API

BrowserStack verfügt auch über eine [Restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction) die es Ihnen ermöglicht, programmatisch Details Ihres Konto-Plans, Sitzungen, Builds usw. abzurufen.

Werfen wir einen kurzen Blick darauf, wie wir über Node.js auf die API zugreifen würden.

1. Zuerst richten Sie ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `bstack-test`.
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

3. Ersetzen Sie die Platzhalter für BrowserStack-Benutzernamen und Zugangs-Schlüssel durch Ihre tatsächlichen Werte. Diese können aus Ihren [BrowserStack-Konto- und Profil-Details](https://www.browserstack.com/accounts/profile/details) abgerufen werden, unter dem Abschnitt _Authentication & Security_.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie mit dem folgenden Befehl in Ihrem Terminal aus. Sie sollten vor einem Objekt im Terminal sehen, das Ihre BrowserStack-Plan-Details enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere fertige Funktionen bereitgestellt, die Sie beim Arbeiten mit der BrowserStack Restful API nützlich finden könnten.

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

Wir werden [automatisierte BrowserStack-Tests ausführen](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs Trial beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Diese Anmeldung sollte automatisch erfolgen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen.
Wenn Sie angemeldet sind, folgen Sie dem 'Getting started'-Leitfaden oben links auf der Seite:

1. Klicken Sie in "Führen Sie Ihren ersten Test durch" auf _Desktop Browser_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (zum Beispiel diese Seite) und wählen Sie dann eine Browser/OS-Kombination, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden.
   Es gibt eine Menge Auswahlmöglichkeiten, wie Sie sehen werden!
   ![Select Sauce Manual Session](sauce-manual-session.png)
3. Wenn Sie den Test starten, wird ein Ladebildschirm angezeigt und eine Umgebung wird gestartet, die von Ihnen gewählte Gerät/Browsers-Kombination ausführt.
   Sie können dann beginnen, die Website im gewählten Browser fernzutesten.

An diesem Punkt können Sie recht viel tun, wie zum Beispiel eine Test-URL freigeben, sodass jemand anders den Test aus der Ferne beobachten kann, Text/Notizen in eine entfernte Zwischenablage kopieren, einen Screenshot machen, im Vollbildmodus testen und mehr.

Sobald Sie die Sitzung beenden, kehren Sie zum _Live_-Tab zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen werden.
Wenn Sie auf einen dieser Einträge klicken, werden mehr Daten für die Sitzung angezeigt.
Hier können Sie alle Screenshots herunterladen, die Sie gemacht haben, ein Video der Sitzung ansehen, Protokolldaten anzeigen und mehr.
Dies ist bereits sehr nützlich und viel bequemer, als mehrere Emulatoren und virtuelle Maschinen selbst einrichten zu müssen.

Für weitere Informationen, siehe die [Sauce Labs Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs verfügt über eine [Restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmatisch Details über Ihr Konto und bestehende Tests abzurufen und Tests mit weiteren Details zu annotieren, wie z.B. ihrem Bestehen/Nichtbestehen-Status, der alleine durch manuelle Tests nicht aufnehmbar ist. Zum Beispiel könnten Sie einen Ihrer eigenen Selenium-Tests aus der Ferne mit Sauce Labs ausführen möchten, um eine bestimmte Browser/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückübermitteln.

Es gibt mehrere Clients, die es Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung zu tätigen, sei es PHP, Java, Node.js usw.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir über Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Zuerst richten Sie ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als vorher, wie z.B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm namens `call_sauce.js`. Geben Sie ihm den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel an den angegebenen Stellen eintragen. Diese können Sie auf Ihrer Seite [User Settings](https://app.saucelabs.com/user-settings) finden. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist und führen Sie Ihre Datei folgendermaßen aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen von automatisierten Sauce Lab-Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einem TestingBot Test-Account beginnen.

1. Erstellen Sie ein [TestingBot Test-Account](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie auswählen können. Stellen Sie sicher, dass Sie sich auf dem Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Test Auswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, wird ein Ladebildschirm angezeigt, der eine virtuelle Maschine mit der gewählten Kombination ausführt.
4. Sobald das Laden abgeschlossen ist, können Sie die Website im gewählten Browser fernzutesten beginnen.
5. Von hier aus können Sie das Layout sehen, wie es im von Ihnen getesteten Browser aussehen würde, die Maus bewegen und versuchen, auf Schaltflächen zu klicken, usw. Das Seitenmenü ermöglicht es Ihnen:
   - Die Sitzung zu stoppen
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur _Live Web Testing_-Seite zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden mehr Daten für die Sitzung angezeigt. Hier können Sie alle Screenshots herunterladen, die Sie gemacht haben, ein Video des Tests ansehen und Protokolle für die Sitzung einsehen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [Restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmatisch Informationen über Ihr Konto und vorhandene Tests abzurufen und Tests mit weiteren Details zu annotieren, wie z.B. ihren Bestehen/Nichtbestehen-Status, der allein durch manuelle Tests nicht festgehalten werden kann.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten finden Sie ein Beispiel, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagiert.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als vorher, wie `tb-test` zum Beispiel.
2. Installieren Sie den Node TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts namens `tb.js`. Geben Sie ihm den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Geheimnis an den angegebenen Stellen ausfüllen. Diese können Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit) finden.
5. Stellen Sie sicher, dass alle gespeichert sind, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen von automatisierten TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemliche Reise, aber ich bin sicher, Sie können die Vorteile erkennen, die die Nutzung von Automatisierungstools bietet, um einen Teil der Testarbeit zu übernehmen.

Im nächsten Artikel werden wir uns mit der Einrichtung unseres eigenen lokalen Automatisierungssystems mit Selenium befassen und wie man dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
