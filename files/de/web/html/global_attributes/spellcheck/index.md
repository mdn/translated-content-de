---
title: spellcheck
slug: Web/HTML/Global_attributes/spellcheck
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{HTMLSidebar("Global_attributes")}}

Das **`spellcheck`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein [aufgezähltes](/de/docs/Glossary/Enumerated) Attribut, das definiert, ob das Element auf Rechtschreibfehler überprüft werden darf.

> [!NOTE]
> Dieses Attribut ist lediglich ein Hinweis für den Browser: Browser sind nicht verpflichtet, auf Rechtschreibfehler zu prüfen. Typischerweise werden nicht-editierbare Elemente nicht auf Rechtschreibfehler überprüft, selbst wenn das `spellcheck`-Attribut auf `true` gesetzt ist und der Browser die Rechtschreibprüfung unterstützt.

{{EmbedInteractiveExample("pages/tabbed/attribute-spellcheck.html","tabbed-shorter")}}

Es kann die folgenden Werte haben:

- leerer String oder `true`, was angibt, dass das Element, wenn möglich, auf Rechtschreibfehler überprüft werden sollte;
- `false`, was angibt, dass das Element nicht auf Rechtschreibfehler überprüft werden sollte.

Wenn dieses Attribut nicht gesetzt ist, ist sein Standardwert vom Elementtyp und Browser definiert. Dieser Standardwert kann auch _vererbt_ werden, was bedeutet, dass der Inhalt des Elements nur dann auf Rechtschreibfehler überprüft wird, wenn der nächste Vorfahre einen _spellcheck_-Status von `true` hat.

## Sicherheits- und Datenschutzbedenken

Die Verwendung der Rechtschreibprüfung kann Folgen für die Sicherheit und Privatsphäre der Benutzer haben. Die Spezifikation regelt nicht, _wie_ die Rechtschreibprüfung durchgeführt wird, und der Inhalt des Elements kann an Dritte zur Überprüfung der Rechtschreibung gesendet werden (siehe [erweiterte Rechtschreibprüfung und "spell-jacking"](https://www.comparitech.com/blog/information-security/what-is-spell-jacking/)).

Sie sollten in Betracht ziehen, `spellcheck` für Elemente, die sensible Informationen enthalten können, auf `false` zu setzen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
