---
title: Mit der Tabs API arbeiten
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

Tabs ermöglichen es Nutzern, mehrere Webseiten in einem Browserfenster zu öffnen und zwischen ihnen zu wechseln. Mit der Tabs API können Sie diese Tabs verwalten und verändern. So lassen sich Funktionen entwickeln, die Nutzern neue Möglichkeiten im Umgang mit Tabs bieten oder Funktionen Ihrer Erweiterung bereitstellen.

Diese Anleitung behandelt:

- Die erforderlichen Berechtigungen für die Tabs API.
- Das Ermitteln von Tabs und ihren Eigenschaften mit {{WebExtAPIRef("tabs.query")}}.
- Das Erstellen, Duplizieren, Verschieben, Aktualisieren, Neuladen und Entfernen von Tabs.
- Das Ändern der Zoomstufe eines Tabs.
- Das Ändern des CSS eines Tabs.
- Das Verwalten von Tab-Gruppen und [geteilten Ansichten](#mit_geteilten_tab-ansichten_arbeiten).

Zum Schluss werden einige weitere Funktionen der API vorgestellt.

> [!NOTE]
> Einige Funktionen der Tabs API werden an anderer Stelle behandelt. Dazu gehören die Methoden, mit denen Sie Tab-Inhalte mithilfe von Skripten verändern können ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Weitere Informationen finden Sie im Grundlagenartikel [Content-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und im Leitfaden [Eine Webseite verändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs API

Für die meisten Funktionen der Tabs API benötigen Sie keine Berechtigungen. Es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist erforderlich, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` eines Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` auch für eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) anhand der URL.
- Eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} erforderlich.

So können Sie die Berechtigung `"tabs"` in der manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Damit können Sie alle Funktionen der Tabs API auf allen Websites nutzen, die Ihre Nutzer besuchen. Für {{WebExtAPIRef("tabs.executeScript()")}} und {{WebExtAPIRef("tabs.insertCSS()")}} gibt es auch eine Möglichkeit ohne Host-Berechtigung: die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission). Sie gewährt dieselben Rechte wie `"tabs"` mit `<all_urls>`, allerdings mit zwei Einschränkungen:

- Die Nutzer müssen über die Browser- oder Seitenaktion, das Kontextmenü oder eine Tastenkombination mit der Erweiterung interagieren.
- Die Berechtigung gilt nur für den aktiven Tab.

Der Vorteil: Nutzer erhalten keine Berechtigungswarnung, dass Ihre Erweiterung „auf Ihre Daten für alle Websites zugreifen“ kann. Die Berechtigung `<all_urls>` erlaubt es einer Erweiterung, jederzeit Skripte in jedem Tab auszuführen. Die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) erlaubt dagegen nur eine von Nutzern angeforderte Aktion im aktuellen Tab.

## Mehr über Tabs und ihre Eigenschaften erfahren

Manchmal benötigen Sie eine Liste aller Tabs in allen Browserfenstern. In anderen Fällen möchten Sie nur Tabs finden, die bestimmte Kriterien erfüllen – etwa Tabs, die von einem bestimmten Tab aus geöffnet wurden, oder Seiten einer bestimmten Domain anzeigen. Sobald Sie eine Liste haben, möchten Sie wahrscheinlich mehr über die Eigenschaften dieser Tabs erfahren.

