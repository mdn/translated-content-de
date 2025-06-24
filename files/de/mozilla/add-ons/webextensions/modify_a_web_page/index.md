---
title: Eine Webseite modifizieren
slug: Mozilla/Add-ons/WebExtensions/Modify_a_web_page
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Eine der häufigsten Anwendungsfälle für eine Erweiterung ist die Modifikation einer Webseite. Zum Beispiel könnte eine Erweiterung den Stil einer Seite ändern, bestimmte DOM-Knoten verbergen oder zusätzliche DOM-Knoten in die Seite einfügen wollen.

Es gibt zwei Möglichkeiten, dies mit WebExtensions-APIs zu tun:

- **Deklarativ**: Definieren Sie ein Muster, das eine Gruppe von URLs abgleicht, und laden Sie eine Gruppe von Skripten in Seiten, deren URL diesem Muster entspricht.
- **Programmgesteuert**: Verwenden Sie eine JavaScript-API, um ein Skript in die Seite zu laden, die von einem bestimmten Tab gehostet wird.

In beiden Fällen werden diese Skripte _Content-Skripte_ genannt und unterscheiden sich von den anderen Skripten, die eine Erweiterung ausmachen:

- Sie haben nur Zugriff auf einen kleinen Teil der WebExtension-APIs.
- Sie haben direkten Zugriff auf die Webseite, in die sie geladen werden.
- Sie kommunizieren mit dem Rest der Erweiterung über eine Nachrichtenschnittstelle.

In diesem Artikel betrachten wir beide Methoden, um ein Skript zu laden.

## Seiten modifizieren, die einem URL-Muster entsprechen

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

