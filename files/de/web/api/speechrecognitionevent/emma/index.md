---
title: "SpeechRecognitionEvent: emma-Eigenschaft"
short-title: emma
slug: Web/API/SpeechRecognitionEvent/emma
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{Non-standard_header}}

Die **`emma`** schreibgeschützte Eigenschaft des
[`SpeechRecognitionEvent`](/de/docs/Web/API/SpeechRecognitionEvent)-Interfaces gibt eine Extensible
MultiModal Annotation Markup Language (EMMA) — XML — Repräsentation des Ergebnisses zurück.

> [!NOTE]
> EMMA wird in der Spezifikation [EMMA: Extensible MultiModal Annotation markup language](https://www.w3.org/TR/emma/) definiert. In der Spezifikation können Sie verschiedene EMMA-Beispiele sehen.

## Wert

Ein gültiges XML-Dokument. Der genaue Inhalt kann je nach Benutzeragent und Erkennungsmaschine variieren, aber alle unterstützenden Implementierungen werden ein gültiges XML-Dokument mit einem EMMA-Namespace darstellen. Wenn das Spracherkennungssystem keine EMMA-Daten bereitstellt, wird der Benutzeragent `null` zurückgeben.

## Beispiele

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(event.emma);
};
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
