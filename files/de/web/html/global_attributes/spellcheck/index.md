---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{HTMLSidebar("Global_attributes")}}

Das **`spellcheck`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, Rechtschreibfehler zu überprüfen. Typischerweise werden nicht bearbeitbare Elemente nicht auf Rechtschreibfehler geprüft, selbst wenn das `spellcheck`-Attribut auf `true` gesetzt ist und der Browser die Rechtschreibprüfung unterstützt.

{{InteractiveExample("HTML Demo: spellcheck", "tabbed-shorter")}}

<!-- cSpell:ignore exampull checkd spellung -->

```html interactive-example
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.</textarea
>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.</textarea
>
```

Es kann die folgenden Werte haben:

- leere Zeichenkette oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
- `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler geprüft werden sollte.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert durch den Elementtyp und den Browser definiert. Dieser Standardwert kann auch _vererbt_ werden, was bedeutet, dass der Inhalt des Elements nur dann auf Rechtschreibfehler überprüft wird, wenn sein nächster Vorfahre einen _spellcheck_-Status von `true` hat.

## Sicherheits- und Datenschutzbedenken

Die Nutzung der Rechtschreibprüfung kann Auswirkungen auf die Sicherheit und den Datenschutz der Benutzer haben. Die Spezifikation regelt nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann an eine Drittpartei zur Überprüfung der Rechtschreibung gesendet werden (siehe [erweiterte Rechtschreibprüfung und "Spell-Jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Es wird empfohlen, `spellcheck` auf `false` zu setzen für Elemente, die sensible Informationen enthalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect).
