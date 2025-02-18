---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten mit dem Internet unter Verwendung mehrerer Identitäten interagieren. Sie können Konten für webbasierte Arbeit und persönliche E-Mail haben. Sie könnten sich von ihren sozialen Medienkonten abmelden, bevor sie Online-Shopping-Seiten besuchen, um sicherzustellen, dass keine Tracking-Skripte auf den Shopping-Seiten ihre sozialen Medienaktivitäten erfassen können. Benutzer verwenden oft ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diese Anforderungen zu erfüllen.

Um diesen Bedarf zu decken, beinhaltet Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Account-Container bekannt ist. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speichers) für jede der Identitäten, die der Benutzer im Browser verwenden möchte. Tabs können mit einer dieser Identitäten verknüpft werden, wodurch Cookies von anderen Identitäten im Browser getrennt werden. Der praktische Nutzen davon ist zum Beispiel, dass ein Benutzer eine persönliche und eine berufliche Identität haben könnte. So kann er beispielsweise die persönliche Identität in einem Tab verwenden, um sich bei seinem persönlichen Webmail anzumelden, und die berufliche Identität in einem anderen Tab, um sich bei seinem beruflichen Webmail anzumelden.

Weitere Hintergrundinformationen zu dieser Funktion finden Sie hier:

- [Verwalten Sie Ihre multiplen Online-Persönlichkeiten mit Firefox Multi-Account Containers](https://blog.mozilla.org/en/products/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox-Hilfeseite zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs für die Arbeit mit kontextuellen Identitäten

Je nach Art Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die von Ihrer Erweiterung manipuliert werden, mit kontextuellen Identitäten verknüpfen oder beides.

### Verwaltung von kontextuellen Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}}-API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, wird ihr eine eindeutige `cookieStoreId` zugewiesen. Diese ID verwenden Sie, um mit Entitäten zu arbeiten, die mit der kontextuellen Identität verbunden sind.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs umfassen die `cookieStoreId` in Objekten, damit Erweiterungen diese Objekte mit bestimmten kontextuellen Identitäten verknüpfen können.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchem Cookie-Store Elemente entfernt werden.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Content Script zu registrieren, das auf Dokumente beschränkt ist, die mit einer oder mehreren `cookieStoreIds` verbunden sind.
- {{WebExtAPIRef("downloads")}}, wo Sie einen Download mit einem Cookie-Store verknüpfen können.
- {{WebExtAPIRef("proxy")}}, bei dem die Details, die an den {{WebExtAPIRef("proxy.onRequest")}}-Listener übergeben werden, den Cookie-Store identifizieren, der mit der Anfrage verbunden ist.
- {{WebExtAPIRef("tabs")}}, bei dem Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` für einen Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem zugeordneten Cookie-Store {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (nur Legacy-Version, Manifest V2) ermöglicht es Ihnen, ein Content Script zu registrieren, das auf Dokumente beschränkt ist, die mit einer oder mehreren `cookieStoreIds` verbunden sind.
- {{WebExtAPIRef("webRequest")}}, bei dem alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, bei der Sie den Cookie-Store für die Tabs angeben können, die einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}}-API zu verwenden, müssen Sie die Berechtigung "contextualIdentities" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei hinzufügen.

Wenn eine API die Änderung von Cookies ermöglicht, benötigen Sie die Berechtigung "cookies". Beispielsweise erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} keine "cookies"-Berechtigung, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispiel-Durchlauf

Das Beispiel einer Erweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) stellt eine Symbolleisten-Schaltfläche mit einem Popup bereit, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um einen Tab mit dessen Cookie-Container zu erstellen oder alle Tabs dieser Identität zu schließen.

Hier ist ein kurzes Video, das die Erweiterung in Aktion zeigt:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json)-Datei sind:

- die Anforderung von Berechtigungen:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- Beschreibung der Symbolleisten-Schaltfläche (browserAction), die Zugriff auf die Funktionen der Erweiterung bietet:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Symbolleisten-Schaltfläche liefert die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, es dient jedoch lediglich als Shell, in die das Skript context.js die Liste der kontextuellen Identitäten und deren zugehörigen Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das immer dann aufgerufen wird, wenn das Symbolleisten-Popup angezeigt wird.

Das Skript ruft zunächst die 'identity-list'-`<div>` aus context.html ab.

```js
let div = document.getElementById("identity-list");
```

Danach überprüft es, ob die Funktion für kontextuelle Identitäten im Browser aktiviert ist. Wenn nicht, wird dem Popup eine Information hinzugefügt, wie sie aktiviert werden kann.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox wird standardmäßig mit deaktivierter Funktion für kontextuelle Identitäten installiert. Sie wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities`-API nutzt, installiert wird. Der Benutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, weshalb die Überprüfung notwendig ist.

Nun verwendet das Skript {{WebExtAPIRef("contextualIdentities.query.")}}, um festzustellen, ob im Browser kontextuelle Identitäten definiert sind. Wenn keine vorhanden sind, wird eine Nachricht zum Popup hinzugefügt, und das Skript wird gestoppt.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

Wenn kontextuelle Identitäten vorhanden sind – Firefox kommt mit vier Standard-Identitäten – durchläuft das Skript jede davon und fügt ihren Namen, formatiert in der entsprechenden Farbe, dem `<div>`-Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" zum `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

```js
     for (const identity of identities) {
       const row = document.createElement('div');
       const span = document.createElement('span');
       span.className = 'identity';
       span.innerText = identity.name;
       span.style = `color: ${identity.color}`;
       console.log(identity);
       row.appendChild(span);
       createOptions(row, identity);
       div.appendChild(row);
     }
  });
}

function createOptions(node, identity) {
  for (const option of ['Create', 'Close All']) {
    const a = document.createElement('a');
    a.href = '#';
    a.innerText = option;
    a.dataset.action = option.toLowerCase().replace(' ', '-');
    a.dataset.identity = identity.cookieStoreId;
    a.addEventListener('click', eventHandler);
    node.appendChild(a);
  }
}
```

Das Skript wartet jetzt, dass der Benutzer eine Option im Popup auswählt.

```js
function eventHandler(event) {
```

Wenn der Benutzer die Option anklickt, einen Tab für eine Identität zu erstellen, wird einer mithilfe von {{WebExtAPIRef("tabs.create")}} erstellt, indem die `cookieStoreId` der Identität übergeben wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript ein {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs mit dem Cookie-Store der Identität zu erhalten. Diese Liste von Tabs wird dann an {{WebExtAPIRef("tabs.remove")}} übergeben.

```js
  if (event.target.dataset.action === 'close-all') {
    browser.tabs.query({
      cookieStoreId: event.target.dataset.identity
    }).then((tabs) => {
      browser.tabs.remove(tabs.map((i) => i.id));
    });
  }
  event.preventDefault();
}
```

## Mehr erfahren

Wenn Sie mehr über die `contextualIdentities`-API erfahren möchten, schauen Sie hier vorbei:

- [API-Referenz für contextualIdentities](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Source-Code der Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme)-Erweiterung. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)-Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionalitäten für kontextuelle Identitäten, wie die Möglichkeit, die Schaltfläche für neue Tabs lange zu drücken und dann die Identität für den neuen Tab auszuwählen. Sie zeigt die Möglichkeiten von kontextuellen Identitäten auf und ist einen Blick wert.
