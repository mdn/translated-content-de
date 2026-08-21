---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Automatisierungsumgebung einrichten
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel werden wir Ihnen zeigen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie `selenium-webdriver` für Node ausführen können. Wir werden auch untersuchen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie in dem vorhergehenden Artikel erwähnt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>-,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>- und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>-Sprachen; eine Vorstellung
        der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie Sie eine Selenium-Testumgebung lokal einrichten und Tests damit ausführen können, und wie Sie diese mit Tools wie Sauce Labs und BrowserStack integrieren können.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Möglichkeiten, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Anrufe an einen Browser tätigt, um ihn zu automatisieren. Diese Aktionen umfassen "öffne diese Webseite", "bewege über dieses Element auf der Seite", "klicke auf diesen Link", "überprüfe, ob der Link diese URL öffnet" usw. Dies ist ideal, um automatisierte Tests auszuführen.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten beliebten Umgebungen bieten ein Paket oder Framework an, das WebDriver und die erforderlichen Bindungen installiert, um mit WebDriver in dieser Sprache zu kommunizieren, z.B. Java, C#, Ruby, Python, JavaScript (Node), usw. Weitere Einzelheiten zum Setup von Selenium für verschiedene Sprachen finden Sie im Artikel [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen darüber, wo Sie Browser-Treiber erhalten, finden Sie unter [Platforms Supported by Selenium](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da dies schnell und einfach einzurichten ist und eine bekanntere Umgebung für Front-End-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden können, schauen Sie sich auch [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichten von Selenium in Node

1. Zuerst richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Setting up Node and npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, mit dem wir über Node mit Selenium arbeiten können. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium verwenden, da die Dokumentation ziemlich aktuell und gut gepflegt zu sein scheint. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver zuvor installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die entsprechenden Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Detaillierte Informationen darüber, wo Sie sie finden, finden Sie auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (sehen Sie sich die Tabelle im ersten Abschnitt an). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir werden bei Firefox und Chrome bleiben, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einem Ort, der leicht navigierbar ist, wie das Stammverzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Speicherort der `chromedriver`- und `geckodriver`-Treiber Ihrer System-`PATH`-Variablen hinzu. Dies sollte ein absoluter Pfad vom Stammverzeichnis Ihrer Festplatte zum Verzeichnis mit den Treibern sein. Zum Beispiel wäre, wenn wir einen macOS-Computer benutzen, unser Benutzername bob wäre und wir unsere Treiber im Stammverzeichnis unseres Heimordners ablegen würden, der Pfad `/Users/bob`.

> [!NOTE]
> Noch einmal zur Wiederholung: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie keine versteckten Dateien sehen können, müssen Sie diese anzeigen. Siehe [Show/Hide hidden files in macOS](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu).
2. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend, wie er auf Ihrem Computer tatsächlich ist):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, dann starten Sie Ihr Terminal bzw. Ihre Eingabeaufforderung neu, um Ihre Bash-Konfiguration neu anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variablen sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es dann im Terminal ausgegeben bekommen.

