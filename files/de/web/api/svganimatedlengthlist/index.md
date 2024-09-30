---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für SVG-animierte Längenlisten

Die `SVGAnimatedLengthList`-Schnittstelle wird für Attribute vom Typ [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) verwendet, die animiert werden können.

### Schnittstellenübersicht

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
            readonly [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
            <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedLengthList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

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
      <td><code>baseVal</code></td>
      <td>[`SVGLengthList`](/de/docs/Web/API/SVGLengthList)</td>
      <td>
        Der Basiswert des angegebenen Attributs vor Anwendung einer Animation.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>[`SVGLengthList`](/de/docs/Web/API/SVGLengthList)</td>
      <td>
        Eine schreibgeschützte [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), die den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut aktuell nicht animiert wird, hat die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) denselben Inhalt wie <code>baseVal</code>. Das durch <code>animVal</code> referenzierte Objekt ist immer unabhängig von demjenigen, das durch <code>baseVal</code> referenziert wird, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

Die `SVGAnimatedLengthList`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
