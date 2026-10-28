---
title: activeTab-Berechtigung
short-title: activeTab permission
slug: Mozilla/Add-ons/WebExtensions/activeTab_permission
l10n:
  sourceCommit: 02f40534e1bbe121c49f8c045c5a16120f0b02f7
---

Die Berechtigung `activeTab` gibt einer Erweiterung vorübergehend Zugriff auf den Tab, in dem eine Person gerade arbeitet. Sie wird als Reaktion auf eine ausdrückliche [Benutzeraktion](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) erteilt, beispielsweise auf einen Klick auf die Symbolleistenschaltfläche der Erweiterung. Der Zugriff ist auf diesen Tab beschränkt und besteht, bis der Tab zu einer anderen Seite navigiert.

Damit können Erweiterungen den häufigen Anwendungsfall „Auf Anforderung etwas mit der aktuellen Seite tun“ erfüllen, ohne weitreichende Berechtigungen zu benötigen. Stellen Sie sich beispielsweise eine Erweiterung vor, die ein Skript auf der aktuellen Seite ausführen soll, wenn jemand auf ihre Symbolleistenschaltfläche klickt. Ohne `activeTab` müsste sie die Host-Berechtigung `<all_urls>` anfordern. Diese würde ihr erheblich mehr Rechte einräumen als nötig: Sie könnte Skripte in _jedem Tab_ und _jederzeit_ ausführen, statt nur im betreffenden Tab und als Reaktion auf eine Benutzeraktion.

Da `activeTab` nur eingeschränkten Zugriff gewährt, zeigen Browser bei der Installation der Erweiterung keine Berechtigungswarnung an.

## Die activeTab-Berechtigung anfordern

Ihre Erweiterung fordert `activeTab` über den Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) an:

```json
"permissions": ["activeTab"]
```

`activeTab` ist eine [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions), keine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).

Sie können `activeTab` auch in [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) aufnehmen und die Berechtigung zur Laufzeit mit {{WebExtAPIRef("permissions.request()")}} anfordern. Sie gehört zu den Berechtigungen, die ohne Nachfrage beim Benutzer erteilt werden.

> [!NOTE]
> `activeTab` gewährt Rechte für einen Tab. Die Berechtigung allein gewährt keinen Zugriff auf eine API. Um beispielsweise ein Skript einzufügen, benötigt Ihre Erweiterung die Berechtigung `"scripting"`, damit sie die {{WebExtAPIRef("scripting")}}-API verwenden kann.

## Wie activeTab erteilt wird

Der Browser erteilt `activeTab`, wenn jemand mit der Erweiterung interagiert. Diese Interaktionen werden als [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions) bezeichnet. Dazu gehört:

- ein Klick auf die [Symbolleistenschaltfläche](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button) oder eine [Page Action](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) der Erweiterung;
- die Auswahl eines Eintrags im Kontextmenü der Erweiterung, wodurch das Ereignis {{WebExtAPIRef("menus.onClicked")}} ausgelöst wird;
- die Verwendung eines von der Erweiterung über die {{WebExtAPIRef("commands")}}-API definierten Tastaturkürzels, wodurch das Ereignis {{WebExtAPIRef("commands.onCommand")}} ausgelöst wird;
- ein Klick auf einen Vorschlag der Erweiterung in der Adressleiste (Omnibox), wodurch das Ereignis {{WebExtAPIRef("omnibox.onInputEntered")}} ausgelöst wird (ab Firefox 142).

Normalerweise wird `activeTab` für den aktiven Tab erteilt. Es gibt eine Ausnahme: Eine Erweiterung kann mit der {{WebExtAPIRef("menus")}}-API einen Menüeintrag erstellen, der angezeigt wird, wenn jemand das Kontextmenü eines Tabs in der Tableiste öffnet. Wird dieser Eintrag ausgewählt, erhält die Erweiterung `activeTab` für den angeklickten Tab, auch wenn dieser nicht aktiv ist.

## Was activeTab ermöglicht

Solange `activeTab` für einen Tab erteilt ist, kann die Erweiterung:

- JavaScript oder CSS mit der {{WebExtAPIRef("scripting")}}-API in den Tab einfügen (oder in Manifest V2 mit {{WebExtAPIRef("tabs.executeScript()")}} und {{WebExtAPIRef("tabs.insertCSS()")}}). Siehe [Content Scripts laden](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#loading_content_scripts).
- Die geschützten Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts des Tabs auslesen: `url`, `title` und `favIconUrl`. Andernfalls erfordern diese Eigenschaften die Berechtigung `"tabs"` oder eine passende Host-Berechtigung.
- Den Inhalt des Tabs mit {{WebExtAPIRef("tabs.captureVisibleTab()")}} erfassen (ab Firefox 126).
- Die für den Tab zutreffenden Regeln mit {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}} auslesen, ohne die Berechtigung `"declarativeNetRequestFeedback"` zu benötigen.

