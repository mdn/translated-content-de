---
title: Summarizer
slug: Web/API/Summarizer
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`Summarizer`**-Interface der [Summarizer API](/de/docs/Web/API/Summarizer_API) enthält alle Funktionen für diese API. Dazu gehört die Überprüfung der Verfügbarkeit des KI-Modells, das Erstellen einer neuen `Summarizer`-Instanz, die Verwendung zur Erzeugung einer neuen Zusammenfassung und mehr.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`expectedContextLanguages`](/de/docs/Web/API/Summarizer/expectedContextLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprachen, in denen die Kontext-Strings geschrieben sein sollten.
- [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprachen, die der `Summarizer` unterstützen sollte.
- [`format`](/de/docs/Web/API/Summarizer/format) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Textformat, in dem Zusammenfassungen zurückgegeben werden.
- [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabe-Kontingent, das dem Browser für die Generierung von Zusammenfassungen zur Verfügung steht.
- [`length`](/de/docs/Web/API/Summarizer/length) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die relative Länge der generierten Zusammenfassungen.
- [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprache, in der die Zusammenfassung erzeugt werden soll.
- [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Text-String, der den Kontext beschreibt, in dem die zusammenzufassenden Texte verwendet werden, was dem `Summarizer` hilft, besser geeignete Zusammenfassungen zu generieren.
- [`type`](/de/docs/Web/API/Summarizer/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Zusammenfassung, die vom `Summarizer` generiert wird.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Summarizer/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der angibt, ob das Browser-KI-Modell eine gegebene `Summarizer`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/Summarizer/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Summarizer`-Instanz, aus der Zusammenfassungen generiert werden können.

## Instanz-Methoden

- [`destroy()`](/de/docs/Web/API/Summarizer/destroy) {{Experimental_Inline}}
  - : Zerstört die `Summarizer`-Instanz, auf der sie aufgerufen wird.
- [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) {{Experimental_Inline}}
  - : Meldet, wie viel Eingabekontingent für eine Zusammenfassungsoperation für einen gegebenen Texteingang verwendet würde.
- [`summarize()`](/de/docs/Web/API/Summarizer/summarize) {{Experimental_Inline}}
  - : Generiert eine neue Zusammenfassungszeichenkette.
- [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) {{Experimental_Inline}}
  - : Erzeugt eine neue Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Sehen Sie [Using the Summarizer API](/de/docs/Web/API/Summarizer_API/Using) für ein vollständiges Beispiel.

### Erstellen einer `Summarizer`-Instanz

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

### Erzeugen einer Zusammenfassung

```js
const summary = await summarizer.summarize(myTextString);
console.log(summary);
```

### Erzeugen eines Zusammenfassungsstroms

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
