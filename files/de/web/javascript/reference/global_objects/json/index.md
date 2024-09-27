---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{JSRef}}

Das **`JSON`**-Namespace-Objekt enthält statische Methoden zum Parsen von Werten aus JavaScript-Objektnotation ([JSON](/de/docs/Glossary/JSON)) und zum Konvertieren von Werten in JSON.

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `JSON` kein Konstruktor. Sie können es weder mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `JSON`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `JSON` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

### Unterschiede zwischen JavaScript und JSON

JSON ist eine Syntax zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenketten, Booleschen Werten und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Es basiert auf der JavaScript-Syntax, unterscheidet sich jedoch von JavaScript: Der größte Teil von JavaScript ist _nicht_ JSON. Zum Beispiel:

- Objekte und Arrays
  - : Eigenschaftsnamen müssen doppelt-angeführte Zeichenketten sein; [nachfolgende Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind verboten.
- Zahlen
  - : Führende Nullen sind verboten. Ein Dezimalpunkt muss von mindestens einer Ziffer gefolgt werden. `NaN` und `Infinity` werden nicht unterstützt.

Jeder JSON-Text ist ein gültiger JavaScript-Ausdruck, jedoch nur nach der [JSON-Superset](https://github.com/tc39/proposal-json-superset)-Revision. Vor der Revision sind U+2028 LINIENTRENNER und U+2029 ABSATZTRENNER in Zeichenkettenliteralen und Eigenschaftsschlüsseln in JSON erlaubt; dieselbe Verwendung in JavaScript-Zeichenkettenliteralen führt jedoch zu einem {{jsxref("SyntaxError")}}.

Weitere Unterschiede sind, dass nur doppelte Anführungszeichen für Zeichenketten erlaubt sind und keine Unterstützung für {{jsxref("undefined")}} oder Kommentare besteht. Für diejenigen, die ein benutzerfreundlicheres Konfigurationsformat auf der Basis von JSON verwenden möchten, gibt es [JSON5](https://json5.org/), das vom Babel-Compiler verwendet wird, und das weit verbreitete [YAML](https://de.wikipedia.org/wiki/YAML).

Der gleiche Text kann auch unterschiedliche Werte in JavaScript-Objektliteralen im Vergleich zu JSON darstellen. Weitere Informationen finden Sie unter [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Vollständige JSON-Grammatik

Die gültige JSON-Syntax wird formell durch die folgende Grammatik definiert, ausgedrückt in [ABNF](https://de.wikipedia.org/wiki/Augmented_Backus-Naur-Form), und vom [IETF JSON-Standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259) übernommen:

```plain
JSON-text = object / array
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
```

Unbedeutende [Leerzeichen](/de/docs/Glossary/whitespace) können überall vorkommen, außer innerhalb eines `JSONNumber` (Zahlen dürfen keine Leerzeichen enthalten) oder `JSONString` (wo sie als das entsprechende Zeichen in der Zeichenkette interpretiert oder einen Fehler verursachen würden). Die Zeichen Tabulator (U+0009), Wagenrücklauf (U+000D), Zeilenumbruch (U+000A) und Leerzeichen (U+0020) sind die einzigen gültigen Leerzeichen-Zeichen.

## Statische Eigenschaften

- `JSON[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"JSON"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("JSON.isRawJSON()")}} {{experimental_inline}}
  - : Prüft, ob ein Wert ein vom {{jsxref("JSON.rawJSON()")}} zurückgegebener Objekt ist.
- {{jsxref("JSON.parse()")}}
  - : Parst ein Stück Zeichenketten-Text als JSON und transformiert optional den erzeugten Wert und seine Eigenschaften, und gibt den Wert zurück.
- {{jsxref("JSON.rawJSON()")}} {{experimental_inline}}
  - : Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es in JSON serialisiert wird, wird das rohe JSON-Objekt behandelt, als wäre es bereits ein Stück JSON. Dieser Text muss gültiges JSON sein.
- {{jsxref("JSON.stringify()")}}
  - : Gibt eine JSON-Zeichenkette zurück, die dem angegebenen Wert entspricht, optional einschließlich nur bestimmter Eigenschaften oder unter Ersetzung von Eigenschaftenwerten auf eine benutzerdefinierte Weise.

## Beispiele

### Beispiel-JSON

```json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

Sie können die Methode {{jsxref("JSON.parse()")}} verwenden, um die obige JSON-Zeichenkette in ein JavaScript-Objekt zu konvertieren:

```js
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));
```

### Verlustfreie Zahlen-Serialisierung

JSON kann Zahlenliterale mit beliebiger Genauigkeit enthalten. Es ist jedoch nicht möglich, alle JSON-Zahlen exakt in JavaScript darzustellen, da JavaScript die Gleitpunktdarstellung verwendet, die eine feste Genauigkeit hat. Zum Beispiel ist `12345678901234567890 === 12345678901234567000` in JavaScript, da sie dieselbe Gleitpunktdarstellung haben. Das bedeutet, dass es keine JavaScript-Zahl gibt, die genau der `12345678901234567890` JSON-Zahl entspricht.

Angenommen, Sie haben eine genaue Darstellung einer Zahl (entweder über {{jsxref("BigInt")}} oder eine benutzerdefinierte Bibliothek):

```js
const data = {
  // Using a BigInt here to store the exact value,
  // but it can also be a custom high-precision number library,
  // if the number might not be an integer.
  gross_gdp: 12345678901234567890n,
};
```

Sie möchten es serialisieren und dann auf die gleiche exakte Zahl parsen. Es gibt mehrere Schwierigkeiten:

- Auf der Serialisierungsseite müssen Sie, um eine Zahl in JSON zu erhalten, eine Zahl an `JSON.stringify` übergeben, entweder über die `replacer`-Funktion oder über die `toJSON`-Methode. Aber in beiden Fällen haben Sie während der Zahlenumwandlung bereits an Genauigkeit verloren. Wenn Sie eine Zeichenkette an `JSON.stringify` übergeben, wird sie als Zeichenkette und nicht als Zahl serialisiert.
- Auf der Parseseite können nicht alle Zahlen genau dargestellt werden. Zum Beispiel gibt `JSON.parse("12345678901234567890")` `12345678901234568000` zurück, da die Zahl auf die nächste darstellbare Zahl gerundet wird. Selbst wenn Sie eine `reviver`-Funktion verwenden, wird die Zahl bereits gerundet, bevor die `reviver`-Funktion aufgerufen wird.

Es gibt allgemein zwei Möglichkeiten, um sicherzustellen, dass Zahlen verlustfrei in JSON konvertiert und zurückgeparst werden: eine beinhaltet eine JSON-Zahl, die andere eine JSON-Zeichenkette. JSON ist ein _Kommunikationsformat_, sodass Sie JSON verwenden, wahrscheinlich mit einem anderen System kommunizieren (HTTP-Anfrage, Speicherung in einer Datenbank usw.). Die beste Lösung hängt vom Empfängersystem ab.

#### Verwendung von JSON-Zeichenketten

Wenn das Empfängersystem nicht die gleichen JSON-Verarbeitungsfähigkeiten wie JavaScript hat und keine hochpräzisen Zahlen unterstützt, möchten Sie die Zahl möglicherweise als Zeichenkette serialisieren und dann auf der Empfängerseite als Zeichenkette behandeln. Dies ist auch die einzige Option in älteren JavaScript-Versionen.

Um anzugeben, wie benutzerdefinierte Datentypen (einschließlich `BigInt`) in JSON serialisiert werden sollen, können Sie entweder eine `toJSON`-Methode zu Ihrem Datentyp hinzufügen oder die `replacer`-Funktion von {{jsxref("JSON.stringify()")}} verwenden.

```js
// Using toJSON() method
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// Using JSON.stringify() with replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

In jedem Fall sieht der JSON-Text wie `{"gross_gdp":"12345678901234567890"}` aus, wobei der Wert eine Zeichenkette und keine Zahl ist. Auf der Empfängerseite können Sie das JSON parsen und die Zeichenkette verarbeiten.

#### Verwendung von JSON-Zahlen

Wenn der Empfänger dieser Nachricht hochpräzise Zahlen nativ unterstützt (z. B. Python-Ganzzahlen), ist das Übergeben von Zahlen als JSON-Zahlen offensichtlich besser, da sie direkt in den hochpräzisen Typ geparst werden können, anstatt eine Zeichenkette aus JSON zu parsen und dann eine Zahl aus der Zeichenkette. In JavaScript können Sie beliebige Datentypen zu JSON-Zahlen serialisieren, ohne zuerst einen Zahlenwert zu erzeugen (was einen Präzisionsverlust verursacht), indem Sie {{jsxref("JSON.rawJSON()")}} verwenden, um genau anzugeben, wie der JSON-Quelltext aussehen soll.

```js
// Using toJSON() method
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// Using JSON.stringify() with replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

Der an `JSON.rawJSON` übergebene Text wird so behandelt, als wäre er bereits ein Stück JSON, sodass er nicht erneut als Zeichenkette serialisiert wird. Daher sieht der JSON-Text wie `{"gross_gdp":12345678901234567890}` aus, wobei der Wert eine Zahl ist. Dieses JSON kann dann vom Empfänger ohne zusätzliche Verarbeitung geparst werden, vorausgesetzt, das Empfängersystem hat nicht die gleichen Präzisionsbeschränkungen wie JavaScript.

Beim Parsen von JSON, das hochpräzise Zahlen in JavaScript enthält, sollten Sie besonders vorsichtig sein, da die Funktion `JSON.parse()` die `reviver`-Funktion aufruft und der Wert, den Sie erhalten, bereits geparst ist (und an Präzision verloren hat). Sie können den Parameter `context.source` der {{jsxref("JSON.parse()")}} `reviver`-Funktion verwenden, um die Zahl selbst erneut zu parsen.

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // Or use the constructor of your custom high-precision number library
    return BigInt(context.source);
  }
  return value;
});
// { gross_gdp: 12345678901234567890n }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.toJSON()")}}
- [JSON Diff](https://json-diff.com/)
- [JSON-Beautifier/Editor](https://jsonbeautifier.org/)
- [JSON-Parser](https://jsonparser.org/)
- [JSON-Validator](https://tools.learningcontainer.com/json-validator/)
