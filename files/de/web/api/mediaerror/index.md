---
title: MediaError
slug: Web/API/MediaError
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("HTML DOM")}}

Die **`MediaError`**-Schnittstelle repräsentiert einen Fehler, der beim Umgang mit Medien in einem HTML-Medienelement aufgetreten ist, basierend auf [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), wie z.B. {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Ein `MediaError`-Objekt beschreibt den Fehler im Allgemeinen mit einem numerischen `code`, der die Art des Fehlers kategorisiert, und einer `message`, die spezifische Diagnosen darüber bietet, was schiefgelaufen ist.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`MediaError.code`](/de/docs/Web/API/MediaError/code)
  - : Eine Zahl, die [die allgemeine Art des aufgetretenen Fehlers](/de/docs/Web/API/MediaError/code#media_error_code_constants) darstellt.
- [`MediaError.message`](/de/docs/Web/API/MediaError/message)
  - : Eine menschenlesbare Zeichenkette, die _spezifische diagnostische Informationen_ bereitstellt, um dem Leser zu helfen, die aufgetretene Fehlerbedingung zu verstehen; insbesondere ist sie keine Zusammenfassung der Bedeutung des Fehlercodes, sondern tatsächliche Diagnoseinformationen, um zu verstehen, was genau schiefging. Dieser Text und sein Format sind nicht durch die Spezifikation definiert und variieren von einem [User-Agent](/de/docs/Glossary/user_agent) zum anderen. Wenn keine Diagnosen verfügbar sind oder keine Erklärung gegeben werden kann, hat dieser Wert eine leere Zeichenkette (`""`).

## Instanz-Methoden

_Diese Schnittstelle implementiert oder erbt keine Methoden und hat keine eigenen._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error)
