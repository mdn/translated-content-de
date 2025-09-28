---
title: "CommandEvent: CommandEvent() Konstruktor"
short-title: CommandEvent()
slug: Web/API/CommandEvent/CommandEvent
l10n:
  sourceCommit: 66ca26b10d8a8d7c8c287728cd60108b65a1f331
---

{{APIRef("Invoker Commands API")}}

Der **`CommandEvent()`** Konstruktor erstellt ein neues [`CommandEvent`](/de/docs/Web/API/CommandEvent) Objekt.

## Syntax

```js-nolint
new CommandEvent(type)
new CommandEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist groß- und kleinschreibungssensitiv und Browser setzen ihn auf `command`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_, die folgenden Eigenschaften haben kann:
    - `source` {{optional_inline}}
      - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Button darstellt, mit dem interagiert wurde, um dieses Ereignis auszulösen. Dies kann jedes Element sein, aber wir empfehlen, nur Buttons als Quelle zu verwenden, um Überraschungen zu vermeiden.
    - `command` {{optional_inline}}
      - : Ein String, der den Befehl für das gesteuerte Element enthält. Beim manuellen Instanziieren eines `CommandEvent` ist es möglich, jeden String-Wert zu verwenden, aber es wird empfohlen, einen der integrierten Namen zu verwenden oder mit zwei Bindestrichen (`--`) zu versehen, um die zukunftssichere Kompatibilität zu gewährleisten.

### Rückgabewert

Ein neues [`CommandEvent`](/de/docs/Web/API/CommandEvent) Objekt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Invoker Commands API](/de/docs/Web/API/Invoker_Commands_API)
- [`HTMLButtonElement.command`](/de/docs/Web/API/HTMLButtonElement/command)
- [`HTMLButtonElement.commandForElement`](/de/docs/Web/API/HTMLButtonElement/commandForElement)
- [`CommandEvent`](/de/docs/Web/API/CommandEvent)
