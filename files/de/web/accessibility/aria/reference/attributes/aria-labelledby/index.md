---
title: "ARIA: aria-labelledby Attribut"
short-title: aria-labelledby
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby
l10n:
  sourceCommit: 2f20bc484496536ba975dc33d9af4e4fb6b9413b
---

Das `aria-labelledby` Attribut identifiziert das Element (oder die Elemente), das dem Element, auf welches es angewendet wird, einen Namen zuordnet.

## Beschreibung

Die `aria-labelledby` Eigenschaft ermöglicht es Autoren, auf andere Elemente auf der Seite zu verweisen, um einen barrierefreien Namen zu definieren. Dies ist nützlich, wenn Elemente verwendet werden, die keine native Unterstützung für die Zuordnung von Elementen haben, um einen barrierefreien Namen bereitzustellen.

Einige Elemente erhalten ihren [barrierefreien Namen](https://w3c.github.io/accname/#dfn-accessible-name) aus ihrem inneren Inhalt. Zum Beispiel kommt der barrierefreie Name für eine {{HTMLElement('button')}}, {{HTMLElement('a')}}, oder {{HTMLElement('td')}}-Element aus dem Text zwischen dem öffnenden und schließenden Tag. Andere Elemente, wie Formular-{{HTMLElement('textarea')}}, {{HTMLElement('fieldset')}} und {{HTMLElement('table')}}-Elemente, erhalten ihren barrierefreien Namen aus dem Inhalt der zugeordneten Elemente; für diese Elemente kommt der barrierefreie Name aus dem {{HTMLElement('label')}} mit einem `for` Attribut, {{HTMLElement('legend')}} und {{HTMLElement('caption')}} jeweils.

Alle interaktiven Elemente müssen einen barrierefreien Namen haben. `aria-labelledby` kann verwendet werden, um auf ein anderes Element zu verweisen, um seinen barrierefreien Namen zu definieren, wenn der barrierefreie Name eines Elements Inhalte aus einer anderen Stelle im DOM verwenden muss.

Wenn es keinen Inhalt gibt, der referenziert werden kann, um einen barrierefreien Namen zu erstellen, sollte das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut stattdessen verwendet werden.

Der Zweck von `aria-labelledby` ist derselbe wie der von `aria-label`. Es stellt dem Benutzer einen erkennbaren, barrierefreien Namen für ein interaktives Element zur Verfügung. Wenn ein Element beide Attribute gesetzt hat, wird `aria-labelledby` verwendet. `aria-labelledby` hat auch Vorrang vor den meisten anderen Methoden, um einen barrierefreien Namen bereitzustellen, wie zum Beispiel {{HTMLElement('label')}} und dem inneren Text des Elements. Beachten Sie, dass [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements) die höchste Priorität hat, um das ARIA-Label zu setzen.

Die `aria-labelledby` und [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribute referenzieren beide andere Elemente, um Textalternativen zu berechnen. `aria-labelledby` sollte auf kurzen Text verweisen, der dem Element einen barrierefreien Namen gibt. `aria-describedby` wird verwendet, um auf längere Inhalte zu verweisen, die eine Beschreibung liefern. Wenn es kein Element im DOM gibt, das ein kurzes, für einen barrierefreien Namen geeignetes Label für ein interaktives Element bereitstellt, verwenden Sie `aria-label`, um den barrierefreien Namen für ein interaktives Element zu definieren.

> [!NOTE]
> Während im amerikanischen Englisch "labeled" mit einem "l" geschrieben wird, hat sich die Schreibweise "labelledby" etabliert und wird in Zugänglichkeits-APIs verwendet.

Das folgende Beispiel verwendet `aria-labelledby`, um einen barrierefreien Namen für eine Kontrollkästcheneingabe bereitzustellen, indem der Textinhalt eines Nachbarelements verwendet wird:

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="tac"></span>
<span id="tac">I agree to the Terms and Conditions.</span>
```

> [!NOTE]
> {{htmlelement("span")}} Elemente haben standardmäßig die [`generic` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) und können `aria-labelledby` nicht verwenden, es sei denn, sie spezifizieren auch eine Rolle, die einen barrierefreien Namen bieten kann.
> Hier tun wir dies mit `role="checkbox"`.

Die Verwendung von `aria-labelledby` ist in dieser Situation ähnlich wie die Verwendung eines HTML-{{HTMLElement('label')}} Elements mit dem `for` Attribut, es gibt jedoch einige sehr wichtige Unterschiede. Das `aria-labelledby` Attribut definiert nur den barrierefreien Namen. Es bietet keine der anderen Funktionen von `<label>`, wie zum Beispiel das Aktivieren der Eingabe, indem auf das Label-Element geklickt wird, das ihm zugeordnet ist. Das muss mit JavaScript hinzugefügt werden.

Zum Glück funktioniert das HTML-{{HTMLElement('input')}} mit `type="checkbox"` mit nativen `<label>`. Wenn möglich, verwenden Sie folgendes:

```html
<label for="tac">
  <input id="tac" type="checkbox" name="terms-and-conditions" />
  I agree to the Terms and Conditions.
</label>
<p><a href="tac.html">Read our Terms and Conditions</a>.</p>
```

### Vorteile (und Nachteile)

1. Die `aria-labelledby` Eigenschaft hat die höchste Priorität, wenn Browser barrierefreie Namen berechnen. Beachten Sie, dass sie andere Methoden zur Benennung des Elements überschreibt, einschließlich `aria-label`, andere Benennungsattribute und sogar den Inhalt des Elements.

   ```html
   <button aria-label="Blue" aria-labelledby="color">Red</button>
   <span id="color">Yellow</span>
   ```

   In diesem Beispiel ist der barrierefreie Name "Yellow".

2. Die `aria-labelledby` Eigenschaft nimmt als Wert eine durch Leerzeichen getrennte ID-Referenzliste, was bedeutet, dass Sie mehr als ein Element zu einem einzigen barrierefreien Namen kombinieren können. Sie können die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements selbst einschließen, um auf dessen eigenen Inhalt zu verweisen.

   ```html
   <h2 id="attr" class="article-title">13 ARIA attributes you need to know</h2>
   <p>
     There are over 50 ARIA states and properties, but 13 of them stand out…
     <a href="13.html" id="rm13" aria-labelledby="rm13 attr">read more</a>
   </p>
   ```

   In diesem Beispiel lautet der barrierefreie Name "read more 13 ARIA attributes you need to know".

3. Die Reihenfolge der `aria-labelledby` Eigenschaftswerte ist wichtig. Wenn mehr als ein Element durch `aria-labelledby` referenziert wird, wird der Inhalt jedes referenzierten Elements in der Reihenfolge kombiniert, in der sie in dem `aria-labelledby` Wert referenziert werden. Hätten wir `aria-labelledby="attr rm13">` geschrieben, wäre der barrierefreie Name "13 ARIA attributes you need to know read more".

4. Die `aria-labelledby` Eigenschaft ignoriert wiederholte `id`s in ihrem Wert. Wenn ein Element mehr als einmal referenziert wird, wird nur der erste Verweis verarbeitet. `aria-labelledby="attr attr rm13 rm13">` wird als `aria-labelledby="attr rm13">` behandelt.

5. Die `aria-labelledby` Eigenschaftswerte können Inhalte von Elementen beinhalten, die nicht einmal sichtbar sind. Während Sie den Nutzern von unterstützenden Technologien den gleichen Inhalt wie allen anderen Nutzern bereitstellen sollten, können Sie Inhalte von Elementen mit dem HTML-Attribut [`hidden`](/de/docs/Web/HTML/Reference/Global_attributes/hidden), der CSS-Eigenschaft [`display: none`](/de/docs/Web/CSS/Reference/Properties/display) und der CSS-Eigenschaft [`visibility: hidden`](/de/docs/Web/CSS/Reference/Properties/visibility) in die berechnete Namenszeichenfolge einbeziehen.

6. Die `aria-labelledby` Eigenschaft integriert den Wert von Eingabeelementen. Wenn der Wert auf ein `<input>` verweist, wird der aktuelle Wert des Formularelements in die berechnete Namenszeichenfolge aufgenommen und ändert sich, wenn der Wert aktualisiert wird.

7. Die `aria-labelledby` Eigenschaft kann nicht verkettet werden. Wenn ein Element mit `aria-labelledby` auf ein anderes Element verweist, das ebenfalls `aria-labelledby` hat, wird das `aria-labelledby`-Attribut auf dem referenzierten Element ignoriert.

> [!WARNING]
> Da die Berechnung des Namens eines Elements mit `aria-labelledby` komplex sein und auf versteckte Inhalte verweisen kann, ist das Testen mit unterstützenden Technologien sehr wichtig, um sicherzustellen, dass der erwartete Name den Nutzern präsentiert wird.

## Werte

- ID-Referenzliste
  - : Durch Leerzeichen getrennte Liste von einem oder mehreren ID-Werten, die auf die Elemente verweisen, die das aktuelle Element beschriften.

## Zugehörige Schnittstellen

- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Die `ariaLabelledByElements`-Eigenschaft ist Teil der Schnittstelle jedes Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby` Attribut reflektieren ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).
- [`ElementInternals.ariaLabelledByElements`](/de/docs/Web/API/ElementInternals/ariaLabelledByElements)
  - : Die `ariaLabelledByElements`-Eigenschaft ist Teil der Schnittstelle jedes benutzerdefinierten Elements.
    Ihr Wert ist ein Array von Unterklassen von [`Element`](/de/docs/Web/API/Element), die die `id`-Referenzen im `aria-labelledby` Attribut reflektieren ([mit einigen Vorbehalten](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references)).

## Zugehörige Rollen

Wird in fast allen Rollen verwendet **außer** Rollen, denen der Autor keinen barrierefreien Namen zuweisen kann.

Das `aria-labelledby` Attribut wird **NICHT** unterstützt in:

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

- HTML {{HTMLElement('label')}} Element
- HTML {{HTMLElement('legend')}} Element
- HTML {{HTMLElement('caption')}} Element
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
