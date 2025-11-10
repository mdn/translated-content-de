---
title: JavaScript-Datentypen und Datenstrukturen
slug: Web/JavaScript/Guide/Data_structures
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Alle Programmiersprachen haben eingebaute Datenstrukturen, aber diese unterscheiden sich oft von einer Sprache zur anderen. Dieser Artikel versucht, die eingebauten Datenstrukturen in JavaScript aufzulisten und ihre Eigenschaften zu beschreiben. Diese können genutzt werden, um andere Datenstrukturen zu erstellen.

Das [Sprachenüberblick](/de/docs/Web/JavaScript/Guide/Language_overview) bietet eine ähnliche Zusammenfassung der allgemeinen Datentypen, jedoch mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://en.wikipedia.org/wiki/Dynamic_programming_language) Sprache mit [dynamischen Typen](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). Variablen in JavaScript sind nicht direkt mit einem bestimmten Werttyp verknüpft und jede Variable kann Werte aller Typen zugewiesen (und neu zugewiesen) bekommen:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript ist auch eine [schwach typisierte](https://en.wikipedia.org/wiki/Strong_and_weak_typing) Sprache, was bedeutet, dass es eine implizite Typkonvertierung zulässt, wenn eine Operation unpassende Typen beinhaltet, anstatt Typfehler zu werfen.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implizite Umwandlungen sind sehr praktisch, können aber subtile Fehler erzeugen, wenn Konvertierungen dort stattfinden, wo sie nicht erwartet werden, oder wo sie in die andere Richtung erwartet werden (zum Beispiel, von Zeichenfolge zu Zahl anstatt von Zahl zu Zeichenfolge). Für [Symbole](#symbol-typ) und [BigInts](#bigint-typ) hat JavaScript bewusst bestimmte implizite Typkonvertierungen verboten.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren {{Glossary("Immutable", "unveränderliche")}} Werte, die direkt auf der untersten Ebene der Sprache dargestellt werden. Wir bezeichnen Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), können mit dem [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator getestet werden. `typeof null` gibt `"object"` zurück, daher muss man `=== null` verwenden, um `null` zu testen.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), haben ihre entsprechenden Objekt-Wrapper-Typen, die nützliche Methoden zum Arbeiten mit den primitiven Werten bereitstellen. Zum Beispiel bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft eines primitiven Wertes zugegriffen wird, umhüllt JavaScript den Wert automatisch in das entsprechende Wrapper-Objekt und greift stattdessen auf die Eigenschaft im Objekt zu. Allerdings wirft der Zugriff auf eine Eigenschaft von `null` oder `undefined` eine `TypeError`-Exception, was die Einführung des [optionalen Verkettungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) erforderlich macht.

| Typ                         | `typeof` Rückgabewert | Objekt-Wrapper        |
| --------------------------- | --------------------- | --------------------- |
| [Null](#null-typ)           | `"object"`            | N/V                   |
| [Undefined](#undefined-typ) | `"undefined"`         | N/V                   |
| [Boolean](#boolean-typ)     | `"boolean"`           | {{jsxref("Boolean")}} |
| [Number](#number-typ)       | `"number"`            | {{jsxref("Number")}}  |
| [BigInt](#bigint-typ)       | `"bigint"`            | {{jsxref("BigInt")}}  |
| [String](#string-typ)       | `"string"`            | {{jsxref("String")}}  |
| [Symbol](#symbol-typ)       | `"symbol"`            | {{jsxref("Symbol")}}  |

Die Referenzseiten der Objekt-Wrapper-Klassen enthalten mehr Informationen über die verfügbaren Methoden und Eigenschaften für jeden Typ sowie detaillierte Beschreibungen der Semantik der primitiven Typen selbst.

### Null-Typ

Der Null-Typ wird von genau einem Wert bewohnt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined-Typ

Der Undefined-Typ wird von genau einem Wert bewohnt: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzeptionell zeigt `undefined` das Fehlen eines _Wertes_ an, während `null` das Fehlen eines _Objekts_ anzeigt (was auch eine Erklärung für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) sein könnte). Die Sprache setzt meistens auf `undefined`, wenn etwas keinen Wert hat:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existente [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)-Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird in der Kernsprache viel seltener verwendet. Der wichtigste Ort ist das Ende der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) — dementsprechend akzeptieren oder geben Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}} usw., `null` anstelle von `undefined` zurück.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), aber `undefined` ist ein normales [Identifier](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), das zufällig eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht neu definiert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}}-Typ repräsentiert eine logische Entität und wird von zwei Werten bewohnt: `true` und `false`.

