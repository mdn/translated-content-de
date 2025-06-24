---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Einrichten der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie sie im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Grundverständnis der grundsätzlichen
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien von Cross-Browser-Testing</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisiertem Testen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie eine Selenium-Testumgebung lokal eingerichtet und Tests mit dieser ausgeführt werden, sowie wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Möglichkeiten, aber die beste Art, Selenium zu nutzen, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser vornimmt, um ihn zu automatisieren und Aktionen wie "diese Webseite öffnen", "über dieses Element auf der Seite fahren", "diesen Link anklicken", "prüfen, ob der Link diese URL öffnet" usw. auszuführen. Dies ist ideal zum Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmumgebung ab, in der Sie Ihre Tests schreiben und ausführen möchten. Für die meisten gängigen Umgebungen gibt es ein Paket oder Framework, das WebDriver und die notwendigen Bindungen, um mit WebDriver in dieser Sprache zu kommunizieren, installieren wird, z. B. Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/) für weitere Details zu Selenium-Setups für verschiedene Sprachen.

Unterschiedliche Browser benötigen unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Siehe [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für weitere Informationen dazu, wo Sie die Browser-Treiber finden können usw.

Wir werden das Schreiben und Ausführen von Selenium-Tests unter Verwendung von Node.js abdecken, da dies schnell und einfach zu starten ist und eine vertrautere Umgebung für Front-End-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, schauen Sie sich auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) an, um einige nützliche Links zu finden.

### Einrichten von Selenium in Node

1. Um zu beginnen, richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Einrichten von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, um mit Selenium von innen in Node arbeiten zu können. Wir werden das offizielle Selenium-Framework [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) wählen, da die Dokumentation anscheinend ziemlich aktuell und gut gepflegt ist. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Entscheidungen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, selbst wenn Sie selenium-webdriver früher installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, um WebDriver die Steuerung der Browser zu ermöglichen, die Sie testen möchten. Sie finden Details dazu, wo Sie diese herbekommen, auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser OS-spezifisch, aber wir werden uns an Firefox und Chrome halten, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einem Ort, der leicht zu navigieren ist, wie das Root-Verzeichnis Ihres Home-User-Verzeichnisses.
3. Fügen Sie den `chromedriver` und `geckodriver` den Pfad zur Systemvariablen `PATH` hinzu. Dies sollte ein absoluter Pfad von der Wurzel Ihrer Festplatte sein, zum Verzeichnis, das die Treiber enthält. Wenn wir zum Beispiel einen macOS-Rechner verwenden würden, unser Benutzername wäre bob, und wir hätten unsere Treiber im Root-Verzeichnis unseres Home-Ordners abgelegt, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es zu wiederholen: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen einzustellen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile` wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen, siehe [Versteckte Dateien in macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie Folgendes am Ende Ihrer Datei hinzu (aktualisieren Sie den Pfad, so wie er tatsächlich auf Ihrem Rechner ist):

   ```bash
   #Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie dann Ihr Terminal/Ihre Eingabeaufforderung neu, um Ihre Bash-Konfiguration neu anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable vorhanden sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten sie im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows festzulegen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Lassen Sie uns einen schnellen Test versuchen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Geben Sie ihr den folgenden Inhalt, und speichern Sie sie dann:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Sie sollten sehen, wie sich eine Instanz von Firefox automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben, und die Suchschaltfläche wird angeklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann abgerufen, und wenn es "webdriver at DuckDuckGo" ist, wird eine Nachricht zurückgegeben, die besagt, dass der Test bestanden ist.

