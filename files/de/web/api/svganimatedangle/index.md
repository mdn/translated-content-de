---
title: SVGAnimatedAngle
slug: Web/API/SVGAnimatedAngle
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für animierten Winkel in SVG

Die `SVGAnimatedAngle`-Schnittstelle wird für Attribute des Basistyps [\<angle>](/de/docs/Web/SVG/Content_type#angle) verwendet, die animiert werden können.

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
          <li>
            readonly [`SVGAngle`](/de/docs/Web/API/SVGAngle) <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGAngle`](/de/docs/Web/API/SVGAngle) <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedAngle"
          >SVG 1.1 (2. Ausgabe)</a
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
      <td>[`SVGAngle`](/de/docs/Web/API/SVGAngle)</td>
      <td>
        Der Ausgangswert des gegebenen Attributs, bevor Animationen angewendet werden.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>[`SVGAngle`](/de/docs/Web/API/SVGAngle)</td>
      <td>
        Ein schreibgeschützter [`SVGAngle`](/de/docs/Web/API/SVGAngle), der den aktuellen
        animierten Wert des gegebenen Attributs darstellt. Wenn das gegebene Attribut momentan
        nicht animiert wird, dann hat der [`SVGAngle`](/de/docs/Web/API/SVGAngle) den gleichen Inhalt wie <code>baseVal</code>. Das durch
        <code>animVal</code> referenzierte Objekt wird immer von dem durch
        <code>baseVal</code> referenzierten Objekt verschieden sein, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

Die `SVGAnimatedAngle`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
