---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Tabs ermöglichen es dem Benutzer, mehrere Webseiten in seinem Browserfenster zu öffnen und zwischen diesen zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Utilities zu erstellen, die den Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder um die Funktionen Ihrer Erweiterung bereitzustellen.

Dieser Leitfaden behandelt:

- Erforderliche Berechtigungen zur Nutzung der Tabs-API.
- Entdeckung von weiteren Informationen über Tabs und ihre Eigenschaften mithilfe von {{WebExtAPIRef("tabs.query")}}.
- Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Manipulation des Zoom-Levels eines Tabs.
- Manipulation des CSS eines Tabs.
- Manipulation von Tab-Gruppen und [geteilten Ansichten](#arbeiten_mit_geteilten_tab-ansichten).

Der Artikel endet mit einem Blick auf einige andere, verschiedene Funktionen, die von der API angeboten werden.

> [!NOTE]
> Einige Funktionen der Tab-API werden an anderer Stelle behandelt. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}}, und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden wünschen, sehen Sie sich den Konzeptartikel [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und den Anleitung [Ändern einer Webseite](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page) an.

## Berechtigungen und die Tabs-API

Für die Mehrheit der Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist erforderlich für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

Im Folgenden sehen Sie, wie Sie die Berechtigung `"tabs"` in der `manifest.json`-Datei Ihrer Erweiterung anfordern könnten:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage gibt Ihnen die Nutzung aller Tabs-API-Funktionen auf allen Webseiten, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz zum Anfordern von Berechtigungen für die Nutzung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem Sie keine Host-Berechtigung benötigen, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet die gleichen Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss über die Browser- oder Seitenaktion, das Kontextmenü oder eine Tastenkombination mit der Erweiterung interagieren.
- Sie gewährt nur Berechtigung innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, die besagt, dass Ihre Erweiterung "auf Ihre Daten für alle Webseiten zugreifen" kann. Dies liegt daran, dass die `<all_urls>`-Berechtigung einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab jederzeit auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine vom Benutzer angeforderte Aktion im aktuellen Tab auszuführen.

## Weitere Informationen über Tabs und deren Eigenschaften entdecken

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Zu anderen Zeiten möchten Sie vielleicht eine Teilmenge von Tabs finden, die bestimmten Kriterien entsprechen, wie z.B. die, die von einem bestimmten Tab aus geöffnet wurden oder Seiten von einer bestimmten Domäne anzeigen. Und sobald Sie Ihre Liste von Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften erfahren.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Allein für die Abfrage aller Tabs oder unter Verwendung des `queryInfo`-Objekts - um Abfragekriterien wie die Frage, ob der Tab aktiv ist, im aktuellen Fenster oder eines von 17 Kriterien festzulegen - gibt {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie Informationen nur über den aktuellen Tab wünschen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} erhalten. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} erhalten.

### Anleitung Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, gehen wir durch, wie das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) die Liste von "wechseln zu Tabs" zu seinem Symbolleistenschaltflächen-Popup hinzufügt.

![Das Tabs-Symbolleisten-Menü zeigt den Wechsel zu Tab-Bereich](switch_to_tab.png)

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
    > - **Berechtigungen beinhalten Tabs.** Diese sind erforderlich, um die Tablisten-Funktion zu unterstützen, da die Erweiterung den Tab-Titel liest, um ihn im Popup anzuzeigen.

- tabs.html
  - : `tabs.html` definiert den Inhalt des Popup-Fensters der Erweiterung:

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

    Dies bewirkt Folgendes:
    1. Die Menüelemente werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Liste der Tabs aufgebaut und dem Popup hinzugefügt wird.

#### Erstellen des Popups

