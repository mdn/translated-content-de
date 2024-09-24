---
title: Einrichten Ihres eigenen Testautomatisierungsumgebung
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

In diesem Artikel lernen Sie, wie Sie Ihre eigene Automatisierungsumgebung mit Selenium/WebDriver und eine Testbibliothek wie selenium-webdriver für Node installieren und Ihre eigenen Tests ausführen können. Außerdem wird gezeigt, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools integrieren können, wie sie im vorherigen Artikel besprochen wurden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Vorstellung von den übergeordneten
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Prinzipien des Cross-Browser-Testing</a> und
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">automatisierten Testen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests mit dieser ausführt, sowie wie man diese mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Tool zur Browserautomatisierung. Es gibt andere Methoden, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Aufrufe an einen Browser sendet, um ihn zu automatisieren. Es führt Aktionen aus wie "öffne diese Webseite", "bewege über dieses Element auf der Seite", "klicke auf diesen Link", "prüfe, ob der Link diese URL öffnet" usw. Dies ist ideal für das Ausführen automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt davon ab, welche Programmierungsumgebung Sie verwenden möchten, um Ihre Tests zu schreiben und auszuführen. Die meisten gängigen Umgebungen haben ein Paket oder ein Framework, das WebDriver und die benötigten Bindungen installiert, um über diese Sprache mit WebDriver zu kommunizieren, z. B. Java, C#, Ruby, Python, JavaScript (Node), usw. Weitere Details zu den verschiedenen Selenium-Setups in unterschiedlichen Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Verschiedene Browser erfordern unterschiedliche Treiber, damit WebDriver mit ihnen kommunizieren und sie steuern kann. Weitere Informationen darüber, wo Sie Browser-Treiber erhalten können, finden Sie unter [Unterstützte Plattformen von Selenium](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach einzurichten ist und eine vertrautere Umgebung für Frontend-Entwickler darstellt.

