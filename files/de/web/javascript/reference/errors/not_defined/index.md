---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "_variable_ is not defined" tritt auf, wenn auf eine nicht existierende Variable an einer Stelle verwiesen wird.

## Nachricht

```plain
ReferenceError: "x" is not defined (V8-based & Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlerart

{{jsxref("ReferenceError")}}.

## Was ist schiefgelaufen?

Es wird auf eine nicht existierende Variable verwiesen. Diese Variable muss deklariert werden oder Sie müssen sicherstellen, dass sie in Ihrem aktuellen Skript oder [Scope](/de/docs/Glossary/Scope) verfügbar ist.

> [!NOTE]
> Wenn Sie eine Bibliothek laden (wie jQuery), stellen Sie sicher, dass sie geladen wird, bevor Sie auf Bibliotheksvariablen wie "$" zugreifen. Platzieren Sie das {{HTMLElement("script")}}-Element, welches die Bibliothek lädt, vor Ihrem Code, der sie verwendet.

## Beispiele

### Variable nicht deklariert

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Die Variable "foo" ist nirgendwo definiert. Sie muss ein String sein, damit die Methode {{jsxref("String.prototype.substring()")}} funktioniert.

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### Falscher Scope

Eine Variable muss im aktuellen Ausführungskontext verfügbar sein. Variablen, die innerhalb einer [Function](/de/docs/Web/JavaScript/Reference/Functions) definiert sind, können von außerhalb der Funktion nicht zugegriffen werden, da die Variable nur im Scope der Funktion definiert ist.

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die im Scope definiert sind, in dem sie definiert ist. Mit anderen Worten, eine Funktion, die im globalen Scope definiert ist, kann auf alle im globalen Scope definierten Variablen zugreifen.

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## Siehe auch

- [Scope](/de/docs/Glossary/Scope)
- [Deklarieren von Variablen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables)
- [Funktions-Scope im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scope)
