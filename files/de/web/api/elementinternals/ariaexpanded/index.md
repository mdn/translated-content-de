---
title: "ElementInternals: ariaExpanded-Eigenschaft"
short-title: ariaExpanded
slug: Web/API/ElementInternals/ariaExpanded
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaExpanded`**-Eigenschaft der {{domxref("ElementInternals")}}-Schnittstelle spiegelt den Wert des [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)-Attributs wider, welches angibt, ob ein von diesem Element besessenes oder gesteuertes Gruppierungselement erweitert oder eingeklappt ist.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken für ein benutzerdefiniertes Element zu definieren. Diese können von den vom Autor definierten Attributen überschrieben werden, aber stellen Sie sicher, dass die Standard-Semantiken erhalten bleiben, falls der Autor diese Attribute löscht oder gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model-Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist erweitert.
- `"false"`
  - : Das Gruppierungselement, das dieses Element besitzt oder steuert, ist eingeklappt.
- `"undefined"`
  - : Das Element besitzt oder steuert kein Gruppierungselement, das erweiterbar ist.

## Beispiele

In diesem Beispiel wird der Wert von `ariaExpanded` auf "true" gesetzt.

```js
this.internals_.ariaExpanded = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
