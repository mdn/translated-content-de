---
title: "HTMLImageElement: useMap-Eigenschaft"
short-title: useMap
slug: Web/API/HTMLImageElement/useMap
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("HTML DOM")}}

Die **`useMap`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt den Namen der clientseitigen Bildkarte an, die auf das Bild angewendet werden soll. Sie spiegelt das [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String, der das Hash-Symbol `#` gefolgt vom [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) des {{HTMLElement("map")}}-Elements enthält, welches die Bildkarte definiert, die auf das Bild angewendet werden soll.

## Beispiele

### Verwendung von useMap

Betrachten Sie ein `<map>`, das folgendermaßen aussieht:

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

Da die Bildkarte `mainmenu-map` genannt wird, können Sie dynamisch Bilder erstellen, die auf die Bildkarte wie folgt verweisen:

```js
const image = new Image();
image.src = "menu-box.png";
image.alt = "";
image.useMap = "#mainmenu-map";
```

Für zusätzliche Beispiele (einschließlich interaktiver) lesen Sie die Artikel über die {{HTMLElement("map")}}- und {{HTMLElement("area")}}-Elemente sowie den [Leitfaden zur Verwendung von Bildkarten](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Eine Trefferkarte oben auf einem Bild hinzufügen](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
- {{HTMLElement("map")}}
- {{HTMLElement("area")}}
