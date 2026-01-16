---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 3251a58ecf1ded5df0e1aa5d23c8436247252b52
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel lernen Sie, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch untersuchen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den im vorherigen Artikel besprochenen integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung der
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Grundprinzipien des Cross-Browser-Tests</a> und des
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und damit Tests durchführt, und wie man sie mit Tools wie Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browser-Automatisierung. Es gibt andere Wege, aber der beste Weg, Selenium zu nutzen, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser macht, um diesen zu automatisieren, indem Aktionen ausgeführt werden wie "öffne diese Webseite", "bewege über dieses Element auf der Seite", "klicke diesen Link", "prüfe, ob der Link diese URL öffnet", usw. Dies ist ideal für das Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und nutzen, hängt davon ab, in welcher Programmierumgebung Sie Ihre Tests schreiben und ausführen möchten. In den meisten beliebten Umgebungen gibt es ein Paket oder Framework, das WebDriver installiert und die Bindungen bereitstellt, die notwendig sind, um mit WebDriver in dieser Sprache zu kommunizieren, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zu den Selenium-Setups für verschiedene Sprachen finden Sie unter [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, um WebDriver die Kommunikation mit und Steuerung von ihnen zu ermöglichen. Weitere Informationen darüber, wo Sie Browser-Treiber erhalten, finden Sie unter [Platforms Supported by Selenium](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach zu starten ist und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, schauen Sie sich auch [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichtung von Selenium in Node

1. Beginnen Sie damit, ein neues npm-Projekt einzurichten, wie im letzten Kapitel unter [Setting up Node and npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, z. B. `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, von innerhalb von Node mit Selenium zu arbeiten. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium wählen, da die Dokumentation ziemlich aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Optionen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver und die Browser-Treiber zuvor installiert haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, um WebDriver die Steuerung der Browser zu ermöglichen, die Sie testen möchten. Details dazu, wo Sie diese erhalten können, finden Sie auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser OS-spezifisch, aber wir werden bei Firefox und Chrome bleiben, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten Treiber [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) herunter.
2. Entpacken Sie sie an einen relativ leicht zugänglichen Ort, wie das Stammverzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Ort des `chromedriver`- und `geckodriver`-Treiber zu Ihrer Systemumgebungsvariable `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stammverzeichnis Ihrer Festplatte bis zu dem Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen macOS-Rechner verwenden würden, unser Benutzername Bob wäre und wir unsere Treiber im Stamm unseres Heimatordners hinterlegt hätten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es noch einmal zu wiederholen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiges Missverständnis.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen festzulegen:

1. Öffnen Sie Ihre `.zprofile`-Datei (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet).
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen, siehe [Versteckte Dateien in macOS anzeigen/verbergen](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad, so wie er tatsächlich auf Ihrem Rechner ist):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, dann starten Sie Ihr Terminal/Ihren Befehlszeileninterpreter neu, um Ihre Bash-Konfiguration neu anzuwenden.
4. Überprüfen Sie, dass Ihre neuen Pfade in der `PATH`-Variablen vorhanden sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten dies dann im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows festzulegen, folgen Sie den Anweisungen unter [How can I add a new folder to my system path?](https://www.itprotoday.com/)

Lassen Sie uns einen schnellen Test versuchen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Geben Sie ihr den folgenden Inhalt und speichern Sie sie dann:

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
   > Diese Funktion ist ein {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression).

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektverzeichnis befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten eine Instanz von Firefox automatisch öffnen sehen! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird im Suchfeld eingegeben, und der Suchknopf wird geklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" lautet, geben wir eine Nachricht zurück, die angibt, dass der Test bestanden ist.

Wir warten dann 2 Sekunden, danach wird WebDriver die Firefox-Instanz schließen und stoppen.

## Testen in mehreren Browsern gleichzeitig

Es hindert Sie nichts daran, den Test auf mehreren Browsern gleichzeitig auszuführen. Lassen Sie uns das versuchen!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Sie können gerne die Verweise auf einige der anderen hinzugefügten Browser ändern, entfernen und so weiter, je nachdem, welche Browser auf Ihrem Betriebssystem verfügbar sind. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Im Hinblick auf den String, den Sie in der `.forBrowser()`-Methode für andere Browser verwenden, siehe die [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser)-Referenzseite.
2. Geben Sie Ihrer Datei den folgenden Inhalt, und speichern Sie dann:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektverzeichnis befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, könnten Sie eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.
>
> Sie könnten eine Meldung erhalten, die besagt, dass Sie eine Treiber-App nicht öffnen können, da sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie dies erhalten, können Sie diese Sicherheitseinstellung für diese Treiber-App überschreiben. Klicken Sie bei einem Mac beispielsweise mit gedrückter <kbd>Ctrl</kbd>-Taste auf die App, wählen Sie _Öffnen_ und wählen Sie im daraufhin angezeigten Dialogfeld erneut _Öffnen_.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion eingewickelt haben, `searchTest()`. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jede einzelne an die Funktion übergeben, damit der Test in allen durchgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax genauer betrachten.

## WebDriver-Syntax-Kurzüberblick

Lassen Sie uns einige der wichtigsten Features der WebDriver-Syntax erläutern. Für weitere Details sollten Sie das [selenium-webdriver JavaScript API Reference](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz konsultieren sowie die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/), die zahlreiche Beispiele zum Lernen aus verschiedenen Sprachen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden, indem Sie den `Builder`-Konstruktor und das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Verwenden Sie den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, und verketten Sie die `forBrowser()`-Methode, um anzugeben, mit welchem Browser Sie testen möchten.
Die `build()`-Methode wird am Ende verkettet, um tatsächlich die Treiberinstanz zu erstellen (siehe die [Builder class reference](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für Browser festzulegen, die getestet werden sollen. Sie können beispielsweise eine bestimmte Version und ein Betriebssystem in der `forBrowser()`-Methode festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch über eine Umgebungsvariable festlegen, beispielsweise:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, damit wir diesen Code untersuchen können, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

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

### Das Dokument, das Sie testen möchten, abrufen

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der zuvor erstellten Treiberinstanz, beispielsweise:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Details zu den Funktionen in diesem Abschnitt sowie den unter ihm finden Sie in der [WebDriver class reference](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Serverstandort zu verwenden, damit der Code flexibler ist — wenn Sie anfangen, einen Remote-Server zum Ausführen Ihrer Tests zu verwenden (siehe später), wird Ihr Code brechen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt und ersetzen Sie den Platzhalterpfad durch einen tatsächlichen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer, und versuchen Sie dann, ihn auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Jetzt haben wir ein Dokument zum Testen, mit dem wir auf irgendeine Weise interagieren müssen, was normalerweise zuerst das Auswählen eines bestimmten Elements zum Testen von etwas beinhaltet. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, unter anderem durch ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Beispielsweise, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element per CSS auszuwählen — die `By.css()`-Methode ermöglicht es, ein Element mithilfe eines CSS-Selectors auszuwählen.

Aktualisieren Sie jetzt Ihre `example()`-Funktion wie folgt und führen Sie das Beispiel aus:

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

### Testen Ihres Elements

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche gängige Beispiele finden Sie in den WebDriver-Dokumenten unter [Getting text values](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content).

Wenn wir den Text in unserer Schaltfläche erhalten wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt unten in die `example()`-Funktion ein, wie unten gezeigt:

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

Führen Sie das Beispiel mit `node` auf die gleiche Weise aus, wie Sie es zuvor getan haben. Sie sollten den Text der Schaltfläche im Konsolenfenster gemeldet sehen.

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

Versuchen Sie, Ihren Test erneut auszuführen; die Schaltfläche wird angeklickt und ein `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, sie zu testen:

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

Versuchen wir als nächstes, etwas Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, Ihren Test auszuführen:

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

Sie können Tastendrucke übermitteln, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Warten, bis etwas abgeschlossen ist

Es gibt Zeiten, in denen Sie die WebDriver warten lassen möchten, bis etwas abgeschlossen ist, bevor es weitermacht. Beispielsweise, wenn Sie eine neue Seite laden, möchten Sie, dass die DOM der Seite vollständig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, sonst wird der Test wahrscheinlich fehlschlagen.

In unserem `duck_test_multiple.js`-Test beispielsweise haben wir diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die zu wartende Zeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit erfüllt wird. Wir verwenden das Schlüsselwort `await`, um die umschließende Funktion einzufrieren, bis das Versprechen erfüllt wird, danach wird der folgende Code der Methode ausgeführt.

Wir könnten eine `sleep()`-Methode zu unserem `quick_test.js`-Test hinzufügen — versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird nun das erste Formulareingabefeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem es `getAttribute()` verwendet, um den Wert des `value`-Attributs abzurufen. Danach wird eine Meldung in der Konsole ausgegeben, um Erfolg/Fehlschlag zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung wiederholt für eine bestimmte Zeit testet und dann fortfährt, den Code auszuführen. Diese Methode verwendet auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Verwendung herunterfahren

Nachdem Sie einen Test ausgeführt haben, sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` herunterfahren, um sicherzustellen, dass sie keine Ressourcen unnötig nutzen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Nun, wenn Sie es ausführen, sollten Sie sehen, dass der Test durchgeführt wird und die Browserinstanz wieder geschlossen wird, nachdem der Test abgeschlossen ist.

## Best Practices für Tests

Es wurde viel über Best Practices beim Schreiben von Tests geschrieben. Gute Hintergrundinformationen finden Sie unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Stellen Sie beim [Interagieren mit dem Dokument](#mit_dem_dokument_interagieren) sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die wahrscheinlich nicht ändern — wenn Sie ein testbares Element haben, mit dem Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder eine Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, der nicht einfach mit der nächsten Überarbeitung der Website ändert. Sie möchten Ihre Tests so wenig zerbrechlich wie möglich machen, d.h. sie brechen nicht einfach, wenn sich etwas Ändert.
2. Schreiben Sie atomare Tests: Jeder Test sollte nur eine Sache testen, um es einfach zu machen, den Überblick darüber zu behalten, welche Testdatei welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzelne Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit leichter herauszufinden ist, was es tut, wenn wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreiben Sie autonome Tests: Jeder Test sollte alleine funktionieren und nicht von anderen Tests abhängig sein.

Zusätzlich sollten wir Ergebnisse/Reporting erwähnen — wir haben in unseren obigen Beispielen Ergebnisse gemeldet, indem wir einfache `console.log()`-Anweisungen verwendet haben, aber das alles wurde in JavaScript gemacht, sodass Sie beliebiges Testlauf- und Reportingsystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein kurzes Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js)-Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle in unserem Test erforderlichen Schritte auszuführen — die von WebDriver verwendeten promise-basierten Methoden müssen erfüllt werden, damit es richtig funktioniert.
2. Installieren Sie das Mocha-Test-Harness, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können jetzt den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`-Flag einbeziehen, um sicherzustellen, dass Ihre Tests nicht fehlschlagen, weil Mocha's willkürliche Timeout-Bedingung überschritten wurde (dies ist 3 Sekunden).

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie Sie verschiedene Kombinationen von Test-/Assertion-Tools einrichten.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das Ausführen von Tests lokal. Sie müssen lediglich Ihre Treiberinstanz erstellen, dabei jedoch einige zusätzliche Funktionen spezifizieren, einschließlich der Fähigkeiten des Browsers, auf dem Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie (falls vorhanden) benötigen.

### BrowserStack

Erstellen wir ein Beispiel, das zeigt, wie ein Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausgeführt wird:

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

3. Rufen Sie von Ihrer BrowserStack-Seite [Konto- & Profildetails](https://www.browserstack.com/accounts/profile/details) Ihre Benutzername und Zugriffsschlüssel ab (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugriffsschlüsselwerte (und stellen Sie sicher, dass Sie sie sichern).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit der Eingliederung eines Reporting-Mechanismus für Testergebnisse!

6. Wenn Sie jetzt zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, einschließlich eines Videoaufzeichnungs des Tests und mehrerer detaillierter Protokolle mit Informationen dazu:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Menüoption _Resources_ im Browserstack-Automatisierungsdashboard enthält eine Fülle nützlicher Informationen zur Verwendung beim Ausführen automatisierter Tests. Siehe [Selenium with NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Automatisches Ausfüllen von BrowserStack-Testdetails

Sie können die BrowserStack REST-API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu annotieren, wie ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Lassen Sie uns unser `bstack_duck_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihren Code ein:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren Sie jetzt unser `capabilities`-Objekt, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, wobei Sie daran denken, ein Komma am Ende der vorherigen Zeile hinzuzufügen (Sie können den Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automate Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als nächstes rufen wir die `sessionId` der aktuellen Sitzung ab und verwenden diese (zusammen mit Ihrem `userName` und `accessKey`), um die URL zu erstellen, die Anfragen sendet, um die Daten bei BrowserStack zu aktualisieren. Inkludieren Sie die folgenden Zeilen direkt unter dem Block, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Finally, aktualisieren Sie den `if...else`-Block nahe dem Ende des Codes, um geeignete API-Aufrufe an BrowserStack zu senden, abhängig davon, ob der Test bestanden oder fehlgeschlagen ist:

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

Nachdem der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um die Testdaten mit einem bestandenen oder nicht bestandenen Status zu aktualisieren und einem Grund für das Ergebnis.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten Daten daran angehangen. Es zeigt einen Status von "PASSED" und den Grund für den bestandenen Test, der per REST-API-Berichterstattung geliefert wurde:

![BrowserStack Custom Results](bstack_custom_results.png)

### Sauce Labs

Lassen Sie uns ein Beispiel betrachten, das zeigt, wie man Selenium-Tests remote auf Sauce Labs ausführen kann:

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

3. Rufen Sie von Ihren [Sauce Labs Benutzer Einstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Ihren Zugriffsschlüssel ab. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugriffsschlüsselwerte (und stellen Sie sicher, dass Sie sie sichern).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit der Eingliederung eines Reporting-Mechanismus für Testergebnisse!

5. Gehen Sie jetzt zu Ihrer [Sauce Labs Automated Test Dashboard](https://app.saucelabs.com/dashboard/tests)-Seite, sehen Sie Ihren Test aufgelistet, von hier aus können Sie Videos, Screenshots und andere Informationen sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zum Generieren von Fähigkeitsobjekten, die an Ihre Treiberinstanzen übergeben werden, basierend darauf, auf welchem Browser/Betriebssystem Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zum Testen mit Sauce Labs und Selenium sehen Sie sich [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) an.

#### Programmatisches Ausfüllen von Sauce Labs-Testdetails

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu annotieren, wie ob er bestanden hat, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie das Node Sauce Labs Wrapper mit folgendem Befehl (wenn Sie dies nicht bereits für dieses Projekt gemacht haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie saucelabs — fügen Sie dies oben in Ihrer `sauce_google_test.js`-Datei ein, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue SauceLabs-Instanz, indem Sie folgendes direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugriffsschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password` und nicht `accessKey` verwendet). Da Sie sie jetzt zweimal verwenden, möchten Sie vielleicht ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver`-Variable definieren (direkt unter der `build()`-Zeile), fügen Sie den folgenden Block hinzu — dies erhält die richtige `sessionID` des Treibers, die wir benötigen, um Daten an das geöffneten Job zu schreiben (Sie sehen es in Aktion im nächsten Codeblock):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Schließlich ersetzen Sie den `driver.sleep(2000)`-Block nahe dem Ende des Codes durch folgenden:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, abhängig davon, ob der Test bestanden oder fehlgeschlagen ist. Wir haben dann die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test Dashboard](https://app.saucelabs.com/dashboard/tests)-Seite zurückkehren, sollten Sie sehen, dass Ihr neuer Auftrag nun die aktualisierten Daten daran angehangen hat:

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Service wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Lassen Sie uns sehen, wie man das macht.

1. Der Selenium-Remote-Server erfordert Java, um zu laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Download-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie als nächstes den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer (d.h. keine Beta), und aus der Liste wählen Sie eine Datei, die mit "selenium-server-standalone" beginnt. Wenn der Download abgeschlossen ist, legen Sie die Datei an einem sinnvollen Ort ab, beispielsweise in Ihrem Heimatverzeichnis. Wenn Sie den Speicherort nicht bereits zu Ihrer `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Setting up Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Führen Sie den eigenständigen Server durch Eingabe des folgenden in einem Terminal auf Ihrem Servercomputer:

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen so, dass er genau der Datei entspricht, die Sie haben).

4. Der Server wird auf `http://localhost:4444/wd/hub` ausgeführt — versuchen Sie jetzt, dorthin zu gehen, um zu sehen, was Sie bekommen.

Da wir den Server nun laufen haben, erstellen wir einen Demo-Test, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und benennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile des Codes (die mit `const driver = ...` beginnt) wie folgt:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten sehen, dass er wie erwartet läuft; diesmal jedoch werden Sie ihn auf dem eigenständigen Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Dies ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten, und dann Ihre Skripte verbinden, indem Sie die URL verwenden, die Sie wählen, um sie darzustellen.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie Sauce Labs mit {{Glossary("continuous_integration", "Continuous Integration")}} (CI) Tools zu integrieren — das ist sinnvoll, da es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen und nur neue Änderungen an Ihrem Code-Repository übergeben, wenn die Tests bestanden werden.

Es liegt außerhalb des Geltungsbereichs, dieses Thema im Detail in diesem Artikel zu behandeln, aber wir würden empfehlen, mit Travis CI zu beginnen — es ist wahrscheinlich das einfachste CI-Tool, um damit zu beginnen und hat eine gute Integration mit Webtools wie GitHub und Node.

Zum Einstieg, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie ein kontinuierliches Testing mit **codeloser Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genügend Einblicke in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie beginnen können, Ihre eigenen automatisierten Tests zu schreiben.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
