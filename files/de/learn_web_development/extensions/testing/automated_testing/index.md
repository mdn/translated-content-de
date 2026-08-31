---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Manuelles Testen auf mehreren Browsern und Geräten, mehrmals täglich, kann mühsam und zeitaufwendig werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet, und wie man die Grundlagen von kommerziellen Browser-Testautomatisierungsanwendungen wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den hochrangigen <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihnen das Leben erleichtern kann, und wie Sie einige der kommerziellen Produkte nutzen können, die es einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht die Dinge einfacher

In diesem Modul haben wir zahlreiche Möglichkeiten beschrieben, wie Sie Ihre Websites und Apps testen können, und erläutert, welchen Umfang Ihre Cross-Browser-Testanstrengungen haben sollten in Bezug darauf, welche Browser getestet werden sollen, Barrierefreiheitsüberlegungen und mehr. Klingt nach viel Arbeit, oder?

Wir stimmen zu — alles, was wir in den vorherigen Artikeln betrachtet haben, manuell zu testen, kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns helfen, einen Teil dieser Mühen zu automatisieren. Es gibt zwei Hauptarten, die Tests, die wir in diesem Modul besprochen haben, zu automatisieren:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um Tests durchzuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Linten und Minimieren von Code auszuführen, CSS-Präfixe hinzuzufügen oder aufstrebende JavaScript-Features für eine maximale plattformübergreifende Reichweite zu transpilieren usw.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie über Fehler in Browsern informieren, sobald sie auftreten. Kommerzielle Cross-Browser-Testing-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Fernzugriff auf deren Setup über eine Oberfläche, wodurch Ihnen die Mühe erspart wird, Ihr eigenes Testsystem einzurichten.

Im nächsten Artikel werden wir uns damit beschäftigen, wie Sie Ihr eigenes Selenium-basiertes Testsysten einrichten. In diesem Artikel sehen wir uns an, wie man einen Task-Runner einrichtet und die grundlegende Funktionalität von kommerziellen Systemen wie den oben genannten nutzt.

> [!NOTE]
> Die obigen zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner so einzurichten, dass er über eine API auf einen Dienst wie Sauce Labs zugreift, plattformübergreifende Tests durchführt und Ergebnisse zurückgibt. Auch darauf werden wir unten eingehen.

## Verwenden eines Task-Runners zur Automatisierung von Test-Tools

Wie oben gesagt, können Sie mit einem Task-Runner häufige Aufgaben wie das Linten und Minimieren von Code erheblich beschleunigen, indem Sie alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess ausführen lassen. Dies könnte beispielsweise jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir uns damit befassen, wie man Task-Läufe mit Node und Gulp automatisiert, eine anfängerfreundliche Option.

