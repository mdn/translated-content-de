---
title: Einrichtung Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den in dem vorherigen Artikel besprochenen integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Idee der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testings</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">der automatisierten Tests</a>.
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

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Möglichkeiten, aber die beste Art, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser macht, um ihn zu automatisieren und Aktionen wie "diese Webseite öffnen", "über dieses Element auf der Seite bewegen", "diesen Link klicken", "sehen, ob der Link diese URL öffnet" usw. auszuführen. Dies ist ideal für das Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten beliebten Umgebungen verfügen über ein Paket oder Framework, das WebDriver und die erforderlichen Bindungen installiert, um über diese Sprache mit WebDriver zu kommunizieren, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zur Einrichtung von Selenium für verschiedene Sprachen finden Sie unter [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen dazu, wo Sie Browser-Treiber erhalten können, finden Sie unter [Platforms Supported by Selenium](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da dies schnell und einfach einzurichten ist und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, sehen Sie sich ebenfalls [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichtung von Selenium in Node

1. Richten Sie mit einem neuen npm-Projekt ein, wie im letzten Kapitel unter [Setting up Node and npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Geben Sie ihm einen anderen Namen, wie zum Beispiel `selenium-test`.
2. Als Nächstes müssen wir ein Framework installieren, das es uns ermöglicht, mit Selenium von innerhalb von Node zu arbeiten. Wir wählen seleniums offizielles [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation relativ aktuell zu sein scheint und es gut gepflegt ist. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) auch gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, geben Sie den folgenden Befehl ein und stellen Sie sicher, dass Sie sich im Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist nach wie vor eine gute Idee, diesen Schritten zu folgen, selbst wenn Sie bereits selenium-webdriver installiert und die Browsertreiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, um es WebDriver zu ermöglichen, die Browser, die Sie testen möchten, zu steuern. Sie finden weitere Details dazu auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt). Selbstverständlich sind einige der Browser betriebssystemspezifisch, aber wir bleiben bei Firefox und Chrome, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Packen Sie sie an einem Ort aus, der leicht zu navigieren ist, wie dem Stammverzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Standort der `chromedriver` und `geckodriver` Treiber zu Ihrer Systemumgebungsvariablen `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stammverzeichnis Ihrer Festplatte zum Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen macOS-Rechner verwenden würden, unser Benutzername bob wäre und wir unsere Treiber im Stammverzeichnis unseres Home-Ordners abgelegt hätten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es noch einmal zu betonen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System `bash` Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie sie anzeigen lassen. Siehe [Show/Hide hidden files in macOS](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu).
2. Fügen Sie das folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad so, wie er tatsächlich auf Ihrem Rechner ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie dann Ihr Terminal/Command Prompt neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Prüfen Sie, dass Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows zu setzen, befolgen Sie die Anweisungen unter [How can I add a new folder to my system path?](https://www.itprotoday.com/).

Lassen Sie uns einen schnellen Test machen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Fügen Sie ihr den folgenden Inhalt hinzu und speichern Sie sie dann:

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

3. Stellen Sie im Terminal sicher, dass Sie sich im Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass eine Instanz von Firefox automatisch geöffnet wird! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingetragen und der Suchbutton wird geklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen und wenn es "webdriver at DuckDuckGo" ist, geben wir eine Nachricht zurück, die besagt, dass der Test bestanden ist.

Wir warten dann 2 Sekunden, danach schließt WebDriver die Firefox-Instanz und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie daran hindert, den Test gleichzeitig auf mehreren Browsern auszuführen. Probieren wir das mal aus!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Sie können gerne die Verweise auf einige der anderen hinzugefügten Browser ändern, entfernen usw., je nachdem, welche Browser auf Ihrem Betriebssystem zum Testen zur Verfügung stehen. Sie müssen sicherstellen, dass Sie die richtigen Browsertreiber auf Ihrem System eingerichtet haben. In Bezug auf die Zeichenkette, die in der Methode `.forBrowser()` für andere Browser verwendet werden soll, siehe die Referenzseite [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie sie:

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

3. Stellen Sie im Terminal sicher, dass Sie sich im Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Folgen Sie in diesem Fall der angegebenen Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie keine Treiber-App öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. In diesem Fall können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel auf einem Mac <kbd>Strg</kbd> + Klick auf die App, _Open_ auswählen und erneut _Open_ im resultierenden Dialogfeld auswählen.

Hier haben wir also den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion namens `searchTest()` eingebettet haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jede von ihnen an die Funktion übergeben, sodass der Test auf allen durchgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax etwas detaillierter betrachten.

## WebDriver-Syntax-Schnellkurs

Lassen Sie uns einige wichtige Eigenschaften der WebDriver-Syntax betrachten. Für vollständige Details sollten Sie das [selenium-webdriver JavaScript API reference](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele enthält, aus denen Sie in verschiedenen Sprachen lernen können.

### Start eines neuen Tests

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver` Modul einbinden und den `Builder` Konstruktor und das `Browser` Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um eine neue Instanz eines Treibers zu erstellen, indem Sie die Methode `forBrowser()` anfügen, um anzugeben, mit welchem Browser Sie mit diesem Builder testen möchten. Die Methode `build()` wird am Ende angehängt, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder class reference](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, bestimmte Konfigurationsoptionen für zu testende Browser festzulegen, z. B. können Sie eine bestimmte Version und ein Betriebssystem zum Testen in der Methode `forBrowser()` festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariable festlegen, z. B.:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, der es uns ermöglicht, diesen Code zu erkunden, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

Sie können das Beispiel testen, indem Sie den folgenden Befehl in Ihr Terminal eingeben:

```bash
node quick_test
```

### Dokument abrufen, das Sie testen möchten

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die Methode `get()` der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Weitere Informationen zu den Funktionen in diesem Abschnitt und den folgenden Abschnitten finden Sie im [WebDriver class reference](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie beginnen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (wie später beschrieben), wird Ihr Code den Betrieb einstellen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()` Funktion wie folgt, wobei Sie den Platzhalterpfad durch einen echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer ersetzen, und versuchen Sie es dann:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Jetzt, da wir ein Dokument zum Testen haben, müssen wir in irgendeiner Weise mit ihm interagieren. Dies erfordert in der Regel zuerst das Auswählen eines bestimmten Elements, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die Methode `findElement()`, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element auszuwählen, ist über CSS — die Methode `By.css()` ermöglicht es Ihnen, ein Element mithilfe eines CSS-Selectors auszuwählen.

Aktualisieren Sie Ihre `example()` Funktion jetzt wie folgt und führen Sie das Beispiel aus:

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

### Element testen

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche allgemeine Beispiele finden Sie unter [Getting text values](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text innerhalb unseres Buttons abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt unten in der `example()` Funktion ein, wie unten gezeigt:

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

Führen Sie das Beispiel mit `node` aus, genau wie zuvor. Sie sollten sehen, dass die Textbeschriftung des Buttons in der Konsole ausgegeben wird.

Lassen Sie uns etwas nützlicheres machen. Ersetzen Sie den vorherigen Codeeintrag durch `button.click();` wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt und ein `alert()`-Popup sollte erscheinen. Wenigstens wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()` Funktion, wie folgt gezeigt, und versuchen Sie es erneut:

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

Als nächstes versuchen wir, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()` Funktion wie folgt und versuchen Sie erneut, Ihren Test auszuführen:

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

Sie können Tastendrücke senden, die durch normale Zeichen nicht dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen Formularfeldern zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Warten auf etwas zum Abschluss

Es gibt Zeiten, in denen Sie WebDriver anweisen möchten, auf etwas zu warten, bevor Sie weitermachen. Beispielsweise, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite vollständig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, da sonst der Test wahrscheinlich fehlschlägt.

Im Beispiel `duck_test_multiple.js` haben wir diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das Schlüsselwort `await`, um die umschließende Funktion anzuhalten, bis das Promise gelöst ist, wonach der Code nach der Methode ausgeführt wird.

Wir könnten eine `sleep()` Methode auch in unseren `quick_test.js` Test einfügen — versuchen Sie Ihre `example()` Funktion folgendermaßen zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver füllt nun das erste Formularfeld aus, wartet eine Sekunde und prüft dann, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem die `getAttribute()` Methode verwendet wird, um den `value`-Attributwert abzurufen. Anschließend wird eine Nachricht an die Konsole ausgegeben, die den Erfolg/das Versagen meldet.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeit wiederholt testet und dann den Code weiter ausführt. Diese nutzt ebenfalls die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die allgemeine Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie einen Test ausgeführt haben, sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` herunterfahren, um sicherzustellen, dass sie keine Ressourcen unnötig weiterhin beanspruchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie den Test ausführen und die Browserinstanz sehen, die nach Abschluss des Tests wieder geschlossen wird.

## Test-Best-Practices

Es gibt viele Schriften über Best Practices für das Schreiben von Tests. Gute Hintergrundinformationen finden Sie unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie [mit dem Dokument interagieren](#interaktion_mit_dem_dokument), stellen Sie sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern werden — wenn Sie ein testbares Element haben, auf dem Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, der sich nicht einfach mit der nächsten Site-Iteration ändert. Sie möchten Ihre Tests so wenig störanfällig wie möglich machen, d.h. sie sollen nicht einfach brechen, wenn sich etwas ändert.
2. Schreib atomare Tests: Jeder Test sollte nur eine Sache testen, um es einfach zu halten, welche Testdatei welche Kriterien testet. Der oben betrachtete `duck_test.js` Test ist ziemlich gut, da er nur eine einzelne Sache testet — nämlich, ob der Titel einer Suchergebnisseite richtig gesetzt ist. Wir könnten daran arbeiten, es besser zu benennen, damit es einfacher ist, herauszufinden, was es tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreib autonome Tests: Jeder Test sollte alleine funktionieren und nicht von anderen Tests abhängen.

Darüber hinaus sollten wir Test-Resultate/Reporting erwähnen — in unseren obigen Beispielen haben wir die Ergebnisse mit einfachen `console.log()` Anweisungen gemeldet, aber dies alles wird in JavaScript gemacht, sodass Sie das Testdurchführungs- und Berichterstattungssystem verwenden können, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres Beispiels [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Promises, um alle erforderlichen Schritte in unserem Test auszuführen — die von WebDriver verwendeten promise-basierten Methoden müssen aufgelöst werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das Mocha-Testframework, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) jetzt mit folgendem Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das Flag `--no-timeouts` hinzufügen, um sicherzustellen, dass Ihre Tests nicht aus Mocha's willkürlichem Timeout (das 3 Sekunden beträgt) fehlschlagen.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertion-Tools einrichtet.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht wesentlich schwieriger ist als das Ausführen lokal. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit ein paar weiteren spezifizierten Funktionen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen (falls erforderlich), um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, das zeigt, wie man einen Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausführt:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `bstack_duck_test.js`.
2. Geben Sie ihr den folgenden Inhalt:

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

3. Besorgen Sie sich von Ihrer Seite mit den [Account & Profile details](https://www.browserstack.com/accounts/profile/details) von BrowserStack Ihren Benutzernamen und Zugangsschlüssel (siehe _Username and Access Keys_).
4. Ersetzen Sie in dem Code die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` durch Ihre tatsächlichen Benutzernamen- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit eines Ergebnisberichtsmechanismus!

6. Wenn Sie nun zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test gelistet, mit Details einschließlich einer Videoaufzeichnung des Tests und mehreren detaillierten Protokollen zugehöriger Informationen:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Option _Resources_ im Menü des Browserstack-Automatisierungs-Dashboards enthält viele nützliche Informationen zur Verwendung für das Ausführen automatisierter Tests. Weitere nützliche Informationen finden Sie unter [Selenium with NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### BrowserStack-Testdetails programmatisch ausfüllen

Sie können die BrowserStack REST API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu kennzeichnen, z. B. ob er bestanden hat, warum er bestanden hat, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details nicht von selbst.

Lassen Sie uns unser Beispiel `bstack_duck_test.js` aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anforderungen an die BrowserStack REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Jetzt aktualisieren wir unser `capabilities` Objekt, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, wobei Sie daran denken, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automatisierungs-Dashboard zu organisieren):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Als nächstes rufen wir die `sessionId` der aktuellen Sitzung ab und verwenden sie (zusammen mit Ihrem `userName` und `accessKey`), um die URL zusammenzusetzen, an die Anfragen gesendet werden sollen, um die BrowserStack-Daten zu aktualisieren. Schließen Sie die folgenden Zeilen direkt unter dem Abschnitt ein, der das Objekt `driver` erstellt (das mit `const driver = new Builder()`) beginnt:

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Zuletzt aktualisieren wir den `if ... else`-Block nahe dem unteren Rand des Codes, um je nach Passieren oder Fehler des Tests entsprechende API-Anrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Teststatus zu "PASS" oder "FAIL" zu aktualisieren und einen Grund für das Ergebnis anzugeben.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, jetzt jedoch mit Ihren benutzerdefinierten Daten angehängt. Es zeigt einen Status von "PASSED" und den von der REST API gemeldeten Grund für das Bestehen:

![BrowserStack Anpassbare Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Lassen Sie uns ein Beispiel betrachten, das zeigt, wie man Selenium-Tests remote auf Sauce Labs ausführt:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `sauce_google_test.js`.
2. Geben Sie ihr den folgenden Inhalt:

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

3. Holen Sie sich aus Ihren [Sauce Labs-Benutzereinstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Zugangsschlüssel. Ersetzen Sie in dem Code die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` durch Ihre tatsächlichen Benutzernamen- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit eines Ergebnisberichtsmechanismus!

5. Wenn Sie nun auf Ihre Seite [Sauce Labs Automatisiertes Test-Dashboard](https://app.saucelabs.com/dashboard/tests) gehen, sehen Sie Ihre Tests aufgelistet. Von hier aus können Sie Videos, Screenshots und andere solche Daten sehen:
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Plattformkonfigurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool zum Erstellen von Fähigkeit-Objekten, die Ihren Treiberinstanzen übergeben werden, basierend darauf, auf welchem Browser/Betriebssystem Sie testen möchten.

> [!NOTE]
> Weitere nützliche Details zum Testen mit Sauce Labs und Selenium finden Sie unter [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Sauce Labs-Testdetails programmatisch ausfüllen

Sie können die Sauce Labs-API verwenden, um Ihren Test mit mehr Details zu versehen, z. B. ob er bestanden hat, den Namen des Tests usw. Sauce Labs kennt diese Details nicht von alleine!

Dazu müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mithilfe des folgenden Befehls (wenn Sie ihn für dieses Projekt noch nicht installiert haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie saucelabs — setzen Sie dies am Anfang Ihrer Datei `sauce_google_test.js`, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie das Folgende direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie wiederum die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugangsschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password` anstelle von `accessKey` verwendet). Da Sie diese nun zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie darin zu speichern.

4. Fügen Sie unter dem Block, in dem Sie die Variable `driver` definieren (direkt unter der Zeile `build()`), den folgenden Block hinzu — dieser erhält die richtige Treiber `sessionID`, die wir benötigen, um Daten an den Job zu schreiben (Sie können ihn im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzt schließlich den Block `driver.sleep(2000)` nahe am unteren Rand des Codes durch Folgendes:

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

Wir haben hier eine `testPassed` Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden wurde oder nicht, und dann die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt auf Ihre [Sauce Labs Automatisiertes Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sollten Sie sehen, dass Ihr neuer Job nun die aktualisierten Daten daran angehängt hat:

![Sauce Labs aktualisierte Jobinformationen](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Schauen wir uns an, wie Sie das tun können.

1. Der Selenium-Remote-Server benötigt Java, um zu laufen. Laden Sie die neueste JDK für Ihre Plattform von der [Java SE Download-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, sobald es heruntergeladen ist.
2. Laden Sie anschließend den neuesten [Selenium Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browsertreibern. Wählen Sie die neueste stabile Version (d.h. keine Beta) und wählenaus der Liste eine Datei aus, die mit "selenium-server-standalone" beginnt. Sobald es heruntergeladen wurde, legen Sie es an einem sinnvollen Ort ab, wie in Ihrem Home-Verzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe der Abschnitt [Einstellung von Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie den folgenden Befehl in ein Terminal auf Ihrem Server-Rechner eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen), sodass es exakt mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen — versuchen Sie, jetzt dahin zu navigieren, um zu sehen, was Sie erhalten.

Jetzt, da der Server läuft, erstellen wir einen Demo-Test, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer Datei `google_test.js` und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile im Code (die mit `const driver = …` beginnt) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten sehen, dass er wie erwartet läuft; diesmal werden Sie ihn jedoch auf dem eigenständigen Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Das ist also ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten das auf fast jedem Server zusammen mit den relevanten Browsertreibern einrichten und dann Ihre Skripte über die URL, unter der Sie es erreichbar machen, damit verbinden.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt: Es ist auch möglich, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI) Tools zu integrieren — dies ist nützlich, da dies bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen und nur neue Änderungen an Ihrem Code-Repository übertragen, wenn die Tests bestanden werden.

Es liegt außerhalb des Rahmens dieses Artikels, diesen Bereich im Detail zu betrachten, aber wir würden empfehlen, mit Travis CI zu beginnen — dies ist wahrscheinlich das am leichtesten zu startende CI-Tool und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um zu beginnen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliche Tests mit **codeless Automation** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genügend Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie damit beginnen können, Ihre eigenen automatisierten Tests zu schreiben.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
