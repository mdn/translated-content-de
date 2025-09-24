---
title: "SpeechSynthesisVoice: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisVoice/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`lang`**-Eigenschaft der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Schnittstelle gibt einen {{Glossary("BCP_47_language_tag", "BCP 47-Sprachcode")}} zurück, der die Sprache der Stimme angibt.

## Wert

Ein String, der die Sprache des Geräts darstellt.

## Beispiele

```js
for (const voice of voices) {
  const option = document.createElement("option");
  option.textContent = `${voice.name} (${voice.lang})`;

  if (voice.default) {
    option.textContent += " — DEFAULT";
  }

  option.setAttribute("data-lang", voice.lang);
  option.setAttribute("data-name", voice.name);
  voiceSelect.appendChild(option);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
