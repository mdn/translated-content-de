---
title: "ElementInternals: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/ElementInternals/ariaAutoComplete
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaAutoComplete`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attributs wider, welches angibt, ob die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Wertes eines Kombinationsfeldes, Suchfeldes oder Textfeldes auslösen könnte und spezifiziert, wie Vorhersagen präsentiert würden, falls sie gemacht werden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantiken auf einem benutzerdefinierten Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen aber sicher, dass die Standardsemantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model Explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer eine Eingabe macht, kann dynamisch Text eingefügt werden, der einen Vorschlag zur Vervollständigung der Eingabe liefert, nachdem der Kursor.
- `"list"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die Eingabe vervollständigen könnten.
- `"both"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die Eingabe vervollständigen könnten. Falls angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Kursor in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer eine Eingabe macht, gibt es keine Anzeige eines automatischen Vorschlags, der versucht, vorherzusagen, wie der Benutzer die Eingabe abschließen will.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAutoComplete` auf "inline" gesetzt.

```js
this.internals_.ariaAutoComplete = "inline";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
