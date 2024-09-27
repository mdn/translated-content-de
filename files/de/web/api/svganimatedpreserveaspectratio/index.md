---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle SVG animated preserveAspectRatio

Die `SVGAnimatedPreserveAspectRatio`-Schnittstelle wird für Attribute des Typs [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) verwendet, die animiert werden können.

### Schnittstellenübersicht

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Ebenfalls implementieren</th>
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

## Instanzeigenschaften

- [`SVGAnimatedPreserveAspectRatio.baseVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den Grundwert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- [`SVGAnimatedPreserveAspectRatio.animVal`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio/animVal) {{ReadOnlyInline}}
  - : Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio), das den aktuell animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat das [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) denselben Inhalt wie `baseVal`. Das von `animVal` referenzierte Objekt ist immer von demjenigen, das von `baseVal` referenziert wird, verschieden, selbst wenn das Attribut nicht animiert ist.

## Instanzmethoden

Die `SVGAnimatedPreserveAspectRatio`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
