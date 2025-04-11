---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft **`loading`** ist ein String, dessen Wert dem {{Glossary("user_agent", "User-Agent")}} einen Hinweis gibt, wie das Laden des Bildes zu handhaben ist, das sich derzeit außerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} des Fensters befindet.

Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden des Bildes aufgeschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort während des anfänglichen Seitenladens zu laden.

## Wert

Ein String, der dem User-Agent einen Hinweis gibt, wie das Laden des Bildes am besten geplant werden kann, um die Seitenleistung zu optimieren. Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten, `eager`, weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weist den User-Agent an, das Laden des Bildes zurückzustellen, bis der Browser schätzt, dass es in Kürze benötigt wird. Zum Beispiel, wenn der Benutzer durch das Dokument scrollt, bewirkt ein Wert von `lazy`, dass das Bild erst kurz vor dem Erscheinen im {{Glossary("visual_viewport", "visuellen Viewport")}} geladen wird.

## Verwendungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur aufgeschoben, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, weil, wenn ein User-Agent das verzögerte Laden ohne aktiviertes Skripting unterstützen würde, es weiterhin möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch so im Markup einer Seite platziert werden, dass ein Server erfassen kann, wie viele Bilder angefordert werden und wann.

### Zeitpunkt des Laden-Events

Das [`load`](/de/docs/Web/API/Window/load_event)-Event wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde. Wenn Bilder eifrig geladen werden (was das Standardverhalten ist), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Event ausgelöst werden kann.

Indem Sie den Wert `lazy` für `loading` angeben, verhindern Sie, dass das Bild das `load`-Attribut um die Zeit verzögert, die benötigt wird, um das Bild anzufordern, abzurufen und zu verarbeiten.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, aber sich beim initialen Laden der Seite im visuellen Viewport befinden, werden geladen, sobald das Layout bekannt ist, aber ihr Laden verzögert nicht die Auslösung des `load`-Events. Mit anderen Worten: Diese Bilder werden nicht sofort beim Verarbeiten des `<img>`-Elements geladen, aber dennoch als Teil des initialen Ladens der Seite berücksichtigt. Sie beeinflussen nur nicht das Timing des `load`-Events.

Das bedeutet, dass beim Auslösen von `load` möglicherweise any "lazy-geladene" Bilder im visuellen Viewport noch nicht sichtbar sind.

### Verhindern der Elementverschiebung während des Lazy-Loads von Bildern

Wenn ein Bild, dessen Laden durch das `loading`-Attribut auf `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der intrinsischen Größe des Bildes und passt das Dokumentlayout nach Bedarf an, um die Positionen der Elemente zu aktualisieren, die durch eine Größenänderung des Elements angepasst werden müssen, um das Bild zu passen.

Um dieses Neuflowen zu verhindern, sollten Sie die Größe der Bilddarstellung explizit mithilfe der [`width`](/de/docs/Web/HTML/Reference/Elements/img#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/img#height)-Attribute des Bildelements angeben. Durch das Festlegen des intrinsischen {{Glossary("aspect_ratio", "Seitenverhältnisses")}} auf diese Weise verhindern Sie, dass sich Elemente während des Ladens des Dokuments verschieben, was im besten Fall verstörend oder abstoßend sein kann und im schlechtesten Fall dazu führen kann, dass Benutzer auf etwas Falsches klicken, abhängig vom genauen Timing der verzögerten Ladevorgänge und Layoutänderungen.

## Beispiele

Die unten gezeigte `addImageToList()`-Funktion fügt ein Foto-Thumbnail zu einer Liste von Elementen hinzu, wobei Lazy-Loading verwendet wird, um das Laden des Bildes aus dem Netzwerk zu vermeiden, bis es tatsächlich benötigt wird.

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
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) im MDN Lernbereich
- [Lazy loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN Web-Performance-Leitfaden
