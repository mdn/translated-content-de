---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("HTML DOM")}}

Die **`isMap`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces gibt an, dass das Bild Teil einer [serverseitigen Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer auf dem Bild geklickt hat, an den Server gesendet. Sie spiegelt das `ismap`-Inhaltsattribut des `<img>`-Elements wider. Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie generell vermeiden, serverseitige Image Maps zu verwenden, da diese die Benutzung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Image Map](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein boolescher Wert, der `true` ist, wenn das Bild für eine serverseitige Image Map verwendet wird; andernfalls ist der Wert `false`.

## Nutzungshinweise

Wenn auf ein Bild geklickt wird, das als Teil einer serverseitigen Image Map markiert ist, konstruiert der Browser die Zeichenkette "?x,y", wobei x und y die Koordinaten angeben, an denen die Maus relativ zur oberen linken Ecke des Bildes in CSS-Pixeln geklickt wurde.

Der Browser ruft dann diese URL vom Server ab und zeigt sie an oder lädt sie herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.

Im Gegensatz zu serverseitigen Image Maps führt die Verwendung von clientseitigen Image Maps nicht dazu, dass das {{HTMLElement("img")}} Element den interaktiven Inhaltsmodus annimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
