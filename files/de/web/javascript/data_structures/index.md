---
title: JavaScript Datentypen und Datenstrukturen
slug: Web/JavaScript/Data_structures
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("More")}}

Programmiersprachen haben alle eingebaute Datenstrukturen, aber diese unterscheiden sich oft von Sprache zu Sprache. Dieser Artikel versucht, die eingebauten Datenstrukturen in JavaScript aufzulisten und welche Eigenschaften sie besitzen. Diese können verwendet werden, um andere Datenstrukturen zu erstellen.

Die [Sprachübersicht](/de/docs/Web/JavaScript/Language_overview) bietet eine ähnliche Zusammenfassung der gängigen Datentypen, jedoch mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://de.wikipedia.org/wiki/Dynamische_Programmiersprache) Sprache mit [dynamischen Typen](https://de.wikipedia.org/wiki/Typensystem#DYNAMISCHE_TYPEN). Variablen in JavaScript sind nicht direkt mit einem bestimmten Wertetyp assoziiert und jede Variable kann Werte aller Typen zugewiesen (und neu zugewiesen) bekommen:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript ist auch eine [schwach typisierte](<https://de.wikipedia.org/wiki/Typisierung_(Informatik)#Starke_und_schwache_Typisierung>) Sprache, was bedeutet, dass es eine implizite Typkonvertierung erlaubt, wenn eine Operation nicht übereinstimmende Typen beinhaltet, anstatt Typfehler zu werfen.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implizite Umwandlungen sind sehr praktisch, können jedoch subtile Fehler erzeugen, wenn Umwandlungen stattfinden, wo sie nicht erwartet werden, oder wo sie in die andere Richtung erwartet werden (zum Beispiel, von String zu Zahl statt von Zahl zu String). Für [Symbole](#symbol-typ) und [BigInts](#bigint-typ) hat JavaScript bestimmte implizite Typkonvertierungen bewusst ausgeschlossen.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren [unveränderliche](/de/docs/Glossary/Immutable) Werte, die auf der niedrigsten Ebene der Sprache direkt dargestellt werden. Wir bezeichnen Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen mit Ausnahme von [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) können mit dem [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator getestet werden. `typeof null` ergibt `"object"`, daher muss man `=== null` verwenden, um auf `null` zu testen.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), haben ihre entsprechenden Objekt-Wrapper-Typen, die nützliche Methoden zum Arbeiten mit den primitiven Werten bereitstellen. Zum Beispiel bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft eines primitiven Wertes zugegriffen wird, umschließt JavaScript den Wert automatisch mit dem entsprechenden Wrapper-Objekt und greift stattdessen auf die Eigenschaft des Objekts zu. Der Zugriff auf eine Eigenschaft von `null` oder `undefined` löst jedoch eine `TypeError`-Ausnahme aus, was die Einführung des [optional chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Operators erforderlich machte.

