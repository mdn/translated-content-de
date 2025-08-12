---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichten der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen können. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den in dem vorherigen Artikel diskutierten integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testings</a> und des
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests mit dieser ausführt sowie wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Möglichkeiten, aber der beste Weg, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser macht, um diesen zu automatisieren, Aktionen wie „öffnen Sie diese Webseite“, „bewegen Sie sich über dieses Element auf der Seite“, „klicken Sie auf diesen Link“, „überprüfen Sie, ob der Link diese URL öffnet“ usw. auszuführen. Dies ist ideal für die Ausführung automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten beliebten Umgebungen verfügen über ein Paket oder Framework, das WebDriver und die erforderlichen Bindungen installiert, um mit WebDriver zu kommunizieren, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/) für weitere Details zu Selenium-Setups für verschiedene Sprachen.

Verschiedene Browser benötigen unterschiedliche Treiber, um WebDriver zu ermöglichen, mit ihnen zu kommunizieren und sie zu steuern. Siehe [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für weitere Informationen, wo Sie Browser-Treiber beziehen können.

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach zu starten ist und eine vertrautere Umgebung für Frontend-Entwickler bietet.

> [!NOTE]
> Wenn Sie erfahren möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden können, sehen Sie sich auch [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichten von Selenium in Node

1. Richten Sie zunächst ein neues npm-Projekt ein, wie im letzten Kapitel in [Setting up Node and npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als Nächstes müssen wir ein Framework installieren, das es uns ermöglicht, mit Selenium von innen Node zu arbeiten. Wir wählen seleniums offizielles [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation ziemlich aktuell zu sein scheint und es gut gepflegt ist. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Optionen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist dennoch ratsam, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver zuvor installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als Nächstes müssen Sie die relevanten Treiber herunterladen, um WebDriver die Steuerung der Browser zu ermöglichen, die Sie testen möchten. Sie finden Details dazu, wo Sie sie auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt) erhalten können. Einige der Browser sind offensichtlich betriebssystemspezifisch, aber wir werden bei Firefox und Chrome bleiben, da diese auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einen leicht zugänglichen Ort, wie das Root-Verzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Speicherort der `chromedriver`- und `geckodriver`-Treiber zu Ihrer systemweiten `PATH`-Variable hinzu. Dies sollte ein absoluter Pfad vom Root Ihrer Festplatte bis zum Verzeichnis enthalten, das die Treiber enthält. Wenn wir zum Beispiel einen Mac verwenden würden, unser Benutzername Bob wäre und wir unsere Treiber im Root unseres Benutzerordners abgelegt hätten, wäre der Pfad `/Users/Bob`.

> [!NOTE]
> Um es noch einmal zu wiederholen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht der Pfad zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen festzulegen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie keine versteckten Dateien sehen können, müssen Sie diese anzeigen, siehe [Show/Hide hidden files in macOS](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend, wie er auf Ihrem Rechner tatsächlich ist):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie Ihr Terminal/Kommandoprompt neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal ausgedruckt sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable auf Windows einzustellen, folgen Sie den Anweisungen unter [How can I add a new folder to my system path?](https://www.itprotoday.com/)

Lassen Sie uns einen kurzen Test machen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis, die `duck_test.js` genannt wird:
2. Geben Sie ihr den folgenden Inhalt und speichern Sie sie ab:

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

3. Im Terminal, stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, wie sich eine Instanz von Firefox automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und die Suchschaltfläche wird geklickt. WebDriver wartet dann eine Sekunde; der Dokumenttitel wird dann abgerufen und wenn er "webdriver at DuckDuckGo" lautet, wird eine Nachricht zurückgegeben, die besagt, dass der Test bestanden wurde.

Wir warten dann 2 Sekunden, nachdem WebDriver die Firefox-Instanz schließt und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie daran hindert, den Test gleichzeitig in mehreren Browsern auszuführen. Probieren wir das aus!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis, die `duck_test_multiple.js` genannt wird. Sie können gerne die Referenzen auf einige der anderen Browser, die wir hinzugefügt haben, ändern, sie entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem zur Verfügung haben. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug darauf, welchen String Sie für die Methode `.forBrowser()` für andere Browser verwenden müssen, siehe die [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie sie ab:

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

3. Im Terminal, stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung in etwa der Art "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, folgen Sie der angegebenen Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie das erhalten, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel auf einem Mac, <kbd>Ctrl</kbd> + klicken Sie auf die App, wählen Sie _Offnen_ und wählen Sie _Öffnen_ erneut im resultierenden Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion, `searchTest()`, eingewickelt haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, damit der Test auf allen durchgeführt wird.

Kommen wir nun zu den Grundlagen der WebDriver-Syntax, um sie etwas detaillierter zu betrachten.

## WebDriver-Syntax-Kurs

Lassen Sie uns einige der wichtigsten Funktionen der WebDriver-Syntax ansehen. Für vollständigere Details sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine ausführliche Referenz und die Selenium-Hauptdokumentation [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die viele beispielhafte Ansätze für verschiedene Sprachen enthält.

### Starten eines neuen Tests

Um einen neuen Test zu starten, müssen Sie das Modul `selenium-webdriver` einbinden und den `Builder`-Konstruktor sowie die `Browser`-Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um ein neues Exemplar eines Treibers zu erstellen, wobei Sie die Methode `forBrowser()` verkettet verwenden, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten. Die `build()`-Methode wird am Ende verkettet, um das Treiber-Exemplar tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen über diese Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für Browser festzulegen, die getestet werden sollen, z. B. können Sie eine bestimmte Version und ein Betriebssystem angeben, das in der `forBrowser()`-Methode getestet werden soll:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Diese Optionen können auch über eine Umgebungsvariable festgelegt werden:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, um diesen Code mit ihm zu erkunden, während wir ihn besprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

### Abrufen des zu testenden Dokuments

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die Methode `get()` der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Einzelheiten zu den Funktionen in diesem Abschnitt und denen darunter finden Sie in der [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL zum Testen eines lokalen Dokuments:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Serverstandort zu verwenden, damit der Code flexibler ist — wenn Sie beginnen, einen Remote-Server zum Ausführen Ihrer Tests zu verwenden (siehe später), wird Ihr Code fehlschlagen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalter für den Pfad mit einem tatsächlichen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und versuchen Sie dann, ihn auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Nun, da wir ein zu testendes Dokument haben, müssen wir irgendwie damit interagieren, was in der Regel zunächst bedeutet, ein bestimmtes Element auszuwählen, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Weisen auswählen](https://www.selenium.dev/documentation/webdriver/elements/), die WebDriver anbietet, auch nach ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die Methode `findElement()`, die eine Auswahlmethode als Parameter akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten ist es, ein Element per CSS zu finden — die `By.css()`-Methode ermöglicht es Ihnen, ein Element mithilfe eines CSS-Selektors auszuwählen.

Aktualisieren Sie nun Ihre `example()`-Funktion wie folgt, und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche Beispiele finden Sie ab [Getting text values](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text innerhalb unserer Schaltfläche abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun am Ende der `example()`-Funktion wie unten gezeigt hinzu:

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

Führen Sie das Beispiel mit `node` genauso aus, wie Sie es zuvor getan haben. Sie sollten die Beschriftung des Textes der Schaltfläche in der Konsole ausgegeben sehen.

Lassen Sie uns etwas etwas nützlicheres machen. Ersetzen Sie den vorherigen Codeeintrag mit `button.click();` wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; die Schaltfläche wird geklickt und ein `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie dann, sie erneut zu testen:

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

Probieren Sie als Nächstes, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, den Test erneut durchzuführen:

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

Sie können Tastendrücke senden, die nicht durch normale Zeichen dargestellt werden können, durch Eigenschaften des `Key`-Objekts. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen Formulareingaben zu blättern:

```js
input.sendKeys(Key.TAB);
```

### Warten auf den Abschluss einer Aufgabe

Es gibt Gelegenheiten, bei denen Sie möchten, dass WebDriver wartet, bis etwas abgeschlossen ist, bevor es fortfährt. Zum Beispiel, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite fertig geladen wurde, bevor Sie versuchen, mit einem Element zu interagieren, sonst schlägt der Test wahrscheinlich fehl.

Zum Beispiel haben wir in unserem `duck_test_multiple.js` Test diese Zeile aufgenommen:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeitwert erfüllt wird. Wir verwenden das `await`-Schlüsselwort, um die einschließende Funktion zu pausieren, bis das Versprechen erfüllt ist, nach welchem die Methode ausgeführt wird, die dem Code folgend.

Wir könnten der Methode `sleep()` auch zum `quick_test.js` Test hinzufügen – versuchen Sie Ihre `example()` Funktion so zu aktualisieren:

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

Versuchen Sie den aktualisierten Code auszuführen. WebDriver füllt jetzt das erste Formularfeld aus, wartet dann eine Sekunde und prüft ob der Wert des Formularfelds ausgefüllt (d.h. nicht leer) ist, indem `getAttribute()` verwendet wird, um seinen `value` Attribut-Wert zu erhalten. Danach wird eine Nachricht an die Konsole gedruckt, um den Erfolg/Misserfolg zu berichten.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung über eine bestimmte Zeitspanne hinweg wiederholt testet und dann die Ausführung des Codes fortsetzt. Diese nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Nach der Verwendung Treiber herunterfahren

Nach dem Durchführen des Tests sollten alle Treiber-Instanzen, die Sie geöffnet haben, mit der Methode `driver.quit()` heruntergefahren werden, um sicherzustellen, dass sie keine Ressourcen unnötig verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie sehen wie der Test ausgeführt wird und die Browser-Instanz wieder heruntergefahren wird, nachdem der Test abgeschlossen ist.

## Best Practices für Tests

Es wurde viel über Best Practices für das Schreiben von Tests geschrieben. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Generell sollten Ihre Tests sicherstellen, dass sie:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [mit dem Dokument interagieren](#interaktion_mit_dem_dokument), stellen Sie sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern – wenn Sie ein testbares Element haben, das Sie testen wollen, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, und die nicht einfach mit der nächsten Version der Website ändert. Sie wollen Ihre Tests so unempfindlich wie möglich gegen Änderungen machen, d.h. sie werden nicht einfach unterbrechen, wenn sich etwas ändert.
2. Schreiben Sie atomare Tests: Jeder Test sollte nur eine Sache testen, damit es einfach bleibt nachzuvollziehen, welche Tests zu welcher Testdatei gehören. Der `duck_test.js` Test, den wir oben angesehen haben, ist ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist nachzuvollziehen, was er tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreiben Sie autonome Tests: Jeder Test sollte alleine funktionieren, und nicht davon abhängen, dass andere Tests funktionieren.

Zusätzlich sollten wir Testresultate/Berichte erwähnen – in unseren obigen Beispielen haben wir Ergebnisse über einfache `console.log()`-Anweisungen gemeldet, aber dies ist alles in JavaScript gemacht, sodass Sie jedes beliebige Test-Renn- und Berichtssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns an einem schnellen Beispiel arbeiten:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle erforderlichen Schritte in unserem Test auszuführen — die Versprechen-basierten Methoden, die WebDriver verwendet, müssen erfüllt werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das Mocha-Test-Harness, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können nun den Test (und alle anderen, die Sie in Ihren `test` Ordner stellen) mit folgendem Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das Flag `--no-timeouts` einschließen, um sicherzustellen, dass Ihre Tests nicht aufgrund von Mochas willkürlichem Timeout (das 3 Sekunden beträgt) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man unterschiedliche Kombinationen von Test-/Assertions-Tools einrichtet.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen nur Ihre Treiber-Instanz erstellen, jedoch mit ein paar mehr angegebenen Features, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Anmeldeinformationen des Benutzers (falls vorhanden), um darauf zuzugreifen.

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

3. Von Ihrer BrowserStack [Account & Profile details page](https://www.browserstack.com/accounts/profile/details), erhalten Sie Ihren Benutzernamen und Zugriffsschlüssel (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugangsschlüsselwerte (und halten Sie sie sicher).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, eine Art von Ergebnisberichtsmechanismus einzuschließen!

6. Wenn Sie jetzt auf das [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/) zurückgehen, sehen Sie Ihren Test gelistet, mit Details einschließlich einer Videoaufzeichnung des Tests und mehrere detaillierte Protokolle von Informationen zu ihm:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die _Resources_-Menüoption auf dem Browserstack Automatisierungs-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung zur Ausführung automatisierter Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für nodespezifische Informationen.

#### Programmatische Ergänzung von BrowserStack-Testergebnissen

Sie können die BrowserStack-REST-API und einige andere Fähigkeiten verwenden, um Ihren Test mit mehr Details zu versehen, wie zum Beispiel, ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Lassen Sie uns unser `bstack_duck_test.js` Beispiel aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das Axios-Modul, sodass wir es verwenden können, um Anfragen an die BrowserStack-REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code ein:

   ```js
   const axios = require("axios");
   ```

3. Nun werden wir unser `capabilities` Objekt aktualisieren, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer ein, während Sie sicherstellen, dass Sie am Ende der vorherigen Zeile ein Komma hinzufügen (Sie können den Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automatisierungs-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als nächstes holen wir uns die `sessionId` der aktuellen Sitzung und verwenden sie (zusammen mit Ihrem `userName ` und `accessKey `), um die URL zusammenzustellen, um Anfragen zu senden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt nach dem Block hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich, aktualisieren Sie den `if...else` Block nahe dem unteren Rand des Codes, um geeignete API-Aufrufe an BrowserStack zu senden, je nachdem, ob der Test bestanden oder fehlgeschlagen ist:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem bestanden oder nicht bestanden Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie nun zu Ihrem [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/) zurückgehen, sollten Sie Ihre Testsitzung wie zuvor sehen, jedoch mit Ihren benutzerdefinierten Daten, die daran angehängt sind. Es zeigt einen Status von "PASSED" und den per REST-API gemeldeten Grund für den Erfolg an:

![BrowserStack Benutzerdefinierte Ergebnisse](bstack_custom_results.png)

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

3. Von Ihren [Sauce Labs Benutzer-Einstellungen](https://app.saucelabs.com/user-settings), erhalten Sie Ihren Benutzernamen und Zugangsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugangsschlüsselwerte (und halten Sie sie sicher).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, eine Art von Ergebnisberichtsmechanismus einzuschließen!

5. Gehen Sie nun auf Ihre [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) Seite, wo Sie Ihren Test aufgelistet sehen. Von hier aus können Sie Videos, Screenshots und andere nützliche Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Werkzeug zum Erzeugen von Fähigkeitsobjekten, die an Ihre Treiberinstanzen übergeben werden können, basierend darauf, welchen Browser/Welches OS Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zum Testen mit Sauce Labs und Selenium, lesen Sie [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmatische Ergänzung von Sauce Labs-Testdetails

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, wie zum Beispiel, ob er bestanden wurde, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl (wenn Sie es nicht bereits für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie saucelabs — platzieren Sie das am Anfang der `sauce_google_test.js` Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie das folgende direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugangsschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket, etwas verwirrend, `password` anstelle von `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver`-Variable definieren (direkt unter der `build()`-Zeile), fügen Sie den folgenden Block hinzu — er erhält den korrekten Treiber-`sessionID`, den wir benötigen, um Daten auf den Job zu schreiben (Sie können ihn im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Schließlich erneuern Sie den `driver.sleep(2000)` Block nahe dem unteren Rand des Codes mit dem folgenden:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, abhängig davon, ob der Test bestanden oder fehlgeschlagen ist. Dann haben wir die `saucelabs.updateJob()` Methode verwendet, um die Details zu aktualisieren.

Wenn Sie nun zu Ihrer [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückgehen, sollten Sie ihren neuen Job nun mit den aktualisierten Daten vorfinden:

![Sauce Labs Aktualisierte Job-Infos](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie jederzeit Ihren eigenen Remotetestserver einrichten. Lassen Sie uns sehen, wie man das macht.

1. Der Selenium-Remote-Server benötigt Java zum Laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen wurde.
2. Laden Sie als nächstes den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) — dies fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer (d.h. keine Beta) und wählen Sie aus der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Wenn dieser heruntergeladen wurde, speichern Sie ihn an einem sinnvollen Ort, wie Ihrem Hauptverzeichnis. Wenn Sie den Standort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie es jetzt (siehe den [Setting up Selenium in Node](#einrichten_von_selenium_in_node) Abschnitt).
3. Starten Sie den Standalone-Server, indem Sie das Folgende in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen, sodass er genau zu der von Ihnen erhaltenen Datei passt).

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie bekommen.

Nun, da wir den Server laufen haben, lassen Sie uns einen Demotest erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und benennen Sie sie in `google_test_remote.js` um; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Codizeile, die mit `const driver = …` beginnt, wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten sehen, wie er wie erwartet läuft; diesmal führen Sie ihn jedoch auf dem Standalone-Server aus:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten und dann Ihre Skripts über die URL, die Sie zum Ausstellen auswählen, damit verbinden.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs in Continuous Integration (CI)-Tools zu integrieren — dies ist nützlich, da Sie damit Ihre Tests über ein CI-Tool ausführen können und neue Änderungen an Ihrem Code-Repository nur dann übernommen werden, wenn die Tests bestanden sind.

Es ist nicht im Rahmen dieses Artikels, diesen Bereich im Detail zu betrachten, aber wir würden vorschlagen, mit Travis CI zu beginnen — dies ist wahrscheinlich das am einfachsten zu startende CI-Tool und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Zum Einstieg, siehe zum Beispiel:

- [Travis CI für vollständige Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Building a Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Using LambdaTest with Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Using LambdaTest with CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Using LambdaTest with Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie **codeless automation** für kontinuierliches Testen verwenden möchten, dann können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Ihnen eine unterhaltsame Möglichkeit zum Lernen geboten haben und Ihnen genug Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, um Ihnen den Einstieg in das Schreiben eigener automatisierter Tests zu erleichtern.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
