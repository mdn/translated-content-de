---
title: "PresentationConnection: binaryType Eigenschaft"
short-title: binaryType
slug: Web/API/PresentationConnection/binaryType
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn ein [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Objekt erstellt wird, muss sein `binaryType`-IDL-Attribut auf den String `"arraybuffer"` gesetzt werden. Beim Abrufen muss das Attribut seinen neuesten Wert zurückgeben (den Wert, den es zuletzt hatte). Beim Setzen muss der User-Agent das IDL-Attribut auf den neuen Wert setzen.

> [!NOTE]
> Das `binaryType`-Attribut ermöglicht es den Autoren, zu steuern, wie Binärdaten Skripten zugänglich gemacht werden. Indem das Attribut auf `"blob"` gesetzt wird, werden Binärdaten in `Blob`-Form zurückgegeben; durch Setzen auf `"arraybuffer"` werden sie in {{JSxRef("ArrayBuffer")}}-Form zurückgegeben. Das Attribut hat standardmäßig den Wert `"arraybuffer"`. Dieses Attribut hat keinen Einfluss auf Daten, die in String-Form gesendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
