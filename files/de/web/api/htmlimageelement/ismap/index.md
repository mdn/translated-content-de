---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`isMap`** ist ein
Boolescher Wert, der anzeigt, dass das Bild von einer serverseitigen Bildkarte verwendet werden soll.
Diese Eigenschaft darf nur bei Bildern verwendet werden, die sich innerhalb eines {{HTMLElement("a")}}-Elements befinden.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie die Verwendung von
> serverseitigen Bildkarten generell vermeiden, da diese die Nutzung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Bildkarte](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein Boolescher Wert, der `true` ist, wenn das Bild für eine serverseitige
Bildkarte verwendet wird; andernfalls ist der Wert `false`.

## Anwendungshinweise

Wenn auf ein Bild geklickt wird, das als Teil einer serverseitigen Bildkarte markiert ist, erstellt der Browser
den String "?x,y", wobei x und y die Koordinaten angeben, an denen die
Maus als Offsets von der oberen linken Ecke des Bildes geklickt wurde, angegeben in CSS-Pixeln.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie herunter,
abhängig vom Wert des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.

Im Gegensatz zu serverseitigen Bildkarten führen clientseitige Bildkarten nicht dazu, dass das
{{HTMLElement("img")}}-Element in den interaktiven Inhaltsmodus wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
