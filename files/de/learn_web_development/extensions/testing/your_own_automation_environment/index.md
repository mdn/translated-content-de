---
title: Eine eigene Umgebung für automatisierte Tests einrichten
short-title: Eine Automatisierungsumgebung einrichten
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 306f0d17c10c4bfa8179b81fe676102ea0b0b6fa
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel erfahren Sie, wie Sie eine eigene Automatisierungsumgebung installieren und mit Selenium/WebDriver sowie einer Testbibliothek wie selenium-webdriver für Node eigene Tests ausführen. Außerdem sehen wir uns an, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den im vorherigen Artikel vorgestellten verbinden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein grundlegendes Verständnis der
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien browserübergreifender Tests</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierter Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zeigen, wie Sie lokal eine Selenium-Testumgebung einrichten und damit Tests ausführen und wie Sie sie mit Tools wie Sauce Labs und BrowserStack verbinden.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt auch andere Möglichkeiten, aber Selenium verwenden Sie am besten über WebDriver: eine leistungsfähige API, die auf Selenium aufbaut und Browser anspricht, um sie zu automatisieren. Sie kann beispielsweise Aktionen wie „Diese Webseite öffnen“, „Den Mauszeiger über dieses Element auf der Seite bewegen“, „Diesen Link anklicken“ oder „Prüfen, ob der Link diese URL öffnet“ ausführen. Das eignet sich ideal für automatisierte Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmierumgebung ab, in der Sie Ihre Tests schreiben und ausführen möchten. Für die meisten gängigen Umgebungen gibt es ein Paket oder Framework, das WebDriver und die erforderlichen Bindings für die jeweilige Sprache installiert, etwa für Java, C#, Ruby, Python oder JavaScript (Node). Weitere Informationen zur Einrichtung von Selenium für verschiedene Sprachen finden Sie unter [Ein Selenium-WebDriver-Projekt einrichten](https://www.selenium.dev/documentation/webdriver/getting_started/).

Unterschiedliche Browser benötigen unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) erfahren Sie unter anderem, wo Sie Browsertreiber erhalten.

Wir behandeln das Schreiben und Ausführen von Selenium-Tests mit Node.js, weil der Einstieg schnell und einfach ist und Frontend-Entwickler mit dieser Umgebung eher vertraut sind.

> [!NOTE]
> Wenn Sie wissen möchten, wie WebDriver mit anderen serverseitigen Umgebungen verwendet wird, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) hilfreiche Links.

### Selenium in Node einrichten

1. Richten Sie zunächst ein neues npm-Projekt ein, wie im vorherigen Kapitel unter [Node und npm einrichten](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) beschrieben. Geben Sie ihm einen anderen Namen, beispielsweise `selenium-test`.
2. Installieren Sie als Nächstes ein Framework, mit dem Sie Selenium in Node verwenden können. Wir wählen das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium, da die Dokumentation recht aktuell erscheint und das Paket gut gepflegt wird. [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) sind ebenfalls gute Optionen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl im Projektordner aus:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Auch wenn Sie selenium-webdriver bereits installiert und die Browsertreiber heruntergeladen haben, sollten Sie diese Schritte durchgehen. So stellen Sie sicher, dass alles auf dem neuesten Stand ist.

Laden Sie anschließend die Treiber herunter, die WebDriver zur Steuerung der Browser benötigt, in denen Sie testen möchten. Auf der Seite zu [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) erfahren Sie, wo Sie sie erhalten (siehe Tabelle im ersten Abschnitt). Einige Browser sind nur für bestimmte Betriebssysteme verfügbar. Wir beschränken uns auf Firefox und Chrome, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten Versionen von [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) herunter.
2. Entpacken Sie sie an einen leicht erreichbaren Ort, beispielsweise direkt in Ihr Benutzerverzeichnis.
3. Fügen Sie den Speicherort der Treiber `chromedriver` und `geckodriver` zur Systemvariablen `PATH` hinzu. Verwenden Sie den absoluten Pfad vom Stammverzeichnis Ihrer Festplatte bis zum Verzeichnis, das die Treiber enthält. Wenn Sie beispielsweise macOS verwenden, Ihr Benutzername „bob“ lautet und die Treiber direkt in Ihrem Benutzerverzeichnis liegen, lautet der Pfad `/Users/bob`.

