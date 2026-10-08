---
title: Eine Webseite ändern
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Eine der häufigsten Anwendungen für eine Erweiterung ist das Ändern einer Webseite. Beispielsweise könnte eine Erweiterung den Stil einer Seite ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen.

Mit den WebExtensions-APIs gibt es dafür zwei Möglichkeiten:

- **Deklarativ**: Sie definieren ein Muster, das auf eine Gruppe von URLs zutrifft, und laden Skripte in Seiten, deren URL diesem Muster entspricht.
- **Programmatisch**: Sie verwenden eine JavaScript-API, um ein Skript in die Seite zu laden, die in einem bestimmten Tab geöffnet ist.

In beiden Fällen heißen diese Skripte _Content Scripts_. Sie unterscheiden sich von den anderen Skripten einer Erweiterung:

- Sie haben nur Zugriff auf eine kleine Teilmenge der WebExtensions-APIs.
- Sie haben direkten Zugriff auf die Webseite, in die sie geladen werden.
- Sie kommunizieren über eine Messaging-API mit dem Rest der Erweiterung.

In diesem Artikel sehen wir uns beide Methoden zum Laden eines Skripts an.

## Seiten ändern, die einem URL-Muster entsprechen

Erstellen Sie zunächst ein neues Verzeichnis namens „modify-page“. Erstellen Sie darin eine Datei namens „manifest.json“ mit folgendem Inhalt:

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "content_scripts": [
    {
      "matches": ["https://developer.mozilla.org/*"],
      "js": ["page-eater.js"]
    }
  ]
}
```

Mit dem Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) laden Sie Skripte in Seiten, die bestimmten URL-Mustern entsprechen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens „page-eater.js“ in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die Eigenschaft `"js"` von `content_scripts` ein Array ist, können Sie damit mehrere Skripte in passende Seiten einfügen. In diesem Fall teilen sich die Skripte denselben Gültigkeitsbereich, wie mehrere von einer Seite geladene Skripte. Sie werden in der Reihenfolge geladen, in der sie im Array stehen.

> [!NOTE]
> Der Schlüssel `content_scripts` hat außerdem eine Eigenschaft `"css"`, mit der Sie CSS-Stylesheets einfügen können.

Erstellen Sie als Nächstes im Verzeichnis „modify-page“ eine Datei namens „page-eater.js“ mit folgendem Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

[Installieren Sie nun die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![Die vom Skript „aufgefressene“ Seite developer.mozilla.org](eaten_page.png)

## Seiten programmatisch ändern

Was ist, wenn Sie Seiten nur dann „auffressen“ möchten, wenn die Benutzerin oder der Benutzer dies anfordert? Passen wir das Beispiel so an, dass das Content Script eingefügt wird, wenn ein Kontextmenüeintrag angeklickt wird.

Aktualisieren Sie zunächst „manifest.json“, sodass die Datei folgenden Inhalt hat:

```json
{
  "manifest_version": 2,
  "name": "modify-page",
  "version": "1.0",

  "permissions": ["activeTab", "contextMenus"],

  "background": {
    "scripts": ["background.js"]
  }
}
```

Hier haben wir den Schlüssel `content_scripts` entfernt und zwei neue Schlüssel hinzugefügt:

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten einzufügen, benötigen wir Berechtigungen für die Seite, die wir ändern. Mit der [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) erhalten wir diese vorübergehend für den aktiven Tab. Außerdem benötigen wir die Berechtigung `contextMenus`, um Kontextmenüeinträge hinzuzufügen.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Damit laden wir ein dauerhaft aktives [Hintergrundskript](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js`, in dem wir das Kontextmenü einrichten und das Content Script einfügen.

