---
title: Entwicklerwerkzeuge erweitern
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome Devtools-APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, lesen Sie [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können die WebExtensions-APIs verwenden, um die integrierten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt ist, eine spezielle Erweiterungsseite namens Devtools-Seite. Die URL muss relativ zur manifest.json-Datei sein.

Dieser Manifest-Schlüssel setzt implizit die Berechtigung `"devtools"`, die eine [Warnung zur Berechtigung während der Installation über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auflisten. Das Setzen der optionalen Berechtigung kann besonders hilfreich sein, wenn Sie Devtools-Funktionen in einem Update einführen, da dies verhindert, dass die Erweiterung deaktiviert (in Chrome) oder das Update blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Entwicklerwerkzeuge des Browsers geöffnet werden, und entladen, wenn sie geschlossen werden. Beachten Sie, dass das Devtools-Fenster mit einem einzigen Tab verknüpft ist, sodass es durchaus möglich ist, dass mehr als ein Devtools-Fenster - und daher mehr als eine Devtools-Seite - gleichzeitig existieren kann.

Die Devtools-Seite hat keinen sichtbaren DOM, kann jedoch JavaScript-Quellen über [`<script>`](/de/docs/Web/HTML/Reference/Elements/script)-Tags einbeziehen. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen erhalten Zugriff auf:

- Die normalen DOM-APIs, die über das globale [`window`](/de/docs/Web/API/Window)-Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs erhält und die Hintergrundseite keinen Zugriff auf die Devtools-APIs hat. Stattdessen müssen die Devtools-Seite und die Hintergrundseite die `runtime`-Messaging-APIs verwenden, um zu kommunizieren. Hier ist ein Beispiel:

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

Das Devtools-Fenster beherbergt eine Reihe separater Werkzeuge - den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben ermöglicht es dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs beherbergt, wird als "Panel" bezeichnet.

Mit der `devtools.panels.create()`-API können Sie Ihr eigenes Panel im Devtools-Fenster erstellen:

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

Dies erfordert drei obligatorische Argumente: den Titel, das Symbol und den Inhalt des Panels. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem `devtools.panels.ExtensionPanel`-Objekt aufgelöst wird, das das neue Panel darstellt.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer an einen bestimmten Browsertab angeheftet. Dies wird als das "Ziel" für die Entwicklerwerkzeuge bezeichnet oder als das "inspizierte Fenster". Sie können mit dem inspizierten Fenster über die [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)-API interagieren.

### Ausführen von Code im Ziel-Fenster

Die [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im inspizierten Fenster auszuführen.

Dies ähnelt dem Einsatz von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Content-Skript zu injizieren, jedoch mit einem wichtigen Unterschied:

- Im Gegensatz zu Content-Skripten erhalten Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, **keine** [„saubere Ansicht des DOM“](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): Das heißt, sie können Änderungen an der Seite sehen, die durch Seitenskripte vorgenommen wurden.

> [!NOTE]
> Eine saubere Ansicht des DOM ist eine Sicherheitsmaßnahme, die verhindern soll, dass feindliche Seiten Erweiterungen täuschen, indem sie das Verhalten nativer DOM-Funktionen neu definieren. Daher müssen Sie eval() mit großer Vorsicht verwenden und sollten ein normales Content-Skript verwenden, wenn Sie können.

Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die von Content-Skripten definiert wurden.

### Arbeiten mit Content-Skripten

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument, wenn Sie ein Content-Skript injizieren müssen, eine Nachricht an das Hintergrundskript senden, damit es das Skript injiziert. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: Das Devtools-Dokument kann diese an das Hintergrundskript übergeben, und das Hintergrundskript kann diese wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den Content-Skripten, die im Ziel-Fenster ausgeführt werden, und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, die {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}}-Objekten aufrechterhalten und diese verwenden, um Nachrichten zwischen den zwei Bereichen zu routen.

![Die Tab-ID der Hintergrundseite ist über ein runtime.sendMessage() Objekt mit dem Content-Skript auf der Content-Seite verbunden. Der Port der Hintergrundseite ist über ein port.postMessage() Objekt mit dem Port des Devtools-Dokuments verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome Devtools-APIs, aber viele Funktionen fehlen noch im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die bis Firefox 54 noch nicht implementiert sind. Beachten Sie, dass die Devtools-APIs aktiv weiterentwickelt werden und wir erwarten, die meisten von ihnen in zukünftigen Versionen zu unterstützen.

### devtools.inspectedWindow

Folgendes wird nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen zu `inspectedWindow.eval()` wird unterstützt.

Skripte, die mit `inspectedWindow.eval()` injiziert werden, können nicht alle Konsolen-Befehlszeilen-Hilfsfunktionen verwenden, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

### devtools.panels

Folgendes wird nicht unterstützt:

- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
