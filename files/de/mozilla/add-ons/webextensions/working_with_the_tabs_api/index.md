---
title: Mit der Tabs API arbeiten
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Tabs ermöglichen es Benutzern, mehrere Webseiten in einem Browserfenster zu öffnen und zwischen ihnen zu wechseln. Mit der Tabs API können Sie auf diese Tabs zugreifen und sie bearbeiten. So können Sie Funktionen entwickeln, mit denen Benutzer auf neue Weise mit Tabs arbeiten oder die Funktionen Ihrer Erweiterung nutzen können.

Diese Anleitung behandelt:

- Die Berechtigungen, die für die Verwendung der Tabs API erforderlich sind.
- Das Ermitteln von Tabs und ihren Eigenschaften mit {{WebExtAPIRef("tabs.query")}}.
- Das Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Das Ändern der Zoomstufe eines Tabs.
- Das Bearbeiten des CSS eines Tabs.
- Das Bearbeiten von Tab-Gruppen und [geteilten Ansichten](#mit_geteilten_tab-ansichten_arbeiten).

Abschließend werden einige weitere Funktionen der API vorgestellt.

> [!NOTE]
> Einige Funktionen der Tabs API werden an anderer Stelle behandelt. Dazu gehören die Methoden, mit denen Sie Tab-Inhalte mithilfe von Skripten bearbeiten können ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Weitere Informationen zu diesen Methoden finden Sie im Grundlagenartikel [Content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und im Leitfaden [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs API

Für die meisten Funktionen der Tabs API benötigen Sie keine Berechtigungen. Es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) anhand der URL durchzuführen.
- Eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} erforderlich.

So können Sie die Berechtigung `"tabs"` in der manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Damit können Sie alle Funktionen der Tabs API auf allen Websites verwenden, die der Benutzer besucht. Für {{WebExtAPIRef("tabs.executeScript()")}} und {{WebExtAPIRef("tabs.insertCSS()")}} gibt es mit der [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) auch eine Möglichkeit, ohne Host-Berechtigung auszukommen. Sie gewährt dieselben Rechte wie `"tabs"` mit `<all_urls>`, allerdings mit zwei Einschränkungen:

- Der Benutzer muss über eine Browser- oder Seitenaktion, ein Kontextmenü oder eine Tastenkombination mit der Erweiterung interagieren.
- Die Berechtigung gilt nur für den aktiven Tab.

Der Vorteil dieses Ansatzes ist, dass Benutzer keinen Berechtigungshinweis erhalten, der besagt, dass Ihre Erweiterung „auf Ihre Daten für alle Websites zugreifen“ kann. Die Berechtigung `<all_urls>` erlaubt einer Erweiterung nämlich, jederzeit Skripte in beliebigen Tabs auszuführen. Die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) erlaubt dies dagegen nur für eine vom Benutzer angeforderte Aktion im aktuellen Tab.

## Tabs und ihre Eigenschaften ermitteln

Manchmal benötigen Sie eine Liste aller Tabs in allen Browserfenstern. In anderen Fällen möchten Sie nur Tabs finden, die bestimmte Kriterien erfüllen, etwa Tabs, die von einem bestimmten Tab aus geöffnet wurden oder Seiten einer bestimmten Domain anzeigen. Sobald Sie eine Liste der Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften erfahren.

