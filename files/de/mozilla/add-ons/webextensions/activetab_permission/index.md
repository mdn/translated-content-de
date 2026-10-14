---
title: activeTab-Berechtigung
short-title: activeTab permission
slug: Mozilla/Add-ons/WebExtensions/activeTab_permission
l10n:
  sourceCommit: 8adfa9f21be15f90b5ee73dbfb9bc441038ac55d
---

Die Berechtigung `activeTab` gewährt einer Erweiterung vorübergehend Zugriff auf den Tab, in dem ein Benutzer gerade arbeitet. Sie wird als Reaktion auf eine ausdrückliche [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) erteilt, etwa einen Klick auf die Symbolleistenschaltfläche der Erweiterung. Der Zugriff ist auf diesen Tab beschränkt und besteht, bis der Benutzer zu einer anderen Seite navigiert.

Damit können Erweiterungen die häufige Anforderung „etwas mit der aktuellen Seite tun, wenn der Benutzer darum bittet“ erfüllen, ohne weitreichende Berechtigungen zu benötigen. Eine Erweiterung könnte beispielsweise ein Skript auf der aktuellen Seite ausführen wollen, wenn der Benutzer auf ihre Symbolleistenschaltfläche klickt. Ohne `activeTab` müsste sie die Host-Berechtigung `<all_urls>` anfordern. Diese würde ihr wesentlich mehr Möglichkeiten geben als nötig: Sie könnte Skripte in _jedem Tab_ und _jederzeit_ ausführen, statt nur im betreffenden Tab und als Reaktion auf eine Benutzeraktion.

Da `activeTab` nur begrenzten Zugriff gewährt, zeigen Browser bei der Installation der Erweiterung keine Berechtigungswarnung an.

## Die activeTab-Berechtigung anfordern

Ihre Erweiterung fordert `activeTab` über den Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) an:

```json
"permissions": ["activeTab"]
```

`activeTab` ist eine [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), keine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).

Sie können `activeTab` auch in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufnehmen und zur Laufzeit mit {{WebExtAPIRef("permissions.request()")}} anfordern. Diese Berechtigung wird ohne Nachfrage beim Benutzer erteilt.

> [!NOTE]
> `activeTab` gewährt Berechtigungen für einen Tab. Es gewährt für sich genommen keinen Zugriff auf eine API. Um beispielsweise ein Skript einzufügen, benötigt Ihre Erweiterung die Berechtigung `"scripting"`, damit sie die {{WebExtAPIRef("scripting")}}-API verwenden kann.

## Wie activeTab erteilt wird

Der Browser erteilt `activeTab`, wenn der Benutzer mit der Erweiterung interagiert. Diese Interaktionen werden als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bezeichnet. Dazu gehört, dass der Benutzer:

- auf die [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung klickt.
- einen Kontextmenüeintrag der Erweiterung auswählt und dadurch das Ereignis {{WebExtAPIRef("menus.onClicked")}} auslöst.
- eine von der Erweiterung mit der {{WebExtAPIRef("commands")}}-API definierte Tastenkombination verwendet und dadurch das Ereignis {{WebExtAPIRef("commands.onCommand")}} auslöst.
- auf einen Vorschlag der Erweiterung in der Adressleiste (Omnibox) klickt und dadurch das Ereignis {{WebExtAPIRef("omnibox.onInputEntered")}} auslöst (ab Firefox 142).

Normalerweise wird `activeTab` für den aktiven Tab erteilt. Es gibt eine Ausnahme: Eine Erweiterung kann mit der {{WebExtAPIRef("menus")}}-API einen Menüeintrag erstellen, der erscheint, wenn der Benutzer das Kontextmenü eines Tabs in der Tableiste öffnet. Wählt der Benutzer diesen Eintrag aus, wird `activeTab` für den angeklickten Tab erteilt, auch wenn dieser nicht der aktive Tab ist.

## Was activeTab ermöglicht

Solange `activeTab` für einen Tab erteilt ist, kann die Erweiterung:

- Mit der {{WebExtAPIRef("scripting")}}-API JavaScript oder CSS in den Tab einfügen (oder mit {{WebExtAPIRef("tabs.executeScript()")}} und {{WebExtAPIRef("tabs.insertCSS()")}} in Manifest V2). Siehe [Content Scripts laden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts).
- Die geschützten Eigenschaften `url`, `title` und `favIconUrl` des {{WebExtAPIRef("tabs.Tab")}}-Objekts des Tabs lesen. Andernfalls sind dafür die Berechtigung `"tabs"` oder eine passende Host-Berechtigung erforderlich.
- Den Inhalt des Tabs mit {{WebExtAPIRef("tabs.captureVisibleTab()")}} erfassen (ab Firefox 126).
- Mit {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}} die Regeln lesen, die auf den Tab zutreffen, ohne die Berechtigung `"declarativeNetRequestFeedback"` zu benötigen.