Als erstes wird ein Ereignishandler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` tut, ist `getCurrentWindowTabs()` aufzurufen. Hier wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun kann `listTabs()` den Inhalt für das Popup erstellen.

Zuerst:

1. Erfassen Sie das `<div id="tabs-list">`-Element.
2. Erstellen Sie ein Dokumentfragment (in das die Liste aufgebaut wird).
3. Setzen Sie Zählervariablen.
4. Löschen Sie den Inhalt des `<div id="tabs-list">`-Elements.

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

Als Nächstes werden die Links für jeden Tab erstellt:

1. Schleifen Sie durch die ersten 5 Elemente des {{WebExtAPIRef("tabs.Tab")}}-Objekts.
2. Für jedes Element fügen Sie dem Dokumentfragment einen Hyperlink hinzu.
   - Die Beschriftung des Links - also sein Text - wird mit dem `title` des Tabs (oder der `id`, falls er keinen `title` hat) festgelegt.
   - Die Adresse des Links wird mit der `id` des Tabs festgelegt.

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

Schließlich wird das Dokumentfragment in das `<div id="tabs-list">`-Element geschrieben:

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    // ...
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Ein weiteres verwandtes Beispielmerkmal ist die Info-Option "Aktiver Tab benachrichtigen", die alle {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaften des aktiven Tabs in einem Alert ausgibt:

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

Dabei findet `callOnActiveTab()` das aktive Tab-Objekt, indem es durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte schleift und nach dem Element sucht, dessen aktiv auf true gesetzt ist:

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

## Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie mit ihnen etwas tun - entweder um Benutzern Funktionen zur Manipulation und Verwaltung von Tabs anzubieten oder um Funktionalitäten in Ihrer Erweiterung zu implementieren.

Die folgenden Funktionen stehen zur Verfügung:

- Erstellen eines neuen Tabs ({{WebExtAPIRef("tabs.create()")}}).
- Duplizieren eines Tabs ({{WebExtAPIRef("tabs.duplicate()")}}).
- Entfernen eines Tabs ({{WebExtAPIRef("tabs.remove()")}}).
- Verschieben eines Tabs ({{WebExtAPIRef("tabs.move()")}}).
- Aktualisieren der Tab-URL - im Wesentlichen zu einer neuen Seite navigieren - ({{WebExtAPIRef("tabs.update()")}}).
- Neuladen der Tab-Seite ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf den aktiven Tab wirken (wenn keine Tab-`id` angegeben ist):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung Beispiel

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) verwendet all diese Funktionen mit Ausnahme des Aktualisierens einer Tab-URL. Die Art und Weise, wie diese APIs genutzt werden, ist ähnlich, daher betrachten wir eine der aufwendigeren Implementierungen, nämlich die Option "Aktiver Tab an den Anfang der Fensterliste verschieben".

Aber zuerst hier eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keine der Funktionen erfordert eine Berechtigung, um zu funktionieren, daher gibt es keine Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html
  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, einschließlich der Option "Aktiver Tab an den Anfang der Fensterliste verschieben", mit einer Reihe von `<a>`-Tags, die durch einen visuellen Trenner gruppiert sind. Jeder Menüpunkt erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welcher Menüpunkt angefordert wird.

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
  - : Um das in `tabs.html` definierte "Menü" umzusetzen, enthält [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) einen Listener für Klicks in `tabs.html`:

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

    Eine Reihe von `if`-Anweisungen prüft dann, ob die `id` des angeklickten Elements übereinstimmt.

    Dieser Codeabschnitt ist für die Option "Aktiver Tab an den Anfang der Fensterliste verschieben":

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

    Es ist beachtenswert, dass `console.log()` verwendet wird. Dies ermöglicht es Ihnen, Informationen in die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole auszugeben, was nützlich sein kann, wenn Probleme bei der Entwicklung gelöst werden müssen.

    ![Beispiel für die Konsolenausgabe von console.log, aus der Verschiebe-Tabs-Funktion, in der Debugging-Konsole](console.png)

    Der Verschiebungscode ruft zuerst `callOnActiveTab()` auf, das wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt zu erhalten, das die Tabs des aktiven Fensters enthält. Dann läuft es durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Anpinnen von Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _anpinnen_ kann. Angepinnte Tabs werden am Anfang der Tab-Liste platziert und können nicht bewegt werden. Das bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angepinnten Tabs ist. `firstUnpinnedTab()` wird aufgerufen, um die Position des ersten nicht angepinnten Tabs durch Schleifen durch das `tabs`-Objekt zu finden:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Jetzt haben wir alles, was notwendig ist, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-`id` erhalten können, und die Position, zu der der Tab verschoben werden soll. So können wir die Verschiebung implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

## Manipulation des Zoom-Levels eines Tabs

Der nächste Satz von Funktionen ermöglicht es Ihnen, den Zoom-Level in einem Tab zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zooeinstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}) in Firefox nicht verfügbar.

Der Zoom-Grad kann zwischen 30% und 500% liegen (dargestellt als Dezimalzahlen `0.3` bis `5`).

In Firefox sind die Standard-Zoomeinstellungen:

- **Standard-Zoom-Level:** 100%.
- **Zoom-Modus:** automatisch (daher verwaltet der Browser, wie Zoomebenen eingestellt werden).
- **Geltungsbereich von Zoom-Änderungen:** `"per-origin"`, was bedeutet, dass, wenn Sie eine Seite erneut besuchen, sie die bei Ihrem letzten Besuch eingestellte Zoomebene übernimmt.

### Anleitung Beispiel

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) umfasst drei Demonstrationen der Zoom-Funktionalität: heranzoomen, herauszoomen und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Sehen wir uns an, wie das Hereinzoomen implementiert wird.

- manifest.json
  - : Keine der Zoom-Funktionen erfordert Berechtigungen, daher gibt es keine Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei, die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es wird nichts Neues oder Einzigartiges zur Bereitstellung der Zoom-Optionen getan.
- tabs.js
  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) definiert zu Beginn mehrere Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann den gleichen Listener, den wir bereits diskutiert haben, um auf Klicks in `tabs.html` zu reagieren.

    Für die Hereinzoom-Funktion läuft dies:

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

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten. Dann erhält {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoomfaktor des Tabs. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und ein Alert ausgegeben, wenn der Tab bereits auf dem maximalen Zoom ist. Andernfalls wird der Zoom-Level erhöht, aber auf das maximale Zoom begrenzt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation des CSS eines Tabs

Eine weitere bedeutende Fähigkeit, die von der Tabs-API angeboten wird, ist die Fähigkeit, das CSS in einem Tab zu manipulieren - neues CSS zu einem Tab hinzuzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS von einem Tab zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, wenn Sie beispielsweise bestimmte Seitenelemente hervorheben oder das Standard-Layout der Seite ändern möchten.

### Anleitung Beispiel

Das Beispiel [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rahmen hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Gehen wir durch, wie es eingerichtet ist.

- manifest.json
  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert Berechtigungen an, die zur Nutzung der CSS-Funktionen erforderlich sind. Sie benötigen entweder:
    - `"tabs"`-Berechtigung und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - `"activeTab"`-Berechtigung.

    Letzteres ist am nützlichsten, da es einer Erweiterung ermöglicht, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn es von der Browser- oder Seitenaktion, dem Kontextmenü oder einer Tastenkombination ausgeführt wird.

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

    Sie werden feststellen, dass `"tabs"`-Berechtigung zusätzlich zu `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, um dem Skript der Erweiterung Zugriff auf die URL des Tabs zu ermöglichen, deren Bedeutung wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:
    - **einem Hintergrundskript**, das startet, sobald die Erweiterung geladen wird.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das zur Adressleiste des Browsers hinzugefügt wird.

