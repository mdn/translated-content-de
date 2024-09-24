---
title: Spekulatives Parsen
slug: Glossary/Speculative_parsing
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Traditionell lief der HTML-Parser in Browsern im Haupt-Thread und wurde nach einem `</script>`-Tag blockiert, bis das Skript aus dem Netzwerk abgerufen und ausgeführt wurde. Einige HTML-Parser, wie etwa Firefox seit Firefox 4, unterstützen spekulatives Parsen außerhalb des Haupt-Threads. Während Skripte heruntergeladen und ausgeführt werden, wird vorausgeparst. Der HTML-Parser startet spekulative Ladevorgänge für Skripte, Stylesheets und Bilder, die er im Datenstrom vorausfindet, und führt den HTML-Baubaumalgorithmus spekulativ aus. Der Vorteil ist, dass, wenn eine Spekulation erfolgreich ist, es nicht notwendig ist, den Teil der eingehenden Datei erneut zu parsen, der bereits nach Skripten, Stylesheets und Bildern durchsucht wurde. Der Nachteil ist, dass mehr Arbeit verloren geht, wenn die Spekulation scheitert.

Dieses Dokument hilft Ihnen, die Dinge zu vermeiden, die Spekulationen zum Scheitern bringen und das Laden Ihrer Seite verlangsamen.

Um spekulative Ladevorgänge von verlinkten Skripten, Stylesheets und Bildern erfolgreich zu machen, vermeiden Sie {{domxref('document.write')}}. Wenn Sie ein `<base>`-Element verwenden, um die Basis-URI Ihrer Seite zu überschreiben, platzieren Sie das Element in den nicht geskripteten Teil des Dokuments. Fügen Sie es nicht über `document.write()` oder {{domxref('document.createElement')}} hinzu.

## Verlust der Baumkonstruktionsergebnisse vermeiden

Die spekulative Baumkonstruktion schlägt fehl, wenn `document.write()` den Zustand des Baumkonstruktors so verändert, dass der spekulative Zustand nach dem `</script>`-Tag nicht mehr hält, wenn alle durch `document.write()` eingefügten Inhalte geparst wurden. Nur ungewöhnliche Anwendungen von `document.write()` verursachen jedoch Probleme. Hier sind die Dinge, die Sie vermeiden sollten:

- Schreiben Sie keine unausgewogene Strukturen. `<script>document.write("<div>");</script>` ist schlecht. `<script>document.write("<div></div>");</script>` ist in Ordnung.
- Schreiben Sie kein unvollständiges Token. `<script>document.write("<div></div");</script>` ist schlecht.
- Beenden Sie Ihr Schreiben nicht mit einem Wagenrücklauf. `<script>document.write("Hello World!\r");</script>` ist schlecht. `<script>document.write("Hello World!\n");</script>` ist in Ordnung.
- Beachten Sie, dass das Schreiben von ausgewogenen Tags dazu führen kann, dass andere Tags in einer Weise interpretiert werden, die das Schreiben unausgewogen macht. Z.B. `<script>document.write("<div></div>");</script>` im `head`-Element wird als `<script>document.write("</head><body><div></div>");</script>` interpretiert, was unausgewogen ist.
- Formatieren Sie nicht nur einen Teil einer Tabelle. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` ist schlecht.
