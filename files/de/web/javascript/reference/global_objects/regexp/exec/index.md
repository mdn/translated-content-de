---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{JSRef}}

Die **`exec()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer in einem angegebenen String aus und gibt ein Ergebnis-Array oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{InteractiveExample("JavaScript Demo: RegExp.prototype.exec()")}}

```js interactive-example
const regex1 = /fo+/g;
const str1 = "table football, foosball";
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()`-Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die `exec()`-Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede Erfassungsgruppe des abgeglichenen Textes. Das Array hat auch die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der 0-basierte Index des Treffers im String.
- `input`
  - : Der ursprüngliche String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, dessen Schlüssel die Namen und dessen Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Weitere Informationen finden Sie unter [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es ist ein Array, bei dem jeder Eintrag die Begrenzungen eines Teilstring-Treffers darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Treffers im Array, das von `exec()` zurückgegeben wird. Mit anderen Worten, der erste `indices`-Eintrag repräsentiert den gesamten Treffer, der zweite `indices`-Eintrag repräsentiert die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex des Treffers und die zweite Zahl das Ende des Treffers darstellt.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen, und jeder Wert ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl das Ende der Erfassungsgruppe ist. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}} Objekte sind _zustandsbehaftet_, wenn sie die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Treffer. Intern verwendet kann `exec()` über mehrere Treffer in einem Textstring iterieren (mit Erfassungsgruppen), im Gegensatz zur Rückgabe nur der übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}}.

Beim Verwenden von `exec()` hat das globale Flag keine Wirkung, wenn das sticky-Flag gesetzt ist — der Treffer ist immer sticky.

`exec()` ist die primitive Methode von regulären Ausdrücken. Viele andere Methoden von regulären Ausdrücken rufen intern `exec()` auf — einschließlich der Methoden, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Obwohl `exec()` selbst mächtig (und am effizientesten) ist, vermittelt es oft nicht am klarsten die Absicht.

- Wenn es Ihnen nur darum geht, ob der reguläre Ausdruck mit einem String übereinstimmt, aber nicht, was tatsächlich abgeglichen wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen regulären Ausdrucks finden und Ihnen Informationen wie Erfassungsgruppen egal sind, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Außerdem hilft {{jsxref("String.prototype.matchAll()")}}, das Matching mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem Sie über die Treffer iterieren können.
- Wenn Sie einen Treffer ausführen, um seine Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}} Methode.

`exec()` ist nützlich für komplexe Operationen, die nicht einfach über eine der oben genannten Methoden erreicht werden können, oft wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den regulären Ausdruck, sodass die Änderung des `lastIndex`, während über `matchAll` iteriert wird, die Iteration nicht beeinflusst.) Für ein solches Beispiel siehe [Zurücksetzen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

## Beispiele

### Verwendung von exec()

Betrachten Sie das folgende Beispiel:

```js
// Match "quick brown" followed by "jumps", ignoring characters in between
// Remember "brown" and "jumps"
// Ignore case
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const result = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Die folgende Tabelle zeigt den Zustand von `result`, nachdem dieses Skript ausgeführt wurde:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "Brown" }`                                               |

Darüber hinaus wird `re.lastIndex` auf `25` gesetzt, da dieser reguläre Ausdruck global ist.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) Flag verwendet, können Sie die `exec()`-Methode mehrmals verwenden, um aufeinanderfolgende Treffer im gleichen String zu finden. Wenn Sie dies tun, beginnt die Suche am Teilstring von `str`, der durch die `lastIndex`-Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft vorantreiben). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft nicht zurückgesetzt wird, wenn ein anderer String durchsucht wird; sie beginnt ihre Suche beim bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Angenommen, Sie haben dieses Skript:

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

Dieses Skript zeigt den folgenden Text an:

```plain
Found abb. Next match starts at 3
Found ab. Next match starts at 9
```

> [!WARNING]
> Es gibt viele Fallstricke, die dazu führen können, dass dies zu einer Endlosschleife wird!
>
> - Platzieren Sie den regulären Ausdrucksliteral (oder {{jsxref("RegExp")}} Konstruktor) _nicht_ innerhalb der `while`-Bedingung — er würde den regulären Ausdruck für jede Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird nie vorangetrieben.
> - Wenn der reguläre Ausdruck möglicherweise Zeichen mit null Länge abgleicht (z.B. `/^/gm`), erhöhen Sie seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell jedes Mal, um zu vermeiden, dass Sie an der gleichen Stelle feststecken.

Sie können diese Art von Code normalerweise mit {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp-Literalen

Sie können `exec()` auch verwenden, ohne explizit ein {{jsxref("RegExp")}}-Objekt zu erstellen:

```js
const matches = /(hello \S+)/.exec("This is a hello world!");
console.log(matches[1]);
```

Dies wird eine Nachricht mit `'hello world!'` protokollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Regular Expressions](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
