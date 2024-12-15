---
title: SVGAnimatedNumber
slug: Web/API/SVGAnimatedNumber
l10n:
  sourceCommit: 5f0dba0ef63c41d1361c50c14dc343031beedd09
---

{{APIRef("SVG")}}

## Schnittstelle SVGAnimatedNumber

Die Schnittstelle `SVGAnimatedNumber` wird für Attribute des Basistyps [\<Number>](/de/docs/Web/SVG/Content_type#number) verwendet, die animiert werden können.

### Übersicht der Schnittstelle

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
          >SVG 1.1 (2. Ausgabe)</a
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
      <td><code>[`SVGAnimatedNumber.baseVal`](/de/docs/Web/API/SVGAnimatedNumber/baseVal)</code></td>
      <td>float</td>
      <td>
        Der Basiswert des angegebenen Attributs vor der Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>[`SVGAnimatedNumber.animVal`](/de/docs/Web/API/SVGAnimatedNumber/animVal)</code></td>
      <td>float</td>
      <td>
        Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält es
        den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das
        angegebene Attribut oder die Eigenschaft nicht animiert wird, enthält es denselben
        Wert wie <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die Schnittstelle `SVGAnimatedNumber` stellt keine spezifischen Methoden bereit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
