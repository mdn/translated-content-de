---
title: "Attr: name-Eigenschaft"
short-title: name
slug: Web/API/Attr/name
l10n:
  sourceCommit: 76600240fbe75e083e964bc3707cce81e99999c2
---

{{APIRef("DOM")}}

Die schreibgeschützte **`name`**-Eigenschaft der {{domxref("Attr")}}-Schnittstelle gibt den _qualifizierten Namen_ eines Attributs zurück, das heißt den Namen des Attributs mit dem Namensraum-Präfix, falls vorhanden, davor. Zum Beispiel, wenn der lokale Name `lang` und das Namensraum-Präfix `xml` ist, ist der zurückgegebene qualifizierte Name `xml:lang`.

Der qualifizierte Name ist immer in Kleinbuchstaben, unabhängig von der Großschreibung bei der Erstellung des Attributs.

## Wert

Ein String, der den qualifizierten Namen des Attributs darstellt.

## Beispiel

Das folgende Beispiel zeigt den qualifizierten Namen des ersten Attributs der ersten beiden Elemente an, wenn wir auf den entsprechenden Button klicken.

### HTML

```html
<svg xml:lang="en-US" class="struct" height="1" width="1">Klicken Sie hier</svg>
<label xml:lang="en-US" class="struct"></label>

<p>
  <button>Wert für &lt;svg&gt; anzeigen</button>
  <button>Wert für &lt;label&gt; anzeigen</button>
</p>

<p>
  Qualifizierter Name des Attributs <code>xml:lang</code>:
  <output id="result">Keine.</output>
</p>
```

### JavaScript

```js
const elements = document.querySelectorAll(".struct");
const buttons = document.querySelectorAll("button");
const outputEl = document.querySelector("#result");

let i = 0;
for (const button of buttons) {
  const element = elements[i];
  button.addEventListener("click", () => {
    const attribute = element.attributes[0];
    outputEl.value = attribute.name;
  });
  i++;
}
```

{{ EmbedLiveSample('Example','100%',100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Eigenschaften {{domxref("Attr.localName")}}, welche den lokalen Teil des qualifizierten Namens des Attributs zurückgibt, und {{domxref("Attr.prefix")}}, das Namensraum-Präfix.
- Die {{domxref("Element.tagName()")}}-Eigenschaft, die den qualifizierten Namen eines {{domxref("Element")}} zurückgibt.
