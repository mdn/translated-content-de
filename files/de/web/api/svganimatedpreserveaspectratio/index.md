---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
l10n:
  sourceCommit: 4f5fffdcb6ab78d736c69185f9575e8553e7d070
---

{{APIRef("SVG")}}

## Oberfläche SVGAnimatedPreserveAspectRatio

Die Schnittstelle `SVGAnimatedPreserveAspectRatio` wird für Attribute des Typs [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) verwendet, die animiert werden können.

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
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den Basiswert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- [`animVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/animVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat das [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) denselben Inhalt wie `baseVal`. Das Objekt, auf das `animVal` verweist, ist immer von demjenigen verschieden, auf das `baseVal` verweist, auch wenn das Attribut nicht animiert wird.

## Instanzmethoden

Die Schnittstelle `SVGAnimatedPreserveAspectRatio` bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
