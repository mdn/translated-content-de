---
title: CDATASection
slug: Web/API/CDATASection
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}

Die **`CDATASection`**-Schnittstelle repräsentiert einen CDATA-Abschnitt, der im XML verwendet werden kann, um erweiterte Abschnitte von nicht entwertetem Text einzuschließen. Innerhalb eines CDATA-Abschnitts müssen die Symbole `<` und `&` nicht wie normalerweise entwertet werden.

In XML sieht ein CDATA-Abschnitt folgendermaßen aus:

```xml
<![CDATA[ … ]]>
```

Zum Beispiel:

```xml
<foo>
  Hier ist ein CDATA-Abschnitt: <![CDATA[ < > & ]]> mit allen Arten von nicht entwertetem Text.
</foo>
```

Die einzige Sequenz, die innerhalb eines CDATA-Abschnitts nicht erlaubt ist, ist die abschließende Sequenz eines CDATA-Abschnitts selbst, `]]>`.

> [!NOTE]
> CDATA-Abschnitte sollten nicht innerhalb von HTML verwendet werden, da sie als Kommentare betrachtet werden und nicht angezeigt werden.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine spezifischen Eigenschaften und implementiert die ihres Elternteils {{DOMxRef("Text")}}._

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden und implementiert die ihres Elternteils {{DOMxRef("Text")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.createCDATASection()")}}
