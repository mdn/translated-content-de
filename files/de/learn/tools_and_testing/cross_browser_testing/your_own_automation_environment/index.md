---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung einrichten und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch betrachten, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie sie im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen; eine Vorstellung von den grundlegenden
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testings</a> und
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit ausführt sowie wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Möglichkeiten, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Anrufe an einen Browser sendet, um ihn zu automatisieren und Aktionen wie "diese Webseite öffnen", "über dieses Element auf der Seite bewegen", "diesen Link anklicken", "ob der Link diese URL öffnet überprüfen" durchzuführen. Dies ist ideal, um automatisierte Tests durchzuführen.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten beliebten Umgebungen haben ein Paket oder Framework verfügbar, das WebDriver und die erforderlichen Bindungen installiert, um mit WebDriver in dieser Sprache zu kommunizieren, zum Beispiel Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Einrichten eines Selenium-WebDriver Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/) für weitere Details zu Selenium-Setups für verschiedene Sprachen.

Verschiedene Browser erfordern unterschiedliche Treiber, um WebDriver die Kommunikation und Steuerung zu ermöglichen. Siehe [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für weitere Informationen darüber, wo Sie Browser-Treiber erhalten können usw.

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da der Einstieg schnell und einfach ist und es für Frontend-Entwickler eine vertrautere Umgebung ist.

> [!NOTE]
> Wenn Sie wissen möchten, wie Sie WebDriver in anderen serverseitigen Umgebungen verwenden, schauen Sie sich auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) für einige nützliche Links an.

### Einrichtung von Selenium in Node

