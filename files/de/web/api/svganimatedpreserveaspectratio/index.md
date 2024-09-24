---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG animated preserveAspectRatio Schnittstelle

Die Schnittstelle `SVGAnimatedPreserveAspectRatio` wird für Attribute des Typs {{ domxref("SVGPreserveAspectRatio") }} verwendet, die animiert werden können.

### Überblick über die Schnittstelle

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Auch implementiert</th>
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

- {{domxref("SVGAnimatedPreserveAspectRatio.baseVal")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGPreserveAspectRatio")}}, der den Basiswert des gegebenen Attributs vor der Anwendung von Animationen darstellt.
- {{domxref("SVGAnimatedPreserveAspectRatio.animVal")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGPreserveAspectRatio")}}, der den aktuellen animierten Wert des gegebenen Attributs darstellt. Wenn das gegebene Attribut derzeit nicht animiert wird, hat der {{ domxref("SVGPreserveAspectRatio") }} denselben Inhalt wie `baseVal`. Das von `animVal` referenzierte Objekt ist immer von dem durch `baseVal` referenzierten Objekt verschieden, selbst wenn das Attribut nicht animiert ist.

## Instanz-Methoden

Die Schnittstelle `SVGAnimatedPreserveAspectRatio` bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
