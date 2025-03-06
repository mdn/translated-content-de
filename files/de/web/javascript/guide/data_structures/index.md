---
title: JavaScript-Datentypen und Datenstrukturen
slug: Web/JavaScript/Guide/Data_structures
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("More")}}

Programmiersprachen verfügen alle über eingebaute Datenstrukturen, diese unterscheiden sich jedoch oft von Sprache zu Sprache. Dieser Artikel versucht, die in JavaScript verfügbaren eingebauten Datenstrukturen und deren Eigenschaften aufzulisten. Diese können verwendet werden, um andere Datenstrukturen aufzubauen.

Der [Sprachenüberblick](/de/docs/Web/JavaScript/Guide/Language_overview) bietet eine ähnliche Zusammenfassung der üblichen Datentypen, jedoch mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://en.wikipedia.org/wiki/Dynamic_programming_language) Sprache mit [dynamischen Typen](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). Variablen in JavaScript sind nicht direkt mit einem bestimmten Wertetyp verbunden, und jede Variable kann (und darf) mit Werten aller Typen zugewiesen (und neu zugewiesen) werden:

```js
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript ist auch eine [schwach typisierte](https://en.wikipedia.org/wiki/Strong_and_weak_typing) Sprache, was bedeutet, dass sie implizite Typkonvertierungen zulässt, wenn eine Operation unpassende Typen beinhaltet, anstatt Typfehler zu erzeugen.

```js
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implizite Überführungen sind sehr praktisch, können jedoch subtile Fehler verursachen, wenn Überführungen dort passieren, wo sie nicht erwartet werden, oder wo erwartet wird, dass sie in die andere Richtung passieren (zum Beispiel von String zu Nummer anstatt von Nummer zu String). Für [Symbole](#symbol-typ) und [BigInts](#bigint-typ) hat JavaScript absichtlich bestimmte implizite Typkonvertierungen nicht zugelassen.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren {{Glossary("Immutable", "unveränderliche")}} Werte, die direkt auf der niedrigsten Ebene der Sprache dargestellt werden. Wir beziehen uns auf Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), können durch den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)-Operator getestet werden. `typeof null` gibt `"object"` zurück, daher muss `=== null` verwendet werden, um auf `null` zu testen.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), haben entsprechende Objekt-Wrapper-Typen, die nützliche Methoden zum Arbeiten mit den primitiven Werten bereitstellen. Zum Beispiel bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number)-Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft eines primitiven Wertes zugegriffen wird, umhüllt JavaScript den Wert automatisch mit dem entsprechenden Wrapper-Objekt und greift stattdessen auf die Eigenschaft des Objekts zu. Das Zugreifen auf eine Eigenschaft von `null` oder `undefined` wirft jedoch eine `TypeError`-Ausnahme, was die Einführung des [optionalen Verkettungsoperators](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) erforderlich machte.

| Typ                         | `typeof` Rückgabewert | Objekt-Wrapper        |
| --------------------------- | --------------------- | --------------------- |
| [Null](#null-typ)           | `"object"`            | N/A                   |
| [Undefined](#undefined-typ) | `"undefined"`         | N/A                   |
| [Boolean](#boolean-typ)     | `"boolean"`           | {{jsxref("Boolean")}} |
| [Number](#number-typ)       | `"number"`            | {{jsxref("Number")}}  |
| [BigInt](#bigint-typ)       | `"bigint"`            | {{jsxref("BigInt")}}  |
| [String](#string-typ)       | `"string"`            | {{jsxref("String")}}  |
| [Symbol](#symbol-typ)       | `"symbol"`            | {{jsxref("Symbol")}}  |

Die Referenzseiten der Objekt-Wrapper-Klassen enthalten mehr Informationen über die verfügbaren Methoden und Eigenschaften für jeden Typ sowie detaillierte Beschreibungen zu den Semantiken der primitiven Typen selbst.

### Null-Typ

Der Null-Typ wird genau durch einen Wert bewohnt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined-Typ

Der Undefined-Typ wird genau durch einen Wert bewohnt: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzeptionell zeigt `undefined` die Abwesenheit eines _Wertes_ an, während `null` das Fehlen eines _Objekts_ kennzeichnet (was auch eine Ausrede für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) sein könnte). Die Sprache setzt normalerweise `undefined` als Standardwert, wenn etwas keinen Wert hat:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return)-Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt-](/de/docs/Web/JavaScript/Reference/Global_Objects/Object)Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablendeklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird in der Kernsprache viel seltener verwendet. Der wichtigste Ort ist das Ende der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) — folglich akzeptieren oder geben Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}} usw., `null` statt `undefined` zurück.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), aber `undefined` ist ein normales [Identifikator](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), das zufällig eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht neu definiert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}}-Typ stellt eine logische Entität dar und wird von zwei Werten bewohnt: `true` und `false`.

