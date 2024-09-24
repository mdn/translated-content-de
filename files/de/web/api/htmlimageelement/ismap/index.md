---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`isMap`** des {{domxref("HTMLImageElement")}} ist ein
Boolescher Wert, der anzeigt, dass das Bild von einem serverseitigen Bildmap verwendet werden soll.
Dies darf nur bei Bildern innerhalb eines {{HTMLElement("a")}}-Elements verwendet werden.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie generell vermeiden,
> serverseitige Bildmaps zu verwenden, da diese die Benutzung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Bildmap](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein Boolescher Wert, der `true` ist, wenn das Bild für eine serverseitige
Bildmap verwendet wird; andernfalls ist der Wert `false`.

## Verwendungshinweise

Wenn auf ein Bild, das als Teil einer serverseitigen Bildmap markiert ist, geklickt wird, konstruiert der Browser den String "?x,y", wobei x und y die Koordinaten angeben, an denen die Maus als Offsets von der oberen linken Ecke des Bildes in CSS-Pixeln geklickt wurde.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Element/a#download)-Attributs.

Im Gegensatz zu serverseitigen Bildmaps führt die clientseitige Bildmap nicht dazu, dass das {{HTMLElement("img")}}-Element in den interaktiven Inhaltsmodus wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
