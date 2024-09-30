---
title: Web NFC API
slug: Web/API/Web_NFC_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

Die Web NFC API ermöglicht den Datenaustausch über NFC mittels des leichtgewichtigen NFC-Datenaustauschformats (NDEF-Nachrichten).

> [!NOTE]
> Geräte und Tags müssen formatiert und spezifisch aufgezeichnet werden, um das NDEF-Datenformat zu unterstützen, damit sie mit Web NFC verwendet werden können. Niedrigebene Operationen werden derzeit von der API nicht unterstützt, jedoch gibt es eine öffentliche Diskussion über eine API, die solche Funktionalitäten hinzufügen würde.

## Schnittstellen

- [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)
  - : Schnittstelle, die NDEF-Nachrichten darstellt, die von einem kompatiblen Tag über ein `NDEFReader`-Objekt empfangen oder an dieses gesendet werden können. Eine Nachricht besteht aus Metadaten und NDEF-Datensätzen.
- [`NDEFReader`](/de/docs/Web/API/NDEFReader) {{Experimental_Inline}}
  - : Schnittstelle, die das Lesen und Schreiben von Nachrichten auf kompatiblen NFC-Tags ermöglicht. Die Nachrichten werden als `NDEFMessage`-Objekte dargestellt.
- [`NDEFRecord`](/de/docs/Web/API/NDEFRecord)
  - : Schnittstelle, die NDEF-Datensätze darstellt, die in eine NDEF-Nachricht eingefügt werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
