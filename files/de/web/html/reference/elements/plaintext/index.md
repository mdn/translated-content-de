---
title: "`<plaintext>` HTML Plaintext-Element"
short-title: <plaintext>
slug: Web/HTML/Reference/Elements/plaintext
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<plaintext>`** [HTML](/de/docs/Web/HTML)-Element rendert alles, was dem Start-Tag folgt, als Rohtext und ignoriert jegliches nachfolgende HTML. Es gibt keinen Schlusstag, da alles danach als Rohtext betrachtet wird.

> [!WARNING]
> Verwenden Sie dieses Element nicht.
>
> - `<plaintext>` ist seit HTML 2 veraltet, und nicht alle Browser haben es implementiert. Browser, die es implementiert haben, taten dies nicht konsistent.
> - `<plaintext>` ist obsolet; Browser, die es akzeptieren, behandeln es stattdessen möglicherweise als ein {{HTMLElement("pre")}}-Element, das HTML weiterhin interpretiert.
> - Wenn `<plaintext>` das erste Element auf der Seite ist (abgesehen von nicht angezeigten Elementen wie {{HTMLElement("head")}}), verwenden Sie überhaupt kein HTML. Stattdessen servieren Sie eine Textdatei mit dem `text/plain` [MIME-Typ](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types).
> - Anstelle von `<plaintext>` verwenden Sie das {{HTMLElement("pre")}}-Element oder, wenn es semantisch zutreffend ist (zum Beispiel für Inline-Text), das {{HTMLElement("code")}}-Element. Maskieren Sie jegliche `<`, `>` und `&` Zeichen, um zu verhindern, dass Browser den Inhalt des Elements versehentlich als HTML interpretieren.
> - Eine Schriftart mit fester Breite kann auf jedes HTML-Element über einen [CSS](/de/docs/Web/CSS) {{cssxref("font-family")}}-Stil mit dem generischen Wert `monospace` angewendet werden.

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
- Das {{HTMLElement("xmp")}}-Element, ebenfalls obsolet und ähnlich wie `<plaintext>`.
