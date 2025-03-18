---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface liefert Zeitinformationen über das größte Bild oder den größten Text, der vor der Benutzereingabe auf einer Webseite gerendert wird.

## Beschreibung

Der entscheidende Moment, den diese API bereitstellt, ist die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP) Metrik. Sie gibt die Renderzeit des größten sichtbaren Bildes oder Textblocks im Viewport an, gemessen ab dem Zeitpunkt, zu dem die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elemente innerhalb eines SVG.
- Die Poster-Bilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie {{HTMLElement("p")}}.

Um die Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API.

Weitere wichtige Render-Momente werden durch die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming) API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem irgendetwas gerendert wird. Beachten Sie, dass das Markieren des ersten Paint optional ist und nicht alle Benutzeragenten es melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem das erste Stück DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) durch Qualifizierung und Einschränkung der Eigenschaften wie folgt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieser Instanz zurück, wenn dieser nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieser Instanz.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht anwendbar ist.

Unterstützt außerdem die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das den aktuellen größten inhaltsvollen Paint darstellt.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf den Bildschirm gerendert wurde. Möglicherweise nicht verfügbar, wenn es sich um ein Cross-Origin-Bild handelt, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachtung des größten inhaltsvollen Paint

Im folgenden Beispiel wird ein Beobachter registriert, um den größten inhaltsvollen Paint zu erfassen, während die Seite lädt. Das `buffered`-Flag wird genutzt, um auf Daten vor der Erstellung des Beobachters zuzugreifen.

Die LCP-API analysiert alle gefundenen Inhalte (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neuer größter Inhalt gefunden wird, erstellt sie einen neuen Eintrag. Die Suche nach größerem Inhalt wird gestoppt, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neuen Inhalt auf der Website einführen. Daher ist das LCP der letzte Leistungs-Eintrag, der vom Beobachter gemeldet wird.

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

Browser [können jetzt eine leicht grobe Renderzeit bereitstellen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Überprüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Cross-Origin-Renderzeit-Informationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` eine genaue `renderTime` sehen zu lassen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Codebeispiel können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) der Instanz zurückgibt, wenn dieser nicht `0` ist, andernfalls den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime). Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie Ungenauigkeiten kennzeichnen, indem Sie überprüfen, ob `renderTime` verwendet wurde:

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
