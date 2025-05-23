---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie diejenigen, die im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        von den grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Testing</a> und des
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
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

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browser-Automatisierung. Es gibt andere Möglichkeiten, aber der beste Weg, Selenium zu nutzen, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser zur Automatisierung macht. Dabei werden Aktionen wie "öffne diese Webseite", "bewege über dieses Element auf der Seite", "klicke diesen Link", "prüfe, ob der Link diese URL öffnet" usw. ausgeführt. Dies ist ideal, um automatisierte Tests auszuführen.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, in welcher Programmierumgebung Sie Ihre Tests schreiben und ausführen möchten. Die meisten beliebten Umgebungen verfügen über ein Paket oder Framework, das WebDriver und die erforderlichen Bindungen installiert, um mit WebDriver in dieser Sprache zu kommunizieren, zum Beispiel Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zu Selenium-Setups für verschiedene Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Siehe [von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für weitere Informationen darüber, wo Sie Browser-Treiber erhalten können usw.

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach zu starten ist und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden können, schauen Sie sich auch die [von Selenium unterstützten Plattformen](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichtung von Selenium in Node

1. Um zu beginnen, richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Einrichtung von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es anders, zum Beispiel `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, mit Selenium aus Node heraus zu arbeiten. Wir werden uns für das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium entscheiden, da die Dokumentation recht aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) auch gute Wahlen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie zuvor selenium-webdriver installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Sie finden Einzelheiten über deren Bezugsquellen auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir werden bei Firefox und Chrome bleiben, da sie auf allen Hauptbetriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einen Ort, der leicht zu navigieren ist, wie das Stammverzeichnis Ihres Heimverzeichnisses.
3. Fügen Sie den Speicherort der Treiber `chromedriver` und `geckodriver` Ihrer Systemumgebungsvariablen `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihrer Festplatte bis zum Verzeichnis enthalten, in dem sich die Treiber befinden. Zum Beispiel, wenn wir einen macOS-Computer benutzen, unser Benutzername bob wäre und wir unsere Treiber im Stamm unseres Heimverzeichnisses abgelegt hätten, würde der Pfad `/Users/bob` lauten.

> [!NOTE]
> Um es noch einmal zu betonen: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen einzurichten:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen. Siehe [Versteckte Dateien auf macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend dem tatsächlichen Standort auf Ihrem Computer):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, starten Sie dann Ihr Terminal/Ihre Eingabeaufforderung neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variablen sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal ausgedruckt sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows einzurichten, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/).

Lassen Sie uns einen schnellen Test durchführen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Geben Sie ihr den folgenden Inhalt und speichern Sie ihn:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, wie sich ein Firefox-Fenster automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und die Suchschaltfläche wird angeklickt. WebDriver wartet dann 1 Sekunde, der Dokumententitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" lautet, wird eine Nachricht zurückgegeben, die besagt, dass der Test bestanden wurde.

Wir warten dann 2 Sekunden, danach wird der Firefox-Prozess durch WebDriver geschlossen und gestoppt.

## Testen in mehreren Browsern gleichzeitig

Es spricht nichts dagegen, den Test gleichzeitig in mehreren Browsern auszuführen. Versuchen wir dies!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Sie können die Referenzen auf einige der anderen Browser, die wir hinzugefügt haben, gerne ändern, entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem zum Testen zur Verfügung haben. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug auf die Zeichenfolge, die Sie in der `.forBrowser()`-Methode für andere Browser verwenden sollen, siehe die [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie diese erhalten, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie diese erhalten, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel auf einem Mac mit <kbd>Ctrl</kbd> + Klick auf die App, wählen Sie _Öffnen_ und wählen Sie _Öffnen_ erneut im erscheinenden Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion, `searchTest()`, eingebettet haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, damit der Test auf allen ausgeführt wird.

Lassen Sie uns fortfahren und die Grundlagen der WebDriver-Syntax etwas genauer ansehen.

## WebDriver-Syntax Schnellkurs

Lassen Sie uns einige Schlüsselmerkmale der WebDriver-Syntax betrachten. Für vollständige Details sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele in verschiedenen Sprachen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden und den `Builder`-Konstruktor sowie das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, und verküpfen die `forBrowser()`-Methode, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten.
Die `build()`-Methode wird am Ende verknüpft, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Es ist zu beachten, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser festzulegen. Zum Beispiel können Sie in der `forBrowser()`-Methode eine spezifische Version und ein Betriebssystem zum Testen festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariable setzen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, der es uns ermöglicht, diesen Code beim Besprechen zu erkunden. Erstellen Sie in Ihrem Selenium-Testprojektdirektorium eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

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

### Das Dokument zum Testen laden

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der Treiberinstanz, die Sie zuvor erstellt haben, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem und den folgenden Abschnitten.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Ort zu verwenden, damit der Code flexibler ist – wenn Sie einen Remote-Server zum Ausführen Ihrer Tests verwenden (siehe weiter unten), wird Ihr Code nicht funktionieren, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalterpfad durch einen realen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und versuchen Sie es noch einmal:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Jetzt, wo wir ein Dokument zum Testen haben, müssen wir in irgendeiner Weise mit ihm interagieren, was üblicherweise zuerst die Auswahl eines spezifischen Elements beinhaltet, um etwas darüber zu testen. In WebDriver können Sie [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/), einschließlich über ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Arten, ein Element zu finden, ist durch CSS — die `By.css()`-Methode erlaubt Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie jetzt Ihre `example()`-Funktion und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche und häufige Beispiele finden Sie ab [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text in unserer Schaltfläche abrufen möchten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt am Ende der `example()`-Funktion hinzu, wie unten dargestellt:

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

Führen Sie das Beispiel mit `node` aus, wie Sie es zuvor getan haben. Sie sollten den Textetikett der Schaltfläche in der Konsole sehen.

Lassen Sie uns etwas nützlicheres tun. Ersetzen Sie den vorherigen Code-Eintrag durch `button.click();`, wie unten gezeigt:

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

Versuchen wir als nächstes, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, Ihren Test erneut auszuführen:

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

Sie können Tastenanschläge senden, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben folgendes verwendet, um zwischen den Formulareingaben zu wechseln:

```js
input.sendKeys(Key.TAB);
```

### Auf den Abschluss einer Verarbeitung warten

Es gibt Zeiten, in denen Sie WebDriver warten lassen wollen, bevor es mit etwas weitermacht. Wenn Sie beispielsweise eine neue Seite laden, wollen Sie warten, bis das DOM der Seite das Laden abgeschlossen hat, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren, da der Test andernfalls wahrscheinlich fehlschlägt.

In unserem `duck_test_multiple.js` Test zum Beispiel haben wir diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die zu wartende Zeit in Millisekunden angibt – die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das `await` Schlüsselwort, um die umschließende Funktion zu pausieren, bis das Versprechen aufgelöst wird, wonach der Code nach der Methode ausgeführt wird.

Wir könnten auch eine `sleep()`-Methode zu unserem `quick_test.js` Test hinzufügen – versuchen Sie, Ihre `example()`-Funktion so zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird jetzt das erste Formularfeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um seinen Wert des `value`-Attributs abzurufen. Anschließend wird eine Nachricht an die Konsole gedruckt, um Erfolg/Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeitspanne wiederholt testet und dann den Code weiterhin ausführt. Dies macht auch Gebrauch von der [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die allgemeine Bedingungen zur Verwendung zusammen mit `wait()` definiert.

### Fahrer nach der Nutzung herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mit der `driver.quit()` Methode schließen, um sicherzustellen, dass sie keine Ressourcen mehr unnötig verwenden. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie sehen, dass der Test ausgeführt wird und die Browserinstanz wieder geschlossen wird, nachdem der Test abgeschlossen ist.

## Beste Praktiken für Tests

Es wurde viel über beste Praktiken für das Schreiben von Tests geschrieben. Sie finden gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie beim [Interagieren mit dem Dokument](#interaktion_mit_dem_dokument) sind, stellen Sie sicher, dass Sie Lokalisatoren und Seitenelemente verwenden, die sich wahrscheinlich nicht ändern – wenn Sie ein testbares Element haben, auf das Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann und sich nicht mit der nächsten Website-Iteration ändert. Sie wollen Ihre Tests so wenig fehleranfällig wie möglich machen, d.h. sie sollen nicht einfach scheitern, wenn sich etwas ändert.
2. Atomares Testen schreiben: Jeder Test sollte nur eine Sache testen, was es einfach macht, den Überblick darüber zu behalten, welche Testdatei welches Kriterium testet. Der `duck_test.js`-Test, den wir oben angesehen haben, ist ziemlich gut, da er nur eine einzige Sache testet – ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist zu verstehen, was er tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte für sich arbeiten und nicht davon abhängen, dass andere Tests funktionieren.

Zusätzlich sollten wir die Testergebnisse/-berichte erwähnen — wir haben in unseren obigen Beispielen Testergebnisse mit einfachen `console.log()`-Anweisungen gemeldet, aber das wird alles in JavaScript gemacht, sodass Sie jedes gewünschte Testausführungs- und Berichtssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durcharbeiten:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Promises, um alle Schritte, die in unserem Test erforderlich sind, auszuführen – die auf Promises basierenden Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es richtig funktioniert.
2. Installieren Sie das Mocha-Test-Framework, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihr `test` Verzeichnis legen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts` Flag einfügen, um sicherzustellen, dass Ihre Tests aufgrund des arbiträren Timeouts von Mocha (welches 3 Sekunden beträgt) nicht scheitern.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertions-Tools einrichtet.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen Ihre Treiberinstanz erstellen, jedoch mit einigen weiteren Funktionen, einschließlich der Fähigkeiten des Browsers, auf dem Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

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

3. Holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel von Ihrer [Account & Profile Detailseite](https://www.browserstack.com/accounts/profile/details) von BrowserStack (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, irgendeinen Mechanismus für die Ergebnisberichterstattung einzuschließen!

6. Wenn Sie jetzt zum [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details einschließlich einer Videoaufnahme des Tests und mehreren detaillierten Protokollen mit Informationen dazu:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die _Resources_-Menüoption auf dem Browserstack-Automations-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung von BrowserStack für automatisierte Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für nodespezifische Informationen.

#### Programmatisches Ausfüllen von BrowserStack-Testdetails

Sie können die REST-API von BrowserStack und einige andere Funktionen verwenden, um Ihren Test mit weiteren Details zu versehen, wie zum Beispiel, ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details nicht standardmäßig.

Aktualisieren wir unser `bstack_duck_test.js` Demo, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das Axios-Modul, damit wir es verwenden können, um Anfragen an die REST-API von BrowserStack zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren Sie nun unser `capabilities`-Objekt, um einen Projektnamen einzuschließen – fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu und denken Sie daran, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automation-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als nächstes rufen wir die `sessionId` der aktuellen Sitzung ab und verwenden diese (zusammen mit Ihrem `userName` und `accessKey`), um die zu sendende URL zu komponieren, um Anfragen zu senden und die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Aktualisieren Sie abschließend den `if ... else`-Block am unteren Ende des Codes, um je nach Testpass oder -fehler entsprechende API-Aufrufe an BrowserStack zu senden:

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

Wenn der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem Bestandenen- oder Fehlgeschlagen-Status zu aktualisieren, und einen Grund für das Ergebnis.

Gehen Sie nun zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/), und Sie sollten Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten Daten angehängt. Es zeigt einen Status von "PASSED" und den von der REST-API berichteten Grund für den Erfolg:

![BrowserStack benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Schauen wir uns ein Beispiel an, das zeigt, wie Selenium-Tests remote auf Sauce Labs ausgeführt werden:

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

3. Holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel aus Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, irgendeinen Mechanismus für die Ergebnisberichterstattung einzuschließen!

5. Jetzt, wenn Sie zu Ihrer [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, werden Sie Ihren Test aufgelistet sehen; von hier aus können Sie Videos, Screenshots und andere Daten einsehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zur Erstellung von Capability-Objekten, die Sie Ihren Treiberinstanzen füttern können, basierend auf welchem Browser/OS Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Informationen zum Testen mit Sauce Labs und Selenium, siehe [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Programmatisches Ausfüllen von Sauce Labs-Testdetails

Sie können die Sauce Labs-API verwenden, um Ihren Test mit weiteren Details zu versehen, wie zum Beispiel, ob er bestanden wurde, der Name des Tests usw. Sauce Labs kennt diese Details nicht standardmäßig!

Dazu müssen Sie:

1. Installieren Sie das Node Sauce Labs Wrapper mit folgendem Befehl (wenn Sie es nicht schon für dieses Projekt gemacht haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Binden Sie saucelabs ein – setzen Sie dies an den Anfang Ihrer `sauce_google_test.js` Datei, direkt unter den vorherigen Variablen-Deklarationen:

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

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihrem tatsächlichen Benutzernamen und Zugriffsschlüssel (beachten Sie, dass das saucelabs npm-Paket an dieser Stelle verwirrend `password` anstelle von `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie vielleicht ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver`-Variable definieren (direkt unterhalb der `build()`-Zeile), fügen Sie den folgenden Block hinzu – das gibt die richtige `sessionID` des Treibers ab, die wir benötigen, um Daten zum Job zu schreiben (Sie können es in Aktion im nächsten Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)` Block nahe dem unteren Ende des Codes mit dem folgenden:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden wurde oder fehlschlägt, dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie nun zu Ihrem [Sauce Labs Automatisierte Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sollten Sie sehen, dass Ihr neuer Job nun die aktualisierten Daten angehängt hat:

![Sauce Labs aktualisierte Jobinfos](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack nutzen möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Schauen wir uns an, wie das geht.

1. Der Selenium-Remote-Server erfordert Java zum Ausführen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, sobald es heruntergeladen ist.
2. Laden Sie als nächstes den neuesten [Selenium-Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter – dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d.h. kein Beta) und wählen Sie aus der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Wenn der Download abgeschlossen ist, legen Sie es an einem sinnvollen Ort ab, wie Ihrem Heimverzeichnis. Wenn Sie den Ort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe den Abschnitt [Einrichtung von Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie den folgenden Befehl in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), so dass er genau mit der von Ihnen heruntergeladenen Datei übereinstimmt.

4. Der Server läuft auf `http://localhost:4444/wd/hub` – versuchen Sie, jetzt dorthin zu gehen, um zu sehen, was Sie bekommen.

Jetzt, wo wir den Server laufen haben, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote-Selenium-Server läuft.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Zeile, die den Code (mit `const driver = …`) wie folgt startet

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet ausgeführt wird; diesmal jedoch wird er auf dem Standalone-Server ausgeführt:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten und dann Ihre Skripte mit der URL verbinden, die Sie dafür aussetzen.

## Integration von Selenium mit CI-Tools

Als weiteren Punkt ist es auch möglich, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI)-Tools zu integrieren – dies ist nützlich, da Sie Ihre Tests über ein CI-Tool ausführen können und nur neue Änderungen in Ihrem Code-Repository vornehmen, wenn die Tests bestehen.

Es liegt außerhalb des Umfangs, diesen Bereich im Detail in diesem Artikel zu betrachten, aber wir empfehlen Ihnen, mit Travis CI zu beginnen – dies ist wahrscheinlich das einfachste CI-Tool, um damit zu beginnen, und es hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für völlige Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js-Projekt erstellen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [LambdaTest mit Travis CI verwenden](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [LambdaTest mit CircleCI verwenden](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [LambdaTest mit Jenkins verwenden](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Sauce Labs mit Travis CI verwenden](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeless automation** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genug Einblick in das Schreiben und Ausführen von automatisierten Tests gegeben haben, damit Sie Ihre eigenen automatisierten Tests schreiben können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
