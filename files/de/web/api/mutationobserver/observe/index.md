---
title: "MutationObserver: observe() Methode"
short-title: observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM WHATWG")}}

Die [`MutationObserver`](/de/docs/Web/API/MutationObserver)-Methode **`observe()`** konfiguriert den `MutationObserver`
Callback, um Benachrichtigungen über Änderungen am DOM zu erhalten, die den angegebenen Optionen entsprechen.

Abhängig von der Konfiguration kann der Beobachter einen einzelnen [`Node`](/de/docs/Web/API/Node) im DOM-Baum überwachen oder diesen Knoten und einige oder alle seiner Nachkommen. Derselbe Knoten kann von mehreren Beobachtern überwacht werden, und derselbe `MutationObserver` kann Änderungen an verschiedenen Teilen des DOM-Baumes und/oder verschiedene Arten von Änderungen beobachten, indem `observe()` mehrmals auf demselben `MutationObserver` aufgerufen wird.

Um den `MutationObserver` zu stoppen (sodass keiner seiner Callbacks mehr ausgelöst wird), rufen Sie [`MutationObserver.disconnect()`](/de/docs/Web/API/MutationObserver/disconnect) auf.

## Syntax

```js-nolint
observe(target, options)
```

### Parameter

- `target`
  - : Ein DOM [`Node`](/de/docs/Web/API/Node) (der ein [`Element`](/de/docs/Web/API/Element) sein kann) innerhalb des DOM-Baumes, der auf Änderungen überwacht werden soll oder der Wurzel eines überwachten Teilbaums sein soll.
- `options`

  - : Ein Objekt, das Optionen bereitstellt, die beschreiben, welche DOM-Änderungen dem `mutationObserver`-`callback` gemeldet werden sollen.
    Mindestens einer der Werte `childList`, `attributes` und/oder `characterData` muss `true` sein, wenn Sie `observe()` aufrufen.
    Andernfalls wird eine `TypeError`-Ausnahme ausgelöst.

    Die Optionen sind wie folgt:

    - `subtree` {{optional_inline}}
      - : Auf `true` setzen, um die Überwachung auf den gesamten Teilbaum der am `target` verwurzelten Knoten auszudehnen.
        Alle anderen Eigenschaften werden dann auf alle Knoten im Teilbaum ausgeweitet, anstatt nur auf den `target`-Knoten. Der Standardwert ist `false`. Beachten Sie, dass wenn ein Nachkomme von `target` entfernt wird, Änderungen in diesem Nachkommenteilbaum weiterhin beobachtet werden, bis die Benachrichtigung über die Entfernung selbst erfolgt ist.
    - `childList` {{optional_inline}}
      - : Auf `true` setzen, um den Zielknoten (und, falls `subtree` `true` ist, seine Nachkommen) auf das Hinzufügen neuer oder das Entfernen bestehender Kinderknoten zu überwachen.
        Der Standardwert ist `false`.
    - `attributes` {{optional_inline}}
      - : Auf `true` setzen, um Änderungen an den Attributwerten des überwachten Knotens oder der Knoten zu überwachen. Der Standardwert ist `true`, wenn entweder `attributeFilter` oder `attributeOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `attributeFilter` {{optional_inline}}
      - : Ein Array mit speziellen Attributnamen, die überwacht werden sollen.
        Ist diese Eigenschaft nicht enthalten, führen Änderungen an allen Attributen zu Mutationsbenachrichtigungen.
    - `attributeOldValue` {{optional_inline}}
      - : Auf `true` setzen, um den vorherigen Wert eines Attributs zu speichern, das überwacht wird;
        Siehe [Überwachung von Attributwerten](#überwachung_von_attributwerten) für ein Beispiel zur Überwachung von Attributänderungen und zur Aufzeichnung der Werte.
        Der Standardwert ist `false`.
    - `characterData` {{optional_inline}}
      - : Auf `true` setzen, um den angegebenen Zielknoten (und, falls `subtree` `true` ist, seine Nachkommen) auf Änderungen der im Knoten oder in den Knoten enthaltenen Zeichendaten zu überwachen.
        Der Standardwert ist `true`, wenn `characterDataOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `characterDataOldValue` {{optional_inline}}
      - : Auf `true` setzen, um den vorherigen Wert eines Knotentextes zu speichern, wann immer sich der Text der überwachten Knoten ändert.
        Der Standardwert ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref('TypeError')}}

  - : Wird ausgelöst unter den folgenden Umständen:

    - Die `options` sind so konfiguriert, dass tatsächlich nichts überwacht wird.
      (Zum Beispiel, wenn `childList`, `attributes` und `characterData` alle `false` sind.)
    - Der Wert von `options.attributes` ist `false` (was darauf hinweist, dass Attributänderungen nicht überwacht werden sollen), aber `attributeOldValue` ist `true` und/oder
      `attributeFilter` ist vorhanden.
    - Die `characterDataOldValue` Option ist `true`, aber `characterData` ist `false` (was darauf hinweist, dass Zeichenänderungen nicht überwacht werden sollen).

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel demonstrieren wir, wie die Methode **`observe()`** auf einer Instanz von [`MutationObserver`](/de/docs/Web/API/MutationObserver) aufgerufen wird, nachdem sie eingerichtet wurde. Dabei wird ein Ziel-Element und ein `options`-Objekt übergeben.

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

Wenn Sie einen Knoten unter Verwendung der `subtree`-Option überwachen, erhalten Sie weiterhin Benachrichtigungen über Änderungen an den Nachkommen des Knotens, selbst nachdem ein Teil des Teilbaums entfernt wurde. Allerdings werden, sobald die Benachrichtigung über die Entfernung erfolgt ist, keine weiteren Änderungen am getrennten Teilbaum mehr den Beobachter auslösen.

Dies verhindert, dass Sie Änderungen versäumen, die nach der Trennung auftreten und bevor Sie die Möglichkeit haben, den verschobenen Knoten oder Teilbaum speziell auf Änderungen zu überwachen. Theoretisch bedeutet das, dass wenn Sie die [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekte, die die aufgetretenen Änderungen beschreiben, verfolgen, Sie in der Lage sein sollten, die Änderungen "rückgängig zu machen", sodass Sie das DOM wieder in seinen ursprünglichen Zustand zurückversetzen können.

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
`status` und `username` Attributen in allen innerhalb eines Teilbaumes enthaltenen Elementen zu überwachen, der die Namen der Benutzer in einem Chatraum anzeigt. Dies ermöglicht es dem Code, zum Beispiel Änderungen an Benutzernamen widerzuspiegeln oder zu kennzeichnen, dass sie abwesend von der Tastatur (AFK) oder offline sind.

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

In diesem Beispiel beobachten wir ein Element auf Attributwertänderungen und fügen einen Knopf hinzu, der das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut des Elements zwischen `"ltr"` und `"rtl"` umschaltet. Innerhalb des Callbacks des Beobachters protokollieren wir den alten Wert des Attributs.

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
