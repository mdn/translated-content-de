---
title: EyeDropper-API
slug: Web/API/EyeDropper_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

Die **EyeDropper-API** bietet einen Mechanismus zum Erstellen eines Pipettenwerkzeugs. Mithilfe dieses Werkzeugs können Benutzer Farben von ihren Bildschirmen aufnehmen, einschließlich außerhalb des Browserfensters.

## Konzept

Kreative Anwendungen ermöglichen es oft, dass Benutzer Farben aus Zeichnungen oder Formen in der Anwendung aufnehmen können. Webanwendungen können die **EyeDropper-API** nutzen, um einen ähnlichen Pipettenmodus bereitzustellen, der vom Browser bereitgestellt wird.

Mit der API kann eine Webanwendung den Pipettenmodus starten. Sobald er gestartet ist, ändert sich der Cursor, um dem Benutzer anzuzeigen, dass der Modus aktiv ist. Der Benutzer kann dann entweder eine Farbe von irgendwo auf dem Bildschirm auswählen oder den Pipettenmodus durch Drücken der <kbd>Escape</kbd>-Taste schließen.

## Sicherheits- und Datenschutzmaßnahmen

Um zu verhindern, dass bösartige Websites Pixelinformationen vom Bildschirm des Benutzers erhalten, ohne dass dieser es merkt, implementiert die **EyeDropper-API** folgende Maßnahmen:

- Die API erlaubt nicht, dass der Pipettenmodus ohne Benutzerabsicht gestartet wird. Die Methode {{domxref("EyeDropper.open()")}} kann nur als Reaktion auf eine Benutzeraktion (wie einen Klick auf einen Button) aufgerufen werden.
- Ohne Benutzerabsicht können keine Pixelinformationen abgerufen werden. Das von {{domxref("EyeDropper.open()")}} zurückgegebene Versprechen wird nur als Reaktion auf eine Benutzeraktion (einen Klick auf ein Pixel) zu einem Farbwert aufgelöst. Somit kann die Pipette nicht unbemerkt im Hintergrund verwendet werden.
- Um Benutzern zu helfen, den Pipettenmodus leichter zu bemerken, wird er von Browsern offensichtlich gemacht. Der normale Mauszeiger verschwindet nach einer kurzen Verzögerung und stattdessen erscheint eine Lupe. Außerdem gibt es eine Verzögerung zwischen dem Start des Pipettenmodus und dem Zeitpunkt, zu dem der Benutzer ein Pixel auswählen kann, um sicherzustellen, dass der Benutzer Zeit hatte, die Lupe zu sehen.
- Benutzer können den Pipettenmodus auch jederzeit abbrechen (durch Drücken der <kbd>Escape</kbd>-Taste).

## Schnittstellen

- {{DOMxRef("EyeDropper")}} {{Experimental_Inline}}

  - : Die **`EyeDropper`**-Schnittstelle repräsentiert eine Instanz eines Pipettenwerkzeugs, das geöffnet und vom Benutzer verwendet werden kann, um Farben vom Bildschirm auszuwählen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Farben eines beliebigen Pixels auf dem Bildschirm mit der EyeDropper-API aufnehmen](https://developer.chrome.com/docs/capabilities/web-apis/eyedropper)
- [Der EyeDropper-API W3C/SMPTE Gemeinsame Workshop](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
