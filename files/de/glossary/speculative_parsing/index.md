---
title: Spekulatives Parsen
slug: Glossary/Speculative_parsing
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Traditionell lief der HTML-Parser in Browsern im Haupt-Thread und wurde nach einem `</script>`-Tag blockiert, bis das Skript aus dem Netzwerk abgerufen und ausgeführt wurde. Einige HTML-Parser, wie z. B. Firefox seit Firefox 4, unterstützen spekulatives Parsen abseits des Haupt-Threads. Sie parsen im Voraus, während Skripte heruntergeladen und ausgeführt werden. Der HTML-Parser startet spekulative Ladeprozesse für Skripte, Stylesheets und Bilder, die er im Stream voraus sieht, und führt den HTML-Baustruktur-Algorithmus spekulativ aus. Der Vorteil ist, dass, wenn eine Spekulation erfolgreich ist, der bereits auf Skripte, Stylesheets und Bilder gescannte Teil der eingehenden Datei nicht erneut geparst werden muss. Der Nachteil ist, dass im Falle eines Scheiterns der Spekulation mehr Arbeit verloren geht.

Dieses Dokument hilft Ihnen, die Dinge zu vermeiden, die eine Spekulation fehlschlagen lassen und das Laden Ihrer Seite verlangsamen.

Um spekulative Ladungen von verlinkten Skripten, Stylesheets und Bildern erfolgreich zu machen, vermeiden Sie [`document.write`](/de/docs/Web/API/Document/write). Wenn Sie ein `<base>`-Element verwenden, um die Basis-URI Ihrer Seite zu überschreiben, setzen Sie das Element in den nicht geskripteten Teil des Dokuments. Fügen Sie es nicht über `document.write()` oder [`document.createElement`](/de/docs/Web/API/Document/createElement) hinzu.

## Vermeidung von Verlusten beim Baustrukturausgang

Spekulativer Baustrukturaufbau schlägt fehl, wenn `document.write()` den Zustand des Baum-Erstellers so ändert, dass der spekulative Zustand nach dem `</script>`-Tag nicht mehr gilt, nachdem der gesamte Inhalt, der von `document.write()` eingefügt wurde, geparst wurde. Allerdings verursachen nur ungewöhnliche Verwendungen von `document.write()` Probleme. Hier sind die Dinge, die vermieden werden sollten:

- Schreiben Sie keine unausgewogenen Bäume. `<script>document.write("<div>");</script>` ist schlecht. `<script>document.write("<div></div>");</script>` ist in Ordnung.
- Schreiben Sie kein unvollendetes Token. `<script>document.write("<div></div");</script>` ist schlecht.
- Beenden Sie Ihr Schreiben nicht mit einem Wagenrücklauf. `<script>document.write("Hello World!\r");</script>` ist schlecht. `<script>document.write("Hello World!\n");</script>` ist in Ordnung.
- Beachten Sie, dass das Schreiben von ausgeglichenen Tags dazu führen kann, dass andere Tags in einer Weise inferiert werden, die das Schreiben unausgewogen macht. Z.B. `<script>document.write("<div></div>");</script>` im `head`-Element wird als `<script>document.write("</head><body><div></div>");</script>` interpretiert, was unausgewogen ist.
- Formatieren Sie keinen Teil einer Tabelle. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` ist schlecht.
