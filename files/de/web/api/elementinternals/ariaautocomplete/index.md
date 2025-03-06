---
title: "ElementInternals: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/ElementInternals/ariaAutoComplete
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("Web Components")}}

Die **`ariaAutoComplete`**-Eigenschaft der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attributs wider, welches angibt, ob die Eingabe von Text die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts des Benutzers für eine Kombinationsbox, Suchbox oder Textbox auslösen könnte und wie Vorhersagen präsentiert werden würden, falls sie erstellt werden.

> [!NOTE]
> Das Setzen von aria-Attributen auf `ElementInternals` ermöglicht es, Standardsemantik auf einem benutzerdefinierten Element zu definieren. Diese können durch benutzerdefinierte Attribute überschrieben werden, gewährleisten jedoch, dass die Standardsemantik erhalten bleibt, falls der Autor diese Attribute löscht oder gar nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model erklärt](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer eine Eingabe macht, kann Text, der eine Möglichkeit vorgeschlägt, die eingegebene Eingabe zu vervollständigen, dynamisch hinter dem Cursor eingefügt werden.
- `"list"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die eingegebene Eingabe vervollständigen könnten.
- `"both"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die eingegebene Eingabe vervollständigen könnten. Falls angezeigt, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint hinter dem Cursor in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer eine Eingabe macht, wird keine automatische Vorschlagsanzeige angezeigt, die versucht vorherzusagen, wie der Benutzer die Eingabe beabsichtigt zu vervollständigen.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAutoComplete` auf "inline" gesetzt.

```js
this.internals_.ariaAutoComplete = "inline";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
