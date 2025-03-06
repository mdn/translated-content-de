---
title: "SyntaxError: Das Anwenden des 'delete'-Operators auf einen unqualifizierten Namen ist veraltet"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Errors")}}

Die Ausnahme "Das Anwenden des 'delete'-Operators auf einen unqualifizierten Namen ist veraltet" im JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) tritt auf, wenn versucht wird, Variablen mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator zu löschen.

## Nachricht

```plain
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Normale Variablen in JavaScript können nicht mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator gelöscht werden. Im Strict-Modus wird beim Versuch, eine Variable zu löschen, ein Fehler ausgelöst und es ist nicht erlaubt.

Der `delete`-Operator kann nur Eigenschaften eines Objekts löschen. Objekteigenschaften sind "qualifiziert", wenn sie konfigurierbar sind.

Entgegen der weit verbreiteten Annahme hat der `delete`-Operator **nichts** mit dem direkten Freigeben von Speicher zu tun. Das Speichermanagement erfolgt indirekt durch das Aufheben von Referenzen, siehe die Seite zum [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management) und die Seite zum [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator für weitere Details.

Dieser Fehler tritt nur im [Strict-Mode-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In nicht-striktem Code gibt die Operation einfach `false` zurück.

## Beispiele

### Den Inhalt einer Variablen freigeben

Der Versuch, eine einfache Variable im Strict-Modus zu löschen, wirft einen Fehler:

```js-nolint example-bad
"use strict";

var x;

// …

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

Um den Inhalt einer Variable freizugeben, können Sie sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen:

```js example-good
"use strict";

var x;

// …

x = null;

// x can be garbage collected
```

## Siehe auch

- [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)
- [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management)
- [TypeError: property "x" is non-configurable and can't be deleted](/de/docs/Web/JavaScript/Reference/Errors/Cant_delete)
