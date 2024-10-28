---
title: "MutationObserver: observe() Methode"
short-title: observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("DOM WHATWG")}}

Die [`MutationObserver`](/de/docs/Web/API/MutationObserver)-Methode **`observe()`** konfiguriert den `MutationObserver`-Callback, um mit dem Empfang von Benachrichtigungen über Änderungen am DOM zu beginnen, die den angegebenen Optionen entsprechen.

Abhängig von der Konfiguration kann der Beobachter einen einzelnen [`Node`](/de/docs/Web/API/Node) im DOM-Baum oder diesen Knoten sowie einige oder alle seiner Nachkommen beobachten. Derselbe Knoten kann von mehreren Beobachtern überwacht werden, und derselbe `MutationObserver` kann auf Änderungen in verschiedenen Teilen des DOM-Baums und/oder auf verschiedene Arten von Änderungen achten, indem er `observe()` mehrmals auf demselben `MutationObserver` aufruft.

Um den `MutationObserver` zu stoppen (damit keiner seiner Callbacks mehr ausgelöst wird), rufen Sie [`MutationObserver.disconnect()`](/de/docs/Web/API/MutationObserver/disconnect) auf.

## Syntax

```js-nolint
observe(target, options)
```

### Parameter

- `target`
  - : Ein DOM-[`Node`](/de/docs/Web/API/Node) (welches ein [`Element`](/de/docs/Web/API/Element) sein kann) im DOM-Baum, der auf Änderungen überwacht werden soll, oder der die Wurzel eines Teilbaums von Knoten sein soll, die überwacht werden sollen.
- `options`

  - : Ein Objekt, das Optionen bietet, die beschreiben, welche DOM-Mutationen an den `callback` des `mutationObserver` gemeldet werden sollen.
    Mindestens eines der Felder `childList`, `attributes` und/oder `characterData` muss `true` sein, wenn `observe()` aufgerufen wird. Andernfalls wird eine `TypeError`-Ausnahme ausgelöst.

    Die Optionen sind wie folgt:

    - `subtree` {{optional_inline}}
      - : Auf `true` gesetzt, um die Überwachung auf den gesamten von `target` verwurzelten Teilbaum von Knoten auszudehnen. Alle anderen Eigenschaften werden dann auf alle Knoten im Teilbaum ausgeweitet, anstatt nur auf den `target`-Knoten angewendet zu werden. Der Standardwert ist `false`. Beachten Sie, dass wenn ein Abkömmling von `target` entfernt wird, Änderungen in diesem Teilbaum weiterhin beobachtet werden, bis die Benachrichtigung über die Entfernung selbst geliefert wurde.
    - `childList` {{optional_inline}}
      - : Auf `true` gesetzt, um den Zielknoten (und, falls `subtree` `true` ist, seine Nachkommen) auf das Hinzufügen neuer Kinderknoten oder das Entfernen bestehender Kinderknoten zu überwachen. Der Standardwert ist `false`.
    - `attributes` {{optional_inline}}
      - : Auf `true` gesetzt, um Änderungen des Wertes der Attribute auf dem oder den überwachten Knoten zu beobachten. Der Standardwert ist `true`, wenn entweder `attributeFilter` oder `attributeOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `attributeFilter` {{optional_inline}}
      - : Ein Array spezifischer Attributnamen, die überwacht werden sollen. Wenn diese Eigenschaft nicht enthalten ist, führen Änderungen an allen Attributen zu Mutationsbenachrichtigungen.
    - `attributeOldValue` {{optional_inline}}
      - : Auf `true` gesetzt, um den vorherigen Wert eines Attributs aufzuzeichnen, das sich ändert, wenn auf dem oder den überwachten Knoten nach Attributänderungen gesucht wird. Siehe [Überwachung von Attributwerten](#überwachung_von_attributwerten) für ein Beispiel für die Beobachtung von Attributänderungen und die Aufzeichnung von Werten. Der Standardwert ist `false`.
    - `characterData` {{optional_inline}}
      - : Auf `true` gesetzt, um den angegebenen Zielknoten (und, falls `subtree` `true` ist, seine Nachkommen) auf Änderungen der im oder den Knoten enthaltenen Zeichendaten zu überwachen. Der Standardwert ist `true`, wenn `characterDataOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `characterDataOldValue` {{optional_inline}}
      - : Auf `true` gesetzt, um den vorherigen Wert des Textes eines Knotens aufzuzeichnen, wann immer sich der Text auf den überwachten Knoten ändert. Der Standardwert ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref('TypeError')}}

  - : Wird in einem der folgenden Umstände ausgelöst:

    - Die `options` sind so konfiguriert, dass tatsächlich nichts überwacht wird. (Zum Beispiel, wenn `childList`, `attributes` und `characterData` alle `false` sind.)
    - Der Wert von `options.attributes` ist `false` (was darauf hinweist, dass Attributänderungen nicht überwacht werden sollen), aber `attributeOldValue` ist `true` und/oder `attributeFilter` ist vorhanden.
    - Die `characterDataOldValue`-Option ist `true`, aber `characterData` ist `false` (was darauf hinweist, dass Zeichenänderungen nicht überwacht werden sollen).

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel zeigen wir, wie man die Methode **`observe()`** auf einer Instanz von [`MutationObserver`](/de/docs/Web/API/MutationObserver) aufruft, nachdem sie eingerichtet wurde, indem man ihr ein Ziel-Element und ein `options`-Objekt übergibt.

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

Wenn Sie einen Knoten mit der `subtree`-Option beobachten, erhalten Sie weiterhin Benachrichtigungen über Änderungen an den Nachkommen des Knotens, selbst nachdem ein Teil des Teilbaums entfernt wurde. Sobald jedoch die Benachrichtigung über die Entfernung geliefert wurde, werden weitere Änderungen am getrennten Teilbaum den Beobachter nicht mehr auslösen.

Dies verhindert, dass Sie Änderungen verpassen, die nach der Unterbrechung der Verbindung auftreten und bevor Sie die Gelegenheit haben, den verschobenen Knoten oder Teilbaum konkret auf Änderungen zu überwachen. Theoretisch bedeutet dies, dass, wenn Sie die [`MutationRecord`](/de/docs/Web/API/MutationRecord)-Objekte im Auge behalten, die die aufgetretenen Änderungen beschreiben, Sie die Änderungen "rückgängig machen" und das DOM in seinen ursprünglichen Zustand zurückversetzen könnten.

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

In diesem Beispiel wird ein Mutationsbeobachter eingerichtet, um Änderungen an den Attributen `status` und `username` in beliebigen Elementen innerhalb eines Teilbaums, der die Namen der Benutzer eines Chatraums anzeigt, zu beobachten. Dies ermöglicht es dem Code, beispielsweise Änderungen an den Spitznamen der Benutzer widerzuspiegeln oder sie als abwesend von der Tastatur (AFK) oder offline zu markieren.

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
