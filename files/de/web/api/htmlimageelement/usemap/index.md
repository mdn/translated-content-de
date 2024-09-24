---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des
{{domxref("HTMLImageElement")}}-Interfaces spiegelt den Wert des
{{Glossary("HTML")}}-[`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attributs wider, welches eine Zeichenkette bereitstellt, die den Namen der clientseitigen Image-Map angibt, die auf das Bild angewendet werden soll.

## Wert

Eine Zeichenkette, die die seitenlokale URL bereitstellt (das heißt, eine URL, die mit dem Hash- oder Pfundzeichen, "`#`", beginnt) des {{HTMLElement("map")}}-Elements, das die Image-Map definiert, die auf das Bild angewendet werden soll.

Sie können mehr über clientseitige Image-Maps in unserem Lernartikel [Hinzufügen einer Trefferkarte auf ein Bild](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image) erfahren.

## Verwendungshinweise

Der Zeichenkettenwert von `useMap` muss ein gültiger Anker für ein
{{HTMLElement("map")}}-Element sein. Mit anderen Worten, diese Zeichenkette sollte der Wert des entsprechenden `<map>`-[`name`](/de/docs/Web/HTML/Element/map#name)-Attributs sein, dem ein Pfund- oder Hash-Zeichen vorangestellt ist.

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

Angenommen, die Image-Map mit dem Namen `mainmenu-map`, sollte das Bild, das es verwendet, etwa so aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Für zusätzliche Beispiele (einschließlich interaktiver), siehe die Artikel über die
{{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie den [Leitfaden zur Nutzung von Image-Maps](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Beispiele

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
