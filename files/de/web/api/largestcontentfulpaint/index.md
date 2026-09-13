---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface bietet Zeitinformationen über das größte Bild oder den größten Textblock, der vor einer Benutzereingabe auf einer Webseite dargestellt wird.

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das derzeit das größte contentful paint ist.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Dies kann ein abgeschwächter Wert sein, wenn das Element ein cross-origin Bild ist, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gemalten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften und qualifiziert und beschränkt diese wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht anwendbar ist.

## Instanz-Methoden

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON) Methode, um eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurückzugeben.

## Beschreibung

Der Schlüsselmoment, den diese API liefert, ist die Metrik des {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP). Sie liefert die Renderzeit des größten innerhalb des Viewports sichtbaren Bildes oder Textblocks, gemessen ab Beginn des Seitenladens. Die folgenden Elemente werden als {{Glossary("Contentful_paint", "contentful")}} betrachtet, wenn LCP ermittelt wird:

- {{HTMLElement("img")}} Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}} Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie etwa {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Zusätzliche wichtige Paint-Momente werden von der [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem etwas gerendert wird. Beachten Sie, dass die Markierung des ersten Paint optional ist, nicht alle Benutzeragenten berichten darüber.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem das erste Stück DOM-Text oder Bild-Inhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Um eine genaue Messung der Renderzeit für cross-origin Ressourcen zu erhalten, setzen Sie den {{httpheader("Timing-Allow-Origin")}} Header.

Siehe [Cross-origin image render time](/de/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) und [Use startTime over renderTime](/de/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) für weitere Details.

## Beispiele

### Beobachten des größten contentful paint

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um das größte contentful paint während des Ladens der Seite zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

Die LCP-API analysiert alle gefundenen Inhalte (einschließlich Inhalte, die aus dem DOM entfernt wurden). Wenn neue größere Inhalte gefunden werden, erstellt sie einen neuen Eintrag. Sie hört auf, nach größeren Inhalten zu suchen, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Website einführen. Daher ist das LCP der letzte vom Observer gemeldete Performance-Eintrag.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Beobachten separater Paint- und Präsentationszeiten

Die Eigenschaften `paintTime` und `presentationTime` ermöglichen es Ihnen, spezifische Zeiten für den Beginn der Paint-Phase und das Zeichnen der gemalten Pixel auf dem Bildschirm abzurufen. Die `paintTime` ist breit interoperabel, während die `presentationTime` implementierungsabhängig ist.

Dieses Beispiel baut auf dem vorherigen Observer-Beispiel auf und zeigt, wie Sie die Unterstützung für `paintTime` und `presentationTime` überprüfen und diese Werte abrufen, wenn sie verfügbar sind. In nicht unterstützenden Browsern ruft der Code die `renderTime` oder `loadTime` ab, je nachdem, was unterstützt wird.

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
