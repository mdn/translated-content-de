---
title: "HTMLImageElement: loading-Eigenschaft"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`loading`** ist ein String, dessen Wert dem {{Glossary("user_agent", "User-Agent")}} einen Hinweis gibt, wie das Laden des Bildes, das sich derzeit außerhalb des visuellen Viewports des Fensters befindet, gehandhabt werden soll.

Dies hilft, das Laden der Inhalte eines Dokuments zu optimieren, indem das Laden des Bildes bis zu dem Zeitpunkt verschoben wird, an dem es voraussichtlich benötigt wird, anstatt es sofort während des anfänglichen Seitenladevorgangs zu laden.

## Wert

Ein String, der dem User-Agent einen Hinweis gibt, wie das Laden des Bildes am besten geplant werden kann, um die Leistung der Seite zu optimieren.
Die möglichen Werte sind:

- `eager`
  - : Das Standardverhalten, `eager`, weist den Browser an, das Bild zu laden, sobald das `<img>`-Element verarbeitet wird.
- `lazy`
  - : Weist den User-Agent an, das Laden des Bildes solange aufzuschieben, bis der Browser schätzt, dass es bald benötigt wird.
    Zum Beispiel, wenn der Benutzer durch das Dokument scrollt, wird ein Wert von `lazy` bewirken, dass das Bild nur kurz bevor es im visuellen Viewport des Fensters erscheint, geladen wird.

## Verwendungshinweise

> [!NOTE]
> In Firefox muss das `loading`-Attribut vor dem `src`-Attribut definiert sein, sonst hat es keine Wirkung ([Firefox-Bug 1647077](https://bugzil.la/1647077)).

### JavaScript muss aktiviert sein

Das Laden wird nur verzögert, wenn JavaScript aktiviert ist.
Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein User-Agent Lazy-Loading unterstützen würde, während Scripting deaktiviert ist, wäre es dennoch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

### Zeitpunkt des Ladeereignisses

Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, wenn das Dokument vollständig verarbeitet wurde.
Wenn Bilder eifrig geladen werden (was der Standard ist), muss jedes Bild im Dokument abgerufen werden, bevor das `load`-Ereignis ausgelöst werden kann.

Durch Angabe des Wertes `lazy` für `loading` verhindern Sie, dass das Bild das `load`-Attribut um die Zeit verzögert, die zum Anfordern, Abrufen und Verarbeiten des Bildes benötigt wird.

Bilder, deren `loading`-Attribut auf `lazy` gesetzt ist, die sich jedoch innerhalb des visuellen Viewports direkt nach dem anfänglichen Seitenladen befinden, werden geladen, sobald das Layout bekannt ist, aber deren Ladevorgänge verzögern das Auslösen des `load`-Ereignisses nicht.
Mit anderen Worten laden diese Bilder nicht sofort beim Verarbeiten des `<img>`-Elements, sind jedoch immer noch Teil des anfänglichen Seitenladens.
Sie beeinflussen einfach nicht den Zeitpunkt des `load`-Ereignisses.

Das bedeutet, dass wenn `load` ausgelöst wird, es möglich ist, dass alle lazy-geladenen Bilder, die sich im visuellen Viewport befinden, noch nicht sichtbar sind.

### Verhindern von Elementverschiebungen während des Lazy-Loadings von Bildern

Wenn ein Bild, dessen Laden durch das `loading`-Attribut mit dem Wert `lazy` verzögert wurde, schließlich geladen wird, bestimmt der Browser die endgültige Größe des {{HTMLElement("img")}}-Elements basierend auf dem Stil und der intrinsischen Größe des Bildes und überarbeitet das Dokument nach Bedarf, um die Position der Elemente basierend auf jeder Größenänderung zu aktualisieren, die am Element vorgenommen wird, um das Bild anzupassen.

Um diese Überarbeitung zu verhindern, sollten Sie die Größe der Bilddarstellung ausdrücklich mithilfe der Attribute [`width`](/de/docs/Web/HTML/Element/img#width) und [`height`](/de/docs/Web/HTML/Element/img#height) des Bildelements angeben.
Indem Sie das intrinsische {{Glossary("aspect_ratio", "Seitenverhältnis")}} auf diese Weise festlegen, verhindern Sie, dass sich Elemente während des Ladens des Dokuments verschieben, was im besten Fall irritierend oder abschreckend sein kann und im schlimmsten Fall Benutzer dazu bringen kann, versehentlich das falsche Objekt anzuklicken, abhängig vom genauen Timing der verzögerten Ladevorgänge und Überarbeitungen.

## Beispiele

Die unten gezeigte Funktion `addImageToList()` fügt eine Fotominiaturansicht zu einer Liste von Elementen hinzu und verwendet Lazy-Loading, um das Laden des Bildes aus dem Netzwerk zu vermeiden, bis es tatsächlich benötigt wird.

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
- [Lazy Loading](/de/docs/Web/Performance/Lazy_loading) im MDN-Webperformance-Leitfaden
