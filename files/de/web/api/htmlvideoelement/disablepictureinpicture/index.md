---
title: "HTMLVideoElement: disablePictureInPicture Eigenschaft"
short-title: disablePictureInPicture
slug: Web/API/HTMLVideoElement/disablePictureInPicture
l10n:
  sourceCommit: 338e7cd6445f45216d4de20129acdf979aab96dd
---

{{APIRef("Picture-in-Picture API")}}

Die [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) **`disablePictureInPicture`**-Eigenschaft spiegelt das HTML-Attribut wider, das angibt, ob die Bild-im-Bild-Funktion für das aktuelle Element deaktiviert ist.

Dieser Wert stellt lediglich eine Anfrage von der Webseite an den Benutzeragenten dar. Die Benutzereinstellungen können das tatsächliche Verhalten ändern – zum Beispiel können Firefox-Nutzer die Einstellung `media.videocontrols.picture-in-picture.respect-disablePictureInPicture` ändern, um die Anfrage zur Deaktivierung von PiP zu ignorieren.

## Wert

Ein boolescher Wert, der `true` ist, wenn die Bild-im-Bild-Funktion für dieses Element deaktiviert ist. Das bedeutet, dass der Benutzeragent diese Funktion den Nutzern nicht vorschlagen oder sie automatisch anfordern sollte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
