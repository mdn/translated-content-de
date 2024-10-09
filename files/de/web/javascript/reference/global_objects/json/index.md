---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{JSRef}}

Das **`JSON`** Namensraumobjekt enthält statische Methoden zum Parsen von Werten aus und Konvertieren von Werten in [JavaScript Object Notation](https://json.org/) ({{Glossary("JSON", "JSON")}}).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `JSON` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `JSON`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `JSON` sind statisch (genau wie das {{jsxref("Math")}} Objekt).

### Unterschiede zwischen JavaScript und JSON

JSON ist eine Syntax zum Serialisieren von Objekten, Arrays, Zahlen, Zeichenfolgen, Booleans und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null). Es basiert auf der JavaScript-Syntax, ist aber von JavaScript unterschieden: Ein Großteil von JavaScript ist _nicht_ JSON. Zum Beispiel:

- Objekte und Arrays
  - : Eigenschaftsnamen müssen doppelt-angeführte Zeichenfolgen sein; [Abschließende Kommata](/de/docs/Web/JavaScript/Reference/Trailing_commas) sind verboten.
- Zahlen
  - : Führende Nullen sind untersagt. Ein Dezimalpunkt muss von mindestens einer Ziffer gefolgt werden. `NaN` und `Infinity` werden nicht unterstützt.

