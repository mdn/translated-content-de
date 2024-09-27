---
title: "ElementInternals: ariaRequired-Eigenschaft"
short-title: ariaRequired
slug: Web/API/ElementInternals/ariaRequired
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaRequired`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required)-Attributs wider, das angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular gesendet werden kann.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, gewährleisten jedoch, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Für weitere Informationen siehe den [Accessibility Object Model Erklärungstext](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"true"`
  - : Benutzer müssen Eingaben auf einem Element vornehmen, bevor ein Formular abgesendet wird.
- `"false"`
  - : Benutzereingaben sind nicht erforderlich, um das Formular abzusenden.

## Beispiele

In diesem Beispiel wird der Wert von `ariaRequired` auf "true" gesetzt.

```js
this.internals_.ariaRequired = "true";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: textbox role](/de/docs/Web/Accessibility/ARIA/Roles/textbox_role)
