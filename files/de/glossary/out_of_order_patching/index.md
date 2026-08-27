---
title: Out-of-Order-Patching
slug: Glossary/out_of_order_patching
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

Out-of-Order-Patching bezieht sich auf die Bereitstellung von HTML-Inhalten in einer anderen Reihenfolge als dem sequentiellen, von oben nach unten verlaufenden Fluss eines einzelnen Dokuments.

Dies verbessert die wahrgenommene Leistung, indem der anfängliche Inhalt nicht zurückgehalten wird, während auf langsamere Komponenten gewartet wird, die möglicherweise Zeit zum Generieren oder Senden benötigen. Dies ist typisch für die dynamische Inhaltsgenerierung, die eine zusätzliche Verarbeitung erfordert, wie durch das [Island-Architektur-Muster](https://jasonformat.com/islands-architecture/) bekannt gemacht wurde.

Traditionell erforderte das Out-of-Order-Patching, Inhalte vollständig aus dem anfänglichen HTML-Dokument zu entfernen und sie über JavaScript dem DOM hinzuzufügen. [`<template for>` Out-of-Order-Patching](/de/docs/Web/HTML/Reference/Elements/template#out-of-order_patching) ermöglicht dies ohne JavaScript im anfänglichen HTML, indem es Platzhalter verwendet, die mit später in das HTML gestreamten `<template for>`-Elementen aktualisiert werden.

## Siehe auch

- [`<template for>` Out-of-Order-Patching](/de/docs/Web/HTML/Reference/Elements/template#out-of-order_patching)
