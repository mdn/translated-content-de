---
title: ClipboardChangeEvent
slug: Web/API/ClipboardChangeEvent
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{APIRef("Clipboard API")}}

Das **`ClipboardChangeEvent`**-Interface der [Clipboard API](/de/docs/Web/API/Clipboard_API) repräsentiert Ereignisse, die ausgelöst werden, wenn sich der Inhalt der Systemzwischenablage ändert.

{{InheritanceDiagram}}

## Konstruktor

- [`ClipboardChangeEvent()`](/de/docs/Web/API/ClipboardChangeEvent/ClipboardChangeEvent)
  - : Erstellt ein neues `ClipboardChangeEvent`-Ereignis mit den gegebenen Parametern.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elternobjekt [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardChangeEvent.types`](/de/docs/Web/API/ClipboardChangeEvent/types) {{ReadOnlyInline}}
  - : Ein Array von Zeichenfolgen, das die obligatorischen Datentypen darstellt, die bei Auslösung des Ereignisses auf der Systemzwischenablage verfügbar sind.
- [`ClipboardChangeEvent.changeId`](/de/docs/Web/API/ClipboardChangeEvent/changeId) {{ReadOnlyInline}}
  - : Ein 128-Bit-Integer, der eine eindeutige Kennung für diesen spezifischen Zwischenablageänderungsvorgang darstellt.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternobjekt [`Event`](/de/docs/Web/API/Event)_.

## Beispiele

In diesem Beispiel protokolliert der Ereignis-Listener beim Ändern des Inhalts der Zwischenablage die Datentypen, die Änderungskennung und das gesamte Ereignisobjekt in der Konsole. Dies ist ein `ClipboardChangeEvent`-Objekt vom Typ `clipboardchange`.

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
