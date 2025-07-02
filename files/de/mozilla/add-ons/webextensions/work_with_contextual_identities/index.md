---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{AddonSidebar}}

Viele Menschen müssen oder möchten das Internet mit mehreren Persönlichkeiten nutzen. Sie könnten Konten für webbasierte Arbeit und private E-Mails haben. Möglicherweise melden sie sich von ihren Social-Media-Konten ab, bevor sie auf Online-Shopping zugreifen, um sicherzustellen, dass Tracking-Skripte auf den Shopping-Seiten ihre Social-Media-Aktivitäten nicht erfassen können. Benutzer verwenden häufig ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um diesem Bedarf gerecht zu werden, enthält Firefox eine Funktion, die als kontextuelle Identitäten, Container-Tabs oder Konto-Container bekannt ist. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können einer dieser Identitäten zugeordnet werden, wobei die Cookies von denen anderer Identitäten im Browser getrennt bleiben. Der praktische Vorteil dieser Funktion besteht darin, dass ein Benutzer beispielsweise eine persönliche und eine berufliche Identität haben könnte. Er kann dann beispielsweise die persönliche Identität in einem Tab verwenden, wo er sich in seine private Webmail anmeldet, und die berufliche Identität in einem anderen Tab, wo er sich in seine berufliche Webmail anmeldet.

Weitere Hintergrundinformationen zu dieser Funktion finden Sie unter:

- [Mit Ihren mehreren Online-Persönlichkeiten in Firefox Multi-Account Containers](https://blog.mozilla.org/en/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox Support-Artikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs für die Arbeit mit kontextuellen Identitäten

Abhängig von der Natur Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, mit denen Ihre Erweiterung arbeitet, mit kontextuellen Identitäten verknüpfen oder beides.

### Verwaltung kontextueller Identitäten

Um kontextuelle Identitäten zu verwalten, verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Bei der Erstellung einer kontextuellen Identität wird ihr eine eindeutige `cookieStoreId` zugewiesen. Diese ID verwenden Sie, um mit Entitäten in Zusammenhang mit der kontextuellen Identität zu arbeiten.

### Verwendung von `cookieStoreId`

Einige Erweiterungs-APIs enthalten die `cookieStoreId` in Objekten, um Erweiterungen zu ermöglichen, diese Objekte mit bestimmten kontextuellen Identitäten zu verknüpfen.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, wobei Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, aus welchen Cookie-Stores Elemente entfernt werden.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Content-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verbunden sind.
- {{WebExtAPIRef("downloads")}}, wobei Sie einen Download mit einem Cookie-Store verbinden können.
- {{WebExtAPIRef("proxy")}}, wobei die Details, die an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben werden, den mit der Anfrage verknüpften Cookie-Store identifizieren.
- {{WebExtAPIRef("tabs")}}, wobei Sie einen Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}}, den `cookieStoreId` für einen Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihren zugehörigen Cookie-Stores {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (nur Legacy-Version, Manifest V2) ermöglicht es Ihnen, ein Content-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verbunden sind.
- {{WebExtAPIRef("webRequest")}}, wobei alle Ereignisse den `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, wobei Sie den Cookie-Store für die Tabs angeben können, die zu einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einfügen.

Wenn eine API das Ändern von Cookies ermöglicht, benötigen Sie die "cookies" Berechtigung. Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies" API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispielanleitung

Die Beispielerweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um einen Tab mit ihrem Cookie-Container zu erstellen oder alle ihre Tabs zu entfernen.

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

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, ist jedoch nur ein Rahmen, in den das `context.js`-Skript die Liste der kontextuellen Identitäten und deren zugehörige Optionen schreibt.

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

Das Skript erhält zuerst das 'identity-list' `<div>` aus context.html. Es überprüft dann, ob das Feature der kontextuellen Identitäten im Browser eingeschaltet ist. Wenn es nicht eingeschaltet ist, wird der Popup-Informationen hinzugefügt, wie es aktiviert werden kann.

Firefox wird mit ausgeschaltetem Feature der kontextuellen Identitäten installiert. Es wird eingeschaltet, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann das Feature jedoch über eine Option auf der Einstellungsseite (about:preferences) ausschalten, daher ist die Überprüfung erforderlich.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query")}}, um festzustellen, ob im Browser kontextuelle Identitäten definiert sind. Wenn keine vorhanden sind, wird eine Nachricht zum Popup hinzugefügt und das Skript stoppt.

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

Wenn kontextuelle Identitäten vorhanden sind – Firefox kommt mit vier Standardidentitäten – durchläuft das Skript jede einzelne und fügt deren Namen, in der gewählten Farbe gestylt, dem `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" dem `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

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

Das Skript wartet jetzt darauf, dass der Benutzer eine Option im Popup auswählt.

Wenn der Benutzer die Option zum Erstellen eines Tabs für eine Identität auswählt, wird einer mit {{WebExtAPIRef("tabs.create")}} geöffnet, indem die Cookie-Store-ID der Identität übergeben wird.

Wenn der Benutzer die Option auswählt, alle Tabs der Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs zu erhalten, die den Cookie-Store der Identität verwenden. Das Skript übergibt diese Liste anschließend an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die contextualIdentities API erfahren möchten, sehen Sie sich Folgendes an:

- [contextualIdentities API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Erweiterungs-Quellcode. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionalitäten für kontextuelle Identitäten, wie die Möglichkeit, auf die neue Tab-Schaltfläche zu länglich zu klicken und dann die zu verwendende Identität im neuen Tab auszuwählen. Es zeigt die Fähigkeiten kontextueller Identitäten und ist auf jeden Fall einen Blick wert.
