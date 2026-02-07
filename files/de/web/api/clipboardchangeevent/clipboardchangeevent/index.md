---
title: "ClipboardChangeEvent: ClipboardChangeEvent() Konstruktor"
short-title: ClipboardChangeEvent()
slug: Web/API/ClipboardChangeEvent/ClipboardChangeEvent
l10n:
  sourceCommit: c534ba0cb925657de5e99ab8c540eae31afd9382
---

{{securecontext_header}}{{APIRef("Clipboard API")}}{{SeeCompatTable}}

Der **`ClipboardChangeEvent()`** Konstruktor erstellt eine neue [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent) Objektinstanz, wenn ein `clipboardchange`-Ereignis auftritt. Das `clipboardchange`-Ereignis wird ausgelöst, wann immer sich die Inhalte der System-Zwischenablage entweder durch eine Webanwendung oder eine andere Systemanwendung ändern.

> [!NOTE]
> Dieser Ereignis-Konstruktor wird in der Regel nicht für Produktionswebsites benötigt. Sein Hauptzweck liegt in Tests, die eine Instanz dieses Ereignisses erfordern.

## Syntax

```js-nolint
new ClipboardChangeEvent(type)
new ClipboardChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Es sollte immer auf `clipboardchange` gesetzt sein.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `types`
      - : Ein Array von Strings, das die auf der System-Zwischenablage verfügbaren Datentypen darstellt.
    - `changeId`
      - : Ein Integer, der eine eindeutige Kennung für den Zwischenablage-Änderungsvorgang darstellt.

### Rückgabewert

Ein neues [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
