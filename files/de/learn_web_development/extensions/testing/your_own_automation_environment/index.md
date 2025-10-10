---
title: Einrichtung einer eigenen Testautomatisierungsumgebung
short-title: Einrichtung der Automatisierungsumgebung
slug: Learn_web_development/Extensions/Testing/Your_own_automation_environment
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Test-Bibliothek wie selenium-webdriver für Node durchführen können. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie denjenigen, die im vorherigen Artikel besprochen wurden, integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">hochkarätigen Prinzipien des Cross-Browser-Testings</a> und
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet, Tests damit durchführt und wie man es mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Methoden, aber die beste Methode, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser sendet, um ihn zu automatisieren, Aktionen wie "diese Webseite öffnen", "über dieses Element auf der Seite fahren", "diesen Link anklicken", "prüfen, ob der Link diese URL öffnet" usw. auszuführen. Dies ist ideal für das Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmierumgebung ab, die Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten gängigen Umgebungen haben ein Paket oder Framework, das WebDriver und die Bindings installiert, die erforderlich sind, um mit WebDriver in dieser Sprache zu kommunizieren, z.B. Java, C#, Ruby, Python, JavaScript (Node) usw. Weitere Details zu Selenium-Konfigurationen für verschiedene Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen darüber, wo Sie Browser-Treiber bekommen können, finden Sie unter [Plattformen, die von Selenium unterstützt werden](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach ist, damit zu beginnen, und es eine vertraute Umgebung für Frontend-Entwickler ist.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, schauen Sie auch auf [Plattformen, die von Selenium unterstützt werden](https://www.selenium.dev/downloads/) für einige nützliche Links.

### Einrichtung von Selenium in Node