Boolesche Werte werden normalerweise für bedingte Operationen verwendet, einschließlich [ternärem Operator](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) usw.

### Number-Typ

Der {{jsxref("Number")}}-Typ ist ein [doppelter 64-Bit-Gleitkommawert im IEEE 754-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Er ist in der Lage, positive Gleitkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Gleitkommazahlen desselben Umfangs zu speichern, kann jedoch nur ganze Zahlen im Bereich von -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) sicher speichern. Außerhalb dieses Bereichs kann JavaScript ganze Zahlen nicht mehr sicher darstellen; stattdessen werden sie durch eine Gleitzahl-Doppelformat-Angleichung dargestellt. Sie können überprüfen, ob eine Zahl innerhalb des Bereichs der sicheren Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch konvertiert:

- Positive Werte, die größer als {{jsxref("Number.MAX_VALUE")}} sind, werden in `Infinity` konvertiert.
- Positive Werte, die kleiner als {{jsxref("Number.MIN_VALUE")}} sind, werden zu `0` konvertiert.
- Negative Werte, die kleiner als -{{jsxref("Number.MAX_VALUE")}} sind, werden in `-Infinity` konvertiert.
- Negative Werte, die größer als -{{jsxref("Number.MIN_VALUE")}} sind, werden zu `-0` konvertiert.

