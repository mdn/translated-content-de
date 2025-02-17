---
title: "HTMLAreaElement: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/HTMLAreaElement/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`hostname`**-Eigenschaft des [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interfaces ist ein String, der entweder den {{Glossary("domain_name", "Domain-Namen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} der URL des `<area>`-Elements enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IPv4- und IPv6-Adressen werden normalisiert, beispielsweise durch das Entfernen führender Nullen, und Domain-Namen werden in [IDN](https://de.wikipedia.org/wiki/Internationalized_Domain_Name) umgewandelt.

Weitere Informationen finden Sie unter [`URL.hostname`](/de/docs/Web/API/URL/hostname).

## Wert

Ein String, der die Domain der mit dem `area`-Element verbundenen URL enthält.  
Diese Eigenschaft kann sowohl als Setter als auch als Getter verwendet werden.

## Beispiele

```html
<textarea id="log" rows="4" cols="100"></textarea>
<map name="infographic">
  <area
    id="area1"
    shape="rect"
    coords="184,6,253,27"
    href="/en-US/docs/HTMLAreaElement"
    target="_blank"
    alt="Mozilla" />
  <area
    id="area2"
    shape="circle"
    coords="130,136,60"
    href="https://coolexample.com/"
    target="_blank"
    alt="MDN" />
</map>
```

```js
// An element is in the document
const area1 = document.getElementById("area1");
const area2 = document.getElementById("area2");

const log = document.getElementById("log");
log.textContent = `area1 hostname: ${area1.hostname} \n`; // 'developer.mozilla.org'
log.textContent += `area2 hostname: ${area2.hostname}`; // 'coolexample.com'
```

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface, zu dem es gehört.
