---
title: "HTMLAnchorElement: Hash-Eigenschaft"
short-title: hash
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ APIRef("HTML DOM") }}

Die **`hash`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der ein `"#"` gefolgt vom Fragmentbezeichner des `href`-Attributs des `<a>`-Elements enthält. Falls die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft einen leeren String, `""`.

Siehe [`URL.hash`](/de/docs/Web/API/URL/hash) für weitere Informationen.

## Wert

Ein String.

## Beispiele

### Den Hash von einem Ankerlink abrufen

Gegeben folgendes HTML:

```html
<a id="myAnchor" href="/en-US/docs/Web/API/HTMLAnchorElement/hash#examples">
  Examples
</a>
```

können Sie den Hash des Ankers so abrufen:

```js
const anchor = document.getElementById("myAnchor");
anchor.hash; // '#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem die Eigenschaft gehört.
