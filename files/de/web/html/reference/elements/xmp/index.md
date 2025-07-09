---
title: <xmp>
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

## Zusammenfassung

Das **`<xmp>`**-[HTML](/de/docs/Web/HTML)-Element rendert Text zwischen den Anfangs- und End-Tags, ohne das HTML dazwischen zu interpretieren, und verwendet dafür eine Schriftart mit fester Breite. Die HTML2-Spezifikation empfahl, dass es so dargestellt wird, dass 80 Zeichen pro Zeile Platz finden.

> [!NOTE]
> Verwenden Sie dieses Element nicht.
>
> - Es ist seit HTML3.2 veraltet und wurde nicht konsistent implementiert. Es wurde vollständig aus dem aktuellen HTML entfernt.
> - Verwenden Sie stattdessen das {{HTMLElement("pre")}}-Element oder, falls semantisch angemessen, das {{HTMLElement("code")}}-Element. Beachten Sie, dass Sie das `<`-Zeichen als `&lt;` und das `&`-Zeichen als `&amp;` maskieren müssen, um sicherzustellen, dass sie nicht als Markup interpretiert werden.
> - Eine Schriftart mit fester Breite kann auch bei jedem Element durch die Anwendung eines geeigneten [CSS](/de/docs/Web/CSS)-Stils erhalten werden, indem `monospace` als Wert der generischen Schriftart für die {{cssxref("font-family")}}-Eigenschaft verwendet wird.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente zur Verwendung stattdessen.
- Das {{HTMLElement("plaintext")}}-Element, ähnlich dem `<xmp>`, aber ebenfalls obsolet.
