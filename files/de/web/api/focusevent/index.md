---
title: FocusEvent
slug: Web/API/FocusEvent
l10n:
  sourceCommit: c45b0cf22b34da74660e7ca95140eff5ab2577d5
---

{{APIRef("UI Events")}}

Die **`FocusEvent`**-Schnittstelle repräsentiert fokusbezogene Ereignisse, einschließlich {{domxref("Element/focus_event", "focus")}}, {{domxref("Element/blur_event", "blur")}}, {{domxref("Element/focusin_event", "focusin")}} und {{domxref("Element/focusout_event", "focusout")}}.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}
  - : Erstellt ein `FocusEvent`-Ereignis mit den angegebenen Parametern.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten {{domxref("UIEvent")}}, und indirekt von {{domxref("Event")}}_.

- {{domxref("FocusEvent.relatedTarget")}}
  - : Ein {{domxref("EventTarget")}}, das ein sekundäres Ziel für dieses Ereignis darstellt. In manchen Fällen (wie beim Wechsel zwischen Registerkarten in einer Seite) kann diese Eigenschaft aus Sicherheitsgründen auf `null` gesetzt werden.

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden. Sie erbt Methoden von ihrem übergeordneten {{domxref("UIEvent")}}, und indirekt von {{domxref("Event")}}._

## Reihenfolge der Ereignisse

Wenn der Fokus von Element A zu Element B verschoben wird, werden die Fokuserereignisse in folgender Reihenfolge ausgegeben:

1. `blur`: wird gesendet, nachdem Element A den Fokus verliert.
2. `focusout`: wird nach dem `blur`-Ereignis gesendet.
3. `focus`: wird gesendet, nachdem Element B den Fokus erhält.
4. `focusin`: wird nach dem `focus`-Ereignis gesendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Event")}}-Basisschnittstelle
