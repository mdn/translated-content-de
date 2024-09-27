---
title: "MutationObserver: observe() Methode"
short-title: observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: 3fe05682ce997e441f705bd8b74a498e0485db11
---

{{APIRef("DOM WHATWG")}}

Die Methode **`observe()`** von [`MutationObserver`](/de/docs/Web/API/MutationObserver) konfiguriert den `MutationObserver`,
um damit zu beginnen, Benachrichtigungen über Änderungen am DOM zu erhalten, die den angegebenen Optionen entsprechen.

Je nach Konfiguration kann der Beobachter einen einzelnen [`Node`](/de/docs/Web/API/Node) im DOM-Baum beobachten oder diesen Knoten und einige oder alle seiner Nachkommenknoten. Der gleiche Knoten kann von mehreren Beobachtern beobachtet werden, und derselbe `MutationObserver` kann für Änderungen an verschiedenen Teilen des DOM-Baums und/oder verschiedene Arten von Änderungen durch mehrmaliges Aufrufen von `observe()` am gleichen `MutationObserver` beobachten.

Um den `MutationObserver` zu stoppen (damit keine seiner Callbacks mehr ausgelöst werden), rufen Sie [`MutationObserver.disconnect()`](/de/docs/Web/API/MutationObserver/disconnect) auf.

## Syntax

```js-nolint
observe(target, options)
```

### Parameter

- `target`
  - : Ein DOM [`Node`](/de/docs/Web/API/Node) (der ein [`Element`](/de/docs/Web/API/Element) sein kann) innerhalb des DOM-Baums, der auf Änderungen überwacht werden soll, oder als Wurzel eines Unterbaums von Knoten fungieren soll, die beobachtet werden.
- `options`

  - : Ein Objekt, das Optionen bietet, die beschreiben, welche DOM-Mutationen dem `callback` von `mutationObserver` gemeldet werden sollen. Mindestens eines von `childList`, `attributes` und/oder `characterData` muss `true` sein, wenn Sie `observe()` aufrufen. Andernfalls wird eine `TypeError`-Ausnahme ausgelöst.

    Optionen sind wie folgt:

    - `subtree` {{optional_inline}}
      - : Auf `true` setzen, um die Überwachung auf den gesamten Unterbaum von Knoten zu erweitern, der bei `target` verwurzelt ist.
        Alle anderen Eigenschaften werden dann auf alle Knoten im Unterbaum erweitert, anstatt nur auf den `target`-Knoten anzuwenden. Der Standardwert ist `false`. Beachten Sie, dass, wenn ein Nachkomme von `target` entfernt wird, Änderungen in diesem Nachkommen-Unterbaum weiterhin beobachtet werden, bis die Benachrichtigung über die Entfernung selbst zugestellt wurde.
    - `childList` {{optional_inline}}
      - : Auf `true` setzen, um den Zielknoten (und, wenn `subtree` `true` ist, seine Nachkommen) auf das Hinzufügen neuer Kindknoten oder das Entfernen vorhandener Kindknoten zu überwachen.
        Der Standardwert ist `false`.
    - `attributes` {{optional_inline}}
      - : Auf `true` setzen, um Änderungen am Wert von Attributen des überwachten Knotens oder der überwachten Knoten zu verfolgen. Der Standardwert ist `true`, wenn entweder `attributeFilter` oder `attributeOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `attributeFilter` {{optional_inline}}
      - : Ein Array spezifischer Attributnamen, die überwacht werden sollen.
        Wenn diese Eigenschaft nicht enthalten ist, führen Änderungen an allen Attributen zu Mutationsbenachrichtigungen.
    - `attributeOldValue` {{optional_inline}}
      - : Auf `true` setzen, um den vorherigen Wert eines Attributs aufzuzeichnen, das sich ändert, wenn der Knoten oder die Knoten auf Attributänderungen überwacht werden.
        Siehe [Überwachung von Attributwerten](#überwachung_von_attributwerten) für ein Beispiel zum Beobachten von Attributänderungen und Aufzeichnen von Werten.
        Der Standardwert ist `false`.
    - `characterData` {{optional_inline}}
      - : Auf `true` setzen, um den angegebenen Zielknoten (und, wenn `subtree` `true` ist, seine Nachkommen) auf Änderungen an den Zeichenfelddaten im Knoten oder in den Knoten zu überwachen.
        Der Standardwert ist `true`, wenn `characterDataOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `characterDataOldValue` {{optional_inline}}
      - : Auf `true` setzen, um den vorherigen Wert des Textes eines Knotens aufzuzeichnen, wann immer sich der Text an überwachten Knoten ändert.
        Der Standardwert ist `false`.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref('TypeError')}}

  - : In einem der folgenden Fälle ausgelöst:

    - Die `options` sind so konfiguriert, dass tatsächlich nichts überwacht wird.
      (Zum Beispiel, wenn `childList`, `attributes` und `characterData` alle `false` sind.)
    - Der Wert von `options.attributes` ist `false` (was darauf hinweist, dass Attributänderungen nicht überwacht werden sollen), aber `attributeOldValue` ist `true` und/oder
      `attributeFilter` ist vorhanden.
    - Die Option `characterDataOldValue` ist `true`, aber `characterData` ist `false` (was darauf hinweist, dass Änderungen an Zeichen nicht überwacht werden sollen).

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel demonstrieren wir, wie die Methode **`observe()`** auf einer Instanz von [`MutationObserver`](/de/docs/Web/API/MutationObserver) aufgerufen wird, nachdem diese eingerichtet wurde, indem ein Ziel-Element
und ein `options`-Objekt übergeben werden.

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

Wenn Sie einen Knoten mit der Option `subtree` beobachten, erhalten Sie weiterhin Benachrichtigungen über Änderungen an den Nachkommen des Knotens, selbst nachdem ein Teil des Unterbaums entfernt wurde. Sobald jedoch die Benachrichtigung über die Entfernung zugestellt wird, werden weitere Änderungen am gelösten Unterbaum den Beobachter nicht mehr auslösen.

Dies verhindert, dass Ihnen Änderungen entgehen, die nach der Trennung auftreten und bevor Sie die Gelegenheit haben, den verschobenen Knoten oder Unterbaum speziell auf Änderungen zu überwachen. Theoretisch bedeutet dies, dass Sie, wenn Sie die [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekte, die die Änderungen beschreiben, verfolgen, in der Lage sein sollten, die Änderungen "rückgängig zu machen" und den DOM auf seinen ursprünglichen Zustand zurückzusetzen.

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

In diesem Beispiel wird ein Mutation Observer eingerichtet, um Änderungen an den
`status`- und `username`-Attributen in allen Elementen innerhalb eines Unterbaums zu beobachten, der die Namen der Benutzer in einem Chat-Raum anzeigt. Dadurch kann der Code
zum Beispiel Änderungen an Benutzernamen widerspiegeln oder markieren, ob sie abwesend von der Tastatur
(AFK) oder offline sind.

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

const userListElement = document.querySelector("#userlist");

const observer = new MutationObserver(callback);
observer.observe(userListElement, {
  attributeFilter: ["status", "username"],
  attributeOldValue: true,
  subtree: true,
});
```

### Überwachung von Attributwerten

In diesem Beispiel beobachten wir ein Element auf Änderungen der Attributwerte und fügen eine Schaltfläche hinzu, die das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut des Elements zwischen `"ltr"` und `"rtl"` umschaltet. Im Callback des Beobachters protokollieren wir den alten Wert des Attributs.

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
