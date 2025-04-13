---
title: Ändern einer Webseite
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 5c5ee35d66ac24bc6513c14f120750c74d779d20
---

{{AddonSidebar}}

Ein häufiges Anwendungsbeispiel für eine Erweiterung ist das Ändern einer Webseite. Zum Beispiel könnte eine Erweiterung den Stil einer Seite ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen wollen.

Es gibt zwei Möglichkeiten, dies mit den WebExtensions-APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das auf eine Reihe von URLs zutrifft, und laden Sie eine Reihe von Skripten in Seiten, deren URL mit diesem Muster übereinstimmt.
- **Programmgesteuert**: Laden Sie ein Skript mit einer JavaScript-API in die Seite, die von einem bestimmten Tab gehostet wird.

In beiden Fällen werden diese Skripte _Content-Skripte_ genannt und unterscheiden sich von den anderen Skripten, die eine Erweiterung ausmachen:

- Sie haben nur Zugriff auf einen kleinen Teil der WebExtension-APIs.
- Sie haben direkten Zugriff auf die Webseite, in die sie geladen werden.
- Sie kommunizieren mit dem Rest der Erweiterung über eine Messaging-API.

In diesem Artikel werden wir uns beide Methoden zum Laden eines Skripts ansehen.

## Seiten ändern, die mit einem URL-Muster übereinstimmen

Erstellen Sie zunächst ein neues Verzeichnis mit dem Namen "modify-page". Erstellen Sie in diesem Verzeichnis eine Datei namens "manifest.json" mit folgendem Inhalt:

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

Der Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) ist die Methode, um Skripte in Seiten zu laden, die mit URL-Mustern übereinstimmen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens "page-eater.js" in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die `"js"`-Eigenschaft von `content_scripts` ein Array ist, können Sie es verwenden, um mehr als ein Skript in passende Seiten einzufügen. Wenn Sie dies tun, teilen sich die Seiten denselben Gültigkeitsbereich, genau wie mehrere Skripte, die von einer Seite geladen werden, und sie werden in der Reihenfolge geladen, in der sie im Array aufgelistet sind.

> [!NOTE]
> Der Schlüssel `content_scripts` verfügt auch über eine `"css"`-Eigenschaft, die Sie verwenden können, um CSS-Stylesheets einzufügen.

Erstellen Sie als nächstes eine Datei namens "page-eater.js" im Verzeichnis "modify-page" und geben Sie ihr folgenden Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Installieren Sie nun die [Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![Seite developer.mozilla.org "gefressen" vom Skript](eaten_page.png)

## Seiten programmgesteuert ändern

Was, wenn Sie Seiten nur dann "fressen" wollen, wenn der Benutzer Sie dazu auffordert? Aktualisieren wir dieses Beispiel so, dass wir das Content-Skript einfügen, wenn der Benutzer auf ein Kontextmenüelement klickt.

Aktualisieren Sie zuerst "manifest.json", sodass es den folgenden Inhalt hat:

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

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten einzufügen, benötigen wir Berechtigungen für die Seite, die wir ändern. Die Berechtigung [`activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) ist eine Möglichkeit, diese vorübergehend für den aktuell aktiven Tab zu erhalten. Außerdem benötigen wir die Berechtigung `contextMenus`, um Kontextmenüelemente hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein persistentes ["Background-Skript"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Content-Skript einfügen werden.

Lassen Sie uns diese Datei erstellen. Erstellen Sie eine neue Datei namens `background.js` im Verzeichnis `modify-page` und geben Sie ihr den folgenden Inhalt:

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

In diesem Skript erstellen wir ein [Kontextmenüelement](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create), geben ihm eine spezifische ID und einen Titel (den Text, der im Kontextmenü angezeigt werden soll). Dann richten wir einen Event-Listener ein, sodass wir, wenn der Benutzer auf ein Kontextmenüelement klickt, überprüfen, ob es unser `eat-page`-Element ist. Wenn dies der Fall ist, fügen wir "page-eater.js" in den aktuellen Tab mithilfe der API [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) ein. Diese API benötigt optional eine Tab-ID als Argument: Da wir die Tab-ID weggelassen haben, wird das Skript in den aktuell aktiven Tab eingefügt.

An diesem Punkt sollte die Erweiterung so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Laden Sie jetzt die [Erweiterung erneut](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (diesmal jede beliebige Seite), aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option, um eine Seite im Kontextmenü zu fressen](eat_from_menu.png)

## Messaging

Content-Skripte und Hintergrundskripte können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch kommunizieren, indem sie Nachrichten senden. Ein Ende richtet einen Nachrichten-Listener ein und das andere Ende kann ihm dann eine Nachricht senden. Die folgende Tabelle fasst die auf jeder Seite beteiligten APIs zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Content-Skript</th>
      <th scope="col">Im Hintergrundskript</th>
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
> Zusätzlich zu dieser Kommunikationsmethode, die Einzelmitteilungen sendet, können Sie auch einen [Verbindungsbasierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Für Ratschläge zur Auswahl zwischen den Optionen siehe [Auswahl zwischen Einzelmitteilungen und verbindungsbasierter Kommunikation](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Lassen Sie uns unser Beispiel aktualisieren, um zu zeigen, wie man eine Nachricht von dem Hintergrundskript sendet.

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

Nun verwenden wir nach dem Einfügen von `page-eater.js` [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den aktuell aktiven Tab zu erhalten, und anschließend [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), um eine Nachricht an die Content-Skripte zu senden, die in diesen Tab geladen sind. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

Aktualisieren Sie als nächstes `page-eater.js` folgendermaßen:

```js
function eatPageReceiver(request, sender, sendResponse) {
  document.body.textContent = "";
  let header = document.createElement("h1");
  header.textContent = request.replacement;
  document.body.appendChild(header);
}
browser.runtime.onMessage.addListener(eatPageReceiver);
```

Jetzt, anstatt die Seite sofort zu fressen, hört das Content-Skript auf eine Nachricht mittels [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wenn eine Nachricht ankommt, führt das Content-Skript im Wesentlichen denselben Code wie zuvor aus, außer dass der Ersetzungstext von `request.replacement` übernommen wird.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist, und um sicherzustellen, dass wir die Nachricht nur senden, nachdem der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das nach der Ausführung von `page-eater.js` aufgerufen wird.

> [!NOTE]
> Drücken Sie <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> (oder <kbd>Befehl</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen und `console.log` im Hintergrundskript anzuzeigen.
>
> Alternativ können Sie den [Add-on-Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger) verwenden, der es Ihnen ermöglicht, Haltepunkte festzulegen. Es gibt derzeit keine Möglichkeit, [den Add-on-Debugger direkt über web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten zurück vom Content-Skript zur Hintergrundseite senden wollen, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, z.B.:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können auch CSS programmgesteuert mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) einfügen.

## Erfahren Sie mehr

- [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) Leitfaden
- [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Manifest-Schlüssel
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Manifest-Schlüssel
- [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript)
- [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage)
- [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage)
- [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)
- Beispiele, die `content_scripts` verwenden:

  - [borderify](https://github.com/mdn/webextensions-examples/tree/main/borderify)
  - [emoji-substitution](https://github.com/mdn/webextensions-examples/tree/main/emoji-substitution)
  - [notify-link-clicks-i18n](https://github.com/mdn/webextensions-examples/tree/main/notify-link-clicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-examples/tree/main/page-to-extension-messaging)

- Beispiele, die `tabs.executeScript()` verwenden:

  - [beastify](https://github.com/mdn/webextensions-examples/tree/main/beastify)
  - [context-menu-copy-link-with-types](https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types)
