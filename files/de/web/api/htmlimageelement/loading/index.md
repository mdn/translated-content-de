---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`loading`** ist ein String, dessen Wert dem [User-Agent](/de/docs/Glossary/user_agent) einen Hinweis gibt, wie das Laden des Bildes, das sich derzeit außerhalb des [visuellen Viewports](/de/docs/Glossary/visual_viewport) des Fensters befindet, gehandhabt werden soll.

Dies hilft, das Laden der Inhalte des Dokuments zu optimieren, indem das Laden des Bildes verschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort beim initialen Seitenaufruf zu laden.

## Wert

Ein String, der dem User-Agent einen Hinweis darauf gibt, wie das Laden des Bildes am besten geplant werden kann, um die Leistung der Seite zu optimieren.
Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten, `eager`, weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weist den User-Agent an, das Laden des Bildes aufzuschieben, bis der Browser schätzt, dass es bald benötigt wird.
    Beispielsweise wird ein Bild, wenn der Benutzer durch das Dokument scrollt, mit einem Wert von `lazy` erst kurz vor seinem Erscheinen im [visuellen Viewport](/de/docs/Glossary/visual_viewport) geladen.

## Verwendungshinweise

> [!NOTE]
> In Firefox muss das `loading`-Attribut vor dem `src`-Attribut definiert werden, sonst hat es keine Wirkung ([Firefox-Bug 1647077](https://bugzil.la/1647077)).

### JavaScript muss aktiviert sein

Das Laden wird nur verschoben, wenn JavaScript aktiviert ist.
Dies ist eine Maßnahme gegen Tracking, denn wenn ein User-Agent Lazy Loading unterstützen würde, während Scripting deaktiviert ist, könnte eine Website dennoch die ungefähre Scroll-Position eines Benutzers während einer Sitzung verfolgen, indem sie strategisch Bilder im Markup einer Seite platziert, so dass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

### Zeitpunkt des Load-Events

Das [`load`](/de/docs/Web/API/Window/load_event)-Event wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.
Wenn Bilder eifrig geladen werden (was der Standard ist), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Event ausgelöst werden kann.

Durch die Angabe des Werts `lazy` für `loading` verhindern Sie, dass das Bild das `load`-Attribut um die Zeit verzögert, die es benötigt, um das Bild anzufordern, abzurufen und zu verarbeiten.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, aber sich sofort beim initialen Seitenaufruf innerhalb des visuellen Viewports befinden, werden geladen, sobald das Layout bekannt ist, aber ihr Laden verzögert nicht das Auslösen des `load`-Events.
Mit anderen Worten, diese Bilder werden nicht sofort beim Verarbeiten des `<img>`-Elements geladen, sondern dennoch als Teil des initialen Seitenaufrufs.
Sie beeinflussen lediglich nicht das Timing des `load`-Events.

Das bedeutet, dass, wenn `load` ausgelöst wird, möglicherweise immer noch keine der Lazy-Loaded-Bilder, die sich im visuellen Viewport befinden, sichtbar sind.

### Verhindern von Elementverschiebungen während des Lazy-Loadings von Bildern

Wenn ein Bild, dessen Laden durch das Setzen des `loading`-Attributs auf `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der intrinsischen Größe des Bildes und führt dann das Dokument neu aus, um die Positionen der Elemente basierend auf jeder Größenänderung zu aktualisieren, die am Element vorgenommen wurde, um das Bild einzupassen.

Um dieses Neuausführen zu verhindern, sollten Sie die Größe der Präsentation des Bildes explizit mit den [`width`](/de/docs/Web/HTML/Element/img#width)- und
[`height`](/de/docs/Web/HTML/Element/img#height)-Attributen des Bildelements angeben.
Durch das Festlegen des intrinsischen [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio) auf diese Weise verhindern Sie, dass sich Elemente verschieben, während das Dokument geladen wird, was im besten Fall verwirrend oder abschreckend sein kann und im schlimmsten Fall dazu führen kann, dass Benutzer auf das Falsche klicken, abhängig von der genauen Timing der verschobenen Ladungen und Neuflüsse.

## Beispiele

Die `addImageToList()`-Funktion unten fügt eine Foto-Miniaturansicht zu einer Liste von Elementen hinzu, indem Lazy Loading verwendet wird, um das Bild vom Netzwerk erst zu laden, wenn es tatsächlich benötigt wird.

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
- [Web-Performance](/de/docs/Learn/Performance) im MDN-Lernbereich
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Webperformance-Leitfaden
