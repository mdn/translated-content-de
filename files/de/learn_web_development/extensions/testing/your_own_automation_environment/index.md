---
title: Einrichtung Ihrer eigenen Testautomatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie `selenium-webdriver` für Node durchführen können. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den in dem vorherigen Artikel beschriebenen Tools integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; ein Verständnis
        der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testings</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testings</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit ausführt und wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Methoden, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Browseraufrufe zur Automatisierung ermöglicht, um Aktionen wie "diese Webseite öffnen", "über dieses Element auf der Seite fahren", "diesen Link klicken", "überprüfen, ob der Link diese URL öffnet" usw. durchzuführen. Dies ist ideal, um automatisierte Tests durchzuführen.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Für die meisten gängigen Umgebungen gibt es ein Paket oder Framework, das WebDriver und die erforderlichen Bindungen zur Kommunikation mit WebDriver mit dieser Sprache installiert, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zu Selenium-Setups für verschiedene Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser benötigen unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen darüber, wo Browser-Treiber zu finden sind, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js abdecken, da es schnell und einfach zu beginnen ist und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, schauen Sie sich auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichten von Selenium in Node

1. Zu Beginn richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Einrichten von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, von innerhalb von Node mit Selenium zu arbeiten. Wir wählen seleniums offizielles [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation recht aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Alternativen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver bereits installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, um WebDriver die Steuerung der Browser, die Sie testen möchten, zu ermöglichen. Details, wo Sie diese finden können, finden Sie auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige Browser spezifisch für bestimmte Betriebssysteme, aber wir werden bei Firefox und Chrome bleiben, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie in einen leicht zugänglichen Ort, wie das Stammverzeichnis Ihres Home-Benutzerverzeichnisses.
3. Fügen Sie den Speicherort des `chromedriver` und `geckodriver` Treibers zu Ihrer Systemvariable `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihres Festplattenlaufwerks zum Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen macOS-Rechner verwenden würden, unser Benutzername bob wäre und wir unsere Treiber im Stammverzeichnis unseres Home-Ordners abgelegt hätten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es noch einmal zu sagen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS- und den meisten Linux-Systemen einzustellen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash` Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie sie anzeigen lassen. Siehe [Versteckte Dateien in macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie dies unten in Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend, wie er tatsächlich auf Ihrem Rechner ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie Ihr Terminal/Eingabeaufforderung neu, um Ihre Bash-Konfiguration neu anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten sehen, dass es im Terminal ausgegeben wird.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows einzustellen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Lassen Sie uns einen kurzen Test machen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test.js`:
2. Geben Sie den folgenden Inhalt ein und speichern Sie es:

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
   > Diese Funktion ist ein {{Glossary("IIFE", "IIFE")}} (Sofort Invoked Function Expression).

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass sich ein Firefox-Fenster automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und die Suchschaltfläche wird geklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" lautet, geben wir eine Nachricht zurück, dass der Test bestanden wurde.

Dann warten wir 2 Sekunden, danach wird WebDriver die Firefox-Instanz schließen und stoppen.

## Tests in mehreren Browsern gleichzeitig durchführen

Es gibt auch nichts, was Sie daran hindert, den Test gleichzeitig in mehreren Browsern durchzuführen. Versuchen wir das!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können gerne einige der anderen hinzugefügten Browserreferenzen ändern, entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem testen können. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Was den String betrifft, der in der Methode `.forBrowser()` für andere Browser verwendet werden soll, siehe die Referenzseite [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Geben Sie Ihrer Datei folgenden Inhalt und speichern Sie es:

   ```js
   const { Builder, Browser, By, Key } = require("selenium-webdriver");

   const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();
   const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

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

   searchTest(driver_fx);
   searchTest(driver_chr);
   ```

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung in der Art von "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn dies der Fall ist, befolgen Sie die gegebene Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Meldung, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn dies der Fall ist, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel auf einem Mac mit <kbd>Ctrl</kbd> + Klick auf die App, wählen Sie _Öffnen_ und wählen Sie _Öffnen_ erneut aus dem resultierenden Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in einer Funktion namens `searchTest()` umschlossen haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jeden an die Funktion übergeben, sodass der Test auf allen durchgeführt wird.

Lassen Sie uns fortfahren und die Grundlagen der WebDriver-Syntax etwas detaillierter betrachten.

## WebDriver Syntax Crash-Kurs

Werfen wir einen Blick auf einige wichtige Merkmale der WebDriver-Syntax. Für detailliertere Informationen sollten Sie das [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte referenz und die Hauptdokumentation von Selenium's [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele zum Lernen enthält, die in verschiedenen Sprachen geschrieben sind.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver` Modul einbinden und den `Builder` Konstruktor und die `Browser` Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um eine neue Instanz eines Treibers zu erstellen und verketten die Methode `forBrowser()`, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten.
Die Methode `build()` wird am Ende verkettet, um die Treiberinstanz tatsächlich zu bauen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezielle Konfigurationsoptionen für zu testende Browser festzulegen. Zum Beispiel können Sie eine bestimmte Version und ein Betriebssystem festlegen, um in der Methode `forBrowser()` zu testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariable festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, der es uns ermöglicht, diesen Code während unserer Besprechung zu erkunden. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

Den Test können Sie testen, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

```bash
node quick_test
```

### Das Dokument abrufen, das Sie testen möchten

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die Methode `get()` der Treiberinstanz, die Sie zuvor erstellt haben, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den nachfolgenden Abschnitten.

Sie können jede URL verwenden, um auf Ihre Ressource zu zeigen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist - wenn Sie beginnen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (siehe später), wird Ihr Code brechen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()` Funktion wie folgt, und ersetzen Sie den Platzhalterpfad durch einen echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer. Versuchen Sie dann, diese auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Jetzt, da wir ein Dokument zum Testen haben, müssen wir auf irgendeine Weise mit ihm interagieren, was normalerweise bedeutet, zuerst ein bestimmtes Element auszuwählen, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die Methode `findElement()`, die als Parameter eine Auswahlmethode akzeptiert. Um zum Beispiel ein Element über seine ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element auszuwählen, ist durch CSS - die Methode `By.css()` ermöglicht es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie Ihre `example()`-Funktion nun wie folgt und führen Sie das Beispiel aus:

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

### Ihr Element testen

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Sie können nützliche allgemeine Beispiele bei [Erhalten von Textwerten](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in der WebDriver-Dokumentation finden.

Wenn wir den Text in unserem Button erhalten wollte, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun wie unten gezeigt am Ende der `example()`-Funktion hinzu:

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

Führen Sie das Beispiel mit `node` auf die gleiche Weise aus, wie Sie es vorher gemacht haben. Sie sollten die Textbeschriftung des Buttons in der Konsole sehen.

Lassen Sie uns etwas nützlicheres tun. Ersetzen Sie den vorherigen Codeeintrag durch `button.click();` wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt und ein `alert()` Popup sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, sie erneut zu testen:

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

Nun lass uns versuchen, etwas Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, Ihren Test erneut auszuführen:

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

Sie können Tastenanschläge, die nicht durch normale Zeichen dargestellt werden können, mithilfe von Eigenschaften des `Key`-Objekts übermitteln. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen den Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Warten auf den Abschluss von etwas

Es gibt Zeiten, in denen Sie möchten, dass WebDriver auf den Abschluss von etwas wartet, bevor es fortfährt. Zum Beispiel, wenn Sie eine neue Seite laden, möchten Sie möglicherweise warten, bis das DOM der Seite vollständig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, ansonsten schlägt der Test wahrscheinlich fehl.

In unserem `duck_test_multiple.js`-Test haben wir zum Beispiel diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt - die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das `await`-Schlüsselwort, um die umschließende Funktion anzuhalten, bis das Promise gelöst ist, danach wird der Code ausgeführt, der der Methode folgt.

Wir könnten unserer `quick_test.js`-Testdatei ebenfalls eine `sleep()`-Methode hinzufügen - versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird nun das erste Formularfeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um den Wert seines `value`-Attributs zu erhalten. Dann druckt es eine Nachricht auf die Konsole, um Erfolg/Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die wiederholt eine Bedingung für eine bestimmte Zeit testet und dann den Code weiter ausführt. Dies nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die zusammen mit `wait()` verwendet werden.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie einen Test ausgeführt haben, sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` herunterfahren, um sicherzustellen, dass sie nicht unnötig Ressourcen verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie sehen, dass der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests wieder heruntergefahren wird.

## Beste Testpraktiken

Es gibt viel Literatur über bewährte Praktiken beim Schreiben von Tests. Sie finden gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), stellen Sie sicher, dass Sie Locators und Page Objects verwenden, die sich wahrscheinlich nicht ändern - wenn Sie ein testbares Element haben, das Sie testen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann und das nicht mit der nächsten Site-Iteration einfach geändert wird. Sie möchten Ihre Tests so wenig brüchig wie möglich gestalten, d.h. sie brechen nicht einfach, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, um es einfach zu machen, nachzuvollziehen, welches Testfile welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzige Sache testet - ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher wird, herauszufinden, was es tut, wenn wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte eigenständig funktionieren und nicht auf andere Tests angewiesen sein, um zu funktionieren.

Außerdem sollten wir die Testresultate/Berichterstattung erwähnen - in unseren obigen Beispielen haben wir die Ergebnisse mit einfachen `console.log()`-Anweisungen gemeldet, aber da das alles in JavaScript gemacht wird, können Sie jedes beliebige Test-Runningsystem und Berichterstattungssystem verwenden, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durchgehen:

1. Erstellen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Promises, um alle Schritte durchzuführen, die in unserem Test benötigt werden - die Promise-basierten Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es richtig funktioniert.
2. Installieren Sie das Mocha Testing-Framework, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test` Verzeichnis hinzufügen) nun mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Fügen Sie den Parameter `--no-timeouts` hinzu, um sicherzustellen, dass Ihre Tests nicht aufgrund von Mochas willkürlichem Timeout (das 3 Sekunden beträgt) fehlschlagen.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie verschiedene Kombinationen von Test-/Assertions-Tools eingerichtet werden.

## Remote-Tests ausführen

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen von Tests. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit einigen weiteren Eigenschaften, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, das zeigt, wie ein Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausgeführt wird:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei mit dem Namen `bstack_duck_test.js`.
2. Geben Sie ihr folgenden Inhalt:

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

3. Holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel von Ihrer BrowserStack [Konto- und Profildetailseite](https://www.browserstack.com/accounts/profile/details) (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Ihren Zugriffsschlüssel (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
5. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung von irgendeiner Art von Ergebnismeldemechanismus!

6. Wenn Sie nun zum [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet mit Details, einschließlich einer Videoaufzeichnung des Tests und mehreren detaillierten Protokollen mit Informationen dazu:
   ![BrowserStack automatisch Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Option _Resources_ im Menü des BrowserStack-Automatisierungs-Dashboards enthält eine Fülle nützlicher Informationen zur Nutzung für automatisierte Tests. Weitere spezifische Informationen zu Node finden Sie unter [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs).

#### Ausfüllen von BrowserStack-Testdetails programmatisch

Sie können die BrowserStack REST API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details wie ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört, usw. zu annotieren. BrowserStack kennt diese Details nicht standardmäßig.

Lassen Sie uns unser `bstack_duck_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```js
   npm install axios
   ```

2. Importieren Sie das Axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Nun aktualisieren wir unser `capabilities`-Objekt, um einen Projektnamen einzuschließen - fügen Sie die folgende Linie vor der schließenden geschweiften Klammer ein, und denken Sie daran, ein Komma am Ende der vorherigen Zeile hinzuzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungs-Dashboard zu organisieren):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Als nächstes holen wir uns die `sessionId` der aktuellen Sitzung und verwenden sie (zusammen mit Ihrem `userName` und `accessKey`), um die URL zusammenzustellen, an die Anfragen gesendet werden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt) :

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if ... else`-Block nahe dem unteren Ende des Codes, um je nach Erfolg oder Misserfolg des Tests entsprechende API-Aufrufe an BrowserStack zu senden:

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

Wenn der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem Bestanden- oder Nicht-bestanden-Status zu aktualisieren und einem Grund für das Ergebnis.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten angehängten Daten. Es zeigt einen Status von "PASSED" und den über die REST-API gemeldeten Grund für das Bestehen:

![BrowserStack benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Lassen Sie uns ein Beispiel betrachten, das zeigt, wie Selenium-Tests remote auf Sauce Labs ausgeführt werden:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `sauce_google_test.js`.
2. Geben Sie ihr folgenden Inhalt:

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

3. Holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel von Ihren [Sauce Labs Benutzer-Einstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Ihren Zugriffsschlüssel (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
4. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung von irgendeiner Art von Ergebnismeldemechanismus!

5. Wenn Sie nun zu Ihrer [Automatisierten Webseiten-Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite von Sauce Labs gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere solche Daten einsehen.
   ![Automatisierte Test von Sauce Labs](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Plattformkonfigurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Werkzeug zur Erzeugung von Fähigkeit-Objekten, die an Ihre Treiberinstanzen übergeben werden, basierend auf dem Browser/Betriebssystem, den Sie testen möchten.

> [!NOTE]
> Weitere nützliche Informationen zum Testen mit Sauce Labs und Selenium finden Sie unter [Einführung in Selenium für automatisiertes Website-Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmgesteuertes Ausfüllen von Sauce Labs-Testdetails

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu annotieren, wie ob er bestanden hat, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Dafür müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mit folgendem Befehl (falls Sie dies noch nicht für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Require saucelabs — setzen Sie dies am Anfang Ihrer `sauce_google_test.js` Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie die folgende Zeile direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Ihren Zugriffsschlüssel (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password`, nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie vielleicht einige Hilfsvariablen erstellen, um sie zu speichern.

