---
title: runtime.getPackageDirectoryEntry()
slug: Mozilla/Add-ons/WebExtensions/API/runtime/getPackageDirectoryEntry
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Erhält ein `DirectoryEntry`-Objekt, das das Paketverzeichnis repräsentiert.

Dies ist eine asynchrone Funktion, die entweder einen Callback entgegennimmt oder ein Promise zurückgibt.

> [!NOTE]
> Die auf Promises basierende API wird in Manifest V3 und später unterstützt.

## Syntax

```js-nolint
browser.runtime.getPackageDirectoryEntry(
  callback              // optional callback function
)
```

### Parameter

- `callback` {{optional_inline}}
  - : `function`. Wenn angegeben, wird der Funktion ein `DirectoryEntry`-Objekt übergeben. Ist sie nicht vorhanden, gibt die Funktion stattdessen ein Promise zurück.

### Rückgabewert

Keiner (`undefined`), wenn ein `callback` angegeben wird. Andernfalls wird ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgegeben, das mit einem `DirectoryEntry`-Objekt erfüllt wird, das das Paketverzeichnis repräsentiert.

## Beispiele

```js
browser.runtime.getPackageDirectoryEntry((directoryEntry) => {
  console.log(directoryEntry);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime#method-getPackageDirectoryEntry)-API von Chromium. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weitergabe in binärer Form muss den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// in der Dokumentation und/oder anderen Materialien, die mit
// der Verteilung bereitgestellt werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, zu sichern oder zu fördern, ohne spezifische
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER
// STILLSCHWEIGENDE GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF,
// STILLSCHWEIGENDE GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE EIGENTÜMER
// VON COPYRIGHT-RECHTEN ODER MITWIRKENDE HAFTBAR FÜR JEGLICHE DIREKTEN,
// INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST
// ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER
// VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) AUS DER VERWENDUNG DIESER SOFTWARE
// ENTSTEHEND, SELBST WENN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// UNTERRICHTET WURDE.
-->
