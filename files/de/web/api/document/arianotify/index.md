---
title: "Dokument: ariaNotify()-Methode"
short-title: ariaNotify()
slug: Web/API/Document/ariaNotify
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{ApiRef("DOM")}}

Die **`ariaNotify()`**-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle stellt eine Zeichenkette in die Warteschlange, die von einem {{Glossary("screen_reader", "Screenreader")}} angekündigt werden soll.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Eine Zeichenkette, die den Text spezifiziert, der angekündigt werden soll.
- `options` {{optional_inline}}
  - : Ein Options-Objekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ankündigung spezifiziert.
        Mögliche Werte sind:
        - `normal`
          - : Die Ankündigung hat normale Priorität.
            Sie wird nach jeder Ankündigung gesprochen, die ein Screenreader derzeit macht.
            Dies ist der Standardwert.
        - `high`
          - : Die Ankündigung hat hohe Priorität.
            Sie wird sofort gesprochen und unterbricht jede Ankündigung, die ein Screenreader derzeit macht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`**-Methode kann verwendet werden, um programmatisch eine Screenreader-Ankündigung auszulösen. Diese Methode bietet ähnliche Funktionalität wie [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Regionen können nur Ankündigungen machen, nachdem Änderungen am DOM vorgenommen wurden, während eine `ariaNotify()`-Ankündigung jederzeit gemacht werden kann.
- Bei Ankündigungen in Live-Regionen wird der aktualisierte Inhalt des geänderten DOM-Knotens gelesen, während der Inhalt der `ariaNotify()`-Ankündigung unabhängig vom DOM-Inhalt definiert werden kann.

Entwickler umgehen oft die Einschränkungen von Live-Regionen, indem sie verborgene DOM-Knoten mit Live-Regionen darauf verwenden, deren Inhalte mit dem angekündigten Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ankündigungen der Reihe nach vor, aber dies kann nicht für alle Screenreader und Plattformen garantiert werden. Normalerweise wird nur die letzte Ankündigung gesprochen. Es ist zuverlässiger, mehrere Ankündigungen zu einer zu kombinieren.

Zum Beispiel wären die folgenden Aufrufe:

```js
document.ariaNotify("Hello there.");
document.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert:

```js
document.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()`-Ankündigungen erfordern keine {{Glossary("transient_activation", "vorübergehende Aktivierung")}}; Sie sollten darauf achten, Screenreader-Nutzer nicht mit zu vielen Benachrichtigungen zu überfluten, da dies eine schlechte Benutzererfahrung schaffen könnte.

### Ankündigungsprioritäten

Eine `ariaNotify()`-Ankündigung mit `priority: high` wird vor einer `ariaNotify()`-Ankündigung mit `priority: normal` angekündigt.

