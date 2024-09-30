---
title: <xmp>
slug: Web/HTML/Element/xmp
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{HTMLSidebar}}{{deprecated_header}}

## Zusammenfassung

Das **`<xmp>`** [HTML](/de/docs/Web/HTML)-Element rendert Text zwischen den Anfangs- und End-Tags, ohne das HTML dazwischen zu interpretieren, und verwendet dabei eine Schriftart mit fester Breite. Die HTML2-Spezifikation empfahl, dass es so breit gerendert werden sollte, dass 80 Zeichen pro Zeile passen.

> [!NOTE]
> Verwenden Sie dieses Element nicht.
>
> - Es ist seit HTML3.2 veraltet und wurde nicht konsistent implementiert. Es wurde vollständig aus dem aktuellen HTML entfernt.
> - Verwenden Sie stattdessen das {{HTMLElement("pre")}}-Element oder, falls semantisch angemessen, das {{HTMLElement("code")}}-Element. Beachten Sie, dass Sie das `<`-Zeichen als `&lt;` und das `&`-Zeichen als `&amp;` escapen müssen, um sicherzustellen, dass sie nicht als Markup interpretiert werden.
> - Eine Schriftart mit fester Breite kann auch bei jedem Element erhalten werden, indem ein geeigneter [CSS](/de/docs/Web/CSS)-Stil angewendet wird, der `monospace` als generischen Schriftwert für die {{cssxref("font-family")}}-Eigenschaft verwendet.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente, die stattdessen verwendet werden sollen.
- Das {{HTMLElement("plaintext")}}-Element, ähnlich wie `<xmp>`, aber ebenfalls obsolet.
