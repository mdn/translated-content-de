---
title: HTML `spellcheck` Globales Attribut
short-title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`spellcheck`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumriertes")}} Attribut, das festlegt, ob das Element auf Rechtschreibfehler überprüft werden darf.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, auf Rechtschreibfehler zu prüfen. Typischerweise werden nicht editierbare Elemente nicht auf Rechtschreibfehler überprüft, selbst wenn das `spellcheck`-Attribut auf `true` gesetzt ist und der Browser die Rechtschreibprüfung unterstützt.

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

- ein leerer String oder `true`, was darauf hinweist, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
- `false`, was darauf hinweist, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert durch den Elementtyp und den Browser bestimmt. Dieser Standardwert kann auch _geerbt_ werden, was bedeutet, dass der Inhalt des Elements nur auf Rechtschreibfehler überprüft wird, wenn sein nächster Vorfahre einen _spellcheck_-Zustand von `true` hat.

## Sicherheits- und Datenschutzbedenken

Die Verwendung der Rechtschreibprüfung kann Auswirkungen auf die Sicherheit und Privatsphäre der Benutzer haben. Die Spezifikation regelt nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann zur Überprüfung an Dritte gesendet werden (siehe [erweiterte Rechtschreibprüfung und "Spell-Jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Sie sollten in Betracht ziehen, `spellcheck` auf `false` zu setzen für Elemente, die sensible Informationen enthalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect).
