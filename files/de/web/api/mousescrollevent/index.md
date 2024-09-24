---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}{{ Non-standard_Header }}{{Deprecated_Header}}

Die **`MouseScrollEvent`**-Schnittstelle repräsentiert Ereignisse, die durch das Bewegen eines Mausrads oder ähnliches Eingabegerät verursacht werden.

> [!WARNING]
> Verwenden Sie diese Schnittstelle nicht für Radereignisse.
>
> Wie `MouseWheelEvent` ist diese Schnittstelle nicht standardisiert und veraltet. Sie wurde nur in auf Gecko basierenden Browsern verwendet. Verwenden Sie stattdessen das standardisierte _{{domxref("WheelEvent")}}_.

## Methodenübersicht

```webidl
void initMouseScrollEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in nsIDOMAbstractView viewArg,
  in long detailArg,
  in long screenXArg,
  in long screenYArg,
  in long clientXArg,
  in long clientYArg,
  in boolean ctrlKeyArg,
  in boolean altKeyArg,
  in boolean shiftKeyArg,
  in boolean metaKeyArg,
  in unsigned short buttonArg,
  in nsIDOMEventTarget relatedTargetArg,
  in long axis);
```

## Attribute

| Attribut                 | Typ    | Beschreibung                  |
| ------------------------ | ------ | ----------------------------- |
| `axis` {{ReadOnlyInline}} | `long` | Gibt die Scrollrichtung an.   |

## Konstanten

### Delta-Modi

| Konstante          | Wert   | Beschreibung                                          |
| ------------------ | ------ | ----------------------------------------------------- |
| `HORIZONTAL_AXIS`  | `0x01` | Das Ereignis wird durch horizontale Radbewegung verursacht. |
| `VERTICAL_AXIS`    | `0x02` | Das Ereignis wird durch vertikale Radbewegung verursacht.   |

## Instanzmethoden

- `initMouseScrollEvent()`
  - : Siehe `nsIDOMMouseScrollEvent::initMouseScrollEvent()`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `DOMMouseScroll`
- `MozMousePixelScroll`
- Standardisiertes Mausrad-Ereignisobjekt: {{ domxref("WheelEvent") }}
