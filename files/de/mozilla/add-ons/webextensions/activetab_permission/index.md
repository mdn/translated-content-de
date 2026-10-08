---
title: activeTab-Berechtigung
short-title: activeTab permission
slug: Mozilla/Add-ons/WebExtensions/activeTab_permission
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Die Berechtigung `activeTab` gewährt einer Erweiterung vorübergehend Zugriff auf den Tab, in dem ein Benutzer gerade arbeitet. Sie wird als Reaktion auf eine ausdrückliche [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) erteilt, etwa einen Klick auf die Symbolleistenschaltfläche der Erweiterung. Der Zugriff ist auf diesen Tab beschränkt und besteht, bis der Benutzer zu einer anderen Seite navigiert.

Damit können Erweiterungen den häufigen Anwendungsfall „Etwas mit der aktuellen Seite tun, wenn der Benutzer darum bittet“ umsetzen, ohne weitreichende Berechtigungen zu benötigen. Angenommen, eine Erweiterung soll ein Skript auf der aktuellen Seite ausführen, wenn der Benutzer auf ihre Symbolleistenschaltfläche klickt. Ohne `activeTab` müsste sie die Host-Berechtigung `<all_urls>` anfordern. Diese würde ihr erheblich mehr Möglichkeiten geben als nötig: Sie könnte Skripte in _jedem Tab_ und _jederzeit_ ausführen, statt nur im aktiven Tab und als Reaktion auf eine Benutzeraktion.

Da `activeTab` nur begrenzten Zugriff gewährt, zeigen Browser bei der Installation der Erweiterung keine Berechtigungswarnung an.

## Die activeTab-Berechtigung anfordern

Ihre Erweiterung fordert `activeTab` über den Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) an:

```json
"permissions": ["activeTab"]
```

`activeTab` ist eine [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), keine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).

Sie können `activeTab` auch in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufnehmen und zur Laufzeit mit {{WebExtAPIRef("permissions.request()")}} anfordern. Diese Berechtigung wird ohne Nachfrage beim Benutzer erteilt.

> [!NOTE]
> `activeTab` gewährt Berechtigungen für einen Tab. Allein dadurch erhält die Erweiterung keinen Zugriff auf eine API. Um beispielsweise ein Skript einzufügen, benötigt Ihre Erweiterung die Berechtigung `"scripting"`, damit sie die API {{WebExtAPIRef("scripting")}} verwenden kann.

## Wie activeTab erteilt wird

Der Browser erteilt `activeTab`, wenn der Benutzer mit der Erweiterung interagiert. Solche Interaktionen heißen [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions). Dazu gehört, dass der Benutzer:

