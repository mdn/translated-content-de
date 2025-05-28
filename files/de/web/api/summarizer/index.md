---
title: Summarizer
slug: Web/API/Summarizer
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Die **`Summarizer`**-Schnittstelle der [Summarizer API](/de/docs/Web/API/Summarizer_API) enthält die gesamte Funktionalität dieser API, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Summarizer`-Instanz, der Verwendung zur Generierung einer neuen Zusammenfassung und mehr.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`expectedContextLanguages`](/de/docs/Web/API/Summarizer/expectedContextLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprachen, in denen die Kontextstrings geschrieben sein sollten.
- [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprachen, die der `Summarizer` unterstützen sollte.
- [`format`](/de/docs/Web/API/Summarizer/format) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Textformat, in dem Zusammenfassungen zurückgegeben werden.
- [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabe-Kontingent, das dem Browser zur Generierung von Zusammenfassungen zur Verfügung steht.
- [`length`](/de/docs/Web/API/Summarizer/length) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die relative Länge der generierten Zusammenfassungen.
- [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprache, in der die Zusammenfassung generiert werden soll.
- [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Textstring, der den Kontext beschreibt, in dem die zusammenzufassenden Texte verwendet werden. Dies hilft dem `Summarizer` dabei, geeignetere Zusammenfassungen zu erstellen.
- [`type`](/de/docs/Web/API/Summarizer/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Zusammenfassung, die vom `Summarizer` generiert wird.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Summarizer/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der angibt, ob das KI-Modell des Browsers eine gegebene `Summarizer`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/Summarizer/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Summarizer`-Instanz zur Generierung von Zusammenfassungen.

## Instanz-Methoden

- [`destroy()`](/de/docs/Web/API/Summarizer/destroy) {{Experimental_Inline}}
  - : Zerstört die `Summarizer`-Instanz, auf der sie aufgerufen wird.
- [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) {{Experimental_Inline}}
  - : Berichtet, wie viel Eingabe-Kontingent für eine Zusammenfassungsoperation für einen gegebenen Texteingang verwendet würde.
- [`summarize()`](/de/docs/Web/API/Summarizer/summarize) {{Experimental_Inline}}
  - : Generiert einen neuen Zusammenfassungsstring.
- [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) {{Experimental_Inline}}
  - : Generiert eine neue Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Siehe [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using) für ein vollständiges Beispiel.

### Erstellung einer `Summarizer`-Instanz

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tldr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

### Generierung einer Zusammenfassung

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

### Generierung eines Zusammenfassungs-Streams

```js
const stream = summarizer.summarizeStreaming(myTextString);
let summary = "";

for await (const chunk of stream) {
  summary += chunk;
}

console.log("Stream complete");
summaryOutput.textContent = summary;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
