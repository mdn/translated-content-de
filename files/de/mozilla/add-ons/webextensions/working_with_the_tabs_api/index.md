---
title: Mit der Tabs-API arbeiten
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Tabs ermöglichen es einem Benutzer, mehrere Webseiten in ihrem Browserfenster zu öffnen und zwischen diesen Seiten zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Dienstprogramme zu erstellen, die Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten, oder um die Funktionen Ihrer Erweiterung zu liefern.

In diesem Anleitung-Artikel betrachten wir:

- Berechtigungen, die zur Nutzung der Tabs-API erforderlich sind.
- Mehr über Tabs und ihre Eigenschaften mithilfe von {{WebExtAPIRef("tabs.query")}} herausfinden.
- Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Manipulation des Zoomlevels eines Tabs.
- Manipulation der CSS eines Tabs.

Wir schließen dann mit einigen weiteren, verschiedenen Funktionen ab, die die API bietet.

> [!NOTE]
> Es gibt einige Tab-API-Funktionen, die an anderer Stelle behandelt werden. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden wünschen, siehe den Konzepte-Artikel [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die Mehrheit der Tabs-API-Funktionen benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie auch `"tabs"`, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist erforderlich für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

So können Sie in Ihrer Erweiterungsdatei manifest.json `"tabs"`-Berechtigung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage gibt Ihnen Zugriff auf alle Tabs-API-Funktionen auf allen Webseiten, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz zur Anforderung von Berechtigungen für die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem keine Host-Berechtigung erforderlich ist, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet die gleichen Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss über eine Browser- oder Seitenaktion der Erweiterung, das Kontextmenü oder eine Tastenkombination interagieren.
- Sie gewährt nur Berechtigung innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, dass Ihre Erweiterung "auf Ihre Daten für alle Websites zugreifen" kann. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, jederzeit Skripte in jedem Tab auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine durch den Benutzer angeforderte Aktion im aktuellen Tab durchzuführen.

## Mehr über Tabs und ihre Eigenschaften herausfinden

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Andere Male möchten Sie möglicherweise eine Teilmenge von Tabs finden, die bestimmten Kriterien entsprechen, z. B. diejenigen, die aus einem bestimmten Tab geöffnet oder von einem bestimmten Domain anzeigen. Und sobald Sie Ihre Liste von Tabs haben, möchten Sie wahrscheinlich mehr über ihre Eigenschaften erfahren.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Allein verwendet, um alle Tabs zu erhalten, oder das `queryInfo`-Objekt zu nehmen, um Abfragekriterien wie ob der Tab aktiv ist, im aktuellen Fenster ist oder eines von 17 Kriterien, die {{WebExtAPIRef("tabs.query()")}} liefert ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten mit Informationen über die Tabs.

Wenn Sie nur Informationen zum aktuellen Tab wünschen, können Sie mit {{WebExtAPIRef("tabs.getCurrent()")}} ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab erhalten. Wenn Sie die ID eines Tabs haben, können Sie mit {{WebExtAPIRef("tabs.get()")}} sein {{WebExtAPIRef("tabs.Tab")}}-Objekt erhalten.

### Anleitung Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, lassen Sie uns durchgehen, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel die Liste von "Wechseln zu Tabs" zu seinem Popup der Symbolleiste hinzufügt.

![Das Tabs-Symbolleisten-Menü, das den Bereich "Wechseln zu Tabs" zeigt](switch_to_tab.png)

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
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird angezeigt, wann immer der Benutzer auf das Symbol der Erweiterung in der Symbolleiste klickt.
    > - **Berechtigungen schließen Tabs ein.** Dies ist notwendig, um die Tab-Listen-Funktion zu unterstützen, da die Erweiterung den Titel der Tabs für die Anzeige im Popup liest.

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

    Dies tut Folgendes:

    1. Die Menüpunkte werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Liste der Tabs erstellt und dem Popup hinzugefügt wird.

#### Erstellen des Popups

Zuerst wird ein Ereignishandler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das erste, was `listTabs()` tut, ist `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Anfangen mit:

1. Greifen Sie auf das `<div id="tabs-list">`-Element zu.
2. Erstellen Sie ein Dokumentfragment (in dem die Liste aufgebaut wird).
3. Zähler setzen.
4. Den Inhalt des `<div id="tabs-list">`-Element löschen.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById('tabs-list');
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Als nächstes erstellen wir die Links für jeden Tab:

1. Durchläuft die ersten 5 Elemente aus dem {{WebExtAPIRef("tabs.Tab")}}-Objekt.
2. Für jedes Element fügt ein Hyperlink zum Dokumentfragment hinzu.

   - Das Label des Links - das heißt, sein Text - wird unter Verwendung des `title` des Tabs gesetzt (oder der `id`, falls es keinen `title` hat).
   - Die Adresse des Links wird unter Verwendung der `id` des Tabs gesetzt.

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

Schließlich wird das Dokumentfragment in das `<div id="tabs-list">`-Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Ein weiteres verwandtes Beispielmerkmal ist die "Alert active tab" Informationsoption, die alle Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts für den aktiven Tab in einer Warnung ausgibt:

```js
else if (e.target.id === "tabs-alertinfo") {
  callOnActiveTab((tab) => {
    let props = "";
    for (const item in tab) {
      props += `${ item } = ${ tab[item] } \n`;
    }
    alert(props);
  });
}
```

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte schleift und nach dem Element sucht, bei dem aktiv gesetzt ist:

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
}
```

## Tabs erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie höchstwahrscheinlich etwas mit ihnen tun - entweder um Benutzern Funktionen zum Manipulieren und Verwalten von Tabs anzubieten oder um Funktionalität in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen sind verfügbar:

- einen neuen Tab erstellen ({{WebExtAPIRef("tabs.create()")}}).
- einen Tab duplizieren ({{WebExtAPIRef("tabs.duplicate()")}}).
- einen Tab entfernen ({{WebExtAPIRef("tabs.remove()")}}).
- einen Tab verschieben ({{WebExtAPIRef("tabs.move()")}}).
- die URL des Tabs aktualisieren - effektiv auf eine neue Seite wechseln - ({{WebExtAPIRef("tabs.update()")}}).
- die Seite des Tabs neu laden ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf den aktiven Tab wirken (falls keine Tab-`id` angegeben ist):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel nutzt all diese Funktionen außer dem Aktualisieren der URL eines Tabs. Die Art und Weise, wie diese APIs genutzt werden, ist ähnlich, also schauen wir uns eine der umfassenderen Implementierungen an, nämlich die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Aber zuerst hier eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung zum Betrieb, daher gibt es keine Besonderheiten in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das im Popup angezeigte "Menü", das die Option "Aktiven Tab an den Anfang der Fensterliste verschieben" enthält, mit einer Reihe von `<a>`-Tags, die durch einen visuellen Trenner gruppiert sind. Jedes Menüelement erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welches Menüelement angefordert wird.

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
    <a href="#" id="tabs-alertinfo">Alert active tab info</a><br />
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

    Eine Reihe von `if`-Anweisungen sucht dann nach einer Übereinstimmung mit der `id` des angeklickten Elements.

    Dieses Code-Snippet ist für die Option "Aktiven Tab an den Anfang der Fensterliste verschieben":

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

    Es ist bemerkenswert, die Verwendung von `console.log()` zu erwähnen. Dies ermöglicht es Ihnen, Informationen in die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole auszugeben, was nützlich sein kann, wenn man auf beim Entwickeln gefundene Probleme stößt.

    ![Beispiel der console.log Ausgabe, vom Verschieben der Tabs-Funktion, in der Debugging-Konsole](console.png)

    Der Verschiebecode ruft zuerst `callOnActiveTab()` auf, was wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt der Tabs im aktiven Fenster zu erhalten. Er schleift dann durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Angepinnte Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _anpinnen_ kann. Angepinnte Tabs werden an den Anfang der Tab-Liste gesetzt und können nicht verschoben werden. Dies bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach angepinnten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angepinnten Tabs zu finden, indem durch das `tabs`-Objekt geschleift wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Wir haben jetzt alles, was benötigt wird, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-`id` erhalten können, und die Position, zu der der Tab verschoben werden soll. So können wir den Verschiebungsvorgang umsetzen:

```js
browser.tabs.move([tab.id], { index });
```

Die restlichen Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

## Manipulation des Zoomlevels eines Tabs

Der nächste Satz von Funktionen ermöglicht es Ihnen, das Zoomlevel innerhalb eines Tabs zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und festzulegen ({{WebExtAPIRef("tabs.setZoom()")}}). Sie können ebenfalls die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen festzulegen ({{WebExtAPIRef("tabs.setZoomSettings")}}), in Firefox nicht verfügbar.

Das Zoomlevel kann zwischen 30% und 500% (dargestellt als Dezimalzahlen `0.3` bis `5`) sein.

In Firefox sind die Standard-Zoomeinstellungen:

- **Standard-Zoomlevel:** 100%.
- **Zoom-Modus:** automatisch (der Browser verwaltet also, wie Zoomlevels gesetzt werden).
- **Umfang der Zoomänderungen:** `"per-origin"`, was bedeutet, dass bei einem erneuten Besuch einer Seite das Zoomlevel des letzten Besuchs angenommen wird.

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel umfasst drei Demonstrationen der Zoomfunktion: Zoom ein, Zoom aus, und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie das Zoom in implementiert wird.

- manifest.json
  - : Keine der Zoomfunktionen erfordert Berechtigungen, daher gibt es keine zu hervorhebenden Besonderheiten in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei.
- tabs.html
  - : Wir haben bereits besprochen, wie die [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es gibt nichts Neues oder Einzigartiges, was getan wird, um die Zoomoptionen bereitzustellen.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoomcode verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Anschließend wird derselbe Listener verwendet, den wir zuvor besprochen haben, um auf Klicks in `tabs.html` zu reagieren.

    Für die Zoom-Ein-Funktion wird Folgendes ausgeführt:

    ```js
      else if (e.target.id === "tabs-add-zoom") {
        callOnActiveTab((tab) => {
          browser.tabs.getZoom(tab.id).then((zoomFactor) => {
            //the maximum zoomFactor is 5, it can't go higher
            if (zoomFactor >= MAX_ZOOM) {
              alert("Tab zoom factor is already at max!");
            } else {
              let newZoomFactor = zoomFactor + ZOOM_INCREMENT;
              //if the newZoomFactor is set to higher than the max accepted
              //it won't change, and will never alert that it's at maximum
              newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
              browser.tabs.setZoom(tab.id, newZoomFactor);
            }
          });
        });
      }
    ```

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann ruft {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoomfaktor des Tabs ab. Der aktuelle Zoom wird mit dem festgelegten Maximum (`MAX_ZOOM`) verglichen und eine Warnung ausgegeben, falls sich der Tab bereits am maximalen Zoom befindet. Andernfalls wird das Zoomlevel erhöht, jedoch auf das maximale Zoom beschränkt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation der CSS eines Tabs

Eine weitere bedeutende Fähigkeit, die die Tabs-API bietet, besteht darin, die CSS innerhalb eines Tabs zu manipulieren—neues CSS zu einem Tab hinzuzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS von einem Tab zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, wenn Sie beispielsweise bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung Beispiel

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css)-Beispiel nutzt diese Funktionen, um eine rote Umrandung auf die Webseite im aktiven Tab anzuwenden. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Schauen wir uns an, wie es eingerichtet ist.

- manifest.json

  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die Berechtigungen an, die zur Nutzung der CSS-Funktionen erforderlich sind. Sie benötigen entweder:

    - Die Berechtigung `"tabs"` und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letztere ist am nützlichsten, da sie es einer Erweiterung ermöglicht, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie über die Browser- oder Seitenaktion der Erweiterung, das Kontextmenü oder eine Tastenkombination ausgeführt wird.

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

    Sie werden bemerken, dass zusätzliche `"tabs"`-Berechtigung neben `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist notwendig, damit das Skript der Erweiterung auf die URL des Tabs zugreifen kann, deren Bedeutung wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:

    - **einem Hintergrundskript**, das ausgeführt wird, sobald die Erweiterung geladen ist.
    - **einer "Seitenaktion"**, welche ein Symbol definiert, das zur Adressleiste des Browsers hinzugefügt wird.

- background.js

  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS, die Titel für die "Seitenaktion" und eine Liste der Protokolle, in denen die Erweiterung arbeiten wird, zu definieren:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Bereits beim ersten Laden der Erweiterung wird {{WebExtAPIRef("tabs.query()")}} verwendet, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Es durchläuft dann die Tabs und ruft `initializePageAction()`.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um zu bestimmen, ob die URL des aktiven Tabs eine ist, auf die das CSS angewendet werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Dann, falls das Beispiel auf den Tab wirken kann, setzt `initializePageAction()` das `pageAction`-Symbol (Navigationsleiste) und den Titel des Tabs auf die "Aus"-Versionen, bevor es die `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Anschließend wartet ein Listener auf `pageAction.onClicked`, bis das `pageAction`-Symbol geklickt wird, und ruft `toggleCSS` auf, wenn dies der Fall ist.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` ruft den Titel der `pageAction` ab und führt dann die beschriebene Aktion aus:

    - **Für "Apply CSS" (CSS anwenden):**

      - wechselt das `pageAction`-Symbol und den Titel zu den "Entfernen"-Versionen.
      - wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "Remove CSS" (CSS entfernen):**

      - wechselt das `pageAction`-Symbol und den Titel zu den "Anwenden"-Versionen.
      - entfernt das CSS mit {{WebExtAPIRef("tabs.removeCSS()")}}.

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

    Schließlich, um sicherzustellen, dass die `pageAction` gültig ist nach jeder Aktualisierung der Tab, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal, wenn der Tab aktualisiert wird, um zu überprüfen, ob der Tab immer noch ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Tabs-API-Funktionen, die nicht in eine der vorherigen Abschnitte passen:

- Das sichtbare Tab-Inhalt erfassen mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Die primäre Sprache des Inhalts in einem Tab mithilfe von {{WebExtAPIRef("tabs.detectLanguage")}} erkennen. Dies könnte beispielsweise genutzt werden, um die Sprache der Benutzeroberfläche Ihrer Erweiterung mit der der Seite abzugleichen, auf der sie ausgeführt wird.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (viele davon nutzen die Tabs-API)
