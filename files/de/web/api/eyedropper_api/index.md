---
title: EyeDropper API
slug: Web/API/EyeDropper_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{DefaultAPISidebar("EyeDropper API")}}{{SeeCompatTable}}

Die **EyeDropper-API** bietet einen Mechanismus zur Erstellung eines Pipettenwerkzeugs. Mit diesem Werkzeug können Nutzer Farben von ihren Bildschirmen abtasten, einschließlich außerhalb des Browserfensters.

## Konzept

Kreative Anwendungen erlauben es oft den Nutzern, Farben von Zeichnungen oder Formen in der Anwendung abzutasten, um sie wiederzuverwenden. Webanwendungen können die **EyeDropper-API** verwenden, um einen ähnlichen Pipettenmodus bereitzustellen, der vom Browser bereitgestellt wird.

Mit der API kann eine Webanwendung den Pipettenmodus starten. Sobald dieser gestartet ist, ändert sich der Cursor, um dem Nutzer anzuzeigen, dass der Modus aktiv ist. Der Nutzer kann dann entweder eine Farbe von überall auf dem Bildschirm auswählen oder den Pipettenmodus durch Drücken von <kbd>Escape</kbd> beenden.

## Sicherheits- und Datenschutzmaßnahmen

Um zu verhindern, dass böswillige Websites Pixelinformationen vom Bildschirm eines Nutzers erhalten, ohne dass dieser es bemerkt, implementiert die **EyeDropper-API** folgende Maßnahmen:

- Die API lässt den Pipettenmodus nicht ohne Nutzungsabsicht starten. Die Methode [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) kann nur als Reaktion auf eine Nutzeraktion (z. B. einen Klick auf einen Button) aufgerufen werden.
- Es können keine Pixelinformationen ohne Nutzungsabsicht abgerufen werden. Das Promise, das von [`EyeDropper.open()`](/de/docs/Web/API/EyeDropper/open) zurückgegeben wird, wird nur in Bezug auf eine Nutzeraktion (Klicken auf einen Pixel) zu einem Farbwert aufgelöst. So kann die Pipette nicht im Hintergrund verwendet werden, ohne dass der Nutzer dies bemerkt.
- Um den Nutzern zu helfen, den Pipettenmodus leichter zu bemerken, wird er von den Browsern deutlich kenntlich gemacht. Der normale Mauszeiger verschwindet nach kurzer Verzögerung, und eine Lupe erscheint stattdessen. Es gibt auch eine Verzögerung zwischen dem Start des Pipettenmodus und der Möglichkeit des Nutzers, einen Pixel auszuwählen, um sicherzustellen, dass der Nutzer Zeit hatte, die Lupe zu bemerken.
- Nutzer können den Pipettenmodus auch jederzeit abbrechen (durch Drücken der <kbd>Escape</kbd>-Taste).

## Schnittstellen

- [`EyeDropper`](/de/docs/Web/API/EyeDropper) {{Experimental_Inline}}
  - : Die **`EyeDropper`**-Schnittstelle repräsentiert eine Instanz eines Pipettenwerkzeugs, das geöffnet und vom Nutzer verwendet werden kann, um Farben vom Bildschirm auszuwählen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Farben von beliebigen Pixeln auf dem Bildschirm mit der EyeDropper-API abtasten](https://developer.chrome.com/docs/capabilities/web-apis/eyedropper)
- [Der EyeDropper-API W3C/SMPTE Joint Workshop](https://www.w3.org/2021/03/media-production-workshop/talks/patrick-brosset-eyedropper-api.html)
