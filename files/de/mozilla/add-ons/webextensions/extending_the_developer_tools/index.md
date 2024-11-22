---
title: Erweiterung der Entwicklerwerkzeuge
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome-Devtools-APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, siehe [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können die WebExtensions-APIs verwenden, um die integrierten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt ist. Diese spezielle Erweiterungsseite wird als Devtools-Seite bezeichnet. Die URL muss relativ zur manifest.json-Datei sein.

Dieser Manifestschlüssel setzt automatisch die Berechtigung `"devtools"`, was eine [Berechtigungswarnung zur Installationszeit über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die Berechtigung `"devtools"` im Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) auflisten. Das Setzen der optionalen Berechtigung kann besonders hilfreich sein, wenn Sie Devtools-Funktionen in einem Update einführen, da es verhindert, dass die Erweiterung deaktiviert (in Chrome) oder von Updates blockiert wird (in Firefox).

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Entwicklerwerkzeuge des Browsers geöffnet werden, und entladen, wenn sie geschlossen werden. Beachten Sie, dass, weil das Devtools-Fenster mit einem einzelnen Tab verknüpft ist, es durchaus möglich ist, dass mehr als ein Devtools-Fenster - und somit mehr als eine Devtools-Seite - gleichzeitig existieren kann.

Die Devtools-Seite hat kein sichtbares DOM, kann jedoch JavaScript-Quellen mithilfe von [`<script>`](/de/docs/Web/HTML/Element/script)-Tags einbinden. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen erhalten Zugriff auf:

- Die normalen DOM-APIs, die über das globale [`window`](/de/docs/Web/API/Window)-Objekt zugänglich sind
- Die gleichen [WebExtension-APIs wie in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs hat und die Hintergrundseite keinen Zugriff auf die Devtools-APIs erhält. Stattdessen müssen die Devtools-Seite und die Hintergrundseite mittels der `runtime` Messaging-APIs kommunizieren. Hier ist ein Beispiel:

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

Das Devtools-Fenster beherbergt eine Reihe von separaten Werkzeugen - den JavaScript-Debugger, den Netzwerk-Monitor und so weiter. Eine Reihe von Tabs oben ermöglicht dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs hostet, wird als "Panel" bezeichnet.

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

Dies erfordert drei obligatorische Argumente: den Titel des Panels, das Icon und den Inhalt. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem `devtools.panels.ExtensionPanel`-Objekt aufgelöst wird, das das neue Panel repräsentiert.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer an einen bestimmten Browser-Tab angehängt. Dies wird als "Ziel" für die Entwicklerwerkzeuge oder das "untersuchte Fenster" bezeichnet. Sie können mit dem untersuchten Fenster über die API [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow) interagieren.

### Ausführen von Code im Ziel-Fenster

Die Methode [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) bietet eine Möglichkeit, Code im untersuchten Fenster auszuführen.

Dies ähnelt der Verwendung von {{WebExtAPIRef("tabs.executeScript()")}}, um ein Content Script zu injizieren, aber mit einem wichtigen Unterschied:

- im Gegensatz zu Content Scripts erhalten Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, **nicht** [eine "saubere Ansicht des DOM"](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): das bedeutet, sie können Änderungen an der Seite sehen, die durch Seitenskripte vorgenommen wurden.

> [!NOTE]
> Eine saubere Ansicht des DOM ist ein Sicherheitsmerkmal, das helfen soll, zu verhindern, dass feindliche Seiten Erweiterungen täuschen, indem sie das Verhalten nativer DOM-Funktionen neu definieren. Das bedeutet, dass Sie bei der Verwendung von eval() sehr vorsichtig sein müssen und, wenn möglich, ein normales Content Script verwenden sollten.

Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine in Content Scripts definierten JavaScript-Variablen.

### Arbeiten mit Content Scripts

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, sodass, wenn Sie ein Content Script injizieren müssen, das Devtools-Dokument eine Nachricht an das Hintergrundskript senden muss, in der es um das Injizieren des Skripts bittet. Der [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) liefert die ID des Ziel-Tabs: das Devtools-Dokument kann diese an das Hintergrundskript übergeben, und das Hintergrundskript kann sie wiederum in {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den Content Scripts im Ziel-Fenster und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, die {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}}-Objekten pflegen und diese verwenden, um Nachrichten zwischen den beiden Bereichen zu leiten.

![Die Tab-ID der Hintergrundseite ist mit dem Content Script auf der Inhaltsseite durch ein runtime.sendMessage()-Objekt verbunden. Der Port der Hintergrundseite ist mit dem Port des DevTools-Dokuments durch ein port.postMessage()-Objekt verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome-Devtools-APIs, aber viele Funktionen fehlen noch im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die noch nicht implementiert sind, Stand Firefox 54. Beachten Sie, dass die Devtools-APIs aktiv entwickelt werden und wir erwarten, in zukünftigen Versionen Unterstützung für die meisten davon hinzuzufügen.

### devtools.inspectedWindow

Die folgenden Funktionen werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen von `inspectedWindow.eval()` werden unterstützt.

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
