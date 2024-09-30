---
title: MouseScrollEvent
slug: Web/API/MouseScrollEvent
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("UI Events")}}{{ Non-standard_Header }}{{Deprecated_Header}}

Die **`MouseScrollEvent`**-Schnittstelle repräsentiert Ereignisse, die auftreten, wenn der Benutzer ein Mausrad oder ein ähnliches Eingabegerät bewegt.

> [!WARNING]
> Verwenden Sie diese Schnittstelle nicht für Radevents.
>
> Wie `MouseWheelEvent` ist diese Schnittstelle nicht standardisiert und veraltet. Sie wurde nur in Gecko-basierten Browsern verwendet. Verwenden Sie stattdessen das standardisierte _[`WheelEvent`](/de/docs/Web/API/WheelEvent)._

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
| `axis` {{ReadOnlyInline}}| `long` | Gibt die Scrollrichtung an.   |

## Konstanten

### Delta-Modi

| Konstante         | Wert   | Beschreibung                                         |
| ----------------- | ------ | ---------------------------------------------------- |
| `HORIZONTAL_AXIS` | `0x01` | Das Ereignis wird durch eine horizontalen Radbewegung ausgelöst. |
| `VERTICAL_AXIS`   | `0x02` | Das Ereignis wird durch eine vertikalen Radbewegung ausgelöst.   |

## Instanzmethoden

- `initMouseScrollEvent()`
  - : Siehe `nsIDOMMouseScrollEvent::initMouseScrollEvent()`.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- `DOMMouseScroll`
- `MozMousePixelScroll`
- Standardisiertes Maus-Radereignis-Objekt: [`WheelEvent`](/de/docs/Web/API/WheelEvent)
