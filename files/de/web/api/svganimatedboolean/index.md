---
title: SVGAnimatedBoolean
slug: Web/API/SVGAnimatedBoolean
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

## Schnittstelle für animierte SVG-Boolean

Die Schnittstelle `SVGAnimatedBoolean` wird für Attribute vom Typ Boolean verwendet, die animiert werden können.

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
          <li>boolean <code>baseVal</code></li>
          <li>readonly boolean <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedBoolean"
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
      <td><code>[`SVGAnimatedBoolean.baseVal`](/de/docs/Web/API/SVGAnimatedBoolean/baseVal)</code></td>
      <td>boolean</td>
      <td>
        Der Basiswert des angegebenen Attributs vor Anwendung jeglicher Animationen.
      </td>
    </tr>
    <tr>
      <td><code>[`SVGAnimatedBoolean.animVal`](/de/docs/Web/API/SVGAnimatedBoolean/animVal)</code></td>
      <td>boolean</td>
      <td>
        Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es denselben Wert wie <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die `SVGAnimatedBoolean` Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
