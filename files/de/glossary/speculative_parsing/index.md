---
title: Speculative parsing
slug: Glossary/Speculative_parsing
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Traditionell lief der HTML-Parser in Browsern im Hauptthread und wurde nach einem `</script>`-Tag blockiert, bis das Skript aus dem Netzwerk abgerufen und ausgeführt wurde. Einige HTML-Parser, wie Firefox seit Firefox 4, unterstützen spekulatives Parsen außerhalb des Hauptthreads. Sie parsen voraus, während Skripte heruntergeladen und ausgeführt werden. Der HTML-Parser startet spekulative Ladevorgänge für Skripte, Stylesheets und Bilder, die er im Stream voraus findet, und führt den HTML-Baumkonstruktionsalgorithmus spekulativ aus. Der Vorteil ist, dass, wenn eine Spekulation erfolgreich ist, der Teil der eingehenden Datei, der bereits nach Skripten, Stylesheets und Bildern durchsucht wurde, nicht erneut geparst werden muss. Der Nachteil ist, dass mehr Arbeit verloren geht, wenn die Spekulation fehlschlägt.

Dieses Dokument hilft Ihnen, die Dinge zu vermeiden, die Spekulationen zum Scheitern bringen und das Laden Ihrer Seite verlangsamen.

Um spekulative Ladevorgänge von verlinkten Skripten, Stylesheets und Bildern erfolgreich zu machen, vermeiden Sie [`document.write`](/de/docs/Web/API/Document/write). Wenn Sie ein `<base>`-Element verwenden, um die Basis-URI Ihrer Seite zu überschreiben, platzieren Sie das Element im nicht-skriptierten Teil des Dokuments. Fügen Sie es nicht über `document.write()` oder [`document.createElement`](/de/docs/Web/API/Document/createElement) hinzu.

## Vermeidung von Baumkonstruktion-Ausgängen

Spekulative Baumkonstruktion schlägt fehl, wenn `document.write()` den Zustand des Baumkonstruktors so verändert, dass der spekulative Zustand nach dem `</script>`-Tag nicht mehr gültig ist, wenn der gesamte Inhalt, der von `document.write()` eingefügt wurde, geparst ist. Allerdings verursachen nur ungewöhnliche Verwendungen von `document.write()` Probleme. Hier sind die Dinge, die Sie vermeiden sollten:

- Schreiben Sie keine unausgeglichenen Bäume. `<script>document.write("<div>");</script>` ist schlecht. `<script>document.write("<div></div>");</script>` ist in Ordnung.
- Schreiben Sie kein unvollständiges Token. `<script>document.write("<div></div");</script>` ist schlecht.
- Beenden Sie Ihr Schreiben nicht mit einem Wagenrücklauf. `<script>document.write("Hello World!\r");</script>` ist schlecht. `<script>document.write("Hello World!\n");</script>` ist in Ordnung.
- Beachten Sie, dass das Schreiben von ausgeglichenen Tags dazu führen kann, dass andere Tags auf eine Weise inferiert werden, die das Schreiben unausgeglichen macht. Zum Beispiel wird `<script>document.write("<div></div>");</script>` innerhalb des `head`-Elements als `<script>document.write("</head><body><div></div>");</script>` interpretiert, was unausgeglichen ist.
- Formatieren Sie keinen Teil einer Tabelle. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` ist schlecht.
