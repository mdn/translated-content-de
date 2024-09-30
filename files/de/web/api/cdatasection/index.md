---
title: CDATASection
slug: Web/API/CDATASection
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}

Die **`CDATASection`**-Schnittstelle repräsentiert einen CDATA-Abschnitt, der innerhalb von XML verwendet werden kann, um erweiterte Abschnitte von nicht entwertetem Text einzuschließen. Innerhalb eines CDATA-Abschnitts müssen die Symbole `<` und `&` nicht, wie normalerweise üblich, entwertet werden.

In XML sieht ein CDATA-Abschnitt wie folgt aus:

```xml
<![CDATA[ … ]]>
```

Zum Beispiel:

```xml
<foo>
  Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.
</foo>
```

Die einzige Sequenz, die innerhalb eines CDATA-Abschnitts nicht erlaubt ist, ist die Abschlusssequenz des CDATA-Abschnitts selbst, `]]>`.

> [!NOTE]
> CDATA-Abschnitte sollten nicht innerhalb von HTML verwendet werden, da sie als Kommentare betrachtet und nicht angezeigt werden.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle hat keine spezifischen Eigenschaften und implementiert diejenigen ihres Elternteils [`Text`](/de/docs/Web/API/Text)._

## Instanzmethoden

_Diese Schnittstelle hat keine spezifischen Methoden und implementiert diejenigen ihres Elternteils [`Text`](/de/docs/Web/API/Text)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createCDATASection()`](/de/docs/Web/API/Document/createCDATASection)
