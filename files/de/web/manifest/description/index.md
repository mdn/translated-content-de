---
title: Beschreibung
slug: Web/Manifest/description
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `description`-Mitglied ist eine Zeichenfolge, in der Entwickler erklären können, was die Anwendung tut. `description` ist richtungsfähig, was bedeutet, dass sie basierend auf den Werten der [`dir`](/de/docs/Web/Manifest) und [`lang`](/de/docs/Web/Manifest)-Manifestmitglieder von links nach rechts oder von rechts nach links angezeigt werden kann.

## Beispiele

Einfache `description` in links-nach-rechts Sprache:

```json
"description": "Awesome application that will help you achieve your dreams."
```

`description` in Arabisch, die von rechts nach links angezeigt wird:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
