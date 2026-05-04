---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen können. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie sie im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Tests</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Wie Sie eine Selenium-Testumgebung lokal einrichten und Tests damit ausführen und wie Sie diese mit Tools wie Sauce Labs und BrowserStack integrieren können.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Methoden, aber der beste Weg, Selenium zu nutzen, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Browser anweist, um diese zu automatisieren, indem sie Aktionen wie „diese Webseite öffnen“, „über dieses Element auf der Seite fahren“, „diesen Link anklicken“, „prüfen, ob der Link diese URL öffnet“ usw. durchführt. Dies ist ideal, um automatisierte Tests durchzuführen.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, in welcher Programmierumgebung Sie Ihre Tests schreiben und ausführen möchten. Die meisten gängigen Umgebungen bieten ein Paket oder Framework an, das WebDriver und die erforderlichen Bindungen zur Kommunikation mit WebDriver in dieser Sprache installiert, z.B. Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/) für weitere Details zu Selenium-Setups für verschiedene Sprachen.

Unterschiedliche Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen dazu, wo Sie Browser-Treiber erhalten können, finden Sie unter [Plattformen, die von Selenium unterstützt werden](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests unter Verwendung von Node.js abdecken, da es schnell und einfach zu starten ist und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden können, schauen Sie sich auch [Plattformen, die von Selenium unterstützt werden](https://www.selenium.dev/downloads/) an, um nützliche Links zu finden.

### Einrichtung von Selenium in Node

1. Um zu beginnen, richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Node und npm einrichten](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, z. B. `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, mit Selenium innerhalb von Node zu arbeiten. Wir werden das offizielle selenium [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) wählen, da die Dokumentation relativ aktuell zu sein scheint und es gut gewartet wird. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Alternativen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus, wobei Sie sicherstellen, dass Sie sich im Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist weiterhin eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver zuvor installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Details dazu, wo Sie sie bekommen können, finden Sie auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (sehen Sie sich die Tabelle im ersten Abschnitt an). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir werden bei Firefox und Chrome bleiben, da sie auf allen Hauptbetriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einem Ort, der relativ einfach zu navigieren ist, wie das Hauptverzeichnis Ihres Benutzerordners.
3. Fügen Sie den Speicherort der `chromedriver` und `geckodriver` Treiber Ihrer System-`PATH`-Variable hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihres Festplattenlaufwerks zu dem Verzeichnis sein, das die Treiber enthält. Beispielsweise, wenn wir einen Mac mit dem Benutzernamen bob verwenden würden und wir die Treiber im Hauptverzeichnis unseres Heimatordners ablegen würden, würde der Pfad `/Users/bob` lauten.

> [!NOTE]
> Um es noch einmal zu wiederholen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen zu setzen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System `bash` shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen, siehe [Versteckte Dateien in macOS ein-/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das folgende an das Ende Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend dem Pfad auf Ihrem Computer):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie Ihr Terminal/Command Prompt neu, um Ihre Bash-Konfiguration neu zu laden.
4. Überprüfen Sie, dass Ihre neuen Pfade in der `PATH`-Variable sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten ihn im Terminal ausgedruckt sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows einzustellen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://stackoverflow.com/questions/44272416/add-a-folder-to-the-path-environment-variable-in-windows-10-with-screenshots)

Lassen Sie uns eine schnelle Überprüfung machen, um sicherzustellen, dass alles funktioniert.

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
   > Diese Funktion ist eine {{Glossary("IIFE", "IIFE")}} (Immediately Invoked Function Expression).

3. Im Terminal vergewissern Sie sich, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, dass sich automatisch eine Instanz von Firefox öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben und der Suchknopf wird angeklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" ist, geben wir eine Nachricht zurück, dass der Test bestanden ist.

Dann warten wir 2 Sekunden, nach denen WebDriver die Firefox-Instanz herunterfährt und stoppt.

## Testen in mehreren Browsern gleichzeitig

Es spricht auch nichts dagegen, den Test gleichzeitig auf mehreren Browsern auszuführen. Versuchen wir es!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können gerne die Verweise auf einige der anderen Browser ändern, diese entfernen usw., je nachdem, welche Browser auf Ihrem Betriebssystem verfügbar sind. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Um zu wissen, welchen String Sie in der `.forBrowser()` Methode für andere Browser verwenden sollen, sehen Sie sich die [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite an.
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

3. Im Terminal vergewissern Sie sich, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden Safari zu testen, kann es sein, dass Sie eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." erhalten. Wenn dies der Fall ist, folgen Sie der Anweisung und versuchen Sie es erneut.
>
> Sie erhalten möglicherweise eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, da sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn dies der Fall ist, können Sie diese Sicherheitseinstellung nur für diese Treiber-App überschreiben. Zum Beispiel auf einem Mac <kbd>Ctrl</kbd> + auf die App klicken, _Öffnen_ wählen und im erscheinenden Dialogfeld erneut _Öffnen_ wählen.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion, `searchTest()`, eingepackt haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, sodass der Test auf allen durchgeführt wird.

Lassen Sie uns weitermachen und die Grundlagen der WebDriver-Syntax etwas detaillierter betrachten.

## WebDriver Syntax Crash Kurs

Schauen wir uns einige der wichtigsten Merkmale der WebDriver-Syntax an. Für umfassendere Details sollten Sie die [selenium-webdriver JavaScript API Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz konsultieren und die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) lesen, die mehrere Beispiele in verschiedenen Sprachen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver` Modul einbeziehen und den `Builder` Konstruktor und das `Browser` Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um eine neue Instanz eines Treibers zu erstellen, und verketten die Methode `forBrowser()`, um anzugeben, mit welchem Browser Sie mit diesem Builder testen möchten. Die Methode `build()` wird am Ende angekettet, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassen-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Bitte beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für die zu testenden Browser festzulegen. Beispielsweise können Sie eine bestimmte Version und ein OS angeben, um in der Methode `forBrowser()` zu testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mithilfe einer Umgebungsvariablen einstellen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, um uns den Code direkt anzusehen, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektordner eine neue Datei mit dem Namen `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

### Holen Sie sich das Dokument, das Sie testen möchten

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die Methode `get()` der zuvor erstellten Treiberinstanz, z.B.:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Informationen zu den Funktionen in diesem Abschnitt sowie zu denen darunter finden Sie in der [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie beginnen, einen Remote-Server zum Ausführen Ihrer Tests zu verwenden (siehe später), wird Ihr Code fehlschlagen, wenn Sie lokale Pfade zu verwenden versuchen.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, ersetzen Sie den Platzhalterpfad durch einen realen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und versuchen Sie, ihn auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Jetzt, da wir ein zu testendes Dokument haben, müssen wir in irgendeiner Weise damit interagieren, was normalerweise bedeutet, dass zunächst ein spezifisches Element ausgewählt wird, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die Methode `findElement()`, die eine Auswahlmethode als Parameter akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element durch CSS zu suchen — die Methode `By.css()` erlaubt es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und Elementen innerhalb dieser zu interagieren. Nützliche gängige Beispiele finden Sie ab [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text in unserem Button abrufen wollten, könnten wir Folgendes tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt an das Ende der `example()`-Funktion wie unten gezeigt hinzu:

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

Führen Sie das Beispiel mit `node` auf dieselbe Weise aus, wie Sie es zuvor getan haben. Sie sollten sehen, wie das Textlabel des Buttons in der Konsole angezeigt wird.

Lassen Sie uns etwas tun, das etwas nützlicher ist. Ersetzen Sie den vorherigen Codeeintrag durch `button.click();` wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt und ein `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, es zu testen:

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

Als nächstes versuchen wir, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, Ihren Test auszuführen:

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

Sie können Tastendrücke, die nicht durch normale Zeichen dargestellt werden können, mit Eigenschaften des `Key` Objekts senden. Zum Beispiel haben wir oben das folgende verwendet, um zwischen Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Auf den Abschluss eines Prozesses warten

Es gibt Situationen, in denen Sie WebDriver warten lassen müssen, bis etwas abgeschlossen ist, bevor es fortfährt. Beispielsweise, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite geladen ist, bevor Sie mit einem der Elemente darin interagieren, da der Test sonst wahrscheinlich fehlschlägt.

In unserem `duck_test_multiple.js`-Test haben wir zum Beispiel diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Zeit angibt, die in Millisekunden gewartet werden soll — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit erfüllt wird. Wir verwenden das `await`-Schlüsselwort, um die umschließende Funktion zu pausieren, bis das Versprechen erfüllt ist, danach wird der Code nach der Methode ausgeführt.

Wir könnten `sleep()` auch zu unserem `quick_test.js`-Test hinzufügen — versuchen Sie Ihre `example()`-Funktion so zu aktualisieren:

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

Versuchen Sie den aktualisierten Code auszuführen. WebDriver wird nun das erste Eingabefeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt ist (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um den Wert seines `value` Attributs zu erhalten. Anschließend wird eine Nachricht in der Konsole ausgegeben, um Erfolg oder Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die bestimmte Bedingungen für eine gewisse Dauer wiederholt testet und dann den Code weiter ausführt. Dies nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die allgemeine Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Benutzung abschalten

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle Treiberinstanzen, die Sie geöffnet haben, mit der Methode `driver.quit()` herunterfahren, um zu verhindern, dass sie unnötigerweise Ressourcen verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie das jetzt ausführen, sollten Sie sehen, dass der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests heruntergefahren wird.

## Test beste Praktiken

Es wurde viel über beste Praktiken beim Schreiben von Tests geschrieben. Sie können einige gute Hintergrundinformationen auf [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie [mit dem Dokument interagieren](#interaktion_mit_dem_dokument), stellen Sie sicher, dass Sie Locator und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern — wenn Sie ein testbares Element haben, das Sie testen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann und bei der nächsten Iteration der Website nicht einfach geändert wird. Sie möchten Ihre Tests so wenig brüchig wie möglich machen, d.h. dass sie nicht einfach brechen, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, damit es einfach ist, den Überblick zu behalten, welche Datei welches Kriterium testet. Der `duck_test.js`-Test, den wir uns oben angesehen haben, ist ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist, herauszufinden, was er tut, falls wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte für sich allein funktionieren und nicht von anderen Tests abhängig sein, um zu funktionieren.

Zusätzlich sollten wir auch Testresultate/Berichterstattung erwähnen — wir haben in unseren obigen Beispielen Testergebnisse mit einfachen `console.log()` Anweisungen berichtet, aber das ist alles in JavaScript, daher können Sie jedes Testlauf- und Berichtssystem verwenden, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Werkzeug. Lassen Sie uns ein kurzes Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Versprechungen, um alle erforderlichen Schritte in unserem Test auszuführen — die versprochenen Methoden, die WebDriver verwendet, müssen erfüllt sein, damit es richtig funktioniert.
2. Installieren Sie das Mocha-Testwerkzeug, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) jetzt mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`-Flag hinzufügen, damit Ihre Tests nicht aufgrund des willkürlichen Zeitlimits von Mocha (das 3 Sekunden beträgt) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombination von Test-/Assertion-Tools einrichtet.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das Ausführen sie lokal. Sie müssen lediglich Ihre Treiberinstanz erstellen, jedoch mit ein paar mehr spezifizierten Merkmalen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der benötigten Benutzeranmeldeinformationen (falls vorhanden).

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

3. Von Ihrer [Account & Profile details Seite](https://www.browserstack.com/accounts/profile/details) bei BrowserStack, holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel Werte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird an Ihre Konsole zurückgesendet. Dies zeigt die Bedeutung eines Ergebnisberichtsmechanismus!

6. Wenn Sie jetzt zum [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details einschließlich eines Videorecordings des Tests und mehreren detaillierten Protokollen mit Informationen dazu:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Menüoption _Resources_ auf dem BrowserStack-Automations-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung für automatisierte Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für Node-spezifische Informationen.

#### Ausfüllen von BrowserStack-Testdetails programmgesteuert

Sie können die BrowserStack REST API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu versehen, wie ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details standardmäßig nicht.

Lassen Sie uns unser `bstack_duck_test.js` Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das Modul [axios](https://www.npmjs.com/package/axios) durch Ausführen des folgenden Befehls innerhalb Ihres Projektverzeichnisses:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Nun aktualisieren wir unser `capabilities` Objekt, um einen Projektnamen hinzuzufügen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu, und denken Sie daran, am Ende der vorhergehenden Zeile ein Komma einzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern auf dem BrowserStack-Automatisierungs-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als nächstes rufen wir die `sessionId` der aktuellen Sitzung ab und verwenden diese (zusammen mit Ihrem `userName` und `accessKey`), um die URL zusammenzustellen, um Anfragen an BrowserStack zu senden, um die Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt) :

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Abschließend aktualisieren wir den `if...else` Block nahe dem unteren Ende des Codes, um passende API-Anfragen an BrowserStack zu senden, je nachdem, ob der Test bestanden oder nicht bestanden wurde:

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

Wenn der Test abgeschlossen ist, senden wir eine API-Anfrage an BrowserStack, um den Test mit einem bestanden oder fehlgeschlagenen Status zu aktualisieren und einem Grund für das Ergebnis.

Wenn Sie jetzt zum [BrowserStack Automate dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, jedoch mit Ihren benutzerdefinierten Daten daran angehängt. Es zeigt einen Status von "PASSED" und den von der REST API gemeldeten Grund für den Pass:

![Benutzerdefinierte BrowserStack-Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Lassen Sie uns ein Beispiel ansehen, das zeigt, wie Sie Selenium-Tests mit Sauce Labs remote ausführen können:

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

3. Von Ihren [Sauce Labs Benutzer-Einstellungen](https://app.saucelabs.com/user-settings) holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Schlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet, und das Testergebnis wird an Ihre Konsole zurückgesendet. Dies zeigt die Bedeutung eines Ergebnisberichtsmechanismus!

5. Wenn Sie jetzt zur [Sauce Labs Automatisierten Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere solche Daten einsehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Platform Konfigurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool zum Erzeugen von Capability-Objekten für Ihre Treiberinstanzen, basierend darauf, welchen Browser/OS Sie testen möchten.

> [!NOTE]
> Weitere nützliche Informationen zum Testen mit Sauce Labs und Selenium finden Sie in der Broschüre [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/), und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Ausfüllen von Sauce Labs-Testdetails programmgesteuert

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, wie ob er bestanden wurde, den Namen des Tests usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl (wenn Sie es für dieses Projekt noch nicht getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie `saucelabs` — setzen Sie dies oben in Ihrer `sauce_google_test.js` Datei, direkt unter den vorhergehenden Variablendeklarationen:

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

   Ersetzen Sie auch hier die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Schlüsselwerte (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password`, nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver`-Variable definieren (direkt unterhalb der `build()`-Zeile), fügen Sie den folgenden Block hinzu — dies erhält die korrekte Treiber-`sessionID`, die wir benötigen, um Daten in den Job zu schreiben (Sie können es in Aktion im nächsten Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)`-Block nahe dem unteren Ende des Codes mit dem folgenden:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden wurde oder nicht, dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zur [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückkehren, sollten Sie sehen, dass Ihr neuer Job jetzt die aktualisierten Daten daran angehängt hat:

![Sauce Labs aktualisierte Jobinfo](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack nutzen möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Sehen wir uns an, wie das geht.

1. Der Selenium-Remote-Server benötigt Java, um zu laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, sobald es heruntergeladen ist.
2. Laden Sie als nächstes den neuesten [Selenium Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die aktuellste stabile Version (d.h. keine Beta), und wählen Sie aus der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen ist, legen Sie es an einem sinnvollen Ort ab, wie z.B. in Ihrem Heimatverzeichnis. Wenn Sie den Standort nicht bereits zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe [Einrichtung von Selenium in Node](#einrichtung_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie Folgendes in ein Terminal auf Ihrem Serverrechner eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen) sodass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie erhalten.

Nun, da wir den Server laufen haben, erstellen wir ein Demotest, der auf dem remote Selenium-Server laufen wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Zeile des Codes (die mit `const driver = …` beginnt) so

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten ihn ordnungsgemäß laufen sehen; diesmal jedoch laufen Sie ihn auf dem Standalone Server:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten das auf fast jedem Server zusammen mit den entsprechenden Browser-Treibern einrichten und dann Ihre Skripte damit verbinden, indem Sie die URL verwenden, die Sie sich entscheiden, zu veröffentlichen.

## Integration von Selenium mit CI-Tools

Als weiterer Punkt ist es auch möglich, Selenium und verwandte Tools wie Sauce Labs mit {{Glossary("continuous_integration", "Continuous Integration")}} (CI)-Tools zu integrieren — das ist nützlich, da Sie Ihre Tests über ein CI-Tool ausführen und nur neue Änderungen in Ihr Code-Repository committen können, wenn die Tests bestehen.

Es ist nicht im Rahmen dieses Artikels, dieses Thema im Detail zu betrachten, aber wir empfehlen Ihnen, mit Travis CI anzufangen — das ist wahrscheinlich das einfachste CI-Tool, um loszulegen, und es hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js Projekt bauen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliche Tests mit **codeless automation** durchführen möchten, können Sie [Endtest](https://endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Ihnen Spaß gemacht haben und sollte Ihnen einen ausreichenden Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
