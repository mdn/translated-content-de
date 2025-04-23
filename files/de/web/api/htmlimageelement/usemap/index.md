---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces spiegelt den Wert des
{{Glossary("HTML", "HTML")}}-[`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attributs wider. Diese Eigenschaft ist eine Zeichenkette, die den Namen der clientseitigen Image-Map angibt, die auf das Bild angewendet werden soll.

## Wert

Eine Zeichenkette, die die seitenlokale URL angibt (das heißt, eine URL, die mit dem Raute- oder Hashtag-Symbol `#` beginnt) des {{HTMLElement("map")}}-Elements, die die Image-Map definiert, die auf das Bild angewendet werden soll.

Sie können mehr über clientseitige Image-Maps in unserem Lernartikel [Hintergrundkarte über ein Bild legen](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image) erfahren.

## Verwendungsnotizen

Der Zeichenkettenwert von `useMap` muss ein gültiger Anker für ein {{HTMLElement("map")}}-Element sein. Mit anderen Worten sollte diese Zeichenkette der Wert des Attributs `name` des entsprechenden `<map>`-Elements sein, dem ein Raute- oder Hashtag-Symbol vorangestellt ist.

Betrachten Sie ein `<map>`, das wie folgt aussieht:

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

Angesichts der Bildkarte mit dem Namen `mainmenu-map` sollte das Bild, das diese verwendet, in etwa wie folgt aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Für zusätzliche Beispiele (einschließlich interaktiver) siehe die Artikel über die {{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie den [Leitfaden zur Verwendung von Image-Maps](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Beispiele

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
