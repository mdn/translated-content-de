---
title: "ElementInternals: labels-Eigenschaft"
short-title: labels
slug: Web/API/ElementInternals/labels
l10n:
  sourceCommit: 03e93e0948768ea78474e77a53795698ebca5836
---

{{APIRef("Web Components")}}

Die schreibgeschützte Eigenschaft **`labels`** der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) gibt die dem Element zugeordneten Labels zurück.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die alle diesem Element zugeordneten Label-Elemente enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn für das Element die Eigenschaft `formAssociated` nicht auf `true` gesetzt ist.

## Barrierefreiheitsaspekte

Ein {{HTMLElement("label")}}, das einem formularzugeordneten benutzerdefinierten Element zugeordnet ist, wird assistiven Technologien auf dieselbe Weise bereitgestellt wie ein Label für ein integriertes Formular-Steuerelement.
In Chrome und Firefox stellt es den zugänglichen Namen für das Element bereit.

Damit ein Screenreader diesen Namen erreichen kann, muss das Element außerdem fokussierbar sein.
Ein benutzerdefiniertes Element ist standardmäßig nicht fokussierbar.
Es benötigt ein [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut oder eine mit [`delegatesFocus: true`](/de/docs/Web/API/ShadowRoot/delegatesFocus) erstellte Shadow-Root sowie ein darin enthaltenes fokussierbares Element.

Safari stellt das Label nicht auf diese Weise bereit.
VoiceOver liest ein mit einem formularzugeordneten benutzerdefinierten Element verknüpftes `<label>` nicht vor ([WebKit-Fehler 259124](https://webkit.org/b/259124)).
Ein Element, das sich ausschließlich auf die Label-Zuordnung stützt, hat daher in Safari keinen zugänglichen Namen.

Um dem Element in jedem Browser einen zugänglichen Namen zu geben, setzen Sie [`ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel) auf den Internals des Elements und ordnen Sie außerdem das Label zu:

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
    this.internals_.role = "checkbox";
    this.internals_.ariaLabel = "Join newsletter";
  }
}
```

> [!NOTE]
> Das Setzen von `ariaLabel` auf den Internals definiert eine _Standard_-Semantik für das Element.
> Ein auf dem Element selbst gesetztes `aria-label`-Attribut hat Vorrang davor, wodurch ein Seitenautor den Namen überschreiben kann, ohne dass die Komponente ihren eigenen Fallback verliert.

## Beispiele

Das folgende Beispiel zeigt eine benutzerdefinierte Checkbox-Komponente mit einem damit verknüpften {{HTMLElement("label")}}-Element.
Das Ausgeben des Werts von `labels` in der Konsole gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit einem Eintrag zurück, der dieses Label repräsentiert.

```html
<form id="myForm">
  <custom-checkbox id="custom-checkbox" tabindex="0"></custom-checkbox>
  <label for="custom-checkbox">Join newsletter</label>
</form>
```

```js
class CustomCheckbox extends HTMLElement {
  static formAssociated = true;

  constructor() {
    super();
    this.internals_ = this.attachInternals();
  }

  // …
}

window.customElements.define("custom-checkbox", CustomCheckbox);

const element = document.getElementById("custom-checkbox");
console.log(element.internals_.labels); // NodeList [ label ]
```

> [!NOTE]
> Ein Label wird erst dann in `labels` aufgenommen, wenn es geparst wurde.
> Das Lesen von `labels` aus [`connectedCallback()`](/de/docs/Web/API/Web_components/Using_custom_elements#custom_element_lifecycle_callbacks) gibt eine leere `NodeList` zurück, wenn das zugeordnete `<label>` im Quelltext nach dem Element steht, da der Parser es noch nicht erreicht hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ElementInternals.ariaLabel`](/de/docs/Web/API/ElementInternals/ariaLabel)
- [`HTMLElement.attachInternals()`](/de/docs/Web/API/HTMLElement/attachInternals)
- [`ElementInternals.form`](/de/docs/Web/API/ElementInternals/form)
