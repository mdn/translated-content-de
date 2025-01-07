---
title: SVGAnimatedInteger
slug: Web/API/SVGAnimatedInteger
l10n:
  sourceCommit: bc7875d9a6c405e47c6ee166b5acc2174515129f
---

{{APIRef("SVG")}}

## Schnittstelle für animierte Ganzzahlen in SVG

Die `SVGAnimatedInteger`-Schnittstelle wird für Attribute des Basistyps [\<integer>](/de/docs/Web/SVG/Content_type#integer) verwendet, die animiert werden können.

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
          <li>long <code>baseVal</code></li>
          <li>readonly long <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedInteger"
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
      <td><code>[`baseVal`](/de/docs/Web/API/SVGAnimatedInteger/baseVal)</code></td>
      <td>long</td>
      <td>
        Der Grundwert des angegebenen Attributs vor Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>[`animVal`](/de/docs/Web/API/SVGAnimatedInteger/animVal)</code></td>
      <td>long</td>
      <td>
        Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es denselben Wert wie <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

Die `SVGAnimatedInteger`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
