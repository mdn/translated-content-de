---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
l10n:
  sourceCommit: c6f8bee9aeb156e7d2a415007f7353487b0ccef4
---

{{APIRef("SVG")}}

Die `SVGAnimatedRect` Schnittstelle wird für Attribute von grundlegenden [`SVGRect`](/de/docs/Web/API/SVGRect) verwendet, die animiert werden können.

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
          <li>
            readonly [`SVGRect`](/de/docs/Web/API/SVGRect) <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGRect`](/de/docs/Web/API/SVGRect) <code>animVal</code>
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
      <td><code>[`SVGAnimatedRect.baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal)</code></td>
      <td>[`SVGRect`](/de/docs/Web/API/SVGRect)</td>
      <td>
        Der Grundwert des angegebenen Attributs, bevor irgendwelche Animationen angewendet werden.
      </td>
    </tr>
    <tr>
      <td><code>[`SVGAnimatedRect.animVal`](/de/docs/Web/API/SVGAnimatedRect/animVal)</code></td>
      <td>[`SVGRect`](/de/docs/Web/API/SVGRect)</td>
      <td>
        Ein schreibgeschützter [`SVGRect`](/de/docs/Web/API/SVGRect), der den aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das angegebene Attribut derzeit nicht animiert wird, hat der [`SVGRect`](/de/docs/Web/API/SVGRect) denselben Inhalt wie <code>baseVal</code>. Das Objekt, auf das durch <code>animVal</code> verwiesen wird, ist immer von dem Objekt unterschieden, auf das durch <code>baseVal</code> verwiesen wird, selbst wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

_Die `SVGAnimatedRect` Schnittstelle bietet keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
