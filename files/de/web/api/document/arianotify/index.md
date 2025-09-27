---
title: "Dokument: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{ApiRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`ariaNotify()`** Methode der Schnittstelle [`Document`](/de/docs/Web/API/Document) gibt an, dass ein bestimmter Text von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll, falls verfügbar und aktiviert.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Ein String, der den anzukündigenden Text spezifiziert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität. Sie wird nach jeder Ankündigung, die ein Screenreader gerade macht, gesprochen.
        - `high`
          - : Die Ankündigung hat hohe Priorität. Sie wird sofort gesprochen und unterbricht jede Ankündigung, die ein Screenreader gerade macht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmgesteuert eine Screenreader-Ankündigung auszulösen. Diese Methode bietet ähnliche Funktionalität wie [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Bereiche können nur Ankündigungen machen, die nach Änderungen am DOM auftreten, während eine `ariaNotify()`-Ankündigung jederzeit erfolgen kann.
- Live-Bereich-Ankündigungen beinhalten das Vorlesen des aktualisierten Inhalts des geänderten DOM-Knotens, während der Inhalt der `ariaNotify()`-Ankündigung unabhängig vom DOM-Inhalt definiert werden kann.

Entwickler umgehen oft die Einschränkungen von Live-Bereichen, indem sie versteckte DOM-Knoten mit Live-Bereichen festlegen und deren Inhalte mit dem anzukündigenden Inhalt aktualisieren. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ankündigungen nacheinander vor, aber dies kann nicht bei allen Screenreadern und Plattformen garantiert werden. Normalerweise wird nur die letzte Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen in einer zu kombinieren.

Zum Beispiel die folgenden Aufrufe:

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

wären besser kombiniert:

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()`-Ankündigungen erfordern keine {{Glossary("transient_activation", "vorübergehende Aktivierung")}}; Sie sollten darauf achten, Screenreader-Nutzer nicht mit zu vielen Benachrichtigungen zu überschwemmen, da dies eine schlechte Benutzererfahrung darstellen könnte.

### Ankündigungsprioritäten

Eine `ariaNotify()`-Ankündigung mit `priority: high` wird vor einer `ariaNotify()`-Ankündigung mit `priority: normal` angekündigt.

`ariaNotify()`-Ankündigungen sind ungefähr gleichwertig mit ARIA-Live-Bereich-Ankündigungen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Allerdings haben `aria-live`-Ankündigungen Vorrang vor `ariaNotify()`-Ankündigungen.

### Sprachwahl

Screenreader wählen eine geeignete Stimme (bezüglich Akzent, Aussprache usw.), mit der sie `ariaNotify()`-Ankündigungen vorlesen, basierend auf der im {{htmlelement("html")}}-Element angegebenen Sprache im [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut oder der Standardsprache des User-Agents, wenn kein `lang`-Attribut gesetzt ist.

### Integration der Berechtigungsrichtlinie

Die Nutzung von `ariaNotify()` in einem Dokument oder einem {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Speziell, wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle mit `ariaNotify()` erstellten Ankündigungen stillschweigend fehl (sie werden nicht gesendet).

## Beispiele

### Grundlegende `ariaNotify()`-Verwendung

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

Versuchen Sie, einen Screenreader zu aktivieren und dann den Knopf zu drücken. Sie sollten hören, wie "Hi there, I'm Ed Winchester." vom Screenreader gesprochen wird.

### Beispiel für eine barrierefreie Einkaufsliste

Dieses Beispiel ist eine Einkaufsliste, die es Ihnen ermöglicht, Artikel hinzuzufügen und zu entfernen, und die die Gesamtkosten aller Artikel berechnet. Wenn ein Artikel hinzugefügt oder entfernt wird, lesen Screenreader eine Ankündigung vor, um zu sagen, welcher Artikel hinzugefügt/entfernt wurde und wie hoch die aktualisierten Gesamtkosten sind.

#### HTML

Unser HTML enthält ein {{htmlelement("form")}} mit zwei {{htmlelement("input")}}-Elementen — ein `text`-Eingabefeld zum Eingeben von Artikelnamen und ein `number`-Eingabefeld zum Eingeben von Preisen. Beide Eingaben sind [`required`](/de/docs/Web/HTML/Reference/Attributes/required), und das `number`-Eingabefeld hat einen [`step`](/de/docs/Web/HTML/Reference/Attributes/step) Wert von `0.01`, um zu verhindern, dass Nicht-Preis-Werte (wie große Dezimalzahlen) eingegeben werden.

Unter dem Formular haben wir eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) zur Darstellung der hinzugefügten Artikel und ein {{htmlelement("p")}}-Element zur Anzeige der Gesamtkosten.

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

Unser Skript beginnt mit mehreren Konstantendefinitionen, um Referenzen zum `<form>`, unseren zwei `<input>`-Elementen und unseren `<ul>` und `<p>`-Elementen zu speichern. Wir fügen auch eine `total`-Variable hinzu, um den Gesamtpreis aller Artikel zu speichern.

```js live-sample___shopping-list
const form = document.querySelector("form");
const item = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");
const priceList = document.querySelector("ul");
const totalOutput = document.querySelector("p");

let total = 0;
```

In unserem nächsten Codeblock definieren wir eine Funktion namens `updateTotal()`, die eine Aufgabe hat – den Preis im `<p>`-Element auf den aktuellen Wert der `total`-Variable zu aktualisieren:

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

Als nächstes definieren wir eine Funktion namens `addItemToList()`. Innerhalb des Funktionskörpers erstellen wir zuerst ein {{htmlelement("li")}}-Element, um einen neu hinzugefügten Artikel zu speichern. Wir speichern den Artikelnamen und den Preis in [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*) Attributen auf dem Element und setzen dessen Textinhalt auf einen String, der den Artikel und Preis enthält. Wir erstellen auch ein {{htmlelement("button")}}-Element mit dem Text "Remove &lt;item-name>", fügen dann das Listenelement der ungeordneten Liste hinzu und den Button dem Listenelement.

Der zweite Hauptteil des Funktionskörpers ist eine `click`-Ereignislistenerdefinition auf dem Button. Wenn der Button geklickt wird, greifen wir zuerst auf eine Referenz zum Elternelement des Buttons zu - dem Listenelement, in dem es sich befindet. Wir subtrahieren dann die im `data-price` Attribut des Listenelements enthaltene Zahl von der `total`-Variable, rufen die `updateTotal()` Funktion auf, um den angezeigten Gesamtpreis zu aktualisieren, rufen dann `ariaNotify()` auf, um den entfernten Artikel und den neuen Gesamtbetrag anzukündigen. Schließlich entfernen wir das Listenelement aus dem DOM.

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

Unser letzter Codeblock fügt dem `<form>` einen `submit`-Ereignislistener hinzu. Innerhalb der Handlerfunktion rufen wir zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um das Absenden des Formulars zu verhindern. Dann rufen wir `addItemToList()` auf, um den neuen Artikel und seinen Preis in der Liste anzuzeigen, den Preis zur `total`-Variable hinzuzufügen, `updateTotal()` aufzurufen, um den angezeigten Gesamtbetrag zu aktualisieren, und dann `ariaNotify()` aufzurufen, um den hinzugefügten Artikel und den neuen Gesamtbetrag anzukündigen. Schließlich löschen wir die aktuellen Eingabefeldwerte, um sie für den nächsten hinzuzufügenden Artikel bereit zu machen.

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
- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
