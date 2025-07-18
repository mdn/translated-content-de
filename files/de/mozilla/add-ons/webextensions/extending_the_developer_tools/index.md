---
title: Entwicklerwerkzeuge erweitern
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome Devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, lesen Sie [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können WebExtensions-APIs verwenden, um die eingebauten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt ist, einer speziellen Erweiterungsseite, die als Devtools-Seite bezeichnet wird. Die URL muss relativ zur manifest.json-Datei sein.

Dieser Manifest-Schlüssel setzt implizit die Berechtigung `"devtools"`, was eine [Installationszeit-Berechtigungswarnung bezüglich der Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie das Feature als optional, indem Sie die Berechtigung `"devtools"` im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel auflisten. Das Setzen der optionalen Berechtigung kann besonders hilfreich sein, wenn Devtools-Funktionen in einem Update eingeführt werden, da es verhindert, dass die Erweiterung deaktiviert wird (in Chrome) oder vom Update blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Browser-Entwicklerwerkzeuge geöffnet werden und wird entladen, wenn sie geschlossen werden. Beachten Sie, dass da das Devtools-Fenster mit einem einzelnen Tab verknüpft ist, mehr als ein Devtools-Fenster – und damit mehr als eine Devtools-Seite – gleichzeitig existieren kann.

Die Devtools-Seite hat kein sichtbares DOM, kann aber JavaScript-Quellen mittels [`<script>`](/de/docs/Web/HTML/Reference/Elements/script) Tags enthalten. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen haben Zugriff auf:

- Die normalen DOM-APIs, die durch das globale [`window`](/de/docs/Web/API/Window) Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:
  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs hat und die Hintergrundseite keinen Zugriff auf die Devtools-APIs hat. Stattdessen müssen die Devtools- und die Hintergrundseite mithilfe der `runtime`-Messaging-APIs kommunizieren. Hier ist ein Beispiel:

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

Die Datei `devtools.js` enthält den tatsächlichen Code zur Erstellung Ihrer Devtools-Erweiterungen.

## Panels erstellen

Das Devtools-Fenster beherbergt mehrere separate Werkzeuge – den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben lässt den Benutzer zwischen den verschiedenen Werkzeugen wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs beherbergt, wird als "Panel" bezeichnet.

Mithilfe der `devtools.panels.create()` API können Sie Ihr eigenes Panel im Devtools-Fenster erstellen:

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

Dies erfordert drei obligatorische Argumente: den Titel des Panels, das Symbol und den Inhalt. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem `devtools.panels.ExtensionPanel` Objekt wird, das das neue Panel darstellt.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer an einen bestimmten Browser-Tab gebunden. Dies wird als "Ziel" für die Entwicklerwerkzeuge oder das "inspektierte Fenster" bezeichnet. Sie können mit dem inspizierten Fenster über die [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow) API interagieren.

### Code im Ziel-Fenster ausführen

Die [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im inspizierten Fenster auszuführen.

Dies ist ein wenig wie das Verwenden von {{WebExtAPIRef("tabs.executeScript()")}} zum Injizieren eines Content Scripts, jedoch mit einem wichtigen Unterschied:

- anders als Content Scripts, erhalten Skripte, die mittels `devtools.inspectedWindow.eval()` geladen werden, **keine** [„saubere Ansicht des DOMs“](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): Das heißt, sie können Änderungen an der Seite sehen, die von Seitenskripten vorgenommen wurden.

> [!NOTE]
> Eine saubere Ansicht des DOM ist ein Sicherheitsmerkmal, das dazu gedacht ist, zu verhindern, dass feindliche Seiten Erweiterungen hereinlegen, indem sie das Verhalten von nativen DOM-Funktionen neu definieren. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie eval() verwenden, und einen normalen Content Script verwenden sollten, wenn Sie können.

Skripte, die mittels `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die von Content Scripts definiert wurden.

### Arbeiten mit Content Scripts

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument, wenn Sie ein Content Script injizieren müssen, eine Nachricht an das Hintergrundskript senden und es bitten, das Skript zu injizieren. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: Das Devtools-Dokument kann dies an das Hintergrundskript übergeben, und das Hintergrundskript kann es wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den Content Scripts, die im Ziel-Fenster ausgeführt werden, und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, die {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument einzurichten. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}} Objekten pflegen und verwenden, um Nachrichten zwischen den beiden Bereichen zu routen.

![Die Tab-ID der Hintergrundseite ist über ein runtime.sendMessage() Objekt mit dem Content Script auf der Inhaltsseite verbunden. Der Port der Hintergrundseite ist über ein port.postMessage() Objekt mit dem Port des DevTools-Dokuments verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome Devtools APIs, aber viele Funktionen fehlen noch im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die ab Firefox 54 noch nicht implementiert sind. Beachten Sie, dass die Devtools-APIs aktiv entwickelt werden und wir erwarten, dass in zukünftigen Versionen die meisten davon unterstützt werden.

### devtools.inspectedWindow

Die folgenden werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen für `inspectedWindow.eval()` werden unterstützt.

Skripte, die unter Verwendung von `inspectedWindow.eval()` injiziert werden, können nicht alle Konsolen-Hilfsfunktionen der Befehlszeile verwenden, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

### devtools.panels

Die folgenden werden nicht unterstützt:

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält mehrere Beispiele von Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
