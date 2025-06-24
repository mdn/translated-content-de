---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Manuelles Durchführen von Tests auf mehreren Browsern und Geräten, mehrmals am Tag, kann mühsam und zeitaufwändig sein. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner benutzt, und wie man die Grundlagen kommerzieller Browser-Test-Automatisierungsanwendungen wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung der grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihren Alltag erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die die Arbeit erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht es einfach

In diesem Modul haben wir zahlreiche Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf die zu testenden Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — all die Dinge, die wir in früheren Artikeln manuell angesprochen haben, zu testen, kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns helfen können, einen Teil dieses Aufwands zu automatisieren. Es gibt zwei Hauptwege, auf denen wir die Tests, die wir in diesem Modul besprochen haben, automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/), oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifizieren von Code durchzuführen, CSS-Präfixe hinzuzufügen oder aufkommende JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu transpilen, und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern durchzuführen und Ergebnisse zurückzugeben, wobei Sie auf Fehler in den Browsern aufmerksam gemacht werden, sobald sie auftreten. Kommerzielle Cross-Browser-Testanwendungen wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben Ihnen jedoch, deren Setup per Fernzugriff über eine Schnittstelle zu nutzen und ersparen Ihnen den Aufwand, ein eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel werden wir uns ansehen, wie man einen Task-Runner einrichtet und die grundlegende Funktionalität kommerzieller Systeme wie der oben genannten nutzt.

> [!NOTE]
> Die oben genannten Kategorien sind nicht gegenseitig ausschließend. Es ist möglich, einen Task-Runner einzurichten, um auf einen Dienst wie Sauce Labs oder LambdaTest über eine API zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Wir werden dies unten ebenfalls betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Testing-Tools

Wie oben erwähnt, können Sie gängige Aufgaben wie Linting und Minifizieren von Code drastisch beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen. Beispielsweise könnte dies bei jedem Speichern einer Datei oder zu einem anderen Zeitpunkt der Fall sein. In diesem Abschnitt erfahren Sie, wie Sie das Ausführen von Aufgaben mit Node und Gulp automatisieren können, einer anfängerfreundlichen Option.

