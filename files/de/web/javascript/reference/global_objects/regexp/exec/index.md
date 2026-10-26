---
title: RegExp.prototype.exec()
short-title: exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`exec()`** von {{jsxref("RegExp")}}-Instanzen sucht mit diesem regulären Ausdruck in einer angegebenen Zeichenfolge nach einer Übereinstimmung und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.exec()")}}

```js interactive-example
const regex = /fo+/g;
const str = "table football, foosball";
let array;

while ((array = regex.exec(str)) !== null) {
  console.log(`Found ${array[0]}. Next starts at ${regex.lastIndex}.`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}
```

## Syntax

```js-nolint
exec(str)
```

### Parameter

- `str`
  - : Die Zeichenfolge, mit der der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn Sie den Parameter weglassen oder `undefined` übergeben, sucht `exec()` daher nach der Zeichenfolge `"undefined"`, was selten beabsichtigt ist.

### Rückgabewert

Wenn keine Übereinstimmung gefunden wird, gibt die Methode `exec()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn eine Übereinstimmung gefunden wird, gibt die Methode `exec()` ein Array zurück und aktualisiert die Eigenschaft [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Objekts für den regulären Ausdruck. Das zurückgegebene Array enthält an erster Stelle den übereinstimmenden Text und danach für jede Capturing Group des übereinstimmenden Texts einen Eintrag. Das Array hat außerdem die folgenden Eigenschaften:

- `index`
  - : Der nullbasierte Index der Übereinstimmung in der Zeichenfolge.
- `input`
  - : Die ursprüngliche Zeichenfolge, mit der der Abgleich durchgeführt wurde.
- `groups`
  - : Ein [Objekt mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) für benannte Capturing Groups. Seine Schlüssel sind deren Namen und seine Werte die Capturing Groups. Wenn keine benannten Capturing Groups definiert wurden, ist der Wert {{jsxref("undefined")}}. Weitere Informationen finden Sie unter [Capturing Groups](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}
  - : Diese Eigenschaft ist nur vorhanden, wenn das Flag [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) gesetzt ist. Sie ist ein Array, dessen Einträge jeweils die Grenzen einer übereinstimmenden Teilzeichenfolge angeben. Der Index jedes Elements in diesem Array entspricht dem Index der jeweiligen übereinstimmenden Teilzeichenfolge im von `exec()` zurückgegebenen Array. Der erste Eintrag in `indices` steht also für die gesamte Übereinstimmung, der zweite für die erste Capturing Group und so weiter. Jeder Eintrag ist selbst ein Array mit zwei Elementen: Die erste Zahl gibt den Startindex der Übereinstimmung an, die zweite ihren Endindex.

    Das Array `indices` hat zusätzlich eine Eigenschaft `groups`, die ein [Objekt mit `null` als Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) für alle benannten Capturing Groups enthält. Die Schlüssel sind die Namen der Capturing Groups. Jeder Wert ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex der Capturing Group angibt. Wenn der reguläre Ausdruck keine benannten Capturing Groups enthält, ist `groups` gleich `undefined`.

## Beschreibung

JavaScript-{{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn die Flags [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) gesetzt sind (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) aus der vorherigen Übereinstimmung. Mithilfe dieses Werts kann `exec()` mehrere Übereinstimmungen in einer Zeichenfolge durchlaufen (einschließlich Capturing Groups), statt wie {{jsxref("String.prototype.match()")}} nur die übereinstimmenden Zeichenfolgen zu liefern.

Bei Verwendung von `exec()` hat das globale Flag keine Wirkung, wenn das sticky-Flag gesetzt ist – die Suche ist dann immer sticky.

`exec()` ist die grundlegende Methode für reguläre Ausdrücke. Viele andere Methoden für reguläre Ausdrücke rufen `exec()` intern auf – darunter auch solche, die von Zeichenfolgenmethoden aufgerufen werden, etwa [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Obwohl `exec()` selbst leistungsfähig (und am effizientesten) ist, macht die Methode die Absicht häufig nicht am deutlichsten.

- Wenn Sie nur wissen möchten, ob der reguläre Ausdruck mit einer Zeichenfolge übereinstimmt, aber nicht, welcher Text übereinstimmt, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen regulären Ausdrucks suchen und Informationen wie Capturing Groups nicht benötigen, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Außerdem vereinfacht {{jsxref("String.prototype.matchAll()")}} die Suche nach mehreren Teilen einer Zeichenfolge (einschließlich Capturing Groups), da Sie damit über die Übereinstimmungen iterieren können.
- Wenn Sie eine Übereinstimmung ausführen, um deren Indexposition in der Zeichenfolge zu ermitteln, verwenden Sie stattdessen die Methode {{jsxref("String.prototype.search()")}}.

`exec()` eignet sich für komplexe Vorgänge, die sich mit den oben genannten Methoden nicht einfach umsetzen lassen, häufig dann, wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den regulären Ausdruck. Wenn Sie `lastIndex` während der Iteration über `matchAll` ändern, wirkt sich das daher nicht auf die Iteration aus.) Ein entsprechendes Beispiel finden Sie unter [Zurücksetzen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

## Beispiele

### exec() verwenden

Betrachten Sie das folgende Beispiel:

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Die folgende Tabelle zeigt den Zustand von `result` nach Ausführung dieses Skripts:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "Brown" }`                                               |

