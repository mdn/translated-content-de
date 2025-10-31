---
title: "ARIA: aria-labelledby-Attribut"
short-title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das `aria-labelledby`-Attribut identifiziert das Element (oder die Elemente), das das Element beschriftet, auf das es angewendet wird.

## Beschreibung

Die `aria-labelledby`-Eigenschaft ermöglicht es Autoren, andere Elemente auf der Seite zu referenzieren, um einen zugänglichen Namen festzulegen. Dies ist nützlich, wenn Sie Elemente verwenden, die keine native Unterstützung für das Zuordnen von Elementen haben, um einen zugänglichen Namen bereitzustellen.

Einige Elemente erhalten ihren [zugänglichen Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Beispielsweise wird der zugängliche Name für ein {{HTMLElement('button')}}, {{HTMLElement('a')}} oder {{HTMLElement('td')}} aus dem Text zwischen den öffnenden und schließenden Tags generiert. Andere Elemente, wie Formularelemente {{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}, erhalten ihren zugänglichen Namen aus dem Inhalt der zugeordneten Elemente; für diese Elemente stammt der zugängliche Name von der {{HTMLElement('label')}} mit einem `for`-Attribut, {{HTMLElement('legend')}} bzw. {{HTMLElement('caption')}}.

Alle interaktiven Elemente müssen einen zugänglichen Namen haben. `aria-labelledby` kann verwendet werden, um auf ein anderes Element zu verweisen, um dessen zugänglichen Namen zu definieren, wenn der zugängliche Name eines Elements Inhalte aus anderen Bereichen im DOM benötigt.

Wenn es keinen referenzierbaren Inhalt gibt, um einen zugänglichen Namen zu erstellen, sollte stattdessen das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut verwendet werden.

Der Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es bietet dem Benutzer einen erkennbaren, zugänglichen Namen für ein interaktives Element. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat Vorrang vor allen anderen Methoden zur Bereitstellung eines zugänglichen Namens, einschließlich `aria-label`, {{HTMLElement('label')}} und des inneren Texts des Elements.

Die `aria-labelledby`- und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribute verweisen beide auf andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte sich auf kurzen Text beziehen, der dem Element einen zugänglichen Namen verleiht. `aria-describedby` wird verwendet, um auf längeren Inhalt zu verweisen, der eine Beschreibung bietet. Wenn es kein Element im DOM gibt, das eine kurze Bezeichnung für einen zugänglichen Namen für ein interaktives Element bereitstellt, verwenden Sie `aria-label`, um den zugänglichen Namen für ein interaktives Element zu definieren.

> [!NOTE]
> Während im amerikanischen Englisch "labeled" mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und wird in Zugänglichkeits-APIs verwendet.

Das folgende Beispiel verwendet `aria-labelledby`, um einen zugänglichen Namen für ein Kontrollkästchen-Input bereitzustellen, indem der Textinhalt eines benachbarten Elements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

Beachten Sie, dass die Verwendung von `aria-labelledby` in dieser Situation der Verwendung eines HTML-{{HTMLElement('label')}}-Elements mit dem `for`-Attribut ähnelt, es jedoch sehr wichtige Unterschiede gibt. Das `aria-labelledby`-Attribut definiert nur den zugänglichen Namen. Es bietet keine der anderen Funktionalitäten von `<label>`, wie etwa das Aktivieren des Inputs durch Klicken auf das beschriftende Element. Das muss mit JavaScript wieder ergänzt werden.

Glücklicherweise arbeitet das HTML-{{HTMLElement('input')}} mit `type="checkbox"` mit nativen `<label>`. Wenn möglich, verwenden Sie Folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby`-Eigenschaft hat die höchste Priorität, wenn Browser zugängliche Namen berechnen. Beachten Sie, dass es andere Methoden zur Benennung des Elements überschreibt, einschließlich `aria-label`, andere Benennungsattribute und sogar den Inhalt des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der zugängliche Name "Yellow".

2. Die `aria-labelledby`-Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste, was bedeutet, dass Sie mehr als ein Element in einen einzigen zugänglichen Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements selbst einfügen, um auf seinen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel ist der zugängliche Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der Werte der `aria-labelledby`-Eigenschaft ist wichtig. Wenn mehr als ein Element von `aria-labelledby` referenziert wird, werden die Inhalte der referenzierten Elemente in der Reihenfolge kombiniert, in der sie im `aria-labelledby`-Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der zugängliche Name "13 ARIA attributes you need to know read more" gewesen.

4. Die `aria-labelledby`-Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur die erste Referenz verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Der `aria-labelledby`-Eigenschaftswert kann Inhalte von Elementen einschließen, die nicht einmal sichtbar sind. Auch wenn Sie Benutzern von assistiven Technologien den gleichen Inhalt wie allen anderen Benutzern zur Verfügung stellen sollten, können Sie Inhalte von Elementen mit dem HTML-[`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden)-Attribut, CSS-[`display: none`](/de/docs/Web/CSS/Reference/Properties/display) und CSS-[`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility) im berechneten Namensstring einschließen.

6. Die `aria-labelledby`-Eigenschaft integriert den Wert von Eingabeelementen. Wenn der Wert auf ein `<input>` verweist, wird der aktuelle Wert des Formularelements in den berechneten Namensstring aufgenommen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby`-Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` auf ein anderes Element verweist, das ebenfalls `aria-labelledby` enthält, wird das `aria-labelledby`-Attribut auf dem referenzierten Element ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein kann und auf verborgene Inhalte verweisen kann, ist das Testen mit assistiven Technologien sehr wichtig, um sicherzustellen, dass der erwartete Name den Benutzern präsentiert wird.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die sich auf die Elemente beziehen, die das aktuelle Element beschriften.

## Zugehörige Schnittstellen

- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Die Eigenschaft `ariaLabelledByElements` ist Teil der Schnittstelle jedes Elements. Ihr Wert ist ein Array von Subklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Die Eigenschaft `ariaLabelledByElements` ist Teil der Schnittstelle jedes benutzerdefinierten Elements. Ihr Wert ist ein Array von Subklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby`-Attribut widerspiegeln ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in fast allen Rollen **außer** Rollen verwendet, die nicht vom Autor mit einem zugänglichen Namen versehen werden können.

Das `aria-labelledby`-Attribut wird **NICHT** unterstützt in:

- [`caption`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`code`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`deletion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`emphasis`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`generic`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role)
- [`insertion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`mark`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/mark_role)
- [`paragraph`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) / [`none`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role)
- [`strong`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`subscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
- [`suggestion`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/suggestion_role)
- [`superscript`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles)
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
