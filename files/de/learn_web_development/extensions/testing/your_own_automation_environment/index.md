---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests unter Verwendung von Selenium/WebDriver und einer Testbibliothek wie `selenium-webdriver` für Node ausführen können. Wir werden auch untersuchen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den in dem vorherigen Artikel besprochenen integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der
        grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a> und der
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit ausführt und wie man sie mit Tools wie Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das bekannteste Tool zur Browser-Automatisierung. Es gibt andere Möglichkeiten, aber die beste Methode, Selenium zu verwenden, ist über den WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser sendet, um diesen zu automatisieren. Dabei werden Aktionen wie "öffne diese Webseite", "bewege über dieses Element auf der Seite", "klicke diesen Link", "prüfe, ob der Link diese URL öffnet" usw. ausgeführt. Dies ist ideal für die Durchführung automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten gängigen Umgebungen haben ein verfügbares Paket oder Framework, das WebDriver installiert und die erforderlichen Bindungen bereitstellt, um mit WebDriver in dieser Sprache zu kommunizieren, zum Beispiel Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/) für weitere Details zu Selenium-Setups für unterschiedliche Sprachen.

Unterschiedliche Browser benötigen unterschiedliche Treiber, um WebDriver zu ermöglichen, mit ihnen zu kommunizieren und sie zu steuern. Siehe [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für weitere Informationen darüber, wo Sie Browser-Treiber beziehen können.

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach ist, zu beginnen, und eine vertrautere Umgebung für Frontend-Entwickler bietet.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden können, sollten Sie ebenfalls einen Blick auf die [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) werfen, wo Sie nützliche Links finden.

### Einrichtung von Selenium in Node

1. Richten Sie zunächst ein neues npm-Projekt ein, wie im [Einrichten von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) im letzten Kapitel beschrieben. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als Nächstes müssen wir ein Framework installieren, um von innen Node mit Selenium arbeiten zu können. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) wählen, da die Dokumentation ziemlich aktuell erscheint und es gut gepflegt wird. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und achten Sie darauf, dass Sie sich in Ihrem Projektverzeichnis befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist dennoch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie zuvor selenium-webdriver installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, damit der WebDriver die Browser steuern kann, die Sie testen möchten. Sie finden Informationen dazu, wo Sie diese beziehen können, auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir bleiben bei Firefox und Chrome, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einen Ort, der leicht zu navigieren ist, wie der Wurzel Ihres Benutzerverzeichnisses.
3. Fügen Sie den Speicherort der `chromedriver` und `geckodriver` Treiber zu Ihrer System-`PATH`-Variable hinzu. Dies sollte ein absoluter Pfad von der Wurzel Ihrer Festplatte zu dem Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen Mac-Rechner verwenden würden, unser Benutzername Bob wäre, und wir unsere Treiber im Wurzelverzeichnis unseres Benutzerordners platziert haben, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es nochmal zu betonen: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Das ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem Mac-System und auf den meisten Linux-Systemen festzulegen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen, siehe [Versteckte Dateien in macOS anzeigen/verbergen](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad so, wie er tatsächlich auf Ihrem Computer ist):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, starten Sie dann Ihr Terminal/Kommandozeile neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows festzulegen, folgen Sie den Anweisungen bei [How can I add a new folder to my system path?](https://stackoverflow.com/questions/44272416/add-a-folder-to-the-path-environment-variable-in-windows-10-with-screenshots)

Lassen Sie uns einen schnellen Test durchführen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test.js`:
2. Geben Sie ihr den folgenden Inhalt und speichern Sie sie:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass sich eine Firefox-Instanz automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird im Suchfeld eingetragen und die Suchschaltfläche wird angeklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann aufgerufen, und wenn er "webdriver at DuckDuckGo" ist, wird eine Nachricht zurückgegeben, die besagt, dass der Test bestanden ist.

Dann warten wir 2 Sekunden, nach denen WebDriver die Firefox-Instanz herunterfährt und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie daran hindert, den Test auf mehreren Browsern gleichzeitig auszuführen. Lassen Sie uns das ausprobieren!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können frei die Verweise auf einige der anderen Browser ändern, entfernen usw., je nachdem, welche Browser auf Ihrem Betriebssystem verfügbar sind. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System installiert haben. In Bezug darauf, welche Zeichenfolge Sie im `.forBrowser()`-Methode für andere Browser verwenden, siehe die [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie sie:

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
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung wie "Konnte keine Sitzung erstellen: Sie müssen die Option 'Fernsteuerung erlauben' im Menü Entwickeln von Safari aktivieren, um Safari über WebDriver zu steuern." Wenn Sie dies erhalten, folgen Sie der angegebenen Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, da sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie dies erhalten, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Beispielsweise auf dem Mac mit <kbd>Ctrl</kbd> + Klick auf die App, wählen Sie _Öffnen_, und wählen Sie nochmals _Öffnen_ im resultierenden Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion namens `searchTest()` eingebettet haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, damit der Test auf allen durchgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax auf etwas detailliertere Weise betrachten.

## WebDriver-Syntax-Crashkurs

Schauen wir uns einige Schlüsselfunktionen der WebDriver-Syntax an. Für weitere Details sollten Sie die [selenium-webdriver JavaScript API Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die Hauptdokumentation von Selenium zu [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele enthalten, um in verschiedenen Sprachen zu lernen.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einschließen und den `Builder`-Konstruktor sowie die `Browser`-Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, und hängen die Methode `forBrowser()` an, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten.
Die Methode `build()` wird am Ende angehängt, um tatsächlich die Treiberinstanz zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser festzulegen. Beispielsweise können Sie eine bestimmte Version und ein bestimmtes Betriebssystem festlegen, um diese mit der `forBrowser()`-Methode zu testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariablen festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, damit wir diesen Code beim Sprechen darüber erkunden können. Erstellen Sie innerhalb Ihres Selenium-Testprojektverzeichnisses eine neue Datei mit dem Namen `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

Um die Seite zu laden, die Sie eigentlich testen möchten, verwenden Sie die `get()`-Methode der Treiberinstanz, die Sie zuvor erstellt haben, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den darunter liegenden.

Sie können eine beliebige URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Standort zu verwenden, sodass der Code flexibler ist — Ihr Code wird brechen, wenn Sie versuchen, lokale Pfade zu verwenden, wenn Sie anfangen, einen Remote-Server zum Ausführen Ihrer Tests zu nutzen (siehe später).

Aktualisieren Sie jetzt Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalterpfad durch einen tatsächlichen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und testen Sie es:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Nun, da wir ein zu testendes Dokument haben, müssen wir in irgendeiner Weise damit interagieren, was normalerweise zuerst das Auswählen eines spezifischen Elements zum Testen von etwas darüber bedeutet. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Beispielsweise um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element anhand von CSS zu finden, ist die Methode `By.css()`, die es Ihnen ermöglicht, ein Element mithilfe eines CSS-Selectors auszuwählen.

Aktualisieren Sie nun Ihre `example()`-Funktion wie folgt und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und Elementen darin zu interagieren. Sie können nützliche, allgemeine Beispiele ab [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumentationen sehen.

Wenn wir den Text in unserer Schaltfläche abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt unten in der `example()`-Funktion wie unten gezeigt hinzu:

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

Führen Sie das Beispiel mit `node` aus, so wie Sie es zuvor getan haben. Sie sollten den Text der Beschriftung der Schaltfläche in der Konsole gemeldet sehen.

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

Probieren Sie es erneut; die Schaltfläche wird geklickt und ein `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie es erneut:

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

Als Nächstes versuchen wir, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie es erneut:

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

Sie können Tastenanschläge übermitteln, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben das Folgende verwendet, um zwischen Formulareingaben zu wechseln:

```js
input.sendKeys(Key.TAB);
```

### Warten, bis etwas beendet ist

Es gibt Zeiten, in denen Sie WebDriver warten lassen müssen, bis etwas abgeschlossen ist, bevor Sie fortfahren. Wenn Sie beispielsweise eine neue Seite laden, möchten Sie warten, bis das DOM der Seite mit dem Laden fertig ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, da der Test möglicherweise fehlschlägt.

In unserem `duck_test_multiple.js`-Test haben wir beispielsweise diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das sich am Ende dieser Zeit auflöst. Wir verwenden das `await`-Schlüsselwort, um die einschließende Funktion anzuhalten, bis das Versprechen gelöst ist, woraufhin der folgende Methodencode ausgeführt wird.

Wir könnten auch der `quick_test.js`-Test die `sleep()`-Methode hinzufügen. Versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

Führen Sie den aktualisierten Code aus. WebDriver wird jetzt das erste Formularfeld ausfüllen, für eine Sekunde warten und dann testen, ob dessen Wert ausgefüllt wurde (d.h. ob es nicht leer ist), indem `getAttribute()` verwendet wird, um seinen `value`-Attributwert abzurufen. Anschließend wird eine Nachricht an die Konsole ausgegeben, um Erfolg bzw. Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die wiederholt eine Bedingung für eine bestimmte Zeitspanne testet und dann den Code weiter ausführt. Diese nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige verwendbare Bedingungen mit `wait()` definiert.

### Treiber nach dem Gebrauch herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mit der `driver.quit()`-Methode herunterfahren, um sicherzustellen, dass sie nicht unnötigerweise Ressourcen weiter verwenden. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es nun ausführen, sollten Sie sehen, wie der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests wieder herunterfährt.

## Test-Best-Practices

Es gibt viel Literatur zu Best Practices für das Schreiben von Tests. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie mit dem [Dokument interagieren](#mit_dem_dokument_interagieren), stellen Sie sicher, dass Sie Locator und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern — wenn Sie ein testbares Element haben, das Sie testen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, der sich nicht einfach mit dem nächsten Site-Iteration ändert. Sie möchten Ihre Tests so nicht anfällig wie möglich gestalten, d.h. sie sollen nicht einfach brechen, wenn sich etwas ändert.
2. Schreiben Sie atomare Tests: Jeder Test sollte nur eine Sache testen, was es einfach macht, im Auge zu behalten, welche Testdatei welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzelne Sache testet — ob der Titel einer Suchergebnisseite korrekt eingestellt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist, herauszufinden, was er tut, wenn wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreiben Sie autonome Tests: Jeder Test sollte eigenständig funktionieren und nicht davon abhängen, dass andere Tests funktionieren.

Außerdem sollten wir Test-Ergebnisse/Berichterstattung erwähnen — wir haben Ergebnisse in unseren obigen Beispielen mit einfachen `console.log()`-Anweisungen gemeldet, aber das ist alles in JavaScript geschrieben, sodass Sie jedes gewünschte Testlauf- und Berichterstattungssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durchgehen:

1. Erstellen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle erforderlichen Schritte in unserem Test auszuführen — die versprochenen Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das Mocha-Test-Framework, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Jetzt können Sie den Test (und alle andere, die Sie in Ihrem `test`-Verzeichnis ablegen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`-Flag einschließen, um sicherzustellen, dass Ihre Tests nicht wegen Mocha's willkürlicher Zeitüberschreitung (die 3 Sekunden beträgt) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertions-Tools einrichtet.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen lediglich Ihre Treiberinstanz erstellen, jedoch mit einigen weiteren spezifizierten Funktionen, einschließlich den Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie (falls erforderlich) benötigen, um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, das zeigt, wie man einen Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausführt:

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

3. Holen Sie sich von Ihrer BrowserStack [Account- und Profildetailseite](https://www.browserstack.com/accounts/profile/details) Ihren Benutzernamen und Zugriffsschlüssel (siehe _Benutzername und Zugriffsschlüssel_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit, einen Art von Ergebnisberichtungsmechanismus einzuschließen!

6. Wenn Sie jetzt zurück zum [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) gehen, sehen Sie Ihren Test aufgelistet, mit Details, einschließlich einer Videoaufzeichnung des Tests und mehreren detaillierten Informationen dazu:
   ![Ergebnisse von BrowserStack-Tests](bstack_automated_results.png)

> [!NOTE]
> Die _Ressourcen_-Option im BrowserStack Automatisierungs-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung für automatisierte Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Programmatisches Ausfüllen von BrowserStack-Testdetails

Sie können die BrowserStack REST API und einige andere Funktionen verwenden, um Ihren Test mit weiteren Details zu annotieren, wie zum Beispiel, ob er erfolgreich war, warum er erfolgreich war, welches Projekt der Test ist, usw. BrowserStack kennt diese Details nicht standardmäßig.

Lassen Sie uns unser `bstack_duck_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code ein:

   ```js
   const axios = require("axios");
   ```

3. Als Nächstes aktualisieren wir unser `capabilities`-Objekt, um einen Projektnamen zu enthalten — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, wobei Sie daran denken, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automatisierungs-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Dann holen wir uns die `sessionId` der aktuellen Sitzung ab und verwenden sie (zusammen mit Ihrem `userName` und `accessKey`), um die URL zu erstellen, an die Anfragen gesendet werden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen unmittelbar unterhalb des Blocks hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if...else`-Block nahe dem Ende des Codes, um entsprechende API-Aufrufe an BrowserStack zu senden, je nachdem, ob der Test bestanden oder nicht:

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

Nach Abschluss des Tests senden wir einen API-Aufruf an BrowserStack, um den Test mit einem "bestanden" oder "nicht bestanden"-Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie nun zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, jedoch mit den benutzerdefinierten Daten, die an sie angehängt sind. Es zeigt einen Status von "BESTANDEN" und den von der REST-API gemeldeten Grund für das Bestehen:

![Benutzerdefinierte Ergebnisse von BrowserStack](bstack_custom_results.png)

### Sauce Labs

Lassen Sie uns ein Beispiel betrachten, das zeigt, wie man Selenium-Tests remote auf Sauce Labs ausführt:

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

3. Holen Sie sich von Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Zugriffsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit, einen Art von Ergebnisberichtungsmechanismus einzuschließen!

5. Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test-Dashboard-Seite](https://app.saucelabs.com/dashboard/tests) gehen, sollten Sie Ihren Test aufgelistet sehen; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Automatisierter Test von Sauce Labs](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Werkzeug zur Generierung von Fähigkeitsobjekten, die Ihren Treiberinstanzen zur Nutzung gegeben werden, basierend darauf, welchen Browser/OS Sie testen möchten.

> [!NOTE]
> Weitere nützliche Informationen zum Testen mit Sauce Labs und Selenium finden Sie unter [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/), und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmatisches Ausfüllen von Sauce Labs Testdetails

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, wie etwa ob er bestanden wurde, den Namen des Tests usw. Sauce Labs kennt diese Details nicht standardmäßig!

Um dies zu tun, müssen Sie:

1. Installieren Sie das Node Sauce Labs-Wrapper mit dem folgenden Befehl (falls Sie es noch nicht für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Das saucelabs-Modul verwenden — setzen Sie dies an den Anfang Ihre `sauce_google_test.js`-Datei, gleich nach der vorherigen Variablendeklaration:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie direkt darunter das Folgende hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password`, nicht `accessKey` verwendet). Da Sie diese nun zweimal verwenden, möchten Sie möglicherweise ein paar Helfervariablen erstellen, um diese zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver`-Variable definieren (direkt unter der `build()`-Zeile), fügen Sie den folgenden Block hinzu — dies erhält die richtige Treiber `sessionID`, die wir benötigen, um Daten in den Job zu schreiben (Sie können es in Aktion im nächsten Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)`-Block nahe dem unteren Ende des Codes durch das folgende:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden ist oder nicht, um dann mit der `saucelabs.updateJob()`-Methode die Details zu aktualisieren.

Wenn Sie nun zurück zu Ihrer [Sauce Labs Automated Test-Dashboard-Seite](https://app.saucelabs.com/dashboard/tests) gehen, sollten Sie sehen, dass Ihr neuer Job nun die aktualisierten Daten angehängt hat:

![Aktualisierte Jobinformation in Sauce Labs](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie jederzeit Ihren eigenen Remote-Testserver einrichten. Schauen wir uns an, wie das geht.

1. Der Selenium-Remote-Server erfordert Java zur Ausführung. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie als nächstes den neuesten [Selenium-Stand-alone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d.h. nicht eine Beta), und wählen Sie aus der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen ist, platzieren Sie es an einem sinnvollen Ort, wie Ihrem Heimatverzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Einrichten von Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Starten Sie den Standalone-Server, indem Sie Folgendes in ein Terminal auf Ihrem Servercomputer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), sodass er genau mit dem übereinstimmt, was Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen — versuchen Sie, dorthin zu gehen, um zu sehen, was Sie bekommen.

Da wir den Server jetzt betreiben, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die (mit `const driver = …`-Zeile) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet ausgeführt wird; diesmal jedoch werden Sie ihn auf dem Standalone-Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server eineinricIhreen, zusammen mit den relevanten Browser-Treibern, und dann Ihre Skripte darauf verbinden, indem Sie die URL verwenden, die Sie wählen, um sie verfügbar zu machen.

## Integrieren von Selenium mit CI-Tools

Ein weiteres Thema ist, dass es auch möglich ist, Selenium und verwandte Tools wie Sauce Labs mit {{Glossary("continuous_integration", "Continuous Integration")}} (CI) Tools zu integrieren — das ist nützlich, da es Ihnen ermöglicht, Ihre Tests über ein CI-Tool auszuführen und nur neue Änderungen in Ihr Code-Repository zu übernehmen, wenn die Tests bestehen.

Es geht über den Rahmen hinaus, dieses Gebiet im Detail in diesem Artikel zu betrachten, aber wir würden vorschlagen, mit Travis CI zu beginnen — dies ist wahrscheinlich das einfachste CI-Tool, mit dem man starten kann, und es hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für absolute Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js-Projekt bauen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie **codeless Automation** für kontinuierliches Testen verwenden möchten, können Sie [Endtest](https://endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte viel Spaß gemacht haben und Ihnen einen ausreichenden Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