Da dieser reguläre Ausdruck global ist, wird außerdem `re.lastIndex` auf `25` gesetzt.

### Aufeinanderfolgende Übereinstimmungen finden

Wenn Ihr regulärer Ausdruck das Flag [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) verwendet, können Sie die Methode `exec()` mehrfach aufrufen, um aufeinanderfolgende Übereinstimmungen in derselben Zeichenfolge zu finden. Dabei beginnt die Suche an der Stelle von `str`, die durch die Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}} des regulären Ausdrucks angegeben wird (auch {{jsxref("RegExp/test", "test()")}} erhöht den Wert der Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}}). Beachten Sie, dass die Eigenschaft {{jsxref("RegExp/lastIndex", "lastIndex")}} bei der Suche in einer anderen Zeichenfolge nicht zurückgesetzt wird. Die Suche beginnt beim bestehenden Wert von {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Nehmen Sie beispielsweise an, Sie hätten dieses Skript:

```js
const myRe = /ab*/g;
const str = "abbcdefabh";
let myArray;
while ((myArray = myRe.exec(str)) !== null) {
  let msg = `Found ${myArray[0]}. `;
  msg += `Next match starts at ${myRe.lastIndex}`;
  console.log(msg);
}
```

Dieses Skript gibt den folgenden Text aus:

```plain
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> [!WARNING]
> Es gibt viele Fallstricke, durch die daraus eine Endlosschleife werden kann!
>
> - Platzieren Sie das Literal für den regulären Ausdruck (oder den {{jsxref("RegExp")}}-Konstruktor) _nicht_ innerhalb der `while`-Bedingung. Dadurch wird der reguläre Ausdruck bei jeder Iteration neu erstellt und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurückgesetzt.
> - Stellen Sie sicher, dass das [globale Flag (`g`)](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist. Andernfalls wird `lastIndex` nie erhöht.
> - Wenn der reguläre Ausdruck Übereinstimmungen der Länge null finden kann (z. B. `/^/gm`), erhöhen Sie {{jsxref("RegExp/lastIndex", "lastIndex")}} jedes Mal manuell, damit die Suche nicht an derselben Stelle hängen bleibt.

In der Regel können Sie solchen Code durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### exec() mit RegExp-Literalen verwenden

Sie können `exec()` auch verwenden, ohne explizit ein {{jsxref("RegExp")}}-Objekt zu erstellen:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Dadurch wird eine Nachricht ausgegeben, die `'hello world!'` enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `RegExp.prototype.exec` mit Unterstützung für benannte Capturing Groups, `dotAll` und `sticky` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) – Leitfaden
- {{jsxref("RegExp")}}
