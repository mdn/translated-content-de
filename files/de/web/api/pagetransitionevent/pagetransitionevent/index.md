---
title: "PageTransitionEvent: Konstruktor PageTransitionEvent()"
short-title: PageTransitionEvent()
slug: Web/API/PageTransitionEvent/PageTransitionEvent
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("HTML DOM")}}

Der **`PageTransitionEvent()`**-Konstruktor erstellt ein neues {{domxref("PageTransitionEvent")}}-Objekt, das von den {{domxref("Window/pageshow_event", "pageshow")}}- oder {{domxref("Window/pagehide_event", "pagehide")}}-Ereignissen verwendet wird. Diese werden am {{domxref("window")}}-Objekt ausgelöst, wenn eine Seite geladen oder entladen wird.

> [!NOTE]
> Ein Webentwickler muss diesen Konstruktor normalerweise nicht aufrufen, da der Browser diese Objekte selbst erstellt, wenn {{domxref("Window/pageshow_event", "pageshow")}}- oder {{domxref("Window/pagehide_event", "pagehide")}}-Ereignisse ausgelöst werden.

## Syntax

```js-nolint
new PageTransitionEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es wird zwischen Groß- und Kleinschreibung unterschieden und Browser setzen es auf `pageshow` oder `pagehide`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in {{domxref("Event/Event", "Event()")}} definierten Eigenschaften_ die folgende Eigenschaft hat:
    - `persisted` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob das Dokument aus einem Cache geladen wird.

### Rückgabewert

Ein neues {{domxref("PageTransitionEvent")}}-Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`pageshow`](/de/docs/Web/API/Window/pageshow_event) Ereignis
- [`pagehide`](/de/docs/Web/API/Window/pagehide_event) Ereignis