- auf die [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [page action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung klickt.
- einen Kontextmenüeintrag der Erweiterung auswählt, wodurch das Ereignis {{WebExtAPIRef("menus.onClicked")}} ausgelöst wird.
- ein von der Erweiterung über die API {{WebExtAPIRef("commands")}} definiertes Tastenkürzel verwendet, wodurch das Ereignis {{WebExtAPIRef("commands.onCommand")}} ausgelöst wird.
- auf einen Vorschlag der Erweiterung in der Adressleiste (Omnibox) klickt, wodurch das Ereignis {{WebExtAPIRef("omnibox.onInputEntered")}} ausgelöst wird (ab Firefox 142).

In der Regel wird `activeTab` für den aktiven Tab erteilt. Es gibt eine Ausnahme: Eine Erweiterung kann mit der API {{WebExtAPIRef("menus")}} einen Menüeintrag erstellen, der erscheint, wenn der Benutzer das Kontextmenü eines Tabs in der Tableiste öffnet. Wählt der Benutzer diesen Eintrag aus, wird `activeTab` für den angeklickten Tab erteilt – auch wenn dieser nicht aktiv ist.

## Welche Möglichkeiten activeTab gewährt

Solange `activeTab` für einen Tab erteilt ist, kann die Erweiterung:

- mit der API {{WebExtAPIRef("scripting")}} JavaScript oder CSS in den Tab einfügen (oder in Manifest V2 mit {{WebExtAPIRef("tabs.executeScript()")}} und {{WebExtAPIRef("tabs.insertCSS()")}}). Siehe [Content Scripts laden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts).
- die geschützten Eigenschaften `url`, `title` und `favIconUrl` des {{WebExtAPIRef("tabs.Tab")}}-Objekts lesen. Andernfalls ist dafür die Berechtigung `"tabs"` oder eine passende Host-Berechtigung erforderlich.
- den Inhalt des Tabs mit {{WebExtAPIRef("tabs.captureVisibleTab()")}} erfassen (ab Firefox 126).
- mit {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}} die Regeln auslesen, die auf den Tab zutreffen, ohne die Berechtigung `"declarativeNetRequestFeedback"` zu benötigen.

## Umfang des Zugriffs

`activeTab` gewährt Skriptzugriff auf die oberste Seite im Tab und auf darin enthaltene Frames desselben Ursprungs. Um Skripte in [ursprungsübergreifenden](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) Frames auszuführen oder deren Formatvorlagen zu ändern, sind zusätzliche [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich.

Die [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) für bestimmte Websites und URI-Schemata gelten auch für `activeTab`. Auf einigen speziellen Seiten können keine Skripte eingefügt werden. Dazu gehören die Leseansicht, die Quelltextansicht, der PDF-Betrachter und andere integrierte Seiten der Browseroberfläche.

## Wann der Zugriff endet

Die Erweiterung kann nur auf den Tab beziehungsweise die Daten zugreifen, die zum Zeitpunkt der Benutzeraktion vorhanden waren. Wenn im Tab zu einer anderen Seite navigiert wird, verliert die Erweiterung die Zugriffsberechtigung. Sie muss ihre Arbeit mit dem Tab daher innerhalb des gewährten Zeitraums abschließen oder die benötigten Daten in diesem Zeitraum erfassen. Benötigt sie später erneut Zugriff, muss der Benutzer die Aktion wiederholen.

Wann genau der Zugriff endet, hängt vom Browser ab. Siehe [Wann der Zugriff widerrufen wird](#wann_der_zugriff_widerrufen_wird).

## Beispiel

Diese Erweiterung fügt ein Skript in die aktuelle Seite ein, wenn der Benutzer auf ihre Symbolleistenschaltfläche klickt. Sie benötigt keine Host-Berechtigungen.

manifest.json:

```json
{
  "manifest_version": 3,
  "name": "Heading highlighter",
  "version": "1.0",
  "permissions": ["activeTab", "scripting"],
  "action": {
    "default_title": "Highlight headings"
  },
  "background": {
    "scripts": ["background.js"]
  }
}
```

background.js:

```js
function highlightHeadings() {
  for (const heading of document.querySelectorAll("h1, h2, h3")) {
    heading.style.backgroundColor = "yellow";
  }
}

browser.action.onClicked.addListener((tab) => {
  // activeTab is granted for `tab` because the user clicked the toolbar button.
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: highlightHeadings,
  });
});
```

Durch denselben Klick werden auch die geschützten Tab-Eigenschaften lesbar. `tab.url` und `tab.title` enthalten daher tatsächliche Werte statt `undefined`.

### Weitere Beispiele

Die folgenden Beispiele für die Verwendung der Berechtigung `activeTab` finden Sie im Repository mit Beispielerweiterungen unter <https://github.com/mdn/webextensions-examples>:

<table>
  <thead>
    <tr>
      <th>Beispiel</th>
      <th>Verwendung von <code>activeTab</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/apply-css/"
          >apply-css</a
        >
      </td>
      <td>
        Ein Klick auf eine page action gewährt Zugriff, um CSS im aktiven
        Tab einzufügen oder zu entfernen ({{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}}).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/beastify/"
          >beastify</a
        >
      </td>
      <td>
        Ein Klick auf eine browser action gewährt Zugriff für
        {{WebExtAPIRef("scripting.executeScript()")}} und {{WebExtAPIRef("scripting.insertCSS()")}}
        im aktiven Tab.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/tree/main/context-menu-copy-link-with-types/"
          >context-menu-copy-link-with-types</a
        >
      </td>
      <td>
        Ein Klick auf den Kontextmenüeintrag eines Links gewährt Zugriff auf die Seite,
        damit der Link in die Zwischenablage kopiert werden kann.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/history-deleter/"
          >history-deleter</a
        >
      </td>
      <td>
        Liest die URL des aktiven Tabs, um die Domain zu bestimmen, deren Verlauf
        gelöscht werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/menu-demo/"
          >menu-demo</a
        >
      </td>
      <td>Ein Klick auf einen Menüeintrag gewährt Zugriff auf den aktiven Tab für die Demo zur Menümanipulation.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/tree/main/menu-remove-element/"
          >menu-remove-element</a
        >
      </td>
      <td>
        Ein Klick auf einen Menüeintrag gewährt Zugriff auf die Seite, um ein Skript
        einzufügen, das das Element unter dem Mauszeiger entfernt.
      </td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

Firefox, Safari und Chromium-basierte Browser, darunter Chrome und Edge, unterstützen `activeTab`. Es gibt jedoch Unterschiede darin, wann die Berechtigung erteilt wird, welche Möglichkeiten sie bietet und wann sie widerrufen wird.

### Aktionen, die activeTab gewähren

| Benutzeraktion                                            | Chrome        | Firefox        | Safari                                                                                  |
| --------------------------------------------------------- | ------------- | -------------- | --------------------------------------------------------------------------------------- |
| Klick auf die Symbolleistenschaltfläche der Erweiterung   | Ja            | Ja             | Ja                                                                                      |
| Auswahl eines Kontextmenüeintrags der Erweiterung         | Ja            | Ja             | Ja                                                                                      |
| Verwendung eines Tastenkürzels der Erweiterung            | Ja            | Ab Firefox 63  | Ja                                                                                      |
| Annahme eines Vorschlags in der Adressleiste (Omnibox)    | Ja            | Ab Firefox 142 | Nein, Safari unterstützt die API {{WebExtAPIRef("omnibox")}} nicht                      |
| Auswahl eines Menüeintrags für einen Tab in der Tableiste | Ab Chrome 150 | Ab Firefox 63  | Nein, Safari unterstützt den Wert `tab` von {{WebExtAPIRef("menus.ContextType")}} nicht |

### Gewährte Möglichkeiten

| Möglichkeit                                                                                                                      | Chrome                                         | Firefox                                                 | Safari    |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------- | --------- |
| Programmatisches Einfügen von Skripten und Stylesheets                                                                           | Ja                                             | Ja                                                      | Ja        |
| Zugriff auf sensible Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} (`url`, `title`, `favIconUrl`)                               | Ja                                             | Ja                                                      | Ja        |
| {{WebExtAPIRef("tabs.captureVisibleTab()")}}                                                                                     | Ja                                             | Ab Firefox 126                                          | Ja        |
| Abfangen der Netzwerkanfragen des Tabs mit den APIs {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}} | Ja, für den Ursprung des Haupt-Frames des Tabs | Nein ([Firefox-Bug 1617479](https://bugzil.la/1617479)) | Unbekannt |

Auch der Zugriff, den Browser mit `activeTab` gewähren, unterscheidet sich:

- Firefox und Safari gewähren nur Zugriff auf den aktiven Tab.
- Chrome gewährt die aus der URL des Tabs abgeleiteten Host-Berechtigungen.

Dadurch kann Chrome beispielsweise mehr Zugriff gewähren als Firefox:

- In Chrome kann ein Skript in einem anderen Tab desselben Ursprungs ausgeführt werden, in Firefox nicht.
- Ein Erweiterungsskript (etwa ein Hintergrundskript oder das Skript eines Popups) kann in Chrome eine ursprungsübergreifende Anfrage an die URL des Tabs senden, in Firefox nicht.
- Die API {{WebExtAPIRef("cookies")}} benötigt Host-Berechtigungen, um auf Cookies bestimmter Domains zuzugreifen. Chrome erlaubt dies mit `activeTab`, Firefox nicht.

Diese Liste ist nicht vollständig.

### Wann der Zugriff widerrufen wird

In allen Browsern wird der Zugriff widerrufen, wenn der Tab geschlossen wird. Navigationen innerhalb desselben Dokuments – etwa eine Änderung des Fragments (Hashs) oder ein Aufruf von [`History.pushState()`](/de/docs/Web/API/History/pushState) – widerrufen ihn dagegen nicht: Das Dokument und sein Ursprung bleiben unverändert, sodass der Zugriff erhalten bleibt.

Bei Navigationen, die ein neues Dokument laden, unterscheidet sich das Verhalten:

- **Chrome**: Der Zugriff bleibt bestehen, solange der Tab denselben Ursprung beibehält, auch nach einem erneuten Laden. Er wird widerrufen, wenn im Tab zu einem anderen Ursprung navigiert wird.
- **Safari**: Der Zugriff ist an das Dokument gebunden, das sich zum Zeitpunkt der Benutzeraktion im Tab befand. Er wird widerrufen, wenn im Tab zu einer anderen URL navigiert wird.
- **Firefox**: Der Zugriff ist an das Dokument gebunden, das sich zum Zeitpunkt der Benutzeraktion im Tab befand. Jede Navigation, die zu einem neuen Dokument führt, beendet den Zugriff; der Benutzer muss die Aktion wiederholen. Wird das Dokument aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} wiederhergestellt, erhält es den Zugriff zurück.

### Weitere Unterschiede

- **Berechtigungsabfragen**: Firefox und Chrome erteilen einer Erweiterung die angeforderten Host-Berechtigungen bei der Installation. Mit `activeTab` lässt sich daher eine Warnung bei der Installation vermeiden. Safari setzt Host-Berechtigungen dagegen standardmäßig auf „Nachfragen“ und fragt den Benutzer beim ersten Zugriffsversuch auf eine Website, ob er **Für einen Tag erlauben** oder **Immer erlauben** möchte. Mit `activeTab` entfällt diese Abfrage, da Safari die Interaktion des Benutzers mit der Erweiterung als Erteilung der Berechtigung wertet.
- **Manifest V2 und V3**: In Manifest V3 funktioniert `activeTab` in den Browsern auf dieselbe Weise. In Firefox gewährt `activeTab` unter Manifest V2 zusätzlich {{WebExtAPIRef("scripting.executeScript()")}} Zugriff auf ein iframe mit einem anderen Ursprung (siehe [Bug 1839200](https://bugzil.la/1839200#c3)). Dieses Verhalten wurde in MV3 entfernt.

## Siehe auch

- Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) im Extension Workshop
- [Die „activeTab“-Berechtigung](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) in der Dokumentation zu Chrome-Erweiterungen
