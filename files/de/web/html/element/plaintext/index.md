---
title: "<plaintext>: Das Plain-Text-Element (veraltet)"
slug: Web/HTML/Element/plaintext
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML) Element rendert alles, was dem Start-Tag folgt, als rohen Text und ignoriert jegliches nachfolgende HTML. Es gibt keinen End-Tag, da alles nach dem Tag als roher Text betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Browser, die es implementierten, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, könnten es stattdessen als ein {{HTMLElement("pre")}} Element behandeln, das HTML immer noch interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (abgesehen von nicht angezeigten Elementen wie {{HTMLElement("head")}}), nutzen Sie überhaupt kein HTML. Servieren Sie stattdessen eine Textdatei mit dem `text/plain` [MIME-Typ](/de/docs/Learn/Server-side/Configuring_server_MIME_types).
> - Verwenden Sie anstelle von `<plaintext>` das {{HTMLElement("pre")}} Element oder, falls semantisch passend (z.B. für Inline-Text), das {{HTMLElement("code")}} Element. Escapen Sie Zeichen wie `<`, `>` und `&`, um zu verhindern, dass Browser den Elementinhalt versehentlich als HTML parsen.
> - Eine monospaced Schriftart kann jedem HTML-Element über einen [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}} Stil mit dem generischen Wert `monospace` zugewiesen werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref('HTMLElement')}} Schnittstelle.

<!-- ## Technische Übersicht -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}} und {{HTMLElement("code")}} Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("xmp")}} Element, ebenfalls obsolet, ähnlich wie `<plaintext>`.
