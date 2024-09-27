---
title: EyeDropper API
slug: Web/API/EyeDropper_API
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{securecontext_header}}{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

Die **EyeDropper API** bietet einen Mechanismus zur Erstellung eines Pipettenwerkzeugs. Mit diesem Werkzeug können Benutzer Farben von ihren Bildschirmen entnehmen, auch außerhalb des Browserfensters.

## Konzept

Kreative Anwendungen ermöglichen es Benutzern häufig, Farben aus Zeichnungen oder Formen in der Anwendung zu entnehmen, um sie erneut zu verwenden. Webanwendungen können die **EyeDropper API** nutzen, um einen ähnlichen Pipettenmodus bereitzustellen, der vom Browser bereitgestellt wird.

Mit der API kann eine Webanwendung den Pipettenmodus starten. Sobald dieser gestartet wurde, ändert sich der Cursor, um dem Benutzer anzuzeigen, dass der Modus aktiv ist. Der Benutzer kann dann entweder eine Farbe von irgendwo auf dem Bildschirm auswählen oder den Pipettenmodus durch Drücken von <kbd>Escape</kbd> beenden.

## Sicherheits- und Datenschutzmaßnahmen

Um zu verhindern, dass bösartige Websites ohne Wissen des Benutzers Pixeldaten von dessen Bildschirm erhalten, implementiert die **EyeDropper API** die folgenden Maßnahmen:

- Die API lässt den Pipettenmodus nicht ohne Benutzerabsicht starten. Die Methode [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) kann nur als Reaktion auf eine Benutzeraktion (wie einen Buttonklick) aufgerufen werden.
- Keine Pixelinformationen können ohne Benutzerabsicht abgerufen werden. Das Versprechen, das von [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) zurückgegeben wird, löst sich nur in einen Farbwert auf, wenn der Benutzer eine Aktion ausführt (Klick auf ein Pixel). Somit kann die Pipette nicht im Hintergrund verwendet werden, ohne dass der Benutzer es bemerkt.
- Um Benutzern zu helfen, den Pipettenmodus leichter zu bemerken, wird er von den Browsern deutlich gemacht. Der normale Mauszeiger verschwindet nach kurzer Zeit und stattdessen erscheint eine Lupe. Es gibt auch eine Verzögerung zwischen dem Starten des Pipettenmodus und der Möglichkeit für den Benutzer, ein Pixel auszuwählen, um sicherzustellen, dass der Benutzer genügend Zeit hat, die Lupe zu sehen.
- Benutzer können den Pipettenmodus auch jederzeit abbrechen (durch Drücken der <kbd>Escape</kbd>-Taste).

## Schnittstellen

- [`EyeDropper`](/de/docs/Web/API/EyeDropper) {{Experimental_Inline}}

  - : Die **`EyeDropper`**-Schnittstelle stellt eine Instanz eines Pipettenwerkzeugs dar, das vom Benutzer geöffnet und verwendet werden kann, um Farben vom Bildschirm auszuwählen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Farben von beliebigen Pixeln auf dem Bildschirm mit der EyeDropper API auswählen](https://developer.chrome.com/docs/capabilities/web-apis/eyedropper)
- [Der EyeDropper API W3C/SMPTE Joint Workshop](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
