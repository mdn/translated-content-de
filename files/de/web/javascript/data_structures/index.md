---
title: JavaScript-Datentypen und Datenstrukturen
slug: Web/JavaScript/Data_structures
l10n:
  sourceCommit: 0b0cac4814d37f8a62d69de1b0d76dbe20d085ec
---

{{jsSidebar("More")}}

Programmiersprachen verfügen alle über integrierte Datenstrukturen, die jedoch oft von Sprache zu Sprache unterschiedlich sind. Dieser Artikel versucht, die in JavaScript verfügbaren integrierten Datenstrukturen und ihre Eigenschaften aufzulisten. Diese können verwendet werden, um andere Datenstrukturen zu bauen.

Die [language overview](/de/docs/Web/JavaScript/Language_overview) bietet eine ähnliche Zusammenfassung der allgemeinen Datentypen, jedoch mit mehr Vergleichen zu anderen Sprachen.

## Dynamische und schwache Typisierung

JavaScript ist eine [dynamische](https://en.wikipedia.org/wiki/Dynamic_programming_language) Sprache mit [dynamischen Typen](https://en.wikipedia.org/wiki/Type_system#DYNAMIC). Variablen in JavaScript sind nicht direkt mit einem bestimmten Werttyp verbunden, und jede Variable kann Werte aller Typen zugewiesen (und neu zugewiesen) bekommen:

```js
let foo = 42; // foo ist jetzt eine Zahl
foo = "bar"; // foo ist jetzt ein String
foo = true; // foo ist jetzt ein Boolean
```

JavaScript ist auch eine [schwach typisierte](https://en.wikipedia.org/wiki/Strong_and_weak_typing) Sprache, was bedeutet, dass es implizite Typkonvertierungen erlaubt, wenn eine Operation unvereinbare Typen umfasst, anstatt Typfehler auszulösen.

```js
const foo = 42; // foo ist eine Zahl
const result = foo + "1"; // JavaScript zwingt foo, ein String zu werden, damit es mit dem anderen Operand verkettet werden kann
console.log(result); // 421
```

Implizite Konvertierungen sind sehr praktisch, können jedoch subtile Fehler erzeugen, wenn Konvertierungen durchgeführt werden, wo sie nicht erwartet werden, oder wenn erwartet wird, dass sie in die andere Richtung stattfinden (z.B. String zu Zahl anstelle von Zahl zu String). Für [Symbole](#symbol_typ) und [BigInts](#bigint_typ) hat JavaScript bestimmte implizite Typkonvertierungen absichtlich verboten.

## Primitive Werte

Alle Typen außer [Object](#objekte) definieren [unveränderliche](/de/docs/Glossary/Immutable) Werte, die direkt auf der niedrigsten Ebene der Sprache repräsentiert werden. Wir beziehen uns auf Werte dieser Typen als _primitive Werte_.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null), können durch den [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof) Operator getestet werden. `typeof null` gibt `"object"` zurück, daher muss man `=== null` verwenden, um auf `null` zu testen.

Alle primitiven Typen, außer [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), haben ihre entsprechenden Objekt-Wrapper-Typen, die nützliche Methoden zum Arbeiten mit den primitivem Werten bereitstellen. Zum Beispiel bietet das [`Number`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number) Objekt Methoden wie [`toExponential()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential). Wenn auf eine Eigenschaft auf einem primitiven Wert zugegriffen wird, umschließt JavaScript den Wert automatisch in das entsprechende Wrapper-Objekt und greift stattdessen auf die Eigenschaft des Objekts zu. Auf `null` oder `undefined` auf eine Eigenschaft zuzugreifen, führt jedoch zu einem `TypeError`-Ausnahmefehler, was die Einführung des [optional chaining](/de/docs/Web/JavaScript/Reference/Operators/Optional_chaining) Operators notwendig macht.

| Typ                           | `typeof` Rückgabewert | Objekt-Wrapper         |
| ----------------------------- | --------------------- | ---------------------- |
| [Null](#null-typ)            | `"object"`            | N/A                    |
| [Undefined](#undefined_typ)  | `"undefined"`         | N/A                    |
| [Boolean](#boolean-typ)      | `"boolean"`           | {{jsxref("Boolean")}}  |
| [Number](#number_typ)        | `"number"`            | {{jsxref("Number")}}   |
| [BigInt](#bigint_typ)        | `"bigint"`            | {{jsxref("BigInt")}}   |
| [String](#string_typ)        | `"string"`            | {{jsxref("String")}}   |
| [Symbol](#symbol_typ)        | `"symbol"`            | {{jsxref("Symbol")}}   |

Die Referenzseiten der Objekt-Wrapper-Klassen enthalten weitere Informationen über die Methoden und Eigenschaften, die für jeden Typ verfügbar sind, sowie ausführliche Beschreibungen der Semantik der primitiven Typen selbst.

### Null-Typ

Der Null-Typ wird genau von einem Wert bewohnt: [`null`](/de/docs/Web/JavaScript/Reference/Operators/null).

### Undefined Typ

Der Undefined-Typ wird genau von einem Wert bewohnt: [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined).

Konzeptionell zeigt `undefined` das Fehlen eines _Wertes_ an, während `null` das Fehlen eines _Objekts_ anzeigt (was auch als Entschuldigung für [`typeof null === "object"`](/de/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null) dienen könnte). Die Sprache setzt normalerweise `undefined` als Standardwert ein, wenn etwas keinen Wert hat:

- Eine [`return`](/de/docs/Web/JavaScript/Reference/Statements/return) Anweisung ohne Wert (`return;`) gibt implizit `undefined` zurück.
- Der Zugriff auf eine nicht existierende [Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object) Eigenschaft (`obj.iDontExist`) gibt `undefined` zurück.
- Eine Variablen-Deklaration ohne Initialisierung (`let x;`) initialisiert die Variable implizit mit `undefined`.
- Viele Methoden, wie z.B. {{jsxref("Array.prototype.find()")}} und {{jsxref("Map.prototype.get()")}}, geben `undefined` zurück, wenn kein Element gefunden wird.

`null` wird viel seltener in der Kernsprache verwendet. Der wichtigste Ort ist das Ende der [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) — folglich akzeptieren oder liefern Methoden, die mit Prototypen interagieren, wie {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}}, etc., `null` anstelle von `undefined`.

`null` ist ein [Schlüsselwort](/de/docs/Web/JavaScript/Reference/Lexical_grammar#keywords), aber `undefined` ist ein normaler [Bezeichner](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers), der zufällig eine globale Eigenschaft ist. In der Praxis ist der Unterschied gering, da `undefined` nicht umdefiniert oder überschattet werden sollte.

### Boolean-Typ

Der {{jsxref("Boolean")}} Typ repräsentiert eine logische Entität und wird von zwei Werten bewohnt: `true` und `false`.

Boolean-Werte werden normalerweise für bedingte Operationen verwendet, einschließlich [ternärer Operatoren](/de/docs/Web/JavaScript/Reference/Operators/Conditional_operator), [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/de/docs/Web/JavaScript/Reference/Statements/while), etc.

### Number Typ

Der {{jsxref("Number")}} Typ ist ein [Doppelpunkt-genaue 64-Bit-Binärformat IEEE 754 Wert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding). Er kann positive Gleitkommazahlen zwischen 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) und 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxref("Number.MAX_VALUE")}}) sowie negative Gleitkommazahlen gleicher Größenordnung speichern, jedoch können ganze Zahlen nur im Bereich von -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) bis 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) sicher gespeichert werden. Außerhalb dieses Bereichs kann JavaScript ganze Zahlen nicht mehr sicher darstellen; sie werden stattdessen durch eine Doppelpunkt-genaue Gleitkomma-Annäherung dargestellt. Sie können überprüfen, ob eine Zahl innerhalb des Bereichs sicherer Ganzzahlen liegt, indem Sie {{jsxref("Number.isSafeInteger()")}} verwenden.

Werte außerhalb des darstellbaren Bereichs werden automatisch konvertiert:

- Positive Werte größer als {{jsxref("Number.MAX_VALUE")}} werden zu `+Infinity` konvertiert.
- Positive Werte kleiner als {{jsxref("Number.MIN_VALUE")}} werden zu `+0` konvertiert.
- Negative Werte kleiner als -{{jsxref("Number.MAX_VALUE")}} werden zu `-Infinity` konvertiert.
- Negative Werte größer als -{{jsxref("Number.MIN_VALUE")}} werden zu `-0` konvertiert.

`+Infinity` und `-Infinity` verhalten sich ähnlich wie mathematisches Unendlich, jedoch mit einigen geringfügigen Unterschieden; siehe {{jsxref("Number.POSITIVE_INFINITY")}} und {{jsxref("Number.NEGATIVE_INFINITY")}} für Details.

Der Number-Typ hat nur einen Wert mit mehreren Darstellungen: `0` wird sowohl als `-0` als auch `+0` dargestellt (wobei `0` ein Alias für `+0` ist). In der Praxis gibt es kaum Unterschiede zwischen den verschiedenen Darstellungen; zum Beispiel ist `+0 === -0` `true`. Sie können dies jedoch bemerken, wenn Sie durch null dividieren:

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**icht **e**ine **Z**ahl") ist eine spezielle Art von Zahlenwert, die typischerweise auftritt, wenn das Ergebnis einer arithmetischen Operation nicht als Zahl ausgedrückt werden kann. Es ist auch der einzige Wert in JavaScript, der nicht gleich sich selbst ist.

Obwohl eine Zahl konzeptionell ein "mathematischer Wert" ist und immer implizit im Gleitkomma-Format kodiert ist, stellt JavaScript [bitweise Operatoren](/de/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators) bereit. Bei Anwendung bitweiser Operatoren wird die Zahl zuerst in eine 32-Bit-Ganzzahl umgewandelt.

> [!NOTE]
> Obwohl bitweise Operatoren _können_ verwendet werden, um mehrere Boolean-Werte innerhalb einer einzigen Zahl mithilfe von [Bitmaskierung](https://en.wikipedia.org/wiki/Mask_%28computing%29) darzustellen, wird dies normalerweise als schlechte Praxis angesehen. JavaScript bietet andere Möglichkeiten, um eine Menge von Booleans darzustellen (wie ein Array von Booleans oder ein Objekt mit Boolean-Werten, die benannten Eigenschaften zugeordnet sind). Bitmaskierung neigt auch dazu, den Code schwerer lesbar, verständlich und wartbar zu machen.

Es kann notwendig sein, solche Techniken in sehr eingeschränkten Umgebungen zu verwenden, z.B. wenn man mit den Beschränkungen des lokalen Speichers fertig werden muss, oder in extremen Fällen (wie wenn jedes Bit im Netzwerk zählt). Diese Technik sollte nur in Betracht gezogen werden, wenn sie die letzte Maßnahme ist, die zur Optimierung der Größe ergriffen werden kann.

### BigInt Typ

Der {{jsxref("BigInt")}} Typ ist ein numerischer primitiver Typ in JavaScript, der ganze Zahlen mit beliebigem Umfang darstellen kann. Mit BigInts können Sie große Ganzzahlen sicher speichern und bearbeiten, sogar jenseits des sicheren Ganzzahlenlimits ({{jsxref("Number.MAX_SAFE_INTEGER")}}) für Zahlen.

Ein BigInt wird erzeugt, indem ein `n` an das Ende einer ganzen Zahl angehängt oder die [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) Funktion aufgerufen wird.

Dieses Beispiel zeigt, wo das Inkrementieren der {{jsxref("Number.MAX_SAFE_INTEGER")}} das erwartete Ergebnis liefert:

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // falsch, weil 9007199254740992n und 9007199254740993n ungleich sind

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // wahr, weil beide 9007199254740992 sind
```

Sie können die meisten Operatoren verwenden, um mit BigInts zu arbeiten, darunter `+`, `*`, `-`, `**` und `%` — der einzige verbotene ist [`>>>`](/de/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift). Ein BigInt ist nicht [streng gleich](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) zu einer Zahl mit dem gleichen mathematischen Wert, aber [nicht strikt](/de/docs/Web/JavaScript/Reference/Operators/Equality) schon.

BigInt-Werte sind weder immer präziser noch immer ungenauer als Zahlen, da BigInts keine gebrochenen Zahlen darstellen können, aber große Ganzzahlen genauer darstellen können. Keiner der Typen impliziert den anderen, und sie sind nicht wechselseitig austauschbar. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn BigInt-Werte in arithmetischen Ausdrücken mit normalen Zahlen gemischt werden oder wenn sie [implizit umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden sollen.

### String Typ

Der {{jsxref("String")}} Typ repräsentiert Textdaten und wird als eine Sequenz von 16-Bit-Unsigned-Integer-Werten kodiert, die [UTF-16 Codeeinheiten](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) darstellen. Jedes Element im String nimmt eine Position im String ein. Das erste Element befindet sich an Index `0`, das nächste an Index `1` usw. Die [Länge](/de/docs/Web/JavaScript/Reference/Global_Objects/String/length) eines Strings ist die Anzahl der UTF-16 Codeeinheiten, die er enthält, was möglicherweise nicht mit der tatsächlichen Anzahl an Unicode-Zeichen übereinstimmt; siehe die [`String`](/de/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) Referenzseite für mehr Details.

JavaScript-Strings sind unveränderlich. Das bedeutet, dass es nicht möglich ist, einen einmal erstellten String zu ändern. String-Methoden erzeugen neue Strings basierend auf dem Inhalt des aktuellen Strings — zum Beispiel:

- Einen Teilstring des Originals mit [`substring()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/substring).
- Eine Verkettung von zwei Strings mit dem Verkettungsoperator (`+`) oder [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/String/concat).

#### Vorsicht bei "stringly-typing" Ihres Codes!

Es kann verlockend sein, Strings zu verwenden, um komplexe Daten darzustellen. Dies hat kurzfristige Vorteile:

- Es ist einfach, komplexe Strings durch Verkettung zu erstellen.
- Strings sind einfach zu debuggen (was gedruckt wird, ist immer das, was im String ist).
- Strings sind der gemeinsame Nenner vieler APIs ([Input-Felder](/de/docs/Web/API/HTMLInputElement), [lokale Speicher](/de/docs/Web/API/Web_Storage_API) Werte, [`fetch()`](/de/docs/Web/API/Window/fetch) Antworten bei Verwendung von {{domxref("Response.text()")}}, etc.) und es kann verlockend sein, nur mit Strings zu arbeiten.

Mit Konventionen ist es möglich, jede Datenstruktur in einem String darzustellen. Das macht es jedoch nicht zu einer guten Idee. Man könnte zum Beispiel mit einem Trennzeichen eine Liste emulieren (während ein JavaScript-Array besser geeignet wäre). Unglücklicherweise wird die Liste gebrochen, wenn das Trennzeichen in einem der "Listen"-Elemente verwendet wird. Ein Escape-Zeichen kann gewählt werden, etc. All dies erfordert Konventionen und erzeugt eine unnötige Wartungslast.

Verwenden Sie Strings für Textdaten. Beim Darstellen komplexer Daten, _parsen_ Sie Strings und verwenden Sie die passende Abstraktion.

### Symbol Typ

Ein {{jsxref("Symbol")}} ist ein **eindeutiger** und **unveränderlicher** primitiver Wert und kann als Schlüssel einer Objekt-Eigenschaft verwendet werden (siehe unten). In einigen Programmiersprachen werden Symbole als "Atoms" bezeichnet. Der Zweck von Symbolen ist es, eindeutige Schlüssel für Eigenschaften zu erstellen, die garantiert nicht mit Schlüsseln aus anderem Code kollidieren.

## Objekte

In der Informatik ist ein Objekt ein Wert im Speicher, der möglicherweise durch einen [Bezeichner](/de/docs/Glossary/Identifier) referenziert wird. In JavaScript sind Objekte die einzigen [veränderlichen](/de/docs/Glossary/Mutable) Werte. [Funktionen](/de/docs/Web/JavaScript/Reference/Functions) sind in der Tat auch Objekte mit der zusätzlichen Fähigkeit, _aufrufbar_ zu sein.

### Eigenschaften

In JavaScript können Objekte als eine Sammlung von Eigenschaften angesehen werden. Mit der [Objektliteral-Syntax](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) wird eine begrenzte Menge von Eigenschaften initialisiert; danach können Eigenschaften hinzugefügt und entfernt werden. Objekteigenschaften sind gleichbedeutend mit Schlüssel-Wert-Paaren. Eigenschaftsschlüssel sind entweder [Strings](#string_typ) oder [Symbole](#symbol_typ). Wenn andere Typen (wie Zahlen) verwendet werden, um Objekte zu indexieren, werden die Werte implizit in Strings umgewandelt. Eigenschaftswerte können Werte eines beliebigen Typs sein, einschließlich anderer Objekte, was den Aufbau komplexer Datenstrukturen ermöglicht.

Es gibt zwei Arten von Objekteigenschaften: Die [_Daten_-Eigenschaft](#daten-eigenschaft) und die [_Accessor_-Eigenschaft](#accessor-eigenschaft). Jede Eigenschaft hat entsprechende _Attribute_. Jedes Attribut wird intern von der JavaScript-Engine abgerufen, aber Sie können sie durch {{jsxref("Object.defineProperty()")}} festlegen, oder durch {{jsxref("Object.getOwnPropertyDescriptor()")}} auslesen. Mehr über die verschiedenen Nuancen können Sie auf der Seite {{jsxref("Object.defineProperty()")}} lesen.

#### Daten-Eigenschaft

Daten-Eigenschaften verknüpfen einen Schlüssel mit einem Wert. Sie kann durch die folgenden Attribute beschrieben werden:

- `value`
  - : Der Wert, der bei einem get-Zugriff auf die Eigenschaft abgerufen wird. Kann jeder JavaScript-Wert sein.
- `writable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft mit einer Zuweisung geändert werden kann.
- `enumerable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) für Informationen darüber, wie Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft gelöscht werden kann, in eine Accessor-Eigenschaft geändert werden kann und ob ihre Attribute geändert werden können.

#### Accessor-Eigenschaft

Assoziiert einen Schlüssel mit einer von zwei Accessor-Funktionen (`get` und `set`), um einen Wert abzurufen oder zu speichern.

> [!NOTE]
> Es ist wichtig zu erkennen, dass es sich um eine Accessor-_Eigenschaft_ handelt — nicht um eine Accessor-_Methode_. Wir können einem JavaScript-Objekt klasseähnliche Zugriffe geben, indem wir eine Funktion als Wert verwenden — aber das macht das Objekt nicht zu einer Klasse.

Eine Accessor-Eigenschaft hat die folgenden Attribute:

- `get`
  - : Eine Funktion, die mit einer leeren Argumentliste aufgerufen wird, um den Eigenschaftswert abzurufen, wann immer ein get-Zugriff auf den Wert ausgeführt wird. Siehe auch [Getter](/de/docs/Web/JavaScript/Reference/Functions/get). Kann `undefined` sein.
- `set`
  - : Eine Funktion, die mit einem Argument aufgerufen wird, das den zugewiesenen Wert enthält. Wird ausgeführt, wann immer der Versuch unternommen wird, eine bestimmte Eigenschaft zu ändern. Siehe auch [Setter](/de/docs/Web/JavaScript/Reference/Functions/set). Kann `undefined` sein.
- `enumerable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft durch eine [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleife aufgezählt werden kann. Siehe auch [Aufzählbarkeit und Besitz von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) für Informationen darüber, wie Aufzählbarkeit mit anderen Funktionen und Syntaxen interagiert.
- `configurable`
  - : Ein Boolean-Wert, der angibt, ob die Eigenschaft gelöscht werden kann, in eine Daten-Eigenschaft geändert werden kann und ob ihre Attribute geändert werden können.

Der [Prototyp](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) eines Objekts verweist auf ein anderes Objekt oder `null` — es handelt sich konzeptionell um eine versteckte Eigenschaft des Objekts, die häufig als `[[Prototype]]` dargestellt wird. Eigenschaften des `[[Prototype]]` des Objekts können ebenfalls auf dem Objekt selbst abgerufen werden.

Objekte sind ad-hoc-Schlüssel-Wert-Paare, daher werden sie oft als Maps verwendet. Es können jedoch Ergonomie-, Sicherheits- und Leistungsprobleme auftreten. Verwenden Sie stattdessen eine {{jsxref("Map")}}, um beliebige Daten zu speichern. Die [`Map` Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) enthält eine detailliertere Diskussion der Vor- und Nachteile von einfachen Objekten und Maps zur Speicherung von Schlüssel-Wert-Zuordnungen.

### Daten

Beim Repräsentieren von Daten ist die beste Wahl, das eingebaute [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Dienstprogramm in JavaScript zu verwenden.

### Indexierte Sammlungen: Arrays und typisierte Arrays

[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sind reguläre Objekte, für die es eine bestimmte Beziehung zwischen ganzzahlig indizierten Eigenschaften und der `length` Eigenschaft gibt.

Zusätzlich erben Arrays von `Array.prototype`, das eine Handvoll praktischer Methoden zur Manipulation von Arrays bietet. Zum Beispiel sucht [`indexOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) einen Wert im Array und [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) fügt ein Element zum Array hinzu. Dies macht Arrays zu einer perfekten Wahl, um geordnete Listen darzustellen.

[Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) bieten eine array-ähnliche Ansicht eines zugrunde liegenden binären Datenpuffers und bieten viele Methoden, die ähnliche Semantik wie die Array-Gegenstücke haben. "Typisiertes Array" ist ein Oberbegriff für eine Reihe von Datenstrukturen, darunter `Int8Array`, `Float32Array`, usw. Lesen Sie die [typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Seite für mehr Informationen. Typisierte Arrays werden oft in Verbindung mit {{jsxref("ArrayBuffer")}} und {{jsxref("DataView")}} verwendet.

### Zuordnungssammlungen: Maps, Sets, WeakMaps, WeakSets

Diese Datenstrukturen verwenden Objektreferenzen als Schlüssel. {{jsxref("Set")}} und {{jsxref("WeakSet")}} stellen eine Sammlung einzigartiger Werte dar, während {{jsxref("Map")}} und {{jsxref("WeakMap")}} eine Sammlung von Schlüssel-Wert-Zuweisungen darstellen.

Sie könnten `Map`s und `Set`s selbst implementieren. Da jedoch Objekte nicht verglichen werden können (im Sinne von `<` "kleiner als", beispielsweise), und die Engine ihre Hash-Funktion für Objekte nicht offenlegt, wäre die Suchleistung notwendigerweise linear. Native Implementierungen von ihnen (einschließlich `WeakMap`s) können eine Suchleistung haben, die ungefähr logarithmisch bis konstantzeitig ist.

Normalerweise, um Daten an einen DOM-Knoten zu binden, könnte man direkt Eigenschaften des Objekts setzen oder `data-*` Attribute verwenden. Dies hat den Nachteil, dass die Daten jedem Skript im selben Kontext zugänglich sind. `Map`s und `WeakMap`s ermöglichen es, Daten _privat_ an ein Objekt zu binden.

`WeakMap` und `WeakSet` erlauben nur keys, die garbage-collection-fähige Werte sind, was entweder Objekte oder [nicht registrierte Symbole](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) sind, und die Schlüssel dürfen gesammelt werden, selbst wenn sie in der Sammlung verbleiben. Sie werden speziell für [Speichernutzung-Optimierung](/de/docs/Web/JavaScript/Memory_management#data_structures_aiding_memory_management) verwendet.

### Strukturierte Daten: JSON

JSON (**J**ava**S**cript **O**bject **N**otation) ist ein leichtgewichtiges Datenaustauschformat, das aus JavaScript abgeleitet ist, aber von vielen Programmiersprachen verwendet wird. JSON erstellt universelle Datenstrukturen, die zwischen verschiedenen Umgebungen und sogar über Sprachgrenzen hinweg übertragen werden können. Weitere Informationen finden Sie unter {{jsxref("JSON")}}.

### Weitere Objekte in der Standardbibliothek

JavaScript hat eine Standardbibliothek mit eingebauten Objekten. Lesen Sie die [Referenz](/de/docs/Web/JavaScript/Reference/Global_Objects), um mehr über die eingebauten Objekte zu erfahren.

## Typumwandlung

Wie oben erwähnt, ist JavaScript eine [schwach typisierte](#dynamische_und_schwache_typisierung) Sprache. Dies bedeutet, dass Sie oft einen Wert eines Typs verwenden können, wo ein anderer Typ erwartet wird, und die Sprache wird ihn für Sie in den richtigen Typ umwandeln. Dazu definiert JavaScript eine Handvoll Umwandlungsregeln.

### Primitive Umwandlung

Der [primitive Umwandlungsprozess](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) wird dort verwendet, wo ein primitiver Wert erwartet wird, aber es gibt keine starke Präferenz dafür, welcher der tatsächliche Typ sein sollte. Dies ist normalerweise, wenn ein [String](#string_typ), eine [Nummer](#number_typ) oder ein [BigInt](#bigint_typ) gleichermaßen akzeptabel ist. Zum Beispiel:

- Der [`Date()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) Konstruktor, wenn er ein Argument erhält, das keine `Date` Instanz ist — Strings repräsentieren Datums-Strings, während Zahlen Zeitstempel darstellen.
- Der [`+`](/de/docs/Web/JavaScript/Reference/Operators/Addition) Operator — wenn ein Operand ein String ist, wird eine Stringverkettung durchgeführt; andernfalls wird eine numerische Addition durchgeführt.
- Der [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) Operator — wenn ein Operand ein primitiver Typ ist, während der andere ein Objekt ist, wird das Objekt mit keinem bevorzugten Typ in einen primitiven Wert konvertiert.

Diese Operation führt keine Konvertierung durch, wenn der Wert bereits ein primitiver ist. Objekte werden in primitive Werte umgewandelt, indem ihre [`[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) Methode (mit `"default"` als Hinweis), `valueOf()` und `toString()` Methoden in dieser Reihenfolge aufgerufen werden. Beachten Sie, dass die primitive Umwandlung `valueOf()` vor `toString()` aufruft, was dem Verhalten der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) ähnelt, jedoch von der [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) unterscheidet.

Die `[Symbol.toPrimitive]()` Methode muss, wenn vorhanden, ein primitiver Typ zurückgeben — die Rückgabe eines Objekts führt zu einem {{jsxref("TypeError")}}. Für `valueOf()` und `toString()`, wenn eine ein Objekt zurückgibt, wird der Rückgabewert ignoriert und der Rückgabewert der anderen verwendet; wenn keine vorhanden ist oder keine ein Primitiv zurückgibt, wird ein {{jsxref("TypeError")}} ausgelöst. Zum Beispiel im folgenden Code:

```js
console.log({} + []); // "[object Object]"
```

Weder `{}` noch `[]` haben eine `[Symbol.toPrimitive]()` Methode. Beide, `{}` und `[]`, erben `valueOf()` von {{jsxref("Object.prototype.valueOf")}}, die das Objekt selbst zurückgibt. Da der Rückgabewert ein Objekt ist, wird er ignoriert. Daher wird stattdessen `toString()` aufgerufen. [`{}.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) gibt `"[object Object]"` zurück, während [`[].toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/toString) `""` zurückgibt, daher ist das Ergebnis deren Verkettung: `"[object Object]"`.

Die `[Symbol.toPrimitive]()` Methode hat immer Vorrang bei der Konvertierung in jeden primitiven Typ. Primitive Umwandlung verhält sich im Allgemeinen wie Zahlumwandlung, weil `valueOf()` in der Priorität aufgerufen wird; allerdings können Objekte mit benutzerdefinierten `[Symbol.toPrimitive]()` Methoden wählen, einen beliebigen Primitiv zurückzugeben. {{jsxref("Date")}} und {{jsxref("Symbol")}} Objekte sind die einzigen eingebauten Objekte, die die `[Symbol.toPrimitive]()` Methode überschreiben. [`Date.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive) behandelt das `"default"`-Hinweis als wäre es `"string"`, während [`Symbol.prototype[Symbol.toPrimitive]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive) den Hinweis ignoriert und immer ein Symbol zurückgibt.

### Numerische Umwandlung

Es gibt zwei numerische Typen: [Number](#number_typ) und [BigInt](#bigint_typ). Manchmal erwartet die Sprache speziell eine Zahl oder ein BigInt (wie {{jsxref("Array.prototype.slice()")}}, bei der der Index eine Zahl sein muss); andere Male kann sie beide tolerieren und unterschiedliche Operationen je nach Typ des Operanden durchführen. Für strikte Umwandlungsprozesse, die keine implizite Konvertierung vom anderen Typ erlauben, siehe [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) und [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion).

Numerische Umwandlung ist nahezu identisch mit der [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), außer dass BigInts unverändert zurückgegeben werden, anstatt einen {{jsxref("TypeError")}} zu verursachen. Numerische Umwandlung wird von allen arithmetischen Operatoren verwendet, da sie für sowohl Zahlen als auch BigInts überladen sind. Die einzige Ausnahme ist das [unäre Plus](/de/docs/Web/JavaScript/Reference/Operators/Unary_plus), das immer eine Zahlenumwandlung durchführt.

### Andere Umwandlungen

Alle Datentypen, außer Null, Undefined und Symbol, haben ihren jeweiligen Umwandlungsprozess. Siehe [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [boolean-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) und [Objektumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion) für mehr Details.

Wie Sie vielleicht bemerkt haben, gibt es drei verschiedene Wege, über die Objekte in primitive Werte umgewandelt werden können:

- [Primitive Umwandlung](#primitive_umwandlung): `[Symbol.toPrimitive]("default")` → `valueOf()` → `toString()`
- [Numerische Umwandlung](#numerische_umwandlung), [Zahlenumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt-Umwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[Symbol.toPrimitive]("number")` → `valueOf()` → `toString()`
- [Stringumwandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[Symbol.toPrimitive]("string")` → `toString()` → `valueOf()`

In allen Fällen muss `[Symbol.toPrimitive()]`, wenn vorhanden, aufrufbar sein und einen primitiven Typ zurückgeben, während `valueOf` oder `toString` ignoriert wird, wenn sie nicht aufrufbar sind oder ein Objekt zurückgeben. Am Ende des Prozesses, wenn er erfolgreich ist, ist das Ergebnis garantiert ein primitiver Typ. Der resultierende Primitive wird dann weiteren Umwandlungen je nach Kontext unterzogen.

## Siehe auch

- [JavaScript Data Structures and Algorithms](https://github.com/trekhleb/javascript-algorithms) von Oleksii Trekhleb
- [Computer Science in JavaScript](https://github.com/humanwhocodes/computer-science-in-javascript) von Nicholas C. Zakas
