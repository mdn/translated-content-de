---
title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`spellcheck`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, auf Rechtschreibfehler zu prüfen. In der Regel werden nicht editierbare Elemente nicht auf Rechtschreibfehler überprüft, selbst wenn das `spellcheck`-Attribut auf `true` gesetzt ist und der Browser die Rechtschreibprüfung unterstützt.

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

- Ein leerer String oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden soll.
- `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden soll.

Wenn dieses Attribut nicht gesetzt ist, ist der Standardwert elementtyp- und browserdefiniert. Dieser Standardwert kann auch _vererbt_ werden, was bedeutet, dass der Inhalt des Elements nur dann auf Rechtschreibfehler überprüft wird, wenn sein nächster Vorfahre einen _spellcheck_-Status von `true` hat.

## Sicherheits- und Datenschutzbedenken

Die Nutzung der Rechtschreibprüfung kann Auswirkungen auf die Sicherheit und den Datenschutz der Benutzer haben.
Die Spezifikation regelt nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann zur Überprüfung der Rechtschreibkorrektur an Dritte gesendet werden (siehe [erweiterte Rechtschreibprüfung und "spell-jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Sie sollten in Betracht ziehen, `spellcheck` auf `false` zu setzen für Elemente, die sensible Informationen enthalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect).