| Typ                         | `typeof` Rückgabewert | Objekt-Wrapper        |
| --------------------------- | --------------------- | --------------------- |
| [Null](#null-typ)           | `"object"`            | N/A                   |
| [Undefined](#undefined-typ) | `"undefined"`         | N/A                   |
| [Boolean](#boolean-typ)     | `"boolean"`           | {{jsxref("Boolean")}} |
| [Number](#number-typ)       | `"number"`            | {{jsxref("Number")}}  |
| [BigInt](#bigint-typ)       | `"bigint"`            | {{jsxref("BigInt")}}  |
| [String](#string-typ)       | `"string"`            | {{jsxref("String")}}  |
| [Symbol](#symbol-typ)       | `"symbol"`            | {{jsxref("Symbol")}}  |

Die Referenzseiten zu den Objekt-Wrapper-Klassen enthalten weitere Informationen über die verfügbaren Methoden und Eigenschaften für jeden Typ sowie detaillierte Beschreibungen der Semantik der primitiven Typen selbst.

### Null-Typ

Der Null-Typ ist genau durch einen Wert bevölkert: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined-Typ

Der Undefined-Typ ist genau durch einen Wert bevölkert: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzeptionell zeigt `undefined` das Fehlen eines _Wertes_ an, während `null` das Fehlen eines _Objekts_ anzeigt (was auch eine Ausrede für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) sein könnte). Die Sprache setzt normalerweise `undefined` voraus, wenn etwas ohne Wert ist:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht vorhandene [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird im Kern der Sprache viel seltener verwendet. Der wichtigste Ort ist das Ende der [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) — in der Folge akzeptieren oder geben Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}}, etc., `null` zurück anstelle von `undefined`.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), während `undefined` ein normaler [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) ist, der zufällig eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht neu definiert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}}-Typ stellt eine logische Entität dar und wird von zwei Werten besiedelt: `true` und `false`.

Boolean-Werte werden normalerweise für bedingte Operationen verwendet, einschließlich [ternärer Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

### Number-Typ

Der {{jsxref("Number")}}-Typ ist ein [Double-Precision 64-Bit-Binärformat IEEE 754 Wert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Er ist in der Lage, positive Gleitkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Gleitkommazahlen derselben Größenordnung zu speichern, aber er kann nur sicher Ganzzahlen im Bereich von -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) speichern. Außerhalb dieses Bereichs kann JavaScript Ganzzahlen nicht mehr sicher darstellen; sie werden stattdessen durch eine Double-Precision-Gleitkomma-Annäherung dargestellt. Sie können überprüfen, ob eine Zahl innerhalb des Bereichs von sicheren Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch konvertiert:

- Positive Werte, die größer sind als {{jsxref("Number.MAX_VALUE")}}, werden in `+Infinity` umgewandelt.
- Positive Werte, die kleiner sind als {{jsxref("Number.MIN_VALUE")}}, werden in `+0` umgewandelt.
- Negative Werte, die kleiner sind als -{{jsxref("Number.MAX_VALUE")}}, werden in `-Infinity` umgewandelt.
- Negative Werte, die größer sind als -{{jsxref("Number.MIN_VALUE")}}, werden in `-0` umgewandelt.

`+Infinity` und `-Infinity` verhalten sich ähnlich wie mathematische Unendlichkeit, aber mit einigen leichten Unterschieden; siehe {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Number-Typ hat nur einen Wert mit mehreren Repräsentationen: `0` wird sowohl als `-0` als auch als `+0` dargestellt (wobei `0` ein Alias für `+0` ist). In der Praxis gibt es fast keinen Unterschied zwischen den verschiedenen Repräsentationen; zum Beispiel ist `+0 === -0` `true`. Sie können dies jedoch bemerken, wenn Sie durch null teilen:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**ot **a** **N**umber") ist eine spezielle Art von numerischem Wert, der typischerweise auftritt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der nicht gleich sich selbst ist.

Obwohl eine Zahl konzeptionell ein "mathematischer Wert" ist und immer implizit Gleitkomma-enkodiert ist, bietet JavaScript [Binäroperatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators). Bei der Anwendung von Binäroperatoren wird die Zahl zunächst in einen 32-Bit-Ganzzahl umgewandelt.

> [!NOTE]
> Obwohl Binäroperatoren _können_ verwendet werden, um mehrere Boolean-Werte innerhalb einer einzigen Zahl darzustellen, indem [Bitmaskierung](https://de.wikipedia.org/wiki/Bitmaske) verwendet wird, wird dies normalerweise als schlechte Praxis angesehen. JavaScript bietet andere Mittel, um eine Menge von Booleans zu repräsentieren (wie ein Array von Booleans oder ein Objekt mit Boolean-Werten, die benannten Eigenschaften zugewiesen sind). Bitmaskierung macht auch den Code schwieriger zu lesen, zu verstehen und zu warten.

Es kann notwendig sein, solche Techniken in sehr eingeschränkten Umgebungen zu verwenden, etwa wenn man mit den Einschränkungen des lokalen Speichers umgehen muss, oder in extremen Fällen (wie wenn jedes Bit über das Netzwerk zählt). Diese Technik sollte nur in Betracht gezogen werden, wenn es die letzte Maßnahme ist, die ergriffen werden kann, um die Größe zu optimieren.

### BigInt-Typ

Der {{jsxref("BigInt")}}-Typ ist ein numerisches Primitive in JavaScript, das Ganzzahlen mit beliebiger Größe darstellen kann. Mit BigInts können Sie große Ganzzahlen auch über das sichere Ganzzahllimit ({{jsxref("Number.MAX_SAFE_INTEGER")}}) für Zahlen hinaus sicher speichern und bearbeiten.

Ein BigInt wird durch Anhängen von `n` an das Ende einer Ganzzahl oder durch Aufrufen der [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion erstellt.

Dieses Beispiel zeigt, wo das Erhöhen des {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis zurückgibt:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, einschließlich `+`, `*`, `-`, `**` und `%` — der einzige verbotene Operator ist [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) einer Zahl mit demselben mathematischen Wert, aber es ist [locker](/de/docs/Web/JavaScript/Reference/Operators/Equality) so.

BigInt-Werte sind weder immer präziser noch immer weniger präzise als Zahlen, da BigInts keine Bruchzahlen darstellen können, aber große Ganzzahlen genauer darstellen können. Keiner von beiden Typen umfasst den anderen und sie sind nicht gegenseitig austauschbar. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn BigInt-Werte mit normalen Zahlen in arithmetischen Ausdrücken gemischt werden oder wenn sie [implizit konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden.

### String-Typ

Der {{jsxref("String")}}-Typ stellt Textdaten dar und ist als eine Folge von 16-Bit-ganzzahligen Codes, die [UTF-16 Code Units](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen, kodiert. Jedes Element im String belegt eine Position im String. Das erste Element befindet sich an Index `0`, das nächste an Index `1` und so weiter. Die [length](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) eines Strings ist die Anzahl der UTF-16 Code Units darin, was möglicherweise nicht der tatsächlichen Anzahl der Unicode-Zeichen entspricht; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Referenzseite für weitere Details.

JavaScript-Strings sind unveränderlich. Dies bedeutet, dass es, sobald ein String erstellt wurde, nicht möglich ist, ihn zu verändern. String-Methoden erstellen neue Strings basierend auf dem Inhalt des aktuellen Strings — zum Beispiel:

- Einen Substring des Originals mithilfe von [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung von zwei Strings durch den Verkettungsoperator (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Achtung vor "stringly-typing" Ihrem Code!

Es kann verlockend sein, Strings zu verwenden, um komplexe Daten darzustellen. Dies hat kurzfristige Vorteile:

- Es ist einfach, komplexe Strings durch Verkettung zu erstellen.
- Strings sind leicht zu debuggen (was gedruckt wird, ist immer das, was im String enthalten ist).
- Strings sind der gemeinsame Nenner vieler APIs ([Eingabefelder](/de/docs/Web/API/HTMLInputElement), [lokale Speicher](/de/docs/Web/API/Web_Storage_API) Werte, [`fetch()`](/de/docs/Web/API/Window/fetch) Antworten bei Verwendung von [`Response.text()`](/de/docs/Web/API/Response/text), etc.) und es kann verlockend sein, nur mit Strings zu arbeiten.

Mit Konventionen ist es möglich, jede Datenstruktur in einem String darzustellen. Das macht es jedoch nicht zu einer guten Idee. Beispielsweise könnte man mit einem Separator eine Liste emulieren (während ein JavaScript-Array besser geeignet wäre). Leider ist, wenn der Separator in einem der "Listenelemente" verwendet wird, die Liste kaputt. Ein Escape-Zeichen kann gewählt werden, etc. All dies erfordert Konventionen und schafft eine unnötige Wartungslast.

Verwenden Sie Strings für Textdaten. Beim Darstellen komplexer Daten _parsen_ Sie Strings und verwenden die entsprechende Abstraktion.

### Symbol-Typ

Ein {{jsxref("Symbol")}} ist ein **einzigartiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel einer Objekteigenschaft verwendet werden (siehe unten). In einigen Programmiersprachen werden Symbole als "Atome" bezeichnet. Der Zweck von Symbolen besteht darin, eindeutige Eigenschaftsschlüssel zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, der möglicherweise von einem [Bezeichner](/de/docs/Glossary/Identifier) referenziert wird. In JavaScript sind Objekte die einzigen [veränderlichen](/de/docs/Glossary/Mutable) Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind, tatsächlich, auch Objekte mit der zusätzlichen Fähigkeit, _aufrufbar_ zu sein.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften gesehen werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird eine begrenzte Menge von Eigenschaften initialisiert; dann können Eigenschaften hinzugefügt und entfernt werden. Objekteigenschaften sind gleichwertig mit Schlüssel-Werte-Paaren. Eigenschaften-Schlüssel sind entweder [Strings](#string-typ) oder [Symbole](#symbol-typ). Wenn andere Typen (wie Zahlen) verwendet werden, um Objekte zu indexieren, werden die Werte implizit in Strings umgewandelt. Eigenschaften-Werte können beliebige Typen enthalten, einschließlich anderer Objekte, was den Aufbau komplexer Datenstrukturen ermöglicht.

Es gibt zwei Arten von Objekteigenschaften: Die [_Daten_-Eigenschaft](#daten-eigenschaft) und die [_Accessor_-Eigenschaft](#accessor-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedes Attribut wird intern von der JavaScript-Engine zugegriffen, aber Sie können sie durch {{jsxref("Object.defineProperty()")}} setzen oder durch {{jsxref("Object.getOwnPropertyDescriptor()")}} lesen. Weitere Informationen zu den verschiedenen Nuancen finden Sie auf der {{jsxref("Object.defineProperty()")}} Seite.

#### Daten-Eigenschaft

Daten-Eigenschaften verknüpfen einen Schlüssel mit einem Wert. Sie kann durch die folgenden Attribute beschrieben werden:

- `value`
  - : Der Wert, der bei einem Zugriff auf die Eigenschaft durch eine Abfrage abgerufen wird. Kann ein beliebiger JavaScript-Wert sein.
- `writable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft mit einer Zuweisung geändert werden kann.
- `enumerable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufzählbar ist. Siehe auch [Enumerabilität und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) dafür, wie Enumerabilität mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft gelöscht, in eine Accessor-Eigenschaft geändert und ihre Attribute geändert werden können.

#### Accessor-Eigenschaft

Verknüpft einen Schlüssel mit einer von zwei Accessor-Funktionen (`get` und `set`), um einen Wert abzurufen oder zu speichern.

> [!NOTE]
> Es ist wichtig zu erkennen, dass es sich um eine Accessor-_Eigenschaft_ handelt — nicht um eine Accessor-_Methode_. Wir können einem JavaScript-Objekt klassenähnliche Accessoren geben, indem wir eine Funktion als Wert verwenden — das macht das Objekt allerdings nicht zu einer Klasse.

Eine Accessor-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste zum Abrufen des Eigenschaftswertes aufgerufen wird, wann immer ein Abrufzugriff auf den Wert durchgeführt wird. Siehe auch [Getter](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument aufgerufen wird, das den zugewiesenen Wert enthält. Ausgeführt wann immer eine spezifizierte Eigenschaft versucht wird geändert zu werden. Siehe auch [Setter](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufzählbar ist. Siehe auch [Enumerabilität und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) dafür, wie Enumerabilität mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein boolescher Wert, der angibt, ob die Eigenschaft gelöscht, in eine Daten-Eigenschaft geändert und ihre Attribute geändert werden können.

Das [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) eines Objekts zeigt auf ein anderes Objekt oder auf `null` — es ist konzeptionell eine versteckte Eigenschaft des Objekts, üblicherweise als `[[Prototype]]` dargestellt. Eigenschaften des Objekts `[[Prototype]]` können auch auf dem Objekt selbst zugegriffen werden.

Objekte sind ad-hoc Schlüssel-Wert-Paare, daher werden sie oft als Karten verwendet. Es kann jedoch Ergonomie-, Sicherheits- und Leistungsprobleme geben. Verwenden Sie eine {{jsxref("Map")}}, um willkürliche Daten zu speichern. Die [`Map` Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion der Vor- und Nachteile zwischen einfachen Objekten und Karten zur Speicherung von Schlüssel-Wert-Zuordnungen.

### Datum

Bei der Darstellung von Daten ist die beste Wahl, das eingebaute [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Dienstprogramm in JavaScript zu verwenden.

### Indexierte Sammlungen: Arrays und typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, bei denen es eine besondere Beziehung zwischen ganzzahligen Schlüssel-Eigenschaften und der Eigenschaft `length` gibt.

Darüber hinaus erben Arrays von `Array.prototype`, welches eine Handvoll praktischer Methoden zur Manipulation von Arrays bereitstellt. Zum Beispiel sucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) einen Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) fügt ein Element zum Array hinzu. Dies macht Arrays zu einem perfekten Kandidaten, um geordnete Listen darzustellen.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) bieten eine array-ähnliche Sicht auf einen zugrunde liegenden binären Datenbuffer und bieten viele Methoden, die ähnliche Semantik wie die Array-Entsprechungen haben. "Typed array" ist ein Überbegriff für eine Reihe von Datenstrukturen, einschließlich `Int8Array`, `Float32Array`, etc. Weitere Informationen finden Sie auf der [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) Seite. Typed arrays werden oft in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Schlüsselgebundene Sammlungen: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen verwenden Objektreferenzen als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} stellen eine Sammlung einzigartiger Werte dar, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Zuordnungen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da Objekte jedoch nicht verglichen werden können (im Sinne von `<` "kleiner als", zum Beispiel), noch gibt die Engine ihre Hash-Funktion für Objekte preis, wäre die Suchleistung notwendigerweise linear. Native Implementierungen von ihnen (einschließlich `WeakMap`s) können eine Suchleistung haben, die annähernd logarithmisch bis konstant ist.

Normalerweise, um Daten an einen DOM-Knoten zu binden, könnte man Eigenschaften direkt auf dem Objekt einstellen oder `data-*` Attribute verwenden. Dies hat den Nachteil, dass die Daten jedem Skript im selben Kontext zugänglich sind. `Map`s und `WeakMap`s machen es einfach, Daten _privat_ an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben nur müllsammelbare Werte als Schlüssel, die entweder Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel dürfen auch dann gesammelt werden, wenn sie sich noch in der Sammlung befinden. Sie werden speziell für [Speicherauslastungsoptimierung](/de/docs/Web/JavaScript/Memory_management#data_structures_aiding_memory_management) verwendet.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) ist ein leichtgewichtiges Datenaustauschformat, das von JavaScript abgeleitet ist, aber von vielen Programmiersprachen verwendet wird. JSON erstellt universelle Datenstrukturen, die zwischen verschiedenen Umgebungen und sogar zwischen Sprachen übertragen werden können. Siehe {{jsxref("JSON")}} für weitere Details.

### Weitere Objekte in der Standardbibliothek

JavaScript hat eine Standardbibliothek eingebauter Objekte. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects), um mehr über die eingebauten Objekte zu erfahren.

## Typumwandlung

Wie bereits erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Das bedeutet, dass Sie oft einen Wert eines Typs verwenden können, wo ein anderer erwartet wird, und die Sprache wird ihn für Sie in den richtigen Typ umwandeln. Dazu definiert JavaScript eine Handvoll Umwandlungsregeln.

### Primitive Umwandlung

Der [primitive Umwandlungsprozess](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird verwendet, wenn ein primitiver Wert erwartet wird, aber keine starke Präferenz dafür besteht, welcher tatsächliche Typ sein soll. Dies ist normalerweise der Fall, wenn sowohl ein [String](#string-typ) als auch eine [Zahl](#number-typ) oder ein [BigInt](#bigint-typ) gleichermaßen akzeptabel sind. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) Konstruktor, wenn er ein Argument erhält, das keine `Date`-Instanz ist — Strings repräsentieren Datumsstrings, während Zahlen Zeitstempel repräsentieren.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator — wenn ein Operand ein String ist, wird eine Stringkonkatenation durchgeführt; andernfalls wird eine nummerische Addition durchgeführt.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) Operator — wenn ein Operand ein primitiver Wert ist, während der andere ein Objekt ist, wird das Objekt ohne bevorzugten Typ in einen primitiven Wert konvertiert.

Diese Operation führt keine Umwandlung durch, wenn der Wert bereits ein Primärwert ist. Objekte werden in Primärwerte konvertiert, indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"default"` als Hinweis), `valueOf()` und `toString()` Methoden in dieser Reihenfolge aufgerufen werden. Beachten Sie, dass die primitive Umwandlung `valueOf()` vor `toString()` aufruft, was ähnlich dem Verhalten der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ist, jedoch von der [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) abweicht.

Die `[Symbol.toPrimitive]()` Methode, falls vorhanden, muss einen Primärwert zurückgeben — das Zurückgeben eines Objekts führt zu einem {{jsxref("TypeError")}}. Für `valueOf()` und `toString()`, wenn einer von ihnen ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der Rückgabewert des anderen verwendet; wenn keiner vorhanden ist oder keiner einen Primärwert zurückgibt, wird ein {{jsxref("TypeError")}} geworfen. Zum Beispiel, im folgenden Code:

```js
console.log({} + []); // "[object Object]"
```

Weder `{}` noch `[]` haben eine `[Symbol.toPrimitive]()` Methode. Sowohl `{}` als auch `[]` erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, welches das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird er ignoriert. Daher wird `toString()` stattdessen aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, sodass das Ergebnis ihre Verkettung ist: `"[object Object]"`.

Die `[Symbol.toPrimitive]()` Methode hat immer Vorrang, wenn eine Konvertierung in einen beliebigen Primärwert durchgeführt wird. Primitive Konvertierung verhält sich im Allgemeinen wie die Zahlenumwandlung, da `valueOf()` priorisiert wird; jedoch können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()` Methoden wählen, jeden Primärwert zurückzugeben. {{jsxref("Date")}} und {{jsxref("Symbol")}} Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()` Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt den `"default"` Hinweis, als wäre er `"string"`, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Nummerische Umwandlung

Es gibt zwei nummerische Typen: [Number](#number-typ) und [BigInt](#bigint-typ). Manchmal erwartet die Sprache speziell eine Zahl oder einen BigInt (wie in {{jsxref("Array.prototype.slice()")}}, wo der Index eine Zahl sein muss); andere Male kann sie beides tolerieren und je nach Typ des Operanden unterschiedliche Operationen durchführen. Für strikte Umwandlungsprozesse, die keine implizite Konvertierung vom anderen Typ zulassen, siehe [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Nummerische Umwandlung ist fast dieselbe wie die [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts unverändert zurückgegeben werden anstatt ein {{jsxref("TypeError")}} zu verursachen. Nummerische Umwandlung wird von allen arithmetischen Operatoren verwendet, da sie sowohl für Zahlen als auch für BigInts überladen sind. Die einzige Ausnahme ist [unäres Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), welches immer Zahlenumwandlung durchführt.

### Andere Umwandlungen

Alle Datentypen, außer Null, Undefined, und Symbol, haben ihren jeweiligen Umwandlungsprozess. Siehe [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [Booleanumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) und [Objektumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für mehr Details.

Wie Sie vielleicht bemerkt haben, gibt es drei unterschiedliche Wege, durch die Objekte in Primärwerte konvertiert werden können:

- [Primitive Umwandlung](#primitive_umwandlung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Nummerische Umwandlung](#nummerische_umwandlung), [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive]()` aufrufbar und muss einen Primärwert zurückgeben, während `valueOf` oder `toString` ignoriert werden, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses, wenn erfolgreich, ist das Ergebnis garantiert ein Primärwert. Der resultierende Primärwert unterliegt dann weiteren Umwandlungen, abhängig vom Kontext.

## Siehe auch

- [JavaScript Data Structures and Algorithms](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Computer Science in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
