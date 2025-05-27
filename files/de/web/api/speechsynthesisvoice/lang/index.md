---
title: "SpeechSynthesisVoice: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisVoice/lang
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`lang`**-Eigenschaft des [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Interfaces gibt ein BCP 47-Sprachtag zurück, das die Sprache der Stimme angibt.

## Wert

Ein String, der die Sprache des Geräts repräsentiert.

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
