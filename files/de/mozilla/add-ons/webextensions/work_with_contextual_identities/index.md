---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{AddonSidebar}}

Viele Menschen benötigen oder möchten mit mehreren Personas im Internet interagieren. Sie könnten Konten für webbasierte Arbeit und private E-Mails haben. Möglicherweise melden sie sich von ihren sozialen Medien ab, bevor sie auf Online-Shopping zugreifen, um sicherzustellen, dass Tracking-Skripte auf den Shopping-Seiten ihre sozialen Aktivitäten nicht erfassen können. Benutzer verwenden oft ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um dieses Bedürfnis zu adressieren, enthält Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Account-Container bekannt ist. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können mit einer dieser Identitäten verknüpft werden, wodurch Cookies von denen anderer Identitäten im Browser getrennt bleiben. Der praktische Nutzen davon ist, dass ein Benutzer beispielsweise eine persönliche und eine Arbeitsidentität haben könnte. Er kann dann zum Beispiel die persönliche Identität in einem Tab verwenden, wo er sich in seine persönliche Webmail einloggt, und die Arbeitsidentität in einem anderen Tab, wo er sich in seine Arbeitswebmail einloggt.

Weitere Hintergrundinformationen zu dieser Funktion finden Sie in folgenden Quellen:

- [Put your multiple online personalities in Firefox Multi-Account Containers](https://blog.mozilla.org/en/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox-Hilfeseite über Container](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs zur Arbeit mit kontextuellen Identitäten

Je nach Art Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen oder beides.

### Verwaltung von kontextuellen Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, erhält sie eine eindeutige `cookieStoreId`. Diese ID verwenden Sie, um mit Entitäten zu arbeiten, die mit der kontextuellen Identität in Verbindung stehen.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs beinhalten die `cookieStoreId` in Objekten, um es Erweiterungen zu ermöglichen, diese Objekte mit bestimmten kontextuellen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchem Cookie-Speicher Artikel entfernt werden.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Inhaltsskript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("downloads")}}, wo Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, wo die Details, die an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben werden, den mit der Anforderung verknüpften Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, wo Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}} können, die `cookieStoreId` für einen Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem zugehörigen Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (Legacy-Version, nur Manifest V2) ermöglicht es Ihnen, ein Inhaltsskript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("webRequest")}}, bei dem alle Ereignisse die `cookieStoreId` der Anforderung zurückgeben.
- {{WebExtAPIRef("windows.create")}}, wo Sie den Cookie-Speicher für die Tabs, die zu einem Fenster hinzugefügt werden, wenn es erstellt wird, angeben können.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben.

Wenn eine API es ermöglicht, Cookies zu ändern, benötigen Sie die "cookies" Berechtigung. Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies" API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da die geöffneten Tabs Cookies in einem Container lesen und ändern können.

## Beispiel-Walkthrough

Die Beispiel-Erweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um einen Tab mit ihrem Cookie-Container zu erstellen oder alle ihre Tabs zu entfernen.

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

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, aber es ist nur eine Hülle, in die das Skript context.js die Liste der kontextuellen Identitäten und ihre zugehörigen Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das jedes Mal aufgerufen wird, wenn das Toolbar-Popup angezeigt wird.

Das Skript holt zuerst den 'identity-list' `<div>` aus context.html.

```js
let div = document.getElementById("identity-list");
```

Es prüft dann, ob die Funktion für kontextuelle Identitäten im Browser aktiviert ist. Wenn nicht, wird dem Popup eine Information hinzugefügt, wie man sie aktiviert.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText =
    "browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.";
} else {
```

Firefox wird standardmäßig mit deaktivierter Funktion für kontextuelle Identitäten installiert. Sie wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, weshalb eine Prüfung erforderlich ist.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query")}}, um festzustellen, ob im Browser kontextuelle Identitäten definiert sind. Falls keine existieren, wird eine Nachricht zum Popup hinzugefügt und das Skript stoppt.

```js
  browser.contextualIdentities.query({}).then((identities) => {
    if (!identities.length) {
      div.innerText = "No identities returned from the API.";
      return;
    }
```

Wenn kontextuelle Identitäten vorhanden sind—Firefox kommt mit vier Standardidentitäten—durchläuft das Skript jede davon und fügt ihren Namen, in der gewählten Farbe gestylt, dem `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" dem `<div>` hinzu, bevor es zum Popup hinzugefügt wird.

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

Das Skript wartet jetzt darauf, dass der Benutzer eine Option im Popup auswählt.

```js
function eventHandler(event) {
```

Wenn der Benutzer die Option auswählt, einen Tab für eine Identität zu erstellen, wird einer durch {{WebExtAPIRef("tabs.create")}} geöffnet, indem die Cookie-Store-ID der Identität übergeben wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} durch, um alle Tabs zu erhalten, die den Cookie-Store der Identität verwenden. Das Skript übergibt dann diese Liste von Tabs an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die contextualIdentities API erfahren möchten, sehen Sie sich folgende Ressourcen an:

- [Referenz zur contextualIdentities API](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Source Code der Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Erweiterung. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet den Benutzern eine erweiterte Funktionalität für kontextuelle Identitäten, wie die Möglichkeit, die neue Tab-Taste lange zu drücken und dann die zu verwendende Identität im neuen Tab auszuwählen. Sie zeigt die Fähigkeiten kontextueller Identitäten und ist einen Blick wert.
