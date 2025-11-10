---
title: Verständnis von Quirks- und Standardsmodi
short-title: Quirks- und Standardsmodi
slug: Web/HTML/Guides/Quirks_mode_and_standards_mode
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

In den frühen Tagen des Webs wurden Webseiten typischerweise in zwei Versionen geschrieben: Eine für Netscape Navigator und eine für Microsoft Internet Explorer. Als die Webstandards beim W3C entwickelt wurden, konnten Browser diese nicht einfach übernehmen, da dies die meisten existierenden Seiten im Web beeinträchtigen würde. Browser führten daher zwei Modi ein, um neue standardkonforme Seiten anders als alte Legacy-Seiten zu behandeln.

Heutzutage gibt es drei Modi, die von den Layout-Engines in Webbrowsern verwendet werden: Quirks-Modus, Limited-Quirks-Modus und No-Quirks-Modus. Im **Quirks-Modus** emuliert das Layout das Verhalten von Navigator 4 und Internet Explorer 5. Dies ist unerlässlich, um Websites zu unterstützen, die vor der weit verbreiteten Einführung von Webstandards erstellt wurden. Im **No-Quirks-Modus** entspricht das Verhalten (hoffentlich) dem gewünschten Verhalten, das in den modernen HTML- und CSS-Spezifikationen beschrieben ist. Im **Limited-Quirks-Modus** gibt es nur eine sehr geringe Anzahl von Quirks, die implementiert sind.

Die Modi Limited-Quirks und No-Quirks wurden früher "Almost-Standards"-Modus und "Full-Standards"-Modus genannt. Diese Namen wurden geändert, da das Verhalten nun standardisiert ist.

## Wie bestimmen Browser, welchen Modus sie verwenden sollen?

Für [HTML](/de/docs/Web/HTML)-Dokumente verwenden Browser ein Doctype zu Beginn des Dokuments, um zu entscheiden, ob sie es im Quirks-Modus oder No-Quirks-Modus behandeln. Um sicherzustellen, dass Ihre Seite den No-Quirks-Modus verwendet, stellen Sie sicher, dass Ihre Seite einen Doctype wie in diesem Beispiel hat:

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

Der im Beispiel gezeigte Doctype `<!doctype html>` ist der einfachste mögliche und derjenige, der von den aktuellen HTML-Standards empfohlen wird. Frühere Versionen des HTML-Standards empfahlen andere Varianten, aber alle derzeit existierenden Browser werden für diesen Doctype den No-Quirks-Modus verwenden. Es gibt keine gültigen Gründe, einen komplizierteren Doctype zu verwenden. Wenn Sie einen anderen Doctype verwenden, riskieren Sie, einen zu wählen, der den Limited-Quirks-Modus oder Quirks-Modus aktiviert.

Setzen Sie den Doctype ganz an den Anfang Ihres HTML-Dokuments, vor jeglichen anderen Inhalten.

Der einzige Zweck von `<!doctype html>` ist es, den No-Quirks-Modus zu aktivieren. Ältere Versionen von HTML-Standard-Doctypes boten zusätzliche Bedeutungen, aber kein Browser hat den Doctype jemals für etwas anderes verwendet als den Wechsel zwischen Render-Modi.

Siehe auch eine detaillierte Beschreibung, [wann verschiedene Browser verschiedene Modi wählen](https://hsivonen.fi/doctype/).

### XHTML

Wenn Sie Ihre Seite als {{Glossary("XHTML", "XHTML")}} mit dem MIME-Typ `application/xhtml+xml` im `Content-Type` HTTP-Header ausliefern, benötigen Sie keinen Doctype, um den No-Quirks-Modus zu aktivieren, da solche Dokumente immer den No-Quirks-Modus verwenden.

Wenn Sie XHTML-ähnlichen Inhalt mit dem MIME-Typ `text/html` ausliefern, werden Browser ihn als HTML lesen, und Sie benötigen den Doctype, um den No-Quirks-Modus zu verwenden.

## Wie kann ich sehen, welcher Modus verwendet wird?

Wenn die Seite im Quirks- oder Limited-Quirks-Modus gerendert wird, wird Firefox eine Warnung im Konsolen-Tab der Entwickler-Tools protokollieren. Wenn diese Warnung nicht angezeigt wird, verwendet Firefox den No-Quirks-Modus.

Der Wert von `document.compatMode` in JavaScript zeigt, ob das Dokument im Quirks-Modus ist oder nicht. Wenn der Wert `"BackCompat"` ist, befindet sich das Dokument im Quirks-Modus. Ist dies nicht der Fall, hat es den Wert `"CSS1Compat"`.
