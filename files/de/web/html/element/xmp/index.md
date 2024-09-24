---
title: <xmp>
slug: Web/HTML/Element/xmp
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}{{deprecated_header}}

## Zusammenfassung

Das **`<xmp>`**-[HTML](/de/docs/Web/HTML)-Element rendert Text zwischen den Start- und End-Tags, ohne das HTML dazwischen zu interpretieren, und verwendet eine Schriftart mit fester Breite. Die HTML2-Spezifikation empfahl, dass es breit genug dargestellt werden sollte, um 80 Zeichen pro Zeile zu ermöglichen.

> [!NOTE]
> Verwenden Sie dieses Element nicht.
>
> - Es wurde seit HTML3.2 als veraltet markiert und nicht konsistent implementiert. Es wurde vollständig aus dem aktuellen HTML entfernt.
> - Verwenden Sie stattdessen das {{HTMLElement("pre")}}-Element oder, wenn semantisch angemessen, das {{HTMLElement("code")}}-Element. Beachten Sie, dass Sie das Zeichen '`<`' als '`&lt;`' und das Zeichen '`&`' als '`&amp;`' escapen müssen, um sicherzustellen, dass sie nicht als Markup interpretiert werden.
> - Eine Schriftart mit fester Breite kann auch bei jedem Element durch Anwenden eines geeigneten [CSS](/de/docs/Web/CSS)-Stils mit `monospace` als generischem Schriftwert für die {{cssxref("font-family")}}-Eigenschaft erhalten werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref('HTMLElement')}}-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente zur Verwendung stattdessen.
- Das {{HTMLElement("plaintext")}}-Element, ähnlich wie `<xmp>`, aber ebenfalls veraltet.
