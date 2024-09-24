---
title: "Text: wholeText-Eigenschaft"
short-title: wholeText
slug: Web/API/Text/wholeText
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{ apiref("DOM") }}

Die schreibgeschützte **`wholeText`**-Eigenschaft der {{domxref("Text")}}-Schnittstelle
gibt den vollständigen Text aller {{domxref("Text")}}-Knoten zurück, die logisch an den Knoten angrenzen.
Der Text wird in Dokumentreihenfolge verkettet.
Dies ermöglicht es, einen beliebigen Textknoten anzugeben und alle angrenzenden Texte als einzelnen String zu erhalten.

> [!NOTE]
> Dies ist ähnlich wie ein Aufruf von {{domxref("Node.normalize()")}} gefolgt von einem Lesen des Textwertes,
> jedoch ohne den Baum zu verändern.

## Wert

Ein String mit dem verketteten Text.

## Beispiel

Angenommen, Sie haben den folgenden einfachen Absatz auf Ihrer Webseite:

```html
<p>
  Durch-wandern ist großartig!
  <strong>Keine fade Wahlberichterstattung!</strong> Jedoch,
  <a href="https://en.wikipedia.org/wiki/Absentee_ballot">ist das Wählen</a>
  schwierig.
</p>
```

Sie entscheiden, dass Ihnen der mittlere Satz nicht gefällt, also entfernen Sie ihn:

```js
const paragraph = document.querySelector("p"); // Liest den Absatz
paragraph.removeChild(paragraph.childNodes[1]); // Löscht das strong-Element
```

Jetzt haben Sie _"Durch-wandern ist großartig! Jedoch, ist das Wählen schwierig."_, mit zwei Knoten vor dem Hyperlink:

1. Ein {{domxref("Text")}}-Knoten, der den String `"Durch-wandern ist großartig!"` enthält
2. Ein zweiter `Text`-Knoten, der den String `" Jedoch, "` enthält

Um diese beiden Knoten auf einmal zu erhalten, würden Sie `paragraph.childNodes[0].wholeText` aufrufen:

```js
console.log(`'${paragraph.childNodes[0].wholeText}'`); // 'Durch-wandern ist großartig!   Jedoch, '
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("Text")}}-Schnittstelle, zu der es gehört.
