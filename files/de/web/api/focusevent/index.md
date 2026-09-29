---
title: FocusEvent
slug: Web/API/FocusEvent
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("UI Events")}}

Die Schnittstelle **`FocusEvent`** repräsentiert fokusbezogene Ereignisse, darunter [`focus`](/de/docs/Web/API/Element/focus_event), [`blur`](/de/docs/Web/API/Element/blur_event), [`focusin`](/de/docs/Web/API/Element/focusin_event) und [`focusout`](/de/docs/Web/API/Element/focusout_event).

{{InheritanceDiagram}}

## Konstruktor

- [`FocusEvent()`](/de/docs/Web/API/FocusEvent/FocusEvent)
  - : Erstellt ein `FocusEvent`-Ereignis mit den angegebenen Parametern.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`UIEvent`](/de/docs/Web/API/UIEvent) und mittelbar von [`Event`](/de/docs/Web/API/Event)._

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget) {{ReadOnlyInline}}
  - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget), das ein sekundäres Ziel für dieses Ereignis repräsentiert. In manchen Fällen (etwa beim Navigieren per Tabulatortaste in eine Seite hinein oder aus ihr heraus) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt sein.

## Instanzmethoden

_Diese Schnittstelle hat keine eigenen Methoden. Sie erbt Methoden von ihrer übergeordneten Schnittstelle [`UIEvent`](/de/docs/Web/API/UIEvent) und mittelbar von [`Event`](/de/docs/Web/API/Event)._

## Reihenfolge der Ereignisse

Wenn der Fokus von Element A auf Element B wechselt, werden Fokusereignisse in der folgenden Reihenfolge ausgelöst:

1. `blur`: wird ausgelöst, nachdem Element A den Fokus verloren hat.
2. `focusout`: wird nach dem `blur`-Ereignis ausgelöst.
3. `focus`: wird ausgelöst, nachdem Element B den Fokus erhalten hat.
4. `focusin`: wird nach dem `focus`-Ereignis ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Basisschnittstelle [`Event`](/de/docs/Web/API/Event)