4. Unter dem Block, in dem Sie die `driver` Variable definieren (direkt unter der `build()` Linie), fügen Sie den folgenden Block hinzu - dieser erhält die richtige Treiber-`sessionID`, die wir benötigen, um Daten an den Job zu schreiben (Sie können es in Aktion im folgenden Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den Block `driver.sleep(2000)` nahe dem unteren Ende des Codes durch Folgendes:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden wurde oder nicht, dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zu Ihrer Seite [Sauce Labs Dashboard für automatisierte Tests](https://app.saucelabs.com/dashboard/tests) zurückkehren, sollten Sie Ihren neuen Job nun mit den aktualisierten angehängten Daten sehen:

![Sauce Labs aktualisierte Job-Info](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Lassen Sie uns sehen, wie das geht.

1. Der Selenium-Remote-Server benötigt Java, um zu laufen. Laden Sie die neueste JDK-Version für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen wurde.
2. Laden Sie als nächstes das neueste [Selenium-Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter - dies fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (also keine Beta) und wählen Sie aus der Liste eine Datei aus, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen wurde, legen Sie es an einem sinnvollen Ort ab, etwa in Ihrem Home-Verzeichnis. Falls Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie Folgendes in ein Terminal auf Ihrem Server-Rechner eingeben:

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen), sodass er exakt dem Dateinamen entspricht, den Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen - versuchen Sie, dort nun hin zu gehen, um zu sehen, was Sie bekommen.

Nun, da wir den Server laufen haben, lassen Sie uns einen Demotest erstellen, der auf dem Remote-Selenium-Server läuft.

1. Erstellen Sie eine Kopie Ihrer Datei `google_test.js` und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile des Codes (die mit `const driver = …` beginnt) wie folgt:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet läuft; diesmal jedoch werden Sie ihn auf dem Standalone-Server laufen lassen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten und dann Ihre Skripte so konfigurieren, dass sie die von Ihnen gewählte URL verwenden, um sich damit zu verbinden.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit kontinuierlicher Integration (CI) zu integrieren - dies ist nützlich, da Sie damit Tests über ein CI-Tool ausführen und nur neue Änderungen in Ihr Code-Repository übernehmen können, wenn die Tests bestanden werden.

Es ist außerhalb des Umfangs, dieses Feld in diesem Artikel im Detail zu betrachten, aber wir würden vorschlagen, mit Travis CI zu beginnen - das ist wahrscheinlich das einfachste CI-Tool, um loszulegen, und es hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliche Tests mit **codeless Automation** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genug Einblick in das Schreiben und Durchführen automatisierter Tests gegeben haben, um mit dem Schreiben eigener automatisierter Tests zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
