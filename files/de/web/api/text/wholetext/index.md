---
title: "Text: wholeText-Eigenschaft"
short-title: wholeText
slug: Web/API/Text/wholeText
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ apiref("DOM") }}

Die schreibgeschützte **`wholeText`**-Eigenschaft der [`Text`](/de/docs/Web/API/Text)-Schnittstelle gibt den vollständigen Text aller logisch angrenzenden [`Text`](/de/docs/Web/API/Text)-Knoten des Knotens zurück. Der Text wird in Dokumentreihenfolge verkettet. Dies ermöglicht es, einen beliebigen Textknoten anzugeben und den gesamten angrenzenden Text als einen einzigen String zu erhalten.

> [!NOTE]
> Dies ist ähnlich wie ein Aufruf von [`Node.normalize()`](/de/docs/Web/API/Node/normalize), gefolgt vom Lesen des Textwertes, jedoch ohne den Baum zu verändern.

## Wert

Ein String mit dem verketteten Text.

## Beispiel

Angenommen, Sie haben den folgenden einfachen Absatz auf Ihrer Webseite:

```html
<p>
  Through-hiking is great!
  <strong>No insipid election coverage!</strong> However,
  <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a>
  is tricky.
</p>
```

Sie entscheiden, dass Ihnen der mittlere Satz nicht gefällt, also entfernen Sie ihn:

```js
const paragraph = document.querySelector("p"); // Reads the paragraph
paragraph.removeChild(paragraph.childNodes[1]); // Delete the strong element
```

Nun haben Sie _"Through-hiking is great! However, casting a ballot is tricky."_, mit zwei Knoten vor dem Hyperlink:

1. Ein [`Text`](/de/docs/Web/API/Text), der den String `"Through-hiking is great!"` enthält.
2. Ein zweiter `Text`-Knoten, der den String `" However, "` enthält.

Um diese zwei Knoten auf einmal zu erhalten, würden Sie `paragraph.childNodes[0].wholeText` aufrufen:

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // 'Through-hiking is great!   However, '
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Text`](/de/docs/Web/API/Text)-Schnittstelle, zu der sie gehört.
