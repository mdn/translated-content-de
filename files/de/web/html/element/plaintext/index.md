---
title: "<plaintext>: Das Plain Text-Element (Veraltet)"
slug: Web/HTML/Element/plaintext
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML)-Element rendert alles nach dem Start-Tag als Rohtext und ignoriert jegliches nachfolgende HTML. Es gibt keinen Schlusstag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Browser, die es implementiert haben, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, behandeln es möglicherweise stattdessen als ein {{HTMLElement("pre")}}-Element, das HTML trotzdem interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (außer irgendwelchen nicht angezeigten Elementen, wie zum Beispiel {{HTMLElement("head")}}), verwenden Sie überhaupt kein HTML. Stattdessen liefern Sie eine Textdatei mit dem MIME-Typ `text/plain`.
> - Anstelle von `<plaintext>` verwenden Sie das {{HTMLElement("pre")}}-Element oder, wenn semantisch passend (z. B. bei Inline-Text), das {{HTMLElement("code")}}-Element. Fliehen Sie jegliche `<`, `>` und `&`-Zeichen, um zu verhindern, dass Browser den Inhalt als HTML interpretieren.
> - Eine Schriftart mit fester Zeichenbreite kann auf jedes HTML-Element mit einem [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}}-Stil mit dem generischen Wert `monospace` angewendet werden.

## Attribute

Dieses Element hat keine anderen Attribute als die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Elemente {{HTMLElement("pre")}} und {{HTMLElement("code")}}, die stattdessen verwendet werden sollten.
- Das {{HTMLElement("xmp")}}-Element, ebenfalls obsolet, ähnlich zu `<plaintext>`.
