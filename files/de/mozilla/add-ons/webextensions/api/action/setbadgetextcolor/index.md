---
title: action.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/action/setBadgeTextColor
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Textfarbe für das Badge der Browser-Aktion fest. Tabs ohne eine spezifische Badge-Textfarbe erben die globale Badge-Textfarbe.

> [!NOTE]
> Diese API ist in Manifest V3 oder höher verfügbar.

## Syntax

```js-nolint
browser.action.setBadgeTextColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden:

        - ein String: jeder CSS [\<color>](/de/docs/Web/CSS/color_value) Wert, z.B. `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe ist, wird das zurückgegebene Versprechen abgelehnt und die Textfarbe wird nicht geändert.
        - ein `{{WebExtAPIRef('action.ColorArray')}}` Objekt.
        - `null`. Wenn ein `tabId` angegeben ist, wird die tab-spezifische Badge-Textfarbe entfernt, sodass der Tab die globale Badge-Textfarbe erbt. Andernfalls wird die globale Badge-Textfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Textfarbe nur für den angegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab auf eine neue Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Badge-Textfarbe nur für das angegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben werden, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird stattdessen die globale Badge-Textfarbe gesetzt.

## Beispiele

Eine Badge-Textfarbe, die zuerst rot ist und grün wird, wenn die Browser-Aktion angeklickt wird:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeTextColor({ color: "red" });

browser.action.onClicked.addListener(() => {
  browser.action.setBadgeTextColor({ color: "green" });
});
```

Setzen Sie die Badge-Textfarbe nur für den aktiven Tab:

```js
browser.action.setBadgeText({ text: "1234" });
browser.action.setBadgeTextColor({ color: "red" });

browser.action.onClicked.addListener((tab) => {
  browser.action.setBadgeTextColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.action`](https://developer.chrome.com/docs/extensions/reference/api/action#method-setBadgeBackgroundColor) API. Diese Dokumentation wird aus [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weiterverbreitung und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter der Bedingung gestattet, dass die folgenden Bedingungen
// erfüllt sind:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-Hinweis,
// diese Bedingungsliste und den folgenden Haftungsausschluss beibehalten.
//    * Weiterverbreitungen in binärer Form müssen den obigen
// Copyright-Hinweis, diese Bedingungsliste und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verbreitung geliefert werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus dieser
// Software abgeleitet wurden, zu unterstützen oder zu bewerben, ohne vorherige
// schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEDE AUSDRÜCKLICHE ODER IMPLIZITE GARANTIE,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN DER
// MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, SIND AUSGESCHLOSSEN.
// IN KEINEM FALL HAFTET DER COPYRIGHT-INHABER ODER DIE MITWIRKENDEN FÜR DIREKTE,
// INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG),
// WIE AUCH IMMER VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB
// VERTRAGSHAFTUNG, VERSCHULDENSHAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUS DEM GEBRAUCH DIESER SOFTWARE
// ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
