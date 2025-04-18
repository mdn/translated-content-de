---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten mit mehreren Identitäten im Web interagieren. Sie könnten Konten für webbasierte Arbeit und private E-Mails haben. Möglicherweise melden sie sich von ihren sozialen Medien ab, bevor sie Online-Shopping betreiben, um sicherzustellen, dass keine Tracking-Skripte der Einkaufsseiten ihre Social-Media-Aktivitäten erfassen können. Benutzer verwenden oft ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um dieses Bedürfnis zu erfüllen, beinhaltet Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Account-Container bekannt ist. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können einer dieser Identitäten zugeordnet werden, was die Trennung von Cookies der verschiedenen Identitäten im Browser ermöglicht. Praktisch bedeutet dies, dass ein Benutzer beispielsweise eine persönliche und eine Arbeitsidentität haben könnte. Sie können dann zum Beispiel die persönliche Identität in einem Tab verwenden, um sich in ihre private Web-Mail einzuloggen, und die Arbeitsidentität in einem anderen Tab, um sich in ihre Arbeits-Web-Mail einzuloggen.

Für mehr Hintergrundinformationen zu dieser Funktion siehe:

- [Legen Sie Ihre mehreren Online-Persönlichkeiten in Firefox Multi-Account Containers ab](https://blog.mozilla.org/en/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox-Support-Artikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs zur Arbeit mit kontextuellen Identitäten

Abhängig von der Art Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen oder beides tun.

### Verwaltung von kontextuellen Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, wird ihr eine eindeutige `cookieStoreId` zugewiesen. Sie verwenden diese ID, um mit Entitäten zu arbeiten, die mit der kontextuellen Identität in Zusammenhang stehen.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs beinhalten die `cookieStoreId` in Objekten, um es Erweiterungen zu ermöglichen, diese Objekte mit bestimmten kontextuellen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, wo Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchen Cookie-Speicherartikeln entfernt wird.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Inhaltskript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` assoziiert sind.
- {{WebExtAPIRef("downloads")}}, wo Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, wo die Details, die an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben werden, den Cookie-Speicher des Anforderung zuordnen.
- {{WebExtAPIRef("tabs")}}, wo Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}} können, das `cookieStoreId` eines Tabs {{WebExtAPIRef("tabs.tab","erhalten")}} und Tabs anhand ihres zugehörigen Cookie-Speichers {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (nur Legacy-Version, Manifest V2) ermöglicht es Ihnen, ein Inhaltskript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` assoziiert sind.
- {{WebExtAPIRef("webRequest")}}, wo alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, wo Sie den Cookie-Speicher für die Tabs angeben können, die zu einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen.

Wenn eine API es ermöglicht, Cookies zu ändern, benötigen Sie die Berechtigung "cookies". Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies" API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispiel-Durchlauf

Die Beispiel-Erweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Werkzeugleiste-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, einen Tab mit seinem Cookies-Container zu erstellen oder alle seine Tabs zu entfernen.

Hier ist ein kurzes Video der Erweiterung in Aktion:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json) Datei sind:

- die Berechtigungsanforderung:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- Spezifikation der Werkzeugleisten-Schaltfläche (browserAction), die den Zugriff auf die Funktionen der Erweiterung bereitstellt:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Werkzeugleisten-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, ist jedoch nur eine Schale, in die das Kontextkript die Liste der kontextuellen Identitäten und deren zugehörige Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das aufgerufen wird, wann immer das Werkzeugleisten-Popup angezeigt wird.

Das Skript holt zuerst das 'identity-list' `<div>` aus context.html.

```js
let div = document.getElementById("identity-list");
```

Es überprüft dann, ob die Funktion für kontextuelle Identitäten im Browser aktiviert ist. Wenn sie nicht aktiviert ist, wird dem Popup eine Information hinzugefügt, wie sie aktiviert werden kann.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox wird mit der deaktivierten Funktion für kontextuelle Identitäten installiert. Sie wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann die Funktion jedoch mit einer Option auf der Einstellungsseite (about:preferences) deaktivieren, daher ist die Überprüfung notwendig.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query.")}}, um zu bestimmen, ob im Browser kontextuelle Identitäten definiert sind. Wenn keine vorhanden sind, wird eine Nachricht zum Popup hinzugefügt und das Skript stoppt.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

Wenn kontextuelle Identitäten vorhanden sind—Firefox kommt mit vier Standardidentitäten—durchläuft das Skript jede dieser Identitäten und fügt ihren Namen, der in ihrer gewählten Farbe gestaltet ist, zum `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" zum `<div>` hinzu, bevor es zum Popup hinzugefügt wird.

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

Das Skript wartet jetzt darauf, dass der Benutzer eine Option im Popup auswählt.

```js
function eventHandler(event) {
```

Wenn der Benutzer die Option wählt, einen Tab für eine Identität zu erstellen, wird einer geöffnet, indem die Cookie-Speicher-ID der Identität mit {{WebExtAPIRef("tabs.create")}} übergeben wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option wählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} durch, um alle Tabs zu erhalten, die den Cookie-Speicher der Identität nutzen. Das Skript übergibt dann diese Liste von Tabs an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die `contextualIdentities` API erfahren möchten, schauen Sie sich folgende Ressourcen an:

- [contextualIdentities API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Extension-Source-Code. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionalität für kontextuelle Identitäten, wie die Möglichkeit, das neue Tab-Symbol lange zu halten und dann die Identität auszuwählen, die im neuen Tab verwendet werden soll. Sie zeigt die Fähigkeiten von kontextuellen Identitäten und ist einen Blick wert.
