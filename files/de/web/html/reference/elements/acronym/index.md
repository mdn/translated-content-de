---
title: <acronym>
slug: Web/HTML/Reference/Elements/acronym
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{deprecated_header}}

Das **`<acronym>`** [HTML](/de/docs/Web/HTML)-Element ermöglicht es Autoren, eine Zeichenfolge deutlich als Akronym oder Abkürzung für ein Wort zu kennzeichnen.

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

Obwohl der Zweck dieses Tags ausschließlich für die Bequemlichkeit des Autors ist, variiert sein Standardstil von einem Browser zum anderen:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern setzen das Element auch in Kapitälchen; um dieses Styling zu vermeiden, kann etwas wie {{cssxref("font-variant", "font-variant: none")}} im CSS dieses Problem lösen.

Es wird daher empfohlen, dass Web-Autoren entweder explizit dieses Element stylen oder einige Browser-übergreifende Variationen akzeptieren.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
