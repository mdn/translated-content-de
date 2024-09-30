---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft auf der
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle spiegelt den Wert des
[HTML](/de/docs/Glossary/HTML) [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attributs wider, welcher eine Zeichenfolge ist,
die den Namen der clientseitigen Imagemap angibt, die auf das Bild angewendet werden soll.

## Wert

Eine Zeichenfolge, die die pagelokale URL bereitstellt (das heißt, eine URL, die mit dem Hash- oder Pfund-Symbol `#` beginnt) des {{HTMLElement("map")}}-Elements, 
das die Imagemap definiert, die auf das Bild anzuwenden ist.

Sie können mehr über clientseitige Imagemaps in unserem Lernartikel [Fügen Sie eine Trefferkarte über ein Bild hinzu](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image) erfahren.

## Nutzungshinweise

Der Zeichenfolgenwert von `useMap` muss ein gültiger Anker für ein
{{HTMLElement("map")}}-Element sein. Mit anderen Worten, diese Zeichenfolge sollte der Wert des
entsprechenden `<map>`-Attributs [`name`](/de/docs/Web/HTML/Element/map#name) mit einem
davor gestellten Pfund- oder Hash-Symbol sein.

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

Angenommen, die Imagemap heißt `mainmenu-map`, sollte das Bild, das sie verwendet, ungefähr so aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Für zusätzliche Beispiele (einschließlich interaktiver), siehe die Artikel über die
{{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie den [Leitfaden zur Verwendung von Imagemaps](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Beispiele

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
