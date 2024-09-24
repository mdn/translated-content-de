---
title: Quirks-Modus
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTMLSidebar}}

In den frühen Tagen des Webs wurden Seiten typischerweise in zwei Versionen geschrieben: Eine für Netscape Navigator und eine für Microsoft Internet Explorer. Als die Webstandards beim W3C entwickelt wurden, konnten Browser nicht einfach beginnen, diese zu verwenden, da dies die meisten existierenden Websites im Web zerstören würde. Browser führten daher zwei Modi ein, um neue standardkonforme Sites anders zu behandeln als alte Legacy-Sites.

Es gibt jetzt drei Modi, die von den Layout-Engines in Webbrowsern verwendet werden: Quirks-Modus, eingeschränkter-Quirks-Modus und Kein-Quirks-Modus. Im **Quirks-Modus** emuliert das Layout das Verhalten in Navigator 4 und Internet Explorer 5. Dies ist entscheidend, um Websites zu unterstützen, die vor der weit verbreiteten Akzeptanz von Webstandards erstellt wurden. Im **Kein-Quirks-Modus** ist das Verhalten (hoffentlich) das gewünschte Verhalten, das in den modernen HTML- und CSS-Spezifikationen beschrieben wird. Im **eingeschränkten-Quirks-Modus** werden nur eine sehr kleine Anzahl von Eigenheiten implementiert.

Die Modi eingeschränkter-Quirks und Kein-Quirks wurden früher als "Fast-Standard"-Modus und "Vollstandard"-Modus bezeichnet. Diese Namen wurden geändert, da das Verhalten jetzt standardisiert ist.

## Wie bestimmen Browser, welchen Modus sie verwenden sollen?

Für [HTML](/de/docs/Web/HTML)-Dokumente verwenden Browser ein Doctype am Anfang des Dokuments, um zu entscheiden, ob es im Quirks-Modus oder im Standardmodus verarbeitet werden soll. Um sicherzustellen, dass Ihre Seite den Vollstandardmodus verwendet, stellen Sie sicher, dass Ihre Seite einen Doctype wie in diesem Beispiel hat:

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

Der im Beispiel gezeigte Doctype, `<!doctype html>`, ist der einfachstmögliche und der, der von aktuellen HTML-Standards empfohlen wird. Frühere Versionen des HTML-Standards empfahlen andere Varianten, aber alle existierenden Browser werden heute für diesen Doctype den Vollstandardmodus verwenden. Es gibt keinen gültigen Grund, einen komplizierteren Doctype zu verwenden. Wenn Sie einen anderen Doctype verwenden, riskieren Sie, einen zu wählen, der den Fast-Standardmodus oder den Quirks-Modus auslöst.

Platzieren Sie den Doctype direkt am Anfang Ihres HTML-Dokuments, vor jedem anderen Inhalt.

Der einzige Zweck von `<!doctype html>` ist, den Kein-Quirks-Modus zu aktivieren. Ältere Versionen von HTML-Standard-Doctypes hatten zusätzliche Bedeutungen, aber kein Browser hat den Doctype jemals für etwas anderes verwendet als den Wechsel zwischen den Render-Modi.

Siehe auch eine detaillierte Beschreibung, [wann verschiedene Browser verschiedene Modi wählen](https://hsivonen.fi/doctype/).

### XHTML

Wenn Sie Ihre Seite als [XHTML](/de/docs/Glossary/XHTML) mit dem `application/xhtml+xml` MIME-Typ im `Content-Type` HTTP-Header anbieten, benötigen Sie keinen Doctype, um den Standardmodus zu aktivieren, da solche Dokumente immer im „Vollstandardmodus“ verwenden.

Wenn Sie XHTML-ähnlichen Inhalt mit dem MIME-Typ `text/html` anbieten, lesen Browser ihn als HTML, und Sie benötigen den Doctype, um den Standardmodus zu verwenden.

## Wie kann ich sehen, welcher Modus verwendet wird?

Wenn die Seite im Quirks- oder eingeschränkten-Quirks-Modus gerendert wird, wird Firefox eine Warnung an die Konsole in den Entwicklerwerkzeugen protokollieren. Wenn diese Warnung nicht angezeigt wird, verwendet Firefox den Kein-Quirks-Modus.

Der Wert von `document.compatMode` in JavaScript zeigt, ob das Dokument im Quirks-Modus ist. Wenn der Wert `"BackCompat"` ist, befindet sich das Dokument im Quirks-Modus. Wenn nicht, hat es den Wert `"CSS1Compat"`.
