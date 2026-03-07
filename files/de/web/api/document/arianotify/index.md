---
title: "Dokument: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

Die **`ariaNotify()`** Methode der [`Document`](/de/docs/Web/API/Document) Schnittstelle gibt an, dass ein bestimmter Text von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, falls verfügbar und aktiviert.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Eine Zeichenkette, die den anzukündigenden Text angibt.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität. Sie wird nach jeder Ankündigung gesprochen, die ein Screenreader derzeit macht.
        - `high`
          - : Die Ankündigung hat hohe Priorität. Sie wird sofort gesprochen und unterbricht jede Ankündigung, die ein Screenreader derzeit macht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmgesteuert eine Screenreader-Ankündigung auszulösen. Diese Methode bietet eine ähnliche Funktionalität wie [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Regionen können nur Ankündigungen nach Änderungen im DOM machen, während eine `ariaNotify()`-Ankündigung jederzeit erfolgen kann.
- Bei Live-Region-Ankündigungen wird der aktualisierte Inhalt des geänderten DOM-Knotens vorgelesen, während der Inhalt von `ariaNotify()`-Ankündigungen unabhängig vom DOM-Inhalt definiert werden kann.

Entwickler umgehen oft die Einschränkungen von Live-Regionen mit versteckten DOM-Knoten, auf die Live-Region-Einstellungen angewendet werden. Diese werden dann mit dem zu verkündenden Inhalt aktualisiert. Dies ist ineffizient und fehleranfällig und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ankündigungen der Reihe nach vor, aber dies kann nicht für alle Screenreader und Plattformen garantiert werden. Normalerweise wird nur die letzte Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen in einer zu kombinieren.

Zum Beispiel sollten die folgenden Aufrufe:

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert werden:

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()`-Ankündigungen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Screenreader-Nutzer nicht mit zu vielen Benachrichtigungen zu überfluten, da dies eine schlechte Benutzererfahrung darstellen kann.

### Ankündigungsprioritäten

Eine `ariaNotify()`-Ankündigung mit `priority: high` wird vor einer `ariaNotify()`-Ankündigung mit `priority: normal` angekündigt.

`ariaNotify()`-Ankündigungen entsprechen ungefähr ARIA Live-Region-Ankündigungen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Jedoch werden `aria-live`-Ankündigungen Priorität über `ariaNotify()`-Ankündigungen haben.

### Sprachwahl

Screenreader wählen eine geeignete Stimme für `ariaNotify()`-Ankündigungen (in Bezug auf Akzent, Aussprache usw.) basierend auf der Sprache, die im {{htmlelement("html")}} Element mit dem [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut angegeben ist, oder der Standardsprache des Benutzeragenten, falls kein `lang`-Attribut gesetzt ist.

### Integrationsrichtlinie für Berechtigungen

Die Verwendung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Speziell dort, wo eine definierte Richtlinie die Verwendung blockiert, schlagen Ankündigungen, die mit `ariaNotify()` erstellt werden, ohne Meldung fehl (sie werden nicht gesendet).

## Beispiele

### Grundlegende `ariaNotify()` Nutzung

Dieses Beispiel enthält einen {{htmlelement("button")}}, der eine Screenreader-Ankündigung auslöst, wenn er angeklickt wird.

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

Versuchen Sie, einen Screenreader zu aktivieren und dann den Button zu drücken. Sie sollten "Hi there, I'm Ed Winchester." vom Screenreader hören.

### Beispiel einer zugänglichen Einkaufsliste

Dieses Beispiel ist eine Einkaufsliste, die es Ihnen ermöglicht, Artikel hinzuzufügen und zu entfernen und die Gesamtkosten aller Artikel zu verfolgen. Wenn ein Artikel hinzugefügt oder entfernt wird, lesen Screenreader eine Ankündigung vor, die sagt, welcher Artikel hinzugefügt/entfernt wurde und wie hoch die aktualisierten Gesamtkosten sind.

#### HTML

Unser HTML enthält ein {{htmlelement("form")}}, das zwei {{htmlelement("input")}} Elemente enthält — ein `text`-Input zur Eingabe von Artikelnamen und ein `number`-Input zur Eingabe von Preisen. Beide Eingaben sind [`erforderlich`](/de/docs/Web/HTML/Reference/Attributes/required), und die `number`-Eingabe hat einen [`Schritt`](/de/docs/Web/HTML/Reference/Attributes/step) Wert von `0.01`, um zu verhindern, dass keine Preiswerte (wie große Dezimalzahlen) eingegeben werden.

Unter dem Formular haben wir eine [nicht geordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul), um die hinzugefügten Artikel darin darzustellen, und ein {{htmlelement("p")}} Element, um die Gesamtkosten anzuzeigen.

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

In unserem nächsten Codeblock definieren wir eine Funktion namens `updateTotal()`, die die Aufgabe hat, den im `<p>` Element angezeigten Preis auf den aktuellen Wert der `total` Variable zu aktualisieren:

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

Als Nächstes definieren wir eine Funktion namens `addItemToList()`. Im Hauptteil der Funktion erstellen wir zuerst ein {{htmlelement("li")}} Element, um einen neu hinzugefügten Artikel zu speichern. Wir speichern den Artikelnamen und Preis in [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Attributen auf dem Element und machen seinen Textinhalt gleich einer Zeichenkette, die den Artikel und Preis enthält. Wir erstellen auch ein {{htmlelement("button")}} Element mit dem Text "Remove &lt;item-name>", fügen dann die Listenelement zum nicht geordneten Liste, und den Button zur Listelement hinzu.

Der zweite Hauptteil des Funktionskörpers ist eine `click` Ereignislistener-Definition auf dem Button. Wenn der Button angeklickt wird, holen wir zuerst eine Referenz auf den übergeordneten Knoten des Buttons — das Listenelement, in dem er sich befindet. Wir subtrahieren dann die Zahl, die im `data-price` Attribut des Listenelements enthalten ist, von der `total` Variable, rufen die `updateTotal()` Funktion auf, um den angezeigten Gesamtpreis zu aktualisieren, rufen dann `ariaNotify()` auf, um den entfernten Artikel und den neuen Gesamtpreis anzukündigen. Schließlich entfernen wir das Listenelement aus dem DOM.

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

Unser letzter Codeblock fügt dem `<form>` einen `submit` Ereignislistener hinzu. Im Handler rufen wir zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um das Absenden des Formulars zu stoppen. Wir rufen dann `addItemToList()` auf, um den neuen Artikel und seinen Preis in der Liste anzuzeigen, addieren den Preis zur `total` Variable, rufen `updateTotal()` auf, um den angezeigten Gesamtwert zu aktualisieren, und rufen `ariaNotify()` auf, um den hinzugefügten Artikel und den neuen Gesamtpreis anzukündigen. Schließlich leeren wir die aktuellen Eingabefeldwerte, um bereit für den nächsten hinzuzufügenden Artikel zu sein.

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

Versuchen Sie, einen Screenreader zu aktivieren und dann einige Artikel hinzuzufügen und zu entfernen. Sie sollten hören, dass sie vom Screenreader angekündigt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
- [ARIA Live Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
