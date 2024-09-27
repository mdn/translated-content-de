---
title: Arbeiten mit kontextuellen Identitäten
slug: Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities
l10n:
  sourceCommit: 8d4f5dfc253d1d0181d72ce5debaf1bcc26112ef
---

{{AddonSidebar}}

Viele Menschen benötigen oder wünschen den Umgang mit dem Web unter Verwendung mehrerer Personas. Sie könnten Konten für webbasierte Arbeit und persönliche E-Mails haben. Möglicherweise melden sie sich von ihren sozialen Medienkonten ab, bevor sie Online-Shopping betreiben, um sicherzustellen, dass Tracking-Skripte auf den Shopping-Seiten nicht ihre soziale Medienaktivität erfassen können. Benutzer verwenden häufig ein Standard- und ein privates Browserfenster oder zwei verschiedene Browser, um diesen Anforderungen gerecht zu werden.

Um diesem Bedarf gerecht zu werden, enthält Firefox eine Funktion namens kontextuelle Identitäten, Container-Tabs oder Konto-Container. Diese Funktion ermöglicht die Erstellung eines Cookie-Containers (Speicher) für jede der Identitäten, die der Benutzer in seinem Browser verwenden möchte. Tabs können mit einer dieser Identitäten verknüpft werden, sodass Cookies von denen anderer Identitäten im Browser getrennt bleiben. Der praktische Vorteil dabei ist, dass ein Benutzer beispielsweise eine persönliche und eine berufliche Identität haben könnte. Er kann dann beispielsweise die persönliche Identität in einem Tab verwenden, wo er sich in seine persönliche Webmail anmeldet, und die berufliche Identität in einem anderen Tab, wo er sich in seine berufliche Webmail einloggt.

Weitere Hintergrundinformationen zu dieser Funktion finden Sie in:

- [Legen Sie Ihre mehreren Online-Persönlichkeiten in Firefox-Multi-Account-Containern an](https://blog.mozilla.org/en/products/firefox/introducing-firefox-multi-account-containers/)
- [Sicherheitsprojekt für kontextuelle Identitäten/Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers)
- [Firefox-Support-Artikel über Container](https://support.mozilla.org/en-US/kb/containers?redirectlocale=en-US&as=u&redirectslug=containers-experiment&utm_source=inproduct)

## APIs zum Arbeiten mit kontextuellen Identitäten

Je nach Beschaffenheit Ihrer Erweiterung möchten Sie möglicherweise kontextuelle Identitäten verwalten, Objekte, die Ihre Erweiterung manipuliert, mit kontextuellen Identitäten verknüpfen oder beides.

### Verwaltung von kontextuellen Identitäten

Zur Verwaltung von kontextuellen Identitäten verwenden Sie die {{WebExtAPIRef("contextualIdentities")}} API. Diese API ermöglicht es Ihnen, kontextuelle Identitäten hinzuzufügen, abzufragen, zu aktualisieren und zu löschen. Wenn Sie eine kontextuelle Identität erstellen, erhält sie eine eindeutige `cookieStoreId`. Diese ID verwenden Sie, um mit Entitäten zu arbeiten, die mit der kontextuellen Identität zusammenhängen.

### Verwendung von `cookieStoreId`

Einige Erweiterungs-APIs enthalten `cookieStoreId` in Objekten, damit Erweiterungen diese Objekte mit bestimmten kontextuellen Identitäten verknüpfen können.

- {{WebExtAPIRef("browsingData.removeCookies()")}} und {{WebExtAPIRef("browsingData.removeLocalStorage()")}}, wobei Sie {{WebExtAPIRef("browsingData.removalOptions")}} verwenden, um festzulegen, von welchen Cookie-Speicherobjekten Daten entfernt werden.
- {{WebExtAPIRef("contentscripts.register")}} ermöglicht es, ein Inhalts-Skript zu registrieren, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("downloads")}}, wo Sie einen Download mit einem Cookie-Speicher verknüpfen können.
- {{WebExtAPIRef("proxy")}}, wobei die Details, die an den {{WebExtAPIRef("proxy.onRequest")}} Listener übergeben werden, den mit der Anfrage verbundenen Cookie-Speicher identifizieren.
- {{WebExtAPIRef("tabs")}}, wo Sie ein Tab in einem Container-Tab {{WebExtAPIRef("tabs.create","erstellen")}}, die `cookieStoreId` für ein Tab {{WebExtAPIRef("tabs.tab","abrufen")}} und Tabs basierend auf ihrem zugeordneten Cookie-Speicher {{WebExtAPIRef("tabs.query","abfragen")}} können.
- {{WebExtAPIRef("userscripts.register")}} ermöglicht die Registrierung eines Inhalts-Skripts, das auf Dokumente beschränkt ist, die mit einem oder mehreren `cookieStoreIds` verknüpft sind.
- {{WebExtAPIRef("webrequest")}}, bei der alle Ereignisse die `cookieStoreId` der Anfrage zurückgeben.
- {{WebExtAPIRef("windows.create")}}, bei dem Sie den Cookie-Speicher für die Tabs angeben können, die zu einem Fenster hinzugefügt werden, wenn es erstellt wird.

## Berechtigungen

Um die {{WebExtAPIRef("contextualIdentities")}} API zu verwenden, müssen Sie die "contextualIdentities" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei einschließen.

