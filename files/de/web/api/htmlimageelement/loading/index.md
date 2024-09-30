---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`loading`** des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) ist ein String, dessen Wert dem [User-Agent](/de/docs/Glossary/user_agent) einen Hinweis gibt, wie das Laden des Bildes, das sich derzeit außerhalb des [visuellen Viewports](/de/docs/Glossary/visual_viewport) des Fensters befindet, gehandhabt werden soll.

Dies hilft, das Laden der Dokumenteninhalte zu optimieren, indem das Laden des Bildes aufgeschoben wird, bis es voraussichtlich benötigt wird, anstatt es sofort während des initialen Seitenladevorgangs zu laden.

## Wert

Ein String, der dem User-Agent einen Hinweis gibt, wie das Laden des Bildes am besten geplant werden kann, um die Seitenleistung zu optimieren. Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten, `eager` weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weis dem User-Agent an, das Laden des Bildes aufzuschieben, bis der Browser schätzt, dass es bald benötigt wird. Zum Beispiel, wenn der Nutzer durch das Dokument scrollt, bewirkt ein Wert von `lazy`, dass das Bild erst kurz vor dem Erscheinen im [visuellen Viewport](/de/docs/Glossary/visual_viewport) des Fensters geladen wird.

## Nutzungshinweise

> [!NOTE]
> In Firefox muss das `loading`-Attribut vor dem `src`-Attribut definiert werden, andernfalls hat es keine Wirkung ([Firefox-Bug 1647077](https://bugzil.la/1647077)).

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, denn wenn ein User-Agent Lazy-Loading unterstützen würde, wenn Skripting deaktiviert ist, wäre es dennoch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem man Bilder strategisch in das Markup einer Seite einfügt, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

### Timing des Load-Ereignisses

Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde. Wenn Bilder eifrig geladen werden (das ist der Standard), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

Durch die Angabe des Werts `lazy` für `loading` verhindern Sie, dass das Bild das `load`-Attribut um die Zeit verzögert, die für das Anfordern, Abrufen und Verarbeiten des Bildes benötigt wird.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, die sich jedoch beim ersten Laden der Seite sofort im visuellen Viewport befinden, werden geladen, sobald das Layout bekannt ist. Ihr Laden verzögert jedoch nicht das Auslösen des `load`-Ereignisses. Mit anderen Worten, diese Bilder werden nicht sofort beim Verarbeiten des `<img>`-Elements geladen, sondern sind dennoch Teil des initialen Seitenladens. Sie beeinflussen einfach nicht das Timing des `load`-Ereignisses.

Das bedeutet, dass bei Auslösung von `load` möglicherweise alle lazy-geladenen Bilder, die sich im visuellen Viewport befinden, noch nicht sichtbar sind.

### Verhindern von Elementverschiebungen während des Lazy-Loadings von Bildern

Wenn ein Bild, dessen Laden durch das `loading`-Attribut auf `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der intrinsischen Größe des Bildes, und passt dann das Dokument bei Bedarf neu an, um die Positionen von Elementen basierend auf einer Größenänderung des Elements zu aktualisieren.

Um dieses Neuanpassen zu verhindern, sollten Sie die Präsentationsgröße des Bildes explizit mit den Attributen [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) des Bild-Elements angeben. Durch das Festlegen des intrinsischen [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio) auf diese Weise verhindern Sie, dass sich Elemente während des Ladens des Dokuments verschieben, was im besten Fall irritierend oder abschreckend sein kann und im schlimmsten Fall dazu führen kann, dass Nutzer das falsche Element anklicken, abhängig vom genauen Timing der verzögerten Ladevorgänge und Neuanpassungen.

## Beispiele

Die unten gezeigte Funktion `addImageToList()` fügt ein Foto-Thumbnail zu einer Liste von Elementen hinzu und nutzt Lazy-Loading, um das Laden des Bildes aus dem Netzwerk zu vermeiden, bis es tatsächlich benötigt wird.

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
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Web-Performance-Leitfaden
