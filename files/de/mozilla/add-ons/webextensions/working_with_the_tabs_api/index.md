---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{AddonSidebar}}

Mit Tabs kann ein Benutzer mehrere Webseiten in seinem Browserfenster öffnen und dann zwischen diesen Webseiten wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Hilfsprogramme zu erstellen, die den Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder die Funktionen Ihrer Erweiterung bereitzustellen.

In diesem Artikel werden wir Folgendes behandeln:

- Notwendige Berechtigungen für die Nutzung der Tabs-API.
- Mehr über Tabs und ihre Eigenschaften herausfinden mit {{WebExtAPIRef("tabs.query")}}.
- Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Manipulation der Zoomstufe eines Tabs.
- Manipulation der CSS eines Tabs.

Abschließend werfen wir einen Blick auf einige weitere, sonstige Funktionen, die von der API angeboten werden.

> [!NOTE]
> Einige Funktionen der Tabs-API werden an anderer Stelle behandelt. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden wünschen, lesen Sie den Konzept-Artikel [Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die meisten Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` wird benötigt, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist erforderlich für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

Im Folgenden wird gezeigt, wie Sie die Berechtigung `"tabs"` in der Datei manifest.json Ihrer Erweiterung anfordern könnten:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage ermöglicht Ihnen die Nutzung aller Funktionen der Tabs-API auf allen Websites, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz zur Anforderung von Berechtigungen zur Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem Sie keine Host-Berechtigung benötigen, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet dieselben Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss über die Browser- oder Seitenaktion der Erweiterung, das Kontextmenü oder eine Tastenkombination mit der Erweiterung interagieren.
- Sie gewährt nur innerhalb des aktiven Tabs eine Berechtigung.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "Auf Ihre Daten für alle Websites zugreifen kann". Dies liegt daran, dass die `<all_urls>`-Berechtigung einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab zu jedem Zeitpunkt auszuführen, wohingegen [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine vom Benutzer angeforderte Aktion im aktuellen Tab auszuführen.

## Mehr über Tabs und ihre Eigenschaften herausfinden

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Zu anderen Zeiten möchten Sie vielleicht eine Teilmenge von Tabs finden, die bestimmten Kriterien entspricht, z. B. solche, die von einem spezifischen Tab geöffnet wurden oder Seiten von einer bestimmten Domain anzeigen. Und sobald Sie Ihre Tab-Liste haben, möchten Sie wahrscheinlich mehr über ihre Eigenschaften erfahren.

Hierbei kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Allein verwendet, um alle Tabs zu erhalten, oder mit dem `queryInfo`-Objekt, um Abfragekriterien anzugeben, z. B. ob der Tab aktiv, im aktuellen Fenster oder eines von mehr als 17 Kriterien ist, gibt {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie nur Informationen über den aktuellen Tab wünschen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} erhalten. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Anleitung

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, führen wir durch, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs)-Beispiel die Liste der "Zu Tabs wechseln" zu seinem Popup-Schaltflächenmenü hinzufügt.

![Das Tabs-Werkzeugleistenmenü zeigt den Bereich "Zu Tabs wechseln"](switch_to_tab.png)

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
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird angezeigt, wann immer der Benutzer auf das Symbol der Erweiterung in der Werkzeugleiste klickt.
    > - **Berechtigungen schließen Tabs ein.** Dies ist erforderlich, um die Tab-Liste zu unterstützen, da die Erweiterung die Titel der Tabs liest, um sie im Popup anzuzeigen.

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

    Folgendes wird ausgeführt:
    1. Die Menüelemente werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Liste der Tabs erstellt und dem Popup hinzugefügt wird.

#### Erstellen des Popups

Zunächst wird ein Ereignishandler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` tut, ist `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zu Beginn:

1. Das Element `<div id="tabs-list">` erfassen.
2. Ein Dokument-Fragment erstellen (in das die Liste aufgebaut wird).
3. Zähler setzen.
4. Den Inhalt des Elements `<div id="tabs-list">` leeren.

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById("tabs-list");
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = "";
    // ...
  });
}
```

Als Nächstes erstellen wir die Links für jeden Tab:

1. Durchläuft die ersten 5 Elemente des {{WebExtAPIRef("tabs.Tab")}}-Objekts.
2. Für jedes Element wird ein Hyperlink zum Dokument-Fragment hinzugefügt.
   - Das Label des Links, also sein Text, wird mit dem `title` des Tabs gesetzt (oder der `id`, wenn er keinen `title` hat).
   - Die Adresse des Links wird mit der `id` des Tabs gesetzt.

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    // ...
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
    // ...
  });
}
```

Schließlich wird das Dokument-Fragment in das Element `<div id="tabs-list">` geschrieben:

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    // ...
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Eine weitere verwandte Beispiel-Funktion ist die "Aktiven Tab alarmieren"-Infooption, die alle {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaften für den aktiven Tab in einem Alert ausgibt:

```js
// Other if conditions...
if (e.target.id === "tabs-alert-info") {
  callOnActiveTab((tab) => {
    let props = "";
    for (const item in tab) {
      props += `${item} = ${tab[item]} \n`;
    }
    alert(props);
  });
}
```

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte geloopt wird und nach dem Element gesucht wird, bei dem aktiv gesetzt ist:

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

## Erstellen, duplizieren, verschieben, aktualisieren, neuladen und entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen tun, sei es, um Benutzern Funktionen zur Manipulation und Verwaltung von Tabs anzubieten oder um Funktionalitäten in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen stehen zur Verfügung:

- Erstellen eines neuen Tabs ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren eines Tabs ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen eines Tabs ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben eines Tabs ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren der URL des Tabs—(effektiv zu einer neuen Seite navigieren)—({{WebExtAPIRef("tabs.update()")}}).
- Neuladen der Seite des Tabs ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen benötigen alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf den aktiven Tab wirken, wenn keine Tab-`id` angegeben wird:
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel nutzt alle diese Funktionen außer dem Aktualisieren der URL eines Tabs. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher werden wir uns eine der komplexeren Implementierungen ansehen, nämlich die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Aber zuerst hier eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung, um zu funktionieren, daher gibt es keine Features in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html
  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, einschließlich der Option "Aktiven Tab an den Anfang der Fensterliste verschieben", mit einer Reihe von `<a>`-Tags, die durch einen visuellen Trennstrich gruppiert sind. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um festzustellen, welches Menüelement angefordert wird.

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

    Eine Reihe von `if`-Anweisungen versucht dann, die `id` des angeklickten Elements abzugleichen.

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

    Es ist erwähnenswert, dass `console.log()` verwendet wird. Dies ermöglicht es Ihnen, Informationen an die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole zu senden, was nützlich sein kann, wenn Sie Probleme beheben, die während der Entwicklung entdeckt werden.

    ![Beispiel der Console.log-Ausgabe des Funktionen zur Tab-Verschiebung im Debugging-Console](console.png)

    Der Verschiebungscode ruft zuerst `callOnActiveTab()` auf, das wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt, das die Tabs des aktiven Fensters enthält, zu erhalten. Dann wird durch das Objekt geschleift, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Anheftbare Tabs

Eine Funktion von Tabs ist, dass der Benutzer Tabs in einem Fenster anheften kann. Angehängte Tabs werden am Anfang der Tab-Liste platziert und können nicht bewegt werden. Dies bedeutet, dass die frühest mögliche Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angehefteten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angehefteten Tabs zu finden, indem durch das `tabs`-Objekt geschleift wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Wir haben nun alles, was wir benötigen, um den Tab zu bewegen: das aktive Tab-Objekt, aus dem wir die Tab-`id` und die Position, zu der der Tab verschoben werden soll, erhalten können. So können wir die Verschiebung durchführen:

```js
browser.tabs.move([tab.id], { index });
```

Die übrigen Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

## Manipulation der Zoomstufe eines Tabs

Die nächste Reihe von Funktionen ermöglicht es Ihnen, die Zoomstufe innerhalb eines Tabs zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), jedoch war die Möglichkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}), zum Zeitpunkt des Schreibens in Firefox nicht verfügbar.

Der Zoomgrad kann zwischen 30% bis 500% liegen (dargestellt als Dezimalzahlen von `0.3` bis `5`).

In Firefox sind die standardmäßigen Zoomeinstellungen:

- **Standard-Zoomstufe:** 100%.
- **Zoommodus:** automatisch (der Browser verwaltet, wie Zoomstufen gesetzt werden).
- **Reichweite der Zoomänderungen:** `"per-origin"`, das bedeutet, dass wenn Sie eine Website erneut besuchen, der während Ihres letzten Besuchs gesetzte Zoomgrad angewendet wird.

### Anleitung

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel beinhaltet drei Demonstrationen der Zoomfunktion: Vergrößern, Verkleinern und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie das Vergrößern implementiert ist.

- manifest.json
  - : Keine der Zoom-Funktionen erfordert Berechtigungen, so dass es in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei keine Features gibt, die hervorgehoben werden müssen.
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

    Dann verwendet es den zuvor besprochenen Listener, um auf Klicks in `tabs.html` zu reagieren.

    Für die Vergrößerungsfunktion läuft dies:

    ```js
    // Other if conditions...
    if (e.target.id === "tabs-add-zoom") {
      callOnActiveTab((tab) => {
        browser.tabs.getZoom(tab.id).then((zoomFactor) => {
          // The maximum zoomFactor is 5, it can't go higher
          if (zoomFactor >= MAX_ZOOM) {
            alert("Tab zoom factor is already at max!");
          } else {
            let newZoomFactor = zoomFactor + ZOOM_INCREMENT;
            // If the newZoomFactor is set to higher than the max accepted
            // it won't change, and does not alert that it's at maximum
            newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
            browser.tabs.setZoom(tab.id, newZoomFactor);
          }
        });
      });
    }
    ```

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann bekommt {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoomfaktor des Tabs. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen, und falls der Tab bereits beim maximalen Zoom ist, wird eine Warnung ausgegeben. Andernfalls wird die Zoom-Stufe hochgezählt, aber auf den maximalen Zoom begrenzt, und dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation der CSS eines Tabs

Eine weitere wichtige Fähigkeit, die die Tabs-API bietet, ist die Möglichkeit zur Manipulation der CSS innerhalb eines Tabs—neue CSS zu einem Tab hinzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS aus einem Tab entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, zum Beispiel, wenn Sie bestimmte Seiten-Elemente hervorheben oder das Standard-Layout der Seite ändern möchten.

### Anleitung

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) Beispiel verwendet diese Funktionen, um einen roten Rand zur Webseite im aktiven Tab hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Lassen Sie uns durchgehen, wie es eingerichtet ist.

- manifest.json
  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert Berechtigungen an, die für die Verwendung der CSS-Funktionen erforderlich sind. Sie benötigen entweder:
    - Die Berechtigung `"tabs"` und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letzteres ist das nützlichste, da es einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn es aus der Browser- oder Seitenaktion der Erweiterung, dem Kontextmenü oder einer Tastenkombination ausgeführt wird.

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

    Sie werden feststellen, dass die Berechtigung `"tabs"` zusätzlich zur Berechtigung `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, damit das Skript der Erweiterung auf die URL des Tabs zugreifen kann, dessen Wichtigkeit wir gleich sehen werden.

    Die anderen Hauptfunktionen in der manifest.json-Datei sind die Definition von:
    - **einem Hintergrundskript**, das sofort beim Laden der Erweiterung gestartet wird.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das der Adressleiste des Browsers hinzugefügt wird.

