---
title: ClipboardChangeEvent
slug: Web/API/ClipboardChangeEvent
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{APIRef("Clipboard API")}}{{SeeCompatTable}}

Das **`ClipboardChangeEvent`**-Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert Ereignisse, die immer dann ausgelöst werden, wenn sich der Inhalt der Systemzwischenablage ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`ClipboardChangeEvent()`](/de/docs/Web/API/ClipboardChangeEvent/ClipboardChangeEvent) {{experimental_inline}}
  - : Erstellt ein neues `ClipboardChangeEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardChangeEvent.types`](/de/docs/Web/API/ClipboardChangeEvent/types) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein Array von Zeichenfolgen, das die obligatorischen Datentypen repräsentiert, die auf der Systemzwischenablage verfügbar sind, als das Ereignis ausgelöst wurde.
- [`ClipboardChangeEvent.changeId`](/de/docs/Web/API/ClipboardChangeEvent/changeId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein 128-Bit-Ganzzahlwert, der einen eindeutigen Bezeichner für diesen speziellen Clipboard-Änderungsvorgang darstellt.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil [`Event`](/de/docs/Web/API/Event)_.

## Beispiele

In diesem Beispiel werden bei einer Änderung der Inhalte der Zwischenablage die Datentypen, die Änderungs-ID und das gesamte Ereignisobjekt in der Konsole protokolliert. Dies ist ein `ClipboardChangeEvent`-Objekt vom Typ `clipboardchange`.

```js
navigator.clipboard.addEventListener("clipboardchange", (event) => {
  console.log(`MIME types: ${event.types}`);
  console.log(`ID: ${event.changeId}`);
  console.dir(event);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
