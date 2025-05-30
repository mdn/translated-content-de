---
title: JavaScript-Datentypen und Datenstrukturen
slug: Web/JavaScript/Guide/Data_structures
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Mehr")}}

Programmiersprachen verfügen alle über eingebaute Datenstrukturen, aber diese unterscheiden sich oft von einer Sprache zur anderen. Dieser Artikel versucht, die eingebauten Datenstrukturen in JavaScript und ihre Eigenschaften aufzulisten. Diese können verwendet werden, um andere Datenstrukturen zu erstellen.

Der [Sprachüberblick](/de/docs/Web/JavaScript/Guide/Language_overview) bietet eine ähnliche Zusammenfassung der allgemeinen Datentypen, jedoch mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://en.wikipedia.org/wiki/Dynamic_programming_language) Sprache mit [dynamischen Typen](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). Variablen in JavaScript sind nicht direkt mit einem bestimmten Wertetyp verbunden, und jede Variable kann Werte aller Typen zugewiesen (und erneut zugewiesen) bekommen:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript ist auch eine [schwach typisierte](https://en.wikipedia.org/wiki/Strong_and_weak_typing) Sprache, was bedeutet, dass es eine implizite Typumwandlung zulässt, wenn eine Operation nicht zueinander passende Typen umfasst, anstatt Typfehler zu werfen.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implizite Umwandlungen sind sehr praktisch, können jedoch subtile Fehler erzeugen, wenn Umwandlungen dort stattfinden, wo sie nicht erwartet werden, oder wo sie in die andere Richtung erwartet werden (zum Beispiel von String zu Zahl anstatt von Zahl zu String). Für [Symbole](#symbol-typ) und [BigInts](#bigint-typ) hat JavaScript bestimmte implizite Typumwandlungen absichtlich nicht zugelassen.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren {{Glossary("Immutable", "unveränderliche")}} Werte, die direkt auf der niedrigsten Ebene der Sprache dargestellt werden. Wir bezeichnen die Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können mit dem [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator getestet werden. `typeof null` gibt `"object"` zurück, daher muss man `=== null` verwenden, um `null` zu testen.

Alle primitiven Typen außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) haben ihre entsprechenden Objekt-Wrapper-Typen, die nützliche Methoden zum Arbeiten mit den primitiven Werten bieten. Zum Beispiel bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft eines primitiven Wertes zugegriffen wird, umhüllt JavaScript den Wert automatisch mit dem entsprechenden Wrapper-Objekt und greift stattdessen auf die Eigenschaft des Objekts zu. Das Zugreifen auf eine Eigenschaft von `null` oder `undefined` wirft jedoch eine `TypeError` Ausnahme, was die Einführung des [optionalen Verkettungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) notwendig machte.

