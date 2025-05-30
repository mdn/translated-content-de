---
title: Lesereihenfolge
slug: Glossary/Reading_order
l10n:
  sourceCommit: 7dda25db814fed5ae7498baaee80009b3569a8dc
---

{{GlossarySidebar}}

**Lesereihenfolge** bezieht sich auf die Reihenfolge, in der Inhalte zugänglich gemacht werden, zum Beispiel, wenn sie von einem {{Glossary("screen_reader", "Screenreader")}} vorgelesen werden oder beim Verwenden von sequenziellen Navigationsmethoden wie dem Tabben durch Links oder Schaltflächen angesteuert werden. Standardmäßig wird die Lesereihenfolge einer Webseite durch die Dokumentenquellenreihenfolge definiert.

Im Allgemeinen sollte die Quellenreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, und dies sollte sich auch im visuellen Layout des Inhalts widerspiegeln. Manchmal weicht jedoch die visuelle Reihenfolge von der Quellenreihenfolge ab. Beispielsweise könnten Sie unterschiedliche Layouts auf ein Dokument anwenden, basierend auf [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um den Anforderungen verschiedener Geräte oder Benutzer gerecht zu werden, oder die Tab-Reihenfolge über [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) anpassen.

Diese Aktualisierungen können zu Barrierefreiheitsproblemen führen. Zum Beispiel, wenn ein sehender Screenreader-Nutzer durch Inhalte tabbt und die Reihenfolge im Screenreader von der visuellen Reihenfolge abweicht, ist dies eine schlechte Benutzererfahrung und kann unzugänglich sein. Die Lesereihenfolge sollte für alle Benutzer verständlich sein, unabhängig davon, wie sie auf den Inhalt zugreifen.

## Ändern der Lesereihenfolge in CSS

Die Lesereihenfolge eines Elements kann über die {{cssxref("reading-flow")}}-Eigenschaft verändert und weiter angepasst werden, indem {{cssxref("reading-order")}}-Werte für Kindelemente des Elements gesetzt werden.

Die folgenden Definitionen sind wichtig, um eine veränderte Lesereihenfolge zu verstehen:

- Lesefluss-Container
  - : Ein Element mit einer veränderten Lesereihenfolge als Ergebnis der für seine {{cssxref("reading-flow")}}- und {{cssxref("reading-order")}}-Eigenschaften festgelegten Werte.
- Lesefluss
  - : Die veränderte Lesereihenfolge der Kindelemente eines Lesefluss-Containers.

## Siehe auch

- {{cssxref("reading-flow")}}
- {{cssxref("reading-order")}}
- {{cssxref("flex-direction")}}
- {{cssxref("order")}}
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