## Umfang des Zugriffs

`activeTab` gewährt Skriptzugriff auf die Seite auf oberster Ebene im Tab und auf Frames innerhalb dieser Seite, die denselben Ursprung haben. Um Skripte in Frames mit [anderem Ursprung](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) auszuführen oder deren Stile zu ändern, sind zusätzliche [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) erforderlich.

Die [Einschränkungen und Begrenzungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations) für bestimmte Websites und URI-Schemata gelten auch für `activeTab`. Einige spezielle Seiten erlauben das Einfügen von Skripten nicht, darunter die Leseansicht, die Quelltextansicht, der PDF-Betrachter und andere integrierte Seiten der Browseroberfläche.

## Wann der Zugriff endet

Die Erweiterung kann nur auf den Tab beziehungsweise die Daten zugreifen, die zum Zeitpunkt der Benutzerinteraktion vorhanden waren. Navigiert der Tab zu einer anderen Seite, verliert die Erweiterung die Zugriffsberechtigung. Sie muss ihre Arbeit mit dem Tab daher innerhalb des gewährten Zeitraums abschließen oder die benötigten Daten in dieser Zeit erfassen. Benötigt sie erneut Zugriff, muss der Benutzer die Aktion wiederholen.

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

Die folgenden Beispiele aus dem Repository für Beispielerweiterungen unter <https://github.com/mdn/webextensions-examples> verwenden die Berechtigung `activeTab`:

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
        Ein Klick auf eine Page Action gewährt Zugriff, um CSS im aktiven Tab
        einzufügen oder zu entfernen ({{WebExtAPIRef("tabs.insertCSS()")}} und {{WebExtAPIRef("tabs.removeCSS()")}}).
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/beastify/"
          >beastify</a
        >
      </td>
      <td>
        Ein Klick auf eine Browser Action gewährt Zugriff für
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
        Ein Klick auf den Kontextmenüeintrag eines Links gibt den Zugriff auf die Seite
        frei, damit der Link in die Zwischenablage kopiert werden kann.
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
      <td>Ein Klick auf einen Menüeintrag gibt den aktiven Tab für die Demo zur Menümanipulation frei.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/tree/main/menu-remove-element/"
          >menu-remove-element</a
        >
      </td>
      <td>
        Ein Klick auf einen Menüeintrag gibt den Zugriff auf die Seite frei, um ein Skript
        einzufügen, das das Element unter dem Mauszeiger entfernt.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/script-on-click/"
          >script-on-click</a
        >
      </td>
      <td>
        Ein Klick auf die Symbolleistenschaltfläche gewährt Zugriff für
        {{WebExtAPIRef("scripting.executeScript()")}}, um ohne Host-Berechtigungen
        ein Skript im aktiven Tab auszuführen.
      </td>
    </tr>
  </tbody>
</table>

## Browser-Kompatibilität

Firefox, Safari und Chromium-basierte Browser, darunter Chrome und Edge, unterstützen `activeTab`. Allerdings unterscheiden sich die Browser darin, wann die Berechtigung erteilt wird, welche Möglichkeiten sie bietet und wann sie widerrufen wird.

### Aktionen, durch die activeTab erteilt wird

| Benutzeraktion                                            | Chrome        | Firefox        | Safari                                                                                  |
| --------------------------------------------------------- | ------------- | -------------- | --------------------------------------------------------------------------------------- |
| Klick auf die Symbolleistenschaltfläche der Erweiterung   | Ja            | Ja             | Ja                                                                                      |
| Auswahl eines Kontextmenüeintrags der Erweiterung         | Ja            | Ja             | Ja                                                                                      |
| Verwendung einer Tastenkombination der Erweiterung        | Ja            | Ab Firefox 63  | Ja                                                                                      |
| Annahme eines Vorschlags in der Adressleiste (Omnibox)    | Ja            | Ab Firefox 142 | Nein, Safari unterstützt die {{WebExtAPIRef("omnibox")}}-API nicht                      |
| Auswahl eines Menüeintrags für einen Tab in der Tableiste | Ab Chrome 150 | Ab Firefox 63  | Nein, Safari unterstützt den Wert `tab` von {{WebExtAPIRef("menus.ContextType")}} nicht |

