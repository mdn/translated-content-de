---
title: <xmp>
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

## Zusammenfassung

Das **`<xmp>`** [HTML](/de/docs/Web/HTML)-Element rendert Text zwischen den Start- und End-Tags, ohne dass das HTML dazwischen interpretiert wird, und verwendet dabei eine Schriftart mit fester Breite. Die HTML2-Spezifikation empfahl, dass es breit genug dargestellt werden sollte, um 80 Zeichen pro Zeile zu ermöglichen.

> [!NOTE]
> Verwenden Sie dieses Element nicht.
>
> - Es wurde seit HTML3.2 als veraltet angesehen und nicht konsistent implementiert. Es wurde vollständig aus dem aktuellen HTML entfernt.
> - Verwenden Sie stattdessen das {{HTMLElement("pre")}}-Element oder, falls semantisch angemessen, das {{HTMLElement("code")}}-Element. Beachten Sie, dass Sie das `<`-Zeichen als `&lt;` und das `&`-Zeichen als `&amp;` escapen müssen, um sicherzustellen, dass sie nicht als Markup interpretiert werden.
> - Eine Schriftart mit fester Breite kann auch auf jedem Element erhalten werden, indem ein entsprechender [CSS](/de/docs/Web/CSS)-Stil angewendet wird, der `monospace` als generischen Schriftwert für die {{cssxref("font-family")}}-Eigenschaft verwendet.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("plaintext")}}-Element, das dem `<xmp>`-Element ähnlich ist, aber ebenfalls obsolet ist.
