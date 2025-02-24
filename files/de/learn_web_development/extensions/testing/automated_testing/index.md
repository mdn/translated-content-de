---
title: Einführung in automatisierte Tests
slug: Learn_web_development/Extensions/Testing/Automated_testing
l10n:
  sourceCommit: e835eebe8f68e794faa036d4cc8e78cb56bbc5fe
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}

Das manuelle Ausführen von Tests in mehreren Browsern und auf verschiedenen Geräten, mehrmals am Tag, kann mühsam und zeitaufwendig werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel schauen wir uns an, was verfügbar ist, wie man Task-Runner verwendet und wie man die Grundlagen kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs, BrowserStack und TestingBot nutzt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein Verständnis dafür zu vermitteln, was automatisiertes Testen bedeutet, wie es Ihr Leben erleichtern kann und wie Sie einige der kommerziellen Produkte nutzen können, die die Dinge erleichtern.
      </td>
    </tr>
  </tbody>
</table>

## Automatisierung macht alles leichter

In diesem Modul haben wir eine Vielzahl von verschiedenen Möglichkeiten detailliert beschrieben, wie Sie Ihre Websites und Apps testen können, und erklärt, welchen Umfang Ihre Cross-Browser-Testbemühungen haben sollten, in Bezug darauf, welche Browser zu testen sind, Überlegungen zur Zugänglichkeit und mehr. Hört sich nach einer Menge Arbeit an, nicht wahr?

Wir stimmen zu — das manuelle Testen all der Dinge, die wir in früheren Artikeln betrachtet haben, kann wirklich mühsam sein. Zum Glück gibt es Tools, die uns helfen, einen Teil dieser Mühen zu automatisieren. Es gibt zwei Hauptwege, um die Tests, über die wir in diesem Modul gesprochen haben, zu automatisieren:

