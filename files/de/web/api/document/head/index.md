---
title: "Dokument: head-Eigenschaft"
short-title: head
slug: Web/API/Document/head
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("DOM")}}

Die schreibgeschützte **`head`**-Eigenschaft des {{domxref("Document")}}-Interfaces gibt das {{HTMLElement("head")}}-Element des aktuellen Dokuments zurück.

## Wert

Ein {{domxref("HTMLHeadElement")}}.

## Beispiele

```html
<!doctype html>
<head id="my-document-head">
  <title>Beispiel: Verwendung von document.head</title>
</head>

<script>
  const theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log(theHead === document.querySelector("head")); // true
</script>
```

## Anmerkungen

`document.head` ist schreibgeschützt. Versuche, dieser Eigenschaft einen Wert zuzuweisen, schlagen entweder stillschweigend fehl oder führen im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) zu einem {{jsxref("TypeError")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("document.body")}}
