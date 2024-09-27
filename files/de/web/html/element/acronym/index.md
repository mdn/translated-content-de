---
title: <acronym>
slug: Web/HTML/Element/acronym
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<acronym>`** [HTML](/de/docs/Web/HTML)-Element ermöglicht es Autoren, eine Zeichenfolge, die ein Akronym oder eine Abkürzung eines Wortes darstellt, klar zu kennzeichnen.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen das {{HTMLElement("abbr")}}-Element.

## Attribute

Dieses Element besitzt nur [globale Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

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

Obwohl der Zweck dieses Tags rein für die Bequemlichkeit des Autors gedacht ist, variiert sein Standardstil von Browser zu Browser:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern setzen den Text auch in Kapitälchen; um diesen Stil zu vermeiden, behebt das Hinzufügen von etwas wie {{cssxref("font-variant", "font-variant: none")}} im CSS diesen Fall.

Es wird daher empfohlen, dass Webautoren entweder explizit den Stil dieses Elements festlegen oder einige Unterschiede zwischen den Browsern akzeptieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
