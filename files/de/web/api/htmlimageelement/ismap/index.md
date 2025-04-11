---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`isMap`** ist ein
Boolean-Wert, der angibt, dass das Bild von einer serverseitigen Image-Map verwendet werden soll.
Dies darf nur bei Bildern verwendet werden, die sich innerhalb eines {{HTMLElement("a")}}-Elements befinden.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie generell vermeiden,
> serverseitige Image-Maps zu verwenden, da sie die Nutzung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Image-Map](/de/docs/Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Bild für eine serverseitige
Image-Map verwendet wird; andernfalls ist der Wert `false`.

## Hinweise zur Nutzung

Wenn ein Bild, das als Teil einer serverseitigen Image-Map markiert ist, angeklickt wird, konstruiert der Browser
den String "?x,y", wobei x und y die Koordinaten angeben, an denen die
Maus geklickt wurde, als Offsets von der oberen linken Ecke des Bildes, angegeben in CSS-Pixeln.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie
herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.

Im Gegensatz zu serverseitigen Image-Maps führen clientseitige Image-Maps nicht dazu, dass das
{{HTMLElement("img")}}-Element in den interaktiven Inhaltsmodus wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
