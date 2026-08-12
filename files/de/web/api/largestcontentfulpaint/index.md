---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface liefert Zeitinformationen über das größte Bild oder Text, das vor der Benutzereingabe auf einer Webseite gerendert wird.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das aktuell das größte inhaltsreiche Element ist.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Dies kann ein grober Wert sein, wenn das Element ein Cross-Origin-Bild ist, das ohne das `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, angegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und die Malphase begann.
- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die gemalten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

Es erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), wobei sie qualifiziert und eingeschränkt werden wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht anwendbar ist.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beschreibung

Der zentrale Moment, den diese API bereitstellt, ist die Metrik für das {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP). Sie gibt die Renderzeit des größten Bildes oder Textblocks an, der im sichtbaren Bereich des Ansichtsfensters gerendert wird, gemessen ab dem Zeitpunkt, an dem die Seite zu laden beginnt. Die folgenden Elemente werden als {{Glossary("Contentful_paint", "inhaltlich")}} betrachtet, wenn das LCP bestimmt wird:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elemente innerhalb eines SVG.
- Die Vorschaubilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie zum Beispiel {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Weitere wichtige Malmomente werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, wann irgendetwas gerendert wird. Beachten Sie, dass das Markieren des ersten Mals optional ist; nicht alle Benutzeragenten melden es.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, wann das erste Stück DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Um eine genaue Messung der Renderzeit für Cross-Origin-Ressourcen zu erhalten, setzen Sie den {{httpheader("Timing-Allow-Origin")}}-Header.

Siehe [Cross-origin image render time](/de/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) und [Use startTime over renderTime](/de/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) für weitere Details.

## Beispiele

### Beobachten des größten inhaltsreichen Elements

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um das größte inhaltsreiche Element während des Ladens der Seite zu erfassen. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

Die LCP-API analysiert alle gefundenen Inhalte (einschließlich Inhalte, die aus dem DOM entfernt wurden). Wenn neue größte Inhalte gefunden werden, wird ein neuer Eintrag erstellt. Sie hört auf, nach größeren Inhalten zu suchen, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Webseite einführen. Daher ist das LCP der letzte Leistungseintrag, der vom Beobachter gemeldet wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Beobachten von separaten Mal- und Darstellungsmomenten

Mit den Eigenschaften `paintTime` und `presentationTime` können Sie spezifische Zeitpunkte für den Beginn der Malphase und das tatsächliche Zeichnen der gemalten Pixel auf dem Bildschirm abrufen. Die `paintTime` ist weitgehend interoperabel, während die `presentationTime` implementierungsabhängig ist.

Dieses Beispiel baut auf dem früheren Beobachterbeispiel auf und zeigt, wie man die Unterstützung für `paintTime` und `presentationTime` überprüft und diese Werte abruft, wenn sie verfügbar sind. In nicht unterstützenden Browsern ruft der Code die `renderTime` oder `loadTime` ab, je nachdem, was unterstützt wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  if (lastEntry.presentationTime) {
    console.log(
      "LCP paintTime:",
      lastEntry.paintTime,
      "LCP presentationTime:",
      lastEntry.presentationTime,
    );
  } else if (lastEntry.paintTime) {
    console.log("LCP paintTime:", lastEntry.paintTime);
  } else if (lastEntry.renderTime) {
    console.log("LCP renderTime:", lastEntry.renderTime);
  } else {
    console.log("LCP loadTime:", lastEntry.loadTime);
  }
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_Paint", "First Paint")}}
