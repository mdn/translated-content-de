---
title: Erweitern Sie die Entwicklerwerkzeuge
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome-Devtools-APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, lesen Sie [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können WebExtensions-APIs verwenden, um die integrierten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt ist, eine spezielle Erweiterungsseite namens Devtools-Seite. Die URL muss relativ zur manifest.json-Datei sein.

Dieses Manifest-Schlüssel setzt implizit die Berechtigung `"devtools"`, was eine [Installationswarnung über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) Manifest-Schlüssel auflisten. Das Festlegen der optionalen Berechtigung kann besonders hilfreich sein, wenn Sie Devtools-Funktionen in einem Update einführen, da es verhindert, dass die Erweiterung deaktiviert wird (in Chrome) oder dass das Update blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Browser-Devtools geöffnet werden, und entladen, wenn sie geschlossen werden. Beachten Sie, dass, da das Devtools-Fenster mit einem einzelnen Tab verknüpft ist, es sehr wohl möglich ist, dass mehr als ein Devtools-Fenster - und daher mehr als eine Devtools-Seite - gleichzeitig existiert.

Die Devtools-Seite hat keinen sichtbaren DOM, kann aber JavaScript-Quellen mit `<script>`-Tags einbinden. Die Quellen müssen mit der Erweiterung selbst gebündelt werden. Die Quellen haben Zugriff auf:

- Die normalen DOM-APIs, die durch das globale `window`-Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Inhaltsskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - `devtools.inspectedWindow`
  - `devtools.network`
  - `devtools.panels`

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs hat und die Hintergrundseite keinen Zugriff auf die Devtools-APIs hat. Stattdessen müssen die Devtools-Seite und die Hintergrundseite mithilfe der `runtime`-Messaging-APIs kommunizieren. Hier ist ein Beispiel:

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

## Erstellen von Panels

Das Devtools-Fenster hostet eine Reihe von separaten Werkzeugen - den JavaScript-Debugger, den Netzwerk-Monitor und so weiter. Eine Reihe von Tabs oben ermöglicht dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs hostet, wird als "Panel" bezeichnet.

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

Dies nimmt drei obligatorische Argumente: den Titel des Panels, das Icon und den Inhalt. Es gibt ein `Promise` zurück, das sich zu einem `devtools.panels.ExtensionPanel`-Objekt auflöst, das das neue Panel darstellt.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer an einen bestimmten Browser-Tab angehängt. Dies wird als das "Ziel" für die Entwicklerwerkzeuge oder das "inspekte Fenster" bezeichnet. Sie können mit dem inspizierten Fenster über die API `devtools.inspectedWindow` interagieren.

### Ausführen von Code im Ziel-Fenster

Die Funktion `devtools.inspectedWindow.eval()` bietet eine Möglichkeit, Code im inspizierten Fenster auszuführen.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Inhaltsskript zu injizieren, aber mit einem wichtigen Unterschied:

- Anders als Inhaltsskripte erhalten Scripts, die mit `devtools.inspectedWindow.eval()` geladen wurden, **keinen** [ein "sauberes Bild des DOM"](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): Das bedeutet, dass sie Änderungen an der Seite sehen können, die von Seitenskripten vorgenommen wurden.

> [!NOTE]
> Ein sauberes Bild des DOM ist ein Sicherheitsmerkmal, das verhindern soll, dass es feindlichen Seiten gelingt, Erweiterungen durch Neudefinieren des Verhaltens nativer DOM-Funktionen zu täuschen. Das bedeutet, dass Sie bei der Verwendung von eval() sehr vorsichtig sein müssen und, falls möglich, ein normales Inhaltsskript verwenden sollten.

Scripts, die mit `devtools.inspectedWindow.eval()` geladen wurden, sehen auch keine JavaScript-Variablen, die durch Inhaltsskripte definiert wurden.

### Arbeiten mit Inhaltsskripten

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, daher muss das Devtools-Dokument eine Nachricht an das Hintergrundskript senden und es darum bitten, das Skript zu injizieren. Die Funktion `devtools.inspectedWindow.tabId` liefert die ID des Ziel-Tabs: Das Devtools-Dokument kann dies an das Hintergrundskript weitergeben, und das Hintergrundskript kann es wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den in das Ziel-Fenster laufenden Inhaltsskripten und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, die {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument einzurichten. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}}-Objekten pflegen und diese verwenden, um Nachrichten zwischen den beiden Bereichen zu leiten.

![Die Tab ID der Hintergrundseite ist mit dem Inhaltsskript auf der Inhaltsseite durch ein runtime.sendmessage() Objekt verbunden. Der Port der Hintergrundseite ist mit dem Port des Devtools-Dokuments durch ein port.postMessage() Objekt verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome-Devtools-APIs, aber viele Funktionen fehlen noch im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die ab Firefox 54 noch nicht implementiert sind. Beachten Sie, dass die Devtools-APIs aktiv weiterentwickelt werden, und wir erwarten, die Unterstützung für die meisten von ihnen in zukünftigen Versionen hinzuzufügen.

### devtools.inspectedWindow

Folgendes wird nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen zu `inspectedWindow.eval()` werden unterstützt.

Scripts, die unter Verwendung von `inspectedWindow.eval()` injiziert werden, können nicht alle Befehlszeilen-Hilfsfunktionen der Konsole nutzen, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) nutzen Devtools-Panels:
