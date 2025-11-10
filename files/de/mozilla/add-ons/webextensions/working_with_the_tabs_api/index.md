---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Tabs ermöglichen es einem Benutzer, mehrere Webseiten in seinem Browserfenster zu öffnen und dann zwischen diesen Webseiten zu wechseln. Mit der Tabs-API können Sie diese Tabs bearbeiten und manipulieren, um Hilfsprogramme zu erstellen, die den Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder die Funktionen Ihrer Erweiterung bereitzustellen.

In diesem Anleitung-Artikel werden wir uns mit folgenden Themen beschäftigen:

- Berechtigungen, die für die Verwendung der Tabs-API erforderlich sind.
- Erfahren Sie mehr über Tabs und ihre Eigenschaften mit {{WebExtAPIRef("tabs.query")}}.
- Erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen von Tabs.
- Manipulieren des Zoom-Levels eines Tabs.
- Manipulieren von CSS eines Tabs.

Zum Schluss betrachten wir einige andere, verschiedene Funktionen, die die API bietet.

> [!NOTE]
> Es gibt einige Tab-API-Funktionen, die an anderer Stelle behandelt werden. Dies sind die Methoden, die Sie verwenden können, um Tab-Inhalte mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen zu diesen Methoden benötigen, lesen Sie den Konzepte-Artikel [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und die Anleitung [Eine Webseite modifizieren](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die Mehrheit der Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist erforderlich für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

So können Sie die `"tabs"`-Berechtigung in Ihrer manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage erlaubt Ihnen die Verwendung aller Funktionen der Tabs-API auf allen Websites, die Ihr Benutzer besucht. Es gibt auch einen alternativen Ansatz, um Berechtigungen für die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} anzufordern, bei dem keine Host-Berechtigung erforderlich ist, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet die gleichen Rechte wie `"tabs"` mit `<all_urls>`, jedoch mit zwei Einschränkungen:

- Der Benutzer muss über die Browser- oder Seitenaktion der Erweiterung, über das Kontextmenü oder Shortcut-Taste mit der Erweiterung interagieren.
- Sie gewährt nur Zugriff innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Warnung erhält, die besagt, dass Ihre Erweiterung "Ihre Daten für alle Websites zugreifen" kann. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, in jedem Tab zu jedem Zeitpunkt Skripte auszuführen, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) auf die Ausführung einer benutzerangeforderten Aktion im aktuellen Tab beschränkt ist.

## Mehr über Tabs und deren Eigenschaften entdecken

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Manchmal möchten Sie möglicherweise einen Teil der Tabs finden, die einige spezifische Kriterien erfüllen, wie z. B. diejenigen, die von einem bestimmten Tab geöffnet wurden oder Seiten von einer bestimmten Domain anzeigen. Und sobald Sie Ihre Liste der Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften erfahren.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Alleine verwendet, um alle Tabs abzurufen oder das `queryInfo`-Objekt zu übernehmen – um Abfragekriterien anzugeben, wie ob der Tab aktiv ist, im aktuellen Fenster oder eine oder mehrere von 17 Kriterien erfüllt – gibt {{WebExtAPIRef("tabs.query()")}} ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie Informationen nur über den aktuellen Tab wünschen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} abrufen. Wenn Sie die ID eines Tabs haben, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Anleitung Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, lassen Sie uns durchgehen, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs)-Beispiel die Liste der "zu Tabs wechseln" zu seinem Toolbar-Button-Popup hinzufügt.

![Das Tabs-Toolbar-Menü zeigt den Bereich "Zu Tab wechseln"](switch_to_tab.png)

- manifest.json
  - : Hier ist das [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json):

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
    > - **`tabs.html` ist als `default_popup` in `browser_action` definiert.** Es wird angezeigt, wenn der Benutzer auf das Symbol der Erweiterung in der Symbolleiste klickt.
    > - **Die Berechtigungen umfassen Tabs.** Dies ist erforderlich, um die Tab-Liste zu unterstützen, da die Erweiterung den Titel der Tabs liest, um ihn im Popup anzuzeigen.

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
    1. Die Menüelemente werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) werden wir sehen, wie die Liste der Tabs erstellt und dem Popup hinzugefügt wird.

#### Erstellen des Popups

Zunächst wird ein Event-Handler hinzugefügt, um `listTabs()` auszuführen, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das erste, was `listTabs()` tut, ist, `getCurrentWindowTabs()` aufzurufen. Hierbei wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zunächst:

1. Holen Sie sich das `<div id="tabs-list">`-Element.
2. Erstellen Sie ein Dokumentfragment (in dem die Liste erstellt wird).
3. Setzen Sie Zähler.
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

Als nächstes erstellen wir die Links für jeden Tab:

1. Schleifen durch die ersten 5 Elemente aus dem {{WebExtAPIRef("tabs.Tab")}}-Objekt.
2. Für jedes Element fügen Sie dem Dokumentfragment einen Hyperlink hinzu.
   - Das Label des Links — das heißt, sein Text — wird mit dem `title` des Tabs festgelegt (oder der `id`, wenn kein `title` vorhanden ist).
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

Eine weitere verwandte Beispiel-Funktion ist die "Warnung aktiven Tab"-Info-Option, die alle {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaften für den aktiven Tab in eine Warnmeldung ausgibt:

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

Wo `callOnActiveTab()` das aktive Tab-Objekt durch Schleifen durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte findet und das Element sucht, das auf aktiv gesetzt ist:

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

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen tun – entweder um Benutzern Funktionen zum Manipulieren und Verwalten von Tabs zu bieten oder um Funktionalität in Ihrer Erweiterung zu implementieren.

Folgende Funktionen stehen zur Verfügung:

- einen neuen Tab erstellen ({{WebExtAPIRef("tabs.create()")}}).
- einen Tab duplizieren ({{WebExtAPIRef("tabs.duplicate()")}}).
- einen Tab entfernen ({{WebExtAPIRef("tabs.remove()")}}).
- einen Tab verschieben ({{WebExtAPIRef("tabs.move()")}}).
- die URL des Tabs aktualisieren — effektiv zu einer neuen Seite browsen — ({{WebExtAPIRef("tabs.update()")}}).
- die Seite des Tabs neu laden ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf dem aktiven Tab agieren (wenn keine Tab-`id` angegeben ist):
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs)-Beispiel umfasst alle diese Funktionen, mit Ausnahme der Aktualisierung der URL eines Tabs. Die Art und Weise, wie diese APIs verwendet werden, ist ähnlich, daher werden wir uns eine der aufwendigeren Implementierungen ansehen, nämlich die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Aber zuerst, hier ist eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keiner der Funktionen erfordert eine Berechtigung zum Betrieb, daher gibt es in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei keine hervorzuhebenden Funktionen.
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

    Eine Reihe von `if`-Anweisungen versucht dann, die `id` des angeklickten Elements zu erkennen.

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

    Es ist bemerkenswert, die Verwendung von `console.log()`. Dies ermöglicht es Ihnen, Informationen an die [Debugger](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole auszugeben, was nützlich sein kann, wenn Probleme während der Entwicklung behoben werden.

    ![Beispiel für die console.log-Ausgabe, von der Verschieben-Tabs-Funktion, in der Debugging-Konsole](console.png)

    Der Verschiebungscode ruft zunächst `callOnActiveTab()` auf, das wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt zu erhalten, das die Tabs des aktiven Fensters enthält. Es durchläuft dann das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Angeheftete Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _anheften_ kann. Angeheftete Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Das bedeutet, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angehefteten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angehefteten Tabs zu finden, indem das `tabs`-Objekt durchlaufen wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Nun haben wir alles, was notwendig ist, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-`id` erhalten können, und die Position, zu der der Tab verschoben werden soll. Also können wir die Verschiebung implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

## Manipulieren des Zoom-Levels eines Tabs

Der nächste Satz von Funktionen ermöglicht es Ihnen, das Zoom-Level innerhalb eines Tabs zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und festzulegen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen festzulegen ({{WebExtAPIRef("tabs.setZoomSettings")}}), in Firefox nicht verfügbar.

Das Zoom-Level kann zwischen 30% und 500% betragen (dargestellt als Dezimalzahlen `0.3` bis `5`).

In Firefox sind die Standardeinstellungen für das Zoomen:

- **Standard-Zoom-Level:** 100%.
- **Zoom-Modus:** automatisch (der Browser verwaltet, wie Zoom-Level angepasst werden).
- **Geltungsbereich der Zoom-Änderungen:** `"per-origin"`, was bedeutet, dass, wenn Sie eine Seite erneut besuchen, das Zoom-Level festgelegt wird, das Sie bei Ihrem letzten Besuch eingestellt haben.

### Anleitung Beispiel

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs)-Beispiel beinhaltet drei Demonstrationen der Zoom-Funktion: Vergrößern, Verkleinern und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Lassen Sie uns schauen, wie das Vergrößern implementiert wird.

