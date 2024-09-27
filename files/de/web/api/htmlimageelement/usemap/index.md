---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des
[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces spiegelt den Wert des
[HTML](/de/docs/Glossary/HTML)-[`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attributs wider. Sie ist ein String, der den Namen der clientseitigen Image Map angibt, die auf das Bild angewendet werden soll.

## Wert

Ein String, der die seiteninterne URL enthält (das heißt, eine URL, die mit dem Hash- oder Pfund-Symbol, `#`, beginnt) des {{HTMLElement("map")}}-Elements, das die Image Map definiert, die auf das Bild angewendet werden soll.

Sie können mehr über clientseitige Image Maps in unserem Lernartikel [Ein Hitmap auf ein Bild hinzufügen](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image) erfahren.

## Hinweise zur Nutzung

Der String-Wert von `useMap` muss ein gültiger Anker für ein
{{HTMLElement("map")}}-Element sein. Mit anderen Worten, dieser String sollte der Wert des
entsprechenden `<map>`-[`name`](/de/docs/Web/HTML/Element/map#name)-Attributs sein, dem ein Pfund- oder Hash-Symbol vorangestellt ist.

Betrachten Sie eine `<map>`, die so aussieht:

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

Angenommen eine Image Map mit dem Namen `mainmenu-map`, dann sollte das Bild, das sie verwendet, ungefähr so aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Weitere Beispiele (einschließlich interaktiver) finden Sie in den Artikeln über die
{{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie in dem [Leitfaden zur Verwendung von Image Maps](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Beispiele

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