1. Verwenden Sie einen Task-Runner wie [Grunt](https://gruntjs.com/) oder [Gulp](https://gulpjs.com/), oder [npm scripts](https://docs.npmjs.com/misc/scripts/), um Tests während Ihres Build-Prozesses durchzuführen und Code zu bereinigen. Dies ist eine großartige Möglichkeit, Aufgaben wie das Linting und Minifying von Code durchzuführen, das Hinzufügen von CSS-Präfixen oder das Transpilieren neuer JavaScript-Funktionen für maximale Cross-Browser-Reichweite und so weiter.
2. Verwenden Sie ein Browser-Automatisierungssystem wie [Selenium](https://www.selenium.dev/), um spezifische Tests in installierten Browsern durchzuführen und Ergebnisse zurückzugeben, die Sie auf Fehler aufmerksam machen, wenn sie in Browsern auftreten. Kommerzielle Cross-Browser-Test-Apps wie [Sauce Labs](https://saucelabs.com/) und [BrowserStack](https://www.browserstack.com/) basieren auf Selenium, erlauben es Ihnen jedoch, ihr Setup remote über eine Schnittstelle zu nutzen, und ersparen Ihnen den Aufwand, Ihr eigenes Testsyst zu erstellen.

Wir werden uns ansehen, wie Sie in dem nächsten Artikel Ihr eigenes auf Selenium basiertes Testsyst einrichten können. In diesem Artikel schauen wir uns an, wie man einen Task-Runner einrichtet und die grundlegenden Funktionen von kommerziellen Systemen wie den oben genannten nutzt.

> [!NOTE]
> Die oben genannten zwei Kategorien schließen sich nicht gegenseitig aus. Es ist möglich, einen Task-Runner einzurichten, um über eine API auf einen Dienst wie Sauce Labs oder LambdaTest zuzugreifen, Cross-Browser-Tests auszuführen und Ergebnisse zu erhalten. Wir werden uns dies im Folgenden ebenfalls ansehen.

## Verwendung eines Task-Runners zur Automatisierung von Test-Tools

Wie oben erwähnt, können Sie häufige Aufgaben wie das Linting und Minifying von Code erheblich beschleunigen, indem Sie einen Task-Runner verwenden, um alles, was ausgeführt werden muss, automatisch zu einem bestimmten Zeitpunkt im Build-Prozess auszuführen. Beispielsweise könnte dies jedes Mal sein, wenn Sie eine Datei speichern, oder zu einem anderen Zeitpunkt. In diesem Abschnitt betrachten wir, wie man das Task-Running mit Node und Gulp automatisieren kann, eine anfängerfreundliche Option.

### Node und npm einrichten

Die meisten Tools heutzutage basieren auf {{Glossary("Node.js", "Node.js")}}, daher müssen Sie es zusammen mit seinem Gegenstück, dem Paketmanager [`npm`](https://www.npmjs.com/), installieren:

1. Der einfachste Weg, Node.js und `npm` zu installieren und zu aktualisieren, ist über einen Node-Version-Manager: Folgen Sie den Anweisungen unter [Node installieren](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#installing_node).
2. Stellen Sie sicher, dass Sie [testen, ob Ihre Installation erfolgreich war](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment#testing_your_nodejs_and_npm_installation), bevor Sie fortfahren.
3. Wenn Sie Node.js/`npm` bereits früher installiert haben, sollten Sie sie auf die neuesten Versionen aktualisieren. Dies kann durch die Installation der neuesten LTS-Versionen über den Node-Version-Manager erfolgen (siehe erneut die verlinkten Anweisungen oben).

Um Node/npm-basierte Pakete in Ihren Projekten nutzen zu können, müssen Sie Ihre Projektverzeichnisse als npm-Projekte einrichten. Das ist einfach zu tun.

Beispielsweise erstellen wir zuerst ein Testverzeichnis, um darin herumzuspielen, ohne Angst haben zu müssen, etwas kaputt zu machen.

1. Erstellen Sie ein neues Verzeichnis an einem sinnvollen Ort mit Ihrer Datei-Manager-Benutzeroberfläche oder, über die Kommandozeile, indem Sie zu dem Ort navigieren, an dem Sie es möchten, und den folgenden Befehl ausführen:

   ```bash
   mkdir node-test
   ```

2. Um dieses Verzeichnis zu einem npm-Projekt zu machen, müssen Sie nur in Ihr Testverzeichnis wechseln und es mit dem folgenden Befehl initialisieren:

   ```bash
   cd node-test
   npm init
   ```

3. Dieser zweite Befehl wird Ihnen viele Fragen stellen, um die für die Projekteinrichtung erforderlichen Informationen zu erhalten; Sie können vorerst einfach die Standardwerte auswählen.
4. Nachdem alle Fragen gestellt wurden, wird der Befehl Sie fragen, ob die eingegebenen Informationen in Ordnung sind. Geben Sie `yes` ein und drücken Sie die Eingabetaste, und npm wird eine `package.json`-Datei in Ihrem Verzeichnis erzeugen.

Diese Datei ist im Grunde eine Konfigurationsdatei für das Projekt. Sie können sie später anpassen, aber vorerst sieht sie etwa so aus:

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

Damit sind Sie bereit, weiterzugehen.

### Gulp-Automatisierung einrichten

Schauen wir uns an, wie man Gulp einrichtet und nutzt, um einige Test-Tools zu automatisieren.

1. Erstellen Sie zunächst ein Test-npm-Projekt mit dem im vorherigen Abschnitt am Ende beschriebenen Verfahren. Aktualisieren Sie außerdem die `package.json`-Datei mit der Zeile: `"type": "module"`, sodass sie etwa so aussieht:

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

2. Als Nächstes benötigen Sie einige Beispiel-HTML-, CSS- und JavaScript-Inhalte, um Ihr System zu testen — machen Sie Kopien unserer Beispiele [index.html](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/index.html), [main.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/main.js) und [style.css](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/automation/style.css) Dateien in einem Unterordner mit dem Namen `src` innerhalb Ihres Projektordners. Sie können Ihre eigenen Testinhalte ausprobieren, sollten aber beachten, dass solche Tools nicht gut mit JS/CSS funktionieren, die in die HTML-Datei eingebettet sind. Sie benötigen separate Dateien.
3. Installieren Sie Gulp global (das bedeutet, dass es über alle Projekte hinweg verfügbar sein wird) mit dem folgenden Befehl:

   ```bash
   npm install --global gulp-cli
   ```

4. Führen Sie als Nächstes den folgenden Befehl innerhalb Ihres npm-Projektverzeichnisses aus, um Gulp als Abhängigkeit für Ihr Projekt einzurichten:

   ```bash
   npm install --save-dev gulp
   ```

5. Erstellen Sie nun eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `gulpfile.mjs`. Dies ist die Datei, die alle unsere Aufgaben ausführen wird. Fügen Sie in dieser Datei Folgendes hinzu:

   ```js
   import gulp from "gulp";

   export default function (cb) {
     console.log("Gulp running");
     cb();
   }
   ```

   Dies erfordert das `gulp`-Modul, das wir zuvor installiert haben, und exportiert dann eine Standardaufgabe, die nichts tut, außer eine Nachricht im Terminal auszugeben — das ist nützlich, um uns zu bestätigen, dass Gulp funktioniert. In den nächsten Abschnitten werden wir diese `export default` Anweisung zu etwas Nützlicherem ändern.

   Jede Gulp-Aufgabe wird im gleichen Grundformat exportiert — `exports function taskName(cb) {...}`. Jede Funktion nimmt einen Parameter — einen Rückruf, der ausgeführt wird, wenn die Aufgabe abgeschlossen ist.

6. Sie können die Standardaufgabe von Gulp mit dem folgenden Befehl ausführen — probieren Sie dies jetzt aus:

   ```bash
   gulp
   ```

### Hinzufügen realer Aufgaben zu Gulp

Nun sind wir bereit, weitere Aufgaben zu unserer Gulp-Datei hinzuzufügen. Jede Ergänzung kann erfordern, dass Sie die `gulpfile.mjs` Datei auf folgende Weise ändern:

- Wenn wir Sie auffordern, einige `import`-Anweisungen hinzuzufügen, fügen Sie diese unterhalb der bestehenden `import`-Anweisung hinzu.
- Wenn wir Sie auffordern, eine neue `export function ...`-Anweisung hinzuzufügen, fügen Sie diese am Ende der Datei hinzu.
- Wenn wir Sie auffordern, die Standard-Export-Aufgabe zu ändern, ändern Sie die `export default`-Anweisung auf die von uns angegebene Weise.

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

Um Gulp mit einigen realen Aufgaben zu versehen, müssen wir überlegen, was wir tun wollen. Eine vernünftige Reihe von grundlegenden Funktionen, die wir in unserem Projekt ausführen, könnte wie folgt aussehen:

- html-tidy, css-lint und js-hint zum Linten und Berichten bzw. Beheben von allgemeinen HTML/CSS/JS-Fehlern (siehe [gulp-htmltidy](https://www.npmjs.com/package/gulp-htmltidy), [gulp-csslint](https://www.npmjs.com/package/gulp-csslint), [gulp-jshint](https://www.npmjs.com/package/gulp-jshint)).
- Autoprefixer zum Scannen unseres CSS und Hinzufügen von Vendor-Präfixen nur dort, wo sie benötigt werden (siehe [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)).
- Babel zum Transpilieren neuer JavaScript-Syntax-Funktionen in traditionelle Syntax, die in älteren Browsern funktioniert (siehe [gulp-babel](https://www.npmjs.com/package/gulp-babel)).

Schauen Sie sich die Links oben an, um vollständige Anleitungen zu den verschiedenen Gulp-Paketen, die wir verwenden, zu erhalten.

Um jedes Plugin zu verwenden, müssen Sie es zuerst über npm installieren, dann oben in der `gulpfile.mjs` Datei alle Abhängigkeiten benötigen, dann Ihre Tests am Ende hinzufügen und schließlich den Namen Ihrer Aufgabe exportieren, damit sie über Gulp's Befehl verfügbar ist.

#### html-tidy

1. Installieren Sie es mit dem folgenden Befehl:

   ```bash
   npm install --save-dev gulp-htmltidy
   ```

   > **Hinweis:** `--save-dev` fügt das Paket als Abhängigkeit zu Ihrem Projekt hinzu. Wenn Sie in die `package.json`-Datei Ihres Projekts schauen, werden Sie darin einen Eintrag im `devDependencies`-Abschnitt sehen.

2. Fügen Sie die folgende Abhängigkeit zu `gulpfile.mjs` hinzu:

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

Hier greifen wir mit `gulp.src()` auf unsere Entwicklungsdatei `index.html` zu, wodurch wir eine Quelldatei abrufen können, um etwas damit zu tun.

Wir verwenden dann die `pipe()`-Funktion, um diese Quelle an einen anderen Befehl weiterzugeben, um etwas anderes damit zu tun. Wir können so viele dieser Dinge in einer Kette aneinanderreihen, wie wir wollen. Wir führen zuerst `htmltidy()` auf die Quelle aus, was die Fehler in unserer Datei durchgeht und behebt. Die zweite `pipe()`-Funktion schreibt die Ausgabe-HTML-Datei in das `build`-Verzeichnis.

In der Eingabedatei der Datei haben Sie vielleicht bemerkt, dass wir ein leeres {{htmlelement("p")}}-Element eingefügt haben; htmltidy hat dieses bis zu dem Zeitpunkt entfernt, als die Ausgabedatei erstellt wurde.

#### Autoprefixer und css-lint

1. Installieren Sie sie mit den folgenden Befehlen:

   ```bash
   npm install --save-dev gulp-autoprefixer
   npm install --save-dev gulp-csslint
   ```

2. Fügen Sie die folgenden Abhängigkeiten zu `gulpfile.mjs` hinzu:

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

Hier greifen wir auf unsere `style.css`-Datei zu, führen csslint darauf aus (das eine Liste aller Fehler in Ihrem CSS im Terminal ausgibt) und führen es dann durch den Autoprefixer, um alle Präfixe hinzuzufügen, die benötigt werden, damit neue CSS-Funktionen in älteren Browsern laufen. Am Ende der Pipe-Kette geben wir unser modifiziertes CSS mit Präfixen in das `build`-Verzeichnis aus. Beachten Sie, dass dies nur funktioniert, wenn csslint keine Fehler findet — versuchen Sie, eine geschweifte Klammer aus Ihrer CSS-Datei zu entfernen und Gulp erneut auszuführen, um zu sehen, welche Ausgabe Sie erhalten!

#### js-hint und babel

1. Installieren Sie sie mit den folgenden Befehlen:

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

Hier greifen wir auf unsere `main.js`-Datei zu, führen `jshint` darauf aus und geben die Ergebnisse mit `jshint.reporter` im Terminal aus; wir übergeben die Datei dann an Babel, das sie in Old-Style-Syntax umwandelt und das Ergebnis in das `build`-Verzeichnis ausgibt. Unser ursprünglicher Code enthielt eine [Fat Arrow Function](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), die von Babel in eine alte Funktionssyntax umgewandelt wurde.

#### Weitere Ideen

Wenn dies alles eingerichtet ist, können Sie den `gulp`-Befehl in Ihrem Projektverzeichnis ausführen und sollten eine Ausgabe wie diese erhalten:

![Ausgabe in einem Code-Editor, bei der Zeilen die Zeit angeben, wann Aufgaben starten oder enden, den Namen der Aufgabe und die Dauer von 'abgeschlossenen' Aufgaben.](gulp-output.png)

Sie können dann die von Ihren automatisierten Aufgaben ausgegebenen Dateien ausprobieren, indem Sie sie im `build`-Verzeichnis ansehen und `build/index.html` in Ihrem Webbrowser laden.

Wenn Sie Fehler erhalten, überprüfen Sie, ob Sie alle Abhängigkeiten und die Tests wie oben gezeigt hinzugefügt haben; versuchen Sie auch, die HTML/CSS/JavaScript-Codeabschnitte zu kommentieren und dann Gulp erneut auszuführen, um zu sehen, ob Sie das Problem isolieren können.

Gulp enthält eine `watch()`-Funktion, die Sie verwenden können, um Ihre Dateien zu beobachten und Tests auszuführen, wann immer Sie eine Datei speichern. Zum Beispiel, versuchen Sie Folgendes am Ende Ihrer `gulpfile.mjs` hinzuzufügen:

```js
export function watch() {
  gulp.watch("src/*.html", html);
  gulp.watch("src/*.css", css);
  gulp.watch("src/*.js", js);
}
```

Geben Sie nun den Befehl `gulp watch` in Ihr Terminal ein. Gulp wird nun Ihr Verzeichnis beobachten und die entsprechenden Aufgaben ausführen, wann immer Sie eine Änderung an einer HTML-, CSS- oder JavaScript-Datei speichern.

> [!NOTE]
> Das `*`-Zeichen ist ein Platzhalterzeichen — hier sagen wir, dass „diese Aufgaben ausgeführt werden sollen, wenn Dateien dieser Typen gespeichert werden. Sie können auch Platzhalter in Ihren Hauptaufgaben verwenden, zum Beispiel `gulp.src('src/*.css')`, um alle Ihre CSS-Dateien zu erfassen und anschließend gepipe-Aufgaben auf ihnen auszuführen.

Es gibt viel mehr, das Sie mit Gulp machen können. Das [Gulp-Plugin-Verzeichnis](https://gulpjs.com/plugins/) enthält buchstäblich Tausende von Plugins, durch die Sie stöbern können.

### Andere Task-Runner

Es gibt viele andere Task-Runner. Wir behaupten sicherlich nicht, dass Gulp die beste Lösung da draußen ist, aber es funktioniert für uns und ist ziemlich zugänglich für Anfänger. Sie könnten auch andere Lösungen ausprobieren:

- Grunt arbeitet in sehr ähnlicher Weise wie Gulp, außer dass es sich auf in einer Konfigurationsdatei spezifizierte Aufgaben stützt, anstatt geschriebenen JavaScript zu verwenden. Siehe [Einstieg mit Grunt für mehr Details.](https://gruntjs.com/getting-started)
- Sie können Aufgaben auch direkt mit npm-Skripten ausführen, die sich in Ihrer `package.json`-Datei befinden, ohne ein zusätzliches Task-Runner-System installieren zu müssen. Dies funktioniert auf der Prämisse, dass Dinge wie Gulp-Plugins im Wesentlichen Wrapper um Kommandozeilen-Tools sind. Wenn Sie also herausfinden können, wie Sie die Tools mit der Kommandozeile ausführen, können Sie sie auch mit npm-Skripten ausführen. Es ist etwas kniffliger zu handhaben, kann aber für diejenigen, die gut mit ihren Kommandozeilen-Fähigkeiten sind, lohnend sein. [Warum npm-Skripte?](https://css-tricks.com/why-npm-scripts/) bietet eine gute Einführung mit vielen weiteren Informationen.

## Nutzung kommerzieller Testdienste zur Beschleunigung von Browser-Tests

Schauen wir uns nun kommerzielle Drittanbieterdienste für Browser-Tests an und was sie für uns tun können.

Wenn Sie diese Art von Diensten verwenden, geben Sie eine URL der Seite an, die Sie testen möchten, zusammen mit Informationen wie den von Ihnen gewünschten Testbrowsern. Die App konfiguriert dann eine neue VM mit dem von Ihnen angegebenen Betriebssystem und Browser und gibt die Testergebnisse in Form von Screenshots, Videos, Protokolldateien, Texten usw. zurück. Dies ist sehr nützlich und viel bequemer, als alle Betriebssystem-/Browserkombinationen selbst einzurichten.

Sie können dann einen Gang höher schalten, indem Sie eine API verwenden, um die Funktionalität programmgesteuert zuzugreifen, was bedeutet, dass solche Apps mit Task-Runnern, wie Ihre eigene lokale Selenium-Umgebung und andere, kombiniert werden können, um automatisierte Tests zu erstellen.

> [!NOTE]
> Es gibt andere kommerzielle Browser-Testsysteme, aber in diesem Artikel werden wir uns auf BrowserStack, Sauce Labs und TestingBot konzentrieren. Wir sagen nicht, dass dies unbedingt die besten verfügbaren Tools sind, aber sie sind gute, mit denen Anfänger einfach starten und arbeiten können.

### BrowserStack

#### Einstieg mit BrowserStack

Um zu beginnen:

1. Erstellen Sie ein [BrowserStack-Testkonto](https://www.browserstack.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse überprüft haben.
3. Klicken Sie auf den _Live_-Link im oberen Navigationsmenü, um zum Live-Manuellen Testen zu gelangen.

#### Die Grundlagen: Manuelle Tests

Das BrowserStack Live-Dashboard ermöglicht es Ihnen, das Gerät und den Browser auszuwählen, den Sie testen wollen — Plattformen auf der linken Seite, Geräte auf der rechten Seite. Wählen Sie ein Gerät, um die verfügbaren Browser auf diesem Gerät zu sehen.

![Testauswahl](browserstack-test-choices-sized.png)

Wenn Sie auf eines dieser Browser-Symbole klicken, wird Ihre Wahl von Plattform, Gerät und Browser geladen — wählen Sie eines aus und probieren Sie es aus.

![Testgeräte](browserstack-test-device-sized.png)

Sie können URLs in die Adressleiste eingeben, nach oben und unten scrollen, indem Sie mit der Maus ziehen, und geeignete Gesten (zum Beispiel Pinch/Zoom, zwei Finger zum Scrollen) auf Touchpads von Geräten wie MacBooks verwenden. Nicht alle Funktionen sind auf allen Geräten verfügbar.

Sie sehen auch ein Menü, das es Ihnen ermöglicht, die Sitzung zu kontrollieren.

![Testmenü](browserstack-test-menu-sized.png)

Die verfügbaren Funktionen variieren je nach geladenem Browser und können Steuerungen für enthalten:

- Informationen zum aktuellen Browser anzeigen
- Zu anderen Browsern wechseln
- Testen von localhost-URLs
- Zoomstufe einstellen und Orientierung umschalten
- Lesezeichen speichern und laden
- Screenshots aufnehmen/kommentieren und Fehlerberichte einreichen
- auf Browser-DevTools zugreifen
- Gemeldeten Standort ändern
- Das Netzwerk drosseln
- Sprachsynthesizer nutzen

#### Fortgeschritten: Die BrowserStack-API

BrowserStack hat auch eine [RESTful API](https://www.browserstack.com/docs/automate/api-reference/selenium/introduction), die es Ihnen ermöglicht, Informationen zu Ihrem Konto-Plan, Sitzungen, Builds usw. programmgesteuert abzurufen.

Werfen wir einen kurzen Blick darauf, wie man die API mit Node.js abfragt.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichten von Node und npm](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `bstack-test`.
2. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_bstack.js` und fügen Sie den folgenden Inhalt hinzu:

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

3. Ersetzen Sie die Platzhalter für den BrowserStack-Benutzernamen und den Zugriffsschlüssel durch Ihre tatsächlichen Werte. Diese können aus Ihren [BrowserStack-Konto- und Profilinformationen](https://www.browserstack.com/accounts/profile/details) unter dem Abschnitt _Authentifizierung & Sicherheit_ abgerufen werden.
4. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, das wir im Code verwenden, um HTTP-Anfragen zu senden, indem Sie den folgenden Befehl in Ihrem Terminal ausführen (wir haben axios gewählt, weil es einfach, beliebt und gut unterstützt ist):

   ```bash
   npm install axios
   ```

5. Stellen Sie sicher, dass Ihre JavaScript-Datei gespeichert ist, und führen Sie sie mit dem folgenden Befehl über Ihr Terminal aus. Sie sollten ein Objekt im Terminal ausgedruckt sehen, das Ihre BrowserStack-Plandetails enthält.

   ```bash
   node call_bstack
   ```

Im Folgenden haben wir auch einige andere vorgefertigte Funktionen bereitgestellt, die Sie beim Arbeiten mit der BrowserStack-RESTful-API nützlich finden könnten.

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

Wir werden die [ausführliche Durchführung automatisierter BrowserStack-Tests](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment#browserstack) im nächsten Artikel behandeln.

### Sauce Labs

#### Einstieg mit Sauce Labs

Lassen Sie uns mit einer Sauce Labs-Probe beginnen.

1. Erstellen Sie ein Sauce Labs-Testkonto.
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse überprüft haben.

#### Die Grundlagen: Manuelle Tests

Das [Sauce Labs-Dashboard](https://app.saucelabs.com/dashboard/manual) bietet viele verfügbare Optionen. Stellen Sie sicher, dass Sie sich auf der Registerkarte _Manuelle Tests_ befinden.

1. Klicken Sie auf _Starten Sie eine neue manuelle Sitzung_.
2. Geben Sie auf dem nächsten Bildschirm die URL der Seite ein, die Sie testen möchten (verwenden Sie zum Beispiel <https://mdn.github.io/learning-area/javascript/building-blocks/events/show-video-box-fixed.html>), und wählen Sie dann eine Kombination aus Browser/OS aus, die Sie testen möchten, indem Sie die verschiedenen Schaltflächen und Listen verwenden. Es gibt, wie Sie sehen werden, viele Auswahlmöglichkeiten!![Wählen Sie Sauce manuelle Sitzung](sauce-manual-session.png)
3. Wenn Sie auf Sitzung starten klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im ausgewählten Browser fernsteuern testen.![Sauce-Test läuft](sauce-test-running.png)
5. Von hier aus können Sie das Layout so sehen, wie es im getesteten Browser aussieht, die Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das obere Menü ermöglicht es Ihnen:

   - Beenden der Sitzung
   - Jemand anderem eine URL geben, damit er den Test remote beobachten kann.
   - Text/Notizen in eine Remote-Zwischenablage kopieren.
   - Einen Screenshot machen.
   - Im Vollbildmodus testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Registerkarte Manuelle Tests zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, erhalten Sie weitere Daten zur Sitzung. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video der Sitzung ansehen, Protokolldaten anzeigen und mehr.

> [!NOTE]
> Dies ist bereits sehr nützlich und viel bequemer, als all diese Emulatoren und virtuellen Maschinen selbst einrichten zu müssen.

#### Fortgeschritten: Die Sauce Labs-API

Sauce Labs hat eine [RESTful API](https://docs.saucelabs.com/dev/api/), die es Ihnen ermöglicht, Details Ihres Kontos und bestehende Tests programmgesteuert abzurufen und Tests mit weiteren Details zu versehen, wie z.B. ihrem Bestehen/Nichtbestehen-Zustand, der allein durch manuelles Testen nicht aufzeichnungsbar ist. Zum Beispiel könnten Sie möchten, dass einer Ihrer eigenen Selenium-Tests remote mit Sauce Labs durchgeführt wird, um eine bestimmte Kombination aus Browser/OS zu testen, und die Testergebnisse dann an Sauce Labs zurück gesendet werden.

Es hat mehrere Clients verfügbar, die es Ihnen ermöglichen, die API mit Ihrer bevorzugten Umgebung, sei es PHP, Java, Node.js, usw., aufrufen zu lassen.

Lassen Sie uns einen kurzen Blick darauf werfen, wie wir die API mit Node.js und [node-saucelabs](https://github.com/saucelabs/node-saucelabs) aufrufen würden.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichten von Node und npm](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `sauce-test`.
2. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl:

   ```bash
   npm install saucelabs
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `call_sauce.js`. Geben Sie den folgenden Inhalt ein:

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

4. Sie müssen Ihren Sauce Labs-Benutzernamen und Ihren API-Schlüssel an den dafür vorgesehenen Stellen einfügen. Diese können von Ihrer [Benutzereinstellungen](https://app.saucelabs.com/user-settings) Seite abgerufen werden. Füllen Sie dies jetzt aus.
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie Ihre Datei folgendermaßen aus:

   ```bash
   node call_sauce
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden die tatsächlich durchgeführten automatisierten Sauce Lab-Tests im nächsten Artikel behandeln.

### TestingBot

#### Einstieg mit TestingBot

Lassen Sie uns mit einer TestingBot Probe beginnen.

1. Erstellen Sie ein [TestingBot-Testkonto](https://testingbot.com/users/sign_up).
2. Melden Sie sich an. Dies sollte automatisch geschehen, nachdem Sie Ihre E-Mail-Adresse überprüft haben.

#### Die Grundlagen: Manuelle Tests

Das [TestingBot-Dashboard](https://testingbot.com/members) listet die verschiedenen verfügbaren Optionen auf. Stellen Sie sicher, dass Sie sich auf der Registerkarte _Live-Web-Tests_ befinden.

1. Geben Sie die URL der Seite ein, die Sie testen möchten.
2. Wählen Sie die Kombination aus Browser/OS, die Sie testen möchten, indem Sie die Kombination im Raster auswählen.
   ![Testauswahl](screen_shot_2019-04-19_at_14.55.33.png)
3. Wenn Sie auf _Browser Starten_ klicken, erscheint ein Ladebildschirm, der eine virtuelle Maschine mit der von Ihnen gewählten Kombination hochfährt.
4. Wenn das Laden abgeschlossen ist, können Sie die Website im ausgewählten Browser fernsteuern testen.
5. Von hier aus können Sie das Layout so sehen, wie es im getesteten Browser aussieht, die Maus bewegen und versuchen, auf Schaltflächen zu klicken usw. Das Seitenmenü ermöglicht es Ihnen:

   - Beenden der Sitzung
   - Die Bildschirmauflösung ändern
   - Text/Notizen in eine Remote-Zwischenablage kopieren
   - Screenshots aufnehmen, bearbeiten und herunterladen
   - Im Vollbildmodus testen.

Sobald Sie die Sitzung beenden, kehren Sie zur Seite _Live-Web-Tests_ zurück, wo Sie einen Eintrag für jede der vorher gestarteten manuellen Sitzungen sehen. Wenn Sie auf einen dieser Einträge klicken, erhalten Sie weitere Daten zur Sitzung. Hier können Sie alle aufgenommenen Screenshots herunterladen, ein Video des Tests ansehen und Protokolle zur Sitzung anzeigen.

#### Fortgeschritten: Die TestingBot-API

TestingBot hat eine [RESTful API](https://testingbot.com/support/api), die es Ihnen ermöglicht, Informationen zu Ihrem Konto und bestehenden Tests programmgesteuert abzurufen und Tests mit weiteren Details zu versehen, wie z.B. ihrem Bestehen/Nichtbestehen-Zustand, der allein durch manuelles Testen nicht aufzeichnungsbar ist.

TestingBot hat mehrere API-Clients, die Sie verwenden können, um mit der API zu interagieren, inklusive Clients für NodeJS, Python, Ruby, Java und PHP.

Unten ist ein Beispiel dafür, wie man mit dem NodeJS-Client [testingbot-api](https://www.npmjs.com/package/testingbot-api) mit der TestingBot-API interagiert.

1. Richten Sie zuerst ein neues npm-Projekt ein, um dies zu testen, wie unter [Einrichten von Node und npm](#node_und_npm_einrichten) beschrieben. Verwenden Sie einen anderen Verzeichnisnamen als zuvor, wie z.B. `tb-test`.
2. Installieren Sie den Node TestingBot Wrapper mit dem folgenden Befehl:

   ```bash
   npm install testingbot-api
   ```

3. Erstellen Sie eine neue Datei in Ihrem Projektstamm mit dem Namen `tb.js`. Geben Sie den folgenden Inhalt ein:

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

4. Sie müssen Ihren TestingBot-Schlüssel und Ihr Geheimnis an den vorgesehenen Stellen einfügen. Sie finden diese im [TestingBot-Dashboard](https://testingbot.com/members/user/edit).
5. Stellen Sie sicher, dass alles gespeichert ist, und führen Sie die Datei aus:

   ```bash
   node tb.js
   ```

#### Fortgeschritten: Automatisierte Tests

Wir werden die Durchführung automatisierter TestingBot-Tests im nächsten Artikel behandeln.

## Zusammenfassung

Das war eine ganz schöne Fahrt, aber ich bin mir sicher, dass Sie anfangen zu sehen, welchen Nutzen es hat, Automatisierungstools zu verwenden, um einen Teil der Last in Bezug auf das Testen zu tragen.

Im nächsten Artikel werden wir uns ansehen, wie Sie ein eigenes lokales Automatisierungssystem mit Selenium einrichten und wie man dies mit Diensten wie Sauce Labs, BrowserStack und TestingBot kombiniert.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing/Your_own_automation_environment", "Learn_web_development/Extensions/Testing")}}