1. Beginnen Sie damit, ein neues npm-Projekt einzurichten, wie im letzten Kapitel unter [Einrichtung von Node und npm](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es anders, zum Beispiel `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das es uns ermöglicht, mit Selenium innerhalb von Node zu arbeiten. Wir werden selenium's offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) wählen, da die Dokumentation relativ aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie andere Optionen möchten, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich im Projektverzeichnis befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte auch dann zu befolgen, wenn Sie zuvor selenium-webdriver installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die entsprechenden Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Sie finden Details darüber, wo Sie diese auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt) erhalten können. Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir bleiben bei Firefox und Chrome, da sie auf allen gängigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://developer.chrome.com/docs/chromedriver/downloads) Treiber herunter.
2. Entpacken Sie sie an einem leicht zu navigierenden Ort, wie dem Stammverzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Speicherort der `chromedriver` und `geckodriver` Treiber zu Ihrer Systemvariablen `PATH` hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihrer Festplatte zum Verzeichnis sein, das die Treiber enthält. Wenn wir beispielsweise einen macOS-Rechner verwenden würden, unser Benutzername Bob wäre und wir unsere Treiber im Stammverzeichnis unseres Home-Verzeichnisses platziert hätten, würde der Pfad `/Users/bob` sein.

> [!NOTE]
> Um es zu wiederholen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen zu setzen:

1. Wenn Sie nicht bereits die `bash`-Shell verwenden (zum Beispiel auf macOS-Systemen ist standardmäßig die `zsh`-Shell, nicht `bash`), wechseln Sie zur `bash`-Shell:

   ```bash
   exec bash
   ```

2. Öffnen Sie Ihre `.bash_profile` (oder `.bashrc`)-Datei (wenn Sie versteckte Dateien nicht sehen können, müssen Sie sie anzeigen, siehe [Versteckte Dateien in macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).

3. Fügen Sie das Folgende unten in Ihre Datei ein (aktualisieren Sie den Pfad, wie er tatsächlich auf Ihrer Maschine ist):

   ```bash
   #Add WebDriver browser drivers to PATH

   export PATH=$PATH:/Users/bob
   ```

4. Speichern und schließen Sie diese Datei, und starten Sie Ihr Terminal/Befehlsfenster neu, um Ihre Bash-Konfiguration neu zu laden.
5. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

6. Sie sollten sehen, dass es im Terminal ausgegeben wird.

Um Ihre `PATH`-Variable unter Windows zu setzen, folgen Sie den Anweisungen bei [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

OK, probieren wir einen schnellen Test aus, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `google_test.js`:
2. Geben Sie den folgenden Inhalt ein und speichern Sie ihn ab:

   ```js
   const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

   (async function example() {
     const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
     try {
       await driver.get("https://www.google.com/ncr");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
     } finally {
       await driver.sleep(2000); // Delay long enough to see search page!
       await driver.quit();
     }
   })();
   ```

   > [!NOTE]
   > Diese Funktion ist ein [IIFE](/de/docs/Glossary/IIFE) (Immediately Invoked Function Expression).

3. Stellen Sie im Terminal sicher, dass Sie sich im Projektverzeichnis befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node google_test
   ```

Es sollte sich automatisch ein Firefox-Exemplar öffnen! Google sollte automatisch in einem Tab geladen werden, "webdriver" sollte im Suchfeld eingegeben werden und der Suchknopf wird angeklickt. WebDriver wird dann eine Sekunde warten; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver - Google Suche" lautet, wird eine Nachricht zurückgegeben, um zu behaupten, der Test sei bestanden.
Wir warten dann vier Sekunden, danach wird WebDriver das Firefox-Exemplar schließen und stoppen.

## Testen in mehreren Browsern gleichzeitig

Es gibt keinen Grund, den Test nicht gleichzeitig in mehreren Browsern auszuführen. Versuchen wir das!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `google_test_multiple.js`. Sie können die Referenzen zu einigen der anderen Browser ändern, sie entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem verfügbar haben. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System installiert haben. In Bezug auf den zu verwendenden String in der `.forBrowser()`-Methode für andere Browser, siehe die [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie den folgenden Inhalt ein und speichern Sie ihn ab:

   ```js
   const { Builder, Browser, By, Key } = require("selenium-webdriver");

   const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();

   const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

   async function searchTest(driver) {
     try {
       await driver.get("http://www.google.com");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000).then(async () => {
         await driver.getTitle().then(async (title) => {
           if (title === "webdriver - Google Search") {
             console.log("Test passed");
           } else {
             console.log("Test failed");
           }
         });
       });
     } finally {
       driver.quit();
     }
   }

   searchTest(driver_fx);
   searchTest(driver_chr);
   ```

3. Stellen Sie im Terminal sicher, dass Sie sich im Projektverzeichnis befinden, und geben Sie den folgenden Befehl ein:

   ```bash
   node google_test_multiple
   ```

4. Wenn Sie einen Mac verwenden und beschließen, Safari zu testen, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies erhalten, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.

So haben wir den Test wie zuvor gemacht, außer dass wir ihn diesmal in eine Funktion `searchTest()` eingeschlossen haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, so dass der Test auf allen drei Browsern durchgeführt wird!

Spannend, oder? Schauen wir uns nun die Grundlagen der WebDriver-Syntax in etwas mehr Detail an.

## WebDriver-Syntax-Crashkurs

Werfen wir einen Blick auf einige Schlüsselfunktionen der WebDriver-Syntax. Für detailliertere Informationen sollten Sie die [selenium-webdriver JavaScript API Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz konsultieren und die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/), die mehrere Beispiele in verschiedenen Sprachen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einfügen, den `Builder`-Konstruktor und das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um eine neue Instanz eines Treibers zu erstellen, wobei die `forBrowser()`-Methode verkettet wird, um anzugeben, in welchem Browser Sie mit diesem Builder testen möchten.
Die `build()`-Methode wird am Ende verkettet, um die Treiber-Instanz tatsächlich zu erstellen (siehe die [Builder-Class Referenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für die zu testenden Browser festzulegen, zum Beispiel können Sie eine spezifische Version und ein Betriebssystem in der `forBrowser()`-Methode festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "46", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariable festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

Erstellen wir einen neuen Test, um uns das BeispielzCode, während wir darüber reden. Erstellen Sie innerhalb Ihres Selenium-Testprojektverzeichnisses eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

### Das zu testende Dokument abrufen

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der vorher erstellten Treiber-Instanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Class Referenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den folgenden.

Sie können jede beliebige URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://`-URL, um ein lokales Dokument zu testen:

```js
driver.get(
  "file:///Users/chrismills/git/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html",
);
```

oder

```js
driver.get("http://localhost:8888/fake-div-buttons.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, so dass der Code flexibler ist — wenn Sie beginnen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (wie später beschrieben), wird Ihr Code brechen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
})();
```

### Mit dem Dokument interagieren

Jetzt haben wir ein Dokument, das wir testen können, und wir müssen in irgendeiner Weise mit ihm interagieren. Dies erfordert normalerweise zuerst die Auswahl eines bestimmten Elements, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Weisen auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname, usw. Die tatsächliche Auswahl erfolgt über die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element auszuwählen, ist CSS — die `By.css()`-Methode ermöglicht es Ihnen, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie jetzt Ihre `example()`-Funktion wie folgt:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darauf befindlichen Elementen zu interagieren. Sie können nützliche häufige Beispiele beginnend bei [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten sehen.

Wenn wir den Text innerhalb unseres Buttons abrufen möchten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt unten in die `example()`-Funktion wie gezeigt ein:

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

Stellen Sie sicher, dass Sie sich in Ihrem Projektverzeichnis befinden, und versuchen Sie, den Test auszuführen:

```bash
node quick_test.js
```

Sie sollten sehen, dass die Textbeschriftung des Buttons in der Konsole ausgegeben wird.

Lassen Sie uns etwas Nützlicheres tun. Ersetzen Sie den vorherigen Codeeintrag durch diese Codezeile, `button.click();`, wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird angeklickt und das `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

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

Als nächstes versuchen wir, Text in eines der Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie, Ihren Test erneut auszuführen:

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );

  const input = driver.findElement(By.id("name"));
  input.sendKeys("Filling in my form");

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

Sie können Tastendrücke senden, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir oben diese Konstruktion genutzt, um aus dem Formulareingabefeld herauszutaben, bevor wir es absenden:

```js
driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(Key.TAB);
});
```

### Auf den Abschluss von etwas warten

Es gibt Gelegenheiten, bei denen Sie WebDriver warten lassen möchten, bevor es weitermacht. Zum Beispiel, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite fertig geladen ist, bevor Sie versuchen, mit einem der Elemente zu interagieren, da sonst der Test wahrscheinlich fehlschlägt.

In unserem `google_test.js`-Test haben wir zum Beispiel diesen Block eingefügt:

```js
driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    if (title === "webdriver - Google Search") {
      console.log("Test passed");
    } else {
      console.log("Test failed");
    }
  });
});
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein Versprechen zurück, das am Ende dieser Zeit aufgelöst wird, und an diesem Punkt wird der Code innerhalb der `then()`-Methode ausgeführt. In diesem Fall erhalten wir den Titel der aktuellen Seite mit der `getTitle()`-Methode und geben eine Bestehen- oder Durchfallen-Nachricht zurück, je nachdem, welchen Wert sie hat.

