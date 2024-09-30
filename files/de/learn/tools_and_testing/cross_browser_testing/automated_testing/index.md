---
title: Einführung in automatisiertes Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Wenn Sie mehrmals täglich manuell Tests in mehreren Browsern und auf verschiedenen Geräten durchführen, kann dies mühsam und zeitaufwändig sein. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel werfen wir einen Blick darauf, welche Tools verfügbar sind, wie Sie Aufgabenautomatisierer verwenden und wie Sie die Grundlagen kommerzieller Browser-Testautomatisierungsanwendungen wie LambdaTest, Sauce Labs, BrowserStack und TestingBot nutzen können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>-, <a href="/de/docs/Learn/CSS">CSS</a>- und <a href="/de/docs/Learn/JavaScript">JavaScript</a>-Sprachen; eine Vorstellung von den grundlegenden <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihnen das Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die Dinge einfacher machen.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht vieles einfacher

In diesem Modul haben wir zahlreiche verschiedene Möglichkeiten im Detail beschrieben, wie Sie Ihre Websites und Apps testen können, und erläutert, welchen Umfang Ihre Cross-Browser-Testing-Bemühungen in Bezug auf die zu testenden Browser, die Barrierefreiheitsaspekte und vieles mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — all die Dinge, die wir in den vorherigen Artikeln betrachtet haben, manuell zu testen, kann wirklich mühsam sein. Zum Glück gibt es Tools, die uns dabei helfen, einen Teil dieser Mühen zu automatisieren. Es gibt zwei Hauptmethoden, mit denen wir die in diesem Modul besprochenen Tests automatisieren können:

