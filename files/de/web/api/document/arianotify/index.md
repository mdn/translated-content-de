---
title: "Dokumentation: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

{{ApiRef("DOM")}}

Die **`ariaNotify()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle spezifiziert, dass eine gegebene Textzeichenkette von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, falls verfügbar und aktiviert.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Eine Zeichenkette, die den Text angibt, der angekündigt werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt enthält die folgenden Eigenschaften:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität. Sie wird gesprochen, nachdem jede laufende Ankündigung eines Screenreaders beendet ist.
        - `high`
          - : Die Ankündigung hat hohe Priorität. Sie wird sofort gesprochen und unterbricht jede laufende Ankündigung eines Screenreaders.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmgesteuert eine Screenreader-Ankündigung auszulösen. Diese Methode bietet eine ähnliche Funktionalität wie [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Regionen können nur Ankündigungen nach Änderungen im DOM machen, während eine `ariaNotify()` Ankündigung jederzeit gemacht werden kann.
- Live-Region-Ankündigungen beinhalten das Vorlesen des aktualisierten Inhalts des geänderten DOM-Knotens, während `ariaNotify()` Ankündigungsinhalte unabhängig vom DOM-Inhalt definiert werden können.

Entwickler umgehen oft die Einschränkungen von Live-Regionen, indem sie versteckte DOM-Knoten mit Live-Regionen darauf verwenden, deren Inhalte mit dem anzukündigenden Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()` Ankündigungen nacheinander vor, aber dies kann nicht über alle Screenreader und Plattformen hinweg garantiert werden. Normalerweise wird nur die jüngste Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen in eine zu kombinieren.

Zum Beispiel seien die folgenden Aufrufe:

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert:

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()` Ankündigungen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Screenreader-Benutzer nicht mit zu vielen Benachrichtigungen zu überhäufen, da dies eine schlechte Benutzererfahrung erzeugen könnte.

### Ankündigungsprioritäten

Eine `ariaNotify()` Ankündigung mit `priority: high` wird vor einer `ariaNotify()` Ankündigung mit `priority: normal` angekündigt.

`ariaNotify()` Ankündigungen sind im Großen und Ganzen ARIA Live-Region Ankündigungen wie folgt gleichwertig:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Jedoch werden `aria-live` Ankündigungen Vorrang vor `ariaNotify()` Ankündigungen haben.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme, mit der sie `ariaNotify()` Ankündigungen lesen (in Bezug auf Akzent, Aussprache, etc.), basierend auf der Sprache, die im `{{htmlelement("html")}}` Element mit dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut spezifiziert wird, oder der Standardsprache des Benutzeragenten, falls kein `lang` Attribut gesetzt ist.

### Integration der Berechtigungspolitik

Die Verwendung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Konkret bedeutet das, dass, wenn eine definierte Richtlinie die Nutzung blockiert, alle mit `ariaNotify()` erstellten Ankündigungen stillschweigend fehlschlagen (sie werden nicht gesendet).

## Beispiele

### Grundlegende `ariaNotify()` Verwendung

Dieses Beispiel enthält einen {{htmlelement("button")}}, der eine Screenreader-Ankündigung auslöst, wenn er geklickt wird.

```html live-sample___basic-arianotify
<button>Press</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.ariaNotify("Hi there, I'm Ed Winchester.");
});
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und dann die Taste zu drücken. Sie sollten "Hi there, I'm Ed Winchester." vom Screenreader gesprochen hören.

### Beispiel einer barrierefreien Einkaufsliste

Dieses Beispiel ist eine Einkaufsliste, die es Ihnen erlaubt, Artikel hinzuzufügen und zu entfernen und die Gesamtkosten aller Artikel festzuhalten. Wenn ein Artikel hinzugefügt oder entfernt wird, lesen Screenreader eine Ankündigung vor, um zu sagen, welcher Artikel hinzugefügt/entfernt wurde und wie hoch die aktualisierte Summe ist.

#### HTML

Unser HTML enthält ein {{htmlelement("form")}} mit zwei {{htmlelement("input")}} Elementen — ein `text`-Feld zum Eingeben der Artikelnamen und ein `number`-Feld zum Eingeben der Preise. Beide Eingabefelder sind [`required`](/de/docs/Web/HTML/Reference/Attributes/required), und das `number`-Feld hat einen [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Wert von `0.01`, um den Eingang von Nicht-Preis-Werten (wie großen Dezimalzahlen) zu verhindern.

Unterhalb des Formulars haben wir eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul), um hinzugefügte Artikel anzuzeigen, und ein {{htmlelement("p")}} Element, um die Gesamtkosten anzuzeigen.

```html live-sample___shopping-list
<h1><code>ariaNotify</code> demo: shopping list</h1>

<form>
  <div>
    <label for="item">Enter item name</label>
    <input type="text" name="item" id="item" required />
  </div>
  <div>
    <label for="price">Enter item price</label>
    <input type="number" name="price" id="price" step="0.01" required />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>

<hr />

<ul></ul>

<p>Total: £0.00</p>
```

