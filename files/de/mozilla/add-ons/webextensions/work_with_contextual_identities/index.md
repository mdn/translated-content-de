---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten mit dem Web interagieren, indem sie mehrere Persönlichkeiten verwenden. Sie könnten Konten für webbasierte Arbeit und persönliche E-Mails haben. Möglicherweise melden sie sich aus ihren sozialen Medien ab, bevor sie Online-Shopping betreiben, um sicherzustellen, dass Tracking-Skripte auf den Shopping-Seiten ihre sozialen Medien nicht erfassen können. Benutzer verwenden oft ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diese Anforderungen zu erfüllen.

Um diesem Bedürfnis gerecht zu werden, enthält Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Kontocontainer bekannt ist. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können einer dieser Identitäten zugeordnet werden, wodurch Cookies von denen anderer Identitäten im Browser getrennt bleiben. Der praktische Vorteil davon ist, dass ein Benutzer beispielsweise eine persönliche und eine Arbeitsidentität haben könnte. Sie können dann beispielsweise die persönliche Identität in einem Tab verwenden, in dem sie sich in ihr persönliches Webmail einloggen, und die Arbeitsidentität in einem anderen Tab, in dem sie sich in ihr Arbeits-Webmail einloggen.

Für mehr Hintergrundinformationen zu dieser Funktion siehe:

- [Verwalten Sie Ihre mehreren Online-Persönlichkeiten in Firefox Multi-Account Containers](https://blog.mozilla.org/en/firefox/introducing-firefox-multi-account-containers/)
- [Sicherheits-/Kontextuelle Identitätsprojekt/Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Unterstützungsartikel zu Containern in Firefox](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs für die Arbeit mit kontextuellen Identitäten

Abhängig von der Natur Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen, oder beides.

### Verwalten von kontextuellen Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, wird ihr eine eindeutige `cookieStoreId` zugewiesen. Sie verwenden diese ID, um mit Entitäten zu arbeiten, die mit der kontextuellen Identität verbunden sind.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs enthalten die `cookieStoreId` in Objekten, um Erweiterungen zu ermöglichen, diese Objekte mit spezifischen kontextuellen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchem Cookie-Speicher die Elemente entfernt werden.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("downloads")}}, wo Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, wo die Details, die an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben werden, den mit der Anforderung verknüpften Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, wo Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create", "erstellen")}} können, die `cookieStoreId` eines Tabs {{WebExtAPIRef("tabs.tab", "abrufen")}} können und Tabs basierend auf ihrem zugeordneten Cookie-Speicher {{WebExtAPIRef("tabs.query", "abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}} (nur Legacy-Version, Manifest V2) ermöglicht es Ihnen, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("webRequest")}}, bei dem alle Ereignisse die `cookieStoreId` der Anforderung zurückgeben.
- {{WebExtAPIRef("windows.create")}}, wo Sie den Cookie-Speicher für die Tabs angeben können, die einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die Berechtigung "contextualIdentities" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) Datei einschließen.

Wenn eine API das Modifizieren von Cookies ermöglicht, benötigen Sie die Berechtigung "cookies". Beispielsweise erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies"-API, da das Lesen der Eigenschaft keine Auswirkungen auf die Cookies in den Containern hat. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispiel-Durchlauf

Die Beispiel-Erweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung die Option, einen Tab unter Verwendung ihres Cookie-Containers zu erstellen oder alle ihre Tabs zu entfernen.

Hier ist ein kurzes Video der Erweiterung in Aktion:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json) Datei sind:

- der Berechtigungsantrag:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- Spezifikation der Toolbar-Schaltfläche (browserAction), die Zugriff auf die Funktionen der Erweiterung bietet:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, aber es ist nur eine Hülle, in die das context.js-Skript die Liste der kontextuellen Identitäten und deren verwandte Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden über [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, welches aufgerufen wird, wann immer das Toolbar-Popup angezeigt wird.

Das Skript holt zuerst das 'identity-list'-`<div>` von context.html.

```js
let div = document.getElementById("identity-list");
```

Dann prüft es, ob die Funktion der kontextuellen Identitäten im Browser aktiviert ist. Falls nicht, wird dem Popup eine Information hinzugefügt, wie man es aktiviert.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText =
    "browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.";
} else {
```

Firefox wird mit der deaktivierten Funktion der kontextuellen Identität installiert. Es wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, daher die Notwendigkeit der Überprüfung.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query.")}} um zu bestimmen, ob im Browser kontextuelle Identitäten definiert sind. Falls keine vorhanden sind, wird eine Nachricht an das Popup hinzugefügt und das Skript stoppt.

```js
  browser.contextualIdentities.query({}).then((identities) => {
    if (!identities.length) {
      div.innerText = "No identities returned from the API.";
      return;
    }
```

Wenn kontextuelle Identitäten vorhanden sind – Firefox wird mit vier Standard-Identitäten ausgeliefert – durchläuft das Skript jede von ihnen und fügt ihren Namen, gestylt in ihrer gewählten Farbe, dem `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alles schließen" dem `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

```js
    for (const identity of identities) {
      const row = document.createElement("div");
      const span = document.createElement("span");
      span.className = "identity";
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
  for (const option of ["Create", "Close All"]) {
    const a = document.createElement("a");
    a.href = "#";
    a.innerText = option;
    a.dataset.action = option.toLowerCase().replace(" ", "-");
    a.dataset.identity = identity.cookieStoreId;
    a.addEventListener("click", eventHandler);
    node.appendChild(a);
  }
}
```

Das Skript wartet nun, dass der Benutzer eine Option im Popup auswählt.

```js
function eventHandler(event) {
```

Wenn der Benutzer die Option anklickt, einen Tab für eine Identität zu erstellen, wird einer mit {{WebExtAPIRef("tabs.create")}} unter Verwendung der Cookie-Store-ID der Identität geöffnet.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs zu erhalten, die den Cookie-Store der Identität verwenden. Das Skript übergibt dann diese Liste der Tabs an {{WebExtAPIRef("tabs.remove")}}.

```js
  if (event.target.dataset.action === "close-all") {
    browser.tabs
      .query({
        cookieStoreId: event.target.dataset.identity,
      })
      .then((tabs) => {
        browser.tabs.remove(tabs.map((i) => i.id));
      });
  }
  event.preventDefault();
}
```

## Mehr erfahren

Wenn Sie mehr über die contextualIdentities API erfahren möchten, schauen Sie sich an:

- [Konzept der kontextuellen Identitäten API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Quellcode der Erweiterung. Dies ist der Quellcode für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionen für kontextuelle Identitäten, beispielsweise die Möglichkeit, die neue Tab-Schaltfläche lang zu klicken und dann die Identität auszuwählen, die im neuen Tab verwendet werden soll. Es zeigt die Fähigkeiten der kontextuellen Identitäten und ist sehr zu empfehlen.
