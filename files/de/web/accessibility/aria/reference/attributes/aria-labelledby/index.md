---
title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

Das `aria-labelledby`-Attribut identifiziert das Element (oder die Elemente), das/die das Element, auf das es angewendet wird, bezeichnet.

## Beschreibung

Die `aria-labelledby`-Eigenschaft ermöglicht es Autoren, andere Elemente auf der Seite zu referenzieren, um einen zugänglichen Namen zu definieren. Dies ist nützlich, wenn Elemente verwendet werden, die keine native Unterstützung dafür bieten, Elemente zu verknüpfen, um einen zugänglichen Namen bereitzustellen.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Beispielsweise kommt der zugängliche Name für ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie das Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}, erhalten ihren zugänglichen Namen aus dem Inhalt von zugeordneten Elementen; für diese Elemente stammt der zugängliche Name vom {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} und {{HTMLElement('caption')}}.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um ein anderes Element zu referenzieren, um seinen zugänglichen Namen zu definieren, wenn der zugängliche Name eines Elements Inhalte aus anderen Teilen des DOM verwenden muss.

Wenn es keine Inhalte gibt, die referenziert werden können, um einen zugänglichen Namen zu erstellen, sollte stattdessen das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwendet werden.

Der Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden, einen zugänglichen Namen bereitzustellen, einschließlich `aria-label`, {{HTMLElement('label')}}, und dem inneren Text des Elements.

Die `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribute referenzieren beide andere Elemente, um textuelle Alternativen zu berechnen. `aria-labelledby` sollte kurzen Text referenzieren, der dem Element einen zugänglichen Namen gibt. `aria-describedby` wird verwendet, um längere Inhalte, die eine Beschreibung bereitstellen, zu referenzieren. Wenn es kein Element im DOM gibt, das ein kurzes Label bereitstellt, das für einen zugänglichen Namen für ein interaktives Element geeignet ist, verwenden Sie `aria-label`, um den zugänglichen Namen für ein interaktives Element zu definieren.

> [!NOTE]
> Während im amerikanischen Englisch "labeled" mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und wird in Accessibility-APIs verwendet.

Das folgende Beispiel verwendet `aria-labelledby`, um einen zugänglichen Namen für ein Checkbox-Input-Element zu definieren, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation der Verwendung eines HTML {{HTMLElement('label')}}-Elements mit dem `for`-Attribut ähnlich ist, es gibt jedoch einige wichtige Unterschiede. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet keine anderen Funktionalitäten von `<label>`, wie das Aktivieren des zugeordneten Eingabeelements durch Klicken auf das beschreibende Element. Dies muss mit JavaScript hinzugefügt werden.

Glücklicherweise funktioniert das HTML-{{HTMLElement('input')}} mit `type="checkbox"` nativ mit `<label>`. Wenn möglich, verwenden Sie Folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass sie andere Methoden zur Benennung des Elements überschreibt, einschließlich `aria-label`, anderer Benennungsattribute und sogar des Inhalts des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste, was bedeutet, dass Sie mehr als ein Element zu einem einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements selbst einbeziehen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel ist der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der Werte von `aria-labelledby` ist wichtig. Wenn mehr als ein Element von `aria-labelledby` referenziert wird, wird der Inhalt jedes referenzierten Elements in der Reihenfolge kombiniert, in der sie im `aria-labelledby`-Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name gewesen "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby`-Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur der erste Verweis verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Der `aria-labelledby`-Eigenschaftswert kann Inhalte von Elementen enthalten, die nicht einmal sichtbar sind. Obwohl Sie Benutzern von unterstützenden Technologien den gleichen Inhalt wie allen anderen Benutzern bieten sollten, können Sie Inhalte aus Elementen mit dem HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS [`display: none`](/de/docs/Web/CSS/display) und CSS [`visibility: hidden`](/de/docs/Web/CSS/visibility) in den berechneten Namenstring aufnehmen.

6. Die `aria-labelledby`-Eigenschaft umfasst den Wert von Eingabe-Elementen. Wenn der Wert ein `<input>` referenziert, wird der aktuelle Wert des Formularelements in den berechneten Namensstring aufgenommen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` ein anderes Element referenziert, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut des referenzierten Elements ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein und versteckte Inhalte referenzieren kann, ist das Testen mit unterstützenden Technologien, um sicherzustellen, dass der erwartete Name den Benutzern präsentiert wird, sehr wichtig.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einer oder mehreren ID-Werten, die auf die Elemente verweisen, die das aktuelle Element beschriften.

## Zugehörige Schnittstellen

- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Die `ariaLabelledByElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Die `ariaLabelledByElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in fast allen Rollen verwendet **außer** in Rollen, denen vom Autor kein zugänglicher Name bereitgestellt werden kann.

Das `aria-labelledby`-Attribut wird **NICHT** unterstützt in:

- [`code`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`caption`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`term`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role)
- [`time`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)

## Spezifikationen

{{Specifications}}

## Siehe auch

- HTML {{HTMLElement('label')}} Element
- HTML {{HTMLElement('legend')}} Element
- HTML {{HTMLElement('caption')}} Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
