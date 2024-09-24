---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

Die `SVGAnimatedRect`-Schnittstelle wird für Attribute von grundlegenden {{ domxref("SVGRect") }} verwendet, die animiert werden können.

### Schnittstellenübersicht

<table class="no-markdown">
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
          <li>
            readonly {{ domxref("SVGRect") }} <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGRect") }} <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedRect"
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
      <td>{{ domxref("SVGRect") }}</td>
      <td>
        Der Basiswert des angegebenen Attributs vor der Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>{{ domxref("SVGRect") }}</td>
      <td>
        Ein schreibgeschütztes {{ domxref("SVGRect") }}, das den aktuellen
        animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut
        momentan nicht animiert wird, hat das {{ domxref("SVGRect") }} den gleichen Inhalt
        wie <code>baseVal</code>. Das durch <code>animVal</code> referenzierte Objekt
        ist immer ein anderes als das durch <code>baseVal</code> referenzierte, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

_Die `SVGAnimatedRect`-Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
