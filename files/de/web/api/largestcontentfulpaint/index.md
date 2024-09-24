---
title: LargestContentfulPaint
slug: Web/API/LargestContentfulPaint
l10n:
  sourceCommit: 92eab76b7686dadbce22affd372889bc2154f4ef
---

{{APIRef("Performance API")}}

Das `LargestContentfulPaint`-Interface bietet Timing-Informationen über das größte Bild oder den größten Textblock, der vor der Benutzereingabe auf einer Webseite gerendert wird.

## Beschreibung

Der zentrale Moment, den diese API bietet, ist die {{Glossary("Largest Contentful Paint")}} (LCP)-Metrik. Sie liefert die Renderzeit des größten Bildes oder Textblocks, der innerhalb des Ansichtsfensters sichtbar ist, und zeichnet diese ab dem Zeitpunkt auf, an dem die Seite zu laden beginnt. Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image)-Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie {{HTMLElement("p")}}.

Um die Renderzeiten anderer Elemente zu messen, verwenden Sie die {{domxref("PerformanceElementTiming")}}-API.

Zusätzliche zentrale Malmomente werden von der {{domxref("PerformancePaintTiming")}}-API bereitgestellt:

- {{Glossary("First paint")}} (FP): Zeitpunkt, zu dem irgendetwas gerendert wird. Beachten Sie, dass die Markierung des ersten Gemäldes optional ist und nicht alle Benutzer-Agenten es melden.
- {{Glossary("First contentful paint")}} (FCP): Zeitpunkt, zu dem der erste Teil des DOM-Textes oder Bildinhalts gerendert wird.

`LargestContentfulPaint` erbt von {{domxref("PerformanceEntry")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften, indem es die Eigenschaften wie folgt qualifiziert und einschränkt:

- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt "`largest-contentful-paint`" zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} dieses Eintrages zurück, wenn dieser nicht `0` ist, andernfalls den Wert von {{domxref("LargestContentfulPaint.loadTime", "loadTime")}}.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück, da `duration` für dieses Interface nicht zutreffend ist.

Es unterstützt auch die folgenden Eigenschaften:

- {{domxref("LargestContentfulPaint.element")}} {{ReadOnlyInline}}
  - : Das Element, das das derzeit größte inhaltsreiche Gemälde ist.
- {{domxref("LargestContentfulPaint.renderTime")}} {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element auf dem Bildschirm gerendert wurde. Kann nicht verfügbar sein, wenn es sich um ein cross-origin Bild handelt, das ohne den `Timing-Allow-Origin`-Header geladen wurde.
- {{domxref("LargestContentfulPaint.loadTime")}} {{ReadOnlyInline}}
  - : Die Zeit, zu der das Element geladen wurde.
- {{domxref("LargestContentfulPaint.size")}} {{ReadOnlyInline}}
  - : Die intrinsische Größe des Elements, zurückgegeben als Fläche (Breite \* Höhe).
- {{domxref("LargestContentfulPaint.id")}} {{ReadOnlyInline}}
  - : Die ID des Elements. Diese Eigenschaft gibt einen leeren String zurück, wenn keine ID vorhanden ist.
- {{domxref("LargestContentfulPaint.url")}} {{ReadOnlyInline}}
  - : Wenn das Element ein Bild ist, die Anforderungs-URL des Bildes.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von {{domxref("PerformanceEntry")}}._

- {{domxref("LargestContentfulPaint.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

## Beispiele

### Beobachtung des größten inhaltsreichen Gemäldes

Im folgenden Beispiel wird ein Observer registriert, um das größte inhaltsreiche Gemälde während des Ladens der Seite zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten von vor der Erstellung des Observers zuzugreifen.

Die LCP-API analysiert alle gefundenen Inhalte (einschließlich Inhalte, die aus dem DOM entfernt werden). Wenn neuer größter Inhalt gefunden wird, erstellt sie einen neuen Eintrag. Sie hört auf, nach größerem Inhalt zu suchen, wenn Scroll- oder Eingabeereignisse auftreten, da solche Ereignisse wahrscheinlich neuen Inhalt auf der Website einführen. Somit ist das LCP der letzte Performance-Eintrag, der vom Observer berichtet wird.

```js
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const lastEntry = entries[entries.length - 1]; // Verwenden Sie den neuesten LCP-Kandidaten
  console.log("LCP:", lastEntry.startTime);
  console.log(lastEntry);
});
observer.observe({ type: "largest-contentful-paint", buffered: true });
```

### Renderzeit eines Cross-Origin-Bilds

Aus Sicherheitsgründen ist der Wert der {{domxref("LargestContentfulPaint.renderTime", "renderTime")}}-Eigenschaft `0`, wenn die Ressource eine Cross-Origin-Anfrage ist. Stattdessen wird {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} offengelegt. Um Informationen zur Renderzeit von Cross-Origin-Inhalten offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` das Sehen von `renderTime` zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Wie im Codebeispiel können Sie {{domxref("PerformanceEntry.startTime", "startTime")}} verwenden, welches den Wert von {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} des Eintrags zurückgibt, wenn es nicht `0` ist und ansonsten den Wert von {{domxref("LargestContentfulPaint.loadTime", "loadTime")}}. Es wird jedoch empfohlen, den {{HTTPHeader("Timing-Allow-Origin")}} Header zu setzen, damit die Metriken genauer sind.

Wenn Sie `startTime` verwenden, können Sie eventuelle Ungenauigkeiten kennzeichnen, indem Sie prüfen, ob `renderTime` verwendet wurde:

```js
const isAccurateLCP = entry.renderTime ? true : false;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Largest Contentful Paint")}}
- {{Glossary("First contentful paint")}}
- {{Glossary("First paint")}}
