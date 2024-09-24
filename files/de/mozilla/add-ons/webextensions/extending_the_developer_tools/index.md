---
title: Erweitern Sie die Entwicklertools
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind hier nicht alle Funktionen dokumentiert. Um zu sehen, welche Funktionen fehlen, lesen Sie bitte [Limitations of the devtools APIs](#einschränkungen_der_devtools-apis).

Sie können die WebExtensions-APIs verwenden, um die integrierten Entwicklertools des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt ist, eine spezielle Erweiterungsseite namens Devtools-Seite. Die URL muss relativ zur manifest.json Datei sein.

Dieser Manifest-Schlüssel setzt implizit die `"devtools"`-Berechtigung, die eine [eine Warnung zur Berechtigungsanforderung bei der Installation über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die `"devtools"`-Berechtigung im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel auflisten. Die Festlegung der optionalen Berechtigung kann besonders hilfreich sein, wenn Devtools-Funktionen in einem Update eingeführt werden, da dies verhindert, dass die Erweiterung deaktiviert (in Chrome) oder die Aktualisierung blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Browser-Entwicklertools geöffnet werden, und entladen, wenn sie geschlossen werden. Beachten Sie, dass, da das Devtools-Fenster einem einzelnen Tab zugeordnet ist, es durchaus möglich ist, dass mehr als ein Devtools-Fenster – und damit mehr als eine Devtools-Seite – gleichzeitig existiert.

Die Devtools-Seite hat keine sichtbare DOM, kann aber JavaScript-Quellen mit [`<script>`](/de/docs/Web/HTML/Element/script) Tags beinhalten. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen haben Zugriff auf:

- Die normalen DOM-APIs, die über das globale [`window`](/de/docs/Web/API/Window) Objekt erreichbar sind
- Dieselben [WebExtension-APIs wie in Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs erhält, und die Hintergrundseite keinen Zugriff auf die Devtools-APIs hat. Stattdessen müssen die Devtools-Seite und die Hintergrundseite über die `runtime` Messaging-APIs kommunizieren. Hier ist ein Beispiel:

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

Die Datei `devtools.js` enthält den eigentlichen Code, der Ihre Devtools-Erweiterungen erstellt.

## Erstellen von Panels

Das Devtools-Fenster beherbergt mehrere separate Werkzeuge - den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben ermöglicht dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs hostet, wird als "Panel" bezeichnet.

Mit der `devtools.panels.create()` API können Sie Ihr eigenes Panel im Devtools-Fenster erstellen:

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

Dies erfordert drei obligatorische Argumente: den Titel, das Symbol und den Inhalt des Panels. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem `devtools.panels.ExtensionPanel` Objekt aufgelöst wird, das das neue Panel darstellt.

## Interaktion mit dem Ziel-Fenster

Die Entwicklertools sind immer mit einem bestimmten Browser-Tab verbunden. Dies wird als das "Ziel" der Entwicklertools oder das "untersuchte Fenster" bezeichnet. Sie können mit dem untersuchten Fenster mithilfe der [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow) API interagieren.

### Ausführen von Code im Ziel-Fenster

Das [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im untersuchten Fenster auszuführen.

Dies ähnelt dem Verwenden von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhalts-Skript einzufügen, jedoch mit einem wichtigen Unterschied:

- Im Gegensatz zu Inhalts-Skripten erhalten Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, **keinen** [einen "sauberen Blick auf das DOM"](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): das heißt, sie können Änderungen an der Seite sehen, die durch Seiten-Skripte vorgenommen werden.

> [!NOTE]
> Ein sauberer Blick auf das DOM ist eine Sicherheitsfunktion, die dazu gedacht ist, böswillige Seiten daran zu hindern, Erweiterungen zu täuschen, indem sie das Verhalten nativer DOM-Funktionen neu definieren. Das bedeutet, dass Sie sehr vorsichtig im Umgang mit eval() sein müssen und ein normales Inhalts-Skript verwenden sollten, wenn möglich.

Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die von Inhalts-Skripten definiert wurden.

### Arbeiten mit Inhalts-Skripten

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument eine Nachricht an das Hintergrund-Skript senden, um es zu bitten, das Skript einzufügen. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: das Devtools-Dokument kann dies an das Hintergrund-Skript übermitteln, und das Hintergrund-Skript kann es wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den Inhalts-Skripten, die im Ziel-Fenster ausgeführt werden, und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}} Objekten aufrechterhalten und diese verwenden, um Nachrichten zwischen den beiden Bereichen zu leiten.

![Die Hintergrundseite Tab-ID ist mit dem Inhalts-Skript auf der Inhaltsseite durch ein runtime.sendmessage() Objekt verbunden. Der Port der Hintergrundseite ist mit dem Port des Devtools-Dokuments durch ein port.postMessage() Objekt verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome-Devtools-APIs, aber viele Funktionen fehlen noch im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die in Firefox 54 noch nicht implementiert sind. Beachten Sie, dass die Devtools-APIs aktiv entwickelt werden und wir erwarten, die meisten von ihnen in zukünftigen Versionen zu unterstützen.

### devtools.inspectedWindow

Folgende Funktionen werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen zu `inspectedWindow.eval()` werden unterstützt.

Skripte, die mit `inspectedWindow.eval()` eingefügt werden, können nicht alle Befehlszeilen-Hilfsfunktionen der Konsole verwenden, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repo auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
