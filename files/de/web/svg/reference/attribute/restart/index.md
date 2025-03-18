---
title: restart
slug: Web/SVG/Reference/Attribute/restart
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`restart`** Attribut gibt an, ob eine Animation neu starten kann oder nicht.

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

## Anwendungshinweise

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
  - : Dieser Wert gibt an, dass die Animation jederzeit neu gestartet werden kann.
- `whenNotActive`
  - : Dieser Wert gibt an, dass die Animation nur neu gestartet werden kann, wenn sie nicht aktiv ist (d.h. nach dem aktiven Ende). Versuche, die Animation während ihrer aktiven Dauer neu zu starten, werden ignoriert.
- `never`
  - : Dieser Wert gibt an, dass die Animation nicht neu gestartet werden kann.

## Spezifikationen

{{Specifications}}