> [!NOTE]
> Um Ihre `PATH`-Variable auf Windows zu setzen, folgen Sie den Anweisungen unter [How can I add a new folder to my system path?](https://stackoverflow.com/questions/44272416/add-a-folder-to-the-path-environment-variable-in-windows-10-with-screenshots)

Lassen Sie uns einen kurzen Test durchführen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test.js`:
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
   > Diese Funktion ist ein {{Glossary("IIFE", "IIFE")}} (Sofort ausgeführter Funktionsausdruck).

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass sich eine Instanz von Firefox automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und die Suchschaltfläche wird geklickt. WebDriver wird dann eine Sekunde warten; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" ist, wird eine Nachricht zurückgegeben, um anzugeben, dass der Test bestanden wurde.

Dann warten wir 2 Sekunden, danach wird WebDriver die Firefox-Instanz herunterfahren und stoppen.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie daran hindert, den Test in mehreren Browsern gleichzeitig auszuführen. Lassen Sie uns dies versuchen!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können gerne die Verweise auf einige der anderen Browser ändern, entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem zum Testen zur Verfügung haben. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Was die zu verwendende Zeichenfolge in der `.forBrowser()`-Methode für andere Browser betrifft, siehe die [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie sie dann:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, befolgen Sie die gegebene Anweisung und versuchen Sie es erneut.
>
> Sie erhalten möglicherweise eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie dies erhalten, können Sie diese Sicherheitseinstellung nur für die betreffende Treiber-App überschreiben. Klicken Sie zum Beispiel auf einem Mac mit <kbd>Strg</kbd> auf die App, wählen Sie _Öffnen_ und wählen dann im erscheinenden Dialogfeld erneut _Öffnen_.

Also haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion `searchTest()` eingepackt haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, damit der Test auf allen ausgeführt wird.

Lassen Sie uns weitergehen und die Grundlagen der WebDriver-Syntax im Detail betrachten.

## WebDriver-JavaScript-Syntax Schnellkurs

Lassen Sie uns einige wichtige Funktionen der WebDriver-Syntax ansehen. Für umfassendere Details sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die Selenium-Hauptdokumentation's [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die zahlreiche Beispiele enthält, aus denen Sie in verschiedenen Sprachen lernen können.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver` Modul einbinden und den `Builder` Konstruktor und die `Browser` Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um eine neue Instanz eines Treibers zu erstellen und die `forBrowser()` Methode zu verketten, um anzugeben, mit welchem Browser Sie mit diesem Builder testen möchten.
Die `build()` Methode wird am Ende angehängt, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Es ist möglich, für zu testende Browser spezifische Konfigurationsoptionen zu setzen, zum Beispiel können Sie eine spezifische Version und ein Betriebssystem zum Testen in der `forBrowser()`-Methode angeben:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariablen setzen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, um uns diesen Code anzusehen, wenn wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Test-Projektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

### Das zu testende Dokument abrufen

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()` Methode der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den darunter.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist - wenn Sie beginnen, einen Remote-Server zum Ausführen Ihrer Tests zu verwenden (siehe später), wird Ihr Code brechen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()` Funktion wie folgt, ersetzen Sie den Platzhalterpfad mit einem echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und probieren Sie es aus:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Nun, da wir ein zu testendes Dokument haben, müssen wir in irgendeiner Weise mit ihm interagieren, was normalerweise bedeutet, dass wir zuerst ein bestimmtes Element auswählen, um es zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die `findElement()` Methode, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Arten, ein Element zu finden, ist über CSS - die `By.css()` Methode erlaubt es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie jetzt Ihre `example()` Funktion wie folgt und probieren Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Web-Dokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche Beispiele sehen Sie ab [Getting text values](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) auf den WebDriver-Dokumenten.

Wenn wir den Text innerhalb unserer Schaltfläche abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt am Ende der `example()` Funktion hinzu, wie unten gezeigt:

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

Führen Sie das Beispiel mit `node` auf die gleiche Weise aus wie zuvor. Sie sollten das Textlabel der Schaltfläche im Konsolenfenster sehen.

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

Versuchen Sie, Ihren Test erneut auszuführen; die Schaltfläche wird geklickt und ein `alert()` Popup sollte erscheinen. Zumindest wissen wir, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()` Funktion wie folgt und probieren Sie es erneut:

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

Sie können Tastendrücke, die nicht durch normale Zeichen dargestellt werden können, durch Eigenschaften des `Key`-Objekts absenden. Zum Beispiel haben wir oben das folgende verwendet, um zwischen den Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Auf das vollständige Laden warten

Es gibt Zeiten, in denen Sie WebDriver warten lassen möchten, bis etwas abgeschlossen ist, bevor Sie fortfahren. Zum Beispiel, wenn Sie eine neue Seite laden, möchten Sie, dass die DOM der Seite fertig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, sonst schlägt der Test wahrscheinlich fehl.

In unserem `duck_test_multiple.js` Test zum Beispiel haben wir diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()` Methode akzeptiert einen Wert, der die Zeit in Millisekunden angibt, auf die gewartet werden soll — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit erfüllt wird. Wir verwenden das `await` Schlüsselwort, um die umgebende Funktion zu pausieren, bis das Promise erfüllt ist, danach wird der nachfolgende Code ausgeführt.

Wir könnten auch eine `sleep()` Methode zu unserem `quick_test.js` Test hinzufügen — versuchen Sie, Ihre `example()` Funktion so zu aktualisieren:

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

Führen Sie den aktualisierten Code aus. WebDriver füllt jetzt das erste Formularfeld aus, wartet eine Sekunde und überprüft dann, ob es ausgefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um den `value`-Attributwert abzurufen. Anschließend wird eine Nachricht an die Konsole gesendet, um Erfolg/Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), welche eine Bedingung für eine bestimmte Zeit wiederholt, und dann den Code weiter ausführt. Diese nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), welche gängige Bedingungen zum Einsatz mit `wait()` definiert.

