---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Automatisierungsumgebung einrichten
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie denjenigen integrieren können, die im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">grundlegenden Prinzipien des Cross-Browser-Testing</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">der automatisierten Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zeigen, wie Sie eine Selenium-Testumgebung lokal einrichten und Tests damit ausführen, sowie wie Sie sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integrieren.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das am weitesten verbreitete Tool zur Browser-Automatisierung. Es gibt andere Möglichkeiten, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser sendet, um diesen zu automatisieren. WebDriver führt Aktionen aus wie "diese Webseite öffnen", "über dieses Element auf der Seite fahren", "diesen Link anklicken", "prüfen, ob der Link diese URL öffnet" usw. Das ist ideal für das Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Für die meisten beliebten Umgebungen ist ein Paket oder Framework verfügbar, das WebDriver und die erforderlichen Bindungen für die Kommunikation mit WebDriver in dieser Sprache installiert, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/) für mehr Details zur Selenium-Einrichtung für verschiedene Sprachen.

Verschiedene Browser erfordern unterschiedliche Treiber, um WebDriver die Kommunikation mit und Steuerung dieser zu ermöglichen. Siehe [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für weitere Informationen, wo Sie Browser-Treiber erhalten können usw.

Wir werden uns darauf konzentrieren, Selenium-Tests mit Node.js zu schreiben und auszuführen, da es schnell und einfach einzurichten ist und für Frontend-Entwickler eine vertrautere Umgebung darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, sehen Sie sich auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für nützliche Links an.

### Selenium in Node einrichten

1. Richten Sie zunächst ein neues npm-Projekt ein, wie im letzten Kapitel in [Einrichtung von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es anders, z. B. `selenium-test`.
2. Wir müssen als nächstes ein Framework installieren, das uns erlaubt, Selenium aus Node heraus zu nutzen. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium wählen, da die Dokumentation relativ aktuell und gut gepflegt zu sein scheint. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus, und achten Sie darauf, dass Sie sich innerhalb Ihres Projektordners befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch ratsam, diese Schritte zu befolgen, selbst wenn Sie selenium-webdriver zuvor schon installiert haben und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als Nächstes müssen Sie die relevanten Treiber herunterladen, damit WebDriver die Browser kontrollieren kann, die Sie testen möchten. Details, wo Sie sie erhalten können, finden Sie auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Einige der Browser sind offensichtlich spezifisch für Betriebssysteme, aber wir werden bei Firefox und Chrome bleiben, da diese auf allen gängigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einem Ort, der relativ einfach zugänglich ist, wie das Verzeichnis im Stammverzeichnis Ihres Benutzerordners.
3. Fügen Sie den Speicherort der `chromedriver`- und `geckodriver`-Treiber zu Ihrer Systemumgebungsvariable `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihrer Festplatte zu dem Verzeichnis sein, das die Treiber enthält. Wenn wir zum Beispiel einen macOS-Computer verwenden würden, unser Benutzername Bob wäre und wir unsere Treiber im Stamm unseres Heimordners ablegen, wäre der Pfad `/Users/Bob`.

> [!NOTE]
> Zur Erinnerung: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Das ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen. Siehe [Versteckte Dateien auf macOS anzeigen/verbergen](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie unten in Ihrer Datei Folgendes ein (aktualisieren Sie den Pfad, wie er auf Ihrem System tatsächlich ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei und starten Sie Ihr Terminal/Kommandozeilenfenster neu, um Ihre Bash-Konfiguration neu zu laden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie den folgenden Befehl in Ihrem Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten sehen, wie er im Terminal ausgegeben wird.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows zu setzen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem System-Pfad hinzufügen?](https://www.itprotoday.com/)

Versuchen wir nun einen schnellen Test, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Füllen Sie sie mit folgendem Inhalt und speichern Sie sie dann:

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
   > Diese Funktion ist ein {{Glossary("IIFE", "IIFE")}} (Sofort ausgeführter Funktionsausdruck).

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, wie sich eine Instanz von Firefox automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und der Suchknopf wird geklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen und wenn dieser "webdriver bei DuckDuckGo" ist, geben wir eine Nachricht zurück, die besagt, dass der Test bestanden wurde.

Dann warten wir 2 Sekunden, nach denen WebDriver die Firefox-Instanz schließt und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie davon abhält, den Test gleichzeitig auf mehreren Browsern auszuführen. Versuchen wir dies!

1. Erstellen Sie eine weitere neue Datei innerhalb Ihres Projektverzeichnisses namens `duck_test_multiple.js`. Sie können gerne einige der Referenzen auf andere Browser ändern, sie entfernen usw., je nachdem, auf welchen Browsern Sie in Ihrem Betriebssystem testen können. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug auf den zu verwendenden String in der `.forBrowser()`-Methode für andere Browser, siehe die [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie ihn dann:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht aus einer verifizierten Quelle heruntergeladen wurde. Wenn Sie dies erhalten, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Beispiel auf dem Mac: <kbd>Ctrl</kbd> + Klicken Sie auf die App, wählen _Öffnen_ und wählen erneut _Öffnen_ im angezeigten Dialogfenster.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion, `searchTest()`, eingebunden haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, sodass der Test auf allen ausgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax näher betrachten.

## WebDriver-Syntax-Crashkurs

Schauen wir uns einige der wichtigsten Merkmale der WebDriver-Syntax an. Für vollständigere Details sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die viele Beispiele zum Lernen enthält, die in verschiedenen Sprachen geschrieben sind.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einfügen und den `Builder`-Konstruktor und die `Browser`-Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, und hängen die `forBrowser()`-Methode an, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten.
Die Methode `build()` wird am Ende angehängt, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser festzulegen. Beispielsweise können Sie eine bestimmte Version und ein Betriebssystem zum Testen in der `forBrowser()`-Methode angeben:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch unter Verwendung einer Umgebungsvariablen festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, der es uns ermöglicht, diesen Code zu erkunden, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

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

### Das Dokument abrufen, das Sie testen möchten

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den darunter befindlichen Abschnitten.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie einen Remote-Server verwenden, um Ihre Tests auszuführen (siehe später), wird Ihr Code brechen, wenn Sie lokale Pfade verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalterpfad mit einem echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und versuchen Sie es auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Nachdem wir nun ein Dokument zum Testen haben, müssen wir in irgendeiner Weise mit ihm interagieren, was normalerweise zunächst das Auswählen eines bestimmten Elements beinhaltet, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die `findElement()`-Methode, die eine Auswahlmethode als Parameter akzeptiert. Beispielsweise um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element auszuwählen, ist CSS — die `By.css()`-Methode ermöglicht es Ihnen, ein Element mithilfe eines CSS-Selektors auszuwählen.

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

### Ihr Element testen

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den Elementen darin zu interagieren. Nützliche, gängige Beispiele finden Sie ab [Abrufen von Textwerten](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text innerhalb unseres Buttons abrufen wollten, könnten wir dies tun:

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

Führen Sie das Beispiel mit `node` auf die gleiche Weise aus, wie Sie es zuvor getan haben. Sie sollten sehen, wie die Textbeschriftung des Buttons in der Konsole gemeldet wird.

Lassen Sie uns etwas Nützlicheres tun. Ersetzen Sie den vorherigen Codeeintrag durch `button.click();`, wie unten gezeigt:

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

Versuchen Sie erneut, Ihren Test auszuführen; der Button wird geklickt, und ein `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, es erneut zu testen:

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

Versuchen wir als Nächstes, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, Ihren Test erneut durchzuführen:

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

Sie können Tastendrücke senden, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Auf etwas warten, das abgeschlossen werden soll

Es gibt Zeiten, in denen Sie WebDriver dazu bringen möchten, auf etwas zu warten, das abgeschlossen werden soll, bevor es fortfährt. Beispielsweise, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite fertig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, da der Test sonst wahrscheinlich fehlschlagen wird.

In unserem `duck_test_multiple.js`-Test haben wir beispielsweise diese Zeile enthalten:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Zeit angibt, auf die gewartet werden soll, in Millisekunden — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das Schlüsselwort `await`, um die umschließende Funktion zu pausieren, bis das Promise aufgelöst ist, danach wird der folgende Code ausgeführt.

Wir könnten die `sleep()`-Methode auch zu unserem `quick_test.js`-Test hinzufügen — versuchen Sie, Ihre `example()`-Funktion so zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver füllt jetzt das erste Formulartextfeld aus, wartet eine Sekunde und testet dann, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um den Wert seines `value`-Attributs abzurufen. Danach wird eine Nachricht an die Konsole gesendet, um Erfolg/Fehler zu berichten.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeit wiederholt testet und dann den Code weiter ausführt. Diese nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), welche allgemeine Bedingungen definiert, die zusammen mit `wait()` verwendet werden.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie den Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mit der `driver.quit()`-Methode herunterfahren, um sicherzustellen, dass sie nicht unnötig Ressourcen nutzen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Nun, wenn Sie es ausführen, sollten Sie sehen, wie der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests wieder herunterfährt.

## Beste Praktiken beim Testen

Es wurde viel über bewährte Methoden zum Schreiben von Tests verfasst. Sie finden einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), stellen Sie sicher, dass Sie Lokalisierer und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern — wenn Sie ein testbares Element haben, auf dem Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder eine Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, der sich nicht einfach bei der nächsten Seiteniteration ändert. Sie möchten Ihre Tests so nicht anfällig wie möglich machen, d.h. sie sollen nicht einfach brechen, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine einzige Sache testen, was es einfach macht, im Auge zu behalten, welche Tests Datei welche Kriterien testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist herauszufinden, was er tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` ein wenig besser?
3. Autonome Tests schreiben: Jeder Test sollte für sich alleine funktionieren und nicht von anderen Tests abhängig sein, um zu funktionieren.

Zusätzlich sollten wir die Testergebnisse/Berichte erwähnen — wir haben in unseren obigen Beispielen Ergebnisse mit einfachen `console.log()`-Anweisungen gemeldet, aber alles wird in JavaScript gemacht, sodass Sie jedes gewünschte Test- und Berichterstattungssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Werkzeug. Lassen Sie uns ein kurzes Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie sie in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Versprechenskette, um alle erforderlichen Schritte in unserem Test auszuführen — die Versprechen-basierten Methoden, die WebDriver verwendet, müssen für das ordnungsgemäße Funktionieren aufgelöst werden.
2. Installieren Sie das Mocha-Testwerkzeug, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können nun den Test (und alle anderen, die Sie in Ihren `test`-Ordner legen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das Flag `--no-timeouts` einschließen, um sicherzustellen, dass Ihre Tests nicht wegen Mocha's willkürlicher Zeitüberschreitung (die 3 Sekunden beträgt) fehlschlagen.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test/Assertion-Tools einrichtet.

## Ausführen von Fern-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit ein paar mehr festgelegten Funktionen, darunter die Fähigkeiten des Browsers, den Sie testen möchten, die Adresse des Servers und die erforderlichen Benutzeranmeldeinformationen (falls vorhanden), um darauf zuzugreifen.

### BrowserStack

Erstellen wir ein Beispiel, um zu zeigen, wie man einen Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausführt:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei mit dem Namen `bstack_duck_test.js`.
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

3. Holen Sie sich Ihre Benutzername- und Zugriffsschlüssel-Details von Ihrer BrowserStack [Konto- & Profil-Details-Seite](https://www.browserstack.com/accounts/profile/details) (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihren tatsächlichen Benutzername- und Zugriffsschlüsselwerten (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung, irgendeine Form von Ergebnisberichterstattungsmechanismus einzuschließen!

6. Wenn Sie nun zum [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details einschließlich einer Videoaufzeichnung des Tests und zahlreichen detaillierten Protokollen mit Informationen dazu:
   ![Ergebnisse von BrowserStack automatisiertem Test](bstack_automated_results.png)

> [!NOTE]
> Die _Ressourcen_-Menüoption im Browserstack-Automations-Dashboard enthält eine Fülle nützlicher Informationen zur Nutzung von BrowserStack zur Durchführung automatisierter Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Programmgesteuertes Ausfüllen der BrowserStack-Testdetails

Sie können die BrowserStack-REST-API und andere Funktionen verwenden, um Ihren Test mit weiteren Details zu versehen, wie z.B. ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Lassen Sie uns unser `bstack_duck_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```js
   npm install axios
   ```

