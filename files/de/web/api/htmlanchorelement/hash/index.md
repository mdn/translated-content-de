---
title: "HTMLAnchorElement: hash-Eigenschaft"
short-title: hash
slug: Web/API/HTMLAnchorElement/hash
l10n:
  sourceCommit: 3e301467a02808e9fc488d7012f1f49eb66a5980
---

{{ APIRef("HTML DOM") }}

Die **`HTMLAnchorElement.hash`**-Eigenschaft gibt einen String zurück, der ein `'#'` gefolgt vom Fragment-Identifikator der URL enthält.

Das Fragment ist [prozent-codiert](/de/docs/Glossary/Percent-encoding). Wenn die URL keinen Fragment-Identifikator hat, enthält diese Eigenschaft einen leeren String, `""`.

## Wert

Ein String.

## Beispiele

### Abrufen des Hashs von einem Anker-Link

Bezogen auf dieses HTML

```html
<a id="myAnchor" href="/de/docs/Web/API/HTMLAnchorElement/hash#examples">
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

- Das {{domxref("HTMLAnchorElement")}} Interface, zu dem es gehört.
