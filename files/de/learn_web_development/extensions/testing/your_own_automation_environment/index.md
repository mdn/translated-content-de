---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
short-title: Automatisierungsumgebung einrichten
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie `selenium-webdriver` für Node ausführen können. Wir werden auch betrachten, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie denen, die im vorherigen Artikel besprochen wurden, integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des Cross-Browser-Tests</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit ausführt, und wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das am weitesten verbreitete Browser-Automatisierungstool. Es gibt andere Möglichkeiten, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser sendet, um diesen zu automatisieren. Dabei werden Aktionen wie "Öffne diese Webseite", "Bewege dich über dieses Element auf der Seite", "Klicke auf diesen Link", "Prüfe, ob der Link diese URL öffnet" usw. ausgeführt. Dies ist ideal zum Ausführen von automatisierten Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmiersprache ab, mit der Sie Ihre Tests schreiben und ausführen möchten. Die meisten beliebten Umgebungen bieten ein Paket oder Framework, das WebDriver und die erforderlichen Bindungen installiert, um mit WebDriver in dieser Sprache zu kommunizieren, z.B. Java, C#, Ruby, Python, JavaScript (Node) usw. Siehe [Setting Up a Selenium-WebDriver Project](https://www.selenium.dev/documentation/webdriver/getting_started/) für weitere Details zu Selenium-Setups für unterschiedliche Sprachen.

