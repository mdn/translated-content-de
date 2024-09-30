---
title: Mit kontextuellen Identitäten arbeiten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 8d4f5dfc253d1d0181d72ce5debaf1bcc26112ef
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten mit dem Web über mehrere Personas interagieren. Sie könnten Konten für webbasierte Arbeit und persönliche E-Mails haben. Sie könnten sich von ihren Social-Media-Konten abmelden, bevor sie Online-Shopping-Seiten besuchen, um sicherzustellen, dass keine Tracking-Skripte auf den Shopping-Seiten ihre Social-Media-Aktivitäten erfassen können. Benutzer verwenden oft ein standardmäßiges und ein privates Browserfenster oder zwei verschiedene Browser, um diese Anforderungen zu erfüllen.

Um diesem Bedürfnis gerecht zu werden, umfasst Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Konto-Container bekannt ist. Diese Funktion ermöglicht es, einen Cookie-Container (Speicher) für jede der Identitäten zu erstellen, die der Benutzer in seinem Browser verwenden möchte. Tabs können mit einer dieser Identitäten verknüpft werden, wodurch Cookies von denjenigen anderer Identitäten im Browser getrennt bleiben. Der praktische Nutzen davon ist, dass ein Benutzer beispielsweise eine persönliche und eine Arbeits-Identität haben könnte. Er kann dann zum Beispiel die persönliche Identität in einem Tab verwenden, in dem er sich in sein persönliches Web-Mail einloggt, und die Arbeits-Identität in einem anderen Tab, in dem er sich in sein Arbeits-Web-Mail einloggt.

Weitere Informationen zu dieser Funktion finden Sie in:

- [Put your multiple online personalities in Firefox Multi-Account Containers](https://blog.mozilla.org/en/products/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox-Hilfsartikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs zur Arbeit mit kontextuellen Identitäten

Je nach Art der Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen oder beides tun.

### Verwaltung kontextueller Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, bekommt sie eine eindeutige `cookieStoreId` zugewiesen. Sie verwenden diese ID, um mit den Entitäten zu arbeiten, die mit der kontextuellen Identität verknüpft sind.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs enthalten die `cookieStoreId` in Objekten, um Erweiterungen zu ermöglichen, diese Objekte mit spezifischen kontextuellen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchen Cookie-Speichern die Elemente entfernt werden.
- {{WebExtAPIRef("contentscripts.register")}} ermöglicht es Ihnen, ein Content Script zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verbunden sind.
- {{WebExtAPIRef("downloads")}}, bei dem Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, bei dem die Details, die an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben werden, den mit der Anfrage verbundenen Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, bei dem Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` für einen Tab abrufen und Tabs basierend auf ihrem verbundenen Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userscripts.register")}} ermöglicht es Ihnen, ein Content Script zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verbunden sind.
- {{WebExtAPIRef("webrequest")}}, bei dem alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, bei dem Sie den Cookie-Speicher für die Tabs angeben können, die einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen.

Wenn eine API die Cookies modifizieren kann, benötigen Sie die "cookies" Berechtigung. Beispielsweise erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies" API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und verändern kann.

## Beispiel-Durchlauf

Die Beispiel-Erweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um mit ihrem Cookie-Container einen Tab zu erstellen oder alle ihre Tabs zu entfernen.

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

- Spezifikation der Toolbar-Schaltfläche (browserAction), die auf die Funktionen der Erweiterung zugreift:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, es ist jedoch nur eine Hülle, in die das context.js-Skript die Liste der kontextuellen Identitäten und ihre zugehörigen Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das aufgerufen wird, wenn das Toolbar-Popup angezeigt wird.

Das Skript ruft zunächst das 'identity-list' `<div>` aus context.html ab.

```js
let div = document.getElementById("identity-list");
```

Es überprüft dann, ob die Funktion der kontextuellen Identitäten im Browser aktiviert ist. Wenn sie nicht aktiviert ist, werden Informationen darüber, wie sie aktiviert werden kann, zum Popup hinzugefügt.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox wird mit der deaktivierten Funktion der kontextuellen Identität installiert. Sie wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann die Funktion jedoch mit einer Option auf der Einstellungsseite (about:preferences) deaktivieren, daher ist die Überprüfung notwendig.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query.")}}, um festzustellen, ob im Browser irgendwelche kontextuellen Identitäten definiert sind. Wenn keine vorhanden sind, wird dem Popup eine Nachricht hinzugefügt und das Skript stoppt.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

Falls kontextuelle Identitäten vorhanden sind—Firefox kommt mit vier Standardidentitäten—durchläuft das Skript jede und fügt ihren Namen in der gewählten Farbe zum `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" zur `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

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

Wenn der Benutzer die Option auswählt, einen Tab für eine Identität zu erstellen, wird einer unter Verwendung von {{WebExtAPIRef("tabs.create")}} geöffnet, indem die Cookie-Speicher-ID der Identität übergeben wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs zu erhalten, die den Cookie-Speicher der Identität verwenden. Das Skript übergibt diese Liste von Tabs dann an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die contextualIdentities API erfahren möchten, schauen Sie sich folgende Ressourcen an:

- [contextualIdentities API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Quellcode der Erweiterung. Dies ist der Quellcode für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionalitäten für kontextuelle Identitäten, wie die Möglichkeit, mit einem langen Klick auf die Schaltfläche zum Öffnen eines neuen Tabs die zu nutzende Identität auszuwählen. Sie zeigt die Fähigkeiten kontextueller Identitäten und ist einen Blick wert.
