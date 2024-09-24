---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 8d4f5dfc253d1d0181d72ce5debaf1bcc26112ef
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten mit mehreren Personas im Web interagieren. Sie können Konten für webbasiertes Arbeiten und persönliche E-Mails haben. Möglicherweise melden sie sich von ihren sozialen Medien ab, bevor sie Online-Einkäufe tätigen, um sicherzustellen, dass eventuelle Tracking-Skripte der Einkaufsseiten ihre Social-Media-Aktivitäten nicht erkennen können. Benutzer verwenden oft ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um diesem Bedürfnis Rechnung zu tragen, beinhaltet Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Konto-Container bekannt ist. Diese Funktion ermöglicht es, einen Cookie-Container (Speicher) für jede der Identitäten zu erstellen, die der Benutzer im Browser verwenden möchte. Tabs können einer dieser Identitäten zugeordnet werden, wodurch Cookies von denen anderer Identitäten im Browser getrennt gehalten werden. Praktisch bedeutet dies, dass ein Benutzer beispielsweise eine persönliche und eine Arbeitsidentität haben könnte. Er kann dann beispielsweise in einem Tab die persönliche Identität verwenden und sich in sein persönliches Webmail einloggen, während er in einem anderen Tab die Arbeitsidentität verwendet, um sich in sein Arbeits-Webmail einzuloggen.

Für weitere Hintergrundinformationen zu dieser Funktion siehe:

- [Geben Sie Ihren mehreren Online-Persönlichkeiten in Firefox Multi-Account Containers einen Platz](https://blog.mozilla.org/en/products/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox Support-Artikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs zur Arbeit mit kontextuellen Identitäten

Abhängig von der Art Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen oder beides tun.

### Kontextuelle Identitäten verwalten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, erhält sie eine eindeutige `cookieStoreId`. Sie verwenden diese ID, um mit Entitäten zu arbeiten, die mit der kontextuellen Identität in Verbindung stehen.

### Verwendung von `cookieStoreId`

Einige Erweiterungs-APIs enthalten die `cookieStoreId` in Objekten, um Erweiterungen die Verknüpfung dieser Objekte mit bestimmten kontextuellen Identitäten zu ermöglichen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchen Cookie-Speichern die Elemente entfernt werden.
- {{WebExtAPIRef("contentscripts.register")}} ermöglicht es, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("downloads")}}, bei der Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, bei der die an den {{WebExtAPIRef("proxy.onRequest")}}-Listener übergebenen Details den mit der Anfrage verknüpften Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, bei der Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` für einen Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem zugehörigen Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userscripts.register")}} ermöglicht es, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("webrequest")}}, bei der alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, bei der Sie den Cookie-Speicher für die Tabs angeben können, die einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API nutzen zu können, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei aufnehmen.

Wenn eine API das Ändern von Cookies ermöglicht, benötigen Sie die "cookies"-Berechtigung. Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} keine "cookies"-API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispielanleitung

Die Beispielerweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um einen Tab zu erstellen, der ihren Cookies-Container verwendet, oder um alle ihre Tabs zu entfernen.

Hier ist ein kurzes Video über die Erweiterung in Aktion:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json) Datei sind:

- die Anfrage nach Berechtigungen:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- die Spezifikation der Toolbar-Schaltfläche (browserAction), die Zugriff auf die Funktionen der Erweiterung bietet:

  ```json
    "browser_action": {
      "default_title": "Kontextuelle Identitäten",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, es ist jedoch nur eine Hülle, in die das Skript context.js die Liste der kontextuellen Identitäten und deren zugehörige Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das immer aufgerufen wird, wenn das Toolbar-Popup angezeigt wird.

Das Skript bezieht zunächst das 'identity-list' `<div>` aus context.html.

```js
let div = document.getElementById("identity-list");
```

Dann überprüft es, ob die kontextuellen Identitäten im Browser aktiviert sind. Wenn sie nicht aktiviert sind, werden Informationen angezeigt, wie man sie aktiviert.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities nicht verfügbar. Überprüfen Sie, ob die privacy.userContext.enabled Pref auf true gesetzt ist, und laden Sie das Add-on neu.';
} else {
```

Firefox ist standardmäßig mit deaktivierter kontextueller Identität installiert. Es wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert ist. Der Benutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, daher ist die Überprüfung notwendig.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query.")}}, um festzustellen, ob im Browser kontextuelle Identitäten definiert sind. Wenn keine existieren, wird eine Nachricht im Popup angezeigt und das Skript endet.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'Keine Identitäten von der API zurückgegeben.';
        return;
      }
```

Wenn kontextuelle Identitäten vorhanden sind—Firefox kommt mit vier Standardidentitäten—durchläuft das Skript jede und fügt deren Namen, in ihrer gewählten Farbe gestylt, dem `<div>`-Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" dem `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

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

Wenn der Benutzer die Option zum Erstellen eines Tabs für eine Identität anklickt, wird einer mit {{WebExtAPIRef("tabs.create")}} geöffnet, indem die Cookie-Speicher-ID der Identität übergeben wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option wählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs zu erhalten, die den Cookie-Speicher der Identität verwenden. Das Skript übergibt dann diese Liste von Tabs an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die contextualIdentities API erfahren möchten, sehen Sie sich folgende Ressourcen an:

- [contextualIdentities API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Erweiterung Quellcode. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Nutzern verbesserte Funktionen für kontextuelle Identitäten, wie die Möglichkeit, den neuen Tab-Button lange zu klicken und dann die zu verwendende Identität für den neuen Tab auszuwählen. Es zeigt die Fähigkeiten kontextueller Identitäten und ist durchaus einen Blick wert.