### Treiber nach der Verwendung herunterfahren

Nachdem Sie den Test abgeschlossen haben, sollten Sie alle Treiberinstanzen, die Sie geöffnet haben, mit der `driver.quit()` Methode herunterfahren, um sicherzustellen, dass sie keine Ressourcen unnötig weiter nutzen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie den Test und die Browserinstanz, die sich nach Abschluss des Tests wieder schließt, sehen können.

## Test Best Practices

Es wurde viel über Best Practices für das Schreiben von Tests geschrieben. Sie können einige gute Hintergrundinformationen bei [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), stellen Sie sicher, dass Sie Lokatoren und Objekte verwenden, die sich wahrscheinlich nicht ändern - wenn Sie ein testbares Element haben, das Sie testen möchten, stellen Sie sicher, dass es eine stabile ID oder eine Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, der nicht einfach mit der nächsten Site-Iteration geändert wird. Sie möchten Ihre Tests so wenig anfällig wie möglich machen, d.h. sie brechen nicht einfach ab, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, damit es einfach ist, den Überblick zu behalten, welche Testdatei welches Kriterium testet. Der `duck_test.js` Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzelne Sache testet - ob der Titel einer Suchergebnisseite richtig gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist, herauszufinden, was er tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte eigenständig funktionieren und nicht von anderen Tests abhängig sein, um zu funktionieren.

Darüber hinaus sollten wir die Testergebnisse/Berichterstattung erwähnen - in unseren obigen Beispielen haben wir Ergebnisse mit einfachen `console.log()`-Anweisungen berichtet, aber dies ist alles in JavaScript, also können Sie jedes beliebige Testlauf- und Berichtssystem verwenden, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein kurzes Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Promises, um alle erforderlichen Schritte in unserem Test auszuführen - die von WebDriver verwendeten methodenbasierten Methoden müssen aufgelöst werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das mocha Test-Framework, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) nun mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts` Flag einschließen, um sicherzustellen, dass Ihre Tests nicht aufgrund von Mochas willkürlichen Timeout (welches 3 Sekunden beträgt) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele zur Einrichtung verschiedener Kombinationen von Test/Werkzeug-Tools.

## Remote-Tests ausführen

Es stellt sich heraus, dass es nicht viel schwieriger ist, Tests auf Remote-Servern auszuführen als lokal. Sie müssen nur Ihre Treiberinstanz erstellen, aber mit ein paar zusätzlichen Funktionen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und den Benutzeranmeldeinformationen, die Sie benötigen (falls erforderlich), um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, um zu zeigen, wie man einen Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausführt:

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

3. Holen Sie sich Ihren Benutzernamen und Zugangsschlüssel von Ihrer BrowserStack [Account & Profile details page](https://www.browserstack.com/accounts/profile/details) (siehe _Benutzername und Zugangsschlüssel_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugangsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgesandt. Dies zeigt, wie wichtig es ist, eine Berichtsmethode für Ergebnisse einzuschließen!

6. Wenn Sie nun zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückgehen, sehen Sie Ihren Test aufgelistet, mit Details, einschließlich einer Videoaufnahme des Tests und mehreren detaillierten Protokollen mit Informationen dazu:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die _Ressourcen_-Option im BrowserStack Automatisierungs-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung für die Durchführung automatisierter Tests. Siehe [Selenium with NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für Node-spezifische Informationen.

#### BrowserStack-Testdetails programmatisch ausfüllen

Sie können die BrowserStack-REST-API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu versehen, wie beispielsweise, ob er bestanden wurde, warum er bestanden oder welchem Projekt der Test angehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Lassen Sie uns unseren `bstack_duck_test.js` Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack-REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren Sie nun Ihr `capabilities` Objekt, um einen Projektnamen einzubeziehen - fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu und denken Sie daran, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können die build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungs-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Anschließend werden wir die `sessionId` der aktuellen Sitzung abrufen und mit ihr (zusammen mit Ihrem `userName` und `accessKey`) die URL zum Senden von Anfragen zusammensetzen, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver` Objekt erstellt (der mit `const driver = new Builder()` beginnt) :

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if...else` Block nahe dem Ende des Codes, um abhängig davon, ob der Test bestanden oder fehlgeschlagen ist, entsprechende API-Anrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Anruf an BrowserStack, um den Test mit einem Bestanden- oder Fehlgeschlagen-Status zu aktualisieren und einem Grund für das Ergebnis.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Sitzung wie zuvor sehen, jedoch mit Ihren benutzerdefinierten Daten, die daran angehängt sind. Es zeigt einen Status "PASSED" (Bestanden) an und den von der REST API gemeldeten Grund für das Bestehen:

![BrowserStack Custom Results](bstack_custom_results.png)

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

3. Holen Sie sich Ihren Benutzernamen und Zugangsschlüssel von Ihren [Sauce Labs Benutzer-Einstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` Platzhalter im Code durch Ihren tatsächlichen Benutzernamen und Zugangsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgesandt. Dies zeigt, wie wichtig es ist, eine Berichtsmethodik für Ergebnisse einzuschließen!

