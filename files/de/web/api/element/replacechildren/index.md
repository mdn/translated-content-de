---
title: "Element: replaceChildren() Methode"
short-title: replaceChildren()
slug: Web/API/Element/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Element.replaceChildren()`** Methode ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) mit einem angegebenen neuen Satz von Kindern. Diese können Zeichenfolgen oder [`Node`](/de/docs/Web/API/Node) Objekte sein.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen, die die vorhandenen Kinder des `Element` ersetzen sollen. Wenn keine Ersetzungsobjekte angegeben werden, wird das `Element` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Einschränkungen des Knotendiagramms](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Einen Knoten leeren

`replaceChildren()` bietet einen sehr bequemen Mechanismus, um einen Knoten von all seinen Kindern zu leeren. Sie rufen es auf dem übergeordneten Knoten ohne Angabe eines Arguments auf:

```js
myNode.replaceChildren();
```

### Knoten zwischen Elementen übertragen

`replaceChildren()` ermöglicht es Ihnen, Knoten mühelos zwischen Elementen zu übertragen, ohne auf umständlichen Schleifencode zurückgreifen zu müssen. Angenommen, wir haben eine einfache Anwendung, die Ihnen erlaubt, auszuwählen, welches Essen Sie für Ihre Party möchten. Dieses HTML könnte ungefähr so aussehen:

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

Es wäre sinnvoll, ein einfaches CSS zu verwenden, um die beiden Auswahllisten nebeneinander anzuordnen, mit den Steuerungstasten dazwischen:

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

Was wir tun möchten, ist, alle ausgewählten Optionen in der "nein" Liste in die "ja" Liste zu übertragen, wenn die "ja" Taste gedrückt wird, und alle ausgewählten Optionen in der "ja" Liste in die "nein" Liste zu übertragen, wenn die "nein" Taste gedrückt wird.

Um dies zu tun, geben wir jeder der Schaltflächen einen Klick-Ereignishandler, der die ausgewählten Optionen, die Sie übertragen möchten, in einer Konstante zusammenfasst, und die vorhandenen Optionen in der Liste, zu der Sie übertragen, in einer anderen Konstante. Dann wird `replaceChildren()` auf der Liste aufgerufen, zu der Sie die Optionen übertragen möchten, und der Spread-Operator wird verwendet, um alle in beiden Konstanten enthaltenen Optionen zu übergeben.

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
