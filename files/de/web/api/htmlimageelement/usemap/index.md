---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) spiegelt den Wert des {{Glossary("HTML", "HTML")}}-[`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attributs wider, welches eine Zeichenfolge ist, die den Namen der clientseitigen Image-Map angibt, die auf das Bild angewendet werden soll.

## Wert

Eine Zeichenfolge, die die seitenlokale URL bereitstellt (das heißt, eine URL, die mit dem Rautezeichen oder Hash-Symbol, `#`, beginnt) des {{HTMLElement("map")}}-Elements, das die Image-Map definiert, die auf das Bild angewendet werden soll.

Sie können mehr über clientseitige Image-Maps in unserem Lernartikel [Eine Treffermarkierung über ein Bild legen](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image) erfahren.

## Verwendungshinweise

Der Zeichenfolgenwert von `useMap` muss ein gültiger Anker für ein {{HTMLElement("map")}}-Element sein. Mit anderen Worten, diese Zeichenfolge sollte der Wert des entsprechenden `<map>`-[`name`](/de/docs/Web/HTML/Element/map#name)-Attributs sein, dem ein Raute- oder Hash-Symbol voransteht.

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

Für die Image-Map namens `mainmenu-map` sollte das Bild, das sie verwendet, etwa wie folgt aussehen:

```html
<img src="menubox.png" usemap="#mainmenu-map" />
```

Für zusätzliche Beispiele (einschließlich interaktiver) sehen Sie sich die Artikel über die {{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente an sowie den [Leitfaden zur Verwendung von Image-Maps](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image).

## Beispiele

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
