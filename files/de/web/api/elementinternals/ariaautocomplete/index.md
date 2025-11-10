---
title: "ElementInternals: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/ElementInternals/ariaAutoComplete
l10n:
  sourceCommit: c1a15955a64fe6afa4a6226cbc034d994349afea
---

{{APIRef("Web Components")}}

Die **`ariaAutoComplete`**-Eigenschaft des [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Interfaces spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attributs wider. Dieses gibt an, ob die Eingabe von Text die Anzeige einer oder mehrerer Vorhersagen des vom Benutzer beabsichtigten Wertes für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen kann und legt fest, wie Vorhersagen präsentiert würden, falls sie gemacht werden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik für ein benutzerdefiniertes Element zu definieren. Diese können durch vom Autor definierte Attribute überschrieben werden, stellen jedoch sicher, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model-Erklärungsdokument](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer eine Eingabe macht, kann Text, der einen möglichen Abschluss der bereitgestellten Eingabe vorschlägt, dynamisch nach dem Caret eingefügt werden.
- `"list"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten.
- `"both"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten. Wenn angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der erforderlich ist, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Caret in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer eine Eingabe macht, wird keine automatische Vorschlagsanzeige angezeigt, die versucht vorherzusagen, wie der Benutzer die Eingabe abschließen möchte.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAutoComplete` auf "inline" gesetzt.

```js
class CustomControl extends HTMLElement {
  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.ariaAutoComplete = "inline";
  }
  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
