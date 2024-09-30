---
title: MediaError
slug: Web/API/MediaError
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("HTML DOM")}}

Die **`MediaError`**-Schnittstelle repräsentiert einen Fehler, der bei der Verarbeitung von Medien in einem HTML-Medienelement auftritt, basierend auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), wie etwa {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Ein `MediaError`-Objekt beschreibt den Fehler in allgemeinen Begriffen mithilfe eines numerischen `code`, der die Art des Fehlers kategorisiert, und einer `message`, die spezifische Diagnosen darüber liefert, was schiefgelaufen ist.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`MediaError.code`](/de/docs/Web/API/MediaError/code)
  - : Eine Zahl, die [die allgemeine Art des aufgetretenen Fehlers](/de/docs/Web/API/MediaError/code#media_error_code_constants) darstellt.
- [`MediaError.message`](/de/docs/Web/API/MediaError/message)
  - : Ein lesbarer Text, der _spezifische Diagnoseinformationen_ bereitstellt, um dem Leser zu helfen, die aufgetretene Fehlerbedingung zu verstehen; insbesondere handelt es sich nicht um eine Zusammenfassung dessen, was der Fehlercode bedeutet, sondern um tatsächliche Diagnoseinformationen, die helfen zu verstehen, was genau schiefgelaufen ist. Dieser Text und sein Format sind nicht von der Spezifikation definiert und variieren von einem [user agent](/de/docs/Glossary/user_agent) zum anderen. Wenn keine Diagnosen verfügbar sind oder keine Erklärung gegeben werden kann, ist dieser Wert ein leerer String (`""`).

## Instanz-Methoden

_Diese Schnittstelle implementiert oder erbt keine Methoden und besitzt keine eigenen._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error)