> [!NOTE]
> Zur Erinnerung: Der Pfad, den Sie zu `PATH` hinzufügen, muss auf das Verzeichnis mit den Treibern verweisen, nicht auf die einzelnen Treiberdateien! Das ist ein häufiger Fehler.

So legen Sie die Variable `PATH` unter macOS und den meisten Linux-Systemen fest:

1. Öffnen Sie die Datei `.zprofile` (oder `.bash_profile`, falls Ihr System die `bash`-Shell verwendet).
   > [!NOTE]
   > Falls Sie versteckte Dateien nicht sehen können, müssen Sie sie einblenden. Lesen Sie dazu [Versteckte Dateien unter macOS ein- und ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner unter Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu).
2. Fügen Sie Folgendes am Ende der Datei ein und passen Sie den Pfad an den tatsächlichen Speicherort auf Ihrem Computer an:

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie die Datei. Starten Sie anschließend Ihr Terminal beziehungsweise Ihre Eingabeaufforderung neu, damit Ihre Bash-Konfiguration erneut geladen wird.
4. Prüfen Sie mit dem folgenden Befehl im Terminal, ob Ihre neuen Pfade in der Variablen `PATH` enthalten sind:

   ```bash
   echo $PATH
   ```

   Der Pfad sollte im Terminal ausgegeben werden.

