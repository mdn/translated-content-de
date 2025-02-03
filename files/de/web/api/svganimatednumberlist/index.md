---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

## Schnittstelle für animierte Zahlenlisten

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

## Instanzeigenschaften

- [`SVGAnimatedNumberList.baseVal`](/de/docs/Web/API/SVGAnimatedNumberList/baseVal) {{ReadOnlyInline}}
  - : Eine [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), die den Basiswert des angegebenen Attributs darstellt, bevor irgendwelche Animationen angewendet werden.
- [`SVGAnimatedNumberList.animVal`](/de/docs/Web/API/SVGAnimatedNumberList/animVal) {{ReadOnlyInline}}
  - : Eine schreibgeschützte [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), die den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList) den gleichen Inhalt wie `baseVal`. Das von `animVal` referenzierte Objekt wird immer ein anderes sein als das von `baseVal` referenzierte, selbst wenn das Attribut nicht animiert ist.

## Instanzmethoden

Die `SVGAnimatedNumberList`-Schnittstelle stellt keine spezifischen Methoden bereit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
