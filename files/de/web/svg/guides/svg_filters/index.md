---
title: SVG-Filter
slug: Web/SVG/Guides/SVG_filters
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

SVG ermöglicht es uns, ähnliche Werkzeuge wie die Bitmap-Beschreibungssprache zu verwenden, wie zum Beispiel Schatten-, Weichzeichnereffekte oder sogar das Zusammenführen der Ergebnisse verschiedener Filter. Mit dem Filterelement `<filter>` ist es möglich, diese Effekte hinzuzufügen und später an ein Objekt anzuhängen.

Filter wirken wie Schichten. Beim Erstellen dieser Effekte sollten Sie die Effekte schrittweise anwenden und testen.

Dieses Element verfügt über verschiedene Attribute, die uns dabei helfen, die Clip-Region zu erstellen. Zwischen den Filter-Tags können wir die _Primitives_ definieren, die es uns ermöglichen, den gewünschten Effekt zu implementieren. Eine dieser Primitives ist der [`<feGaussianBlur>`](/de/docs/Web/SVG/Reference/Element/feGaussianBlur). Das Schlüsselwort [`SourceAlpha`](https://drafts.fxtf.org/filter-effects/#attr-valuedef-in-sourcealpha) identifiziert die Eingabe für diese Primitive, in diesem Fall die Eingabe `in`. Die Menge des anzuwendenden Weichzeichners wird mit dem Attribut `stdDeviation` festgelegt.

## Beispiel für SVG-Filter

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

Das obige Beispiel wird nicht die gewünschte Ausgabe erzeugen. Stattdessen müssen wir mehr Filter-Primitives hinzufügen, die die gewünschte Darstellung erzeugen. Durch das Hinzufügen von `feoffset` und `result` wird die Effekt-Schicht definiert.

Das `<result>`-Attribut ist ein Verweis, der später verwendet werden kann. Es unterscheidet sich deutlich von einer XML-ID und kann nur innerhalb des aktuellen `filter` referenziert werden. Die **`<feoffset>`**-Primitive hat das Weichzeichnergebnis des Gaussian Blur. Die **`<feMerge>`**-Primitive enthält die Nodes **`<feMergeNode>`**, die als Eingabe das Ergebnis offsetBlur nehmen, wodurch es unter dem `sourceGraphic` erscheint.

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
