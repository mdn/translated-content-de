---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`loading`** des {{domxref("HTMLImageElement")}} ist ein String, dessen Wert dem {{Glossary("user agent")}} einen Hinweis darauf gibt, wie das Laden des Bildes gehandhabt werden soll, das sich derzeit außerhalb des {{Glossary("visual viewport")}} des Fensters befindet.

Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden des Bildes verschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort beim ersten Laden der Seite zu laden.

## Wert

Ein String, der dem User-Agent einen Hinweis gibt, wie das Laden des Bildes am besten geplant werden kann, um die Leistung der Seite zu optimieren. Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten, `eager`, weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weist den User-Agent an, das Laden des Bildes hinauszuzögern, bis der Browser schätzt, dass es bald benötigt wird.
    Zum Beispiel, wenn der Benutzer durch das Dokument scrollt, führt ein Wert von `lazy` dazu, dass das Bild erst kurz vor dem Erscheinen im {{Glossary("visual viewport")}} des Fensters geladen wird.

## Nutzungshinweise

> [!NOTE]
> In Firefox muss das `loading`-Attribut vor dem `src`-Attribut definiert werden, andernfalls hat es keine Wirkung ([Firefox-Bug 1647077](https://bugzil.la/1647077)).

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
Dies ist eine Maßnahme gegen Tracking, da es, wenn ein User-Agent Lazy Loading bei deaktiviertem Skripting unterstützen würde, dennoch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server nachverfolgen kann, wie viele Bilder angefordert werden und wann.

### Zeitpunkt des Load-Events

Das {{domxref("Window.load_event", "load")}}-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.
Wenn Bilder eifrig geladen werden (was der Standard ist), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

Indem Sie den Wert `lazy` für `loading` angeben, verhindern Sie, dass das Bild das `load`-Attribut um die Zeitspanne verzögert, die für das Anfordern, Abrufen und Verarbeiten des Bildes benötigt wird.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, sich jedoch sofort beim ersten Laden der Seite innerhalb des visuellen Viewports befinden, werden geladen, sobald das Layout bekannt ist, aber ihr Laden verzögert das Auslösen des `load`-Ereignisses nicht.
Das bedeutet, dass diese Bilder nicht sofort beim Verarbeiten des `<img>`-Elements geladen werden, aber dennoch Teil des ersten Seitenlads sind.
Sie beeinflussen lediglich nicht das Timing des `load`-Ereignisses.

Das bedeutet, dass beim Auslösen des `load`-Ereignisses möglicherweise noch keine lazy geladenen Bilder im visuellen Viewport sichtbar sind.

### Verhindern von Elementverschiebungen während des Lazy Loadings von Bildern

Wenn ein Bild, dessen Laden durch das `loading`-Attribut auf `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der intrinsischen Größe des Bildes und reflowt dann das Dokument bei Bedarf, um die Positionen von Elementen basierend auf möglichen Größenänderungen des Elements anzupassen, um das Bild zu passen.

Um dieses Reflow zu verhindern, sollten Sie die Größe der Bildpräsentation explizit über die [`width`](/de/docs/Web/HTML/Element/img#width)- und
[`height`](/de/docs/Web/HTML/Element/img#height)-Attribute des Bild-Elements angeben.
Indem Sie auf diese Weise das intrinsische {{glossary("aspect ratio")}} festlegen, verhindern Sie, dass sich Elemente während des Ladens des Dokuments verschieben, was bestenfalls irritierend oder abstoßend sein und schlimmstenfalls dazu führen kann, dass Benutzer versehentlich auf das Falsche klicken, abhängig vom genauen Timing der verzögerten Ladungen und Reflows.

## Beispiele

Die Funktion `addImageToList()`, die unten gezeigt wird, fügt eine Foto-Miniaturansicht zu einer Liste von Elementen hinzu und verwendet Lazy-Loading, um das Bild erst dann aus dem Netzwerk zu laden, wenn es tatsächlich benötigt wird.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("img")}}-Element
- [Web-Performance](/de/docs/Learn/Performance) im MDN Learning Area
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Web-Performance-Leitfaden
