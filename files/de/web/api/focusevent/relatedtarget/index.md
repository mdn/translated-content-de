---
title: "FocusEvent: relatedTarget-Eigenschaft"
short-title: relatedTarget
slug: Web/API/FocusEvent/relatedTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("UI Events")}}

Die **`relatedTarget`** schreibgeschützte Eigenschaft der {{domxref("FocusEvent")}}-Schnittstelle ist das sekundäre Ziel, je nach Typ des Ereignisses:

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
      <td>{{domxref("Element/blur_event", "blur")}}</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus verliert</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus erhält (falls vorhanden).</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focus_event", "focus")}}</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus erhält</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus verliert (falls vorhanden)</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focusin_event", "focusin")}}</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus erhält</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus verliert (falls vorhanden)</td>
    </tr>
    <tr>
      <td>{{domxref("Element/focusout_event", "focusout")}}</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus verliert</td>
      <td>Das {{domxref("EventTarget")}}, das den Fokus erhält (falls vorhanden)</td>
    </tr>
  </tbody>
</table>

Beachten Sie, dass [viele Elemente keinen Fokus haben können](https://stackoverflow.com/questions/42764494/blur-event-relatedtarget-returns-null/42764495), was ein häufiger Grund dafür ist, dass `relatedTarget` `null` sein kann. `relatedTarget` kann auch aus Sicherheitsgründen auf `null` gesetzt sein, beispielsweise beim Wechseln in oder aus einer Seite.

{{domxref("MouseEvent.relatedTarget")}} ist eine ähnliche Eigenschaft für Mausereignisse.

## Wert

Eine Instanz von {{domxref("EventTarget")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("FocusEvent") }}
