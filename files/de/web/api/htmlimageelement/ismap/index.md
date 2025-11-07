---
title: "HTMLImageElement: isMap-Eigenschaft"
short-title: isMap
slug: Web/API/HTMLImageElement/isMap
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`isMap`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces zeigt an, dass das Bild Teil einer [serverseitigen Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet. Sie spiegelt das [`ismap`](/de/docs/Web/HTML/Reference/Elements/img#ismap)-Inhaltsattribut des `<img>`-Elements wider. Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist.

> [!NOTE]
> Aus Gründen der Barrierefreiheit sollten Sie generell vermeiden, serverseitige Image Maps zu verwenden, da diese die Nutzung einer Maus erfordern. Verwenden Sie stattdessen eine [clientseitige Image Map](/de/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image).

## Wert

Ein Boolean-Wert, der `true` ist, wenn das Bild für eine serverseitige Image Map verwendet wird; andernfalls ist der Wert `false`.

## Verwendungshinweise

Wenn auf ein Bild, das als Teil einer serverseitigen Image Map markiert ist, geklickt wird, konstruiert der Browser die Zeichenkette "?x,y", wobei x und y die Koordinaten angeben, an denen die Maus in Bezug auf die obere linke Ecke des Bildes in CSS-Pixeln geklickt wurde.

Der Browser ruft dann die URL vom Server ab und zeigt sie entweder an oder lädt sie herunter, abhängig vom Wert des [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)-Attributs.

Im Gegensatz zu serverseitigen Image Maps führt die Nutzung von clientseitigen Image Maps nicht dazu, dass das {{HTMLElement("img")}}-Element den interaktiven Inhaltsmodus annimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
