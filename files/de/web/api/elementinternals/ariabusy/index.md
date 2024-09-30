---
title: "ElementInternals: ariaBusy-Eigenschaft"
short-title: ariaBusy
slug: Web/API/ElementInternals/ariaBusy
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaBusy`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attributs wider, welches anzeigt, ob ein Element gerade modifiziert wird. Assistive Technologien möchten möglicherweise warten, bis die Modifikationen abgeschlossen sind, bevor sie den Benutzer darüber informieren.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken für ein benutzerdefiniertes Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantiken erhalten bleiben, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Das Element wird aktualisiert.
- `"false"`
  - : Es werden keine Updates für das Element erwartet.

## Beispiele

In diesem Beispiel wird der Wert von `ariaBusy` auf "true" gesetzt.

```js
this.internals_.ariaBusy = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
