---
title: "MutationObserver: observe()-Methode"
short-title: observe()
slug: Web/API/MutationObserver/observe
l10n:
  sourceCommit: 3fe05682ce997e441f705bd8b74a498e0485db11
---

{{APIRef("DOM WHATWG")}}

Die Methode **`observe()`** des {{domxref("MutationObserver")}} konfiguriert den `MutationObserver` callback, um mit dem Empfangen von Benachrichtigungen über Änderungen am DOM zu beginnen, die den gegebenen Optionen entsprechen.

Abhängig von der Konfiguration kann der Beobachter einen einzelnen {{domxref("Node")}} im DOM-Baum überwachen oder diesen Knoten und einige oder alle seiner Nachkommenknoten. Derselbe Knoten kann von mehreren Beobachtern überwacht werden, und derselbe `MutationObserver` kann Änderungen an verschiedenen Teilen des DOM-Baums und/oder verschiedene Arten von Änderungen überwachen, indem `observe()` mehrmals auf demselben `MutationObserver` aufgerufen wird.

Um den `MutationObserver` zu stoppen (damit keiner seiner Callbacks mehr ausgelöst wird), rufen Sie {{domxref("MutationObserver.disconnect()")}} auf.

## Syntax

```js-nolint
observe(target, options)
```

### Parameter

- `target`
  - : Ein DOM-{{domxref("Node")}} (der ein {{domxref("Element")}} sein kann) innerhalb des DOM-Baums, das auf Änderungen überwacht werden soll, oder als Wurzel eines Unterbaums von Knoten, die überwacht werden sollen.
- `options`

  - : Ein Objekt, das Optionen bereitstellt, die beschreiben, welche DOM-Mutationen dem `mutationObserver`'s `callback` gemeldet werden sollen.
    Mindestens einer der Werte `childList`, `attributes` und/oder `characterData` muss `true` sein, wenn Sie `observe()` aufrufen.
    Andernfalls wird eine `TypeError`-Exception ausgelöst.

    Die Optionen sind wie folgt:

    - `subtree` {{optional_inline}}
      - : Auf `true` setzen, um die Überwachung auf den gesamten Unterbaum von Knoten, der an `target` verwurzelt ist, auszudehnen.
        Alle anderen Eigenschaften werden dann auf alle Knoten im Unterbaum angewendet, anstatt nur auf den `target`-Knoten. Der Standardwert ist `false`. Beachten Sie, dass, wenn ein Nachkomme von `target` entfernt wird, Änderungen in diesem Nachkommenunterbaum weiterhin beobachtet werden, bis die Benachrichtigung über die Entfernung selbst geliefert wurde.
    - `childList` {{optional_inline}}
      - : Auf `true` setzen, um den Zielknoten (und, falls `subtree` `true` ist, seine Nachkommen) auf das Hinzufügen neuer Kindknoten oder das Entfernen vorhandener Kindknoten zu überwachen.
        Der Standardwert ist `false`.
    - `attributes` {{optional_inline}}
      - : Auf `true` setzen, um Änderungen des Werts von Attributen an dem oder den überwachten Knoten zu beobachten. Der Standardwert ist `true`, wenn entweder `attributeFilter` oder `attributeOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `attributeFilter` {{optional_inline}}
      - : Ein Array von spezifischen Attributnamen, die überwacht werden sollen.
        Wenn diese Eigenschaft nicht enthalten ist, führen Änderungen an allen Attributen zu Mutationsbenachrichtigungen.
    - `attributeOldValue` {{optional_inline}}
      - : Auf `true` setzen, um den vorherigen Wert eines Attributs zu speichern, das sich ändert, wenn der oder die Knoten auf Attributänderungen überwacht werden;
        Siehe [Überwachung von Attributwerten](#überwachung_von_attributwerten) für ein Beispiel, wie Sie Attributänderungen beobachten und Werte aufzeichnen.
        Der Standardwert ist `false`.
    - `characterData` {{optional_inline}}
      - : Auf `true` setzen, um den angegebenen Zielknoten (und, falls `subtree` `true` ist, seine Nachkommen) auf Änderungen der im Knoten oder in Knoten enthaltenen Zeichendaten zu überwachen.
        Der Standardwert ist `true`, wenn `characterDataOldValue` angegeben ist, andernfalls ist der Standardwert `false`.
    - `characterDataOldValue` {{optional_inline}}
      - : Auf `true` setzen, um den vorherigen Wert des Texts eines Knotens zu speichern, wenn sich der Text bei den überwachten Knoten ändert.
        Der Standardwert ist `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref('TypeError')}}

  - : Wird in einem der folgenden Fälle ausgelöst:

    - Die `options` sind so konfiguriert, dass tatsächlich nichts überwacht wird.
      (Zum Beispiel, wenn `childList`, `attributes` und `characterData` alle `false` sind.)
    - Der Wert von `options.attributes` ist `false` (was bedeutet, dass Attributänderungen nicht überwacht werden sollen), aber `attributeOldValue` ist `true`
      und/oder `attributeFilter` ist vorhanden.
    - Die `characterDataOldValue`-Option ist `true`, aber `characterData` ist `false` (was bedeutet, dass Zeichenänderungen nicht überwacht werden sollen).

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel zeigen wir, wie man die Methode **`observe()`** auf einer Instanz von {{domxref("MutationObserver")}} aufruft, nachdem sie eingerichtet wurde, indem man ihr ein Zielelement und ein `options`-Objekt übergibt.