Der Schlüssel [`content_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) gibt an, wie Sie Skripte in Seiten laden, die URL-Mustern entsprechen. In diesem Fall weist `content_scripts` den Browser an, ein Skript namens "page-eater.js" in alle Seiten unter [https://developer.mozilla.org/](/) zu laden.

> [!NOTE]
> Da die `"js"`-Eigenschaft von `content_scripts` ein Array ist, können Sie es verwenden, um mehr als ein Skript in passende Seiten zu injizieren. Wenn Sie dies tun, teilen die Seiten denselben Gültigkeitsbereich, genauso wie mehrere Skripte, die von einer Seite geladen werden, und sie werden in der Reihenfolge geladen, in der sie im Array aufgelistet sind.

> [!NOTE]
> Der Schlüssel `content_scripts` hat auch eine `"css"`-Eigenschaft, mit der Sie CSS-Stylesheets injizieren können.

Erstellen Sie als Nächstes eine Datei namens "page-eater.js" im Verzeichnis "modify-page" und geben Sie ihr den folgenden Inhalt:

```js
document.body.textContent = "";

let header = document.createElement("h1");
header.textContent = "This page has been eaten";
document.body.appendChild(header);
```

Installieren Sie nun [die Erweiterung](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/), und besuchen Sie [https://developer.mozilla.org/](/). Die Seite sollte so aussehen:

![developer.mozilla.org Seite, "verschlungen" durch das Skript](eaten_page.png)

## Seiten programmgesteuert modifizieren

Was ist, wenn Sie die Seiten nur "verschlingen" wollen, wenn der Benutzer Sie darum bittet? Lassen Sie uns dieses Beispiel aktualisieren, sodass wir das Content-Skript injizieren, wenn der Benutzer auf einen Kontextmenüeintrag klickt.

Ändern Sie zunächst "manifest.json" so, dass es den folgenden Inhalt hat:

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

- [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions): Um Skripte in Seiten zu injizieren, benötigen wir Berechtigungen für die Seite, die wir modifizieren. Die [`activeTab` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) ist eine Möglichkeit, diese temporär für den derzeit aktiven Tab zu erhalten. Wir benötigen außerdem die Berechtigung `contextMenus`, um Kontextmenüeinträge hinzufügen zu können.
- [`background`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background): Wir verwenden dies, um ein persistentes ["Hintergrundskript"](/de/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts) namens `background.js` zu laden, in dem wir das Kontextmenü einrichten und das Content-Skript injizieren werden.

Erstellen Sie nun diese Datei. Erstellen Sie eine neue Datei namens `background.js` im Verzeichnis `modify-page` und geben Sie ihr den folgenden Inhalt:

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

In diesem Skript erstellen wir einen [Kontextmenüeintrag](/de/docs/Mozilla/Add-ons/WebExtensions/API/menus/create), geben ihm eine spezifische ID und einen Titel (der Text, der im Kontextmenü angezeigt wird). Dann richten wir einen Ereignislistener ein, der prüft, ob es sich um unseren `eat-page` Eintrag handelt, wenn der Benutzer einen Kontextmenüeintrag anklickt. Wenn dies der Fall ist, injizieren wir "page-eater.js" in den aktuellen Tab mithilfe der [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) API. Diese API nimmt optional eine Tab-ID als Argument: Wir haben die Tab-ID weggelassen, was bedeutet, dass das Skript in den derzeit aktiven Tab injiziert wird.

An diesem Punkt sollte die Erweiterung so aussehen:

```plain
modify-page/
    background.js
    manifest.json
    page-eater.js
```

Laden Sie jetzt [die Erweiterung neu](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/#reloading_a_temporary_add-on), öffnen Sie eine Seite (diesmal beliebige Seite), aktivieren Sie das Kontextmenü und wählen Sie "Eat this page":

![Option zum Verschlingen einer Seite im Kontextmenü](eat_from_menu.png)

## Nachrichtenübermittlung

Content-Skripte und Hintergrundskripte können nicht direkt auf den Zustand des jeweils anderen zugreifen. Sie können jedoch kommunizieren, indem sie Nachrichten senden. Ein Ende richtet einen Nachrichtenlistener ein, und das andere Ende kann ihm dann eine Nachricht senden. Die folgende Tabelle fasst die auf jeder Seite beteiligten APIs zusammen:

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
> Zusätzlich zu dieser Kommunikationsmethode, die Einzelnachrichten sendet, können Sie auch einen [verbindungsbasierten Ansatz zum Nachrichtenversand](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#connection-based_messaging) verwenden. Für Ratschläge zur Auswahl zwischen den Optionen siehe [Choosing between one-off messages and connection-based messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).

Lassen Sie uns unser Beispiel aktualisieren, um zu zeigen, wie man eine Nachricht vom Hintergrundskript sendet.

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

Nun, nach dem Injektieren von `page-eater.js`, verwenden wir [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), um den derzeit aktiven Tab zu erhalten, und verwenden dann [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), um eine Nachricht an die Content-Skripte zu senden, die in diesen Tab geladen sind. Die Nachricht hat die Nutzlast `{replacement: "Message from the extension!"}`.

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

Anstatt die Seite sofort zu verschlingen, wartet das Content-Skript nun auf eine Nachricht über [`runtime.onMessage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage). Wenn eine Nachricht eintrifft, führt das Content-Skript im Wesentlichen denselben Code wie zuvor aus, außer dass der Ersetzungstext von `request.replacement` stammt.

Da [`tabs.executeScript()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) eine asynchrone Funktion ist, und um sicherzustellen, dass wir die Nachricht nur senden, nachdem der Listener in `page-eater.js` hinzugefügt wurde, verwenden wir `onExecuted()`, das aufgerufen wird, nachdem `page-eater.js` ausgeführt wurde.

> [!NOTE]
> Drücken Sie <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> (oder <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>J</kbd> auf macOS) ODER `web-ext run --bc`, um die [Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) zu öffnen, um `console.log` im Hintergrundskript anzuzeigen.
>
> Alternativ können Sie den [Add-on-Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger) verwenden, mit dem Sie einen Haltepunkt setzen können. Es gibt derzeit keine Möglichkeit, den [Add-on-Debugger direkt von web-ext zu starten](https://github.com/mozilla/web-ext/issues/759).

Wenn wir Nachrichten vom Content-Skript an die Hintergrundseite zurücksenden möchten, würden wir [`runtime.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) anstelle von [`tabs.sendMessage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) verwenden, z.B.:

```js
browser.runtime.sendMessage({
  title: "from page-eater.js",
});
```

> [!NOTE]
> Diese Beispiele injizieren alle JavaScript; Sie können auch CSS programmgesteuert mit der Funktion [`tabs.insertCSS()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS) injizieren.

## Mehr erfahren

- [Leitfaden zu Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
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
