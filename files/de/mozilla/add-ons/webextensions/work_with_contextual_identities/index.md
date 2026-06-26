---
title: Arbeiten mit kontextbezogenen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 8ede916a8af8537114db737b914cef1d721fda84
---

Viele Menschen müssen oder möchten mit mehreren Identitäten im Web interagieren. Sie könnten Konten für webbasierte Arbeit und private E-Mails haben. Möglicherweise melden sie sich von ihren sozialen Medien ab, bevor sie Online-Shopping betreiben, um sicherzustellen, dass Tracking-Skripte auf den Shopping-Seiten ihre sozialen Medienaktivitäten nicht erfassen können. Nutzer verwenden oft ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um dieses Bedürfnis zu adressieren, enthält Firefox eine Funktion, die als kontextbezogene Identitäten, Container-Tabs oder Account-Container bekannt ist. Diese Funktion ermöglicht es, für jede der Identitäten, die der Nutzer in seinem Browser verwenden möchte, einen Cookie-Container (Speicher) zu erstellen. Tabs können mit einer dieser Identitäten assoziiert werden, wodurch Cookies von denen anderer Identitäten im Browser getrennt bleiben. Der praktische Nutzen davon ist, dass ein Nutzer zum Beispiel eine private und eine berufliche Identität haben könnte. Er kann dann beispielsweise die private Identität in einem Tab verwenden, um sich bei seinem privaten Webmail anzumelden, und die berufliche Identität in einem anderen Tab, um sich bei seinem beruflichen Webmail anzumelden.

Für weitere Hintergrundinformationen zu dieser Funktion, siehe:

- [Verwalten Sie Ihre mehreren Online-Persönlichkeiten mit Firefox Multi-Account Containers](https://blog.mozilla.org/en/firefox/introducing-firefox-multi-account-containers/)
- [Security/Contextual Identity Project/Containers](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox Support-Artikel zu Containern](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs für die Arbeit mit kontextbezogenen Identitäten

Je nach Art Ihrer Erweiterung möchten Sie möglicherweise kontextbezogene Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextbezogenen Identitäten assoziieren, oder beides.

### Verwaltung von kontextbezogenen Identitäten

Um kontextbezogene Identitäten zu verwalten, nutzen Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextbezogene Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextbezogene Identität erstellen, erhält sie eine eindeutige `cookieStoreId`. Sie verwenden diese ID, um mit Entitäten zu arbeiten, die mit der kontextbezogenen Identität verbunden sind.

### Unterstützte Farben und Symbole

Wenn Sie eine kontextbezogene Identität erstellen oder aktualisieren, müssen Sie gültige `color`- und `icon`-Werte angeben. Für Firefox Version 153 und später verwenden Sie {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}}, um die Liste der unterstützten Werte abzurufen, anstatt diese hartkodiert einzugeben. Firefox 153 hat zwei Farben umbenannt und eine hinzugefügt, und zukünftige Versionen könnten weitere Änderungen einführen. Das Abfragen dieser Methoden hält Ihre Erweiterung kompatibel, ohne dass jedes Mal Updates erforderlich sind, wenn sich die unterstützten Werte ändern.

Für Erweiterungen, die Firefox-Versionen vor 153 unterstützen, sind vollständige Listen der unterstützten Werte, einschließlich der in Firefox 153 geänderten, auf den Referenzseiten von {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} und {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} verfügbar.

### Verwendung von `cookieStoreId`

Mehrere Erweiterungs-APIs beinhalten die `cookieStoreId` in Objekten, um den Erweiterungen zu ermöglichen, diese Objekte mit bestimmten kontextbezogenen Identitäten zu assoziieren.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, bei denen Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um die Cookie-Speicher-Elemente festzulegen, von denen entfernt werden soll.
- {{WebExtAPIRef("contentScripts.register")}} ermöglicht es Ihnen, ein Content-Script zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` assoziiert sind.
- {{WebExtAPIRef("downloads")}}, bei dem Sie einen Download mit einem Cookie-Speicher assoziieren können.
- {{WebExtAPIRef("proxy")}}, bei dem die in den {{WebExtAPIRef("proxy.onRequest")}}-Listener übergebenen Details den mit der Anfrage assoziierten Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, bei dem Sie in einem Container-Tab einen Tab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` für einen Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem zugehörigen Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userScripts_legacy.register","userScripts.register()")}} (nur Legacy-Version, Manifest V2) ermöglicht es Ihnen, ein Content-Script zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` assoziiert sind.
- {{WebExtAPIRef("webRequest")}}, bei dem alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, bei dem Sie den Cookie-Speicher für die Tabs angeben können, die zu einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die Berechtigung "contextualIdentities" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei aufnehmen.

Wenn eine API es ermöglicht, Cookies zu modifizieren, benötigen Sie die "cookies"-Berechtigung. Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies"-API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, da der geöffnete Tab Cookies in einem Container lesen und modifizieren kann.

## Beispielanleitung

Die Beispielerweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Symbolleistenschaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen an, um einen Tab mit seinem Cookie-Container zu erstellen oder alle seine Tabs zu entfernen.

Hier ist ein kurzes Video der Erweiterung in Aktion:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json)-Datei sind:

