---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichten der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen können. Wir werden auch untersuchen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den im vorherigen Artikel besprochenen integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den hochrangigen
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testens</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und damit Tests ausführt und wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Möglichkeiten, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser macht, um ihn zu automatisieren. Aktionen werden durchgeführt, wie "diese Webseite öffnen", "über dieses Element auf der Seite bewegen", "diesen Link anklicken", "prüfen, ob der Link diese URL öffnet" usw. Dies ist ideal zum Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmierumgebung ab, in der Sie Ihre Tests schreiben und ausführen möchten. Die meisten gängigen Umgebungen bieten ein Paket oder Framework an, das WebDriver und die zum Kommunizieren mit WebDriver erforderlichen Bindungen mit dieser Sprache installiert, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zu Selenium-Setups für verschiedene Sprachen finden Sie unter [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/).

Unterschiedliche Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen darüber, wo Sie Browser-Treiber herunterladen können, finden Sie unter [Platforms Supported by Selenium](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach zu starten ist und eine vertrautere Umgebung für Frontend-Entwickler bietet.

> [!NOTE]
> Wenn Sie erfahren möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, schauen Sie sich auch [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichtung von Selenium in Node

1. Richten Sie zunächst ein neues npm-Projekt ein, wie im letzten Kapitel unter [Setting up Node and npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es anders, z. B. `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, mit Selenium innerhalb von Node zu arbeiten. Wir wählen das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation relativ aktuell und gut gepflegt zu sein scheint. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich im Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch ratsam, diese Schritte zu befolgen, auch wenn Sie zuvor selenium-webdriver installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Details, wo diese heruntergeladen werden können, finden Sie auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige Browser betriebssystemspezifisch, aber wir bleiben bei Firefox und Chrome, da diese für alle Hauptbetriebssysteme verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie in ein Verzeichnis, das leicht zu navigieren ist, wie das Root-Verzeichnis Ihres Home-User-Verzeichnisses.
3. Fügen Sie die Speicherorte des `chromedriver` und `geckodriver` zur Systemumgebungsvariable `PATH` hinzu. Dies sollte ein absoluter Pfad vom Root Ihres Festplattenlaufwerks bis zum Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen macOS-Computer verwenden würden, unser Benutzername Bob wäre und wir unsere Treiber im Root unseres Home-Ordners ablegten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Nur um es noch einmal zu betonen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet).
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie sie anzeigen. Siehe [Show/Hide hidden files in macOS](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Show hidden folders in Ubuntu](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei hinzu (aktualisieren Sie den Pfad entsprechend Ihrem tatsächlichen System):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie Ihr Terminal/Ihre Konsole neu, um Ihre Bash-Konfiguration neu anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Es sollte im Terminal ausgegeben werden.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows festzulegen, folgen Sie den Anweisungen unter [How can I add a new folder to my system path?](https://www.itprotoday.com/)

Lassen Sie uns einen kurzen Test durchführen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test.js`:
2. Geben Sie den folgenden Inhalt ein und speichern Sie die Datei:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Ein Firefox-Fenster sollte automatisch geöffnet werden! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben, und der Suchknopf wird angeklickt. WebDriver wartet dann eine Sekunde; der Dokumenttitel wird abgerufen, und wenn er "webdriver at DuckDuckGo" lautet, wird eine Meldung zurückgegeben, die den bestandenen Test anzeigt.

Wir warten dann 2 Sekunden, nach denen WebDriver die Firefox-Instanz herunterfährt und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es gibt nichts, was Sie davon abhält, den Test gleichzeitig auf mehreren Browsern auszuführen. Probieren wir das aus!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können die Verweise auf einige der anderen hinzugefügten Browser frei ändern, sie entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem testen können. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Welche Zeichenfolge Sie in der Methode `.forBrowser()` für andere Browser verwenden müssen, finden Sie auf der [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie diese erhalten, folgen Sie den gegebenen Anweisungen und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Meldung, die besagt, dass Sie eine Treiber-App nicht öffnen können, da sie nicht aus einer verifizierten Quelle heruntergeladen wurde. Wenn dies der Fall ist, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel auf dem Mac, <kbd>Ctrl</kbd> + klicken Sie auf die App, wählen Sie _Open_ und wählen Sie erneut _Open_ im daraufhin angezeigten Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, diesmal haben wir ihn jedoch in eine Funktion namens `searchTest()` verpackt. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, damit der Test auf allen durchgeführt wird.

Gehen wir weiter und betrachten die Grundlagen der WebDriver-Syntax etwas detaillierter.

## WebDriver-Syntax Crash-Kurs

Werfen wir einen Blick auf einige wichtige Funktionen der WebDriver-Syntax. Für vollständige Details sollten Sie die [selenium-webdriver JavaScript API reference](https://www.selenium.dev/selenium/docs/api/javascript/) für eine vollständige Referenz und die Hauptdokumentation von Selenium [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/), die mehrere Beispiele zum Lernen in verschiedenen Sprachen enthalten, konsultieren.

### Beginn eines neuen Tests

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbeziehen und den `Builder`-Konstruktor und das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen und die Methode `forBrowser()` zu verkettet, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten.
Die Methode `build()` wird am Ende verkettet, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder class reference](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser festzulegen; zum Beispiel können Sie eine spezifische Version und ein Betriebssystem in der `forBrowser()`-Methode testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch über eine Umgebungsvariable setzen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, um diesen Code zu erkunden, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

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
> Siehe die [WebDriver class reference](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den folgenden.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, eine Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie beginnen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (siehe später), wird Ihr Code brechen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalterpfad durch einen realen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer, und versuchen Sie, sie auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Nun, da wir ein zu testendes Dokument haben, müssen wir in irgendeiner Weise damit interagieren, was in der Regel zuerst das Auswählen eines spezifischen Elements beinhaltet, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementnamen usw. Die tatsächliche Auswahl erfolgt durch die Methode `findElement()`, die als Parameter eine Auswahlmethode akzeptiert. Um beispielsweise ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element nach CSS zu finden, besteht darin, die Methode `By.css()` zu verwenden, um ein Element mit einem CSS-Selektor auszuwählen.

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin befindlichen Elementen zu interagieren. Sie können sich nützliche gängige Beispiele ansehen, beginnend bei [Getting text values](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text in unserem Button erhalten wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt unten in die `example()`-Funktion wie folgt ein:

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

Führen Sie das Beispiel mit `node` auf dieselbe Weise aus, wie Sie es zuvor getan haben. Sie sollten das Textetikett des Buttons im Konsolenbericht sehen.

Lassen Sie uns etwas Nützlicheres tun. Ersetzen Sie den vorherigen Codeeintrag durch `button.click();` wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; Der Button wird geklickt, und ein `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt, und versuchen Sie erneut, sie zu testen:

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

Als nächstes versuchen wir, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, den Test auszuführen:

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

Sie können Tasteneingaben, die nicht durch normale Zeichen dargestellt werden können, mit Eigenschaften des `Key`-Objekts senden. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen Formulareingaben zu wechseln:

```js
input.sendKeys(Key.TAB);
```

### Warten auf das Abschließen von Operationen

Es gibt Zeiten, in denen Sie WebDriver dazu bringen möchten, auf das Abschließen einer Operation zu warten, bevor es fortfährt. Wenn Sie zum Beispiel eine neue Seite laden, müssen Sie darauf warten, dass das DOM der Seite geladen wird, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, andernfalls schlägt der Test wahrscheinlich fehl.

In unserem `duck_test_multiple.js`-Test haben wir zum Beispiel diese Zeile hinzugefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das Schlüsselwort `await`, um die umgebende Funktion zu pausieren, bis die Promise aufgelöst wird, nach der der Code, der der Methode folgt, ausgeführt wird.

Wir könnten auch der `quick_test.js`-Test eine `sleep()`-Methode hinzufügen – versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver füllt nun das erste Formularfeld, wartet eine Sekunde, und überprüft dann, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem es `getAttribute()` verwendet, um seinen `value`-Attributwert zu erhalten. Es gibt dann eine Meldung in die Konsole aus, um Erfolg oder Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung wiederholt für eine bestimmte Zeit lang testet und dann mit der Codeausführung fortfährt. Dies macht auch Gebrauch von der [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die häufige Bedingungen zur Verwendung zusammen mit `wait()` definiert.

### Treiber nach der Verwendung herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` herunterfahren, um sicherzustellen, dass sie keine Ressourcen unnötig nutzen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Jetzt sollten Sie, wenn Sie es ausführen, sehen, dass der Test ausgeführt und die Browserinstanz nach Abschluss des Tests wieder heruntergefahren wird.

## Test Best Practices

Es wurde viel über Best Practices zum Schreiben von Tests geschrieben. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Stellen Sie beim [Interacting with the document](#interaktion_mit_dem_dokument) sicher, dass Sie Locator und Page-Objects verwenden, die sich wahrscheinlich nicht ändern werden — wenn Sie ein testbares Element haben, auf das Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, die nicht einfach mit der nächsten Website-Iteration geändert wird. Sie möchten Ihre Tests möglichst bruchsicher machen, d.h. sie werden nicht einfach kaputt gehen, wenn sich etwas ändert.
2. Schreiben Sie atomare Tests: Jeder Test sollte nur eine Sache testen und es einfach machen, den Überblick darüber zu behalten, welches Testfile welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine Sache testet — ob der Titel einer Suchergebnisseite korrekt eingestellt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist herauszufinden, was er tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreiben Sie autonome Tests: Jeder Test sollte allein funktionieren und nicht auf andere Tests angewiesen sein.

Darüber hinaus sollten wir auch Testberichte/Ergebnisse erwähnen — wir haben in unseren obigen Beispielen Ergebnisse mit einfachen `console.log()`-Anweisungen berichtet, aber dies alles wird in JavaScript gemacht, sodass Sie jedes gewünschte Testrunner- und Berichterstattungssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels innerhalb Ihres Projektverzeichnisses. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Promises, um alle erforderlichen Schritte in unserem Test auszuführen — die Promise-basierten Methoden, die WebDriver verwendet, müssen gelöst werden, damit es richtig funktioniert.
2. Installieren Sie das Mocha-Test-Framework, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können jetzt den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis Platzieren) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das Flag `--no-timeouts` einschließen, um sicherzustellen, dass Ihre Tests nicht aufgrund von Mochas willkürlichem Timeout fehlschlagen (das standardmäßig 3 Sekunden beträgt).

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie verschiedene Kombinationen aus Test/Assertion-Tools eingerichtet werden können.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit einigen zusätzlichen Merkmalen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der benötigten Benutzerberechtigungen (falls erforderlich), um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, um zu zeigen, wie ein Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausgeführt wird:

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

3. Rufen Sie Ihren Benutzernamen und Ihren Zugriffsschlüssel (siehe _Username and Access Keys_) von Ihrer BrowserStack [Account & Profile details page](https://www.browserstack.com/accounts/profile/details) ab.
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihren tatsächlichen Benutzername- und Zugriffsschlüsselwerten (und achten Sie darauf, sie sicher zu halten).
5. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit der Einbeziehung eines Ergebnismeldemechanismus!

6. Wenn Sie jetzt zum [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, einschließlich eines Video-Mitschnitts des Tests und umfassender Protokolle mit Informationen dazu:
   ![BrowserStack automated results](bstack_automated_results.png)

> [!NOTE]
> Die Menüoption _Resources_ auf dem BrowserStack Automate-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung von BrowserStack für automatisierte Tests. Siehe [Selenium with NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Programmgesteuertes Ausfüllen von BrowserStack-Testdetails

Sie können die BrowserStack-REST-API und einige andere Fähigkeiten nutzen, um Ihren Test mit weiteren Details versehen, wie ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Aktualisieren wir unser `bstack_duck_test.js`-Demobeispiel, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das Modul [axios](https://www.npmjs.com/package/axios) mit folgendem Befehl in Ihrem Projektverzeichnis:

   ```bash
   npm install axios
   ```

2. Importieren Sie das Axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack-REST-API zu senden. Fügen Sie die folgende Zeile an den Anfang Ihres Codes hinzu:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren wir jetzt unser `capabilities`-Objekt, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, und vergessen Sie nicht, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können den Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungsdashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als nächstes holen wir uns die `sessionId` der aktuellen Sitzung und verwenden sie (zusammen mit Ihrem `userName` und `accessKey`), um die URL zu erstellen, um Anfragen zu senden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (der mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if...else`-Block am unteren Code, um je nach bestandenem oder fehlgeschlagenem Test entsprechende API-Anfragen an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir eine API-Anfrage an BrowserStack, um den Test mit einem bestandenem oder einem fehlgeschlagenem Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie jetzt wieder zu Ihrem [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/) gehen, sollten Sie Ihre Testsitzung wie zuvor sehen, jedoch mit Ihren benutzerdefinierten Daten angehängt. Sie zeigt einen Status von "PASSED" und den über die REST-API gemeldeten Grund für den Erfolg:

![BrowserStack Custom Results](bstack_custom_results.png)

### Sauce Labs

Sehen wir uns ein Beispiel an, das zeigt, wie Sie Selenium-Tests remote auf Sauce Labs ausführen:

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

3. Holen Sie sich Ihren Benutzernamen und den Zugriffsschlüssel aus Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugriffsschlüsselwerte (und achten Sie darauf, sie sicher zu halten).
4. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet, und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit der Einbeziehung eines Ergebnismeldemechanismus!

5. Wenn Sie jetzt zur [Sauce Labs Automated Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere relevante Daten einsehen.
   ![Sauce Labs automated test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zur Generierung von Fähigkeit-Objekten, die Ihrem Treiberinstanz basierend auf dem Browser/Betriebssystem, das Sie testen möchten, bereitgestellt werden.

> [!NOTE]
> Für weitere nützliche Details zum Testen mit Sauce Labs und Selenium lesen Sie [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmgesteuertes Ausfüllen von Sauce Labs-Testdetails

Sie können die Sauce Labs API nutzen, um Ihren Test mit weiteren Details versehen, wie ob er bestanden wurde, den Namen des Tests, usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie die Node Sauce Labs Wrapper mithilfe des folgenden Befehls (wenn Sie dies für dieses Projekt noch nicht getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie saucelabs — setzen Sie dies an den Anfang Ihrer `sauce_google_test.js`-Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie Folgendes direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code erneut mit Ihren tatsächlichen Benutzername- und Zugriffsschlüsselwerten (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password`, nicht `accessKey`, verwendet). Da Sie diese nun zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen zur Speicherung erstellen.

4. Fügen Sie unter dem Block, in dem Sie die Variable `driver` definieren (direkt unter der Zeile `build()`), den folgenden Block hinzu — dieser erhält die richtige Treiber `sessionID`, die wir benötigen, um Daten zum Job zu schreiben (Sie können sie im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den Block `driver.sleep(2000)` im unteren Code durch Folgendes:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden oder fehlgeschlagen ist, und dann die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zurück zu Ihrem [Sauce Labs Automated Test-Dashboard](https://app.saucelabs.com/dashboard/tests) gehen, sollten Sie sehen, dass Ihr neuer Job nun die aktualisierten Daten daran angehängt hat:

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack nutzen möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Sehen wir uns an, wie das gemacht wird.

1. Der Selenium-Remote-Server benötigt Java zum Ausführen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE downloads page](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie als nächstes die neuesten [Selenium standalone server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d.h. keine Beta), und wählen Sie aus der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Wenn diese heruntergeladen wurde, legen Sie sie an einem sinnvollen Ort ab, wie Ihrem Home-Verzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Setting up Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie das folgende in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), sodass er genau dem Dateinamen entspricht, den Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` ausgeführt — versuchen Sie jetzt, dorthin zu gehen, um zu sehen, was Sie erhalten.

Da wir den Server jetzt am Laufen haben, lassen Sie uns einen Demotest erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Zeile des Codes (die mit `const driver = …` beginnt) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet ausgeführt wird; diesmal jedoch führen Sie ihn auf dem Standalone-Server aus:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten und dann Ihre Skripte mit der URL verbinden, die Sie verwenden möchten, um es zugänglich zu machen.

## Integrieren von Selenium mit CI-Tools

Als ein weiterer Punkt ist es auch möglich, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI)-Tools zu integrieren — das ist nützlich, da Sie Ihre Tests über ein CI-Tool ausführen können und nur neue Änderungen in Ihr Code-Repository übernehmen können, wenn die Tests bestanden werden.

Es ist nicht im Rahmen, dieses Thema in diesem Artikel im Detail zu betrachten, aber wir würden empfehlen, mit Travis CI zu beginnen — dies ist wahrscheinlich das einfachste CI-Tool, um anzufangen, und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um zu beginnen, siehe zum Beispiel:

- [Travis CI for complete beginners](https://docs.travis-ci.com/user/for-beginners)
- [Building a Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Using LambdaTest with Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Using LambdaTest with CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Using LambdaTest with Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeless automation** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte spaßig gewesen sein und Ihnen genügend Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
