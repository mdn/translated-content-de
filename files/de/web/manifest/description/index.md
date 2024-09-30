---
title: description
slug: Web/Manifest/description
l10n:
  sourceCommit: 54dbdfc6be6e1cb62b1c10e23356e895953fb196
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `description`-Element ist ein String, in dem Entwickler erklären können, was die Anwendung macht. `description` unterstützt die Richtungsfähigkeit, was bedeutet, dass es je nach den Werten der [`dir`](/de/docs/Web/Manifest) und [`lang`](/de/docs/Web/Manifest) Manifest-Eigenschaften von links nach rechts oder von rechts nach links angezeigt werden kann.

## Beispiele

Einfache `description` in einer von links nach rechts geschriebenen Sprache:

```json
"description": "Awesome application that will help you achieve your dreams."
```

`description` auf Arabisch, das von rechts nach links angezeigt wird:

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
