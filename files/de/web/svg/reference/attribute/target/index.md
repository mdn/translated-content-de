---
title: target
slug: Web/SVG/Reference/Attribute/target
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`target`**-Attribut sollte verwendet werden, wenn es mehrere mögliche Ziele für die Endressource gibt, zum Beispiel wenn das übergeordnete Dokument in ein HTML- oder XHTML-Dokument eingebettet ist oder mit einem Browser mit Registerkarten angezeigt wird. Dieses Attribut gibt den Namen des Browsing-Kontexts an (z. B. ein Browser-Tab oder ein (X)HTML-iframe- oder -object-Element), in den ein Dokument geöffnet werden soll, wenn der Link aktiviert wird:

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
    20px Arial,
    Helvetica,
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

## Nutzungshinweise

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

  - : Das aktuelle SVG-Bild wird durch den verlinkten Inhalt im gleichen rechteckigen Bereich im gleichen Rahmen wie das aktuelle SVG-Bild ersetzt.

    > [!NOTE]
    > Dieser Wert wurde nie gut implementiert, und die Unterscheidung zwischen `_replace` und `_self` wurde durch Änderungen in der HTML-Definition von Browsing-Kontexten überflüssig gemacht. Verwenden Sie `_self`, um das aktuelle SVG-Dokument zu ersetzen.

- `_self`
  - : Das aktuelle SVG-Bild wird durch den verlinkten Inhalt im gleichen Browsing-Kontext wie das aktuelle SVG-Bild ersetzt.
- `_parent`
  - : Der unmittelbare übergeordnete Browsing-Kontext des SVG-Bildes wird durch den verlinkten Inhalt ersetzt, falls es existiert und sicher von diesem Dokument aus zugänglich ist.
- `_top`
  - : Der Inhalt des gesamten aktiven Fensters oder Tabs wird durch den verlinkten Inhalt ersetzt, falls es existiert und sicher von diesem Dokument aus zugänglich ist.
- `_blank`
  - : Ein neues, unbenanntes Fenster oder Tab wird für die Anzeige des verlinkten Inhalts angefordert, falls dieses Dokument dies sicher tun kann. Wenn der Benutzeragent mehrere Fenster/Tabs nicht unterstützt, ist das Ergebnis das gleiche wie bei \_top.
- `<XML-Name>`
  - : Gibt den Namen des Browsing-Kontexts (Tab, Inline-Frame, Objekt, etc.) zur Anzeige des verlinkten Inhalts an. Wenn ein Kontext mit diesem Namen bereits existiert und sicher von diesem Dokument aus zugänglich ist, wird er wiederverwendet, und der bestehende Inhalt wird ersetzt. Existiert er nicht, wird er erstellt (gleich wie '\_blank', außer dass er nun einen Namen hat). Der Name muss ein gültiger XML-Name \[XML11] sein und sollte nicht mit einem Unterstrich (U+005F LOW LINE-Zeichen) beginnen, um den Anforderungen eines gültigen Browsing-Kontext-Namens aus HTML zu entsprechen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
