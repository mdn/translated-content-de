---
title: SVGAnimatedInteger
slug: Web/API/SVGAnimatedInteger
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG-Schnittstelle für animierte Ganzzahlen

Die Schnittstelle `SVGAnimatedInteger` wird für Attribute des Basisdatentyps [\<integer>](/de/docs/Web/SVG/Content_type#integer) verwendet, die animiert werden können.

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
          <li>readonly long <code>baseVal</code></li>
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
      <td><code>baseVal</code></td>
      <td>long</td>
      <td>
        Der Basiswert des gegebenen Attributs vor der Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>long</td>
      <td>
        Wenn das gegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das gegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es denselben Wert wie <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

Die Schnittstelle `SVGAnimatedInteger` stellt keine spezifischen Methoden bereit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
