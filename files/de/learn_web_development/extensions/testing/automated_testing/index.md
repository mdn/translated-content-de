---
title: Einführung in das automatisierte Testen
short-title: Automatisiertes Testen
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Manuelles Testen in mehreren Browsern und auf verschiedenen Geräten mehrmals täglich kann ermüdend und zeitaufwändig sein. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Aufgabenplaner verwendet und wie man die Grundlagen kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>;
        eine Vorstellung der grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die die Dinge vereinfachen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht die Dinge einfach

In diesem Modul haben wir verschiedene Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Bemühungen im Bereich Cross-Browser-Testing in Bezug auf die zu testenden Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — das manuelle Testen all der Dinge, die wir in früheren Artikeln betrachtet haben, kann wirklich lästig sein. Glücklicherweise gibt es Tools, die uns helfen, einen Teil dieser Mühen zu automatisieren. Es gibt zwei Hauptmethoden, um die Tests, über die wir in diesem Modul gesprochen haben, zu automatisieren:

1. Verwenden Sie einen Aufgabenplaner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm scripts](https://docs.npmjs.com/misc/scripts/) um Tests durchzuführen und Code im Rahmen Ihres Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Überprüfen und Minifizieren von Code durchzuführen, CSS-Präfixe hinzuzufügen oder entstehende JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu transpilen, und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern durchzuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern hinweisen, sobald sie auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben Ihnen jedoch, ihr Setup über eine Schnittstelle remote zu nutzen, wodurch Sie den Aufwand vermeiden, Ihr eigenes Testsystem einzurichten.

Wir werden im nächsten Artikel erörtern, wie Sie Ihr eigenes auf Selenium basierendes Testsystem einrichten. In diesem Artikel werden wir uns ansehen, wie man einen Aufgabenplaner einrichtet und die grundlegenden Funktionen von kommerziellen Systemen wie den oben genannten verwendet.

> [!NOTE]
> Die oben genannten zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Aufgabenplaner einzurichten, um auf einen Dienst wie Sauce Labs oder LambdaTest über eine API zuzugreifen, Cross-Browser-Tests auszuführen und Ergebnisse zu erhalten. Wir werden dies weiter unten auch betrachten.

## Verwenden eines Aufgabenplaners zur Automatisierung von Testtools

Wie wir oben gesagt haben, können Sie durch die Verwendung eines Aufgabenplaners erheblich beschleunigen, indem Sie häufige Aufgaben wie das Überprüfen und Minifizieren von Code automatisiert im Rahmen Ihres Build-Prozesses ausführen. Beispielsweise könnte dies bei jedem Speichern einer Datei oder zu einem anderen Zeitpunkt erfolgen. In diesem Abschnitt werden wir uns ansehen, wie man das Task-Running mit Node und Gulp automatisiert, eine einsteigerfreundliche Option.

### Einrichten von Node und npm

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Gegenstück, dem Paketmanager [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node Version Manager: Befolgen Sie die Anweisungen unter [Installation von Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node).
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` zuvor bereits installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Dies kann durch die Installation der neuesten LTS-Versionen über den entsprechend oben verlinkten Anweisungen erfolgen.

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu machen.

Zum Beispiel erstellen wir zunächst ein Testverzeichnis, damit wir ohne Angst vor Fehlern spielen können.

1. Erstellen Sie ein neues Verzeichnis an einer geeigneten Stelle mit Ihrer Dateimanager-Oberfläche oder in einer Befehlszeile, indem Sie an den gewünschten Speicherort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis gehen und es mit folgendem Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die Informationen zu erfahren, die zum Einrichten des Projekts erforderlich sind; Sie können vorerst einfach die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird es fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm generiert eine `package.json` Datei in Ihrem Verzeichnis.

Diese Datei ist im Wesentlichen eine Konfigurationsdatei für das Projekt. Sie können es später anpassen, aber für den Moment wird es ungefähr so aussehen:

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

Damit sind Sie bereit, weiter zu machen.

### Einrichtung der Gulp-Automatisierung

Schauen wir uns an, wie man Gulp einrichtet und es zur Automatisierung einiger Testtools verwendet.

1. Erstellen Sie zunächst ein Test-npm-Projekt, indem Sie das im unteren Teil des vorherigen Abschnitts beschriebene Verfahren befolgen.
   Aktualisieren Sie außerdem die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie etwa so aussieht:

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

2. Als nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System zu testen — machen Sie Kopien unserer Beispiel-Dateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können auch Ihre eigenen Testinhalte ausprobieren, aber beachten Sie, dass solche Tools nicht gut mit in HTML-Dateien eingebettetem JS/CSS funktionieren — Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (d.h. es wird für alle Projekte verfügbar sein) mit folgendem Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als nächstes den folgenden Befehl innerhalb des Stammverzeichnisses Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Legen Sie in dieser Datei Folgendes fest:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts anderes tut, als eine Nachricht an das Terminal auszugeben — dies ist nützlich, um zu wissen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default` Anweisung in etwas Nützlicheres ändern.

   Jede Gulp-Aufgabe wird im gleichen Basisformat exportiert – `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter – einen Rückruf, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe Ihres Gulps mit folgendem Befehl ausführen – probieren Sie es jetzt:

   ```bash
   gulp
   ```

### Hinzufügen einiger echter Aufgaben zu Gulp

Nun sind wir bereit, mehr Aufgaben in unsere Gulp-Datei hinzuzufügen. Jede Ergänzung kann es erforderlich machen, dass Sie die Datei `gulpfile.mjs` wie folgt ändern:

- Wenn wir Sie bitten, einige `import`-Anweisungen hinzuzufügen, fügen Sie sie unter die bestehende `import`-Anweisung hinzu.
- Wenn wir Sie bitten, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie sie am Ende der Datei hinzu.
- Wenn wir Sie bitten, den Standardexport zu ändern, ändern Sie die `export default`-Anweisung auf die von uns angegebene Weise.

So wächst Ihre `gulpfile.mjs`-Datei:

```js
import gulp from "gulp";
// Add any new imports here

// Our latest default export
// export default ...

// Add any new task exports here
// export function ...
// export function ...
```

Um einige echte Aufgaben in Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun möchten. Eine vernünftige Reihe von Grundfunktionen, die in unserem Projekt ausgeführt werden können, ist:

- html-tidy, css-lint und js-hint, um gängige HTML-/CSS-/JS-Fehler zu überprüfen und zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu durchsuchen und nur dort Vendor-Prefixes hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntaxmerkmale in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

In den oben genannten Links finden Sie vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.mjs`-Datei angeben, dann Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit es über den gulp-Befehl verfügbar ist.

#### html-tidy

1. Installation mit folgender Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json` Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür unter der Eigenschaft `devDependencies`.

2. Fügen Sie folgende Abhängigkeit zur `gulpfile.mjs` hinzu:

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

4. Ändern Sie den Standardexport in:

   ```js
   export default html;
   ```

Hier holen wir uns unsere Entwicklungs-`index.html`-Datei mit `gulp.src()`, die es uns ermöglicht, eine Quelldatei zu holen, um etwas damit zu tun.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzuleiten, um etwas anderes damit zu tun. Wir können so viele wie wir möchten zusammenketteln. Wir führen zuerst `htmltidy()` auf der Quelle aus, die durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()` Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Eingabeversion der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies entfernt, als die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installation mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie folgende Abhängigkeiten zur `gulpfile.mjs` hinzu:

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

4. Fügen Sie folgende Eigenschaft zur `package.json` hinzu:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css);
   ```

Hier holen wir uns unsere `style.css`-Datei, führen csslint darauf aus (das eine Liste von Fehlern in Ihrem CSS im Terminal ausgibt), laufen es dann durch autoprefixer, um alle benötigten Präfixe hinzuzufügen, damit neue CSS-Funktionen in älteren Browsern laufen. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS an das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet – versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installation mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie folgende Abhängigkeiten zur `gulpfile.mjs` hinzu:

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

4. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir geben die Datei dann an babel weiter, das sie in alte Syntax umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fettpfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Syntax umgewandelt hat.

#### Weitere Ideen

Wenn das alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in der Zeilen die Zeit anzeigen, wann Aufgaben beginnen oder enden, den Namen der Aufgabe und die Dauer von 'Fertig'-Aufgaben.](gulp-output.png)

Sie können die von Ihren automatisierten Aufgaben ausgegebenen Dateien dann ausprobieren, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben angegeben hinzugefügt haben; versuchen Sie auch, die HTML-/CSS-/JavaScript-Bereiche zu kommentieren und dann gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp kommt mit einer `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests auszuführen, wann immer Sie eine Datei speichern. Versuchen Sie zum Beispiel, das folgende an das Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird jetzt Ihr Verzeichnis beobachten und die entsprechenden Aufgaben jedes Mal ausführen, wenn Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*` Zeichen ist ein Platzhalterzeichen — hier sagen wir "Führen Sie diese Aufgaben aus, wenn eine dieser Dateitypen gespeichert wird". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien greifen und dann Aufgaben über Pipes darauf ausführen.

Es gibt noch viel mehr, was Sie mit Gulp tun können. Das [Gulp Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Aufgabenplaner

Es gibt viele andere Aufgabenplaner zur Verfügung. Wir behaupten sicherlich nicht, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist relativ zugänglich für Anfänger. Sie könnten auch versuchen, andere Lösungen zu nutzen:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es auf Aufgaben basiert, die in einer Konfigurationsdatei angegeben sind, anstatt geschriebenes JavaScript zu verwenden. Siehe [Getting started with Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm Scripts ausführen, die sich in Ihrer `package.json` Datei befinden, ohne ein zusätzliches Aufgabenplaner-System installieren zu müssen. Dies basiert auf der Annahme, dass Dinge wie Gulp-Plugins im Grunde Wrapper für Befehlszeilentools sind. Also, wenn Sie herausfinden können, wie Sie die Tools über die Befehlszeile ausführen, können Sie sie dann über npm Scripts ausführen. Es ist etwas schwieriger zu handhaben, aber kann für diejenigen lohnend sein, die stark mit ihren Befehlszeilenfähigkeiten sind. [Warum npm Scripts?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit zahlreichen zusätzlichen Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung des Browsertestens

Schauen wir uns nun kommerzielle, von Drittanbietern bereitgestellte Browser-Testdienste an und was sie für uns tun können.

Wenn Sie diese Art von Diensten nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen, wie z. B. welche Browser Sie testen möchten. Die App konfiguriert dann ein neues VM mit dem angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Logdateien, Text usw. zurück. Dies ist sehr nützlich und erheblich bequemer, als alle Kombinationen von Betriebssystem und Browser selbst einzurichten.

Sie können dann eine Stufe höher gehen, indem Sie eine API verwenden, um Funktionalitäten programmatisch zu nutzen, was bedeutet, dass solche Apps mit Aufgabenplanern, z. B. Ihre eigene lokale Selenium-Umgebung und andere, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf BrowserStack, Sauce Labs und TestingBot. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute, die einfach für Anfänger zu verwenden sind.

### BrowserStack

#### Erste Schritte mit BrowserStack

Um zu beginnen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Klicken Sie auf den Link _Live_ im obersten Menü, um zu Live Manual Testing zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht die Auswahl, auf welchem Gerät und Browser Sie testen möchten — Plattformen auf der linken, Geräte auf der rechten Seite. Wählen Sie ein Gerät aus, um die Auswahl an verfügbaren Browsern auf diesem Gerät zu sehen.

![Testauswahl](browserstack-test-choices-sized.png)

Ein Klick auf eines dieser Browser-Symbole lädt Ihre Auswahl von Plattform, Gerät und Browser — Wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten (z. B. Kneifen/Zoomen, zwei Finger für Scrollen) auf Trackpads unterstützender Geräte wie MacBooks verwenden. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, das es Ihnen ermöglicht, die Sitzung zu steuern.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen umfassen für:

- Anzeigen von Informationen über den aktuellen Browser
- Wechsel zu anderen Browsern
- Testen von localhost-URLs
- Einstellen der Zoomstufe und Wechsel der Ausrichtung
- Speichern und Laden von Lesezeichen
- Aufnehmen/Anmerken von Screenshots und Erstellen von Fehlerberichten
- Zugriff auf DevTools des Browsers
- Ändern des gemeldeten Standorts
- Drosseln des Netzwerks
- Zugriff auf Screenreader

#### Fortgeschritten: Die BrowserStack API

BrowserStack verfügt auch über eine [RESTful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, programmatisch Details Ihres Kontenplans, der Sitzungen, Builds usw. abzurufen.

Betrachten wir kurz, wie wir auf die API mit Node.js zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt wie in [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben ein. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese finden Sie in Ihren [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details) im Bereich _Authentication & Security_.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um das Senden von HTTP-Anfragen zu handhaben, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, populär und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist und führen Sie sie aus, indem Sie den folgenden Befehl in Ihrem Terminal ausführen. Sie sollten ein Objekt im Terminal sehen, das Ihre BrowserStack-Plan-Details enthält.

   ```bash
   node call_bstack
   ```

Nachfolgend haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die Sie bei der Arbeit mit der BrowserStack-RESTful API nützlich finden könnten.

Diese Funktion gibt Zusammenfassungsdetails aller zuvor erstellten automatisierten Builds zurück (siehe den nächsten Artikel für [BrowserStack automatisierte Testdetails](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack)):

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

Wir werden [das Ausführen automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Beginnen wir mit einem Sauce Labs-Test.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen an. Stellen Sie für den Moment sicher, dass Sie sich auf der Registerkarte _Manuelle Tests_ befinden.

1. Klicken Sie auf _Eine neue manuelle Sitzung starten_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie beispielsweise <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Browser-/OS-Kombination aus, die Sie testen möchten, indem Sie die verschiedenen Buttons und Listen verwenden. Es gibt eine große Auswahl, wie Sie sehen werden!! [select sauce manual session](sauce-manual-session.png)
3. Wenn Sie auf Sitzung starten klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination initialisiert.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im ausgewählten Browser remote testen.![Sauce Test läuft](sauce-test-running.png)
5. Von hier aus können Sie das Layout so sehen, wie es im zu testenden Browser aussehen würde, die Maus bewegen und versuchen, Schaltflächen zu klicken, usw. Das obere Menü ermöglicht Ihnen:

   - Beenden Sie die Sitzung
   - Geben jemandem einen URL, damit er den Test remote beobachten kann.
   - Kopieren von Text/Notizen in das remote Clipboard.
   - Einen Screenshot machen.
   - Testen im Vollbildmodus.

Nachdem Sie die Sitzung beendet haben, kehren Sie zur Registerkarte Manuelle Tests zurück, wo Sie einen Eintrag für jede frühere manuelle Sitzung, die Sie gestartet haben, sehen werden. Ein Klick auf einen dieser Einträge zeigt weitere Daten für die Sitzung an. Hier können Sie alle erstellten Screenshots herunterladen, ein Video der Sitzung ansehen, Datenlogs ansehen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs hat eine [RESTful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmatisch Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details zu versehen, wie ihren Pass/Fail-Status, der allein durch manuelles Testen nicht erfassbar ist. Zum Beispiel möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs ausführen, um eine bestimmte Browser-/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es hat mehrere Clients zur Verfügung, mit denen Sie API-Anrufe in Ihrer bevorzugten Umgebung tätigen können, sei es PHP, Java, Node.js, usw.

Schauen wir uns kurz an, wie wir die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, wie unter [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen, z. B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit folgendem Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_sauce.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs Benutzernamen und API-Schlüssel in die angezeigten Bereiche eintragen. Diese finden Sie auf Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings) Seite. Füllen Sie diese nun aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce Labs Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Beginnen wir mit einem TestingBot-Test.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie wählen können. Stellen Sie für den Moment sicher, dass Sie sich auf der Registerkarte _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser/OS-Kombination aus, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Browser starten_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination initialisiert.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im ausgewählten Browser remote testen.
5. Von hier aus können Sie das Layout so sehen, wie es im zu testenden Browser aussehen würde, die Maus bewegen und versuchen, Schaltflächen zu klicken, usw. Das Seitenmenü ermöglicht Ihnen:

   - Beenden der Sitzung
   - Änderung der Bildschirmauflösung
   - Kopieren von Text/Notizen in das remote Clipboard
   - Aufnehmen, Bearbeiten und Herunterladen von Screenshots
   - Testen im Vollbildmodus.

Nachdem Sie die Sitzung beendet haben, kehren Sie zur Seite _Live Web Testing_ zurück, wo Sie einen Eintrag für jede frühere manuelle Sitzung, die Sie gestartet haben, sehen. Ein Klick auf einen dieser Einträge zeigt weitere Daten für die Sitzung an. Hier können Sie alle erstellten Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [RESTful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmatisch Details Ihres Kontos und bestehender Tests abzurufen und Tests mit weiteren Details zu versehen, wie ihren Pass/Fail-Status, der allein durch manuelles Testen nicht erfassbar ist.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten ist ein Beispiel, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagiert.

1. Richten Sie zunächst ein neues npm-Projekt ein, wie unter [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen, z. B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit folgendem Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `tb.js`. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Geheimnis in die angezeigten Bereiche eintragen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter TestingBot Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemlich lange Sache, aber ich bin sicher, Sie können die Vorteile der Nutzung von Automatisierungstools sehen, um einen Teil der schweren Arbeit im Bereich der Tests zu übernehmen.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie wir dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
