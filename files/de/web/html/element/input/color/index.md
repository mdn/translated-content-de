---
title: <input type="color">
slug: Web/HTML/Element/input/color
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}}-Elemente des Typs **`color`** bieten ein Benutzerschnittstellenelement, das es dem Benutzer ermöglicht, eine Farbe entweder über eine visuelle Farbauswahloberfläche oder durch Eingabe der Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat anzugeben.

Es sind jedoch nur einfache Farben (ohne Alphakanal) zulässig, obwohl CSS-Farben weitere Formate haben, z.B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit Alphakanal.

Die Darstellung des Elements kann erheblich von einem Browser und/oder einer Plattform zur anderen variieren—es könnte ein einfaches Texteingabefeld sein, das automatisch validiert, um sicherzustellen, dass die Farbinformation im richtigen Format eingegeben wird, oder ein an die Plattform angepasster Farbwähler oder eine Art benutzerdefinierte Farbwähler-Fenster.

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

## Wert

Der [`value`](/de/docs/Web/HTML/Element/input#value) eines {{HTMLElement("input")}}-Elements des Typs `color` ist immer eine Zeichenkette, die eine 7-stellige Zeichenfolge enthält, die eine RGB-Farbe im Hexadezimalformat spezifiziert. Während Sie die Farbe in Groß- oder Kleinbuchstaben eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert ist niemals in einer anderen Form und ist niemals leer.

> [!NOTE]
> Wenn der Wert auf etwas eingestellt wird, das keine gültige, vollständig deckende RGB-Farbe _in hexadezimaler Notation_ ist, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie nicht CSS-Standardfarbnamen oder jede CSS-Funktionssyntax verwenden, um den Wert festzulegen. Dies macht Sinn, wenn Sie bedenken, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit Alphakanal nicht unterstützt; die Angabe einer Farbe in 9-stelliger hexadezimaler Notation (z.B. `#009900aa`) führt ebenfalls dazu, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben des Typs `color` sind einfach, aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Vorgabe einer Standardfarbe

Sie können das einfache Beispiel oben aktualisieren, um einen Standardwert festzulegen, sodass der Farbwähler mit der Standardfarbe vorab ausgefüllt wird und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt ist:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standard `#000000`, was schwarz ist. Der Wert muss in siebenstelliger hexadezimaler Notation sein, was bedeutet, dass das "#" Zeichen gefolgt von jeweils zwei Ziffern für Rot, Grün und Blau ist, wie folgt: `#rrggbb`. Wenn Sie Farben haben, die in einem anderen Format sind (wie CSS-Farbnamen oder CSS-Farbfunktionen wie `rgb()` oder `hsl()`), müssen Sie sie vor dem Einstellen des `value` in Hexadezimal konvertieren.

### Nachverfolgung von Farbänderungen

Wie bei anderen {{HTMLElement("input")}}-Typen gibt es zwei Ereignisse, die verwendet werden können, um Änderungen des Farbwerts zu erkennen: {{domxref("Element/input_event", "input")}} und {{domxref("HTMLElement/change_event", "change")}}. `input` wird bei jedem Farbwechsel auf dem `<input>`-Element ausgelöst. Das `change`-Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie seinen [`value`](/de/docs/Web/HTML/Element/input#value) betrachten.

Hier ist ein Beispiel, das zeitliche Änderungen des Farbwerts überwacht:

```js
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

### Auswahl des Wertes

Wenn ein Browser keine Farbwähler-Oberfläche unterstützt, ist seine Implementierung von Farbeingaben ein Textfeld, das den Inhalt automatisch validiert, um sicherzustellen, dass der Wert im richtigen Format ist. In diesem Fall können Sie die {{domxref("HTMLInputElement.select", "select()")}} Methode verwenden, um den aktuell im Bearbeitungsfeld befindlichen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, tut `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig angesehen, wenn der {{Glossary("user agent")}} nicht in der Lage ist, die Benutzereingabe in eine siebenstellige kleingeschriebene hexadezimale Notation zu konvertieren. Wenn und falls dies der Fall ist, wird die {{cssxref(":invalid")}} Pseudoklasse auf das Element angewendet.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit der Farbeingabe macht, indem es die {{domxref("HTMLElement/change_event", "change")}} und {{domxref("Element/input_event", "input")}} Ereignisse nachverfolgt, um die neue Farbe zu nehmen und sie auf jedes {{HTMLElement("p")}}-Element im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach—ein paar Absätze an beschreibendem Material mit einem {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, das wir verwenden werden, um die Farbe des Textes der Absätze zu ändern.

```html
<p>
  Ein Beispiel, das die Verwendung des
  <code>&lt;input type="color"&gt;</code> Kontrolldemonstriert.
</p>

<label for="color-picker">Farbe:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  Beobachten Sie, wie sich die Farben der Absätze ändern, wenn Sie den Farbwähler anpassen. Während Sie Änderungen im Farbwähler vornehmen, ändert sich die Farbe des ersten Absatzes als Vorschau (dies verwendet das <code>input</code>-Ereignis). Wenn Sie den Farbwähler schließen, wird das <code>change</code>-Ereignis ausgelöst, und wir erfassen das, um jeden Absatz auf die ausgewählte Farbe zu ändern.
</p>
```

### JavaScript

Zuerst gibt es ein bisschen Einrichtung. Hier legen wir einige Variablen fest, indem wir eine Variable einrichten, die die Farbe enthält, die wir beim ersten Laden einstellen, und dann einen {{domxref("Window/load_event", "load")}}-Handler einrichten, um die Hauptstartaufgabe zu erledigen, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialisierung

Sobald die Seite geladen ist, wird unser `load`-Ereignishandler, `startup()`, aufgerufen:

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

Dies erhält eine Referenz auf das Farbe-`<input>`-Element in einer Variablen namens `colorPicker`, dann wird der Wert der Farbeingabe auf den Wert in `defaultColor` gesetzt. Dann wird das {{domxref("Element/input_event", "input")}}-Ereignis der Farbeingabe so eingestellt, dass unsere `updateFirst()`-Funktion aufgerufen wird, und das {{domxref("HTMLElement/change_event", "change")}}-Ereignis wird so eingestellt, dass `updateAll()` aufgerufen wird. Diese sind beide unten zu sehen.

Zuletzt rufen wir {{domxref("HTMLInputElement.select", "select()")}} auf, um den Textinhalt der Farbeingabe auszuwählen, wenn das Steuerungselement als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbwähleroberfläche bereitgestellt wird).

#### Reagieren auf Farbänderungen

Wir stellen zwei Funktionen bereit, die mit Farbänderungen umgehen. Die `updateFirst()`-Funktion wird als Reaktion auf das `input`-Ereignis aufgerufen. Sie ändert die Farbe des ersten Absatz-Elements im Dokument, um den neuen Wert der Farbeingabe widerzuspiegeln. Da `input`-Ereignisse ausgelöst werden, jedes Mal wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), passiert dies wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was anzeigt, dass der Wert nicht erneut geändert wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change`-Ereignis an das Element gesendet. Wir behandeln dieses Ereignis mit der `updateAll()`-Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Element/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}}-Blocks so, dass dessen {{cssxref("color")}}-Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, die mithilfe von {{domxref("Event.target", "event.target")}} referenziert wird.

### Ergebnis

Das Endergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine 7-stellige Zeichenkette, die ein
        {{cssxref("&lt;color&gt;")}} in kleingeschriebener hexadezimaler Notation spezifiziert
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
        <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a> und
        <a href="/de/docs/Web/HTML/Element/input#list"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}}
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
