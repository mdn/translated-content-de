---
title: "SyntaxError: Die Anwendung des 'delete'-Operators auf einen unqualifizierten Namen ist veraltet"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
l10n:
  sourceCommit: d71b141d2d18b96639547856714df19cefacfebf
---

{{jsSidebar("Errors")}}

Die JavaScript-[Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode)-ausgelöste Ausnahme "Die Anwendung des 'delete'-Operators auf einen unqualifizierten Namen ist veraltet" tritt auf, wenn versucht wird, Variablen mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator zu löschen.

## Nachricht

```plain
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Normale Variablen in JavaScript können mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator nicht gelöscht werden. Im Strict-Modus führt der Versuch, eine Variable zu löschen, zu einem Fehler und ist nicht erlaubt.

Der `delete`-Operator kann nur Eigenschaften eines Objekts löschen. Objekteigenschaften sind "qualifiziert", wenn sie konfigurierbar sind.

Entgegen der weit verbreiteten Annahme hat der `delete`-Operator **nichts** direkt mit der Freigabe von Speicher zu tun. Die Speicherverwaltung erfolgt indirekt durch das Entfernen von Referenzen, siehe die Seite zur [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management) und die Seite zum [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator für weitere Details.

Dieser Fehler tritt nur im [Strict-Modus-Code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In nicht-striktem Code gibt die Operation einfach `false` zurück.

## Beispiele

### Den Inhalt einer Variable freigeben

Der Versuch, eine einfache Variable im Strict-Modus zu löschen, führt zu einem Fehler:

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
- [Speicherverwaltung](/de/docs/Web/JavaScript/Memory_management)
- [TypeError: property "x" is non-configurable and can't be deleted](/de/docs/Web/JavaScript/Reference/Errors/Cant_delete)
