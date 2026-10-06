---
title: Eine eigene Umgebung für automatisierte Tests einrichten
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: c529f2672b3541cc28ea687ff9266f98b1734191
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel erfahren Sie, wie Sie eine eigene Automatisierungsumgebung installieren und mit Selenium/WebDriver sowie einer Testbibliothek wie selenium-webdriver für Node eigene Tests ausführen. Außerdem sehen wir uns an, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie den im vorherigen Artikel besprochenen verbinden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein grundlegendes Verständnis der
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien browserübergreifender Tests</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierter Tests</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Sie lernen, wie Sie lokal eine Selenium-Testumgebung einrichten und damit Tests ausführen und wie Sie diese mit Tools wie Sauce Labs und BrowserStack verbinden.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt auch andere Möglichkeiten, aber Selenium lässt sich am besten über WebDriver verwenden. Diese leistungsfähige API baut auf Selenium auf und steuert einen Browser durch Aufrufe, um Aktionen wie „Diese Webseite öffnen“, „Den Mauszeiger über dieses Element auf der Seite bewegen“, „Auf diesen Link klicken“ oder „Prüfen, ob der Link diese URL öffnet“ zu automatisieren. Das eignet sich hervorragend für automatisierte Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmierumgebung ab, in der Sie Ihre Tests schreiben und ausführen möchten. Für die meisten gängigen Umgebungen gibt es ein Paket oder Framework, das WebDriver und die erforderlichen Bindings für die Kommunikation mit WebDriver in der jeweiligen Sprache installiert, beispielsweise für Java, C#, Ruby, Python oder JavaScript (Node). Weitere Informationen zur Einrichtung von Selenium für verschiedene Sprachen finden Sie unter [Ein Selenium-WebDriver-Projekt einrichten](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser benötigen unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) erfahren Sie unter anderem, wo Sie die Browsertreiber erhalten.

Wir behandeln das Schreiben und Ausführen von Selenium-Tests mit Node.js, weil der Einstieg schnell und einfach ist und Frontend-Entwicklern diese Umgebung eher vertraut ist.

> [!NOTE]
> Wenn Sie erfahren möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) einige hilfreiche Links.

### Selenium in Node einrichten

1. Richten Sie zunächst ein neues npm-Projekt ein, wie im vorherigen Kapitel unter [Node und npm einrichten](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) beschrieben. Geben Sie ihm einen anderen Namen, beispielsweise `selenium-test`.
2. Als Nächstes benötigen wir ein Framework, mit dem wir Selenium innerhalb von Node verwenden können. Wir wählen das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium, da die Dokumentation recht aktuell erscheint und das Paket gut gepflegt wird. Wenn Sie Alternativen suchen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls eine gute Wahl. Stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden, und führen Sie zum Installieren von selenium-webdriver den folgenden Befehl aus:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es empfiehlt sich, diese Schritte auch dann durchzuführen, wenn Sie selenium-webdriver bereits installiert und die Browsertreiber heruntergeladen haben. So stellen Sie sicher, dass alles auf dem neuesten Stand ist.

