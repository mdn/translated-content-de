---
title: FocusEvent
slug: Web/API/FocusEvent
l10n:
  sourceCommit: c45b0cf22b34da74660e7ca95140eff5ab2577d5
---

{{APIRef("UI Events")}}

Die **`FocusEvent`**-Schnittstelle repräsentiert focus-bezogene Ereignisse, einschließlich [`focus`](/de/docs/Web/API/Element/focus_event), [`blur`](/de/docs/Web/API/Element/blur_event), [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event).

{{InheritanceDiagram}}

## Konstruktor

- [`FocusEvent()`](/de/docs/Web/API/FocusEvent/FocusEvent)
  - : Erstellt ein `FocusEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)_.

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das ein sekundäres Ziel für dieses Ereignis darstellt. In einigen Fällen (wie beim Wechseln der Registerkarten in oder aus einer Seite) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt sein.

## Instanzmethoden

_Diese Schnittstelle hat keine spezifischen Methoden. Sie erbt Methoden von ihrem Elternteil [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

## Reihenfolge der Ereignisse

Wenn der Fokus von Element A auf Element B verschoben wird, werden die Fokusereignisse in der folgenden Reihenfolge ausgelöst:

1. `blur`: wird gesendet, nachdem Element A den Fokus verloren hat.
2. `focusout`: wird nach dem `blur`-Ereignis gesendet.
3. `focus`: wird gesendet, nachdem Element B den Fokus erhalten hat.
4. `focusin`: wird nach dem `focus`-Ereignis gesendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Event`](/de/docs/Web/API/Event) Basisschnittstelle