> [!NOTE]
> Wenn Sie wissen möchten, wie man WebDriver mit anderen serverseitigen Umgebungen verwendet, schauen Sie sich die [Unterstützten Plattformen von Selenium](https://www.selenium.dev/downloads/) für nützliche Links an.

### Einrichten von Selenium in Node

1. Erstellen Sie zunächst ein neues npm-Projekt, wie im letzten Kapitel unter [Node und npm einrichten](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#setting_up_node_and_npm) besprochen. Nennen Sie es etwas anderes, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das uns die Arbeit mit Selenium innerhalb von Node ermöglicht. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium auswählen, da die Dokumentation relativ aktuell zu sein scheint und es gut gewartet wird. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) ebenfalls gute Wahlmöglichkeiten. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektordner befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist immer noch eine gute Idee, diese Schritte zu befolgen, auch wenn Sie selenium-webdriver zuvor installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Laden Sie als nächstes die relevanten Treiber herunter, um WebDriver die Kontrolle über die Browser, die Sie testen möchten, zu ermöglichen. Details, wo Sie diese erhalten können, finden Sie auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt.) Offensichtlich sind einige der Browser betriebssystemspezifisch, aber wir werden uns auf Firefox und Chrome konzentrieren, da sie auf allen gängigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://developer.chrome.com/docs/chromedriver/downloads) Treiber herunter.
2. Entpacken Sie sie an einem Ort, der leicht zu navigieren ist, z. B. im Stammverzeichnis Ihres Benutzerverzeichnisses.
3. Fügen Sie den Speicherort der `chromedriver`- und `geckodriver`-Treiber zu Ihrer System-`PATH`-Variable hinzu. Dies sollte ein absoluter Pfad vom Stamm Ihres Festplattenverzeichnisses zum Verzeichnis, das die Treiber enthält, sein. Wenn wir beispielsweise einen macOS-Computer verwenden würden, unser Benutzername 'bob' wäre und wir unsere Treiber im Stamm unseres Benutzerverzeichnisses platziert hätten, wäre der Pfad `/Users/bob`.

> [!NOTE]
> Noch einmal zur Wiederholung, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zum Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und den meisten Linux-Systemen festzulegen:

1. Wenn Sie nicht bereits die `bash`-Shell verwenden (zum Beispiel auf macOS-Systemen, wo die Standard-Shell `zsh` ist, nicht `bash`), wechseln Sie zur `bash`-Shell:

   ```bash
   exec bash
   ```

2. Öffnen Sie Ihre `.bash_profile` (oder `.bashrc`) Datei (wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen lassen, siehe [Versteckte Dateien in macOS anzeigen/ausblenden](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
3. Fügen Sie das Folgende am Ende Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend ihrer tatsächlichen Maschine):

   ```bash
   # WebDriver-Browser-Treiber zu PATH hinzufügen

   export PATH=$PATH:/Users/bob
   ```

4. Speichern und schließen Sie diese Datei, starten Sie dann Ihr Terminal/Eingabeaufforderung neu, um Ihre Bash-Konfiguration erneut anzuwenden.
5. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variablen sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

6. Es sollte im Terminal ausgegeben werden.

Um Ihre `PATH`-Variable auf Windows festzulegen, folgen Sie den Anweisungen unter [Wie füge ich einen neuen Ordner zu meinem Systempfad hinzu?](https://www.itprotoday.com/)

OK, versuchen wir einen schnellen Test, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis namens `google_test.js`:
2. Geben Sie ihr den folgenden Inhalt und speichern Sie ihn:

   ```js
   const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

   (async function example() {
     const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
     try {
       await driver.get("https://www.google.com/ncr");
       await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
       await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
     } finally {
       await driver.sleep(2000); // Lange genug warten, um die Suchseite zu sehen!
       await driver.quit();
     }
   })();
   ```

   > [!NOTE]
   > Diese Funktion ist eine {{glossary("IIFE")}} (Immediately Invoked Function Expression).

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie folgenden Befehl ein:

   ```bash
   node google_test
   ```

Sie sollten sehen, dass eine Instanz von Firefox automatisch geöffnet wird! Google sollte automatisch in einem Tab geladen werden, "webdriver" sollte in das Suchfeld eingegeben werden und die Suchschaltfläche wird geklickt. WebDriver wartet dann 1 Sekunde; der Dokumentname wird dann abgerufen, und wenn es "webdriver - Google Search" ist, wird eine Nachricht angezeigt, dass der Test bestanden ist.
Wir warten dann vier Sekunden, danach wird WebDriver die Firefox-Instanz schließen und anhalten.

## Testing in multiple browsers at once

Es spricht auch nichts dagegen, den Test gleichzeitig auf mehreren Browsern auszuführen. Lassen Sie uns das ausprobieren!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis namens `google_test_multiple.js`. Sie können die Referenzen zu einigen der anderen hinzugefügten Browser gerne ändern, sie entfernen usw., abhängig von den Browsern, die zu Testzwecken auf Ihrem Betriebssystem verfügbar sind. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug auf den zu verwendenden String in der `.forBrowser()` Methode für andere Browser, konsultieren Sie die [Browser-Enum](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser) Referenzseite.
2. Geben Sie ihr den folgenden Inhalt und speichern Sie ihn:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie folgenden Befehl ein:

   ```bash
   node google_test_multiple
   ```

4. Wenn Sie einen Mac verwenden und Safari testen möchten, erhalten Sie möglicherweise eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver." Wenn dies der Fall ist, befolgen Sie die gegebene Anweisung und versuchen Sie es erneut.

Hier haben wir den Test wie zuvor durchgeführt, außer dass wir ihn diesmal in eine Funktion `searchTest()` eingebettet haben. Wir haben neue Browser-Instanzen für mehrere Browser erstellt und dann jede an die Funktion übergeben, sodass der Test auf allen drei Browsern ausgeführt wird!

Macht Spaß, oder? Lassen Sie uns fortfahren und die Grundlagen der WebDriver-Syntax im Detail betrachten.

## WebDriver-Syntax-Crashkurs

Lassen Sie uns einige wichtige Funktionen der WebDriver-Syntax betrachten. Für vollständige Details sollten Sie die [selenium-webdriver JavaScript API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine detaillierte Referenz und die [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/)-Dokumentation des Hauptdokuments konsultieren, die mehrere Beispiele enthält, die in verschiedenen Sprachen geschrieben sind.

### Starten eines neuen Tests

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einfügen, indem Sie den Konstruktor `Builder` und die Schnittstelle `Browser` importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Sie verwenden den `Builder()`-Konstruktor, um eine neue Instanz eines Treibers zu erstellen, und verweben die Methode `forBrowser()`, um den Browser zu spezifizieren, den Sie mit diesem Builder testen möchten.
Die Methode `build()` wird am Ende verbunden, um tatsächlich die Treiberinstanz zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für Browser festzulegen, die getestet werden sollen, zum Beispiel können Sie eine spezifische Version und ein Betriebssystem in der `forBrowser()` Methode festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "46", "MAC").build();
```

Sie könnten diese Optionen auch über eine Umgebungsvariable festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

Lassen Sie uns einen neuen Test erstellen, um diesen Code beim Sprechen darüber zu erkunden. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

### Das Dokument abrufen, das Sie testen möchten

Um die Seite zu laden, die Sie tatsächlich testen möchten, verwenden Sie die `get()`-Methode der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den Funktionen in diesem Abschnitt und den folgenden darunter.

Sie können jede URL verwenden, um auf Ihre Ressource zu verweisen, einschließlich einer `file://` URL, um ein lokales Dokument zu testen:

```js
driver.get(
  "file:///Users/chrismills/git/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html",
);
```

oder

```js
driver.get("http://localhost:8888/fake-div-buttons.html");
```

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist – wenn Sie beginnen, einen Remote-Server zur Ausführung Ihrer Tests zu verwenden (siehe später), wird Ihr Code brechen, wenn Sie versuchen, lokale Pfade zu verwenden.

Aktualisieren Sie jetzt Ihre `example()` Funktion wie folgt:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  driver.get(
    "https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html",
  );
})();
```

### Interaktionen mit dem Dokument

Jetzt haben wir ein Dokument zum Testen, und wir müssen auf irgendeine Weise damit interagieren, was normalerweise bedeutet, zuerst ein spezifisches Element zu testen. Sie können [UI-Elemente auf viele Möglichkeiten wählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementname usw. Die tatsächliche Auswahl erfolgt durch die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element nach ID zu wählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Ein sehr nützlicher Weg, ein Element zu finden, ist mittels CSS — die `By.css()` Methode ermöglicht es, ein Element mit einem CSS-Selektor auszuwählen.

Aktualisieren Sie jetzt Ihre `example()` Funktion wie folgt:

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

Es gibt viele Möglichkeiten, mit Ihren Webdokumenten und den darauf befindlichen Elementen zu interagieren. Nützliche Beispiele finden Sie ab [Texteigenschaften abrufen](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumentationen.

Wenn wir den Text innerhalb unseres Buttons abrufen möchten, könnten wir dies so tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies nun am Ende der `example()` Funktion wie gezeigt hinzu:

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

Sie sollten sehen, dass der Text des Buttons im Konsolenbericht angezeigt wird.

Lassen Sie uns etwas nützlicheres tun. Ersetzen Sie den vorherigen Codeeintrag durch diese Zeile `button.click();` wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt, und das `alert()`-Popup sollte erscheinen. Zumindest wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()` Funktion wie folgt und versuchen Sie es erneut:

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

Versuchen wir als nächstes, etwas Text in eines der Formularelemente einzugeben. Aktualisieren Sie die `example()` Funktion wie folgt, und versuchen Sie, Ihren Test erneut auszuführen:

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

Sie können Tastendrucke einreichen, die nicht durch normale Zeichen dargestellt werden können, indem Sie Eigenschaften des `Key`-Objekts verwenden. Zum Beispiel haben wir diesen Konstrukt verwendet, um aus dem Formulareingabefeld herauszutabben, bevor wir es übermitteln:

```js
driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(Key.TAB);
});
```

### Warten auf das Abschließen von Prozessen

Es gibt Zeiten, in denen Sie möchten, dass WebDriver wartet, bis ein Prozess abgeschlossen ist, bevor er fortfährt. Wenn Sie zum Beispiel eine neue Seite laden, möchten Sie warten, bis das DOM der Seite das Laden abgeschlossen hat, bevor Sie versuchen, mit einem seiner Elemente zu interagieren, da der Test sonst wahrscheinlich fehlschlagen wird.

In unserem `google_test.js` Test haben wir zum Beispiel diesen Block eingebaut:

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

Die Methode `sleep()` akzeptiert einen Wert, der angibt, wie lange gewartet werden soll, in Millisekunden — die Methode gibt ein Versprechen zurück, das am Ende dieser Zeit nachkommt, und der Code innerhalb von `then()` wird dann ausgeführt. In diesem Fall holen wir den Titel der aktuellen Seite mit der Methode `getTitle()`, und geben dann eine bestanden oder fehlgeschlagen Nachricht zurück, je nachdem, was sein Wert ist.

Wir könnten unserer `quick_test.js`-Datei auch eine `sleep()` Methode hinzufügen — versuchen Sie, Ihre `example()` Funktion wie folgt zu aktualisieren:

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
    await driver.sleep(4000); // Lange genug warten, um die Suchseite zu sehen!
    driver.quit();
  }
})();
```

WebDriver wartet jetzt 2 Sekunden, bevor es das Formularfeld ausfüllt. Wir testen dann, ob sein Wert ausgefüllt wurde (d. h. nicht leer ist), indem wir `getAttribute()` verwenden, um seinen `value` Attributwert abzurufen, und eine Nachricht in die Konsole drucken, wenn es nicht leer ist.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung für eine bestimmte Zeit immer wieder testet, und dann den Code weiter ausführt. Dies nutzt auch die [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die zusammen mit `wait()` verwendet werden können.

### Treiber nach Verwendung herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle geöffneten Treiberinstanzen herunterfahren, um sicherzustellen, dass Sie nicht mit vielen nicht kontrollierten geöffneten Browser-Instanzen auf Ihrem Computer enden! Dies geschieht mit der Methode `quit()`. Rufen Sie dies auf Ihre Treiberinstanz auf, wenn Sie damit fertig sind. Fügen Sie diese Zeile unten in Ihrem `quick_test.js`-Test hinzu:

```js
driver.quit();
```

Beim Ausführen sollten Sie jetzt sehen, dass der Test ausgeführt und die Browserinstanz nach dem Abschließen des Tests wieder heruntergefahren wird. Dies ist nützlich, um Ihren Computer nicht mit zahlreichen Browserinstanzen zu verstopfen, insbesondere wenn Sie so viele haben, dass es den Computer verlangsamt.

## Beste Praktiken für Tests

Es wurde viel über die besten Praktiken für das Schreiben von Tests geschrieben. Gute Hintergrundinformationen finden Sie bei [Test Practices](https://www.selenium.dev/documentation/test_practices/). Im Allgemeinen sollten Sie sicherstellen, dass Ihre Tests:

1. Gute Lokalisierungsstrategien verwenden: Wenn Sie [die Dokumentation interaktiv verwenden](#interaktionen_mit_dem_dokument), stellen Sie sicher, dass Sie Lokalisatoren und Seitenobjekte verwenden, die sich nicht ändern — wenn Sie ein testbares Element haben, auf das Sie einen Test durchführen möchten, stellen Sie sicher, dass es einen stabilen ID oder Position auf der Seite hat, der über einen CSS-Selektor ausgewählt werden kann und nicht einfach mit der nächsten Site-Iteration geändert wird. Sie möchten Ihre Tests so wenig brüchig wie möglich machen, d. h. sie brechen nicht einfach, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, damit es leicht nachzuverfolgen ist, welche Testdatei welches Kriterium testet. Der obige `google_test.js` Test ist beispielsweise ziemlich gut, da er nur eine einzelne Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist zu verstehen, was er tut, wenn wir mehr Google-Tests hinzufügen. Vielleicht würde `results_page_title_set_correctly.js` etwas besser klingen?
3. Autonome Tests schreiben: Jeder Test sollte für sich alleine arbeiten, und nicht davon abhängen, dass andere Tests funktionieren.

Darüber hinaus sollten wir Testresultate/Berichterstattung erwähnen — wir haben Ergebnisse in unseren obigen Beispielen mit einfachen `console.log()` Statements berichtet, aber dies alles in JavaScript gemacht, sodass Sie jedes beliebige Testausführungs- und Berichtssystem nutzen können, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Werkzeug.

1. Machen Sie beispielsweise eine lokale Kopie unseres [`mocha_test.js`](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis. Legen Sie es in einem Unterordner namens `test` ab. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle Schritte auszuführen, die in unserem Test erforderlich sind - die von WebDriver verwendeten versprechensbasierten Methoden müssen sich auflösen, damit sie ordnungsgemäß funktionieren.
2. Installieren Sie das Mocha-Testwerkzeug, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test` Verzeichnis ablegen) jetzt mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts` Flag einschließen, damit Ihre Tests nicht wegen Mocha's willkürlichen Zeitlimits (welches 3 Sekunden beträgt) fehlschlagen.

> **Note:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Test-/Assertionstools-Kombinationen einrichtet.

## Ausführen von Remote-Tests

Es stellt sich heraus, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als lokal. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit ein paar weiteren festgelegten Funktionen, einschließlich den Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und den Benutzeranmeldedaten, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

### LambdaTest

Selenium-Tests auf LambdaTest remote laufen zu lassen, ist sehr einfach. Der benötigte Code sollte dem unten gezeigten Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `lambdatest_google_test.js`
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   const { By, Builder } = require("selenium-webdriver");

   // username: Benutzername kann im Automatisierungs-Dashboard gefunden werden
   const USERNAME = "{username}";

   // AccessKey: AccessKey kann im Automatisierungs-Dashboard oder im Profilbereich generiert werden
   const KEY = "{accessKey}";

   // gridUrl: gridUrl kann im Automatisierungs-Dashboard gefunden werden
   const GRID_HOST = "hub.lambdatest.com/wd/hub";

   function searchTextOnGoogle() {
     // Eingabefähigkeiten einrichten
     const capabilities = {
       platform: "windows 10",
       browserName: "chrome",
       version: "67.0",
       resolution: "1280x800",
       network: true,
       visual: true,
       console: true,
       video: true,
       name: "Test 1", // Testname
       build: "NodeJS build", // Name des Builds
     };

     // URL: https://{username}:{accessToken}@hub.lambdatest.com/wd/hub
     const gridUrl = `https://${USERNAME}:${KEY}@${GRID_HOST}`;

     // Selenium-Treiberobjekt einrichten und erstellen
     const driver = new Builder()
       .usingServer(gridUrl)
       .withCapabilities(capabilities)
       .build();

     // Zu einer URL navigieren, nach einem Text suchen und den Titel der Seite abrufen
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

