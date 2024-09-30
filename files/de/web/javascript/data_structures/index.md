---
title: JavaScript-Datentypen und Datenstrukturen
slug: Web/JavaScript/Data_structures
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("More")}}

Programmiersprachen verfügen alle über eingebaute Datenstrukturen, die jedoch oft von einer Sprache zur anderen unterschiedlich sind. Dieser Artikel versucht, die eingebauten Datenstrukturen aufzulisten, die in JavaScript verfügbar sind und welche Eigenschaften sie haben. Diese können verwendet werden, um andere Datenstrukturen zu erstellen.

Der [Sprachüberblick](/de/docs/Web/JavaScript/Language_overview) bietet eine ähnliche Zusammenfassung der allgemeinen Datentypen, jedoch mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://en.wikipedia.org/wiki/Dynamic_programming_language) Sprache mit [dynamischen Typen](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). Variablen in JavaScript sind nicht direkt mit einem bestimmten Wertetyp verbunden, und jede Variable kann Werte aller Typen zugewiesen (und neu zugewiesen) bekommen:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript ist auch eine [schwach typisierte](https://en.wikipedia.org/wiki/Strong_and_weak_typing) Sprache, was bedeutet, dass es implizite Typkonvertierungen zulässt, wenn eine Operation nicht übereinstimmende Typen beinhaltet, anstatt Typfehler zu werfen.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implizite Umwandlungen sind sehr praktisch, können jedoch subtile Fehler erzeugen, wenn Umwandlungen dort stattfinden, wo sie nicht erwartet werden, oder wo sie in die andere Richtung erwartet werden (zum Beispiel von String zu Zahl anstatt von Zahl zu String). Für [Symbole](#symbol-typ) und [BigInts](#bigint-typ) hat JavaScript bestimmte implizite Typkonvertierungen absichtlich untersagt.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren [unveränderliche](/de/docs/Glossary/Immutable) Werte, die direkt auf der niedrigsten Ebene der Sprache dargestellt werden. Wir bezeichnen Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können mit dem [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator getestet werden. `typeof null` gibt `"object"` zurück, daher muss man `=== null` verwenden, um auf `null` zu testen.

Alle primitiven Typen außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) haben ihre entsprechenden Objekt-Wrapper-Typen, die nützliche Methoden zur Arbeit mit den primitiven Werten bieten. Zum Beispiel bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft eines primitiven Werts zugegriffen wird, umwickelt JavaScript den Wert automatisch mit dem entsprechenden Wrapper-Objekt und greift stattdessen auf die Eigenschaft des Objekts zu. Allerdings wirft der Zugriff auf eine Eigenschaft von `null` oder `undefined` eine `TypeError`-Ausnahme, was die Einführung des [Optional Chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining)-Operators nötig machte.

