---
title: "HTMLVideoElement: disablePictureInPicture-Eigenschaft"
short-title: disablePictureInPicture
slug: Web/API/HTMLVideoElement/disablePictureInPicture
l10n:
  sourceCommit: 61ceefea7281f267055e4481a9a610d7ac2e724e
---

{{APIRef("Picture-in-Picture API")}}

Die **`disablePictureInPicture`**-Eigenschaft des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces spiegelt das HTML-Attribut [`disablepictureinpicture`](/de/docs/Web/HTML/Reference/Elements/video#disablepictureinpicture) wider, das angibt, ob die Bild-im-Bild-Funktion für das aktuelle Element deaktiviert ist.

Dieser Wert stellt lediglich eine Anfrage der Website an den Benutzeragenten dar.
Benutzerkonfigurationen können das endgültige Verhalten ändern – Beispielsweise können Firefox-Benutzer die Einstellung `media.videocontrols.picture-in-picture.respect-disablePictureInPicture` ändern, um die Anfrage, PiP zu deaktivieren, zu ignorieren.

## Wert

Ein boolean Wert, der `true` ist, wenn die Bild-im-Bild-Funktion für dieses Element deaktiviert ist.

Wenn `true`, wird der Benutzeragent Benutzern nicht vorschlagen, die Bild-im-Bild-Funktion zu verwenden, oder sie automatisch anfordern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
