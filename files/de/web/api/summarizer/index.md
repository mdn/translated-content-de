---
title: Summarizer
slug: Web/API/Summarizer
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}

Das **`Summarizer`**-Interface der [Summarizer API](/de/docs/Web/API/Summarizer_API) enthält alle Funktionalitäten dieser API, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Summarizer` Instanz, deren Verwendung zur Generierung einer neuen Zusammenfassung und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

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
  - : Ein Textstring, der den Kontext beschreibt, in dem die zu zusammenfassenden Textstücke verwendet werden, was dem `Summarizer` hilft, geeignetere Zusammenfassungen zu generieren.
- [`type`](/de/docs/Web/API/Summarizer/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der vom `Summarizer` generierten Zusammenfassung.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Summarizer/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der anzeigt, ob das KI-Modell des Browsers eine gegebene `Summarizer`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/Summarizer/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Summarizer`-Instanz, mit der Zusammenfassungen generiert werden können.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/Summarizer/destroy) {{Experimental_Inline}}
  - : Zerstört die `Summarizer`-Instanz, auf der sie aufgerufen wird.
- [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) {{Experimental_Inline}}
  - : Berichtigt, wie viel Eingabe-Kontingent für eine Zusammenfassungsoperation für einen gegebenen Texteingang verwendet würde.
- [`summarize()`](/de/docs/Web/API/Summarizer/summarize) {{Experimental_Inline}}
  - : Generiert eine neue Zusammenfassungszeichenfolge.
- [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) {{Experimental_Inline}}
  - : Generiert eine neue Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Siehe [Using the Summarizer API](/de/docs/Web/API/Summarizer_API/Using) für ein vollständiges Beispiel.

### Erstellen einer `Summarizer`-Instanz

```js
const summarizer = await Summarizer.create({
  sharedContext:
    "A general summary to help a user decide if the text is worth reading",
  type: "tl;dr",
  length: "short",
  format: "markdown",
  expectedInputLanguages: ["en-US"],
  outputLanguage: "en-US",
});
```

### Generieren einer Zusammenfassung

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

### Generieren eines Zusammenfassungsstroms

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

- [Using the Summarizer API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
