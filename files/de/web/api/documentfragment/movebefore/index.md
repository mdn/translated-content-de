---
title: "DocumentFragment: Methode moveBefore()"
short-title: moveBefore()
slug: Web/API/DocumentFragment/moveBefore
l10n:
  sourceCommit: 725b7287559af48539da6e570fb85cae8c29041e
---

{{APIRef("DOM")}}

Die Methode **`moveBefore()`** der Schnittstelle [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden `DocumentFragment` als direktes Kindelement vor einen angegebenen Referenzknoten.

## Syntax

```js-nolint
moveBefore(movedNode, referenceNode)
```

### Parameter

- `movedNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), der den zu verschiebenden Knoten darstellt. Beachten Sie, dass dies ein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten sein muss.
- `referenceNode`
  - : Ein [`Node`](/de/docs/Web/API/Node), vor den `movedNode` verschoben wird, oder `null`. Wenn der Wert `null` ist, wird `movedNode` am Ende der Kindknoten des aufrufenden `DocumentFragment` eingefügt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `HierarchyRequestError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen ausgelöst:
    - Das Fragment und `movedNode` haben unterschiedliche Shadow-inkludierende Wurzeln (die von [`getRootNode({ composed: true })`](/de/docs/Web/API/Node/getRootNode) zurückgegebenen Wurzeln).
    - Das Verschieben würde einen Knoten innerhalb seiner selbst oder eines seiner Nachfahren platzieren, auch über einen Shadow Tree hinweg.
    - Der angegebene `movedNode` ist kein [`Element`](/de/docs/Web/API/Element)- oder [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten.
- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angegebene `referenceNode` ist kein Kind des `DocumentFragment`, auf dem Sie `moveBefore()` aufrufen, also des Fragments, innerhalb dessen Sie versuchen, `movedNode` zu verschieben.
- {{jsxref("TypeError")}}
  - : Das zweite Argument wurde nicht bereitgestellt.

## Beschreibung

Die Methode `moveBefore()` verschiebt einen angegebenen Knoten an eine neue Position im `DocumentFragment`. Sie bietet ähnliche Funktionalität wie die Methode [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore), entfernt den Knoten jedoch nicht und fügt ihn anschließend wieder ein. Das bedeutet, dass der Zustand des Knotens (der beim Verschieben mit `insertBefore()` und ähnlichen Mechanismen zurückgesetzt würde) nach dem Verschieben erhalten bleibt. Dazu gehören:

- Der Zustand von [Animationen](/de/docs/Web/CSS/Guides/Animations) und [Übergängen](/de/docs/Web/CSS/Guides/Transitions).
- Der Ladezustand von {{htmlelement("iframe")}}.
- Interaktivitätszustände (zum Beispiel {{cssxref(":focus")}} und {{cssxref(":active")}}).
- Der Elementzustand für [Vollbild](/de/docs/Web/API/Fullscreen_API).
- Der Offen/Geschlossen-Zustand von [Popovers](/de/docs/Web/API/Popover_API).
- Der modale Zustand von {{htmlelement("dialog")}}-Elementen (modale Dialogfelder werden nicht geschlossen).

Der Wiedergabezustand von {{htmlelement("video")}}- und {{htmlelement("audio")}}-Elementen ist nicht in der obigen Liste enthalten, da diese Elemente ihren Zustand beim Entfernen und erneuten Einfügen unabhängig vom verwendeten Mechanismus beibehalten.

Ein gewöhnliches `DocumentFragment` ist nicht verbunden. Das Anhängen an das Dokument überträgt seine Kinder und lässt das Fragment leer; das Fragment selbst wird dabei nicht verbunden. Das zustandserhaltende Verhalten ist daher bei einer verbundenen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), die von `DocumentFragment` erbt, am nützlichsten.

Wenn Änderungen am DOM mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet werden, werden mit `moveBefore()` verschobene Knoten mit einem [entfernten Knoten](/de/docs/Web/API/MutationRecord/removedNodes) und einem [hinzugefügten Knoten](/de/docs/Web/API/MutationRecord/addedNodes) erfasst.

### Einschränkungen von `moveBefore()`

Bei der Verwendung von `moveBefore()` sind einige Einschränkungen zu beachten:

- Es funktioniert nur beim Verschieben eines Knotens innerhalb derselben Shadow-inkludierenden Wurzel. Bei einem gewöhnlichen nicht verbundenen Fragment bedeutet dies, Knoten zu verschieben, die sich bereits innerhalb dieses Fragments befinden. Bei einer verbundenen Shadow Root erfüllen Knoten, die mit demselben Dokument verbunden sind, diese Anforderung.
- Es funktioniert nicht, wenn Sie versuchen, einen Knoten, der nicht mit dem DOM verbunden ist, in ein bereits verbundenes Elternelement zu verschieben oder umgekehrt.

In solchen Fällen schlägt `moveBefore()` mit einer `HierarchyRequestError`-Ausnahme fehl. Wenn die oben genannten Einschränkungen Anforderungen für Ihren speziellen Anwendungsfall sind, sollten Sie stattdessen [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) verwenden oder [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) einsetzen, um die Fehler zu behandeln, die in solchen Fällen auftreten.

## Beispiele

### Beibehalten des Fokus innerhalb einer Shadow Root

Dieses Beispiel zeigt, wie `moveBefore()` den Fokus einer Eingabe beibehält, wenn sie innerhalb einer Shadow Root verschoben wird.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} zum Hosten der Shadow Root und ein {{htmlelement("output")}}, um anzuzeigen, ob die Eingabe nach jeder Verschiebung fokussiert bleibt.

```html live-sample___movebefore-shadow
<div id="host"></div>
<output id="status"></output>
```

#### JavaScript

Das Skript hängt eine Shadow Root an das `<div>` an und fügt ihr eine Eingabe und einen Absatz hinzu. Der `keydown`-Ereignis-Listener der Eingabe verwendet `moveBefore()`, um die Eingabe durch Übergabe von `null` nach den Absatz oder durch Übergabe des Absatzes als Referenzknoten davor zu verschieben. Nach jeder Verschiebung aktualisiert er die Statusausgabe dahingehend, ob die Eingabe fokussiert ist.

```js live-sample___movebefore-shadow
const shadow = document.getElementById("host").attachShadow({ mode: "open" });
const status = document.getElementById("status");
const input = document.createElement("input");
input.setAttribute("aria-label", "Type here, then press Enter to move");
input.placeholder = "Press Enter to move";
const paragraph = document.createElement("p");
paragraph.textContent = "The input can move before or after this paragraph.";
shadow.append(input, paragraph);

input.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.isComposing) {
    return;
  }
  event.preventDefault();
  const reference = input.nextSibling === paragraph ? null : paragraph;
  shadow.moveBefore(input, reference);
  status.textContent = `Input still focused: ${shadow.activeElement === input}`;
});
```

#### Ergebnis

{{EmbedLiveSample("movebefore-shadow", "100%", "180")}}

Fokussieren Sie die Eingabe und drücken Sie <kbd>Enter</kbd>, um sie vor oder nach den Absatz zu verschieben. Die Eingabe bleibt fokussiert.

Die Verwendung von [`shadow.insertBefore(input, reference)`](/de/docs/Web/API/Node/insertBefore) würde die Eingabe stattdessen entfernen und erneut einfügen, wodurch ihr Fokus verloren ginge. Gewöhnliches erneutes Einfügen erhält den Text im Eingabefeld, jedoch nicht die anderen oben aufgeführten Zustände.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore)
