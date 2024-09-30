---
title: EyeDropper API
slug: Web/API/EyeDropper_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

Die **EyeDropper API** bietet einen Mechanismus zur Erstellung eines Farbaufnahmewerkzeugs. Mit diesem Tool können Benutzer Farben von ihren Bildschirmen aufnehmen, einschließlich außerhalb des Browserfensters.

## Konzept

Kreative Anwendungen erlauben es oft Benutzern, Farben aus Zeichnungen oder Formen in der Anwendung zur Wiederverwendung aufzunehmen. Webanwendungen können die **EyeDropper API** nutzen, um einen ähnlichen Farbaufnahme-Modus bereitzustellen, der vom Browser bereitgestellt wird.

Mit der API kann eine Webanwendung den Farbaufnahme-Modus starten. Sobald gestartet, ändert sich der Cursor, um dem Benutzer anzuzeigen, dass der Modus aktiv ist. Der Benutzer kann dann entweder eine Farbe von irgendwo auf dem Bildschirm auswählen oder den Farbaufnahme-Modus durch Drücken der <kbd>Escape</kbd>-Taste beenden.

## Sicherheits- und Datenschutzmaßnahmen

Um zu verhindern, dass bösartige Websites unbemerkt Pixeldaten vom Bildschirm eines Benutzers abrufen, implementiert die **EyeDropper API** folgende Maßnahmen:

- Die API lässt den Farbaufnahme-Modus nicht ohne Benutzerabsicht starten. Die Methode [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) kann nur als Reaktion auf eine Benutzeraktion (wie z.B. einen Klick auf eine Schaltfläche) aufgerufen werden.
- Keine Pixelinformationen können ohne Benutzerabsicht abgerufen werden. Das von [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) zurückgegebene Versprechen wird nur in eine Farbwert als Reaktion auf eine Benutzeraktion (Klicken auf ein Pixel) aufgelöst. Somit kann der Farbaufnehmer nicht im Hintergrund verwendet werden, ohne dass der Benutzer es bemerkt.
- Um Benutzern zu helfen, den Farbaufnahme-Modus leichter zu bemerken, wird dieser von Browsern deutlich erkennbar gemacht. Der normale Mauszeiger verschwindet nach kurzer Verzögerung und stattdessen erscheint eine Lupe. Es gibt auch eine Verzögerung zwischen dem Start des Farbaufnahme-Modus und der Möglichkeit für den Benutzer, ein Pixel auszuwählen, um sicherzustellen, dass der Benutzer die Lupe sehen kann.
- Benutzer können den Farbaufnahme-Modus auch jederzeit abbrechen (durch Drücken der <kbd>Escape</kbd>-Taste).

## Schnittstellen

- [`EyeDropper`](/de/docs/Web/API/EyeDropper) {{Experimental_Inline}}

  - : Die **`EyeDropper`** Schnittstelle repräsentiert eine Instanz eines Farbaufnahmewerkzeugs, das geöffnet werden kann und von Benutzern zum Auswählen von Farben vom Bildschirm genutzt werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Farben von beliebigen Pixeln auf dem Bildschirm mit der EyeDropper API aufnehmen](https://developer.chrome.com/docs/capabilities/web-apis/eyedropper)
- [Die EyeDropper API W3C/SMPTE Joint Workshop](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
