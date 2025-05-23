---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Performance API")}}

Die `LargestContentfulPaint`-Schnittstelle liefert Timing-Informationen über das größte Bild oder den größten Text, der gerendert wird, bevor der Nutzer auf einer Webseite interagiert.

## Beschreibung

Der Schlüssel-Moment, den diese API bietet, ist die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP)-Metrik. Sie gibt die Renderzeit des größten Bildes oder Textblocks an, das innerhalb des Ansichtsfensters sichtbar ist und vom Zeitpunkt des Erstladens der Seite aufgezeichnet wird. Die folgenden Elemente werden bei der Bestimmung der LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elemente innerhalb eines SVG.
- Die Vorschaubilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z.B. {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Zusätzliche Schlüssel-Momente werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, an dem irgendetwas gerendert wird. Beachten Sie, dass das Markieren des ersten Renderings optional ist und nicht alle Benutzeragenten es melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, an dem das erste Stück DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieser Eintragung zurück, falls dieser nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime).
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.

Es unterstützt auch die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das derzeit das größte "Contentful Paint" darstellt.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, wann das Element auf dem Bildschirm gerendert wurde. Möglicherweise nicht verfügbar, wenn es sich um ein Cross-Origin-Bild handelt, das ohne das `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, wann das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anfrage-URL des Bildes.

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachtung des größten "Contentful Paint"

Im folgenden Beispiel wird ein Beobachter registriert, um das größte "Contentful Paint" während des Ladens der Seite zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zugreifen zu können.

Die LCP-API analysiert alle Inhalte, die sie findet (einschließlich Inhalten, die aus dem DOM entfernt werden). Wenn neuer, größerer Inhalt gefunden wird, erstellt sie einen neuen Eintrag. Die Suche nach größerem Inhalt endet, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neuen Inhalt auf der Webseite einführen. Das LCP ist somit der letzte Performance-Eintrag, der durch den Beobachter gemeldet wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit für Cross-Origin-Bilder

Aus Sicherheitsgründen war der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen sollte die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime)-Eigenschaft als Fallback verwendet werden.

Browser [könnten jetzt eine leicht vergröberte Renderzeit](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen offenlegen. Prüfen Sie die [Unterstützung durch den Browser](#browser-kompatibilität).

Um genauere Informationen zur Cross-Origin-Renderzeit zu veröffentlichen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` eine genaue `renderTime`-Angabe zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Code-Beispiel gezeigt, können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, die den Wert des Eintrags von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) zurückgibt, wenn er nicht `0` ist, und andernfalls den Wert dieses Eintrags von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime). Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer werden.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = Boolean(entry.renderTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
- {{Glossary("First_Paint", "First Paint")}}
