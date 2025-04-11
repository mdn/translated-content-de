---
title: Erweitern der Entwicklerwerkzeuge
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome-Devtools-APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, verweisen wir auf [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können die WebExtensions-APIs nutzen, um die integrierten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei zeigt, die mit Ihrer Erweiterung gebündelt ist, eine spezielle Erweiterungsseite, die als Devtools-Seite bezeichnet wird. Die URL muss relativ zur manifest.json-Datei sein.

Dieser Manifest-Schlüssel setzt implizit die Berechtigung `"devtools"`, was eine [Installationszeit-Berechtigungswarnung bezüglich der Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auflisten. Das Setzen der optionalen Berechtigung kann besonders hilfreich sein, wenn Sie in einem Update Devtools-Funktionen einführen, da es verhindert, dass die Erweiterung deaktiviert (in Chrome) oder die Aktualisierung blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Browser-Devtools geöffnet und entladen, wenn sie geschlossen werden. Beachten Sie, dass aufgrund des Zusammenhangs der Devtools-Fenster mit einem einzigen Tab mehrere Devtools-Fenster - und somit mehrere Devtools-Seiten - gleichzeitig existieren können.

Die Devtools-Seite hat kein sichtbares DOM, kann aber JavaScript-Quellen mithilfe von [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tags einbinden. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen haben Zugriff auf:

- Die normalen DOM-APIs, die durch das globale [`window`](/de/docs/Web/API/Window)-Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Inhalts-Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs hat und die Hintergrundseite keinen Zugriff auf die Devtools-APIs. Stattdessen müssen die Devtools-Seite und die Hintergrundseite über die `runtime`-Messaging-APIs kommunizieren. Hier ist ein Beispiel:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>DevTools Extension</title>
  </head>
  <body>
    <script src="devtools.js"></script>
  </body>
</html>
```

Die Datei `devtools.js` wird den eigentlichen Code enthalten, der Ihre Devtools-Erweiterungen erstellt.

## Erstellen von Panels

Das Devtools-Fenster beherbergt eine Reihe von separaten Werkzeugen - den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben ermöglicht es dem Benutzer, zwischen verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs beherbergt, wird als "Panel" bezeichnet.

Mit der API `devtools.panels.create()` können Sie Ihr eigenes Panel im Devtools-Fenster erstellen:

```js
browser.devtools.panels
  .create(
    "My Panel", // title
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(initialisePanel);
    newPanel.onHidden.addListener(unInitialisePanel);
  });
```

Dies erfordert drei obligatorische Argumente: den Titel, das Symbol und den Inhalt des Panels. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das ein `devtools.panels.ExtensionPanel`-Objekt darstellt, das das neue Panel repräsentiert.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer an einen bestimmten Browser-Tab angehängt. Dies wird als das "Ziel" für die Entwicklerwerkzeuge oder das "inspected window" bezeichnet. Sie können mit dem inspizierten Fenster mithilfe der [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)-API interagieren.

### Ausführen von Code im Ziel-Fenster

Die [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im inspizierten Fenster auszuführen.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhalts-Script einzubetten, hat jedoch einen wichtigen Unterschied:

- Im Gegensatz zu Inhalts-Scripts erhalten Scripts, die mit `devtools.inspectedWindow.eval()` geladen werden, **keinen** [sauberen Blick auf das DOM](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): Das heißt, sie können Änderungen an der Seite sehen, die durch Seitenskripte vorgenommen wurden.

> [!NOTE]
> Ein sauberer Blick auf das DOM ist ein Sicherheitsmerkmal, das dazu gedacht ist, bösartige Seiten daran zu hindern, Erweiterungen durch Umdefinieren des Verhaltens nativer DOM-Funktionen zu täuschen. Dies bedeutet, dass Sie bei der Verwendung von eval() sehr vorsichtig sein müssen und, wenn möglich, ein normales Inhalts-Skript verwenden sollten.

Scripts, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die von Inhalts-Scripts definiert werden.

### Umgang mit Inhalts-Scripts

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument eine Nachricht an das Hintergrundskript senden, um es zu bitten, das Skript einzubetten. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: Das Devtools-Dokument kann dies an das Hintergrundskript weitergeben, und das Hintergrundskript kann es wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

```js
// devtools-panel.js

const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

window.addEventListener("click", () => {
  browser.runtime.sendMessage({
    tabId: browser.devtools.inspectedWindow.tabId,
    script: scriptToAttach,
  });
});
```

```js
// background.js

function handleMessage(request, sender, sendResponse) {
  browser.tabs.executeScript(request.tabId, {
    code: request.script,
  });
}

browser.runtime.onMessage.addListener(handleMessage);
```

Wenn Sie Nachrichten zwischen den im Ziel-Fenster laufenden Inhalts-Scripts und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, die {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}}-Objekten aufrechterhalten und diese verwenden, um Nachrichten zwischen den beiden Bereichen zu leiten.

![Die Tab-ID der Hintergrundseite ist mit dem Inhalts-Skript auf der Inhaltsseite durch ein runtime.sendMessage()-Objekt verbunden. Der Port der Hintergrundseite ist mit dem Port des DevTools-Dokuments durch ein port.postMessage()-Objekt verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome-Devtools-APIs, aber viele Funktionen fehlen im Vergleich zu Chrome immer noch. Dieser Abschnitt listet die Funktionen auf, die in Firefox 54 immer noch nicht implementiert wurden. Beachten Sie, dass die Devtools-APIs aktiv entwickelt werden und wir erwarten, dass die meisten von ihnen in zukünftigen Versionen unterstützt werden.

### devtools.inspectedWindow

Folgende Funktionen werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen zu `inspectedWindow.eval()` werden unterstützt.

Scripts, die mit `inspectedWindow.eval()` injiziert werden, können nicht alle Konsolen-Helper-Funktionen der Befehlszeile nutzen, aber `$0` und `inspect()` werden beide unterstützt (beginnend ab Firefox 55).

### devtools.panels

Folgende Funktionen werden nicht unterstützt:

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## Beispiele

Das [WebExtensions-Beispiele](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwendet Devtools-Panels:
