---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 9070ad78e5933064ce6b67eed53a62d5cf0cec83
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface bietet Zeitinformationen über das größte Bild oder den größten Text, die vor einer Benutzereingabe auf einer Webseite gerendert werden.

## Beschreibung

Der Hauptmoment, den diese API bietet, ist die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP)-Metrik. Sie gibt die Renderzeit des größten Bildes oder Textblocks an, der innerhalb des Viewports sichtbar ist, und wird ab dem Beginn des Seitenladens aufgezeichnet. Die folgenden Elemente werden bei der Bestimmung der LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image)-Elemente in einem SVG.
- Die Vorschaubilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie {{HTMLElement("p")}}.

Um Renderzeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API.

Weitere wichtige Render-Momente werden von der [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Zeitpunkt, zu dem etwas gerendert wird. Beachten Sie, dass das Markieren des ersten Renderns optional ist und nicht alle Benutzeragenten es melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Zeitpunkt, zu dem das erste DOM-Text- oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und schränkt die Eigenschaften wie folgt ein:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags zurück, wenn dieser nicht `0` ist, ansonsten den Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht zutreffend ist.

Es unterstützt auch die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das das derzeit größte inhaltsreiche Element ist.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Möglicherweise nicht verfügbar, wenn das Element ein Cross-Origin-Bild ist, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
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

### Beobachtung des größten inhaltsreichen Elements

Im folgenden Beispiel wird ein Observer registriert, um während des Ladevorgangs der Seite das größte inhaltsreiche Element zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Observer-Erstellung entstanden sind.

Die LCP-API analysiert alle Inhalte, die sie findet (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neuer, größerer Inhalt gefunden wird, erstellt sie einen neuen Eintrag. Sie hört auf, nach größerem Inhalt zu suchen, wenn Scroll- oder Eingabeereignisse auftreten, da diese Ereignisse wahrscheinlich neuen Inhalt auf der Website einführen. Somit ist der LCP der letzte vom Observer gemeldete Performance-Eintrag.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Render-Zeit eines Cross-Origin-Bildes

Aus Sicherheitsgründen war der Wert der [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime)-Eigenschaft ursprünglich `0`, wenn die Ressource eine Cross-Origin-Anfrage war. Stattdessen sollte die [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime)-Eigenschaft als Fallback verwendet werden.

Browser [können jetzt eine leicht angepasste Renderzeit bereitstellen](https://github.com/w3c/paint-timing/issues/104) in diesen Situationen. Prüfen Sie die [Browser-Unterstützung](#browser-kompatibilität).

Um genauere Cross-Origin-Renderzeitinformationen bereitzustellen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, eine genaue `renderTime` anzuzeigen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Code-Beispiel können Sie [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) verwenden, das den Wert des Eintrags [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) zurückgibt, wenn er nicht `0` ist, und andernfalls den Wert dieses Eintrags [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime). Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}}-Header zu setzen, damit die Metriken genauer werden.

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