Boolesche Werte werden üblicherweise für bedingte Operationen verwendet, einschließlich [ternärer Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while) usw.

### Number-Typ

Der {{jsxref("Number")}}-Typ ist ein [doppelter 64-Bit-Gleitkommawert im IEEE 754-Format](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Er kann positive Gleitkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Gleitkommazahlen derselben Größenordnung speichern, jedoch kann er ganze Zahlen nur im Bereich von -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) sicher speichern. Außerhalb dieses Bereichs kann JavaScript ganze Zahlen nicht mehr sicher darstellen; sie werden stattdessen im doppelten Gleitkomma-Format angenähert. Sie können überprüfen, ob eine Zahl innerhalb des Bereichs der sicheren Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch umgewandelt:

- Positive Werte größer als {{jsxref("Number.MAX_VALUE")}} werden in `+Infinity` umgewandelt.
- Positive Werte kleiner als {{jsxref("Number.MIN_VALUE")}} werden in `+0` umgewandelt.
- Negative Werte kleiner als -{{jsxref("Number.MAX_VALUE")}} werden in `-Infinity` umgewandelt.
- Negative Werte größer als -{{jsxref("Number.MIN_VALUE")}} werden in `-0` umgewandelt.

`+Infinity` und `-Infinity` verhalten sich ähnlich wie mathematische Unendlichkeit, jedoch mit einigen kleinen Unterschieden; siehe {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Number-Typ hat nur einen Wert mit mehreren Darstellungen: `0` wird sowohl als `-0` als auch als `+0` dargestellt (wobei `0` ein Alias für `+0` ist). In der Praxis gibt es fast keinen Unterschied zwischen den verschiedenen Darstellungen; zum Beispiel ist `+0 === -0` `true`. Sie können dies jedoch bemerken, wenn Sie durch null teilen:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**icht **e**ine **Z**ahl") ist eine spezielle Art eines Zahlenwertes, der typischerweise auftritt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der sich nicht selbst gleich ist.

Obwohl eine Zahl konzeptionell ein "mathematischer Wert" ist und immer implizit im Gleitkomma-Format codiert ist, bietet JavaScript [bitweise Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators). Bei der Anwendung bitweiser Operatoren wird die Zahl zuerst in eine 32-Bit-Ganzzahl umgewandelt.

> [!NOTE]
> Obwohl bitweise Operatoren verwendet _werden können_, um mehrere Boolesche Werte in einer einzigen Zahl durch [Bitmaskierung](https://en.wikipedia.org/wiki/Mask_%28computing%29) darzustellen, wird dies normalerweise als schlechte Praxis angesehen. JavaScript bietet andere Möglichkeiten, um eine Menge von Booleschen Werten darzustellen (wie ein Array von Booleschen, oder ein Objekt mit Booleschen Werten, die benannten Eigenschaften zugewiesen sind). Bitmaskierung neigt auch dazu, den Code weniger lesbar, verständlich und wartbar zu machen.

Es kann notwendig sein, solche Techniken in sehr beschränkten Umgebungen zu verwenden, wie beim Umgang mit den Einschränkungen des lokalen Speichers oder in extremen Fällen (wie wenn jedes Bit über das Netzwerk zählt). Diese Technik sollte nur in Betracht gezogen werden, wenn es das letzte Mittel ist, das zur Optimierung der Größe ergriffen werden kann.

### BigInt-Typ

Der {{jsxref("BigInt")}}-Typ ist ein numerischer primitiver Typ in JavaScript, der ganze Zahlen mit beliebiger Größe darstellen kann. Mit BigInts können Sie große Zahlen sicher speichern und mit ihnen operieren, selbst über die Grenze sicherer Ganzzahlen ({{jsxref("Number.MAX_SAFE_INTEGER")}}) für Zahlen hinaus.

Ein BigInt wird erstellt, indem `n` an das Ende einer ganzen Zahl angehängt oder die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)-Funktion aufgerufen wird.

Dieses Beispiel zeigt, wo das Erhöhen von {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis liefert:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, einschließlich `+`, `*`, `-`, `**`, und `%` — der einzige verbotene Operator ist [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu einer Zahl mit demselben mathematischen Wert, aber es ist [lose](/de/docs/Web/JavaScript/Reference/Operators/Equality) so.

BigInt-Werte sind weder immer präziser noch immer unpräziser als Zahlen, da BigInts keine Bruchzahlen darstellen können, aber große Ganzzahlen genauer darstellen können. Kein Typ übernimmt den anderen, und sie sind nicht gegenseitig austauschbar. Ein {{jsxref("TypeError")}} wird geworfen, wenn BigInt-Werte in arithmetischen Ausdrücken mit regulären Zahlen gemischt oder wenn sie [implizit konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden.

### String-Typ

Der {{jsxref("String")}}-Typ stellt Textdaten dar und wird als eine Sequenz von 16-Bit-unsigned-Integer-Werten codiert, die [UTF-16-Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen. Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich an Index `0`, das nächste an Index `1` usw. Die [Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) eines Strings ist die Anzahl der UTF-16-Codeeinheiten darin, was möglicherweise nicht der tatsächlichen Anzahl an Unicode-Zeichen entspricht; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)-Referenzseite für weitere Details.

JavaScript-Strings sind unveränderlich. Das bedeutet, dass es nach der Erstellung eines Strings nicht möglich ist, ihn zu ändern. String-Methoden erstellen neue Strings basierend auf dem Inhalt des aktuellen Strings — zum Beispiel:

- Ein Substring des Originals durch [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung von zwei Strings mittels des Verkettungsoperators (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Vorsicht vor "stringly-typing"-Ihres Codes!

Es kann verlockend sein, Strings zu verwenden, um komplexe Daten darzustellen. Dies bringt kurzfristige Vorteile:

- Es ist einfach, komplexe Strings durch Verkettung zu erstellen.
- Strings sind leicht zu debuggen (was Sie sehen, ist immer das, was im String enthalten ist).
- Strings sind der gemeinsame Nenner vieler APIs ([Eingabefelder](/de/docs/Web/API/HTMLInputElement), [lokale Speicher-](/de/docs/Web/API/Web_Storage_API)werte, [`fetch()`](/de/docs/Web/API/Window/fetch)-Antworten beim Verwenden von [`Response.text()`](/de/docs/Web/API/Response/text) usw.), und es kann verlockend sein, nur mit Strings zu arbeiten.

Mit Konventionen ist es möglich, beliebige Datenstrukturen in einem String darzustellen. Dies macht es jedoch nicht zu einer guten Idee. Beispielsweise könnte man mit einem Separator eine Liste emulieren (während ein JavaScript-Array besser geeignet wäre). Leider wird die Liste aufgebrochen, sobald der Separator in einem der "Listen"-Elemente verwendet wird. Ein Escape-Zeichen kann gewählt werden usw. All das erfordert Konventionen und schafft eine unnötige Wartungslast.

Verwenden Sie Strings für Textdaten. Wenn komplexe Daten dargestellt werden, _parsen_ Sie Strings und verwenden Sie die entsprechende Abstraktion.

### Symbol-Typ

Ein {{jsxref("Symbol")}} ist ein **einzigartiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel einer Objekteigenschaft verwendet werden (siehe unten). In einigen Programmiersprachen werden Symbole als "Atoms" bezeichnet. Der Zweck von Symbolen ist es, eindeutige Eigenschaftsschlüssel zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, der möglicherweise durch einen {{Glossary("Identifier", "Identifikator")}} referenziert wird. In JavaScript sind Objekte die einzigen {{Glossary("Mutable", "veränderbaren")}} Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind tatsächlich auch Objekte mit der zusätzlichen Fähigkeit, _aufrufbar_ zu sein.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften betrachtet werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird eine begrenzte Menge von Eigenschaften initialisiert; danach können Eigenschaften hinzugefügt und entfernt werden. Objekteigenschaften sind gleichbedeutend mit Schlüssel-Wert-Paaren. Eigenschaftsschlüssel sind entweder [Strings](#string-typ) oder [Symbole](#symbol-typ). Wenn andere Typen (wie Zahlen) zur Indizierung von Objekten verwendet werden, werden die Werte implizit in Strings umgewandelt. Eigenschaftswerte können Werte jeglichen Typs sein, einschließlich anderer Objekte, was den Aufbau komplexer Datenstrukturen ermöglicht.

Es gibt zwei Arten von Objekteigenschaften: Die [\_Daten-\_Eigenschaft](#daten-eigenschaft) und die [\_Zugriffs-\_Eigenschaft](#zugriffs-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedes Attribut wird intern von der JavaScript-Engine zugegriffen, aber Sie können sie über {{jsxref("Object.defineProperty()")}} festlegen oder über {{jsxref("Object.getOwnPropertyDescriptor()")}} lesen. Sie können mehr über die verschiedenen Nuancen auf der {{jsxref("Object.defineProperty()")}}-Seite lesen.

#### Daten-Eigenschaft

Daten-Eigenschaften verknüpfen einen Schlüssel mit einem Wert. Sie kann durch die folgenden Attribute beschrieben werden:

- `value`
  - : Der Wert, der durch einen Zugriff auf die Eigenschaft abgerufen wird. Kann jeder JavaScript-Wert sein.
- `writable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft durch Zuweisung geändert werden kann.
- `enumerable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) für Informationen darüber, wie Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft gelöscht oder in eine Zugriffs-Eigenschaft geändert werden kann und ob ihre Attribute geändert werden können.

#### Zugriffs-Eigenschaft

Verknüpft einen Schlüssel mit einer von zwei Zugriffs-Funktionen (`get` und `set`), um einen Wert abzurufen oder zu speichern.

> [!NOTE]
> Es ist wichtig zu erkennen, dass es sich um eine Zugriffs-_Eigenschaft_ handelt — nicht um eine Zugriffs-_Methode_. Wir können einem JavaScript-Objekt klassenähnliche Zugriffsverfahren geben, indem wir eine Funktion als Wert verwenden — aber das macht das Objekt nicht zu einer Klasse.

Eine Zugriffs-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste aufgerufen wird, um den Eigenschaftswert abzurufen, wann immer ein Zugriff auf den Wert erfolgt. Siehe auch [Get-Methoden](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument, das den zugewiesenen Wert enthält, aufgerufen wird. Wird ausgeführt, wann immer eine bestimmte Eigenschaft versucht wird, geändert zu werden. Siehe auch [Set-Methoden](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Eigentum von Eigenschaften](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) für Informationen darüber, wie Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein boolescher Wert, der anzeigt, ob die Eigenschaft gelöscht oder in eine Daten-Eigenschaft geändert werden kann und ob ihre Attribute geändert werden können.

Der [Prototyp](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) eines Objekts zeigt auf ein anderes Objekt oder auf `null` — es ist konzeptionell eine versteckte Eigenschaft des Objekts, die üblicherweise als `[[Prototype]]` dargestellt wird. Eigenschaften des Objekts `[[Prototype]]` können auch auf dem Objekt selbst abgerufen werden.

Objekte sind temporäre Schlüssel-Wert-Paare, daher werden sie häufig als Karten verwendet. Es können jedoch ergonomische, Sicherheits- und Leistungsprobleme auftreten. Verwenden Sie ein {{jsxref("Map")}}, um beliebige Daten zu speichern. Die [`Map`-Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion über die Vor- und Nachteile zwischen einfachen Objekten und Karten zur Speicherung von Schlüssel-Wert-Assoziationen.

### Daten

JavaScript bietet zwei Sätze von APIs zur Darstellung von Daten: das veraltete {{jsxref("Date")}}-Objekt und das moderne {{jsxref("Temporal")}}-Objekt. `Date` hat viele unerwünschte Designentscheidungen und sollte, wenn möglich, in neuem Code vermieden werden.

### Indexierte Sammlungen: Arrays und Typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, bei denen eine bestimmte Beziehung zwischen integer-alternierenden Eigenschaften und der `length`-Eigenschaft besteht.

Zusätzlich erben Arrays von `Array.prototype`, das eine Handvoll bequemer Methoden zur Manipulation von Arrays bereitstellt. Zum Beispiel sucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) einen Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) hängt ein Element an das Array an. Dies macht Arrays zu einem perfekten Kandidaten, um geordnete Listen darzustellen.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) bieten eine array-ähnliche Ansicht eines zugrunde liegenden binären Datenpuffers und bieten viele Methoden, die ähnliche Semantiken wie die Array-Gegenstücke haben. "Typisierte Arrays" ist ein Oberbegriff für eine Reihe von Datenstrukturen, einschließlich `Int8Array`, `Float32Array` usw. Lesen Sie die [Typisierte-Arrays-Seite](/de/docs/Web/JavaScript/Guide/Typed_arrays) für weitere Informationen. Typisierte Arrays werden häufig in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Schlüsselsammlungen: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen verwenden Objektverweise als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} repräsentieren eine Sammlung eindeutiger Werte, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Assoziationen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da Objekte jedoch nicht verglichen werden können (im Sinne von "<" "kleiner als", zum Beispiel), und die Engine ihre Hash-Funktion für Objekte nicht offenlegt, würde die Suchleistung notwendigerweise linear sein. Native Implementierungen von ihnen (einschließlich `WeakMap`s) können Suchleistungen haben, die etwa logarithmisch bis konstant sind.

Normalerweise könnte man, um Daten an einen DOM-Knoten zu binden, Eigenschaften direkt am Objekt festlegen oder `data-*`-Attribute verwenden. Dies hat den Nachteil, dass die Daten für jedes Skript im selben Kontext verfügbar sind. `Map`s und `WeakMap`s machen es einfach, Daten _privat_ an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben das Speichern nur von garbage-collectierbaren Werten als Schlüssel, die entweder Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel können selbst dann gesammelt werden, wenn sie sich noch in der Sammlung befinden. Sie werden speziell für [Speicherverbrauchsoptimierung](/de/docs/Web/JavaScript/Guide/Memory_management#data_structures_aiding_memory_management) verwendet.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bjekt **N**otation) ist ein leichtgewichtiges Datenformat zum Austausch von Daten, das aus JavaScript abgeleitet ist, aber von vielen Programmiersprachen verwendet wird. JSON baut universelle Datenstrukturen auf, die zwischen verschiedenen Umgebungen und sogar über Sprachgrenzen hinweg übertragen werden können. Siehe {{jsxref("JSON")}} für weitere Details.

### Weitere Objekte in der Standardbibliothek

JavaScript hat eine Standardbibliothek eingebauter Objekte. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects), um mehr über die eingebauten Objekte zu erfahren.

## Typkonvertierung

Wie oben erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Dies bedeutet, dass Sie oft einen Wert eines Typs verwenden können, wo ein anderer Typ erwartet wird, und die Sprache wird ihn für Sie in den richtigen Typ umwandeln. Dazu definiert JavaScript eine Handvoll von Konvertierungsregeln.

### Primitive Konvertierung

Der [primitive Konvertierungsprozess](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird angewendet, wo ein primitiver Wert erwartet wird, aber es gibt keine starke Präferenz dafür, welcher tatsächliche Typ es sein sollte. Dies ist normalerweise der Fall, wenn ein [String](#string-typ), eine [Zahl](#number-typ) oder ein [BigInt](#bigint-typ) gleichermaßen akzeptabel sind. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)-Konstruktor, wenn er ein Argument erhält, das keine `Date`-Instanz ist — Strings repräsentieren Datumsstrings, während Numbers Zeitstempel darstellen.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition)-Operator — wenn ein Operand ein String ist, wird eine String-Verkettung durchgeführt; andernfalls wird eine numerische Addition durchgeführt.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality)-Operator — wenn ein Operand ein Primitive ist, während der andere ein Objekt ist, wird das Objekt in einen primitiven Wert ohne bevorzugten Typ konvertiert.

Diese Operation führt keine Konvertierung durch, wenn der Wert bereits ein Primitive ist. Objekte werden in Primitive konvertiert, indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (mit `"default"` als Hinweis), `valueOf()`, und `toString()`-Methoden in dieser Reihenfolge aufgerufen werden. Beachten Sie, dass die primitive Konvertierung `valueOf()` vor `toString()` aufruft, was dem Verhalten der [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ähnlich ist, sich jedoch von der [Stringkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) unterscheidet.

Die Methode `[Symbol.toPrimitive]()` muss, falls vorhanden, ein Primitive zurückgeben — die Rückgabe eines Objekts führt zu einem {{jsxref("TypeError")}}. Bei `valueOf()` und `toString()`, wenn eine ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der Rückgabewert der anderen verwendet; wenn keiner vorhanden ist oder keiner ein Primitive zurückgibt, wird ein {{jsxref("TypeError")}} geworfen. Zum Beispiel im folgenden Code:

```js
console.log({} + []); // "[object Object]"
```

Weder `{}` noch `[]` haben eine `[Symbol.toPrimitive]()`-Methode. Sowohl `{}` als auch `[]` erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, die das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird er ignoriert. Daher wird stattdessen `toString()` aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, sodass das Ergebnis ihre Verkettung ist: `"[object Object]"`.

Die Methode `[Symbol.toPrimitive]()` hat immer Vorrang bei der Konvertierung in einen beliebigen primitiven Typ. Primitive Konvertierung verhält sich im Allgemeinen wie die Zahlenkonvertierung, da `valueOf()` mit Priorität aufgerufen wird; jedoch können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()`-Methoden jeden primitiven Wert zurückgeben. {{jsxref("Date")}} und {{jsxref("Symbol")}}-Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()`-Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt den `"default"`-Hinweis, als wäre es `"string"`, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Numerische Konvertierung

Es gibt zwei numerische Typen: [Number](#number-typ) und [BigInt](#bigint-typ). Manchmal erwartet die Sprache speziell eine Zahl oder ein BigInt (wie {{jsxref("Array.prototype.slice()")}}, wo der Index eine Zahl sein muss); andere Male kann sie beide akzeptieren und führt unterschiedliche Operationen abhängig vom Typ des Operanden durch. Für strikte Konvertierungsprozesse, die keine implizite Konvertierung vom anderen Typ zulassen, siehe [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Numerische Konvertierung ist fast gleich wie [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts unverändert zurückgegeben werden, anstatt einen {{jsxref("TypeError")}} zu verursachen. Numerische Konvertierung wird von allen arithmetischen Operatoren verwendet, da sie sowohl für Zahlen als auch für BigInts überladen sind. Die einzige Ausnahme ist das [unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), das immer eine Zahlenkonvertierung durchführt.

### Andere Konvertierungen

Alle Datentypen, außer Null, Undefined und Symbol, haben ihre jeweiligen Konvertierungsprozesse. Siehe [Stringkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [Boolesche Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion), und [Objektkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für weitere Details.

Wie Sie vielleicht bemerkt haben, gibt es drei unterschiedliche Pfade, durch die Objekte in Primitive konvertiert werden können:

- [Primitive Konvertierung](#primitive_konvertierung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Numerische Konvertierung](#numerische_konvertierung), [Zahlenkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt-Konvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [Stringkonvertierung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive]()`, wenn vorhanden, aufrufbar sein und ein Primitive zurückgeben, während `valueOf` oder `toString` ignoriert werden, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses, wenn erfolgreich, ist das Ergebnis garantiert ein Primitive. Das resultierende Primitive unterliegt dann weiteren Konvertierungen, abhängig vom Kontext.

## Siehe auch

- [JavaScript-Datenstrukturen und-Algorithmen](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Informatik in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
