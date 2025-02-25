---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`loading`** ist ein String, dessen Wert dem {{Glossary("user_agent", "User-Agent")}} einen Hinweis darauf gibt, wie das Laden des Bildes, welches sich derzeit außerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} des Fensters befindet, zu handhaben ist.

Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden des Bildes aufgeschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort beim ersten Laden der Seite zu laden.

## Wert

Ein String, der dem User-Agent einen Hinweis darauf gibt, wie das Laden des Bildes am besten terminiert werden sollte, um die Leistung der Seite zu optimieren.
Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten `eager` weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weist den User-Agent an, das Laden des Bildes aufzuschieben, bis der Browser schätzt, dass es in Kürze benötigt wird.
    Wenn der Benutzer beispielsweise durch das Dokument scrollt, wird ein Wert von `lazy` dazu führen, dass das Bild erst kurz bevor es im {{Glossary("visual_viewport", "visuellen Viewport")}} des Fensters erscheint, geladen wird.

## Anwendungshinweise

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
Dies ist eine Maßnahme gegen Verfolgung, denn wenn ein User-Agent Lazy Loading unterstützt, während das Scripting deaktiviert ist, wäre es einer Seite dennoch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

### Zeitpunkt des load-Events

Das [`load`](/de/docs/Web/API/Window/load_event)-Event wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.
Wenn Bilder eifrig geladen werden (was der Standard ist), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Event ausgelöst werden kann.

Durch die Angabe des Wertes `lazy` für `loading` verhindern Sie, dass das Bild das `load`-Attribut um die Zeit verzögert, die es zum Anfordern, Abrufen und Verarbeiten des Bildes braucht.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, die sich jedoch innerhalb des visuellen Viewports direkt beim ersten Laden der Seite befinden, werden geladen, sobald das Layout bekannt ist, aber ihr Laden verzögert nicht die Auslösung des `load`-Events.
Mit anderen Worten, diese Bilder werden nicht sofort beim Verarbeiten des `<img>`-Elements geladen, sind aber dennoch Teil des ersten Seitenladens.
Sie beeinflussen nur nicht den Zeitpunkt des `load`-Events.

Das bedeutet, dass beim Auslösen von `load` möglicherweise alle Lazy-Loaded-Bilder im visuell sichtbaren Bereich noch nicht sichtbar sind.

### Verhinderung von Elementverschiebung während des Image-Lazy-Loads

Wenn ein Bild, dessen Laden durch das `loading`-Attribut auf `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der inhärenten Größe des Bildes, dann wird das Dokument bei Bedarf neu geflossen, um die Positionen der Elemente basierend auf der Größenänderung, die am Element vorgenommen wurde, um das Bild zu passen, zu aktualisieren.

Um diesen Reflow zu verhindern, sollten Sie die Größe der Bilddarstellung explizit mit den [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height)-Attributen des Bildelements angeben.
Indem Sie das inhärente {{Glossary("aspect_ratio", "Seitenverhältnis")}} auf diese Weise festlegen, verhindern Sie, dass sich Elemente verschieben, während das Dokument geladen wird, was bestenfalls verwirrend oder störend sein kann und schlimmstenfalls dazu führen kann, dass Benutzer auf das Falsche klicken, abhängig vom genauen Zeitpunkt der verzögerten Ladevorgänge und Reflows.

## Beispiele

Die unten gezeigte Funktion `addImageToList()` fügt der Liste der Elemente ein Fotominiaturbild hinzu, wobei Lazy-Loading verwendet wird, um das Laden des Bildes aus dem Netzwerk zu vermeiden, bis es tatsächlich benötigt wird.

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
- [Web-Performance](/de/docs/Learn_web_development/Extensions/Performance) im MDN Learning Area
- [Lazy Loading](/de/docs/Web/Performance/Guides/Lazy_loading) im MDN Web-Performance-Leitfaden
