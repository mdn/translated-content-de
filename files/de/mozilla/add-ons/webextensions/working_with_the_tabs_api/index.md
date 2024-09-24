---
title: Arbeiten mit der Tabs-API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Tabs ermöglichen es einem Benutzer, mehrere Webseiten in seinem Browserfenster zu öffnen und dann zwischen diesen Webseiten zu wechseln. Mit der Tabs-API können Sie mit diesen Tabs arbeiten und sie manipulieren, um Hilfsprogramme zu erstellen, die den Benutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder um die Funktionen Ihrer Erweiterung bereitzustellen.

In diesem How-to-Artikel werden wir uns ansehen:

- Berechtigungen, die zur Nutzung der Tabs-API erforderlich sind.
- Mehr über Tabs und deren Eigenschaften erfahren mittels {{WebExtAPIRef("tabs.query")}}.
- Erstellen, duplizieren, bewegen, aktualisieren, neu laden und entfernen von Tabs.
- Manipulation des Zoomfaktors eines Tabs.
- Manipulation des CSS eines Tabs.

Wir schließen dann mit einigen anderen, diversen Funktionen ab, die die API bietet.

> [!NOTE]
> Einige Funktionen der Tab-API werden an anderer Stelle behandelt. Dies sind die Methoden, mit denen Sie Tab-Inhalte mit Skripten manipulieren können ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}}, und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen über diese Methoden wünschen, lesen Sie den Artikel Konzepte [Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) und den How-to-Leitfaden [Eine Webseite ändern](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

## Berechtigungen und die Tabs-API

Für die Mehrzahl der Funktionen der Tabs-API benötigen Sie keine Berechtigungen; es gibt jedoch einige Ausnahmen:

- Die Berechtigung `"tabs"` ist notwendig, um auf die Eigenschaften `Tab.url`, `Tab.title` und `Tab.favIconUrl` des Tab-Objekts zuzugreifen. In Firefox benötigen Sie `"tabs"` ebenfalls, um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) nach URL durchzuführen.
- [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) ist notwendig für {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}.

So könnte Ihre Anfrage für die Berechtigung `"tabs"` in der manifest.json-Datei Ihrer Erweiterung aussehen:

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage gibt Ihnen die Möglichkeit, alle Funktionen der Tabs-API auf allen Websites zu nutzen, die Ihr Nutzer besucht. Es gibt auch einen alternativen Ansatz zum Anfordern von Berechtigungen zur Nutzung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}}, bei dem Sie keine Host-Berechtigung benötigen, in Form von [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission). Diese Berechtigung bietet dieselben Rechte wie `"tabs"` mit `<all_urls>`, allerdings mit zwei Einschränkungen:

