---
title: Einrichten Ihrer eigenen Testautomatisierungsumgebung
slug: Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}

In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node installieren und Ihre eigenen Tests durchführen können. Wir werden auch untersuchen, wie Sie Ihre lokale Testumgebung mit kommerziellen Tools wie denen, die im vorherigen Artikel besprochen wurden, integrieren können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a> Sprachen; eine Vorstellung von den
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">grundlegenden Prinzipien des Cross-Browser-Testings</a> und
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing">automatisierten Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu zeigen, wie man eine Selenium-Testumgebung lokal einrichtet und Tests damit durchführt, sowie wie man sie mit Tools wie LambdaTest, Sauce Labs und BrowserStack integriert.
      </td>
    </tr>
  </tbody>
</table>

## Selenium

[Selenium](https://www.selenium.dev/) ist das beliebteste Browser-Automatisierungstool. Es gibt andere Möglichkeiten, aber die beste Möglichkeit, Selenium zu verwenden, ist über WebDriver, eine leistungsstarke API, die auf Selenium aufbaut und Anrufe an einen Browser ausführt, um ihn zu automatisieren. Sie führt Aktionen aus wie "öffne diese Webseite", "bewege dich über dieses Element auf der Seite", "klicke diesen Link", "überprüfe, ob der Link diese URL öffnet", usw. Dies ist ideal für die Durchführung automatisierter Tests.

Wie Sie WebDriver installieren und verwenden, hängt von der Programmierumgebung ab, die Sie zum Schreiben und Ausführen Ihrer Tests verwenden möchten. In den beliebtesten Umgebungen steht ein Paket oder Framework zur Verfügung, das WebDriver und die benötigten Bindungen zum Kommunizieren mit WebDriver unter Verwendung dieser Sprache installiert, z.B. Java, C#, Ruby, Python, JavaScript (Node), usw. Weitere Details zu Selenium-Setups für verschiedene Sprachen finden Sie unter [Einrichten eines Selenium-WebDriver-Projekts](https://www.selenium.dev/documentation/webdriver/getting_started/).

Unterschiedliche Browser erfordern unterschiedliche Treiber, um es dem WebDriver zu ermöglichen, mit ihnen zu kommunizieren und sie zu steuern. Weitere Informationen dazu, wo Sie Browser-Treiber erhalten, finden Sie unter [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/).

Wir werden das Schreiben und Ausführen von Selenium-Tests mit Node.js behandeln, da es schnell und einfach zu starten ist und eine vertrautere Umgebung für Front-End-Entwickler darstellt.

> [!NOTE]
> Wenn Sie herausfinden möchten, wie Sie WebDriver mit anderen serverseitigen Umgebungen verwenden, schauen Sie sich auch [Von Selenium unterstützte Plattformen](https://www.selenium.dev/downloads/) an, um nützliche Links zu erhalten.

### Einrichten von Selenium in Node

1. Starten Sie zunächst ein neues npm-Projekt, wie im letzten Kapitel unter [Node und npm einrichten](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing#setting_up_node_and_npm) beschrieben. Nennen Sie es etwas anders, wie `selenium-test`.
2. Als nächstes müssen wir ein Framework installieren, das uns erlaubt, mit Selenium innerhalb von Node zu arbeiten. Wir werden das offizielle [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) von Selenium wählen, da die Dokumentation recht aktuell zu sein scheint und es gut gepflegt wird. Wenn Sie andere Optionen wünschen, sind [webdriver.io](https://webdriver.io/) und [nightwatch.js](https://nightwatchjs.org/) auch gute Alternativen. Um selenium-webdriver zu installieren, führen Sie den folgenden Befehl aus und stellen Sie sicher, dass Sie sich in Ihrem Projektverzeichnis befinden:

   ```bash
   npm install selenium-webdriver
   ```

> [!NOTE]
> Es ist dennoch eine gute Idee, diese Schritte zu befolgen, selbst wenn Sie selenium-webdriver bereits installiert und die Browser-Treiber heruntergeladen haben. Sie sollten sicherstellen, dass alles auf dem neuesten Stand ist.

Als nächstes müssen Sie die entsprechenden Treiber herunterladen, um dem WebDriver zu ermöglichen, die Browser zu steuern, die Sie testen möchten. Details dazu, wo Sie diese finden können, finden Sie auf der Seite [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver) (siehe die Tabelle im ersten Abschnitt). Offensichtlich sind einige der Browser betriebssystemspezifisch, wir werden uns jedoch auf Firefox und Chrome beschränken, da sie auf allen wichtigen Betriebssystemen verfügbar sind.

1. Laden Sie die neuesten [GeckoDriver](https://github.com/mozilla/geckodriver/releases/) (für Firefox) und [ChromeDriver](https://developer.chrome.com/docs/chromedriver/downloads) Treiber herunter.
2. Packen Sie diese an einem Ort aus, der leicht zu navigieren ist, wie im Stammverzeichnis Ihres Benutzerordners.
3. Fügen Sie den Speicherort der `chromedriver` und `geckodriver` Treiber zu Ihrer System-`PATH`-Variablen hinzu. Dies sollte ein absoluter Pfad vom Root-Verzeichnis Ihrer Festplatte sein, zum Verzeichnis, das die Treiber enthält. Wenn wir beispielsweise einen Mac verwenden würden, unser Benutzername bob wäre, und wir unsere Treiber im Stammverzeichnis unseres Benutzerordners platziert hätten, dann wäre der Pfad `/Users/bob`.

> [!NOTE]
> Um es noch einmal zu betonen, der Pfad, den Sie zu `PATH` hinzufügen, muss der Pfad zu dem Verzeichnis sein, das die Treiber enthält, nicht die Pfade zu den Treibern selbst! Dies ist ein häufiger Fehler.

Um Ihre `PATH`-Variable auf einem macOS-System und auf den meisten Linux-Systemen einzurichten:

1. Wenn Sie nicht bereits die `bash`-Shell verwenden (zum Beispiel ist die Standard-Shell auf macOS-Systemen nicht `bash`, sondern `zsh`), wechseln Sie zur `bash`-Shell:

   ```bash
   exec bash
   ```

2. Öffnen Sie Ihre `.bash_profile` (oder `.bashrc`) Datei (wenn Sie versteckte Dateien nicht sehen können, müssen Sie diese anzeigen lassen, siehe [Versteckte Dateien in macOS anzeigen/verstecken](https://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/) oder [Versteckte Ordner in Ubuntu anzeigen](https://askubuntu.com/questions/470837/how-to-show-hidden-folders-in-file-manager-nautilus-on-ubuntu)).
3. Fügen Sie das folgende an das Ende Ihrer Datei ein (aktualisieren Sie den Pfad entsprechend, wie er tatsächlich auf Ihrem Rechner ist):

   ```bash
   #Add WebDriver browser drivers to PATH

   export PATH=$PATH:/Users/bob
   ```

4. Speichern und schließen Sie diese Datei und starten Sie Ihr Terminal/Befehlszeilenfenster neu, um Ihre Bash-Konfiguration erneut anzuwenden.
5. Überprüfen Sie, ob Ihre neuen Pfade in der `PATH`-Variable vorhanden sind, indem Sie das Folgende in Ihr Terminal eingeben:

   ```bash
   echo $PATH
   ```

6. Sie sollten es im Terminal ausgegeben sehen.

Um Ihre `PATH`-Variable unter Windows einzurichten, folgen Sie den Anweisungen unter [Wie kann ich einen neuen Ordner zu meinem Systempfad hinzufügen?](https://www.itprotoday.com/)

Okay, lassen Sie uns einen schnellen Test durchführen, um sicherzustellen, dass alles funktioniert.

1. Erstellen Sie eine neue Datei in Ihrem Projektverzeichnis mit dem Namen `google_test.js`:
2. Fügen Sie ihr den folgenden Inhalt hinzu und speichern Sie sie dann:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektordner befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node google_test
   ```

Sie sollten sehen, dass sich eine Instanz von Firefox automatisch öffnet! Google sollte automatisch in einem Tab geladen werden, "webdriver" sollte in das Suchfeld eingegeben werden und die Suchschaltfläche wird geklickt. WebDriver wartet dann eine Sekunde; der Dokumententitel wird dann abgerufen, und wenn er "webdriver - Google Search" ist, wird eine Nachricht zurückgegeben, die behauptet, dass der Test bestanden wurde.
Danach wird vier Sekunden gewartet, und WebDriver schließt dann die Firefox-Instanz und beendet den Prozess.

## Testen in mehreren Browsern gleichzeitig

Es gibt auch nichts, das Sie davon abhält, den Test gleichzeitig auf mehreren Browsern auszuführen. Probieren wir das aus!

1. Erstellen Sie eine weitere neue Datei in Ihrem Projektverzeichnis mit dem Namen `google_test_multiple.js`. Sie können die Referenzen auf einige der anderen Browser, die wir hinzugefügt haben, nach Belieben ändern oder entfernen, abhängig davon, welche Browser auf Ihrem Betriebssystem verfügbar sind. Sie müssen sicherstellen, dass Sie die richtigen Browser-Treiber auf Ihrem System eingerichtet haben. In Bezug darauf, welchen String Sie in der `.forBrowser()`-Methode für andere Browser verwenden müssen, siehe die [Browser-Enum-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/global.html#Browser).
2. Geben Sie ihr den folgenden Inhalt und speichern Sie dann die Datei:

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

3. Stellen Sie im Terminal sicher, dass Sie sich in Ihrem Projektverzeichnis befinden, und geben Sie dann den folgenden Befehl ein:

   ```bash
   node google_test_multiple
   ```

4. Wenn Sie einen Mac verwenden und Safari testen möchten, könnte Ihnen eine Fehlermeldung wie "Could not create a session: You must enable the 'Allow Remote Automation' option in Safari's Develop menu to control Safari via WebDriver" angezeigt werden. Falls dies der Fall ist, befolgen Sie die angegebene Anweisung und versuchen Sie es erneut.

Hier haben wir den Test wie zuvor durchgeführt, jedoch dieses Mal innerhalb einer Funktion, `searchTest()` verpackt. Wir haben neue Browserinstanzen für mehrere Browser erstellt und dann jede an die Funktion weitergegeben, damit der Test auf allen drei Browsern durchgeführt wird!

Spaßig, oder? Gehen wir weiter und schauen uns die Grundlagen der WebDriver-Syntax in etwas mehr Detail an.

## WebDriver-Syntax-Crashkurs

Lassen Sie uns einige der wichtigsten Merkmale der webdriver-Syntax ansehen. Für detailliertere Informationen sollten Sie die [selenium-webdriver JavaScript-API-Referenz](https://www.selenium.dev/selenium/docs/api/javascript/) für eine umfassende Referenz und die Hauptdokumentation von Seleniums [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/) konsultieren, die mehrere Beispiele in verschiedenen Sprachen zum Lernen enthält.

### Einen neuen Test starten

Um einen neuen Test zu starten, müssen Sie das `selenium-webdriver`-Modul einbinden und den `Builder`-Konstruktor und das `Browser`-Interface importieren:

```js
const { Builder, Browser } = require("selenium-webdriver");
```

Mit dem `Builder()`-Konstruktor erstellen Sie eine neue Instanz eines Treibers und hängen die `forBrowser()`-Methode an, um festzulegen, mit welchem Browser Sie mit diesem Builder testen möchten.
Die `build()`-Methode wird am Ende angehängt, um die Treiberinstanz tatsächlich zu erstellen (siehe die [Builder-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/Builder.html) für detaillierte Informationen zu diesen Funktionen).

```js
let driver = new Builder().forBrowser(Browser.FIREFOX).build();
```

Beachten Sie, dass es möglich ist, spezifische Konfigurationsoptionen für zu testende Browser festzulegen, beispielsweise können Sie in der `forBrowser()`-Methode eine spezifische Version und ein Betriebssystem festlegen:

```js
let driver = new Builder().forBrowser(Browser.FIREFOX, "46", "MAC").build();
```

Sie können diese Optionen auch über eine Umgebungsvariable festlegen, zum Beispiel:

```bash
SELENIUM_BROWSER=firefox:46:MAC
```

Erstellen wir einen neuen Test, um diesen Code zu erkunden, während wir darüber sprechen. Erstellen Sie in Ihrem Selenium-Testprojektverzeichnis eine neue Datei namens `quick_test.js` und fügen Sie folgenden Code hinzu:

```js
const { Builder, Browser } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
})();
```

### Das zu testende Dokument abrufen

Um die Seite zu laden, die Sie testen möchten, verwenden Sie die `get()`-Methode der zuvor erstellten Treiberinstanz, zum Beispiel:

```js
driver.get("http://www.google.com");
```

> [!NOTE]
> Siehe die [WebDriver-Klassenreferenz](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html) für Details zu den in diesem Abschnitt und denen darunter beschriebenen Funktionen.

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

Aber es ist besser, einen Remote-Server-Standort zu verwenden, damit der Code flexibler ist — wenn Sie beginnen, einen Remote-Server für Ihre Tests zu verwenden (siehe später), wird Ihr Code fehlschlagen, wenn Sie lokale Pfade verwenden.

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

### Interaktion mit dem Dokument

Nun das wir ein Dokument zum Testen haben, müssen wir irgendwie damit interagieren, was normalerweise bedeutet, zuerst ein bestimmtes Element auszuwählen, um etwas darüber zu testen. Sie können [UI-Elemente auf viele Arten auswählen](https://www.selenium.dev/documentation/webdriver/elements/) in WebDriver, einschließlich nach ID, Klasse, Elementnamen, usw. Die tatsächliche Auswahl erfolgt durch die `findElement()`-Methode, die als Parameter eine Auswahlmethode akzeptiert. Zum Beispiel, um ein Element durch ID auszuwählen:

```js
const element = driver.findElement(By.id("myElementId"));
```

Eine der nützlichsten Methoden, ein Element durch CSS zu finden, ist die `By.css()`-Methode, mit der Sie ein Element mithilfe eines CSS-Selektors auswählen können.

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

Es gibt viele Möglichkeiten, mit Ihren Web-Dokumenten und deren Elementen zu interagieren. Nützliche Beispiele finden Sie unter [Abrufen von Textwerten](https://www.selenium.dev/documentation/webdriver/elements/information/#text-content) in den WebDriver-Dokumenten.

Wenn wir den Text innerhalb unseres Buttons abrufen möchten, könnten wir dies tun:

```js
button.getText().then((text) => {
  console.log(`Button text is '${text}'`);
});
```

Fügen Sie dies jetzt am Ende der `example()`-Funktion hinzu, wie unten gezeigt:

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

Vergewissern Sie sich, dass Sie sich in Ihrem Projektverzeichnis befinden, und versuchen Sie, den Test auszuführen:

```bash
node quick_test.js
```

Sie sollten sehen, dass das Textlabel des Buttons in der Konsole gemeldet wird.

Lassen Sie uns etwas Sinnvolleres tun. Ersetzen Sie den vorherigen Codeeintrag durch diese Zeile `button.click();`, wie unten gezeigt:

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

Versuchen Sie, Ihren Test erneut auszuführen; der Button wird geklickt und das `alert()` Popup sollte erscheinen. Wenigstens wissen wir, dass der Button funktioniert!

Sie können auch mit dem Popup interagieren. Aktualisieren Sie die `example()`-Funktion folgendermaßen und testen Sie es erneut:

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

Versuchen wir als nächstes, etwas Text in eines der Formularelemente einzugeben. Aktualisieren Sie die `example()`-Funktion wie folgt und versuchen Sie erneut, Ihren Test auszuführen:

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

Sie können Tastenanschläge, die nicht durch normale Zeichen darstellbar sind, mit Eigenschaften des `Key`-Objekts übergeben. Zum Beispiel haben wir oben diese Konstruktion verwendet, um aus dem Formulareingabefeld herauszuiden, bevor wir es abgeschickt haben:

```js
driver.sleep(1000).then(() => {
  driver.findElement(By.name("q")).sendKeys(Key.TAB);
});
```

### Auf etwas warten

Es gibt Zeiten, in denen Sie WebDriver anweisen möchten, auf etwas zu warten, bevor es weitergeht. Beispielsweise, wenn Sie eine neue Seite laden, möchten Sie darauf warten, dass das DOM der Seite vollständig geladen wird, bevor Sie mit einem seiner Elemente interagieren, da sonst der Test wahrscheinlich fehlschlagen wird.

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

Die `sleep()`-Methode akzeptiert einen Wert, der die Wartezeit in Millisekunden angibt — die Methode gibt ein Versprechen zurück, das nach Ablauf dieser Zeit erfüllt wird, woraufhin der Code im `then()` ausgeführt wird. In diesem Fall rufen wir den Titel der aktuellen Seite mit der Methode `getTitle()` ab und geben eine Erfolg- oder Fehlermeldung zurück, je nachdem, was der Wert ist.

Wir könnten unserer `quick_test.js`-Datei auch eine `sleep()`-Methode hinzufügen — versuchen Sie, Ihre `example()`-Funktion wie folgt zu aktualisieren:

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

WebDriver wird jetzt 2 Sekunden warten, bevor das Formulareingabefeld ausgefüllt wird. Wir prüfen dann, ob sein Wert eingetragen wurde (d.h. nicht leer ist), indem wir `getAttribute()` verwenden, um seinen Attributwert `value` abzurufen, und eine Nachricht an die Konsole ausgeben, wenn er nicht leer ist.

> [!NOTE]
> Es gibt auch eine Methode namens [`wait()`](https://www.selenium.dev/selenium/docs/api/javascript/WebDriver.html#wait), die eine Bedingung wiederholt für eine bestimmte Zeitdauer testet, und dann den Code ausführt. Diese verwendet auch die [util-Bibliothek](https://www.selenium.dev/selenium/docs/api/javascript/lib_until.js.html), die gängige Bedingungen definiert, die mit `wait()` verwendet werden können.

### Treiber nach Gebrauch herunterfahren

Nachdem Sie einen Test abgeschlossen haben, sollten Sie alle Treiberinstanzen herunterfahren, die Sie geöffnet haben, damit Sie nicht mit vielen rogue Browserinstanzen auf Ihrem Computer enden! Dies kann mit der `quit()`-Methode erfolgen. Rufen Sie diese auf Ihre Treiberinstanz auf, wenn Sie fertig sind. Fügen Sie diese Zeile am Ende Ihres `quick_test.js` Tests hinzu:

```js
driver.quit();
```

Wenn Sie es ausführen, sollten Sie jetzt sehen, dass der Test ausgeführt wird und die Browserinstanz nach Beendigung des Tests heruntergefahren wird. Dies ist nützlich, um Ihren Computer nicht mit vielen Browserinstanzen zu überladen, insbesondere wenn Sie so viele haben, dass es den Computer verlangsamt.

## Beste Testpraktiken

Es wurde viel über die beste Vorgehensweise beim Schreiben von Tests geschrieben. Sie können einige gute Hintergrundinformationen unter [Test Practices](https://www.selenium.dev/documentation/test_practices/) finden. Im Allgemeinen sollten Ihre Tests:

1. Gute Locator-Strategien verwenden: Wenn Sie [mit dem Dokument interagieren](#interaktion_mit_dem_dokument), stellen Sie sicher, dass Sie Locator und Seitenobjekte verwenden, die sich wahrscheinlich nicht ändern werden — wenn Sie ein testbares Element haben, das Sie testen möchten, stellen Sie sicher, dass es eine stabile ID hat oder eine Position auf der Seite, die mit einem CSS-Selektor ausgewählt werden kann, der sich nicht mit jeder Website-Iteration ändert. Sie möchten Ihre Tests so robust wie möglich machen, d.h. sie sollten nicht einfach brechen, wenn sich etwas ändert.
2. Atomare Tests schreiben: Jeder Test sollte nur eine Sache testen, was es einfacher macht, nachzuvollziehen, welche Testdatei welches Kriterium testet. Zum Beispiel ist der `google_test.js` Test, den wir oben untersucht haben, ziemlich gut, da er nur eine einzige Sache testet — ob der Titel einer Suchergebnisseite korrekt gesetzt ist. Wir könnten daran arbeiten, ihm einen besseren Namen zu geben, damit es einfacher ist herauszufinden, was es tut, wenn wir weitere Google-Teste hinzufügen. Vielleicht wäre `results_page_title_set_correctly.js` etwas besser?
3. Autonome Tests schreiben: Jeder Test sollte für sich funktionieren und nicht von anderen Tests abhängen, um zu funktionieren.

Zusätzlich sollten wir die Testergebnisse/-berichterstattung erwähnen — wir haben in unseren obigen Beispielen Ergebnisse mit einfachen `console.log()` Anweisungen berichtet, aber dies alles ist in JavaScript, also können Sie jedes Testlauf- und Berichtssystem verwenden, das Sie möchten, sei es [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) oder ein anderes Tool.

1. Versuchen Sie zum Beispiel, eine lokale Kopie unseres [mocha_test.js](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/selenium/mocha_test.js) Beispiels in Ihrem Projektverzeichnis zu erstellen. Platzieren Sie es in einem Unterordner namens `test`. Dieses Beispiel verwendet eine lange Kette von Versprechen, um alle Schritte auszuführen, die für unseren Test erforderlich sind — die promise-basierten Methoden, die WebDriver verwendet, müssen sich auflösen, damit es richtig funktioniert.
2. Installieren Sie das Mocha-Testwerkzeug, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```bash
   npm install --save-dev mocha
   ```

3. Sie können den Test (und alle anderen, die Sie in Ihrem `test`-Verzeichnis ablegen) jetzt mit dem folgenden Befehl ausführen:

   ```bash
   npx mocha --no-timeouts
   ```

4. Sie sollten das `--no-timeouts` Flag einschließen, um sicherzustellen, dass Ihre Tests nicht aufgrund von Mochas willkürlichem Timeout (das 3 Sekunden beträgt) fehlschlagen.

> **Hinweis:** [saucelabs-sample-test-frameworks](https://github.com/saucelabs-sample-test-frameworks) enthält mehrere nützliche Beispiele, die zeigen, wie man verschiedene Kombinationen von Test-/Assertion-Tools einrichtet.

## Tests remote ausführen

Es erweist sich, dass das Ausführen von Tests auf Remote-Servern nicht viel schwieriger ist als das lokale Ausführen. Sie müssen nur Ihre Treiberinstanz erstellen, jedoch mit ein paar mehr spezifizierten Merkmalen, einschließlich der Fähigkeiten des Browsers, den Sie testen möchten, der Adresse des Servers und der Benutzeranmeldeinformationen, die Sie benötigen (falls vorhanden), um darauf zuzugreifen.

### LambdaTest

Es ist ziemlich einfach, Selenium-Tests auf LambdaTest remote auszuführen. Der benötigte Code sollte dem unten gezeigten Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `lambdatest_google_test.js`.
2. Geben Sie ihr den folgenden Inhalt:

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

3. Besuchen Sie Ihr [LambdaTest Automatisierungs-Dashboard](https://www.lambdatest.com/selenium-automation), um Ihren LambdaTest-Benutzernamen und Zugangsschlüssel abzurufen, indem Sie auf das **Schlüssel**-Symbol oben rechts klicken (siehe _Username and Access Keys_). Ersetzen Sie die `{username}` und `{accessKey}` Platzhalter im Code durch Ihren tatsächlichen Benutzernamen und Zugangsschlüsselwerte (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
4. Führen Sie den folgenden Befehl in Ihrem Terminal aus, um Ihren Test auszuführen:

   ```bash
   node lambdatest_google_test
   ```

   Der Test wird zu LambdaTest gesendet und das Ergebnis Ihres Tests wird auf Ihrer LambdaTest-Konsole angezeigt.
   Wenn Sie diese Ergebnisse für Berichtszwecke von der LambdaTest-Plattform extrahieren möchten, können Sie dies mit der [LambdaTest Restful API](https://www.lambdatest.com/blog/lambdatest-launches-api-for-selenium-automation/) tun.

5. Wenn Sie jetzt zu Ihrem [LambdaTest Automatisierungs-Dashboard](https://accounts.lambdatest.com/dashboard) gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und ähnliche Daten anzeigen.
   Sie werden auch einen Status von **passed** oder **failed** anstelle von **completed** sehen, aufgrund der `if` oder `else`-Blöcke des Codes.

   [![LambdaTest Automatisierungs-Dashboard](automation-logs-1.jpg)](https://www.lambdatest.com/blog/wp-content/uploads/2019/02/Automation-logs-1.jpg)
   Sie können Netzwerk-, Befehls-, Ausnahme- und Selenium-Logs für jeden Test innerhalb Ihres Testaufbaus abrufen. Sie werden auch eine Videoaufzeichnung Ihrer Selenium-Skriptausführung finden.

> [!NOTE]
> Die _HELP_-Schaltfläche auf dem LambdaTest Automatisierungs-Dashboard bietet Ihnen eine Menge Informationen, um Ihnen beim Einstieg in die LambdaTest-Automatisierung zu helfen. Sie können auch unsere Dokumentation über [Running first Selenium script in Node JS](https://www.lambdatest.com/support/docs/quick-guide-to-run-node-js-tests-on-lambdatest-selenium-grid/) lesen.

> [!NOTE]
> Wenn Sie die Merkmalsobjekte für Ihre Tests nicht von Hand schreiben möchten, können Sie diese mit dem [Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) generieren.

### BrowserStack

Es ist einfach, Selenium-Tests remote auf BrowserStack auszuführen. Der benötigte Code sollte dem unten gezeigten Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

1. Erstellen Sie in Ihrem Projektverzeichnis eine neue Datei namens `bstack_google_test.js`.
2. Geben Sie ihr den folgenden Inhalt:

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

3. Holen Sie sich Ihren Benutzernamen und Zugasschlüssel von Ihrem [BrowserStack-Konto - Zusammenfassung](https://www.browserstack.com/accounts/profile/details) (siehe _Username and Access Keys_). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugasschlüsselwerte (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node bstack_google_test
   ```

   Der Test wird an BrowserStack gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung eines Ergebnisberichtmechanismus!

5. Gehen Sie jetzt zurück zur [BrowserStack Automatisierungs-Dashboard](https://www.browserstack.com/automate)-Seite, Sie sehen Ihren Test aufgelistet:
   ![BrowserStack automatisierte Ergebnisse](bstack_automated_results.png)

Wenn Sie auf den Link für Ihren Test klicken, gelangen Sie zu einem neuen Bildschirm, auf dem Sie eine Videoaufzeichnung des Tests und mehrere detaillierte Protokolle mit Informationen dazu sehen können.

> [!NOTE]
> Die _Ressourcen_-Option im BrowserStack-Automatisierungs-Dashboard enthält viele nützliche Informationen zur Verwendung von automatisierten Tests. Lesen Sie die [Node JS-Dokumentation zum Schreiben von automatisierten Testscripten in Node JS](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs) für die nodespezifischen Informationen. Erkunden Sie die Dokumentationen, um herauszufinden, welche nützlichen Dinge BrowserStack tun kann.

> [!NOTE]
> Wenn Sie die Merkmalsobjekte für Ihre Tests nicht von Hand schreiben möchten, können Sie diese mit den in den Docs eingebetteten Generatoren generieren. Siehe [Run your first test](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs#run-your-first-test).

#### Ausfüllen der BrowserStack-Testdetails programmgesteuert

Sie können die BrowserStack-REST-API und einige andere Funktionen verwenden, um Ihren Test mit mehr Details zu versehen, wie ob er bestanden wurde, warum er bestanden wurde, welches Projekt der TestTeil von war, usw. BrowserStack kennt diese Details standardmäßig nicht!

Lassen Sie uns unser `bstack_google_test.js`-Demo aktualisieren, um zu zeigen, wie diese Funktionen funktionieren:

1. Installieren Sie das Anforderungsmodul, indem Sie den folgenden Befehl in Ihrem Projektverzeichnis ausführen:

   ```js
   npm install request
   ```

2. Dann müssen wir das Node-Anforderungsmodul importieren, damit我们 es verwenden können, um Anfragen an die REST-API zu senden. Fügen Sie die folgende Zeile ganz oben in Ihren Code ein:

   ```js
   const request = require("request");
   ```

3. Nun werden wir unser `capabilities`-Objekt aktualisieren, um einen Projektnamen einzuschließen — fügen Sie die folgende Zeile vor der schließenden geschweiften Klammer hinzu und vergessen Sie nicht, am Ende der vorherigen Zeile ein Komma anzufügen (Sie können die Build- und Projektnamen variieren, um die Tests in verschiedenen Fenstern im BrowserStack-Automatisierungs-Dashboard zu organisieren):

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

5. Schließlich aktualisieren wir den `driver.sleep(2000)`-Block am unteren Ende des Codes, um REST-API-Anrufe hinzuzufügen (wieder, ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugasschlüsselwerte):

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

Diese sind ziemlich intuitiv — sobald der Test abgeschlossen ist, senden wir einen API-Aufruf an BrowserStack, um den Test mit einem bestandenen oder nicht bestandenen Status und einem Grund für das Ergebnis zu aktualisieren.

Wenn Sie jetzt zurück zu Ihrer [BrowserStack-Automatisierungs-Dashboard](https://live.browserstack.com/dashboard)-Seite gehen, sollten Sie Ihre Testsitzung wie zuvor verfügbar sehen, jedoch mit den aktualisierten Daten, die angehängt sind:

![BrowserStack Benutzerdefinierte Ergebnisse](bstack_custom_results.png)

### Sauce Labs

Es ist auch sehr einfach, Selenium-Tests remote auf Sauce Labs auszuführen, und es ist sehr ähnlich zu BrowserStack, mit wenigen syntaktischen Unterschieden. Der benötigte Code sollte dem unten gezeigten Muster folgen.

Lassen Sie uns ein Beispiel schreiben:

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

3. Holen Sie sich Ihren Benutzernamen und Ihren Zugangsschlüssel von Ihren [Sauce Labs Benutzereinstellungen](https://app.saucelabs.com/user-settings). Ersetzen Sie die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugasschlüsselwerte (und stellen Sie sicher, dass Sie diese sicher aufbewahren).
4. Führen Sie Ihren Test mit dem folgenden Befehl aus:

   ```bash
   node sauce_google_test
   ```

   Der Test wird an Sauce Labs gesendet und das Testergebnis wird an Ihre Konsole zurückgegeben. Dies zeigt die Bedeutung eines Ergebnisberichtmechanismus!

5. Wenn Sie jetzt zu Ihrer [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests)-Seite gehen, sehen Sie Ihren Test aufgelistet; von hier aus können Sie Videos, Screenshots und andere solcher Daten anzeigen.
   ![Sauce Labs automatisierter Test](sauce_labs_automated_test.png)

> [!NOTE]
> Der [Platform Configurator](https://saucelabs.com/products/platform-configurator#/) von Sauce Labs ist ein nützliches Tool zum Generieren von Merkmalsobjekten, die Ihren Treiberinstanzen zugeführt werden sollen, basierend darauf, auf welchem Browser/Betriebssystem Sie testen möchten.

> [!NOTE]
> Für detailliertere Informationen zum Testen mit Sauce Labs und Selenium, schauen Sie sich [Getting Started with Selenium for Automated Website Testing](https://docs.saucelabs.com/web-apps/automated-testing/selenium/) und [Instant Selenium Node.js Tests](https://docs.saucelabs.com/web-apps/automated-testing/selenium/sample-scripts/#nodejs) an.

#### Ausfüllen der Sauce Labs-Testdetails programmgesteuert

Sie können die Sauce Labs-API verwenden, um Ihren Test mit mehr Details zu versehen, wie ob er bestanden wurde, den Namen des Tests, usw. Sauce Labs kennt diese Details standardmäßig nicht!

Um dies zu tun, müssen Sie:

1. Das Node Sauce Labs Wrapper mit dem folgenden Befehl installieren (wenn Sie dies nicht bereits für dieses Projekt getan haben):

   ```bash
   npm install saucelabs --save-dev
   ```

2. Saucelabs einbinden — setzen Sie dies am Anfang Ihrer `sauce_google_test.js`-Datei, direkt unter den vorherigen Variablendeklarationen:

   ```js
   const SauceLabs = require("saucelabs");
   ```

3. Eine neue Instanz von SauceLabs erstellen, indem Sie folgendes direkt darunter hinzufügen:

   ```js
   const saucelabs = new SauceLabs({
     username: "YOUR-USER-NAME",
     password: "YOUR-ACCESS-KEY",
   });
   ```

   Ersetzen Sie erneut die Platzhalter `YOUR-USER-NAME` und `YOUR-ACCESS-KEY` im Code durch Ihre tatsächlichen Benutzernamen- und Zugasschlüsselwerte (beachten Sie, dass das saucelabs npm-Paket auf verwirrende Weise `password`, nicht `accessKey` verwendet). Da Sie diese jetzt zweimal verwenden, könnten Sie ein paar Hilfsvariablen erstellen, um sie zu speichern.

4. Unter dem Block, in dem Sie die `driver`-Variable definieren (direkt unter der `build()`-Zeile), fügen Sie den folgenden Block hinzu — dies holt die richtige `sessionID` des Treibers, die wir benötigen, um Daten in den Job zu schreiben (Sie können es in der nächsten Codeblock in Aktion sehen):

   ```js
   driver.getSession().then((sessionid) => {
     driver.sessionID = sessionid.id_;
   });
   ```

5. Ersetzen Sie schließlich den `driver.sleep(2000)`-Block am unteren Ende des Codes mit folgendem:

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

Hier haben wir eine Variable `testPassed` auf `true` oder `false` gesetzt, je nachdem, ob der Test bestanden oder nicht bestanden wurde, dann haben wir die Methode `saucelabs.updateJob()` verwendet, um die Details zu aktualisieren.

Wenn Sie jetzt zurück zu Ihrer [Sauce Labs Automated Test dashboard](https://app.saucelabs.com/dashboard/tests)-Seite gehen, sollte Ihr neuer Job jetzt die aktualisierten Daten angehängt haben:

![Sauce Labs Aktualisierte Jobinformationen](sauce_labs_updated_job_info.png)

### Ihr eigener Remote-Server

Wenn Sie keinen Dienst wie Sauce Labs oder BrowserStack verwenden möchten, können Sie jederzeit Ihren eigenen Remote-Testing-Server einrichten. Schauen wir uns an, wie das geht.

1. Der Selenium-Remote-Server benötigt Java zum Laufen. Laden Sie das neueste JDK für Ihre Plattform von der [Java SE Downloads-Seite](https://www.oracle.com/java/technologies/downloads/) herunter. Installieren Sie es, wenn es heruntergeladen wurde.
2. Laden Sie als nächstes den neuesten [Selenium Standalone Server](https://selenium-release.storage.googleapis.com/index.html) herunter — dieser fungiert als Proxy zwischen Ihrem Skript und den Browser-Treibern. Wählen Sie die neueste stabile Version (d.h. keine Beta) und aus der Liste wählen Sie eine Datei, die mit "selenium-server-standalone" beginnt. Wenn dies heruntergeladen wurde, legen Sie es an einem sinnvollen Ort ab, etwa in Ihrem Home-Verzeichnis. Wenn Sie den Speicherort noch nicht zu Ihrem `PATH` hinzugefügt haben, tun Sie dies jetzt (siehe Abschnitt [Einrichten von Selenium in Node](#einrichten_von_selenium_in_node)).
3. Führen Sie den Standalone-Server aus, indem Sie das Folgende in ein Terminal auf Ihrem Server-Computer eingeben

   ```bash
   java -jar selenium-server-standalone-3.0.0.jar
   ```

   (aktualisieren Sie den `.jar`-Dateinamen), damit er genau der Datei entspricht, die Sie heruntergeladen haben.

4. Der Server wird auf `http://localhost:4444/wd/hub` laufen — versuchen Sie jetzt, dorthin zu gehen, um zu sehen, was Sie bekommen.

Da wir den Server am Laufen haben, erstellen wir einen Demo-Test, der auf dem Remote-Selenium-Server ausgeführt wird.

1. Erstellen Sie eine Kopie Ihrer `google_test.js`-Datei und nennen Sie sie `google_test_remote.js`; legen Sie sie in Ihrem Projektverzeichnis ab.
2. Aktualisieren Sie die Zeile im Code (die mit `const driver = …` beginnt) wie folgt

   ```js
   const driver = new Builder()
     .forBrowser(Browser.FIREFOX)
     .usingServer("http://localhost:4444/wd/hub")
     .build();
   ```

3. Führen Sie Ihren Test aus und Sie sollten sehen, dass er wie erwartet läuft; diesmal jedoch auf dem Standalone-Server:

   ```bash
   node google_test_remote.js
   ```

Das ist ziemlich cool. Wir haben dies lokal getestet, aber Sie könnten dies auf fast jedem Server zusammen mit den entsprechenden Browser-Treibern einrichten und dann Ihre Skripte mit der URL verbinden, die Sie wählen, um sie freizugeben.

## Integration von Selenium mit CI-Tools

Ein weiterer Punkt ist, dass es auch möglich ist, Selenium und verwandte Tools wie LambdaTest und Sauce Labs mit kontinuierlichen Integrations- (CI-) Tools zu integrieren — dies ist nützlich, da es bedeutet, dass Sie Ihre Tests über ein CI-Tool ausführen und nur neue Änderungen in Ihrem Code-Repository einchecken können, wenn die Tests bestanden werden.

Es ist nicht der Umfang, dieses Thema in diesem Artikel ausführlich zu behandeln, aber wir würden Ihnen empfehlen, mit Travis CI zu beginnen — dies ist wahrscheinlich das einfachste CI-Tool, um zu beginnen und hat eine gute Integration mit Web-Tools wie GitHub und Node.

Um zu beginnen, siehe zum Beispiel:

- [Travis CI für komplette Anfänger](https://docs.travis-ci.com/user/for-beginners)
- [Erstellen eines Node.js-Projekts](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/) (mit Travis)
- [Using LambdaTest with Travis CI](https://www.lambdatest.com/support/docs/travis-ci-with-lambdatest/)
- [Using LambdaTest with CircleCI](https://www.lambdatest.com/support/docs/circleci-integration-with-lambdatest/)
- [Using LambdaTest with Jenkins](https://www.lambdatest.com/support/docs/jenkins-with-lambdatest/)
- [Using Sauce Labs with Travis CI](https://docs.travis-ci.com/user/sauce-connect/)

> [!NOTE]
> Wenn Sie kontinuierliches Testen mit **codelesser Automatisierung** durchführen möchten, können Sie [Endtest](https://www.endtest.io/) oder [TestingBot](https://testingbot.com/) verwenden.

## Zusammenfassung

Dieses Modul sollte Spaß gemacht haben und Ihnen genügend Einblick gegeben haben, um automatische Tests zu schreiben und auszuführen, damit Sie beginnen können, Ihre eigenen automatisierten Tests zu schreiben.

{{PreviousMenu("Learn/Tools_and_testing/Cross_browser_testing/Automated_testing", "Learn/Tools_and_testing/Cross_browser_testing")}}
