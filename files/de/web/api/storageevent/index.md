---
title: StorageEvent
slug: Web/API/StorageEvent
l10n:
  sourceCommit: cec2a003b670c686f1df5dba16d3b02073ad6711
---

{{APIRef("Web Storage API")}}

Die **`StorageEvent`**-Schnittstelle wird durch das [`storage`](/de/docs/Web/API/Window/storage_event)-Ereignis implementiert, welches an ein Fenster gesendet wird, wenn ein Speicherbereich, auf den das Fenster Zugriff hat, im Kontext eines anderen Dokuments geändert wird.

{{InheritanceDiagram}}

## Konstruktor

- [`StorageEvent()`](/de/docs/Web/API/StorageEvent/StorageEvent)
  - : Gibt ein neu konstruiertes `StorageEvent`-Objekt zurück.

## Instanz-Attribute

_Zusätzlich zu den unten aufgeführten Attributen erbt diese Schnittstelle die Attribute ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`key`](/de/docs/Web/API/StorageEvent/key) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Schlüssel für das geänderte Speicherobjekt zurück.
    Das `key`-Attribut ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers verursacht wird.
- [`newValue`](/de/docs/Web/API/StorageEvent/newValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem neuen Wert des geänderten Speicherobjekts zurück.
    Dieser Wert ist `null`, wenn die Änderung durch die `clear()`-Methode des Speichers ausgelöst wurde
    oder das Speicherobjekt aus dem Speicher entfernt wurde.
- [`oldValue`](/de/docs/Web/API/StorageEvent/oldValue) {{ReadOnlyInline}}
  - : Gibt einen String mit dem ursprünglichen Wert des geänderten Speicherobjekts zurück.
    Dieser Wert ist `null`, wenn das Speicherobjekt neu hinzugefügt wurde und daher keinen vorherigen Wert hat.
- [`storageArea`](/de/docs/Web/API/StorageEvent/storageArea) {{ReadOnlyInline}}
  - : Gibt ein [`Storage`](/de/docs/Web/API/Storage)-Objekt zurück, das das betroffene Speicherobjekt repräsentiert.
- [`url`](/de/docs/Web/API/StorageEvent/url) {{ReadOnlyInline}}
  - : Gibt einen String mit der URL des Dokuments zurück, dessen Speicher geändert wurde.

## Instanz-Methoden

_Zusätzlich zu den unten aufgeführten Methoden erbt diese Schnittstelle die Methoden ihrer übergeordneten Schnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`initStorageEvent()`](/de/docs/Web/API/StorageEvent/initStorageEvent) {{deprecated_inline}}
  - : Initialisiert das Ereignis in einer Weise, die analog zur ähnlich benannten [`initEvent()`](/de/docs/Web/API/Event/initEvent)-Methode in den DOM-Ereignisschnittstellen ist. Verwenden Sie stattdessen den Konstruktor.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Storage API](/de/docs/Web/API/Web_Storage_API)
