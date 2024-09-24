---
title: SVGAnimatedTransformList
slug: Web/API/SVGAnimatedTransformList
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## Schnittstelle für animierte SVG-Transformationslisten

Die `SVGAnimatedTransformList`-Schnittstelle wird für Attribute verwendet, die eine Liste von Zahlen enthalten und animiert werden können.

### Übersicht über die Schnittstelle

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
            readonly {{ domxref("SVGTransformList") }}
            <code>baseVal</code>
          </li>
          <li>
            readonly {{ domxref("SVGTransformList") }}
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
      <td>{{ domxref("SVGTransformList") }}</td>
      <td>
        Der Grundwert des angegebenen Attributs bevor irgendwelche Animationen angewendet werden.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>{{ domxref("SVGTransformList") }}</td>
      <td>
        Eine schreibgeschützte {{ domxref("SVGTransformList") }}, die den aktuell animierten Wert des angegebenen Attributs darstellt. Wenn das gegebene Attribut derzeit nicht animiert wird, dann wird die {{ domxref("SVGTransformList") }} die gleichen Inhalte wie <code>baseVal</code> haben. Das Objekt, auf das durch <code>animVal</code> verwiesen wird, wird immer von demjenigen, auf das durch <code>baseVal</code> verwiesen wird, verschieden sein, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die `SVGAnimatedTransformList`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
