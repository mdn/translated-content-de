---
title: <acronym>
slug: Web/HTML/Element/acronym
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}{{deprecated_header}}

Das **`<acronym>`** [HTML](/de/docs/Web/HTML)-Element ermöglicht es Autoren, eine Zeichenfolge, die ein Akronym oder eine Abkürzung für ein Wort darstellt, klar zu kennzeichnen.

> [!WARNING]
> Verwenden Sie dieses Element nicht. Nutzen Sie stattdessen das {{HTMLElement("abbr")}}-Element.

## Attribute

Dieses Element verfügt nur über [globale Attribute](/de/docs/Web/HTML/Global_attributes), die allen Elementen gemeinsam sind.

## DOM-Schnittstelle

Dieses Element implementiert die {{domxref('HTMLElement')}}-Schnittstelle.

## Beispiele

```html
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only a component of the
  Internet.
</p>
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Standardmäßige Formatierung

Obwohl der Zweck dieses Tags rein zum Nutzen des Autors gedacht ist, variiert die Standardformatierung von Browser zu Browser:

- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige wenige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern setzen den Text auch in Kapitälchen; um diese Formatierung zu vermeiden, kann in der CSS-Datei etwas wie {{cssxref("font-variant", "font-variant: none")}} hinzugefügt werden.

Es wird daher empfohlen, dass Webautoren entweder dieses Element explizit formatieren oder einige plattformübergreifende Unterschiede akzeptieren.

<!-- ## Technische Zusammenfassung -->

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("abbr")}} HTML-Element