- Der Benutzer muss über die Browser- oder Seitenaktion der Erweiterung, das Kontextmenü oder eine Tastenkombination interagieren.
- Sie gewährt nur Berechtigung innerhalb des aktiven Tabs.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigungswarnung erhält, dass Ihre Erweiterung "Zugriff auf Ihre Daten für alle Websites" hat. Dies liegt daran, dass die Berechtigung `<all_urls>` einer Erweiterung die Möglichkeit gibt, Skripte in beliebigen Tabs auszuführen, wann immer sie möchte, während [`"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine benutzergeforderte Aktion im aktuellen Tab auszuführen.

## Mehr über Tabs und deren Eigenschaften herausfinden

Es wird Gelegenheiten geben, bei denen Sie eine Liste aller Tabs in allen Browserfenstern erhalten möchten. Andere Male möchten Sie eventuell eine Teilmenge von Tabs finden, die bestimmten Kriterien entspricht, etwa diejenigen, die von einem spezifischen Tab geöffnet wurden oder Seiten eines bestimmten Domain anzeigen. Und sobald Sie Ihre Liste von Tabs haben, möchten Sie wahrscheinlich mehr über deren Eigenschaften erfahren.

Hier kommt {{WebExtAPIRef("tabs.query()")}} ins Spiel. Alleine genutzt, um alle Tabs zu erhalten, oder mit dem `queryInfo`-Objekt zur Spezifizierung von Abfragekriterien, wie ob der Tab aktiv ist, im aktuellen Fenster oder eines oder mehrere von 17 Kriterien—{{WebExtAPIRef("tabs.query()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekten zurück, die Informationen über die Tabs enthalten.

Wenn Sie nur Informationen über den aktuellen Tab benötigen, können Sie ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für diesen Tab mit {{WebExtAPIRef("tabs.getCurrent()")}} bekommen. Wenn Sie die ID eines Tabs haben, können Sie dessen {{WebExtAPIRef("tabs.Tab")}}-Objekt mit {{WebExtAPIRef("tabs.get()")}} erhalten.

### Wie man es macht: Beispiel

Um zu sehen, wie {{WebExtAPIRef("tabs.query()")}} und {{WebExtAPIRef("tabs.Tab")}} verwendet werden, schauen wir uns an, wie das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs)-Beispiel die Liste der "Wechseln zu Tabs" zu seinem Toolbar-Schaltflächen-Popup hinzufügt.

![Das Tabs-Toolbar-Menü zeigt den Bereich zum Wechseln zu einem Tab](switch_to_tab.png)

- manifest.json

  - : Hier ist das [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json):

    ```json
    {
      "browser_action": {
        "default_title": "Tabs, tabs, tabs",
        "default_popup": "tabs.html"
      },
      "description": "Eine Liste von Methoden, die Sie auf einem Tab ausführen können.",
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
    > - **Berechtigungen umfassen Tabs.** Dies ist erforderlich, um die Tab-Liste zu unterstützen, da die Erweiterung den Titel der Tabs liest, um sie im Popup anzuzeigen.

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

    Dieser Code führt Folgendes aus:

    1. Die Menüpunkte werden deklariert.
    2. Ein leerer `div` mit der ID `tabs-list` wird deklariert, um die Liste der Tabs zu enthalten.
    3. `tabs.js` wird aufgerufen.

- tabs.js
  - : In [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js), sehen wir, wie die Liste der Tabs aufgebaut und dem Popup hinzugefügt wird.

#### Erstellung des Popups

Zunächst wird ein Event-Handler hinzugefügt, der `listTabs()` ausführt, wenn `tabs.html` geladen wird:

```js
document.addEventListener("DOMContentLoaded", listTabs);
```

Das Erste, was `listTabs()` macht, ist, `getCurrentWindowTabs()` aufzurufen. An dieser Stelle wird {{WebExtAPIRef("tabs.query()")}} verwendet, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt für die Tabs im aktuellen Fenster zu erhalten:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({ currentWindow: true });
}
```

Jetzt ist `listTabs()` bereit, den Inhalt für das Popup zu erstellen.

Zunächst:

1. Erhalten des `<div id="tabs-list">`-Elements.
2. Erstellen eines Dokumentfragments (in das die Liste aufgebaut wird).
3. Setzen von Zählern.
4. Leeren des Inhalts des `<div id="tabs-list">`-Elements.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    const tabsList = document.getElementById('tabs-list');
    const currentTabs = document.createDocumentFragment();
    const limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Als nächstes werden die Links für jeden Tab erstellt:

1. Durchlaufen der ersten 5 Elemente des {{WebExtAPIRef("tabs.Tab")}}-Objekts.
2. Für jedes Element wird ein Hyperlink zum Dokumentfragment hinzugefügt.

   - Die Beschriftung des Links—also der Text—wird mit dem `title` des Tabs gesetzt (oder der `id`, falls kein `title` vorhanden ist).
   - Die Adresse des Links wird mit der `id` des Tabs gesetzt.

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

Zum Schluss wird das Dokumentfragment in das `<div id="tabs-list">`-Element geschrieben:

```js
    tabsList.appendChild(currentTabs);
  });
}
```

#### Arbeiten mit dem aktiven Tab

Ein weiteres verwandtes Beispielmerkmal ist die Info-Option "Aktiven Tab alarmieren", die alle {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaften des aktiven Tabs in einem Alarm ausgibt:

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

Wo `callOnActiveTab()` das aktive Tab-Objekt findet, indem es durch die {{WebExtAPIRef("tabs.Tab")}}-Objekte schlingt, um das Element mit aktiver Einstellung zu suchen:

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

## Erstellen, duplizieren, bewegen, aktualisieren, neu laden und entfernen von Tabs

Nachdem Sie Informationen über die Tabs gesammelt haben, möchten Sie wahrscheinlich etwas mit ihnen tun—entweder um den Benutzern Funktionen zur Manipulation und Verwaltung von Tabs zu bieten oder um Funktionalitäten in Ihrer Erweiterung zu implementieren.

Folgende Funktionen stehen zur Verfügung:

- einen neuen Tab erstellen ({{WebExtAPIRef("tabs.create()")}}).
- einen Tab duplizieren ({{WebExtAPIRef("tabs.duplicate()")}}).
- einen Tab entfernen ({{WebExtAPIRef("tabs.remove()")}}).
- einen Tab bewegen ({{WebExtAPIRef("tabs.move()")}}).
- die URL des Tabs aktualisieren—effektiv auf eine neue Seite gehen—({{WebExtAPIRef("tabs.update()")}}).
- die Seite des Tabs neu laden ({{WebExtAPIRef("tabs.reload()")}}).

> [!NOTE]
> Diese Funktionen erfordern alle die ID (oder IDs) des Tabs, den sie manipulieren:
>
> - {{WebExtAPIRef("tabs.duplicate()")}}
> - {{WebExtAPIRef("tabs.remove()")}}
> - {{WebExtAPIRef("tabs.move()")}}
>
> Während die folgenden Funktionen auf dem aktiven Tab wirken, falls keine Tab-`id` bereitgestellt wird:
>
> - {{WebExtAPIRef("tabs.update()")}}
> - {{WebExtAPIRef("tabs.reload()")}}

### Beispielanwendung

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel implementiert alle diese Funktionen außer der Aktualisierung der URL eines Tabs. Die Weise, wie diese APIs verwendet werden, ist ähnlich, daher schauen wir uns eine der komplexeren Implementierungen an, die Option "Aktiven Tab an den Anfang der Fensterliste verschieben".

Zuerst jedoch hier eine Demonstration der Funktion in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

- manifest.json
  - : Keiner der Funktionen erfordert eine Berechtigung, um zu funktionieren, daher gibt es keine besonderen Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json)-Datei.
- tabs.html

  - : [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) definiert das "Menü", das im Popup angezeigt wird, welches die Option "Aktiven Tab an den Anfang der Fensterliste verschieben" umfasst, mit einer Reihe von `<a>`-Tags, die durch einen visuellen Separator gruppiert sind. Jeder Menüpunkt erhält eine `id`, die in `tabs.js` verwendet wird, um zu bestimmen, welcher Menüpunkt angefordert wird.

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

  - : Um das in `tabs.html` definierte "Menü" zu implementieren, enthält [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) einen Zuhörer für Klicks in `tabs.html`:

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

    Eine Reihe von `if`-Anweisungen versucht dann, die `id` des angeklickten Elements zuzuordnen.

    Dieser Codeausschnitt ist für die Option "Aktiven Tab an den Anfang der Fensterliste verschieben":

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

    Bemerkenswert ist die Verwendung von `console.log()`. Damit können Sie Informationen an die [Fehlersuche](https://extensionworkshop.com/documentation/develop/debugging/)-Konsole ausgeben, was bei der Lösung von Problemen während der Entwicklung nützlich sein kann.

    ![Beispiel der console.log-Ausgabe, von der Verschiebungsfunktion der Tabs, in der Debugging-Konsole](console.png)

    Der Verschiebungscode ruft zuerst `callOnActiveTab()` auf, welches wiederum `getCurrentWindowTabs()` aufruft, um ein {{WebExtAPIRef("tabs.Tab")}}-Objekt zu erhalten, das die Tabs des aktiven Fensters enthält. Es durchläuft dann das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

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

#### Pinned Tabs

Ein Merkmal von Tabs ist, dass der Benutzer Tabs in einem Fenster _anheften_ kann. Angeheftete Tabs werden an den Anfang der Tab-Liste gesetzt und können nicht bewegt werden. Das heißt, dass die früheste Position, zu der ein Tab verschoben werden kann, die erste Position nach allen angehefteten Tabs ist. Daher wird `firstUnpinnedTab()` aufgerufen, um die Position des ersten nicht angehefteten Tabs zu finden, indem das Objekt `tabs` durchlaufen wird:

```js
function firstUnpinnedTab(tabs) {
  for (const tab of tabs) {
    if (!tab.pinned) {
      return tab.index;
    }
  }
}
```

Wir haben jetzt alles Nötige, um den Tab zu verschieben: das aktive Tab-Objekt, aus dem wir die Tab-`id` erhalten können, und die Position, zu der der Tab verschoben werden soll. Also können wir die Verschiebung implementieren:

```js
browser.tabs.move([tab.id], { index });
```

Die verbleibenden Funktionen zur Duplizierung, Neuladung, Erstellung und Entfernung von Tabs werden ähnlich implementiert.

## Manipulation des Zoomfaktors eines Tabs

Die nächste Gruppe von Funktionen ermöglicht es Ihnen, den Zoomfaktor innerhalb eines Tabs zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}). Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}), aber zur Zeit des Schreibens war die Möglichkeit zur Einstellung ({{WebExtAPIRef("tabs.setZoomSettings")}}) solcher Einstellungen in Firefox nicht verfügbar.

Der Zoomfaktor kann zwischen 30% und 500% liegen (dargestellt als Dezimalzahlen `0.3` bis `5`).

In Firefox sind die Standardeinstellungen für den Zoom:

- **Standard-Zoomfaktor:** 100%.
- **Zoom-Modus:** automatisch (der Browser verwaltet, wie Zoom-Stufen gesetzt werden).
- **Geltungsbereich von Zoom-Änderungen:** `"per-origin"`, das bedeutet, wenn Sie eine Seite erneut besuchen, wird die Zoom-Stufe übernommen, die bei Ihrem letzten Besuch eingestellt war.

### Beispielanwendung

Das [tabs-tabs-tabs](https://github.com/mdn/webextensions-examples/tree/main/tabs-tabs-tabs) Beispiel enthält drei Demonstrationen der Zoom-Funktion: vergrößern, verkleinern und Zoom zurücksetzen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie die Vergrößerung implementiert ist.

- manifest.json
  - : Keine der Zoom-Funktionen erfordert Berechtigungen, also gibt es keine speziellen Merkmale in der [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/manifest.json), die hervorgehoben werden müssen.
- tabs.html
  - : Wir haben bereits besprochen, wie das [`tabs.html`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.html) die Optionen für diese Erweiterung definiert, nichts Neues oder Einzigartiges wird gemacht, um die Zoom-Optionen zu bieten.
- tabs.js

  - : [`tabs.js`](https://github.com/mdn/webextensions-examples/blob/main/tabs-tabs-tabs/tabs.js) beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

    ```js
    const ZOOM_INCREMENT = 0.2;
    const MAX_ZOOM = 5;
    const MIN_ZOOM = 0.3;
    const DEFAULT_ZOOM = 1;
    ```

    Es verwendet dann denselben Zuhörer, den wir bereits besprochen haben, um auf Klicks in `tabs.html` reagieren zu können.

    Für die Zoom-Funktion läuft dieses:

    ```js
      else if (e.target.id === "tabs-add-zoom") {
        callOnActiveTab((tab) => {
          browser.tabs.getZoom(tab.id).then((zoomFactor) => {
            //der maximale zoomFactor ist 5, er kann nicht höher werden
            if (zoomFactor >= MAX_ZOOM) {
              alert("Tab zoom factor is already at max!");
            } else {
              let newZoomFactor = zoomFactor + ZOOM_INCREMENT;
              //wenn newZoomFactor auf höher als der maximal erlaubte eingestellt wird
              //wird sich nichts ändern und es wird nie gewarnt, dass das Maximum erreicht ist
              newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
              browser.tabs.setZoom(tab.id, newZoomFactor);
            }
          });
        });
      }
    ```

    Dieser Code verwendet `callOnActiveTab()`, um die Details des aktiven Tabs zu erhalten, dann {{WebExtAPIRef("tabs.getZoom")}}, um den aktuellen Zoomfaktor des Tabs zu erhalten. Der aktuelle Zoom wird mit dem definierten Maximum (`MAX_ZOOM`) verglichen und es wird eine Warnung ausgegeben, wenn der Tab bereits am maximalen Zoom ist. Andernfalls wird die Zoomstufe erhöht, jedoch auf den maximalen Zoom begrenzt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}} gesetzt.

## Manipulation des CSS eines Tabs

Eine weitere bedeutende Fähigkeit, die die Tabs API bietet, ist die Möglichkeit, das CSS innerhalb eines Tabs zu manipulieren—neues CSS zu einem Tab hinzuzufügen ({{WebExtAPIRef("tabs.insertCSS()")}}) oder CSS von einem Tab zu entfernen ({{WebExtAPIRef("tabs.removeCSS()")}}).

Dies kann nützlich sein, zum Beispiel wenn Sie bestimmte Seitenelemente hervorheben oder das Standardlayout der Seite ändern möchten.

### Beispielanwendung

Das [apply-css](https://github.com/mdn/webextensions-examples/tree/main/apply-css)-Beispiel verwendet diese Funktionen, um dem Webpage des aktiven Tabs einen roten Rand hinzuzufügen. Hier ist die Funktion in Aktion:

{{EmbedYouTube("bcK-GT2Dyhs")}}

Sehen wir uns an, wie es eingerichtet ist.

- manifest.json

  - : Die [`manifest.json`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/manifest.json) fordert Berechtigungen an, die zur Verwendung der CSS-Funktionen erforderlich sind. Sie benötigen entweder:

    - Die Berechtigung `"tabs"` und eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions); oder,
    - Die Berechtigung `"activeTab"`.

    Letzteres ist am nützlichsten, da es einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}} im aktiven Tab zu verwenden, wenn sie von der Browser- oder Seitenaktion der Erweiterung, dem Kontextmenü oder einer Abkürzung gestartet wird.

    ```json
    {
      "description": "Fügt eine Seitenaktion hinzu, um das Hinzufügen von CSS zu Seiten zu steuern.",

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

    Sie werden feststellen, dass die Berechtigung `"tabs"` zusätzlich zu `"activeTab"` angefordert wird. Diese zusätzliche Berechtigung ist nötig, um dem Skript der Erweiterung Zugriff auf die URL des Tabs zu ermöglichen, deren Wichtigkeit wir gleich sehen werden.

    Die anderen Haupteigenschaften in der manifest.json-Datei sind die Definition von:

    - **einem Hintergrundskript**, das beginnt zu laufen, sobald die Erweiterung geladen wird.
    - **einer "Seitenaktion"**, die ein Symbol definiert, das in die Adresszeile des Browsers hinzugefügt wird.

- background.js

  - : Beim Starten setzt [`background.js`](https://github.com/mdn/webextensions-examples/blob/main/apply-css/background.js) einige Konstanten, um das anzuwendende CSS, Titel für die "Seitenaktion" und eine Liste der Protokolle, in denen die Erweiterung arbeiten wird, zu definieren:

    ```js
    const CSS = "body { border: 20px solid red; }";
    const TITLE_APPLY = "Apply CSS";
    const TITLE_REMOVE = "Remove CSS";
    const APPLICABLE_PROTOCOLS = ["http:", "https:"];
    ```

    Wenn die Erweiterung zuerst geladen wird, nutzt sie {{WebExtAPIRef("tabs.query()")}}, um eine Liste alle Tabs im aktuellen Browserfenster zu erhalten. Sie rotiert dann durch die Tabs und ruft `initializePageAction()` auf.

    ```js
    browser.tabs.query({}).then((tabs) => {
      for (const tab of tabs) {
        initializePageAction(tab);
      }
    });
    ```

    `initializePageAction` verwendet `protocolIsApplicable()`, um festzustellen, ob die URL des aktiven Tabs eine ist, auf die das CSS angewandt werden kann:

    ```js
    function protocolIsApplicable(url) {
      const anchor = document.createElement("a");
      anchor.href = url;
      return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
    }
    ```

    Danach, wenn das Beispiel auf den Tab einwirken kann, setzt `initializePageAction()` das `pageAction`- (Navigationsleiste) Icon und den Titel des Tabs ein, um die "Aus"-Versionen zu verwenden, bevor es die `pageAction` sichtbar macht:

    ```js
    function initializePageAction(tab) {
      if (protocolIsApplicable(tab.url)) {
        browser.pageAction.setIcon({ tabId: tab.id, path: "icons/off.svg" });
        browser.pageAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
        browser.pageAction.show(tab.id);
      }
    }
    ```

    Als nächstes wartet ein Listener auf `pageAction.onClicked` darauf, dass das `pageAction`-Symbol angeklickt wird, und ruft `toggleCSS` auf, wenn es dies ist.

    ```js
    browser.pageAction.onClicked.addListener(toggleCSS);
    ```

    `toggleCSS()` erhält den Titel der `pageAction` und führt dann die beschriebene Aktion durch:

    - **Für "Apply CSS":**

      - Wechselt das `pageAction`-Icon und den Titel zu den "Entfernen"-Versionen.
      - Wendet das CSS an mit {{WebExtAPIRef("tabs.insertCSS()")}}.

    - **Für "Remove CSS":**

      - Wechselt das `pageAction`-Icon und den Titel zu den "Anwenden"-Versionen.
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

    Schließlich, um sicherzustellen, dass die `pageAction` nach jedem Update des Tabs gültig ist, ruft ein Listener auf {{WebExtAPIRef("tabs.onUpdated")}} `initializePageAction()` jedes Mal, wenn der Tab aktualisiert wird, auf, um zu prüfen, dass der Tab immer noch ein Protokoll verwendet, auf das das CSS angewendet werden kann.

    ```js
    browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
      initializePageAction(tab);
    });
    ```

## Einige andere interessante Fähigkeiten

Es gibt ein paar andere Merkmale der Tabs API, die nicht in eine der vorhergehenden Abschnitte passen:

- Erfassen des sichtbaren Tab-Inhalts mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen der primären Sprache des Inhalts in einem Tab unter Verwendung von {{WebExtAPIRef("tabs.detectLanguage")}}. Dies könnte verwendet werden, um beispielsweise die Sprache in der Benutzeroberfläche Ihrer Erweiterung mit der der Seite, auf der sie läuft, abzugleichen.

## Mehr erfahren

Wenn Sie mehr über die Tabs-API erfahren möchten, schauen Sie sich an:

- [Tabs API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions/Examples) (viele verwenden die Tabs-API)
