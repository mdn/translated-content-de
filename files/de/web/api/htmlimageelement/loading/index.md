---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 8bc1b82b5526140a0bd6cfc147b74bf74947a09d
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`loading`** ist ein String, dessen Wert einen Hinweis darauf gibt, wie der {{Glossary("user_agent", "User-Agent")}} das Laden des Bildes, das sich derzeit außerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} des Fensters befindet, behandeln soll.

Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden des Bildes hinausgeschoben wird, bis es wahrscheinlich benötigt wird, anstatt sofort beim initialen Seitenladen.

## Wert

Ein String, der dem User-Agent einen Hinweis gibt, wie das Laden des Bildes am besten geplant werden soll, um die Seitenleistung zu optimieren.
Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten, `eager` weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weist den User-Agent an, das Laden des Bildes zurückzustellen, bis der Browser schätzt, dass es bald benötigt wird.
    Zum Beispiel, wenn der Benutzer durch das Dokument scrollt, bewirkt ein Wert von `lazy`, dass das Bild erst kurz vor seinem Erscheinen im {{Glossary("visual_viewport", "visuellen Viewport")}} geladen wird.

## Nutzungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
Dies ist eine Maßnahme gegen Tracking, da es einer Website möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

### Zeitpunkt des Lade-Events

Das [`load`](/de/docs/Web/API/Window/load_event)-Event wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.
Wenn Bilder eifrig geladen werden (was der Standard ist), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Event ausgelöst werden kann.

Durch das Festlegen des Wertes `lazy` für `loading` verhindern Sie, dass das Bild das `load`-Attribut um die Zeit verzögert, die benötigt wird, um das Bild anzufordern, abzurufen und zu verarbeiten.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, die sich jedoch sofort nach dem initialen Laden der Seite im visuellen Viewport befinden, werden geladen, sobald das Layout bekannt ist, aber ihr Laden verzögert nicht die Auslösung des `load`-Events.
Mit anderen Worten, diese Bilder werden nicht sofort beim Verarbeiten des `<img>`-Elements geladen, sind aber dennoch Teil des initialen Seitenladens.
Sie beeinflussen lediglich nicht das Timing des `load`-Events.

Das bedeutet, dass es möglich ist, wenn `load` ausgelöst wird, dass noch nicht alle lazy-geladenen Bilder, die sich im visuellen Viewport befinden, sichtbar sind.

### Verhinderung von Elementverschiebungen während des Lazy-Ladens von Bildern

Wenn ein Bild, dessen Laden durch das `loading`-Attribut auf `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der intrinsischen Größe des Bildes und überarbeitet das Dokument nach Bedarf, um die Positionen der Elemente basierend auf jeder Größenänderung anzupassen, die am Element vorgenommen wird, um das Bild anzupassen.

Um diesen Reflow zu verhindern, sollten Sie die Größe der Bildpräsentation ausdrücklich mit den Attributen [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) des Bildelements angeben.
Indem Sie auf diese Weise das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} festlegen, verhindern Sie, dass sich Elemente während des Ladens des Dokuments verschieben, was im besten Fall irritierend oder unattraktiv sein kann und im schlimmsten Fall dazu führen kann, dass Benutzer fälschlicherweise auf etwas klicken, abhängig vom genauen Timing der verzögerten Ladevorgänge und Reflows.

## Beispiele

Die unten gezeigte Funktion `addImageToList()` fügt ein Foto-Thumbnail zu einer Liste von Elementen hinzu und verwendet Lazy-Loading, um zu vermeiden, dass das Bild aus dem Netzwerk geladen wird, bis es tatsächlich benötigt wird.

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  let newItem = document.createElement("div");
  newItem.className = "photo-item";

  let newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("img")}}-Element
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) im MDN-Lernbereich
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Web-Performance-Leitfaden
