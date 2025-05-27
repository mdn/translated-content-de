---
title: "SpeechSynthesisVoice: default-Eigenschaft"
short-title: default
slug: Web/API/SpeechSynthesisVoice/default
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`default`** schreibgeschützte Eigenschaft des [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob die Stimme die Standardstimme für die aktuelle Anwendung ist (`true`) oder nicht (`false`).

> [!NOTE]
> Bei einigen Geräten könnte es die Standardstimme für die Sprache der Stimme sein. Die Spezifikation ist nicht sehr klar, welche es sein sollte, daher können einige Implementierungen abweichen.

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
