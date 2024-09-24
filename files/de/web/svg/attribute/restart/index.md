---
title: neustart
slug: Web/SVG/Attribute/restart
l10n:
  sourceCommit: 0376a43b69c2107f0d7d3db2a7c3d0827439bc18
---

{{SVGRef}}

Das **`restart`** Attribut gibt an, ob eine Animation neu gestartet werden kann oder nicht.

Sie können dieses Attribut mit den folgenden SVG-Elementen verwenden:

- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("set")}}

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}

a {
  fill: blue;
  text-decoration: underline;
  cursor: pointer;
}
```

```html
<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
  <rect y="30" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="30"
      to="100"
      dur="5s"
      repeatCount="1"
      restart="always" />
  </rect>
  <rect x="120" y="30" width="100" height="100">
    <animate
      attributeType="XML"
      attributeName="y"
      from="30"
      to="100"
      dur="5s"
      repeatCount="1"
      restart="whenNotActive" />
  </rect>
  <a id="restart"><text y="20">Restart animation</text></a>
</svg>
```

```js
document.getElementById("restart").addEventListener("click", (evt) => {
  document.querySelectorAll("animate").forEach((element) => {
    element.beginElement();
  });
});
```

{{EmbedLiveSample("Example", "220", "150")}}

## Verwendungshinweise

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Wert</th>
      <td>
        <code>always</code> | <code>whenNotActive</code> | <code>never</code>
      </td>
    </tr>
    <tr>
      <th scope="row">Standardwert</th>
      <td><code>always</code></td>
    </tr>
    <tr>
      <th scope="row">Animierbar</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

- `always`
  - : Dieser Wert zeigt an, dass die Animation jederzeit neu gestartet werden kann.
- `whenNotActive`
  - : Dieser Wert zeigt an, dass die Animation nur neu gestartet werden kann, wenn sie nicht aktiv ist (d. h. nach dem aktiven Ende). Versuche, die Animation während ihrer aktiven Dauer neu zu starten, werden ignoriert.
- `never`
  - : Dieser Wert zeigt an, dass die Animation nicht neu gestartet werden kann.

## Spezifikationen

{{Specifications}}
