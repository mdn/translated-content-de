---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt ein neues Panel zu den Devtools hinzu.

Diese Funktion benötigt: einen Titel, eine URL zu einer Icon-Datei und eine URL zu einer HTML-Datei. Sie erstellt ein neues Panel in den Devtools, dessen Inhalt durch die HTML-Datei spezifiziert wird. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das auf ein [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt aufgelöst wird, das das neue Panel repräsentiert.

## Syntax

```js-nolint
let creating = browser.devtools.panels.create(
  title,       // string
  iconPath,    // string
  pagePath     // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Panels. Dieser erscheint in der Registerkartenzeile oben im Devtools-Fenster und ist die Hauptmethode, mit der der Benutzer Ihr Panel identifizieren kann.
- `iconPath`
  - : `string`. Gibt ein Icon an, das neben dem Titel angezeigt wird. Es wird als URL zu einer Bilddatei bereitgestellt, die mit Ihrer Erweiterung gebündelt wurde. Auf Chromium-basierten Browsern und Safari wird diese URL als absolut aufgelöst, während Firefox diese URL relativ zur aktuellen Erweiterungsseite auflöst (es sei denn, sie wird als absolute URL ausgedrückt, z. B. "/icons/panel.png").
- `pagePath`
  - : string. Gibt eine HTML-Datei an, die den Inhalt des Panels definiert. Es wird als URL zu einer HTML-Datei bereitgestellt, die mit Ihrer Erweiterung gebündelt ist. Die URL kann als absolute URL oder relativ zur aktuellen Erweiterungsseite aufgelöst werden. Siehe die Browser-Kompatibilitätsdaten für weitere Informationen. Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite. Das im Panel laufende JavaScript kann die Devtools-APIs verwenden. Siehe [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt erfüllt wird, das das neue Panel repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein neues Panel und fügen Sie Listener zu seinen onShown- und onHidden-Ereignissen hinzu:

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.

<!--
// Urheberrecht 2015 die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Die Verteilung und Verwendung in Quell- und Binärformen, mit oder ohne
// Veränderung, sind unter den folgenden Bedingungen gestattet:
//
//    * Redistributions des Quellcodes müssen das obige Urheberrecht
// und diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in Binärform müssen das obige Urheberrecht
// und diesen Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation oder anderen Materialien enthalten, die mit der
// Verteilung bereitgestellt werden.
//    * Weder der Name von Google Inc. noch die Namen
// seiner Mitwirkenden dürfen nicht verwendet werden, um Produkte zu bewerben
// oder zu fördern, die aus dieser Software abgeleitet wurden, ohne
// spezifische vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF DIE IMPLIZIERTEN GEWÄHRLEISTUNGEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN AUSDRÜCKLICH ABGELEHNT. IN KEINEM FALL SIND DIE
// COPYRIGHT-INHABER ODER MITWIRKENDE HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// BESONDERE, EXEMPARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT
// BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSAUSFALL,
// DATEN, ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG), JEDOCH VERURSACHT UND AUF JEDER
// HAFTUNGSTHEORIE, OB IM VERTRAG, STRIKTER HAFTUNG ODER DELIKT
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), ENTSTEHEND AUS DER NUTZUNG DER
// SOFTWARE, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WIRD.
-->