Hier kommt {{WebExtAPIRef("tabs.query()")}} zum Einsatz. Ohne Suchkriterien liefert die Methode alle Tabs. Über das Objekt `queryInfo` können Sie Kriterien festlegen, beispielsweise ob ein Tab aktiv ist oder sich im aktuellen Fenster befindet. Insgesamt stehen 17 Kriterien zur Verfügung. {{WebExtAPIRef("tabs.query()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}}-Objekten mit Informationen zu den Tabs zurück.

Wenn Sie nur Informationen über den aktuellen Tab benötigen, können Sie dessen {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.getCurrent()")}} abrufen. Wenn Sie die ID eines Tabs kennen, können Sie sein {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} abrufen.

### Praxisbeispiel

Sehen wir uns an, wie das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet, um im Popup seiner Symbolleistenschaltfläche eine Liste zum Wechseln zwischen Tabs anzuzeigen.

![Das Popup von tabs-tabs-tabs in Firefox mit hervorgehobenem Bereich zum Wechseln zwischen Tabs](switch_to_tab.png)

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
    > - **`tabs.html` ist in `browser_action` als `default_popup` festgelegt.** Die Datei wird angezeigt, wenn Nutzer auf das Symbol der Erweiterung in der Symbolleiste klicken.
    > - **Die Berechtigungen enthalten tabs.** Das ist für die Tab-Liste erforderlich, da die Erweiterung die Titel der Tabs liest, um sie im Popup anzuzeigen.

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

    Dabei geschieht Folgendes:
    1. Die Menüeinträge werden deklariert.
    2. Ein leeres `div` mit der ID `tabs-list` wird als Container für die Tab-Liste deklariert.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) sehen wir, wie die Tab-Liste erstellt und dem Popup hinzugefügt wird.

#### Das Popup erstellen

Zuerst wird ein Event-Handler hinzugefügt, der `listTabs()` ausführt, sobald `tabs.html` geladen ist:

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

Anschließend erstellen wir die Links für die einzelnen Tabs:

1. Die ersten fünf Einträge aus den {{WebExtAPIRef("tabs.Tab")}}-Objekten durchlaufen.
2. Für jeden Eintrag einen Hyperlink zum Dokumentfragment hinzufügen.
   - Der Linktext wird auf den `title` des Tabs gesetzt oder, falls kein `title` vorhanden ist, auf seine `id`.
   - Die Linkadresse wird anhand der `id` des Tabs festgelegt.

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

Zum Schluss wird das Dokumentfragment in das Element `<div id="tabs-list">` eingefügt:

```js
function listTabs() {
  getCurrentWindowTabs().then((tabs) => {
    // ...
    tabsList.appendChild(currentTabs);
  });
}
```

#### Mit dem aktiven Tab arbeiten

Eine weitere Funktion des Beispiels ist die Info-Option „Alert active tab“. Sie zeigt sämtliche Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts für den aktiven Tab in einem Hinweisfenster an:

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

Dabei findet `callOnActiveTab()` das Objekt des aktiven Tabs, indem die {{WebExtAPIRef("tabs.Tab")}}-Objekte nach dem Eintrag durchlaufen werden, bei dem `active` gesetzt ist:

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

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen tun: Nutzern Funktionen zum Verwalten von Tabs anbieten oder Funktionen Ihrer Erweiterung umsetzen.

Dafür stehen folgende Funktionen zur Verfügung:

- Einen neuen Tab erstellen ({{WebExtAPIRef("tabs.create()")}}).
- Einen Tab duplizieren ({{WebExtAPIRef("tabs.duplicate()")}}).
- Einen Tab entfernen ({{WebExtAPIRef("tabs.remove()")}}).
- Einen Tab verschieben ({{WebExtAPIRef("tabs.move()")}}).
- Die URL eines Tabs aktualisieren und damit zu einer neuen Seite navigieren ({{WebExtAPIRef("tabs.update()")}}).
- Die Seite eines Tabs neu laden ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Die folgenden Funktionen benötigen die ID oder IDs der Tabs, die sie verändern:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Die folgenden Funktionen wirken dagegen auf den aktiven Tab, wenn keine Tab-`id` angegeben wird:
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Praxisbeispiel

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) zeigt alle diese Funktionen außer dem Aktualisieren der URL eines Tabs. Die APIs werden ähnlich verwendet. Deshalb betrachten wir eine der aufwendigeren Implementierungen: die Option „Move active tab to the beginning of the window list“.

Zunächst sehen Sie die Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Für keine dieser Funktionen ist eine Berechtigung erforderlich. Daher gibt es in der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) nichts Besonderes hervorzuheben.
- tabs.html
  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das im Popup angezeigte „Menü“. Es enthält die Option „Move active tab to the beginning of the window list“ und besteht aus mehreren `<a>`-Tags, die durch ein sichtbares Trennelement gruppiert sind. Jeder Menüeintrag erhält eine `id`. Anhand dieser ermittelt `tabs.js`, welcher Menüeintrag ausgewählt wurde.

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

    Anschließend prüfen mehrere `if`-Anweisungen die `id` des angeklickten Eintrags.

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

    ![Beispiel einer console.log-Ausgabe der Funktion zum Verschieben von Tabs in der Firefox-Toolbox-Konsole](console.png)

    Der Code zum Verschieben ruft zunächst `callOnActiveTab()` auf. Diese Funktion ruft wiederum `getCurrentWindowTabs()` auf, um {{WebExtAPIRef("tabs.Tab")}}-Objekte für die Tabs des aktiven Fensters abzurufen. Anschließend werden die Objekte durchlaufen, um das Objekt des aktiven Tabs zu finden und zurückzugeben:

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

Nutzer können Tabs in einem Fenster _anheften_. Angeheftete Tabs stehen am Anfang der Tab-Liste und können nicht verschoben werden. Ein anderer Tab kann daher frühestens an die erste Position nach den angehefteten Tabs verschoben werden. `firstUnpinnedTab()` durchläuft das `tabs`-Objekt, um die Position des ersten nicht angehefteten Tabs zu finden:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Nun liegen alle Informationen zum Verschieben vor: das Objekt des aktiven Tabs, aus dem wir seine `id` entnehmen können, und die Zielposition. Damit können wir den Tab verschieben:

```js
browser.tabs.move([tab.id], { index });
```

Die übrigen Funktionen zum Duplizieren, Neuladen, Erstellen und Entfernen von Tabs sind ähnlich implementiert.

## Die Zoomstufe eines Tabs ändern

Mit den nächsten Funktionen können Sie die Zoomstufe innerhalb eines Tabs abrufen ({{WebExtAPIRef("tabs.getZoom")}}) und festlegen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoomeinstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}). Zum Zeitpunkt der Erstellung dieses Artikels war das Festlegen dieser Einstellungen ({{WebExtAPIRef("tabs.setZoomSettings")}}) in Firefox allerdings nicht verfügbar.

