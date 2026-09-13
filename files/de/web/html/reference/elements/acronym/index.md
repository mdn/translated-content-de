---
title: "`<acronym>` HTML-Akronym- oder Abkürzungselement"
short-title: <acronym>
slug: Web/HTML/Reference/Elements/acronym
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

Das **`<acronym>`** [HTML](/de/docs/Web/HTML) Element ermöglicht es Autorinnen und Autoren, eine Zeichenfolge klar zu kennzeichnen, die ein Akronym oder eine Abkürzung für ein Wort bildet.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen das {{HTMLElement("abbr")}} Element.

## Attribute

Dieses Element hat nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle.

## Beispiele

```html
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only a component of the
  Internet.
</p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Standardstil

Obwohl der Zweck dieses Tags ausschließlich zur Bequemlichkeit der Autorin oder des Autors dient, variiert seine Standardstilierung von einem Browser zum anderen:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige wenige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern stellen den Text auch in Kapitälchen dar; um diese Stilierung zu vermeiden, kann in der CSS etwas wie {{cssxref("font-variant", "font-variant: none")}} hinzugefügt werden.

Es wird daher empfohlen, dass Webautoren entweder dieses Element explizit stylen oder einige Unterschiede zwischen den Browsern akzeptieren.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
