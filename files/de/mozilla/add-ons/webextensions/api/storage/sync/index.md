---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Repräsentiert den `sync`-Speicherbereich. Elemente im `sync`-Speicher werden vom Browser synchronisiert. Die Daten sind dann auf allen Instanzen des Browsers verfügbar, bei denen der Benutzer angemeldet ist (zum Beispiel bei Verwendung eines Mozilla-Kontos bei Desktop-Versionen von Firefox oder eines Google-Kontos bei Chrome) über verschiedene Geräte hinweg.

Für Firefox auf dem Desktop muss ein Benutzer `Add-ons` im Bereich "Sync" in `"about:preferences"` ausgewählt haben. Firefox für Android synchronisiert keine Daten mit dem Konto des Benutzers. Siehe [Firefox Fehler 1625257](https://bugzil.la/1625257).

Die Implementierung von `storage.sync` in Firefox beruht auf der Add-on-ID. Wenn Sie `storage.sync` verwenden, müssen Sie eine ID für Ihre Erweiterung mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json Schlüssel festlegen.

Der Hauptanwendungsfall dieser API ist es, Präferenzen zu Ihrer Erweiterung zu speichern und dem Benutzer zu ermöglichen, diese auf verschiedene Profile zu synchronisieren.

## Speicherquoten für Sync-Daten

Der Browser setzt Grenzen für die Datenmenge, die jede Erweiterung im Sync-Bereich speichern darf:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Wert in Bytes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Maximale Gesamtgröße</td>
      <td>
        Die maximale Gesamtmenge an Daten, die jede Erweiterung im sync-Speicherbereich speichern darf, gemessen durch die JSON-Stringifizierung jedes Wertes plus der Länge jedes Schlüssels.
      </td>
      <td>102400</td>
    </tr>
    <tr>
      <td>Maximale Elementgröße</td>
      <td>
        Die maximale Größe eines einzelnen Elements, das jede Erweiterung im sync-Speicherbereich speichern darf, gemessen durch die JSON-Stringifizierung des Wertes des Elements plus der Länge seines Schlüssels.
      </td>
      <td>8192</td>
    </tr>
    <tr>
      <td>Maximale Anzahl von Elementen</td>
      <td>
        Die maximale Anzahl von Elementen, die jede Erweiterung im Sync-Speicherbereich speichern kann.
      </td>
      <td><p>512</p></td>
    </tr>
  </tbody>
</table>

Wenn eine Erweiterung versucht, Elemente zu speichern, die diese Grenzen überschreiten, werden Aufrufe von {{WebExtAPIRef("storage.StorageArea.set()", "storage.sync.set()")}} mit einem Fehler abgelehnt. Eine Erweiterung kann {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.sync.getBytesInUse()")}} verwenden, um herauszufinden, wie viel ihres Kontingents bereits genutzt wird.

## Synchronisationsprozess

In Firefox werden Erweiterungsdaten alle 10 Minuten oder immer dann synchronisiert, wenn der Benutzer **Jetzt synchronisieren** auswählt (in **Einstellungen** > **Sync** oder über das Mozilla-Kontosymbol). Wenn der Browser eine Synchronisation durchführt, vergleicht er für jeden gespeicherten Schlüssel:

- den Wert auf dem Server mit dem Wert bei der letzten Synchronisation; wenn sie unterschiedlich sind, wird der Wert vom Server in den Sync-Speicher des Browsers geschrieben.
- die Werte im Sync-Speicher des Browsers mit dem Wert auf dem Server; wenn sie unterschiedlich sind, wird der Schlüsselwert des Browsers auf den Server geschrieben.

Das bedeutet, dass für jeden Schlüssel eine Änderung auf dem Server Vorrang vor einer Änderung im Sync-Speicher des Browsers hat.

Dieser Mechanismus ist im Allgemeinen in Ordnung für Daten wie Benutzereinstellungen oder andere globale Einstellungen, die vom Benutzer geändert werden.

Allerdings kann ein Wert eines Schlüssels in einem Browser aktualisiert und dann synchronisiert werden, während er in einem zweiten Browser aktualisiert wird, bevor der zweite Browser synchronisiert, wodurch das lokale Update während der Synchronisation überschrieben wird. Dieser Mechanismus ist daher nicht ideal für Daten, die über Geräte hinweg aggregiert werden, wie zum Beispiel eine Zählung von Seitenaufrufen oder wie oft eine Option verwendet wurde. Um solche Fälle zu handhaben, verwenden Sie {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.sync.onChanged")}}, um nach Synchronisationsupdates vom Server zu lauschen (zum Beispiel eine Zählung von Seitenaufrufen auf einer anderen Browserinstanz). Dann passen Sie den Wert lokal an, um den Remote-Wert zu berücksichtigen (zum Beispiel, indem Sie die Gesamtansichten basierend auf der Remote-Zählung und der neuen lokalen Zählung aktualisieren).

## Methoden

Das `sync`-Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.sync.get()")}}
  - : Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.sync.getBytesInUse()")}}
  - : Gibt die Menge an Speicherplatz (in Bytes) an, der für ein oder mehrere Elemente im Speicherbereich verwendet wird.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.sync.set()")}}
  - : Speichert ein oder mehrere Elemente im Speicherbereich. Wenn das Element bereits existiert, wird sein Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.sync.remove()")}}
  - : Entfernt ein oder mehrere Elemente aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.sync.clear()")}}
  - : Entfernt alle Elemente aus dem Speicherbereich.

## Ereignisse

Das `sync`-Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.sync.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Elemente im Speicherbereich ändern.

{{WebExtExamples}}

## Browserkompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-sync) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
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
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
