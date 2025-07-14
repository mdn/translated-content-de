---
title: LanguageDetector
slug: Web/API/LanguageDetector
l10n:
  sourceCommit: aed56607fa2bc1f0678ea0846a1b62bd9571ff7b
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`LanguageDetector`** Interface der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) enthält alle Funktionen zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `LanguageDetector`-Instanz, deren Nutzung zur Erkennung einer Sprache und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabekontingent, das dem Browser zur Spracherkennung zur Verfügung steht.
- [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die erwarteten Sprachen, die im Eingabetext erkannt werden sollen.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/LanguageDetector/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der anzeigt, ob das Browser-KI-Modell eine gegebene `LanguageDetector`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/LanguageDetector/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `LanguageDetector`-Instanz zur Spracherkennung.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/LanguageDetector/destroy) {{Experimental_Inline}}
  - : Zerstört die `LanguageDetector`-Instanz, auf die sie angewendet wird.
- [`detect()`](/de/docs/Web/API/LanguageDetector/detect) {{Experimental_Inline}}
  - : Erkennt die am nächsten liegende Sprache oder Sprachen, in der ein gegebener Textstring höchstwahrscheinlich verfasst ist.
- [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) {{Experimental_Inline}}
  - : Meldet, wie viel Eingabekontingent durch eine Spracherkennungsoperation für einen gegebenen Texteingang verwendet würde.

## Beispiele

Siehe [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für ein vollständiges Beispiel.

### Erstellen einer `LanguageDetector`-Instanz

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

> [!NOTE]
> Unterschiedliche Implementierungen werden wahrscheinlich unterschiedliche Sprachen unterstützen.

### Erkennung von Sprachen

```js
const results = await detector.detect(myTextString);

results.forEach((result) => {
  console.log(`${result.detectedLanguage}: ${result.confidence}`);
});

// Results in logs like this:
// la: 0.8359838724136353
// es: 0.017705978825688362
// sv: 0.012977192178368568
// en: 0.011148443445563316
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using)
