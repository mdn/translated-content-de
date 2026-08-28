---
title: Summarizer
slug: Web/API/Summarizer
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Summarizer API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`Summarizer`**-Schnittstelle der [Summarizer-API](/de/docs/Web/API/Summarizer_API) enthält alle Funktionen für diese API, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Summarizer`-Instanz, der Nutzung zur Generierung eines neuen Zusammenfassungs und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`expectedContextLanguages`](/de/docs/Web/API/Summarizer/expectedContextLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprachen, in denen die Kontextzeichenfolgen verfasst sein sollten.
- [`expectedInputLanguages`](/de/docs/Web/API/Summarizer/expectedInputLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprachen, die der `Summarizer` unterstützen sollte.
- [`format`](/de/docs/Web/API/Summarizer/format) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Textformat, in dem Zusammenfassungen zurückgegeben werden.
- [`inputQuota`](/de/docs/Web/API/Summarizer/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabekontingent, das dem Browser zur Erzeugung von Zusammenfassungen zur Verfügung steht.
- [`length`](/de/docs/Web/API/Summarizer/length) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die relative Länge der generierten Zusammenfassungen.
- [`outputLanguage`](/de/docs/Web/API/Summarizer/outputLanguage) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die Sprache, in der die Zusammenfassung generiert werden soll.
- [`sharedContext`](/de/docs/Web/API/Summarizer/sharedContext) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Textzeichenfolge, die den Kontext beschreibt, in dem die zu zusammenfassenden Textstücke verwendet werden, was dem `Summarizer` hilft, passendere Zusammenfassungen zu erzeugen.
- [`type`](/de/docs/Web/API/Summarizer/type) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Zusammenfassung, die vom `Summarizer` generiert wird.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/Summarizer/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der anzeigt, ob das Browser-KI-Modell eine gegebene `Summarizer`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/Summarizer/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `Summarizer`-Instanz, aus der Zusammenfassungen generiert werden können.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/Summarizer/destroy) {{Experimental_Inline}}
  - : Gibt die Ressourcen frei, die der aufgerufenen `Summarizer`-Instanz zugewiesen sind, und stoppt jegliche weitere Aktivität darauf.
- [`measureInputUsage()`](/de/docs/Web/API/Summarizer/measureInputUsage) {{Experimental_Inline}}
  - : Meldet, wie viel Eingabekontingent durch einen Zusammenfassungsvorgang für eine gegebene Texteingabe verwendet würde.
- [`summarize()`](/de/docs/Web/API/Summarizer/summarize) {{Experimental_Inline}}
  - : Generiert eine neue Zusammenfassungszeichenfolge.
- [`summarizeStreaming()`](/de/docs/Web/API/Summarizer/summarizeStreaming) {{Experimental_Inline}}
  - : Generiert eine neue Zusammenfassung als [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Sehen Sie [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using) für ein vollständiges Beispiel.

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

- [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