> [!NOTE]
> Wie Sie die Variable `PATH` unter Windows festlegen, erfahren Sie unter [Wie kann ich meinem Systempfad einen neuen Ordner hinzufügen?](https://stackoverflow.com/questions/44272416/add-a-folder-to-the-path-environment-variable-in-windows-10-with-screenshots)

Probieren wir mit einem kurzen Test aus, ob alles funktioniert.

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `duck_test.js`.
2. Fügen Sie den folgenden Inhalt ein und speichern Sie die Datei:

   ```js
   const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

   (async function example() {
     const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
     try {
       await driver.get("https://duckduckgo.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.wait(until.titleIs("webdriver at DuckDuckGo"), 1000);
       console.log("Test passed!");
     } catch (e) {
       console.log(`Error: ${e}`);
     } finally {
       await driver.sleep(2000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

   > [!NOTE]
   > Diese Funktion ist eine {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression).

3. Vergewissern Sie sich, dass Sie sich im Terminal in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Firefox sollte sich nun automatisch öffnen! DuckDuckGo wird in einem Tab geladen, „webdriver“ wird in das Suchfeld eingegeben und die Suchschaltfläche wird angeklickt. WebDriver wartet anschließend eine Sekunde und ruft dann den Dokumenttitel ab. Wenn dieser „webdriver at DuckDuckGo“ lautet, wird eine Meldung ausgegeben, dass der Test bestanden wurde.

Nach weiteren zwei Sekunden schließt WebDriver die Firefox-Instanz und beendet den Vorgang.

## Tests in mehreren Browsern gleichzeitig ausführen

Sie können den Test auch gleichzeitig in mehreren Browsern ausführen. Probieren wir es aus!

1. Erstellen Sie in Ihrem Projektverzeichnis eine weitere Datei namens `duck_test_multiple.js`. Je nachdem, welche Browser Ihnen auf Ihrem Betriebssystem zum Testen zur Verfügung stehen, können Sie die Verweise auf die Browser ändern oder entfernen. Achten Sie darauf, dass die passenden Browsertreiber auf Ihrem System eingerichtet sind. Welche Zeichenfolge Sie für andere Browser in der Methode `.forBrowser()` verwenden müssen, erfahren Sie in der Referenz zum [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Fügen Sie den folgenden Inhalt in die Datei ein und speichern Sie sie:

   ```js
   const { Builder, Browser, By, Key } = require("selenium-webdriver");

   const driverFx = new Builder().forBrowser(Browser.FIREFOX).build();
   const driverChr = new Builder().forBrowser(Browser.CHROME).build();

   async function searchTest(driver) {
     try {
       await driver.get("https://duckduckgo.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver at DuckDuckGo") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     } finally {
       driver.quit();
     }
   }

   searchTest(driverFx);
   searchTest(driverChr);
   ```

3. Vergewissern Sie sich, dass Sie sich im Terminal in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie „Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver.“ Befolgen Sie in diesem Fall die Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erscheint auch eine Meldung, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht aus einer verifizierten Quelle heruntergeladen wurde. In diesem Fall können Sie die Sicherheitseinstellung für diese Treiber-App außer Kraft setzen. Klicken Sie beispielsweise auf einem Mac mit gedrückter <kbd>Ctrl</kbd>-Taste auf die App, wählen Sie _Öffnen_ und anschließend im Dialogfeld erneut _Öffnen_.

Wir haben denselben Test wie zuvor durchgeführt, ihn diesmal aber in eine Funktion namens `searchTest()` eingeschlossen. Wir haben neue Instanzen mehrerer Browser erstellt und jede davon an die Funktion übergeben, sodass der Test in allen Browsern ausgeführt wird.

Sehen wir uns nun die Grundlagen der WebDriver-Syntax genauer an.

## WebDriver-Syntax im Schnelldurchlauf

Betrachten wir einige wichtige Funktionen der WebDriver-Syntax. Eine ausführliche Beschreibung finden Sie in der [JavaScript-API-Referenz zu selenium-webdriver](https://www.selenium.dev/selenium/docs/api/javascript/). Die [Selenium-WebDriver-Dokumentation](https://www.selenium.dev/documentation/webdriver/) enthält außerdem zahlreiche Beispiele in verschiedenen Sprachen.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das Modul `selenium-webdriver` einbinden und den Konstruktor `Builder` sowie die Schnittstelle `Browser` importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Mit dem Konstruktor `Builder()` erstellen Sie eine neue Treiberinstanz. Über die verkettete Methode `forBrowser()` geben Sie an, welchen Browser Sie mit diesem Builder testen möchten.
Die am Ende verkettete Methode `build()` erstellt die Treiberinstanz (ausführliche Informationen zu diesen Funktionen finden Sie in der [Referenz zur Klasse Builder](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html)).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Sie können auch bestimmte Konfigurationsoptionen für die zu testenden Browser festlegen, beispielsweise eine bestimmte Version und ein bestimmtes Betriebssystem in der Methode `forBrowser()`:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Diese Optionen lassen sich auch über eine Umgebungsvariable festlegen, beispielsweise so:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Erstellen wir einen neuen Test, um diesen Code Schritt für Schritt zu untersuchen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

Mit dem folgenden Befehl im Terminal können Sie das Beispiel testen:

```bash
node quick_test
```

### Das zu testende Dokument laden

Um die Seite zu laden, die Sie testen möchten, verwenden Sie die Methode `get()` der zuvor erstellten Treiberinstanz. Zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Einzelheiten zu den Funktionen in diesem und den folgenden Abschnitten finden Sie in der [Referenz zur Klasse WebDriver](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede beliebige URL verwenden, um auf Ihre Ressource zu verweisen, auch eine `file://`-URL zum Testen eines lokalen Dokuments:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Besser ist jedoch ein Speicherort auf einem Remote-Server, weil der Code dadurch flexibler wird. Wenn Sie später Ihre Tests auf einem Remote-Server ausführen (siehe unten), funktionieren lokale Pfade nicht mehr.

Aktualisieren Sie Ihre Funktion `example()` wie folgt: Ersetzen Sie den Platzhalterpfad durch einen tatsächlichen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und führen Sie den Test erneut aus:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Nun haben wir ein Dokument zum Testen und müssen auf irgendeine Weise damit interagieren. Dazu wählen wir normalerweise zunächst ein bestimmtes Element aus. In WebDriver können Sie [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/), unter anderem anhand ihrer ID, Klasse oder ihres Elementnamens. Die Auswahl übernimmt die Methode `findElement()`, die eine Auswahlmethode als Parameter erhält. So wählen Sie beispielsweise ein Element anhand seiner ID aus:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine besonders nützliche Möglichkeit ist die Auswahl anhand von CSS: Mit der Methode `By.css()` können Sie ein Element über einen CSS-Selektor auswählen.

Aktualisieren Sie Ihre Funktion `example()` wie folgt und führen Sie das Beispiel aus:

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
  const button = driver.findElement(By.css("button:nth-of-type(1)"));
})();
```

### Das Element testen

Es gibt viele Möglichkeiten, mit Webdokumenten und ihren Elementen zu interagieren. Nützliche Beispiele finden Sie in der WebDriver-Dokumentation ab dem Abschnitt [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content).

Wenn wir den Text in unserer Schaltfläche abrufen möchten, können wir das so tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun wie unten gezeigt am Ende der Funktion `example()` hinzu:

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.getText().then((text) => {
    console.log(`Button text is '${text}'`);
  });
})();
```

