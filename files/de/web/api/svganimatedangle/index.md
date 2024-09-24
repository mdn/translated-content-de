---
title: SVGAnimatedAngle
slug: Web/API/SVGAnimatedAngle
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG animiertes Winkel-Interface

Das `SVGAnimatedAngle`-Interface wird für Attribute des Basistyps [\<angle>](/de/docs/Web/SVG/Content_type#angle) verwendet, die animiert werden können.

### Übersicht des Interfaces

<table class="no-markdown">
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
          <li>
            readonly {{ domxref("SVGAngle") }} <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGAngle") }} <code>animVal</code>
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
      <td>{{ domxref("SVGAngle") }}</td>
      <td>
        Der Grundwert des angegebenen Attributs vor Anwendung jeglicher Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>{{ domxref("SVGAngle") }}</td>
      <td>
        Ein schreibgeschützter {{ domxref("SVGAngle") }}, der den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat der {{ domxref("SVGAngle") }} denselben Inhalt wie <code>baseVal</code>. Das durch <code>animVal</code> referenzierte Objekt wird immer von dem durch <code>baseVal</code> referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Das `SVGAnimatedAngle`-Interface bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
