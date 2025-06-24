---
title: RegExp.prototype.exec()
short-title: exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`exec()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck in einem angegebenen String aus und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

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
  - : Der String, der gegen den der reguläre Ausdruck abgeglichen werden soll. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die `exec()` Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des regulären Ausdrucks auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die `exec()` Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede erfassende Gruppe des abgeglichenen Textes. Das Array hat außerdem die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der 0-basierte Index des Abgleichs im String.
- `input`
  - : Der ursprüngliche String, gegen den abgeglichen wurde.
- `groups`
  - : Ein [Objekt mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) der benannten erfassenden Gruppen, dessen Schlüssel die Namen und dessen Werte die erfassenden Gruppen sind, oder {{jsxref("undefined")}}, wenn keine benannten erfassenden Gruppen definiert wurden. Siehe [erfassende Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) für mehr Informationen.
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag gesetzt ist. Es ist ein Array, bei dem jeder Eintrag die Begrenzungen eines Teilstring-Abgleichs darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstring-Abgleichs im von `exec()` zurückgegebenen Array. Mit anderen Worten, der erste `indices` Eintrag repräsentiert den gesamten Abgleich, der zweite `indices` Eintrag repräsentiert die erste erfassende Gruppe, und so weiter. Jeder Eintrag selbst ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex des Abgleichs darstellt.

    Das `indices` Array hat zusätzlich eine `groups` Eigenschaft, die ein [Objekt mit `null`-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten erfassenden Gruppen hält. Die Schlüssel sind die Namen der erfassenden Gruppen, und jeder Wert ist ein Array mit zwei Elementen, wobei die erste Zahl den Startindex und die zweite Zahl den Endindex der erfassenden Gruppe ist. Wenn der reguläre Ausdruck keine benannten erfassenden Gruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}} Objekte sind _zustandsbezogen_, wenn sie die [globalen](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt haben (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Abgleich. Unter Verwendung dieses internen Werts kann `exec()` verwendet werden, um über mehrere Abgleiche in einem Textstring (mit Erfassungsgruppen) zu iterieren, im Gegensatz dazu, nur die abgeglichenen Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Beim Verwenden von `exec()` hat das globale Flag keinen Effekt, wenn das sticky Flag gesetzt ist — der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von regulären Ausdrücken. Viele andere Methoden von regulären Ausdrücken rufen intern `exec()` auf - inklusive der Methoden, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Obwohl `exec()` selbst mächtig ist (und am effizientesten ist), vermittelt es oft nicht am klarsten die Absicht.

- Wenn Sie nur daran interessiert sind, ob der reguläre Ausdruck einen String abgleicht, aber nicht daran, was tatsächlich abgeglichen wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen regulären Ausdrucks finden und Informationen wie Erfassungsgruppen irrelevant sind, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus hilft {{jsxref("String.prototype.matchAll()")}}, das Abgleichen mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem es Ihnen ermöglicht, über die Abgleiche zu iterieren.
- Wenn Sie einen Abgleich ausführen, um seine Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}} Methode.

`exec()` ist nützlich für komplexe Operationen, die nicht einfach mit einer der oben genannten Methoden erreicht werden können, insbesondere wenn Sie [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) manuell anpassen müssen. ({{jsxref("String.prototype.matchAll()")}} kopiert den regulären Ausdruck, daher hat das Ändern von `lastIndex` beim Iterieren über `matchAll` keinen Einfluss auf die Iteration.) Für ein solches Beispiel, siehe [Zurückspulen von `lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#rewinding_lastindex).

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

Zusätzlich wird `re.lastIndex` auf `25` gesetzt, da dieser reguläre Ausdruck global ist.

### Aufeinanderfolgende Abgleiche finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) Flag verwendet, können Sie die `exec()` Methode mehrfach verwenden, um aufeinanderfolgende Abgleiche im selben String zu finden. Dabei beginnt die Suche beim Teilstring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft fortsetzen). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft nicht zurückgesetzt wird, wenn ein anderer String durchsucht wird, sondern die Suche an ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}} beginnt.

Zum Beispiel, nehmen Sie an, Sie haben dieses Skript:

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
> - _Nicht_ den regulären Ausdruck-Literal (oder den {{jsxref("RegExp")}} Konstruktor) innerhalb der `while` Bedingung platzieren — dies würde den regulären Ausdruck bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, sonst wird `lastIndex` nie fortgesetzt.
> - Wenn der reguläre Ausdruck möglicherweise Zeichen mit null Länge abgleicht (z.B. `/^/gm`), erhöhen Sie seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell jedes Mal, um zu vermeiden, dass Sie an derselben Stelle feststecken.

Sie können diesen Code normalerweise mit {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp Literalen

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

- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
