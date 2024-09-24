---
title: "SpeechSynthesisVoice: localService-Eigenschaft"
short-title: localService
slug: Web/API/SpeechSynthesisVoice/localService
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`localService`**-Eigenschaft des {{domxref("SpeechSynthesisVoice")}}-Interfaces ist eine schreibgeschützte Eigenschaft, die einen booleschen Wert zurückgibt, der angibt, ob die Stimme von einem lokalen Sprachsynthesedienst (`true`) oder einem entfernten Sprachsynthesedienst (`false`) bereitgestellt wird.

Diese Eigenschaft wird bereitgestellt, um eine Unterscheidung zu ermöglichen, falls einige Sprachoptionen von einem entfernten Dienst bereitgestellt werden. Es ist möglich, dass entfernte Stimmen zusätzliche Latenz, Bandbreite oder Kosten mit sich bringen, sodass eine solche Unterscheidung nützlich sein kann.

## Wert

Ein boolescher Wert.

## Beispiele

```js
for (let i = 0; i < voices.length; i++) {
  const option = document.createElement("option");
  option.textContent = `${voices[i].name} (${voices[i].lang})`;

  if (voices[i].default) {
    option.textContent += " — DEFAULT";
  }

  console.log(voices[i].localService);

  option.setAttribute("data-lang", voices[i].lang);
  option.setAttribute("data-name", voices[i].name);
  voiceSelect.appendChild(option);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
