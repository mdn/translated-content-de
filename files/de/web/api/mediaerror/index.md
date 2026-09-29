---
title: MediaError
slug: Web/API/MediaError
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("HTML DOM")}}

Die Schnittstelle **`MediaError`** repräsentiert einen Fehler, der bei der Verarbeitung von Medien in einem HTML-Medienelement auf Basis von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) aufgetreten ist, beispielsweise {{HTMLElement("audio")}} oder {{HTMLElement("video")}}.

Ein `MediaError`-Objekt beschreibt den Fehler allgemein durch einen numerischen `code`, der die Art des Fehlers kategorisiert, und eine `message`, die konkrete Diagnoseinformationen darüber liefert, was schiefgelaufen ist.

## Instanzeigenschaften

_Diese Schnittstelle erbt keine Eigenschaften._

- [`MediaError.code`](/de/docs/Web/API/MediaError/code) {{ReadOnlyInline}}
  - : Eine Zahl, die den [allgemeinen Typ des aufgetretenen Fehlers](/de/docs/Web/API/MediaError/code#media_error_code_constants) angibt.
- [`MediaError.message`](/de/docs/Web/API/MediaError/message) {{ReadOnlyInline}}
  - : Eine für Menschen lesbare Zeichenfolge mit _konkreten Diagnoseinformationen_, die dabei helfen, den aufgetretenen Fehler zu verstehen. Sie fasst nicht lediglich die Bedeutung des Fehlercodes zusammen, sondern liefert Informationen darüber, was genau schiefgelaufen ist. Dieser Text und sein Format sind nicht durch die Spezifikation festgelegt und unterscheiden sich je nach {{Glossary("user_agent", "User Agent")}}. Wenn keine Diagnoseinformationen verfügbar sind oder keine Erklärung gegeben werden kann, ist der Wert eine leere Zeichenfolge (`""`).

## Instanzmethoden

_Diese Schnittstelle implementiert oder erbt keine Methoden und definiert auch keine eigenen._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement.error`](/de/docs/Web/API/HTMLMediaElement/error)
