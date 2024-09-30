---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`isMap`** ist ein boolescher Wert, der anzeigt, dass das Bild von einer serverseitigen Image-Map verwendet werden soll. Dies darf nur bei Bildern verwendet werden, die sich innerhalb eines {{HTMLElement("a")}}-Elements befinden.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie generell vermeiden, serverseitige Image-Maps zu verwenden, da diese die Verwendung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Image-Map](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Bild für eine serverseitige Image-Map verwendet wird; andernfalls ist der Wert `false`.

## Verwendungshinweise

Wenn auf ein Bild, das als Teil einer serverseitigen Image-Map markiert ist, geklickt wird, konstruiert der Browser die Zeichenkette "?x,y", wobei x und y die Koordinaten angeben, an denen die Maus geklickt wurde, als Offsets von der oberen linken Ecke des Bildes, in CSS-Pixeln angegeben.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Element/a#download)-Attributs.

Im Gegensatz zu serverseitigen Image-Maps bewirken clientseitige Image-Maps nicht, dass das {{HTMLElement("img")}}-Element den interaktiven Inhaltsmodus annimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
