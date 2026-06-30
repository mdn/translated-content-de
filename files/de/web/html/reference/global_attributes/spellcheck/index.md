---
title: "`spellcheck` HTML globales Attribut"
short-title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`spellcheck`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, auf Rechtschreibfehler zu überprüfen. Typischerweise werden nicht editierbare Elemente nicht auf Rechtschreibfehler überprüft, selbst wenn das `spellcheck`-Attribut auf `true` gesetzt ist und der Browser die Rechtschreibprüfung unterstützt.

{{InteractiveExample("HTML Demo: spellcheck", "tabbed-shorter")}}

<!-- cSpell:ignore exampull checkd spellung -->

```html interactive-example
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.</textarea>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.</textarea>
```

Es kann folgende Werte haben:

- ein leerer String oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
- `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert vom Elementtyp und dem Browser definiert. Dieser Standardwert kann auch _geerbt_ werden, was bedeutet, dass der Inhalt des Elements nur auf Rechtschreibfehler überprüft wird, wenn der nächste Vorfahre einen _spellcheck_-Zustand von `true` hat.

## Sicherheits- und Datenschutzbedenken

Die Verwendung der Rechtschreibprüfung kann Konsequenzen für die Sicherheit und den Datenschutz der Nutzer haben. Die Spezifikation reguliert nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann zur Rechtschreibprüfungsergebnissen an Dritte gesendet werden (siehe [erweiterte Rechtschreibprüfung und "spell-jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Sie sollten erwägen, `spellcheck` auf `false` zu setzen für Elemente, die sensible Informationen enthalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect).