- background.js
  - : Beim Start legt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten fest, um das anzuwendende CSS, Titel für die "Seitenaktion" und eine Liste von Protokollen, in denen die Erweiterung arbeiten wird, zu definieren:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn die Erweiterung zum ersten Mal geladen wird, verwendet sie {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Dann wird durch die Tabs geschleift, wobei `initializePageAction()` aufgerufen wird.

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

    Falls das Beispiel auf den Tab wirken kann, setzt `initializePageAction()` das `pageAction`-Symbol (Navigationsleiste) und Titel des Tabs, um die "aus"-Versionen zu verwenden, bevor die `pageAction` sichtbar gemacht wird:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als Nächstes wartet ein Listener auf `pageAction.onClicked` darauf, dass das `pageAction`-Symbol angeklickt wird, und ruft `toggleCSS` auf, wenn es angeklickt wird.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` erhält den Titel der `pageAction` und führt dann die beschriebene Aktion durch:
    - **Für "CSS anwenden":**
      - wechselt das `pageAction`-Symbol und den Titel zu den "Entfernen"-Versionen.
      - wendet das CSS mithilfe von {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**
      - wechselt das `pageAction`-Symbol und den Titel zu den "Anwenden"-Versionen.
      - entfernt das CSS mithilfe von {{WebExtAPIRef("tabs.removeCSS()")}}.

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

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Update des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu überprüfen, ob der Tab weiterhin ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Arbeiten mit geteilten Tab-Ansichten

Die Tab-Funktionalität ermöglicht es Benutzern, zwei Tabs nebeneinander in einer [geteilten Ansicht](https://support.mozilla.org/en-US/kb/split-view-firefox) anzuzeigen.

In der Benutzeroberfläche wird eine geteilte Ansicht als eine Einheit behandelt, sodass wenn jemand einen Tab in einem Split bewegt, der andere Tab im Split mit ihm bewegt wird, wodurch der Split erhalten bleibt. Ihre Erweiterung kann den verschobenen Tab mit {{WebExtAPIRef("tabs.onMoved")}} beobachten. Das Split-Verhalten ist dasselbe, wenn ein Tab im Split mit {{WebExtAPIRef("tabs.move")}} bewegt wird. Wenn jedoch beide Split-Tabs in einem Zug angegeben und ein Tab dazwischen platziert wird, wird die Teilung geschlossen.

Wenn jemand einen der Tabs in einer geteilten Ansicht schließt, wird die geteilte Ansicht geschlossen und der andere Tab bleibt. Ihre Erweiterung kann einen Tab eines Splits mit {{WebExtAPIRef("tabs.remove")}} entfernen.

Ihre Erweiterung kann herausfinden, ob ein Tab in einer geteilten Ansicht ist, indem es dessen [`splitViewId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab#splitviewid) abruft. Änderungen der Split-View-Mitgliedschaft werden mit {{WebExtAPIRef("tabs.onUpdated")}} beobachtet.

> [!NOTE]
> APIs zur Erstellung und Entfernung von geteilten Ansichten (ohne die Tabs zu bewegen oder zu entfernen) werden unter [Issue #967](https://github.com/w3c/webextensions/issues/967) der WebExtensions Community Group (WECG) der W3C entwickelt.

## Einige weitere interessante Fähigkeiten

Es gibt ein paar andere Funktionen der Tabs-API, die nicht in eine der vorherigen Abschnitte passen:

- Erfassen Sie den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen Sie die Hauptsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte zum Beispiel genutzt werden, um die Sprache in der Benutzeroberfläche Ihrer Erweiterung mit der der Seite, auf der sie läuft, abzugleichen.

## Erfahren Sie mehr

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich Folgendes an:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
