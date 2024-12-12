---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
l10n:
  sourceCommit: 491fc99b39489d35811cfcb95912838abc33c390
---

{{APIRef("SVG")}}

## SVG-Schnittstelle für animierte Längenlisten

Die `SVGAnimatedLengthList`-Schnittstelle wird für Attribute vom Typ [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) verwendet, die animiert werden können.

### Überblick zur Schnittstelle

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
            readonly [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
            <code>baseVal</code>
          </li>
          <li>
            readonly [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedLengthList"
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
      <td><code>[`baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal)</code></td>
      <td>[`SVGLengthList`](/de/docs/Web/API/SVGLengthList)</td>
      <td>
        Der Basiswert des angegebenen Attributs vor der Anwendung von Animationen.
      </td>
    </tr>
    <tr>
      <td><code>[`animVal`](/de/docs/Web/API/SVGAnimatedLengthList/animVal)</code></td>
      <td>[`SVGLengthList`](/de/docs/Web/API/SVGLengthList)</td>
      <td>
        Ein schreibgeschütztes [`SVGLengthList`](/de/docs/Web/API/SVGLengthList), das den
        aktuell animierten Wert des angegebenen Attributs darstellt. Wenn das
        angegebene Attribut derzeit nicht animiert wird, hat das
        [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) denselben Inhalt wie
        <code>baseVal</code>. Das von <code>animVal</code> referenzierte Objekt wird
        immer von dem durch <code>baseVal</code> referenzierten Objekt unterschieden, selbst
        wenn das Attribut nicht animiert ist.
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

Die `SVGAnimatedLengthList`-Schnittstelle stellt keine spezifischen Methoden bereit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
