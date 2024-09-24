---
title: "Text: wholeText-Eigenschaft"
short-title: wholeText
slug: Web/API/Text/wholeText
l10n:
  sourceCommit: eebedad55b4974c4cebdc7c82a8dfddeeffb0ea6
---

{{ apiref("DOM") }}

Die schreibgeschützte **`wholeText`**-Eigenschaft der [`Text`](/de/docs/Web/API/Text)-Schnittstelle
gibt den gesamten Text aller [`Text`](/de/docs/Web/API/Text)-Knoten zurück, die logisch an den Knoten angrenzen.
Der Text wird in Dokument-Reihenfolge verkettet.
Dies ermöglicht es, einen beliebigen Textknoten anzugeben und den gesamten angrenzenden Text als eine einzelne Zeichenkette zu erhalten.

> [!NOTE]
> Dies ist ähnlich dem Aufruf von [`Node.normalize()`](/de/docs/Web/API/Node/normalize), gefolgt vom Lesen des Textwertes,
> jedoch ohne den Baum zu verändern.

## Wert

Eine Zeichenkette mit dem verketteten Text.

## Beispiel

Angenommen, Sie haben folgenden einfachen Absatz auf Ihrer Webseite:

```html
<p>
  Through-hiking is great!
  <strong>No insipid election coverage!</strong> However,
  <a href="https://en.wikipedia.org/wiki/Absentee_ballot">casting a ballot</a>
  is tricky.
</p>
```

Sie entscheiden sich, den mittleren Satz nicht mehr zu mögen, also entfernen Sie ihn:

```js
const paragraph = document.querySelector("p"); // Reads the paragraph
paragraph.removeChild(paragraph.childNodes[1]); // Delete the strong element
```

Nun endet der Text mit _"Through-hiking is great! However, casting a ballot is tricky."_, mit zwei Knoten vor dem Hyperlink:

1. Ein [`Text`](/de/docs/Web/API/Text), der die Zeichenkette `"Through-hiking is great!"` enthält.
2. Ein zweiter `Text`-Knoten, der die Zeichenkette `" However, "` enthält.

Um diese beiden Knoten auf einmal zu erhalten, würden Sie `paragraph.childNodes[0].wholeText` aufrufen:

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // 'Through-hiking is great!   However, '
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`Text`](/de/docs/Web/API/Text)-Schnittstelle, zu der es gehört.
