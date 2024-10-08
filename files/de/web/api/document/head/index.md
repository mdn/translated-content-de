---
title: "Document: head-Eigenschaft"
short-title: head
slug: Web/API/Document/head
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("DOM")}}

Die **`head`** schreibgeschützte Eigenschaft der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt das {{HTMLElement("head")}}-Element des aktuellen Dokuments zurück.

## Wert

Ein [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement).

## Beispiele

```html
<!doctype html>
<head id="my-document-head">
  <title>Example: using document.head</title>
</head>

<script>
  const theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log(theHead === document.querySelector("head")); // true
</script>
```

## Anmerkungen

`document.head` ist schreibgeschützt. Der Versuch, dieser Eigenschaft einen Wert zuzuweisen, schlägt stillschweigend fehl oder wirft im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) einen {{jsxref("TypeError")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`document.body`](/de/docs/Web/API/Document/body)
