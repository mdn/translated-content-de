---
title: "ClipboardChangeEvent: ClipboardChangeEvent() Konstruktor"
short-title: ClipboardChangeEvent()
slug: Web/API/ClipboardChangeEvent/ClipboardChangeEvent
l10n:
  sourceCommit: eb38a196911f92a7c99a1a2000fac1cd29d23db9
---

{{securecontext_header}}{{APIRef("Clipboard API")}}

Der **`ClipboardChangeEvent()`** Konstruktor erstellt eine neue [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)-Objektinstanz, wenn ein `clipboardchange`-Ereignis auftritt. Das `clipboardchange`-Ereignis wird ausgelöst, wann immer sich der Inhalt der Systemzwischenablage entweder durch eine Webanwendung oder eine andere Systemanwendung ändert.

> [!NOTE]
> Dieser Ereigniskonstruktor wird in der Regel nicht für Produktionswebsites benötigt. Seine Hauptverwendung liegt in Tests, die eine Instanz dieses Ereignisses erfordern.

## Syntax

```js-nolint
new ClipboardChangeEvent(type)
new ClipboardChangeEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses. Er sollte immer auf `clipboardchange` gesetzt sein.
- `options` {{Optional_Inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften haben kann:
    - `types`
      - : Ein Array von Strings, das die auf der Systemzwischenablage verfügbaren Datentypen darstellt.
    - `changeId`
      - : Eine ganze Zahl, die eine eindeutige Kennung für die Zwischenablageänderung darstellt.

### Rückgabewert

Ein neues [`ClipboardChangeEvent`](/de/docs/Web/API/ClipboardChangeEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
