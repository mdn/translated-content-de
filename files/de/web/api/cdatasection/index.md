---
title: CDATASection
slug: Web/API/CDATASection
l10n:
  sourceCommit: 327710f973e1d6d1cad19faac9a95134c6027d08
---

{{APIRef("DOM")}}

Die **`CDATASection`**-Schnittstelle repräsentiert einen CDATA-Abschnitt,
der innerhalb von XML verwendet werden kann, um erweiterte Teile von nicht-escapedem Text einzuschließen.
Innerhalb eines CDATA-Abschnitts müssen die Symbole `<` und `&` nicht wie gewöhnlich escaped werden.

In XML sieht ein CDATA-Abschnitt folgendermaßen aus:

```xml
<![CDATA[ … ]]>
```

Zum Beispiel:

```xml
<foo>
  Here is a CDATA section: <![CDATA[ < > & ]]> with all kinds of unescaped text.
</foo>
```

Die einzige Sequenz, die innerhalb eines CDATA-Abschnitts nicht erlaubt ist, ist die Abschlusssequenz
des CDATA-Abschnitts selbst, `]]>`.

> [!NOTE]
> CDATA-Abschnitte sollten nicht innerhalb von HTML verwendet werden. Sie werden als Kommentare betrachtet und nicht angezeigt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine spezifischen Eigenschaften und implementiert die ihres Elternteils
[`Text`](/de/docs/Web/API/Text)._

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden und implementiert die ihres Elternteils
[`Text`](/de/docs/Web/API/Text)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.createCDATASection()`](/de/docs/Web/API/Document/createCDATASection)