Führen Sie das Beispiel wie zuvor mit `node` aus. Die Textbeschriftung der Schaltfläche sollte in der Konsole ausgegeben werden.

Machen wir etwas Nützlicheres: Ersetzen Sie den zuvor hinzugefügten Code wie unten gezeigt durch `button.click();`:

```js
const { Builder, Browser, By } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();
})();
```

Führen Sie den Test erneut aus. Die Schaltfläche wird angeklickt und ein `alert()`-Popup sollte erscheinen. Damit wissen wir zumindest, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die Funktion `example()` wie folgt und testen Sie sie erneut:

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();

  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const button = driver.findElement(By.css("button:nth-of-type(1)"));

  button.click();

  await driver.wait(until.alertIsPresent());

  const alert = driver.switchTo().alert();

  alert.getText().then((text) => {
    console.log(`Alert text is '${text}'`);
  });

  alert.accept();
})();
```

Versuchen wir als Nächstes, Text in die Formularelemente einzugeben. Aktualisieren Sie die Funktion `example()` wie folgt und führen Sie den Test erneut aus:

```js
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  input.sendKeys(Key.TAB);

  const input2 = driver.findElement(By.id("age"));
  input2.sendKeys("65");
})();
```

Tastendrücke, die sich nicht durch normale Zeichen darstellen lassen, können Sie mithilfe der Eigenschaften des Objekts `Key` übermitteln. Im obigen Beispiel haben wir damit zwischen Formulareingaben gewechselt:

```js
input.sendKeys(Key.TAB);
```

### Auf den Abschluss eines Vorgangs warten

Manchmal soll WebDriver warten, bis ein Vorgang abgeschlossen ist, bevor der Test fortgesetzt wird. Wenn Sie beispielsweise eine neue Seite laden, sollten Sie warten, bis das DOM der Seite vollständig geladen ist, bevor Sie mit ihren Elementen interagieren. Andernfalls schlägt der Test wahrscheinlich fehl.

In unserem Test `duck_test_multiple.js` haben wir beispielsweise diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` nimmt einen Wert entgegen, der die Wartezeit in Millisekunden angibt. Sie gibt ein {{jsxref("Promise")}} zurück, das nach Ablauf dieser Zeit aufgelöst wird. Mit dem Schlüsselwort `await` halten wir die umgebende Funktion an, bis das Promise aufgelöst ist. Danach wird der Code ausgeführt, der auf die Methode folgt.

Wir können auch unserem Test `quick_test.js` eine Methode `sleep()` hinzufügen. Aktualisieren Sie dazu Ihre Funktion `example()` wie folgt:

```js
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  driver.sleep(1000).then(() => {
    input.getAttribute("value").then((value) => {
      if (value !== "") {
        console.log("Form input filled out");
      } else {
        console.log("Text could not be entered");
      }
    });
  });
})();
```

