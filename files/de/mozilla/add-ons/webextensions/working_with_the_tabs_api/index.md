---
title: Arbeit mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{AddonSidebar}}

Tabs ermöglichen es einem Benutzer, mehrere Webseiten in ihrem Browserfenster zu öffnen und zwischen diesen Webseiten zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Utilities zu erstellen, die Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder die Funktionen Ihrer Erweiterung bereitzustellen.

In diesem Artikel zur Anleitung werden folgende Themen behandelt:

- Berechtigungen, die zur Verwendung der Tabs-API erforderlich sind.
- Mehr über Tabs und ihre Eigenschaften erfahren, indem {{WebExtAPIRef("tabs.query")}} verwendet wird.
- Tabs erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen.
- Den Zoomlevel eines Tabs manipulieren.
- Das CSS eines Tabs manipulieren.

Abschließend betrachten wir einige andere, verschiedene Funktionen, die die API bietet.

> [!NOTE]
> Es gibt einige Funktionen der Tabs-API, die an anderer Stelle behandelt werden. Dies sind die Methoden, die Sie verwenden können, um den Tab-Inhalt mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen über diese Methoden benötigen, lesen Sie den Konzeptartikel [Content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Modify a web page](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die Mehrheit der Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` wird benötigt, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie auch `"tabs"`, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) wird für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} benötigt.

Im Folgenden wird gezeigt, wie Sie die Berechtigung `"tabs"` in der manifest.json-Datei Ihrer Erweiterung anfordern könnten:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage gibt Ihnen die Nutzung aller Funktionen der Tabs-API auf allen Websites, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz, um Berechtigungen zur Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} anzufordern, bei dem Sie keine Host-Berechtigung benötigen, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet die gleichen Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss über die Browser- oder Seitenaktion, das Kontextmenü oder eine Tastenkombination mit der Erweiterung interagieren.
- Sie gewährt nur in dem aktiven Tab Berechtigung.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "Zugriff auf Ihre Daten für alle Websites" hat. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab jederzeit auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, die Erweiterung eine vom Benutzer angeforderte Aktion im aktuellen Tab ausführen zu lassen.

## Mehr über Tabs und ihre Eigenschaften erfahren

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern abrufen möchten. Manchmal möchten Sie möglicherweise einen Teil der Tabs finden, die bestimmten Kriterien entsprechen, wie z. B. diejenigen, die von einem bestimmten Tab geöffnet wurden oder Seiten aus einer bestimmten Domain anzeigen. Und sobald Sie Ihre Liste von Tabs haben, werden Sie wahrscheinlich mehr über ihre Eigenschaften erfahren wollen.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Alleine verwendet, um alle Tabs abzurufen, oder den `queryInfo`-Objekt nutzend, um Abfragekriterien wie z. B. ob der Tab aktiv ist, im aktuellen Fenster oder eines oder mehrere von 17 Kriterien festzulegen, gibt {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie nur Informationen über den aktuellen Tab wünschen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} abrufen. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Anleitung

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, lassen Sie uns durchgehen, wie das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) die Liste der "Wechseln zu Tabs" zu seinem Symbolleistenschaltflächen-Popup hinzufügt.

![Das Tab-Symbolleistenmenü mit dem Wechseln-zu-Tab-Bereich](switch_to_tab.png)

- manifest.json

  - : Hier ist die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json):

    ```json
    {
      "browser_action": {
        "default_title": "Tabs, tabs, tabs",
        "default_popup": "tabs.html"
      },
      "description": "A list of methods you can perform on a tab.",
      "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs",
      "manifest_version": 2,
      "name": "Tabs, tabs, tabs",
      "permissions": ["tabs"],
      "version": "1.0"
    }
    ```

    > [!NOTE]
    >
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird immer angezeigt, wenn der Benutzer auf das Symbol der Erweiterung in der Symbolleiste klickt.
    > - **Berechtigungen beinhalten Tabs.** Dies ist erforderlich, um die Tablistenfunktion zu unterstützen, da die Erweiterung die Titel der Tabs liest, um sie im Popup anzuzeigen.

- tabs.html

  - : `tabs.html` definiert den Inhalt des Popups der Erweiterung:

    ```html
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="tabs.css" />
      </head>

      <body>
        <div class="panel">
          <div class="panel-section panel-section-header">
            <div class="text-section-header">Tabs-tabs-tabs</div>
          </div>

          <a href="#" id="tabs-move-beginning">
            Move active tab to the beginning of the window
          </a>
          <br />

          <!-- Define the other menu items -->

          <div class="switch-tabs">
            <p>Switch to tab</p>
            <div id="tabs-list"></div>
          </div>
        </div>

        <script src="tabs.js"></script>
      </body>
    </html>
    ```

    Dies macht Folgendes:

    1. Die Menüelemente werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) wird gezeigt, wie die Liste der Tabs erstellt und dem Popup hinzugefügt wird.

#### Erstellung des Popups

Zuerst wird ein Ereignis-Handler hinzugefügt, der `listTabs()` ausführt, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` macht, ist `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zunächst:

1. Holen Sie sich das `<div id="tabs-list">`-Element.
2. Erstellen Sie ein Dokumentfragment (in das die Liste gebaut wird).
3. Setzen Sie Zähler.
4. Löschen Sie den Inhalt des `<div id="tabs-list">`-Elements.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById('tabs-list');
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Als Nächstes erstellen wir die Links für jeden Tab:

1. Schleife durch die ersten 5 Elemente des {{WebExtAPIRef("tabs.Tab")}}-Objekts.
2. Für jedes Element fügen Sie dem Dokumentfragment einen Hyperlink hinzu.

   - Die Bezeichnung des Links - das heißt, sein Text - wird unter Verwendung des `title` des Tabs festgelegt (oder der `id`, wenn er keinen `title` hat).
   - Die Adresse des Links wird unter Verwendung der `id` des Tabs festgelegt.

```js
for (const tab of tabs) {
  if (!tab.active && counter <= limit) {
    const tabLink = document.createElement("a");

    tabLink.textContent = tab.title || tab.id;

    tabLink.setAttribute("href", tab.id);
    tabLink.classList.add("switch-tabs");
    currentTabs.appendChild(tabLink);
  }

  counter += 1;
}
```

Abschließend wird das Dokumentfragment in das `<div id="tabs-list">`-Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Ein weiteres verwandtes Beispielmerkmal ist die Option "Aktiven Tab benachrichtigen", die alle Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts für den aktiven Tab in eine Benachrichtigung ausgibt:

```js
else if (e.target.id === "tabs-alert-info") {
  callOnActiveTab((tab) => {
    let props = "";
    for (const item in tab) {
      props += `${ item } = ${ tab[item] } \n`;
    }
    alert(props);
  });
}
```

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es die {{WebExtAPIRef("tabs.Tab")}}-Objekte durchläuft und nach dem Element sucht, das auf aktiv gesetzt ist:

```js
document.addEventListener("click", (e) => {
  function callOnActiveTab(callback) {
    getCurrentWindowTabs().then((tabs) => {
      for (const tab of tabs) {
        if (tab.active) {
          callback(tab, tabs);
        }
      }
    });
  }
});
```

## Erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie höchstwahrscheinlich etwas damit machen - entweder um den Benutzern Funktionen zum Manipulieren und Verwalten von Tabs anzubieten oder um Funktionen in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen sind verfügbar:

- Erstellen Sie einen neuen Tab ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren Sie einen Tab ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen Sie einen Tab ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben Sie einen Tab ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren Sie die URL des Tabs - im Wesentlichen auf eine neue Seite navigieren - ({{WebExtAPIRef("tabs.update()")}}).
- Laden Sie die Seite des Tabs neu ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen am aktiven Tab arbeiten (wenn keine Tab-ID angegeben ist):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) verwendet alle diese Funktionen, außer um die URL eines Tabs zu aktualisieren. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher schauen wir uns eine der aufwendigeren Implementierungen an: die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Zuerst wird jedoch hier eine Demonstration des Features in Aktion gezeigt:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung, um zu arbeiten, daher gibt es keine besonderen Merkmale im [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) Datei, die hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, welches die Option "Aktiven Tab an den Anfang der Fensterliste verschieben" enthält, mit einer Serie von `<a>`-Tags, gruppiert durch einen visuellen Separator. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welches Menüelement angefordert wurde.

    ```html
    <a href="#" id="tabs-move-beginning">
      Move active tab to the beginning of the window
    </a>
    <br />
    <a href="#" id="tabs-move-end">Move active tab to the end of the window</a>
    <br />

    <div class="panel-section-separator"></div>

    <a href="#" id="tabs-duplicate">Duplicate active tab</a><br />
    <a href="#" id="tabs-reload">Reload active tab</a><br />
    <a href="#" id="tabs-alert-info">Alert active tab info</a><br />
    ```

- tabs.js

  - : Um das in `tabs.html` definierte "Menü" zu implementieren, enthält [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) einen Listener für Klicks in `tabs.html`:

    ```js
    document.addEventListener("click", (e) => {
      function callOnActiveTab(callback) {
        getCurrentWindowTabs().then((tabs) => {
          for (const tab of tabs) {
            if (tab.active) {
              callback(tab, tabs);
            }
          }
        });
      }
    });
    ```

    Eine Serie von `if`-Anweisungen sucht dann nach einer Übereinstimmung mit der `id` des geklickten Elements.

    Dieser Code-Schnipsel ist für die Option "Aktiven Tab an den Anfang der Fensterliste verschieben":

    ```js
    if (e.target.id === "tabs-move-beginning") {
      callOnActiveTab((tab, tabs) => {
        let index = 0;
        if (!tab.pinned) {
          index = firstUnpinnedTab(tabs);
        }
        console.log(`moving ${tab.id} to ${index}`);
        browser.tabs.move([tab.id], { index });
      });
    }
    ```

    Es ist bemerkenswert, wie `console.log()` verwendet wird. Dies ermöglicht es Ihnen Informationen an die [Debugger-Konsole](https://extensionworkshop.com/documentation/develop/debugging/) auszugeben, was während der Behebung von Problemen, die während der Entwicklung gefunden wurden, nützlich sein kann.

    ![Beispiel der console.log-Ausgabe aus der Tab-Verschieben-Funktion in der Debugger-Konsole](console.png)

    Der Verschiebungscode ruft zuerst `callOnActiveTab()` auf, das wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit den Tabs des aktiven Fensters zu erhalten. Dann wird das Objekt durchlaufen, um das aktive Tab-Objekt zu finden und zurückzugeben:

    ```js
    function callOnActiveTab(callback) {
      getCurrentWindowTabs().then((tabs) => {
        for (const tab of tabs) {
          if (tab.active) {
            callback(tab, tabs);
          }
        }
      });
    }
    ```

#### Festgepinnt Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _anheften_ kann. Festgeheftete Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Das bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen festgepinnten Tabs ist. Deshalb wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht festgepinnten Tabs zu finden, indem das `tabs`-Objekt durchlaufen wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Wir haben nun alles, was benötigt wird, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-ID und die Position, zu der der Tab verschoben werden soll, erhalten können. So können wir die Verschiebung durchführen:

```js
browser.tabs.move([tab.id], { index });
```

Die restlichen Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden auf ähnliche Weise implementiert.

## Manipulation des Zoomlevels eines Tabs

Die nächsten Funktionen ermöglichen Ihnen, den Zoomlevel eines Tabs abzurufen ({{WebExtAPIRef("tabs.getZoom")}}) und einzustellen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt der Erstellung dieses Artikels war die Möglichkeit, die Einstellungen festzulegen ({{WebExtAPIRef("tabs.setZoomSettings")}}), in Firefox nicht verfügbar.

Der Zoomlevel kann zwischen 30% und 500% (dargestellt als Dezimalzahlen `0.3` bis `5`) liegen.

In Firefox sind die Standardeinstellungen für den Zoom:

- **Standard-Zoomlevel:** 100%.
- **Zoommodus:** Automatisch (so dass der Browser verwaltet, wie die Zoomlevel eingestellt werden).
- **Geltungsbereich der Zoomänderungen:** `"per-origin"`, was bedeutet, dass, wenn Sie eine Seite erneut besuchen, der Zoomlevel genommen wird, der bei Ihrem letzten Besuch festgelegt wurde.

### Anleitung

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) enthält drei Demonstrationen der Zoom-Funktion: Vergrößern, Verkleinern und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Lassen Sie uns einen Blick darauf werfen, wie das Vergrößern implementiert ist.

- manifest.json
  - : Keine der Zoom-Funktionen erfordert Berechtigungen, daher gibt es keine Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) Datei, die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es wird nichts Neues oder Einzigartiges getan, um die Zoom-Optionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es wird dann derselbe Listener verwendet, den wir zuvor besprochen haben, damit es auf Klicks in `tabs.html` reagieren kann.

    Für die Vergrößerungsfunktion wird Folgendes ausgeführt:

    ```js
      else if (e.target.id === "tabs-add-zoom") {
        callOnActiveTab((tab) => {
          browser.tabs.getZoom(tab.id).then((zoomFactor) => {
            // The maximum zoomFactor is 5, it can't go higher
            if (zoomFactor >= MAX_ZOOM) {
              alert("Tab zoom factor is already at max!");
            } else {
              let newZoomFactor = zoomFactor + ZOOM_INCREMENT;
              // If the newZoomFactor is set to higher than the max accepted
              // it won't change, and will never alert that it's at maximum
              newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
              browser.tabs.setZoom(tab.id, newZoomFactor);
            }
          });
        });
      }
    ```

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs abzurufen, dann {{WebExtAPIRef("tabs.getZoom")}}, um den aktuellen Zoomfaktor des Tabs zu erhalten. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und eine Warnung ausgegeben, wenn der Tab bereits beim maximalen Zoom ist. Andernfalls wird der Zoomlevel inkrementiert, aber auf den maximalen Zoom begrenzt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} eingestellt.

## Manipulation des CSS eines Tabs

Eine weitere bedeutende Fähigkeit der Tabs-API ist die Fähigkeit, das CSS innerhalb eines Tabs zu manipulieren - neues CSS zu einem Tab hinzuzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS von einem Tab zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, z. B. wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung

Das Beispiel [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rand hinzuzufügen. Hier ist das Feature in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Lassen Sie uns durchgehen, wie es eingerichtet ist.

- manifest.json

  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die Berechtigungen an, die erforderlich sind, um die CSS-Funktionen zu verwenden. Sie benötigen entweder:

    - Die Berechtigung `"tabs"` und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letztere ist die nützlichste, da sie einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie von der Browser- oder Seitenaktion der Erweiterung, dem Kontextmenü oder einer Verknüpfung ausgeführt wird.

    ```json
    {
      "description": "Adds a page action to toggle applying CSS to pages.",

      "manifest_version": 2,
      "name": "apply-css",
      "version": "1.0",
      "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/apply-css",

      "background": {
        "scripts": ["background.js"]
      },

      "page_action": {
        "default_icon": "icons/off.svg"
      },

      "permissions": ["activeTab", "tabs"]
    }
    ```

    Sie werden feststellen, dass zusätzlich zur Berechtigung `"activeTab"` auch die Berechtigung `"tabs"` angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, um dem Skript der Erweiterung den Zugriff auf die URL des Tabs zu ermöglichen, dessen Bedeutung wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:

    - **einem Hintergrundskript**, das gestartet wird, sobald die Erweiterung geladen ist.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das zur Adressleiste des Browsers hinzugefügt wird.

- background.js

  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS, die Titel für die "Seitenaktion" und eine Liste von Protokollen zu definieren, in denen die Erweiterung funktionieren wird:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn sie zum ersten Mal geladen wird, verwendet die Erweiterung {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster abzurufen. Dann wird durch die Tabs geschleift und `initializePageAction()` aufgerufen.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs ein Protokoll ist, auf das das CSS angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Dann, wenn die Erweiterung auf den Tab angewendet werden kann, setzt `initializePageAction()` das `pageAction` (Navigationsleisten)-Symbol und den Titel des Tabs auf die "aus" Versionen, bevor das `pageAction` sichtbar gemacht wird:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Danach wartet ein Listener auf `pageAction.onClicked`, bis das `pageAction`-Symbol geklickt wird, und ruft `toggleCSS` auf, wenn es so ist.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` erhält den Titel der `pageAction` und nimmt dann die beschriebene Aktion vor:

    - **Für "CSS anwenden":**

      - Schaltet das `pageAction`-Symbol und den Titel auf die "entfernen" Versionen.
      - Wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**

      - Schaltet das `pageAction`-Symbol und den Titel auf die "anwenden" Versionen.
      - Entfernt das CSS mit {{WebExtAPIRef("tabs.removeCSS()")}}.

    ```js
    function toggleCSS(tab) {
      function gotTitle(title) {
        if (title === TITLE_APPLY) {
          browser.pageAction.setIcon({ tabId: tab.id, path: "icons/on.svg" });
          browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_REMOVE });
          browser.tabs.insertCSS({ code: CSS });
        } else {
          browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
          browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
          browser.tabs.removeCSS({ code: CSS });
        }
      }

      browser.pageAction.getTitle({ tabId: tab.id }).then(gotTitle);
    }
    ```

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Update des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu überprüfen, ob der Tab immer noch ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Funktionen der Tabs-API, die in keine der vorherigen Abschnitte passen:

- Erfassen Sie den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen Sie die Hauptsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte beispielsweise verwendet werden, um die Sprache der Benutzeroberfläche Ihrer Erweiterung mit der der Seite, auf der sie ausgeführt wird, abzugleichen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