3. Besuchen Sie Ihr [LambdaTest Automatisierungs-Dashboard](https://www.lambdatest.com/selenium-automation), um Ihren LambdaTest-Benutzernamen und Access Key durch Klicken auf das **Schlüsselsymbol** oben rechts zu beziehen (siehe _Benutzername und Zugriffsschlüssel_). Ersetzen Sie die Platzhalter `{username}` und `{accessKey}` im Code durch Ihren tatsächlichen Benutzernamen und Access Key Werte (und stellen Sie sicher, dass diese sicher bleiben).
4. Führen Sie den folgenden Befehl in Ihrem Terminal aus, um Ihren Test auszuführen:

   ```bash
   node lambdatest_google_test
   ```

   Der Test wird an LambdaTest gesendet und die Ausgabe Ihres Tests wird auf Ihrer LambdaTest-Konsole reflektiert.
   Wenn Sie diese Ergebnisse für Berichterstattungszwecke von der LambdaTest-Plattform extrahieren möchten, können Sie dies mithilfe der [LambdaTest RESTful API](https://www.lambdatest.com/blog/lambdatest-launches-api-for-selenium-automation/) tun.

5. Nun, wenn Sie zu Ihrem [LambdaTest-Automatisierungs-Dashboard](https://accounts.lambdatest.com/dashboard) gehen, werden Sie Ihren Test aufgeführt sehen; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   Sie werden auch einen Status von **bestanden** oder **fehlgeschlagen** statt **abgeschlossen** sehen, aufgrund der `if`- oder `else`-Codeblöcke.

   [![LambdaTest Automatisierungs-Dashboard](automation-logs-1.jpg)](https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Automation-logs-1.jpg)
   Sie können Netzwerk-, Befehls-, Ausnahme- und Selenium-Protokolle für jeden Test innerhalb Ihres Testbuilds abrufen. Sie werden auch eine Videoaufnahme Ihrer Selenium-Skript-Ausführung finden.

> [!NOTE]
> Die _HELP_ Schaltfläche auf dem LambdaTest Automatisierungs-Dashboard bietet Ihnen eine Fülle an Informationen, die Ihnen beim Einstieg in die LambdaTest-Automatisierung helfen. Sie können auch unsere Dokumentation über das [Ausführen des ersten Selenium Skripts in Node JS](https://www.lambdatest.com/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/) folgen.

> [!NOTE]
> Wenn Sie die capabilities-Objekte für Ihre Tests nicht von Hand schreiben möchten, können Sie sie mit dem [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) generieren.

### BrowserStack

Selenium-Tests auf BrowserStack remote laufen zu lassen, ist einfach. Der benötigte Code sollte dem unten gezeigten Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `bstack_google_test.js`.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const request = require("request");

   // Eingabefähigkeiten
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
       await driver.sleep(4000); // Lange genug warten, um die Suchseite zu sehen!
       await driver.quit();
     }
   })();
   ```

3. Von Ihrem [BrowserStack-Konto - Zusammenfassung](https://www.browserstack.com/accounts/profile/details) erhalten Sie Ihren Benutzernamen und Zugriffsschlüssel (siehe _Username und Access Keys_). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüsselwerte (und stellen Sie sicher, dass sie sicher bleiben).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung der Integration eines gewissen Ergebnisberichtmechanismus!

5. Wenn Sie nun zur [BrowserStack-Automatisierungs-Dashboard](https://www.browserstack.com/automate) Seite zurückkehren, sehen Sie Ihren Test aufgelistet:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

Wenn Sie auf den Link für Ihren Test klicken, gelangen Sie zu einer neuen Seite, auf der Sie eine Videoaufnahme des Tests und mehrere detaillierte Protokolle mit Informationen dazu sehen können.

> [!NOTE]
> Die _Resources_ Menüoption auf dem BrowserStack Automatisierungs-Dashboard enthält eine Fülle an nützlichen Informationen zur Verwendung von automatisierten Tests. Siehe [Node JS Dokumentation für automatische Tests in Node JS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für die Node-spezifischen Informationen. Erkunden Sie die Dokumentationen, um herauszufinden, welche nützlichen Dinge BrowserStack leisten kann.

> [!NOTE]
> Wenn Sie die capabilities-Objekte für Ihre Tests nicht von Hand schreiben möchten, können Sie sie mit den in den Dokumenten eingebetteten Generatoren erzeugen. Siehe [Führen Sie Ihren ersten Test aus](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs#run-your-first-test).

#### BrowserStack Testdetails programmgesteuert ergänzen

Sie können die BrowserStack REST API und einige andere Fähigkeiten verwenden, um Ihren Test mit weiteren Details zu versehen, z. B. ob er bestanden wurde, warum er bestanden wurde, zu welchem Projekt der Test gehört, usw. BrowserStack weiß diese Details standardmäßig nicht!

Lassen Sie uns unser `bstack_google_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das request-Modul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```js
   npm install request
   ```

2. Dann importieren Sie das node request-Modul, damit wir es verwenden können, um Anfragen an die REST API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihrem Code hinzu:

   ```js
   const request = require("request");
   ```

3. Aktualisieren Sie jetzt unser `capabilities`-Objekt, um einen Projektnamen einzufügen — fügen Sie die folgende Zeile vor die schließende geschweifte Klammer ein, wobei Sie das Komma am Ende der vorherigen Zeile hinzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack Automatisierungs-Dashboard zu organisieren):

   ```js
   'project' : 'Google test 2'
   ```

4. Als Nächstes benötigen wir die `sessionId` der aktuellen Sitzung, damit wir wissen, wohin wir die Anfrage senden müssen (die ID ist in der Anforderungs-URL enthalten, wie Sie später sehen werden). Fügen Sie die folgenden Zeilen direkt unter dem Block hinzu, der das `driver`-Objekt erstellt (`let driver …`) :

   ```js
   let sessionId;

   driver.session_.then((sessionData) => {
     sessionId = sessionData.id_;
   });
   ```

5. Schließlich aktualisieren Sie den Block `driver.sleep(2000)` unten im Code, um REST API-Aufrufe hinzuzufügen (ersetzen Sie wiederum die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCOUNT-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüsselwerte):

   ```js
   driver.sleep(2000).then(() => {
     driver.getTitle().then((title) => {
       if (title === "webdriver - Google Search") {
         console.log("Test passed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCOUNT-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
           method: "PUT",
           form: {
             status: "passed",
             reason: "Google results showed correct title",
           },
         });
       } else {
         console.log("Test failed");
         request({
           uri: `https://YOUR-USER-NAME:YOUR-ACCOUNT-KEY@www.browserstack.com/automate/sessions/${sessionId}.json`,
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

Diese sind ziemlich intuitiv — sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem bestandenen oder fehlgeschlagenen Status zu aktualisieren, und einem Grund für das Ergebnis.