Die Zoomstufe kann zwischen 30 % und 500 % liegen, dargestellt durch Dezimalzahlen von `0.3` bis `5`.

Die Standard-Zoomeinstellungen in Firefox sind:

- **Standard-Zoomstufe:** 100 %.
- **Zoommodus:** automatisch; der Browser verwaltet also die Zoomstufen.
- **Geltungsbereich von Zoomänderungen:** `"per-origin"`. Wenn Sie eine Website erneut besuchen, gilt damit die beim letzten Besuch eingestellte Zoomstufe.

### Praxisbeispiel

Das Beispiel [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) demonstriert drei Zoomfunktionen: Vergrößern, Verkleinern und Zurücksetzen der Zoomstufe. Hier sehen Sie die Funktionen in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Sehen wir uns an, wie das Vergrößern implementiert ist.

- manifest.json
  - : Für keine der Zoomfunktionen sind Berechtigungen erforderlich. Daher gibt es in der Datei [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json) nichts Besonderes hervorzuheben.
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

    Anschließend wird derselbe Listener wie zuvor verwendet, um auf Klicks in `tabs.html` zu reagieren.

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

    Dieser Code ruft mit `callOnActiveTab()` die Informationen zum aktiven Tab ab. Anschließend ermittelt {{WebExtAPIRef("tabs.getZoom")}} dessen aktuellen Zoomfaktor. Die aktuelle Zoomstufe wird mit dem festgelegten Höchstwert (`MAX_ZOOM`) verglichen. Ist der Höchstwert bereits erreicht, wird ein Hinweisfenster angezeigt. Andernfalls wird die Zoomstufe erhöht, auf den Höchstwert begrenzt und anschließend mit {{WebExtAPIRef("tabs.getZoom")}} festgelegt.

## Das CSS eines Tabs ändern

Eine weitere wichtige Funktion der Tabs API ist das Verändern des CSS innerhalb eines Tabs: Sie können CSS hinzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Das ist beispielsweise nützlich, wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout einer Seite ändern möchten.

### Praxisbeispiel

Das Beispiel [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css) verwendet diese Funktionen, um der Webseite im aktiven Tab einen roten Rahmen hinzuzufügen. Hier sehen Sie die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Sehen wir uns die Einrichtung Schritt für Schritt an.

