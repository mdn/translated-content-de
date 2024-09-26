---
title: nicht definiert
slug: Web/JavaScript/Reference/Global_Objects/undefined
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{jsSidebar("Objects")}}

Die **`undefined`** globale Eigenschaft repräsentiert den primitiven Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type). Es ist einer der JavaScript {{Glossary("Primitive", "primitiven Typen")}}.

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Wert

Der primitive Wert [`undefined`](/de/docs/Web/JavaScript/Data_structures#undefined_type).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

`undefined` ist eine Eigenschaft des _globalen Objekts_. Das heißt, es ist eine Variable im globalen Bereich.

In allen nicht veralteten Browsern ist `undefined` eine nicht konfigurierbare, nicht beschreibbare Eigenschaft. Auch wenn dies nicht der Fall ist, vermeiden Sie es, sie zu überschreiben.

Eine Variable, der kein Wert zugewiesen wurde, ist vom Typ `undefined`. Eine
Methode oder Anweisung gibt auch `undefined` zurück, wenn die Variable, die
ausgewertet wird, keinen zugewiesenen Wert hat. Eine Funktion gibt `undefined`
zurück, wenn kein Wert {{jsxref("Statements/return", "zurückgegeben")}} wurde.

> [!NOTE]
> Obwohl Sie `undefined` als {{Glossary("identifier", "Bezeichner")}} (Variablenname) in jedem Bereich außer dem globalen Bereich verwenden können (da `undefined` kein [reserviertes Wort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) ist), ist dies eine sehr schlechte Idee, die es schwierig macht, Ihren Code zu warten und zu debuggen.
>
> ```js example-bad
> // TUN SIE DAS NICHT
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined); // foo string
> })();
>
> ((undefined) => {
>   console.log(undefined, typeof undefined); // foo string
> })("foo");
> ```

## Beispiele

### Strikte Gleichheit und undefined

Sie können `undefined` und die strikten Gleichheits- und Ungleichheitsoperatoren verwenden, um festzustellen, ob eine Variable einen Wert hat. Im folgenden Code ist die Variable `x` nicht initialisiert, und die `if`-Anweisung wird als wahr ausgewertet.

```js
let x;
if (x === undefined) {
  // diese Anweisungen werden ausgeführt
} else {
  // diese Anweisungen werden nicht ausgeführt
}
```

> [!NOTE]
> Hier muss der _strikte Gleichheitsoperator_ (im Gegensatz zum _normalen Gleichheitsoperator_) verwendet werden, da `x == undefined` auch überprüft, ob `x` `null` ist, während strikte Gleichheit dies nicht tut. Dies liegt daran, dass `null` nicht gleich `undefined` ist.
>
> Siehe [Gleichheitsvergleiche und Gleichheit](/de/docs/Web/JavaScript/Equality_comparisons_and_sameness) für Details.

### typeof-Operator und undefined

Alternativ kann {{jsxref("Operators/typeof", "typeof")}} verwendet werden:

```js
let x;
if (typeof x === "undefined") {
  // diese Anweisungen werden ausgeführt
}
```

Ein Grund, {{jsxref("Operators/typeof", "typeof")}} zu verwenden, ist, dass es keinen Fehler auslöst, wenn die Variable nicht deklariert wurde.

```js
// x wurde vorher nicht deklariert
// wird ohne Fehler als wahr ausgewertet
if (typeof x === "undefined") {
  // diese Anweisungen werden ausgeführt
}

// Löst einen ReferenceError aus
if (x === undefined) {
}
```

Es gibt jedoch eine andere Alternative. JavaScript ist eine statisch gescoped Sprache, sodass man weiß, ob eine Variable deklariert ist, indem man sieht, ob sie in einem umgebenden Kontext deklariert ist.

Der globale Bereich ist an das {{jsxref("globalThis", "globale Objekt", "", 1)}} gebunden, sodass das Vorhandensein einer Variablen im globalen Kontext überprüft werden kann, indem das Vorhandensein einer Eigenschaft am _globalen Objekt_ überprüft wird, zum Beispiel mit dem {{jsxref("Operators/in", "in")}}-Operator:

```js
if ("x" in window) {
  // Diese Anweisungen werden nur ausgeführt, wenn x global definiert ist
}
```

### void-Operator und undefined

Der {{jsxref("Operators/void", "void")}}-Operator ist eine dritte Alternative.

```js
let x;
if (x === void 0) {
  // diese Anweisungen werden ausgeführt
}

// y wurde vorher nicht deklariert
if (y === void 0) {
  // löst Uncaught ReferenceError aus: y ist nicht definiert
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)