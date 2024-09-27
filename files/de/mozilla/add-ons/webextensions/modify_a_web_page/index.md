---
title: Ändern einer Webseite
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Eine der häufigsten Anwendungen für eine Erweiterung ist das Ändern einer Webseite. Zum Beispiel könnte eine Erweiterung den Stil einer Seite ändern, bestimmte DOM-Knoten ausblenden oder zusätzliche DOM-Knoten in die Seite einfügen wollen.

Es gibt zwei Möglichkeiten, dies mit den WebExtensions-APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das eine Reihe von URLs abgleicht, und laden Sie eine Reihe von Skripten in Seiten, deren URL diesem Muster entspricht.
- **Programmgesteuert**: Verwenden Sie eine JavaScript-API, um ein Skript in die Seite zu laden, die von einem bestimmten Tab gehostet wird.

In beiden Fällen werden diese Skripte als _Inhalts-Skripte_ bezeichnet und unterscheiden sich von den anderen Skripten, die eine Erweiterung ausmachen:

- Sie haben nur Zugriff auf einen kleinen Teil der WebExtension-APIs.
- Sie haben direkten Zugriff auf die Webseite, in die sie geladen sind.
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

Der [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) Schlüssel wird verwendet, um Skripte in Seiten zu laden, die URL-Mustern entsprechen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens "page-eater.js" in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die Eigenschaft `"js"` von `content_scripts` ein Array ist, können Sie sie verwenden, um mehr als ein Skript in passende Seiten einzufügen. In diesem Fall teilen sich die Seiten denselben Gültigkeitsbereich, genau wie mehrere vom Benutzer geladene Skripte, und sie werden in der Reihenfolge geladen, in der sie im Array aufgeführt sind.

> [!NOTE]
> Der `content_scripts` Schlüssel hat auch eine `"css"` Eigenschaft, die Sie verwenden können, um CSS Stylesheets einzufügen.

Erstellen Sie nun eine Datei namens "page-eater.js" im "modify-page" Verzeichnis und geben Sie ihr den folgenden Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![developer.mozilla.org Seite "verschlungen" vom Skript](eaten_page.png)

## Seiten programmgesteuert ändern

Was, wenn Sie Seiten nur dann verschlingen wollen, wenn der Benutzer Sie darum bittet? Lassen Sie uns dieses Beispiel aktualisieren, damit wir das Inhalts-Skript nur laden, wenn der Benutzer auf ein Kontextmenüelement klickt.

Aktualisieren Sie zunächst "manifest.json", sodass es folgenden Inhalt hat:

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

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten einzufügen, benötigen wir Berechtigungen für die Seite, die wir ändern. Die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) ist eine Möglichkeit, diese vorübergehend für den aktuell aktiven Tab zu erhalten. Wir benötigen auch die `contextMenus` Berechtigung, um Kontextmenüelemente hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein dauerhaftes ["Hintergrund-Skript"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Inhalts-Skript einfügen.

Lassen Sie uns diese Datei erstellen. Erstellen Sie eine neue Datei namens `background.js` im `modify-page` Verzeichnis und geben Sie ihr den folgenden Inhalt:

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

In diesem Skript erstellen wir ein [Kontextmenüelement](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create), geben ihm eine spezifische ID und einen Titel (den Text, der im Kontextmenü angezeigt werden soll). Dann richten wir einen Ereignis-Listener ein, sodass wenn der Benutzer auf ein Kontextmenüelement klickt, wir überprüfen, ob es unser `eat-page` Element ist. Wenn dem so ist, fügen wir "page-eater.js" in den aktuellen Tab mit der API [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) ein. Diese API nimmt optional eine Tab-ID als Argument: Wir haben die Tab-ID weggelassen, was bedeutet, dass das Skript in den derzeit aktiven Tab eingefügt wird.

Zu diesem Zeitpunkt sollte die Erweiterung so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Laden Sie nun [die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (diesmal beliebig), aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option, um eine Seite im Kontextmenü zu verschlingen](eat_from_menu.png)

## Messaging

Inhalts-Skripte und Hintergrund-Skripte können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch kommunizieren, indem sie Nachrichten senden. Ein Ende richtet einen Nachrichten-Listener ein, und das andere Ende kann ihm dann eine Nachricht senden. Die folgende Tabelle fasst die beteiligten APIs auf jeder Seite zusammen:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="row"></th>
      <th scope="col">Im Inhalts-Skript</th>
      <th scope="col">Im Hintergrund-Skript</th>
    </tr>
    <tr>
      <th scope="row">Nachricht senden</th>
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
            href="/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime#onmessage"
            >browser.runtime.onMessage</a
          ></code
        >
      </td>
    </tr>
  </thead>
</table>

> [!NOTE]
> Zusätzlich zu dieser Methode der Kommunikation, die einmalige Nachrichten sendet, können Sie auch einen [Verbindungs-basierten Ansatz zum Nachrichtenaustausch](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Für Ratschläge zur Auswahl zwischen den Optionen siehe [Choosing between one-off messages and connection-based messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Lassen Sie uns unser Beispiel aktualisieren, um zu zeigen, wie man eine Nachricht vom Hintergrund-Skript sendet.

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

Jetzt verwenden wir nach dem Einfügen von `page-eater.js` [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den aktuell aktiven Tab zu erhalten, und dann verwenden wir [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), um eine Nachricht an die Inhalts-Skripte zu senden, die in diesen Tab geladen sind. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

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

Nun, anstatt die Seite sofort zu verschlingen, hört das Inhalts-Skript auf eine Nachricht, indem es [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage) verwendet. Wenn eine Nachricht eintrifft, führt das Inhalts-Skript im Wesentlichen denselben Code aus wie zuvor, außer dass der Ersetzungstext aus `request.replacement` entnommen wird.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist und um sicherzustellen, dass wir die Nachricht erst senden, wenn der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das aufgerufen wird, nachdem `page-eater.js` ausgeführt wurde.

> [!NOTE]
> Drücken Sie <kbd>Strg</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> (oder <kbd>Cmd</kbd>+<kbd>Umschalt</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen, um `console.log` im Hintergrund-Skript anzuzeigen.
>
> Alternativ verwenden Sie [Add-on Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger), der es Ihnen erlaubt, Breakpoints zu setzen. Derzeit gibt es keine Möglichkeit, [Add-on Debugger direkt von web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten vom Inhalts-Skript zurück zur Hintergrundseite senden wollen, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, z.B.:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können auch CSS programmatisch mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) einfügen.

## Mehr erfahren

- [Leitfaden für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) manifest Schlüssel
- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) manifest Schlüssel
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
