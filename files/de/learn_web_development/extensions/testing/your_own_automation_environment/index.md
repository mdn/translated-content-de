---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Setup der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node installieren und Ihre eigenen Tests ausführen können. Wir werden auch untersuchen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie die, die im vorherigen Artikel diskutiert wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisiertem Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit ausführt, und wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Möglichkeiten, aber die beste Art, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser sendet, um ihn zu automatisieren. Aktionen wie "öffne diese Webseite", "bewege dich über dieses Element" und "klicke auf diesen Link", "überprüfe, ob der Link diese URL öffnet", usw. sind ideal für automatisierte Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmiersprache ab, die Sie zur Erstellung und zum Ausführen Ihrer Tests verwenden möchte. Die meisten beliebten Umgebungen haben ein Paket oder Framework verfügbar, das den WebDriver und die Bindungen installiert, die für die Kommunikation mit WebDriver unter Verwendung dieser Sprache erforderlich sind, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Für weitere Details zu Selenium-Setups für verschiedene Sprachen siehe [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen, wo Sie Browser-Treiber erhalten, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach zu beginnen ist und eine vertrautere Umgebung für Front-End-Entwickler ist.

> [!NOTE]
> Wenn Sie erfahren möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, besuchen Sie auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für einige nützliche Links.

### Einrichten von Selenium in Node

1. Zunächst richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel [Node und npm einrichten](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, um uns die Arbeit mit Selenium aus dem Inneren von Node zu ermöglichen. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium wählen, da die Dokumentation recht aktuell ist und es gut gepflegt wird. Wenn Sie andere Optionen wollen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und achten darauf, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es lohnt sich, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver und die Browser-Treiber zuvor installiert haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, um WebDriver zu erlauben, die Browser zu steuern, die Sie testen möchten. Details, wo Sie sie finden können, finden Sie auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir bleiben bei Firefox und Chrome, da sie auf allen Hauptbetriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einem Ort, der leicht zu navigieren ist, zum Beispiel im Stammverzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Speicherort von `chromedriver` und `geckodriver` Ihrer systemweiten `PATH`-Variable hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihres Festplattenlaufwerks zu dem Verzeichnis sein, das die Treiber enthält. Zum Beispiel, wenn wir einen macOS-Computer verwenden, unser Benutzername bob ist und wir unsere Treiber im Stammverzeichnis unseres Benutzerordners ablegen, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Nur um es zu wiederholen, der Pfad, den Sie `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen, siehe [Versteckte Dateien in macOS anzeigen/verstecken](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das folgende an das Ende Ihrer Datei ein (aktualisieren Sie den Pfad so, wie er tatsächlich auf Ihrem Computer ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie dann Ihr Terminal/Command Prompt neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable sind, indem Sie folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten die Ausgabe im Terminal sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows zu setzen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Lassen Sie uns einen schnellen Test durchführen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Fügen Sie den folgenden Inhalt hinzu und speichern Sie ihn dann:

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
   > Diese Funktion ist ein {{Glossary("IIFE", "IIFE")}} (Immediatley Invoked Function Expression).

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass eine Instanz von Firefox automatisch geöffnet wird! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und die Suchschaltfläche wird angeklickt. WebDriver wartet dann 1 Sekunde, der Titel des Dokuments wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" lautet, geben wir eine Nachricht zurück, die besagt, dass der Test bestanden wurde.

Wir warten dann 2 Sekunden, danach wird WebDriver die Firefox-Instanz schließen und stoppen.

## Tests in mehreren Browsern gleichzeitig ausführen

Es gibt auch nichts, was Sie davon abhalten könnte, den Test gleichzeitig in mehreren Browsern auszuführen. Lassen Sie uns das ausprobieren!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Sie können die Referenzen auf einige der anderen Browser, die wir hinzugefügt haben, gerne ändern, entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem testen können. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug auf den String, den Sie in der `.forBrowser()`-Methode für andere Browser verwenden sollen, sehen Sie sich die [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite an.
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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie auf einem Mac arbeiten und Safari testen möchten, kann eine Fehlermeldung erscheinen wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, folgen Sie der vorgeschlagenen Anweisung und versuchen Sie es erneut.
>
> Sie könnten eine Nachricht erhalten, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn dies der Fall ist, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel, auf einem Mac, <kbd>Ctrl</kbd> + Klick auf die App, wählen _Open_ und wählen _Open_ erneut im Dialogfenster.

Hier haben wir den Test wie zuvor durchgeführt, nur dass wir ihn diesmal in eine Funktion, `searchTest()`, eingebettet haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und jede an die Funktion übergeben, sodass der Test auf allen durchgeführt wird.

Lassen Sie uns fortfahren und die Grundlagen der WebDriver-Syntax im Detail betrachten.

## WebDriver Syntax Crash-Kurs

Lassen Sie uns einige Schlüsselmerkmale der WebDriver-Syntax ansehen. Für vollständige Informationen sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die Hauptdokumentation zu Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, welche viele Beispiele zum Lernen aus verschiedenen Sprachen enthalten.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden, den `Builder`-Konstruktor und das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, wobei Sie die `forBrowser()`-Methode verketten, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten.
Die `build()`-Methode wird am Ende verknüpft, um die Treiberinstanz tatsächlich aufzubauen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, bestimmte Konfigurationsoptionen für die zu testenden Browser festzulegen, z. B. können Sie eine bestimmte Version und ein Betriebssystem angeben, die Sie in der `forBrowser()`-Methode testen möchten:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch über eine Umgebungsvariable setzen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Erstellen wir einen neuen Test, um uns zu erlauben, diesen Code beim Erklären zu erforschen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

Um die Seite, die Sie tatsächlich testen möchten, zu laden, verwenden Sie die `get()`-Methode der Treiberinstanz, die Sie zuvor erstellt haben, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Merkmalen in diesem und den folgenden Abschnitten.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist – wenn Sie anfangen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (siehe später), bricht Ihr Code, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie nun Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalterpfad durch einen echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und versuchen Sie es erneut:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Jetzt, da wir ein Dokument zum Testen haben, müssen wir auf irgendeine Weise mit ihm interagieren, was normalerweise bedeutet, dass Sie zuerst ein spezifisches Element auswählen müssen, um etwas darüber zu testen. Sie können [UI-Elemente in vielen Weisen auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementnamen usw. Die tatsächliche Auswahl erfolgt durch die `findElement()`-Methode, die als Parameter eine Selektionsmethode akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Methoden, ein Element mit CSS zu finden - die `By.css()`-Methode erlaubt es Ihnen, ein Element mithilfe eines CSS-Selektors auszuwählen.

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Sie können nützliche allgemeine Beispiele bei [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten einsehen.

Wenn wir zum Beispiel den Text innerhalb unseres Buttons bekommen wollten, könnten wir dies so tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt Ihrem Ende der `example()`-Funktion wie unten gezeigt hinzu:

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

Führen Sie das Beispiel mit `node` aus, ebenso wie Sie es vorher gemacht haben. Sie sollten die Textbeschriftung des Buttons in der Konsole gemeldet sehen.

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt und ein `alert()`-Fenster sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und testen Sie sie erneut:

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

Als nächstes versuchen wir, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, Ihren Test erneut auszuführen:

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

Sie können Tastendrücke, die nicht durch normale Zeichen dargestellt werden können, mit Eigenschaften des `Key`-Objekts senden. Zum Beispiel haben wir oben das folgende verwendet, um zwischen Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Auf den Abschluss von Vorgängen warten

Es gibt Zeiten, in denen WebDriver darauf warten soll, dass etwas abgeschlossen wird, bevor es weitermacht. Beispielsweise möchten Sie, wenn Sie eine neue Seite laden, darauf warten, dass das DOM der Seite vollständig geladen ist, bevor Sie versuchen, mit ihren Elementen zu interagieren, da der Test sonst wahrscheinlich fehlschlägt.

In unserem `duck_test_multiple.js`-Test haben wir zum Beispiel diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Zeit zum Warten in Millisekunden angibt – die Methode gibt ein {{jsxref("Promise")}} zurück, das nach Ablauf dieser Zeit aufgelöst wird. Wir verwenden das `await`-Schlüsselwort, um die umgebende Funktion anzuhalten, bis das Versprechen aufgelöst wird, danach wird der nachfolgende Code ausgeführt.

Wir könnten auch eine `sleep()`-Methode zu unserem `quick_test.js`-Test hinzufügen – versuchen Sie, Ihre `example()`-Funktion so zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird nun das erste Formularfeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um seinen `value`-Attributwert abzurufen. Anschließend wird eine Nachricht in der Konsole ausgegeben, um Erfolg/Fehler zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung über einen bestimmten Zeitraum hinweg ständig testet und dann den Code ausführt. Dies verwendet auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gemeinsame Bedingungen zur Verwendung zusammen mit `wait()` definiert.

### Treiber nach der Verwendung herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mithilfe der Methode `driver.quit()` herunterfahren, damit sie nicht weiterhin ungenutzt Ressourcen verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Jetzt, wenn Sie es ausführen, sollten Sie sehen, dass der Test ausgeführt wird und die Browserinstanz wieder geschlossen wird, nachdem der Test abgeschlossen ist.

## Best Practices für Tests

Es wurde viel darüber geschrieben, was Best Practices für das Schreiben von Tests sind. Sie können einige gute Hintergrundinformationen bei [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie mit dem Dokument interagieren, stellen Sie sicher, dass Sie Lokalisatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern – wenn Sie ein testbares Element haben, dessen Test Sie ausführen möchten, stellen Sie sicher, dass es eine stabile ID hat, oder eine Position auf der Seite, die mit einem CSS-Selektor ausgewählt werden kann, der nicht einfach mit der nächsten Iteration der Seite geändert wird. Sie möchten, dass Ihre Tests so nicht-anfällig wie möglich sind, d.h. sie brechen nicht einfach, wenn sich etwas ändert.
2. Schreiben Sie atomare Tests: Jeder Test sollte nur eine einzige Sache testen, was es einfach macht, nachzuvollziehen, welche Datei welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzige Sache testet – ob der Titel einer Suchergebnisseite korrekt festgelegt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, sodass es einfacher zu verstehen ist, was es macht, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreiben Sie selbstständige Tests: Jeder Test sollte für sich funktionieren und nicht darauf angewiesen sein, dass andere Tests funktionieren.

Des Weiteren sollten wir auch das Thema Testergebnisse/Berichterstattung erwähnen – in unseren obigen Beispielen haben wir Ergebnisse mithilfe einfacher `console.log()`-Anweisungen gemeldet, aber dies alles wird in JavaScript gemacht, also können Sie jedes beliebige Testlauf- und Berichterstellungssystem verwenden, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), oder ein anderes Tool. Lassen Sie uns durch ein schnelles Beispiel arbeiten:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js)-Beispiels in Ihrem Projektverzeichnis. Platzieren Sie es in einem Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Versprechungen, um alle erforderlichen Schritte in unserem Test auszuführen – die versprechungsbasierten Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das Mocha-Testgerüst, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können nun den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis platzieren) mit folgendem Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`} Flag einfügen, um sicherzustellen, dass Ihre Tests nicht aufgrund des willkürlichen Timeouts von Mocha fehlschlagen (das 3 Sekunden beträgt).

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertionswerkzeugen einrichtet.

## Remote-Tests ausführen

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger als lokal ist. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit einigen zusätzlichen Merkmalen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen (falls vorhanden), die erforderlich sind, um darauf zuzugreifen.

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

3. Holen Sie sich von Ihrer BrowserStack [Account & Profile Details Seite](https://www.browserstack.com/accounts/profile/details) Ihren Benutzernamen und Zugangsschlüssel (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher verwahren).
5. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, irgendeinen Mechanismus für das Berichten von Ergebnissen zu haben!

6. Wenn Sie jetzt zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihren Test gelistet sehen, mit Details, einschließlich einer Videoaufzeichnung des Tests und mehreren detaillierten Protokollen mit Informationen dazu:
   ![BrowserStack automate results](bstack_automated_results.png)

> [!NOTE]
> Die _Resources_ Menüoption auf dem BrowserStack Automation Dashboard enthält eine Fülle nützlicher Informationen zur Automatisierung und zum Ausführen von Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Ausfüllen von BrowserStack-Testdetails programmatisch

Sie können die BrowserStack-REST-API und einige andere Möglichkeiten verwenden, um Ihren Test mit mehr Details zu versehen, wie etwa, ob er bestanden wurde, warum er bestanden wurde, welchem Projekt der Test angehört, usw. BrowserStack weiß diese Details standardmäßig nicht.

Aktualisieren wir unser `bstack_duck_test.js`-Beispiel, um zu zeigen, wie diese Merkmale funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, sodass wir es verwenden können, um Anfragen an die BrowserStack-REST-API zu senden. Fügen Sie folgende Zeile ganz oben in Ihren Code ein:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren Sie nun unser `capabilities`-Objekt, um einen Projektnamen einzuschließen – fügen Sie die folgende Zeile vor der schließenden geschwungenen Klammer hinzu, achten Sie darauf, dass Sie am Ende der vorherigen Zeile ein Komma hinzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automation Dashboard zu organisieren):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Als nächstes werden wir die `sessionId` der aktuellen Sitzung abrufen und sie (zusammen mit Ihrem `userName` und `accessKey`) verwenden, um die URL zu erstellen, an die Anfragen gesendet werden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (dieser beginnt mit `const driver = new Builder()`):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if ... else`-Block nahe dem Ende des Codes, um je nach Bestehen oder Nichtbestehen des Tests entsprechende API-Aufrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem Status "bestanden" oder "nicht bestanden" zu versehen und den Grund für das Ergebnis.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit benutzerdefinierten Daten daran angehängt. Sie zeigt einen Status von "PASSED" und die REST-API meldet den Grund für das Bestehen:

![BrowserStack Custom Results](bstack_custom_results.png)

### Sauce Labs

Schauen wir uns ein Beispiel an, das zeigt, wie man Selenium-Tests remote auf Sauce Labs ausführt:

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

3. Holen Sie von Ihren [Sauce Labs Benutzer Einstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Zugriffsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugriffsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher verwahren).
4. Führen Sie Ihren Test mit folgendem Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, irgendeinen Mechanismus für das Berichten von Ergebnissen zu haben!

5. Wenn Sie jetzt zu Ihrer [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite wechseln, sollten Sie Ihren Test gelistet sehen; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automated test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool, um Fähigkeitsobjekte für Ihre Treiberinstanzen zu generieren, basierend auf dem Browser/OS, den Sie testen möchten.

> [!NOTE]
> Weitere nützliche Details zum Testen mit Sauce Labs und Selenium finden Sie unter [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/), und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Ausfüllen von Sauce Labs-Testdetails programmatisch

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, z.B. ob er bestanden hat, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie das Node Sauce Labs Wrapper mit dem folgenden Befehl (wenn Sie es nicht bereits für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Binden Sie saucelabs ein – setzen Sie dies an den Anfang Ihrer `sauce_google_test.js` Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie folgendes direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie wieder die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugriffsschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password`, nicht `accessKey`, verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unter dem Block, wo Sie die `driver`-Variable definieren (also direkt unter der `build()`-Zeile), fügen Sie folgenden Block ein – dieser stellt die korrekte Treiber-`sessionID` bereit, die wir benötigen, um Daten in den Job zu schreiben (sie werden im nächsten Codeblock in Aktion gesehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Schließlich ersetzen wir den `driver.sleep(2000)` Block nahe dem Ende des Codes mit folgendem:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test erfolgreich war oder fehlschlug, dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Daten zu aktualisieren.

Wenn Sie jetzt zu Ihrem [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückkehren, sollten Sie Ihren neuen Job nun mit aktualisierten Daten daran anhängen sehen:

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Lassen Sie uns sehen, wie das geht.

1. Der Selenium-Remote-Server erfordert Java zum Ausführen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE-Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen wurde.
2. Laden Sie als nächstes den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter – dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer (d.h. nicht eine Beta) und wählen Sie aus der Liste eine Datei aus, die mit "selenium-server-standalone" beginnt. Wenn diese heruntergeladen wurde, legen Sie sie an einem sinnvollen Ort ab, wie z.B. in Ihrem Benutzerverzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie folgendes in ein Terminal auf Ihrem Servercomputer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), sodass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen – versuchen Sie jetzt, dorthin zu gehen, um zu sehen, was Sie bekommen.

Jetzt, wo wir den Server am Laufen haben, lassen Sie uns ein Beispiel für einen Test erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile (die mit `const driver = ...` beginnt) wie folgt ab

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

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten und dann Ihre Skripte damit verbinden, indem Sie die von Ihnen gewählte URL verwenden, um sie offenzulegen.

## Integration von Selenium mit CI-Tools

Es ist auch möglich, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI) Tools zu integrieren – dies ist nützlich, da es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen können und nur dann neue Änderungen in Ihr Code-Repository übernehmen, wenn die Tests bestehen.

Es ist außerhalb des Rahmens, dieses Thema in diesem Artikel im Detail zu betrachten, aber wir würden vorschlagen, mit Travis CI anzufangen – dies ist wahrscheinlich das einfachste CI-Tool, um zu starten, und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe beispielsweise:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeless automation** durchführen möchten, dann können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Ihnen Spaß gemacht haben und Ihnen genug Einblicke in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
