---
title: Verständnis von Quirks- und Standardmodi
short-title: Quirks- und Standardmodi
slug: Web/HTML/Guides/Quirks_mode_and_standards_mode
l10n:
  sourceCommit: 7ea5e6bf881d91d1988ba4a6f557241f923f6666
---

{{HTMLSidebar}}

In den frühen Tagen des Webs wurden Seiten typischerweise in zwei Versionen erstellt: Eine für Netscape Navigator und eine für Microsoft Internet Explorer. Als die Webstandards vom W3C entwickelt wurden, konnten Browser diese nicht einfach übernehmen, da dies die meisten existierenden Webseiten im Web beeinträchtigen würde. Browser haben daher zwei Modi eingeführt, um neue standardkonforme Seiten anders als alte legacy Seiten zu behandeln.

Es gibt jetzt drei Modi, die von den Layout-Engines in Webbrowsern verwendet werden: Quirks-Modus, Limited-Quirks-Modus und No-Quirks-Modus. Im **Quirks-Modus** emuliert das Layout das Verhalten in Navigator 4 und Internet Explorer 5. Dies ist unerlässlich, um Webseiten zu unterstützen, die vor der weit verbreiteten Einführung von Webstandards erstellt wurden. Im **No-Quirks-Modus** ist das Verhalten (hoffentlich) das gewünschte Verhalten, das in den modernen HTML- und CSS-Spezifikationen beschrieben wird. Im **Limited-Quirks-Modus** sind nur eine sehr geringe Anzahl von Quirks implementiert.

Die Modi Limited-Quirks und No-Quirks wurden früher „Almost-Standards“-Modus und „Full-Standards“-Modus genannt. Diese Namen wurden geändert, da das Verhalten nun standardisiert ist.

## Wie bestimmen Browser, welchen Modus sie verwenden?

Für [HTML](/de/docs/Web/HTML)-Dokumente verwenden Browser einen Doctype am Anfang des Dokuments, um zu entscheiden, ob es im Quirks-Modus oder im No-Quirks-Modus behandelt wird. Um sicherzustellen, dass Ihre Seite den No-Quirks-Modus verwendet, stellen Sie sicher, dass Ihre Seite einen Doctype wie in diesem Beispiel hat:

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

Der im Beispiel gezeigte Doctype, `<!doctype html>`, ist der einfachste mögliche und derjenige, der von den aktuellen HTML-Standards empfohlen wird. Frühere Versionen des HTML-Standards empfahlen andere Varianten, aber alle existierenden Browser verwenden heute den No-Quirks-Modus für diesen Doctype. Es gibt keine validen Gründe, einen komplizierteren Doctype zu verwenden. Wenn Sie einen anderen Doctype verwenden, riskieren Sie möglicherweise, einen auszuwählen, der den Limited-Quirks- oder den Quirks-Modus auslöst.

Platzieren Sie den Doctype direkt am Anfang Ihres HTML-Dokuments, vor jeglichem anderen Inhalt.

Der einzige Zweck von `<!doctype html>` ist die Aktivierung des No-Quirks-Modus. Ältere Versionen der HTML-Standard-Doctypes hatten zusätzliche Bedeutung, aber kein Browser hat den Doctype jemals für etwas anderes als den Wechsel zwischen Render-Modi verwendet.

Siehe auch eine detaillierte Beschreibung, [wann verschiedene Browser verschiedene Modi wählen](https://hsivonen.fi/doctype/).

### XHTML

Wenn Sie Ihre Seite als {{Glossary("XHTML", "XHTML")}} mit dem `application/xhtml+xml` MIME-Typ im `Content-Type` HTTP-Header ausliefern, benötigen Sie keinen Doctype, um den No-Quirks-Modus zu aktivieren, da solche Dokumente immer den No-Quirks-Modus verwenden.

Wenn Sie XHTML-ähnlichen Inhalt mit dem MIME-Typ `text/html` ausliefern, werden Browser es als HTML lesen, und Sie benötigen den Doctype, um den No-Quirks-Modus zu verwenden.

## Wie kann ich sehen, welcher Modus verwendet wird?

Wenn die Seite im Quirks- oder Limited-Quirks-Modus gerendert wird, protokolliert Firefox eine Warnung im Konsolen-Tab der Entwicklertools. Wenn diese Warnung nicht angezeigt wird, verwendet Firefox den No-Quirks-Modus.

Der Wert von `document.compatMode` in JavaScript zeigt an, ob das Dokument im Quirks-Modus ist oder nicht. Wenn sein Wert `"BackCompat"` ist, befindet sich das Dokument im Quirks-Modus. Wenn nicht, hat es den Wert `"CSS1Compat"`.
