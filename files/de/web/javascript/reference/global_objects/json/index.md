---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

{{JSRef}}

Das **`JSON`** Namespace-Objekt enthält statische Methoden zur Analyse von Werten aus und Umwandlung von Werten in [JavaScript Object Notation](https://json.org/) ([JSON](/de/docs/Glossary/JSON)).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `JSON` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `JSON` Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `JSON` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

### Unterschiede zwischen JavaScript und JSON

JSON ist eine Syntax zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenketten, Booleans und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Es basiert auf der JavaScript-Syntax, unterscheidet sich jedoch von JavaScript: Der größte Teil von JavaScript ist _nicht_ JSON. Zum Beispiel:

- Objekte und Arrays
  - : Eigenschaftsnamen müssen doppelt-angeführte Zeichenketten sein; [nachgestellte Kommas](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind verboten.
- Zahlen
  - : Führende Nullen sind untersagt. Ein Dezimalpunkt muss von mindestens einer Ziffer gefolgt werden. `NaN` und `Infinity` werden nicht unterstützt.

Jeder JSON-Text ist ein gültiger JavaScript-Ausdruck, aber nur nach der [JSON Superset](https://github.com/tc39/proposal-json-superset) Revision. Vor der Revision sind U+2028 LINIENTRENNER und U+2029 ABSATZTRENNER in JSON-Zeichenkettenliteralen und Eigenschaftsschlüsseln erlaubt; dieselbe Verwendung in JavaScript-Zeichenkettenliteralen führt zu einem {{jsxref("SyntaxError")}}.

Weitere Unterschiede beinhalten die Erlaubnis nur doppelt-angeführter Zeichenketten und keine Unterstützung für {{jsxref("undefined")}} oder Kommentare. Für diejenigen, die ein benutzerfreundlicheres Konfigurationsformat basierend auf JSON nutzen möchten, gibt es [JSON5](https://json5.org/), das vom Babel-Compiler verwendet wird, und das häufiger verwendete [YAML](https://de.wikipedia.org/wiki/YAML).

Dasselbe Textstück kann in JavaScript-Objektliteralen im Vergleich zu JSON unterschiedliche Werte darstellen. Für weitere Informationen siehe [Objektliterale vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Vollständige JSON-Grammatik

Die gültige JSON-Syntax wird formal durch die folgende Grammatik definiert, ausgedrückt in [ABNF](https://de.wikipedia.org/wiki/Augmented_Backus-Naur-Form), und aus dem [IETF JSON Standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259) übernommen:

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

Unwesentliche [Leerzeichen](/de/docs/Glossary/whitespace) können überall, außer innerhalb eines `JSONNumber` (Zahlen dürfen keine Leerzeichen enthalten) oder `JSONString` (wo sie als entsprechendes Zeichen in der Zeichenkette interpretiert werden oder einen Fehler verursachen würden), vorhanden sein. Die Tabulator- (U+0009), Wagenrücklauf- (U+000D), Zeilenvorschub- (U+000A) und Leerzeichen- (U+0020) Zeichen sind die einzigen gültigen Leerzeichen.

## Statische Eigenschaften

- `JSON[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenkette `"JSON"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("JSON.isRawJSON()")}} {{experimental_inline}}
  - : Testet, ob ein Wert ein durch {{jsxref("JSON.rawJSON()")}} zurückgegebenes Objekt ist.
- {{jsxref("JSON.parse()")}}
  - : Analysiert einen Zeichenketten-Text als JSON, transformiert optional den erzeugten Wert und dessen Eigenschaften und gibt den Wert zurück.
- {{jsxref("JSON.rawJSON()")}} {{experimental_inline}}
  - : Erzeugt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es zu JSON serialisiert wird, wird das rohe JSON-Objekt behandelt, als ob es bereits ein Stück JSON ist. Dieser Text muss gültiges JSON sein.
- {{jsxref("JSON.stringify()")}}
  - : Gibt eine JSON-Zeichenkette zurück, die dem angegebenen Wert entspricht, wobei optional nur bestimmte Eigenschaften einbezogen oder Eigenschaftswerte auf benutzerdefinierte Weise ersetzt werden.

## Beispiele

### Beispiel JSON

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

Sie können die Methode {{jsxref("JSON.parse()")}} verwenden, um die obige JSON-Zeichenkette in ein JavaScript-Objekt umzuwandeln:

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

JSON kann Zahlenliterale mit beliebiger Genauigkeit enthalten. Es ist jedoch nicht möglich, alle JSON-Zahlen exakt in JavaScript darzustellen, da JavaScript die Fließkommadarstellung verwendet, die eine feste Genauigkeit hat. Zum Beispiel entspricht in JavaScript `12345678901234567890 === 12345678901234567000`, weil sie dieselbe Fließkommadarstellung haben. Das bedeutet, dass es keine JavaScript-Zahl gibt, die genau der `12345678901234567890` JSON-Zahl entspricht.

Angenommen, Sie haben eine genaue Darstellung einer Zahl (entweder über {{jsxref("BigInt")}} oder einer benutzerdefinierten Bibliothek):

```js
const data = {
  // Using a BigInt here to store the exact value,
  // but it can also be a custom high-precision number library,
  // if the number might not be an integer.
  gross_gdp: 12345678901234567890n,
};
```

Sie möchten sie serialisieren und dann zur gleichen exakt identischen Zahl parsen. Dabei gibt es mehrere Schwierigkeiten:

- Auf der Serialisierungsseite, um eine Zahl in JSON zu erhalten, müssen Sie eine Zahl an `JSON.stringify` übergeben, entweder über die `replacer` Funktion oder über die `toJSON` Methode. In jedem Fall haben Sie die Genauigkeit während der Zahlenkonvertierung bereits verloren. Wenn Sie eine Zeichenkette an `JSON.stringify` übergeben, wird sie als Zeichenkette und nicht als Zahl serialisiert.
- Auf der Parsingseite können nicht alle Zahlen exakt dargestellt werden. Zum Beispiel gibt `JSON.parse("12345678901234567890")` `12345678901234568000` zurück, weil die Zahl auf die nächste darstellbare Zahl gerundet wird. Selbst wenn Sie eine `reviver` Funktion verwenden, wird die Zahl bereits gerundet, bevor die `reviver` Funktion aufgerufen wird.

Im Allgemeinen gibt es zwei Möglichkeiten, um sicherzustellen, dass Zahlen verlustfrei zu JSON konvertiert und zurückgeparst werden: Eine Möglichkeit beinhaltet eine JSON-Zahl, die andere eine JSON-Zeichenkette. JSON ist ein _Kommunikationsformat_, daher kommunizieren Sie wahrscheinlich mit einem anderen System (HTTP-Anfrage, Speicherung in einer Datenbank, etc.), wenn Sie JSON verwenden. Die beste Lösung hängt vom Empfängersystem ab.

#### Verwendung von JSON-Zeichenketten

Wenn das Empfängersystem keine gleichen JSON-Handhabungskapazitäten wie JavaScript hat und keine Hochpräzisionszahlen unterstützt, möchten Sie die Zahl möglicherweise als Zeichenkette serialisieren und dann als Zeichenkette auf der Empfängerseite behandeln. Dies ist auch die einzige Option in älteren JavaScript-Versionen.

Um festzulegen, wie benutzerdefinierte Datentypen (einschließlich `BigInt`) zu JSON serialisiert werden sollen, fügen Sie entweder Ihrer Datentypklasse eine `toJSON` Methode hinzu oder verwenden Sie die `replacer` Funktion von {{jsxref("JSON.stringify()")}}.

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

In beiden Fällen sieht der JSON-Text wie `{"gross_gdp":"12345678901234567890"}` aus, wobei der Wert eine Zeichenkette und keine Zahl ist. Dann können Sie auf der Empfängerseite das JSON parsen und die Zeichenkette behandeln.

#### Verwendung von JSON-Zahlen

Wenn der Empfänger dieser Meldung von Natur aus Hochpräzisionszahlen unterstützt (wie beispielsweise Python-Integer), ist das Übergeben von Zahlen als JSON-Zahlen offensichtlich besser, weil sie direkt zum Hochpräzisionstyp geparst werden können, anstatt eine Zahl zuerst aus einer Zeichenkette zu parsen. In JavaScript können Sie beliebige Datentypen zu JSON-Zahlen serialisieren, ohne vorher einen Zahlenwert zu erzeugen (was zu einem Verlust von Genauigkeit führen würde), indem Sie {{jsxref("JSON.rawJSON()")}} verwenden, um genau festzulegen, was der JSON-Quelltext sein sollte.

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

Der an `JSON.rawJSON` übergebene Text wird behandelt, als ob er bereits ein Stück JSON wäre, sodass er nicht erneut als Zeichenkette serialisiert wird. Daher sieht der JSON-Text wie `{"gross_gdp":12345678901234567890}` aus, wobei der Wert eine Zahl ist. Dieses JSON kann dann vom Empfänger ohne zusätzliche Verarbeitung geparst werden, vorausgesetzt, das Empfängersystem hat nicht dieselben Präzisionsbeschränkungen wie JavaScript.

Beim Parsen von JSON, das Hochpräzisionszahlen in JavaScript enthält, sollten Sie besonders Acht geben, weil bei der Verwendung der `reviver` Funktion von `JSON.parse()`, der Wert, den Sie erhalten, bereits geparst (und die Genauigkeit verloren ist). Sie können den Parameter `context.source` der `reviver` Funktion von {{jsxref("JSON.parse()")}} verwenden, um die Zahl selbst neu zu parsen.

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
