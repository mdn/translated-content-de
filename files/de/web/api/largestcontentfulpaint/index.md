---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die `LargestContentfulPaint`-Schnittstelle bietet Timing-Informationen über das größte Bild oder den größten Text, der vor Benutzereingaben auf einer Webseite gerendert wird.

## Beschreibung

Der zentrale Moment, den diese API liefert, ist die [Largest Contentful Paint](/de/docs/Glossary/Largest_Contentful_Paint) (LCP) Metrik. Sie gibt die Renderzeit des größten Bildes oder Textblocks an, der im sichtbaren Bereich innerhalb des Viewports angezeigt wird. Diese wird ab dem Moment gemessen, in dem die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung der LCP berücksichtigt:

- {{HTMLElement("img")}} Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image) Elemente innerhalb eines SVG.
- Die Plakatbilder von {{HTMLElement("video")}} Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie {{HTMLElement("p")}}.

Um die Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Zusätzliche wichtige Momentaufnahmen beim Rendern werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- [First paint](/de/docs/Glossary/First_paint) (FP): Zeitpunkt, zu dem irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Renders optional ist, nicht alle Benutzeragenten berichten darüber.
- [First contentful paint](/de/docs/Glossary/First_contentful_paint) (FCP): Zeitpunkt, zu dem der erste Teil des DOM-Textes oder Bildinhalts gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert und begrenzt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer eine leere Zeichenfolge zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) zurück, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime).
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.

Es unterstützt auch die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das derzeit die größte inhaltliche Darstellung hat.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf den Bildschirm gerendert wurde. Möglicherweise nicht verfügbar, wenn das Element ein fernen Ursprung-Bild ist, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt eine leere Zeichenfolge zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Falls das Element ein Bild ist, die Anfrage-URL des Bildes.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachtung der größten inhaltlichen Darstellung

Im folgenden Beispiel wird ein Beobachter registriert, um die größte inhaltliche Darstellung während des Ladevorgangs der Seite zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Beobachters vorhanden waren.

Die LCP-API analysiert alle gefundene Inhalte (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neuer, größerer Inhalt gefunden wird, erstellt sie einen neuen Eintrag. Sie stellt die Suche nach größeren Inhalten ein, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neuen Inhalt auf der Website einführen. Daher ist die LCP der letzte Leistungseintrag, der vom Beobachter gemeldet wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit von fernen Ursprung-Bildern

Aus Sicherheitsgründen ist der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft `0`, wenn es sich um eine Abfrage von einem fernen Ursprung handelt. Stattdessen wird die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) angezeigt. Um Informationen zur Renderzeit von fernen Ursprüngen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` die Ansicht von `renderTime` zu ermöglichen, sollte die ferne Ursprungsressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Code-Beispiel gezeigt, können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) des Eintrags zurückgibt, wenn er nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime). Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` verwendet wurde:

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