### Gewährte Möglichkeiten

| Möglichkeit                                                                                                                      | Chrome                                         | Firefox                                                 | Safari    |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------- | --------- |
| Programmatisches Einfügen von Skripten und Stylesheets                                                                           | Ja                                             | Ja                                                      | Ja        |
| Geschützte Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} (`url`, `title`, `favIconUrl`)                                         | Ja                                             | Ja                                                      | Ja        |
| {{WebExtAPIRef("tabs.captureVisibleTab()")}}                                                                                     | Ja                                             | Ab Firefox 126                                          | Ja        |
| Abfangen der Netzwerkanfragen des Tabs mit den APIs {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}} | Ja, für den Ursprung des Haupt-Frames des Tabs | Nein ([Firefox-Bug 1617479](https://bugzil.la/1617479)) | Unbekannt |

Auch der Zugriff, den Browser mit `activeTab` gewähren, unterscheidet sich:

- Firefox und Safari gewähren ausschließlich Zugriff auf den aktiven Tab.
- Chrome gewährt die Host-Berechtigungen, die sich aus der URL des Tabs ableiten.

Dadurch kann Chrome beispielsweise mehr Zugriff gewähren als Firefox:

- In Chrome kann ein Skript in einem anderen Tab mit demselben Ursprung ausgeführt werden, in Firefox nicht.
- Ein Erweiterungsskript (beispielsweise ein Hintergrundskript oder das Skript eines Popups) kann in Chrome eine Cross-Origin-Anfrage an die URL des Tabs senden, in Firefox nicht.
- Die {{WebExtAPIRef("cookies")}}-API benötigt Host-Berechtigungen, um auf Cookies bestimmter Domains zuzugreifen. Chrome erlaubt dies mit `activeTab`, Firefox nicht.

Diese Liste ist nicht vollständig.

### Wann der Zugriff widerrufen wird

In allen Browsern wird der Zugriff widerrufen, wenn der Tab geschlossen wird. Navigationen innerhalb desselben Dokuments, etwa die Änderung eines Fragments (Hash) oder ein Aufruf von [`History.pushState()`](/de/docs/Web/API/History/pushState), widerrufen ihn dagegen nicht: Das Dokument und sein Ursprung bleiben unverändert, sodass der Zugriff erhalten bleibt.

Bei Navigationen, die ein neues Dokument laden, unterscheidet sich das Verhalten:

- **Chrome**: Der Zugriff bleibt bestehen, solange der Tab beim selben Ursprung bleibt, auch beim erneuten Laden. Er wird widerrufen, wenn der Tab zu einem anderen Ursprung navigiert.
- **Safari**: Der Zugriff ist an das Dokument gebunden, das sich zum Zeitpunkt der Benutzeraktion im Tab befand. Er wird widerrufen, wenn der Tab zu einer anderen URL navigiert.
- **Firefox**: Der Zugriff ist an das Dokument gebunden, das sich zum Zeitpunkt der Benutzeraktion im Tab befand. Jede Navigation, die zu einem neuen Dokument führt, beendet den Zugriff; der Benutzer muss die Aktion wiederholen. Wird das ursprüngliche Dokument aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} wiederhergestellt, wird auch sein Zugriff wiederhergestellt.

### Weitere Unterschiede

- **Berechtigungsabfragen**: Firefox und Chrome erteilen einer Erweiterung die angeforderten Host-Berechtigungen bei der Installation. Mit `activeTab` lässt sich daher eine Warnung bei der Installation vermeiden. Safari setzt Host-Berechtigungen dagegen standardmäßig auf „Nachfragen“ und fragt den Benutzer beim ersten Zugriffsversuch der Erweiterung auf eine Website. Dabei stehen **Für einen Tag erlauben** und **Immer erlauben** zur Auswahl. Mit `activeTab` entfällt diese Nachfrage, da Safari die Interaktion des Benutzers mit der Erweiterung als Berechtigungserteilung wertet.
- **Manifest V2 und V3**: In Browsern funktioniert `activeTab` unter Manifest V3 auf dieselbe Weise. In Firefox ermöglicht `activeTab` unter Manifest V2 mit {{WebExtAPIRef("scripting.executeScript()")}} zusätzlich den Zugriff auf einen iframe mit anderem Ursprung (siehe [Bug 1839200](https://bugzil.la/1839200#c3)). Dieses Verhalten wurde in MV3 entfernt.

## Siehe auch

- Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) im Extension Workshop
- [Die „activeTab“-Berechtigung](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) in der Dokumentation für Chrome-Erweiterungen
