---
title: "PresentationConnection: binaryType-Eigenschaft"
short-title: binaryType
slug: Web/API/PresentationConnection/binaryType
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn ein {{DOMxRef("PresentationConnection")}}-Objekt erstellt wird, _MUSS_ sein `binaryType` IDL-Attribut auf den String `"arraybuffer"` gesetzt werden. Beim Abrufen _MUSS_ das Attribut seinen zuletzt gesetzten Wert zurückgeben. Beim Setzen _MUSS_ der User-Agent das IDL-Attribut auf den neuen Wert setzen.

> [!NOTE]
> Das `binaryType`-Attribut ermöglicht es den Autoren, zu kontrollieren, wie binäre Daten Skripten zur Verfügung gestellt werden. Wird das Attribut auf `"blob"` gesetzt, werden binäre Daten in `Blob`-Form zurückgegeben; wird es auf `"arraybuffer"` gesetzt, werden diese in {{JSxRef("ArrayBuffer")}}-Form zurückgegeben. Das Attribut hat standardmäßig den Wert `"arraybuffer"`. Diese Attribute haben keine Auswirkung auf Daten, die in String-Form gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
