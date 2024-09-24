---
title: "HTMLLinkElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLLinkElement/href
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`href`**-Eigenschaft der {{domxref("HTMLLinkElement")}}-Schnittstelle enthält einen String, der die URL mit dem Link verknüpft.

Sie spiegelt das `href`-Attribut des {{HTMLElement("link")}}-Elements wider. Falls das Element kein `href`-Attribut hat, ist der Wert dieser Eigenschaft der leere String (`""`).

> [!NOTE]
> Jedes `<link>`-Element muss entweder eines oder beide der `href`- oder [`imagesrcset`](/de/docs/Web/HTML/Element/link#imagesrcset)-Attribute enthalten. Das bedeutet, für jedes gültige `<link>` wird entweder diese Eigenschaft oder {{domxref("HTMLLinkElement.imageSrcset", "imageSrcset")}} nicht leer sein.

## Wert

Ein String, der eine URL enthält, oder der leere String (`""`), wenn kein `href`-Element vorhanden ist.

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

- {{domxref("HTMLLinkElement.imageSrcset")}}-Eigenschaft
- {{domxref("HTMLAnchorElement.href")}}-Eigenschaft
