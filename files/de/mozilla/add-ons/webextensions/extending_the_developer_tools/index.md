---
title: Erweiterung der Entwicklerwerkzeuge
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome Devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, verweisen wir auf [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können WebExtensions-APIs verwenden, um die integrierten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt ist. Diese spezielle Erweiterungsseite wird als Devtools-Seite bezeichnet. Die URL muss relativ zur `manifest.json`-Datei sein.

Dieser Manifest-Schlüssel setzt implizit die `"devtools"`-Berechtigung, die eine [Berechtigungswarnung zur Installationszeit über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, kennzeichnen Sie die Funktion als optional, indem Sie die `"devtools"`-Berechtigung im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel auflisten. Das Setzen der optionalen Berechtigung kann besonders hilfreich sein, wenn bei einem Update Devtools-Funktionen eingeführt werden, da es verhindert, dass die Erweiterung deaktiviert wird (in Chrome) oder vom Update blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Entwicklerwerkzeuge des Browsers geöffnet werden, und entladen, wenn sie geschlossen werden. Beachten Sie, dass, da das Devtools-Fenster mit einem einzigen Tab verknüpft ist, es durchaus möglich ist, dass mehr als ein Devtools-Fenster – und daher mehr als eine Devtools-Seite – gleichzeitig existiert.

Die Devtools-Seite hat keine sichtbare DOM, kann aber JavaScript-Quellen mithilfe von `<script>`-Tags einbinden. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen erhalten Zugriff auf:

- Die normalen DOM-APIs, die über das globale [`window`](/de/docs/Web/API/Window)-Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs erhält und die Hintergrundseite keinen Zugriff auf die Devtools-APIs erhält. Stattdessen müssen die Devtools-Seite und die Hintergrundseite mithilfe der `runtime`-Messaging-APIs kommunizieren. Hier ein Beispiel:

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

Das Devtools-Fenster hostet eine Reihe von separaten Werkzeugen – den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Registerkarten oben ermöglicht es dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs hostet, wird als "Panel" bezeichnet.

Mithilfe der `devtools.panels.create()`-API können Sie Ihr eigenes Panel im Devtools-Fenster erstellen:

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

Dies erfordert drei obligatorische Argumente: den Titel des Panels, das Symbol und den Inhalt. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem `devtools.panels.ExtensionPanel`-Objekt aufgelöst wird, das das neue Panel darstellt.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer an einen bestimmten Browser-Tab angehängt. Dies wird als "Ziel" für die Entwicklerwerkzeuge oder als "inspected window" bezeichnet. Sie können mit dem inspizierten Fenster mithilfe der [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)-API interagieren.

### Ausführen von Code im Ziel-Fenster

Die [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im inspizierten Fenster auszuführen.

Dies ist etwas ähnlich wie die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Content Script zu injizieren, aber mit einem wichtigen Unterschied:

- Im Gegensatz zu Content Scripts erhalten Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, **keine** [saubere Ansicht des DOM](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): das heißt, sie können Änderungen an der Seite sehen, die durch Seiten-Skripte vorgenommen wurden.

> [!NOTE]
> Eine saubere Ansicht des DOM ist eine Sicherheitsfunktion, die verhindern soll, dass feindliche Seiten Erweiterungen täuschen, indem sie das Verhalten nativer DOM-Funktionen neu definieren. Das bedeutet, dass Sie sehr vorsichtig sein müssen, wenn Sie eval() verwenden, und stattdessen ein normales Content Script verwenden sollten, wenn Sie können.

Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die von Content Scripts definiert sind.

### Arbeiten mit Content Scripts

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument, wenn Sie ein Content Script injizieren müssen, eine Nachricht an das Hintergrund-Skript senden, die es auffordert, das Skript zu injizieren. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: Das Devtools-Dokument kann dies an das Hintergrund-Skript weitergeben, und das Hintergrund-Skript kann es wiederum an {{WebExtAPIRef("tabs.executeScript()")}} weitergeben:

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

Wenn Sie Nachrichten zwischen den Content Scripts, die im Ziel-Fenster ausgeführt werden, und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}}-Objekten aufrechterhalten und diese verwenden, um Nachrichten zwischen den beiden Geltungsbereichen zu leiten.

![Die Tab-ID der Hintergrundseite ist mit dem Content Script auf der Inhaltsseite durch ein runtime.sendMessage()-Objekt verbunden. Der Port der Hintergrundseite ist mit dem Port des Devtools-Dokuments durch ein port.postMessage()-Objekt verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome Devtools APIs, bieten jedoch viele Funktionen bislang nicht im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die ab Firefox 54 noch nicht implementiert sind. Beachten Sie, dass sich die Devtools-APIs in aktiver Entwicklung befinden und wir erwarten, dass wir die Unterstützung für die meisten davon in zukünftigen Versionen hinzufügen.

### devtools.inspectedWindow

Die folgenden Funktionen werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keiner der Optionen für `inspectedWindow.eval()` wird unterstützt.

Skripte, die mit `inspectedWindow.eval()` injiziert werden, können nicht alle Befehlszeilen-Hilfsfunktionen der Konsole verwenden, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repo auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
