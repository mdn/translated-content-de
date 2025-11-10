---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Viele Menschen müssen oder wollen mit dem Web unter Nutzung mehrerer Personas interagieren. Sie könnten Konten für webbasierte Arbeit und persönliche E-Mails haben. Möglicherweise melden sie sich von ihren Social-Media-Konten ab, bevor sie Online-Einkäufe tätigen, um sicherzustellen, dass keine Tracking-Skripte auf den Einkaufsseiten ihre Social-Media-Aktivitäten erfassen können. Benutzer verwenden häufig ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diese Anforderungen zu erfüllen.

Um dieses Bedürfnis zu adressieren, enthält Firefox eine Funktion, die als kontextuelle Identitäten, Containertabs oder Kontocontainer bekannt ist. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können mit einer dieser Identitäten verknüpft werden, wodurch Cookies von denen anderer Identitäten im Browser getrennt werden. Der praktische Vorteil davon ist, dass ein Benutzer beispielsweise eine persönliche und eine Arbeitsidentität haben könnte. Sie können dann beispielsweise die persönliche Identität in einem Tab verwenden, in dem sie sich in ihr persönliches Webmail einloggen, und die Arbeitsidentität in einem anderen Tab, in dem sie sich in ihr Arbeits-Webmail einloggen.

Für weitere Hintergrundinformationen zu dieser Funktion siehe:

- [Verwalten Sie Ihre mehrere Online-Persönlichkeiten in Firefox Multi-Account Containers](https://blog.mozilla.org/en/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox-Hilfeartikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs zur Arbeit mit kontextuellen Identitäten

Je nachdem, wie Ihre Erweiterung beschaffen ist, möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen oder beides tun.

### Verwalten von kontextuellen Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, erhält sie eine eindeutige `cookieStoreId`. Sie verwenden diese ID, um mit Entitäten zu arbeiten, die sich auf die kontextuelle Identität beziehen.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs beinhalten das `cookieStoreId` in Objekten, um es Erweiterungen zu ermöglichen, diese Objekte mit bestimmten kontextuellen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchen Cookie-Speichern die Elemente entfernt werden.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht Ihnen, ein Inhaltsskript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("downloads")}} bei denen Sie einen Download mit einem Cookie-Speicher in Verbindung bringen können.
- {{WebExtAPIRef("proxy")}} bei denen die in den {{WebExtAPIRef("proxy.onRequest")}} Listener übergebenen Details den mit der Anfrage verknüpften Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}} bei denen Sie einen Tab in einem Containertab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` eines Tabs {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem verknüpften Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (veraltete Version, nur Manifest V2) ermöglicht Ihnen, ein Inhaltsskript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("webRequest")}} bei denen alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}} bei denen Sie den Cookie-Speicher für die beim Erstellen zu einem Fenster hinzugefügten Tabs angeben können.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die Berechtigung "contextualIdentities" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einschließen.

Wenn eine API ermöglicht, dass Cookies geändert werden, benötigen Sie die Berechtigung "cookies". Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies" API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispielanleitung

Die Beispielerweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um einen Tab unter Verwendung ihres Cookie-Containers zu erstellen oder alle ihre Tabs zu entfernen.

Hier ist ein kurzes Video der Erweiterung in Aktion:

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

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, es ist jedoch nur eine Hülle, in die das Skript context.js die Liste der kontextuellen Identitäten und deren zugehörigen Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das immer dann aufgerufen wird, wenn das Toolbar-Popup angezeigt wird.

Das Skript erhält zunächst das "identity-list" `<div>` von context.html. Es prüft dann, ob die kontextuelle Identitätsfunktion im Browser aktiviert ist. Wenn sie nicht aktiviert ist, wird dem Popup eine Information hinzugefügt, wie man sie aktiviert.

Firefox wird mit deaktivierter kontextueller Identitätsfunktion installiert. Sie wird aktiviert, wenn eine Erweiterung mit der `contextualIdentities` API installiert wird. Der Benutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, daher die Notwendigkeit für die Überprüfung.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query")}}, um zu bestimmen, ob im Browser kontextuelle Identitäten definiert sind. Wenn keine vorhanden sind, wird dem Popup eine Nachricht hinzugefügt und das Skript stoppt.

```js
const div = document.getElementById("identity-list");
if (browser.contextualIdentities === undefined) {
  div.innerText =
    "browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.";
} else {
  browser.contextualIdentities.query({}).then((identities) => {
    if (!identities.length) {
      div.innerText = "No identities returned from the API.";
      return;
    }
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
```

Wenn kontextuelle Identitäten vorhanden sind—Firefox kommt mit vier Standardidentitäten—, durchläuft das Skript jede einzelne, indem es deren Namen, in der gewählten Farbe gestylt, zum `<div>` Element hinzufügt. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" zum `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

```js
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

Das Skript wartet nun darauf, dass der Benutzer eine Option im Popup auswählt.

Wenn der Benutzer die Option auswählt, einen Tab für eine Identität zu erstellen, wird einer unter Verwendung von {{WebExtAPIRef("tabs.create")}} durch Übergeben der Cookie-Store-ID der Identität geöffnet.

Wenn der Benutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs abzufragen, die den Cookie-Store der Identität verwenden. Das Skript übergibt dann diese Liste von Tabs an {{WebExtAPIRef("tabs.remove")}}.

```js
function eventHandler(event) {
  if (event.target.dataset.action === "create") {
    browser.tabs.create({
      url: "about:blank",
      cookieStoreId: event.target.dataset.identity,
    });
  }

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

- [contextualIdentities API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Erweiterungs-Quellcode. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionen für kontextuelle Identitäten, wie die Möglichkeit, die neue Tab-Schaltfläche lange zu drücken und dann die zu verwendende Identität im neuen Tab auszuwählen. Sie zeigt die Fähigkeiten der kontextuellen Identitäten und ist einen Blick wert.
