---
title: Erweiterung der Entwicklerwerkzeuge
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome Devtools-APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind hier nicht alle Funktionen dokumentiert. Um zu sehen, welche Funktionen fehlen, lesen Sie bitte [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können WebExtensions-APIs verwenden, um die integrierten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei in Ihrer Erweiterung verweist, eine spezielle Erweiterungsseite, die als Devtools-Seite bezeichnet wird. Die URL muss relativ zur manifest.json-Datei sein.

Dieser Manifest-Schlüssel setzt implizit die "devtools"-Berechtigung, die eine [Installationszeit-Berechtigungswarnung über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die "devtools"-Berechtigung im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel auflisten. Das Setzen der optionalen Berechtigung kann besonders hilfreich sein, wenn Sie Devtools-Funktionen in ein Update einführen, da so verhindert wird, dass die Erweiterung deaktiviert (in Chrome) oder vom Aktualisieren blockiert (in Firefox) wird.

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Browser-Devtools geöffnet und entladen, wenn sie geschlossen werden. Beachten Sie, dass, da das Devtools-Fenster mit einem einzelnen Tab verbunden ist, es sehr gut möglich ist, dass mehr als ein Devtools-Fenster - und daher mehr als eine Devtools-Seite - gleichzeitig existiert.

Die Devtools-Seite hat keinen sichtbaren DOM, kann aber JavaScript-Quellen durch [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Tags einbinden. Die Quellen müssen in die Erweiterung selbst verpackt sein. Die Quellen erhalten Zugriff auf:

- Die normalen DOM-APIs, die über das globale [`window`](/de/docs/Web/API/Window) Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:
  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs hat und die Hintergrundseite keinen Zugriff auf die Devtools-APIs. Stattdessen müssen die Devtools-Seite und die Hintergrundseite über die `runtime` Messaging-APIs kommunizieren. Hier ist ein Beispiel:

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

Die Datei `devtools.js` enthält den tatsächlichen Code, der Ihre Devtools-Erweiterungen erstellt.

## Erstellung von Panels

Das Devtools-Fenster beherbergt eine Reihe von separaten Werkzeugen - den JavaScript-Debugger, den Netzwerkmonitor usw. Eine Reihe von Tabs oben ermöglicht es dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs beherbergt, wird als "Panel" bezeichnet.

Mit der `devtools.panels.create()` API können Sie Ihr eigenes Panel im Devtools-Fenster erstellen:

```js
browser.devtools.panels
  .create(
    "My Panel", // title
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(initializePanel);
    newPanel.onHidden.addListener(unInitializePanel);
  });
```

Dies erfordert drei obligatorische Argumente: den Titel des Panels, das Icon und den Inhalt. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das in ein `devtools.panels.ExtensionPanel` Objekt aufgelöst wird, das das neue Panel repräsentiert.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer mit einem bestimmten Browser-Tab verbunden. Dieses wird als das "Ziel" für die Entwicklerwerkzeuge oder das "inspektierte Fenster" bezeichnet. Sie können mit dem inspizierten Fenster durch die [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow) API interagieren.

### Ausführung von Code im Ziel-Fenster

Die [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im inspizierten Fenster auszuführen.

Dies ist etwas Ähnliches wie das Verwenden von {{WebExtAPIRef("tabs.executeScript()")}} um ein Content-Script zu injizieren, aber mit einem wichtigen Unterschied:

- Im Gegensatz zu Content Scripts erhalten Scripte, die mit `devtools.inspectedWindow.eval()` geladen werden, **keinen** [„sauberen Blick auf das DOM“](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): das heißt, sie können Änderungen an der Seite sehen, die durch Seitenskripte gemacht wurden.

> [!NOTE]
> Ein sauberer Blick auf das DOM ist eine Sicherheitsfunktion, die dazu gedacht ist, feindliche Seiten daran zu hindern, Erweiterungen auszutricksen, indem sie das Verhalten nativer DOM-Funktionen umdefinieren. Das bedeutet, dass Sie sehr vorsichtig bei der Verwendung von eval() sein müssen und ein normales Content-Script verwenden sollten, wenn möglich.

Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die durch Content Scripts definiert wurden.

### Arbeiten mit Content Scripts

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument, wenn Sie ein Content-Script injizieren müssen, eine Nachricht an das Hintergrundskript senden und es bitten, das Skript zu injizieren. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: das Devtools-Dokument kann dieses an das Hintergrundskript übergeben, und das Hintergrundskript kann es wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den Content-Scripts, die im Ziel-Fenster laufen, und einem Devtools-Dokument austauschen müssen, ist es ratsam, die {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument einzurichten. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}} Objekten aufrechterhalten und diese verwenden, um Nachrichten zwischen den beiden Bereichen zu leiten.

![Die Tab-ID der Hintergrundseite ist durch ein runtime.sendMessage() Objekt mit dem Content-Script auf der Content-Seite verbunden. Der Port der Hintergrundseite ist durch ein port.postMessage() Objekt mit dem Port des DevTools-Dokuments verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome Devtools-APIs, aber im Vergleich zu Chrome fehlen noch viele Funktionen. Dieser Abschnitt listet die Funktionen auf, die ab Firefox 54 noch nicht implementiert sind. Beachten Sie, dass die Devtools-APIs aktiv weiterentwickelt werden und wir erwarten, die meisten davon in zukünftigen Versionen zu unterstützen.

### devtools.inspectedWindow

Die folgenden Funktionen werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen für `inspectedWindow.eval()` werden unterstützt.

Skripte, die mit `inspectedWindow.eval()` injiziert werden, können nicht alle Konsolen-Hilfsfunktionen der Befehlszeile verwenden, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

### devtools.panels

Die folgenden Funktionen werden nicht unterstützt:

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
