---
title: "Location: hash-Eigenschaft"
short-title: hash
slug: Web/API/Location/hash
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{ APIRef("Location") }}

Die **`hash`**-Eigenschaft der {{domxref("Location")}}-Schnittstelle gibt eine Zeichenkette zurück, die ein `'#'` gefolgt von dem Fragmentbezeichner der URL enthält — die ID auf der Seite, auf die die URL abzielt.

Das Fragment wird nicht {{Glossary("Percent-encoding", "percent-kodiert")}}. Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft eine leere Zeichenkette, `""`.

## Wert

Eine Zeichenkette.

## Beispiele

```html
<a id="myAnchor" href="/de/docs/Location.href#examples">Examples</a>
<script>
  const anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // '#examples'
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
