---
title: Einführung in automatisiertes Testen
slug: Learn/Tools_and_testing/Cross_browser_testing/Automated_testing
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}

Tests manuell auf mehreren Browsern und Geräten mehrmals am Tag durchzuführen, kann mühsam und zeitraubend sein. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel schauen wir uns an, was verfügbar ist, wie man Task-Runner verwendet und wie man die Grundlagen kommerzieller Browser-Test-Automatisierungs-Apps wie LambdaTest, Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>, <a href="/de/docs/Learn/CSS">CSS</a> und <a href="/de/docs/Learn/JavaScript">JavaScript</a>;
        eine Vorstellung von den übergeordneten <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen beinhaltet, wie es Ihr Leben erleichtern kann und wie man einige der kommerziellen Produkte nutzt, die die Dinge erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung erleichtert die Dinge

In diesem Modul haben wir eine Vielzahl unterschiedlicher Methoden beschrieben, mit denen Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testbemühungen in Bezug auf zu testende Browser, Barrierefreiheit und mehr haben sollten. Klingt nach viel Arbeit, nicht wahr?

Wir stimmen zu — alle Aspekte, die wir in den vorherigen Artikeln besprochen haben, manuell zu testen, kann wirklich mühsam sein. Glücklicherweise gibt es Tools, die uns helfen können, einige dieser Mühen zu automatisieren. Es gibt zwei Hauptwege, auf denen wir die in diesem Modul besprochenen Tests automatisieren können:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests auszuführen und Code während des Build-Prozesses zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Überprüfen und Minimieren von Code, das Hinzufügen von CSS-Präfixen oder das Transpilieren neuer JavaScript-Funktionen für maximale Cross-Browser-Kompatibilität und mehr durchzuführen.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests in installierten Browsern auszuführen und Ergebnisse zurückzugeben, die auf Fehler in Browsern hinweisen, sobald diese auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben es Ihnen jedoch, deren Setup remote über eine einfache Schnittstelle zu nutzen, was Ihnen den Aufwand erspart, Ihr eigenes Testsystem einzurichten.

Im nächsten Artikel werden wir uns ansehen, wie Sie Ihr eigenes, auf Selenium basierendes Testsystem einrichten können. In diesem Artikel werden wir uns ansehen, wie man einen Task-Runner einrichtet und die grundlegende Funktionalität kommerzieller Systeme wie der oben genannten nutzt.

> [!NOTE]
> Die beiden oben genannten Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um auf einen Dienst wie Sauce Labs oder LambdaTest über eine API zuzugreifen, Cross-Browser-Tests durchzuführen und Ergebnisse zurückzugeben. Wir werden dies unten ebenfalls betrachten.

## Verwendung eines Task-Runners zur Automatisierung von Test-Tools

Wie oben erwähnt, können Sie durch die Verwendung eines Task-Runners, der alles, was Sie zu einem bestimmten Zeitpunkt in Ihrem Build-Prozess ausführen müssen, automatisch ausführt, gängige Aufgaben wie das Überprüfen und Minimieren von Code erheblich beschleunigen. Dies könnte zum Beispiel jedes Mal sein, wenn Sie eine Datei speichern oder zu einem anderen Zeitpunkt. In diesem Abschnitt werden wir uns ansehen, wie man das Task-Running mit Node und Gulp automatisieren kann, eine anfängerfreundliche Option.

### Node und npm einrichten

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js")}}, daher müssen Sie es von [nodejs.org](https://nodejs.org/) installieren:

