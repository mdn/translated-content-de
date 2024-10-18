---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
l10n:
  sourceCommit: 2ba42e9a17d88924844a5ffb60d232ca3cf23372
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen können. Wir werden auch betrachten, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie sie im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen; eine Vorstellung von den grundlegenden
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testings</a>, und
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet, Tests damit ausführt und wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Möglichkeiten, aber der beste Weg, Selenium zu nutzen, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser durchführt, um ihn zu automatisieren, indem Aktionen wie „diese Webseite öffnen“, „über dieses Element auf der Seite fahren“, „diesen Link anklicken“, „überprüfen, ob der Link diese URL öffnet“ usw. durchgeführt werden. Dies ist ideal für die Ausführung automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmiersprache ab, die Sie zum Schreiben und Ausführen Ihrer Tests verwenden möchten. Für die meisten beliebten Umgebungen gibt es ein Paket oder Framework, das WebDriver und die erforderlichen Bindungen installiert, um mit WebDriver zu kommunizieren, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zu Selenium-Setups für verschiedene Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, um es WebDriver zu ermöglichen, mit ihnen zu kommunizieren und sie zu steuern. Weitere Informationen darüber, wo Sie Browser-Treiber beziehen können, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach ist, damit zu beginnen, und eine vertrautere Umgebung für Frontend-Entwickler ist.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen Serverumgebungen verwenden, schauen Sie sich auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichten von Selenium in Node

