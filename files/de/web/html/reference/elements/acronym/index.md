---
title: <acronym>
slug: Web/HTML/Reference/Elements/acronym
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<acronym>`** [HTML](/de/docs/Web/HTML)-Element ermöglicht es Autoren, eine Zeichenfolge, die ein Akronym oder eine Abkürzung für ein Wort darstellt, deutlich anzugeben.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen das {{HTMLElement("abbr")}}-Element.

## Attribute

Dieses Element hat nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle.

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

Obwohl der Zweck dieses Tags rein zur Bequemlichkeit des Autors dient, variiert sein Standardstil von einem Browser zum anderen:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige wenige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern setzen den Text auch in Kapitälchen; um dieses Styling zu vermeiden, kann im CSS etwas wie {{cssxref("font-variant", "font-variant: none")}} hinzugefügt werden, um diesen Fall zu beheben.

Es wird daher empfohlen, dass Webautoren entweder dieses Element explizit stylen oder einige Unterschiede zwischen den Browsern akzeptieren.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
