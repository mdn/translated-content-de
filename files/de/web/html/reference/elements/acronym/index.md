---
title: "`<acronym>` HTML Akronym oder Abkürzungs-Element"
short-title: <acronym>
slug: Web/HTML/Reference/Elements/acronym
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

{{deprecated_header}}

Das **`<acronym>`** [HTML](/de/docs/Web/HTML) Element ermöglicht es Autoren, eine Zeichenfolge deutlich als Akronym oder Abkürzung für ein Wort anzugeben.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Verwenden Sie stattdessen das {{HTMLElement("abbr")}} Element.

## Attribute

Dieses Element hat nur [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die bei allen Elementen üblich sind.

## DOM-Interface

Dieses Element implementiert das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface.

## Beispiele

```html
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only a component of the
  Internet.
</p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Standard-Stil

Obwohl der Zweck dieses Tags rein für die Bequemlichkeit des Autors ist, variiert sein Standard-Stil von einem Browser zum anderen:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige wenige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern stellen es auch in Kapitälchen dar; um dieses Styling zu vermeiden, sorgt das Hinzufügen von etwas wie {{cssxref("font-variant", "font-variant: none")}} in der CSS für Abhilfe in diesem Fall.

Es wird daher empfohlen, dass Web-Autoren dieses Element entweder explizit stylen oder einige abweichende Darstellungen in verschiedenen Browsern akzeptieren.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
