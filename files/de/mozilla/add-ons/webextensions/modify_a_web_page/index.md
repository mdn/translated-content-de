---
title: Eine Webseite modifizieren
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Eine der häufigsten Anwendungsfälle für eine Erweiterung ist die Modifikation einer Webseite. Zum Beispiel möchte eine Erweiterung möglicherweise den Stil einer Seite ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen.

Es gibt zwei Möglichkeiten, dies mit den WebExtensions-APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das eine Reihe von URLs abgleicht, und laden Sie eine Reihe von Skripten in Seiten, deren URL diesem Muster entspricht.
- **Programmatisch**: Verwenden Sie eine JavaScript-API, um ein Skript in die von einem bestimmten Tab gehostete Seite zu laden.

In beiden Fällen werden diese Skripte _Content Scripts_ genannt, und sie unterscheiden sich von den anderen Skripten, die eine Erweiterung ausmachen:

- Sie erhalten nur Zugriff auf einen kleinen Teil der WebExtension-APIs.
- Sie erhalten direkten Zugriff auf die Webseite, in die sie geladen werden.
- Sie kommunizieren mit dem Rest der Erweiterung über eine Messaging-API.

In diesem Artikel betrachten wir beide Methoden zum Laden eines Skripts.

## Seiten modifizieren, die einem URL-Muster entsprechen

Erstellen Sie zunächst ein neues Verzeichnis namens "modify-page". In diesem Verzeichnis erstellen Sie eine Datei namens "manifest.json" mit folgendem Inhalt:

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

Der [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel ist, wie Sie Skripte in Seiten laden, die URL-Mustern entsprechen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens "page-eater.js" in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die Eigenschaft `"js"` von `content_scripts` ein Array ist, können Sie damit mehr als ein Skript in Seiten einfügen, die dem Muster entsprechen. Wenn Sie dies tun, teilen sich die Seiten denselben Gültigkeitsbereich, genau wie mehrere Skripte, die von einer Seite geladen werden, und sie werden in der Reihenfolge geladen, in der sie im Array aufgeführt sind.

> [!NOTE]
> Der `content_scripts`-Schlüssel hat auch eine `"css"`-Eigenschaft, die Sie verwenden können, um CSS-Stile einzufügen.

Erstellen Sie als Nächstes eine Datei namens "page-eater.js" im Verzeichnis "modify-page" und geben Sie ihr den folgenden Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Nun [installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![developer.mozilla.org-Seite "gefressen" vom Skript](eaten_page.png)

## Seiten programmatisch modifizieren

Was, wenn Sie weiterhin Seiten fressen möchten, aber nur, wenn der Benutzer Sie dazu auffordert? Lassen Sie uns dieses Beispiel so aktualisieren, dass wir das Content Script einfügen, wenn der Benutzer auf ein Kontextmenüelement klickt.

Aktualisieren Sie zunächst "manifest.json", sodass es den folgenden Inhalt hat:

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

Hier haben wir den `content_scripts`-Schlüssel entfernt und zwei neue Schlüssel hinzugefügt:

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten einzufügen, benötigen wir Berechtigungen für die Seite, die wir modifizieren. Die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) bietet eine Möglichkeit, diese vorübergehend für den aktuell aktiven Tab zu erhalten. Wir benötigen auch die `contextMenus`-Berechtigung, um Kontextmenüelemente hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein dauerhaftes ["Background Script"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Content Script einfügen werden.

Lassen Sie uns diese Datei erstellen. Erstellen Sie eine neue Datei namens `background.js` im `modify-page`-Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

In diesem Skript erstellen wir ein [Kontextmenüelement](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create), geben ihm eine spezifische ID und einen Titel (den Text, der im Kontextmenü angezeigt werden soll). Dann richten wir einen Ereignislistener ein, sodass wir überprüfen, ob das angeklickte Kontextmenüelement unser `eat-page`-Element ist. Wenn dem so ist, fügen wir "page-eater.js" in den aktuellen Tab mithilfe der [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)-API ein. Diese API nimmt optional eine Tab-ID als Argument entgegen: Wir haben die Tab-ID weggelassen, was bedeutet, dass das Skript in den aktuell aktiven Tab eingefügt wird.

Zu diesem Zeitpunkt sollte die Erweiterung so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Jetzt [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (dieses Mal irgendeine Seite) aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option, eine Seite im Kontextmenü zu fressen](eat_from_menu.png)

## Messaging

Content Scripts und Background Scripts können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch durch das Senden von Nachrichten kommunizieren. Ein Ende richtet einen Nachrichtenlistener ein, und das andere Ende kann ihm dann eine Nachricht senden. Die folgende Tabelle fasst die beteiligten APIs auf beiden Seiten zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content Script</th>
      <th scope="col">Im Background Script</th>
    </tr>
    <tr>
      <th scope="row">Eine Nachricht senden</th>
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
      <th scope="row">Eine Nachricht empfangen</th>
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
> Zusätzlich zu dieser Kommunikationsmethode, die einmalige Nachrichten sendet, können Sie auch einen [verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Für Ratschläge zur Wahl zwischen den Optionen lesen Sie [Choosing between one-off messages and connection-based messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Lassen Sie uns unser Beispiel aktualisieren, um zu zeigen, wie man eine Nachricht vom Background Script sendet.

Bearbeiten Sie zuerst `background.js`, sodass es diesen Inhalt hat:

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

Nachdem wir `page-eater.js` eingefügt haben, verwenden wir [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den derzeit aktiven Tab zu bekommen, und dann verwenden wir [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), um eine Nachricht an die in diesem Tab geladenen Content Scripts zu senden. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

Aktualisieren Sie als Nächstes `page-eater.js` so:

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  let header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

Nun, anstatt die Seite sofort zu fressen, wartet das Content Script auf eine Nachricht mithilfe von [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wenn eine Nachricht ankommt, führt das Content Script im Wesentlichen denselben Code wie zuvor aus, mit dem Unterschied, dass der Ersetzungstext von `request.replacement` stammt.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist, und um sicherzustellen, dass wir eine Nachricht nur senden, nachdem der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das aufgerufen wird, nachdem `page-eater.js` ausgeführt wurde.

> [!NOTE]
> Drücken Sie <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> (oder <kbd>Cmd</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen, um `console.log` im Background Script anzuzeigen.
>
> Alternativ können Sie den [Add-on-Debugger](https://extensionworkshop.com/documentation/develop/debugging/) verwenden, der es Ihnen ermöglicht, Breakpoints zu setzen. Derzeit gibt es keine Möglichkeit, den [Add-on-Debugger direkt von web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten von dem Content Script zur Hintergrundseite zurücksenden möchten, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, z.B.:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können auch CSS programmgesteuert mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) injizieren.

## Mehr erfahren

- [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) Leitfaden
- [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Manifest-Schlüssel
- [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- Beispiele mit `content_scripts`:
  - [borderify](https://github.com/mdn/webextensions-examples/tree/main/borderify)
  - [emoji-substitution](https://github.com/mdn/webextensions-examples/tree/main/emoji-substitution)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/main/page-to-extension-messaging)

- Beispiele mit `tabs.executeScript()`:
  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types)
