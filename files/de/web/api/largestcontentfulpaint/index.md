---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die `LargestContentfulPaint`-Schnittstelle bietet Timing-Informationen über das größte Bild oder die größte Textdarstellung vor der Benutzereingabe auf einer Webseite.

## Beschreibung

Der wichtigste Moment, den diese API bereitstellt, ist die [Largest Contentful Paint](/de/docs/Glossary/Largest_Contentful_Paint) (LCP) Metrik. Sie gibt die Renderzeit des größten Bildes oder Textblocks an, der im sichtbaren Bereich des Viewports angezeigt wird, und zwar ab dem Zeitpunkt, an dem die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image)-Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z. B. {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Zusätzliche wichtige Rendering-Momente werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- [First paint](/de/docs/Glossary/First_paint) (FP): Zeit, zu der irgendetwas gerendert wird. Beachten Sie, dass das Markieren des ersten Renderns optional ist und nicht alle Benutzeragenten dies melden.
- [First contentful paint](/de/docs/Glossary/First_contentful_paint) (FCP): Zeit, zu der das erste Stück DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie diese wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieser Eintragung zurück, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieser Eintragung.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.

Es unterstützt auch die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das die aktuelle größte Contentful Paint ist.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Möglicherweise nicht verfügbar, wenn das Element ein Cross-Origin-Bild ist, das ohne das `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

## Instanzmethoden

_Diese Schnittstelle erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachtung der größten Contentful Paint

Im folgenden Beispiel wird ein Beobachter registriert, um die größte Contentful Paint während des Ladens der Seite zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten von vor der Erzeugung des Beobachters zuzugreifen.

Die LCP API analysiert alle Inhalte, die sie findet (einschließlich von Inhalten, die aus dem DOM entfernt wurden). Wenn neue größere Inhalte gefunden werden, wird ein neuer Eintrag erstellt. Sie hört auf, nach größeren Inhalten zu suchen, wenn Scroll- oder Eingabeevents auftreten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Website einbringen. Somit ist das LCP der letzte Leistungseintrag, der vom Beobachter gemeldet wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit bei Cross-Origin-Bildern

Aus Sicherheitsgründen ist der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen wird die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) offengelegt. Um Informationen zur Cross-Origin-Renderzeit offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwortheader gesetzt werden.

Um zum Beispiel `https://developer.mozilla.org` den Zugriff auf `renderTime` zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Codebeispiel, können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, welches den Wert der Eintragung der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) zurückgibt, wenn dieser nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieser Eintragung. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Largest Contentful Paint](/de/docs/Glossary/Largest_Contentful_Paint)
- [First contentful paint](/de/docs/Glossary/First_contentful_paint)
- [First paint](/de/docs/Glossary/First_paint)
