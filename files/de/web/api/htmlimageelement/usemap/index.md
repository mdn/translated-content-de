---
title: "HTMLImageElement: Eigenschaft useMap"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gibt den Namen der clientseitigen Imagemap an, die auf das Bild angewendet werden soll. Sie spiegelt das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, der das Rauten-Symbol `#` gefolgt vom [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) des {{HTMLElement("map")}}-Elements enthält, das die Imagemap definiert, die auf das Bild angewendet werden soll.

## Beispiele

### Verwendung von useMap

Betrachten Sie eine `<map>`, die folgendermaßen aussieht:

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

Basierend auf der Imagemap namens `mainmenu-map` können Sie dynamisch Bilder konstruieren, die auf die Imagemap verweisen, wie folgt:

```js
const image = new Image();
image.src = "menubox.png";
image.alt = "";
image.useMap = "#mainmenu-map";
```

Für zusätzliche Beispiele (einschließlich interaktiver) lesen Sie die Artikel über die Elemente {{HTMLElement("map")}} und {{HTMLElement("area")}} sowie den [Leitfaden zur Verwendung von Imagemaps](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fügen Sie eine Klickkarte auf einem Bild hinzu](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
- {{HTMLElement("map")}}
- {{HTMLElement("area")}}
