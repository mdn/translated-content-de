---
title: "SyntaxError: Die Anwendung des 'delete'-Operators auf einen nicht qualifizierten Namen ist veraltet"
slug: Web/JavaScript/Reference/Errors/Delete_in_strict_mode
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-[strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode)-spezifische Ausnahme „Die Anwendung des 'delete'-Operators auf einen nicht qualifizierten Namen ist veraltet" tritt auf, wenn versucht wird, Variablen mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator zu löschen.

## Nachricht

```plain
SyntaxError: Delete of an unqualified identifier in strict mode. (V8-based)
SyntaxError: applying the 'delete' operator to an unqualified name is deprecated (Firefox)
SyntaxError: Cannot delete unqualified property 'a' in strict mode. (Safari)
```

## Fehlertyp

{{jsxref("SyntaxError")}} nur im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode).

## Was ist schiefgelaufen?

Normale Variablen in JavaScript können nicht mit dem [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator gelöscht werden. Im strict mode führt ein Löschversuch einer Variablen zu einem Fehler und ist nicht erlaubt.

Der `delete`-Operator kann nur Eigenschaften eines Objekts löschen. Objekteigenschaften sind "qualifiziert", wenn sie konfigurierbar sind.

Im Gegensatz zur weit verbreiteten Meinung hat der `delete`-Operator **nichts** mit der direkten Speicherfreigabe zu tun. Das Speichermanagement erfolgt indirekt über das Aufheben von Referenzen, siehe die Seite über das [Speichermanagement](/de/docs/Web/JavaScript/Guide/Memory_management) und die Seite des [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operators für weitere Details.

Dieser Fehler tritt nur in [strict mode code](/de/docs/Web/JavaScript/Reference/Strict_mode) auf. In nicht-strengem Code gibt die Operation einfach `false` zurück.

## Beispiele

### Freigeben des Inhalts einer Variablen

Der Versuch, eine einfache Variable im strict mode zu löschen, führt zu einem Fehler:

```js-nolint example-bad
"use strict";

var x;

// …

delete x;

// SyntaxError: applying the 'delete' operator to an unqualified name
// is deprecated
```

Um den Inhalt einer Variablen freizugeben, kann man sie auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen:

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
- [TypeError: Eigenschaft „x“ ist nicht konfigurierbar und kann nicht gelöscht werden](/de/docs/Web/JavaScript/Reference/Errors/Cant_delete)
