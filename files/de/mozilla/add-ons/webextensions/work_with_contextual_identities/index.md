---
title: Arbeiten mit kontextbezogenen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten mit dem Web unter Verwendung mehrerer Identitäten interagieren. Sie könnten separate Konten für die webbasierte Arbeit und persönliche E-Mails haben. Sie melden sich möglicherweise von ihren sozialen Medien ab, bevor sie Online-Shopping-Seiten besuchen, um sicherzustellen, dass Tracking-Skripte auf den Shopping-Websites ihre Social-Media-Aktivitäten nicht erfassen können. Benutzer verwenden oft ein standardmäßiges und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um diesem Bedarf gerecht zu werden, bietet Firefox eine Funktion, die als kontextbezogene Identitäten, Container-Tabs oder Konto-Container bekannt ist. Diese Funktion ermöglicht das Erstellen eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können mit einer dieser Identitäten verknüpft werden, wodurch Cookies von denen anderer Identitäten im Browser getrennt bleiben. Der praktische Nutzen besteht darin, dass ein Benutzer beispielsweise eine persönliche und eine Arbeitsidentität haben könnte. Sie können dann beispielsweise die persönliche Identität in einem Tab verwenden, in dem sie sich bei ihrem persönlichen Webmail-Dienst anmelden, und die Arbeitsidentität in einem anderen Tab, in dem sie sich bei ihrem Arbeits-Webmail-Dienst anmelden.

Für weitere Hintergrundinformationen zu dieser Funktion siehe:

- [Legen Sie Ihre mehrere Online-Persönlichkeiten in Firefox Multi-Account Containers](https://blog.mozilla.org/en/products/firefox/introducing-firefox-multi-account-containers/)
- [Sicherheit/Kontextuelle Identitäts-Projekt/Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox Support-Artikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs für die Arbeit mit kontextbezogenen Identitäten

Je nach Art Ihrer Erweiterung möchten Sie möglicherweise kontextbezogene Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextbezogenen Identitäten verknüpfen oder beides.

### Verwaltung von kontextbezogenen Identitäten

Um kontextbezogene Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextbezogene Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextbezogene Identität erstellen, wird ihr eine eindeutige `cookieStoreId` zugewiesen. Sie verwenden diese ID, um mit Entitäten zu arbeiten, die mit der kontextbezogenen Identität in Zusammenhang stehen.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs beinhalten die `cookieStoreId`, um Erweiterungen es zu ermöglichen, diese Objekte mit bestimmten kontextbezogenen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchem Cookie-Speicher die Elemente entfernt werden.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("downloads")}}, bei denen Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, bei denen die in den {{WebExtAPIRef("proxy.onRequest")}} Zuhörer übergebenen Details den mit der Anforderung verbundenen Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, wo Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` für einen Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem zugehörigen Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts.register")}} ermöglicht es Ihnen, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("webRequest")}}, bei denen alle Ereignisse die `cookieStoreId` der Anforderung zurückgeben.
- {{WebExtAPIRef("windows.create")}}, bei denen Sie den Cookie-Speicher für die Tabs angeben können, die einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen.

Wenn eine API es ermöglicht, Cookies zu ändern, benötigen Sie die "cookies" Berechtigung. Beispielsweise erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} keine "cookies" API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Das Verwenden von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispiel-Durchgang

Die Beispiel-Erweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um einen Tab mit ihrem Cookie-Container zu erstellen oder alle ihre Tabs zu entfernen.

Hier ist ein kurzes Video über die Erweiterung in Aktion:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json) Datei sind:

- die Berechtigungsanfrage:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- die Spezifikation der Toolbar-Schaltfläche (browserAction), die Zugriff auf die Funktionen der Erweiterung bietet:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, aber es ist nur eine Hülle, in die das Skript context.js die Liste der kontextbezogenen Identitäten und ihrer zugehörigen Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung sind über [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das aufgerufen wird, wann immer das Toolbar-Popup angezeigt wird.

Das Skript holt zuerst die 'identity-list' `<div>` aus context.html.

```js
let div = document.getElementById("identity-list");
```

Es überprüft dann, ob die Funktion der kontextbezogenen Identitäten im Browser aktiviert ist. Wenn sie nicht aktiviert ist, werden Informationen darüber, wie sie aktiviert werden kann, zum Popup hinzugefügt.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox wird mit deaktivierter Funktion für kontextbezogene Identitäten installiert. Sie wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, daher ist die Überprüfung erforderlich.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query.")}}, um festzustellen, ob im Browser kontextbezogene Identitäten definiert sind. Wenn keine vorhanden sind, wird eine Nachricht zum Popup hinzugefügt und das Skript endet.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

Wenn kontextbezogene Identitäten vorhanden sind – Firefox wird mit vier Standard-Identitäten ausgeliefert – durchläuft das Skript jede und fügt ihren Namen, in ihrer gewählten Farbe gestylt, dem `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen zum "Erstellen" oder "Schließen aller" dem `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

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

Das Skript wartet nun darauf, dass der Benutzer eine Option im Popup auswählt.

```js
function eventHandler(event) {
```

Wenn der Benutzer die Option auswählt, einen Tab für eine Identität zu erstellen, wird einer mit {{WebExtAPIRef("tabs.create")}} geöffnet, indem die Cookie-Speicher-ID der Identität übergeben wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs zu erhalten, die den Cookie-Speicher der Identität verwenden. Das Skript übergibt dann diese Tab-Liste an {{WebExtAPIRef("tabs.remove")}}.

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

## Weitere Informationen

Wenn Sie mehr über die contextualIdentities API erfahren möchten, schauen Sie sich an:

- [contextualIdentities API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Quellcode der Erweiterung. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionen für kontextbezogene Identitäten, wie die Möglichkeit, die neue Tab-Schaltfläche lang zu drücken und dann die Identität auszuwählen, die im neuen Tab verwendet werden soll. Sie zeigt die Fähigkeiten kontextbezogener Identitäten und ist einen Blick wert.
