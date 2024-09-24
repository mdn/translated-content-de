---
title: "ReferenceError: „x“ ist nicht definiert"
slug: Web/JavaScript/Reference/Errors/Not_defined
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler „_variable_ ist nicht definiert“ tritt auf, wenn irgendwo auf eine nicht existierende Variable verwiesen wird.

## Meldung

```plain
ReferenceError: "x" is not defined (V8-based & Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}.

## Was ist schiefgelaufen?

Es wird auf eine nicht existierende Variable verwiesen. Diese Variable muss deklariert werden, oder Sie müssen sicherstellen, dass sie in Ihrem aktuellen Skript oder [Gültigkeitsbereich](/de/docs/Glossary/Scope) verfügbar ist.

> [!NOTE]
> Beim Laden einer Bibliothek (z. B. jQuery) stellen Sie sicher, dass sie geladen ist, bevor Sie auf Bibliotheksvariablen wie "$" zugreifen. Platzieren Sie das {{HTMLElement("script")}}-Element, das die Bibliothek lädt, vor Ihrem Code, der es verwendet.

## Beispiele

### Variable nicht deklariert

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Die "foo"-Variable ist nirgends definiert. Sie muss ein String sein, damit die {{jsxref("String.prototype.substring()")}}-Methode funktioniert.

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### Falscher Gültigkeitsbereich

Eine Variable muss im aktuellen Ausführungskontext verfügbar sein. Variablen, die innerhalb einer [Funktion](/de/docs/Web/JavaScript/Reference/Functions) definiert sind, können nicht von außerhalb der Funktion zugegriffen werden, da die Variable nur im Gültigkeitsbereich der Funktion definiert ist.

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die im Gültigkeitsbereich definiert sind, in dem sie definiert ist. Mit anderen Worten, eine im globalen Bereich definierte Funktion kann auf alle im globalen Bereich definierten Variablen zugreifen.

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## Siehe auch

- [Gültigkeitsbereich](/de/docs/Glossary/Scope)
- [Variablen deklarieren im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables)
- [Funktionsgültigkeitsbereich im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scope)