1. Laden Sie das Installationsprogramm für Ihr System von der oben genannten Website herunter. (Wenn Sie Node und npm bereits installiert haben, springen Sie zu Punkt 4)
2. Installieren Sie es wie jedes andere Programm. Beachten Sie, dass Node mit dem [Node Package Manager](https://www.npmjs.com/) (npm) geliefert wird, der es Ihnen ermöglicht, Pakete einfach zu installieren, Ihre eigenen Pakete mit anderen zu teilen und nützliche Skripte auf Ihren Projekten auszuführen.
3. Sobald die Installation abgeschlossen ist, testen Sie, ob Node installiert ist, indem Sie das Folgende in das Terminal eingeben, das die installierten Versionen von Node und npm zurückgibt:

   ```bash
   node -v
   npm -v
   ```

4. Wenn Sie Node/npm bereits installiert haben, sollten Sie diese auf die neuesten Versionen aktualisieren. Um Node zu aktualisieren, ist der zuverlässigste Weg, ein aktualisiertes Installationspaket von ihrer Website herunterzuladen und zu installieren (siehe obigen Link). Um npm zu aktualisieren, verwenden Sie den folgenden Befehl in Ihrem Terminal:

   ```bash
   npm install npm@latest -g
   ```

> [!NOTE]
> Wenn der obige Befehl mit Berechtigungsfehlern fehlschlägt, sollte [Npm-Berechtigungen reparieren](https://docs.npmjs.com/getting-started/fixing-npm-permissions/) das Problem beheben.

Um Node/npm-basierte Pakete in Ihren Projekten zu verwenden, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Dies ist einfach zu tun.

Zum Beispiel erstellen wir zunächst ein Testverzeichnis, damit wir ohne Angst vor Schäden herumprobieren können.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrem Datei-Manager-UI oder über die Befehlszeile, indem Sie an den gewünschten Standort navigieren und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie einfach in Ihr Testverzeichnis gehen und es mit dem folgenden Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Bei diesem zweiten Befehl werden Ihnen viele Fragen gestellt, um die Informationen zu erhalten, die für die Einrichtung des Projekts erforderlich sind; Sie können vorerst einfach die Standardwerte auswählen.
4. Sobald alle Fragen gestellt wurden, wird gefragt, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie Enter/Return, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis erstellen.

Diese Datei ist im Wesentlichen eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst wird sie wie folgt aussehen:

```json
{
  "name": "node-test",
  "version": "1.0.0",
  "description": "Test für npm-Projekte",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "author": "Chris Mills",
  "license": "MIT"
}
```

Damit sind Sie bereit, weiterzumachen.

### Gulp-Automatisierung einrichten

Schauen wir uns an, wie man Gulp einrichtet und es zur Automatisierung von Test-Tools verwendet.

1. Beginnen Sie damit, ein Test-npm-Projekt mit dem Verfahren am Ende des vorherigen Abschnitts zu erstellen.
   Aktualisieren Sie auch die `package.json`-Datei mit der Zeile: `"type": "module"` damit sie wie folgt aussieht:

   ```json
   {
     "name": "node-test",
     "version": "1.0.0",
     "description": "Test für npm-Projekte",
     "main": "index.js",
     "scripts": {
       "test": "test"
     },
     "author": "Chris Mills",
     "license": "MIT",
     "type": "module"
   }
   ```

2. Als Nächstes benötigen Sie einige HTML-, CSS- und JavaScript-Beispielinhalte, um Ihr System zu testen — kopieren Sie unsere Beispiel-[index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css)-Dateien in einen Unterordner mit dem Namen `src` in Ihrem Projektordner.
   Sie können auch eigene Testinhalte ausprobieren, aber beachten Sie, dass solche Tools nicht mit internem JS/CSS funktionieren — Sie benötigen externe Dateien.
3. Installieren Sie zunächst Gulp global (das bedeutet, es wird für alle Projekte verfügbar sein) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie dann den folgenden Befehl in Ihrem npm-Projektverzeichnis-Root aus, um Gulp als Abhängigkeit Ihres Projekts einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Diese Datei wird alle unsere Aufgaben ausführen. In diese Datei schreiben Sie Folgendes:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp läuft");
     cb();
   }
   ```

   Dies erfordert das zuvor installierte `gulp`-Modul und exportiert dann eine Standardaufgabe, die nichts tut, außer eine Nachricht im Terminal auszugeben — dies ist nützlich, um zu wissen, dass Gulp funktioniert. Jede Gulp-Aufgabe wird im gleichen grundlegenden Format exportiert — `exports.taskName = taskFunction`. Jede Funktion nimmt einen Parameter — ein Callback, das ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit folgendem Befehl ausführen — versuchen Sie dies jetzt:

   ```bash
   gulp
   ```

### Hinzufügen von echten Aufgaben zu Gulp

Um echte Aufgaben zu Gulp hinzuzufügen, müssen wir darüber nachdenken, was wir tun möchten. Eine vernünftige Reihe von grundlegenden Funktionen, die wir auf unserem Projekt ausführen könnten, ist wie folgt:

- html-tidy, css-lint und js-hint, um häufige HTML/CSS/JS-Fehler zu überarbeiten und zu melden/zu reparieren (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer, um unser CSS zu scannen und nur dort Vendor-Präfixe hinzuzufügen, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- babel, um neue JavaScript-Syntax-Funktionen in traditionelle Syntax zu übersetzen, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Sehen Sie sich die obigen Links für vollständige Anweisungen zu den verschiedenen Gulp-Paketen an, die wir verwenden.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann alle Abhängigkeiten oben in der `gulpfile.js`-Datei einbinden, dann Ihren Test(die Tests) unten hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit er über den Befehl von Gulp verfügbar ist.

#### html-tidy

1. Installieren Sie es mit dem folgenden Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, sehen Sie einen Eintrag dafür in der Eigenschaft `devDependencies`.

2. Fügen Sie die folgende Abhängigkeit zu `gulpfile.js` hinzu:

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

4. Ändern Sie den Standardexport zu:

   ```js
   export default html;
   ```

Hier erfassen wir unsere Entwicklungsdatei `index.html` mit `gulp.src()`, das es uns ermöglicht, eine Quelldatei zu erfassen und etwas damit zu tun.

Wir verwenden dann die `pipe()`-Funktion, um diese Quelle an einen anderen Befehl zu übergeben, um etwas anderes damit zu tun. Wir können so viele dieser Funktionen miteinander verketten, wie wir möchten. Wir führen zuerst `htmltidy()` auf der Quelle aus, das durchgeht und Fehler in unserer Datei behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabedatei in das `build`-Verzeichnis.

In der Eingangsdatei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dies bis zum Erstellen der Ausgabedatei entfernt.

#### Autoprefixer und css-lint

1. Installieren Sie es mit den folgenden Zeilen:

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

Hier erfassen wir unsere Datei `style.css`, führen csslint darauf aus (das eine Liste von Fehlern in Ihrem CSS im Terminal ausgibt), dann führen wir es durch autoprefixer, um alle erforderlichen Präfixe hinzuzufügen, damit naszierende CSS-Funktionen in älteren Browsern funktionieren. Am Ende der Pipe-Kette geben wir unser modifiziertes, mit Präfixen versehenes CSS ins `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie es mit den folgenden Zeilen:

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

Hier erfassen wir unsere Datei `main.js`, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` an das Terminal aus; dann übergeben wir die Datei an babel, das sie in eine alte Syntax übersetzt und das Ergebnis ins `build`-Verzeichnis ausgibt. Unser Originalcode enthielt eine [Fat Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die babel in eine alte Funktionssyntax umgewandelt hat.

#### Weitere Ideen

Sobald dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen, und Sie sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, wo die Zeilen die Start- oder Endzeit der Aufgaben, den Namen der Aufgabe und die Dauer der 'Fertiggestellten' Aufgaben anzeigen.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im `build`-Verzeichnis betrachten und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML-/CSS-/JavaScript-Codeabschnitte auszukommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie feststellen können, wo das Problem liegt.

Gulp kommt mit einer `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu überwachen und Tests auszuführen, wann immer Sie eine Datei speichern. Beispielsweise versuchen Sie, das Folgende am Ende Ihrer `gulpfile.js` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Versuchen Sie jetzt, den Befehl `gulp watch` in Ihr Terminal einzugeben. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen — hier sagen wir: "Führen Sie diese Aufgaben aus, wenn Dateien dieser Typen gespeichert werden." Sie könnten Platzhalter auch in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')` würde alle Ihre CSS-Dateien erfassen und dann die gepipeten Aufgaben auf sie ausführen.

Es gibt noch viel mehr, was man mit Gulp machen kann. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) hat buchstäblich Tausende von Plugins zum Durchsuchen.

