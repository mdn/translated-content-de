---
title: Eine Webseite modifizieren
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Ein häufiger Anwendungsfall für eine Erweiterung ist die Modifikation einer Webseite. Beispielsweise könnte eine Erweiterung den Stil einer Seite ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen.

Es gibt zwei Möglichkeiten, dies mit den WebExtensions-APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das auf eine Menge von URLs zutrifft, und laden Sie eine Menge von Skripten in Seiten, deren URL zu diesem Muster passt.
- **Programmatisch**: Verwenden Sie eine JavaScript-API, um ein Skript in die von einem bestimmten Tab gehostete Seite zu laden.

In beiden Fällen werden diese Skripte _Content-Skripte_ genannt und unterscheiden sich von den anderen Skripten, aus denen eine Erweiterung besteht:

- Sie haben nur Zugriff auf einen kleinen Teil der WebExtension-APIs.
- Sie haben direkten Zugriff auf die Webseite, in der sie geladen sind.
- Sie kommunizieren mit dem Rest der Erweiterung über eine Messaging-API.

In diesem Artikel betrachten wir beide Methoden zum Laden eines Skripts.

## Seiten modifizieren, die mit einem URL-Muster übereinstimmen

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

Der [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel ist die Methode, mit der Sie Skripte in Seiten laden, die URL-Mustern entsprechen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens "page-eater.js" in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die `"js"`-Eigenschaft von `content_scripts` ein Array ist, können Sie damit mehr als ein Skript in übereinstimmende Seiten injizieren. Wenn Sie dies tun, teilen die Seiten denselben Geltungsbereich, genau wie mehrere Skripte, die von einer Seite geladen sind, und sie werden in der Reihenfolge geladen, in der sie im Array aufgeführt sind.

> [!NOTE]
> Der `content_scripts` Schlüssel hat auch eine `"css"`-Eigenschaft, mit der Sie CSS-Stylesheets injizieren können.

Erstellen Sie als nächstes eine Datei namens "page-eater.js" innerhalb des Verzeichnisses "modify-page" und fügen Sie den folgenden Inhalt ein:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Nun [installieren Sie die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![developer.mozilla.org Seite "gegessen" vom Skript](eaten_page.png)

## Seiten programmgesteuert modifizieren

Was ist, wenn Sie trotzdem Seiten "essen" möchten, aber nur, wenn der Benutzer Sie dazu auffordert? Aktualisieren wir dieses Beispiel, sodass wir das Content-Skript injizieren, wenn der Benutzer einen Kontextmenüpunkt anklickt.

Aktualisieren Sie zunächst "manifest.json", damit es den folgenden Inhalt hat:

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

Hier haben wir den `content_scripts` Schlüssel entfernt und zwei neue Schlüssel hinzugefügt:

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten zu injizieren, benötigen wir Berechtigungen für die Seite, die wir modifizieren. Die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) ist eine Möglichkeit, diese temporär für den aktuell aktiven Tab zu erhalten. Wir benötigen auch die `contextMenus` Berechtigung, um Kontextmenüeinträge hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein persistentes ["Background Script"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Content-Skript injizieren werden.

Lassen Sie uns diese Datei erstellen. Erstellen Sie eine neue Datei namens `background.js` im Verzeichnis `modify-page` und fügen Sie den folgenden Inhalt ein:

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

In diesem Skript erstellen wir einen [Kontextmenüeintrag](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create), vergeben ihm eine spezifische ID und einen Titel (der Text, der im Kontextmenü angezeigt wird). Dann richten wir einen Event-Listener ein, sodass, wenn der Benutzer einen Kontextmenüpunkt anklickt, wir prüfen, ob es sich um unseren `eat-page` Eintrag handelt. Wenn ja, injizieren wir "page-eater.js" in den aktuellen Tab mit der [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Diese API nimmt optional eine Tab-ID als Argument: wir haben die Tab-ID weggelassen, was bedeutet, dass das Skript in den aktuell aktiven Tab injiziert wird.

An diesem Punkt sollte die Erweiterung so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Nun [laden Sie die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (diesmal irgendeine Seite), aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option eine Seite im Kontextmenü zu essen](eat_from_menu.png)

## Nachrichtenübermittlung

Content-Skripte und Hintergrund-Skripte können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch kommunizieren, indem sie Nachrichten senden. Ein Ende richtet einen Nachrichten-Listener ein, und das andere Ende kann ihm dann eine Nachricht senden. Die folgende Tabelle fasst die auf jeder Seite verwendeten APIs zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content-Skript</th>
      <th scope="col">Im Background-Skript</th>
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
> Zusätzlich zu dieser Methode der Kommunikation, die Einmalnachrichten sendet, können Sie auch einen [Verbindungsansatz zum Austausch von Nachrichten verwenden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging). Für Ratschläge zur Auswahl zwischen den Optionen siehe [Wahl zwischen Einmalnachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Lassen Sie uns unser Beispiel aktualisieren, um zu zeigen, wie man eine Nachricht vom Background-Skript sendet.

Bearbeiten Sie zuerst `background.js`, sodass es folgenden Inhalt hat:

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

Jetzt verwenden wir nach dem Injizieren von `page-eater.js` [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den derzeit aktiven Tab zu erhalten, und anschließend [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), um eine Nachricht an die in diesen Tab geladenen Content-Skripte zu senden. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

Aktualisieren Sie als nächstes `page-eater.js` wie folgt:

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  let header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

Jetzt hört das Content-Skript, anstatt die Seite sofort zu "essen", auf eine Nachricht mit [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wenn eine Nachricht eintrifft, führt das Content-Skript im Wesentlichen denselben Code wie zuvor aus, außer dass der Ersetzungstext aus `request.replacement` stammt.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist und um sicherzustellen, dass wir die Nachricht nur senden, nachdem der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das nach der Ausführung von `page-eater.js` aufgerufen wird.

> [!NOTE]
> Drücken Sie <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> (oder <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen und `console.log` im Hintergrundskript anzuzeigen.
>
> Alternativ verwenden Sie den [Add-on Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger), der es Ihnen ermöglicht, Breakpoints zu setzen. Es gibt derzeit keine Möglichkeit, den [Add-on Debugger direkt von web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten vom Content-Skript zurück zur Hintergrundseite senden möchten, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, z.B.:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können auch CSS programmatisch mithilfe der [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) Funktion injizieren.

## Erfahren Sie mehr

- [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) Leitfaden
- [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest Schlüssel
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Manifest Schlüssel
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
