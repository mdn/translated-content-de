---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces spiegelt den Wert des {{Glossary("HTML", "HTML")}} [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attributs wider, das einen String darstellt, welcher den Namen der clientseitigen Bildkarte angibt, die auf das Bild angewendet werden soll.

## Wert

Ein String, der die seitenlokale URL angibt (das heißt, eine URL, die mit dem Rautezeichen oder Pfundzeichen, `#`, beginnt) des {{HTMLElement("map")}}-Elements, das die Bildkarte definiert, die auf das Bild angewendet werden soll.

Sie können mehr über clientseitige Bildkarten in unserem Lernartikel [Fügen Sie eine Trefferkarte über ein Bild hinzu](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image) erfahren.

## Verwendungshinweise

Der Stringwert von `useMap` muss ein gültiger Anker für ein {{HTMLElement("map")}}-Element sein. Mit anderen Worten, dieser String sollte der Wert des entsprechenden `<map>`-Elements [`name`](/de/docs/Web/HTML/Element/map#name)-Attributs sein, dem ein Pfundzeichen oder Hash-Symbol vorangestellt ist.

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

Angesichts der Bildkarte mit dem Namen `mainmenu-map` sollte das Bild, das sie verwendet, etwa wie folgt aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Weitere Beispiele (einschließlich interaktiver) finden Sie in den Artikeln über die {{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie im [Leitfaden zur Verwendung von Bildkarten](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image).

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