```css hidden live-sample___shopping-list
html {
  box-sizing: border-box;
  font: 1.2em / 1.5 system-ui;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  padding: 0 50px;
}

div {
  display: flex;
  margin-bottom: 20px;
}

label {
  flex: 2;
}

input {
  flex: 4;
  padding: 5px;
}

form button {
  padding: 5px 10px;
  font-size: 1em;
  border-radius: 10px;
  border: 1px solid gray;
}

li {
  margin-bottom: 10px;
}

li button {
  font-size: 0.6rem;
  margin-left: 10px;
}
```

#### JavaScript

Unser Skript beginnt mit mehreren Konstantendefinitionen, um Referenzen auf das `<form>`, unsere beiden `<input>` Elemente und unsere `<ul>` und `<p>` Elemente zu speichern. Wir enthalten auch eine `total` Variable, um den Gesamtpreis aller Artikel zu speichern.

```js live-sample___shopping-list
const form = document.querySelector("form");
const item = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");
const priceList = document.querySelector("ul");
const totalOutput = document.querySelector("p");

let total = 0;
```

Im nächsten Codeblock definieren wir eine Funktion namens `updateTotal()`, die eine Aufgabe hat — den im `<p>` Element angezeigten Preis auf den aktuellen Wert der `total` Variablen zu aktualisieren:

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

Als Nächstes definieren wir eine Funktion namens `addItemToList()`. Innerhalb des Funktionskörpers erstellen wir zuerst ein {{htmlelement("li")}} Element, um einen neu hinzugefügten Artikel zu speichern. Wir speichern den Artikelnamen und den Preis in [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Attributen am Element und stellen sicher, dass sein Textinhalt einer Zeichenkette entspricht, die den Artikel und Preis enthält. Wir erstellen außerdem ein {{htmlelement("button")}} Element mit dem Text "Remove &lt;item-name>", fügen dann das Listenelement zur ungeordneten Liste und die Taste zum Listenelement hinzu.

Der zweite Hauptteil des Funktionskörpers ist eine Definition eines `click` Ereignis-Listeners auf der Taste. Wenn die Taste geklickt wird, holen wir zuerst eine Referenz auf das übergeordnete Knotenobjekt der Taste — das Listenelement, in dem sie sich befindet. Wir subtrahieren dann die Zahl, die im `data-price` Attribut des Listenelements enthalten ist, von der `total` Variablen, rufen die `updateTotal()` Funktion auf, um den angezeigten Gesamtpreis zu aktualisieren, und rufen `ariaNotify()` auf, um den entfernten Artikel und den neuen Gesamtbetrag anzukündigen. Schließlich entfernen wir das Listenelement aus dem DOM.

```js live-sample___shopping-list
function addItemToList(item, price) {
  const listItem = document.createElement("li");
  listItem.setAttribute("data-item", item);
  listItem.setAttribute("data-price", price);
  listItem.textContent = `${item}: £${Number(price).toFixed(2)}`;
  const btn = document.createElement("button");
  btn.textContent = `Remove ${item}`;

  priceList.appendChild(listItem);
  listItem.appendChild(btn);

  btn.addEventListener("click", (e) => {
    const listItem = e.target.parentNode;
    total -= Number(listItem.getAttribute("data-price"));
    updateTotal();
    document.ariaNotify(
      `${listItem.getAttribute(
        "data-item",
      )} removed. Total is now £${total.toFixed(2)}.`,
      {
        priority: "high",
      },
    );
    listItem.remove();
  });
}
```

Unser letzter Codeblock fügt einen `submit` Ereignis-Listener zum `<form>` hinzu. Innerhalb des Handlers rufen wir zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignisobjekt auf, um das Absenden des Formulares zu stoppen. Dann rufen wir `addItemToList()` auf, um den neuen Artikel und seinen Preis in der Liste anzuzeigen, addieren den Preis zur `total` Variablen, rufen `updateTotal()` auf, um den angezeigten Gesamtbetrag zu aktualisieren, und rufen `ariaNotify()` auf, um den hinzugefügten Artikel und den neuen Gesamtbetrag anzukündigen. Schließlich leeren wir die aktuellen Eingabefeldwerte, um den nächsten Artikel hinzufügen zu können.

```js live-sample___shopping-list
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addItemToList(item.value, price.value);
  total += Number(price.value);
  updateTotal();

  document.ariaNotify(
    `Item ${item.value}, price £${
      price.value
    }, added to list. Total is now £${total.toFixed(2)}.`,
    {
      priority: "high",
    },
  );

  item.value = "";
  price.value = "";
});
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("shopping-list", "100%", 500, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und dann einige Artikel hinzuzufügen und zu entfernen. Sie sollten hören, wie sie vom Screenreader angekündigt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
