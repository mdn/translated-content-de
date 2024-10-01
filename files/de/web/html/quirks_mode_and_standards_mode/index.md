---
title: Quirks Mode
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTMLSidebar}}

In den frühen Tagen des Webs wurden Seiten typischerweise in zwei Versionen geschrieben: Eine für Netscape Navigator und eine für Microsoft Internet Explorer. Als die Webstandards beim W3C erstellt wurden, konnten Browser diese nicht einfach verwenden, da dies die meisten vorhandenen Websites im Web beeinträchtigen würde. Daher führten Browser zwei Modi ein, um neue standardkonforme Seiten anders zu behandeln als alte Legacy-Seiten.

Es gibt jetzt drei Modi, die von den Layout-Engines in Webbrowsern verwendet werden: Quirks-Modus, begrenzter Quirks-Modus und kein Quirks-Modus. Im **Quirks-Modus** emuliert das Layout das Verhalten in Navigator 4 und Internet Explorer 5. Dies ist notwendig, um Websites zu unterstützen, die vor der weit verbreiteten Einführung von Webstandards erstellt wurden. Im **kein Quirks-Modus** ist das Verhalten (hoffentlich) das gewünschte Verhalten, wie es in den modernen HTML- und CSS-Spezifikationen beschrieben ist. Im **begrenzten Quirks-Modus** gibt es nur eine sehr geringe Anzahl von Implementationen von Quirks.

Die Modi begrenzter Quirks und kein Quirks wurden früher als "fast-Standards"-Modus und "voller Standards"-Modus bezeichnet. Diese Bezeichnungen wurden geändert, da das Verhalten jetzt standardisiert ist.

## Wie bestimmen Browser, welchen Modus sie verwenden?

Für [HTML](/de/docs/Web/HTML)-Dokumente verwenden Browser einen Doctype am Anfang des Dokuments, um zu entscheiden, ob es im Quirks-Modus oder im Standards-Modus behandelt werden soll. Um sicherzustellen, dass Ihre Seite den vollen Standards-Modus verwendet, stellen Sie sicher, dass Ihre Seite einen Doctype wie in diesem Beispiel hat:

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

Der im Beispiel gezeigte Doctype, `<!doctype html>`, ist der einfachste mögliche und der von den aktuellen HTML-Standards empfohlene. Frühere Versionen des HTML-Standards empfahlen andere Varianten, aber alle existierenden Browser verwenden heute den vollen Standards-Modus für diesen Doctype. Es gibt keine gültigen Gründe, einen komplizierteren Doctype zu verwenden. Wenn Sie einen anderen Doctype verwenden, riskieren Sie möglicherweise, einen zu wählen, der den fast-Standardmodus oder den Quirks-Modus aktiviert.

Setzen Sie den Doctype ganz am Anfang Ihres HTML-Dokuments, vor allen anderen Inhalten.

Der einzige Zweck von `<!doctype html>` ist es, den Kein-Quirks-Modus zu aktivieren. Ältere Versionen von HTML-Standard-Doctypes boten zusätzliche Bedeutungen, aber kein Browser hat den Doctype jemals für etwas anderes verwendet als den Wechsel zwischen den Rendering-Modi.

Siehe auch eine detaillierte Beschreibung, [wann verschiedene Browser verschiedene Modi wählen](https://hsivonen.fi/doctype/).

### XHTML

Wenn Sie Ihre Seite als {{Glossary("XHTML", "XHTML")}} mit dem MIME-Type `application/xhtml+xml` im HTTP-Header `Content-Type` bereitstellen, benötigen Sie keinen Doctype, um den Standards-Modus zu aktivieren, da solche Dokumente immer den 'vollen Standards-Modus' verwenden.

Wenn Sie XHTML-ähnliche Inhalte mit dem MIME-Type `text/html` bereitstellen, lesen Browser es als HTML, und Sie benötigen den Doctype, um den Standards-Modus zu verwenden.

## Wie erkenne ich, welcher Modus verwendet wird?

Wenn die Seite im Quirks- oder begrenzten Quirks-Modus gerendert wird, wird Firefox eine Warnung auf dem Konsole-Tab in den Entwicklertools protokollieren. Wenn diese Warnung nicht angezeigt wird, verwendet Firefox den Kein-Quirks-Modus.

Der Wert von `document.compatMode` in JavaScript zeigt an, ob das Dokument im Quirks-Modus ist oder nicht. Wenn der Wert `"BackCompat"` ist, befindet sich das Dokument im Quirks-Modus. Wenn nicht, hat es den Wert `"CSS1Compat"`.
