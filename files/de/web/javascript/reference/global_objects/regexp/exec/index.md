---
title: RegExp.prototype.exec()
short-title: exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`exec()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck in einem angegebenen String durch und gibt ein Ergebnis-Array oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

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
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()` Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regex auf `0`.

Bei erfolgreichem Abgleich gibt die `exec()` Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) Eigenschaft des Regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede erfasste Gruppe des abgeglichenen Textes. Das Array hat außerdem die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der 0-basierte Index des Abgleichs im String.
- `input`
  - : Der Original-String, der abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, deren Schlüssel die Namen und deren Werte die Erfassungsgruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten Erfassungsgruppen definiert wurden. Siehe [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) für weitere Informationen.
- `indices` {{optional_inline}}
  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag gesetzt ist. Es ist ein Array, in dem jeder Eintrag die Grenzen eines Teilstring-Abgleichs darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Abgleichs im von `exec()` zurückgegebenen Array. Mit anderen Worten, der erste `indices` Eintrag repräsentiert den gesamten Abgleich, der zweite `indices` Eintrag die erste Erfassungsgruppe, usw. Jeder Eintrag selbst ist ein Zwei-Elemente-Array, wobei die erste Zahl den Startindex des Abgleichs und die zweite Zahl dessen Endindex repräsentiert.

    Das `indices` Array hat zusätzlich eine `groups` Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von allen benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen und jeder Wert ist ein Zwei-Elemente-Array, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex der Erfassungsgruppe darstellt. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}} Objekte sind _zustandsbehaftet_, wenn die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt sind (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) aus dem vorherigen Abgleich. `exec()` kann intern verwendet werden, um über mehrere Abgleiche in einem Textstring zu iterieren (mit Erfassungsgruppen), im Gegensatz dazu, nur die übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Wenn `exec()` verwendet wird, hat das globale Flag keine Auswirkung, wenn das Sticky-Flag gesetzt ist — der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regex-Methoden rufen intern `exec()` auf — einschließlich derjenigen, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst mächtig ist (und am effizientesten), vermittelt es oft nicht am deutlichsten die Absicht.

- Wenn Sie nur wissen möchten, ob der Regex einen String abgleicht, aber nicht, was tatsächlich abgeglichen wird, verwenden Sie {{jsxref("RegExp.prototype.test()")}} stattdessen.
- Wenn Sie alle Vorkommen eines globalen Regex finden und sich nicht um Informationen wie Erfassungsgruppen kümmern, verwenden Sie {{jsxref("String.prototype.match()")}} stattdessen. Außerdem hilft {{jsxref("String.prototype.matchAll()")}}, das Übereinstimmen mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem Sie über die Abgleiche iterieren können.
- Wenn Sie einen Abgleich ausführen, um seine Indexposition im String zu finden, verwenden Sie stattdessen die Methode {{jsxref("String.prototype.search()")}}.

`exec()` ist nützlich für komplexe Operationen, die nicht leicht mit einer der oben genannten Methoden erreicht werden können, oft wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den Regex, daher beeinflusst das Ändern von `lastIndex` während der Iteration über `matchAll` die Iteration nicht.) Für ein solches Beispiel siehe [rewinding `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

## Beispiele

### Verwenden von exec()

Betrachten Sie folgendes Beispiel:

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

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Aufeinanderfolgende Abgleiche finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) Flag verwendet, können Sie die Methode `exec()` mehrmals ausführen, um aufeinanderfolgende Abgleiche im selben String zu finden. In diesem Fall beginnt die Suche an dem Teilstring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft voranbringen). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft nicht zurückgesetzt wird, wenn ein anderer String durchsucht wird; die Suche beginnt bei ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}}.

Zum Beispiel, nehmen Sie folgendes Skript an:

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
> - Platzieren Sie den regulären Ausdruck Literal (oder den {{jsxref("RegExp")}} Konstruktor) _nicht_ in der `while` Bedingung — es wird den Regex bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, oder `lastIndex` wird niemals vorangebracht.
> - Falls der Regex möglicherweise Zeichen mit einer Länge von Null abgleicht (z.B. `/^/gm`), erhöhen Sie dessen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell bei jedem Mal, um nicht an derselben Stelle festzuhängen.

Sie können diese Art von Code normalerweise durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwenden von exec() mit RegExp-Literalen

Sie können `exec()` auch verwenden, ohne explizit ein {{jsxref("RegExp")}} Objekt zu erstellen:

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
