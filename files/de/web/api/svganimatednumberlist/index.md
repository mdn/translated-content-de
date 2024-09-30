---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG animierte Zahlenlisten-Schnittstelle

Die `SVGAnimatedNumber`-Schnittstelle wird für Attribute verwendet, die eine Liste von Zahlen erfordern und animiert werden können.

### Schnittstellenübersicht

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
            readonly [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)
            <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)
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

- [`SVGAnimatedNumberList.baseVal`](/de/docs/Web/API/SVGAnimatedNumberList/baseVal) {{ReadOnlyInline}}
  - : Eine [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), die den Basiswert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- [`SVGAnimatedNumberList.animVal`](/de/docs/Web/API/SVGAnimatedNumberList/animVal) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), die den aktuell animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) denselben Inhalt wie `baseVal`. Das von `animVal` referenzierte Objekt wird immer von dem durch `baseVal` referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert ist.

## Instanz-Methoden

Die `SVGAnimatedNumberList`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
