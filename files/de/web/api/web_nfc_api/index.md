---
title: Web-NFC-API
slug: Web/API/Web_NFC_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web NFC API")}}{{SeeCompatTable}}

Die Web NFC API ermöglicht den Datenaustausch über NFC mittels leichtgewichtiger NFC-Datenaustauschformat (NDEF)-Nachrichten.

> [!NOTE]
> Geräte und Tags müssen speziell formatiert und aufgenommen werden, um das NDEF-Datenformat zu unterstützen, damit sie mit Web NFC verwendet werden können. Niedrigstufige Operationen werden derzeit von der API nicht unterstützt. Es gibt jedoch eine öffentliche Diskussion über eine API, die solche Funktionalitäten hinzufügen könnte.

## Schnittstellen

- {{DOMxRef("NDEFMessage")}}
  - : Schnittstelle, die NDEF-Nachrichten darstellt, die von einem kompatiblen Tag über ein `NDEFReader`-Objekt empfangen oder gesendet werden können. Eine Nachricht besteht aus Metadaten und NDEF-Datensätzen.
- {{DOMxRef("NDEFReader")}} {{Experimental_Inline}}
  - : Schnittstelle, die das Lesen und Schreiben von Nachrichten von kompatiblen NFC-Tags ermöglicht. Die Nachrichten werden als `NDEFMessage`-Objekte dargestellt.
- {{DOMxRef("NDEFRecord")}}
  - : Schnittstelle, die NDEF-Datensätze darstellt, die in eine NDEF-Nachricht aufgenommen werden können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
