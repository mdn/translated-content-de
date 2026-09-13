---
title: "`<plaintext>` HTML-Plaintext-Element"
short-title: <plaintext>
slug: Web/HTML/Reference/Elements/plaintext
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<plaintext>`**-[HTML](/de/docs/Web/HTML)-Element rendert alles, was auf das Start-Tag folgt, als Rohtext und ignoriert jegliches nachfolgende HTML. Es gibt kein schließendes Tag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet und nicht alle Browser haben es implementiert. Browser, die es implementiert haben, taten dies nicht einheitlich.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, behandeln es möglicherweise stattdessen als ein {{HTMLElement("pre")}}-Element, das HTML weiterhin interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (abgesehen von nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie HTML überhaupt nicht. Stattdessen stellen Sie eine Textdatei mit dem `text/plain`-[MIME-Typ](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types) bereit.
> - Anstelle von `<plaintext>` verwenden Sie das {{HTMLElement("pre")}}-Element oder, wenn es semantisch korrekt ist (wie für eingebetteten Text), das {{HTMLElement("code")}}-Element. Entkommen Sie alle `<`, `>` und `&`-Zeichen, um zu verhindern, dass Browser den Inhalt des Elements versehentlich als HTML interpretieren.
> - Eine Schriftart mit fester Breite kann auf jedes HTML-Element über einen [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}}-Style mit dem generischen Wert `monospace` angewendet werden.

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
