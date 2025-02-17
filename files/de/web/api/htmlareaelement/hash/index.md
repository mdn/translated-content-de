---
title: "HTMLAreaElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/HTMLAreaElement/hash
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ APIRef("HTML DOM") }}

Die **`hash`**-Eigenschaft der Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) ist ein String, der ein `"#"` gefolgt vom Fragmentidentifikator des `href`-Attributs des `<area>`-Elements enthält. Wenn die URL keinen Fragmentidentifikator hat, enthält diese Eigenschaft einen leeren String, `""`.

Weitere Informationen finden Sie unter [`URL.hash`](/de/docs/Web/API/URL/hash).

## Wert

Ein String.

## Beispiele

### Den Hash eines Area-Links abrufen

Angenommen, dieses HTML:

```html
<map name="infographic">
  <area
    id="mdn-circle"
    shape="circle"
    coords="130,136,60"
    href="https://developer.mozilla.org/#ExampleSection"
    alt="MDN" />
</map>

<img
  usemap="#infographic"
  src="/media/examples/mdn-info.png"
  alt="MDN infographic" />
```

Dann können Sie den Hash des Area-Links so abrufen:

```js
const area = document.getElementById("mdn-circle");
area.hash; // '#ExampleSection'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement), zu der sie gehört.
