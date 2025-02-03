---
title: SVGPreserveAspectRatio
slug: Web/API/SVGPreserveAspectRatio
l10n:
  sourceCommit: 59fec48b4572624a0b23bc98385dd05029125a76
---

{{APIRef("SVG")}}

## SVG preserveAspectRatio Schnittstelle

Die `SVGPreserveAspectRatio`-Schnittstelle entspricht dem {{ SVGAttr("preserveAspectRatio") }}-Attribut, das bei einigen SVG-Elementen verfügbar ist.

Ein `SVGPreserveAspectRatio`-Objekt kann als schreibgeschützt gekennzeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

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
          <li>unsigned short <code>align</code></li>
          <li>unsigned short <code>meetOrSlice</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Konstanten</th>
      <td>
        <ul>
          <li><code>SVG_PRESERVEASPECTRATIO_UNKNOWN</code> = 0</li>
          <li><code>SVG_PRESERVEASPECTRATIO_NONE</code> = 1</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMIN</code> = 2</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMIN</code> = 3</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMIN</code> = 4</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMID</code> = 5</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMID</code> = 6</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMID</code> = 7</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMINYMAX</code> = 8</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMIDYMAX</code> = 9</li>
          <li><code>SVG_PRESERVEASPECTRATIO_XMAXYMAX</code> = 10</li>
        </ul>
        <ul>
          <li><code>SVG_MEETORSLICE_UNKNOWN</code> = 0</li>
          <li><code>SVG_MEETORSLICE_MEET</code> = 1</li>
          <li><code>SVG_MEETORSLICE_SLICE</code> = 2</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGPreserveAspectRatio"
          >SVG 1.1 (2. Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_UNKNOWN</code>
      </td>
      <td>0</td>
      <td>
        Die Enumeration wurde auf einen Wert gesetzt, der nicht einer der vordefinierten Typen ist.
        Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu diesem Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_NONE</code>
      </td>
      <td>1</td>
      <td>
        Entspricht dem Wert <code>none</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMIN</code>
      </td>
      <td>2</td>
      <td>
        Entspricht dem Wert <code>xMinYMin</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMIN</code>
      </td>
      <td>3</td>
      <td>
        Entspricht dem Wert <code>xMidYMin</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMIN</code>
      </td>
      <td>4</td>
      <td>
        Entspricht dem Wert <code>xMaxYMin</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMID</code>
      </td>
      <td>5</td>
      <td>
        Entspricht dem Wert <code>xMinYMid</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMID</code>
      </td>
      <td>6</td>
      <td>
        Entspricht dem Wert <code>xMidYMid</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMID</code>
      </td>
      <td>7</td>
      <td>
        Entspricht dem Wert <code>xMaxYMid</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMINYMAX</code>
      </td>
      <td>8</td>
      <td>
        Entspricht dem Wert <code>xMinYMax</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMIDYMAX</code>
      </td>
      <td>9</td>
      <td>
        Entspricht dem Wert <code>xMidYMax</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td>
        <code>SVG_PRESERVEASPECTRATIO_XMAXYMAX</code>
      </td>
      <td>10</td>
      <td>
        Entspricht dem Wert <code>xMaxYMax</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Die Enumeration wurde auf einen Wert gesetzt, der nicht einer der vordefinierten Typen ist.
        Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu diesem Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_MEET</code></td>
      <td>1</td>
      <td>
        Entspricht dem Wert <code>meet</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MEETORSLICE_SLICE</code></td>
      <td>2</td>
      <td>
        Entspricht dem Wert <code>slice</code> für das Attribut
        {{ SVGAttr("preserveAspectRatio") }}.
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
      <td>[`align`](/de/docs/Web/API/SVGPreserveAspectRatio/align)</td>
      <td>unsigned short</td>
      <td>
        Der Typ des Ausrichtungswertes gemäß einer der
        <code>SVG_PRESERVEASPECTRATIO_*</code>-Konstanten, die in dieser Schnittstelle definiert sind.
      </td>
    </tr>
    <tr>
      <td>[`meetOrSlice`](/de/docs/Web/API/SVGPreserveAspectRatio/meetOrSlice)</td>
      <td>unsigned short</td>
      <td>
        Der Typ des meet-or-slice Wertes gemäß einer der
        <code>SVG_MEETORSLICE_*</code>-Konstanten, die in dieser Schnittstelle definiert sind.
      </td>
    </tr>
  </tbody>
</table>

**Ausnahmen beim Setzen:** Eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn versucht wird, den Wert eines Attributs bei einem schreibgeschützten Objekt zu ändern.

## Instanzmethoden

Die `SVGPreserveAspectRatio`-Schnittstelle bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
