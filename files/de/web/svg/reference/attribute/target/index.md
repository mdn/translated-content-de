---
title: target
slug: Web/SVG/Reference/Attribute/target
l10n:
  sourceCommit: 7615562a3689a3e23a2b6b623597f4391740a53e
---

Das **`target`**-Attribut sollte verwendet werden, wenn es mehrere mögliche Ziele für die Zielressource gibt, z. B. wenn das übergeordnete Dokument in ein HTML- oder XHTML-Dokument eingebettet ist oder mit einem tab-basierten Browser angezeigt wird. Dieses Attribut gibt den Namen des Browsing-Kontexts an (z. B. einen Browsertab oder ein (X)HTML-iframe- oder object-Element), in den ein Dokument geöffnet werden soll, wenn der Link aktiviert wird:

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("a")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}

text {
  font:
    20px "Helvetica",
    "Arial",
    sans-serif;
  fill: blue;
  text-decoration: underline;
}
```

```html
<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
  <a href="https://developer.mozilla.org" target="_self">
    <text x="0" y="20">Open link within iframe</text>
  </a>
  <a href="https://developer.mozilla.org" target="_blank">
    <text x="0" y="60">Open link in new tab or window</text>
  </a>
  <a href="https://developer.mozilla.org" target="_top">
    <text x="0" y="100">Open link in this tab or window</text>
  </a>
</svg>
```

{{EmbedLiveSample("Example", "300", "120")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>_self</code> | <code>_parent</code> | <code>_top</code> |
        <code>_blank</code> | <code>&#x3C;XML-Name></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>_self</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

- `_replace` {{deprecated_inline}}
  - : Das aktuelle SVG-Bild wird durch den verknüpften Inhalt im gleichen rechteckigen Bereich im gleichen Frame wie das aktuelle SVG-Bild ersetzt.

    > [!NOTE]
    > Dieser Wert wurde nie gut implementiert, und die Unterscheidung zwischen `_replace` und `_self` wurde durch Änderungen in der HTML-Definition von Browsing-Kontexten überflüssig gemacht. Verwenden Sie `_self`, um das aktuelle SVG-Dokument zu ersetzen.

- `_self`
  - : Das aktuelle SVG-Bild wird durch den verknüpften Inhalt im gleichen Browsing-Kontext wie das aktuelle SVG-Bild ersetzt.
- `_parent`
  - : Der unmittelbare übergeordnete Browsing-Kontext des SVG-Bildes wird durch den verknüpften Inhalt ersetzt, wenn er existiert und sicher von diesem Dokument aus zugreifbar ist.
- `_top`
  - : Der Inhalt des gesamten aktiven Fensters oder Tabs wird durch den verknüpften Inhalt ersetzt, wenn er existiert und sicher von diesem Dokument aus zugreifbar ist.
- `_blank`
  - : Ein neues nicht benanntes Fenster oder Tab wird für die Anzeige des verknüpften Inhalts angefordert, wenn dieses Dokument dies sicher tun kann. Wenn der Benutzeragent keine mehreren Fenster/Tabs unterstützt, ist das Ergebnis dasselbe wie \_top.
- `<XML-Name>`
  - : Gibt den Namen des Browsing-Kontexts (Tab, Inline-Frame, Objekt, etc.) für die Darstellung des verknüpften Inhalts an. Wenn ein Kontext mit diesem Namen bereits existiert und sicher von diesem Dokument aus zugreifbar ist, wird er wiederverwendet und der vorhandene Inhalt ersetzt. Wenn er nicht existiert, wird er erstellt (dasselbe wie '\_blank', außer dass er jetzt einen Namen hat). Der Name muss ein gültiger XML-Name \[XML11] sein und sollte nicht mit einem Unterstrich (U+005F LOW LINE-Zeichen) beginnen, um die Anforderungen eines gültigen Browsing-Kontext-Namens von HTML zu erfüllen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
