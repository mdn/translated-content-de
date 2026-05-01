---
title: storage.StorageArea
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea
l10n:
  sourceCommit: 2857820893ce291eb2cf5e370551136065bc080c
---

StorageArea ist ein Objekt, das einen Speicherbereich repräsentiert. Diese Dokumentation beschreibt die allgemeine Schnittstelle dieser konkreten Implementierungen:

- {{WebExtAPIRef("storage.local")}}
- {{WebExtAPIRef("storage.managed")}}
- {{WebExtAPIRef("storage.session")}}
- {{WebExtAPIRef("storage.sync")}}

`storage.StorageArea` ist kein API-Objekt; es ist ein Mechanismus zur Beschreibung der konkreten APIs.

## Typ

Werte dieses Typs sind Objekte.

## Methoden

- {{WebExtAPIRef("storage.StorageArea.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}}
  - : Ermittelt die Menge des genutzten Speicherplatzes (in Bytes) für ein oder mehrere im Speicherbereich gespeicherte Elemente.
- {{WebExtAPIRef("storage.StorageArea.getKeys()")}}
  - : Ruft die Schlüssel aller Elemente im Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn ein Element bereits existiert, wird dessen Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.setAccessLevel()")}}
  - : Legt das Zugriffslevel für den Speicherbereich fest.
- {{WebExtAPIRef("storage.StorageArea.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

- {{WebExtAPIRef("storage.StorageArea.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#type-StorageArea) API von Chromium. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser Software
// abgeleitet sind, zu befürworten oder zu fördern, ohne eine spezifische vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER KONKLUDENTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE KONKLUDENTE GARANTIE DER MARKTFÄHIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DIE COPYRIGHT-INHABER ODER MITWIRKENDE HAFTBAR FÜR JEGLICHE DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTEN; NUTZUNGSAUSFALL, DATENVERLUST ODER GEWINNSVERLUST; GESCHÄFTSUNTERBRECHUNG) JEDOCH VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
