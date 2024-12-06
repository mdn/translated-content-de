---
title: SVGAnimatedTransformList
slug: Web/API/SVGAnimatedTransformList
l10n:
  sourceCommit: 4f59a1b67315a09e31a0521eb5a6f976ece9ab3c
---

{{APIRef("SVG")}}

## SVG Schnittstelle für animierte Transformationslisten

Das `SVGAnimatedTransformList` Interface wird für Attribute verwendet, die eine Liste von Zahlen verwenden und die animiert werden können.

### Überblick über die Schnittstelle

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Methoden</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Eigenschaften</th>
      <td>
        <ul>
          <li>
            readonly [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)
            <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGAnimatedTransformList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Typ</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[`baseVal`](/de/docs/Web/API/SVGAnimatedTransformList/baseVal)</code></td>
      <td>[`SVGTransformList`](/de/docs/Web/API/SVGTransformList)</td>
      <td>
        Der Grundwert des angegebenen Attributes, bevor Animationen angewendet werden.
      </td>
    </tr>
    <tr>
      <td><code>[`animVal`](/de/docs/Web/API/SVGAnimatedTransformList/animVal)</code></td>
      <td>[`SVGTransformList`](/de/docs/Web/API/SVGTransformList)</td>
      <td>
        Eine schreibgeschützte [`SVGTransformList`](/de/docs/Web/API/SVGTransformList), die den aktuellen animierten Wert des angegebenen Attributes repräsentiert. Wenn das angegebene Attribut momentan nicht animiert wird, dann wird die [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) die gleichen Inhalte wie <code>baseVal</code> haben. Das durch
        <code>animVal</code> referenzierte Objekt wird immer von dem durch <code>baseVal</code> referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Das `SVGAnimatedTransformList` Interface bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
