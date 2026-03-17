---
title: SVG-Filter
slug: Web/SVG/Guides/SVG_filters
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Mit SVG können wir ähnliche Werkzeuge wie in der Bitmap-Beschreibungssprache verwenden, wie z.B. die Nutzung von Schatten, Unschärfeeffekten oder sogar das Zusammenführen der Ergebnisse verschiedener Filter. Mit dem Filter-Element `<filter>` ist es möglich, diese Effekte hinzuzufügen und später einem Objekt zuzuweisen.

Filter wirken wie Ebenen. Beim Erstellen sollten Sie versuchen, den Effekt Schritt für Schritt anzuwenden und zu testen.

Dieses Element hat verschiedene Attribute, die uns helfen, die Schnittregion zu erstellen. Zwischen den Filter-Tags können wir die _Primitives_ definieren, die es uns ermöglichen, den gewünschten Effekt umzusetzen. Eine dieser Primitives ist die [`<feGaussianBlur>`](/de/docs/Web/SVG/Reference/Element/feGaussianBlur). Das Schlüsselwort [`SourceAlpha`](https://drafts.csswg.org/filter-effects-1/#attr-valuedef-in-sourcealpha) identifiziert das Eingabewert für diese Primitive, in diesem Fall ist es die Eingabe `in`. Die Menge der anzuwendenden Unschärfe wird mit dem Attribut `stdDeviation` definiert.

## SVG-Filter Beispiel

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
  </filter>
</defs>

<g id="ghost" filter="url(#drop-shadow)">
  <!--Ghost drawing in here-->
</g>
```

Das obige Beispiel wird nicht die gewünschte Ausgabe erzeugen. Stattdessen müssen wir mehr Filter-Primitives hinzufügen, die die gewünschte Darstellung erzeugen. Durch das Hinzufügen von `feoffset` und `result` wird die Effekt-Ebene definiert.

Das Attribut `<result>` ist eine Referenz, die später verwendet werden kann. Sie unterscheidet sich deutlich von einer XML-ID und kann nur innerhalb des aktuellen `filters` referenziert werden. Die Primitive **`<feoffset>`** enthält das Unschärfeergebnis aus der Gaußschen Unschärfe. Die Primitive **`<feMerge>`** enthält die Knoten **`<feMergeNode>`**, die als Eingabe das Ergebnis offsetBlur erhalten, was es ermöglicht, unterhalb der `sourceGraphic` zu erscheinen.

## Implementierung weiterer Primitives

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
    <feoffset in="blur" dx="4" dy="4" result="offsetBlur" />
    <feMerge>
      <feMergeNode in="offsetBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
```