```js
// Erstellen Sie eine neue Instanz von `MutationObserver` namens `observer`,
// dem eine Callback-Funktion übergeben wird
const observer = new MutationObserver(() => {
  console.log("Callback, der ausgeführt wird, wenn der Beobachter ausgelöst wird");
});

// Rufen Sie `observe()` auf, übergeben Sie ihm das zu beobachtende Element und das options-Objekt
observer.observe(document.querySelector("#element-to-observe"), {
  subtree: true,
  childList: true,
});
```

### Entfernte Nachkommen bei Verwendung von `subtree`

Wenn Sie einen Knoten mit der Option `subtree` beobachten, erhalten Sie weiterhin Benachrichtigungen über Änderungen an den Nachkommen des Knotens, auch nachdem ein Teil des Unterbaums entfernt wurde. Sobald jedoch die Benachrichtigung über die Entfernung geliefert wurde, lösen weitere Änderungen im abgetrennten Unterbaum den Beobachter nicht mehr aus.

Dies verhindert, dass Ihnen Änderungen entgehen, die auftreten, nachdem die Verbindung getrennt wurde und bevor Sie die Chance haben, speziell damit zu beginnen, den verschobenen Knoten oder Unterbaum auf Änderungen zu überwachen. Theoretisch bedeutet dies, dass, wenn Sie die {{domxref("MutationRecord")}}-Objekte im Auge behalten, die die aufgetretenen Änderungen beschreiben, Sie die Änderungen "rückgängig" machen können,
wodurch das DOM in seinen ursprünglichen Zustand zurückversetzt wird.

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
      // Nachdem die Benachrichtigung erhalten wurde, dass das Kind entfernt wurde,
      // lösen weitere Änderungen im abgetrennten Unterbaum den Beobachter nicht mehr aus.
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
// Diese Änderung erfolgt vor der "childList target"-Benachrichtigung,
// daher wird sie ebenfalls den Beobachter auslösen.
child.setAttribute("data-foo", "");

// Ausgabe:
// childList target null
// attributes child data-foo
// Es gibt keine "attributes child data-bar"-Benachrichtigung.
```

### Verwendung von `attributeFilter`

In diesem Beispiel wird ein Mutation Observer eingerichtet, um Änderungen an den
`status`- und `username`-Attributen in irgendwelchen Elementen innerhalb eines Unterbaums zu überwachen, der die Namen von Benutzern in einem Chatraum anzeigt. Dadurch kann der Code z.B. Änderungen an Benutzernamen widerspiegeln oder Benutzer als abwesend von der Tastatur (AFK) oder offline markieren.

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

In diesem Beispiel beobachten wir ein Element auf Änderung der Attributwerte und fügen einen Button hinzu, der das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut des Elements zwischen `"ltr"` und `"rtl"` hin- und herschaltet. Im Callback des Beobachters protokollieren wir den alten Wert des Attributs.

#### HTML

```html
<button id="toggle">Richtung wechseln</button><br />
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

## Kompatibilität mit Browsern

{{Compat}}
