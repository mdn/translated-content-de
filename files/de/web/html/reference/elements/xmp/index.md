---
title: "`<xmp>` HTML-Element zur Klartextdarstellung"
short-title: <xmp>
slug: Web/HTML/Reference/Elements/xmp
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

## Zusammenfassung

Das **`<xmp>`** [HTML](/de/docs/Web/HTML)-Element rendert den Text zwischen den Start- und End-Tags, ohne das HTML dazwischen zu interpretieren, und verwendet eine Schriftart mit fester Breite. Die HTML2-Spezifikation empfahl, dass es so breit dargestellt werden sollte, dass 80 Zeichen pro Zeile passen.

> [!NOTE]
> Verwenden Sie dieses Element nicht.
>
> - Es wurde seit HTML3.2 deklariert und nicht einheitlich implementiert. Es wurde vollständig aus dem aktuellen HTML entfernt.
> - Verwenden Sie stattdessen das {{HTMLElement("pre")}}-Element oder, wenn semantisch angemessen, das {{HTMLElement("code")}}-Element. Beachten Sie, dass Sie das `<`-Zeichen als `&lt;` und das `&`-Zeichen als `&amp;` escapen müssen, um sicherzustellen, dass sie nicht als Markup interpretiert werden.
> - Eine Schriftart mit fester Breite kann auch bei jedem Element durch Anwenden eines geeigneten [CSS](/de/docs/Web/CSS)-Stils mit `monospace` als generischem Schriftwert für die {{cssxref("font-family")}}-Eigenschaft erzielt werden.

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

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("plaintext")}}-Element, ähnlich wie `<xmp>`, aber ebenfalls veraltet.
