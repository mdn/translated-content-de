---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("UI Events")}}{{ Non-standard_Header }}

Die **`MouseScrollEvent`**-Schnittstelle stellt Ereignisse dar, die auftreten, wenn ein Benutzer ein Mausrad oder ein ähnliches Eingabegerät bewegt.

> [!WARNING]
> Verwenden Sie diese Schnittstelle nicht für Wheel-Ereignisse.
>
> Ähnlich wie `MouseWheelEvent` ist diese Schnittstelle nicht standardisiert und veraltet. Sie wurde nur in Gecko-basierten Browsern verwendet. Stattdessen sollten Sie den standardisierten _[`WheelEvent`](/de/docs/Web/API/WheelEvent)_ verwenden.

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

| Attribut                  | Typ    | Beschreibung                |
| ------------------------- | ------ | --------------------------- |
| `axis` {{ReadOnlyInline}} | `long` | Gibt die Scrollrichtung an. |

## Konstanten

### Delta-Modi

| Konstante         | Wert   | Beschreibung                                                      |
| ----------------- | ------ | ----------------------------------------------------------------- |
| `HORIZONTAL_AXIS` | `0x01` | Das Ereignis wird durch eine horizontale Radbedienung verursacht. |
| `VERTICAL_AXIS`   | `0x02` | Das Ereignis wird durch eine vertikale Radbedienung verursacht.   |

## Instanzmethoden

- `initMouseScrollEvent()`
  - : Siehe `nsIDOMMouseScrollEvent::initMouseScrollEvent()`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `DOMMouseScroll`
- `MozMousePixelScroll`
- Standardisiertes Mausrad-Ereignisobjekt: [`WheelEvent`](/de/docs/Web/API/WheelEvent)
