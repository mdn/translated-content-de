---
title: RegExp.prototype.exec()
short-title: exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`exec()`**-Methode von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer in einem angegebenen String aus und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen des Werts oder das Übergeben von `undefined` dazu führt, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die Methode `exec()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die Methode `exec()` ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann jeweils ein Element für jede Erfassungsgruppe des abgeglichenen Textes. Das Array hat außerdem die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der 0-basierte Index des Treffers im String.
- `input`
  - : Der ursprüngliche String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, deren Schlüssel die Namen und deren Werte die Erfassungsgruppen oder {{jsxref("undefined")}} sind, falls keine benannten Erfassungsgruppen definiert wurden. Siehe [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) für weitere Informationen.
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es ist ein Array, in dem jeder Eintrag die Grenzen eines Teilstring-Treffers repräsentiert. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Treffers im von `exec()` zurückgegebenen Array. Mit anderen Worten, der erste `indices`-Eintrag repräsentiert den gesamten Treffer, der zweite `indices`-Eintrag repräsentiert die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Zweielemente-Array, wobei die erste Zahl den Startindex des Treffers und die zweite Zahl dessen Endindex darstellt.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [null-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen und jeder Wert ist ein Zweielemente-Array, wobei die erste Zahl der Startindex und die zweite Zahl der Endindex der Erfassungsgruppe ist. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript-{{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn das [gültige](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder das [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag gesetzt ist (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Treffer. Unter Verwendung dessen kann `exec()` verwendet werden, um über mehrere Treffer in einem Textstring zu iterieren (mit Erfassungsgruppen), anstatt nur die passenden Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Bei der Verwendung von `exec()` hat das globale Flag keine Auswirkungen, wenn das sticky-Flag gesetzt ist — der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regexpmethoden rufen intern `exec()` auf — einschließlich derer, die von Stringmethoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst mächtig ist (und die effizienteste ist), vermittelt es oft nicht die Absicht am klarsten.

- Wenn Sie nur wissen möchten, ob der Regex einen String trifft, aber nicht, was tatsächlich getroffen wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regexps finden und Informationen wie Erfassungsgruppen nicht benötigen, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus hilft Ihnen {{jsxref("String.prototype.matchAll()")}}, mehrere Teile eines Strings (mit Erfassungsgruppen) zu finden, indem Sie über die Treffer iterieren können.
- Wenn Sie einen Treffer ausführen, um seine Indexposition im String zu finden, verwenden Sie stattdessen die Methode {{jsxref("String.prototype.search()")}}.

`exec()` ist nützlich für komplexe Operationen, die nicht leicht durch eine der oben genannten Methoden erreicht werden können, oft wenn Sie den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den Regex, sodass das Ändern von `lastIndex` beim Iterieren über `matchAll` die Iteration nicht beeinflusst.) Für ein solches Beispiel siehe das [Zurücksetzen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

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

Die folgende Tabelle zeigt den Zustand von `result` nach dem Ausführen dieses Skripts:

| Eigenschaft | Wert                                                               |
| ----------- | ------------------------------------------------------------------ |
| `[0]`       | `"Quick Brown Fox Jumps"`                                          |
| `[1]`       | `"Brown"`                                                          |
| `[2]`       | `"Jumps"`                                                          |
| `index`     | `4`                                                                |
| `indices`   | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`     | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`    | `{ color: "Brown" }`                                               |

Zusätzlich wird `re.lastIndex` aufgrund dieses globalen Regexps auf `25` gesetzt.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die Methode `exec()` mehrmals verwenden, um aufeinanderfolgende Treffer im selben String zu finden. Bei der Anwendung beginnt die Suche beim Teilstring von `str`, der von der {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft weiterführen). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft nicht zurückgesetzt wird, wenn nach einem anderen String gesucht wird, sie beginnt ihre Suche beim vorhandenen {{jsxref("RegExp/lastIndex", "lastIndex")}}.

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
> - Platzieren Sie _nicht_ den regulären Ausdruckliteral (oder den {{jsxref("RegExp")}}-Konstruktor) innerhalb der `while`-Bedingung — es wird den Regex bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird nie weitergeführt.
> - Wenn der Regex möglicherweise Zeichen mit Null-Länge abgleichen könnte (z.B., `/^/gm`), erhöhen Sie dessen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell jedes Mal, um zu vermeiden, dass er festhängt.

Sie können normalerweise diesen Code durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

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

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