- manifest.json
  - : Die Datei [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert die für die CSS-Funktionen erforderlichen Berechtigungen an. Sie benötigen entweder:
    - die Berechtigung `"tabs"` und eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder
    - die Berechtigung `"activeTab"`.

    Letztere ist meist hilfreicher: Sie erlaubt einer Erweiterung, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn die Aktion über die Browser- oder Seitenaktion, das Kontextmenü oder eine Tastenkombination der Erweiterung ausgelöst wird.

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

    Beachten Sie, dass zusätzlich zu `"activeTab"` auch die Berechtigung `"tabs"` angefordert wird. Diese zusätzliche Berechtigung ist nötig, damit das Skript der Erweiterung auf die URL des Tabs zugreifen kann. Warum das wichtig ist, sehen wir gleich.

    Die weiteren wichtigen Bestandteile der Datei manifest.json sind die Definitionen von:
    - **einem Hintergrundskript**, das ausgeführt wird, sobald die Erweiterung geladen wird.
    - **einer „Seitenaktion“**, die ein Symbol für die Adressleiste des Browsers festlegt.

- background.js
  - : Beim Start setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten. Diese definieren das anzuwendende CSS, Titel für die „Seitenaktion“ und eine Liste von Protokollen, mit denen die Erweiterung funktioniert:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Nach dem ersten Laden ruft die Erweiterung mit {{WebExtAPIRef("tabs.query()")}} eine Liste aller Tabs im aktuellen Browserfenster ab. Anschließend durchläuft sie die Tabs und ruft für jeden `initializePageAction()` auf.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs das Anwenden des CSS erlaubt:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Wenn das Beispiel auf den Tab angewendet werden kann, setzt `initializePageAction()` Symbol und Titel der `pageAction` des Tabs auf die „Aus“-Varianten, bevor die `pageAction` sichtbar gemacht wird:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Danach wartet ein Listener auf `pageAction.onClicked` darauf, dass auf das Symbol der `pageAction` geklickt wird, und ruft dann `toggleCSS` auf.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` liest den Titel der `pageAction` aus und führt die entsprechende Aktion aus:
    - **Bei „Apply CSS“:**
      - Symbol und Titel der `pageAction` werden auf die „Entfernen“-Varianten umgestellt.
      - Das CSS wird mit {{WebExtAPIRef("tabs.insertCSS()")}} angewendet.

    - **Bei „Remove CSS“:**
      - Symbol und Titel der `pageAction` werden auf die „Anwenden“-Varianten umgestellt.
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

    Damit die `pageAction` nach jeder Aktualisierung des Tabs weiterhin gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} bei jeder Aktualisierung `initializePageAction()` auf. So wird geprüft, ob der Tab weiterhin ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Mit geteilten Tab-Ansichten arbeiten

Mit der Tab-Funktion für [geteilte Ansichten](https://support.mozilla.org/en-US/kb/split-view-firefox) können Nutzer zwei Tabs nebeneinander anzeigen.

In der Benutzeroberfläche wird eine geteilte Ansicht als Einheit behandelt. Verschiebt jemand einen Tab darin, wird der andere Tab mitverschoben und die geteilte Ansicht bleibt erhalten. Ihre Erweiterung kann die Bewegung mit {{WebExtAPIRef("tabs.onMoved")}} beobachten. Dasselbe gilt, wenn ein Tab der geteilten Ansicht mit {{WebExtAPIRef("tabs.move")}} verschoben wird. Werden jedoch beide Tabs der geteilten Ansicht für einen Verschiebevorgang angegeben und wird ein Tab zwischen ihnen platziert, wird die geteilte Ansicht geschlossen.

Wenn jemand einen der beiden Tabs schließt, wird die geteilte Ansicht geschlossen und der andere Tab bleibt geöffnet. Ihre Erweiterung kann einen Tab der geteilten Ansicht mit {{WebExtAPIRef("tabs.remove")}} entfernen.

Ob sich ein Tab in einer geteilten Ansicht befindet, kann Ihre Erweiterung über seine Eigenschaft [`splitViewId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab#splitviewid) feststellen. Änderungen an der Zugehörigkeit zu einer geteilten Ansicht lassen sich mit {{WebExtAPIRef("tabs.onUpdated")}} beobachten.

> [!NOTE]
> APIs zum Erstellen und Aufheben geteilter Ansichten, ohne die Tabs zu verschieben oder zu entfernen, werden im Rahmen von [Issue #967](https://github.com/w3c/webextensions/issues/967) der WebExtensions Community Group (WECG) des W3C entwickelt.

## Weitere interessante Möglichkeiten

Einige Funktionen der Tabs API passen nicht in die vorherigen Abschnitte:

- Den sichtbaren Inhalt eines Tabs mit {{WebExtAPIRef("tabs.captureVisibleTab")}} erfassen.
- Die Hauptsprache des Inhalts eines Tabs mit {{WebExtAPIRef("tabs.detectLanguage")}} erkennen. Damit können Sie beispielsweise die Sprache der Benutzeroberfläche Ihrer Erweiterung an die Sprache der Seite anpassen, auf der sie ausgeführt wird.

## Weiterführende Informationen

Wenn Sie mehr über die Tabs API erfahren möchten, lesen Sie:

- [Referenz zur Tabs API](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples), von denen viele die Tabs API verwenden
