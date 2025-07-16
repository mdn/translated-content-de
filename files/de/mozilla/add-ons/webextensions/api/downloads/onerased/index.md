---
title: downloads.onErased
slug: Mozilla/Add-ons/WebExtensions/API/downloads/onErased
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Das **`onErased()`** Ereignis der {{WebExtAPIRef("downloads")}} API wird ausgelöst, wenn ein Download aus dem Browser-Verlauf gelöscht wird.

Dem Listener wird die `downloadId` des betreffenden {{WebExtAPIRef('downloads.DownloadItem')}} Objekts als Parameter übergeben.

## Syntax

```js-nolint
browser.downloads.onErased.addListener(listener)
browser.downloads.onErased.removeListener(listener)
browser.downloads.onErased.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein gegebener `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Diese Funktion erhält folgendes Argument:
    - `downloadId`
      - : Ein `integer`, der die `id` des gelöschten {{WebExtAPIRef('downloads.DownloadItem')}} darstellt.

## Beispiele

Einen Listener für `onErased`-Ereignisse hinzufügen und dann den zuletzt heruntergeladenen Eintrag löschen:

```js
function handleErased(item) {
  console.log(`Erased: ${item}`);
}

browser.downloads.onErased.addListener(handleErased);

let erasing = browser.downloads.erase({
  limit: 1,
  orderBy: ["-startTime"],
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#event-onErased) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diesen Bedingungsabschnitt und den folgenden Haftungsausschluss
// enthalten.
//    * Redistributions in Binärform müssen den obigen
// Urheberrechtshinweis, diese Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit der
// Verteilung mitgeliefert werden, enthalten.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von
// dieser Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, OHNE JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN
// GARANTIEN DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK.
// IN KEINEM FALL SIND DIE RECHTSINHABER ODER MITWIRKENDEN FÜR DIREKTE,
// INDIREKTE, ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN HAFTBAR
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN
// ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN- ODER GEWINNVERLUST ODER
// GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND BASIEREND AUF JEGLICHER THEORIE
// DER HAFTUNG, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH NACHLÄSSIGKEIT ODER AUS ANDEREN GRÜNDEN), ENTSTANDEN IN
// IRGENDEINER WEISE DURCH DIE NUTZUNG DIESER SOFTWARE, SELBST WENN AUF DIE
// MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
