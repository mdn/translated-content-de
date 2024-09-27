---
title: SVGAnimatedRect
slug: Web/API/SVGAnimatedRect
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

Die `SVGAnimatedRect`-Schnittstelle wird für Attribute von grundlegenden [`SVGRect`](/de/docs/Web/API/SVGRect) verwendet, die animiert werden können.

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
      <td><code>baseVal</code></td>
      <td>[`SVGRect`](/de/docs/Web/API/SVGRect)</td>
      <td>
        Der Basiswert des angegebenen Attributs vor Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>animVal</code></td>
      <td>[`SVGRect`](/de/docs/Web/API/SVGRect)</td>
      <td>
        Ein schreibgeschützter [`SVGRect`](/de/docs/Web/API/SVGRect), der den
        aktuellen animierten Wert des angegebenen Attributs darstellt. Wenn das
        angegebene Attribut derzeit nicht animiert wird, hat der
        [`SVGRect`](/de/docs/Web/API/SVGRect) denselben Inhalt wie
        <code>baseVal</code>. Das durch <code>animVal</code> referenzierte
        Objekt wird immer von dem durch <code>baseVal</code> referenzierten
        Objekt abweichen, selbst wenn das Attribut nicht animiert wird.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

_Die `SVGAnimatedRect`-Schnittstelle bietet keine speziellen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
