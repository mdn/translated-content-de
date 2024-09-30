---
title: SVGAnimatedTransformList
slug: Web/API/SVGAnimatedTransformList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für animierte Transformationslisten in SVG

Die Schnittstelle `SVGAnimatedTransformList` wird für Attribute verwendet, die eine Liste von Zahlen annehmen und animiert werden können.

### Überblick über die Schnittstelle

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
            readonly [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)
            <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGAnimatedTransformList"
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
      <td><code>baseVal</code></td>
      <td>[`SVGTransformList`](/de/docs/Web/API/SVGTransformList)</td>
      <td>
        Der Basiswert des angegebenen Attributs, bevor Animationen angewendet werden.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>[`SVGTransformList`](/de/docs/Web/API/SVGTransformList)</td>
      <td>
        Eine schreibgeschützte [`SVGTransformList`](/de/docs/Web/API/SVGTransformList), die den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat die [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) denselben Inhalt wie <code>baseVal</code>. Das durch <code>animVal</code> referenzierte Objekt ist immer von dem durch <code>baseVal</code> referenzierten Objekt zu unterscheiden, selbst wenn das Attribut nicht animiert wird.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die Schnittstelle `SVGAnimatedTransformList` stellt keine spezifischen Methoden zur Verfügung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
