---
title: SVG-Filter
slug: Web/SVG/Guides/SVG_filters
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

SVG ermöglicht es uns, ähnliche Werkzeuge wie die Bitmap-Beschreibungssprache zu verwenden, wie z. B. Schatten-, Unschärfeeffekte oder sogar das Zusammenführen der Ergebnisse verschiedener Filter. Mit dem Filterelement `<filter>` ist es möglich, diese Effekte hinzuzufügen und später an ein Objekt anzuhängen.

Filter wirken wie Ebenen. Beim Erstellen sollten Sie den Effekt schrittweise anwenden und testen.

Dieses Element hat verschiedene Attribute, die uns bei der Erstellung der Beschneidungsregion unterstützen. Zwischen den Filter-Tags können wir die _Primitive_ definieren, mit denen wir den gewünschten Effekt umsetzen können. Eine dieser Primitiven ist der [feGaussianBlur](https://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement). Das Schlüsselwort [SourceAlpha](https://www.w3.org/TR/SVG/filters.html#SourceAlpha) identifiziert die Eingabe für diese Primitive, ist in diesem Fall die Eingabe `in`. Die Menge der anzuwendenden Unschärfe wird über das Attribut `stdDeviation` festgelegt.

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

Das obige Beispiel wird nicht die gewünschte Ausgabe erzeugen. Stattdessen müssen wir mehr Filterprimitiven hinzufügen, die das gewünschte Rendering erzeugen. Indem wir `feoffset` und `result` hinzufügen, wird die Effekt-Ebene definiert.

Das `<result>`-Attribut ist ein Verweis, der später verwendet werden kann. Es ist ganz anders als eine XML-ID und kann nur innerhalb des eigentlichen `filter` referenziert werden. Die **`<feoffset>`**-Primitive hat das Unschärfeergebnis aus dem Gaußschen Weichzeichner. Die **`<feMerge>`**-Primitive enthält die Knoten **`<feMergeNode>`**, die als Eingabe das Ergebnis offsetBlur verwenden, damit es unterhalb des `sourceGraphic` erscheint.

## Implementierung weiterer Primitiven

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