Wenn Sie jetzt zurück zu Ihrer [BrowserStack Automatisierungs-Dashboard](https://live.browserstack.com/dashboard) Seite gehen, sollten Sie Ihre Testsitzung wie zuvor verfügbar sehen, jedoch mit den angehängten aktualisierten Daten:

![BrowserStack Custom Results](bstack_custom_results.png)

### Sauce Labs

Selenium-Tests auf Sauce Labs remote laufen zu lassen, ist ebenfalls sehr einfach, und BrowserStack ähnelt es, obwohl einige syntaktische Unterschiede bestehen. Der benötigte Code sollte dem unten gezeigten Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `sauce_google_test.js`.
2. Geben Sie ihr den folgenden Inhalt:

   ```js
   const { Builder, By, Key } = require("selenium-webdriver");
   const username = "YOUR-USER-NAME";
   const accessKey = "YOUR-ACCOUNT-KEY";

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

3. Von Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings) holen Sie sich Ihren Benutzernamen und Zugriffsschlüssel. Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCOUNT-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüsselwerte (und stellen Sie sicher, dass diese sicher bleiben).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet, und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung der Integration eines gewissen Ergebnisberichtmechanismus!

5. Wenn Sie nun zu Ihrer [Sauce Labs Automatisiertes Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere solche Daten sehen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zum Generieren von Capability-Objekten, die an Ihre Treiberinstanzen übergeben werden, basierend darauf, auf welchem Browser/Betriebssystem Sie testen möchten.

> [!NOTE]
> Für weitere nützliche Details zum Testen mit Sauce Labs und Selenium, schauen Sie sich die [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) an.

#### Sauce Labs Testdetails programmgesteuert ergänzen

Sie können die Sauce Labs API verwenden, um Ihren Test mit weiteren Details zu versehen, wie z. B. ob er bestanden wurde, den Namen des Tests etc. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Die Node Sauce Labs Wrapper mit dem folgenden Befehl installieren (wenn Sie noch nicht dafür in diesem Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Saucelabs importieren — Fügen Sie dies oben in Ihrer `sauce_google_test.js` Datei hinzu, genau unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Erstellen Sie eine neue Instanz von SauceLabs, indem Sie direkt darunter folgendes hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCOUNT-KEY",
   });
   ```

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCOUNT-KEY` im Code durch Ihren tatsächlichen Benutzernamen und Zugriffsschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket recht verwirrend `password`, nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, möchten Sie möglicherweise ein paar Hilfsvariablen erstellen, um diese darin zu speichern.

4. Unterhalb des Blocks, wo Sie die `driver` Variable definieren (direkt unter der `build()` Zeile), fügen Sie den folgenden Block hinzu — dies erhält die richtige Treiber-`sessionID`, die wir benötigen, um Daten an den Auftrag zu schreiben (Sie sehen sie im nächsten Codeblock in Aktion):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Schließlich ersetzen Sie den `driver.sleep(2000)` Block unten im Code durch folgendes:

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

Wenn Sie jetzt zu Ihrer [Sauce Labs Automatisiertes Test-Dashboard](https://app.saucelabs.com/dashboard/tests) Seite zurückgehen, sollten Sie sehen, dass Ihr neuer Job jetzt die aktualisierten Daten angehängt hat:

![Sauce Labs Überarbeitete Auftragsinformation](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie immer Ihren eigenen Remote-Testserver einrichten. Lassen Sie uns sehen, wie wir dies tun können.

1. Der Selenium-Remote-Server benötigt Java, um zu laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloadseite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn der Download abgeschlossen ist.
2. Laden Sie als Nächstes den neuesten [Selenium-Standalone-Server](https://selenium-release.storage.googleapis.com/index.html) herunter - dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Versionsnummer (d. h. nicht eine Beta), und aus der Liste wählen Sie eine Datei die mit "selenium-server-standalone" beginnt. Wenn dieser heruntergeladen wird, platzieren Sie ihn an einem sinnvollen Ort, wie in Ihrem Benutzerverzeichnis. Wenn Sie die Adresse noch nicht zu Ihrem `PATH` hinzugefügt haben, machen Sie dies jetzt (siehe den [Selenium in Node einrichten](#einrichten_von_selenium_in_node) Abschnitt).
3. Starten Sie den eigenständigen Server, indem Sie das Folgende in einem Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar` Dateinamen), sodass es genau zu der Datei passt, die Sie haben.

