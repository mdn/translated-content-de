---
title: 'ReferenceError: "x" ist nicht definiert'
slug: Web/JavaScript/Reference/Errors/Not_defined
l10n:
  sourceCommit: 8f10db5cabb50ee778f781f96adadc8cff98761a
---

{{jsSidebar("Errors")}}

Der JavaScript-Fehler "_variable_ ist nicht definiert" tritt auf, wenn irgendwo auf eine nicht vorhandene Variable verwiesen wird.

## Nachricht

```plain
ReferenceError: "x" is not defined (V8-based & Firefox)
ReferenceError: Can't find variable: x (Safari)
```

## Fehlertyp

{{jsxref("ReferenceError")}}.

## Was ist schiefgelaufen?

Es wird irgendwo auf eine nicht vorhandene Variable verwiesen. Diese Variable muss deklariert werden oder Sie müssen sicherstellen, dass sie in Ihrem aktuellen Skript oder {{Glossary("Scope", "Gültigkeitsbereich")}} verfügbar ist.

> [!NOTE]
> Wenn Sie eine Bibliothek laden (wie jQuery), stellen Sie sicher, dass sie geladen ist, bevor Sie auf Bibliotheksvariablen zugreifen, wie z.B. "$". Platzieren Sie das
> {{HTMLElement("script")}}-Element, das die Bibliothek lädt, vor Ihrem Code, der sie verwendet.

## Beispiele

### Variable nicht deklariert

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

Die "foo"-Variable ist nirgends definiert. Sie muss ein String sein, damit die
{{jsxref("String.prototype.substring()")}}-Methode funktioniert.

```js example-good
const foo = "bar";
foo.substring(1); // "ar"
```

### Falscher Gültigkeitsbereich

Eine Variable muss im aktuellen Ausführungskontext verfügbar sein. Variablen, die innerhalb einer [Funktion](/de/docs/Web/JavaScript/Reference/Functions) definiert sind, können von außerhalb dieser Funktion nicht zugegriffen werden, da die Variable nur im Gültigkeitsbereich der Funktion definiert ist.

```js example-bad
function numbers() {
  const num1 = 2;
  const num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

Jedoch kann eine Funktion auf alle Variablen und Funktionen zugreifen, die innerhalb des Gültigkeitsbereichs definiert sind, in dem sie selbst definiert ist. Mit anderen Worten, eine im globalen Gültigkeitsbereich definierte Funktion kann auf alle im globalen Gültigkeitsbereich definierten Variablen zugreifen.

```js example-good
const num1 = 2;
const num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(numbers()); // 5
```

## Siehe auch

- {{Glossary("Scope", "Gültigkeitsbereich")}}
- [Deklarieren von Variablen im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Grammar_and_types#declaring_variables)
- [Funktion-Gültigkeitsbereich im JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures)
