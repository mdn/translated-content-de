---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

## Schnittstelle für animierte SVG `preserveAspectRatio`

Die `SVGAnimatedPreserveAspectRatio`-Schnittstelle wird für Attribute des Typs [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) verwendet, die animiert werden können.

### Übersicht über die Schnittstelle

<table class="standard-table">
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
          <li>readonly float <code>baseVal</code></li>
          <li>readonly float <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/coords.html#InterfaceSVGAnimatedPreserveAspectRatio"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den Basiswert des gegebenen Attributs darstellt, bevor Animationen angewendet werden.
- [`animVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/animVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den aktuellen animierten Wert des gegebenen Attributs darstellt. Wenn das gegebene Attribut derzeit nicht animiert wird, hat das [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) denselben Inhalt wie `baseVal`. Das von `animVal` referenzierte Objekt ist immer von dem durch `baseVal` referenzierten Objekt verschieden, selbst wenn das Attribut nicht animiert ist.

## Instanz-Methoden

Die `SVGAnimatedPreserveAspectRatio`-Schnittstelle stellt keine spezifischen Methoden bereit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