Wir könnten auch eine `sleep()`-Methode zu unserem `quick_test.js`-Test hinzufügen — versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

```js
const { Builder, Browser, By, until } = require("selenium-webdriver");

const driver = new Builder().forBrowser("firefox").build();

(async function example() {
  try {
    driver.get(
      "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
    );

    driver.sleep(2000).then(() => {
      const input = driver.findElement(By.id("name"));

      input.sendKeys("Filling in my form");
      input.getAttribute("value").then((value) => {
        if (value !== "") {
          console.log("Form input editable");
        }
      });
    });

    const button = driver.findElement(By.css("button:nth-of-type(1)"));

    button.click();

    await driver.wait(until.alertIsPresent());

    const alert = driver.switchTo().alert();

    alert.getText().then((text) => {
      console.log(`Alert text is '${text}'`);
    });

    alert.accept();
  } finally {
    await driver.sleep(4000); // Delay long enough to see search page!
    driver.quit();
  }
})();
```

WebDriver wartet nun 2 Sekunden, bevor das Formular ausgefüllt wird. Wir testen dann, ob sein Wert gefüllt wurde (d.h. nicht leer ist), indem wir die `getAttribute()`-Methode verwenden, um den Wert des `value`-Attributs zu ermitteln, und geben eine Nachricht in der Konsole aus, wenn er nicht leer ist.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung wiederholt für eine bestimmte Zeit lang prüft und dann den Code weiter ausführt. Das nutzt ebenfalls die [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Gebrauch herunterfahren

Wenn Sie mit dem Ausführen eines Tests fertig sind, sollten Sie alle geöffneten Treiber-Instanzen herunterfahren, um sicherzustellen, dass Sie nicht mit vielen heruntergeladenen Browser-Instanzen auf Ihrem Rechner enden! Dies wird mit der `quit()`-Methode gemacht. Rufen Sie diese auf Ihrer Treiber-Instanz auf, wenn Sie sie nicht mehr benötigen. Fügen Sie diese Zeile jetzt am Ende Ihres `quick_test.js`-Tests hinzu:

```js
driver.quit();
```

Wenn Sie ihn ausführen, sollten Sie jetzt sehen, dass der Test ausgeführt wird und die Browser-Instanz nach Abschluss des Tests wieder geschlossen wird. Dies ist nützlich, um Ihren Computer nicht mit vielen Browser-Instanzen zu überladen, insbesondere wenn Sie so viele haben, dass es den Computer verlangsamt.

## Testbeste Praktiken

Es wurde viel über Testbeste Praktiken geschrieben. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), stellen Sie sicher, dass Sie Lokatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern — wenn Sie ein testbares Element haben, auf dem Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID hat oder eine Position auf der Seite, die mit einem CSS-Selektor ausgewählt werden kann, die sich nicht einfach ändern wird, wenn die nächste Site-Iteration kommt. Sie möchten, dass Ihre Tests so wenig spröde wie möglich sind, d.h. sie brechen nicht einfach, wenn sich etwas ändert.
2. Schreibene Atomtests: Jeder Test sollte nur eine Sache testen, was es einfach macht, den Überblick zu behalten, welche Testdatei welches Kriterium testet. Zum Beispiel ist der `google_test.js`-Test, den wir oben angesehen haben, ziemlich gut, da er nur eine einzelne Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, um leichter herauszufinden, was er tut, falls wir mehr Google-Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Schreibene autonome Tests: Jeder Test sollte alleine funktionieren und nicht von anderen Tests abhängig sein.

