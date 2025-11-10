---
title: 'ReferenceError: "x" ist nicht definiert'
slug: Web/JavaScript/Reference/Errors/Not_defined
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "_variable_ is not defined" tritt auf, wenn irgendwo auf eine nicht existierende Variable verwiesen wird.

## Nachricht

```plain
ReferenceError: "x" is not defined (V8-based & Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}.

## Was ist schiefgelaufen?

Es wird auf eine nicht existierende Variable verwiesen. Diese Variable muss deklariert werden, oder Sie müssen sicherstellen, dass sie in Ihrem aktuellen Skript oder {{Glossary("Scope", "Scope")}} verfügbar ist.

> [!NOTE]
> Wenn Sie eine Bibliothek laden (wie jQuery), stellen Sie sicher, dass sie geladen ist, bevor Sie auf Bibliotheksvariablen wie "$" zugreifen. Platzieren Sie das {{HTMLElement("script")}}-Element, das die Bibliothek lädt, vor Ihrem Code, der sie verwendet.

## Beispiele

### Variable nicht deklariert

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Die Variable "foo" ist nirgendwo definiert. Sie muss ein String sein, damit die {{jsxref("String.prototype.substring()")}}-Methode funktioniert.

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### Falscher Scope

Eine Variable muss im aktuellen Ausführungskontext verfügbar sein. Variablen, die innerhalb einer [Funktion](/de/docs/Web/JavaScript/Reference/Functions) definiert sind, können von keinem Ort außerhalb der Funktion aus zugegriffen werden, da die Variable nur im Scope der Funktion definiert ist.

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Eine Funktion kann jedoch auf alle Variablen und Funktionen zugreifen, die im Scope definiert sind, in dem sie sich befindet. Mit anderen Worten, eine im globalen Scope definierte Funktion kann auf alle im globalen Scope definierten Variablen zugreifen.

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## Siehe auch

- {{Glossary("Scope", "Scope")}}
- [Deklarieren von Variablen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables)
- [Funktionsscope im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures)