- die Berechtigungsanfrage:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- die Spezifikation der Symbolleistenschaltfläche (browserAction), die Zugriff auf die Funktionen der Erweiterung bietet:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Symbolleistenschaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, ist jedoch nur eine Hülle, in die das Skript context.js die Liste der kontextbezogenen Identitäten und deren zugehörige Optionen schreibt.

```html
<body>
  <div class="panel">
    <div id="identity-list"></div>
  </div>
  <script src="context.js"></script>
</body>
```

## context.js

Alle Funktionen der Erweiterung werden durch [context.js](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.js) implementiert, das aufgerufen wird, wann immer das Symbolleisten-Popup angezeigt wird.

Das Skript ruft zuerst das `<div>` Element 'identity-list' von context.html ab. Dann überprüft es, ob die Funktion für kontextbezogene Identitäten im Browser aktiviert ist. Falls nicht, wird dem Popup eine Information hinzugefügt, wie diese aktiviert werden kann.

Firefox wird mit deaktivierter Funktion für kontextbezogene Identitäten installiert. Diese wird aktiviert, wenn eine Erweiterung installiert wird, die die `contextualIdentities` API verwendet. Der Nutzer kann die Funktion jedoch über eine Option auf der Einstellungsseite (about:preferences) deaktivieren, daher die Notwendigkeit der Prüfung.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query")}}, um festzustellen, ob im Browser kontextbezogene Identitäten definiert sind. Wenn keine vorhanden sind, wird dem Popup eine Nachricht hinzugefügt und das Skript wird angehalten.

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

Wenn kontextbezogene Identitäten vorhanden sind—Firefox wird mit vier Standardidentitäten geliefert—iteriert das Skript durch jede und fügt ihren Namen, mit der gewählten Farbe gestylt, dem `<div>` Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" zum `<div>` hinzu, bevor es dem Popup hinzugefügt wird.

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

Das Skript wartet nun darauf, dass der Nutzer eine Option im Popup auswählt.

Wenn der Nutzer die Option auswählt, einen Tab für eine Identität zu erstellen, wird einer unter Verwendung von {{WebExtAPIRef("tabs.create")}} geöffnet, indem die Cookie-Store-ID der Identität übergeben wird.

Wenn der Nutzer die Option auswählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} aus, um alle Tabs abzurufen, die den Cookie-Store der Identität verwenden. Das Skript übergibt dann diese Liste von Tabs an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die contextualIdentities API erfahren möchten, sehen Sie sich folgende Ressourcen an:

- [contextualIdentities API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Erweiterungsquellcode. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Nutzern erweiterte Funktionalität für kontextbezogene Identitäten, wie die Möglichkeit, die neue Tab-Taste lange zu drücken und dann die Identität auszuwählen, die im neuen Tab verwendet werden soll. Es zeigt die Fähigkeiten der kontextbezogenen Identitäten und ist definitiv einen Blick wert.
