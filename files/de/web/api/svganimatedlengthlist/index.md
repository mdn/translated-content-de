---
title: SVGAnimierteLängenliste
slug: Web/API/SVGAnimatedLengthList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für animierte Längenlisten in SVG

Die `SVGAnimatedLengthList` Schnittstelle wird für Attribute vom Typ {{ domxref("SVGLengthList") }} verwendet, die animiert werden können.

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
            readonly {{ domxref("SVGLengthList") }}
            <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGLengthList") }}
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
      <td><code>baseVal</code></td>
      <td>{{ domxref("SVGLengthList") }}</td>
      <td>
        Der Basiswert des angegebenen Attributs vor der Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>{{ domxref("SVGLengthList") }}</td>
      <td>
        Ein schreibgeschütztes {{ domxref("SVGLengthList") }} Objekt, das den
        aktuell animierten Wert des angegebenen Attributs darstellt. Falls das angegebene Attribut
        derzeit nicht animiert wird, hat das
        {{ domxref("SVGLengthList") }} denselben Inhalt wie
        <code>baseVal</code>. Das durch <code>animVal</code> referenzierte Objekt wird
        immer von dem durch <code>baseVal</code> referenzierten Objekt unterschieden sein, selbst
        wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die `SVGAnimatedLengthList` Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
