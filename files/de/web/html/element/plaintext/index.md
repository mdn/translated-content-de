---
title: "<plaintext>: Das Plain Text-Element (Veraltet)"
slug: Web/HTML/Element/plaintext
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML) Element rendert alles nach dem Start-Tag als Rohtext und ignoriert jegliches nachfolgende HTML. Es gibt kein End-Tag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Browser, die es implementiert haben, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, können es stattdessen als {{HTMLElement("pre")}} Element behandeln, das weiterhin HTML interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (außer bei nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie überhaupt kein HTML. Stattdessen sollten Sie eine Textdatei mit dem `text/plain` [MIME-Typ](/de/docs/Learn/Server-side/Configuring_server_MIME_types) bereitstellen.
> - Verwenden Sie anstelle von `<plaintext>` das {{HTMLElement("pre")}} Element oder, wenn semantisch korrekt (z. B. für Inline-Text), das {{HTMLElement("code")}} Element. Escapen Sie alle `<`, `>` und `&` Zeichen, um zu verhindern, dass Browser den Inhalt des Elements versehentlich als HTML interpretieren.
> - Eine Schriftart mit fester Breite kann jedem HTML-Element über einen [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}} Stil mit dem generischen Wert `monospace` zugewiesen werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}} und {{HTMLElement("code")}} Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("xmp")}} Element, ebenfalls obsolet, ähnlich wie `<plaintext>`.
