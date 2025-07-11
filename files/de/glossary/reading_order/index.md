---
title: Leseabfolge
slug: Glossary/Reading_order
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Leseabfolge** bezieht sich auf die Reihenfolge, in der Inhalte zugreifbar sind, beispielsweise wenn sie von einem {{Glossary("screen_reader", "Screenreader")}} vorgelesen werden oder mittels sequentieller Navigationsmethoden wie Tabben durch Links oder Schaltflächen angesteuert werden. Standardmäßig wird die Leseabfolge einer Webseite durch die Dokumentquellenreihenfolge definiert.

Im Allgemeinen sollte die Quellenreihenfolge eine sinnvolle Leseabfolge für den Inhalt ausdrücken, und dies sollte sich auch in der visuellen Reihenfolge des Inhaltslayouts widerspiegeln. Manchmal jedoch gerät die visuelle Reihenfolge aus dem Gleichgewicht mit der Quellenreihenfolge. Zum Beispiel könnten Sie unterschiedliche Layouts auf ein Dokument anwenden, basierend auf [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), um verschiedene Geräte- oder Benutzeranforderungen zu erfüllen, oder die Tab-Reihenfolge mit Hilfe von [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) anpassen.

Diese Anpassungen können Barrierefreiheitsprobleme verursachen. Zum Beispiel, wenn ein sehender Screenreader-Nutzer durch Inhalte tabbt und die Screenreader-Reihenfolge von der visuellen Reihenfolge abweicht, ist dies eine schlechte Benutzererfahrung und kann unzugänglich sein. Die Leseabfolge sollte für alle Benutzer sinnvoll sein, unabhängig davon, wie sie auf den Inhalt zugreifen.

## Ändern der Leseabfolge in CSS

Die Leseabfolge eines Elements kann über die {{cssxref("reading-flow")}}-Eigenschaft modifiziert und weiter verfeinert werden, indem man die {{cssxref("reading-order")}}-Werte auf Kindelementen des Elements setzt.

Die folgenden Definitionen sind wichtig, um eine geänderte Leseabfolge zu verstehen:

- Leseabfolgen-Container
  - : Ein Element mit einer modifizierten Leseabfolge, die sich aus den für seine {{cssxref("reading-flow")}}- und {{cssxref("reading-order")}}-Eigenschaften festgelegten Werten ergibt.
- Leseabfolge
  - : Die modifizierte Leseabfolge der Kindelemente eines Leseabfolgen-Containers.

## Siehe auch

- {{cssxref("reading-flow")}}
- {{cssxref("reading-order")}}
- {{cssxref("flex-direction")}}
- {{cssxref("order")}}
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
