---
title: tabs.onRemoved
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onRemoved
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Tab geschlossen wird.

## Syntax

```js-nolint
browser.tabs.onRemoved.addListener(listener)
browser.tabs.onRemoved.removeListener(listener)
browser.tabs.onRemoved.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, ansonsten `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:
    - `tabId`
      - : `integer`. ID des Tabs, der geschlossen wurde.
    - `removeInfo`
      - : `object`. Die Fenster-ID des Tabs und ein boolean, der angibt, ob das Fenster ebenfalls geschlossen wird. Siehe den Abschnitt [removeInfo](#removeinfo_2) für mehr Details.

## Zusätzliche Objekte

### removeInfo

- `windowId`
  - : `integer`. Das Fenster, dessen Tab geschlossen wird.
- `isWindowClosing`
  - : `boolean`. `true`, wenn der Tab geschlossen wird, weil sein Fenster geschlossen wird.

## Beispiele

Lauschen auf Schließereignisse und protokollieren der Informationen:

```js
function handleRemoved(tabId, removeInfo) {
  console.log(`Tab: ${tabId} is closing`);
  console.log(`Window ID: ${removeInfo.windowId}`);
  console.log(`Window is closing: ${removeInfo.isWindowClosing}`);
}

browser.tabs.onRemoved.addListener(handleRemoved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onRemoved) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss beibehalten.
//    * Redistributionen in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und / oder anderen Materialien, die mit der Verteilung zur Verfügung
// gestellt werden, wiedergeben.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet wurden, ohne ausdrückliche vorherige schriftliche Genehmigung zu unterstützen
// oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "SO WIE SIE IST" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// STILLSCHWEIGENDEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK SIND ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// COPYRIGHT-INHABER ODER MITWIRKENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATENVERLUST ODER GEWINNE ODER
// GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND UNTER WELCHER
// HAFTUNGSTHEORIE, SEI ES VERTRAG, STRIKTE HAFTUNG ODER UNERLAUBTE HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUF IRGENDEINE WEISE AUS
// DER NUTZUNG DIESER SOFTWARE ENTSTANDEN SIND, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