Hierfür gibt es {{WebExtAPIRef("tabs.query()")}}. Ohne Abfragekriterien liefert die Methode alle Tabs. Über das Objekt `queryInfo` können Sie Kriterien festlegen, etwa ob ein Tab aktiv ist oder sich im aktuellen Fenster befindet. Insgesamt stehen 17 Kriterien zur Verfügung. {{WebExtAPIRef("tabs.query()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten mit Informationen über die Tabs zurück.

Wenn Sie nur Informationen zum aktuellen Tab benötigen, erhalten Sie dessen {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.getCurrent()")}}. Wenn Sie die ID eines Tabs kennen, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Praxisbeispiel

Sehen wir uns anhand des Beispiels [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) an, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden. Das Beispiel fügt dem Popup einer Symbolleistenschaltfläche eine Liste zum Wechseln zwischen Tabs hinzu.

![Das Tabs-Menü in der Symbolleiste mit dem Bereich zum Wechseln zwischen Tabs](switch_to_tab.png)

- manifest.json
  - : Hier ist die Datei [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json):

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
    > - **`tabs.html` ist in `browser_action` als `default_popup` festgelegt.** Es wird angezeigt, wenn der Benutzer auf das Symbol der Erweiterung in der Symbolleiste klickt.
    > - **Die Berechtigungen enthalten `"tabs"`.** Das ist für die Tab-Liste erforderlich, da die Erweiterung die Titel der Tabs liest, um sie im Popup anzuzeigen.

- tabs.html
  - : `tabs.html` definiert den Inhalt des Erweiterungs-Popups:

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

    Die Datei führt Folgendes aus:
    1. Sie definiert die Menüpunkte.
    2. Sie definiert ein leeres `div` mit der ID `tabs-list`, das die Tab-Liste aufnehmen soll.
    3. Sie bindet `tabs.js` ein.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Tab-Liste erstellt und dem Popup hinzugefügt wird.

#### Das Popup erstellen

Zunächst wird ein Event-Handler hinzugefügt, der `listTabs()` ausführt, sobald `tabs.html` geladen ist:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Als Erstes ruft `listTabs()` die Funktion `getCurrentWindowTabs()` auf. Dort wird {{WebExtAPIRef("tabs.query()")}} verwendet, um {{WebExtAPIRef("tabs.Tab")}}-Objekte für die Tabs im aktuellen Fenster abzurufen:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Nun kann `listTabs()` den Inhalt des Popups erstellen.

Zunächst werden folgende Schritte ausgeführt:

1. Das Element `<div id="tabs-list">` abrufen.
2. Ein Dokumentfragment erstellen, in dem die Liste aufgebaut wird.
3. Zähler initialisieren.
4. Den Inhalt des Elements `<div id="tabs-list">` löschen.

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

Anschließend werden die Links für die einzelnen Tabs erstellt:

1. Die ersten fünf Einträge aus dem Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten durchlaufen.
2. Für jeden Eintrag einen Hyperlink zum Dokumentfragment hinzufügen.
   - Als Beschriftung des Links, also als sein Text, dient der `title` des Tabs (oder seine `id`, falls er keinen `title` hat).
   - Als Linkadresse wird die `id` des Tabs verwendet.

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

Abschließend wird das Dokumentfragment in das Element `<div id="tabs-list">` eingefügt:

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    // ...
    tabsList.appendChild(currentTabs);
  });
}
```

#### Mit dem aktiven Tab arbeiten

Ein weiteres Beispiel ist die Info-Option „Alert active tab“. Sie zeigt alle Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts für den aktiven Tab in einem Hinweisdialog an:

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

Dabei findet `callOnActiveTab()` das Objekt des aktiven Tabs, indem es die {{WebExtAPIRef("tabs.Tab")}}-Objekte durchläuft und nach dem Eintrag sucht, bei dem `active` gesetzt ist:

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

## Tabs erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen tun – etwa Benutzern Funktionen zur Verwaltung von Tabs anbieten oder Funktionen Ihrer Erweiterung umsetzen.

Dafür stehen folgende Methoden zur Verfügung:

- Einen neuen Tab erstellen ({{WebExtAPIRef("tabs.create()")}}).
- Einen Tab duplizieren ({{WebExtAPIRef("tabs.duplicate()")}}).
- Einen Tab entfernen ({{WebExtAPIRef("tabs.remove()")}}).
- Einen Tab verschieben ({{WebExtAPIRef("tabs.move()")}}).
- Die URL eines Tabs aktualisieren und damit zu einer neuen Seite navigieren ({{WebExtAPIRef("tabs.update()")}}).
- Die Seite eines Tabs neu laden ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Die folgenden Methoden benötigen die ID beziehungsweise IDs der Tabs, die sie bearbeiten:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Die folgenden Methoden wirken dagegen auf den aktiven Tab, wenn keine Tab-`id` angegeben wird:
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Praxisbeispiel

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) demonstriert alle diese Funktionen außer dem Aktualisieren der URL eines Tabs. Die APIs werden auf ähnliche Weise verwendet. Deshalb betrachten wir eine der aufwendigeren Implementierungen: die Option „Move active tab to the beginning of the window list“.

Zunächst sehen Sie hier die Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Für keine dieser Funktionen ist eine Berechtigung erforderlich. In der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) gibt es daher nichts hervorzuheben.
- tabs.html
  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das im Popup angezeigte „Menü“. Es enthält die Option „Move active tab to the beginning of the window list“ und besteht aus einer Reihe von `<a>`-Tags, die durch sichtbare Trennlinien gruppiert sind. Jeder Menüpunkt erhält eine `id`. Anhand dieser ID ermittelt `tabs.js`, welcher Menüpunkt angeklickt wurde.

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
  - : Um das in `tabs.html` definierte „Menü“ umzusetzen, enthält [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) einen Listener für Klicks in `tabs.html`:

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

    Anschließend prüfen mehrere `if`-Anweisungen die `id` des angeklickten Elements.

    Dieser Codeausschnitt gehört zur Option „Move active tab to the beginning of the window list“:

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

    Beachten Sie die Verwendung von `console.log()`. Damit können Sie Informationen in der Konsole des [Debuggers](https://extensionworkshop.com/documentation/develop/debugging/) ausgeben. Das kann bei der Behebung von Problemen während der Entwicklung hilfreich sein.

    ![Beispiel für die Ausgabe von console.log durch die Funktion zum Verschieben von Tabs in der Debugging-Konsole](console.png)

    Der Code zum Verschieben ruft zuerst `callOnActiveTab()` auf. Diese Funktion ruft wiederum `getCurrentWindowTabs()` auf, um {{WebExtAPIRef("tabs.Tab")}}-Objekte für die Tabs des aktiven Fensters zu erhalten. Anschließend durchläuft sie die Objekte, um das Objekt des aktiven Tabs zu finden und zurückzugeben:

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

Benutzer können Tabs in einem Fenster _anheften_. Angeheftete Tabs stehen am Anfang der Tab-Liste und können nicht verschoben werden. Die früheste Position, an die ein anderer Tab verschoben werden kann, ist daher direkt hinter den angehefteten Tabs. `firstUnpinnedTab()` durchläuft das `tabs`-Objekt, um die Position des ersten nicht angehefteten Tabs zu finden:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Nun haben wir alles, was zum Verschieben des Tabs benötigt wird: das Objekt des aktiven Tabs, aus dem wir seine `id` entnehmen können, und die Zielposition. Damit können wir den Tab verschieben:

```js
browser.tabs.move([tab.id], { index });
```

Die übrigen Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs sind ähnlich implementiert.

## Die Zoomstufe eines Tabs ändern

Mit den nächsten Methoden können Sie die Zoomstufe eines Tabs abrufen ({{WebExtAPIRef("tabs.getZoom")}}) und festlegen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoomeinstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}). Zum Zeitpunkt der Erstellung dieses Artikels konnten die Einstellungen in Firefox jedoch nicht mit {{WebExtAPIRef("tabs.setZoomSettings")}} festgelegt werden.

Die Zoomstufe kann zwischen 30 % und 500 % liegen (dargestellt durch die Dezimalwerte `0.3` bis `5`).

In Firefox gelten standardmäßig folgende Zoomeinstellungen:

- **Standard-Zoomstufe:** 100 %.
- **Zoommodus:** automatisch (der Browser verwaltet, wie Zoomstufen festgelegt werden).
- **Geltungsbereich von Zoomänderungen:** `"per-origin"`. Wenn Sie eine Website erneut besuchen, wird also die bei Ihrem letzten Besuch festgelegte Zoomstufe verwendet.

### Praxisbeispiel

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) demonstriert drei Zoomfunktionen: Vergrößern, Verkleinern und Zurücksetzen. Hier sehen Sie die Funktionen in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Sehen wir uns an, wie das Vergrößern implementiert ist.

- manifest.json
  - : Für keine der Zoomfunktionen sind Berechtigungen erforderlich. In der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) gibt es daher nichts hervorzuheben.
- tabs.html
  - : Wie [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen dieser Erweiterung definiert, haben wir bereits besprochen. Für die Zoomoptionen wird nichts Neues oder Besonderes benötigt.
- tabs.js
  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) definiert zunächst mehrere Konstanten, die im Zoomcode verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Anschließend wird derselbe Listener verwendet, den wir bereits besprochen haben, um auf Klicks in `tabs.html` zu reagieren.

    Für die Vergrößerungsfunktion wird Folgendes ausgeführt:

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

    Dieser Code ruft mit `callOnActiveTab()` die Informationen zum aktiven Tab ab. Danach ermittelt {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoomfaktor des Tabs. Der aktuelle Wert wird mit dem festgelegten Höchstwert (`MAX_ZOOM`) verglichen. Wenn der Tab bereits maximal vergrößert ist, wird ein Hinweis angezeigt. Andernfalls wird die Zoomstufe erhöht, ohne den Höchstwert zu überschreiten, und anschließend festgelegt.

## Das CSS eines Tabs bearbeiten

Eine weitere wichtige Funktion der Tabs API ist das Bearbeiten des CSS innerhalb eines Tabs: Sie können einem Tab neues CSS hinzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS aus einem Tab entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Das ist beispielsweise nützlich, wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout einer Seite ändern möchten.

### Praxisbeispiel

Das Beispiel [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rahmen hinzuzufügen. Hier sehen Sie die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Sehen wir uns an, wie das Beispiel eingerichtet ist.

- manifest.json
  - : Die Datei [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die Berechtigungen an, die für die CSS-Funktionen erforderlich sind. Sie benötigen entweder:
    - die Berechtigung `"tabs"` und eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder
    - die Berechtigung `"activeTab"`.

    Letztere ist meist hilfreicher: Sie erlaubt einer Erweiterung, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn der Aufruf über eine Browser- oder Seitenaktion der Erweiterung, ein Kontextmenü oder eine Tastenkombination erfolgt.

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

    Beachten Sie, dass zusätzlich zu `"activeTab"` auch die Berechtigung `"tabs"` angefordert wird. Diese zusätzliche Berechtigung ist erforderlich, damit das Skript der Erweiterung auf die URL des Tabs zugreifen kann. Warum das wichtig ist, sehen wir gleich.

    Die weiteren wichtigen Bestandteile der manifest.json-Datei sind die Definitionen von:
    - **einem Hintergrundskript**, das ausgeführt wird, sobald die Erweiterung geladen ist.
    - **einer „page action“**, die ein Symbol definiert, das der Adressleiste des Browsers hinzugefügt wird.

- background.js
  - : Beim Start legt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten fest: das anzuwendende CSS, Titel für die „page action“ und eine Liste der Protokolle, mit denen die Erweiterung funktioniert.

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Beim ersten Laden verwendet die Erweiterung {{WebExtAPIRef("tabs.query()")}}, um alle Tabs im aktuellen Browserfenster abzurufen. Anschließend durchläuft sie die Tabs und ruft für jeden `initializePageAction()` auf.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs die Anwendung des CSS erlaubt:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Wenn das Beispiel auf den Tab angewendet werden kann, setzt `initializePageAction()` das Symbol und den Titel der `pageAction` des Tabs (in der Navigationsleiste) auf die Varianten für den deaktivierten Zustand. Anschließend wird die `pageAction` sichtbar gemacht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Danach wartet ein Listener für `pageAction.onClicked` darauf, dass auf das Symbol der `pageAction` geklickt wird, und ruft dann `toggleCSS` auf.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` liest den Titel der `pageAction` und führt die entsprechende Aktion aus:
    - **Bei „Apply CSS“:**
      - Symbol und Titel der `pageAction` werden auf die Varianten für „Remove CSS“ umgestellt.
      - Das CSS wird mit {{WebExtAPIRef("tabs.insertCSS()")}} angewendet.

    - **Bei „Remove CSS“:**
      - Symbol und Titel der `pageAction` werden auf die Varianten für „Apply CSS“ umgestellt.
      - Das CSS wird mit {{WebExtAPIRef("tabs.removeCSS()")}} entfernt.

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

    Damit die `pageAction` nach jeder Aktualisierung des Tabs gültig bleibt, ruft ein Listener für {{WebExtAPIRef("tabs.onUpdated")}} bei jeder Aktualisierung `initializePageAction()` auf. So wird geprüft, ob der Tab weiterhin ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Mit geteilten Tab-Ansichten arbeiten

Mit der Tab-Funktion für [geteilte Ansichten](https://support.mozilla.org/en-US/kb/split-view-firefox) können Benutzer zwei Tabs nebeneinander anzeigen.

In der Benutzeroberfläche wird eine geteilte Ansicht als Einheit behandelt: Verschiebt jemand einen Tab der Ansicht, wird der andere mitverschoben und die Ansicht bleibt erhalten. Ihre Erweiterung kann den verschobenen Tab mit {{WebExtAPIRef("tabs.onMoved")}} beobachten. Dasselbe Verhalten gilt, wenn ein Tab der geteilten Ansicht mit {{WebExtAPIRef("tabs.move")}} verschoben wird. Wenn jedoch beide Tabs beim Verschieben angegeben werden und ein Tab zwischen ihnen platziert wird, wird die geteilte Ansicht geschlossen.

Wenn jemand einen der Tabs einer geteilten Ansicht schließt, wird die geteilte Ansicht geschlossen und der andere Tab bleibt erhalten. Ihre Erweiterung kann einen Tab der geteilten Ansicht mit {{WebExtAPIRef("tabs.remove")}} entfernen.

Ob sich ein Tab in einer geteilten Ansicht befindet, kann Ihre Erweiterung anhand seiner Eigenschaft [`splitViewId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab#splitviewid) feststellen. Änderungen an der Zugehörigkeit zu einer geteilten Ansicht lassen sich mit {{WebExtAPIRef("tabs.onUpdated")}} beobachten.

> [!NOTE]
> APIs zum Erstellen und Aufheben geteilter Ansichten, ohne Tabs zu verschieben oder zu entfernen, werden im Rahmen von [Issue #967](https://github.com/w3c/webextensions/issues/967) der WebExtensions Community Group (WECG) des W3C entwickelt.

## Weitere interessante Funktionen

Einige weitere Funktionen der Tabs API passen nicht in die vorherigen Abschnitte:

- Den sichtbaren Inhalt eines Tabs mit {{WebExtAPIRef("tabs.captureVisibleTab")}} erfassen.
- Die vorherrschende Sprache des Inhalts eines Tabs mit {{WebExtAPIRef("tabs.detectLanguage")}} erkennen. Damit könnten Sie beispielsweise die Sprache der Benutzeroberfläche Ihrer Erweiterung an die Sprache der angezeigten Seite anpassen.

## Weitere Informationen

Weitere Informationen zur Tabs API finden Sie unter:

- [Referenz zur Tabs API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (viele davon verwenden die Tabs API)
