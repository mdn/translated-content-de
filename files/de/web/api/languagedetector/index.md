---
title: LanguageDetector
slug: Web/API/LanguageDetector
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{APIRef("Translator and Language Detector APIs")}}{{SeeCompatTable}}

Die **`LanguageDetector`**-Schnittstelle der [Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs) enthält alle Funktionen zur Spracherkennung, einschließlich der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `LanguageDetector`-Instanz, deren Verwendung zur Erkennung einer Sprache und mehr.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`inputQuota`](/de/docs/Web/API/LanguageDetector/inputQuota) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Das Eingabe-Kontingent, das dem Browser zur Erkennung von Sprachen zur Verfügung steht.
- [`expectedInputLanguages`](/de/docs/Web/API/LanguageDetector/expectedInputLanguages) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die erwarteten Sprachen, die im eingegebenen Text erkannt werden sollen.

## Statische Methoden

- [`availability()`](/de/docs/Web/API/LanguageDetector/availability_static) {{Experimental_Inline}}
  - : Gibt einen enumerierten Wert zurück, der angibt, ob das KI-Modell des Browsers eine gegebene `LanguageDetector`-Konfiguration unterstützt.
- [`create()`](/de/docs/Web/API/LanguageDetector/create_static) {{Experimental_Inline}}
  - : Erstellt eine neue `LanguageDetector`-Instanz zur Spracherkennung.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/LanguageDetector/destroy) {{Experimental_Inline}}
  - : Zerstört die `LanguageDetector`-Instanz, auf der sie aufgerufen wird.
- [`detect()`](/de/docs/Web/API/LanguageDetector/detect) {{Experimental_Inline}}
  - : Erkennt die am ehesten übereinstimmende Sprache oder Sprachen, in der ein gegebener Text geschrieben sein könnte.
- [`measureInputUsage()`](/de/docs/Web/API/LanguageDetector/measureInputUsage) {{Experimental_Inline}}
  - : Gibt an, wie viel Eingabe-Kontingent durch eine Spracherkennungsoperation für einen gegebenen Texteingang verwendet wird.

## Beispiele

Sehen Sie [Using the Translator and Language Detector APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für ein vollständiges Beispiel.

### Erstellen einer `LanguageDetector`-Instanz

```js
const detector = await LanguageDetector.create({
  expectedInputLanguages: ["en-US", "zh"],
});
```

> [!NOTE]
> Unterschiedliche Implementierungen unterstützen wahrscheinlich unterschiedliche Sprachen.

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
