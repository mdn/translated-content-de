---
title: SVGAnimatedBoolean
slug: Web/API/SVGAnimatedBoolean
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG animiertes boolesches Interface

Das `SVGAnimatedBoolean`-Interface wird für Attribute vom Typ Boolean verwendet, die animiert werden können.

### Überblick über das Interface

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
          <li>readonly boolean <code>baseVal</code></li>
          <li>readonly boolean <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedBoolean"
          >SVG 1.1 (2. Auflage)</a
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
      <td>boolean</td>
      <td>
        Der Basiswert des gegebenen Attributs vor jeglichen Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>boolean</td>
      <td>
        Falls das gegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Falls das gegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es den gleichen Wert wie <code>baseVal</code>.
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

Das `SVGAnimatedBoolean`-Interface stellt keine spezifischen Methoden bereit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