`ariaNotify()`-Ankündigungen sind grob gleichwertig mit ARIA-Live-Region-Ankündigungen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Allerdings haben `aria-live`-Ankündigungen Vorrang vor `ariaNotify()`-Ankündigungen.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme, um `ariaNotify()`-Ankündigungen vorzulesen (in Bezug auf Akzent, Aussprache usw.), basierend auf der in dem {{htmlelement("html")}}-Element angegebenen Sprache im [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut oder der Standardsprache des Benutzeragenten, wenn kein `lang`-Attribut gesetzt ist.

### Integration der Berechtigungspolitik

Die Nutzung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Speziell dort, wo eine definierte Richtlinie die Nutzung blockiert, schlagen alle mit `ariaNotify()` erzeugten Ankündigungen geräuschlos fehl (sie werden nicht gesendet).

## Beispiele

### Grundlegende Nutzung von `ariaNotify()`

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

Das Ergebnis ist wie folgt:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und dann die Taste zu drücken. Sie sollten hören, wie der Screenreader "Hi there, I'm Ed Winchester." sagt.

### Beispiel für eine zugängliche Einkaufsliste

Dieses Beispiel ist eine Einkaufsliste, die es ermöglicht, Artikel hinzuzufügen und zu entfernen, und die die Gesamtkosten aller Artikel nachverfolgt. Wenn ein Artikel hinzugefügt oder entfernt wird, wird von Screenreadern eine Ankündigung vorgelesen, die sagt, welcher Artikel hinzugefügt/entfernt wurde und was die aktualisierte Gesamtsumme ist.

#### HTML

Unser HTML enthält ein {{htmlelement("form")}}, das zwei {{htmlelement("input")}}-Elemente enthält — ein `text`-Input zum Eingeben von Artikelnamen und ein `number`-Input zum Eingeben von Preisen. Beide Eingaben sind [`required`](/de/docs/Web/HTML/Reference/Attributes/required), und das `number`-Input hat einen [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Wert von `0.01`, um zu verhindern, dass Nicht-Preiswerte (wie große Dezimalzahlen) eingegeben werden.

Unter dem Formular haben wir eine [ungeordnete Liste](/de/docs/Web/HTML/Reference/Elements/ul), um hinzugefügte Artikel darin darzustellen, und ein {{htmlelement("p")}}-Element, um die Gesamtkosten anzuzeigen.

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

Unser Skript beginnt mit mehreren konstanten Definitionen, um Referenzen zum `<form>`, unseren beiden `<input>`-Elementen und unseren `<ul>`- und `<p>`-Elementen zu speichern. Wir fügen auch eine `total`-Variable hinzu, um den Gesamtpreis aller Artikel zu speichern.

```js live-sample___shopping-list
const form = document.querySelector("form");
const item = document.querySelector("input[type='text']");
const price = document.querySelector("input[type='number']");
const priceList = document.querySelector("ul");
const totalOutput = document.querySelector("p");

let total = 0;
```

Im nächsten Codeblock definieren wir eine Funktion namens `updateTotal()`, die eine Aufgabe hat — den Preis, der im `<p>`-Element angezeigt wird, auf den aktuellen Wert der `total`-Variablen zu aktualisieren:

```js live-sample___shopping-list
function updateTotal() {
  totalOutput.textContent = `Total: £${Number(total).toFixed(2)}`;
}
```

Als nächstes definieren wir eine Funktion namens `addItemToList()`. Im Funktionskörper erstellen wir zunächst ein {{htmlelement("li")}}-Element, um einen neu hinzugefügten Artikel zu speichern. Wir speichern den Artikelnamen und den Preis in [`data-*`](/de/docs/Web/HTML/Reference/Global_attributes/data-*)-Attributen auf dem Element und machen seinen Textinhalt gleich einer Zeichenkette, die den Artikel und den Preis enthält. Wir erstellen auch ein {{htmlelement("button")}}-Element mit dem Text "Remove &lt;item-name>", fügen dann das Listenelement der unbeordneten Liste hinzu und den Button dem Listenelement.

Der zweite Hauptteil des Funktionskörpers ist eine Definition eines `click`-Ereignislisteners auf dem Button. Wenn der Button geklickt wird, greifen wir zunächst auf eine Referenz zum Elternelement des Buttons zu — dem Listenelement, in dem sich der Button befindet. Wir subtrahieren dann die Zahl, die im `data-price`-Attribut des Listenelements enthalten ist, von der `total`-Variablen, rufen die `updateTotal()`-Funktion auf, um den angezeigten Gesamtpreis zu aktualisieren, und rufen `ariaNotify()` auf, um den entfernten Artikel und den neuen Gesamtbetrag anzukündigen. Schließlich entfernen wir das Listenelement aus dem DOM.

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

Unser letzter Codeblock fügt einen `submit`-Ereignislistener zum `<form>` hinzu. Im Funktionshandler rufen wir zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) auf das Ereignisobjekt auf, um das Absenden des Formulars zu verhindern. Wir rufen dann `addItemToList()` auf, um den neuen Artikel und den Preis in der Liste anzuzeigen, fügen den Preis zur `total`-Variablen hinzu, rufen `updateTotal()` auf, um den angezeigten Gesamtbetrag zu aktualisieren, und rufen `ariaNotify()` auf, um den hinzugefügten Artikel und den neuen Gesamtbetrag anzukündigen. Schließlich leeren wir die aktuellen Eingabefeldwerte, damit der nächste Artikel hinzugefügt werden kann.

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

Das Ergebnis ist wie folgt:

{{EmbedLiveSample("shopping-list", "100%", 500, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und einige Artikel hinzuzufügen und zu entfernen. Sie sollten hören können, dass sie von dem Screenreader angekündigt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
