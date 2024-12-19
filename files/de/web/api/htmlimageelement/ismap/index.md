---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft **`isMap`** ist ein Boolescher Wert, der darauf hinweist, dass das Bild von einem serverseitigen Image-Map verwendet werden soll. Dies kann nur auf Bildern verwendet werden, die sich innerhalb eines {{HTMLElement("a")}}-Elements befinden.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie generell vermeiden, serverseitige Image-Maps zu verwenden, da sie die Verwendung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Image-Map](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein Boolescher Wert, der `true` ist, wenn das Bild für eine serverseitige Image-Map verwendet wird; andernfalls ist der Wert `false`.

## Anwendungshinweise

Wenn ein Bild, das als Teil einer serverseitigen Image-Map markiert ist, angeklickt wird, konstruiert der Browser die Zeichenkette "?x,y", wobei x und y die Koordinaten anzeigen, an denen die Maus als Offsets von der oberen linken Ecke des Bildes geklickt wurde, angegeben in CSS-Pixeln.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Element/a#download)-Attributs.

Anders als serverseitige Image-Maps führen clientseitige Image-Maps nicht dazu, dass das {{HTMLElement("img")}}-Element den interaktiven Inhaltmodus annimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