Zusätzlich sollten wir die Testergebnisse und Berichterstellung erwähnen — wir haben in unseren obigen Beispielen Ergebnisse mit einfachen `console.log()`-Anweisungen berichtet, aber das alles ist in JavaScript, also können Sie jedes Testlauf- und Berichtsverfahren verwenden, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool.

1. Versuchen Sie zum Beispiel, eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis zu erstellen. Legen Sie es in einen Unterordner namens `test`. Dieses Beispiel verwendet eine lange Reihe von Versprechen, um alle Schritte auszuführen, die für unseren Test erforderlich sind — die versprochenen Methoden, die WebDriver verwendet, müssen aufgelöst werden, damit es richtig funktioniert.
2. Installieren Sie den Mocha-Test-Harnisch, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test jetzt (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts`-Flag einbeziehen, um sicherzustellen, dass Ihre Tests nicht wegen Mocha's willkürlicher Zeitüberschreitung (die 3 Sekunden beträgt) fehlschlagen.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertion-Tools einrichtet.

## Remotetests ausführen

Es stellt sich heraus, dass das Ausführen von Tests auf entfernten Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit einigen weiteren angegebenen Merkmalen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

### LambdaTest

Selenium-Tests remote auf LambdaTest auszuführen ist sehr einfach. Der Code, den Sie benötigen, sollte dem unten gesehenen Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie innerhalb Ihres Projektverzeichnisses eine neue Datei namens `lambdatest_google_test.js`
2. Geben Sie den folgenden Inhalt ein:

   ```js
   const { By, Builder } = require("selenium-webdriver");

   // username: Username can be found at automation dashboard
   const USERNAME = "{username}";

   // AccessKey: AccessKey can be generated from automation dashboard or profile section
   const KEY = "{accessKey}";

   // gridUrl: gridUrl can be found at automation dashboard
   const GRID_HOST = "hub.lambdatest.com/wd/hub";

   function searchTextOnGoogle() {
     // Setup Input capabilities
     const capabilities = {
       platform: "windows 10",
       browserName: "chrome",
       version: "67.0",
       resolution: "1280x800",
       network: true,
       visual: true,
       console: true,
       video: true,
       name: "Test 1", // name of the test
       build: "NodeJS build", // name of the build
     };

     // URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
     const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

     // setup and build selenium driver object
     const driver = new Builder()
       .usingServer(gridUrl)
       .withCapabilities(capabilities)
       .build();

     // navigate to a URL, search for a text and get title of page
     driver.get("https://www.google.com/ncr").then(function () {
       driver
         .findElement(By.name("q"))
         .sendKeys("LambdaTest\n")
         .then(function () {
           driver.getTitle().then((title) => {
             setTimeout(() => {
               if (title === "LambdaTest - Google Search") {
                 driver.executeScript("lambda-status=passed");
               } else {
                 driver.executeScript("lambda-status=failed");
               }
               driver.quit();
             }, 5000);
           });
         });
     });
   }

   searchTextOnGoogle();
   ```

3. Besuchen Sie Ihr [LambdaTest-Automatisierungs-Dashboard](https://www.lambdatest.com/selenium-automation), um Ihren LambdaTest-Benutzernamen und -Zugangsschlüssel abzurufen, indem Sie auf das **Schlüsselsymbol** in der oberen rechten Ecke klicken (siehe _Username and Access Keys_). Ersetzen Sie die Platzhalter `{username}` und `{accessKey}` im Code durch Ihre tatsächlichen Benutzernamen und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie den folgenden Befehl in Ihrem Terminal aus, um Ihren Test auszuführen:

   ```bash
   node lambdatest_google_test
   ```

   Der Test wird an LambdaTest gesendet und das Testergebnis wird über Ihre LambdaTest-Konsole angezeigt.
   Wenn Sie diese Ergebnisse zu Berichterstattungszwecken von der LambdaTest-Plattform extrahieren möchten, können Sie dies mithilfe der [LambdaTest RESTful API](https://www.lambdatest.com/blog/lambdatest-launches-api-for-selenium-automation/) tun.

5. Wenn Sie jetzt zu Ihrem [LambdaTest Automation-Dashboard](https://accounts.lambdatest.com/dashboard) gehen, sehen Sie Ihren Test aufgelistet. Von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   Sie werden auch einen Status von **bestanden** oder **fehlgeschlagen** anstelle von **abgeschlossen** sehen, aufgrund der `if` oder `else` Codeblöcke.

   [![LambdaTest Automation-Dashboard](automation-logs-1.jpg)](https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Automation-logs-1.jpg)
   Sie können Netzwerk-, Befehls-, Ausnahme- und Selenium-Protokolle für jeden Test innerhalb Ihres Testaufbaus abrufen. Sie finden auch eine Videoaufzeichnung Ihrer Selenium-Skriptausführung.

> [!NOTE]
> Die _HILFE_ Schaltfläche im LambdaTest Automation-Dashboard bietet Ihnen eine große Menge an Informationen, um Ihnen den Einstieg in die LambdaTest-Automatisierung zu erleichtern. Sie können auch unsere Dokumentation zu [Ausführen des ersten Selenium-Skripts in Node JS](https://www.lambdatest.com/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/) folgen.

> [!NOTE]
> Wenn Sie die Fähigkeitsojekte für Ihre Tests nicht per Hand schreiben möchten, können Sie sie mit dem [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) generieren.

### BrowserStack

Selenium-Tests remote auf BrowserStack auszuführen ist einfach. Der Code, den Sie benötigen, sollte dem unten gesehenen Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie innerhalb Ihres Projektverzeichnisses eine neue Datei namens `bstack_google_test.js`.
2. Geben Sie den folgenden Inhalt ein:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const request = require("request");

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
       await driver.get("https://www.google.com/");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.sleep(2000);
       const title = await driver.getTitle();
       if (title === "webdriver - Google Search") {
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

3. Aus Ihrem [BrowserStack Account - Summary](https://www.browserstack.com/accounts/profile/details), besorgen Sie sich Ihren Benutzernamen und Zugriffsschlüssel (siehe _Username and Access Keys_). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugriffsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgemeldet. Dies zeigt die Bedeutung der Aufnahme eines Ergebnismeldemechanismus!

5. Wenn Sie nun zur [BrowserStack Automation-Dashboard](https://www.browserstack.com/automate) Seite zurückkehren, sehen Sie Ihren Test aufgelistet:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

Wenn Sie auf den Link für Ihren Test klicken, gelangen Sie zu einem neuen Bildschirm, auf dem Sie eine Videoaufnahme des Tests und mehrere detaillierte Protokollinformationen dazu sehen können.

> [!NOTE]
> Die _Ressourcen_ Menüoption auf dem BrowserStack Automatisierungs-Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung bei der Durchführung automatisierter Tests. Siehe [Node JS Dokumentation für das Schreiben von Automatisierungstests in Node JS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für die node-spezifischen Informationen. Erkunden Sie die Dokumentation, um all die nützlichen Dinge zu entdecken, die BrowserStack tun kann.

> [!NOTE]
> Wenn Sie die Fähigkeitsojekte für Ihre Tests nicht per Hand schreiben möchten, können Sie sie mit den in den Dokument eingebetteten Generatoren generieren. Siehe [Ihren ersten Test ausführen](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs#run-your-first-test).

#### BrowserStack-Testdetails programmatisch ausfüllen

Sie können die BrowserStack-REST-API und einige andere Fähigkeiten verwenden, um Ihre Tests mit weiteren Details wie z.B. ob es bestanden hat, warum es bestanden hat, zu welchem Projekt der Test gehört usw. zu versehen. BrowserStack weiß diese Details standardmäßig nicht!

Aktualisieren wir unser `bstack_google_test.js`-Demo, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das Anforderungsmodul, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```js
   npm install request
   ```

2. Dann werden wir das Node-Request-Modul importieren, damit wir es verwenden können, um Anfragen an die REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code ein:

   ```js
   const request = require("request");
   ```

3. Jetzt werden wir unser `capabilities`-Objekt aktualisieren, um ein Projektname zu enthalten — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu und denken Sie daran, am Ende der vorherigen Zeile ein Komma einzufügen (Sie können Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automatisierungs-Dashboard zu organisieren):

   ```js
   'project' : 'Google test 2'
   ```

4. Als nächstes müssen wir auf die `sessionId` der aktuellen Sitzung zugreifen, damit wir wissen, wohin wir die Anfrage senden müssen (die ID ist in der Anforderungs-URL enthalten, wie Sie später sehen werden). Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (`let driver …`) :

   ```js
   let sessionId;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
   });
   ```

5. Aktualisieren Sie schließlich den `driver.sleep(2000)`-Block am unteren Rand des Codes, um REST-API-Aufrufe hinzuzufügen (ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugriffsschlüsselwerte):

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "passed",
             reason: "Google results showed correct title",
           },
         });
       } else {
         console.log("Test failed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCESS-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "failed",
             reason: "Google results showed wrong title",
           },
         });
       }
     });
   });
   ```

