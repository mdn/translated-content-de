---
title: <input type='color'>
slug: Web/HTML/Element/input/color
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

{{HTMLElement("input")}} Elemente des Typs **`color`** bieten ein Benutzeroberflächenelement, das es einem Benutzer ermöglicht, eine Farbe auszuwählen, entweder durch eine visuelle Farbauswahloberfläche oder durch Eingabe der Farbe in ein Textfeld im `#rrggbb`-Hexadezimalformat.

Es sind nur einfache Farben (ohne Alphakanal) erlaubt, obwohl CSS-Farben mehr Formate haben, z. B. Farbnamen, funktionale Notationen und ein Hexadezimalformat mit Alphakanal.

Die Darstellung des Elements kann wesentlich von einem Browser und/oder einer Plattform zur anderen variieren – es könnte ein einfaches Texteingabefeld sein, das automatisch überprüft, dass die Farbinformationen im richtigen Format eingegeben werden, oder ein plattformüblicher Farbwähler oder eine Art benutzerdefiniertes Farbauswahlfenster.

{{EmbedInteractiveExample("pages/tabbed/input-color.html", "tabbed-standard")}}

## Wert

Der [`value`](/de/docs/Web/HTML/Element/input#value) eines {{HTMLElement("input")}} Elements des Typs `color` ist immer ein Zeichenfolgenwert, der einen RGB-Farbwert im Hexadezimalformat mit 7 Zeichen angibt. Während Sie die Farbe in Groß- oder Kleinschreibung eingeben können, wird sie in Kleinbuchstaben gespeichert. Der Wert liegt niemals in einem anderen Format vor und ist niemals leer.

> [!NOTE]
> Wenn der Wert auf etwas anderes als eine gültige, voll opake RGB-Farbe _in Hexadezimalschreibweise_ gesetzt wird, wird der Wert auf `#000000` gesetzt. Insbesondere können Sie keine von CSS standardisierten Farbnamen oder CSS-Funktionssyntax verwenden, um den Wert festzulegen. Dies ist sinnvoll, wenn Sie bedenken, dass HTML und CSS separate Sprachen und Spezifikationen sind. Darüber hinaus werden Farben mit einem Alphakanal nicht unterstützt; wenn Sie eine Farbe in der 9-stelligen Hexadezimalschreibweise angeben (z. B. `#009900aa`), wird dies ebenfalls dazu führen, dass die Farbe auf `#000000` gesetzt wird.

## Verwendung von Farbeingaben

Eingaben des Typs `color` sind einfach aufgrund der begrenzten Anzahl von Attributen, die sie unterstützen.

### Vorgabe einer Standardfarbe

Sie können das einfache Beispiel oben aktualisieren, um einen Standardwert festzulegen, damit der Farbwähler mit der Standardfarbe vorab ausgefüllt wird und der Farbwähler (falls vorhanden) auch auf diese Farbe voreingestellt wird:

```html
<input type="color" value="#ff0000" />
```

{{EmbedLiveSample("Providing_a_default_color", 700, 30)}}

Wenn Sie keinen Wert angeben, ist der Standardwert `#000000`, was schwarz ist. Der Wert muss in der siebenstelligen Hexadezimalschreibweise angegeben werden, was bedeutet, dass das "#" Zeichen gefolgt von zwei Ziffern steht, die jeweils Rot, Grün und Blau darstellen, wie dies: `#rrggbb`. Wenn Sie Farben in einem anderen Format haben (wie CSS-Farbnamen oder CSS-Farbfunctions wie `rgb()` oder `hsl()`), müssen Sie sie in Hexadezimalschreibweise konvertieren, bevor Sie den `value` festlegen.

### Verfolgung von Farbänderungen

Wie bei anderen {{HTMLElement("input")}} Typen gibt es zwei Ereignisse, mit denen Sie Änderungen des Farbwerts erfassen können: [`input`](/de/docs/Web/API/Element/input_event) und [`change`](/de/docs/Web/API/HTMLElement/change_event). `input` wird jedes Mal auf dem `<input>`-Element ausgelöst, wenn sich die Farbe ändert. Das `change` Ereignis wird ausgelöst, wenn der Benutzer den Farbwähler schließt. In beiden Fällen können Sie den neuen Wert des Elements ermitteln, indem Sie dessen [`value`](/de/docs/Web/HTML/Element/input#value) betrachten.

Hier ist ein Beispiel, das Änderungen im Laufe der Zeit des Farbwerts überwacht:

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

Wenn ein Browser keine Farbauswahloberfläche unterstützt, wird seine Implementierung von Farbeingaben ein Textfeld sein, das den Inhalt automatisch überprüft, um sicherzustellen, dass der Wert im korrekten Format vorliegt. In diesem Fall können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den aktuell im Bearbeitungsfeld enthaltenen Text auszuwählen.

Wenn der Browser stattdessen einen Farbwähler verwendet, macht `select()` nichts. Sie sollten sich dieses Verhaltens bewusst sein, damit Ihr Code in beiden Fällen angemessen reagieren kann.

```js
colorPicker.select();
```

## Validierung

Der Wert einer Farbeingabe wird als ungültig angesehen, wenn der [Benutzeragent](/de/docs/Glossary/user_agent) nicht in der Lage ist, die Benutzereingabe in eine siebenstellige Hexadezimalschreibweise in Kleinbuchstaben umzuwandeln. Wenn dies der Fall ist, wird die {{cssxref(":invalid")}} Pseudo-Klasse auf das Element angewandt.

## Beispiel

Lassen Sie uns ein Beispiel erstellen, das ein wenig mehr mit der Farbeingabe macht, indem es die [`change`](/de/docs/Web/API/HTMLElement/change_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse verfolgt, um die neue Farbe zu nehmen und sie auf alle {{HTMLElement("p")}} Elemente im Dokument anzuwenden.

### HTML

Das HTML ist ziemlich einfach – ein paar Absätze mit beschreibendem Material mit einem {{HTMLElement("input")}} des Typs `color` mit der ID `color-picker`, die wir verwenden, um die Farbe des Textes der Absätze zu ändern.

```html
<p>
  An example demonstrating the use of the
  <code>&lt;input type="color"&gt;</code> control.
</p>

<label for="color-picker">Color:</label>
<input type="color" value="#ff0000" id="color-picker" />

<p>
  Watch the paragraph colors change when you adjust the color picker. As you
  make changes in the color picker, the first paragraph's color changes, as a
  preview (this uses the <code>input</code> event). When you close the color
  picker, the <code>change</code> event fires, and we detect that to change
  every paragraph to the selected color.
</p>
```

### JavaScript

Zuerst gibt es einige Vorbereitungen. Hier richten wir einige Variablen ein, einschließlich einer Variablen, die die Farbe enthält, die wir beim ersten Laden des Farbwählers verwenden werden, und dann legen wir einen [`load`](/de/docs/Web/API/Window/load_event) Handler fest, der die Hauptstartarbeit erledigt, sobald die Seite vollständig geladen ist.

```js
let colorPicker;
const defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
```

#### Initialisierung

Sobald die Seite geladen ist, wird unser `load` Ereignishandler `startup()` aufgerufen:

```js
function startup() {
  colorPicker = document.querySelector("#color-picker");
  colorPicker.value = defaultColor;
  colorPicker.addEventListener("input", updateFirst, false);
  colorPicker.addEventListener("change", updateAll, false);
  colorPicker.select();
}
```

Dies holt eine Referenz auf das Farbe `&lt;input&gt;` Element in einer Variablen namens `colorPicker`, dann wird der Wert der Farbeingabe auf den Wert von `defaultColor` gesetzt. Dann wird das `input` Ereignis der Farbeingabe so eingerichtet, dass es unsere `updateFirst()` Funktion aufruft, und das `change` Ereignis wird so eingerichtet, dass es `updateAll()` aufruft. Diese werden beide unten gelenkt.

Schließlich rufen wir `select()` auf, um den Textinhalt des Farbeingabefelds auszuwählen, wenn das Steuerelement als Textfeld implementiert ist (dies hat keinen Effekt, wenn stattdessen eine Farbwähler-Oberfläche bereitgestellt wird).

#### Reaktion auf Farbänderungen

Wir bieten zwei Funktionen, die sich mit Farbänderungen befassen. Die `updateFirst()` Funktion wird als Antwort auf das `input` Ereignis aufgerufen. Es ändert die Farbe des ersten Absatzelements im Dokument so, dass es dem neuen Wert der Farbeingabe entspricht. Da `input` Ereignisse jedes Mal ausgelöst werden, wenn eine Anpassung am Wert vorgenommen wird (zum Beispiel, wenn die Helligkeit der Farbe erhöht wird), passieren diese wiederholt, während der Farbwähler verwendet wird.

```js
function updateFirst(event) {
  const p = document.querySelector("p");
  if (p) {
    p.style.color = event.target.value;
  }
}
```

Wenn der Farbwähler geschlossen wird, was darauf hinweist, dass der Wert sich nicht mehr ändern wird (es sei denn, der Benutzer öffnet den Farbwähler erneut), wird ein `change` Ereignis an das Element gesendet. Wir bearbeiten dieses Ereignis mit der `updateAll()` Funktion, indem wir [`Event.target.value`](/de/docs/Web/HTML/Element/input#value) verwenden, um die endgültig ausgewählte Farbe zu erhalten:

```js
function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}
```

Dies setzt die Farbe jedes {{HTMLElement("p")}} Blocks, sodass sein {{cssxref("color")}} Attribut mit dem aktuellen Wert der Farbeingabe übereinstimmt, auf das durch [`event.target`](/de/docs/Web/API/Event/target) verwiesen wird.

### Ergebnis

Das Endergebnis sieht wie folgt aus:

{{EmbedLiveSample("Example", 700, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine 7-stellige Zeichenfolge, die eine
        {{cssxref("&lt;color&gt;")}} in Kleinschrift-Hexadezimalschreibweise angibt
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
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
      <td><strong>IDL Attribute</strong></td>
      <td><code>list</code> und <code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA Rolle</strong></td>
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