5. Wenn Sie nun zu Ihrer [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen:
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Das [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zum Generieren von Kapazitätsobjekten, die Sie Ihren Treiberinstanzen bereitstellen, basierend auf dem Browser/OS, das Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zu Tests mit Sauce Labs und Selenium, sehen Sie sich [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) an.

#### Sauce Labs Testdetails programmatisch ausfüllen

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, wie beispielweise, ob er bestanden wird, den Namen des Tests usw. Sauce Labs kennt diese Details nicht standardmäßig!

Um dies zu tun, müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl (falls Sie es für dieses Projekt noch nicht getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie `saucelabs` — setzen Sie dies an den Anfang Ihrer `sauce_google_test.js` Datei, direkt unterhalb der vorherigen Variablendeklarationen:

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

   Ersetzen Sie nochmals die `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` Platzhalter im Code mit Ihrem tatsächlichen Benutzernamen und Zugangsschlüssel (beachten Sie, dass das `saucelabs` npm-Paket etwas verwirrend `password` statt `accessKey` verwendet). Da Sie diese Werte jetzt mehrmals verwenden, können Sie ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, wo Sie die `driver` Variable definieren (direkt unter der `build()` Zeile), fügen Sie den folgenden Block hinzu — dies bekommt die korrekte Treiber-`sessionID`, die wir benötigen, um Daten an den Job zu schreiben (Sie können es im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)` Block nahe dem Ende des Codes durch Folgendes:

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

Hier haben wir eine `testPassed` Variable auf `true` oder `false` gesetzt, abhängig davon, ob der Test bestanden oder fehlgeschlagen ist, und dann die `saucelabs.updateJob()` Methode verwendet, um die Details zu aktualisieren.

Wenn Sie nun zu Ihrer [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sollten Sie sehen, dass Ihr neuer Job jetzt die aktualisierten Daten daran angehängt hat:

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie auch Ihren eigenen Remote-Test-Server einrichten. Lassen Sie uns sehen, wie das geht.

1. Der Selenium Remote Server erfordert Java zum Ausführen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen wurde.
2. Als nächstes laden Sie den neuesten [Selenium-Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dies fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (nicht eine Beta) und aus der Liste wählen Sie eine Datei aus, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen wurde, legen Sie es an einem sinnvollen Ort ab, wie in Ihrem Benutzerverzeichnis. Wenn Sie noch nicht den Speicherort zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie Folgendes in ein Terminal auf Ihrem Servercomputer eingeben:

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen) so dass es genau mit dem übereinstimmt, was Sie haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie bekommen.

Jetzt, da wir den Server ausführen, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote Selenium-Server laufen wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile des Codes (die mit `const driver = …` beginnt) wie folgt:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten sehen, dass er wie erwartet ausgeführt wird; diesmal jedoch werden Sie ihn auf dem Standalone-Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf nahezu jedem Server mit den entsprechenden Browser-Treibern einrichten und dann Ihre Skripte mit der URL verbinden, an der Sie es bereitstellen möchten.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie Sauce Labs mit {{Glossary("continuous_integration", "Continuous Integration")}}-Tools (CI) zu integrieren - das ist nützlich, da es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen und nur neue Änderungen in Ihr Code-Repository übernehmen können, wenn die Tests bestehen.

Es liegt außerhalb des Geltungsbereichs, dieses Gebiet in diesem Artikel im Detail zu betrachten, aber wir würden Ihnen empfehlen, mit Travis CI zu beginnen - dies ist wahrscheinlich das einfachste CI-Tool zum Einstieg und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js-Projekt aufbauen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Sauce Labs mit Travis CI verwenden](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeless-Automatisierung** durchführen möchten, können Sie [Endtest](https://endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Sie genug Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, um mit dem Schreiben Ihrer eigenen automatisierten Tests zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
