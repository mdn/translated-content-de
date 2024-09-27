---
title: CDATASection
slug: Web/API/CDATASection
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("DOM")}}

Die **`CDATASection`**-Schnittstelle repräsentiert einen CDATA-Abschnitt, der innerhalb von XML verwendet werden kann, um größere Textteile ohne Escape-Zeichen einzuschließen. Innerhalb eines CDATA-Abschnitts müssen die Symbole `<` und `&` nicht wie üblich maskiert werden.

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

Die einzige Sequenz, die innerhalb eines CDATA-Abschnitts nicht erlaubt ist, ist die abschließende Sequenz des CDATA-Abschnitts selbst, `]]>`.

> [!NOTE]
> CDATA-Abschnitte sollten nicht innerhalb von HTML verwendet werden, da sie als Kommentare angesehen und nicht angezeigt werden.

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
