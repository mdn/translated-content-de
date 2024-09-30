---
title: SVGAnimatedNumber
slug: Web/API/SVGAnimatedNumber
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG animated number Schnittstelle

Die `SVGAnimatedNumber` Schnittstelle wird für Attribute des Basistyps [\<Number>](/de/docs/Web/SVG/Content_type#number) verwendet, die animiert werden können.

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
          <li>float <code>baseVal</code></li>
          <li>readonly float <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedNumber"
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
      <td>float</td>
      <td>
        Der Basiswert des angegebenen Attributs vor Anwendung jeglicher Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>float</td>
      <td>
        Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es denselben Wert wie <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die `SVGAnimatedNumber` Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