Jeder JSON-Text ist ein gültiger JavaScript-Ausdruck, jedoch nur nach der [JSON-Ergänzung](https://github.com/tc39/proposal-json-superset) Überarbeitung. Vor der Überarbeitung sind U+2028 ZEILENTRENNER und U+2029 ABSATZTRENNER in Zeichenkettenliteralen und Eigenschaftsschlüsseln in JSON erlaubt; dieselbe Verwendung in JavaScript-Zeichenkettenliteralen führt jedoch zu einem {{jsxref("SyntaxError")}}.

Weitere Unterschiede umfassen, dass nur doppelt-angeführte Zeichenfolgen erlaubt sind und kein Support für {{jsxref("undefined")}} oder Kommentare besteht. Für diejenigen, die ein nutzerfreundlicheres Konfigurationsformat basierend auf JSON verwenden möchten, gibt es [JSON5](https://json5.org/), das vom Babel-Compiler verwendet wird, und das weiter verbreitete [YAML](https://en.wikipedia.org/wiki/YAML).

Der gleiche Text kann auch unterschiedliche Werte in JavaScript-Objektliteralen im Vergleich zu JSON repräsentieren. Weitere Informationen finden Sie unter [Objektliteral-Syntax vs. JSON](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Volle JSON-Grammatik

Die gültige JSON-Syntax ist formell durch die folgende Grammatik definiert, ausgedrückt in [ABNF](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form) und kopiert aus dem [IETF JSON Standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259):

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

Unbedeutende {{Glossary("whitespace", "Leerzeichen")}} können überall vorhanden sein, außer innerhalb eines `JSONNumber` (Zahlen dürfen keine Leerzeichen enthalten) oder eines `JSONString` (wo es als entsprechendes Zeichen in der Zeichenkette interpretiert wird oder einen Fehler verursachen würde). Die Tabulatoren (U+0009), Wagenrücklauf (U+000D), Zeilenumbruch (U+000A) und Leerzeichen (U+0020) sind die einzigen gültigen Leerzeichen-Zeichen.

## Statische Eigenschaften

- `JSON[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist die Zeichenfolge `"JSON"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("JSON.isRawJSON()")}}
  - : Prüft, ob ein Wert ein von {{jsxref("JSON.rawJSON()")}} zurückgegebenes Objekt ist.
- {{jsxref("JSON.parse()")}}
  - : Parst ein Stück Zeichenfolgen-Text als JSON, transformiert optional den erzeugten Wert und dessen Eigenschaften und gibt den Wert zurück.
- {{jsxref("JSON.rawJSON()")}}
  - : Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält. Wenn es zu JSON serialisiert wird, wird das rohe JSON-Objekt behandelt, als ob es bereits ein Stück JSON ist. Dieser Text muss gültiges JSON sein.
- {{jsxref("JSON.stringify()")}}
  - : Gibt eine JSON-Zeichenfolge zurück, die dem angegebenen Wert entspricht, und enthält optional nur bestimmte Eigenschaften oder ersetzt Eigenschaftswerte auf benutzerdefinierte Weise.

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

Sie können die {{jsxref("JSON.parse()")}} Methode verwenden, um die obige JSON-Zeichenfolge in ein JavaScript-Objekt umzuwandeln:

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

### Verlustfreie Zahlendarstellung

JSON kann Zahlenliterale beliebiger Genauigkeit enthalten. Allerdings ist es nicht möglich, alle JSON-Zahlen genau in JavaScript darzustellen, da JavaScript eine Gleitkommadarstellung verwendet, die eine feste Genauigkeit hat. Zum Beispiel ist `12345678901234567890 === 12345678901234567000` in JavaScript wahr, da sie die gleiche Gleitkommadarstellung haben. Dies bedeutet, dass es keine JavaScript-Zahl gibt, die der `12345678901234567890` JSON-Zahl genau entspricht.

Angenommen, Sie haben eine genaue Darstellung einer Zahl (entweder über {{jsxref("BigInt")}} oder eine benutzerdefinierte Bibliothek):

```js
const data = {
  // Using a BigInt here to store the exact value,
  // but it can also be a custom high-precision number library,
  // if the number might not be an integer.
  gross_gdp: 12345678901234567890n,
};
```

Sie möchten sie serialisieren und dann zur gleichen genauen Zahl parsen. Es gibt mehrere Schwierigkeiten:

- Auf der Serialisierungsseite müssen Sie, um eine Zahl in JSON zu erhalten, eine Zahl an `JSON.stringify` übergeben, entweder über die `replacer`-Funktion oder über die `toJSON`-Methode. In beiden Fällen haben Sie jedoch bereits Präzision während der Zahlkonvertierung verloren. Wenn Sie eine Zeichenkette an `JSON.stringify` übergeben, wird sie als Zeichenkette, nicht als Zahl serialisiert.
- Auf der Parseseite können nicht alle Zahlen genau dargestellt werden. Beispielsweise gibt `JSON.parse("12345678901234567890")` `12345678901234568000` zurück, da die Zahl auf die nächste darstellbare Zahl gerundet wird. Selbst wenn Sie eine `reviver`-Funktion verwenden, wird die Zahl bereits gerundet, bevor die `reviver`-Funktion aufgerufen wird.

Es gibt im Allgemeinen zwei Möglichkeiten, sicherzustellen, dass Zahlen verlustfrei in JSON konvertiert und zurückgeparst werden: Eine beinhaltet eine JSON-Zahl, die andere eine JSON-Zeichenfolge. JSON ist ein _Kommunikationsformat_, daher ist es wahrscheinlich, wenn Sie JSON verwenden, dass Sie mit einem anderen System kommunizieren (HTTP-Anfrage, Speichern in Datenbank usw.). Die beste Wahl hängt vom Empfängersystem ab.

#### Verwendung von JSON-Zeichenfolgen

Wenn das Empfängersystem nicht dieselben JSON-Handhabungsfähigkeiten wie JavaScript besitzt und keine hochpräzisen Zahlen unterstützt, möchten Sie die Zahl möglicherweise als Zeichenkette serialisieren und sie dann auf der Empfängerseite als Zeichenkette behandeln. Dies ist auch die einzige Option im älteren JavaScript.

Um anzugeben, wie benutzerdefinierte Datentypen (einschließlich `BigInt`) in JSON serialisiert werden sollen, fügen Sie entweder eine `toJSON`-Methode zu Ihrem Datentyp hinzu oder verwenden Sie die `replacer`-Funktion von {{jsxref("JSON.stringify()")}}.

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

In beiden Fällen sieht der JSON-Text aus wie `{"gross_gdp":"12345678901234567890"}`, wobei der Wert eine Zeichenkette, keine Zahl ist. Dann können Sie auf der Empfängerseite das JSON parsen und die Zeichenkette verarbeiten.

#### Verwendung von JSON-Zahlen

Wenn der Empfänger dieser Nachricht native Unterstützung für hochpräzise Zahlen bietet (wie Python-Integers), ist es offensichtlich besser, Zahlen als JSON-Zahlen zu übergeben, da sie direkt in den hochpräzisen Typ geparst werden können, anstatt eine Zeichenkette aus JSON zu parsen und dann eine Zahl aus der Zeichenkette zu parsen. In JavaScript können Sie beliebige Datentypen zu JSON-Zahlen serialisieren, ohne zuerst einen Zahlenwert zu erzeugen (was zu einem Präzisionsverlust führt), indem Sie {{jsxref("JSON.rawJSON()")}} verwenden, um genau festzulegen, wie der JSON-Quelltext aussehen soll.

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

Der Text, der an `JSON.rawJSON` übergeben wird, wird behandelt, als ob er bereits ein Stück JSON ist, sodass er nicht erneut als Zeichenkette serialisiert wird. Daher sieht der JSON-Text aus wie `{"gross_gdp":12345678901234567890}`, wobei der Wert eine Zahl ist. Dieses JSON kann dann vom Empfänger geparst werden, ohne dass eine zusätzliche Verarbeitung erforderlich ist, vorausgesetzt, das Empfängersystem hat nicht dieselben Präzisionsbeschränkungen wie JavaScript.

Beim Parsen von JSON mit hochpräzisen Zahlen in JavaScript ist besondere Vorsicht geboten, da beim Aufrufen der `reviver`-Funktion durch `JSON.parse()` der Wert, den Sie erhalten, bereits geparst ist (und Präzision verloren hat). Sie können das `context.source` Parameter der {{jsxref("JSON.parse()")}} `reviver`-Funktion verwenden, um die Zahl selbst neu zu parsen.

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
- [JSON Beautifier/Editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
