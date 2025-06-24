---
title: browserAction.setTitle()
slug: Mozilla/Add-ons/WebExtensions/API/browserAction/setTitle
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Setzt den Titel der Browser-Aktion. Der Titel wird in einem Tooltip über dem Icon der Browser-Aktion angezeigt. Sie können eine `tabId` oder eine `windowId` als optionalen Parameter übergeben — wenn Sie dies tun, wird der Titel nur für den angegebenen Tab oder das angegebene Fenster geändert. Tabs oder Fenster ohne einen spezifischen Titel erben den globalen Titeltext, der standardmäßig dem [`default_title`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) oder [`name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) entspricht, wie im Manifest angegeben.

## Syntax

```js-nolint
browser.browserAction.setTitle(
  details // object
)
```

### Parameter

- `details`

  - : `object`. Der neue Titel und optional die ID des Tabs oder Fensters, das angesprochen werden soll.

    - `title`

      - : `string` oder `null`. Der String, der angezeigt werden soll, wenn die Maus über die Browser-Aktion bewegt wird.

        Wenn `title` eine leere Zeichenkette ist, wird der Erweiterungsname als Titel verwendet, aber {{WebExtAPIRef("browserAction.getTitle")}} liefert dennoch die leere Zeichenkette.

        Wenn `title` `null` ist:

        - Wenn `tabId` angegeben ist und der Tab einen tab-spezifischen Titel gesetzt hat, wird der Tab den Titel vom Fenster erben, zu dem er gehört.
        - Wenn `windowId` angegeben ist und das Fenster einen fensterspezifischen Titel gesetzt hat, wird das Fenster den globalen Titel erben.
        - Andernfalls wird der globale Titel auf den im Manifest angegebenen Titel zurückgesetzt.

    - `tabId` {{optional_inline}}
      - : `integer`. Setzt den Titel nur für den angegebenen Tab.
    - `windowId` {{optional_inline}}
      - : `integer`. Setzt den Titel für das angegebene Fenster.

<!---->

- Wenn sowohl `windowId` als auch `tabId` angegeben sind, schlägt die Funktion fehl und der Titel wird nicht gesetzt.
- Wenn sowohl `windowId` als auch `tabId` weggelassen werden, wird der globale Titel gesetzt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Dieser Code wechselt den Titel zwischen "this" und "that" jedes Mal, wenn der Benutzer auf die Browser-Aktion klickt:

```js
function toggleTitle(title) {
  if (title === "this") {
    browser.browserAction.setTitle({ title: "that" });
  } else {
    browser.browserAction.setTitle({ title: "this" });
  }
}

browser.browserAction.onClicked.addListener(() => {
  let gettingTitle = browser.browserAction.getTitle({});
  gettingTitle.then(toggleTitle);
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.browserAction`](https://developer.chrome.com/docs/extensions/mv2/reference/browserAction#method-setTitle) API. Diese Dokumentation ist abgeleitet von [`browser_action.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/browser_action.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Copyright-Hinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Redistributions in binärer Form müssen den obigen Copyright-Hinweis,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung geliefert
// werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragszahler dürfen zur Unterstützung oder Bewerbung von Produkten,
// die von dieser Software abgeleitet wurden, ohne spezifische vorherige
// schriftliche Genehmigung verwendet werden.
//
// DIESE SOFTWARE WIRD VOM COPYRIGHT-INHABER UND DEN BEITRAGSLEISTERN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER STILLSCHWEIGENDEN
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE STILLSCHWEIGENDEN
// GEWÄHRLEISTUNGEN DER MARKTFÄHIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHT-EIGENTÜMER ODER BEITRAGSLEISTENDE
// FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER
// FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON
// ERSATZWAREN ODER -DIENSTLEISTUNGEN; NUTZUNGSVERLUSTEN, DATEN ODER GEWINNEN;
// ODER GESCHÄFTSUNTERBRECHUNGEN) HAFTBAR, WIE AUCH IMMER URSACHEN SIND UND SELBST
// WENN SIE AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDEN.
-->