1. Verwenden Sie einen Aufgabenautomatisierer wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm-Skripts](https://docs.npmjs.com/misc/scripts/), um Tests während Ihres Build-Prozesses durchzuführen und Code aufzuräumen. Dies ist eine hervorragende Möglichkeit, Aufgaben wie Linting und Minifying von Code auszuführen, CSS-Präfixe hinzuzufügen oder neue JavaScript-Funktionen für maximale Cross-Browser-Reichweite zu transpillieren, und mehr.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests auf installierten Browsern auszuführen und Ergebnisse zurückzugeben, die Sie über Fehler in den Browsern informieren, sobald sie auftreten. Kommerzielle Cross-Browser-Testing-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben Ihnen jedoch, ihre Umgebung aus der Ferne über eine einfache Schnittstelle zu nutzen, wodurch Sie die Mühe sparen, Ihr eigenes Testsystem einzurichten.

Im nächsten Artikel werden wir uns ansehen, wie Sie Ihr eigenes Selenium-basiertes Testsystem einrichten können. In diesem Artikel werden wir uns ansehen, wie Sie einen Aufgabenautomatisierer einrichten und die grundlegende Funktionalität kommerzieller Systeme wie der oben genannten nutzen können.

> [!NOTE]
> Die obigen beiden Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Aufgabenautomatisierer so einzurichten, dass er über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zugreift, Cross-Browser-Tests ausführt und die Ergebnisse zurückgibt. Wir werden dies weiter unten erläutern.

## Verwendung eines Aufgabenautomatisierers, um Testwerkzeuge zu automatisieren

Wie oben erwähnt, können Sie häufige Aufgaben wie Linting und Minifying von Code erheblich beschleunigen, indem Sie einen Aufgabenautomatisierer verwenden, um alles, was Sie ausführen müssen, automatisch zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess auszuführen. Beispielsweise könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir uns ansehen, wie Sie das Aufgabenautomatisieren mit Node und Gulp, einer anfängerfreundlichen Option, automatisieren können.

### Einrichten von Node und npm

Heutzutage basieren die meisten Tools auf [Node.js](/de/docs/Glossary/Node.js), daher müssen Sie es von [nodejs.org](https://nodejs.org/) installieren:

1. Laden Sie das Installationsprogramm für Ihr System von der oben genannten Website herunter. (Wenn Sie Node und npm bereits installiert haben, springen Sie zu Punkt 4.)
2. Installieren Sie es wie jedes andere Programm. Beachten Sie, dass Node mit dem [Node Package Manager](https://www.npmjs.com/) (npm) geliefert wird, mit dem Sie Pakete einfach installieren, Ihre eigenen Pakete mit anderen teilen und nützliche Skripts auf Ihren Projekten ausführen können.
3. Sobald die Installation abgeschlossen ist, testen Sie, ob Node installiert ist, indem Sie im Terminal Folgendes eingeben, was die installierten Versionen von Node und npm zurückgibt:

   ```bash
   node -v
   npm -v
   ```

4. Wenn Sie Node/npm bereits installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Um Node zu aktualisieren, ist es am zuverlässigsten, ein aktualisiertes Installationspaket von ihrer Website herunterzuladen und zu installieren (siehe Link oben). Um npm zu aktualisieren, verwenden Sie den folgenden Befehl im Terminal:

   ```bash
   npm install npm@latest -g
   ```

> [!NOTE]
> Wenn der obige Befehl mit Berechtigungsfehlern fehlschlägt, sollte [npm-Berechtigungen beheben](https://docs.npmjs.com/getting-started/fixing-npm-permissions/) Ihnen weiterhelfen.

Um mit der Verwendung von Node/npm-basierten Paketen in Ihren Projekten zu beginnen, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Beispielsweise lassen Sie uns zuerst ein Testverzeichnis erstellen, damit wir ohne Angst, etwas zu kaputt zu machen, spielen können.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort, entweder über Ihre Dateimanager-Benutzeroberfläche, oder in der Befehlszeile, indem Sie zu dem gewünschten Ort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie einfach in Ihr Testverzeichnis wechseln und es initialisieren, mit dem folgenden:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die Informationen zu erhalten, die erforderlich sind, um das Projekt einzurichten; Sie können vorerst einfach die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird es Sie fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie die Eingabetaste/Return, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis generieren.

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

Damit sind Sie bereit, fortzufahren.

### Einrichtung der Gulp-Automatisierung

Werfen wir einen Blick auf die Einrichtung von Gulp und wie es verwendet wird, um einige Testwerkzeuge zu automatisieren.

1. Beginnen Sie damit, ein Test-npm-Projekt zu erstellen, indem Sie das Verfahren am Ende des vorherigen Abschnitts befolgen. Aktualisieren Sie außerdem die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie ungefähr so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen — machen Sie Kopien unserer Beispieldateien [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) in einem Unterordner mit dem Namen `src` in Ihrem Projektordner. Sie können auch Ihre eigenen Testinhalte ausprobieren, aber beachten Sie, dass solche Tools nicht mit internen JS/CSS-Dateien funktionieren — Sie benötigen externe Dateien.
3. Installieren Sie zuerst Gulp global (das bedeutet, es wird in allen Projekten verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl im Stammverzeichnis Ihres npm-Projekts aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. Fügen Sie in dieser Datei Folgendes hinzu:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts anderes tut, als eine Nachricht an das Terminal zu senden — dies ist nützlich, um uns wissen zu lassen, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im selben grundlegenden Format exportiert — `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter — einen Rückruf, der aufgerufen wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen einiger echter Aufgaben zu Gulp

Um einige echte Aufgaben zu Gulp hinzuzufügen, müssen wir überlegen, was wir tun wollen. Eine vernünftige Reihe von grundlegenden Funktionen, die wir auf unserem Projekt ausführen könnten, sind:

- html-tidy, css-lint und js-hint, um gängige HTML/CSS/JS-Fehler zu linten und zu melden/zu beheben (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Anbieterpräfixe hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- Babel, um neue JavaScript-Syntaxfunktionen in traditionelle Syntax zu konvertieren, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Siehe die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zunächst über npm installieren, dann alle Abhängigkeiten am Anfang der `gulpfile.js`-Datei einfügen, dann Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, um über den Gulp-Befehl verfügbar zu sein.

#### html-tidy

1. Installieren Sie es mit der folgenden Zeile:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in der `package.json`-Datei Ihres Projekts nachsehen, werden Sie einen Eintrag dafür in der Eigenschaft `devDependencies` sehen.

2. Fügen Sie die folgende Abhängigkeit in `gulpfile.js` hinzu:

   ```js
   import htmltidy from "gulp-htmltidy";
   ```

3. Fügen Sie den folgenden Test am Ende von `gulpfile.js` hinzu:

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

Hier verwenden wir `gulp.src()`, um unsere Entwicklungs-`index.html`-Datei zu greifen, was es uns ermöglicht, eine Quelldatei zu erfassen, um etwas damit zu tun.

Wir verwenden dann die Funktion `pipe()`, um diese Quelle an einen weiteren Befehl zu übergeben, um etwas anderes damit zu tun. Wir können so viele davon verketten, wie wir möchten. Zuerst führen wir `htmltidy()` auf der Quelle aus, die durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die HTML-Ausgabedatei in das `build`-Verzeichnis.

In der Eingabedatei haben Sie möglicherweise bemerkt, dass wir ein leeres <p>-Element eingefügt haben; htmltidy hat dies entfernt, wenn die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie es mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten der `gulpfile.js`-Datei hinzu:

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

4. Fügen Sie die folgende Eigenschaft zur `package.json` hinzu:

   ```json
   "browserslist": [
     "last 5 versions"
   ]
   ```

5. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css);
   ```

Hier erfassen wir unsere `style.css`, führen csslint darauf aus (was eine Liste von Fehlern in Ihrem CSS an das Terminal ausgibt), und dann führen wir es durch Autoprefixer, um alle erforderlichen Präfixe hinzuzufügen, damit neue CSS-Funktionen in älteren Browsern laufen. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehendes CSS in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und führen Sie Gulp erneut aus, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und Babel

1. Installieren Sie es mit den folgenden Zeilen:

   ```bash
   npm install --save-dev gulp-babel @babel/preset-env
   npm install --save-dev @babel/core
   npm install jshint gulp-jshint --save-dev
   ```

2. Fügen Sie die folgenden Abhängigkeiten der `gulpfile.js`-Datei hinzu:

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

4. Ändern Sie die Standardaufgabe in:

   ```js
   export default gulp.series(html, css, js);
   ```

Hier erfassen wir unsere `main.js`-Datei, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` an das Terminal aus; wir übergeben die Datei dann an Babel, das sie zur alten Stilsyntax umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Pfeilfunktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von Babel in eine alte Stilsyntaxfunktion umgewandelt wurde.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, in dem die Dauer der Aufgaben angezeigt wird, sowie der Name der Aufgabe und die durchlaufene Zeit von "Finished"-Aufgaben.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie innerhalb des `build`-Verzeichnisses ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie außerdem, die HTML/CSS/JavaScript-Codeabschnitte auszukommentieren und führen Sie Gulp dann erneut aus, um zu sehen, ob Sie das Problem isolieren können.

Gulp wird mit einer `watch()`-Funktion geliefert, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests auszuführen, wann immer Sie eine Datei speichern. Zum Beispiel, versuchen Sie, folgendes an das Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie nun, den `gulp watch`-Befehl in Ihr Terminal einzugeben. Gulp wird jetzt Ihr Verzeichnis überwachen und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung in einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen — hier sagen wir „führen Sie diese Aufgaben aus, wenn Dateien dieses Typs gespeichert werden.“ Sie könnten auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann die verknüpften Aufgaben darauf ausführen.

Es gibt viel mehr, was Sie mit Gulp tun können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins, durch die Sie suchen können.

### Andere Aufgabenautomatisierer

Es gibt viele andere Aufgabenautomatisierer. Wir versuchen sicherlich nicht zu sagen, dass Gulp die beste Lösung ist, aber es arbeitet für uns und ist für Anfänger ziemlich zugänglich. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert sehr ähnlich wie Gulp, verlässt sich jedoch auf Aufgaben, die in einer Konfigurationsdatei angegeben sind, anstatt JavaScript zu verwenden. Siehe [Erste Schritte mit Grunt für weitere Details.](https://gruntjs.com/getting-started)
- Sie können Aufgaben auch direkt mit npm-Skripten ausführen, die sich in Ihrer `package.json`-Datei befinden, ohne dass Sie ein zusätzliches Aufgabenautomatisierersystem installieren müssen. Dies funktioniert nach dem Prinzip, dass Dinge wie Gulp-Plugins im Grunde genommen Wrapper um Befehlszeilen-Tools sind. Wenn Sie also herausfinden können, wie Sie die Tools über die Befehlszeile ausführen, können Sie sie auch mit npm-Skripten ausführen. Es ist etwas schwieriger zu arbeiten, kann aber lohnend sein für die, die stark in ihren Befehlszeilenfähigkeiten sind. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Das grundlegende Konzept bei solchen Anwendungen ist, dass das Unternehmen, das jede dieser betreibt, eine riesige Serverfarm hat, die viele verschiedene Tests durchführen kann. Wenn Sie diesen Dienst nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen, wie z. B. welche Browser Sie testen möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und liefert die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Texten usw. zurück.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um die Funktionalität programmatisch zuzugreifen, was bedeutet, dass solche Apps mit Aufgabenautomatisierern wie Ihren eigenen lokalen Selenium-Umgebungen und anderen kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf LambdaTest, Sauce Labs und BrowserStack. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute und einfache Werkzeuge für Anfänger, um loszulegen.

### LambdaTest

#### Erste Schritte mit LambdaTest

1. Registrieren Sie sich kostenlos bei [LambdaTest](https://accounts.lambdatest.com/register).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

> [!NOTE]
> Im Gegensatz zu anderen cloudbasierten Anbietern von Cross-Browser-Testdiensten bietet LambdaTest ein Freemium-Konto an, bei dem Sie lebenslangen Zugriff auf ihre Plattform erhalten. Der einzige Unterschied zwischen ihrem Premium- und ihrem Freemium-Plan besteht in der Verbrauchsmenge. Für die Automatisierungstests über ihr Selenium Grid bietet LambdaTest 60 Minuten kostenlose Tests pro Monat.

#### Grundlagen: Manuelle Tests

Sobald Sie sich bei LambdaTest angemeldet haben, werden Sie zum LambdaTest-Dashboard weitergeleitet. Das Dashboard bietet Ihnen Informationen darüber, wie viele Minuten Sie verbraucht haben, wie viele gleichzeitige Sitzungen laufen, Ihre Gesamtanzahl der bisherigen Tests und mehr.

1. Um mit manuellen Tests zu beginnen, müssen Sie den Tab **"Real Time Testing"** aus dem Navigationsmenü auf der linken Seite auswählen.
   ![LambdaTest Dashboard](lambdatest-dashboard.png)
2. Wenn Sie auf **"Real Time Testing"** klicken, werden Sie zu einem Bildschirm weitergeleitet, auf dem Sie die Browserkonfiguration, die Browserversion, das Betriebssystem und die Bildschirmauflösung auswählen können, mit denen Sie Ihre Website testen möchten.
   ![Real Time Testing](mark-as-bug-1.png)
3. Wenn Sie auf die Schaltfläche Starten klicken, erscheint ein Ladebildschirm, der Ihnen basierend auf Ihren Konfigurationen eine VM (Virtuelle Maschine) bereitstellt. Sobald sie geladen ist, können Sie einen live, interaktiven Cross-Browser-Test mit einer Website durchführen.
   [![Mark as bug](mark-as-bug-2.png)](https://web.archive.org/web/20210608014707if_/https://www.lambdatest.com/support/docs/wp-content/uploads/2019/03/mark-as-bug-2.png)
   Wenn Sie ein Problem mit der Benutzeroberfläche bemerken, können Sie es mit Ihren Kollegen teilen, indem Sie ein Screenshot Ihrer VM mit dem Screenshot-Button aufnehmen. Sie können auch ein Video Ihrer Testsitzung aufnehmen, indem Sie den Rekordschalter in Ihrer Testsitzung betätigen.
4. Mit dem eingebauten Bildeditor können Sie Ihren Screenshot hervorheben, bevor Sie ihn an Ihre Kollegen weitergeben.![Highlight a bug](mark-as-bug-3.png)
5. Mit der Schaltfläche „Als Fehler markieren“ können Sie Fehler zu zahlreichen Drittanbietertools wie Jira, Asana, Trello und mehr senden. So können Sie einen Fehler direkt aus Ihrer Testsitzung bei LambdaTest in Ihre Projektmanagement-Instanz einloggen. Entdecken Sie alle [Drittanbieter-LambdaTest-Integrationen](https://www.lambdatest.com/integrations).

> [!NOTE]
> Alle Videos und Bilder, die innerhalb einer Testsitzung aufgenommen wurden, werden in der Galerie, den Testprotokollen und dem Fehlverfolgungstool bei LambdaTest gespeichert.

### Sauce Labs

#### Erste Schritte mit Sauce Labs

Starten wir mit einem Sauce Labs Trial.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Grundlagen: Manuelle Tests

Das [Sauce Labs Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Stellen Sie jedoch sicher, dass Sie sich auf dem Tab _"Manual Tests"_ befinden.

1. Klicken Sie auf _"Start a new manual session"_.
2. Geben Sie auf dem nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html> als Beispiel), und wählen Sie dann eine Browser-/Betriebssystemkombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt eine Menge Auswahl!![Select sauce manual session](sauce-manual-session.png)
3. Wenn Sie auf „Session starten“ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination startet.
4. Nach Abschluss des Ladevorgangs können Sie die Website im gewählten Browser aus der Ferne testen.! [Sauce test running](sauce-test-running.png)
5. Von hier aus sehen Sie das Layout, wie es im zu testenden Browser aussehen würde, und können die Maus bewegen und versuchen, Schaltflächen zu klicken, usw. Das obere Menü ermöglicht es Ihnen:

   - Die Sitzung beenden
   - Jemand anderem eine URL geben, damit er den Test aus der Ferne beobachten kann.
   - Text/Notizen in eine entfernte Zwischenablage kopieren.
   - Einen Screenshot machen.
   - Im Vollbildmodus testen.

Sobald Sie die Sitzung beendet haben, kehren Sie zur Registerkarte „Manual Tests“ zurück, wo Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten zur Sitzung angezeigt. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, Protokolldaten anzeigen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und weitaus bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs hat eine [restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, programmatisch Details zu Ihrem Konto und bestehenden Tests abzurufen und Tests mit weiteren Details zu annotieren, wie deren Bestanden-/Durchgefallen-Zustand, der von manuellen Tests allein nicht erfasst werden kann. Beispielsweise möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests aus der Ferne mit Sauce Labs ausführen, um eine bestimmte Browser-/Betriebssystemkombination zu testen, und die Testergebnisse dann an Sauce Labs übermitteln.

Es stehen mehrere Clients zur Verfügung, die es Ihnen ermöglichen, die API mit Ihrer bevorzugten Umgebung, sei es PHP, Java, Node.js usw., aufzurufen.

Werfen wir einen kurzen Blick darauf, wie wir die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) aufrufen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_sauce.js`. Geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren Sauce Labs Benutzernamen und API-Schlüssel an den angegebenen Stellen ausfüllen. Diese können Sie auf Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings)-Seite abrufen. Füllen Sie diese jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter Sauce Lab Tests im nächsten Artikel behandeln.

### BrowserStack

#### Erste Schritte mit BrowserStack

Starten wir mit einem BrowserStack Trial.

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Wenn Sie sich zum ersten Mal anmelden, sollten Sie auf der Live-Testseite sein; wenn nicht, klicken Sie auf den _Live_-Link im oberen Navigationsmenü.
4. Wenn Sie sich auf Firefox oder Chrome befinden, werden Sie in einem Dialog mit dem Titel „Lokales Testen aktivieren“ aufgefordert, eine Browsererweiterung zu installieren — klicken Sie auf die Schaltfläche _"Installieren"_, um fortzufahren. In anderen Browsern können Sie immer noch einige der Funktionen verwenden (normalerweise über Flash), aber Sie erhalten möglicherweise nicht die volle Erfahrung.

#### Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, auszuwählen, welches Gerät und welchen Browser Sie testen möchten — Plattformen in der linken Spalte, Geräte rechts. Wenn Sie mit der Maus über jedes Gerät fahren oder darauf klicken, erhalten Sie eine Auswahl der auf diesem Gerät verfügbaren Browser.

![Test Choices](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browsersymbole klicken, wird Ihre Auswahl an Plattform-/Gerät-/Browser geladen — wählen Sie jetzt eines aus und probieren Sie es aus.

![Test Devices](browserstack-test-device-sized.png)

> [!NOTE]
> Das blaue Gerätesymbol neben einigen der Mobiledevice-Auswahlen signalisiert, dass Sie auf einem echten Gerät testen; Auswahlen ohne dieses Symbol werden auf einem Emulator ausgeführt.

Sie werden feststellen, dass Sie URLs in die Adressleiste eingeben können und andere Bedienelemente wie erwartet auf einem echten Gerät verwenden können. Sie können sogar Dinge wie Kopieren und Einfügen vom Gerät in Ihre Zwischenablage, nach oben und unten scrollen, indem Sie mit der Maus ziehen, oder geeignete Gesten (z. B. Pinch/Zoom, mit zwei Fingern scrollen) auf den Touchpads von unterstützten Geräten (z. B. MacBook) verwenden. Beachten Sie, dass nicht alle Funktionen auf allen Geräten verfügbar sind.

Sie sehen auch ein Menü, das Ihnen erlaubt, die Sitzung zu steuern.

![Test Menu](browserstack-test-menu-sized.png)

Die Funktionen hier sind wie folgt:

- _Wechseln_ — Wechseln Sie zu einer anderen Plattform-/Gerät-/Browser-Kombination.
- Orientierung (sieht aus wie ein Neuladen-Symbol) — Wechseln Sie die Orientierung zwischen Hoch- und Querformat.
- Bildschirm anpassen (sieht aus wie ein Vollbild-Symbol) — Füllen Sie den Testbereich so weit wie möglich mit dem Gerät.
- Einen Fehler erfassen (sieht aus wie eine Kamera) — Macht einen Screenshot, dann können Sie ihn kommentieren und speichern.
- Fehlerverfolgung (sieht aus wie ein Kartendeck) — Zeigen Sie zuvor erfasste Fehler/Screenshots an.
- Einstellungen (Zahnrad-Symbol) — Ermöglicht Ihnen, allgemeine Einstellungen für die Sitzung zu ändern.
- Hilfe (Fragezeichen) — Zugriffs- und Supportfunktionen.
- _Devtools_ — Erlaubt Ihnen, die Devtools Ihres Browsers zu verwenden, um die im Testbrowser angezeigte Seite direkt zu debuggen oder zu manipulieren. Dies funktioniert derzeit nur bei Tests des Safari-Browsers auf iOS-Geräten.
- _Geräteinformation_ — Zeigt Informationen über das Testgerät an.
- _Features_ — Zeigt Ihnen, welche Funktionen die aktuelle Konfiguration unterstützt, z. B. Kopieren in die Zwischenablage, Gestenunterstützung usw.
- _Beenden_ — Beendet die Sitzung.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Andere grundlegende Funktionen

Wenn Sie zur Hauptseite von BrowserStack zurückkehren, finden Sie noch einige andere nützliche grundlegende Funktionen unter der Option _Mehr_ im Menü:

- _Responsive_: Geben Sie eine URL ein und drücken Sie _Generieren_, und BrowserStack wird diese URL auf mehreren Geräten mit unterschiedlichen Ansichtsfenstergrößen laden. Innerhalb jedes Geräts können Sie weitere Einstellungen wie die Monitorgröße anpassen, um eine gute Vorstellung davon zu erhalten, wie das Layout Ihrer Website auf verschiedenen Formfaktoren funktioniert.
- _Screenshots_: Geben Sie eine URL ein, wählen Sie die Browser-/Geräte-/Plattformen aus, an denen Sie interessiert sind, und klicken Sie dann auf _Screenshots generieren_ — BrowserStack macht Screenshots Ihrer Seite in all diesen verschiedenen Browsern und stellt sie Ihnen zur Ansicht und zum Download zur Verfügung.

#### Fortgeschritten: Die BrowserStack API

BrowserStack hat auch eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die Ihnen ermöglicht, programmatisch Informationen zu Ihrem Konto, Sitzungen, Builds usw. abzurufen.

Es stehen mehrere Clients zur Verfügung, um Aufrufe an die API mit Ihrer bevorzugten Umgebung zu machen, sei es PHP, Java, Node.js usw.

Werfen wir einen kurzen Blick darauf, wie wir auf die API mit Node.js zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie im Abschnitt [Einrichten von Node und npm](#einrichten_von_node_und_npm) detailliert beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_bstack.js`. Geben Sie ihr folgenden Inhalt:

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

3. Sie müssen Ihren BrowserStack-Benutzernamen und -API-Schlüssel an den angegebenen Stellen ausfüllen. Diese können Sie aus den [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) im Abschnitt Authentifizierung & Sicherheit abrufen. Füllen Sie diese jetzt aus.
4. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei wie folgt aus:

   ```bash
   node call_bstack
   ```

Im Folgenden haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die beim Arbeiten mit der BrowserStack Restful API nützlich sein könnten:

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

Wir werden das tatsächliche Ausführen automatisierter BrowserStack-Tests im nächsten Artikel behandeln.

### TestingBot

#### Erste Schritte mit TestingBot

Starten wir mit einem TestingBot Trial.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Grundlagen: Manuelle Tests

Das [TestingBot Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie wählen können. Stellen Sie sicher, dass Sie sich auf dem Tab _"Live Web Testing"_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/Betriebssystemkombination aus, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Test Choices](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination startet.
4. Nach Abschluss des Ladevorgangs können Sie die Website im ausgewählten Browser aus der Ferne testen.
5. Von hier aus können Sie das Layout sehen, wie es im zu testenden Browser aussehen würde, und die Maus bewegen, versuchen, Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht es Ihnen:

   - Die Sitzung beenden
   - Die Bildschirmauflösung ändern
   - Text/Notizen in eine entfernte Zwischenablage kopieren
   - Screenshots machen, bearbeiten und herunterladen
   - Im Vollbildmodus testen.

Sobald Sie die Sitzung beendet haben, kehren Sie zur Seite „Live Web Testing“ zurück, wo Sie einen Eintrag für jede der zuvor gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, werden weitere Daten zur Sitzung angezeigt. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und Protokolle für die Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, programmatisch Details zu Ihrem Konto und bestehenden Tests abzurufen und Tests mit weiteren Details zu annotieren, wie deren Bestanden-/Durchgefallen-Zustand, der von manuellen Tests allein nicht erfasst werden kann.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, darunter Clients für NodeJS, Python, Ruby, Java und PHP.

Im Folgenden ist ein Beispiel, wie Sie mit dem TestingBot-API-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit NodeJS interagieren.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie im Abschnitt [Einrichten von Node und npm](#einrichten_von_node_und_npm) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, z. B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `tb.js`. Geben Sie ihr folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Secret an den angegebenen Stellen ausfüllen. Diese finden Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden das tatsächliche Ausführen automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ziemlich heftige Tour, aber ich hoffe, Sie können anfangen, die Vorteile der Verwendung von Automatisierungstools zu erkennen, um einige der schweren Aufgaben im Bereich Testen zu übernehmen.

Im nächsten Artikel werden wir betrachten, wie Sie Ihr eigenes lokales Automatisierungssystem mit Selenium einrichten und wie Sie dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombinieren können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
