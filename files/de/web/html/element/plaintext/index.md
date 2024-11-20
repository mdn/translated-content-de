---
title: "<plaintext>: Das Plain-Text-Element (Veraltet)"
slug: Web/HTML/Element/plaintext
l10n:
  sourceCommit: b97bd01f1c1388fa25a9a8461caac7096daec615
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML)-Element rendert alles, was auf das Start-Tag folgt, als rohen Text und ignoriert jegliches nachfolgendes HTML. Es gibt kein Schließ-Tag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet und wurde nicht von allen Browsern implementiert. Browser, die es implementiert haben, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, können es stattdessen als ein {{HTMLElement("pre")}}-Element behandeln, das immer noch HTML innerhalb interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (außer irgendwelchen nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie überhaupt kein HTML. Stattdessen liefern Sie eine Textdatei mit dem `text/plain` [MIME-Typ](/de/docs/Learn/Server-side/Configuring_server_MIME_types).
> - Verwenden Sie anstelle von `<plaintext>` das {{HTMLElement("pre")}}-Element oder, wenn es semantisch zutreffend ist (wie für Inline-Text), das {{HTMLElement("code")}}-Element. Escapen Sie jegliche `<`, `>` und `&`-Zeichen, um zu verhindern, dass Browser den Inhalt des Elements versehentlich als HTML parsen.
> - Eine Monospace-Schriftart kann auf jedes HTML-Element mittels eines [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}}-Stils mit dem generischen Wert `monospace` angewendet werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

<!-- ## Technical summary -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{HTMLElement("pre")}}- und {{HTMLElement("code")}}-Elemente, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("xmp")}}-Element, ebenfalls obsolet, das `<plaintext>` ähnlich ist.