2. Importieren Sie das axios-Modul, sodass wir es verwenden können, um Anfragen an die BrowserStack-REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Jetzt aktualisieren wir unser `capabilities`-Objekt, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, und vergessen Sie nicht, am Ende der vorherigen Zeile ein Komma zu setzen (Sie können die Build- und Projektnamen variieren, um die Tests in unterschiedlichen Fenstern im BrowserStack-Automations-Dashboard zu organisieren):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Danach abrufen wir die `sessionId` der aktuellen Sitzung und verwenden sie (zusammen mit Ihrem `userName` und `accessKey`), um die URL zu erstellen, an die Anfragen gesendet werden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver` Objekt erstellt (beginnt mit `const driver = new Builder()`):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if ... else`-Block nahe dem unteren Ende des Codes, um bei Testpassagen oder -fehlschlägen entsprechende API-Aufrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem Bestanden- oder Fehlgeschlagen-Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, jedoch mit Ihren benutzerdefinierten Daten darin enthalten. Es zeigt einen Status von "BESTANDEN" und den durch die REST-API gemeldeten Grund für das Bestehen an:

![BrowserStack benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Schauen wir uns ein Beispiel an, das zeigt, wie man Selenium-Tests remote auf Sauce Labs ausführt:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei mit dem Namen `sauce_google_test.js`.
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

3. Holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel aus Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihrem tatsächlichen Benutzernamen und Zugriffsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung eines Ergebnisberichterstattungsmechanismus!

5. Wenn Sie jetzt zum [Sauce Labs Automated Test Dashboard](https://app.saucelabs.com/dashboard/tests) gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Plattformkonfigurator von Sauce Labs](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool zum Erzeugen von Fähigkeitsobjekten, die an Ihre Treiberinstanzen übergeben werden, basierend auf dem Browser/OS, das Sie testen möchten.

> [!NOTE]
> Für nützliche Details zum Testen mit Sauce Labs und Selenium besuchen Sie [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/), und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmgesteuertes Ausfüllen der Sauce Labs Testdetails

Sie können die Sauce Labs API verwenden, um Ihren Test mit weiteren Details zu versehen, wie z.B. ob er bestanden wurde, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie das Node Sauce Labs Wrapper mit dem folgenden Befehl (falls Sie es nicht bereits für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren von saucelabs — fügen Sie dies oben in Ihrer `sauce_google_test.js` Datei ein, direkt unter den vorherigen Variablen-Definitionen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie das folgende direkte darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie wieder die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihren tatsächlichen Benutzernamen und Zugriffsschlüsseln (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password` und nicht `accessKey` verwendet). Da Sie dies jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die Variable `driver` definieren (direkt unterhalb der `build()`-Zeile), fügen Sie den folgenden Block hinzu — dies besorgt die richtige Treiber-`sessionID`, die wir benötigen, um Daten an den Auftrag zu übermitteln (Sie können ihn im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Schließlich den `driver.sleep(2000)`-Block nahe dem unteren Ende des Codes durch den folgenden ersetzen:

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

Hier setzen wir eine `testPassed`-Variable auf `true` oder `false`, abhängig davon, ob der Test bestanden wurde oder nicht, und verwenden dann die `saucelabs.updateJob()`-Methode, um die Details zu aktualisieren.

Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test Dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückkehren, sollten Sie sehen, dass Ihr neuer Auftrag jetzt die aktualisierten Daten darin enthält:

![Sauce Labs aktualisierte Auftragsinformation](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Sehen wir uns an, wie das geht.

1. Der Selenium-Remote-Server benötigt Java zum Ausführen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, sobald es heruntergeladen ist.
2. Laden Sie als Nächstes den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version aus (d.h. keine Beta) und auf der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Sobald dieser heruntergeladen wurde, legen Sie ihn an einem sinnvollen Ort ab, wie Ihrem Benutzerverzeichnis. Wenn Sie den Standort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie das jetzt (siehe den Abschnitt [Selenium in Node einrichten](#selenium_in_node_einrichten)).
3. Führen Sie den Standalone-Server aus, indem Sie Folgendes in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (Aktualisieren Sie den `.jar`-Dateinamen), sodass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt, dorthin zu gehen, um zu sehen, was Sie bekommen.

Jetzt, da wir den Server zum Laufen gebracht haben, erstellen wir ein Demo-Test, das auf dem Remote-Selenium-Server läuft.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`. Legen Sie diese in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Zeile (beginnend mit `const driver = ...`) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, wie er wie erwartet läuft; diesmal jedoch werden Sie es auf dem Standalone-Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben das lokal getestet, aber Sie könnten es auf fast jedem Server einrichten, zusammen mit den relevanten Browser-Treibern, und dann Ihre Skripts mit der URL verbinden, die Sie verwenden möchten, um sie darauf zugreifen zu lassen.

## Integration von Selenium mit CI-Tools

Ein weiterer Aspekt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit kontinuierlichen Integrations-Tools (CI-Tools) zu verbinden — das ist nützlich, da es Ihnen ermöglicht, Ihre Tests über ein CI-Tool durchzuführen und neue Änderungen nur in Ihr Code-Repository einzuchecken, wenn die Tests bestanden werden.

Es liegt außerhalb des Umfangs dieses Artikels, um auf diesen Bereich im Detail einzugehen, aber wir würden empfehlen, mit Travis CI zu beginnen — das ist wahrscheinlich das einfachste CI-Tool, um loszulegen, und bietet eine gute Integration mit Web-Tools wie GitHub und Node.

Zum Einstieg siehe beispielsweise:

- [Travis CI für völlige Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [LambdaTest mit Travis CI verwenden](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [LambdaTest mit CircleCI verwenden](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [LambdaTest mit Jenkins verwenden](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Sauce Labs mit Travis CI verwenden](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie ununterbrochene Tests mit **codelosem Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und sollte Ihnen einen ausreichenden Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
