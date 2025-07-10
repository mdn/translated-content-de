---
title: Eine Webseite ändern
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{AddonSidebar}}

Ein häufiger Anwendungsfall für eine Erweiterung ist die Modifikation einer Webseite. Zum Beispiel möchte eine Erweiterung möglicherweise den auf eine Seite angewendeten Stil ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen.

Es gibt zwei Möglichkeiten, dies mit den WebExtensions-APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das eine Menge von URLs abgleicht, und laden Sie eine Reihe von Skripten in Seiten, deren URL diesem Muster entspricht.
- **Programmgesteuert**: Verwenden Sie eine JavaScript-API, um ein Skript in die Seite zu laden, die von einem bestimmten Tab gehostet wird.

In beiden Fällen werden diese Skripte _Content-Scripts_ genannt und unterscheiden sich von den anderen Skripten, die eine Erweiterung ausmachen:

- Sie haben nur Zugriff auf eine kleine Teilmenge der WebExtension-APIs.
- Sie haben direkten Zugriff auf die Webseite, in die sie geladen werden.
- Sie kommunizieren mit dem Rest der Erweiterung über eine Messaging-API.

In diesem Artikel betrachten wir beide Methoden zum Laden eines Skripts.

## Seiten ändern, die einem URL-Muster entsprechen

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

Der [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)-Schlüssel dient dazu, Skripte in Seiten zu laden, die URL-Mustern entsprechen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens "page-eater.js" in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die `"js"` Eigenschaft von `content_scripts` ein Array ist, können Sie damit mehr als ein Skript in übereinstimmende Seiten einfügen. Wenn Sie dies tun, teilen die Seiten denselben Gültigkeitsbereich, genauso wie mehrere Skripte, die von einer Seite geladen werden, und sie werden in der Reihenfolge geladen, in der sie im Array aufgeführt sind.

> [!NOTE]
> Der `content_scripts` Schlüssel verfügt auch über eine `"css"` Eigenschaft, die Sie verwenden können, um CSS-Stylesheets einzufügen.

Erstellen Sie als nächstes eine Datei namens "page-eater.js" im Verzeichnis "modify-page" und geben Sie ihr den folgenden Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![developer.mozilla.org Seite "gefressen" vom Skript](eaten_page.png)

## Seiten programmgesteuert ändern

Was ist, wenn Sie Seiten nur fressen möchten, wenn der Benutzer Sie dazu auffordert? Aktualisieren wir dieses Beispiel, sodass wir das Content-Script injizieren, wenn der Benutzer auf ein Kontextmenü-Element klickt.

Aktualisieren Sie zuerst "manifest.json", sodass es folgenden Inhalt hat:

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

Wir haben hier den `content_scripts` Schlüssel entfernt und zwei neue Schlüssel hinzugefügt:

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten einzufügen, benötigen wir Berechtigungen für die Seite, die wir ändern. Die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) ist eine Möglichkeit, dies vorübergehend für den aktuell aktiven Tab zu erlangen. Wir benötigen auch die `contextMenus` Berechtigung, um Kontextmenü-Elemente hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein persistentes ["Hintergrund-Skript"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Content-Script injizieren.

Erstellen wir diese Datei. Erstellen Sie eine neue Datei namens `background.js` im `modify-page` Verzeichnis und geben Sie ihr folgenden Inhalt:

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

In diesem Skript erstellen wir ein [Kontextmenü-Element](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create) und geben ihm eine spezifische ID und einen Titel (den Text, der im Kontextmenü angezeigt werden soll). Dann richten wir einen Event-Listener ein, sodass wenn der Benutzer ein Kontextmenü-Element anklickt, wir überprüfen, ob es unser `eat-page` Element ist. Wenn ja, injizieren wir "page-eater.js" in den aktuellen Tab mithilfe der [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Diese API nimmt optional eine Tab-ID als Argument: wir haben die Tab-ID weggelassen, was bedeutet, dass das Skript in den derzeit aktiven Tab injiziert wird.

An diesem Punkt sollte die Erweiterung so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Laden Sie nun [die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (diesmal beliebige Seiten), aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option, eine Seite im Kontextmenü zu fressen](eat_from_menu.png)

## Messaging

Content-Skripte und Hintergrund-Skripte können nicht direkt auf den Zustand des anderen zugreifen. Sie können jedoch kommunizieren, indem sie Nachrichten senden. Eine Seite richtet einen Nachrichten-Listener ein und die andere Seite kann ihr dann eine Nachricht senden. Die folgende Tabelle fasst die beteiligten APIs auf jeder Seite zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content-Script</th>
      <th scope="col">Im Hintergrund-Skript</th>
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
> Zusätzlich zu dieser Kommunikationsmethode, die einmalige Nachrichten sendet, können Sie auch einen [verbindungsbasierten Ansatz für den Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Für Ratschläge zur Auswahl zwischen den Optionen siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Aktualisieren wir unser Beispiel, um zu zeigen, wie man eine Nachricht vom Hintergrund-Skript sendet.

Bearbeiten Sie zunächst `background.js`, damit es diesen Inhalt hat:

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

Nachdem wir nun `page-eater.js` injiziert haben, verwenden wir [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den derzeit aktiven Tab zu erhalten und dann [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) zu verwenden, um eine Nachricht an die in diesem Tab geladenen Content-Skripte zu senden. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

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

Anstatt die Seite direkt zu "fressen", wartet das Content-Skript auf eine Nachricht mit [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wenn eine Nachricht ankommt, führt das Content-Skript im Wesentlichen denselben Code wie zuvor aus, außer dass der Ersetzungstext aus `request.replacement` entnommen wird.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist und um sicherzustellen, dass wir Nachrichten nur senden, nachdem der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das nach der Ausführung von `page-eater.js` aufgerufen wird.

> [!NOTE]
> Drücken Sie <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> (oder <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen und `console.log` im Hintergrund-Skript anzuzeigen.
>
> Alternativ verwenden Sie das [Add-on-Debugger](https://extensionworkshop.com/documentation/develop/debugging/), das es Ihnen ermöglicht, einen Haltepunkt zu setzen. Es gibt derzeit keine Möglichkeit, das [Add-on-Debugger direkt aus web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten zurück vom Content-Skript an die Hintergrund-Seite senden wollen, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, z.B.:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können jedoch auch CSS programmgesteuert mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) einfügen.

## Mehr erfahren

- [Content-Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) Leitfaden
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
