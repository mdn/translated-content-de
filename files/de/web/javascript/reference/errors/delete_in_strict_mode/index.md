---
title: "SyntaxError: Die Anwendung des 'delete'-Operators auf einen nicht qualifizierten Namen ist veraltet"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-[strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-only Ausnahme "Die Anwendung des 'delete'-Operators auf einen nicht qualifizierten Namen ist veraltet" tritt auf, wenn versucht wird, Variablen mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator zu löschen.

## Meldung

```plain
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## Fehlerart

{{jsxref("SyntaxError")}} nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Normale Variablen in JavaScript können nicht mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator gelöscht werden. Im strict mode wird ein Versuch, eine Variable zu löschen, einen Fehler auslösen und ist nicht erlaubt.

Der `delete`-Operator kann nur Eigenschaften eines Objekts löschen. Objekteigenschaften sind „qualifiziert“, wenn sie konfigurierbar sind.

Im Gegensatz zu dem, was häufig angenommen wird, hat der `delete`-Operator **nichts** mit dem direkten Freigeben von Speicher zu tun. Speicherverwaltung erfolgt indirekt über die Aufhebung von Referenzen, siehe die Seite zur [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management) und die Seite zum [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator für weitere Details.

Dieser Fehler tritt nur im [strict mode code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In nicht-striktem Code gibt die Operation einfach `false` zurück.

## Beispiele

### Den Inhalt einer Variablen freigeben

Der Versuch, eine einfache Variable im strict mode zu löschen, führt zu einem Fehler:

```js-nolint example-bad
"use strict";

var x;

// …

delete x;

// SyntaxError: Die Anwendung des 'delete'-Operators auf
// einen nicht qualifizierten Namen ist veraltet
```

Um den Inhalt einer Variablen freizugeben, können Sie sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen:

```js example-good
"use strict";

var x;

// …

x = null;

// x kann vom Garbage Collector bereinigt werden
```

## Siehe auch

- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
- [TypeError: property "x" is non-configurable and can't be deleted](/de/docs/Web/JavaScript/Reference/Errors/Cant_delete)
