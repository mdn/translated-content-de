---
title: "HTMLLinkElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLLinkElement/href
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`href`**-Eigenschaft der [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Schnittstelle enthält einen String, der die URL darstellt, die mit dem Link verknüpft ist.

Sie spiegelt das `href`-Attribut des {{HTMLElement("link")}}-Elements wider. Wenn das Element kein `href`-Attribut hat, ist der Wert dieser Eigenschaft der leere String (`""`).

> [!NOTE]
> Jedes `<link>`-Element muss entweder eines oder beide der Attribute `href` oder [`imagesrcset`](/de/docs/Web/HTML/Reference/Elements/link#imagesrcset) enthalten. Das bedeutet, für jedes gültige `<link>` ist entweder diese Eigenschaft oder [`imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imagesrcset) nicht leer.

## Wert

Ein String, der eine URL enthält, oder der leere String (`""`), wenn es kein `href`-Element gibt.

## Beispiele

```html
<link rel="stylesheet" href="example.css" />
```

```js
const link = document.getElementsByTag("link")[0];
console.log(link.href); // 'example.css'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imagesrcset)-Eigenschaft
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href)-Eigenschaft
