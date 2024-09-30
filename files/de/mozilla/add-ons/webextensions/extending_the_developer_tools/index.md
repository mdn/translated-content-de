---
title: Erweitern Sie die Entwicklerwerkzeuge
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die Devtools-APIs in Firefox 55. Obwohl die APIs auf den [Chrome Devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, implementiert Firefox nicht alle diese Funktionen; daher sind nicht alle Funktionen hier dokumentiert. Um zu sehen, welche Funktionen fehlen, lesen Sie [Einschränkungen der Devtools-APIs](#einschränkungen_der_devtools-apis).

Sie können die WebExtensions-APIs verwenden, um die eingebauten Entwicklerwerkzeuge des Browsers zu erweitern. Um eine Devtools-Erweiterung zu erstellen, fügen Sie den Schlüssel "[devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)" in Ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ein:

```json
"devtools_page": "devtools/devtools-page.html"
```

Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei zeigt, die mit Ihrer Erweiterung gebündelt ist und eine spezielle Erweiterungsseite namens Devtools-Seite ist. Die URL muss relativ zur manifest.json-Datei sein.

Dieser Manifest-Schlüssel setzt implizit die `"devtools"`-Berechtigung fest, was [eine Installationszeit-Berechtigungswarnung über Devtools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) auslöst. Um diese Warnung zu vermeiden, markieren Sie die Funktion als optional, indem Sie die `"devtools"`-Berechtigung im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel auflisten. Diese optionale Berechtigung kann besonders hilfreich sein, wenn Sie in einem Update Devtools-Funktionen einführen, da sie verhindert, dass die Erweiterung deaktiviert (in Chrome) oder vom Update blockiert (in Firefox) wird.

## Die Devtools-Seite

Die Devtools-Seite wird geladen, wenn die Browser-Devtools geöffnet und entladen, wenn sie geschlossen werden. Beachten Sie, dass das Devtools-Fenster mit einem einzelnen Tab verknüpft ist, und es ist durchaus möglich, dass mehr als ein Devtools-Fenster - und daher mehr als eine Devtools-Seite - gleichzeitig existiert.

Die Devtools-Seite hat keinen sichtbaren DOM, kann aber JavaScript-Quellen mittels [`<script>`](/de/docs/Web/HTML/Element/script)-Tags einbinden. Die Quellen müssen mit der Erweiterung selbst gebündelt sein. Die Quellen erhalten Zugriff auf:

- Die normalen DOM-APIs, die über das globale [`window`](/de/docs/Web/API/Window)-Objekt zugänglich sind
- Dieselben [WebExtension-APIs wie in Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#webextension_apis)
- Die Devtools-APIs:

  - [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)
  - [`devtools.network`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/network)
  - [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

Beachten Sie, dass die Devtools-Seite keinen Zugriff auf andere WebExtension-APIs hat und die Hintergrundseite keinen Zugriff auf die Devtools-APIs erhält. Stattdessen müssen die Devtools-Seite und die Hintergrundseite mittels der `runtime`-Messaging-APIs kommunizieren. Hier ist ein Beispiel:

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

Das Devtools-Fenster beherbergt eine Reihe von separaten Werkzeugen - den JavaScript Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Tabs oben lässt den Benutzer zwischen den verschiedenen Werkzeugen wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs hostet, wird "Panel" genannt.

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

Dies erfordert drei obligatorische Argumente: den Titel, das Symbol und den Inhalt des Panels. Es gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, welches sich zu einem `devtools.panels.ExtensionPanel`-Objekt auflöst, das das neue Panel darstellt.

## Interaktion mit dem Ziel-Fenster

Die Entwicklerwerkzeuge sind immer mit einem bestimmten Browser-Tab verknüpft. Dies wird als das "Ziel" für die Entwicklerwerkzeuge oder das "inspected window" bezeichnet. Sie können mit dem Inspected Window mittels der [`devtools.inspectedWindow`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow)-API interagieren.

### Code im Ziel-Fenster ausführen

Die [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval)-Methode bietet eine Möglichkeit, Code im Inspected Window auszuführen.

Dies ist in gewisser Weise vergleichbar mit {{WebExtAPIRef("tabs.executeScript()")}}, um ein Content Script zu injizieren, jedoch mit einem wichtigen Unterschied:

- Im Gegensatz zu Content Scripts erhalten Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, **nicht** [einen "sauberen Blick auf das DOM"](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#dom_access): Das bedeutet, dass sie Änderungen an der Seite sehen können, die von Seitenskripten vorgenommen wurden.

> [!NOTE]
> Ein sauberer Blick auf das DOM ist eine Sicherheitsfunktion, um zu verhindern, dass feindliche Seiten Extensions durch Neudefinition des Verhaltens nativer DOM-Funktionen täuschen. Das bedeutet, dass Sie beim Verwenden von eval() sehr vorsichtig sein müssen und falls möglich ein normales Content Script verwenden sollten.

Skripte, die mit `devtools.inspectedWindow.eval()` geladen werden, sehen auch keine JavaScript-Variablen, die von Content Scripts definiert wurden.

### Arbeiten mit Content Scripts

Ein Devtools-Dokument hat keinen direkten Zugriff auf {{WebExtAPIRef("tabs.executeScript()")}}, sodass es, wenn Sie ein Content Script injizieren müssen, eine Nachricht an das Hintergrundskript senden muss, um es zu bitten, das Skript zu injizieren. Die [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId) bietet die ID des Ziel-Tabs: Das Devtools-Dokument kann dies an das Hintergrundskript übergeben, und das Hintergrundskript kann es dann an {{WebExtAPIRef("tabs.executeScript()")}} übergeben:

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

Wenn Sie Nachrichten zwischen den im Inspected Window laufenden Content Scripts und einem Devtools-Dokument austauschen müssen, ist es eine gute Idee, {{WebExtAPIRef("runtime.connect()")}} und {{WebExtAPIRef("runtime.onConnect")}} zu verwenden, um eine Verbindung zwischen der Hintergrundseite und dem Devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Tab-IDs und {{WebExtAPIRef("runtime.Port")}}-Objekten aufrechterhalten und verwenden, um Nachrichten zwischen den beiden Bereichen zu leiten.

![Die Hintergrundseite Tab ID ist mit dem Content Script auf der Inhaltsseite durch ein runtime.sendmessage() Objekt verbunden. Der Port der Hintergrundseite ist mit dem Port des Devtools-Dokuments durch ein port.postMessage() Objekt verbunden.](devtools-content-scripts.png)

## Einschränkungen der Devtools-APIs

Diese APIs basieren auf den Chrome-Devtools-APIs, aber viele Funktionen fehlen immer noch im Vergleich zu Chrome. Dieser Abschnitt listet die Funktionen auf, die noch nicht implementiert sind, Stand Firefox 54. Beachten Sie, dass die Devtools-APIs aktiv entwickelt werden und wir erwarten, dass die meisten von ihnen in zukünftigen Versionen unterstützt werden.

### devtools.inspectedWindow

Folgende Funktionen werden nicht unterstützt:

- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`

Keine der Optionen von `inspectedWindow.eval()` werden unterstützt.

Skripte, die mit `inspectedWindow.eval()` injiziert werden, können nicht alle Befehlszeilen-Hilfsfunktionen der Konsole verwenden, aber `$0` und `inspect()` werden beide unterstützt (ab Firefox 55).

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

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält mehrere Beispiele für Erweiterungen, die Devtools-Panels verwenden:

- [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) verwenden Devtools-Panels:
