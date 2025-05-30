---
title: "ARIA: aria-labelledby-Attribut"
short-title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das `aria-labelledby`-Attribut identifiziert das Element (oder die Elemente), die das Element kennzeichnen, auf das es angewendet wird.

## Beschreibung

Die `aria-labelledby`-Eigenschaft ermöglicht es Autoren, andere Elemente auf der Seite zu referenzieren, um einen zugänglichen Namen zu definieren. Dies ist nützlich, wenn Elemente verwendet werden, die keine native Unterstützung bieten, um Elemente zu verknüpfen und einen zugänglichen Namen bereitzustellen.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Beispielsweise stammt der zugängliche Name für ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} aus dem Text zwischen den öffnenden und schließenden Tags. Andere Elemente, wie Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}} erhalten ihren zugänglichen Namen aus dem Inhalt der verknüpften Elemente; für diese Elemente stammt der zugängliche Name vom {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} und {{HTMLElement('caption')}}.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um ein anderes Element zu referenzieren, um seinen zugänglichen Namen zu definieren, wenn der zugängliche Name eines Elements Inhalte benötigt, die sich anderswo im DOM befinden.

Wenn es keinen Inhalt gibt, der referenziert werden kann, um einen zugänglichen Namen zu erstellen, sollte stattdessen das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut verwendet werden.

Der Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden, um einen zugänglichen Namen bereitzustellen, einschließlich `aria-label`, {{HTMLElement('label')}} und dem inneren Text des Elements.

Die Attribute `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) referenzieren beide andere Elemente, um alternative Textdarstellungen zu berechnen. `aria-labelledby` sollte einen kurzen Text referenzieren, der dem Element einen zugänglichen Namen bietet. `aria-describedby` wird verwendet, um längere Inhalte zu referenzieren, die eine Beschreibung liefern. Wenn es kein Element im DOM gibt, das ein kurzes Etikett für einen zugänglichen Namen eines interaktiven Elements bietet, verwenden Sie `aria-label`, um den zugänglichen Namen für ein interaktives Element zu definieren.

> [!NOTE]
> Während im amerikanischen Englisch "labeled" mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und wird in den Zugänglichkeits-APIs verwendet.

Das folgende Beispiel verwendet `aria-labelledby`, um einem Checkbox-Eingabefeld einen zugänglichen Namen zu geben, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation ähnlich ist wie die Verwendung eines HTML-{{HTMLElement('label')}}-Elements mit dem `for`-Attribut, es gibt jedoch einige sehr wichtige Unterschiede. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet keine weiteren Funktionen von `<label>`, wie z. B. das Aktivieren des zugeordneten Eingabefelds durch Klicken auf das kennzeichnende Element. Das muss mit JavaScript hinzugefügt werden.

Glücklicherweise funktioniert das HTML-{{HTMLElement('input')}} mit `type="checkbox"` mit dem nativen `<label>`. Wenn möglich, verwenden Sie Folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass sie andere Methoden zur Benennung des Elements übersteuert, einschließlich `aria-label`, anderer Benennungsattribute und sogar des Inhalts des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste an, was bedeutet, dass Sie mehr als ein Element in einen einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements selbst einschließen, um auf dessen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel lautet der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Der Wert der `aria-labelledby`-Eigenschaft ist wichtig. Wenn mehr als ein Element mit `aria-labelledby` referenziert wird, werden die Inhalte jedes referenzierten Elements in der Reihenfolge kombiniert, in der sie im `aria-labelledby`-Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby`-Eigenschaft ignoriert in ihrem Wert wiederholte `id`s. Wenn ein Element mehr als einmal referenziert wird, wird nur der erste Verweis verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Der Wert der `aria-labelledby`-Eigenschaft kann Inhalte von Elementen enthalten, die nicht einmal sichtbar sind. Während Sie Benutzern von Unterstützungstechnologien denselben Inhalt wie allen anderen Benutzern bereitstellen sollten, können Sie Inhalte aus Elementen mit dem HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), CSS [`display: none`](/de/docs/Web/CSS/display) und CSS [`visibility: hidden`](/de/docs/Web/CSS/visibility) in die berechnete Namenszeichenfolge aufnehmen.

6. Die `aria-labelledby`-Eigenschaft integriert den Wert von Eingabeelementen. Wenn der Wert ein `<input>` referenziert, wird der aktuelle Wert des Formularelements in die berechnete Namenszeichenfolge aufgenommen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` auf ein anderes Element verweist, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut des referenzierten Elements ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein kann und versteckte Inhalte referenzieren kann, ist das Testen mit Unterstützungstechnologien, um sicherzustellen, dass der erwartete Name den Benutzern präsentiert wird, sehr wichtig.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die auf die Elemente verweisen, die das aktuelle Element kennzeichnen.

## Zugehörige Schnittstellen

- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Die `ariaLabelledByElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Die `ariaLabelledByElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements. Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

In fast allen Rollen verwendet, **außer** in Rollen, die vom Autor keinen zugänglichen Namen erhalten können.

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

- HTML {{HTMLElement('label')}}-Element
- HTML {{HTMLElement('legend')}}-Element
- HTML {{HTMLElement('caption')}}-Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
