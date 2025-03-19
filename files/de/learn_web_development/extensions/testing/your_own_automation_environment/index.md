---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node durchführen können. Wir werden auch betrachten, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie in dem vorherigen Artikel besprochen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung der
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Grundprinzipien des Cross-Browser-Tests</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit durchführt, und wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Möglichkeiten, aber die beste Methode, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Anrufe an einen Browser sendet, um ihn zu automatisieren. Dabei werden Aktionen wie "öffne diese Webseite", "fahre über dieses Element auf der Seite", "klicke diesen Link", "prüfe, ob der Link diese URL öffnet", usw. ausgeführt. Dies ist ideal für automatisierte Tests.

Die Installation und Verwendung von WebDriver hängt davon ab, in welcher Programmierrumgebung Sie Ihre Tests schreiben und ausführen möchten. Für die meisten gängigen Umgebungen gibt es ein Paket oder Framework, das WebDriver und die Bindungen installiert, die erforderlich sind, um mit diesem WebDriver zu kommunizieren, zum Beispiel Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Informationen zu Selenium-Einrichtungen für verschiedene Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern verschiedene Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen dazu, wo Sie Browser-Treiber erhalten können, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach ist, loszulegen, und eine vertrautere Umgebung für Frontend-Entwickler bietet.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden können, schauen Sie sich auch die [Von Selenium unterstützten Plattformen](https://www.selenium.dev/downloads/) an, um einige nützliche Links zu finden.

### Einrichtung von Selenium in Node

1. Zunächst richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Einrichten von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, von innerhalb von Node mit Selenium zu arbeiten. Wir entscheiden uns für das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation relativ aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie verschiedene Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist auch eine gute Idee, diese Schritte zu befolgen, selbst wenn Sie selenium-webdriver zuvor installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als Nächstes müssen Sie die relevanten Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Sie finden Einzelheiten dazu, woher Sie sie beziehen können, auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)-Seite (siehe die Tabelle im ersten Abschnitt). Einige der Browser sind offensichtlich betriebssystemspezifisch, aber wir bleiben bei Firefox und Chrome, da diese auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/)- und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable)-Treiber herunter.
2. Entpacken Sie sie an einem leicht zu erreichenden Ort, wie dem Stammverzeichnis Ihres Benutzerordners.
3. Fügen Sie den Speicherort der `chromedriver`- und `geckodriver`-Treiber Ihrer Systemvariablen `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stammverzeichnis Ihrer Festplatte zum Verzeichnis mit den Treibern sein. Wenn wir zum Beispiel einen macOS-Computer verwenden würden, unser Benutzername bob wäre und wir unsere Treiber im Stammverzeichnis unseres Heimatordners abgelegt hätten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es noch einmal zu betonen: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Das ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet).
   > [!NOTE]
   > Wenn Sie keine versteckten Dateien sehen können, müssen Sie diese sichtbar machen. Siehe [Versteckte Dateien in macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie am Ende Ihrer Datei Folgendes ein (Aktualisieren Sie den Pfad so, wie er tatsächlich auf Ihrem Computer ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, starten Sie dann Ihr Terminal/Kommandozeilenfenster neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten sie im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows zu setzen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Lassen Sie uns einen kurzen Test versuchen, um sicherzustellen, dass alles funktioniert.

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

3. In Terminal vergewissern Sie sich, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass sich eine Firefox-Instanz automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird im Suchfeld eingegeben, und der Suchknopf wird geklickt. WebDriver wartet dann eine Sekunde; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" ist, geben wir eine Nachricht zurück, um anzuzeigen, dass der Test bestanden wurde.

Wir warten dann 2 Sekunden, nach denen WebDriver die Firefox-Instanz herunterfährt und stoppt.

## Auf mehreren Browsern gleichzeitig testen

Es gibt auch nichts, was Sie davon abhält, den Test gleichzeitig in mehreren Browsern auszuführen. Das wollen wir ausprobieren!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Sie können gerne die Referenzen auf einige der anderen Browser ändern, sie entfernen usw., je nachdem, welche Browser auf Ihrem Betriebssystem verfügbar sind. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Was den String betrifft, der in der `.forBrowser()`-Methode für andere Browser verwendet werden soll, siehe die [Browser-Enum-Referenzseite](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Geben Sie Ihrer Datei den folgenden Inhalt und speichern Sie sie dann:

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

3. In Terminal vergewissern Sie sich, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung ähnlich der folgenden: "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie diese erhalten, folgen Sie der angegebenen Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie dies erhalten, können Sie diese Sicherheitsmaßnahme nur für diese Treiber-App überbrücken. Beispielsweise auf einem Mac mit <kbd>Ctrl</kbd> + Klick auf die App, wählen Sie _Öffnen_ und wählen Sie _Öffnen_ erneut aus dem resultierenden Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, allerdings haben wir ihn diesmal in eine Funktion, `searchTest()`, eingeschlossen. Wir haben neue Browserinstanzen für mehrere Browser erstellt und diese dann an die Funktion übergeben, sodass der Test auf allen durchgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax in etwas mehr Detail betrachten.

## WebDriver-Syntax-Schnellkurs

Sehen wir uns einige wichtige Funktionen der WebDriver-Syntax an. Für vollständigere Details sollten Sie das [JavaScript-API-Referenzdokument zu selenium-webdriver](https://www.selenium.dev/selenium/docs/api/javascript/) für ein detailliertes Referenzdokument sowie die Hauptdokumentation von Selenium [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele zum Lernen bietet, die in verschiedenen Sprachen geschrieben sind.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden und den `Builder`-Konstruktor und die `Browser`-Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen und die `forBrowser()`-Methode zu verketten, um anzugeben, mit welchem Browser Sie diesen Builder testen möchten. Die `build()`-Methode wird am Ende angefügt, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Merkmalen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für Browser, die getestet werden sollen, festzulegen. Beispielsweise können Sie in der `forBrowser()`-Methode eine spezifische Version und ein Betriebssystem festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariablen setzen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Erstellen Sie einen neuen Test, um uns zu ermöglichen, diesen Code zu erkunden, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie ihr den folgenden Code hinzu:

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

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Merkmalen in diesem Abschnitt und den folgenden Abschnitten.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie anfangen, einen Remote-Server für Ihre Tests zu verwenden (siehe später), wird Ihr Code fehlschlagen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, indem Sie den Platzhalterpfad mit einem echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer ersetzen, und versuchen Sie, sie auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Nun, da wir ein Dokument zum Testen haben, müssen wir in irgendeiner Weise damit interagieren, was in der Regel bedeutet, dass zuerst ein spezifisches Element ausgewählt wird, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt über die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Um zum Beispiel ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element auszuwählen, erfolgt über CSS — die `By.css()`-Methode ermöglicht es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie Ihre `example()`-Funktion jetzt wie folgt und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und darin enthaltenen Elementen zu interagieren. Nützliche gängige Beispiele finden Sie unter [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in der WebDriver-Dokumentation.

Wenn wir den Text in unserem Button abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun am Ende der `example()`-Funktion hinzu wie unten gezeigt:

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

Führen Sie das Beispiel wie zuvor mit `node` aus. Sie sollten die Textbeschriftung des Buttons in der Konsole berichtet sehen.

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt, und ein `alert()`-Popup sollte erscheinen. Wenigstens wissen wir, dass der Button funktioniert!

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

Probieren wir als Nächstes aus, Text in die Formularelemente einzufügen. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, Ihren Test erneut auszuführen:

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

Sie können Tastatureingaben, die nicht durch normale Zeichen dargestellt werden können, mit Eigenschaften des `Key`-Objekts einreichen. Zum Beispiel haben wir oben Folgendes verwendet, um zwischen Formulareingabefeldern zu wechseln:

```js
input.sendKeys(Key.TAB);
```

### Warten, bis etwas abgeschlossen ist

Es gibt Zeiten, in denen Sie WebDriver dazu bringen müssen, auf etwas zu warten, bevor Sie fortfahren. Wenn Sie zum Beispiel eine neue Seite laden, möchten Sie darauf warten, dass das DOM der Seite vollständig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, da der Test andernfalls wahrscheinlich fehlschlagen wird.

In unserem `duck_test_multiple.js`-Test haben wir zum Beispiel diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das `await`-Schlüsselwort, um die umgebende Funktion so lange zu pausieren, bis das Versprechen aufgelöst ist, wonach der Code nach der Methode ausgeführt wird.

Wir könnten auch eine `sleep()`-Methode zu unserem `quick_test.js`-Test hinzufügen — versuchen Sie, Ihre `example()`-Funktion so zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird jetzt das erste Formularfeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert gefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um seinen `value`-Attributwert abzurufen. Dann wird eine Meldung in die Konsole ausgegeben, um Erfolg/Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung wiederholt für eine bestimmte Zeit testet und dann den Code weiter ausführt. Dies nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die häufig verwendete Bedingungen zur Verwendung mit `wait()` definiert.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mit der `driver.quit()`-Methode herunterfahren, um sicherzustellen, dass sie nicht unnötig Ressourcen verwenden. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie ihn jetzt ausführen, sollten Sie sehen, dass der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests geschlossen wird.

## Beste Praktiken beim Testen

Es wurde viel darüber geschrieben, was als beste Praktiken für das Schreiben von Tests gilt. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie mit dem Dokument [Interagieren mit dem Dokument](#interaktion_mit_dem_dokument), stellen Sie sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern — wenn Sie ein testbares Element haben, das Sie testen möchten, stellen Sie sicher, dass es eine stabile ID hat oder eine Position auf der Seite, die mit einem CSS-Selektor ausgewählt werden kann, der sich nicht mit der nächsten Iteration der Website ändert. Sie möchten Ihre Tests so robust wie möglich machen, d.h. sie brechen nicht einfach, wenn sich etwas ändert.
2. Schreiben Sie atomare Tests: Jeder Test sollte nur eine einzige Sache testen, damit es einfach ist, zu verfolgen, welche Testdatei welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzelne Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist herauszufinden, was er macht, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreiben Sie autonome Tests: Jeder Test sollte für sich selbst funktionieren und nicht von anderen Tests abhängen, um zu funktionieren.

Darüber hinaus sollten wir erwähnen, dass Test-Ergebnisse/Reporting wichtig sind — in unseren obigen Beispielen haben wir Ergebnisse mit einfachen `console.log()`-Anweisungen berichtet, aber alles dies wird in JavaScript gemacht, sodass Sie jedes beliebige Testlaufergebnis- und Berichtssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js)-Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Promises, um alle erforderlichen Schritte in unserem Test auszuführen — die auf Promises basierenden Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das Mocha-Testharness, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test jetzt (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`-Flag einfügen, um sicherzustellen, dass Ihre Tests nicht aufgrund der willkürlichen Timeoutgrenze von Mocha (die 3 Sekunden beträgt) fehlschlagen.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie verschiedene Kombinationen von Test-/Assertion-Werkzeugen eingerichtet werden.