Wenn eine API es ermöglicht, Cookies zu ändern, benötigen Sie die "cookies"-Berechtigung. Zum Beispiel erfordert die Verwendung von `cookieStoreId` in {{WebExtAPIRef("tabs.query")}} nicht die "cookies"-API, da das Lesen der Eigenschaft die Cookies in den Containern nicht beeinflusst. Die Verwendung von {{WebExtAPIRef("tabs.create")}} erfordert jedoch die Berechtigung, weil das geöffnete Tab Cookies in einem Container lesen und ändern kann.

## Beispiel-Durchgang

Die Beispielerweiterung [contextual-identities](https://github.com/mdn/webextensions-examples/tree/main/contextual-identities) bietet eine Toolbar-Schaltfläche mit einem Popup, das die Identitäten im Browser auflistet. Für jede Identität bietet die Erweiterung Optionen, um ein Tab mit seinem Cookie-Container zu erstellen oder alle seine Tabs zu entfernen.

Hier ist ein kurzes Video der Erweiterung in Aktion:

{{EmbedYouTube("SgLCS7_ppas")}}

### manifest.json

Die Hauptmerkmale der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/manifest.json) sind:

- die Berechtigungsanforderungen:

  ```json
    "permissions": [
        "contextualIdentities",
        "cookies"
    ],
  ```

- Spezifikation der Toolbar-Schaltfläche (browserAction), die den Zugriff auf die Funktionen der Erweiterung ermöglicht:

  ```json
    "browser_action": {
      "default_title": "Contextual Identities",
      "default_popup": "context.html",
      "default_icon": {
        "128": "identity.svg"
      }
  ```

## context.html

Ein Popup auf der Toolbar-Schaltfläche bietet die Benutzeroberfläche der Erweiterung. [context.html](https://github.com/mdn/webextensions-examples/blob/main/contextual-identities/context.html) implementiert dieses Popup, es ist jedoch nur eine Hülle, in die das Script context.js die Liste der kontextuellen Identitäten und deren zugehörige Optionen schreibt.

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

Das Skript ruft zunächst das 'identity-list' `<div>` aus context.html ab.

```js
let div = document.getElementById("identity-list");
```

Es wird dann geprüft, ob die Funktion der kontextuellen Identitäten im Browser aktiviert ist. Falls nicht, wird dem Popup eine Information hinzugefügt, wie sie aktiviert werden kann.

```js
if (browser.contextualIdentities === undefined) {
  div.innerText = 'browser.contextualIdentities not available. Check that the privacy.userContext.enabled pref is set to true, and reload the add-on.';
} else {
```

Firefox wird mit deaktivierter Funktion zur kontextuellen Identität installiert. Sie wird aktiviert, wenn eine Erweiterung, die die `contextualIdentities` API verwendet, installiert wird. Der Benutzer kann die Funktion jedoch mit einer Option auf der Einstellungsseite (about:preferences) deaktivieren, weshalb die Überprüfung erforderlich ist.

Das Skript verwendet nun {{WebExtAPIRef("contextualIdentities.query.")}}, um festzustellen, ob im Browser irgendwelche kontextuellen Identitäten definiert sind. Falls keine vorhanden sind, wird dem Popup eine Nachricht hinzugefügt und das Skript beendet.

```js
  browser.contextualIdentities.query({})
    .then((identities) => {
      if (!identities.length) {
        div.innerText = 'No identities returned from the API.';
        return;
      }
```

Falls kontextuelle Identitäten vorhanden sind – Firefox kommt mit vier Standardidentitäten – durchläuft das Skript jede und fügt ihren Namen, gestylt in ihrer gewählten Farbe, dem `<div>`-Element hinzu. Die Funktion `createOptions()` fügt dann die Optionen "erstellen" oder "alle schließen" zum `<div>` hinzu, bevor es zum Popup hinzugefügt wird.

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

Das Skript wartet nun darauf, dass der Benutzer im Popup eine Option auswählt.

```js
function eventHandler(event) {
```

Wenn der Benutzer die Option auswählt, ein Tab für eine Identität zu erstellen, wird eines mit der `cookieStoreId` der Identität geöffnet, indem {{WebExtAPIRef("tabs.create")}} aufgerufen wird.

```js
if (event.target.dataset.action === "create") {
  browser.tabs.create({
    url: "about:blank",
    cookieStoreId: event.target.dataset.identity,
  });
}
```

Wenn der Benutzer die Option wählt, alle Tabs für die Identität zu schließen, führt das Skript eine {{WebExtAPIRef("tabs.query")}} durch, um alle Tabs zu erhalten, die den Cookie-Speicher der Identität verwenden. Das Skript übergibt dann diese Liste von Tabs an {{WebExtAPIRef("tabs.remove")}}.

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

Wenn Sie mehr über die contextualIdentities API erfahren möchten, schauen Sie sich diese Ressourcen an:

- [contextualIdentities API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities).
- [Multi-Account Containers](https://github.com/mozilla/multi-account-containers/#readme) Quellcode der Erweiterung. Dies ist der Code für die [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) Erweiterung. Diese Erweiterung bietet Benutzern erweiterte Funktionen für kontextuelle Identitäten, wie die Möglichkeit, bei gedrücktem Linksklick auf die "Neuer Tab"-Schaltfläche die Identität für den neuen Tab auszuwählen. Es zeigt die Fähigkeiten von kontextuellen Identitäten und ist einen Blick wert.
