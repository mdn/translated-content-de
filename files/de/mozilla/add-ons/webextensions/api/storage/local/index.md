---
title: storage.local
slug: Mozilla/Add-ons/WebExtensions/API/storage/local
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Repräsentiert den `local` Speicherbereich. Elemente im `local` Speicher sind lokal zu dem Computer, auf dem die Erweiterung installiert ist.

Der Browser kann die Menge der Daten einschränken, die eine Erweiterung im lokalen Speicherbereich speichern kann. Zum Beispiel:

- In Chrome ist eine Erweiterung darauf beschränkt, 5MB Daten mit dieser API zu speichern, es sei denn, sie hat die [`"unlimitedStorage"`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage).
- In Firefox unterliegt die Menge der Daten, die eine Erweiterung speichern kann, denselben [Speichergrenzen](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#storage_limits), die auch für IndexedDB-Datenbanken gelten. Erweiterungen, die beabsichtigen, mehr Daten als dieses Limit zu speichern, benötigen die ["unlimitedStorage"](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#unlimited_storage) Berechtigung. Allerdings kann es bei Erweiterungen mit der "unlimitedStorage"-Berechtigung zu einem Fehler aufgrund des Überschreitens des Kontingents kommen, wenn der durch Speicher belegte Festplattenspeicher das globale Limit überschreitet.

Wenn die Erweiterung deinstalliert wird, wird der zugehörige lokale Speicher gelöscht.

Auch in Firefox können Sie verhindern, dass der Browser den lokalen Speicher bei der Deinstallation löscht, indem Sie `about:config` aufrufen und diese Browsereinstellungen auf `true` setzen: `"keepUuidOnUninstall"` und `"keepStorageOnUninstall"`. Diese Funktion ist bereitgestellt, um Entwicklern bei der Testung ihrer Erweiterungen zu helfen. Erweiterungen selbst sind nicht in der Lage, diese Einstellungen zu ändern.

Obwohl diese API der [`Window.localStorage`](/de/docs/Web/API/Window/localStorage) ähnlich ist, wird empfohlen, `Window.localStorage` im Erweiterungscode nicht zu verwenden. Firefox löscht von Erweiterungen gespeicherte Daten, die die localStorage API verwenden, in verschiedenen Szenarien, in denen Benutzer ihre Browser-Historie und Daten aus Datenschutzgründen löschen. Daten, die mit der `storage.local` API gespeichert werden, bleiben in diesen Szenarien korrekt erhalten.

## Methoden

Das `local` Objekt implementiert die Methoden, die auf dem {{WebExtAPIRef("storage.StorageArea")}} Typ definiert sind:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.local.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.local.getBytesInUse()")}}
  - : Ermittelt die Menge des Speicherplatzes (in Bytes), der für ein oder mehrere Elemente im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.local.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.local.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.local.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `local` Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}} Typ definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.local.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-local) API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weitergabe und Nutzung in Quell- und Binärformen, mit oder ohne
// Änderungen, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weitergaben des Quellcodes müssen den obigen Urheberrechtsvermerk,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Weitergaben in binärer Form müssen den obigen Urheberrechtsvermerk,
// diese Liste der Bedingungen und den folgenden Haftungsausschluss in
// der Dokumentation und/oder anderen Materialien, die der Verteilung
// beiliegen, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, zu unterstützen oder zu bewerben, ohne
// vorherige ausdrückliche schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN
// GARANTIEN DER MARKTFÄHIGKEIT UND DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK,
// WERDEN ABGELEHNT. IN KEINEM FALL HAFTET DER RECHTSINHABER ODER DIE
// MITWIRKENDEN FÜR JEGLICHE DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE,
// BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT
// AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST,
// DATEN- ODER GEWINNVERLUST; ODER GESCHÄFTSUNTERBRECHUNG) AUF JEGLICHE ART,
// AUF GRUNDLAGE VON VERTRAG, GEFÄHRDUNGSHAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE AUS DER NUTZUNG
// DER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WORDEN IST.
-->