| Typ                          | `typeof` Rückgabewert | Objekt-Wrapper         |
| ---------------------------- | --------------------- | ---------------------- |
| [Null](#null-typ)           | `"object"`            | N/A                    |
| [Undefined](#undefined-typ) | `"undefined"`         | N/A                    |
| [Boolean](#boolean-typ)     | `"boolean"`           | {{jsxref("Boolean")}}  |
| [Number](#number-typ)       | `"number"`            | {{jsxref("Number")}}   |
| [BigInt](#bigint-typ)       | `"bigint"`            | {{jsxref("BigInt")}}   |
| [String](#string-typ)       | `"string"`            | {{jsxref("String")}}   |
| [Symbol](#symbol-typ)       | `"symbol"`            | {{jsxref("Symbol")}}   |

Die Referenzseiten der Objekt-Wrapper-Klassen enthalten mehr Informationen über die Methoden und Eigenschaften, die für jeden Typ verfügbar sind, sowie detaillierte Beschreibungen der Semantik der primitiven Typen selbst.

### Null-Typ

Der Null-Typ wird genau durch einen Wert bewohnt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined-Typ

Der Undefined-Typ wird genau durch einen Wert bewohnt: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzepionell zeigt `undefined` das Fehlen eines _Wertes_ an, während `null` das Fehlen eines _Objekts_ anzeigt (was auch als Ausrede für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) verwendet werden könnte). Die Sprache verwendet in der Regel `undefined`, wenn etwas keinen Wert hat:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie z.B. {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird viel seltener in der Kernsprache verwendet. Der wichtigste Ort ist das Ende der [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) — in der Folge akzeptieren oder geben Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}}, etc., `null` anstelle von `undefined` zurück.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), aber `undefined` ist ein normales [Kennzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), das zufälligerweise eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht neu definiert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}}-Typ repräsentiert eine logische Entität und wird durch zwei Werte bewohnt: `true` und `false`.

Boolean-Werte werden in der Regel für bedingte Operationen verwendet, einschließlich [ternäre Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

### Number-Typ

Der {{jsxref("Number")}}-Typ ist ein [double-precision 64-bit binary format IEEE 754-Wert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Er ist in der Lage, positive Fließkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Fließkommazahlen derselben Größenordnung zu speichern, kann aber nur ganze Zahlen im Bereich von -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) sicher speichern. Außerhalb dieses Bereichs kann JavaScript ganze Zahlen nicht mehr sicher darstellen; sie werden stattdessen durch eine Doppelpräzisions-Fließkommadarstellung approximiert. Sie können überprüfen, ob eine Zahl innerhalb des Bereichs sicherer Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch umgewandelt:

- Positive Werte größer als {{jsxref("Number.MAX_VALUE")}} werden in `+Infinity` umgewandelt.
- Positive Werte kleiner als {{jsxref("Number.MIN_VALUE")}} werden in `+0` umgewandelt.
- Negative Werte kleiner als -{{jsxref("Number.MAX_VALUE")}} werden in `-Infinity` umgewandelt.
- Negative Werte größer als -{{jsxref("Number.MIN_VALUE")}} werden in `-0` umgewandelt.

`+Infinity` und `-Infinity` verhalten sich ähnlich wie die mathematische Unendlichkeit, jedoch mit einigen leichten Unterschieden; siehe {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Number-Typ hat nur einen Wert mit mehreren Darstellungen: `0` wird sowohl als `-0` als auch als `+0` dargestellt (wobei `0` ein Alias für `+0` ist). In der Praxis gibt es fast keinen Unterschied zwischen den verschiedenen Darstellungen; zum Beispiel ist `+0 === -0` `true`. Sie können dies jedoch bemerken, wenn Sie durch null teilen:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**ot **a** **N**umber") ist eine spezielle Art von Zahlenwert, die typischerweise auftritt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der nicht gleich sich selbst ist.

Obwohl eine Zahl konzeptuell ein "mathematischer Wert" ist und immer implizit fließkomma-kodiert ist, bietet JavaScript [bitweise Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitweise_Operators). Bei der Anwendung von bitweisen Operatoren wird die Zahl zuerst in eine 32-Bit-Ganzzahl umgewandelt.

> [!NOTE]
> Obwohl bitweise Operatoren _können_ verwendet werden, um mehrere boolesche Werte innerhalb einer einzigen Zahl mit [bit masking](https://en.wikipedia.org/wiki/Mask_%28computing%29) zu repräsentieren, wird dies in der Regel als schlechte Praxis angesehen. JavaScript bietet andere Mittel, um eine Menge von Booleschen Werten darzustellen (wie ein Array von Booleschen Werten oder ein Objekt mit Booleschen Werten, die benannten Eigenschaften zugewiesen sind). Bitmaskierung neigt auch dazu, den Code schwieriger zu lesen, zu verstehen und zu warten.

Es kann notwendig sein, solche Techniken in sehr eingeschränkten Umgebungen zu verwenden, wie z.B. beim Versuch, mit den Einschränkungen des lokalen Speichers umzugehen, oder in extremen Fällen (wie wenn jedes Bit über das Netzwerk zählt). Diese Technik sollte nur in Betracht gezogen werden, wenn sie die letzte Maßnahme ist, die zur Optimierung der Größe ergriffen werden kann.

### BigInt-Typ

Der {{jsxref("BigInt")}}-Typ ist ein numerisches primitves in JavaScript, das ganze Zahlen mit beliebiger Größe darstellen kann. Mit BigInts können Sie große Ganzzahlen sicher speichern und mit ihnen arbeiten, selbst über das sichere Ganzzahllimit ({{jsxref("Number.MAX_SAFE_INTEGER")}}) hinaus, das für Zahlen gilt.

Ein BigInt wird erstellt, indem `n` an das Ende einer Ganzzahl angehängt oder die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion aufgerufen wird.

Dieses Beispiel zeigt, wo das Erhöhen von {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis zurückgibt:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, einschließlich `+`, `*`, `-`, `**` und `%` — der einzige verbotene ist [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [strikt gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) einer Zahl mit demselben mathematischen Wert, aber es ist [locker](/de/docs/Web/JavaScript/Reference/Operators/Equality) so.

BigInt-Werte sind weder immer genauer noch immer ungenauer als Zahlen, da BigInts keine gebrochenen Zahlen darstellen können, große Ganzzahlen jedoch genauer darstellen können. Keiner der beiden Typen umfasst den anderen, und sie sind nicht untereinander austauschbar. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn BigInt-Werte in arithmetischen Ausdrücken mit regulären Zahlen gemischt oder wenn sie [implizit in die anderen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden.

### String-Typ

Der {{jsxref("String")}}-Typ repräsentiert Textdaten und wird als eine Sequenz von 16-Bit-Unsigned-Integer-Werten kodiert, die [UTF-16 Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen. Jedes Element in der Zeichenkette belegt eine Position in der Zeichenkette. Das erste Element befindet sich an Index `0`, das nächste an Index `1` und so weiter. Die [Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) einer Zeichenkette ist die Anzahl der UTF-16-Code-Einheiten in ihr, die möglicherweise nicht der tatsächlichen Anzahl von Unicode-Zeichen entspricht; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Referenzseite für weitere Details.

JavaScript-Zeichenketten sind unveränderlich. Dies bedeutet, dass einmal eine Zeichenkette erstellt wurde, sie nicht mehr geändert werden kann. Zeichenkettenmethoden erzeugen neue Zeichenketten basierend auf dem Inhalt der aktuellen Zeichenkette — zum Beispiel:

- Ein Teilstring des Originals mit Hilfe von [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung von zwei Zeichenketten mit Hilfe des Verkettungsoperators (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Vorsicht vor "stringly-typing" Ihrem Code!

Es kann verlockend sein, Zeichenketten zu verwenden, um komplexe Daten darzustellen. Dies bringt kurzfristige Vorteile:

- Es ist einfach, komplexe Zeichenketten mit Verkettung zu erstellen.
- Zeichenketten sind leicht zu debuggen (was Sie sehen, wenn Sie es ausdrucken, ist immer das, was in der Zeichenkette ist).
- Zeichenketten sind das gemeinsame Element einer Vielzahl von APIs ([Eingabefelder](/de/docs/Web/API/HTMLInputElement), [lokaler Speicher](/de/docs/Web/API/Web_Storage_API)-Werte, [`fetch()`](/de/docs/Web/API/Window/fetch)-Antworten bei Verwendung von [`Response.text()`](/de/docs/Web/API/Response/text) usw.), und es kann verlockend sein, nur mit Zeichenketten zu arbeiten.

Mit Konventionen ist es möglich, jede Datenstruktur in einer Zeichenkette darzustellen. Dies macht es jedoch nicht zu einer guten Idee. Beispielsweise könnte man mit einem Trennzeichen eine Liste emulieren (während ein JavaScript-Array besser geeignet wäre). Leider, wenn der Trennzeichen in einem der "Listen"-Elemente verwendet wird, dann ist die Liste beschädigt. Ein Escape-Zeichen kann gewählt werden usw. All dies erfordert Konventionen und schafft eine unnötige Wartungslast.

Verwenden Sie Zeichenketten für Textdaten. Wenn Sie komplexe Daten darstellen, _parsen_ Sie Zeichenketten und verwenden Sie die geeignete Abstraktion.

### Symbol-Typ

Ein {{jsxref("Symbol")}} ist ein **einzigartiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel eines Objekteigenschafts (siehe unten) verwendet werden. In einigen Programmiersprachen werden Symbole als "Atome" bezeichnet. Der Zweck der Symbole ist es, eindeutige Eigenschaftsschlüssel zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, der möglicherweise durch einen [Bezeichner](/de/docs/Glossary/Identifier) referenziert wird. In JavaScript sind Objekte die einzigen [veränderlichen](/de/docs/Glossary/Mutable) Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind, in der Tat, ebenfalls Objekte mit der zusätzlichen Fähigkeit, _aufrufbar_ zu sein.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften angesehen werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird eine begrenzte Anzahl von Eigenschaften initialisiert; dann können Eigenschaften hinzugefügt und entfernt werden. Objekteigenschaften sind gleichbedeutend mit Schlüssel-Wert-Paaren. Eigenschaftsschlüssel sind entweder [Zeichenketten](#string-typ) oder [Symbole](#symbol-typ). Wenn andere Typen (wie Zahlen) verwendet werden, um Objekte zu indexieren, werden die Werte implizit in Zeichenketten umgewandelt. Eigenschaftenwerte können Werte beliebigen Typs sein, einschließlich anderer Objekte, was es ermöglicht, komplexe Datenstrukturen zu erstellen.

Es gibt zwei Arten von Objekteigenschaften: Die [_Daten_-Eigenschaft](#daten-eigenschaft) und die [_Zugriffs_-Eigenschaft](#zugriffs-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedem Attribut wird intern von der JavaScript-Engine zugegriffen, aber man kann sie durch {{jsxref("Object.defineProperty()")}} setzen oder durch {{jsxref("Object.getOwnPropertyDescriptor()")}} lesen. Sie können mehr über die verschiedenen Feinheiten auf der {{jsxref("Object.defineProperty()")}}-Seite lesen.

#### Daten-Eigenschaft

Daten-Eigenschaften verbinden einen Schlüssel mit einem Wert. Sie kann durch die folgenden Attribute beschrieben werden:

- `value`
  - : Der Wert, der durch einen Lesezugriff auf die Eigenschaft abgerufen wird. Kann jeder JavaScript-Wert sein.
- `writable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft mit einer Zuweisung geändert werden kann.
- `enumerable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) für Informationen über die Interaktion der Aufzählbarkeit mit anderen Funktionen und Syntaxen.
- `configurable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft gelöscht werden kann, in eine Zugriffseigenschaft geändert werden kann und ihre Attribute geändert werden können.

#### Zugriffs-Eigenschaft

Verbindet einen Schlüssel mit einer von zwei Zugriffs-Funktionen (`get` und `set`), um einen Wert zu erhalten oder zu speichern.

> [!NOTE]
> Es ist wichtig zu erkennen, dass es sich um eine Zugriffs-_Eigenschaft_ handelt — nicht um eine Zugriffs-_Methode_. Wir können einem JavaScript-Objekt durch die Verwendung einer Funktion als Wert klassenähnliche Zugriffseigenschaften geben — aber das macht das Objekt nicht zu einer Klasse.

Eine Zugriffs-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste aufgerufen wird, um den Eigenschaftswert abzurufen, wann immer ein Lesezugriff auf den Wert erfolgt. Siehe auch [Getter](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument aufgerufen wird, das den zugewiesenen Wert enthält. Wird aufgerufen, wann immer eine spezielle Eigenschaft geändert werden soll. Siehe auch [Setter](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) für Informationen über die Interaktion der Aufzählbarkeit mit anderen Funktionen und Syntaxen.
- `configurable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft gelöscht, in eine Daten-Eigenschaft geändert werden kann und ihre Attribute geändert werden können.

Das [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) eines Objekts verweist auf ein anderes Objekt oder auf `null` — es ist konzeptionell eine versteckte Eigenschaft des Objekts, die allgemein als `[[Prototype]]` dargestellt wird. Eigenschaften des `[[Prototype]]` eines Objekts können auch auf dem Objekt selbst abgerufen werden.

Objekte sind Ad-hoc-Schlüssel-Wert-Paare und werden daher oft als Maps verwendet. Es kann jedoch ergonomische, sicherheitstechnische und Leistungsprobleme geben. Verwenden Sie stattdessen ein {{jsxref("Map")}} für das Speichern beliebiger Daten. Der [Map-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion über die Vor- und Nachteile zwischen einfachen Objekten und Maps für die Speicherung von Schlüssel-Wert-Zuordnungen.

### Daten

Beim Darstellen von Daten ist es die beste Wahl, das eingebaute [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Dienstprogramm in JavaScript zu verwenden.

### Indizierte Sammlungen: Arrays und typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, bei denen es eine besondere Beziehung zwischen ganzzahlig indizierten Eigenschaften und der `length`-Eigenschaft gibt.

Zusätzlich erben Arrays von `Array.prototype`, das eine Handvoll praktischer Methoden zur Manipulation von Arrays bereitstellt. Zum Beispiel durchsucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) einen Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) hängt ein Element an das Array an. Dies macht Arrays zu einer perfekten Wahl, um geordnete Listen darzustellen.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) bieten eine arrayartige Ansicht eines zugrunde liegenden binären Datenpuffers und bieten viele Methoden, die eine ähnliche Semantik wie die Array-Gegenstücke haben. "Typisiertes Array" ist ein Überbegriff für eine Reihe von Datenstrukturen, einschließlich `Int8Array`, `Float32Array`, etc. Überprüfen Sie die [typisierten Array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Seite für mehr Informationen. Typisierte Arrays werden oft in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Schlüsselbasierte Sammlungen: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen verwenden Objektverweise als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} repräsentieren eine Sammlung einzigartiger Werte, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Zuordnungen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da jedoch Objekte nicht verglichen werden können (im Sinne von `<` "kleiner als", zum Beispiel), und die Engine ihre Hash-Funktion für Objekte nicht zugänglich macht, wäre die Suchleistung notwendigerweise linear. Native Implementierungen von ihnen (einschließlich `WeakMap`s) können eine Suchleistung haben, die ungefähr logarithmisch bis konstant ist.

Normalerweise, um Daten an einen DOM-Knoten zu binden, könnte man Eigenschaften direkt auf dem Objekt setzen oder `data-*`-Attribute verwenden. Dies hat den Nachteil, dass die Daten jedem Skript, das im selben Kontext läuft, zur Verfügung stehen. `Map`s und `WeakMap`s erleichtern es, Daten _privat_ an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben nur Garbage-collectable-Werte als Schlüssel, die entweder Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel können selbst dann gesammelt werden, wenn sie sich in der Sammlung befinden. Sie werden speziell zur [Optimierung der Speichernutzung](/de/docs/Web/JavaScript/Memory_management#data_structures_aiding_memory_management) verwendet.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) ist ein leichtes Daten-Austauschformat, das von JavaScript abgeleitet ist, aber von vielen Programmiersprachen verwendet wird. JSON baut universelle Datenstrukturen, die zwischen verschiedenen Umgebungen und sogar über Sprachgrenzen hinweg übertragen werden können. Siehe {{jsxref("JSON")}} für mehr Details.

### Weitere Objekte in der Standardbibliothek

JavaScript verfügt über eine Standardbibliothek von eingebauten Objekten. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects) für mehr Informationen über die eingebauten Objekte.

## Typumwandlung

Wie oben erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Das bedeutet, dass man oft einen Wert eines Typs verwenden kann, wo ein anderer Typ erwartet wird, und die Sprache wird ihn für Sie in den richtigen Typ umwandeln. Dazu definiert JavaScript eine Handvoll Umwandlungsregeln.

### Primitive Umwandlung

Der [primitive Umwandlungsprozess](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird verwendet, wo ein primitiver Wert erwartet wird, es jedoch keine starke Präferenz für den tatsächlichen Typ gibt. Das ist normalerweise der Fall, wenn ein [String](#string-typ), eine [Number](#number-typ) oder ein [BigInt](#bigint-typ) gleichermaßen akzeptabel sind. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)-Konstruktor, wenn er ein Argument erhält, das keine `Date`-Instanz ist — Strings repräsentieren Datumsstrings, während Nummern Zeitstempel darstellen.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator — wenn ein Operand ein Zeichenkette ist, wird eine Zeichenkettenkonkatenation durchgeführt; andernfalls eine numerische Addition.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operator — wenn ein Operand ein primitiver Wert ist, während der andere ein Objekt ist, wird das Objekt in einen primitiven Wert ohne bevorzugten Typ umgewandelt.

Diese Operation führt keine Umwandlung durch, wenn der Wert bereits ein primitiver Wert ist. Objekte werden in primitive Werte umgewandelt, indem die Methoden [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit dem Hinweis "`default`"), `valueOf()` und `toString()` in dieser Reihenfolge aufgerufen werden. Beachten Sie, dass die primitive Umwandlung `valueOf()` vor `toString()` aufruft, was dem Verhalten der [numerischen Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ähnelt, sich jedoch von der [Zeichenketten-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) unterscheidet.

Die Methode `[Symbol.toPrimitive]()` muss, wenn vorhanden, einen primitiven Wert zurückgeben — das Zurückgeben eines Objekts führt zu einem {{jsxref("TypeError")}}. Für `valueOf()` und `toString()`, wenn eines ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der des anderen Rückgabewerts verwendet; wenn keines vorhanden ist oder keines einen primitiven Wert zurückgibt, wird ein {{jsxref("TypeError")}} geworfen. Zum Beispiel im folgenden Code:

```js
console.log({} + []); // "[object Object]"
```

Weder `{}` noch `[]` haben eine `[Symbol.toPrimitive]()`-Methode. Sowohl `{}` als auch `[]` erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, das das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird er ignoriert. Daher wird stattdessen `toString()` aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, sodass das Ergebnis ihre Verkettung ist: `"[object Object]"`.

Die `[Symbol.toPrimitive]()`-Methode hat immer Vorrang, wenn eine Umwandlung in einen beliebigen primitiven Typ erfolgt. Die primitive Umwandlung verhält sich im Allgemeinen wie die numerische Umwandlung, da `valueOf()` Vorrang hat; jedoch können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()`-Methoden einen beliebigen primitiven Wert zurückgeben. {{jsxref("Date")}}- und {{jsxref("Symbol")}}-Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()`-Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt den "`default`"-Hinweis so, als ob er "`string`" wäre, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Numerische Umwandlung

Es gibt zwei numerische Typen: [Number](#number-typ) und [BigInt](#bigint-typ). Manchmal erwartet die Sprache speziell eine Zahl oder einen BigInt (wie bei {{jsxref("Array.prototype.slice()")}}, wo der Index eine Zahl sein muss); andere Male kann sie beide tolerieren und unterschiedliche Operationen je nach Typ des Operanden durchführen. Für strikte Umwandlungsprozesse, die keine implizite Umwandlung vom anderen Typ erlauben, siehe [number coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Die numerische Umwandlung ist fast identisch mit der [number coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts so zurückgegeben werden, wie sie sind, anstatt einen {{jsxref("TypeError")}} zu verursachen. Die numerische Umwandlung wird von allen arithmetischen Operatoren verwendet, da diese sowohl für Zahlen als auch für BigInts überladen sind. Die einzige Ausnahme ist das [unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), das immer eine number coercion durchführt.

### Andere Umwandlungen

Alle Datentypen, außer Null, Undefined und Symbol, haben ihren jeweiligen Umwandlungsprozess. Siehe [string coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [boolean coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion), und [object coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für mehr Details.

Wie Sie vielleicht bemerkt haben, gibt es drei verschiedene Pfade, durch die Objekte in primitive Werte umgewandelt werden können:

- [Primitive Umwandlung](#primitive_umwandlung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Numerische Umwandlung](#numerische_umwandlung), [number coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt coercion](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [Zeichenketten-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive]()`, wenn vorhanden, aufrufbar sein und einen primitiven Wert zurückgeben, während `valueOf` oder `toString` ignoriert werden, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses, falls erfolgreich, ist das Ergebnis garantiert ein primitiver Wert. Der resultierende primitive Wert wird dann je nach Kontext weiteren Umwandlungen unterzogen.

## Siehe auch

- [JavaScript-Datenstrukturen und Algorithmen](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Informatik in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
