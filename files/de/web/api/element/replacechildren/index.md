---
title: "Element: replaceChildren()-Methode"
short-title: replaceChildren()
slug: Web/API/Element/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Element.replaceChildren()`**-Methode ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch einen bestimmten neuen Satz von Kindern. Diese können Zeichenfolgen oder [`Node`](/de/docs/Web/API/Node)-Objekte sein.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Ein Satz von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen, mit denen die vorhandenen Kinder des `Element` ersetzt werden sollen. Wenn keine Ersetzungsobjekte angegeben sind, wird das `Element` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Beschränkungen des Knotenbaums](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Einen Knoten leeren

`replaceChildren()` bietet einen sehr bequemen Mechanismus, um einen Knoten von all seinen Kindern zu leeren. Sie rufen es am übergeordneten Knoten ohne Argumente auf:

```js
myNode.replaceChildren();
```

### Knoten zwischen Elementen verschieben

`replaceChildren()` ermöglicht es Ihnen, Knoten leicht zwischen Elementen zu verschieben, ohne auf umständlichen Schleifencode zurückgreifen zu müssen. Angenommen, wir haben eine einfache Anwendung, die es Ihnen ermöglicht, auszuwählen, welches Essen Sie für Ihre Party möchten. Dieses HTML könnte so aussehen:

```html
<h2>Party food option list</h2>

<main>
  <div>
    <label for="no">No thanks!</label>

    <select id="no" multiple size="10">
      <option>Apples</option>
      <option>Oranges</option>
      <option>Grapes</option>
      <option>Bananas</option>
      <option>Kiwi fruits</option>
      <option>Chocolate cookies</option>
      <option>Peanut cookies</option>
      <option>Chocolate bars</option>
      <option>Ham Sandwiches</option>
      <option>Cheese Sandwiches</option>
      <option>Falafel sandwiches</option>
      <option>Ice cream</option>
      <option>Jelly</option>
      <option>Carrot sticks and hummus</option>
      <option>Margherita pizza</option>
      <option>Pepperoni pizza</option>
      <option>Vegan veggie pizza</option>
    </select>
  </div>

  <div class="buttons">
    <button id="to-yes">Transfer to "Yes" --&gt;</button>
    <button id="to-no">&lt;-- Transfer to "No"</button>
  </div>

  <div>
    <label for="yes">Yes please!</label>

    <select id="yes" multiple size="10"></select>
  </div>
</main>
```

Es würde sinnvoll sein, etwas einfaches CSS zu verwenden, um die beiden Auswahllisten in einer Zeile nebeneinander anzuordnen, mit den Steuertasten dazwischen:

```css
main {
  display: flex;
}

div {
  margin-right: 20px;
}

label,
button {
  display: block;
}

.buttons {
  display: flex;
  flex-flow: column;
  justify-content: center;
}

select {
  width: 200px;
}
```

Was wir tun wollen, ist, alle ausgewählten Optionen in der "Nein"-Liste zur "Ja"-Liste zu übertragen, wenn die "Ja"-Taste gedrückt wird, und alle ausgewählten Optionen in der "Ja"-Liste zur "Nein"-Liste zu übertragen, wenn die "Nein"-Taste gedrückt wird.

Dazu geben wir jedem der Tasten einen Klick-Ereignishandler, der die ausgewählten Optionen, die Sie übertragen möchten, in einer Konstanten und die vorhandenen Optionen in der Liste, zu der Sie übertragen, in einer anderen Konstante sammelt. Dann ruft er `replaceChildren()` auf der Liste auf, zu der Sie die Optionen übertragen, und verwendet den Spread-Operator, um alle Optionen in beiden Konstanten zu übergeben.

```js
const noSelect = document.getElementById("no");
const yesSelect = document.getElementById("yes");
const noBtn = document.getElementById("to-no");
const yesBtn = document.getElementById("to-yes");

yesBtn.addEventListener("click", () => {
  const selectedTransferOptions =
    document.querySelectorAll("#no option:checked");
  const existingYesOptions = document.querySelectorAll("#yes option");
  yesSelect.replaceChildren(...selectedTransferOptions, ...existingYesOptions);
});

noBtn.addEventListener("click", () => {
  const selectedTransferOptions = document.querySelectorAll(
    "#yes option:checked",
  );
  const existingNoOptions = document.querySelectorAll("#no option");
  noSelect.replaceChildren(...selectedTransferOptions, ...existingNoOptions);
});
```

Das Endergebnis sieht so aus:

{{EmbedLiveSample('Transferring_nodes_between_elements', '100%', '350')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
- [`Element.append()`](/de/docs/Web/API/Element/append)
- [`NodeList`](/de/docs/Web/API/NodeList)
