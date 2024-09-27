---
title: "SpeechSynthesisVoice: localService-Eigenschaft"
short-title: localService
slug: Web/API/SpeechSynthesisVoice/localService
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`localService`** schreibgeschützte Eigenschaft des
[`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Interfaces gibt einen booleschen Wert zurück,
der angibt, ob die Stimme von einem lokalen Sprachsynthesizer-Dienst
(`true`) oder einem entfernten Sprachsynthesizer-Dienst (`false`) bereitgestellt wird.

Diese Eigenschaft wird bereitgestellt, um eine Unterscheidung zu treffen, falls einige Sprachoptionen
von einem entfernten Dienst bereitgestellt werden. Es ist möglich, dass entfernte Stimmen zusätzliche
Latenz, Bandbreite oder Kosten verursachen können, daher könnte diese Unterscheidung nützlich sein.

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
