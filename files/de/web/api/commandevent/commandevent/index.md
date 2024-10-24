---
title: "CommandEvent: CommandEvent() Konstruktor"
short-title: CommandEvent()
slug: Web/API/CommandEvent/CommandEvent
l10n:
  sourceCommit: 3556f7aca5478c222368dba8a7bd6a007898b36a
---

{{APIRef("Invoker Commands API")}}{{SeeCompatTable}}

Der **`CommandEvent()`** Konstruktor erstellt ein neues [`CommandEvent`](/de/docs/Web/API/CommandEvent) Objekt.

## Syntax

```js-nolint
new CommandEvent(type)
new CommandEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Es ist case-sensitiv und Browser setzen es auf `beforeinput` oder `input`.
- `options` {{optional_inline}}
  - : Ein Objekt, das _zusätzlich zu den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ folgende Eigenschaften haben kann:
    - `source` {{optional_inline}}
      - : Ein [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement), das den Knopf darstellt, mit dem interagiert wurde, um dieses Ereignis auszulösen. Dies kann jedes Element sein, jedoch empfehlen wir, nur einen Button als Quelle zu verwenden, um Überraschungen zu vermeiden.
    - `command` {{optional_inline}}
      - : Ein String, der den Befehl enthält, den das gesteuerte Element ausführen soll. Beim manuellen Erstellen eines `CommandEvent` ist es möglich, jeden beliebigen Stringwert zu verwenden, aber es wird empfohlen, einen der eingebauten Namen zu verwenden oder mit zwei Bindestrichen (`--`) zu präfixieren, um zukunftssichere Kompatibilität zu gewährleisten.

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
