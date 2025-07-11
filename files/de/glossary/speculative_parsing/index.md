---
title: Spekulatives Parsen
slug: Glossary/Speculative_parsing
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Traditionell lief der HTML-Parser in Browsern im Haupt-Thread und wurde nach einem `</script>`-Tag blockiert, bis das Skript aus dem Netzwerk abgerufen und ausgeführt wurde. Einige HTML-Parser, wie zum Beispiel Firefox seit Version 4, unterstützen spekulatives Parsen abseits des Haupt-Threads. Der Parser liest voraus, während Skripte heruntergeladen und ausgeführt werden. Der HTML-Parser startet spekulative Ladevorgänge für Skripte, Stylesheets und Bilder, die er weiter vorne im Stream findet, und führt spekulativ den HTML-Baumkonstruktions-Algorithmus aus. Der Vorteil ist, dass, wenn eine Spekulation erfolgreich ist, es nicht notwendig ist, den Teil der eingehenden Datei neu zu parsen, der bereits nach Skripten, Stylesheets und Bildern gescannt wurde. Der Nachteil ist, dass mehr Arbeit verloren geht, wenn die Spekulation fehlschlägt.

Dieses Dokument hilft Ihnen dabei, Dinge zu vermeiden, die Spekulationen scheitern lassen und das Laden Ihrer Seite verlangsamen.

Um spekulative Ladevorgänge verlinkter Skripte, Stylesheets und Bilder erfolgreich zu machen, vermeiden Sie [`document.write`](/de/docs/Web/API/Document/write). Wenn Sie ein `<base>`-Element verwenden, um die Basis-URI Ihrer Seite zu überschreiben, platzieren Sie das Element im nicht-skriptgesteuerten Teil des Dokuments. Fügen Sie es nicht über `document.write()` oder [`document.createElement`](/de/docs/Web/API/Document/createElement) hinzu.

## Verlust der Baumkonstruktionsergebnisse vermeiden

Die spekulative Baumkonstruktion schlägt fehl, wenn `document.write()` den Zustand des Baumkonstruktors so ändert, dass der spekulative Zustand nach dem `</script>`-Tag nicht mehr zutrifft, sobald der gesamte Inhalt, der von `document.write()` eingefügt wurde, geparst ist. Jedoch verursachen nur ungewöhnliche Verwendungen von `document.write()` Probleme. Hier finden Sie, was zu vermeiden ist:

- Schreiben Sie keine unausgeglichenen Bäume. `<script>document.write("<div>");</script>` ist schlecht. `<script>document.write("<div></div>");</script>` ist in Ordnung.
- Schreiben Sie kein unvollständiges Token. `<script>document.write("<div></div");</script>` ist schlecht.
- Beenden Sie Ihr Schreiben nicht mit einem Wagenrücklauf. `<script>document.write("Hello World!\r");</script>` ist schlecht. `<script>document.write("Hello World!\n");</script>` ist in Ordnung.
- Beachten Sie, dass das Schreiben von ausgeglichenen Tags dazu führen kann, dass andere Tags in einer Weise eingefügt werden, die das Schreiben unausgeglichen macht. Zum Beispiel wird `<script>document.write("<div></div>");</script>` innerhalb des `head`-Elements als `<script>document.write("</head><body><div></div>");</script>` interpretiert, was unausgeglichen ist.
- Formatieren Sie keinen Teil einer Tabelle. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` ist schlecht.
