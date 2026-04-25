---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface liefert Zeitinformationen über das größte Bild oder den größten Textinhalt, der vor der Benutzereingabe auf einer Webseite gerendert wird.

## Beschreibung

Der wichtigste Moment, den diese API bereitstellt, ist die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP)-Metrik. Sie gibt die Renderzeit des größten Bildes oder Textblocks an, der innerhalb des Sichtfensters sichtbar ist, gemessen ab dem Zeitpunkt, an dem die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Zusätzliche wichtige Renderzeitpunkte werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, an dem irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Anstrichs optional ist, nicht alle User Agents berichten darüber.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, an dem das erste Stück DOM-Text oder -Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Um eine genaue Messung der Renderzeit für Ressourcen von Fremdquellen zu erhalten, setzen Sie den {{httpheader("Timing-Allow-Origin")}}-Header.

Siehe [Renderzeit für Fremdbilder](/de/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) und [Verwenden Sie startTime über renderTime](/de/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime) für weitere Details.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das den aktuell größten inhaltsreichen Anstrich darstellt.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Kann ein vereinfachter Wert sein, wenn das Element ein Fremdbild ist, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die Renderphase endete und die Anstrichphase begann.
- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die gerenderten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` auf dieses Interface nicht anwendbar ist.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachten des größten inhaltsreichen Anstrichs

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um den größten inhaltsreichen Anstrich zu erfassen, während die Seite geladen wird. Der `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers verfügbar sind.

Die LCP-API analysiert alle gefundenen Inhalte (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neuer größerer Inhalt gefunden wird, wird ein neuer Eintrag erstellt. Sie hört auf, nach größerem Inhalt zu suchen, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neuen Inhalt auf der Website einführen. Das LCP ist somit der letzte Leistungseintrag, der vom Observer gemeldet wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Beobachten separater Anstrich- und Präsentationszeiten

Die `paintTime`- und `presentationTime`-Eigenschaften ermöglichen es Ihnen, spezifische Zeitangaben für den Beginn der Anstrichphase und das tatsächliche Zeichnen der gerenderten Pixel auf dem Bildschirm abzurufen. Die `paintTime` ist weitgehend interoperabel, während die `presentationTime` implementierungsabhängig ist.

Dieses Beispiel baut auf dem früheren Observer-Beispiel auf und zeigt, wie man die Unterstützung für `paintTime` und `presentationTime` überprüft und diese Werte abrufen kann, wenn sie verfügbar sind. In nicht unterstützenden Browsern ruft der Code die `renderTime` oder `loadTime` ab, je nachdem, was unterstützt wird.

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
