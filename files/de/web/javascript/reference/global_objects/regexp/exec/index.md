---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`exec()`** von {{jsxref("RegExp")}}-Instanzen führt eine Suche mit diesem regulären Ausdruck in einem angegebenen String durch und gibt ein Ergebnisarray oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück.

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

## Syntax

```js-nolint
exec(str)
```

### Parameter

- `str`
  - : Der String, gegen den der reguläre Ausdruck abgeglichen wird. Alle Werte werden zu [Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `exec()` nach dem String `"undefined"` sucht, was selten gewünscht ist.

### Rückgabewert

Wenn der Abgleich fehlschlägt, gibt die Methode `exec()` [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück und setzt das [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Regex-Eigenschaft auf `0`.

Wenn der Abgleich erfolgreich ist, gibt die Methode `exec()` ein Array zurück und aktualisiert die [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)-Eigenschaft des regulären Ausdrucksobjekts. Das zurückgegebene Array enthält den abgeglichenen Text als erstes Element und dann ein Element für jede Erfassungsgruppe des abgeglichenen Textes. Das Array hat außerdem die folgenden zusätzlichen Eigenschaften:

- `index`
  - : Der nullbasierte Index des Treffers im String.
- `input`
  - : Der Originalstring, gegen den abgeglichen wurde.
- `groups`
  - : Ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) von benannten Erfassungsgruppen, dessen Schlüssel die Namen und dessen Werte die Erfassungsgruppen oder {{jsxref("undefined")}} sind, wenn keine benannten Erfassungsgruppen definiert wurden. Siehe [Erfassungsgruppen](/de/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) für weitere Informationen.
- `indices` {{optional_inline}}

  - : Diese Eigenschaft ist nur vorhanden, wenn das [`d`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)-Flag gesetzt ist. Es ist ein Array, bei dem jeder Eintrag die Grenzen eines Teilstringabgleichs darstellt. Der Index jedes Elements in diesem Array entspricht dem Index des jeweiligen Teilstringabgleichs im Array, das von `exec()` zurückgegeben wird. Mit anderen Worten, der erste `indices`-Eintrag repräsentiert den gesamten Treffer, der zweite `indices`-Eintrag repräsentiert die erste Erfassungsgruppe usw. Jeder Eintrag selbst ist ein Zwei-Elemente-Array, bei dem die erste Zahl den Startindex des Treffers darstellt und die zweite Zahl den Endindex.

    Das `indices`-Array hat zusätzlich eine `groups`-Eigenschaft, die ein [`null`-Prototyp-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) aller benannten Erfassungsgruppen enthält. Die Schlüssel sind die Namen der Erfassungsgruppen und jeder Wert ist ein Zwei-Elemente-Array, bei dem die erste Zahl der Startindex und die zweite Zahl der Endindex der Erfassungsgruppe ist. Wenn der reguläre Ausdruck keine benannten Erfassungsgruppen enthält, ist `groups` `undefined`.

## Beschreibung

JavaScript-{{jsxref("RegExp")}}-Objekte sind _zustandsbehaftet_, wenn das [globale](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) oder [sticky](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)-Flag gesetzt ist (z.B. `/foo/g` oder `/foo/y`). Sie speichern einen [`lastIndex`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) vom vorherigen Treffer. Mit dieser Interneigenschaft kann `exec()` verwendet werden, um über mehrere Treffer in einem String aus Text (mit Erfassungsgruppen) zu iterieren, anstatt nur die übereinstimmenden Strings mit {{jsxref("String.prototype.match()")}} zu erhalten.

Beim Verwenden von `exec()` hat das globale Flag keine Wirkung, wenn das Sticky-Flag gesetzt ist – der Abgleich ist immer sticky.

`exec()` ist die primitive Methode von Regexps. Viele andere Regexp-Methoden rufen intern `exec()` auf — einschließlich der Methoden, die von String-Methoden aufgerufen werden, wie [`[Symbol.replace]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Obwohl `exec()` selbst leistungsstark (und am effizientesten) ist, vermittelt es oft den Zweck nicht am klarsten.

- Wenn Sie sich nur darum kümmern, ob der Regex mit einem String übereinstimmt, aber nicht, was tatsächlich abgeglichen wird, verwenden Sie stattdessen {{jsxref("RegExp.prototype.test()")}}.
- Wenn Sie alle Vorkommen eines globalen Regex finden und sich nicht um Informationen wie Erfassungsgruppen kümmern, verwenden Sie stattdessen {{jsxref("String.prototype.match()")}}. Darüber hinaus hilft {{jsxref("String.prototype.matchAll()")}}, das Matching mehrerer Teile eines Strings (mit Erfassungsgruppen) zu vereinfachen, indem Sie über die Treffer iterieren können.
- Wenn Sie einen Treffer ausführen, um seine Positionsangabe im String zu finden, verwenden Sie stattdessen die Methode {{jsxref("String.prototype.search()")}}.

## Beispiele

### Verwenden von exec()

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
| `groups`    | `{ color: "brown" }`                                               |

Außerdem wird `re.lastIndex` auf `25` gesetzt, da dieser Regex global ist.

### Succesive Treffer finden

Wenn Ihr regulärer Ausdruck das [`g`](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags)-Flag verwendet, können Sie die `exec()`-Methode mehrmals verwenden, um aufeinanderfolgende Treffer im selben String zu finden. Wenn Sie dies tun, beginnt die Suche an dem Teilestring von `str`, der durch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft des regulären Ausdrucks angegeben ist ({{jsxref("RegExp/test", "test()")}} wird auch die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft vorantreiben). Beachten Sie, dass die {{jsxref("RegExp/lastIndex", "lastIndex")}}-Eigenschaft beim Suchen in einem anderen String nicht zurückgesetzt wird, sondern die Suche an ihrem bestehenden {{jsxref("RegExp/lastIndex", "lastIndex")}} beginnen wird.

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
> - Platzieren Sie den Literal-Regex-Ausdruck (oder den {{jsxref("RegExp")}}-Konstruktor) _nicht_ innerhalb der `while`-Bedingung — dies würde den Regex bei jeder Iteration neu erstellen und {{jsxref("RegExp/lastIndex", "lastIndex")}} zurücksetzen.
> - Stellen Sie sicher, dass das [globale (`g`) Flag](/de/docs/Web/JavaScript/Guide/Regular_expressions#advanced_searching_with_flags) gesetzt ist, sonst wird `lastIndex` niemals weitergeschaltet.
> - Wenn der Regex möglicherweise Zeichen mit null-Länge erfasst (z.B. `/^/gm`), erhöhen Sie seinen {{jsxref("RegExp/lastIndex", "lastIndex")}} manuell bei jedem Mal, um zu vermeiden, dass Sie an derselben Stelle stecken bleiben.

Sie können diesen Code normalerweise durch {{jsxref("String.prototype.matchAll()")}} ersetzen, um ihn weniger fehleranfällig zu machen.

### Verwenden von exec() mit RegExp-Literalen

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

- [Leitfaden für reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions)
- {{jsxref("RegExp")}}
