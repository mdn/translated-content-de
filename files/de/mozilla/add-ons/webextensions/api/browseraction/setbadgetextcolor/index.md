---
title: browserAction.setBadgeTextColor()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setBadgeTextColor
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Legt die Textfarbe für das Abzeichen der Browser-Aktion fest. Tabs ohne eine spezifische Abzeichentextfarbe übernehmen die globale Abzeichentextfarbe.

## Syntax

```js-nolint
browser.browserAction.setBadgeTextColor(
  details // object
)
```

### Parameter

- `details`

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `color`

      - : Die Farbe, angegeben als eine der folgenden Optionen:

        - ein String: jede CSS [\<color>](/de/docs/Web/CSS/color_value) Angabe, zum Beispiel `"red"`, `"#FF0000"` oder `"rgb(255 0 0)"`. Wenn der String keine gültige Farbe darstellt, wird das zurückgegebene Versprechen abgelehnt und die Textfarbe bleibt unverändert.
        - ein `{{WebExtAPIRef('browserAction.ColorArray')}}` Objekt.
        - `null`. Wenn eine `tabId` angegeben ist, entfernt dies die tab-spezifische Abzeichentextfarbe, sodass der Tab die globale Abzeichentextfarbe erbt. Andernfalls wird die globale Abzeichentextfarbe auf den Standardwert zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt die Abzeichentextfarbe nur für den gegebenen Tab. Die Farbe wird zurückgesetzt, wenn der Benutzer diesen Tab zu einer neuen Seite navigiert.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt die Abzeichentextfarbe nur für das gegebene Fenster.

<!---->

- Wenn `windowId` und `tabId` beide angegeben sind, schlägt die Funktion fehl und die Farbe wird nicht gesetzt.
- Wenn `windowId` und `tabId` beide weggelassen werden, wird stattdessen die globale Abzeichentextfarbe gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Eine Abzeichentextfarbe, die zunächst rot ist und grün wird, wenn die Browser-Aktion angeklickt wird:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeTextColor({ color: "red" });

browser.browserAction.onClicked.addListener(() => {
  browser.browserAction.setBadgeTextColor({ color: "green" });
});
```

Setzt die Abzeichentextfarbe nur für den aktiven Tab:

```js
browser.browserAction.setBadgeText({ text: "1234" });
browser.browserAction.setBadgeTextColor({ color: "red" });

browser.browserAction.onClicked.addListener((tab) => {
  browser.browserAction.setBadgeTextColor({
    color: "green",
    tabId: tab.id,
  });
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setBadgeBackgroundColor) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weiterverteilung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, ist unter den folgenden Bedingungen gestattet:
//
//    * Weiterverbreitungen des Quellcodes müssen den obigen Copyright-
//     Hinweis, diese Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverbreitungen in Binärform müssen den obigen Copyright-
//     Hinweis, diese Bedingungen und den folgenden Haftungsausschluss 
//     in der Dokumentation und/oder anderen Materialien, die mit der 
//     Verteilung bereitgestellt werden, beibehalten.
//    * Weder der Name der Google Inc. noch die Namen der Beiträge 
//     dürfen verwendet werden, um Produkte, die von dieser Software 
//     abgeleitet sind, ohne spezifische vorherige schriftliche Zustimmung zu 
//     unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRÄGERN 
// "SO WIE SIE IST" BEREITGESTELLT, UND ALLE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN 
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDEN
// GARANTIEN DER MARKTGÄNGIGKEIT UND EINER BESTIMMTEN ZWECKDIENLICHKEIT 
// SIND AUSGESCHLOSSEN. IN KEINEM FALL SIND DIE URHEBER ODER BEITRÄGER 
// HAFTBAR FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE 
// ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE 
// BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN, NUTZUNGSVERLUST, 
// DATENVERLUST ODER GEWINNVERLUST ODER UNTERBRECHUNG DER GESCHÄFTSTÄTIGKEIT) 
// AUS JEGLICHEM GRUND, SELBST WENN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN 
// INFORMIERT WURDE.
-->