## Umfang des Zugriffs

`activeTab` gewährt Zugriff zum Ausführen von Skripten auf der obersten Seite im Tab und in Frames derselben Origin. Das Ausführen von Skripten oder Ändern von Stilen in [Cross-Origin-Frames](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) erfordert zusätzliche [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions).

Die [Einschränkungen und Beschränkungen](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#permissions_restrictions_and_limitations), die für bestimmte Websites und URI-Schemata gelten, gelten auch für `activeTab`. Auf einigen speziellen Seiten können keine Skripte eingefügt werden. Dazu gehören die Leseansicht, die Quelltextansicht, der PDF-Viewer und andere integrierte Seiten der Browseroberfläche.

## Wann der Zugriff endet

Die Erweiterung kann nur auf den Tab beziehungsweise die Daten zugreifen, die zum Zeitpunkt der Benutzeraktion vorhanden waren. Wenn der Tab zu einer anderen Seite navigiert, verliert die Erweiterung die Zugriffsberechtigung. Sie muss ihre Arbeit mit dem Tab daher abschließen oder die benötigten Daten erfassen, solange die Berechtigung besteht. Benötigt sie später erneut Zugriff, muss die Benutzeraktion wiederholt werden.

Der Zeitpunkt, zu dem der Zugriff endet, unterscheidet sich je nach Browser. Siehe [Wann der Zugriff entzogen wird](#wann_der_zugriff_entzogen_wird).

## Beispiel

Diese Erweiterung fügt ein Skript in die aktuelle Seite ein, wenn jemand auf ihre Symbolleistenschaltfläche klickt. Sie benötigt keine Host-Berechtigungen.

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

Durch denselben Klick werden auch die geschützten Eigenschaften des Tabs lesbar. `tab.url` und `tab.title` enthalten daher tatsächliche Werte statt `undefined`.

### Weitere Beispiele

Die folgenden Beispiele aus dem Repository mit Beispielerweiterungen unter <https://github.com/mdn/webextensions-examples> verwenden die Berechtigung `activeTab`:

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
        Ein Klick auf den Kontextmenüeintrag eines Links ermöglicht den Zugriff
        auf die Seite, damit der Link in die Zwischenablage kopiert werden kann.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/history-deleter/"
          >history-deleter</a
        >
      </td>
      <td>
        Liest die URL des aktiven Tabs aus, um die Domain zu bestimmen, deren
        Verlauf gelöscht werden soll.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/webextensions-examples/tree/main/menu-demo/"
          >menu-demo</a
        >
      </td>
      <td>Ein Klick auf einen Menüeintrag ermöglicht der Menü-Demo den Zugriff auf den aktiven Tab.</td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/webextensions-examples/tree/main/menu-remove-element/"
          >menu-remove-element</a
        >
      </td>
      <td>
        Ein Klick auf einen Menüeintrag ermöglicht den Zugriff auf die Seite,
        um ein Skript einzufügen, das das Element unter dem Mauszeiger entfernt.
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

Firefox, Safari und Chromium-basierte Browser, darunter Chrome und Edge, unterstützen `activeTab`. Allerdings unterscheiden sich die Bedingungen für die Erteilung, die damit verbundenen Möglichkeiten und der Zeitpunkt des Entzugs.

### Aktionen, durch die activeTab erteilt wird

| Benutzeraktion                                            | Chrome        | Firefox        | Safari                                                                                  |
| --------------------------------------------------------- | ------------- | -------------- | --------------------------------------------------------------------------------------- |
| Klick auf die Symbolleistenschaltfläche der Erweiterung   | Ja            | Ja             | Ja                                                                                      |
| Auswahl eines Kontextmenüeintrags der Erweiterung         | Ja            | Ja             | Ja                                                                                      |
| Verwendung eines Tastaturkürzels der Erweiterung          | Ja            | Ab Firefox 63  | Ja                                                                                      |
| Auswahl eines Vorschlags in der Adressleiste (Omnibox)    | Ja            | Ab Firefox 142 | Nein, Safari unterstützt die {{WebExtAPIRef("omnibox")}}-API nicht                      |
| Auswahl eines Menüeintrags für einen Tab in der Tableiste | Ab Chrome 150 | Ab Firefox 63  | Nein, Safari unterstützt den Wert `tab` von {{WebExtAPIRef("menus.ContextType")}} nicht |

### Gewährte Möglichkeiten

| Möglichkeit                                                                                                                      | Chrome                                      | Firefox                                                 | Safari    |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------- | --------- |
| Programmatisches Einfügen von Skripten und Stylesheets                                                                           | Ja                                          | Ja                                                      | Ja        |
| Geschützte Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} (`url`, `title`, `favIconUrl`)                                         | Ja                                          | Ja                                                      | Ja        |
| {{WebExtAPIRef("tabs.captureVisibleTab()")}}                                                                                     | Ja                                          | Ab Firefox 126                                          | Ja        |
| Abfangen der Netzwerkanfragen des Tabs mit den APIs {{WebExtAPIRef("webRequest")}} und {{WebExtAPIRef("declarativeNetRequest")}} | Ja, für die Origin des Hauptframes des Tabs | Nein ([Firefox-Bug 1617479](https://bugzil.la/1617479)) | Unbekannt |

Auch der Zugriff, den Browser mit `activeTab` gewähren, unterscheidet sich:

- Firefox gewährt nur Zugriff auf den aktiven Tab.
- Chrome und Safari gewähren die aus der URL des Tabs abgeleiteten Host-Berechtigungen.

Chrome und Safari können damit mehr Zugriff ermöglichen als Firefox, zum Beispiel:

- In Chrome können Skripte auch in einem anderen Tab mit derselben Origin ausgeführt werden, in Firefox nicht.
- Ein Erweiterungsskript, etwa ein Hintergrundskript oder das Skript eines Popups, kann in Chrome eine Cross-Origin-Anfrage an die URL des Tabs senden, in Firefox nicht.
- Die {{WebExtAPIRef("cookies")}}-API erfordert Host-Berechtigungen, um auf Cookies bestimmter Domains zuzugreifen. Chrome erlaubt dies mit `activeTab`, Firefox nicht.

Diese Liste ist nicht vollständig.

### Wann der Zugriff entzogen wird

In allen Browsern wird der Zugriff entzogen, wenn der Tab geschlossen wird. Navigationen innerhalb desselben Dokuments, etwa eine Änderung des Fragments (Hash) oder ein Aufruf von [`History.pushState()`](/de/docs/Web/API/History/pushState), entziehen den Zugriff dagegen nicht: Das Dokument und seine Origin bleiben unverändert.

Bei Navigationen, die ein neues Dokument laden, unterscheidet sich das Verhalten:

- **Chrome**: Der Zugriff bleibt bestehen, solange der Tab auf derselben Origin bleibt, auch beim Neuladen. Er wird entzogen, wenn der Tab zu einer anderen Origin navigiert.
- **Safari**: Der Zugriff ist an das Dokument gebunden, das sich zum Zeitpunkt der Benutzeraktion im Tab befand. Er wird entzogen, wenn der Tab zu einer anderen URL navigiert.
- **Firefox**: Der Zugriff ist an das Dokument gebunden, das sich zum Zeitpunkt der Benutzeraktion im Tab befand. Jede Navigation, die zu einem neuen Dokument führt, beendet den Zugriff. Danach muss die Benutzeraktion wiederholt werden. Wird das Dokument aus dem {{Glossary("bfcache", "Back/Forward-Cache")}} wiederhergestellt, erhält es seinen Zugriff zurück.

### Weitere Unterschiede

- **Berechtigungsabfragen**: Firefox und Chrome erteilen einer Erweiterung die angeforderten Host-Berechtigungen bei der Installation. Mit `activeTab` lässt sich daher eine Warnung bei der Installation vermeiden. Safari setzt Host-Berechtigungen dagegen standardmäßig auf „Nachfragen“ und fragt beim ersten Zugriffsversuch auf eine Website nach. Dabei stehen **Für einen Tag erlauben** und **Immer erlauben** zur Auswahl. Mit `activeTab` entfällt diese Nachfrage, da Safari die Interaktion mit der Erweiterung als Erteilung der Berechtigung wertet.
- **Manifest V2 und V3**: In Manifest V3 funktioniert `activeTab` in den Browsern auf dieselbe Weise. In Firefox mit Manifest V2 ermöglicht `activeTab` zusätzlich, dass {{WebExtAPIRef("scripting.executeScript()")}} auf einen iframe mit einer anderen Origin zugreift (siehe [Bug 1839200](https://bugzil.la/1839200#c3)). Dieses Verhalten wurde in MV3 entfernt.

## Siehe auch

- Manifest-Schlüssel [`permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
- Manifest-Schlüssel [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)
- [Benutzeraktionen](/de/docs/Mozilla/Add-ons/WebExtensions/User_actions)
- [Content Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [Die richtigen Berechtigungen anfordern](https://extensionworkshop.com/documentation/develop/request-the-right-permissions/) im Extension Workshop
- [Die Berechtigung „activeTab“](https://developer.chrome.com/docs/extensions/develop/concepts/activeTab) in der Dokumentation zu Chrome-Erweiterungen
