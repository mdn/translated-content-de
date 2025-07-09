---
title: HTML `spellcheck` globales Attribut
short-title: spellcheck
slug: Web/HTML/Reference/Global_attributes/spellcheck
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`spellcheck`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden kann.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, eine Rechtschreibprüfung durchzuführen. Typischerweise werden nicht editierbare Elemente nicht auf Rechtschreibfehler überprüft, selbst wenn das `spellcheck`-Attribut auf `true` gesetzt ist und der Browser die Rechtschreibprüfung unterstützt.

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

- Leerer String oder `true`, was anzeigt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
- `false`, was anzeigt, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert vom Elementtyp und Browser definiert. Dieser Standardwert kann auch _geerbt_ werden, was bedeutet, dass der Inhalt des Elements nur dann auf Rechtschreibfehler überprüft wird, wenn sein nächster Vorfahre einen _spellcheck_-Zustand von `true` hat.

## Sicherheits- und Datenschutzbedenken

Die Verwendung der Rechtschreibprüfung kann Auswirkungen auf die Sicherheit und den Datenschutz der Benutzer haben.
Die Spezifikation regelt nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann zur Rechtschreibprüfung an eine dritte Partei gesendet werden (siehe [erweiterte Rechtschreibprüfung und "spell-jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Überlegen Sie, `spellcheck` auf `false` zu setzen für Elemente, die sensible Informationen enthalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect).