- manifest.json
  - : Keiner der Zoom-Funktionen erfordert Berechtigungen, daher gibt es in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei keine hervorzuhebenden Funktionen.
- tabs.html
  - : Wir haben bereits besprochen, wie das [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, es wird nichts Neues oder Einzigartiges getan, um die Zoom-Optionen bereitzustellen.
- tabs.js
  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt damit, mehrere Konstanten zu definieren, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann denselben Listener, den wir zuvor besprochen haben, um auf Klicks in `tabs.html` zu reagieren.

    Für die Zoom-in-Funktion führt dies aus:

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

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann verwendet {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoom-Faktor des Tabs. Das aktuelle Zoom-Level wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und eine Warnung ausgegeben, falls sich der Tab bereits im maximalen Zoom befindet. Ansonsten wird das Zoom-Level erhöht, jedoch auf das maximale Zoom begrenzt, dann wird das Zoom mit {{WebExtAPIRef("tabs.getZoom")}} eingestellt.

## Manipulieren von CSS eines Tabs

Eine weitere bedeutende Fähigkeit, die die Tabs-API bietet, ist die Möglichkeit, das CSS innerhalb eines Tabs zu manipulieren—neues CSS in einen Tab einzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder das CSS eines Tabs zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, beispielsweise wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Anleitung Beispiel

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css)-Beispiel verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rahmen hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Lassen Sie uns durchgehen, wie es eingerichtet ist.

- manifest.json
  - : Das [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die Berechtigungen an, die erforderlich sind, um die CSS-Funktionen zu verwenden. Sie benötigen entweder:
    - `"tabs"`-Berechtigung und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder
    - `"activeTab"`-Berechtigung.

    Letzteres ist am nützlichsten, da es einer Erweiterung ermöglicht, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn es über die Browser- oder Seitenaktion, das Kontextmenü oder eine Verknüpfung ausgeführt wird.

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

    Sie werden bemerken, dass die `"tabs"`-Berechtigung zusätzlich zur `"activeTab"`-Berechtigung angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, um dem Script der Erweiterung den Zugriff auf die URL des Tabs zu ermöglichen, deren Wichtigkeit wir gleich sehen werden.

    Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:
    - **einem Hintergrund-Skript**, das ausgeführt wird, sobald die Erweiterung geladen ist.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das der Adressleiste des Browsers hinzugefügt wird.

- background.js
  - : Beim Starten setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS, Titel für die "Seitenaktion" und eine Liste von Protokollen festzulegen, bei denen die Erweiterung funktioniert:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Beim ersten Laden verwendet die Erweiterung {{WebExtAPIRef("tabs.query()")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Es durchläuft dann die Tabs und ruft `initializePageAction()` auf.

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

    Dann setzt `initializePageAction()` das `pageAction`-Symbol und den Titel des Tabs auf die "aus"-Versionen, bevor es die `pageAction` sichtbar macht, falls das Beispiel auf den Tab wirken kann:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als nächstes wartet ein Listener auf `pageAction.onClicked` darauf, dass das `pageAction`-Symbol angeklickt wird, und ruft `toggleCSS` auf, wenn dies der Fall ist.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` ruft den Titel von der `pageAction`- und führt dann die beschriebene Aktion aus:
    - **Für "CSS anwenden":**
      - Ändert das `pageAction`-Symbol und den Titel in die "entfernen"-Versionen.
      - Wendet das CSS mit {{WebExtAPIRef("tabs.insertCSS()")}} an.

    - **Für "CSS entfernen":**
      - Ändert das `pageAction`-Symbol und den Titel in die "anwenden"-Versionen.
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

    Schließlich, um sicherzustellen, dass die `pageAction` auch nach jeder Aktualisierung des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal auf, wenn der Tab aktualisiert wird, um zu prüfen, ob der Tab weiterhin ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Funktionen der Tabs-API, die nicht in eine der vorherigen Abschnitte passen:

- Erfassung des sichtbaren Tab-Inhalts mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen der Hauptsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte beispielsweise verwendet werden, um die Sprache der Benutzeroberfläche Ihrer Erweiterung an die der Seite, auf der sie ausgeführt wird, anzupassen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie in:

- [Tabs-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (von denen viele die Tabs-API verwenden)
