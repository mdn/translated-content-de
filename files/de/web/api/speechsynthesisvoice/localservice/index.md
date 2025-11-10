---
title: "SpeechSynthesisVoice: localService-Eigenschaft"
short-title: localService
slug: Web/API/SpeechSynthesisVoice/localService
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`localService`** des [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob die Stimme von einem lokalen Sprachsynthesizer-Dienst bereitgestellt wird (`true`) oder von einem entfernten Sprachsynthesizer-Dienst (`false`).

Diese Eigenschaft wird bereitgestellt, um eine Unterscheidung zu ermöglichen, falls einige Sprachoptionen von einem entfernten Dienst angeboten werden; es ist möglich, dass entfernte Stimmen zusätzliche Latenz, Bandbreite oder Kosten mit sich bringen, daher kann eine solche Unterscheidung nützlich sein.

## Wert

Ein boolescher Wert.

## Beispiele

```js
for (const voice of voices) {
  const option = document.createElement("option");
  option.textContent = `${voice.name} (${voice.lang})`;

  if (voice.default) {
    option.textContent += " — DEFAULT";
  }

  console.log(voice.localService);

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
