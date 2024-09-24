---
title: "MediaDeviceInfo: label-Eigenschaft"
short-title: label
slug: Web/API/MediaDeviceInfo/label
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`label`** schreibgeschützte
Eigenschaft des {{domxref("MediaDeviceInfo")}}-Interfaces gibt eine
Zeichenkette zurück, die dieses Gerät beschreibt (zum Beispiel
"Externe USB-Webcam").

Nur verfügbar während der aktiven Nutzung eines `MediaStream`
oder wenn dauerhafte Berechtigungen erteilt wurden.

## Wert

Eine Zeichenkette, die das Mediengerät beschreibt. Aus Sicherheitsgründen ist das
`label` immer eine leere Zeichenkette (`""`), wenn der Benutzer keine
Berechtigung zum Verwenden mindestens eines Mediengeräts erhalten hat, entweder durch Starten eines Streams vom
Mikrofon oder der Kamera oder durch Erteilung dauerhafter Berechtigungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
