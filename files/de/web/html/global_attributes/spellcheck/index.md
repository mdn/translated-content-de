---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
l10n:
  sourceCommit: 7877e93317ff8ec7ec660eddcb4b77ae996afaa1
---

{{HTMLSidebar("Global_attributes")}}

Das **`spellcheck`**-[globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, auf Rechtschreibfehler zu prüfen. Normalerweise werden nicht bearbeitbare Elemente nicht auf Rechtschreibfehler überprüft, selbst wenn das Attribut `spellcheck` auf `true` gesetzt ist und der Browser Rechtschreibprüfungen unterstützt.

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

Es kann folgende Werte haben:

- ein leerer String oder `true`, was darauf hinweist, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
- `false`, was darauf hinweist, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

Wenn dieses Attribut nicht gesetzt ist, ist der Standardwert typ- und browserdefiniert. Dieser Standardwert kann auch _vererbt_ sein, was bedeutet, dass der Inhalt des Elements nur auf Rechtschreibfehler überprüft wird, wenn sein nächster Vorfahre einen _spellcheck_-Status von `true` aufweist.

## Sicherheits- und Datenschutzbedenken

Die Verwendung der Rechtschreibprüfung kann Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben.
Die Spezifikation regelt nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann für die Ergebnisse der Rechtschreibprüfung an eine Drittpartei gesendet werden (siehe [erweiterte Rechtschreibprüfung und "Spell-Jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Sie sollten in Betracht ziehen, `spellcheck` auf `false` zu setzen, wenn Elemente sensible Informationen enthalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect).
