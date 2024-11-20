---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface liefert Timing-Informationen über die größte Bild- oder Textdarstellung vor der Benutzereingabe auf einer Webseite.

## Beschreibung

Der wichtigste Moment, den diese API bereitstellt, ist die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP)-Metrik. Sie liefert die Renderzeit des größten Bildes oder Textblocks, der innerhalb des Viewports sichtbar ist und erfasst wird, ab dem Moment, wenn die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image)-Elemente innerhalb eines SVG.
- Die Poster-Bilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z.B. {{HTMLElement("p")}}.

Um die Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Zusätzliche wichtige Darstellungszeitpunkte werden von der [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeit, wann irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Paints optional ist, nicht alle User Agents melden es.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeit, wann das erste Stück DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem es die Eigenschaften wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags zurück, falls dieser nicht `0` ist, ansonsten den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` auf dieses Interface nicht anwendbar ist.

Es unterstützt auch die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das die aktuelle größte contentful paint ist.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Möglicherweise nicht verfügbar, wenn das Element ein Cross-Origin-Bild ist, das ohne das `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements wird als Fläche (Breite \* Höhe) zurückgegeben.
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Falls das Element ein Bild ist, die URL des Bildanforderung.

## Instanzmethoden

_Dieses Interface erbt auch von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Methoden._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachten der größten contentful paint

Im folgenden Beispiel wird ein Observer registriert, um die größte contentful paint während des Ladens der Seite zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen.

Die LCP-API analysiert alle Inhalte, die sie findet (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neue größere Inhalte gefunden werden, wird ein neuer Eintrag erstellt. Die Suche nach größeren Inhalten wird beendet, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Webseite einführen. Daher ist die LCP der letzte vom Observer gemeldete Leistungs-Eintrag.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Cross-Origin-Bilddarstellungszeit

Aus Sicherheitsgründen ist der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft `0`, wenn die Ressource eine Cross-Origin-Anforderung ist. Stattdessen wird die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) offengelegt. Um Informationen zur Cross-Origin-Renderzeit offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, die `renderTime` zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Codebeispiel gezeigt, können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, die den Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) des Eintrags zurückgibt, wenn dieser nicht `0` ist und ansonsten den Wert der [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie etwaige Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_Paint", "First Paint")}}
