---
title: "HTMLSlotElement: name-Eigenschaft"
short-title: name
slug: Web/API/HTMLSlotElement/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Shadow DOM API")}}

Die **`name`**-Eigenschaft des [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)-Interfaces gibt den Slot-Namen zurück oder legt diesen fest. Ein Slot ist ein Platzhalter innerhalb eines Web-Components, den Benutzer mit ihrem eigenen Markup füllen können.

## Wert

Ein Zeichenfolge.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [slotchange-Beispiel](https://github.com/mdn/web-components-examples/tree/main/slotchange) ([Live-Demo ansehen](https://mdn.github.io/web-components-examples/slotchange/)).

```js
let slots = this.shadowRoot.querySelectorAll("slot");
slots[1].addEventListener("slotchange", (e) => {
  let nodes = slots[1].assignedNodes();
  console.log(
    `Element in Slot "${slots[1].name}" changed to "${nodes[0].outerHTML}".`,
  );
});
```

Hier greifen wir auf Verweise auf alle Slots zu und fügen dann einen `slotchange`-Ereignis-Listener zum zweiten Slot im Template hinzu – dies ist derjenige, dessen Inhalte im Beispiel ständig geändert werden.

Jedes Mal, wenn sich das Element im Slot ändert, protokollieren wir einen Bericht in der Konsole, der angibt, welcher Slot sich geändert hat und welches das neue Node im Slot ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
