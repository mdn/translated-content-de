---
title: Einführung in automatisiertes Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 75165f9f9bde9bce3093a0d9d908a239c519a9ce
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Das manuelle Ausführen von Tests auf mehreren Browsern und Geräten mehrmals täglich kann mühsam und zeitaufwendig sein. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet, und wie man die Grundlagen kommerzieller Browser-Testautomatisierungsanwendungen wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen umfasst, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die die Arbeit erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht das Leben leichter

Im Laufe dieses Moduls haben wir viele verschiedene Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf zu testende Browser, Zugänglichkeitsüberlegungen und mehr haben sollten. Hört sich nach viel Arbeit an, oder?

Wir stimmen zu — das manuelle Testen all der Dinge, die wir in früheren Artikeln behandelt haben, kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns dabei helfen, einige dieser Schmerzen zu automatisieren. Es gibt zwei Hauptmethoden, wie wir die Tests, die wir in diesem Modul besprochen haben, automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/) oder [npm-Skripte](https://docs.npmjs.com/misc/scripts/), um Tests auszuführen und Code während Ihres Build-Prozesses zu bereinigen. Dies ist ein großartiger Weg, um Aufgaben wie das Linting und Minifizieren von Code, das Hinzufügen von CSS-Präfixen oder das Transpilieren neuer JavaScript-Funktionen für maximale Cross-Browser-Reichweite durchzuführen.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie bei Browserfehlern alarmieren. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben es Ihnen jedoch, ihr Setup remote über eine Schnittstelle zu nutzen, und ersparen Ihnen das Einrichten eines eigenen Testsystems.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel werden wir uns ansehen, wie Sie einen Task-Runner einrichten und die Grundfunktionen kommerzieller Systeme wie der oben genannten verwenden können.

> [!NOTE]
> Die beiden oben genannten Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Dienst wie Sauce Labs zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Darauf werden wir weiter unten ebenfalls eingehen.

## Verwendung eines Task-Runners zum Automatisieren von Testwerkzeugen

Wie bereits erwähnt, können Sie häufige Aufgaben wie Linting und Minifying von Code erheblich beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen. Zum Beispiel könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. Innerhalb dieses Abschnitts werden wir uns ansehen, wie Sie das Task-Running mit Node und Gulp automatisieren können, einer anfängerfreundlichen Option.

### Einrichtung von Node und npm

Die meisten heutigen Tools basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit dem zugehörigen Paketmanager, [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Installing Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node), um dies zu tun.
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_node.js_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann durch Verwendung des Node-Version-Managers zur Installation der neuesten LTS-Versionen erfolgen (siehe nochmals die oben verlinkten Anweisungen).

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist leicht zu machen.

Zum Beispiel erstellen wir zunächst ein Testverzeichnis, um ohne Angst vor Schäden zu experimentieren.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort, indem Sie die Benutzeroberfläche Ihres Dateimanagers verwenden oder, auf der Befehlszeile, indem Sie zu dem von Ihnen gewünschten Speicherort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl stellt Ihnen viele Fragen, um die für die Projekteinstellung erforderlichen Informationen in Erfahrung zu bringen; Sie können vorerst die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter, und npm generiert eine `package.json`-Datei in Ihrem Verzeichnis.

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

Damit sind Sie bereit, fortzufahren.

### Einrichtung der Gulp-Automatisierung

Schauen wir uns an, wie wir Gulp einrichten und es zur Automatisierung von Testwerkzeugen verwenden können.

1. Zunächst sollten Sie ein Test-Npm-Projekt gemäß dem Verfahren am Ende des vorherigen Abschnitts erstellen.
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

2. Als Nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System zu testen — erstellen Sie Kopien unserer Beispielfiles [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, sollten aber bedenken, dass solche Tools nicht gut mit in HTML-Dateien eingebettetem JS/CSS arbeiten — Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (d.h. es wird über alle Projekte hinweg verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie dann den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis namens `gulpfile.mjs`. Diese Datei führt alle unsere Aufgaben aus. Fügen Sie in diese Datei folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts tut außer eine Nachricht im Terminal auszugeben — dies ist nützlich, um sicherzustellen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir dieses `export default`-Statement zu etwas Nützlicherem abändern.

   Jede Gulp-Aufgabe wird im gleichen Basisformat exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter entgegen — einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe Ihres Gulps mit dem folgenden Befehl ausführen — probieren Sie das jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen von realen Aufgaben zu Gulp

Jetzt sind wir bereit, weitere Aufgaben zu unserer Gulp-Datei hinzuzufügen. Jede Hinzufügung erfordert möglicherweise, dass Sie die Datei `gulpfile.mjs` folgendermaßen ändern:

- Wenn wir Sie bitten, einige `import`-Anweisungen hinzuzufügen, fügen Sie sie unter der vorhandenen `import`-Anweisung hinzu.
- Wenn wir Sie bitten, ein neues `export function ...`-Statement hinzuzufügen, fügen Sie es am Ende der Datei hinzu.
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

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun möchten. Ein sinnvolles Set von Grundfunktionen, die auf unserem Projekt ausgeführt werden sollten, ist wie folgt:

- html-tidy, css-lint und js-hint, um allgemeine HTML/CSS/JS-Fehler zu linten und zu melden/reparieren (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Vendor-Präfixe hinzuzufügen, wo es nötig ist (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntaxmerkmale in traditionelle Syntax zu transpilieren, die in älteren Browsern läuft (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu benutzen, müssen Sie es zunächst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.mjs`-Datei anfordern, dann Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit sie über Gulps Befehl verfügbar wird.

#### html-tidy

1. Installieren Sie mit dem folgenden Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > [!NOTE]
   > `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in der `package.json`-Datei Ihres Projekts nachsehen, sehen Sie einen Eintrag dafür unter der Eigenschaft `devDependencies`.

2. Fügen Sie die folgende Abhängigkeit in die `gulpfile.mjs` ein:

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

Hier greifen wir auf unsere Entwicklungsdatei `index.html` mit `gulp.src()` zu, die es uns ermöglicht, eine Quelldatei zu ergreifen, um etwas damit zu machen.

Wir verwenden anschließend die `pipe()`-Funktion, um diese Quelle an einen anderen Befehl weiterzuleiten, um etwas anderes damit zu machen. Wir können so viele davon ketten, wie wir wollen. Wir führen zuerst `htmltidy()` auf der Quelle aus, was durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei an das Verzeichnis `build`.

In der Eingabeversion der Datei haben Sie möglicherweise bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies entfernt, als die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten in die `gulpfile.mjs` ein:

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

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (was eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt), dann wird es durch den Autoprefixer geleitet, um alle notwendigen Präfixe hinzuzufügen, um neuere CSS-Merkmale in älteren Browsern lauffähig zu machen. Am Ende der Pipe-Kette geben wir unser modifiziert- und prefixiertes CSS an das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten in die `gulpfile.mjs` ein:

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

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` an das Terminal aus; dann übergeben wir die Datei an babel, das sie in den alten Syntaxstil konvertiert und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Syntax umgewandelt hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Linien die Start- oder Endzeiten von Aufgaben, den Namen der Aufgabe und die Dauer von 'Abgeschlossenen' Aufgaben zeigen.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebenen Files ausprobieren, indem Sie sie im `build`-Verzeichnis anschauen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie isolieren können, was das Problem verursacht.

Gulp kommt mit einer `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests jedes Mal auszuführen, wenn Sie eine Datei speichern. Zum Beispiel, versuchen Sie, folgendes an das Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie jetzt, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "führen Sie diese Aufgaben aus, wenn irgendeine dieser Dateitypen gespeichert wird. Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, z.B. `gulp.src('src/*.css')` würde all Ihre CSS-Dateien erfassen und dann ge piped Aufgaben darauf ausführen.

Es gibt vieles mehr, was Sie mit Gulp machen können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins zu durchsuchen.

### Andere Task-Runner

Es gibt viele andere verfügbare Task-Runner. Wir versuchen keineswegs zu sagen, dass Gulp die beste Lösung da draußen ist, aber es funktioniert für uns und es ist relativ zugänglich für Anfänger. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt arbeitet auf sehr ähnliche Weise wie Gulp, außer dass es sich auf im Konfigurationsfile angegebene Aufgaben stützt, statt geschriebene JavaScript zu verwenden. Siehe [Getting started with Grunt for more details.](https://gruntjs.com/getting-started)
- Sie können Aufgaben auch direkt mit npm-Skripten aus Ihrer `package.json`-Datei ausführen, ohne dass Sie ein zusätzliches Task-Runner-System installieren müssen. Dies funktioniert auf der Prämisse, dass Dinge wie Gulp-Plugins im Wesentlichen Wrapper um Befehlszeilentools sind. Also, wenn Sie herausfinden können, wie Sie die Tools mit der Befehlszeile ausführen, können Sie sie dann mit npm-Skripten ausführen. Es ist etwas kniffliger damit zu arbeiten, kann aber lohnend sein für jene, die stark in Ihren Befehlszeilen-Fähigkeiten sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Nun lassen Sie uns auf kommerzielle Drittanbieter-Browser-Testdienste schauen und was sie für uns tun können.

Wenn Sie diese Dienste nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen darüber, in welchen Browsern Sie diese getestet haben möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Textdateien etc. zurück. Das ist sehr nützlich und weitaus bequemer, als alle OS/Browser-Kombinationen selbst einrichten zu müssen.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um Funktionalitäten programmgesteuert zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern wie Ihren eigenen lokalen Selenium-Umgebungen und anderen kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt auch andere kommerzielle Browser-Testsysteme, die verfügbar sind, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten Tools da draußen sind, aber sie sind gute, und einfach für Anfänger einzusetzen.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um zu beginnen:

1. Erstellen Sie ein [BrowserStack Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.
3. Klicken Sie auf den _Live_ Link im oberen Navigationsmenü, um zu Live Manuellen Tests zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht Ihnen es, die Plattform, das Gerät und den Browser, den Sie testen möchten, auszuwählen.
Für Desktop-Tests wählen Sie das Betriebssystem und den Browser direkt.
Für mobile Geräte wählen Sie das mobile Betriebssystem, Gerät und dann können Sie einen Browser für Ihre Gerät-Browser-Kombination auswählen.

![Testauswahl](browserstack-test-choices-sized.png)

Durch Anklicken eines dieser Browser-Symbole wird Ihre Plattform-Gerät-Browser-Auswahl geladen — wählen Sie nun eine aus und probieren Sie sie aus.

![Testgerät](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, durch Ziehen mit der Maus nach oben und unten scrollen und passende Gesten (z. B. Pinch/Zoom, zwei Finger zum Scrollen) auf unterstützenden Geräten wie MacBooks verwenden.

Die verfügbaren Features variieren je nachdem, welcher Browser geladen ist, und können Steuerungen für:

- Die aktuelle Browserinformation anzeigen
- Zu anderen Browsern wechseln
- Lokale URLs testen
- Zoomstufen einstellen und die Ausrichtung umschalten
- Lesezeichen speichern und laden
- Screenshots aufnehmen/bearbeiten und Fehlerberichte abgeben
- Zugriff auf die Developer-Tools
- Geändert gemeldeten Standort
- Netzwerkdrosselung
- Zugriff auf Screenreader

Weitere Informationen finden Sie in der [BrowserStack Live](https://www.browserstack.com/docs/live) Dokumentation.

#### Fortgeschritten: Die BrowserStack API

BrowserStack hat auch eine [RESTful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontoplanes, der Sitzungen, Builds etc. abzurufen.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir auf die API mit Node.js zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie zum Beispiel `bstack-test`.
2. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts mit dem Namen `call_bstack.js` und geben Sie ihm den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können aus Ihren [BrowserStack-Konto- und Profilinformationen](https://www.browserstack.com/accounts/profile/details) im Abschnitt _Authentication & Security_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, beliebt und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Plan-Details enthält.

   ```bash
   node call_bstack
   ```

Unten haben wir auch einige andere fertiggestellte Funktionen bereitgestellt, die Sie als nützlich erachten könnten, wenn Sie mit der RESTful API von BrowserStack arbeiten.

Diese Funktion gibt Übersichtsinformationen zu allen zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Den [laufenden automatisierten BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) werden wir im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs-Test beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuellen Tests

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) hat viele verfügbare Optionen.
Wenn Sie eingeloggt sind, folgen Sie der "Getting started"-Anleitung oben links auf der Seite:

1. In "Run your first test", klicken Sie auf _Desktop browser_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (wie z.B. diese Seite), dann wählen Sie eine Browser/OS-Kombination, die Sie durch die verschiedenen Buttons und Listen testen wollen.
   Es gibt eine Menge zu wählen, wie Sie sehen werden!
   ![Auswahl Sauce manueller Sitzung](sauce-manual-session.png)
3. Sobald Sie mit dem Testen beginnen, erscheint ein Ladebildschirm, und eine Umgebung läuft, die die von Ihnen gewählte Geräte-/Browser-Kombination ausführt.
   Sie können dann beginnen, die Website im gewählten Browser aus der Ferne zu testen.

Sie können an diesem Punkt ziemlich viel machen, wie eine Test-URL teilen, damit jemand anderes den Test aus der Ferne beobachten kann, Text/Notizen in eine entfernte Zwischenablage kopieren, einen Screenshot machen, im Vollbildbereich testen und mehr.

Sobald Sie die Sitzung beenden, kehren Sie zum _Live_ Reiter zurück, wo Sie einen Eintrag für jede der vorherigen manuellen Sitzungen sehen, die Sie gestartet haben.
Durch Klicken auf einen dieser Einträge erhalten Sie weitere Daten zur Sitzung.
Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung anschauen, Protokolle Daten einsehen und mehr.
Das ist bereits sehr nützlich und viel bequemer als die Installation mehrerer Emulatoren und virtueller Maschinen selbst durchführen zu müssen.

Weitere Informationen finden Sie in der [Sauce Labs Dokumentation](https://docs.saucelabs.com/).

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs hat eine [RESTful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmgesteuert Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details wie deren Zustand (Bestanden/Nicht Bestanden) zu kommentieren, die allein durch manuelles Testen nicht aufnehmbar sind. Beispielsweise möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser/OS-Kombination zu testen, und anschließend die Testergebnisse zurück an Sauce Labs übermitteln.

Es gibt mehrere Clients, die Ihnen ermöglichen, API-Aufrufe mit Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir über Node.js auf die API zugreifen würden, und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) verwenden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im Abschnitt [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie zum Beispiel `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts mit dem Namen `call_sauce.js`. Geben Sie ihm den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel an den markierten Stellen ausfüllen. Diese können Sie auf Ihrer [User-Settings](https://app.saucelabs.com/user-settings) Seite abrufen. Füllen Sie diese nun aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei so aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Das tatsächliche Laufen automatisierter Sauce Lab-Tests wird im nächsten Artikel behandelt.

### TestingBot

#### Erste Schritte mit TestingBot

Lassen Sie uns mit einem TestingBot-Test beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Die Grundlagen: Manuell Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen, aus denen Sie wählen können, auf. Stellen Sie sicher, dass Sie sich auf der Registerkarte _Live Web Testing_ befinden.

1. Geben Sie die URL der zu testenden Seite ein.
2. Wählen Sie die gewünschte Browser/Betriebssystem-Kombination, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination startet.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im gewählten Browser aus der Ferne testen.
5. Von hier aus können Sie das Layout, wie es im getesteten Browser aussehen würde, sehen, mit der Maus herumfahren und versuchen, Schaltflächen zu klicken, etc. Das Seitenmenü ermöglicht Ihnen es:
   - Die Sitzung zu stoppen
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, bearbeiten und herunterladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur _Live Web Testing_ Seite zurück, wo Sie einen Eintrag für jede der vorherigen manuellen Sitzungen sehen, die Sie gestartet haben. Durch Klicken auf einen dieser Einträge erhalten Sie weitere Informationen zur Sitzung. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und Protokolle der Sitzung einsehen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [RESTful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmatisch Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details wie deren Zustand (Bestanden/Nicht Bestanden) anzufügen, die allein durch manuelles Testen nicht aufnehmbar sind.

TestingBot hat mehrere API-Clients, mit denen Sie mit der API interagieren können, einschließlich Clients für Node.js, Python, Ruby, Java und PHP.

Unten ist ein Beispiel dafür, wie man mit dem Node.js-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagiert.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im [Einrichtung von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie `tb-test` zum Beispiel.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei im Stammverzeichnis Ihres Projekts mit dem Namen `tb.js`. Geben Sie ihm den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und das Geheimnis an den markierten Stellen ausfüllen. Diese finden Sie im [TestingBot Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Den tatsächlichen Einsatz automatisierter TestingBot-Tests wird im nächsten Artikel behandelt.

## Zusammenfassung

Das war eine ziemlich Fahrt, aber ich bin sicher, Sie sehen beginnen, die Vorteile der Verwendung von Automatisierungstools zu erkennen, um einen Teil der Last beim Testen zu übernehmen.

Im nächsten Artikel werden wir darauf eingehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie wir das mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
