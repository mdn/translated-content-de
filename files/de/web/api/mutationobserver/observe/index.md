---
title: "MutationObserver: observe() Methode"
short-title: observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM WHATWG")}}

Die Methode **`observe()`** des [`MutationObserver`](/de/docs/Web/API/MutationObserver) konfiguriert den `MutationObserver`-Callback, um Benachrichtigungen über Änderungen am DOM zu erhalten, die den gegebenen Optionen entsprechen.

Abhängig von der Konfiguration kann der Beobachter entweder einen einzelnen [`Node`](/de/docs/Web/API/Node) im DOM-Baum oder diesen Knoten und einige oder alle seine Nachkommenknoten überwachen. Derselbe Knoten kann von mehreren Beobachtern überwacht werden, und derselbe `MutationObserver` kann Änderungen in verschiedenen Teilen des DOM-Baumes und/oder unterschiedliche Arten von Änderungen überwachen, indem `observe()` mehrfach auf denselben `MutationObserver` aufgerufen wird.

Um den `MutationObserver` zu stoppen (damit keiner seiner Callbacks mehr ausgelöst wird), rufen Sie [`MutationObserver.disconnect()`](/de/docs/Web/API/MutationObserver/disconnect) auf.

## Syntax

```js-nolint
observe(target, options)
```

### Parameter

- `target`
  - : Ein DOM [`Node`](/de/docs/Web/API/Node) (der ein [`Element`](/de/docs/Web/API/Element) sein kann) innerhalb des DOM-Baumes, der auf Änderungen überwacht werden soll, oder als Wurzel eines Teilbaumes von Knoten, die überwacht werden sollen.
- `options`

  - : Ein Objekt, das Optionen bereitstellt, die beschreiben, welche DOM-Mutationen dem `mutationObserver` 's `callback` gemeldet werden sollen. Mindestens eines von `childList`, `attributes` und/oder `characterData` muss `true` sein, wenn Sie `observe()` aufrufen. Andernfalls wird eine `TypeError`-Ausnahme ausgelöst.

    Die Optionen sind wie folgt:

    - `subtree` {{optional_inline}}
      - : Setzen Sie dies auf `true`, um die Überwachung auf den gesamten Teilbaum von Knoten auszuweiten, die in `target` verwurzelt sind. Alle anderen Eigenschaften werden dann auf alle Knoten im Teilbaum ausgedehnt, anstatt nur auf den `target`-Knoten anzuwenden. Der Standardwert ist `false`. Beachten Sie, dass, wenn ein Nachkomme von `target` entfernt wird, Änderungen in diesem Nachkommen-Teilbaum weiterhin beobachtet werden, bis die Benachrichtigung über die Entfernung selbst ausgeliefert wurde.
    - `childList` {{optional_inline}}
      - : Setzen Sie dies auf `true`, um den Zielknoten (und, wenn `subtree` `true` ist, seine Nachkommen) auf die Hinzufügung neuer Kindknoten oder die Entfernung bestehender Kindknoten zu überwachen. Der Standardwert ist `false`.
    - `attributes` {{optional_inline}}
      - : Setzen Sie dies auf `true`, um Änderungen an den Attributwerten des überwachten Knotens oder der Knoten zu überwachen. Der Standardwert ist `true`, wenn entweder `attributeFilter` oder `attributeOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `attributeFilter` {{optional_inline}}
      - : Ein Array mit speziellen Attributnamen, die überwacht werden sollen. Wenn diese Eigenschaft nicht enthalten ist, führen Änderungen an allen Attributen zu Mutation-Benachrichtigungen.
    - `attributeOldValue` {{optional_inline}}
      - : Setzen Sie dies auf `true`, um den vorherigen Wert eines Attributs aufzuzeichnen, das sich ändert, wenn Sie den Knoten oder die Knoten auf Attributänderungen überwachen; Siehe [Überwachung von Attributwerten](#überwachung_von_attributwerten) für ein Beispiel zum Beobachten von Attributänderungen und Aufzeichnen von Werten. Der Standardwert ist `false`.
    - `characterData` {{optional_inline}}
      - : Setzen Sie dies auf `true`, um den angegebenen Zielknoten (und, wenn `subtree` `true` ist, seine Nachkommen) auf Änderungen der innerhalb der Knoten enthaltenen Zeichendaten zu überwachen. Der Standardwert ist `true`, wenn `characterDataOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `characterDataOldValue` {{optional_inline}}
      - : Setzen Sie dies auf `true`, um den vorherigen Textwert eines Knotens aufzuzeichnen, wann immer sich der Text von überwachten Knoten ändert. Der Standardwert ist `false`.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref('TypeError')}}
  - : Ausgelöst in einem der folgenden Fälle:
    - Die `options` sind so konfiguriert, dass eigentlich nichts überwacht wird. (Zum Beispiel, wenn `childList`, `attributes` und `characterData` alle `false` sind.)
    - Der Wert von `options.attributes` ist `false` (was darauf hinweist, dass Attributänderungen nicht überwacht werden sollen), aber `attributeOldValue` ist `true` und/oder `attributeFilter` ist vorhanden.
    - Die Option `characterDataOldValue` ist `true`, aber `characterData` ist `false` (was darauf hinweist, dass Zeichendatenänderungen nicht überwacht werden sollen).

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel demonstrieren wir, wie die Methode **`observe()`** auf einer Instanz von [`MutationObserver`](/de/docs/Web/API/MutationObserver) aufgerufen wird, nachdem sie eingerichtet wurde, indem sie ein Ziel-Element
und ein `options`-Objekt übergeben.

