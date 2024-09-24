---
title: "ElementInternals: ariaAutoComplete-Eigenschaft"
short-title: ariaAutoComplete
slug: Web/API/ElementInternals/ariaAutoComplete
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("Web Components")}}

Die **`ariaAutoComplete`**-Eigenschaft des {{domxref("ElementInternals")}}-Interfaces spiegelt den Wert des [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete)-Attributs wider. Dieses Attribut gibt an, ob die Eingabe von Text die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts eines Benutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und spezifiziert, wie Vorhersagen angezeigt würden, wenn sie gemacht werden.

> [!NOTE]
> Das Setzen von ARIA-Attributen auf `ElementInternals` ermöglicht es, Standard-Semantiken auf einem benutzerdefinierten Element zu definieren. Diese können von vom Autor definierten Attributen überschrieben werden, gewährleisten jedoch, dass die Standard-Semantiken beibehalten werden, falls der Autor diese Attribute löscht oder sie überhaupt nicht hinzufügt. Weitere Informationen finden Sie im [Accessibility Object Model explainer](https://wicg.github.io/aom/explainer.html#default-semantics-for-custom-elements-via-the-elementinternals-object).

## Wert

Ein String mit einem der folgenden Werte:

- `"inline"`
  - : Wenn ein Benutzer eine Eingabe macht, kann Text, der eine Möglichkeit zur Vervollständigung der bereitgestellten Eingabe vorschlägt, dynamisch nach dem Caret eingefügt werden.
- `"list"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten.
- `"both"`
  - : Wenn ein Benutzer eine Eingabe macht, kann ein Element angezeigt werden, das eine Sammlung von Werten enthält, die die bereitgestellte Eingabe vervollständigen könnten. Wenn es angezeigt wird, wird ein Wert in der Sammlung automatisch ausgewählt, und der Text, der benötigt wird, um den automatisch ausgewählten Wert zu vervollständigen, erscheint nach dem Caret in der Eingabe.
- `"none"`
  - : Wenn ein Benutzer eine Eingabe macht, gibt es keine Anzeige eines automatischen Vorschlags, der versucht vorherzusagen, wie der Benutzer die Eingabe vervollständigen möchte.

## Beispiele

In diesem Beispiel wird der Wert von `ariaAutoComplete` auf "inline" gesetzt.

```js
this.internals_.ariaAutoComplete = "inline";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