1. Zunächst richten Sie ein neues npm-Projekt ein, wie im letzten Kapitel unter [Einrichtung von Node und npm](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es anders, wie z.B. `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, um von innerhalb von Node mit Selenium arbeiten zu können. Wir wählen das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), da die Dokumentation relativ aktuell und es gut gepflegt ist. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver zuvor installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die relevanten Treiber herunterladen, damit WebDriver die Browser, die Sie testen möchten, steuern kann. Weitere Details, wo Sie diese bekommen können, finden Sie auf der [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) Seite (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir werden bei Firefox und Chrome bleiben, da sie auf allen gängigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://googlechromelabs.github.io/chrome-for-testing/#stable) Treiber herunter.
2. Packen Sie sie an einem Ort aus, der relativ leicht zugänglich ist, z.B. im Stammverzeichnis ihres Home-Benutzerdirectories.
3. Fügen Sie den Ort des `chromedriver` und `geckodriver` zu Ihrer Systemumgebungsvariable `PATH` hinzu. Dies sollte ein absoluter Pfad sein, der vom Stammverzeichnis Ihres Festplatte ordner zu dem Verzeichnis führt, in dem sich die Treiber befinden. Wenn wir z. B. einen macOS-Rechner verwenden, unser Benutzername bob ist und wir unsere Treiber im Stammverzeichnis unseres Home-Ordners abgelegt haben, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es noch einmal zu sagen: Der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen einzustellen:

1. Öffnen Sie Ihre `.zprofile` (oder `.bash_profile`, wenn Ihr System die `bash`-Shell verwendet) Datei.
   > [!NOTE]
   > Wenn Sie versteckte Dateien nicht sehen können, müssen Sie sie einblenden, siehe [Versteckte Dateien in macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
2. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad, wie er tatsächlich auf Ihrem Computer ist):

   ```bash
   # Add WebDriver browser drivers to PATH
   export PATH=$PATH:/Users/bob
   ```

3. Speichern und schließen Sie diese Datei, starten Sie dann Ihr Terminal/Command-Prompt neu, um Ihre Bash-Konfiguration anzuwenden.
4. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable enthalten sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

   Sie sollten es im Terminal angezeigt sehen.

> [!NOTE]
> Um Ihre `PATH`-Variable auf Windows einzustellen, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Lassen Sie uns einen kurzen Test machen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test.js`:
2. Geben Sie den folgenden Inhalt ein und speichern Sie ihn:

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

Sie sollten sehen, wie sich eine Instanz von Firefox automatisch öffnet! DuckDuckGo wird automatisch in einem Tab geladen, "webdriver" wird in das Suchfeld eingegeben, und die Suchschaltfläche wird angeklickt. WebDriver wartet dann eine Sekunde lang; der Dokumenttitel wird dann abgerufen, und wenn er "webdriver at DuckDuckGo" ist, wird eine Nachricht zurückgegeben, die besagt, dass der Test bestanden wurde.

Wir warten dann zwei Sekunden, danach schließt WebDriver die Firefox-Instanz und stoppt.

## Tests in mehreren Browsern gleichzeitig

Es gibt auch nichts, was Sie daran hindert, den Test auf mehreren Browsern gleichzeitig auszuführen. Lassen Sie uns das ausprobieren!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `duck_test_multiple.js`. Sie können die Verweise auf einige der anderen Browser, die wir hinzugefügt haben, ändern, entfernen usw., abhängig davon, welche Browser Sie auf Ihrem Betriebssystem zum Testen zur Verfügung haben. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug auf den zu verwendenden Zeichen in der `.forBrowser()`-Methode für andere Browser finden Sie auf der [Browser enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
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
> Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie "Konnte keine Sitzung erstellen: Sie müssen die Option 'Remote-Automatisierung erlauben' im Entwicklermenü von Safari aktivieren, um Safari über WebDriver zu steuern." Wenn Sie dies erhalten, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.
>
> Möglicherweise erhalten Sie eine Nachricht, dass Sie eine Treiber-App nicht öffnen können, weil sie nicht von einer verifizierten Quelle heruntergeladen wurde. Wenn Sie diese Nachricht erhalten, können Sie diese Sicherheitseinstellung nur für diese Treiber-App außer Kraft setzen. Beispielsweise können Sie auf einem Mac mit <kbd>Ctrl</kbd> + Mausklick auf die App klicken, _Öffnen_ wählen und im daraufhin angezeigten Dialogfeld erneut _Öffnen_ wählen.

Hier haben wir den Test wie zuvor ausgeführt, außer dass wir ihn diesmal in eine Funktion namens `searchTest()` eingebunden haben. Wir haben neue Browserinstanzen für mehrere Browser erstellt und jede an die Funktion übergeben, sodass der Test auf allen ausgeführt wird.

Lassen Sie uns fortfahren und uns die Grundlagen der WebDriver-Syntax im Detail ansehen.

## Schnelleinführung in die WebDriver-Syntax

Schauen wir uns einige der wichtigsten Funktionen der WebDriver-Syntax an. Für vollständige Details sollten Sie das [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) als ausführliche Referenz konsultieren sowie die Hauptdokumentation von Selenium [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/), die mehrere Beispiele zum Lernen bietet, die in verschiedenen Sprachen geschrieben sind.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbeziehen, den `Builder`-Konstruktor und das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen und die `forBrowser()`-Methode anzuhängen, um anzugeben, welchen Browser Sie mit diesem Builder testen möchten. Die `build()`-Methode wird am Ende angehängt, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser festzulegen; zum Beispiel können Sie eine bestimmte Version und ein bestimmtes Betriebssystem in der `forBrowser()`-Methode testen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "130", "MAC").build();
```

Sie könnten diese Optionen auch mit einer Umgebungsvariable setzen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:130:MAC
```

Lassen Sie uns einen neuen Test erstellen, der es uns ermöglicht, diesen Code zu erkunden, während wir darüber sprechen. Erstellen Sie im Verzeichnis Ihres Selenium-Testprojekts eine neue Datei namens `quick_test.js` und fügen Sie den folgenden Code hinzu:

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

Um die Seite zu laden, die Sie testen möchten, verwenden Sie die `get()`-Methode der Treiberinstanz, die Sie zuvor erstellt haben, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den folgenden.

Sie können jede URL verwenden, um auf Ihre Ressource hinzuweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get("file:///Users/bob/git/examples/test_file.html");
```

oder

```js
driver.get("http://localhost:8888/test_file.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist – wenn Sie anfangen, einen Remote-Server zu benutzen, um Ihre Tests auszuführen (später mehr dazu), bricht Ihr Code, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie Ihre `example()`-Funktion wie folgt; ersetzen Sie den Platzhalterpfad durch einen echten lokalen Pfad zu einer HTML-Datei auf Ihrem Computer und versuchen Sie, ihn auszuführen:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get("file:///Users/bob/git/examples/test_file.html");
})();
```

### Mit dem Dokument interagieren

Nun, da wir ein Dokument zum Testen haben, müssen wir auf irgendeine Weise mit ihm interagieren, was normalerweise darin besteht, zuerst ein spezifisches Element auszuwählen, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich anhand von ID, Klasse, Elementname usw. Die eigentliche Auswahl erfolgt durch die Methode `findElement()`, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element anhand der ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Methoden, um ein Element anhand von CSS zu finden, ist die Methode `By.css()`, die es Ihnen ermöglicht, ein Element mithilfe eines CSS-Selektors auszuwählen.

Aktualisieren Sie Ihre `example()`-Funktion jetzt wie folgt, und führen Sie das Beispiel aus:

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

Es gibt viele Möglichkeiten, mit Ihren Web-Dokumenten und den darin enthaltenen Elementen zu interagieren. Sie können nützliche häufige Beispiele ab [Textelemente abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten sehen.

Wenn wir den Text innerhalb unserer Schaltfläche abrufen wollten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt am unteren Rand der `example()`-Funktion hinzu, wie unten gezeigt:

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

Führen Sie das Beispiel mit `node` in derselben Weise aus, wie Sie es zuvor getan haben. Sie sollten den Text der Schaltfläche im Konsolenprotokoll angezeigt sehen.

Lassen Sie uns etwas Nützlicheres tun. Ersetzen Sie den vorherigen Codeeintrag durch `button.click();`, wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; die Schaltfläche wird angeklickt, und ein `alert()`-Popup sollte erscheinen. Wenigstens wissen wir, dass die Schaltfläche funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die Funktion `example()` wie folgt, und versuchen Sie erneut, es zu testen:

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

Als nächstes versuchen wir, etwas Text in die Formularelemente einzugeben. Aktualisieren Sie die Funktion `example()` wie folgt, und versuchen Sie, Ihren Test erneut auszuführen:

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

Sie können Tastenbetätigungen, die nicht als normale Zeichen dargestellt werden können, mit Eigenschaften des `Key`-Objekts übergeben. Zum Beispiel haben wir oben das folgende benutzt, um zwischen den Formulareingaben zu wechseln:

```js
input.sendKeys(Key.TAB);
```

### Warten, bis etwas abgeschlossen ist

Es gibt Zeiten, in denen Sie möchten, dass WebDriver auf etwas wartet, bevor es fortfährt. Zum Beispiel, wenn Sie eine neue Seite laden, möchten Sie warten, bis das DOM der Seite fertig geladen ist, bevor Sie versuchen, mit einem ihrer Elemente zu interagieren. Andernfalls schlägt der Test wahrscheinlich fehl.

In unserem `duck_test_multiple.js`-Test haben wir zum Beispiel diese Zeile eingefügt:

```js
await driver.sleep(2000);
```

Die `sleep()`-Methode akzeptiert einen Wert, der die Zeit in Millisekunden angibt, die gewartet werden soll – die Methode gibt ein {{jsxref("Promise")}} zurück, das am Ende dieser Zeit aufgelöst wird. Wir verwenden das Schlüsselwort `await`, um die umschließende Funktion solange zu pausieren, bis das Versprechen aufgelöst ist, nach dem der Code, der der Methode folgt, ausgeführt wird.

Wir könnten auch die Method `sleep()` in unseren `quick_test.js`-Test hinzufügen – versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

Versuchen Sie, den aktualisierten Code auszuführen. WebDriver wird jetzt das erste Eingabefeld ausfüllen, eine Sekunde lang warten und dann testen, ob dessen Wert eingegeben wurde (d.h. nicht leer ist), indem `getAttribute()` verwendet wird, um den Wert seines `value`-Attributs abzurufen. Anschließend wird eine Meldung in der Konsole angezeigt, die über Erfolg oder Misserfolg berichtet.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeit wiederholt testet und dann den Code weiter ausführt. Dies nutzt auch die [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die allgemeine Bedingungen definiert, die zusammen mit `wait()` verwendet werden sollen.

### Treiber nach der Verwendung herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle Treiberinstanzen, die Sie geöffnet haben, mit der `driver.quit()`-Methode abschalten, um sicherzustellen, dass sie nicht weiterhin unnötig Ressourcen verbrauchen. Aktualisieren Sie `quick_test.js` wie folgt:

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

Wenn Sie es jetzt ausführen, sollten Sie jetzt sehen, dass der Test ausgeführt wird und die Browserinstanz nach Abschluss des Tests heruntergefahren wird.

## Best Practices für Tests

Es wurde viel über Best Practices beim Schreiben von Tests geschrieben. Sie finden einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [Mit dem Dokument interagieren](#with_the_document_interact), stellen Sie sicher, dass Sie Lokalisatoren und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern – wenn Sie ein zu testendes Element haben, stellen Sie sicher, dass es eine stabile ID hat oder experimentieren Sie damit, es mithilfe eines CSS-Selectors zu wählen, der sich nicht bei der nächsten Site-Iteration ändern wird. Sie wollen Ihre Tests so unempfindlich gegenüber Änderungen wie möglich machen, d.h. sie sollen nicht sofort brechen, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, damit es einfach ist, nachzuvollziehen, welche Testdatei welches Kriterium testet. Der oben angesehene `duck_test.js`-Test ist ziemlich gut, da er nur eine einzige Sache testet – ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist, herauszufinden, was es tut, wenn wir weitere Tests hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte selbstständig funktionieren und nicht davon abhängig sein, dass andere Tests funktionieren.

Darüber hinaus sollten wir das Thema Testergebnisse/Reporting ansprechen — wir haben in unseren obigen Beispielen Ergebnisse mithilfe einfacher `console.log()`-Anweisungen berichtet, aber das alles wird in JavaScript gemacht, sodass Sie jedes beliebige Testlauf- und Berichtssystem verwenden können, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool. Lassen Sie uns ein kurzes Beispiel durchgehen:

1. Machen Sie eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js)-Beispiels innerhalb Ihres Projektverzeichnisses. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle für unseren Test erforderlichen Schritte auszuführen – die von WebDriver verwendeten methodenbasierten Methoden müssen aufgelöst werden, damit es ordnungsgemäß funktioniert.
2. Installieren Sie das Mocha-Test-Framework, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) jetzt mit folgendem Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das Flag `--no-timeouts` einschließen, um sicherzustellen, dass Ihre Tests nicht aufgrund eines willkürlichen Mocha-Timeouts fehlschlagen (das 3 Sekunden beträgt).

> [!NOTE]
> [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie verschiedene Kombinationen von Test-/Assertion-Tools eingerichtet werden.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das Ausführen vor Ort. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit einigen weiteren festgelegten Funktionen, einschließlich der Fähigkeiten des Browsers, auf dem Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

### BrowserStack

Lassen Sie uns ein Beispiel erstellen, um zu zeigen, wie ich einen Selenium-Test aus der Ferne auf [BrowserStack](https://www.browserstack.com/automate) ausführen kann:

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

3. Holen Sie sich von Ihrer [BrowserStack-Konto & Profil-Details-Seite](https://www.browserstack.com/accounts/profile/details) Ihren Benutzernamen und Zugangsschlüssel (siehe _Username and Access Keys_).
4. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzername und Zugangsschlüsselwerte (und vergewissern Sie sich, dass Sie sie sicher aufbewahren).
5. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, eine Art Ergebnisberichtsmechanismus einzubeziehen!

6. Wenn Sie jetzt zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sehen Sie Ihren Test aufgelistet, mit Details einschließlich einer Videoaufzeichnung des Tests und mehreren detaillierten Protokollen von Informationen dazu:
   ![Automatisierte Ergebnisse in BrowserStack](bstack_automated_results.png)

> [!NOTE]
> Die Option _Ressourcen_ im BrowserStack-Automatisierungs-Dashboard enthält eine Fülle nützlicher Informationen, wie es zum Ausführen automatisierter Tests verwendet werden kann. Siehe [Selenium mit NodeJS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für node-spezifische Informationen.

#### Ausfüllen von BrowserStack-Testdetails programmatisch

Sie können die BrowserStack REST API und einige andere Fähigkeiten verwenden, um Ihren Test mit mehr Details zu versehen, z.B. ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehörte usw. BrowserStack weiß diese Details standardmäßig nicht.

Lassen Sie uns unser `bstack_duck_test.js`-Demo aktualisieren, um zu zeigen, wie diese Features funktionieren:

1. Installieren Sie das [axios](https://www.npmjs.com/package/axios)-Modul, indem Sie den folgenden Befehl innerhalb Ihres Projektverzeichnisses ausführen:

   ```bash
   npm install axios
   ```

2. Importieren Sie das axios-Modul, damit wir es verwenden können, um Anfragen an die BrowserStack REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihren Code ein:

   ```js
   const axios = require("axios");
   ```

3. Nun werden wir unser `capabilities`-Objekt aktualisieren, um einen Projektnamen einzubeziehen – fügen Sie die folgende Zeile vor der schließenden geschwungenen Klammer hinzu. Denken Sie daran, am Ende der vorherigen Zeile ein Komma hinzuzufügen (die Build- und Projektnamen können variiert werden, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungs-Dashboard zu organisieren):

   ```js
   const capabilities = {
     // …
     project: "DuckDuckGo test 2",
   };
   ```

4. Als nächstes rufen wir die `sessionId` der aktuellen Sitzung ab und verwenden diese (zusammen mit Ihrem `userName` und `accessKey`), um die URL zusammenzustellen, an die Anfragen zum Aktualisieren der BrowserStack-Daten gesendet werden, indem die folgenden Zeilen direkt unter dem Block eingefügt werden, der das `driver`-Objekt erstellt (das mit `const driver = new Builder()` beginnt):

   ```js
   let sessionId;
   let bstackURL;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
     bstackURL = `https://${capabilities["bstack:options"].userName}:${capabilities["bstack:options"].accessKey}@www.browserstack.com/automate/sessions/${sessionId}.json`;
   });
   ```

5. Schließlich aktualisieren wir den `if...else`-Block nahe dem unteren Rand des Codes, um je nach Bestehen oder Nichtbestehen des Tests geeignete API-Aufrufe an BrowserStack zu senden:

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

Sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem Bestanden- oder Nicht-bestanden-Status sowie einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie nun zum [BrowserStack Automate-Dashboard](https://automate.browserstack.com/dashboard/) zurückkehren, sollten Sie Ihre Testsitzung wie zuvor sehen, aber mit Ihren benutzerdefinierten Daten daran haftend. Sie zeigt einen Status von „BESTANDEN“ und den über die REST-API gemeldeten Grund für das Bestehen:

![Benutzerdefinierte Ergebnisse in BrowserStack](bstack_custom_results.png)

### Sauce Labs

Schauen wir uns ein Beispiel an, das zeigt, wie Selenium-Tests aus der Ferne auf Sauce Labs ausgeführt werden:

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

3. Erhalten Sie Ihren Benutzernamen und Zugangsschlüssel von Ihren [Sauce Labs-Benutzereinstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code mit Ihren tatsächlichen Benutzernamen und Zugangsschlüsseln (und stellen Sie sicher, dass Sie sie sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis an Ihre Konsole zurückgegeben. Dies zeigt, wie wichtig es ist, irgendeine Art von Ergebnisberichtsmechanismus einzuschließen!

5. Wenn Sie nun zu Ihrer [Sauce Labs Automated Test-Dashboard-Seite](https://app.saucelabs.com/dashboard/tests) gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie sich Videos, Screenshots und andere derartige Daten ansehen.
   ![Automatisierter Test in Sauce Labs](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zum Generieren von Capability-Objekten, die Ihren Treiberinstanzen basierend auf dem gewünschten Browser/OS zum Testen zugeführt werden sollen.

> [!NOTE]
> Weitere nützliche Details zum Testen mit Sauce Labs und Selenium finden Sie unter [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs).

#### Ausfüllen der Sauce Labs-Testdetails programmatisch

Sie können die Sauce Labs API verwenden, um Ihren Test mit mehr Details anzureichern, z.B. ob er bestanden wurde, den Namen des Tests usw. Sauce Labs weiß diese Details standardmäßig nicht!

Dazu müssen Sie:

1. Die Node Sauce Labs-Wrapper mit folgendem Befehl installieren (falls Sie es nicht schon für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Importieren Sie saucelabs – setzen Sie dies oben in Ihrer `sauce_google_test.js`-Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie das Folgende gleich unterhalb dessen hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code erneut mit Ihren tatsächlichen Benutzer- und Zugangsschlüssel-Werten (beachten Sie, dass das saucelabs npm-Paket verwirrenderweise `password` anstelle von `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, können Sie ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unterhalb des Blocks, in dem Sie die Variable `driver` definieren (direkt unterhalb der `build()`-Zeile), fügen Sie den folgenden Block hinzu – der die korrekte `sessionID` des Treibers abruft, die wir benötigen, um Daten zum Job zu schreiben (Sie können es in Aktion im folgenden Codeblock sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)`-Block am unteren Rand des Codes durch Folgendes:

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

Hier haben wir eine `testPassed`-Variable auf `true` oder `false` gesetzt, je nachdem, ob der Test erfolgreich war oder fehlschlug. Dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test-Dashboard-Seite](https://app.saucelabs.com/dashboard/tests) zurückkehren, sollten Sie sehen, dass Ihr neuer Job nun die aktualisierten Daten daran angehängt hat:

![Aktualisierte Job-Infos in Sauce Labs](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie nicht einen Dienst wie Sauce Labs oder BrowserStack nutzen möchten, können Sie jederzeit Ihren eigenen Remotetestserver einrichten. Schauen wir uns an, wie man das macht.

1. Der Selenium-Remote-Server erfordert Java zum Ausführen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloadseite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen ist.
2. Laden Sie anschließend die neueste [Selenium Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dies fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer (d.h. keine Beta) und wählen Sie aus der Liste eine Datei, die mit „selenium-server-standalone“ beginnt. Wenn dies heruntergeladen wurde, legen Sie es an einem sinnvollen Ort ab, z.B. in Ihrem Home-Verzeichnis. Falls Sie den Standort nicht bereits zu Ihrem `PATH` hinzugefügt haben, tun Sie das jetzt (siehe [Einrichtung von Selenium in Node](#einrichtung_von_selenium_in_node)-Abschnitt).
3. Führen Sie den Standalone-Server aus, indem Sie das folgende in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), sodass er genau mit der Datei übereinstimmt, die Sie haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen – versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie bekommen.

Jetzt, wo wir den Server laufen haben, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in das Projektverzeichnis.
2. Aktualisieren Sie die Codezeile (die mit `const driver = ...` beginnt) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus, und Sie sollten sehen, dass er wie erwartet ausgeführt wird; diesmal führen Sie ihn jedoch auf dem Standalone-Server aus:

   ```bash
   node google_test_remote.js
   ```

Das ist also ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten und dann Ihre Skripte damit verbinden, indem Sie die URL verwenden, die Sie dafür freigeben möchten.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs in {{Glossary("continuous_integration", "Continuous Integration")}} (CI) Tools zu integrieren — das ist nützlich, da Sie Ihre Tests über ein CI-Tool ausführen können und neue Änderungen nur dann in Ihr Code-Repository übertragen, wenn die Tests bestanden werden.

Es liegt außerhalb des Gültigkeitsbereichs, dieses Thema detailliert in diesem Artikel zu behandeln, aber wir schlagen vor, mit Travis CI zu beginnen — das ist wahrscheinlich das am einfachsten zu startende CI-Tool und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Zum Einstieg siehe zum Beispiel:

- [Travis CI für absolute Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codeloser Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genügend Einsichten in das Schreiben und Ausführen automatisierter Tests geliefert haben, sodass Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn_web_development/Extensions/Testing/Automated_testing", "Learn_web_development/Extensions/Testing")}}
