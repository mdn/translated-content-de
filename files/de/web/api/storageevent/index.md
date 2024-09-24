---
title: StorageEvent
slug: Web/API/StorageEvent
l10n:
  sourceCommit: cec2a003b670c686f1df5dba16d3b02073ad6711
---

{{APIRef("Web Storage API")}}

Die **`StorageEvent`**-Schnittstelle wird durch das {{domxref("Window/storage_event", "storage")}}-Ereignis implementiert, das an ein Fenster gesendet wird, wenn ein Speicherbereich, auf den das Fenster Zugriff hat, innerhalb des Kontextes eines anderen Dokuments geändert wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("StorageEvent.StorageEvent()", "StorageEvent()")}}
  - : Gibt ein neu konstruiertes `StorageEvent`-Objekt zurück.

## Instanz-Eigenschaften

_Neben den unten aufgelisteten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem Schlüssel des geänderten Speicherobjekts zurück. Das `key`-Attribut ist `null`, wenn die Änderung durch die Speicher-`clear()`-Methode verursacht wurde.
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem neuen Wert des geänderten Speicherobjekts zurück. Dieser Wert ist `null`, wenn die Änderung durch die Speicher-`clear()`-Methode ausgelöst wurde oder das Speicherobjekt aus dem Speicher entfernt wurde.
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit dem ursprünglichen Wert des geänderten Speicherobjekts zurück. Dieser Wert ist `null`, wenn das Speicherobjekt neu hinzugefügt wurde und daher keinen vorherigen Wert hat.
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("Storage")}}-Objekt zurück, das das betroffene Speicherobjekt darstellt.
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit der URL des Dokuments zurück, dessen Speicher geändert wurde.

## Instanz-Methoden

_Neben den unten aufgelisteten Methoden erbt diese Schnittstelle die Methoden ihrer übergeordneten Schnittstelle, {{domxref("Event")}}._

- {{domxref("StorageEvent.initStorageEvent", "initStorageEvent()")}} {{deprecated_inline}}
  - : Initialisiert das Ereignis auf eine Weise, die der gleichnamigen {{domxref("Event.initEvent", "initEvent()")}}-Methode in den DOM-Ereignisschnittstellen analog ist. Verwenden Sie stattdessen den Konstruktor.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Web Storage API", "", "", "nocode")}}