Wir warten dann 2 Sekunden, danach wird WebDriver die Firefox-Instanz schließen und stoppen.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, das Sie daran hindert, den Test gleichzeitig auf mehreren Browsern auszuführen. Versuchen wir das!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Sie können die Verweise auf einige der anderen Browser, die wir hinzugefügt haben, nach Belieben ändern, entfernen usw., je nachdem, welche Browser Ihnen zur Verfügung stehen, um auf Ihrem Betriebssystem zu testen. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Was die Zeichenfolge betrifft, die Sie in der `.forBrowser()`-Methode für andere Browser verwenden, siehe die [Browser-Enumeration](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und sich entscheiden, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung, die ungefähr besagt: "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, folgen Sie der angegebenen Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht aus einer überprüften Quelle heruntergeladen wurde. Wenn dies geschieht, können Sie diese Sicherheitseinstellung nur für diese Treiber-App außer Kraft setzen. Klicken Sie dazu unter Mac mit <kbd>Ctrl</kbd> + auf die App, wählen Sie _Öffnen_, und wählen Sie _Öffnen_ erneut aus dem resultierenden Dialogfeld.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal innerhalb einer Funktion, `searchTest()`, verpackt haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jeder den Funktionsaufruf übergeben, sodass der Test auf allen durchgeführt wird.

Lassen Sie uns weitergehen und uns die Grundlagen der WebDriver-Syntax etwas genauer ansehen.

## WebDriver-Syntax-Crashkurs

Lassen Sie uns einen Blick auf einige wichtige Merkmale der WebDriver-Syntax werfen. Für vollständigere Details sollten Sie das [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für ein detailliertes Nachschlagewerk und die Hauptdokumentation von Selenium's [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele enthält, die in verschiedenen Sprachen geschrieben sind und von denen Sie lernen können.

### Starten eines neuen Tests

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden, indem Sie den `Builder`-Konstruktor und die `Browser`-Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen und die `forBrowser()`-Methode anzuketten, um den Browser zu spezifizieren, mit dem Sie mit diesem Builder testen möchten. Die `build()`-Methode wird am Ende angekettet, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Hinweis: Es ist möglich, spezifische Konfigurationsoptionen für zu testende Browser festzulegen, zum Beispiel können Sie eine bestimmte Version und ein bestimmtes Betriebssystem in der `forBrowser()`-Methode testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariable festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Erstellen wir einen neuen Test, um uns diesen Code anzusehen, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

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
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Informationen über die in diesem Abschnitt behandelten Funktionen und darüber hinaus.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Es ist jedoch besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie beginnen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (siehe später), wird Ihr Code brechen, wenn Sie lokale Pfade verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt, indem Sie den Platzhalterpfad durch einen tatsächlichen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer ersetzen und versuchen, ihn auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Interaktion mit dem Dokument

Jetzt, da wir ein Dokument zum Testen haben, müssen wir in irgendeiner Weise damit interagieren, was normalerweise bedeutet, dass wir zuerst ein bestimmtes Element auswählen müssen, um etwas zu testen. Sie können [Benutzerschnittstellenelemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die Methode `findElement()`, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element zu finden, ist durch CSS — die Methode `By.css()` ermöglicht es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Nützliche gängige Beispiele finden Sie unter [Textwerte erhalten](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in der WebDriver-Dokumentation.

Wenn wir den Text in unserem Button erhalten möchten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun am Ende der `example()`-Funktion hinzu, wie unten gezeigt:

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

Führen Sie das Beispiel wie zuvor beschrieben mit `node` aus. Sie sollten die Textbezeichnung des Buttons im Konsolenausgabe sehen.

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

Versuchen wir als Nächstes, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und führen Sie Ihren Test erneut aus:

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

Sie können Tastendrücke übermitteln, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben folgendes verwendet, um zwischen den Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Warten darauf, dass etwas abgeschlossen wird

Es gibt Zeiten, in denen Sie WebDriver dazu bringen wollen, darauf zu warten, dass etwas abgeschlossen wird, bevor es weitergeht. Zum Beispiel, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite vollständig geladen ist, bevor Sie versuchen, mit ihren Elementen zu interagieren, andernfalls wird der Test wahrscheinlich fehlschlagen.

In unserem `duck_test_multiple.js`-Test, zum Beispiel, haben wir diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das Schlüsselwort `await`, um die umgebende Funktion anzuhalten, bis das Promise aufgelöst wird, woraufhin der Code nach der Methode ausgeführt wird.

Wir könnten auch der `quick_test.js`-Test eine `sleep()`-Methode hinzufügen — versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird jetzt das erste Formularfeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um seinen `value`-Attributwert abzurufen. Es druckt dann eine Nachricht in die Konsole, um Erfolg/Fehlschlag zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeit wiederholt testet und dann den Code weiter ausführt. Dies nutzt auch das [Hilfsbibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), das häufige Bedingungen definiert, um zusammen mit `wait()` verwendet zu werden.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie einen Test ausgeführt haben, sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` herunterfahren, um sicherzustellen, dass sie nicht unnötig Ressourcen verwenden. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie sehen, dass der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests wieder heruntergefahren wird.

## Best Practices für Tests

Es wurde viel über Best Practices beim Schreiben von Tests geschrieben. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie mit dem [Interagieren mit dem Dokument](#interaktion_mit_dem_dokument) sind, stellen Sie sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern – wenn Sie ein testbares Element haben, zu dem Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, welcher sich mit der nächsten Site-Iteration nicht einfach ändert. Sie möchten Ihre Tests so unempfindlich wie möglich machen, d.h. sie sollten nicht einfach brechen, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, was es einfach macht, den Überblick zu behalten, welche Testdatei welches Kriterium testet. Der `duck_test.js`-Test, den wir oben betrachtet haben, ist ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist zu erkennen, was er tut, wenn wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte alleine funktionieren und nicht von anderen Tests abhängig sein.

Zusätzlich sollten wir auf Testergebnisse/Berichterstattung hinweisen — wir haben in unseren obigen Beispielen Ergebnisse mit einfachen `console.log()`-Anweisungen gemeldet, dies wird jedoch alles in JavaScript durchgeführt, sodass Sie jedes beliebige Testlauf- und Berichtssystem verwenden können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein schnelles Beispiel durchgehen:

1. Erstellen Sie eine lokale Kopie unseres [mocha_test.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js)-Beispiels in Ihrem Projektverzeichnis. Platzieren Sie es in einem Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Promises, um alle erforderlichen Schritte in unserem Test auszuführen — die Promise-basierten Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es richtig funktioniert.
2. Installieren Sie das Mocha-Test-Harness, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können nun den Test (und alle anderen, die Sie in Ihren `test`-Ordner stellen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`-Flag hinzufügen, um sicherzustellen, dass Ihre Tests nicht fehlschlagen, weil Mocha eine willkürliche Zeitüberschreitung (die 3 Sekunden beträgt) hat.

> [!NOTE] > [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertion-Tools einrichtet.

## Remote-Tests ausführen

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das Ausführen von lokalen Tests. Sie müssen nur Ihre Treiberinstanz erstellen, aber mit ein paar zusätzlichen Features spezifiziert, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie (falls erforderlich) benötigen, um darauf zuzugreifen.

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

3. Holen Sie sich Ihren Benutzernamen und den Zugangsschlüssel aus Ihrer [Account & Profile Details-Seite von BrowserStack](https://www.browserstack.com/accounts/profile/details) (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit auf, irgendeine Art von Ergebnisberichtsmechanismus einzubeziehen!

6. Wenn Sie jetzt zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details einschließlich einer Videoaufnahme des Tests und mehreren detaillierten Protokollen von Informationen, die damit zusammenhängen:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Menüoption _Resources_ auf dem BrowserStack Automatisierungs-Dashboard enthält eine Fülle von nützlichen Informationen zur Verwendung, um automatisierte Tests durchzuführen. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Ausfüllen der BrowserStack-Testdetails programmatisch

Sie können die BrowserStack REST API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu annotieren, wie z.B. ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack weiß diese Details nicht standardmäßig.

Lassen Sie uns unser `bstack_duck_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Aktualisieren Sie jetzt Ihr `capabilities`-Objekt, um einen Projektnamen einzuschließen — fügen Sie vor der schließenden geschweiften Klammer die folgende Zeile hinzu und achten Sie darauf, dass Sie am Ende der vorherigen Zeile ein Komma hinzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automatisierungs-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als Nächstes werden wir die `sessionId` der aktuellen Sitzung abrufen und sie verwenden (zusammen mit Ihrem `userName` und `accessKey`), um die URL zu erstellen, an die Anfragen gesendet werden sollen, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren Sie den `if ... else`-Block nahe dem Ende des Codes, um je nach erfolgreichem oder fehlgeschlagenem Testereignis die entsprechenden API-Aufrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem Ergebnis von bestanden oder fehlerhaft zu aktualisieren und einen Grund für das Ergebnis anzugeben.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, jedoch mit Ihren benutzerdefinierten Daten, die daran angehängt sind. Es zeigt den Status "PASSED" und den über die REST-API gemeldeten Grund für den Pass:

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

3. Holen Sie sich Ihren Benutzernamen und den Zugangsschlüssel aus Ihren [Sauce Labs-Benutzereinstellungen](https://app.saucelabs.com/user-settings) und ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Ihren Zugangsschlüssel (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet, und das Testergebnis wird in Ihre Konsole zurückgegeben. Dies zeigt die Wichtigkeit auf, irgendeine Art von Ergebnisberichtsmechanismus einzubeziehen!

5. Gehen Sie nun zu Ihrer [Sauce Labs Automated Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite, und Sie werden sehen, dass Ihr Test gelistet wird; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool, um Einstellungsobjekte zu generieren, die an Ihre Treiberinstanzen übergeben werden, basierend darauf, welchen Browser bzw. welches Betriebssystem Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zu Tests mit Sauce Labs und Selenium schauen Sie sich [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) an.

#### Sauce Labs Testdetails programmgesteuert ausfüllen

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu annotieren, wie z.B., ob er bestanden wurde, der Name des Tests usw. Sauce Labs kennt diese Details nicht standardmäßig!

Dazu müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl (wenn Sie dies für dieses Projekt noch nicht getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Benötigen Sie Saucelabs – setzen Sie dies an den Anfang Ihrer `sauce_google_test.js` Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie folgendes hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie auch hier die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` durch Ihren tatsächlichen Benutzernamen und den Zugangsschlüssel (beachten Sie, dass das saucelabs npm-Paket etwas verwirrend `password` anstelle von `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie darin zu speichern.

4. Unterhalb der Zeile, die die `driver`-Variable definiert (direkt unter der Zeile `build()`), fügen Sie den folgenden Block hinzu — dieser erhält die richtige `sessionID` des Treibers, die wir benötigen, um Daten in den Job zu schreiben (Sie können ihn im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den Block `driver.sleep(2000)` am Ende des Codes durch Folgendes:

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

Hier setzen wir eine `testPassed`-Variable auf `true` oder `false`, abhängig davon, ob der Test bestanden wurde oder nicht, dann verwenden wir die Methode `saucelabs.updateJob()`, um die Details zu aktualisieren.

Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückkehren, sollten Sie sehen, dass Ihr neuer Job nun mit den aktualisierten Daten versehen wurde:

![Sauce Labs Updated Job info](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Schauen wir uns an, wie man das macht.

1. Der Selenium-Remote-Server erfordert Java, um zu laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE-Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie als nächstes den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d.h. keine Beta) und wählen Sie aus der Liste eine Datei, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen wurde, setzen Sie es an einen sinnvollen Ort wie Ihr Home-Verzeichnis. Wenn Sie den Speicherort nicht bereits in `PATH` aufgenommen haben, tun Sie das jetzt (siehe den Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Führen Sie den Standalone-Server, indem Sie folgendes in ein Terminal auf Ihrem Server-Computer eingeben:

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen) so dass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird unter `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie erhalten.

Jetzt, da wir den Server laufen haben, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile des Codes (die mit `const driver = …` beginnt) wie folgt:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet läuft; diesmal jedoch führen Sie ihn auf dem Standalone-Server aus:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies so ziemlich auf jedem Server zusammen mit den entsprechenden Browser-Treibern einrichten und dann Ihre Skripte damit verbinden, indem Sie die URL verwenden, die Sie veröffentlichen möchten.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI)-Tools zu integrieren — das ist nützlich, da es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen können und nur dann neue Änderungen in Ihr Code-Repository übernehmen, wenn die Tests bestanden werden.

Es ist nicht im Rahmen dieses Artikels, dieses Gebiet im Detail zu betrachten, aber wir empfehlen, mit Travis CI zu beginnen — dies ist wahrscheinlich das einfachste CI-Tool, um anzufangen, und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um anzufangen, sehen Sie zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Building a Node.js project](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Using LambdaTest with Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Using LambdaTest with CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Using LambdaTest with Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codefreier Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Ihnen Spaß gemacht haben und sollte Ihnen einen ausreichenden Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, um mit dem Schreiben Ihrer eigenen automatisierten Tests zu beginnen.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
