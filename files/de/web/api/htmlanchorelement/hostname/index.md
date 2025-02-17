---
title: "HTMLAnchorElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/HTMLAnchorElement/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`hostname`**-Eigenschaft der Schnittstelle [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) ist ein String, der entweder den {{Glossary("domain_name", "Domainnamen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} des `href`-Attributs des `<a>`-Elements enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IPv4- und IPv6-Adressen werden normalisiert, z. B. durch das Entfernen führender Nullen, und Domainnamen werden in [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) umgewandelt.

Details hierzu finden Sie unter [`URL.hostname`](/de/docs/Web/API/URL/hostname).

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.hostname; // returns 'developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement), zu der sie gehört.
