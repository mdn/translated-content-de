---
title: "Location: hash-Eigenschaft"
short-title: hash
slug: Web/API/Location/hash
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{ APIRef("Location") }}

Die **`hash`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces gibt einen String zurück, der ein `'#'` enthält, gefolgt vom Fragmentbezeichner der URL – der ID auf der Seite, die die URL anvisieren möchte.

Das Fragment ist nicht [percent-codiert](/de/docs/Glossary/Percent-encoding). Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft einen leeren String, `""`.

## Wert

Ein String.

## Beispiele

```html
<a id="myAnchor" href="/en-US/docs/Location.href#examples">Examples</a>
<script>
  const anchor = document.getElementById("myAnchor");
  console.log(anchor.hash); // '#examples'
</script>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
