---
title: "<plaintext>: Das Plain Text-Element (Veraltet)"
slug: Web/HTML/Reference/Elements/plaintext
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<plaintext>`**-[HTML](/de/docs/Web/HTML)-Element rendert alles nach dem Start-Tag als Rohtext und ignoriert jegliches nachfolgende HTML. Es gibt keinen End-Tag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Die Browser, die es implementiert haben, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, könnten es stattdessen als ein {{HTMLElement("pre")}}-Element behandeln, das weiterhin HTML interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (abgesehen von nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie überhaupt kein HTML. Stattdessen sollten Sie eine Textdatei mit dem `text/plain`-[MIME-Typ](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) bereitstellen.
> - Anstelle von `<plaintext>` sollten Sie das {{HTMLElement("pre")}}-Element oder, wenn semantisch korrekt (z. B. für Inline-Text), das {{HTMLElement("code")}}-Element verwenden. Escapen Sie alle `<`, `>` und `&`-Zeichen, um zu verhindern, dass Browser den Elementinhalt versehentlich als HTML parsen.
> - Eine Schriftart mit fester Breite kann jedem HTML-Element über eine [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}}-Stil mit dem generischen Wert `monospace` zugewiesen werden.

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
- Das {{HTMLElement("xmp")}}-Element, ebenfalls obsolet, ähnlich wie `<plaintext>`.