### Andere Task-Runner

Es gibt viele andere Task-Runner-Optionen. Wir möchten keineswegs sagen, dass Gulp die beste Lösung ist, aber es funktioniert für uns und ist für Anfänger recht zugänglich. Sie könnten auch versuchen, andere Lösungen zu verwenden:

- Grunt funktioniert sehr ähnlich wie Gulp, angewiesen von Aufgaben, die in einer Konfigurationsdatei spezifiziert werden, anstatt JavaScript zu verwenden. Sehen Sie sich [Grunt für weitere Details an.](https://gruntjs.com/getting-started)
- Sie können auch Aufgaben direkt mit npm-Skripten, die sich in Ihrer `package.json`-Datei befinden, ausführen, ohne dass Sie ein extra Task-Runner-System installieren müssen. Dies funktioniert auf der Annahme, dass Dinge wie Gulp-Plugins im Wesentlichen Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie Sie die Tools über die Kommandozeile ausführen können, können Sie sie mit npm-Skripten ausführen. Es ist etwas kniffliger zu arbeiten, kann aber lohnend sein für diejenigen, die mit ihren Kommandozeilenfähigkeiten stark sind. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Verwendung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieter-Browser-Testdienste an und was sie für uns tun können.

Das grundlegende Prinzip solcher Anwendungen besteht darin, dass das Unternehmen, das jede einzelne betreibt, einen großen Serverpark hat, der viele verschiedene Tests ausführen kann. Wenn Sie diesen Dienst nutzen, geben Sie eine URL der Seite an, die Sie testen möchten, sowie Informationen, z. B. welche Browser Sie getestet haben möchten. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Logdateien, Texten etc. zurück.

Sie können dann einen Gang höher schalten, indem Sie über eine API programmgesteuert auf Funktionen zugreifen, was bedeutet, dass solche Apps mit Task-Runnern, wie Ihren eigenen lokalen Selenium-Umgebungen und anderen, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt noch andere kommerzielle Browser-Testsysteme, aber in diesem Artikel konzentrieren wir uns auf LambdaTest, Sauce Labs und BrowserStack. Wir wollen nicht sagen, dass dies unbedingt die besten Tools sind, aber sie sind gute, die einfach für Anfänger zu verwenden sind.

### LambdaTest

#### Einstieg mit LambdaTest

1. Beginnen wir damit, sich [bei LambdaTest anzumelden](https://accounts.lambdatest.com/register) für den kostenlosen Zugang.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

> [!NOTE]
> Im Gegensatz zu anderen cloud-basierten Cross-Browser-Testdienstanbietern bietet LambdaTest ein Freemium-Konto an, bei dem Sie lebenslangen Zugriff auf ihre Plattform bekommen. Der einzige Unterschied zwischen ihrem Premium- und ihrem Freemium-Plan liegt im Umfang des Verbrauchs. Für Automatisierungstests über ihr Selenium Grid bietet LambdaTest 60 Minuten pro Monat kostenloses Testen.

#### Die Grundlagen: Manuelle Tests

Sobald Sie sich bei LambdaTest anmelden, werden Sie zum LambdaTest-Dashboard geleitet. Das Dashboard bietet Ihnen Details wie die konsumierten Minuten, die Anzahl der laufenden simultanen Sessions, die Gesamtzahl Ihrer bisherigen Tests und mehr.

1. Um mit dem manuellen Testen zu beginnen, müssen Sie den **"Real Time Testing"** Tab aus dem linken Navigationsmenü auswählen.
   ![LambdaTest Dashboard](lambdatest-dashboard.png)
2. Wenn Sie auf das **Real Time Testing** klicken, werden Sie zu einem Bildschirm weitergeleitet, auf dem Sie die Browserkonfiguration, Browserversion, das Betriebssystem und die Bildschirmauflösung auswählen können, mit der Sie Ihre Website testen möchten.
   ![Real Time Testing](mark-as-bug-1.png)
3. Sobald Sie auf die Start-Schaltfläche klicken, erscheint ein Ladescreen, der Ihnen eine VM (virtuelle Maschine) basierend auf Ihren Konfigurationen bereitstellt. Nach dem Laden können Sie ein Live-Cross-Browser-Testing mit einer Website durchführen.
   [![Mark as bug](mark-as-bug-2.png)](https://web.archive.org/web/20210608014707if_/https://www.lambdatest.com/support/docs/wp-content/uploads/2019/03/mark-as-bug-2.png)
   Wenn Sie auf ein Problem mit der UI stoßen, können Sie es Ihren Kollegen mitteilen, indem Sie einen Screenshot Ihrer VM mit der Screenshot-Schaltfläche aufnehmen. Sie können auch ein Video Ihrer Testsitzung aufnehmen, indem Sie die Aufnahme-Schaltfläche in Ihrer Testsitzung drücken.
4. Mit dem integrierten Bildeditor können Sie Ihren Screenshot hervorheben, bevor Sie ihn an Ihre Kollegen weiterleiten. ![Hervorheben eines Fehlers](mark-as-bug-3.png)
5. Mit der Schaltfläche "Als Fehler markieren" können Sie Fehler an zahlreiche Drittanbieter-Tools wie Jira, Asana, Trello und mehr weiterleiten. Auf diese Weise können Sie direkt aus Ihrer Testsitzung auf LambdaTest einen Fehler in Ihrem Projektmanagementsystem protokollieren. Schauen Sie sich alle [drittanbieter LambdaTest-Integrationen](https://www.lambdatest.com/integrations) an.

> [!NOTE]
> Alle Videos und Bilder, die innerhalb einer Testsitzung aufgenommen wurden, werden in der Galerie, den Testprotokollen und dem Fehlerverfolgungstool bei LambdaTest gespeichert.

### Sauce Labs

#### Einstieg mit Sauce Labs

Lassen Sie uns mit einem Sauce Labs-Trial beginnen.

1. Erstellen Sie ein Sauce Labs Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele Optionen. Stellen Sie sicher, dass Sie sich auf der _Manual Tests_ Registerkarte befinden.

1. Klicken Sie auf _Start a new manual session_.
2. Geben Sie im nächsten Bildschirm die URL einer Seite ein, die Sie testen möchten (verwenden Sie beispielsweise <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Browser/OS-Kombination aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Sie haben viele Auswahlmöglichkeiten, wie Sie sehen werden![Session manuell mit Sauce starten](sauce-manual-session.png)
3. Wenn Sie auf Start session klicken, erscheint ein Ladescreen, der eine virtuelle Maschine mit der gewählten Kombination startet.
4. Nach dem Laden können Sie dann starten, die Website, die im ausgewählten Browser läuft, remote zu testen.![Sauce-Test läuft](sauce-test-running.png)
5. Hier können Sie das Layout sehen, wie es im getesteten Browser aussehen würde, die Maus herumbewegen und versuchen, Schaltflächen zu klicken, usw. Das obere Menü ermöglicht Ihnen:

   - Die Sitzung zu beenden
   - Jemandem eine URL zu geben, damit er den Test remote verfolgen kann.
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren.
   - Einen Screenshot zu machen.
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Registerkarte Manual Tests zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Ein Klick auf einen dieser Einträge zeigt weitere Daten zur Sitzung an. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, Datenprotokolle und mehr ansehen.

> [!NOTE]
> Das ist bereits sehr nützlich und viel bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Fortgeschritten: Die Sauce Labs API

Sauce Labs hat eine [restful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, Details zu Ihrem Konto und bestehenden Tests programmgesteuert abzurufen und Tests mit weiteren Details zu versehen, wie ihrem Bestehen-/Fehlens-Status, der allein durch manuelles Testen nicht aufgezeichnet werden kann. Beispielsweise möchten Sie möglicherweise einen Ihrer eigenen Selenium-Tests remote mit Sauce Labs durchführen, um eine bestimmte Browser/OS-Kombination zu testen, und dann die Testergebnisse an Sauce Labs zurückgeben.

Es hat mehrere Clients zur Verfügung, mit denen Sie Anrufe zur API in Ihrer bevorzugten Umgebung machen können, sei es PHP, Java, Node.js, usw.

Schauen wir uns an, wie wir mit der API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) zugreifen würden.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie im Abschnitt [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, zum Beispiel `sauce-test`.
2. Installieren Sie den Node Sauce Labs-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projekt-Root mit dem Namen `call_sauce.js` und geben Sie ihr den folgenden Inhalt:

   ```js
   const SauceLabs = require("saucelabs").default;

   (async () => {
     const myAccount = new SauceLabs({
       username: "your-sauce-username",
       password: "your-sauce-api-key",
     });

     // Vollständige WebDriver-URL vom Client abhängig von der Region abrufen:
     console.log(myAccount.webdriverEndpoint);

     // Auftragsdetails des zuletzt durchgeführten Auftrags abrufen
     const jobs = await myAccount.listJobs("your-sauce-username", {
       limit: 1,
       full: true,
     });

     console.log(jobs);
   })();
   ```

4. Sie müssen Ihren Sauce Labs-Benutzernamen und API-Schlüssel an den angegebenen Stellen ausfüllen. Diese können Sie auf Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings) Seite nachsehen. Füllen Sie dies jetzt ein.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei so aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Das Ausführen von automatisierten Sauce Lab-Tests werden wir im nächsten Artikel behandeln.

### BrowserStack

#### Einstieg mit BrowserStack

Lassen Sie uns mit einem BrowserStack-Trial beginnen.

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.
3. Beim ersten Anmelden sollten Sie sich auf der Seite zum Live-Test befinden; wenn nicht, klicken Sie auf den _Live_ Link im oberen Navigationsmenü.
4. Wenn Sie Firefox oder Chrome verwenden, werden Sie aufgefordert, eine Browsererweiterung in einem Dialog namens "Enable Local Testing" zu installieren — klicken Sie auf die Schaltfläche _Installieren_, um fortzufahren. In anderen Browsern können Sie einige der Funktionen (normalerweise über Flash) dennoch verwenden, aber möglicherweise nicht das vollständige Erlebnis erlangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard erlaubt Ihnen auszuwählen, auf welchem Gerät und Browser Sie testen möchten — Plattformen in der linken Spalte, Geräte auf der rechten. Wenn Sie die Maus über ein Gerät bewegen oder es anklicken, erhalten Sie eine Auswahl der auf diesem Gerät verfügbaren Browser.

![Testauswahl](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browser-Icons klicken, wird Ihre Wahl von Plattform/Gerät/Browser geladen — wählen Sie jetzt eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

> [!NOTE]
> Das blaue Gerätesymbol neben einigen der Mobilgeräteauswahlen signalisiert, dass Sie auf einem echten Gerät testen; Auswahlen ohne dieses Symbol werden auf einem Emulator ausgeführt.

Sie werden feststellen, dass Sie URLs in die Adressleiste eingeben und die anderen Kontrollen wie erwartet auf einem echten Gerät benutzen können. Sie können sogar Dinge tun wie Kopieren und Einfügen vom Gerät in Ihre Zwischenablage, nach oben und unten scrollen, indem Sie mit der Maus ziehen, oder geeignete Gesten verwenden (z.B. Kneifen/Zoomen, mit zwei Fingern scrollen) auf den Touchpads unterstützender Geräte (z.B. MacBook). Beachten Sie, dass nicht alle Funktionen auf allen Geräten verfügbar sind.

Sie werden auch ein Menü sehen, das Ihnen erlaubt, die Sitzung zu steuern.

![Testmenü](browserstack-test-menu-sized.png)

Die Funktionen hier sind wie folgt:

- _Switch_ — Wechselt zu einer anderen Plattform/Geräte/Brow-Kombination.
- Ausrichtung (sieht aus wie ein Neuladen-Icon) — Wechselt die Ausrichtung zwischen Hoch- und Querformat.
- Bildschirmgröße anpassen (sieht aus wie ein Vollbild-Icon) — Füllt die Testbereiche so weit wie möglich mit dem Gerät.
- Einen Fehler festhalten (sieht aus wie eine Kamera) — Macht einen Screenshot, dann können Sie ihn annotieren und speichern.
- Fehlerverfolgung (sieht aus wie ein Kartendeck) — Zeigt zuvor festgehaltene Schäden/Screenshots an.
- Einstellungen (Zahnrad-Icon) — Ermöglicht Ihnen, allgemeine Einstellungen für die Sitzung zu ändern.
- Hilfe (Fragezeichen) — Greift auf Unterstützungs-/Hilfsfunktionen zu.
- _Entwicklungstools_ — Ermöglicht Ihnen, die Entwicklungstools Ihres Browsers zu nutzen, um direkt die Seite im Testbrowser zu debuggen oder zu ändern. Dies funktioniert derzeit nur beim Testen des Safari-Browsers auf iOS-Geräten.
- _Geräteinfo_ — Zeigt Informationen über das Testgerät an.
- _Funktionen_ — Zeigt, welche Funktionen die aktuelle Konfiguration unterstützt, z.B. Kopieren zur Zwischenablage, Gestenunterstützung usw.
- _Stoppen_ — Beendet die Sitzung.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer als alle diese Emulatoren und virtuellen Maschinen selbst einzurichten.

#### Andere grundlegende Funktionen

Wenn Sie zur Hauptseite von BrowserStack zurückkehren, finden Sie unter der Option _Mehr_ im Menü einige andere nützliche grundlegende Funktionen:

- _Responsive_: Geben Sie eine URL ein und drücken Sie _Erzeugen_, und BrowserStack lädt diese URL auf mehreren Geräten mit verschiedenen Ansichtsgrößen. Innerhalb jedes Geräts können Sie weitere Einstellungen wie die Monitorgröße anpassen, um eine gute Vorstellung davon zu bekommen, wie das Layout Ihrer Website über verschiedene Formfaktoren hinweg funktioniert.
- _Screenshots_: Geben Sie eine URL ein und wählen Sie die Browser/Geräte/Plattformen, die Sie interessieren, dann drücken Sie _Screenshots erzeugen_ — BrowserStack macht dann Screenshots Ihrer Site in all den verschiedenen Browsern und stellt sie Ihnen zur Ansicht und zum Download zur Verfügung.

#### Fortgeschritten: Die BrowserStack API

BrowserStack hat ebenfalls eine [restful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, Details zu Ihrem Kontoplan, Sitzungen, Builds usw. programmgesteuert abzurufen.

Es hat mehrere Clients zur Verfügung, mit denen Sie Anrufe zur API in Ihrer bevorzugten Umgebung machen können, sei es PHP, Java, Node.js, usw.

Schauen wir uns an, wie man mit Node.js darauf zugreifen würde.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie im Abschnitt [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als vorher, z.B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projekt-Root mit dem Namen `call_bstack.js` und geben Sie ihr den folgenden Inhalt:

   ```js
   const request = require("request");

   const bsUser = "BROWSERSTACK_USERNAME";
   const bsKey = "BROWSERSTACK_ACCESS_KEY";
   const baseUrl = `https://${bsUser}:${bsKey}@www.browserstack.com/automate/`;

   function getPlanDetails() {
     request({ uri: `${baseUrl}plan.json` }, (err, res, body) => {
       console.log(JSON.parse(body));
     });
     /* Antwort:
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

3. Sie müssen Ihren BrowserStack-Benutzernamen und API-Schlüssel an den angegebenen Stellen ausfüllen. Diese können Sie in Ihren [BrowserStack-Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt Authentifikation & Sicherheit nachschauen. Füllen Sie dies jetzt aus.
4. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei so aus:

   ```bash
   node call_bstack
   ```

Nachfolgend haben wir auch einige andere gebrauchsfertige Funktionen bereitgestellt, die Sie vielleicht nützlich finden, wenn Sie mit der BrowserStack-RESTful-API arbeiten.

```js
function getBuilds() {
  request({ uri: `${baseUrl}builds.json` }, (err, res, body) => {
    console.log(JSON.parse(body));
  });
  /* Antwort:
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
  /* Antwort:
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
  /* Antwort:
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

Das Ausführen von automatisierten BrowserStack-Tests werden wir im nächsten Artikel behandeln.

### TestingBot

#### Einstieg mit TestingBot

Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).

1. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse verifiziert haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen Optionen auf, die Sie auswählen können. Achten Sie darauf, dass Sie sich auf dem Tab _Live Web Testing_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Browser-/OS-Kombination, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Start Browser_ klicken, erscheint ein Ladescreen, der eine virtuelle Maschine mit der gewählten Kombination startet.
4. Nach dem Laden können Sie dann starten, die Website, die im ausgewählten Browser läuft, remote zu testen.
5. Hier können Sie das Layout sehen, wie es im getesteten Browser aussehen würde, die Maus herumbewegen und versuchen, Schaltflächen zu klicken, usw. Das Seitenmenü erlaubt Ihnen:

   - Die Sitzung zu beenden
   - Die Bildschirmauflösung zu ändern
   - Text/Notizen in eine entfernte Zwischenablage zu kopieren
   - Screenshots zu machen, bearbeiten und herunterladen
   - Im Vollbildmodus zu testen.

Sobald Sie die Sitzung beenden, kehren Sie zur _Live Web Testing_ Seite zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Ein Klick auf einen dieser Einträge zeigt weitere Daten zur Sitzung an. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen, und Protokolle zur Sitzung sehen.

#### Fortgeschritten: Die TestingBot API

TestingBot hat eine [restful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, Details zu Ihrem Konto und bestehenden Tests programmgesteuert abzurufen und Tests mit weiteren Details zu versehen, wie ihrem Bestehen-/Fehlens-Status, der allein durch manuelles Testen nicht aufgezeichnet werden kann.

TestingBot hat mehrere API-Clients, die Sie für die Interaktion mit der API verwenden können, einschließlich Clients für NodeJS, Python, Ruby, Java und PHP.

Nachfolgend ist ein Beispiel, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot API interagiert.

1. Richten Sie zunächst ein neues npm-Projekt ein, um dies zu testen, wie im Abschnitt [Node und npm einrichten](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als vorher, z.B. `tb-test`.
2. Installieren Sie den Node TestingBot-Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projekt-Root mit dem Namen `tb.js` und geben Sie ihr den folgenden Inhalt:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Geheimnis an den angegebenen Stellen ausfüllen. Diese können Sie im [TestingBot-Dashboard](https://testingbot.com/members/user/edit) nachsehen.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Das Ausführen von automatisierten TestingBot-Tests werden wir im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganze Menge, aber ich bin sicher, Sie fangen an, die Vorteile der Verwendung von Automatisierungstools zu sehen, um einige der schweren Aufgaben beim Testen zu bewältigen.

Im nächsten Artikel werden wir uns ansehen, wie wir unser eigenes lokales Automatisierungssystem mit Selenium einrichten und wie man dies mit Dienstleistungen wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Feature_detection", "Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment", "Learn/Tools_and_testing/Cross_browser_testing")}}
