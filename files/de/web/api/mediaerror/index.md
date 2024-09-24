---
title: MediaError
slug: Web/API/MediaError
l10n:
  sourceCommit: 0d8d3980dc8b8267b60e899c41a76a2832556cbc
---

{{APIRef("HTML DOM")}}

Die **`MediaError`**-Schnittstelle stellt einen Fehler dar, der bei der Handhabung von Medien in einem HTML-Medienelement aufgetreten ist, das auf {{domxref("HTMLMediaElement")}} basiert, wie etwa {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Ein `MediaError`-Objekt beschreibt den Fehler allgemein mit einem numerischen `code`, der die Art des Fehlers kategorisiert, und einer `message`, die spezifische Diagnosen darüber liefert, was schiefgelaufen ist.

## Instanzeigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- {{domxref("MediaError.code")}}
  - : Eine Zahl, die [die allgemeine Art des aufgetretenen Fehlers](/de/docs/Web/API/MediaError/code#media_error_code_constants) darstellt.
- {{domxref("MediaError.message")}}
  - : Ein lesbarer Textstring, der _spezifische diagnostische Informationen_ liefert, um dem Leser zu helfen, die aufgetretene Fehlersituation zu verstehen; es handelt sich dabei nicht um eine Zusammenfassung der Bedeutung des Fehlercodes, sondern um tatsächliche diagnostische Informationen, die helfen sollen, genau zu verstehen, was schiefgelaufen ist. Dieser Text und sein Format sind nicht durch die Spezifikation definiert und variieren von einem {{Glossary("user agent")}} zum anderen. Wenn keine Diagnosen verfügbar sind oder keine Erklärung geliefert werden kann, ist dieser Wert ein leerer String (`""`).

## Instanzmethoden

_Diese Schnittstelle implementiert oder erbt keine Methoden und hat keine eigenen._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement.error")}}