Führen Sie den aktualisierten Code aus. WebDriver füllt nun das erste Formularfeld aus, wartet eine Sekunde und prüft dann, ob das Feld einen Wert enthält (also nicht leer ist). Dazu ruft `getAttribute()` den Wert des Attributs `value` ab. Anschließend gibt WebDriver in der Konsole aus, ob der Test erfolgreich war.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung über einen bestimmten Zeitraum wiederholt prüft und danach die Ausführung des Codes fortsetzt. Sie verwendet außerdem die [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die häufig benötigte Bedingungen für die Verwendung mit `wait()` definiert.

### Treiber nach der Verwendung beenden

Nach Abschluss eines Tests sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` beenden, damit sie nicht unnötig Ressourcen verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

```js
const { Builder, Browser, By, Key } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Bob Smith");

  driver.sleep(1000).then(() => {
    input
      .getAttribute("value")
      .then((value) => {
        if (value !== "") {
          console.log("Form input filled out");
        } else {
          console.log("Text could not be entered");
        }
      })
      .finally(() => {
        driver.quit();
      });
  });
})();
```

Wenn Sie den Test nun ausführen, sollte die Browserinstanz nach Abschluss des Tests wieder geschlossen werden.

## Bewährte Verfahren für Tests

Über bewährte Verfahren beim Schreiben von Tests ist viel geschrieben worden. Gute Hintergrundinformationen finden Sie unter [Testverfahren](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Ihre Tests die folgenden Anforderungen erfüllen:

1. **Geeignete Strategien zur Elementlokalisierung verwenden:** Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), sollten Sie Locators und Page Objects verwenden, die sich wahrscheinlich nicht ändern. Sorgen Sie dafür, dass ein zu testendes Element eine stabile ID oder eine feste Position auf der Seite hat, die sich mit einem CSS-Selektor auswählen lässt und sich nicht schon bei der nächsten Überarbeitung der Website ändert. Ihre Tests sollten möglichst robust sein und nicht bei jeder Änderung fehlschlagen.
2. **Atomare Tests schreiben:** Jeder Test sollte nur eine Sache prüfen. So lässt sich leicht nachvollziehen, welche Testdatei welches Kriterium prüft. Der oben betrachtete Test `duck_test.js` ist in dieser Hinsicht recht gut, weil er nur prüft, ob der Titel einer Suchergebnisseite richtig festgelegt ist. Wir könnten ihm allerdings einen aussagekräftigeren Namen geben, damit seine Aufgabe auch dann leicht zu erkennen ist, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. **Unabhängige Tests schreiben:** Jeder Test sollte für sich funktionieren und nicht von anderen Tests abhängen.

Außerdem sollten wir die Testergebnisse und ihre Ausgabe erwähnen: In den bisherigen Beispielen haben wir Ergebnisse mit einfachen `console.log()`-Anweisungen ausgegeben. Da alles in JavaScript geschieht, können Sie aber jedes gewünschte System zur Testausführung und Ergebnisdarstellung verwenden, beispielsweise [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Gehen wir ein kurzes Beispiel durch:

1. Erstellen Sie in Ihrem Projektverzeichnis einen Unterordner namens `test` und darin eine Datei namens `mocha_test.js`. Fügen Sie folgenden Inhalt ein:

   ```js
   "use strict";

   const assert = require("assert");

   const { Builder, Capabilities, By } = require("selenium-webdriver");

   describe("Alert", () => {
     it("should have the correct text content - this is from the first button", (done) => {
       let driver = new Builder()
         .withCapabilities(Capabilities.firefox())
         .build();

       driver
         .get(
           "http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
         )
         .then(() => driver.findElement(By.css("button:nth-of-type(1)")))
         .then((button) => button.click())
         .then(() => driver.switchTo().alert())
         .then((alert) => alert.getText())
         .then((text) => assert.equal(text, "This is from the first button"))
         .then(() => driver.quit())
         .then(done)
         .catch((err) => done(err));
     });
   });
   ```

   Dieses Beispiel verwendet eine lange Kette von Promises, um alle für den Test erforderlichen Schritte auszuführen. Die Promise-basierten Methoden von WebDriver müssen aufgelöst werden, damit der Test ordnungsgemäß funktioniert.

2. Installieren Sie das Mocha-Test-Framework mit dem folgenden Befehl in Ihrem Projektverzeichnis:

   ```bash
   npm install --save-dev mocha
   ```

3. Nun können Sie diesen Test (und alle weiteren Tests in Ihrem Verzeichnis `test`) mit folgendem Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Verwenden Sie das Flag `--no-timeouts`, damit Ihre Tests nicht wegen des willkürlich festgelegten Timeouts von Mocha (drei Sekunden) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele für die Einrichtung verschiedener Kombinationen von Test- und Assertion-Tools.

## Tests auf Remote-Servern ausführen

Tests auf Remote-Servern auszuführen, ist nicht viel schwieriger als die lokale Ausführung. Sie müssen lediglich Ihre Treiberinstanz mit einigen zusätzlichen Angaben erstellen: den Capabilities des Browsers, in dem Sie testen möchten, der Serveradresse und gegebenenfalls den Zugangsdaten.

### BrowserStack

Erstellen wir ein Beispiel, das zeigt, wie ein Selenium-Test auf [BrowserStack](https://www.browserstack.com/automate) ausgeführt wird:

1. Erstellen Sie in Ihrem Projektverzeichnis eine Datei namens `bstack_duck_test.js`.
2. Fügen Sie folgenden Inhalt ein:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");

   // Input capabilities
   const capabilities = {
     "bstack:options": {
       os: "OS X",
       osVersion: "Sonoma",
       browserVersion: "17.0",
       local: "false",
       seleniumVersion: "3.14.0",
       userName: "YOUR-USER-NAME",
       accessKey: "YOUR-ACCESS-KEY",
     },
     browserName: "Safari",
   };

   const driver = new Builder()
     .usingServer("http://hub-cloud.browserstack.com/wd/hub")
     .withCapabilities(capabilities)
     .build();

   (async function bStackGoogleTest() {
     try {
       await driver.get("https://duckduckgo.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver at DuckDuckGo") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     } finally {
       await driver.sleep(4000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

3. Rufen Sie auf Ihrer BrowserStack-Seite [Account & Profile details](https://www.browserstack.com/accounts/profile/details) Ihren Benutzernamen und Zugriffsschlüssel ab (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel. Bewahren Sie diese Daten sicher auf.
5. Führen Sie den Test mit folgendem Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und sein Ergebnis in Ihrer Konsole ausgegeben. Daran sehen Sie, wie wichtig ein Mechanismus zur Ausgabe von Testergebnissen ist!

6. Wenn Sie nun zum [BrowserStack-Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test in der Liste. Zu den verfügbaren Details gehören eine Videoaufzeichnung des Tests und mehrere ausführliche Logs:
   ![Ergebnisse automatisierter Tests in BrowserStack](bstack_automated_results.png)

> [!NOTE]
> Der Menüpunkt _Resources_ im BrowserStack-Automate-Dashboard enthält viele hilfreiche Informationen zur Ausführung automatisierter Tests. Node-spezifische Informationen finden Sie unter [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs).

#### BrowserStack-Testdetails programmgesteuert ergänzen

Mit der BrowserStack-REST-API und weiteren Funktionen können Sie Ihrem Test zusätzliche Angaben hinzufügen, etwa ob und warum er bestanden wurde und zu welchem Projekt er gehört. BrowserStack kennt diese Details standardmäßig nicht.

Aktualisieren wir unser Beispiel `bstack_duck_test.js`, um zu zeigen, wie das funktioniert:

1. Installieren Sie das Modul [axios](https://www.npmjs.com/package/axios), indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das Modul axios, damit wir Anfragen an die BrowserStack-REST-API senden können. Fügen Sie ganz oben in Ihrem Code folgende Zeile hinzu:

   ```js
   const axios = require("axios");
   ```

3. Ergänzen Sie nun unser Objekt `capabilities` um einen Projektnamen. Fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer ein und setzen Sie am Ende der vorherigen Zeile ein Komma. Sie können die Build- und Projektnamen anpassen, um die Tests im BrowserStack-Automate-Dashboard in verschiedenen Ansichten zu organisieren:

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als Nächstes rufen wir die `sessionId` der aktuellen Sitzung ab. Zusammen mit Ihrem `userName` und `accessKey` erstellen wir daraus die URL, an die Anfragen zum Aktualisieren der BrowserStack-Daten gesendet werden. Fügen Sie die folgenden Zeilen direkt unter dem Block ein, der das Objekt `driver` erstellt (er beginnt mit `const driver = new Builder()`):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Aktualisieren Sie schließlich den `if...else`-Block weiter unten im Code, sodass je nach Erfolg oder Fehlschlag des Tests die passenden API-Aufrufe an BrowserStack gesendet werden:

   ```js
   if (title === "webdriver at DuckDuckGo") {
     console.log("Test passed");
     axios.put(bstackURL, {
       status: "passed",
       reason: "DuckDuckGo results showed correct title",
     });
   } else {
     console.log("Test failed");
     axios.put(bstackURL, {
       status: "failed",
       reason: "DuckDuckGo results showed wrong title",
     });
   }
   ```

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Teststatus und den Grund für das Ergebnis zu aktualisieren.

Wenn Sie jetzt zu Ihrem [BrowserStack-Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihre Testsitzung wie zuvor, nun aber mit Ihren zusätzlichen Daten. Der Status lautet „PASSED“, und der über die REST-API übermittelte Grund für den Erfolg wird angezeigt:

![Benutzerdefinierte Ergebnisse in BrowserStack](bstack_custom_results.png)

### Sauce Labs

Sehen wir uns ein Beispiel an, das zeigt, wie Selenium-Tests auf Sauce Labs ausgeführt werden:

1. Erstellen Sie in Ihrem Projektverzeichnis eine Datei namens `sauce_google_test.js`.
2. Fügen Sie folgenden Inhalt ein:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");

   const username = "YOUR-USER-NAME";
   const accessKey = "YOUR-ACCESS-KEY";

   const driver = new Builder()
     .withCapabilities({
       browserName: "chrome",
       platform: "Windows XP",
       version: "43.0",
       username,
       accessKey,
     })
     .usingServer(
       `https://${username}:${accessKey}@ondemand.saucelabs.com:443/wd/hub`,
     )
     .build();

   driver.get("http://www.google.com");

   driver.findElement(By.name("q")).sendKeys("webdriver");

   driver.sleep(1000).then(() => {
     driver.findElement(By.name("q")).sendKeys(Key.TAB);
   });

   driver.findElement(By.name("btnK")).click();

   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
       } else {
         console.log("Test failed");
       }
     });
   });

   driver.quit();
   ```

3. Rufen Sie in Ihren [Sauce-Labs-Benutzereinstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Zugriffsschlüssel ab. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch die tatsächlichen Werte und bewahren Sie diese sicher auf.
4. Führen Sie den Test mit folgendem Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und sein Ergebnis in Ihrer Konsole ausgegeben. Daran sehen Sie, wie wichtig ein Mechanismus zur Ausgabe von Testergebnissen ist!

5. Auf der Seite [Sauce Labs Automated Test Dashboard](https://app.saucelabs.com/dashboard/tests) sehen Sie nun Ihren Test. Dort können Sie Videos, Screenshots und weitere Daten ansehen.
   ![Automatisierter Test in Sauce Labs](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool, um anhand des gewünschten Browsers und Betriebssystems Capabilities-Objekte für Ihre Treiberinstanzen zu erstellen.

> [!NOTE]
> Weitere nützliche Informationen zu Tests mit Sauce Labs und Selenium finden Sie unter [Erste Schritte mit Selenium für automatisierte Website-Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Sofort ausführbare Selenium-Tests mit Node.js](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Sauce-Labs-Testdetails programmgesteuert ergänzen

Mit der Sauce-Labs-API können Sie Ihrem Test zusätzliche Angaben hinzufügen, etwa ob er bestanden wurde und wie er heißt. Sauce Labs kennt diese Details standardmäßig nicht!

Gehen Sie dazu wie folgt vor:

1. Installieren Sie den Node-Wrapper für Sauce Labs mit dem folgenden Befehl, sofern Sie dies für dieses Projekt nicht bereits getan haben:

   ```bash
   npm install saucelabs --save-dev
   ```

2. Binden Sie saucelabs ein. Fügen Sie dazu Folgendes oben in Ihrer Datei `sauce_google_test.js` ein, direkt unter den bisherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie direkt darunter eine neue SauceLabs-Instanz:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code erneut durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel. Beachten Sie, dass das npm-Paket saucelabs etwas verwirrenderweise `password` statt `accessKey` verwendet. Da Sie beide Werte nun zweimal verwenden, können Sie sie in Hilfsvariablen speichern.

4. Fügen Sie unter dem Block, in dem Sie die Variable `driver` definieren (direkt unter der Zeile mit `build()`), den folgenden Block ein. Damit wird die richtige `sessionID` des Treibers abgerufen, die wir benötigen, um Daten zum Job hinzuzufügen. Ihre Verwendung sehen Sie im nächsten Codeblock:

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den Block mit `driver.sleep(2000)` weiter unten im Code durch Folgendes:

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       let testPassed = false;
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         testPassed = true;
       } else {
         console.error("Test failed");
       }

       saucelabs.updateJob(driver.sessionID, {
         name: "Google search results page title test",
         passed: testPassed,
       });
     });
   });
   ```

