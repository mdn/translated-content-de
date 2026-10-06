---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("Performance API")}}

Die Schnittstelle `LargestContentfulPaint` stellt Zeitinformationen zum Rendern des größten Bild- oder Textinhalts auf einer Webseite bereit, bevor eine Nutzereingabe erfolgt.

## Instanzeigenschaften

Diese Schnittstelle definiert die folgenden Eigenschaften direkt:

- [`LargestContentfulPaint.element`](/de/docs/Web/API/LargestContentfulPaint/element) {{ReadOnlyInline}}
  - : Das Element, das aktuell den größten gerenderten Inhalt darstellt.
- [`LargestContentfulPaint.renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) {{ReadOnlyInline}}
  - : Der Zeitpunkt, zu dem das Element auf dem Bildschirm gerendert wurde. Der Wert kann eine geringere Genauigkeit aufweisen, wenn es sich bei dem Element um ein Cross-Origin-Bild handelt, das ohne den Header `Timing-Allow-Origin` geladen wurde.
- [`LargestContentfulPaint.loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) {{ReadOnlyInline}}
  - : Der Zeitpunkt, zu dem das Element geladen wurde.
- [`LargestContentfulPaint.size`](/de/docs/Web/API/LargestContentfulPaint/size) {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- [`LargestContentfulPaint.id`](/de/docs/Web/API/LargestContentfulPaint/id) {{ReadOnlyInline}}
  - : Die id des Elements. Diese Eigenschaft gibt eine leere Zeichenfolge zurück, wenn keine id vorhanden ist.
- [`LargestContentfulPaint.paintTime`](/de/docs/Web/API/LargestContentfulPaint/paintTime) {{ReadOnlyInline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Paint-Phase begann.
- [`LargestContentfulPaint.presentationTime`](/de/docs/Web/API/LargestContentfulPaint/presentationTime) {{ReadOnlyInline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die gerenderten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.
- [`LargestContentfulPaint.url`](/de/docs/Web/API/LargestContentfulPaint/url) {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anfrage-URL des Bildes.

Sie erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), wobei für diese die beschriebenen Präzisierungen und Einschränkungen gelten:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"largest-contentful-paint"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt immer eine leere Zeichenfolge zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) für diesen Eintrag zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück, da `duration` für diese Schnittstelle nicht anwendbar ist.

## Instanzmethoden

- [`LargestContentfulPaint.toJSON()`](/de/docs/Web/API/LargestContentfulPaint/toJSON)
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `LargestContentfulPaint`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Der zentrale Messwert dieser API ist {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}} (LCP). Er gibt den Zeitpunkt an, zu dem das größte im Viewport sichtbare Bild oder der größte dort sichtbare Textblock gerendert wurde, gemessen ab dem Beginn des Seitenladevorgangs. Bei der Ermittlung des LCP gelten die folgenden Elemente als {{Glossary("Contentful_paint", "inhaltstragend")}}:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image)-Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, beispielsweise {{HTMLElement("p")}}.

Verwenden Sie die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API, um die Renderzeiten anderer Elemente zu messen.

Weitere wichtige Zeitpunkte beim Rendern werden von der [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-API bereitgestellt:

- {{Glossary("First_Paint", "First Paint")}} (FP): Der Zeitpunkt, zu dem erstmals etwas gerendert wird. Beachten Sie, dass die Erfassung des First Paint optional ist und nicht alle User Agents diesen Wert melden.
- {{Glossary("First_Contentful_Paint", "First Contentful Paint")}} (FCP): Der Zeitpunkt, zu dem erstmals DOM-Text oder Bildinhalt gerendert wird.

`LargestContentfulPaint` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

Um die Renderzeit von Cross-Origin-Ressourcen genau zu messen, setzen Sie den Header {{httpheader("Timing-Allow-Origin")}}.

Weitere Einzelheiten finden Sie unter [Renderzeit von Cross-Origin-Bildern](/de/docs/Web/API/LargestContentfulPaint/renderTime#cross-origin_image_render_time) und [`startTime` statt `renderTime` verwenden](/de/docs/Web/API/LargestContentfulPaint/renderTime#use_starttime_over_rendertime).

## Beispiele

### Largest Contentful Paint beobachten

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um den Largest Contentful Paint während des Ladens der Seite zu erfassen. Mit dem Flag `buffered` wird auf Daten zugegriffen, die vor der Erstellung des Observers erfasst wurden.

Die LCP-API analysiert sämtliche gefundenen Inhalte, auch solche, die aus dem DOM entfernt werden. Wenn ein neuer, größerer Inhalt gefunden wird, erstellt sie einen neuen Eintrag. Sobald Scroll- oder Eingabeereignisse auftreten, sucht sie nicht mehr nach größeren Inhalten, da diese Ereignisse wahrscheinlich neue Inhalte auf der Website sichtbar machen. Der LCP ist daher der letzte vom Observer gemeldete Performance-Eintrag.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Use the latest LCP candidate
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Zeitpunkte der Paint-Phase und der Darstellung getrennt beobachten

Mit den Eigenschaften `paintTime` und `presentationTime` können Sie jeweils den Zeitpunkt des Beginns der Paint-Phase und den Zeitpunkt abrufen, zu dem die gerenderten Pixel auf dem Bildschirm dargestellt wurden. `paintTime` ist weitgehend interoperabel, während `presentationTime` von der Implementierung abhängt.

Dieses Beispiel baut auf dem vorherigen Observer-Beispiel auf. Es zeigt, wie Sie die Unterstützung für `paintTime` und `presentationTime` prüfen und die Werte abrufen, falls sie verfügbar sind. In Browsern, die diese Eigenschaften nicht unterstützen, ruft der Code je nach Unterstützung `renderTime` oder `loadTime` ab.

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