Erstellen wir diese Datei. Erstellen Sie im Verzeichnis `modify-page` eine neue Datei namens `background.js` mit folgendem Inhalt:

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "eat-page") {
    browser.tabs.executeScript({
      file: "page-eater.js",
    });
  }
});
```

In diesem Skript erstellen wir einen [Kontextmenüeintrag](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) und geben ihm eine bestimmte ID sowie einen Titel – den Text, der im Kontextmenü angezeigt wird. Anschließend richten wir einen Event Listener ein. Wenn ein Kontextmenüeintrag angeklickt wird, prüfen wir damit, ob es sich um unseren Eintrag `eat-page` handelt. Ist das der Fall, fügen wir „page-eater.js“ mithilfe der API [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) in den aktuellen Tab ein. Diese API nimmt optional eine Tab-ID als Argument entgegen. Wir haben die Tab-ID weggelassen, sodass das Skript in den derzeit aktiven Tab eingefügt wird.

Die Erweiterung sollte jetzt so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

[Laden Sie nun die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine beliebige Seite, rufen Sie das Kontextmenü auf und wählen Sie „Eat this page“:

![Option zum „Auffressen“ einer Seite im Kontextmenü](eat_from_menu.png)

## Messaging

Content Scripts und Hintergrundskripte können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch über Nachrichten miteinander kommunizieren. Eine Seite richtet einen Listener für Nachrichten ein; die andere kann ihr daraufhin eine Nachricht senden. Die folgende Tabelle fasst die APIs für beide Seiten zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content Script</th>
      <th scope="col">Im Hintergrundskript</th>
    </tr>
    <tr>
      <th scope="row">Nachricht senden</th>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage"
            >browser.runtime.sendMessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage"
            >browser.tabs.sendMessage()</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Nachricht empfangen</th>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Neben dieser Methode zum Senden einzelner Nachrichten können Sie auch einen [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Hinweise zur Wahl der passenden Methode finden Sie unter [Wahl zwischen einzelnen Nachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Passen wir unser Beispiel an, um zu zeigen, wie das Hintergrundskript eine Nachricht sendet.

Bearbeiten Sie zunächst `background.js`, sodass die Datei folgenden Inhalt hat:

```js
browser.contextMenus.create({
  id: "eat-page",
  title: "Eat this page",
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the extension!",
  });
}

function onExecuted(result) {
  let querying = browser.tabs.query({
    active: true,
    currentWindow: true,
  });
  querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "eat-page") {
    let executing = browser.tabs.executeScript({
      file: "page-eater.js",
    });
    executing.then(onExecuted);
  }
});
```

Nachdem wir `page-eater.js` eingefügt haben, ermitteln wir mit [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) den derzeit aktiven Tab. Anschließend senden wir mit [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) eine Nachricht an die Content Scripts, die in diesem Tab geladen sind. Die Nachricht enthält die Nutzdaten `{replacement: "Message from the extension!"}`.

Aktualisieren Sie als Nächstes `page-eater.js` wie folgt:

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  let header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

Anstatt die Seite sofort „aufzufressen“, wartet das Content Script nun mithilfe von [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) auf eine Nachricht. Wenn eine Nachricht eintrifft, führt das Content Script im Wesentlichen denselben Code wie zuvor aus. Der Ersatztext wird nun jedoch aus `request.replacement` übernommen.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist, verwenden wir `onExecuted()`. Diese Funktion wird aufgerufen, nachdem `page-eater.js` ausgeführt wurde. So stellen wir sicher, dass wir die Nachricht erst senden, nachdem der Listener in `page-eater.js` eingerichtet wurde.

> [!NOTE]
> Drücken Sie <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> (unter macOS <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd>) oder verwenden Sie `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen und `console.log`-Ausgaben des Hintergrundskripts anzusehen.
>
> Alternativ können Sie den [Add-on-Debugger](https://extensionworkshop.com/documentation/develop/debugging/) verwenden, mit dem Sie Breakpoints setzen können. Derzeit gibt es keine Möglichkeit, den [Add-on-Debugger direkt über web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten vom Content Script an die Hintergrundseite zurücksenden möchten, verwenden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) statt [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), zum Beispiel:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> In all diesen Beispielen wird JavaScript eingefügt. Sie können auch CSS programmatisch mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) einfügen.

## Weitere Informationen

- [Leitfaden zu Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- Manifest-Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)
- Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- Beispiele für die Verwendung von `content_scripts`:
  - [borderify](https://github.com/mdn/webextensions-examples/tree/main/borderify)
  - [emoji-substitution](https://github.com/mdn/webextensions-examples/tree/main/emoji-substitution)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/main/page-to-extension-messaging)

- Beispiele für die Verwendung von `tabs.executeScript()`:
  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types)
