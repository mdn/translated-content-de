---
title: JavaScript Datentypen und Datenstrukturen
slug: Web/JavaScript/Data_structures
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{jsSidebar("Mehr")}}

Programmiersprachen besitzen alle eingebaute Datenstrukturen, jedoch unterscheiden sich diese oft von einer Sprache zur anderen. Dieser Artikel versucht, die eingebauten Datenstrukturen in JavaScript und deren Eigenschaften aufzulisten. Diese können verwendet werden, um weitere Datenstrukturen zu erstellen.

Die [Sprachübersicht](/de/docs/Web/JavaScript/Language_overview) bietet eine ähnliche Zusammenfassung der gängigen Datentypen, aber mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://en.wikipedia.org/wiki/Dynamic_programming_language) Sprache mit [dynamischen Typen](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). Variablen in JavaScript sind nicht direkt mit einem bestimmten Wertetyp verbunden, und jede Variable kann Werte aller Typen zugewiesen (und neu zugewiesen) bekommen:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript ist auch eine [schwach typisierte](https://en.wikipedia.org/wiki/Strong_and_weak_typing) Sprache, was bedeutet, dass implizite Typumwandlungen erlaubt sind, wenn eine Operation nicht übereinstimmende Typen beinhaltet, anstatt Typfehler auszulösen.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implizite Umwandlungen sind sehr praktisch, können jedoch subtile Fehler verursachen, wenn Umwandlungen dort stattfinden, wo sie nicht erwartet werden oder in die andere Richtung erwartet werden (zum Beispiel von String zu Zahl statt von Zahl zu String). Für [Symbole](#symbol-typ) und [BigInts](#bigint-typ) hat JavaScript bewusst bestimmte implizite Typumwandlungen verboten.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren {{Glossary("Immutable", "unveränderliche")}} Werte, die direkt auf der untersten Ebene der Sprache repräsentiert werden. Wir beziehen uns auf Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), können mit dem [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator getestet werden. `typeof null` gibt `"object"` zurück, daher muss `=== null` verwendet werden, um auf `null` zu testen.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), haben ihre entsprechenden Objekt-Wrapper-Typen, die nützliche Methoden zum Umgang mit den primitiven Werten bereitstellen. Beispielsweise bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft eines primitiven Wertes zugegriffen wird, umschließt JavaScript den Wert automatisch mit dem entsprechenden Wrapper-Objekt und greift stattdessen auf die Eigenschaft des Objekts zu. Allerdings wirft der Zugriff auf eine Eigenschaft von `null` oder `undefined` eine `TypeError`-Ausnahme, was die Einführung des [optionalen Verkettungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) erforderlich machte.

