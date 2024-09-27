---
title: Quirks-Modus
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTMLSidebar}}

In den frühen Tagen des Webs wurden Seiten typischerweise in zwei Versionen geschrieben: Eine für Netscape Navigator und eine für Microsoft Internet Explorer. Als die Webstandards beim W3C eingeführt wurden, konnten Browser nicht einfach beginnen, diese zu verwenden, da dies die meisten existierenden Websites im Web hätte zerstören können. Daher führten Browser zwei Modi ein, um neue standardkonforme Seiten anders als alte Legacy-Seiten zu behandeln.

Es gibt nun drei Modi, die von den Layout-Engines in Webbrowsern verwendet werden: der Quirks-Modus, der eingeschränkte Quirks-Modus und der Nicht-Quirks-Modus. Im **Quirks-Modus** emuliert das Layout das Verhalten in Navigator 4 und Internet Explorer 5. Dies ist essentiell, um Websites zu unterstützen, die vor der weit verbreiteten Einführung von Webstandards erstellt wurden. Im **Nicht-Quirks-Modus** entspricht das Verhalten (hoffentlich) dem gewünschten Verhalten, das von den modernen HTML- und CSS-Spezifikationen beschrieben wird. Im **eingeschränkten Quirks-Modus** werden nur eine sehr kleine Anzahl von Eigenheiten implementiert.

Die eingeschränkten Quirks- und Nicht-Quirks-Modi wurden früher "Fast-Standards-Modus" und "Voll-Standards-Modus" genannt. Diese Namen wurden geändert, da das Verhalten nun standardisiert ist.

## Wie bestimmen Browser, welchen Modus sie verwenden sollen?

Für [HTML](/de/docs/Web/HTML)-Dokumente verwenden Browser einen Doctype am Anfang des Dokuments, um zu entscheiden, ob es im Quirks-Modus oder im Standards-Modus behandelt werden soll. Um sicherzustellen, dass Ihre Seite den Voll-Standards-Modus verwendet, stellen Sie sicher, dass Ihre Seite einen Doctype wie in diesem Beispiel verwendet:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Hello World!</title>
  </head>
  <body></body>
</html>
```

Der im Beispiel gezeigte Doctype, `<!doctype html>`, ist der einfachste mögliche und der von den aktuellen HTML-Standards empfohlene. Frühere Versionen des HTML-Standards empfahlen andere Varianten, aber alle heutigen Browser verwenden den Voll-Standards-Modus für diesen Doctype. Es gibt keinen validen Grund, einen komplizierteren Doctype zu verwenden. Wenn Sie einen anderen Doctype verwenden, riskieren Sie, einen zu wählen, der den Fast-Standards-Modus oder den Quirks-Modus auslöst.

Platzieren Sie den Doctype direkt am Anfang Ihres HTML-Dokuments, vor jeglichem anderen Inhalt.

Der einzige Zweck von `<!doctype html>` ist es, den Nicht-Quirks-Modus zu aktivieren. Ältere Versionen von HTML-Standard-Doctypes hatten eine zusätzliche Bedeutung, aber kein Browser hat den Doctype jemals für etwas anderes eingesetzt, als zwischen Rendermodi zu wechseln.

Siehe auch eine detaillierte Beschreibung von [wann verschiedene Browser verschiedene Modi wählen](https://hsivonen.fi/doctype/).

### XHTML

Wenn Sie Ihre Seite als [XHTML](/de/docs/Glossary/XHTML) mit dem `application/xhtml+xml` MIME-Typ im `Content-Type` HTTP-Header bereitstellen, benötigen Sie keinen Doctype, um den Standards-Modus zu aktivieren, da solche Dokumente immer im 'Voll-Standards-Modus' verwendet werden.

Wenn Sie XHTML-ähnlichen Inhalt mit dem `text/html` MIME-Typ bereitstellen, lesen Browser es als HTML und Sie benötigen den Doctype, um den Standards-Modus zu verwenden.

## Wie sehe ich, welcher Modus verwendet wird?

Wenn die Seite im Quirks- oder eingeschränkten Quirks-Modus gerendert wird, protokolliert Firefox eine Warnung in der Konsole der Entwicklerwerkzeuge. Wenn diese Warnung nicht angezeigt wird, verwendet Firefox den Nicht-Quirks-Modus.

Der Wert von `document.compatMode` in JavaScript zeigt an, ob sich das Dokument im Quirks-Modus befindet. Wenn der Wert `"BackCompat"` ist, befindet sich das Dokument im Quirks-Modus. Wenn nicht, wird der Wert `"CSS1Compat"` sein.
