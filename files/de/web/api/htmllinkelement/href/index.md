---
title: "HTMLLinkElement: href-Eigenschaft"
short-title: href
slug: Web/API/HTMLLinkElement/href
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`href`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces enthält einen String, der die URL ist, die mit dem Link verbunden ist.

Sie spiegelt das `href`-Attribut des {{HTMLElement("link")}}-Elements wider. Wenn das Element kein `href`-Attribut hat, ist der Wert dieser Eigenschaft der leere String (`""`).

> [!NOTE]
> Jedes `<link>`-Element muss entweder das `href`- oder das [`imagesrcset`](/de/docs/Web/HTML/Element/link#imagesrcset)-Attribut oder beide enthalten. Das bedeutet, dass für jedes gültige `<link>`-Element entweder diese Eigenschaft oder [`imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset) nicht leer sein wird.

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

- [`HTMLLinkElement.imageSrcset`](/de/docs/Web/API/HTMLLinkElement/imageSrcset) Eigenschaft
- [`HTMLAnchorElement.href`](/de/docs/Web/API/HTMLAnchorElement/href) Eigenschaft