Hier setzen wir die Variable `testPassed` je nach Testergebnis auf `true` oder `false` und aktualisieren die Details anschließend mit der Methode `saucelabs.updateJob()`.

Wenn Sie nun zur Seite [Sauce Labs Automated Test Dashboard](https://app.saucelabs.com/dashboard/tests) zurückkehren, sehen Sie, dass Ihrem neuen Job die aktualisierten Daten hinzugefügt wurden:

![Aktualisierte Job-Informationen in Sauce Labs](sauce_labs_updated_job_info.png)

### Ein eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie einen eigenen Remote-Testserver einrichten. Sehen wir uns an, wie das geht.

1. Der Selenium-Remote-Server benötigt Java. Laden Sie auf der [Downloadseite für Java SE](https://www.oracle.com/java/technologies/downloads/) das neueste JDK für Ihre Plattform herunter und installieren Sie es.
2. Laden Sie anschließend den neuesten [eigenständigen Selenium-Server](https://selenium-release.storage.googleapis.com/index.html) herunter. Er fungiert als Proxy zwischen Ihrem Skript und den Browsertreibern. Wählen Sie die neueste stabile Version (keine Beta-Version) und aus der Liste eine Datei, deren Name mit „selenium-server-standalone“ beginnt. Speichern Sie die heruntergeladene Datei an einem geeigneten Ort, beispielsweise in Ihrem Benutzerverzeichnis. Falls Sie diesen Speicherort noch nicht zu `PATH` hinzugefügt haben, tun Sie das jetzt (siehe [Selenium in Node einrichten](#selenium_in_node_einrichten)).
3. Starten Sie den eigenständigen Server mit folgendem Befehl in einem Terminal auf Ihrem Servercomputer:

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   Passen Sie den Dateinamen der `.jar`-Datei so an, dass er genau mit Ihrer Datei übereinstimmt.

4. Der Server läuft unter `http://localhost:4444/wd/hub`. Rufen Sie diese Adresse auf, um zu sehen, was angezeigt wird.

Nun läuft der Server. Erstellen wir einen Beispieltest, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie in Ihrem Projektverzeichnis eine Kopie Ihrer Datei `google_test.js` und nennen Sie sie `google_test_remote.js`.
2. Aktualisieren Sie die Codezeile, die mit `const driver = …` beginnt, wie folgt:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie den Test aus. Er sollte wie erwartet funktionieren, wird diesmal aber auf dem eigenständigen Server ausgeführt:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich praktisch. Wir haben es lokal getestet, aber Sie könnten einen solchen Server mit den passenden Browsertreibern fast überall einrichten und Ihre Skripte über die URL verbinden, unter der Sie ihn zugänglich machen.

## Selenium mit CI-Tools verbinden

Selenium und verwandte Tools wie Sauce Labs lassen sich auch mit Tools für {{Glossary("continuous_integration", "Continuous Integration")}} (CI) verbinden. So können Sie Ihre Tests über ein CI-Tool ausführen und neue Änderungen nur dann in Ihr Code-Repository übernehmen, wenn die Tests erfolgreich sind.

Eine ausführliche Betrachtung würde den Rahmen dieses Artikels sprengen. Für den Einstieg empfehlen wir Travis CI: Dieses CI-Tool ist wahrscheinlich besonders einfach einzurichten und lässt sich gut mit Web-Tools wie GitHub und Node verbinden.

Für den Einstieg können Sie beispielsweise Folgendes lesen:

- [Travis CI für absolute Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js-Projekt erstellen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Sauce Labs mit Travis CI verwenden](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliche Tests mit **codefreier Automatisierung** durchführen möchten, können Sie [Endtest](https://endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul hat Ihnen hoffentlich Spaß gemacht und genügend Einblick in das Schreiben und Ausführen automatisierter Tests gegeben, damit Sie nun Ihre eigenen Tests erstellen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
