---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces spiegelt den Wert des [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attributs von {{Glossary("HTML", "HTML")}} wider. Diese Eigenschaft ist ein String, der den Namen der clientseitigen Bildkarte angibt, die auf das Bild angewendet werden soll.

## Wert

Ein String, der die seitenlokale URL angibt (das heißt, eine URL, die mit dem Hash- oder Pfund-Symbol `#` beginnt) des {{HTMLElement("map")}}-Elements, das die Bildkarte definiert, die auf das Bild angewandt werden soll.

Sie können mehr über clientseitige Bildkarten in unserem Lernartikel [Fügen Sie eine Treffermaske auf ein Bild hinzu](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image) erfahren.

## Verwendungshinweise

Der Stringwert von `useMap` muss ein gültiger Anker für ein {{HTMLElement("map")}}-Element sein. Mit anderen Worten, dieser String sollte der Wert des entsprechenden `\<map>`-Attributs `name` sein, dem ein Pfund- oder Hash-Symbol vorangestellt ist.

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

Angenommen, die Bildkarte heißt `mainmenu-map`, sollte das Bild, das sie verwendet, etwa so aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Für zusätzliche Beispiele (einschließlich interaktiver) sehen Sie sich die Artikel über die {{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente an, sowie den [Leitfaden zur Verwendung von Bildkarten](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image).

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