1. Um zu beginnen, richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Einrichten von Node und npm](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#setting_up_node_and_npm) beschrieben. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als Nächstes müssen wir ein Framework installieren, das uns ermöglicht, mit Selenium innerhalb von Node zu arbeiten. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium wählen, da die Dokumentation recht aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Alternativen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver bereits installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als Nächstes müssen Sie die relevanten Treiber herunterladen, um WebDriver die Kontrolle über die Browser zu ermöglichen, die Sie testen möchten. Details dazu, wo Sie sie beziehen können, finden Sie auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)-Seite (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir werden bei Firefox und Chrome bleiben, da diese auf allen gängigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie in ein Verzeichnis, zu dem Sie leicht navigieren können, wie das Stammverzeichnis Ihres Benutzerordners.
3. Fügen Sie den Speicherort der `chromedriver` und `geckodriver` Treiber Ihrer System-`PATH`-Variablen hinzu. Dies sollte ein absoluter Pfad von der Wurzel Ihrer Festplatte zum Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen macOS-Rechner verwenden würden, unser Benutzername Bob wäre und wir unsere Treiber im Stammverzeichnis unseres Benutzerordners abgelegt hätten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es nochmals zu betonen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, und nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS und den meisten Linux-Systemen einzustellen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie keine versteckten Dateien sehen können, müssen Sie diese sichtbar machen. Siehe [Versteckte Dateien in macOS anzeigen/verbergen](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu).
2. Fügen Sie Folgendes ans Ende Ihrer Datei ein (aktualisieren Sie den Pfad, wie er tatsächlich auf Ihrem Rechner ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, dann starten Sie Ihr Terminal/Kommandozeilenfenster neu, um Ihre Bash-Konfiguration neu zu laden.
4. Prüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows einzustellen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Versuchen wir einen kurzen Test, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektordner mit dem Namen `duck_test.js`:
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
   > Diese Funktion ist ein {{Glossary("IIFE", "IIFE")}} (Sofort Aufgerufener Funktionsausdruck).

3. Stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl im Terminal ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, wie sich eine Instanz von Firefox automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, „webdriver“ wird in das Suchfeld eingegeben und der Suchknopf wird angeklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen, und wenn er „webdriver at DuckDuckGo“ ist, geben wir eine Nachricht zurück, um anzuzeigen, dass der Test bestanden wurde.

Wir warten dann 2 Sekunden, nach denen WebDriver die Firefox-Instanz herunterfährt und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie daran hindert, den Test gleichzeitig in mehreren Browsern auszuführen. Versuchen wir das!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können die Verweise auf einige andere Browser, die wir hinzugefügt haben, nach Belieben ändern oder entfernen, abhängig davon, welche Browser Sie auf Ihrem Betriebssystem testen können. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Welchen String Sie für andere Browser in der `.forBrowser()`-Methode verwenden, finden Sie in der Referenzseite [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie ihn:

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

3. Stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl im Terminal ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung wie „Konnte keine Sitzung erstellen: Sie müssen die Option 'Fernsteuerung erlauben' im Menü Safari Entwickeln aktivieren, um Safari über WebDriver zu steuern.“ Wenn Sie dies erhalten, folgen Sie der Anweisung und versuchen Sie es erneut.
>
> Sie könnten eine Nachricht erhalten, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn dies geschieht, können Sie diese Sicherheitseinstellung nur für diese Treiber-App außer Kraft setzen. Zum Beispiel auf dem Mac, <kbd>Ctrl</kbd> + Klick auf die App, wählen Sie _Öffnen_ und wählen Sie nochmals _Öffnen_ im resultierenden Dialogfeld.

In diesem Fall haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion, `searchTest()`, eingebunden haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und anschließend jedem die Funktion übergeben, sodass der Test auf allen ausgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax etwas detaillierter betrachten.

## Schnellkurs zur WebDriver-Syntax

Lassen Sie uns einige wichtige Funktionen der WebDriver-Syntax betrachten. Für vollständigere Details sollten Sie das [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) zurate ziehen, sowie die Hauptdokumentation von Selenium mit dem [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/), die mehrere Beispiele zur Lernhilfe in verschiedenen Sprachen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden und den `Builder`-Konstruktor sowie das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, indem Sie die `forBrowser()`-Methode anreihen, um anzugeben, mit welchem Browser Sie diesen Builder testen möchten.
Die `build()`-Methode wird am Ende angehängt, um tatsächlich die Treiber-Instanz zu erstellen (siehe [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser einzustellen, beispielsweise können Sie eine spezifische Version und ein Betriebssystem einrichten, um sie in der `forBrowser()`-Methode zu testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie können diese Optionen auch mit einer Umgebungsvariable einstellen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, um uns den Code anzuschauen, während wir darüber sprechen. Erstellen Sie innerhalb Ihres Selenium-Testprojekt-Verzeichnisses eine neue Datei mit dem Namen `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

### Abrufen des Dokuments, das Sie testen möchten

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Details zu den Funktionen in diesem Abschnitt und den folgenden finden Sie in der [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL zum Testen eines lokalen Dokuments:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie anfangen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (siehe später), wird Ihr Code fehlschlagen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt und ersetzen Sie den Platzhalterpfad durch einen echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer, und versuchen Sie es auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Nachdem wir ein Dokument zum Testen haben, müssen wir in irgendeiner Weise damit interagieren, was normalerweise bedeutet, dass wir zuerst ein spezifisches Element auswählen, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich durch ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die Methode `findElement()`, die als Parameter eine Auswahlsmethode akzeptiert. Zum Beispiel, um ein Element mit einer ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element mit CSS zu finden — die `By.css()`-Methode ermöglicht es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie Ihre `example()`-Funktion jetzt wie folgt und versuchen Sie, das Beispiel auszuführen:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche gängige Beispiele finden Sie ab dem Abschnitt [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text in unserem Button abrufen möchten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt unten in der `example()`-Funktion hinzu, wie unten gezeigt:

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

Führen Sie das Beispiel mit `node` erneut aus, so wie Sie es zuvor getan haben. Sie sollten das Textlabel des Buttons in der Konsole angezeigt sehen.

Lassen Sie uns etwas Nützlicheres tun. Ersetzen Sie den vorherigen Code durch `button.click();` wie unten gezeigt:

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

Als Nächstes versuchen wir, etwas Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, Ihren Test auszuführen:

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

Sie können Tastendrücke übermitteln, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben folgendes verwendet, um zwischen Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Warten auf den Abschluss einer Aktion

Es gibt Zeiten, in denen Sie möchten, dass WebDriver wartet, bis etwas abgeschlossen ist, bevor es fortfährt. Zum Beispiel, wenn Sie eine neue Seite laden, sollten Sie warten, bis das DOM der Seite fertig geladen ist, bevor Sie versuchen, mit einem seiner Elemente zu interagieren, andernfalls schlägt der Test wahrscheinlich fehl.

In unserem `duck_test_multiple.js` Test haben wir beispielsweise diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das `await`-Schlüsselwort, um die umschließende Funktion anzuhalten, bis das Versprechen aufgelöst ist. Danach wird der folgende Code ausgeführt.

Wir könnten eine `sleep()`-Methode auch zu unserem `quick_test.js` Test hinzufügen — versuchen Sie, Ihre `example()` Funktion so zu aktualisieren:

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

Versuchen Sie den aktualisierten Code auszuführen. WebDriver füllt jetzt das erste Formularfeld aus, wartet eine Sekunde, und testet dann, ob dessen Wert ausgefüllt wurde (d. h. nicht leer ist), indem `getAttribute()` verwendet wird, um dessen `value`-Attributwert abzurufen. Anschließend wird eine Nachricht auf der Konsole zur Erfolgsmeldung/Fehlmeldung ausgegeben.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeit immer wieder testet, und dann den Rest des Codes ausführt. Diese nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiber-Instanzen mit der Methode `driver.quit()` herunterfahren, damit sie nicht weiterhin unnötig Ressourcen verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie den Test sehen und die Browser-Instanz sollte wieder heruntergefahren werden, nachdem der Test abgeschlossen ist.

## Beste Testpraktiken

Es wurde viel über Best Practices für das Schreiben von Tests geschrieben. Gute Hintergrundinformationen finden Sie unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [mit dem Dokument interagieren](#interaktion_mit_dem_dokument), stellen Sie sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die sich voraussichtlich nicht ändern — wenn Sie ein testbares Element haben, mit dem Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine feste ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann und nicht einfach mit der nächsten Site-Iteration geändert wird. Sie möchten Ihre Tests so unempfindlich wie möglich machen, d. h. sie brechen nicht einfach, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, sodass es leicht ist, im Auge zu behalten, welche Testdatei welches Kriterium testet. Der `duck_test.js` Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist, herauszufinden, was er tut, wenn wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte für sich alleine arbeiten und nicht abhängig von anderen Tests sein.

Zusätzlich sollten wir Testresultate/Berichterstattung erwähnen — in unseren obigen Beispielen haben wir Resultate mit einfachen `console.log()`-Anweisungen berichtet, aber dies alles erfolgt in JavaScript, sodass Sie jedes Test- und Berichtssystem verwenden können, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns durch ein schnelles Beispiel arbeiten:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels innerhalb Ihres Projektverzeichnisses. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle Schritte in unserem Test auszuführen — die auf Versprechen basierenden Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es richtig funktioniert.
2. Installieren Sie den Mocha-Test-Harness, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können jetzt den Test (und alle anderen Tests, die Sie in Ihrem `test` Verzeichnis ablegen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das Flag `--no-timeouts` einschließen, um sicherzustellen, dass Ihre Tests nicht scheitern, nur weil sie das willkürliche Timeout von Mocha (das 3 Sekunden beträgt) überschreiten.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie verschiedene Kombinationen von Test-/Assertionstools eingerichtet werden.

## Remote-Tests ausführen

Es stellt sich heraus, dass es nicht viel schwieriger ist, Tests auf Remote-Servern auszuführen, als sie lokal auszuführen. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit ein paar weiteren Funktionen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die (falls erforderlich) benötigt werden, um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, um zu zeigen, wie man einen Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausführt:

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

3. Von Ihrer BrowserStack [Konten- und Profildetailseite](https://www.browserstack.com/accounts/profile/details) erhalten Sie Ihren Benutzernamen und Zugriffskey (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzer- und Zugriffskey-Werte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird an Ihre Konsole zurückgemeldet. Dies zeigt die Bedeutung eines Resultatbericht-Mechanismus!

6. Wenn Sie nun zum [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details, einschließlich einer Videoaufzeichnung des Tests und mehreren ausführlichen Protokollen der Informationen, die ihn betreffen:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die _Ressourcen_ Menüoption auf dem Browserstack- Automations-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung für automatisierte Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für Node-spezifische Informationen.

#### Programmgesteuertes Ausfüllen von BrowserStack-Testdetails

Sie können die BrowserStack-REST-API und einige andere Funktionen nutzen, um Ihren Test mit weiteren Details zu annotieren, beispielsweise ob er bestanden hat, warum er bestanden hat, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Aktualisieren wir unser `bstack_duck_test.js`-Demo, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```js
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an das BrowserStack-REST-API zu senden. Fügen Sie folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren wir jetzt unser `capabilities`-Objekt, um einen Projektnamen einzuschließen — fügen Sie folgende Zeile vor der schließenden geschweiften Klammer hinzu, wobei Sie daran denken, am Ende der vorherigen Zeile ein Komma einzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungs-Dashboard zu organisieren):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Nun werden wir die `sessionId` der aktuellen Sitzung abrufen und sie (zusammen mit Ihrem `userName` und `accessKey`) verwenden, um die URL zusammenzustellen, an die Anfragen gesendet werden, um die Daten bei BrowserStack zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unterhalb des Blocks hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Abschließend aktualisieren wir den `if ... else` Block nahe dem Ende des Codes, um je nach Bestanden/Nicht-Bestanden des Tests entsprechende API-Aufrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem bestanden oder nicht bestanden Status zu aktualisieren und einem Grund für das Ergebnis.

Wenn Sie nun zurück zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) gehen, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten Daten daran angehängt. Es zeigt einen Status von "PASSED" und den vom REST-API gemeldeten Grund für das Bestehen:

![BrowserStack benutzerdefinierte Ergebnisse](bstack_custom_results.png)

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

3. Von Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings) erhalten Sie Ihren Benutzernamen und Zugriffskey. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffskey Werte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgemeldet. Dies zeigt die Bedeutung eines Resultatbericht-Mechanismus!

5. Wenn Sie jetzt auf Ihre [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sehen Sie Ihren Test gelistet; von hier können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Plattformkonfigurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool zum Generieren von Fähigkeit-Objekten, die an Ihre Treiberinstanzen übermittelt werden, basierend auf dem Browser/OS, das Sie testen möchten.

> [!NOTE]
> Weitere nützliche Details zum Testen mit Sauce Labs und Selenium finden Sie unter [Einführung in automatisiertes Website-Testing mit Selenium](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmgesteuertes Ausfüllen von Sauce Labs-Testdetails

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, wie z. B. ob er bestanden hat, den Namen des Tests usw. Sauce Labs kennt diese Details von Haus aus nicht!

Dazu müssen Sie:

1. Den Node Sauce Labs Wrapper mit folgendem Befehl installieren (wenn Sie das nicht bereits für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. saucelabs einbinden — setzen Sie dies an den Anfang Ihrer `sauce_google_test.js` Datei, direkt unter die vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Eine neue Instanz von SauceLabs erstellen, indem Sie folgendes direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie dabei die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffskey-Werte (beachten Sie, dass das saucelabs npm-Paket etwas verwirrend `password` anstelle von `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um diese zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver` Variable definieren (direkt unter der `build()` Zeile), fügen Sie den folgenden Block hinzu — dieser erhält die richtige Treiber-SessionID, die wir benötigen, um Daten zum Job zu schreiben (Sie können dies im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)` Block near dem unteren Ende des Codes durch Folgendes:

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

Hier haben wir eine `testPassed` Variable gesetzt auf `true` oder `false` je nachdem, ob der Test besteht oder fehlschlägt, dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn você nun zurück zu Ihrer [Sauce Labs Automatisierten Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sollten Sie Ihren neuen Job nun mit den aktualisierten Daten darin sehen:

![Sauce Labs aktualisierte Jobinfo](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn vous keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können vous immer Ihren eigenen Remote-Testserver einrichten. Schauen wir uns an, wie das geht.

1. Der Selenium Remote Server benötigt Java zur Ausführung. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE-Downloadseite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Als Nächstes laden Sie den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d. h. keine Beta), und aus der Liste wählen Sie eine Datei, die mit „selenium-server-standalone“ beginnt. Wenn dies heruntergeladen wurde, legen Sie es an einen sinnvollen Ort, wie in Ihrem Benutzerverzeichnis. Wenn vous den Speicherort nicht bereits zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie folgendes in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen), sodass er genau auf die Datei passt, die Sie haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie erhalten.

Da wir den Server am Laufen haben, erstellen wir einen Demo-Test, der auf dem Remote-Selenium-Server läuft.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und rufen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile im Code (die mit `const driver = …` beginnt) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und vous sollten ihn wie erwartet laufen sehen; diesmal jedoch werden Sie ihn auf dem Standalone-Server laufen lassen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben das lokal getestet, aber vous könnten dies auf fast jedem Server zusammen mit den entsprechenden Browser-Treibern einrichten und dann Ihre Skripte daran anschließen, indem Sie die URL verwenden, die Sie zum Veröffentlichen wählen.

## Integrieren von Selenium mit CI-Tools

Als weiterer Punkt ist es auch möglich, Selenium und verwandte Tools wie LambdaTest und Sauce Labs in Continuous Integration (CI)-Tools zu integrieren — dies ist nützlich, da vous Ihre Tests über ein CI-Tool ausführen können und neue Änderungen an Ihr Code-Repository nur dann übernehmen, wenn die Tests erfolgreich sind.

Es liegt außerhalb des Umfangs, diesen Bereich in diesem Artikel im Detail zu betrachten, aber wir empfehlen, mit Travis CI zu beginnen — dies ist wahrscheinlich das am einfachsten zu verwendende CI-Tool und bietet gute Integration mit Webtools wie GitHub und Node.

Zum Einstieg sehen vous zum Beispiel:

- [Travis CI für absolute Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn vous kontinuierliches Testen mit **codelose Automatisierung** durchführen möchten, können vous [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und sollte Ihnen genügend Einblicke in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit vous damit beginnen können, Ihre eigenen automatisierten Tests zu schreiben.

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
