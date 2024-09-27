---
title: "MediaDeviceInfo: label-Eigenschaft"
short-title: label
slug: Web/API/MediaDeviceInfo/label
l10n:
  sourceCommit: 4232f4067388fc9b2c55c5f9200dddf05bd99b74
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

Die **`label`**-Eigenschaft der [`MediaDeviceInfo`](/de/docs/Web/API/MediaDeviceInfo)-Schnittstelle gibt eine Zeichenkette zurück, die dieses Gerät beschreibt (zum Beispiel „Externe USB-Webcam“).

Diese Eigenschaft ist nur verfügbar, wenn der `MediaStream` aktiv genutzt wird oder wenn dauerhafte Berechtigungen erteilt wurden.

## Wert

Eine Zeichenkette, die das Mediengerät beschreibt. Aus Sicherheitsgründen ist das `label` immer eine leere Zeichenkette (`""`), wenn der Benutzer nicht die Erlaubnis erhalten hat, mindestens ein Mediengerät zu verwenden, entweder durch das Starten eines Streams von Mikrofon oder Kamera oder durch die Erteilung dauerhafter Berechtigungen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