- background.js
  - : Bei Start definiert [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um die anzuwendende CSS, Titel für die "Seitenaktion" und eine Liste von Protokollen, in denen die Erweiterung funktioniert, festzulegen:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn die Erweiterung das erste Mal geladen wird, verwendet sie {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Es wird dann durch die Tabs iteriert und `initializePageAction()` aufgerufen.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs eines der Protokolle ist, auf die die CSS angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Wenn das Beispiel auf dem Tab arbeiten kann, setzt `initializePageAction()` das `pageAction` (Navigationsleiste)-Symbol und den Titel des Tab auf die "off"-Versionen, bevor es die `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Danach wartet ein Listener auf `pageAction.onClicked` auf einen Klick auf das `pageAction`-Symbol und ruft `toggleCSS` auf, wenn es angeklickt wird.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` holt den Titel der `pageAction` und führt dann die beschriebene Aktion aus:
    - **Für "CSS anwenden":**
      - schaltet die `pageAction`-Icon und -Titel auf die "remove"-Versionen.
      - wendet die CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**
      - schaltet die `pageAction`-Icon und -Titel auf die "apply"-Versionen.
      - entfernt die CSS mit {{WebExtAPIRef("tabs.removeCSS()")}}.

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

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Update des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal, wenn der Tab aktualisiert wird, auf, um zu überprüfen, ob der Tab immer noch ein Protokoll verwendet, auf das die CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Funktionen der Tabs-API, die nicht in eine der vorherigen Kategorien passen:

- Erfassung des sichtbaren Tab-Inhalts mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennung der Hauptsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte zum Beispiel verwendet werden, um die Sprache in der Benutzeroberfläche Ihrer Erweiterung an die der Seite, auf der sie läuft, anzupassen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispiel-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
