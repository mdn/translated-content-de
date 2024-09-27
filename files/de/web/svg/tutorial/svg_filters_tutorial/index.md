---
title: SVG Filter-Tutorial
slug: Web/SVG/Tutorial/SVG_Filters_Tutorial
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{SVGRef}}

## Filter

SVG ermöglicht uns die Nutzung ähnlicher Werkzeuge wie die Bitmap-Beschreibungs-Sprache, wie z.B. Schatten, Unschärfeeffekte oder sogar die Kombination der Ergebnisse verschiedener Filter. Mit dem Filter-Element `<filter>` ist es möglich, diese Effekte hinzuzufügen und später an ein Objekt zu binden.

Filter wirken wie Schichten. Beim Erstellen dieser sollten Sie versuchen, den Effekt Schritt für Schritt anzuwenden und zu testen.

Dieses Element hat verschiedene Attribute, die uns helfen, die Clip-Region zu erstellen. Zwischen den Filter-Tags können wir die _Primitiven_ definieren, die uns ermöglichen, den gewünschten Effekt umzusetzen. Eine dieser Primitiven ist die [feGaussianBlur](https://www.w3.org/TR/SVG/filters.html#feGaussianBlurElement). Das Schlüsselwort [SourceAlpha](https://www.w3.org/TR/SVG/filters.html#SourceAlpha) identifiziert den Eingang für diese Primitive, in diesem Fall ist der Eingang `in`. Die Menge an Unschärfe, die angewendet werden soll, wird mit dem Attribut `stdDeviation` festgelegt.

### SVG-Filter-Beispiel

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

Das obige Beispiel wird nicht das gewünschte Ergebnis produzieren. Stattdessen müssen wir mehr Filter-Primitiven hinzufügen, die die gewünschte Darstellung erzeugen. Durch das Hinzufügen von `feoffset` und `result` wird die Effekt-Schicht definiert.

Das Attribut `<result>` ist eine Referenz, die später verwendet werden kann. Es unterscheidet sich deutlich von einer XML-ID und kann nur innerhalb des tatsächlichen `filter` referenziert werden. Die **`<feoffset>`**-Primitive hat das Unschärfeergebnis des Gaußschen Weichzeichners. Die **`<feMerge>`**-Primitive enthält die Knoten **`<feMergeNode>`**, wobei als Eingabe das Resultat offsetBlur genommen wird, sodass es unter der `sourceGraphic` erscheint.

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
