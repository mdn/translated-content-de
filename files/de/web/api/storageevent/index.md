---
title: StorageEvent
slug: Web/API/StorageEvent
l10n:
  sourceCommit: cec2a003b670c686f1df5dba16d3b02073ad6711
---

{{APIRef("Web Storage API")}}

Das **`StorageEvent`** Interface wird durch das [`storage`](/de/docs/Web/API/Window/storage_event) Ereignis implementiert, welches an ein Fenster gesendet wird, wenn ein Speicherbereich, auf den das Fenster Zugriff hat, im Kontext eines anderen Dokuments verändert wird.

{{InheritanceDiagram}}

## Konstruktor

- [`StorageEvent()`](/de/docs/Web/API/StorageEvent/StorageEvent)
  - : Gibt ein neu konstruiertes `StorageEvent` Objekt zurück.

## Instanz-Eigenschaften

_Neben den unten aufgeführten Eigenschaften übernimmt dieses Interface die Eigenschaften seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`key`](/de/docs/Web/API/StorageEvent/key) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem Schlüssel des Speicherobjekts zurück, das geändert wurde. Das `key` Attribut ist `null`, wenn die Änderung durch die `clear()` Methode des Speichers verursacht wird.
- [`newValue`](/de/docs/Web/API/StorageEvent/newValue) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem neuen Wert des Speicherobjekts zurück, das geändert wurde. Dieser Wert ist `null`, wenn die Änderung durch die `clear()` Methode des Speichers aufgerufen wurde oder das Speicherobjekt aus dem Speicher entfernt wurde.
- [`oldValue`](/de/docs/Web/API/StorageEvent/oldValue) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem ursprünglichen Wert des Speicherobjekts zurück, das geändert wurde. Dieser Wert ist `null`, wenn das Speicherobjekt neu hinzugefügt wurde und daher keinen vorherigen Wert hat.
- [`storageArea`](/de/docs/Web/API/StorageEvent/storageArea) {{ReadOnlyInline}}
  - : Gibt ein [`Storage`](/de/docs/Web/API/Storage) Objekt zurück, das das betroffene Speicherobjekt repräsentiert.
- [`url`](/de/docs/Web/API/StorageEvent/url) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit der URL des Dokuments zurück, dessen Speicher geändert wurde.

## Instanz-Methoden

_Neben den unten aufgeführten Methoden übernimmt dieses Interface die Methoden seiner übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`initStorageEvent()`](/de/docs/Web/API/StorageEvent/initStorageEvent) {{deprecated_inline}}
  - : Initialisiert das Ereignis in einer Art und Weise, die der ähnlich benannten Methode [`initEvent()`](/de/docs/Web/API/Event/initEvent) in den DOM Events Schnittstellen ähnelt. Verwenden Sie stattdessen den Konstruktor.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
