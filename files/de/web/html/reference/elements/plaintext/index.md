---
title: "<plaintext>: Das Plain Text-Element (veraltet)"
slug: Web/HTML/Reference/Elements/plaintext
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML) Element rendert alles, was dem Start-Tag folgt, als Rohtext und ignoriert jegliches nachfolgende HTML. Es gibt kein schließendes Tag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Browser, die es implementiert haben, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, könnten es stattdessen als ein {{HTMLElement("pre")}}-Element behandeln, das weiterhin HTML innerhalb interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (abgesehen von nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie überhaupt kein HTML. Stattdessen stellen Sie eine Textdatei mit dem `text/plain` [MIME-Typ](/de/docs/Learn/web_development/Extensions/Server-side/Configuring_server_MIME_types) bereit.
> - Anstelle von `<plaintext>` verwenden Sie das {{HTMLElement("pre")}}-Element oder, wenn es semantisch zutreffend ist (wie bei Inlinetext), das {{HTMLElement("code")}}-Element. Escapen Sie alle `<`, `>` und `&`-Zeichen, um zu verhindern, dass Browser den Elementinhalt versehentlich als HTML parsen.
> - Eine monospaced Schriftart kann auf jedes HTML-Element über einen [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}} Stil mit dem `monospace` generischen Wert angewendet werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemein sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}} und {{HTMLElement("code")}} Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("xmp")}} Element, ebenfalls obsolet, ähnlich wie `<plaintext>`.
