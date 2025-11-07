---
title: Lesereihenfolge
slug: Glossary/Reading_order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Lesereihenfolge** bezieht sich auf die Reihenfolge, in der Inhalte zugänglich gemacht werden, z. B. wenn sie von einem {{Glossary("screen_reader", "Screenreader")}} vorgelesen oder durch sequentielle Navigationsmethoden wie das Tabben durch Links oder Schaltflächen navigiert werden. Standardmäßig wird die Lesereihenfolge einer Webseite durch die Dokumentquellenreihenfolge definiert.

Im Allgemeinen sollte die Quellenreihenfolge eine sinnvolle Lesereihenfolge für den Inhalt ausdrücken, und dies sollte auch durch die visuelle Anordnung des Inhaltslayouts widergespiegelt werden. Manchmal stimmt jedoch die visuelle Reihenfolge nicht mit der Quellenreihenfolge überein. Beispielsweise könnten Sie unterschiedliche Layouts basierend auf [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) anwenden, um verschiedenen Geräte- oder Benutzeranforderungen gerecht zu werden, oder die Tabulatorreihenfolge über [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) anpassen.

Diese Anpassungen können Barrierefreiheitsprobleme verursachen. Zum Beispiel, wenn ein sehender Screenreader-Benutzer durch Inhalte tabbt und die Screenreader-Reihenfolge von der visuellen Reihenfolge abweicht, ist dies eine schlechte Benutzererfahrung und kann unzugänglich sein. Die Lesereihenfolge sollte für alle Benutzer sinnvoll sein, unabhängig davon, wie sie auf die Inhalte zugreifen.

## Änderung der Lesereihenfolge in CSS

Die Lesereihenfolge eines Elements kann über die {{cssxref("reading-flow")}}-Eigenschaft modifiziert werden und kann weiter verfeinert werden, indem {{cssxref("reading-order")}}-Werte auf Kind-Elemente des Elements gesetzt werden.

Die folgenden Definitionen sind wichtig, um die geänderte Lesereihenfolge zu verstehen:

- Lesefluss-Container
  - : Ein Element mit einer modifizierten Lesereihenfolge, die sich aus den Werten ergibt, die für seine {{cssxref("reading-flow")}}- und {{cssxref("reading-order")}}-Eigenschaften festgelegt sind.
- Lesefluss
  - : Die modifizierte Lesereihenfolge der Kindelemente eines Lesefluss-Containers.

## Siehe auch

- {{cssxref("reading-flow")}}
- {{cssxref("reading-order")}}
- {{cssxref("flex-direction")}}
- {{cssxref("order")}}
- [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)
