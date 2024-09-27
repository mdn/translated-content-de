---
title: "HTMLImageElement: isMap Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft **`isMap`** ist ein Boolean-Wert, der angibt, dass das Bild von einer serverseitigen Image Map verwendet wird. Dies darf nur bei Bildern verwendet werden, die sich innerhalb eines {{HTMLElement("a")}} Elements befinden.

> [!NOTE]
> Aus Gründen der Zugänglichkeit sollten Sie generell vermeiden, serverseitige Image Maps zu verwenden, da diese die Verwendung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Image Map](/de/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Bild für eine serverseitige Image Map verwendet wird; andernfalls ist der Wert `false`.

## Hinweise zur Nutzung

Wenn auf ein Bild geklickt wird, das als Teil einer serverseitigen Image Map markiert ist, konstruiert der Browser den String "?x,y", wobei x und y die Koordinaten angeben, an denen auf das Bild geklickt wurde, angegeben als Abstände von der oberen linken Ecke des Bildes in CSS-Pixeln.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Element/a#download) Attributs.

Anders als serverseitige Image Maps führen clientseitige Image Maps nicht dazu, dass das {{HTMLElement("img")}} Element in den interaktiven Inhaltsmodus wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