Anschließend müssen Sie die passenden Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Wo Sie diese erhalten, erfahren Sie auf der Seite zu [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Einige Browser sind nur für bestimmte Betriebssysteme verfügbar. Wir beschränken uns auf Firefox und Chrome, da beide auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten Treiber [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) herunter.
2. Entpacken Sie sie an einem leicht erreichbaren Ort, beispielsweise im Stammverzeichnis Ihres Benutzerordners.
3. Fügen Sie das Verzeichnis, in dem sich die Treiber `chromedriver` und `geckodriver` befinden, zur Systemvariablen `PATH` hinzu. Verwenden Sie dafür einen absoluten Pfad vom Stammverzeichnis Ihrer Festplatte bis zu dem Verzeichnis, das die Treiber enthält. Wenn Sie beispielsweise einen macOS-Computer verwenden, Ihr Benutzername „bob“ lautet und Sie die Treiber im Stammverzeichnis Ihres Benutzerordners abgelegt haben, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Noch einmal zur Klarstellung: Der Pfad, den Sie zu `PATH` hinzufügen, muss auf das Verzeichnis mit den Treibern verweisen, nicht auf die Treiberdateien selbst. Das ist eine häufige Fehlerquelle.

So legen Sie die Variable `PATH` unter macOS und auf den meisten Linux-Systemen fest:

1. Öffnen Sie die Datei `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet).
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie sie einblenden. Anleitungen dazu finden Sie unter [Versteckte Dateien unter macOS ein- und ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner unter Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu).
2. Fügen Sie Folgendes am Ende der Datei ein und passen Sie den Pfad an den Speicherort auf Ihrem Computer an:

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie die Datei. Starten Sie anschließend Ihr Terminal beziehungsweise Ihre Eingabeaufforderung neu, damit die Shell-Konfiguration erneut eingelesen wird.
4. Prüfen Sie mit dem folgenden Befehl im Terminal, ob der neue Pfad in der Variablen `PATH` enthalten ist:

   ```bash
   echo $PATH
   ```

   Der Pfad sollte im Terminal ausgegeben werden.

> [!NOTE]
> Wie Sie die Variable `PATH` unter Windows festlegen, erfahren Sie unter [Wie kann ich einen neuen Ordner zum Systempfad hinzufügen?](https://stackoverflow.com/questions/44272416/add-a-folder-to-the-path-environment-variable-in-windows-10-with-screenshots)

Probieren wir mit einem kurzen Test aus, ob alles funktioniert.

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `duck_test.js`.
2. Fügen Sie den folgenden Inhalt ein und speichern Sie die Datei:

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

3. Vergewissern Sie sich, dass Sie sich im Terminal in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test
   ```

Nun sollte sich automatisch eine Firefox-Instanz öffnen! DuckDuckGo wird in einem Tab geladen, „webdriver“ wird in das Suchfeld eingegeben und die Suchschaltfläche wird angeklickt. Danach wartet WebDriver eine Sekunde und liest den Titel des Dokuments aus. Wenn dieser „webdriver at DuckDuckGo“ lautet, wird eine Meldung ausgegeben, dass der Test bestanden wurde.

Anschließend warten wir zwei Sekunden. Danach schließt WebDriver die Firefox-Instanz und beendet den Vorgang.

## In mehreren Browsern gleichzeitig testen

Sie können den Test auch gleichzeitig in mehreren Browsern ausführen. Probieren wir es aus!

1. Erstellen Sie in Ihrem Projektverzeichnis eine weitere Datei namens `duck_test_multiple.js`. Je nachdem, welche Browser auf Ihrem Betriebssystem zum Testen verfügbar sind, können Sie die Verweise auf Browser ändern oder entfernen. Stellen Sie sicher, dass die passenden Browsertreiber auf Ihrem System eingerichtet sind. Welche Zeichenfolge Sie für andere Browser in der Methode `.forBrowser()` verwenden müssen, erfahren Sie in der Referenz zum [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Fügen Sie den folgenden Inhalt in die Datei ein und speichern Sie sie:

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

3. Vergewissern Sie sich, dass Sie sich im Terminal in Ihrem Projektordner befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node duck_test_multiple
   ```

> [!NOTE]
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie: „Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver.“ Folgen Sie in diesem Fall der Anweisung in der Meldung und versuchen Sie es erneut.
>
> Möglicherweise erscheint auch eine Meldung, dass eine Treiber-App nicht geöffnet werden kann, weil sie nicht aus einer verifizierten Quelle heruntergeladen wurde. In diesem Fall können Sie die Sicherheitseinstellung nur für diese Treiber-App außer Kraft setzen. Klicken Sie beispielsweise auf einem Mac bei gedrückter <kbd>Ctrl</kbd>-Taste auf die App, wählen Sie _Öffnen_ und im daraufhin angezeigten Dialogfeld erneut _Öffnen_.

Wir haben also denselben Test wie zuvor durchgeführt, ihn diesmal aber in eine Funktion namens `searchTest()` eingebettet. Wir haben Browserinstanzen für mehrere Browser erstellt und jede davon an die Funktion übergeben, sodass der Test in allen Browsern ausgeführt wird.

Sehen wir uns nun die Grundlagen der WebDriver-Syntax genauer an.

## WebDriver-Syntax im Schnelldurchlauf

Betrachten wir einige wichtige Merkmale der WebDriver-Syntax. Ausführlichere Informationen finden Sie in der [JavaScript-API-Referenz zu selenium-webdriver](https://www.selenium.dev/selenium/docs/api/javascript/) und unter [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) in der Selenium-Hauptdokumentation. Dort finden Sie zahlreiche Beispiele in verschiedenen Sprachen.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das Modul `selenium-webdriver` einbinden und den Konstruktor `Builder` sowie das Interface `Browser` importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Mit dem Konstruktor `Builder()` erstellen Sie eine neue Treiberinstanz. Durch Verkettung mit der Methode `forBrowser()` geben Sie an, in welchem Browser Sie mit diesem Builder testen möchten. Am Ende wird die Methode `build()` angehängt, die die Treiberinstanz erstellt. Ausführliche Informationen zu diesen Funktionen finden Sie in der [Referenz zur Klasse Builder](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Sie können für die zu testenden Browser auch bestimmte Konfigurationsoptionen festlegen, beispielsweise eine bestimmte Version und ein Betriebssystem in der Methode `forBrowser()`:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Diese Optionen können Sie auch über eine Umgebungsvariable festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Erstellen wir einen neuen Test, anhand dessen wir diesen Code im weiteren Verlauf untersuchen können. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine Datei namens `quick_test.js` und fügen Sie den folgenden Code ein:

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

### Das zu testende Dokument laden

Um die Seite zu laden, die Sie testen möchten, verwenden Sie die Methode `get()` der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Einzelheiten zu den Funktionen in diesem und den folgenden Abschnitten finden Sie in der [Referenz zur Klasse WebDriver](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html).

Sie können jede beliebige URL verwenden, die auf Ihre Ressource verweist, einschließlich einer `file://`-URL zum Testen eines lokalen Dokuments:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Besser ist jedoch eine Adresse auf einem entfernten Server, damit der Code flexibler bleibt: Sobald Sie Ihre Tests auf einem entfernten Server ausführen (siehe weiter unten), funktioniert Code mit lokalen Pfaden nicht mehr.

Aktualisieren Sie Ihre Funktion `example()` wie folgt, ersetzen Sie den Platzhalterpfad durch einen tatsächlichen lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und führen Sie den Test aus:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Jetzt haben wir ein Dokument zum Testen. Als Nächstes müssen wir mit ihm interagieren. In der Regel wählen wir dazu zunächst ein bestimmtes Element aus, dessen Eigenschaften oder Verhalten wir testen möchten. Mit WebDriver können Sie [UI-Elemente auf verschiedene Weise auswählen](https://www.selenium.dev/documentation/webdriver/elements/), etwa anhand ihrer ID, Klasse oder ihres Elementnamens. Die Auswahl erfolgt über die Methode `findElement()`, die eine Auswahlmethode als Parameter entgegennimmt. So wählen Sie beispielsweise ein Element anhand seiner ID aus:

```js
const element = driver.findElement(By.id("myElementId"));
```

Besonders nützlich ist die Suche nach einem Element über CSS: Mit der Methode `By.css()` können Sie ein Element mithilfe eines CSS-Selektors auswählen.

Aktualisieren Sie nun Ihre Funktion `example()` wie folgt und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Webdokumenten und den darin enthaltenen Elementen zu interagieren. Häufige Anwendungsfälle finden Sie in der WebDriver-Dokumentation ab [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content).

Wenn wir den Text innerhalb unserer Schaltfläche abrufen möchten, können wir Folgendes tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies wie unten gezeigt am Ende der Funktion `example()` ein:

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

Führen Sie das Beispiel wie zuvor mit `node` aus. Der Beschriftungstext der Schaltfläche sollte in der Konsole ausgegeben werden.

Machen wir etwas Nützlicheres: Ersetzen Sie den vorherigen Code wie unten gezeigt durch `button.click();`:

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

Führen Sie den Test erneut aus. Die Schaltfläche wird angeklickt und ein `alert()`-Popup sollte erscheinen. Damit wissen wir zumindest, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die Funktion `example()` wie folgt und testen Sie sie erneut:

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

Versuchen wir als Nächstes, Text in die Formularelemente einzugeben. Aktualisieren Sie die Funktion `example()` wie folgt und führen Sie den Test erneut aus:

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

Tastendrücke, die sich nicht durch normale Zeichen darstellen lassen, können Sie über Eigenschaften des Objekts `Key` übermitteln. Im obigen Beispiel haben wir mit dem folgenden Code zwischen den Formulareingaben gewechselt:

```js
input.sendKeys(Key.TAB);
```

### Warten, bis ein Vorgang abgeschlossen ist

Manchmal soll WebDriver warten, bis ein Vorgang abgeschlossen ist, bevor es fortfährt. Wenn Sie beispielsweise eine neue Seite laden, sollten Sie warten, bis das DOM der Seite geladen ist, bevor Sie mit ihren Elementen interagieren. Andernfalls schlägt der Test wahrscheinlich fehl.

In unserem Test `duck_test_multiple.js` haben wir beispielsweise diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` nimmt einen Wert entgegen, der die Wartezeit in Millisekunden angibt. Sie gibt ein {{jsxref("Promise")}} zurück, das nach Ablauf dieser Zeit erfüllt wird. Mit dem Schlüsselwort `await` halten wir die umschließende Funktion an, bis das Promise erfüllt ist. Danach wird der Code ausgeführt, der auf den Methodenaufruf folgt.

Wir können auch unserem Test `quick_test.js` einen Aufruf von `sleep()` hinzufügen. Aktualisieren Sie Ihre Funktion `example()` wie folgt:

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

Führen Sie den aktualisierten Code aus. WebDriver füllt nun das erste Formularfeld aus, wartet eine Sekunde und prüft dann, ob das Feld einen Wert enthält, also nicht leer ist. Dazu wird mit `getAttribute()` der Wert des Attributs `value` abgerufen. Anschließend gibt der Code eine Meldung über den Erfolg oder Misserfolg in der Konsole aus.

> [!NOTE]
> Es gibt außerdem eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung über einen bestimmten Zeitraum wiederholt prüft und anschließend mit der Codeausführung fortfährt. Dabei kommt auch die [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html) zum Einsatz, die häufig verwendete Bedingungen für `wait()` definiert.

### Treiber nach der Verwendung beenden

Nach Abschluss eines Tests sollten Sie alle geöffneten Treiberinstanzen mit der Methode `driver.quit()` beenden, damit sie nicht unnötig Ressourcen beanspruchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie den Test jetzt ausführen, sollte er ablaufen und die Browserinstanz nach seinem Abschluss wieder geschlossen werden.

## Bewährte Verfahren für Tests

Über bewährte Verfahren beim Schreiben von Tests wurde viel geschrieben. Gute Hintergrundinformationen finden Sie unter [Testverfahren](https://www.selenium.dev/documentation/test_practices/). Achten Sie grundsätzlich auf Folgendes:

1. **Geeignete Strategien zum Auffinden von Elementen verwenden:** Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), verwenden Sie möglichst Locators und Page Objects, die sich voraussichtlich nicht ändern. Soll ein Element getestet werden, stellen Sie sicher, dass es eine stabile ID oder eine Position auf der Seite hat, die sich mit einem CSS-Selektor auswählen lässt und sich nicht schon bei der nächsten Überarbeitung der Website ändert. Ihre Tests sollten möglichst robust sein, also nicht bei jeder Änderung sofort fehlschlagen.
2. **Atomare Tests schreiben:** Jeder Test sollte nur eine Sache prüfen. So lässt sich leicht nachvollziehen, welche Anforderung eine Testdatei prüft. Der oben betrachtete Test `duck_test.js` ist in dieser Hinsicht recht gut, da er nur prüft, ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten ihm einen aussagekräftigeren Namen geben, damit seine Funktion auch dann leicht erkennbar bleibt, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. **Unabhängige Tests schreiben:** Jeder Test sollte für sich allein funktionieren und nicht von anderen Tests abhängen.

Erwähnenswert sind außerdem die Testergebnisse und ihre Darstellung. In den bisherigen Beispielen haben wir Ergebnisse mit einfachen `console.log()`-Anweisungen ausgegeben. Da das alles in JavaScript geschieht, können Sie aber jedes gewünschte System zum Ausführen von Tests und Erstellen von Testberichten verwenden, etwa [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Sehen wir uns ein kurzes Beispiel an:

1. Erstellen Sie in Ihrem Projektverzeichnis einen Unterordner namens `test` und darin eine Datei namens `mocha_test.js`. Geben Sie ihr den folgenden Inhalt:

   ```js
   "use strict";

   const assert = require("assert");

   const { Builder, Capabilities, By } = require("selenium-webdriver");

   describe("Alert", () => {
     it("should have the correct text content - this is from the first button", (done) => {
       let driver = new Builder()
         .withCapabilities(Capabilities.firefox())
         .build();

       driver
         .get(
           "http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
         )
         .then(() => driver.findElement(By.css("button:nth-of-type(1)")))
         .then((button) => button.click())
         .then(() => driver.switchTo().alert())
         .then((alert) => alert.getText())
         .then((text) => assert.equal(text, "This is from the first button"))
         .then(() => driver.quit())
         .then(done)
         .catch((err) => done(err));
     });
   });
   ```

   Dieses Beispiel verwendet eine lange Promise-Kette, um alle für den Test erforderlichen Schritte auszuführen. Die Promise-basierten Methoden von WebDriver müssen erfüllt werden, damit der Test ordnungsgemäß funktioniert.

2. Installieren Sie das Mocha-Testframework, indem Sie in Ihrem Projektverzeichnis den folgenden Befehl ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Jetzt können Sie den Test und alle weiteren Tests in Ihrem Verzeichnis `test` mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Fügen Sie das Flag `--no-timeouts` hinzu, damit Ihre Tests nicht wegen des willkürlich festgelegten Zeitlimits von Mocha (drei Sekunden) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere hilfreiche Beispiele dafür, wie Sie verschiedene Kombinationen von Test- und Assertion-Tools einrichten.

## Tests auf entfernten Servern ausführen

Tests auf entfernten Servern auszuführen ist nicht wesentlich schwieriger, als sie lokal auszuführen. Beim Erstellen Ihrer Treiberinstanz müssen Sie lediglich einige zusätzliche Angaben machen: die Fähigkeiten des zu testenden Browsers, die Adresse des Servers und gegebenenfalls die Zugangsdaten.

### BrowserStack

Erstellen wir ein Beispiel dafür, wie Sie einen Selenium-Test auf [BrowserStack](https://www.browserstack.com/automate) ausführen:

1. Erstellen Sie in Ihrem Projektverzeichnis eine Datei namens `bstack_duck_test.js`.
2. Fügen Sie den folgenden Inhalt ein:

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

3. Rufen Sie auf Ihrer BrowserStack-Seite mit [Konto- und Profildetails](https://www.browserstack.com/accounts/profile/details) Ihren Benutzernamen und Zugriffsschlüssel ab (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüssel. Bewahren Sie diese Daten sicher auf.
5. Führen Sie den Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Ergebnis in Ihrer Konsole ausgegeben. Das zeigt, wie wichtig ein Mechanismus zur Ausgabe von Testergebnissen ist!

6. Wenn Sie nun zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, wird Ihr Test dort aufgeführt. Sie finden unter anderem eine Videoaufzeichnung des Tests sowie mehrere ausführliche Protokolle mit zugehörigen Informationen:
   ![Ergebnisse automatisierter Tests in BrowserStack](bstack_automated_results.png)

> [!NOTE]
> Der Menüpunkt _Resources_ im BrowserStack-Automate-Dashboard bietet zahlreiche hilfreiche Informationen zur Ausführung automatisierter Tests. Informationen speziell für Node finden Sie unter [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs).

#### BrowserStack-Testdetails programmgesteuert ergänzen

Mit der BrowserStack-REST-API und einigen weiteren Funktionen können Sie Ihren Test um zusätzliche Angaben ergänzen, beispielsweise ob und warum er bestanden wurde oder zu welchem Projekt er gehört. BrowserStack kennt diese Angaben standardmäßig nicht.

Aktualisieren wir unsere Demo `bstack_duck_test.js`, um zu zeigen, wie diese Funktionen eingesetzt werden:

1. Installieren Sie das Modul [axios](https://www.npmjs.com/package/axios), indem Sie in Ihrem Projektverzeichnis den folgenden Befehl ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das Modul axios, damit wir damit Anfragen an die BrowserStack-REST-API senden können. Fügen Sie ganz oben in Ihrem Code die folgende Zeile hinzu:

   ```js
   const axios = require("axios");
   ```

3. Ergänzen Sie nun unser Objekt `capabilities` um einen Projektnamen. Fügen Sie vor der schließenden geschweiften Klammer die folgende Zeile hinzu und vergessen Sie nicht das Komma am Ende der vorherigen Zeile. Sie können die Build- und Projektnamen variieren, um die Tests im BrowserStack-Automate-Dashboard in verschiedenen Ansichten zu organisieren:

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als Nächstes rufen wir die `sessionId` der aktuellen Sitzung ab und verwenden sie zusammen mit Ihrem `userName` und `accessKey`, um die URL für Anfragen zur Aktualisierung der BrowserStack-Daten zusammenzustellen. Fügen Sie die folgenden Zeilen direkt unter dem Block ein, der das Objekt `driver` erstellt (beginnend mit `const driver = new Builder()`):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Aktualisieren Sie abschließend den `if...else`-Block im unteren Teil des Codes, damit je nach Testergebnis die passenden API-Aufrufe an BrowserStack gesendet werden:

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

Nach Abschluss des Tests senden wir einen API-Aufruf an BrowserStack, um den Teststatus auf bestanden oder fehlgeschlagen zu setzen und einen Grund für das Ergebnis anzugeben.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihre Testsitzung wie zuvor, nun aber mit Ihren zusätzlichen Angaben. Angezeigt werden der Status „PASSED“ und der über die REST-API übermittelte Grund für das Bestehen:

![Benutzerdefinierte Ergebnisse in BrowserStack](bstack_custom_results.png)

### Sauce Labs

Sehen wir uns ein Beispiel dafür an, wie Sie Selenium-Tests auf Sauce Labs ausführen:

1. Erstellen Sie in Ihrem Projektverzeichnis eine Datei namens `sauce_google_test.js`.
2. Fügen Sie den folgenden Inhalt ein:

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

3. Rufen Sie in Ihren [Sauce Labs-Benutzereinstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Zugriffsschlüssel ab. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Werte und bewahren Sie diese sicher auf.
4. Führen Sie den Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Ergebnis in Ihrer Konsole ausgegeben. Das zeigt, wie wichtig ein Mechanismus zur Ausgabe von Testergebnissen ist!

5. Wenn Sie nun Ihr [Dashboard für automatisierte Tests bei Sauce Labs](https://app.saucelabs.com/dashboard/tests) öffnen, wird Ihr Test dort aufgeführt. Sie können sich dort Videos, Screenshots und weitere Daten ansehen.
   ![Automatisierter Test in Sauce Labs](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein hilfreiches Tool, um Capability-Objekte für Ihre Treiberinstanzen zu erstellen – passend zum Browser und Betriebssystem, auf denen Sie testen möchten.

> [!NOTE]
> Weitere hilfreiche Informationen zum Testen mit Sauce Labs und Selenium finden Sie unter [Erste Schritte mit Selenium für automatisierte Website-Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Sofort ausführbare Selenium-Tests mit Node.js](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Sauce Labs-Testdetails programmgesteuert ergänzen

Mit der Sauce Labs-API können Sie Ihren Test um zusätzliche Angaben ergänzen, beispielsweise ob er bestanden wurde oder wie er heißt. Sauce Labs kennt diese Angaben standardmäßig nicht!

Gehen Sie dazu wie folgt vor:

1. Installieren Sie den Node-Wrapper für Sauce Labs mit dem folgenden Befehl, falls Sie ihn für dieses Projekt noch nicht installiert haben:

   ```bash
   npm install saucelabs --save-dev
   ```

2. Binden Sie saucelabs ein. Fügen Sie dazu Folgendes am Anfang Ihrer Datei `sauce_google_test.js` ein, direkt unter den bisherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie direkt darunter Folgendes hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie auch hier die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Werte. Beachten Sie, dass das npm-Paket saucelabs etwas verwirrend `password` statt `accessKey` verwendet. Da Sie diese Werte nun zweimal verwenden, können Sie sie in zwei Hilfsvariablen speichern.

4. Fügen Sie unter dem Block, in dem Sie die Variable `driver` definieren (direkt unter der Zeile mit `build()`), den folgenden Block ein. Damit erhalten Sie die richtige `sessionID` des Treibers, die wir benötigen, um Daten für den Job zu schreiben. Im nächsten Codeblock sehen Sie die Verwendung:

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie abschließend den Block `driver.sleep(2000)` im unteren Teil des Codes durch Folgendes:

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

Hier haben wir die Variable `testPassed` abhängig davon, ob der Test bestanden wurde oder fehlgeschlagen ist, auf `true` oder `false` gesetzt. Anschließend haben wir die Details mit der Methode `saucelabs.updateJob()` aktualisiert.

Wenn Sie nun zu Ihrem [Dashboard für automatisierte Tests bei Sauce Labs](https://app.saucelabs.com/dashboard/tests) zurückkehren, sollten Sie sehen, dass Ihrem neuen Job die aktualisierten Daten hinzugefügt wurden:

![Aktualisierte Job-Informationen in Sauce Labs](sauce_labs_updated_job_info.png)

### Ihr eigener entfernter Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie einen eigenen entfernten Testserver einrichten. Sehen wir uns an, wie das geht.

1. Der Selenium-Server benötigt Java. Laden Sie auf der [Downloadseite für Java SE](https://www.oracle.com/java/technologies/downloads/) das neueste JDK für Ihre Plattform herunter und installieren Sie es.
2. Laden Sie anschließend den neuesten [eigenständigen Selenium-Server](https://selenium-release.storage.googleapis.com/index.html) herunter. Er fungiert als Proxy zwischen Ihrem Skript und den Browsertreibern. Wählen Sie die neueste stabile Versionsnummer (keine Betaversion) und in der Liste eine Datei, deren Name mit „selenium-server-standalone“ beginnt. Legen Sie die heruntergeladene Datei an einem geeigneten Ort ab, beispielsweise in Ihrem Benutzerordner. Falls Sie den Speicherort noch nicht zu `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe [Selenium in Node einrichten](#selenium_in_node_einrichten)).
3. Starten Sie den eigenständigen Server, indem Sie auf dem Servercomputer Folgendes in ein Terminal eingeben:

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   Passen Sie den Dateinamen der `.jar`-Datei so an, dass er genau mit dem Namen Ihrer Datei übereinstimmt.

4. Der Server läuft unter `http://localhost:4444/wd/hub`. Rufen Sie die Adresse auf und sehen Sie nach, was angezeigt wird.

Nachdem der Server läuft, erstellen wir einen Demotest, der auf dem entfernten Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer Datei `google_test.js`, nennen Sie sie `google_test_remote.js` und legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Codezeile, die mit `const driver = …` beginnt, wie folgt:

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie den Test aus. Er sollte wie erwartet ablaufen, diesmal allerdings auf dem eigenständigen Server:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich praktisch. Wir haben es lokal getestet, aber Sie können den Server zusammen mit den passenden Browsertreibern auf nahezu jedem beliebigen Rechner einrichten und Ihre Skripte anschließend über die von Ihnen bereitgestellte URL mit ihm verbinden.

## Selenium mit CI-Tools verbinden

Sie können Selenium und verwandte Tools wie Sauce Labs auch mit Tools für {{Glossary("continuous_integration", "Continuous Integration")}} (CI) verbinden. Das ist nützlich, weil Sie Ihre Tests über ein CI-Tool ausführen und neue Änderungen nur dann in Ihr Code-Repository übernehmen können, wenn die Tests bestanden werden.

Eine ausführliche Betrachtung dieses Themas würde den Rahmen des Artikels sprengen. Für den Einstieg empfehlen wir Travis CI: Dieses CI-Tool ist vergleichsweise einfach einzurichten und lässt sich gut mit Web-Tools wie GitHub und Node verbinden.

Sehen Sie sich zum Einstieg beispielsweise Folgendes an:

- [Travis CI für absolute Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js-Projekt erstellen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Sauce Labs mit Travis CI verwenden](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliche Tests mit **codefreier Automatisierung** durchführen möchten, können Sie [Endtest](https://endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul hat Ihnen hoffentlich Spaß gemacht und ausreichend Einblick in das Schreiben und Ausführen automatisierter Tests gegeben, damit Sie nun Ihre eigenen Tests erstellen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
