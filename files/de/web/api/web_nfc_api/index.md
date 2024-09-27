---
title: Web NFC API
slug: Web/API/Web_NFC_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

Die Web NFC API ermöglicht den Datenaustausch über NFC mithilfe des leichtgewichtigen NFC Data Exchange Format (NDEF).

> [!NOTE]
> Geräte und Tags müssen speziell formatiert und aufgezeichnet werden, um das NDEF-Datenformat zu unterstützen, damit sie mit der Web NFC genutzt werden können. Niedrigstufige Operationen werden derzeit von der API nicht unterstützt, es gibt jedoch eine öffentliche Diskussion über eine API, die solche Funktionalitäten hinzufügen würde.

## Schnittstellen

- [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)
  - : Schnittstelle, die NDEF-Nachrichten darstellt, die von einem kompatiblen Tag über ein `NDEFReader`-Objekt empfangen oder gesendet werden können. Eine Nachricht besteht aus Metadaten und NDEF-Datensätzen.
- [`NDEFReader`](/de/docs/Web/API/NDEFReader) {{Experimental_Inline}}
  - : Schnittstelle, die das Lesen und Schreiben von Nachrichten von kompatiblen NFC-Tags ermöglicht. Die Nachrichten werden als `NDEFMessage`-Objekte dargestellt.
- [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)
  - : Schnittstelle, die NDEF-Datensätze darstellt, die in eine NDEF-Nachricht aufgenommen werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
