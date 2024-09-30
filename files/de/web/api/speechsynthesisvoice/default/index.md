---
title: "SpeechSynthesisVoice: default Eigenschaft"
short-title: default
slug: Web/API/SpeechSynthesisVoice/default
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`default`**-Eigenschaft (nur lesbar) der Schnittstelle [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice) gibt einen booleschen Wert zurück, der angibt, ob die Stimme die Standardstimme für die aktuelle App (`true`) ist oder nicht (`false`).

> [!NOTE]
> Bei einigen Geräten könnte es sich um die Standardstimme für die Sprache der Stimme handeln. Die Spezifikation ist nicht sehr klar, welche es sein sollte, daher können einige Implementierungen abweichen.

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