Verschiedene Browser erfordern verschiedene Treiber, um WebDriver die Kommunikation mit ihnen und deren Steuerung zu ermöglichen. Siehe [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für weitere Informationen darüber, wo Sie Browser-Treiber erhalten können.

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach ist, damit zu beginnen, und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver in anderen serverseitigen Umgebungen verwenden, werfen Sie ebenfalls einen Blick auf [Platforms Supported by Selenium](https://www.selenium.dev/downloads/) für einige nützliche Links.

### Einrichten von Selenium in Node

1. Beginnen Sie damit, ein neues npm-Projekt einzurichten, wie im [Einrichten von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) im letzten Kapitel besprochen wurde. Nennen Sie es etwas anderes, z.B. `selenium-test`.
2. Als Nächstes müssen wir ein Framework installieren, das es uns ermöglicht, aus Node heraus mit Selenium zu arbeiten. Wir wählen das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation relativ aktuell zu sein scheint und es gut gepflegt ist. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich im Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diesen Schritten zu folgen, selbst wenn Sie selenium-webdriver bereits installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als Nächstes müssen Sie die entsprechenden Treiber herunterladen, damit WebDriver die Browser steuern kann, die Sie testen möchten. Auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite finden Sie Details, wo Sie sie finden können (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser OS-spezifisch, aber wir werden bei Firefox und Chrome bleiben, da sie über alle wichtigen Betriebssysteme hinweg verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Entpacken Sie sie an einen leicht zugänglichen Ort, wie z.B. das Stammverzeichnis Ihres Benutzerkontos.
3. Fügen Sie den Speicherort des `chromedriver` und `geckodriver` Treibers Ihrer System-`PATH`-Variable hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihrer Festplatte zum Verzeichnis, das die Treiber enthält, sein. Zum Beispiel, wenn wir einen macOS-Computer verwenden würden, unser Benutzername bob wäre und wir unsere Treiber im Stamm unseres Home-Ordners ablegen würden, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Nur um es zu wiederholen: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen festzulegen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile` falls Ihr System die `bash` shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen lassen. Siehe [Versteckte Dateien in macOS anzeigen/verstecken](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei hinzu (aktualisieren Sie den Pfad, wie er tatsächlich auf Ihrem Computer ist):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, und starten Sie dann Ihr Terminal/Ihre Kommandozeile neu, um Ihre Bash-Konfiguration erneut anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable sind, indem Sie Folgendes in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal ausgegeben sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable unter Windows festzulegen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Lassen Sie uns einen kurzen Test versuchen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `duck_test.js`:
2. Geben Sie ihr folgenden Inhalt und speichern Sie sie dann:

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

Sie sollten sehen, dass sich automatisch eine Instanz von Firefox öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingetragen, und der Suchbutton wird geklickt. WebDriver wartet dann 1 Sekunde; der Dokumenttitel wird dann aufgerufen, und wenn er "webdriver at DuckDuckGo" lautet, wird eine Nachricht zurückgegeben, die besagt, dass der Test bestanden ist.

Wir warten dann 2 Sekunden, nach denen WebDriver die Firefox-Instanz herunterfährt und stoppt.

## Tests in mehreren Browsern gleichzeitig

Es gibt auch nichts, das Sie daran hindert, den Test in mehreren Browsern gleichzeitig auszuführen. Versuchen wir das!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `duck_test_multiple.js`. Es steht Ihnen frei, die Verweise auf einige der anderen Browser, die wir hinzugefügt haben, zu ändern, sie zu entfernen usw., je nachdem, welche Browser Sie auf Ihrem Betriebssystem zum Testen zur Verfügung haben. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. Was die Zeichenfolge betrifft, die Sie in der `.forBrowser()` Methode für andere Browser verwenden, siehe die [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie Ihrem Datei den folgenden Inhalt und speichern Sie sie dann:

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
> Wenn Sie einen Mac verwenden und Safari testen möchten, könnte es sein, dass Sie eine Fehlermeldung bekommen, die in etwa lautet: "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn Sie dies bekommen, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie auch eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie dies erhalten, können Sie diese Sicherheitseinstellung nur für diese Treiber-App außer Kraft setzen. Zum Beispiel können Sie unter Mac <kbd>Ctrl</kbd> + auf die App klicken, _Öffnen_ wählen und erneut _Öffnen_ aus dem resultierenden Dialogfeld wählen.

Hier haben wir den Test wie zuvor durchgeführt, allerdings haben wir ihn dieses Mal in eine Funktion, `searchTest()`, gepackt. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jeden an die Funktion übergeben, damit der Test auf allen durchgeführt wird.

Lassen Sie uns fortfahren und die Grundlagen der WebDriver-Syntax näher betrachten.

## WebDriver-Syntax Schnellkurs

Lassen Sie uns einige entscheidende Merkmale der WebDriver-Syntax betrachten. Für vollständigere Details sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für ein detailliertes Referenzwerk und die Hauptdokumentation von Selenium's [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die viele Beispiele zum Lernen aus verschiedenen Sprachen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver` Modul einbinden, indem Sie den `Builder`-Konstruktor und die `Browser`-Schnittstelle importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()` Konstruktor, um eine neue Instanz eines Treibers zu erstellen, indem Sie die Methode `forBrowser()` verketten, um anzugeben, mit welchem Browser Sie mit diesem Builder testen möchten.
Am Ende wird die Methode `build()` verketten, um tatsächlich die Treiberinstanz zu erstellen (siehe die [Builder Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Es ist möglich, spezielle Konfigurationsoptionen für die zu testenden Browser festzulegen. Beispielsweise können Sie eine bestimmte Version und ein Betriebssystem in der Methode `forBrowser()` festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariablen festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, um diesen Code zu erforschen, während wir darüber sprechen. Erstellen Sie innerhalb Ihres Selenium-Testprojektverzeichnisses eine neue Datei namens `quick_test.js` und fügen Sie ihr den folgenden Code hinzu:

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

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die Methode `get()` der Treiberinstanz, die Sie vorher erstellt haben, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und denjenigen darunter.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie anfangen, einen Remote-Server zu verwenden, um Ihre Tests auszuführen (siehe später), wird Ihr Code fehlschlagen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()` Funktion wie folgt, indem Sie den Platzhalterpfad durch einen echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer ersetzen und versuchen Sie es dann auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Nun haben wir ein Dokument zum Testen, müssen wir auf irgendeine Weise mit ihm interagieren, was normalerweise darin besteht, zuerst ein bestimmtes Element auszuwählen, um etwas daran zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die Methode `findElement()`, die eine Selektionsmethode als Parameter akzeptiert. Um zum Beispiel ein Element nach ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Möglichkeiten, ein Element zu finden, ist per CSS — die Methode `By.css()` ermöglicht Ihnen die Auswahl eines Elements mit einem CSS-Selektor.

Aktualisieren Sie nun Ihre `example()` Funktion wie folgt und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darin enthaltenen Elementen zu interagieren. Sie können nützliche allgemeine Beispiele sehen, beginnend bei [Textwerte abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in der WebDriver-Dokumentation.

Wenn wir den Text innerhalb unseres Buttons abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun am Ende der `example()` Funktion hinzu, wie unten gezeigt:

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

Führen Sie das Beispiel mit `node` genauso aus wie zuvor. Sie sollten das Textlabel des Buttons in der Konsole gemeldet sehen.

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt, und ein `alert()` Popup sollte erscheinen. Wenigstens wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()` Funktion wie folgt und testen Sie es erneut:

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

Als nächstes versuchen wir, Text in die Formularelemente einzugeben. Aktualisieren Sie die `example()` Funktion wie folgt und führen Sie Ihren Test erneut aus:

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

Sie können Tastendrücke übermitteln, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key` Objekts verwenden. Zum Beispiel haben wir oben das folgende verwendet, um zwischen Formulareingaben zu tabben:

```js
input.sendKeys(Key.TAB);
```

### Auf den Abschluss eines Vorgangs warten

Es gibt Zeiten, in denen Sie WebDriver warten lassen möchten, bis ein Vorgang abgeschlossen ist, bevor es fortfährt. Wenn Sie zum Beispiel eine neue Seite laden, möchten Sie darauf warten, dass das DOM der Seite das Laden abgeschlossen hat, bevor Sie versuchen, mit ihren Elementen zu interagieren, sonst wird der Test wahrscheinlich fehlschlagen.

In unserem `duck_test_multiple.js` Test haben wir zum Beispiel diese Zeile hinzugefügt:

```js
await driver.sleep(2000);
```

Die Methode `sleep()` akzeptiert einen Wert, der die Zeit zum Warten in Millisekunden angibt — die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das `await` Schlüsselwort, um die umschließende Funktion anzuhalten, bis das Promise aufgelöst wird, danach wird der Code, der der Methode folgt, ausgeführt.

Wir könnten auch eine `sleep()` Methode zu unserem `quick_test.js` Test hinzufügen — versuchen Sie, Ihre `example()` Funktion so zu aktualisieren:

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

Versuchen Sie den aktualisierten Code auszuführen. WebDriver wird jetzt das erste Formularfeld ausfüllen, eine Sekunde warten und dann testen, ob sein Wert ausgefüllt ist (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um seinen `value` Attributwert abzurufen. Es druckt dann eine Meldung in die Konsole, um Erfolg/Misserfolg zu melden.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeitdauer wiederholt testet und dann fortfährt, den Code auszuführen. Diese nutzt auch die [util library](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die allgemeine Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie Ihren Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen mit der `driver.quit()` Methode herunterfahren, um sicherzustellen, dass sie nicht unnötig Ressourcen verwenden. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie jetzt Ihren Test ausführen, sollten Sie sehen, dass der Test durchgeführt und die Browser-Instanz nach Abschluss des Tests wieder heruntergefahren wird.

## Testen von Best Practices

Es wurde viel über Best Practices für das Schreiben von Tests geschrieben. Sie finden einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [mit dem Dokument interagieren](#mit_dem_dokument_interagieren), stellen Sie sicher, dass Sie Locator und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern werden — wenn Sie ein testbares Element haben, auf das Sie einen Test durchführen möchten, stellen Sie sicher, dass es eine stabile ID oder Position auf der Seite hat, die mit einem CSS-Selektor ausgewählt werden kann, der nicht einfach mit der nächsten Site-Iteration geändert wird. Sie möchten Ihre Tests so unzerbrechlich wie möglich machen, d.h. sie sollten nicht einfach brechen, wenn sich etwas ändert.
2. Atomspezifische Tests schreiben: Jeder Test sollte nur eine Sache testen, damit es einfach ist, im Auge zu behalten, welche Testdatei welches Kriterium testet. Der oben betrachtete `duck_test.js` Test ist ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist herauszufinden, was er tut, wenn wir mehr Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` ein etwas besserer Name?
3. Autonome Tests schreiben: Jeder Test sollte für sich alleine funktionieren und nicht von anderen Tests abhängig sein, um zu funktionieren.

Darüber hinaus sollten wir die Testergebnisse/den Bericht erwähnen — wir haben in unseren obigen Beispielen Ergebnisse mit einfachen `console.log()` Anweisungen gemeldet, aber das alles wird in JavaScript gemacht, sodass Sie jedes beliebige Testraum- und Berichtsystem verwenden können, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein kurzes Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Promises, um alle notwendigen Schritte in unserem Test auszuführen — die von WebDriver verwendeten Promise-basierten Methoden müssen zur ordnungsgemäßen Funktion aufgelöst werden.
2. Installieren Sie das mocha Test-Harness, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können jetzt den Test (und alle anderen, die Sie in Ihrem `test` Verzeichnis ablegen) mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts` Flag einschließen, um sicherzustellen, dass Ihre Tests nicht aufgrund von Mochas willkürlichem Timeout (das 3 Sekunden beträgt) fehlschlagen.

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, wie verschiedene Kombinationen von Test-/Assertionstools eingerichtet werden können.

## Remote-Tests ausführen

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als die lokale Ausführung. Sie müssen lediglich Ihre Treiberinstanz erstellen, aber mit einigen zusätzlichen Funktionen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, um zu zeigen, wie man einen Selenium-Test auf [BrowserStack](https://www.browserstack.com/automate) remote ausführt:

1. Erstellen Sie innerhalb Ihres Projektverzeichnisses eine neue Datei namens `bstack_duck_test.js`.
2. Geben Sie der Datei den folgenden Inhalt:

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

3. Holen Sie sich Ihren Benutzernamen und Zugangsschlüssel von Ihrer BrowserStack [Account & Profil-Detailsseite](https://www.browserstack.com/accounts/profile/details) (siehe _Benutzername und Zugangsschlüssel_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung von Berichtsmethoden für Ergebnisse!

6. Wenn Sie nun zum [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details einschließlich einer Videoaufnahme des Tests und mehreren detaillierten Protokollen mit Informationen dazu:
   ![BrowserStack Automatisierungsergebnisse](bstack_automated_results.png)

> [!NOTE]
> Die Option _Ressourcen_ im Browserstack Automatisierung Dashboard enthält eine Fülle nützlicher Informationen zur Verwendung zum Ausführen automatisierter Tests. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für nodespezifische Informationen.

#### Ausfüllen von BrowserStack-Testdetails programmatisch

Sie können die BrowserStack REST-API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu versehen, wie ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört usw. BrowserStack kennt diese Details nicht von Haus aus.

Lassen Sie uns unser `bstack_duck_test.js` Demo aktualisieren, um zu zeigen, wie diese Features funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios) Modul, indem Sie den folgenden Befehl im Projektverzeichnis ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const axios = require("axios");
   ```

3. Nun aktualisieren wir unser `capabilities` Objekt, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu und vergessen Sie nicht, am Ende der vorherigen Zeile ein Komma hinzuzufügen (Sie können den Namen von `build` und `project` variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automate Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als Nächstes wollen wir die `sessionId` der aktuellen Sitzung abrufen und diese (zusammen mit Ihrem `userName` und `accessKey`) verwenden, um die URL zum Senden von Anfragen zusammenzubauen, um die BrowserStack-Daten zu aktualisieren. Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver` Objekt erstellt (das mit `const driver = new Builder()`) beginnt:

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Abschließend aktualisieren wir den `if...else` Block in der Nähe des unteren Endes des Codes, um je nach Bestehen oder Nichtbestehen des Tests entsprechende API-Aufrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem bestandenen oder nichtbestandenen Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie jetzt zu Ihrem [BrowserStack Automate Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten Daten versehen. Es zeigt einen Status von "PASSED" und den per REST-API gemeldeten Grund für das Bestehen:

![BrowserStack Benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Lassen Sie uns ein Beispiel betrachten, das zeigt, wie Selenium Tests remote auf Sauce Labs ausgeführt werden:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `sauce_google_test.js`.
2. Geben Sie der Datei den folgenden Inhalt:

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

3. Holen Sie sich von Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings) Ihren Benutzernamen und Zugangsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung von Berichtsmethoden für Ergebnisse!

5. Wenn Sie nun zu Ihrer [Sauce Labs Automatisierungstest-Dashboardseite](https://app.saucelabs.com/dashboard/tests) gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere derartige Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Sauce Labs' [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) ist ein nützliches Tool, um Fähigkeitenobjekte zu generieren, die an Ihre Treiberinstanzen übergeben werden, basierend auf dem Browser/OS, den Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zum Testen mit Sauce Labs und Selenium, sehen Sie sich [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) an, und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Ausfüllen von Sauce Labs Testdetails programmatisch

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details zu versehen, wie ob er bestanden hat, dem Namen des Tests usw. Sauce Labs kennt diese Details nicht von Haus aus!

Dazu müssen Sie:

1. Den Node Sauce Labs Wrapper mit dem folgenden Befehl installieren (falls Sie es für dieses Projekt noch nicht getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Fügen Sie saucelabs hinzu — platzieren Sie dies oben in Ihrer `sauce_google_test.js` Datei, direkt unter den vorherigen Variablendeklarationen:

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

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername- und Zugangsschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket fälschlicherweise `password` und nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um sie darin zu speichern.

4. Unterhalb des Blocks, in dem Sie die Variable `driver` definieren (direkt unter der `build()` Zeile), fügen Sie den folgenden Block hinzu — dieser erhält die richtige Treiber-`sessionID`, die wir benötigen, um Daten an den Job zu schreiben (Sie können es im nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Abschließend ersetzen Sie den `driver.sleep(2000)` Block in der Nähe des unteren Endes des Codes durch folgendes:

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

Hier haben wir eine `testPassed` Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden oder nicht bestanden wurde, und dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie nun zu Ihrer [Sauce Labs Automatisierungstest-Dashboardseite](https://app.saucelabs.com/dashboard/tests) zurückkehren, sollten Sie sehen, dass Ihr neuer Job jetzt die aktualisierten Daten enthält:

![Sauce Labs Aktualisierte Jobinformation](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack nutzen möchten, können Sie jederzeit einen eigenen Remote-Testserver einrichten. Lassen Sie uns betrachten, wie man das macht.

1. Der Selenium-Remote-Server erfordert Java, um zu laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, sobald es heruntergeladen ist.
2. Laden Sie als Nächstes den neuesten [Selenium Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer (d.h. keine Beta) und wählen Sie aus der Liste eine Datei aus, die mit "selenium-server-standalone" beginnt. Legen Sie sie nach dem Herunterladen an einen sinnvollen Ort, z.B. in Ihrem Home-Verzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Starten Sie den Standalone-Server, indem Sie folgendes in einem Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen) so dass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen — versuchen Sie es jetzt zu besuchen, um zu sehen, was Sie bekommen.

Nun, da wir den Server laufen haben, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote-Selenium-Server läuft.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Codezeile (die mit `const driver = …` beginnt) so

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet läuft; dieses Mal jedoch werden Sie ihn auf dem Standalone-Server ausführen:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf so ziemlich jedem beliebigen Server einrichten zusammen mit den relevanten Browser-Treibern und dann Ihre Skripte daran anschließen, indem Sie die URL verwenden, die Sie zur Exposition gewählt haben.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit {{Glossary("continuous_integration", "Continuous Integration")}} (CI) Tools zu integrieren — das ist nützlich, weil es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen und nur dann neue Änderungen in Ihrem Code-Repository festschreiben können, wenn die Tests bestehen.

Es ist außerhalb des Umfangs, diesen Bereich in diesem Artikel im Detail zu betrachten, aber wir würden vorschlagen, mit Travis CI zu beginnen — dies ist vermutlich das einfachste CI-Tool, um loszulegen und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um loszulegen, siehe zum Beispiel:

- [Travis CI für vollständige Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeloser Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Ihnen Spaß gemacht haben und Ihnen genug Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie beginnen können, Ihre eigenen automatisierten Tests zu schreiben.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
