---
title: storage.sync
slug: Mozilla/Add-ons/WebExtensions/API/storage/sync
l10n:
  sourceCommit: 89d941878af42738cbd429acaa06789db7fa55f6
---

Repräsentiert den `sync`-Speicherbereich. Elemente im `sync`-Speicher werden vom Browser synchronisiert. Die Daten sind dann in allen Instanzen des Browsers verfügbar, bei denen der Benutzer angemeldet ist (zum Beispiel bei Verwendung eines Mozilla-Kontos in Desktop-Versionen von Firefox oder eines Google-Kontos in Chrome) auf verschiedenen Geräten.

Für den Desktop-Firefox muss ein Benutzer `Add-ons` im Abschnitt "Sync" in `"about:preferences"` ausgewählt haben. Firefox für Android synchronisiert keine Daten mit dem Benutzerkonto. Siehe [Firefox Fehler 1625257](https://bugzil.la/1625257).

Die Implementierung von `storage.sync` in Firefox basiert auf der Add-on-ID. Wenn Sie `storage.sync` verwenden, müssen Sie eine ID für Ihre Erweiterung mit dem [`browser_specific_settings`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) manifest.json-Schlüssel festlegen.

Der Hauptanwendungsfall dieser API besteht darin, Präferenzen zu Ihrer Erweiterung zu speichern und dem Benutzer zu ermöglichen, diese auf verschiedene Profile zu synchronisieren.

## Speicherkontingente für Sync-Daten

Der Browser setzt Beschränkungen für die Menge an Daten durch, die jede Erweiterung im Sync-Bereich speichern darf:

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
        Die maximale Gesamtmenge an Daten, die jede Erweiterung im Sync-Speicherbereich
        speichern darf, gemessen durch die JSON-Stringisierung jedes Wertes plus
        der Länge jedes Schlüssels.
      </td>
      <td>102400</td>
    </tr>
    <tr>
      <td>Maximale Artikelgröße</td>
      <td>
        Die maximale Größe eines jeden Artikels, den jede Erweiterung im Sync-Speicherbereich
        speichern darf, gemessen durch die JSON-Stringisierung des Wertes des Artikels
        plus der Länge seines Schlüssels.
      </td>
      <td>8192</td>
    </tr>
    <tr>
      <td>Maximale Anzahl von Artikeln</td>
      <td>
        Die maximale Anzahl an Artikeln, die jede Erweiterung im Sync-Speicherbereich
        speichern kann.
      </td>
      <td><p>512</p></td>
    </tr>
  </tbody>
</table>

Wenn eine Erweiterung versucht, Elemente zu speichern, die diese Grenzen überschreiten, werden Aufrufe von {{WebExtAPIRef("storage.StorageArea.set()", "storage.sync.set()")}} mit einem Fehler abgelehnt. Eine Erweiterung kann {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.sync.getBytesInUse()")}} verwenden, um festzustellen, wie viel ihres Kontingents bereits genutzt wird.

## Synchronisationsprozess

In Firefox werden Erweiterungsdaten alle 10 Minuten synchronisiert oder wann immer der Benutzer **Jetzt synchronisieren** auswählt (in **Einstellungen** > **Sync** oder aus dem Mozilla-Konto-Icon). Wenn der Browser eine Synchronisation durchführt, wird für jeden gespeicherten Schlüssel:

- der Wert auf dem Server mit dem Wert der letzten Synchronisation verglichen; wenn sie unterschiedlich sind, wird der Wert vom Server zum Schlüssel im Sync-Speicher des Browsers geschrieben.
- die Werte des Sync-Speichers des Browsers mit dem Wert auf dem Server verglichen; wenn sie unterschiedlich sind, wird der Schlüsselwert des Browsers auf den Server geschrieben.

Das bedeutet, dass bei jedem Schlüssel eine Änderung auf dem Server Vorrang vor einer Änderung im Sync-Speicher des Browsers hat.

Dieser Mechanismus ist im Allgemeinen in Ordnung für Daten, wie Benutzereinstellungen oder andere globale Einstellungen, die vom Benutzer geändert werden.

Jedoch kann ein Schlüsselwert in einem Browser aktualisiert und dann synchronisiert werden, bevor er in einem zweiten Browser aktualisiert wird, sodass das lokale Update während der Synchronisation überschrieben wird. Dieses Verfahren ist daher nicht ideal für Daten, die über Geräte aggregiert werden, wie zum Beispiel eine Zählung von Seitenansichten oder wie oft eine Option verwendet wird. Um solche Fälle zu handhaben, verwenden Sie {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.sync.onChanged")}}, um auf Synchronisationsupdates vom Server zu hören (zum Beispiel eine Zählung von Seitenansichten in einer anderen Browserinstanz). Passen Sie dann den Wert lokal an, um den Remote-Wert zu berücksichtigen (zum Beispiel aktualisieren Sie die Gesamtansichten basierend auf der Remote-Zählung und der neuen lokalen Zählung).

## Methoden

Das `sync`-Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definierten Methoden:

- {{WebExtAPIRef("storage.StorageArea.get()", "storage.sync.get()")}}
  - : Ruft einen oder mehrere Artikel aus dem Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.getBytesInUse()", "storage.sync.getBytesInUse()")}}
  - : Ermittelt die Menge an genutztem Speicherplatz (in Bytes) für einen oder mehrere Artikel im Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.getKeys()", "storage.sync.getKeys()")}}
  - : Ruft die Schlüssel aller Artikel im Speicherbereich ab.
- {{WebExtAPIRef("storage.StorageArea.set()", "storage.sync.set()")}}
  - : Speichert einen oder mehrere Artikel im Speicherbereich. Wenn der Artikel existiert, wird dessen Wert aktualisiert.
- {{WebExtAPIRef("storage.StorageArea.remove()", "storage.sync.remove()")}}
  - : Entfernt einen oder mehrere Artikel aus dem Speicherbereich.
- {{WebExtAPIRef("storage.StorageArea.clear()", "storage.sync.clear()")}}
  - : Entfernt alle Artikel aus dem Speicherbereich.

## Ereignisse

Das `sync`-Objekt implementiert die auf dem {{WebExtAPIRef("storage.StorageArea")}}-Typ definierten Ereignisse:

- {{WebExtAPIRef("storage.StorageArea.onChanged", "storage.sync.onChanged")}}
  - : Wird ausgelöst, wenn sich ein oder mehrere Artikel im Speicherbereich ändern.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage#property-sync) API. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