## Remote-Tests ausführen

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das Ausführen auf lokalen Systemen. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit einigen weiteren spezifizierten Funktionen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie (falls erforderlich) für den Zugriff benötigen.

### BrowserStack

Erstellen wir ein Beispiel, um zu zeigen, wie ein Selenium-Test remote auf [BrowserStack](https://www.browserstack.com/automate) ausgeführt wird:

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

3. Besorgen Sie sich Ihren Benutzernamen und den Zugangsschlüssel von Ihrer BrowserStack [Account- und Profildetail-Seite](https://www.browserstack.com/accounts/profile/details) (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihren tatsächlichen Benutzernamen- und Zugangsschlüsselwerten (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung eines Ergebnis-Reporting-Mechanismus!

6. Wenn Sie jetzt zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details, einschließlich einer Videoaufnahme des Tests und mehreren detaillierten Protokollen der ihm zugehörigen Informationen:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Menüoption _Resources_ auf dem Browserstack-Automatisierungs-Dashboard enthält viele nützliche Informationen zur Verwendung zur Durchführung automatisierter Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für nodespezifische Informationen.

#### Ausfüllen von BrowserStack-Testdetails programmgesteuert

Sie können die BrowserStack-REST-API und einige andere Funktionen verwenden, um Ihrem Test weitere Details hinzuzufügen, wie ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Aktualisieren wir unser `bstack_duck_test.js`-Demo, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```js
   npm install axios
   ```

2. Importieren Sie das axios-Modul, um es zu verwenden, um Anfragen an die BrowserStack-REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Jetzt aktualisieren wir unser `capabilities`-Objekt, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, erinnern Sie sich daran, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können die Build- und Projektnamen ändern, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungs-Dashboard zu organisieren):

   ```js
   project: "DuckDuckGo test 2";
   ```

4. Wir werden als nächstes die `sessionId` der aktuellen Sitzung abrufen und sie (zusammen mit Ihrem `userName` und `accessKey`) verwenden, um die URL zu erstellen, an die Anfragen gesendet werden, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (das beginnt mit `const driver = new Builder()`):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if ... else`-Block nahe dem unteren Ende des Codes, um je nach bestandenen oder fehlgeschlagenem Test die entsprechenden API-Anfragen an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir eine API-Anfrage an BrowserStack, um den Test mit einem bestandenen oder fehlgeschlagenen Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten Daten angehängt. Es zeigt einen Status von "PASSED" und den durch die REST-API gemeldeten Grund für das Bestehen an:

![BrowserStack benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Werfen wir einen Blick auf ein Beispiel, das zeigt, wie Selenium-Tests remote auf Sauce Labs ausgeführt werden:

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

3. Besorgen Sie sich Ihren Benutzernamen und den Zugangsschlüssel aus Ihren [Sauce Labs-Benutzereinstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung eines Ergebnis-Berichterstattungs-Mechanismus!

5. Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test-Dashboard](https://app.saucelabs.com/dashboard/tests)-Seite gehen, sollten Sie Ihren Test aufgelistet sehen; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Plattform-Konfigurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool zur Generierung von Fähigkeitsobjekten, die an Ihre Treiberinstanzen übergeben werden, basierend auf dem Browser/Betriebssystem, auf dem Sie testen möchten.

> [!NOTE]
> Weitere nützliche Details zum Testen mit Sauce Labs und Selenium finden Sie in [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmgesteuertes Ausfüllen von Sauce Labs-Testdetails

Sie können die Sauce Labs-API verwenden, um Ihren Test mit weiteren Details zu versehen, z. B. ob er bestanden wurde, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Dazu müssen Sie:

1. Installieren Sie den Node Sauce Labs-Wrapper mit dem folgenden Befehl (falls Sie es noch nicht für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Erforderliche saucelabs — setzen Sie dies oben in Ihre `sauce_google_test.js`-Datei, direkt unter den vorherigen Variablendeklarationen:

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

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugangsschlüsselwerte (beachten Sie, dass das Saucelabs-npm-Paket verwirrenderweise `password`, nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie darin zu speichern.

4. Unter dem Block, in dem Sie die `driver`-Variable definieren (direkt unter der `build()`-Zeile), fügen Sie den folgenden Block hinzu — dies erhält die richtige Treiber `sessionID`, die benötigt wird, um Daten in das Job zu schreiben (Sie können sie in Aktion im nächsten Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Schließlich ersetzen Sie den Block `driver.sleep(2000)` nahe dem unteren Ende des Codes durch Folgendes:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden wurde oder nicht, und dann die `saucelabs.updateJob()`-Methode verwendet, um die Details zu aktualisieren.

Wenn Sie nun zu Ihrer [Sauce Labs Automated Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückkehren, sollten Sie sehen, dass Ihr neuer Job jetzt die aktualisierten Daten hat:

![Sauce Labs aktualisierte Jobinformationen](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remotetests-Server einrichten. Schauen wir uns an, wie das geht.

1. Der Remote-Server von Selenium benötigt Java, um ausgeführt zu werden. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie als nächstes den neuesten [Selenium-Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — er fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer aus (d.h. nicht eine Betaversion) und aus der Liste wählen Sie eine Datei, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen ist, legen Sie es an einem sinnvollen Ort ab, wie Ihrem Heimatverzeichnis. Wenn Sie den Speicherort nicht bereits zu Ihrem `PATH` hinzugefügt haben, tun Sie das jetzt (siehe Abschnitt [Einrichtung von Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie Folgendes in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen), sodass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` ausgeführt — versuchen Sie jetzt, dorthin zu navigieren, um zu sehen, was Sie erhalten.

Nun, da wir den Server laufen haben, lassen Sie uns ein Demo-Test erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile im Code (die beginnt mit `const driver = …`) so:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet läuft; diesmal jedoch werden Sie ihn auf dem Standalone-Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies fast auf jedem Server mit den relevanten Browser-Treibern einrichten und dann Ihre Skripte mit der URL verbinden, die Sie bereitstellen.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI)-Tools zu integrieren — das ist nützlich, da es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen können, und neue Änderungen nur an Ihr Code-Repository übermitteln, wenn die Tests bestanden werden.

Es ist außerhalb des Umfangs dieses Artikels, dieses Gebiet im Detail zu betrachten, aber wir empfehlen Ihnen, mit Travis CI zu beginnen — dies ist wahrscheinlich der einfachste CI-Tool, mit dem Sie beginnen können und es hat eine gute Integration mit Webtools wie GitHub und Node.

Um zu beginnen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeless automation** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen einen ausreichenden Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, um mit dem Schreiben Ihrer eigenen automatisierten Tests zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