`Infinity` und `-Infinity` verhalten sich ähnlich wie mathematische Unendlichkeit, jedoch mit einigen geringfügigen Unterschieden; sehen Sie die Seiten {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Number-Typ hat nur einen Wert mit mehreren Darstellungen: `0` wird sowohl als `-0` als auch als `+0` (wobei `0` ein Alias für `+0` ist) dargestellt. In der Praxis gibt es fast keinen Unterschied zwischen den verschiedenen Darstellungen; zum Beispiel ist `+0 === -0` `true`. Sie können dies jedoch bemerken, wenn Sie durch null teilen:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**icht **e**ine **Z**ahl") ist eine spezielle Art von Zahlenwert, der typischerweise vorkommt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der nicht sich selbst entspricht.

Obwohl eine Zahl konzeptionell ein "mathematischer Wert" ist und immer implizit als Gleitkommazahl kodiert ist, stellt JavaScript [Bitweise Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators) bereit. Bei der Anwendung von bitweisen Operatoren wird die Zahl zunächst in eine 32-Bit-Ganzzahl konvertiert.

> [!NOTE]
> Auch wenn bitweise Operatoren _genutzt werden können_, um mehrere Boolesche Werte innerhalb einer einzelnen Zahl mittels [Bitmaskierung](https://en.wikipedia.org/wiki/Mask_%28computing%29) darzustellen, wird dies in der Regel als schlechte Praxis angesehen. JavaScript bietet andere Mittel, um eine Menge von Booleschen Werten darzustellen (wie ein Array von Booleschen Werten oder ein Objekt mit Booleschen Werten, die auf benannte Eigenschaften zugewiesen sind). Die Bitmaskierung neigt auch dazu, den Code schwerer lesbar, verständlich und wartbar zu machen.

Es kann notwendig sein, solche Techniken in sehr eingeschränkten Umgebungen zu verwenden, wie zum Beispiel beim Umgang mit den Einschränkungen des lokalen Speichers oder in extremen Fällen (wie wenn jedes Bit über das Netzwerk zählt). Diese Technik sollte nur in Betracht gezogen werden, wenn sie das letzte Mittel ist, das ergriffen werden kann, um die Größe zu optimieren.

### BigInt-Typ

Der {{jsxref("BigInt")}}-Typ ist ein numerischer primitiver Typ in JavaScript, der Ganzzahlen beliebiger Größe darstellen kann. Mit BigInts können Sie große Ganzzahlen sicher speichern und bearbeiten, selbst über die Grenze der sicheren Ganzzahl hinaus ({{jsxref("Number.MAX_SAFE_INTEGER")}}) für Nummern.

Ein BigInt wird erstellt, indem man `n` an das Ende einer Ganzzahl anhängt oder indem man die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion aufruft.

Dieses Beispiel zeigt, wo das Erhöhen der {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis liefert:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, einschließlich `+`, `*`, `-`, `**` und `%` — der einzige verbotene ist [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) einer Zahl mit demselben mathematischen Wert, ist jedoch [lose](/de/docs/Web/JavaScript/Reference/Operators/Equality) so.

BigInt-Werte sind weder immer präziser noch immer weniger präzise als Zahlen, da BigInts keine Bruchzahlen darstellen können, aber große Ganzzahlen genauer darstellen können. Kein Typ schließt den anderen ein, und sie sind nicht gegenseitig austauschbar. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn BigInt-Werte mit regulären Zahlen in arithmetischen Ausdrücken gemischt werden, oder wenn sie [implizit konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden.

### String-Typ

Der {{jsxref("String")}}-Typ stellt Textdaten dar und ist als eine Folge von 16-Bit-unsigned Integer-Werten kodiert, die [UTF-16 Code-Einheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen. Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich an Index `0`, das nächste an Index `1` usw. Die [Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) eines Strings ist die Anzahl der UTF-16 Code-Einheiten darin, welche möglicherweise nicht der tatsächlichen Anzahl der Unicode-Zeichen entsprechen; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Referenzseite für mehr Details.

JavaScript-Strings sind unveränderlich. Das bedeutet, dass es nicht möglich ist, einen String nach seiner Erstellung zu ändern. String-Methoden erzeugen neue Strings basierend auf dem Inhalt des aktuellen Strings — zum Beispiel:

- Ein Teilstring des Originalstrings mithilfe von [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung zweier Strings mittels des Verkettungsoperators (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Vorsicht vor dem "stringly-typing" Ihres Codes!

Es kann verlockend sein, Strings zu verwenden, um komplexe Daten darzustellen. Dies bringt kurzfristige Vorteile mit sich:

- Es ist einfach, komplexe Strings mit Verkettung zu erstellen.
- Strings sind leicht debugbar (das, was Sie sehen, wird immer im String sein).
- Strings sind der kleinste gemeinsame Nenner vieler APIs ([Eingabefelder](/de/docs/Web/API/HTMLInputElement), Werte im [lokalen Speicher](/de/docs/Web/API/Web_Storage_API), [`fetch()`](/de/docs/Web/API/Window/fetch)-Antworten, wenn [`Response.text()`](/de/docs/Web/API/Response/text) verwendet wird, etc.) und es kann verlockend sein, nur mit Strings zu arbeiten.

Mit Konventionen ist es möglich, jede Datenstruktur in einem String zu repräsentieren. Das macht es nicht zu einer guten Idee. Zum Beispiel könnte man mit einem Separator eine Liste emulieren (während ein JavaScript-Array besser geeignet wäre). Leider ist, wenn der Separator in einem der "Listen"-Elemente verwendet wird, die Liste zerstört. Ein Escape-Zeichen kann gewählt werden, etc. All dies erfordert Konventionen und schafft eine unnötige Wartungslast.

Verwenden Sie Strings für Textdaten. Bei der Darstellung komplexer Daten, _parsen_ Sie Strings und verwenden Sie die passende Abstraktion.

### Symbol-Typ

Ein {{jsxref("Symbol")}} ist ein **einzigartiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel einer Objekteigenschaft verwendet werden (siehe unten). In einigen Programmiersprachen werden Symbole als "Atom" bezeichnet. Zweck der Symbole ist es, einzigartige Eigenschaftsschlüssel zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, der möglicherweise von einem {{Glossary("Identifier", "Identifier")}} referenziert wird. In JavaScript sind Objekte die einzigen {{Glossary("Mutable", "veränderlichen")}} Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind tatsächlich auch Objekte mit der zusätzlichen Fähigkeit, _aufrufbar_ zu sein.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften betrachtet werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird eine begrenzte Menge an Eigenschaften initialisiert; danach können Eigenschaften hinzugefügt und entfernt werden. Eigenschaften von Objekten sind gleichwertig mit Schlüssel-Wert-Paaren. Eigenschaftsschlüssel sind entweder [Strings](#string-typ) oder [Symbole](#symbol-typ). Wenn andere Typen (wie Zahlen) verwendet werden, um Objekte zu indizieren, werden die Werte implizit in Strings konvertiert. Eigenschaftswerte können Werte jeden Typs sein, einschließlich anderer Objekte, was es ermöglicht, komplexe Datenstrukturen zu erstellen.

Es gibt zwei Typen von Objekteigenschaften: Die [_Daten_-Eigenschaft](#daten-eigenschaft) und die [_Zugangs_-Eigenschaft](#zugangs-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedes Attribut wird intern von der JavaScript-Engine abgerufen, aber Sie können sie durch {{jsxref("Object.defineProperty()")}} setzen oder durch {{jsxref("Object.getOwnPropertyDescriptor()")}} ablesen. Weitere Informationen zu den verschiedenen Nuancen finden Sie auf der Seite {{jsxref("Object.defineProperty()")}}.

#### Daten-Eigenschaft

Daten-Eigenschaften verknüpfen einen Schlüssel mit einem Wert. Sie kann durch die folgenden Attribute beschrieben werden:

- `value`
  - : Der Wert, der durch einen Zugriff auf die Eigenschaft abgerufen wird. Kann jeder JavaScript-Wert sein.
- `writable`
  - : Ein Boolescher Wert, der angibt, ob die Eigenschaft durch eine Zuweisung verändert werden kann.
- `enumerable`
  - : Ein Boolescher Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) für Informationen darüber, wie Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein Boolescher Wert, der angibt, ob die Eigenschaft gelöscht werden kann, in eine Zugangs-Eigenschaft geändert werden kann und ob ihre Attribute geändert werden können.

#### Zugangs-Eigenschaft

Verknüpft einen Schlüssel mit einer von zwei Zugriffs-Funktionen (`get` und `set`), um einen Wert abzurufen oder zu speichern.

> [!NOTE]
> Es ist wichtig, zu erkennen, dass es sich um eine Zugangs-_Eigenschaft_ handelt, nicht um eine Zugangs-_Methode_. Wir können einem JavaScript-Objekt klassenähnliche Zugänge geben, indem wir eine Funktion als Wert verwenden — das macht das Objekt jedoch nicht zu einer Klasse.

Eine Zugangs-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste aufgerufen wird, um den Eigenschaftswert abzurufen, wann immer ein Zugriff auf den Wert erfolgt. Siehe auch [Getter](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument aufgerufen wird, das den zugewiesenen Wert enthält. Wird ausgeführt, wenn eine bestimmte Eigenschaft verwechselt werden soll. Siehe auch [Setter](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein Boolescher Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) für Informationen darüber, wie Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein Boolescher Wert, der angibt, ob die Eigenschaft gelöscht werden kann, in eine Daten-Eigenschaft geändert werden kann und ob ihre Attribute geändert werden können.

Das [Prototype](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) eines Objekts zeigt auf ein anderes Objekt oder auf `null` — es ist konzeptionell eine versteckte Eigenschaft des Objekts, die üblicherweise als `[[Prototype]]` dargestellt wird. Eigenschaften des Objekts `[[Prototype]]` können auch auf das Objekt selbst zugreifen.

Objekte sind zusammengewürfelte Schlüssel-Wert-Paare, weshalb sie oft als Maps verwendet werden. Dies kann jedoch Ergonomie-, Sicherheits- und Leistungsprobleme verursachen. Verwenden Sie stattdessen eine {{jsxref("Map")}}, um beliebige Daten zu speichern. Die [`Map`-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion der Vor- und Nachteile zwischen einfachen Objekten und Maps zum Speichern von Schlüssel-Wert-Assoziationen.

### Datum

JavaScript bietet zwei Sets von APIs zur Darstellung von Daten: das veraltete {{jsxref("Date")}} Objekt und das moderne {{jsxref("Temporal")}} Objekt. `Date` weist viele unerwünschte Designentscheidungen auf und sollte, wenn möglich, in neuem Code vermieden werden.

### Indizierte Sammlungen: Arrays und Typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, bei denen es eine besondere Beziehung zwischen Ganzzahlschlüsseleigenschaften und der `length`-Eigenschaft gibt.

Darüber hinaus erben Arrays von `Array.prototype`, das eine Reihe nützlicher Methoden zur Manipulation von Arrays bietet. Zum Beispiel sucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) einen Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) hängt ein Element an das Array an. Dies macht Arrays zu einer perfekten Wahl, um geordnete Listen darzustellen.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) stellen eine arrayähnliche Ansicht eines zugrunde liegenden binären Datenpuffers dar und bieten viele Methoden, die ähnliche Semantiken wie die Array-Gegenstücke haben. "Typisiertes Array" ist ein Oberbegriff für eine Reihe von Datenstrukturen, einschließlich `Int8Array`, `Float32Array` usw. Sehen Sie die [typisierte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) Seite für mehr Informationen. Typisierte Arrays werden oft in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Keyed-Sammlungen: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen nehmen Objekt-Referenzen als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} repräsentieren eine Sammlung einzigartiger Werte, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Zuordnungen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da jedoch Objekte nicht vergleichbar sind (im Sinne von "<" "weniger als", zum Beispiel), und die Engine ihre Hash-Funktion für Objekte nicht offenlegt, wäre die Suchleistung zwangsläufig linear. Native Implementierungen davon (einschließlich `WeakMap`s) können Suchleistungen bieten, die ungefähr logarithmisch bis konstant sind.

Üblicherweise, um Daten an einen DOM-Knoten zu binden, könnte man Eigenschaften direkt am Objekt setzen oder `data-*` Attribute verwenden. Der Nachteil davon ist, dass die Daten für jedes Skript im gleichen Kontext verfügbar sind. `Map`s und `WeakMap`s machen es einfach, _privat_ Daten an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben nur als Schlüssel speicherbereinigbare Werte, die entweder Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel können auch dann gesammelt werden, wenn sie in der Sammlung verbleiben. Sie werden speziell zur [Optimierung des Speicherverbrauchs](/de/docs/Web/JavaScript/Guide/Memory_management#data_structures_aiding_memory_management) verwendet.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bjekt **N**otation) ist ein leichtgewichtiges Datenaustauschformat, das von JavaScript abgeleitet wurde, aber von vielen Programmiersprachen verwendet wird. JSON erstellt universelle Datenstrukturen, die zwischen verschiedenen Umgebungen und sogar zwischen Sprachen übertragen werden können. Sehen Sie {{jsxref("JSON")}} für mehr Details.

### Weitere Objekte in der Standardbibliothek

JavaScript hat eine Standardbibliothek von eingebauten Objekten. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects), um mehr über die eingebauten Objekte zu erfahren.

## Typumwandlungen

Wie oben erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Das bedeutet, dass Sie oft einen Wert eines Typs verwenden können, wo ein anderer Typ erwartet wird, und die Sprache ihn für Sie in den richtigen Typ konvertiert. Dazu definiert JavaScript eine Handvoll Umwandlungsregeln.

### Primitive Umwandlung

Der Prozess der [primitiven Umwandlung](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird verwendet, wenn ein primitiver Wert erwartet wird, aber es keine starke Präferenz dafür gibt, welcher tatsächliche Typ es sein sollte. Dies ist normalerweise der Fall, wenn ein [String](#string-typ), eine [Zahl](#number-typ) oder ein [BigInt](#bigint-typ) gleichermaßen akzeptabel sind. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)-Konstruktor, wenn er ein Argument erhält, das keine `Date`-Instanz ist — Strings repräsentieren Date-Strings, während Zahlen Zeitstempel repräsentieren.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator — wenn einer der Operanden ein String ist, wird String-Verkettung durchgeführt; ansonsten wird numerische Addition durchgeführt.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operator — wenn ein Operand ein primitiver Wert ist, während der andere ein Objekt ist, wird das Objekt in einen primitiven Wert konvertiert, ohne einen bevorzugten Typ zu haben.

Diese Operation führt keine Konvertierung durch, wenn der Wert bereits ein primitiver Wert ist. Objekte werden durch Aufrufen ihrer [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"default"` als Hinweis), `valueOf()`, und `toString()`-Methoden, in dieser Reihenfolge, in primitive Werte konvertiert. Beachten Sie, dass die primitive Konvertierung `valueOf()` vor `toString()` aufruft, was dem Verhalten der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ähnlich ist, aber sich von der [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) unterscheidet.

Die `[Symbol.toPrimitive]()`-Methode, falls vorhanden, muss einen primitiven Wert zurückgeben — das Zurückgeben eines Objektes führt zu einem {{jsxref("TypeError")}}. Für `valueOf()` und `toString()`, wenn eine ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der Rückgabewert der anderen verwendet; wenn keine vorhanden ist oder keine einen primitiven Wert zurückgibt, wird ein {{jsxref("TypeError")}} ausgelöst. Zum Beispiel, im folgenden Code:

```js
console.log({} + []); // "[object Object]"
```

Sowohl `{}` als auch `[]` haben keine `[Symbol.toPrimitive]()`-Methode. Beide erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, das das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird er ignoriert. Daher wird stattdessen `toString()` aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, so dass das Ergebnis ihre Verkettung ist: `"[object Object]"`.

Die `[Symbol.toPrimitive]()`-Methode hat immer Vorrang bei der Umwandlung in jeden primitiven Typ. Primitive Umwandlung verhält sich allgemein wie die Zahlenumwandlung, da `valueOf()` Vorrang hat; jedoch können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()`-Methoden wählen, um beliebige Primitive zurückzugeben. {{jsxref("Date")}} und {{jsxref("Symbol")}} Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()`-Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt den `"default"`-Hinweis, als ob es `"string"` wäre, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Numerische Umwandlung

Es gibt zwei numerische Typen: [Number](#number-typ) und [BigInt](#bigint-typ). Manchmal erwartet die Sprache speziell eine Zahl oder einen BigInt (wie {{jsxref("Array.prototype.slice()")}}, wo der Index eine Zahl sein muss); andere Male kann sie entweder tolerieren und unterschiedliche Operationen abhängig vom Typ des Operanden durchführen. Für strikte Umwandlungsprozesse, die keine implizite Konvertierung vom anderen Typ zulassen, siehe [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Numerische Umwandlung ist fast identisch mit der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts als solche zurückgegeben werden, anstatt einen {{jsxref("TypeError")}} zu verursachen. Numerische Umwandlung wird von allen arithmetischen Operatoren verwendet, da sie sowohl für Zahlen als auch für BigInts überladen sind. Die einzige Ausnahme ist das [unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), das immer eine Zahlenumwandlung vornimmt.

### Weitere Umwandlungen

Alle Datentypen, außer Null, Undefined und Symbol, haben ihren jeweiligen Umwandlungsprozess. Siehe [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [Boolean-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion), und [Objektumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für mehr Details.

Wie Sie vielleicht bemerkt haben, gibt es drei unterschiedliche Wege, durch die Objekte in Primitive umgewandelt werden können:

- [Primitive Umwandlung](#primitive_umwandlung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Numerische Umwandlung](#numerische_umwandlung), [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [String-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive]()` vorhanden und aufrufbar sein und einen primitiven Wert zurückgeben, während `valueOf` oder `toString` ignoriert werden, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses, wenn er erfolgreich ist, wird das Ergebnis garantiert ein primitiver Wert sein. Der resultierende primitive Wert wird dann in weiteren Umwandlungen je nach Kontext unterzogen.

## Siehe auch

- [JavaScript Data Structures and Algorithms](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Computer Science in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
