---
title: "<plaintext>: Das Plain Text Element (Veraltet)"
slug: Web/HTML/Element/plaintext
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML) Element rendert alles, was dem Start-Tag folgt, als Rohtext und ignoriert jeglichen darauf folgenden HTML-Code. Es gibt kein Schlusstag, da alles danach als Rohtext angesehen wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Browser, die es implementierten, taten dies nicht einheitlich.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, könnten es stattdessen wie ein {{HTMLElement("pre")}}-Element behandeln, das weiterhin HTML interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (außer nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie HTML überhaupt nicht. Servieren Sie stattdessen eine Textdatei mit dem `text/plain` [MIME-Typ](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types).
> - Anstelle von `<plaintext>` verwenden Sie das {{HTMLElement("pre")}}-Element oder, wenn es semantisch korrekt ist (wie für inline-Text), das {{HTMLElement("code")}}-Element. Escapen Sie alle `<`, `>` und `&` Zeichen, um zu verhindern, dass Browser den Inhalt des Elements versehentlich als HTML parsen.
> - Eine Schriftart mit fester Breite kann auf jedes HTML-Element über einen [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}} Stil mit dem generischen Wert `monospace` angewendet werden.

## Attribute

Dieses Element hat keine weiteren Attribute außer den [globalen Attributen](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}} und {{HTMLElement("code")}} Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("xmp")}} Element, ebenfalls veraltet, ähnlich wie `<plaintext>`.
