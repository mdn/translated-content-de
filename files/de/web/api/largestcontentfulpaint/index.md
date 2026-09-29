---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}

Das Interface `LargestContentfulPaint` liefert Zeitinformationen zum Rendern des größten Bildes oder Textblocks auf einer Webseite vor der ersten Nutzereingabe.

## Instanzeigenschaften

Dieses Interface definiert unmittelbar die folgenden Eigenschaften:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das derzeit den größten sichtbaren Inhalt darstellt.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Der Zeitpunkt, zu dem das Element auf dem Bildschirm gerendert wurde. Der Wert kann weniger präzise sein, wenn es sich bei dem Element um ein Cross-Origin-Bild handelt, das ohne den Header `Timing-Allow-Origin` geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Der Zeitpunkt, zu dem das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, angegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die id des Elements. Diese Eigenschaft gibt eine leere Zeichenfolge zurück, wenn keine id vorhanden ist.
- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime)
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime)
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gezeichneten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Falls das Element ein Bild ist, die Anfrage-URL des Bildes.

Außerdem erweitert es die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und konkretisiert beziehungsweise beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt immer eine leere Zeichenfolge zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) für diesen Eintrag zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht anwendbar ist.

## Instanzmethoden

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `LargestContentfulPaint`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

Die wichtigste Kennzahl, die diese API bereitstellt, ist {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP). Sie gibt den Zeitpunkt an, zu dem das größte im Viewport sichtbare Bild oder der größte dort sichtbare Textblock gerendert wurde, gemessen ab dem Beginn des Seitenladens. Die folgenden Elemente gelten bei der Bestimmung des LCP als {{Glossary("Contentful_paint", "inhaltstragend")}}:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elemente innerhalb einer SVG.
- Die Vorschaubilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, beispielsweise {{HTMLElement("p")}}.

Um die Rendering-Zeiten anderer Elemente zu messen, verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API.

Weitere wichtige Zeitpunkte beim Rendern stellt die [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-API bereit:

- {{Glossary("First_Paint", "First Paint")}} (FP): Der Zeitpunkt, zu dem erstmals etwas gerendert wird. Beachten Sie, dass die Erfassung von First Paint optional ist; nicht alle User Agents melden diesen Wert.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Der Zeitpunkt, zu dem erstmals DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Um die Rendering-Zeit von Cross-Origin-Ressourcen genau zu messen, setzen Sie den Header {{httpheader("Timing-Allow-Origin")}}.

Weitere Informationen finden Sie unter [Rendering-Zeit von Cross-Origin-Bildern](/de/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) und [`startTime` anstelle von `renderTime` verwenden](/de/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime).

## Beispiele

### Largest Contentful Paint beobachten

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um Largest Contentful Paint während des Ladens der Seite zu erfassen. Das Flag `buffered` ermöglicht den Zugriff auf Daten, die vor der Erstellung des Observers erfasst wurden.

Die LCP-API analysiert alle gefundenen Inhalte, auch solche, die aus dem DOM entfernt werden. Wenn sie einen neuen größten Inhalt findet, erstellt sie einen neuen Eintrag. Sobald Scroll- oder Eingabeereignisse auftreten, sucht sie nicht mehr nach größeren Inhalten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Website sichtbar machen. Der LCP ist daher der letzte vom Observer gemeldete Performance-Eintrag.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Zeitpunkte für Paint und Anzeige getrennt beobachten

Mit den Eigenschaften `paintTime` und `presentationTime` können Sie die Zeitpunkte abrufen, zu denen die Paint-Phase beginnt beziehungsweise die gezeichneten Pixel auf dem Bildschirm angezeigt werden. `paintTime` ist weitgehend browserübergreifend verfügbar, während `presentationTime` von der Implementierung abhängt.

Dieses Beispiel baut auf dem vorherigen Observer-Beispiel auf. Es zeigt, wie Sie prüfen, ob `paintTime` und `presentationTime` unterstützt werden, und die Werte abrufen, falls sie verfügbar sind. In Browsern ohne entsprechende Unterstützung ruft der Code je nach Verfügbarkeit `renderTime` oder `loadTime` ab.

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
