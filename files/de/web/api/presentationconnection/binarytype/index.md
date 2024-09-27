---
title: "PresentationConnection: binaryType Eigenschaft"
short-title: binaryType
slug: Web/API/PresentationConnection/binaryType
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn ein [`PresentationConnection`](/de/docs/Web/API/PresentationConnection)-Objekt erstellt wird, _MUSS_ sein `binaryType` IDL-Attribut auf den String `"arraybuffer"` gesetzt werden. Beim Abrufen _MUSS_ das Attribut seinen zuletzt gesetzten Wert zurückgeben (der Wert, auf den es zuletzt gesetzt wurde). Beim Setzen _MUSS_ der Benutzeragent das IDL-Attribut auf den neuen Wert setzen.

> [!NOTE]
> Das `binaryType`-Attribut ermöglicht es Autoren, zu steuern, wie Binärdaten in Skripten dargestellt werden. Durch Setzen des Attributs auf `"blob"` werden Binärdaten in `Blob`-Form zurückgegeben; durch Setzen auf `"arraybuffer"` werden sie in {{JSxRef("ArrayBuffer")}}-Form zurückgegeben. Das Attribut hat standardmäßig den Wert `"arraybuffer"`. Dieses Attribut hat keinen Einfluss auf Daten, die in String-Form versendet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