| Typ                         | `typeof` Rückgabewert | Objekt-Wrapper        |
| --------------------------- | --------------------- | --------------------- |
| [Null](#null-typ)           | `"object"`            | N/V                   |
| [Undefined](#undefined-typ) | `"undefined"`         | N/V                   |
| [Boolean](#boolean-typ)     | `"boolean"`           | {{jsxref("Boolean")}} |
| [Number](#zahl-typ)         | `"number"`            | {{jsxref("Number")}}  |
| [BigInt](#bigint-typ)       | `"bigint"`            | {{jsxref("BigInt")}}  |
| [String](#string-typ)       | `"string"`            | {{jsxref("String")}}  |
| [Symbol](#symbol-typ)       | `"symbol"`            | {{jsxref("Symbol")}}  |

Die Referenzseiten der Objekt-Wrapper-Klassen enthalten mehr Informationen über die verfügbaren Methoden und Eigenschaften für jeden Typ sowie ausführliche Beschreibungen der Semantik der primitiven Typen selbst.

### Null-Typ

Der Null-Typ wird genau von einem Wert bewohnt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined-Typ

Der Undefined-Typ wird genau von einem Wert bewohnt: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzeptionell weist `undefined` auf das Fehlen eines _Wertes_ hin, während `null` auf das Fehlen eines _Objekts_ hinweist (was auch eine Erklärung für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) liefern könnte). Die Sprache verwendet normalerweise `undefined` als Standard, wenn etwas keinen Wert hat:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird im Kern der Sprache viel seltener verwendet. Der wichtigste Ort ist das Ende der [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) — anschließend akzeptieren oder geben Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}}, etc., `null` anstelle von `undefined` zurück.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), aber `undefined` ist ein normales [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), das zufällig eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht neu definiert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}}-Typ repräsentiert eine logische Einheit und wird von zwei Werten bewohnt: `true` und `false`.

Boolesche Werte werden normalerweise für bedingte Operationen verwendet, einschließlich [ternärer Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

### Zahl-Typ

Der {{jsxref("Number")}}-Typ ist ein [doppelt-genauer 64-Bit-IEEEE 754 Wert im Binärformat](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Es kann positive Gleitkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Gleitkommazahlen derselben Größenordnung speichern, aber es kann nur ganze Zahlen im Bereich von -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) sicher speichern. Außerhalb dieses Bereichs kann JavaScript Ganzzahlen nicht mehr sicher darstellen; sie werden stattdessen als doppelt-genaue Gleitkommazahl-Annäherung dargestellt. Sie können überprüfen, ob eine Zahl innerhalb des Bereichs sicherer Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch umgewandelt:

- Positive Werte größer als {{jsxref("Number.MAX_VALUE")}} werden in `Infinity` umgewandelt.
- Positive Werte kleiner als {{jsxref("Number.MIN_VALUE")}} werden in `0` umgewandelt.
- Negative Werte kleiner als -{{jsxref("Number.MAX_VALUE")}} werden in `-Infinity` umgewandelt.
- Negative Werte größer als -{{jsxref("Number.MIN_VALUE")}} werden in `-0` umgewandelt.

`Infinity` und `-Infinity` verhalten sich ähnlich wie mathematische Unendlichkeiten, jedoch mit einigen leichten Unterschieden; siehe {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Zahlentyp hat nur einen Wert mit mehreren Darstellungen: `0` wird sowohl als `-0` als auch als `+0` dargestellt (wobei `0` ein Alias für `+0` ist). In der Praxis gibt es kaum Unterschiede zwischen den verschiedenen Darstellungen; zum Beispiel ist `+0 === -0` `true`. Sie können dies jedoch bemerken, wenn Sie durch Null teilen:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**ot **a** **N**umber") ist eine besondere Art von Zahlenwert, die typischerweise auftritt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der nicht gleich sich selbst ist.

Obwohl eine Zahl konzeptionell ein "mathematischer Wert" ist und immer implizit als Gleitkomma kodiert ist, bietet JavaScript [bitweise Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators). Wenn Sie bitweise Operatoren anwenden, wird die Zahl zuerst in eine 32-Bit-Ganzzahl konvertiert.

> [!NOTE]
> Obwohl bitweise Operatoren _können_ verwendet werden, um mehrere Boolesche Werte innerhalb einer einzigen Zahl mit [Bit-Maskierung](https://en.wikipedia.org/wiki/Mask_%28computing%29) darzustellen, wird dies normalerweise als schlechte Praxis angesehen. JavaScript bietet andere Mittel, um eine Menge von Booleans darzustellen (wie ein Array von Booleans oder ein Objekt mit Booleans, die benannten Eigenschaften zugewiesen sind). Bit-Maskierung neigt auch dazu, den Code schwerer lesbar, verstehbar und wartbar zu machen.

Es kann notwendig sein, solche Techniken in sehr eingeschränkten Umgebungen zu verwenden, wie bei der Bewältigung der Beschränkungen der Lokalspeicherung oder in extremen Fällen (wie wenn jedes Bit über das Netzwerk zählt). Diese Technik sollte nur in Erwägung gezogen werden, wenn es das letzte Mittel ist, um die Größe zu optimieren.

### BigInt-Typ

Der {{jsxref("BigInt")}}-Typ ist ein numerisches Primitive in JavaScript, das ganze Zahlen mit beliebiger Größe darstellen kann. Mit BigInts können Sie große Ganzzahlen sicher speichern und damit operieren, selbst über das sichere Ganzzahlenlimit ({{jsxref("Number.MAX_SAFE_INTEGER")}}) hinaus, das für Zahlen gilt.

Ein BigInt wird erstellt, indem Sie `n` an das Ende einer Ganzzahl anhängen oder indem die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion aufgerufen wird.

Dieses Beispiel zeigt, wo das Inkrementieren der {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis zurückgibt:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, einschließlich `+`, `*`, `-`, `**`, und `%` — der einzige verbotene ist der [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu einer Zahl mit demselben mathematischen Wert, aber es ist es [lose](/de/docs/Web/JavaScript/Reference/Operators/Equality).

BigInt-Werte sind weder immer präziser noch immer unpräziser als Zahlen, da BigInts nicht in der Lage sind, Bruchzahlen darzustellen, aber große Ganzzahlen genauer darstellen können. Keiner der Typen enthält den anderen, und sie sind nicht gegenseitig austauschbar. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn BigInt-Werte mit normalen Zahlen in arithmetischen Ausdrücken gemischt werden oder wenn sie [implizit umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden.

### String-Typ

Der {{jsxref("String")}}-Typ repräsentiert textuelle Daten und ist als eine Folge von 16-Bit-Untertupelwerten kodiert, die [UTF-16-Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen. Jede Stelle im String belegt eine Position im String. Das erste Element ist an Index `0`, das nächste an Index `1` und so weiter. Die [Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) eines Strings ist die Anzahl der UTF-16-Code-Einheiten darin, die möglicherweise nicht mit der tatsächlichen Anzahl an Unicode-Zeichen übereinstimmt; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Referenzseite für mehr Details.

JavaScript-Strings sind unveränderlich. Das bedeutet, dass es nicht möglich ist, einen einmal erstellten String zu ändern. String-Methoden erstellen neue Strings basierend auf dem Inhalt des aktuellen Strings — zum Beispiel:

- Eine Teilzeichenkette des Originals mit [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung von zwei Strings mit dem Verkettungsoperator (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Vorsicht vor "stringly-typing" Ihres Codes!

Es kann verlockend sein, Strings zu verwenden, um komplexe Daten darzustellen. Dies bringt kurzfristige Vorteile mit sich:

- Es ist einfach, komplexe Strings mit Verkettung zu erstellen.
- Strings sind leicht zu debuggen (was man sieht, ist immer das, was im String ist).
- Strings sind der gemeinsame Nenner vieler APIs ([Eingabefelder](/de/docs/Web/API/HTMLInputElement), [lokale Speicherung](/de/docs/Web/API/Web_Storage_API) Werte, [`fetch()`](/de/docs/Web/API/Window/fetch) Antworten bei der Verwendung von [`Response.text()`](/de/docs/Web/API/Response/text), etc.) und es kann verlockend sein, nur mit Strings zu arbeiten.

Mit Konventionen ist es möglich, jede Datenstruktur in einem String darzustellen. Das macht es jedoch nicht zu einer guten Idee. Zum Beispiel könnte man mit einem Separator eine Liste emulieren (während ein JavaScript-Array besser geeignet wäre). Unglücklicherweise, wenn der Separator in einem der "Listen"-Elemente verwendet wird, bricht dann die Liste. Ein Escape-Zeichen kann gewählt werden, etc. All das erfordert Konventionen und schafft eine unnötige Wartungslast.

Verwenden Sie Strings für textuelle Daten. Beim Darstellen komplexer Daten, _parsen_ Sie die Strings und verwenden Sie die geeignete Abstraktion.

### Symbol-Typ

Ein {{jsxref("Symbol")}} ist ein **einzigartiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel einer Objekteigenschaft verwendet werden (siehe unten). In einigen Programmiersprachen werden Symbole als "Atoms" bezeichnet. Der Zweck von Symbolen ist es, einzigartige Eigenschaftsschlüssel zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, das möglicherweise von einem {{Glossary("Identifier", "Bezeichner")}} referenziert wird. In JavaScript sind Objekte die einzigen {{Glossary("Mutable", "veränderlichen")}} Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind, in der Tat, ebenfalls Objekte mit der zusätzlichen Fähigkeit, _aufgerufen_ werden zu können.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften gesehen werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird ein begrenzter Satz von Eigenschaften initialisiert; dann können Eigenschaften hinzugefügt und entfernt werden. Objekteigenschaften entsprechen Schlüssel-Wert-Paaren. Eigenschaftsschlüssel sind entweder [Strings](#string-typ) oder [Symbole](#symbol-typ). Wenn andere Typen (wie Zahlen) verwendet werden, um Objekte zu indizieren, werden die Werte implizit in Strings konvertiert. Eigenschaftswerte können Werte beliebigen Typs sein, einschließlich anderer Objekte, was es ermöglicht, komplexe Datenstrukturen zu erstellen.

Es gibt zwei Arten von Objekteigenschaften: Die [_Daten_-Eigenschaft](#daten-eigenschaft) und die [_Zugriffs_-Eigenschaft](#zugriffs-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedes Attribut wird intern von der JavaScript-Engine abgerufen, aber Sie können sie durch {{jsxref("Object.defineProperty()")}} setzen oder durch {{jsxref("Object.getOwnPropertyDescriptor()")}} lesen. Sie können mehr über die verschiedenen Nuancen auf der {{jsxref("Object.defineProperty()")}} Seite erfahren.

#### Daten-Eigenschaft

Daten-Eigenschaften verknüpfen einen Schlüssel mit einem Wert. Sie kann durch die folgenden Attribute beschrieben werden:

- `value`
  - : Der Wert, der durch einen Abruf der Eigenschaft erhalten wird. Kann irgendein JavaScript-Wert sein.
- `writable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft durch eine Zuweisung geändert werden kann.
- `enumerable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), wie die Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft gelöscht werden kann, in eine Zugriffs-Eigenschaft geändert werden kann und ihre Attribute geändert werden können.

#### Zugriffs-Eigenschaft

Verbindet einen Schlüssel mit einer der beiden Zugriffs-Funktionen (`get` und `set`) zum Abrufen oder Speichern eines Wertes.

> [!NOTE]
> Es ist wichtig zu erkennen, dass es sich um eine Zugriffs-_Eigenschaft_ handelt — nicht um eine Zugriffs-_Methode_. Wir können einem JavaScript-Objekt klassenähnliche Zugriffe geben, indem wir eine Funktion als Wert verwenden — aber das macht das Objekt nicht zu einer Klasse.

Eine Zugriffs-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste aufgerufen wird, um den Eigenschaftswert abzurufen, wann immer ein Abrufzugriff auf den Wert ausgeführt wird. Siehe auch [Getter](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument aufgerufen wird, das den zugewiesenen Wert enthält. Wird ausgeführt, wann immer versucht wird, eine bestimmte Eigenschaft zu ändern. Siehe auch [Setter](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), wie die Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft gelöscht werden kann, in eine Daten-Eigenschaft geändert werden kann und ihre Attribute geändert werden können.

Das [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) eines Objekts verweist auf ein anderes Objekt oder auf `null` — es ist konzeptionell eine versteckte Eigenschaft des Objekts, die häufig als `[[Prototype]]` dargestellt wird. Eigenschaften des Objekts `[[Prototype]]` können auch auf dem Objekt selbst zugegriffen werden.

Objekte sind ad-hoc Schlüssel-Wert-Paare, sodass sie oft als Maps verwendet werden. Es können jedoch ergonomische, sicherheitsrelevante und leistungstechnische Probleme auftreten. Verwenden Sie eine {{jsxref("Map")}}, um willkürliche Daten zu speichern. Die [`Map`-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion der Vor- und Nachteile zwischen einfachen Objekten und Maps zum Speichern von Schlüssel-Wert-Zuordnungen.

### Daten

JavaScript bietet zwei Sets von APIs zur Darstellung von Daten: das veraltete {{jsxref("Date")}} Objekt und das moderne {{jsxref("Temporal")}} Objekt. `Date` hat viele unerwünschte Designentscheidungen und sollte in neuem Code, wenn möglich, vermieden werden.

### Indizierte Sammlungen: Arrays und typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, bei denen es eine bestimmte Beziehung zwischen ganzzahlindizierten Eigenschaften und der `length`-Eigenschaft gibt.

Zusätzlich erben Arrays von `Array.prototype`, das eine Menge von praktischen Methoden zum Manipulieren von Arrays bereitstellt. Zum Beispiel sucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) nach einem Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) fügt ein Element zum Array hinzu. Dadurch sind Arrays eine perfekte Wahl, um geordnete Listen zu repräsentieren.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) bieten eine Array-ähnliche Ansicht eines zugrunde liegenden binären Datenpuffers und bieten viele Methoden, die ähnliche Semantik wie ihre Array-Gegenstücke haben. "Typisiertes Array" ist ein Sammelbegriff für eine Reihe von Datenstrukturen, einschließlich `Int8Array`, `Float32Array`, etc. Weitere Informationen finden Sie auf der [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Seite. Typisierte Arrays werden häufig in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Schlüsselbasierte Sammlungen: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen verwenden Objektverweise als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} repräsentieren eine Sammlung einzigartiger Werte, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Zuordnungen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da Objekte jedoch nicht verglichen werden können (im Sinne von "<" "kleiner als", zum Beispiel), enthüllt die Engine weder die Hash-Funktion für Objekte noch würde die Suchleistung notwendigerweise linear sein. Native Implementierungen von ihnen (einschließlich `WeakMap`s) können eine Suchleistung haben, die ungefähr logarithmisch bis konstant ist.

Um Daten an einen DOM-Knoten zu binden, könnte man normalerweise Eigenschaften direkt auf das Objekt setzen oder `data-*` Attribute verwenden. Dies hat den Nachteil, dass die Daten jedem im selben Kontext laufenden Skript zur Verfügung stehen. `Maps` und `WeakMaps` machen es einfach, Daten _privat_ an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben nur garbage-collectable Werte als Schlüssel, die entweder Objekte oder [nicht-registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel können sogar dann gesammelt werden, wenn sie weiterhin in der Sammlung sind. Sie werden speziell zur [Speicheroptimierung](/de/docs/Web/JavaScript/Guide/Memory_management#data_structures_aiding_memory_management) eingesetzt.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) ist ein leichtgewichtiges Datenaustauschformat, das von JavaScript abgeleitet ist, aber von vielen Programmiersprachen verwendet wird. JSON erstellt universelle Datenstrukturen, die zwischen verschiedenen Umgebungen und sogar über Sprachgrenzen hinweg übertragen werden können. Siehe {{jsxref("JSON")}} für mehr Details.

### Weitere Objekte in der Standardbibliothek

JavaScript verfügt über eine Standardbibliothek eingebauter Objekte. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects), um mehr über die eingebauten Objekte zu erfahren.

## Typumwandlung

Wie oben erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Das bedeutet, dass oft ein Wert eines Typs verwendet werden kann, wo ein anderer Typ erwartet wird, und die Sprache konvertiert ihn automatisch in den richtigen Typ. Dazu definiert JavaScript eine Handvoll Umwandlungsregeln.

### Primitivumwandlung

Der [Primitivumwandlungsprozess](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird verwendet, wenn ein primitiver Wert erwartet wird, aber keine starke Präferenz dafür besteht, welcher tatsächliche Typ vorliegen soll. Dies ist normalerweise der Fall, wenn ein [String](#string-typ), eine [Zahl](#zahl-typ) oder ein [BigInt](#bigint-typ) gleichermaßen akzeptabel ist. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) Konstruktor, wenn er ein Argument erhält, das keine `Date` Instanz ist — Strings repräsentieren Datumsstrings, während Zahlen Zeitstempel repräsentieren.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator — wenn ein Operand ein String ist, wird String-Verkettung durchgeführt; ansonsten wird numerische Addition durchgeführt.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) Operator — wenn ein Operand ein primitiver Wert ist, während der andere ein Objekt ist, wird das Objekt in einen primitiven Wert ohne bevorzugten Typ konvertiert.

Diese Operation führt keine Umwandlung durch, wenn der Wert bereits primitiv ist. Objekte werden in primitive Werte konvertiert, indem seine `[Symbol.toPrimitive]()` (mit `"default"` als Hinweis), `valueOf()`, und `toString()` Methoden aufgerufen werden, in dieser Reihenfolge. Beachten Sie, dass die primitive Konvertierung `valueOf()` vor `toString()` aufruft, was dem Verhalten der [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ähnlich ist, sich jedoch von der [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) unterscheidet.

Die `[Symbol.toPrimitive]()` Methode, falls vorhanden, muss ein primitiver Wert zurückgeben — ein Objekt zurückzugeben, führt zu einer {{jsxref("TypeError")}}. Für `valueOf()` und `toString()`, wenn einer ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der Rückgabewert des anderen wird stattdessen verwendet; wenn keiner vorhanden ist oder keiner einen primitiven Wert zurückgibt, wird ein {{jsxref("TypeError")}} ausgelöst. Zum Beispiel:

```js
console.log({} + []); // "[object Object]"
```

Weder `{}` noch `[]` haben eine `[Symbol.toPrimitive]()` Methode. Sowohl `{}` als auch `[]` erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, was das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird er ignoriert. Daher wird stattdessen `toString()` aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, also ist das Ergebnis deren Verkettung: `"[object Object]"`.

Die `[Symbol.toPrimitive]()` Methode hat immer Vorrang bei der Konvertierung zu einem primitiven Typ. Primitive Konvertierung verhält sich im Allgemeinen wie Zahl-Konvertierung, weil `valueOf()` mit Priorität aufgerufen wird; jedoch können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()` Methoden wählen, um jeden primitiven Wert zurückzugeben. {{jsxref("Date")}} und {{jsxref("Symbol")}} Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()` Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt den `"default"` Hinweis, als ob er `"string"` wäre, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Numerische Umwandlung

Es gibt zwei numerische Typen: [Number](#zahl-typ) und [BigInt](#bigint-typ). Manchmal erwartet die Sprache spezifisch eine Zahl oder ein BigInt (wie {{jsxref("Array.prototype.slice()")}}, wo der Index eine Zahl sein muss); manchmal könnte es beide tolerieren und verschiedene Operationen abhängig vom Typ des Operanden durchführen. Für strenge Umwandlungsprozesse, die keine implizite Konvertierung vom anderen Typ erlauben, siehe [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Numerische Umwandlung ist fast identisch mit der [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts unverändert zurückgegeben werden, anstatt eine {{jsxref("TypeError")}} auszulösen. Numerische Umwandlung wird von allen arithmetischen Operatoren verwendet, da sie sowohl für Zahlen als auch für BigInts überladen sind. Die einzige Ausnahme ist das [unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), das immer Zahlumwandlung durchführt.

### Andere Umwandlungen

Alle Datentypen, außer Null, Undefined und Symbol, haben ihren jeweiligen Umwandlungsprozess. Siehe [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [Boolesche Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion), und [Objektumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für mehr Details.

Wie Sie vielleicht bemerkt haben, gibt es drei unterschiedliche Wege, durch die Objekte in primitive Werte konvertiert werden können:

- [Primitive Umwandlung](#primitivumwandlung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Numerische Umwandlung](#numerische_umwandlung), [Zahlumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive]()` falls vorhanden, aufrufbar sein und ein primitiver Wert zurückgegeben werden, während `valueOf` oder `toString` ignoriert werden, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses ist das Ergebnis garantiert ein primitiver Wert. Der resultierende primitive Wert wird dann je nach Kontext weiteren Umwandlungen unterzogen.

## Siehe auch

- [JavaScript-Datenstrukturen und Algorithmen](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Informatik in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
