---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft im [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interface spiegelt den Wert des {{Glossary("HTML", "HTML")}} [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attributs wider. Dieser Wert ist ein String, der den Namen der clientseitigen Imagemap angibt, die auf das Bild angewendet werden soll.

{{InteractiveExample("HTML Demo: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN infographic" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## Wert

Ein String, der das Hash-Symbol `#` gefolgt von dem [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) des {{HTMLElement("map")}}-Elements enthält, welches die Imagemap definiert, die auf das Bild angewendet werden soll.

Sie können mehr über clientseitige Imagemaps in unserem Lernartikel [Ein Trefferfeld auf ein Bild legen](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image) erfahren.

## Beispiele

### Verwendung von useMap

Betrachten Sie ein `<map>`, das so aussieht:

```html
<map name="mainmenu-map">
  <area
    shape="circle"
    coords="25, 25, 75"
    href="/index.html"
    alt="Return to home page" />
  <area shape="rect" coords="25, 25, 100, 150" href="/index.html" alt="Shop" />
</map>
```

Angenommen, die Imagemap heißt `mainmenu-map`, können Sie Bilder dynamisch konstruieren, die auf die Imagemap wie folgt verweisen:

```js
const image = new Image();
image.src = "menubox.png";
image.alt = "";
image.useMap = "#mainmenu-map";
```

Für zusätzliche Beispiele (einschließlich interaktiver) siehe die Artikel über die {{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie den [Leitfaden zur Verwendung von Imagemaps](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