Diese sind ziemlich intuitiv — einmal abgeschlossen, senden wir eine API-Anfrage an BrowserStack, um die Tests mit einem Bestanden oder Nicht bestanden Status zu aktualisieren, und einem Grund für das Ergebnis.

Wenn Sie jetzt zu Ihrer [BrowserStack Automation-Dashboard](https://live.browserstack.com/dashboard) Seite zurückkehren, sollten Sie Ihre Testsitzung wie zuvor verfügbar sehen, jedoch mit den aktualisierten Daten, die angehängt sind:

![BrowserStack Benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Selenium-Tests remote auf Sauce Labs auszuführen ist ebenfalls sehr einfach und sehr ähnlich zu BrowserStack, wenn auch mit einigen wenigen syntaktischen Unterschieden. Der Code, den Sie benötigen, sollte dem unten gesehenen Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie innerhalb Ihres Projektverzeichnisses eine neue Datei namens `sauce_google_test.js`.
2. Geben Sie den folgenden Inhalt ein:

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

3. Aus Ihren [Sauce Labs Benutzer-Einstellungen](https://app.saucelabs.com/user-settings), besorgen Sie sich Ihren Benutzernamen und Zugriffsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugriffsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgemeldet. Dies zeigt die Bedeutung der Aufnahme eines Ergebnismeldemechanismus!

5. Wenn Sie jetzt zu Ihrer [Sauce Labs Automatisierte Test Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sehen Sie Ihren Test aufgelistet; von hier können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automatisierte Tests](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool, um Fähigkeitsojekte zu generieren, die an Ihre Treiberinstanzen übergeben werden können, basierend auf dem Browser/OS, auf dem Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zum Testen mit Sauce Labs und Selenium, siehe [Mit Selenium für automatisiertes Website-Testing beginnen](https://docs.saucelabs.com/web-apps/automated-testing/selenium/), und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Sauce Labs Testdetails programmatisch ausfüllen

Sie können die Sauce Labs API verwenden, um Ihre Tests mit weiteren Details wie z.B. ob sie bestanden haben, dem Namen des Tests usw. zu versehen. Sauce Labs weiß diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Installieren Sie den Node Sauce Labs Wrapper mit dem folgenden Befehl (falls Sie dies noch nicht für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Erfordern von saucelabs — platzieren Sie dies oben in Ihrer `sauce_google_test.js` Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie das Folgende gleich unterhalb davon hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen und Zugriffsschlüsselwerte (beachten Sie, dass das saHelndenpm-Package verwirrenderweise `password`, nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie vielleicht ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die `driver`-Variable definieren (direkt unter der `build()` Zeile), fügen Sie den folgenden Block hinzu — dieser erhält die korrekte Treiber `sessionID`, die wir benötigen, um Daten an den Job zu schreiben (Sie können es in der nächsten Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)` Block am unteren Rand des Codes durch das Folgende:

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

Hier haben wir eine `testPassed` Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden oder fehlgeschlagen ist, und dann die `saucelabs.updateJob()` Methode verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zu Ihrer [Sauce Labs Automatisierte Test Dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückkehren, sollten Sie Ihren neuen Job sehen, der nun die aktualisierten Daten enthält:

![Sauce Labs Aktualisierte Arbeitsinformation](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack nutzen möchten, können Sie jederzeit Ihren eigenen Remote-Testing-Server einrichten. Lassen Sie uns sehen, wie das geht.

1. Der Selenium-Remote-Server erfordert Java zur Ausführung. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE-Download-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie als Nächstes die neueste [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d.h. nicht eine Beta) und aus der Liste wählen Sie eine Datei, die mit "selenium-server-standalone" beginnt. Wenn diese heruntergeladen wurde, legen Sie sie an einem sinnvollen Ort ab, wie in Ihrem Home-Verzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie das jetzt (siehe den [Einrichtung von Selenium in Node](#einrichtung_von_selenium_in_node) Abschnitt).
3. Führen Sie den Standalone-Server aus, indem Sie das Folgende in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), sodass er genau dem entspricht, was Sie haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie bekommen.

Jetzt haben wir den Server laufen, lassen Sie uns einen Demotest erstellen, der auf dem Remote-Selenium-Server laufen wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Codezeile (die mit `const driver = …` beginnt) so

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er erwartungsgemäß ausgeführt wird; diesmal jedoch auf dem Standalone-Server:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf so ziemlich jedem Server mit den entsprechenden Browser-Treibern einrichten und dann Ihre Skripte mit der URL verbinden, die Sie wählen, um sie freizugeben.

## Integration von Selenium mit CI-Tools

Als ein anderer Punkt ist es auch möglich, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit Continuous Integration (CI)-Tools zu integrieren — dies ist nützlich, da Sie dadurch Ihre Tests über ein CI-Tool ausführen können und nur dann neue Änderungen in Ihr Code-Repository einpflegen, wenn die Tests bestanden werden.

Es ist außerhalb des Umfangs, diesen Bereich im Detail in diesem Artikel zu behandeln, aber wir würden empfehlen, mit Travis CI zu beginnen — dies ist wahrscheinlich das am einfachsten zu verwendende CI-Tool und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Ein Node.js Projekt bauen](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [LambdaTest mit Travis CI verwenden](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [LambdaTest mit CircleCI verwenden](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [LambdaTest mit Jenkins verwenden](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Sauce Labs mit Travis CI verwenden](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **Codeless Automation** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genügend Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
