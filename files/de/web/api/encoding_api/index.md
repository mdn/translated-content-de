---
title: Kodierungs-API
slug: Web/API/Encoding_API
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{DefaultAPISidebar("Encoding API")}} {{AvailableInWorkers}}

Die **Kodierungs-API** bietet einen Mechanismus zur Verarbeitung von Text in verschiedenen {{Glossary("character encoding", "Zeichenkodierungen")}}, einschließlich älterer, nicht {{Glossary("UTF-8")}} Kodierungen.

Die API stellt vier Schnittstellen bereit: {{domxref("TextDecoder")}}, {{domxref("TextEncoder")}}, {{domxref("TextDecoderStream")}} und {{domxref("TextEncoderStream")}}.

## Schnittstellen

- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TextDecoderStream")}}
- {{DOMxRef("TextEncoderStream")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Encodings der Kodierungs-API](/de/docs/Web/API/Encoding_API/Encodings) - Kodierungen, die für die Textdekodierung unterstützt werden müssen.
- Ein [Polyfill](https://github.com/inexorabletash/text-encoding), der es ermöglicht, diese Schnittstelle in Browsern zu verwenden, die sie nicht unterstützen.
