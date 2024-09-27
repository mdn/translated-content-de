---
title: "PageTransitionEvent: PageTransitionEvent() Konstruktor"
short-title: PageTransitionEvent()
slug: Web/API/PageTransitionEvent/PageTransitionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("HTML DOM")}}

Der **`PageTransitionEvent()`** Konstruktor erstellt ein neues [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)-Objekt, das von den [`pageshow`](/de/docs/Web/API/Window/pageshow_event)- oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignissen verwendet wird, die beim [`window`](/de/docs/Web/API/Window)-Objekt ausgelöst werden, wenn eine Seite geladen oder entladen wird.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn [`pageshow`](/de/docs/Web/API/Window/pageshow_event)- oder [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new PageTransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist groß- und kleinschreibungssensitiv und Browser setzen es auf `pageshow` oder `pagehide`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgende Eigenschaft hat:
    - `persisted` {{optional_inline}}
      - : Ein boolean der angibt, ob das Dokument aus einem Cache geladen wird.

### Rückgabewert

Ein neues [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pageshow`](/de/docs/Web/API/Window/pageshow_event)-Ereignis
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event)-Ereignis
