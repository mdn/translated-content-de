---
title: "HTMLLinkElement: hreflang-Eigenschaft"
short-title: hreflang
slug: Web/API/HTMLLinkElement/hreflang
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{APIRef("HTML DOM")}}

Die **`hreflang`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces wird verwendet, um die Sprache und die geografische Zielausrichtung einer Seite anzuzeigen. Dieser Hinweis kann von Browsern verwendet werden, um die geeignetere Seite auszuwählen oder um das {{Glossary("SEO", "SEO")}} zu verbessern.

Sie spiegelt das `hreflang`-Attribut des {{HTMLElement("link")}}-Elements wider und ist der leere String (`""`), wenn kein `hreflang`-Attribut vorhanden ist.

## Wert

Ein String, der ein Sprach-Tag enthält, oder der leere String (`""`), wenn kein `hreflang`-Attribut vorhanden ist.

## Beispiel

```html
<link
  rel="alternate"
  href="www.example.com/fr/html"
  hreflang="fr"
  type="text/html"
  title="French HTML" />
<p class="tag"></p>
```

```css
.tag {
  margin-left: 20px;
  font-weight: bold;
  font-size: 24px;
}
```

```js
const myLink = document.querySelector("link");
const pTag = document.querySelector(".tag");
pTag.textContent = myLink.hreflang;
```

## Ergebnisse

{{EmbedLiveSample("Example",100,100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLAnchorElement.hreflang`](/de/docs/Web/API/HTMLAnchorElement/hreflang)-Eigenschaft
