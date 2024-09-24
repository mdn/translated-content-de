---
title: SVG-Filter-Tutorial
slug: Web/SVG/Tutorial/SVG_Filters_Tutorial
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

## Filter

Mit SVG können wir ähnliche Werkzeuge wie in der Bitmap-Beschreibungssprache verwenden, wie z.B. Schatten-, Unschärfeeffekte oder sogar das Zusammenführen der Ergebnisse verschiedener Filter. Mit dem Filterelement `<filter>` ist es möglich, diese Effekte hinzuzufügen und später an ein Objekt zu binden.

Filter wirken wie Ebenen. Versuchen Sie beim Erstellen, den Effekt Schritt für Schritt anzuwenden und zu testen.

Dieses Element hat verschiedene Attribute, die uns helfen, die Clip-Region zu erstellen. Zwischen den Filter-Tags können wir die _Primitiven_ definieren, die es uns ermöglichen, den gewünschten Effekt zu implementieren. Eine dieser Primitiven ist das [feGaussianBlur](https://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement). Das Schlüsselwort [SourceAlpha](https://www.w3.org/TR/SVG/filters.html#SourceAlpha) identifiziert die Eingabe für diese Primitive, in diesem Fall die Eingabe '`in`'. Die Menge der anzuwendenden Unschärfe wird mit dem `stdDeviation`-Attribut angegeben.

### Beispiel für einen SVG-Filter

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

Das obige Beispiel erzeugt nicht das gewünschte Ergebnis. Stattdessen müssen wir mehr Filterprimitiven hinzufügen, die das gewünschte Rendering erzeugen. Durch Hinzufügen von `feoffset` und `result` wird die Effektebene definiert.

Das `<result>`-Attribut ist ein Verweis, der später verwendet werden kann. Es unterscheidet sich stark von einer XML-ID und kann nur innerhalb des eigentlichen `filter` referenziert werden. Die **`<feoffset>`**-Primitive hat das Unscharfergebnis vom Gaußschen Weichzeichner. Die **`<feMerge>`**-Primitive enthält die Knoten **`<feMergeNode>`**, die das Ergebnis offsetBlur als Eingabe verwenden, wodurch es unter dem `sourceGraphic` erscheinen kann.

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
