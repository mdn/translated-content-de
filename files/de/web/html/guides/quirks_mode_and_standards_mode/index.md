---
title: Verständnis von Quirks- und Standards-Modi
short-title: Quirks- und Standards-Modi
slug: Web/HTML/Guides/Quirks_mode_and_standards_mode
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

In den frühen Tagen des Webs wurden Seiten typischerweise in zwei Versionen geschrieben: Eine für Netscape Navigator und eine für Microsoft Internet Explorer. Als die Webstandards beim W3C entwickelt wurden, konnten Browser sie nicht einfach übernehmen, da dies die meisten bestehenden Seiten im Web zerstört hätte. Daher führten Browser zwei Modi ein, um neue, standardkonforme Seiten anders zu behandeln als alte, nicht-standardkonforme Seiten.

Es gibt nun drei Modi, die von den Layout-Engines in Webbrowsern verwendet werden: Quirks-Modus, Limited-Quirks-Modus und No-Quirks-Modus. Im **Quirks-Modus** emuliert das Layout das Verhalten in Navigator 4 und Internet Explorer 5. Dies ist wichtig, um Webseiten zu unterstützen, die vor der weit verbreiteten Einführung von Webstandards erstellt wurden. Im **No-Quirks-Modus** entspricht das Verhalten (hoffentlich) dem gewünschten Verhalten, das in den modernen HTML- und CSS-Spezifikationen beschrieben ist. Im **Limited-Quirks-Modus** gibt es nur eine sehr kleine Anzahl von Eigenheiten.

Die Modi Limited-Quirks und No-Quirks wurden früher als "Almost-Standards"-Modus bzw. "Full-Standards"-Modus bezeichnet. Diese Namen wurden geändert, da das Verhalten jetzt standardisiert ist.

## Wie bestimmen Browser, welchen Modus sie verwenden sollen?

Für [HTML](/de/docs/Web/HTML)-Dokumente verwenden Browser ein Doctype am Anfang des Dokuments, um zu entscheiden, ob sie es im Quirks- oder im Standards-Modus behandeln. Um sicherzustellen, dass Ihre Seite den Full-Standards-Modus verwendet, stellen Sie sicher, dass Ihre Seite ein Doctype wie in diesem Beispiel hat:

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

Der im Beispiel gezeigte Doctype, `<!doctype html>`, ist der einfachste mögliche und der von den aktuellen HTML-Standards empfohlene. Frühere Versionen des HTML-Standards empfahlen andere Varianten, aber alle heutigen Browser verwenden den Full-Standards-Modus für diesen Doctype. Es gibt keinen gültigen Grund, einen komplizierteren Doctype zu verwenden. Wenn Sie einen anderen Doctype verwenden, riskieren Sie, einen auszuwählen, der den Almost-Standards-Modus oder den Quirks-Modus auslöst.

Platzieren Sie den Doctype direkt am Anfang Ihres HTML-Dokuments, vor jeglichem anderen Inhalt.

Der einzige Zweck von `<!doctype html>` besteht darin, den No-Quirks-Modus zu aktivieren. Ältere Versionen der HTML-Standard-Doctypes hatten zusätzliche Bedeutungen, aber kein Browser hat den Doctype jemals für etwas anderes als den Wechsel zwischen Anzeigemodi verwendet.

Siehe auch eine detaillierte Beschreibung, [wann verschiedene Browser verschiedene Modi wählen](https://hsivonen.fi/doctype/).

### XHTML

Wenn Sie Ihre Seite als {{Glossary("XHTML", "XHTML")}} mit dem MIME-Typ `application/xhtml+xml` im `Content-Type` HTTP-Header bereitstellen, benötigen Sie keinen Doctype, um den Standards-Modus zu aktivieren, da solche Dokumente immer den "Full-Standards-Modus" verwenden.

Wenn Sie XHTML-ähnlichen Inhalt mit dem MIME-Typ `text/html` bereitstellen, lesen Browser ihn als HTML und Sie benötigen den Doctype, um den Standards-Modus zu verwenden.

## Wie sehe ich, welcher Modus verwendet wird?

Wenn die Seite im Quirks- oder Limited-Quirks-Modus gerendert wird, protokolliert Firefox eine Warnung in der Konsolen-Registerkarte der Entwicklerwerkzeuge. Wenn diese Warnung nicht angezeigt wird, verwendet Firefox den No-Quirks-Modus.

Der Wert von `document.compatMode` in JavaScript zeigt an, ob das Dokument im Quirks-Modus ist. Wenn der Wert `"BackCompat"` ist, befindet sich das Dokument im Quirks-Modus. Andernfalls hat es den Wert `"CSS1Compat"`.
