---
title: "SpeechSynthesisVoice: Standard Eigenschaft"
short-title: Standard
slug: Web/API/SpeechSynthesisVoice/default
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`default`** schreibgeschützte Eigenschaft der
{{domxref("SpeechSynthesisVoice")}}-Schnittstelle gibt einen booleschen Wert
zurück, der angibt, ob die Stimme die Standardstimme für die aktuelle App ist
(`true`) oder nicht (`false`).

> [!NOTE]
> Bei einigen Geräten könnte es die Standardstimme für die
> Sprache der Stimme sein. Die Spezifikation ist nicht sehr eindeutig, was es sein sollte, daher können einige Implementierungen unterschiedlich sein.

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
