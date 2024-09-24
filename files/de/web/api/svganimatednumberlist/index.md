---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG-animierte Zahlenlisten-Schnittstelle

Die `SVGAnimatedNumber`-Schnittstelle wird für Attribute verwendet, die eine Liste von Zahlen akzeptieren und animiert werden können.

### Überblick über die Schnittstelle

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
          <li>
            readonly {{ domxref("SVGNumberList") }}
            <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGNumberList") }}
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedAngle"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

- {{domxref("SVGAnimatedNumberList.baseVal")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGNumberList")}}, das den Basiswert des angegebenen Attributs darstellt, bevor irgendwelche Animationen angewendet werden.
- {{domxref("SVGAnimatedNumberList.animVal")}} {{ReadOnlyInline}}
  - : Ein schreibgeschützter {{ domxref("SVGNumberList") }}, der den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat der {{ domxref("SVGNumberList") }} denselben Inhalt wie `baseVal`. Das Objekt, auf das `animVal` verweist, unterscheidet sich immer von dem, auf das `baseVal` verweist, selbst wenn das Attribut nicht animiert wird.

## Instanz-Methoden

Die `SVGAnimatedNumberList`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
