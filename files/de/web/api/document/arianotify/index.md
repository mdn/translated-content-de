---
title: "Document: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{ApiRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`ariaNotify()`** Methode des [`Document`](/de/docs/Web/API/Document)-Interfaces gibt an, dass eine bestimmte Zeichenkette von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden sollte, falls verfügbar und aktiviert.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Eine Zeichenkette, die den anzukündigenden Text spezifiziert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität. Sie wird gesprochen, nachdem jede Ankündigung, die ein Screenreader derzeit macht, beendet ist.
        - `high`
          - : Die Ankündigung hat hohe Priorität. Sie wird sofort gesprochen und unterbricht jede Ankündigung, die ein Screenreader derzeit macht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmatisch eine Screenreader-Ankündigung auszulösen. Diese Methode bietet eine ähnliche Funktionalität wie [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Bereiche können nur nach Änderungen am DOM Ankündigungen machen, während eine `ariaNotify()`-Ankündigung jederzeit gemacht werden kann.
- Live-Bereichsankündigungen beinhalten das Lesen des aktualisierten Inhalts des geänderten DOM-Knotens, während `ariaNotify()`-Ankündigungen unabhängig vom DOM-Inhalt definiert werden können.

Entwickler umgehen oft die Einschränkungen von Live-Bereichen, indem sie versteckte DOM-Knoten mit Live-Bereichen darauf verwenden, deren Inhalte mit dem anzukündigenden Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ankündigungen in der Reihenfolge, aber dies kann nicht bei allen Screenreadern und Plattformen garantiert werden. Normalerweise wird nur die neueste Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen in einer zu kombinieren.

Zum Beispiel, die folgenden Aufrufe:

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

würden besser kombiniert:

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()`-Ankündigungen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Screenreader-Nutzer nicht mit zu vielen Benachrichtigungen zu überlasten, da dies zu einer schlechten Benutzererfahrung führen könnte.

### Ankündigungsprioritäten

Eine `ariaNotify()`-Ankündigung mit `priority: high` wird vor einer `ariaNotify()`-Ankündigung mit `priority: normal` angekündigt.

`ariaNotify()`-Ankündigungen sind in etwa gleichbedeutend mit ARIA-Live-Bereichsankündigungen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Jedoch haben `aria-live`-Ankündigungen Vorrang vor `ariaNotify()`-Ankündigungen.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme aus, um `ariaNotify()`-Ankündigungen vorzulesen (in Bezug auf Akzent, Aussprache usw.) basierend auf der Sprache, die im {{htmlelement("html")}}-Element mittels des [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attributs angegeben ist, oder der Standard-Sprache des Benutzeragenten, falls kein `lang`-Attribut gesetzt ist.

### Integration der Berechtigungspolitik

Die Verwendung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung blockiert, schlagen alle mit `ariaNotify()` erstellten Ankündigungen stillschweigend fehl (sie werden nicht gesendet).

## Beispiele

### Grundlegende `ariaNotify()`-Nutzung

Dieses Beispiel enthält eine {{htmlelement("button")}}, die beim Klicken eine Screenreader-Ankündigung auslöst.

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

Versuchen Sie, einen Screenreader zu aktivieren und dann die Schaltfläche zu drücken. Sie sollten "Hi there, I'm Ed Winchester." vom Screenreader gesprochen hören.

### Beispiel einer zugänglichen Einkaufsliste

Dieses Beispiel ist eine Einkaufsliste, die das Hinzufügen und Entfernen von Artikeln ermöglicht und die Gesamtkosten aller Artikel verfolgt. Wenn ein Artikel hinzugefügt oder entfernt wird, lesen Screenreader eine Ankündigung vor, um zu sagen, welcher Artikel hinzugefügt/entfernt wurde und was die aktualisierte Gesamtsumme ist.

#### HTML

Unser HTML enthält ein {{htmlelement("form")}}, das zwei {{htmlelement("input")}}-Elemente enthält — ein `text`-Eingabefeld zur Eingabe von Artikelnamen und ein `number`-Eingabefeld zur Eingabe von Preisen. Beide Eingaben sind [`required`](/de/docs/Web/HTML/Reference/Attributes/required), und das `number`-Eingabefeld hat einen [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Wert von `0.01`, um zu verhindern, dass Nicht-Preiseingaben (wie große Dezimalzahlen) eingegeben werden.

Unterhalb des Formulars haben wir eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul) zum Rendern der hinzugefügten Artikel und ein {{htmlelement("p")}}-Element, um die Gesamtkosten anzuzeigen.

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

Unser Skript beginnt mit mehreren Konstantendefinitionen zum Speichern von Referenzen auf das `<form>`, unsere beiden `<input>`-Elemente sowie unsere `<ul>`- und `<p>`-Elemente. Wir schließen auch eine `total`-Variable ein, um den Gesamtpreis aller Artikel zu speichern.

```js live-sample___shopping-list
const form = document.querySelector("form");
const item = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");
const priceList = document.querySelector("ul");
const totalOutput = document.querySelector("p");

let total = 0;
```

In unserem nächsten Codeblock definieren wir eine Funktion namens `updateTotal()`, die eine Aufgabe hat — den im `<p>`-Element angezeigten Preis auf den aktuellen Wert der `total`-Variablen zu aktualisieren:

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

Als Nächstes definieren wir eine Funktion namens `addItemToList()`. Innerhalb des Funktionskörpers erstellen wir zuerst ein {{htmlelement("li")}}-Element, um einen neu hinzugefügten Artikel zu speichern. Wir speichern den Artikelnamen und den Preis in [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attributen auf dem Element und setzen dessen Textinhalt gleich mit einer Zeichenkette, die den Artikel und den Preis enthält. Wir erstellen auch ein {{htmlelement("button")}}-Element mit dem Text "Remove &lt;item-name>", fügen dann das Listenelement zur ungeordneten Liste hinzu und die Schaltfläche zum Listenelement.

Der zweite Hauptteil des Funktionskörpers ist eine `click`-Ereignislistener-Definition auf der Schaltfläche. Wenn die Schaltfläche geklickt wird, greifen wir zuerst eine Referenz auf das übergeordnete Element der Schaltfläche — das Listenelement, in dem sie sich befindet. Wir ziehen dann die Zahl, die im `data-price`-Attribut des Listenelements enthalten ist, von der `total`-Variablen ab, rufen die `updateTotal()`-Funktion auf, um den angezeigten Gesamtpreis zu aktualisieren, rufen dann `ariaNotify()` auf, um den entfernten Artikel und die neue Gesamtsumme anzukündigen. Schließlich entfernen wir das Listenelement aus dem DOM.

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

Unser letzter Codeblock fügt einen `submit`-Ereignislistener zum `<form>` hinzu. Innerhalb der Handler-Funktion rufen wir zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf dem Ereignisobjekt auf, um das Absenden des Formulars zu stoppen. Wir rufen dann `addItemToList()` auf, um das neue Element und dessen Preis in der Liste anzuzeigen, den Preis zur `total`-Variablen hinzuzufügen, rufen `updateTotal()` auf, um die angezeigte Gesamtsumme zu aktualisieren, dann rufen wir `ariaNotify()` auf, um den hinzugefügten Artikel und die neue Gesamtsumme anzukündigen. Schließlich leeren wir die aktuellen Eingabefeldwerte, um das nächste Element hinzuzufügen.

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

Versuchen Sie, einen Screenreader zu aktivieren und dann einige Artikel hinzuzufügen und zu entfernen. Sie sollten sie vom Screenreader angekündigt hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
