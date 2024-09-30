---
title: "`<acronym>`"
slug: Web/HTML/Element/acronym
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<acronym>`** [HTML](/de/docs/Web/HTML)-Element ermöglicht es Autoren, eine Zeichenfolge deutlich anzugeben, die ein Akronym oder eine Abkürzung für ein Wort darstellt.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen das {{HTMLElement("abbr")}}-Element.

## Attribute

Dieses Element hat nur [globale Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

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

Obwohl der Zweck dieses Tags rein für die Bequemlichkeit des Autors ist, variiert sein Standardstil von einem Browser zum anderen:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gestrichelte Unterstreichung hinzu.
- Einige wenige Browser fügen nicht nur eine gestrichelte Unterstreichung hinzu, sondern setzen den Inhalt auch in Kapitälchen; um dieses Styling zu vermeiden, können Sie im CSS etwas wie {{cssxref("font-variant", "font-variant: none")}} hinzufügen.

Es wird daher empfohlen, dass Web-Autoren dieses Element entweder ausdrücklich stylen oder einige browserübergreifende Variationen akzeptieren.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
