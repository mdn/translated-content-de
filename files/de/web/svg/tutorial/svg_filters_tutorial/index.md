---
title: SVG Filters Tutorial
slug: Web/SVG/Tutorial/SVG_Filters_Tutorial
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

## Filter

SVG ermöglicht es uns, ähnliche Werkzeuge wie die Bitmap-Beschreibungssprache zu verwenden, wie beispielsweise die Nutzung von Schatten-, Unschärfeeffekten oder sogar das Zusammenführen der Ergebnisse verschiedener Filter. Mit dem Filter-Element `<filter>` ist es möglich, diese Effekte hinzuzufügen und später an ein Objekt anzuhängen.

Filter wirken wie Ebenen. Beim Erstellen sollten Sie versuchen, den Effekt Schritt für Schritt anzuwenden und zu testen.

Dieses Element hat verschiedene Attribute, die uns helfen, die Zuschneideregion zu erstellen. Zwischen den Filter-Tags können wir die _Primitiven_ definieren, die es uns ermöglichen, den gewünschten Effekt zu implementieren. Eine dieser Primitiven ist der [feGaussianBlur](https://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement). Das Schlüsselwort [SourceAlpha](https://www.w3.org/TR/SVG/filters.html#SourceAlpha) identifiziert die Eingabe für diese Primitive, in diesem Fall die Eingabe `in`. Die Menge der anzuwendenden Unschärfe wird mit dem Attribut `stdDeviation` festgelegt.

### SVG Filter-Beispiel

```html
<defs>
  <filter id="drop-shadow">
    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
  </filter>
</defs>

<g id="ghost" style="filter: url(#drop-shadow);">
  <!--Ghost drawing in here-->
</g>
```

Das obige Beispiel wird nicht die gewünschten Ergebnisse liefern. Stattdessen müssen wir mehr Filter-Primitiven hinzufügen, die das gewünschte Rendering ermöglichen. Durch das Hinzufügen von `feoffset` und `result` wird die Effekt-Ebene definiert.

Das `<result>`-Attribut ist eine Referenz, die später verwendet werden kann. Es unterscheidet sich deutlich von einer XML-ID und kann nur innerhalb des aktuellen `filter` referenziert werden. Die **`<feoffset>`**-Primitive hat das Unschärfeergebnis aus dem Gaußschen Weichzeichner. Die **`<feMerge>`**-Primitive enthält die Knoten **`<feMergeNode>`**, die als Eingabe das Ergebnis offsetBlur verwenden, sodass es unterhalb der `sourceGraphic` erscheint.

### Implementierung weiterer Primitiven

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
