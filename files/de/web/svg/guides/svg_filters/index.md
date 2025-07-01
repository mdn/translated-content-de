---
title: SVG-Filter
slug: Web/SVG/Guides/SVG_filters
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

SVG ermöglicht es uns, ähnliche Werkzeuge wie die Bitmap-Beschreibungssprache zu verwenden, wie etwa die Nutzung von Schatten-, Unschärfeeffekten oder sogar das Zusammenführen der Ergebnisse verschiedener Filter. Mit dem Filter-Element `<filter>` ist es möglich, diese Effekte hinzuzufügen und später an ein Objekt anzuhängen.

Filter funktionieren wie Ebenen. Beim Erstellen sollten Sie versuchen, den Effekt Schritt für Schritt anzuwenden und zu testen.

Dieses Element verfügt über verschiedene Attribute, die uns helfen, die Ausschnittregion zu erstellen. Zwischen den Filter-Tags können wir die _Primitiven_ definieren, die es uns ermöglichen, den gewünschten Effekt umzusetzen. Eine dieser Primitiven ist die [`<feGaussianBlur>`](/de/docs/Web/SVG/Reference/Element/feGaussianBlur). Das Schlüsselwort [`SourceAlpha`](https://drafts.fxtf.org/filter-effects/#attr-valuedef-in-sourcealpha) identifiziert die Eingabe für diese Primitive, in diesem Fall die Eingabe `in`. Die Menge der anzuwendenden Unschärfe wird mit dem Attribut `stdDeviation` durchgeführt.

## SVG-Filterbeispiel

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

Das obige Beispiel wird nicht die gewünschte Ausgabe erzeugen. Stattdessen müssen wir mehr Filter-Primitiven hinzufügen, die die gewünschte Darstellung erzeugen. Durch das Hinzufügen von `feoffset` und `result` wird die Effekt-Ebene definiert.

Das `<result>`-Attribut ist ein Verweis, der später verwendet werden kann. Es ist ziemlich unterschiedlich zu einer XML-ID und kann nur innerhalb des aktuellen `filter` referenziert werden. Die **`<feoffset>`**-Primitive hat das Unschärfeergebnis des Gaußschen Unscharf-Effekts. Die **`<feMerge>`**-Primitive enthält die Knoten **`<feMergeNode>`**, die als Eingabe das Ergebnis offsetBlur verwenden, was es ermöglichen wird, dass es unterhalb der `sourceGraphic` erscheint.

## Implementierung von weiteren Primitiven

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
