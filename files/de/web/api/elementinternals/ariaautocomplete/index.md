---
title: "ElementInternals: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/ElementInternals/ariaAutoComplete
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaAutoComplete`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals) Interface spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attributs wider, das angibt, ob das Eingeben von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und wie die Vorhersagen dargestellt würden, wenn sie gemacht würden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` erlaubt es, Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können von autorendefinierten Attributen überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder sie gar nicht erst hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Erklärer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer eine Eingabe macht, kann Text, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingabe vorschlägt, dynamisch nach dem Cursor eingefügt werden.
- `"list"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element mit einer Sammlung von Werten angezeigt werden, die die bereitgestellte Eingabe vervollständigen könnten.
- `"both"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element mit einer Sammlung von Werten angezeigt werden, die die bereitgestellte Eingabe vervollständigen könnten. Wird es angezeigt, wird automatisch ein Wert in der Sammlung ausgewählt und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Cursor in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer eine Eingabe macht, gibt es keine Anzeige eines automatischen Vorschlags, der versucht, vorherzusagen, wie der Benutzer die Eingabe vervollständigen möchte.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAutoComplete` auf "inline" gesetzt.

```js
this.internals_.ariaAutoComplete = "inline";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
