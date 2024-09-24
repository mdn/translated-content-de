---
title: Eine Webseite ändern
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Einer der häufigsten Anwendungsfälle für eine Erweiterung ist das Ändern einer Webseite. Zum Beispiel könnte eine Erweiterung den Stil einer Seite ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen wollen.

Es gibt zwei Möglichkeiten, dies mit WebExtensions APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das auf eine Reihe von URLs zutrifft, und laden Sie eine Reihe von Skripten in Seiten, deren URL dem Muster entspricht.
- **Programmatisch**: Laden Sie mit einer JavaScript-API ein Skript in die Seite, die von einem bestimmten Tab gehostet wird.

In beiden Fällen werden diese Skripte _Content-Skripte_ genannt und unterscheiden sich von den anderen Skripten, die eine Erweiterung ausmachen:

- Sie haben nur Zugriff auf einen kleinen Teil der WebExtension-APIs.
- Sie haben direkten Zugriff auf die Webseite, in die sie geladen werden.
- Sie kommunizieren mit dem Rest der Erweiterung über eine Messaging-API.

In diesem Artikel betrachten wir beide Methoden zur Skriptladung.

## Seiten ändern, die mit einem URL-Muster übereinstimmen

Erstellen Sie zunächst ein neues Verzeichnis namens "modify-page". Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" mit folgendem Inhalt:

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

Der [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel ist, wie Sie Skripte in Seiten laden, die mit URL-Mustern übereinstimmen. In diesem Fall instruieren `content_scripts` den Browser, ein Skript namens "page-eater.js" in allen Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die `"js"`-Eigenschaft von `content_scripts` ein Array ist, können Sie es verwenden, um mehr als ein Skript in passende Seiten zu injizieren. Wenn Sie dies tun, teilen die Seiten denselben Gültigkeitsbereich, genau wie mehrere Skripte, die von einer Seite geladen werden, und sie werden in der Reihenfolge geladen, in der sie im Array aufgelistet sind.

> [!NOTE]
> Der `content_scripts`-Schlüssel hat auch eine `"css"`-Eigenschaft, die Sie verwenden können, um CSS-Stile einzubinden.

Erstellen Sie dann eine Datei namens "page-eater.js" im Verzeichnis "modify-page" und geben Sie ihr den folgenden Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Installieren Sie nun die Erweiterung [hier](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte nun so aussehen:

![developer.mozilla.org Seite "aufgefressen" vom Skript](eaten_page.png)

## Seiten programmgesteuert ändern

Was ist, wenn Sie Seiten erst "auffressen" wollen, wenn der Benutzer es Ihnen sagt? Aktualisieren wir dieses Beispiel so, dass wir das Content-Skript einfügen, wenn der Benutzer auf ein Kontextmenüelement klickt.

Aktualisieren Sie zuerst "manifest.json", so dass es den folgenden Inhalt hat:

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

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten zu injizieren, benötigen wir Berechtigungen für die Seite, die wir ändern. Die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) ist eine Möglichkeit, diese vorübergehend für den gerade aktiven Tab zu erhalten. Wir benötigen auch die `contextMenus`-Berechtigung, um Kontextmenüpunkte hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein persistentes ["Background-Skript"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Content-Skript injizieren.

Erstellen Sie diese Datei. Erstellen Sie eine neue Datei namens `background.js` im Verzeichnis `modify-page` und geben Sie ihr den folgenden Inhalt:

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

In diesem Skript erstellen wir ein [Kontextmenüelement](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) und geben ihm eine spezifische ID und einen Titel (den Text, der im Kontextmenü angezeigt wird). Dann richten wir einen Ereignislistener ein, der prüft, ob der Benutzer auf ein Kontextmenüelement klickt, ob es sich um unser `eat-page`-Element handelt. Wenn dies der Fall ist, injizieren wir "page-eater.js" in den aktuellen Tab mit der API [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Diese API nimmt optional eine Tab-ID als Argument: Wir haben die Tab-ID weggelassen, was bedeutet, dass das Skript in den aktuell aktiven Tab injiziert wird.

Zu diesem Zeitpunkt sollte die Erweiterung folgendermaßen aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Laden Sie nun die Erweiterung [neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (diesmal jede beliebige Seite), aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option, eine Seite im Kontextmenü zu essen](eat_from_menu.png)

## Messaging

Content-Skripte und Hintergrund-Skripte können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch kommunizieren, indem sie Nachrichten senden. Eine Seite richtet einen Nachrichtenlistener ein, und die andere Seite kann ihr dann eine Nachricht senden. Die folgende Tabelle fasst die auf jeder Seite beteiligten APIs zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content-Skript</th>
      <th scope="col">Im Hintergrund-Skript</th>
    </tr>
    <tr>
      <th scope="row">Eine Nachricht senden</th>
      <td>
        <code
          ><a
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime#sendmessage()"
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
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime#onmessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Zusätzlich zu dieser Kommunikationsmethode, die einmalige Nachrichten sendet, können Sie auch einen [verbindungsbasierten Ansatz zum Austausch von Nachrichten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Für Ratschläge zur Auswahl zwischen den Optionen siehe [Choosing between one-off messages and connection-based messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Lassen Sie uns unser Beispiel aktualisieren, um zu zeigen, wie eine Nachricht vom Hintergrundskript gesendet wird.

Bearbeiten Sie zuerst `background.js`, damit es diesen Inhalt hat:

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

Jetzt, nachdem `page-eater.js` injiziert wurde, verwenden wir [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den aktuell aktiven Tab zu erhalten, und verwenden dann [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), um eine Nachricht an die Content-Skripte zu senden, die in diesen Tab geladen sind. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

Aktualisieren Sie anschließend `page-eater.js` wie folgt:

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  let header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

Nun, anstatt die Seite sofort "aufzufressen", hört das Content-Skript auf eine Nachricht mit [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wenn eine Nachricht eingeht, führt das Content-Skript im Wesentlichen denselben Code aus wie zuvor, nur dass der Ersatztext aus `request.replacement` entnommen wird.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist und um sicherzustellen, dass wir die Nachricht nur senden, nachdem der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das nach der Ausführung von `page-eater.js` aufgerufen wird.

> [!NOTE]
> Drücken Sie <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> (oder <kbd>Cmd</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um [Browserkonsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen und `console.log` im Hintergrundskript anzuzeigen.
>
> Alternativ verwenden Sie den [Add-on Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger), der es Ihnen ermöglicht, Breakpoints zu setzen. Es gibt derzeit keine Möglichkeit, den [Add-on Debugger direkt über web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten zurück vom Content-Skript an die Hintergrundseite senden möchten, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, zum Beispiel:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können auch CSS programmgesteuert mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) einfügen.

## Mehr lernen

- [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) Anleitung
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