| Typ                         | `typeof` Rückgabewert | Objekt-Wrapper        |
| --------------------------- | --------------------- | --------------------- |
| [Null](#null-typ)           | `"object"`            | N/A                   |
| [Undefined](#undefined-typ) | `"undefined"`         | N/A                   |
| [Boolean](#boolean-typ)     | `"boolean"`           | {{jsxref("Boolean")}} |
| [Number](#number-typ)       | `"number"`            | {{jsxref("Number")}}  |
| [BigInt](#bigint-typ)       | `"bigint"`            | {{jsxref("BigInt")}}  |
| [String](#string-typ)       | `"string"`            | {{jsxref("String")}}  |
| [Symbol](#symbol-typ)       | `"symbol"`            | {{jsxref("Symbol")}}  |

Auf den Referenzseiten der Objekt-Wrapper-Klassen finden Sie weitere Informationen über die verfügbaren Methoden und Eigenschaften für jeden Typ sowie ausführliche Beschreibungen der Semantik der primitiven Typen selbst.

### Null-Typ

Der Null-Typ besteht genau aus einem Wert: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined-Typ

Der Undefined-Typ besteht genau aus einem Wert: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzeptionell weist `undefined` auf das Fehlen eines _Wertes_ hin, während `null` auf das Fehlen eines _Objekts_ hinweist (was auch eine Entschuldigung für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) darstellen könnte). Die Sprache setzt in der Regel auf `undefined`, wenn etwas keinen Wert hat:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt-](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie z.B. {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird in der Kernsprache viel seltener verwendet. Der wichtigste Ort ist das Ende der [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) — folglich akzeptieren oder geben Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}}, usw., `null` statt `undefined` zurück.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), aber `undefined` ist ein normaler [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der zufällig eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht neu definiert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}} Typ repräsentiert eine logische Entität und wird durch zwei Werte bewohnt: `true` und `false`.

Boolean-Werte werden normalerweise für konditionale Operationen verwendet, einschließlich [ternäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) usw.

### Number-Typ

Der {{jsxref("Number")}} Typ ist ein [double-präziser 64-Bit-Binärformat IEEE 754 Wert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Er ist in der Lage, positive Gleitkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Gleitkommazahlen der gleichen Größenordnung zu speichern. Allerdings kann er nur ganze Zahlen im Bereich -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) sicher speichern. Außerhalb dieses Bereichs kann JavaScript ganze Zahlen nicht mehr sicher darstellen; sie werden stattdessen durch eine doppelpräzise Gleitkommaannäherung dargestellt. Sie können überprüfen, ob eine Zahl im Bereich der sicheren Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch konvertiert:

- Positive Werte größer als {{jsxref("Number.MAX_VALUE")}} werden zu `+Infinity` konvertiert.
- Positive Werte kleiner als {{jsxref("Number.MIN_VALUE")}} werden zu `+0` konvertiert.
- Negative Werte kleiner als -{{jsxref("Number.MAX_VALUE")}} werden zu `-Infinity` konvertiert.
- Negative Werte größer als -{{jsxref("Number.MIN_VALUE")}} werden zu `-0` konvertiert.

`+Infinity` und `-Infinity` verhalten sich ähnlich wie die mathematische Unendlichkeit, aber mit einigen kleinen Unterschieden; siehe {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Number-Typ hat nur einen Wert mit mehreren Darstellungen: `0` wird sowohl als `-0` als auch `+0` dargestellt (wobei `0` ein Alias für `+0` ist). In der Praxis gibt es fast keinen Unterschied zwischen den verschiedenen Darstellungen; zum Beispiel ist `+0 === -0` `true`. Dies können Sie jedoch bemerken, wenn Sie durch Null teilen:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**ot **a** **N**umber") ist eine spezielle Art von Zahlenwert, die typischerweise auftritt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der nicht sich selbst gleich ist.

Obwohl eine Zahl konzeptionell ein "mathematischer Wert" ist und immer implizit als Gleitkommamuster kodiert ist, bietet JavaScript [bitweise Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators). Bei der Anwendung bitweiser Operatoren wird die Zahl zunächst in ein 32-Bit-Integer konvertiert.

> [!NOTE]
> Obwohl bitweise Operatoren _können_ verwendet werden, um mehrere Boolean-Werte innerhalb einer einzigen Zahl mit [Bitmaskierung](https://en.wikipedia.org/wiki/Mask_%28computing%29) darzustellen, wird dies normalerweise als schlechte Praxis angesehen. JavaScript bietet andere Mittel zur Darstellung einer Menge von Booleans (wie ein Boolean-Array oder ein Objekt mit Boolean-Werten, die benannten Eigenschaften zugewiesen sind). Bitmaskierung macht den Code auch schwieriger zu lesen, zu verstehen und zu warten.

Es kann notwendig sein, solche Techniken in sehr eingeschränkten Umgebungen zu verwenden, z. B. wenn man versucht, mit den Einschränkungen des lokalen Speichers zurechtzukommen, oder in extremen Fällen (wie wenn jedes Bit über das Netzwerk zählt). Diese Technik sollte nur in Betracht gezogen werden, wenn es die letzte Maßnahme ist, die zur Optimierung der Größe ergriffen werden kann.

### BigInt-Typ

Der {{jsxref("BigInt")}} Typ ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen mit beliebiger Größe darstellen kann. Mit BigInts können Sie große Ganzzahlen speichern und damit arbeiten, auch über das sichere Ganzzahllimit ({{jsxref("Number.MAX_SAFE_INTEGER")}}) für Zahlen hinaus.

Ein BigInt wird erstellt, indem ein `n` an das Ende einer Ganzzahl angehängt oder die Funktion [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) aufgerufen wird.

Dieses Beispiel zeigt, wo die Erhöhung des {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis liefert:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, einschließlich `+`, `*`, `-`, `**`, und `%` — der einzige verbotene ist [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu einer Zahl mit dem gleichen mathematischen Wert, aber [lose](/de/docs/Web/JavaScript/Reference/Operators/Equality) schon.

BigInt-Werte sind weder immer präziser noch immer ungenauer als Zahlen, da BigInts keine Bruchzahlen darstellen können, aber große Ganzzahlen genauer darstellen können. Weder der eine noch der andere Typ beinhaltet den anderen, und sie sind nicht austauschbar. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn BigInt-Werte in arithmetischen Ausdrücken mit regulären Zahlen gemischt werden oder wenn sie [implizit in den jeweils anderen konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden.

### String-Typ

Der {{jsxref("String")}} Typ repräsentiert Textdaten und wird als eine Folge von 16-Bit-Integerwerten kodiert, die [UTF-16-Codes](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen. Jedes Element in der Zeichenkette nimmt eine Position in der Zeichenkette ein. Das erste Element befindet sich an Index `0`, das nächste an Index `1` und so weiter. Die [Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) einer Zeichenkette ist die Anzahl der UTF-16-Codeeinheiten darin, die möglicherweise nicht der tatsächlichen Anzahl an Unicode-Zeichen entspricht; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Referenzseite für mehr Details.

JavaScript-Strings sind unveränderlich. Das bedeutet, dass es nicht möglich ist, eine Zeichenkette nach ihrer Erstellung zu ändern. String-Methoden erstellen neue Zeichenketten basierend auf dem Inhalt der aktuellen Zeichenkette — zum Beispiel:

- Ein Substring des Originals mit [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung von zwei Zeichenketten mit dem Verkettungsoperator (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Vorsicht bei der Verwendung von "stringly-typing" in Ihrem Code!

Es kann verlockend sein, Strings zu verwenden, um komplexe Daten darzustellen. Dies bringt kurzfristige Vorteile mit sich:

- Es ist leicht, komplexe Strings durch Verkettung zu erstellen.
- Strings sind leicht zu debuggen (was Sie sehen, ist immer, was im String steht).
- Strings sind der gemeinsame Nenner vieler APIs ([Eingabefelder](/de/docs/Web/API/HTMLInputElement), [Lokalspeicher](/de/docs/Web/API/Web_Storage_API) Werte, [`fetch()`](/de/docs/Web/API/Window/fetch) Antworten beim Verwenden von [`Response.text()`](/de/docs/Web/API/Response/text) usw.), und es kann verlockend sein, nur mit Strings zu arbeiten.

Mit Konventionen ist es möglich, jede Datenstruktur in einem String zu repräsentieren. Das macht es jedoch nicht zu einer guten Idee. Beispielsweise kann man mit einem Trennzeichen eine Liste emulieren (während ein JavaScript-Array geeigneter wäre). Leider, wenn das Trennzeichen in einem der "Listen"-Elemente verwendet wird, dann ist die Liste defekt. Ein Escape-Zeichen kann gewählt werden usw. All dies erfordert Konventionen und schafft eine unnötige Wartungsbelastung.

Verwenden Sie Strings für Textdaten. Beim Darstellen komplexer Daten _analysieren_ Sie Strings und verwenden Sie die entsprechende Abstraktion.

### Symbol-Typ

Ein {{jsxref("Symbol")}} ist ein **einzigartiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel einer Objekteigenschaft verwendet werden (siehe unten). In einigen Programmiersprachen werden Symbole als "Atome" bezeichnet. Der Zweck von Symbolen ist es, einzigartige Schlüsselnamen für Eigenschaften zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, der möglicherweise von einem {{Glossary("Identifier", "Bezeichner")}} referenziert wird. In JavaScript sind Objekte die einzigen {{Glossary("Mutable", "veränderbaren")}} Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind in der Tat auch Objekte mit der zusätzlichen Fähigkeit, _aufrufbar_ zu sein.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften betrachtet werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird eine begrenzte Menge von Eigenschaften initialisiert; anschließend können Eigenschaften hinzugefügt und entfernt werden. Objekteigenschaften sind äquivalent zu Key-Value-Paaren. Eigenschaftsschlüssel sind entweder [Strings](#string-typ) oder [Symbole](#symbol-typ). Wenn andere Typen (wie Zahlen) zum Indizieren von Objekten verwendet werden, werden die Werte implizit in Strings konvertiert. Eigenschaftswerte können Werte jedes Typs sein, einschließlich anderer Objekte, was das Erstellen komplexer Datenstrukturen ermöglicht.

Es gibt zwei Arten von Objekteigenschaften: Die [_Daten_-Eigenschaft](#daten-eigenschaft) und die [_Accessor_-Eigenschaft](#accessor-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedes Attribut wird intern von der JavaScript-Engine zugegriffen, aber Sie können sie durch {{jsxref("Object.defineProperty()")}} setzen oder durch {{jsxref("Object.getOwnPropertyDescriptor()")}} lesen. Sie können mehr über die verschiedenen Nuancen auf der Seite {{jsxref("Object.defineProperty()")}} lesen.

#### Daten-Eigenschaft

Daten-Eigenschaften assoziieren einen Schlüssel mit einem Wert. Sie kann durch folgende Attribute beschrieben werden:

- `value`
  - : Der Wert, der durch Zugriff auf die Eigenschaft abgerufen wird. Kann jeder JavaScript-Wert sein.
- `writable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft durch eine Zuweisung geändert werden kann.
- `enumerable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufzählbar ist. Siehe auch [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) dafür, wie die Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft gelöscht, in eine Accessor-Eigenschaft geändert und ihre Attribute geändert werden können.

#### Accessor-Eigenschaft

Assoziiert einen Schlüssel mit einer der beiden Accessor-Funktionen (`get` und `set`), um einen Wert abzurufen oder zu speichern.

> [!NOTE]
> Es ist wichtig anzuerkennen, dass es sich um Accessor-_Eigenschaft_ handelt — nicht um Accessor-_Methode_. Wir können einem JavaScript-Objekt klassenähnliche Accessoren geben, indem wir eine Funktion als Wert verwenden — aber das macht das Objekt nicht zu einer Klasse.

Eine Accessor-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste aufgerufen wird, um den Eigenschaftswert abzurufen, wenn ein Zugriff auf den Wert durchgeführt wird. Siehe auch [getter](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument aufgerufen wird, das den zugewiesenen Wert enthält. Wird jederzeit ausgeführt, wenn eine spezifizierte Eigenschaft zu ändern versucht wird. Siehe auch [setter](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufzählbar ist. Siehe auch [Enumerability and ownership of properties](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) dafür, wie die Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft gelöscht, in eine Daten-Eigenschaft geändert und ihre Attribute geändert werden können.

Das [Prototype](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) eines Objekts zeigt auf ein anderes Objekt oder auf `null` — es ist konzeptionell eine versteckte Eigenschaft des Objekts, die üblicherweise als `[[Prototype]]` dargestellt wird. Eigenschaften der `[[Prototype]]` eines Objekts können auch auf dem Objekt selbst zugegriffen werden.

Objekte sind Ad-hoc-Schlüssel-Wert-Paare, sodass sie oft als Karten verwendet werden. Es kann jedoch Ergonomie-, Sicherheits- und Leistungsprobleme geben. Verwenden Sie stattdessen eine {{jsxref("Map")}} zum Speichern beliebiger Daten. Der [`Map`-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion der Vor- und Nachteile zwischen einfachen Objekten und Maps zur Speicherung von Schlüssel-Wert-Zuordnungen.

### Daten

JavaScript bietet zwei Gruppen von APIs zum Darstellen von Daten: das ältere {{jsxref("Date")}} Objekt und das moderne {{jsxref("Temporal")}} Objekt. `Date` hat viele unerwünschte Entwurfsentscheidungen und sollte in neuen Code nach Möglichkeit vermieden werden.

### Indizierte Sammlungen: Arrays und typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, für die es eine spezielle Beziehung zwischen ganzzahligen Schlüssel-Eigenschaften und der `length` Eigenschaft gibt.

Zusätzlich erben Arrays von `Array.prototype`, das eine Vielzahl von bequemen Methoden bereitstellt, um Arrays zu manipulieren. Zum Beispiel sucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) nach einem Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) fügt ein Element zum Array hinzu. Dies macht Arrays zu einem perfekten Kandidaten, um geordnete Listen darzustellen.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) bieten eine Array-ähnliche Ansicht eines zugrunde liegenden Binärdatenpuffers und bieten viele Methoden, die ähnliche Semantik wie die Array-Gegenstücke haben. "Typisiertes Array" ist ein Sammelbegriff für eine Reihe von Datenstrukturen, einschließlich `Int8Array`, `Float32Array` usw. Sehen Sie sich die Seite [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) für mehr Informationen an. Typisierte Arrays werden oft in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Gesammelte: Karten, Sets, WeakMaps, WeakSets

Diese Datenstrukturen nehmen Objektverweise als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} stellen eine Sammlung einzigartiger Werte dar, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Zuordnungen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da jedoch Objekte nicht verglichen werden können (im Sinne von "<" "kleiner als", zum Beispiel), und die Engine ihre Hash-Funktion für Objekte nicht freigibt, wäre die Suchleistung notwendigerweise linear. Native Implementierungen von ihnen (einschließlich `WeakMap`s) können Suchleistungen haben, die ungefähr logarithmisch bis konstant sind.

Normalerweise könnte man Daten an einen DOM-Knoten binden, indem man Eigenschaften direkt am Objekt festlegt oder `data-*` Attribute verwendet. Dies hat den Nachteil, dass die Daten jedem Skript im selben Kontext zugänglich sind. `Map`s und `WeakMap`s machen es einfach, Daten _privat_ an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben nur garbage-sammelbare Werte als Schlüssel, die entweder Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel können gesammelt werden, selbst wenn sie in der Sammlung verbleiben. Sie werden speziell für [Speicherverbrauchsoptimierung](/de/docs/Web/JavaScript/Memory_management#data_structures_aiding_memory_management) verwendet.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) ist ein leichtgewichtiges Datenübertragungsformat, das von JavaScript abgeleitet, aber von vielen Programmiersprachen verwendet wird. JSON erstellt universelle Datenstrukturen, die zwischen verschiedenen Umgebungen und sogar über Sprachen hinweg übertragen werden können. Siehe {{jsxref("JSON")}} für mehr Details.

### Weitere Objekte in der Standardbibliothek

JavaScript verfügt über eine Standardbibliothek mit eingebauten Objekten. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects), um mehr über die eingebauten Objekte zu erfahren.

## Typumwandlung

Wie oben erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Das bedeutet, dass Sie oft einen Wert eines Typs verwenden können, wo ein anderer Typ erwartet wird, und die Sprache wird ihn für Sie in den richtigen Typ umwandeln. Dazu definiert JavaScript eine Handvoll Umwandlungsregeln.

### Primitive Umwandlung

Der [primitive Umwandlungsprozess](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird verwendet, wo ein primitiver Wert erwartet wird, aber es keine starke Präferenz für den tatsächlichen Typ gibt. Das ist normalerweise der Fall, wenn ein [String](#string-typ), eine [Nummer](#number-typ) oder ein [BigInt](#bigint-typ) gleichermaßen akzeptabel sind. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) Konstruktor, wenn er ein Argument erhält, das keine `Date` Instanz ist — Strings repräsentieren Datumsstrings, während Zahlen Zeitstempel darstellen.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator — wenn ein Operand ein String ist, wird String-Verkettung durchgeführt; andernfalls wird numerische Addition durchgeführt.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) Operator — wenn ein Operand ein primitiver Typ ist, während der andere ein Objekt ist, wird das Objekt ohne bevorzugten Typ in einen primitiven Wert umgewandelt.

Diese Operation führt keine Umwandlung durch, wenn der Wert bereits ein primitiver ist. Objekte werden zu primitivem umgewandelt, indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) mit `"default"` als Hinweis, `valueOf()`, und `toString()` Methoden in dieser Reihenfolge aufgerufen werden. Beachten Sie, dass die primitive Konvertierung `valueOf()` vor `toString()` aufruft, was dem Verhalten der [number coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ähnelt, sich jedoch von der [string coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) unterscheidet.

Die `[Symbol.toPrimitive]()` Methode, falls vorhanden, muss einen primitiven Wert zurückgeben — das Zurückgeben eines Objekts führt zu einem {{jsxref("TypeError")}}. Für `valueOf()` und `toString()`, wenn man ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der Rückgabewert des anderen verwendet; wenn keiner vorhanden ist oder keiner einen primitiven Wert zurückgibt, wird ein {{jsxref("TypeError")}} ausgelöst. Zum Beispiel im folgenden Code:

```js
console.log({} + []); // "[object Object]"
```

Weder `{}` noch `[]` haben eine `[Symbol.toPrimitive]()` Methode. Sowohl `{}` als auch `[]` erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, das das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird es ignoriert. Daher wird stattdessen `toString()` aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, sodass das Ergebnis deren Verkettung ist: `"[object Object]"`.

Die `[Symbol.toPrimitive]()` Methode hat immer Vorrang bei der Umwandlung in jeden primitiven Typ. Primitive Konvertierung verhält sich im Allgemeinen wie Nummernkonvertierung, weil `valueOf()` in Priorität aufgerufen wird; jedoch können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()` Methoden wählen, jeden primitiven Wert zurückzugeben. {{jsxref("Date")}} und {{jsxref("Symbol")}} Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()` Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt den `"default"`-Hinweis, als ob es `"string"` wäre, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Numerische Umwandlung

Es gibt zwei numerische Typen: [Number](#number-typ) und [BigInt](#bigint-typ). Manchmal erwartet die Sprache speziell eine Nummer oder ein BigInt (wie bei {{jsxref("Array.prototype.slice()")}}, wo der Index eine Nummer sein muss); andere Male kann sie entweder tolerieren und unterschiedliche Operationen je nach Typ des Operanden durchführen. Für strenge Umwandlungsprozesse, die keine implizierte Konvertierung vom anderen Typ zulassen, siehe [Nummernumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Numerische Umwandlung ist fast dasselbe wie [Nummernumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts, so wie sie sind, zurückgegeben werden, anstatt ein {{jsxref("TypeError")}} zu verursachen. Numerische Umwandlung wird von allen arithmetischen Operatoren verwendet, da sie sowohl für Zahlen als auch für BigInts überladen sind. Die einzige Ausnahme ist [unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), das immer eine Nummernumwandlung durchführt.

### Andere Umwandlungen

Alle Datentypen, außer Null, Undefined und Symbol, haben ihren jeweiligen Umwandlungsprozess. Siehe [string coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [boolean coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) und [object coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für mehr Details.

Wie Sie möglicherweise bemerkt haben, gibt es drei unterschiedliche Wege, durch die Objekte in Primitiven umgewandelt werden können:

- [Primitive Umwandlung](#primitive_umwandlung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Numerische Umwandlung](#numerische_umwandlung), [Nummernumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive]()`, falls vorhanden, aufrufbar sein und einen primitiven Wert zurückgeben, während `valueOf` oder `toString` ignoriert werden, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses, falls erfolgreich, ist das Ergebnis garantiert ein primitiver Wert. Der resultierende primitive Wert unterliegt dann je nach Kontext weiteren Umwandlungen.

## Siehe auch

- [JavaScript Data Structures and Algorithms](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Computer Science in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
