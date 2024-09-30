---
title: "FocusEvent: relatedTarget-Eigenschaft"
short-title: relatedTarget
slug: Web/API/FocusEvent/relatedTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`relatedTarget`**-Eigenschaft des [`FocusEvent`](/de/docs/Web/API/FocusEvent)-Interfaces ist das sekundäre Ziel, abhängig von der Art des Ereignisses:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Ereignisname</th>
      <th scope="col"><code>target</code></th>
      <th scope="col"><code>relatedTarget</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`blur`](/de/docs/Web/API/Element/blur_event)</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus verliert</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus erhält (falls vorhanden).</td>
    </tr>
    <tr>
      <td>[`focus`](/de/docs/Web/API/Element/focus_event)</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus erhält</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus verliert (falls vorhanden)</td>
    </tr>
    <tr>
      <td>[`focusin`](/de/docs/Web/API/Element/focusin_event)</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus erhält</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus verliert (falls vorhanden)</td>
    </tr>
    <tr>
      <td>[`focusout`](/de/docs/Web/API/Element/focusout_event)</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus verliert</td>
      <td>Das [`EventTarget`](/de/docs/Web/API/EventTarget), das den Fokus erhält (falls vorhanden)</td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass [viele Elemente keinen Fokus erhalten können](https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495), was ein häufiger Grund dafür ist, dass `relatedTarget` `null` ist. `relatedTarget` kann auch aus Sicherheitsgründen auf `null` gesetzt sein, beispielsweise beim Wechseln zwischen Tabs auf oder von einer Seite.

[`MouseEvent.relatedTarget`](/de/docs/Web/API/MouseEvent/relatedTarget) ist eine ähnliche Eigenschaft für Mausereignisse.

## Wert

Eine Instanz von [`EventTarget`](/de/docs/Web/API/EventTarget).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`FocusEvent`](/de/docs/Web/API/FocusEvent)
