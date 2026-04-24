---
title: "`<xmp>` HTML-Element zur Anzeige von Klartext"
short-title: <xmp>
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

## Zusammenfassung

Das **`<xmp>`** [HTML](/de/docs/Web/HTML) Element zeigt den Text zwischen den Start- und End-Tags an, ohne das HTML dazwischen zu interpretieren, und verwendet eine monospaced Schriftart. Die HTML2-Spezifikation empfahl, dass es so dargestellt werden sollte, dass 80 Zeichen pro Zeile passen.

> [!NOTE]
> Verwenden Sie dieses Element nicht.
>
> - Es ist seit HTML3.2 veraltet und wurde nicht konsistent implementiert. Es wurde vollständig aus dem aktuellen HTML entfernt.
> - Verwenden Sie stattdessen das {{HTMLElement("pre")}}-Element oder, falls semantisch angemessen, das {{HTMLElement("code")}}-Element. Beachten Sie, dass Sie das `<`-Zeichen als `&lt;` und das `&`-Zeichen als `&amp;` escapen müssen, um sicherzustellen, dass sie nicht als Markup interpretiert werden.
> - Eine monospaced Schriftart kann auch auf jedem Element durch Anwendung eines entsprechenden [CSS](/de/docs/Web/CSS) Stils erzielt werden, indem `monospace` als generische Schriftart für die {{cssxref("font-family")}}-Eigenschaft verwendet wird.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die für alle Elemente üblich sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente, die stattdessen verwendet werden sollen.
- Das {{HTMLElement("plaintext")}}-Element, ähnlich wie `<xmp>`, aber auch veraltet.