```js
// create a new instance of `MutationObserver` named `observer`,
// passing it a callback function
const observer = new MutationObserver(() => {
  console.log("callback that runs when observer is triggered");
});

// call `observe()`, passing it the element to observe, and the options object
observer.observe(document.querySelector("#element-to-observe"), {
  subtree: true,
  childList: true,
});
```

### Entfernte Nachkommen bei Verwendung von `subtree`

Wenn Sie einen Knoten mit der Option `subtree` beobachten, erhalten Sie weiterhin Benachrichtigungen über Änderungen an den Nachkommen des Knotens, auch nachdem ein Teil des Teilbaums entfernt wurde. Sobald jedoch die Benachrichtigung über die Entfernung erfolgt ist, lösen weitere Änderungen am getrennten Teilbaum den Beobachter nicht mehr aus.

Dies verhindert, dass Ihnen Änderungen entgehen, die nach der Trennung auftreten und bevor Sie die Möglichkeit haben, den verschobenen Knoten oder Teilbaum gezielt auf Änderungen zu überwachen. Theoretisch bedeutet dies, dass Sie, wenn Sie die [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekte, die die auftretenden Änderungen beschreiben, im Auge behalten, in der Lage sein sollten, die Änderungen "rückgängig" zu machen, und das DOM in seinen ursprünglichen Zustand zurückversetzen können.

```html
<div id="target">
  <div id="child"></div>
</div>
```

```js
const target = document.getElementById("target");
const child = document.getElementById("child");

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log(mutation.type, mutation.target.id, mutation.attributeName);

    if (mutation.type === "childList" && mutation.target.id === "target") {
      // After receiving the notification that the child was removed,
      // further modifications to the detached subtree no longer trigger the observer.
      child.setAttribute("data-bar", "");
    }
  });
});

observer.observe(target, {
  attributes: true,
  childList: true,
  subtree: true,
});

target.removeChild(child);
// This change happens before the "childList target" notification is delivered,
// so it will also trigger the observer.
child.setAttribute("data-foo", "");

// Output:
// childList target null
// attributes child data-foo
// There is no "attributes child data-bar" notification.
```

### Verwendung von `attributeFilter`

In diesem Beispiel wird ein Mutation Observer konfiguriert, um Änderungen an den
`status`- und `username`-Attributen in beliebigen Elementen innerhalb eines Teilbaums zu überwachen, der die Namen von Benutzern in einem Chatraum anzeigt. Dies ermöglicht es dem Code beispielsweise, Änderungen an Benutzernamen widerzuspiegeln oder sie als abwesend (AFK) oder offline zu markieren.

```js
function callback(mutationList) {
  mutationList.forEach((mutation) => {
    switch (mutation.type) {
      case "attributes":
        switch (mutation.attributeName) {
          case "status":
            userStatusChanged(mutation.target.username, mutation.target.status);
            break;
          case "username":
            usernameChanged(mutation.oldValue, mutation.target.username);
            break;
        }
        break;
    }
  });
}

const userListElement = document.querySelector("#user-list");

const observer = new MutationObserver(callback);
observer.observe(userListElement, {
  attributeFilter: ["status", "username"],
  attributeOldValue: true,
  subtree: true,
});
```

### Überwachung von Attributwerten

In diesem Beispiel beobachten wir ein Element auf Änderungen der Attributwerte und fügen einen Button hinzu, der das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut des Elements zwischen `"ltr"` und `"rtl"` umschaltet. Im Callback des Beobachters protokollieren wir den alten Wert des Attributs.

#### HTML

```html
<button id="toggle">Toggle direction</button><br />
<div id="container">
  <input type="text" id="rhubarb" dir="ltr" value="Tofu" />
</div>
<pre id="output"></pre>
```

#### CSS

```css
body {
  background-color: paleturquoise;
}

button,
input,
pre {
  margin: 0.5rem;
}
```

#### JavaScript

```js
const toggle = document.querySelector("#toggle");
const rhubarb = document.querySelector("#rhubarb");
const observerTarget = document.querySelector("#container");
const output = document.querySelector("#output");

toggle.addEventListener("click", () => {
  rhubarb.dir = rhubarb.dir === "ltr" ? "rtl" : "ltr";
});

const config = {
  subtree: true,
  attributeOldValue: true,
};

const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "attributes") {
      output.textContent = `The ${mutation.attributeName} attribute was modified from "${mutation.oldValue}".`;
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(observerTarget, config);
```

#### Ergebnis

{{EmbedLiveSample("Monitoring attribute values")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
