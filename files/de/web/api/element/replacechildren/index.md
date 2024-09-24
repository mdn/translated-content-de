---
title: "Element: replaceChildren()-Methode"
short-title: replaceChildren()
slug: Web/API/Element/replaceChildren
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`Element.replaceChildren()`**-Methode ersetzt die bestehenden Kinder eines {{domxref("Node")}} mit einem angegebenen neuen Satz von Kindern. Diese können Zeichenfolgen oder {{domxref("Node")}} Objekte sein.

## Syntax

```js-nolint
replaceChildren(param1)
replaceChildren(param1, param2)
replaceChildren(param1, param2, /* …, */ paramN)
```

### Parameter

- `param1`, …, `paramN`
  - : Ein Satz von {{domxref("Node")}} Objekten oder Zeichenfolgen, mit dem die vorhandenen Kinder des `Element` ersetzt werden sollen. Wenn keine Ersetzungsobjekte angegeben sind, wird das `Element` von allen Kindknoten geleert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` {{DOMxRef("DOMException")}}
  - : Wird ausgelöst, wenn die [Einschränkungen des Knotendiagramms](https://dom.spec.whatwg.org/#concept-node-tree) verletzt werden.

## Beispiele

### Leeren eines Knotens

`replaceChildren()` bietet eine sehr bequeme Möglichkeit, einen Knoten von allen seinen Kindern zu leeren. Sie rufen es beim übergeordneten Knoten ohne Angabe eines Arguments auf:

```js
myNode.replaceChildren();
```

### Übertragen von Knoten zwischen Elementen

`replaceChildren()` ermöglicht es Ihnen, Knoten zwischen Elementen einfach zu übertragen, ohne auf umfangreichen Schleifencode zurückgreifen zu müssen. Angenommen, wir haben eine einfache Anwendung, die es Ihnen ermöglicht, auszuwählen, welches Essen Sie für Ihre Party möchten. Dieses HTML könnte folgendermaßen aussehen:

```html
<h2>Party-Essensoptionen-Liste</h2>

<main>
  <div>
    <label for="no">Nein danke!</label>

    <select id="no" multiple size="10">
      <option>Äpfel</option>
      <option>Orangen</option>
      <option>Trauben</option>
      <option>Bananen</option>
      <option>Kiwi</option>
      <option>Schokoladenkekse</option>
      <option>Erdnusskekse</option>
      <option>Schokoladenriegel</option>
      <option>Schinkensandwiches</option>
      <option>Käsesandwiches</option>
      <option>Falafel-Sandwiches</option>
      <option>Eiscreme</option>
      <option>Gelee</option>
      <option>Karottensticks und Hummus</option>
      <option>Margherita-Pizza</option>
      <option>Pepperoni-Pizza</option>
      <option>Vegane Veggie-Pizza</option>
    </select>
  </div>

  <div class="buttons">
    <button id="to-yes">Zu "Ja" übertragen --&gt;</button>
    <button id="to-no">&lt;-- Zu "Nein" übertragen</button>
  </div>

  <div>
    <label for="yes">Ja bitte!</label>

    <select id="yes" multiple size="10"></select>
  </div>
</main>
```

Es wäre sinnvoll, einfaches CSS zu verwenden, um die beiden Auswahllisten in einer Linie nebeneinander anzuordnen, mit den Steuerungstasten dazwischen:

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

Wir wollen die ausgewählten Optionen in der "Nein"-Liste in die "Ja"-Liste übertragen, wenn die "Ja"-Taste gedrückt wird und umgekehrt die ausgewählten Optionen in der "Ja"-Liste in die "Nein"-Liste übertragen, wenn die "Nein"-Taste gedrückt wird.

Dafür geben wir jedem der Tasten einen Klick-Event-Handler, der die zu übertragenden ausgewählten Optionen in einer Konstante sammelt und die vorhandenen Optionen in der Liste, zu der Sie übertragen wollen, in einer anderen Konstante. Er ruft dann `replaceChildren()` bei der Liste auf, in die die Optionen übertragen werden sollen, und verwendet den Spread-Operator, um alle in beiden Konstanten enthaltenen Optionen zu übergeben.

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

Das Endergebnis sieht folgendermaßen aus:

{{EmbedLiveSample('Transferring_nodes_between_elements', '100%', '350')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.prepend()")}}
- {{domxref("Element.append()")}}
- {{domxref("NodeList")}}