### Einrichten von Node und npm

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem dazugehörigen Paketmanager, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Vergewissern Sie sich, dass [Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies kann durch Verwendung des Node-Version-Managers zur Installation der neuesten LTS-Versionen erfolgen (verweisen Sie erneut auf die oben verlinkten Anweisungen).

Um mit Node/npm-basierten Paketen in Ihren Projekten zu arbeiten, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu machen.

Erstellen wir beispielsweise zunächst ein Testverzeichnis, damit wir ausprobieren können, ohne Angst haben zu müssen, etwas zu beschädigen.

1. Erstellen Sie mit Ihrer Dateimanager-Benutzeroberfläche ein neues Verzeichnis an einem sinnvollen Ort oder auf einer Befehlszeile, indem Sie zum gewünschten Speicherort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen viele Fragen, um die für die Einrichtung des Projekts erforderlichen Informationen zu ermitteln; Sie können zunächst die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm generiert eine `package.json`-Datei in Ihrem Verzeichnis.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst wird sie etwa so aussehen:

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

Sehen wir uns an, wie man Gulp einrichtet und es benutzt, um einige Test-Tools zu automatisieren.

1. Erstellen Sie zunächst ein Test-npm-Projekt mit dem am Ende des vorherigen Abschnitts beschriebenen Verfahren. Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"`, damit sie etwa so aussieht:

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

2. Als nächstes benötigen Sie etwas beispielhaften HTML-, CSS- und JavaScript-Inhalt, um Ihr System darauf zu testen — machen Sie Kopien unserer Beispiel-Dateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, aber beachten Sie, dass solche Tools nicht gut mit JS/CSS in einer HTML-Datei funktionieren — Sie benötigen separate Dateien.
3. Installieren Sie gulp global (bedeutet, es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl in Ihrem npm-Projektverzeichnis-Stamm aus, um gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie jetzt eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Fügen Sie dieser Datei Folgendes hinzu:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts weiter tut, als eine Nachricht im Terminal auszugeben — dies ist nützlich, um sicherzustellen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default`-Anweisung auf etwas nützlicheres ändern.

   Jede Gulp-Aufgabe wird im gleichen Grundformat exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter — einen Rückruf, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen von realen Aufgaben zu Gulp

Jetzt sind wir bereit, weitere Aufgaben zu unserer Gulp-Datei hinzuzufügen. Jede Hinzufügung erfordert möglicherweise, dass Sie die `gulpfile.mjs`-Datei folgendermaßen ändern:

- Wenn wir Sie bitten, `import`-Anweisungen hinzuzufügen, fügen Sie sie unterhalb der bestehenden `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie sie am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standard-Export zu ändern, ändern Sie die `export default`-Anweisung in der von uns angegebenen Weise.

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

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun möchten. Eine vernünftige Reihe grundlegender Funktionen, die auf unserem Projekt ausgeführt werden sollen, umfasst:

- html-tidy, css-lint und js-hint, um häufige HTML/CSS/JS-Fehler zu linden und zu melden/zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und Anbieterpräfixe nur dort hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntax-Features in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der `gulpfile.mjs`-Datei einfügen, dann Ihren Test/die Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe für den Zugriff über den gulp-Befehl exportieren.

#### html-tidy

1. Installieren Sie mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die Datei `package.json` Ihres Projekts schauen, sehen Sie einen Eintrag dafür in der Eigenschaft `devDependencies`.

2. Fügen Sie folgende Abhängigkeit zu `gulpfile.mjs` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie folgenden Test am Ende von `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere Entwicklungs-`index.html`-Datei mit `gulp.src()` zu, was es uns erlaubt, eine Quelldatei zu greifen, um etwas damit zu machen.

Wir nutzen anschließend die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzugeben, der etwas damit macht. Wir können so viele von diesen aneinanderketten, wie wir wollen. Zuerst führen wir `htmltidy()` auf der Quelle aus, das unsere Datei durchgeht und Fehler behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Eingabefassung der Datei haben Sie möglicherweise bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies entfernt, als die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie mit den folgenden Zeilen:

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

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (was eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt), und führen sie dann durch autoprefixer, um alle benötigten Präfixe hinzuzufügen, damit aufstrebende CSS-Features auch in älteren Browsern funktionieren. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS im `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie mit den folgenden Zeilen:

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

Hier greifen wir unsere `main.js`-Datei, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; dann übergeben wir die Datei an babel, das den JavaScript-Code in eine ältere Syntax konvertiert und das Ergebnis im `build`-Verzeichnis ausgibt. Unser originaler Code beinhaltete eine [fat arrow function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von babel in eine ältere Funktion umgewandelt wurde.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie in Ihrem Projektverzeichnis den `gulp`-Befehl ausführen, und Sie sollten eine ähnliche Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in dem Zeilen den Zeitpunkt, an dem Aufgaben gestartet oder abgeschlossen wurden, den Namen der Aufgabe und die Dauer anzeigen.](gulp-output.png)

Sie können dann die durch Ihre automatisierten Aufgaben erzeugten Dateien ausprobieren, indem Sie sie im `build`-Verzeichnis anschauen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler bekommen, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, Abschnitte mit HTML-/CSS-/JavaScript-Code auszukommentieren und dann gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp kommt mit einer `watch()`-Funktion, mit der Sie Ihre Dateien beobachten und Tests ausführen können, wann immer Sie eine Datei speichern. Versuchen Sie beispielsweise, am Ende Ihrer `gulpfile.mjs` Folgendes hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "führe diese Aufgaben aus, wenn alle Dateien dieser Typen gespeichert werden. Sie könnten auch Platzhalterzeichen in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien greifen und dann die gepipten Aufgaben darauf ausführen.

Mit Gulp können Sie noch viel mehr machen. Das [Gulp-Plug-in-Verzeichnis](https://gulpjs.com/plugins/) bietet buchstäblich Tausende von Plug-ins, durch die Sie stöbern können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir behaupten nicht, dass Gulp die beste Lösung ist, die es gibt, aber es funktioniert für uns und ist recht zugänglich für Anfänger. Sie könnten auch andere Lösungen ausprobieren:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es sich auf Aufgaben stützt, die in einer Konfigurationsdatei spezifiziert sind, anstatt mit geschriebenem JavaScript zu arbeiten. Siehe [Getting started with Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können Aufgaben auch direkt mit npm-Skripten ausführen, die sich innerhalb Ihrer `package.json`-Datei befinden, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Dies basiert auf der Prämisse, dass Dinge wie Gulp-Plug-ins im Wesentlichen Wrapper für Befehlszeilenwerkzeuge sind. Wenn Sie herausfinden können, wie Sie die Werkzeuge über die Befehlszeile ausführen können, können Sie sie auch mit npm-Skripten ausführen. Es ist etwas komplizierter zu arbeiten, kann aber für diejenigen, die mit ihren Befehlszeilenkenntnissen stark sind, lohnend sein. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit einer Menge weiterer Informationen.

## Verwendung von kommerziellen Testdiensten zur Beschleunigung des Browser-Tests

Werfen wir nun einen Blick auf kommerzielle browsergestützte Testdienste von Drittanbietern und was sie für uns tun können.

Wenn Sie diese Art von Diensten nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen wie den Browsern, in denen Sie sie getestet haben möchten. Die App konfiguriert dann eine neue virtuelle Maschine mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Texten usw. zurück. Dies ist sehr nützlich und weitaus bequemer, als alle die Betriebssystem-/Browserkombinationen selbst einrichten zu müssen.

Sie können dann noch einen Gang höher schalten, indem Sie eine API verwenden, um Funktionalitäten programmatisch zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern, wie Ihre eigenen lokalen Selenium-Umgebungen und andere, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle browsergestützte Testsysteme, die erhältlich sind, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten Werkzeuge sind, aber sie sind gute, die einfach für Anfänger einzurichten sind.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um loszulegen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den Link _Live_ im oberen Navigationsmenü, um zu Live-Manuellem Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht Ihnen die Auswahl der Plattform, des Geräts und des Browsers, die Sie testen möchten.
Für Desktop-Tests wählen Sie direkt das Betriebssystem und den Browser aus.
Für mobile Geräte wählen Sie das mobile Betriebssystem, das Gerät und dann einen Browser für Ihre Geräte-Browser-Kombination.

![Testauswahl](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browsersymbole klicken, wird Ihre Wahl der Plattform, des Geräts und des Browsers geladen — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, hoch und runter scrollen, indem Sie mit der Maus ziehen, sowie geeignete Gesten (z.B. Pinch/Zoom, zwei Finger, um zu scrollen) auf den Touchpads von unterstützenden Geräten wie MacBooks verwenden.

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen umfassen für:

- Anzeige von Informationen über den aktuellen Browser
- Wechsel zu anderen Browsern
- Testen von localhost-URLs
- Einstellung des Zoomlevels und Umschalten der Ausrichtung
- Speichern und Laden von Lesezeichen
- Erfassen/Kommentieren von Screenshots und Erstellen von Fehlerberichten
- Zugriff auf die Browser-DevTools
- Ändern des gemeldeten Standorts
- Drosselung des Netzwerks
- Zugriff auf Bildschirmleseprogramme

![Testmenü](browserstack-test-menu-sized.png)

Für weitere Informationen siehe die [BrowserStack Live](https://www.browserstack.com/docs/live) Dokumentation.

#### Fortgeschritten: Die BrowserStack-API

BrowserStack hat auch eine [RESTful-API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, Details zu Ihrem Account-Plan, Sessions, Builds usw. programmatisch abzurufen.

Werfen wir einen kurzen Blick darauf, wie wir auf die API mit Node.js zugreifen würden.

1. Erstellen Sie zunächst ein neues npm-Projekt, um dies auszuprobieren, wie es in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben ist. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `bstack-test`.
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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können unter den _Authentifizierung & Sicherheit_ in Ihren [BrowserStack Account- & Profil-Details](https://www.browserstack.com/accounts/profile/details) abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios ausgewählt, da es einfach, beliebt und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt mit den BrowserStack-Plan-Details im Terminal sehen.

   ```bash
   node call_bstack
   ```

Nachfolgend haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die Sie nützlich finden könnten, wenn Sie mit der BrowserStack-RESTful-API arbeiten.

Diese Funktion gibt zusammenfassende Details zu allen zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automated test details](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Diese Funktion gibt Details zu den spezifischen Sessions für einen bestimmten Build zurück:

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

Wir werden das Ausführen von [automatisierten BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs Testversion beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelles Testen

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet eine Menge an Möglichkeiten.
Wenn Sie eingeloggt sind, folgen Sie dem 'Getting started'-Leitfaden oben links auf der Seite:

1. In "Führen Sie Ihren ersten Test durch" klicken Sie auf _Desktop-Browser_.
2. Auf dem nächsten Bildschirm geben Sie die URL einer Seite ein, die Sie testen möchten (wie diese Seite zum Beispiel), und wählen Sie dann eine Browser-/OS-Kombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden.
   Es gibt viel, aus dem Sie wählen können, wie Sie sehen werden!
   ![Auswahl Sauce Manual Session](sauce-manual-session.png)
3. Wenn Sie mit dem Testen beginnen, erscheint ein Ladebildschirm und eine Umgebung dreht sich mit der Geräte-/Browserkombination, die Sie gewählt haben.
   Sie können dann damit beginnen, die Website im gewählten Browser aus der Ferne zu testen.

Sie können an diesem Punkt eine Menge machen, wie einen Test-URL teilen, damit jemand anderes den Test aus der Ferne beobachten kann, Text/Notizen in eine entfernte Zwischenablage kopieren, einen Screenshot machen, im Vollbildmodus testen und mehr.

Sobald Sie die Sitzung beenden, kehren Sie zum _Live_-Tab zurück, wo Sie für jede der vorher gestarteten manuellen Sitzungen einen Eintrag sehen.
Klicken auf einen dieser Einträge zeigt mehr Daten für die Sitzung an.
Hier können Sie alle Screenshots, die Sie gemacht haben, herunterladen, ein Video der Sitzung ansehen, Datenprotokolle ansehen und mehr.
Das ist bereits sehr nützlich und viel bequemer, als mehrere Emulatoren und virtuelle Maschinen selbst einrichten zu müssen.

Für weitere Informationen, siehe die [Sauce Labs Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs verfügt über eine [RESTful-API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, Details zu Ihrem Konto und bestehenden Tests programmatisch abzurufen und Tests mit weiteren Details zu versehen, wie ihrem Pass-/Fail-Status, der allein durch manuelles Testing nicht aufgezeichnet werden kann. Zum Beispiel könnten Sie einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es gibt mehrere Clients, die Ihnen ermöglichen, die API mit Ihrer bevorzugten Umgebung anzusprechen, sei es PHP, Java, Node.js usw.

Werfen wir einen kurzen Blick darauf, wie wir auf die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) zugreifen würden.

1. Erstellen Sie zunächst ein neues npm-Projekt, um dies auszuprobieren, wie es in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben ist. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, etwa `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie innerhalb Ihres Projekt-Stammverzeichnisses eine neue Datei namens `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs Benutzernamen und API-Schlüssel an den markierten Stellen einfüllen. Diese können auf Ihrer [Benutzereinstellungsseite](https://app.saucelabs.com/user-settings) abgerufen werden. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden im nächsten Artikel tatsächlich Selen-geführte Tests in Sauce Labs besprechen.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einer TestingBot Testversion beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie wählen können. Stellen Sie sicher, dass Sie auf dem Tab _Live Web Testing_ sind.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint dann ein Ladebildschirm, der eine virtuelle Maschine mit der gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie von dort aus beginnen, die Website im gewählten Browser aus der Ferne zu testen.
5. Von hier aus können Sie sehen, wie das Layout im Browser, den Sie testen, aussehen würde, die Maus bewegen und ausprobieren, Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht Ihnen:
   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, zu bearbeiten und herunterzuladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beendet haben, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie für jede der zuvor begonnenen manuellen Sitzungen einen Eintrag sehen. Das Klicken auf einen dieser Einträge zeigt mehr Daten zur Sitzung an. Hier können Sie alle gemachten Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung einsehen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [RESTful-API](https://testingbot.com/support/api), die es Ihnen ermöglicht, Details zu Ihrem Konto und bestehenden Tests programmatisch abzurufen und Tests mit weiteren Details zu versehen, wie ihrem Pass/Fail-Status, der allein durch manuelles Testen nicht aufgezeichnet werden kann.

TestingBot bietet mehrere API-Clients an, mit denen Sie mit der API arbeiten können, darunter Clients für Node.js, Python, Ruby, Java und PHP.

Unten ist ein Beispiel, wie man mit dem Node.js-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagiert.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z.B. `tb-test`.
2. Installieren Sie den Node TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie innerhalb Ihres Projekt-Stammverzeichnisses eine neue Datei namens `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und -Geheimnis an den angegebenen Stellen einfüllen. Diese finden Sie im [TestingBot Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen von automatisierten TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war schon eine Reise, aber Ich bin mir sicher, dass Sie beginnen können, die Vorteile zu erkennen, die Automatisierungstools zu nutzen, um die schwere Arbeit im Testen zu erleichtern.

Im nächsten Artikel werden wir uns damit beschäftigen, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten und wie man dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