### Einrichtung von Node und npm

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem zugehörigen Paketmanager, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Befolgen Sie die Anweisungen unter [Installing Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Achten Sie darauf, [zu überprüfen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits zuvor installiert haben, sollten Sie sie auf ihre neuesten Versionen aktualisieren. Dies kann erfolgen, indem Sie über den Node-Version-Manager die neuesten LTS-Versionen installieren (siehe erneut die oben verlinkten Anweisungen).

Um mit Node/npm-basierten Paketen in Ihren Projekten zu arbeiten, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Zum Beispiel erstellen wir zunächst ein Testverzeichnis, um ohne Sorge vor Problemen zu experimentieren.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort über Ihr Datei-Manager-UI oder über eine Befehlszeile, indem Sie zu dem gewünschten Ort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie lediglich Ihr Testverzeichnis öffnen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die Informationen zu sammeln, die für die Einrichtung des Projekts erforderlich sind; Sie können für den Moment einfach die Standardwerte wählen.
4. Sobald alle Fragen gestellt wurden, wird nachgefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie die Eingabetaste/Return, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

Diese Datei ist im Wesentlichen eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber für den Moment sieht sie etwa so aus:

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

### Einrichtung von Gulp-Automatisierung

Lassen Sie uns sehen, wie wir Gulp einrichten und verwenden, um einige Test-Tools zu automatisieren.

1. Beginnen Sie mit dem Erstellen eines Test-npm-Projekts, indem Sie das Verfahren am Ende des vorherigen Abschnitts befolgen. Fügen Sie außerdem der `package.json`-Datei die Zeile `"type": "module"` hinzu, sodass sie etwa so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen - kopieren Sie unsere Musterdateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einen Unterordner mit dem Namen `src` innerhalb Ihres Projektordners. Sie können auch eigene Testinhalte ausprobieren, sollten jedoch bedenken, dass solche Tools nicht gut mit JS/CSS funktionieren, die in die HTML-Datei eingebettet sind - Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (d.h. es steht in allen Projekten zur Verfügung) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis namens `gulpfile.mjs`. Diese Datei führt alle unsere Aufgaben aus. Fügen Sie dieser Datei folgendes hinzu:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts tut, außer eine Nachricht im Terminal anzuzeigen - das ist nützlich, um uns mitzuteilen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung durch etwas Nützlicheres ersetzen.

   Jede Gulp-Aufgabe wird im gleichen grundlegenden Format exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter entgegen — einen Callback, der nach Abschluss der Aufgabe ausgeführt wird.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie das jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen von realen Aufgaben zu Gulp

Nun sind wir bereit, unserer Gulp-Datei mehr Aufgaben hinzuzufügen. Jede Ergänzung kann erfordern, dass Sie die Datei `gulpfile.mjs` folgendermaßen ändern:

- Wenn wir Sie bitten, einige `import`-Anweisungen hinzuzufügen, fügen Sie sie unter der vorhandenen `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie diese am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standard-Export zu ändern, ändern Sie die `export default`-Anweisung in der von uns angegebenen Weise.

So wird Ihre Datei `gulpfile.mjs` anwachsen:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um einige reale Aufgaben zu Gulp hinzuzufügen, müssen wir uns überlegen, was wir tun möchten. Ein sinnvoller Satz von Grundfunktionalitäten, die wir in unserem Projekt ausführen können, sieht wie folgt aus:

- html-tidy, css-lint und js-hint zum Linting und zur Berichterstellung/behebung häufiger HTML/CSS/JS-Fehler (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer zur Durchsuchung unserer CSS-Dateien und zum Hinzufügen von Anbieterpräfixen, wo nötig (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel zum Transpilieren neuer JavaScript-Syntax-Features in traditionelle Syntax, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obenstehenden Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann eventuelle Abhängigkeiten am Anfang der Datei `gulpfile.mjs` einbinden und dann Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit sie über Gulp verfügbar ist.

#### html-tidy

1. Installieren Sie das Plugin mit dem folgenden Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE] > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die Datei `package.json` Ihres Projekts schauen, sehen Sie einen Eintrag für dieses im `devDependencies`-Eigenschaft.

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

4. Ändern Sie den Standard-Export zu:

   ```js
   export default html;
   ```

Hierbei holen wir unsere `index.html`-Datei mit `gulp.src()`, welches es uns ermöglicht, eine Quelldatei zu greifen, um etwas damit zu machen.

Wir verwenden dann die `pipe()`-Funktion, um diese Quelle zu einem anderen Befehl weiterzuleiten, um etwas anderes damit zu tun. Wir können so viele dieser Befehle miteinander verketten, wie wir möchten. Zuerst führen wir `htmltidy()` auf der Quelle aus, welches die Datei durchgeht und Fehler repariert. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei in das `build`-Verzeichnis.

In der Eingangsverion der Datei ist Ihnen vielleicht aufgefallen, dass wir ein leeres {{htmlelement("p")}}-Element platziert haben; htmltidy hat dieses bis zur Erzeugung der Ausgabedatei entfernt.

#### Autoprefixer und css-lint

1. Installieren Sie die Plugins mit den folgenden Zeilen:

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

5. Ändern Sie die Standard-Aufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier holen wir unsere Datei `style.css`, führen csslint darauf aus (die eine Liste von Fehlern in Ihrem CSS ins Terminal ausgibt), führen sie dann durch den Autoprefixer, um etwaige benötigte Präfixe zu ergänzen, damit naszierende CSS-Funktionen auch in älteren Browsern funktionieren. Am Ende der Pipe-Kette wird das modifizierte CSS mit Präfixen in das `build`-Verzeichnis ausgegeben. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — entfernen Sie einen Klammer in Ihrer CSS-Datei und führen Sie Gulp erneut aus, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie die Plugins mit den folgenden Zeilen:

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

3. Fügen Sie folgenden Test am Ende der `gulpfile.mjs` hinzu:

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

4. Ändern Sie die Standard-Aufgabe zu:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier holen wir unsere Datei `main.js`, führen `jshint` darauf aus und geben die Ergebnisse an das Terminal mittels `jshint.reporter`; wir geben die Datei dann an babel weiter, welches sie in eine ältere Syntax umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code beinhaltete eine [fat arrow function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), welche babel in eine ältere Funktionsform umgewandelt hat.

#### Weitere Ideen

Wenn dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Zeilen den Zeitpunkt zeigen, wann Aufgaben beginnen oder enden, der Aufgabenname und die Dauer von 'Abgeschlossenen' Aufgaben.](gulp-output.png)

Sie können dann die durch Ihre automatisierten Aufgaben ausgegebenen Dateien anzeigen, indem Sie sie im `build`-Verzeichnis betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, prüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann Gulp erneut auszuführen, um festzustellen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, mit der Sie Ihre Dateien beobachten und Tests durchführen können, wann immer Sie eine Datei speichern. Zum Beispiel, versuchen Sie, das Folgende am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "führen Sie diese Aufgaben aus, wann immer eine Datei dieser Typen gespeichert wird". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, beispielsweise `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann darauf hingepipete Aufgaben ausführen.

Es gibt viel mehr, was Sie mit Gulp tun können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) bietet buchstäblich Tausende von Plugins, durch die Sie durchstöbern können.

### Andere Task-Runner

Es gibt viele andere Task-Runner, die verfügbar sind. Wir wollen damit keineswegs sagen, dass Gulp die beste Lösung ist, die es gibt, aber es funktioniert für uns und ist für Anfänger relativ zugänglich. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert sehr ähnlich wie Gulp, mit dem Unterschied, dass es auf Aufgaben basiert, die in einer Konfigurationsdatei angegeben sind, anstatt auf geschriebenem JavaScript. Siehe [Getting started with Grunt for more details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten aus Ihrer `package.json`-Datei ausführen, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Das funktioniert unter dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie man die Tools über die Kommandozeile ausführt, können Sie sie dann mit npm-Skripten ausführen. Es ist etwas trickreicher zu arbeiten, aber kann lohnend sein für diejenigen, die stark in ihren Kommandozeilenfähigkeiten sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Fülle weiterer Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Jetzt schauen wir uns kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Wenn Sie diese Art von Diensten nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen, wie z. B. welchen Browser Sie in dem untersuchten Browser testen möchten. Die App konfiguriert dann ein neues VM mit dem angegebenen Betriebssystem und dem angegebenen Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Texten usw. zurück. Dies ist sehr nützlich und viel bequemer, als alle Betriebssystem- und Browserkombinationen selbst einrichten zu müssen.

Sie können dann einen Gang höher schalten und eine API verwenden, um auf Funktionen programmatisch zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern, wie z. B. eigenen lokalen Selenium-Umgebungen und anderen, verbunden werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gut und relativ einfach für Anfänger, um damit zu starten.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um zu beginnen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse überprüft haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zu Live-Manuellen Tests zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, das Gerät und den Browser auszuwählen, den Sie testen möchten - Plattformen auf der linken Seite, Geräte auf der rechten Seite. Wählen Sie ein Gerät aus, um die Auswahl der verfügbaren Browser auf diesem Gerät anzuzeigen.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Symbole lädt Ihre Auswahl an Plattform, Gerät und Browser - wählen Sie jetzt eines aus und probieren Sie es.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und entsprechende Gesten (zum Beispiel Pinch/Zoom, zwei Finger zum Scrollen) auf den Touchpads unterstützender Geräte wie MacBooks verwenden. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, mit dem Sie die Sitzung steuern können.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen umfassen für:

- Anzeige von Informationen über den aktuellen Browser
- Wechsel zu anderen Browsern
- Testen von localhost-URLs
- Einstellen der Zoomstufe und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Erstellen/Annotieren von Screenshots und Melden von Fehlern
- Zugriff auf Entwickler-Tools des Browsers
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleser

#### Fortgeschritten: Die BrowserStack-API

BrowserStack verfügt auch über eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), mit der Sie programmatisch Details Ihres Kontoplans, Ihrer Sitzungen, Builds usw. abrufen können.

Werfen wir einen kurzen Blick darauf, wie wir die API mit Node.js aufrufen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie unter [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie zum Beispiel `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können Sie aus Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentication & Security_ entnehmen.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, beliebt und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Planungsdetails enthält.

   ```bash
   node call_bstack
   ```

Nachfolgend haben wir einige andere einsatzbereite Funktionen bereitgestellt, die Sie beim Arbeiten mit der BrowserStack restful API nützlich finden könnten.

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

Wir werden die [Ausführung automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Beginnen wir mit einem Sauce Labs Trial.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse überprüft haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Stellen Sie sicher, dass Sie sich auf dem Tab _Manual Tests_ befinden.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verz provided test isvalid old data example: <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Kombination aus Browser/OS aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Die Auswahl ist riesig!! [wählen Sie sauce manuelle Sitzung](sauce-manual-session.png)
3. Wenn Sie auf Session starten klicken, erscheint ein Ladescreen, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen. [Sauce-Test läuft](sauce-test-running.png)
5. Von hier aus können Sie das Layout sehen, wie es im getesteten Browser aussehen würde, die Maus bewegen und Schaltflächen klicken usw. Das obere Menü ermöglicht Ihnen:
   - Die Sitzung zu beenden
   - Jemand anderem eine URL zu geben, damit er den Test remote beobachten kann
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Einen Screenshot zu erstellen
   - Im Vollbildmodus zu testen

Sobald Sie die Sitzung beenden, kehren Sie zum Tab Manual Tests zurück, wo Sie einen Eintrag für jede der vorher von Ihnen begonnenen manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden mehr Daten zur Sitzung angezeigt. Hier können Sie jeden Screenshot, den Sie aufgenommen haben, herunterladen, ein Video der Sitzung ansehen, Datenprotokolle anzeigen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und weitaus bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs verfügt über eine [restful API](https://docs.saucelabs.com/dev/api/), mit der Sie programmatisch Informationen zu Ihrem Konto und bestehenden Tests abrufen und Tests mit weiteren Details wie ihrem Bestehen/nicht Bestehen annotieren können, was alleine durch manuelle Tests nicht aufnehmbar ist. Beispielsweise möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests remote über Sauce Labs ausführen, um eine bestimmte Kombination aus Browser/OS zu testen und dann die Testergebnisse zurück an Sauce Labs zu übermitteln.

Es gibt mehrere Clients, mit denen Sie API-Anrufe mit Ihrer bevorzugten Umgebung tätigen können, sei es PHP, Java, Node.js usw.

Werfen wir einen kurzen Blick darauf, wie wir die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) aufrufen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `sauce-test`.
2. Installieren Sie den Node-Sauce-Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce-Labs-Benutzernamen und Ihren API-Schlüssel in den angegebenen Bereichen eintragen. Diese können Sie auf Ihrer [User Settings](https://app.saucelabs.com/user-settings) Seite abrufen. Tragen Sie diese jetzt ein.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das eigentliche Ausführen automatisierter Sauce Labs Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Beginnen wir mit einem TestingBot Trial.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse überprüft haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie wählen können. Stellen Sie sicher, dass Sie sich vorerst auf dem Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Grid auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladescreen, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser remote testen.
5. Von hier aus können Sie das Layout sehen, wie es im getesteten Browser aussehen würde, die Maus bewegen und Schaltflächen anklicken usw. Das Seitenmenü ermöglicht Ihnen:
   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu erstellen, bearbeiten und herunterladen
   - Im Vollbildmodus zu testen

Sobald Sie die Sitzung beenden, kehren Sie zur _Live Web Testing_ Seite zurück, wo Sie einen Eintrag für jede der von Ihnen vorher gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden mehr Daten zur Sitzung angezeigt. Hier können Sie jeden Screenshot, den Sie aufgenommen haben, herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot API

TestingBot verfügt über eine [restful API](https://testingbot.com/support/api), mit der Sie programmgesteuert Informationen zu Ihrem Konto und bestehenden Tests abrufen und Tests mit weiteren Details wie ihrem Bestehen/nicht Bestehen annotieren können, was alleine durch manuelle Tests nicht aufnehmbar ist.

TestingBot hat mehrere API-Clients, die Sie zur Interaktion mit der API verwenden können, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Nachfolgend ein Beispiel, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagiert.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot Key und Ihr Secret in den angegebenen Bereichen eintragen. Diese können Sie im [TestingBot Dashboard](https://testingbot.com/members/user/edit) finden.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das eigentliche Ausführen automatisierter TestingBot Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemliche Fahrt, aber ich bin sicher, Sie können die Vorteile sehen, die Automatisierungstools bieten, um einen Teil der schweren Handarbeit beim Testen zu übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten können und wie Sie dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
