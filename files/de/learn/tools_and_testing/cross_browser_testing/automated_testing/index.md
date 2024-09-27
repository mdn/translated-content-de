---
title: Einführung in automatisiertes Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Das manuelle Testen auf mehreren Browsern und Geräten mehrmals am Tag kann ermüdend und zeitaufwendig werden. Um dies effizienter zu gestalten, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel werfen wir einen Blick darauf, was verfügbar ist, wie Task-Runner verwendet werden und wie Sie die Grundlagen von kommerziellen Browser-Testautomatisierungsanwendungen wie LambdaTest, Sauce Labs, BrowserStack und TestingBot nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>;
        eine Vorstellung von den grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die diese Aufgaben erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht Dinge einfach

In diesem Modul haben wir detailliert zahlreiche Möglichkeiten beschrieben, wie Sie Ihre Websites und Apps testen können, und erläutert, welchen Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf zu testende Browser, Barrierefreiheitsüberlegungen und mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu – das manuelle Testen all der Dinge, die wir in vorherigen Artikeln behandelt haben, kann wirklich schmerzhaft sein. Glücklicherweise gibt es Tools, die uns helfen, einige dieser Schmerzen zu automatisieren. Es gibt zwei Hauptmöglichkeiten, wie wir die in diesem Modul besprochenen Tests automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/), [Gulp](https://gulpjs.com/) oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests auszuführen und Code während Ihres Build-Prozesses aufzuräumen. Dies ist eine großartige Möglichkeit, Aufgaben wie Linting und Minifying von Code auszuführen, CSS-Präfixe hinzuzufügen oder neue JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu transpilieren usw.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests in installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie auf Fehler in Browsern hinweisen, sobald diese auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, ermöglichen Ihnen jedoch den Fernzugriff auf deren Einrichtung über eine einfache Schnittstelle, wodurch Sie sich die Einrichtung Ihres eigenen Testsystems ersparen.

Wir werden im nächsten Artikel darauf eingehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel sehen wir uns an, wie Sie einen Task-Runner einrichten und die grundlegende Funktionalität kommerzieller Systeme wie der oben genannten nutzen können.

> [!NOTE]
> Die obigen zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zuzugreifen, Cross-Browser-Tests auszuführen und Ergebnisse zurückzugeben. Wir werden dies weiter unten ebenfalls betrachten.

## Verwendung eines Task-Runners zum Automatisieren von Testing-Tools

Wie oben erwähnt, können Sie durch die Verwendung eines Task-Runners, um alles Notwendige zu einem bestimmten Zeitpunkt während Ihres Build-Prozesses automatisch auszuführen, gängige Aufgaben wie Linting und Minifying von Code erheblich beschleunigen. Dies könnte zum Beispiel jedes Mal der Fall sein, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir betrachten, wie man Task-Running mit Node und Gulp automatisiert, eine einsteigerfreundliche Option.

### Einrichtung von Node und npm

Die meisten Tools heutzutage basieren auf [Node.js](/de/docs/Glossary/Node.js), daher müssen Sie es von [nodejs.org](https://nodejs.org/) herunterladen:

1. Laden Sie den Installer für Ihr System von der obigen Seite herunter. (Wenn Sie Node und npm bereits installiert haben, springen Sie zu Punkt 4)
2. Installieren Sie es wie jedes andere Programm. Beachten Sie, dass Node mit dem [Node Package Manager](https://www.npmjs.com/) (npm) geliefert wird, der es Ihnen erleichtert, Pakete zu installieren, eigene Pakete mit anderen zu teilen und nützliche Skripte in Ihren Projekten auszuführen.
3. Sobald die Installation abgeschlossen ist, testen Sie, ob Node installiert ist, indem Sie folgendes in das Terminal eingeben, das die installierten Versionen von Node und npm zurückgibt:

   ```bash
   node -v
   npm -v
   ```

4. Wenn Sie Node/npm bereits installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Um Node zu aktualisieren, ist es am zuverlässigsten, ein aktualisiertes Installationspaket von ihrer Website herunterzuladen und zu installieren (siehe obigen Link). Um npm zu aktualisieren, verwenden Sie den folgenden Befehl in Ihrem Terminal:

   ```bash
   npm install npm@latest -g
   ```

> [!NOTE]
> Wenn der obige Befehl mit Berechtigungsfehlern fehlschlägt, sollte [npm-Berechtigungen beheben](https://docs.npmjs.com/getting-started/fixing-npm-permissions/) Ihnen helfen.

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu tun.

Zum Beispiel erstellen wir zunächst ein Testverzeichnis, damit wir ohne Angst, etwas zu zerstören, spielen können.

1. Erstellen Sie ein neues Verzeichnis an einer sinnvollen Stelle über die Benutzeroberfläche des Dateimanagers oder im Befehlszeilenmodus, indem Sie zu dem Ort navigieren, an dem Sie es haben möchten, und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, gehen Sie einfach in Ihr Testverzeichnis und initialisieren es mit dem folgenden Befehl:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die für die Einrichtung des Projekts erforderlichen Informationen zu ermitteln; vorerst können Sie die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird Sie gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm generiert eine `package.json`-Datei in Ihrem Verzeichnis.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst sieht sie ungefähr so aus:

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

Damit sind Sie bereit für den nächsten Schritt.

### Einrichtung von Gulp-Automatisierung

Schauen wir uns die Einrichtung von Gulp und dessen Verwendung zur Automatisierung einiger Testing-Tools an.

1. Zunächst erstellen Sie ein Test-NPM-Projekt nach dem im vorherigen Abschnitt beschriebenen Verfahren.
   Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie etwa so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispielinhalte in HTML, CSS und JavaScript, um Ihr System zu testen - erstellen Sie Kopien unserer Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners.
   Sie können auch eigene Testinhalte ausprobieren, beachten Sie jedoch, dass solche Tools nicht mit internen JS/CSS-Dateien funktionieren – Sie benötigen externe Dateien.
3. Installieren Sie zuerst Gulp global (das bedeutet, dass es in allen Projekten verfügbar ist) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Nun erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Fügen Sie in diese Datei Folgendes ein:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dieser Befehl erfordert das vorher installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts tut, außer eine Nachricht an das Terminal zu drucken - dies ist nützlich, um uns wissen zu lassen, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im gleichen Grundformat exportiert - `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter, einen Callback, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen – versuchen Sie dies jetzt:

   ```bash
   gulp
   ```

### Hinzufügen von realen Aufgaben zu Gulp

Um reale Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun möchten. Eine vernünftige Reihe von Grundfunktionen, die wir auf unserem Projekt ausführen können, umfasst:

- html-tidy, css-lint und js-hint, um übliche HTML/CSS/JS-Fehler zu linten und zu melden/zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und Vendor-Präfixe nur dort hinzuzufügen, wo es nötig ist (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um alle neuen JavaScript-Syntaxfunktionen in traditionelle Syntax zu transpilieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Sehen Sie sich die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen an, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten am Anfang der Datei `gulpfile.js` anfordern, dann Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit sie über Gulp's Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie die `package.json`-Datei Ihres Projekts ansehen, sehen Sie einen Eintrag in der Eigenschaft `devDependencies`.

2. Fügen Sie die folgende Abhängigkeit zu `gulpfile.js` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test an das Ende von `gulpfile.js` hinzu:

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

Hier greifen wir auf unsere Entwicklungsdatei `index.html` mit `gulp.src()` zu, die es uns ermöglicht, eine Quelldatei zu greifen, um etwas damit zu tun.

Wir verwenden als Nächstes die Funktion `pipe()`, um diese Quelle an einen anderen Befehl weiterzugeben, um etwas anderes damit zu tun. Wir können so viele davon verketten, wie wir wollen. Zuerst führen wir `htmltidy()` auf der Quelle aus, das Fehler in unserer Datei durchgeht und behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Input-Version der Datei haben Sie möglicherweise bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; dieses wurde von htmltidy entfernt, bis die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.js` hinzu:

   ```js
   import autoprefixer from "gulp-autoprefixer";
   import csslint from "gulp-csslint";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.js` hinzu:

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
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe zu:

   ```js
   export default gulp.series(html, css);
   ```

Hier greifen wir auf unsere Datei `style.css` zu, führen `csslint` darauf aus (wodurch eine Liste von Fehlern in Ihrem CSS im Terminal ausgegeben wird), lassen sie dann durch autoprefixer laufen, um alle notwendigen Präfixe hinzuzufügen, damit naszierende CSS-Funktionen in älteren Browsern funktionieren. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS ins `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet – versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.js` hinzu:

   ```js
   import babel from "gulp-babel";
   import jshint from "gulp-jshint";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.js` hinzu:

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

Hier greifen wir auf unsere Datei `main.js` zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir übergeben die Datei dann an Babel, das sie in einen alten Syntaxstil konvertiert und das Ergebnis ins `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [fette Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die Babel in eine alte Funktion umgewandelt hat.

#### Weitere Ideen

Sobald alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo Zeilen die Start- oder Endzeit von Aufgaben, den Aufgabennamen und die Dauer von 'Fertiggestellten' Aufgaben anzeigen.](gulp-output.png)

Anschließend können Sie die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und Tests wie oben dargestellt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte zu kommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp verfügt über eine `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests auszuführen, wann immer Sie eine Datei speichern. Beispielsweise, versuchen Sie, das Folgende am Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den `gulp watch`-Befehl in Ihrem Terminal einzugeben. Gulp wird nun Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das Zeichen `*` ist ein Platzhalterzeichen – hier sagen wir "führen Sie diese Aufgaben aus, wenn irgendeine Datei dieses Typs gespeichert wird". Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, z.B. `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien greifen und dann gepipte Aufgaben darauf ausführen.

Es gibt noch viel mehr, das Sie mit Gulp tun können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) verfügt über buchstäblich Tausende von Plugins, durch die Sie durchsuchen können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir versuchen sicherlich nicht zu behaupten, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist für Anfänger ziemlich zugänglich. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert sehr ähnlich wie Gulp, außer dass es sich auf Aufgaben stützt, die in einer Konfigurationsdatei angegeben sind, anstatt geschriebenes JavaScript zu verwenden. Weitere Details finden Sie unter [Getting started with Grunt](https://gruntjs.com/getting-started).
- Sie können auch Aufgaben direkt mit NPM-Skripten ausführen, die sich in Ihrer `package.json`-Datei befinden, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Dies funktioniert auf der Prämisse, dass Dinge wie Gulp-Plugins im Grunde Wrapper um Befehlszeilentools sind. Wenn Sie also herausfinden können, wie Sie die Tools über die Befehlszeile ausführen können, können Sie sie anschließend über NPM-Skripten ausführen. Es ist etwas kniffliger zu arbeiten, aber kann lohnend sein für diejenigen, die stark mit ihrer Befehlszeile sind. [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) bietet einen guten Einstieg mit vielen weiteren Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung des Browser-Testens

Sehen wir uns nun kommerzielle, von Drittanbietern angebotene Browser-Testdienste an und schauen wir, was sie für uns tun können.

Das grundlegende Prinzip dieser Anwendungen ist, dass das Unternehmen, das jede betreibt, über eine riesige Serverfarm verfügt, die viele verschiedene Tests ausführen kann. Wenn Sie diesen Dienst nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen darüber, in welchen Browsern getestet werden soll. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegeben Betriebssystem und Browser und liefert die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Text usw.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um Funktionen programmgesteuert zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern, wie Ihrer eigenen lokalen Selenium-Umgebung und anderen, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt noch andere kommerzielle Browser-Testsysteme, die verfügbar sind, aber in diesem Artikel werden wir uns auf LambdaTest, Sauce Labs und BrowserStack konzentrieren. Wir sagen nicht, dass diese unbedingt die besten verfügbaren Tools sind, aber sie sind gute, die für Anfänger einfach einzurichten sind.

### LambdaTest

#### Erste Schritte mit LambdaTest

1. Beginnen wir mit dem [Registrieren bei LambdaTest](https://accounts.lambdatest.com/register) kostenlos.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

> [!NOTE]
> Im Gegensatz zu anderen cloudbasierten Anbietern von Cross-Browser-Testdiensten bietet LambdaTest ein Freemium-Konto, bei dem Sie lebenslangen Zugriff auf ihre Plattform erhalten. Der einzige Unterschied zwischen ihrem Premium- und ihrem Freemium-Plan liegt in der verbrauchten Menge. Für Automatisierungstests über ihr Selenium Grid bietet LambdaTest 60 Minuten pro Monat kostenlosen Test an.

#### Grundlagen: Manuelle Tests

Sobald Sie sich bei LambdaTest anmelden, werden Sie zum LambdaTest-Dashboard weitergeleitet. Das Dashboard gibt Ihnen Details zu den von Ihnen verbrauchten Minuten, wie viele gleichzeitige Sitzungen laufen, Ihre Gesamtzahl der Tests bis heute und mehr.

1. Um mit manuellen Tests zu beginnen, müssen Sie die **"Real Time Testing"**-Registerkarte aus dem linken Navigationsmenü auswählen.
   ![LambdaTest Dashboard](lambdatest-dashboard.png)
2. Wenn Sie auf **Real Time Testing** klicken, werden Sie zu einem Bildschirm weitergeleitet, auf dem Sie die Browser-Konfiguration, die Browserversion, das Betriebssystem und die Bildschirmauflösung auswählen können, mit denen Sie Ihre Website testen möchten.
   ![Real Time Testing](mark-as-bug-1.png)
3. Wenn Sie auf die Schaltfläche Start klicken, wird ein Ladebildschirm angezeigt, der Ihnen eine VM (Virtuelle Maschine) basierend auf Ihrer Konfiguration bereitstellt. Sobald es geladen ist, können Sie interaktive Live-Cross-Browser-Tests mit einer Website durchführen.
   [![Mark as bug](mark-as-bug-2.png)](https://web.archive.org/web/20210608014707if_/https://www.lambdatest.com/support/docs/wp-content/uploads/2019/03/mark-as-bug-2.png)
   Wenn Sie ein Problem in der Benutzeroberfläche bemerken, können Sie es mit Ihren Kollegen teilen, indem Sie einen Screenshot Ihrer VM mit der Screenshot-Schaltfläche aufnehmen. Sie können auch ein Video Ihrer Testsitzung aufnehmen, indem Sie auf die Aufnahmeschaltfläche in Ihrer Testsitzung klicken.
4. Mit dem eingebauten Bildeditor können Sie Ihren Screenshot hervorheben, bevor Sie ihn an Ihre Kollegen weiterleiten. ![Highlight a bug](mark-as-bug-3.png)
5. Mit der Schaltfläche "Markierung als Fehler" können Sie Fehler an zahlreiche Drittanbieter-Tools wie Jira, Asana, Trello und mehr übermitteln. So können Sie direkt aus Ihrer Testsitzung bei LambdaTest einen Fehler zu Ihrer Projektmanagement-Instanz protokollieren. Schauen Sie sich alle [LambdaTest-Integrationen von Drittanbietern](https://www.lambdatest.com/integrations) an.

> [!NOTE]
> Alle Videos und Bilder, die während einer Testsitzung aufgenommen wurden, werden in der Galerie, den Testprotokollen und dem Fehlermanagement bei LambdaTest gespeichert.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Beginnen wir mit einem Sauce Labs Trial.

1. Erstellen Sie ein Sauce Labs Probe-Konto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Für den Anfang stellen Sie sicher, dass Sie sich auf der Registerkarte _Manual Tests_ befinden.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie z.B. <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), wählen Sie anschließend eine Browser-/OS-Kombination aus, die Sie mit den verschiedenen Schaltflächen und Listen testen möchten. Es gibt viele Möglichkeiten, wie Sie sehen werden!![select sauce manual session](sauce-manual-session.png)
3. Wenn Sie auf Session starten klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination erstellt.
4. Nach Abschluss des Ladevorgangs können Sie die Website im ausgewählten Browser aus der Ferne testen.![Sauce test running](sauce-test-running.png)
5. Von hier aus könnenSie das Layout sehen, wie es im gewünschten Browser aussieht, die Maus bewegen und Schaltflächen ausprobieren etc. Das obere Menü erlaubt Ihnen:

   - Die Sitzung zu stoppen
   - Jemand anderem eine URL geben, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage kopieren.
   - Einen Screenshot machen.
   - Im Vollbildmodus testen.

Nachdem Sie die Sitzung stoppen, gelangen Sie zurück zur Registerkarte Manuelle Tests, wo Sie einen Eintrag für jede vorher von Ihnen gestartete manuelle Session sehen. Durch Klicken auf einen dieser Einträge werden mehr Informationen zur Sitzung angezeigt. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Session ansehen, Datenprotokolle einsehen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und weitaus bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs verfügt über eine [restful API](https://docs.saucelabs.com/dev/api/), mit der Sie programmgesteuert Details zu Ihrem Konto und bestehenden Tests abrufen sowie Tests mit zusätzlichen Details versehen können, wie ihrem Bestehen/Fehlschlag-Status, der durch manuelles Testen allein nicht erfassbar ist. Beispielsweise möchten Sie vielleicht einen Ihrer eigenen Selenium-Tests über Sauce Labs remote ausführen, um eine bestimmte Browser-/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs übergeben.

Es stehen mehrere Clients zur Verfügung, die es Ihnen ermöglichen, API-Aufrufe mithilfe Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Werfen wir einen kurzen Blick darauf, wie wir mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im [Einrichten von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `sauce-test`.
2. Installieren Sie die Node Sauce Labs Wrapper mit folgendem Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei mit dem Namen `call_sauce.js` in Ihrem Projektstamm. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs Benutzernamen und API-Schlüssel an den angegebenen Stellen eintragen. Diese können Sie auf Ihrer [Benutzer-Einstellungsseite](https://app.saucelabs.com/user-settings) abrufen. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das eigentliche Ausführen von automatisierten Sauce Labs-Tests im nächsten Artikel behandeln.

### BrowserStack

#### Erste Schritte mit BrowserStack

Beginnen wir mit einem BrowserStack Trial.

1. Erstellen Sie ein [BrowserStack Probe-Konto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.
3. Wenn Sie sich zum ersten Mal anmelden, sollten Sie sich auf der Live-Testseite befinden; wenn nicht, klicken Sie auf den Link _Live_ im oberen Navigationsmenü.
4. Wenn Sie Firefox oder Chrome verwenden, werden Sie in einer Dialogbox mit dem Titel "Lokales Testen aktivieren" aufgefordert, eine Browsererweiterung zu installieren — klicken Sie auf die Schaltfläche _Installieren_, um fortzufahren. In anderen Browsern können Sie einige der Funktionen (in der Regel über Flash) immer noch verwenden, aber möglicherweise nicht das vollständige Erlebnis.

#### Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, auszuwählen, auf welchem Gerät und Browser Sie testen möchten – Plattformen in der linken Spalte, Geräte auf der rechten. Wenn Sie mit der Maus über oder auf jedes Gerät klicken, erhalten Sie eine Auswahl der auf diesem Gerät verfügbaren Browser.

![Test Choices](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browser-Icons klicken, wird Ihre Wahl an Plattform/Gerät/Browser geladen – wählen Sie jetzt eines aus und probieren Sie es aus.

![Test Devices](browserstack-test-device-sized.png)

> [!NOTE]
> Das blaue Geräte-Symbol neben einigen der mobilen Geräteauswahlmöglichkeiten signalisiert, dass Sie auf einem echten Gerät testen werden; Auswahlmöglichkeiten ohne dieses Symbol werden auf einem Emulator ausgeführt.

Sie werden feststellen, dass Sie URLs in die Adressleiste eingeben und die anderen Steuerelemente wie erwartet auf einem echten Gerät verwenden können. Sie können sogar Dinge wie kopieren und einfügen vom Gerät in Ihre Zwischenablage machen, nach oben und unten scrollen, indem Sie mit der Maus ziehen, oder entsprechende Gesten verwenden (z. B. pinch/zoom, zwei Finger zum Scrollen) auf den Touchpads unterstützter Geräte (z. B. MacBook). Beachten Sie, dass nicht alle Funktionen auf allen Geräten verfügbar sind.

Sie werden auch ein Menü sehen, das es Ihnen ermöglicht, die Sitzung zu steuern.

![Test Menu](browserstack-test-menu-sized.png)

Die Funktionen hier sind wie folgt:

- _Wechseln_ — Wechseln Sie zu einer anderen Plattform/Gerät/Browser-Kombination.
- Orientierung (sieht aus wie ein Reload-Symbol) — Schalten Sie die Ausrichtung zwischen Hoch- und Querformat um.
- An Bildschirm anpassen (sieht aus wie ein Vollbildsymbol) — Füllen Sie den Testbereich so weit wie möglich mit dem Gerät aus.
- Fehler erfassen (sieht aus wie eine Kamera) — Macht einen Screenshot, der es Ihnen dann ermöglicht, ihn zu annotieren und zu speichern.
- Problem-Tracker (sieht aus wie ein Kartenspiel) — Anzeigen zuvor erfasster Fehler/Screenshots.
- Einstellungen (Zahnradsymbol) — Ermöglicht Ihnen, allgemeine Einstellungen für die Sitzung zu ändern.
- Hilfe (Fragezeichen) — Greift auf Hilfe- und Supportfunktionen zu.
- _Devtools_ — Ermöglicht Ihnen, Ihre Browser Devtools direkt zu debugging oder die angezeigte Seite im Test-Browser zu manipulieren. Dies funktioniert derzeit nur, wenn der Safari-Browser auf iOS-Geräten getestet wird.
- _Geräteinformationen_ — Zeigt Informationen über das Testgerät an.
- _Funktionen_ — Zeigt Ihnen, welche Funktionen die aktuelle Konfiguration unterstützt, z. B. Kopie in die Zwischenablage, Gestenunterstützung usw.
- _Stop_ — Beendet die Sitzung.

> [!NOTE]
> Dies ist bereits sehr nützlich, und weitaus bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Andere grundlegende Funktionen

Wenn Sie zur Hauptseite von BrowserStack zurückkehren, finden Sie ein paar andere nützliche grundlegende Funktionen unter der Option _Mehr_ im Menü:

- _Responsive_: Geben Sie eine URL ein und drücken Sie _Generieren_, und BrowserStack wird diese URL auf mehreren Geräten mit unterschiedlichen Viewportgrößen laden. Innerhalb jedes Geräts können Sie zusätzlich die Einstellungen wie die Monitorgröße anpassen, um eine gute Vorstellung darüber zu erhalten, wie sich das Layout Ihrer Website auf verschiedenen Formfaktoren verhält.
- _Screenshots_: Geben Sie eine URL ein, wählen Sie die Browser-/Geräte-/Plattformen aus, die Sie interessiert, dann drücken Sie _Screenshots generieren_ — BrowserStack wird Screenshots Ihrer Website in all diesen verschiedenen Browsern aufnehmen und diese Ihnen zum Betrachten und Herunterladen zur Verfügung stellen.

#### Fortgeschritten: Die BrowserStack API

BrowserStack verfügt ebenfalls über eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), mit der Sie programmgesteuert Details zu Ihrem Kontoplan, Sitzungen, Builds usw. abrufen können.

Es stehen mehrere Clients zur Verfügung, die es Ihnen ermöglichen, API-Aufrufe mithilfe Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Werfen wir einen kurzen Blick darauf, wie wir mit Node.js auf die API zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im [Einrichten von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
2. Erstellen Sie eine neue Datei mit dem Namen `call_bstack.js` in Ihrem Projektstamm. Geben Sie ihr den folgenden Inhalt:

   ```js
   const request = require("request");

   const bsUser = "BROWSERSTACK_USERNAME";
   const bsKey = "BROWSERSTACK_ACCESS_KEY";
   const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

   function getPlanDetails() {
     request({ uri: `${baseUrl}plan.json` }, (err, res, body) => {
       console.log(JSON.parse(body));
     });
     /* Response:
       {
         automate_plan: <string>,
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

3. Sie müssen Ihren BrowserStack Benutzernamen und API-Schlüssel an den angegebenen Stellen eintragen. Diese können Sie unter [BrowserStack Account & Profile Details](https://www.browserstack.com/accounts/profile/details), im Abschnitt Authentication & Security abrufen. Füllen Sie diese jetzt aus.
4. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_bstack
   ```

Unten haben wir Ihnen auch einige andere fertiggestellte Funktionen zur Verfügung gestellt, die Sie bei der Arbeit mit der BrowserStack restful API nützlich finden könnten.

```js
function getBuilds() {
  request({ uri: `${baseUrl}builds.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
  });
  /* Response:
  [
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    {
      automation_build: {
        name: <string>,
        duration: <int>,
        status: <string>,
        hashed_id: <string>
      }
    },
    // …
  ]
  */
}

function getSessionsInBuild(build) {
  const buildId = build.automation_build.hashed_id;
  request(
    { uri: `${baseUrl}builds/${buildId}/sessions.json` },
    (err, res, body) => {
      console.log(JSON.parse(body));
    },
  );
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
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
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
        video_url: <string>,
        browser_console_logs_url: <string>,
        har_logs_url: <string>
      }
    },
    // …
  ]
  */
}

function getSessionDetails(session) {
  const sessionId = session.automation_session.hashed_id;
  request({ uri: `${baseUrl}sessions/${sessionId}.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
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
      video_url: <string>,
      browser_console_logs_url: <string>,
      har_logs_url: <string>
    }
  }
  */
}
```

#### Fortgeschritten: Automatisierte Tests

Wir werden das eigentliche Ausführen von automatisierten BrowserStack-Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Beginnen wir mit einem TestingBot Trial.

1. Erstellen Sie ein [TestingBot Probe-Konto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse bestätigt haben.

#### Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen, die Sie wählen können, auf. Für den Anfang stellen Sie sicher, dass Sie sich auf der Registerkarte _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Kombination des Browsers/OS aus, die Sie testen möchten, indem Sie die Kombination im Raster wählen.
   ![Test Choices](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination erstellt.
4. Nach Abschluss des Ladevorgangs können Sie die Website im gewählten Browser aus der Ferne testen.
5. Von hier aus können Sie das Layout sehen, wie es im gewünschten Browser aussieht, die Maus bewegen und Schaltflächen ausprobieren etc. Das side-Menü erlaubt Ihnen:

   - Die Sitzung zu stoppen
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage kopieren
   - Screenshots machen, bearbeiten und herunterladen
   - Im Vollbildmodus testen.

Nachdem Sie die Sitzung stoppen, gelangen Sie zurück zur Registerkarte Live Web Testing, wo Sie einen Eintrag für jede vorher von Ihnen gestartete manuelle Session sehen. Durch Klicken auf einen dieser Einträge werden mehr Informationen zur Sitzung angezeigt. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und Protokolle der Sitzung anzeigen.

#### Fortschritte: Die TestingBot API

TestingBot hat eine [restful API](https://testingbot.com/support/api), mit der Sie programmgesteuert Details zu Ihrem Konto und bestehenden Tests abrufen sowie Tests mit zusätzlichen Details versehen können, wie ihrem Bestehen/Fehlschlag-Status, der durch manuelles Testen allein nicht erfassbar ist.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Unten ist ein Beispiel, wie Sie mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagieren können.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies auszuprobieren, wie im [Einrichten von Node und npm](#einrichtung_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `tb-test`.
2. Installieren Sie die Node TestingBot Wrapper mit folgendem Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei mit dem Namen `tb.js` in Ihrem Projektstamm. Geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Secret an den angegebenen Stellen eintragen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das eigentliche Ausführen von automatisierten TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemliche Reise, aber ich bin sicher, Sie können den Nutzen erkennen, den der Einsatz von Automatisierungstools bietet, um einen Teil der Testarbeit zu erleichtern.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie wir das mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
