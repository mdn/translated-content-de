---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`exec()`** Methode von {{jsxref("RegExp")}} Instanzen führt eine Suche mit diesem regulären Ausdruck nach einem Treffer in einem angegebenen String aus und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## Syntax

```js-nolint
exec(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Auslassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Falls der Abgleich fehlschlägt, gibt die `exec()` Methode [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt den [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) des Regex auf `0`.

Falls der Abgleich erfolgreich ist, gibt die `exec()` Methode ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array hat den abgeglichenen Text als erstes Element und danach ein Element für jede Capturing-Gruppe des abgeglichenen Textes. Das Array verfügt außerdem über folgende zusätzliche Eigenschaften:

- `index`
  - : Der nullbasierte Index des Treffers im String.
- `input`
  - : Der ursprüngliche String, der abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) mit benannten Capturing-Gruppen, deren Schlüssel die Namen und Werte die Capturing-Gruppen sind oder {{jsxref("undefined")}}, falls keine benannten Capturing-Gruppen definiert wurden. Weitere Informationen finden Sie unter [Capturing-Gruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences).
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) Flag gesetzt ist. Es ist ein Array, bei dem jeder Eintrag die Grenzen eines Substring-Treffers darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Substring-Treffers im von `exec()` zurückgegebenen Array. Mit anderen Worten: Der erste `indices` Eintrag stellt den gesamten Treffer dar, der zweite Eintrag die erste Capturing-Gruppe usw. Jeder Eintrag selbst ist ein zweielementiges Array, bei dem die erste Zahl den Startindex des Treffers darstellt und die zweite Zahl das Ende.

    Das `indices` Array hat zusätzlich eine `groups` Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Capturing-Gruppen enthält. Die Schlüssel sind die Namen der Capturing-Gruppen, und jeder Wert ist ein zweielementiges Array, wobei die erste Zahl der Startindex und die zweite Zahl der Endindex der Capturing-Gruppe ist. Enthält der reguläre Ausdruck keine benannten Capturing-Gruppen, ist `groups` `undefined`.

## Beschreibung

JavaScript {{jsxref("RegExp")}} Objekte sind _zustandsbehaftet_, wenn sie die [global](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) Flags gesetzt haben (z. B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Abgleich. Intern verwendet, kann `exec()` genutzt werden, um über mehrere Treffer in einem Textstring zu iterieren (mit Capture-Gruppen), im Gegensatz dazu, nur die passenden Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Beim Verwenden von `exec()` hat das globale Flag keine Auswirkung, wenn das sticky Flag gesetzt ist — der Abgleich ist stets sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regexp-Methoden rufen `exec()` intern auf — inklusive derjenigen, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Während `exec()` selbst mächtig (und oft die effizienteste) ist, vermittelt es oft nicht am deutlichsten die Absicht.

- Wenn es Ihnen nur wichtig ist, ob der Regex einen String trifft, aber nicht, was tatsächlich abgeglichen wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden, und es Ihnen nicht um Informationen wie Capturing-Gruppen geht, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus hilft {{jsxref("String.prototype.matchAll()")}}, das Abgleichen mehrerer Teile eines Strings (mit Capture-Gruppen) zu vereinfachen, indem Sie über die Treffer iterieren können.
- Wenn Sie einen Abgleich ausführen, um seine Indexposition im String zu finden, verwenden Sie stattdessen die {{jsxref("String.prototype.search()")}} Methode.

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
| `groups`    | `{ color: "brown" }`                                               |

Darüber hinaus wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Aufeinanderfolgende Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) Flag verwendet, können Sie die `exec()` Methode mehrmals verwenden, um aufeinanderfolgende Treffer im gleichen String zu finden. Wenn Sie dies tun, beginnt die Suche beim Substring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft des regulären Ausdrucks angegeben wird ({{jsxref("RegExp/test", "test()")}} wird die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft ebenfalls voranrücken). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}} Eigenschaft nicht zurückgesetzt wird, wenn nach einem anderen String gesucht wird; sie wird ihre Suche bei ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}} beginnen.

Zum Beispiel, nehmen Sie dieses Skript an:

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
> Es gibt viele Fallstricke, die dazu führen können, dass dies eine Endlosschleife wird!
>
> - Platzieren Sie den regulären Ausdrucksliteral (oder {{jsxref("RegExp")}} Konstruktor) _nicht_ innerhalb der `while` Bedingung — er wird den Regex in jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, da `lastIndex` sonst nie vorgerückt wird.
> - Wenn der Regex möglicherweise Zeichen ohne Länge trifft (z. B. `/^/gm`), erhöhen Sie seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell jedes Mal, um zu vermeiden, dass er an der gleichen Stelle festhängt.

Sie können diese Art von Code normalerweise mit {{jsxref("String.prototype.matchAll()")}} ersetzen, um sie weniger fehleranfällig zu machen.

### Verwendung von exec() mit RegExp-Literalen

Sie können `exec()` auch verwenden, ohne ein {{jsxref("RegExp")}} Objekt ausdrücklich zu erstellen:

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

- [Regular expressions](/de/docs/Web/JavaScript/Guide/Regular_expressions) Leitfaden
- {{jsxref("RegExp")}}