4. Der Server läuft auf `http://localhost:4444/wd/hub` — versuchen Sie jetzt dorthin zu gehen, um zu sehen, was Sie erhalten.

Da wir den Server jetzt ausführen, lassen Sie uns einen Demo-Test erstellen, der auf dem Remote-Selenium-Server laufen wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js` Datei und benennen Sie sie in `google_test_remote.js` um; legen Sie sie in Ihr Projektverzeichnis.
2. Aktualisieren Sie die Zeile Code (die mit `const driver = …` beginnt) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten sehen, dass er wie erwartet ausgeführt wird; diesmal jedoch werden Sie ihn auf dem eigenständigen Server ausführen:

   ```bash
   node google_test_remote.js
   ```

So ist das ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den relevanten Browser-Treibern einrichten, und dann Ihre Skripts mit dem URL verbinden, die Sie auswählen, um es dort herauszustellen.

## Integration von Selenium in CI-Tools

Als weiteren Punkt können Sie Selenium und verwandte Tools wie LambdaTest und Sauce Labs auch mit Continuous-Integration (CI)-Tools integrieren — das ist nützlich, da Sie Ihre Tests über ein CI-Tool ausführen können und nur neue Änderungen an Ihr Code-Repository übergeben, wenn die Tests erfolgreich verlaufen.

Es liegt außerhalb des Rah mens dieses Artikels, sich dieses Themas im Detail anzunehmen, aber wir empfehlen Ihnen, mit Travis CI zu beginnen — dies ist wahrscheinlich das einfachste CI-Tool, mit dem man beginnen kann, und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um zu beginnen, sehen Sie zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Verwendung von LambdaTest mit Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Verwendung von LambdaTest mit CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Verwendung von LambdaTest mit Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Verwendung von Sauce Labs mit Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie einen kontinuierlichen Test mit **codefreier Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genügend Einblick in das Schreiben und Ausführen automatisierter Tests gegeben haben, damit Sie mit dem Schreiben Ihrer eigenen automatisierten Tests beginnen können.

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
